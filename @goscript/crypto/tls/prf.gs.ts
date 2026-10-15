// Generated file based on prf.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as hmac from "@goscript/crypto/hmac/index.js"

import * as tls12 from "@goscript/crypto/internal/fips140/tls12/index.js"

import * as md5 from "@goscript/crypto/md5/index.js"

import * as sha1 from "@goscript/crypto/sha1/index.js"

import * as sha256 from "@goscript/crypto/sha256/index.js"

import * as sha512 from "@goscript/crypto/sha512/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as hash2 from "@goscript/hash/index.js"

import * as context2 from "@goscript/context/index.js"

import type * as cipher from "@goscript/crypto/cipher/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_cipher_suites from "./cipher_suites.gs.ts"

import * as __goscript_common from "./common.gs.ts"

import * as __goscript_common_string from "./common_string.gs.ts"

import type * as __goscript_handshake_messages from "./handshake_messages.gs.ts"

import type * as __goscript_key_agreement from "./key_agreement.gs.ts"

import * as __goscript_ticket from "./ticket.gs.ts"
import "@goscript/crypto/index.js"
import "@goscript/crypto/hmac/index.js"
import "@goscript/crypto/internal/fips140/tls12/index.js"
import "@goscript/crypto/md5/index.js"
import "@goscript/crypto/sha1/index.js"
import "@goscript/crypto/sha256/index.js"
import "@goscript/crypto/sha512/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/hash/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./cipher_suites.gs.ts"
import "./common.gs.ts"
import "./common_string.gs.ts"
import "./ticket.gs.ts"

$.registerTypePackagePath("crypto/tls", ["tls.prfFunc", "tls.finishedHash"])

