// Generated file based on dump.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as net2 from "@goscript/net/index.js"

import * as http from "@goscript/net/http/index.js"

import * as url from "@goscript/net/url/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_httputil from "./httputil.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/url/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "./httputil.gs.ts"

$.registerTypePackagePath("net/http/httputil", ["httputil.dumpConn", "httputil.neverEnding", "httputil.delegateReader", "httputil.failureToReadBody"])

export type neverEnding = number

$.registerNamedValueType(
	"httputil.neverEnding",
	{Read: (receiver: any, ...args: any[]) => (neverEnding_Read as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

$.registerNamedValueType(
	"*httputil.neverEnding",
	{Read: (receiver: any, ...args: any[]) => (neverEnding_Read as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export class dumpConn {
	public get Writer(): io.Writer | null {
		return this._fields.Writer
	}

	public set Writer(value: io.Writer | null) {
		this._fields.Writer = value
	}

	public get Reader(): io.Reader | null {
		return this._fields.Reader
	}

	public set Reader(value: io.Reader | null) {
		this._fields.Reader = value
	}

	public _fields: {
		Writer: io.Writer | null
		Reader: io.Reader | null
	}

	constructor(init?: Partial<{Writer?: io.Writer | null, Reader?: io.Reader | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Writer: init?.Writer ?? (null! as io.Writer | null),
			Reader: init?.Reader ?? (null! as io.Reader | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dumpConn {
		return new dumpConn(this, true)
	}

	public __goscriptAssign(source: dumpConn): void {
		const target = this._fields
		const values = source._fields
		target.Writer = $.assignFieldValue(target.Writer, values.Writer, "io.Writer")
		target.Reader = $.assignFieldValue(target.Reader, values.Reader, "io.Reader")
	}

	public Close(): $.GoError {
		const c: dumpConn | $.VarRef<dumpConn> | null = this;
		return null
	}

	public LocalAddr(): net2.Addr | null {
		const c: dumpConn | $.VarRef<dumpConn> | null = this;
		return null
	}

	public RemoteAddr(): net2.Addr | null {
		const c: dumpConn | $.VarRef<dumpConn> | null = this;
		return null
	}

	public SetDeadline(t: time.Time): $.GoError {
		const c: dumpConn | $.VarRef<dumpConn> | null = this;
		return null
	}

	public SetReadDeadline(t: time.Time): $.GoError {
		const c: dumpConn | $.VarRef<dumpConn> | null = this;
		return null
	}

	public SetWriteDeadline(t: time.Time): $.GoError {
		const c: dumpConn | $.VarRef<dumpConn> | null = this;
		return null
	}

	public async Write(p: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<io.Writer | null, null>>(this.Writer).Write(p)
	}

	public async Read(p: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<io.Reader | null, null>>(this.Reader).Read(p)
	}

	static __typeInfo = $.registerStructType(
		"httputil.dumpConn",
		() => new dumpConn(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("LocalAddr", [], ["net.Addr"], true), $.methodSignature("RemoteAddr", [], ["net.Addr"], true), $.methodSignature("SetDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetReadDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("SetWriteDeadline", [["t", "time.Time"]], ["error"], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])],
		dumpConn,
		() => [/* @__PURE__ */ $.structField("Writer", "io.Writer", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Reader", "io.Reader", [1], 16, true, { anonymous: true })]
	)
}

export class delegateReader {
	public get c(): $.Channel<io.Reader | null> | null {
		return this._fields.c
	}

	public set c(value: $.Channel<io.Reader | null> | null) {
		this._fields.c = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get r(): io.Reader | null {
		return this._fields.r
	}

	public set r(value: io.Reader | null) {
		this._fields.r = value
	}

	public _fields: {
		c: $.Channel<io.Reader | null> | null
		err: $.GoError
		r: io.Reader | null
	}

	constructor(init?: Partial<{c?: $.Channel<io.Reader | null> | null, err?: $.GoError, r?: io.Reader | null}>, __goscriptValue?: boolean) {
		this._fields = {
			c: init?.c ?? (null! as $.Channel<io.Reader | null> | null),
			err: init?.err ?? (null! as $.GoError),
			r: init?.r ?? (null! as io.Reader | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): delegateReader {
		return new delegateReader(this, true)
	}

	public __goscriptAssign(source: delegateReader): void {
		const target = this._fields
		const values = source._fields
		target.c = values.c
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.r = $.assignFieldValue(target.r, values.r, "io.Reader")
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let r: delegateReader | $.VarRef<delegateReader> | null = this;
		const r$: delegateReader = r == null ? $.pointerTarget<delegateReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<delegateReader>(r)
		if ((r$ as delegateReader).r == null) {
			let ok: boolean = false
			{
				let __goscriptRecv0 = await $.chanRecvWithOk((r$ as delegateReader).c);
				;(r$ as delegateReader).r = __goscriptRecv0.value
				ok = __goscriptRecv0.ok
				if (!ok) {
					return [0, (r$ as delegateReader).err]
				}
			}
		}
		return $.pointerValue<Exclude<io.Reader, null>>((r$ as delegateReader).r).Read(p)
	}

	static __typeInfo = $.registerStructType(
		"httputil.delegateReader",
		() => new delegateReader(),
		() => [$.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		delegateReader,
		() => [/* @__PURE__ */ $.structField("c", /* @__PURE__ */ $.channelType("io.Reader", "both"), [0], 0, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("err", "error", [1], 8, false, { pkgPath: "net/http/httputil" }), /* @__PURE__ */ $.structField("r", "io.Reader", [2], 24, false, { pkgPath: "net/http/httputil" })]
	)
}

export class failureToReadBody {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): failureToReadBody {
		return new failureToReadBody(this, true)
	}

	public __goscriptAssign(source: failureToReadBody): void {
	}

	public Close(): $.GoError {
		return null
	}

	public Read(_p0: $.Slice<number>): [number, $.GoError] {
		return [0, errNoBody]
	}

	static __typeInfo = $.registerStructType(
		"httputil.failureToReadBody",
		() => new failureToReadBody(),
		() => [$.methodSignature("Close", [], ["error"]), $.methodSignature("Read", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [/* @__PURE__ */ $.basicType("int"), "error"])],
		failureToReadBody,
		() => []
	)
}

export async function drainBody(b: io.ReadCloser | null): globalThis.Promise<[io.ReadCloser | null, io.ReadCloser | null, $.GoError]> {
	let r1: io.ReadCloser | null = null! as io.ReadCloser | null
	let r2: io.ReadCloser | null = null! as io.ReadCloser | null
	let err: $.GoError = null! as $.GoError
	if ((b == null) || ($.comparableEqual(b, $.interfaceValue<io.ReadCloser | null>($.pointerValue<any>(http.NoBody), "http.noBody", "http.noBody")))) {
		// No copying needed. Preserve the magic sentinel meaning of NoBody.
		return [$.interfaceValue<io.ReadCloser | null>($.markAsStructValue($.cloneStructValue($.pointerValue<any>(http.NoBody))), "http.noBody", "http.noBody"), $.interfaceValue<io.ReadCloser | null>($.markAsStructValue($.cloneStructValue($.pointerValue<any>(http.NoBody))), "http.noBody", "http.noBody"), null]
	}
	let buf: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
	{
		let __goscriptTuple0: any = await buf.value.ReadFrom($.pointerValueOrNil((b as io.Reader | null))!)
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, b, err]
		}
	}
	{
		err = await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? (b as Exclude<io.ReadCloser, null>) : $.pointerValue<Exclude<io.ReadCloser, null>>(b)).Close()
		if (err != null) {
			return [null, b, err]
		}
	}
	return [io.NopCloser($.pointerValueOrNil($.interfaceValue<io.Reader | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!), io.NopCloser($.pointerValueOrNil($.interfaceValue<io.Reader | null>(bytes.NewReader(buf.value.Bytes()), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))!), null]
}

export function neverEnding_Read(b: neverEnding, p: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	for (let __goscriptRangeTarget0 = p, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		;(__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] = $.uint(b, 8)
	}
	return [$.sliceLen(p), null]
}

export function outgoingLength(req: http.Request | $.VarRef<http.Request> | null): bigint {
	const req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
	if (((req$ as http.Request).Body == null) || ($.comparableEqual((req$ as http.Request).Body, $.interfaceValue<io.ReadCloser | null>($.pointerValue<any>(http.NoBody), "http.noBody", "http.noBody")))) {
		return 0n
	}
	if ((req$ as http.Request).ContentLength != 0n) {
		return (req$ as http.Request).ContentLength
	}
	return -1n
}

export async function DumpRequestOut(req: http.Request | $.VarRef<http.Request> | null, body: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	using __defer = new $.DisposableStack()
	const req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
	let save = (req$ as http.Request).Body
	let dummyBody = false
	if (!body) {
		let contentLength = outgoingLength(req)
		if (contentLength != 0n) {
			;(req$ as http.Request).Body = io.NopCloser($.pointerValueOrNil(io.LimitReader($.namedValueInterfaceValue<io.Reader | null>(120, "httputil.neverEnding", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())!, contentLength))!)
			dummyBody = true
		}
	} else {
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple1: any = await drainBody((req$ as http.Request).Body)
		save = __goscriptTuple1[0];
		;(req$ as http.Request).Body = __goscriptTuple1[1]
		err = __goscriptTuple1[2]
		if (err != null) {
			return [null, err]
		}
	}

	// Since we're using the actual Transport code to write the request,
	// switch to http so the Transport doesn't try to do an SSL
	// negotiation with our dumpConn and its bytes.Buffer & pipe.
	// The wire format for https and http are the same, anyway.
	let reqSend: http.Request | $.VarRef<http.Request> | null = req
	if ($.stringEqual($.pointerValue<url.URL>((req$ as http.Request).URL).Scheme, "https")) {
		reqSend = new http.Request()
		$.assignStruct($.pointerValue<http.Request>(reqSend), (req$ as http.Request))
		$.pointerValue<http.Request>(reqSend).URL = new url.URL()
		$.assignStruct($.pointerValue<url.URL>($.pointerValue<http.Request>(reqSend).URL), $.pointerValue<url.URL>((req$ as http.Request).URL))
		$.pointerValue<url.URL>($.pointerValue<http.Request>(reqSend).URL).Scheme = "http"
	}

	// Use the actual Transport code to record what we would send
	// on the wire, but not using TCP.  Use a Transport with a
	// custom dialer that returns a fake net.Conn that waits
	// for the full input (and recording it), and then responds
	// with a dummy response.
	let buf: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
	let __goscriptTuple2: any = io.Pipe()
	let pr: io.PipeReader | $.VarRef<io.PipeReader> | null = __goscriptTuple2[0]
	let pw: io.PipeWriter | $.VarRef<io.PipeWriter> | null = __goscriptTuple2[1]
	__defer.defer(() => { io.PipeReader.prototype.Close.call($.pointerValue<io.PipeReader>(pr)) })
	__defer.defer(() => { io.PipeWriter.prototype.Close.call($.pointerValue<io.PipeWriter>(pw)) })
	let dr: delegateReader | $.VarRef<delegateReader> | null = new delegateReader({c: $.makeChannel<io.Reader | null>(0, null! as io.Reader | null, "both")})
	let dr$: delegateReader = dr == null ? $.pointerTarget<delegateReader>(dr) : (dr as any).__isVarRef === true ? (dr as any).value : (dr as any).__goValue === undefined ? (dr as any) : $.pointerTarget<delegateReader>(dr)

	let t: http.Transport | $.VarRef<http.Transport> | null = new http.Transport({Dial: $.functionValue((net: string, addr: string): [net2.Conn | null, $.GoError] => {
		return [$.interfaceValue<net2.Conn | null>((() => { const __goscriptLiteralField0 = io.MultiWriter($.pointerValueOrNil($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, $.pointerValueOrNil($.interfaceValue<io.Writer | null>(pw, "*io.PipeWriter", /* @__PURE__ */ $.pointerType("io.PipeWriter")))!); return new dumpConn({Writer: __goscriptLiteralField0, Reader: $.interfaceValue<io.Reader | null>(dr, "*httputil.delegateReader", /* @__PURE__ */ $.pointerType("httputil.delegateReader"))}) })(), "*httputil.dumpConn", /* @__PURE__ */ $.pointerType("httputil.dumpConn")), null]
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo))})
	__defer.defer(() => { http.Transport.prototype.CloseIdleConnections.call($.pointerValue<http.Transport>(t)) })

	// We need this channel to ensure that the reader
	// goroutine exits if t.RoundTrip returns an error.
	// See golang.org/issue/32571.
	let quitReadCh: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
	// Wait for the request before replying with a dummy response:
	queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
		let __goscriptTuple3: any = await http.ReadRequest(bufio.NewReader($.interfaceValue<io.Reader | null>(pr, "*io.PipeReader", /* @__PURE__ */ $.pointerType("io.PipeReader"))))
		let __goscriptShadow0: http.Request | $.VarRef<http.Request> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err == null) {
			// Ensure all the body is read; otherwise
			// we'll get a partial dump.
			await io.Copy($.pointerValueOrNil(io.Discard)!, $.pointerValueOrNil(($.pointerValue<http.Request>(__goscriptShadow0).Body as io.Reader | null))!)
			await $.pointerValue<Exclude<io.ReadCloser, null>>($.pointerValue<http.Request>(__goscriptShadow0).Body).Close()
		}
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
			{
				id: 0,
				isSend: true,
				channel: (dr$ as delegateReader).c,
				value: strings.NewReader("HTTP/1.1 204 No Content\r\nConnection: close\r\n\r\n"),
			},
			{
				id: 1,
				isSend: false,
				channel: quitReadCh,
				onSelected: async (__goscriptSelect0Result) => {
					void (dr$ as delegateReader).c!.close()
				}
			}
		], false)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
	})() })

	let [, err] = await http.Transport.prototype.RoundTrip.call($.pointerValue<http.Transport>(t), reqSend);

	;(req$ as http.Request).Body = save
	if (err != null) {
		;(dr$ as delegateReader).err = err
		quitReadCh!.close()
		return [null, err]
	}
	let dump: $.Slice<number> = buf.value.Bytes()

	// If we used a dummy body above, remove it now.
	// TODO: if the req.ContentLength is large, we allocate memory
	// unnecessarily just to slice it off here. But this is just
	// a debug function, so this is acceptable for now. We could
	// discard the body earlier if this matters.
	if (dummyBody) {
		{
			let i: number = bytes.Index(dump, new Uint8Array([13, 10, 13, 10]))
			if (i >= 0) {
				dump = $.goSlice(dump, undefined, i + 4)
			}
		}
	}
	return [dump, null]
}

export function valueOrDefault(value: string, def: string): string {
	if (!$.stringEqual(value, "")) {
		return value
	}
	return def
}

export let reqWriteExcludeHeaderDump: globalThis.Map<string, boolean> | null = $.makeMap<string, boolean>([["Host", true], ["Transfer-Encoding", true], ["Trailer", true]])

export function __goscript_set_reqWriteExcludeHeaderDump(__goscriptValue: globalThis.Map<string, boolean> | null): void {
	reqWriteExcludeHeaderDump = __goscriptValue
}

export async function DumpRequest(req: http.Request | $.VarRef<http.Request> | null, body: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	const req$: http.Request = req == null ? $.pointerTarget<http.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<http.Request>(req)
	let err: $.GoError = null! as $.GoError
	let save = (req$ as http.Request).Body
	if (!body || ((req$ as http.Request).Body == null)) {
		;(req$ as http.Request).Body = null
	} else {
		let __goscriptTuple4: any = await drainBody((req$ as http.Request).Body)
		save = __goscriptTuple4[0];
		;(req$ as http.Request).Body = __goscriptTuple4[1]
		err = __goscriptTuple4[2]
		if (err != null) {
			return [null, err]
		}
	}

	let b: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))

	// By default, print out the unmodified req.RequestURI, which
	// is always set for incoming server requests. But because we
	// previously used req.URL.RequestURI and the docs weren't
	// always so clear about when to use DumpRequest vs
	// DumpRequestOut, fall back to the old way if the caller
	// provides a non-server Request.
	let reqURI = (req$ as http.Request).RequestURI
	if ($.stringEqual(reqURI, "")) {
		reqURI = (req$ as http.Request).URL.RequestURI()
	}

	await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "%s %s HTTP/%d.%d\r\n", valueOrDefault((req$ as http.Request).Method, "GET"), reqURI, $.basicInterfaceValue((req$ as http.Request).ProtoMajor, "int"), $.basicInterfaceValue((req$ as http.Request).ProtoMinor, "int"))

	let absRequestURI = strings.HasPrefix((req$ as http.Request).RequestURI, "http://") || strings.HasPrefix((req$ as http.Request).RequestURI, "https://")
	if (!absRequestURI) {
		let host = (req$ as http.Request).Host
		if (($.stringEqual(host, "")) && ((req$ as http.Request).URL != null)) {
			host = $.pointerValue<url.URL>((req$ as http.Request).URL).Host
		}
		if (!$.stringEqual(host, "")) {
			await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "Host: %s\r\n", host)
		}
	}

	let chunked = ($.sliceLen((req$ as http.Request).TransferEncoding) > 0) && ($.stringEqual($.arrayIndex((req$ as http.Request).TransferEncoding!, 0), "chunked"))
	if ($.sliceLen((req$ as http.Request).TransferEncoding) > 0) {
		await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "Transfer-Encoding: %s\r\n", strings.Join((req$ as http.Request).TransferEncoding, ","))
	}

	err = await http.Header_WriteSubset((req$ as http.Request).Header, $.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, reqWriteExcludeHeaderDump)
	if (err != null) {
		return [null, err]
	}

	await io.WriteString($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "\r\n")

	if ((req$ as http.Request).Body != null) {
		let dest: io.Writer | null = $.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"))
		if (chunked) {
			dest = (__goscript_httputil.NewChunkedWriter(dest) as io.Writer | null)
		}
		let __goscriptTuple5: any = await io.Copy($.pointerValueOrNil(dest)!, $.pointerValueOrNil(((req$ as http.Request).Body as io.Reader | null))!)
		err = __goscriptTuple5[1]
		if (chunked) {
			await $.pointerValue<Exclude<io.Closer, null>>($.mustTypeAssert<io.Closer | null>(dest, "io.Closer")).Close()
			await io.WriteString($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "\r\n")
		}
	}

	;(req$ as http.Request).Body = save
	if (err != null) {
		return [null, err]
	}
	return [b.value.Bytes(), null]
}

export let errNoBody: $.GoError = errors.New("sentinel error value")

export function __goscript_set_errNoBody(__goscriptValue: $.GoError): void {
	errNoBody = __goscriptValue
}

export let emptyBody: io.ReadCloser | null = io.NopCloser($.pointerValueOrNil($.interfaceValue<io.Reader | null>(strings.NewReader(""), "*strings.Reader", /* @__PURE__ */ $.pointerType("strings.Reader")))!)

export function __goscript_set_emptyBody(__goscriptValue: io.ReadCloser | null): void {
	emptyBody = __goscriptValue
}

export async function DumpResponse(resp: http.Response | $.VarRef<http.Response> | null, body: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	const resp$: http.Response = resp == null ? $.pointerTarget<http.Response>(resp) : (resp as any).__isVarRef === true ? (resp as any).value : (resp as any).__goValue === undefined ? (resp as any) : $.pointerTarget<http.Response>(resp)
	let b: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
	let err: $.GoError = null! as $.GoError
	let save = (resp$ as http.Response).Body
	let savecl = (resp$ as http.Response).ContentLength

	if (!body) {
		// For content length of zero. Make sure the body is an empty
		// reader, instead of returning error through failureToReadBody{}.
		if ((resp$ as http.Response).ContentLength == 0n) {
			;(resp$ as http.Response).Body = emptyBody
		} else {
			;(resp$ as http.Response).Body = $.interfaceValue<io.ReadCloser | null>(new failureToReadBody(undefined, true), "httputil.failureToReadBody", "httputil.failureToReadBody")
		}
	} else {
		if ((resp$ as http.Response).Body == null) {
			;(resp$ as http.Response).Body = emptyBody
		} else {
			let __goscriptTuple6: any = await drainBody((resp$ as http.Response).Body)
			save = __goscriptTuple6[0];
			;(resp$ as http.Response).Body = __goscriptTuple6[1]
			err = __goscriptTuple6[2]
			if (err != null) {
				return [null, err]
			}
		}
	}
	err = await http.Response.prototype.Write.call($.pointerValue<http.Response>(resp), $.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!)
	if ($.comparableEqual(err, errNoBody)) {
		err = null
	}
	;(resp$ as http.Response).Body = save;
	;(resp$ as http.Response).ContentLength = savecl
	if (err != null) {
		return [null, err]
	}
	return [b.value.Bytes(), null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Read: (receiver: any, ...args: any[]) => (neverEnding_Read as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "httputil.neverEnding"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])])
}
