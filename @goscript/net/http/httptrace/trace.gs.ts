// Generated file based on trace.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as nettrace from "@goscript/internal/nettrace/index.js"

import * as net from "@goscript/net/index.js"

import * as textproto from "@goscript/net/textproto/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/internal/nettrace/index.js"
import "@goscript/net/index.js"
import "@goscript/net/textproto/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("net/http/httptrace", ["httptrace.clientEventContextKey", "httptrace.ClientTrace", "httptrace.WroteRequestInfo", "httptrace.DNSStartInfo", "httptrace.DNSDoneInfo", "httptrace.GotConnInfo"])

export class clientEventContextKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): clientEventContextKey {
		return new clientEventContextKey(this, true)
	}

	public __goscriptAssign(source: clientEventContextKey): void {
	}

	static __typeInfo = $.registerStructType(
		"httptrace.clientEventContextKey",
		() => new clientEventContextKey(),
		() => [],
		clientEventContextKey,
		() => []
	)
}

export class ClientTrace {
	// GetConn is called before a connection is created or
	// retrieved from an idle pool. The hostPort is the
	// "host:port" of the target or proxy. GetConn is called even
	// if there's already an idle cached connection available.
	public get GetConn(): ((hostPort: string) => void) | null {
		return this._fields.GetConn
	}

	public set GetConn(value: ((hostPort: string) => void) | null) {
		this._fields.GetConn = value
	}

	// GotConn is called after a successful connection is
	// obtained. There is no hook for failure to obtain a
	// connection; instead, use the error from
	// Transport.RoundTrip.
	public get GotConn(): ((_p0: GotConnInfo) => void) | null {
		return this._fields.GotConn
	}

	public set GotConn(value: ((_p0: GotConnInfo) => void) | null) {
		this._fields.GotConn = value
	}

	// PutIdleConn is called when the connection is returned to
	// the idle pool. If err is nil, the connection was
	// successfully returned to the idle pool. If err is non-nil,
	// it describes why not. PutIdleConn is not called if
	// connection reuse is disabled via Transport.DisableKeepAlives.
	// PutIdleConn is called before the caller's Response.Body.Close
	// call returns.
	// For HTTP/2, this hook is not currently used.
	public get PutIdleConn(): ((err: $.GoError) => void) | null {
		return this._fields.PutIdleConn
	}

	public set PutIdleConn(value: ((err: $.GoError) => void) | null) {
		this._fields.PutIdleConn = value
	}

	// GotFirstResponseByte is called when the first byte of the response
	// headers is available.
	public get GotFirstResponseByte(): (() => void) | null {
		return this._fields.GotFirstResponseByte
	}

	public set GotFirstResponseByte(value: (() => void) | null) {
		this._fields.GotFirstResponseByte = value
	}

	// Got100Continue is called if the server replies with a "100
	// Continue" response.
	public get Got100Continue(): (() => void) | null {
		return this._fields.Got100Continue
	}

	public set Got100Continue(value: (() => void) | null) {
		this._fields.Got100Continue = value
	}

	// Got1xxResponse is called for each 1xx informational response header
	// returned before the final non-1xx response. Got1xxResponse is called
	// for "100 Continue" responses, even if Got100Continue is also defined.
	// If it returns an error, the client request is aborted with that error value.
	public get Got1xxResponse(): ((code: number, header: textproto.MIMEHeader) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.Got1xxResponse
	}

