// Generated file based on proxy.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as context from "@goscript/context/index.js"

import * as base64 from "@goscript/encoding/base64/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as http from "@goscript/net/http/index.js"

import * as httputil from "@goscript/net/http/httputil/index.js"

import * as url2 from "@goscript/net/url/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/bufio/index.js"
import "@goscript/context/index.js"
import "@goscript/encoding/base64/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/http/httputil/index.js"
import "@goscript/net/url/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/transport", ["transport.bufConn"])

export class bufConn {
	public get Conn(): net.Conn | null {
		return this._fields.Conn
	}

	public set Conn(value: net.Conn | null) {
		this._fields.Conn = value
	}

	public get r(): io.Reader | null {
		return this._fields.r
	}

	public set r(value: io.Reader | null) {
		this._fields.r = value
	}

	public _fields: {
		Conn: net.Conn | null
		r: io.Reader | null
	}

	constructor(init?: Partial<{Conn?: net.Conn | null, r?: io.Reader | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Conn: init?.Conn ?? (null! as net.Conn | null),
			r: init?.r ?? (null! as io.Reader | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bufConn {
		return new bufConn(this, true)
	}

	public __goscriptAssign(source: bufConn): void {
		const target = this._fields
		const values = source._fields
		target.Conn = $.assignFieldValue(target.Conn, values.Conn, "net.Conn")
		target.r = $.assignFieldValue(target.r, values.r, "io.Reader")
	}

	public async Read(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const c: bufConn | $.VarRef<bufConn> | null = this;
		return $.pointerValue<Exclude<io.Reader, null>>($.pointerValue<bufConn>(c).r).Read(b)
	}

	public async Close(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).Close()
	}

	public async LocalAddr(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).LocalAddr()
	}

	public async RemoteAddr(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).RemoteAddr()
	}

