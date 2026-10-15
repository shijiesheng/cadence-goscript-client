// Generated file based on header.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as iter from "@goscript/iter/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/iter/index.js"
import "@goscript/strings/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/api/transport", ["transport.Headers"])

export class Headers {
	// This representation allows us to make zero-value valid
	public get items(): globalThis.Map<string, string> | null {
		return this._fields.items
	}

	public set items(value: globalThis.Map<string, string> | null) {
		this._fields.items = value
	}

	// original non-canonical headers, foo-bar will be treated as different value than Foo-bar
	public get originalItems(): globalThis.Map<string, string> | null {
		return this._fields.originalItems
	}

	public set originalItems(value: globalThis.Map<string, string> | null) {
		this._fields.originalItems = value
	}

	// overrideOriginalItemWithCanonicalizedKey indicates whether to override
	public get overrideOriginalItemWithCanonicalizedKey(): boolean {
		return this._fields.overrideOriginalItemWithCanonicalizedKey
	}

	public set overrideOriginalItemWithCanonicalizedKey(value: boolean) {
		this._fields.overrideOriginalItemWithCanonicalizedKey = value
	}

	// headerMapping maps canonicalized (lowercase) header keys to one or
	// more desired original casings. When set, With() inserts the value
	// into originalItems under every mapped key variant, falling back to
	// the canonicalized key for unmapped headers.
	public get headerMapping(): globalThis.Map<string, $.Slice<string>> | null {
		return this._fields.headerMapping
	}

	public set headerMapping(value: globalThis.Map<string, $.Slice<string>> | null) {
		this._fields.headerMapping = value
	}

	public _fields: {
		items: globalThis.Map<string, string> | null
		originalItems: globalThis.Map<string, string> | null
		overrideOriginalItemWithCanonicalizedKey: boolean
		headerMapping: globalThis.Map<string, $.Slice<string>> | null
	}

