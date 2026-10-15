// Generated file based on tables.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_hpack from "./hpack.gs.ts"

import * as __goscript_static_table from "./static_table.gs.ts"
import "@goscript/fmt/index.js"
import "./hpack.gs.ts"
import "./static_table.gs.ts"

$.registerTypePackagePath("golang.org/x/net/http2/hpack", ["hpack.headerFieldTable", "hpack.pairNameValue"])

export class headerFieldTable {
	// For static tables, entries are never evicted.
	//
	// For dynamic tables, entries are evicted from ents[0] and added to the end.
	// Each entry has a unique id that starts at one and increments for each
	// entry that is added. This unique id is stable across evictions, meaning
	// it can be used as a pointer to a specific entry. As in hpack, unique ids
	// are 1-based. The unique id for ents[k] is k + evictCount + 1.
	//
	// Zero is not a valid unique id.
	//
	// evictCount should not overflow in any remotely practical situation. In
	// practice, we will have one dynamic table per HTTP/2 connection. If we
	// assume a very powerful server that handles 1M QPS per connection and each
	// request adds (then evicts) 100 entries from the table, it would still take
	// 2M years for evictCount to overflow.
	public get ents(): $.Slice<__goscript_hpack.HeaderField> {
		return this._fields.ents
	}

	public set ents(value: $.Slice<__goscript_hpack.HeaderField>) {
		this._fields.ents = value
	}

	public get evictCount(): bigint {
		return this._fields.evictCount
	}

	public set evictCount(value: bigint) {
		this._fields.evictCount = value
	}

	// byName maps a HeaderField name to the unique id of the newest entry with
	// the same name. See above for a definition of "unique id".
	public get byName(): globalThis.Map<string, bigint> | null {
		return this._fields.byName
	}

	public set byName(value: globalThis.Map<string, bigint> | null) {
		this._fields.byName = value
	}

	// byNameValue maps a HeaderField name/value pair to the unique id of the newest
	// entry with the same name and value. See above for a definition of "unique id".
	public get byNameValue(): globalThis.Map<pairNameValue, bigint> | null {
		return this._fields.byNameValue
	}

	public set byNameValue(value: globalThis.Map<pairNameValue, bigint> | null) {
		this._fields.byNameValue = value
	}

	public _fields: {
		ents: $.Slice<__goscript_hpack.HeaderField>
		evictCount: bigint
		byName: globalThis.Map<string, bigint> | null
		byNameValue: globalThis.Map<pairNameValue, bigint> | null
	}

