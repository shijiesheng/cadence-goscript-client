// Generated file based on http_client.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as http from "@goscript/net/http/index.js"

import * as url2 from "@goscript/net/url/index.js"

import * as strconv from "@goscript/strconv/index.js"

import type * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_rich_transport from "./rich_transport.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"

import * as __goscript_transport_exception from "./transport_exception.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/url/index.js"
import "@goscript/strconv/index.js"
import "./rich_transport.gs.ts"
import "./transport.gs.ts"
import "./transport_exception.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.THttpClient", "thrift.THttpClientTransportFactory", "thrift.THttpClientOptions"])

export class THttpClient {
	public get client(): http.Client | $.VarRef<http.Client> | null {
		return this._fields.client
	}

	public set client(value: http.Client | $.VarRef<http.Client> | null) {
		this._fields.client = value
	}

	public get response(): http.Response | $.VarRef<http.Response> | null {
		return this._fields.response
	}

	public set response(value: http.Response | $.VarRef<http.Response> | null) {
		this._fields.response = value
	}

	public get url(): url2.URL | $.VarRef<url2.URL> | null {
		return this._fields.url
	}

	public set url(value: url2.URL | $.VarRef<url2.URL> | null) {
		this._fields.url = value
	}

	public get requestBuffer(): bytes.Buffer | $.VarRef<bytes.Buffer> | null {
		return this._fields.requestBuffer
	}

	public set requestBuffer(value: bytes.Buffer | $.VarRef<bytes.Buffer> | null) {
		this._fields.requestBuffer = value
	}

	public get header(): http.Header {
		return this._fields.header
	}

	public set header(value: http.Header) {
		this._fields.header = value
	}

	public _fields: {
		client: http.Client | $.VarRef<http.Client> | null
		response: http.Response | $.VarRef<http.Response> | null
		url: url2.URL | $.VarRef<url2.URL> | null
		requestBuffer: bytes.Buffer | $.VarRef<bytes.Buffer> | null
		header: http.Header
	}

