// Generated file based on hkdf.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as hmac from "@goscript/crypto/internal/fips140/hmac/index.js"

import * as hash from "@goscript/hash/index.js"

import type * as io from "@goscript/io/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/hmac/index.js"
import "@goscript/hash/index.js"

export async function Extract(__typeArgs: $.GenericTypeArgs | undefined, h: (() => any | globalThis.Promise<any>) | null, secret: $.Slice<number>, salt: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	if ($.sliceLen(secret) < 14) {
		fips140.RecordNonApproved()
	}
	if (salt == null) {
		salt = $.makeSlice<number>((__goscriptAwait = $.callGenericMethod(__typeArgs, "H", "Size", (__goscriptAwait = h!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined, "byte")
	}
	let extractor: hmac.HMAC | $.VarRef<hmac.HMAC> | null = await hmac.New({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, h, salt)
	hmac.MarkAsUsedInKDF(extractor)
	await (extractor !== null && (extractor as any).__isVarRef !== true && (extractor as any).__goValue === undefined ? ((extractor as any) as hmac.HMAC).Write(secret) : hmac.HMAC.prototype.Write.call(extractor, secret))

	return (extractor !== null && (extractor as any).__isVarRef !== true && (extractor as any).__goValue === undefined ? ((extractor as any) as hmac.HMAC).Sum(null) : hmac.HMAC.prototype.Sum.call(extractor, null))
}

export async function Expand(__typeArgs: $.GenericTypeArgs | undefined, h: (() => any | globalThis.Promise<any>) | null, pseudorandomKey: $.Slice<number>, info: string, keyLen: number): globalThis.Promise<$.Slice<number>> {
	let out: $.Slice<number> = $.makeSlice<number>(0, keyLen, "byte")
	let expander: hmac.HMAC | $.VarRef<hmac.HMAC> | null = await hmac.New({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, h, pseudorandomKey)
	hmac.MarkAsUsedInKDF(expander)
	let counter: number = 0
	let buf: $.Slice<number> = null! as $.Slice<number>

	while ($.sliceLen(out) < keyLen) {
		counter = ((counter + 1) & 0xff)
		if (counter == 0) {
			$.panic("hkdf: counter overflow")
		}
		if (counter > 1) {
			await (expander !== null && (expander as any).__isVarRef !== true && (expander as any).__goValue === undefined ? ((expander as any) as hmac.HMAC).Reset() : hmac.HMAC.prototype.Reset.call(expander))
		}
		await (expander !== null && (expander as any).__isVarRef !== true && (expander as any).__goValue === undefined ? ((expander as any) as hmac.HMAC).Write(buf) : hmac.HMAC.prototype.Write.call(expander, buf))
		await (expander !== null && (expander as any).__isVarRef !== true && (expander as any).__goValue === undefined ? ((expander as any) as hmac.HMAC).Write($.stringToBytes(info)) : hmac.HMAC.prototype.Write.call(expander, $.stringToBytes(info)))
		await (expander !== null && (expander as any).__isVarRef !== true && (expander as any).__goValue === undefined ? ((expander as any) as hmac.HMAC).Write(new Uint8Array([counter]) as $.Slice<number>) : hmac.HMAC.prototype.Write.call(expander, new Uint8Array([counter]) as $.Slice<number>))
		buf = await (expander !== null && (expander as any).__isVarRef !== true && (expander as any).__goValue === undefined ? ((expander as any) as hmac.HMAC).Sum($.goSlice(buf, undefined, 0)) : hmac.HMAC.prototype.Sum.call(expander, $.goSlice(buf, undefined, 0)))
		let remain: number = keyLen - $.sliceLen(out)
		remain = $.min(remain, $.sliceLen(buf))
		out = $.appendSlice(out, $.goSlice(buf, undefined, remain), $.byteSliceHint)
	}

	return out
}

export async function Key(__typeArgs: $.GenericTypeArgs | undefined, h: (() => any | globalThis.Promise<any>) | null, secret: $.Slice<number>, salt: $.Slice<number>, info: string, keyLen: number): globalThis.Promise<$.Slice<number>> {
	let prk: $.Slice<number> = await Extract({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, h, secret, salt)
	return Expand({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, h, prk, info, keyLen)
}

var __goscriptAwait: any
