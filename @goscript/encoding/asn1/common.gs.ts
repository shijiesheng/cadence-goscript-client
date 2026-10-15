// Generated file based on common.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as __goscript_asn1 from "./asn1.gs.ts"
import "@goscript/reflect/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "./asn1.gs.ts"

$.registerTypePackagePath("encoding/asn1", ["asn1.tagAndLength", "asn1.fieldParameters"])

export class tagAndLength {
	public get _class(): number {
		return this._fields._class
	}

	public set _class(value: number) {
		this._fields._class = value
	}

	public get tag(): number {
		return this._fields.tag
	}

	public set tag(value: number) {
		this._fields.tag = value
	}

	public get length(): number {
		return this._fields.length
	}

	public set length(value: number) {
		this._fields.length = value
	}

	public get isCompound(): boolean {
		return this._fields.isCompound
	}

	public set isCompound(value: boolean) {
		this._fields.isCompound = value
	}

	public _fields: {
		_class: number
		tag: number
		length: number
		isCompound: boolean
	}

	constructor(init?: Partial<{_class?: number, tag?: number, length?: number, isCompound?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			_class: init?._class ?? (0 as number),
			tag: init?.tag ?? (0 as number),
			length: init?.length ?? (0 as number),
			isCompound: init?.isCompound ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tagAndLength {
		return new tagAndLength(this, true)
	}

	public __goscriptAssign(source: tagAndLength): void {
		const target = this._fields
		const values = source._fields
		target._class = values._class
		target.tag = values.tag
		target.length = values.length
		target.isCompound = values.isCompound
	}

	static __typeInfo = $.registerStructType(
		"asn1.tagAndLength",
		() => new tagAndLength(),
		() => [],
		tagAndLength,
		() => [/* @__PURE__ */ $.structField("class", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { key: "_class", pkgPath: "encoding/asn1" }), /* @__PURE__ */ $.structField("tag", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "encoding/asn1" }), /* @__PURE__ */ $.structField("length", /* @__PURE__ */ $.basicType("int"), [2], 16, false, { pkgPath: "encoding/asn1" }), /* @__PURE__ */ $.structField("isCompound", /* @__PURE__ */ $.basicType("bool"), [3], 24, false, { pkgPath: "encoding/asn1" })]
	)
}

export class fieldParameters {
	public get optional(): boolean {
		return this._fields.optional
	}

	public set optional(value: boolean) {
		this._fields.optional = value
	}

	public get explicit(): boolean {
		return this._fields.explicit
	}

	public set explicit(value: boolean) {
		this._fields.explicit = value
	}

	public get application(): boolean {
		return this._fields.application
	}

	public set application(value: boolean) {
		this._fields.application = value
	}

	public get _private(): boolean {
		return this._fields._private
	}

	public set _private(value: boolean) {
		this._fields._private = value
	}

	public get defaultValue(): $.VarRef<bigint> | null {
		return this._fields.defaultValue
	}

	public set defaultValue(value: $.VarRef<bigint> | null) {
		this._fields.defaultValue = value
	}

	public get tag(): $.VarRef<number> | null {
		return this._fields.tag
	}

	public set tag(value: $.VarRef<number> | null) {
		this._fields.tag = value
	}

	public get stringType(): number {
		return this._fields.stringType
	}

	public set stringType(value: number) {
		this._fields.stringType = value
	}

	public get timeType(): number {
		return this._fields.timeType
	}

	public set timeType(value: number) {
		this._fields.timeType = value
	}

	public get _set(): boolean {
		return this._fields._set
	}

	public set _set(value: boolean) {
		this._fields._set = value
	}

	public get omitEmpty(): boolean {
		return this._fields.omitEmpty
	}

	public set omitEmpty(value: boolean) {
		this._fields.omitEmpty = value
	}

	public _fields: {
		optional: boolean
		explicit: boolean
		application: boolean
		_private: boolean
		defaultValue: $.VarRef<bigint> | null
		tag: $.VarRef<number> | null
		stringType: number
		timeType: number
		_set: boolean
		omitEmpty: boolean
	}

