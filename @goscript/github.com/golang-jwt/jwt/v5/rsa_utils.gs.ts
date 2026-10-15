// Generated file based on rsa_utils.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as pem from "@goscript/encoding/pem/index.js"

import * as errors from "@goscript/errors/index.js"
import "@goscript/crypto/rsa/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/encoding/pem/index.js"
import "@goscript/errors/index.js"

export let ErrKeyMustBePEMEncoded: $.GoError = errors.New("invalid key: Key must be a PEM encoded PKCS1 or PKCS8 key")

export function __goscript_set_ErrKeyMustBePEMEncoded(__goscriptValue: $.GoError): void {
	ErrKeyMustBePEMEncoded = __goscriptValue
}

export let ErrNotRSAPrivateKey: $.GoError = errors.New("key is not a valid RSA private key")

export function __goscript_set_ErrNotRSAPrivateKey(__goscriptValue: $.GoError): void {
	ErrNotRSAPrivateKey = __goscriptValue
}

export let ErrNotRSAPublicKey: $.GoError = errors.New("key is not a valid RSA public key")

export function __goscript_set_ErrNotRSAPublicKey(__goscriptValue: $.GoError): void {
	ErrNotRSAPublicKey = __goscriptValue
}

export async function ParseRSAPrivateKeyFromPEM(key: $.Slice<number>): globalThis.Promise<[rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null, $.GoError]> {
	let err: $.GoError = null! as $.GoError

	// Parse PEM block
	let block: pem.Block | $.VarRef<pem.Block> | null = null! as pem.Block | $.VarRef<pem.Block> | null
	{
		let __goscriptTuple0: any = pem.Decode(key)
		block = __goscriptTuple0[0]
		if (block == null) {
			return [null, ErrKeyMustBePEMEncoded]
		}
	}

	let parsedKey: any = null! as any
	{
		let __goscriptTuple1: any = await x509.ParsePKCS1PrivateKey($.pointerValue<pem.Block>(block).Bytes)
		parsedKey = $.interfaceValue(__goscriptTuple1[0], "*rsa.PrivateKey", /* @__PURE__ */ $.pointerType("rsa.PrivateKey"))
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

	let pkey: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null = null! as rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null
	let ok: boolean = false
	{
		let __goscriptTuple3: any = $.typeAssertTuple<rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null>(parsedKey, /* @__PURE__ */ $.pointerType("rsa.PrivateKey"))
		pkey = __goscriptTuple3[0]
		ok = __goscriptTuple3[1]
		if (!ok) {
			return [null, ErrNotRSAPrivateKey]
		}
	}

	return [pkey, null]
}

export async function ParseRSAPrivateKeyFromPEMWithPassword(key: $.Slice<number>, password: string): globalThis.Promise<[rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null, $.GoError]> {
	let err: $.GoError = null! as $.GoError

	// Parse PEM block
	let block: pem.Block | $.VarRef<pem.Block> | null = null! as pem.Block | $.VarRef<pem.Block> | null
	{
		let __goscriptTuple4: any = pem.Decode(key)
		block = __goscriptTuple4[0]
		if (block == null) {
			return [null, ErrKeyMustBePEMEncoded]
		}
	}

	let parsedKey: any = null! as any

	let blockDecrypted: $.Slice<number> = null! as $.Slice<number>
	{
		let __goscriptTuple5: any = await x509.DecryptPEMBlock(block, $.stringToBytes(password))
		blockDecrypted = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
	}

	{
		let __goscriptTuple6: any = await x509.ParsePKCS1PrivateKey(blockDecrypted)
		parsedKey = $.interfaceValue(__goscriptTuple6[0], "*rsa.PrivateKey", /* @__PURE__ */ $.pointerType("rsa.PrivateKey"))
		err = __goscriptTuple6[1]
		if (err != null) {
			{
				let __goscriptTuple7: any = await x509.ParsePKCS8PrivateKey(blockDecrypted)
				parsedKey = __goscriptTuple7[0]
				err = __goscriptTuple7[1]
				if (err != null) {
					return [null, err]
				}
			}
		}
	}

	let pkey: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null = null! as rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null
	let ok: boolean = false
	{
		let __goscriptTuple8: any = $.typeAssertTuple<rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null>(parsedKey, /* @__PURE__ */ $.pointerType("rsa.PrivateKey"))
		pkey = __goscriptTuple8[0]
		ok = __goscriptTuple8[1]
		if (!ok) {
			return [null, ErrNotRSAPrivateKey]
		}
	}

	return [pkey, null]
}

export async function ParseRSAPublicKeyFromPEM(key: $.Slice<number>): globalThis.Promise<[rsa.PublicKey | $.VarRef<rsa.PublicKey> | null, $.GoError]> {
	let err: $.GoError = null! as $.GoError

	// Parse PEM block
	let block: pem.Block | $.VarRef<pem.Block> | null = null! as pem.Block | $.VarRef<pem.Block> | null
	{
		let __goscriptTuple9: any = pem.Decode(key)
		block = __goscriptTuple9[0]
		if (block == null) {
			return [null, ErrKeyMustBePEMEncoded]
		}
	}

	// Parse the key
	let parsedKey: any = null! as any
	{
		let __goscriptTuple10: any = await x509.ParsePKIXPublicKey($.pointerValue<pem.Block>(block).Bytes)
		parsedKey = __goscriptTuple10[0]
		err = __goscriptTuple10[1]
		if (err != null) {
			{
				let __goscriptTuple11: any = await x509.ParseCertificate($.pointerValue<pem.Block>(block).Bytes)
				let cert: x509.Certificate | $.VarRef<x509.Certificate> | null = __goscriptTuple11[0]
				let __goscriptShadow0 = __goscriptTuple11[1]
				if (__goscriptShadow0 == null) {
					parsedKey = $.pointerValue<x509.Certificate>(cert).PublicKey
				} else {
					{
						let __goscriptTuple12: any = await x509.ParsePKCS1PublicKey($.pointerValue<pem.Block>(block).Bytes)
						parsedKey = $.interfaceValue(__goscriptTuple12[0], "*rsa.PublicKey", /* @__PURE__ */ $.pointerType("rsa.PublicKey"))
						__goscriptShadow0 = __goscriptTuple12[1]
						if (__goscriptShadow0 != null) {
							return [null, __goscriptShadow0]
						}
					}
				}
			}
		}
	}

	let pkey: rsa.PublicKey | $.VarRef<rsa.PublicKey> | null = null! as rsa.PublicKey | $.VarRef<rsa.PublicKey> | null
	let ok: boolean = false
	{
		let __goscriptTuple13: any = $.typeAssertTuple<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(parsedKey, /* @__PURE__ */ $.pointerType("rsa.PublicKey"))
		pkey = __goscriptTuple13[0]
		ok = __goscriptTuple13[1]
		if (!ok) {
			return [null, ErrNotRSAPublicKey]
		}
	}

	return [pkey, null]
}
