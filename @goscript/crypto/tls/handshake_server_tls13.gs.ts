// Generated file based on handshake_server_tls13.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as hkdf from "@goscript/crypto/hkdf/index.js"

import * as hmac from "@goscript/crypto/hmac/index.js"

import * as hpke from "@goscript/crypto/hpke/index.js"

import * as tls13 from "@goscript/crypto/internal/fips140/tls13/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"

import * as fips140tls from "@goscript/crypto/tls/internal/fips140tls/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as hash from "@goscript/hash/index.js"

import * as byteorder from "@goscript/internal/byteorder/index.js"

import * as io from "@goscript/io/index.js"

import * as slices from "@goscript/slices/index.js"

import * as sort from "@goscript/sort/index.js"

import * as time from "@goscript/time/index.js"

import type * as cipher from "@goscript/crypto/cipher/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as big from "@goscript/math/big/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_alert from "./alert.gs.ts"

import * as __goscript_auth from "./auth.gs.ts"

import * as __goscript_cipher_suites from "./cipher_suites.gs.ts"

import * as __goscript_common from "./common.gs.ts"

import * as __goscript_common_string from "./common_string.gs.ts"

import * as __goscript_conn from "./conn.gs.ts"

import * as __goscript_defaults from "./defaults.gs.ts"

import * as __goscript_defaults_fips140 from "./defaults_fips140.gs.ts"

import * as __goscript_ech from "./ech.gs.ts"

import * as __goscript_handshake_client from "./handshake_client.gs.ts"

import * as __goscript_handshake_client_tls13 from "./handshake_client_tls13.gs.ts"

import * as __goscript_handshake_messages from "./handshake_messages.gs.ts"

import * as __goscript_handshake_server from "./handshake_server.gs.ts"

import * as __goscript_key_schedule from "./key_schedule.gs.ts"

import * as __goscript_quic from "./quic.gs.ts"

import * as __goscript_ticket from "./ticket.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/index.js"
import "@goscript/crypto/hkdf/index.js"
import "@goscript/crypto/hmac/index.js"
import "@goscript/crypto/hpke/index.js"
import "@goscript/crypto/internal/fips140/tls13/index.js"
import "@goscript/crypto/rsa/index.js"
import "@goscript/crypto/tls/internal/fips140tls/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/hash/index.js"
import "@goscript/internal/byteorder/index.js"
import "@goscript/io/index.js"
import "@goscript/slices/index.js"
import "@goscript/sort/index.js"
import "@goscript/time/index.js"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/math/big/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "./alert.gs.ts"
import "./auth.gs.ts"
import "./cipher_suites.gs.ts"
import "./common.gs.ts"
import "./common_string.gs.ts"
import "./conn.gs.ts"
import "./defaults.gs.ts"
import "./defaults_fips140.gs.ts"
import "./ech.gs.ts"
import "./handshake_client.gs.ts"
import "./handshake_client_tls13.gs.ts"
import "./handshake_messages.gs.ts"
import "./handshake_server.gs.ts"
import "./key_schedule.gs.ts"
import "./quic.gs.ts"
import "./ticket.gs.ts"

$.registerTypePackagePath("crypto/tls", ["tls.echServerContext", "tls.serverHandshakeStateTLS13", "tls.binaryMarshaler"])

export class echServerContext {
	public get hpkeContext(): hpke.Recipient | $.VarRef<hpke.Recipient> | null {
		return this._fields.hpkeContext
	}

	public set hpkeContext(value: hpke.Recipient | $.VarRef<hpke.Recipient> | null) {
		this._fields.hpkeContext = value
	}

	public get configID(): number {
		return this._fields.configID
	}

	public set configID(value: number) {
		this._fields.configID = value
	}

	public get ciphersuite(): __goscript_ech.echCipher {
		return this._fields.ciphersuite
	}

	public set ciphersuite(value: __goscript_ech.echCipher) {
		this._fields.ciphersuite = value
	}

	public get transcript(): hash.Hash | null {
		return this._fields.transcript
	}

	public set transcript(value: hash.Hash | null) {
		this._fields.transcript = value
	}

	// inner indicates that the initial client_hello we received contained an
	// encrypted_client_hello extension that indicated it was an "inner" hello.
	// We don't do any additional processing of the hello in this case, so all
	// fields above are unset.
	public get inner(): boolean {
		return this._fields.inner
	}

	public set inner(value: boolean) {
		this._fields.inner = value
	}

	public _fields: {
		hpkeContext: hpke.Recipient | $.VarRef<hpke.Recipient> | null
		configID: number
		ciphersuite: __goscript_ech.echCipher
		transcript: hash.Hash | null
		inner: boolean
	}

