// Generated file based on frame.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as log from "@goscript/log/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as httpguts from "@goscript/golang.org/x/net/http/httpguts/index.js"

import * as hpack from "@goscript/golang.org/x/net/http2/hpack/index.js"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_http2 from "./http2.gs.ts"

import * as __goscript_write from "./write.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/log/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/golang.org/x/net/http/httpguts/index.js"
import "@goscript/golang.org/x/net/http2/hpack/index.js"
import "./errors.gs.ts"
import "./http2.gs.ts"
import "./write.gs.ts"

$.registerTypePackagePath("golang.org/x/net/http2", ["http2.FrameType", "http2.Flags", "http2.frameParser", "http2.FrameHeader", "http2.Frame", "http2.Framer", "http2.frameCache", "http2.DataFrame", "http2.SettingsFrame", "http2.PingFrame", "http2.GoAwayFrame", "http2.UnknownFrame", "http2.WindowUpdateFrame", "http2.HeadersFrame", "http2.HeadersFrameParam", "http2.PriorityFrame", "http2.PriorityParam", "http2.RSTStreamFrame", "http2.ContinuationFrame", "http2.PushPromiseFrame", "http2.PushPromiseParam", "http2.streamEnder", "http2.headersEnder", "http2.headersOrContinuation", "http2.MetaHeadersFrame"])

export type FrameType = number

