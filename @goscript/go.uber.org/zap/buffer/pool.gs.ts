// Generated file based on pool.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as pool from "@goscript/go.uber.org/zap/internal/pool/index.js"

import type * as time from "@goscript/time/index.js"

import * as __goscript_buffer from "./buffer.gs.ts"
import "@goscript/go.uber.org/zap/internal/pool/index.js"
import "./buffer.gs.ts"

$.registerTypePackagePath("go.uber.org/zap/buffer", ["buffer.Pool"])

export class Pool {
	public get p(): pool.Pool | $.VarRef<pool.Pool> | null {
		return this._fields.p
	}

	public set p(value: pool.Pool | $.VarRef<pool.Pool> | null) {
		this._fields.p = value
	}

	public _fields: {
		p: pool.Pool | $.VarRef<pool.Pool> | null
	}

	constructor(init?: Partial<{p?: pool.Pool | $.VarRef<pool.Pool> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			p: init?.p ?? (null! as pool.Pool | $.VarRef<pool.Pool> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Pool {
		return new Pool(this, true)
	}

	public __goscriptAssign(source: Pool): void {
		const target = this._fields
		const values = source._fields
		target.p = values.p
	}

	public async Get(): globalThis.Promise<__goscript_buffer.Buffer | $.VarRef<__goscript_buffer.Buffer> | null> {
		const p = this;
		let buf: __goscript_buffer.Buffer | $.VarRef<__goscript_buffer.Buffer> | null = (await pool.Pool.prototype.Get.call(p.p, __goscriptStatic0()) as __goscript_buffer.Buffer | $.VarRef<__goscript_buffer.Buffer> | null)
		void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as __goscript_buffer.Buffer).Reset() : __goscript_buffer.Buffer.prototype.Reset.call(buf))
		$.assignStruct($.pointerValue<__goscript_buffer.Buffer>(buf).pool, p)
		return buf
	}

	public put(buf: __goscript_buffer.Buffer | $.VarRef<__goscript_buffer.Buffer> | null): void {
		const p = this;
		pool.Pool.prototype.Put.call(p.p, __goscriptStatic0(), buf)
	}

	static __typeInfo = $.registerStructType(
		"buffer.Pool",
		() => new Pool(),
		() => [$.methodSignature("Get", [], [/* @__PURE__ */ $.pointerType("buffer.Buffer")]), $.methodSignature("put", [["buf", /* @__PURE__ */ $.pointerType("buffer.Buffer")]])],
		Pool,
		() => [/* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.pointerType("pool.Pool"), [0], 0, false, { pkgPath: "go.uber.org/zap/buffer" })]
	)
}

export function NewPool(): Pool {
	return (() => { const __goscriptLiteralField0 = pool.New(__goscriptStatic0(), $.functionValue((): __goscript_buffer.Buffer | $.VarRef<__goscript_buffer.Buffer> | null => {
		return new __goscript_buffer.Buffer({bs: $.makeSlice<number>(0, 1024, "byte")})
	}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType("buffer.Buffer")] } as $.FunctionTypeInfo))); return new Pool({p: __goscriptLiteralField0}, true) })()
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.pointerType("buffer.Buffer"), zero: () => null, methods: {AppendBool: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendBool(...$.stripGenericTypeArgs(args)), AppendByte: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendByte(...$.stripGenericTypeArgs(args)), AppendBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendBytes(...$.stripGenericTypeArgs(args)), AppendFloat: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendFloat(...$.stripGenericTypeArgs(args)), AppendInt: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendInt(...$.stripGenericTypeArgs(args)), AppendString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendString(...$.stripGenericTypeArgs(args)), AppendTime: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendTime(...$.stripGenericTypeArgs(args)), AppendUint: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendUint(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), Cap: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Cap(...$.stripGenericTypeArgs(args)), Free: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Free(...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Len(...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Reset(...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => $.pointerValue(receiver).String(...$.stripGenericTypeArgs(args)), TrimNewline: (receiver: any, ...args: any[]) => $.pointerValue(receiver).TrimNewline(...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Write(...$.stripGenericTypeArgs(args)), WriteByte: (receiver: any, ...args: any[]) => $.pointerValue(receiver).WriteByte(...$.stripGenericTypeArgs(args)), WriteString: (receiver: any, ...args: any[]) => $.pointerValue(receiver).WriteString(...$.stripGenericTypeArgs(args))} }})
}
