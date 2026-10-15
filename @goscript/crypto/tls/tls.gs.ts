// Generated file based on tls.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as ecdsa from "@goscript/crypto/ecdsa/index.js"

import * as ed25519 from "@goscript/crypto/ed25519/index.js"

import * as mldsa from "@goscript/crypto/mldsa/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as pem from "@goscript/encoding/pem/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as net from "@goscript/net/index.js"

import * as os from "@goscript/os/index.js"

import * as strings from "@goscript/strings/index.js"

import * as bytes from "@goscript/bytes/index.js"

import type * as cipher from "@goscript/crypto/cipher/index.js"

import * as ecdh from "@goscript/crypto/ecdh/index.js"

import * as elliptic from "@goscript/crypto/elliptic/index.js"

import * as hpke from "@goscript/crypto/hpke/index.js"

import type * as tls13 from "@goscript/crypto/internal/fips140/tls13/index.js"

import * as hash from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript_alert from "./alert.gs.ts"

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

import * as __goscript_quic from "./quic.gs.ts"

import * as __goscript_ticket from "./ticket.gs.ts"
import "@goscript/context/index.js"
import "@goscript/crypto/index.js"
import "@goscript/crypto/ecdsa/index.js"
import "@goscript/crypto/ed25519/index.js"
import "@goscript/crypto/mldsa/index.js"
import "@goscript/crypto/rsa/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/encoding/pem/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/index.js"
import "@goscript/os/index.js"
import "@goscript/strings/index.js"
import "@goscript/bytes/index.js"
import "@goscript/crypto/ecdh/index.js"
import "@goscript/crypto/elliptic/index.js"
import "@goscript/crypto/hpke/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "./common.gs.ts"
import "./common_string.gs.ts"
import "./conn.gs.ts"
import "./ech.gs.ts"
import "./handshake_client.gs.ts"
import "./handshake_client_tls13.gs.ts"
import "./handshake_messages.gs.ts"
import "./handshake_server.gs.ts"
import "./handshake_server_tls13.gs.ts"
import "./quic.gs.ts"
import "./ticket.gs.ts"

$.registerTypePackagePath("crypto/tls", ["tls.listener", "tls.timeoutError", "tls.Dialer"])

export class listener {
	public get Listener(): net.Listener | null {
		return this._fields.Listener
	}

	public set Listener(value: net.Listener | null) {
		this._fields.Listener = value
	}

	public get config(): __goscript_common.Config | $.VarRef<__goscript_common.Config> | null {
		return this._fields.config
	}

	public set config(value: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null) {
		this._fields.config = value
	}

	public _fields: {
		Listener: net.Listener | null
		config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null
	}

	constructor(init?: Partial<{Listener?: net.Listener | null, config?: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Listener: init?.Listener ?? (null! as net.Listener | null),
			config: init?.config ?? (null! as __goscript_common.Config | $.VarRef<__goscript_common.Config> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): listener {
		return new listener(this, true)
	}

	public __goscriptAssign(source: listener): void {
		const target = this._fields
		const values = source._fields
		target.Listener = $.assignFieldValue(target.Listener, values.Listener, "net.Listener")
		target.config = values.config
	}

	public async Accept(): globalThis.Promise<[net.Conn | null, $.GoError]> {
		const l: listener | $.VarRef<listener> | null = this;
		const l$: listener = l == null ? $.pointerTarget<listener>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<listener>(l)
		let [c, err] = await $.pointerValue<Exclude<net.Listener, null>>((l$ as listener).Listener).Accept()
		if (err != null) {
			return [null, err]
		}
		return [$.interfaceValue<net.Conn | null>(Server(c, (l$ as listener).config), "*tls.Conn", /* @__PURE__ */ $.pointerType("tls.Conn")), null]
	}

	public Addr(): any {
		return $.pointerValue<Exclude<net.Listener | null, null>>(this.Listener).Addr()
	}

	public async Close(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Listener | null, null>>(this.Listener).Close()
	}

	static __typeInfo = $.registerStructType(
		"tls.listener",
		() => new listener(),
		() => [$.methodSignature("Accept", [], ["net.Conn", "error"], true), $.methodSignature("Addr", [], ["net.Addr"]), $.methodSignature("Close", [], ["error"])],
		listener,
		() => [/* @__PURE__ */ $.structField("Listener", "net.Listener", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("config", /* @__PURE__ */ $.pointerType("tls.Config"), [1], 16, false, { pkgPath: "crypto/tls" })]
	)
}

export class timeoutError {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): timeoutError {
		return new timeoutError(this, true)
	}

	public __goscriptAssign(source: timeoutError): void {
	}

	public Error(): string {
		return "tls: DialWithDialer timed out"
	}

	public Temporary(): boolean {
		return true
	}

	public Timeout(): boolean {
		return true
	}

	static __typeInfo = $.registerStructType(
		"tls.timeoutError",
		() => new timeoutError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Temporary", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Timeout", [], [/* @__PURE__ */ $.basicType("bool")])],
		timeoutError,
		() => []
	)
}