$.registerNamedValueType(
	"http2.FrameType",
	{String: (receiver: any, ...args: any[]) => (FrameType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*http2.FrameType",
	{String: (receiver: any, ...args: any[]) => (FrameType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Flags = number

$.registerNamedValueType(
	"http2.Flags",
	{Has: (receiver: any, ...args: any[]) => (Flags_Has as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Has", [["v", /* @__PURE__ */ $.basicType("uint8", "http2.Flags")]], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*http2.Flags",
	{Has: (receiver: any, ...args: any[]) => (Flags_Has as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Has", [["v", /* @__PURE__ */ $.basicType("uint8", "http2.Flags")]], [/* @__PURE__ */ $.basicType("bool")])]
);

export type frameParser = ((fc: frameCache | $.VarRef<frameCache> | null, fh: FrameHeader, countError: ((_p0: string) => void) | null, payload: $.Slice<number>) => [Frame | null, $.GoError] | globalThis.Promise<[Frame | null, $.GoError]>) | null

export type Frame = {
	Header(): FrameHeader
	invalidate(): void
}

$.registerInterfaceType(
	"http2.Frame",
	null,
	[$.methodSignature("Header", [], ["http2.FrameHeader"]), $.methodSignature("invalidate")]
);

export type streamEnder = {
	StreamEnded(): boolean
}

$.registerInterfaceType(
	"http2.streamEnder",
	null,
	[$.methodSignature("StreamEnded", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type headersEnder = {
	HeadersEnded(): boolean
}

$.registerInterfaceType(
	"http2.headersEnder",
	null,
	[$.methodSignature("HeadersEnded", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type headersOrContinuation = {
	HeaderBlockFragment(): $.Slice<number>
	HeadersEnded(): boolean
}

$.registerInterfaceType(
	"http2.headersOrContinuation",
	null,
	[$.methodSignature("HeaderBlockFragment", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("HeadersEnded", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export class FrameHeader {
	public get valid(): boolean {
		return this._fields.valid
	}

	public set valid(value: boolean) {
		this._fields.valid = value
	}

	// Type is the 1 byte frame type. There are ten standard frame
	// types, but extension frame types may be written by WriteRawFrame
	// and will be returned by ReadFrame (as UnknownFrame).
	public get Type(): FrameType {
		return this._fields.Type
	}

	public set Type(value: FrameType) {
		this._fields.Type = value
	}

	// Flags are the 1 byte of 8 potential bit flags per frame.
	// They are specific to the frame type.
	public get Flags(): Flags {
		return this._fields.Flags
	}

	public set Flags(value: Flags) {
		this._fields.Flags = value
	}

	// Length is the length of the frame, not including the 9 byte header.
	// The maximum size is one byte less than 16MB (uint24), but only
	// frames up to 16KB are allowed without peer agreement.
	public get Length(): number {
		return this._fields.Length
	}

	public set Length(value: number) {
		this._fields.Length = value
	}

	// StreamID is which stream this frame is for. Certain frames
	// are not stream-specific, in which case this field is 0.
	public get StreamID(): number {
		return this._fields.StreamID
	}

	public set StreamID(value: number) {
		this._fields.StreamID = value
	}

	public _fields: {
		valid: boolean
		Type: FrameType
		Flags: Flags
		Length: number
		StreamID: number
	}

	constructor(init?: Partial<{valid?: boolean, Type?: FrameType, Flags?: Flags, Length?: number, StreamID?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			valid: init?.valid ?? (false as boolean),
			Type: init?.Type ?? (0 as FrameType),
			Flags: init?.Flags ?? (0 as Flags),
			Length: init?.Length ?? (0 as number),
			StreamID: init?.StreamID ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FrameHeader {
		return new FrameHeader(this, true)
	}

	public __goscriptAssign(source: FrameHeader): void {
		const target = this._fields
		const values = source._fields
		target.valid = values.valid
		target.Type = values.Type
		target.Flags = values.Flags
		target.Length = values.Length
		target.StreamID = values.StreamID
	}

	public Header(): FrameHeader {
		const h = this;
		return (h).clone()
	}

	public async String(): globalThis.Promise<string> {
		const h = this;
		let buf: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
		buf.value.WriteString("[FrameHeader ")
		await h.writeDebug(buf)
		buf.value.WriteByte(93)
		return buf.value.String()
	}

	public checkValid(): void {
		const h: FrameHeader | $.VarRef<FrameHeader> | null = this;
		if (!$.pointerValue<FrameHeader>(h).valid) {
			$.panic("Frame accessor called on non-owned Frame")
		}
	}

	public invalidate(): void {
		let h: FrameHeader | $.VarRef<FrameHeader> | null = this;
		$.pointerValue<FrameHeader>(h).valid = false
	}

	public async writeDebug(buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null): globalThis.Promise<void> {
		const h = this;
		bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(buf), await FrameType_String(h.Type))
		if (h.Flags != 0) {
			bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(buf), " flags=")
			let _set = 0
			for (let i = 0; i < 8; i = ((i + 1) & 0xff)) {
				if ($.uint((h.Flags & (((1 << i) & 0xff))), 8) == 0) {
					continue
				}
				_set++
				if (_set > 1) {
					bytes.Buffer.prototype.WriteByte.call($.pointerValue<bytes.Buffer>(buf), 124)
				}
				let name = $.mapGet<Flags, string, string>($.mapGet<FrameType, globalThis.Map<Flags, string> | null, globalThis.Map<Flags, string> | null>(flagName, h.Type, null)[0], $.uint($.uint(((1 << i) & 0xff), 8), 8), "")[0]
				if (!$.stringEqual(name, "")) {
					bytes.Buffer.prototype.WriteString.call($.pointerValue<bytes.Buffer>(buf), name)
				} else {
					await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "0x%x", $.basicInterfaceValue(1 << i, "int"))
				}
			}
		}
		if (h.StreamID != 0) {
			await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, " stream=%d", $.basicInterfaceValue(h.StreamID, "uint32"))
		}
		await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, " len=%d", $.basicInterfaceValue(h.Length, "uint32"))
	}

	static __typeInfo = $.registerStructType(
		"http2.FrameHeader",
		() => new FrameHeader(),
		() => [$.methodSignature("Header", [], ["http2.FrameHeader"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("checkValid", [], [], true), $.methodSignature("invalidate", [], [], true), $.methodSignature("writeDebug", [["buf", /* @__PURE__ */ $.pointerType("bytes.Buffer")]])],
		FrameHeader,
		() => [/* @__PURE__ */ $.structField("valid", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("uint8", "http2.FrameType"), [1], 1, true), /* @__PURE__ */ $.structField("Flags", /* @__PURE__ */ $.basicType("uint8", "http2.Flags"), [2], 2, true), /* @__PURE__ */ $.structField("Length", /* @__PURE__ */ $.basicType("uint32"), [3], 4, true), /* @__PURE__ */ $.structField("StreamID", /* @__PURE__ */ $.basicType("uint32"), [4], 8, true)]
	)
}

export class Framer {
	public get r(): io.Reader | null {
		return this._fields.r
	}

	public set r(value: io.Reader | null) {
		this._fields.r = value
	}

	public get lastFrame(): Frame | null {
		return this._fields.lastFrame
	}

	public set lastFrame(value: Frame | null) {
		this._fields.lastFrame = value
	}

	public get errDetail(): $.GoError {
		return this._fields.errDetail
	}

	public set errDetail(value: $.GoError) {
		this._fields.errDetail = value
	}

	// countError is a non-nil func that's called on a frame parse
	// error with some unique error path token. It's initialized
	// from Transport.CountError or Server.CountError.
	public get countError(): ((errToken: string) => void) | null {
		return this._fields.countError
	}

	public set countError(value: ((errToken: string) => void) | null) {
		this._fields.countError = value
	}

	// lastHeaderStream is non-zero if the last frame was an
	// unfinished HEADERS/CONTINUATION.
	public get lastHeaderStream(): number {
		return this._fields.lastHeaderStream
	}

	public set lastHeaderStream(value: number) {
		this._fields.lastHeaderStream = value
	}

	public get maxReadSize(): number {
		return this._fields.maxReadSize
	}

	public set maxReadSize(value: number) {
		this._fields.maxReadSize = value
	}

	public get headerBuf(): Uint8Array {
		return this._fields.headerBuf
	}

	public set headerBuf(value: Uint8Array) {
		this._fields.headerBuf = value
	}

	// TODO: let getReadBuf be configurable, and use a less memory-pinning
	// allocator in server.go to minimize memory pinned for many idle conns.
	// Will probably also need to make frame invalidation have a hook too.
	public get getReadBuf(): ((size: number) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null {
		return this._fields.getReadBuf
	}

	public set getReadBuf(value: ((size: number) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null) {
		this._fields.getReadBuf = value
	}

	public get readBuf(): $.Slice<number> {
		return this._fields.readBuf
	}

	public set readBuf(value: $.Slice<number>) {
		this._fields.readBuf = value
	}

	public get maxWriteSize(): number {
		return this._fields.maxWriteSize
	}

	public set maxWriteSize(value: number) {
		this._fields.maxWriteSize = value
	}

	public get w(): io.Writer | null {
		return this._fields.w
	}

	public set w(value: io.Writer | null) {
		this._fields.w = value
	}

	public get wbuf(): $.Slice<number> {
		return this._fields.wbuf
	}

	public set wbuf(value: $.Slice<number>) {
		this._fields.wbuf = value
	}

	// AllowIllegalWrites permits the Framer's Write methods to
	// write frames that do not conform to the HTTP/2 spec. This
	// permits using the Framer to test other HTTP/2
	// implementations' conformance to the spec.
	// If false, the Write methods will prefer to return an error
	// rather than comply.
	public get AllowIllegalWrites(): boolean {
		return this._fields.AllowIllegalWrites
	}

	public set AllowIllegalWrites(value: boolean) {
		this._fields.AllowIllegalWrites = value
	}

	// AllowIllegalReads permits the Framer's ReadFrame method
	// to return non-compliant frames or frame orders.
	// This is for testing and permits using the Framer to test
	// other HTTP/2 implementations' conformance to the spec.
	// It is not compatible with ReadMetaHeaders.
	public get AllowIllegalReads(): boolean {
		return this._fields.AllowIllegalReads
	}

	public set AllowIllegalReads(value: boolean) {
		this._fields.AllowIllegalReads = value
	}

	// ReadMetaHeaders if non-nil causes ReadFrame to merge
	// HEADERS and CONTINUATION frames together and return
	// MetaHeadersFrame instead.
	public get ReadMetaHeaders(): hpack.Decoder | $.VarRef<hpack.Decoder> | null {
		return this._fields.ReadMetaHeaders
	}

	public set ReadMetaHeaders(value: hpack.Decoder | $.VarRef<hpack.Decoder> | null) {
		this._fields.ReadMetaHeaders = value
	}

	// MaxHeaderListSize is the http2 MAX_HEADER_LIST_SIZE.
	// It's used only if ReadMetaHeaders is set; 0 means a sane default
	// (currently 16MB)
	// If the limit is hit, MetaHeadersFrame.Truncated is set true.
	public get MaxHeaderListSize(): number {
		return this._fields.MaxHeaderListSize
	}

	public set MaxHeaderListSize(value: number) {
		this._fields.MaxHeaderListSize = value
	}

	public get logReads(): boolean {
		return this._fields.logReads
	}

	public set logReads(value: boolean) {
		this._fields.logReads = value
	}

	public get logWrites(): boolean {
		return this._fields.logWrites
	}

	public set logWrites(value: boolean) {
		this._fields.logWrites = value
	}

	public get debugFramer(): Framer | $.VarRef<Framer> | null {
		return this._fields.debugFramer
	}

	public set debugFramer(value: Framer | $.VarRef<Framer> | null) {
		this._fields.debugFramer = value
	}

	public get debugFramerBuf(): bytes.Buffer | $.VarRef<bytes.Buffer> | null {
		return this._fields.debugFramerBuf
	}

	public set debugFramerBuf(value: bytes.Buffer | $.VarRef<bytes.Buffer> | null) {
		this._fields.debugFramerBuf = value
	}

	public get debugReadLoggerf(): ((_p0: string, _p1: $.Slice<any>) => void) | null {
		return this._fields.debugReadLoggerf
	}

	public set debugReadLoggerf(value: ((_p0: string, _p1: $.Slice<any>) => void) | null) {
		this._fields.debugReadLoggerf = value
	}

	public get debugWriteLoggerf(): ((_p0: string, _p1: $.Slice<any>) => void) | null {
		return this._fields.debugWriteLoggerf
	}

	public set debugWriteLoggerf(value: ((_p0: string, _p1: $.Slice<any>) => void) | null) {
		this._fields.debugWriteLoggerf = value
	}

	public get frameCache(): frameCache | $.VarRef<frameCache> | null {
		return this._fields.frameCache
	}

	public set frameCache(value: frameCache | $.VarRef<frameCache> | null) {
		this._fields.frameCache = value
	}

	public _fields: {
		r: io.Reader | null
		lastFrame: Frame | null
		errDetail: $.GoError
		countError: ((errToken: string) => void) | null
		lastHeaderStream: number
		maxReadSize: number
		headerBuf: Uint8Array
		getReadBuf: ((size: number) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null
		readBuf: $.Slice<number>
		maxWriteSize: number
		w: io.Writer | null
		wbuf: $.Slice<number>
		AllowIllegalWrites: boolean
		AllowIllegalReads: boolean
		ReadMetaHeaders: hpack.Decoder | $.VarRef<hpack.Decoder> | null
		MaxHeaderListSize: number
		logReads: boolean
		logWrites: boolean
		debugFramer: Framer | $.VarRef<Framer> | null
		debugFramerBuf: bytes.Buffer | $.VarRef<bytes.Buffer> | null
		debugReadLoggerf: ((_p0: string, _p1: $.Slice<any>) => void) | null
		debugWriteLoggerf: ((_p0: string, _p1: $.Slice<any>) => void) | null
		frameCache: frameCache | $.VarRef<frameCache> | null
	}

	constructor(init?: Partial<{r?: io.Reader | null, lastFrame?: Frame | null, errDetail?: $.GoError, countError?: ((errToken: string) => void) | null, lastHeaderStream?: number, maxReadSize?: number, headerBuf?: Uint8Array, getReadBuf?: ((size: number) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null, readBuf?: $.Slice<number>, maxWriteSize?: number, w?: io.Writer | null, wbuf?: $.Slice<number>, AllowIllegalWrites?: boolean, AllowIllegalReads?: boolean, ReadMetaHeaders?: hpack.Decoder | $.VarRef<hpack.Decoder> | null, MaxHeaderListSize?: number, logReads?: boolean, logWrites?: boolean, debugFramer?: Framer | $.VarRef<Framer> | null, debugFramerBuf?: bytes.Buffer | $.VarRef<bytes.Buffer> | null, debugReadLoggerf?: ((_p0: string, _p1: $.Slice<any>) => void) | null, debugWriteLoggerf?: ((_p0: string, _p1: $.Slice<any>) => void) | null, frameCache?: frameCache | $.VarRef<frameCache> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			r: init?.r ?? (null! as io.Reader | null),
			lastFrame: init?.lastFrame ?? (null! as Frame | null),
			errDetail: init?.errDetail ?? (null! as $.GoError),
			countError: init?.countError ?? (null! as ((errToken: string) => void) | null),
			lastHeaderStream: init?.lastHeaderStream ?? (0 as number),
			maxReadSize: init?.maxReadSize ?? (0 as number),
			headerBuf: init?.headerBuf !== undefined ? $.cloneArrayValue(init.headerBuf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 9)) : $.arrayValue(new Uint8Array(9)),
			getReadBuf: init?.getReadBuf ?? (null! as ((size: number) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null),
			readBuf: init?.readBuf ?? (null! as $.Slice<number>),
			maxWriteSize: init?.maxWriteSize ?? (0 as number),
			w: init?.w ?? (null! as io.Writer | null),
			wbuf: init?.wbuf ?? (null! as $.Slice<number>),
			AllowIllegalWrites: init?.AllowIllegalWrites ?? (false as boolean),
			AllowIllegalReads: init?.AllowIllegalReads ?? (false as boolean),
			ReadMetaHeaders: init?.ReadMetaHeaders ?? (null! as hpack.Decoder | $.VarRef<hpack.Decoder> | null),
			MaxHeaderListSize: init?.MaxHeaderListSize ?? (0 as number),
			logReads: init?.logReads ?? (false as boolean),
			logWrites: init?.logWrites ?? (false as boolean),
			debugFramer: init?.debugFramer ?? (null! as Framer | $.VarRef<Framer> | null),
			debugFramerBuf: init?.debugFramerBuf ?? (null! as bytes.Buffer | $.VarRef<bytes.Buffer> | null),
			debugReadLoggerf: init?.debugReadLoggerf ?? (null! as ((_p0: string, _p1: $.Slice<any>) => void) | null),
			debugWriteLoggerf: init?.debugWriteLoggerf ?? (null! as ((_p0: string, _p1: $.Slice<any>) => void) | null),
			frameCache: init?.frameCache ?? (null! as frameCache | $.VarRef<frameCache> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Framer {
		return new Framer(this, true)
	}

	public __goscriptAssign(source: Framer): void {
		const target = this._fields
		const values = source._fields
		target.r = $.assignFieldValue(target.r, values.r, "io.Reader")
		target.lastFrame = $.assignFieldValue(target.lastFrame, values.lastFrame, "http2.Frame")
		target.errDetail = $.assignFieldValue(target.errDetail, values.errDetail, "error")
		target.countError = values.countError
		target.lastHeaderStream = values.lastHeaderStream
		target.maxReadSize = values.maxReadSize
		target.headerBuf = $.assignFieldValue(target.headerBuf, values.headerBuf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 9))
		target.getReadBuf = values.getReadBuf
		target.readBuf = values.readBuf
		target.maxWriteSize = values.maxWriteSize
		target.w = $.assignFieldValue(target.w, values.w, "io.Writer")
		target.wbuf = values.wbuf
		target.AllowIllegalWrites = values.AllowIllegalWrites
		target.AllowIllegalReads = values.AllowIllegalReads
		target.ReadMetaHeaders = values.ReadMetaHeaders
		target.MaxHeaderListSize = values.MaxHeaderListSize
		target.logReads = values.logReads
		target.logWrites = values.logWrites
		target.debugFramer = values.debugFramer
		target.debugFramerBuf = values.debugFramerBuf
		target.debugReadLoggerf = values.debugReadLoggerf
		target.debugWriteLoggerf = values.debugWriteLoggerf
		target.frameCache = values.frameCache
	}

	public ErrorDetail(): $.GoError {
		const fr: Framer | $.VarRef<Framer> | null = this;
		return $.pointerValue<Framer>(fr).errDetail
	}

	public async ReadFrame(): globalThis.Promise<[Frame | null, $.GoError]> {
		let fr: Framer | $.VarRef<Framer> | null = this;
		const fr$: Framer = fr == null ? $.pointerTarget<Framer>(fr) : (fr as any).__isVarRef === true ? (fr as any).value : (fr as any).__goValue === undefined ? (fr as any) : $.pointerTarget<Framer>(fr);
		;(fr$ as Framer).errDetail = null
		if ((fr$ as Framer).lastFrame != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<Frame, null>>((fr$ as Framer).lastFrame).invalidate(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		let [fh, err] = await readFrameHeader($.goSlice((fr$ as Framer).headerBuf, undefined, undefined), (fr$ as Framer).r)
		if (err != null) {
			return [null, err]
		}
		if (fh.Length > (fr$ as Framer).maxReadSize) {
			return [null, ErrFrameTooLarge]
		}
		let payload: $.Slice<number> = ((__goscriptAwait = (fr$ as Framer).getReadBuf!(fh.Length), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
		{
			let [, __goscriptShadow0] = await io.ReadFull($.pointerValueOrNil((fr$ as Framer).r)!, payload)
			if (__goscriptShadow0 != null) {
				return [null, __goscriptShadow0]
			}
		}
		let __goscriptTuple0: any = await typeFrameParser(fh.Type)!((fr$ as Framer).frameCache, (fh).clone(), (fr$ as Framer).countError, payload)
		let f = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			{
				let [ce, ok] = $.typeAssertTuple<__goscript_errors.connError>(err, "http2.connError")
				if (ok) {
					return [null, (fr !== null && (fr as any).__isVarRef !== true && (fr as any).__goValue === undefined ? ((fr as any) as Framer).connError(ce.Code, ce.Reason) : Framer.prototype.connError.call(fr, ce.Code, ce.Reason))]
				}
			}
			return [null, err]
		}
		{
			let __goscriptShadow1 = await (fr !== null && (fr as any).__isVarRef !== true && (fr as any).__goValue === undefined ? ((fr as any) as Framer).checkFrameOrder(f) : Framer.prototype.checkFrameOrder.call(fr, f))
			if (__goscriptShadow1 != null) {
				return [null, __goscriptShadow1]
			}
		}
		if ((fr$ as Framer).logReads) {
			void (__goscriptAwait = (fr$ as Framer).debugReadLoggerf!("http2: Framer %p: read %v", $.arrayToSlice<any>([$.interfaceValue(fr, "*http2.Framer", /* @__PURE__ */ $.pointerType("http2.Framer")), await summarizeFrame(f)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ((fh.Type == 1) && ((fr$ as Framer).ReadMetaHeaders != null)) {
			return Framer.prototype.readMetaFrame.call(fr, ((f as any)?.__goType === "*http2.HeadersFrame" && (f as any).__goValue === undefined && (f as any).__isTypedNil !== true ? ((f as any) as HeadersFrame | $.VarRef<HeadersFrame> | null) : $.mustTypeAssert<HeadersFrame | $.VarRef<HeadersFrame> | null>(f, /* @__PURE__ */ $.pointerType("http2.HeadersFrame"))))
		}
		return [f, null]
	}

	public SetMaxReadFrameSize(v: number): void {
		let fr: Framer | $.VarRef<Framer> | null = this;
		if (v > 16777215) {
			v = 16777215
		}
		$.pointerValue<Framer>(fr).maxReadSize = v
	}

	public SetReuseFrames(): void {
		let fr: Framer | $.VarRef<Framer> | null = this;
		const fr$: Framer = fr == null ? $.pointerTarget<Framer>(fr) : (fr as any).__isVarRef === true ? (fr as any).value : (fr as any).__goValue === undefined ? (fr as any) : $.pointerTarget<Framer>(fr)
		if ((fr$ as Framer).frameCache != null) {
			return
		}
		;(fr$ as Framer).frameCache = new frameCache()
	}

	public async WriteContinuation(streamID: number, endHeaders: boolean, headerBlockFragment: $.Slice<number>): globalThis.Promise<$.GoError> {
		let f: Framer | $.VarRef<Framer> | null = this;
		const f$: Framer = f == null ? $.pointerTarget<Framer>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<Framer>(f)
		if (!validStreamID(streamID) && !(f$ as Framer).AllowIllegalWrites) {
			return errStreamID
		}
		let flags: Flags = 0
		if (endHeaders) {
			flags = flags | (4)
		}
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).startWrite(9, flags, streamID) : Framer.prototype.startWrite.call(f, 9, flags, streamID));
		;(f$ as Framer).wbuf = $.appendSlice((f$ as Framer).wbuf, headerBlockFragment, $.byteSliceHint)
		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).endWrite() : Framer.prototype.endWrite.call(f))
	}

	public async WriteData(streamID: number, endStream: boolean, data: $.Slice<number>): globalThis.Promise<$.GoError> {
		const f: Framer | $.VarRef<Framer> | null = this;
		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).WriteDataPadded(streamID, endStream, data, null) : Framer.prototype.WriteDataPadded.call(f, streamID, endStream, data, null))
	}

	public async WriteDataPadded(streamID: number, endStream: boolean, data: $.Slice<number>, pad: $.Slice<number>): globalThis.Promise<$.GoError> {
		const f: Framer | $.VarRef<Framer> | null = this;
		{
			let err = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).startWriteDataPadded(streamID, endStream, data, pad) : Framer.prototype.startWriteDataPadded.call(f, streamID, endStream, data, pad))
			if (err != null) {
				return err
			}
		}
		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).endWrite() : Framer.prototype.endWrite.call(f))
	}

	public async WriteGoAway(maxStreamID: number, code: __goscript_errors.ErrCode, debugData: $.Slice<number>): globalThis.Promise<$.GoError> {
		const f: Framer | $.VarRef<Framer> | null = this;
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).startWrite(7, 0, 0) : Framer.prototype.startWrite.call(f, 7, 0, 0))
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).writeUint32($.uint(maxStreamID & ((((2147483648) - 1) >>> 0)), 32)) : Framer.prototype.writeUint32.call(f, $.uint(maxStreamID & ((((2147483648) - 1) >>> 0)), 32)))
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).writeUint32($.uint(code, 32)) : Framer.prototype.writeUint32.call(f, $.uint(code, 32)))
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).writeBytes(debugData) : Framer.prototype.writeBytes.call(f, debugData))
		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).endWrite() : Framer.prototype.endWrite.call(f))
	}

	public async WriteHeaders(p: HeadersFrameParam): globalThis.Promise<$.GoError> {
		let f: Framer | $.VarRef<Framer> | null = this;
		const f$: Framer = f == null ? $.pointerTarget<Framer>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<Framer>(f)
		if (!validStreamID(p.StreamID) && !(f$ as Framer).AllowIllegalWrites) {
			return errStreamID
		}
		let flags: Flags = 0
		if (p.PadLength != 0) {
			flags = flags | (8)
		}
		if (p.EndStream) {
			flags = flags | (1)
		}
		if (p.EndHeaders) {
			flags = flags | (4)
		}
		if (!p.Priority.IsZero()) {
			flags = flags | (32)
		}
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).startWrite(1, flags, p.StreamID) : Framer.prototype.startWrite.call(f, 1, flags, p.StreamID))
		if (p.PadLength != 0) {
			void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).writeByte(p.PadLength) : Framer.prototype.writeByte.call(f, p.PadLength))
		}
		if (!p.Priority.IsZero()) {
			let v = p.Priority.StreamDep
			if (!validStreamIDOrZero(v) && !(f$ as Framer).AllowIllegalWrites) {
				return errDepStreamID
			}
			if (p.Priority.Exclusive) {
				v = v | (2147483648)
			}
			void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).writeUint32(v) : Framer.prototype.writeUint32.call(f, v))
			void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).writeByte(p.Priority.Weight) : Framer.prototype.writeByte.call(f, p.Priority.Weight))
		}
		;(f$ as Framer).wbuf = $.appendSlice((f$ as Framer).wbuf, p.BlockFragment, $.byteSliceHint);
		;(f$ as Framer).wbuf = $.appendSlice((f$ as Framer).wbuf, $.goSlice(padZeros, undefined, p.PadLength), $.byteSliceHint)
		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).endWrite() : Framer.prototype.endWrite.call(f))
	}

	public async WritePing(ack: boolean, data: Uint8Array): globalThis.Promise<$.GoError> {
		const f: Framer | $.VarRef<Framer> | null = this;
		let flags: Flags = 0
		if (ack) {
			flags = 1
		}
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).startWrite(6, flags, 0) : Framer.prototype.startWrite.call(f, 6, flags, 0))
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).writeBytes($.goSlice(data, undefined, undefined)) : Framer.prototype.writeBytes.call(f, $.goSlice(data, undefined, undefined)))
		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).endWrite() : Framer.prototype.endWrite.call(f))
	}

	public async WritePriority(streamID: number, p: PriorityParam): globalThis.Promise<$.GoError> {
		const f: Framer | $.VarRef<Framer> | null = this;
		if (!validStreamID(streamID) && !$.pointerValue<Framer>(f).AllowIllegalWrites) {
			return errStreamID
		}
		if (!validStreamIDOrZero(p.StreamDep)) {
			return errDepStreamID
		}
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).startWrite(2, 0, streamID) : Framer.prototype.startWrite.call(f, 2, 0, streamID))
		let v = p.StreamDep
		if (p.Exclusive) {
			v = v | (2147483648)
		}
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).writeUint32(v) : Framer.prototype.writeUint32.call(f, v))
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).writeByte(p.Weight) : Framer.prototype.writeByte.call(f, p.Weight))
		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).endWrite() : Framer.prototype.endWrite.call(f))
	}

	public async WritePushPromise(p: PushPromiseParam): globalThis.Promise<$.GoError> {
		let f: Framer | $.VarRef<Framer> | null = this;
		const f$: Framer = f == null ? $.pointerTarget<Framer>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<Framer>(f)
		if (!validStreamID(p.StreamID) && !(f$ as Framer).AllowIllegalWrites) {
			return errStreamID
		}
		let flags: Flags = 0
		if (p.PadLength != 0) {
			flags = flags | (8)
		}
		if (p.EndHeaders) {
			flags = flags | (4)
		}
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).startWrite(5, flags, p.StreamID) : Framer.prototype.startWrite.call(f, 5, flags, p.StreamID))
		if (p.PadLength != 0) {
			void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).writeByte(p.PadLength) : Framer.prototype.writeByte.call(f, p.PadLength))
		}
		if (!validStreamID(p.PromiseID) && !(f$ as Framer).AllowIllegalWrites) {
			return errStreamID
		}
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).writeUint32(p.PromiseID) : Framer.prototype.writeUint32.call(f, p.PromiseID));
		;(f$ as Framer).wbuf = $.appendSlice((f$ as Framer).wbuf, p.BlockFragment, $.byteSliceHint);
		;(f$ as Framer).wbuf = $.appendSlice((f$ as Framer).wbuf, $.goSlice(padZeros, undefined, p.PadLength), $.byteSliceHint)
		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).endWrite() : Framer.prototype.endWrite.call(f))
	}

	public async WriteRSTStream(streamID: number, code: __goscript_errors.ErrCode): globalThis.Promise<$.GoError> {
		const f: Framer | $.VarRef<Framer> | null = this;
		if (!validStreamID(streamID) && !$.pointerValue<Framer>(f).AllowIllegalWrites) {
			return errStreamID
		}
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).startWrite(3, 0, streamID) : Framer.prototype.startWrite.call(f, 3, 0, streamID))
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).writeUint32($.uint(code, 32)) : Framer.prototype.writeUint32.call(f, $.uint(code, 32)))
		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).endWrite() : Framer.prototype.endWrite.call(f))
	}

	public async WriteRawFrame(t: FrameType, flags: Flags, streamID: number, payload: $.Slice<number>): globalThis.Promise<$.GoError> {
		const f: Framer | $.VarRef<Framer> | null = this;
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).startWrite(t, flags, streamID) : Framer.prototype.startWrite.call(f, t, flags, streamID))
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).writeBytes(payload) : Framer.prototype.writeBytes.call(f, payload))
		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).endWrite() : Framer.prototype.endWrite.call(f))
	}

	public async WriteSettings(settings: $.Slice<__goscript_http2.Setting>): globalThis.Promise<$.GoError> {
		const f: Framer | $.VarRef<Framer> | null = this;
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).startWrite(4, 0, 0) : Framer.prototype.startWrite.call(f, 4, 0, 0))
		for (let __goscriptRangeTarget0 = settings, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let s = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_http2.Setting)).clone()
			void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).writeUint16($.uint(s.ID, 16)) : Framer.prototype.writeUint16.call(f, $.uint(s.ID, 16)))
			void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).writeUint32(s.Val) : Framer.prototype.writeUint32.call(f, s.Val))
		}
		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).endWrite() : Framer.prototype.endWrite.call(f))
	}

	public async WriteSettingsAck(): globalThis.Promise<$.GoError> {
		const f: Framer | $.VarRef<Framer> | null = this;
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).startWrite(4, 1, 0) : Framer.prototype.startWrite.call(f, 4, 1, 0))
		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).endWrite() : Framer.prototype.endWrite.call(f))
	}

	public async WriteWindowUpdate(streamID: number, incr: number): globalThis.Promise<$.GoError> {
		const f: Framer | $.VarRef<Framer> | null = this;
		// "The legal range for the increment to the flow control window is 1 to 2^31-1 (2,147,483,647) octets."
		if (((incr < 1) || (incr > 2147483647)) && !$.pointerValue<Framer>(f).AllowIllegalWrites) {
			return errors.New("illegal window increment value")
		}
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).startWrite(8, 0, streamID) : Framer.prototype.startWrite.call(f, 8, 0, streamID))
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).writeUint32(incr) : Framer.prototype.writeUint32.call(f, incr))
		return (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).endWrite() : Framer.prototype.endWrite.call(f))
	}

	public async checkFrameOrder(f: Frame | null): globalThis.Promise<$.GoError> {
		let fr: Framer | $.VarRef<Framer> | null = this;
		const fr$: Framer = fr == null ? $.pointerTarget<Framer>(fr) : (fr as any).__isVarRef === true ? (fr as any).value : (fr as any).__goValue === undefined ? (fr as any) : $.pointerTarget<Framer>(fr)
		let last = (fr$ as Framer).lastFrame;
		;(fr$ as Framer).lastFrame = f
		if ((fr$ as Framer).AllowIllegalReads) {
			return null
		}

		let fh = (((__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<Frame, null>) : $.pointerValue<Exclude<Frame, null>>(f)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as FrameHeader)).clone()
		if ((fr$ as Framer).lastHeaderStream != 0) {
			if (fh.Type != 9) {
				return Framer.prototype.connError.call(fr, 1, await fmt.Sprintf("got %s for stream %d; expected CONTINUATION following %s for stream %d", $.namedValueInterfaceValue<any>(fh.Type, "http2.FrameType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(fh.StreamID, "uint32"), $.namedValueInterfaceValue<any>(((__goscriptAwait = (last !== null && (last as any).__isVarRef !== true && (last as any).__goValue === undefined ? (last as Exclude<Frame, null>) : $.pointerValue<Exclude<Frame, null>>(last)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as FrameHeader).Type, "http2.FrameType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue((fr$ as Framer).lastHeaderStream, "uint32")))
			}
			if (fh.StreamID != (fr$ as Framer).lastHeaderStream) {
				return Framer.prototype.connError.call(fr, 1, await fmt.Sprintf("got CONTINUATION for stream %d; expected stream %d", $.basicInterfaceValue(fh.StreamID, "uint32"), $.basicInterfaceValue((fr$ as Framer).lastHeaderStream, "uint32")))
			}
		} else {
			if (fh.Type == 9) {
				return (fr !== null && (fr as any).__isVarRef !== true && (fr as any).__goValue === undefined ? ((fr as any) as Framer).connError(1, await fmt.Sprintf("unexpected CONTINUATION for stream %d", $.basicInterfaceValue(fh.StreamID, "uint32"))) : Framer.prototype.connError.call(fr, 1, await fmt.Sprintf("unexpected CONTINUATION for stream %d", $.basicInterfaceValue(fh.StreamID, "uint32"))))
			}
		}

		switch (fh.Type) {
			case 1:
			case 9:
			{
				if (Flags_Has(fh.Flags, 4)) {
					;(fr$ as Framer).lastHeaderStream = 0
				} else {
					;(fr$ as Framer).lastHeaderStream = fh.StreamID
				}
				break
			}
		}

		return null
	}

	public connError(code: __goscript_errors.ErrCode, reason: string): $.GoError {
		let fr: Framer | $.VarRef<Framer> | null = this;
		$.pointerValue<Framer>(fr).errDetail = errors.New(reason)
		return $.namedValueInterfaceValue<$.GoError>($.uint(code, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))
	}

	public async endWrite(): globalThis.Promise<$.GoError> {
		const f: Framer | $.VarRef<Framer> | null = this;
		const f$: Framer = f == null ? $.pointerTarget<Framer>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<Framer>(f)
		// Now that we know the final size, fill in the FrameHeader in
		// the space previously reserved for it. Abuse append.
		let length = $.sliceLen((f$ as Framer).wbuf) - 9
		if (length >= 16777216) {
			return ErrFrameTooLarge
		}
		$.append($.goSlice((f$ as Framer).wbuf, undefined, 0), $.uint($.uint(length >> 16, 8), 8), $.uint($.uint(length >> 8, 8), 8), $.uint($.uint(length, 8), 8), $.byteSliceHint)
		if ((f$ as Framer).logWrites) {
			await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).logWrite() : Framer.prototype.logWrite.call(f))
		}

		let [n, err] = await $.pointerValue<Exclude<io.Writer, null>>((f$ as Framer).w).Write((f$ as Framer).wbuf)
		if ((err == null) && (n != $.sliceLen((f$ as Framer).wbuf))) {
			err = io.ErrShortWrite
		}
		return err
	}

	public async logWrite(): globalThis.Promise<void> {
		let f: Framer | $.VarRef<Framer> | null = this;
		const f$: Framer = f == null ? $.pointerTarget<Framer>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<Framer>(f)
		if ((f$ as Framer).debugFramer == null) {
			;(f$ as Framer).debugFramerBuf = new bytes.Buffer();
			;(f$ as Framer).debugFramer = NewFramer(null, $.interfaceValue<io.Reader | null>((f$ as Framer).debugFramerBuf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))
			$.pointerValue<Framer>((f$ as Framer).debugFramer).logReads = false
			// Let us read anything, even if we accidentally wrote it
			// in the wrong order:
			$.pointerValue<Framer>((f$ as Framer).debugFramer).AllowIllegalReads = true
		}
		bytes.Buffer.prototype.Write.call($.pointerValue<bytes.Buffer>((f$ as Framer).debugFramerBuf), (f$ as Framer).wbuf)
		let [fr, err] = await Framer.prototype.ReadFrame.call((f$ as Framer).debugFramer)
		if (err != null) {
			void (__goscriptAwait = (f$ as Framer).debugWriteLoggerf!("http2: Framer %p: failed to decode just-written frame", $.arrayToSlice<any>([$.interfaceValue(f, "*http2.Framer", /* @__PURE__ */ $.pointerType("http2.Framer"))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		void (__goscriptAwait = (f$ as Framer).debugWriteLoggerf!("http2: Framer %p: wrote %v", $.arrayToSlice<any>([$.interfaceValue(f, "*http2.Framer", /* @__PURE__ */ $.pointerType("http2.Framer")), await summarizeFrame(fr)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public maxHeaderListSize(): number {
		const fr: Framer | $.VarRef<Framer> | null = this;
		const fr$: Framer = fr == null ? $.pointerTarget<Framer>(fr) : (fr as any).__isVarRef === true ? (fr as any).value : (fr as any).__goValue === undefined ? (fr as any) : $.pointerTarget<Framer>(fr)
		if ((fr$ as Framer).MaxHeaderListSize == 0) {
			return 16777216
		}
		return (fr$ as Framer).MaxHeaderListSize
	}

	public maxHeaderStringLen(): number {
		const fr: Framer | $.VarRef<Framer> | null = this;
		let v = $.int((fr !== null && (fr as any).__isVarRef !== true && (fr as any).__goValue === undefined ? ((fr as any) as Framer).maxHeaderListSize() : Framer.prototype.maxHeaderListSize.call(fr)))
		if (v < 0) {
			// If maxHeaderListSize overflows an int, use no limit (0).
			return 0
		}
		return v
	}

	public async readMetaFrame(hf: HeadersFrame | $.VarRef<HeadersFrame> | null): globalThis.Promise<[Frame | null, $.GoError]> {
		let fr: Framer | $.VarRef<Framer> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const fr$: Framer = fr == null ? $.pointerTarget<Framer>(fr) : (fr as any).__isVarRef === true ? (fr as any).value : (fr as any).__goValue === undefined ? (fr as any) : $.pointerTarget<Framer>(fr)
		if ((fr$ as Framer).AllowIllegalReads) {
			return [null, errors.New("illegal use of AllowIllegalReads with ReadMetaHeaders")]
		}
		let mh: MetaHeadersFrame | $.VarRef<MetaHeadersFrame> | null = new MetaHeadersFrame({HeadersFrame: hf})
		let mh$: MetaHeadersFrame = mh == null ? $.pointerTarget<MetaHeadersFrame>(mh) : (mh as any).__isVarRef === true ? (mh as any).value : (mh as any).__goValue === undefined ? (mh as any) : $.pointerTarget<MetaHeadersFrame>(mh)
		let remainSize: number = (fr !== null && (fr as any).__isVarRef !== true && (fr as any).__goValue === undefined ? ((fr as any) as Framer).maxHeaderListSize() : Framer.prototype.maxHeaderListSize.call(fr))
		let sawRegular: boolean = false

		let invalid: $.GoError = null! as $.GoError
		let hdec: hpack.Decoder | $.VarRef<hpack.Decoder> | null = (fr$ as Framer).ReadMetaHeaders
		void (hdec !== null && (hdec as any).__isVarRef !== true && (hdec as any).__goValue === undefined ? ((hdec as any) as hpack.Decoder).SetEmitEnabled(true) : hpack.Decoder.prototype.SetEmitEnabled.call(hdec, true))
		hpack.Decoder.prototype.SetMaxStringLength.call(hdec, (fr !== null && (fr as any).__isVarRef !== true && (fr as any).__goValue === undefined ? ((fr as any) as Framer).maxHeaderStringLen() : Framer.prototype.maxHeaderStringLen.call(fr)))
		await hpack.Decoder.prototype.SetEmitFunc.call(hdec, $.functionValue(async (hf: hpack.HeaderField): globalThis.Promise<void> => {
			if (__goscript_http2.VerboseLogs && (fr$ as Framer).logReads) {
				await (fr$ as Framer).debugReadLoggerf!("http2: decoded hpack field %+v", $.arrayToSlice<any>([$.interfaceValue((hf).clone(), "hpack.HeaderField", "hpack.HeaderField")]))
			}
			if (!httpguts.ValidHeaderFieldValue(hf.Value)) {
				// Don't include the value in the error, because it may be sensitive.
				invalid = $.namedValueInterfaceValue<$.GoError>(hf.Name, "http2.headerFieldValueError", {"Error": __goscript_errors.headerFieldValueError_Error}, /* @__PURE__ */ $.basicType("string", "http2.headerFieldValueError"))
			}
			let isPseudo = strings.HasPrefix(hf.Name, ":")
			if (isPseudo) {
				if (sawRegular) {
					invalid = __goscript_errors.errPseudoAfterRegular
				}
			} else {
				sawRegular = true
				if (!__goscript_http2.validWireHeaderFieldName(hf.Name)) {
					invalid = $.namedValueInterfaceValue<$.GoError>(hf.Name, "http2.headerFieldNameError", {"Error": __goscript_errors.headerFieldNameError_Error}, /* @__PURE__ */ $.basicType("string", "http2.headerFieldNameError"))
				}
			}

			if (invalid != null) {
				void (hdec !== null && (hdec as any).__isVarRef !== true && (hdec as any).__goValue === undefined ? ((hdec as any) as hpack.Decoder).SetEmitEnabled(false) : hpack.Decoder.prototype.SetEmitEnabled.call(hdec, false))
				return
			}

			let size = hf.Size()
			if (size > remainSize) {
				void (hdec !== null && (hdec as any).__isVarRef !== true && (hdec as any).__goValue === undefined ? ((hdec as any) as hpack.Decoder).SetEmitEnabled(false) : hpack.Decoder.prototype.SetEmitEnabled.call(hdec, false));
				;(mh$ as MetaHeadersFrame).Truncated = true
				remainSize = 0
				return
			}
			remainSize = $.uint(remainSize - (size), 32);

			;(mh$ as MetaHeadersFrame).Fields = $.appendOne((mh$ as MetaHeadersFrame).Fields, (hf).clone())
		}, ({ kind: $.TypeKind.Function, params: ["hpack.HeaderField"], results: [] } as $.FunctionTypeInfo)))
		// Lose reference to MetaHeadersFrame:
		const __goscriptDeferArg1 = $.functionValue((hf: hpack.HeaderField): void => {
		}, ({ kind: $.TypeKind.Function, params: ["hpack.HeaderField"], results: [] } as $.FunctionTypeInfo))
		__defer.defer(async () => { await (hdec !== null && (hdec as any).__isVarRef !== true && (hdec as any).__goValue === undefined ? ((hdec as any) as hpack.Decoder).SetEmitFunc(__goscriptDeferArg1) : hpack.Decoder.prototype.SetEmitFunc.call(hdec, __goscriptDeferArg1)) })

		let hc: headersOrContinuation | null = $.interfaceValue<headersOrContinuation | null>(hf, "*http2.HeadersFrame", /* @__PURE__ */ $.pointerType("http2.HeadersFrame"))
		while (true) {
			let frag: $.Slice<number> = ((__goscriptAwait = (hc !== null && (hc as any).__isVarRef !== true && (hc as any).__goValue === undefined ? (hc as Exclude<headersOrContinuation, null>) : $.pointerValue<Exclude<headersOrContinuation, null>>(hc)).HeaderBlockFragment(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)

			// Avoid parsing large amounts of headers that we will then discard.
			// If the sender exceeds the max header list size by too much,
			// skip parsing the fragment and close the connection.
			//
			// "Too much" is either any CONTINUATION frame after we've already
			// exceeded the max header list size (in which case remainSize is 0),
			// or a frame whose encoded size is more than twice the remaining
			// header list bytes we're willing to accept.
			if ($.int64($.sliceLen(frag)) > $.int64($.uint(globalThis.Math.imul(2, remainSize) >>> 0, 32))) {
				if (__goscript_http2.VerboseLogs) {
					await log.Printf("http2: header list too large", null)
				}
				// It would be nice to send a RST_STREAM before sending the GOAWAY,
				// but the structure of the server's frame writer makes this difficult.
				return [$.interfaceValue<Frame | null>(mh, "*http2.MetaHeadersFrame", /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")), $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
			}

			// Also close the connection after any CONTINUATION frame following an
			// invalid header, since we stop tracking the size of the headers after
			// an invalid one.
			if (invalid != null) {
				if (__goscript_http2.VerboseLogs) {
					await log.Printf("http2: invalid header: %v", $.arrayToSlice<any>([(invalid as any)]))
				}
				// It would be nice to send a RST_STREAM before sending the GOAWAY,
				// but the structure of the server's frame writer makes this difficult.
				return [$.interfaceValue<Frame | null>(mh, "*http2.MetaHeadersFrame", /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")), $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
			}

			{
				let [, err] = await (hdec !== null && (hdec as any).__isVarRef !== true && (hdec as any).__goValue === undefined ? ((hdec as any) as hpack.Decoder).Write(frag) : hpack.Decoder.prototype.Write.call(hdec, frag))
				if (err != null) {
					return [$.interfaceValue<Frame | null>(mh, "*http2.MetaHeadersFrame", /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")), $.namedValueInterfaceValue<$.GoError>($.uint(9, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
				}
			}

			if ((__goscriptAwait = (hc !== null && (hc as any).__isVarRef !== true && (hc as any).__goValue === undefined ? (hc as Exclude<headersOrContinuation, null>) : $.pointerValue<Exclude<headersOrContinuation, null>>(hc)).HeadersEnded(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				break
			}
			{
				let [f, err] = await (fr !== null && (fr as any).__isVarRef !== true && (fr as any).__goValue === undefined ? ((fr as any) as Framer).ReadFrame() : Framer.prototype.ReadFrame.call(fr))
				if (err != null) {
					return [null, err]
				} else {
					hc = $.interfaceValue<headersOrContinuation | null>(((f as any)?.__goType === "*http2.ContinuationFrame" && (f as any).__goValue === undefined && (f as any).__isTypedNil !== true ? ((f as any) as ContinuationFrame | $.VarRef<ContinuationFrame> | null) : $.mustTypeAssert<ContinuationFrame | $.VarRef<ContinuationFrame> | null>(f, /* @__PURE__ */ $.pointerType("http2.ContinuationFrame"))), "*http2.ContinuationFrame", /* @__PURE__ */ $.pointerType("http2.ContinuationFrame"))
				}
			}
		}

		$.pointerValue<HeadersFrame>((mh$ as MetaHeadersFrame).HeadersFrame).headerFragBuf = null
		$.pointerValue<HeadersFrame>((mh$ as MetaHeadersFrame).HeadersFrame).FrameHeader.invalidate()

		{
			let err = (hdec !== null && (hdec as any).__isVarRef !== true && (hdec as any).__goValue === undefined ? ((hdec as any) as hpack.Decoder).Close() : hpack.Decoder.prototype.Close.call(hdec))
			if (err != null) {
				return [$.interfaceValue<Frame | null>(mh, "*http2.MetaHeadersFrame", /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")), $.namedValueInterfaceValue<$.GoError>($.uint(9, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
			}
		}
		if (invalid != null) {
			;(fr$ as Framer).errDetail = invalid
			if (__goscript_http2.VerboseLogs) {
				await log.Printf("http2: invalid header: %v", $.arrayToSlice<any>([(invalid as any)]))
			}
			return [null, $.interfaceValue<$.GoError>(new __goscript_errors.StreamError({StreamID: $.pointerValue<HeadersFrame>((mh$ as MetaHeadersFrame).HeadersFrame).FrameHeader.StreamID, Code: 1, Cause: invalid}, true), "http2.StreamError", "http2.StreamError")]
		}
		{
			let err = (mh !== null && (mh as any).__isVarRef !== true && (mh as any).__goValue === undefined ? ((mh as any) as MetaHeadersFrame).checkPseudos() : MetaHeadersFrame.prototype.checkPseudos.call(mh))
			if (err != null) {
				;(fr$ as Framer).errDetail = err
				if (__goscript_http2.VerboseLogs) {
					await log.Printf("http2: invalid pseudo headers: %v", $.arrayToSlice<any>([(err as any)]))
				}
				return [null, $.interfaceValue<$.GoError>(new __goscript_errors.StreamError({StreamID: $.pointerValue<HeadersFrame>((mh$ as MetaHeadersFrame).HeadersFrame).FrameHeader.StreamID, Code: 1, Cause: err}, true), "http2.StreamError", "http2.StreamError")]
			}
		}
		return [$.interfaceValue<Frame | null>(mh, "*http2.MetaHeadersFrame", /* @__PURE__ */ $.pointerType("http2.MetaHeadersFrame")), null]
	}

	public startWrite(ftype: FrameType, flags: Flags, streamID: number): void {
		let f: Framer | $.VarRef<Framer> | null = this;
		const f$: Framer = f == null ? $.pointerTarget<Framer>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<Framer>(f);
		// Write the FrameHeader.
		;(f$ as Framer).wbuf = $.append($.goSlice((f$ as Framer).wbuf, undefined, 0), $.uint(0, 8), $.uint(0, 8), $.uint(0, 8), $.uint($.uint(ftype, 8), 8), $.uint($.uint(flags, 8), 8), $.uint($.uint($.uintShr(streamID, 24, 32), 8), 8), $.uint($.uint($.uintShr(streamID, 16, 32), 8), 8), $.uint($.uint($.uintShr(streamID, 8, 32), 8), 8), $.uint($.uint(streamID, 8), 8), $.byteSliceHint)
	}

	public startWriteDataPadded(streamID: number, endStream: boolean, data: $.Slice<number>, pad: $.Slice<number>): $.GoError {
		let f: Framer | $.VarRef<Framer> | null = this;
		const f$: Framer = f == null ? $.pointerTarget<Framer>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<Framer>(f)
		if (!validStreamID(streamID) && !(f$ as Framer).AllowIllegalWrites) {
			return errStreamID
		}
		if ($.sliceLen(pad) > 0) {
			if ($.sliceLen(pad) > 255) {
				return errPadLength
			}
			if (!(f$ as Framer).AllowIllegalWrites) {
				for (let __goscriptRangeTarget1 = pad, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
					let b = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number), 8)
					if (b != 0) {
						// "Padding octets MUST be set to zero when sending."
						return errPadBytes
					}
				}
			}
		}
		let flags: Flags = 0
		if (endStream) {
			flags = flags | (1)
		}
		if (pad != null) {
			flags = flags | (8)
		}
		void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as Framer).startWrite(0, flags, streamID) : Framer.prototype.startWrite.call(f, 0, flags, streamID))
		if (pad != null) {
			;(f$ as Framer).wbuf = $.append((f$ as Framer).wbuf, $.uint($.uint($.sliceLen(pad), 8), 8), $.byteSliceHint)
		}
		;(f$ as Framer).wbuf = $.appendSlice((f$ as Framer).wbuf, data, $.byteSliceHint);
		;(f$ as Framer).wbuf = $.appendSlice((f$ as Framer).wbuf, pad, $.byteSliceHint)
		return null
	}

	public writeByte(v: number): void {
		let f: Framer | $.VarRef<Framer> | null = this;
		const f$: Framer = f == null ? $.pointerTarget<Framer>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<Framer>(f);
		;(f$ as Framer).wbuf = $.append((f$ as Framer).wbuf, $.uint(v, 8), $.byteSliceHint)
	}

	public writeBytes(v: $.Slice<number>): void {
		let f: Framer | $.VarRef<Framer> | null = this;
		const f$: Framer = f == null ? $.pointerTarget<Framer>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<Framer>(f);
		;(f$ as Framer).wbuf = $.appendSlice((f$ as Framer).wbuf, v, $.byteSliceHint)
	}

	public writeUint16(v: number): void {
		let f: Framer | $.VarRef<Framer> | null = this;
		const f$: Framer = f == null ? $.pointerTarget<Framer>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<Framer>(f);
		;(f$ as Framer).wbuf = $.append((f$ as Framer).wbuf, $.uint($.uint($.uintShr(v, 8, 16), 8), 8), $.uint($.uint(v, 8), 8), $.byteSliceHint)
	}

	public writeUint32(v: number): void {
		let f: Framer | $.VarRef<Framer> | null = this;
		const f$: Framer = f == null ? $.pointerTarget<Framer>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<Framer>(f);
		;(f$ as Framer).wbuf = $.append((f$ as Framer).wbuf, $.uint($.uint($.uintShr(v, 24, 32), 8), 8), $.uint($.uint($.uintShr(v, 16, 32), 8), 8), $.uint($.uint($.uintShr(v, 8, 32), 8), 8), $.uint($.uint(v, 8), 8), $.byteSliceHint)
	}

	static __typeInfo = $.registerStructType(
		"http2.Framer",
		() => new Framer(),
		() => [$.methodSignature("ErrorDetail", [], ["error"], true), $.methodSignature("ReadFrame", [], ["http2.Frame", "error"], true), $.methodSignature("SetMaxReadFrameSize", [["v", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("SetReuseFrames", [], [], true), $.methodSignature("WriteContinuation", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["endHeaders", /* @__PURE__ */ $.basicType("bool")], ["headerBlockFragment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("WriteData", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["endStream", /* @__PURE__ */ $.basicType("bool")], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("WriteDataPadded", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["endStream", /* @__PURE__ */ $.basicType("bool")], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["pad", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("WriteGoAway", [["maxStreamID", /* @__PURE__ */ $.basicType("uint32")], ["code", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode")], ["debugData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("WriteHeaders", [["p", "http2.HeadersFrameParam"]], ["error"], true), $.methodSignature("WritePing", [["ack", /* @__PURE__ */ $.basicType("bool")], ["data", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)]], ["error"], true), $.methodSignature("WritePriority", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["p", "http2.PriorityParam"]], ["error"], true), $.methodSignature("WritePushPromise", [["p", "http2.PushPromiseParam"]], ["error"], true), $.methodSignature("WriteRSTStream", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["code", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode")]], ["error"], true), $.methodSignature("WriteRawFrame", [["t", /* @__PURE__ */ $.basicType("uint8", "http2.FrameType")], ["flags", /* @__PURE__ */ $.basicType("uint8", "http2.Flags")], ["streamID", /* @__PURE__ */ $.basicType("uint32")], ["payload", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("WriteSettings", [["settings", /* @__PURE__ */ $.sliceType("http2.Setting")]], ["error"], true), $.methodSignature("WriteSettingsAck", [], ["error"], true), $.methodSignature("WriteWindowUpdate", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["incr", /* @__PURE__ */ $.basicType("uint32")]], ["error"], true), $.methodSignature("checkFrameOrder", [["f", "http2.Frame"]], ["error"], true), $.methodSignature("connError", [["code", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode")], ["reason", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("endWrite", [], ["error"], true), $.methodSignature("logWrite", [], [], true), $.methodSignature("maxHeaderListSize", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("maxHeaderStringLen", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("readMetaFrame", [["hf", /* @__PURE__ */ $.pointerType("http2.HeadersFrame")]], ["http2.Frame", "error"], true), $.methodSignature("startWrite", [["ftype", /* @__PURE__ */ $.basicType("uint8", "http2.FrameType")], ["flags", /* @__PURE__ */ $.basicType("uint8", "http2.Flags")], ["streamID", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("startWriteDataPadded", [["streamID", /* @__PURE__ */ $.basicType("uint32")], ["endStream", /* @__PURE__ */ $.basicType("bool")], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["pad", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("writeByte", [["v", /* @__PURE__ */ $.basicType("uint8")]], [], true), $.methodSignature("writeBytes", [["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("writeUint16", [["v", /* @__PURE__ */ $.basicType("uint16")]], [], true), $.methodSignature("writeUint32", [["v", /* @__PURE__ */ $.basicType("uint32")]], [], true)],
		Framer,
		() => [/* @__PURE__ */ $.structField("r", "io.Reader", [0], 0, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("lastFrame", "http2.Frame", [1], 16, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("errDetail", "error", [2], 32, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("countError", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), [3], 48, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("lastHeaderStream", /* @__PURE__ */ $.basicType("uint32"), [4], 56, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("maxReadSize", /* @__PURE__ */ $.basicType("uint32"), [5], 60, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("headerBuf", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 9), [6], 64, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("getReadBuf", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint32")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo), [7], 80, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("readBuf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [8], 88, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("maxWriteSize", /* @__PURE__ */ $.basicType("uint32"), [9], 112, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("w", "io.Writer", [10], 120, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("wbuf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [11], 136, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("AllowIllegalWrites", /* @__PURE__ */ $.basicType("bool"), [12], 160, true), /* @__PURE__ */ $.structField("AllowIllegalReads", /* @__PURE__ */ $.basicType("bool"), [13], 161, true), /* @__PURE__ */ $.structField("ReadMetaHeaders", /* @__PURE__ */ $.pointerType("hpack.Decoder"), [14], 168, true), /* @__PURE__ */ $.structField("MaxHeaderListSize", /* @__PURE__ */ $.basicType("uint32"), [15], 176, true), /* @__PURE__ */ $.structField("logReads", /* @__PURE__ */ $.basicType("bool"), [16], 180, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("logWrites", /* @__PURE__ */ $.basicType("bool"), [17], 181, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("debugFramer", /* @__PURE__ */ $.pointerType("http2.Framer"), [18], 184, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("debugFramerBuf", /* @__PURE__ */ $.pointerType("bytes.Buffer"), [19], 192, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("debugReadLoggerf", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [], isVariadic: true } as $.FunctionTypeInfo), [20], 200, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("debugWriteLoggerf", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [], isVariadic: true } as $.FunctionTypeInfo), [21], 208, false, { pkgPath: "golang.org/x/net/http2" }), /* @__PURE__ */ $.structField("frameCache", /* @__PURE__ */ $.pointerType("http2.frameCache"), [22], 216, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class DataFrame {
	public get FrameHeader(): FrameHeader {
		return this._fields.FrameHeader
	}

	public set FrameHeader(value: FrameHeader) {
		this._fields.FrameHeader = value
	}

	public get data(): $.Slice<number> {
		return this._fields.data
	}

	public set data(value: $.Slice<number>) {
		this._fields.data = value
	}

	public _fields: {
		FrameHeader: FrameHeader
		data: $.Slice<number>
	}

	constructor(init?: Partial<{FrameHeader?: FrameHeader, data?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			FrameHeader: init?.FrameHeader ? init.FrameHeader.clone() : new FrameHeader(undefined, true),
			data: init?.data ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DataFrame {
		return new DataFrame(this, true)
	}

	public __goscriptAssign(source: DataFrame): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.FrameHeader, values.FrameHeader)
		target.data = values.data
	}

	public Data(): $.Slice<number> {
		const f: DataFrame | $.VarRef<DataFrame> | null = this;
		$.pointerValue<DataFrame>(f).FrameHeader.checkValid()
		return $.pointerValue<DataFrame>(f).data
	}

	public StreamEnded(): boolean {
		const f: DataFrame | $.VarRef<DataFrame> | null = this;
		return Flags_Has($.pointerValue<DataFrame>(f).FrameHeader.Flags, 1)
	}

	public Header(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).Header()
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).String()
	}

	public checkValid(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).checkValid()
	}

	public invalidate(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).invalidate()
	}

	public async writeDebug(buf: any): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).writeDebug(buf)
	}

	static __typeInfo = $.registerStructType(
		"http2.DataFrame",
		() => new DataFrame(),
		() => [$.methodSignature("Data", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("StreamEnded", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Header", [], ["http2.FrameHeader"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("checkValid", [], [], true), $.methodSignature("invalidate", [], [], true), $.methodSignature("writeDebug", [["buf", /* @__PURE__ */ $.pointerType("bytes.Buffer")]])],
		DataFrame,
		() => [/* @__PURE__ */ $.structField("FrameHeader", "http2.FrameHeader", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 16, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class frameCache {
	public get dataFrame(): DataFrame {
		return this._fields.dataFrame
	}

	public set dataFrame(value: DataFrame) {
		this._fields.dataFrame = value
	}

	public _fields: {
		dataFrame: DataFrame
	}

	constructor(init?: Partial<{dataFrame?: DataFrame}>, __goscriptValue?: boolean) {
		this._fields = {
			dataFrame: init?.dataFrame ? init.dataFrame.clone() : new DataFrame(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): frameCache {
		return new frameCache(this, true)
	}

	public __goscriptAssign(source: frameCache): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.dataFrame, values.dataFrame)
	}

	public getDataFrame(): DataFrame | $.VarRef<DataFrame> | null {
		const fc: frameCache | $.VarRef<frameCache> | null = this;
		if (fc == null) {
			return new DataFrame()
		}
		return $.fieldRef($.pointerValue<frameCache>(fc)._fields, "dataFrame")
	}

	static __typeInfo = $.registerStructType(
		"http2.frameCache",
		() => new frameCache(),
		() => [$.methodSignature("getDataFrame", [], [/* @__PURE__ */ $.pointerType("http2.DataFrame")], true)],
		frameCache,
		() => [/* @__PURE__ */ $.structField("dataFrame", "http2.DataFrame", [0], 0, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class SettingsFrame {
	public get FrameHeader(): FrameHeader {
		return this._fields.FrameHeader
	}

	public set FrameHeader(value: FrameHeader) {
		this._fields.FrameHeader = value
	}

	public get p(): $.Slice<number> {
		return this._fields.p
	}

	public set p(value: $.Slice<number>) {
		this._fields.p = value
	}

	public _fields: {
		FrameHeader: FrameHeader
		p: $.Slice<number>
	}

	constructor(init?: Partial<{FrameHeader?: FrameHeader, p?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			FrameHeader: init?.FrameHeader ? init.FrameHeader.clone() : new FrameHeader(undefined, true),
			p: init?.p ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SettingsFrame {
		return new SettingsFrame(this, true)
	}

	public __goscriptAssign(source: SettingsFrame): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.FrameHeader, values.FrameHeader)
		target.p = values.p
	}

	public async ForeachSetting(fn: ((_p0: __goscript_http2.Setting) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
		const f: SettingsFrame | $.VarRef<SettingsFrame> | null = this;
		$.pointerValue<SettingsFrame>(f).FrameHeader.checkValid()
		for (let i = 0; i < (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as SettingsFrame).NumSettings() : SettingsFrame.prototype.NumSettings.call(f)); i++) {
			{
				let err = (__goscriptAwait = fn!((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as SettingsFrame).Setting(i) : SettingsFrame.prototype.Setting.call(f, i))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	public HasDuplicates(): boolean {
		const f: SettingsFrame | $.VarRef<SettingsFrame> | null = this;
		let num = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as SettingsFrame).NumSettings() : SettingsFrame.prototype.NumSettings.call(f))
		if (num == 0) {
			return false
		}
		// If it's small enough (the common case), just do the n^2
		// thing and avoid a map allocation.
		if (num < 10) {
			for (let i = 0; i < num; i++) {
				let idi = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as SettingsFrame).Setting(i) : SettingsFrame.prototype.Setting.call(f, i)).ID
				for (let j = i + 1; j < num; j++) {
					let idj = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as SettingsFrame).Setting(j) : SettingsFrame.prototype.Setting.call(f, j)).ID
					if (idi == idj) {
						return true
					}
				}
			}
			return false
		}
		let seen: globalThis.Map<__goscript_http2.SettingID, boolean> | null = $.makeMap<__goscript_http2.SettingID, boolean>([])
		for (let i = 0; i < num; i++) {
			let id = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as SettingsFrame).Setting(i) : SettingsFrame.prototype.Setting.call(f, i)).ID
			if ($.mapGet<__goscript_http2.SettingID, boolean, boolean>(seen, id, false)[0]) {
				return true
			}
			$.mapSet(seen, id, true)
		}
		return false
	}

	public IsAck(): boolean {
		const f: SettingsFrame | $.VarRef<SettingsFrame> | null = this;
		return Flags_Has($.pointerValue<SettingsFrame>(f).FrameHeader.Flags, 1)
	}

	public NumSettings(): number {
		const f: SettingsFrame | $.VarRef<SettingsFrame> | null = this;
		return globalThis.Math.trunc($.sliceLen($.pointerValue<SettingsFrame>(f).p) / 6)
	}

	public Setting(i: number): __goscript_http2.Setting {
		const f: SettingsFrame | $.VarRef<SettingsFrame> | null = this;
		let buf: $.Slice<number> = $.pointerValue<SettingsFrame>(f).p
		return (() => { const __goscriptLiteralField1 = $.uint($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint16($.goSlice(buf, i * 6, (i * 6) + 2)), 16); const __goscriptLiteralField2 = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32($.goSlice(buf, (i * 6) + 2, (i * 6) + 6)); return new __goscript_http2.Setting({ID: __goscriptLiteralField1, Val: __goscriptLiteralField2}, true) })()
	}

	public Value(id: __goscript_http2.SettingID): [number, boolean] {
		const f: SettingsFrame | $.VarRef<SettingsFrame> | null = this;
		let v: number = 0
		let ok: boolean = false
		$.pointerValue<SettingsFrame>(f).FrameHeader.checkValid()
		for (let i = 0; i < (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as SettingsFrame).NumSettings() : SettingsFrame.prototype.NumSettings.call(f)); i++) {
			{
				let s = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as SettingsFrame).Setting(i) : SettingsFrame.prototype.Setting.call(f, i))
				if (s.ID == id) {
					return [s.Val, true]
				}
			}
		}
		return [0, false]
	}

	public Header(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).Header()
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).String()
	}

	public checkValid(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).checkValid()
	}

	public invalidate(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).invalidate()
	}

	public async writeDebug(buf: any): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).writeDebug(buf)
	}

	static __typeInfo = $.registerStructType(
		"http2.SettingsFrame",
		() => new SettingsFrame(),
		() => [$.methodSignature("ForeachSetting", [["fn", ({ kind: $.TypeKind.Function, params: ["http2.Setting"], results: ["error"] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("HasDuplicates", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsAck", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NumSettings", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Setting", [["i", /* @__PURE__ */ $.basicType("int")]], ["http2.Setting"], true), $.methodSignature("Value", [["id", /* @__PURE__ */ $.basicType("uint16", "http2.SettingID")]], [["v", /* @__PURE__ */ $.basicType("uint32")], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Header", [], ["http2.FrameHeader"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("checkValid", [], [], true), $.methodSignature("invalidate", [], [], true), $.methodSignature("writeDebug", [["buf", /* @__PURE__ */ $.pointerType("bytes.Buffer")]])],
		SettingsFrame,
		() => [/* @__PURE__ */ $.structField("FrameHeader", "http2.FrameHeader", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 16, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class PingFrame {
	public get FrameHeader(): FrameHeader {
		return this._fields.FrameHeader
	}

	public set FrameHeader(value: FrameHeader) {
		this._fields.FrameHeader = value
	}

	public get Data(): Uint8Array {
		return this._fields.Data
	}

	public set Data(value: Uint8Array) {
		this._fields.Data = value
	}

	public _fields: {
		FrameHeader: FrameHeader
		Data: Uint8Array
	}

	constructor(init?: Partial<{FrameHeader?: FrameHeader, Data?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			FrameHeader: init?.FrameHeader ? init.FrameHeader.clone() : new FrameHeader(undefined, true),
			Data: init?.Data !== undefined ? $.cloneArrayValue(init.Data, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8)) : $.arrayValue(new Uint8Array(8))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PingFrame {
		return new PingFrame(this, true)
	}

	public __goscriptAssign(source: PingFrame): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.FrameHeader, values.FrameHeader)
		target.Data = $.assignFieldValue(target.Data, values.Data, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8))
	}

	public IsAck(): boolean {
		const f: PingFrame | $.VarRef<PingFrame> | null = this;
		return Flags_Has($.pointerValue<PingFrame>(f).FrameHeader.Flags, 1)
	}

	public Header(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).Header()
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).String()
	}

	public checkValid(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).checkValid()
	}

	public invalidate(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).invalidate()
	}

	public async writeDebug(buf: any): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).writeDebug(buf)
	}

	static __typeInfo = $.registerStructType(
		"http2.PingFrame",
		() => new PingFrame(),
		() => [$.methodSignature("IsAck", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Header", [], ["http2.FrameHeader"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("checkValid", [], [], true), $.methodSignature("invalidate", [], [], true), $.methodSignature("writeDebug", [["buf", /* @__PURE__ */ $.pointerType("bytes.Buffer")]])],
		PingFrame,
		() => [/* @__PURE__ */ $.structField("FrameHeader", "http2.FrameHeader", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Data", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 8), [1], 12, true)]
	)
}

export class GoAwayFrame {
	public get FrameHeader(): FrameHeader {
		return this._fields.FrameHeader
	}

	public set FrameHeader(value: FrameHeader) {
		this._fields.FrameHeader = value
	}

	public get LastStreamID(): number {
		return this._fields.LastStreamID
	}

	public set LastStreamID(value: number) {
		this._fields.LastStreamID = value
	}

	public get ErrCode(): __goscript_errors.ErrCode {
		return this._fields.ErrCode
	}

	public set ErrCode(value: __goscript_errors.ErrCode) {
		this._fields.ErrCode = value
	}

	public get debugData(): $.Slice<number> {
		return this._fields.debugData
	}

	public set debugData(value: $.Slice<number>) {
		this._fields.debugData = value
	}

	public _fields: {
		FrameHeader: FrameHeader
		LastStreamID: number
		ErrCode: __goscript_errors.ErrCode
		debugData: $.Slice<number>
	}

	constructor(init?: Partial<{FrameHeader?: FrameHeader, LastStreamID?: number, ErrCode?: __goscript_errors.ErrCode, debugData?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			FrameHeader: init?.FrameHeader ? init.FrameHeader.clone() : new FrameHeader(undefined, true),
			LastStreamID: init?.LastStreamID ?? (0 as number),
			ErrCode: init?.ErrCode ?? (0 as __goscript_errors.ErrCode),
			debugData: init?.debugData ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GoAwayFrame {
		return new GoAwayFrame(this, true)
	}

	public __goscriptAssign(source: GoAwayFrame): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.FrameHeader, values.FrameHeader)
		target.LastStreamID = values.LastStreamID
		target.ErrCode = values.ErrCode
		target.debugData = values.debugData
	}

	public DebugData(): $.Slice<number> {
		const f: GoAwayFrame | $.VarRef<GoAwayFrame> | null = this;
		$.pointerValue<GoAwayFrame>(f).FrameHeader.checkValid()
		return $.pointerValue<GoAwayFrame>(f).debugData
	}

	public Header(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).Header()
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).String()
	}

	public checkValid(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).checkValid()
	}

	public invalidate(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).invalidate()
	}

	public async writeDebug(buf: any): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).writeDebug(buf)
	}

	static __typeInfo = $.registerStructType(
		"http2.GoAwayFrame",
		() => new GoAwayFrame(),
		() => [$.methodSignature("DebugData", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Header", [], ["http2.FrameHeader"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("checkValid", [], [], true), $.methodSignature("invalidate", [], [], true), $.methodSignature("writeDebug", [["buf", /* @__PURE__ */ $.pointerType("bytes.Buffer")]])],
		GoAwayFrame,
		() => [/* @__PURE__ */ $.structField("FrameHeader", "http2.FrameHeader", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("LastStreamID", /* @__PURE__ */ $.basicType("uint32"), [1], 12, true), /* @__PURE__ */ $.structField("ErrCode", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode"), [2], 16, true), /* @__PURE__ */ $.structField("debugData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 24, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class UnknownFrame {
	public get FrameHeader(): FrameHeader {
		return this._fields.FrameHeader
	}

	public set FrameHeader(value: FrameHeader) {
		this._fields.FrameHeader = value
	}

	public get p(): $.Slice<number> {
		return this._fields.p
	}

	public set p(value: $.Slice<number>) {
		this._fields.p = value
	}

	public _fields: {
		FrameHeader: FrameHeader
		p: $.Slice<number>
	}

	constructor(init?: Partial<{FrameHeader?: FrameHeader, p?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			FrameHeader: init?.FrameHeader ? init.FrameHeader.clone() : new FrameHeader(undefined, true),
			p: init?.p ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UnknownFrame {
		return new UnknownFrame(this, true)
	}

	public __goscriptAssign(source: UnknownFrame): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.FrameHeader, values.FrameHeader)
		target.p = values.p
	}

	public Payload(): $.Slice<number> {
		const f: UnknownFrame | $.VarRef<UnknownFrame> | null = this;
		$.pointerValue<UnknownFrame>(f).FrameHeader.checkValid()
		return $.pointerValue<UnknownFrame>(f).p
	}

	public Header(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).Header()
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).String()
	}

	public checkValid(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).checkValid()
	}

	public invalidate(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).invalidate()
	}

	public async writeDebug(buf: any): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).writeDebug(buf)
	}

	static __typeInfo = $.registerStructType(
		"http2.UnknownFrame",
		() => new UnknownFrame(),
		() => [$.methodSignature("Payload", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Header", [], ["http2.FrameHeader"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("checkValid", [], [], true), $.methodSignature("invalidate", [], [], true), $.methodSignature("writeDebug", [["buf", /* @__PURE__ */ $.pointerType("bytes.Buffer")]])],
		UnknownFrame,
		() => [/* @__PURE__ */ $.structField("FrameHeader", "http2.FrameHeader", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 16, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class WindowUpdateFrame {
	public get FrameHeader(): FrameHeader {
		return this._fields.FrameHeader
	}

	public set FrameHeader(value: FrameHeader) {
		this._fields.FrameHeader = value
	}

	public get Increment(): number {
		return this._fields.Increment
	}

	public set Increment(value: number) {
		this._fields.Increment = value
	}

	public _fields: {
		FrameHeader: FrameHeader
		Increment: number
	}

	constructor(init?: Partial<{FrameHeader?: FrameHeader, Increment?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			FrameHeader: init?.FrameHeader ? init.FrameHeader.clone() : new FrameHeader(undefined, true),
			Increment: init?.Increment ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WindowUpdateFrame {
		return new WindowUpdateFrame(this, true)
	}

	public __goscriptAssign(source: WindowUpdateFrame): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.FrameHeader, values.FrameHeader)
		target.Increment = values.Increment
	}

	public Header(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).Header()
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).String()
	}

	public checkValid(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).checkValid()
	}

	public invalidate(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).invalidate()
	}

	public async writeDebug(buf: any): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).writeDebug(buf)
	}

	static __typeInfo = $.registerStructType(
		"http2.WindowUpdateFrame",
		() => new WindowUpdateFrame(),
		() => [$.methodSignature("Header", [], ["http2.FrameHeader"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("checkValid", [], [], true), $.methodSignature("invalidate", [], [], true), $.methodSignature("writeDebug", [["buf", /* @__PURE__ */ $.pointerType("bytes.Buffer")]])],
		WindowUpdateFrame,
		() => [/* @__PURE__ */ $.structField("FrameHeader", "http2.FrameHeader", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Increment", /* @__PURE__ */ $.basicType("uint32"), [1], 12, true)]
	)
}

export class PriorityParam {
	// StreamDep is a 31-bit stream identifier for the
	// stream that this stream depends on. Zero means no
	// dependency.
	public get StreamDep(): number {
		return this._fields.StreamDep
	}

	public set StreamDep(value: number) {
		this._fields.StreamDep = value
	}

	// Exclusive is whether the dependency is exclusive.
	public get Exclusive(): boolean {
		return this._fields.Exclusive
	}

	public set Exclusive(value: boolean) {
		this._fields.Exclusive = value
	}

	// Weight is the stream's zero-indexed weight. It should be
	// set together with StreamDep, or neither should be set. Per
	// the spec, "Add one to the value to obtain a weight between
	// 1 and 256."
	public get Weight(): number {
		return this._fields.Weight
	}

	public set Weight(value: number) {
		this._fields.Weight = value
	}

	public _fields: {
		StreamDep: number
		Exclusive: boolean
		Weight: number
	}

	constructor(init?: Partial<{StreamDep?: number, Exclusive?: boolean, Weight?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			StreamDep: init?.StreamDep ?? (0 as number),
			Exclusive: init?.Exclusive ?? (false as boolean),
			Weight: init?.Weight ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PriorityParam {
		return new PriorityParam(this, true)
	}

	public __goscriptAssign(source: PriorityParam): void {
		const target = this._fields
		const values = source._fields
		target.StreamDep = values.StreamDep
		target.Exclusive = values.Exclusive
		target.Weight = values.Weight
	}

	public IsZero(): boolean {
		const p = this;
		return $.structEqual(p, new PriorityParam(undefined, true))
	}

	static __typeInfo = $.registerStructType(
		"http2.PriorityParam",
		() => new PriorityParam(),
		() => [$.methodSignature("IsZero", [], [/* @__PURE__ */ $.basicType("bool")])],
		PriorityParam,
		() => [/* @__PURE__ */ $.structField("StreamDep", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true), /* @__PURE__ */ $.structField("Exclusive", /* @__PURE__ */ $.basicType("bool"), [1], 4, true), /* @__PURE__ */ $.structField("Weight", /* @__PURE__ */ $.basicType("uint8"), [2], 5, true)]
	)
}

export class HeadersFrame {
	public get FrameHeader(): FrameHeader {
		return this._fields.FrameHeader
	}

	public set FrameHeader(value: FrameHeader) {
		this._fields.FrameHeader = value
	}

	// Priority is set if FlagHeadersPriority is set in the FrameHeader.
	public get Priority(): PriorityParam {
		return this._fields.Priority
	}

	public set Priority(value: PriorityParam) {
		this._fields.Priority = value
	}

	public get headerFragBuf(): $.Slice<number> {
		return this._fields.headerFragBuf
	}

	public set headerFragBuf(value: $.Slice<number>) {
		this._fields.headerFragBuf = value
	}

	public _fields: {
		FrameHeader: FrameHeader
		Priority: PriorityParam
		headerFragBuf: $.Slice<number>
	}

	constructor(init?: Partial<{FrameHeader?: FrameHeader, Priority?: PriorityParam, headerFragBuf?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			FrameHeader: init?.FrameHeader ? init.FrameHeader.clone() : new FrameHeader(undefined, true),
			Priority: init?.Priority ? init.Priority.clone() : new PriorityParam(undefined, true),
			headerFragBuf: init?.headerFragBuf ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HeadersFrame {
		return new HeadersFrame(this, true)
	}

	public __goscriptAssign(source: HeadersFrame): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.FrameHeader, values.FrameHeader)
		$.assignStruct(target.Priority, values.Priority)
		target.headerFragBuf = values.headerFragBuf
	}

	public HasPriority(): boolean {
		const f: HeadersFrame | $.VarRef<HeadersFrame> | null = this;
		return Flags_Has($.pointerValue<HeadersFrame>(f).FrameHeader.Flags, 32)
	}

	public HeaderBlockFragment(): $.Slice<number> {
		const f: HeadersFrame | $.VarRef<HeadersFrame> | null = this;
		$.pointerValue<HeadersFrame>(f).FrameHeader.checkValid()
		return $.pointerValue<HeadersFrame>(f).headerFragBuf
	}

	public HeadersEnded(): boolean {
		const f: HeadersFrame | $.VarRef<HeadersFrame> | null = this;
		return Flags_Has($.pointerValue<HeadersFrame>(f).FrameHeader.Flags, 4)
	}

	public StreamEnded(): boolean {
		const f: HeadersFrame | $.VarRef<HeadersFrame> | null = this;
		return Flags_Has($.pointerValue<HeadersFrame>(f).FrameHeader.Flags, 1)
	}

	public Header(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).Header()
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).String()
	}

	public checkValid(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).checkValid()
	}

	public invalidate(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).invalidate()
	}

	public async writeDebug(buf: any): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).writeDebug(buf)
	}

	static __typeInfo = $.registerStructType(
		"http2.HeadersFrame",
		() => new HeadersFrame(),
		() => [$.methodSignature("HasPriority", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HeaderBlockFragment", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("HeadersEnded", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("StreamEnded", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Header", [], ["http2.FrameHeader"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("checkValid", [], [], true), $.methodSignature("invalidate", [], [], true), $.methodSignature("writeDebug", [["buf", /* @__PURE__ */ $.pointerType("bytes.Buffer")]])],
		HeadersFrame,
		() => [/* @__PURE__ */ $.structField("FrameHeader", "http2.FrameHeader", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Priority", "http2.PriorityParam", [1], 12, true), /* @__PURE__ */ $.structField("headerFragBuf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 24, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class HeadersFrameParam {
	// StreamID is the required Stream ID to initiate.
	public get StreamID(): number {
		return this._fields.StreamID
	}

	public set StreamID(value: number) {
		this._fields.StreamID = value
	}

	// BlockFragment is part (or all) of a Header Block.
	public get BlockFragment(): $.Slice<number> {
		return this._fields.BlockFragment
	}

	public set BlockFragment(value: $.Slice<number>) {
		this._fields.BlockFragment = value
	}

	// EndStream indicates that the header block is the last that
	// the endpoint will send for the identified stream. Setting
	// this flag causes the stream to enter one of "half closed"
	// states.
	public get EndStream(): boolean {
		return this._fields.EndStream
	}

	public set EndStream(value: boolean) {
		this._fields.EndStream = value
	}

	// EndHeaders indicates that this frame contains an entire
	// header block and is not followed by any
	// CONTINUATION frames.
	public get EndHeaders(): boolean {
		return this._fields.EndHeaders
	}

	public set EndHeaders(value: boolean) {
		this._fields.EndHeaders = value
	}

	// PadLength is the optional number of bytes of zeros to add
	// to this frame.
	public get PadLength(): number {
		return this._fields.PadLength
	}

	public set PadLength(value: number) {
		this._fields.PadLength = value
	}

	// Priority, if non-zero, includes stream priority information
	// in the HEADER frame.
	public get Priority(): PriorityParam {
		return this._fields.Priority
	}

	public set Priority(value: PriorityParam) {
		this._fields.Priority = value
	}

	public _fields: {
		StreamID: number
		BlockFragment: $.Slice<number>
		EndStream: boolean
		EndHeaders: boolean
		PadLength: number
		Priority: PriorityParam
	}

	constructor(init?: Partial<{StreamID?: number, BlockFragment?: $.Slice<number>, EndStream?: boolean, EndHeaders?: boolean, PadLength?: number, Priority?: PriorityParam}>, __goscriptValue?: boolean) {
		this._fields = {
			StreamID: init?.StreamID ?? (0 as number),
			BlockFragment: init?.BlockFragment ?? (null! as $.Slice<number>),
			EndStream: init?.EndStream ?? (false as boolean),
			EndHeaders: init?.EndHeaders ?? (false as boolean),
			PadLength: init?.PadLength ?? (0 as number),
			Priority: init?.Priority ? init.Priority.clone() : new PriorityParam(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HeadersFrameParam {
		return new HeadersFrameParam(this, true)
	}

	public __goscriptAssign(source: HeadersFrameParam): void {
		const target = this._fields
		const values = source._fields
		target.StreamID = values.StreamID
		target.BlockFragment = values.BlockFragment
		target.EndStream = values.EndStream
		target.EndHeaders = values.EndHeaders
		target.PadLength = values.PadLength
		$.assignStruct(target.Priority, values.Priority)
	}

	static __typeInfo = $.registerStructType(
		"http2.HeadersFrameParam",
		() => new HeadersFrameParam(),
		() => [],
		HeadersFrameParam,
		() => [/* @__PURE__ */ $.structField("StreamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true), /* @__PURE__ */ $.structField("BlockFragment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, true), /* @__PURE__ */ $.structField("EndStream", /* @__PURE__ */ $.basicType("bool"), [2], 32, true), /* @__PURE__ */ $.structField("EndHeaders", /* @__PURE__ */ $.basicType("bool"), [3], 33, true), /* @__PURE__ */ $.structField("PadLength", /* @__PURE__ */ $.basicType("uint8"), [4], 34, true), /* @__PURE__ */ $.structField("Priority", "http2.PriorityParam", [5], 36, true)]
	)
}

export class PriorityFrame {
	public get FrameHeader(): FrameHeader {
		return this._fields.FrameHeader
	}

	public set FrameHeader(value: FrameHeader) {
		this._fields.FrameHeader = value
	}

	public get PriorityParam(): PriorityParam {
		return this._fields.PriorityParam
	}

	public set PriorityParam(value: PriorityParam) {
		this._fields.PriorityParam = value
	}

	public _fields: {
		FrameHeader: FrameHeader
		PriorityParam: PriorityParam
	}

	constructor(init?: Partial<{FrameHeader?: FrameHeader, PriorityParam?: PriorityParam}>, __goscriptValue?: boolean) {
		this._fields = {
			FrameHeader: init?.FrameHeader ? init.FrameHeader.clone() : new FrameHeader(undefined, true),
			PriorityParam: init?.PriorityParam ? init.PriorityParam.clone() : new PriorityParam(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PriorityFrame {
		return new PriorityFrame(this, true)
	}

	public __goscriptAssign(source: PriorityFrame): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.FrameHeader, values.FrameHeader)
		$.assignStruct(target.PriorityParam, values.PriorityParam)
	}

	public Header(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).Header()
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).String()
	}

	public checkValid(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).checkValid()
	}

	public invalidate(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).invalidate()
	}

	public async writeDebug(buf: any): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).writeDebug(buf)
	}

	public IsZero(): any {
		return $.pointerValue<PriorityParam>(this.PriorityParam).IsZero()
	}

	static __typeInfo = $.registerStructType(
		"http2.PriorityFrame",
		() => new PriorityFrame(),
		() => [$.methodSignature("Header", [], ["http2.FrameHeader"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("checkValid", [], [], true), $.methodSignature("invalidate", [], [], true), $.methodSignature("writeDebug", [["buf", /* @__PURE__ */ $.pointerType("bytes.Buffer")]]), $.methodSignature("IsZero", [], [/* @__PURE__ */ $.basicType("bool")])],
		PriorityFrame,
		() => [/* @__PURE__ */ $.structField("FrameHeader", "http2.FrameHeader", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("PriorityParam", "http2.PriorityParam", [1], 12, true, { anonymous: true })]
	)
}

export class RSTStreamFrame {
	public get FrameHeader(): FrameHeader {
		return this._fields.FrameHeader
	}

	public set FrameHeader(value: FrameHeader) {
		this._fields.FrameHeader = value
	}

	public get ErrCode(): __goscript_errors.ErrCode {
		return this._fields.ErrCode
	}

	public set ErrCode(value: __goscript_errors.ErrCode) {
		this._fields.ErrCode = value
	}

	public _fields: {
		FrameHeader: FrameHeader
		ErrCode: __goscript_errors.ErrCode
	}

	constructor(init?: Partial<{FrameHeader?: FrameHeader, ErrCode?: __goscript_errors.ErrCode}>, __goscriptValue?: boolean) {
		this._fields = {
			FrameHeader: init?.FrameHeader ? init.FrameHeader.clone() : new FrameHeader(undefined, true),
			ErrCode: init?.ErrCode ?? (0 as __goscript_errors.ErrCode)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RSTStreamFrame {
		return new RSTStreamFrame(this, true)
	}

	public __goscriptAssign(source: RSTStreamFrame): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.FrameHeader, values.FrameHeader)
		target.ErrCode = values.ErrCode
	}

	public Header(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).Header()
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).String()
	}

	public checkValid(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).checkValid()
	}

	public invalidate(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).invalidate()
	}

	public async writeDebug(buf: any): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).writeDebug(buf)
	}

	static __typeInfo = $.registerStructType(
		"http2.RSTStreamFrame",
		() => new RSTStreamFrame(),
		() => [$.methodSignature("Header", [], ["http2.FrameHeader"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("checkValid", [], [], true), $.methodSignature("invalidate", [], [], true), $.methodSignature("writeDebug", [["buf", /* @__PURE__ */ $.pointerType("bytes.Buffer")]])],
		RSTStreamFrame,
		() => [/* @__PURE__ */ $.structField("FrameHeader", "http2.FrameHeader", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("ErrCode", /* @__PURE__ */ $.basicType("uint32", "http2.ErrCode"), [1], 12, true)]
	)
}

export class ContinuationFrame {
	public get FrameHeader(): FrameHeader {
		return this._fields.FrameHeader
	}

	public set FrameHeader(value: FrameHeader) {
		this._fields.FrameHeader = value
	}

	public get headerFragBuf(): $.Slice<number> {
		return this._fields.headerFragBuf
	}

	public set headerFragBuf(value: $.Slice<number>) {
		this._fields.headerFragBuf = value
	}

	public _fields: {
		FrameHeader: FrameHeader
		headerFragBuf: $.Slice<number>
	}

	constructor(init?: Partial<{FrameHeader?: FrameHeader, headerFragBuf?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			FrameHeader: init?.FrameHeader ? init.FrameHeader.clone() : new FrameHeader(undefined, true),
			headerFragBuf: init?.headerFragBuf ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ContinuationFrame {
		return new ContinuationFrame(this, true)
	}

	public __goscriptAssign(source: ContinuationFrame): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.FrameHeader, values.FrameHeader)
		target.headerFragBuf = values.headerFragBuf
	}

	public HeaderBlockFragment(): $.Slice<number> {
		const f: ContinuationFrame | $.VarRef<ContinuationFrame> | null = this;
		$.pointerValue<ContinuationFrame>(f).FrameHeader.checkValid()
		return $.pointerValue<ContinuationFrame>(f).headerFragBuf
	}

	public HeadersEnded(): boolean {
		const f: ContinuationFrame | $.VarRef<ContinuationFrame> | null = this;
		return Flags_Has($.pointerValue<ContinuationFrame>(f).FrameHeader.Flags, 4)
	}

	public Header(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).Header()
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).String()
	}

	public checkValid(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).checkValid()
	}

	public invalidate(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).invalidate()
	}

	public async writeDebug(buf: any): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).writeDebug(buf)
	}

	static __typeInfo = $.registerStructType(
		"http2.ContinuationFrame",
		() => new ContinuationFrame(),
		() => [$.methodSignature("HeaderBlockFragment", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("HeadersEnded", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Header", [], ["http2.FrameHeader"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("checkValid", [], [], true), $.methodSignature("invalidate", [], [], true), $.methodSignature("writeDebug", [["buf", /* @__PURE__ */ $.pointerType("bytes.Buffer")]])],
		ContinuationFrame,
		() => [/* @__PURE__ */ $.structField("FrameHeader", "http2.FrameHeader", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("headerFragBuf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 16, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class PushPromiseFrame {
	public get FrameHeader(): FrameHeader {
		return this._fields.FrameHeader
	}

	public set FrameHeader(value: FrameHeader) {
		this._fields.FrameHeader = value
	}

	public get PromiseID(): number {
		return this._fields.PromiseID
	}

	public set PromiseID(value: number) {
		this._fields.PromiseID = value
	}

	public get headerFragBuf(): $.Slice<number> {
		return this._fields.headerFragBuf
	}

	public set headerFragBuf(value: $.Slice<number>) {
		this._fields.headerFragBuf = value
	}

	public _fields: {
		FrameHeader: FrameHeader
		PromiseID: number
		headerFragBuf: $.Slice<number>
	}

	constructor(init?: Partial<{FrameHeader?: FrameHeader, PromiseID?: number, headerFragBuf?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			FrameHeader: init?.FrameHeader ? init.FrameHeader.clone() : new FrameHeader(undefined, true),
			PromiseID: init?.PromiseID ?? (0 as number),
			headerFragBuf: init?.headerFragBuf ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PushPromiseFrame {
		return new PushPromiseFrame(this, true)
	}

	public __goscriptAssign(source: PushPromiseFrame): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.FrameHeader, values.FrameHeader)
		target.PromiseID = values.PromiseID
		target.headerFragBuf = values.headerFragBuf
	}

	public HeaderBlockFragment(): $.Slice<number> {
		const f: PushPromiseFrame | $.VarRef<PushPromiseFrame> | null = this;
		$.pointerValue<PushPromiseFrame>(f).FrameHeader.checkValid()
		return $.pointerValue<PushPromiseFrame>(f).headerFragBuf
	}

	public HeadersEnded(): boolean {
		const f: PushPromiseFrame | $.VarRef<PushPromiseFrame> | null = this;
		return Flags_Has($.pointerValue<PushPromiseFrame>(f).FrameHeader.Flags, 4)
	}

	public Header(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).Header()
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).String()
	}

	public checkValid(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).checkValid()
	}

	public invalidate(): any {
		return $.pointerValue<FrameHeader>(this.FrameHeader).invalidate()
	}

	public async writeDebug(buf: any): globalThis.Promise<any> {
		return await $.pointerValue<FrameHeader>(this.FrameHeader).writeDebug(buf)
	}

	static __typeInfo = $.registerStructType(
		"http2.PushPromiseFrame",
		() => new PushPromiseFrame(),
		() => [$.methodSignature("HeaderBlockFragment", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("HeadersEnded", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Header", [], ["http2.FrameHeader"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("checkValid", [], [], true), $.methodSignature("invalidate", [], [], true), $.methodSignature("writeDebug", [["buf", /* @__PURE__ */ $.pointerType("bytes.Buffer")]])],
		PushPromiseFrame,
		() => [/* @__PURE__ */ $.structField("FrameHeader", "http2.FrameHeader", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("PromiseID", /* @__PURE__ */ $.basicType("uint32"), [1], 12, true), /* @__PURE__ */ $.structField("headerFragBuf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, false, { pkgPath: "golang.org/x/net/http2" })]
	)
}

export class PushPromiseParam {
	// StreamID is the required Stream ID to initiate.
	public get StreamID(): number {
		return this._fields.StreamID
	}

	public set StreamID(value: number) {
		this._fields.StreamID = value
	}

	// PromiseID is the required Stream ID which this
	// Push Promises
	public get PromiseID(): number {
		return this._fields.PromiseID
	}

	public set PromiseID(value: number) {
		this._fields.PromiseID = value
	}

	// BlockFragment is part (or all) of a Header Block.
	public get BlockFragment(): $.Slice<number> {
		return this._fields.BlockFragment
	}

	public set BlockFragment(value: $.Slice<number>) {
		this._fields.BlockFragment = value
	}

	// EndHeaders indicates that this frame contains an entire
	// header block and is not followed by any
	// CONTINUATION frames.
	public get EndHeaders(): boolean {
		return this._fields.EndHeaders
	}

	public set EndHeaders(value: boolean) {
		this._fields.EndHeaders = value
	}

	// PadLength is the optional number of bytes of zeros to add
	// to this frame.
	public get PadLength(): number {
		return this._fields.PadLength
	}

	public set PadLength(value: number) {
		this._fields.PadLength = value
	}

	public _fields: {
		StreamID: number
		PromiseID: number
		BlockFragment: $.Slice<number>
		EndHeaders: boolean
		PadLength: number
	}

	constructor(init?: Partial<{StreamID?: number, PromiseID?: number, BlockFragment?: $.Slice<number>, EndHeaders?: boolean, PadLength?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			StreamID: init?.StreamID ?? (0 as number),
			PromiseID: init?.PromiseID ?? (0 as number),
			BlockFragment: init?.BlockFragment ?? (null! as $.Slice<number>),
			EndHeaders: init?.EndHeaders ?? (false as boolean),
			PadLength: init?.PadLength ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PushPromiseParam {
		return new PushPromiseParam(this, true)
	}

	public __goscriptAssign(source: PushPromiseParam): void {
		const target = this._fields
		const values = source._fields
		target.StreamID = values.StreamID
		target.PromiseID = values.PromiseID
		target.BlockFragment = values.BlockFragment
		target.EndHeaders = values.EndHeaders
		target.PadLength = values.PadLength
	}

	static __typeInfo = $.registerStructType(
		"http2.PushPromiseParam",
		() => new PushPromiseParam(),
		() => [],
		PushPromiseParam,
		() => [/* @__PURE__ */ $.structField("StreamID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true), /* @__PURE__ */ $.structField("PromiseID", /* @__PURE__ */ $.basicType("uint32"), [1], 4, true), /* @__PURE__ */ $.structField("BlockFragment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 8, true), /* @__PURE__ */ $.structField("EndHeaders", /* @__PURE__ */ $.basicType("bool"), [3], 32, true), /* @__PURE__ */ $.structField("PadLength", /* @__PURE__ */ $.basicType("uint8"), [4], 33, true)]
	)
}

export class MetaHeadersFrame {
	public get HeadersFrame(): HeadersFrame | $.VarRef<HeadersFrame> | null {
		return this._fields.HeadersFrame
	}

	public set HeadersFrame(value: HeadersFrame | $.VarRef<HeadersFrame> | null) {
		this._fields.HeadersFrame = value
	}

	// Fields are the fields contained in the HEADERS and
	// CONTINUATION frames. The underlying slice is owned by the
	// Framer and must not be retained after the next call to
	// ReadFrame.
	//
	// Fields are guaranteed to be in the correct http2 order and
	// not have unknown pseudo header fields or invalid header
	// field names or values. Required pseudo header fields may be
	// missing, however. Use the MetaHeadersFrame.Pseudo accessor
	// method access pseudo headers.
	public get Fields(): $.Slice<hpack.HeaderField> {
		return this._fields.Fields
	}

	public set Fields(value: $.Slice<hpack.HeaderField>) {
		this._fields.Fields = value
	}

	// Truncated is whether the max header list size limit was hit
	// and Fields is incomplete. The hpack decoder state is still
	// valid, however.
	public get Truncated(): boolean {
		return this._fields.Truncated
	}

	public set Truncated(value: boolean) {
		this._fields.Truncated = value
	}

	public _fields: {
		HeadersFrame: HeadersFrame | $.VarRef<HeadersFrame> | null
		Fields: $.Slice<hpack.HeaderField>
		Truncated: boolean
	}

	constructor(init?: Partial<{HeadersFrame?: HeadersFrame | $.VarRef<HeadersFrame> | null, Fields?: $.Slice<hpack.HeaderField>, Truncated?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			HeadersFrame: init?.HeadersFrame ?? (null! as HeadersFrame | $.VarRef<HeadersFrame> | null),
			Fields: init?.Fields ?? (null! as $.Slice<hpack.HeaderField>),
			Truncated: init?.Truncated ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MetaHeadersFrame {
		return new MetaHeadersFrame(this, true)
	}

	public __goscriptAssign(source: MetaHeadersFrame): void {
		const target = this._fields
		const values = source._fields
		target.HeadersFrame = values.HeadersFrame
		target.Fields = values.Fields
		target.Truncated = values.Truncated
	}

	public PseudoFields(): $.Slice<hpack.HeaderField> {
		const mh: MetaHeadersFrame | $.VarRef<MetaHeadersFrame> | null = this;
		const mh$: MetaHeadersFrame = mh == null ? $.pointerTarget<MetaHeadersFrame>(mh) : (mh as any).__isVarRef === true ? (mh as any).value : (mh as any).__goValue === undefined ? (mh as any) : $.pointerTarget<MetaHeadersFrame>(mh)
		for (let __goscriptRangeTarget2 = (mh$ as MetaHeadersFrame).Fields, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
			let hf = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as hpack.HeaderField)).clone()
			if (!hf.IsPseudo()) {
				return $.goSlice((mh$ as MetaHeadersFrame).Fields, undefined, i)
			}
		}
		return (mh$ as MetaHeadersFrame).Fields
	}

	public PseudoValue(pseudo: string): string {
		const mh: MetaHeadersFrame | $.VarRef<MetaHeadersFrame> | null = this;
		for (let __goscriptRangeTarget3 = $.pointerValue<MetaHeadersFrame>(mh).Fields, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let hf = ((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as hpack.HeaderField)).clone()
			if (!hf.IsPseudo()) {
				return ""
			}
			if ($.stringEqual($.sliceStringOrBytes(hf.Name, 1, undefined), pseudo)) {
				return hf.Value
			}
		}
		return ""
	}

	public RegularFields(): $.Slice<hpack.HeaderField> {
		const mh: MetaHeadersFrame | $.VarRef<MetaHeadersFrame> | null = this;
		const mh$: MetaHeadersFrame = mh == null ? $.pointerTarget<MetaHeadersFrame>(mh) : (mh as any).__isVarRef === true ? (mh as any).value : (mh as any).__goValue === undefined ? (mh as any) : $.pointerTarget<MetaHeadersFrame>(mh)
		for (let __goscriptRangeTarget4 = (mh$ as MetaHeadersFrame).Fields, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
			let hf = ((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as hpack.HeaderField)).clone()
			if (!hf.IsPseudo()) {
				return $.goSlice((mh$ as MetaHeadersFrame).Fields, i, undefined)
			}
		}
		return null
	}

	public checkPseudos(): $.GoError {
		const mh: MetaHeadersFrame | $.VarRef<MetaHeadersFrame> | null = this;
		let isRequest: boolean = false
		let isResponse: boolean = false
		let pf: $.Slice<hpack.HeaderField> = (mh !== null && (mh as any).__isVarRef !== true && (mh as any).__goValue === undefined ? ((mh as any) as MetaHeadersFrame).PseudoFields() : MetaHeadersFrame.prototype.PseudoFields.call(mh))
		for (let __goscriptRangeTarget6 = pf, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget6), i = 0; i < __goscriptRangeWindow5.length; i++) {
			let hf = ((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as hpack.HeaderField)).clone()
			switch (hf.Name) {
				case ":method":
				case ":path":
				case ":scheme":
				case ":authority":
				{
					isRequest = true
					break
				}
				case ":status":
				{
					isResponse = true
					break
				}
				default:
				{
					return $.namedValueInterfaceValue<$.GoError>(hf.Name, "http2.pseudoHeaderError", {"Error": __goscript_errors.pseudoHeaderError_Error}, /* @__PURE__ */ $.basicType("string", "http2.pseudoHeaderError"))
					break
				}
			}
			// Check for duplicates.
			// This would be a bad algorithm, but N is 4.
			// And this doesn't allocate.
			for (let __goscriptRangeTarget5 = $.goSlice(pf, undefined, i), __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
				let hf2 = ((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as hpack.HeaderField)).clone()
				if ($.stringEqual(hf.Name, hf2.Name)) {
					return $.namedValueInterfaceValue<$.GoError>(hf.Name, "http2.duplicatePseudoHeaderError", {"Error": __goscript_errors.duplicatePseudoHeaderError_Error}, /* @__PURE__ */ $.basicType("string", "http2.duplicatePseudoHeaderError"))
				}
			}
		}
		if (isRequest && isResponse) {
			return __goscript_errors.errMixPseudoHeaderTypes
		}
		return null
	}

	public HasPriority(): any {
		return $.pointerValue<HeadersFrame>(this.HeadersFrame).HasPriority()
	}

	public Header(): any {
		return $.pointerValue<HeadersFrame>(this.HeadersFrame).FrameHeader.Header()
	}

	public HeaderBlockFragment(): any {
		return $.pointerValue<HeadersFrame>(this.HeadersFrame).HeaderBlockFragment()
	}

	public HeadersEnded(): any {
		return $.pointerValue<HeadersFrame>(this.HeadersFrame).HeadersEnded()
	}

	public StreamEnded(): any {
		return $.pointerValue<HeadersFrame>(this.HeadersFrame).StreamEnded()
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<HeadersFrame>(this.HeadersFrame).FrameHeader.String()
	}

	public checkValid(): any {
		return $.pointerValue<HeadersFrame>(this.HeadersFrame).FrameHeader.checkValid()
	}

	public invalidate(): any {
		return $.pointerValue<HeadersFrame>(this.HeadersFrame).FrameHeader.invalidate()
	}

	public async writeDebug(buf: any): globalThis.Promise<any> {
		return await $.pointerValue<HeadersFrame>(this.HeadersFrame).FrameHeader.writeDebug(buf)
	}

	static __typeInfo = $.registerStructType(
		"http2.MetaHeadersFrame",
		() => new MetaHeadersFrame(),
		() => [$.methodSignature("PseudoFields", [], [/* @__PURE__ */ $.sliceType("hpack.HeaderField")], true), $.methodSignature("PseudoValue", [["pseudo", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("RegularFields", [], [/* @__PURE__ */ $.sliceType("hpack.HeaderField")], true), $.methodSignature("checkPseudos", [], ["error"], true), $.methodSignature("HasPriority", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Header", [], ["http2.FrameHeader"]), $.methodSignature("HeaderBlockFragment", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("HeadersEnded", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("StreamEnded", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("checkValid"), $.methodSignature("invalidate"), $.methodSignature("writeDebug", [["buf", /* @__PURE__ */ $.pointerType("bytes.Buffer")]])],
		MetaHeadersFrame,
		() => [/* @__PURE__ */ $.structField("HeadersFrame", /* @__PURE__ */ $.pointerType("http2.HeadersFrame"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Fields", /* @__PURE__ */ $.sliceType("hpack.HeaderField"), [1], 8, true), /* @__PURE__ */ $.structField("Truncated", /* @__PURE__ */ $.basicType("bool"), [2], 32, true)]
	)
}

export const frameHeaderLen: number = 9

export const FrameData: FrameType = 0

export const FrameHeaders: FrameType = 1

export const FramePriority: FrameType = 2

export const FrameRSTStream: FrameType = 3

export const FrameSettings: FrameType = 4

export const FramePushPromise: FrameType = 5

export const FramePing: FrameType = 6

export const FrameGoAway: FrameType = 7

export const FrameWindowUpdate: FrameType = 8

export const FrameContinuation: FrameType = 9

export const FlagDataEndStream: Flags = 1

export const FlagDataPadded: Flags = 8

export const FlagHeadersEndStream: Flags = 1

export const FlagHeadersEndHeaders: Flags = 4

export const FlagHeadersPadded: Flags = 8

export const FlagHeadersPriority: Flags = 32

export const FlagSettingsAck: Flags = 1

export const FlagPingAck: Flags = 1

export const FlagContinuationEndHeaders: Flags = 4

export const FlagPushPromiseEndHeaders: Flags = 4

export const FlagPushPromisePadded: Flags = 8

export const minMaxFrameSize: number = 16384

export const maxFrameSize: number = 16777215

export let padZeros: $.Slice<number> = $.makeSlice<number>(255, undefined, "byte")

export function __goscript_set_padZeros(__goscriptValue: $.Slice<number>): void {
	padZeros = __goscriptValue
}

export let frameName: globalThis.Map<FrameType, string> | null = $.makeMap<FrameType, string>([[0, "DATA"], [1, "HEADERS"], [2, "PRIORITY"], [3, "RST_STREAM"], [4, "SETTINGS"], [5, "PUSH_PROMISE"], [6, "PING"], [7, "GOAWAY"], [8, "WINDOW_UPDATE"], [9, "CONTINUATION"]])

export function __goscript_set_frameName(__goscriptValue: globalThis.Map<FrameType, string> | null): void {
	frameName = __goscriptValue
}

export async function FrameType_String(t: FrameType): globalThis.Promise<string> {
	{
		let [s, ok] = $.mapGet<FrameType, string, string>(frameName, t, "")
		if (ok) {
			return s
		}
	}
	return fmt.Sprintf("UNKNOWN_FRAME_TYPE_%d", $.basicInterfaceValue($.uint(t, 8), "uint8"))
}

export function Flags_Has(f: Flags, v: Flags): boolean {
	return $.uint((f & v), 8) == v
}

export let flagName: globalThis.Map<FrameType, globalThis.Map<Flags, string> | null> | null = $.makeMap<FrameType, globalThis.Map<Flags, string> | null>([[0, $.makeMap<Flags, string>([[1, "END_STREAM"], [8, "PADDED"]])], [1, $.makeMap<Flags, string>([[1, "END_STREAM"], [4, "END_HEADERS"], [8, "PADDED"], [32, "PRIORITY"]])], [4, $.makeMap<Flags, string>([[1, "ACK"]])], [6, $.makeMap<Flags, string>([[1, "ACK"]])], [9, $.makeMap<Flags, string>([[4, "END_HEADERS"]])], [5, $.makeMap<Flags, string>([[4, "END_HEADERS"], [8, "PADDED"]])]])

export function __goscript_set_flagName(__goscriptValue: globalThis.Map<FrameType, globalThis.Map<Flags, string> | null> | null): void {
	flagName = __goscriptValue
}

export let frameParsers: globalThis.Map<FrameType, frameParser | null> | null = $.makeMap<FrameType, frameParser | null>([[0, parseDataFrame], [1, parseHeadersFrame], [2, parsePriorityFrame], [3, parseRSTStreamFrame], [4, parseSettingsFrame], [5, parsePushPromise], [6, parsePingFrame], [7, parseGoAwayFrame], [8, parseWindowUpdateFrame], [9, parseContinuationFrame]])

export function __goscript_set_frameParsers(__goscriptValue: globalThis.Map<FrameType, frameParser | null> | null): void {
	frameParsers = __goscriptValue
}

export function typeFrameParser(t: FrameType): frameParser | null {
	{
		let f = $.mapGet<FrameType, frameParser | null, frameParser | null>(frameParsers, t, null)[0]
		if (f != null) {
			return f
		}
	}
	return parseUnknownFrame
}

export let fhBytes: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	let buf: $.VarRef<$.Slice<number>> = $.varRef($.makeSlice<number>(9, undefined, "byte"))
	return $.interfaceValue(buf, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_fhBytes(__goscriptValue: sync.Pool): void {
	$.assignStruct(fhBytes.value, __goscriptValue)
}

export async function ReadFrameHeader(r: io.Reader | null): globalThis.Promise<[FrameHeader, $.GoError]> {
	using __defer = new $.DisposableStack()
	let bufp = $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>(await fhBytes.value.Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (x: any) => __receiver.Put(x))(fhBytes.value), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "sync.(*Pool).Put-fm")
	const __goscriptDeferArg0 = $.interfaceValue(bufp, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	__defer.defer(() => { __goscriptDeferCallee0(__goscriptDeferArg0) })
	return await readFrameHeader($.pointerValue<$.Slice<number>>(bufp), r)
}

export async function readFrameHeader(buf: $.Slice<number>, r: io.Reader | null): globalThis.Promise<[FrameHeader, $.GoError]> {
	let [, err] = await io.ReadFull($.pointerValueOrNil(r)!, $.goSlice(buf, undefined, 9))
	if (err != null) {
		return [new FrameHeader(undefined, true), err]
	}
	return [(() => { const __goscriptLiteralField0 = $.uint($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32($.goSlice(buf, 5, undefined)) & ((((2147483648) - 1) >>> 0)), 32); return new FrameHeader({Length: $.uint(((((($.uint($.arrayIndex(buf!, 0), 32) << 16) >>> 0)) | ((($.uint($.arrayIndex(buf!, 1), 32) << 8) >>> 0))) | $.uint($.arrayIndex(buf!, 2), 32)), 32), Type: $.uint($.arrayIndex(buf!, 3), 8), Flags: $.uint($.arrayIndex(buf!, 4), 8), StreamID: __goscriptLiteralField0, valid: true}, true) })(), null]
}

export function NewFramer(w: io.Writer | null, r: io.Reader | null): Framer | $.VarRef<Framer> | null {
	let fr: Framer | $.VarRef<Framer> | null = new Framer({w: w, r: r, countError: $.functionValue((_p0: string): void => {
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo)), logReads: __goscript_http2.logFrameReads, logWrites: __goscript_http2.logFrameWrites, debugReadLoggerf: log.Printf, debugWriteLoggerf: log.Printf})
	let fr$: Framer = fr == null ? $.pointerTarget<Framer>(fr) : (fr as any).__isVarRef === true ? (fr as any).value : (fr as any).__goValue === undefined ? (fr as any) : $.pointerTarget<Framer>(fr);
	;(fr$ as Framer).getReadBuf = $.functionValue((size: number): $.Slice<number> => {
		if ($.cap((fr$ as Framer).readBuf) >= $.int(size)) {
			return $.goSlice((fr$ as Framer).readBuf, undefined, size)
		}
		;(fr$ as Framer).readBuf = $.makeSlice<number>(size, undefined, "byte")
		return (fr$ as Framer).readBuf
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint32")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo))
	void (fr !== null && (fr as any).__isVarRef !== true && (fr as any).__goValue === undefined ? ((fr as any) as Framer).SetMaxReadFrameSize(16777215) : Framer.prototype.SetMaxReadFrameSize.call(fr, 16777215))
	return fr
}

export let ErrFrameTooLarge: $.GoError = errors.New("http2: frame too large")

export function __goscript_set_ErrFrameTooLarge(__goscriptValue: $.GoError): void {
	ErrFrameTooLarge = __goscriptValue
}

export function terminalReadFrameError(err: $.GoError): boolean {
	{
		let [, ok] = $.typeAssertTuple<__goscript_errors.StreamError>(err, "http2.StreamError")
		if (ok) {
			return false
		}
	}
	return err != null
}

export async function parseDataFrame(fc: frameCache | $.VarRef<frameCache> | null, fh: FrameHeader, countError: ((_p0: string) => void) | null, payload: $.Slice<number>): globalThis.Promise<[Frame | null, $.GoError]> {
	if (fh.StreamID == 0) {
		// DATA frames MUST be associated with a stream. If a
		// DATA frame is received whose stream identifier
		// field is 0x0, the recipient MUST respond with a
		// connection error (Section 5.4.1) of type
		// PROTOCOL_ERROR.
		void (__goscriptAwait = countError!("frame_data_stream_0"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.interfaceValue<$.GoError>(new __goscript_errors.connError({Code: 1, Reason: "DATA frame with stream ID 0"}, true), "http2.connError", "http2.connError")]
	}
	let f: DataFrame | $.VarRef<DataFrame> | null = (fc !== null && (fc as any).__isVarRef !== true && (fc as any).__goValue === undefined ? ((fc as any) as frameCache).getDataFrame() : frameCache.prototype.getDataFrame.call(fc))
	let f$: DataFrame = f == null ? $.pointerTarget<DataFrame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<DataFrame>(f)
	$.assignStruct((f$ as DataFrame).FrameHeader, fh)

	let padSize: number = 0
	if (Flags_Has(fh.Flags, 8)) {
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple1: any = readByte(payload)
		payload = __goscriptTuple1[0]
		padSize = __goscriptTuple1[1]
		err = __goscriptTuple1[2]
		if (err != null) {
			void (__goscriptAwait = countError!("frame_data_pad_byte_short"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [null, err]
		}
	}
	if ($.int(padSize) > $.sliceLen(payload)) {
		// If the length of the padding is greater than the
		// length of the frame payload, the recipient MUST
		// treat this as a connection error.
		// Filed: https://github.com/http2/http2-spec/issues/610
		void (__goscriptAwait = countError!("frame_data_pad_too_big"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.interfaceValue<$.GoError>(new __goscript_errors.connError({Code: 1, Reason: "pad size larger than data payload"}, true), "http2.connError", "http2.connError")]
	}
	;(f$ as DataFrame).data = $.goSlice(payload, undefined, $.sliceLen(payload) - $.int(padSize))
	return [$.interfaceValue<Frame | null>(f, "*http2.DataFrame", /* @__PURE__ */ $.pointerType("http2.DataFrame")), null]
}

export let errStreamID: $.GoError = errors.New("invalid stream ID")

export function __goscript_set_errStreamID(__goscriptValue: $.GoError): void {
	errStreamID = __goscriptValue
}

export let errDepStreamID: $.GoError = errors.New("invalid dependent stream ID")

export function __goscript_set_errDepStreamID(__goscriptValue: $.GoError): void {
	errDepStreamID = __goscriptValue
}

export let errPadLength: $.GoError = errors.New("pad length too large")

export function __goscript_set_errPadLength(__goscriptValue: $.GoError): void {
	errPadLength = __goscriptValue
}

export let errPadBytes: $.GoError = errors.New("padding bytes must all be zeros unless AllowIllegalWrites is enabled")

export function __goscript_set_errPadBytes(__goscriptValue: $.GoError): void {
	errPadBytes = __goscriptValue
}

export function validStreamIDOrZero(streamID: number): boolean {
	return $.uint((streamID & (2147483648)), 32) == 0
}

export function validStreamID(streamID: number): boolean {
	return (streamID != 0) && ($.uint((streamID & (2147483648)), 32) == 0)
}

export async function parseSettingsFrame(_p0: frameCache | $.VarRef<frameCache> | null, fh: FrameHeader, countError: ((_p0: string) => void) | null, p: $.Slice<number>): globalThis.Promise<[Frame | null, $.GoError]> {
	if (Flags_Has(fh.Flags, 1) && (fh.Length > 0)) {
		// When this (ACK 0x1) bit is set, the payload of the
		// SETTINGS frame MUST be empty. Receipt of a
		// SETTINGS frame with the ACK flag set and a length
		// field value other than 0 MUST be treated as a
		// connection error (Section 5.4.1) of type
		// FRAME_SIZE_ERROR.
		void (__goscriptAwait = countError!("frame_settings_ack_with_length"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.namedValueInterfaceValue<$.GoError>($.uint(6, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
	}
	if (fh.StreamID != 0) {
		// SETTINGS frames always apply to a connection,
		// never a single stream. The stream identifier for a
		// SETTINGS frame MUST be zero (0x0).  If an endpoint
		// receives a SETTINGS frame whose stream identifier
		// field is anything other than 0x0, the endpoint MUST
		// respond with a connection error (Section 5.4.1) of
		// type PROTOCOL_ERROR.
		void (__goscriptAwait = countError!("frame_settings_has_stream"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
	}
	if (($.sliceLen(p) % 6) != 0) {
		void (__goscriptAwait = countError!("frame_settings_mod_6"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		// Expecting even number of 6 byte settings.
		return [null, $.namedValueInterfaceValue<$.GoError>($.uint(6, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
	}
	let f: SettingsFrame | $.VarRef<SettingsFrame> | null = new SettingsFrame({FrameHeader: fh, p: p})
	{
		let [v, ok] = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as SettingsFrame).Value(4) : SettingsFrame.prototype.Value.call(f, 4))
		if (ok && (v > 2147483647)) {
			void (__goscriptAwait = countError!("frame_settings_window_size_too_big"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			// Values above the maximum flow control window size of 2^31 - 1 MUST
			// be treated as a connection error (Section 5.4.1) of type
			// FLOW_CONTROL_ERROR.
			return [null, $.namedValueInterfaceValue<$.GoError>($.uint(3, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
		}
	}
	return [$.interfaceValue<Frame | null>(f, "*http2.SettingsFrame", /* @__PURE__ */ $.pointerType("http2.SettingsFrame")), null]
}

export async function parsePingFrame(_p0: frameCache | $.VarRef<frameCache> | null, fh: FrameHeader, countError: ((_p0: string) => void) | null, payload: $.Slice<number>): globalThis.Promise<[Frame | null, $.GoError]> {
	if ($.sliceLen(payload) != 8) {
		void (__goscriptAwait = countError!("frame_ping_length"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.namedValueInterfaceValue<$.GoError>($.uint(6, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
	}
	if (fh.StreamID != 0) {
		void (__goscriptAwait = countError!("frame_ping_has_stream"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
	}
	let f: PingFrame | $.VarRef<PingFrame> | null = new PingFrame({FrameHeader: fh})
	$.copy($.goSlice($.pointerValue<PingFrame>(f).Data, undefined, undefined), payload)
	return [$.interfaceValue<Frame | null>(f, "*http2.PingFrame", /* @__PURE__ */ $.pointerType("http2.PingFrame")), null]
}

export async function parseGoAwayFrame(_p0: frameCache | $.VarRef<frameCache> | null, fh: FrameHeader, countError: ((_p0: string) => void) | null, p: $.Slice<number>): globalThis.Promise<[Frame | null, $.GoError]> {
	if (fh.StreamID != 0) {
		void (__goscriptAwait = countError!("frame_goaway_has_stream"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
	}
	if ($.sliceLen(p) < 8) {
		void (__goscriptAwait = countError!("frame_goaway_short"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.namedValueInterfaceValue<$.GoError>($.uint(6, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
	}
	return [$.interfaceValue<Frame | null>((() => { const __goscriptLiteralField3 = $.uint($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32($.goSlice(p, undefined, 4)) & ((((2147483648) - 1) >>> 0)), 32); const __goscriptLiteralField4 = $.uint($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32($.goSlice(p, 4, 8)), 32); return new GoAwayFrame({FrameHeader: fh, LastStreamID: __goscriptLiteralField3, ErrCode: __goscriptLiteralField4, debugData: $.goSlice(p, 8, undefined)}) })(), "*http2.GoAwayFrame", /* @__PURE__ */ $.pointerType("http2.GoAwayFrame")), null]
}

export function parseUnknownFrame(_p0: frameCache | $.VarRef<frameCache> | null, fh: FrameHeader, countError: ((_p0: string) => void) | null, p: $.Slice<number>): [Frame | null, $.GoError] {
	return [$.interfaceValue<Frame | null>(new UnknownFrame({FrameHeader: fh, p: p}), "*http2.UnknownFrame", /* @__PURE__ */ $.pointerType("http2.UnknownFrame")), null]
}

export async function parseWindowUpdateFrame(_p0: frameCache | $.VarRef<frameCache> | null, fh: FrameHeader, countError: ((_p0: string) => void) | null, p: $.Slice<number>): globalThis.Promise<[Frame | null, $.GoError]> {
	if ($.sliceLen(p) != 4) {
		void (__goscriptAwait = countError!("frame_windowupdate_bad_len"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.namedValueInterfaceValue<$.GoError>($.uint(6, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
	}
	let inc = $.uint($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32($.goSlice(p, undefined, 4)) & 0x7fffffff, 32)
	if (inc == 0) {
		// A receiver MUST treat the receipt of a
		// WINDOW_UPDATE frame with an flow control window
		// increment of 0 as a stream error (Section 5.4.2) of
		// type PROTOCOL_ERROR; errors on the connection flow
		// control window MUST be treated as a connection
		// error (Section 5.4.1).
		if (fh.StreamID == 0) {
			void (__goscriptAwait = countError!("frame_windowupdate_zero_inc_conn"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [null, $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
		}
		void (__goscriptAwait = countError!("frame_windowupdate_zero_inc_stream"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.interfaceValue<$.GoError>(__goscript_errors.streamError(fh.StreamID, 1), "http2.StreamError", "http2.StreamError")]
	}
	return [$.interfaceValue<Frame | null>(new WindowUpdateFrame({FrameHeader: fh, Increment: inc}), "*http2.WindowUpdateFrame", /* @__PURE__ */ $.pointerType("http2.WindowUpdateFrame")), null]
}

export async function parseHeadersFrame(_p0: frameCache | $.VarRef<frameCache> | null, fh: FrameHeader, countError: ((_p0: string) => void) | null, p: $.Slice<number>): globalThis.Promise<[Frame | null, $.GoError]> {
	let err: $.GoError = null! as $.GoError
	let hf: HeadersFrame | $.VarRef<HeadersFrame> | null = new HeadersFrame({FrameHeader: fh})
	let hf$: HeadersFrame = hf == null ? $.pointerTarget<HeadersFrame>(hf) : (hf as any).__isVarRef === true ? (hf as any).value : (hf as any).__goValue === undefined ? (hf as any) : $.pointerTarget<HeadersFrame>(hf)
	if (fh.StreamID == 0) {
		// HEADERS frames MUST be associated with a stream. If a HEADERS frame
		// is received whose stream identifier field is 0x0, the recipient MUST
		// respond with a connection error (Section 5.4.1) of type
		// PROTOCOL_ERROR.
		void (__goscriptAwait = countError!("frame_headers_zero_stream"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.interfaceValue<$.GoError>(new __goscript_errors.connError({Code: 1, Reason: "HEADERS frame with stream ID 0"}, true), "http2.connError", "http2.connError")]
	}
	let padLength: number = 0
	if (Flags_Has(fh.Flags, 8)) {
		{
			let __goscriptTuple2: any = readByte(p)
			p = __goscriptTuple2[0]
			padLength = __goscriptTuple2[1]
			err = __goscriptTuple2[2]
			if (err != null) {
				void (__goscriptAwait = countError!("frame_headers_pad_short"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [null! as Frame | null, err]
			}
		}
	}
	if (Flags_Has(fh.Flags, 32)) {
		let v: number = 0
		let __goscriptTuple3: any = readUint32(p)
		p = __goscriptTuple3[0]
		v = __goscriptTuple3[1]
		err = __goscriptTuple3[2]
		if (err != null) {
			void (__goscriptAwait = countError!("frame_headers_prio_short"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [null, err]
		}
		;(hf$ as HeadersFrame).Priority.StreamDep = $.uint(v & 0x7fffffff, 32);
		;(hf$ as HeadersFrame).Priority.Exclusive = (v != (hf$ as HeadersFrame).Priority.StreamDep)
		let __goscriptTuple4: any = readByte(p)
		p = __goscriptTuple4[0];
		;(hf$ as HeadersFrame).Priority.Weight = __goscriptTuple4[1]
		err = __goscriptTuple4[2]
		if (err != null) {
			void (__goscriptAwait = countError!("frame_headers_prio_weight_short"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [null, err]
		}
	}
	if (($.sliceLen(p) - $.int(padLength)) < 0) {
		void (__goscriptAwait = countError!("frame_headers_pad_too_big"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.interfaceValue<$.GoError>(__goscript_errors.streamError(fh.StreamID, 1), "http2.StreamError", "http2.StreamError")]
	}
	;(hf$ as HeadersFrame).headerFragBuf = $.goSlice(p, undefined, $.sliceLen(p) - $.int(padLength))
	return [$.interfaceValue<Frame | null>(hf, "*http2.HeadersFrame", /* @__PURE__ */ $.pointerType("http2.HeadersFrame")), null]
}

export async function parsePriorityFrame(_p0: frameCache | $.VarRef<frameCache> | null, fh: FrameHeader, countError: ((_p0: string) => void) | null, payload: $.Slice<number>): globalThis.Promise<[Frame | null, $.GoError]> {
	if (fh.StreamID == 0) {
		void (__goscriptAwait = countError!("frame_priority_zero_stream"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.interfaceValue<$.GoError>(new __goscript_errors.connError({Code: 1, Reason: "PRIORITY frame with stream ID 0"}, true), "http2.connError", "http2.connError")]
	}
	if ($.sliceLen(payload) != 5) {
		void (__goscriptAwait = countError!("frame_priority_bad_length"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField5 = await fmt.Sprintf("PRIORITY frame payload size was %d; want 5", $.basicInterfaceValue($.sliceLen(payload), "int")); return new __goscript_errors.connError({Code: 6, Reason: __goscriptLiteralField5}, true) })()), "http2.connError", "http2.connError")]
	}
	let v = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32($.goSlice(payload, undefined, 4))
	let streamID = $.uint(v & 0x7fffffff, 32)
	return [$.interfaceValue<Frame | null>(new PriorityFrame({FrameHeader: fh, PriorityParam: new PriorityParam({Weight: $.arrayIndex(payload!, 4), StreamDep: streamID, Exclusive: streamID != v}, true)}), "*http2.PriorityFrame", /* @__PURE__ */ $.pointerType("http2.PriorityFrame")), null]
}

export async function parseRSTStreamFrame(_p0: frameCache | $.VarRef<frameCache> | null, fh: FrameHeader, countError: ((_p0: string) => void) | null, p: $.Slice<number>): globalThis.Promise<[Frame | null, $.GoError]> {
	if ($.sliceLen(p) != 4) {
		void (__goscriptAwait = countError!("frame_rststream_bad_len"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.namedValueInterfaceValue<$.GoError>($.uint(6, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
	}
	if (fh.StreamID == 0) {
		void (__goscriptAwait = countError!("frame_rststream_zero_stream"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
	}
	return [$.interfaceValue<Frame | null>((() => { const __goscriptLiteralField6 = $.uint($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32($.goSlice(p, undefined, 4)), 32); return new RSTStreamFrame({FrameHeader: fh, ErrCode: __goscriptLiteralField6}) })(), "*http2.RSTStreamFrame", /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame")), null]
}

export async function parseContinuationFrame(_p0: frameCache | $.VarRef<frameCache> | null, fh: FrameHeader, countError: ((_p0: string) => void) | null, p: $.Slice<number>): globalThis.Promise<[Frame | null, $.GoError]> {
	if (fh.StreamID == 0) {
		void (__goscriptAwait = countError!("frame_continuation_zero_stream"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.interfaceValue<$.GoError>(new __goscript_errors.connError({Code: 1, Reason: "CONTINUATION frame with stream ID 0"}, true), "http2.connError", "http2.connError")]
	}
	return [$.interfaceValue<Frame | null>(new ContinuationFrame({FrameHeader: fh, headerFragBuf: p}), "*http2.ContinuationFrame", /* @__PURE__ */ $.pointerType("http2.ContinuationFrame")), null]
}

export async function parsePushPromise(_p0: frameCache | $.VarRef<frameCache> | null, fh: FrameHeader, countError: ((_p0: string) => void) | null, p: $.Slice<number>): globalThis.Promise<[Frame | null, $.GoError]> {
	let err: $.GoError = null! as $.GoError
	let pp: PushPromiseFrame | $.VarRef<PushPromiseFrame> | null = new PushPromiseFrame({FrameHeader: fh})
	let pp$: PushPromiseFrame = pp == null ? $.pointerTarget<PushPromiseFrame>(pp) : (pp as any).__isVarRef === true ? (pp as any).value : (pp as any).__goValue === undefined ? (pp as any) : $.pointerTarget<PushPromiseFrame>(pp)
	if ((pp$ as PushPromiseFrame).FrameHeader.StreamID == 0) {
		// PUSH_PROMISE frames MUST be associated with an existing,
		// peer-initiated stream. The stream identifier of a
		// PUSH_PROMISE frame indicates the stream it is associated
		// with. If the stream identifier field specifies the value
		// 0x0, a recipient MUST respond with a connection error
		// (Section 5.4.1) of type PROTOCOL_ERROR.
		void (__goscriptAwait = countError!("frame_pushpromise_zero_stream"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
	}
	// The PUSH_PROMISE frame includes optional padding.
	// Padding fields and flags are identical to those defined for DATA frames
	let padLength: number = 0
	if (Flags_Has(fh.Flags, 8)) {
		{
			let __goscriptTuple5: any = readByte(p)
			p = __goscriptTuple5[0]
			padLength = __goscriptTuple5[1]
			err = __goscriptTuple5[2]
			if (err != null) {
				void (__goscriptAwait = countError!("frame_pushpromise_pad_short"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [null! as Frame | null, err]
			}
		}
	}

	let __goscriptTuple6: any = readUint32(p)
	p = __goscriptTuple6[0];
	;(pp$ as PushPromiseFrame).PromiseID = __goscriptTuple6[1]
	err = __goscriptTuple6[2]
	if (err != null) {
		void (__goscriptAwait = countError!("frame_pushpromise_promiseid_short"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null! as Frame | null, err]
	}
	;(pp$ as PushPromiseFrame).PromiseID = $.uint((pp$ as PushPromiseFrame).PromiseID & ((((2147483648) - 1) >>> 0)), 32)

	if ($.int(padLength) > $.sliceLen(p)) {
		// like the DATA frame, error out if padding is longer than the body.
		void (__goscriptAwait = countError!("frame_pushpromise_pad_too_big"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, $.namedValueInterfaceValue<$.GoError>($.uint(1, 32), "http2.ConnectionError", {"Error": __goscript_errors.ConnectionError_Error}, /* @__PURE__ */ $.basicType("uint32", "http2.ConnectionError"))]
	}
	;(pp$ as PushPromiseFrame).headerFragBuf = $.goSlice(p, undefined, $.sliceLen(p) - $.int(padLength))
	return [$.interfaceValue<Frame | null>(pp, "*http2.PushPromiseFrame", /* @__PURE__ */ $.pointerType("http2.PushPromiseFrame")), null]
}

export function readByte(p: $.Slice<number>): [$.Slice<number>, number, $.GoError] {
	let remain: $.Slice<number> = null! as $.Slice<number>
	let b: number = 0
	let err: $.GoError = null! as $.GoError
	if ($.sliceLen(p) == 0) {
		return [null, 0, io.ErrUnexpectedEOF]
	}
	return [$.goSlice(p, 1, undefined), $.arrayIndex(p!, 0), null]
}

export function readUint32(p: $.Slice<number>): [$.Slice<number>, number, $.GoError] {
	let remain: $.Slice<number> = null! as $.Slice<number>
	let v: number = 0
	let err: $.GoError = null! as $.GoError
	if ($.sliceLen(p) < 4) {
		return [null, 0, io.ErrUnexpectedEOF]
	}
	return [$.goSlice(p, 4, undefined), $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32($.goSlice(p, undefined, 4)), null]
}

export async function summarizeFrame(f: Frame | null): globalThis.Promise<string> {
	let buf: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
	await $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<Frame, null>) : $.pointerValue<Exclude<Frame, null>>(f)).Header(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as FrameHeader))).writeDebug(buf)
	{
		const __goscriptTypeSwitchValue = f
		switch (true) {
			case $.typeAssert<SettingsFrame | $.VarRef<SettingsFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.SettingsFrame")).ok:
				{
					let f: SettingsFrame | $.VarRef<SettingsFrame> | null = $.typeAssert<SettingsFrame | $.VarRef<SettingsFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.SettingsFrame")).value
					let n = 0
					await SettingsFrame.prototype.ForeachSetting.call(f, $.functionValue(async (s: __goscript_http2.Setting): globalThis.Promise<$.GoError> => {
						n++
						if (n == 1) {
							buf.value.WriteString(", settings:")
						}
						await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, " %v=%v,", $.namedValueInterfaceValue<any>(s.ID, "http2.SettingID", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()), $.basicInterfaceValue(s.Val, "uint32"))
						return null
					}, ({ kind: $.TypeKind.Function, params: ["http2.Setting"], results: ["error"] } as $.FunctionTypeInfo)))
					if (n > 0) {
						buf.value.Truncate(buf.value.Len() - 1)
					}
				}
				break
			case $.typeAssert<DataFrame | $.VarRef<DataFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.DataFrame")).ok:
				{
					let f: DataFrame | $.VarRef<DataFrame> | null = $.typeAssert<DataFrame | $.VarRef<DataFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.DataFrame")).value
					let data: $.Slice<number> = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as DataFrame).Data() : DataFrame.prototype.Data.call(f))
					const max: number = 256
					if ($.sliceLen(data) > 256) {
						data = $.goSlice(data, undefined, 256)
					}
					await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, " data=%q", $.interfaceValue(data, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
					if ($.sliceLen((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as DataFrame).Data() : DataFrame.prototype.Data.call(f))) > 256) {
						await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, " (%d bytes omitted)", $.basicInterfaceValue($.sliceLen((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as DataFrame).Data() : DataFrame.prototype.Data.call(f))) - 256, "int"))
					}
				}
				break
			case $.typeAssert<WindowUpdateFrame | $.VarRef<WindowUpdateFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.WindowUpdateFrame")).ok:
				{
					let f: WindowUpdateFrame | $.VarRef<WindowUpdateFrame> | null = $.typeAssert<WindowUpdateFrame | $.VarRef<WindowUpdateFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.WindowUpdateFrame")).value
					if ($.pointerValue<WindowUpdateFrame>(f).FrameHeader.StreamID == 0) {
						buf.value.WriteString(" (conn)")
					}
					await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, " incr=%v", $.basicInterfaceValue($.pointerValue<WindowUpdateFrame>(f).Increment, "uint32"))
				}
				break
			case $.typeAssert<PingFrame | $.VarRef<PingFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.PingFrame")).ok:
				{
					let f: PingFrame | $.VarRef<PingFrame> | null = $.typeAssert<PingFrame | $.VarRef<PingFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.PingFrame")).value
					await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, " ping=%q", $.interfaceValue($.goSlice($.pointerValue<PingFrame>(f).Data, undefined, undefined), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
				}
				break
			case $.typeAssert<GoAwayFrame | $.VarRef<GoAwayFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.GoAwayFrame")).ok:
				{
					let f: GoAwayFrame | $.VarRef<GoAwayFrame> | null = $.typeAssert<GoAwayFrame | $.VarRef<GoAwayFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.GoAwayFrame")).value
					await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, " LastStreamID=%v ErrCode=%v Debug=%q", $.basicInterfaceValue($.pointerValue<GoAwayFrame>(f).LastStreamID, "uint32"), $.namedValueInterfaceValue<any>($.pointerValue<GoAwayFrame>(f).ErrCode, "http2.ErrCode", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic7()), $.interfaceValue($.pointerValue<GoAwayFrame>(f).debugData, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
				}
				break
			case $.typeAssert<RSTStreamFrame | $.VarRef<RSTStreamFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame")).ok:
				{
					let f: RSTStreamFrame | $.VarRef<RSTStreamFrame> | null = $.typeAssert<RSTStreamFrame | $.VarRef<RSTStreamFrame> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("http2.RSTStreamFrame")).value
					await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, " ErrCode=%v", $.namedValueInterfaceValue<any>($.pointerValue<RSTStreamFrame>(f).ErrCode, "http2.ErrCode", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic7()))
				}
				break
		}
	}
	return buf.value.String()
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (FrameType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "http2.FrameType"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_http2.SettingID_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("uint16", "http2.SettingID"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_errors.ErrCode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), stringToken: (receiver: any, ...args: any[]) => (__goscript_errors.ErrCode_stringToken as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= (/* @__PURE__ */ $.basicType("uint32", "http2.ErrCode"))
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("stringToken", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
