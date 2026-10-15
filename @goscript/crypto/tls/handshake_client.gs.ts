// Generated file based on handshake_client.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as ecdsa from "@goscript/crypto/ecdsa/index.js"

import * as ed25519 from "@goscript/crypto/ed25519/index.js"

import * as hpke from "@goscript/crypto/hpke/index.js"

import * as tls13 from "@goscript/crypto/internal/fips140/tls13/index.js"

import * as mldsa from "@goscript/crypto/mldsa/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"

import * as subtle from "@goscript/crypto/subtle/index.js"

import * as fips140tls from "@goscript/crypto/tls/internal/fips140tls/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as hash from "@goscript/hash/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import type * as cipher from "@goscript/crypto/cipher/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as big from "@goscript/math/big/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_alert from "./alert.gs.ts"

import * as __goscript_auth from "./auth.gs.ts"

import * as __goscript_cache from "./cache.gs.ts"

import * as __goscript_cipher_suites from "./cipher_suites.gs.ts"

import * as __goscript_common from "./common.gs.ts"

import * as __goscript_common_string from "./common_string.gs.ts"

import * as __goscript_conn from "./conn.gs.ts"

import * as __goscript_defaults from "./defaults.gs.ts"

import * as __goscript_defaults_fips140 from "./defaults_fips140.gs.ts"

import * as __goscript_ech from "./ech.gs.ts"

import * as __goscript_handshake_client_tls13 from "./handshake_client_tls13.gs.ts"

import * as __goscript_handshake_messages from "./handshake_messages.gs.ts"

import * as __goscript_handshake_server from "./handshake_server.gs.ts"

import * as __goscript_handshake_server_tls13 from "./handshake_server_tls13.gs.ts"

import * as __goscript_key_agreement from "./key_agreement.gs.ts"

import * as __goscript_key_schedule from "./key_schedule.gs.ts"

import * as __goscript_prf from "./prf.gs.ts"

import * as __goscript_quic from "./quic.gs.ts"

import * as __goscript_ticket from "./ticket.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/index.js"
import "@goscript/crypto/ecdsa/index.js"
import "@goscript/crypto/ed25519/index.js"
import "@goscript/crypto/hpke/index.js"
import "@goscript/crypto/internal/fips140/tls13/index.js"
import "@goscript/crypto/mldsa/index.js"
import "@goscript/crypto/rsa/index.js"
import "@goscript/crypto/subtle/index.js"
import "@goscript/crypto/tls/internal/fips140tls/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/hash/index.js"
import "@goscript/internal/godebug/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/slices/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/math/big/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "./alert.gs.ts"
import "./auth.gs.ts"
import "./cache.gs.ts"
import "./cipher_suites.gs.ts"
import "./common.gs.ts"
import "./common_string.gs.ts"
import "./conn.gs.ts"
import "./defaults.gs.ts"
import "./defaults_fips140.gs.ts"
import "./ech.gs.ts"
import "./handshake_client_tls13.gs.ts"
import "./handshake_messages.gs.ts"
import "./handshake_server.gs.ts"
import "./handshake_server_tls13.gs.ts"
import "./key_agreement.gs.ts"
import "./key_schedule.gs.ts"
import "./prf.gs.ts"
import "./quic.gs.ts"
import "./ticket.gs.ts"

$.registerTypePackagePath("crypto/tls", ["tls.clientHandshakeState", "tls.echClientContext"])

export class clientHandshakeState {
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

	public get suite(): __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null {
		return this._fields.suite
	}

	public set suite(value: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null) {
		this._fields.suite = value
	}

	public get finishedHash(): __goscript_prf.finishedHash {
		return this._fields.finishedHash
	}

	public set finishedHash(value: __goscript_prf.finishedHash) {
		this._fields.finishedHash = value
	}

	public get masterSecret(): $.Slice<number> {
		return this._fields.masterSecret
	}

	public set masterSecret(value: $.Slice<number>) {
		this._fields.masterSecret = value
	}

	public get session(): __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null {
		return this._fields.session
	}

	public set session(value: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null) {
		this._fields.session = value
	}

	public get ticket(): $.Slice<number> {
		return this._fields.ticket
	}

	public set ticket(value: $.Slice<number>) {
		this._fields.ticket = value
	}

	public _fields: {
		c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null
		ctx: context.Context | null
		serverHello: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null
		hello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null
		suite: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null
		finishedHash: __goscript_prf.finishedHash
		masterSecret: $.Slice<number>
		session: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null
		ticket: $.Slice<number>
	}

