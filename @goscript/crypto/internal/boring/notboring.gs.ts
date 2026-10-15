// Generated file based on notboring.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as cipher from "@goscript/crypto/cipher/index.js"

import * as sig2 from "@goscript/crypto/internal/boring/sig/index.js"

import * as hash2 from "@goscript/hash/index.js"

import type * as __goscript_doc from "./doc.gs.ts"
import "@goscript/crypto/index.js"
import "@goscript/crypto/cipher/index.js"
import "@goscript/crypto/internal/boring/sig/index.js"
import "@goscript/hash/index.js"

$.registerTypePackagePath("crypto/internal/boring", ["boring.randReader", "boring.PublicKeyECDSA", "boring.PrivateKeyECDSA", "boring.PublicKeyRSA", "boring.PrivateKeyRSA", "boring.PublicKeyECDH", "boring.PrivateKeyECDH"])

export type randReader = number

$.registerNamedValueType(
	"boring.randReader",
	{Read: (receiver: any, ...args: any[]) => (randReader_Read as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"])]
);

$.registerNamedValueType(
	"*boring.randReader",
	{Read: (receiver: any, ...args: any[]) => (randReader_Read as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"])]
);

export class PublicKeyECDSA {
	public get _blank0(): number {
		return this._fields._blank0
	}

	public set _blank0(value: number) {
		this._fields._blank0 = value
	}

	public _fields: {
		_blank0: number
	}

	constructor(init?: Partial<{_blank0?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PublicKeyECDSA {
		return new PublicKeyECDSA(this, true)
	}

	public __goscriptAssign(source: PublicKeyECDSA): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = values._blank0
	}

	static __typeInfo = $.registerStructType(
		"boring.PublicKeyECDSA",
		() => new PublicKeyECDSA(),
		() => [],
		PublicKeyECDSA,
		() => [/* @__PURE__ */ $.structField("_", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { key: "_blank0", pkgPath: "crypto/internal/boring" })]
	)
}

export class PrivateKeyECDSA {
	public get _blank0(): number {
		return this._fields._blank0
	}

	public set _blank0(value: number) {
		this._fields._blank0 = value
	}

	public _fields: {
		_blank0: number
	}

	constructor(init?: Partial<{_blank0?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PrivateKeyECDSA {
		return new PrivateKeyECDSA(this, true)
	}

	public __goscriptAssign(source: PrivateKeyECDSA): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = values._blank0
	}

	static __typeInfo = $.registerStructType(
		"boring.PrivateKeyECDSA",
		() => new PrivateKeyECDSA(),
		() => [],
		PrivateKeyECDSA,
		() => [/* @__PURE__ */ $.structField("_", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { key: "_blank0", pkgPath: "crypto/internal/boring" })]
	)
}

export class PublicKeyRSA {
	public get _blank0(): number {
		return this._fields._blank0
	}

	public set _blank0(value: number) {
		this._fields._blank0 = value
	}

	public _fields: {
		_blank0: number
	}

	constructor(init?: Partial<{_blank0?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PublicKeyRSA {
		return new PublicKeyRSA(this, true)
	}

	public __goscriptAssign(source: PublicKeyRSA): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = values._blank0
	}

	static __typeInfo = $.registerStructType(
		"boring.PublicKeyRSA",
		() => new PublicKeyRSA(),
		() => [],
		PublicKeyRSA,
		() => [/* @__PURE__ */ $.structField("_", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { key: "_blank0", pkgPath: "crypto/internal/boring" })]
	)
}

export class PrivateKeyRSA {
	public get _blank0(): number {
		return this._fields._blank0
	}

	public set _blank0(value: number) {
		this._fields._blank0 = value
	}

	public _fields: {
		_blank0: number
	}

	constructor(init?: Partial<{_blank0?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PrivateKeyRSA {
		return new PrivateKeyRSA(this, true)
	}

	public __goscriptAssign(source: PrivateKeyRSA): void {
		const target = this._fields
		const values = source._fields
		target._blank0 = values._blank0
	}

	static __typeInfo = $.registerStructType(
		"boring.PrivateKeyRSA",
		() => new PrivateKeyRSA(),
		() => [],
		PrivateKeyRSA,
		() => [/* @__PURE__ */ $.structField("_", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { key: "_blank0", pkgPath: "crypto/internal/boring" })]
	)
}

export class PublicKeyECDH {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PublicKeyECDH {
		return new PublicKeyECDH(this, true)
	}

	public __goscriptAssign(source: PublicKeyECDH): void {
	}

	public Bytes(): $.Slice<number> {
		$.panic("boringcrypto: not available")
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"boring.PublicKeyECDH",
		() => new PublicKeyECDH(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		PublicKeyECDH,
		() => []
	)
}

export class PrivateKeyECDH {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PrivateKeyECDH {
		return new PrivateKeyECDH(this, true)
	}

	public __goscriptAssign(source: PrivateKeyECDH): void {
	}

	public PublicKey(): [PublicKeyECDH | $.VarRef<PublicKeyECDH> | null, $.GoError] {
		$.panic("boringcrypto: not available")
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"boring.PrivateKeyECDH",
		() => new PrivateKeyECDH(),
		() => [$.methodSignature("PublicKey", [], [/* @__PURE__ */ $.pointerType("boring.PublicKeyECDH"), "error"], true)],
		PrivateKeyECDH,
		() => []
	)
}

export const available: boolean = false

export const RandReader: randReader = 0

export function Unreachable(): void {
	// Code that's unreachable when using BoringCrypto
	// is exactly the code we want to detect for reporting
	// standard Go crypto.
	sig2.StandardCrypto()
}

export function UnreachableExceptTests(): void {
}

export function randReader_Read(recv: randReader, b: $.Slice<number>): [number, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function NewSHA1(): hash2.Hash | null {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function NewSHA224(): hash2.Hash | null {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function NewSHA256(): hash2.Hash | null {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function NewSHA384(): hash2.Hash | null {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function NewSHA512(): hash2.Hash | null {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function SHA1(_p0: $.Slice<number>): Uint8Array {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function SHA224(_p0: $.Slice<number>): Uint8Array {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function SHA256(_p0: $.Slice<number>): Uint8Array {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function SHA384(_p0: $.Slice<number>): Uint8Array {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function SHA512(_p0: $.Slice<number>): Uint8Array {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function NewHMAC(h: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null, key: $.Slice<number>): hash2.Hash | null {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function NewAESCipher(key: $.Slice<number>): [cipher.Block | null, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function NewGCMTLS(_p0: cipher.Block | null): [cipher.AEAD | null, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function NewGCMTLS13(_p0: cipher.Block | null): [cipher.AEAD | null, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function GenerateKeyECDSA(curve: string): [__goscript_doc.BigInt, __goscript_doc.BigInt, __goscript_doc.BigInt, $.GoError] {
	let X: __goscript_doc.BigInt = null! as __goscript_doc.BigInt
	let Y: __goscript_doc.BigInt = null! as __goscript_doc.BigInt
	let D: __goscript_doc.BigInt = null! as __goscript_doc.BigInt
	let err: $.GoError = null! as $.GoError
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function NewPrivateKeyECDSA(curve: string, X: __goscript_doc.BigInt, Y: __goscript_doc.BigInt, D: __goscript_doc.BigInt): [PrivateKeyECDSA | $.VarRef<PrivateKeyECDSA> | null, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function NewPublicKeyECDSA(curve: string, X: __goscript_doc.BigInt, Y: __goscript_doc.BigInt): [PublicKeyECDSA | $.VarRef<PublicKeyECDSA> | null, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function SignMarshalECDSA(priv: PrivateKeyECDSA | $.VarRef<PrivateKeyECDSA> | null, hash: $.Slice<number>): [$.Slice<number>, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function VerifyECDSA(pub: PublicKeyECDSA | $.VarRef<PublicKeyECDSA> | null, hash: $.Slice<number>, sig: $.Slice<number>): boolean {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function DecryptRSAOAEP(h: hash2.Hash | null, mgfHash: hash2.Hash | null, priv: PrivateKeyRSA | $.VarRef<PrivateKeyRSA> | null, ciphertext: $.Slice<number>, label: $.Slice<number>): [$.Slice<number>, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function DecryptRSAPKCS1(priv: PrivateKeyRSA | $.VarRef<PrivateKeyRSA> | null, ciphertext: $.Slice<number>): [$.Slice<number>, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function DecryptRSANoPadding(priv: PrivateKeyRSA | $.VarRef<PrivateKeyRSA> | null, ciphertext: $.Slice<number>): [$.Slice<number>, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function EncryptRSAOAEP(h: hash2.Hash | null, mgfHash: hash2.Hash | null, pub: PublicKeyRSA | $.VarRef<PublicKeyRSA> | null, msg: $.Slice<number>, label: $.Slice<number>): [$.Slice<number>, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function EncryptRSAPKCS1(pub: PublicKeyRSA | $.VarRef<PublicKeyRSA> | null, msg: $.Slice<number>): [$.Slice<number>, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function EncryptRSANoPadding(pub: PublicKeyRSA | $.VarRef<PublicKeyRSA> | null, msg: $.Slice<number>): [$.Slice<number>, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function GenerateKeyRSA(bits: number): [__goscript_doc.BigInt, __goscript_doc.BigInt, __goscript_doc.BigInt, __goscript_doc.BigInt, __goscript_doc.BigInt, __goscript_doc.BigInt, __goscript_doc.BigInt, __goscript_doc.BigInt, $.GoError] {
	let N: __goscript_doc.BigInt = null! as __goscript_doc.BigInt
	let E: __goscript_doc.BigInt = null! as __goscript_doc.BigInt
	let D: __goscript_doc.BigInt = null! as __goscript_doc.BigInt
	let P: __goscript_doc.BigInt = null! as __goscript_doc.BigInt
	let Q: __goscript_doc.BigInt = null! as __goscript_doc.BigInt
	let Dp: __goscript_doc.BigInt = null! as __goscript_doc.BigInt
	let Dq: __goscript_doc.BigInt = null! as __goscript_doc.BigInt
	let Qinv: __goscript_doc.BigInt = null! as __goscript_doc.BigInt
	let err: $.GoError = null! as $.GoError
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function NewPrivateKeyRSA(N: __goscript_doc.BigInt, E: __goscript_doc.BigInt, D: __goscript_doc.BigInt, P: __goscript_doc.BigInt, Q: __goscript_doc.BigInt, Dp: __goscript_doc.BigInt, Dq: __goscript_doc.BigInt, Qinv: __goscript_doc.BigInt): [PrivateKeyRSA | $.VarRef<PrivateKeyRSA> | null, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function NewPublicKeyRSA(N: __goscript_doc.BigInt, E: __goscript_doc.BigInt): [PublicKeyRSA | $.VarRef<PublicKeyRSA> | null, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function SignRSAPKCS1v15(priv: PrivateKeyRSA | $.VarRef<PrivateKeyRSA> | null, h: crypto.Hash, hashed: $.Slice<number>): [$.Slice<number>, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function SignRSAPSS(priv: PrivateKeyRSA | $.VarRef<PrivateKeyRSA> | null, h: crypto.Hash, hashed: $.Slice<number>, saltLen: number): [$.Slice<number>, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function VerifyRSAPKCS1v15(pub: PublicKeyRSA | $.VarRef<PublicKeyRSA> | null, h: crypto.Hash, hashed: $.Slice<number>, sig: $.Slice<number>): $.GoError {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function VerifyRSAPSS(pub: PublicKeyRSA | $.VarRef<PublicKeyRSA> | null, h: crypto.Hash, hashed: $.Slice<number>, sig: $.Slice<number>, saltLen: number): $.GoError {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function ECDH(_p0: PrivateKeyECDH | $.VarRef<PrivateKeyECDH> | null, _p1: PublicKeyECDH | $.VarRef<PublicKeyECDH> | null): [$.Slice<number>, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function GenerateKeyECDH(_p0: string): [PrivateKeyECDH | $.VarRef<PrivateKeyECDH> | null, $.Slice<number>, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function NewPrivateKeyECDH(_p0: string, _p1: $.Slice<number>): [PrivateKeyECDH | $.VarRef<PrivateKeyECDH> | null, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}

export function NewPublicKeyECDH(_p0: string, _p1: $.Slice<number>): [PublicKeyECDH | $.VarRef<PublicKeyECDH> | null, $.GoError] {
	$.panic("boringcrypto: not available")
	throw new globalThis.Error("goscript: unreachable return")
}
