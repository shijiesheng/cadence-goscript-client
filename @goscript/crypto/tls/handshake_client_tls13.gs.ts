// Generated file based on handshake_client_tls13.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as hkdf from "@goscript/crypto/hkdf/index.js"

import * as hmac from "@goscript/crypto/hmac/index.js"

import * as tls13 from "@goscript/crypto/internal/fips140/tls13/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"

import * as subtle from "@goscript/crypto/subtle/index.js"

import * as errors from "@goscript/errors/index.js"

import * as hash from "@goscript/hash/index.js"

import * as slices from "@goscript/slices/index.js"

import * as time from "@goscript/time/index.js"

import type * as cipher from "@goscript/crypto/cipher/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as hpke from "@goscript/crypto/hpke/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_alert from "./alert.gs.ts"

import * as __goscript_auth from "./auth.gs.ts"

import * as __goscript_cipher_suites from "./cipher_suites.gs.ts"

import * as __goscript_common from "./common.gs.ts"

import * as __goscript_common_string from "./common_string.gs.ts"

import * as __goscript_conn from "./conn.gs.ts"

import * as __goscript_ech from "./ech.gs.ts"

import * as __goscript_handshake_client from "./handshake_client.gs.ts"

import * as __goscript_handshake_messages from "./handshake_messages.gs.ts"

import * as __goscript_handshake_server from "./handshake_server.gs.ts"

import * as __goscript_handshake_server_tls13 from "./handshake_server_tls13.gs.ts"

import * as __goscript_key_schedule from "./key_schedule.gs.ts"

import * as __goscript_quic from "./quic.gs.ts"

import * as __goscript_ticket from "./ticket.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/index.js"
import "@goscript/crypto/hkdf/index.js"
import "@goscript/crypto/hmac/index.js"
import "@goscript/crypto/internal/fips140/tls13/index.js"
import "@goscript/crypto/rsa/index.js"
import "@goscript/crypto/subtle/index.js"
import "@goscript/errors/index.js"
import "@goscript/hash/index.js"
import "@goscript/slices/index.js"
import "@goscript/time/index.js"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/crypto/hpke/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "./alert.gs.ts"
import "./auth.gs.ts"
import "./cipher_suites.gs.ts"
import "./common.gs.ts"
import "./common_string.gs.ts"
import "./conn.gs.ts"
import "./ech.gs.ts"
import "./handshake_client.gs.ts"
import "./handshake_messages.gs.ts"
import "./handshake_server.gs.ts"
import "./handshake_server_tls13.gs.ts"
import "./key_schedule.gs.ts"
import "./quic.gs.ts"
import "./ticket.gs.ts"

$.registerTypePackagePath("crypto/tls", ["tls.clientHandshakeStateTLS13"])

export class clientHandshakeStateTLS13 {
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

	public get serverHello(): __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null {
		return this._fields.serverHello
	}

	public set serverHello(value: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null) {
		this._fields.serverHello = value
	}

	public get hello(): __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null {
		return this._fields.hello
	}

	public set hello(value: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null) {
		this._fields.hello = value
	}

	public get keyShareKeys(): __goscript_key_schedule.keySharePrivateKeys | $.VarRef<__goscript_key_schedule.keySharePrivateKeys> | null {
		return this._fields.keyShareKeys
	}

	public set keyShareKeys(value: __goscript_key_schedule.keySharePrivateKeys | $.VarRef<__goscript_key_schedule.keySharePrivateKeys> | null) {
		this._fields.keyShareKeys = value
	}

	public get session(): __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null {
		return this._fields.session
	}

	public set session(value: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null) {
		this._fields.session = value
	}

	public get earlySecret(): tls13.EarlySecret | $.VarRef<tls13.EarlySecret> | null {
		return this._fields.earlySecret
	}

	public set earlySecret(value: tls13.EarlySecret | $.VarRef<tls13.EarlySecret> | null) {
		this._fields.earlySecret = value
	}

	public get binderKey(): $.Slice<number> {
		return this._fields.binderKey
	}

	public set binderKey(value: $.Slice<number>) {
		this._fields.binderKey = value
	}

	public get certReq(): __goscript_handshake_messages.certificateRequestMsgTLS13 | $.VarRef<__goscript_handshake_messages.certificateRequestMsgTLS13> | null {
		return this._fields.certReq
	}

	public set certReq(value: __goscript_handshake_messages.certificateRequestMsgTLS13 | $.VarRef<__goscript_handshake_messages.certificateRequestMsgTLS13> | null) {
		this._fields.certReq = value
	}

	public get usingPSK(): boolean {
		return this._fields.usingPSK
	}

	public set usingPSK(value: boolean) {
		this._fields.usingPSK = value
	}

	public get sentDummyCCS(): boolean {
		return this._fields.sentDummyCCS
	}

	public set sentDummyCCS(value: boolean) {
		this._fields.sentDummyCCS = value
	}

	public get suite(): __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null {
		return this._fields.suite
	}

	public set suite(value: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null) {
		this._fields.suite = value
	}

	public get transcript(): hash.Hash | null {
		return this._fields.transcript
	}

	public set transcript(value: hash.Hash | null) {
		this._fields.transcript = value
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

	public get echContext(): __goscript_handshake_client.echClientContext | $.VarRef<__goscript_handshake_client.echClientContext> | null {
		return this._fields.echContext
	}

	public set echContext(value: __goscript_handshake_client.echClientContext | $.VarRef<__goscript_handshake_client.echClientContext> | null) {
		this._fields.echContext = value
	}

	public _fields: {
		c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null
		ctx: context.Context | null
		serverHello: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null
		hello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null
		keyShareKeys: __goscript_key_schedule.keySharePrivateKeys | $.VarRef<__goscript_key_schedule.keySharePrivateKeys> | null
		session: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null
		earlySecret: tls13.EarlySecret | $.VarRef<tls13.EarlySecret> | null
		binderKey: $.Slice<number>
		certReq: __goscript_handshake_messages.certificateRequestMsgTLS13 | $.VarRef<__goscript_handshake_messages.certificateRequestMsgTLS13> | null
		usingPSK: boolean
		sentDummyCCS: boolean
		suite: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null
		transcript: hash.Hash | null
		masterSecret: tls13.MasterSecret | $.VarRef<tls13.MasterSecret> | null
		trafficSecret: $.Slice<number>
		echContext: __goscript_handshake_client.echClientContext | $.VarRef<__goscript_handshake_client.echClientContext> | null
	}

	constructor(init?: Partial<{c?: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null, ctx?: context.Context | null, serverHello?: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null, hello?: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, keyShareKeys?: __goscript_key_schedule.keySharePrivateKeys | $.VarRef<__goscript_key_schedule.keySharePrivateKeys> | null, session?: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null, earlySecret?: tls13.EarlySecret | $.VarRef<tls13.EarlySecret> | null, binderKey?: $.Slice<number>, certReq?: __goscript_handshake_messages.certificateRequestMsgTLS13 | $.VarRef<__goscript_handshake_messages.certificateRequestMsgTLS13> | null, usingPSK?: boolean, sentDummyCCS?: boolean, suite?: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null, transcript?: hash.Hash | null, masterSecret?: tls13.MasterSecret | $.VarRef<tls13.MasterSecret> | null, trafficSecret?: $.Slice<number>, echContext?: __goscript_handshake_client.echClientContext | $.VarRef<__goscript_handshake_client.echClientContext> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			c: init?.c ?? (null! as __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null),
			ctx: init?.ctx ?? (null! as context.Context | null),
			serverHello: init?.serverHello ?? (null! as __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null),
			hello: init?.hello ?? (null! as __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null),
			keyShareKeys: init?.keyShareKeys ?? (null! as __goscript_key_schedule.keySharePrivateKeys | $.VarRef<__goscript_key_schedule.keySharePrivateKeys> | null),
			session: init?.session ?? (null! as __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null),
			earlySecret: init?.earlySecret ?? (null! as tls13.EarlySecret | $.VarRef<tls13.EarlySecret> | null),
			binderKey: init?.binderKey ?? (null! as $.Slice<number>),
			certReq: init?.certReq ?? (null! as __goscript_handshake_messages.certificateRequestMsgTLS13 | $.VarRef<__goscript_handshake_messages.certificateRequestMsgTLS13> | null),
			usingPSK: init?.usingPSK ?? (false as boolean),
			sentDummyCCS: init?.sentDummyCCS ?? (false as boolean),
			suite: init?.suite ?? (null! as __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null),
			transcript: init?.transcript ?? (null! as hash.Hash | null),
			masterSecret: init?.masterSecret ?? (null! as tls13.MasterSecret | $.VarRef<tls13.MasterSecret> | null),
			trafficSecret: init?.trafficSecret ?? (null! as $.Slice<number>),
			echContext: init?.echContext ?? (null! as __goscript_handshake_client.echClientContext | $.VarRef<__goscript_handshake_client.echClientContext> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): clientHandshakeStateTLS13 {
		return new clientHandshakeStateTLS13(this, true)
	}

	public __goscriptAssign(source: clientHandshakeStateTLS13): void {
		const target = this._fields
		const values = source._fields
		target.c = values.c
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.serverHello = values.serverHello
		target.hello = values.hello
		target.keyShareKeys = values.keyShareKeys
		target.session = values.session
		target.earlySecret = values.earlySecret
		target.binderKey = values.binderKey
		target.certReq = values.certReq
		target.usingPSK = values.usingPSK
		target.sentDummyCCS = values.sentDummyCCS
		target.suite = values.suite
		target.transcript = $.assignFieldValue(target.transcript, values.transcript, "hash.Hash")
		target.masterSecret = values.masterSecret
		target.trafficSecret = values.trafficSecret
		target.echContext = values.echContext
	}

	public async checkServerHelloOrHRR(): globalThis.Promise<$.GoError> {
		let hs: clientHandshakeStateTLS13 | $.VarRef<clientHandshakeStateTLS13> | null = this;
		const hs$: clientHandshakeStateTLS13 = hs == null ? $.pointerTarget<clientHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeStateTLS13).c

		if ($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).supportedVersion == 0) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(109) : __goscript_conn.Conn.prototype.sendAlert.call(c, 109))
			return errors.New("tls: server selected TLS 1.3 using the legacy version field")
		}

