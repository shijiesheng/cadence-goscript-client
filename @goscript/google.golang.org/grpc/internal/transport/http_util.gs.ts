// Generated file based on http_util.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as base64 from "@goscript/encoding/base64/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as net2 from "@goscript/net/index.js"

import * as http from "@goscript/net/http/index.js"

import * as url from "@goscript/net/url/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as http2 from "@goscript/golang.org/x/net/http2/index.js"

import * as hpack from "@goscript/golang.org/x/net/http2/hpack/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/bufio/index.js"
import "@goscript/encoding/base64/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/net/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/url/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/golang.org/x/net/http2/index.js"
import "@goscript/golang.org/x/net/http2/hpack/index.js"
import "@goscript/google.golang.org/grpc/codes/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/transport", ["transport.timeoutUnit", "transport.bufWriter", "transport.ioError", "transport.framer"])

export type timeoutUnit = number

export class bufWriter {
	public get pool(): sync.Pool | $.VarRef<sync.Pool> | null {
		return this._fields.pool
	}

	public set pool(value: sync.Pool | $.VarRef<sync.Pool> | null) {
		this._fields.pool = value
	}

	public get buf(): $.Slice<number> {
		return this._fields.buf
	}

	public set buf(value: $.Slice<number>) {
		this._fields.buf = value
	}

	public get offset(): number {
		return this._fields.offset
	}

	public set offset(value: number) {
		this._fields.offset = value
	}

	public get batchSize(): number {
		return this._fields.batchSize
	}

	public set batchSize(value: number) {
		this._fields.batchSize = value
	}

	public get conn(): net2.Conn | null {
		return this._fields.conn
	}

	public set conn(value: net2.Conn | null) {
		this._fields.conn = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		pool: sync.Pool | $.VarRef<sync.Pool> | null
		buf: $.Slice<number>
		offset: number
		batchSize: number
		conn: net2.Conn | null
		err: $.GoError
	}