	constructor(init?: Partial<{hpkeContext?: hpke.Recipient | $.VarRef<hpke.Recipient> | null, configID?: number, ciphersuite?: __goscript_ech.echCipher, transcript?: hash.Hash | null, inner?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			hpkeContext: init?.hpkeContext ?? (null! as hpke.Recipient | $.VarRef<hpke.Recipient> | null),
			configID: init?.configID ?? (0 as number),
			ciphersuite: init?.ciphersuite ? init.ciphersuite.clone() : new __goscript_ech.echCipher(undefined, true),
			transcript: init?.transcript ?? (null! as hash.Hash | null),
			inner: init?.inner ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): echServerContext {
		return new echServerContext(this, true)
	}

	public __goscriptAssign(source: echServerContext): void {
		const target = this._fields
		const values = source._fields
		target.hpkeContext = values.hpkeContext
		target.configID = values.configID
		$.assignStruct(target.ciphersuite, values.ciphersuite)
		target.transcript = $.assignFieldValue(target.transcript, values.transcript, "hash.Hash")
		target.inner = values.inner
	}

	static __typeInfo = $.registerStructType(
		"tls.echServerContext",
		() => new echServerContext(),
		() => [],
		echServerContext,
		() => [/* @__PURE__ */ $.structField("hpkeContext", /* @__PURE__ */ $.pointerType("hpke.Recipient"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("configID", /* @__PURE__ */ $.basicType("uint8"), [1], 8, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ciphersuite", "tls.echCipher", [2], 10, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("transcript", "hash.Hash", [3], 16, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("inner", /* @__PURE__ */ $.basicType("bool"), [4], 32, false, { pkgPath: "crypto/tls" })]
	)
}

export class serverHandshakeStateTLS13 {
	public get c(): __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null {
		return this._fields.c
	}

	public set c(value: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null) {
		this._fields.c = value
	}

	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get clientHello(): __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null {
		return this._fields.clientHello
	}

	public set clientHello(value: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null) {
		this._fields.clientHello = value
	}

	public get hello(): __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null {
		return this._fields.hello
	}

	public set hello(value: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null) {
		this._fields.hello = value
	}

	public get sentDummyCCS(): boolean {
		return this._fields.sentDummyCCS
	}

	public set sentDummyCCS(value: boolean) {
		this._fields.sentDummyCCS = value
	}

	public get usingPSK(): boolean {
		return this._fields.usingPSK
	}

	public set usingPSK(value: boolean) {
		this._fields.usingPSK = value
	}

	public get earlyData(): boolean {
		return this._fields.earlyData
	}

	public set earlyData(value: boolean) {
		this._fields.earlyData = value
	}

	public get suite(): __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null {
		return this._fields.suite
	}

	public set suite(value: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null) {
		this._fields.suite = value
	}

	public get cert(): __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null {
		return this._fields.cert
	}

	public set cert(value: __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null) {
		this._fields.cert = value
	}

	public get sigAlg(): __goscript_common.SignatureScheme {
		return this._fields.sigAlg
	}

	public set sigAlg(value: __goscript_common.SignatureScheme) {
		this._fields.sigAlg = value
	}

	public get earlySecret(): tls13.EarlySecret | $.VarRef<tls13.EarlySecret> | null {
		return this._fields.earlySecret
	}

	public set earlySecret(value: tls13.EarlySecret | $.VarRef<tls13.EarlySecret> | null) {
		this._fields.earlySecret = value
	}

	public get sharedKey(): $.Slice<number> {
		return this._fields.sharedKey
	}

	public set sharedKey(value: $.Slice<number>) {
		this._fields.sharedKey = value
	}

	public get handshakeSecret(): tls13.HandshakeSecret | $.VarRef<tls13.HandshakeSecret> | null {
		return this._fields.handshakeSecret
	}

	public set handshakeSecret(value: tls13.HandshakeSecret | $.VarRef<tls13.HandshakeSecret> | null) {
		this._fields.handshakeSecret = value
	}

	public get masterSecret(): tls13.MasterSecret | $.VarRef<tls13.MasterSecret> | null {
		return this._fields.masterSecret
	}

	public set masterSecret(value: tls13.MasterSecret | $.VarRef<tls13.MasterSecret> | null) {
		this._fields.masterSecret = value
	}

	public get trafficSecret(): $.Slice<number> {
		return this._fields.trafficSecret
	}

	public set trafficSecret(value: $.Slice<number>) {
		this._fields.trafficSecret = value
	}

	public get transcript(): hash.Hash | null {
		return this._fields.transcript
	}

	public set transcript(value: hash.Hash | null) {
		this._fields.transcript = value
	}

	public get clientFinished(): $.Slice<number> {
		return this._fields.clientFinished
	}

	public set clientFinished(value: $.Slice<number>) {
		this._fields.clientFinished = value
	}

	public get echContext(): echServerContext | $.VarRef<echServerContext> | null {
		return this._fields.echContext
	}

	public set echContext(value: echServerContext | $.VarRef<echServerContext> | null) {
		this._fields.echContext = value
	}

	public _fields: {
		c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null
		ctx: context.Context | null
		clientHello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null
		hello: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null
		sentDummyCCS: boolean
		usingPSK: boolean
		earlyData: boolean
		suite: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null
		cert: __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null
		sigAlg: __goscript_common.SignatureScheme
		earlySecret: tls13.EarlySecret | $.VarRef<tls13.EarlySecret> | null
		sharedKey: $.Slice<number>
		handshakeSecret: tls13.HandshakeSecret | $.VarRef<tls13.HandshakeSecret> | null
		masterSecret: tls13.MasterSecret | $.VarRef<tls13.MasterSecret> | null
		trafficSecret: $.Slice<number>
		transcript: hash.Hash | null
		clientFinished: $.Slice<number>
		echContext: echServerContext | $.VarRef<echServerContext> | null
	}

	constructor(init?: Partial<{c?: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null, ctx?: context.Context | null, clientHello?: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, hello?: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null, sentDummyCCS?: boolean, usingPSK?: boolean, earlyData?: boolean, suite?: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null, cert?: __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null, sigAlg?: __goscript_common.SignatureScheme, earlySecret?: tls13.EarlySecret | $.VarRef<tls13.EarlySecret> | null, sharedKey?: $.Slice<number>, handshakeSecret?: tls13.HandshakeSecret | $.VarRef<tls13.HandshakeSecret> | null, masterSecret?: tls13.MasterSecret | $.VarRef<tls13.MasterSecret> | null, trafficSecret?: $.Slice<number>, transcript?: hash.Hash | null, clientFinished?: $.Slice<number>, echContext?: echServerContext | $.VarRef<echServerContext> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			c: init?.c ?? (null! as __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null),
			ctx: init?.ctx ?? (null! as context.Context | null),
			clientHello: init?.clientHello ?? (null! as __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null),
			hello: init?.hello ?? (null! as __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null),
			sentDummyCCS: init?.sentDummyCCS ?? (false as boolean),
			usingPSK: init?.usingPSK ?? (false as boolean),
			earlyData: init?.earlyData ?? (false as boolean),
			suite: init?.suite ?? (null! as __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null),
			cert: init?.cert ?? (null! as __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null),
			sigAlg: init?.sigAlg ?? (0 as __goscript_common.SignatureScheme),
			earlySecret: init?.earlySecret ?? (null! as tls13.EarlySecret | $.VarRef<tls13.EarlySecret> | null),
			sharedKey: init?.sharedKey ?? (null! as $.Slice<number>),
			handshakeSecret: init?.handshakeSecret ?? (null! as tls13.HandshakeSecret | $.VarRef<tls13.HandshakeSecret> | null),
			masterSecret: init?.masterSecret ?? (null! as tls13.MasterSecret | $.VarRef<tls13.MasterSecret> | null),
			trafficSecret: init?.trafficSecret ?? (null! as $.Slice<number>),
			transcript: init?.transcript ?? (null! as hash.Hash | null),
			clientFinished: init?.clientFinished ?? (null! as $.Slice<number>),
			echContext: init?.echContext ?? (null! as echServerContext | $.VarRef<echServerContext> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): serverHandshakeStateTLS13 {
		return new serverHandshakeStateTLS13(this, true)
	}

	public __goscriptAssign(source: serverHandshakeStateTLS13): void {
		const target = this._fields
		const values = source._fields
		target.c = values.c
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.clientHello = values.clientHello
		target.hello = values.hello
		target.sentDummyCCS = values.sentDummyCCS
		target.usingPSK = values.usingPSK
		target.earlyData = values.earlyData
		target.suite = values.suite
		target.cert = values.cert
		target.sigAlg = values.sigAlg
		target.earlySecret = values.earlySecret
		target.sharedKey = values.sharedKey
		target.handshakeSecret = values.handshakeSecret
		target.masterSecret = values.masterSecret
		target.trafficSecret = values.trafficSecret
		target.transcript = $.assignFieldValue(target.transcript, values.transcript, "hash.Hash")
		target.clientFinished = values.clientFinished
		target.echContext = values.echContext
	}

	public async checkForResumption(): globalThis.Promise<$.GoError> {
		let hs: serverHandshakeStateTLS13 | $.VarRef<serverHandshakeStateTLS13> | null = this;
		const hs$: serverHandshakeStateTLS13 = hs == null ? $.pointerTarget<serverHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		if ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).SessionTicketsDisabled) {
			return null
		}

		let modeOK = false
		for (let __goscriptRangeTarget0 = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).pskModes, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let mode = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
			if (mode == 1) {
				modeOK = true
				break
			}
		}
		if (!modeOK) {
			return null
		}

		if ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).pskIdentities) != $.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).pskBinders)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: invalid or missing PSK binders")
		}
		if ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).pskIdentities) == 0) {
			return null
		}

		for (let __goscriptRangeTarget1 = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).pskIdentities, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let identity = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as __goscript_common.pskIdentity)).clone()
			if (i >= 5) {
				break
			}

			let sessionState: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null = null! as __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null
			if ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).UnwrapSession != null) {
				let err: $.GoError = null! as $.GoError
				let __goscriptTuple0: any = await $.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).UnwrapSession!(identity.label, (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).connectionStateLocked() : __goscript_conn.Conn.prototype.connectionStateLocked.call(c)))
				sessionState = __goscriptTuple0[0]
				err = __goscriptTuple0[1]
				if (err != null) {
					return err
				}
				if (sessionState == null) {
					continue
				}
			} else {
				let plaintext: $.Slice<number> = await __goscript_common.Config.prototype.decryptTicket.call((c$ as __goscript_conn.Conn).config, identity.label, (c$ as __goscript_conn.Conn).ticketKeys)
				if (plaintext == null) {
					continue
				}
				let err: $.GoError = null! as $.GoError
				let __goscriptTuple1: any = await __goscript_ticket.ParseSessionState(plaintext)
				sessionState = __goscriptTuple1[0]
				err = __goscriptTuple1[1]
				if (err != null) {
					continue
				}
			}

			if ($.pointerValue<__goscript_ticket.SessionState>(sessionState).version != 772) {
				continue
			}

			let createdAt = $.markAsStructValue($.cloneStructValue(time.Unix($.int64($.pointerValue<__goscript_ticket.SessionState>(sessionState).createdAt), 0n)))
			if ($.markAsStructValue($.cloneStructValue((await __goscript_common.Config.prototype.time.call((c$ as __goscript_conn.Conn).config)))).Sub($.markAsStructValue($.cloneStructValue(createdAt))) > 604800000000000n) {
				continue
			}

			let pskSuite: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null = __goscript_cipher_suites.cipherSuiteTLS13ByID($.pointerValue<__goscript_ticket.SessionState>(sessionState).cipherSuite)
			if ((pskSuite == null) || ($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>(pskSuite).hash != $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).hash)) {
				continue
			}

			// PSK connections don't re-establish client certificates, but carry
			// them over in the session ticket. Ensure the presence of client certs
			// in the ticket is consistent with the configured requirements.
			let sessionHasClientCerts = $.sliceLen($.pointerValue<__goscript_ticket.SessionState>(sessionState).peerCertificates) != 0
			let needClientCerts = __goscript_common.requiresClientCert($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ClientAuth)
			if (needClientCerts && !sessionHasClientCerts) {
				continue
			}
			if (sessionHasClientCerts && ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ClientAuth == 0)) {
				continue
			}
			if (sessionHasClientCerts && $.markAsStructValue($.cloneStructValue((await __goscript_common.Config.prototype.time.call((c$ as __goscript_conn.Conn).config)))).After($.markAsStructValue($.cloneStructValue($.pointerValue<x509.Certificate>($.arrayIndex($.pointerValue<__goscript_ticket.SessionState>(sessionState).peerCertificates!, 0)).NotAfter)))) {
				continue
			}
			let opts = (await (async () => { const __goscriptLiteralField0 = await __goscript_common.Config.prototype.time.call((c$ as __goscript_conn.Conn).config); return new x509.VerifyOptions({CurrentTime: __goscriptLiteralField0, Roots: $.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ClientCAs, KeyUsages: $.arrayToSlice<x509.ExtKeyUsage>([2])}, true) })())
			if ((sessionHasClientCerts && ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ClientAuth >= 3)) && !await __goscript_common.anyValidVerifiedChain($.pointerValue<__goscript_ticket.SessionState>(sessionState).verifiedChains, (opts).clone())) {
				continue
			}

			if (((c$ as __goscript_conn.Conn).quic != null) && $.pointerValue<__goscript_quic.quicState>((c$ as __goscript_conn.Conn).quic).enableSessionEvents) {
				{
					let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).quicResumeSession(sessionState) : __goscript_conn.Conn.prototype.quicResumeSession.call(c, sessionState))
					if (err != null) {
						return err
					}
				}
			}

			;(hs$ as serverHandshakeStateTLS13).earlySecret = await tls13.NewEarlySecret(__goscriptStatic0(), $.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).hash), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm"), $.pointerValue<__goscript_ticket.SessionState>(sessionState).secret)
			let binderKey: $.Slice<number> = await tls13.EarlySecret.prototype.ResumptionBinderKey.call((hs$ as serverHandshakeStateTLS13).earlySecret)
			// Clone the transcript in case a HelloRetryRequest was recorded.
			let transcript = await cloneHash((hs$ as serverHandshakeStateTLS13).transcript, $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).hash)
			if (transcript == null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
				return errors.New("tls: internal error: failed to clone hash")
			}
			let __goscriptTuple2: any = await __goscript_handshake_messages.clientHelloMsg.prototype.marshalWithoutBinders.call((hs$ as serverHandshakeStateTLS13).clientHello)
			let clientHelloBytes: $.Slice<number> = __goscriptTuple2[0]
			let err = __goscriptTuple2[1]
			if (err != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
				return err
			}
			await (transcript !== null && (transcript as any).__isVarRef !== true && (transcript as any).__goValue === undefined ? (transcript as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(transcript)).Write(clientHelloBytes)
			let pskBinder: $.Slice<number> = await __goscript_cipher_suites.cipherSuiteTLS13.prototype.finishedHash.call((hs$ as serverHandshakeStateTLS13).suite, binderKey, transcript)
			if (!hmac.Equal($.arrayIndex($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).pskBinders!, i), pskBinder)) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(51) : __goscript_conn.Conn.prototype.sendAlert.call(c, 51))
				return errors.New("tls: invalid PSK binder")
			}

			if (((((((c$ as __goscript_conn.Conn).quic != null) && $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).earlyData) && (i == 0)) && $.pointerValue<__goscript_ticket.SessionState>(sessionState).EarlyData) && ($.pointerValue<__goscript_ticket.SessionState>(sessionState).cipherSuite == $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).id)) && ($.stringEqual($.pointerValue<__goscript_ticket.SessionState>(sessionState).alpnProtocol, (c$ as __goscript_conn.Conn).clientProtocol))) {
				;(hs$ as serverHandshakeStateTLS13).earlyData = true

				let __goscriptShadow0 = await crypto.Hash_New($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).hash)
				{
					let __goscriptShadow1 = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>((hs$ as serverHandshakeStateTLS13).clientHello, "*tls.clientHelloMsg", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")), (__goscriptShadow0 as __goscript_handshake_messages.transcriptHash | null))
					if (__goscriptShadow1 != null) {
						return __goscriptShadow1
					}
				}
				let earlyTrafficSecret: $.Slice<number> = await tls13.EarlySecret.prototype.ClientEarlyTrafficSecret.call((hs$ as serverHandshakeStateTLS13).earlySecret, __goscriptShadow0)
				{
					let __goscriptShadow2 = await __goscript_conn.Conn.prototype.quicSetReadSecret.call(c, 1, $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).id, earlyTrafficSecret)
					if (__goscriptShadow2 != null) {
						return __goscriptShadow2
					}
				}
			}

			;(c$ as __goscript_conn.Conn).didResume = true;
			;(c$ as __goscript_conn.Conn).peerCertificates = $.pointerValue<__goscript_ticket.SessionState>(sessionState).peerCertificates;
			;(c$ as __goscript_conn.Conn).ocspResponse = $.pointerValue<__goscript_ticket.SessionState>(sessionState).ocspResponse;
			;(c$ as __goscript_conn.Conn).scts = $.pointerValue<__goscript_ticket.SessionState>(sessionState).scts;
			;(c$ as __goscript_conn.Conn).verifiedChains = $.pointerValue<__goscript_ticket.SessionState>(sessionState).verifiedChains

			$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeStateTLS13).hello).selectedIdentityPresent = true
			$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeStateTLS13).hello).selectedIdentity = $.uint(i, 16);
			;(hs$ as serverHandshakeStateTLS13).usingPSK = true
			return null
		}

		return null
	}

	public async doHelloRetryRequest(selectedGroup: __goscript_common.CurveID): globalThis.Promise<[__goscript_common.keyShare | $.VarRef<__goscript_common.keyShare> | null, $.GoError]> {
		let hs: serverHandshakeStateTLS13 | $.VarRef<serverHandshakeStateTLS13> | null = this;
		const hs$: serverHandshakeStateTLS13 = hs == null ? $.pointerTarget<serverHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		// Make sure the client didn't send extra handshake messages alongside
		// their initial client_hello. If they sent two client_hello messages,
		// we will consume the second before they respond to the server_hello.
		if ((c$ as __goscript_conn.Conn).hand.Len() != 0) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
			return [null, errors.New("tls: handshake buffer not empty before HelloRetryRequest")]
		}

		// The first ClientHello gets double-hashed into the transcript upon a
		// HelloRetryRequest. See RFC 8446, Section 4.4.1.
		{
			let err = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>((hs$ as serverHandshakeStateTLS13).clientHello, "*tls.clientHelloMsg", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")), ((hs$ as serverHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (err != null) {
				return [null, err]
			}
		}
		let chHash: $.Slice<number> = await $.pointerValue<Exclude<hash.Hash, null>>((hs$ as serverHandshakeStateTLS13).transcript).Sum(null)
		void (__goscriptAwait = $.pointerValue<Exclude<hash.Hash, null>>((hs$ as serverHandshakeStateTLS13).transcript).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await $.pointerValue<Exclude<hash.Hash, null>>((hs$ as serverHandshakeStateTLS13).transcript).Write(new Uint8Array([254, 0, 0, $.uint($.sliceLen(chHash), 8)]) as $.Slice<number>)
		await $.pointerValue<Exclude<hash.Hash, null>>((hs$ as serverHandshakeStateTLS13).transcript).Write(chHash)

		let helloRetryRequest: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null = new __goscript_handshake_messages.serverHelloMsg({vers: $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeStateTLS13).hello).vers, random: __goscript_common.helloRetryRequestRandom, sessionId: $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeStateTLS13).hello).sessionId, cipherSuite: $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeStateTLS13).hello).cipherSuite, compressionMethod: $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeStateTLS13).hello).compressionMethod, supportedVersion: $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeStateTLS13).hello).supportedVersion, selectedGroup: selectedGroup})
		let helloRetryRequest$: __goscript_handshake_messages.serverHelloMsg = helloRetryRequest == null ? $.pointerTarget<__goscript_handshake_messages.serverHelloMsg>(helloRetryRequest) : (helloRetryRequest as any).__isVarRef === true ? (helloRetryRequest as any).value : (helloRetryRequest as any).__goValue === undefined ? (helloRetryRequest as any) : $.pointerTarget<__goscript_handshake_messages.serverHelloMsg>(helloRetryRequest)

		if ((hs$ as serverHandshakeStateTLS13).echContext != null) {
			// Compute the acceptance message.
			;(helloRetryRequest$ as __goscript_handshake_messages.serverHelloMsg).encryptedClientHello = $.makeSlice<number>(8, undefined, "byte")
			let confTranscript = await cloneHash((hs$ as serverHandshakeStateTLS13).transcript, $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).hash)
			{
				let err = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>(helloRetryRequest, "*tls.serverHelloMsg", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")), (confTranscript as __goscript_handshake_messages.transcriptHash | null))
				if (err != null) {
					return [null, err]
				}
			}
			let h: (() => hash.Hash | null | globalThis.Promise<hash.Hash | null>) | null = $.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).hash), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm")
			let __goscriptTuple3: any = await hkdf.Extract(__goscriptStatic0(), h, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).random, null)
			let prf: $.Slice<number> = __goscriptTuple3[0]
			let err = __goscriptTuple3[1]
			if (err != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
				return [null, err]
			}
			let acceptConfirmation: $.Slice<number> = await tls13.ExpandLabel(__goscriptStatic0(), h, prf, "hrr ech accept confirmation", await (confTranscript !== null && (confTranscript as any).__isVarRef !== true && (confTranscript as any).__goValue === undefined ? (confTranscript as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(confTranscript)).Sum(null), 8);
			;(helloRetryRequest$ as __goscript_handshake_messages.serverHelloMsg).encryptedClientHello = acceptConfirmation
		}

		{
			let [, err] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as serverHandshakeStateTLS13).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(helloRetryRequest, "*tls.serverHelloMsg", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")), ((hs$ as serverHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (err != null) {
				return [null, err]
			}
		}

		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeStateTLS13).sendDummyChangeCipherSpec() : serverHandshakeStateTLS13.prototype.sendDummyChangeCipherSpec.call(hs))
			if (err != null) {
				return [null, err]
			}
		}

		// clientHelloMsg is not included in the transcript.
		let [msg, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).readHandshake(null) : __goscript_conn.Conn.prototype.readHandshake.call(c, null))
		if (err != null) {
			return [null, err]
		}

		let __goscriptTuple4: any = $.typeAssertTuple<__goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.clientHelloMsg"))
		let clientHello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
			return [null, __goscript_common.unexpectedMessageError($.interfaceValue(clientHello, "*tls.clientHelloMsg", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")), msg)]
		}

		if ((hs$ as serverHandshakeStateTLS13).echContext != null) {
			if ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(clientHello).encryptedClientHello) == 0) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(109) : __goscript_conn.Conn.prototype.sendAlert.call(c, 109))
				return [null, errors.New("tls: second client hello missing encrypted client hello extension")]
			}

			let __goscriptTuple5: any = __goscript_ech.parseECHExt($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(clientHello).encryptedClientHello)
			let echType = __goscriptTuple5[0]
			let echCiphersuite = __goscriptTuple5[1]
			let configID = __goscriptTuple5[2]
			let encap: $.Slice<number> = __goscriptTuple5[3]
			let payload: $.Slice<number> = __goscriptTuple5[4]
			let __goscriptShadow3 = __goscriptTuple5[5]
			if (__goscriptShadow3 != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(50) : __goscript_conn.Conn.prototype.sendAlert.call(c, 50))
				return [null, errors.New("tls: client sent invalid encrypted client hello extension")]
			}

			if (((echType == 0) && $.pointerValue<echServerContext>((hs$ as serverHandshakeStateTLS13).echContext).inner) || ((echType == 1) && !$.pointerValue<echServerContext>((hs$ as serverHandshakeStateTLS13).echContext).inner)) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(50) : __goscript_conn.Conn.prototype.sendAlert.call(c, 50))
				return [null, errors.New("tls: unexpected switch in encrypted client hello extension type")]
			}

			if (echType == 0) {
				if (((!$.structEqual(echCiphersuite, $.pointerValue<echServerContext>((hs$ as serverHandshakeStateTLS13).echContext).ciphersuite)) || (configID != $.pointerValue<echServerContext>((hs$ as serverHandshakeStateTLS13).echContext).configID)) || ($.sliceLen(encap) != 0)) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
					return [null, errors.New("tls: second client hello encrypted client hello extension does not match")]
				}

				let __goscriptTuple6: any = await __goscript_ech.decryptECHPayload($.pointerValue<echServerContext>((hs$ as serverHandshakeStateTLS13).echContext).hpkeContext, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(clientHello).original, payload)
				let encodedInner: $.Slice<number> = __goscriptTuple6[0]
				let __goscriptShadow4 = __goscriptTuple6[1]
				if (__goscriptShadow4 != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(51) : __goscript_conn.Conn.prototype.sendAlert.call(c, 51))
					return [null, errors.New("tls: failed to decrypt second client hello encrypted client hello extension payload")]
				}

				let __goscriptTuple7: any = await __goscript_ech.decodeInnerClientHello(clientHello, encodedInner)
				let echInner: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null = __goscriptTuple7[0]
				__goscriptShadow4 = __goscriptTuple7[1]
				if (__goscriptShadow4 != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
					return [null, errors.New("tls: client sent invalid encrypted client hello extension")]
				}

				clientHello = echInner
			}
		}

		if ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(clientHello).keyShares) != 1) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return [null, errors.New("tls: client didn't send one key share in second ClientHello")]
		}
		let ks: __goscript_common.keyShare | $.VarRef<__goscript_common.keyShare> | null = $.indexRef($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(clientHello).keyShares!, 0)

		if ($.pointerValue<__goscript_common.keyShare>(ks).group != selectedGroup) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return [null, errors.New("tls: client sent unexpected key share in second ClientHello")]
		}

		if ($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(clientHello).earlyData) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return [null, errors.New("tls: client indicated early data in second ClientHello")]
		}

		if (illegalClientHelloChange(clientHello, (hs$ as serverHandshakeStateTLS13).clientHello)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return [null, errors.New("tls: client illegally modified second ClientHello")]
		}

		;(c$ as __goscript_conn.Conn).didHRR = true;
		;(hs$ as serverHandshakeStateTLS13).clientHello = clientHello
		return [ks, null]
	}

	public async handshake(): globalThis.Promise<$.GoError> {
		const hs: serverHandshakeStateTLS13 | $.VarRef<serverHandshakeStateTLS13> | null = this;
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = $.pointerValue<serverHandshakeStateTLS13>(hs).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		// For an overview of the TLS 1.3 handshake, see RFC 8446, Section 2.
		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeStateTLS13).processClientHello() : serverHandshakeStateTLS13.prototype.processClientHello.call(hs))
			if (err != null) {
				return err
			}
		}
		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeStateTLS13).checkForResumption() : serverHandshakeStateTLS13.prototype.checkForResumption.call(hs))
			if (err != null) {
				return err
			}
		}
		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeStateTLS13).pickCertificate() : serverHandshakeStateTLS13.prototype.pickCertificate.call(hs))
			if (err != null) {
				return err
			}
		}
		;(c$ as __goscript_conn.Conn).buffering = true
		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeStateTLS13).sendServerParameters() : serverHandshakeStateTLS13.prototype.sendServerParameters.call(hs))
			if (err != null) {
				return err
			}
		}
		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeStateTLS13).sendServerCertificate() : serverHandshakeStateTLS13.prototype.sendServerCertificate.call(hs))
			if (err != null) {
				return err
			}
		}
		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeStateTLS13).sendServerFinished() : serverHandshakeStateTLS13.prototype.sendServerFinished.call(hs))
			if (err != null) {
				return err
			}
		}
		// Note that at this point we could start sending application data without
		// waiting for the client's second flight, but the application might not
		// expect the lack of replay protection of the ClientHello parameters.
		{
			let [, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).flush() : __goscript_conn.Conn.prototype.flush.call(c))
			if (err != null) {
				return err
			}
		}
		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeStateTLS13).readClientCertificate() : serverHandshakeStateTLS13.prototype.readClientCertificate.call(hs))
			if (err != null) {
				return err
			}
		}
		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeStateTLS13).readClientFinished() : serverHandshakeStateTLS13.prototype.readClientFinished.call(hs))
			if (err != null) {
				return err
			}
		}

		void (c$ as __goscript_conn.Conn).isHandshakeComplete.Store(true)

		return null
	}

	public async pickCertificate(): globalThis.Promise<$.GoError> {
		let hs: serverHandshakeStateTLS13 | $.VarRef<serverHandshakeStateTLS13> | null = this;
		const hs$: serverHandshakeStateTLS13 = hs == null ? $.pointerTarget<serverHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		// Only one of PSK and certificates are used at a time.
		if ((hs$ as serverHandshakeStateTLS13).usingPSK) {
			return null
		}

		// signature_algorithms is required in TLS 1.3. See RFC 8446, Section 4.2.3.
		if ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).supportedSignatureAlgorithms) == 0) {
			return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(109) : __goscript_conn.Conn.prototype.sendAlert.call(c, 109))
		}

		let __goscriptTuple8: any = await __goscript_common.Config.prototype.getCertificate.call((c$ as __goscript_conn.Conn).config, __goscript_handshake_server.clientHelloInfo((hs$ as serverHandshakeStateTLS13).ctx, c, (hs$ as serverHandshakeStateTLS13).clientHello))
		let certificate: __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null = __goscriptTuple8[0]
		let err = __goscriptTuple8[1]
		if (err != null) {
			if ($.comparableEqual(err, __goscript_common.errNoCertificates)) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(112) : __goscript_conn.Conn.prototype.sendAlert.call(c, 112))
			} else {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			}
			return err
		}
		if (certificate != null) {
			$.pointerValue<__goscript_conn.Conn>((hs$ as serverHandshakeStateTLS13).c).localCertificate = $.pointerValue<__goscript_common.Certificate>(certificate).Certificate
		}
		let __goscriptTuple9: any = await __goscript_auth.selectSignatureScheme((c$ as __goscript_conn.Conn).vers, certificate, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).supportedSignatureAlgorithms);
		;(hs$ as serverHandshakeStateTLS13).sigAlg = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			// getCertificate returned a certificate that is unsupported or
			// incompatible with the client's signature algorithms.
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
			return err
		}
		;(hs$ as serverHandshakeStateTLS13).cert = certificate

		return null
	}

	public async processClientHello(): globalThis.Promise<$.GoError> {
		let hs: serverHandshakeStateTLS13 | $.VarRef<serverHandshakeStateTLS13> | null = this;
		const hs$: serverHandshakeStateTLS13 = hs == null ? $.pointerTarget<serverHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c);

		;(hs$ as serverHandshakeStateTLS13).hello = new __goscript_handshake_messages.serverHelloMsg()

		// TLS 1.3 froze the ServerHello.legacy_version field, and uses
		// supported_versions instead. See RFC 8446, sections 4.1.3 and 4.2.1.
		$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeStateTLS13).hello).vers = 771
		$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeStateTLS13).hello).supportedVersion = (c$ as __goscript_conn.Conn).vers

		if ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).supportedVersions) == 0) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: client used the legacy version field to negotiate TLS 1.3")
		}

		// Abort if the client is doing a fallback and landing lower than what we
		// support. See RFC 7507, which however does not specify the interaction
		// with supported_versions. The only difference is that with
		// supported_versions a client has a chance to attempt a [TLS 1.2, TLS 1.4]
		// handshake in case TLS 1.3 is broken but 1.2 is not. Alas, in that case,
		// it will have to drop the TLS_FALLBACK_SCSV protection if it falls back to
		// TLS 1.2, because a TLS 1.3 server would abort here. The situation before
		// supported_versions was not better because there was just no way to do a
		// TLS 1.4 handshake without risking the server selecting TLS 1.3.
		for (let __goscriptRangeTarget2 = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).cipherSuites, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let id = $.uint((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as number), 16)
			if (id == 22016) {
				// Use c.vers instead of max(supported_versions) because an attacker
				// could defeat this by adding an arbitrary high version otherwise.
				if ((c$ as __goscript_conn.Conn).vers < __goscript_common.Config.prototype.maxSupportedVersion.call((c$ as __goscript_conn.Conn).config, false, (c$ as __goscript_conn.Conn).quic != null)) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(86) : __goscript_conn.Conn.prototype.sendAlert.call(c, 86))
					return errors.New("tls: client using inappropriate protocol fallback")
				}
				break
			}
		}

		if (($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).compressionMethods) != 1) || ($.arrayIndex($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).compressionMethods!, 0) != 0)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: TLS 1.3 client supports illegal compression methods")
		}

		$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeStateTLS13).hello).random = $.makeSlice<number>(32, undefined, "byte")
		{
			let [, err] = await io.ReadFull($.pointerValueOrNil(__goscript_common.Config.prototype.rand.call((c$ as __goscript_conn.Conn).config))!, $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeStateTLS13).hello).random)
			if (err != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
				return err
			}
		}

		if ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).secureRenegotiation) != 0) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
			return errors.New("tls: initial handshake had non-empty renegotiation extension")
		}

		if ($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).earlyData && ((c$ as __goscript_conn.Conn).quic != null)) {
			if ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).pskIdentities) == 0) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
				return errors.New("tls: early_data without pre_shared_key")
			}
		} else {
			if ($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).earlyData) {
				// See RFC 8446, Section 4.2.10 for the complicated behavior required
				// here. The scenario is that a different server at our address offered
				// to accept early data in the past, which we can't handle. For now, all
				// 0-RTT enabled session tickets need to expire before a Go server can
				// replace a server or join a pool. That's the same requirement that
				// applies to mixing or replacing with any TLS 1.2 server.
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(110) : __goscript_conn.Conn.prototype.sendAlert.call(c, 110))
				return errors.New("tls: client sent unexpected early data")
			}
		}

		$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeStateTLS13).hello).sessionId = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).sessionId
		$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeStateTLS13).hello).compressionMethod = 0

		let preferenceList: $.Slice<number> = __goscript_defaults.__goscript_get_defaultCipherSuitesTLS13()
		if (!__goscript_cipher_suites.hasAESGCMHardwareSupport || !__goscript_cipher_suites.isAESGCMPreferred($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).cipherSuites)) {
			preferenceList = __goscript_defaults.__goscript_get_defaultCipherSuitesTLS13NoAES()
		}
		if (fips140tls.Required()) {
			preferenceList = __goscript_defaults_fips140.__goscript_get_allowedCipherSuitesTLS13FIPS()
		}
		for (let __goscriptRangeTarget3 = preferenceList, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let suiteID = $.uint((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as number), 16);
			;(hs$ as serverHandshakeStateTLS13).suite = __goscript_cipher_suites.mutualCipherSuiteTLS13($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).cipherSuites, suiteID)
			if ((hs$ as serverHandshakeStateTLS13).suite != null) {
				break
			}
		}
		if ((hs$ as serverHandshakeStateTLS13).suite == null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
			return fmt.Errorf("tls: no cipher suite supported by both client and server; client offered: %x", $.interfaceValue($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).cipherSuites, "[]uint16", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16"))))
		}
		;(c$ as __goscript_conn.Conn).cipherSuite = $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).id
		$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeStateTLS13).hello).cipherSuite = $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).id;
		;(hs$ as serverHandshakeStateTLS13).transcript = await crypto.Hash_New($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).hash)

		// First, if a post-quantum key exchange is available, use one. See
		// draft-ietf-tls-key-share-prediction-01, Section 4 for why this must be
		// first.
		//
		// Second, if the client sent a key share for a group we support, use that,
		// to avoid a HelloRetryRequest round-trip.
		//
		// Finally, pick in our fixed preference order.
		let preferredGroups: $.Slice<__goscript_common.CurveID> = __goscript_common.Config.prototype.curvePreferences.call((c$ as __goscript_conn.Conn).config, (c$ as __goscript_conn.Conn).vers)
		preferredGroups = (slices.DeleteFunc(preferredGroups, $.functionValue((group: __goscript_common.CurveID): boolean => {
			return !slices.Contains($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).supportedCurves, group)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint16", "tls.CurveID")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))) as $.Slice<__goscript_common.CurveID>)
		if ($.sliceLen(preferredGroups) == 0) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
			return errors.New("tls: no key exchanges supported by both client and server")
		}
		let hasKeyShare: ((group: __goscript_common.CurveID) => boolean | globalThis.Promise<boolean>) | null = $.functionValue((group: __goscript_common.CurveID): boolean => {
			for (let __goscriptRangeTarget4 = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).keyShares, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
				let ks = ((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as __goscript_common.keyShare)).clone()
				if (ks.group == group) {
					return true
				}
			}
			return false
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint16", "tls.CurveID")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
		await sort.SliceStable($.interfaceValue(preferredGroups, "[]tls.CurveID", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16", "tls.CurveID"))), $.functionValue(async (i: number, j: number): globalThis.Promise<boolean> => {
			return (__goscriptAwait = hasKeyShare!($.arrayIndex(preferredGroups!, i)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && !(__goscriptAwait = hasKeyShare!($.arrayIndex(preferredGroups!, j)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		sort.SliceStable($.interfaceValue(preferredGroups, "[]tls.CurveID", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16", "tls.CurveID"))), $.functionValue((i: number, j: number): boolean => {
			return __goscript_common.isPQKeyExchange($.arrayIndex(preferredGroups!, i)) && !__goscript_common.isPQKeyExchange($.arrayIndex(preferredGroups!, j))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
		let selectedGroup = $.arrayIndex(preferredGroups!, 0)

		let clientKeyShare: __goscript_common.keyShare | $.VarRef<__goscript_common.keyShare> | null = null! as __goscript_common.keyShare | $.VarRef<__goscript_common.keyShare> | null
		for (let __goscriptRangeTarget5 = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).keyShares, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let ks = $.varRef(((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as __goscript_common.keyShare)).clone())
			if (ks.value.group == selectedGroup) {
				clientKeyShare = ks
				break
			}
		}
		if (clientKeyShare == null) {
			let __goscriptTuple10: any = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeStateTLS13).doHelloRetryRequest(selectedGroup) : serverHandshakeStateTLS13.prototype.doHelloRetryRequest.call(hs, selectedGroup))
			let ks: __goscript_common.keyShare | $.VarRef<__goscript_common.keyShare> | null = __goscriptTuple10[0]
			let err = __goscriptTuple10[1]
			if (err != null) {
				return err
			}
			clientKeyShare = ks
		}
		;(c$ as __goscript_conn.Conn).curveID = selectedGroup

		let [ke, err] = __goscript_key_schedule.keyExchangeForCurveID(selectedGroup)
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			return errors.New("tls: internal error: supportsCurve accepted unimplemented curve")
		}
		let __goscriptTuple11: any = await (ke !== null && (ke as any).__isVarRef !== true && (ke as any).__goValue === undefined ? (ke as Exclude<__goscript_key_schedule.keyExchange, null>) : $.pointerValue<Exclude<__goscript_key_schedule.keyExchange, null>>(ke)).serverSharedSecret(__goscript_common.Config.prototype.rand.call((c$ as __goscript_conn.Conn).config), $.pointerValue<__goscript_common.keyShare>(clientKeyShare).data);
		;(hs$ as serverHandshakeStateTLS13).sharedKey = __goscriptTuple11[0]
		$.assignStruct($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeStateTLS13).hello).serverShare, __goscriptTuple11[1])
		err = __goscriptTuple11[2]
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: invalid client key share")
		}

		let __goscriptTuple12: any = __goscript_handshake_server.negotiateALPN($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).NextProtos, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).alpnProtocols, (c$ as __goscript_conn.Conn).quic != null)
		let selectedProto = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(120) : __goscript_conn.Conn.prototype.sendAlert.call(c, 120))
			return err
		}
		;(c$ as __goscript_conn.Conn).clientProtocol = selectedProto

		if ((c$ as __goscript_conn.Conn).quic != null) {
			// RFC 9001 Section 4.2: Clients MUST NOT offer TLS versions older than 1.3.
			for (let __goscriptRangeTarget6 = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).supportedVersions, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
				let v = $.uint((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as number), 16)
				if (v < 772) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(70) : __goscript_conn.Conn.prototype.sendAlert.call(c, 70))
					return errors.New("tls: client offered TLS version older than TLS 1.3")
				}
			}
			// RFC 9001 Section 8.2.
			if ($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).quicTransportParameters == null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(109) : __goscript_conn.Conn.prototype.sendAlert.call(c, 109))
				return errors.New("tls: client did not send a quic_transport_parameters extension")
			}
			__goscript_conn.Conn.prototype.quicSetTransportParameters.call(c, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).quicTransportParameters)
		} else {
			if ($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).quicTransportParameters != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(110) : __goscript_conn.Conn.prototype.sendAlert.call(c, 110))
				return errors.New("tls: client sent an unexpected quic_transport_parameters extension")
			}
		}

		;(c$ as __goscript_conn.Conn).serverName = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).serverName
		return null
	}

	public async readClientCertificate(): globalThis.Promise<$.GoError> {
		const hs: serverHandshakeStateTLS13 | $.VarRef<serverHandshakeStateTLS13> | null = this;
		const hs$: serverHandshakeStateTLS13 = hs == null ? $.pointerTarget<serverHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		if (!(hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeStateTLS13).requestClientCert() : serverHandshakeStateTLS13.prototype.requestClientCert.call(hs))) {
			// Make sure the connection is still being verified whether or not
			// the server requested a client certificate.
			if ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).VerifyConnection != null) {
				{
					let err = (__goscriptAwait = $.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).VerifyConnection!((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).connectionStateLocked() : __goscript_conn.Conn.prototype.connectionStateLocked.call(c))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (err != null) {
						await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(42) : __goscript_conn.Conn.prototype.sendAlert.call(c, 42))
						return err
					}
				}
			}
			return null
		}

		// If we requested a client certificate, then the client must send a
		// certificate message. If it's empty, no CertificateVerify is sent.

		let [msg, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).readHandshake(((hs$ as serverHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null)) : __goscript_conn.Conn.prototype.readHandshake.call(c, ((hs$ as serverHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null)))
		if (err != null) {
			return err
		}

		let __goscriptTuple13: any = $.typeAssertTuple<__goscript_handshake_messages.certificateMsgTLS13 | $.VarRef<__goscript_handshake_messages.certificateMsgTLS13> | null>(msg, /* @__PURE__ */ $.pointerType("tls.certificateMsgTLS13"))
		let certMsg: __goscript_handshake_messages.certificateMsgTLS13 | $.VarRef<__goscript_handshake_messages.certificateMsgTLS13> | null = __goscriptTuple13[0]
		let ok = __goscriptTuple13[1]
		let certMsg$: __goscript_handshake_messages.certificateMsgTLS13 = certMsg == null ? $.pointerTarget<__goscript_handshake_messages.certificateMsgTLS13>(certMsg) : (certMsg as any).__isVarRef === true ? (certMsg as any).value : (certMsg as any).__goValue === undefined ? (certMsg as any) : $.pointerTarget<__goscript_handshake_messages.certificateMsgTLS13>(certMsg)
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
			return __goscript_common.unexpectedMessageError($.interfaceValue(certMsg, "*tls.certificateMsgTLS13", /* @__PURE__ */ $.pointerType("tls.certificateMsgTLS13")), msg)
		}

		{
			let __goscriptShadow5 = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).processCertsFromClient(((certMsg$ as __goscript_handshake_messages.certificateMsgTLS13).certificate).clone()) : __goscript_conn.Conn.prototype.processCertsFromClient.call(c, ((certMsg$ as __goscript_handshake_messages.certificateMsgTLS13).certificate).clone()))
			if (__goscriptShadow5 != null) {
				return __goscriptShadow5
			}
		}

		if ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).VerifyConnection != null) {
			{
				let __goscriptShadow6 = (__goscriptAwait = $.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).VerifyConnection!((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).connectionStateLocked() : __goscript_conn.Conn.prototype.connectionStateLocked.call(c))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow6 != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(42) : __goscript_conn.Conn.prototype.sendAlert.call(c, 42))
					return __goscriptShadow6
				}
			}
		}

		if ($.sliceLen((certMsg$ as __goscript_handshake_messages.certificateMsgTLS13).certificate.Certificate) != 0) {
			// certificateVerifyMsg is included in the transcript, but not until
			// after we verify the handshake signature, since the state before
			// this message was sent is used.
			let __goscriptTuple14: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).readHandshake(null) : __goscript_conn.Conn.prototype.readHandshake.call(c, null))
			msg = __goscriptTuple14[0]
			err = __goscriptTuple14[1]
			if (err != null) {
				return err
			}

			let __goscriptTuple15: any = $.typeAssertTuple<__goscript_handshake_messages.certificateVerifyMsg | $.VarRef<__goscript_handshake_messages.certificateVerifyMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.certificateVerifyMsg"))
			let certVerify: __goscript_handshake_messages.certificateVerifyMsg | $.VarRef<__goscript_handshake_messages.certificateVerifyMsg> | null = __goscriptTuple15[0]
			let __goscriptShadow7 = __goscriptTuple15[1]
			let certVerify$: __goscript_handshake_messages.certificateVerifyMsg = certVerify == null ? $.pointerTarget<__goscript_handshake_messages.certificateVerifyMsg>(certVerify) : (certVerify as any).__isVarRef === true ? (certVerify as any).value : (certVerify as any).__goValue === undefined ? (certVerify as any) : $.pointerTarget<__goscript_handshake_messages.certificateVerifyMsg>(certVerify)
			if (!__goscriptShadow7) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
				return __goscript_common.unexpectedMessageError($.interfaceValue(certVerify, "*tls.certificateVerifyMsg", /* @__PURE__ */ $.pointerType("tls.certificateVerifyMsg")), msg)
			}

			// See RFC 8446, Section 4.4.3.
			// We don't use certReq.supportedSignatureAlgorithms because it would
			// require keeping the certificateRequestMsgTLS13 around in the hs.
			if (!__goscript_common.isSupportedSignatureAlgorithm((certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signatureAlgorithm, __goscript_common.supportedSignatureAlgorithms((c$ as __goscript_conn.Conn).vers, (c$ as __goscript_conn.Conn).vers)) || !__goscript_common.isSupportedSignatureAlgorithm((certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signatureAlgorithm, await __goscript_auth.signatureSchemesForPublicKey((c$ as __goscript_conn.Conn).vers, ($.pointerValue<x509.Certificate>($.arrayIndex((c$ as __goscript_conn.Conn).peerCertificates!, 0)).PublicKey as crypto.PublicKey | null)))) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
				return errors.New("tls: client certificate used with invalid signature algorithm")
			}
			let [sigType, sigHash, __goscriptShadow8] = __goscript_auth.typeAndHashFromSignatureScheme((certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signatureAlgorithm)
			if (__goscriptShadow8 != null) {
				return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			}
			if ((sigType == 225) || (sigHash == 3)) {
				return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			}
			let signed: $.Slice<number> = await __goscript_auth.signedMessage("TLS 1.3, client CertificateVerify\x00", (hs$ as serverHandshakeStateTLS13).transcript)
			{
				let __goscriptShadow9 = await __goscript_auth.verifyHandshakeSignature(sigType, ($.pointerValue<x509.Certificate>($.arrayIndex((c$ as __goscript_conn.Conn).peerCertificates!, 0)).PublicKey as crypto.PublicKey | null), sigHash, signed, (certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signature)
				if (__goscriptShadow9 != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(51) : __goscript_conn.Conn.prototype.sendAlert.call(c, 51))
					return errors.New($.concatString("tls: invalid signature by the client certificate: ", (__goscriptAwait = (__goscriptShadow9 !== null && (__goscriptShadow9 as any).__isVarRef !== true && (__goscriptShadow9 as any).__goValue === undefined ? (__goscriptShadow9 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow9)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
				}
			}
			;(c$ as __goscript_conn.Conn).peerSigAlg = (certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signatureAlgorithm

			{
				let __goscriptShadow10 = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>(certVerify, "*tls.certificateVerifyMsg", /* @__PURE__ */ $.pointerType("tls.certificateVerifyMsg")), ((hs$ as serverHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
				if (__goscriptShadow10 != null) {
					return __goscriptShadow10
				}
			}
		}

		// If we waited until the client certificates to send session tickets, we
		// are ready to do it now.
		{
			let __goscriptShadow11 = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeStateTLS13).sendSessionTickets() : serverHandshakeStateTLS13.prototype.sendSessionTickets.call(hs))
			if (__goscriptShadow11 != null) {
				return __goscriptShadow11
			}
		}

		return null
	}

	public async readClientFinished(): globalThis.Promise<$.GoError> {
		const hs: serverHandshakeStateTLS13 | $.VarRef<serverHandshakeStateTLS13> | null = this;
		const hs$: serverHandshakeStateTLS13 = hs == null ? $.pointerTarget<serverHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeStateTLS13).c

		// finishedMsg is not included in the transcript.
		let [msg, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).readHandshake(null) : __goscript_conn.Conn.prototype.readHandshake.call(c, null))
		if (err != null) {
			return err
		}

		let __goscriptTuple16: any = $.typeAssertTuple<__goscript_handshake_messages.finishedMsg | $.VarRef<__goscript_handshake_messages.finishedMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.finishedMsg"))
		let finished: __goscript_handshake_messages.finishedMsg | $.VarRef<__goscript_handshake_messages.finishedMsg> | null = __goscriptTuple16[0]
		let ok = __goscriptTuple16[1]
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
			return __goscript_common.unexpectedMessageError($.interfaceValue(finished, "*tls.finishedMsg", /* @__PURE__ */ $.pointerType("tls.finishedMsg")), msg)
		}

		if (!hmac.Equal((hs$ as serverHandshakeStateTLS13).clientFinished, $.pointerValue<__goscript_handshake_messages.finishedMsg>(finished).verifyData)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(51) : __goscript_conn.Conn.prototype.sendAlert.call(c, 51))
			return errors.New("tls: invalid client finished hash")
		}

		{
			let __goscriptShadow12 = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).setReadTrafficSecret((hs$ as serverHandshakeStateTLS13).suite, 3, (hs$ as serverHandshakeStateTLS13).trafficSecret, false) : __goscript_conn.Conn.prototype.setReadTrafficSecret.call(c, (hs$ as serverHandshakeStateTLS13).suite, 3, (hs$ as serverHandshakeStateTLS13).trafficSecret, false))
			if (__goscriptShadow12 != null) {
				return __goscriptShadow12
			}
		}

		return null
	}

	public requestClientCert(): boolean {
		const hs: serverHandshakeStateTLS13 | $.VarRef<serverHandshakeStateTLS13> | null = this;
		const hs$: serverHandshakeStateTLS13 = hs == null ? $.pointerTarget<serverHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeStateTLS13>(hs)
		return ($.pointerValue<__goscript_common.Config>($.pointerValue<__goscript_conn.Conn>((hs$ as serverHandshakeStateTLS13).c).config).ClientAuth >= 1) && !(hs$ as serverHandshakeStateTLS13).usingPSK
	}

	public async sendDummyChangeCipherSpec(): globalThis.Promise<$.GoError> {
		let hs: serverHandshakeStateTLS13 | $.VarRef<serverHandshakeStateTLS13> | null = this;
		const hs$: serverHandshakeStateTLS13 = hs == null ? $.pointerTarget<serverHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeStateTLS13>(hs)
		if ($.pointerValue<__goscript_conn.Conn>((hs$ as serverHandshakeStateTLS13).c).quic != null) {
			return null
		}
		if ((hs$ as serverHandshakeStateTLS13).sentDummyCCS) {
			return null
		}
		;(hs$ as serverHandshakeStateTLS13).sentDummyCCS = true

		return __goscript_conn.Conn.prototype.writeChangeCipherRecord.call((hs$ as serverHandshakeStateTLS13).c)
	}

	public async sendServerCertificate(): globalThis.Promise<$.GoError> {
		const hs: serverHandshakeStateTLS13 | $.VarRef<serverHandshakeStateTLS13> | null = this;
		const hs$: serverHandshakeStateTLS13 = hs == null ? $.pointerTarget<serverHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		// Only one of PSK and certificates are used at a time.
		if ((hs$ as serverHandshakeStateTLS13).usingPSK) {
			return null
		}

		if ((hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeStateTLS13).requestClientCert() : serverHandshakeStateTLS13.prototype.requestClientCert.call(hs))) {
			// Request a client certificate
			let certReq: __goscript_handshake_messages.certificateRequestMsgTLS13 | $.VarRef<__goscript_handshake_messages.certificateRequestMsgTLS13> | null = new __goscript_handshake_messages.certificateRequestMsgTLS13()
			let certReq$: __goscript_handshake_messages.certificateRequestMsgTLS13 = certReq == null ? $.pointerTarget<__goscript_handshake_messages.certificateRequestMsgTLS13>(certReq) : (certReq as any).__isVarRef === true ? (certReq as any).value : (certReq as any).__goValue === undefined ? (certReq as any) : $.pointerTarget<__goscript_handshake_messages.certificateRequestMsgTLS13>(certReq);
			;(certReq$ as __goscript_handshake_messages.certificateRequestMsgTLS13).ocspStapling = true;
			;(certReq$ as __goscript_handshake_messages.certificateRequestMsgTLS13).scts = true;
			;(certReq$ as __goscript_handshake_messages.certificateRequestMsgTLS13).supportedSignatureAlgorithms = __goscript_common.supportedSignatureAlgorithms((c$ as __goscript_conn.Conn).vers, (c$ as __goscript_conn.Conn).vers);
			;(certReq$ as __goscript_handshake_messages.certificateRequestMsgTLS13).supportedSignatureAlgorithmsCert = __goscript_common.supportedSignatureAlgorithmsCert((c$ as __goscript_conn.Conn).vers, (c$ as __goscript_conn.Conn).vers)
			if ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ClientCAs != null) {
				;(certReq$ as __goscript_handshake_messages.certificateRequestMsgTLS13).certificateAuthorities = x509.CertPool.prototype.Subjects.call($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ClientCAs)
			}

			{
				let [, err] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as serverHandshakeStateTLS13).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(certReq, "*tls.certificateRequestMsgTLS13", /* @__PURE__ */ $.pointerType("tls.certificateRequestMsgTLS13")), ((hs$ as serverHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
				if (err != null) {
					return err
				}
			}
		}

		let certMsg: __goscript_handshake_messages.certificateMsgTLS13 | $.VarRef<__goscript_handshake_messages.certificateMsgTLS13> | null = new __goscript_handshake_messages.certificateMsgTLS13()
		let certMsg$: __goscript_handshake_messages.certificateMsgTLS13 = certMsg == null ? $.pointerTarget<__goscript_handshake_messages.certificateMsgTLS13>(certMsg) : (certMsg as any).__isVarRef === true ? (certMsg as any).value : (certMsg as any).__goValue === undefined ? (certMsg as any) : $.pointerTarget<__goscript_handshake_messages.certificateMsgTLS13>(certMsg)

		$.assignStruct((certMsg$ as __goscript_handshake_messages.certificateMsgTLS13).certificate, $.pointerValue<__goscript_common.Certificate>((hs$ as serverHandshakeStateTLS13).cert));
		;(certMsg$ as __goscript_handshake_messages.certificateMsgTLS13).scts = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).scts && ($.sliceLen($.pointerValue<__goscript_common.Certificate>((hs$ as serverHandshakeStateTLS13).cert).SignedCertificateTimestamps) > 0);
		;(certMsg$ as __goscript_handshake_messages.certificateMsgTLS13).ocspStapling = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).ocspStapling && ($.sliceLen($.pointerValue<__goscript_common.Certificate>((hs$ as serverHandshakeStateTLS13).cert).OCSPStaple) > 0)

		{
			let [, err] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as serverHandshakeStateTLS13).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(certMsg, "*tls.certificateMsgTLS13", /* @__PURE__ */ $.pointerType("tls.certificateMsgTLS13")), ((hs$ as serverHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (err != null) {
				return err
			}
		}

		let certVerifyMsg: __goscript_handshake_messages.certificateVerifyMsg | $.VarRef<__goscript_handshake_messages.certificateVerifyMsg> | null = new __goscript_handshake_messages.certificateVerifyMsg()
		let certVerifyMsg$: __goscript_handshake_messages.certificateVerifyMsg = certVerifyMsg == null ? $.pointerTarget<__goscript_handshake_messages.certificateVerifyMsg>(certVerifyMsg) : (certVerifyMsg as any).__isVarRef === true ? (certVerifyMsg as any).value : (certVerifyMsg as any).__goValue === undefined ? (certVerifyMsg as any) : $.pointerTarget<__goscript_handshake_messages.certificateVerifyMsg>(certVerifyMsg);
		;(certVerifyMsg$ as __goscript_handshake_messages.certificateVerifyMsg).hasSignatureAlgorithm = true;
		;(certVerifyMsg$ as __goscript_handshake_messages.certificateVerifyMsg).signatureAlgorithm = (hs$ as serverHandshakeStateTLS13).sigAlg

		let [sigType, sigHash, err] = __goscript_auth.typeAndHashFromSignatureScheme((hs$ as serverHandshakeStateTLS13).sigAlg)
		if (err != null) {
			return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
		}

		let signed: $.Slice<number> = await __goscript_auth.signedMessage("TLS 1.3, server CertificateVerify\x00", (hs$ as serverHandshakeStateTLS13).transcript)
		let signOpts = $.namedValueInterfaceValue<crypto.SignerOpts | null>(sigHash, "crypto.Hash", __goscriptStatic1(), __goscriptStatic2(), __goscriptStatic3())
		if (sigType == 226) {
			signOpts = $.interfaceValue<crypto.SignerOpts | null>(new rsa.PSSOptions({SaltLength: -1, Hash: sigHash}), "*rsa.PSSOptions", /* @__PURE__ */ $.pointerType("rsa.PSSOptions"))
		}
		let __goscriptTuple17: any = await crypto.SignMessage($.mustTypeAssert<crypto.Signer | null>($.pointerValue<__goscript_common.Certificate>((hs$ as serverHandshakeStateTLS13).cert).PrivateKey, "crypto.Signer"), __goscript_common.Config.prototype.rand.call((c$ as __goscript_conn.Conn).config), signed, signOpts)
		let sig: $.Slice<number> = __goscriptTuple17[0]
		err = __goscriptTuple17[1]
		if (err != null) {
			let _public = (__goscriptAwait = $.pointerValue<Exclude<crypto.Signer, null>>($.mustTypeAssert<crypto.Signer | null>($.pointerValue<__goscript_common.Certificate>((hs$ as serverHandshakeStateTLS13).cert).PrivateKey, "crypto.Signer")).Public(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let __goscriptTuple18: any = $.typeAssertTuple<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(_public, /* @__PURE__ */ $.pointerType("rsa.PublicKey"))
				let rsaKey: rsa.PublicKey | $.VarRef<rsa.PublicKey> | null = __goscriptTuple18[0]
				let ok = __goscriptTuple18[1]
				if ((ok && (sigType == 226)) && ((globalThis.Math.trunc(big.Int.prototype.BitLen.call($.pointerValue<rsa.PublicKey>(rsaKey).N) / 8)) < ((crypto.Hash_Size(sigHash) * 2) + 2))) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
				} else {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
				}
			}
			return errors.New($.concatString("tls: failed to sign handshake: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		}
		;(certVerifyMsg$ as __goscript_handshake_messages.certificateVerifyMsg).signature = sig

		{
			let [, __goscriptShadow13] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as serverHandshakeStateTLS13).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(certVerifyMsg, "*tls.certificateVerifyMsg", /* @__PURE__ */ $.pointerType("tls.certificateVerifyMsg")), ((hs$ as serverHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (__goscriptShadow13 != null) {
				return __goscriptShadow13
			}
		}

		return null
	}

	public async sendServerFinished(): globalThis.Promise<$.GoError> {
		let hs: serverHandshakeStateTLS13 | $.VarRef<serverHandshakeStateTLS13> | null = this;
		const hs$: serverHandshakeStateTLS13 = hs == null ? $.pointerTarget<serverHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		let finished: __goscript_handshake_messages.finishedMsg | $.VarRef<__goscript_handshake_messages.finishedMsg> | null = (await (async () => { const __goscriptLiteralField1 = await __goscript_cipher_suites.cipherSuiteTLS13.prototype.finishedHash.call((hs$ as serverHandshakeStateTLS13).suite, (c$ as __goscript_conn.Conn).out.trafficSecret, (hs$ as serverHandshakeStateTLS13).transcript); return new __goscript_handshake_messages.finishedMsg({verifyData: __goscriptLiteralField1}) })())

		{
			let [, err] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as serverHandshakeStateTLS13).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(finished, "*tls.finishedMsg", /* @__PURE__ */ $.pointerType("tls.finishedMsg")), ((hs$ as serverHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (err != null) {
				return err
			}
		}

		// Derive secrets that take context through the server Finished.

		;(hs$ as serverHandshakeStateTLS13).masterSecret = await tls13.HandshakeSecret.prototype.MasterSecret.call((hs$ as serverHandshakeStateTLS13).handshakeSecret);

		;(hs$ as serverHandshakeStateTLS13).trafficSecret = await tls13.MasterSecret.prototype.ClientApplicationTrafficSecret.call((hs$ as serverHandshakeStateTLS13).masterSecret, (hs$ as serverHandshakeStateTLS13).transcript)
		let serverSecret: $.Slice<number> = await tls13.MasterSecret.prototype.ServerApplicationTrafficSecret.call((hs$ as serverHandshakeStateTLS13).masterSecret, (hs$ as serverHandshakeStateTLS13).transcript)
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).setWriteTrafficSecret((hs$ as serverHandshakeStateTLS13).suite, 3, serverSecret) : __goscript_conn.Conn.prototype.setWriteTrafficSecret.call(c, (hs$ as serverHandshakeStateTLS13).suite, 3, serverSecret))

		if ((c$ as __goscript_conn.Conn).quic != null) {
			void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).quicSetWriteSecret(3, $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).id, serverSecret) : __goscript_conn.Conn.prototype.quicSetWriteSecret.call(c, 3, $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).id, serverSecret))
		}

		let err = await __goscript_common.Config.prototype.writeKeyLog.call((c$ as __goscript_conn.Conn).config, "CLIENT_TRAFFIC_SECRET_0", $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).random, (hs$ as serverHandshakeStateTLS13).trafficSecret)
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			return err
		}
		err = await __goscript_common.Config.prototype.writeKeyLog.call((c$ as __goscript_conn.Conn).config, "SERVER_TRAFFIC_SECRET_0", $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).random, serverSecret)
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			return err
		}

		;(c$ as __goscript_conn.Conn).ekm = await __goscript_cipher_suites.cipherSuiteTLS13.prototype.exportKeyingMaterial.call((hs$ as serverHandshakeStateTLS13).suite, (hs$ as serverHandshakeStateTLS13).masterSecret, (hs$ as serverHandshakeStateTLS13).transcript)

		// If we did not request client certificates, at this point we can
		// precompute the client finished and roll the transcript forward to send
		// session tickets in our first flight.
		if (!(hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeStateTLS13).requestClientCert() : serverHandshakeStateTLS13.prototype.requestClientCert.call(hs))) {
			{
				let __goscriptShadow14 = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeStateTLS13).sendSessionTickets() : serverHandshakeStateTLS13.prototype.sendSessionTickets.call(hs))
				if (__goscriptShadow14 != null) {
					return __goscriptShadow14
				}
			}
		}

		return null
	}

	public async sendServerParameters(): globalThis.Promise<$.GoError> {
		let hs: serverHandshakeStateTLS13 | $.VarRef<serverHandshakeStateTLS13> | null = this;
		const hs$: serverHandshakeStateTLS13 = hs == null ? $.pointerTarget<serverHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		if ((hs$ as serverHandshakeStateTLS13).echContext != null) {
			$.copy($.goSlice($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeStateTLS13).hello).random, 32 - 8, undefined), $.makeSlice<number>(8, undefined, "byte"))
			let echTranscript = await cloneHash((hs$ as serverHandshakeStateTLS13).transcript, $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).hash)
			await (echTranscript !== null && (echTranscript as any).__isVarRef !== true && (echTranscript as any).__goValue === undefined ? (echTranscript as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(echTranscript)).Write($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).original)
			{
				let err = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>((hs$ as serverHandshakeStateTLS13).hello, "*tls.serverHelloMsg", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")), (echTranscript as __goscript_handshake_messages.transcriptHash | null))
				if (err != null) {
					return err
				}
			}
			// compute the acceptance message
			let h: (() => hash.Hash | null | globalThis.Promise<hash.Hash | null>) | null = $.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).hash), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm")
			let __goscriptTuple19: any = await hkdf.Extract(__goscriptStatic0(), h, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).random, null)
			let prk: $.Slice<number> = __goscriptTuple19[0]
			let err = __goscriptTuple19[1]
			if (err != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
				return err
			}
			let acceptConfirmation: $.Slice<number> = await tls13.ExpandLabel(__goscriptStatic0(), h, prk, "ech accept confirmation", await (echTranscript !== null && (echTranscript as any).__isVarRef !== true && (echTranscript as any).__goValue === undefined ? (echTranscript as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(echTranscript)).Sum(null), 8)
			$.copy($.goSlice($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeStateTLS13).hello).random, 32 - 8, undefined), acceptConfirmation)
		}

		{
			let err = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>((hs$ as serverHandshakeStateTLS13).clientHello, "*tls.clientHelloMsg", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")), ((hs$ as serverHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (err != null) {
				return err
			}
		}

		{
			let [, err] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as serverHandshakeStateTLS13).c, $.interfaceValue<__goscript_common.handshakeMessage | null>((hs$ as serverHandshakeStateTLS13).hello, "*tls.serverHelloMsg", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")), ((hs$ as serverHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (err != null) {
				return err
			}
		}

		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeStateTLS13).sendDummyChangeCipherSpec() : serverHandshakeStateTLS13.prototype.sendDummyChangeCipherSpec.call(hs))
			if (err != null) {
				return err
			}
		}

		let earlySecret: tls13.EarlySecret | $.VarRef<tls13.EarlySecret> | null = (hs$ as serverHandshakeStateTLS13).earlySecret
		if (earlySecret == null) {
			earlySecret = await tls13.NewEarlySecret(__goscriptStatic0(), $.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).hash), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm"), null)
		}
		;(hs$ as serverHandshakeStateTLS13).handshakeSecret = await (earlySecret !== null && (earlySecret as any).__isVarRef !== true && (earlySecret as any).__goValue === undefined ? ((earlySecret as any) as tls13.EarlySecret).HandshakeSecret((hs$ as serverHandshakeStateTLS13).sharedKey) : tls13.EarlySecret.prototype.HandshakeSecret.call(earlySecret, (hs$ as serverHandshakeStateTLS13).sharedKey))

		let serverSecret: $.Slice<number> = await tls13.HandshakeSecret.prototype.ServerHandshakeTrafficSecret.call((hs$ as serverHandshakeStateTLS13).handshakeSecret, (hs$ as serverHandshakeStateTLS13).transcript)
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).setWriteTrafficSecret((hs$ as serverHandshakeStateTLS13).suite, 2, serverSecret) : __goscript_conn.Conn.prototype.setWriteTrafficSecret.call(c, (hs$ as serverHandshakeStateTLS13).suite, 2, serverSecret))
		let clientSecret: $.Slice<number> = await tls13.HandshakeSecret.prototype.ClientHandshakeTrafficSecret.call((hs$ as serverHandshakeStateTLS13).handshakeSecret, (hs$ as serverHandshakeStateTLS13).transcript)
		{
			let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).setReadTrafficSecret((hs$ as serverHandshakeStateTLS13).suite, 2, clientSecret, false) : __goscript_conn.Conn.prototype.setReadTrafficSecret.call(c, (hs$ as serverHandshakeStateTLS13).suite, 2, clientSecret, false))
			if (err != null) {
				return err
			}
		}

		if ((c$ as __goscript_conn.Conn).quic != null) {
			void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).quicSetWriteSecret(2, $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).id, serverSecret) : __goscript_conn.Conn.prototype.quicSetWriteSecret.call(c, 2, $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).id, serverSecret))
			{
				let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).quicSetReadSecret(2, $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).id, clientSecret) : __goscript_conn.Conn.prototype.quicSetReadSecret.call(c, 2, $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as serverHandshakeStateTLS13).suite).id, clientSecret))
				if (err != null) {
					return err
				}
			}
		}

		let err = await __goscript_common.Config.prototype.writeKeyLog.call((c$ as __goscript_conn.Conn).config, "CLIENT_HANDSHAKE_TRAFFIC_SECRET", $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).random, clientSecret)
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			return err
		}
		err = await __goscript_common.Config.prototype.writeKeyLog.call((c$ as __goscript_conn.Conn).config, "SERVER_HANDSHAKE_TRAFFIC_SECRET", $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).random, serverSecret)
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			return err
		}

		let encryptedExtensions: __goscript_handshake_messages.encryptedExtensionsMsg | $.VarRef<__goscript_handshake_messages.encryptedExtensionsMsg> | null = new __goscript_handshake_messages.encryptedExtensionsMsg()
		let encryptedExtensions$: __goscript_handshake_messages.encryptedExtensionsMsg = encryptedExtensions == null ? $.pointerTarget<__goscript_handshake_messages.encryptedExtensionsMsg>(encryptedExtensions) : (encryptedExtensions as any).__isVarRef === true ? (encryptedExtensions as any).value : (encryptedExtensions as any).__goValue === undefined ? (encryptedExtensions as any) : $.pointerTarget<__goscript_handshake_messages.encryptedExtensionsMsg>(encryptedExtensions);
		;(encryptedExtensions$ as __goscript_handshake_messages.encryptedExtensionsMsg).alpnProtocol = (c$ as __goscript_conn.Conn).clientProtocol

		if ((c$ as __goscript_conn.Conn).quic != null) {
			let __goscriptTuple20: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).quicGetTransportParameters() : __goscript_conn.Conn.prototype.quicGetTransportParameters.call(c))
			let p: $.Slice<number> = __goscriptTuple20[0]
			let __goscriptShadow15 = __goscriptTuple20[1]
			if (__goscriptShadow15 != null) {
				return __goscriptShadow15
			}
			;(encryptedExtensions$ as __goscript_handshake_messages.encryptedExtensionsMsg).quicTransportParameters = p;
			;(encryptedExtensions$ as __goscript_handshake_messages.encryptedExtensionsMsg).earlyData = (hs$ as serverHandshakeStateTLS13).earlyData
		}

		if (!$.pointerValue<__goscript_conn.Conn>((hs$ as serverHandshakeStateTLS13).c).didResume && (!$.stringEqual($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).serverName, ""))) {
			;(encryptedExtensions$ as __goscript_handshake_messages.encryptedExtensionsMsg).serverNameAck = true
		}

		// If client sent ECH extension, but we didn't accept it,
		// send retry configs, if available.
		let echKeys: $.Slice<__goscript_common.EncryptedClientHelloKey> = $.pointerValue<__goscript_common.Config>($.pointerValue<__goscript_conn.Conn>((hs$ as serverHandshakeStateTLS13).c).config).EncryptedClientHelloKeys
		if ($.pointerValue<__goscript_common.Config>($.pointerValue<__goscript_conn.Conn>((hs$ as serverHandshakeStateTLS13).c).config).GetEncryptedClientHelloKeys != null) {
			let __goscriptTuple21: any = await $.pointerValue<__goscript_common.Config>($.pointerValue<__goscript_conn.Conn>((hs$ as serverHandshakeStateTLS13).c).config).GetEncryptedClientHelloKeys!(__goscript_handshake_server.clientHelloInfo((hs$ as serverHandshakeStateTLS13).ctx, c, (hs$ as serverHandshakeStateTLS13).clientHello))
			echKeys = __goscriptTuple21[0]
			err = __goscriptTuple21[1]
			if (err != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
				return err
			}
		}
		if ((($.sliceLen(echKeys) > 0) && ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).encryptedClientHello) > 0)) && ((hs$ as serverHandshakeStateTLS13).echContext == null)) {
			let __goscriptTuple22: any = await __goscript_ech.buildRetryConfigList(echKeys);
			;(encryptedExtensions$ as __goscript_handshake_messages.encryptedExtensionsMsg).echRetryConfigs = __goscriptTuple22[0]
			err = __goscriptTuple22[1]
			if (err != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
				return err
			}
		}

		{
			let [, __goscriptShadow16] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as serverHandshakeStateTLS13).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(encryptedExtensions, "*tls.encryptedExtensionsMsg", /* @__PURE__ */ $.pointerType("tls.encryptedExtensionsMsg")), ((hs$ as serverHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (__goscriptShadow16 != null) {
				return __goscriptShadow16
			}
		}

		return null
	}

	public async sendSessionTickets(): globalThis.Promise<$.GoError> {
		let hs: serverHandshakeStateTLS13 | $.VarRef<serverHandshakeStateTLS13> | null = this;
		const hs$: serverHandshakeStateTLS13 = hs == null ? $.pointerTarget<serverHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c);

		;(hs$ as serverHandshakeStateTLS13).clientFinished = await __goscript_cipher_suites.cipherSuiteTLS13.prototype.finishedHash.call((hs$ as serverHandshakeStateTLS13).suite, (c$ as __goscript_conn.Conn)._in.trafficSecret, (hs$ as serverHandshakeStateTLS13).transcript)
		let __goscriptShadow17: __goscript_handshake_messages.finishedMsg | $.VarRef<__goscript_handshake_messages.finishedMsg> | null = new __goscript_handshake_messages.finishedMsg({verifyData: (hs$ as serverHandshakeStateTLS13).clientFinished})
		{
			let err = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>(__goscriptShadow17, "*tls.finishedMsg", /* @__PURE__ */ $.pointerType("tls.finishedMsg")), ((hs$ as serverHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (err != null) {
				return err
			}
		}

		;(c$ as __goscript_conn.Conn).resumptionSecret = await tls13.MasterSecret.prototype.ResumptionMasterSecret.call((hs$ as serverHandshakeStateTLS13).masterSecret, (hs$ as serverHandshakeStateTLS13).transcript)

		if (!(hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeStateTLS13).shouldSendSessionTickets() : serverHandshakeStateTLS13.prototype.shouldSendSessionTickets.call(hs))) {
			return null
		}
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendSessionTicket(false, null) : __goscript_conn.Conn.prototype.sendSessionTicket.call(c, false, null))
	}

	public shouldSendSessionTickets(): boolean {
		const hs: serverHandshakeStateTLS13 | $.VarRef<serverHandshakeStateTLS13> | null = this;
		const hs$: serverHandshakeStateTLS13 = hs == null ? $.pointerTarget<serverHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeStateTLS13>(hs)
		if ($.pointerValue<__goscript_common.Config>($.pointerValue<__goscript_conn.Conn>((hs$ as serverHandshakeStateTLS13).c).config).SessionTicketsDisabled) {
			return false
		}

		// QUIC tickets are sent by QUICConn.SendSessionTicket, not automatically.
		if ($.pointerValue<__goscript_conn.Conn>((hs$ as serverHandshakeStateTLS13).c).quic != null) {
			return false
		}

		// Don't send tickets the client wouldn't use. See RFC 8446, Section 4.2.9.
		return slices.Contains($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeStateTLS13).clientHello).pskModes, 1)
	}

	static __typeInfo = $.registerStructType(
		"tls.serverHandshakeStateTLS13",
		() => new serverHandshakeStateTLS13(),
		() => [$.methodSignature("checkForResumption", [], ["error"], true), $.methodSignature("doHelloRetryRequest", [["selectedGroup", /* @__PURE__ */ $.basicType("uint16", "tls.CurveID")]], [/* @__PURE__ */ $.pointerType("tls.keyShare"), "error"], true), $.methodSignature("handshake", [], ["error"], true), $.methodSignature("pickCertificate", [], ["error"], true), $.methodSignature("processClientHello", [], ["error"], true), $.methodSignature("readClientCertificate", [], ["error"], true), $.methodSignature("readClientFinished", [], ["error"], true), $.methodSignature("requestClientCert", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("sendDummyChangeCipherSpec", [], ["error"], true), $.methodSignature("sendServerCertificate", [], ["error"], true), $.methodSignature("sendServerFinished", [], ["error"], true), $.methodSignature("sendServerParameters", [], ["error"], true), $.methodSignature("sendSessionTickets", [], ["error"], true), $.methodSignature("shouldSendSessionTickets", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		serverHandshakeStateTLS13,
		() => [/* @__PURE__ */ $.structField("c", /* @__PURE__ */ $.pointerType("tls.Conn"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [1], 8, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("clientHello", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg"), [2], 24, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("hello", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg"), [3], 32, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("sentDummyCCS", /* @__PURE__ */ $.basicType("bool"), [4], 40, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("usingPSK", /* @__PURE__ */ $.basicType("bool"), [5], 41, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("earlyData", /* @__PURE__ */ $.basicType("bool"), [6], 42, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("suite", /* @__PURE__ */ $.pointerType("tls.cipherSuiteTLS13"), [7], 48, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("cert", /* @__PURE__ */ $.pointerType("tls.Certificate"), [8], 56, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("sigAlg", /* @__PURE__ */ $.basicType("uint16", "tls.SignatureScheme"), [9], 64, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("earlySecret", /* @__PURE__ */ $.pointerType("tls13.EarlySecret"), [10], 72, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("sharedKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [11], 80, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("handshakeSecret", /* @__PURE__ */ $.pointerType("tls13.HandshakeSecret"), [12], 104, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("masterSecret", /* @__PURE__ */ $.pointerType("tls13.MasterSecret"), [13], 112, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("trafficSecret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [14], 120, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("transcript", "hash.Hash", [15], 144, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("clientFinished", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [16], 160, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("echContext", /* @__PURE__ */ $.pointerType("tls.echServerContext"), [17], 184, false, { pkgPath: "crypto/tls" })]
	)
}

export const maxClientPSKIdentities: number = 5

export async function cloneHash(_in: hash.Hash | null, h: crypto.Hash): globalThis.Promise<hash.Hash | null> {
	{
		let [cloner, ok] = $.typeAssertTuple<hash.Cloner | null>(_in, "hash.Cloner")
		if (ok) {
			{
				let [out, err] = await (cloner !== null && (cloner as any).__isVarRef !== true && (cloner as any).__goValue === undefined ? (cloner as Exclude<hash.Cloner, null>) : $.pointerValue<Exclude<hash.Cloner, null>>(cloner)).Clone()
				if (err == null) {
					return (out as hash.Hash | null)
				}
			}
		}
	}
	// Recreate the interface to avoid importing encoding.
	type binaryMarshaler = {
		MarshalBinary(): [$.Slice<number>, $.GoError]
		UnmarshalBinary(data: $.Slice<number>): $.GoError
	}

	$.registerInterfaceType(
		"tls.binaryMarshaler",
		null,
		[$.methodSignature("MarshalBinary", [], [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]]), $.methodSignature("UnmarshalBinary", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
	);
	let [marshaler, ok] = $.typeAssertTuple<binaryMarshaler | null>(_in, "tls.binaryMarshaler")
	if (!ok) {
		return null
	}
	let __goscriptTuple23: any = await (marshaler !== null && (marshaler as any).__isVarRef !== true && (marshaler as any).__goValue === undefined ? (marshaler as Exclude<binaryMarshaler, null>) : $.pointerValue<Exclude<binaryMarshaler, null>>(marshaler)).MarshalBinary()
	let state: $.Slice<number> = __goscriptTuple23[0]
	let err = __goscriptTuple23[1]
	if (err != null) {
		return null
	}
	let out = await crypto.Hash_New(h)
	let __goscriptTuple24: any = $.typeAssertTuple<binaryMarshaler | null>(out, "tls.binaryMarshaler")
	let unmarshaler = __goscriptTuple24[0]
	ok = __goscriptTuple24[1]
	if (!ok) {
		return null
	}
	{
		let __goscriptShadow18 = (__goscriptAwait = (unmarshaler !== null && (unmarshaler as any).__isVarRef !== true && (unmarshaler as any).__goValue === undefined ? (unmarshaler as Exclude<binaryMarshaler, null>) : $.pointerValue<Exclude<binaryMarshaler, null>>(unmarshaler)).UnmarshalBinary(state), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (__goscriptShadow18 != null) {
			return null
		}
	}
	return out
}

export function illegalClientHelloChange(ch: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, ch1: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null): boolean {
	if (((((($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).supportedVersions) != $.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).supportedVersions)) || ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).cipherSuites) != $.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).cipherSuites))) || ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).supportedCurves) != $.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).supportedCurves))) || ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).supportedSignatureAlgorithms) != $.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).supportedSignatureAlgorithms))) || ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).supportedSignatureAlgorithmsCert) != $.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).supportedSignatureAlgorithmsCert))) || ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).alpnProtocols) != $.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).alpnProtocols))) {
		return true
	}
	for (let __goscriptRangeTarget7 = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).supportedVersions, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), i = 0; i < __goscriptRangeWindow7.length; i++) {
		if ($.arrayIndex($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).supportedVersions!, i) != $.arrayIndex($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).supportedVersions!, i)) {
			return true
		}
	}
	for (let __goscriptRangeTarget8 = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).cipherSuites, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), i = 0; i < __goscriptRangeWindow8.length; i++) {
		if ($.arrayIndex($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).cipherSuites!, i) != $.arrayIndex($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).cipherSuites!, i)) {
			return true
		}
	}
	for (let __goscriptRangeTarget9 = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).supportedCurves, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), i = 0; i < __goscriptRangeWindow9.length; i++) {
		if ($.arrayIndex($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).supportedCurves!, i) != $.arrayIndex($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).supportedCurves!, i)) {
			return true
		}
	}
	for (let __goscriptRangeTarget10 = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).supportedSignatureAlgorithms, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), i = 0; i < __goscriptRangeWindow10.length; i++) {
		if ($.arrayIndex($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).supportedSignatureAlgorithms!, i) != $.arrayIndex($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).supportedSignatureAlgorithms!, i)) {
			return true
		}
	}
	for (let __goscriptRangeTarget11 = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).supportedSignatureAlgorithmsCert, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), i = 0; i < __goscriptRangeWindow11.length; i++) {
		if ($.arrayIndex($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).supportedSignatureAlgorithmsCert!, i) != $.arrayIndex($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).supportedSignatureAlgorithmsCert!, i)) {
			return true
		}
	}
	for (let __goscriptRangeTarget12 = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).alpnProtocols, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), i = 0; i < __goscriptRangeWindow12.length; i++) {
		if (!$.stringEqual($.arrayIndex($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).alpnProtocols!, i), $.arrayIndex($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).alpnProtocols!, i))) {
			return true
		}
	}
	return ((((((((((((($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).vers != $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).vers) || !bytes.Equal($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).random, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).random)) || !bytes.Equal($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).sessionId, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).sessionId)) || !bytes.Equal($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).compressionMethods, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).compressionMethods)) || (!$.stringEqual($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).serverName, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).serverName))) || ($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).ocspStapling != $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).ocspStapling)) || !bytes.Equal($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).supportedPoints, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).supportedPoints)) || ($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).ticketSupported != $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).ticketSupported)) || !bytes.Equal($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).sessionTicket, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).sessionTicket)) || ($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).secureRenegotiationSupported != $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).secureRenegotiationSupported)) || !bytes.Equal($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).secureRenegotiation, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).secureRenegotiation)) || ($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).scts != $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).scts)) || !bytes.Equal($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).cookie, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).cookie)) || !bytes.Equal($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch).pskModes, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(ch1).pskModes)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, H: { type: "hash.Hash", zero: () => null, methods: {BlockSize: (receiver: any, ...args: any[]) => receiver.BlockSize(...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => receiver.Reset(...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => receiver.Size(...$.stripGenericTypeArgs(args)), Sum: (receiver: any, ...args: any[]) => receiver.Sum(...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => receiver.Write(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({Available: (receiver: any, ...args: any[]) => (crypto.Hash_Available as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), HashFunc: (receiver: any, ...args: any[]) => (crypto.Hash_HashFunc as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), New: (receiver: any, ...args: any[]) => (crypto.Hash_New as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => (crypto.Hash_Size as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (crypto.Hash_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= (/* @__PURE__ */ $.basicType("uint", "crypto.Hash"))
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ([$.methodSignature("Available", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HashFunc", [], [/* @__PURE__ */ $.basicType("uint", "crypto.Hash")]), $.methodSignature("New", [], ["hash.Hash"]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
