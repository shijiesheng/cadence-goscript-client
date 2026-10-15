// Generated file based on internal_time.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"
import "@goscript/time/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.timerInfo", "internal.workflowTimerClient"])

export type workflowTimerClient = {
	NewTimer(d: time.Duration, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): timerInfo | $.VarRef<timerInfo> | null | globalThis.Promise<timerInfo | $.VarRef<timerInfo> | null>
	Now(): time.Time | globalThis.Promise<time.Time>
	RequestCancelTimer(timerID: string): void
}

$.registerInterfaceType(
	"internal.workflowTimerClient",
	null,
	[$.methodSignature("NewTimer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.timerInfo")]), $.methodSignature("Now", [], ["time.Time"]), $.methodSignature("RequestCancelTimer", [["timerID", /* @__PURE__ */ $.basicType("string")]])]
);

export class timerInfo {
	public get timerID(): string {
		return this._fields.timerID
	}

	public set timerID(value: string) {
		this._fields.timerID = value
	}

	public _fields: {
		timerID: string
	}

	constructor(init?: Partial<{timerID?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			timerID: init?.timerID ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): timerInfo {
		return new timerInfo(this, true)
	}

	public __goscriptAssign(source: timerInfo): void {
		const target = this._fields
		const values = source._fields
		target.timerID = values.timerID
	}

	static __typeInfo = $.registerStructType(
		"internal.timerInfo",
		() => new timerInfo(),
		() => [],
		timerInfo,
		() => [/* @__PURE__ */ $.structField("timerID", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}
