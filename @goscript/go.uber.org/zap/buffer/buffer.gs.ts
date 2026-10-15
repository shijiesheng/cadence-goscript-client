// Generated file based on buffer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as time from "@goscript/time/index.js"

import * as pool2 from "@goscript/go.uber.org/zap/internal/pool/index.js"

import * as __goscript_pool from "./pool.gs.ts"
import "@goscript/strconv/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/zap/internal/pool/index.js"
import "./pool.gs.ts"

$.registerTypePackagePath("go.uber.org/zap/buffer", ["buffer.Buffer"])

export class Buffer {
	public get bs(): $.Slice<number> {
		return this._fields.bs
	}

	public set bs(value: $.Slice<number>) {
		this._fields.bs = value
	}

	public get pool(): __goscript_pool.Pool {
		return this._fields.pool
	}

	public set pool(value: __goscript_pool.Pool) {
		this._fields.pool = value
	}

	public _fields: {
		bs: $.Slice<number>
		pool: __goscript_pool.Pool
	}

	constructor(init?: Partial<{bs?: $.Slice<number>, pool?: __goscript_pool.Pool}>, __goscriptValue?: boolean) {
		this._fields = {
			bs: init?.bs ?? (null! as $.Slice<number>),
			pool: init?.pool ? init.pool.clone() : new __goscript_pool.Pool(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Buffer {
		return new Buffer(this, true)
	}

	public __goscriptAssign(source: Buffer): void {
		const target = this._fields
		const values = source._fields
		target.bs = values.bs
		$.assignStruct(target.pool, values.pool)
	}

	public AppendBool(v: boolean): void {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b);
		;(b$ as Buffer).bs = strconv.AppendBool((b$ as Buffer).bs, v)
	}

	public AppendByte(v: number): void {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b);
		;(b$ as Buffer).bs = $.append((b$ as Buffer).bs, $.uint(v, 8), $.byteSliceHint)
	}

	public AppendBytes(v: $.Slice<number>): void {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b);
		;(b$ as Buffer).bs = $.appendSlice((b$ as Buffer).bs, v, $.byteSliceHint)
	}

	public AppendFloat(f: number, bitSize: number): void {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b);
		;(b$ as Buffer).bs = strconv.AppendFloat((b$ as Buffer).bs, f, 102, -1, bitSize)
	}

	public AppendInt(i: bigint): void {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b);
		;(b$ as Buffer).bs = strconv.AppendInt((b$ as Buffer).bs, i, 10)
	}

	public AppendString(s: string): void {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b);
		;(b$ as Buffer).bs = $.appendSlice((b$ as Buffer).bs, $.stringToBytes(s), $.byteSliceHint)
	}

	public AppendTime(t: time.Time, layout: string): void {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b);
		;(b$ as Buffer).bs = $.markAsStructValue($.cloneStructValue(t)).AppendFormat((b$ as Buffer).bs, layout)
	}

	public AppendUint(i: bigint): void {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b);
		;(b$ as Buffer).bs = strconv.AppendUint((b$ as Buffer).bs, i, 10)
	}

	public Bytes(): $.Slice<number> {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		return $.pointerValue<Buffer>(b).bs
	}

	public Cap(): number {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		return $.cap($.pointerValue<Buffer>(b).bs)
	}

	public Free(): void {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		$.markAsStructValue($.cloneStructValue($.pointerValue<Buffer>(b).pool)).put(b)
	}

	public Len(): number {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		return $.sliceLen($.pointerValue<Buffer>(b).bs)
	}

	public Reset(): void {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b);
		;(b$ as Buffer).bs = $.goSlice((b$ as Buffer).bs, undefined, 0)
	}

	public String(): string {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		return $.bytesToString($.pointerValue<Buffer>(b).bs)
	}

	public TrimNewline(): void {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b)
		{
			let i = $.sliceLen((b$ as Buffer).bs) - 1
			if (i >= 0) {
				if ($.arrayIndex((b$ as Buffer).bs!, i) == 10) {
					;(b$ as Buffer).bs = $.goSlice((b$ as Buffer).bs, undefined, i)
				}
			}
		}
	}

	public Write(bs: $.Slice<number>): [number, $.GoError] {
		let b: Buffer | $.VarRef<Buffer> | null = this;
		const b$: Buffer = b == null ? $.pointerTarget<Buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Buffer>(b);
		;(b$ as Buffer).bs = $.appendSlice((b$ as Buffer).bs, bs, $.byteSliceHint)
		return [$.sliceLen(bs), null]
	}

	public WriteByte(v: number): $.GoError {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).AppendByte(v) : Buffer.prototype.AppendByte.call(b, v))
		return null
	}

	public WriteString(s: string): [number, $.GoError] {
		const b: Buffer | $.VarRef<Buffer> | null = this;
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Buffer).AppendString(s) : Buffer.prototype.AppendString.call(b, s))
		return [$.stringLen(s), null]
	}

	static __typeInfo = $.registerStructType(
		"buffer.Buffer",
		() => new Buffer(),
		() => [$.methodSignature("AppendBool", [["v", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("AppendByte", [["v", /* @__PURE__ */ $.basicType("uint8")]], [], true), $.methodSignature("AppendBytes", [["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("AppendFloat", [["f", /* @__PURE__ */ $.basicType("float64")], ["bitSize", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("AppendInt", [["i", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("AppendString", [["s", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("AppendTime", [["t", "time.Time"], ["layout", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("AppendUint", [["i", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Cap", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Free", [], [], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("TrimNewline", [], [], true), $.methodSignature("Write", [["bs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteByte", [["v", /* @__PURE__ */ $.basicType("uint8")]], ["error"], true), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		Buffer,
		() => [/* @__PURE__ */ $.structField("bs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "go.uber.org/zap/buffer" }), /* @__PURE__ */ $.structField("pool", "buffer.Pool", [1], 24, false, { pkgPath: "go.uber.org/zap/buffer" })]
	)
}

export const _size: number = 1024
