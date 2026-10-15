// Generated file based on crypto.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as hash2 from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"

import * as strconv from "@goscript/strconv/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"
import "@goscript/strconv/index.js"

export type Hash = number

$.registerNamedValueType(
	"crypto.Hash",
	{Available: (receiver: any, ...args: any[]) => (Hash_Available as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), HashFunc: (receiver: any, ...args: any[]) => (Hash_HashFunc as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), New: (receiver: any, ...args: any[]) => (Hash_New as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => (Hash_Size as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Hash_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Available", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HashFunc", [], [/* @__PURE__ */ $.basicType("uint", "crypto.Hash")]), $.methodSignature("New", [], ["hash.Hash"]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*crypto.Hash",
	{Available: (receiver: any, ...args: any[]) => (Hash_Available as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), HashFunc: (receiver: any, ...args: any[]) => (Hash_HashFunc as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), New: (receiver: any, ...args: any[]) => (Hash_New as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => (Hash_Size as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Hash_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Available", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HashFunc", [], [/* @__PURE__ */ $.basicType("uint", "crypto.Hash")]), $.methodSignature("New", [], ["hash.Hash"]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type PublicKey = any

$.registerInterfaceType(
	"crypto.PublicKey",
	null,
	[]
);

export type PrivateKey = any

$.registerInterfaceType(
	"crypto.PrivateKey",
	null,
	[]
);

export type Signer = {
	Public(): PublicKey | null
	Sign(rand: io.Reader | null, digest: $.Slice<number>, opts: SignerOpts | null): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
}

$.registerInterfaceType(
	"crypto.Signer",
	null,
	[$.methodSignature("Public", [], ["crypto.PublicKey"]), $.methodSignature("Sign", [["rand", "io.Reader"], ["digest", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["opts", "crypto.SignerOpts"]], [["signature", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]])]
);

export type MessageSigner = {
	Public(): PublicKey | null
	Sign(rand: io.Reader | null, digest: $.Slice<number>, opts: SignerOpts | null): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	SignMessage(rand: io.Reader | null, msg: $.Slice<number>, opts: SignerOpts | null): [$.Slice<number>, $.GoError]
}

$.registerInterfaceType(
	"crypto.MessageSigner",
	null,
	[$.methodSignature("Public", [], ["crypto.PublicKey"]), $.methodSignature("Sign", [["rand", "io.Reader"], ["digest", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["opts", "crypto.SignerOpts"]], [["signature", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]]), $.methodSignature("SignMessage", [["rand", "io.Reader"], ["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["opts", "crypto.SignerOpts"]], [["signature", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]])]
);

export type SignerOpts = {
	HashFunc(): Hash
}

$.registerInterfaceType(
	"crypto.SignerOpts",
	null,
	[$.methodSignature("HashFunc", [], [/* @__PURE__ */ $.basicType("uint", "crypto.Hash")])]
);

export type Decrypter = {
	Decrypt(rand: io.Reader | null, msg: $.Slice<number>, opts: DecrypterOpts | null): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	Public(): PublicKey | null
}

$.registerInterfaceType(
	"crypto.Decrypter",
	null,
	[$.methodSignature("Decrypt", [["rand", "io.Reader"], ["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["opts", "crypto.DecrypterOpts"]], [["plaintext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]]), $.methodSignature("Public", [], ["crypto.PublicKey"])]
);

export type DecrypterOpts = any

$.registerInterfaceType(
	"crypto.DecrypterOpts",
	null,
	[]
);

export type hashUnavailableError = number

$.registerNamedValueType(
	"crypto.hashUnavailableError",
	{Error: (receiver: any, ...args: any[]) => (hashUnavailableError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*crypto.hashUnavailableError",
	{Error: (receiver: any, ...args: any[]) => (hashUnavailableError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Decapsulator = {
	Decapsulate(ciphertext: $.Slice<number>): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	Encapsulator(): Encapsulator | null
}

$.registerInterfaceType(
	"crypto.Decapsulator",
	null,
	[$.methodSignature("Decapsulate", [["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["sharedKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]]), $.methodSignature("Encapsulator", [], ["crypto.Encapsulator"])]
);

export type Encapsulator = {
	Bytes(): $.Slice<number>
	Encapsulate(): [$.Slice<number>, $.Slice<number>] | globalThis.Promise<[$.Slice<number>, $.Slice<number>]>
}

$.registerInterfaceType(
	"crypto.Encapsulator",
	null,
	[$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Encapsulate", [], [["sharedKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]])]
);

export const MD4: Hash = 1

export const MD5: Hash = 2

export const SHA1: Hash = 3

export const SHA224: Hash = 4

export const SHA256: Hash = 5

export const SHA384: Hash = 6

export const SHA512: Hash = 7

export const MD5SHA1: Hash = 8

export const RIPEMD160: Hash = 9

export const SHA3_224: Hash = 10

export const SHA3_256: Hash = 11

export const SHA3_384: Hash = 12

export const SHA3_512: Hash = 13

export const SHA512_224: Hash = 14

export const SHA512_256: Hash = 15

export const BLAKE2s_256: Hash = 16

export const BLAKE2b_256: Hash = 17

export const BLAKE2b_384: Hash = 18

export const BLAKE2b_512: Hash = 19

export const MLDSAMu: Hash = 20

export const maxHash: Hash = 21

export function Hash_HashFunc(h: Hash): Hash {
	return h
}

export function Hash_String(h: Hash): string {
	switch (h) {
		case 1:
		{
			return "MD4"
			break
		}
		case 2:
		{
			return "MD5"
			break
		}
		case 3:
		{
			return "SHA-1"
			break
		}
		case 4:
		{
			return "SHA-224"
			break
		}
		case 5:
		{
			return "SHA-256"
			break
		}
		case 6:
		{
			return "SHA-384"
			break
		}
		case 7:
		{
			return "SHA-512"
			break
		}
		case 8:
		{
			return "MD5+SHA1"
			break
		}
		case 9:
		{
			return "RIPEMD-160"
			break
		}
		case 10:
		{
			return "SHA3-224"
			break
		}
		case 11:
		{
			return "SHA3-256"
			break
		}
		case 12:
		{
			return "SHA3-384"
			break
		}
		case 13:
		{
			return "SHA3-512"
			break
		}
		case 14:
		{
			return "SHA-512/224"
			break
		}
		case 15:
		{
			return "SHA-512/256"
			break
		}
		case 16:
		{
			return "BLAKE2s-256"
			break
		}
		case 17:
		{
			return "BLAKE2b-256"
			break
		}
		case 18:
		{
			return "BLAKE2b-384"
			break
		}
		case 19:
		{
			return "BLAKE2b-512"
			break
		}
		case 20:
		{
			return "ML-DSA \xce\xbc message representative"
			break
		}
		default:
		{
			return $.concatString("unknown hash value ", strconv.Itoa($.int(h)))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export let digestSizes: $.Slice<number> = new Uint8Array([0, 16, 16, 20, 28, 32, 48, 64, 36, 20, 28, 32, 48, 64, 28, 32, 32, 32, 48, 64, 64]) as $.Slice<number>

export function __goscript_set_digestSizes(__goscriptValue: $.Slice<number>): void {
	digestSizes = __goscriptValue
}

export function Hash_Size(h: Hash): number {
	if ((h > 0) && (h < 21)) {
		return $.int($.arrayIndex(digestSizes!, h))
	}
	$.panic("crypto: Size of unknown hash function")
	throw new globalThis.Error("goscript: unreachable return")
}

export let hashes: $.Slice<(() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null> = $.makeSlice<(() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null>(21)

export function __goscript_set_hashes(__goscriptValue: $.Slice<(() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null>): void {
	hashes = __goscriptValue
}

export async function Hash_New(h: Hash): globalThis.Promise<hash2.Hash | null> {
	if ((h > 0) && (h < 21)) {
		let f: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null = $.arrayIndex(hashes!, h)
		if (f != null) {
			return f!()
		}
	}
	$.panic($.concatString("crypto: requested hash function unavailable: ", Hash_String(h)))
	throw new globalThis.Error("goscript: unreachable return")
}

export function Hash_Available(h: Hash): boolean {
	return (h < 21) && ($.arrayIndex(hashes!, h) != null)
}

export function RegisterHash(h: Hash, f: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null): void {
	if ((h == 0) || (h >= 21)) {
		$.panic("crypto: RegisterHash of unknown hash function")
	}
	if (h == 20) {
		$.panic("crypto: cannot RegisterHash for MLDSAMu")
	}
	$.sliceElems(hashes!)[$.sliceSlot(hashes!, h)] = f
}

export async function SignMessage(signer: Signer | null, rand: io.Reader | null, msg: $.Slice<number>, opts: SignerOpts | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let signature: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	{
		let [ms, ok] = $.typeAssertTuple<MessageSigner | null>(signer, "crypto.MessageSigner")
		if (ok) {
			return (ms !== null && (ms as any).__isVarRef !== true && (ms as any).__goValue === undefined ? (ms as Exclude<MessageSigner, null>) : $.pointerValue<Exclude<MessageSigner, null>>(ms)).SignMessage(rand, msg, opts)
		}
	}
	{
		let __goscriptShadow0 = (__goscriptAwait = (opts !== null && (opts as any).__isVarRef !== true && (opts as any).__goValue === undefined ? (opts as Exclude<SignerOpts, null>) : $.pointerValue<Exclude<SignerOpts, null>>(opts)).HashFunc(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (__goscriptShadow0 != 0) {
			if (!Hash_Available(__goscriptShadow0)) {
				return [null, $.namedValueInterfaceValue<$.GoError>($.uint(__goscriptShadow0, 64), "crypto.hashUnavailableError", {"Error": hashUnavailableError_Error}, /* @__PURE__ */ $.basicType("uint", "crypto.hashUnavailableError"))]
			}
			let h = await Hash_New(__goscriptShadow0)
			await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Write(msg)
			msg = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Sum(null)
		}
	}
	return (signer !== null && (signer as any).__isVarRef !== true && (signer as any).__goValue === undefined ? (signer as Exclude<Signer, null>) : $.pointerValue<Exclude<Signer, null>>(signer)).Sign(rand, msg, opts)
}

export function hashUnavailableError_Error(h: hashUnavailableError): string {
	return $.concatString("crypto: requested hash function unavailable: ", Hash_String($.uint(h, 64)))
}

var __goscriptAwait: any
