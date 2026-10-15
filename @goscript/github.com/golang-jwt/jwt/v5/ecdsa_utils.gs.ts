// Generated file based on ecdsa_utils.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as ecdsa from "@goscript/crypto/ecdsa/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as pem from "@goscript/encoding/pem/index.js"

import * as errors from "@goscript/errors/index.js"

import * as elliptic from "@goscript/crypto/elliptic/index.js"

import * as __goscript_rsa_utils from "./rsa_utils.gs.ts"
import "@goscript/crypto/ecdsa/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/encoding/pem/index.js"
import "@goscript/errors/index.js"
import "@goscript/crypto/elliptic/index.js"
import "./rsa_utils.gs.ts"

export let ErrNotECPublicKey: $.GoError = errors.New("key is not a valid ECDSA public key")

export function __goscript_set_ErrNotECPublicKey(__goscriptValue: $.GoError): void {
	ErrNotECPublicKey = __goscriptValue
}

export let ErrNotECPrivateKey: $.GoError = errors.New("key is not a valid ECDSA private key")

export function __goscript_set_ErrNotECPrivateKey(__goscriptValue: $.GoError): void {
	ErrNotECPrivateKey = __goscriptValue
}

export async function ParseECPrivateKeyFromPEM(key: $.Slice<number>): globalThis.Promise<[ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null, $.GoError]> {
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
		let __goscriptTuple1: any = await x509.ParseECPrivateKey($.pointerValue<pem.Block>(block).Bytes)
		parsedKey = $.interfaceValue(__goscriptTuple1[0], "*ecdsa.PrivateKey", /* @__PURE__ */ $.pointerType("ecdsa.PrivateKey"))
		err = __goscriptTuple1[1]
		if (err != null) {
			{
				let __goscriptTuple2: any = await x509.ParsePKCS8PrivateKey($.pointerValue<pem.Block>(block).Bytes)
				parsedKey = __goscriptTuple2[0]
				err = __goscriptTuple2[1]
				if (err != null) {
					return [null, err]
				}
			}
		}
	}

	let pkey: ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null = null! as ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null
	let ok: boolean = false
	{
		let __goscriptTuple3: any = $.typeAssertTuple<ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null>(parsedKey, /* @__PURE__ */ $.pointerType("ecdsa.PrivateKey"))
		pkey = __goscriptTuple3[0]
		ok = __goscriptTuple3[1]
		if (!ok) {
			return [null, ErrNotECPrivateKey]
		}
	}

	return [pkey, null]
}

export async function ParseECPublicKeyFromPEM(key: $.Slice<number>): globalThis.Promise<[ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null, $.GoError]> {
	let err: $.GoError = null! as $.GoError

	// Parse PEM block
	let block: pem.Block | $.VarRef<pem.Block> | null = null! as pem.Block | $.VarRef<pem.Block> | null
	{
		let __goscriptTuple4: any = pem.Decode(key)
		block = __goscriptTuple4[0]
		if (block == null) {
			return [null, __goscript_rsa_utils.ErrKeyMustBePEMEncoded]
		}
	}

	// Parse the key
	let parsedKey: any = null! as any
	{
		let __goscriptTuple5: any = await x509.ParsePKIXPublicKey($.pointerValue<pem.Block>(block).Bytes)
		parsedKey = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			{
				let __goscriptTuple6: any = await x509.ParseCertificate($.pointerValue<pem.Block>(block).Bytes)
				let cert: x509.Certificate | $.VarRef<x509.Certificate> | null = __goscriptTuple6[0]
				let __goscriptShadow0 = __goscriptTuple6[1]
				if (__goscriptShadow0 == null) {
					parsedKey = $.pointerValue<x509.Certificate>(cert).PublicKey
				} else {
					return [null, __goscriptShadow0]
				}
			}
		}
	}

	let pkey: ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null = null! as ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null
	let ok: boolean = false
	{
		let __goscriptTuple7: any = $.typeAssertTuple<ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null>(parsedKey, /* @__PURE__ */ $.pointerType("ecdsa.PublicKey"))
		pkey = __goscriptTuple7[0]
		ok = __goscriptTuple7[1]
		if (!ok) {
			return [null, ErrNotECPublicKey]
		}
	}

	return [pkey, null]
}