	public async SetDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).SetDeadline(t)
	}

	public async SetReadDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).SetReadDeadline(t)
	}

	public async SetWriteDeadline(t: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).SetWriteDeadline(t)
	}

	public async Write(b: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<net.Conn | null, null>>(this.Conn).Write(b)
	}

	static __typeInfo = $.registerStructType(
		"transport.bufConn",
		() => new bufConn(),
		() => [$.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Close", [], ["error"]), $.methodSignature("LocalAddr", [], ["net.Addr"]), $.methodSignature("RemoteAddr", [], ["net.Addr"]), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"]), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])],
		bufConn,
		() => [/* @__PURE__ */ $.structField("Conn", "net.Conn", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("r", "io.Reader", [1], 16, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export const proxyAuthHeaderKey: string = "Proxy-Authorization"

export let httpProxyFromEnvironment: ((req: http.Request | $.VarRef<http.Request> | null) => [url2.URL | $.VarRef<url2.URL> | null, $.GoError] | globalThis.Promise<[url2.URL | $.VarRef<url2.URL> | null, $.GoError]>) | null = http.ProxyFromEnvironment

export function __goscript_set_httpProxyFromEnvironment(__goscriptValue: ((req: http.Request | $.VarRef<http.Request> | null) => [url2.URL | $.VarRef<url2.URL> | null, $.GoError] | globalThis.Promise<[url2.URL | $.VarRef<url2.URL> | null, $.GoError]>) | null): void {
	httpProxyFromEnvironment = __goscriptValue
}

export async function mapAddress(address: string): globalThis.Promise<[url2.URL | $.VarRef<url2.URL> | null, $.GoError]> {
	let req: http.Request | $.VarRef<http.Request> | null = new http.Request({URL: new url2.URL({Scheme: "https", Host: address})})
	let __goscriptTuple0: any = await httpProxyFromEnvironment!(req)
	let __goscriptShadow0: url2.URL | $.VarRef<url2.URL> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}
	return [__goscriptShadow0, null]
}

export function basicAuth(username: string, password: string): string {
	let auth = $.concatString(($.concatString(username, ":")), password)
	return base64.Encoding.prototype.EncodeToString.call(base64.StdEncoding, $.stringToBytes(auth))
}

export async function doHTTPConnectHandshake(ctx: context.Context | null, conn: net.Conn | null, backendAddr: string, proxyURL: url2.URL | $.VarRef<url2.URL> | null, grpcUA: string): globalThis.Promise<[net.Conn | null, $.GoError]> {
	let err: $.GoError = null! as $.GoError
	await using __defer = new $.AsyncDisposableStack()
	__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
		if (err != null) {
			void (__goscriptAwait = (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? (conn as Exclude<net.Conn, null>) : $.pointerValue<Exclude<net.Conn, null>>(conn)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	})() })

	let req: http.Request | $.VarRef<http.Request> | null = new http.Request({Method: http.MethodConnect, URL: new url2.URL({Host: backendAddr}), Header: $.makeMap<string, $.Slice<string>>([["User-Agent", $.arrayToSlice<string>([grpcUA])]])})
	{
		let t: url2.Userinfo | $.VarRef<url2.Userinfo> | null = $.pointerValue<url2.URL>(proxyURL).User
		if (t != null) {
			let u = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as url2.Userinfo).Username() : url2.Userinfo.prototype.Username.call(t))
			let [p, ] = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as url2.Userinfo).Password() : url2.Userinfo.prototype.Password.call(t))
			http.Header_Add($.pointerValue<http.Request>(req).Header, "Proxy-Authorization", $.concatString("Basic ", basicAuth(u, p)))
		}
	}

	{
		let __goscriptShadow1 = sendHTTPRequest(ctx, req, conn)
		if (__goscriptShadow1 != null) {
			const __goscriptReturn1: [net.Conn | null, $.GoError] = [null, fmt.Errorf("failed to write the HTTP request: %v", (__goscriptShadow1 as any))]
			err = __goscriptReturn1[1]
			await __defer.dispose()
			return [__goscriptReturn1[0], err]
		}
	}

	let r: bufio.Reader | $.VarRef<bufio.Reader> | null = bufio.NewReader((conn as io.Reader | null))
	let __goscriptTuple1: any = await http.ReadResponse(r, req)
	let resp: http.Response | $.VarRef<http.Response> | null = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	let resp$: http.Response = resp == null ? $.pointerTarget<http.Response>(resp) : (resp as any).__isVarRef === true ? (resp as any).value : (resp as any).__goValue === undefined ? (resp as any) : $.pointerTarget<http.Response>(resp)
	if (err != null) {
		const __goscriptReturn2: [net.Conn | null, $.GoError] = [null, fmt.Errorf("reading server HTTP response: %v", (err as any))]
		err = __goscriptReturn2[1]
		await __defer.dispose()
		return [__goscriptReturn2[0], err]
	}
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Close())($.pointerValue<Exclude<io.ReadCloser, null>>((resp$ as http.Response).Body)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "io.Closer.Close-fm")
	__defer.defer(async () => { await __goscriptDeferCallee0() })
	if ((resp$ as http.Response).StatusCode != 200) {
		let __goscriptTuple2: any = await httputil.DumpResponse(resp, true)
		let dump: $.Slice<number> = __goscriptTuple2[0]
		let __goscriptShadow2 = __goscriptTuple2[1]
		if (__goscriptShadow2 != null) {
			const __goscriptReturn3: [net.Conn | null, $.GoError] = [null, fmt.Errorf("failed to do connect handshake, status code: %s", (resp$ as http.Response).Status)]
			err = __goscriptReturn3[1]
			await __defer.dispose()
			return [__goscriptReturn3[0], err]
		}
		const __goscriptReturn4: [net.Conn | null, $.GoError] = [null, fmt.Errorf("failed to do connect handshake, response: %q", $.interfaceValue(dump, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))]
		err = __goscriptReturn4[1]
		await __defer.dispose()
		return [__goscriptReturn4[0], err]
	}
	// The buffer could contain extra bytes from the target server, so we can't
	// discard it. However, in many cases where the server waits for the client
	// to send the first message (e.g. when TLS is being used), the buffer will
	// be empty, so we can avoid the overhead of reading through this buffer.
	if ((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as bufio.Reader).Buffered() : bufio.Reader.prototype.Buffered.call(r)) != 0) {
		const __goscriptReturn5: [net.Conn | null, $.GoError] = [$.interfaceValue<net.Conn | null>(new bufConn({Conn: conn, r: $.interfaceValue<io.Reader | null>(r, "*bufio.Reader", /* @__PURE__ */ $.pointerType("bufio.Reader"))}), "*transport.bufConn", /* @__PURE__ */ $.pointerType("transport.bufConn")), null]
		err = __goscriptReturn5[1]
		await __defer.dispose()
		return [__goscriptReturn5[0], err]
	}
	const __goscriptReturn6: [net.Conn | null, $.GoError] = [conn, null]
	err = __goscriptReturn6[1]
	await __defer.dispose()
	return [__goscriptReturn6[0], err]
	throw new globalThis.Error("goscript: unreachable return")
}

export async function proxyDial(ctx: context.Context | null, addr: string, grpcUA: string): globalThis.Promise<[net.Conn | null, $.GoError]> {
	let newAddr = addr
	let __goscriptTuple3: any = await mapAddress(addr)
	let proxyURL: url2.URL | $.VarRef<url2.URL> | null = __goscriptTuple3[0]
	let err = __goscriptTuple3[1]
	if (err != null) {
		return [null, err]
	}
	if (proxyURL != null) {
		newAddr = $.pointerValue<url2.URL>(proxyURL).Host
	}

	let __goscriptTuple4: any = await net.Dialer.prototype.DialContext.call(internal.NetDialerWithTCPKeepalive(), ctx, "tcp", newAddr)
	let conn = __goscriptTuple4[0]
	err = __goscriptTuple4[1]
	if (err != null) {
		return [null, err]
	}
	if (proxyURL == null) {
		// proxy is disabled if proxyURL is nil.
		return [conn, err]
	}
	return doHTTPConnectHandshake(ctx, conn, addr, proxyURL, grpcUA)
}

export function sendHTTPRequest(ctx: context.Context | null, req: http.Request | $.VarRef<http.Request> | null, conn: net.Conn | null): $.GoError {
	req = http.Request.prototype.WithContext.call($.pointerValue<http.Request>(req), $.pointerValueOrNil(ctx)!)
	{
		let err = http.Request.prototype.Write.call($.pointerValue<http.Request>(req), $.pointerValueOrNil((conn as io.Writer | null))!)
		if (err != null) {
			return fmt.Errorf("failed to write the HTTP request: %v", (err as any))
		}
	}
	return null
}

var __goscriptAwait: any
