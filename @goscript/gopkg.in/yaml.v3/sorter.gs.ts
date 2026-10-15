// Generated file based on sorter.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as unicode from "@goscript/unicode/index.js"
import "@goscript/reflect/index.js"
import "@goscript/unicode/index.js"

$.registerTypePackagePath("gopkg.in/yaml.v3", ["yaml.keyList"])

export type keyList = $.Slice<reflect.Value>

$.registerNamedType("yaml.keyList", /* @__PURE__ */ $.sliceType("reflect.Value"));

$.registerNamedValueType(
	"yaml.keyList",
	{Len: (receiver: any, ...args: any[]) => (keyList_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (keyList_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (keyList_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*yaml.keyList",
	{Len: (receiver: any, ...args: any[]) => (keyList_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (keyList_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (keyList_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export function keyList_Len(l: keyList): number {
	return $.sliceLen((l as keyList))
}

export function keyList_Swap(l: keyList, i: number, j: number): void {
	let __goscriptAssign0_0: reflect.Value = $.markAsStructValue($.cloneStructValue($.arrayIndex(l!, j)))
	let __goscriptAssign0_1: reflect.Value = $.markAsStructValue($.cloneStructValue($.arrayIndex(l!, i)))
	$.assignStruct($.sliceElems(l!)[$.sliceSlot(l!, i)], __goscriptAssign0_0)
	$.assignStruct($.sliceElems(l!)[$.sliceSlot(l!, j)], __goscriptAssign0_1)
}

export function keyList_Less(l: keyList, i: number, j: number): boolean {
	let a = $.markAsStructValue($.cloneStructValue($.arrayIndex(l!, i)))
	let b = $.markAsStructValue($.cloneStructValue($.arrayIndex(l!, j)))
	let ak = $.markAsStructValue($.cloneStructValue(a)).Kind()
	let bk = $.markAsStructValue($.cloneStructValue(b)).Kind()
	while (((ak == 20) || (ak == 22)) && !$.markAsStructValue($.cloneStructValue(a)).IsNil()) {
		a = $.assignStruct(a, $.markAsStructValue($.cloneStructValue(a)).Elem())
		ak = $.markAsStructValue($.cloneStructValue(a)).Kind()
	}
	while (((bk == 20) || (bk == 22)) && !$.markAsStructValue($.cloneStructValue(b)).IsNil()) {
		b = $.assignStruct(b, $.markAsStructValue($.cloneStructValue(b)).Elem())
		bk = $.markAsStructValue($.cloneStructValue(b)).Kind()
	}
	let [af, aok] = keyFloat(a)
	let [bf, bok] = keyFloat(b)
	if (aok && bok) {
		if (af != bf) {
			return af < bf
		}
		if (ak != bk) {
			return ak < bk
		}
		return numLess(a, b)
	}
	if ((ak != 24) || (bk != 24)) {
		return ak < bk
	}
	let ar: $.Slice<number> = $.stringToRunes($.markAsStructValue($.cloneStructValue(a)).String())
	let br: $.Slice<number> = $.stringToRunes($.markAsStructValue($.cloneStructValue(b)).String())
	let digits = false
	for (let __goscriptSliceWindow0 = $.sliceRange(ar), __goscriptSliceWindow1 = $.sliceRange(br), __goscriptShadow0 = 0; (__goscriptShadow0 < __goscriptSliceWindow0.length) && (__goscriptShadow0 < __goscriptSliceWindow1.length); __goscriptShadow0++) {
		if (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, __goscriptShadow0)] as number) == ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, __goscriptShadow0)] as number)) {
			digits = unicode.IsDigit(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, __goscriptShadow0)] as number))
			continue
		}
		let al = unicode.IsLetter(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, __goscriptShadow0)] as number))
		let bl = unicode.IsLetter(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, __goscriptShadow0)] as number))
		if (al && bl) {
			return ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, __goscriptShadow0)] as number) < ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, __goscriptShadow0)] as number)
		}
		if (al || bl) {
			if (digits) {
				return al
			} else {
				return bl
			}
		}
		let ai: number = 0
		let bi: number = 0
		let an: bigint = 0n
		let bn: bigint = 0n
		if ((((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, __goscriptShadow0)] as number) == 48) || (((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, __goscriptShadow0)] as number) == 48)) {
			for (let __goscriptShadow1 = __goscriptShadow0 - 1; (__goscriptShadow1 >= 0) && unicode.IsDigit(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, __goscriptShadow1)] as number)); __goscriptShadow1--) {
				if (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, __goscriptShadow1)] as number) != 48) {
					an = 1n
					bn = 1n
					break
				}
			}
		}
		for (ai = __goscriptShadow0; (ai < __goscriptSliceWindow0.length) && unicode.IsDigit(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, ai)] as number)); ai++) {
			an = $.int64Add(($.int64Mul(an, 10n)), $.int64($.int(((((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, ai)] as number) - 48) | 0), 32)))
		}
		for (bi = __goscriptShadow0; (bi < __goscriptSliceWindow1.length) && unicode.IsDigit(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, bi)] as number)); bi++) {
			bn = $.int64Add(($.int64Mul(bn, 10n)), $.int64($.int(((((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, bi)] as number) - 48) | 0), 32)))
		}
		if (an != bn) {
			return an < bn
		}
		if (ai != bi) {
			return ai < bi
		}
		return ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, __goscriptShadow0)] as number) < ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, __goscriptShadow0)] as number)
	}
	return $.sliceLen(ar) < $.sliceLen(br)
}

