// Generated file based on mutations.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as url from "@goscript/net/url/index.js"

import * as __goscript_accessors from "./accessors.gs.ts"

import * as __goscript_conversions from "./conversions.gs.ts"

import * as __goscript_map from "./map.gs.ts"

import * as __goscript_tests from "./tests.gs.ts"

import type * as __goscript_type_specific from "./type_specific.gs.ts"

import type * as __goscript_type_specific_codegen from "./type_specific_codegen.gs.ts"

import type * as __goscript_value from "./value.gs.ts"
import "./accessors.gs.ts"
import "./conversions.gs.ts"
import "./map.gs.ts"
import "./tests.gs.ts"

export function Map_Exclude(m: __goscript_map.Map, exclude: $.Slice<string>): __goscript_map.Map {
	let excluded: __goscript_map.Map = $.makeMap<string, any>()
	for (let [k, v] of m?.entries() ?? []) {
		if (!contains(exclude, k)) {
			$.mapSet(excluded, k, v)
		}
	}
	return excluded
}

export function Map_Copy(m: __goscript_map.Map): __goscript_map.Map {
	let copied: __goscript_map.Map = $.makeMap<string, any>([])
	for (let [k, v] of m?.entries() ?? []) {
		$.mapSet(copied, k, v)
	}
	return copied
}

export function Map_Merge(m: __goscript_map.Map, merge: __goscript_map.Map): __goscript_map.Map {
	return Map_MergeHere(Map_Copy(m), merge)
}

export function Map_MergeHere(m: __goscript_map.Map, merge: __goscript_map.Map): __goscript_map.Map {
	for (let [k, v] of merge?.entries() ?? []) {
		$.mapSet(m, k, v)
	}
	return m
}

export async function Map_Transform(m: __goscript_map.Map, transformer: ((key: string, value: any) => [string, any] | globalThis.Promise<[string, any]>) | null): globalThis.Promise<__goscript_map.Map> {
	let newMap: __goscript_map.Map = $.makeMap<string, any>([])
	for (const [k, v] of m?.entries() ?? []) {
		let [modifiedKey, modifiedVal] = await transformer!(k, v)
		$.mapSet(newMap, modifiedKey, modifiedVal)
	}
	return newMap
}

export async function Map_TransformKeys(m: __goscript_map.Map, mapping: globalThis.Map<string, string> | null): globalThis.Promise<__goscript_map.Map> {
	return Map_Transform(m, $.functionValue((key: string, value: any): [string, any] => {
		{
			let [newKey, ok] = $.mapGet<string, string, string>(mapping, key, "")
			if (ok) {
				return [newKey, value]
			}
		}
		return [key, value]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)))
}

export function contains(s: $.Slice<string>, e: string): boolean {
	for (let __goscriptRangeTarget0 = s, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let a = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		if ($.stringEqual(a, e)) {
			return true
		}
	}
	return false
}