	constructor(init?: Partial<{pool?: sync.Pool | $.VarRef<sync.Pool> | null, buf?: $.Slice<number>, offset?: number, batchSize?: number, conn?: net2.Conn | null, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			pool: init?.pool ?? (null! as sync.Pool | $.VarRef<sync.Pool> | null),
			buf: init?.buf ?? (null! as $.Slice<number>),
			offset: init?.offset ?? (0 as number),
			batchSize: init?.batchSize ?? (0 as number),
			conn: init?.conn ?? (null! as net2.Conn | null),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bufWriter {
		return new bufWriter(this, true)
	}

	public __goscriptAssign(source: bufWriter): void {
		const target = this._fields
		const values = source._fields
		target.pool = values.pool
		target.buf = values.buf
		target.offset = values.offset
		target.batchSize = values.batchSize
		target.conn = $.assignFieldValue(target.conn, values.conn, "net.Conn")
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async Flush(): globalThis.Promise<$.GoError> {
		let w: bufWriter | $.VarRef<bufWriter> | null = this;
		const w$: bufWriter = w == null ? $.pointerTarget<bufWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<bufWriter>(w)
		let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as bufWriter).flushKeepBuffer() : bufWriter.prototype.flushKeepBuffer.call(w))
		// Only release the buffer if we are in a "shared" mode
		if (((w$ as bufWriter).buf != null) && ((w$ as bufWriter).pool != null)) {
			let b: $.VarRef<$.Slice<number>> = $.varRef((w$ as bufWriter).buf)
			sync.Pool.prototype.Put.call($.pointerValue<sync.Pool>((w$ as bufWriter).pool), $.interfaceValue(b, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))));
			;(w$ as bufWriter).buf = null
		}
		return err
	}

	public async Write(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let w: bufWriter | $.VarRef<bufWriter> | null = this;
		const w$: bufWriter = w == null ? $.pointerTarget<bufWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<bufWriter>(w)
		if ((w$ as bufWriter).err != null) {
			return [0, (w$ as bufWriter).err]
		}
		if ((w$ as bufWriter).batchSize == 0) {
			let [n, err] = await $.pointerValue<Exclude<net2.Conn, null>>((w$ as bufWriter).conn).Write(b)
			return [n, toIOError(err)]
		}
		if ((w$ as bufWriter).buf == null) {
			let __goscriptShadow0 = $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>(await sync.Pool.prototype.Get.call($.pointerValue<sync.Pool>((w$ as bufWriter).pool)), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))));
			;(w$ as bufWriter).buf = $.pointerValue<$.Slice<number>>(__goscriptShadow0)
		}
		let written = 0
		while ($.sliceLen(b) > 0) {
			let copied: number = $.copy($.goSlice((w$ as bufWriter).buf, (w$ as bufWriter).offset, undefined), b)
			b = $.goSlice(b, copied, undefined)
			written = written + (copied);
			;(w$ as bufWriter).offset = (w$ as bufWriter).offset + (copied)
			if ((w$ as bufWriter).offset < (w$ as bufWriter).batchSize) {
				continue
			}
			{
				let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as bufWriter).flushKeepBuffer() : bufWriter.prototype.flushKeepBuffer.call(w))
				if (err != null) {
					return [written, err]
				}
			}
		}
		return [written, null]
	}

	public async flushKeepBuffer(): globalThis.Promise<$.GoError> {
		let w: bufWriter | $.VarRef<bufWriter> | null = this;
		const w$: bufWriter = w == null ? $.pointerTarget<bufWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<bufWriter>(w)
		if ((w$ as bufWriter).err != null) {
			return (w$ as bufWriter).err
		}
		if ((w$ as bufWriter).offset == 0) {
			return null
		}
		let __goscriptTuple1: any = await $.pointerValue<Exclude<net2.Conn, null>>((w$ as bufWriter).conn).Write($.goSlice((w$ as bufWriter).buf, undefined, (w$ as bufWriter).offset));
		;(w$ as bufWriter).err = __goscriptTuple1[1];
		;(w$ as bufWriter).err = toIOError((w$ as bufWriter).err);
		;(w$ as bufWriter).offset = 0
		return (w$ as bufWriter).err
	}

	static __typeInfo = $.registerStructType(
		"transport.bufWriter",
		() => new bufWriter(),
		() => [$.methodSignature("Flush", [], ["error"], true), $.methodSignature("Write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("flushKeepBuffer", [], ["error"], true)],
		bufWriter,
		() => [/* @__PURE__ */ $.structField("pool", /* @__PURE__ */ $.pointerType("sync.Pool"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("offset", /* @__PURE__ */ $.basicType("int"), [2], 32, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("batchSize", /* @__PURE__ */ $.basicType("int"), [3], 40, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("conn", "net.Conn", [4], 48, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("err", "error", [5], 64, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export class ioError {
	public get error(): $.GoError {
		return this._fields.error
	}

	public set error(value: $.GoError) {
		this._fields.error = value
	}

	public _fields: {
		error: $.GoError
	}

	constructor(init?: Partial<{error?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			error: init?.error ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ioError {
		return new ioError(this, true)
	}

	public __goscriptAssign(source: ioError): void {
		const target = this._fields
		const values = source._fields
		target.error = $.assignFieldValue(target.error, values.error, "error")
	}

	public Unwrap(): $.GoError {
		const i = this;
		return i.error
	}

	public async Error(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<$.GoError, null>>(this.error).Error()
	}

	static __typeInfo = $.registerStructType(
		"transport.ioError",
		() => new ioError(),
		() => [$.methodSignature("Unwrap", [], ["error"]), $.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		ioError,
		() => [/* @__PURE__ */ $.structField("error", "error", [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport", anonymous: true })]
	)
}

export class framer {
	public get writer(): bufWriter | $.VarRef<bufWriter> | null {
		return this._fields.writer
	}

	public set writer(value: bufWriter | $.VarRef<bufWriter> | null) {
		this._fields.writer = value
	}

	public get fr(): http2.Framer | $.VarRef<http2.Framer> | null {
		return this._fields.fr
	}

	public set fr(value: http2.Framer | $.VarRef<http2.Framer> | null) {
		this._fields.fr = value
	}

	public _fields: {
		writer: bufWriter | $.VarRef<bufWriter> | null
		fr: http2.Framer | $.VarRef<http2.Framer> | null
	}

	constructor(init?: Partial<{writer?: bufWriter | $.VarRef<bufWriter> | null, fr?: http2.Framer | $.VarRef<http2.Framer> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			writer: init?.writer ?? (null! as bufWriter | $.VarRef<bufWriter> | null),
			fr: init?.fr ?? (null! as http2.Framer | $.VarRef<http2.Framer> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): framer {
		return new framer(this, true)
	}

	public __goscriptAssign(source: framer): void {
		const target = this._fields
		const values = source._fields
		target.writer = values.writer
		target.fr = values.fr
	}

	static __typeInfo = $.registerStructType(
		"transport.framer",
		() => new framer(),
		() => [],
		framer,
		() => [/* @__PURE__ */ $.structField("writer", /* @__PURE__ */ $.pointerType("transport.bufWriter"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/transport" }), /* @__PURE__ */ $.structField("fr", /* @__PURE__ */ $.pointerType("http2.Framer"), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/transport" })]
	)
}

export const http2MaxFrameLen: number = 16384

export const http2InitHeaderTableSize: number = 4096

export const binHdrSuffix: string = "-bin"

export const hour: timeoutUnit = 72

export const minute: timeoutUnit = 77

export const second: timeoutUnit = 83

export const millisecond: timeoutUnit = 109

export const microsecond: timeoutUnit = 117

export const nanosecond: timeoutUnit = 110

export const spaceByte: number = 32

export const tildeByte: number = 126

export const percentByte: number = 37

export let clientPreface: $.Slice<number> = new Uint8Array([80, 82, 73, 32, 42, 32, 72, 84, 84, 80, 47, 50, 46, 48, 13, 10, 13, 10, 83, 77, 13, 10, 13, 10])

export function __goscript_set_clientPreface(__goscriptValue: $.Slice<number>): void {
	clientPreface = __goscriptValue
}

export let http2ErrConvTab: globalThis.Map<http2.ErrCode, codes.Code> | null = $.makeMap<http2.ErrCode, codes.Code>([[0, 13], [1, 13], [2, 13], [3, 8], [4, 13], [5, 13], [6, 13], [7, 14], [8, 1], [9, 13], [10, 13], [11, 8], [12, 7], [13, 13]])

export function __goscript_set_http2ErrConvTab(__goscriptValue: globalThis.Map<http2.ErrCode, codes.Code> | null): void {
	http2ErrConvTab = __goscriptValue
}

export let HTTPStatusConvTab: globalThis.Map<number, codes.Code> | null = $.makeMap<number, codes.Code>([[400, 13], [401, 16], [403, 7], [404, 12], [429, 14], [502, 14], [503, 14], [504, 14]])

export function __goscript_set_HTTPStatusConvTab(__goscriptValue: globalThis.Map<number, codes.Code> | null): void {
	HTTPStatusConvTab = __goscriptValue
}

export let grpcStatusDetailsBinHeader: string = "grpc-status-details-bin"

export function __goscript_set_grpcStatusDetailsBinHeader(__goscriptValue: string): void {
	grpcStatusDetailsBinHeader = __goscriptValue
}

export function isReservedHeader(hdr: string): boolean {
	if ((!$.stringEqual(hdr, "")) && ($.indexString(hdr, 0) == 58)) {
		return true
	}
	switch (hdr) {
		case "content-type":
		case "user-agent":
		case "grpc-message-type":
		case "grpc-encoding":
		case "grpc-message":
		case "grpc-status":
		case "grpc-timeout":
		case "te":
		{
			return true
			break
		}
		default:
		{
			return false
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function isWhitelistedHeader(hdr: string): boolean {
	switch (hdr) {
		case ":authority":
		case "user-agent":
		{
			return true
			break
		}
		default:
		{
			return false
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function encodeBinHeader(v: $.Slice<number>): string {
	return base64.Encoding.prototype.EncodeToString.call(base64.RawStdEncoding, v)
}

export function decodeBinHeader(v: string): [$.Slice<number>, $.GoError] {
	if (($.stringLen(v) % 4) == 0) {
		// Input was padded, or padding was not necessary.
		return base64.Encoding.prototype.DecodeString.call(base64.StdEncoding, v)
	}
	return base64.Encoding.prototype.DecodeString.call(base64.RawStdEncoding, v)
}

export function encodeMetadataHeader(k: string, v: string): string {
	if (strings.HasSuffix(k, "-bin")) {
		return encodeBinHeader($.stringToBytes(v))
	}
	return v
}

export function decodeMetadataHeader(k: string, v: string): [string, $.GoError] {
	if (strings.HasSuffix(k, "-bin")) {
		let __goscriptTuple0: any = decodeBinHeader(v)
		let b: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		return [$.bytesToString(b), err]
	}
	return [v, null]
}

export function timeoutUnitToDuration(u: timeoutUnit): [time.Duration, boolean] {
	let d: time.Duration = 0n
	let ok: boolean = false
	switch (u) {
		case 72:
		{
			return [3600000000000n, true]
			break
		}
		case 77:
		{
			return [60000000000n, true]
			break
		}
		case 83:
		{
			return [1000000000n, true]
			break
		}
		case 109:
		{
			return [1000000n, true]
			break
		}
		case 117:
		{
			return [1000n, true]
			break
		}
		case 110:
		{
			return [1n, true]
			break
		}
		default:
		{
			break
		}
	}
	return [d, ok]
}

export function decodeTimeout(s: string): [time.Duration, $.GoError] {
	let size = $.stringLen(s)
	if (size < 2) {
		return [0n, fmt.Errorf("transport: timeout string is too short: %q", s)]
	}
	if (size > 9) {
		// Spec allows for 8 digits plus the unit.
		return [0n, fmt.Errorf("transport: timeout string is too long: %q", s)]
	}
	let unit = $.uint($.indexString(s, size - 1), 8)
	let [d, ok] = timeoutUnitToDuration(unit)
	if (!ok) {
		return [0n, fmt.Errorf("transport: timeout unit is not recognized: %q", s)]
	}
	let [t, err] = strconv.ParseInt($.sliceStringOrBytes(s, undefined, size - 1), 10, 64)
	if (err != null) {
		return [0n, err]
	}
	const maxHours: bigint = 2562047n
	if ((d == 3600000000000n) && (t > 2562047n)) {
		// This timeout would overflow math.MaxInt64; clamp it.
		return [9223372036854775807n, null]
	}
	return [$.int64Mul(d, $.int64(t)), null]
}

export async function encodeGrpcMessage(msg: string): globalThis.Promise<string> {
	if ($.stringEqual(msg, "")) {
		return ""
	}
	let lenMsg = $.stringLen(msg)
	for (let i = 0; i < lenMsg; i++) {
		let c = $.indexString(msg, i)
		if (!(((c >= 32) && (c <= 126)) && (c != 37))) {
			return encodeGrpcMessageUnchecked(msg)
		}
	}
	return msg
}

export async function encodeGrpcMessageUnchecked(msg: string): globalThis.Promise<string> {
	let sb: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
	while ($.stringLen(msg) > 0) {
		let [r, size] = utf8.DecodeRuneInString(msg)
		for (let __goscriptRangeTarget0 = $.stringToBytes($.runeToString(r)), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let b = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
			if (size > 1) {
				// If size > 1, r is not ascii. Always do percent encoding.
				await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(sb, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, "%%%02X", $.basicInterfaceValue(b, "byte", "uint8"))
				continue
			}

			// The for loop is necessary even if size == 1. r could be
			// utf8.RuneError.
			//
			// fmt.Sprintf("%%%02X", utf8.RuneError) gives "%FFFD".
			if (((b >= 32) && (b <= 126)) && (b != 37)) {
				sb.value.WriteByte(b)
			} else {
				await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(sb, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, "%%%02X", $.basicInterfaceValue(b, "byte", "uint8"))
			}
		}
		msg = $.sliceStringOrBytes(msg, size, undefined)
	}
	return sb.value.String()
}

export function decodeGrpcMessage(msg: string): string {
	if ($.stringEqual(msg, "")) {
		return ""
	}
	let lenMsg = $.stringLen(msg)
	for (let i = 0; i < lenMsg; i++) {
		if (($.indexString(msg, i) == 37) && ((i + 2) < lenMsg)) {
			return decodeGrpcMessageUnchecked(msg)
		}
	}
	return msg
}

export function decodeGrpcMessageUnchecked(msg: string): string {
	let sb: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
	let lenMsg = $.stringLen(msg)
	for (let i = 0; i < lenMsg; i++) {
		let c = $.indexString(msg, i)
		if ((c == 37) && ((i + 2) < lenMsg)) {
			let [parsed, err] = strconv.ParseUint($.sliceStringOrBytes(msg, i + 1, i + 3), 16, 8)
			if (err != null) {
				sb.value.WriteByte(c)
			} else {
				sb.value.WriteByte($.uint(parsed, 8))
				i = i + (2)
			}
		} else {
			sb.value.WriteByte(c)
		}
	}
	return sb.value.String()
}

export function newBufWriter(conn: net2.Conn | null, batchSize: number, pool: sync.Pool | $.VarRef<sync.Pool> | null): bufWriter | $.VarRef<bufWriter> | null {
	let w: bufWriter | $.VarRef<bufWriter> | null = new bufWriter({batchSize: batchSize, conn: conn, pool: pool})
	// this indicates that we should use non shared buf
	if (pool == null) {
		$.pointerValue<bufWriter>(w).buf = $.makeSlice<number>(batchSize, undefined, "byte")
	}
	return w
}

export function isIOError(err: $.GoError): boolean {
	return errors.As($.pointerValueOrNil(err)!, $.interfaceValue(new ioError(), "*transport.ioError", /* @__PURE__ */ $.pointerType("transport.ioError")))
}

export function toIOError(err: $.GoError): $.GoError {
	if (err == null) {
		return null
	}
	return $.interfaceValue<$.GoError>(new ioError({error: err}, true), "transport.ioError", "transport.ioError")
}

export let writeBufferPoolMap: globalThis.Map<number, sync.Pool | $.VarRef<sync.Pool> | null> | null = $.makeMap<number, sync.Pool | $.VarRef<sync.Pool> | null>()

export function __goscript_set_writeBufferPoolMap(__goscriptValue: globalThis.Map<number, sync.Pool | $.VarRef<sync.Pool> | null> | null): void {
	writeBufferPoolMap = __goscriptValue
}

export let writeBufferMutex: $.VarRef<sync.Mutex> = $.varRef($.markAsStructValue(new sync.Mutex()))

export function __goscript_set_writeBufferMutex(__goscriptValue: sync.Mutex): void {
	$.assignStruct(writeBufferMutex.value, __goscriptValue)
}

export async function newFramer(conn: net2.Conn | null, writeBufferSize: number, readBufferSize: number, sharedWriteBuffer: boolean, maxHeaderListSize: number): globalThis.Promise<framer | $.VarRef<framer> | null> {
	if (writeBufferSize < 0) {
		writeBufferSize = 0
	}
	let r: io.Reader | null = (conn as io.Reader | null)
	if (readBufferSize > 0) {
		r = $.interfaceValue<io.Reader | null>(bufio.NewReaderSize(r, readBufferSize), "*bufio.Reader", /* @__PURE__ */ $.pointerType("bufio.Reader"))
	}
	let pool: sync.Pool | $.VarRef<sync.Pool> | null = null! as sync.Pool | $.VarRef<sync.Pool> | null
	if (sharedWriteBuffer) {
		pool = await getWriteBufferPool(writeBufferSize)
	}
	let w: bufWriter | $.VarRef<bufWriter> | null = newBufWriter(conn, writeBufferSize, pool)
	let f: framer | $.VarRef<framer> | null = (() => { const __goscriptLiteralField0 = http2.NewFramer($.interfaceValue<io.Writer | null>(w, "*transport.bufWriter", /* @__PURE__ */ $.pointerType("transport.bufWriter")), r); return new framer({writer: w, fr: __goscriptLiteralField0}) })()
	let f$: framer = f == null ? $.pointerTarget<framer>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<framer>(f)
	http2.Framer.prototype.SetMaxReadFrameSize.call((f$ as framer).fr, 16384)
	// Opt-in to Frame reuse API on framer to reduce garbage.
	// Frames aren't safe to read from after a subsequent call to ReadFrame.
	http2.Framer.prototype.SetReuseFrames.call((f$ as framer).fr)
	$.pointerValue<http2.Framer>((f$ as framer).fr).MaxHeaderListSize = maxHeaderListSize
	$.pointerValue<http2.Framer>((f$ as framer).fr).ReadMetaHeaders = await hpack.NewDecoder(4096, (null as ((f: hpack.HeaderField) => void) | null))
	return f
}

export async function getWriteBufferPool(size: number): globalThis.Promise<sync.Pool | $.VarRef<sync.Pool> | null> {
	using __defer = new $.DisposableStack()
	await writeBufferMutex.value.Lock()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())(writeBufferMutex.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })
	let __goscriptTuple2: any = $.mapGet<number, sync.Pool | $.VarRef<sync.Pool> | null, sync.Pool | $.VarRef<sync.Pool> | null>(writeBufferPoolMap, size, null)
	let pool: sync.Pool | $.VarRef<sync.Pool> | null = __goscriptTuple2[0]
	let ok = __goscriptTuple2[1]
	if (ok) {
		return pool
	}
	pool = new sync.Pool({New: $.functionValue((): any => {
		let b: $.VarRef<$.Slice<number>> = $.varRef($.makeSlice<number>(size, undefined, "byte"))
		return $.interfaceValue(b, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})
	$.mapSet(writeBufferPoolMap, size, pool)
	return pool
}

export function parseDialTarget(target: string): [string, string] {
	let __goscriptShadow1 = "tcp"
	let m1 = strings.Index(target, ":")
	let m2 = strings.Index(target, ":/")
	// handle unix:addr which will fail with url.Parse
	if ((m1 >= 0) && (m2 < 0)) {
		{
			let n = $.sliceStringOrBytes(target, 0, m1)
			if ($.stringEqual(n, "unix")) {
				return [n, $.sliceStringOrBytes(target, m1 + 1, undefined)]
			}
		}
	}
	if (m2 >= 0) {
		let __goscriptTuple3: any = url.Parse(target)
		let t: url.URL | $.VarRef<url.URL> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		let t$: url.URL = t == null ? $.pointerTarget<url.URL>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<url.URL>(t)
		if (err != null) {
			return [__goscriptShadow1, target]
		}
		let scheme = (t$ as url.URL).Scheme
		let addr = (t$ as url.URL).Path
		if ($.stringEqual(scheme, "unix")) {
			if ($.stringEqual(addr, "")) {
				addr = (t$ as url.URL).Host
			}
			return [scheme, addr]
		}
	}
	return [__goscriptShadow1, target]
}