	public set Got1xxResponse(value: ((code: number, header: textproto.MIMEHeader) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.Got1xxResponse = value
	}

	// DNSStart is called when a DNS lookup begins.
	public get DNSStart(): ((_p0: DNSStartInfo) => void) | null {
		return this._fields.DNSStart
	}

	public set DNSStart(value: ((_p0: DNSStartInfo) => void) | null) {
		this._fields.DNSStart = value
	}

	// DNSDone is called when a DNS lookup ends.
	public get DNSDone(): ((_p0: DNSDoneInfo) => void) | null {
		return this._fields.DNSDone
	}

	public set DNSDone(value: ((_p0: DNSDoneInfo) => void) | null) {
		this._fields.DNSDone = value
	}

	// ConnectStart is called when a new connection's Dial begins.
	// If net.Dialer.DualStack (IPv6 "Happy Eyeballs") support is
	// enabled, this may be called multiple times.
	public get ConnectStart(): ((network: string, addr: string) => void) | null {
		return this._fields.ConnectStart
	}

	public set ConnectStart(value: ((network: string, addr: string) => void) | null) {
		this._fields.ConnectStart = value
	}

	// ConnectDone is called when a new connection's Dial
	// completes. The provided err indicates whether the
	// connection completed successfully.
	// If net.Dialer.DualStack ("Happy Eyeballs") support is
	// enabled, this may be called multiple times.
	public get ConnectDone(): ((network: string, addr: string, err: $.GoError) => void) | null {
		return this._fields.ConnectDone
	}

	public set ConnectDone(value: ((network: string, addr: string, err: $.GoError) => void) | null) {
		this._fields.ConnectDone = value
	}

	// TLSHandshakeStart is called when the TLS handshake is started. When
	// connecting to an HTTPS site via an HTTP proxy, the handshake happens
	// after the CONNECT request is processed by the proxy.
	public get TLSHandshakeStart(): (() => void) | null {
		return this._fields.TLSHandshakeStart
	}

	public set TLSHandshakeStart(value: (() => void) | null) {
		this._fields.TLSHandshakeStart = value
	}

	// TLSHandshakeDone is called after the TLS handshake with either the
	// successful handshake's connection state, or a non-nil error on handshake
	// failure.
	public get TLSHandshakeDone(): ((_p0: tls.ConnectionState, _p1: $.GoError) => void) | null {
		return this._fields.TLSHandshakeDone
	}

	public set TLSHandshakeDone(value: ((_p0: tls.ConnectionState, _p1: $.GoError) => void) | null) {
		this._fields.TLSHandshakeDone = value
	}

	// WroteHeaderField is called after the Transport has written
	// each request header. At the time of this call the values
	// might be buffered and not yet written to the network.
	public get WroteHeaderField(): ((key: string, value: $.Slice<string>) => void) | null {
		return this._fields.WroteHeaderField
	}

	public set WroteHeaderField(value: ((key: string, value: $.Slice<string>) => void) | null) {
		this._fields.WroteHeaderField = value
	}

	// WroteHeaders is called after the Transport has written
	// all request headers.
	public get WroteHeaders(): (() => void) | null {
		return this._fields.WroteHeaders
	}

	public set WroteHeaders(value: (() => void) | null) {
		this._fields.WroteHeaders = value
	}

	// Wait100Continue is called if the Request specified
	// "Expect: 100-continue" and the Transport has written the
	// request headers but is waiting for "100 Continue" from the
	// server before writing the request body.
	public get Wait100Continue(): (() => void) | null {
		return this._fields.Wait100Continue
	}

	public set Wait100Continue(value: (() => void) | null) {
		this._fields.Wait100Continue = value
	}

	// WroteRequest is called with the result of writing the
	// request and any body. It may be called multiple times
	// in the case of retried requests.
	public get WroteRequest(): ((_p0: WroteRequestInfo) => void) | null {
		return this._fields.WroteRequest
	}

	public set WroteRequest(value: ((_p0: WroteRequestInfo) => void) | null) {
		this._fields.WroteRequest = value
	}

	public _fields: {
		GetConn: ((hostPort: string) => void) | null
		GotConn: ((_p0: GotConnInfo) => void) | null
		PutIdleConn: ((err: $.GoError) => void) | null
		GotFirstResponseByte: (() => void) | null
		Got100Continue: (() => void) | null
		Got1xxResponse: ((code: number, header: textproto.MIMEHeader) => $.GoError | globalThis.Promise<$.GoError>) | null
		DNSStart: ((_p0: DNSStartInfo) => void) | null
		DNSDone: ((_p0: DNSDoneInfo) => void) | null
		ConnectStart: ((network: string, addr: string) => void) | null
		ConnectDone: ((network: string, addr: string, err: $.GoError) => void) | null
		TLSHandshakeStart: (() => void) | null
		TLSHandshakeDone: ((_p0: tls.ConnectionState, _p1: $.GoError) => void) | null
		WroteHeaderField: ((key: string, value: $.Slice<string>) => void) | null
		WroteHeaders: (() => void) | null
		Wait100Continue: (() => void) | null
		WroteRequest: ((_p0: WroteRequestInfo) => void) | null
	}

	constructor(init?: Partial<{GetConn?: ((hostPort: string) => void) | null, GotConn?: ((_p0: GotConnInfo) => void) | null, PutIdleConn?: ((err: $.GoError) => void) | null, GotFirstResponseByte?: (() => void) | null, Got100Continue?: (() => void) | null, Got1xxResponse?: ((code: number, header: textproto.MIMEHeader) => $.GoError | globalThis.Promise<$.GoError>) | null, DNSStart?: ((_p0: DNSStartInfo) => void) | null, DNSDone?: ((_p0: DNSDoneInfo) => void) | null, ConnectStart?: ((network: string, addr: string) => void) | null, ConnectDone?: ((network: string, addr: string, err: $.GoError) => void) | null, TLSHandshakeStart?: (() => void) | null, TLSHandshakeDone?: ((_p0: tls.ConnectionState, _p1: $.GoError) => void) | null, WroteHeaderField?: ((key: string, value: $.Slice<string>) => void) | null, WroteHeaders?: (() => void) | null, Wait100Continue?: (() => void) | null, WroteRequest?: ((_p0: WroteRequestInfo) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			GetConn: init?.GetConn ?? (null! as ((hostPort: string) => void) | null),
			GotConn: init?.GotConn ?? (null! as ((_p0: GotConnInfo) => void) | null),
			PutIdleConn: init?.PutIdleConn ?? (null! as ((err: $.GoError) => void) | null),
			GotFirstResponseByte: init?.GotFirstResponseByte ?? (null! as (() => void) | null),
			Got100Continue: init?.Got100Continue ?? (null! as (() => void) | null),
			Got1xxResponse: init?.Got1xxResponse ?? (null! as ((code: number, header: textproto.MIMEHeader) => $.GoError | globalThis.Promise<$.GoError>) | null),
			DNSStart: init?.DNSStart ?? (null! as ((_p0: DNSStartInfo) => void) | null),
			DNSDone: init?.DNSDone ?? (null! as ((_p0: DNSDoneInfo) => void) | null),
			ConnectStart: init?.ConnectStart ?? (null! as ((network: string, addr: string) => void) | null),
			ConnectDone: init?.ConnectDone ?? (null! as ((network: string, addr: string, err: $.GoError) => void) | null),
			TLSHandshakeStart: init?.TLSHandshakeStart ?? (null! as (() => void) | null),
			TLSHandshakeDone: init?.TLSHandshakeDone ?? (null! as ((_p0: tls.ConnectionState, _p1: $.GoError) => void) | null),
			WroteHeaderField: init?.WroteHeaderField ?? (null! as ((key: string, value: $.Slice<string>) => void) | null),
			WroteHeaders: init?.WroteHeaders ?? (null! as (() => void) | null),
			Wait100Continue: init?.Wait100Continue ?? (null! as (() => void) | null),
			WroteRequest: init?.WroteRequest ?? (null! as ((_p0: WroteRequestInfo) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientTrace {
		return new ClientTrace(this, true)
	}

	public __goscriptAssign(source: ClientTrace): void {
		const target = this._fields
		const values = source._fields
		target.GetConn = values.GetConn
		target.GotConn = values.GotConn
		target.PutIdleConn = values.PutIdleConn
		target.GotFirstResponseByte = values.GotFirstResponseByte
		target.Got100Continue = values.Got100Continue
		target.Got1xxResponse = values.Got1xxResponse
		target.DNSStart = values.DNSStart
		target.DNSDone = values.DNSDone
		target.ConnectStart = values.ConnectStart
		target.ConnectDone = values.ConnectDone
		target.TLSHandshakeStart = values.TLSHandshakeStart
		target.TLSHandshakeDone = values.TLSHandshakeDone
		target.WroteHeaderField = values.WroteHeaderField
		target.WroteHeaders = values.WroteHeaders
		target.Wait100Continue = values.Wait100Continue
		target.WroteRequest = values.WroteRequest
	}

	public compose(old: ClientTrace | $.VarRef<ClientTrace> | null): void {
		let t: ClientTrace | $.VarRef<ClientTrace> | null = this;
		const t$: ClientTrace = t == null ? $.pointerTarget<ClientTrace>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<ClientTrace>(t)
		const old$: ClientTrace = old == null ? $.pointerTarget<ClientTrace>(old) : (old as any).__isVarRef === true ? (old as any).value : (old as any).__goValue === undefined ? (old as any) : $.pointerTarget<ClientTrace>(old)
		if (old == null) {
			return
		}
		;(t$ as ClientTrace).GetConn = (compose1to0(__goscriptStatic0(), (t$ as ClientTrace).GetConn, (old$ as ClientTrace).GetConn) as ((hostPort: string) => void) | null);
		;(t$ as ClientTrace).GotConn = (compose1to0(__goscriptStatic1(), (t$ as ClientTrace).GotConn, (old$ as ClientTrace).GotConn) as ((_p0: GotConnInfo) => void) | null);
		;(t$ as ClientTrace).PutIdleConn = (compose1to0(__goscriptStatic2(), (t$ as ClientTrace).PutIdleConn, (old$ as ClientTrace).PutIdleConn) as ((err: $.GoError) => void) | null);
		;(t$ as ClientTrace).GotFirstResponseByte = (compose0to0(__goscriptStatic3(), (t$ as ClientTrace).GotFirstResponseByte, (old$ as ClientTrace).GotFirstResponseByte) as (() => void) | null);
		;(t$ as ClientTrace).Got100Continue = (compose0to0(__goscriptStatic3(), (t$ as ClientTrace).Got100Continue, (old$ as ClientTrace).Got100Continue) as (() => void) | null);
		;(t$ as ClientTrace).Got1xxResponse = (compose2to1(__goscriptStatic4(), (t$ as ClientTrace).Got1xxResponse, (old$ as ClientTrace).Got1xxResponse) as ((code: number, header: textproto.MIMEHeader) => $.GoError | globalThis.Promise<$.GoError>) | null);
		;(t$ as ClientTrace).DNSStart = (compose1to0(__goscriptStatic5(), (t$ as ClientTrace).DNSStart, (old$ as ClientTrace).DNSStart) as ((_p0: DNSStartInfo) => void) | null);
		;(t$ as ClientTrace).DNSDone = (compose1to0(__goscriptStatic6(), (t$ as ClientTrace).DNSDone, (old$ as ClientTrace).DNSDone) as ((_p0: DNSDoneInfo) => void) | null);
		;(t$ as ClientTrace).ConnectStart = (compose2to0(__goscriptStatic7(), (t$ as ClientTrace).ConnectStart, (old$ as ClientTrace).ConnectStart) as ((network: string, addr: string) => void) | null);
		;(t$ as ClientTrace).ConnectDone = (compose3to0(__goscriptStatic8(), (t$ as ClientTrace).ConnectDone, (old$ as ClientTrace).ConnectDone) as ((network: string, addr: string, err: $.GoError) => void) | null);
		;(t$ as ClientTrace).TLSHandshakeStart = (compose0to0(__goscriptStatic3(), (t$ as ClientTrace).TLSHandshakeStart, (old$ as ClientTrace).TLSHandshakeStart) as (() => void) | null);
		;(t$ as ClientTrace).TLSHandshakeDone = (compose2to0(__goscriptStatic9(), (t$ as ClientTrace).TLSHandshakeDone, (old$ as ClientTrace).TLSHandshakeDone) as ((_p0: tls.ConnectionState, _p1: $.GoError) => void) | null);
		;(t$ as ClientTrace).WroteHeaderField = (compose2to0(__goscriptStatic10(), (t$ as ClientTrace).WroteHeaderField, (old$ as ClientTrace).WroteHeaderField) as ((key: string, value: $.Slice<string>) => void) | null);
		;(t$ as ClientTrace).WroteHeaders = (compose0to0(__goscriptStatic3(), (t$ as ClientTrace).WroteHeaders, (old$ as ClientTrace).WroteHeaders) as (() => void) | null);
		;(t$ as ClientTrace).Wait100Continue = (compose0to0(__goscriptStatic3(), (t$ as ClientTrace).Wait100Continue, (old$ as ClientTrace).Wait100Continue) as (() => void) | null);
		;(t$ as ClientTrace).WroteRequest = (compose1to0(__goscriptStatic11(), (t$ as ClientTrace).WroteRequest, (old$ as ClientTrace).WroteRequest) as ((_p0: WroteRequestInfo) => void) | null)
	}

	public hasNetHooks(): boolean {
		const t: ClientTrace | $.VarRef<ClientTrace> | null = this;
		const t$: ClientTrace = t == null ? $.pointerTarget<ClientTrace>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<ClientTrace>(t)
		if (t == null) {
			return false
		}
		return ((((t$ as ClientTrace).DNSStart != null) || ((t$ as ClientTrace).DNSDone != null)) || ((t$ as ClientTrace).ConnectStart != null)) || ((t$ as ClientTrace).ConnectDone != null)
	}

	static __typeInfo = $.registerStructType(
		"httptrace.ClientTrace",
		() => new ClientTrace(),
		() => [$.methodSignature("compose", [["old", /* @__PURE__ */ $.pointerType("httptrace.ClientTrace")]], [], true), $.methodSignature("hasNetHooks", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		ClientTrace,
		() => [/* @__PURE__ */ $.structField("GetConn", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("GotConn", ({ kind: $.TypeKind.Function, params: ["httptrace.GotConnInfo"], results: [] } as $.FunctionTypeInfo), [1], 8, true), /* @__PURE__ */ $.structField("PutIdleConn", ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo), [2], 16, true), /* @__PURE__ */ $.structField("GotFirstResponseByte", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [3], 24, true), /* @__PURE__ */ $.structField("Got100Continue", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [4], 32, true), /* @__PURE__ */ $.structField("Got1xxResponse", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), "textproto.MIMEHeader"], results: ["error"] } as $.FunctionTypeInfo), [5], 40, true), /* @__PURE__ */ $.structField("DNSStart", ({ kind: $.TypeKind.Function, params: ["httptrace.DNSStartInfo"], results: [] } as $.FunctionTypeInfo), [6], 48, true), /* @__PURE__ */ $.structField("DNSDone", ({ kind: $.TypeKind.Function, params: ["httptrace.DNSDoneInfo"], results: [] } as $.FunctionTypeInfo), [7], 56, true), /* @__PURE__ */ $.structField("ConnectStart", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), [8], 64, true), /* @__PURE__ */ $.structField("ConnectDone", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "error"], results: [] } as $.FunctionTypeInfo), [9], 72, true), /* @__PURE__ */ $.structField("TLSHandshakeStart", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [10], 80, true), /* @__PURE__ */ $.structField("TLSHandshakeDone", ({ kind: $.TypeKind.Function, params: ["tls.ConnectionState", "error"], results: [] } as $.FunctionTypeInfo), [11], 88, true), /* @__PURE__ */ $.structField("WroteHeaderField", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], results: [] } as $.FunctionTypeInfo), [12], 96, true), /* @__PURE__ */ $.structField("WroteHeaders", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [13], 104, true), /* @__PURE__ */ $.structField("Wait100Continue", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [14], 112, true), /* @__PURE__ */ $.structField("WroteRequest", ({ kind: $.TypeKind.Function, params: ["httptrace.WroteRequestInfo"], results: [] } as $.FunctionTypeInfo), [15], 120, true)]
	)
}

