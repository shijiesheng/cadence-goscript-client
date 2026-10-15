// Generated file based on batch.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as batch from "@goscript/go.uber.org/cadence/internal/batch/index.js"

import * as internal from "@goscript/go.uber.org/cadence/internal/index.js"

import * as __goscript_context from "./context.gs.ts"

import type * as __goscript_deterministic_wrappers from "./deterministic_wrappers.gs.ts"
import "@goscript/go.uber.org/cadence/internal/batch/index.js"
import "@goscript/go.uber.org/cadence/internal/index.js"
import "./context.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/workflow", ["workflow.BatchFuture"])

export type BatchFuture = {
	Get(ctx: __goscript_context.Context | null, valuePtr: any): $.GoError | globalThis.Promise<$.GoError>
	GetFutures(): $.Slice<__goscript_deterministic_wrappers.Future | null>
	IsReady(): boolean | globalThis.Promise<boolean>
}

$.registerInterfaceType(
	"workflow.BatchFuture",
	null,
	[$.methodSignature("Get", [["ctx", "internal.Context"], ["valuePtr", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("GetFutures", [], [/* @__PURE__ */ $.sliceType("internal.Future")]), $.methodSignature("IsReady", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export async function NewBatchFuture(ctx: __goscript_context.Context | null, batchSize: number, factories: $.Slice<((ctx: __goscript_context.Context | null) => __goscript_deterministic_wrappers.Future | null | globalThis.Promise<__goscript_deterministic_wrappers.Future | null>) | null>): globalThis.Promise<[BatchFuture | null, $.GoError]> {
	const __goscriptReturn0 = await batch.NewBatchFuture(ctx, batchSize, factories)
	return [$.interfaceValue<BatchFuture | null>(__goscriptReturn0[0], "*batch.BatchFuture", /* @__PURE__ */ $.pointerType("batch.BatchFuture")), __goscriptReturn0[1]]
	throw new globalThis.Error("goscript: unreachable return")
}
