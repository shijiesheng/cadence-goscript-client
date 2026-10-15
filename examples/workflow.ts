import * as $ from "@goscript/builtin/index.js"
import type { Context as StdContext } from "@goscript/context/index.js"
import * as time from "@goscript/time/index.js"
import * as zap from "@goscript/go.uber.org/zap/index.js"
import * as workflow from "@goscript/go.uber.org/cadence/workflow/index.js"
import {
	ActivityOptions,
	RegisterActivity,
} from "@goscript/go.uber.org/cadence/internal/index.js"

/** Simple greeting activity invoked by {@link HelloWorldWorkflow}. */
export async function HelloActivity(
	_ctx: StdContext,
	name: string,
): globalThis.Promise<[string, $.GoError]> {
	return [$.concatString("Hello, ", name), null]
}

export const HelloActivityDefinition = $.functionValue(
	HelloActivity,
	{
		kind: $.TypeKind.Function,
		params: ["context.Context", $.basicType("string")],
		results: [$.basicType("string"), "error"],
	},
	"workspace.HelloActivity",
)

/**
 * HelloWorldWorkflow runs a greeting activity and returns its result.
 *
 * Mirrors the classic Cadence Go hello-world sample, expressed against the
 * goscript-translated `go.uber.org/cadence/workflow` APIs.
 */
export async function HelloWorldWorkflow(
	ctx: workflow.Context,
	name: string,
): globalThis.Promise<[string, $.GoError]> {
	ctx = await workflow.WithActivityOptions(
		ctx,
		new ActivityOptions({
			ScheduleToStartTimeout: time.Minute,
			StartToCloseTimeout: time.Minute,
		}, true),
	)

	const logger = await workflow.GetLogger(ctx)
	await $.pointerValue(logger!).Info(
		"HelloWorld workflow started",
		$.arrayToSlice([zap.String("name", name)]),
	)

	const greeting = $.varRef("")
	const future = await workflow.ExecuteActivity(
		ctx,
		HelloActivityDefinition,
		$.arrayToSlice<any>([name]),
	)
	const err = await future!.Get(
		ctx,
		$.interfaceValue(
			greeting,
			"*string",
			$.pointerType($.basicType("string")),
		),
	)
	if (err != null) {
		await $.pointerValue(logger!).Error(
			"HelloActivity failed",
			$.arrayToSlice([zap.Error(err)]),
		)
		return ["", err]
	}

	await $.pointerValue(logger!).Info(
		"HelloWorld workflow completed",
		$.arrayToSlice([zap.String("greeting", greeting.value)]),
	)
	return [greeting.value, null]
}

export const HelloWorldWorkflowDefinition = $.functionValue(
	HelloWorldWorkflow,
	{
		kind: $.TypeKind.Function,
		params: ["internal.Context", $.basicType("string")],
		results: [$.basicType("string"), "error"],
	},
	"workspace.HelloWorldWorkflow",
)

/** Register the workflow and activity with the global Cadence registry. */
export async function Register(): globalThis.Promise<void> {
	await workflow.Register(HelloWorldWorkflowDefinition)
	await RegisterActivity(HelloActivityDefinition)
}