export class Dialer {
	// NetDialer is the optional dialer to use for the TLS connections'
	// underlying TCP connections.
	// A nil NetDialer is equivalent to the net.Dialer zero value.
	public get NetDialer(): net.Dialer | $.VarRef<net.Dialer> | null {
		return this._fields.NetDialer
	}

	public set NetDialer(value: net.Dialer | $.VarRef<net.Dialer> | null) {
		this._fields.NetDialer = value
	}

	// Config is the TLS configuration to use for new connections.
	// A nil configuration is equivalent to the zero
	// configuration; see the documentation of Config for the
	// defaults.
	public get Config(): __goscript_common.Config | $.VarRef<__goscript_common.Config> | null {
		return this._fields.Config
	}

	public set Config(value: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null) {
		this._fields.Config = value
	}

	public _fields: {
		NetDialer: net.Dialer | $.VarRef<net.Dialer> | null
		Config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null
	}

	constructor(init?: Partial<{NetDialer?: net.Dialer | $.VarRef<net.Dialer> | null, Config?: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			NetDialer: init?.NetDialer ?? (null! as net.Dialer | $.VarRef<net.Dialer> | null),
			Config: init?.Config ?? (null! as __goscript_common.Config | $.VarRef<__goscript_common.Config> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Dialer {
		return new Dialer(this, true)
	}

	public __goscriptAssign(source: Dialer): void {
		const target = this._fields
		const values = source._fields
		target.NetDialer = values.NetDialer
		target.Config = values.Config
	}

	public async Dial(network: string, addr: string): globalThis.Promise<[net.Conn | null, $.GoError]> {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Dialer).DialContext(context.Background(), network, addr) : Dialer.prototype.DialContext.call(d, context.Background(), network, addr))
	}

	public async DialContext(ctx: context.Context | null, network: string, addr: string): globalThis.Promise<[net.Conn | null, $.GoError]> {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		let __goscriptTuple2: any = await dial(ctx, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Dialer).netDialer() : Dialer.prototype.netDialer.call(d)), network, addr, $.pointerValue<Dialer>(d).Config)
		let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			// Don't return c (a typed nil) in an interface.
			return [null, err]
		}
		return [$.interfaceValue<net.Conn | null>(c, "*tls.Conn", /* @__PURE__ */ $.pointerType("tls.Conn")), null]
	}

	public netDialer(): net.Dialer | $.VarRef<net.Dialer> | null {
		const d: Dialer | $.VarRef<Dialer> | null = this;
		const d$: Dialer = d == null ? $.pointerTarget<Dialer>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Dialer>(d)
		if ((d$ as Dialer).NetDialer != null) {
			return (d$ as Dialer).NetDialer
		}
		return new net.Dialer()
	}

	static __typeInfo = $.registerStructType(
		"tls.Dialer",
		() => new Dialer(),
		() => [$.methodSignature("Dial", [["network", /* @__PURE__ */ $.basicType("string")], ["addr", /* @__PURE__ */ $.basicType("string")]], ["net.Conn", "error"], true), $.methodSignature("DialContext", [["ctx", "context.Context"], ["network", /* @__PURE__ */ $.basicType("string")], ["addr", /* @__PURE__ */ $.basicType("string")]], ["net.Conn", "error"], true), $.methodSignature("netDialer", [], [/* @__PURE__ */ $.pointerType("net.Dialer")], true)],
		Dialer,
		() => [/* @__PURE__ */ $.structField("NetDialer", /* @__PURE__ */ $.pointerType("net.Dialer"), [0], 0, true), /* @__PURE__ */ $.structField("Config", /* @__PURE__ */ $.pointerType("tls.Config"), [1], 8, true)]
	)
}

