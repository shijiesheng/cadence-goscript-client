// Generated file based on key_agreement.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as md5 from "@goscript/crypto/md5/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"

import * as sha1 from "@goscript/crypto/sha1/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as slices2 from "@goscript/slices/index.js"

import * as context from "@goscript/context/index.js"

import * as hash from "@goscript/hash/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_auth from "./auth.gs.ts"

import * as __goscript_common from "./common.gs.ts"

import * as __goscript_common_string from "./common_string.gs.ts"

import * as __goscript_handshake_messages from "./handshake_messages.gs.ts"

import * as __goscript_ticket from "./ticket.gs.ts"
import "@goscript/crypto/index.js"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/crypto/md5/index.js"
import "@goscript/crypto/rsa/index.js"
import "@goscript/crypto/sha1/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/slices/index.js"
import "@goscript/context/index.js"
import "@goscript/hash/index.js"
import "@goscript/internal/godebug/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./auth.gs.ts"
import "./common.gs.ts"
import "./common_string.gs.ts"
import "./handshake_messages.gs.ts"
import "./ticket.gs.ts"

$.registerTypePackagePath("crypto/tls", ["tls.keyAgreement", "tls.rsaKeyAgreement", "tls.ecdheKeyAgreement"])

export type keyAgreement = {
	generateClientKeyExchange(_p0: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null, _p1: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, _p2: x509.Certificate | $.VarRef<x509.Certificate> | null): [$.Slice<number>, __goscript_handshake_messages.clientKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.clientKeyExchangeMsg> | null, $.GoError] | globalThis.Promise<[$.Slice<number>, __goscript_handshake_messages.clientKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.clientKeyExchangeMsg> | null, $.GoError]>
	generateServerKeyExchange(_p0: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null, _p1: __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null, _p2: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, _p3: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null): [__goscript_handshake_messages.serverKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.serverKeyExchangeMsg> | null, $.GoError] | globalThis.Promise<[__goscript_handshake_messages.serverKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.serverKeyExchangeMsg> | null, $.GoError]>
	processClientKeyExchange(_p0: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null, _p1: __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null, _p2: __goscript_handshake_messages.clientKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.clientKeyExchangeMsg> | null, _p3: number): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	processServerKeyExchange(_p0: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null, _p1: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, _p2: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null, _p3: x509.Certificate | $.VarRef<x509.Certificate> | null, _p4: __goscript_handshake_messages.serverKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.serverKeyExchangeMsg> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"tls.keyAgreement",
	null,
	[$.methodSignature("generateClientKeyExchange", [/* @__PURE__ */ $.pointerType("tls.Config"), /* @__PURE__ */ $.pointerType("tls.clientHelloMsg"), /* @__PURE__ */ $.pointerType("x509.Certificate")], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.pointerType("tls.clientKeyExchangeMsg"), "error"]), $.methodSignature("generateServerKeyExchange", [/* @__PURE__ */ $.pointerType("tls.Config"), /* @__PURE__ */ $.pointerType("tls.Certificate"), /* @__PURE__ */ $.pointerType("tls.clientHelloMsg"), /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")], [/* @__PURE__ */ $.pointerType("tls.serverKeyExchangeMsg"), "error"]), $.methodSignature("processClientKeyExchange", [/* @__PURE__ */ $.pointerType("tls.Config"), /* @__PURE__ */ $.pointerType("tls.Certificate"), /* @__PURE__ */ $.pointerType("tls.clientKeyExchangeMsg"), /* @__PURE__ */ $.basicType("uint16")], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("processServerKeyExchange", [/* @__PURE__ */ $.pointerType("tls.Config"), /* @__PURE__ */ $.pointerType("tls.clientHelloMsg"), /* @__PURE__ */ $.pointerType("tls.serverHelloMsg"), /* @__PURE__ */ $.pointerType("x509.Certificate"), /* @__PURE__ */ $.pointerType("tls.serverKeyExchangeMsg")], ["error"])]
);

export class rsaKeyAgreement {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): rsaKeyAgreement {
		return new rsaKeyAgreement(this, true)
	}

	public __goscriptAssign(source: rsaKeyAgreement): void {
	}

	public async generateClientKeyExchange(config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null, clientHello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, cert: x509.Certificate | $.VarRef<x509.Certificate> | null): globalThis.Promise<[$.Slice<number>, __goscript_handshake_messages.clientKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.clientKeyExchangeMsg> | null, $.GoError]> {
		const ka = this;
		const clientHello$: __goscript_handshake_messages.clientHelloMsg = clientHello == null ? $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(clientHello) : (clientHello as any).__isVarRef === true ? (clientHello as any).value : (clientHello as any).__goValue === undefined ? (clientHello as any) : $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(clientHello)
		let preMasterSecret: $.Slice<number> = $.makeSlice<number>(48, undefined, "byte")
		$.sliceElems(preMasterSecret!)[$.sliceSlot(preMasterSecret!, 0)] = $.uint($.uintShr((clientHello$ as __goscript_handshake_messages.clientHelloMsg).vers, 8, 16), 8)
		$.sliceElems(preMasterSecret!)[$.sliceSlot(preMasterSecret!, 1)] = $.uint((clientHello$ as __goscript_handshake_messages.clientHelloMsg).vers, 8)
		let [, err] = await io.ReadFull($.pointerValueOrNil((config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as __goscript_common.Config).rand() : __goscript_common.Config.prototype.rand.call(config)))!, $.goSlice(preMasterSecret, 2, undefined))
		if (err != null) {
			return [null, null, err]
		}

		let __goscriptTuple0: any = $.typeAssertTuple<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>($.pointerValue<x509.Certificate>(cert).PublicKey, /* @__PURE__ */ $.pointerType("rsa.PublicKey"))
		let rsaKey: rsa.PublicKey | $.VarRef<rsa.PublicKey> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			return [null, null, errors.New("tls: server certificate contains incorrect key type for selected ciphersuite")]
		}
		let __goscriptTuple1: any = await rsa.EncryptPKCS1v15((config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as __goscript_common.Config).rand() : __goscript_common.Config.prototype.rand.call(config)), rsaKey, preMasterSecret)
		let encrypted: $.Slice<number> = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, null, err]
		}
		let ckx: __goscript_handshake_messages.clientKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.clientKeyExchangeMsg> | null = new __goscript_handshake_messages.clientKeyExchangeMsg()
		let ckx$: __goscript_handshake_messages.clientKeyExchangeMsg = ckx == null ? $.pointerTarget<__goscript_handshake_messages.clientKeyExchangeMsg>(ckx) : (ckx as any).__isVarRef === true ? (ckx as any).value : (ckx as any).__goValue === undefined ? (ckx as any) : $.pointerTarget<__goscript_handshake_messages.clientKeyExchangeMsg>(ckx);
		;(ckx$ as __goscript_handshake_messages.clientKeyExchangeMsg).ciphertext = $.makeSlice<number>($.sliceLen(encrypted) + 2, undefined, "byte")
		$.sliceElems((ckx$ as __goscript_handshake_messages.clientKeyExchangeMsg).ciphertext!)[$.sliceSlot((ckx$ as __goscript_handshake_messages.clientKeyExchangeMsg).ciphertext!, 0)] = $.uint($.sliceLen(encrypted) >> 8, 8)
		$.sliceElems((ckx$ as __goscript_handshake_messages.clientKeyExchangeMsg).ciphertext!)[$.sliceSlot((ckx$ as __goscript_handshake_messages.clientKeyExchangeMsg).ciphertext!, 1)] = $.uint($.sliceLen(encrypted), 8)
		$.copy($.goSlice((ckx$ as __goscript_handshake_messages.clientKeyExchangeMsg).ciphertext, 2, undefined), encrypted)
		return [preMasterSecret, ckx, null]
	}

	public generateServerKeyExchange(config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null, cert: __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null, clientHello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, hello: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null): [__goscript_handshake_messages.serverKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.serverKeyExchangeMsg> | null, $.GoError] {
		const ka = this;
		return [null, null]
	}

	public async processClientKeyExchange(config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null, cert: __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null, ckx: __goscript_handshake_messages.clientKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.clientKeyExchangeMsg> | null, version: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const ka = this;
		const ckx$: __goscript_handshake_messages.clientKeyExchangeMsg = ckx == null ? $.pointerTarget<__goscript_handshake_messages.clientKeyExchangeMsg>(ckx) : (ckx as any).__isVarRef === true ? (ckx as any).value : (ckx as any).__goValue === undefined ? (ckx as any) : $.pointerTarget<__goscript_handshake_messages.clientKeyExchangeMsg>(ckx)
		if ($.sliceLen((ckx$ as __goscript_handshake_messages.clientKeyExchangeMsg).ciphertext) < 2) {
			return [null, errClientKeyExchange]
		}
		let ciphertextLen = ($.int($.arrayIndex((ckx$ as __goscript_handshake_messages.clientKeyExchangeMsg).ciphertext!, 0)) << 8) | $.int($.arrayIndex((ckx$ as __goscript_handshake_messages.clientKeyExchangeMsg).ciphertext!, 1))
		if (ciphertextLen != ($.sliceLen((ckx$ as __goscript_handshake_messages.clientKeyExchangeMsg).ciphertext) - 2)) {
			return [null, errClientKeyExchange]
		}
		let ciphertext: $.Slice<number> = $.goSlice((ckx$ as __goscript_handshake_messages.clientKeyExchangeMsg).ciphertext, 2, undefined)

		let [priv, ok] = $.typeAssertTuple<crypto.Decrypter | null>($.pointerValue<__goscript_common.Certificate>(cert).PrivateKey, "crypto.Decrypter")
		if (!ok) {
			return [null, errors.New("tls: certificate private key does not implement crypto.Decrypter")]
		}
		// Perform constant time RSA PKCS #1 v1.5 decryption
		let __goscriptTuple2: any = await (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? (priv as Exclude<crypto.Decrypter, null>) : $.pointerValue<Exclude<crypto.Decrypter, null>>(priv)).Decrypt((config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as __goscript_common.Config).rand() : __goscript_common.Config.prototype.rand.call(config)), ciphertext, $.interfaceValue<crypto.DecrypterOpts | null>(new rsa.PKCS1v15DecryptOptions({SessionKeyLen: 48}), "*rsa.PKCS1v15DecryptOptions", /* @__PURE__ */ $.pointerType("rsa.PKCS1v15DecryptOptions")))
		let preMasterSecret: $.Slice<number> = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		// We don't check the version number in the premaster secret. For one,
		// by checking it, we would leak information about the validity of the
		// encrypted pre-master secret. Secondly, it provides only a small
		// benefit against a downgrade attack and some implementations send the
		// wrong version anyway. See the discussion at the end of section
		// 7.4.7.1 of RFC 4346.
		return [preMasterSecret, null]
	}

	public processServerKeyExchange(config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null, clientHello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, serverHello: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null, cert: x509.Certificate | $.VarRef<x509.Certificate> | null, skx: __goscript_handshake_messages.serverKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.serverKeyExchangeMsg> | null): $.GoError {
		const ka = this;
		return errors.New("tls: unexpected ServerKeyExchange")
	}

	static __typeInfo = $.registerStructType(
		"tls.rsaKeyAgreement",
		() => new rsaKeyAgreement(),
		() => [$.methodSignature("generateClientKeyExchange", [["config", /* @__PURE__ */ $.pointerType("tls.Config")], ["clientHello", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")], ["cert", /* @__PURE__ */ $.pointerType("x509.Certificate")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.pointerType("tls.clientKeyExchangeMsg"), "error"]), $.methodSignature("generateServerKeyExchange", [["config", /* @__PURE__ */ $.pointerType("tls.Config")], ["cert", /* @__PURE__ */ $.pointerType("tls.Certificate")], ["clientHello", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")], ["hello", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")]], [/* @__PURE__ */ $.pointerType("tls.serverKeyExchangeMsg"), "error"]), $.methodSignature("processClientKeyExchange", [["config", /* @__PURE__ */ $.pointerType("tls.Config")], ["cert", /* @__PURE__ */ $.pointerType("tls.Certificate")], ["ckx", /* @__PURE__ */ $.pointerType("tls.clientKeyExchangeMsg")], ["version", /* @__PURE__ */ $.basicType("uint16")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("processServerKeyExchange", [["config", /* @__PURE__ */ $.pointerType("tls.Config")], ["clientHello", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")], ["serverHello", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")], ["cert", /* @__PURE__ */ $.pointerType("x509.Certificate")], ["skx", /* @__PURE__ */ $.pointerType("tls.serverKeyExchangeMsg")]], ["error"])],
		rsaKeyAgreement,
		() => []
	)
}

export class ecdheKeyAgreement {
	public get version(): number {
		return this._fields.version
	}

	public set version(value: number) {
		this._fields.version = value
	}

	public get isRSA(): boolean {
		return this._fields.isRSA
	}

	public set isRSA(value: boolean) {
		this._fields.isRSA = value
	}

	// ckx and preMasterSecret are generated in processServerKeyExchange
	// and returned in generateClientKeyExchange.
	public get ckx(): __goscript_handshake_messages.clientKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.clientKeyExchangeMsg> | null {
		return this._fields.ckx
	}

	public set ckx(value: __goscript_handshake_messages.clientKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.clientKeyExchangeMsg> | null) {
		this._fields.ckx = value
	}

	public get preMasterSecret(): $.Slice<number> {
		return this._fields.preMasterSecret
	}

	public set preMasterSecret(value: $.Slice<number>) {
		this._fields.preMasterSecret = value
	}

	// curveID, signatureAlgorithm, and key are set by processServerKeyExchange
	// and generateServerKeyExchange.
	public get curveID(): __goscript_common.CurveID {
		return this._fields.curveID
	}

	public set curveID(value: __goscript_common.CurveID) {
		this._fields.curveID = value
	}

	public get signatureAlgorithm(): __goscript_common.SignatureScheme {
		return this._fields.signatureAlgorithm
	}

	public set signatureAlgorithm(value: __goscript_common.SignatureScheme) {
		this._fields.signatureAlgorithm = value
	}

	public get key(): ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null {
		return this._fields.key
	}

	public set key(value: ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null) {
		this._fields.key = value
	}

	public _fields: {
		version: number
		isRSA: boolean
		ckx: __goscript_handshake_messages.clientKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.clientKeyExchangeMsg> | null
		preMasterSecret: $.Slice<number>
		curveID: __goscript_common.CurveID
		signatureAlgorithm: __goscript_common.SignatureScheme
		key: ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null
	}

	constructor(init?: Partial<{version?: number, isRSA?: boolean, ckx?: __goscript_handshake_messages.clientKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.clientKeyExchangeMsg> | null, preMasterSecret?: $.Slice<number>, curveID?: __goscript_common.CurveID, signatureAlgorithm?: __goscript_common.SignatureScheme, key?: ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			version: init?.version ?? (0 as number),
			isRSA: init?.isRSA ?? (false as boolean),
			ckx: init?.ckx ?? (null! as __goscript_handshake_messages.clientKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.clientKeyExchangeMsg> | null),
			preMasterSecret: init?.preMasterSecret ?? (null! as $.Slice<number>),
			curveID: init?.curveID ?? (0 as __goscript_common.CurveID),
			signatureAlgorithm: init?.signatureAlgorithm ?? (0 as __goscript_common.SignatureScheme),
			key: init?.key ?? (null! as ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ecdheKeyAgreement {
		return new ecdheKeyAgreement(this, true)
	}

	public __goscriptAssign(source: ecdheKeyAgreement): void {
		const target = this._fields
		const values = source._fields
		target.version = values.version
		target.isRSA = values.isRSA
		target.ckx = values.ckx
		target.preMasterSecret = values.preMasterSecret
		target.curveID = values.curveID
		target.signatureAlgorithm = values.signatureAlgorithm
		target.key = values.key
	}

	public generateClientKeyExchange(config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null, clientHello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, cert: x509.Certificate | $.VarRef<x509.Certificate> | null): [$.Slice<number>, __goscript_handshake_messages.clientKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.clientKeyExchangeMsg> | null, $.GoError] {
		const ka: ecdheKeyAgreement | $.VarRef<ecdheKeyAgreement> | null = this;
		const ka$: ecdheKeyAgreement = ka == null ? $.pointerTarget<ecdheKeyAgreement>(ka) : (ka as any).__isVarRef === true ? (ka as any).value : (ka as any).__goValue === undefined ? (ka as any) : $.pointerTarget<ecdheKeyAgreement>(ka)
		if ((ka$ as ecdheKeyAgreement).ckx == null) {
			return [null, null, errors.New("tls: missing ServerKeyExchange message")]
		}

		return [(ka$ as ecdheKeyAgreement).preMasterSecret, (ka$ as ecdheKeyAgreement).ckx, null]
	}

	public async generateServerKeyExchange(config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null, cert: __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null, clientHello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, hello: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null): globalThis.Promise<[__goscript_handshake_messages.serverKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.serverKeyExchangeMsg> | null, $.GoError]> {
		let ka: ecdheKeyAgreement | $.VarRef<ecdheKeyAgreement> | null = this;
		const ka$: ecdheKeyAgreement = ka == null ? $.pointerTarget<ecdheKeyAgreement>(ka) : (ka as any).__isVarRef === true ? (ka as any).value : (ka as any).__goValue === undefined ? (ka as any) : $.pointerTarget<ecdheKeyAgreement>(ka)
		const cert$: __goscript_common.Certificate = cert == null ? $.pointerTarget<__goscript_common.Certificate>(cert) : (cert as any).__isVarRef === true ? (cert as any).value : (cert as any).__goValue === undefined ? (cert as any) : $.pointerTarget<__goscript_common.Certificate>(cert)
		const clientHello$: __goscript_handshake_messages.clientHelloMsg = clientHello == null ? $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(clientHello) : (clientHello as any).__isVarRef === true ? (clientHello as any).value : (clientHello as any).__goValue === undefined ? (clientHello as any) : $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(clientHello)
		const hello$: __goscript_handshake_messages.serverHelloMsg = hello == null ? $.pointerTarget<__goscript_handshake_messages.serverHelloMsg>(hello) : (hello as any).__isVarRef === true ? (hello as any).value : (hello as any).__goValue === undefined ? (hello as any) : $.pointerTarget<__goscript_handshake_messages.serverHelloMsg>(hello)
		for (let __goscriptRangeTarget2 = (clientHello$ as __goscript_handshake_messages.clientHelloMsg).supportedCurves, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let c = $.uint((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_common.CurveID), 16)
			if ((config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as __goscript_common.Config).supportsCurve((ka$ as ecdheKeyAgreement).version, c) : __goscript_common.Config.prototype.supportsCurve.call(config, (ka$ as ecdheKeyAgreement).version, c))) {
				;(ka$ as ecdheKeyAgreement).curveID = c
				break
			}
		}

		if ((ka$ as ecdheKeyAgreement).curveID == 0) {
			return [null, errors.New("tls: no supported elliptic curves offered")]
		}
		{
			let [, ok] = curveForCurveID((ka$ as ecdheKeyAgreement).curveID)
			if (!ok) {
				return [null, errors.New("tls: internal error: supportsCurve accepted unimplemented curve")]
			}
		}

		let __goscriptTuple3: any = await generateECDHEKey((config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as __goscript_common.Config).rand() : __goscript_common.Config.prototype.rand.call(config)), (ka$ as ecdheKeyAgreement).curveID)
		let key: ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		;(ka$ as ecdheKeyAgreement).key = key

		// See RFC 4492, Section 5.4.
		let ecdhePublic: $.Slice<number> = ecdh.PublicKey.prototype.Bytes.call($.pointerValue<ecdh.PublicKey>(ecdh.PrivateKey.prototype.PublicKey.call($.pointerValue<ecdh.PrivateKey>(key))))
		let serverECDHEParams: $.Slice<number> = $.makeSlice<number>(((1 + 2) + 1) + $.sliceLen(ecdhePublic), undefined, "byte")
		$.sliceElems(serverECDHEParams!)[$.sliceSlot(serverECDHEParams!, 0)] = 3
		$.sliceElems(serverECDHEParams!)[$.sliceSlot(serverECDHEParams!, 1)] = $.uint($.uintShr((ka$ as ecdheKeyAgreement).curveID, 8, 16), 8)
		$.sliceElems(serverECDHEParams!)[$.sliceSlot(serverECDHEParams!, 2)] = $.uint((ka$ as ecdheKeyAgreement).curveID, 8)
		$.sliceElems(serverECDHEParams!)[$.sliceSlot(serverECDHEParams!, 3)] = $.uint($.sliceLen(ecdhePublic), 8)
		$.copy($.goSlice(serverECDHEParams, 4, undefined), ecdhePublic)

		let [priv, ok] = $.typeAssertTuple<crypto.Signer | null>((cert$ as __goscript_common.Certificate).PrivateKey, "crypto.Signer")
		if (!ok) {
			return [null, fmt.Errorf("tls: certificate private key of type %T does not implement crypto.Signer", ((cert$ as __goscript_common.Certificate).PrivateKey as any))]
		}

		let sig: $.Slice<number> = null! as $.Slice<number>
		if ((ka$ as ecdheKeyAgreement).version >= 771) {
			let __goscriptTuple4: any = await __goscript_auth.selectSignatureScheme((ka$ as ecdheKeyAgreement).version, cert, (clientHello$ as __goscript_handshake_messages.clientHelloMsg).supportedSignatureAlgorithms);
			;(ka$ as ecdheKeyAgreement).signatureAlgorithm = __goscriptTuple4[0]
			err = __goscriptTuple4[1]
			if (err != null) {
				return [null, err]
			}
			let [sigType, sigHash, __goscriptShadow0] = __goscript_auth.typeAndHashFromSignatureScheme((ka$ as ecdheKeyAgreement).signatureAlgorithm)
			if (__goscriptShadow0 != null) {
				return [null, __goscriptShadow0]
			}
			if (sigHash == 3) {
				godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(__goscript_common.tlssha1))
				godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(__goscript_common.tlssha1))
			}
			let signed: $.Slice<number> = (slices2.Concat((clientHello$ as __goscript_handshake_messages.clientHelloMsg).random, (hello$ as __goscript_handshake_messages.serverHelloMsg).random, serverECDHEParams) as $.Slice<number>)
			if (((sigType == 225) || (sigType == 226)) != (ka$ as ecdheKeyAgreement).isRSA) {
				return [null, errors.New("tls: certificate cannot be used with the selected cipher suite")]
			}
			let signOpts = $.namedValueInterfaceValue<crypto.SignerOpts | null>(sigHash, "crypto.Hash", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
			if (sigType == 226) {
				signOpts = $.interfaceValue<crypto.SignerOpts | null>(new rsa.PSSOptions({SaltLength: -1, Hash: sigHash}), "*rsa.PSSOptions", /* @__PURE__ */ $.pointerType("rsa.PSSOptions"))
			}
			let __goscriptTuple5: any = await crypto.SignMessage(priv, (config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as __goscript_common.Config).rand() : __goscript_common.Config.prototype.rand.call(config)), signed, signOpts)
			sig = __goscriptTuple5[0]
			__goscriptShadow0 = __goscriptTuple5[1]
			if (__goscriptShadow0 != null) {
				return [null, errors.New($.concatString("tls: failed to sign ECDHE parameters: ", (__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow0)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
			}
		} else {
			let [sigType, sigHash, __goscriptShadow1] = __goscript_auth.legacyTypeAndHashFromPublicKey((__goscriptAwait = (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? (priv as Exclude<crypto.Signer, null>) : $.pointerValue<Exclude<crypto.Signer, null>>(priv)).Public(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			if (__goscriptShadow1 != null) {
				return [null, __goscriptShadow1]
			}
			let signed: $.Slice<number> = await hashForServerKeyExchange(sigType, $.arrayToSlice<$.Slice<number>>([(clientHello$ as __goscript_handshake_messages.clientHelloMsg).random, (hello$ as __goscript_handshake_messages.serverHelloMsg).random, serverECDHEParams]))
			if ((sigType == 225) != (ka$ as ecdheKeyAgreement).isRSA) {
				return [null, errors.New("tls: certificate cannot be used with the selected cipher suite")]
			}
			let __goscriptTuple6: any = await (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? (priv as Exclude<crypto.Signer, null>) : $.pointerValue<Exclude<crypto.Signer, null>>(priv)).Sign((config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as __goscript_common.Config).rand() : __goscript_common.Config.prototype.rand.call(config)), signed, $.namedValueInterfaceValue<crypto.SignerOpts | null>(sigHash, "crypto.Hash", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			sig = __goscriptTuple6[0]
			__goscriptShadow1 = __goscriptTuple6[1]
			if (__goscriptShadow1 != null) {
				return [null, errors.New($.concatString("tls: failed to sign ECDHE parameters: ", (__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow1)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))]
			}
		}

		let skx: __goscript_handshake_messages.serverKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.serverKeyExchangeMsg> | null = new __goscript_handshake_messages.serverKeyExchangeMsg()
		let skx$: __goscript_handshake_messages.serverKeyExchangeMsg = skx == null ? $.pointerTarget<__goscript_handshake_messages.serverKeyExchangeMsg>(skx) : (skx as any).__isVarRef === true ? (skx as any).value : (skx as any).__goValue === undefined ? (skx as any) : $.pointerTarget<__goscript_handshake_messages.serverKeyExchangeMsg>(skx)
		let sigAndHashLen = 0
		if ((ka$ as ecdheKeyAgreement).version >= 771) {
			sigAndHashLen = 2
		}
		;(skx$ as __goscript_handshake_messages.serverKeyExchangeMsg).key = $.makeSlice<number>((($.sliceLen(serverECDHEParams) + sigAndHashLen) + 2) + $.sliceLen(sig), undefined, "byte")
		$.copy((skx$ as __goscript_handshake_messages.serverKeyExchangeMsg).key, serverECDHEParams)
		let k: $.Slice<number> = $.goSlice((skx$ as __goscript_handshake_messages.serverKeyExchangeMsg).key, $.sliceLen(serverECDHEParams), undefined)
		if ((ka$ as ecdheKeyAgreement).version >= 771) {
			$.sliceElems(k!)[$.sliceSlot(k!, 0)] = $.uint($.uintShr((ka$ as ecdheKeyAgreement).signatureAlgorithm, 8, 16), 8)
			$.sliceElems(k!)[$.sliceSlot(k!, 1)] = $.uint((ka$ as ecdheKeyAgreement).signatureAlgorithm, 8)
			k = $.goSlice(k, 2, undefined)
		}
		$.sliceElems(k!)[$.sliceSlot(k!, 0)] = $.uint($.sliceLen(sig) >> 8, 8)
		$.sliceElems(k!)[$.sliceSlot(k!, 1)] = $.uint($.sliceLen(sig), 8)
		$.copy($.goSlice(k, 2, undefined), sig)

		return [skx, null]
	}

	public processClientKeyExchange(config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null, cert: __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null, ckx: __goscript_handshake_messages.clientKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.clientKeyExchangeMsg> | null, version: number): [$.Slice<number>, $.GoError] {
		const ka: ecdheKeyAgreement | $.VarRef<ecdheKeyAgreement> | null = this;
		const ka$: ecdheKeyAgreement = ka == null ? $.pointerTarget<ecdheKeyAgreement>(ka) : (ka as any).__isVarRef === true ? (ka as any).value : (ka as any).__goValue === undefined ? (ka as any) : $.pointerTarget<ecdheKeyAgreement>(ka)
		const ckx$: __goscript_handshake_messages.clientKeyExchangeMsg = ckx == null ? $.pointerTarget<__goscript_handshake_messages.clientKeyExchangeMsg>(ckx) : (ckx as any).__isVarRef === true ? (ckx as any).value : (ckx as any).__goValue === undefined ? (ckx as any) : $.pointerTarget<__goscript_handshake_messages.clientKeyExchangeMsg>(ckx)
		if (($.sliceLen((ckx$ as __goscript_handshake_messages.clientKeyExchangeMsg).ciphertext) == 0) || ($.int($.arrayIndex((ckx$ as __goscript_handshake_messages.clientKeyExchangeMsg).ciphertext!, 0)) != ($.sliceLen((ckx$ as __goscript_handshake_messages.clientKeyExchangeMsg).ciphertext) - 1))) {
			return [null, errClientKeyExchange]
		}

		let __goscriptTuple7: any = $.pointerValue<Exclude<ecdh.Curve, null>>(ecdh.PrivateKey.prototype.Curve.call($.pointerValue<ecdh.PrivateKey>((ka$ as ecdheKeyAgreement).key))).NewPublicKey($.goSlice((ckx$ as __goscript_handshake_messages.clientKeyExchangeMsg).ciphertext, 1, undefined))
		let peerKey: ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		if (err != null) {
			return [null, errClientKeyExchange]
		}
		let __goscriptTuple8: any = ecdh.PrivateKey.prototype.ECDH.call($.pointerValue<ecdh.PrivateKey>((ka$ as ecdheKeyAgreement).key), peerKey)
		let preMasterSecret: $.Slice<number> = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [null, errClientKeyExchange]
		}

		return [preMasterSecret, null]
	}

	public async processServerKeyExchange(config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null, clientHello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, serverHello: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null, cert: x509.Certificate | $.VarRef<x509.Certificate> | null, skx: __goscript_handshake_messages.serverKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.serverKeyExchangeMsg> | null): globalThis.Promise<$.GoError> {
		let ka: ecdheKeyAgreement | $.VarRef<ecdheKeyAgreement> | null = this;
		const ka$: ecdheKeyAgreement = ka == null ? $.pointerTarget<ecdheKeyAgreement>(ka) : (ka as any).__isVarRef === true ? (ka as any).value : (ka as any).__goValue === undefined ? (ka as any) : $.pointerTarget<ecdheKeyAgreement>(ka)
		const clientHello$: __goscript_handshake_messages.clientHelloMsg = clientHello == null ? $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(clientHello) : (clientHello as any).__isVarRef === true ? (clientHello as any).value : (clientHello as any).__goValue === undefined ? (clientHello as any) : $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(clientHello)
		const serverHello$: __goscript_handshake_messages.serverHelloMsg = serverHello == null ? $.pointerTarget<__goscript_handshake_messages.serverHelloMsg>(serverHello) : (serverHello as any).__isVarRef === true ? (serverHello as any).value : (serverHello as any).__goValue === undefined ? (serverHello as any) : $.pointerTarget<__goscript_handshake_messages.serverHelloMsg>(serverHello)
		const cert$: x509.Certificate = cert == null ? $.pointerTarget<x509.Certificate>(cert) : (cert as any).__isVarRef === true ? (cert as any).value : (cert as any).__goValue === undefined ? (cert as any) : $.pointerTarget<x509.Certificate>(cert)
		const skx$: __goscript_handshake_messages.serverKeyExchangeMsg = skx == null ? $.pointerTarget<__goscript_handshake_messages.serverKeyExchangeMsg>(skx) : (skx as any).__isVarRef === true ? (skx as any).value : (skx as any).__goValue === undefined ? (skx as any) : $.pointerTarget<__goscript_handshake_messages.serverKeyExchangeMsg>(skx)
		if ($.sliceLen((skx$ as __goscript_handshake_messages.serverKeyExchangeMsg).key) < 4) {
			return errServerKeyExchange
		}
		if ($.arrayIndex((skx$ as __goscript_handshake_messages.serverKeyExchangeMsg).key!, 0) != 3) {
			return errors.New("tls: server selected unsupported curve")
		}
		;(ka$ as ecdheKeyAgreement).curveID = $.uint(((($.uint($.arrayIndex((skx$ as __goscript_handshake_messages.serverKeyExchangeMsg).key!, 1), 16) << 8) & 0xffff)) | $.uint($.arrayIndex((skx$ as __goscript_handshake_messages.serverKeyExchangeMsg).key!, 2), 16), 16)

		let publicLen = $.int($.arrayIndex((skx$ as __goscript_handshake_messages.serverKeyExchangeMsg).key!, 3))
		if ((publicLen + 4) > $.sliceLen((skx$ as __goscript_handshake_messages.serverKeyExchangeMsg).key)) {
			return errServerKeyExchange
		}
		let serverECDHEParams: $.Slice<number> = $.goSlice((skx$ as __goscript_handshake_messages.serverKeyExchangeMsg).key, undefined, 4 + publicLen)
		let publicKey: $.Slice<number> = $.goSlice(serverECDHEParams, 4, undefined)

		let sig: $.Slice<number> = $.goSlice((skx$ as __goscript_handshake_messages.serverKeyExchangeMsg).key, 4 + publicLen, undefined)
		if ($.sliceLen(sig) < 2) {
			return errServerKeyExchange
		}
		if ((ka$ as ecdheKeyAgreement).version >= 771) {
			;(ka$ as ecdheKeyAgreement).signatureAlgorithm = $.uint(((($.uint($.arrayIndex(sig!, 0), 16) << 8) & 0xffff)) | $.uint($.arrayIndex(sig!, 1), 16), 16)
			sig = $.goSlice(sig, 2, undefined)
			if ($.sliceLen(sig) < 2) {
				return errServerKeyExchange
			}
			switch ((ka$ as ecdheKeyAgreement).signatureAlgorithm) {
				case 2308:
				case 2309:
				case 2310:
				{
					return errors.New("tls: server selected ML-DSA with TLS version < 1.3")
					break
				}
			}
		}
		let sigLen = ($.int($.arrayIndex(sig!, 0)) << 8) | $.int($.arrayIndex(sig!, 1))
		if ((sigLen + 2) != $.sliceLen(sig)) {
			return errServerKeyExchange
		}
		sig = $.goSlice(sig, 2, undefined)

		if (!slices2.Contains((clientHello$ as __goscript_handshake_messages.clientHelloMsg).supportedCurves, (ka$ as ecdheKeyAgreement).curveID)) {
			return errors.New("tls: server selected unoffered curve")
		}

		{
			let [, ok] = curveForCurveID((ka$ as ecdheKeyAgreement).curveID)
			if (!ok) {
				return errors.New("tls: server selected unsupported curve")
			}
		}

		let __goscriptTuple9: any = await generateECDHEKey((config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as __goscript_common.Config).rand() : __goscript_common.Config.prototype.rand.call(config)), (ka$ as ecdheKeyAgreement).curveID)
		let key: ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null = __goscriptTuple9[0]
		let err = __goscriptTuple9[1]
		if (err != null) {
			return err
		}
		;(ka$ as ecdheKeyAgreement).key = key

		let __goscriptTuple10: any = await $.pointerValue<Exclude<ecdh.Curve, null>>(ecdh.PrivateKey.prototype.Curve.call($.pointerValue<ecdh.PrivateKey>(key))).NewPublicKey(publicKey)
		let peerKey: ecdh.PublicKey | $.VarRef<ecdh.PublicKey> | null = __goscriptTuple10[0]
		err = __goscriptTuple10[1]
		if (err != null) {
			return errServerKeyExchange
		}
		let __goscriptTuple11: any = ecdh.PrivateKey.prototype.ECDH.call($.pointerValue<ecdh.PrivateKey>(key), peerKey);
		;(ka$ as ecdheKeyAgreement).preMasterSecret = __goscriptTuple11[0]
		err = __goscriptTuple11[1]
		if (err != null) {
			return errServerKeyExchange
		}

		let ourPublicKey: $.Slice<number> = ecdh.PublicKey.prototype.Bytes.call($.pointerValue<ecdh.PublicKey>(ecdh.PrivateKey.prototype.PublicKey.call($.pointerValue<ecdh.PrivateKey>(key))));
		;(ka$ as ecdheKeyAgreement).ckx = new __goscript_handshake_messages.clientKeyExchangeMsg()
		$.pointerValue<__goscript_handshake_messages.clientKeyExchangeMsg>((ka$ as ecdheKeyAgreement).ckx).ciphertext = $.makeSlice<number>(1 + $.sliceLen(ourPublicKey), undefined, "byte")
		$.sliceElems($.pointerValue<__goscript_handshake_messages.clientKeyExchangeMsg>((ka$ as ecdheKeyAgreement).ckx).ciphertext!)[$.sliceSlot($.pointerValue<__goscript_handshake_messages.clientKeyExchangeMsg>((ka$ as ecdheKeyAgreement).ckx).ciphertext!, 0)] = $.uint($.sliceLen(ourPublicKey), 8)
		$.copy($.goSlice($.pointerValue<__goscript_handshake_messages.clientKeyExchangeMsg>((ka$ as ecdheKeyAgreement).ckx).ciphertext, 1, undefined), ourPublicKey)

		let sigType: number = 0
		let sigHash: crypto.Hash = 0
		if ((ka$ as ecdheKeyAgreement).version >= 771) {
			if (!__goscript_common.isSupportedSignatureAlgorithm((ka$ as ecdheKeyAgreement).signatureAlgorithm, (clientHello$ as __goscript_handshake_messages.clientHelloMsg).supportedSignatureAlgorithms)) {
				return errors.New("tls: certificate used with invalid signature algorithm")
			}
			let __goscriptTuple12: any = __goscript_auth.typeAndHashFromSignatureScheme((ka$ as ecdheKeyAgreement).signatureAlgorithm)
			sigType = __goscriptTuple12[0]
			sigHash = __goscriptTuple12[1]
			err = __goscriptTuple12[2]
			if (err != null) {
				return err
			}
			if (sigHash == 3) {
				godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(__goscript_common.tlssha1))
				godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(__goscript_common.tlssha1))
			}
			if (((sigType == 225) || (sigType == 226)) != (ka$ as ecdheKeyAgreement).isRSA) {
				return errServerKeyExchange
			}
			let signed: $.Slice<number> = (slices2.Concat((clientHello$ as __goscript_handshake_messages.clientHelloMsg).random, (serverHello$ as __goscript_handshake_messages.serverHelloMsg).random, serverECDHEParams) as $.Slice<number>)
			{
				let __goscriptShadow2 = await __goscript_auth.verifyHandshakeSignature(sigType, ((cert$ as x509.Certificate).PublicKey as crypto.PublicKey | null), sigHash, signed, sig)
				if (__goscriptShadow2 != null) {
					return errors.New($.concatString("tls: invalid signature by the server certificate: ", (__goscriptAwait = (__goscriptShadow2 !== null && (__goscriptShadow2 as any).__isVarRef !== true && (__goscriptShadow2 as any).__goValue === undefined ? (__goscriptShadow2 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow2)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
				}
			}
		} else {
			let __goscriptTuple13: any = __goscript_auth.legacyTypeAndHashFromPublicKey(((cert$ as x509.Certificate).PublicKey as crypto.PublicKey | null))
			sigType = __goscriptTuple13[0]
			sigHash = __goscriptTuple13[1]
			err = __goscriptTuple13[2]
			if (err != null) {
				return err
			}
			if ((sigType == 225) != (ka$ as ecdheKeyAgreement).isRSA) {
				return errServerKeyExchange
			}
			let signed: $.Slice<number> = await hashForServerKeyExchange(sigType, $.arrayToSlice<$.Slice<number>>([(clientHello$ as __goscript_handshake_messages.clientHelloMsg).random, (serverHello$ as __goscript_handshake_messages.serverHelloMsg).random, serverECDHEParams]))
			{
				let __goscriptShadow3 = await __goscript_auth.verifyLegacyHandshakeSignature(sigType, ((cert$ as x509.Certificate).PublicKey as crypto.PublicKey | null), sigHash, signed, sig)
				if (__goscriptShadow3 != null) {
					return errors.New($.concatString("tls: invalid signature by the server certificate: ", (__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow3)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
				}
			}
		}

		return null
	}

	static __typeInfo = $.registerStructType(
		"tls.ecdheKeyAgreement",
		() => new ecdheKeyAgreement(),
		() => [$.methodSignature("generateClientKeyExchange", [["config", /* @__PURE__ */ $.pointerType("tls.Config")], ["clientHello", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")], ["cert", /* @__PURE__ */ $.pointerType("x509.Certificate")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.pointerType("tls.clientKeyExchangeMsg"), "error"], true), $.methodSignature("generateServerKeyExchange", [["config", /* @__PURE__ */ $.pointerType("tls.Config")], ["cert", /* @__PURE__ */ $.pointerType("tls.Certificate")], ["clientHello", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")], ["hello", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")]], [/* @__PURE__ */ $.pointerType("tls.serverKeyExchangeMsg"), "error"], true), $.methodSignature("processClientKeyExchange", [["config", /* @__PURE__ */ $.pointerType("tls.Config")], ["cert", /* @__PURE__ */ $.pointerType("tls.Certificate")], ["ckx", /* @__PURE__ */ $.pointerType("tls.clientKeyExchangeMsg")], ["version", /* @__PURE__ */ $.basicType("uint16")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("processServerKeyExchange", [["config", /* @__PURE__ */ $.pointerType("tls.Config")], ["clientHello", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")], ["serverHello", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")], ["cert", /* @__PURE__ */ $.pointerType("x509.Certificate")], ["skx", /* @__PURE__ */ $.pointerType("tls.serverKeyExchangeMsg")]], ["error"], true)],
		ecdheKeyAgreement,
		() => [/* @__PURE__ */ $.structField("version", /* @__PURE__ */ $.basicType("uint16"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("isRSA", /* @__PURE__ */ $.basicType("bool"), [1], 2, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ckx", /* @__PURE__ */ $.pointerType("tls.clientKeyExchangeMsg"), [2], 8, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("preMasterSecret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 16, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("curveID", /* @__PURE__ */ $.basicType("uint16", "tls.CurveID"), [4], 40, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("signatureAlgorithm", /* @__PURE__ */ $.basicType("uint16", "tls.SignatureScheme"), [5], 42, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("key", /* @__PURE__ */ $.pointerType("ecdh.PrivateKey"), [6], 48, false, { pkgPath: "crypto/tls" })]
	)
}

export let errClientKeyExchange: $.GoError = errors.New("tls: invalid ClientKeyExchange message")

export function __goscript_set_errClientKeyExchange(__goscriptValue: $.GoError): void {
	errClientKeyExchange = __goscriptValue
}

export let errServerKeyExchange: $.GoError = errors.New("tls: invalid ServerKeyExchange message")

export function __goscript_set_errServerKeyExchange(__goscriptValue: $.GoError): void {
	errServerKeyExchange = __goscriptValue
}

export async function sha1Hash(slices: $.Slice<$.Slice<number>>): globalThis.Promise<$.Slice<number>> {
	let hsha1 = sha1.New()
	for (let __goscriptRangeTarget0 = slices, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let slice = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as $.Slice<number>)
		await (hsha1 !== null && (hsha1 as any).__isVarRef !== true && (hsha1 as any).__goValue === undefined ? (hsha1 as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hsha1)).Write(slice)
	}
	return (hsha1 !== null && (hsha1 as any).__isVarRef !== true && (hsha1 as any).__goValue === undefined ? (hsha1 as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hsha1)).Sum(null)
}

export async function md5SHA1Hash(slices: $.Slice<$.Slice<number>>): globalThis.Promise<$.Slice<number>> {
	let md5sha1: $.Slice<number> = $.makeSlice<number>(md5.Size + sha1.Size, undefined, "byte")
	let hmd5 = md5.New()
	for (let __goscriptRangeTarget1 = slices, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let slice = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as $.Slice<number>)
		await (hmd5 !== null && (hmd5 as any).__isVarRef !== true && (hmd5 as any).__goValue === undefined ? (hmd5 as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hmd5)).Write(slice)
	}
	$.copy(md5sha1, await (hmd5 !== null && (hmd5 as any).__isVarRef !== true && (hmd5 as any).__goValue === undefined ? (hmd5 as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hmd5)).Sum(null))
	$.copy($.goSlice(md5sha1, md5.Size, undefined), await sha1Hash(slices))
	return md5sha1
}

export async function hashForServerKeyExchange(sigType: number, slices: $.Slice<$.Slice<number>>): globalThis.Promise<$.Slice<number>> {
	if (sigType == 227) {
		return sha1Hash(slices)
	}
	return md5SHA1Hash(slices)
}

export async function generateECDHEKey(rand: io.Reader | null, curveID: __goscript_common.CurveID): globalThis.Promise<[ecdh.PrivateKey | $.VarRef<ecdh.PrivateKey> | null, $.GoError]> {
	let [curve, ok] = curveForCurveID(curveID)
	if (!ok) {
		return [null, errors.New("tls: internal error: unsupported curve")]
	}

	return (curve !== null && (curve as any).__isVarRef !== true && (curve as any).__goValue === undefined ? (curve as Exclude<ecdh.Curve, null>) : $.pointerValue<Exclude<ecdh.Curve, null>>(curve)).GenerateKey($.pointerValueOrNil(rand)!)
}

export function curveForCurveID(id: __goscript_common.CurveID): [ecdh.Curve | null, boolean] {
	switch (id) {
		case 29:
		{
			return [ecdh.X25519(), true]
			break
		}
		case 23:
		{
			return [ecdh.P256(), true]
			break
		}
		case 24:
		{
			return [ecdh.P384(), true]
			break
		}
		case 25:
		{
			return [ecdh.P521(), true]
			break
		}
		default:
		{
			return [null, false]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Available: (receiver: any, ...args: any[]) => (crypto.Hash_Available as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), HashFunc: (receiver: any, ...args: any[]) => (crypto.Hash_HashFunc as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), New: (receiver: any, ...args: any[]) => (crypto.Hash_New as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => (crypto.Hash_Size as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (crypto.Hash_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint", "crypto.Hash"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Available", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HashFunc", [], [/* @__PURE__ */ $.basicType("uint", "crypto.Hash")]), $.methodSignature("New", [], ["hash.Hash"]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
