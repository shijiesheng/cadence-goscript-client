// Generated file based on autoneg.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"

$.registerTypePackagePath("github.com/prometheus/common/internal/bitbucket.org/ww/goautoneg", ["goautoneg.Accept", "goautoneg.accept_slice"])

export type accept_slice = $.Slice<Accept>

$.registerNamedType("goautoneg.accept_slice", /* @__PURE__ */ $.sliceType("goautoneg.Accept"));

$.registerNamedValueType(
	"goautoneg.accept_slice",
	{Len: (receiver: any, ...args: any[]) => (accept_slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (accept_slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (accept_slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*goautoneg.accept_slice",
	{Len: (receiver: any, ...args: any[]) => (accept_slice_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (accept_slice_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (accept_slice_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class Accept {
	public get Type(): string {
		return this._fields.Type
	}

	public set Type(value: string) {
		this._fields.Type = value
	}

	public get SubType(): string {
		return this._fields.SubType
	}

	public set SubType(value: string) {
		this._fields.SubType = value
	}

	public get Q(): number {
		return this._fields.Q
	}

	public set Q(value: number) {
		this._fields.Q = value
	}

	public get Params(): globalThis.Map<string, string> | null {
		return this._fields.Params
	}

	public set Params(value: globalThis.Map<string, string> | null) {
		this._fields.Params = value
	}

	public _fields: {
		Type: string
		SubType: string
		Q: number
		Params: globalThis.Map<string, string> | null
	}

	constructor(init?: Partial<{Type?: string, SubType?: string, Q?: number, Params?: globalThis.Map<string, string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? ("" as string),
			SubType: init?.SubType ?? ("" as string),
			Q: init?.Q ?? (0 as number),
			Params: init?.Params ?? (null! as globalThis.Map<string, string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Accept {
		return new Accept(this, true)
	}

	public __goscriptAssign(source: Accept): void {
		const target = this._fields
		const values = source._fields
		target.Type = values.Type
		target.SubType = values.SubType
		target.Q = values.Q
		target.Params = values.Params
	}

	static __typeInfo = $.registerStructType(
		"goautoneg.Accept",
		() => new Accept(),
		() => [],
		Accept,
		() => [/* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("SubType", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Q", /* @__PURE__ */ $.basicType("float64"), [2], 32, true), /* @__PURE__ */ $.structField("Params", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [3], 40, true)]
	)
}

export function accept_slice_Len(accept: accept_slice): number {
	let slice: $.Slice<Accept> = accept
	return $.sliceLen(slice)
}

export function accept_slice_Less(accept: accept_slice, i: number, j: number): boolean {
	let slice: $.Slice<Accept> = accept
	let ai = ($.arrayIndex(slice!, i)).clone()
	let aj = ($.arrayIndex(slice!, j)).clone()
	if (ai.Q > aj.Q) {
		return true
	}
	if ((!$.stringEqual(ai.Type, "*")) && ($.stringEqual(aj.Type, "*"))) {
		return true
	}
	if ((!$.stringEqual(ai.SubType, "*")) && ($.stringEqual(aj.SubType, "*"))) {
		return true
	}
	return false
}

export function accept_slice_Swap(accept: accept_slice, i: number, j: number): void {
	let slice: $.Slice<Accept> = accept
	let __goscriptAssign0_0: Accept = ($.arrayIndex(slice!, j)).clone()
	let __goscriptAssign0_1: Accept = ($.arrayIndex(slice!, i)).clone()
	$.assignStruct($.sliceElems(slice!)[$.sliceSlot(slice!, i)], __goscriptAssign0_0)
	$.assignStruct($.sliceElems(slice!)[$.sliceSlot(slice!, j)], __goscriptAssign0_1)
}

export async function ParseAccept(header: string): globalThis.Promise<$.Slice<Accept>> {
	let accept: $.Slice<Accept> = null! as $.Slice<Accept>
	let parts: $.Slice<string> = strings.Split(header, ",")
	accept = $.makeSlice<Accept>(0, $.sliceLen(parts), undefined, () => new Accept(undefined, true))
	for (let __goscriptRangeTarget1 = parts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let part = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		let __goscriptShadow0 = part
		let __goscriptShadow1 = strings.Trim(__goscriptShadow0, " ")

		let a = new Accept(undefined, true)
		a.Params = $.makeMap<string, string>()
		a.Q = 1.0

		let mrp: $.Slice<string> = strings.Split(__goscriptShadow1, ";")

		let media_range = $.arrayIndex(mrp!, 0)
		let sp: $.Slice<string> = strings.Split(media_range, "/")
		a.Type = strings.Trim($.arrayIndex(sp!, 0), " ")

		switch ((true as boolean)) {
			case ($.sliceLen(sp) == 1) && ($.stringEqual(a.Type, "*")):
			{
				a.SubType = "*"
				break
			}
			case $.sliceLen(sp) == 2:
			{
				a.SubType = strings.Trim($.arrayIndex(sp!, 1), " ")
				break
			}
			default:
			{
				continue
				break
			}
		}

		if ($.sliceLen(mrp) == 1) {
			accept = $.appendOne(accept, (a).clone())
			continue
		}

		for (let __goscriptRangeTarget0 = $.goSlice(mrp, 1, undefined), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let param = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
			let __goscriptShadow2: $.Slice<string> = strings.SplitN(param, "=", 2)
			if ($.sliceLen(__goscriptShadow2) != 2) {
				continue
			}
			let token = strings.Trim($.arrayIndex(__goscriptShadow2!, 0), " ")
			if ($.stringEqual(token, "q")) {
				let __goscriptTuple0: any = strconv.ParseFloat($.arrayIndex(__goscriptShadow2!, 1), 32)
				a.Q = __goscriptTuple0[0]
			} else {
				$.mapSet(a.Params, token, strings.Trim($.arrayIndex(__goscriptShadow2!, 1), " "))
			}
		}

		accept = $.appendOne(accept, (a).clone())
	}

	let slice: accept_slice = ((accept as accept_slice) as accept_slice)
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>(slice, "goautoneg.accept_slice", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)

	return accept
}

export async function Negotiate(header: string, alternatives: $.Slice<string>): globalThis.Promise<string> {
	let content_type: string = ""
	let asp: $.Slice<$.Slice<string>> = $.makeSlice<$.Slice<string>>(0, $.sliceLen(alternatives))
	for (let __goscriptRangeTarget2 = alternatives, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let ctype = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
		asp = $.appendOne(asp, strings.SplitN(ctype, "/", 2), $.appendZeros.nil)
	}
	for (let __goscriptRangeTarget4 = await ParseAccept(header), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget4), __goscriptSliceWindow0 = $.sliceRange(alternatives), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let clause = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as Accept)).clone()
		for (let __goscriptRangeTarget3 = asp, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow4.length; i++) {
			let ctsp = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as $.Slice<string>)
			if (($.stringEqual(clause.Type, $.arrayIndex(ctsp!, 0))) && ($.stringEqual(clause.SubType, $.arrayIndex(ctsp!, 1)))) {
				content_type = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string)
				return content_type
			}
			if (($.stringEqual(clause.Type, $.arrayIndex(ctsp!, 0))) && ($.stringEqual(clause.SubType, "*"))) {
				content_type = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string)
				return content_type
			}
			if (($.stringEqual(clause.Type, "*")) && ($.stringEqual(clause.SubType, "*"))) {
				content_type = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string)
				return content_type
			}
		}
	}
	return content_type
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (accept_slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (accept_slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (accept_slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("goautoneg.Accept", "goautoneg.accept_slice"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}
