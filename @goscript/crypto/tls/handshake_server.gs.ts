// Generated file based on handshake_server.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as ecdsa from "@goscript/crypto/ecdsa/index.js"

import * as ed25519 from "@goscript/crypto/ed25519/index.js"

import * as mldsa from "@goscript/crypto/mldsa/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"

import * as subtle from "@goscript/crypto/subtle/index.js"

import * as fips140tls from "@goscript/crypto/tls/internal/fips140tls/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as hash from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import * as bytes from "@goscript/bytes/index.js"

import type * as cipher from "@goscript/crypto/cipher/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as hpke from "@goscript/crypto/hpke/index.js"

import * as tls13 from "@goscript/crypto/internal/fips140/tls13/index.js"

import * as godebug from "@goscript/internal/godebug/index.js"

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

import * as __goscript_ech from "./ech.gs.ts"

import * as __goscript_handshake_client from "./handshake_client.gs.ts"

import * as __goscript_handshake_client_tls13 from "./handshake_client_tls13.gs.ts"

import * as __goscript_handshake_messages from "./handshake_messages.gs.ts"

import * as __goscript_handshake_server_tls13 from "./handshake_server_tls13.gs.ts"

import * as __goscript_key_agreement from "./key_agreement.gs.ts"

import * as __goscript_key_schedule from "./key_schedule.gs.ts"

import * as __goscript_prf from "./prf.gs.ts"

import * as __goscript_quic from "./quic.gs.ts"

import * as __goscript_ticket from "./ticket.gs.ts"
import "@goscript/context/index.js"
import "@goscript/crypto/index.js"
import "@goscript/crypto/ecdsa/index.js"
import "@goscript/crypto/ed25519/index.js"
import "@goscript/crypto/mldsa/index.js"
import "@goscript/crypto/rsa/index.js"
import "@goscript/crypto/subtle/index.js"
import "@goscript/crypto/tls/internal/fips140tls/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"
import "@goscript/time/index.js"
import "@goscript/bytes/index.js"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/crypto/hpke/index.js"
import "@goscript/crypto/internal/fips140/tls13/index.js"
import "@goscript/internal/godebug/index.js"
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
import "./ech.gs.ts"
import "./handshake_client.gs.ts"
import "./handshake_client_tls13.gs.ts"
import "./handshake_messages.gs.ts"
import "./handshake_server_tls13.gs.ts"
import "./key_agreement.gs.ts"
import "./key_schedule.gs.ts"
import "./prf.gs.ts"
import "./quic.gs.ts"
import "./ticket.gs.ts"

$.registerTypePackagePath("crypto/tls", ["tls.serverHandshakeState"])

export class serverHandshakeState {
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

	public get suite(): __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null {
		return this._fields.suite
	}

	public set suite(value: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null) {
		this._fields.suite = value
	}

	public get ecdheOk(): boolean {
		return this._fields.ecdheOk
	}

	public set ecdheOk(value: boolean) {
		this._fields.ecdheOk = value
	}

	public get ecSignOk(): boolean {
		return this._fields.ecSignOk
	}

	public set ecSignOk(value: boolean) {
		this._fields.ecSignOk = value
	}

	public get rsaDecryptOk(): boolean {
		return this._fields.rsaDecryptOk
	}

	public set rsaDecryptOk(value: boolean) {
		this._fields.rsaDecryptOk = value
	}

	public get rsaSignOk(): boolean {
		return this._fields.rsaSignOk
	}

	public set rsaSignOk(value: boolean) {
		this._fields.rsaSignOk = value
	}

	public get sessionState(): __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null {
		return this._fields.sessionState
	}