export class WroteRequestInfo {
	// Err is any error encountered while writing the Request.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	public _fields: {
		Err: $.GoError
	}

	constructor(init?: Partial<{Err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Err: init?.Err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WroteRequestInfo {
		return new WroteRequestInfo(this, true)
	}

	public __goscriptAssign(source: WroteRequestInfo): void {
		const target = this._fields
		const values = source._fields
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
	}

	static __typeInfo = $.registerStructType(
		"httptrace.WroteRequestInfo",
		() => new WroteRequestInfo(),
		() => [],
		WroteRequestInfo,
		() => [/* @__PURE__ */ $.structField("Err", "error", [0], 0, true)]
	)
}

export class DNSStartInfo {
	public get Host(): string {
		return this._fields.Host
	}

	public set Host(value: string) {
		this._fields.Host = value
	}

	public _fields: {
		Host: string
	}

	constructor(init?: Partial<{Host?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Host: init?.Host ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DNSStartInfo {
		return new DNSStartInfo(this, true)
	}

	public __goscriptAssign(source: DNSStartInfo): void {
		const target = this._fields
		const values = source._fields
		target.Host = values.Host
	}

	static __typeInfo = $.registerStructType(
		"httptrace.DNSStartInfo",
		() => new DNSStartInfo(),
		() => [],
		DNSStartInfo,
		() => [/* @__PURE__ */ $.structField("Host", /* @__PURE__ */ $.basicType("string"), [0], 0, true)]
	)
}

export class DNSDoneInfo {
	// Addrs are the IPv4 and/or IPv6 addresses found in the DNS
	// lookup. The contents of the slice should not be mutated.
	public get Addrs(): $.Slice<net.IPAddr> {
		return this._fields.Addrs
	}

	public set Addrs(value: $.Slice<net.IPAddr>) {
		this._fields.Addrs = value
	}

	// Err is any error that occurred during the DNS lookup.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	// Coalesced is whether the Addrs were shared with another
	// caller who was doing the same DNS lookup concurrently.
	public get Coalesced(): boolean {
		return this._fields.Coalesced
	}

	public set Coalesced(value: boolean) {
		this._fields.Coalesced = value
	}

	public _fields: {
		Addrs: $.Slice<net.IPAddr>
		Err: $.GoError
		Coalesced: boolean
	}

	constructor(init?: Partial<{Addrs?: $.Slice<net.IPAddr>, Err?: $.GoError, Coalesced?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Addrs: init?.Addrs ?? (null! as $.Slice<net.IPAddr>),
			Err: init?.Err ?? (null! as $.GoError),
			Coalesced: init?.Coalesced ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DNSDoneInfo {
		return new DNSDoneInfo(this, true)
	}

	public __goscriptAssign(source: DNSDoneInfo): void {
		const target = this._fields
		const values = source._fields
		target.Addrs = values.Addrs
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
		target.Coalesced = values.Coalesced
	}

	static __typeInfo = $.registerStructType(
		"httptrace.DNSDoneInfo",
		() => new DNSDoneInfo(),
		() => [],
		DNSDoneInfo,
		() => [/* @__PURE__ */ $.structField("Addrs", /* @__PURE__ */ $.sliceType("net.IPAddr"), [0], 0, true), /* @__PURE__ */ $.structField("Err", "error", [1], 24, true), /* @__PURE__ */ $.structField("Coalesced", /* @__PURE__ */ $.basicType("bool"), [2], 40, true)]
	)
}

export class GotConnInfo {
	// Conn is the connection that was obtained. It is owned by
	// the http.Transport and should not be read, written or
	// closed by users of ClientTrace.
	public get Conn(): net.Conn | null {
		return this._fields.Conn
	}

	public set Conn(value: net.Conn | null) {
		this._fields.Conn = value
	}

	// Reused is whether this connection has been previously
	// used for another HTTP request.
	public get Reused(): boolean {
		return this._fields.Reused
	}

	public set Reused(value: boolean) {
		this._fields.Reused = value
	}

	// WasIdle is whether this connection was obtained from an
	// idle pool.
	public get WasIdle(): boolean {
		return this._fields.WasIdle
	}

	public set WasIdle(value: boolean) {
		this._fields.WasIdle = value
	}

	// IdleTime reports how long the connection was previously
	// idle, if WasIdle is true.
	public get IdleTime(): time.Duration {
		return this._fields.IdleTime
	}

	public set IdleTime(value: time.Duration) {
		this._fields.IdleTime = value
	}

	public _fields: {
		Conn: net.Conn | null
		Reused: boolean
		WasIdle: boolean
		IdleTime: time.Duration
	}

	constructor(init?: Partial<{Conn?: net.Conn | null, Reused?: boolean, WasIdle?: boolean, IdleTime?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			Conn: init?.Conn ?? (null! as net.Conn | null),
			Reused: init?.Reused ?? (false as boolean),
			WasIdle: init?.WasIdle ?? (false as boolean),
			IdleTime: init?.IdleTime ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GotConnInfo {
		return new GotConnInfo(this, true)
	}

	public __goscriptAssign(source: GotConnInfo): void {
		const target = this._fields
		const values = source._fields
		target.Conn = $.assignFieldValue(target.Conn, values.Conn, "net.Conn")
		target.Reused = values.Reused
		target.WasIdle = values.WasIdle
		target.IdleTime = values.IdleTime
	}

	static __typeInfo = $.registerStructType(
		"httptrace.GotConnInfo",
		() => new GotConnInfo(),
		() => [],
		GotConnInfo,
		() => [/* @__PURE__ */ $.structField("Conn", "net.Conn", [0], 0, true), /* @__PURE__ */ $.structField("Reused", /* @__PURE__ */ $.basicType("bool"), [1], 16, true), /* @__PURE__ */ $.structField("WasIdle", /* @__PURE__ */ $.basicType("bool"), [2], 17, true), /* @__PURE__ */ $.structField("IdleTime", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 24, true)]
	)
}

export async function ContextClientTrace(ctx: context.Context | null): globalThis.Promise<ClientTrace | $.VarRef<ClientTrace> | null> {
	let __goscriptTuple0: any = $.typeAssertTuple<ClientTrace | $.VarRef<ClientTrace> | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new clientEventContextKey(undefined, true), "httptrace.clientEventContextKey", "httptrace.clientEventContextKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("httptrace.ClientTrace"))
	let trace: ClientTrace | $.VarRef<ClientTrace> | null = __goscriptTuple0[0]
	return trace
}

export async function WithClientTrace(ctx: context.Context | null, trace: ClientTrace | $.VarRef<ClientTrace> | null): globalThis.Promise<context.Context | null> {
	const trace$: ClientTrace = trace == null ? $.pointerTarget<ClientTrace>(trace) : (trace as any).__isVarRef === true ? (trace as any).value : (trace as any).__goValue === undefined ? (trace as any) : $.pointerTarget<ClientTrace>(trace)
	if (trace == null) {
		$.panic("nil trace")
	}
	let old: ClientTrace | $.VarRef<ClientTrace> | null = await ContextClientTrace(ctx)
	void (trace !== null && (trace as any).__isVarRef !== true && (trace as any).__goValue === undefined ? ((trace as any) as ClientTrace).compose(old) : ClientTrace.prototype.compose.call(trace, old))

	ctx = context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new clientEventContextKey(undefined, true), "httptrace.clientEventContextKey", "httptrace.clientEventContextKey"), $.interfaceValue(trace, "*httptrace.ClientTrace", /* @__PURE__ */ $.pointerType("httptrace.ClientTrace")))
	if ((trace !== null && (trace as any).__isVarRef !== true && (trace as any).__goValue === undefined ? ((trace as any) as ClientTrace).hasNetHooks() : ClientTrace.prototype.hasNetHooks.call(trace))) {
		let nt: nettrace.Trace | $.VarRef<nettrace.Trace> | null = new nettrace.Trace({ConnectStart: (trace$ as ClientTrace).ConnectStart, ConnectDone: (trace$ as ClientTrace).ConnectDone})
		let nt$: nettrace.Trace = nt == null ? $.pointerTarget<nettrace.Trace>(nt) : (nt as any).__isVarRef === true ? (nt as any).value : (nt as any).__goValue === undefined ? (nt as any) : $.pointerTarget<nettrace.Trace>(nt)
		if ((trace$ as ClientTrace).DNSStart != null) {
			;(nt$ as nettrace.Trace).DNSStart = $.functionValue(async (name: string): globalThis.Promise<void> => {
				await (trace$ as ClientTrace).DNSStart!(new DNSStartInfo({Host: name}, true))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo))
		}
		if ((trace$ as ClientTrace).DNSDone != null) {
			;(nt$ as nettrace.Trace).DNSDone = $.functionValue(async (netIPs: $.Slice<any>, coalesced: boolean, err: $.GoError): globalThis.Promise<void> => {
				let addrs: $.Slice<net.IPAddr> = $.makeSlice<net.IPAddr>($.sliceLen(netIPs), undefined, undefined, () => new net.IPAddr(undefined, true))
				for (let __goscriptRangeTarget0 = netIPs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
					let ip = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as any)
					$.assignStruct($.sliceElems(addrs!)[$.sliceSlot(addrs!, i)], $.mustTypeAssert<net.IPAddr>(ip, "net.IPAddr"))
				}
				await (trace$ as ClientTrace).DNSDone!(new DNSDoneInfo({Addrs: addrs, Coalesced: coalesced, Err: err}, true))
			}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), /* @__PURE__ */ $.basicType("bool"), "error"], results: [] } as $.FunctionTypeInfo))
		}
		ctx = context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new nettrace.TraceKey(undefined, true), "nettrace.TraceKey", "nettrace.TraceKey"), $.interfaceValue(nt, "*nettrace.Trace", /* @__PURE__ */ $.pointerType("nettrace.Trace")))
	}
	return ctx
}

