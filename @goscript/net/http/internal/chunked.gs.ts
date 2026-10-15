// Generated file based on chunked.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"

$.registerTypePackagePath("net/http/internal", ["internal.chunkedReader", "internal.chunkedWriter", "internal.FlushAfterChunkWriter"])

export class chunkedReader {
	public get r(): bufio.Reader | $.VarRef<bufio.Reader> | null {
		return this._fields.r
	}

	public set r(value: bufio.Reader | $.VarRef<bufio.Reader> | null) {
		this._fields.r = value
	}

	public get n(): bigint {
		return this._fields.n
	}

	public set n(value: bigint) {
		this._fields.n = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get buf(): Uint8Array {
		return this._fields.buf
	}

	public set buf(value: Uint8Array) {
		this._fields.buf = value
	}

	public get checkEnd(): boolean {
		return this._fields.checkEnd
	}

	public set checkEnd(value: boolean) {
		this._fields.checkEnd = value
	}

	public get excess(): bigint {
		return this._fields.excess
	}

	public set excess(value: bigint) {
		this._fields.excess = value
	}

	public _fields: {
		r: bufio.Reader | $.VarRef<bufio.Reader> | null
		n: bigint
		err: $.GoError
		buf: Uint8Array
		checkEnd: boolean
		excess: bigint
	}

	constructor(init?: Partial<{r?: bufio.Reader | $.VarRef<bufio.Reader> | null, n?: bigint, err?: $.GoError, buf?: Uint8Array, checkEnd?: boolean, excess?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			r: init?.r ?? (null! as bufio.Reader | $.VarRef<bufio.Reader> | null),
			n: init?.n ?? (0n as bigint),
			err: init?.err ?? (null! as $.GoError),
			buf: init?.buf !== undefined ? $.cloneArrayValue(init.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 2)) : $.arrayValue(new Uint8Array(2)),
			checkEnd: init?.checkEnd ?? (false as boolean),
			excess: init?.excess ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): chunkedReader {
		return new chunkedReader(this, true)
	}

	public __goscriptAssign(source: chunkedReader): void {
		const target = this._fields
		const values = source._fields
		target.r = values.r
		target.n = values.n
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.buf = $.assignFieldValue(target.buf, values.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 2))
		target.checkEnd = values.checkEnd
		target.excess = values.excess
	}

	public async Read(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let cr: chunkedReader | $.VarRef<chunkedReader> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const cr$: chunkedReader = cr == null ? $.pointerTarget<chunkedReader>(cr) : (cr as any).__isVarRef === true ? (cr as any).value : (cr as any).__goValue === undefined ? (cr as any) : $.pointerTarget<chunkedReader>(cr)
		while ((cr$ as chunkedReader).err == null) {
			if ((cr$ as chunkedReader).checkEnd) {
				if ((n > 0) && (bufio.Reader.prototype.Buffered.call((cr$ as chunkedReader).r) < 2)) {
					// We have some data. Return early (per the io.Reader
					// contract) instead of potentially blocking while
					// reading more.
					break
				}
				{
					let __goscriptTuple1: any = await io.ReadFull($.pointerValueOrNil($.interfaceValue<io.Reader | null>((cr$ as chunkedReader).r, "*bufio.Reader", /* @__PURE__ */ $.pointerType("bufio.Reader")))!, $.goSlice((cr$ as chunkedReader).buf, undefined, 2));
					;(cr$ as chunkedReader).err = __goscriptTuple1[1]
					if ((cr$ as chunkedReader).err == null) {
						if (!$.stringEqual($.bytesToString($.goSlice((cr$ as chunkedReader).buf, undefined, undefined)), "\r\n")) {
							;(cr$ as chunkedReader).err = errors.New("malformed chunked encoding")
							break
						}
					} else {
						if ($.comparableEqual((cr$ as chunkedReader).err, io.EOF)) {
							;(cr$ as chunkedReader).err = io.ErrUnexpectedEOF
						}
						break
					}
				}
				;(cr$ as chunkedReader).checkEnd = false
			}
			if ((cr$ as chunkedReader).n == 0n) {
				if ((n > 0) && !await (cr !== null && (cr as any).__isVarRef !== true && (cr as any).__goValue === undefined ? ((cr as any) as chunkedReader).chunkHeaderAvailable() : chunkedReader.prototype.chunkHeaderAvailable.call(cr))) {
					// We've read enough. Don't potentially block
					// reading a new chunk header.
					break
				}
				await (cr !== null && (cr as any).__isVarRef !== true && (cr as any).__goValue === undefined ? ((cr as any) as chunkedReader).beginChunk() : chunkedReader.prototype.beginChunk.call(cr))
				continue
			}
			if ($.sliceLen(b) == 0) {
				break
			}
			let rbuf: $.Slice<number> = b
			if ($.uint64($.sliceLen(rbuf)) > (cr$ as chunkedReader).n) {
				rbuf = $.goSlice(rbuf, undefined, globalThis.Number((cr$ as chunkedReader).n))
			}
			let n0: number = 0
			let __goscriptTuple2: any = await bufio.Reader.prototype.Read.call((cr$ as chunkedReader).r, rbuf)
			n0 = __goscriptTuple2[0];
			;(cr$ as chunkedReader).err = __goscriptTuple2[1]
			n = n + (n0)
			b = $.goSlice(b, n0, undefined);
			;(cr$ as chunkedReader).n = $.uint64Sub((cr$ as chunkedReader).n, $.uint64(n0))
			// If we're at the end of a chunk, read the next two
			// bytes to verify they are "\r\n".
			if (((cr$ as chunkedReader).n == 0n) && ((cr$ as chunkedReader).err == null)) {
				;(cr$ as chunkedReader).checkEnd = true
			} else {
				if ($.comparableEqual((cr$ as chunkedReader).err, io.EOF)) {
					;(cr$ as chunkedReader).err = io.ErrUnexpectedEOF
				}
			}
		}
		return [n, (cr$ as chunkedReader).err]
	}