	constructor(init?: Partial<{items?: globalThis.Map<string, string> | null, originalItems?: globalThis.Map<string, string> | null, overrideOriginalItemWithCanonicalizedKey?: boolean, headerMapping?: globalThis.Map<string, $.Slice<string>> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			items: init?.items ?? (null! as globalThis.Map<string, string> | null),
			originalItems: init?.originalItems ?? (null! as globalThis.Map<string, string> | null),
			overrideOriginalItemWithCanonicalizedKey: init?.overrideOriginalItemWithCanonicalizedKey ?? (false as boolean),
			headerMapping: init?.headerMapping ?? (null! as globalThis.Map<string, $.Slice<string>> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Headers {
		return new Headers(this, true)
	}

	public __goscriptAssign(source: Headers): void {
		const target = this._fields
		const values = source._fields
		target.items = values.items
		target.originalItems = values.originalItems
		target.overrideOriginalItemWithCanonicalizedKey = values.overrideOriginalItemWithCanonicalizedKey
		target.headerMapping = values.headerMapping
	}

	public All(): iter.Seq2<string, string> | null {
		const h = this;
		return $.functionValue(async (_yield: ((_p0: string, _p1: string) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> => {
			for (const [k, v] of h.items?.entries() ?? []) {
				if (!(__goscriptAwait = _yield!(k, v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					return
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))
	}

	public Del(k: string): void {
		const h = this;
		let canonicalizedKey = CanonicalizeHeaderKey(k)
		$.deleteMapEntry(h.items, canonicalizedKey)

		switch ((true as boolean)) {
			case h.overrideOriginalItemWithCanonicalizedKey:
			{
				$.deleteMapEntry(h.originalItems, canonicalizedKey)
				break
			}
			case h.headerMapping != null:
			{
				$.deleteMapEntry(h.originalItems, k)
				$.deleteMapEntry(h.originalItems, canonicalizedKey)
				for (let __goscriptRangeTarget0 = $.mapGet<string, $.Slice<string>, $.Slice<string>>(h.headerMapping, canonicalizedKey, null)[0], __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
					let mk = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
					$.deleteMapEntry(h.originalItems, mk)
				}
				break
			}
			default:
			{
				$.deleteMapEntry(h.originalItems, k)
				break
			}
		}
	}

	public EnableOverrideOriginalItemsWithCanonicalizedKeys(): Headers {
		let h: Headers = this;
		h.overrideOriginalItemWithCanonicalizedKey = true
		return (h).clone()
	}

	public Get(k: string): [string, boolean] {
		const h = this;
		let [v, ok] = $.mapGet<string, string, string>(h.items, CanonicalizeHeaderKey(k), "")
		return [v, ok]
	}

	public Items(): globalThis.Map<string, string> | null {
		const h = this;
		return h.items
	}

	public Len(): number {
		const h = this;
		return $.len(h.items)
	}

	public OriginalItems(): globalThis.Map<string, string> | null {
		const h = this;
		return h.originalItems
	}

	public OriginalItemsAll(): iter.Seq2<string, string> | null {
		const h = this;
		return $.functionValue(async (_yield: ((_p0: string, _p1: string) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<void> => {
			for (const [k, v] of h.originalItems?.entries() ?? []) {
				if (!(__goscriptAwait = _yield!(k, v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					return
				}
			}
		}, ({ kind: $.TypeKind.Function, params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))
	}

	public OriginalItemsLen(): number {
		const h = this;
		return $.len(h.originalItems)
	}

	public With(k: string, v: string): Headers {
		let h: Headers = this;
		if (h.items == null) {
			h.items = $.makeMap<string, string>()
			h.originalItems = $.makeMap<string, string>()
		}
		let canonicalizedKey = CanonicalizeHeaderKey(k)
		$.mapSet(h.items, canonicalizedKey, v)

		switch ((true as boolean)) {
			case h.overrideOriginalItemWithCanonicalizedKey:
			{
				$.mapSet(h.originalItems, canonicalizedKey, v)
				break
			}
			case h.headerMapping != null:
			{
				$.mapSet(h.originalItems, k, v)
				$.mapSet(h.originalItems, canonicalizedKey, v)
				for (let __goscriptRangeTarget1 = $.mapGet<string, $.Slice<string>, $.Slice<string>>(h.headerMapping, canonicalizedKey, null)[0], __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
					let mk = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
					$.mapSet(h.originalItems, mk, v)
				}
				break
			}
			default:
			{
				$.mapSet(h.originalItems, k, v)
				break
			}
		}
		return (h).clone()
	}

	public WithHeaderCaseMapping(mapping: globalThis.Map<string, $.Slice<string>> | null): Headers {
		let h: Headers = this;
		if ((h.overrideOriginalItemWithCanonicalizedKey || (h.headerMapping != null)) || (mapping == null)) {
			return (h).clone()
		}

		h.headerMapping = mapping
		return (h).clone()
	}

	static __typeInfo = $.registerStructType(
		"transport.Headers",
		() => new Headers(),
		() => [$.methodSignature("All", [], [({ kind: $.TypeKind.Function, name: "iter.Seq2", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)]), $.methodSignature("Del", [["k", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("EnableOverrideOriginalItemsWithCanonicalizedKeys", [], ["transport.Headers"]), $.methodSignature("Get", [["k", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Items", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("OriginalItems", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]), $.methodSignature("OriginalItemsAll", [], [({ kind: $.TypeKind.Function, name: "iter.Seq2", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)]), $.methodSignature("OriginalItemsLen", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("With", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("string")]], ["transport.Headers"]), $.methodSignature("WithHeaderCaseMapping", [["mapping", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))]], ["transport.Headers"])],
		Headers,
		() => [/* @__PURE__ */ $.structField("items", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/transport" }), /* @__PURE__ */ $.structField("originalItems", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [1], 8, false, { pkgPath: "go.uber.org/yarpc/api/transport" }), /* @__PURE__ */ $.structField("overrideOriginalItemWithCanonicalizedKey", /* @__PURE__ */ $.basicType("bool"), [2], 16, false, { pkgPath: "go.uber.org/yarpc/api/transport" }), /* @__PURE__ */ $.structField("headerMapping", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))), [3], 24, false, { pkgPath: "go.uber.org/yarpc/api/transport" })]
	)
}

export function CanonicalizeHeaderKey(k: string): string {
	// TODO: Deal with unsupported header keys (anything that's not a valid HTTP
	// header key).
	return strings.ToLower(k)
}

export function NewHeaders(): Headers {
	return new Headers(undefined, true)
}

export function NewHeadersWithCapacity(capacity: number): Headers {
	if (capacity <= 0) {
		return new Headers(undefined, true)
	}
	return new Headers({items: $.makeMap<string, string>(), originalItems: $.makeMap<string, string>()}, true)
}

export function HeadersFromMap(m: globalThis.Map<string, string> | null): Headers {
	if ($.len(m) == 0) {
		return new Headers(undefined, true)
	}
	let headers = NewHeadersWithCapacity($.len(m))
	for (const [k, v] of m?.entries() ?? []) {
		headers = $.assignStruct(headers, $.markAsStructValue($.cloneStructValue(headers)).With(k, v))
	}
	return (headers).clone()
}

var __goscriptAwait: any
