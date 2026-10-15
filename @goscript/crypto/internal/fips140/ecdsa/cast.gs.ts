// Generated file based on cast.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import "@goscript/crypto/internal/fips140/check/index.js"

import * as sha512 from "@goscript/crypto/internal/fips140/sha512/index.js"

import * as errors from "@goscript/errors/index.js"

import * as sync from "@goscript/sync/index.js"

import * as bigmod from "@goscript/crypto/internal/fips140/bigmod/index.js"

import * as hmac from "@goscript/crypto/internal/fips140/hmac/index.js"

import * as nistec from "@goscript/crypto/internal/fips140/nistec/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_ecdsa from "./ecdsa.gs.ts"

import * as __goscript_ecdsa_noasm from "./ecdsa_noasm.gs.ts"

import * as __goscript_hmacdrbg from "./hmacdrbg.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/sha512/index.js"
import "@goscript/errors/index.js"
import "@goscript/sync/index.js"
import "@goscript/crypto/internal/fips140/bigmod/index.js"
import "@goscript/crypto/internal/fips140/hmac/index.js"
import "@goscript/crypto/internal/fips140/nistec/index.js"
import "./ecdsa.gs.ts"
import "./ecdsa_noasm.gs.ts"
import "./hmacdrbg.gs.ts"

export function testPrivateKey(): __goscript_ecdsa.PrivateKey | $.VarRef<__goscript_ecdsa.PrivateKey> | null {
	// https://www.rfc-editor.org/rfc/rfc9500.html#section-2.3
	return new __goscript_ecdsa.PrivateKey({pub: new __goscript_ecdsa.PublicKey({curve: "P-256", q: new Uint8Array([4, 66, 37, 72, 248, 143, 183, 130, 255, 181, 236, 163, 116, 68, 82, 199, 42, 30, 85, 143, 189, 111, 115, 190, 94, 72, 233, 50, 50, 204, 69, 197, 177, 108, 76, 209, 12, 76, 184, 213, 184, 161, 113, 57, 233, 72, 130, 200, 153, 37, 114, 153, 52, 37, 244, 20, 25, 171, 126, 144, 164, 42, 73, 66, 114]) as $.Slice<number>}, true), d: new Uint8Array([230, 203, 91, 221, 128, 170, 69, 174, 156, 149, 232, 193, 84, 118, 103, 159, 254, 201, 83, 193, 104, 81, 231, 17, 231, 67, 147, 149, 137, 198, 79, 193]) as $.Slice<number>})
}

export function testHash(): $.Slice<number> {
	return new Uint8Array([23, 27, 31, 94, 159, 143, 140, 92, 66, 232, 6, 89, 123, 84, 199, 180, 73, 5, 161, 219, 58, 60, 49, 211, 183, 86, 69, 140, 194, 214, 136, 98, 158, 214, 123, 155, 37, 104, 214, 198, 24, 148, 30, 254, 227, 51, 120, 166, 225, 206, 19, 136, 129, 38, 2, 82, 223, 194, 10, 242, 103, 73, 10, 32]) as $.Slice<number>
}

