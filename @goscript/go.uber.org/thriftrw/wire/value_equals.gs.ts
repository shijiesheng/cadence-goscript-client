// Generated file based on value_equals.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript__type from "./type.gs.ts"

import * as __goscript_lazy_list from "./lazy_list.gs.ts"

import * as __goscript_type_string from "./type_string.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "./type.gs.ts"
import "./lazy_list.gs.ts"
import "./type_string.gs.ts"
import "./value.gs.ts"

export let errNotEquals: $.GoError = errors.New("values are not equal")

export function __goscript_set_errNotEquals(__goscriptValue: $.GoError): void {
	errNotEquals = __goscriptValue
}

export async function ValuesAreEqual(__goscriptParam0: __goscript_value.Value, __goscriptParam1: __goscript_value.Value): globalThis.Promise<boolean> {
	let left: $.VarRef<__goscript_value.Value> = $.varRef(__goscriptParam0)
	let right: $.VarRef<__goscript_value.Value> = $.varRef(__goscriptParam1)
	if (left.value.typ != right.value.typ) {
		return false
	}

	switch (left.value.typ) {
		case 2:
		{
			return left.value.GetBool() == right.value.GetBool()
			break
		}
		case 3:
		{
			return left.value.GetI8() == right.value.GetI8()
			break
		}
		case 4:
		{
			return left.value.GetDouble() == right.value.GetDouble()
			break
		}
		case 6:
		{
			return left.value.GetI16() == right.value.GetI16()
			break
		}
		case 8:
		{
			return left.value.GetI32() == right.value.GetI32()
			break
		}
		case 10:
		{
			return left.value.GetI64() == right.value.GetI64()
			break
		}
		case 11:
		{
			return bytes.Equal(left.value.tbinary, right.value.tbinary)
			break
		}
		case 12:
		{
			return StructsAreEqual((left.value.tstruct).clone(), (right.value.tstruct).clone())
			break
		}
		case 13:
		{
			return MapsAreEqual($.mustTypeAssert<__goscript_lazy_list.MapItemList | null>(left.value.tcoll, "wire.MapItemList"), $.mustTypeAssert<__goscript_lazy_list.MapItemList | null>(right.value.tcoll, "wire.MapItemList"))
			break
		}
		case 14:
		{
			return SetsAreEqual($.mustTypeAssert<__goscript_lazy_list.ValueList | null>(left.value.tcoll, "wire.ValueList"), $.mustTypeAssert<__goscript_lazy_list.ValueList | null>(right.value.tcoll, "wire.ValueList"))
			break
		}
		case 15:
		{
			return ListsAreEqual($.mustTypeAssert<__goscript_lazy_list.ValueList | null>(left.value.tcoll, "wire.ValueList"), $.mustTypeAssert<__goscript_lazy_list.ValueList | null>(right.value.tcoll, "wire.ValueList"))
			break
		}
		default:
		{
			return false
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function StructsAreEqual(left: __goscript_value.Struct, right: __goscript_value.Struct): globalThis.Promise<boolean> {
	if ($.sliceLen(left.Fields) != $.sliceLen(right.Fields)) {
		return false
	}

	// Fields are unordered so we need to build a map to actually compare
	// them.

	let leftFields: globalThis.Map<number, __goscript_value.Value> | null = left.fieldMap()
	let rightFields: globalThis.Map<number, __goscript_value.Value> | null = right.fieldMap()

	for (const [i, lvalue] of leftFields?.entries() ?? []) {
		{
			let [rvalue, ok] = $.mapGet<number, __goscript_value.Value, __goscript_value.Value>(rightFields, i, new __goscript_value.Value(undefined, true))
			if (!ok) {
				return false
			} else {
				if (!await ValuesAreEqual((lvalue).clone(), (rvalue).clone())) {
					return false
				}
			}
		}
	}

	return true
}

export async function SetsAreEqual(left: __goscript_lazy_list.ValueList | null, right: __goscript_lazy_list.ValueList | null): globalThis.Promise<boolean> {
	if ((__goscriptAwait = (left !== null && (left as any).__isVarRef !== true && (left as any).__goValue === undefined ? (left as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(left)).ValueType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != (__goscriptAwait = (right !== null && (right as any).__isVarRef !== true && (right as any).__goValue === undefined ? (right as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(right)).ValueType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return false
	}
	if ((__goscriptAwait = (left !== null && (left as any).__isVarRef !== true && (left as any).__goValue === undefined ? (left as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(left)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != (__goscriptAwait = (right !== null && (right as any).__isVarRef !== true && (right as any).__goValue === undefined ? (right as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(right)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return false
	}

	if (isHashable((__goscriptAwait = (left !== null && (left as any).__isVarRef !== true && (left as any).__goValue === undefined ? (left as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(left)).ValueType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
		return setsArEqualHashable((__goscriptAwait = (left !== null && (left as any).__isVarRef !== true && (left as any).__goValue === undefined ? (left as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(left)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), left, right)
	}
	return setsAreEqualUnhashable((__goscriptAwait = (left !== null && (left as any).__isVarRef !== true && (left as any).__goValue === undefined ? (left as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(left)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), left, right)
}

export async function setsArEqualHashable(size: number, l: __goscript_lazy_list.ValueList | null, r: __goscript_lazy_list.ValueList | null): globalThis.Promise<boolean> {
	let m: globalThis.Map<any, boolean> | null = $.makeMap<any, boolean>();
	// explicitly ignoring since we know there will not be an error
	;(__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(l)).ForEach($.functionValue(async (v: __goscript_value.Value): globalThis.Promise<$.GoError> => {
		$.mapSet(m, await toHashable((v).clone()), true)
		return null
	}, ({ kind: $.TypeKind.Function, params: ["wire.Value"], results: ["error"] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	return !$.comparableEqual(errNotEquals, (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(r)).ForEach($.functionValue(async (v: __goscript_value.Value): globalThis.Promise<$.GoError> => {
		{
			let [, ok] = $.mapGet<any, boolean, boolean>(m, await toHashable((v).clone()), false)
			if (!ok) {
				return errNotEquals
			}
		}
		return null
	}, ({ kind: $.TypeKind.Function, params: ["wire.Value"], results: ["error"] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
}

export async function setsAreEqualUnhashable(size: number, l: __goscript_lazy_list.ValueList | null, r: __goscript_lazy_list.ValueList | null): globalThis.Promise<boolean> {
	let lItems: $.Slice<__goscript_value.Value> = await __goscript_lazy_list.ValueListToSlice(l)

	return !$.comparableEqual(errNotEquals, (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(r)).ForEach($.functionValue(async (rItem: __goscript_value.Value): globalThis.Promise<$.GoError> => {
		let matched = false
		for (let __goscriptRangeTarget0 = lItems, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let lItem = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_value.Value)).clone()
			if (await ValuesAreEqual((lItem).clone(), (rItem).clone())) {
				matched = true
				break
			}
		}
		if (!matched) {
			return errNotEquals
		}
		return null
	}, ({ kind: $.TypeKind.Function, params: ["wire.Value"], results: ["error"] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
}

export async function MapsAreEqual(left: __goscript_lazy_list.MapItemList | null, right: __goscript_lazy_list.MapItemList | null): globalThis.Promise<boolean> {
	if ((__goscriptAwait = (left !== null && (left as any).__isVarRef !== true && (left as any).__goValue === undefined ? (left as Exclude<__goscript_lazy_list.MapItemList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.MapItemList, null>>(left)).KeyType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != (__goscriptAwait = (right !== null && (right as any).__isVarRef !== true && (right as any).__goValue === undefined ? (right as Exclude<__goscript_lazy_list.MapItemList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.MapItemList, null>>(right)).KeyType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return false
	}
	if ((__goscriptAwait = (left !== null && (left as any).__isVarRef !== true && (left as any).__goValue === undefined ? (left as Exclude<__goscript_lazy_list.MapItemList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.MapItemList, null>>(left)).ValueType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != (__goscriptAwait = (right !== null && (right as any).__isVarRef !== true && (right as any).__goValue === undefined ? (right as Exclude<__goscript_lazy_list.MapItemList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.MapItemList, null>>(right)).ValueType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return false
	}
	if ((__goscriptAwait = (left !== null && (left as any).__isVarRef !== true && (left as any).__goValue === undefined ? (left as Exclude<__goscript_lazy_list.MapItemList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.MapItemList, null>>(left)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != (__goscriptAwait = (right !== null && (right as any).__isVarRef !== true && (right as any).__goValue === undefined ? (right as Exclude<__goscript_lazy_list.MapItemList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.MapItemList, null>>(right)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return false
	}

	if (isHashable((__goscriptAwait = (left !== null && (left as any).__isVarRef !== true && (left as any).__goValue === undefined ? (left as Exclude<__goscript_lazy_list.MapItemList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.MapItemList, null>>(left)).KeyType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
		return mapsAreEqualHashable((__goscriptAwait = (left !== null && (left as any).__isVarRef !== true && (left as any).__goValue === undefined ? (left as Exclude<__goscript_lazy_list.MapItemList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.MapItemList, null>>(left)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), left, right)
	}
	return mapsAreEqualUnhashable((__goscriptAwait = (left !== null && (left as any).__isVarRef !== true && (left as any).__goValue === undefined ? (left as Exclude<__goscript_lazy_list.MapItemList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.MapItemList, null>>(left)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), left, right)
}

export async function mapsAreEqualHashable(size: number, l: __goscript_lazy_list.MapItemList | null, r: __goscript_lazy_list.MapItemList | null): globalThis.Promise<boolean> {
	let m: globalThis.Map<any, __goscript_value.Value> | null = $.makeMap<any, __goscript_value.Value>();

	// explicitly ignoring since we know there will not be an error
	;(__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<__goscript_lazy_list.MapItemList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.MapItemList, null>>(l)).ForEach($.functionValue(async (item: __goscript_value.MapItem): globalThis.Promise<$.GoError> => {
		$.mapSet(m, await toHashable((item.Key).clone()), (item.Value).clone())
		return null
	}, ({ kind: $.TypeKind.Function, params: ["wire.MapItem"], results: ["error"] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	return !$.comparableEqual(errNotEquals, (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<__goscript_lazy_list.MapItemList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.MapItemList, null>>(r)).ForEach($.functionValue(async (item: __goscript_value.MapItem): globalThis.Promise<$.GoError> => {
		let [lValue, ok] = $.mapGet<any, __goscript_value.Value, __goscript_value.Value>(m, await toHashable((item.Key).clone()), new __goscript_value.Value(undefined, true))
		if (!ok) {
			return errNotEquals
		}
		if (!await ValuesAreEqual((lValue).clone(), (item.Value).clone())) {
			return errNotEquals
		}
		return null
	}, ({ kind: $.TypeKind.Function, params: ["wire.MapItem"], results: ["error"] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
}

export async function mapsAreEqualUnhashable(size: number, l: __goscript_lazy_list.MapItemList | null, r: __goscript_lazy_list.MapItemList | null): globalThis.Promise<boolean> {
	let lItems: $.Slice<__goscript_value.MapItem> = await __goscript_lazy_list.MapItemListToSlice(l)

	return !$.comparableEqual(errNotEquals, (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<__goscript_lazy_list.MapItemList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.MapItemList, null>>(r)).ForEach($.functionValue(async (rItem: __goscript_value.MapItem): globalThis.Promise<$.GoError> => {
		let matched = false
		for (let __goscriptRangeTarget1 = lItems, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let lItem = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_value.MapItem)).clone()
			if (!await ValuesAreEqual((lItem.Key).clone(), (rItem.Key).clone())) {
				continue
			}
			if (!await ValuesAreEqual((lItem.Value).clone(), (rItem.Value).clone())) {
				continue
			}
			matched = true
		}

		if (!matched) {
			return errNotEquals
		}
		return null
	}, ({ kind: $.TypeKind.Function, params: ["wire.MapItem"], results: ["error"] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
}

export function isHashable(t: __goscript__type.Type): boolean {
	switch (t) {
		case 2:
		case 3:
		case 4:
		case 6:
		case 8:
		case 10:
		case 11:
		{
			return true
			break
		}
		default:
		{
			return false
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function toHashable(__goscriptParam2: __goscript_value.Value): globalThis.Promise<any> {
	let v: $.VarRef<__goscript_value.Value> = $.varRef(__goscriptParam2)
	switch (v.value.Type()) {
		case 2:
		case 3:
		case 4:
		case 6:
		case 8:
		case 10:
		{
			return v.value.Get()
			break
		}
		case 11:
		{
			return $.bytesToString(v.value.GetBinary())
			break
		}
		default:
		{
			$.panic(await fmt.Sprintf("value is not hashable: %v", $.interfaceValue((v.value).clone(), "wire.Value", "wire.Value")))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function ListsAreEqual(left: __goscript_lazy_list.ValueList | null, right: __goscript_lazy_list.ValueList | null): globalThis.Promise<boolean> {
	if ((__goscriptAwait = (left !== null && (left as any).__isVarRef !== true && (left as any).__goValue === undefined ? (left as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(left)).ValueType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != (__goscriptAwait = (right !== null && (right as any).__isVarRef !== true && (right as any).__goValue === undefined ? (right as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(right)).ValueType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return false
	}
	if ((__goscriptAwait = (left !== null && (left as any).__isVarRef !== true && (left as any).__goValue === undefined ? (left as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(left)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != (__goscriptAwait = (right !== null && (right as any).__isVarRef !== true && (right as any).__goValue === undefined ? (right as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(right)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return false
	}

	let leftItems: $.Slice<__goscript_value.Value> = await __goscript_lazy_list.ValueListToSlice(left)
	let rightItems: $.Slice<__goscript_value.Value> = await __goscript_lazy_list.ValueListToSlice(right)

	for (let __goscriptRangeTarget2 = leftItems, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow0 = $.sliceRange(rightItems), i = 0; i < __goscriptRangeWindow2.length; i++) {
		let lv = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as __goscript_value.Value)).clone()
		let rv = (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as __goscript_value.Value)).clone()
		if (!await ValuesAreEqual((lv).clone(), (rv).clone())) {
			return false
		}
	}

	return true
}

var __goscriptAwait: any
