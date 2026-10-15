// Generated file based on quic.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as net from "@goscript/net/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as crypto from "@goscript/crypto/index.js"

import type * as cipher from "@goscript/crypto/cipher/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as hpke from "@goscript/crypto/hpke/index.js"

import type * as tls13 from "@goscript/crypto/internal/fips140/tls13/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as hash from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_alert from "./alert.gs.ts"

import type * as __goscript_cipher_suites from "./cipher_suites.gs.ts"

import * as __goscript_common from "./common.gs.ts"

import * as __goscript_common_string from "./common_string.gs.ts"

import * as __goscript_conn from "./conn.gs.ts"

import * as __goscript_ech from "./ech.gs.ts"

import * as __goscript_handshake_client from "./handshake_client.gs.ts"

import * as __goscript_handshake_client_tls13 from "./handshake_client_tls13.gs.ts"

import * as __goscript_handshake_messages from "./handshake_messages.gs.ts"

import * as __goscript_handshake_server from "./handshake_server.gs.ts"

import * as __goscript_handshake_server_tls13 from "./handshake_server_tls13.gs.ts"

import type * as __goscript_key_schedule from "./key_schedule.gs.ts"

import * as __goscript_ticket from "./ticket.gs.ts"

import * as __goscript_tls from "./tls.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/index.js"
import "@goscript/bytes/index.js"
import "@goscript/crypto/index.js"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/crypto/hpke/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "./alert.gs.ts"
import "./common.gs.ts"
import "./common_string.gs.ts"
import "./conn.gs.ts"
import "./ech.gs.ts"
import "./handshake_client.gs.ts"
import "./handshake_client_tls13.gs.ts"
import "./handshake_messages.gs.ts"
import "./handshake_server.gs.ts"
import "./handshake_server_tls13.gs.ts"
import "./ticket.gs.ts"
import "./tls.gs.ts"

$.registerTypePackagePath("crypto/tls", ["tls.QUICEncryptionLevel", "tls.QUICConn", "tls.QUICConfig", "tls.QUICEventKind", "tls.QUICEvent", "tls.quicState", "tls.QUICSessionTicketOptions"])

export type QUICEncryptionLevel = number

