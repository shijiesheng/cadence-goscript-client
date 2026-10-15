// Generated file based on nop.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_push from "./push.gs.ts"
import "./push.gs.ts"

$.registerTypePackagePath("go.uber.org/net/metrics/push", ["push.nop", "push.nopHistogram"])

export class nop {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nop {
		return new nop(this, true)
	}

	public __goscriptAssign(source: nop): void {
	}

	public NewCounter(_p0: __goscript_push.Spec): __goscript_push.Counter | null {
		const n: nop | $.VarRef<nop> | null = this;
		return $.interfaceValue<__goscript_push.Counter | null>(n, "*push.nop", /* @__PURE__ */ $.pointerType("push.nop"))
	}

	public NewGauge(_p0: __goscript_push.Spec): __goscript_push.Gauge | null {
		const n: nop | $.VarRef<nop> | null = this;
		return $.interfaceValue<__goscript_push.Gauge | null>(n, "*push.nop", /* @__PURE__ */ $.pointerType("push.nop"))
	}

	public NewHistogram(_p0: __goscript_push.HistogramSpec): __goscript_push.Histogram | null {
		const n: nop | $.VarRef<nop> | null = this;
		return $.interfaceValue<__goscript_push.Histogram | null>(new nopHistogram(), "*push.nopHistogram", /* @__PURE__ */ $.pointerType("push.nopHistogram"))
	}

	public Set(_p0: bigint): void {
		const n: nop | $.VarRef<nop> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"push.nop",
		() => new nop(),
		() => [$.methodSignature("NewCounter", ["push.Spec"], ["push.Counter"], true), $.methodSignature("NewGauge", ["push.Spec"], ["push.Gauge"], true), $.methodSignature("NewHistogram", ["push.HistogramSpec"], ["push.Histogram"], true), $.methodSignature("Set", [/* @__PURE__ */ $.basicType("int64")], [], true)],
		nop,
		() => []
	)
}

export class nopHistogram {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nopHistogram {
		return new nopHistogram(this, true)
	}

	public __goscriptAssign(source: nopHistogram): void {
	}

	public Set(_p0: bigint, _p1: bigint): void {
		const h: nopHistogram | $.VarRef<nopHistogram> | null = this;
	}

	public SetIndex(_p0: number, _p1: bigint, _p2: bigint): void {
		const h: nopHistogram | $.VarRef<nopHistogram> | null = this;
	}

	static __typeInfo = $.registerStructType(
		"push.nopHistogram",
		() => new nopHistogram(),
		() => [$.methodSignature("Set", [/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("int64")], [], true), $.methodSignature("SetIndex", [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("int64")], [], true)],
		nopHistogram,
		() => []
	)
}

export function NewNop(): __goscript_push.Target | null {
	return $.interfaceValue<__goscript_push.Target | null>(new nop(), "*push.nop", /* @__PURE__ */ $.pointerType("push.nop"))
}