export type prfFunc = ((secret: $.Slice<number>, label: string, seed: $.Slice<number>, keyLen: number) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null

export class finishedHash {
	public get client(): hash2.Hash | null {
		return this._fields.client
	}

	public set client(value: hash2.Hash | null) {
		this._fields.client = value
	}

	public get server(): hash2.Hash | null {
		return this._fields.server
	}

	public set server(value: hash2.Hash | null) {
		this._fields.server = value
	}

	// Prior to TLS 1.2, an additional MD5 hash is required.
	public get clientMD5(): hash2.Hash | null {
		return this._fields.clientMD5
	}

	public set clientMD5(value: hash2.Hash | null) {
		this._fields.clientMD5 = value
	}

	public get serverMD5(): hash2.Hash | null {
		return this._fields.serverMD5
	}

	public set serverMD5(value: hash2.Hash | null) {
		this._fields.serverMD5 = value
	}

	// In TLS 1.2, a full buffer is sadly required.
	public get buffer(): $.Slice<number> {
		return this._fields.buffer
	}

	public set buffer(value: $.Slice<number>) {
		this._fields.buffer = value
	}

	public get version(): number {
		return this._fields.version
	}

	public set version(value: number) {
		this._fields.version = value
	}

	public get prf(): ((secret: $.Slice<number>, label: string, seed: $.Slice<number>, keyLen: number) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null {
		return this._fields.prf
	}

	public set prf(value: ((secret: $.Slice<number>, label: string, seed: $.Slice<number>, keyLen: number) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null) {
		this._fields.prf = value
	}

	public _fields: {
		client: hash2.Hash | null
		server: hash2.Hash | null
		clientMD5: hash2.Hash | null
		serverMD5: hash2.Hash | null
		buffer: $.Slice<number>
		version: number
		prf: ((secret: $.Slice<number>, label: string, seed: $.Slice<number>, keyLen: number) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null
	}

	constructor(init?: Partial<{client?: hash2.Hash | null, server?: hash2.Hash | null, clientMD5?: hash2.Hash | null, serverMD5?: hash2.Hash | null, buffer?: $.Slice<number>, version?: number, prf?: ((secret: $.Slice<number>, label: string, seed: $.Slice<number>, keyLen: number) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			client: init?.client ?? (null! as hash2.Hash | null),
			server: init?.server ?? (null! as hash2.Hash | null),
			clientMD5: init?.clientMD5 ?? (null! as hash2.Hash | null),
			serverMD5: init?.serverMD5 ?? (null! as hash2.Hash | null),
			buffer: init?.buffer ?? (null! as $.Slice<number>),
			version: init?.version ?? (0 as number),
			prf: init?.prf ?? (null! as ((secret: $.Slice<number>, label: string, seed: $.Slice<number>, keyLen: number) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): finishedHash {
		return new finishedHash(this, true)
	}

	public __goscriptAssign(source: finishedHash): void {
		const target = this._fields
		const values = source._fields
		target.client = $.assignFieldValue(target.client, values.client, "hash.Hash")
		target.server = $.assignFieldValue(target.server, values.server, "hash.Hash")
		target.clientMD5 = $.assignFieldValue(target.clientMD5, values.clientMD5, "hash.Hash")
		target.serverMD5 = $.assignFieldValue(target.serverMD5, values.serverMD5, "hash.Hash")
		target.buffer = values.buffer
		target.version = values.version
		target.prf = values.prf
	}

	public async Sum(): globalThis.Promise<$.Slice<number>> {
		const h = this;
		if (h.version >= 771) {
			return $.pointerValue<Exclude<hash2.Hash, null>>(h.client).Sum(null)
		}

		let out: $.Slice<number> = $.makeSlice<number>(0, md5.Size + sha1.Size, "byte")
		out = await $.pointerValue<Exclude<hash2.Hash, null>>(h.clientMD5).Sum(out)
		return $.pointerValue<Exclude<hash2.Hash, null>>(h.client).Sum(out)
	}

	public async Write(msg: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let h: finishedHash | $.VarRef<finishedHash> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const h$: finishedHash = h == null ? $.pointerTarget<finishedHash>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<finishedHash>(h)
		await $.pointerValue<Exclude<hash2.Hash, null>>((h$ as finishedHash).client).Write(msg)
		await $.pointerValue<Exclude<hash2.Hash, null>>((h$ as finishedHash).server).Write(msg)

		if ((h$ as finishedHash).version < 771) {
			await $.pointerValue<Exclude<hash2.Hash, null>>((h$ as finishedHash).clientMD5).Write(msg)
			await $.pointerValue<Exclude<hash2.Hash, null>>((h$ as finishedHash).serverMD5).Write(msg)
		}

		if ((h$ as finishedHash).buffer != null) {
			;(h$ as finishedHash).buffer = $.appendSlice((h$ as finishedHash).buffer, msg, $.byteSliceHint)
		}

		return [$.sliceLen(msg), null]
	}

	public async clientSum(masterSecret: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const h = this;
		return h.prf!(masterSecret, "client finished", await h.Sum(), 12)
	}

	public discardHandshakeBuffer(): void {
		let h: finishedHash | $.VarRef<finishedHash> | null = this;
		$.pointerValue<finishedHash>(h).buffer = null
	}

	public async hashForClientCertificate(sigType: number): globalThis.Promise<$.Slice<number>> {
		const h = this;
		if (sigType == 227) {
			return $.pointerValue<Exclude<hash2.Hash, null>>(h.server).Sum(null)
		}

		return h.Sum()
	}

	public async serverSum(masterSecret: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const h = this;
		return h.prf!(masterSecret, "server finished", await h.Sum(), 12)
	}

	static __typeInfo = $.registerStructType(
		"tls.finishedHash",
		() => new finishedHash(),
		() => [$.methodSignature("Sum", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["msg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("clientSum", [["masterSecret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("discardHandshakeBuffer", [], [], true), $.methodSignature("hashForClientCertificate", [["sigType", /* @__PURE__ */ $.basicType("uint8")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("serverSum", [["masterSecret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))])],
		finishedHash,
		() => [/* @__PURE__ */ $.structField("client", "hash.Hash", [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("server", "hash.Hash", [1], 16, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("clientMD5", "hash.Hash", [2], 32, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("serverMD5", "hash.Hash", [3], 48, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("buffer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 64, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("version", /* @__PURE__ */ $.basicType("uint16"), [5], 88, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("prf", ({ kind: $.TypeKind.Function, name: "tls.prfFunc", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo), [6], 96, false, { pkgPath: "crypto/tls" })]
	)
}

export const masterSecretLength: number = 48

export const finishedVerifyLength: number = 12

export const masterSecretLabel: string = "master secret"

export const extendedMasterSecretLabel: string = "extended master secret"

export const keyExpansionLabel: string = "key expansion"

export const clientFinishedLabel: string = "client finished"

export const serverFinishedLabel: string = "server finished"

export function splitPreMasterSecret(secret: $.Slice<number>): [$.Slice<number>, $.Slice<number>] {
	let s1: $.Slice<number> = null! as $.Slice<number>
	let s2: $.Slice<number> = null! as $.Slice<number>
	s1 = $.goSlice(secret, 0, globalThis.Math.trunc(($.sliceLen(secret) + 1) / 2))
	s2 = $.goSlice(secret, globalThis.Math.trunc($.sliceLen(secret) / 2), undefined)
	return [s1, s2]
}

export async function pHash(result: $.Slice<number>, secret: $.Slice<number>, seed: $.Slice<number>, hash: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null): globalThis.Promise<void> {
	let h = await hmac.New(hash, secret)
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Write(seed)
	let a: $.Slice<number> = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Sum(null)

	let j = 0
	while (j < $.sliceLen(result)) {
		void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Write(a)
		await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Write(seed)
		let b: $.Slice<number> = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Sum(null)
		$.copy($.goSlice(result, j, undefined), b)
		j = j + ($.sliceLen(b))

		void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Write(a)
		a = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Sum(null)
	}
}

export async function prf10(secret: $.Slice<number>, label: string, seed: $.Slice<number>, keyLen: number): globalThis.Promise<$.Slice<number>> {
	let result: $.Slice<number> = $.makeSlice<number>(keyLen, undefined, "byte")
	let hashSHA1: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null = sha1.New
	let hashMD5: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null = md5.New

	let labelAndSeed: $.Slice<number> = $.makeSlice<number>($.stringLen(label) + $.sliceLen(seed), undefined, "byte")
	$.copy(labelAndSeed, label)
	$.copy($.goSlice(labelAndSeed, $.stringLen(label), undefined), seed)

	let __goscriptTuple0: any = splitPreMasterSecret(secret)
	let s1: $.Slice<number> = __goscriptTuple0[0]
	let s2: $.Slice<number> = __goscriptTuple0[1]
	await pHash(result, s1, labelAndSeed, hashMD5)
	let result2: $.Slice<number> = $.makeSlice<number>($.sliceLen(result), undefined, "byte")
	await pHash(result2, s2, labelAndSeed, hashSHA1)

	for (let __goscriptRangeTarget0 = result2, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(result), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let b = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as number), 8);
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = (__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] ^ (b)
	}

	return result
}

export function prf12(hashFunc: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null): prfFunc | null {
	return $.functionValue(async (secret: $.Slice<number>, label: string, seed: $.Slice<number>, keyLen: number): globalThis.Promise<$.Slice<number>> => {
		return await tls12.PRF(__goscriptStatic0(), hashFunc, secret, label, seed, keyLen)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo))
}

export function prfAndHashForVersion(version: number, suite: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null): [prfFunc | null, crypto.Hash] {
	switch (version) {
		case 769:
		case 770:
		{
			return [prf10, 0]
			break
		}
		case 771:
		{
			if (($.pointerValue<__goscript_cipher_suites.cipherSuite>(suite).flags & 8) != 0) {
				return [prf12(sha512.New384), 6]
			}
			return [prf12(sha256.New), 5]
			break
		}
		default:
		{
			$.panic("unknown version")
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function prfForVersion(version: number, suite: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null): prfFunc | null {
	let [prf, ] = prfAndHashForVersion(version, suite)
	return prf
}

export async function masterFromPreMasterSecret(version: number, suite: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null, preMasterSecret: $.Slice<number>, clientRandom: $.Slice<number>, serverRandom: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	let seed: $.Slice<number> = $.makeSlice<number>(0, $.sliceLen(clientRandom) + $.sliceLen(serverRandom), "byte")
	seed = $.appendSlice(seed, clientRandom, $.byteSliceHint)
	seed = $.appendSlice(seed, serverRandom, $.byteSliceHint)

	return prfForVersion(version, suite)!(preMasterSecret, "master secret", seed, 48)
}

export async function extMasterFromPreMasterSecret(version: number, suite: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null, preMasterSecret: $.Slice<number>, transcript: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	let [prf, __goscriptShadow0] = prfAndHashForVersion(version, suite)
	if (version == 771) {
		// Use the FIPS 140-3 module only for TLS 1.2 with EMS, which is the
		// only TLS 1.0-1.2 approved mode per IG D.Q.
		return tls12.MasterSecret(__goscriptStatic0(), $.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))(__goscriptShadow0), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm"), preMasterSecret, transcript)
	}
	return prf!(preMasterSecret, "extended master secret", transcript, 48)
}

export async function keysFromMasterSecret(version: number, suite: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null, masterSecret: $.Slice<number>, clientRandom: $.Slice<number>, serverRandom: $.Slice<number>, macLen: number, keyLen: number, ivLen: number): globalThis.Promise<[$.Slice<number>, $.Slice<number>, $.Slice<number>, $.Slice<number>, $.Slice<number>, $.Slice<number>]> {
	let clientMAC: $.Slice<number> = null! as $.Slice<number>
	let serverMAC: $.Slice<number> = null! as $.Slice<number>
	let clientKey: $.Slice<number> = null! as $.Slice<number>
	let serverKey: $.Slice<number> = null! as $.Slice<number>
	let clientIV: $.Slice<number> = null! as $.Slice<number>
	let serverIV: $.Slice<number> = null! as $.Slice<number>
	let seed: $.Slice<number> = $.makeSlice<number>(0, $.sliceLen(serverRandom) + $.sliceLen(clientRandom), "byte")
	seed = $.appendSlice(seed, serverRandom, $.byteSliceHint)
	seed = $.appendSlice(seed, clientRandom, $.byteSliceHint)

	let n = ((2 * macLen) + (2 * keyLen)) + (2 * ivLen)
	let keyMaterial: $.Slice<number> = ((__goscriptAwait = prfForVersion(version, suite)!(masterSecret, "key expansion", seed, n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
	clientMAC = $.goSlice(keyMaterial, undefined, macLen)
	keyMaterial = $.goSlice(keyMaterial, macLen, undefined)
	serverMAC = $.goSlice(keyMaterial, undefined, macLen)
	keyMaterial = $.goSlice(keyMaterial, macLen, undefined)
	clientKey = $.goSlice(keyMaterial, undefined, keyLen)
	keyMaterial = $.goSlice(keyMaterial, keyLen, undefined)
	serverKey = $.goSlice(keyMaterial, undefined, keyLen)
	keyMaterial = $.goSlice(keyMaterial, keyLen, undefined)
	clientIV = $.goSlice(keyMaterial, undefined, ivLen)
	keyMaterial = $.goSlice(keyMaterial, ivLen, undefined)
	serverIV = $.goSlice(keyMaterial, undefined, ivLen)
	return [clientMAC, serverMAC, clientKey, serverKey, clientIV, serverIV]
}

export async function newFinishedHash(version: number, cipherSuite: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null): globalThis.Promise<finishedHash> {
	let buffer: $.Slice<number> = null! as $.Slice<number>
	if (version >= 771) {
		buffer = new Uint8Array([]) as $.Slice<number>
	}

	let [prf, __goscriptShadow1] = prfAndHashForVersion(version, cipherSuite)
	if (__goscriptShadow1 != 0) {
		return (await (async () => { const __goscriptLiteralField0 = await crypto.Hash_New(__goscriptShadow1); const __goscriptLiteralField1 = await crypto.Hash_New(__goscriptShadow1); return new finishedHash({client: __goscriptLiteralField0, server: __goscriptLiteralField1, clientMD5: null, serverMD5: null, buffer: buffer, version: version, prf: prf}, true) })())
	}

	return (() => { const __goscriptLiteralField2 = sha1.New(); const __goscriptLiteralField3 = sha1.New(); const __goscriptLiteralField4 = md5.New(); const __goscriptLiteralField5 = md5.New(); return new finishedHash({client: __goscriptLiteralField2, server: __goscriptLiteralField3, clientMD5: __goscriptLiteralField4, serverMD5: __goscriptLiteralField5, buffer: buffer, version: version, prf: prf}, true) })()
}

export function noEKMBecauseRenegotiation(label: string, context: $.Slice<number>, length: number): [$.Slice<number>, $.GoError] {
	return [null, errors.New("crypto/tls: ExportKeyingMaterial is unavailable when renegotiation is enabled")]
}

export function noEKMBecauseNoEMS(label: string, context: $.Slice<number>, length: number): [$.Slice<number>, $.GoError] {
	return [null, errors.New("crypto/tls: ExportKeyingMaterial is unavailable when neither TLS 1.3 nor Extended Master Secret are negotiated")]
}

export function ekmFromMasterSecret(version: number, suite: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null, masterSecret: $.Slice<number>, clientRandom: $.Slice<number>, serverRandom: $.Slice<number>): ((_p0: string, _p1: $.Slice<number>, _p2: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null {
	return $.functionValue(async (label: string, context: $.Slice<number>, length: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
		switch (label) {
			case "client finished":
			case "server finished":
			case "master secret":
			case "key expansion":
			{
				return [null, fmt.Errorf("crypto/tls: reserved ExportKeyingMaterial label: %s", label)]
				break
			}
		}

		let seedLen = $.sliceLen(serverRandom) + $.sliceLen(clientRandom)
		if (context != null) {
			seedLen = seedLen + (2 + $.sliceLen(context))
		}
		let seed: $.Slice<number> = $.makeSlice<number>(0, seedLen, "byte")

		seed = $.appendSlice(seed, clientRandom, $.byteSliceHint)
		seed = $.appendSlice(seed, serverRandom, $.byteSliceHint)

		if (context != null) {
			if ($.sliceLen(context) >= 65536) {
				return [null, fmt.Errorf("crypto/tls: ExportKeyingMaterial context too long")]
			}
			seed = $.append(seed, $.uint($.uint($.sliceLen(context) >> 8, 8), 8), $.uint($.uint($.sliceLen(context), 8), 8), $.byteSliceHint)
			seed = $.appendSlice(seed, context, $.byteSliceHint)
		}

		return [await prfForVersion(version, suite)!(masterSecret, label, seed, length), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: { type: "hash.Hash", zero: () => null, methods: {BlockSize: (receiver: any, ...args: any[]) => receiver.BlockSize(...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => receiver.Reset(...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => receiver.Size(...$.stripGenericTypeArgs(args)), Sum: (receiver: any, ...args: any[]) => receiver.Sum(...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => receiver.Write(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any