	public set sessionState(value: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null) {
		this._fields.sessionState = value
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

	public get cert(): __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null {
		return this._fields.cert
	}

	public set cert(value: __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null) {
		this._fields.cert = value
	}

	public _fields: {
		c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null
		ctx: context.Context | null
		clientHello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null
		hello: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null
		suite: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null
		ecdheOk: boolean
		ecSignOk: boolean
		rsaDecryptOk: boolean
		rsaSignOk: boolean
		sessionState: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null
		finishedHash: __goscript_prf.finishedHash
		masterSecret: $.Slice<number>
		cert: __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null
	}

	constructor(init?: Partial<{c?: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null, ctx?: context.Context | null, clientHello?: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null, hello?: __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null, suite?: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null, ecdheOk?: boolean, ecSignOk?: boolean, rsaDecryptOk?: boolean, rsaSignOk?: boolean, sessionState?: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null, finishedHash?: __goscript_prf.finishedHash, masterSecret?: $.Slice<number>, cert?: __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			c: init?.c ?? (null! as __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null),
			ctx: init?.ctx ?? (null! as context.Context | null),
			clientHello: init?.clientHello ?? (null! as __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null),
			hello: init?.hello ?? (null! as __goscript_handshake_messages.serverHelloMsg | $.VarRef<__goscript_handshake_messages.serverHelloMsg> | null),
			suite: init?.suite ?? (null! as __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null),
			ecdheOk: init?.ecdheOk ?? (false as boolean),
			ecSignOk: init?.ecSignOk ?? (false as boolean),
			rsaDecryptOk: init?.rsaDecryptOk ?? (false as boolean),
			rsaSignOk: init?.rsaSignOk ?? (false as boolean),
			sessionState: init?.sessionState ?? (null! as __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null),
			finishedHash: init?.finishedHash ? init.finishedHash.clone() : new __goscript_prf.finishedHash(undefined, true),
			masterSecret: init?.masterSecret ?? (null! as $.Slice<number>),
			cert: init?.cert ?? (null! as __goscript_common.Certificate | $.VarRef<__goscript_common.Certificate> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): serverHandshakeState {
		return new serverHandshakeState(this, true)
	}

	public __goscriptAssign(source: serverHandshakeState): void {
		const target = this._fields
		const values = source._fields
		target.c = values.c
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.clientHello = values.clientHello
		target.hello = values.hello
		target.suite = values.suite
		target.ecdheOk = values.ecdheOk
		target.ecSignOk = values.ecSignOk
		target.rsaDecryptOk = values.rsaDecryptOk
		target.rsaSignOk = values.rsaSignOk
		target.sessionState = values.sessionState
		$.assignStruct(target.finishedHash, values.finishedHash)
		target.masterSecret = values.masterSecret
		target.cert = values.cert
	}

	public async checkForResumption(): globalThis.Promise<$.GoError> {
		let hs: serverHandshakeState | $.VarRef<serverHandshakeState> | null = this;
		const hs$: serverHandshakeState = hs == null ? $.pointerTarget<serverHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeState>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeState).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		if ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).SessionTicketsDisabled) {
			return null
		}

		let sessionState: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null = null! as __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null
		if ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).UnwrapSession != null) {
			let __goscriptTuple0: any = await $.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).UnwrapSession!($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).sessionTicket, (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).connectionStateLocked() : __goscript_conn.Conn.prototype.connectionStateLocked.call(c)))
			let ss: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null = __goscriptTuple0[0]
			let err = __goscriptTuple0[1]
			if (err != null) {
				return err
			}
			if (ss == null) {
				return null
			}
			sessionState = ss
		} else {
			let plaintext: $.Slice<number> = await __goscript_common.Config.prototype.decryptTicket.call((c$ as __goscript_conn.Conn).config, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).sessionTicket, (c$ as __goscript_conn.Conn).ticketKeys)
			if (plaintext == null) {
				return null
			}
			let __goscriptTuple1: any = await __goscript_ticket.ParseSessionState(plaintext)
			let ss: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null = __goscriptTuple1[0]
			let err = __goscriptTuple1[1]
			if (err != null) {
				return null
			}
			sessionState = ss
		}

		// TLS 1.2 tickets don't natively have a lifetime, but we want to avoid
		// re-wrapping the same master secret in different tickets over and over for
		// too long, weakening forward secrecy.
		let createdAt = $.markAsStructValue($.cloneStructValue(time.Unix($.int64($.pointerValue<__goscript_ticket.SessionState>(sessionState).createdAt), 0n)))
		if ($.markAsStructValue($.cloneStructValue((await __goscript_common.Config.prototype.time.call((c$ as __goscript_conn.Conn).config)))).Sub($.markAsStructValue($.cloneStructValue(createdAt))) > 604800000000000n) {
			return null
		}

		// Never resume a session for a different TLS version.
		if ((c$ as __goscript_conn.Conn).vers != $.pointerValue<__goscript_ticket.SessionState>(sessionState).version) {
			return null
		}

		let cipherSuiteOk = false
		// Check that the client is still offering the ciphersuite in the session.
		for (let __goscriptRangeTarget0 = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).cipherSuites, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let id = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 16)
			if (id == $.pointerValue<__goscript_ticket.SessionState>(sessionState).cipherSuite) {
				cipherSuiteOk = true
				break
			}
		}
		if (!cipherSuiteOk) {
			return null
		}

		// Check that we also support the ciphersuite from the session.
		let suite: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null = await __goscript_cipher_suites.selectCipherSuite($.arrayToSlice<number>([$.pointerValue<__goscript_ticket.SessionState>(sessionState).cipherSuite]), __goscript_common.Config.prototype.supportedCipherSuites.call((c$ as __goscript_conn.Conn).config), $.functionValue(((__receiver) => (c: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null) => __receiver.cipherSuiteOk(c))((hs$ as serverHandshakeState)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tls.cipherSuite")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo), "crypto/tls.(*serverHandshakeState).cipherSuiteOk-fm"))
		if (suite == null) {
			return null
		}

		let sessionHasClientCerts = $.sliceLen($.pointerValue<__goscript_ticket.SessionState>(sessionState).peerCertificates) != 0
		let needClientCerts = __goscript_common.requiresClientCert($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ClientAuth)
		if (needClientCerts && !sessionHasClientCerts) {
			return null
		}
		if (sessionHasClientCerts && ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ClientAuth == 0)) {
			return null
		}
		if (sessionHasClientCerts && $.markAsStructValue($.cloneStructValue((await __goscript_common.Config.prototype.time.call((c$ as __goscript_conn.Conn).config)))).After($.markAsStructValue($.cloneStructValue($.pointerValue<x509.Certificate>($.arrayIndex($.pointerValue<__goscript_ticket.SessionState>(sessionState).peerCertificates!, 0)).NotAfter)))) {
			return null
		}
		let opts = (await (async () => { const __goscriptLiteralField0 = await __goscript_common.Config.prototype.time.call((c$ as __goscript_conn.Conn).config); return new x509.VerifyOptions({CurrentTime: __goscriptLiteralField0, Roots: $.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ClientCAs, KeyUsages: $.arrayToSlice<x509.ExtKeyUsage>([2])}, true) })())
		if ((sessionHasClientCerts && ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ClientAuth >= 3)) && !await __goscript_common.anyValidVerifiedChain($.pointerValue<__goscript_ticket.SessionState>(sessionState).verifiedChains, (opts).clone())) {
			return null
		}

		// RFC 7627, Section 5.3
		if (!$.pointerValue<__goscript_ticket.SessionState>(sessionState).extMasterSecret && $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).extendedMasterSecret) {
			return null
		}
		if ($.pointerValue<__goscript_ticket.SessionState>(sessionState).extMasterSecret && !$.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).extendedMasterSecret) {
			// Aborting is somewhat harsh, but it's a MUST and it would indicate a
			// weird downgrade in client capabilities.
			return errors.New("tls: session supported extended_master_secret but client does not")
		}
		if (!$.pointerValue<__goscript_ticket.SessionState>(sessionState).extMasterSecret && fips140tls.Required()) {
			if (!$.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(__goscript_handshake_client.fips140ems)), "0")) {
				// FIPS 140-3 requires the use of Extended Master Secret.
				return null
			}
			godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(__goscript_handshake_client.fips140ems))
		}

		;(c$ as __goscript_conn.Conn).peerCertificates = $.pointerValue<__goscript_ticket.SessionState>(sessionState).peerCertificates;
		;(c$ as __goscript_conn.Conn).ocspResponse = $.pointerValue<__goscript_ticket.SessionState>(sessionState).ocspResponse;
		;(c$ as __goscript_conn.Conn).scts = $.pointerValue<__goscript_ticket.SessionState>(sessionState).scts;
		;(c$ as __goscript_conn.Conn).verifiedChains = $.pointerValue<__goscript_ticket.SessionState>(sessionState).verifiedChains;
		;(c$ as __goscript_conn.Conn).extMasterSecret = $.pointerValue<__goscript_ticket.SessionState>(sessionState).extMasterSecret;
		;(hs$ as serverHandshakeState).sessionState = sessionState;
		;(hs$ as serverHandshakeState).suite = suite;
		;(c$ as __goscript_conn.Conn).curveID = $.pointerValue<__goscript_ticket.SessionState>(sessionState).curveID;
		;(c$ as __goscript_conn.Conn).didResume = true
		return null
	}

	public cipherSuiteOk(c: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null): boolean {
		const hs: serverHandshakeState | $.VarRef<serverHandshakeState> | null = this;
		const hs$: serverHandshakeState = hs == null ? $.pointerTarget<serverHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeState>(hs)
		const c$: __goscript_cipher_suites.cipherSuite = c == null ? $.pointerTarget<__goscript_cipher_suites.cipherSuite>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_cipher_suites.cipherSuite>(c)
		if (((c$ as __goscript_cipher_suites.cipherSuite).flags & 1) != 0) {
			if (!(hs$ as serverHandshakeState).ecdheOk) {
				return false
			}
			if (((c$ as __goscript_cipher_suites.cipherSuite).flags & 2) != 0) {
				if (!(hs$ as serverHandshakeState).ecSignOk) {
					return false
				}
			} else {
				if (!(hs$ as serverHandshakeState).rsaSignOk) {
					return false
				}
			}
		} else {
			if (!(hs$ as serverHandshakeState).rsaDecryptOk) {
				return false
			}
		}
		if (($.pointerValue<__goscript_conn.Conn>((hs$ as serverHandshakeState).c).vers < 771) && (((c$ as __goscript_cipher_suites.cipherSuite).flags & 4) != 0)) {
			return false
		}
		return true
	}

	public async doFullHandshake(): globalThis.Promise<$.GoError> {
		let hs: serverHandshakeState | $.VarRef<serverHandshakeState> | null = this;
		const hs$: serverHandshakeState = hs == null ? $.pointerTarget<serverHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeState>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeState).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		if ($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).ocspStapling && ($.sliceLen($.pointerValue<__goscript_common.Certificate>((hs$ as serverHandshakeState).cert).OCSPStaple) > 0)) {
			$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).ocspStapling = true
		}

		if (!$.stringEqual($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).serverName, "")) {
			$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).serverNameAck = true
		}

		$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).ticketSupported = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).ticketSupported && !$.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).SessionTicketsDisabled
		$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).cipherSuite = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as serverHandshakeState).suite).id

		$.assignStruct((hs$ as serverHandshakeState).finishedHash, await __goscript_prf.newFinishedHash($.pointerValue<__goscript_conn.Conn>((hs$ as serverHandshakeState).c).vers, (hs$ as serverHandshakeState).suite))
		if ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ClientAuth == 0) {
			// No need to keep a full record of the handshake if client
			// certificates won't be used.
			void (hs$ as serverHandshakeState).finishedHash.discardHandshakeBuffer()
		}
		{
			let err = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>((hs$ as serverHandshakeState).clientHello, "*tls.clientHelloMsg", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as serverHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
			if (err != null) {
				return err
			}
		}
		{
			let [, err] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as serverHandshakeState).c, $.interfaceValue<__goscript_common.handshakeMessage | null>((hs$ as serverHandshakeState).hello, "*tls.serverHelloMsg", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as serverHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
			if (err != null) {
				return err
			}
		}

		let certMsg: __goscript_handshake_messages.certificateMsg | $.VarRef<__goscript_handshake_messages.certificateMsg> | null = new __goscript_handshake_messages.certificateMsg()
		$.pointerValue<__goscript_handshake_messages.certificateMsg>(certMsg).certificates = $.pointerValue<__goscript_common.Certificate>((hs$ as serverHandshakeState).cert).Certificate;
		// Set localCertificate here, rather than at certificate selection time, so
		// that it is only populated when a certificate is actually presented to the
		// peer, and not on resumed connections.
		;(c$ as __goscript_conn.Conn).localCertificate = $.pointerValue<__goscript_common.Certificate>((hs$ as serverHandshakeState).cert).Certificate
		{
			let [, err] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as serverHandshakeState).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(certMsg, "*tls.certificateMsg", /* @__PURE__ */ $.pointerType("tls.certificateMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as serverHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
			if (err != null) {
				return err
			}
		}

		if ($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).ocspStapling) {
			let certStatus: __goscript_handshake_messages.certificateStatusMsg | $.VarRef<__goscript_handshake_messages.certificateStatusMsg> | null = new __goscript_handshake_messages.certificateStatusMsg()
			$.pointerValue<__goscript_handshake_messages.certificateStatusMsg>(certStatus).response = $.pointerValue<__goscript_common.Certificate>((hs$ as serverHandshakeState).cert).OCSPStaple
			{
				let [, err] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as serverHandshakeState).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(certStatus, "*tls.certificateStatusMsg", /* @__PURE__ */ $.pointerType("tls.certificateStatusMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as serverHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
				if (err != null) {
					return err
				}
			}
		}

		let __goscriptShadow0 = (__goscriptAwait = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as serverHandshakeState).suite).ka!((c$ as __goscript_conn.Conn).vers), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let __goscriptTuple2: any = await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<__goscript_key_agreement.keyAgreement, null>) : $.pointerValue<Exclude<__goscript_key_agreement.keyAgreement, null>>(__goscriptShadow0)).generateServerKeyExchange((c$ as __goscript_conn.Conn).config, (hs$ as serverHandshakeState).cert, (hs$ as serverHandshakeState).clientHello, (hs$ as serverHandshakeState).hello)
		let skx: __goscript_handshake_messages.serverKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.serverKeyExchangeMsg> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
			return err
		}
		if (skx != null) {
			let __goscriptShadow1 = __goscriptShadow0
			{
				let __goscriptTuple3: any = $.typeAssertTuple<__goscript_key_agreement.ecdheKeyAgreement | $.VarRef<__goscript_key_agreement.ecdheKeyAgreement> | null>(__goscriptShadow1, /* @__PURE__ */ $.pointerType("tls.ecdheKeyAgreement"))
				let __goscriptShadow2: __goscript_key_agreement.ecdheKeyAgreement | $.VarRef<__goscript_key_agreement.ecdheKeyAgreement> | null = __goscriptTuple3[0]
				let ok = __goscriptTuple3[1]
				if (ok) {
					;(c$ as __goscript_conn.Conn).curveID = $.pointerValue<__goscript_key_agreement.ecdheKeyAgreement>(__goscriptShadow2).curveID;
					;(c$ as __goscript_conn.Conn).peerSigAlg = $.pointerValue<__goscript_key_agreement.ecdheKeyAgreement>(__goscriptShadow2).signatureAlgorithm
				}
			}
			{
				let [, __goscriptShadow3] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as serverHandshakeState).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(skx, "*tls.serverKeyExchangeMsg", /* @__PURE__ */ $.pointerType("tls.serverKeyExchangeMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as serverHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
				if (__goscriptShadow3 != null) {
					return __goscriptShadow3
				}
			}
		}

		let certReq: __goscript_handshake_messages.certificateRequestMsg | $.VarRef<__goscript_handshake_messages.certificateRequestMsg> | null = null! as __goscript_handshake_messages.certificateRequestMsg | $.VarRef<__goscript_handshake_messages.certificateRequestMsg> | null
		if ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ClientAuth >= 1) {
			// Request a client certificate
			certReq = new __goscript_handshake_messages.certificateRequestMsg()
			$.pointerValue<__goscript_handshake_messages.certificateRequestMsg>(certReq).certificateTypes = new Uint8Array([1, 64]) as $.Slice<number>
			if ((c$ as __goscript_conn.Conn).vers >= 771) {
				$.pointerValue<__goscript_handshake_messages.certificateRequestMsg>(certReq).hasSignatureAlgorithm = true
				$.pointerValue<__goscript_handshake_messages.certificateRequestMsg>(certReq).supportedSignatureAlgorithms = __goscript_common.supportedSignatureAlgorithms((c$ as __goscript_conn.Conn).vers, (c$ as __goscript_conn.Conn).vers)
			}

			// An empty list of certificateAuthorities signals to
			// the client that it may send any certificate in response
			// to our request. When we know the CAs we trust, then
			// we can send them down, so that the client can choose
			// an appropriate certificate to give to us.
			if ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ClientCAs != null) {
				$.pointerValue<__goscript_handshake_messages.certificateRequestMsg>(certReq).certificateAuthorities = x509.CertPool.prototype.Subjects.call($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ClientCAs)
			}
			{
				let [, __goscriptShadow4] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as serverHandshakeState).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(certReq, "*tls.certificateRequestMsg", /* @__PURE__ */ $.pointerType("tls.certificateRequestMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as serverHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
				if (__goscriptShadow4 != null) {
					return __goscriptShadow4
				}
			}
		}

		let helloDone: __goscript_handshake_messages.serverHelloDoneMsg | $.VarRef<__goscript_handshake_messages.serverHelloDoneMsg> | null = new __goscript_handshake_messages.serverHelloDoneMsg()
		{
			let [, __goscriptShadow5] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as serverHandshakeState).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(helloDone, "*tls.serverHelloDoneMsg", /* @__PURE__ */ $.pointerType("tls.serverHelloDoneMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as serverHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
			if (__goscriptShadow5 != null) {
				return __goscriptShadow5
			}
		}

		{
			let [, __goscriptShadow6] = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).flush() : __goscript_conn.Conn.prototype.flush.call(c))
			if (__goscriptShadow6 != null) {
				return __goscriptShadow6
			}
		}

		let pub: crypto.PublicKey | null = null! as crypto.PublicKey | null

		let __goscriptTuple4: any = await __goscript_conn.Conn.prototype.readHandshake.call(c, $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as serverHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
		let msg = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return err
		}

		// If we requested a client certificate, then the client must send a
		// certificate message, even if it's empty.
		if ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ClientAuth >= 1) {
			let __goscriptTuple5: any = $.typeAssertTuple<__goscript_handshake_messages.certificateMsg | $.VarRef<__goscript_handshake_messages.certificateMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.certificateMsg"))
			let __goscriptShadow7: __goscript_handshake_messages.certificateMsg | $.VarRef<__goscript_handshake_messages.certificateMsg> | null = __goscriptTuple5[0]
			let ok = __goscriptTuple5[1]
			if (!ok) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
				return __goscript_common.unexpectedMessageError($.interfaceValue(__goscriptShadow7, "*tls.certificateMsg", /* @__PURE__ */ $.pointerType("tls.certificateMsg")), msg)
			}

			{
				let __goscriptShadow8 = await __goscript_conn.Conn.prototype.processCertsFromClient.call(c, new __goscript_common.Certificate({Certificate: $.pointerValue<__goscript_handshake_messages.certificateMsg>(__goscriptShadow7).certificates}, true))
				if (__goscriptShadow8 != null) {
					return __goscriptShadow8
				}
			}
			if ($.sliceLen($.pointerValue<__goscript_handshake_messages.certificateMsg>(__goscriptShadow7).certificates) != 0) {
				pub = ($.pointerValue<x509.Certificate>($.arrayIndex((c$ as __goscript_conn.Conn).peerCertificates!, 0)).PublicKey as crypto.PublicKey | null)
			}

			let __goscriptTuple6: any = await __goscript_conn.Conn.prototype.readHandshake.call(c, $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as serverHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
			msg = __goscriptTuple6[0]
			err = __goscriptTuple6[1]
			if (err != null) {
				return err
			}
		}
		if ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).VerifyConnection != null) {
			{
				let __goscriptShadow9 = (__goscriptAwait = $.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).VerifyConnection!((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).connectionStateLocked() : __goscript_conn.Conn.prototype.connectionStateLocked.call(c))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow9 != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(42) : __goscript_conn.Conn.prototype.sendAlert.call(c, 42))
					return __goscriptShadow9
				}
			}
		}

		// Get client key exchange
		let __goscriptTuple7: any = $.typeAssertTuple<__goscript_handshake_messages.clientKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.clientKeyExchangeMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.clientKeyExchangeMsg"))
		let ckx: __goscript_handshake_messages.clientKeyExchangeMsg | $.VarRef<__goscript_handshake_messages.clientKeyExchangeMsg> | null = __goscriptTuple7[0]
		let ok = __goscriptTuple7[1]
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
			return __goscript_common.unexpectedMessageError($.interfaceValue(ckx, "*tls.clientKeyExchangeMsg", /* @__PURE__ */ $.pointerType("tls.clientKeyExchangeMsg")), msg)
		}

		let __goscriptTuple8: any = await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<__goscript_key_agreement.keyAgreement, null>) : $.pointerValue<Exclude<__goscript_key_agreement.keyAgreement, null>>(__goscriptShadow0)).processClientKeyExchange((c$ as __goscript_conn.Conn).config, (hs$ as serverHandshakeState).cert, ckx, (c$ as __goscript_conn.Conn).vers)
		let preMasterSecret: $.Slice<number> = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return err
		}
		if ($.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).extendedMasterSecret) {
			;(c$ as __goscript_conn.Conn).extMasterSecret = true;
			;(hs$ as serverHandshakeState).masterSecret = await __goscript_prf.extMasterFromPreMasterSecret((c$ as __goscript_conn.Conn).vers, (hs$ as serverHandshakeState).suite, preMasterSecret, await $.markAsStructValue($.cloneStructValue((hs$ as serverHandshakeState).finishedHash)).Sum())
		} else {
			if (fips140tls.Required()) {
				if (!$.stringEqual(godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(__goscript_handshake_client.fips140ems)), "0")) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
					return errors.New("tls: FIPS 140-3 requires the use of Extended Master Secret")
				}
				godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(__goscript_handshake_client.fips140ems))
			}
			;(hs$ as serverHandshakeState).masterSecret = await __goscript_prf.masterFromPreMasterSecret((c$ as __goscript_conn.Conn).vers, (hs$ as serverHandshakeState).suite, preMasterSecret, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).random, $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).random)
		}
		{
			let __goscriptShadow10 = await __goscript_common.Config.prototype.writeKeyLog.call((c$ as __goscript_conn.Conn).config, "CLIENT_RANDOM", $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).random, (hs$ as serverHandshakeState).masterSecret)
			if (__goscriptShadow10 != null) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
				return __goscriptShadow10
			}
		}

		// If we received a client cert in response to our certificate request message,
		// the client will send us a certificateVerifyMsg immediately after the
		// clientKeyExchangeMsg. This message is a digest of all preceding
		// handshake-layer messages that is signed using the private key corresponding
		// to the client's certificate. This allows us to verify that the client is in
		// possession of the private key of the certificate.
		if ($.sliceLen((c$ as __goscript_conn.Conn).peerCertificates) > 0) {
			// certificateVerifyMsg is included in the transcript, but not until
			// after we verify the handshake signature, since the state before
			// this message was sent is used.
			let __goscriptTuple9: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).readHandshake(null) : __goscript_conn.Conn.prototype.readHandshake.call(c, null))
			msg = __goscriptTuple9[0]
			err = __goscriptTuple9[1]
			if (err != null) {
				return err
			}
			let __goscriptTuple10: any = $.typeAssertTuple<__goscript_handshake_messages.certificateVerifyMsg | $.VarRef<__goscript_handshake_messages.certificateVerifyMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.certificateVerifyMsg"))
			let certVerify: __goscript_handshake_messages.certificateVerifyMsg | $.VarRef<__goscript_handshake_messages.certificateVerifyMsg> | null = __goscriptTuple10[0]
			let __goscriptShadow11 = __goscriptTuple10[1]
			let certVerify$: __goscript_handshake_messages.certificateVerifyMsg = certVerify == null ? $.pointerTarget<__goscript_handshake_messages.certificateVerifyMsg>(certVerify) : (certVerify as any).__isVarRef === true ? (certVerify as any).value : (certVerify as any).__goValue === undefined ? (certVerify as any) : $.pointerTarget<__goscript_handshake_messages.certificateVerifyMsg>(certVerify)
			if (!__goscriptShadow11) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
				return __goscript_common.unexpectedMessageError($.interfaceValue(certVerify, "*tls.certificateVerifyMsg", /* @__PURE__ */ $.pointerType("tls.certificateVerifyMsg")), msg)
			}

			let sigType: number = 0
			let sigHash: crypto.Hash = 0
			if ((c$ as __goscript_conn.Conn).vers >= 771) {
				if (!__goscript_common.isSupportedSignatureAlgorithm((certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signatureAlgorithm, $.pointerValue<__goscript_handshake_messages.certificateRequestMsg>(certReq).supportedSignatureAlgorithms)) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
					return errors.New("tls: client certificate used with invalid signature algorithm")
				}
				let __goscriptTuple11: any = __goscript_auth.typeAndHashFromSignatureScheme((certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signatureAlgorithm)
				sigType = __goscriptTuple11[0]
				sigHash = __goscriptTuple11[1]
				err = __goscriptTuple11[2]
				if (err != null) {
					return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
				}
				if (sigHash == 3) {
					godebug.Setting.prototype.Value.call($.pointerValue<godebug.Setting>(__goscript_common.tlssha1))
					godebug.Setting.prototype.IncNonDefault.call($.pointerValue<godebug.Setting>(__goscript_common.tlssha1))
				}
				if ((hs$ as serverHandshakeState).finishedHash.buffer == null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
					return errors.New("tls: internal error: did not keep handshake transcript for TLS 1.2")
				}
				{
					let __goscriptShadow12 = await __goscript_auth.verifyHandshakeSignature(sigType, pub, sigHash, (hs$ as serverHandshakeState).finishedHash.buffer, (certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signature)
					if (__goscriptShadow12 != null) {
						await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(51) : __goscript_conn.Conn.prototype.sendAlert.call(c, 51))
						return errors.New($.concatString("tls: invalid signature by the client certificate: ", (__goscriptAwait = (__goscriptShadow12 !== null && (__goscriptShadow12 as any).__isVarRef !== true && (__goscriptShadow12 as any).__goValue === undefined ? (__goscriptShadow12 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow12)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
					}
				}
			} else {
				let __goscriptTuple12: any = __goscript_auth.legacyTypeAndHashFromPublicKey(pub)
				sigType = __goscriptTuple12[0]
				sigHash = __goscriptTuple12[1]
				err = __goscriptTuple12[2]
				if (err != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
					return err
				}
				let signed: $.Slice<number> = await $.markAsStructValue($.cloneStructValue((hs$ as serverHandshakeState).finishedHash)).hashForClientCertificate(sigType)
				{
					let __goscriptShadow13 = await __goscript_auth.verifyLegacyHandshakeSignature(sigType, pub, sigHash, signed, (certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signature)
					if (__goscriptShadow13 != null) {
						await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(51) : __goscript_conn.Conn.prototype.sendAlert.call(c, 51))
						return errors.New($.concatString("tls: invalid signature by the client certificate: ", (__goscriptAwait = (__goscriptShadow13 !== null && (__goscriptShadow13 as any).__isVarRef !== true && (__goscriptShadow13 as any).__goValue === undefined ? (__goscriptShadow13 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow13)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
					}
				}
			}

			;(c$ as __goscript_conn.Conn).peerSigAlg = (certVerify$ as __goscript_handshake_messages.certificateVerifyMsg).signatureAlgorithm

			{
				let __goscriptShadow14 = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>(certVerify, "*tls.certificateVerifyMsg", /* @__PURE__ */ $.pointerType("tls.certificateVerifyMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as serverHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
				if (__goscriptShadow14 != null) {
					return __goscriptShadow14
				}
			}
		}

		void (hs$ as serverHandshakeState).finishedHash.discardHandshakeBuffer()

		return null
	}

	public async doResumeHandshake(): globalThis.Promise<$.GoError> {
		let hs: serverHandshakeState | $.VarRef<serverHandshakeState> | null = this;
		const hs$: serverHandshakeState = hs == null ? $.pointerTarget<serverHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeState>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeState).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).cipherSuite = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as serverHandshakeState).suite).id;
		;(c$ as __goscript_conn.Conn).cipherSuite = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as serverHandshakeState).suite).id
		// We echo the client's session ID in the ServerHello to let it know
		// that we're doing a resumption.
		$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).sessionId = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).sessionId
		// We always send a new session ticket, even if it wraps the same master
		// secret and it's potentially encrypted with the same key, to help the
		// client avoid cross-connection tracking from a network observer.
		$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).ticketSupported = true
		$.assignStruct((hs$ as serverHandshakeState).finishedHash, await __goscript_prf.newFinishedHash((c$ as __goscript_conn.Conn).vers, (hs$ as serverHandshakeState).suite))
		void (hs$ as serverHandshakeState).finishedHash.discardHandshakeBuffer()
		{
			let err = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>((hs$ as serverHandshakeState).clientHello, "*tls.clientHelloMsg", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as serverHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
			if (err != null) {
				return err
			}
		}
		{
			let [, err] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as serverHandshakeState).c, $.interfaceValue<__goscript_common.handshakeMessage | null>((hs$ as serverHandshakeState).hello, "*tls.serverHelloMsg", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as serverHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
			if (err != null) {
				return err
			}
		}

		if ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).VerifyConnection != null) {
			{
				let err = (__goscriptAwait = $.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).VerifyConnection!((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).connectionStateLocked() : __goscript_conn.Conn.prototype.connectionStateLocked.call(c))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(42) : __goscript_conn.Conn.prototype.sendAlert.call(c, 42))
					return err
				}
			}
		}

		;(hs$ as serverHandshakeState).masterSecret = $.pointerValue<__goscript_ticket.SessionState>((hs$ as serverHandshakeState).sessionState).secret

		return null
	}

	public async establishKeys(): globalThis.Promise<$.GoError> {
		const hs: serverHandshakeState | $.VarRef<serverHandshakeState> | null = this;
		const hs$: serverHandshakeState = hs == null ? $.pointerTarget<serverHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeState>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeState).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		let __goscriptTuple13: any = await __goscript_prf.keysFromMasterSecret((c$ as __goscript_conn.Conn).vers, (hs$ as serverHandshakeState).suite, (hs$ as serverHandshakeState).masterSecret, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).random, $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).random, $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as serverHandshakeState).suite).macLen, $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as serverHandshakeState).suite).keyLen, $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as serverHandshakeState).suite).ivLen)
		let clientMAC: $.Slice<number> = __goscriptTuple13[0]
		let serverMAC: $.Slice<number> = __goscriptTuple13[1]
		let clientKey: $.Slice<number> = __goscriptTuple13[2]
		let serverKey: $.Slice<number> = __goscriptTuple13[3]
		let clientIV: $.Slice<number> = __goscriptTuple13[4]
		let serverIV: $.Slice<number> = __goscriptTuple13[5]

		let clientCipher: any = null! as any
		let serverCipher: any = null! as any
		let clientHash: hash.Hash | null = null! as hash.Hash | null
		let serverHash: hash.Hash | null = null! as hash.Hash | null

		if ($.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as serverHandshakeState).suite).aead == null) {
			clientCipher = (__goscriptAwait = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as serverHandshakeState).suite).cipher!(clientKey, clientIV, true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			clientHash = (__goscriptAwait = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as serverHandshakeState).suite).mac!(clientMAC), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			serverCipher = (__goscriptAwait = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as serverHandshakeState).suite).cipher!(serverKey, serverIV, false), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			serverHash = (__goscriptAwait = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as serverHandshakeState).suite).mac!(serverMAC), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			clientCipher = ((__goscriptAwait = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as serverHandshakeState).suite).aead!(clientKey, clientIV), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)
			serverCipher = ((__goscriptAwait = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as serverHandshakeState).suite).aead!(serverKey, serverIV), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)
		}

		void (c$ as __goscript_conn.Conn)._in.prepareCipherSpec((c$ as __goscript_conn.Conn).vers, clientCipher, clientHash)
		void (c$ as __goscript_conn.Conn).out.prepareCipherSpec((c$ as __goscript_conn.Conn).vers, serverCipher, serverHash)

		return null
	}

	public async handshake(): globalThis.Promise<$.GoError> {
		const hs: serverHandshakeState | $.VarRef<serverHandshakeState> | null = this;
		const hs$: serverHandshakeState = hs == null ? $.pointerTarget<serverHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeState>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeState).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeState).processClientHello() : serverHandshakeState.prototype.processClientHello.call(hs))
			if (err != null) {
				return err
			}
		}

		// For an overview of TLS handshaking, see RFC 5246, Section 7.3.
		;(c$ as __goscript_conn.Conn).buffering = true
		{
			let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeState).checkForResumption() : serverHandshakeState.prototype.checkForResumption.call(hs))
			if (err != null) {
				return err
			}
		}
		if ((hs$ as serverHandshakeState).sessionState != null) {
			// The client has included a session ticket and so we do an abbreviated handshake.
			{
				let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeState).doResumeHandshake() : serverHandshakeState.prototype.doResumeHandshake.call(hs))
				if (err != null) {
					return err
				}
			}
			{
				let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeState).establishKeys() : serverHandshakeState.prototype.establishKeys.call(hs))
				if (err != null) {
					return err
				}
			}
			{
				let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeState).sendSessionTicket() : serverHandshakeState.prototype.sendSessionTicket.call(hs))
				if (err != null) {
					return err
				}
			}
			{
				let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeState).sendFinished($.goSlice((c$ as __goscript_conn.Conn).serverFinished, undefined, undefined)) : serverHandshakeState.prototype.sendFinished.call(hs, $.goSlice((c$ as __goscript_conn.Conn).serverFinished, undefined, undefined)))
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
			;(c$ as __goscript_conn.Conn).clientFinishedIsFirst = false
			{
				let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeState).readFinished(null) : serverHandshakeState.prototype.readFinished.call(hs, null))
				if (err != null) {
					return err
				}
			}
		} else {
			// The client didn't include a session ticket, or it wasn't
			// valid so we do a full handshake.
			{
				let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeState).pickCipherSuite() : serverHandshakeState.prototype.pickCipherSuite.call(hs))
				if (err != null) {
					return err
				}
			}
			{
				let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeState).doFullHandshake() : serverHandshakeState.prototype.doFullHandshake.call(hs))
				if (err != null) {
					return err
				}
			}
			{
				let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeState).establishKeys() : serverHandshakeState.prototype.establishKeys.call(hs))
				if (err != null) {
					return err
				}
			}
			{
				let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeState).readFinished($.goSlice((c$ as __goscript_conn.Conn).clientFinished, undefined, undefined)) : serverHandshakeState.prototype.readFinished.call(hs, $.goSlice((c$ as __goscript_conn.Conn).clientFinished, undefined, undefined)))
				if (err != null) {
					return err
				}
			}
			;(c$ as __goscript_conn.Conn).clientFinishedIsFirst = true;
			;(c$ as __goscript_conn.Conn).buffering = true
			{
				let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeState).sendSessionTicket() : serverHandshakeState.prototype.sendSessionTicket.call(hs))
				if (err != null) {
					return err
				}
			}
			{
				let err = await (hs !== null && (hs as any).__isVarRef !== true && (hs as any).__goValue === undefined ? ((hs as any) as serverHandshakeState).sendFinished(null) : serverHandshakeState.prototype.sendFinished.call(hs, null))
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
		}

		;(c$ as __goscript_conn.Conn).ekm = __goscript_prf.ekmFromMasterSecret((c$ as __goscript_conn.Conn).vers, (hs$ as serverHandshakeState).suite, (hs$ as serverHandshakeState).masterSecret, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).random, $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).random)
		void (c$ as __goscript_conn.Conn).isHandshakeComplete.Store(true)

		return null
	}

	public async pickCipherSuite(): globalThis.Promise<$.GoError> {
		let hs: serverHandshakeState | $.VarRef<serverHandshakeState> | null = this;
		const hs$: serverHandshakeState = hs == null ? $.pointerTarget<serverHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeState>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeState).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)

		let preferenceList: $.Slice<number> = __goscript_common.Config.prototype.cipherSuites.call((c$ as __goscript_conn.Conn).config, __goscript_cipher_suites.isAESGCMPreferred($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).cipherSuites));

		;(hs$ as serverHandshakeState).suite = await __goscript_cipher_suites.selectCipherSuite(preferenceList, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).cipherSuites, $.functionValue(((__receiver) => (c: __goscript_cipher_suites.cipherSuite | $.VarRef<__goscript_cipher_suites.cipherSuite> | null) => __receiver.cipherSuiteOk(c))((hs$ as serverHandshakeState)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tls.cipherSuite")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo), "crypto/tls.(*serverHandshakeState).cipherSuiteOk-fm"))
		if ((hs$ as serverHandshakeState).suite == null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
			return fmt.Errorf("tls: no cipher suite supported by both client and server; client offered: %x", $.interfaceValue($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).cipherSuites, "[]uint16", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16"))))
		}
		;(c$ as __goscript_conn.Conn).cipherSuite = $.pointerValue<__goscript_cipher_suites.cipherSuite>((hs$ as serverHandshakeState).suite).id

		for (let __goscriptRangeTarget1 = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).cipherSuites, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let id = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number), 16)
			if (id == 22016) {
				// The client is doing a fallback connection. See RFC 7507.
				if ($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).vers < __goscript_common.Config.prototype.maxSupportedVersion.call((c$ as __goscript_conn.Conn).config, false, (c$ as __goscript_conn.Conn).quic != null)) {
					await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(86) : __goscript_conn.Conn.prototype.sendAlert.call(c, 86))
					return errors.New("tls: client using inappropriate protocol fallback")
				}
				break
			}
		}

		return null
	}

	public async processClientHello(): globalThis.Promise<$.GoError> {
		let hs: serverHandshakeState | $.VarRef<serverHandshakeState> | null = this;
		const hs$: serverHandshakeState = hs == null ? $.pointerTarget<serverHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeState>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeState).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c);

		;(hs$ as serverHandshakeState).hello = new __goscript_handshake_messages.serverHelloMsg()
		$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).vers = (c$ as __goscript_conn.Conn).vers

		let foundCompression = false
		// We only support null compression, so check that the client offered it.
		for (let __goscriptRangeTarget2 = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).compressionMethods, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let compression = $.uint((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as number), 8)
			if (compression == 0) {
				foundCompression = true
				break
			}
		}

		if (!foundCompression) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(47) : __goscript_conn.Conn.prototype.sendAlert.call(c, 47))
			return errors.New("tls: client does not support uncompressed connections")
		}

		$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).random = $.makeSlice<number>(32, undefined, "byte")
		let serverRandom: $.Slice<number> = $.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).random
		// Downgrade protection canaries. See RFC 8446, Section 4.1.3.
		let maxVers = __goscript_common.Config.prototype.maxSupportedVersion.call((c$ as __goscript_conn.Conn).config, false, (c$ as __goscript_conn.Conn).quic != null)
		if (((maxVers >= 771) && ((c$ as __goscript_conn.Conn).vers < maxVers)) || __goscript_common.testingOnlyForceDowngradeCanary) {
			if ((c$ as __goscript_conn.Conn).vers == 771) {
				$.copy($.goSlice(serverRandom, 24, undefined), "DOWNGRD\x01")
			} else {
				$.copy($.goSlice(serverRandom, 24, undefined), "DOWNGRD\x00")
			}
			serverRandom = $.goSlice(serverRandom, undefined, 24)
		}
		let [, err] = await io.ReadFull($.pointerValueOrNil(__goscript_common.Config.prototype.rand.call((c$ as __goscript_conn.Conn).config))!, serverRandom)
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			return err
		}

		if ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).secureRenegotiation) != 0) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
			return errors.New("tls: initial handshake had non-empty renegotiation extension")
		}

		$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).extendedMasterSecret = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).extendedMasterSecret
		$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).secureRenegotiationSupported = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).secureRenegotiationSupported
		$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).compressionMethod = 0
		if ($.stringLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).serverName) > 0) {
			;(c$ as __goscript_conn.Conn).serverName = $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).serverName
		}

		let __goscriptTuple14: any = negotiateALPN($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).NextProtos, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).alpnProtocols, false)
		let selectedProto = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(120) : __goscript_conn.Conn.prototype.sendAlert.call(c, 120))
			return err
		}
		$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).alpnProtocol = selectedProto;
		;(c$ as __goscript_conn.Conn).clientProtocol = selectedProto

		let __goscriptTuple15: any = await __goscript_common.Config.prototype.getCertificate.call((c$ as __goscript_conn.Conn).config, clientHelloInfo((hs$ as serverHandshakeState).ctx, c, (hs$ as serverHandshakeState).clientHello));
		;(hs$ as serverHandshakeState).cert = __goscriptTuple15[0]
		err = __goscriptTuple15[1]
		if (err != null) {
			if ($.comparableEqual(err, __goscript_common.errNoCertificates)) {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(112) : __goscript_conn.Conn.prototype.sendAlert.call(c, 112))
			} else {
				await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
			}
			return err
		}

		if ($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).scts) {
			$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).scts = $.pointerValue<__goscript_common.Certificate>((hs$ as serverHandshakeState).cert).SignedCertificateTimestamps
		}

		let __goscriptTuple16: any = supportsECDHE((c$ as __goscript_conn.Conn).config, (c$ as __goscript_conn.Conn).vers, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).supportedCurves, $.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).supportedPoints);
		;(hs$ as serverHandshakeState).ecdheOk = __goscriptTuple16[0]
		err = __goscriptTuple16[1]
		if (err != null) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(109) : __goscript_conn.Conn.prototype.sendAlert.call(c, 109))
			return err
		}

		if ((hs$ as serverHandshakeState).ecdheOk && ($.sliceLen($.pointerValue<__goscript_handshake_messages.clientHelloMsg>((hs$ as serverHandshakeState).clientHello).supportedPoints) > 0)) {
			// Although omitting the ec_point_formats extension is permitted, some
			// old OpenSSL version will refuse to handshake if not present.
			//
			// Per RFC 4492, section 5.1.2, implementations MUST support the
			// uncompressed point format. See golang.org/issue/31943.
			$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).supportedPoints = new Uint8Array([0]) as $.Slice<number>
		}

		{
			let [priv, ok] = $.typeAssertTuple<crypto.Signer | null>($.pointerValue<__goscript_common.Certificate>((hs$ as serverHandshakeState).cert).PrivateKey, "crypto.Signer")
			if (ok) {
				{
					const __goscriptTypeSwitchValue = (__goscriptAwait = (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? (priv as Exclude<crypto.Signer, null>) : $.pointerValue<Exclude<crypto.Signer, null>>(priv)).Public(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					switch (true) {
						case $.typeAssert<ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")).ok:
							{
								;(hs$ as serverHandshakeState).ecSignOk = true
							}
							break
						case $.typeAssert<ed25519.PublicKey>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey")).ok:
							{
								;(hs$ as serverHandshakeState).ecSignOk = true
							}
							break
						case $.typeAssert<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PublicKey")).ok:
							{
								;(hs$ as serverHandshakeState).rsaSignOk = true
							}
							break
						case $.typeAssert<mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mldsa.PublicKey")).ok:
							{
								await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
								return fmt.Errorf("tls: ML-DSA certificates require TLS 1.3, but client negotiated %s", await __goscript_common.VersionName((c$ as __goscript_conn.Conn).vers))
							}
							break
						default:
							{
								await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
								return fmt.Errorf("tls: unsupported signing key type (%T)", ((__goscriptAwait = (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? (priv as Exclude<crypto.Signer, null>) : $.pointerValue<Exclude<crypto.Signer, null>>(priv)).Public(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any))
							}
							break
					}
				}
			}
		}
		{
			let [priv, ok] = $.typeAssertTuple<crypto.Decrypter | null>($.pointerValue<__goscript_common.Certificate>((hs$ as serverHandshakeState).cert).PrivateKey, "crypto.Decrypter")
			if (ok) {
				{
					const __goscriptTypeSwitchValue = (__goscriptAwait = (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? (priv as Exclude<crypto.Decrypter, null>) : $.pointerValue<Exclude<crypto.Decrypter, null>>(priv)).Public(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					switch (true) {
						case $.typeAssert<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PublicKey")).ok:
							{
								;(hs$ as serverHandshakeState).rsaDecryptOk = true
							}
							break
						default:
							{
								await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(80) : __goscript_conn.Conn.prototype.sendAlert.call(c, 80))
								return fmt.Errorf("tls: unsupported decryption key type (%T)", ((__goscriptAwait = (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? (priv as Exclude<crypto.Decrypter, null>) : $.pointerValue<Exclude<crypto.Decrypter, null>>(priv)).Public(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any))
							}
							break
					}
				}
			}
		}

		return null
	}

	public async readFinished(out: $.Slice<number>): globalThis.Promise<$.GoError> {
		const hs: serverHandshakeState | $.VarRef<serverHandshakeState> | null = this;
		const hs$: serverHandshakeState = hs == null ? $.pointerTarget<serverHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeState>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeState).c

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
		let __goscriptTuple17: any = $.typeAssertTuple<__goscript_handshake_messages.finishedMsg | $.VarRef<__goscript_handshake_messages.finishedMsg> | null>(msg, /* @__PURE__ */ $.pointerType("tls.finishedMsg"))
		let clientFinished: __goscript_handshake_messages.finishedMsg | $.VarRef<__goscript_handshake_messages.finishedMsg> | null = __goscriptTuple17[0]
		let ok = __goscriptTuple17[1]
		let clientFinished$: __goscript_handshake_messages.finishedMsg = clientFinished == null ? $.pointerTarget<__goscript_handshake_messages.finishedMsg>(clientFinished) : (clientFinished as any).__isVarRef === true ? (clientFinished as any).value : (clientFinished as any).__goValue === undefined ? (clientFinished as any) : $.pointerTarget<__goscript_handshake_messages.finishedMsg>(clientFinished)
		if (!ok) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(10) : __goscript_conn.Conn.prototype.sendAlert.call(c, 10))
			return __goscript_common.unexpectedMessageError($.interfaceValue(clientFinished, "*tls.finishedMsg", /* @__PURE__ */ $.pointerType("tls.finishedMsg")), msg)
		}

		let verify: $.Slice<number> = await $.markAsStructValue($.cloneStructValue((hs$ as serverHandshakeState).finishedHash)).clientSum((hs$ as serverHandshakeState).masterSecret)
		if (($.sliceLen(verify) != $.sliceLen((clientFinished$ as __goscript_handshake_messages.finishedMsg).verifyData)) || (subtle.ConstantTimeCompare(verify, (clientFinished$ as __goscript_handshake_messages.finishedMsg).verifyData) != 1)) {
			await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendAlert(40) : __goscript_conn.Conn.prototype.sendAlert.call(c, 40))
			return errors.New("tls: client's Finished message is incorrect")
		}

		{
			let __goscriptShadow15 = await __goscript_handshake_messages.transcriptMsg($.interfaceValue<__goscript_common.handshakeMessage | null>(clientFinished, "*tls.finishedMsg", /* @__PURE__ */ $.pointerType("tls.finishedMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as serverHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
			if (__goscriptShadow15 != null) {
				return __goscriptShadow15
			}
		}

		$.copy(out, verify)
		return null
	}

	public async sendFinished(out: $.Slice<number>): globalThis.Promise<$.GoError> {
		const hs: serverHandshakeState | $.VarRef<serverHandshakeState> | null = this;
		const hs$: serverHandshakeState = hs == null ? $.pointerTarget<serverHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeState>(hs)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeState).c

		{
			let err = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).writeChangeCipherRecord() : __goscript_conn.Conn.prototype.writeChangeCipherRecord.call(c))
			if (err != null) {
				return err
			}
		}

		let finished: __goscript_handshake_messages.finishedMsg | $.VarRef<__goscript_handshake_messages.finishedMsg> | null = new __goscript_handshake_messages.finishedMsg()
		let finished$: __goscript_handshake_messages.finishedMsg = finished == null ? $.pointerTarget<__goscript_handshake_messages.finishedMsg>(finished) : (finished as any).__isVarRef === true ? (finished as any).value : (finished as any).__goValue === undefined ? (finished as any) : $.pointerTarget<__goscript_handshake_messages.finishedMsg>(finished);
		;(finished$ as __goscript_handshake_messages.finishedMsg).verifyData = await $.markAsStructValue($.cloneStructValue((hs$ as serverHandshakeState).finishedHash)).serverSum((hs$ as serverHandshakeState).masterSecret)
		{
			let [, err] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as serverHandshakeState).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(finished, "*tls.finishedMsg", /* @__PURE__ */ $.pointerType("tls.finishedMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as serverHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
			if (err != null) {
				return err
			}
		}

		$.copy(out, (finished$ as __goscript_handshake_messages.finishedMsg).verifyData)

		return null
	}

	public async sendSessionTicket(): globalThis.Promise<$.GoError> {
		const hs: serverHandshakeState | $.VarRef<serverHandshakeState> | null = this;
		const hs$: serverHandshakeState = hs == null ? $.pointerTarget<serverHandshakeState>(hs) : (hs as any).__isVarRef === true ? (hs as any).value : (hs as any).__goValue === undefined ? (hs as any) : $.pointerTarget<serverHandshakeState>(hs)
		if (!$.pointerValue<__goscript_handshake_messages.serverHelloMsg>((hs$ as serverHandshakeState).hello).ticketSupported) {
			return null
		}

		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (hs$ as serverHandshakeState).c
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)
		let m: __goscript_handshake_messages.newSessionTicketMsg | $.VarRef<__goscript_handshake_messages.newSessionTicketMsg> | null = new __goscript_handshake_messages.newSessionTicketMsg()
		let m$: __goscript_handshake_messages.newSessionTicketMsg = m == null ? $.pointerTarget<__goscript_handshake_messages.newSessionTicketMsg>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<__goscript_handshake_messages.newSessionTicketMsg>(m)

		let state: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sessionState() : __goscript_conn.Conn.prototype.sessionState.call(c))
		let state$: __goscript_ticket.SessionState = state == null ? $.pointerTarget<__goscript_ticket.SessionState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_ticket.SessionState>(state);
		;(state$ as __goscript_ticket.SessionState).secret = (hs$ as serverHandshakeState).masterSecret
		if ((hs$ as serverHandshakeState).sessionState != null) {
			// If this is re-wrapping an old key, then keep
			// the original time it was created.
			;(state$ as __goscript_ticket.SessionState).createdAt = $.pointerValue<__goscript_ticket.SessionState>((hs$ as serverHandshakeState).sessionState).createdAt
		}
		if ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).WrapSession != null) {
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple18: any = await $.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).WrapSession!((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).connectionStateLocked() : __goscript_conn.Conn.prototype.connectionStateLocked.call(c)), state);
			;(m$ as __goscript_handshake_messages.newSessionTicketMsg).ticket = __goscriptTuple18[0]
			err = __goscriptTuple18[1]
			if (err != null) {
				return err
			}
		} else {
			let __goscriptTuple19: any = await (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_ticket.SessionState).Bytes() : __goscript_ticket.SessionState.prototype.Bytes.call(state))
			let stateBytes: $.Slice<number> = __goscriptTuple19[0]
			let err = __goscriptTuple19[1]
			if (err != null) {
				return err
			}
			let __goscriptTuple20: any = await __goscript_common.Config.prototype.encryptTicket.call((c$ as __goscript_conn.Conn).config, stateBytes, (c$ as __goscript_conn.Conn).ticketKeys);
			;(m$ as __goscript_handshake_messages.newSessionTicketMsg).ticket = __goscriptTuple20[0]
			err = __goscriptTuple20[1]
			if (err != null) {
				return err
			}
		}

		{
			let [, err] = await __goscript_conn.Conn.prototype.writeHandshakeRecord.call((hs$ as serverHandshakeState).c, $.interfaceValue<__goscript_common.handshakeMessage | null>(m, "*tls.newSessionTicketMsg", /* @__PURE__ */ $.pointerType("tls.newSessionTicketMsg")), $.interfaceValue<__goscript_handshake_messages.transcriptHash | null>($.fieldRef((hs$ as serverHandshakeState)._fields, "finishedHash"), "*tls.finishedHash", /* @__PURE__ */ $.pointerType("tls.finishedHash")))
			if (err != null) {
				return err
			}
		}

		return null
	}

	static __typeInfo = $.registerStructType(
		"tls.serverHandshakeState",
		() => new serverHandshakeState(),
		() => [$.methodSignature("checkForResumption", [], ["error"], true), $.methodSignature("cipherSuiteOk", [["c", /* @__PURE__ */ $.pointerType("tls.cipherSuite")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("doFullHandshake", [], ["error"], true), $.methodSignature("doResumeHandshake", [], ["error"], true), $.methodSignature("establishKeys", [], ["error"], true), $.methodSignature("handshake", [], ["error"], true), $.methodSignature("pickCipherSuite", [], ["error"], true), $.methodSignature("processClientHello", [], ["error"], true), $.methodSignature("readFinished", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("sendFinished", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("sendSessionTicket", [], ["error"], true)],
		serverHandshakeState,
		() => [/* @__PURE__ */ $.structField("c", /* @__PURE__ */ $.pointerType("tls.Conn"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [1], 8, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("clientHello", /* @__PURE__ */ $.pointerType("tls.clientHelloMsg"), [2], 24, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("hello", /* @__PURE__ */ $.pointerType("tls.serverHelloMsg"), [3], 32, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("suite", /* @__PURE__ */ $.pointerType("tls.cipherSuite"), [4], 40, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ecdheOk", /* @__PURE__ */ $.basicType("bool"), [5], 48, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ecSignOk", /* @__PURE__ */ $.basicType("bool"), [6], 49, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("rsaDecryptOk", /* @__PURE__ */ $.basicType("bool"), [7], 50, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("rsaSignOk", /* @__PURE__ */ $.basicType("bool"), [8], 51, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("sessionState", /* @__PURE__ */ $.pointerType("tls.SessionState"), [9], 56, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("finishedHash", "tls.finishedHash", [10], 64, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("masterSecret", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [11], 168, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("cert", /* @__PURE__ */ $.pointerType("tls.Certificate"), [12], 192, false, { pkgPath: "crypto/tls" })]
	)
}

export function negotiateALPN(serverProtos: $.Slice<string>, clientProtos: $.Slice<string>, quic: boolean): [string, $.GoError] {
	if (($.sliceLen(serverProtos) == 0) || ($.sliceLen(clientProtos) == 0)) {
		if (quic && ($.sliceLen(serverProtos) != 0)) {
			// RFC 9001, Section 8.1
			return ["", fmt.Errorf("tls: client did not request an application protocol")]
		}
		return ["", null]
	}
	let http11fallback: boolean = false
	for (let __goscriptRangeTarget4 = serverProtos, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let s = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
		for (let __goscriptRangeTarget3 = clientProtos, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let c = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as string)
			if ($.stringEqual(s, c)) {
				return [s, null]
			}
			if (($.stringEqual(s, "h2")) && ($.stringEqual(c, "http/1.1"))) {
				http11fallback = true
			}
		}
	}
	// As a special case, let http/1.1 clients connect to h2 servers as if they
	// didn't support ALPN. We used not to enforce protocol overlap, so over
	// time a number of HTTP servers were configured with only "h2", but
	// expected to accept connections from "http/1.1" clients. See Issue 46310.
	if (http11fallback) {
		return ["", null]
	}
	return ["", fmt.Errorf("tls: client requested unsupported application protocols (%q)", $.interfaceValue(clientProtos, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))]
}

export function supportsECDHE(c: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null, version: number, supportedCurves: $.Slice<__goscript_common.CurveID>, supportedPoints: $.Slice<number>): [boolean, $.GoError] {
	let supportsCurve = false
	for (let __goscriptRangeTarget5 = supportedCurves, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let curve = $.uint((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as __goscript_common.CurveID), 16)
		if ((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_common.Config).supportsCurve(version, curve) : __goscript_common.Config.prototype.supportsCurve.call(c, version, curve))) {
			supportsCurve = true
			break
		}
	}

	let supportsPointFormat = false
	let offeredNonCompressedFormat = false
	for (let __goscriptRangeTarget6 = supportedPoints, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
		let pointFormat = $.uint((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as number), 8)
		if (pointFormat == 0) {
			supportsPointFormat = true
		} else {
			offeredNonCompressedFormat = true
		}
	}
	// Per RFC 8422, Section 5.1.2, if the Supported Point Formats extension is
	// missing, uncompressed points are supported. If supportedPoints is empty,
	// the extension must be missing, as an empty extension body is rejected by
	// the parser. See https://go.dev/issue/49126.
	if ($.sliceLen(supportedPoints) == 0) {
		supportsPointFormat = true
	} else {
		if (offeredNonCompressedFormat && !supportsPointFormat) {
			return [false, errors.New("tls: client offered only incompatible point formats")]
		}
	}

	return [supportsCurve && supportsPointFormat, null]
}

export function clientHelloInfo(ctx: context.Context | null, c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null, clientHello: __goscript_handshake_messages.clientHelloMsg | $.VarRef<__goscript_handshake_messages.clientHelloMsg> | null): __goscript_common.ClientHelloInfo | $.VarRef<__goscript_common.ClientHelloInfo> | null {
	const c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)
	const clientHello$: __goscript_handshake_messages.clientHelloMsg = clientHello == null ? $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(clientHello) : (clientHello as any).__isVarRef === true ? (clientHello as any).value : (clientHello as any).__goValue === undefined ? (clientHello as any) : $.pointerTarget<__goscript_handshake_messages.clientHelloMsg>(clientHello)
	let supportedVersions: $.Slice<number> = (clientHello$ as __goscript_handshake_messages.clientHelloMsg).supportedVersions
	if ($.sliceLen((clientHello$ as __goscript_handshake_messages.clientHelloMsg).supportedVersions) == 0) {
		supportedVersions = __goscript_common.supportedVersionsFromMax((clientHello$ as __goscript_handshake_messages.clientHelloMsg).vers)
	}

	let conn = (c$ as __goscript_conn.Conn).conn
	if ((c$ as __goscript_conn.Conn).quic != null) {
		conn = $.pointerValue<__goscript_quic.quicState>((c$ as __goscript_conn.Conn).quic).clientHelloInfoConn
	}
	return new __goscript_common.ClientHelloInfo({CipherSuites: (clientHello$ as __goscript_handshake_messages.clientHelloMsg).cipherSuites, ServerName: (clientHello$ as __goscript_handshake_messages.clientHelloMsg).serverName, SupportedCurves: (clientHello$ as __goscript_handshake_messages.clientHelloMsg).supportedCurves, SupportedPoints: (clientHello$ as __goscript_handshake_messages.clientHelloMsg).supportedPoints, SignatureSchemes: (clientHello$ as __goscript_handshake_messages.clientHelloMsg).supportedSignatureAlgorithms, SupportedProtos: (clientHello$ as __goscript_handshake_messages.clientHelloMsg).alpnProtocols, SupportedVersions: supportedVersions, Extensions: (clientHello$ as __goscript_handshake_messages.clientHelloMsg).extensions, Conn: conn, HelloRetryRequest: (c$ as __goscript_conn.Conn).didHRR, config: (c$ as __goscript_conn.Conn).config, isQUIC: (c$ as __goscript_conn.Conn).quic != null, ctx: ctx})
}

var __goscriptAwait: any