	public async beginChunk(): globalThis.Promise<void> {
		let cr: chunkedReader | $.VarRef<chunkedReader> | null = this;
		const cr$: chunkedReader = cr == null ? $.pointerTarget<chunkedReader>(cr) : (cr as any).__isVarRef === true ? (cr as any).value : (cr as any).__goValue === undefined ? (cr as any) : $.pointerTarget<chunkedReader>(cr)
		// chunk-size CRLF
		let line: $.Slice<number> = null! as $.Slice<number>
		let __goscriptTuple3: any = await readChunkLine((cr$ as chunkedReader).r)
		line = __goscriptTuple3[0];
		;(cr$ as chunkedReader).err = __goscriptTuple3[1]
		if ((cr$ as chunkedReader).err != null) {
			return
		}
		;(cr$ as chunkedReader).excess = $.int64Add((cr$ as chunkedReader).excess, $.int64Add($.int64($.sliceLen(line)), 2n))
		line = trimTrailingWhitespace(line)
		let __goscriptTuple4: any = removeChunkExtension(line)
		line = __goscriptTuple4[0];
		;(cr$ as chunkedReader).err = __goscriptTuple4[1]
		if ((cr$ as chunkedReader).err != null) {
			return
		}
		let __goscriptTuple5: any = parseHexUint(line);
		;(cr$ as chunkedReader).n = __goscriptTuple5[0];
		;(cr$ as chunkedReader).err = __goscriptTuple5[1]
		if ((cr$ as chunkedReader).err != null) {
			return
		}
		// A sender who sends one byte per chunk will send 5 bytes of overhead
		// for every byte of data. ("1\r\nX\r\n" to send "X".)
		// We want to allow this, since streaming a byte at a time can be legitimate.
		//
		// A sender can use chunk extensions to add arbitrary amounts of additional
		// data per byte read. ("1;very long extension\r\nX\r\n" to send "X".)
		// We don't want to disallow extensions (although we discard them),
		// but we also don't want to allow a sender to reduce the signal/noise ratio
		// arbitrarily.
		//
		// We track the amount of excess overhead read,
		// and produce an error if it grows too large.
		//
		// Currently, we say that we're willing to accept 16 bytes of overhead per chunk,
		// plus twice the amount of real data in the chunk.
		;(cr$ as chunkedReader).excess = $.int64Sub((cr$ as chunkedReader).excess, $.int64Add(16n, ($.int64Mul(2n, $.int64((cr$ as chunkedReader).n)))));
		;(cr$ as chunkedReader).excess = $.max((cr$ as chunkedReader).excess, 0n)
		if ((cr$ as chunkedReader).excess > 16384n) {
			;(cr$ as chunkedReader).err = errors.New("chunked encoding contains too much non-data")
		}
		if ((cr$ as chunkedReader).n == 0n) {
			;(cr$ as chunkedReader).err = io.EOF
		}
	}