		if ($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).supportedVersion != 772) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: server selected an invalid version after a HelloRetryRequest")
		}

		if ($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).vers != 771) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: server sent an incorrect legacy version")
		}

		if (((((($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).ocspStapling || $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).ticketSupported) || $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).extendedMasterSecret) || $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).secureRenegotiationSupported) || ($.sliceLen($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).secureRenegotiation) != 0)) || ($.stringLen($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).alpnProtocol) != 0)) || ($.sliceLen($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).scts) != 0)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(110) : __goscript_conn.Conn.prototype.sendAlert.call(c, 110))
			return errors.New("tls: server sent a ServerHello extension forbidden in TLS 1.3")
		}

		if (!bytes.Equal($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeStateTLS13).hello).sessionId, $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).sessionId)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: server did not echo the legacy session ID")
		}

		if ($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).compressionMethod != 0) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(50) : __goscript_conn.Conn.prototype.sendAlert.call(c, 50))
			return errors.New("tls: server sent non-zero legacy TLS compression method")
		}

		let selectedSuite: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null = __goscript_cipher_suites.mutualCipherSuiteTLS13($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeStateTLS13).hello).cipherSuites, $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).cipherSuite)
		if (((hs$ as clientHandshakeStateTLS13).suite != null) && (!$.pointerEqual(selectedSuite, (hs$ as clientHandshakeStateTLS13).suite))) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: server changed cipher suite after a HelloRetryRequest")
		}
		if (selectedSuite == null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: server chose an unconfigured cipher suite")
		}
		;(hs$ as clientHandshakeStateTLS13).suite = selectedSuite
		$.pointerValue<__goscript_conn.Conn>(c).cipherSuite = $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as clientHandshakeStateTLS13).suite).id

		return null
	}

	public async establishHandshakeKeys(): globalThis.Promise<$.GoError> {
		let hs: clientHandshakeStateTLS13 | $.VarRef<clientHandshakeStateTLS13> | null = this;
		const hs$: clientHandshakeStateTLS13 = hs == null ? $.pointerTarget<clientHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		let [ke, err] = __goscript_key_schedule.keyExchangeForCurveID($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).serverShare.group)
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			return err
		}
		let __goscriptTuple0: any = await (ke !== null && (ke as any).__isVarRef !== true && (ke as any).__goValue === undefined ? (ke as Exclude<__goscript_key_schedule.keyExchange, null>) : $.pointerValue<Exclude<__goscript_key_schedule.keyExchange, null>>(ke)).clientSharedSecret((hs$ as clientHandshakeStateTLS13).keyShareKeys, $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).serverShare.data)
		let sharedKey: $.Slice<number> = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: invalid server key share")
		}
		;(c$ as __goscript_conn.Conn).curveID = $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).serverShare.group

		let earlySecret: tls13.EarlySecret | $.VarRef<tls13.EarlySecret> | null = (hs$ as clientHandshakeStateTLS13).earlySecret
		if (!(hs$ as clientHandshakeStateTLS13).usingPSK) {
			earlySecret = await tls13.NewEarlySecret(__goscriptStatic0(), $.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as clientHandshakeStateTLS13).suite).hash), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm"), null)
		}

		let handshakeSecret: tls13.HandshakeSecret | $.VarRef<tls13.HandshakeSecret> | null = await (earlySecret !== null && (earlySecret as any).__isVarRef !== true && (earlySecret as any).__goValue === undefined ? ((earlySecret as any) as tls13.EarlySecret).HandshakeSecret(sharedKey) : tls13.EarlySecret.prototype.HandshakeSecret.call(earlySecret, sharedKey))

		let clientSecret: $.Slice<number> = await (handshakeSecret !== null && (handshakeSecret as any).__isVarRef !== true && (handshakeSecret as any).__goValue === undefined ? ((handshakeSecret as any) as tls13.HandshakeSecret).ClientHandshakeTrafficSecret((hs$ as clientHandshakeStateTLS13).transcript) : tls13.HandshakeSecret.prototype.ClientHandshakeTrafficSecret.call(handshakeSecret, (hs$ as clientHandshakeStateTLS13).transcript))
		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).setWriteTrafficSecret((hs$ as clientHandshakeStateTLS13).suite, 2, clientSecret) : __goscript_conn.Conn.prototype.setWriteTrafficSecret.call(c, (hs$ as clientHandshakeStateTLS13).suite, 2, clientSecret))
		let serverSecret: $.Slice<number> = await (handshakeSecret !== null && (handshakeSecret as any).__isVarRef !== true && (handshakeSecret as any).__goValue === undefined ? ((handshakeSecret as any) as tls13.HandshakeSecret).ServerHandshakeTrafficSecret((hs$ as clientHandshakeStateTLS13).transcript) : tls13.HandshakeSecret.prototype.ServerHandshakeTrafficSecret.call(handshakeSecret, (hs$ as clientHandshakeStateTLS13).transcript))
		{
			let __goscriptShadow0 = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).setReadTrafficSecret((hs$ as clientHandshakeStateTLS13).suite, 2, serverSecret, false) : __goscript_conn.Conn.prototype.setReadTrafficSecret.call(c, (hs$ as clientHandshakeStateTLS13).suite, 2, serverSecret, false))
			if (__goscriptShadow0 != null) {
				return __goscriptShadow0
			}
		}

		if ((c$ as __goscript_conn.Conn).quic != null) {
			void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).quicSetWriteSecret(2, $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as clientHandshakeStateTLS13).suite).id, clientSecret) : __goscript_conn.Conn.prototype.quicSetWriteSecret.call(c, 2, $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as clientHandshakeStateTLS13).suite).id, clientSecret))
			{
				let __goscriptShadow1 = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).quicSetReadSecret(2, $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as clientHandshakeStateTLS13).suite).id, serverSecret) : __goscript_conn.Conn.prototype.quicSetReadSecret.call(c, 2, $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as clientHandshakeStateTLS13).suite).id, serverSecret))
				if (__goscriptShadow1 != null) {
					return __goscriptShadow1
				}
			}
		}

		err = await __goscript_common.Config.prototype.writeKeyLog.call((c$ as __goscript_conn.Conn).config, "CLIENT_HANDSHAKE_TRAFFIC_SECRET", $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeStateTLS13).hello).random, clientSecret)
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			return err
		}
		err = await __goscript_common.Config.prototype.writeKeyLog.call((c$ as __goscript_conn.Conn).config, "SERVER_HANDSHAKE_TRAFFIC_SECRET", $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeStateTLS13).hello).random, serverSecret)
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			return err
		}

		;(hs$ as clientHandshakeStateTLS13).masterSecret = await (handshakeSecret !== null && (handshakeSecret as any).__isVarRef !== true && (handshakeSecret as any).__goValue === undefined ? ((handshakeSecret as any) as tls13.HandshakeSecret).MasterSecret() : tls13.HandshakeSecret.prototype.MasterSecret.call(handshakeSecret))

		return null
	}

	public async handshake(): globalThis.Promise<$.GoError> {
		let hs: clientHandshakeStateTLS13 | $.VarRef<clientHandshakeStateTLS13> | null = this;
		const hs$: clientHandshakeStateTLS13 = hs == null ? $.pointerTarget<clientHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		// The server must not select TLS 1.3 in a renegotiation. See RFC 8446,
		// sections 4.1.2 and 4.1.3.
		if ((c$ as __goscript_conn.Conn).handshakes > 0) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(70) : __goscript_conn.Conn.prototype.sendAlert.call(c, 70))
			return errors.New("tls: server selected TLS 1.3 in a renegotiation")
		}

		// Consistency check on the presence of a keyShare and its parameters.
		if ((((hs$ as clientHandshakeStateTLS13).keyShareKeys == null) || (($.pointerValue<__goscript_key_schedule.keySharePrivateKeys>((hs$ as clientHandshakeStateTLS13).keyShareKeys).ecdhe == null) && ($.pointerValue<__goscript_key_schedule.keySharePrivateKeys>((hs$ as clientHandshakeStateTLS13).keyShareKeys).mlkem == null))) || ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeStateTLS13).hello).keyShares) == 0)) {
			return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
		}

		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeStateTLS13).checkServerHelloOrHRR() : clientHandshakeStateTLS13.prototype.checkServerHelloOrHRR.call(hs))
			if (err != null) {
				return err
			}
		}

		;(hs$ as clientHandshakeStateTLS13).transcript = await crypto.Hash_New($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as clientHandshakeStateTLS13).suite).hash)

		{
			let err = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>((hs$ as clientHandshakeStateTLS13).hello, "*tls.clientHelloMsg", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")), ((hs$ as clientHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (err != null) {
				return err
			}
		}

		if ((hs$ as clientHandshakeStateTLS13).echContext != null) {
			$.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerTranscript = await crypto.Hash_New($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as clientHandshakeStateTLS13).suite).hash)
			{
				let err = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>($.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerHello, "*tls.clientHelloMsg", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")), ($.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerTranscript as __goscript_handshake_messages.transcriptHash | null))
				if (err != null) {
					return err
				}
			}
		}

		if (bytes.Equal($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).random, __goscript_common.helloRetryRequestRandom)) {
			{
				let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeStateTLS13).sendDummyChangeCipherSpec() : clientHandshakeStateTLS13.prototype.sendDummyChangeCipherSpec.call(hs))
				if (err != null) {
					return err
				}
			}
			{
				let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeStateTLS13).processHelloRetryRequest() : clientHandshakeStateTLS13.prototype.processHelloRetryRequest.call(hs))
				if (err != null) {
					return err
				}
			}
		}

		if ((hs$ as clientHandshakeStateTLS13).echContext != null) {
			let confTranscript = await __goscript_handshake_server_tls13.cloneHash($.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerTranscript, $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as clientHandshakeStateTLS13).suite).hash)
			await (confTranscript !== null && (confTranscript as any).__isVarRef !== true && (confTranscript as any).__goValue === undefined ? (confTranscript as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(confTranscript)).Write($.goSlice($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).original, undefined, 30))
			await (confTranscript !== null && (confTranscript as any).__isVarRef !== true && (confTranscript as any).__goValue === undefined ? (confTranscript as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(confTranscript)).Write($.makeSlice<number>(8, undefined, "byte"))
			await (confTranscript !== null && (confTranscript as any).__isVarRef !== true && (confTranscript as any).__goValue === undefined ? (confTranscript as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(confTranscript)).Write($.goSlice($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).original, 38, undefined))
			let h: (() => hash.Hash | null | globalThis.Promise<hash.Hash | null>) | null = $.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as clientHandshakeStateTLS13).suite).hash), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm")
			let __goscriptTuple1: any = await hkdf.Extract(__goscriptStatic0(), h, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>($.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerHello).random, null)
			let prk: $.Slice<number> = __goscriptTuple1[0]
			let err = __goscriptTuple1[1]
			if (err != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
				return err
			}
			let acceptConfirmation: $.Slice<number> = await tls13.ExpandLabel(__goscriptStatic0(), h, prk, "ech accept confirmation", await (confTranscript !== null && (confTranscript as any).__isVarRef !== true && (confTranscript as any).__goValue === undefined ? (confTranscript as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(confTranscript)).Sum(null), 8)
			if (subtle.ConstantTimeCompare(acceptConfirmation, $.goSlice($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).random, $.sliceLen($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).random) - 8, undefined)) == 1) {
				;(hs$ as clientHandshakeStateTLS13).hello = $.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerHello;
				;(c$ as __goscript_conn.Conn).serverName = $.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ServerName;
				;(hs$ as clientHandshakeStateTLS13).transcript = $.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerTranscript;
				;(c$ as __goscript_conn.Conn).echAccepted = true

				if ($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).encryptedClientHello != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(110) : __goscript_conn.Conn.prototype.sendAlert.call(c, 110))
					return errors.New("tls: unexpected encrypted client hello extension in server hello despite ECH being accepted")
				}

				if (($.stringEqual($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeStateTLS13).hello).serverName, "")) && $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).serverNameAck) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(110) : __goscript_conn.Conn.prototype.sendAlert.call(c, 110))
					return errors.New("tls: unexpected server_name extension in server hello")
				}
			} else {
				$.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).echRejected = true
			}
		}

		{
			let err = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>((hs$ as clientHandshakeStateTLS13).serverHello, "*tls.serverHelloMsg", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")), ((hs$ as clientHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (err != null) {
				return err
			}
		}

		;(c$ as __goscript_conn.Conn).buffering = true
		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeStateTLS13).processServerHello() : clientHandshakeStateTLS13.prototype.processServerHello.call(hs))
			if (err != null) {
				return err
			}
		}
		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeStateTLS13).sendDummyChangeCipherSpec() : clientHandshakeStateTLS13.prototype.sendDummyChangeCipherSpec.call(hs))
			if (err != null) {
				return err
			}
		}
		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeStateTLS13).establishHandshakeKeys() : clientHandshakeStateTLS13.prototype.establishHandshakeKeys.call(hs))
			if (err != null) {
				return err
			}
		}
		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeStateTLS13).readServerParameters() : clientHandshakeStateTLS13.prototype.readServerParameters.call(hs))
			if (err != null) {
				return err
			}
		}
		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeStateTLS13).readServerCertificate() : clientHandshakeStateTLS13.prototype.readServerCertificate.call(hs))
			if (err != null) {
				return err
			}
		}
		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeStateTLS13).readServerFinished() : clientHandshakeStateTLS13.prototype.readServerFinished.call(hs))
			if (err != null) {
				return err
			}
		}
		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeStateTLS13).sendClientCertificate() : clientHandshakeStateTLS13.prototype.sendClientCertificate.call(hs))
			if (err != null) {
				return err
			}
		}
		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeStateTLS13).sendClientFinished() : clientHandshakeStateTLS13.prototype.sendClientFinished.call(hs))
			if (err != null) {
				return err
			}
		}
		{
			let [, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).flush() : __goscript_conn.Conn.prototype.flush.call(c))
			if (err != null) {
				return err
			}
		}

		if (((hs$ as clientHandshakeStateTLS13).echContext != null) && $.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).echRejected) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(121) : __goscript_conn.Conn.prototype.sendAlert.call(c, 121))
			return $.interfaceValue<$.GoError>(new __goscript_ech.ECHRejectionError({RetryConfigList: $.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).retryConfigs}), "*tls.ECHRejectionError", /* @__PURE__ */ $.pointerType("tls.ECHRejectionError"))
		}

		void (c$ as __goscript_conn.Conn).isHandshakeComplete.Store(true)

		return null
	}

	public async processHelloRetryRequest(): globalThis.Promise<$.GoError> {
		let hs: clientHandshakeStateTLS13 | $.VarRef<clientHandshakeStateTLS13> | null = this;
		const hs$: clientHandshakeStateTLS13 = hs == null ? $.pointerTarget<clientHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		// The first ClientHello gets double-hashed into the transcript upon a
		// HelloRetryRequest. (The idea is that the server might offload transcript
		// storage to the client in the cookie.) See RFC 8446, Section 4.4.1.
		let chHash: $.Slice<number> = await $.pointerValue<Exclude<hash.Hash, null>>((hs$ as clientHandshakeStateTLS13).transcript).Sum(null)
		void (__goscriptAwait = $.pointerValue<Exclude<hash.Hash, null>>((hs$ as clientHandshakeStateTLS13).transcript).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await $.pointerValue<Exclude<hash.Hash, null>>((hs$ as clientHandshakeStateTLS13).transcript).Write(new Uint8Array([254, 0, 0, $.uint($.sliceLen(chHash), 8)]) as $.Slice<number>)
		await $.pointerValue<Exclude<hash.Hash, null>>((hs$ as clientHandshakeStateTLS13).transcript).Write(chHash)
		{
			let err = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>((hs$ as clientHandshakeStateTLS13).serverHello, "*tls.serverHelloMsg", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")), ((hs$ as clientHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (err != null) {
				return err
			}
		}

		let isInnerHello: boolean = false
		let hello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null = (hs$ as clientHandshakeStateTLS13).hello
		if ((hs$ as clientHandshakeStateTLS13).echContext != null) {
			chHash = await $.pointerValue<Exclude<hash.Hash, null>>($.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerTranscript).Sum(null)
			void (__goscriptAwait = $.pointerValue<Exclude<hash.Hash, null>>($.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerTranscript).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await $.pointerValue<Exclude<hash.Hash, null>>($.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerTranscript).Write(new Uint8Array([254, 0, 0, $.uint($.sliceLen(chHash), 8)]) as $.Slice<number>)
			await $.pointerValue<Exclude<hash.Hash, null>>($.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerTranscript).Write(chHash)

			if ($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).encryptedClientHello != null) {
				if ($.sliceLen($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).encryptedClientHello) != 8) {
					await __goscript_conn.Conn.prototype.sendAlert.call((hs$ as clientHandshakeStateTLS13).c, 50)
					return errors.New("tls: malformed encrypted client hello extension")
				}

				let confTranscript = await __goscript_handshake_server_tls13.cloneHash($.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerTranscript, $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as clientHandshakeStateTLS13).suite).hash)
				let hrrHello: $.Slice<number> = $.makeSlice<number>($.sliceLen($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).original), undefined, "byte")
				$.copy(hrrHello, $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).original)
				hrrHello = bytes.Replace(hrrHello, $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).encryptedClientHello, $.makeSlice<number>(8, undefined, "byte"), 1)
				await (confTranscript !== null && (confTranscript as any).__isVarRef !== true && (confTranscript as any).__goValue === undefined ? (confTranscript as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(confTranscript)).Write(hrrHello)
				let h: (() => hash.Hash | null | globalThis.Promise<hash.Hash | null>) | null = $.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as clientHandshakeStateTLS13).suite).hash), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm")
				let __goscriptTuple2: any = await hkdf.Extract(__goscriptStatic0(), h, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>($.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerHello).random, null)
				let prk: $.Slice<number> = __goscriptTuple2[0]
				let err = __goscriptTuple2[1]
				if (err != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
					return err
				}
				let acceptConfirmation: $.Slice<number> = await tls13.ExpandLabel(__goscriptStatic0(), h, prk, "hrr ech accept confirmation", await (confTranscript !== null && (confTranscript as any).__isVarRef !== true && (confTranscript as any).__goValue === undefined ? (confTranscript as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(confTranscript)).Sum(null), 8)
				if (subtle.ConstantTimeCompare(acceptConfirmation, $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).encryptedClientHello) == 1) {
					hello = $.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerHello;
					;(c$ as __goscript_conn.Conn).serverName = $.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ServerName
					isInnerHello = true;
					;(c$ as __goscript_conn.Conn).echAccepted = true
				}
			}

			{
				let err = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>((hs$ as clientHandshakeStateTLS13).serverHello, "*tls.serverHelloMsg", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")), ($.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerTranscript as __goscript_handshake_messages.transcriptHash | null))
				if (err != null) {
					return err
				}
			}
		} else {
			if ($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).encryptedClientHello != null) {
				// Unsolicited ECH extension should be rejected
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(110) : __goscript_conn.Conn.prototype.sendAlert.call(c, 110))
				return errors.New("tls: unexpected encrypted client hello extension in serverHello")
			}
		}

		// The only HelloRetryRequest extensions we support are key_share and
		// cookie, and clients must abort the handshake if the HRR would not result
		// in any change in the ClientHello.
		if (($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).selectedGroup == 0) && ($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).cookie == null)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: server sent an unnecessary HelloRetryRequest message")
		}

		if ($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).cookie != null) {
			$.pointerValue<__goscript_handshake_messages.clientHelloMsg>(hello).cookie = $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).cookie
		}

		if ($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).serverShare.group != 0) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(50) : __goscript_conn.Conn.prototype.sendAlert.call(c, 50))
			return errors.New("tls: received malformed key_share extension")
		}

		// If the server sent a key_share extension selecting a group, ensure it's
		// a group we advertised but did not send a key share for, and send a key
		// share for it this time.
		{
			let curveID = $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).selectedGroup
			if (curveID != 0) {
				if (!slices.Contains($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(hello).supportedCurves, curveID)) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
					return errors.New("tls: server selected unsupported group")
				}
				if (slices.ContainsFunc($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeStateTLS13).hello).keyShares, $.functionValue((ks: __goscript_common.keyShare): boolean => {
					return ks.group == curveID
				}, ({ kind: $.TypeKind.Function, params: ["tls.keyShare"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
					return errors.New("tls: server sent an unnecessary HelloRetryRequest key_share")
				}
				let [ke, err] = __goscript_key_schedule.keyExchangeForCurveID(curveID)
				if (err != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
					return errors.New("tls: internal error: supportsCurve accepted unimplemented curve")
				}
				let __goscriptTuple3: any = await (ke !== null && (ke as any).__isVarRef !== true && (ke as any).__goValue === undefined ? (ke as Exclude<__goscript_key_schedule.keyExchange, null>) : $.pointerValue<Exclude<__goscript_key_schedule.keyExchange, null>>(ke)).keyShares(__goscript_common.Config.prototype.rand.call((c$ as __goscript_conn.Conn).config));
				;(hs$ as clientHandshakeStateTLS13).keyShareKeys = __goscriptTuple3[0]
				$.pointerValue<__goscript_handshake_messages.clientHelloMsg>(hello).keyShares = __goscriptTuple3[1]
				err = __goscriptTuple3[2]
				if (err != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
					return err
				}
				// Do not send the fallback ECDH key share in a HRR response.
				$.pointerValue<__goscript_handshake_messages.clientHelloMsg>(hello).keyShares = $.goSlice($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(hello).keyShares, undefined, 1)
			}
		}

		if ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(hello).pskIdentities) > 0) {
			let pskSuite: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null = __goscript_cipher_suites.cipherSuiteTLS13ByID($.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeStateTLS13).session).cipherSuite)
			if (pskSuite == null) {
				return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			}
			if ($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>(pskSuite).hash == $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as clientHandshakeStateTLS13).suite).hash) {
				// Update binders and obfuscated_ticket_age.
				let ticketAge = $.markAsStructValue($.cloneStructValue((await __goscript_common.Config.prototype.time.call((c$ as __goscript_conn.Conn).config)))).Sub($.markAsStructValue($.cloneStructValue(time.Unix($.int64($.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeStateTLS13).session).createdAt), 0n))))
				$.arrayIndex($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(hello).pskIdentities!, 0).obfuscatedTicketAge = $.uint((($.uint($.int64Div(ticketAge, 1000000n), 32) + $.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeStateTLS13).session).ageAdd) >>> 0), 32)

				let transcript = await crypto.Hash_New($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as clientHandshakeStateTLS13).suite).hash)
				await (transcript !== null && (transcript as any).__isVarRef !== true && (transcript as any).__goValue === undefined ? (transcript as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(transcript)).Write(new Uint8Array([254, 0, 0, $.uint($.sliceLen(chHash), 8)]) as $.Slice<number>)
				await (transcript !== null && (transcript as any).__isVarRef !== true && (transcript as any).__goValue === undefined ? (transcript as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(transcript)).Write(chHash)
				{
					let err = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>((hs$ as clientHandshakeStateTLS13).serverHello, "*tls.serverHelloMsg", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")), (transcript as __goscript_handshake_messages.transcriptHash | null))
					if (err != null) {
						return err
					}
				}

				{
					let err = await __goscript_handshake_client.computeAndUpdatePSK(hello, (hs$ as clientHandshakeStateTLS13).binderKey, transcript, $.functionValue(((__receiver) => (baseKey: $.Slice<number>, transcript: hash.Hash | null) => __receiver.finishedHash(baseKey, transcript))($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as clientHandshakeStateTLS13).suite)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "hash.Hash"], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo), "crypto/tls.(*cipherSuiteTLS13).finishedHash-fm"))
					if (err != null) {
						return err
					}
				}
			} else {
				// Server selected a cipher suite incompatible with the PSK.
				$.pointerValue<__goscript_handshake_messages.clientHelloMsg>(hello).pskIdentities = null
				$.pointerValue<__goscript_handshake_messages.clientHelloMsg>(hello).pskBinders = null
			}
		}

		if ($.pointerValue<__goscript_handshake_messages.clientHelloMsg>(hello).earlyData) {
			$.pointerValue<__goscript_handshake_messages.clientHelloMsg>(hello).earlyData = false
			void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).quicRejectedEarlyData() : __goscript_conn.Conn.prototype.quicRejectedEarlyData.call(c))
		}

		if (isInnerHello) {
			// Any extensions which have changed in hello, but are mirrored in the
			// outer hello and compressed, need to be copied to the outer hello, so
			// they can be properly decompressed by the server. For now, the only
			// extension which may have changed is keyShares.
			$.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeStateTLS13).hello).keyShares = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>(hello).keyShares
			$.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerHello = hello
			{
				let err = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>($.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerHello, "*tls.clientHelloMsg", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")), ($.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerTranscript as __goscript_handshake_messages.transcriptHash | null))
				if (err != null) {
					return err
				}
			}

			{
				let err = await __goscript_ech.computeAndUpdateOuterECHExtension((hs$ as clientHandshakeStateTLS13).hello, $.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).innerHello, (hs$ as clientHandshakeStateTLS13).echContext, false)
				if (err != null) {
					return err
				}
			}
		} else {
			;(hs$ as clientHandshakeStateTLS13).hello = hello
		}

		{
			let [, err] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as clientHandshakeStateTLS13).c, $.interfaceValue<__goscript_common.handshakeMessage | null>((hs$ as clientHandshakeStateTLS13).hello, "*tls.clientHelloMsg", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")), ((hs$ as clientHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (err != null) {
				return err
			}
		}

		// serverHelloMsg is not included in the transcript
		let [msg, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).readHandshake(null) : __goscript_conn.Conn.prototype.readHandshake.call(c, null))
		if (err != null) {
			return err
		}

		let __goscriptTuple4: any = $.typeAssertTuple<__goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.serverHelloMsg"))
		let serverHello: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
			return __goscript_common.unexpectedMessageError($.interfaceValue(serverHello, "*tls.serverHelloMsg", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")), msg)
		}
		;(hs$ as clientHandshakeStateTLS13).serverHello = serverHello

		{
			let __goscriptShadow2 = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeStateTLS13).checkServerHelloOrHRR() : clientHandshakeStateTLS13.prototype.checkServerHelloOrHRR.call(hs))
			if (__goscriptShadow2 != null) {
				return __goscriptShadow2
			}
		}

		;(c$ as __goscript_conn.Conn).didHRR = true
		return null
	}

	public async processServerHello(): globalThis.Promise<$.GoError> {
		let hs: clientHandshakeStateTLS13 | $.VarRef<clientHandshakeStateTLS13> | null = this;
		const hs$: clientHandshakeStateTLS13 = hs == null ? $.pointerTarget<clientHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		if (bytes.Equal($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).random, __goscript_common.helloRetryRequestRandom)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
			return errors.New("tls: server sent two HelloRetryRequest messages")
		}

		if ($.sliceLen($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).cookie) != 0) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(110) : __goscript_conn.Conn.prototype.sendAlert.call(c, 110))
			return errors.New("tls: server sent a cookie in a normal ServerHello")
		}

		if ($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).selectedGroup != 0) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(50) : __goscript_conn.Conn.prototype.sendAlert.call(c, 50))
			return errors.New("tls: malformed key_share extension")
		}

		if ($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).serverShare.group == 0) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: server did not send a key share")
		}
		if (!slices.ContainsFunc($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeStateTLS13).hello).keyShares, $.functionValue((ks: __goscript_common.keyShare): boolean => {
			return ks.group == $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).serverShare.group
		}, ({ kind: $.TypeKind.Function, params: ["tls.keyShare"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: server selected unsupported group")
		}

		if (!$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).selectedIdentityPresent) {
			return null
		}

		if ($.int($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeStateTLS13).serverHello).selectedIdentity) >= $.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeStateTLS13).hello).pskIdentities)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: server selected an invalid PSK")
		}

		if (($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeStateTLS13).hello).pskIdentities) != 1) || ((hs$ as clientHandshakeStateTLS13).session == null)) {
			return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
		}
		let pskSuite: __goscript_cipher_suites.cipherSuiteTLS13 | $.VarRef<__goscript_cipher_suites.cipherSuiteTLS13> | null = __goscript_cipher_suites.cipherSuiteTLS13ByID($.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeStateTLS13).session).cipherSuite)
		if (pskSuite == null) {
			return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
		}
		if ($.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>(pskSuite).hash != $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as clientHandshakeStateTLS13).suite).hash) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: server selected an invalid PSK and cipher suite pair")
		}

		;(hs$ as clientHandshakeStateTLS13).usingPSK = true;
		;(c$ as __goscript_conn.Conn).didResume = true;
		;(c$ as __goscript_conn.Conn).peerCertificates = $.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeStateTLS13).session).peerCertificates;
		;(c$ as __goscript_conn.Conn).verifiedChains = $.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeStateTLS13).session).verifiedChains;
		;(c$ as __goscript_conn.Conn).ocspResponse = $.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeStateTLS13).session).ocspResponse;
		;(c$ as __goscript_conn.Conn).scts = $.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeStateTLS13).session).scts
		return null
	}

	public async readServerCertificate(): globalThis.Promise<$.GoError> {
		let hs: clientHandshakeStateTLS13 | $.VarRef<clientHandshakeStateTLS13> | null = this;
		const hs$: clientHandshakeStateTLS13 = hs == null ? $.pointerTarget<clientHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		// Either a PSK or a certificate is always used, but not both.
		// See RFC 8446, Section 4.1.1.
		if ((hs$ as clientHandshakeStateTLS13).usingPSK) {
			// Make sure the connection is still being verified whether or not this
			// is a resumption. Resumptions currently don't reverify certificates so
			// they don't call verifyServerCertificate. See Issue 31641.
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

		let [msg, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).readHandshake(((hs$ as clientHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null)) : __goscript_conn.Conn.prototype.readHandshake.call(c, ((hs$ as clientHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null)))
		if (err != null) {
			return err
		}

		let __goscriptTuple5: any = $.typeAssertTuple<__goscript_handshake_messages.certificateRequestMsgTLS13 | $.VarRef<__goscript_handshake_messages.certificateRequestMsgTLS13> | null>(msg, /* @__PURE__ */ $.pointerType("tls.certificateRequestMsgTLS13"))
		let certReq: __goscript_handshake_messages.certificateRequestMsgTLS13 | $.VarRef<__goscript_handshake_messages.certificateRequestMsgTLS13> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		if (ok) {
			;(hs$ as clientHandshakeStateTLS13).certReq = certReq

			let __goscriptTuple6: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).readHandshake(((hs$ as clientHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null)) : __goscript_conn.Conn.prototype.readHandshake.call(c, ((hs$ as clientHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null)))
			msg = __goscriptTuple6[0]
			err = __goscriptTuple6[1]
			if (err != null) {
				return err
			}
		}

		let __goscriptTuple7: any = $.typeAssertTuple<__goscript_handshake_messages.certificateMsgTLS13 | $.VarRef<__goscript_handshake_messages.certificateMsgTLS13> | null>(msg, /* @__PURE__ */ $.pointerType("tls.certificateMsgTLS13"))
		let certMsg: __goscript_handshake_messages.certificateMsgTLS13 | $.VarRef<__goscript_handshake_messages.certificateMsgTLS13> | null = __goscriptTuple7[0]
		ok = __goscriptTuple7[1]
		let certMsg$: __goscript_handshake_messages.certificateMsgTLS13 = certMsg == null ? $.pointerTarget<__goscript_handshake_messages.certificateMsgTLS13>(certMsg) : (certMsg as any).__isVarRef === true ? (certMsg as any).value : (certMsg as any).__goValue === undefined ? (certMsg as any) : $.pointerTarget<__goscript_handshake_messages.certificateMsgTLS13>(certMsg)
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
			return __goscript_common.unexpectedMessageError($.interfaceValue(certMsg, "*tls.certificateMsgTLS13", /* @__PURE__ */ $.pointerType("tls.certificateMsgTLS13")), msg)
		}
		if ($.sliceLen((certMsg$ as __goscript_handshake_messages.certificateMsgTLS13).certificate.Certificate) == 0) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(50) : __goscript_conn.Conn.prototype.sendAlert.call(c, 50))
			return errors.New("tls: received empty certificates message")
		}

		;(c$ as __goscript_conn.Conn).scts = (certMsg$ as __goscript_handshake_messages.certificateMsgTLS13).certificate.SignedCertificateTimestamps;
		;(c$ as __goscript_conn.Conn).ocspResponse = (certMsg$ as __goscript_handshake_messages.certificateMsgTLS13).certificate.OCSPStaple

		{
			let __goscriptShadow3 = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).verifyServerCertificate((certMsg$ as __goscript_handshake_messages.certificateMsgTLS13).certificate.Certificate) : __goscript_conn.Conn.prototype.verifyServerCertificate.call(c, (certMsg$ as __goscript_handshake_messages.certificateMsgTLS13).certificate.Certificate))
			if (__goscriptShadow3 != null) {
				return __goscriptShadow3
			}
		}

		// certificateVerifyMsg is included in the transcript, but not until
		// after we verify the handshake signature, since the state before
		// this message was sent is used.
		let __goscriptTuple8: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).readHandshake(null) : __goscript_conn.Conn.prototype.readHandshake.call(c, null))
		msg = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return err
		}

		let __goscriptTuple9: any = $.typeAssertTuple<__goscript_handshake_messages.certificateVerifyMsg | $.VarRef<__goscript_handshake_messages.certificateVerifyMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.certificateVerifyMsg"))
		let certVerify: __goscript_handshake_messages.certificateVerifyMsg | $.VarRef<__goscript_handshake_messages.certificateVerifyMsg> | null = __goscriptTuple9[0]
		ok = __goscriptTuple9[1]
		let certVerify$: __goscript_handshake_messages.certificateVerifyMsg = certVerify == null ? $.pointerTarget<__goscript_handshake_messages.certificateVerifyMsg>(certVerify) : (certVerify as any).__isVarRef === true ? (certVerify as any).value : (certVerify as any).__goValue === undefined ? (certVerify as any) : $.pointerTarget<__goscript_handshake_messages.certificateVerifyMsg>(certVerify)
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
			return __goscript_common.unexpectedMessageError($.interfaceValue(certVerify, "*tls.certificateVerifyMsg", /* @__PURE__ */ $.pointerType("tls.certificateVerifyMsg")), msg)
		}

		// See RFC 8446, Section 4.4.3.
		// We don't use hs.hello.supportedSignatureAlgorithms because it might
		// include PKCS#1 v1.5 and SHA-1 if the ClientHello also supported TLS 1.2.
		if (!__goscript_common.isSupportedSignatureAlgorithm((certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signatureAlgorithm, __goscript_common.supportedSignatureAlgorithms((c$ as __goscript_conn.Conn).vers, (c$ as __goscript_conn.Conn).vers)) || !__goscript_common.isSupportedSignatureAlgorithm((certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signatureAlgorithm, await __goscript_auth.signatureSchemesForPublicKey((c$ as __goscript_conn.Conn).vers, ($.pointerValue<x509.Certificate>($.arrayIndex((c$ as __goscript_conn.Conn).peerCertificates!, 0)).PublicKey as crypto.PublicKey | null)))) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: certificate used with invalid signature algorithm")
		}
		let __goscriptTuple10: any = __goscript_auth.typeAndHashFromSignatureScheme((certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signatureAlgorithm)
		let sigType = __goscriptTuple10[0]
		let sigHash = __goscriptTuple10[1]
		err = __goscriptTuple10[2]
		if (err != null) {
			return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
		}
		if ((sigType == 225) || (sigHash == 3)) {
			return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
		}
		let signed: $.Slice<number> = await __goscript_auth.signedMessage("TLS 1.3, server CertificateVerify\x00", (hs$ as clientHandshakeStateTLS13).transcript)
		{
			let __goscriptShadow4 = await __goscript_auth.verifyHandshakeSignature(sigType, ($.pointerValue<x509.Certificate>($.arrayIndex((c$ as __goscript_conn.Conn).peerCertificates!, 0)).PublicKey as crypto.PublicKey | null), sigHash, signed, (certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signature)
			if (__goscriptShadow4 != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(51) : __goscript_conn.Conn.prototype.sendAlert.call(c, 51))
				return errors.New($.concatString("tls: invalid signature by the server certificate: ", (__goscriptAwait = (__goscriptShadow4 !== null && (__goscriptShadow4 as any).__isVarRef !== true && (__goscriptShadow4 as any).__goValue === undefined ? (__goscriptShadow4 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow4)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
			}
		}
		;(c$ as __goscript_conn.Conn).peerSigAlg = (certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signatureAlgorithm

		{
			let __goscriptShadow5 = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>(certVerify, "*tls.certificateVerifyMsg", /* @__PURE__ */ $.pointerType("tls.certificateVerifyMsg")), ((hs$ as clientHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (__goscriptShadow5 != null) {
				return __goscriptShadow5
			}
		}

		return null
	}

	public async readServerFinished(): globalThis.Promise<$.GoError> {
		let hs: clientHandshakeStateTLS13 | $.VarRef<clientHandshakeStateTLS13> | null = this;
		const hs$: clientHandshakeStateTLS13 = hs == null ? $.pointerTarget<clientHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		// finishedMsg is included in the transcript, but not until after we
		// check the client version, since the state before this message was
		// sent is used during verification.
		let [msg, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).readHandshake(null) : __goscript_conn.Conn.prototype.readHandshake.call(c, null))
		if (err != null) {
			return err
		}

		let __goscriptTuple11: any = $.typeAssertTuple<__goscript_handshake_messages.finishedMsg | $.VarRef<__goscript_handshake_messages.finishedMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.finishedMsg"))
		let finished: __goscript_handshake_messages.finishedMsg | $.VarRef<__goscript_handshake_messages.finishedMsg> | null = __goscriptTuple11[0]
		let ok = __goscriptTuple11[1]
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
			return __goscript_common.unexpectedMessageError($.interfaceValue(finished, "*tls.finishedMsg", /* @__PURE__ */ $.pointerType("tls.finishedMsg")), msg)
		}

		let expectedMAC: $.Slice<number> = await __goscript_cipher_suites.cipherSuiteTLS13.prototype.finishedHash.call((hs$ as clientHandshakeStateTLS13).suite, (c$ as __goscript_conn.Conn)._in.trafficSecret, (hs$ as clientHandshakeStateTLS13).transcript)
		if (!hmac.Equal(expectedMAC, $.pointerValue<__goscript_handshake_messages.finishedMsg>(finished).verifyData)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(51) : __goscript_conn.Conn.prototype.sendAlert.call(c, 51))
			return errors.New("tls: invalid server finished hash")
		}

		{
			let __goscriptShadow6 = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>(finished, "*tls.finishedMsg", /* @__PURE__ */ $.pointerType("tls.finishedMsg")), ((hs$ as clientHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (__goscriptShadow6 != null) {
				return __goscriptShadow6
			}
		}

		// Derive secrets that take context through the server Finished.

		;(hs$ as clientHandshakeStateTLS13).trafficSecret = await tls13.MasterSecret.prototype.ClientApplicationTrafficSecret.call((hs$ as clientHandshakeStateTLS13).masterSecret, (hs$ as clientHandshakeStateTLS13).transcript)
		let serverSecret: $.Slice<number> = await tls13.MasterSecret.prototype.ServerApplicationTrafficSecret.call((hs$ as clientHandshakeStateTLS13).masterSecret, (hs$ as clientHandshakeStateTLS13).transcript)
		{
			let __goscriptShadow7 = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).setReadTrafficSecret((hs$ as clientHandshakeStateTLS13).suite, 3, serverSecret, false) : __goscript_conn.Conn.prototype.setReadTrafficSecret.call(c, (hs$ as clientHandshakeStateTLS13).suite, 3, serverSecret, false))
			if (__goscriptShadow7 != null) {
				return __goscriptShadow7
			}
		}

		err = await __goscript_common.Config.prototype.writeKeyLog.call((c$ as __goscript_conn.Conn).config, "CLIENT_TRAFFIC_SECRET_0", $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeStateTLS13).hello).random, (hs$ as clientHandshakeStateTLS13).trafficSecret)
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			return err
		}
		err = await __goscript_common.Config.prototype.writeKeyLog.call((c$ as __goscript_conn.Conn).config, "SERVER_TRAFFIC_SECRET_0", $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeStateTLS13).hello).random, serverSecret)
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			return err
		}

		;(c$ as __goscript_conn.Conn).ekm = await __goscript_cipher_suites.cipherSuiteTLS13.prototype.exportKeyingMaterial.call((hs$ as clientHandshakeStateTLS13).suite, (hs$ as clientHandshakeStateTLS13).masterSecret, (hs$ as clientHandshakeStateTLS13).transcript)

		return null
	}

	public async readServerParameters(): globalThis.Promise<$.GoError> {
		let hs: clientHandshakeStateTLS13 | $.VarRef<clientHandshakeStateTLS13> | null = this;
		const hs$: clientHandshakeStateTLS13 = hs == null ? $.pointerTarget<clientHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		let [msg, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).readHandshake(((hs$ as clientHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null)) : __goscript_conn.Conn.prototype.readHandshake.call(c, ((hs$ as clientHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null)))
		if (err != null) {
			return err
		}

		let __goscriptTuple12: any = $.typeAssertTuple<__goscript_handshake_messages.encryptedExtensionsMsg | $.VarRef<__goscript_handshake_messages.encryptedExtensionsMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.encryptedExtensionsMsg"))
		let encryptedExtensions: __goscript_handshake_messages.encryptedExtensionsMsg | $.VarRef<__goscript_handshake_messages.encryptedExtensionsMsg> | null = __goscriptTuple12[0]
		let ok = __goscriptTuple12[1]
		let encryptedExtensions$: __goscript_handshake_messages.encryptedExtensionsMsg = encryptedExtensions == null ? $.pointerTarget<__goscript_handshake_messages.encryptedExtensionsMsg>(encryptedExtensions) : (encryptedExtensions as any).__isVarRef === true ? (encryptedExtensions as any).value : (encryptedExtensions as any).__goValue === undefined ? (encryptedExtensions as any) : $.pointerTarget<__goscript_handshake_messages.encryptedExtensionsMsg>(encryptedExtensions)
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
			return __goscript_common.unexpectedMessageError($.interfaceValue(encryptedExtensions, "*tls.encryptedExtensionsMsg", /* @__PURE__ */ $.pointerType("tls.encryptedExtensionsMsg")), msg)
		}

		{
			let __goscriptShadow8 = __goscript_handshake_client.checkALPN($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeStateTLS13).hello).alpnProtocols, (encryptedExtensions$ as __goscript_handshake_messages.encryptedExtensionsMsg).alpnProtocol, (c$ as __goscript_conn.Conn).quic != null)
			if (__goscriptShadow8 != null) {
				// RFC 8446 specifies that no_application_protocol is sent by servers, but
				// does not specify how clients handle the selection of an incompatible protocol.
				// RFC 9001 Section 8.1 specifies that QUIC clients send no_application_protocol
				// in this case. Always sending no_application_protocol seems reasonable.
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(120) : __goscript_conn.Conn.prototype.sendAlert.call(c, 120))
				return __goscriptShadow8
			}
		}
		;(c$ as __goscript_conn.Conn).clientProtocol = (encryptedExtensions$ as __goscript_handshake_messages.encryptedExtensionsMsg).alpnProtocol

		if ((c$ as __goscript_conn.Conn).quic != null) {
			if ((encryptedExtensions$ as __goscript_handshake_messages.encryptedExtensionsMsg).quicTransportParameters == null) {
				// RFC 9001 Section 8.2.
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(109) : __goscript_conn.Conn.prototype.sendAlert.call(c, 109))
				return errors.New("tls: server did not send a quic_transport_parameters extension")
			}
			void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).quicSetTransportParameters((encryptedExtensions$ as __goscript_handshake_messages.encryptedExtensionsMsg).quicTransportParameters) : __goscript_conn.Conn.prototype.quicSetTransportParameters.call(c, (encryptedExtensions$ as __goscript_handshake_messages.encryptedExtensionsMsg).quicTransportParameters))
		} else {
			if ((encryptedExtensions$ as __goscript_handshake_messages.encryptedExtensionsMsg).quicTransportParameters != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(110) : __goscript_conn.Conn.prototype.sendAlert.call(c, 110))
				return errors.New("tls: server sent an unexpected quic_transport_parameters extension")
			}
		}

		if (!$.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeStateTLS13).hello).earlyData && (encryptedExtensions$ as __goscript_handshake_messages.encryptedExtensionsMsg).earlyData) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(110) : __goscript_conn.Conn.prototype.sendAlert.call(c, 110))
			return errors.New("tls: server sent an unexpected early_data extension")
		}
		if ($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeStateTLS13).hello).earlyData && !(encryptedExtensions$ as __goscript_handshake_messages.encryptedExtensionsMsg).earlyData) {
			void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).quicRejectedEarlyData() : __goscript_conn.Conn.prototype.quicRejectedEarlyData.call(c))
		}
		if ((encryptedExtensions$ as __goscript_handshake_messages.encryptedExtensionsMsg).earlyData) {
			if ($.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeStateTLS13).session).cipherSuite != (c$ as __goscript_conn.Conn).cipherSuite) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
				return errors.New("tls: server accepted 0-RTT with the wrong cipher suite")
			}
			if (!$.stringEqual($.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeStateTLS13).session).alpnProtocol, (c$ as __goscript_conn.Conn).clientProtocol)) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
				return errors.New("tls: server accepted 0-RTT with the wrong ALPN")
			}
		}
		if ((hs$ as clientHandshakeStateTLS13).echContext != null) {
			if ($.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).echRejected) {
				$.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).retryConfigs = (encryptedExtensions$ as __goscript_handshake_messages.encryptedExtensionsMsg).echRetryConfigs
			} else {
				if ((encryptedExtensions$ as __goscript_handshake_messages.encryptedExtensionsMsg).echRetryConfigs != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(110) : __goscript_conn.Conn.prototype.sendAlert.call(c, 110))
					return errors.New("tls: server sent encrypted client hello retry configs after accepting encrypted client hello")
				}
			}
		}

		return null
	}

	public async sendClientCertificate(): globalThis.Promise<$.GoError> {
		let hs: clientHandshakeStateTLS13 | $.VarRef<clientHandshakeStateTLS13> | null = this;
		const hs$: clientHandshakeStateTLS13 = hs == null ? $.pointerTarget<clientHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		if ((hs$ as clientHandshakeStateTLS13).certReq == null) {
			return null
		}

		if (((hs$ as clientHandshakeStateTLS13).echContext != null) && $.pointerValue<__goscript_handshake_client.echClientContext>((hs$ as clientHandshakeStateTLS13).echContext).echRejected) {
			{
				let [, err] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as clientHandshakeStateTLS13).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(new __goscript_handshake_messages.certificateMsgTLS13(), "*tls.certificateMsgTLS13", /* @__PURE__ */ $.pointerType("tls.certificateMsgTLS13")), ((hs$ as clientHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
				if (err != null) {
					return err
				}
			}
			return null
		}

		let __goscriptTuple13: any = await __goscript_conn.Conn.prototype.getClientCertificate.call(c, new __goscript_common.CertificateRequestInfo({AcceptableCAs: $.pointerValue<__goscript_handshake_messages.certificateRequestMsgTLS13>((hs$ as clientHandshakeStateTLS13).certReq).certificateAuthorities, SignatureSchemes: $.pointerValue<__goscript_handshake_messages.certificateRequestMsgTLS13>((hs$ as clientHandshakeStateTLS13).certReq).supportedSignatureAlgorithms, Version: (c$ as __goscript_conn.Conn).vers, ctx: (hs$ as clientHandshakeStateTLS13).ctx}))
		let cert: __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null = __goscriptTuple13[0]
		let err = __goscriptTuple13[1]
		let cert$: __goscript_common.Certificate = cert == null ? $.pointerTarget<__goscript_common.Certificate>(cert) : (cert as any).__isVarRef === true ? (cert as any).value : (cert as any).__goValue === undefined ? (cert as any) : $.pointerTarget<__goscript_common.Certificate>(cert)
		if (err != null) {
			return err
		}

		if (cert != null) {
			$.pointerValue<__goscript_conn.Conn>((hs$ as clientHandshakeStateTLS13).c).localCertificate = (cert$ as __goscript_common.Certificate).Certificate
		}

		let certMsg: __goscript_handshake_messages.certificateMsgTLS13 | $.VarRef<__goscript_handshake_messages.certificateMsgTLS13> | null = new __goscript_handshake_messages.certificateMsgTLS13()
		let certMsg$: __goscript_handshake_messages.certificateMsgTLS13 = certMsg == null ? $.pointerTarget<__goscript_handshake_messages.certificateMsgTLS13>(certMsg) : (certMsg as any).__isVarRef === true ? (certMsg as any).value : (certMsg as any).__goValue === undefined ? (certMsg as any) : $.pointerTarget<__goscript_handshake_messages.certificateMsgTLS13>(certMsg)

		$.assignStruct((certMsg$ as __goscript_handshake_messages.certificateMsgTLS13).certificate, (cert$ as __goscript_common.Certificate));
		;(certMsg$ as __goscript_handshake_messages.certificateMsgTLS13).scts = $.pointerValue<__goscript_handshake_messages.certificateRequestMsgTLS13>((hs$ as clientHandshakeStateTLS13).certReq).scts && ($.sliceLen((cert$ as __goscript_common.Certificate).SignedCertificateTimestamps) > 0);
		;(certMsg$ as __goscript_handshake_messages.certificateMsgTLS13).ocspStapling = $.pointerValue<__goscript_handshake_messages.certificateRequestMsgTLS13>((hs$ as clientHandshakeStateTLS13).certReq).ocspStapling && ($.sliceLen((cert$ as __goscript_common.Certificate).OCSPStaple) > 0)

		{
			let [, __goscriptShadow9] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as clientHandshakeStateTLS13).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(certMsg, "*tls.certificateMsgTLS13", /* @__PURE__ */ $.pointerType("tls.certificateMsgTLS13")), ((hs$ as clientHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (__goscriptShadow9 != null) {
				return __goscriptShadow9
			}
		}

		// If we sent an empty certificate message, skip the CertificateVerify.
		if ($.sliceLen((cert$ as __goscript_common.Certificate).Certificate) == 0) {
			return null
		}

		let certVerifyMsg: __goscript_handshake_messages.certificateVerifyMsg | $.VarRef<__goscript_handshake_messages.certificateVerifyMsg> | null = new __goscript_handshake_messages.certificateVerifyMsg()
		let certVerifyMsg$: __goscript_handshake_messages.certificateVerifyMsg = certVerifyMsg == null ? $.pointerTarget<__goscript_handshake_messages.certificateVerifyMsg>(certVerifyMsg) : (certVerifyMsg as any).__isVarRef === true ? (certVerifyMsg as any).value : (certVerifyMsg as any).__goValue === undefined ? (certVerifyMsg as any) : $.pointerTarget<__goscript_handshake_messages.certificateVerifyMsg>(certVerifyMsg);
		;(certVerifyMsg$ as __goscript_handshake_messages.certificateVerifyMsg).hasSignatureAlgorithm = true

		let __goscriptTuple14: any = await __goscript_auth.selectSignatureScheme((c$ as __goscript_conn.Conn).vers, cert, $.pointerValue<__goscript_handshake_messages.certificateRequestMsgTLS13>((hs$ as clientHandshakeStateTLS13).certReq).supportedSignatureAlgorithms);
		;(certVerifyMsg$ as __goscript_handshake_messages.certificateVerifyMsg).signatureAlgorithm = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		if (err != null) {
			// getClientCertificate returned a certificate incompatible with the
			// CertificateRequestInfo supported signature algorithms.
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
			return err
		}

		let __goscriptTuple15: any = __goscript_auth.typeAndHashFromSignatureScheme((certVerifyMsg$ as __goscript_handshake_messages.certificateVerifyMsg).signatureAlgorithm)
		let sigType = __goscriptTuple15[0]
		let sigHash = __goscriptTuple15[1]
		err = __goscriptTuple15[2]
		if (err != null) {
			return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
		}

		let signed: $.Slice<number> = await __goscript_auth.signedMessage("TLS 1.3, client CertificateVerify\x00", (hs$ as clientHandshakeStateTLS13).transcript)
		let signOpts = $.namedValueInterfaceValue<crypto.SignerOpts | null>(sigHash, "crypto.Hash", __goscriptStatic1(), __goscriptStatic2(), __goscriptStatic3())
		if (sigType == 226) {
			signOpts = $.interfaceValue<crypto.SignerOpts | null>(new rsa.PSSOptions({SaltLength: -1, Hash: sigHash}), "*rsa.PSSOptions", /* @__PURE__ */ $.pointerType("rsa.PSSOptions"))
		}
		let __goscriptTuple16: any = await crypto.SignMessage($.mustTypeAssert<crypto.Signer | null>((cert$ as __goscript_common.Certificate).PrivateKey, "crypto.Signer"), __goscript_common.Config.prototype.rand.call((c$ as __goscript_conn.Conn).config), signed, signOpts)
		let sig: $.Slice<number> = __goscriptTuple16[0]
		err = __goscriptTuple16[1]
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			return errors.New($.concatString("tls: failed to sign handshake: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		}
		;(certVerifyMsg$ as __goscript_handshake_messages.certificateVerifyMsg).signature = sig

		{
			let [, __goscriptShadow10] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as clientHandshakeStateTLS13).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(certVerifyMsg, "*tls.certificateVerifyMsg", /* @__PURE__ */ $.pointerType("tls.certificateVerifyMsg")), ((hs$ as clientHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (__goscriptShadow10 != null) {
				return __goscriptShadow10
			}
		}

		return null
	}

	public async sendClientFinished(): globalThis.Promise<$.GoError> {
		const hs: clientHandshakeStateTLS13 | $.VarRef<clientHandshakeStateTLS13> | null = this;
		const hs$: clientHandshakeStateTLS13 = hs == null ? $.pointerTarget<clientHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeStateTLS13>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeStateTLS13).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		let finished: __goscript_handshake_messages.finishedMsg | $.VarRef<__goscript_handshake_messages.finishedMsg> | null = (await (async () => { const __goscriptLiteralField0 = await __goscript_cipher_suites.cipherSuiteTLS13.prototype.finishedHash.call((hs$ as clientHandshakeStateTLS13).suite, (c$ as __goscript_conn.Conn).out.trafficSecret, (hs$ as clientHandshakeStateTLS13).transcript); return new __goscript_handshake_messages.finishedMsg({verifyData: __goscriptLiteralField0}) })())

		{
			let [, err] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as clientHandshakeStateTLS13).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(finished, "*tls.finishedMsg", /* @__PURE__ */ $.pointerType("tls.finishedMsg")), ((hs$ as clientHandshakeStateTLS13).transcript as __goscript_handshake_messages.transcriptHash | null))
			if (err != null) {
				return err
			}
		}

		await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).setWriteTrafficSecret((hs$ as clientHandshakeStateTLS13).suite, 3, (hs$ as clientHandshakeStateTLS13).trafficSecret) : __goscript_conn.Conn.prototype.setWriteTrafficSecret.call(c, (hs$ as clientHandshakeStateTLS13).suite, 3, (hs$ as clientHandshakeStateTLS13).trafficSecret))

		if (!$.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).SessionTicketsDisabled && ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ClientSessionCache != null)) {
			;(c$ as __goscript_conn.Conn).resumptionSecret = await tls13.MasterSecret.prototype.ResumptionMasterSecret.call((hs$ as clientHandshakeStateTLS13).masterSecret, (hs$ as clientHandshakeStateTLS13).transcript)
		}

		if ((c$ as __goscript_conn.Conn).quic != null) {
			__goscript_conn.Conn.prototype.quicSetWriteSecret.call(c, 3, $.pointerValue<__goscript_cipher_suites.cipherSuiteTLS13>((hs$ as clientHandshakeStateTLS13).suite).id, (hs$ as clientHandshakeStateTLS13).trafficSecret)
		}

		return null
	}

	public async sendDummyChangeCipherSpec(): globalThis.Promise<$.GoError> {
		let hs: clientHandshakeStateTLS13 | $.VarRef<clientHandshakeStateTLS13> | null = this;
		const hs$: clientHandshakeStateTLS13 = hs == null ? $.pointerTarget<clientHandshakeStateTLS13>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeStateTLS13>(hs)
		if ($.pointerValue<__goscript_conn.Conn>((hs$ as clientHandshakeStateTLS13).c).quic != null) {
			return null
		}
		if ((hs$ as clientHandshakeStateTLS13).sentDummyCCS) {
			return null
		}
		;(hs$ as clientHandshakeStateTLS13).sentDummyCCS = true

		return __goscript_conn.Conn.prototype.writeChangeCipherRecord.call((hs$ as clientHandshakeStateTLS13).c)
	}

	static __typeInfo = $.registerStructType(
		"tls.clientHandshakeStateTLS13",
		() => new clientHandshakeStateTLS13(),
		() => [$.methodSignature("checkServerHelloOrHRR", [], ["error"], true), $.methodSignature("establishHandshakeKeys", [], ["error"], true), $.methodSignature("handshake", [], ["error"], true), $.methodSignature("processHelloRetryRequest", [], ["error"], true), $.methodSignature("processServerHello", [], ["error"], true), $.methodSignature("readServerCertificate", [], ["error"], true), $.methodSignature("readServerFinished", [], ["error"], true), $.methodSignature("readServerParameters", [], ["error"], true), $.methodSignature("sendClientCertificate", [], ["error"], true), $.methodSignature("sendClientFinished", [], ["error"], true), $.methodSignature("sendDummyChangeCipherSpec", [], ["error"], true)],
		clientHandshakeStateTLS13,
		() => [/* @__PURE__ */ $.structField("c", /* @__PURE__ */ $.pointerType("tls.Conn"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [1], 8, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("serverHello", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg"), [2], 24, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("hello", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg"), [3], 32, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("keyShareKeys", /* @__PURE__ */ $.pointerType("tls.keySharePrivateKeys"), [4], 40, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("session", /* @__PURE__ */ $.pointerType("tls.SessionState"), [5], 48, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("earlySecret", /* @__PURE__ */ $.pointerType("tls13.EarlySecret"), [6], 56, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("binderKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [7], 64, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("certReq", /* @__PURE__ */ $.pointerType("tls.certificateRequestMsgTLS13"), [8], 88, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("usingPSK", /* @__PURE__ */ $.basicType("bool"), [9], 96, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("sentDummyCCS", /* @__PURE__ */ $.basicType("bool"), [10], 97, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("suite", /* @__PURE__ */ $.pointerType("tls.cipherSuiteTLS13"), [11], 104, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("transcript", "hash.Hash", [12], 112, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("masterSecret", /* @__PURE__ */ $.pointerType("tls13.MasterSecret"), [13], 128, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("trafficSecret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [14], 136, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("echContext", /* @__PURE__ */ $.pointerType("tls.echClientContext"), [15], 160, false, { pkgPath: "crypto/tls" })]
	)
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