export function Server(conn: net.Conn | null, config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null): __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null {
	let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = new __goscript_conn.Conn({conn: conn, config: config})
	$.pointerValue<__goscript_conn.Conn>(c).handshakeFn = $.functionValue(((__receiver) => (ctx: context.Context | null) => __receiver.serverHandshake(ctx))($.pointerValue<__goscript_conn.Conn>(c)), ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo), "crypto/tls.(*Conn).serverHandshake-fm")
	return c
}

export function Client(conn: net.Conn | null, config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null): __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null {
	let c: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = new __goscript_conn.Conn({conn: conn, config: config, isClient: true})
	$.pointerValue<__goscript_conn.Conn>(c).handshakeFn = $.functionValue(((__receiver) => (ctx: context.Context | null) => __receiver.clientHandshake(ctx))($.pointerValue<__goscript_conn.Conn>(c)), ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo), "crypto/tls.(*Conn).clientHandshake-fm")
	return c
}

export function NewListener(inner: net.Listener | null, config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null): net.Listener | null {
	let l: listener | $.VarRef<listener> | null = new listener()
	let l$: listener = l == null ? $.pointerTarget<listener>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<listener>(l);
	;(l$ as listener).Listener = inner;
	;(l$ as listener).config = config
	return $.interfaceValue<net.Listener | null>(l, "*tls.listener", /* @__PURE__ */ $.pointerType("tls.listener"))
}

export async function Listen(network: string, laddr: string, config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null): globalThis.Promise<[net.Listener | null, $.GoError]> {
	const config$: __goscript_common.Config = config == null ? $.pointerTarget<__goscript_common.Config>(config) : (config as any).__isVarRef === true ? (config as any).value : (config as any).__goValue === undefined ? (config as any) : $.pointerTarget<__goscript_common.Config>(config)
	// If this condition changes, consider updating http.Server.ServeTLS too.
	if ((config == null) || ((($.sliceLen((config$ as __goscript_common.Config).Certificates) == 0) && ((config$ as __goscript_common.Config).GetCertificate == null)) && ((config$ as __goscript_common.Config).GetConfigForClient == null))) {
		return [null, errors.New("tls: neither Certificates, GetCertificate, nor GetConfigForClient set in Config")]
	}
	let [l, err] = await net.Listen(network, laddr)
	if (err != null) {
		return [null, err]
	}
	return [NewListener(l, config), null]
}

export async function DialWithDialer(dialer: net.Dialer | $.VarRef<net.Dialer> | null, network: string, addr: string, config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null): globalThis.Promise<[__goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null, $.GoError]> {
	return dial(context.Background(), dialer, network, addr, config)
}