	constructor(init?: Partial<{optional?: boolean, explicit?: boolean, application?: boolean, _private?: boolean, defaultValue?: $.VarRef<bigint> | null, tag?: $.VarRef<number> | null, stringType?: number, timeType?: number, _set?: boolean, omitEmpty?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			optional: init?.optional ?? (false as boolean),
			explicit: init?.explicit ?? (false as boolean),
			application: init?.application ?? (false as boolean),
			_private: init?._private ?? (false as boolean),
			defaultValue: init?.defaultValue ?? (null! as $.VarRef<bigint> | null),
			tag: init?.tag ?? (null! as $.VarRef<number> | null),
			stringType: init?.stringType ?? (0 as number),
			timeType: init?.timeType ?? (0 as number),
			_set: init?._set ?? (false as boolean),
			omitEmpty: init?.omitEmpty ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fieldParameters {
		return new fieldParameters(this, true)
	}

	public __goscriptAssign(source: fieldParameters): void {
		const target = this._fields
		const values = source._fields
		target.optional = values.optional
		target.explicit = values.explicit
		target.application = values.application
		target._private = values._private
		target.defaultValue = values.defaultValue
		target.tag = values.tag
		target.stringType = values.stringType
		target.timeType = values.timeType
		target._set = values._set
		target.omitEmpty = values.omitEmpty
	}

	static __typeInfo = $.registerStructType(
		"asn1.fieldParameters",
		() => new fieldParameters(),
		() => [],
		fieldParameters,
		() => [/* @__PURE__ */ $.structField("optional", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "encoding/asn1" }), /* @__PURE__ */ $.structField("explicit", /* @__PURE__ */ $.basicType("bool"), [1], 1, false, { pkgPath: "encoding/asn1" }), /* @__PURE__ */ $.structField("application", /* @__PURE__ */ $.basicType("bool"), [2], 2, false, { pkgPath: "encoding/asn1" }), /* @__PURE__ */ $.structField("private", /* @__PURE__ */ $.basicType("bool"), [3], 3, false, { key: "_private", pkgPath: "encoding/asn1" }), /* @__PURE__ */ $.structField("defaultValue", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [4], 8, false, { pkgPath: "encoding/asn1" }), /* @__PURE__ */ $.structField("tag", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int")), [5], 16, false, { pkgPath: "encoding/asn1" }), /* @__PURE__ */ $.structField("stringType", /* @__PURE__ */ $.basicType("int"), [6], 24, false, { pkgPath: "encoding/asn1" }), /* @__PURE__ */ $.structField("timeType", /* @__PURE__ */ $.basicType("int"), [7], 32, false, { pkgPath: "encoding/asn1" }), /* @__PURE__ */ $.structField("set", /* @__PURE__ */ $.basicType("bool"), [8], 40, false, { key: "_set", pkgPath: "encoding/asn1" }), /* @__PURE__ */ $.structField("omitEmpty", /* @__PURE__ */ $.basicType("bool"), [9], 41, false, { pkgPath: "encoding/asn1" })]
	)
}

export const TagBoolean: number = 1

export const TagInteger: number = 2

export const TagBitString: number = 3

export const TagOctetString: number = 4

export const TagNull: number = 5

export const TagOID: number = 6

export const TagEnum: number = 10

export const TagUTF8String: number = 12

export const TagSequence: number = 16

export const TagSet: number = 17

export const TagNumericString: number = 18

export const TagPrintableString: number = 19

export const TagT61String: number = 20

export const TagIA5String: number = 22

export const TagUTCTime: number = 23

export const TagGeneralizedTime: number = 24

export const TagGeneralString: number = 27

export const TagBMPString: number = 30

export const ClassUniversal: number = 0

export const ClassApplication: number = 1

export const ClassContextSpecific: number = 2

export const ClassPrivate: number = 3

export function parseFieldParameters(str: string): fieldParameters {
	let ret: fieldParameters = new fieldParameters(undefined, true)
	let part: string = ""
	while ($.stringLen(str) > 0) {
		let __goscriptTuple0: any = strings.Cut(str, ",")
		part = __goscriptTuple0[0]
		str = __goscriptTuple0[1]
		switch ((true as boolean)) {
			case $.stringEqual(part, "optional"):
			{
				ret.optional = true
				break
			}
			case $.stringEqual(part, "explicit"):
			{
				ret.explicit = true
				if (ret.tag == null) {
					ret.tag = $.varRef<number>(0)
				}
				break
			}
			case $.stringEqual(part, "generalized"):
			{
				ret.timeType = 24
				break
			}
			case $.stringEqual(part, "utc"):
			{
				ret.timeType = 23
				break
			}
			case $.stringEqual(part, "ia5"):
			{
				ret.stringType = 22
				break
			}
			case $.stringEqual(part, "printable"):
			{
				ret.stringType = 19
				break
			}
			case $.stringEqual(part, "numeric"):
			{
				ret.stringType = 18
				break
			}
			case $.stringEqual(part, "utf8"):
			{
				ret.stringType = 12
				break
			}
			case strings.HasPrefix(part, "default:"):
			{
				let [i, err] = strconv.ParseInt($.sliceStringOrBytes(part, 8, undefined), 10, 64)
				if (err == null) {
					ret.defaultValue = $.varRef<bigint>(0n)
					ret.defaultValue!.value = i
				}
				break
			}
			case strings.HasPrefix(part, "tag:"):
			{
				let [i, err] = strconv.Atoi($.sliceStringOrBytes(part, 4, undefined))
				if (err == null) {
					ret.tag = $.varRef<number>(0)
					ret.tag!.value = i
				}
				break
			}
			case $.stringEqual(part, "set"):
			{
				ret._set = true
				break
			}
			case $.stringEqual(part, "application"):
			{
				ret.application = true
				if (ret.tag == null) {
					ret.tag = $.varRef<number>(0)
				}
				break
			}
			case $.stringEqual(part, "private"):
			{
				ret._private = true
				if (ret.tag == null) {
					ret.tag = $.varRef<number>(0)
				}
				break
			}
			case $.stringEqual(part, "omitempty"):
			{
				ret.omitEmpty = true
				break
			}
		}
	}
	return ret
}

export async function getUniversalType(t: reflect.Type | null): globalThis.Promise<[boolean, number, boolean, boolean]> {
	let matchAny: boolean = false
	let tagNumber: number = 0
	let isCompound: boolean = false
	let ok: boolean = false
	{
		let __goscriptSwitch0 = t
		switch ((true as boolean)) {
			case $.comparableEqual(__goscriptSwitch0, __goscript_asn1.rawValueType):
			{
				return [true, -1, false, true]
				break
			}
			case $.comparableEqual(__goscriptSwitch0, __goscript_asn1.objectIdentifierType):
			{
				return [false, 6, false, true]
				break
			}
			case $.comparableEqual(__goscriptSwitch0, __goscript_asn1.bitStringType):
			{
				return [false, 3, false, true]
				break
			}
			case $.comparableEqual(__goscriptSwitch0, __goscript_asn1.timeType):
			{
				return [false, 23, false, true]
				break
			}
			case $.comparableEqual(__goscriptSwitch0, __goscript_asn1.enumeratedType):
			{
				return [false, 10, false, true]
				break
			}
			case $.comparableEqual(__goscriptSwitch0, __goscript_asn1.bigIntType):
			{
				return [false, 2, false, true]
				break
			}
		}
	}
	switch ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		case reflect.Bool:
		{
			return [false, 1, false, true]
			break
		}
		case reflect.Int:
		case reflect.Int8:
		case reflect.Int16:
		case reflect.Int32:
		case reflect.Int64:
		{
			return [false, 2, false, true]
			break
		}
		case reflect.Struct:
		{
			return [false, 16, true, true]
			break
		}
		case reflect.Slice:
		{
			if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8) {
				return [false, 4, false, true]
			}
			if (strings.HasSuffix((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "SET")) {
				return [false, 17, true, true]
			}
			return [false, 16, true, true]
			break
		}
		case reflect.String:
		{
			return [false, 19, false, true]
			break
		}
	}
	return [false, 0, false, false]
}

var __goscriptAwait: any
