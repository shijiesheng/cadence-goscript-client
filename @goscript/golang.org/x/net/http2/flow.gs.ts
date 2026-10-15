// Generated file based on flow.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_http2 from "./http2.gs.ts"
import "./http2.gs.ts"

$.registerTypePackagePath("golang.org/x/net/http2", ["http2.inflow", "http2.outflow"])

export class inflow {
	public get avail(): number {
		return this._fields.avail
	}

	public set avail(value: number) {
		this._fields.avail = value
	}

	public get unsent(): number {
		return this._fields.unsent
	}

	public set unsent(value: number) {
		this._fields.unsent = value
	}

	public _fields: {
		avail: number
		unsent: number
	}

	constructor(init?: Partial<{avail?: number, unsent?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			avail: init?.avail ?? (0 as number),
			unsent: init?.unsent ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): inflow {
		return new inflow(this, true)
	}

	public __goscriptAssign(source: inflow): void {
		const target = this._fields
		const values = source._fields
		target.avail = values.avail
		target.unsent = values.unsent
	}

	public add(n: number): number {
		let f: inflow | $.VarRef<inflow> | null = this;
		let connAdd: number = 0
		const f$: inflow = f == null ? $.pointerTarget<inflow>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<inflow>(f)
		if (n < 0) {
			$.panic("negative update")
		}
		let unsent = $.int64Add($.int64((f$ as inflow).unsent), $.int64(n))
		// "A sender MUST NOT allow a flow-control window to exceed 2^31-1 octets."
		// RFC 7540 Section 6.9.1.
		const maxWindow: number = 2147483647
		if (($.int64Add(unsent, $.int64((f$ as inflow).avail))) > 2147483647n) {
			$.panic("flow control update exceeds maximum window size")
		}
		;(f$ as inflow).unsent = $.int(unsent, 32)
		if (((f$ as inflow).unsent < 4096) && ((f$ as inflow).unsent < (f$ as inflow).avail)) {
			// If there aren't at least inflowMinRefresh bytes of window to send,
			// and this update won't at least double the window, buffer the update for later.
			return 0
		}
		;(f$ as inflow).avail = $.int((f$ as inflow).avail + ((f$ as inflow).unsent), 32);
		;(f$ as inflow).unsent = 0
		return $.int(unsent, 32)
	}

	public init(n: number): void {
		let f: inflow | $.VarRef<inflow> | null = this;
		$.pointerValue<inflow>(f).avail = n
	}

	public take(n: number): boolean {
		let f: inflow | $.VarRef<inflow> | null = this;
		const f$: inflow = f == null ? $.pointerTarget<inflow>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<inflow>(f)
		if (n > $.uint((f$ as inflow).avail, 32)) {
			return false
		}
		;(f$ as inflow).avail = $.int((f$ as inflow).avail - ($.int(n, 32)), 32)
		return true
	}

	static __typeInfo = $.registerStructType(
		"http2.inflow",
		() => new inflow(),
		() => [$.methodSignature("add", [["n", /* @__PURE__ */ $.basicType("int")]], [["connAdd", /* @__PURE__ */ $.basicType("int32")]], true), $.methodSignature("init", [["n", /* @__PURE__ */ $.basicType("int32")]], [], true), $.methodSignature("take", [["n", /* @__PURE__ */ $.basicType("uint32")]], [/* @__PURE__ */ $.basicType("bool")], true)],
		inflow,
		() => [/* @__PURE__ */ $.structField("avail", /* @__PURE__ */ $.basicType("int32"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("unsent", /* @__PURE__ */ $.basicType("int32"), [1], 4, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class outflow {
	public get _blank0(): __goscript_http2.incomparable {
		return this._fields._blank0
	}

	public set _blank0(value: __goscript_http2.incomparable) {
		this._fields._blank0 = value
	}

	// n is the number of DATA bytes we're allowed to send.
	// An outflow is kept both on a conn and a per-stream.
	public get n(): number {
		return this._fields.n
	}

	public set n(value: number) {
		this._fields.n = value
	}

	// conn points to the shared connection-level outflow that is
	// shared by all streams on that conn. It is nil for the outflow
	// that's on the conn directly.
	public get conn(): outflow | $.VarRef<outflow> | null {
		return this._fields.conn
	}

	public set conn(value: outflow | $.VarRef<outflow> | null) {
		this._fields.conn = value
	}

	public _fields: {
		_blank0: __goscript_http2.incomparable
		n: number
		conn: outflow | $.VarRef<outflow> | null
	}

	constructor(init?: Partial<{_blank0?: __goscript_http2.incomparable, n?: number, conn?: outflow | $.VarRef<outflow> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 !== undefined ? $.cloneArrayValue(init._blank0, "http2.incomparable") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			n: init?.n ?? (0 as number),
			conn: init?.conn ?? (null! as outflow | $.VarRef<outflow> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): outflow {
		return new outflow(this, true)
	}

	public __goscriptAssign(source: outflow): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = $.assignFieldValue(target._blank0, values._blank0, "http2.incomparable")
		target.n = values.n
		target.conn = values.conn
	}

	public add(n: number): boolean {
		let f: outflow | $.VarRef<outflow> | null = this;
		const f$: outflow = f == null ? $.pointerTarget<outflow>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<outflow>(f)
		let sum = $.int((((f$ as outflow).n + n) | 0), 32)
		if ((sum > n) == ((f$ as outflow).n > 0)) {
			;(f$ as outflow).n = sum
			return true
		}
		return false
	}

	public available(): number {
		const f: outflow | $.VarRef<outflow> | null = this;
		const f$: outflow = f == null ? $.pointerTarget<outflow>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<outflow>(f)
		let n = (f$ as outflow).n
		if (((f$ as outflow).conn != null) && ($.pointerValue<outflow>((f$ as outflow).conn).n < n)) {
			n = $.pointerValue<outflow>((f$ as outflow).conn).n
		}
		return n
	}

	public setConnFlow(cf: outflow | $.VarRef<outflow> | null): void {
		let f: outflow | $.VarRef<outflow> | null = this;
		$.pointerValue<outflow>(f).conn = cf
	}

	public take(n: number): void {
		let f: outflow | $.VarRef<outflow> | null = this;
		const f$: outflow = f == null ? $.pointerTarget<outflow>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<outflow>(f)
		if (n > (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as outflow).available() : outflow.prototype.available.call(f))) {
			$.panic("internal error: took too much")
		}
		;(f$ as outflow).n = $.int((f$ as outflow).n - (n), 32)
		if ((f$ as outflow).conn != null) {
			$.pointerValue<outflow>((f$ as outflow).conn).n = $.int($.pointerValue<outflow>((f$ as outflow).conn).n - (n), 32)
		}
	}

	static __typeInfo = $.registerStructType(
		"http2.outflow",
		() => new outflow(),
		() => [$.methodSignature("add", [["n", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("available", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("setConnFlow", [["cf", /* @__PURE__ */ $.pointerType("http2.outflow")]], [], true), $.methodSignature("take", [["n", /* @__PURE__ */ $.basicType("int32")]], [], true)],
		outflow,
		() => [/* @__PURE__ */ $.structField("_", "http2.incomparable", [0], 0, false, { key: "_blank0", pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("n", /* @__PURE__ */ $.basicType("int32"), [1], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("conn", /* @__PURE__ */ $.pointerType("http2.outflow"), [2], 8, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export const inflowMinRefresh: number = 4096

export function takeInflows(f1: inflow | $.VarRef<inflow> | null, f2: inflow | $.VarRef<inflow> | null, n: number): boolean {
	if ((n > $.uint($.pointerValue<inflow>(f1).avail, 32)) || (n > $.uint($.pointerValue<inflow>(f2).avail, 32))) {
		return false
	}
	$.pointerValue<inflow>(f1).avail = $.int($.pointerValue<inflow>(f1).avail - ($.int(n, 32)), 32)
	$.pointerValue<inflow>(f2).avail = $.int($.pointerValue<inflow>(f2).avail - ($.int(n, 32)), 32)
	return true
}
