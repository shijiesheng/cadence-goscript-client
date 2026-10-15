// Generated file based on ed25519_utils.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as ed25519 from "@goscript/crypto/ed25519/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as pem from "@goscript/encoding/pem/index.js"

import * as errors from "@goscript/errors/index.js"

import * as __goscript_rsa_utils from "./rsa_utils.gs.ts"
import "@goscript/crypto/index.js"
import "@goscript/crypto/ed25519/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/encoding/pem/index.js"
import "@goscript/errors/index.js"
import "./rsa_utils.gs.ts"

export let ErrNotEdPrivateKey: $.GoError = errors.New("key is not a valid Ed25519 private key")

export function __goscript_set_ErrNotEdPrivateKey(__goscriptValue: $.GoError): void {
	ErrNotEdPrivateKey = __goscriptValue
}

export let ErrNotEdPublicKey: $.GoError = errors.New("key is not a valid Ed25519 public key")

export function __goscript_set_ErrNotEdPublicKey(__goscriptValue: $.GoError): void {
	ErrNotEdPublicKey = __goscriptValue
}

export async function ParseEdPrivateKeyFromPEM(key: $.Slice<number>): globalThis.Promise<[crypto.PrivateKey | null, $.GoError]> {
	let err: $.GoError = null! as $.GoError

	// Parse PEM block
	let block: pem.Block | $.VarRef<pem.Block> | null = null! as pem.Block | $.VarRef<pem.Block> | null
	{
		let __goscriptTuple0: any = pem.Decode(key)
		block = __goscriptTuple0[0]
		if (block == null) {
			return [null, __goscript_rsa_utils.ErrKeyMustBePEMEncoded]
		}
	}

	// Parse the key
	let parsedKey: any = null! as any
	{
		let __goscriptTuple1: any = await x509.ParsePKCS8PrivateKey($.pointerValue<pem.Block>(block).Bytes)
		parsedKey = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
	}

	let pkey: ed25519.PrivateKey = null! as ed25519.PrivateKey
	let ok: boolean = false
	{
		let __goscriptTuple2: any = $.typeAssertTuple<ed25519.PrivateKey>(parsedKey, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PrivateKey"))
		pkey = (__goscriptTuple2[0] as ed25519.PrivateKey)
		ok = __goscriptTuple2[1]
		if (!ok) {
			return [null, ErrNotEdPrivateKey]
		}
	}

	return [$.namedValueInterfaceValue<crypto.PrivateKey | null>(pkey, "ed25519.PrivateKey", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), null]
}

export async function ParseEdPublicKeyFromPEM(key: $.Slice<number>): globalThis.Promise<[crypto.PublicKey | null, $.GoError]> {
	let err: $.GoError = null! as $.GoError

	// Parse PEM block
	let block: pem.Block | $.VarRef<pem.Block> | null = null! as pem.Block | $.VarRef<pem.Block> | null
	{
		let __goscriptTuple3: any = pem.Decode(key)
		block = __goscriptTuple3[0]
		if (block == null) {
			return [null, __goscript_rsa_utils.ErrKeyMustBePEMEncoded]
		}
	}

	// Parse the key
	let parsedKey: any = null! as any
	{
		let __goscriptTuple4: any = await x509.ParsePKIXPublicKey($.pointerValue<pem.Block>(block).Bytes)
		parsedKey = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
	}

	let pkey: ed25519.PublicKey = null! as ed25519.PublicKey
	let ok: boolean = false
	{
		let __goscriptTuple5: any = $.typeAssertTuple<ed25519.PublicKey>(parsedKey, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey"))
		pkey = (__goscriptTuple5[0] as ed25519.PublicKey)
		ok = __goscriptTuple5[1]
		if (!ok) {
			return [null, ErrNotEdPublicKey]
		}
	}

	return [$.namedValueInterfaceValue<crypto.PublicKey | null>(pkey, "ed25519.PublicKey", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Equal: (receiver: any, ...args: any[]) => (ed25519.PrivateKey_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Public: (receiver: any, ...args: any[]) => (ed25519.PrivateKey_Public as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seed: (receiver: any, ...args: any[]) => (ed25519.PrivateKey_Seed as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Sign: (receiver: any, ...args: any[]) => (ed25519.PrivateKey_Sign as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PrivateKey"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Equal", [["x", "crypto.PrivateKey"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Public", [], ["crypto.PublicKey"]), $.methodSignature("Seed", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Sign", [["rand", "io.Reader"], ["message", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["opts", "crypto.SignerOpts"]], [["signature", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Equal: (receiver: any, ...args: any[]) => (ed25519.PublicKey_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Equal", [["x", "crypto.PublicKey"]], [/* @__PURE__ */ $.basicType("bool")])])
}
