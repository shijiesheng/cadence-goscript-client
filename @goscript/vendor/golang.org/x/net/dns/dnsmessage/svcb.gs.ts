// Generated file based on svcb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as slices from "@goscript/slices/index.js"

import * as __goscript_message from "./message.gs.ts"
import "@goscript/slices/index.js"
import "./message.gs.ts"

$.registerTypePackagePath("vendor/golang.org/x/net/dns/dnsmessage", ["dnsmessage.SVCBResource", "dnsmessage.HTTPSResource", "dnsmessage.SVCParam", "dnsmessage.SVCParamKey"])

export type SVCParamKey = number

$.registerNamedValueType(
	"dnsmessage.SVCParamKey",
	{GoString: (receiver: any, ...args: any[]) => (SVCParamKey_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (SVCParamKey_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*dnsmessage.SVCParamKey",
	{GoString: (receiver: any, ...args: any[]) => (SVCParamKey_GoString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (SVCParamKey_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class SVCBResource {
	public get Priority(): number {
		return this._fields.Priority
	}

	public set Priority(value: number) {
		this._fields.Priority = value
	}

	public get Target(): __goscript_message.Name {
		return this._fields.Target
	}

	public set Target(value: __goscript_message.Name) {
		this._fields.Target = value
	}

	public get Params(): $.Slice<SVCParam> {
		return this._fields.Params
	}

	public set Params(value: $.Slice<SVCParam>) {
		this._fields.Params = value
	}

	public _fields: {
		Priority: number
		Target: __goscript_message.Name
		Params: $.Slice<SVCParam>
	}

	constructor(init?: Partial<{Priority?: number, Target?: __goscript_message.Name, Params?: $.Slice<SVCParam>}>, __goscriptValue?: boolean) {
		this._fields = {
			Priority: init?.Priority ?? (0 as number),
			Target: init?.Target ? init.Target.clone() : new __goscript_message.Name(undefined, true),
			Params: init?.Params ?? (null! as $.Slice<SVCParam>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SVCBResource {
		return new SVCBResource(this, true)
	}

	public __goscriptAssign(source: SVCBResource): void {
		const target = this._fields
		const values = source._fields
		target.Priority = values.Priority
		$.assignStruct(target.Target, values.Target)
		target.Params = values.Params
	}

	public DeleteParam(key: SVCParamKey): boolean {
		let r: SVCBResource | $.VarRef<SVCBResource> | null = this;
		const r$: SVCBResource = r == null ? $.pointerTarget<SVCBResource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<SVCBResource>(r)
		for (let __goscriptRangeTarget0 = (r$ as SVCBResource).Params, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			if ($.arrayIndex((r$ as SVCBResource).Params!, i).Key == key) {
				;(r$ as SVCBResource).Params = (slices.Delete((r$ as SVCBResource).Params, i, i + 1) as $.Slice<SVCParam>)
				return true
			}
			if ($.arrayIndex((r$ as SVCBResource).Params!, i).Key > key) {
				break
			}
		}
		return false
	}

	public GetParam(key: SVCParamKey): [$.Slice<number>, boolean] {
		const r: SVCBResource | $.VarRef<SVCBResource> | null = this;
		let value: $.Slice<number> = null! as $.Slice<number>
		let ok: boolean = false
		const r$: SVCBResource = r == null ? $.pointerTarget<SVCBResource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<SVCBResource>(r)
		for (let __goscriptRangeTarget1 = (r$ as SVCBResource).Params, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			if ($.arrayIndex((r$ as SVCBResource).Params!, i).Key == key) {
				return [$.arrayIndex((r$ as SVCBResource).Params!, i).Value, true]
			}
			if ($.arrayIndex((r$ as SVCBResource).Params!, i).Key > key) {
				break
			}
		}
		return [null, false]
	}

	public GoString(): string {
		const r: SVCBResource | $.VarRef<SVCBResource> | null = this;
		const r$: SVCBResource = r == null ? $.pointerTarget<SVCBResource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<SVCBResource>(r)
		let b: $.Slice<number> = $.stringToBytes($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString("dnsmessage.SVCBResource{", "Priority: ")), __goscript_message.printUint16((r$ as SVCBResource).Priority))), ", ")), "Target: ")), (r$ as SVCBResource).Target.GoString())), ", ")), "Params: []dnsmessage.SVCParam{"))
		if ($.sliceLen((r$ as SVCBResource).Params) > 0) {
			b = $.appendSlice(b, $.stringToBytes($.markAsStructValue($.cloneStructValue($.arrayIndex((r$ as SVCBResource).Params!, 0))).GoString()), $.byteSliceHint)
			for (let __goscriptRangeTarget2 = $.goSlice((r$ as SVCBResource).Params, 1, undefined), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let p = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as SVCParam)).clone()
				b = $.appendSlice(b, $.stringToBytes($.concatString(", ", $.markAsStructValue($.cloneStructValue(p)).GoString())), $.byteSliceHint)
			}
		}
		b = $.appendSlice(b, $.stringToBytes("}}"), $.byteSliceHint)
		return $.bytesToString(b)
	}

	public SetParam(key: SVCParamKey, value: $.Slice<number>): void {
		let r: SVCBResource | $.VarRef<SVCBResource> | null = this;
		const r$: SVCBResource = r == null ? $.pointerTarget<SVCBResource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<SVCBResource>(r)
		let i = 0
		while (i < $.sliceLen((r$ as SVCBResource).Params)) {
			if ($.arrayIndex((r$ as SVCBResource).Params!, i).Key >= key) {
				break
			}
			i++
		}

		if ((i < $.sliceLen((r$ as SVCBResource).Params)) && ($.arrayIndex((r$ as SVCBResource).Params!, i).Key == key)) {
			$.arrayIndex((r$ as SVCBResource).Params!, i).Value = value
			return
		}

		;(r$ as SVCBResource).Params = (slices.Insert((r$ as SVCBResource).Params, i, new SVCParam({Key: key, Value: value}, true)) as $.Slice<SVCParam>)
	}

	public pack(msg: $.Slice<number>, _p1: globalThis.Map<string, number> | null, _p2: number): [$.Slice<number>, $.GoError] {
		const r: SVCBResource | $.VarRef<SVCBResource> | null = this;
		const r$: SVCBResource = r == null ? $.pointerTarget<SVCBResource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<SVCBResource>(r)
		let oldMsg: $.Slice<number> = msg
		msg = __goscript_message.packUint16(msg, (r$ as SVCBResource).Priority)
		// https://datatracker.ietf.org/doc/html/rfc3597#section-4 prohibits name
		// compression for RR types that are not "well-known".
		// https://datatracker.ietf.org/doc/html/rfc9460#section-2.2 explicitly states that
		// compression of the Target is prohibited, following RFC 3597.
		let __goscriptTuple0: any = (r$ as SVCBResource).Target.pack(msg, null, 0)
		msg = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [oldMsg, $.interfaceValue<$.GoError>(new __goscript_message.nestedError({s: "SVCBResource.Target", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		let previousKey: SVCParamKey = 0
		for (let __goscriptRangeTarget3 = (r$ as SVCBResource).Params, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
			let param = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as SVCParam)).clone()
			if ((i > 0) && (param.Key <= previousKey)) {
				return [oldMsg, $.interfaceValue<$.GoError>(new __goscript_message.nestedError({s: "SVCBResource.Params", err: __goscript_message.errParamOutOfOrder}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
			if ($.sliceLen(param.Value) > 65535) {
				return [oldMsg, $.interfaceValue<$.GoError>(new __goscript_message.nestedError({s: "SVCBResource.Params", err: __goscript_message.errTooLongSVCBValue}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
			msg = __goscript_message.packUint16(msg, $.uint(param.Key, 16))
			msg = __goscript_message.packUint16(msg, $.uint($.sliceLen(param.Value), 16))
			msg = $.appendSlice(msg, param.Value, $.byteSliceHint)
		}
		return [msg, null]
	}

	public realType(): __goscript_message.Type {
		const r: SVCBResource | $.VarRef<SVCBResource> | null = this;
		return 64
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.SVCBResource",
		() => new SVCBResource(),
		() => [$.methodSignature("DeleteParam", [["key", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.SVCParamKey")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetParam", [["key", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.SVCParamKey")]], [["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("SetParam", [["key", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.SVCParamKey")], ["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["_", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["_", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("realType", [], [/* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], true)],
		SVCBResource,
		() => [/* @__PURE__ */ $.structField("Priority", /* @__PURE__ */ $.basicType("uint16"), [0], 0, true), /* @__PURE__ */ $.structField("Target", "dnsmessage.Name", [1], 2, true), /* @__PURE__ */ $.structField("Params", /* @__PURE__ */ $.sliceType("dnsmessage.SVCParam"), [2], 264, true)]
	)
}

export class HTTPSResource {
	public get SVCBResource(): SVCBResource {
		return this._fields.SVCBResource
	}

	public set SVCBResource(value: SVCBResource) {
		this._fields.SVCBResource = value
	}

	public _fields: {
		SVCBResource: SVCBResource
	}

	constructor(init?: Partial<{SVCBResource?: SVCBResource}>, __goscriptValue?: boolean) {
		this._fields = {
			SVCBResource: init?.SVCBResource ? init.SVCBResource.clone() : new SVCBResource(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HTTPSResource {
		return new HTTPSResource(this, true)
	}

	public __goscriptAssign(source: HTTPSResource): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.SVCBResource, values.SVCBResource)
	}

	public GoString(): string {
		const r: HTTPSResource | $.VarRef<HTTPSResource> | null = this;
		return $.concatString(($.concatString("dnsmessage.HTTPSResource{SVCBResource: ", $.pointerValue<HTTPSResource>(r).SVCBResource.GoString())), "}")
	}

	public realType(): __goscript_message.Type {
		const r: HTTPSResource | $.VarRef<HTTPSResource> | null = this;
		return 65
	}

	public DeleteParam(key: any): any {
		return $.pointerValue<SVCBResource>(this.SVCBResource).DeleteParam(key)
	}

	public GetParam(key: any): any {
		return $.pointerValue<SVCBResource>(this.SVCBResource).GetParam(key)
	}

	public SetParam(key: any, value: any): any {
		return $.pointerValue<SVCBResource>(this.SVCBResource).SetParam(key, value)
	}

	public pack(msg: any, _p1: any, _p2: any): any {
		return $.pointerValue<SVCBResource>(this.SVCBResource).pack(msg, _p1, _p2)
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.HTTPSResource",
		() => new HTTPSResource(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("realType", [], [/* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], true), $.methodSignature("DeleteParam", [["key", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.SVCParamKey")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetParam", [["key", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.SVCParamKey")]], [["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("SetParam", [["key", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.SVCParamKey")], ["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["_", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["_", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true)],
		HTTPSResource,
		() => [/* @__PURE__ */ $.structField("SVCBResource", "dnsmessage.SVCBResource", [0], 0, true, { anonymous: true })]
	)
}

export class SVCParam {
	public get Key(): SVCParamKey {
		return this._fields.Key
	}

	public set Key(value: SVCParamKey) {
		this._fields.Key = value
	}

	public get Value(): $.Slice<number> {
		return this._fields.Value
	}

	public set Value(value: $.Slice<number>) {
		this._fields.Value = value
	}

	public _fields: {
		Key: SVCParamKey
		Value: $.Slice<number>
	}

	constructor(init?: Partial<{Key?: SVCParamKey, Value?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Key: init?.Key ?? (0 as SVCParamKey),
			Value: init?.Value ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SVCParam {
		return new SVCParam(this, true)
	}

	public __goscriptAssign(source: SVCParam): void {
		const target = this._fields
		const values = source._fields
		target.Key = values.Key
		target.Value = values.Value
	}

	public GoString(): string {
		const p = this;
		return $.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString("dnsmessage.SVCParam{", "Key: ")), SVCParamKey_GoString(p.Key))), ", ")), "Value: []byte{")), __goscript_message.printByteSlice(p.Value))), "}}")
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.SVCParam",
		() => new SVCParam(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")])],
		SVCParam,
		() => [/* @__PURE__ */ $.structField("Key", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.SVCParamKey"), [0], 0, true), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, true)]
	)
}

export const SVCParamMandatory: SVCParamKey = 0

export const SVCParamALPN: SVCParamKey = 1

export const SVCParamNoDefaultALPN: SVCParamKey = 2

export const SVCParamPort: SVCParamKey = 3

export const SVCParamIPv4Hint: SVCParamKey = 4

export const SVCParamECH: SVCParamKey = 5

export const SVCParamIPv6Hint: SVCParamKey = 6

export const SVCParamDOHPath: SVCParamKey = 7

export const SVCParamOHTTP: SVCParamKey = 8

export const SVCParamTLSSupportedGroups: SVCParamKey = 9

export let svcParamKeyNames: globalThis.Map<SVCParamKey, string> | null = $.makeMap<SVCParamKey, string>([[0, "Mandatory"], [1, "ALPN"], [2, "NoDefaultALPN"], [3, "Port"], [4, "IPv4Hint"], [5, "ECH"], [6, "IPv6Hint"], [7, "DOHPath"], [8, "OHTTP"], [9, "TLSSupportedGroups"]])

export function __goscript_set_svcParamKeyNames(__goscriptValue: globalThis.Map<SVCParamKey, string> | null): void {
	svcParamKeyNames = __goscriptValue
}

export function SVCParamKey_String(k: SVCParamKey): string {
	{
		let [n, ok] = $.mapGet<SVCParamKey, string, string>(svcParamKeyNames, k, "")
		if (ok) {
			return n
		}
	}
	return __goscript_message.printUint16($.uint(k, 16))
}

export function SVCParamKey_GoString(k: SVCParamKey): string {
	{
		let [n, ok] = $.mapGet<SVCParamKey, string, string>(svcParamKeyNames, k, "")
		if (ok) {
			return $.concatString("dnsmessage.SVCParam", n)
		}
	}
	return __goscript_message.printUint16($.uint(k, 16))
}

export function unpackSVCBResource(msg: $.Slice<number>, off: number, length: number): [SVCBResource, $.GoError] {
	// Wire format reference: https://www.rfc-editor.org/rfc/rfc9460.html#section-2.2.
	let r = new SVCBResource(undefined, true)
	let paramsOff: number = off
	let bodyEnd = off + $.int(length)

	let err: $.GoError = null! as $.GoError
	{
		let __goscriptTuple1: any = __goscript_message.unpackUint16(msg, paramsOff)
		r.Priority = __goscriptTuple1[0]
		paramsOff = __goscriptTuple1[1]
		err = __goscriptTuple1[2]
		if (err != null) {
			return [new SVCBResource(undefined, true), $.interfaceValue<$.GoError>(new __goscript_message.nestedError({s: "Priority", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
	}

	{
		let __goscriptTuple2: any = r.Target.unpack(msg, paramsOff)
		paramsOff = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [new SVCBResource(undefined, true), $.interfaceValue<$.GoError>(new __goscript_message.nestedError({s: "Target", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
	}

	// Two-pass parsing to avoid allocations.
	// First, count the number of params.
	let n = 0
	let totalValueLen: number = 0
	off = paramsOff
	let previousKey: number = 0
	while (off < bodyEnd) {
		let key: number = 0
		let size: number = 0
		{
			let __goscriptTuple3: any = __goscript_message.unpackUint16(msg, off)
			key = __goscriptTuple3[0]
			off = __goscriptTuple3[1]
			err = __goscriptTuple3[2]
			if (err != null) {
				return [new SVCBResource(undefined, true), $.interfaceValue<$.GoError>(new __goscript_message.nestedError({s: "Params key", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		if ((n > 0) && (key <= previousKey)) {
			// As per https://www.rfc-editor.org/rfc/rfc9460.html#section-2.2, clients MUST
			// consider the RR malformed if the SvcParamKeys are not in strictly increasing numeric order
			return [new SVCBResource(undefined, true), $.interfaceValue<$.GoError>(new __goscript_message.nestedError({s: "Params", err: __goscript_message.errParamOutOfOrder}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		{
			let __goscriptTuple4: any = __goscript_message.unpackUint16(msg, off)
			size = __goscriptTuple4[0]
			off = __goscriptTuple4[1]
			err = __goscriptTuple4[2]
			if (err != null) {
				return [new SVCBResource(undefined, true), $.interfaceValue<$.GoError>(new __goscript_message.nestedError({s: "Params value length", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		if ((off + $.int(size)) > bodyEnd) {
			return [new SVCBResource(undefined, true), __goscript_message.errResourceLen]
		}
		totalValueLen = $.uint(totalValueLen + (size), 16)
		off = off + ($.int(size))
		n++
	}
	if (off != bodyEnd) {
		return [new SVCBResource(undefined, true), __goscript_message.errResourceLen]
	}

	// Second, fill in the params.
	r.Params = $.makeSlice<SVCParam>(n, undefined, undefined, () => new SVCParam(undefined, true))
	// valuesBuf is used to hold all param values to reduce allocations.
	// Each param's Value slice will point into this buffer.
	let valuesBuf: $.Slice<number> = $.makeSlice<number>(totalValueLen, undefined, "byte")
	off = paramsOff
	for (let i = 0; i < n; i++) {
		let p: SVCParam | $.VarRef<SVCParam> | null = $.indexRef(r.Params!, i)
		let p$: SVCParam = p == null ? $.pointerTarget<SVCParam>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<SVCParam>(p)
		let key: number = 0
		let size: number = 0
		{
			let __goscriptTuple5: any = __goscript_message.unpackUint16(msg, off)
			key = __goscriptTuple5[0]
			off = __goscriptTuple5[1]
			err = __goscriptTuple5[2]
			if (err != null) {
				return [new SVCBResource(undefined, true), $.interfaceValue<$.GoError>(new __goscript_message.nestedError({s: "param key", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		;(p$ as SVCParam).Key = $.uint(key, 16)
		{
			let __goscriptTuple6: any = __goscript_message.unpackUint16(msg, off)
			size = __goscriptTuple6[0]
			off = __goscriptTuple6[1]
			err = __goscriptTuple6[2]
			if (err != null) {
				return [new SVCBResource(undefined, true), $.interfaceValue<$.GoError>(new __goscript_message.nestedError({s: "param length", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		if ($.sliceLen($.goSlice(msg, off, undefined)) < $.int(size)) {
			return [new SVCBResource(undefined, true), $.interfaceValue<$.GoError>(new __goscript_message.nestedError({s: "param value", err: __goscript_message.errCalcLen}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		if ($.copy(valuesBuf, $.goSlice($.goSlice(msg, off, undefined), undefined, $.int(size))) != $.int(size)) {
			return [new SVCBResource(undefined, true), $.interfaceValue<$.GoError>(new __goscript_message.nestedError({s: "param value", err: __goscript_message.errCalcLen}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		;(p$ as SVCParam).Value = $.goSlice(valuesBuf, undefined, size, size)
		valuesBuf = $.goSlice(valuesBuf, size, undefined)
		off = off + ($.int(size))
	}

	return [(r).clone(), null]
}
