// Generated file based on cipher_suites.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as aes2 from "@goscript/crypto/aes/index.js"

import * as cipher2 from "@goscript/crypto/cipher/index.js"

import * as des from "@goscript/crypto/des/index.js"

import * as hmac from "@goscript/crypto/hmac/index.js"

import * as boring from "@goscript/crypto/internal/boring/index.js"

import * as fipsaes from "@goscript/crypto/internal/fips140/aes/index.js"

import * as gcm from "@goscript/crypto/internal/fips140/aes/gcm/index.js"

import * as rc4 from "@goscript/crypto/rc4/index.js"

import * as sha1 from "@goscript/crypto/sha1/index.js"

import * as sha256 from "@goscript/crypto/sha256/index.js"

import "@goscript/crypto/sha512/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as hash2 from "@goscript/hash/index.js"

import * as cpu from "@goscript/internal/cpu/index.js"

import * as runtime from "@goscript/runtime/index.js"

import "@goscript/unsafe/index.js"

import * as chacha20poly1305 from "@goscript/vendor/golang.org/x/crypto/chacha20poly1305/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as fips140 from "@goscript/crypto/fips140/index.js"

import * as tls13 from "@goscript/crypto/internal/fips140/tls13/index.js"

import * as mlkem from "@goscript/crypto/mlkem/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as context2 from "@goscript/context/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_common from "./common.gs.ts"

import * as __goscript_common_string from "./common_string.gs.ts"

import * as __goscript_handshake_messages from "./handshake_messages.gs.ts"

import * as __goscript_key_agreement from "./key_agreement.gs.ts"

import * as __goscript_key_schedule from "./key_schedule.gs.ts"

import * as __goscript_ticket from "./ticket.gs.ts"
import "@goscript/crypto/index.js"
import "@goscript/crypto/aes/index.js"
import "@goscript/crypto/cipher/index.js"
import "@goscript/crypto/des/index.js"
import "@goscript/crypto/hmac/index.js"
import "@goscript/crypto/internal/boring/index.js"
import "@goscript/crypto/internal/fips140/aes/index.js"
import "@goscript/crypto/internal/fips140/aes/gcm/index.js"
import "@goscript/crypto/rc4/index.js"
import "@goscript/crypto/sha1/index.js"
import "@goscript/crypto/sha256/index.js"
import "@goscript/fmt/index.js"
import "@goscript/hash/index.js"
import "@goscript/internal/cpu/index.js"
import "@goscript/runtime/index.js"
import "@goscript/vendor/golang.org/x/crypto/chacha20poly1305/index.js"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/crypto/fips140/index.js"
import "@goscript/crypto/internal/fips140/tls13/index.js"
import "@goscript/crypto/mlkem/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./common.gs.ts"
import "./common_string.gs.ts"
import "./handshake_messages.gs.ts"
import "./key_agreement.gs.ts"
import "./key_schedule.gs.ts"
import "./ticket.gs.ts"

$.registerTypePackagePath("crypto/tls", ["tls.CipherSuite", "tls.cipherSuite", "tls.cipherSuiteTLS13", "tls.aead", "tls.prefixNonceAEAD", "tls.xorNonceAEAD", "tls.constantTimeHash", "tls.cthWrapper"])

export type aead = {
	NonceSize(): number
	Open(dst: $.Slice<number>, nonce: $.Slice<number>, ciphertext: $.Slice<number>, additionalData: $.Slice<number>): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	Overhead(): number | globalThis.Promise<number>
	Seal(dst: $.Slice<number>, nonce: $.Slice<number>, plaintext: $.Slice<number>, additionalData: $.Slice<number>): $.Slice<number> | globalThis.Promise<$.Slice<number>>
	explicitNonceLen(): number
}

