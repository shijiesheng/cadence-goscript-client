// Generated file based on memory_buffer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript_transport from "./transport.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TMemoryBuffer", "thrift.TMemoryBufferTransportFactory"])

export class TMemoryBuffer {
	public get Buffer(): bytes.Buffer | $.VarRef<bytes.Buffer> | null {
		return this._fields.Buffer
	}

	public set Buffer(value: bytes.Buffer | $.VarRef<bytes.Buffer> | null) {
		this._fields.Buffer = value
	}

	public get size(): number {
		return this._fields.size
	}

	public set size(value: number) {
		this._fields.size = value
	}

	public _fields: {
		Buffer: bytes.Buffer | $.VarRef<bytes.Buffer> | null
		size: number
	}

	constructor(init?: Partial<{Buffer?: bytes.Buffer | $.VarRef<bytes.Buffer> | null, size?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Buffer: init?.Buffer ?? (null! as bytes.Buffer | $.VarRef<bytes.Buffer> | null),
			size: init?.size ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TMemoryBuffer {
		return new TMemoryBuffer(this, true)
	}

	public __goscriptAssign(source: TMemoryBuffer): void {
		const target = this._fields
		const values = source._fields
		target.Buffer = values.Buffer
		target.size = values.size
	}

	public Close(): $.GoError {
		const p: TMemoryBuffer | $.VarRef<TMemoryBuffer> | null = this;
		bytes.Buffer.prototype.Reset.call($.pointerValue<bytes.Buffer>($.pointerValue<TMemoryBuffer>(p).Buffer))
		return null
	}

	public Flush(ctx: context.Context | null): $.GoError {
		const p: TMemoryBuffer | $.VarRef<TMemoryBuffer> | null = this;
		return null
	}

	public IsOpen(): boolean {
		const p: TMemoryBuffer | $.VarRef<TMemoryBuffer> | null = this;
		return true
	}

	public Open(): $.GoError {
		const p: TMemoryBuffer | $.VarRef<TMemoryBuffer> | null = this;
		return null
	}

	public RemainingBytes(): bigint {
		const p: TMemoryBuffer | $.VarRef<TMemoryBuffer> | null = this;
		let num_bytes: bigint = 0n
		return $.uint64(bytes.Buffer.prototype.Len.call($.pointerValue<bytes.Buffer>($.pointerValue<TMemoryBuffer>(p).Buffer)))
	}

	public Available(): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).Available()
	}

