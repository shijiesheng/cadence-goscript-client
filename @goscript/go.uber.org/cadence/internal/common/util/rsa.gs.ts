// Generated file based on rsa.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as pem from "@goscript/encoding/pem/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/crypto/rsa/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/encoding/pem/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal/common/util", ["util.KeyType"])

export type KeyType = string

export const KeyTypePrivate: KeyType = "private key"

export const KeyTypePublic: KeyType = "public key"

export async function loadRSAKey(keyString: $.Slice<number>, keyType: KeyType): globalThis.Promise<[any, $.GoError]> {
	let __goscriptTuple0: any = pem.Decode(keyString)
	let block: pem.Block | $.VarRef<pem.Block> | null = __goscriptTuple0[0]
	let block$: pem.Block = block == null ? $.pointerTarget<pem.Block>(block) : (block as any).__isVarRef === true ? (block as any).value : (block as any).__goValue === undefined ? (block as any) : $.pointerTarget<pem.Block>(block)
	if ((block == null) || (!$.stringEqual(strings.ToLower((block$ as pem.Block).Type), strings.ToLower(keyType)))) {
		return [null, fmt.Errorf("failed to parse PEM block containing the %s", $.namedValueInterfaceValue<any>(keyType, "util.KeyType", {}, /* @__PURE__ */ $.basicType("string", "util.KeyType")))]
	}

	switch (keyType) {
		case "private key":
		{
			let [key, err] = await x509.ParsePKCS8PrivateKey((block$ as pem.Block).Bytes)
			if (err != null) {
				return [null, fmt.Errorf("failed to parse DER encoded %s: %s", $.namedValueInterfaceValue<any>(keyType, "util.KeyType", {}, /* @__PURE__ */ $.basicType("string", "util.KeyType")), (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]
			}
			return [key, null]
			break
		}
		case "public key":
		{
			let [key, err] = await x509.ParsePKIXPublicKey((block$ as pem.Block).Bytes)
			if (err != null) {
				return [null, fmt.Errorf("failed to parse DER encoded %s: %s", $.namedValueInterfaceValue<any>(keyType, "util.KeyType", {}, /* @__PURE__ */ $.basicType("string", "util.KeyType")), (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]
			}
			return [key, null]
			break
		}
		default:
		{
			return [null, fmt.Errorf("invalid Key Type")]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function LoadRSAPublicKey(key: $.Slice<number>): globalThis.Promise<[rsa.PublicKey | $.VarRef<rsa.PublicKey> | null, $.GoError]> {
	let [rsaKey, err] = await loadRSAKey(key, "public key")
	if (err != null) {
		return [null, err]
	}
	return [((rsaKey as any)?.__goType === "*rsa.PublicKey" && (rsaKey as any).__goValue === undefined && (rsaKey as any).__isTypedNil !== true ? ((rsaKey as any) as rsa.PublicKey | $.VarRef<rsa.PublicKey> | null) : $.mustTypeAssert<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(rsaKey, /* @__PURE__ */ $.pointerType("rsa.PublicKey"))), err]
}

export async function LoadRSAPrivateKey(key: $.Slice<number>): globalThis.Promise<[rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null, $.GoError]> {
	let [rsaKey, err] = await loadRSAKey(key, "private key")
	if (err != null) {
		return [null, err]
	}
	return [((rsaKey as any)?.__goType === "*rsa.PrivateKey" && (rsaKey as any).__goValue === undefined && (rsaKey as any).__isTypedNil !== true ? ((rsaKey as any) as rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null) : $.mustTypeAssert<rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null>(rsaKey, /* @__PURE__ */ $.pointerType("rsa.PrivateKey"))), err]
}

var __goscriptAwait: any
