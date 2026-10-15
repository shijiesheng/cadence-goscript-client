// Generated file based on reader.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("github.com/uber/tchannel-go/typed", ["typed.Reader"])

export class Reader {
	public get reader(): io.Reader | null {
		return this._fields.reader
	}

	public set reader(value: io.Reader | null) {
		this._fields.reader = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get buf(): Uint8Array {
		return this._fields.buf
	}

	public set buf(value: Uint8Array) {
		this._fields.buf = value
	}

	public _fields: {
		reader: io.Reader | null
		err: $.GoError
		buf: Uint8Array
	}

	constructor(init?: Partial<{reader?: io.Reader | null, err?: $.GoError, buf?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			reader: init?.reader ?? (null! as io.Reader | null),
			err: init?.err ?? (null! as $.GoError),
			buf: init?.buf !== undefined ? $.cloneArrayValue(init.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32)) : $.arrayValue(new Uint8Array(32))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Reader {
		return new Reader(this, true)
	}

	public __goscriptAssign(source: Reader): void {
		const target = this._fields
		const values = source._fields
		target.reader = $.assignFieldValue(target.reader, values.reader, "io.Reader")
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.buf = $.assignFieldValue(target.buf, values.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))
	}

	public Err(): $.GoError {
		const r: Reader | $.VarRef<Reader> | null = this;
		return $.pointerValue<Reader>(r).err
	}

	public async ReadLen16String(): globalThis.Promise<string> {
		const r: Reader | $.VarRef<Reader> | null = this;
		let len = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).ReadUint16() : Reader.prototype.ReadUint16.call(r))
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).ReadString($.int(len)) : Reader.prototype.ReadString.call(r, $.int(len)))
	}

	public async ReadString(n: number): globalThis.Promise<string> {
		let r: Reader | $.VarRef<Reader> | null = this;
		const r$: Reader = r == null ? $.pointerTarget<Reader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Reader>(r)
		if ((r$ as Reader).err != null) {
			return ""
		}

		let buf: $.Slice<number> = null! as $.Slice<number>
		if (n <= 32) {
			buf = $.goSlice((r$ as Reader).buf, undefined, n)
		} else {
			buf = $.makeSlice<number>(n, undefined, "byte")
		}

		let readN: number = 0
		let __goscriptTuple0: any = await io.ReadFull($.pointerValueOrNil((r$ as Reader).reader)!, buf)
		readN = __goscriptTuple0[0];
		;(r$ as Reader).err = __goscriptTuple0[1]
		if (readN < n) {
			return ""
		}
		let s = $.bytesToString(buf)

		return s
	}

	public async ReadUint16(): globalThis.Promise<number> {
		let r: Reader | $.VarRef<Reader> | null = this;
		const r$: Reader = r == null ? $.pointerTarget<Reader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Reader>(r)
		if ((r$ as Reader).err != null) {
			return 0
		}

		let buf: $.Slice<number> = $.goSlice((r$ as Reader).buf, undefined, 2)

		let readN: number = 0
		let __goscriptTuple1: any = await io.ReadFull($.pointerValueOrNil((r$ as Reader).reader)!, buf)
		readN = __goscriptTuple1[0];
		;(r$ as Reader).err = __goscriptTuple1[1]
		if (readN < 2) {
			return 0
		}
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint16(buf)
	}

	public Release(): void {
		const r: Reader | $.VarRef<Reader> | null = this;
		readerPool.value.Put($.interfaceValue(r, "*typed.Reader", /* @__PURE__ */ $.pointerType("typed.Reader")))
	}

	static __typeInfo = $.registerStructType(
		"typed.Reader",
		() => new Reader(),
		() => [$.methodSignature("Err", [], ["error"], true), $.methodSignature("ReadLen16String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ReadString", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ReadUint16", [], [/* @__PURE__ */ $.basicType("uint16")], true), $.methodSignature("Release", [], [], true)],
		Reader,
		() => [/* @__PURE__ */ $.structField("reader", "io.Reader", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go/typed" }), /* @__PURE__ */ $.structField("err", "error", [1], 16, false, { pkgPath: "github.com/uber/tchannel-go/typed" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32), [2], 32, false, { pkgPath: "github.com/uber/tchannel-go/typed" })]
	)
}

export const maxPoolStringLen: number = 32

export let readerPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(new Reader(), "*typed.Reader", /* @__PURE__ */ $.pointerType("typed.Reader"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_readerPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(readerPool.value, __goscriptValue)
}

export async function NewReader(reader: io.Reader | null): globalThis.Promise<Reader | $.VarRef<Reader> | null> {
	let r: Reader | $.VarRef<Reader> | null = $.mustTypeAssert<Reader | $.VarRef<Reader> | null>(await readerPool.value.Get(), /* @__PURE__ */ $.pointerType("typed.Reader"))
	let r$: Reader = r == null ? $.pointerTarget<Reader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Reader>(r);
	;(r$ as Reader).reader = reader;
	;(r$ as Reader).err = null
	return r
}