export function keyFloat(v: reflect.Value): [number, boolean] {
	let f: number = 0
	let ok: boolean = false
	switch ($.markAsStructValue($.cloneStructValue(v)).Kind()) {
		case reflect.Int:
		case reflect.Int8:
		case reflect.Int16:
		case reflect.Int32:
		case reflect.Int64:
		{
			return [globalThis.Number($.markAsStructValue($.cloneStructValue(v)).Int()), true]
			break
		}
		case reflect.Float32:
		case reflect.Float64:
		{
			return [$.markAsStructValue($.cloneStructValue(v)).Float(), true]
			break
		}
		case reflect.Uint:
		case reflect.Uint8:
		case reflect.Uint16:
		case reflect.Uint32:
		case reflect.Uint64:
		case reflect.Uintptr:
		{
			return [globalThis.Number($.markAsStructValue($.cloneStructValue(v)).Uint()), true]
			break
		}
		case reflect.Bool:
		{
			if ($.markAsStructValue($.cloneStructValue(v)).Bool()) {
				return [1, true]
			}
			return [0, true]
			break
		}
	}
	return [0, false]
}

export function numLess(a: reflect.Value, b: reflect.Value): boolean {
	switch ($.markAsStructValue($.cloneStructValue(a)).Kind()) {
		case reflect.Int:
		case reflect.Int8:
		case reflect.Int16:
		case reflect.Int32:
		case reflect.Int64:
		{
			return $.markAsStructValue($.cloneStructValue(a)).Int() < $.markAsStructValue($.cloneStructValue(b)).Int()
			break
		}
		case reflect.Float32:
		case reflect.Float64:
		{
			return $.markAsStructValue($.cloneStructValue(a)).Float() < $.markAsStructValue($.cloneStructValue(b)).Float()
			break
		}
		case reflect.Uint:
		case reflect.Uint8:
		case reflect.Uint16:
		case reflect.Uint32:
		case reflect.Uint64:
		case reflect.Uintptr:
		{
			return $.markAsStructValue($.cloneStructValue(a)).Uint() < $.markAsStructValue($.cloneStructValue(b)).Uint()
			break
		}
		case reflect.Bool:
		{
			return !$.markAsStructValue($.cloneStructValue(a)).Bool() && $.markAsStructValue($.cloneStructValue(b)).Bool()
			break
		}
	}
	$.panic("not a number")
	throw new globalThis.Error("goscript: unreachable return")
}