export function compose0to0(__typeArgs: $.GenericTypeArgs | undefined, f1: any, f2: any): any {
	if ((f1 as any) == null) {
		return f2
	}
	if ((f2 as any) == null) {
		return f1
	}
	return $.interfaceValue($.functionValue((): void => {
		f1()
		f2()
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), "func()", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
}

export function compose1to0(__typeArgs: $.GenericTypeArgs | undefined, f1: any, f2: any): any {
	if ((f1 as any) == null) {
		return f2
	}
	if ((f2 as any) == null) {
		return f1
	}
	return $.interfaceValue($.functionValue((a: any): void => {
		f1(a)
		f2(a)
	}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo)), "func(a A)", ({ kind: $.TypeKind.Function, params: [__typeArgs?.["A"]?.type ?? { kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo))
}

export function compose2to0(__typeArgs: $.GenericTypeArgs | undefined, f1: any, f2: any): any {
	if ((f1 as any) == null) {
		return f2
	}
	if ((f2 as any) == null) {
		return f1
	}
	return $.interfaceValue($.functionValue((a: any, b: any): void => {
		f1(a, b)
		f2(a, b)
	}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo)), "func(a A, b B)", ({ kind: $.TypeKind.Function, params: [__typeArgs?.["A"]?.type ?? { kind: $.TypeKind.Interface, methods: [] }, __typeArgs?.["B"]?.type ?? { kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo))
}

export function compose2to1(__typeArgs: $.GenericTypeArgs | undefined, f1: any, f2: any): any {
	if ((f1 as any) == null) {
		return f2
	}
	if ((f2 as any) == null) {
		return f1
	}
	return $.interfaceValue($.functionValue((a: any, b: any): any => {
		f1(a, b)
		return f2(a, b)
	}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)), "func(a A, b B) R", ({ kind: $.TypeKind.Function, params: [__typeArgs?.["A"]?.type ?? { kind: $.TypeKind.Interface, methods: [] }, __typeArgs?.["B"]?.type ?? { kind: $.TypeKind.Interface, methods: [] }], results: [__typeArgs?.["R"]?.type ?? { kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))
}

export function compose3to0(__typeArgs: $.GenericTypeArgs | undefined, f1: any, f2: any): any {
	if ((f1 as any) == null) {
		return f2
	}
	if ((f2 as any) == null) {
		return f1
	}
	return $.interfaceValue($.functionValue((a: any, b: any, c: any): void => {
		f1(a, b, c)
		f2(a, b, c)
	}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo)), "func(a A, b B, c C)", ({ kind: $.TypeKind.Function, params: [__typeArgs?.["A"]?.type ?? { kind: $.TypeKind.Interface, methods: [] }, __typeArgs?.["B"]?.type ?? { kind: $.TypeKind.Interface, methods: [] }, __typeArgs?.["C"]?.type ?? { kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, F: { type: ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), zero: () => null }, A: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, F: { type: ({ kind: $.TypeKind.Function, params: ["httptrace.GotConnInfo"], results: [] } as $.FunctionTypeInfo), zero: () => null }, A: { type: "httptrace.GotConnInfo", zero: () => new GotConnInfo(undefined, true) }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, F: { type: ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo), zero: () => null }, A: { type: "error", zero: () => null, methods: {Error: (receiver: any, ...args: any[]) => receiver.Error(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, F: { type: ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), zero: () => null }})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, F: { type: ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), "textproto.MIMEHeader"], results: ["error"] } as $.FunctionTypeInfo), zero: () => null }, A: { type: /* @__PURE__ */ $.basicType("int"), zero: () => 0 }, B: { type: "textproto.MIMEHeader", zero: () => null, methods: {Add: (receiver: any, ...args: any[]) => (textproto.MIMEHeader_Add as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Del: (receiver: any, ...args: any[]) => (textproto.MIMEHeader_Del as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (textproto.MIMEHeader_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (textproto.MIMEHeader_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Values: (receiver: any, ...args: any[]) => (textproto.MIMEHeader_Values as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))}, methodSignatures: [$.methodSignature("Add", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Del", [["key", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Get", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Values", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))])] }, R: { type: "error", zero: () => null, methods: {Error: (receiver: any, ...args: any[]) => receiver.Error(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, F: { type: ({ kind: $.TypeKind.Function, params: ["httptrace.DNSStartInfo"], results: [] } as $.FunctionTypeInfo), zero: () => null }, A: { type: "httptrace.DNSStartInfo", zero: () => new DNSStartInfo(undefined, true) }})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, F: { type: ({ kind: $.TypeKind.Function, params: ["httptrace.DNSDoneInfo"], results: [] } as $.FunctionTypeInfo), zero: () => null }, A: { type: "httptrace.DNSDoneInfo", zero: () => new DNSDoneInfo(undefined, true) }})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, F: { type: ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), zero: () => null }, A: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }, B: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }})
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, F: { type: ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), "error"], results: [] } as $.FunctionTypeInfo), zero: () => null }, A: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }, B: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }, C: { type: "error", zero: () => null, methods: {Error: (receiver: any, ...args: any[]) => receiver.Error(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, F: { type: ({ kind: $.TypeKind.Function, params: ["tls.ConnectionState", "error"], results: [] } as $.FunctionTypeInfo), zero: () => null }, A: { type: "tls.ConnectionState", zero: () => new tls.ConnectionState(undefined, true) }, B: { type: "error", zero: () => null, methods: {Error: (receiver: any, ...args: any[]) => receiver.Error(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, F: { type: ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], results: [] } as $.FunctionTypeInfo), zero: () => null }, A: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }, B: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), zero: () => null }})
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, F: { type: ({ kind: $.TypeKind.Function, params: ["httptrace.WroteRequestInfo"], results: [] } as $.FunctionTypeInfo), zero: () => null }, A: { type: "httptrace.WroteRequestInfo", zero: () => new WroteRequestInfo(undefined, true) }})
}

var __goscriptAwait: any
