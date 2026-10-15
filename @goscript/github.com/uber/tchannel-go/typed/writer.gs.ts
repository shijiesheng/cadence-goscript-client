// Generated file based on writer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("github.com/uber/tchannel-go/typed", ["typed.intBuffer", "typed.Writer"])

export type intBuffer = Uint8Array

$.registerNamedType("typed.intBuffer", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8));

export class Writer {
	public get writer(): io.Writer | null {
		return this._fields.writer
	}

	public set writer(value: io.Writer | null) {
		this._fields.writer = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		writer: io.Writer | null
		err: $.GoError
	}

	constructor(init?: Partial<{writer?: io.Writer | null, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			writer: init?.writer ?? (null! as io.Writer | null),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Writer {
		return new Writer(this, true)
	}

	public __goscriptAssign(source: Writer): void {
		const target = this._fields
		const values = source._fields
		target.writer = $.assignFieldValue(target.writer, values.writer, "io.Writer")
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public Err(): $.GoError {
		const w: Writer | $.VarRef<Writer> | null = this;
		return $.pointerValue<Writer>(w).err
	}

	public async WriteBytes(b: $.Slice<number>): globalThis.Promise<void> {
		let w: Writer | $.VarRef<Writer> | null = this;
		const w$: Writer = w == null ? $.pointerTarget<Writer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<Writer>(w)
		if ((w$ as Writer).err != null) {
			return
		}

		{
			let [, err] = await $.pointerValue<Exclude<io.Writer, null>>((w$ as Writer).writer).Write(b)
			if (err != null) {
				;(w$ as Writer).err = err
			}
		}
	}

	public async WriteLen16Bytes(b: $.Slice<number>): globalThis.Promise<void> {
		const w: Writer | $.VarRef<Writer> | null = this;
		if ($.pointerValue<Writer>(w).err != null) {
			return
		}

		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as Writer).WriteUint16($.uint($.sliceLen(b), 16)) : Writer.prototype.WriteUint16.call(w, $.uint($.sliceLen(b), 16)))
		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as Writer).WriteBytes(b) : Writer.prototype.WriteBytes.call(w, b))
	}

	public async WriteUint16(n: number): globalThis.Promise<void> {
		let w: Writer | $.VarRef<Writer> | null = this;
		using __defer = new $.DisposableStack()
		const w$: Writer = w == null ? $.pointerTarget<Writer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<Writer>(w)
		if ((w$ as Writer).err != null) {
			return
		}

		let sizeBuf: $.VarRef<intBuffer> | null = $.mustTypeAssert<$.VarRef<intBuffer> | null>(await intBufferPool.value.Get(), /* @__PURE__ */ $.pointerType("typed.intBuffer"))
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (x: any) => __receiver.Put(x))(intBufferPool.value), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "sync.(*Pool).Put-fm")
		const __goscriptDeferArg0 = $.interfaceValue(sizeBuf, "*typed.intBuffer", /* @__PURE__ */ $.pointerType("typed.intBuffer"))
		__defer.defer(() => { __goscriptDeferCallee0(__goscriptDeferArg0) })

		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint16($.goSlice($.pointerValue<Uint8Array>(sizeBuf), undefined, 2), n)
		{
			let [, err] = await $.pointerValue<Exclude<io.Writer, null>>((w$ as Writer).writer).Write($.goSlice($.pointerValue<Uint8Array>(sizeBuf), undefined, 2))
			if (err != null) {
				;(w$ as Writer).err = err
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"typed.Writer",
		() => new Writer(),
		() => [$.methodSignature("Err", [], ["error"], true), $.methodSignature("WriteBytes", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("WriteLen16Bytes", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("WriteUint16", [["n", /* @__PURE__ */ $.basicType("uint16")]], [], true)],
		Writer,
		() => [/* @__PURE__ */ $.structField("writer", "io.Writer", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go/typed" }), /* @__PURE__ */ $.structField("err", "error", [1], 16, false, { pkgPath: "github.com/uber/tchannel-go/typed" })]
	)
}

export let intBufferPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue($.varRef<intBuffer>($.arrayValue(new Uint8Array(8))), "*typed.intBuffer", /* @__PURE__ */ $.pointerType("typed.intBuffer"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_intBufferPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(intBufferPool.value, __goscriptValue)
}

export function NewWriter(w: io.Writer | null): Writer | $.VarRef<Writer> | null {
	return new Writer({writer: w})
}