	constructor(init?: Partial<{ents?: $.Slice<__goscript_hpack.HeaderField>, evictCount?: bigint, byName?: globalThis.Map<string, bigint> | null, byNameValue?: globalThis.Map<pairNameValue, bigint> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ents: init?.ents ?? (null! as $.Slice<__goscript_hpack.HeaderField>),
			evictCount: init?.evictCount ?? (0n as bigint),
			byName: init?.byName ?? (null! as globalThis.Map<string, bigint> | null),
			byNameValue: init?.byNameValue ?? (null! as globalThis.Map<pairNameValue, bigint> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): headerFieldTable {
		return new headerFieldTable(this, true)
	}

	public __goscriptAssign(source: headerFieldTable): void {
		const target = this._fields
		const values = source._fields
		target.ents = values.ents
		target.evictCount = values.evictCount
		target.byName = values.byName
		target.byNameValue = values.byNameValue
	}

	public addEntry(f: __goscript_hpack.HeaderField): void {
		let t: headerFieldTable | $.VarRef<headerFieldTable> | null = this;
		const t$: headerFieldTable = t == null ? $.pointerTarget<headerFieldTable>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<headerFieldTable>(t)
		let id = $.uint64Add(($.uint64Add($.uint64((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as headerFieldTable).len() : headerFieldTable.prototype.len.call(t))), (t$ as headerFieldTable).evictCount)), 1n)
		$.mapSet((t$ as headerFieldTable).byName, f.Name, id)
		$.mapSet((t$ as headerFieldTable).byNameValue, new pairNameValue({name: f.Name, value: f.Value}, true), id);
		;(t$ as headerFieldTable).ents = $.appendOne((t$ as headerFieldTable).ents, (f).clone())
	}

	public async evictOldest(n: number): globalThis.Promise<void> {
		let t: headerFieldTable | $.VarRef<headerFieldTable> | null = this;
		const t$: headerFieldTable = t == null ? $.pointerTarget<headerFieldTable>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<headerFieldTable>(t)
		if (n > (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as headerFieldTable).len() : headerFieldTable.prototype.len.call(t))) {
			$.panic(await fmt.Sprintf("evictOldest(%v) on table with %v entries", $.basicInterfaceValue(n, "int"), $.basicInterfaceValue((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as headerFieldTable).len() : headerFieldTable.prototype.len.call(t)), "int")))
		}
		for (let k = 0; k < n; k++) {
			let f = ($.arrayIndex((t$ as headerFieldTable).ents!, k)).clone()
			let id = $.uint64Add(($.uint64Add((t$ as headerFieldTable).evictCount, $.uint64(k))), 1n)
			if ($.mapGet<string, bigint, bigint>((t$ as headerFieldTable).byName, f.Name, 0n)[0] == id) {
				$.deleteMapEntry((t$ as headerFieldTable).byName, f.Name)
			}
			{
				let p = (new pairNameValue({name: f.Name, value: f.Value}, true))
				if ($.mapGet<pairNameValue, bigint, bigint>((t$ as headerFieldTable).byNameValue, p, 0n)[0] == id) {
					$.deleteMapEntry((t$ as headerFieldTable).byNameValue, (p).clone())
				}
			}
		}
		$.copy((t$ as headerFieldTable).ents, $.goSlice((t$ as headerFieldTable).ents, n, undefined))
		for (let k = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as headerFieldTable).len() : headerFieldTable.prototype.len.call(t)) - n; k < (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as headerFieldTable).len() : headerFieldTable.prototype.len.call(t)); k++) {
			$.assignStruct($.sliceElems((t$ as headerFieldTable).ents!)[$.sliceSlot((t$ as headerFieldTable).ents!, k)], new __goscript_hpack.HeaderField(undefined, true))
		}
		;(t$ as headerFieldTable).ents = $.goSlice((t$ as headerFieldTable).ents, undefined, (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as headerFieldTable).len() : headerFieldTable.prototype.len.call(t)) - n)
		if (($.uint64Add((t$ as headerFieldTable).evictCount, $.uint64(n))) < (t$ as headerFieldTable).evictCount) {
			$.panic("evictCount overflow")
		}
		;(t$ as headerFieldTable).evictCount = $.uint64Add((t$ as headerFieldTable).evictCount, $.uint64(n))
	}

	public async idToIndex(id: bigint): globalThis.Promise<bigint> {
		const t: headerFieldTable | $.VarRef<headerFieldTable> | null = this;
		const t$: headerFieldTable = t == null ? $.pointerTarget<headerFieldTable>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<headerFieldTable>(t)
		if (id <= (t$ as headerFieldTable).evictCount) {
			$.panic(await fmt.Sprintf("id (%v) <= evictCount (%v)", $.basicInterfaceValue(id, "uint64"), $.basicInterfaceValue((t$ as headerFieldTable).evictCount, "uint64")))
		}
		let k = $.uint64Sub(($.uint64Sub(id, (t$ as headerFieldTable).evictCount)), 1n)
		if (!$.pointerEqual(t, __goscript_static_table.__goscript_get_staticTable())) {
			return $.uint64Sub($.uint64((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as headerFieldTable).len() : headerFieldTable.prototype.len.call(t))), k)
		}
		return $.uint64Add(k, 1n)
	}

	public init(): void {
		let t: headerFieldTable | $.VarRef<headerFieldTable> | null = this;
		const t$: headerFieldTable = t == null ? $.pointerTarget<headerFieldTable>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<headerFieldTable>(t);
		;(t$ as headerFieldTable).byName = $.makeMap<string, bigint>();
		;(t$ as headerFieldTable).byNameValue = $.makeMap<pairNameValue, bigint>()
	}

	public len(): number {
		const t: headerFieldTable | $.VarRef<headerFieldTable> | null = this;
		return $.sliceLen($.pointerValue<headerFieldTable>(t).ents)
	}

	public async search(f: __goscript_hpack.HeaderField): globalThis.Promise<[bigint, boolean]> {
		const t: headerFieldTable | $.VarRef<headerFieldTable> | null = this;
		let i: bigint = 0n
		let nameValueMatch: boolean = false
		const t$: headerFieldTable = t == null ? $.pointerTarget<headerFieldTable>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<headerFieldTable>(t)
		if (!f.Sensitive) {
			{
				let id = $.mapGet<pairNameValue, bigint, bigint>((t$ as headerFieldTable).byNameValue, new pairNameValue({name: f.Name, value: f.Value}, true), 0n)[0]
				if (id != 0n) {
					return [await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as headerFieldTable).idToIndex(id) : headerFieldTable.prototype.idToIndex.call(t, id)), true]
				}
			}
		}
		{
			let id = $.mapGet<string, bigint, bigint>((t$ as headerFieldTable).byName, f.Name, 0n)[0]
			if (id != 0n) {
				return [await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as headerFieldTable).idToIndex(id) : headerFieldTable.prototype.idToIndex.call(t, id)), false]
			}
		}
		return [0n, false]
	}

	static __typeInfo = $.registerStructType(
		"hpack.headerFieldTable",
		() => new headerFieldTable(),
		() => [$.methodSignature("addEntry", [["f", "hpack.HeaderField"]], [], true), $.methodSignature("evictOldest", [["n", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("idToIndex", [["id", /* @__PURE__ */ $.basicType("uint64")]], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("init", [], [], true), $.methodSignature("len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("search", [["f", "hpack.HeaderField"]], [["i", /* @__PURE__ */ $.basicType("uint64")], ["nameValueMatch", /* @__PURE__ */ $.basicType("bool")]], true)],
		headerFieldTable,
		() => [/* @__PURE__ */ $.structField("ents", /* @__PURE__ */ $.sliceType("hpack.HeaderField"), [0], 0, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("evictCount", /* @__PURE__ */ $.basicType("uint64"), [1], 24, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("byName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint64")), [2], 32, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("byNameValue", /* @__PURE__ */ $.mapType("hpack.pairNameValue", /* @__PURE__ */ $.basicType("uint64")), [3], 40, false, { pkgPath: "golang.org/x/net/http2/hpack" })]
	)
}

export class pairNameValue {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get value(): string {
		return this._fields.value
	}

	public set value(value: string) {
		this._fields.value = value
	}

	public _fields: {
		name: string
		value: string
	}

	constructor(init?: Partial<{name?: string, value?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			value: init?.value ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pairNameValue {
		return new pairNameValue(this, true)
	}

	public __goscriptAssign(source: pairNameValue): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.value = values.value
	}

	static __typeInfo = $.registerStructType(
		"hpack.pairNameValue",
		() => new pairNameValue(),
		() => [],
		pairNameValue,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "golang.org/x/net/http2/hpack" }), /* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "golang.org/x/net/http2/hpack" })]
	)
}

export let huffmanCodes: number[] = $.arrayValue([0x1ff8, 0x7fffd8, 0xfffffe2, 0xfffffe3, 0xfffffe4, 0xfffffe5, 0xfffffe6, 0xfffffe7, 0xfffffe8, 0xffffea, 0x3ffffffc, 0xfffffe9, 0xfffffea, 0x3ffffffd, 0xfffffeb, 0xfffffec, 0xfffffed, 0xfffffee, 0xfffffef, 0xffffff0, 0xffffff1, 0xffffff2, 0x3ffffffe, 0xffffff3, 0xffffff4, 0xffffff5, 0xffffff6, 0xffffff7, 0xffffff8, 0xffffff9, 0xffffffa, 0xffffffb, 0x14, 0x3f8, 0x3f9, 0xffa, 0x1ff9, 0x15, 0xf8, 0x7fa, 0x3fa, 0x3fb, 0xf9, 0x7fb, 0xfa, 0x16, 0x17, 0x18, 0x0, 0x1, 0x2, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0x5c, 0xfb, 0x7ffc, 0x20, 0xffb, 0x3fc, 0x1ffa, 0x21, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0xfc, 0x73, 0xfd, 0x1ffb, 0x7fff0, 0x1ffc, 0x3ffc, 0x22, 0x7ffd, 0x3, 0x23, 0x4, 0x24, 0x5, 0x25, 0x26, 0x27, 0x6, 0x74, 0x75, 0x28, 0x29, 0x2a, 0x7, 0x2b, 0x76, 0x2c, 0x8, 0x9, 0x2d, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7ffe, 0x7fc, 0x3ffd, 0x1ffd, 0xffffffc, 0xfffe6, 0x3fffd2, 0xfffe7, 0xfffe8, 0x3fffd3, 0x3fffd4, 0x3fffd5, 0x7fffd9, 0x3fffd6, 0x7fffda, 0x7fffdb, 0x7fffdc, 0x7fffdd, 0x7fffde, 0xffffeb, 0x7fffdf, 0xffffec, 0xffffed, 0x3fffd7, 0x7fffe0, 0xffffee, 0x7fffe1, 0x7fffe2, 0x7fffe3, 0x7fffe4, 0x1fffdc, 0x3fffd8, 0x7fffe5, 0x3fffd9, 0x7fffe6, 0x7fffe7, 0xffffef, 0x3fffda, 0x1fffdd, 0xfffe9, 0x3fffdb, 0x3fffdc, 0x7fffe8, 0x7fffe9, 0x1fffde, 0x7fffea, 0x3fffdd, 0x3fffde, 0xfffff0, 0x1fffdf, 0x3fffdf, 0x7fffeb, 0x7fffec, 0x1fffe0, 0x1fffe1, 0x3fffe0, 0x1fffe2, 0x7fffed, 0x3fffe1, 0x7fffee, 0x7fffef, 0xfffea, 0x3fffe2, 0x3fffe3, 0x3fffe4, 0x7ffff0, 0x3fffe5, 0x3fffe6, 0x7ffff1, 0x3ffffe0, 0x3ffffe1, 0xfffeb, 0x7fff1, 0x3fffe7, 0x7ffff2, 0x3fffe8, 0x1ffffec, 0x3ffffe2, 0x3ffffe3, 0x3ffffe4, 0x7ffffde, 0x7ffffdf, 0x3ffffe5, 0xfffff1, 0x1ffffed, 0x7fff2, 0x1fffe3, 0x3ffffe6, 0x7ffffe0, 0x7ffffe1, 0x3ffffe7, 0x7ffffe2, 0xfffff2, 0x1fffe4, 0x1fffe5, 0x3ffffe8, 0x3ffffe9, 0xffffffd, 0x7ffffe3, 0x7ffffe4, 0x7ffffe5, 0xfffec, 0xfffff3, 0xfffed, 0x1fffe6, 0x3fffe9, 0x1fffe7, 0x1fffe8, 0x7ffff3, 0x3fffea, 0x3fffeb, 0x1ffffee, 0x1ffffef, 0xfffff4, 0xfffff5, 0x3ffffea, 0x7ffff4, 0x3ffffeb, 0x7ffffe6, 0x3ffffec, 0x3ffffed, 0x7ffffe7, 0x7ffffe8, 0x7ffffe9, 0x7ffffea, 0x7ffffeb, 0xffffffe, 0x7ffffec, 0x7ffffed, 0x7ffffee, 0x7ffffef, 0x7fffff0, 0x3ffffee])

export function __goscript_set_huffmanCodes(__goscriptValue: number[]): void {
	huffmanCodes = __goscriptValue
}

export let huffmanCodeLen: Uint8Array = $.arrayValue(new Uint8Array([13, 23, 28, 28, 28, 28, 28, 28, 28, 24, 30, 28, 28, 30, 28, 28, 28, 28, 28, 28, 28, 28, 30, 28, 28, 28, 28, 28, 28, 28, 28, 28, 6, 10, 10, 12, 13, 6, 8, 11, 10, 10, 8, 11, 8, 6, 6, 6, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 8, 15, 6, 12, 10, 13, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 8, 13, 19, 13, 14, 6, 15, 5, 6, 5, 6, 5, 6, 6, 6, 5, 7, 7, 6, 6, 6, 5, 6, 7, 6, 5, 5, 6, 7, 7, 7, 7, 7, 15, 11, 14, 13, 28, 20, 22, 20, 20, 22, 22, 22, 23, 22, 23, 23, 23, 23, 23, 24, 23, 24, 24, 22, 23, 24, 23, 23, 23, 23, 21, 22, 23, 22, 23, 23, 24, 22, 21, 20, 22, 22, 23, 23, 21, 23, 22, 22, 24, 21, 22, 23, 23, 21, 21, 22, 21, 23, 22, 23, 23, 20, 22, 22, 22, 23, 22, 22, 23, 26, 26, 20, 19, 22, 23, 22, 25, 26, 26, 26, 27, 27, 26, 24, 25, 19, 21, 26, 27, 27, 26, 27, 24, 21, 21, 26, 26, 28, 27, 27, 27, 20, 24, 20, 21, 22, 21, 21, 23, 22, 22, 25, 25, 24, 24, 26, 23, 26, 27, 26, 26, 27, 27, 27, 27, 27, 28, 27, 27, 27, 27, 27, 26]))

export function __goscript_set_huffmanCodeLen(__goscriptValue: Uint8Array): void {
	huffmanCodeLen = __goscriptValue
}
