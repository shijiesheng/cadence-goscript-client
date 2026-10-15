// Generated file based on encode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_hpack from "./hpack.gs.ts"

import * as __goscript_huffman from "./huffman.gs.ts"

import * as __goscript_static_table from "./static_table.gs.ts"

import * as __goscript_tables from "./tables.gs.ts"
import "@goscript/io/index.js"
import "./hpack.gs.ts"
import "./huffman.gs.ts"
import "./static_table.gs.ts"
import "./tables.gs.ts"

$.registerTypePackagePath("golang.org/x/net/http2/hpack", ["hpack.Encoder"])

export class Encoder {
	public get dynTab(): __goscript_hpack.dynamicTable {
		return this._fields.dynTab
	}

	public set dynTab(value: __goscript_hpack.dynamicTable) {
		this._fields.dynTab = value
	}

	// minSize is the minimum table size set by
	// SetMaxDynamicTableSize after the previous Header Table Size
	// Update.
	public get minSize(): number {
		return this._fields.minSize
	}

	public set minSize(value: number) {
		this._fields.minSize = value
	}

	// maxSizeLimit is the maximum table size this encoder
	// supports. This will protect the encoder from too large
	// size.
	public get maxSizeLimit(): number {
		return this._fields.maxSizeLimit
	}

	public set maxSizeLimit(value: number) {
		this._fields.maxSizeLimit = value
	}

	// tableSizeUpdate indicates whether "Header Table Size
	// Update" is required.
	public get tableSizeUpdate(): boolean {
		return this._fields.tableSizeUpdate
	}

	public set tableSizeUpdate(value: boolean) {
		this._fields.tableSizeUpdate = value
	}

	public get w(): io.Writer | null {
		return this._fields.w
	}

	public set w(value: io.Writer | null) {
		this._fields.w = value
	}

	public get buf(): $.Slice<number> {
		return this._fields.buf
	}

	public set buf(value: $.Slice<number>) {
		this._fields.buf = value
	}

	public _fields: {
		dynTab: __goscript_hpack.dynamicTable
		minSize: number
		maxSizeLimit: number
		tableSizeUpdate: boolean
		w: io.Writer | null
		buf: $.Slice<number>
	}

	constructor(init?: Partial<{dynTab?: __goscript_hpack.dynamicTable, minSize?: number, maxSizeLimit?: number, tableSizeUpdate?: boolean, w?: io.Writer | null, buf?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			dynTab: init?.dynTab ? init.dynTab.clone() : new __goscript_hpack.dynamicTable(undefined, true),
			minSize: init?.minSize ?? (0 as number),
			maxSizeLimit: init?.maxSizeLimit ?? (0 as number),
			tableSizeUpdate: init?.tableSizeUpdate ?? (false as boolean),
			w: init?.w ?? (null! as io.Writer | null),
			buf: init?.buf ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Encoder {
		return new Encoder(this, true)
	}

	public __goscriptAssign(source: Encoder): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.dynTab, values.dynTab)
		target.minSize = values.minSize
		target.maxSizeLimit = values.maxSizeLimit
		target.tableSizeUpdate = values.tableSizeUpdate
		target.w = $.assignFieldValue(target.w, values.w, "io.Writer")
		target.buf = values.buf
	}

	public MaxDynamicTableSize(): number {
		const e: Encoder | $.VarRef<Encoder> | null = this;
		let v: number = 0
		return $.pointerValue<Encoder>(e).dynTab.maxSize
	}

	public async SetMaxDynamicTableSize(v: number): globalThis.Promise<void> {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		if (v > (e$ as Encoder).maxSizeLimit) {
			v = (e$ as Encoder).maxSizeLimit
		}
		if (v < (e$ as Encoder).minSize) {
			;(e$ as Encoder).minSize = v
		}
		;(e$ as Encoder).tableSizeUpdate = true
		await (e$ as Encoder).dynTab.setMaxSize(v)
	}