$.registerNamedValueType(
	"tls.QUICEncryptionLevel",
	{String: (receiver: any, ...args: any[]) => (QUICEncryptionLevel_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tls.QUICEncryptionLevel",
	{String: (receiver: any, ...args: any[]) => (QUICEncryptionLevel_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type QUICEventKind = number

export class QUICConn {
	public get conn(): __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null {
		return this._fields.conn
	}

	public set conn(value: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null) {
		this._fields.conn = value
	}

	public get sessionTicketSent(): boolean {
		return this._fields.sessionTicketSent
	}

	public set sessionTicketSent(value: boolean) {
		this._fields.sessionTicketSent = value
	}

	public _fields: {
		conn: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null
		sessionTicketSent: boolean
	}

	constructor(init?: Partial<{conn?: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null, sessionTicketSent?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			conn: init?.conn ?? (null! as __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null),
			sessionTicketSent: init?.sessionTicketSent ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): QUICConn {
		return new QUICConn(this, true)
	}

	public __goscriptAssign(source: QUICConn): void {
		const target = this._fields
		const values = source._fields
		target.conn = values.conn
		target.sessionTicketSent = values.sessionTicketSent
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const q: QUICConn | $.VarRef<QUICConn> | null = this;
		const q$: QUICConn = q == null ? $.pointerTarget<QUICConn>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<QUICConn>(q)
		if ($.pointerValue<quicState>($.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).quic).ctx == null) {
			return null
		}
		void (__goscriptAwait = $.pointerValue<quicState>($.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).quic).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await $.chanRecv($.pointerValue<quicState>($.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).quic).signalc)
		while (true) {
			let __goscriptRange0 = await $.chanRecvWithOk($.pointerValue<quicState>($.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).quic).blockedc)
			if (!__goscriptRange0.ok) {
				break
			}
		}
		return $.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).handshakeErr
	}

	public async ConnectionState(): globalThis.Promise<__goscript_common.ConnectionState> {
		const q: QUICConn | $.VarRef<QUICConn> | null = this;
		return __goscript_conn.Conn.prototype.ConnectionState.call($.pointerValue<QUICConn>(q).conn)
	}

	public async HandleData(level: QUICEncryptionLevel, data: $.Slice<number>): globalThis.Promise<$.GoError> {
		let q: QUICConn | $.VarRef<QUICConn> | null = this;
		using __defer = new $.DisposableStack()
		const q$: QUICConn = q == null ? $.pointerTarget<QUICConn>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<QUICConn>(q)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (q$ as QUICConn).conn
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)
		if ((c$ as __goscript_conn.Conn)._in.level != level) {
			return quicError((c$ as __goscript_conn.Conn)._in.setErrorLocked(errors.New("tls: handshake data received at wrong level")))
		}
		$.pointerValue<quicState>((c$ as __goscript_conn.Conn).quic).readbuf = data
		await $.chanRecv($.pointerValue<quicState>((c$ as __goscript_conn.Conn).quic).signalc)
		let __goscriptRecv0 = await $.chanRecvWithOk($.pointerValue<quicState>((c$ as __goscript_conn.Conn).quic).blockedc)
		let ok = __goscriptRecv0.ok
		if (ok) {
			// The handshake goroutine is waiting for more data.
			return null
		}
		// The handshake goroutine has exited.
		await (c$ as __goscript_conn.Conn).handshakeMutex.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as __goscript_conn.Conn).handshakeMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		void (c$ as __goscript_conn.Conn).hand.Write($.pointerValue<quicState>((c$ as __goscript_conn.Conn).quic).readbuf)
		$.pointerValue<quicState>((c$ as __goscript_conn.Conn).quic).readbuf = null
		while (($.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).hand.Len() >= 4) && ($.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).handshakeErr == null)) {
			let b: $.Slice<number> = $.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).hand.Bytes()
			let n = (($.int($.arrayIndex(b!, 1)) << 16) | ($.int($.arrayIndex(b!, 2)) << 8)) | $.int($.arrayIndex(b!, 3))
			if (n > 65536) {
				$.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).handshakeErr = fmt.Errorf("tls: handshake message of length %d bytes exceeds maximum of %d bytes", $.basicInterfaceValue(n, "int"), $.basicInterfaceValue(65536, "int"))
				break
			}
			if ($.sliceLen(b) < (4 + n)) {
				return null
			}
			{
				let err = await __goscript_conn.Conn.prototype.handlePostHandshakeMessage.call((q$ as QUICConn).conn)
				if (err != null) {
					$.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).handshakeErr = err
				}
			}
		}
		if ($.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).handshakeErr != null) {
			return quicError($.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).handshakeErr)
		}
		return null
	}

	public async NextEvent(): globalThis.Promise<QUICEvent> {
		const q: QUICConn | $.VarRef<QUICConn> | null = this;
		const q$: QUICConn = q == null ? $.pointerTarget<QUICConn>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<QUICConn>(q)
		let qs: quicState | $.VarRef<quicState> | null = $.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).quic
		let qs$: quicState = qs == null ? $.pointerTarget<quicState>(qs) : (qs as any).__isVarRef === true ? (qs as any).value : (qs as any).__goValue === undefined ? (qs as any) : $.pointerTarget<quicState>(qs)
		{
			let last = (qs$ as quicState).nextEvent - 1
			if ((last >= 0) && ($.sliceLen($.arrayIndex((qs$ as quicState).events!, last).Data) > 0)) {
				// Write over some of the previous event's data,
				// to catch callers erroneously retaining it.
				$.sliceElems($.arrayIndex((qs$ as quicState).events!, last).Data!)[$.sliceSlot($.arrayIndex((qs$ as quicState).events!, last).Data!, 0)] = 0
			}
		}
		if (((qs$ as quicState).nextEvent >= $.sliceLen((qs$ as quicState).events)) && (qs$ as quicState).waitingForDrain) {
			;(qs$ as quicState).waitingForDrain = false
			await $.chanRecv((qs$ as quicState).signalc)
			await $.chanRecv((qs$ as quicState).blockedc)
		}
		{
			let err = $.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).handshakeErr
			if (err != null) {
				if ((qs$ as quicState).errorReturned) {
					return new QUICEvent({Kind: 0}, true)
				}
				;(qs$ as quicState).errorReturned = true;
				;(qs$ as quicState).events = null;
				;(qs$ as quicState).nextEvent = 0
				return new QUICEvent({Kind: 10, Err: $.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).handshakeErr}, true)
			}
		}
		if ((qs$ as quicState).nextEvent >= $.sliceLen((qs$ as quicState).events)) {
			;(qs$ as quicState).events = $.goSlice((qs$ as quicState).events, undefined, 0);
			;(qs$ as quicState).nextEvent = 0
			return new QUICEvent({Kind: 0}, true)
		}
		let e = ($.arrayIndex((qs$ as quicState).events!, (qs$ as quicState).nextEvent)).clone()
		$.assignStruct($.sliceElems((qs$ as quicState).events!)[$.sliceSlot((qs$ as quicState).events!, (qs$ as quicState).nextEvent)], new QUICEvent(undefined, true));
		;(qs$ as quicState).nextEvent++
		return (e).clone()
	}

	public async SendSessionTicket(opts: QUICSessionTicketOptions): globalThis.Promise<$.GoError> {
		let q: QUICConn | $.VarRef<QUICConn> | null = this;
		const q$: QUICConn = q == null ? $.pointerTarget<QUICConn>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<QUICConn>(q)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = (q$ as QUICConn).conn
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)
		if ($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).SessionTicketsDisabled) {
			return null
		}
		if (!(c$ as __goscript_conn.Conn).isHandshakeComplete.Load()) {
			return quicError(errors.New("tls: SendSessionTicket called before handshake completed"))
		}
		if ((c$ as __goscript_conn.Conn).isClient) {
			return quicError(errors.New("tls: SendSessionTicket called on the client"))
		}
		if ((q$ as QUICConn).sessionTicketSent) {
			return quicError(errors.New("tls: SendSessionTicket called multiple times"))
		}
		;(q$ as QUICConn).sessionTicketSent = true
		return quicError(await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).sendSessionTicket(opts.EarlyData, opts.Extra) : __goscript_conn.Conn.prototype.sendSessionTicket.call(c, opts.EarlyData, opts.Extra)))
	}

	public async SetTransportParameters(params: $.Slice<number>): globalThis.Promise<void> {
		let q: QUICConn | $.VarRef<QUICConn> | null = this;
		const q$: QUICConn = q == null ? $.pointerTarget<QUICConn>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<QUICConn>(q)
		if (params == null) {
			params = new Uint8Array([]) as $.Slice<number>
		}
		$.pointerValue<quicState>($.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).quic).transportParams = params
		if ($.pointerValue<quicState>($.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).quic).started) {
			await $.chanRecv($.pointerValue<quicState>($.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).quic).signalc)
			await $.chanRecv($.pointerValue<quicState>($.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).quic).blockedc)
		}
	}

	public async Start(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		let q: QUICConn | $.VarRef<QUICConn> | null = this;
		const q$: QUICConn = q == null ? $.pointerTarget<QUICConn>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<QUICConn>(q)
		if ($.pointerValue<quicState>($.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).quic).started) {
			return quicError(errors.New("tls: Start called more than once"))
		}
		$.pointerValue<quicState>($.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).quic).started = true
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (ctx: context.Context | null) => __receiver.HandshakeContext(ctx))($.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn)), ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo), "crypto/tls.(*Conn).HandshakeContext-fm")
		const __goscriptDeferArg0 = ctx
		queueMicrotask(async () => { await __goscriptDeferCallee1(__goscriptDeferArg0) })
		{
			let __goscriptRecv1 = await $.chanRecvWithOk($.pointerValue<quicState>($.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).quic).blockedc)
			let ok = __goscriptRecv1.ok
			if (!ok) {
				return $.pointerValue<__goscript_conn.Conn>((q$ as QUICConn).conn).handshakeErr
			}
		}
		return null
	}

	public async StoreSession(session: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null): globalThis.Promise<$.GoError> {
		const q: QUICConn | $.VarRef<QUICConn> | null = this;
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = $.pointerValue<QUICConn>(q).conn
		let c$: __goscript_conn.Conn = c == null ? $.pointerTarget<__goscript_conn.Conn>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_conn.Conn>(c)
		if (!(c$ as __goscript_conn.Conn).isClient) {
			return quicError(errors.New("tls: StoreSessionTicket called on the server"))
		}
		let cacheKey = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as __goscript_conn.Conn).clientSessionCacheKey() : __goscript_conn.Conn.prototype.clientSessionCacheKey.call(c))
		if ($.stringEqual(cacheKey, "")) {
			return null
		}
		let cs: __goscript_ticket.ClientSessionState | $.VarRef<__goscript_ticket.ClientSessionState> | null = new __goscript_ticket.ClientSessionState({session: session})
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_common.ClientSessionCache, null>>($.pointerValue<__goscript_common.Config>((c$ as __goscript_conn.Conn).config).ClientSessionCache).Put(cacheKey, cs), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	static __typeInfo = $.registerStructType(
		"tls.QUICConn",
		() => new QUICConn(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("ConnectionState", [], ["tls.ConnectionState"], true), $.methodSignature("HandleData", [["level", /* @__PURE__ */ $.basicType("int", "tls.QUICEncryptionLevel")], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("NextEvent", [], ["tls.QUICEvent"], true), $.methodSignature("SendSessionTicket", [["opts", "tls.QUICSessionTicketOptions"]], ["error"], true), $.methodSignature("SetTransportParameters", [["params", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("Start", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("StoreSession", [["session", /* @__PURE__ */ $.pointerType("tls.SessionState")]], ["error"], true)],
		QUICConn,
		() => [/* @__PURE__ */ $.structField("conn", /* @__PURE__ */ $.pointerType("tls.Conn"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("sessionTicketSent", /* @__PURE__ */ $.basicType("bool"), [1], 8, false, { pkgPath: "crypto/tls" })]
	)
}

export class QUICConfig {
	public get TLSConfig(): __goscript_common.Config | $.VarRef<__goscript_common.Config> | null {
		return this._fields.TLSConfig
	}

	public set TLSConfig(value: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null) {
		this._fields.TLSConfig = value
	}

	// EnableSessionEvents may be set to true to enable the
	// [QUICStoreSession] and [QUICResumeSession] events for client connections.
	// When this event is enabled, sessions are not automatically
	// stored in the client session cache.
	// The application should use [QUICConn.StoreSession] to store sessions.
	public get EnableSessionEvents(): boolean {
		return this._fields.EnableSessionEvents
	}

	public set EnableSessionEvents(value: boolean) {
		this._fields.EnableSessionEvents = value
	}

	// ClientHelloInfoConn is the net.Conn to use for the ClientHelloInfo.Conn field.
	public get ClientHelloInfoConn(): net.Conn | null {
		return this._fields.ClientHelloInfoConn
	}

	public set ClientHelloInfoConn(value: net.Conn | null) {
		this._fields.ClientHelloInfoConn = value
	}

	public _fields: {
		TLSConfig: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null
		EnableSessionEvents: boolean
		ClientHelloInfoConn: net.Conn | null
	}

	constructor(init?: Partial<{TLSConfig?: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null, EnableSessionEvents?: boolean, ClientHelloInfoConn?: net.Conn | null}>, __goscriptValue?: boolean) {
		this._fields = {
			TLSConfig: init?.TLSConfig ?? (null! as __goscript_common.Config | $.VarRef<__goscript_common.Config> | null),
			EnableSessionEvents: init?.EnableSessionEvents ?? (false as boolean),
			ClientHelloInfoConn: init?.ClientHelloInfoConn ?? (null! as net.Conn | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): QUICConfig {
		return new QUICConfig(this, true)
	}

	public __goscriptAssign(source: QUICConfig): void {
		const target = this._fields
		const values = source._fields
		target.TLSConfig = values.TLSConfig
		target.EnableSessionEvents = values.EnableSessionEvents
		target.ClientHelloInfoConn = $.assignFieldValue(target.ClientHelloInfoConn, values.ClientHelloInfoConn, "net.Conn")
	}

	static __typeInfo = $.registerStructType(
		"tls.QUICConfig",
		() => new QUICConfig(),
		() => [],
		QUICConfig,
		() => [/* @__PURE__ */ $.structField("TLSConfig", /* @__PURE__ */ $.pointerType("tls.Config"), [0], 0, true), /* @__PURE__ */ $.structField("EnableSessionEvents", /* @__PURE__ */ $.basicType("bool"), [1], 8, true), /* @__PURE__ */ $.structField("ClientHelloInfoConn", "net.Conn", [2], 16, true)]
	)
}

export class QUICEvent {
	public get Kind(): QUICEventKind {
		return this._fields.Kind
	}

	public set Kind(value: QUICEventKind) {
		this._fields.Kind = value
	}

	// Set for QUICSetReadSecret, QUICSetWriteSecret, and QUICWriteData.
	public get Level(): QUICEncryptionLevel {
		return this._fields.Level
	}

	public set Level(value: QUICEncryptionLevel) {
		this._fields.Level = value
	}

	// Set for QUICTransportParameters, QUICSetReadSecret, QUICSetWriteSecret, and QUICWriteData.
	// The contents are owned by crypto/tls, and are valid until the next NextEvent call.
	public get Data(): $.Slice<number> {
		return this._fields.Data
	}

	public set Data(value: $.Slice<number>) {
		this._fields.Data = value
	}

	// Set for QUICSetReadSecret and QUICSetWriteSecret.
	public get Suite(): number {
		return this._fields.Suite
	}

	public set Suite(value: number) {
		this._fields.Suite = value
	}

	// Set for QUICResumeSession and QUICStoreSession.
	public get SessionState(): __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null {
		return this._fields.SessionState
	}

	public set SessionState(value: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null) {
		this._fields.SessionState = value
	}

	// Set for QUICErrorEvent.
	// The error will wrap AlertError.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		Kind: QUICEventKind
		Level: QUICEncryptionLevel
		Data: $.Slice<number>
		Suite: number
		SessionState: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null
		Err: $.GoError
	}

	constructor(init?: Partial<{Kind?: QUICEventKind, Level?: QUICEncryptionLevel, Data?: $.Slice<number>, Suite?: number, SessionState?: __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null, Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Kind: init?.Kind ?? (0 as QUICEventKind),
			Level: init?.Level ?? (0 as QUICEncryptionLevel),
			Data: init?.Data ?? (null! as $.Slice<number>),
			Suite: init?.Suite ?? (0 as number),
			SessionState: init?.SessionState ?? (null! as __goscript_ticket.SessionState | $.VarRef<__goscript_ticket.SessionState> | null),
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): QUICEvent {
		return new QUICEvent(this, true)
	}

	public __goscriptAssign(source: QUICEvent): void {
		const target = this._fields
		const values = source._fields
		target.Kind = values.Kind
		target.Level = values.Level
		target.Data = values.Data
		target.Suite = values.Suite
		target.SessionState = values.SessionState
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	static __typeInfo = $.registerStructType(
		"tls.QUICEvent",
		() => new QUICEvent(),
		() => [],
		QUICEvent,
		() => [/* @__PURE__ */ $.structField("Kind", /* @__PURE__ */ $.basicType("int", "tls.QUICEventKind"), [0], 0, true), /* @__PURE__ */ $.structField("Level", /* @__PURE__ */ $.basicType("int", "tls.QUICEncryptionLevel"), [1], 8, true), /* @__PURE__ */ $.structField("Data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true), /* @__PURE__ */ $.structField("Suite", /* @__PURE__ */ $.basicType("uint16"), [3], 40, true), /* @__PURE__ */ $.structField("SessionState", /* @__PURE__ */ $.pointerType("tls.SessionState"), [4], 48, true), /* @__PURE__ */ $.structField("Err", "error", [5], 56, true)]
	)
}

export class quicState {
	public get events(): $.Slice<QUICEvent> {
		return this._fields.events
	}

	public set events(value: $.Slice<QUICEvent>) {
		this._fields.events = value
	}

	public get nextEvent(): number {
		return this._fields.nextEvent
	}

	public set nextEvent(value: number) {
		this._fields.nextEvent = value
	}

	// eventArr is a statically allocated event array, large enough to handle
	// the usual maximum number of events resulting from a single call: transport
	// parameters, Initial data, Early read secret, Handshake write and read
	// secrets, Handshake data, Application write secret, Application data.
	public get eventArr(): QUICEvent[] {
		return this._fields.eventArr
	}

	public set eventArr(value: QUICEvent[]) {
		this._fields.eventArr = value
	}

	public get started(): boolean {
		return this._fields.started
	}

	public set started(value: boolean) {
		this._fields.started = value
	}

	public get signalc(): $.Channel<{}> | null {
		return this._fields.signalc
	}

	public set signalc(value: $.Channel<{}> | null) {
		this._fields.signalc = value
	}

	public get blockedc(): $.Channel<{}> | null {
		return this._fields.blockedc
	}

	public set blockedc(value: $.Channel<{}> | null) {
		this._fields.blockedc = value
	}

	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get cancel(): (() => void) | null {
		return this._fields.cancel
	}

	public set cancel(value: (() => void) | null) {
		this._fields.cancel = value
	}

	public get waitingForDrain(): boolean {
		return this._fields.waitingForDrain
	}

	public set waitingForDrain(value: boolean) {
		this._fields.waitingForDrain = value
	}

	public get errorReturned(): boolean {
		return this._fields.errorReturned
	}

	public set errorReturned(value: boolean) {
		this._fields.errorReturned = value
	}

	// readbuf is shared between HandleData and the handshake goroutine.
	// HandshakeCryptoData passes ownership to the handshake goroutine by
	// reading from signalc, and reclaims ownership by reading from blockedc.
	public get readbuf(): $.Slice<number> {
		return this._fields.readbuf
	}

	public set readbuf(value: $.Slice<number>) {
		this._fields.readbuf = value
	}

	public get transportParams(): $.Slice<number> {
		return this._fields.transportParams
	}

	public set transportParams(value: $.Slice<number>) {
		this._fields.transportParams = value
	}

	public get enableSessionEvents(): boolean {
		return this._fields.enableSessionEvents
	}

	public set enableSessionEvents(value: boolean) {
		this._fields.enableSessionEvents = value
	}

	public get clientHelloInfoConn(): net.Conn | null {
		return this._fields.clientHelloInfoConn
	}

	public set clientHelloInfoConn(value: net.Conn | null) {
		this._fields.clientHelloInfoConn = value
	}

	public _fields: {
		events: $.Slice<QUICEvent>
		nextEvent: number
		eventArr: QUICEvent[]
		started: boolean
		signalc: $.Channel<{}> | null
		blockedc: $.Channel<{}> | null
		ctx: context.Context | null
		cancel: (() => void) | null
		waitingForDrain: boolean
		errorReturned: boolean
		readbuf: $.Slice<number>
		transportParams: $.Slice<number>
		enableSessionEvents: boolean
		clientHelloInfoConn: net.Conn | null
	}

	constructor(init?: Partial<{events?: $.Slice<QUICEvent>, nextEvent?: number, eventArr?: QUICEvent[], started?: boolean, signalc?: $.Channel<{}> | null, blockedc?: $.Channel<{}> | null, ctx?: context.Context | null, cancel?: (() => void) | null, waitingForDrain?: boolean, errorReturned?: boolean, readbuf?: $.Slice<number>, transportParams?: $.Slice<number>, enableSessionEvents?: boolean, clientHelloInfoConn?: net.Conn | null}>, __goscriptValue?: boolean) {
		this._fields = {
			events: init?.events ?? (null! as $.Slice<QUICEvent>),
			nextEvent: init?.nextEvent ?? (0 as number),
			eventArr: init?.eventArr !== undefined ? $.cloneArrayValue(init.eventArr, /* @__PURE__ */ $.arrayType("tls.QUICEvent", 8)) : $.arrayValue(globalThis.Array.from({ length: 8 }, () => new QUICEvent(undefined, true)), /* @__PURE__ */ $.arrayType("tls.QUICEvent", 8)),
			started: init?.started ?? (false as boolean),
			signalc: init?.signalc ?? (null! as $.Channel<{}> | null),
			blockedc: init?.blockedc ?? (null! as $.Channel<{}> | null),
			ctx: init?.ctx ?? (null! as context.Context | null),
			cancel: init?.cancel ?? (null! as (() => void) | null),
			waitingForDrain: init?.waitingForDrain ?? (false as boolean),
			errorReturned: init?.errorReturned ?? (false as boolean),
			readbuf: init?.readbuf ?? (null! as $.Slice<number>),
			transportParams: init?.transportParams ?? (null! as $.Slice<number>),
			enableSessionEvents: init?.enableSessionEvents ?? (false as boolean),
			clientHelloInfoConn: init?.clientHelloInfoConn ?? (null! as net.Conn | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): quicState {
		return new quicState(this, true)
	}

	public __goscriptAssign(source: quicState): void {
		const target = this._fields
		const values = source._fields
		target.events = values.events
		target.nextEvent = values.nextEvent
		target.eventArr = $.assignFieldValue(target.eventArr, values.eventArr, /* @__PURE__ */ $.arrayType("tls.QUICEvent", 8))
		target.started = values.started
		target.signalc = values.signalc
		target.blockedc = values.blockedc
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.cancel = values.cancel
		target.waitingForDrain = values.waitingForDrain
		target.errorReturned = values.errorReturned
		target.readbuf = values.readbuf
		target.transportParams = values.transportParams
		target.enableSessionEvents = values.enableSessionEvents
		target.clientHelloInfoConn = $.assignFieldValue(target.clientHelloInfoConn, values.clientHelloInfoConn, "net.Conn")
	}

	static __typeInfo = $.registerStructType(
		"tls.quicState",
		() => new quicState(),
		() => [],
		quicState,
		() => [/* @__PURE__ */ $.structField("events", /* @__PURE__ */ $.sliceType("tls.QUICEvent"), [0], 0, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("nextEvent", /* @__PURE__ */ $.basicType("int"), [1], 24, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("eventArr", /* @__PURE__ */ $.arrayType("tls.QUICEvent", 8), [2], 32, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("started", /* @__PURE__ */ $.basicType("bool"), [3], 608, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("signalc", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [4], 616, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("blockedc", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [5], 624, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [6], 632, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("cancel", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [7], 648, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("waitingForDrain", /* @__PURE__ */ $.basicType("bool"), [8], 656, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("errorReturned", /* @__PURE__ */ $.basicType("bool"), [9], 657, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("readbuf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [10], 664, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("transportParams", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [11], 688, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("enableSessionEvents", /* @__PURE__ */ $.basicType("bool"), [12], 712, false, { pkgPath: "crypto/tls" }), /* @__PURE__ */ $.structField("clientHelloInfoConn", "net.Conn", [13], 720, false, { pkgPath: "crypto/tls" })]
	)
}

export class QUICSessionTicketOptions {
	// EarlyData specifies whether the ticket may be used for 0-RTT.
	public get EarlyData(): boolean {
		return this._fields.EarlyData
	}

	public set EarlyData(value: boolean) {
		this._fields.EarlyData = value
	}

	public get Extra(): $.Slice<$.Slice<number>> {
		return this._fields.Extra
	}

	public set Extra(value: $.Slice<$.Slice<number>>) {
		this._fields.Extra = value
	}

	public _fields: {
		EarlyData: boolean
		Extra: $.Slice<$.Slice<number>>
	}

	constructor(init?: Partial<{EarlyData?: boolean, Extra?: $.Slice<$.Slice<number>>}>, __goscriptValue?: boolean) {
		this._fields = {
			EarlyData: init?.EarlyData ?? (false as boolean),
			Extra: init?.Extra ?? (null! as $.Slice<$.Slice<number>>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): QUICSessionTicketOptions {
		return new QUICSessionTicketOptions(this, true)
	}

	public __goscriptAssign(source: QUICSessionTicketOptions): void {
		const target = this._fields
		const values = source._fields
		target.EarlyData = values.EarlyData
		target.Extra = values.Extra
	}

	static __typeInfo = $.registerStructType(
		"tls.QUICSessionTicketOptions",
		() => new QUICSessionTicketOptions(),
		() => [],
		QUICSessionTicketOptions,
		() => [/* @__PURE__ */ $.structField("EarlyData", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("Extra", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [1], 8, true)]
	)
}

export const QUICEncryptionLevelInitial: QUICEncryptionLevel = 0

export const QUICEncryptionLevelEarly: QUICEncryptionLevel = 1

export const QUICEncryptionLevelHandshake: QUICEncryptionLevel = 2

export const QUICEncryptionLevelApplication: QUICEncryptionLevel = 3

export const QUICNoEvent: QUICEventKind = 0

export const QUICSetReadSecret: QUICEventKind = 1

export const QUICSetWriteSecret: QUICEventKind = 2

export const QUICWriteData: QUICEventKind = 3

export const QUICTransportParameters: QUICEventKind = 4

export const QUICTransportParametersRequired: QUICEventKind = 5

export const QUICRejectedEarlyData: QUICEventKind = 6

export const QUICHandshakeDone: QUICEventKind = 7

export const QUICResumeSession: QUICEventKind = 8

export const QUICStoreSession: QUICEventKind = 9

export const QUICErrorEvent: QUICEventKind = 10

export async function QUICEncryptionLevel_String(l: QUICEncryptionLevel): globalThis.Promise<string> {
	switch (l) {
		case 0:
		{
			return "Initial"
			break
		}
		case 1:
		{
			return "Early"
			break
		}
		case 2:
		{
			return "Handshake"
			break
		}
		case 3:
		{
			return "Application"
			break
		}
		default:
		{
			return fmt.Sprintf("QUICEncryptionLevel(%v)", $.basicInterfaceValue($.int(l), "int"))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function QUICClient(config: QUICConfig | $.VarRef<QUICConfig> | null): QUICConn | $.VarRef<QUICConn> | null {
	return newQUICConn(__goscript_tls.Client(null, $.pointerValue<QUICConfig>(config).TLSConfig), config)
}

export function QUICServer(config: QUICConfig | $.VarRef<QUICConfig> | null): QUICConn | $.VarRef<QUICConn> | null {
	return newQUICConn(__goscript_tls.Server(null, $.pointerValue<QUICConfig>(config).TLSConfig), config)
}

export function newQUICConn(conn: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null, config: QUICConfig | $.VarRef<QUICConfig> | null): QUICConn | $.VarRef<QUICConn> | null {
	const conn$: __goscript_conn.Conn = conn == null ? $.pointerTarget<__goscript_conn.Conn>(conn) : (conn as any).__isVarRef === true ? (conn as any).value : (conn as any).__goValue === undefined ? (conn as any) : $.pointerTarget<__goscript_conn.Conn>(conn)
	const config$: QUICConfig = config == null ? $.pointerTarget<QUICConfig>(config) : (config as any).__isVarRef === true ? (config as any).value : (config as any).__goValue === undefined ? (config as any) : $.pointerTarget<QUICConfig>(config);
	;(conn$ as __goscript_conn.Conn).quic = new quicState({signalc: $.makeChannel<{}>(0, {}, "both"), blockedc: $.makeChannel<{}>(0, {}, "both"), enableSessionEvents: (config$ as QUICConfig).EnableSessionEvents, clientHelloInfoConn: (config$ as QUICConfig).ClientHelloInfoConn})
	$.pointerValue<quicState>((conn$ as __goscript_conn.Conn).quic).events = $.goSlice($.pointerValue<quicState>((conn$ as __goscript_conn.Conn).quic).eventArr, undefined, 0)
	return new QUICConn({conn: conn})
}

export function quicError(err: $.GoError): $.GoError {
	if (err == null) {
		return null
	}
	{
		let [, ok] = errors.AsType(__goscriptStatic0(), $.pointerValueOrNil(err)!)
		if (ok) {
			return err
		}
	}
	let __goscriptTuple0: any = errors.AsType(__goscriptStatic1(), $.pointerValueOrNil(err)!)
	let a = (__goscriptTuple0[0] as __goscript_alert.alert)
	let ok = __goscriptTuple0[1]
	if (!ok) {
		a = 80
	}
	// Return an error wrapping the original error and an AlertError.
	// Truncate the text of the alert to 0 characters.
	return fmt.Errorf("%w%.0w", (err as any), $.namedValueInterfaceValue<any>($.uint(a, 8), "tls.AlertError", __goscriptStatic2(), __goscriptStatic3(), __goscriptStatic4()))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("uint8", "tls.AlertError"), zero: () => 0, methods: {Error: (receiver: any, ...args: any[]) => (__goscript_alert.AlertError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])] }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("uint8", "tls.alert"), zero: () => 0, methods: {Error: (receiver: any, ...args: any[]) => (__goscript_alert.alert_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_alert.alert_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])] }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({Error: (receiver: any, ...args: any[]) => (__goscript_alert.AlertError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= (/* @__PURE__ */ $.basicType("uint8", "tls.AlertError"))
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ([$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
