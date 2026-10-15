// Generated file based on tls.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as net from "@goscript/net/index.js"

import * as url from "@goscript/net/url/index.js"

import * as os from "@goscript/os/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as credinternal from "@goscript/google.golang.org/grpc/internal/credentials/index.js"

import * as envconfig from "@goscript/google.golang.org/grpc/internal/envconfig/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as __goscript_credentials from "./credentials.gs.ts"
import "@goscript/context/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/index.js"
import "@goscript/net/url/index.js"
import "@goscript/os/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/internal/credentials/index.js"
import "@goscript/google.golang.org/grpc/internal/envconfig/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "./credentials.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/credentials", ["credentials.TLSInfo", "credentials.tlsCreds", "credentials.TLSChannelzSecurityValue"])

export class TLSInfo {
	public get State(): tls.ConnectionState {
		return this._fields.State
	}

	public set State(value: tls.ConnectionState) {
		this._fields.State = value
	}

	public get CommonAuthInfo(): __goscript_credentials.CommonAuthInfo {
		return this._fields.CommonAuthInfo
	}

	public set CommonAuthInfo(value: __goscript_credentials.CommonAuthInfo) {
		this._fields.CommonAuthInfo = value
	}

	// This API is experimental.
	public get SPIFFEID(): url.URL | $.VarRef<url.URL> | null {
		return this._fields.SPIFFEID
	}

	public set SPIFFEID(value: url.URL | $.VarRef<url.URL> | null) {
		this._fields.SPIFFEID = value
	}

	public _fields: {
		State: tls.ConnectionState
		CommonAuthInfo: __goscript_credentials.CommonAuthInfo
		SPIFFEID: url.URL | $.VarRef<url.URL> | null
	}

