// Generated file based on concurrency.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as semaphore from "@goscript/github.com/marusama/semaphore/v2/index.js"

import * as __goscript_resizable_permit from "./resizable_permit.gs.ts"
import "@goscript/context/index.js"
import "@goscript/github.com/marusama/semaphore/v2/index.js"
import "./resizable_permit.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal/worker", ["worker.ConcurrencyLimit", "worker.Permit"])

export type Permit = {
	Acquire(_p0: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
	AcquireChan(_p0: context.Context | null): [$.Channel<{}> | null, (() => void) | null] | globalThis.Promise<[$.Channel<{}> | null, (() => void) | null]>
	Count(): number | globalThis.Promise<number>
	Quota(): number | globalThis.Promise<number>
	Release(): void
	SetQuota(_p0: number): void
}

$.registerInterfaceType(
	"worker.Permit",
	null,
	[$.methodSignature("Acquire", ["context.Context"], ["error"]), $.methodSignature("AcquireChan", ["context.Context"], [["channel", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")], ["done", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]]), $.methodSignature("Count", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Quota", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Release"), $.methodSignature("SetQuota", [/* @__PURE__ */ $.basicType("int")])]
);

export class ConcurrencyLimit {
	public get PollerPermit(): Permit | null {
		return this._fields.PollerPermit
	}

	public set PollerPermit(value: Permit | null) {
		this._fields.PollerPermit = value
	}

	public get TaskPermit(): Permit | null {
		return this._fields.TaskPermit
	}

	public set TaskPermit(value: Permit | null) {
		this._fields.TaskPermit = value
	}

	public _fields: {
		PollerPermit: Permit | null
		TaskPermit: Permit | null
	}

	constructor(init?: Partial<{PollerPermit?: Permit | null, TaskPermit?: Permit | null}>, __goscriptValue?: boolean) {
		this._fields = {
			PollerPermit: init?.PollerPermit ?? (null! as Permit | null),
			TaskPermit: init?.TaskPermit ?? (null! as Permit | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ConcurrencyLimit {
		return new ConcurrencyLimit(this, true)
	}

	public __goscriptAssign(source: ConcurrencyLimit): void {
		const target = this._fields
		const values = source._fields
		target.PollerPermit = $.assignFieldValue(target.PollerPermit, values.PollerPermit, "worker.Permit")
		target.TaskPermit = $.assignFieldValue(target.TaskPermit, values.TaskPermit, "worker.Permit")
	}

	static __typeInfo = $.registerStructType(
		"worker.ConcurrencyLimit",
		() => new ConcurrencyLimit(),
		() => [],
		ConcurrencyLimit,
		() => [/* @__PURE__ */ $.structField("PollerPermit", "worker.Permit", [0], 0, true), /* @__PURE__ */ $.structField("TaskPermit", "worker.Permit", [1], 16, true)]
	)
}