	constructor(init?: Partial<{c?: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null, ctx?: context.Context | null, serverHello?: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null, hello?: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, suite?: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null, finishedHash?: __goscript_prf.finishedHash, masterSecret?: $.Slice<number>, session?: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null, ticket?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			c: init?.c ?? (null! as __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null),
			ctx: init?.ctx ?? (null! as context.Context | null),
			serverHello: init?.serverHello ?? (null! as __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null),
			hello: init?.hello ?? (null! as __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null),
			suite: init?.suite ?? (null! as __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null),
			finishedHash: init?.finishedHash ? init.finishedHash.clone() : new __goscript_prf.finishedHash(undefined, true),
			masterSecret: init?.masterSecret ?? (null! as $.Slice<number>),
			session: init?.session ?? (null! as __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null),
			ticket: init?.ticket ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): clientHandshakeState {
		return new clientHandshakeState(this, true)
	}

	public __goscriptAssign(source: clientHandshakeState): void {
		const target = this._fields
		const values = source._fields
		target.c = values.c
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.serverHello = values.serverHello
		target.hello = values.hello
		target.suite = values.suite
		$.assignStruct(target.finishedHash, values.finishedHash)
		target.masterSecret = values.masterSecret
		target.session = values.session
		target.ticket = values.ticket
	}

	public async doFullHandshake(): globalThis.Promise<$.GoError> {
		let hs: clientHandshakeState | $.VarRef<clientHandshakeState> | null = this;
		const hs$: clientHandshakeState = hs == null ? $.pointerTarget<clientHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeState>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeState).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		let [msg, err] = await __goscript_conn.Conn.prototype.readHandshake.call(c, $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as clientHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
		if (err != null) {
			return err
		}
		let __goscriptTuple0: any = $.typeAssertTuple<__goscript_handshake_messages.certificateMsg | $.VarRef<__goscript_handshake_messages.certificateMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.certificateMsg"))
		let certMsg: __goscript_handshake_messages.certificateMsg | $.VarRef<__goscript_handshake_messages.certificateMsg> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok || ($.sliceLen($.pointerValue<__goscript_handshake_messages.certificateMsg>(certMsg).certificates) == 0)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
			return __goscript_common.unexpectedMessageError($.interfaceValue(certMsg, "*tls.certificateMsg", /* @__PURE__ */ $.pointerType("tls.certificateMsg")), msg)
		}

		let __goscriptTuple1: any = await __goscript_conn.Conn.prototype.readHandshake.call(c, $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as clientHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
		msg = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return err
		}

		let __goscriptTuple2: any = $.typeAssertTuple<__goscript_handshake_messages.certificateStatusMsg | $.VarRef<__goscript_handshake_messages.certificateStatusMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.certificateStatusMsg"))
		let cs: __goscript_handshake_messages.certificateStatusMsg | $.VarRef<__goscript_handshake_messages.certificateStatusMsg> | null = __goscriptTuple2[0]
		ok = __goscriptTuple2[1]
		if (ok) {
			// RFC4366 on Certificate Status Request:
			// The server MAY return a "certificate_status" message.

			if (!$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).ocspStapling) {
				// If a server returns a "CertificateStatus" message, then the
				// server MUST have included an extension of type "status_request"
				// with empty "extension_data" in the extended server hello.

				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
				return errors.New("tls: received unexpected CertificateStatus message")
			}

			;(c$ as __goscript_conn.Conn).ocspResponse = $.pointerValue<__goscript_handshake_messages.certificateStatusMsg>(cs).response

			let __goscriptTuple3: any = await __goscript_conn.Conn.prototype.readHandshake.call(c, $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as clientHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
			msg = __goscriptTuple3[0]
			err = __goscriptTuple3[1]
			if (err != null) {
				return err
			}
		}

		if ((c$ as __goscript_conn.Conn).handshakes == 0) {
			// If this is the first handshake on a connection, process and
			// (optionally) verify the server's certificates.
			{
				let __goscriptShadow0 = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).verifyServerCertificate($.pointerValue<__goscript_handshake_messages.certificateMsg>(certMsg).certificates) : __goscript_conn.Conn.prototype.verifyServerCertificate.call(c, $.pointerValue<__goscript_handshake_messages.certificateMsg>(certMsg).certificates))
				if (__goscriptShadow0 != null) {
					return __goscriptShadow0
				}
			}
		} else {
			// This is a renegotiation handshake. We require that the
			// server's identity (i.e. leaf certificate) is unchanged and
			// thus any previous trust decision is still valid.
			//
			// See https://mitls.org/pages/attacks/3SHAKE for the
			// motivation behind this requirement.
			if (!bytes.Equal($.pointerValue<x509.Certificate>($.arrayIndex((c$ as __goscript_conn.Conn).peerCertificates!, 0)).Raw, $.arrayIndex($.pointerValue<__goscript_handshake_messages.certificateMsg>(certMsg).certificates!, 0))) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(42) : __goscript_conn.Conn.prototype.sendAlert.call(c, 42))
				return errors.New("tls: server's identity changed during renegotiation")
			}
		}

		let __goscriptShadow1 = (__goscriptAwait = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as clientHandshakeState).suite).ka!((c$ as __goscript_conn.Conn).vers), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let __goscriptTuple4: any = $.typeAssertTuple<__goscript_handshake_messages.serverKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.serverKeyExchangeMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.serverKeyExchangeMsg"))
		let skx: __goscript_handshake_messages.serverKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.serverKeyExchangeMsg> | null = __goscriptTuple4[0]
		ok = __goscriptTuple4[1]
		if (ok) {
			err = (__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<__goscript_key_agreement.keyAgreement, null>) : $.pointerValue<Exclude<__goscript_key_agreement.keyAgreement, null>>(__goscriptShadow1)).processServerKeyExchange((c$ as __goscript_conn.Conn).config, (hs$ as clientHandshakeState).hello, (hs$ as clientHandshakeState).serverHello, $.arrayIndex((c$ as __goscript_conn.Conn).peerCertificates!, 0), skx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
				return err
			}
			let __goscriptShadow2 = __goscriptShadow1
			{
				let __goscriptTuple5: any = $.typeAssertTuple<__goscript_key_agreement.ecdheKeyAgreement | $.VarRef<__goscript_key_agreement.ecdheKeyAgreement> | null>(__goscriptShadow2, /* @__PURE__ */ $.pointerType("tls.ecdheKeyAgreement"))
				let __goscriptShadow3: __goscript_key_agreement.ecdheKeyAgreement | $.VarRef<__goscript_key_agreement.ecdheKeyAgreement> | null = __goscriptTuple5[0]
				let __goscriptShadow4 = __goscriptTuple5[1]
				if (__goscriptShadow4) {
					;(c$ as __goscript_conn.Conn).curveID = $.pointerValue<__goscript_key_agreement.ecdheKeyAgreement>(__goscriptShadow3).curveID;
					;(c$ as __goscript_conn.Conn).peerSigAlg = $.pointerValue<__goscript_key_agreement.ecdheKeyAgreement>(__goscriptShadow3).signatureAlgorithm
				}
			}

			let __goscriptTuple6: any = await __goscript_conn.Conn.prototype.readHandshake.call(c, $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as clientHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
			msg = __goscriptTuple6[0]
			err = __goscriptTuple6[1]
			if (err != null) {
				return err
			}
		}

		let chainToSend: __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null = null! as __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null
		let certRequested: boolean = false
		let __goscriptTuple7: any = $.typeAssertTuple<__goscript_handshake_messages.certificateRequestMsg | $.VarRef<__goscript_handshake_messages.certificateRequestMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.certificateRequestMsg"))
		let certReq: __goscript_handshake_messages.certificateRequestMsg | $.VarRef<__goscript_handshake_messages.certificateRequestMsg> | null = __goscriptTuple7[0]
		ok = __goscriptTuple7[1]
		if (ok) {
			certRequested = true

			let cri: __goscript_common.CertificateRequestInfo | $.VarRef<__goscript_common.CertificateRequestInfo> | null = certificateRequestInfoFromMsg((hs$ as clientHandshakeState).ctx, (c$ as __goscript_conn.Conn).vers, certReq)
			{
				let __goscriptTuple8: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).getClientCertificate(cri) : __goscript_conn.Conn.prototype.getClientCertificate.call(c, cri))
				chainToSend = __goscriptTuple8[0]
				err = __goscriptTuple8[1]
				if (err != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
					return err
				}
			}

			let __goscriptTuple9: any = await __goscript_conn.Conn.prototype.readHandshake.call(c, $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as clientHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
			msg = __goscriptTuple9[0]
			err = __goscriptTuple9[1]
			if (err != null) {
				return err
			}
		}

		if (chainToSend != null) {
			$.pointerValue<__goscript_conn.Conn>((hs$ as clientHandshakeState).c).localCertificate = $.pointerValue<__goscript_common.Certificate>(chainToSend).Certificate
		}

		let __goscriptTuple10: any = $.typeAssertTuple<__goscript_handshake_messages.serverHelloDoneMsg | $.VarRef<__goscript_handshake_messages.serverHelloDoneMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.serverHelloDoneMsg"))
		let shd: __goscript_handshake_messages.serverHelloDoneMsg | $.VarRef<__goscript_handshake_messages.serverHelloDoneMsg> | null = __goscriptTuple10[0]
		ok = __goscriptTuple10[1]
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
			return __goscript_common.unexpectedMessageError($.interfaceValue(shd, "*tls.serverHelloDoneMsg", /* @__PURE__ */ $.pointerType("tls.serverHelloDoneMsg")), msg)
		}

		// If the server requested a certificate then we have to send a
		// Certificate message, even if it's empty because we don't have a
		// certificate to send.
		if (certRequested) {
			certMsg = new __goscript_handshake_messages.certificateMsg()
			$.pointerValue<__goscript_handshake_messages.certificateMsg>(certMsg).certificates = $.pointerValue<__goscript_common.Certificate>(chainToSend).Certificate
			{
				let [, __goscriptShadow5] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as clientHandshakeState).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(certMsg, "*tls.certificateMsg", /* @__PURE__ */ $.pointerType("tls.certificateMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as clientHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
				if (__goscriptShadow5 != null) {
					return __goscriptShadow5
				}
			}
		}

		let __goscriptTuple11: any = await (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<__goscript_key_agreement.keyAgreement, null>) : $.pointerValue<Exclude<__goscript_key_agreement.keyAgreement, null>>(__goscriptShadow1)).generateClientKeyExchange((c$ as __goscript_conn.Conn).config, (hs$ as clientHandshakeState).hello, $.arrayIndex((c$ as __goscript_conn.Conn).peerCertificates!, 0))
		let preMasterSecret: $.Slice<number> = __goscriptTuple11[0]
		let ckx: __goscript_handshake_messages.clientKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.clientKeyExchangeMsg> | null = __goscriptTuple11[1]
		err = __goscriptTuple11[2]
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			return err
		}
		if (ckx != null) {
			{
				let [, __goscriptShadow6] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as clientHandshakeState).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(ckx, "*tls.clientKeyExchangeMsg", /* @__PURE__ */ $.pointerType("tls.clientKeyExchangeMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as clientHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
				if (__goscriptShadow6 != null) {
					return __goscriptShadow6
				}
			}
		}

		if ($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).extendedMasterSecret) {
			;(c$ as __goscript_conn.Conn).extMasterSecret = true;
			;(hs$ as clientHandshakeState).masterSecret = await __goscript_prf.extMasterFromPreMasterSecret((c$ as __goscript_conn.Conn).vers, (hs$ as clientHandshakeState).suite, preMasterSecret, await $.markAsStructValue($.cloneStructValue((hs$ as clientHandshakeState).finishedHash)).Sum())
		} else {
			if (fips140tls.Required()) {
				if (!$.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(fips140ems)), "0")) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
					return errors.New("tls: FIPS 140-3 requires the use of Extended Master Secret")
				}
				godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(fips140ems))
			}
			;(hs$ as clientHandshakeState).masterSecret = await __goscript_prf.masterFromPreMasterSecret((c$ as __goscript_conn.Conn).vers, (hs$ as clientHandshakeState).suite, preMasterSecret, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeState).hello).random, $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).random)
		}
		{
			let __goscriptShadow7 = await __goscript_common.Config.prototype.writeKeyLog.call((c$ as __goscript_conn.Conn).config, "CLIENT_RANDOM", $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeState).hello).random, (hs$ as clientHandshakeState).masterSecret)
			if (__goscriptShadow7 != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
				return errors.New($.concatString("tls: failed to write to key log: ", (__goscriptAwait = (__goscriptShadow7 !== null && (__goscriptShadow7 as any).__isVarRef !== true && (__goscriptShadow7 as any).__goValue === undefined ? (__goscriptShadow7 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow7)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
			}
		}

		if ((chainToSend != null) && ($.sliceLen($.pointerValue<__goscript_common.Certificate>(chainToSend).Certificate) > 0)) {
			let certVerify: __goscript_handshake_messages.certificateVerifyMsg | $.VarRef<__goscript_handshake_messages.certificateVerifyMsg> | null = new __goscript_handshake_messages.certificateVerifyMsg()
			let certVerify$: __goscript_handshake_messages.certificateVerifyMsg = certVerify == null ? $.pointerTarget<__goscript_handshake_messages.certificateVerifyMsg>(certVerify) : (certVerify as any).__isVarRef === true ? (certVerify as any).value : (certVerify as any).__goValue === undefined ? (certVerify as any) : $.pointerTarget<__goscript_handshake_messages.certificateVerifyMsg>(certVerify)

			let [key, __goscriptShadow8] = $.typeAssertTuple<crypto.Signer | null>($.pointerValue<__goscript_common.Certificate>(chainToSend).PrivateKey, "crypto.Signer")
			if (!__goscriptShadow8) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
				return fmt.Errorf("tls: client certificate private key of type %T does not implement crypto.Signer", ($.pointerValue<__goscript_common.Certificate>(chainToSend).PrivateKey as any))
			}

			if ((c$ as __goscript_conn.Conn).vers >= 771) {
				let [signatureAlgorithm, __goscriptShadow9] = await __goscript_auth.selectSignatureScheme((c$ as __goscript_conn.Conn).vers, chainToSend, $.pointerValue<__goscript_handshake_messages.certificateRequestMsg>(certReq).supportedSignatureAlgorithms)
				if (__goscriptShadow9 != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
					return __goscriptShadow9
				}
				let __goscriptTuple12: any = __goscript_auth.typeAndHashFromSignatureScheme(signatureAlgorithm)
				let sigType = __goscriptTuple12[0]
				let sigHash = __goscriptTuple12[1]
				__goscriptShadow9 = __goscriptTuple12[2]
				if (__goscriptShadow9 != null) {
					return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
				}
				;(certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).hasSignatureAlgorithm = true;
				;(certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signatureAlgorithm = signatureAlgorithm
				if (sigHash == 3) {
					godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(__goscript_common.tlssha1))
					godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(__goscript_common.tlssha1))
				}
				if ((hs$ as clientHandshakeState).finishedHash.buffer == null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
					return errors.New("tls: internal error: did not keep handshake transcript for TLS 1.2")
				}
				let signOpts = $.namedValueInterfaceValue<crypto.SignerOpts | null>(sigHash, "crypto.Hash", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
				if (sigType == 226) {
					signOpts = $.interfaceValue<crypto.SignerOpts | null>(new rsa.PSSOptions({SaltLength: -1, Hash: sigHash}), "*rsa.PSSOptions", /* @__PURE__ */ $.pointerType("rsa.PSSOptions"))
				}
				let __goscriptTuple13: any = await crypto.SignMessage(key, __goscript_common.Config.prototype.rand.call((c$ as __goscript_conn.Conn).config), (hs$ as clientHandshakeState).finishedHash.buffer, signOpts);
				;(certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signature = __goscriptTuple13[0]
				__goscriptShadow9 = __goscriptTuple13[1]
				if (__goscriptShadow9 != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
					return __goscriptShadow9
				}
			} else {
				let [sigType, sigHash, __goscriptShadow10] = __goscript_auth.legacyTypeAndHashFromPublicKey((__goscriptAwait = (key !== null && (key as any).__isVarRef !== true && (key as any).__goValue === undefined ? (key as Exclude<crypto.Signer, null>) : $.pointerValue<Exclude<crypto.Signer, null>>(key)).Public(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				if (__goscriptShadow10 != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
					return __goscriptShadow10
				}
				let signed: $.Slice<number> = await $.markAsStructValue($.cloneStructValue((hs$ as clientHandshakeState).finishedHash)).hashForClientCertificate(sigType)
				let __goscriptTuple14: any = await (key !== null && (key as any).__isVarRef !== true && (key as any).__goValue === undefined ? (key as Exclude<crypto.Signer, null>) : $.pointerValue<Exclude<crypto.Signer, null>>(key)).Sign(__goscript_common.Config.prototype.rand.call((c$ as __goscript_conn.Conn).config), signed, $.namedValueInterfaceValue<crypto.SignerOpts | null>(sigHash, "crypto.Hash", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()));
				;(certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signature = __goscriptTuple14[0]
				__goscriptShadow10 = __goscriptTuple14[1]
				if (__goscriptShadow10 != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
					return __goscriptShadow10
				}
			}

			{
				let [, __goscriptShadow11] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as clientHandshakeState).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(certVerify, "*tls.certificateVerifyMsg", /* @__PURE__ */ $.pointerType("tls.certificateVerifyMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as clientHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
				if (__goscriptShadow11 != null) {
					return __goscriptShadow11
				}
			}
		}

		void (hs$ as clientHandshakeState).finishedHash.discardHandshakeBuffer()

		return null
	}

	public async establishKeys(): globalThis.Promise<$.GoError> {
		const hs: clientHandshakeState | $.VarRef<clientHandshakeState> | null = this;
		const hs$: clientHandshakeState = hs == null ? $.pointerTarget<clientHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeState>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeState).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		let __goscriptTuple15: any = await __goscript_prf.keysFromMasterSecret((c$ as __goscript_conn.Conn).vers, (hs$ as clientHandshakeState).suite, (hs$ as clientHandshakeState).masterSecret, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeState).hello).random, $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).random, $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as clientHandshakeState).suite).macLen, $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as clientHandshakeState).suite).keyLen, $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as clientHandshakeState).suite).ivLen)
		let clientMAC: $.Slice<number> = __goscriptTuple15[0]
		let serverMAC: $.Slice<number> = __goscriptTuple15[1]
		let clientKey: $.Slice<number> = __goscriptTuple15[2]
		let serverKey: $.Slice<number> = __goscriptTuple15[3]
		let clientIV: $.Slice<number> = __goscriptTuple15[4]
		let serverIV: $.Slice<number> = __goscriptTuple15[5]
		let clientCipher: any = null! as any
		let serverCipher: any = null! as any
		let clientHash: hash.Hash | null = null! as hash.Hash | null
		let serverHash: hash.Hash | null = null! as hash.Hash | null
		if ($.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as clientHandshakeState).suite).cipher != null) {
			clientCipher = (__goscriptAwait = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as clientHandshakeState).suite).cipher!(clientKey, clientIV, false), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			clientHash = (__goscriptAwait = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as clientHandshakeState).suite).mac!(clientMAC), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			serverCipher = (__goscriptAwait = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as clientHandshakeState).suite).cipher!(serverKey, serverIV, true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			serverHash = (__goscriptAwait = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as clientHandshakeState).suite).mac!(serverMAC), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			clientCipher = ((__goscriptAwait = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as clientHandshakeState).suite).aead!(clientKey, clientIV), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)
			serverCipher = ((__goscriptAwait = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as clientHandshakeState).suite).aead!(serverKey, serverIV), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)
		}

		void (c$ as __goscript_conn.Conn)._in.prepareCipherSpec((c$ as __goscript_conn.Conn).vers, serverCipher, serverHash)
		void (c$ as __goscript_conn.Conn).out.prepareCipherSpec((c$ as __goscript_conn.Conn).vers, clientCipher, clientHash)
		return null
	}

	public async handshake(): globalThis.Promise<$.GoError> {
		let hs: clientHandshakeState | $.VarRef<clientHandshakeState> | null = this;
		const hs$: clientHandshakeState = hs == null ? $.pointerTarget<clientHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeState>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeState).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		// If we did not load a session (hs.session == nil), but we did set a
		// session ID in the transmitted client hello (hs.hello.sessionId != nil),
		// it means we tried to negotiate TLS 1.3 and sent a random session ID as a
		// compatibility measure (see RFC 8446, Section 4.1.2).
		//
		// Since we're now handshaking for TLS 1.2, if the server echoed the
		// transmitted ID back to us, we know mischief is afoot: the session ID
		// was random and can't possibly be recognized by the server.
		if ((((hs$ as clientHandshakeState).session == null) && ($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeState).hello).sessionId != null)) && bytes.Equal($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeState).hello).sessionId, $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).sessionId)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: server echoed TLS 1.3 compatibility session ID in TLS 1.2")
		}

		let [isResume, err] = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeState).processServerHello() : clientHandshakeState.prototype.processServerHello.call(hs))
		if (err != null) {
			return err
		}

		$.assignStruct((hs$ as clientHandshakeState).finishedHash, await __goscript_prf.newFinishedHash((c$ as __goscript_conn.Conn).vers, (hs$ as clientHandshakeState).suite))

		// No signatures of the handshake are needed in a resumption.
		// Otherwise, in a full handshake, if we don't have any certificates
		// configured then we will never send a CertificateVerify message and
		// thus no signatures are needed in that case either.
		if (isResume || (($.sliceLen($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).Certificates) == 0) && ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).GetClientCertificate == null))) {
			void (hs$ as clientHandshakeState).finishedHash.discardHandshakeBuffer()
		}

		{
			let __goscriptShadow12 = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>((hs$ as clientHandshakeState).hello, "*tls.clientHelloMsg", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as clientHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
			if (__goscriptShadow12 != null) {
				return __goscriptShadow12
			}
		}
		{
			let __goscriptShadow13 = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>((hs$ as clientHandshakeState).serverHello, "*tls.serverHelloMsg", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as clientHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
			if (__goscriptShadow13 != null) {
				return __goscriptShadow13
			}
		}

		;(c$ as __goscript_conn.Conn).buffering = true;
		;(c$ as __goscript_conn.Conn).didResume = isResume
		if (isResume) {
			{
				let __goscriptShadow14 = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeState).establishKeys() : clientHandshakeState.prototype.establishKeys.call(hs))
				if (__goscriptShadow14 != null) {
					return __goscriptShadow14
				}
			}
			{
				let __goscriptShadow15 = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeState).readSessionTicket() : clientHandshakeState.prototype.readSessionTicket.call(hs))
				if (__goscriptShadow15 != null) {
					return __goscriptShadow15
				}
			}
			{
				let __goscriptShadow16 = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeState).readFinished($.goSlice((c$ as __goscript_conn.Conn).serverFinished, undefined, undefined)) : clientHandshakeState.prototype.readFinished.call(hs, $.goSlice((c$ as __goscript_conn.Conn).serverFinished, undefined, undefined)))
				if (__goscriptShadow16 != null) {
					return __goscriptShadow16
				}
			}
			;(c$ as __goscript_conn.Conn).clientFinishedIsFirst = false
			// Make sure the connection is still being verified whether or not this
			// is a resumption. Resumptions currently don't reverify certificates so
			// they don't call verifyServerCertificate. See Issue 31641.
			if ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).VerifyConnection != null) {
				{
					let __goscriptShadow17 = (__goscriptAwait = $.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).VerifyConnection!((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).connectionStateLocked() : __goscript_conn.Conn.prototype.connectionStateLocked.call(c))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (__goscriptShadow17 != null) {
						await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(42) : __goscript_conn.Conn.prototype.sendAlert.call(c, 42))
						return __goscriptShadow17
					}
				}
			}
			{
				let __goscriptShadow18 = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeState).sendFinished($.goSlice((c$ as __goscript_conn.Conn).clientFinished, undefined, undefined)) : clientHandshakeState.prototype.sendFinished.call(hs, $.goSlice((c$ as __goscript_conn.Conn).clientFinished, undefined, undefined)))
				if (__goscriptShadow18 != null) {
					return __goscriptShadow18
				}
			}
			{
				let [, __goscriptShadow19] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).flush() : __goscript_conn.Conn.prototype.flush.call(c))
				if (__goscriptShadow19 != null) {
					return __goscriptShadow19
				}
			}
		} else {
			{
				let __goscriptShadow20 = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeState).doFullHandshake() : clientHandshakeState.prototype.doFullHandshake.call(hs))
				if (__goscriptShadow20 != null) {
					return __goscriptShadow20
				}
			}
			{
				let __goscriptShadow21 = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeState).establishKeys() : clientHandshakeState.prototype.establishKeys.call(hs))
				if (__goscriptShadow21 != null) {
					return __goscriptShadow21
				}
			}
			{
				let __goscriptShadow22 = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeState).sendFinished($.goSlice((c$ as __goscript_conn.Conn).clientFinished, undefined, undefined)) : clientHandshakeState.prototype.sendFinished.call(hs, $.goSlice((c$ as __goscript_conn.Conn).clientFinished, undefined, undefined)))
				if (__goscriptShadow22 != null) {
					return __goscriptShadow22
				}
			}
			{
				let [, __goscriptShadow23] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).flush() : __goscript_conn.Conn.prototype.flush.call(c))
				if (__goscriptShadow23 != null) {
					return __goscriptShadow23
				}
			}
			;(c$ as __goscript_conn.Conn).clientFinishedIsFirst = true
			{
				let __goscriptShadow24 = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeState).readSessionTicket() : clientHandshakeState.prototype.readSessionTicket.call(hs))
				if (__goscriptShadow24 != null) {
					return __goscriptShadow24
				}
			}
			{
				let __goscriptShadow25 = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeState).readFinished($.goSlice((c$ as __goscript_conn.Conn).serverFinished, undefined, undefined)) : clientHandshakeState.prototype.readFinished.call(hs, $.goSlice((c$ as __goscript_conn.Conn).serverFinished, undefined, undefined)))
				if (__goscriptShadow25 != null) {
					return __goscriptShadow25
				}
			}
		}
		{
			let __goscriptShadow26 = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeState).saveSessionTicket() : clientHandshakeState.prototype.saveSessionTicket.call(hs))
			if (__goscriptShadow26 != null) {
				return __goscriptShadow26
			}
		}

		;(c$ as __goscript_conn.Conn).ekm = __goscript_prf.ekmFromMasterSecret((c$ as __goscript_conn.Conn).vers, (hs$ as clientHandshakeState).suite, (hs$ as clientHandshakeState).masterSecret, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeState).hello).random, $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).random)
		void (c$ as __goscript_conn.Conn).isHandshakeComplete.Store(true)

		return null
	}

	public async pickCipherSuite(): globalThis.Promise<$.GoError> {
		let hs: clientHandshakeState | $.VarRef<clientHandshakeState> | null = this;
		const hs$: clientHandshakeState = hs == null ? $.pointerTarget<clientHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeState>(hs)
		{
			;(hs$ as clientHandshakeState).suite = __goscript_cipher_suites.mutualCipherSuite($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeState).hello).cipherSuites, $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).cipherSuite)
			if ((hs$ as clientHandshakeState).suite == null) {
				await __goscript_conn.Conn.prototype.sendAlert.call((hs$ as clientHandshakeState).c, 40)
				return errors.New("tls: server chose an unconfigured cipher suite")
			}
		}

		$.pointerValue<__goscript_conn.Conn>((hs$ as clientHandshakeState).c).cipherSuite = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as clientHandshakeState).suite).id
		return null
	}

	public async processServerHello(): globalThis.Promise<[boolean, $.GoError]> {
		let hs: clientHandshakeState | $.VarRef<clientHandshakeState> | null = this;
		const hs$: clientHandshakeState = hs == null ? $.pointerTarget<clientHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeState>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeState).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeState).pickCipherSuite() : clientHandshakeState.prototype.pickCipherSuite.call(hs))
			if (err != null) {
				return [false, err]
			}
		}

		if ($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).compressionMethod != 0) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return [false, errors.New("tls: server selected unsupported compression format")]
		}

		let supportsPointFormat = false
		let offeredNonCompressedFormat = false
		for (let __goscriptRangeTarget0 = $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).supportedPoints, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let format = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
			if (format == 0) {
				supportsPointFormat = true
			} else {
				offeredNonCompressedFormat = true
			}
		}
		if (!supportsPointFormat && offeredNonCompressedFormat) {
			return [false, errors.New("tls: server offered only incompatible point formats")]
		}

		if (((c$ as __goscript_conn.Conn).handshakes == 0) && $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).secureRenegotiationSupported) {
			;(c$ as __goscript_conn.Conn).secureRenegotiation = true
			if ($.sliceLen($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).secureRenegotiation) != 0) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
				return [false, errors.New("tls: initial handshake had non-empty renegotiation extension")]
			}
		}

		if (((c$ as __goscript_conn.Conn).handshakes > 0) && (c$ as __goscript_conn.Conn).secureRenegotiation) {
			let expectedSecureRenegotiation: Uint8Array = $.arrayValue(new Uint8Array(24))
			$.copy($.goSlice(expectedSecureRenegotiation, undefined, undefined), $.goSlice((c$ as __goscript_conn.Conn).clientFinished, undefined, undefined))
			$.copy($.goSlice(expectedSecureRenegotiation, 12, undefined), $.goSlice((c$ as __goscript_conn.Conn).serverFinished, undefined, undefined))
			if (!bytes.Equal($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).secureRenegotiation, $.goSlice(expectedSecureRenegotiation, undefined, undefined))) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
				return [false, errors.New("tls: incorrect renegotiation extension contents")]
			}
		}

		{
			let err = checkALPN($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeState).hello).alpnProtocols, $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).alpnProtocol, false)
			if (err != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(110) : __goscript_conn.Conn.prototype.sendAlert.call(c, 110))
				return [false, err]
			}
		}
		;(c$ as __goscript_conn.Conn).clientProtocol = $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).alpnProtocol;

		;(c$ as __goscript_conn.Conn).scts = $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).scts

		if (!(hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as clientHandshakeState).serverResumedSession() : clientHandshakeState.prototype.serverResumedSession.call(hs))) {
			return [false, null]
		}

		if ($.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeState).session).version != (c$ as __goscript_conn.Conn).vers) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
			return [false, errors.New("tls: server resumed a session with a different version")]
		}

		if ($.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeState).session).cipherSuite != $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as clientHandshakeState).suite).id) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
			return [false, errors.New("tls: server resumed a session with a different cipher suite")]
		}

		// RFC 7627, Section 5.3
		if ($.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeState).session).extMasterSecret != $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).extendedMasterSecret) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
			return [false, errors.New("tls: server resumed a session with a different EMS extension")]
		}

		// Restore master secret and certificates from previous state
		;(hs$ as clientHandshakeState).masterSecret = $.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeState).session).secret;
		;(c$ as __goscript_conn.Conn).extMasterSecret = $.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeState).session).extMasterSecret;
		;(c$ as __goscript_conn.Conn).peerCertificates = $.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeState).session).peerCertificates;
		;(c$ as __goscript_conn.Conn).verifiedChains = $.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeState).session).verifiedChains;
		;(c$ as __goscript_conn.Conn).ocspResponse = $.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeState).session).ocspResponse
		// Let the ServerHello SCTs override the session SCTs from the original
		// connection, if any are provided.
		if (($.sliceLen((c$ as __goscript_conn.Conn).scts) == 0) && ($.sliceLen($.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeState).session).scts) != 0)) {
			;(c$ as __goscript_conn.Conn).scts = $.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeState).session).scts
		}
		;(c$ as __goscript_conn.Conn).curveID = $.pointerValue<__goscript_ticket.SessionState>((hs$ as clientHandshakeState).session).curveID

		return [true, null]
	}

	public async readFinished(out: $.Slice<number>): globalThis.Promise<$.GoError> {
		const hs: clientHandshakeState | $.VarRef<clientHandshakeState> | null = this;
		const hs$: clientHandshakeState = hs == null ? $.pointerTarget<clientHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeState>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeState).c

		{
			let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).readChangeCipherSpec() : __goscript_conn.Conn.prototype.readChangeCipherSpec.call(c))
			if (err != null) {
				return err
			}
		}

		// finishedMsg is included in the transcript, but not until after we
		// check the client version, since the state before this message was
		// sent is used during verification.
		let [msg, err] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).readHandshake(null) : __goscript_conn.Conn.prototype.readHandshake.call(c, null))
		if (err != null) {
			return err
		}
		let __goscriptTuple16: any = $.typeAssertTuple<__goscript_handshake_messages.finishedMsg | $.VarRef<__goscript_handshake_messages.finishedMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.finishedMsg"))
		let serverFinished: __goscript_handshake_messages.finishedMsg | $.VarRef<__goscript_handshake_messages.finishedMsg> | null = __goscriptTuple16[0]
		let ok = __goscriptTuple16[1]
		let serverFinished$: __goscript_handshake_messages.finishedMsg = serverFinished == null ? $.pointerTarget<__goscript_handshake_messages.finishedMsg>(serverFinished) : (serverFinished as any).__isVarRef === true ? (serverFinished as any).value : (serverFinished as any).__goValue === undefined ? (serverFinished as any) : $.pointerTarget<__goscript_handshake_messages.finishedMsg>(serverFinished)
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
			return __goscript_common.unexpectedMessageError($.interfaceValue(serverFinished, "*tls.finishedMsg", /* @__PURE__ */ $.pointerType("tls.finishedMsg")), msg)
		}

		let verify: $.Slice<number> = await $.markAsStructValue($.cloneStructValue((hs$ as clientHandshakeState).finishedHash)).serverSum((hs$ as clientHandshakeState).masterSecret)
		if (($.sliceLen(verify) != $.sliceLen((serverFinished$ as __goscript_handshake_messages.finishedMsg).verifyData)) || (subtle.ConstantTimeCompare(verify, (serverFinished$ as __goscript_handshake_messages.finishedMsg).verifyData) != 1)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
			return errors.New("tls: server's Finished message was incorrect")
		}

		{
			let __goscriptShadow27 = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>(serverFinished, "*tls.finishedMsg", /* @__PURE__ */ $.pointerType("tls.finishedMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as clientHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
			if (__goscriptShadow27 != null) {
				return __goscriptShadow27
			}
		}

		$.copy(out, verify)
		return null
	}

	public async readSessionTicket(): globalThis.Promise<$.GoError> {
		let hs: clientHandshakeState | $.VarRef<clientHandshakeState> | null = this;
		const hs$: clientHandshakeState = hs == null ? $.pointerTarget<clientHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeState>(hs)
		if (!$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).ticketSupported) {
			return null
		}
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeState).c

		if (!$.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeState).hello).ticketSupported) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: server sent unrequested session ticket")
		}

		let [msg, err] = await __goscript_conn.Conn.prototype.readHandshake.call(c, $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as clientHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
		if (err != null) {
			return err
		}
		let __goscriptTuple17: any = $.typeAssertTuple<__goscript_handshake_messages.newSessionTicketMsg | $.VarRef<__goscript_handshake_messages.newSessionTicketMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.newSessionTicketMsg"))
		let sessionTicketMsg: __goscript_handshake_messages.newSessionTicketMsg | $.VarRef<__goscript_handshake_messages.newSessionTicketMsg> | null = __goscriptTuple17[0]
		let ok = __goscriptTuple17[1]
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
			return __goscript_common.unexpectedMessageError($.interfaceValue(sessionTicketMsg, "*tls.newSessionTicketMsg", /* @__PURE__ */ $.pointerType("tls.newSessionTicketMsg")), msg)
		}

		;(hs$ as clientHandshakeState).ticket = $.pointerValue<__goscript_handshake_messages.newSessionTicketMsg>(sessionTicketMsg).ticket
		return null
	}

	public async saveSessionTicket(): globalThis.Promise<$.GoError> {
		const hs: clientHandshakeState | $.VarRef<clientHandshakeState> | null = this;
		const hs$: clientHandshakeState = hs == null ? $.pointerTarget<clientHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeState>(hs)
		if ((hs$ as clientHandshakeState).ticket == null) {
			return null
		}
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeState).c

		let cacheKey = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).clientSessionCacheKey() : __goscript_conn.Conn.prototype.clientSessionCacheKey.call(c))
		if ($.stringEqual(cacheKey, "")) {
			return null
		}

		let session: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sessionState() : __goscript_conn.Conn.prototype.sessionState.call(c))
		let session$: __goscript_ticket.SessionState = session == null ? $.pointerTarget<__goscript_ticket.SessionState>(session) : (session as any).__isVarRef === true ? (session as any).value : (session as any).__goValue === undefined ? (session as any) : $.pointerTarget<__goscript_ticket.SessionState>(session);
		;(session$ as __goscript_ticket.SessionState).secret = (hs$ as clientHandshakeState).masterSecret;
		;(session$ as __goscript_ticket.SessionState).ticket = (hs$ as clientHandshakeState).ticket

		let cs: __goscript_ticket.ClientSessionState | $.VarRef<__goscript_ticket.ClientSessionState> | null = new __goscript_ticket.ClientSessionState({session: session})
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_common.ClientSessionCache, null>>($.pointerValue<__goscript_common.Config>($.pointerValue<__goscript_conn.Conn>(c).config).ClientSessionCache).Put(cacheKey, cs), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	public async sendFinished(out: $.Slice<number>): globalThis.Promise<$.GoError> {
		const hs: clientHandshakeState | $.VarRef<clientHandshakeState> | null = this;
		const hs$: clientHandshakeState = hs == null ? $.pointerTarget<clientHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeState>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as clientHandshakeState).c

		{
			let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).writeChangeCipherRecord() : __goscript_conn.Conn.prototype.writeChangeCipherRecord.call(c))
			if (err != null) {
				return err
			}
		}

		let finished: __goscript_handshake_messages.finishedMsg | $.VarRef<__goscript_handshake_messages.finishedMsg> | null = new __goscript_handshake_messages.finishedMsg()
		let finished$: __goscript_handshake_messages.finishedMsg = finished == null ? $.pointerTarget<__goscript_handshake_messages.finishedMsg>(finished) : (finished as any).__isVarRef === true ? (finished as any).value : (finished as any).__goValue === undefined ? (finished as any) : $.pointerTarget<__goscript_handshake_messages.finishedMsg>(finished);
		;(finished$ as __goscript_handshake_messages.finishedMsg).verifyData = await $.markAsStructValue($.cloneStructValue((hs$ as clientHandshakeState).finishedHash)).clientSum((hs$ as clientHandshakeState).masterSecret)
		{
			let [, err] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as clientHandshakeState).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(finished, "*tls.finishedMsg", /* @__PURE__ */ $.pointerType("tls.finishedMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as clientHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
			if (err != null) {
				return err
			}
		}
		$.copy(out, (finished$ as __goscript_handshake_messages.finishedMsg).verifyData)
		return null
	}

	public serverResumedSession(): boolean {
		const hs: clientHandshakeState | $.VarRef<clientHandshakeState> | null = this;
		const hs$: clientHandshakeState = hs == null ? $.pointerTarget<clientHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<clientHandshakeState>(hs)
		// If the server responded with the same sessionId then it means the
		// sessionTicket is being used to resume a TLS session.
		return (((hs$ as clientHandshakeState).session != null) && ($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeState).hello).sessionId != null)) && bytes.Equal($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as clientHandshakeState).serverHello).sessionId, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as clientHandshakeState).hello).sessionId)
	}

	static __typeInfo = $.registerStructType(
		"tls.clientHandshakeState",
		() => new clientHandshakeState(),
		() => [$.methodSignature("doFullHandshake", [], ["error"], true), $.methodSignature("establishKeys", [], ["error"], true), $.methodSignature("handshake", [], ["error"], true), $.methodSignature("pickCipherSuite", [], ["error"], true), $.methodSignature("processServerHello", [], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("readFinished", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("readSessionTicket", [], ["error"], true), $.methodSignature("saveSessionTicket", [], ["error"], true), $.methodSignature("sendFinished", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("serverResumedSession", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		clientHandshakeState,
		() => [/* @__PURE__ */ $.structField("c", /* @__PURE__ */ $.pointerType("tls.Conn"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [1], 8, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("serverHello", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg"), [2], 24, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("hello", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg"), [3], 32, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("suite", /* @__PURE__ */ $.pointerType("tls.cipherSuite"), [4], 40, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("finishedHash", "tls.finishedHash", [5], 48, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("masterSecret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 152, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("session", /* @__PURE__ */ $.pointerType("tls.SessionState"), [7], 176, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ticket", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [8], 184, false, { pkgPath: "crypto/tls" })]
	)
}

export class echClientContext {
	public get config(): __goscript_ech.echConfig | $.VarRef<__goscript_ech.echConfig> | null {
		return this._fields.config
	}

	public set config(value: __goscript_ech.echConfig | $.VarRef<__goscript_ech.echConfig> | null) {
		this._fields.config = value
	}

	public get hpkeContext(): hpke.Sender | $.VarRef<hpke.Sender> | null {
		return this._fields.hpkeContext
	}

	public set hpkeContext(value: hpke.Sender | $.VarRef<hpke.Sender> | null) {
		this._fields.hpkeContext = value
	}

	public get encapsulatedKey(): $.Slice<number> {
		return this._fields.encapsulatedKey
	}

	public set encapsulatedKey(value: $.Slice<number>) {
		this._fields.encapsulatedKey = value
	}

	public get innerHello(): __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null {
		return this._fields.innerHello
	}

	public set innerHello(value: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null) {
		this._fields.innerHello = value
	}

	public get innerTranscript(): hash.Hash | null {
		return this._fields.innerTranscript
	}

	public set innerTranscript(value: hash.Hash | null) {
		this._fields.innerTranscript = value
	}

	public get kdfID(): number {
		return this._fields.kdfID
	}

	public set kdfID(value: number) {
		this._fields.kdfID = value
	}

	public get aeadID(): number {
		return this._fields.aeadID
	}

	public set aeadID(value: number) {
		this._fields.aeadID = value
	}

	public get echRejected(): boolean {
		return this._fields.echRejected
	}

	public set echRejected(value: boolean) {
		this._fields.echRejected = value
	}

	public get retryConfigs(): $.Slice<number> {
		return this._fields.retryConfigs
	}

	public set retryConfigs(value: $.Slice<number>) {
		this._fields.retryConfigs = value
	}

	public _fields: {
		config: __goscript_ech.echConfig | $.VarRef<__goscript_ech.echConfig> | null
		hpkeContext: hpke.Sender | $.VarRef<hpke.Sender> | null
		encapsulatedKey: $.Slice<number>
		innerHello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null
		innerTranscript: hash.Hash | null
		kdfID: number
		aeadID: number
		echRejected: boolean
		retryConfigs: $.Slice<number>
	}

	constructor(init?: Partial<{config?: __goscript_ech.echConfig | $.VarRef<__goscript_ech.echConfig> | null, hpkeContext?: hpke.Sender | $.VarRef<hpke.Sender> | null, encapsulatedKey?: $.Slice<number>, innerHello?: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, innerTranscript?: hash.Hash | null, kdfID?: number, aeadID?: number, echRejected?: boolean, retryConfigs?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			config: init?.config ?? (null! as __goscript_ech.echConfig | $.VarRef<__goscript_ech.echConfig> | null),
			hpkeContext: init?.hpkeContext ?? (null! as hpke.Sender | $.VarRef<hpke.Sender> | null),
			encapsulatedKey: init?.encapsulatedKey ?? (null! as $.Slice<number>),
			innerHello: init?.innerHello ?? (null! as __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null),
			innerTranscript: init?.innerTranscript ?? (null! as hash.Hash | null),
			kdfID: init?.kdfID ?? (0 as number),
			aeadID: init?.aeadID ?? (0 as number),
			echRejected: init?.echRejected ?? (false as boolean),
			retryConfigs: init?.retryConfigs ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): echClientContext {
		return new echClientContext(this, true)
	}

	public __goscriptAssign(source: echClientContext): void {
		const target = this._fields
		const values = source._fields
		target.config = values.config
		target.hpkeContext = values.hpkeContext
		target.encapsulatedKey = values.encapsulatedKey
		target.innerHello = values.innerHello
		target.innerTranscript = $.assignFieldValue(target.innerTranscript, values.innerTranscript, "hash.Hash")
		target.kdfID = values.kdfID
		target.aeadID = values.aeadID
		target.echRejected = values.echRejected
		target.retryConfigs = values.retryConfigs
	}

	static __typeInfo = $.registerStructType(
		"tls.echClientContext",
		() => new echClientContext(),
		() => [],
		echClientContext,
		() => [/* @__PURE__ */ $.structField("config", /* @__PURE__ */ $.pointerType("tls.echConfig"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("hpkeContext", /* @__PURE__ */ $.pointerType("hpke.Sender"), [1], 8, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("encapsulatedKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("innerHello", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg"), [3], 40, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("innerTranscript", "hash.Hash", [4], 48, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("kdfID", /* @__PURE__ */ $.basicType("uint16"), [5], 64, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("aeadID", /* @__PURE__ */ $.basicType("uint16"), [6], 66, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("echRejected", /* @__PURE__ */ $.basicType("bool"), [7], 68, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("retryConfigs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [8], 72, false, { pkgPath: "crypto/tls" })]
	)
}

export const defaultMaxRSAKeySize: number = 8192

export let fips140ems: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("fips140ems")

export function __goscript_set_fips140ems(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	fips140ems = __goscriptValue
}

export function checkALPN(clientProtos: $.Slice<string>, serverProto: string, quic: boolean): $.GoError {
	if ($.stringEqual(serverProto, "")) {
		if (quic && ($.sliceLen(clientProtos) > 0)) {
			// RFC 9001, Section 8.1
			return errors.New("tls: server did not select an ALPN protocol")
		}
		return null
	}
	if ($.sliceLen(clientProtos) == 0) {
		return errors.New("tls: server advertised unrequested ALPN extension")
	}
	for (let __goscriptRangeTarget1 = clientProtos, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let proto = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
		if ($.stringEqual(proto, serverProto)) {
			return null
		}
	}
	return errors.New("tls: server selected unadvertised ALPN protocol")
}

export let tlsmaxrsasize: godebug.Setting | $.VarRef<godebug.Setting> | null = godebug.New("tlsmaxrsasize")

export function __goscript_set_tlsmaxrsasize(__goscriptValue: godebug.Setting | $.VarRef<godebug.Setting> | null): void {
	tlsmaxrsasize = __goscriptValue
}

export function checkKeySize(n: number): [number, boolean] {
	let max: number = 0
	let ok: boolean = false
	{
		let v = godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(tlsmaxrsasize))
		if (!$.stringEqual(v, "")) {
			{
				let [__goscriptShadow28, err] = strconv.Atoi(v)
				if (err == null) {
					if ((n <= __goscriptShadow28) != (n <= 8192)) {
						godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(tlsmaxrsasize))
					}
					return [__goscriptShadow28, n <= __goscriptShadow28]
				}
			}
		}
	}
	return [8192, n <= 8192]
}

export function certificateRequestInfoFromMsg(ctx: context.Context | null, vers: number, certReq: __goscript_handshake_messages.certificateRequestMsg | $.VarRef<__goscript_handshake_messages.certificateRequestMsg> | null): __goscript_common.CertificateRequestInfo | $.VarRef<__goscript_common.CertificateRequestInfo> | null {
	const certReq$: __goscript_handshake_messages.certificateRequestMsg = certReq == null ? $.pointerTarget<__goscript_handshake_messages.certificateRequestMsg>(certReq) : (certReq as any).__isVarRef === true ? (certReq as any).value : (certReq as any).__goValue === undefined ? (certReq as any) : $.pointerTarget<__goscript_handshake_messages.certificateRequestMsg>(certReq)
	let cri: __goscript_common.CertificateRequestInfo | $.VarRef<__goscript_common.CertificateRequestInfo> | null = new __goscript_common.CertificateRequestInfo({AcceptableCAs: (certReq$ as __goscript_handshake_messages.certificateRequestMsg).certificateAuthorities, Version: vers, ctx: ctx})
	let cri$: __goscript_common.CertificateRequestInfo = cri == null ? $.pointerTarget<__goscript_common.CertificateRequestInfo>(cri) : (cri as any).__isVarRef === true ? (cri as any).value : (cri as any).__goValue === undefined ? (cri as any) : $.pointerTarget<__goscript_common.CertificateRequestInfo>(cri)

	let rsaAvail: boolean = false
	let ecAvail: boolean = false
	for (let __goscriptRangeTarget2 = (certReq$ as __goscript_handshake_messages.certificateRequestMsg).certificateTypes, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let certType = $.uint((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as number), 8)
		switch (certType) {
			case 1:
			{
				rsaAvail = true
				break
			}
			case 64:
			{
				ecAvail = true
				break
			}
		}
	}

	if (!(certReq$ as __goscript_handshake_messages.certificateRequestMsg).hasSignatureAlgorithm) {
		// Prior to TLS 1.2, signature schemes did not exist. In this case we
		// make up a list based on the acceptable certificate types, to help
		// GetClientCertificate and SupportsCertificate select the right certificate.
		// The hash part of the SignatureScheme is a lie here, because
		// TLS 1.0 and 1.1 always use MD5+SHA1 for RSA and SHA1 for ECDSA.
		switch ((true as boolean)) {
			case rsaAvail && ecAvail:
			{
				;(cri$ as __goscript_common.CertificateRequestInfo).SignatureSchemes = $.arrayToSlice<__goscript_common.SignatureScheme>([1027, 1283, 1539, 1025, 1281, 1537, 513])
				break
			}
			case rsaAvail:
			{
				;(cri$ as __goscript_common.CertificateRequestInfo).SignatureSchemes = $.arrayToSlice<__goscript_common.SignatureScheme>([1025, 1281, 1537, 513])
				break
			}
			case ecAvail:
			{
				;(cri$ as __goscript_common.CertificateRequestInfo).SignatureSchemes = $.arrayToSlice<__goscript_common.SignatureScheme>([1027, 1283, 1539])
				break
			}
		}
		return cri
	}

	// Filter the signature schemes based on the certificate types.
	// See RFC 5246, Section 7.4.4 (where it calls this "somewhat complicated").
	;(cri$ as __goscript_common.CertificateRequestInfo).SignatureSchemes = $.makeSlice<__goscript_common.SignatureScheme>(0, $.sliceLen((certReq$ as __goscript_handshake_messages.certificateRequestMsg).supportedSignatureAlgorithms), "number")
	for (let __goscriptRangeTarget3 = (certReq$ as __goscript_handshake_messages.certificateRequestMsg).supportedSignatureAlgorithms, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let sigScheme = $.uint((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_common.SignatureScheme), 16)
		let [sigType, , err] = __goscript_auth.typeAndHashFromSignatureScheme(sigScheme)
		if (err != null) {
			continue
		}
		switch (sigType) {
			case 227:
			case 228:
			{
				if (ecAvail) {
					;(cri$ as __goscript_common.CertificateRequestInfo).SignatureSchemes = $.appendOne((cri$ as __goscript_common.CertificateRequestInfo).SignatureSchemes, $.uint(sigScheme, 16))
				}
				break
			}
			case 226:
			case 225:
			{
				if (rsaAvail) {
					;(cri$ as __goscript_common.CertificateRequestInfo).SignatureSchemes = $.appendOne((cri$ as __goscript_common.CertificateRequestInfo).SignatureSchemes, $.uint(sigScheme, 16))
				}
				break
			}
		}
	}

	return cri
}

export function hostnameInSNI(name: string): string {
	let host = name
	if ((($.stringLen(host) > 0) && ($.indexString(host, 0) == 91)) && ($.indexString(host, $.stringLen(host) - 1) == 93)) {
		host = $.sliceStringOrBytes(host, 1, $.stringLen(host) - 1)
	}
	{
		let i: number = strings.LastIndex(host, "%")
		if (i > 0) {
			host = $.sliceStringOrBytes(host, undefined, i)
		}
	}
	if (net.ParseIP(host) != null) {
		return ""
	}
	while (($.stringLen(name) > 0) && ($.indexString(name, $.stringLen(name) - 1) == 46)) {
		name = $.sliceStringOrBytes(name, undefined, $.stringLen(name) - 1)
	}
	return name
}

export async function computeAndUpdatePSK(m: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, binderKey: $.Slice<number>, transcript: hash.Hash | null, finishedHash: ((_p0: $.Slice<number>, _p1: hash.Hash | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null): globalThis.Promise<$.GoError> {
	let __goscriptTuple18: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as __goscript_handshake_messages.clientHelloMsg).marshalWithoutBinders() : __goscript_handshake_messages.clientHelloMsg.prototype.marshalWithoutBinders.call(m))
	let helloBytes: $.Slice<number> = __goscriptTuple18[0]
	let err = __goscriptTuple18[1]
	if (err != null) {
		return err
	}
	await (transcript !== null && (transcript as any).__isVarRef !== true && (transcript as any).__goValue === undefined ? (transcript as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(transcript)).Write(helloBytes)
	let pskBinders: $.Slice<$.Slice<number>> = $.arrayToSlice<$.Slice<number>>([((__goscriptAwait = finishedHash!(binderKey, transcript), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)])
	return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as __goscript_handshake_messages.clientHelloMsg).updateBinders(pskBinders) : __goscript_handshake_messages.clientHelloMsg.prototype.updateBinders.call(m, pskBinders))
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