export async function dial(ctx: context.Context | null, netDialer: net.Dialer | $.VarRef<net.Dialer> | null, network: string, addr: string, config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null): globalThis.Promise<[__goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null, $.GoError]> {
	await using __defer = new $.AsyncDisposableStack()
	const netDialer$: net.Dialer = netDialer == null ? $.pointerTarget<net.Dialer>(netDialer) : (netDialer as any).__isVarRef === true ? (netDialer as any).value : (netDialer as any).__goValue === undefined ? (netDialer as any) : $.pointerTarget<net.Dialer>(netDialer)
	if ((netDialer$ as net.Dialer).Timeout != 0n) {
		let cancel: context.CancelFunc | null = null! as context.CancelFunc | null
		let __goscriptTuple0: any = context.WithTimeout($.pointerValueOrNil(ctx)!, (netDialer$ as net.Dialer).Timeout)
		ctx = __goscriptTuple0[0]
		cancel = __goscriptTuple0[1]
		const __goscriptDeferCallee0 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
	}

	if (!$.markAsStructValue($.cloneStructValue((netDialer$ as net.Dialer).Deadline)).IsZero()) {
		let cancel: context.CancelFunc | null = null! as context.CancelFunc | null
		let __goscriptTuple1: any = context.WithDeadline($.pointerValueOrNil(ctx)!, $.markAsStructValue($.cloneStructValue((netDialer$ as net.Dialer).Deadline)))
		ctx = __goscriptTuple1[0]
		cancel = __goscriptTuple1[1]
		const __goscriptDeferCallee1 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
	}

	let [rawConn, err] = await (netDialer !== null && (netDialer as any).__isVarRef !== true && (netDialer as any).__goValue === undefined ? ((netDialer as any) as net.Dialer).DialContext(ctx, network, addr) : net.Dialer.prototype.DialContext.call(netDialer, ctx, network, addr))
	if (err != null) {
		return [null, err]
	}

	let colonPos = strings.LastIndex(addr, ":")
	if (colonPos == -1) {
		colonPos = $.stringLen(addr)
	}
	let hostname = $.sliceStringOrBytes(addr, undefined, colonPos)

	if (config == null) {
		config = __goscript_common.defaultConfig()
	}
	// If no ServerName is set, infer the ServerName
	// from the hostname we're connecting to.
	if ($.stringEqual($.pointerValue<__goscript_common.Config>(config).ServerName, "")) {
		// Make a copy to avoid polluting argument or default.
		let c: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null = await (config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as __goscript_common.Config).Clone() : __goscript_common.Config.prototype.Clone.call(config))
		$.pointerValue<__goscript_common.Config>(c).ServerName = hostname
		config = c
	}

	let conn: __goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null = Client(rawConn, config)
	{
		let __goscriptShadow0 = await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as __goscript_conn.Conn).HandshakeContext(ctx) : __goscript_conn.Conn.prototype.HandshakeContext.call(conn, ctx))
		if (__goscriptShadow0 != null) {
			void (__goscriptAwait = (rawConn !== null && (rawConn as any).__isVarRef !== true && (rawConn as any).__goValue === undefined ? (rawConn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(rawConn)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [null, __goscriptShadow0]
		}
	}
	return [conn, null]
}

export async function Dial(network: string, addr: string, config: __goscript_common.Config | $.VarRef<__goscript_common.Config> | null): globalThis.Promise<[__goscript_conn.Conn | $.VarRef<__goscript_conn.Conn> | null, $.GoError]> {
	return DialWithDialer(new net.Dialer(), network, addr, config)
}

export async function LoadX509KeyPair(certFile: string, keyFile: string): globalThis.Promise<[__goscript_common.Certificate, $.GoError]> {
	let __goscriptTuple3: any = await os.ReadFile(certFile)
	let certPEMBlock: $.Slice<number> = __goscriptTuple3[0]
	let err = __goscriptTuple3[1]
	if (err != null) {
		return [new __goscript_common.Certificate(undefined, true), err]
	}
	let __goscriptTuple4: any = await os.ReadFile(keyFile)
	let keyPEMBlock: $.Slice<number> = __goscriptTuple4[0]
	err = __goscriptTuple4[1]
	if (err != null) {
		return [new __goscript_common.Certificate(undefined, true), err]
	}
	return X509KeyPair(certPEMBlock, keyPEMBlock)
}

export async function X509KeyPair(certPEMBlock: $.Slice<number>, keyPEMBlock: $.Slice<number>): globalThis.Promise<[__goscript_common.Certificate, $.GoError]> {
	let fail: ((err: $.GoError) => [__goscript_common.Certificate, $.GoError] | globalThis.Promise<[__goscript_common.Certificate, $.GoError]>) | null = $.functionValue((err: $.GoError): [__goscript_common.Certificate, $.GoError] => {
		return [new __goscript_common.Certificate(undefined, true), err]
	}, ({ kind: $.TypeKind.Function, params: ["error"], results: ["tls.Certificate", "error"] } as $.FunctionTypeInfo))

	let cert: __goscript_common.Certificate = new __goscript_common.Certificate(undefined, true)
	let skippedBlockTypes: $.Slice<string> = null! as $.Slice<string>
	while (true) {
		let certDERBlock: pem.Block | $.VarRef<pem.Block> | null = null! as pem.Block | $.VarRef<pem.Block> | null
		let __goscriptTuple5: any = pem.Decode(certPEMBlock)
		certDERBlock = __goscriptTuple5[0]
		certPEMBlock = __goscriptTuple5[1]
		if (certDERBlock == null) {
			break
		}
		if ($.stringEqual($.pointerValue<pem.Block>(certDERBlock).Type, "CERTIFICATE")) {
			cert.Certificate = $.appendOne(cert.Certificate, $.pointerValue<pem.Block>(certDERBlock).Bytes, $.appendZeros.nil)
		} else {
			skippedBlockTypes = $.appendOne(skippedBlockTypes, $.pointerValue<pem.Block>(certDERBlock).Type)
		}
	}

	if ($.sliceLen(cert.Certificate) == 0) {
		if ($.sliceLen(skippedBlockTypes) == 0) {
			return fail!(errors.New("tls: failed to find any PEM data in certificate input"))
		}
		if (($.sliceLen(skippedBlockTypes) == 1) && strings.HasSuffix($.arrayIndex(skippedBlockTypes!, 0), "PRIVATE KEY")) {
			return fail!(errors.New("tls: failed to find certificate PEM data in certificate input, but did find a private key; PEM inputs may have been switched"))
		}
		return fail!(fmt.Errorf("tls: failed to find \"CERTIFICATE\" PEM block in certificate input after skipping PEM blocks of the following types: %v", $.interfaceValue(skippedBlockTypes, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))))
	}

	skippedBlockTypes = $.goSlice(skippedBlockTypes, undefined, 0)
	let keyDERBlock: pem.Block | $.VarRef<pem.Block> | null = null! as pem.Block | $.VarRef<pem.Block> | null
	while (true) {
		let __goscriptTuple6: any = pem.Decode(keyPEMBlock)
		keyDERBlock = __goscriptTuple6[0]
		keyPEMBlock = __goscriptTuple6[1]
		if (keyDERBlock == null) {
			if ($.sliceLen(skippedBlockTypes) == 0) {
				return fail!(errors.New("tls: failed to find any PEM data in key input"))
			}
			if (($.sliceLen(skippedBlockTypes) == 1) && ($.stringEqual($.arrayIndex(skippedBlockTypes!, 0), "CERTIFICATE"))) {
				return fail!(errors.New("tls: found a certificate rather than a key in the PEM for the private key"))
			}
			return fail!(fmt.Errorf("tls: failed to find PEM block with type ending in \"PRIVATE KEY\" in key input after skipping PEM blocks of the following types: %v", $.interfaceValue(skippedBlockTypes, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))))
		}
		if (($.stringEqual($.pointerValue<pem.Block>(keyDERBlock).Type, "PRIVATE KEY")) || strings.HasSuffix($.pointerValue<pem.Block>(keyDERBlock).Type, " PRIVATE KEY")) {
			break
		}
		skippedBlockTypes = $.appendOne(skippedBlockTypes, $.pointerValue<pem.Block>(keyDERBlock).Type)
	}

	// We don't need to parse the public key for TLS, but we so do anyway
	// to check that it looks sane and matches the private key.
	let __goscriptTuple7: any = await x509.ParseCertificate($.arrayIndex(cert.Certificate!, 0))
	let x509Cert: x509.Certificate | $.VarRef<x509.Certificate> | null = __goscriptTuple7[0]
	let err = __goscriptTuple7[1]
	if (err != null) {
		return fail!(err)
	}
	cert.Leaf = x509Cert

	let __goscriptTuple8: any = await parsePrivateKey($.pointerValue<pem.Block>(keyDERBlock).Bytes)
	cert.PrivateKey = __goscriptTuple8[0]
	err = __goscriptTuple8[1]
	if (err != null) {
		return fail!(err)
	}

	{
		const __goscriptTypeSwitchValue = $.pointerValue<x509.Certificate>(x509Cert).PublicKey
		switch (true) {
			case $.typeAssert<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PublicKey")).ok:
				{
					let pub: rsa.PublicKey | $.VarRef<rsa.PublicKey> | null = $.typeAssert<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PublicKey")).value
					let __goscriptTuple9: any = $.typeAssertTuple<rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null>(cert.PrivateKey, /* @__PURE__ */ $.pointerType("rsa.PrivateKey"))
					let priv: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null = __goscriptTuple9[0]
					let ok = __goscriptTuple9[1]
					if (!ok) {
						return fail!(errors.New("tls: private key type does not match public key type"))
					}
					if (!$.pointerValue<rsa.PrivateKey>(priv).PublicKey.Equal($.interfaceValue<crypto.PublicKey | null>(pub, "*rsa.PublicKey", /* @__PURE__ */ $.pointerType("rsa.PublicKey")))) {
						return fail!(errors.New("tls: private key does not match public key"))
					}
				}
				break
			case $.typeAssert<ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")).ok:
				{
					let pub: ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null = $.typeAssert<ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")).value
					let __goscriptTuple10: any = $.typeAssertTuple<ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null>(cert.PrivateKey, /* @__PURE__ */ $.pointerType("ecdsa.PrivateKey"))
					let priv: ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null = __goscriptTuple10[0]
					let ok = __goscriptTuple10[1]
					if (!ok) {
						return fail!(errors.New("tls: private key type does not match public key type"))
					}
					if (!$.pointerValue<ecdsa.PrivateKey>(priv).PublicKey.Equal($.interfaceValue<crypto.PublicKey | null>(pub, "*ecdsa.PublicKey", /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")))) {
						return fail!(errors.New("tls: private key does not match public key"))
					}
				}
				break
			case $.typeAssert<ed25519.PublicKey>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey")).ok:
				{
					let pub: ed25519.PublicKey = $.typeAssert<ed25519.PublicKey>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey")).value
					let __goscriptTuple11: any = $.typeAssertTuple<ed25519.PrivateKey>(cert.PrivateKey, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PrivateKey"))
					let priv: ed25519.PrivateKey = (__goscriptTuple11[0] as ed25519.PrivateKey)
					let ok = __goscriptTuple11[1]
					if (!ok) {
						return fail!(errors.New("tls: private key type does not match public key type"))
					}
					if (!ed25519.PublicKey_Equal($.mustTypeAssert<ed25519.PublicKey>(ed25519.PrivateKey_Public(priv), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey")), $.namedValueInterfaceValue<crypto.PublicKey | null>(pub, "ed25519.PublicKey", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))) {
						return fail!(errors.New("tls: private key does not match public key"))
					}
				}
				break
			case $.typeAssert<mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mldsa.PublicKey")).ok:
				{
					let pub: mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null = $.typeAssert<mldsa.PublicKey | $.VarRef<mldsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mldsa.PublicKey")).value
					let __goscriptTuple12: any = $.typeAssertTuple<mldsa.PrivateKey | $.VarRef<mldsa.PrivateKey> | null>(cert.PrivateKey, /* @__PURE__ */ $.pointerType("mldsa.PrivateKey"))
					let priv: mldsa.PrivateKey | $.VarRef<mldsa.PrivateKey> | null = __goscriptTuple12[0]
					let ok = __goscriptTuple12[1]
					if (!ok) {
						return fail!(errors.New("tls: private key type does not match public key type"))
					}
					if (!mldsa.PublicKey.prototype.Equal.call((priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? ((priv as any) as mldsa.PrivateKey).PublicKey() : mldsa.PrivateKey.prototype.PublicKey.call(priv)), $.interfaceValue<crypto.PublicKey | null>(pub, "*mldsa.PublicKey", /* @__PURE__ */ $.pointerType("mldsa.PublicKey")))) {
						return fail!(errors.New("tls: private key does not match public key"))
					}
				}
				break
			default:
				{
					let pub: any = __goscriptTypeSwitchValue
					return fail!(errors.New("tls: unknown public key algorithm"))
				}
				break
		}
	}

	return [(cert).clone(), null]
}

export async function parsePrivateKey(der: $.Slice<number>): globalThis.Promise<[crypto.PrivateKey | null, $.GoError]> {
	let [key, err] = await x509.ParsePKCS8PrivateKey(der)
	let pkcs8Err: $.GoError = err
	if (err != null) {
		let __goscriptTuple13: any = await x509.ParsePKCS1PrivateKey(der)
		key = $.interfaceValue(__goscriptTuple13[0], "*rsa.PrivateKey", /* @__PURE__ */ $.pointerType("rsa.PrivateKey"))
		err = __goscriptTuple13[1]
	}
	if (err != null) {
		let __goscriptTuple14: any = await x509.ParseECPrivateKey(der)
		key = $.interfaceValue(__goscriptTuple14[0], "*ecdsa.PrivateKey", /* @__PURE__ */ $.pointerType("ecdsa.PrivateKey"))
		err = __goscriptTuple14[1]
	}
	if (err != null) {
		return [null, fmt.Errorf("tls: failed to parse private key: %w", (pkcs8Err as any))]
	}
	{
		const __goscriptTypeSwitchValue = key
		switch (true) {
			case $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PrivateKey")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PrivateKey")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PrivateKey")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("mldsa.PrivateKey")):
				{
					let key = __goscriptTypeSwitchValue
					return [(key as crypto.PrivateKey | null), null]
				}
				break
			default:
				{
					let key: any = __goscriptTypeSwitchValue
					return [null, errors.New("tls: found unknown private key type in PKCS#8 wrapping")]
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Equal: (receiver: any, ...args: any[]) => (ed25519.PublicKey_Equal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Equal", [["x", "crypto.PublicKey"]], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptAwait: any
