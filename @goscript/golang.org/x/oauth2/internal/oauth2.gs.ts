// Generated file based on oauth2.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as pem from "@goscript/encoding/pem/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"
import "@goscript/crypto/rsa/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/encoding/pem/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"

export async function ParseKey(key: $.Slice<number>): globalThis.Promise<[rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null, $.GoError]> {
	let __goscriptTuple0: any = pem.Decode(key)
	let block: pem.Block | $.VarRef<pem.Block> | null = __goscriptTuple0[0]
	if (block != null) {
		key = $.pointerValue<pem.Block>(block).Bytes
	}
	let [parsedKey, err] = await x509.ParsePKCS8PrivateKey(key)
	if (err != null) {
		let __goscriptTuple1: any = await x509.ParsePKCS1PrivateKey(key)
		parsedKey = $.interfaceValue(__goscriptTuple1[0], "*rsa.PrivateKey", /* @__PURE__ */ $.pointerType("rsa.PrivateKey"))
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, fmt.Errorf("private key should be a PEM or plain PKCS1 or PKCS8; parse error: %v", (err as any))]
		}
	}
	let __goscriptTuple2: any = $.typeAssertTuple<rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null>(parsedKey, /* @__PURE__ */ $.pointerType("rsa.PrivateKey"))
	let parsed: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null = __goscriptTuple2[0]
	let ok = __goscriptTuple2[1]
	if (!ok) {
		return [null, errors.New("private key is invalid")]
	}
	return [parsed, null]
}
