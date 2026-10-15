// Generated file based on message.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as slices from "@goscript/slices/index.js"

import * as __goscript_svcb from "./svcb.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/slices/index.js"
import "./svcb.gs.ts"

$.registerTypePackagePath("vendor/golang.org/x/net/dns/dnsmessage", ["dnsmessage.Type", "dnsmessage.Class", "dnsmessage.OpCode", "dnsmessage.RCode", "dnsmessage.nestedError", "dnsmessage.Header", "dnsmessage.Message", "dnsmessage.section", "dnsmessage.header", "dnsmessage.Resource", "dnsmessage.ResourceBody", "dnsmessage.Parser", "dnsmessage.Builder", "dnsmessage.ResourceHeader", "dnsmessage.Name", "dnsmessage.Question", "dnsmessage.CNAMEResource", "dnsmessage.MXResource", "dnsmessage.NSResource", "dnsmessage.PTRResource", "dnsmessage.SOAResource", "dnsmessage.TXTResource", "dnsmessage.SRVResource", "dnsmessage.AResource", "dnsmessage.AAAAResource", "dnsmessage.OPTResource", "dnsmessage.Option", "dnsmessage.UnknownResource"])

export type Type = number

$.registerNamedValueType(
	"dnsmessage.Type",
	{GoString: (receiver: any, ...args: any[]) => (Type_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Type_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*dnsmessage.Type",
	{GoString: (receiver: any, ...args: any[]) => (Type_GoString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Type_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Class = number

$.registerNamedValueType(
	"dnsmessage.Class",
	{GoString: (receiver: any, ...args: any[]) => (Class_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Class_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*dnsmessage.Class",
	{GoString: (receiver: any, ...args: any[]) => (Class_GoString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Class_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type OpCode = number

$.registerNamedValueType(
	"dnsmessage.OpCode",
	{GoString: (receiver: any, ...args: any[]) => (OpCode_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*dnsmessage.OpCode",
	{GoString: (receiver: any, ...args: any[]) => (OpCode_GoString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type RCode = number

$.registerNamedValueType(
	"dnsmessage.RCode",
	{GoString: (receiver: any, ...args: any[]) => (RCode_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (RCode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*dnsmessage.RCode",
	{GoString: (receiver: any, ...args: any[]) => (RCode_GoString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (RCode_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type section = number

export type ResourceBody = {
	GoString(): string
	pack(msg: $.Slice<number>, compression: globalThis.Map<string, number> | null, compressionOff: number): [$.Slice<number>, $.GoError]
	realType(): Type
}

$.registerInterfaceType(
	"dnsmessage.ResourceBody",
	null,
	[$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["compression", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["compressionOff", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("realType", [], [/* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")])]
);

export class nestedError {
	// s is the current level's error message.
	public get s(): string {
		return this._fields.s
	}

	public set s(value: string) {
		this._fields.s = value
	}

	// err is the nested error.
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		s: string
		err: $.GoError
	}

	constructor(init?: Partial<{s?: string, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s ?? ("" as string),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nestedError {
		return new nestedError(this, true)
	}

	public __goscriptAssign(source: nestedError): void {
		const target = this._fields
		const values = source._fields
		target.s = values.s
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const e: nestedError | $.VarRef<nestedError> | null = this;
		const e$: nestedError = e == null ? $.pointerTarget<nestedError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<nestedError>(e)
		return $.concatString(($.concatString((e$ as nestedError).s, ": ")), (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>((e$ as nestedError).err).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.nestedError",
		() => new nestedError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		nestedError,
		() => [/* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("err", "error", [1], 16, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" })]
	)
}

export class Header {
	public get ID(): number {
		return this._fields.ID
	}

	public set ID(value: number) {
		this._fields.ID = value
	}

	public get Response(): boolean {
		return this._fields.Response
	}

	public set Response(value: boolean) {
		this._fields.Response = value
	}

	public get OpCode(): OpCode {
		return this._fields.OpCode
	}

	public set OpCode(value: OpCode) {
		this._fields.OpCode = value
	}

	public get Authoritative(): boolean {
		return this._fields.Authoritative
	}

	public set Authoritative(value: boolean) {
		this._fields.Authoritative = value
	}

	public get Truncated(): boolean {
		return this._fields.Truncated
	}

	public set Truncated(value: boolean) {
		this._fields.Truncated = value
	}

	public get RecursionDesired(): boolean {
		return this._fields.RecursionDesired
	}

	public set RecursionDesired(value: boolean) {
		this._fields.RecursionDesired = value
	}

	public get RecursionAvailable(): boolean {
		return this._fields.RecursionAvailable
	}

	public set RecursionAvailable(value: boolean) {
		this._fields.RecursionAvailable = value
	}

	public get AuthenticData(): boolean {
		return this._fields.AuthenticData
	}

	public set AuthenticData(value: boolean) {
		this._fields.AuthenticData = value
	}

	public get CheckingDisabled(): boolean {
		return this._fields.CheckingDisabled
	}

	public set CheckingDisabled(value: boolean) {
		this._fields.CheckingDisabled = value
	}

	public get RCode(): RCode {
		return this._fields.RCode
	}

	public set RCode(value: RCode) {
		this._fields.RCode = value
	}

	public _fields: {
		ID: number
		Response: boolean
		OpCode: OpCode
		Authoritative: boolean
		Truncated: boolean
		RecursionDesired: boolean
		RecursionAvailable: boolean
		AuthenticData: boolean
		CheckingDisabled: boolean
		RCode: RCode
	}

	constructor(init?: Partial<{ID?: number, Response?: boolean, OpCode?: OpCode, Authoritative?: boolean, Truncated?: boolean, RecursionDesired?: boolean, RecursionAvailable?: boolean, AuthenticData?: boolean, CheckingDisabled?: boolean, RCode?: RCode}>, __goscriptValue?: boolean) {
		this._fields = {
			ID: init?.ID ?? (0 as number),
			Response: init?.Response ?? (false as boolean),
			OpCode: init?.OpCode ?? (0 as OpCode),
			Authoritative: init?.Authoritative ?? (false as boolean),
			Truncated: init?.Truncated ?? (false as boolean),
			RecursionDesired: init?.RecursionDesired ?? (false as boolean),
			RecursionAvailable: init?.RecursionAvailable ?? (false as boolean),
			AuthenticData: init?.AuthenticData ?? (false as boolean),
			CheckingDisabled: init?.CheckingDisabled ?? (false as boolean),
			RCode: init?.RCode ?? (0 as RCode)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Header {
		return new Header(this, true)
	}

	public __goscriptAssign(source: Header): void {
		const target = this._fields
		const values = source._fields
		target.ID = values.ID
		target.Response = values.Response
		target.OpCode = values.OpCode
		target.Authoritative = values.Authoritative
		target.Truncated = values.Truncated
		target.RecursionDesired = values.RecursionDesired
		target.RecursionAvailable = values.RecursionAvailable
		target.AuthenticData = values.AuthenticData
		target.CheckingDisabled = values.CheckingDisabled
		target.RCode = values.RCode
	}

	public GoString(): string {
		const m: Header | $.VarRef<Header> | null = this;
		const m$: Header = m == null ? $.pointerTarget<Header>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Header>(m)
		return $.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString("dnsmessage.Header{", "ID: ")), printUint16((m$ as Header).ID))), ", ")), "Response: ")), printBool((m$ as Header).Response))), ", ")), "OpCode: ")), OpCode_GoString((m$ as Header).OpCode))), ", ")), "Authoritative: ")), printBool((m$ as Header).Authoritative))), ", ")), "Truncated: ")), printBool((m$ as Header).Truncated))), ", ")), "RecursionDesired: ")), printBool((m$ as Header).RecursionDesired))), ", ")), "RecursionAvailable: ")), printBool((m$ as Header).RecursionAvailable))), ", ")), "AuthenticData: ")), printBool((m$ as Header).AuthenticData))), ", ")), "CheckingDisabled: ")), printBool((m$ as Header).CheckingDisabled))), ", ")), "RCode: ")), RCode_GoString((m$ as Header).RCode))), "}")
	}

	public pack(): [number, number] {
		const m: Header | $.VarRef<Header> | null = this;
		let id: number = 0
		let bits: number = 0
		const m$: Header = m == null ? $.pointerTarget<Header>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Header>(m)
		id = (m$ as Header).ID
		bits = $.uint(((($.uint((m$ as Header).OpCode, 16) << 11) & 0xffff)) | $.uint((m$ as Header).RCode, 16), 16)
		if ((m$ as Header).RecursionAvailable) {
			bits = bits | (128)
		}
		if ((m$ as Header).RecursionDesired) {
			bits = bits | (256)
		}
		if ((m$ as Header).Truncated) {
			bits = bits | (512)
		}
		if ((m$ as Header).Authoritative) {
			bits = bits | (1024)
		}
		if ((m$ as Header).Response) {
			bits = bits | (32768)
		}
		if ((m$ as Header).AuthenticData) {
			bits = bits | (32)
		}
		if ((m$ as Header).CheckingDisabled) {
			bits = bits | (16)
		}
		return [id, bits]
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.Header",
		() => new Header(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("pack", [], [["id", /* @__PURE__ */ $.basicType("uint16")], ["bits", /* @__PURE__ */ $.basicType("uint16")]], true)],
		Header,
		() => [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("uint16"), [0], 0, true), /* @__PURE__ */ $.structField("Response", /* @__PURE__ */ $.basicType("bool"), [1], 2, true), /* @__PURE__ */ $.structField("OpCode", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.OpCode"), [2], 4, true), /* @__PURE__ */ $.structField("Authoritative", /* @__PURE__ */ $.basicType("bool"), [3], 6, true), /* @__PURE__ */ $.structField("Truncated", /* @__PURE__ */ $.basicType("bool"), [4], 7, true), /* @__PURE__ */ $.structField("RecursionDesired", /* @__PURE__ */ $.basicType("bool"), [5], 8, true), /* @__PURE__ */ $.structField("RecursionAvailable", /* @__PURE__ */ $.basicType("bool"), [6], 9, true), /* @__PURE__ */ $.structField("AuthenticData", /* @__PURE__ */ $.basicType("bool"), [7], 10, true), /* @__PURE__ */ $.structField("CheckingDisabled", /* @__PURE__ */ $.basicType("bool"), [8], 11, true), /* @__PURE__ */ $.structField("RCode", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.RCode"), [9], 12, true)]
	)
}

export class Message {
	public get Header(): Header {
		return this._fields.Header
	}

	public set Header(value: Header) {
		this._fields.Header = value
	}

	public get Questions(): $.Slice<Question> {
		return this._fields.Questions
	}

	public set Questions(value: $.Slice<Question>) {
		this._fields.Questions = value
	}

	public get Answers(): $.Slice<Resource> {
		return this._fields.Answers
	}

	public set Answers(value: $.Slice<Resource>) {
		this._fields.Answers = value
	}

	public get Authorities(): $.Slice<Resource> {
		return this._fields.Authorities
	}

	public set Authorities(value: $.Slice<Resource>) {
		this._fields.Authorities = value
	}

	public get Additionals(): $.Slice<Resource> {
		return this._fields.Additionals
	}

	public set Additionals(value: $.Slice<Resource>) {
		this._fields.Additionals = value
	}

	public _fields: {
		Header: Header
		Questions: $.Slice<Question>
		Answers: $.Slice<Resource>
		Authorities: $.Slice<Resource>
		Additionals: $.Slice<Resource>
	}

	constructor(init?: Partial<{Header?: Header, Questions?: $.Slice<Question>, Answers?: $.Slice<Resource>, Authorities?: $.Slice<Resource>, Additionals?: $.Slice<Resource>}>, __goscriptValue?: boolean) {
		this._fields = {
			Header: init?.Header ? init.Header.clone() : new Header(undefined, true),
			Questions: init?.Questions ?? (null! as $.Slice<Question>),
			Answers: init?.Answers ?? (null! as $.Slice<Resource>),
			Authorities: init?.Authorities ?? (null! as $.Slice<Resource>),
			Additionals: init?.Additionals ?? (null! as $.Slice<Resource>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Message {
		return new Message(this, true)
	}

	public __goscriptAssign(source: Message): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Header, values.Header)
		target.Questions = values.Questions
		target.Answers = values.Answers
		target.Authorities = values.Authorities
		target.Additionals = values.Additionals
	}

	public AppendPack(b: $.Slice<number>): [$.Slice<number>, $.GoError] {
		const m: Message | $.VarRef<Message> | null = this;
		const m$: Message = m == null ? $.pointerTarget<Message>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Message>(m)
		// Validate the lengths. It is very unlikely that anyone will try to
		// pack more than 65535 of any particular type, but it is possible and
		// we should fail gracefully.
		if ($.sliceLen((m$ as Message).Questions) > 65535) {
			return [null, errTooManyQuestions]
		}
		if ($.sliceLen((m$ as Message).Answers) > 65535) {
			return [null, errTooManyAnswers]
		}
		if ($.sliceLen((m$ as Message).Authorities) > 65535) {
			return [null, errTooManyAuthorities]
		}
		if ($.sliceLen((m$ as Message).Additionals) > 65535) {
			return [null, errTooManyAdditionals]
		}

		let h: $.VarRef<header> = $.varRef(new header(undefined, true))
		let __goscriptTuple0: any = (m$ as Message).Header.pack()
		h.value.id = __goscriptTuple0[0]
		h.value.bits = __goscriptTuple0[1]

		h.value.questions = $.uint($.sliceLen((m$ as Message).Questions), 16)
		h.value.answers = $.uint($.sliceLen((m$ as Message).Answers), 16)
		h.value.authorities = $.uint($.sliceLen((m$ as Message).Authorities), 16)
		h.value.additionals = $.uint($.sliceLen((m$ as Message).Additionals), 16)

		let compressionOff = $.sliceLen(b)
		let msg: $.Slice<number> = h.value.pack(b)

		// RFC 1035 allows (but does not require) compression for packing. RFC
		// 1035 requires unpacking implementations to support compression, so
		// unconditionally enabling it is fine.
		//
		// DNS lookups are typically done over UDP, and RFC 1035 states that UDP
		// DNS messages can be a maximum of 512 bytes long. Without compression,
		// many DNS response messages are over this limit, so enabling
		// compression will help ensure compliance.
		let compression: globalThis.Map<string, number> | null = $.makeMap<string, number>([])

		for (let __goscriptRangeTarget1 = (m$ as Message).Questions, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let err: $.GoError = null! as $.GoError
			{
				let __goscriptTuple1: any = $.arrayIndex((m$ as Message).Questions!, i).pack(msg, compression, compressionOff)
				msg = __goscriptTuple1[0]
				err = __goscriptTuple1[1]
				if (err != null) {
					return [null, $.interfaceValue<$.GoError>(new nestedError({s: "packing Question", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
				}
			}
		}
		for (let __goscriptRangeTarget2 = (m$ as Message).Answers, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
			let err: $.GoError = null! as $.GoError
			{
				let __goscriptTuple2: any = $.arrayIndex((m$ as Message).Answers!, i).pack(msg, compression, compressionOff)
				msg = __goscriptTuple2[0]
				err = __goscriptTuple2[1]
				if (err != null) {
					return [null, $.interfaceValue<$.GoError>(new nestedError({s: "packing Answer", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
				}
			}
		}
		for (let __goscriptRangeTarget3 = (m$ as Message).Authorities, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
			let err: $.GoError = null! as $.GoError
			{
				let __goscriptTuple3: any = $.arrayIndex((m$ as Message).Authorities!, i).pack(msg, compression, compressionOff)
				msg = __goscriptTuple3[0]
				err = __goscriptTuple3[1]
				if (err != null) {
					return [null, $.interfaceValue<$.GoError>(new nestedError({s: "packing Authority", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
				}
			}
		}
		for (let __goscriptRangeTarget4 = (m$ as Message).Additionals, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
			let err: $.GoError = null! as $.GoError
			{
				let __goscriptTuple4: any = $.arrayIndex((m$ as Message).Additionals!, i).pack(msg, compression, compressionOff)
				msg = __goscriptTuple4[0]
				err = __goscriptTuple4[1]
				if (err != null) {
					return [null, $.interfaceValue<$.GoError>(new nestedError({s: "packing Additional", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
				}
			}
		}

		return [msg, null]
	}

	public GoString(): string {
		const m: Message | $.VarRef<Message> | null = this;
		const m$: Message = m == null ? $.pointerTarget<Message>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Message>(m)
		let s = $.concatString(($.concatString(($.concatString("dnsmessage.Message{Header: ", (m$ as Message).Header.GoString())), ", ")), "Questions: []dnsmessage.Question{")
		if ($.sliceLen((m$ as Message).Questions) > 0) {
			s = $.concatString(s, $.arrayIndex((m$ as Message).Questions!, 0).GoString())
			for (let __goscriptRangeTarget5 = $.goSlice((m$ as Message).Questions, 1, undefined), __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
				let q = $.varRef(((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as Question)).clone())
				s = $.concatString(s, $.concatString(", ", q.value.GoString()))
			}
		}
		s = $.concatString(s, "}, Answers: []dnsmessage.Resource{")
		if ($.sliceLen((m$ as Message).Answers) > 0) {
			s = $.concatString(s, $.arrayIndex((m$ as Message).Answers!, 0).GoString())
			for (let __goscriptRangeTarget6 = $.goSlice((m$ as Message).Answers, 1, undefined), __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
				let a = $.varRef(((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as Resource)).clone())
				s = $.concatString(s, $.concatString(", ", a.value.GoString()))
			}
		}
		s = $.concatString(s, "}, Authorities: []dnsmessage.Resource{")
		if ($.sliceLen((m$ as Message).Authorities) > 0) {
			s = $.concatString(s, $.arrayIndex((m$ as Message).Authorities!, 0).GoString())
			for (let __goscriptRangeTarget7 = $.goSlice((m$ as Message).Authorities, 1, undefined), __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
				let a = $.varRef(((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as Resource)).clone())
				s = $.concatString(s, $.concatString(", ", a.value.GoString()))
			}
		}
		s = $.concatString(s, "}, Additionals: []dnsmessage.Resource{")
		if ($.sliceLen((m$ as Message).Additionals) > 0) {
			s = $.concatString(s, $.arrayIndex((m$ as Message).Additionals!, 0).GoString())
			for (let __goscriptRangeTarget8 = $.goSlice((m$ as Message).Additionals, 1, undefined), __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
				let a = $.varRef(((__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as Resource)).clone())
				s = $.concatString(s, $.concatString(", ", a.value.GoString()))
			}
		}
		return $.concatString(s, "}}")
	}

	public Pack(): [$.Slice<number>, $.GoError] {
		const m: Message | $.VarRef<Message> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Message).AppendPack($.makeSlice<number>(0, 512, "byte")) : Message.prototype.AppendPack.call(m, $.makeSlice<number>(0, 512, "byte")))
	}

	public Unpack(msg: $.Slice<number>): $.GoError {
		let m: Message | $.VarRef<Message> | null = this;
		const m$: Message = m == null ? $.pointerTarget<Message>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Message>(m)
		let p: $.VarRef<Parser> = $.varRef(new Parser(undefined, true))
		let err: $.GoError = null! as $.GoError
		{
			let __goscriptTuple5: any = p.value.Start(msg)
			$.assignStruct((m$ as Message).Header, __goscriptTuple5[0])
			err = __goscriptTuple5[1]
			if (err != null) {
				return err
			}
		}
		{
			let __goscriptTuple6: any = p.value.AllQuestions();
			;(m$ as Message).Questions = __goscriptTuple6[0]
			err = __goscriptTuple6[1]
			if (err != null) {
				return err
			}
		}
		{
			let __goscriptTuple7: any = p.value.AllAnswers();
			;(m$ as Message).Answers = __goscriptTuple7[0]
			err = __goscriptTuple7[1]
			if (err != null) {
				return err
			}
		}
		{
			let __goscriptTuple8: any = p.value.AllAuthorities();
			;(m$ as Message).Authorities = __goscriptTuple8[0]
			err = __goscriptTuple8[1]
			if (err != null) {
				return err
			}
		}
		{
			let __goscriptTuple9: any = p.value.AllAdditionals();
			;(m$ as Message).Additionals = __goscriptTuple9[0]
			err = __goscriptTuple9[1]
			if (err != null) {
				return err
			}
		}
		return null
	}

	public pack(): any {
		return $.pointerValue<Header>(this.Header).pack()
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.Message",
		() => new Message(),
		() => [$.methodSignature("AppendPack", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Pack", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Unpack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("pack", [], [["id", /* @__PURE__ */ $.basicType("uint16")], ["bits", /* @__PURE__ */ $.basicType("uint16")]], true)],
		Message,
		() => [/* @__PURE__ */ $.structField("Header", "dnsmessage.Header", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Questions", /* @__PURE__ */ $.sliceType("dnsmessage.Question"), [1], 16, true), /* @__PURE__ */ $.structField("Answers", /* @__PURE__ */ $.sliceType("dnsmessage.Resource"), [2], 40, true), /* @__PURE__ */ $.structField("Authorities", /* @__PURE__ */ $.sliceType("dnsmessage.Resource"), [3], 64, true), /* @__PURE__ */ $.structField("Additionals", /* @__PURE__ */ $.sliceType("dnsmessage.Resource"), [4], 88, true)]
	)
}

export class header {
	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get bits(): number {
		return this._fields.bits
	}

	public set bits(value: number) {
		this._fields.bits = value
	}

	public get questions(): number {
		return this._fields.questions
	}

	public set questions(value: number) {
		this._fields.questions = value
	}

	public get answers(): number {
		return this._fields.answers
	}

	public set answers(value: number) {
		this._fields.answers = value
	}

	public get authorities(): number {
		return this._fields.authorities
	}

	public set authorities(value: number) {
		this._fields.authorities = value
	}

	public get additionals(): number {
		return this._fields.additionals
	}

	public set additionals(value: number) {
		this._fields.additionals = value
	}

	public _fields: {
		id: number
		bits: number
		questions: number
		answers: number
		authorities: number
		additionals: number
	}

	constructor(init?: Partial<{id?: number, bits?: number, questions?: number, answers?: number, authorities?: number, additionals?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0 as number),
			bits: init?.bits ?? (0 as number),
			questions: init?.questions ?? (0 as number),
			answers: init?.answers ?? (0 as number),
			authorities: init?.authorities ?? (0 as number),
			additionals: init?.additionals ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): header {
		return new header(this, true)
	}

	public __goscriptAssign(source: header): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
		target.bits = values.bits
		target.questions = values.questions
		target.answers = values.answers
		target.authorities = values.authorities
		target.additionals = values.additionals
	}

	public count(sec: section): number {
		const h: header | $.VarRef<header> | null = this;
		const h$: header = h == null ? $.pointerTarget<header>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<header>(h)
		switch (sec) {
			case 2:
			{
				return (h$ as header).questions
				break
			}
			case 3:
			{
				return (h$ as header).answers
				break
			}
			case 4:
			{
				return (h$ as header).authorities
				break
			}
			case 5:
			{
				return (h$ as header).additionals
				break
			}
		}
		return 0
	}

	public header(): Header {
		const h: header | $.VarRef<header> | null = this;
		const h$: header = h == null ? $.pointerTarget<header>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<header>(h)
		return new Header({ID: (h$ as header).id, Response: $.uint(((h$ as header).bits & 32768), 16) != 0, OpCode: $.uint($.uint($.uintShr((h$ as header).bits, 11, 16), 16) & 0xF, 16), Authoritative: $.uint(((h$ as header).bits & 1024), 16) != 0, Truncated: $.uint(((h$ as header).bits & 512), 16) != 0, RecursionDesired: $.uint(((h$ as header).bits & 256), 16) != 0, RecursionAvailable: $.uint(((h$ as header).bits & 128), 16) != 0, AuthenticData: $.uint(((h$ as header).bits & 32), 16) != 0, CheckingDisabled: $.uint(((h$ as header).bits & 16), 16) != 0, RCode: $.uint((h$ as header).bits & 0xF, 16)}, true)
	}

	public pack(msg: $.Slice<number>): $.Slice<number> {
		const h: header | $.VarRef<header> | null = this;
		const h$: header = h == null ? $.pointerTarget<header>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<header>(h)
		msg = packUint16(msg, (h$ as header).id)
		msg = packUint16(msg, (h$ as header).bits)
		msg = packUint16(msg, (h$ as header).questions)
		msg = packUint16(msg, (h$ as header).answers)
		msg = packUint16(msg, (h$ as header).authorities)
		return packUint16(msg, (h$ as header).additionals)
	}

	public unpack(msg: $.Slice<number>, off: number): [number, $.GoError] {
		let h: header | $.VarRef<header> | null = this;
		const h$: header = h == null ? $.pointerTarget<header>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<header>(h)
		let newOff = off
		let err: $.GoError = null! as $.GoError
		{
			let __goscriptTuple10: any = unpackUint16(msg, newOff);
			;(h$ as header).id = __goscriptTuple10[0]
			newOff = __goscriptTuple10[1]
			err = __goscriptTuple10[2]
			if (err != null) {
				return [off, $.interfaceValue<$.GoError>(new nestedError({s: "id", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		{
			let __goscriptTuple11: any = unpackUint16(msg, newOff);
			;(h$ as header).bits = __goscriptTuple11[0]
			newOff = __goscriptTuple11[1]
			err = __goscriptTuple11[2]
			if (err != null) {
				return [off, $.interfaceValue<$.GoError>(new nestedError({s: "bits", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		{
			let __goscriptTuple12: any = unpackUint16(msg, newOff);
			;(h$ as header).questions = __goscriptTuple12[0]
			newOff = __goscriptTuple12[1]
			err = __goscriptTuple12[2]
			if (err != null) {
				return [off, $.interfaceValue<$.GoError>(new nestedError({s: "questions", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		{
			let __goscriptTuple13: any = unpackUint16(msg, newOff);
			;(h$ as header).answers = __goscriptTuple13[0]
			newOff = __goscriptTuple13[1]
			err = __goscriptTuple13[2]
			if (err != null) {
				return [off, $.interfaceValue<$.GoError>(new nestedError({s: "answers", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		{
			let __goscriptTuple14: any = unpackUint16(msg, newOff);
			;(h$ as header).authorities = __goscriptTuple14[0]
			newOff = __goscriptTuple14[1]
			err = __goscriptTuple14[2]
			if (err != null) {
				return [off, $.interfaceValue<$.GoError>(new nestedError({s: "authorities", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		{
			let __goscriptTuple15: any = unpackUint16(msg, newOff);
			;(h$ as header).additionals = __goscriptTuple15[0]
			newOff = __goscriptTuple15[1]
			err = __goscriptTuple15[2]
			if (err != null) {
				return [off, $.interfaceValue<$.GoError>(new nestedError({s: "additionals", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		return [newOff, null]
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.header",
		() => new header(),
		() => [$.methodSignature("count", [["sec", /* @__PURE__ */ $.basicType("uint8", "dnsmessage.section")]], [/* @__PURE__ */ $.basicType("uint16")], true), $.methodSignature("header", [], ["dnsmessage.Header"], true), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("unpack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["off", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		header,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint16"), [0], 0, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("bits", /* @__PURE__ */ $.basicType("uint16"), [1], 2, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("questions", /* @__PURE__ */ $.basicType("uint16"), [2], 4, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("answers", /* @__PURE__ */ $.basicType("uint16"), [3], 6, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("authorities", /* @__PURE__ */ $.basicType("uint16"), [4], 8, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("additionals", /* @__PURE__ */ $.basicType("uint16"), [5], 10, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" })]
	)
}

export class Name {
	public get Data(): Uint8Array {
		return this._fields.Data
	}

	public set Data(value: Uint8Array) {
		this._fields.Data = value
	}

	public get Length(): number {
		return this._fields.Length
	}

	public set Length(value: number) {
		this._fields.Length = value
	}

	public _fields: {
		Data: Uint8Array
		Length: number
	}

	constructor(init?: Partial<{Data?: Uint8Array, Length?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Data: init?.Data !== undefined ? $.cloneArrayValue(init.Data, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 255)) : $.arrayValue(new Uint8Array(255)),
			Length: init?.Length ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Name {
		return new Name(this, true)
	}

	public __goscriptAssign(source: Name): void {
		const target = this._fields
		const values = source._fields
		target.Data = $.assignFieldValue(target.Data, values.Data, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 255))
		target.Length = values.Length
	}

	public GoString(): string {
		const n: Name | $.VarRef<Name> | null = this;
		const n$: Name = n == null ? $.pointerTarget<Name>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<Name>(n)
		return $.concatString(($.concatString("dnsmessage.MustNewName(\"", printString($.goSlice((n$ as Name).Data, undefined, (n$ as Name).Length)))), "\")")
	}

	public String(): string {
		const n = this;
		return $.bytesToString($.goSlice(n.Data, undefined, n.Length))
	}

	public pack(msg: $.Slice<number>, compression: globalThis.Map<string, number> | null, compressionOff: number): [$.Slice<number>, $.GoError] {
		const n: Name | $.VarRef<Name> | null = this;
		const n$: Name = n == null ? $.pointerTarget<Name>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<Name>(n)
		let oldMsg: $.Slice<number> = msg

		if ((n$ as Name).Length > 254) {
			return [null, errNameTooLong]
		}

		// Add a trailing dot to canonicalize name.
		if (((n$ as Name).Length == 0) || ($.arrayIndex((n$ as Name).Data, (((n$ as Name).Length - 1) & 0xff)) != 46)) {
			return [oldMsg, errNonCanonicalName]
		}

		// Allow root domain.
		if (($.arrayIndex((n$ as Name).Data, 0) == 46) && ((n$ as Name).Length == 1)) {
			return [$.append(msg, $.uint(0, 8), $.byteSliceHint), null]
		}

		let nameAsStr: string = ""

		// Emit sequence of counted strings, chopping at dots.
		for (let i = 0, begin = 0; i < $.int((n$ as Name).Length); i++) {
			// Check for the end of the segment.
			if ($.arrayIndex((n$ as Name).Data, i) == 46) {
				// The two most significant bits have special meaning.
				// It isn't allowed for segments to be long enough to
				// need them.
				if ((i - begin) >= 64) {
					return [oldMsg, errSegTooLong]
				}

				// Segments must have a non-zero length.
				if ((i - begin) == 0) {
					return [oldMsg, errZeroSegLen]
				}

				msg = $.append(msg, $.uint($.uint(i - begin, 8), 8), $.byteSliceHint)

				for (let j = begin; j < i; j++) {
					msg = $.append(msg, $.uint($.arrayIndex((n$ as Name).Data, j), 8), $.byteSliceHint)
				}

				begin = i + 1
				continue
			}

			// We can only compress domain suffixes starting with a new
			// segment. A pointer is two bytes with the two most significant
			// bits set to 1 to indicate that it is a pointer.
			if (((i == 0) || ($.arrayIndex((n$ as Name).Data, i - 1) == 46)) && (compression != null)) {
				{
					let [ptr, ok] = $.mapGet<string, number, number>(compression, $.bytesToString($.goSlice((n$ as Name).Data, i, (n$ as Name).Length)), 0)
					if (ok) {
						// Hit. Emit a pointer instead of the rest of
						// the domain.
						return [$.append(msg, $.uint($.uint(($.uintShr(ptr, 8, 16)) | 0xC0, 8), 8), $.uint($.uint(ptr, 8), 8), $.byteSliceHint), null]
					}
				}

				// Miss. Add the suffix to the compression table if the
				// offset can be stored in the available 14 bits.
				let newPtr = $.sliceLen(msg) - compressionOff
				if (newPtr <= 16383) {
					if ($.stringEqual(nameAsStr, "")) {
						// allocate n.Data on the heap once, to avoid allocating it
						// multiple times (for next labels).
						nameAsStr = $.bytesToString($.goSlice((n$ as Name).Data, undefined, (n$ as Name).Length))
					}
					$.mapSet(compression, $.sliceStringOrBytes(nameAsStr, i, undefined), $.uint(newPtr, 16))
				}
			}
		}
		return [$.append(msg, $.uint(0, 8), $.byteSliceHint), null]
	}

	public unpack(msg: $.Slice<number>, off: number): [number, $.GoError] {
		let n: Name | $.VarRef<Name> | null = this;
		const n$: Name = n == null ? $.pointerTarget<Name>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<Name>(n)
		// currOff is the current working offset.
		let currOff = off

		// newOff is the offset where the next record will start. Pointers lead
		// to data that belongs to other names and thus doesn't count towards to
		// the usage of this name.
		let newOff = off

		// ptr is the number of pointers followed.
		let ptr: number = 0

		// Name is a slice representation of the name data.
		let name: $.Slice<number> = $.goSlice((n$ as Name).Data, undefined, 0)

		Loop: for (let __goscriptSliceWindow1 = $.sliceRange(msg); true; ) {
			if (currOff >= __goscriptSliceWindow1.length) {
				return [off, errBaseLen]
			}
			let c: number = $.int(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, currOff)] as number))
			currOff++
			switch (c & 0xC0) {
				case 0x00:
				{
					if (c == 0x00) {
						// A zero length signals the end of the name.
						break Loop
					}
					let endOff: number = currOff + c
					if (endOff > __goscriptSliceWindow1.length) {
						return [off, errCalcLen]
					}

					// Reject names containing dots.
					// See issue golang/go#56246
					for (let __goscriptRangeTarget9 = $.goSlice(msg, currOff, endOff), __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
						let v = $.uint((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as number), 8)
						if (v == 46) {
							return [off, errInvalidName]
						}
					}
					// Reject names that are too long while unpacking
					// See issue golang/go#77540
					if (($.sliceLen(name) + (endOff - currOff)) >= 254) {
						return [off, errNameTooLong]
					}
					name = $.appendSlice(name, $.goSlice(msg, currOff, endOff), $.byteSliceHint)
					name = $.append(name, $.uint(46, 8), $.byteSliceHint)
					currOff = endOff
					break
				}
				case 0xC0:
				{
					if (currOff >= __goscriptSliceWindow1.length) {
						return [off, errInvalidPtr]
					}
					let c1: number = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, currOff)] as number)
					currOff++
					if (ptr == 0) {
						newOff = currOff
					}
					// Don't follow too many pointers, maybe there's a loop.
					{
						ptr++
						if (ptr > 10) {
							return [off, errTooManyPtr]
						}
					}
					currOff = ((c ^ 0xC0) << 8) | $.int(c1)
					break
				}
				default:
				{
					return [off, errReserved]
					break
				}
			}
		}
		if ($.sliceLen(name) == 0) {
			name = $.append(name, $.uint(46, 8), $.byteSliceHint)
		}
		;(n$ as Name).Length = $.uint($.sliceLen(name), 8)
		if (ptr == 0) {
			newOff = currOff
		}
		return [newOff, null]
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.Name",
		() => new Name(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["compression", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["compressionOff", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("unpack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["off", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		Name,
		() => [/* @__PURE__ */ $.structField("Data", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 255), [0], 0, true), /* @__PURE__ */ $.structField("Length", /* @__PURE__ */ $.basicType("uint8"), [1], 255, true)]
	)
}

export class ResourceHeader {
	// Name is the domain name for which this resource record pertains.
	public get Name(): Name {
		return this._fields.Name
	}

	public set Name(value: Name) {
		this._fields.Name = value
	}

	// Type is the type of DNS resource record.
	//
	// This field will be set automatically during packing.
	public get Type(): Type {
		return this._fields.Type
	}

	public set Type(value: Type) {
		this._fields.Type = value
	}

	// Class is the class of network to which this DNS resource record
	// pertains.
	public get Class(): Class {
		return this._fields.Class
	}

	public set Class(value: Class) {
		this._fields.Class = value
	}

	// TTL is the length of time (measured in seconds) which this resource
	// record is valid for (time to live). All Resources in a set should
	// have the same TTL (RFC 2181 Section 5.2).
	public get TTL(): number {
		return this._fields.TTL
	}

	public set TTL(value: number) {
		this._fields.TTL = value
	}

	// Length is the length of data in the resource record after the header.
	//
	// This field will be set automatically during packing.
	public get Length(): number {
		return this._fields.Length
	}

	public set Length(value: number) {
		this._fields.Length = value
	}

	public _fields: {
		Name: Name
		Type: Type
		Class: Class
		TTL: number
		Length: number
	}

	constructor(init?: Partial<{Name?: Name, Type?: Type, Class?: Class, TTL?: number, Length?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ? init.Name.clone() : new Name(undefined, true),
			Type: init?.Type ?? (0 as Type),
			Class: init?.Class ?? (0 as Class),
			TTL: init?.TTL ?? (0 as number),
			Length: init?.Length ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ResourceHeader {
		return new ResourceHeader(this, true)
	}

	public __goscriptAssign(source: ResourceHeader): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Name, values.Name)
		target.Type = values.Type
		target.Class = values.Class
		target.TTL = values.TTL
		target.Length = values.Length
	}

	public DNSSECAllowed(): boolean {
		const h: ResourceHeader | $.VarRef<ResourceHeader> | null = this;
		return $.uint(($.pointerValue<ResourceHeader>(h).TTL & 16744448), 32) == 32768
	}

	public ExtendedRCode(rcode: RCode): RCode {
		const h: ResourceHeader | $.VarRef<ResourceHeader> | null = this;
		const h$: ResourceHeader = h == null ? $.pointerTarget<ResourceHeader>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<ResourceHeader>(h)
		if ($.uint(((h$ as ResourceHeader).TTL & 16711680), 32) == 0) {
			return $.uint($.uint($.uint(((($.uintShr((h$ as ResourceHeader).TTL, 24, 32)) << 4) >>> 0), 32), 16) | rcode, 16)
		}
		return rcode
	}

	public GoString(): string {
		const h: ResourceHeader | $.VarRef<ResourceHeader> | null = this;
		const h$: ResourceHeader = h == null ? $.pointerTarget<ResourceHeader>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<ResourceHeader>(h)
		return $.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString("dnsmessage.ResourceHeader{", "Name: ")), (h$ as ResourceHeader).Name.GoString())), ", ")), "Type: ")), Type_GoString((h$ as ResourceHeader).Type))), ", ")), "Class: ")), Class_GoString((h$ as ResourceHeader).Class))), ", ")), "TTL: ")), printUint32((h$ as ResourceHeader).TTL))), ", ")), "Length: ")), printUint16((h$ as ResourceHeader).Length))), "}")
	}

	public SetEDNS0(udpPayloadLen: number, extRCode: RCode, dnssecOK: boolean): $.GoError {
		let h: ResourceHeader | $.VarRef<ResourceHeader> | null = this;
		const h$: ResourceHeader = h == null ? $.pointerTarget<ResourceHeader>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<ResourceHeader>(h)
		$.assignStruct((h$ as ResourceHeader).Name, new Name({Data: $.arrayValue(new Uint8Array([46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), Length: 1}, true));
		;(h$ as ResourceHeader).Type = 41;
		;(h$ as ResourceHeader).Class = $.uint(udpPayloadLen, 16);
		;(h$ as ResourceHeader).TTL = $.uint(((($.uintShr($.uint(extRCode, 32), 4, 32)) << 24) >>> 0), 32)
		if (dnssecOK) {
			;(h$ as ResourceHeader).TTL = (h$ as ResourceHeader).TTL | (32768)
		}
		return null
	}

	public fixLen(msg: $.Slice<number>, lenOff: number, preLen: number): $.GoError {
		let h: ResourceHeader | $.VarRef<ResourceHeader> | null = this;
		let conLen = $.sliceLen(msg) - preLen
		if (conLen > 65535) {
			return errResTooLong
		}

		// Fill in the length now that we know how long the content is.
		packUint16($.goSlice(msg, lenOff, lenOff), $.uint(conLen, 16))
		$.pointerValue<ResourceHeader>(h).Length = $.uint(conLen, 16)

		return null
	}

	public pack(oldMsg: $.Slice<number>, compression: globalThis.Map<string, number> | null, compressionOff: number): [$.Slice<number>, number, $.GoError] {
		const h: ResourceHeader | $.VarRef<ResourceHeader> | null = this;
		let msg: $.Slice<number> = null! as $.Slice<number>
		let lenOff: number = 0
		let err: $.GoError = null! as $.GoError
		const h$: ResourceHeader = h == null ? $.pointerTarget<ResourceHeader>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<ResourceHeader>(h)
		msg = oldMsg
		{
			let __goscriptTuple55: any = (h$ as ResourceHeader).Name.pack(msg, compression, compressionOff)
			msg = __goscriptTuple55[0]
			err = __goscriptTuple55[1]
			if (err != null) {
				return [oldMsg, 0, $.interfaceValue<$.GoError>(new nestedError({s: "Name", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		msg = packType(msg, (h$ as ResourceHeader).Type)
		msg = packClass(msg, (h$ as ResourceHeader).Class)
		msg = packUint32(msg, (h$ as ResourceHeader).TTL)
		lenOff = $.sliceLen(msg)
		msg = packUint16(msg, (h$ as ResourceHeader).Length)
		return [msg, lenOff, null]
	}

	public unpack(msg: $.Slice<number>, off: number): [number, $.GoError] {
		let h: ResourceHeader | $.VarRef<ResourceHeader> | null = this;
		const h$: ResourceHeader = h == null ? $.pointerTarget<ResourceHeader>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<ResourceHeader>(h)
		let newOff = off
		let err: $.GoError = null! as $.GoError
		{
			let __goscriptTuple56: any = (h$ as ResourceHeader).Name.unpack(msg, newOff)
			newOff = __goscriptTuple56[0]
			err = __goscriptTuple56[1]
			if (err != null) {
				return [off, $.interfaceValue<$.GoError>(new nestedError({s: "Name", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		{
			let __goscriptTuple57: any = unpackType(msg, newOff);
			;(h$ as ResourceHeader).Type = __goscriptTuple57[0]
			newOff = __goscriptTuple57[1]
			err = __goscriptTuple57[2]
			if (err != null) {
				return [off, $.interfaceValue<$.GoError>(new nestedError({s: "Type", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		{
			let __goscriptTuple58: any = unpackClass(msg, newOff);
			;(h$ as ResourceHeader).Class = __goscriptTuple58[0]
			newOff = __goscriptTuple58[1]
			err = __goscriptTuple58[2]
			if (err != null) {
				return [off, $.interfaceValue<$.GoError>(new nestedError({s: "Class", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		{
			let __goscriptTuple59: any = unpackUint32(msg, newOff);
			;(h$ as ResourceHeader).TTL = __goscriptTuple59[0]
			newOff = __goscriptTuple59[1]
			err = __goscriptTuple59[2]
			if (err != null) {
				return [off, $.interfaceValue<$.GoError>(new nestedError({s: "TTL", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		{
			let __goscriptTuple60: any = unpackUint16(msg, newOff);
			;(h$ as ResourceHeader).Length = __goscriptTuple60[0]
			newOff = __goscriptTuple60[1]
			err = __goscriptTuple60[2]
			if (err != null) {
				return [off, $.interfaceValue<$.GoError>(new nestedError({s: "Length", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		return [newOff, null]
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.ResourceHeader",
		() => new ResourceHeader(),
		() => [$.methodSignature("DNSSECAllowed", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ExtendedRCode", [["rcode", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.RCode")]], [/* @__PURE__ */ $.basicType("uint16", "dnsmessage.RCode")], true), $.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("SetEDNS0", [["udpPayloadLen", /* @__PURE__ */ $.basicType("int")], ["extRCode", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.RCode")], ["dnssecOK", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("fixLen", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["lenOff", /* @__PURE__ */ $.basicType("int")], ["preLen", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("pack", [["oldMsg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["compression", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["compressionOff", /* @__PURE__ */ $.basicType("int")]], [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["lenOff", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("unpack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["off", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		ResourceHeader,
		() => [/* @__PURE__ */ $.structField("Name", "dnsmessage.Name", [0], 0, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type"), [1], 256, true), /* @__PURE__ */ $.structField("Class", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.Class"), [2], 258, true), /* @__PURE__ */ $.structField("TTL", /* @__PURE__ */ $.basicType("uint32"), [3], 260, true), /* @__PURE__ */ $.structField("Length", /* @__PURE__ */ $.basicType("uint16"), [4], 264, true)]
	)
}

export class Resource {
	public get Header(): ResourceHeader {
		return this._fields.Header
	}

	public set Header(value: ResourceHeader) {
		this._fields.Header = value
	}

	public get Body(): ResourceBody | null {
		return this._fields.Body
	}

	public set Body(value: ResourceBody | null) {
		this._fields.Body = value
	}

	public _fields: {
		Header: ResourceHeader
		Body: ResourceBody | null
	}

	constructor(init?: Partial<{Header?: ResourceHeader, Body?: ResourceBody | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Header: init?.Header ? init.Header.clone() : new ResourceHeader(undefined, true),
			Body: init?.Body ?? (null! as ResourceBody | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Resource {
		return new Resource(this, true)
	}

	public __goscriptAssign(source: Resource): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Header, values.Header)
		target.Body = $.assignFieldValue(target.Body, values.Body, "dnsmessage.ResourceBody")
	}

	public GoString(): string {
		const r: Resource | $.VarRef<Resource> | null = this;
		const r$: Resource = r == null ? $.pointerTarget<Resource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Resource>(r)
		return $.concatString(($.concatString(($.concatString(($.concatString(($.concatString("dnsmessage.Resource{", "Header: ")), (r$ as Resource).Header.GoString())), ", Body: &")), $.pointerValue<Exclude<ResourceBody, null>>((r$ as Resource).Body).GoString())), "}")
	}

	public pack(msg: $.Slice<number>, compression: globalThis.Map<string, number> | null, compressionOff: number): [$.Slice<number>, $.GoError] {
		let r: Resource | $.VarRef<Resource> | null = this;
		const r$: Resource = r == null ? $.pointerTarget<Resource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Resource>(r)
		if ((r$ as Resource).Body == null) {
			return [msg, errNilResouceBody]
		}
		let oldMsg: $.Slice<number> = msg;
		;(r$ as Resource).Header.Type = $.pointerValue<Exclude<ResourceBody, null>>((r$ as Resource).Body).realType()
		let __goscriptTuple16: any = (r$ as Resource).Header.pack(msg, compression, compressionOff)
		msg = __goscriptTuple16[0]
		let lenOff = __goscriptTuple16[1]
		let err = __goscriptTuple16[2]
		if (err != null) {
			return [msg, $.interfaceValue<$.GoError>(new nestedError({s: "ResourceHeader", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		let preLen = $.sliceLen(msg)
		let __goscriptTuple17: any = $.pointerValue<Exclude<ResourceBody, null>>((r$ as Resource).Body).pack(msg, compression, compressionOff)
		msg = __goscriptTuple17[0]
		err = __goscriptTuple17[1]
		if (err != null) {
			return [msg, $.interfaceValue<$.GoError>(new nestedError({s: "content", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		{
			let __goscriptShadow0 = (r$ as Resource).Header.fixLen(msg, lenOff, preLen)
			if (__goscriptShadow0 != null) {
				return [oldMsg, __goscriptShadow0]
			}
		}
		return [msg, null]
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.Resource",
		() => new Resource(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["compression", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["compressionOff", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true)],
		Resource,
		() => [/* @__PURE__ */ $.structField("Header", "dnsmessage.ResourceHeader", [0], 0, true), /* @__PURE__ */ $.structField("Body", "dnsmessage.ResourceBody", [1], 272, true)]
	)
}

export class Parser {
	public get msg(): $.Slice<number> {
		return this._fields.msg
	}

	public set msg(value: $.Slice<number>) {
		this._fields.msg = value
	}

	public get header(): header {
		return this._fields.header
	}

	public set header(value: header) {
		this._fields.header = value
	}

	public get section(): section {
		return this._fields.section
	}

	public set section(value: section) {
		this._fields.section = value
	}

	public get off(): number {
		return this._fields.off
	}

	public set off(value: number) {
		this._fields.off = value
	}

	public get index(): number {
		return this._fields.index
	}

	public set index(value: number) {
		this._fields.index = value
	}

	public get resHeaderValid(): boolean {
		return this._fields.resHeaderValid
	}

	public set resHeaderValid(value: boolean) {
		this._fields.resHeaderValid = value
	}

	public get resHeaderOffset(): number {
		return this._fields.resHeaderOffset
	}

	public set resHeaderOffset(value: number) {
		this._fields.resHeaderOffset = value
	}

	public get resHeaderType(): Type {
		return this._fields.resHeaderType
	}

	public set resHeaderType(value: Type) {
		this._fields.resHeaderType = value
	}

	public get resHeaderLength(): number {
		return this._fields.resHeaderLength
	}

	public set resHeaderLength(value: number) {
		this._fields.resHeaderLength = value
	}

	public _fields: {
		msg: $.Slice<number>
		header: header
		section: section
		off: number
		index: number
		resHeaderValid: boolean
		resHeaderOffset: number
		resHeaderType: Type
		resHeaderLength: number
	}

	constructor(init?: Partial<{msg?: $.Slice<number>, header?: header, section?: section, off?: number, index?: number, resHeaderValid?: boolean, resHeaderOffset?: number, resHeaderType?: Type, resHeaderLength?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			msg: init?.msg ?? (null! as $.Slice<number>),
			header: init?.header ? init.header.clone() : new header(undefined, true),
			section: init?.section ?? (0 as section),
			off: init?.off ?? (0 as number),
			index: init?.index ?? (0 as number),
			resHeaderValid: init?.resHeaderValid ?? (false as boolean),
			resHeaderOffset: init?.resHeaderOffset ?? (0 as number),
			resHeaderType: init?.resHeaderType ?? (0 as Type),
			resHeaderLength: init?.resHeaderLength ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Parser {
		return new Parser(this, true)
	}

	public __goscriptAssign(source: Parser): void {
		const target = this._fields
		const values = source._fields
		target.msg = values.msg
		$.assignStruct(target.header, values.header)
		target.section = values.section
		target.off = values.off
		target.index = values.index
		target.resHeaderValid = values.resHeaderValid
		target.resHeaderOffset = values.resHeaderOffset
		target.resHeaderType = values.resHeaderType
		target.resHeaderLength = values.resHeaderLength
	}

	public AAAAResource(): [AAAAResource, $.GoError] {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		if (!(p$ as Parser).resHeaderValid || ((p$ as Parser).resHeaderType != 28)) {
			return [new AAAAResource(undefined, true), ErrNotStarted]
		}
		let [r, err] = unpackAAAAResource((p$ as Parser).msg, (p$ as Parser).off)
		if (err != null) {
			return [new AAAAResource(undefined, true), err]
		}
		;(p$ as Parser).off = (p$ as Parser).off + ($.int((p$ as Parser).resHeaderLength));
		;(p$ as Parser).resHeaderValid = false;
		;(p$ as Parser).index++
		return [(r).clone(), null]
	}

	public AResource(): [AResource, $.GoError] {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		if (!(p$ as Parser).resHeaderValid || ((p$ as Parser).resHeaderType != 1)) {
			return [new AResource(undefined, true), ErrNotStarted]
		}
		let [r, err] = unpackAResource((p$ as Parser).msg, (p$ as Parser).off)
		if (err != null) {
			return [new AResource(undefined, true), err]
		}
		;(p$ as Parser).off = (p$ as Parser).off + ($.int((p$ as Parser).resHeaderLength));
		;(p$ as Parser).resHeaderValid = false;
		;(p$ as Parser).index++
		return [(r).clone(), null]
	}

	public Additional(): [Resource, $.GoError] {
		const p: Parser | $.VarRef<Parser> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).resource(5) : Parser.prototype.resource.call(p, 5))
	}

	public AdditionalHeader(): [ResourceHeader, $.GoError] {
		const p: Parser | $.VarRef<Parser> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).resourceHeader(5) : Parser.prototype.resourceHeader.call(p, 5))
	}

	public AllAdditionals(): [$.Slice<Resource>, $.GoError] {
		const p: Parser | $.VarRef<Parser> | null = this;
		// Additionals usually contain OPT, and sometimes A/AAAA
		// glue records.
		//
		// Pre-allocate up to a certain limit, since p.header is
		// untrusted data.
		let n = $.int($.pointerValue<Parser>(p).header.additionals)
		if (n > 10) {
			n = 10
		}
		let _as: $.Slice<Resource> = $.makeSlice<Resource>(0, n, undefined, () => new Resource(undefined, true))
		while (true) {
			let [a, err] = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).Additional() : Parser.prototype.Additional.call(p))
			if ($.comparableEqual(err, ErrSectionDone)) {
				return [_as, null]
			}
			if (err != null) {
				return [null, err]
			}
			_as = $.appendOne(_as, (a).clone())
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public AllAnswers(): [$.Slice<Resource>, $.GoError] {
		const p: Parser | $.VarRef<Parser> | null = this;
		// The most common query is for A/AAAA, which usually returns
		// a handful of IPs.
		//
		// Pre-allocate up to a certain limit, since p.header is
		// untrusted data.
		let n = $.int($.pointerValue<Parser>(p).header.answers)
		if (n > 20) {
			n = 20
		}
		let _as: $.Slice<Resource> = $.makeSlice<Resource>(0, n, undefined, () => new Resource(undefined, true))
		while (true) {
			let [a, err] = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).Answer() : Parser.prototype.Answer.call(p))
			if ($.comparableEqual(err, ErrSectionDone)) {
				return [_as, null]
			}
			if (err != null) {
				return [null, err]
			}
			_as = $.appendOne(_as, (a).clone())
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public AllAuthorities(): [$.Slice<Resource>, $.GoError] {
		const p: Parser | $.VarRef<Parser> | null = this;
		// Authorities contains SOA in case of NXDOMAIN and friends,
		// otherwise it is empty.
		//
		// Pre-allocate up to a certain limit, since p.header is
		// untrusted data.
		let n = $.int($.pointerValue<Parser>(p).header.authorities)
		if (n > 10) {
			n = 10
		}
		let _as: $.Slice<Resource> = $.makeSlice<Resource>(0, n, undefined, () => new Resource(undefined, true))
		while (true) {
			let [a, err] = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).Authority() : Parser.prototype.Authority.call(p))
			if ($.comparableEqual(err, ErrSectionDone)) {
				return [_as, null]
			}
			if (err != null) {
				return [null, err]
			}
			_as = $.appendOne(_as, (a).clone())
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public AllQuestions(): [$.Slice<Question>, $.GoError] {
		const p: Parser | $.VarRef<Parser> | null = this;
		// Multiple questions are valid according to the spec,
		// but servers don't actually support them. There will
		// be at most one question here.
		//
		// Do not pre-allocate based on info in p.header, since
		// the data is untrusted.
		let qs: $.Slice<Question> = $.arrayToSlice<Question>([])
		while (true) {
			let [q, err] = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).Question() : Parser.prototype.Question.call(p))
			if ($.comparableEqual(err, ErrSectionDone)) {
				return [qs, null]
			}
			if (err != null) {
				return [null, err]
			}
			qs = $.appendOne(qs, (q).clone())
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public Answer(): [Resource, $.GoError] {
		const p: Parser | $.VarRef<Parser> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).resource(3) : Parser.prototype.resource.call(p, 3))
	}

	public AnswerHeader(): [ResourceHeader, $.GoError] {
		const p: Parser | $.VarRef<Parser> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).resourceHeader(3) : Parser.prototype.resourceHeader.call(p, 3))
	}

	public Authority(): [Resource, $.GoError] {
		const p: Parser | $.VarRef<Parser> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).resource(4) : Parser.prototype.resource.call(p, 4))
	}

	public AuthorityHeader(): [ResourceHeader, $.GoError] {
		const p: Parser | $.VarRef<Parser> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).resourceHeader(4) : Parser.prototype.resourceHeader.call(p, 4))
	}

	public CNAMEResource(): [CNAMEResource, $.GoError] {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		if (!(p$ as Parser).resHeaderValid || ((p$ as Parser).resHeaderType != 5)) {
			return [new CNAMEResource(undefined, true), ErrNotStarted]
		}
		let [r, err] = unpackCNAMEResource((p$ as Parser).msg, (p$ as Parser).off)
		if (err != null) {
			return [new CNAMEResource(undefined, true), err]
		}
		;(p$ as Parser).off = (p$ as Parser).off + ($.int((p$ as Parser).resHeaderLength));
		;(p$ as Parser).resHeaderValid = false;
		;(p$ as Parser).index++
		return [(r).clone(), null]
	}

	public HTTPSResource(): [__goscript_svcb.HTTPSResource, $.GoError] {
		const p: Parser | $.VarRef<Parser> | null = this;
		let [svcb, err] = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).genericSVCBResource(65) : Parser.prototype.genericSVCBResource.call(p, 65))
		if (err != null) {
			return [new __goscript_svcb.HTTPSResource(undefined, true), err]
		}
		return [new __goscript_svcb.HTTPSResource({SVCBResource: svcb}, true), null]
	}

	public MXResource(): [MXResource, $.GoError] {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		if (!(p$ as Parser).resHeaderValid || ((p$ as Parser).resHeaderType != 15)) {
			return [new MXResource(undefined, true), ErrNotStarted]
		}
		let [r, err] = unpackMXResource((p$ as Parser).msg, (p$ as Parser).off)
		if (err != null) {
			return [new MXResource(undefined, true), err]
		}
		;(p$ as Parser).off = (p$ as Parser).off + ($.int((p$ as Parser).resHeaderLength));
		;(p$ as Parser).resHeaderValid = false;
		;(p$ as Parser).index++
		return [(r).clone(), null]
	}

	public NSResource(): [NSResource, $.GoError] {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		if (!(p$ as Parser).resHeaderValid || ((p$ as Parser).resHeaderType != 2)) {
			return [new NSResource(undefined, true), ErrNotStarted]
		}
		let [r, err] = unpackNSResource((p$ as Parser).msg, (p$ as Parser).off)
		if (err != null) {
			return [new NSResource(undefined, true), err]
		}
		;(p$ as Parser).off = (p$ as Parser).off + ($.int((p$ as Parser).resHeaderLength));
		;(p$ as Parser).resHeaderValid = false;
		;(p$ as Parser).index++
		return [(r).clone(), null]
	}

	public OPTResource(): [OPTResource, $.GoError] {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		if (!(p$ as Parser).resHeaderValid || ((p$ as Parser).resHeaderType != 41)) {
			return [new OPTResource(undefined, true), ErrNotStarted]
		}
		let [r, err] = unpackOPTResource((p$ as Parser).msg, (p$ as Parser).off, (p$ as Parser).resHeaderLength)
		if (err != null) {
			return [new OPTResource(undefined, true), err]
		}
		;(p$ as Parser).off = (p$ as Parser).off + ($.int((p$ as Parser).resHeaderLength));
		;(p$ as Parser).resHeaderValid = false;
		;(p$ as Parser).index++
		return [(r).clone(), null]
	}

	public PTRResource(): [PTRResource, $.GoError] {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		if (!(p$ as Parser).resHeaderValid || ((p$ as Parser).resHeaderType != 12)) {
			return [new PTRResource(undefined, true), ErrNotStarted]
		}
		let [r, err] = unpackPTRResource((p$ as Parser).msg, (p$ as Parser).off)
		if (err != null) {
			return [new PTRResource(undefined, true), err]
		}
		;(p$ as Parser).off = (p$ as Parser).off + ($.int((p$ as Parser).resHeaderLength));
		;(p$ as Parser).resHeaderValid = false;
		;(p$ as Parser).index++
		return [(r).clone(), null]
	}

	public Question(): [Question, $.GoError] {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		{
			let err = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).checkAdvance(2) : Parser.prototype.checkAdvance.call(p, 2))
			if (err != null) {
				return [new Question(undefined, true), err]
			}
		}
		let name: $.VarRef<Name> = $.varRef(new Name(undefined, true))
		let __goscriptTuple18: any = name.value.unpack((p$ as Parser).msg, (p$ as Parser).off)
		let off = __goscriptTuple18[0]
		let err = __goscriptTuple18[1]
		if (err != null) {
			return [new Question(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "unpacking Question.Name", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		let __goscriptTuple19: any = unpackType((p$ as Parser).msg, off)
		let typ = __goscriptTuple19[0]
		off = __goscriptTuple19[1]
		err = __goscriptTuple19[2]
		if (err != null) {
			return [new Question(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "unpacking Question.Type", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		let __goscriptTuple20: any = unpackClass((p$ as Parser).msg, off)
		let _class = __goscriptTuple20[0]
		off = __goscriptTuple20[1]
		err = __goscriptTuple20[2]
		if (err != null) {
			return [new Question(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "unpacking Question.Class", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		;(p$ as Parser).off = off;
		;(p$ as Parser).index++
		return [new Question({Name: name.value, Type: typ, Class: _class}, true), null]
	}

	public SOAResource(): [SOAResource, $.GoError] {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		if (!(p$ as Parser).resHeaderValid || ((p$ as Parser).resHeaderType != 6)) {
			return [new SOAResource(undefined, true), ErrNotStarted]
		}
		let [r, err] = unpackSOAResource((p$ as Parser).msg, (p$ as Parser).off)
		if (err != null) {
			return [new SOAResource(undefined, true), err]
		}
		;(p$ as Parser).off = (p$ as Parser).off + ($.int((p$ as Parser).resHeaderLength));
		;(p$ as Parser).resHeaderValid = false;
		;(p$ as Parser).index++
		return [(r).clone(), null]
	}

	public SRVResource(): [SRVResource, $.GoError] {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		if (!(p$ as Parser).resHeaderValid || ((p$ as Parser).resHeaderType != 33)) {
			return [new SRVResource(undefined, true), ErrNotStarted]
		}
		let [r, err] = unpackSRVResource((p$ as Parser).msg, (p$ as Parser).off)
		if (err != null) {
			return [new SRVResource(undefined, true), err]
		}
		;(p$ as Parser).off = (p$ as Parser).off + ($.int((p$ as Parser).resHeaderLength));
		;(p$ as Parser).resHeaderValid = false;
		;(p$ as Parser).index++
		return [(r).clone(), null]
	}

	public SVCBResource(): [__goscript_svcb.SVCBResource, $.GoError] {
		const p: Parser | $.VarRef<Parser> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).genericSVCBResource(64) : Parser.prototype.genericSVCBResource.call(p, 64))
	}

	public SkipAdditional(): $.GoError {
		const p: Parser | $.VarRef<Parser> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).skipResource(5) : Parser.prototype.skipResource.call(p, 5))
	}

	public SkipAllAdditionals(): $.GoError {
		const p: Parser | $.VarRef<Parser> | null = this;
		while (true) {
			{
				let err = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).SkipAdditional() : Parser.prototype.SkipAdditional.call(p))
				if ($.comparableEqual(err, ErrSectionDone)) {
					return null
				} else {
					if (err != null) {
						return err
					}
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public SkipAllAnswers(): $.GoError {
		const p: Parser | $.VarRef<Parser> | null = this;
		while (true) {
			{
				let err = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).SkipAnswer() : Parser.prototype.SkipAnswer.call(p))
				if ($.comparableEqual(err, ErrSectionDone)) {
					return null
				} else {
					if (err != null) {
						return err
					}
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public SkipAllAuthorities(): $.GoError {
		const p: Parser | $.VarRef<Parser> | null = this;
		while (true) {
			{
				let err = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).SkipAuthority() : Parser.prototype.SkipAuthority.call(p))
				if ($.comparableEqual(err, ErrSectionDone)) {
					return null
				} else {
					if (err != null) {
						return err
					}
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public SkipAllQuestions(): $.GoError {
		const p: Parser | $.VarRef<Parser> | null = this;
		while (true) {
			{
				let err = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).SkipQuestion() : Parser.prototype.SkipQuestion.call(p))
				if ($.comparableEqual(err, ErrSectionDone)) {
					return null
				} else {
					if (err != null) {
						return err
					}
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public SkipAnswer(): $.GoError {
		const p: Parser | $.VarRef<Parser> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).skipResource(3) : Parser.prototype.skipResource.call(p, 3))
	}

	public SkipAuthority(): $.GoError {
		const p: Parser | $.VarRef<Parser> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).skipResource(4) : Parser.prototype.skipResource.call(p, 4))
	}

	public SkipQuestion(): $.GoError {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		{
			let err = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).checkAdvance(2) : Parser.prototype.checkAdvance.call(p, 2))
			if (err != null) {
				return err
			}
		}
		let __goscriptTuple21: any = skipName((p$ as Parser).msg, (p$ as Parser).off)
		let off = __goscriptTuple21[0]
		let err = __goscriptTuple21[1]
		if (err != null) {
			return $.interfaceValue<$.GoError>(new nestedError({s: "skipping Question Name", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
		}
		{
			let __goscriptTuple22: any = skipType((p$ as Parser).msg, off)
			off = __goscriptTuple22[0]
			err = __goscriptTuple22[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>(new nestedError({s: "skipping Question Type", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
			}
		}
		{
			let __goscriptTuple23: any = skipClass((p$ as Parser).msg, off)
			off = __goscriptTuple23[0]
			err = __goscriptTuple23[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>(new nestedError({s: "skipping Question Class", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
			}
		}
		;(p$ as Parser).off = off;
		;(p$ as Parser).index++
		return null
	}

	public Start(msg: $.Slice<number>): [Header, $.GoError] {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		if ((p$ as Parser).msg != null) {
			$.assignStruct((p$ as Parser), new Parser(undefined, true))
		}
		;(p$ as Parser).msg = msg
		let err: $.GoError = null! as $.GoError
		{
			let __goscriptTuple24: any = (p$ as Parser).header.unpack(msg, 0);
			;(p$ as Parser).off = __goscriptTuple24[0]
			err = __goscriptTuple24[1]
			if (err != null) {
				return [new Header(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "unpacking header", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		;(p$ as Parser).section = 2
		return [(p$ as Parser).header.header(), null]
	}

	public TXTResource(): [TXTResource, $.GoError] {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		if (!(p$ as Parser).resHeaderValid || ((p$ as Parser).resHeaderType != 16)) {
			return [new TXTResource(undefined, true), ErrNotStarted]
		}
		let [r, err] = unpackTXTResource((p$ as Parser).msg, (p$ as Parser).off, (p$ as Parser).resHeaderLength)
		if (err != null) {
			return [new TXTResource(undefined, true), err]
		}
		;(p$ as Parser).off = (p$ as Parser).off + ($.int((p$ as Parser).resHeaderLength));
		;(p$ as Parser).resHeaderValid = false;
		;(p$ as Parser).index++
		return [(r).clone(), null]
	}

	public UnknownResource(): [UnknownResource, $.GoError] {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		if (!(p$ as Parser).resHeaderValid) {
			return [new UnknownResource(undefined, true), ErrNotStarted]
		}
		let [r, err] = unpackUnknownResource((p$ as Parser).resHeaderType, (p$ as Parser).msg, (p$ as Parser).off, (p$ as Parser).resHeaderLength)
		if (err != null) {
			return [new UnknownResource(undefined, true), err]
		}
		;(p$ as Parser).off = (p$ as Parser).off + ($.int((p$ as Parser).resHeaderLength));
		;(p$ as Parser).resHeaderValid = false;
		;(p$ as Parser).index++
		return [(r).clone(), null]
	}

	public checkAdvance(sec: section): $.GoError {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		if ((p$ as Parser).section < sec) {
			return ErrNotStarted
		}
		if ((p$ as Parser).section > sec) {
			return ErrSectionDone
		}
		;(p$ as Parser).resHeaderValid = false
		if ((p$ as Parser).index == $.int((p$ as Parser).header.count(sec))) {
			;(p$ as Parser).index = 0;
			;(p$ as Parser).section = (((p$ as Parser).section + 1) & 0xff)
			return ErrSectionDone
		}
		return null
	}

	public genericSVCBResource(svcbType: Type): [__goscript_svcb.SVCBResource, $.GoError] {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		if (!(p$ as Parser).resHeaderValid || ((p$ as Parser).resHeaderType != svcbType)) {
			return [new __goscript_svcb.SVCBResource(undefined, true), ErrNotStarted]
		}
		let [r, err] = __goscript_svcb.unpackSVCBResource((p$ as Parser).msg, (p$ as Parser).off, (p$ as Parser).resHeaderLength)
		if (err != null) {
			return [new __goscript_svcb.SVCBResource(undefined, true), err]
		}
		;(p$ as Parser).off = (p$ as Parser).off + ($.int((p$ as Parser).resHeaderLength));
		;(p$ as Parser).resHeaderValid = false;
		;(p$ as Parser).index++
		return [(r).clone(), null]
	}

	public resource(sec: section): [Resource, $.GoError] {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		let r: Resource = new Resource(undefined, true)
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple25: any = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).resourceHeader(sec) : Parser.prototype.resourceHeader.call(p, sec))
		$.assignStruct(r.Header, __goscriptTuple25[0])
		err = __goscriptTuple25[1]
		if (err != null) {
			return [(r).clone(), err]
		}
		;(p$ as Parser).resHeaderValid = false
		let __goscriptTuple26: any = unpackResourceBody((p$ as Parser).msg, (p$ as Parser).off, r.Header)
		r.Body = __goscriptTuple26[0];
		;(p$ as Parser).off = __goscriptTuple26[1]
		err = __goscriptTuple26[2]
		if (err != null) {
			return [new Resource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: $.concatString("unpacking ", $.mapGet<section, string, string>(sectionNames, sec, "")[0]), err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		;(p$ as Parser).index++
		return [(r).clone(), null]
	}

	public resourceHeader(sec: section): [ResourceHeader, $.GoError] {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		if ((p$ as Parser).resHeaderValid) {
			;(p$ as Parser).off = (p$ as Parser).resHeaderOffset
		}

		{
			let err = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).checkAdvance(sec) : Parser.prototype.checkAdvance.call(p, sec))
			if (err != null) {
				return [new ResourceHeader(undefined, true), err]
			}
		}
		let hdr: $.VarRef<ResourceHeader> = $.varRef(new ResourceHeader(undefined, true))
		let __goscriptTuple27: any = hdr.value.unpack((p$ as Parser).msg, (p$ as Parser).off)
		let off = __goscriptTuple27[0]
		let err = __goscriptTuple27[1]
		if (err != null) {
			return [new ResourceHeader(undefined, true), err]
		}
		;(p$ as Parser).resHeaderValid = true;
		;(p$ as Parser).resHeaderOffset = (p$ as Parser).off;
		;(p$ as Parser).resHeaderType = hdr.value.Type;
		;(p$ as Parser).resHeaderLength = hdr.value.Length;
		;(p$ as Parser).off = off
		return [(hdr.value).clone(), null]
	}

	public skipResource(sec: section): $.GoError {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		if ((p$ as Parser).resHeaderValid && ((p$ as Parser).section == sec)) {
			let newOff = (p$ as Parser).off + $.int((p$ as Parser).resHeaderLength)
			if (newOff > $.sliceLen((p$ as Parser).msg)) {
				return errResourceLen
			}
			;(p$ as Parser).off = newOff;
			;(p$ as Parser).resHeaderValid = false;
			;(p$ as Parser).index++
			return null
		}
		{
			let err = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).checkAdvance(sec) : Parser.prototype.checkAdvance.call(p, sec))
			if (err != null) {
				return err
			}
		}
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple28: any = skipResource((p$ as Parser).msg, (p$ as Parser).off);
		;(p$ as Parser).off = __goscriptTuple28[0]
		err = __goscriptTuple28[1]
		if (err != null) {
			return $.interfaceValue<$.GoError>(new nestedError({s: $.concatString("skipping: ", $.mapGet<section, string, string>(sectionNames, sec, "")[0]), err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
		}
		;(p$ as Parser).index++
		return null
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.Parser",
		() => new Parser(),
		() => [$.methodSignature("AAAAResource", [], ["dnsmessage.AAAAResource", "error"], true), $.methodSignature("AResource", [], ["dnsmessage.AResource", "error"], true), $.methodSignature("Additional", [], ["dnsmessage.Resource", "error"], true), $.methodSignature("AdditionalHeader", [], ["dnsmessage.ResourceHeader", "error"], true), $.methodSignature("AllAdditionals", [], [/* @__PURE__ */ $.sliceType("dnsmessage.Resource"), "error"], true), $.methodSignature("AllAnswers", [], [/* @__PURE__ */ $.sliceType("dnsmessage.Resource"), "error"], true), $.methodSignature("AllAuthorities", [], [/* @__PURE__ */ $.sliceType("dnsmessage.Resource"), "error"], true), $.methodSignature("AllQuestions", [], [/* @__PURE__ */ $.sliceType("dnsmessage.Question"), "error"], true), $.methodSignature("Answer", [], ["dnsmessage.Resource", "error"], true), $.methodSignature("AnswerHeader", [], ["dnsmessage.ResourceHeader", "error"], true), $.methodSignature("Authority", [], ["dnsmessage.Resource", "error"], true), $.methodSignature("AuthorityHeader", [], ["dnsmessage.ResourceHeader", "error"], true), $.methodSignature("CNAMEResource", [], ["dnsmessage.CNAMEResource", "error"], true), $.methodSignature("HTTPSResource", [], ["dnsmessage.HTTPSResource", "error"], true), $.methodSignature("MXResource", [], ["dnsmessage.MXResource", "error"], true), $.methodSignature("NSResource", [], ["dnsmessage.NSResource", "error"], true), $.methodSignature("OPTResource", [], ["dnsmessage.OPTResource", "error"], true), $.methodSignature("PTRResource", [], ["dnsmessage.PTRResource", "error"], true), $.methodSignature("Question", [], ["dnsmessage.Question", "error"], true), $.methodSignature("SOAResource", [], ["dnsmessage.SOAResource", "error"], true), $.methodSignature("SRVResource", [], ["dnsmessage.SRVResource", "error"], true), $.methodSignature("SVCBResource", [], ["dnsmessage.SVCBResource", "error"], true), $.methodSignature("SkipAdditional", [], ["error"], true), $.methodSignature("SkipAllAdditionals", [], ["error"], true), $.methodSignature("SkipAllAnswers", [], ["error"], true), $.methodSignature("SkipAllAuthorities", [], ["error"], true), $.methodSignature("SkipAllQuestions", [], ["error"], true), $.methodSignature("SkipAnswer", [], ["error"], true), $.methodSignature("SkipAuthority", [], ["error"], true), $.methodSignature("SkipQuestion", [], ["error"], true), $.methodSignature("Start", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["dnsmessage.Header", "error"], true), $.methodSignature("TXTResource", [], ["dnsmessage.TXTResource", "error"], true), $.methodSignature("UnknownResource", [], ["dnsmessage.UnknownResource", "error"], true), $.methodSignature("checkAdvance", [["sec", /* @__PURE__ */ $.basicType("uint8", "dnsmessage.section")]], ["error"], true), $.methodSignature("genericSVCBResource", [["svcbType", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")]], ["dnsmessage.SVCBResource", "error"], true), $.methodSignature("resource", [["sec", /* @__PURE__ */ $.basicType("uint8", "dnsmessage.section")]], ["dnsmessage.Resource", "error"], true), $.methodSignature("resourceHeader", [["sec", /* @__PURE__ */ $.basicType("uint8", "dnsmessage.section")]], ["dnsmessage.ResourceHeader", "error"], true), $.methodSignature("skipResource", [["sec", /* @__PURE__ */ $.basicType("uint8", "dnsmessage.section")]], ["error"], true)],
		Parser,
		() => [/* @__PURE__ */ $.structField("msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("header", "dnsmessage.header", [1], 24, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("section", /* @__PURE__ */ $.basicType("uint8", "dnsmessage.section"), [2], 36, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("off", /* @__PURE__ */ $.basicType("int"), [3], 40, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("index", /* @__PURE__ */ $.basicType("int"), [4], 48, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("resHeaderValid", /* @__PURE__ */ $.basicType("bool"), [5], 56, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("resHeaderOffset", /* @__PURE__ */ $.basicType("int"), [6], 64, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("resHeaderType", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type"), [7], 72, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("resHeaderLength", /* @__PURE__ */ $.basicType("uint16"), [8], 74, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" })]
	)
}

export class Builder {
	// msg is the storage for the message being built.
	public get msg(): $.Slice<number> {
		return this._fields.msg
	}

	public set msg(value: $.Slice<number>) {
		this._fields.msg = value
	}

	// section keeps track of the current section being built.
	public get section(): section {
		return this._fields.section
	}

	public set section(value: section) {
		this._fields.section = value
	}

	// header keeps track of what should go in the header when Finish is
	// called.
	public get header(): header {
		return this._fields.header
	}

	public set header(value: header) {
		this._fields.header = value
	}

	// start is the starting index of the bytes allocated in msg for header.
	public get start(): number {
		return this._fields.start
	}

	public set start(value: number) {
		this._fields.start = value
	}

	// compression is a mapping from name suffixes to their starting index
	// in msg.
	public get compression(): globalThis.Map<string, number> | null {
		return this._fields.compression
	}

	public set compression(value: globalThis.Map<string, number> | null) {
		this._fields.compression = value
	}

	public _fields: {
		msg: $.Slice<number>
		section: section
		header: header
		start: number
		compression: globalThis.Map<string, number> | null
	}

	constructor(init?: Partial<{msg?: $.Slice<number>, section?: section, header?: header, start?: number, compression?: globalThis.Map<string, number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			msg: init?.msg ?? (null! as $.Slice<number>),
			section: init?.section ?? (0 as section),
			header: init?.header ? init.header.clone() : new header(undefined, true),
			start: init?.start ?? (0 as number),
			compression: init?.compression ?? (null! as globalThis.Map<string, number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Builder {
		return new Builder(this, true)
	}

	public __goscriptAssign(source: Builder): void {
		const target = this._fields
		const values = source._fields
		target.msg = values.msg
		target.section = values.section
		$.assignStruct(target.header, values.header)
		target.start = values.start
		target.compression = values.compression
	}

	public AAAAResource(__goscriptParam0: ResourceHeader, __goscriptParam1: AAAAResource): $.GoError {
		let b: Builder | $.VarRef<Builder> | null = this;
		let h: $.VarRef<ResourceHeader> = $.varRef(__goscriptParam0)
		let r: $.VarRef<AAAAResource> = $.varRef(__goscriptParam1)
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		{
			let err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).checkResourceSection() : Builder.prototype.checkResourceSection.call(b))
			if (err != null) {
				return err
			}
		}
		h.value.Type = r.value.realType()
		let __goscriptTuple29: any = h.value.pack((b$ as Builder).msg, (b$ as Builder).compression, (b$ as Builder).start)
		let msg: $.Slice<number> = __goscriptTuple29[0]
		let lenOff = __goscriptTuple29[1]
		let err = __goscriptTuple29[2]
		if (err != null) {
			return $.interfaceValue<$.GoError>(new nestedError({s: "ResourceHeader", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
		}
		let preLen = $.sliceLen(msg)
		{
			let __goscriptTuple30: any = r.value.pack(msg, (b$ as Builder).compression, (b$ as Builder).start)
			msg = __goscriptTuple30[0]
			err = __goscriptTuple30[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>(new nestedError({s: "AAAAResource body", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
			}
		}
		{
			let __goscriptShadow1 = h.value.fixLen(msg, lenOff, preLen)
			if (__goscriptShadow1 != null) {
				return __goscriptShadow1
			}
		}
		{
			let __goscriptShadow2 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).incrementSectionCount() : Builder.prototype.incrementSectionCount.call(b))
			if (__goscriptShadow2 != null) {
				return __goscriptShadow2
			}
		}
		;(b$ as Builder).msg = msg
		return null
	}

	public AResource(__goscriptParam2: ResourceHeader, __goscriptParam3: AResource): $.GoError {
		let b: Builder | $.VarRef<Builder> | null = this;
		let h: $.VarRef<ResourceHeader> = $.varRef(__goscriptParam2)
		let r: $.VarRef<AResource> = $.varRef(__goscriptParam3)
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		{
			let err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).checkResourceSection() : Builder.prototype.checkResourceSection.call(b))
			if (err != null) {
				return err
			}
		}
		h.value.Type = r.value.realType()
		let __goscriptTuple31: any = h.value.pack((b$ as Builder).msg, (b$ as Builder).compression, (b$ as Builder).start)
		let msg: $.Slice<number> = __goscriptTuple31[0]
		let lenOff = __goscriptTuple31[1]
		let err = __goscriptTuple31[2]
		if (err != null) {
			return $.interfaceValue<$.GoError>(new nestedError({s: "ResourceHeader", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
		}
		let preLen = $.sliceLen(msg)
		{
			let __goscriptTuple32: any = r.value.pack(msg, (b$ as Builder).compression, (b$ as Builder).start)
			msg = __goscriptTuple32[0]
			err = __goscriptTuple32[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>(new nestedError({s: "AResource body", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
			}
		}
		{
			let __goscriptShadow3 = h.value.fixLen(msg, lenOff, preLen)
			if (__goscriptShadow3 != null) {
				return __goscriptShadow3
			}
		}
		{
			let __goscriptShadow4 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).incrementSectionCount() : Builder.prototype.incrementSectionCount.call(b))
			if (__goscriptShadow4 != null) {
				return __goscriptShadow4
			}
		}
		;(b$ as Builder).msg = msg
		return null
	}

	public CNAMEResource(__goscriptParam4: ResourceHeader, __goscriptParam5: CNAMEResource): $.GoError {
		let b: Builder | $.VarRef<Builder> | null = this;
		let h: $.VarRef<ResourceHeader> = $.varRef(__goscriptParam4)
		let r: $.VarRef<CNAMEResource> = $.varRef(__goscriptParam5)
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		{
			let err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).checkResourceSection() : Builder.prototype.checkResourceSection.call(b))
			if (err != null) {
				return err
			}
		}
		h.value.Type = r.value.realType()
		let __goscriptTuple33: any = h.value.pack((b$ as Builder).msg, (b$ as Builder).compression, (b$ as Builder).start)
		let msg: $.Slice<number> = __goscriptTuple33[0]
		let lenOff = __goscriptTuple33[1]
		let err = __goscriptTuple33[2]
		if (err != null) {
			return $.interfaceValue<$.GoError>(new nestedError({s: "ResourceHeader", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
		}
		let preLen = $.sliceLen(msg)
		{
			let __goscriptTuple34: any = r.value.pack(msg, (b$ as Builder).compression, (b$ as Builder).start)
			msg = __goscriptTuple34[0]
			err = __goscriptTuple34[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>(new nestedError({s: "CNAMEResource body", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
			}
		}
		{
			let __goscriptShadow5 = h.value.fixLen(msg, lenOff, preLen)
			if (__goscriptShadow5 != null) {
				return __goscriptShadow5
			}
		}
		{
			let __goscriptShadow6 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).incrementSectionCount() : Builder.prototype.incrementSectionCount.call(b))
			if (__goscriptShadow6 != null) {
				return __goscriptShadow6
			}
		}
		;(b$ as Builder).msg = msg
		return null
	}

	public EnableCompression(): void {
		let b: Builder | $.VarRef<Builder> | null = this;
		$.pointerValue<Builder>(b).compression = $.makeMap<string, number>([])
	}

	public Finish(): [$.Slice<number>, $.GoError] {
		let b: Builder | $.VarRef<Builder> | null = this;
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		if ((b$ as Builder).section < 1) {
			return [null, ErrNotStarted]
		}
		;(b$ as Builder).section = 6
		// Space for the header was allocated in NewBuilder.
		void (b$ as Builder).header.pack($.goSlice((b$ as Builder).msg, (b$ as Builder).start, (b$ as Builder).start))
		return [(b$ as Builder).msg, null]
	}

	public HTTPSResource(h: ResourceHeader, __goscriptParam6: __goscript_svcb.HTTPSResource): $.GoError {
		const b: Builder | $.VarRef<Builder> | null = this;
		let r: $.VarRef<__goscript_svcb.HTTPSResource> = $.varRef(__goscriptParam6)
		h.Type = r.value.realType()
		return (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).genericSVCBResource((h).clone(), (r.value.SVCBResource).clone()) : Builder.prototype.genericSVCBResource.call(b, (h).clone(), (r.value.SVCBResource).clone()))
	}

	public MXResource(__goscriptParam7: ResourceHeader, __goscriptParam8: MXResource): $.GoError {
		let b: Builder | $.VarRef<Builder> | null = this;
		let h: $.VarRef<ResourceHeader> = $.varRef(__goscriptParam7)
		let r: $.VarRef<MXResource> = $.varRef(__goscriptParam8)
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		{
			let err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).checkResourceSection() : Builder.prototype.checkResourceSection.call(b))
			if (err != null) {
				return err
			}
		}
		h.value.Type = r.value.realType()
		let __goscriptTuple35: any = h.value.pack((b$ as Builder).msg, (b$ as Builder).compression, (b$ as Builder).start)
		let msg: $.Slice<number> = __goscriptTuple35[0]
		let lenOff = __goscriptTuple35[1]
		let err = __goscriptTuple35[2]
		if (err != null) {
			return $.interfaceValue<$.GoError>(new nestedError({s: "ResourceHeader", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
		}
		let preLen = $.sliceLen(msg)
		{
			let __goscriptTuple36: any = r.value.pack(msg, (b$ as Builder).compression, (b$ as Builder).start)
			msg = __goscriptTuple36[0]
			err = __goscriptTuple36[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>(new nestedError({s: "MXResource body", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
			}
		}
		{
			let __goscriptShadow7 = h.value.fixLen(msg, lenOff, preLen)
			if (__goscriptShadow7 != null) {
				return __goscriptShadow7
			}
		}
		{
			let __goscriptShadow8 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).incrementSectionCount() : Builder.prototype.incrementSectionCount.call(b))
			if (__goscriptShadow8 != null) {
				return __goscriptShadow8
			}
		}
		;(b$ as Builder).msg = msg
		return null
	}

	public NSResource(__goscriptParam9: ResourceHeader, __goscriptParam10: NSResource): $.GoError {
		let b: Builder | $.VarRef<Builder> | null = this;
		let h: $.VarRef<ResourceHeader> = $.varRef(__goscriptParam9)
		let r: $.VarRef<NSResource> = $.varRef(__goscriptParam10)
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		{
			let err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).checkResourceSection() : Builder.prototype.checkResourceSection.call(b))
			if (err != null) {
				return err
			}
		}
		h.value.Type = r.value.realType()
		let __goscriptTuple37: any = h.value.pack((b$ as Builder).msg, (b$ as Builder).compression, (b$ as Builder).start)
		let msg: $.Slice<number> = __goscriptTuple37[0]
		let lenOff = __goscriptTuple37[1]
		let err = __goscriptTuple37[2]
		if (err != null) {
			return $.interfaceValue<$.GoError>(new nestedError({s: "ResourceHeader", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
		}
		let preLen = $.sliceLen(msg)
		{
			let __goscriptTuple38: any = r.value.pack(msg, (b$ as Builder).compression, (b$ as Builder).start)
			msg = __goscriptTuple38[0]
			err = __goscriptTuple38[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>(new nestedError({s: "NSResource body", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
			}
		}
		{
			let __goscriptShadow9 = h.value.fixLen(msg, lenOff, preLen)
			if (__goscriptShadow9 != null) {
				return __goscriptShadow9
			}
		}
		{
			let __goscriptShadow10 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).incrementSectionCount() : Builder.prototype.incrementSectionCount.call(b))
			if (__goscriptShadow10 != null) {
				return __goscriptShadow10
			}
		}
		;(b$ as Builder).msg = msg
		return null
	}

	public OPTResource(__goscriptParam11: ResourceHeader, __goscriptParam12: OPTResource): $.GoError {
		let b: Builder | $.VarRef<Builder> | null = this;
		let h: $.VarRef<ResourceHeader> = $.varRef(__goscriptParam11)
		let r: $.VarRef<OPTResource> = $.varRef(__goscriptParam12)
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		{
			let err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).checkResourceSection() : Builder.prototype.checkResourceSection.call(b))
			if (err != null) {
				return err
			}
		}
		h.value.Type = r.value.realType()
		let __goscriptTuple39: any = h.value.pack((b$ as Builder).msg, (b$ as Builder).compression, (b$ as Builder).start)
		let msg: $.Slice<number> = __goscriptTuple39[0]
		let lenOff = __goscriptTuple39[1]
		let err = __goscriptTuple39[2]
		if (err != null) {
			return $.interfaceValue<$.GoError>(new nestedError({s: "ResourceHeader", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
		}
		let preLen = $.sliceLen(msg)
		{
			let __goscriptTuple40: any = r.value.pack(msg, (b$ as Builder).compression, (b$ as Builder).start)
			msg = __goscriptTuple40[0]
			err = __goscriptTuple40[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>(new nestedError({s: "OPTResource body", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
			}
		}
		{
			let __goscriptShadow11 = h.value.fixLen(msg, lenOff, preLen)
			if (__goscriptShadow11 != null) {
				return __goscriptShadow11
			}
		}
		{
			let __goscriptShadow12 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).incrementSectionCount() : Builder.prototype.incrementSectionCount.call(b))
			if (__goscriptShadow12 != null) {
				return __goscriptShadow12
			}
		}
		;(b$ as Builder).msg = msg
		return null
	}

	public PTRResource(__goscriptParam13: ResourceHeader, __goscriptParam14: PTRResource): $.GoError {
		let b: Builder | $.VarRef<Builder> | null = this;
		let h: $.VarRef<ResourceHeader> = $.varRef(__goscriptParam13)
		let r: $.VarRef<PTRResource> = $.varRef(__goscriptParam14)
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		{
			let err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).checkResourceSection() : Builder.prototype.checkResourceSection.call(b))
			if (err != null) {
				return err
			}
		}
		h.value.Type = r.value.realType()
		let __goscriptTuple41: any = h.value.pack((b$ as Builder).msg, (b$ as Builder).compression, (b$ as Builder).start)
		let msg: $.Slice<number> = __goscriptTuple41[0]
		let lenOff = __goscriptTuple41[1]
		let err = __goscriptTuple41[2]
		if (err != null) {
			return $.interfaceValue<$.GoError>(new nestedError({s: "ResourceHeader", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
		}
		let preLen = $.sliceLen(msg)
		{
			let __goscriptTuple42: any = r.value.pack(msg, (b$ as Builder).compression, (b$ as Builder).start)
			msg = __goscriptTuple42[0]
			err = __goscriptTuple42[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>(new nestedError({s: "PTRResource body", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
			}
		}
		{
			let __goscriptShadow13 = h.value.fixLen(msg, lenOff, preLen)
			if (__goscriptShadow13 != null) {
				return __goscriptShadow13
			}
		}
		{
			let __goscriptShadow14 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).incrementSectionCount() : Builder.prototype.incrementSectionCount.call(b))
			if (__goscriptShadow14 != null) {
				return __goscriptShadow14
			}
		}
		;(b$ as Builder).msg = msg
		return null
	}

	public Question(__goscriptParam15: Question): $.GoError {
		let b: Builder | $.VarRef<Builder> | null = this;
		let q: $.VarRef<Question> = $.varRef(__goscriptParam15)
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		if ((b$ as Builder).section < 2) {
			return ErrNotStarted
		}
		if ((b$ as Builder).section > 2) {
			return ErrSectionDone
		}
		let __goscriptTuple43: any = q.value.pack((b$ as Builder).msg, (b$ as Builder).compression, (b$ as Builder).start)
		let msg: $.Slice<number> = __goscriptTuple43[0]
		let err = __goscriptTuple43[1]
		if (err != null) {
			return err
		}
		{
			let __goscriptShadow15 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).incrementSectionCount() : Builder.prototype.incrementSectionCount.call(b))
			if (__goscriptShadow15 != null) {
				return __goscriptShadow15
			}
		}
		;(b$ as Builder).msg = msg
		return null
	}

	public SOAResource(__goscriptParam16: ResourceHeader, __goscriptParam17: SOAResource): $.GoError {
		let b: Builder | $.VarRef<Builder> | null = this;
		let h: $.VarRef<ResourceHeader> = $.varRef(__goscriptParam16)
		let r: $.VarRef<SOAResource> = $.varRef(__goscriptParam17)
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		{
			let err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).checkResourceSection() : Builder.prototype.checkResourceSection.call(b))
			if (err != null) {
				return err
			}
		}
		h.value.Type = r.value.realType()
		let __goscriptTuple44: any = h.value.pack((b$ as Builder).msg, (b$ as Builder).compression, (b$ as Builder).start)
		let msg: $.Slice<number> = __goscriptTuple44[0]
		let lenOff = __goscriptTuple44[1]
		let err = __goscriptTuple44[2]
		if (err != null) {
			return $.interfaceValue<$.GoError>(new nestedError({s: "ResourceHeader", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
		}
		let preLen = $.sliceLen(msg)
		{
			let __goscriptTuple45: any = r.value.pack(msg, (b$ as Builder).compression, (b$ as Builder).start)
			msg = __goscriptTuple45[0]
			err = __goscriptTuple45[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>(new nestedError({s: "SOAResource body", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
			}
		}
		{
			let __goscriptShadow16 = h.value.fixLen(msg, lenOff, preLen)
			if (__goscriptShadow16 != null) {
				return __goscriptShadow16
			}
		}
		{
			let __goscriptShadow17 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).incrementSectionCount() : Builder.prototype.incrementSectionCount.call(b))
			if (__goscriptShadow17 != null) {
				return __goscriptShadow17
			}
		}
		;(b$ as Builder).msg = msg
		return null
	}

	public SRVResource(__goscriptParam18: ResourceHeader, __goscriptParam19: SRVResource): $.GoError {
		let b: Builder | $.VarRef<Builder> | null = this;
		let h: $.VarRef<ResourceHeader> = $.varRef(__goscriptParam18)
		let r: $.VarRef<SRVResource> = $.varRef(__goscriptParam19)
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		{
			let err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).checkResourceSection() : Builder.prototype.checkResourceSection.call(b))
			if (err != null) {
				return err
			}
		}
		h.value.Type = r.value.realType()
		let __goscriptTuple46: any = h.value.pack((b$ as Builder).msg, (b$ as Builder).compression, (b$ as Builder).start)
		let msg: $.Slice<number> = __goscriptTuple46[0]
		let lenOff = __goscriptTuple46[1]
		let err = __goscriptTuple46[2]
		if (err != null) {
			return $.interfaceValue<$.GoError>(new nestedError({s: "ResourceHeader", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
		}
		let preLen = $.sliceLen(msg)
		{
			let __goscriptTuple47: any = r.value.pack(msg, (b$ as Builder).compression, (b$ as Builder).start)
			msg = __goscriptTuple47[0]
			err = __goscriptTuple47[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>(new nestedError({s: "SRVResource body", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
			}
		}
		{
			let __goscriptShadow18 = h.value.fixLen(msg, lenOff, preLen)
			if (__goscriptShadow18 != null) {
				return __goscriptShadow18
			}
		}
		{
			let __goscriptShadow19 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).incrementSectionCount() : Builder.prototype.incrementSectionCount.call(b))
			if (__goscriptShadow19 != null) {
				return __goscriptShadow19
			}
		}
		;(b$ as Builder).msg = msg
		return null
	}

	public SVCBResource(h: ResourceHeader, __goscriptParam20: __goscript_svcb.SVCBResource): $.GoError {
		const b: Builder | $.VarRef<Builder> | null = this;
		let r: $.VarRef<__goscript_svcb.SVCBResource> = $.varRef(__goscriptParam20)
		h.Type = r.value.realType()
		return (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).genericSVCBResource((h).clone(), (r.value).clone()) : Builder.prototype.genericSVCBResource.call(b, (h).clone(), (r.value).clone()))
	}

	public StartAdditionals(): $.GoError {
		let b: Builder | $.VarRef<Builder> | null = this;
		{
			let err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).startCheck(5) : Builder.prototype.startCheck.call(b, 5))
			if (err != null) {
				return err
			}
		}
		$.pointerValue<Builder>(b).section = 5
		return null
	}

	public StartAnswers(): $.GoError {
		let b: Builder | $.VarRef<Builder> | null = this;
		{
			let err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).startCheck(3) : Builder.prototype.startCheck.call(b, 3))
			if (err != null) {
				return err
			}
		}
		$.pointerValue<Builder>(b).section = 3
		return null
	}

	public StartAuthorities(): $.GoError {
		let b: Builder | $.VarRef<Builder> | null = this;
		{
			let err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).startCheck(4) : Builder.prototype.startCheck.call(b, 4))
			if (err != null) {
				return err
			}
		}
		$.pointerValue<Builder>(b).section = 4
		return null
	}

	public StartQuestions(): $.GoError {
		let b: Builder | $.VarRef<Builder> | null = this;
		{
			let err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).startCheck(2) : Builder.prototype.startCheck.call(b, 2))
			if (err != null) {
				return err
			}
		}
		$.pointerValue<Builder>(b).section = 2
		return null
	}

	public TXTResource(__goscriptParam21: ResourceHeader, __goscriptParam22: TXTResource): $.GoError {
		let b: Builder | $.VarRef<Builder> | null = this;
		let h: $.VarRef<ResourceHeader> = $.varRef(__goscriptParam21)
		let r: $.VarRef<TXTResource> = $.varRef(__goscriptParam22)
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		{
			let err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).checkResourceSection() : Builder.prototype.checkResourceSection.call(b))
			if (err != null) {
				return err
			}
		}
		h.value.Type = r.value.realType()
		let __goscriptTuple48: any = h.value.pack((b$ as Builder).msg, (b$ as Builder).compression, (b$ as Builder).start)
		let msg: $.Slice<number> = __goscriptTuple48[0]
		let lenOff = __goscriptTuple48[1]
		let err = __goscriptTuple48[2]
		if (err != null) {
			return $.interfaceValue<$.GoError>(new nestedError({s: "ResourceHeader", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
		}
		let preLen = $.sliceLen(msg)
		{
			let __goscriptTuple49: any = r.value.pack(msg, (b$ as Builder).compression, (b$ as Builder).start)
			msg = __goscriptTuple49[0]
			err = __goscriptTuple49[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>(new nestedError({s: "TXTResource body", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
			}
		}
		{
			let __goscriptShadow20 = h.value.fixLen(msg, lenOff, preLen)
			if (__goscriptShadow20 != null) {
				return __goscriptShadow20
			}
		}
		{
			let __goscriptShadow21 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).incrementSectionCount() : Builder.prototype.incrementSectionCount.call(b))
			if (__goscriptShadow21 != null) {
				return __goscriptShadow21
			}
		}
		;(b$ as Builder).msg = msg
		return null
	}

	public UnknownResource(__goscriptParam23: ResourceHeader, __goscriptParam24: UnknownResource): $.GoError {
		let b: Builder | $.VarRef<Builder> | null = this;
		let h: $.VarRef<ResourceHeader> = $.varRef(__goscriptParam23)
		let r: $.VarRef<UnknownResource> = $.varRef(__goscriptParam24)
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		{
			let err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).checkResourceSection() : Builder.prototype.checkResourceSection.call(b))
			if (err != null) {
				return err
			}
		}
		h.value.Type = r.value.realType()
		let __goscriptTuple50: any = h.value.pack((b$ as Builder).msg, (b$ as Builder).compression, (b$ as Builder).start)
		let msg: $.Slice<number> = __goscriptTuple50[0]
		let lenOff = __goscriptTuple50[1]
		let err = __goscriptTuple50[2]
		if (err != null) {
			return $.interfaceValue<$.GoError>(new nestedError({s: "ResourceHeader", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
		}
		let preLen = $.sliceLen(msg)
		{
			let __goscriptTuple51: any = r.value.pack(msg, (b$ as Builder).compression, (b$ as Builder).start)
			msg = __goscriptTuple51[0]
			err = __goscriptTuple51[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>(new nestedError({s: "UnknownResource body", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
			}
		}
		{
			let __goscriptShadow22 = h.value.fixLen(msg, lenOff, preLen)
			if (__goscriptShadow22 != null) {
				return __goscriptShadow22
			}
		}
		{
			let __goscriptShadow23 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).incrementSectionCount() : Builder.prototype.incrementSectionCount.call(b))
			if (__goscriptShadow23 != null) {
				return __goscriptShadow23
			}
		}
		;(b$ as Builder).msg = msg
		return null
	}

	public checkResourceSection(): $.GoError {
		const b: Builder | $.VarRef<Builder> | null = this;
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		if ((b$ as Builder).section < 3) {
			return ErrNotStarted
		}
		if ((b$ as Builder).section > 5) {
			return ErrSectionDone
		}
		return null
	}

	public genericSVCBResource(__goscriptParam25: ResourceHeader, __goscriptParam26: __goscript_svcb.SVCBResource): $.GoError {
		let b: Builder | $.VarRef<Builder> | null = this;
		let h: $.VarRef<ResourceHeader> = $.varRef(__goscriptParam25)
		let r: $.VarRef<__goscript_svcb.SVCBResource> = $.varRef(__goscriptParam26)
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		{
			let err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).checkResourceSection() : Builder.prototype.checkResourceSection.call(b))
			if (err != null) {
				return err
			}
		}
		let __goscriptTuple52: any = h.value.pack((b$ as Builder).msg, (b$ as Builder).compression, (b$ as Builder).start)
		let msg: $.Slice<number> = __goscriptTuple52[0]
		let lenOff = __goscriptTuple52[1]
		let err = __goscriptTuple52[2]
		if (err != null) {
			return $.interfaceValue<$.GoError>(new nestedError({s: "ResourceHeader", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
		}
		let preLen = $.sliceLen(msg)
		{
			let __goscriptTuple53: any = r.value.pack(msg, (b$ as Builder).compression, (b$ as Builder).start)
			msg = __goscriptTuple53[0]
			err = __goscriptTuple53[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>(new nestedError({s: "ResourceBody", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))
			}
		}
		{
			let __goscriptShadow24 = h.value.fixLen(msg, lenOff, preLen)
			if (__goscriptShadow24 != null) {
				return __goscriptShadow24
			}
		}
		{
			let __goscriptShadow25 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Builder).incrementSectionCount() : Builder.prototype.incrementSectionCount.call(b))
			if (__goscriptShadow25 != null) {
				return __goscriptShadow25
			}
		}
		;(b$ as Builder).msg = msg
		return null
	}

	public incrementSectionCount(): $.GoError {
		const b: Builder | $.VarRef<Builder> | null = this;
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		let count: $.VarRef<number> | null = null! as $.VarRef<number> | null
		let err: $.GoError = null! as $.GoError
		switch ((b$ as Builder).section) {
			case 2:
			{
				count = $.fieldRef((b$ as Builder).header._fields, "questions")
				err = errTooManyQuestions
				break
			}
			case 3:
			{
				count = $.fieldRef((b$ as Builder).header._fields, "answers")
				err = errTooManyAnswers
				break
			}
			case 4:
			{
				count = $.fieldRef((b$ as Builder).header._fields, "authorities")
				err = errTooManyAuthorities
				break
			}
			case 5:
			{
				count = $.fieldRef((b$ as Builder).header._fields, "additionals")
				err = errTooManyAdditionals
				break
			}
		}
		if ($.pointerValue<number>(count) == 65535) {
			return err
		}
		count!.value++
		return null
	}

	public startCheck(s: section): $.GoError {
		const b: Builder | $.VarRef<Builder> | null = this;
		const b$: Builder = b == null ? $.pointerTarget<Builder>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Builder>(b)
		if ((b$ as Builder).section <= 0) {
			return ErrNotStarted
		}
		if ((b$ as Builder).section > s) {
			return ErrSectionDone
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.Builder",
		() => new Builder(),
		() => [$.methodSignature("AAAAResource", [["h", "dnsmessage.ResourceHeader"], ["r", "dnsmessage.AAAAResource"]], ["error"], true), $.methodSignature("AResource", [["h", "dnsmessage.ResourceHeader"], ["r", "dnsmessage.AResource"]], ["error"], true), $.methodSignature("CNAMEResource", [["h", "dnsmessage.ResourceHeader"], ["r", "dnsmessage.CNAMEResource"]], ["error"], true), $.methodSignature("EnableCompression", [], [], true), $.methodSignature("Finish", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("HTTPSResource", [["h", "dnsmessage.ResourceHeader"], ["r", "dnsmessage.HTTPSResource"]], ["error"], true), $.methodSignature("MXResource", [["h", "dnsmessage.ResourceHeader"], ["r", "dnsmessage.MXResource"]], ["error"], true), $.methodSignature("NSResource", [["h", "dnsmessage.ResourceHeader"], ["r", "dnsmessage.NSResource"]], ["error"], true), $.methodSignature("OPTResource", [["h", "dnsmessage.ResourceHeader"], ["r", "dnsmessage.OPTResource"]], ["error"], true), $.methodSignature("PTRResource", [["h", "dnsmessage.ResourceHeader"], ["r", "dnsmessage.PTRResource"]], ["error"], true), $.methodSignature("Question", [["q", "dnsmessage.Question"]], ["error"], true), $.methodSignature("SOAResource", [["h", "dnsmessage.ResourceHeader"], ["r", "dnsmessage.SOAResource"]], ["error"], true), $.methodSignature("SRVResource", [["h", "dnsmessage.ResourceHeader"], ["r", "dnsmessage.SRVResource"]], ["error"], true), $.methodSignature("SVCBResource", [["h", "dnsmessage.ResourceHeader"], ["r", "dnsmessage.SVCBResource"]], ["error"], true), $.methodSignature("StartAdditionals", [], ["error"], true), $.methodSignature("StartAnswers", [], ["error"], true), $.methodSignature("StartAuthorities", [], ["error"], true), $.methodSignature("StartQuestions", [], ["error"], true), $.methodSignature("TXTResource", [["h", "dnsmessage.ResourceHeader"], ["r", "dnsmessage.TXTResource"]], ["error"], true), $.methodSignature("UnknownResource", [["h", "dnsmessage.ResourceHeader"], ["r", "dnsmessage.UnknownResource"]], ["error"], true), $.methodSignature("checkResourceSection", [], ["error"], true), $.methodSignature("genericSVCBResource", [["h", "dnsmessage.ResourceHeader"], ["r", "dnsmessage.SVCBResource"]], ["error"], true), $.methodSignature("incrementSectionCount", [], ["error"], true), $.methodSignature("startCheck", [["s", /* @__PURE__ */ $.basicType("uint8", "dnsmessage.section")]], ["error"], true)],
		Builder,
		() => [/* @__PURE__ */ $.structField("msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("section", /* @__PURE__ */ $.basicType("uint8", "dnsmessage.section"), [1], 24, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("header", "dnsmessage.header", [2], 26, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("start", /* @__PURE__ */ $.basicType("int"), [3], 40, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" }), /* @__PURE__ */ $.structField("compression", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16")), [4], 48, false, { pkgPath: "vendor/golang.org/x/net/dns/dnsmessage" })]
	)
}

export class Question {
	public get Name(): Name {
		return this._fields.Name
	}

	public set Name(value: Name) {
		this._fields.Name = value
	}

	public get Type(): Type {
		return this._fields.Type
	}

	public set Type(value: Type) {
		this._fields.Type = value
	}

	public get Class(): Class {
		return this._fields.Class
	}

	public set Class(value: Class) {
		this._fields.Class = value
	}

	public _fields: {
		Name: Name
		Type: Type
		Class: Class
	}

	constructor(init?: Partial<{Name?: Name, Type?: Type, Class?: Class}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ? init.Name.clone() : new Name(undefined, true),
			Type: init?.Type ?? (0 as Type),
			Class: init?.Class ?? (0 as Class)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Question {
		return new Question(this, true)
	}

	public __goscriptAssign(source: Question): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Name, values.Name)
		target.Type = values.Type
		target.Class = values.Class
	}

	public GoString(): string {
		const q: Question | $.VarRef<Question> | null = this;
		const q$: Question = q == null ? $.pointerTarget<Question>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<Question>(q)
		return $.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString("dnsmessage.Question{", "Name: ")), (q$ as Question).Name.GoString())), ", ")), "Type: ")), Type_GoString((q$ as Question).Type))), ", ")), "Class: ")), Class_GoString((q$ as Question).Class))), "}")
	}

	public pack(msg: $.Slice<number>, compression: globalThis.Map<string, number> | null, compressionOff: number): [$.Slice<number>, $.GoError] {
		const q: Question | $.VarRef<Question> | null = this;
		const q$: Question = q == null ? $.pointerTarget<Question>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<Question>(q)
		let __goscriptTuple65: any = (q$ as Question).Name.pack(msg, compression, compressionOff)
		msg = __goscriptTuple65[0]
		let err = __goscriptTuple65[1]
		if (err != null) {
			return [msg, $.interfaceValue<$.GoError>(new nestedError({s: "Name", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		msg = packType(msg, (q$ as Question).Type)
		return [packClass(msg, (q$ as Question).Class), null]
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.Question",
		() => new Question(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["compression", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["compressionOff", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true)],
		Question,
		() => [/* @__PURE__ */ $.structField("Name", "dnsmessage.Name", [0], 0, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type"), [1], 256, true), /* @__PURE__ */ $.structField("Class", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.Class"), [2], 258, true)]
	)
}

export class CNAMEResource {
	public get CNAME(): Name {
		return this._fields.CNAME
	}

	public set CNAME(value: Name) {
		this._fields.CNAME = value
	}

	public _fields: {
		CNAME: Name
	}

	constructor(init?: Partial<{CNAME?: Name}>, __goscriptValue?: boolean) {
		this._fields = {
			CNAME: init?.CNAME ? init.CNAME.clone() : new Name(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CNAMEResource {
		return new CNAMEResource(this, true)
	}

	public __goscriptAssign(source: CNAMEResource): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.CNAME, values.CNAME)
	}

	public GoString(): string {
		const r: CNAMEResource | $.VarRef<CNAMEResource> | null = this;
		return $.concatString(($.concatString("dnsmessage.CNAMEResource{CNAME: ", $.pointerValue<CNAMEResource>(r).CNAME.GoString())), "}")
	}

	public pack(msg: $.Slice<number>, compression: globalThis.Map<string, number> | null, compressionOff: number): [$.Slice<number>, $.GoError] {
		const r: CNAMEResource | $.VarRef<CNAMEResource> | null = this;
		return $.pointerValue<CNAMEResource>(r).CNAME.pack(msg, compression, compressionOff)
	}

	public realType(): Type {
		const r: CNAMEResource | $.VarRef<CNAMEResource> | null = this;
		return 5
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.CNAMEResource",
		() => new CNAMEResource(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["compression", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["compressionOff", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("realType", [], [/* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], true)],
		CNAMEResource,
		() => [/* @__PURE__ */ $.structField("CNAME", "dnsmessage.Name", [0], 0, true)]
	)
}

export class MXResource {
	public get Pref(): number {
		return this._fields.Pref
	}

	public set Pref(value: number) {
		this._fields.Pref = value
	}

	public get MX(): Name {
		return this._fields.MX
	}

	public set MX(value: Name) {
		this._fields.MX = value
	}

	public _fields: {
		Pref: number
		MX: Name
	}

	constructor(init?: Partial<{Pref?: number, MX?: Name}>, __goscriptValue?: boolean) {
		this._fields = {
			Pref: init?.Pref ?? (0 as number),
			MX: init?.MX ? init.MX.clone() : new Name(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MXResource {
		return new MXResource(this, true)
	}

	public __goscriptAssign(source: MXResource): void {
		const target = this._fields
		const values = source._fields
		target.Pref = values.Pref
		$.assignStruct(target.MX, values.MX)
	}

	public GoString(): string {
		const r: MXResource | $.VarRef<MXResource> | null = this;
		const r$: MXResource = r == null ? $.pointerTarget<MXResource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<MXResource>(r)
		return $.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString("dnsmessage.MXResource{", "Pref: ")), printUint16((r$ as MXResource).Pref))), ", ")), "MX: ")), (r$ as MXResource).MX.GoString())), "}")
	}

	public pack(msg: $.Slice<number>, compression: globalThis.Map<string, number> | null, compressionOff: number): [$.Slice<number>, $.GoError] {
		const r: MXResource | $.VarRef<MXResource> | null = this;
		const r$: MXResource = r == null ? $.pointerTarget<MXResource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<MXResource>(r)
		let oldMsg: $.Slice<number> = msg
		msg = packUint16(msg, (r$ as MXResource).Pref)
		let __goscriptTuple79: any = (r$ as MXResource).MX.pack(msg, compression, compressionOff)
		msg = __goscriptTuple79[0]
		let err = __goscriptTuple79[1]
		if (err != null) {
			return [oldMsg, $.interfaceValue<$.GoError>(new nestedError({s: "MXResource.MX", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		return [msg, null]
	}

	public realType(): Type {
		const r: MXResource | $.VarRef<MXResource> | null = this;
		return 15
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.MXResource",
		() => new MXResource(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["compression", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["compressionOff", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("realType", [], [/* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], true)],
		MXResource,
		() => [/* @__PURE__ */ $.structField("Pref", /* @__PURE__ */ $.basicType("uint16"), [0], 0, true), /* @__PURE__ */ $.structField("MX", "dnsmessage.Name", [1], 2, true)]
	)
}

export class NSResource {
	public get NS(): Name {
		return this._fields.NS
	}

	public set NS(value: Name) {
		this._fields.NS = value
	}

	public _fields: {
		NS: Name
	}

	constructor(init?: Partial<{NS?: Name}>, __goscriptValue?: boolean) {
		this._fields = {
			NS: init?.NS ? init.NS.clone() : new Name(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NSResource {
		return new NSResource(this, true)
	}

	public __goscriptAssign(source: NSResource): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.NS, values.NS)
	}

	public GoString(): string {
		const r: NSResource | $.VarRef<NSResource> | null = this;
		return $.concatString(($.concatString("dnsmessage.NSResource{NS: ", $.pointerValue<NSResource>(r).NS.GoString())), "}")
	}

	public pack(msg: $.Slice<number>, compression: globalThis.Map<string, number> | null, compressionOff: number): [$.Slice<number>, $.GoError] {
		const r: NSResource | $.VarRef<NSResource> | null = this;
		return $.pointerValue<NSResource>(r).NS.pack(msg, compression, compressionOff)
	}

	public realType(): Type {
		const r: NSResource | $.VarRef<NSResource> | null = this;
		return 2
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.NSResource",
		() => new NSResource(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["compression", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["compressionOff", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("realType", [], [/* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], true)],
		NSResource,
		() => [/* @__PURE__ */ $.structField("NS", "dnsmessage.Name", [0], 0, true)]
	)
}

export class PTRResource {
	public get PTR(): Name {
		return this._fields.PTR
	}

	public set PTR(value: Name) {
		this._fields.PTR = value
	}

	public _fields: {
		PTR: Name
	}

	constructor(init?: Partial<{PTR?: Name}>, __goscriptValue?: boolean) {
		this._fields = {
			PTR: init?.PTR ? init.PTR.clone() : new Name(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PTRResource {
		return new PTRResource(this, true)
	}

	public __goscriptAssign(source: PTRResource): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.PTR, values.PTR)
	}

	public GoString(): string {
		const r: PTRResource | $.VarRef<PTRResource> | null = this;
		return $.concatString(($.concatString("dnsmessage.PTRResource{PTR: ", $.pointerValue<PTRResource>(r).PTR.GoString())), "}")
	}

	public pack(msg: $.Slice<number>, compression: globalThis.Map<string, number> | null, compressionOff: number): [$.Slice<number>, $.GoError] {
		const r: PTRResource | $.VarRef<PTRResource> | null = this;
		return $.pointerValue<PTRResource>(r).PTR.pack(msg, compression, compressionOff)
	}

	public realType(): Type {
		const r: PTRResource | $.VarRef<PTRResource> | null = this;
		return 12
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.PTRResource",
		() => new PTRResource(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["compression", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["compressionOff", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("realType", [], [/* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], true)],
		PTRResource,
		() => [/* @__PURE__ */ $.structField("PTR", "dnsmessage.Name", [0], 0, true)]
	)
}

export class SOAResource {
	public get NS(): Name {
		return this._fields.NS
	}

	public set NS(value: Name) {
		this._fields.NS = value
	}

	public get MBox(): Name {
		return this._fields.MBox
	}

	public set MBox(value: Name) {
		this._fields.MBox = value
	}

	public get Serial(): number {
		return this._fields.Serial
	}

	public set Serial(value: number) {
		this._fields.Serial = value
	}

	public get Refresh(): number {
		return this._fields.Refresh
	}

	public set Refresh(value: number) {
		this._fields.Refresh = value
	}

	public get Retry(): number {
		return this._fields.Retry
	}

	public set Retry(value: number) {
		this._fields.Retry = value
	}

	public get Expire(): number {
		return this._fields.Expire
	}

	public set Expire(value: number) {
		this._fields.Expire = value
	}

	// MinTTL the is the default TTL of Resources records which did not
	// contain a TTL value and the TTL of negative responses. (RFC 2308
	// Section 4)
	public get MinTTL(): number {
		return this._fields.MinTTL
	}

	public set MinTTL(value: number) {
		this._fields.MinTTL = value
	}

	public _fields: {
		NS: Name
		MBox: Name
		Serial: number
		Refresh: number
		Retry: number
		Expire: number
		MinTTL: number
	}

	constructor(init?: Partial<{NS?: Name, MBox?: Name, Serial?: number, Refresh?: number, Retry?: number, Expire?: number, MinTTL?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			NS: init?.NS ? init.NS.clone() : new Name(undefined, true),
			MBox: init?.MBox ? init.MBox.clone() : new Name(undefined, true),
			Serial: init?.Serial ?? (0 as number),
			Refresh: init?.Refresh ?? (0 as number),
			Retry: init?.Retry ?? (0 as number),
			Expire: init?.Expire ?? (0 as number),
			MinTTL: init?.MinTTL ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SOAResource {
		return new SOAResource(this, true)
	}

	public __goscriptAssign(source: SOAResource): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.NS, values.NS)
		$.assignStruct(target.MBox, values.MBox)
		target.Serial = values.Serial
		target.Refresh = values.Refresh
		target.Retry = values.Retry
		target.Expire = values.Expire
		target.MinTTL = values.MinTTL
	}

	public GoString(): string {
		const r: SOAResource | $.VarRef<SOAResource> | null = this;
		const r$: SOAResource = r == null ? $.pointerTarget<SOAResource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<SOAResource>(r)
		return $.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString("dnsmessage.SOAResource{", "NS: ")), (r$ as SOAResource).NS.GoString())), ", ")), "MBox: ")), (r$ as SOAResource).MBox.GoString())), ", ")), "Serial: ")), printUint32((r$ as SOAResource).Serial))), ", ")), "Refresh: ")), printUint32((r$ as SOAResource).Refresh))), ", ")), "Retry: ")), printUint32((r$ as SOAResource).Retry))), ", ")), "Expire: ")), printUint32((r$ as SOAResource).Expire))), ", ")), "MinTTL: ")), printUint32((r$ as SOAResource).MinTTL))), "}")
	}

	public pack(msg: $.Slice<number>, compression: globalThis.Map<string, number> | null, compressionOff: number): [$.Slice<number>, $.GoError] {
		const r: SOAResource | $.VarRef<SOAResource> | null = this;
		const r$: SOAResource = r == null ? $.pointerTarget<SOAResource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<SOAResource>(r)
		let oldMsg: $.Slice<number> = msg
		let __goscriptTuple81: any = (r$ as SOAResource).NS.pack(msg, compression, compressionOff)
		msg = __goscriptTuple81[0]
		let err = __goscriptTuple81[1]
		if (err != null) {
			return [oldMsg, $.interfaceValue<$.GoError>(new nestedError({s: "SOAResource.NS", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		let __goscriptTuple82: any = (r$ as SOAResource).MBox.pack(msg, compression, compressionOff)
		msg = __goscriptTuple82[0]
		err = __goscriptTuple82[1]
		if (err != null) {
			return [oldMsg, $.interfaceValue<$.GoError>(new nestedError({s: "SOAResource.MBox", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		msg = packUint32(msg, (r$ as SOAResource).Serial)
		msg = packUint32(msg, (r$ as SOAResource).Refresh)
		msg = packUint32(msg, (r$ as SOAResource).Retry)
		msg = packUint32(msg, (r$ as SOAResource).Expire)
		return [packUint32(msg, (r$ as SOAResource).MinTTL), null]
	}

	public realType(): Type {
		const r: SOAResource | $.VarRef<SOAResource> | null = this;
		return 6
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.SOAResource",
		() => new SOAResource(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["compression", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["compressionOff", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("realType", [], [/* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], true)],
		SOAResource,
		() => [/* @__PURE__ */ $.structField("NS", "dnsmessage.Name", [0], 0, true), /* @__PURE__ */ $.structField("MBox", "dnsmessage.Name", [1], 256, true), /* @__PURE__ */ $.structField("Serial", /* @__PURE__ */ $.basicType("uint32"), [2], 512, true), /* @__PURE__ */ $.structField("Refresh", /* @__PURE__ */ $.basicType("uint32"), [3], 516, true), /* @__PURE__ */ $.structField("Retry", /* @__PURE__ */ $.basicType("uint32"), [4], 520, true), /* @__PURE__ */ $.structField("Expire", /* @__PURE__ */ $.basicType("uint32"), [5], 524, true), /* @__PURE__ */ $.structField("MinTTL", /* @__PURE__ */ $.basicType("uint32"), [6], 528, true)]
	)
}

export class TXTResource {
	public get TXT(): $.Slice<string> {
		return this._fields.TXT
	}

	public set TXT(value: $.Slice<string>) {
		this._fields.TXT = value
	}

	public _fields: {
		TXT: $.Slice<string>
	}

	constructor(init?: Partial<{TXT?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			TXT: init?.TXT ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TXTResource {
		return new TXTResource(this, true)
	}

	public __goscriptAssign(source: TXTResource): void {
		const target = this._fields
		const values = source._fields
		target.TXT = values.TXT
	}

	public GoString(): string {
		const r: TXTResource | $.VarRef<TXTResource> | null = this;
		const r$: TXTResource = r == null ? $.pointerTarget<TXTResource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<TXTResource>(r)
		let s = "dnsmessage.TXTResource{TXT: []string{"
		if ($.sliceLen((r$ as TXTResource).TXT) == 0) {
			return $.concatString(s, "}}")
		}
		s = $.concatString(s, $.concatString("\"", printString($.stringToBytes($.arrayIndex((r$ as TXTResource).TXT!, 0)))))
		for (let __goscriptRangeTarget10 = $.goSlice((r$ as TXTResource).TXT, 1, undefined), __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
			let t = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as string)
			s = $.concatString(s, $.concatString("\", \"", printString($.stringToBytes(t))))
		}
		return $.concatString(s, "\"}}")
	}

	public pack(msg: $.Slice<number>, compression: globalThis.Map<string, number> | null, compressionOff: number): [$.Slice<number>, $.GoError] {
		const r: TXTResource | $.VarRef<TXTResource> | null = this;
		let oldMsg: $.Slice<number> = msg
		for (let __goscriptRangeTarget11 = $.pointerValue<TXTResource>(r).TXT, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
			let s = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as string)
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple90: any = packText(msg, s)
			msg = __goscriptTuple90[0]
			err = __goscriptTuple90[1]
			if (err != null) {
				return [oldMsg, err]
			}
		}
		return [msg, null]
	}

	public realType(): Type {
		const r: TXTResource | $.VarRef<TXTResource> | null = this;
		return 16
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.TXTResource",
		() => new TXTResource(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["compression", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["compressionOff", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("realType", [], [/* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], true)],
		TXTResource,
		() => [/* @__PURE__ */ $.structField("TXT", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, true)]
	)
}

export class SRVResource {
	public get Priority(): number {
		return this._fields.Priority
	}

	public set Priority(value: number) {
		this._fields.Priority = value
	}

	public get Weight(): number {
		return this._fields.Weight
	}

	public set Weight(value: number) {
		this._fields.Weight = value
	}

	public get Port(): number {
		return this._fields.Port
	}

	public set Port(value: number) {
		this._fields.Port = value
	}

	public get Target(): Name {
		return this._fields.Target
	}

	public set Target(value: Name) {
		this._fields.Target = value
	}

	public _fields: {
		Priority: number
		Weight: number
		Port: number
		Target: Name
	}

	constructor(init?: Partial<{Priority?: number, Weight?: number, Port?: number, Target?: Name}>, __goscriptValue?: boolean) {
		this._fields = {
			Priority: init?.Priority ?? (0 as number),
			Weight: init?.Weight ?? (0 as number),
			Port: init?.Port ?? (0 as number),
			Target: init?.Target ? init.Target.clone() : new Name(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SRVResource {
		return new SRVResource(this, true)
	}

	public __goscriptAssign(source: SRVResource): void {
		const target = this._fields
		const values = source._fields
		target.Priority = values.Priority
		target.Weight = values.Weight
		target.Port = values.Port
		$.assignStruct(target.Target, values.Target)
	}

	public GoString(): string {
		const r: SRVResource | $.VarRef<SRVResource> | null = this;
		const r$: SRVResource = r == null ? $.pointerTarget<SRVResource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<SRVResource>(r)
		return $.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString("dnsmessage.SRVResource{", "Priority: ")), printUint16((r$ as SRVResource).Priority))), ", ")), "Weight: ")), printUint16((r$ as SRVResource).Weight))), ", ")), "Port: ")), printUint16((r$ as SRVResource).Port))), ", ")), "Target: ")), (r$ as SRVResource).Target.GoString())), "}")
	}

	public pack(msg: $.Slice<number>, compression: globalThis.Map<string, number> | null, compressionOff: number): [$.Slice<number>, $.GoError] {
		const r: SRVResource | $.VarRef<SRVResource> | null = this;
		const r$: SRVResource = r == null ? $.pointerTarget<SRVResource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<SRVResource>(r)
		let oldMsg: $.Slice<number> = msg
		msg = packUint16(msg, (r$ as SRVResource).Priority)
		msg = packUint16(msg, (r$ as SRVResource).Weight)
		msg = packUint16(msg, (r$ as SRVResource).Port)
		let __goscriptTuple92: any = (r$ as SRVResource).Target.pack(msg, null, compressionOff)
		msg = __goscriptTuple92[0]
		let err = __goscriptTuple92[1]
		if (err != null) {
			return [oldMsg, $.interfaceValue<$.GoError>(new nestedError({s: "SRVResource.Target", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		return [msg, null]
	}

	public realType(): Type {
		const r: SRVResource | $.VarRef<SRVResource> | null = this;
		return 33
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.SRVResource",
		() => new SRVResource(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["compression", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["compressionOff", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("realType", [], [/* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], true)],
		SRVResource,
		() => [/* @__PURE__ */ $.structField("Priority", /* @__PURE__ */ $.basicType("uint16"), [0], 0, true), /* @__PURE__ */ $.structField("Weight", /* @__PURE__ */ $.basicType("uint16"), [1], 2, true), /* @__PURE__ */ $.structField("Port", /* @__PURE__ */ $.basicType("uint16"), [2], 4, true), /* @__PURE__ */ $.structField("Target", "dnsmessage.Name", [3], 6, true)]
	)
}

export class AResource {
	public get A(): Uint8Array {
		return this._fields.A
	}

	public set A(value: Uint8Array) {
		this._fields.A = value
	}

	public _fields: {
		A: Uint8Array
	}

	constructor(init?: Partial<{A?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			A: init?.A !== undefined ? $.cloneArrayValue(init.A, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 4)) : $.arrayValue(new Uint8Array(4))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): AResource {
		return new AResource(this, true)
	}

	public __goscriptAssign(source: AResource): void {
		const target = this._fields
		const values = source._fields
		target.A = $.assignFieldValue(target.A, values.A, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 4))
	}

	public GoString(): string {
		const r: AResource | $.VarRef<AResource> | null = this;
		return $.concatString(($.concatString(($.concatString("dnsmessage.AResource{", "A: [4]byte{")), printByteSlice($.goSlice($.pointerValue<AResource>(r).A, undefined, undefined)))), "}}")
	}

	public pack(msg: $.Slice<number>, compression: globalThis.Map<string, number> | null, compressionOff: number): [$.Slice<number>, $.GoError] {
		const r: AResource | $.VarRef<AResource> | null = this;
		return [packBytes(msg, $.goSlice($.pointerValue<AResource>(r).A, undefined, undefined)), null]
	}

	public realType(): Type {
		const r: AResource | $.VarRef<AResource> | null = this;
		return 1
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.AResource",
		() => new AResource(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["compression", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["compressionOff", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("realType", [], [/* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], true)],
		AResource,
		() => [/* @__PURE__ */ $.structField("A", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 4), [0], 0, true)]
	)
}

export class AAAAResource {
	public get AAAA(): Uint8Array {
		return this._fields.AAAA
	}

	public set AAAA(value: Uint8Array) {
		this._fields.AAAA = value
	}

	public _fields: {
		AAAA: Uint8Array
	}

	constructor(init?: Partial<{AAAA?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			AAAA: init?.AAAA !== undefined ? $.cloneArrayValue(init.AAAA, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16)) : $.arrayValue(new Uint8Array(16))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): AAAAResource {
		return new AAAAResource(this, true)
	}

	public __goscriptAssign(source: AAAAResource): void {
		const target = this._fields
		const values = source._fields
		target.AAAA = $.assignFieldValue(target.AAAA, values.AAAA, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))
	}

	public GoString(): string {
		const r: AAAAResource | $.VarRef<AAAAResource> | null = this;
		return $.concatString(($.concatString(($.concatString("dnsmessage.AAAAResource{", "AAAA: [16]byte{")), printByteSlice($.goSlice($.pointerValue<AAAAResource>(r).AAAA, undefined, undefined)))), "}}")
	}

	public pack(msg: $.Slice<number>, compression: globalThis.Map<string, number> | null, compressionOff: number): [$.Slice<number>, $.GoError] {
		const r: AAAAResource | $.VarRef<AAAAResource> | null = this;
		return [packBytes(msg, $.goSlice($.pointerValue<AAAAResource>(r).AAAA, undefined, undefined)), null]
	}

	public realType(): Type {
		const r: AAAAResource | $.VarRef<AAAAResource> | null = this;
		return 28
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.AAAAResource",
		() => new AAAAResource(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["compression", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["compressionOff", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("realType", [], [/* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], true)],
		AAAAResource,
		() => [/* @__PURE__ */ $.structField("AAAA", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16), [0], 0, true)]
	)
}

export class OPTResource {
	public get Options(): $.Slice<Option> {
		return this._fields.Options
	}

	public set Options(value: $.Slice<Option>) {
		this._fields.Options = value
	}

	public _fields: {
		Options: $.Slice<Option>
	}

	constructor(init?: Partial<{Options?: $.Slice<Option>}>, __goscriptValue?: boolean) {
		this._fields = {
			Options: init?.Options ?? (null! as $.Slice<Option>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OPTResource {
		return new OPTResource(this, true)
	}

	public __goscriptAssign(source: OPTResource): void {
		const target = this._fields
		const values = source._fields
		target.Options = values.Options
	}

	public GoString(): string {
		const r: OPTResource | $.VarRef<OPTResource> | null = this;
		const r$: OPTResource = r == null ? $.pointerTarget<OPTResource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<OPTResource>(r)
		let s = "dnsmessage.OPTResource{Options: []dnsmessage.Option{"
		if ($.sliceLen((r$ as OPTResource).Options) == 0) {
			return $.concatString(s, "}}")
		}
		s = $.concatString(s, $.arrayIndex((r$ as OPTResource).Options!, 0).GoString())
		for (let __goscriptRangeTarget12 = $.goSlice((r$ as OPTResource).Options, 1, undefined), __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
			let o = $.varRef(((__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as Option)).clone())
			s = $.concatString(s, $.concatString(", ", o.value.GoString()))
		}
		return $.concatString(s, "}}")
	}

	public pack(msg: $.Slice<number>, compression: globalThis.Map<string, number> | null, compressionOff: number): [$.Slice<number>, $.GoError] {
		const r: OPTResource | $.VarRef<OPTResource> | null = this;
		for (let __goscriptRangeTarget13 = $.pointerValue<OPTResource>(r).Options, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
			let opt = ((__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as Option)).clone()
			msg = packUint16(msg, opt.Code)
			let l = $.uint($.sliceLen(opt.Data), 16)
			msg = packUint16(msg, l)
			msg = packBytes(msg, opt.Data)
		}
		return [msg, null]
	}

	public realType(): Type {
		const r: OPTResource | $.VarRef<OPTResource> | null = this;
		return 41
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.OPTResource",
		() => new OPTResource(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["compression", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["compressionOff", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("realType", [], [/* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], true)],
		OPTResource,
		() => [/* @__PURE__ */ $.structField("Options", /* @__PURE__ */ $.sliceType("dnsmessage.Option"), [0], 0, true)]
	)
}

export class Option {
	public get Code(): number {
		return this._fields.Code
	}

	public set Code(value: number) {
		this._fields.Code = value
	}

	public get Data(): $.Slice<number> {
		return this._fields.Data
	}

	public set Data(value: $.Slice<number>) {
		this._fields.Data = value
	}

	public _fields: {
		Code: number
		Data: $.Slice<number>
	}

	constructor(init?: Partial<{Code?: number, Data?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Code: init?.Code ?? (0 as number),
			Data: init?.Data ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Option {
		return new Option(this, true)
	}

	public __goscriptAssign(source: Option): void {
		const target = this._fields
		const values = source._fields
		target.Code = values.Code
		target.Data = values.Data
	}

	public GoString(): string {
		const o: Option | $.VarRef<Option> | null = this;
		const o$: Option = o == null ? $.pointerTarget<Option>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Option>(o)
		return $.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString("dnsmessage.Option{", "Code: ")), printUint16((o$ as Option).Code))), ", ")), "Data: []byte{")), printByteSlice((o$ as Option).Data))), "}}")
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.Option",
		() => new Option(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Option,
		() => [/* @__PURE__ */ $.structField("Code", /* @__PURE__ */ $.basicType("uint16"), [0], 0, true), /* @__PURE__ */ $.structField("Data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, true)]
	)
}

export class UnknownResource {
	public get Type(): Type {
		return this._fields.Type
	}

	public set Type(value: Type) {
		this._fields.Type = value
	}

	public get Data(): $.Slice<number> {
		return this._fields.Data
	}

	public set Data(value: $.Slice<number>) {
		this._fields.Data = value
	}

	public _fields: {
		Type: Type
		Data: $.Slice<number>
	}

	constructor(init?: Partial<{Type?: Type, Data?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? (0 as Type),
			Data: init?.Data ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UnknownResource {
		return new UnknownResource(this, true)
	}

	public __goscriptAssign(source: UnknownResource): void {
		const target = this._fields
		const values = source._fields
		target.Type = values.Type
		target.Data = values.Data
	}

	public GoString(): string {
		const r: UnknownResource | $.VarRef<UnknownResource> | null = this;
		const r$: UnknownResource = r == null ? $.pointerTarget<UnknownResource>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<UnknownResource>(r)
		return $.concatString(($.concatString(($.concatString(($.concatString(($.concatString(($.concatString("dnsmessage.UnknownResource{", "Type: ")), Type_GoString((r$ as UnknownResource).Type))), ", ")), "Data: []byte{")), printByteSlice((r$ as UnknownResource).Data))), "}}")
	}

	public pack(msg: $.Slice<number>, compression: globalThis.Map<string, number> | null, compressionOff: number): [$.Slice<number>, $.GoError] {
		const r: UnknownResource | $.VarRef<UnknownResource> | null = this;
		return [packBytes(msg, $.goSlice($.pointerValue<UnknownResource>(r).Data, undefined, undefined)), null]
	}

	public realType(): Type {
		const r: UnknownResource | $.VarRef<UnknownResource> | null = this;
		return $.pointerValue<UnknownResource>(r).Type
	}

	static __typeInfo = $.registerStructType(
		"dnsmessage.UnknownResource",
		() => new UnknownResource(),
		() => [$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("pack", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["compression", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint16"))], ["compressionOff", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("realType", [], [/* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type")], true)],
		UnknownResource,
		() => [/* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("uint16", "dnsmessage.Type"), [0], 0, true), /* @__PURE__ */ $.structField("Data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, true)]
	)
}

export const TypeA: Type = 1

export const TypeNS: Type = 2

export const TypeCNAME: Type = 5

export const TypeSOA: Type = 6

export const TypePTR: Type = 12

export const TypeMX: Type = 15

export const TypeTXT: Type = 16

export const TypeAAAA: Type = 28

export const TypeSRV: Type = 33

export const TypeOPT: Type = 41

export const TypeSVCB: Type = 64

export const TypeHTTPS: Type = 65

export const TypeWKS: Type = 11

export const TypeHINFO: Type = 13

export const TypeMINFO: Type = 14

export const TypeAXFR: Type = 252

export const TypeALL: Type = 255

export const ClassINET: Class = 1

export const ClassCSNET: Class = 2

export const ClassCHAOS: Class = 3

export const ClassHESIOD: Class = 4

export const ClassANY: Class = 255

export const RCodeSuccess: RCode = 0

export const RCodeFormatError: RCode = 1

export const RCodeServerFailure: RCode = 2

export const RCodeNameError: RCode = 3

export const RCodeNotImplemented: RCode = 4

export const RCodeRefused: RCode = 5

export const hexDigits: string = "0123456789abcdef"

export const packStartingCap: number = 512

export const uint16Len: number = 2

export const uint32Len: number = 4

export const headerLen: number = 12

export const sectionNotStarted: section = 0

export const sectionHeader: section = 1

export const sectionQuestions: section = 2

export const sectionAnswers: section = 3

export const sectionAuthorities: section = 4

export const sectionAdditionals: section = 5

export const sectionDone: section = 6

export const headerBitQR: number = 32768

export const headerBitAA: number = 1024

export const headerBitTC: number = 512

export const headerBitRD: number = 256

export const headerBitRA: number = 128

export const headerBitAD: number = 32

export const headerBitCD: number = 16

export const edns0Version: number = 0

export const edns0DNSSECOK: number = 32768

export const ednsVersionMask: number = 16711680

export const edns0DNSSECOKMask: number = 16744448

export const nonEncodedNameMax: number = 254

export let typeNames: globalThis.Map<Type, string> | null = $.makeMap<Type, string>([[1, "TypeA"], [2, "TypeNS"], [5, "TypeCNAME"], [6, "TypeSOA"], [12, "TypePTR"], [15, "TypeMX"], [16, "TypeTXT"], [28, "TypeAAAA"], [33, "TypeSRV"], [41, "TypeOPT"], [64, "TypeSVCB"], [65, "TypeHTTPS"], [11, "TypeWKS"], [13, "TypeHINFO"], [14, "TypeMINFO"], [252, "TypeAXFR"], [255, "TypeALL"]])

export function __goscript_set_typeNames(__goscriptValue: globalThis.Map<Type, string> | null): void {
	typeNames = __goscriptValue
}

export function Type_String(t: Type): string {
	{
		let [n, ok] = $.mapGet<Type, string, string>(typeNames, t, "")
		if (ok) {
			return n
		}
	}
	return printUint16($.uint(t, 16))
}

export function Type_GoString(t: Type): string {
	{
		let [n, ok] = $.mapGet<Type, string, string>(typeNames, t, "")
		if (ok) {
			return $.concatString("dnsmessage.", n)
		}
	}
	return printUint16($.uint(t, 16))
}

export let classNames: globalThis.Map<Class, string> | null = $.makeMap<Class, string>([[1, "ClassINET"], [2, "ClassCSNET"], [3, "ClassCHAOS"], [4, "ClassHESIOD"], [255, "ClassANY"]])

export function __goscript_set_classNames(__goscriptValue: globalThis.Map<Class, string> | null): void {
	classNames = __goscriptValue
}

export function Class_String(c: Class): string {
	{
		let [n, ok] = $.mapGet<Class, string, string>(classNames, c, "")
		if (ok) {
			return n
		}
	}
	return printUint16($.uint(c, 16))
}

export function Class_GoString(c: Class): string {
	{
		let [n, ok] = $.mapGet<Class, string, string>(classNames, c, "")
		if (ok) {
			return $.concatString("dnsmessage.", n)
		}
	}
	return printUint16($.uint(c, 16))
}

export function OpCode_GoString(o: OpCode): string {
	return printUint16($.uint(o, 16))
}

export let rCodeNames: globalThis.Map<RCode, string> | null = $.makeMap<RCode, string>([[0, "RCodeSuccess"], [1, "RCodeFormatError"], [2, "RCodeServerFailure"], [3, "RCodeNameError"], [4, "RCodeNotImplemented"], [5, "RCodeRefused"]])

export function __goscript_set_rCodeNames(__goscriptValue: globalThis.Map<RCode, string> | null): void {
	rCodeNames = __goscriptValue
}

export function RCode_String(r: RCode): string {
	{
		let [n, ok] = $.mapGet<RCode, string, string>(rCodeNames, r, "")
		if (ok) {
			return n
		}
	}
	return printUint16($.uint(r, 16))
}

export function RCode_GoString(r: RCode): string {
	{
		let [n, ok] = $.mapGet<RCode, string, string>(rCodeNames, r, "")
		if (ok) {
			return $.concatString("dnsmessage.", n)
		}
	}
	return printUint16($.uint(r, 16))
}

export function printPaddedUint8(i: number): string {
	let b = $.uint(i, 8)
	return $.bytesToString(new Uint8Array([(((globalThis.Math.trunc(b / 100)) + 48) & 0xff), ((((globalThis.Math.trunc(b / 10)) % 10) + 48) & 0xff), (((b % 10) + 48) & 0xff)]) as $.Slice<number>)
}

export function printUint8Bytes(buf: $.Slice<number>, i: number): $.Slice<number> {
	let b = $.uint(i, 8)
	if (i >= 100) {
		buf = $.append(buf, $.uint((((globalThis.Math.trunc(b / 100)) + 48) & 0xff), 8), $.byteSliceHint)
	}
	if (i >= 10) {
		buf = $.append(buf, $.uint(((((globalThis.Math.trunc(b / 10)) % 10) + 48) & 0xff), 8), $.byteSliceHint)
	}
	return $.append(buf, $.uint((((b % 10) + 48) & 0xff), 8), $.byteSliceHint)
}

export function printByteSlice(b: $.Slice<number>): string {
	if ($.sliceLen(b) == 0) {
		return ""
	}
	let buf: $.Slice<number> = $.makeSlice<number>(0, 5 * $.sliceLen(b), "byte")
	buf = printUint8Bytes(buf, $.uint($.arrayIndex(b!, 0), 8))
	for (let __goscriptRangeTarget0 = $.goSlice(b, 1, undefined), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let n = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
		buf = $.append(buf, $.uint(44, 8), $.uint(32, 8), $.byteSliceHint)
		buf = printUint8Bytes(buf, $.uint(n, 8))
	}
	return $.bytesToString(buf)
}

export function printString(str: $.Slice<number>): string {
	let buf: $.Slice<number> = $.makeSlice<number>(0, $.sliceLen(str), "byte")
	for (let __goscriptSliceWindow0 = $.sliceRange(str), i = 0; i < __goscriptSliceWindow0.length; i++) {
		let c = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number)
		if ((((((c == 46) || (c == 45)) || (c == 32)) || ((65 <= c) && (c <= 90))) || ((97 <= c) && (c <= 122))) || ((48 <= c) && (c <= 57))) {
			buf = $.append(buf, $.uint(c, 8), $.byteSliceHint)
			continue
		}

		let upper = $.uint($.uintShr(c, 4, 8), 8)
		let lower = $.uint($.uintShr((((c << 4) & 0xff)), 4, 8), 8)
		buf = $.append(buf, $.uint(92, 8), $.uint(120, 8), $.uint($.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", upper), 8), $.uint($.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", lower), 8), $.byteSliceHint)
	}
	return $.bytesToString(buf)
}

export function printUint16(i: number): string {
	return printUint32($.uint(i, 32))
}

export function printUint32(i: number): string {
	// Max value is 4294967295.
	let buf: $.Slice<number> = $.makeSlice<number>(10, undefined, "byte")
	for (let b = buf, d = $.uint(1000000000, 32); d > 0; d = (d / 10) >>> 0) {
		$.sliceElems(b!)[$.sliceSlot(b!, 0)] = $.uint($.uint(((((globalThis.Math.trunc(i / d)) % 10) + 48) >>> 0), 32), 8)
		if ((($.arrayIndex(b!, 0) == 48) && ($.sliceLen(b) == $.sliceLen(buf))) && ($.sliceLen(buf) > 1)) {
			buf = $.goSlice(buf, 1, undefined)
		}
		b = $.goSlice(b, 1, undefined)
		i = i % (d)
	}
	return $.bytesToString(buf)
}

export function printBool(b: boolean): string {
	if (b) {
		return "true"
	}
	return "false"
}

export let ErrNotStarted: $.GoError = errors.New("parsing/packing of this type isn't available yet")

export function __goscript_set_ErrNotStarted(__goscriptValue: $.GoError): void {
	ErrNotStarted = __goscriptValue
}

export let ErrSectionDone: $.GoError = errors.New("parsing/packing of this section has completed")

export function __goscript_set_ErrSectionDone(__goscriptValue: $.GoError): void {
	ErrSectionDone = __goscriptValue
}

export let errBaseLen: $.GoError = errors.New("insufficient data for base length type")

export function __goscript_set_errBaseLen(__goscriptValue: $.GoError): void {
	errBaseLen = __goscriptValue
}

export let errCalcLen: $.GoError = errors.New("insufficient data for calculated length type")

export function __goscript_set_errCalcLen(__goscriptValue: $.GoError): void {
	errCalcLen = __goscriptValue
}

export let errReserved: $.GoError = errors.New("segment prefix is reserved")

export function __goscript_set_errReserved(__goscriptValue: $.GoError): void {
	errReserved = __goscriptValue
}

export let errTooManyPtr: $.GoError = errors.New("too many pointers (>10)")

export function __goscript_set_errTooManyPtr(__goscriptValue: $.GoError): void {
	errTooManyPtr = __goscriptValue
}

export let errInvalidPtr: $.GoError = errors.New("invalid pointer")

export function __goscript_set_errInvalidPtr(__goscriptValue: $.GoError): void {
	errInvalidPtr = __goscriptValue
}

export let errInvalidName: $.GoError = errors.New("invalid dns name")

export function __goscript_set_errInvalidName(__goscriptValue: $.GoError): void {
	errInvalidName = __goscriptValue
}

export let errNilResouceBody: $.GoError = errors.New("nil resource body")

export function __goscript_set_errNilResouceBody(__goscriptValue: $.GoError): void {
	errNilResouceBody = __goscriptValue
}

export let errResourceLen: $.GoError = errors.New("insufficient data for resource body length")

export function __goscript_set_errResourceLen(__goscriptValue: $.GoError): void {
	errResourceLen = __goscriptValue
}

export let errSegTooLong: $.GoError = errors.New("segment length too long")

export function __goscript_set_errSegTooLong(__goscriptValue: $.GoError): void {
	errSegTooLong = __goscriptValue
}

export let errNameTooLong: $.GoError = errors.New("name too long")

export function __goscript_set_errNameTooLong(__goscriptValue: $.GoError): void {
	errNameTooLong = __goscriptValue
}

export let errZeroSegLen: $.GoError = errors.New("zero length segment")

export function __goscript_set_errZeroSegLen(__goscriptValue: $.GoError): void {
	errZeroSegLen = __goscriptValue
}

export let errResTooLong: $.GoError = errors.New("resource length too long")

export function __goscript_set_errResTooLong(__goscriptValue: $.GoError): void {
	errResTooLong = __goscriptValue
}

export let errTooManyQuestions: $.GoError = errors.New("too many Questions to pack (>65535)")

export function __goscript_set_errTooManyQuestions(__goscriptValue: $.GoError): void {
	errTooManyQuestions = __goscriptValue
}

export let errTooManyAnswers: $.GoError = errors.New("too many Answers to pack (>65535)")

export function __goscript_set_errTooManyAnswers(__goscriptValue: $.GoError): void {
	errTooManyAnswers = __goscriptValue
}

export let errTooManyAuthorities: $.GoError = errors.New("too many Authorities to pack (>65535)")

export function __goscript_set_errTooManyAuthorities(__goscriptValue: $.GoError): void {
	errTooManyAuthorities = __goscriptValue
}

export let errTooManyAdditionals: $.GoError = errors.New("too many Additionals to pack (>65535)")

export function __goscript_set_errTooManyAdditionals(__goscriptValue: $.GoError): void {
	errTooManyAdditionals = __goscriptValue
}

export let errNonCanonicalName: $.GoError = errors.New("name is not in canonical format (it must end with a .)")

export function __goscript_set_errNonCanonicalName(__goscriptValue: $.GoError): void {
	errNonCanonicalName = __goscriptValue
}

export let errStringTooLong: $.GoError = errors.New("character string exceeds maximum length (255)")

export function __goscript_set_errStringTooLong(__goscriptValue: $.GoError): void {
	errStringTooLong = __goscriptValue
}

export let errParamOutOfOrder: $.GoError = errors.New("parameter out of order")

export function __goscript_set_errParamOutOfOrder(__goscriptValue: $.GoError): void {
	errParamOutOfOrder = __goscriptValue
}

export let errTooLongSVCBValue: $.GoError = errors.New("value too long (>65535 bytes)")

export function __goscript_set_errTooLongSVCBValue(__goscriptValue: $.GoError): void {
	errTooLongSVCBValue = __goscriptValue
}

export let sectionNames: globalThis.Map<section, string> | null = $.makeMap<section, string>([[1, "header"], [2, "Question"], [3, "Answer"], [4, "Authority"], [5, "Additional"]])

export function __goscript_set_sectionNames(__goscriptValue: globalThis.Map<section, string> | null): void {
	sectionNames = __goscriptValue
}

export function NewBuilder(buf: $.Slice<number>, __goscriptParam27: Header): Builder {
	let h: $.VarRef<Header> = $.varRef(__goscriptParam27)
	if (buf == null) {
		buf = $.makeSlice<number>(0, 512, "byte")
	}
	let b = new Builder({msg: buf, start: $.sliceLen(buf)}, true)
	let __goscriptTuple54: any = h.value.pack()
	b.header.id = __goscriptTuple54[0]
	b.header.bits = __goscriptTuple54[1]
	let hb: Uint8Array = $.arrayValue(new Uint8Array(12))
	b.msg = $.appendSlice(b.msg, $.goSlice(hb, undefined, undefined), $.byteSliceHint)
	b.section = 1
	return (b).clone()
}

export function skipResource(msg: $.Slice<number>, off: number): [number, $.GoError] {
	let [newOff, err] = skipName(msg, off)
	if (err != null) {
		return [off, $.interfaceValue<$.GoError>(new nestedError({s: "Name", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
	}
	{
		let __goscriptTuple61: any = skipType(msg, newOff)
		newOff = __goscriptTuple61[0]
		err = __goscriptTuple61[1]
		if (err != null) {
			return [off, $.interfaceValue<$.GoError>(new nestedError({s: "Type", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
	}
	{
		let __goscriptTuple62: any = skipClass(msg, newOff)
		newOff = __goscriptTuple62[0]
		err = __goscriptTuple62[1]
		if (err != null) {
			return [off, $.interfaceValue<$.GoError>(new nestedError({s: "Class", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
	}
	{
		let __goscriptTuple63: any = skipUint32(msg, newOff)
		newOff = __goscriptTuple63[0]
		err = __goscriptTuple63[1]
		if (err != null) {
			return [off, $.interfaceValue<$.GoError>(new nestedError({s: "TTL", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
	}
	let __goscriptTuple64: any = unpackUint16(msg, newOff)
	let length = __goscriptTuple64[0]
	newOff = __goscriptTuple64[1]
	err = __goscriptTuple64[2]
	if (err != null) {
		return [off, $.interfaceValue<$.GoError>(new nestedError({s: "Length", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
	}
	{
		newOff = newOff + ($.int(length))
		if (newOff > $.sliceLen(msg)) {
			return [off, errResourceLen]
		}
	}
	return [newOff, null]
}

export function packUint16(msg: $.Slice<number>, field: number): $.Slice<number> {
	return $.append(msg, $.uint($.uint($.uintShr(field, 8, 16), 8), 8), $.uint($.uint(field, 8), 8), $.byteSliceHint)
}

export function unpackUint16(msg: $.Slice<number>, off: number): [number, number, $.GoError] {
	if ((off + 2) > $.sliceLen(msg)) {
		return [0, off, errBaseLen]
	}
	return [$.uint(((($.uint($.arrayIndex(msg!, off), 16) << 8) & 0xffff)) | $.uint($.arrayIndex(msg!, off + 1), 16), 16), off + 2, null]
}

export function skipUint16(msg: $.Slice<number>, off: number): [number, $.GoError] {
	if ((off + 2) > $.sliceLen(msg)) {
		return [off, errBaseLen]
	}
	return [off + 2, null]
}

export function packType(msg: $.Slice<number>, field: Type): $.Slice<number> {
	return packUint16(msg, $.uint(field, 16))
}

export function unpackType(msg: $.Slice<number>, off: number): [Type, number, $.GoError] {
	let [t, o, err] = unpackUint16(msg, off)
	return [$.uint(t, 16), o, err]
}

export function skipType(msg: $.Slice<number>, off: number): [number, $.GoError] {
	return skipUint16(msg, off)
}

export function packClass(msg: $.Slice<number>, field: Class): $.Slice<number> {
	return packUint16(msg, $.uint(field, 16))
}

export function unpackClass(msg: $.Slice<number>, off: number): [Class, number, $.GoError] {
	let [c, o, err] = unpackUint16(msg, off)
	return [$.uint(c, 16), o, err]
}

export function skipClass(msg: $.Slice<number>, off: number): [number, $.GoError] {
	return skipUint16(msg, off)
}

export function packUint32(msg: $.Slice<number>, field: number): $.Slice<number> {
	return $.append(msg, $.uint($.uint($.uintShr(field, 24, 32), 8), 8), $.uint($.uint($.uintShr(field, 16, 32), 8), 8), $.uint($.uint($.uintShr(field, 8, 32), 8), 8), $.uint($.uint(field, 8), 8), $.byteSliceHint)
}

export function unpackUint32(msg: $.Slice<number>, off: number): [number, number, $.GoError] {
	if ((off + 4) > $.sliceLen(msg)) {
		return [0, off, errBaseLen]
	}
	let v = $.uint(((((($.uint($.arrayIndex(msg!, off), 32) << 24) >>> 0)) | ((($.uint($.arrayIndex(msg!, off + 1), 32) << 16) >>> 0))) | ((($.uint($.arrayIndex(msg!, off + 2), 32) << 8) >>> 0))) | $.uint($.arrayIndex(msg!, off + 3), 32), 32)
	return [v, off + 4, null]
}

export function skipUint32(msg: $.Slice<number>, off: number): [number, $.GoError] {
	if ((off + 4) > $.sliceLen(msg)) {
		return [off, errBaseLen]
	}
	return [off + 4, null]
}

export function packText(msg: $.Slice<number>, field: string): [$.Slice<number>, $.GoError] {
	let l = $.stringLen(field)
	if (l > 255) {
		return [null, errStringTooLong]
	}
	msg = $.append(msg, $.uint($.uint(l, 8), 8), $.byteSliceHint)
	msg = $.appendSlice(msg, $.stringToBytes(field), $.byteSliceHint)

	return [msg, null]
}

export function unpackText(msg: $.Slice<number>, off: number): [string, number, $.GoError] {
	if (off >= $.sliceLen(msg)) {
		return ["", off, errBaseLen]
	}
	let beginOff = off + 1
	let endOff = beginOff + $.int($.arrayIndex(msg!, off))
	if (endOff > $.sliceLen(msg)) {
		return ["", off, errCalcLen]
	}
	return [$.bytesToString($.goSlice(msg, beginOff, endOff)), endOff, null]
}

export function packBytes(msg: $.Slice<number>, field: $.Slice<number>): $.Slice<number> {
	return $.appendSlice(msg, field, $.byteSliceHint)
}

export function unpackBytes(msg: $.Slice<number>, off: number, field: $.Slice<number>): [number, $.GoError] {
	let newOff = off + $.sliceLen(field)
	if (newOff > $.sliceLen(msg)) {
		return [off, errBaseLen]
	}
	$.copy(field, $.goSlice(msg, off, newOff))
	return [newOff, null]
}

export function NewName(name: string): [Name, $.GoError] {
	let n = new Name({Length: $.uint($.stringLen(name), 8)}, true)
	if ($.stringLen(name) > 255) {
		return [new Name(undefined, true), errCalcLen]
	}
	$.copy($.goSlice(n.Data, undefined, undefined), name)
	return [(n).clone(), null]
}

export async function MustNewName(name: string): globalThis.Promise<Name> {
	let [n, err] = NewName(name)
	if (err != null) {
		$.panic($.concatString("creating name: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	}
	return (n).clone()
}

export function skipName(msg: $.Slice<number>, off: number): [number, $.GoError] {
	// newOff is the offset where the next record will start. Pointers lead
	// to data that belongs to other names and thus doesn't count towards to
	// the usage of this name.
	let newOff = off

	Loop: for (let __goscriptSliceWindow2 = $.sliceRange(msg); true; ) {
		if (newOff >= __goscriptSliceWindow2.length) {
			return [off, errBaseLen]
		}
		let c = $.int(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, newOff)] as number))
		newOff++
		switch (c & 0xC0) {
			case 0x00:
			{
				if (c == 0x00) {
					// A zero length signals the end of the name.
					break Loop
				}
				// literal string
				newOff = newOff + (c)
				if (newOff > __goscriptSliceWindow2.length) {
					return [off, errCalcLen]
				}
				break
			}
			case 0xC0:
			{
				newOff++

				// Don't follow the pointer as the data here has ended.
				break Loop
				break
			}
			default:
			{
				return [off, errReserved]
				break
			}
		}
	}

	return [newOff, null]
}

export function unpackResourceBody(msg: $.Slice<number>, off: number, hdr: ResourceHeader): [ResourceBody | null, number, $.GoError] {
	let r: ResourceBody | null = null! as ResourceBody | null
	let err: $.GoError = null! as $.GoError
	let name: string = ""
	switch (hdr.Type) {
		case 1:
		{
			let rb: $.VarRef<AResource> = $.varRef(new AResource(undefined, true))
			let __goscriptTuple66: any = unpackAResource(msg, off)
			rb.value = $.assignStruct(rb.value, __goscriptTuple66[0])
			err = __goscriptTuple66[1]
			r = $.interfaceValue<ResourceBody | null>(rb, "*dnsmessage.AResource", /* @__PURE__ */ $.pointerType("dnsmessage.AResource"))
			name = "A"
			break
		}
		case 2:
		{
			let rb: $.VarRef<NSResource> = $.varRef(new NSResource(undefined, true))
			let __goscriptTuple67: any = unpackNSResource(msg, off)
			rb.value = $.assignStruct(rb.value, __goscriptTuple67[0])
			err = __goscriptTuple67[1]
			r = $.interfaceValue<ResourceBody | null>(rb, "*dnsmessage.NSResource", /* @__PURE__ */ $.pointerType("dnsmessage.NSResource"))
			name = "NS"
			break
		}
		case 5:
		{
			let rb: $.VarRef<CNAMEResource> = $.varRef(new CNAMEResource(undefined, true))
			let __goscriptTuple68: any = unpackCNAMEResource(msg, off)
			rb.value = $.assignStruct(rb.value, __goscriptTuple68[0])
			err = __goscriptTuple68[1]
			r = $.interfaceValue<ResourceBody | null>(rb, "*dnsmessage.CNAMEResource", /* @__PURE__ */ $.pointerType("dnsmessage.CNAMEResource"))
			name = "CNAME"
			break
		}
		case 6:
		{
			let rb: $.VarRef<SOAResource> = $.varRef(new SOAResource(undefined, true))
			let __goscriptTuple69: any = unpackSOAResource(msg, off)
			rb.value = $.assignStruct(rb.value, __goscriptTuple69[0])
			err = __goscriptTuple69[1]
			r = $.interfaceValue<ResourceBody | null>(rb, "*dnsmessage.SOAResource", /* @__PURE__ */ $.pointerType("dnsmessage.SOAResource"))
			name = "SOA"
			break
		}
		case 12:
		{
			let rb: $.VarRef<PTRResource> = $.varRef(new PTRResource(undefined, true))
			let __goscriptTuple70: any = unpackPTRResource(msg, off)
			rb.value = $.assignStruct(rb.value, __goscriptTuple70[0])
			err = __goscriptTuple70[1]
			r = $.interfaceValue<ResourceBody | null>(rb, "*dnsmessage.PTRResource", /* @__PURE__ */ $.pointerType("dnsmessage.PTRResource"))
			name = "PTR"
			break
		}
		case 15:
		{
			let rb: $.VarRef<MXResource> = $.varRef(new MXResource(undefined, true))
			let __goscriptTuple71: any = unpackMXResource(msg, off)
			rb.value = $.assignStruct(rb.value, __goscriptTuple71[0])
			err = __goscriptTuple71[1]
			r = $.interfaceValue<ResourceBody | null>(rb, "*dnsmessage.MXResource", /* @__PURE__ */ $.pointerType("dnsmessage.MXResource"))
			name = "MX"
			break
		}
		case 16:
		{
			let rb: $.VarRef<TXTResource> = $.varRef(new TXTResource(undefined, true))
			let __goscriptTuple72: any = unpackTXTResource(msg, off, hdr.Length)
			rb.value = $.assignStruct(rb.value, __goscriptTuple72[0])
			err = __goscriptTuple72[1]
			r = $.interfaceValue<ResourceBody | null>(rb, "*dnsmessage.TXTResource", /* @__PURE__ */ $.pointerType("dnsmessage.TXTResource"))
			name = "TXT"
			break
		}
		case 28:
		{
			let rb: $.VarRef<AAAAResource> = $.varRef(new AAAAResource(undefined, true))
			let __goscriptTuple73: any = unpackAAAAResource(msg, off)
			rb.value = $.assignStruct(rb.value, __goscriptTuple73[0])
			err = __goscriptTuple73[1]
			r = $.interfaceValue<ResourceBody | null>(rb, "*dnsmessage.AAAAResource", /* @__PURE__ */ $.pointerType("dnsmessage.AAAAResource"))
			name = "AAAA"
			break
		}
		case 33:
		{
			let rb: $.VarRef<SRVResource> = $.varRef(new SRVResource(undefined, true))
			let __goscriptTuple74: any = unpackSRVResource(msg, off)
			rb.value = $.assignStruct(rb.value, __goscriptTuple74[0])
			err = __goscriptTuple74[1]
			r = $.interfaceValue<ResourceBody | null>(rb, "*dnsmessage.SRVResource", /* @__PURE__ */ $.pointerType("dnsmessage.SRVResource"))
			name = "SRV"
			break
		}
		case 64:
		{
			let rb: $.VarRef<__goscript_svcb.SVCBResource> = $.varRef(new __goscript_svcb.SVCBResource(undefined, true))
			let __goscriptTuple75: any = __goscript_svcb.unpackSVCBResource(msg, off, hdr.Length)
			rb.value = $.assignStruct(rb.value, __goscriptTuple75[0])
			err = __goscriptTuple75[1]
			r = $.interfaceValue<ResourceBody | null>(rb, "*dnsmessage.SVCBResource", /* @__PURE__ */ $.pointerType("dnsmessage.SVCBResource"))
			name = "SVCB"
			break
		}
		case 65:
		{
			let rb: $.VarRef<__goscript_svcb.HTTPSResource> = $.varRef(new __goscript_svcb.HTTPSResource(undefined, true))
			let __goscriptTuple76: any = __goscript_svcb.unpackSVCBResource(msg, off, hdr.Length)
			$.assignStruct(rb.value.SVCBResource, __goscriptTuple76[0])
			err = __goscriptTuple76[1]
			r = $.interfaceValue<ResourceBody | null>(rb, "*dnsmessage.HTTPSResource", /* @__PURE__ */ $.pointerType("dnsmessage.HTTPSResource"))
			name = "HTTPS"
			break
		}
		case 41:
		{
			let rb: $.VarRef<OPTResource> = $.varRef(new OPTResource(undefined, true))
			let __goscriptTuple77: any = unpackOPTResource(msg, off, hdr.Length)
			rb.value = $.assignStruct(rb.value, __goscriptTuple77[0])
			err = __goscriptTuple77[1]
			r = $.interfaceValue<ResourceBody | null>(rb, "*dnsmessage.OPTResource", /* @__PURE__ */ $.pointerType("dnsmessage.OPTResource"))
			name = "OPT"
			break
		}
		default:
		{
			let rb: $.VarRef<UnknownResource> = $.varRef(new UnknownResource(undefined, true))
			let __goscriptTuple78: any = unpackUnknownResource(hdr.Type, msg, off, hdr.Length)
			rb.value = $.assignStruct(rb.value, __goscriptTuple78[0])
			err = __goscriptTuple78[1]
			r = $.interfaceValue<ResourceBody | null>(rb, "*dnsmessage.UnknownResource", /* @__PURE__ */ $.pointerType("dnsmessage.UnknownResource"))
			name = "Unknown"
			break
		}
	}
	if (err != null) {
		return [null, off, $.interfaceValue<$.GoError>(new nestedError({s: $.concatString(name, " record"), err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
	}
	return [r, off + $.int(hdr.Length), null]
}

export function unpackCNAMEResource(msg: $.Slice<number>, off: number): [CNAMEResource, $.GoError] {
	let cname: $.VarRef<Name> = $.varRef(new Name(undefined, true))
	{
		let [, err] = cname.value.unpack(msg, off)
		if (err != null) {
			return [new CNAMEResource(undefined, true), err]
		}
	}
	return [new CNAMEResource({CNAME: cname.value}, true), null]
}

export function unpackMXResource(msg: $.Slice<number>, off: number): [MXResource, $.GoError] {
	let __goscriptTuple80: any = unpackUint16(msg, off)
	let pref = __goscriptTuple80[0]
	off = __goscriptTuple80[1]
	let err = __goscriptTuple80[2]
	if (err != null) {
		return [new MXResource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "Pref", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
	}
	let mx: $.VarRef<Name> = $.varRef(new Name(undefined, true))
	{
		let [, __goscriptShadow26] = mx.value.unpack(msg, off)
		if (__goscriptShadow26 != null) {
			return [new MXResource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "MX", err: __goscriptShadow26}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
	}
	return [new MXResource({Pref: pref, MX: mx.value}, true), null]
}

export function unpackNSResource(msg: $.Slice<number>, off: number): [NSResource, $.GoError] {
	let ns: $.VarRef<Name> = $.varRef(new Name(undefined, true))
	{
		let [, err] = ns.value.unpack(msg, off)
		if (err != null) {
			return [new NSResource(undefined, true), err]
		}
	}
	return [new NSResource({NS: ns.value}, true), null]
}

export function unpackPTRResource(msg: $.Slice<number>, off: number): [PTRResource, $.GoError] {
	let ptr: $.VarRef<Name> = $.varRef(new Name(undefined, true))
	{
		let [, err] = ptr.value.unpack(msg, off)
		if (err != null) {
			return [new PTRResource(undefined, true), err]
		}
	}
	return [new PTRResource({PTR: ptr.value}, true), null]
}

export function unpackSOAResource(msg: $.Slice<number>, off: number): [SOAResource, $.GoError] {
	let ns: $.VarRef<Name> = $.varRef(new Name(undefined, true))
	let __goscriptTuple83: any = ns.value.unpack(msg, off)
	off = __goscriptTuple83[0]
	let err = __goscriptTuple83[1]
	if (err != null) {
		return [new SOAResource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "NS", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
	}
	let mbox: $.VarRef<Name> = $.varRef(new Name(undefined, true))
	{
		let __goscriptTuple84: any = mbox.value.unpack(msg, off)
		off = __goscriptTuple84[0]
		err = __goscriptTuple84[1]
		if (err != null) {
			return [new SOAResource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "MBox", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
	}
	let __goscriptTuple85: any = unpackUint32(msg, off)
	let serial = __goscriptTuple85[0]
	off = __goscriptTuple85[1]
	err = __goscriptTuple85[2]
	if (err != null) {
		return [new SOAResource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "Serial", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
	}
	let __goscriptTuple86: any = unpackUint32(msg, off)
	let refresh = __goscriptTuple86[0]
	off = __goscriptTuple86[1]
	err = __goscriptTuple86[2]
	if (err != null) {
		return [new SOAResource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "Refresh", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
	}
	let __goscriptTuple87: any = unpackUint32(msg, off)
	let retry = __goscriptTuple87[0]
	off = __goscriptTuple87[1]
	err = __goscriptTuple87[2]
	if (err != null) {
		return [new SOAResource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "Retry", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
	}
	let __goscriptTuple88: any = unpackUint32(msg, off)
	let expire = __goscriptTuple88[0]
	off = __goscriptTuple88[1]
	err = __goscriptTuple88[2]
	if (err != null) {
		return [new SOAResource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "Expire", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
	}
	let __goscriptTuple89: any = unpackUint32(msg, off)
	let minTTL = __goscriptTuple89[0]
	err = __goscriptTuple89[2]
	if (err != null) {
		return [new SOAResource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "MinTTL", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
	}
	return [new SOAResource({NS: ns.value, MBox: mbox.value, Serial: serial, Refresh: refresh, Retry: retry, Expire: expire, MinTTL: minTTL}, true), null]
}

export function unpackTXTResource(msg: $.Slice<number>, off: number, length: number): [TXTResource, $.GoError] {
	let txts: $.Slice<string> = $.makeSlice<string>(0, 1, "string")
	for (let n = 0; n < length; ) {
		let t: string = ""
		let err: $.GoError = null! as $.GoError
		{
			let __goscriptTuple91: any = unpackText(msg, off)
			t = __goscriptTuple91[0]
			off = __goscriptTuple91[1]
			err = __goscriptTuple91[2]
			if (err != null) {
				return [new TXTResource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "text", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
			}
		}
		// Check if we got too many bytes.
		if ($.uint((((length - n) & 0xffff)), 16) < $.uint(((($.uint($.stringLen(t), 16) + 1) & 0xffff)), 16)) {
			return [new TXTResource(undefined, true), errCalcLen]
		}
		n = $.uint(n + ($.uint((($.uint($.stringLen(t), 16) + 1) & 0xffff), 16)), 16)
		txts = $.appendOne(txts, t)
	}
	return [new TXTResource({TXT: txts}, true), null]
}

export function unpackSRVResource(msg: $.Slice<number>, off: number): [SRVResource, $.GoError] {
	let __goscriptTuple93: any = unpackUint16(msg, off)
	let priority = __goscriptTuple93[0]
	off = __goscriptTuple93[1]
	let err = __goscriptTuple93[2]
	if (err != null) {
		return [new SRVResource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "Priority", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
	}
	let __goscriptTuple94: any = unpackUint16(msg, off)
	let weight = __goscriptTuple94[0]
	off = __goscriptTuple94[1]
	err = __goscriptTuple94[2]
	if (err != null) {
		return [new SRVResource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "Weight", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
	}
	let __goscriptTuple95: any = unpackUint16(msg, off)
	let port = __goscriptTuple95[0]
	off = __goscriptTuple95[1]
	err = __goscriptTuple95[2]
	if (err != null) {
		return [new SRVResource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "Port", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
	}
	let target: $.VarRef<Name> = $.varRef(new Name(undefined, true))
	{
		let [, __goscriptShadow27] = target.value.unpack(msg, off)
		if (__goscriptShadow27 != null) {
			return [new SRVResource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "Target", err: __goscriptShadow27}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
	}
	return [new SRVResource({Priority: priority, Weight: weight, Port: port, Target: target.value}, true), null]
}

export function unpackAResource(msg: $.Slice<number>, off: number): [AResource, $.GoError] {
	let a: Uint8Array = $.arrayValue(new Uint8Array(4))
	{
		let [, err] = unpackBytes(msg, off, $.goSlice(a, undefined, undefined))
		if (err != null) {
			return [new AResource(undefined, true), err]
		}
	}
	return [new AResource({A: $.cloneArrayValue(a, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 4))}, true), null]
}

export function unpackAAAAResource(msg: $.Slice<number>, off: number): [AAAAResource, $.GoError] {
	let aaaa: Uint8Array = $.arrayValue(new Uint8Array(16))
	{
		let [, err] = unpackBytes(msg, off, $.goSlice(aaaa, undefined, undefined))
		if (err != null) {
			return [new AAAAResource(undefined, true), err]
		}
	}
	return [new AAAAResource({AAAA: $.cloneArrayValue(aaaa, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 16))}, true), null]
}

export function unpackOPTResource(msg: $.Slice<number>, off: number, length: number): [OPTResource, $.GoError] {
	let opts: $.Slice<Option> = null! as $.Slice<Option>
	for (let oldOff = off; off < (oldOff + $.int(length)); ) {
		let err: $.GoError = null! as $.GoError
		let o: Option = new Option(undefined, true)
		let __goscriptTuple96: any = unpackUint16(msg, off)
		o.Code = __goscriptTuple96[0]
		off = __goscriptTuple96[1]
		err = __goscriptTuple96[2]
		if (err != null) {
			return [new OPTResource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "Code", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		let l: number = 0
		let __goscriptTuple97: any = unpackUint16(msg, off)
		l = __goscriptTuple97[0]
		off = __goscriptTuple97[1]
		err = __goscriptTuple97[2]
		if (err != null) {
			return [new OPTResource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "Data", err: err}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		o.Data = $.makeSlice<number>(l, undefined, "byte")
		if ($.copy(o.Data, $.goSlice(msg, off, undefined)) != $.int(l)) {
			return [new OPTResource(undefined, true), $.interfaceValue<$.GoError>(new nestedError({s: "Data", err: errCalcLen}), "*dnsmessage.nestedError", /* @__PURE__ */ $.pointerType("dnsmessage.nestedError"))]
		}
		off = off + ($.int(l))
		opts = $.appendOne(opts, (o).clone())
	}
	return [new OPTResource({Options: opts}, true), null]
}

export function unpackUnknownResource(recordType: Type, msg: $.Slice<number>, off: number, length: number): [UnknownResource, $.GoError] {
	let parsed = new UnknownResource({Type: recordType, Data: $.makeSlice<number>(length, undefined, "byte")}, true)
	{
		let [, err] = unpackBytes(msg, off, parsed.Data)
		if (err != null) {
			return [new UnknownResource(undefined, true), err]
		}
	}
	return [(parsed).clone(), null]
}

var __goscriptAwait: any