	public AvailableBuffer(): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).AvailableBuffer()
	}

	public Bytes(): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).Bytes()
	}

	public Cap(): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).Cap()
	}

	public Grow(n: any): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).Grow(n)
	}

	public Len(): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).Len()
	}

	public Next(n: any): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).Next(n)
	}

	public Peek(n: any): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).Peek(n)
	}

	public Read(p: any): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).Read(p)
	}

	public ReadByte(): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).ReadByte()
	}

	public ReadBytes(delim: any): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).ReadBytes(delim)
	}

	public ReadFrom(r: any): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).ReadFrom(r)
	}

	public ReadRune(): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).ReadRune()
	}

	public ReadString(delim: any): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).ReadString(delim)
	}

	public Reset(): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).Reset()
	}

	public String(): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).String()
	}

	public Truncate(n: any): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).Truncate(n)
	}

	public UnreadByte(): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).UnreadByte()
	}

	public UnreadRune(): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).UnreadRune()
	}

	public Write(p: any): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).Write(p)
	}

	public WriteByte(c: any): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).WriteByte(c)
	}

	public WriteRune(r: any): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).WriteRune(r)
	}

	public WriteString(s: any): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).WriteString(s)
	}

	public WriteTo(w: any): any {
		return $.pointerValue<bytes.Buffer>(this.Buffer).WriteTo(w)
	}

	static __typeInfo = $.registerStructType(
		"thrift.TMemoryBuffer",
		() => new TMemoryBuffer(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Flush", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("IsOpen", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Open", [], ["error"], true), $.methodSignature("RemainingBytes", [], [["num_bytes", /* @__PURE__ */ $.basicType("uint64")]], true), $.methodSignature("Available", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("AvailableBuffer", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Cap", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Grow", [["n", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Next", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Peek", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadByte", [], [/* @__PURE__ */ $.basicType("uint8"), "error"]), $.methodSignature("ReadBytes", [["delim", /* @__PURE__ */ $.basicType("uint8")]], [["line", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]]), $.methodSignature("ReadFrom", [["r", "io.Reader"]], [["n", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]]), $.methodSignature("ReadRune", [], [["r", /* @__PURE__ */ $.basicType("int32")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadString", [["delim", /* @__PURE__ */ $.basicType("uint8")]], [["line", /* @__PURE__ */ $.basicType("string")], ["err", "error"]]), $.methodSignature("Reset"), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["n", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("UnreadByte", [], ["error"]), $.methodSignature("UnreadRune", [], ["error"]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("WriteByte", [["c", /* @__PURE__ */ $.basicType("uint8")]], ["error"]), $.methodSignature("WriteRune", [["r", /* @__PURE__ */ $.basicType("int32")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("WriteTo", [["w", "io.Writer"]], [["n", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]])],
		TMemoryBuffer,
		() => [/* @__PURE__ */ $.structField("Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("size", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export class TMemoryBufferTransportFactory {
	public get size(): number {
		return this._fields.size
	}

	public set size(value: number) {
		this._fields.size = value
	}

	public _fields: {
		size: number
	}

	constructor(init?: Partial<{size?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			size: init?.size ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TMemoryBufferTransportFactory {
		return new TMemoryBufferTransportFactory(this, true)
	}

	public __goscriptAssign(source: TMemoryBufferTransportFactory): void {
		const target = this._fields
		const values = source._fields
		target.size = values.size
	}

	public GetTransport(trans: __goscript_transport.TTransport | null): [__goscript_transport.TTransport | null, $.GoError] {
		const p: TMemoryBufferTransportFactory | $.VarRef<TMemoryBufferTransportFactory> | null = this;
		if (trans != null) {
			let __goscriptTuple0: any = $.typeAssertTuple<TMemoryBuffer | $.VarRef<TMemoryBuffer> | null>(trans, /* @__PURE__ */ $.pointerType("thrift.TMemoryBuffer"))
			let t: TMemoryBuffer | $.VarRef<TMemoryBuffer> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			let t$: TMemoryBuffer = t == null ? $.pointerTarget<TMemoryBuffer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TMemoryBuffer>(t)
			if (ok && ((t$ as TMemoryBuffer).size > 0)) {
				return [$.interfaceValue<__goscript_transport.TTransport | null>(NewTMemoryBufferLen((t$ as TMemoryBuffer).size), "*thrift.TMemoryBuffer", /* @__PURE__ */ $.pointerType("thrift.TMemoryBuffer")), null]
			}
		}
		return [$.interfaceValue<__goscript_transport.TTransport | null>(NewTMemoryBufferLen($.pointerValue<TMemoryBufferTransportFactory>(p).size), "*thrift.TMemoryBuffer", /* @__PURE__ */ $.pointerType("thrift.TMemoryBuffer")), null]
	}

	static __typeInfo = $.registerStructType(
		"thrift.TMemoryBufferTransportFactory",
		() => new TMemoryBufferTransportFactory(),
		() => [$.methodSignature("GetTransport", [["trans", "thrift.TTransport"]], ["thrift.TTransport", "error"], true)],
		TMemoryBufferTransportFactory,
		() => [/* @__PURE__ */ $.structField("size", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export function NewTMemoryBufferTransportFactory(size: number): TMemoryBufferTransportFactory | $.VarRef<TMemoryBufferTransportFactory> | null {
	return new TMemoryBufferTransportFactory({size: size})
}

export function NewTMemoryBuffer(): TMemoryBuffer | $.VarRef<TMemoryBuffer> | null {
	return new TMemoryBuffer({Buffer: new bytes.Buffer(), size: 0})
}

export function NewTMemoryBufferLen(size: number): TMemoryBuffer | $.VarRef<TMemoryBuffer> | null {
	let buf: $.Slice<number> = $.makeSlice<number>(0, size, "byte")
	return (() => { const __goscriptLiteralField0 = bytes.NewBuffer(buf); return new TMemoryBuffer({Buffer: __goscriptLiteralField0, size: size}) })()
}