	constructor(init?: Partial<{client?: http.Client | $.VarRef<http.Client> | null, response?: http.Response | $.VarRef<http.Response> | null, url?: url2.URL | $.VarRef<url2.URL> | null, requestBuffer?: bytes.Buffer | $.VarRef<bytes.Buffer> | null, header?: http.Header}>, __goscriptValue?: boolean) {
		this._fields = {
			client: init?.client ?? (null! as http.Client | $.VarRef<http.Client> | null),
			response: init?.response ?? (null! as http.Response | $.VarRef<http.Response> | null),
			url: init?.url ?? (null! as url2.URL | $.VarRef<url2.URL> | null),
			requestBuffer: init?.requestBuffer ?? (null! as bytes.Buffer | $.VarRef<bytes.Buffer> | null),
			header: init?.header ?? (null! as http.Header)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): THttpClient {
		return new THttpClient(this, true)
	}

	public __goscriptAssign(source: THttpClient): void {
		const target = this._fields
		const values = source._fields
		target.client = values.client
		target.response = values.response
		target.url = values.url
		target.requestBuffer = values.requestBuffer
		target.header = values.header
	}

	public async Close(): globalThis.Promise<$.GoError> {
		let p: THttpClient | $.VarRef<THttpClient> | null = this;
		const p$: THttpClient = p == null ? $.pointerTarget<THttpClient>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<THttpClient>(p)
		if ((p$ as THttpClient).requestBuffer != null) {
			bytes.Buffer.prototype.Reset.call($.pointerValue<bytes.Buffer>((p$ as THttpClient).requestBuffer));
			;(p$ as THttpClient).requestBuffer = null
		}
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as THttpClient).closeResponse() : THttpClient.prototype.closeResponse.call(p))
	}

	public DelHeader(key: string): void {
		const p: THttpClient | $.VarRef<THttpClient> | null = this;
		http.Header_Del($.pointerValue<THttpClient>(p).header, key)
	}

	public async Flush(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		let p: THttpClient | $.VarRef<THttpClient> | null = this;
		const p$: THttpClient = p == null ? $.pointerTarget<THttpClient>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<THttpClient>(p)
		// Close any previous response body to avoid leaking connections.
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as THttpClient).closeResponse() : THttpClient.prototype.closeResponse.call(p))

		// Give up the ownership of the current request buffer to http request,
		// and create a new buffer for the next request.
		let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = (p$ as THttpClient).requestBuffer;
		;(p$ as THttpClient).requestBuffer = new bytes.Buffer()
		let __goscriptTuple0: any = http.NewRequest("POST", url2.URL.prototype.String.call((p$ as THttpClient).url), $.pointerValueOrNil($.interfaceValue<io.Reader | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!)
		let req: http.Request | $.VarRef<http.Request> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
		}
		$.pointerValue<http.Request>(req).Header = (p$ as THttpClient).header
		if (ctx != null) {
			req = http.Request.prototype.WithContext.call($.pointerValue<http.Request>(req), $.pointerValueOrNil(ctx)!)
		}
		let __goscriptTuple1: any = await http.Client.prototype.Do.call($.pointerValue<http.Client>((p$ as THttpClient).client), req)
		let response: http.Response | $.VarRef<http.Response> | null = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		let response$: http.Response = response == null ? $.pointerTarget<http.Response>(response) : (response as any).__isVarRef === true ? (response as any).value : (response as any).__goValue === undefined ? (response as any) : $.pointerTarget<http.Response>(response)
		if (err != null) {
			return (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)
		}
		if ((response$ as http.Response).StatusCode != 200) {
			// Close the response to avoid leaking file descriptors. closeResponse does
			// more than just call Close(), so temporarily assign it and reuse the logic.
			;(p$ as THttpClient).response = response
			await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as THttpClient).closeResponse() : THttpClient.prototype.closeResponse.call(p))

			// TODO(pomack) log bad response
			return (__goscript_transport_exception.NewTTransportException(0, $.concatString("HTTP Response code: ", strconv.Itoa((response$ as http.Response).StatusCode))) as $.GoError)
		}
		;(p$ as THttpClient).response = response
		return null
	}

	public async GetHeader(key: string): globalThis.Promise<string> {
		const p: THttpClient | $.VarRef<THttpClient> | null = this;
		return http.Header_Get($.pointerValue<THttpClient>(p).header, key)
	}

	public IsOpen(): boolean {
		const p: THttpClient | $.VarRef<THttpClient> | null = this;
		const p$: THttpClient = p == null ? $.pointerTarget<THttpClient>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<THttpClient>(p)
		return ((p$ as THttpClient).response != null) || ((p$ as THttpClient).requestBuffer != null)
	}

	public Open(): $.GoError {
		const p: THttpClient | $.VarRef<THttpClient> | null = this;
		// do nothing
		return null
	}

	public async Read(buf: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const p: THttpClient | $.VarRef<THttpClient> | null = this;
		const p$: THttpClient = p == null ? $.pointerTarget<THttpClient>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<THttpClient>(p)
		if ((p$ as THttpClient).response == null) {
			return [0, (__goscript_transport_exception.NewTTransportException(1, "Response buffer is empty, no request.") as $.GoError)]
		}
		let [n, err] = await $.pointerValue<Exclude<io.ReadCloser, null>>($.pointerValue<http.Response>((p$ as THttpClient).response).Body).Read(buf)
		if ((n > 0) && ((err == null) || errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(io.EOF)!))) {
			return [n, null]
		}
		return [n, (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)]
	}

	public async ReadByte(): globalThis.Promise<[number, $.GoError]> {
		const p: THttpClient | $.VarRef<THttpClient> | null = this;
		let c: number = 0
		let err: $.GoError = null! as $.GoError
		const p$: THttpClient = p == null ? $.pointerTarget<THttpClient>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<THttpClient>(p)
		if ((p$ as THttpClient).response == null) {
			return [0, (__goscript_transport_exception.NewTTransportException(1, "Response buffer is empty, no request.") as $.GoError)]
		}
		return __goscript_rich_transport.readByte(($.pointerValue<http.Response>((p$ as THttpClient).response).Body as io.Reader | null))
	}

	public RemainingBytes(): bigint {
		const p: THttpClient | $.VarRef<THttpClient> | null = this;
		let num_bytes: bigint = 0n
		let len = $.pointerValue<http.Response>($.pointerValue<THttpClient>(p).response).ContentLength
		if (len >= 0n) {
			return $.uint64(len)
		}

		const maxSize: bigint = 18446744073709551615n
		return 18446744073709551615n
	}

	public SetHeader(key: string, value: string): void {
		const p: THttpClient | $.VarRef<THttpClient> | null = this;
		http.Header_Add($.pointerValue<THttpClient>(p).header, key, value)
	}

	public Write(buf: $.Slice<number>): [number, $.GoError] {
		const p: THttpClient | $.VarRef<THttpClient> | null = this;
		const p$: THttpClient = p == null ? $.pointerTarget<THttpClient>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<THttpClient>(p)
		if ((p$ as THttpClient).requestBuffer == null) {
			return [0, (__goscript_transport_exception.NewTTransportException(1, "Request buffer is nil, connection may have been closed.") as $.GoError)]
		}
		return bytes.Buffer.prototype.Write.call($.pointerValue<bytes.Buffer>((p$ as THttpClient).requestBuffer), buf)
	}

	public WriteByte(c: number): $.GoError {
		const p: THttpClient | $.VarRef<THttpClient> | null = this;
		const p$: THttpClient = p == null ? $.pointerTarget<THttpClient>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<THttpClient>(p)
		if ((p$ as THttpClient).requestBuffer == null) {
			return (__goscript_transport_exception.NewTTransportException(1, "Request buffer is nil, connection may have been closed.") as $.GoError)
		}
		return bytes.Buffer.prototype.WriteByte.call($.pointerValue<bytes.Buffer>((p$ as THttpClient).requestBuffer), c)
	}

	public WriteString(s: string): [number, $.GoError] {
		const p: THttpClient | $.VarRef<THttpClient> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const p$: THttpClient = p == null ? $.pointerTarget<THttpClient>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<THttpClient>(p)
		if ((p$ as THttpClient).requestBuffer == null) {
			return [0, (__goscript_transport_exception.NewTTransportException(1, "Request buffer is nil, connection may have been closed.") as $.GoError)]
		}
		return bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>((p$ as THttpClient).requestBuffer), s)
	}

	public async closeResponse(): globalThis.Promise<$.GoError> {
		let p: THttpClient | $.VarRef<THttpClient> | null = this;
		const p$: THttpClient = p == null ? $.pointerTarget<THttpClient>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<THttpClient>(p)
		let err: $.GoError = null! as $.GoError
		if (((p$ as THttpClient).response != null) && ($.pointerValue<http.Response>((p$ as THttpClient).response).Body != null)) {
			// The docs specify that if keepalive is enabled and the response body is not
			// read to completion the connection will never be returned to the pool and
			// reused. Errors are being ignored here because if the connection is invalid
			// and this fails for some reason, the Close() method will do any remaining
			// cleanup.
			await io.Copy($.pointerValueOrNil(ioutil.Discard)!, $.pointerValueOrNil(($.pointerValue<http.Response>((p$ as THttpClient).response).Body as io.Reader | null))!)

			err = await $.pointerValue<Exclude<io.ReadCloser, null>>($.pointerValue<http.Response>((p$ as THttpClient).response).Body).Close()
		}

		;(p$ as THttpClient).response = null
		return err
	}

	static __typeInfo = $.registerStructType(
		"thrift.THttpClient",
		() => new THttpClient(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("DelHeader", [["key", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Flush", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("GetHeader", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("IsOpen", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Open", [], ["error"], true), $.methodSignature("Read", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ReadByte", [], [["c", /* @__PURE__ */ $.basicType("uint8")], ["err", "error"]], true), $.methodSignature("RemainingBytes", [], [["num_bytes", /* @__PURE__ */ $.basicType("uint64")]], true), $.methodSignature("SetHeader", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Write", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteByte", [["c", /* @__PURE__ */ $.basicType("uint8")]], ["error"], true), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("closeResponse", [], ["error"], true)],
		THttpClient,
		() => [/* @__PURE__ */ $.structField("client", /* @__PURE__ */ $.pointerType("http.Client"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("response", /* @__PURE__ */ $.pointerType("http.Response"), [1], 8, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("url", /* @__PURE__ */ $.pointerType("url.URL"), [2], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("requestBuffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"), [3], 24, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("header", "http.Header", [4], 32, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export class THttpClientOptions {
	// If nil, DefaultHttpClient is used
	public get Client(): http.Client | $.VarRef<http.Client> | null {
		return this._fields.Client
	}

	public set Client(value: http.Client | $.VarRef<http.Client> | null) {
		this._fields.Client = value
	}

	public _fields: {
		Client: http.Client | $.VarRef<http.Client> | null
	}

	constructor(init?: Partial<{Client?: http.Client | $.VarRef<http.Client> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Client: init?.Client ?? (null! as http.Client | $.VarRef<http.Client> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): THttpClientOptions {
		return new THttpClientOptions(this, true)
	}

	public __goscriptAssign(source: THttpClientOptions): void {
		const target = this._fields
		const values = source._fields
		target.Client = values.Client
	}

	static __typeInfo = $.registerStructType(
		"thrift.THttpClientOptions",
		() => new THttpClientOptions(),
		() => [],
		THttpClientOptions,
		() => [/* @__PURE__ */ $.structField("Client", /* @__PURE__ */ $.pointerType("http.Client"), [0], 0, true)]
	)
}

export class THttpClientTransportFactory {
	public get options(): THttpClientOptions {
		return this._fields.options
	}

	public set options(value: THttpClientOptions) {
		this._fields.options = value
	}

	public get url(): string {
		return this._fields.url
	}

	public set url(value: string) {
		this._fields.url = value
	}

	public _fields: {
		options: THttpClientOptions
		url: string
	}

	constructor(init?: Partial<{options?: THttpClientOptions, url?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			options: init?.options ? init.options.clone() : new THttpClientOptions(undefined, true),
			url: init?.url ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): THttpClientTransportFactory {
		return new THttpClientTransportFactory(this, true)
	}

	public __goscriptAssign(source: THttpClientTransportFactory): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.options, values.options)
		target.url = values.url
	}

	public GetTransport(trans: __goscript_transport.TTransport | null): [__goscript_transport.TTransport | null, $.GoError] {
		const p: THttpClientTransportFactory | $.VarRef<THttpClientTransportFactory> | null = this;
		const p$: THttpClientTransportFactory = p == null ? $.pointerTarget<THttpClientTransportFactory>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<THttpClientTransportFactory>(p)
		if (trans != null) {
			let __goscriptTuple2: any = $.typeAssertTuple<THttpClient | $.VarRef<THttpClient> | null>(trans, /* @__PURE__ */ $.pointerType("thrift.THttpClient"))
			let t: THttpClient | $.VarRef<THttpClient> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			let t$: THttpClient = t == null ? $.pointerTarget<THttpClient>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<THttpClient>(t)
			if (ok && ((t$ as THttpClient).url != null)) {
				return NewTHttpClientWithOptions(url2.URL.prototype.String.call((t$ as THttpClient).url), ((p$ as THttpClientTransportFactory).options).clone())
			}
		}
		return NewTHttpClientWithOptions((p$ as THttpClientTransportFactory).url, ((p$ as THttpClientTransportFactory).options).clone())
	}

	static __typeInfo = $.registerStructType(
		"thrift.THttpClientTransportFactory",
		() => new THttpClientTransportFactory(),
		() => [$.methodSignature("GetTransport", [["trans", "thrift.TTransport"]], ["thrift.TTransport", "error"], true)],
		THttpClientTransportFactory,
		() => [/* @__PURE__ */ $.structField("options", "thrift.THttpClientOptions", [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("url", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export let DefaultHttpClient: http.Client | $.VarRef<http.Client> | null = http.DefaultClient

export function __goscript_set_DefaultHttpClient(__goscriptValue: http.Client | $.VarRef<http.Client> | null): void {
	DefaultHttpClient = __goscriptValue
}

export function NewTHttpClientTransportFactory(url: string): THttpClientTransportFactory | $.VarRef<THttpClientTransportFactory> | null {
	return NewTHttpClientTransportFactoryWithOptions(url, new THttpClientOptions(undefined, true))
}

export function NewTHttpClientTransportFactoryWithOptions(url: string, options: THttpClientOptions): THttpClientTransportFactory | $.VarRef<THttpClientTransportFactory> | null {
	return new THttpClientTransportFactory({url: url, options: options})
}

export function NewTHttpClientWithOptions(urlstr: string, options: THttpClientOptions): [__goscript_transport.TTransport | null, $.GoError] {
	let __goscriptTuple3: any = url2.Parse(urlstr)
	let parsedURL: url2.URL | $.VarRef<url2.URL> | null = __goscriptTuple3[0]
	let err = __goscriptTuple3[1]
	if (err != null) {
		return [null, err]
	}
	let buf: $.Slice<number> = $.makeSlice<number>(0, 1024, "byte")
	let client: http.Client | $.VarRef<http.Client> | null = options.Client
	if (client == null) {
		client = DefaultHttpClient
	}
	let httpHeader: globalThis.Map<string, $.Slice<string>> | null = $.makeMap<string, $.Slice<string>>([["Content-Type", $.arrayToSlice<string>(["application/x-thrift"])]])
	return [$.interfaceValue<__goscript_transport.TTransport | null>((() => { const __goscriptLiteralField0 = bytes.NewBuffer(buf); return new THttpClient({client: client, url: parsedURL, requestBuffer: __goscriptLiteralField0, header: httpHeader}) })(), "*thrift.THttpClient", /* @__PURE__ */ $.pointerType("thrift.THttpClient")), null]
}

export function NewTHttpClient(urlstr: string): [__goscript_transport.TTransport | null, $.GoError] {
	return NewTHttpClientWithOptions(urlstr, new THttpClientOptions(undefined, true))
}

export function NewTHttpPostClientTransportFactory(url: string): THttpClientTransportFactory | $.VarRef<THttpClientTransportFactory> | null {
	return NewTHttpClientTransportFactoryWithOptions(url, new THttpClientOptions(undefined, true))
}

export function NewTHttpPostClientTransportFactoryWithOptions(url: string, options: THttpClientOptions): THttpClientTransportFactory | $.VarRef<THttpClientTransportFactory> | null {
	return NewTHttpClientTransportFactoryWithOptions(url, options)
}

export function NewTHttpPostClientWithOptions(urlstr: string, options: THttpClientOptions): [__goscript_transport.TTransport | null, $.GoError] {
	return NewTHttpClientWithOptions(urlstr, options)
}

export function NewTHttpPostClient(urlstr: string): [__goscript_transport.TTransport | null, $.GoError] {
	return NewTHttpClientWithOptions(urlstr, new THttpClientOptions(undefined, true))
}