export async function fipsPCT(__typeArgs: $.GenericTypeArgs | undefined, c: __goscript_ecdsa.Curve | $.VarRef<__goscript_ecdsa.Curve> | null, k: __goscript_ecdsa.PrivateKey | $.VarRef<__goscript_ecdsa.PrivateKey> | null): globalThis.Promise<void> {
	const k$: __goscript_ecdsa.PrivateKey = k == null ? $.pointerTarget<__goscript_ecdsa.PrivateKey>(k) : (k as any).__isVarRef === true ? (k as any).value : (k as any).__goValue === undefined ? (k as any) : $.pointerTarget<__goscript_ecdsa.PrivateKey>(k)
	await fips140.PCT("ECDSA PCT", $.functionValue(async (): globalThis.Promise<$.GoError> => {
		let hash: $.Slice<number> = testHash()
		let drbg: __goscript_hmacdrbg.hmacDRBG | $.VarRef<__goscript_hmacdrbg.hmacDRBG> | null = await __goscript_hmacdrbg.newDRBG(__goscriptStatic1(), sha512.New, (k$ as __goscript_ecdsa.PrivateKey).d, __goscript_ecdsa.bits2octets(__goscriptStatic0(), await __goscript_ecdsa.P256(), hash), null)
		let __goscriptTuple0: any = await __goscript_ecdsa_noasm.sign({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, k, drbg, hash)
		let sig: __goscript_ecdsa.Signature | $.VarRef<__goscript_ecdsa.Signature> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return err
		}
		return await __goscript_ecdsa.Verify({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: __typeArgs?.["P"] ?? { type: { kind: $.TypeKind.Interface, methods: [$.methodSignature("Add", [["p1", { kind: $.TypeKind.Interface, methods: [] }], ["p2", { kind: $.TypeKind.Interface, methods: [] }]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("BytesX", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ScalarBaseMult", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ScalarMult", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("SetBytes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])] }, zero: () => null }}, c, $.fieldRef((k$ as __goscript_ecdsa.PrivateKey)._fields, "pub"), hash, sig)
	}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
}

export var fipsSelfTest: (() => void) | null

export async function __goscript_init_fipsSelfTest(): globalThis.Promise<void> {
	if (((fipsSelfTest) as any) === undefined) {
		fipsSelfTest = sync.OnceFunc($.functionValue(async (): globalThis.Promise<void> => {
	await fips140.CAST("ECDSA P-256 SHA2-512 sign and verify", $.functionValue(async (): globalThis.Promise<$.GoError> => {
		let k: __goscript_ecdsa.PrivateKey | $.VarRef<__goscript_ecdsa.PrivateKey> | null = testPrivateKey()
		let Z: $.Slice<number> = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]) as $.Slice<number>
		let persStr: $.Slice<number> = new Uint8Array([17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]) as $.Slice<number>
		let hash: $.Slice<number> = testHash()
		let want: __goscript_ecdsa.Signature | $.VarRef<__goscript_ecdsa.Signature> | null = new __goscript_ecdsa.Signature({R: new Uint8Array([51, 100, 150, 255, 138, 254, 170, 11, 44, 74, 26, 151, 119, 204, 132, 165, 126, 136, 31, 22, 45, 224, 41, 247, 98, 194, 52, 24, 16, 156, 105, 138]) as $.Slice<number>, S: new Uint8Array([151, 83, 46, 19, 110, 208, 155, 48, 138, 223, 79, 224, 84, 130, 20, 131, 94, 147, 199, 121, 75, 24, 163, 241, 138, 96, 174, 82, 49, 228, 46, 78]) as $.Slice<number>})
		let drbg: __goscript_hmacdrbg.hmacDRBG | $.VarRef<__goscript_hmacdrbg.hmacDRBG> | null = await __goscript_hmacdrbg.newDRBG(__goscriptStatic1(), sha512.New, Z, null, $.namedValueInterfaceValue<__goscript_hmacdrbg.personalizationString | null>((persStr as __goscript_hmacdrbg.plainPersonalizationString), "ecdsa.plainPersonalizationString", __goscriptStatic2(), __goscriptStatic3(), __goscriptStatic4()))
		let __goscriptTuple1: any = await __goscript_ecdsa_noasm.sign(__goscriptStatic0(), await __goscript_ecdsa.P256(), k, drbg, hash)
		let got: __goscript_ecdsa.Signature | $.VarRef<__goscript_ecdsa.Signature> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return err
		}
		{
			let __goscriptShadow0 = await __goscript_ecdsa_noasm.verify(__goscriptStatic0(), await __goscript_ecdsa.P256(), $.fieldRef($.pointerValue<__goscript_ecdsa.PrivateKey>(k)._fields, "pub"), hash, got)
			if (__goscriptShadow0 != null) {
				return __goscriptShadow0
			}
		}
		if (!bytes.Equal($.pointerValue<__goscript_ecdsa.Signature>(got).R, $.pointerValue<__goscript_ecdsa.Signature>(want).R) || !bytes.Equal($.pointerValue<__goscript_ecdsa.Signature>(got).S, $.pointerValue<__goscript_ecdsa.Signature>(want).S)) {
			return errors.New("unexpected result")
		}
		return null
	}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	}
}

export function __goscript_get_fipsSelfTest(): (() => void) | null {
	if (((fipsSelfTest) as any) === undefined) {
		throw new globalThis.Error("goscript package variable fipsSelfTest read before initialization")
	}
	return fipsSelfTest
}

export function __goscript_set_fipsSelfTest(__goscriptValue: (() => void) | null): void {
	fipsSelfTest = __goscriptValue
}

export var fipsSelfTestDeterministic: (() => void) | null

export async function __goscript_init_fipsSelfTestDeterministic(): globalThis.Promise<void> {
	if (((fipsSelfTestDeterministic) as any) === undefined) {
		fipsSelfTestDeterministic = sync.OnceFunc($.functionValue(async (): globalThis.Promise<void> => {
	await fips140.CAST("DetECDSA P-256 SHA2-512 sign", $.functionValue(async (): globalThis.Promise<$.GoError> => {
		let k: __goscript_ecdsa.PrivateKey | $.VarRef<__goscript_ecdsa.PrivateKey> | null = testPrivateKey()
		let hash: $.Slice<number> = testHash()
		let want: __goscript_ecdsa.Signature | $.VarRef<__goscript_ecdsa.Signature> | null = new __goscript_ecdsa.Signature({R: new Uint8Array([159, 195, 131, 50, 110, 217, 79, 142, 36, 160, 25, 239, 29, 58, 195, 85, 221, 75, 152, 174, 120, 167, 175, 211, 253, 243, 34, 28, 139, 214, 17, 123]) as $.Slice<number>, S: new Uint8Array([214, 82, 135, 65, 113, 189, 102, 209, 175, 108, 97, 221, 216, 167, 187, 210, 247, 213, 71, 112, 233, 228, 172, 10, 185, 250, 15, 189, 59, 155, 194, 254]) as $.Slice<number>})
		let drbg: __goscript_hmacdrbg.hmacDRBG | $.VarRef<__goscript_hmacdrbg.hmacDRBG> | null = await __goscript_hmacdrbg.newDRBG(__goscriptStatic1(), sha512.New, $.pointerValue<__goscript_ecdsa.PrivateKey>(k).d, __goscript_ecdsa.bits2octets(__goscriptStatic0(), await __goscript_ecdsa.P256(), hash), null)
		let __goscriptTuple2: any = await __goscript_ecdsa_noasm.sign(__goscriptStatic0(), await __goscript_ecdsa.P256(), k, drbg, hash)
		let got: __goscript_ecdsa.Signature | $.VarRef<__goscript_ecdsa.Signature> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return err
		}
		{
			let __goscriptShadow1 = await __goscript_ecdsa_noasm.verify(__goscriptStatic0(), await __goscript_ecdsa.P256(), $.fieldRef($.pointerValue<__goscript_ecdsa.PrivateKey>(k)._fields, "pub"), hash, got)
			if (__goscriptShadow1 != null) {
				return __goscriptShadow1
			}
		}
		if (!bytes.Equal($.pointerValue<__goscript_ecdsa.Signature>(got).R, $.pointerValue<__goscript_ecdsa.Signature>(want).R) || !bytes.Equal($.pointerValue<__goscript_ecdsa.Signature>(got).S, $.pointerValue<__goscript_ecdsa.Signature>(want).S)) {
			return errors.New("unexpected result")
		}
		return null
	}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	}
}

export function __goscript_get_fipsSelfTestDeterministic(): (() => void) | null {
	if (((fipsSelfTestDeterministic) as any) === undefined) {
		throw new globalThis.Error("goscript package variable fipsSelfTestDeterministic read before initialization")
	}
	return fipsSelfTestDeterministic
}

export function __goscript_set_fipsSelfTestDeterministic(__goscriptValue: (() => void) | null): void {
	fipsSelfTestDeterministic = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, P: { type: /* @__PURE__ */ $.pointerType("nistec.P256Point"), zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Add(...$.stripGenericTypeArgs(args)), AddAffine: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AddAffine(...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Bytes(...$.stripGenericTypeArgs(args)), BytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesCompressed(...$.stripGenericTypeArgs(args)), BytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BytesX(...$.stripGenericTypeArgs(args)), Double: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Double(...$.stripGenericTypeArgs(args)), Negate: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Negate(...$.stripGenericTypeArgs(args)), ScalarBaseMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarBaseMult(...$.stripGenericTypeArgs(args)), ScalarMult: (receiver: any, ...args: any[]) => $.pointerValue(receiver).ScalarMult(...$.stripGenericTypeArgs(args)), Select: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Select(...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Set(...$.stripGenericTypeArgs(args)), SetBytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetBytes(...$.stripGenericTypeArgs(args)), SetGenerator: (receiver: any, ...args: any[]) => $.pointerValue(receiver).SetGenerator(...$.stripGenericTypeArgs(args)), bytes: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytes(...$.stripGenericTypeArgs(args)), bytesCompressed: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesCompressed(...$.stripGenericTypeArgs(args)), bytesX: (receiver: any, ...args: any[]) => $.pointerValue(receiver).bytesX(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: { type: /* @__PURE__ */ $.pointerType("sha512.Digest"), zero: () => null, methods: {AppendBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).AppendBinary(...$.stripGenericTypeArgs(args)), BlockSize: (receiver: any, ...args: any[]) => $.pointerValue(receiver).BlockSize(...$.stripGenericTypeArgs(args)), Clone: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Clone(...$.stripGenericTypeArgs(args)), MarshalBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).MarshalBinary(...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Reset(...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Size(...$.stripGenericTypeArgs(args)), Sum: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Sum(...$.stripGenericTypeArgs(args)), UnmarshalBinary: (receiver: any, ...args: any[]) => $.pointerValue(receiver).UnmarshalBinary(...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Write(...$.stripGenericTypeArgs(args)), checkSum: (receiver: any, ...args: any[]) => $.pointerValue(receiver).checkSum(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({isPersonalizationString: (receiver: any, ...args: any[]) => (__goscript_hmacdrbg.plainPersonalizationString_isPersonalizationString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ecdsa.plainPersonalizationString"))
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ([$.methodSignature("isPersonalizationString")])
}