$.registerInterfaceType(
	"tls.aead",
	null,
	[$.methodSignature("NonceSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Open", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["additionalData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Overhead", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Seal", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["plaintext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["additionalData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("explicitNonceLen", [], [/* @__PURE__ */ $.basicType("int")])]
);

export type constantTimeHash = {
	BlockSize(): number | globalThis.Promise<number>
	ConstantTimeSum(b: $.Slice<number>): $.Slice<number>
	Reset(): void
	Size(): number | globalThis.Promise<number>
	Sum(b: $.Slice<number>): $.Slice<number> | globalThis.Promise<$.Slice<number>>
	Write(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"tls.constantTimeHash",
	null,
	[$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ConstantTimeSum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Reset"), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export class CipherSuite {
	public get ID(): number {
		return this._fields.ID
	}

	public set ID(value: number) {
		this._fields.ID = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// Supported versions is the list of TLS protocol versions that can
	// negotiate this cipher suite.
	public get SupportedVersions(): $.Slice<number> {
		return this._fields.SupportedVersions
	}

	public set SupportedVersions(value: $.Slice<number>) {
		this._fields.SupportedVersions = value
	}

	// Insecure is true if the cipher suite has known security issues
	// due to its primitives, design, or implementation.
	public get Insecure(): boolean {
		return this._fields.Insecure
	}

	public set Insecure(value: boolean) {
		this._fields.Insecure = value
	}

	public _fields: {
		ID: number
		Name: string
		SupportedVersions: $.Slice<number>
		Insecure: boolean
	}

	constructor(init?: Partial<{ID?: number, Name?: string, SupportedVersions?: $.Slice<number>, Insecure?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			ID: init?.ID ?? (0 as number),
			Name: init?.Name ?? ("" as string),
			SupportedVersions: init?.SupportedVersions ?? (null! as $.Slice<number>),
			Insecure: init?.Insecure ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CipherSuite {
		return new CipherSuite(this, true)
	}

	public __goscriptAssign(source: CipherSuite): void {
		const target = this._fields
		const values = source._fields
		target.ID = values.ID
		target.Name = values.Name
		target.SupportedVersions = values.SupportedVersions
		target.Insecure = values.Insecure
	}

	static __typeInfo = $.registerStructType(
		"tls.CipherSuite",
		() => new CipherSuite(),
		() => [],
		CipherSuite,
		() => [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("uint16"), [0], 0, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [1], 8, true), /* @__PURE__ */ $.structField("SupportedVersions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")), [2], 24, true), /* @__PURE__ */ $.structField("Insecure", /* @__PURE__ */ $.basicType("bool"), [3], 48, true)]
	)
}

export class cipherSuite {
	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	// the lengths, in bytes, of the key material needed for each component.
	public get keyLen(): number {
		return this._fields.keyLen
	}

	public set keyLen(value: number) {
		this._fields.keyLen = value
	}

	public get macLen(): number {
		return this._fields.macLen
	}

	public set macLen(value: number) {
		this._fields.macLen = value
	}

	public get ivLen(): number {
		return this._fields.ivLen
	}

	public set ivLen(value: number) {
		this._fields.ivLen = value
	}

	public get ka(): ((version: number) => __goscript_key_agreement.keyAgreement | null | globalThis.Promise<__goscript_key_agreement.keyAgreement | null>) | null {
		return this._fields.ka
	}

	public set ka(value: ((version: number) => __goscript_key_agreement.keyAgreement | null | globalThis.Promise<__goscript_key_agreement.keyAgreement | null>) | null) {
		this._fields.ka = value
	}

	// flags is a bitmask of the suite* values, above.
	public get flags(): number {
		return this._fields.flags
	}

	public set flags(value: number) {
		this._fields.flags = value
	}

	public get cipher(): ((key: $.Slice<number>, iv: $.Slice<number>, isRead: boolean) => any | globalThis.Promise<any>) | null {
		return this._fields.cipher
	}

	public set cipher(value: ((key: $.Slice<number>, iv: $.Slice<number>, isRead: boolean) => any | globalThis.Promise<any>) | null) {
		this._fields.cipher = value
	}

	public get mac(): ((key: $.Slice<number>) => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null {
		return this._fields.mac
	}

	public set mac(value: ((key: $.Slice<number>) => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null) {
		this._fields.mac = value
	}

	public get aead(): ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null {
		return this._fields.aead
	}

	public set aead(value: ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null) {
		this._fields.aead = value
	}

	public _fields: {
		id: number
		keyLen: number
		macLen: number
		ivLen: number
		ka: ((version: number) => __goscript_key_agreement.keyAgreement | null | globalThis.Promise<__goscript_key_agreement.keyAgreement | null>) | null
		flags: number
		cipher: ((key: $.Slice<number>, iv: $.Slice<number>, isRead: boolean) => any | globalThis.Promise<any>) | null
		mac: ((key: $.Slice<number>) => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null
		aead: ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null
	}

	constructor(init?: Partial<{id?: number, keyLen?: number, macLen?: number, ivLen?: number, ka?: ((version: number) => __goscript_key_agreement.keyAgreement | null | globalThis.Promise<__goscript_key_agreement.keyAgreement | null>) | null, flags?: number, cipher?: ((key: $.Slice<number>, iv: $.Slice<number>, isRead: boolean) => any | globalThis.Promise<any>) | null, mac?: ((key: $.Slice<number>) => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null, aead?: ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0 as number),
			keyLen: init?.keyLen ?? (0 as number),
			macLen: init?.macLen ?? (0 as number),
			ivLen: init?.ivLen ?? (0 as number),
			ka: init?.ka ?? (null! as ((version: number) => __goscript_key_agreement.keyAgreement | null | globalThis.Promise<__goscript_key_agreement.keyAgreement | null>) | null),
			flags: init?.flags ?? (0 as number),
			cipher: init?.cipher ?? (null! as ((key: $.Slice<number>, iv: $.Slice<number>, isRead: boolean) => any | globalThis.Promise<any>) | null),
			mac: init?.mac ?? (null! as ((key: $.Slice<number>) => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null),
			aead: init?.aead ?? (null! as ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): cipherSuite {
		return new cipherSuite(this, true)
	}

	public __goscriptAssign(source: cipherSuite): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
		target.keyLen = values.keyLen
		target.macLen = values.macLen
		target.ivLen = values.ivLen
		target.ka = values.ka
		target.flags = values.flags
		target.cipher = values.cipher
		target.mac = values.mac
		target.aead = values.aead
	}

	static __typeInfo = $.registerStructType(
		"tls.cipherSuite",
		() => new cipherSuite(),
		() => [],
		cipherSuite,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint16"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("keyLen", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("macLen", /* @__PURE__ */ $.basicType("int"), [2], 16, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ivLen", /* @__PURE__ */ $.basicType("int"), [3], 24, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ka", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint16")], results: ["tls.keyAgreement"] } as $.FunctionTypeInfo), [4], 32, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("flags", /* @__PURE__ */ $.basicType("int"), [5], 40, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("cipher", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("bool")], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo), [6], 48, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("mac", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["hash.Hash"] } as $.FunctionTypeInfo), [7], 56, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("aead", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["tls.aead"] } as $.FunctionTypeInfo), [8], 64, false, { pkgPath: "crypto/tls" })]
	)
}

export class cipherSuiteTLS13 {
	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get keyLen(): number {
		return this._fields.keyLen
	}

	public set keyLen(value: number) {
		this._fields.keyLen = value
	}

	public get aead(): ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null {
		return this._fields.aead
	}

	public set aead(value: ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null) {
		this._fields.aead = value
	}

	public get hash(): crypto.Hash {
		return this._fields.hash
	}

	public set hash(value: crypto.Hash) {
		this._fields.hash = value
	}

	public _fields: {
		id: number
		keyLen: number
		aead: ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null
		hash: crypto.Hash
	}

	constructor(init?: Partial<{id?: number, keyLen?: number, aead?: ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null, hash?: crypto.Hash}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0 as number),
			keyLen: init?.keyLen ?? (0 as number),
			aead: init?.aead ?? (null! as ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null),
			hash: init?.hash ?? (0 as crypto.Hash)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): cipherSuiteTLS13 {
		return new cipherSuiteTLS13(this, true)
	}

	public __goscriptAssign(source: cipherSuiteTLS13): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
		target.keyLen = values.keyLen
		target.aead = values.aead
		target.hash = values.hash
	}

	public async exportKeyingMaterial(s: tls13.MasterSecret | $.VarRef<tls13.MasterSecret> | null, transcript: hash2.Hash | null): globalThis.Promise<((_p0: string, _p1: $.Slice<number>, _p2: number) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null> {
		const c: cipherSuiteTLS13 | $.VarRef<cipherSuiteTLS13> | null = this;
		let expMasterSecret: tls13.ExporterMasterSecret | $.VarRef<tls13.ExporterMasterSecret> | null = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as tls13.MasterSecret).ExporterMasterSecret(transcript) : tls13.MasterSecret.prototype.ExporterMasterSecret.call(s, transcript))
		return $.functionValue(async (label: string, context: $.Slice<number>, length: number): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
			return [await (expMasterSecret !== null && (expMasterSecret as any).__isVarRef !== true && (expMasterSecret as any).__goValue === undefined ? ((expMasterSecret as any) as tls13.ExporterMasterSecret).Exporter(label, context, length) : tls13.ExporterMasterSecret.prototype.Exporter.call(expMasterSecret, label, context, length)), null]
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo))
	}

	public async finishedHash(baseKey: $.Slice<number>, transcript: hash2.Hash | null): globalThis.Promise<$.Slice<number>> {
		const c: cipherSuiteTLS13 | $.VarRef<cipherSuiteTLS13> | null = this;
		const c$: cipherSuiteTLS13 = c == null ? $.pointerTarget<cipherSuiteTLS13>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<cipherSuiteTLS13>(c)
		let finishedKey: $.Slice<number> = await tls13.ExpandLabel(__goscriptStatic0(), $.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))((c$ as cipherSuiteTLS13).hash), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm"), baseKey, "finished", null, crypto.Hash_Size((c$ as cipherSuiteTLS13).hash))
		let verifyData = await hmac.New($.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))((c$ as cipherSuiteTLS13).hash), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm"), finishedKey)
		await (verifyData !== null && (verifyData as any).__isVarRef !== true && (verifyData as any).__goValue === undefined ? (verifyData as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(verifyData)).Write(await (transcript !== null && (transcript as any).__isVarRef !== true && (transcript as any).__goValue === undefined ? (transcript as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(transcript)).Sum(null))
		return (verifyData !== null && (verifyData as any).__isVarRef !== true && (verifyData as any).__goValue === undefined ? (verifyData as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(verifyData)).Sum(null)
	}

	public async nextTrafficSecret(trafficSecret: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const c: cipherSuiteTLS13 | $.VarRef<cipherSuiteTLS13> | null = this;
		const c$: cipherSuiteTLS13 = c == null ? $.pointerTarget<cipherSuiteTLS13>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<cipherSuiteTLS13>(c)
		return tls13.ExpandLabel(__goscriptStatic0(), $.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))((c$ as cipherSuiteTLS13).hash), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm"), trafficSecret, "traffic upd", null, crypto.Hash_Size((c$ as cipherSuiteTLS13).hash))
	}

	public async trafficKey(trafficSecret: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.Slice<number>]> {
		const c: cipherSuiteTLS13 | $.VarRef<cipherSuiteTLS13> | null = this;
		let key: $.Slice<number> = null! as $.Slice<number>
		let iv: $.Slice<number> = null! as $.Slice<number>
		const c$: cipherSuiteTLS13 = c == null ? $.pointerTarget<cipherSuiteTLS13>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<cipherSuiteTLS13>(c)
		key = await tls13.ExpandLabel(__goscriptStatic0(), $.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))((c$ as cipherSuiteTLS13).hash), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm"), trafficSecret, "key", null, (c$ as cipherSuiteTLS13).keyLen)
		iv = await tls13.ExpandLabel(__goscriptStatic0(), $.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))((c$ as cipherSuiteTLS13).hash), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm"), trafficSecret, "iv", null, 12)
		return [key, iv]
	}

	static __typeInfo = $.registerStructType(
		"tls.cipherSuiteTLS13",
		() => new cipherSuiteTLS13(),
		() => [$.methodSignature("exportKeyingMaterial", [["s", /* @__PURE__ */ $.pointerType("tls13.MasterSecret")], ["transcript", "hash.Hash"]], [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)], true), $.methodSignature("finishedHash", [["baseKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["transcript", "hash.Hash"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("nextTrafficSecret", [["trafficSecret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("trafficKey", [["trafficSecret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["iv", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], true)],
		cipherSuiteTLS13,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint16"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("keyLen", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("aead", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["tls.aead"] } as $.FunctionTypeInfo), [2], 16, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [3], 24, false, { pkgPath: "crypto/tls" })]
	)
}

export class prefixNonceAEAD {
	// nonce contains the fixed part of the nonce in the first four bytes.
	public get nonce(): Uint8Array {
		return this._fields.nonce
	}

	public set nonce(value: Uint8Array) {
		this._fields.nonce = value
	}

	public get aead(): cipher2.AEAD | null {
		return this._fields.aead
	}

	public set aead(value: cipher2.AEAD | null) {
		this._fields.aead = value
	}

	public _fields: {
		nonce: Uint8Array
		aead: cipher2.AEAD | null
	}

	constructor(init?: Partial<{nonce?: Uint8Array, aead?: cipher2.AEAD | null}>, __goscriptValue?: boolean) {
		this._fields = {
			nonce: init?.nonce !== undefined ? $.cloneArrayValue(init.nonce, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 12)) : $.arrayValue(new Uint8Array(12)),
			aead: init?.aead ?? (null! as cipher2.AEAD | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): prefixNonceAEAD {
		return new prefixNonceAEAD(this, true)
	}

	public __goscriptAssign(source: prefixNonceAEAD): void {
		const target = this._fields
		const values = source._fields
		target.nonce = $.assignFieldValue(target.nonce, values.nonce, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 12))
		target.aead = $.assignFieldValue(target.aead, values.aead, "cipher.AEAD")
	}

	public NonceSize(): number {
		const f: prefixNonceAEAD | $.VarRef<prefixNonceAEAD> | null = this;
		return 8
	}

	public async Open(out: $.Slice<number>, nonce: $.Slice<number>, ciphertext: $.Slice<number>, additionalData: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const f: prefixNonceAEAD | $.VarRef<prefixNonceAEAD> | null = this;
		const f$: prefixNonceAEAD = f == null ? $.pointerTarget<prefixNonceAEAD>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<prefixNonceAEAD>(f)
		$.copy($.goSlice((f$ as prefixNonceAEAD).nonce, 4, undefined), nonce)
		return $.pointerValue<Exclude<cipher2.AEAD, null>>((f$ as prefixNonceAEAD).aead).Open(out, $.goSlice((f$ as prefixNonceAEAD).nonce, undefined, undefined), ciphertext, additionalData)
	}

	public async Overhead(): globalThis.Promise<number> {
		const f: prefixNonceAEAD | $.VarRef<prefixNonceAEAD> | null = this;
		return $.pointerValue<Exclude<cipher2.AEAD, null>>($.pointerValue<prefixNonceAEAD>(f).aead).Overhead()
	}

	public async Seal(out: $.Slice<number>, nonce: $.Slice<number>, plaintext: $.Slice<number>, additionalData: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const f: prefixNonceAEAD | $.VarRef<prefixNonceAEAD> | null = this;
		const f$: prefixNonceAEAD = f == null ? $.pointerTarget<prefixNonceAEAD>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<prefixNonceAEAD>(f)
		$.copy($.goSlice((f$ as prefixNonceAEAD).nonce, 4, undefined), nonce)
		return $.pointerValue<Exclude<cipher2.AEAD, null>>((f$ as prefixNonceAEAD).aead).Seal(out, $.goSlice((f$ as prefixNonceAEAD).nonce, undefined, undefined), plaintext, additionalData)
	}

	public explicitNonceLen(): number {
		const f: prefixNonceAEAD | $.VarRef<prefixNonceAEAD> | null = this;
		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as prefixNonceAEAD).NonceSize() : prefixNonceAEAD.prototype.NonceSize.call(f))
	}

	static __typeInfo = $.registerStructType(
		"tls.prefixNonceAEAD",
		() => new prefixNonceAEAD(),
		() => [$.methodSignature("NonceSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Open", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["additionalData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Overhead", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Seal", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["plaintext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["additionalData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("explicitNonceLen", [], [/* @__PURE__ */ $.basicType("int")], true)],
		prefixNonceAEAD,
		() => [/* @__PURE__ */ $.structField("nonce", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 12), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("aead", "cipher.AEAD", [1], 16, false, { pkgPath: "crypto/tls" })]
	)
}

export class xorNonceAEAD {
	public get nonceMask(): Uint8Array {
		return this._fields.nonceMask
	}

	public set nonceMask(value: Uint8Array) {
		this._fields.nonceMask = value
	}

	public get aead(): cipher2.AEAD | null {
		return this._fields.aead
	}

	public set aead(value: cipher2.AEAD | null) {
		this._fields.aead = value
	}

	public _fields: {
		nonceMask: Uint8Array
		aead: cipher2.AEAD | null
	}

	constructor(init?: Partial<{nonceMask?: Uint8Array, aead?: cipher2.AEAD | null}>, __goscriptValue?: boolean) {
		this._fields = {
			nonceMask: init?.nonceMask !== undefined ? $.cloneArrayValue(init.nonceMask, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 12)) : $.arrayValue(new Uint8Array(12)),
			aead: init?.aead ?? (null! as cipher2.AEAD | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): xorNonceAEAD {
		return new xorNonceAEAD(this, true)
	}

	public __goscriptAssign(source: xorNonceAEAD): void {
		const target = this._fields
		const values = source._fields
		target.nonceMask = $.assignFieldValue(target.nonceMask, values.nonceMask, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 12))
		target.aead = $.assignFieldValue(target.aead, values.aead, "cipher.AEAD")
	}

	public NonceSize(): number {
		const f: xorNonceAEAD | $.VarRef<xorNonceAEAD> | null = this;
		return 8
	}

	public async Open(out: $.Slice<number>, nonce: $.Slice<number>, ciphertext: $.Slice<number>, additionalData: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		let f: xorNonceAEAD | $.VarRef<xorNonceAEAD> | null = this;
		const f$: xorNonceAEAD = f == null ? $.pointerTarget<xorNonceAEAD>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<xorNonceAEAD>(f)
		for (let __goscriptRangeTarget5 = nonce, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
			let b = $.uint((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as number), 8);
			;(f$ as xorNonceAEAD).nonceMask[4 + i] = (f$ as xorNonceAEAD).nonceMask[4 + i] ^ (b)
		}
		let __goscriptTuple1: any = await $.pointerValue<Exclude<cipher2.AEAD, null>>((f$ as xorNonceAEAD).aead).Open(out, $.goSlice((f$ as xorNonceAEAD).nonceMask, undefined, undefined), ciphertext, additionalData)
		let result: $.Slice<number> = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		for (let __goscriptRangeTarget6 = nonce, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), i = 0; i < __goscriptRangeWindow6.length; i++) {
			let b = $.uint((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + i] as number), 8);
			;(f$ as xorNonceAEAD).nonceMask[4 + i] = (f$ as xorNonceAEAD).nonceMask[4 + i] ^ (b)
		}

		return [result, err]
	}

	public async Overhead(): globalThis.Promise<number> {
		const f: xorNonceAEAD | $.VarRef<xorNonceAEAD> | null = this;
		return $.pointerValue<Exclude<cipher2.AEAD, null>>($.pointerValue<xorNonceAEAD>(f).aead).Overhead()
	}

	public async Seal(out: $.Slice<number>, nonce: $.Slice<number>, plaintext: $.Slice<number>, additionalData: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		let f: xorNonceAEAD | $.VarRef<xorNonceAEAD> | null = this;
		const f$: xorNonceAEAD = f == null ? $.pointerTarget<xorNonceAEAD>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<xorNonceAEAD>(f)
		for (let __goscriptRangeTarget7 = nonce, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), i = 0; i < __goscriptRangeWindow7.length; i++) {
			let b = $.uint((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + i] as number), 8);
			;(f$ as xorNonceAEAD).nonceMask[4 + i] = (f$ as xorNonceAEAD).nonceMask[4 + i] ^ (b)
		}
		let result: $.Slice<number> = await $.pointerValue<Exclude<cipher2.AEAD, null>>((f$ as xorNonceAEAD).aead).Seal(out, $.goSlice((f$ as xorNonceAEAD).nonceMask, undefined, undefined), plaintext, additionalData)
		for (let __goscriptRangeTarget8 = nonce, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), i = 0; i < __goscriptRangeWindow8.length; i++) {
			let b = $.uint((__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + i] as number), 8);
			;(f$ as xorNonceAEAD).nonceMask[4 + i] = (f$ as xorNonceAEAD).nonceMask[4 + i] ^ (b)
		}

		return result
	}

	public explicitNonceLen(): number {
		const f: xorNonceAEAD | $.VarRef<xorNonceAEAD> | null = this;
		return 0
	}

	static __typeInfo = $.registerStructType(
		"tls.xorNonceAEAD",
		() => new xorNonceAEAD(),
		() => [$.methodSignature("NonceSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Open", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["ciphertext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["additionalData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Overhead", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Seal", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["nonce", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["plaintext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["additionalData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("explicitNonceLen", [], [/* @__PURE__ */ $.basicType("int")], true)],
		xorNonceAEAD,
		() => [/* @__PURE__ */ $.structField("nonceMask", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 12), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("aead", "cipher.AEAD", [1], 16, false, { pkgPath: "crypto/tls" })]
	)
}

export class cthWrapper {
	public get h(): constantTimeHash | null {
		return this._fields.h
	}

	public set h(value: constantTimeHash | null) {
		this._fields.h = value
	}

	public _fields: {
		h: constantTimeHash | null
	}

	constructor(init?: Partial<{h?: constantTimeHash | null}>, __goscriptValue?: boolean) {
		this._fields = {
			h: init?.h ?? (null! as constantTimeHash | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): cthWrapper {
		return new cthWrapper(this, true)
	}

	public __goscriptAssign(source: cthWrapper): void {
		const target = this._fields
		const values = source._fields
		target.h = $.assignFieldValue(target.h, values.h, "tls.constantTimeHash")
	}

	public async BlockSize(): globalThis.Promise<number> {
		const c: cthWrapper | $.VarRef<cthWrapper> | null = this;
		return $.pointerValue<Exclude<constantTimeHash, null>>($.pointerValue<cthWrapper>(c).h).BlockSize()
	}

	public async Reset(): globalThis.Promise<void> {
		const c: cthWrapper | $.VarRef<cthWrapper> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<constantTimeHash, null>>($.pointerValue<cthWrapper>(c).h).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Size(): globalThis.Promise<number> {
		const c: cthWrapper | $.VarRef<cthWrapper> | null = this;
		return $.pointerValue<Exclude<constantTimeHash, null>>($.pointerValue<cthWrapper>(c).h).Size()
	}

	public async Sum(b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
		const c: cthWrapper | $.VarRef<cthWrapper> | null = this;
		return $.pointerValue<Exclude<constantTimeHash, null>>($.pointerValue<cthWrapper>(c).h).ConstantTimeSum(b)
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const c: cthWrapper | $.VarRef<cthWrapper> | null = this;
		return $.pointerValue<Exclude<constantTimeHash, null>>($.pointerValue<cthWrapper>(c).h).Write(p)
	}

	static __typeInfo = $.registerStructType(
		"tls.cthWrapper",
		() => new cthWrapper(),
		() => [$.methodSignature("BlockSize", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Sum", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		cthWrapper,
		() => [/* @__PURE__ */ $.structField("h", "tls.constantTimeHash", [0], 0, false, { pkgPath: "crypto/tls" })]
	)
}

export const suiteECDHE: number = 1

export const suiteECSign: number = 2

export const suiteTLS12: number = 4

export const suiteSHA384: number = 8

export const aeadNonceLength: number = 12

export const noncePrefixLength: number = 4

export const TLS_RSA_WITH_RC4_128_SHA: number = 5

export const TLS_RSA_WITH_3DES_EDE_CBC_SHA: number = 10

export const TLS_RSA_WITH_AES_128_CBC_SHA: number = 47

export const TLS_RSA_WITH_AES_256_CBC_SHA: number = 53

export const TLS_RSA_WITH_AES_128_CBC_SHA256: number = 60

export const TLS_RSA_WITH_AES_128_GCM_SHA256: number = 156

export const TLS_RSA_WITH_AES_256_GCM_SHA384: number = 157

export const TLS_ECDHE_ECDSA_WITH_RC4_128_SHA: number = 49159

export const TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA: number = 49161

export const TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA: number = 49162

export const TLS_ECDHE_RSA_WITH_RC4_128_SHA: number = 49169

export const TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA: number = 49170

export const TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA: number = 49171

export const TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA: number = 49172

export const TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256: number = 49187

export const TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256: number = 49191

export const TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256: number = 49199

export const TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256: number = 49195

export const TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384: number = 49200

export const TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384: number = 49196

export const TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256: number = 52392

export const TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256: number = 52393

export const TLS_AES_128_GCM_SHA256: number = 4865

export const TLS_AES_256_GCM_SHA384: number = 4866

export const TLS_CHACHA20_POLY1305_SHA256: number = 4867

export const TLS_FALLBACK_SCSV: number = 22016

export const TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305: number = 52392

export const TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305: number = 52393

export var supportedUpToTLS12: $.Slice<number>

export function __goscript_init_supportedUpToTLS12(): void {
	if (((supportedUpToTLS12) as any) === undefined) {
		supportedUpToTLS12 = $.arrayToSlice<number>([769, 770, 771])
	}
}

export function __goscript_get_supportedUpToTLS12(): $.Slice<number> {
	if (((supportedUpToTLS12) as any) === undefined) {
		__goscript_init_supportedUpToTLS12()
	}
	return supportedUpToTLS12
}

export function __goscript_set_supportedUpToTLS12(__goscriptValue: $.Slice<number>): void {
	supportedUpToTLS12 = __goscriptValue
}

export var supportedOnlyTLS12: $.Slice<number>

export function __goscript_init_supportedOnlyTLS12(): void {
	if (((supportedOnlyTLS12) as any) === undefined) {
		supportedOnlyTLS12 = $.arrayToSlice<number>([771])
	}
}

export function __goscript_get_supportedOnlyTLS12(): $.Slice<number> {
	if (((supportedOnlyTLS12) as any) === undefined) {
		__goscript_init_supportedOnlyTLS12()
	}
	return supportedOnlyTLS12
}

export function __goscript_set_supportedOnlyTLS12(__goscriptValue: $.Slice<number>): void {
	supportedOnlyTLS12 = __goscriptValue
}

export var supportedOnlyTLS13: $.Slice<number>

export function __goscript_init_supportedOnlyTLS13(): void {
	if (((supportedOnlyTLS13) as any) === undefined) {
		supportedOnlyTLS13 = $.arrayToSlice<number>([772])
	}
}

export function __goscript_get_supportedOnlyTLS13(): $.Slice<number> {
	if (((supportedOnlyTLS13) as any) === undefined) {
		__goscript_init_supportedOnlyTLS13()
	}
	return supportedOnlyTLS13
}

export function __goscript_set_supportedOnlyTLS13(__goscriptValue: $.Slice<number>): void {
	supportedOnlyTLS13 = __goscriptValue
}

export function CipherSuites(): $.Slice<CipherSuite | $.VarRef<CipherSuite> | null> {
	return $.arrayToSlice<CipherSuite | $.VarRef<CipherSuite> | null>([new CipherSuite({ID: 4865, Name: "TLS_AES_128_GCM_SHA256", SupportedVersions: __goscript_get_supportedOnlyTLS13(), Insecure: false}), new CipherSuite({ID: 4866, Name: "TLS_AES_256_GCM_SHA384", SupportedVersions: __goscript_get_supportedOnlyTLS13(), Insecure: false}), new CipherSuite({ID: 4867, Name: "TLS_CHACHA20_POLY1305_SHA256", SupportedVersions: __goscript_get_supportedOnlyTLS13(), Insecure: false}), new CipherSuite({ID: 49161, Name: "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA", SupportedVersions: __goscript_get_supportedUpToTLS12(), Insecure: false}), new CipherSuite({ID: 49162, Name: "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA", SupportedVersions: __goscript_get_supportedUpToTLS12(), Insecure: false}), new CipherSuite({ID: 49171, Name: "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA", SupportedVersions: __goscript_get_supportedUpToTLS12(), Insecure: false}), new CipherSuite({ID: 49172, Name: "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA", SupportedVersions: __goscript_get_supportedUpToTLS12(), Insecure: false}), new CipherSuite({ID: 49195, Name: "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256", SupportedVersions: __goscript_get_supportedOnlyTLS12(), Insecure: false}), new CipherSuite({ID: 49196, Name: "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384", SupportedVersions: __goscript_get_supportedOnlyTLS12(), Insecure: false}), new CipherSuite({ID: 49199, Name: "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256", SupportedVersions: __goscript_get_supportedOnlyTLS12(), Insecure: false}), new CipherSuite({ID: 49200, Name: "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384", SupportedVersions: __goscript_get_supportedOnlyTLS12(), Insecure: false}), new CipherSuite({ID: 52392, Name: "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256", SupportedVersions: __goscript_get_supportedOnlyTLS12(), Insecure: false}), new CipherSuite({ID: 52393, Name: "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256", SupportedVersions: __goscript_get_supportedOnlyTLS12(), Insecure: false})])
}

export function InsecureCipherSuites(): $.Slice<CipherSuite | $.VarRef<CipherSuite> | null> {
	// This list includes legacy RSA kex, RC4, CBC_SHA256, and 3DES cipher
	// suites. See cipherSuitesPreferenceOrder for details.
	return $.arrayToSlice<CipherSuite | $.VarRef<CipherSuite> | null>([new CipherSuite({ID: 5, Name: "TLS_RSA_WITH_RC4_128_SHA", SupportedVersions: __goscript_get_supportedUpToTLS12(), Insecure: true}), new CipherSuite({ID: 10, Name: "TLS_RSA_WITH_3DES_EDE_CBC_SHA", SupportedVersions: __goscript_get_supportedUpToTLS12(), Insecure: true}), new CipherSuite({ID: 47, Name: "TLS_RSA_WITH_AES_128_CBC_SHA", SupportedVersions: __goscript_get_supportedUpToTLS12(), Insecure: true}), new CipherSuite({ID: 53, Name: "TLS_RSA_WITH_AES_256_CBC_SHA", SupportedVersions: __goscript_get_supportedUpToTLS12(), Insecure: true}), new CipherSuite({ID: 60, Name: "TLS_RSA_WITH_AES_128_CBC_SHA256", SupportedVersions: __goscript_get_supportedOnlyTLS12(), Insecure: true}), new CipherSuite({ID: 156, Name: "TLS_RSA_WITH_AES_128_GCM_SHA256", SupportedVersions: __goscript_get_supportedOnlyTLS12(), Insecure: true}), new CipherSuite({ID: 157, Name: "TLS_RSA_WITH_AES_256_GCM_SHA384", SupportedVersions: __goscript_get_supportedOnlyTLS12(), Insecure: true}), new CipherSuite({ID: 49159, Name: "TLS_ECDHE_ECDSA_WITH_RC4_128_SHA", SupportedVersions: __goscript_get_supportedUpToTLS12(), Insecure: true}), new CipherSuite({ID: 49169, Name: "TLS_ECDHE_RSA_WITH_RC4_128_SHA", SupportedVersions: __goscript_get_supportedUpToTLS12(), Insecure: true}), new CipherSuite({ID: 49170, Name: "TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA", SupportedVersions: __goscript_get_supportedUpToTLS12(), Insecure: true}), new CipherSuite({ID: 49187, Name: "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256", SupportedVersions: __goscript_get_supportedOnlyTLS12(), Insecure: true}), new CipherSuite({ID: 49191, Name: "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256", SupportedVersions: __goscript_get_supportedOnlyTLS12(), Insecure: true})])
}

export async function CipherSuiteName(id: number): globalThis.Promise<string> {
	for (let __goscriptRangeTarget0 = CipherSuites(), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let c = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as CipherSuite | $.VarRef<CipherSuite> | null)
		if ($.pointerValue<CipherSuite>(c).ID == id) {
			return $.pointerValue<CipherSuite>(c).Name
		}
	}
	for (let __goscriptRangeTarget1 = InsecureCipherSuites(), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let c = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as CipherSuite | $.VarRef<CipherSuite> | null)
		if ($.pointerValue<CipherSuite>(c).ID == id) {
			return $.pointerValue<CipherSuite>(c).Name
		}
	}
	return fmt.Sprintf("0x%04X", $.basicInterfaceValue(id, "uint16"))
}

export let cipherSuites: $.Slice<cipherSuite | $.VarRef<cipherSuite> | null> = $.arrayToSlice<cipherSuite | $.VarRef<cipherSuite> | null>([new cipherSuite({id: 52392, keyLen: 32, macLen: 0, ivLen: 12, ka: ecdheRSAKA, flags: 5, cipher: (null as ((key: $.Slice<number>, iv: $.Slice<number>, isRead: boolean) => any | globalThis.Promise<any>) | null), mac: (null as ((key: $.Slice<number>) => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null), aead: aeadChaCha20Poly1305}), new cipherSuite({id: 52393, keyLen: 32, macLen: 0, ivLen: 12, ka: ecdheECDSAKA, flags: 7, cipher: (null as ((key: $.Slice<number>, iv: $.Slice<number>, isRead: boolean) => any | globalThis.Promise<any>) | null), mac: (null as ((key: $.Slice<number>) => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null), aead: aeadChaCha20Poly1305}), new cipherSuite({id: 49199, keyLen: 16, macLen: 0, ivLen: 4, ka: ecdheRSAKA, flags: 5, cipher: (null as ((key: $.Slice<number>, iv: $.Slice<number>, isRead: boolean) => any | globalThis.Promise<any>) | null), mac: (null as ((key: $.Slice<number>) => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null), aead: aeadAESGCM}), new cipherSuite({id: 49195, keyLen: 16, macLen: 0, ivLen: 4, ka: ecdheECDSAKA, flags: 7, cipher: (null as ((key: $.Slice<number>, iv: $.Slice<number>, isRead: boolean) => any | globalThis.Promise<any>) | null), mac: (null as ((key: $.Slice<number>) => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null), aead: aeadAESGCM}), new cipherSuite({id: 49200, keyLen: 32, macLen: 0, ivLen: 4, ka: ecdheRSAKA, flags: 13, cipher: (null as ((key: $.Slice<number>, iv: $.Slice<number>, isRead: boolean) => any | globalThis.Promise<any>) | null), mac: (null as ((key: $.Slice<number>) => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null), aead: aeadAESGCM}), new cipherSuite({id: 49196, keyLen: 32, macLen: 0, ivLen: 4, ka: ecdheECDSAKA, flags: 15, cipher: (null as ((key: $.Slice<number>, iv: $.Slice<number>, isRead: boolean) => any | globalThis.Promise<any>) | null), mac: (null as ((key: $.Slice<number>) => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null), aead: aeadAESGCM}), new cipherSuite({id: 49191, keyLen: 16, macLen: 32, ivLen: 16, ka: ecdheRSAKA, flags: 5, cipher: cipherAES, mac: macSHA256, aead: (null as ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null)}), new cipherSuite({id: 49171, keyLen: 16, macLen: 20, ivLen: 16, ka: ecdheRSAKA, flags: 1, cipher: cipherAES, mac: macSHA1, aead: (null as ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null)}), new cipherSuite({id: 49187, keyLen: 16, macLen: 32, ivLen: 16, ka: ecdheECDSAKA, flags: 7, cipher: cipherAES, mac: macSHA256, aead: (null as ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null)}), new cipherSuite({id: 49161, keyLen: 16, macLen: 20, ivLen: 16, ka: ecdheECDSAKA, flags: 3, cipher: cipherAES, mac: macSHA1, aead: (null as ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null)}), new cipherSuite({id: 49172, keyLen: 32, macLen: 20, ivLen: 16, ka: ecdheRSAKA, flags: 1, cipher: cipherAES, mac: macSHA1, aead: (null as ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null)}), new cipherSuite({id: 49162, keyLen: 32, macLen: 20, ivLen: 16, ka: ecdheECDSAKA, flags: 3, cipher: cipherAES, mac: macSHA1, aead: (null as ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null)}), new cipherSuite({id: 156, keyLen: 16, macLen: 0, ivLen: 4, ka: rsaKA, flags: 4, cipher: (null as ((key: $.Slice<number>, iv: $.Slice<number>, isRead: boolean) => any | globalThis.Promise<any>) | null), mac: (null as ((key: $.Slice<number>) => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null), aead: aeadAESGCM}), new cipherSuite({id: 157, keyLen: 32, macLen: 0, ivLen: 4, ka: rsaKA, flags: 12, cipher: (null as ((key: $.Slice<number>, iv: $.Slice<number>, isRead: boolean) => any | globalThis.Promise<any>) | null), mac: (null as ((key: $.Slice<number>) => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null), aead: aeadAESGCM}), new cipherSuite({id: 60, keyLen: 16, macLen: 32, ivLen: 16, ka: rsaKA, flags: 4, cipher: cipherAES, mac: macSHA256, aead: (null as ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null)}), new cipherSuite({id: 47, keyLen: 16, macLen: 20, ivLen: 16, ka: rsaKA, flags: 0, cipher: cipherAES, mac: macSHA1, aead: (null as ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null)}), new cipherSuite({id: 53, keyLen: 32, macLen: 20, ivLen: 16, ka: rsaKA, flags: 0, cipher: cipherAES, mac: macSHA1, aead: (null as ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null)}), new cipherSuite({id: 49170, keyLen: 24, macLen: 20, ivLen: 8, ka: ecdheRSAKA, flags: 1, cipher: cipher3DES, mac: macSHA1, aead: (null as ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null)}), new cipherSuite({id: 10, keyLen: 24, macLen: 20, ivLen: 8, ka: rsaKA, flags: 0, cipher: cipher3DES, mac: macSHA1, aead: (null as ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null)}), new cipherSuite({id: 5, keyLen: 16, macLen: 20, ivLen: 0, ka: rsaKA, flags: 0, cipher: cipherRC4, mac: macSHA1, aead: (null as ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null)}), new cipherSuite({id: 49169, keyLen: 16, macLen: 20, ivLen: 0, ka: ecdheRSAKA, flags: 1, cipher: cipherRC4, mac: macSHA1, aead: (null as ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null)}), new cipherSuite({id: 49159, keyLen: 16, macLen: 20, ivLen: 0, ka: ecdheECDSAKA, flags: 3, cipher: cipherRC4, mac: macSHA1, aead: (null as ((key: $.Slice<number>, fixedNonce: $.Slice<number>) => aead | null | globalThis.Promise<aead | null>) | null)})])

export function __goscript_set_cipherSuites(__goscriptValue: $.Slice<cipherSuite | $.VarRef<cipherSuite> | null>): void {
	cipherSuites = __goscriptValue
}

export async function selectCipherSuite(ids: $.Slice<number>, supportedIDs: $.Slice<number>, ok: ((_p0: cipherSuite | $.VarRef<cipherSuite> | null) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<cipherSuite | $.VarRef<cipherSuite> | null> {
	for (let __goscriptRangeTarget3 = ids, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let id = $.uint((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as number), 16)
		let candidate: cipherSuite | $.VarRef<cipherSuite> | null = cipherSuiteByID(id)
		if ((candidate == null) || !(__goscriptAwait = ok!(candidate), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			continue
		}

		for (let __goscriptRangeTarget2 = supportedIDs, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let suppID = $.uint((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as number), 16)
			if (id == suppID) {
				return candidate
			}
		}
	}
	return null
}

export let cipherSuitesTLS13: $.Slice<cipherSuiteTLS13 | $.VarRef<cipherSuiteTLS13> | null> = $.arrayToSlice<cipherSuiteTLS13 | $.VarRef<cipherSuiteTLS13> | null>([new cipherSuiteTLS13({id: 4865, keyLen: 16, aead: aeadAESGCMTLS13, hash: 5}), new cipherSuiteTLS13({id: 4867, keyLen: 32, aead: aeadChaCha20Poly1305, hash: 5}), new cipherSuiteTLS13({id: 4866, keyLen: 32, aead: aeadAESGCMTLS13, hash: 6})])

export function __goscript_set_cipherSuitesTLS13(__goscriptValue: $.Slice<cipherSuiteTLS13 | $.VarRef<cipherSuiteTLS13> | null>): void {
	cipherSuitesTLS13 = __goscriptValue
}

export let cipherSuitesPreferenceOrder: $.Slice<number> = $.arrayToSlice<number>([49195, 49199, 49196, 49200, 52393, 52392, 49161, 49171, 49162, 49172, 156, 157, 47, 53, 49170, 10, 49187, 49191, 60, 49159, 49169, 5])

export function __goscript_set_cipherSuitesPreferenceOrder(__goscriptValue: $.Slice<number>): void {
	cipherSuitesPreferenceOrder = __goscriptValue
}

export let cipherSuitesPreferenceOrderNoAES: $.Slice<number> = $.arrayToSlice<number>([52393, 52392, 49195, 49199, 49196, 49200, 49161, 49171, 49162, 49172, 156, 157, 47, 53, 49170, 10, 49187, 49191, 60, 49159, 49169, 5])

export function __goscript_set_cipherSuitesPreferenceOrderNoAES(__goscriptValue: $.Slice<number>): void {
	cipherSuitesPreferenceOrderNoAES = __goscriptValue
}

export let disabledCipherSuites: globalThis.Map<number, boolean> | null = $.makeMap<number, boolean>([[49187, true], [49191, true], [60, true], [49159, true], [49169, true], [5, true], [10, true], [47, true], [53, true], [156, true], [157, true], [49170, true]])

export function __goscript_set_disabledCipherSuites(__goscriptValue: globalThis.Map<number, boolean> | null): void {
	disabledCipherSuites = __goscriptValue
}

export let hasGCMAsmAMD64: boolean = (($.pointerValue<{"_blank0": cpu.CacheLinePad, "HasAES": boolean, "HasADX": boolean, "HasAVX": boolean, "HasAVXVNNI": boolean, "HasAVX2": boolean, "HasAVX512": boolean, "HasAVX512F": boolean, "HasAVX512CD": boolean, "HasAVX512BW": boolean, "HasAVX512DQ": boolean, "HasAVX512VL": boolean, "HasAVX512GFNI": boolean, "HasAVX512VAES": boolean, "HasAVX512VNNI": boolean, "HasAVX512VBMI": boolean, "HasAVX512VBMI2": boolean, "HasAVX512BITALG": boolean, "HasAVX512VPOPCNTDQ": boolean, "HasAVX512VPCLMULQDQ": boolean, "HasBMI1": boolean, "HasBMI2": boolean, "HasERMS": boolean, "HasFSRM": boolean, "HasFMA": boolean, "HasGFNI": boolean, "HasOSXSAVE": boolean, "HasPCLMULQDQ": boolean, "HasPOPCNT": boolean, "HasRDTSCP": boolean, "HasSHA": boolean, "HasSSE3": boolean, "HasSSSE3": boolean, "HasSSE41": boolean, "HasSSE42": boolean, "HasVAES": boolean, "HasVPCLMULQDQ": boolean, "_blank37": cpu.CacheLinePad}>(cpu.X86).HasAES && $.pointerValue<{"_blank0": cpu.CacheLinePad, "HasAES": boolean, "HasADX": boolean, "HasAVX": boolean, "HasAVXVNNI": boolean, "HasAVX2": boolean, "HasAVX512": boolean, "HasAVX512F": boolean, "HasAVX512CD": boolean, "HasAVX512BW": boolean, "HasAVX512DQ": boolean, "HasAVX512VL": boolean, "HasAVX512GFNI": boolean, "HasAVX512VAES": boolean, "HasAVX512VNNI": boolean, "HasAVX512VBMI": boolean, "HasAVX512VBMI2": boolean, "HasAVX512BITALG": boolean, "HasAVX512VPOPCNTDQ": boolean, "HasAVX512VPCLMULQDQ": boolean, "HasBMI1": boolean, "HasBMI2": boolean, "HasERMS": boolean, "HasFSRM": boolean, "HasFMA": boolean, "HasGFNI": boolean, "HasOSXSAVE": boolean, "HasPCLMULQDQ": boolean, "HasPOPCNT": boolean, "HasRDTSCP": boolean, "HasSHA": boolean, "HasSSE3": boolean, "HasSSSE3": boolean, "HasSSE41": boolean, "HasSSE42": boolean, "HasVAES": boolean, "HasVPCLMULQDQ": boolean, "_blank37": cpu.CacheLinePad}>(cpu.X86).HasPCLMULQDQ) && $.pointerValue<{"_blank0": cpu.CacheLinePad, "HasAES": boolean, "HasADX": boolean, "HasAVX": boolean, "HasAVXVNNI": boolean, "HasAVX2": boolean, "HasAVX512": boolean, "HasAVX512F": boolean, "HasAVX512CD": boolean, "HasAVX512BW": boolean, "HasAVX512DQ": boolean, "HasAVX512VL": boolean, "HasAVX512GFNI": boolean, "HasAVX512VAES": boolean, "HasAVX512VNNI": boolean, "HasAVX512VBMI": boolean, "HasAVX512VBMI2": boolean, "HasAVX512BITALG": boolean, "HasAVX512VPOPCNTDQ": boolean, "HasAVX512VPCLMULQDQ": boolean, "HasBMI1": boolean, "HasBMI2": boolean, "HasERMS": boolean, "HasFSRM": boolean, "HasFMA": boolean, "HasGFNI": boolean, "HasOSXSAVE": boolean, "HasPCLMULQDQ": boolean, "HasPOPCNT": boolean, "HasRDTSCP": boolean, "HasSHA": boolean, "HasSSE3": boolean, "HasSSSE3": boolean, "HasSSE41": boolean, "HasSSE42": boolean, "HasVAES": boolean, "HasVPCLMULQDQ": boolean, "_blank37": cpu.CacheLinePad}>(cpu.X86).HasSSE41) && $.pointerValue<{"_blank0": cpu.CacheLinePad, "HasAES": boolean, "HasADX": boolean, "HasAVX": boolean, "HasAVXVNNI": boolean, "HasAVX2": boolean, "HasAVX512": boolean, "HasAVX512F": boolean, "HasAVX512CD": boolean, "HasAVX512BW": boolean, "HasAVX512DQ": boolean, "HasAVX512VL": boolean, "HasAVX512GFNI": boolean, "HasAVX512VAES": boolean, "HasAVX512VNNI": boolean, "HasAVX512VBMI": boolean, "HasAVX512VBMI2": boolean, "HasAVX512BITALG": boolean, "HasAVX512VPOPCNTDQ": boolean, "HasAVX512VPCLMULQDQ": boolean, "HasBMI1": boolean, "HasBMI2": boolean, "HasERMS": boolean, "HasFSRM": boolean, "HasFMA": boolean, "HasGFNI": boolean, "HasOSXSAVE": boolean, "HasPCLMULQDQ": boolean, "HasPOPCNT": boolean, "HasRDTSCP": boolean, "HasSHA": boolean, "HasSSE3": boolean, "HasSSSE3": boolean, "HasSSE41": boolean, "HasSSE42": boolean, "HasVAES": boolean, "HasVPCLMULQDQ": boolean, "_blank37": cpu.CacheLinePad}>(cpu.X86).HasSSSE3

export function __goscript_set_hasGCMAsmAMD64(__goscriptValue: boolean): void {
	hasGCMAsmAMD64 = __goscriptValue
}

export let hasGCMAsmARM64: boolean = $.pointerValue<{"_blank0": cpu.CacheLinePad, "HasAES": boolean, "HasPMULL": boolean, "HasSHA1": boolean, "HasSHA2": boolean, "HasSHA512": boolean, "HasSHA3": boolean, "HasCRC32": boolean, "HasATOMICS": boolean, "HasCPUID": boolean, "HasDIT": boolean, "HasSB": boolean, "IsNeoverse": boolean, "_blank13": cpu.CacheLinePad}>(cpu.ARM64).HasAES && $.pointerValue<{"_blank0": cpu.CacheLinePad, "HasAES": boolean, "HasPMULL": boolean, "HasSHA1": boolean, "HasSHA2": boolean, "HasSHA512": boolean, "HasSHA3": boolean, "HasCRC32": boolean, "HasATOMICS": boolean, "HasCPUID": boolean, "HasDIT": boolean, "HasSB": boolean, "IsNeoverse": boolean, "_blank13": cpu.CacheLinePad}>(cpu.ARM64).HasPMULL

export function __goscript_set_hasGCMAsmARM64(__goscriptValue: boolean): void {
	hasGCMAsmARM64 = __goscriptValue
}

export let hasGCMAsmS390X: boolean = ($.pointerValue<{"_blank0": cpu.CacheLinePad, "HasZARCH": boolean, "HasSTFLE": boolean, "HasLDISP": boolean, "HasEIMM": boolean, "HasDFP": boolean, "HasETF3EH": boolean, "HasMSA": boolean, "HasAES": boolean, "HasAESCBC": boolean, "HasAESCTR": boolean, "HasAESGCM": boolean, "HasGHASH": boolean, "HasSHA1": boolean, "HasSHA256": boolean, "HasSHA512": boolean, "HasSHA3": boolean, "HasVX": boolean, "HasVXE": boolean, "HasKDSA": boolean, "HasECDSA": boolean, "HasEDDSA": boolean, "_blank22": cpu.CacheLinePad}>(cpu.S390X).HasAES && $.pointerValue<{"_blank0": cpu.CacheLinePad, "HasZARCH": boolean, "HasSTFLE": boolean, "HasLDISP": boolean, "HasEIMM": boolean, "HasDFP": boolean, "HasETF3EH": boolean, "HasMSA": boolean, "HasAES": boolean, "HasAESCBC": boolean, "HasAESCTR": boolean, "HasAESGCM": boolean, "HasGHASH": boolean, "HasSHA1": boolean, "HasSHA256": boolean, "HasSHA512": boolean, "HasSHA3": boolean, "HasVX": boolean, "HasVXE": boolean, "HasKDSA": boolean, "HasECDSA": boolean, "HasEDDSA": boolean, "_blank22": cpu.CacheLinePad}>(cpu.S390X).HasAESCTR) && $.pointerValue<{"_blank0": cpu.CacheLinePad, "HasZARCH": boolean, "HasSTFLE": boolean, "HasLDISP": boolean, "HasEIMM": boolean, "HasDFP": boolean, "HasETF3EH": boolean, "HasMSA": boolean, "HasAES": boolean, "HasAESCBC": boolean, "HasAESCTR": boolean, "HasAESGCM": boolean, "HasGHASH": boolean, "HasSHA1": boolean, "HasSHA256": boolean, "HasSHA512": boolean, "HasSHA3": boolean, "HasVX": boolean, "HasVXE": boolean, "HasKDSA": boolean, "HasECDSA": boolean, "HasEDDSA": boolean, "_blank22": cpu.CacheLinePad}>(cpu.S390X).HasGHASH

export function __goscript_set_hasGCMAsmS390X(__goscriptValue: boolean): void {
	hasGCMAsmS390X = __goscriptValue
}

export let hasGCMAsmPPC64: boolean = ($.stringEqual(runtime.GOARCH, "ppc64")) || ($.stringEqual(runtime.GOARCH, "ppc64le"))

export function __goscript_set_hasGCMAsmPPC64(__goscriptValue: boolean): void {
	hasGCMAsmPPC64 = __goscriptValue
}

export let hasAESGCMHardwareSupport: boolean = ((hasGCMAsmAMD64 || hasGCMAsmARM64) || hasGCMAsmS390X) || hasGCMAsmPPC64

export function __goscript_set_hasAESGCMHardwareSupport(__goscriptValue: boolean): void {
	hasAESGCMHardwareSupport = __goscriptValue
}

export let aesgcmCiphers: globalThis.Map<number, boolean> | null = $.makeMap<number, boolean>([[49199, true], [49200, true], [49195, true], [49196, true], [4865, true], [4866, true]])

export function __goscript_set_aesgcmCiphers(__goscriptValue: globalThis.Map<number, boolean> | null): void {
	aesgcmCiphers = __goscriptValue
}

export function isAESGCMPreferred(ciphers: $.Slice<number>): boolean {
	if (!hasAESGCMHardwareSupport) {
		return false
	}
	for (let __goscriptRangeTarget4 = ciphers, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let cID = $.uint((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as number), 16)
		{
			let c: cipherSuite | $.VarRef<cipherSuite> | null = cipherSuiteByID(cID)
			if (c != null) {
				return $.mapGet<number, boolean, boolean>(aesgcmCiphers, cID, false)[0]
			}
		}
		{
			let c: cipherSuiteTLS13 | $.VarRef<cipherSuiteTLS13> | null = cipherSuiteTLS13ByID(cID)
			if (c != null) {
				return $.mapGet<number, boolean, boolean>(aesgcmCiphers, cID, false)[0]
			}
		}
	}
	return false
}

export function cipherRC4(key: $.Slice<number>, iv: $.Slice<number>, isRead: boolean): any {
	let __goscriptTuple0: any = rc4.NewCipher(key)
	let __goscriptShadow0: rc4.Cipher | $.VarRef<rc4.Cipher> | null = __goscriptTuple0[0]
	return $.interfaceValue(__goscriptShadow0, "*rc4.Cipher", /* @__PURE__ */ $.pointerType("rc4.Cipher"))
}

export async function cipher3DES(key: $.Slice<number>, iv: $.Slice<number>, isRead: boolean): globalThis.Promise<any> {
	let [block, ] = await des.NewTripleDESCipher(key)
	if (isRead) {
		return (cipher2.NewCBCDecrypter($.pointerValueOrNil(block)!, iv) as any)
	}
	return (cipher2.NewCBCEncrypter($.pointerValueOrNil(block)!, iv) as any)
}

export function cipherAES(key: $.Slice<number>, iv: $.Slice<number>, isRead: boolean): any {
	let [block, ] = aes2.NewCipher(key)
	if (isRead) {
		return (cipher2.NewCBCDecrypter($.pointerValueOrNil(block)!, iv) as any)
	}
	return (cipher2.NewCBCEncrypter($.pointerValueOrNil(block)!, iv) as any)
}

export async function macSHA1(key: $.Slice<number>): globalThis.Promise<hash2.Hash | null> {
	let h: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null = sha1.New
	// The BoringCrypto SHA1 does not have a constant-time
	// checksum function, so don't try to use it.
	if (!boring.Enabled) {
		h = newConstantTimeHash(h)
	}
	return hmac.New(h, key)
}

export async function macSHA256(key: $.Slice<number>): globalThis.Promise<hash2.Hash | null> {
	return hmac.New(sha256.New, key)
}

export function aeadAESGCM(key: $.Slice<number>, noncePrefix: $.Slice<number>): aead | null {
	if ($.sliceLen(noncePrefix) != 4) {
		$.panic("tls: internal error: wrong nonce length")
	}
	let __goscriptTuple2: any = aes2.NewCipher(key)
	let __goscriptShadow1 = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if (err != null) {
		$.panic((err as any))
	}
	let __goscriptShadow2: cipher2.AEAD | null = null! as cipher2.AEAD | null
	if (boring.Enabled) {
		let __goscriptTuple3: any = boring.NewGCMTLS(__goscriptShadow1)
		__goscriptShadow2 = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
	} else {
		boring.Unreachable()
		let __goscriptTuple4: any = gcm.NewGCMForTLS12(((__goscriptShadow1 as any)?.__goType === "*aes.Block" && (__goscriptShadow1 as any).__goValue === undefined && (__goscriptShadow1 as any).__isTypedNil !== true ? ((__goscriptShadow1 as any) as fipsaes.Block | $.VarRef<fipsaes.Block> | null) : $.mustTypeAssert<fipsaes.Block | $.VarRef<fipsaes.Block> | null>(__goscriptShadow1, /* @__PURE__ */ $.pointerType("aes.Block"))))
		__goscriptShadow2 = $.interfaceValue<cipher2.AEAD | null>(__goscriptTuple4[0], "*gcm.GCMWithCounterNonce", /* @__PURE__ */ $.pointerType("gcm.GCMWithCounterNonce"))
		err = __goscriptTuple4[1]
	}
	if (err != null) {
		$.panic((err as any))
	}

	let ret: prefixNonceAEAD | $.VarRef<prefixNonceAEAD> | null = new prefixNonceAEAD({aead: __goscriptShadow2})
	$.copy($.goSlice($.pointerValue<prefixNonceAEAD>(ret).nonce, undefined, undefined), noncePrefix)
	return $.interfaceValue<aead | null>(ret, "*tls.prefixNonceAEAD", /* @__PURE__ */ $.pointerType("tls.prefixNonceAEAD"))
}

export function aeadAESGCMTLS13(key: $.Slice<number>, nonceMask: $.Slice<number>): aead | null {
	if ($.sliceLen(nonceMask) != 12) {
		$.panic("tls: internal error: wrong nonce length")
	}
	let __goscriptTuple5: any = aes2.NewCipher(key)
	let __goscriptShadow3 = __goscriptTuple5[0]
	let err = __goscriptTuple5[1]
	if (err != null) {
		$.panic((err as any))
	}
	let __goscriptShadow4: cipher2.AEAD | null = null! as cipher2.AEAD | null
	if (boring.Enabled) {
		let __goscriptTuple6: any = boring.NewGCMTLS13(__goscriptShadow3)
		__goscriptShadow4 = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
	} else {
		boring.Unreachable()
		let __goscriptTuple7: any = gcm.NewGCMForTLS13(((__goscriptShadow3 as any)?.__goType === "*aes.Block" && (__goscriptShadow3 as any).__goValue === undefined && (__goscriptShadow3 as any).__isTypedNil !== true ? ((__goscriptShadow3 as any) as fipsaes.Block | $.VarRef<fipsaes.Block> | null) : $.mustTypeAssert<fipsaes.Block | $.VarRef<fipsaes.Block> | null>(__goscriptShadow3, /* @__PURE__ */ $.pointerType("aes.Block"))))
		__goscriptShadow4 = $.interfaceValue<cipher2.AEAD | null>(__goscriptTuple7[0], "*gcm.GCMWithXORCounterNonce", /* @__PURE__ */ $.pointerType("gcm.GCMWithXORCounterNonce"))
		err = __goscriptTuple7[1]
	}
	if (err != null) {
		$.panic((err as any))
	}

	let ret: xorNonceAEAD | $.VarRef<xorNonceAEAD> | null = new xorNonceAEAD({aead: __goscriptShadow4})
	$.copy($.goSlice($.pointerValue<xorNonceAEAD>(ret).nonceMask, undefined, undefined), nonceMask)
	return $.interfaceValue<aead | null>(ret, "*tls.xorNonceAEAD", /* @__PURE__ */ $.pointerType("tls.xorNonceAEAD"))
}

export function aeadChaCha20Poly1305(key: $.Slice<number>, nonceMask: $.Slice<number>): aead | null {
	if ($.sliceLen(nonceMask) != 12) {
		$.panic("tls: internal error: wrong nonce length")
	}
	let [__goscriptShadow5, err] = chacha20poly1305.New(key)
	if (err != null) {
		$.panic((err as any))
	}

	let ret: xorNonceAEAD | $.VarRef<xorNonceAEAD> | null = new xorNonceAEAD({aead: __goscriptShadow5})
	$.copy($.goSlice($.pointerValue<xorNonceAEAD>(ret).nonceMask, undefined, undefined), nonceMask)
	return $.interfaceValue<aead | null>(ret, "*tls.xorNonceAEAD", /* @__PURE__ */ $.pointerType("tls.xorNonceAEAD"))
}

export function newConstantTimeHash(h: (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null): (() => hash2.Hash | null | globalThis.Promise<hash2.Hash | null>) | null {
	boring.Unreachable()
	return $.functionValue(async (): globalThis.Promise<hash2.Hash | null> => {
		return $.interfaceValue<hash2.Hash | null>(new cthWrapper({h: $.mustTypeAssert<constantTimeHash | null>((__goscriptAwait = h!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "tls.constantTimeHash")}), "*tls.cthWrapper", /* @__PURE__ */ $.pointerType("tls.cthWrapper"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo))
}

export async function tls10MAC(h: hash2.Hash | null, out: $.Slice<number>, seq: $.Slice<number>, header: $.Slice<number>, data: $.Slice<number>, extra: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Write(seq)
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Write(header)
	await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Write(data)
	let res: $.Slice<number> = await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Sum(out)
	if (extra != null) {
		await (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(h)).Write(extra)
	}
	return res
}

export function rsaKA(version: number): __goscript_key_agreement.keyAgreement | null {
	return $.interfaceValue<__goscript_key_agreement.keyAgreement | null>(new __goscript_key_agreement.rsaKeyAgreement(undefined, true), "tls.rsaKeyAgreement", "tls.rsaKeyAgreement")
}

export function ecdheECDSAKA(version: number): __goscript_key_agreement.keyAgreement | null {
	return $.interfaceValue<__goscript_key_agreement.keyAgreement | null>(new __goscript_key_agreement.ecdheKeyAgreement({isRSA: false, version: version}), "*tls.ecdheKeyAgreement", /* @__PURE__ */ $.pointerType("tls.ecdheKeyAgreement"))
}

export function ecdheRSAKA(version: number): __goscript_key_agreement.keyAgreement | null {
	return $.interfaceValue<__goscript_key_agreement.keyAgreement | null>(new __goscript_key_agreement.ecdheKeyAgreement({isRSA: true, version: version}), "*tls.ecdheKeyAgreement", /* @__PURE__ */ $.pointerType("tls.ecdheKeyAgreement"))
}

export function mutualCipherSuite(have: $.Slice<number>, want: number): cipherSuite | $.VarRef<cipherSuite> | null {
	for (let __goscriptRangeTarget9 = have, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
		let id = $.uint((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as number), 16)
		if (id == want) {
			return cipherSuiteByID(id)
		}
	}
	return null
}

export function cipherSuiteByID(id: number): cipherSuite | $.VarRef<cipherSuite> | null {
	for (let __goscriptRangeTarget10 = cipherSuites, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
		let cipherSuite = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as cipherSuite | $.VarRef<cipherSuite> | null)
		if ($.pointerValue<cipherSuite>(cipherSuite).id == id) {
			return cipherSuite
		}
	}
	return null
}

export function mutualCipherSuiteTLS13(have: $.Slice<number>, want: number): cipherSuiteTLS13 | $.VarRef<cipherSuiteTLS13> | null {
	for (let __goscriptRangeTarget11 = have, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
		let id = $.uint((__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as number), 16)
		if (id == want) {
			return cipherSuiteTLS13ByID(id)
		}
	}
	return null
}

export function cipherSuiteTLS13ByID(id: number): cipherSuiteTLS13 | $.VarRef<cipherSuiteTLS13> | null {
	for (let __goscriptRangeTarget12 = cipherSuitesTLS13, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
		let cipherSuite = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as cipherSuiteTLS13 | $.VarRef<cipherSuiteTLS13> | null)
		if ($.pointerValue<cipherSuiteTLS13>(cipherSuite).id == id) {
			return cipherSuite
		}
	}
	return null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: { type: "hash.Hash", zero: () => null, methods: {BlockSize: (receiver: any, ...args: any[]) => receiver.BlockSize(...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => receiver.Reset(...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => receiver.Size(...$.stripGenericTypeArgs(args)), Sum: (receiver: any, ...args: any[]) => receiver.Sum(...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => receiver.Write(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any
