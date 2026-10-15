// Generated file based on hkdf.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as hkdf from "@goscript/crypto/internal/fips140/hkdf/index.js"

import * as fips140hash from "@goscript/crypto/internal/fips140hash/index.js"

import * as fips140only from "@goscript/crypto/internal/fips140only/index.js"

import * as errors from "@goscript/errors/index.js"

import * as hash from "@goscript/hash/index.js"

import type * as io from "@goscript/io/index.js"
import "@goscript/crypto/internal/fips140/hkdf/index.js"
import "@goscript/crypto/internal/fips140hash/index.js"
import "@goscript/crypto/internal/fips140only/index.js"
import "@goscript/errors/index.js"
import "@goscript/hash/index.js"

export async function Extract(__typeArgs: $.GenericTypeArgs | undefined, h: (() => any | globalThis.Promise<any>) | null, secret: $.Slice<number>, salt: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let fh: (() => hash.Hash | null | globalThis.Promise<hash.Hash | null>) | null = await fips140hash.UnwrapNew({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Hash: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, h)
	{
		let err = await checkFIPS140Only(__goscriptStatic0(), fh, secret)
		if (err != null) {
			return [null, err]
		}
	}
	return [await hkdf.Extract(__goscriptStatic1(), fh, secret, salt), null]
}

export async function Expand(__typeArgs: $.GenericTypeArgs | undefined, h: (() => any | globalThis.Promise<any>) | null, pseudorandomKey: $.Slice<number>, info: string, keyLength: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let fh: (() => hash.Hash | null | globalThis.Promise<hash.Hash | null>) | null = await fips140hash.UnwrapNew({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Hash: __typeArgs?.["H"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, h)
	{
		let err = await checkFIPS140Only(__goscriptStatic0(), fh, pseudorandomKey)
		if (err != null) {
			return [null, err]
		}
	}

	let limit = (__goscriptAwait = $.pointerValue<Exclude<hash.Hash, null>>((__goscriptAwait = fh!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) * 255
	if (keyLength > limit) {
		return [null, errors.New("hkdf: requested key length too large")]
	}

	return [await hkdf.Expand(__goscriptStatic1(), fh, pseudorandomKey, info, keyLength), null]
}

export async function Key(__typeArgs: $.GenericTypeArgs | undefined, h: (() => any | globalThis.Promise<any>) | null, secret: $.Slice<number>, salt: $.Slice<number>, info: string, keyLength: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let fh: (() => hash.Hash | null | globalThis.Promise<hash.Hash | null>) | null = await fips140hash.UnwrapNew({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Hash: __typeArgs?.["Hash"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }}, h)
	{
		let err = await checkFIPS140Only(__goscriptStatic0(), fh, secret)
		if (err != null) {
			return [null, err]
		}
	}

	let limit = (__goscriptAwait = $.pointerValue<Exclude<hash.Hash, null>>((__goscriptAwait = fh!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) * 255
	if (keyLength > limit) {
		return [null, errors.New("hkdf: requested key length too large")]
	}

	return [await hkdf.Key(__goscriptStatic1(), fh, secret, salt, info, keyLength), null]
}

export async function checkFIPS140Only(__typeArgs: $.GenericTypeArgs | undefined, h: (() => any | globalThis.Promise<any>) | null, key: $.Slice<number>): globalThis.Promise<$.GoError> {
	if (!fips140only.Enforced()) {
		return null
	}
	if ($.sliceLen(key) < 14) {
		return errors.New("crypto/hkdf: use of keys shorter than 112 bits is not allowed in FIPS 140-only mode")
	}
	if (!fips140only.ApprovedHash($.typeParamInterfaceValue<hash.Hash | null>((__goscriptAwait = h!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), __typeArgs?.["Hash"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])] }, zero: () => null }))) {
		return errors.New("crypto/hkdf: use of hash functions other than SHA-2 or SHA-3 is not allowed in FIPS 140-only mode")
	}
	return null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, Hash: { type: "hash.Hash", zero: () => null, methods: {BlockSize: (receiver: any, ...args: any[]) => receiver.BlockSize(...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => receiver.Reset(...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => receiver.Size(...$.stripGenericTypeArgs(args)), Sum: (receiver: any, ...args: any[]) => receiver.Sum(...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => receiver.Write(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: { type: "hash.Hash", zero: () => null, methods: {BlockSize: (receiver: any, ...args: any[]) => receiver.BlockSize(...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => receiver.Reset(...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => receiver.Size(...$.stripGenericTypeArgs(args)), Sum: (receiver: any, ...args: any[]) => receiver.Sum(...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => receiver.Write(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any