	public async SetMaxDynamicTableSizeLimit(v: number): globalThis.Promise<void> {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e);
		;(e$ as Encoder).maxSizeLimit = v
		if ((e$ as Encoder).dynTab.maxSize > v) {
			;(e$ as Encoder).tableSizeUpdate = true
			await (e$ as Encoder).dynTab.setMaxSize(v)
		}
	}

	public async WriteField(f: __goscript_hpack.HeaderField): globalThis.Promise<$.GoError> {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e);
		;(e$ as Encoder).buf = $.goSlice((e$ as Encoder).buf, undefined, 0)

		if ((e$ as Encoder).tableSizeUpdate) {
			;(e$ as Encoder).tableSizeUpdate = false
			if ((e$ as Encoder).minSize < (e$ as Encoder).dynTab.maxSize) {
				;(e$ as Encoder).buf = appendTableSize((e$ as Encoder).buf, (e$ as Encoder).minSize)
			}
			;(e$ as Encoder).minSize = 4294967295;
			;(e$ as Encoder).buf = appendTableSize((e$ as Encoder).buf, (e$ as Encoder).dynTab.maxSize)
		}

		let [idx, nameValueMatch] = await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).searchTable(f) : Encoder.prototype.searchTable.call(e, f))
		if (nameValueMatch) {
			;(e$ as Encoder).buf = appendIndexed((e$ as Encoder).buf, idx)
		} else {
			let indexing = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).shouldIndex(f) : Encoder.prototype.shouldIndex.call(e, f))
			if (indexing) {
				await (e$ as Encoder).dynTab.add(f)
			}

			if (idx == 0n) {
				;(e$ as Encoder).buf = appendNewName((e$ as Encoder).buf, f, indexing)
			} else {
				;(e$ as Encoder).buf = appendIndexedName((e$ as Encoder).buf, f, idx, indexing)
			}
		}
		let [n, err] = await $.pointerValue<Exclude<io.Writer, null>>((e$ as Encoder).w).Write((e$ as Encoder).buf)
		if ((err == null) && (n != $.sliceLen((e$ as Encoder).buf))) {
			err = io.ErrShortWrite
		}
		return err
	}

	public async searchTable(f: __goscript_hpack.HeaderField): globalThis.Promise<[bigint, boolean]> {
		const e: Encoder | $.VarRef<Encoder> | null = this;
		let i: bigint = 0n
		let nameValueMatch: boolean = false
		let __goscriptTuple0: any = await __goscript_tables.headerFieldTable.prototype.search.call(__goscript_static_table.__goscript_get_staticTable(), f)
		i = __goscriptTuple0[0]
		nameValueMatch = __goscriptTuple0[1]
		if (nameValueMatch) {
			return [i, true]
		}

		let __goscriptTuple1: any = await $.pointerValue<Encoder>(e).dynTab.table.search(f)
		let j = __goscriptTuple1[0]
		nameValueMatch = __goscriptTuple1[1]
		if (nameValueMatch || ((i == 0n) && (j != 0n))) {
			return [$.uint64Add(j, $.uint64(__goscript_tables.headerFieldTable.prototype.len.call(__goscript_static_table.__goscript_get_staticTable()))), nameValueMatch]
		}

		return [i, false]
	}

	public shouldIndex(f: __goscript_hpack.HeaderField): boolean {
		const e: Encoder | $.VarRef<Encoder> | null = this;
		return !f.Sensitive && (f.Size() <= $.pointerValue<Encoder>(e).dynTab.maxSize)
	}

	static __typeInfo = $.registerStructType(
		"hpack.Encoder",
		() => new Encoder(),
		() => [$.methodSignature("MaxDynamicTableSize", [], [["v", /* @__PURE__ */ $.basicType("uint32")]], true), $.methodSignature("SetMaxDynamicTableSize", [["v", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("SetMaxDynamicTableSizeLimit", [["v", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("WriteField", [["f", "hpack.HeaderField"]], ["error"], true), $.methodSignature("searchTable", [["f", "hpack.HeaderField"]], [["i", /* @__PURE__ */ $.basicType("uint64")], ["nameValueMatch", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("shouldIndex", [["f", "hpack.HeaderField"]], [/* @__PURE__ */ $.basicType("bool")], true)],
		Encoder,
		() => [/* @__PURE__ */ $.structField("dynTab", "hpack.dynamicTable", [0], 0, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("minSize", /* @__PURE__ */ $.basicType("uint32"), [1], 64, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("maxSizeLimit", /* @__PURE__ */ $.basicType("uint32"), [2], 68, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("tableSizeUpdate", /* @__PURE__ */ $.basicType("bool"), [3], 72, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("w", "io.Writer", [4], 80, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 96, false, { pkgPath: "golang.org/x/net/http2/hpack" })]
	)
}

export const uint32Max: number = 4294967295

export const initialHeaderTableSize: number = 4096

export async function NewEncoder(w: io.Writer | null): globalThis.Promise<Encoder | $.VarRef<Encoder> | null> {
	let e: Encoder | $.VarRef<Encoder> | null = new Encoder({minSize: 4294967295, maxSizeLimit: 4096, tableSizeUpdate: false, w: w})
	let e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
	void (e$ as Encoder).dynTab.table.init()
	await (e$ as Encoder).dynTab.setMaxSize(4096)
	return e
}

export function appendIndexed(dst: $.Slice<number>, i: bigint): $.Slice<number> {
	let first = $.sliceLen(dst)
	dst = appendVarInt(dst, 7, i)
	$.sliceElems(dst!)[$.sliceSlot(dst!, first)] = $.sliceElems(dst!)[$.sliceSlot(dst!, first)] | (0x80)
	return dst
}

export function appendNewName(dst: $.Slice<number>, f: __goscript_hpack.HeaderField, indexing: boolean): $.Slice<number> {
	dst = $.append(dst, $.uint(encodeTypeByte(indexing, f.Sensitive), 8), $.byteSliceHint)
	dst = appendHpackString(dst, f.Name)
	return appendHpackString(dst, f.Value)
}

export function appendIndexedName(dst: $.Slice<number>, f: __goscript_hpack.HeaderField, i: bigint, indexing: boolean): $.Slice<number> {
	let first = $.sliceLen(dst)
	let n: number = 0
	if (indexing) {
		n = 6
	} else {
		n = 4
	}
	dst = appendVarInt(dst, n, i)
	$.sliceElems(dst!)[$.sliceSlot(dst!, first)] = $.sliceElems(dst!)[$.sliceSlot(dst!, first)] | (encodeTypeByte(indexing, f.Sensitive))
	return appendHpackString(dst, f.Value)
}

export function appendTableSize(dst: $.Slice<number>, v: number): $.Slice<number> {
	let first = $.sliceLen(dst)
	dst = appendVarInt(dst, 5, $.uint64(v))
	$.sliceElems(dst!)[$.sliceSlot(dst!, first)] = $.sliceElems(dst!)[$.sliceSlot(dst!, first)] | (0x20)
	return dst
}

export function appendVarInt(dst: $.Slice<number>, n: number, i: bigint): $.Slice<number> {
	let k = $.uint64($.uint64Sub(($.uint64Shl(1n, n)), 1n))
	if (i < k) {
		return $.append(dst, $.uint($.uint(i, 8), 8), $.byteSliceHint)
	}
	dst = $.append(dst, $.uint($.uint(k, 8), 8), $.byteSliceHint)
	i = $.uint64Sub(i, k)
	for (; i >= 128n; i = $.uint64Shr(i, 7n)) {
		dst = $.append(dst, $.uint($.uint($.uint64Or(128n, ($.uint64And(i, 127n))), 8), 8), $.byteSliceHint)
	}
	return $.append(dst, $.uint($.uint(i, 8), 8), $.byteSliceHint)
}

export function appendHpackString(dst: $.Slice<number>, s: string): $.Slice<number> {
	let huffmanLength = __goscript_huffman.HuffmanEncodeLength(s)
	if (huffmanLength < $.uint64($.stringLen(s))) {
		let first = $.sliceLen(dst)
		dst = appendVarInt(dst, 7, huffmanLength)
		dst = __goscript_huffman.AppendHuffmanString(dst, s)
		$.sliceElems(dst!)[$.sliceSlot(dst!, first)] = $.sliceElems(dst!)[$.sliceSlot(dst!, first)] | (0x80)
	} else {
		dst = appendVarInt(dst, 7, $.uint64($.stringLen(s)))
		dst = $.appendSlice(dst, $.stringToBytes(s), $.byteSliceHint)
	}
	return dst
}

export function encodeTypeByte(indexing: boolean, sensitive: boolean): number {
	if (sensitive) {
		return 0x10
	}
	if (indexing) {
		return 0x40
	}
	return 0
}
