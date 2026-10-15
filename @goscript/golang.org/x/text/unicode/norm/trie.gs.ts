// Generated file based on trie.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_tables15_0_0 from "./tables15.0.0.gs.ts"
import "./tables15.0.0.gs.ts"

$.registerTypePackagePath("golang.org/x/text/unicode/norm", ["norm.valueRange", "norm.sparseBlocks"])

export class valueRange {
	public get value(): number {
		return this._fields.value
	}

	public set value(value: number) {
		this._fields.value = value
	}

	public get lo(): number {
		return this._fields.lo
	}

	public set lo(value: number) {
		this._fields.lo = value
	}

	public get hi(): number {
		return this._fields.hi
	}

	public set hi(value: number) {
		this._fields.hi = value
	}

	public _fields: {
		value: number
		lo: number
		hi: number
	}

	constructor(init?: Partial<{value?: number, lo?: number, hi?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			value: init?.value ?? (0 as number),
			lo: init?.lo ?? (0 as number),
			hi: init?.hi ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): valueRange {
		return new valueRange(this, true)
	}

	public __goscriptAssign(source: valueRange): void {
		const target = this._fields
		const values = source._fields
		target.value = values.value
		target.lo = values.lo
		target.hi = values.hi
	}

	static __typeInfo = $.registerStructType(
		"norm.valueRange",
		() => new valueRange(),
		() => [],
		valueRange,
		() => [/* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.basicType("uint16"), [0], 0, false, { pkgPath: "golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("lo", /* @__PURE__ */ $.basicType("uint8"), [1], 2, false, { pkgPath: "golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("hi", /* @__PURE__ */ $.basicType("uint8"), [2], 3, false, { pkgPath: "golang.org/x/text/unicode/norm" })]
	)
}

export class sparseBlocks {
	public get values(): $.Slice<valueRange> {
		return this._fields.values
	}

	public set values(value: $.Slice<valueRange>) {
		this._fields.values = value
	}

	public get offset(): $.Slice<number> {
		return this._fields.offset
	}

	public set offset(value: $.Slice<number>) {
		this._fields.offset = value
	}

	public _fields: {
		values: $.Slice<valueRange>
		offset: $.Slice<number>
	}

	constructor(init?: Partial<{values?: $.Slice<valueRange>, offset?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			values: init?.values ?? (null! as $.Slice<valueRange>),
			offset: init?.offset ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sparseBlocks {
		return new sparseBlocks(this, true)
	}

	public __goscriptAssign(source: sparseBlocks): void {
		const target = this._fields
		const values = source._fields
		target.values = values.values
		target.offset = values.offset
	}

	public lookup(n: number, b: number): number {
		const t: sparseBlocks | $.VarRef<sparseBlocks> | null = this;
		const t$: sparseBlocks = t == null ? $.pointerTarget<sparseBlocks>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<sparseBlocks>(t)
		let offset = $.arrayIndex((t$ as sparseBlocks).offset!, n)
		let header = ($.arrayIndex((t$ as sparseBlocks).values!, offset)).clone()
		let lo = $.uint(((offset + 1) & 0xffff), 16)
		let hi = $.uint(((lo + $.uint(header.lo, 16)) & 0xffff), 16)
		while (lo < hi) {
			let m: number = $.uint(((lo + (globalThis.Math.trunc((((hi - lo) & 0xffff)) / 2))) & 0xffff), 16)
			let r = ($.arrayIndex((t$ as sparseBlocks).values!, m)).clone()
			if ((r.lo <= b) && (b <= r.hi)) {
				return $.uint(((r.value + ($.uint($.uint(((b - r.lo) & 0xff), 8), 16) * header.value)) & 0xffff), 16)
			}
			if (b < r.lo) {
				hi = m
			} else {
				lo = $.uint(((m + 1) & 0xffff), 16)
			}
		}
		return 0
	}

	static __typeInfo = $.registerStructType(
		"norm.sparseBlocks",
		() => new sparseBlocks(),
		() => [$.methodSignature("lookup", [["n", /* @__PURE__ */ $.basicType("uint32")], ["b", /* @__PURE__ */ $.basicType("uint8")]], [/* @__PURE__ */ $.basicType("uint16")], true)],
		sparseBlocks,
		() => [/* @__PURE__ */ $.structField("values", /* @__PURE__ */ $.sliceType("norm.valueRange"), [0], 0, false, { pkgPath: "golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("offset", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")), [1], 24, false, { pkgPath: "golang.org/x/text/unicode/norm" })]
	)
}

export var nfcSparse: $.VarRef<sparseBlocks>

export function __goscript_init_nfcSparse(): void {
	if (((nfcSparse) as any) === undefined) {
		nfcSparse = $.varRef(new sparseBlocks({values: $.goSlice(__goscript_tables15_0_0.__goscript_get_nfcSparseValues(), undefined, undefined), offset: $.goSlice(__goscript_tables15_0_0.__goscript_get_nfcSparseOffset(), undefined, undefined)}, true))
	}
}

export function __goscript_get_nfcSparse(): $.VarRef<sparseBlocks> {
	if (((nfcSparse) as any) === undefined) {
		__goscript_init_nfcSparse()
	}
	return nfcSparse
}

export function __goscript_set_nfcSparse(__goscriptValue: sparseBlocks): void {
	$.assignStruct(__goscript_get_nfcSparse().value, __goscriptValue)
}

export var nfkcSparse: $.VarRef<sparseBlocks>

export function __goscript_init_nfkcSparse(): void {
	if (((nfkcSparse) as any) === undefined) {
		nfkcSparse = $.varRef(new sparseBlocks({values: $.goSlice(__goscript_tables15_0_0.__goscript_get_nfkcSparseValues(), undefined, undefined), offset: $.goSlice(__goscript_tables15_0_0.__goscript_get_nfkcSparseOffset(), undefined, undefined)}, true))
	}
}

export function __goscript_get_nfkcSparse(): $.VarRef<sparseBlocks> {
	if (((nfkcSparse) as any) === undefined) {
		__goscript_init_nfkcSparse()
	}
	return nfkcSparse
}

export function __goscript_set_nfkcSparse(__goscriptValue: sparseBlocks): void {
	$.assignStruct(__goscript_get_nfkcSparse().value, __goscriptValue)
}

export var nfcData: __goscript_tables15_0_0.nfcTrie | $.VarRef<__goscript_tables15_0_0.nfcTrie> | null

export function __goscript_init_nfcData(): void {
	if (((nfcData) as any) === undefined) {
		nfcData = __goscript_tables15_0_0.newNfcTrie(0)
	}
}

export function __goscript_get_nfcData(): __goscript_tables15_0_0.nfcTrie | $.VarRef<__goscript_tables15_0_0.nfcTrie> | null {
	if (((nfcData) as any) === undefined) {
		__goscript_init_nfcData()
	}
	return nfcData
}

export function __goscript_set_nfcData(__goscriptValue: __goscript_tables15_0_0.nfcTrie | $.VarRef<__goscript_tables15_0_0.nfcTrie> | null): void {
	nfcData = __goscriptValue
}

export var nfkcData: __goscript_tables15_0_0.nfkcTrie | $.VarRef<__goscript_tables15_0_0.nfkcTrie> | null

export function __goscript_init_nfkcData(): void {
	if (((nfkcData) as any) === undefined) {
		nfkcData = __goscript_tables15_0_0.newNfkcTrie(0)
	}
}

export function __goscript_get_nfkcData(): __goscript_tables15_0_0.nfkcTrie | $.VarRef<__goscript_tables15_0_0.nfkcTrie> | null {
	if (((nfkcData) as any) === undefined) {
		__goscript_init_nfkcData()
	}
	return nfkcData
}

export function __goscript_set_nfkcData(__goscriptValue: __goscript_tables15_0_0.nfkcTrie | $.VarRef<__goscript_tables15_0_0.nfkcTrie> | null): void {
	nfkcData = __goscriptValue
}
