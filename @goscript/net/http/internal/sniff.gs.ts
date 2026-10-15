// Generated file based on sniff.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as binary from "@goscript/encoding/binary/index.js"
import "@goscript/bytes/index.js"
import "@goscript/encoding/binary/index.js"

$.registerTypePackagePath("net/http/internal", ["internal.sniffSig", "internal.exactSig", "internal.maskedSig", "internal.htmlSig", "internal.mp4Sig", "internal.textSig"])

export type sniffSig = {
	match(data: $.Slice<number>, firstNonWS: number): string
}

$.registerInterfaceType(
	"internal.sniffSig",
	null,
	[$.methodSignature("match", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["firstNonWS", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("string")])]
);

export type htmlSig = $.Slice<number>

$.registerNamedType("internal.htmlSig", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"internal.htmlSig",
	{match: (receiver: any, ...args: any[]) => (htmlSig_match as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("match", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["firstNonWS", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*internal.htmlSig",
	{match: (receiver: any, ...args: any[]) => (htmlSig_match as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("match", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["firstNonWS", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("string")])]
);

export class exactSig {
	public get sig(): $.Slice<number> {
		return this._fields.sig
	}

	public set sig(value: $.Slice<number>) {
		this._fields.sig = value
	}

	public get ct(): string {
		return this._fields.ct
	}

	public set ct(value: string) {
		this._fields.ct = value
	}

	public _fields: {
		sig: $.Slice<number>
		ct: string
	}

	constructor(init?: Partial<{sig?: $.Slice<number>, ct?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			sig: init?.sig ?? (null! as $.Slice<number>),
			ct: init?.ct ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): exactSig {
		return new exactSig(this, true)
	}

	public __goscriptAssign(source: exactSig): void {
		const target = this._fields
		const values = source._fields
		target.sig = values.sig
		target.ct = values.ct
	}

	public match(data: $.Slice<number>, firstNonWS: number): string {
		const e: exactSig | $.VarRef<exactSig> | null = this;
		const e$: exactSig = e == null ? $.pointerTarget<exactSig>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<exactSig>(e)
		if (bytes.HasPrefix(data, (e$ as exactSig).sig)) {
			return (e$ as exactSig).ct
		}
		return ""
	}

	static __typeInfo = $.registerStructType(
		"internal.exactSig",
		() => new exactSig(),
		() => [$.methodSignature("match", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["firstNonWS", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("string")], true)],
		exactSig,
		() => [/* @__PURE__ */ $.structField("sig", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "net/http/internal" }), /* @__PURE__ */ $.structField("ct", /* @__PURE__ */ $.basicType("string"), [1], 24, false, { pkgPath: "net/http/internal" })]
	)
}

export class maskedSig {
	public get mask(): $.Slice<number> {
		return this._fields.mask
	}

	public set mask(value: $.Slice<number>) {
		this._fields.mask = value
	}

	public get pat(): $.Slice<number> {
		return this._fields.pat
	}

	public set pat(value: $.Slice<number>) {
		this._fields.pat = value
	}

	public get skipWS(): boolean {
		return this._fields.skipWS
	}

	public set skipWS(value: boolean) {
		this._fields.skipWS = value
	}

	public get ct(): string {
		return this._fields.ct
	}

	public set ct(value: string) {
		this._fields.ct = value
	}

	public _fields: {
		mask: $.Slice<number>
		pat: $.Slice<number>
		skipWS: boolean
		ct: string
	}

	constructor(init?: Partial<{mask?: $.Slice<number>, pat?: $.Slice<number>, skipWS?: boolean, ct?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			mask: init?.mask ?? (null! as $.Slice<number>),
			pat: init?.pat ?? (null! as $.Slice<number>),
			skipWS: init?.skipWS ?? (false as boolean),
			ct: init?.ct ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): maskedSig {
		return new maskedSig(this, true)
	}

	public __goscriptAssign(source: maskedSig): void {
		const target = this._fields
		const values = source._fields
		target.mask = values.mask
		target.pat = values.pat
		target.skipWS = values.skipWS
		target.ct = values.ct
	}

	public match(data: $.Slice<number>, firstNonWS: number): string {
		const m: maskedSig | $.VarRef<maskedSig> | null = this;
		const m$: maskedSig = m == null ? $.pointerTarget<maskedSig>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<maskedSig>(m)
		// pattern matching algorithm section 6
		// https://mimesniff.spec.whatwg.org/#pattern-matching-algorithm

		if ((m$ as maskedSig).skipWS) {
			data = $.goSlice(data, firstNonWS, undefined)
		}
		if ($.sliceLen((m$ as maskedSig).pat) != $.sliceLen((m$ as maskedSig).mask)) {
			return ""
		}
		if ($.sliceLen(data) < $.sliceLen((m$ as maskedSig).pat)) {
			return ""
		}
		for (let __goscriptRangeTarget1 = (m$ as maskedSig).pat, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow1 = $.sliceRange(data), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let pb = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as number), 8)
			let maskedData = $.uint(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as number) & $.arrayIndex((m$ as maskedSig).mask!, i), 8)
			if (maskedData != pb) {
				return ""
			}
		}
		return (m$ as maskedSig).ct
	}

	static __typeInfo = $.registerStructType(
		"internal.maskedSig",
		() => new maskedSig(),
		() => [$.methodSignature("match", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["firstNonWS", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("string")], true)],
		maskedSig,
		() => [/* @__PURE__ */ $.structField("mask", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "net/http/internal" }), /* @__PURE__ */ $.structField("pat", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, false, { pkgPath: "net/http/internal" }), /* @__PURE__ */ $.structField("skipWS", /* @__PURE__ */ $.basicType("bool"), [2], 48, false, { pkgPath: "net/http/internal" }), /* @__PURE__ */ $.structField("ct", /* @__PURE__ */ $.basicType("string"), [3], 56, false, { pkgPath: "net/http/internal" })]
	)
}

export class mp4Sig {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mp4Sig {
		return new mp4Sig(this, true)
	}

	public __goscriptAssign(source: mp4Sig): void {
	}

	public match(data: $.Slice<number>, firstNonWS: number): string {
		// https://mimesniff.spec.whatwg.org/#signature-for-mp4
		// c.f. section 6.2.1
		if ($.sliceLen(data) < 12) {
			return ""
		}
		let boxSize = $.int($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32($.goSlice(data, undefined, 4)))
		if (($.sliceLen(data) < boxSize) || ((boxSize % 4) != 0)) {
			return ""
		}
		if (!bytes.Equal($.goSlice(data, 4, 8), mp4ftype)) {
			return ""
		}
		for (let st = 8; st < boxSize; st = st + (4)) {
			if (st == 12) {
				// Ignores the four bytes that correspond to the version number of the "major brand".
				continue
			}
			if (bytes.Equal($.goSlice(data, st, st + 3), mp4)) {
				return "video/mp4"
			}
		}
		return ""
	}

	static __typeInfo = $.registerStructType(
		"internal.mp4Sig",
		() => new mp4Sig(),
		() => [$.methodSignature("match", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["firstNonWS", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("string")])],
		mp4Sig,
		() => []
	)
}

export class textSig {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): textSig {
		return new textSig(this, true)
	}

	public __goscriptAssign(source: textSig): void {
	}

	public match(data: $.Slice<number>, firstNonWS: number): string {
		// c.f. section 5, step 4.
		for (let __goscriptRangeTarget3 = $.goSlice(data, firstNonWS, undefined), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let b = $.uint((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as number), 8)
			switch ((true as boolean)) {
				case b <= 0x08:
				case b == 0x0B:
				case (0x0E <= b) && (b <= 0x1A):
				case (0x1C <= b) && (b <= 0x1F):
				{
					return ""
					break
				}
			}
		}
		return "text/plain; charset=utf-8"
	}

	static __typeInfo = $.registerStructType(
		"internal.textSig",
		() => new textSig(),
		() => [$.methodSignature("match", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["firstNonWS", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("string")])],
		textSig,
		() => []
	)
}

export const SniffLen: number = 512

export function DetectContentType(data: $.Slice<number>): string {
	if ($.sliceLen(data) > 512) {
		data = $.goSlice(data, undefined, 512)
	}

	// Index of the first non-whitespace byte in data.
	let firstNonWS = 0
	for (let __goscriptSliceWindow0 = $.sliceRange(data); (firstNonWS < __goscriptSliceWindow0.length) && isWS(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, firstNonWS)] as number)); firstNonWS++) {
	}

	for (let __goscriptRangeTarget0 = sniffSignatures, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let sig = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as sniffSig | null)
		{
			let ct = (sig !== null && (sig as any).__isVarRef !== true && (sig as any).__goValue === undefined ? (sig as Exclude<sniffSig, null>) : $.pointerValue<Exclude<sniffSig, null>>(sig)).match(data, firstNonWS)
			if (!$.stringEqual(ct, "")) {
				return ct
			}
		}
	}

	return "application/octet-stream"
}

