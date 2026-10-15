// Generated file based on workerstats_noop.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as __goscript_types from "./types.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal/common/debug", ["debug.pollerTrackerNoopImpl", "debug.stopperNoopImpl", "debug.activityTrackerNoopImpl"])

export class pollerTrackerNoopImpl {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pollerTrackerNoopImpl {
		return new pollerTrackerNoopImpl(this, true)
	}

	public __goscriptAssign(source: pollerTrackerNoopImpl): void {
	}

	public Start(): __goscript_types.Stopper | null {
		const lc: pollerTrackerNoopImpl | $.VarRef<pollerTrackerNoopImpl> | null = this;
		return $.interfaceValue<__goscript_types.Stopper | null>(new stopperNoopImpl(), "*debug.stopperNoopImpl", /* @__PURE__ */ $.pointerType("debug.stopperNoopImpl"))
	}

	public Stats(): number {
		const lc: pollerTrackerNoopImpl | $.VarRef<pollerTrackerNoopImpl> | null = this;
		return 0
	}

	static __typeInfo = $.registerStructType(
		"debug.pollerTrackerNoopImpl",
		() => new pollerTrackerNoopImpl(),
		() => [$.methodSignature("Start", [], ["debug.Stopper"], true), $.methodSignature("Stats", [], [/* @__PURE__ */ $.basicType("int32")], true)],
		pollerTrackerNoopImpl,
		() => []
	)
}

export class stopperNoopImpl {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): stopperNoopImpl {
		return new stopperNoopImpl(this, true)
	}

	public __goscriptAssign(source: stopperNoopImpl): void {
	}

	public Stop(): void {
		const r: stopperNoopImpl | $.VarRef<stopperNoopImpl> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"debug.stopperNoopImpl",
		() => new stopperNoopImpl(),
		() => [$.methodSignature("Stop", [], [], true)],
		stopperNoopImpl,
		() => []
	)
}

export class activityTrackerNoopImpl {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): activityTrackerNoopImpl {
		return new activityTrackerNoopImpl(this, true)
	}

	public __goscriptAssign(source: activityTrackerNoopImpl): void {
	}

	public Start(info: __goscript_types.ActivityInfo): __goscript_types.Stopper | null {
		const at: activityTrackerNoopImpl | $.VarRef<activityTrackerNoopImpl> | null = this;
		return $.interfaceValue<__goscript_types.Stopper | null>(new stopperNoopImpl(), "*debug.stopperNoopImpl", /* @__PURE__ */ $.pointerType("debug.stopperNoopImpl"))
	}

	public Stats(): __goscript_types.Activities {
		const at: activityTrackerNoopImpl | $.VarRef<activityTrackerNoopImpl> | null = this;
		return (null as __goscript_types.Activities)
	}

	static __typeInfo = $.registerStructType(
		"debug.activityTrackerNoopImpl",
		() => new activityTrackerNoopImpl(),
		() => [$.methodSignature("Start", [["info", "debug.ActivityInfo"]], ["debug.Stopper"], true), $.methodSignature("Stats", [], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Info", "debug.ActivityInfo", [0], 0, true), /* @__PURE__ */ $.structField("Count", /* @__PURE__ */ $.basicType("int64"), [1], 32, true)] }, "debug.Activities")], true)],
		activityTrackerNoopImpl,
		() => []
	)
}

export function NewNoopPollerTracker(): __goscript_types.PollerTracker | null {
	return $.interfaceValue<__goscript_types.PollerTracker | null>(new pollerTrackerNoopImpl(), "*debug.pollerTrackerNoopImpl", /* @__PURE__ */ $.pointerType("debug.pollerTrackerNoopImpl"))
}

export function NewNoopActivityTracker(): __goscript_types.ActivityTracker | null {
	return $.interfaceValue<__goscript_types.ActivityTracker | null>(new activityTrackerNoopImpl(), "*debug.activityTrackerNoopImpl", /* @__PURE__ */ $.pointerType("debug.activityTrackerNoopImpl"))
}
