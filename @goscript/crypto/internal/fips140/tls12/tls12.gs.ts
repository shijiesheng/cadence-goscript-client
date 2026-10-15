// Generated file based on tls12.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as hmac from "@goscript/crypto/internal/fips140/hmac/index.js"

import * as sha256 from "@goscript/crypto/internal/fips140/sha256/index.js"

import * as sha512 from "@goscript/crypto/internal/fips140/sha512/index.js"

import * as hash2 from "@goscript/hash/index.js"

import type * as io from "@goscript/io/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/hmac/index.js"
import "@goscript/crypto/internal/fips140/sha256/index.js"
import "@goscript/crypto/internal/fips140/sha512/index.js"
import "@goscript/hash/index.js"

export const masterSecretLength: number = 48

export const extendedMasterSecretLabel: string = "extended master secret"

export async function PRF(__typeArgs: $.GenericTypeArgs | undefined, hash: (() => any | globalThis.Promise<any>) | null, secret: $.Slice<number>, label: string, seed: $.Slice<number>, keyLen: number): globalThis.Promise<$.Slice<number>> {
	let labelAndSeed: $.Slice<number> = $.makeSlice<number>($.stringLen(label) + $.sliceLen(seed), undefined, "byte")
	$.copy(labelAndSeed, label)
	$.copy($.goSlice(labelAndSeed, $.stringLen(label), undefined), seed)

	let result: $.Slice<number> = $.makeSlice<number>(keyLen, undefined, "byte")
	await pHash({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, hash, result, secret, labelAndSeed)
	return result
}

export async function pHash(__typeArgs: $.GenericTypeArgs | undefined, hash: (() => any | globalThis.Promise<any>) | null, result: $.Slice<number>, secret: $.Slice<number>, seed: $.Slice<number>): globalThis.Promise<void> {
	let h: hmac.HMAC | $.VarRef<hmac.HMAC> | null = await hmac.New({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, hash, secret)
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write(seed) : hmac.HMAC.prototype.Write.call(h, seed))
	let a: $.Slice<number> = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Sum(null) : hmac.HMAC.prototype.Sum.call(h, null))

	while ($.sliceLen(result) > 0) {
		await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Reset() : hmac.HMAC.prototype.Reset.call(h))
		await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write(a) : hmac.HMAC.prototype.Write.call(h, a))
		await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write(seed) : hmac.HMAC.prototype.Write.call(h, seed))
		let b: $.Slice<number> = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Sum(null) : hmac.HMAC.prototype.Sum.call(h, null))
		let n: number = $.copy(result, b)
		result = $.goSlice(result, n, undefined)

		await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Reset() : hmac.HMAC.prototype.Reset.call(h))
		await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Write(a) : hmac.HMAC.prototype.Write.call(h, a))
		a = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as hmac.HMAC).Sum(null) : hmac.HMAC.prototype.Sum.call(h, null))
	}
}

export async function MasterSecret(__typeArgs: $.GenericTypeArgs | undefined, hash: (() => any | globalThis.Promise<any>) | null, preMasterSecret: $.Slice<number>, transcript: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	// "The TLS 1.2 KDF is an approved KDF when the following conditions are
	// satisfied: [...] (3) P_HASH uses either SHA-256, SHA-384 or SHA-512."
	let h = (__goscriptAwait = hash!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	{
		const __goscriptTypeSwitchValue = $.typeParamInterfaceValue<any>(h, __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null })
		switch (true) {
			case $.typeAssert<sha256.Digest | $.VarRef<sha256.Digest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("sha256.Digest")).ok:
				{
					if ((__goscriptAwait = $.callGenericMethod(__typeArgs, "H", "Size", h), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 32) {
						fips140.RecordNonApproved()
					}
				}
				break
			case $.typeAssert<sha512.Digest | $.VarRef<sha512.Digest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("sha512.Digest")).ok:
				{
					if (((__goscriptAwait = $.callGenericMethod(__typeArgs, "H", "Size", h), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 46) && ((__goscriptAwait = $.callGenericMethod(__typeArgs, "H", "Size", h), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 64)) {
						fips140.RecordNonApproved()
					}
				}
				break
			default:
				{
					fips140.RecordNonApproved()
				}
				break
		}
	}

	return PRF({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, hash, preMasterSecret, "extended master secret", transcript, 48)
}

var __goscriptAwait: any