export function isWS(b: number): boolean {
	switch (b) {
		case 9:
		case 10:
		case 12:
		case 13:
		case 32:
		{
			return true
			break
		}
	}
	return false
}

export function isTT(b: number): boolean {
	switch (b) {
		case 32:
		case 62:
		{
			return true
			break
		}
	}
	return false
}

export let sniffSignatures: $.Slice<sniffSig | null> = $.arrayToSlice<sniffSig | null>([$.namedValueInterfaceValue<sniffSig | null>(new Uint8Array([60, 33, 68, 79, 67, 84, 89, 80, 69, 32, 72, 84, 77, 76]), "internal.htmlSig", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<sniffSig | null>(new Uint8Array([60, 72, 84, 77, 76]), "internal.htmlSig", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<sniffSig | null>(new Uint8Array([60, 72, 69, 65, 68]), "internal.htmlSig", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<sniffSig | null>(new Uint8Array([60, 83, 67, 82, 73, 80, 84]), "internal.htmlSig", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<sniffSig | null>(new Uint8Array([60, 73, 70, 82, 65, 77, 69]), "internal.htmlSig", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<sniffSig | null>(new Uint8Array([60, 72, 49]), "internal.htmlSig", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<sniffSig | null>(new Uint8Array([60, 68, 73, 86]), "internal.htmlSig", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<sniffSig | null>(new Uint8Array([60, 70, 79, 78, 84]), "internal.htmlSig", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<sniffSig | null>(new Uint8Array([60, 84, 65, 66, 76, 69]), "internal.htmlSig", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<sniffSig | null>(new Uint8Array([60, 65]), "internal.htmlSig", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<sniffSig | null>(new Uint8Array([60, 83, 84, 89, 76, 69]), "internal.htmlSig", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<sniffSig | null>(new Uint8Array([60, 84, 73, 84, 76, 69]), "internal.htmlSig", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<sniffSig | null>(new Uint8Array([60, 66]), "internal.htmlSig", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<sniffSig | null>(new Uint8Array([60, 66, 79, 68, 89]), "internal.htmlSig", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<sniffSig | null>(new Uint8Array([60, 66, 82]), "internal.htmlSig", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<sniffSig | null>(new Uint8Array([60, 80]), "internal.htmlSig", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<sniffSig | null>(new Uint8Array([60, 33, 45, 45]), "internal.htmlSig", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.interfaceValue<sniffSig | null>(new maskedSig({mask: new Uint8Array([255, 255, 255, 255, 255]), pat: new Uint8Array([60, 63, 120, 109, 108]), skipWS: true, ct: "text/xml; charset=utf-8"}), "*internal.maskedSig", /* @__PURE__ */ $.pointerType("internal.maskedSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([37, 80, 68, 70, 45]), ct: "application/pdf"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([37, 33, 80, 83, 45, 65, 100, 111, 98, 101, 45]), ct: "application/postscript"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new maskedSig({mask: new Uint8Array([255, 255, 0, 0]), pat: new Uint8Array([254, 255, 0, 0]), ct: "text/plain; charset=utf-16be"}), "*internal.maskedSig", /* @__PURE__ */ $.pointerType("internal.maskedSig")), $.interfaceValue<sniffSig | null>(new maskedSig({mask: new Uint8Array([255, 255, 0, 0]), pat: new Uint8Array([255, 254, 0, 0]), ct: "text/plain; charset=utf-16le"}), "*internal.maskedSig", /* @__PURE__ */ $.pointerType("internal.maskedSig")), $.interfaceValue<sniffSig | null>(new maskedSig({mask: new Uint8Array([255, 255, 255, 0]), pat: new Uint8Array([239, 187, 191, 0]), ct: "text/plain; charset=utf-8"}), "*internal.maskedSig", /* @__PURE__ */ $.pointerType("internal.maskedSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([0, 0, 1, 0]), ct: "image/x-icon"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([0, 0, 2, 0]), ct: "image/x-icon"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([66, 77]), ct: "image/bmp"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([71, 73, 70, 56, 55, 97]), ct: "image/gif"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([71, 73, 70, 56, 57, 97]), ct: "image/gif"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new maskedSig({mask: new Uint8Array([255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255]), pat: new Uint8Array([82, 73, 70, 70, 0, 0, 0, 0, 87, 69, 66, 80, 86, 80]), ct: "image/webp"}), "*internal.maskedSig", /* @__PURE__ */ $.pointerType("internal.maskedSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), ct: "image/png"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([255, 216, 255]), ct: "image/jpeg"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new maskedSig({mask: new Uint8Array([255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255]), pat: new Uint8Array([70, 79, 82, 77, 0, 0, 0, 0, 65, 73, 70, 70]), ct: "audio/aiff"}), "*internal.maskedSig", /* @__PURE__ */ $.pointerType("internal.maskedSig")), $.interfaceValue<sniffSig | null>(new maskedSig({mask: new Uint8Array([255, 255, 255]), pat: new Uint8Array([73, 68, 51]), ct: "audio/mpeg"}), "*internal.maskedSig", /* @__PURE__ */ $.pointerType("internal.maskedSig")), $.interfaceValue<sniffSig | null>(new maskedSig({mask: new Uint8Array([255, 255, 255, 255, 255]), pat: new Uint8Array([79, 103, 103, 83, 0]), ct: "application/ogg"}), "*internal.maskedSig", /* @__PURE__ */ $.pointerType("internal.maskedSig")), $.interfaceValue<sniffSig | null>(new maskedSig({mask: new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255]), pat: new Uint8Array([77, 84, 104, 100, 0, 0, 0, 6]), ct: "audio/midi"}), "*internal.maskedSig", /* @__PURE__ */ $.pointerType("internal.maskedSig")), $.interfaceValue<sniffSig | null>(new maskedSig({mask: new Uint8Array([255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255]), pat: new Uint8Array([82, 73, 70, 70, 0, 0, 0, 0, 65, 86, 73, 32]), ct: "video/avi"}), "*internal.maskedSig", /* @__PURE__ */ $.pointerType("internal.maskedSig")), $.interfaceValue<sniffSig | null>(new maskedSig({mask: new Uint8Array([255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255]), pat: new Uint8Array([82, 73, 70, 70, 0, 0, 0, 0, 87, 65, 86, 69]), ct: "audio/wave"}), "*internal.maskedSig", /* @__PURE__ */ $.pointerType("internal.maskedSig")), $.interfaceValue<sniffSig | null>(new mp4Sig(undefined, true), "internal.mp4Sig", "internal.mp4Sig"), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([26, 69, 223, 163]), ct: "video/webm"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new maskedSig({pat: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 80]), mask: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255]), ct: "application/vnd.ms-fontobject"}), "*internal.maskedSig", /* @__PURE__ */ $.pointerType("internal.maskedSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([0, 1, 0, 0]), ct: "font/ttf"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([79, 84, 84, 79]), ct: "font/otf"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([116, 116, 99, 102]), ct: "font/collection"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([119, 79, 70, 70]), ct: "font/woff"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([119, 79, 70, 50]), ct: "font/woff2"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([31, 139, 8]), ct: "application/x-gzip"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([80, 75, 3, 4]), ct: "application/zip"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([82, 97, 114, 33, 26, 7, 0]), ct: "application/x-rar-compressed"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([82, 97, 114, 33, 26, 7, 1, 0]), ct: "application/x-rar-compressed"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new exactSig({sig: new Uint8Array([0, 97, 115, 109]), ct: "application/wasm"}), "*internal.exactSig", /* @__PURE__ */ $.pointerType("internal.exactSig")), $.interfaceValue<sniffSig | null>(new textSig(undefined, true), "internal.textSig", "internal.textSig")])

export function __goscript_set_sniffSignatures(__goscriptValue: $.Slice<sniffSig | null>): void {
	sniffSignatures = __goscriptValue
}

export function htmlSig_match(h: htmlSig, data: $.Slice<number>, firstNonWS: number): string {
	data = $.goSlice(data, firstNonWS, undefined)
	if ($.sliceLen(data) < ($.sliceLen((h as htmlSig)) + 1)) {
		return ""
	}
	for (let __goscriptRangeTarget2 = h, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow2 = $.sliceRange(data), i = 0; i < __goscriptRangeWindow2.length; i++) {
		let b = $.uint((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as number), 8)
		let db = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as number)
		if ((65 <= b) && (b <= 90)) {
			db = db & (0xDF)
		}
		if (b != db) {
			return ""
		}
	}
	// Next byte must be a tag-terminating byte(0xTT).
	if (!isTT($.arrayIndex(data!, $.sliceLen((h as htmlSig))))) {
		return ""
	}
	return "text/html; charset=utf-8"
}

export let mp4ftype: $.Slice<number> = new Uint8Array([102, 116, 121, 112])

export function __goscript_set_mp4ftype(__goscriptValue: $.Slice<number>): void {
	mp4ftype = __goscriptValue
}

export let mp4: $.Slice<number> = new Uint8Array([109, 112, 52])

export function __goscript_set_mp4(__goscriptValue: $.Slice<number>): void {
	mp4 = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({match: (receiver: any, ...args: any[]) => (htmlSig_match as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "internal.htmlSig"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("match", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["firstNonWS", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("string")])])
}