	constructor(init?: Partial<{State?: tls.ConnectionState, CommonAuthInfo?: __goscript_credentials.CommonAuthInfo, SPIFFEID?: url.URL | $.VarRef<url.URL> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			State: init?.State ? init.State.clone() : new tls.ConnectionState(undefined, true),
			CommonAuthInfo: init?.CommonAuthInfo ? init.CommonAuthInfo.clone() : new __goscript_credentials.CommonAuthInfo(undefined, true),
			SPIFFEID: init?.SPIFFEID ?? (null! as url.URL | $.VarRef<url.URL> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TLSInfo {
		return new TLSInfo(this, true)
	}

	public __goscriptAssign(source: TLSInfo): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.State, values.State)
		$.assignStruct(target.CommonAuthInfo, values.CommonAuthInfo)
		target.SPIFFEID = values.SPIFFEID
	}

	public AuthType(): string {
		const t = this;
		return "tls"
	}

	public async GetSecurityValue(): globalThis.Promise<__goscript_credentials.ChannelzSecurityValue | null> {
		const t = this;
		let v: TLSChannelzSecurityValue | $.VarRef<TLSChannelzSecurityValue> | null = (await (async () => { const __goscriptLiteralField0 = await cipherSuiteLookup(t.State.CipherSuite); return new TLSChannelzSecurityValue({StandardName: __goscriptLiteralField0}) })())
		// Currently there's no way to get LocalCertificate info from tls package.
		if ($.sliceLen(t.State.PeerCertificates) > 0) {
			$.pointerValue<TLSChannelzSecurityValue>(v).RemoteCertificate = $.pointerValue<x509.Certificate>($.arrayIndex(t.State.PeerCertificates!, 0)).Raw
		}
		return $.interfaceValue<__goscript_credentials.ChannelzSecurityValue | null>(v, "*credentials.TLSChannelzSecurityValue", /* @__PURE__ */ $.pointerType("credentials.TLSChannelzSecurityValue"))
	}

	public GetCommonAuthInfo(): any {
		return $.pointerValue<__goscript_credentials.CommonAuthInfo>(this.CommonAuthInfo).GetCommonAuthInfo()
	}

	static __typeInfo = $.registerStructType(
		"credentials.TLSInfo",
		() => new TLSInfo(),
		() => [$.methodSignature("AuthType", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("GetSecurityValue", [], ["credentials.ChannelzSecurityValue"]), $.methodSignature("GetCommonAuthInfo", [], ["credentials.CommonAuthInfo"])],
		TLSInfo,
		() => [/* @__PURE__ */ $.structField("State", "tls.ConnectionState", [0], 0, true), /* @__PURE__ */ $.structField("CommonAuthInfo", "credentials.CommonAuthInfo", [1], 216, true, { anonymous: true }), /* @__PURE__ */ $.structField("SPIFFEID", /* @__PURE__ */ $.pointerType("url.URL"), [2], 224, true)]
	)
}

export class tlsCreds {
	// TLS configuration
	public get config(): tls.Config | $.VarRef<tls.Config> | null {
		return this._fields.config
	}

	public set config(value: tls.Config | $.VarRef<tls.Config> | null) {
		this._fields.config = value
	}

	public _fields: {
		config: tls.Config | $.VarRef<tls.Config> | null
	}

	constructor(init?: Partial<{config?: tls.Config | $.VarRef<tls.Config> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			config: init?.config ?? (null! as tls.Config | $.VarRef<tls.Config> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tlsCreds {
		return new tlsCreds(this, true)
	}

	public __goscriptAssign(source: tlsCreds): void {
		const target = this._fields
		const values = source._fields
		target.config = values.config
	}

	public async ClientHandshake(ctx: context.Context | null, authority: string, rawConn: net.Conn | null): globalThis.Promise<[net.Conn | null, __goscript_credentials.AuthInfo | null, $.GoError]> {
		const c: tlsCreds | $.VarRef<tlsCreds> | null = this;
		let err: $.GoError = null! as $.GoError
		// use local cfg to avoid clobbering ServerName if using multiple endpoints
		let cfg: tls.Config | $.VarRef<tls.Config> | null = await credinternal.CloneTLSConfig($.pointerValue<tlsCreds>(c).config)
		let cfg$: tls.Config = cfg == null ? $.pointerTarget<tls.Config>(cfg) : (cfg as any).__isVarRef === true ? (cfg as any).value : (cfg as any).__goValue === undefined ? (cfg as any) : $.pointerTarget<tls.Config>(cfg)
		if ($.stringEqual((cfg$ as tls.Config).ServerName, "")) {
			let [serverName, , __goscriptShadow0] = await net.SplitHostPort(authority)
			if (__goscriptShadow0 != null) {
				// If the authority had no host port or if the authority cannot be parsed, use it as-is.
				serverName = authority
			}
			;(cfg$ as tls.Config).ServerName = serverName
		}
		let conn: tls.Conn | $.VarRef<tls.Conn> | null = tls.Client(rawConn, cfg)
		let errChannel: $.Channel<$.GoError> | null = $.makeChannel<$.GoError>(1, null! as $.GoError, "both")
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			await $.chanSend(errChannel, await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as tls.Conn).Handshake() : tls.Conn.prototype.Handshake.call(conn)))
			errChannel!.close()
		})() })
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, [net.Conn | null, __goscript_credentials.AuthInfo | null, $.GoError]>([
			{
				id: 0,
				isSend: false,
				channel: errChannel,
				onSelected: async (__goscriptSelect0Result) => {
					let err = __goscriptSelect0Result.value
					if (err != null) {
						await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as tls.Conn).Close() : tls.Conn.prototype.Close.call(conn))
						return [null, null, err]
					}
				}
			},
			{
				id: 1,
				isSend: false,
				channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect0Result) => {
					await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as tls.Conn).Close() : tls.Conn.prototype.Close.call(conn))
					return [null, null, (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
				}
			}
		], false)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}

		// The negotiated protocol can be either of the following:
		// 1. h2: When the server supports ALPN. Only HTTP/2 can be negotiated since
		//    it is the only protocol advertised by the client during the handshake.
		//    The tls library ensures that the server chooses a protocol advertised
		//    by the client.
		// 2. "" (empty string): If the server doesn't support ALPN. ALPN is a requirement
		//    for using HTTP/2 over TLS. We can terminate the connection immediately.
		let np = (await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as tls.Conn).ConnectionState() : tls.Conn.prototype.ConnectionState.call(conn))).NegotiatedProtocol
		if ($.stringEqual(np, "")) {
			if (envconfig.EnforceALPNEnabled) {
				await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as tls.Conn).Close() : tls.Conn.prototype.Close.call(conn))
				return [null, null, fmt.Errorf("credentials: cannot check peer: missing selected ALPN property")]
			}
			void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Warningf("Allowing TLS connection to server %q with ALPN disabled. TLS connections to servers with ALPN disabled will be disallowed in future grpc-go releases", $.arrayToSlice<any>([(cfg$ as tls.Config).ServerName])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		let tlsInfo = (await (async () => { const __goscriptLiteralField1 = await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as tls.Conn).ConnectionState() : tls.Conn.prototype.ConnectionState.call(conn)); return new TLSInfo({State: __goscriptLiteralField1, CommonAuthInfo: new __goscript_credentials.CommonAuthInfo({SecurityLevel: 3}, true)}, true) })())
		let id: url.URL | $.VarRef<url.URL> | null = await credinternal.SPIFFEIDFromState(await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as tls.Conn).ConnectionState() : tls.Conn.prototype.ConnectionState.call(conn)))
		if (id != null) {
			tlsInfo.SPIFFEID = id
		}
		return [credinternal.WrapSyscallConn(rawConn, $.interfaceValue<net.Conn | null>(conn, "*tls.Conn", /* @__PURE__ */ $.pointerType("tls.Conn"))), $.interfaceValue<__goscript_credentials.AuthInfo | null>((tlsInfo).clone(), "credentials.TLSInfo", "credentials.TLSInfo"), null]
	}

	public async Clone(): globalThis.Promise<__goscript_credentials.TransportCredentials | null> {
		const c: tlsCreds | $.VarRef<tlsCreds> | null = this;
		return NewTLS($.pointerValue<tlsCreds>(c).config)
	}

	public Info(): __goscript_credentials.ProtocolInfo {
		const c = this;
		return new __goscript_credentials.ProtocolInfo({SecurityProtocol: "tls", SecurityVersion: "1.2", ServerName: $.pointerValue<tls.Config>(c.config).ServerName}, true)
	}

	public OverrideServerName(serverNameOverride: string): $.GoError {
		let c: tlsCreds | $.VarRef<tlsCreds> | null = this;
		$.pointerValue<tls.Config>($.pointerValue<tlsCreds>(c).config).ServerName = serverNameOverride
		return null
	}

	public async ServerHandshake(rawConn: net.Conn | null): globalThis.Promise<[net.Conn | null, __goscript_credentials.AuthInfo | null, $.GoError]> {
		const c: tlsCreds | $.VarRef<tlsCreds> | null = this;
		let conn: tls.Conn | $.VarRef<tls.Conn> | null = tls.Server(rawConn, $.pointerValue<tlsCreds>(c).config)
		{
			let err = await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as tls.Conn).Handshake() : tls.Conn.prototype.Handshake.call(conn))
			if (err != null) {
				await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as tls.Conn).Close() : tls.Conn.prototype.Close.call(conn))
				return [null, null, err]
			}
		}
		let cs = await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as tls.Conn).ConnectionState() : tls.Conn.prototype.ConnectionState.call(conn))
		// The negotiated application protocol can be empty only if the client doesn't
		// support ALPN. In such cases, we can close the connection since ALPN is required
		// for using HTTP/2 over TLS.
		if ($.stringEqual(cs.NegotiatedProtocol, "")) {
			if (envconfig.EnforceALPNEnabled) {
				await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as tls.Conn).Close() : tls.Conn.prototype.Close.call(conn))
				return [null, null, fmt.Errorf("credentials: cannot check peer: missing selected ALPN property")]
			} else {
				if ((__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).V(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Info($.arrayToSlice<any>(["Allowing TLS connection from client with ALPN disabled. TLS connections with ALPN disabled will be disallowed in future grpc-go releases"])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		}
		let tlsInfo = new TLSInfo({State: cs, CommonAuthInfo: new __goscript_credentials.CommonAuthInfo({SecurityLevel: 3}, true)}, true)
		let id: url.URL | $.VarRef<url.URL> | null = await credinternal.SPIFFEIDFromState(await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as tls.Conn).ConnectionState() : tls.Conn.prototype.ConnectionState.call(conn)))
		if (id != null) {
			tlsInfo.SPIFFEID = id
		}
		return [credinternal.WrapSyscallConn(rawConn, $.interfaceValue<net.Conn | null>(conn, "*tls.Conn", /* @__PURE__ */ $.pointerType("tls.Conn"))), $.interfaceValue<__goscript_credentials.AuthInfo | null>((tlsInfo).clone(), "credentials.TLSInfo", "credentials.TLSInfo"), null]
	}

	static __typeInfo = $.registerStructType(
		"credentials.tlsCreds",
		() => new tlsCreds(),
		() => [$.methodSignature("ClientHandshake", [["ctx", "context.Context"], ["authority", /* @__PURE__ */ $.basicType("string")], ["rawConn", "net.Conn"]], [["_", "net.Conn"], ["_", "credentials.AuthInfo"], ["err", "error"]], true), $.methodSignature("Clone", [], ["credentials.TransportCredentials"], true), $.methodSignature("Info", [], ["credentials.ProtocolInfo"]), $.methodSignature("OverrideServerName", [["serverNameOverride", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("ServerHandshake", [["rawConn", "net.Conn"]], ["net.Conn", "credentials.AuthInfo", "error"], true)],
		tlsCreds,
		() => [/* @__PURE__ */ $.structField("config", /* @__PURE__ */ $.pointerType("tls.Config"), [0], 0, false, { pkgPath: "google.golang.org/grpc/credentials" })]
	)
}

export class TLSChannelzSecurityValue {
	public get ChannelzSecurityValue(): __goscript_credentials.ChannelzSecurityValue | null {
		return this._fields.ChannelzSecurityValue
	}

	public set ChannelzSecurityValue(value: __goscript_credentials.ChannelzSecurityValue | null) {
		this._fields.ChannelzSecurityValue = value
	}

	public get StandardName(): string {
		return this._fields.StandardName
	}

	public set StandardName(value: string) {
		this._fields.StandardName = value
	}

	public get LocalCertificate(): $.Slice<number> {
		return this._fields.LocalCertificate
	}

	public set LocalCertificate(value: $.Slice<number>) {
		this._fields.LocalCertificate = value
	}

	public get RemoteCertificate(): $.Slice<number> {
		return this._fields.RemoteCertificate
	}

	public set RemoteCertificate(value: $.Slice<number>) {
		this._fields.RemoteCertificate = value
	}

	public _fields: {
		ChannelzSecurityValue: __goscript_credentials.ChannelzSecurityValue | null
		StandardName: string
		LocalCertificate: $.Slice<number>
		RemoteCertificate: $.Slice<number>
	}

	constructor(init?: Partial<{ChannelzSecurityValue?: __goscript_credentials.ChannelzSecurityValue | null, StandardName?: string, LocalCertificate?: $.Slice<number>, RemoteCertificate?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			ChannelzSecurityValue: init?.ChannelzSecurityValue ?? (null! as __goscript_credentials.ChannelzSecurityValue | null),
			StandardName: init?.StandardName ?? ("" as string),
			LocalCertificate: init?.LocalCertificate ?? (null! as $.Slice<number>),
			RemoteCertificate: init?.RemoteCertificate ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TLSChannelzSecurityValue {
		return new TLSChannelzSecurityValue(this, true)
	}

	public __goscriptAssign(source: TLSChannelzSecurityValue): void {
		const target = this._fields
		const values = source._fields
		target.ChannelzSecurityValue = $.assignFieldValue(target.ChannelzSecurityValue, values.ChannelzSecurityValue, "credentials.ChannelzSecurityValue")
		target.StandardName = values.StandardName
		target.LocalCertificate = values.LocalCertificate
		target.RemoteCertificate = values.RemoteCertificate
	}

	public isChannelzSecurityValue(): any {
		return $.pointerValue<Exclude<__goscript_credentials.ChannelzSecurityValue | null, null>>(this.ChannelzSecurityValue).isChannelzSecurityValue()
	}

	static __typeInfo = $.registerStructType(
		"credentials.TLSChannelzSecurityValue",
		() => new TLSChannelzSecurityValue(),
		() => [$.methodSignature("isChannelzSecurityValue")],
		TLSChannelzSecurityValue,
		() => [/* @__PURE__ */ $.structField("ChannelzSecurityValue", "credentials.ChannelzSecurityValue", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("StandardName", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("LocalCertificate", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 32, true), /* @__PURE__ */ $.structField("RemoteCertificate", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 56, true)]
	)
}

export let logger: grpclog.DepthLoggerV2 | null = await grpclog.Component("credentials")

export function __goscript_set_logger(__goscriptValue: grpclog.DepthLoggerV2 | null): void {
	logger = __goscriptValue
}

export async function cipherSuiteLookup(cipherSuiteID: number): globalThis.Promise<string> {
	for (let __goscriptRangeTarget0 = tls.CipherSuites(), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let s = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as tls.CipherSuite | $.VarRef<tls.CipherSuite> | null)
		if ($.pointerValue<tls.CipherSuite>(s).ID == cipherSuiteID) {
			return $.pointerValue<tls.CipherSuite>(s).Name
		}
	}
	for (let __goscriptRangeTarget1 = tls.InsecureCipherSuites(), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let s = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as tls.CipherSuite | $.VarRef<tls.CipherSuite> | null)
		if ($.pointerValue<tls.CipherSuite>(s).ID == cipherSuiteID) {
			return $.pointerValue<tls.CipherSuite>(s).Name
		}
	}
	return fmt.Sprintf("unknown ID: %v", $.basicInterfaceValue(cipherSuiteID, "uint16"))
}

export let tls12ForbiddenCipherSuites: globalThis.Map<number, {}> | null = $.makeMap<number, {}>([[47, {}], [53, {}], [156, {}], [157, {}], [49161, {}], [49162, {}], [49171, {}], [49172, {}]])

export function __goscript_set_tls12ForbiddenCipherSuites(__goscriptValue: globalThis.Map<number, {}> | null): void {
	tls12ForbiddenCipherSuites = __goscriptValue
}

export async function NewTLS(c: tls.Config | $.VarRef<tls.Config> | null): globalThis.Promise<__goscript_credentials.TransportCredentials | null> {
	let tc: tlsCreds | $.VarRef<tlsCreds> | null = (await (async () => { const __goscriptLiteralField2 = await credinternal.CloneTLSConfig(c); return new tlsCreds({config: __goscriptLiteralField2}) })())
	let tc$: tlsCreds = tc == null ? $.pointerTarget<tlsCreds>(tc) : (tc as any).__isVarRef === true ? (tc as any).value : (tc as any).__goValue === undefined ? (tc as any) : $.pointerTarget<tlsCreds>(tc)
	$.pointerValue<tls.Config>((tc$ as tlsCreds).config).NextProtos = credinternal.AppendH2ToNextProtos($.pointerValue<tls.Config>((tc$ as tlsCreds).config).NextProtos)
	// If the user did not configure a MinVersion and did not configure a
	// MaxVersion < 1.2, use MinVersion=1.2, which is required by
	// https://datatracker.ietf.org/doc/html/rfc7540#section-9.2
	if (($.pointerValue<tls.Config>((tc$ as tlsCreds).config).MinVersion == 0) && (($.pointerValue<tls.Config>((tc$ as tlsCreds).config).MaxVersion == 0) || ($.pointerValue<tls.Config>((tc$ as tlsCreds).config).MaxVersion >= 771))) {
		$.pointerValue<tls.Config>((tc$ as tlsCreds).config).MinVersion = 771
	}
	// If the user did not configure CipherSuites, use all "secure" cipher
	// suites reported by the TLS package, but remove some explicitly forbidden
	// by https://datatracker.ietf.org/doc/html/rfc7540#appendix-A
	if ($.pointerValue<tls.Config>((tc$ as tlsCreds).config).CipherSuites == null) {
		for (let __goscriptRangeTarget2 = tls.CipherSuites(), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let cs = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as tls.CipherSuite | $.VarRef<tls.CipherSuite> | null)
			{
				let [, ok] = $.mapGet<number, {}, {}>(tls12ForbiddenCipherSuites, $.pointerValue<tls.CipherSuite>(cs).ID, {})
				if (!ok) {
					$.pointerValue<tls.Config>((tc$ as tlsCreds).config).CipherSuites = $.appendOne($.pointerValue<tls.Config>((tc$ as tlsCreds).config).CipherSuites, $.uint($.pointerValue<tls.CipherSuite>(cs).ID, 16))
				}
			}
		}
	}
	return $.interfaceValue<__goscript_credentials.TransportCredentials | null>(tc, "*credentials.tlsCreds", /* @__PURE__ */ $.pointerType("credentials.tlsCreds"))
}

export async function NewClientTLSFromCert(cp: x509.CertPool | $.VarRef<x509.CertPool> | null, serverNameOverride: string): globalThis.Promise<__goscript_credentials.TransportCredentials | null> {
	return NewTLS(new tls.Config({ServerName: serverNameOverride, RootCAs: cp}))
}

export async function NewClientTLSFromFile(certFile: string, serverNameOverride: string): globalThis.Promise<[__goscript_credentials.TransportCredentials | null, $.GoError]> {
	let __goscriptTuple0: any = await os.ReadFile(certFile)
	let b: $.Slice<number> = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}
	let cp: x509.CertPool | $.VarRef<x509.CertPool> | null = x509.NewCertPool()
	if (!await (cp !== null && (cp as any).__isVarRef !== true && (cp as any).__goValue === undefined ? ((cp as any) as x509.CertPool).AppendCertsFromPEM(b) : x509.CertPool.prototype.AppendCertsFromPEM.call(cp, b))) {
		return [null, fmt.Errorf("credentials: failed to append certificates")]
	}
	return [await NewTLS(new tls.Config({ServerName: serverNameOverride, RootCAs: cp})), null]
}

export async function NewServerTLSFromCert(cert: tls.Certificate | $.VarRef<tls.Certificate> | null): globalThis.Promise<__goscript_credentials.TransportCredentials | null> {
	return NewTLS(new tls.Config({Certificates: $.arrayToSlice<tls.Certificate>([($.pointerValue<tls.Certificate>(cert)).clone()])}))
}

export async function NewServerTLSFromFile(certFile: string, keyFile: string): globalThis.Promise<[__goscript_credentials.TransportCredentials | null, $.GoError]> {
	let [cert, err] = await tls.LoadX509KeyPair(certFile, keyFile)
	if (err != null) {
		return [null, err]
	}
	return [await NewTLS(new tls.Config({Certificates: $.arrayToSlice<tls.Certificate>([(cert).clone()])})), null]
}

var __goscriptAwait: any