	public async chunkHeaderAvailable(): globalThis.Promise<boolean> {
		const cr: chunkedReader | $.VarRef<chunkedReader> | null = this;
		const cr$: chunkedReader = cr == null ? $.pointerTarget<chunkedReader>(cr) : (cr as any).__isVarRef === true ? (cr as any).value : (cr as any).__goValue === undefined ? (cr as any) : $.pointerTarget<chunkedReader>(cr)
		let n = bufio.Reader.prototype.Buffered.call((cr$ as chunkedReader).r)
		if (n > 0) {
			let __goscriptTuple6: any = await bufio.Reader.prototype.Peek.call((cr$ as chunkedReader).r, n)
			let peek: $.Slice<number> = __goscriptTuple6[0]
			return bytes.IndexByte(peek, 10) >= 0
		}
		return false
	}

	static __typeInfo = $.registerStructType(
		"internal.chunkedReader",
		() => new chunkedReader(),
		() => [$.methodSignature("Read", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("beginChunk", [], [], true), $.methodSignature("chunkHeaderAvailable", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		chunkedReader,
		() => [/* @__PURE__ */ $.structField("r", /* @__PURE__ */ $.pointerType("bufio.Reader"), [0], 0, false, { pkgPath: "net/http/internal" }), /* @__PURE__ */ $.structField("n", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "net/http/internal" }), /* @__PURE__ */ $.structField("err", "error", [2], 16, false, { pkgPath: "net/http/internal" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 2), [3], 32, false, { pkgPath: "net/http/internal" }), /* @__PURE__ */ $.structField("checkEnd", /* @__PURE__ */ $.basicType("bool"), [4], 34, false, { pkgPath: "net/http/internal" }), /* @__PURE__ */ $.structField("excess", /* @__PURE__ */ $.basicType("int64"), [5], 40, false, { pkgPath: "net/http/internal" })]
	)
}

export class chunkedWriter {
	public get Wire(): io.Writer | null {
		return this._fields.Wire
	}

	public set Wire(value: io.Writer | null) {
		this._fields.Wire = value
	}

	public _fields: {
		Wire: io.Writer | null
	}

	constructor(init?: Partial<{Wire?: io.Writer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Wire: init?.Wire ?? (null! as io.Writer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): chunkedWriter {
		return new chunkedWriter(this, true)
	}

	public __goscriptAssign(source: chunkedWriter): void {
		const target = this._fields
		const values = source._fields
		target.Wire = $.assignFieldValue(target.Wire, values.Wire, "io.Writer")
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const cw: chunkedWriter | $.VarRef<chunkedWriter> | null = this;
		let [, err] = await io.WriteString($.pointerValueOrNil($.pointerValue<chunkedWriter>(cw).Wire)!, "0\r\n")
		return err
	}

	public async Write(data: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const cw: chunkedWriter | $.VarRef<chunkedWriter> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const cw$: chunkedWriter = cw == null ? $.pointerTarget<chunkedWriter>(cw) : (cw as any).__isVarRef === true ? (cw as any).value : (cw as any).__goValue === undefined ? (cw as any) : $.pointerTarget<chunkedWriter>(cw)

		// Don't send 0-length data. It looks like EOF for chunked encoding.
		if ($.sliceLen(data) == 0) {
			return [0, null]
		}

		{
			let __goscriptTuple9: any = await fmt.Fprintf($.pointerValueOrNil((cw$ as chunkedWriter).Wire)!, "%x\r\n", $.basicInterfaceValue($.sliceLen(data), "int"))
			err = __goscriptTuple9[1]
			if (err != null) {
				return [0, err]
			}
		}
		{
			let __goscriptTuple10: any = await $.pointerValue<Exclude<io.Writer, null>>((cw$ as chunkedWriter).Wire).Write(data)
			n = __goscriptTuple10[0]
			err = __goscriptTuple10[1]
			if (err != null) {
				return [n, err]
			}
		}
		if (n != $.sliceLen(data)) {
			err = io.ErrShortWrite
			return [n, err]
		}
		{
			let __goscriptTuple11: any = await io.WriteString($.pointerValueOrNil((cw$ as chunkedWriter).Wire)!, "\r\n")
			err = __goscriptTuple11[1]
			if (err != null) {
				return [n, err]
			}
		}
		{
			let __goscriptTuple12: any = $.typeAssertTuple<FlushAfterChunkWriter | $.VarRef<FlushAfterChunkWriter> | null>((cw$ as chunkedWriter).Wire, /* @__PURE__ */ $.pointerType("internal.FlushAfterChunkWriter"))
			let bw: FlushAfterChunkWriter | $.VarRef<FlushAfterChunkWriter> | null = __goscriptTuple12[0]
			let ok = __goscriptTuple12[1]
			if (ok) {
				err = await $.pointerValue<bufio.Writer>($.pointerValue<FlushAfterChunkWriter>(bw).Writer).Flush()
			}
		}
		return [n, err]
	}

	static __typeInfo = $.registerStructType(
		"internal.chunkedWriter",
		() => new chunkedWriter(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Write", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		chunkedWriter,
		() => [/* @__PURE__ */ $.structField("Wire", "io.Writer", [0], 0, true)]
	)
}

export class FlushAfterChunkWriter {
	public get Writer(): bufio.Writer | $.VarRef<bufio.Writer> | null {
		return this._fields.Writer
	}

	public set Writer(value: bufio.Writer | $.VarRef<bufio.Writer> | null) {
		this._fields.Writer = value
	}

	public _fields: {
		Writer: bufio.Writer | $.VarRef<bufio.Writer> | null
	}

	constructor(init?: Partial<{Writer?: bufio.Writer | $.VarRef<bufio.Writer> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Writer: init?.Writer ?? (null! as bufio.Writer | $.VarRef<bufio.Writer> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FlushAfterChunkWriter {
		return new FlushAfterChunkWriter(this, true)
	}

	public __goscriptAssign(source: FlushAfterChunkWriter): void {
		const target = this._fields
		const values = source._fields
		target.Writer = values.Writer
	}

	public Available(): any {
		return $.pointerValue<bufio.Writer>(this.Writer).Available()
	}

	public AvailableBuffer(): any {
		return $.pointerValue<bufio.Writer>(this.Writer).AvailableBuffer()
	}

	public Buffered(): any {
		return $.pointerValue<bufio.Writer>(this.Writer).Buffered()
	}

	public async Flush(): globalThis.Promise<any> {
		return await $.pointerValue<bufio.Writer>(this.Writer).Flush()
	}

	public async ReadFrom(r: any): globalThis.Promise<any> {
		return await $.pointerValue<bufio.Writer>(this.Writer).ReadFrom(r)
	}

	public Reset(w: any): any {
		return $.pointerValue<bufio.Writer>(this.Writer).Reset(w)
	}

	public Size(): any {
		return $.pointerValue<bufio.Writer>(this.Writer).Size()
	}

	public async Write(p: any): globalThis.Promise<any> {
		return await $.pointerValue<bufio.Writer>(this.Writer).Write(p)
	}

	public async WriteByte(c: any): globalThis.Promise<any> {
		return await $.pointerValue<bufio.Writer>(this.Writer).WriteByte(c)
	}

	public async WriteRune(r: any): globalThis.Promise<any> {
		return await $.pointerValue<bufio.Writer>(this.Writer).WriteRune(r)
	}

	public async WriteString(s: any): globalThis.Promise<any> {
		return await $.pointerValue<bufio.Writer>(this.Writer).WriteString(s)
	}

	static __typeInfo = $.registerStructType(
		"internal.FlushAfterChunkWriter",
		() => new FlushAfterChunkWriter(),
		() => [$.methodSignature("Available", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("AvailableBuffer", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Buffered", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Flush", [], ["error"]), $.methodSignature("ReadFrom", [["r", "io.Reader"]], [["n", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]]), $.methodSignature("Reset", [["w", "io.Writer"]]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["nn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("WriteByte", [["c", /* @__PURE__ */ $.basicType("uint8")]], ["error"]), $.methodSignature("WriteRune", [["r", /* @__PURE__ */ $.basicType("int32")]], [["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("int"), "error"])],
		FlushAfterChunkWriter,
		() => [/* @__PURE__ */ $.structField("Writer", /* @__PURE__ */ $.pointerType("bufio.Writer"), [0], 0, true, { anonymous: true })]
	)
}

export const maxLineLength: number = 4096

export let ErrLineTooLong: $.GoError = errors.New("header line too long")

export function __goscript_set_ErrLineTooLong(__goscriptValue: $.GoError): void {
	ErrLineTooLong = __goscriptValue
}

export function NewChunkedReader(r: io.Reader | null): io.Reader | null {
	let __goscriptTuple0: any = $.typeAssertTuple<bufio.Reader | $.VarRef<bufio.Reader> | null>(r, /* @__PURE__ */ $.pointerType("bufio.Reader"))
	let br: bufio.Reader | $.VarRef<bufio.Reader> | null = __goscriptTuple0[0]
	let ok = __goscriptTuple0[1]
	if (!ok) {
		br = bufio.NewReader(r)
	}
	return $.interfaceValue<io.Reader | null>(new chunkedReader({r: br}), "*internal.chunkedReader", /* @__PURE__ */ $.pointerType("internal.chunkedReader"))
}

export async function readChunkLine(b: bufio.Reader | $.VarRef<bufio.Reader> | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let __goscriptTuple7: any = await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as bufio.Reader).ReadSlice(10) : bufio.Reader.prototype.ReadSlice.call(b, 10))
	let p: $.Slice<number> = __goscriptTuple7[0]
	let err = __goscriptTuple7[1]
	if (err != null) {
		// We always know when EOF is coming.
		// If the caller asked for a line, there should be a line.
		if ($.comparableEqual(err, io.EOF)) {
			err = io.ErrUnexpectedEOF
		} else {
			if ($.comparableEqual(err, bufio.ErrBufferFull)) {
				err = ErrLineTooLong
			}
		}
		return [null, err]
	}

	// RFC 9112 permits parsers to accept a bare \n as a line ending in headers,
	// but not in chunked encoding lines. See https://www.rfc-editor.org/errata/eid7633,
	// which explicitly rejects a clarification permitting \n as a chunk terminator.
	//
	// Verify that the line ends in a CRLF, and that no CRs appear before the end.
	{
		let idx = bytes.IndexByte(p, 13)
		if (idx == -1) {
			return [null, errors.New("chunked line ends with bare LF")]
		} else {
			if (idx != ($.sliceLen(p) - 2)) {
				return [null, errors.New("invalid CR in chunked line")]
			}
		}
	}
	p = $.goSlice(p, undefined, $.sliceLen(p) - 2)

	if ($.sliceLen(p) >= 4096) {
		return [null, ErrLineTooLong]
	}
	return [p, null]
}

export function trimTrailingWhitespace(b: $.Slice<number>): $.Slice<number> {
	while (($.sliceLen(b) > 0) && isOWS($.arrayIndex(b!, $.sliceLen(b) - 1))) {
		b = $.goSlice(b, undefined, $.sliceLen(b) - 1)
	}
	return b
}

export function isOWS(b: number): boolean {
	return (b == 32) || (b == 9)
}

export let semi: $.Slice<number> = new Uint8Array([59])

export function __goscript_set_semi(__goscriptValue: $.Slice<number>): void {
	semi = __goscriptValue
}

export function removeChunkExtension(p: $.Slice<number>): [$.Slice<number>, $.GoError] {
	let __goscriptTuple8: any = bytes.Cut(p, semi)
	p = __goscriptTuple8[0]
	// TODO: care about exact syntax of chunk extensions? We're
	// ignoring and stripping them anyway. For now just never
	// return an error.
	return [p, null]
}

export function NewChunkedWriter(w: io.Writer | null): io.WriteCloser | null {
	return $.interfaceValue<io.WriteCloser | null>(new chunkedWriter({Wire: w}), "*internal.chunkedWriter", /* @__PURE__ */ $.pointerType("internal.chunkedWriter"))
}

export function parseHexUint(v: $.Slice<number>): [bigint, $.GoError] {
	let n: bigint = 0n
	let err: $.GoError = null! as $.GoError
	if ($.sliceLen(v) == 0) {
		return [0n, errors.New("empty hex number for chunk length")]
	}
	for (let __goscriptRangeTarget0 = v, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let b = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as number), 8)
		switch ((true as boolean)) {
			case (48 <= b) && (b <= 57):
			{
				b = $.uint(((b - 48) & 0xff), 8)
				break
			}
			case (97 <= b) && (b <= 102):
			{
				b = $.uint((((((b - 97) & 0xff)) + 10) & 0xff), 8)
				break
			}
			case (65 <= b) && (b <= 70):
			{
				b = $.uint((((((b - 65) & 0xff)) + 10) & 0xff), 8)
				break
			}
			default:
			{
				return [0n, errors.New("invalid byte in chunk length")]
				break
			}
		}
		if (i == 16) {
			return [0n, errors.New("http chunk length too large")]
		}
		n = $.uint64Shl(n, 4n)
		n = $.uint64Or(n, $.uint64(b))
	}
	return [n, err]
}
