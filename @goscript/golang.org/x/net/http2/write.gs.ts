// Generated file based on write.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as log from "@goscript/log/index.js"

import * as http from "@goscript/net/http/index.js"

import * as url2 from "@goscript/net/url/index.js"

import * as httpguts from "@goscript/golang.org/x/net/http/httpguts/index.js"

import * as hpack from "@goscript/golang.org/x/net/http2/hpack/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_headermap from "./headermap.gs.ts"

import * as __goscript_http2 from "./http2.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/log/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/url/index.js"
import "@goscript/golang.org/x/net/http/httpguts/index.js"
import "@goscript/golang.org/x/net/http2/hpack/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"
import "./errors.gs.ts"
import "./frame.gs.ts"
import "./headermap.gs.ts"
import "./http2.gs.ts"

$.registerTypePackagePath("golang.org/x/net/http2", ["http2.writeFramer", "http2.writeContext", "http2.flushFrameWriter", "http2.writeSettings", "http2.writeGoAway", "http2.writeData", "http2.handlerPanicRST", "http2.writePingAck", "http2.writeSettingsAck", "http2.writeResHeaders", "http2.writePushPromise", "http2.write100ContinueHeadersFrame", "http2.writeWindowUpdate"])

export type writeFramer = {
	staysWithinBuffer(size: number): boolean
	writeFrame(_p0: writeContext | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"http2.writeFramer",
	null,
	[$.methodSignature("staysWithinBuffer", [["size", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("writeFrame", ["http2.writeContext"], ["error"])]
);

export type writeContext = {
	CloseConn(): $.GoError | globalThis.Promise<$.GoError>
	Flush(): $.GoError | globalThis.Promise<$.GoError>
	Framer(): __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null
	HeaderEncoder(): [hpack.Encoder | $.VarRef<hpack.Encoder> | null, bytes.Buffer | $.VarRef<bytes.Buffer> | null]
}

$.registerInterfaceType(
	"http2.writeContext",
	null,
	[$.methodSignature("CloseConn", [], ["error"]), $.methodSignature("Flush", [], ["error"]), $.methodSignature("Framer", [], [/* @__PURE__ */ $.pointerType("http2.Framer")]), $.methodSignature("HeaderEncoder", [], [/* @__PURE__ */ $.pointerType("hpack.Encoder"), /* @__PURE__ */ $.pointerType("bytes.Buffer")])]
);

export type writeSettings = $.Slice<__goscript_http2.Setting>

$.registerNamedType("http2.writeSettings", /* @__PURE__ */ $.sliceType("http2.Setting"));

$.registerNamedValueType(
	"http2.writeSettings",
	{staysWithinBuffer: (receiver: any, ...args: any[]) => (writeSettings_staysWithinBuffer as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), writeFrame: (receiver: any, ...args: any[]) => (writeSettings_writeFrame as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("staysWithinBuffer", [["max", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("writeFrame", [["ctx", "http2.writeContext"]], ["error"])]
);

$.registerNamedValueType(
	"*http2.writeSettings",
	{staysWithinBuffer: (receiver: any, ...args: any[]) => (writeSettings_staysWithinBuffer as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), writeFrame: (receiver: any, ...args: any[]) => (writeSettings_writeFrame as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("staysWithinBuffer", [["max", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("writeFrame", [["ctx", "http2.writeContext"]], ["error"])]
);

export class flushFrameWriter {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): flushFrameWriter {
		return new flushFrameWriter(this, true)
	}

	public __goscriptAssign(source: flushFrameWriter): void {
	}

	public staysWithinBuffer(max: number): boolean {
		return false
	}

	public async writeFrame(ctx: writeContext | null): globalThis.Promise<$.GoError> {
		return (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<writeContext, null>) : $.pointerValue<Exclude<writeContext, null>>(ctx)).Flush()
	}

	static __typeInfo = $.registerStructType(
		"http2.flushFrameWriter",
		() => new flushFrameWriter(),
		() => [$.methodSignature("staysWithinBuffer", [["max", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("writeFrame", [["ctx", "http2.writeContext"]], ["error"])],
		flushFrameWriter,
		() => []
	)
}

export class writeGoAway {
	public get maxStreamID(): number {
		return this._fields.maxStreamID
	}

	public set maxStreamID(value: number) {
		this._fields.maxStreamID = value
	}

	public get code(): __goscript_errors.ErrCode {
		return this._fields.code
	}

	public set code(value: __goscript_errors.ErrCode) {
		this._fields.code = value
	}

	public _fields: {
		maxStreamID: number
		code: __goscript_errors.ErrCode
	}

	constructor(init?: Partial<{maxStreamID?: number, code?: __goscript_errors.ErrCode}>, __goscriptValue?: boolean) {
		this._fields = {
			maxStreamID: init?.maxStreamID ?? (0 as number),
			code: init?.code ?? (0 as __goscript_errors.ErrCode)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): writeGoAway {
		return new writeGoAway(this, true)
	}

	public __goscriptAssign(source: writeGoAway): void {
		const target = this._fields
		const values = source._fields
		target.maxStreamID = values.maxStreamID
		target.code = values.code
	}

	public staysWithinBuffer(max: number): boolean {
		return false
	}

	public async writeFrame(ctx: writeContext | null): globalThis.Promise<$.GoError> {
		const p: writeGoAway | $.VarRef<writeGoAway> | null = this;
		const p$: writeGoAway = p == null ? $.pointerTarget<writeGoAway>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<writeGoAway>(p)
		let err = await __goscript_frame.Framer.prototype.WriteGoAway.call(((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<writeContext, null>) : $.pointerValue<Exclude<writeContext, null>>(ctx)).Framer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null), (p$ as writeGoAway).maxStreamID, (p$ as writeGoAway).code, null)
		void (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<writeContext, null>) : $.pointerValue<Exclude<writeContext, null>>(ctx)).Flush(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	static __typeInfo = $.registerStructType(
		"http2.writeGoAway",
		() => new writeGoAway(),
		() => [$.methodSignature("staysWithinBuffer", [["max", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("writeFrame", [["ctx", "http2.writeContext"]], ["error"], true)],
		writeGoAway,
		() => [/* @__PURE__ */ $.structField("maxStreamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("code", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode"), [1], 4, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class writeData {
	public get streamID(): number {
		return this._fields.streamID
	}

	public set streamID(value: number) {
		this._fields.streamID = value
	}

	public get p(): $.Slice<number> {
		return this._fields.p
	}

	public set p(value: $.Slice<number>) {
		this._fields.p = value
	}

	public get endStream(): boolean {
		return this._fields.endStream
	}

	public set endStream(value: boolean) {
		this._fields.endStream = value
	}

	public _fields: {
		streamID: number
		p: $.Slice<number>
		endStream: boolean
	}

	constructor(init?: Partial<{streamID?: number, p?: $.Slice<number>, endStream?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			streamID: init?.streamID ?? (0 as number),
			p: init?.p ?? (null! as $.Slice<number>),
			endStream: init?.endStream ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): writeData {
		return new writeData(this, true)
	}

	public __goscriptAssign(source: writeData): void {
		const target = this._fields
		const values = source._fields
		target.streamID = values.streamID
		target.p = values.p
		target.endStream = values.endStream
	}

	public async String(): globalThis.Promise<string> {
		const w: writeData | $.VarRef<writeData> | null = this;
		const w$: writeData = w == null ? $.pointerTarget<writeData>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<writeData>(w)
		return fmt.Sprintf("writeData(stream=%d, p=%d, endStream=%v)", $.basicInterfaceValue((w$ as writeData).streamID, "uint32"), $.basicInterfaceValue($.sliceLen((w$ as writeData).p), "int"), (w$ as writeData).endStream)
	}

	public staysWithinBuffer(max: number): boolean {
		const w: writeData | $.VarRef<writeData> | null = this;
		return (9 + $.sliceLen($.pointerValue<writeData>(w).p)) <= max
	}

	public async writeFrame(ctx: writeContext | null): globalThis.Promise<$.GoError> {
		const w: writeData | $.VarRef<writeData> | null = this;
		const w$: writeData = w == null ? $.pointerTarget<writeData>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<writeData>(w)
		return __goscript_frame.Framer.prototype.WriteData.call(((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<writeContext, null>) : $.pointerValue<Exclude<writeContext, null>>(ctx)).Framer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null), (w$ as writeData).streamID, (w$ as writeData).endStream, (w$ as writeData).p)
	}

	static __typeInfo = $.registerStructType(
		"http2.writeData",
		() => new writeData(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("staysWithinBuffer", [["max", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("writeFrame", [["ctx", "http2.writeContext"]], ["error"], true)],
		writeData,
		() => [/* @__PURE__ */ $.structField("streamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("endStream", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class handlerPanicRST {
	public get StreamID(): number {
		return this._fields.StreamID
	}

	public set StreamID(value: number) {
		this._fields.StreamID = value
	}

	public _fields: {
		StreamID: number
	}

	constructor(init?: Partial<{StreamID?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			StreamID: init?.StreamID ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): handlerPanicRST {
		return new handlerPanicRST(this, true)
	}

	public __goscriptAssign(source: handlerPanicRST): void {
		const target = this._fields
		const values = source._fields
		target.StreamID = values.StreamID
	}

	public staysWithinBuffer(max: number): boolean {
		const hp = this;
		return 13 <= max
	}

	public async writeFrame(ctx: writeContext | null): globalThis.Promise<$.GoError> {
		const hp = this;
		return __goscript_frame.Framer.prototype.WriteRSTStream.call(((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<writeContext, null>) : $.pointerValue<Exclude<writeContext, null>>(ctx)).Framer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null), hp.StreamID, 2)
	}

	static __typeInfo = $.registerStructType(
		"http2.handlerPanicRST",
		() => new handlerPanicRST(),
		() => [$.methodSignature("staysWithinBuffer", [["max", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("writeFrame", [["ctx", "http2.writeContext"]], ["error"])],
		handlerPanicRST,
		() => [/* @__PURE__ */ $.structField("StreamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true)]
	)
}

export class writePingAck {
	public get pf(): __goscript_frame.PingFrame | $.VarRef<__goscript_frame.PingFrame> | null {
		return this._fields.pf
	}

	public set pf(value: __goscript_frame.PingFrame | $.VarRef<__goscript_frame.PingFrame> | null) {
		this._fields.pf = value
	}

	public _fields: {
		pf: __goscript_frame.PingFrame | $.VarRef<__goscript_frame.PingFrame> | null
	}

	constructor(init?: Partial<{pf?: __goscript_frame.PingFrame | $.VarRef<__goscript_frame.PingFrame> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			pf: init?.pf ?? (null! as __goscript_frame.PingFrame | $.VarRef<__goscript_frame.PingFrame> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): writePingAck {
		return new writePingAck(this, true)
	}

	public __goscriptAssign(source: writePingAck): void {
		const target = this._fields
		const values = source._fields
		target.pf = values.pf
	}

	public staysWithinBuffer(max: number): boolean {
		const w = this;
		return 17 <= max
	}

	public async writeFrame(ctx: writeContext | null): globalThis.Promise<$.GoError> {
		const w = this;
		return __goscript_frame.Framer.prototype.WritePing.call(((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<writeContext, null>) : $.pointerValue<Exclude<writeContext, null>>(ctx)).Framer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null), true, $.cloneArrayValue($.pointerValue<__goscript_frame.PingFrame>(w.pf).Data, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)))
	}

	static __typeInfo = $.registerStructType(
		"http2.writePingAck",
		() => new writePingAck(),
		() => [$.methodSignature("staysWithinBuffer", [["max", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("writeFrame", [["ctx", "http2.writeContext"]], ["error"])],
		writePingAck,
		() => [/* @__PURE__ */ $.structField("pf", /* @__PURE__ */ $.pointerType("http2.PingFrame"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class writeSettingsAck {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): writeSettingsAck {
		return new writeSettingsAck(this, true)
	}

	public __goscriptAssign(source: writeSettingsAck): void {
	}

	public staysWithinBuffer(max: number): boolean {
		return 9 <= max
	}

	public async writeFrame(ctx: writeContext | null): globalThis.Promise<$.GoError> {
		return __goscript_frame.Framer.prototype.WriteSettingsAck.call(((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<writeContext, null>) : $.pointerValue<Exclude<writeContext, null>>(ctx)).Framer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null))
	}

	static __typeInfo = $.registerStructType(
		"http2.writeSettingsAck",
		() => new writeSettingsAck(),
		() => [$.methodSignature("staysWithinBuffer", [["max", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("writeFrame", [["ctx", "http2.writeContext"]], ["error"])],
		writeSettingsAck,
		() => []
	)
}

export class writeResHeaders {
	public get streamID(): number {
		return this._fields.streamID
	}

	public set streamID(value: number) {
		this._fields.streamID = value
	}

	public get httpResCode(): number {
		return this._fields.httpResCode
	}

	public set httpResCode(value: number) {
		this._fields.httpResCode = value
	}

	public get h(): http.Header {
		return this._fields.h
	}

	public set h(value: http.Header) {
		this._fields.h = value
	}

	public get trailers(): $.Slice<string> {
		return this._fields.trailers
	}

	public set trailers(value: $.Slice<string>) {
		this._fields.trailers = value
	}

	public get endStream(): boolean {
		return this._fields.endStream
	}

	public set endStream(value: boolean) {
		this._fields.endStream = value
	}

	public get date(): string {
		return this._fields.date
	}

	public set date(value: string) {
		this._fields.date = value
	}

	public get contentType(): string {
		return this._fields.contentType
	}

	public set contentType(value: string) {
		this._fields.contentType = value
	}

	public get contentLength(): string {
		return this._fields.contentLength
	}

	public set contentLength(value: string) {
		this._fields.contentLength = value
	}

	public _fields: {
		streamID: number
		httpResCode: number
		h: http.Header
		trailers: $.Slice<string>
		endStream: boolean
		date: string
		contentType: string
		contentLength: string
	}

	constructor(init?: Partial<{streamID?: number, httpResCode?: number, h?: http.Header, trailers?: $.Slice<string>, endStream?: boolean, date?: string, contentType?: string, contentLength?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			streamID: init?.streamID ?? (0 as number),
			httpResCode: init?.httpResCode ?? (0 as number),
			h: init?.h ?? (null! as http.Header),
			trailers: init?.trailers ?? (null! as $.Slice<string>),
			endStream: init?.endStream ?? (false as boolean),
			date: init?.date ?? ("" as string),
			contentType: init?.contentType ?? ("" as string),
			contentLength: init?.contentLength ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): writeResHeaders {
		return new writeResHeaders(this, true)
	}

	public __goscriptAssign(source: writeResHeaders): void {
		const target = this._fields
		const values = source._fields
		target.streamID = values.streamID
		target.httpResCode = values.httpResCode
		target.h = values.h
		target.trailers = values.trailers
		target.endStream = values.endStream
		target.date = values.date
		target.contentType = values.contentType
		target.contentLength = values.contentLength
	}

	public staysWithinBuffer(max: number): boolean {
		const w: writeResHeaders | $.VarRef<writeResHeaders> | null = this;
		// TODO: this is a common one. It'd be nice to return true
		// here and get into the fast path if we could be clever and
		// calculate the size fast enough, or at least a conservative
		// upper bound that usually fires. (Maybe if w.h and
		// w.trailers are nil, so we don't need to enumerate it.)
		// Otherwise I'm afraid that just calculating the length to
		// answer this question would be slower than the ~2µs benefit.
		return false
	}

	public async writeFrame(ctx: writeContext | null): globalThis.Promise<$.GoError> {
		const w: writeResHeaders | $.VarRef<writeResHeaders> | null = this;
		const w$: writeResHeaders = w == null ? $.pointerTarget<writeResHeaders>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<writeResHeaders>(w)
		let __goscriptTuple0: any = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<writeContext, null>) : $.pointerValue<Exclude<writeContext, null>>(ctx)).HeaderEncoder()
		let enc: hpack.Encoder | $.VarRef<hpack.Encoder> | null = __goscriptTuple0[0]
		let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = __goscriptTuple0[1]
		bytes.Buffer.prototype.Reset.call($.pointerValue<bytes.Buffer>(buf))

		if ((w$ as writeResHeaders).httpResCode != 0) {
			await encKV(enc, ":status", __goscript_http2.httpCodeString((w$ as writeResHeaders).httpResCode))
		}

		await encodeHeaders(enc, (w$ as writeResHeaders).h, (w$ as writeResHeaders).trailers)

		if (!$.stringEqual((w$ as writeResHeaders).contentType, "")) {
			await encKV(enc, "content-type", (w$ as writeResHeaders).contentType)
		}
		if (!$.stringEqual((w$ as writeResHeaders).contentLength, "")) {
			await encKV(enc, "content-length", (w$ as writeResHeaders).contentLength)
		}
		if (!$.stringEqual((w$ as writeResHeaders).date, "")) {
			await encKV(enc, "date", (w$ as writeResHeaders).date)
		}

		let headerBlock: $.Slice<number> = bytes.Buffer.prototype.Bytes.call($.pointerValue<bytes.Buffer>(buf))
		if (($.sliceLen(headerBlock) == 0) && ((w$ as writeResHeaders).trailers == null)) {
			$.panic("unexpected empty hpack")
		}

		return splitHeaderBlock(ctx, headerBlock, $.functionValue(((__receiver) => (ctx: writeContext | null, frag: $.Slice<number>, firstFrag: boolean, lastFrag: boolean) => __receiver.writeHeaderBlock(ctx, frag, firstFrag, lastFrag))((w$ as writeResHeaders)), ({ kind: $.TypeKind.Function, params: ["http2.writeContext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("bool"), /* @__PURE__ */ $.basicType("bool")], results: ["error"] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*writeResHeaders).writeHeaderBlock-fm"))
	}

	public async writeHeaderBlock(ctx: writeContext | null, frag: $.Slice<number>, firstFrag: boolean, lastFrag: boolean): globalThis.Promise<$.GoError> {
		const w: writeResHeaders | $.VarRef<writeResHeaders> | null = this;
		const w$: writeResHeaders = w == null ? $.pointerTarget<writeResHeaders>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<writeResHeaders>(w)
		if (firstFrag) {
			return __goscript_frame.Framer.prototype.WriteHeaders.call(((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<writeContext, null>) : $.pointerValue<Exclude<writeContext, null>>(ctx)).Framer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null), new __goscript_frame.HeadersFrameParam({StreamID: (w$ as writeResHeaders).streamID, BlockFragment: frag, EndStream: (w$ as writeResHeaders).endStream, EndHeaders: lastFrag}, true))
		} else {
			return __goscript_frame.Framer.prototype.WriteContinuation.call(((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<writeContext, null>) : $.pointerValue<Exclude<writeContext, null>>(ctx)).Framer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null), (w$ as writeResHeaders).streamID, lastFrag, frag)
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"http2.writeResHeaders",
		() => new writeResHeaders(),
		() => [$.methodSignature("staysWithinBuffer", [["max", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("writeFrame", [["ctx", "http2.writeContext"]], ["error"], true), $.methodSignature("writeHeaderBlock", [["ctx", "http2.writeContext"], ["frag", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["firstFrag", /* @__PURE__ */ $.basicType("bool")], ["lastFrag", /* @__PURE__ */ $.basicType("bool")]], ["error"], true)],
		writeResHeaders,
		() => [/* @__PURE__ */ $.structField("streamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("httpResCode", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("h", "http.Header", [2], 16, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("trailers", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 24, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("endStream", /* @__PURE__ */ $.basicType("bool"), [4], 48, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("date", /* @__PURE__ */ $.basicType("string"), [5], 56, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("contentType", /* @__PURE__ */ $.basicType("string"), [6], 72, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("contentLength", /* @__PURE__ */ $.basicType("string"), [7], 88, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class writePushPromise {
	public get streamID(): number {
		return this._fields.streamID
	}

	public set streamID(value: number) {
		this._fields.streamID = value
	}

	public get method(): string {
		return this._fields.method
	}

	public set method(value: string) {
		this._fields.method = value
	}

	public get url(): url2.URL | $.VarRef<url2.URL> | null {
		return this._fields.url
	}

	public set url(value: url2.URL | $.VarRef<url2.URL> | null) {
		this._fields.url = value
	}

	public get h(): http.Header {
		return this._fields.h
	}

	public set h(value: http.Header) {
		this._fields.h = value
	}

	// Creates an ID for a pushed stream. This runs on serveG just before
	// the frame is written. The returned ID is copied to promisedID.
	public get allocatePromisedID(): (() => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null {
		return this._fields.allocatePromisedID
	}

	public set allocatePromisedID(value: (() => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null) {
		this._fields.allocatePromisedID = value
	}

	public get promisedID(): number {
		return this._fields.promisedID
	}

	public set promisedID(value: number) {
		this._fields.promisedID = value
	}

	public _fields: {
		streamID: number
		method: string
		url: url2.URL | $.VarRef<url2.URL> | null
		h: http.Header
		allocatePromisedID: (() => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null
		promisedID: number
	}

	constructor(init?: Partial<{streamID?: number, method?: string, url?: url2.URL | $.VarRef<url2.URL> | null, h?: http.Header, allocatePromisedID?: (() => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null, promisedID?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			streamID: init?.streamID ?? (0 as number),
			method: init?.method ?? ("" as string),
			url: init?.url ?? (null! as url2.URL | $.VarRef<url2.URL> | null),
			h: init?.h ?? (null! as http.Header),
			allocatePromisedID: init?.allocatePromisedID ?? (null! as (() => [number, $.GoError] | globalThis.Promise<[number, $.GoError]>) | null),
			promisedID: init?.promisedID ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): writePushPromise {
		return new writePushPromise(this, true)
	}

	public __goscriptAssign(source: writePushPromise): void {
		const target = this._fields
		const values = source._fields
		target.streamID = values.streamID
		target.method = values.method
		target.url = values.url
		target.h = values.h
		target.allocatePromisedID = values.allocatePromisedID
		target.promisedID = values.promisedID
	}

	public staysWithinBuffer(max: number): boolean {
		const w: writePushPromise | $.VarRef<writePushPromise> | null = this;
		// TODO: see writeResHeaders.staysWithinBuffer
		return false
	}

	public async writeFrame(ctx: writeContext | null): globalThis.Promise<$.GoError> {
		const w: writePushPromise | $.VarRef<writePushPromise> | null = this;
		const w$: writePushPromise = w == null ? $.pointerTarget<writePushPromise>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<writePushPromise>(w)
		let __goscriptTuple1: any = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<writeContext, null>) : $.pointerValue<Exclude<writeContext, null>>(ctx)).HeaderEncoder()
		let enc: hpack.Encoder | $.VarRef<hpack.Encoder> | null = __goscriptTuple1[0]
		let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = __goscriptTuple1[1]
		bytes.Buffer.prototype.Reset.call($.pointerValue<bytes.Buffer>(buf))

		await encKV(enc, ":method", (w$ as writePushPromise).method)
		await encKV(enc, ":scheme", $.pointerValue<url2.URL>((w$ as writePushPromise).url).Scheme)
		await encKV(enc, ":authority", $.pointerValue<url2.URL>((w$ as writePushPromise).url).Host)
		await encKV(enc, ":path", url2.URL.prototype.RequestURI.call((w$ as writePushPromise).url))
		await encodeHeaders(enc, (w$ as writePushPromise).h, null)

		let headerBlock: $.Slice<number> = bytes.Buffer.prototype.Bytes.call($.pointerValue<bytes.Buffer>(buf))
		if ($.sliceLen(headerBlock) == 0) {
			$.panic("unexpected empty hpack")
		}

		return splitHeaderBlock(ctx, headerBlock, $.functionValue(((__receiver) => (ctx: writeContext | null, frag: $.Slice<number>, firstFrag: boolean, lastFrag: boolean) => __receiver.writeHeaderBlock(ctx, frag, firstFrag, lastFrag))((w$ as writePushPromise)), ({ kind: $.TypeKind.Function, params: ["http2.writeContext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("bool"), /* @__PURE__ */ $.basicType("bool")], results: ["error"] } as $.FunctionTypeInfo), "golang.org/x/net/http2.(*writePushPromise).writeHeaderBlock-fm"))
	}

	public async writeHeaderBlock(ctx: writeContext | null, frag: $.Slice<number>, firstFrag: boolean, lastFrag: boolean): globalThis.Promise<$.GoError> {
		const w: writePushPromise | $.VarRef<writePushPromise> | null = this;
		const w$: writePushPromise = w == null ? $.pointerTarget<writePushPromise>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<writePushPromise>(w)
		if (firstFrag) {
			return __goscript_frame.Framer.prototype.WritePushPromise.call(((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<writeContext, null>) : $.pointerValue<Exclude<writeContext, null>>(ctx)).Framer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null), new __goscript_frame.PushPromiseParam({StreamID: (w$ as writePushPromise).streamID, PromiseID: (w$ as writePushPromise).promisedID, BlockFragment: frag, EndHeaders: lastFrag}, true))
		} else {
			return __goscript_frame.Framer.prototype.WriteContinuation.call(((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<writeContext, null>) : $.pointerValue<Exclude<writeContext, null>>(ctx)).Framer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null), (w$ as writePushPromise).streamID, lastFrag, frag)
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"http2.writePushPromise",
		() => new writePushPromise(),
		() => [$.methodSignature("staysWithinBuffer", [["max", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("writeFrame", [["ctx", "http2.writeContext"]], ["error"], true), $.methodSignature("writeHeaderBlock", [["ctx", "http2.writeContext"], ["frag", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["firstFrag", /* @__PURE__ */ $.basicType("bool")], ["lastFrag", /* @__PURE__ */ $.basicType("bool")]], ["error"], true)],
		writePushPromise,
		() => [/* @__PURE__ */ $.structField("streamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("method", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("url", /* @__PURE__ */ $.pointerType("url.URL"), [2], 24, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("h", "http.Header", [3], 32, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("allocatePromisedID", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("uint32"), "error"] } as $.FunctionTypeInfo), [4], 40, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("promisedID", /* @__PURE__ */ $.basicType("uint32"), [5], 48, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class write100ContinueHeadersFrame {
	public get streamID(): number {
		return this._fields.streamID
	}

	public set streamID(value: number) {
		this._fields.streamID = value
	}

	public _fields: {
		streamID: number
	}

	constructor(init?: Partial<{streamID?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			streamID: init?.streamID ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): write100ContinueHeadersFrame {
		return new write100ContinueHeadersFrame(this, true)
	}

	public __goscriptAssign(source: write100ContinueHeadersFrame): void {
		const target = this._fields
		const values = source._fields
		target.streamID = values.streamID
	}

	public staysWithinBuffer(max: number): boolean {
		const w = this;
		// Sloppy but conservative:
		return 29 <= max
	}

	public async writeFrame(ctx: writeContext | null): globalThis.Promise<$.GoError> {
		const w = this;
		let __goscriptTuple2: any = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<writeContext, null>) : $.pointerValue<Exclude<writeContext, null>>(ctx)).HeaderEncoder()
		let enc: hpack.Encoder | $.VarRef<hpack.Encoder> | null = __goscriptTuple2[0]
		let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = __goscriptTuple2[1]
		bytes.Buffer.prototype.Reset.call($.pointerValue<bytes.Buffer>(buf))
		await encKV(enc, ":status", "100")
		return __goscript_frame.Framer.prototype.WriteHeaders.call(((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<writeContext, null>) : $.pointerValue<Exclude<writeContext, null>>(ctx)).Framer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null), (() => { const __goscriptLiteralField0 = bytes.Buffer.prototype.Bytes.call($.pointerValue<bytes.Buffer>(buf)); return new __goscript_frame.HeadersFrameParam({StreamID: w.streamID, BlockFragment: __goscriptLiteralField0, EndStream: false, EndHeaders: true}, true) })())
	}

	static __typeInfo = $.registerStructType(
		"http2.write100ContinueHeadersFrame",
		() => new write100ContinueHeadersFrame(),
		() => [$.methodSignature("staysWithinBuffer", [["max", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("writeFrame", [["ctx", "http2.writeContext"]], ["error"])],
		write100ContinueHeadersFrame,
		() => [/* @__PURE__ */ $.structField("streamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class writeWindowUpdate {
	public get streamID(): number {
		return this._fields.streamID
	}

	public set streamID(value: number) {
		this._fields.streamID = value
	}

	public get n(): number {
		return this._fields.n
	}

	public set n(value: number) {
		this._fields.n = value
	}

	public _fields: {
		streamID: number
		n: number
	}

	constructor(init?: Partial<{streamID?: number, n?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			streamID: init?.streamID ?? (0 as number),
			n: init?.n ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): writeWindowUpdate {
		return new writeWindowUpdate(this, true)
	}

	public __goscriptAssign(source: writeWindowUpdate): void {
		const target = this._fields
		const values = source._fields
		target.streamID = values.streamID
		target.n = values.n
	}

	public staysWithinBuffer(max: number): boolean {
		const wu = this;
		return 13 <= max
	}

	public async writeFrame(ctx: writeContext | null): globalThis.Promise<$.GoError> {
		const wu = this;
		return __goscript_frame.Framer.prototype.WriteWindowUpdate.call(((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<writeContext, null>) : $.pointerValue<Exclude<writeContext, null>>(ctx)).Framer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null), wu.streamID, wu.n)
	}

	static __typeInfo = $.registerStructType(
		"http2.writeWindowUpdate",
		() => new writeWindowUpdate(),
		() => [$.methodSignature("staysWithinBuffer", [["max", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("writeFrame", [["ctx", "http2.writeContext"]], ["error"])],
		writeWindowUpdate,
		() => [/* @__PURE__ */ $.structField("streamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("n", /* @__PURE__ */ $.basicType("uint32"), [1], 4, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export function writeEndsStream(w: writeFramer | null): boolean {
	{
		const __goscriptTypeSwitchValue = w
		switch (true) {
			case $.typeAssert<writeData | $.VarRef<writeData> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.writeData")).ok:
				{
					let v: writeData | $.VarRef<writeData> | null = $.typeAssert<writeData | $.VarRef<writeData> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.writeData")).value
					return $.pointerValue<writeData>(v).endStream
				}
				break
			case $.typeAssert<writeResHeaders | $.VarRef<writeResHeaders> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.writeResHeaders")).ok:
				{
					let v: writeResHeaders | $.VarRef<writeResHeaders> | null = $.typeAssert<writeResHeaders | $.VarRef<writeResHeaders> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.writeResHeaders")).value
					return $.pointerValue<writeResHeaders>(v).endStream
				}
				break
			case __goscriptTypeSwitchValue == null:
				{
					let v: any = __goscriptTypeSwitchValue
					$.panic("writeEndsStream called on nil writeFramer")
				}
				break
		}
	}
	return false
}

export function writeSettings_staysWithinBuffer(s: writeSettings, max: number): boolean {
	const settingSize: number = 6
	return (9 + (6 * $.sliceLen((s as writeSettings)))) <= max
}

export async function writeSettings_writeFrame(s: writeSettings, ctx: writeContext | null): globalThis.Promise<$.GoError> {
	return __goscript_frame.Framer.prototype.WriteSettings.call(((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<writeContext, null>) : $.pointerValue<Exclude<writeContext, null>>(ctx)).Framer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Framer | $.VarRef<__goscript_frame.Framer> | null), s)
}

export async function splitHeaderBlock(ctx: writeContext | null, headerBlock: $.Slice<number>, fn: ((ctx: writeContext | null, frag: $.Slice<number>, firstFrag: boolean, lastFrag: boolean) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
	// For now we're lazy and just pick the minimum MAX_FRAME_SIZE
	// that all peers must support (16KB). Later we could care
	// more and send larger frames if the peer advertised it, but
	// there's little point. Most headers are small anyway (so we
	// generally won't have CONTINUATION frames), and extra frames
	// only waste 9 bytes anyway.
	const maxFrameSize: number = 16384

	let first = true
	while ($.sliceLen(headerBlock) > 0) {
		let frag: $.Slice<number> = headerBlock
		if ($.sliceLen(frag) > 16384) {
			frag = $.goSlice(frag, undefined, 16384)
		}
		headerBlock = $.goSlice(headerBlock, $.sliceLen(frag), undefined)
		{
			let err = (__goscriptAwait = fn!(ctx, frag, first, $.sliceLen(headerBlock) == 0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
		first = false
	}
	return null
}

export async function encKV(enc: hpack.Encoder | $.VarRef<hpack.Encoder> | null, k: string, v: string): globalThis.Promise<void> {
	if (__goscript_http2.VerboseLogs) {
		await log.Printf("http2: server encoding header %q = %q", $.arrayToSlice<any>([k, v]))
	}
	await (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? ((enc as any) as hpack.Encoder).WriteField(new hpack.HeaderField({Name: k, Value: v}, true)) : hpack.Encoder.prototype.WriteField.call(enc, new hpack.HeaderField({Name: k, Value: v}, true)))
}

export async function encodeHeaders(enc: hpack.Encoder | $.VarRef<hpack.Encoder> | null, h: http.Header, keys: $.Slice<string>): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	if (keys == null) {
		let __goscriptShadow0: __goscript_http2.sorter | $.VarRef<__goscript_http2.sorter> | null = $.mustTypeAssert<__goscript_http2.sorter | $.VarRef<__goscript_http2.sorter> | null>(await $.pointerValue<sync.Pool>(__goscript_http2.sorterPool).Get(), /* @__PURE__ */ $.pointerType("http2.sorter"))
		// Using defer here, since the returned keys from the
		// sorter.Keys method is only valid until the sorter
		// is returned:
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (x: any) => __receiver.Put(x))($.pointerValue<sync.Pool>(__goscript_http2.sorterPool)), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "sync.(*Pool).Put-fm")
		const __goscriptDeferArg0 = $.interfaceValue(__goscriptShadow0, "*http2.sorter", /* @__PURE__ */ $.pointerType("http2.sorter"))
		__defer.defer(() => { __goscriptDeferCallee0(__goscriptDeferArg0) })
		keys = await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as __goscript_http2.sorter).Keys(h) : __goscript_http2.sorter.prototype.Keys.call(__goscriptShadow0, h))
	}
	for (let __goscriptRangeTarget1 = keys, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let k = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		let vv: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>(h, k, null)[0]
		let __goscriptShadow1 = k
		let __goscriptTuple3: any = await __goscript_headermap.lowerHeader(__goscriptShadow1)
		let __goscriptShadow2 = __goscriptTuple3[0]
		let ascii = __goscriptTuple3[1]
		if (!ascii) {
			// Skip writing invalid headers. Per RFC 7540, Section 8.1.2, header
			// field names have to be ASCII characters (just as in HTTP/1.x).
			continue
		}
		if (!__goscript_http2.validWireHeaderFieldName(__goscriptShadow2)) {
			// Skip it as backup paranoia. Per
			// golang.org/issue/14048, these should
			// already be rejected at a higher level.
			continue
		}
		let isTE = $.stringEqual(__goscriptShadow2, "transfer-encoding")
		for (let __goscriptRangeTarget0 = vv, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let v = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
			if (!httpguts.ValidHeaderFieldValue(v)) {
				// TODO: return an error? golang.org/issue/14048
				// For now just omit it.
				continue
			}
			// TODO: more of "8.1.2.2 Connection-Specific Header Fields"
			if (isTE && (!$.stringEqual(v, "trailers"))) {
				continue
			}
			await encKV(enc, __goscriptShadow2, v)
		}
	}
}

var __goscriptAwait: any
