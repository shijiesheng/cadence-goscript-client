// Generated file based on scan.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_bufio from "./bufio.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/unicode/utf8/index.js"
import "./bufio.gs.ts"

export type SplitFunc = ((data: $.Slice<number>, atEOF: boolean) => [number, $.Slice<number>, $.GoError] | globalThis.Promise<[number, $.Slice<number>, $.GoError]>) | null

export class Scanner {
	public get r(): io.Reader | null {
		return this._fields.r
	}

	public set r(value: io.Reader | null) {
		this._fields.r = value
	}

	public get split(): ((data: $.Slice<number>, atEOF: boolean) => [number, $.Slice<number>, $.GoError] | globalThis.Promise<[number, $.Slice<number>, $.GoError]>) | null {
		return this._fields.split
	}

	public set split(value: ((data: $.Slice<number>, atEOF: boolean) => [number, $.Slice<number>, $.GoError] | globalThis.Promise<[number, $.Slice<number>, $.GoError]>) | null) {
		this._fields.split = value
	}

	public get maxTokenSize(): number {
		return this._fields.maxTokenSize
	}

	public set maxTokenSize(value: number) {
		this._fields.maxTokenSize = value
	}

	public get token(): $.Slice<number> {
		return this._fields.token
	}

	public set token(value: $.Slice<number>) {
		this._fields.token = value
	}

	public get buf(): $.Slice<number> {
		return this._fields.buf
	}

	public set buf(value: $.Slice<number>) {
		this._fields.buf = value
	}

	public get start(): number {
		return this._fields.start
	}

	public set start(value: number) {
		this._fields.start = value
	}

	public get end(): number {
		return this._fields.end
	}

	public set end(value: number) {
		this._fields.end = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get empties(): number {
		return this._fields.empties
	}

	public set empties(value: number) {
		this._fields.empties = value
	}

	public get scanCalled(): boolean {
		return this._fields.scanCalled
	}

	public set scanCalled(value: boolean) {
		this._fields.scanCalled = value
	}

	public get done(): boolean {
		return this._fields.done
	}

	public set done(value: boolean) {
		this._fields.done = value
	}

	public _fields: {
		r: io.Reader | null
		split: ((data: $.Slice<number>, atEOF: boolean) => [number, $.Slice<number>, $.GoError] | globalThis.Promise<[number, $.Slice<number>, $.GoError]>) | null
		maxTokenSize: number
		token: $.Slice<number>
		buf: $.Slice<number>
		start: number
		end: number
		err: $.GoError
		empties: number
		scanCalled: boolean
		done: boolean
	}

	constructor(init?: Partial<{r?: io.Reader | null, split?: ((data: $.Slice<number>, atEOF: boolean) => [number, $.Slice<number>, $.GoError] | globalThis.Promise<[number, $.Slice<number>, $.GoError]>) | null, maxTokenSize?: number, token?: $.Slice<number>, buf?: $.Slice<number>, start?: number, end?: number, err?: $.GoError, empties?: number, scanCalled?: boolean, done?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			r: init?.r ?? (null! as io.Reader | null),
			split: init?.split ?? (null! as ((data: $.Slice<number>, atEOF: boolean) => [number, $.Slice<number>, $.GoError] | globalThis.Promise<[number, $.Slice<number>, $.GoError]>) | null),
			maxTokenSize: init?.maxTokenSize ?? (0 as number),
			token: init?.token ?? (null! as $.Slice<number>),
			buf: init?.buf ?? (null! as $.Slice<number>),
			start: init?.start ?? (0 as number),
			end: init?.end ?? (0 as number),
			err: init?.err ?? (null! as $.GoError),
			empties: init?.empties ?? (0 as number),
			scanCalled: init?.scanCalled ?? (false as boolean),
			done: init?.done ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Scanner {
		return new Scanner(this, true)
	}

	public __goscriptAssign(source: Scanner): void {
		const target = this._fields
		const values = source._fields
		target.r = $.assignFieldValue(target.r, values.r, "io.Reader")
		target.split = values.split
		target.maxTokenSize = values.maxTokenSize
		target.token = values.token
		target.buf = values.buf
		target.start = values.start
		target.end = values.end
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.empties = values.empties
		target.scanCalled = values.scanCalled
		target.done = values.done
	}

	public Buffer(buf: $.Slice<number>, max: number): void {
		let s: Scanner | $.VarRef<Scanner> | null = this;
		const s$: Scanner = s == null ? $.pointerTarget<Scanner>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Scanner>(s)
		if ((s$ as Scanner).scanCalled) {
			$.panic("Buffer called after Scan")
		}
		;(s$ as Scanner).buf = $.goSlice(buf, 0, $.cap(buf));
		;(s$ as Scanner).maxTokenSize = max
	}

	public Bytes(): $.Slice<number> {
		const s: Scanner | $.VarRef<Scanner> | null = this;
		return $.pointerValue<Scanner>(s).token
	}

	public Err(): $.GoError {
		const s: Scanner | $.VarRef<Scanner> | null = this;
		const s$: Scanner = s == null ? $.pointerTarget<Scanner>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Scanner>(s)
		if ($.comparableEqual((s$ as Scanner).err, io.EOF)) {
			return null
		}
		return (s$ as Scanner).err
	}

	public async Scan(): globalThis.Promise<boolean> {
		let s: Scanner | $.VarRef<Scanner> | null = this;
		const s$: Scanner = s == null ? $.pointerTarget<Scanner>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Scanner>(s)
		if ((s$ as Scanner).done) {
			return false
		}
		;(s$ as Scanner).scanCalled = true
		// Loop until we have a token.
		while (true) {
			// See if we can get a token with what we already have.
			// If we've run out of data but have an error, give the split function
			// a chance to recover any remaining, possibly empty token.
			if (((s$ as Scanner).end > (s$ as Scanner).start) || ((s$ as Scanner).err != null)) {
				let __goscriptTuple0: any = await (s$ as Scanner).split!($.goSlice((s$ as Scanner).buf, (s$ as Scanner).start, (s$ as Scanner).end), (s$ as Scanner).err != null)
				let advance = __goscriptTuple0[0]
				let token: $.Slice<number> = __goscriptTuple0[1]
				let err = __goscriptTuple0[2]
				if (err != null) {
					if ($.comparableEqual(err, ErrFinalToken)) {
						;(s$ as Scanner).token = token;
						;(s$ as Scanner).done = true
						// When token is not nil, it means the scanning stops
						// with a trailing token, and thus the return value
						// should be true to indicate the existence of the token.
						return token != null
					}
					void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scanner).setErr(err) : Scanner.prototype.setErr.call(s, err))
					return false
				}
				if (!(s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scanner).advance(advance) : Scanner.prototype.advance.call(s, advance))) {
					return false
				}
				;(s$ as Scanner).token = token
				if (token != null) {
					if (((s$ as Scanner).err == null) || (advance > 0)) {
						;(s$ as Scanner).empties = 0
					} else {
						// Returning tokens not advancing input at EOF.
						;(s$ as Scanner).empties++
						if ((s$ as Scanner).empties > 100) {
							$.panic("bufio.Scan: too many empty tokens without progressing")
						}
					}
					return true
				}
			}
			// We cannot generate a token with what we are holding.
			// If we've already hit EOF or an I/O error, we are done.
			if ((s$ as Scanner).err != null) {
				// Shut it down.
				;(s$ as Scanner).start = 0;
				;(s$ as Scanner).end = 0
				return false
			}
			// Must read more data.
			// First, shift data to beginning of buffer if there's lots of empty space
			// or space is needed.
			if (((s$ as Scanner).start > 0) && (((s$ as Scanner).end == $.sliceLen((s$ as Scanner).buf)) || ((s$ as Scanner).start > (globalThis.Math.trunc($.sliceLen((s$ as Scanner).buf) / 2))))) {
				$.copy((s$ as Scanner).buf, $.goSlice((s$ as Scanner).buf, (s$ as Scanner).start, (s$ as Scanner).end));
				;(s$ as Scanner).end = (s$ as Scanner).end - ((s$ as Scanner).start);
				;(s$ as Scanner).start = 0
			}
			// Is the buffer full? If so, resize.
			if ((s$ as Scanner).end == $.sliceLen((s$ as Scanner).buf)) {
				// Guarantee no overflow in the multiplication below.
				const maxInt: number = 9223372036854775807
				if (($.sliceLen((s$ as Scanner).buf) >= (s$ as Scanner).maxTokenSize) || ($.sliceLen((s$ as Scanner).buf) > $.int("4611686018427387903", 64))) {
					void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scanner).setErr(ErrTooLong) : Scanner.prototype.setErr.call(s, ErrTooLong))
					return false
				}
				let newSize = $.sliceLen((s$ as Scanner).buf) * 2
				if (newSize == 0) {
					newSize = 4096
				}
				newSize = $.min(newSize, (s$ as Scanner).maxTokenSize)
				let newBuf: $.Slice<number> = $.makeSlice<number>(newSize, undefined, "byte")
				$.copy(newBuf, $.goSlice((s$ as Scanner).buf, (s$ as Scanner).start, (s$ as Scanner).end));
				;(s$ as Scanner).buf = newBuf;
				;(s$ as Scanner).end = (s$ as Scanner).end - ((s$ as Scanner).start);
				;(s$ as Scanner).start = 0
			}
			// Finally we can read some input. Make sure we don't get stuck with
			// a misbehaving Reader. Officially we don't need to do this, but let's
			// be extra careful: Scanner is for safe, simple jobs.
			for (let loop = 0; ; ) {
				let [n, err] = await $.pointerValue<Exclude<io.Reader, null>>((s$ as Scanner).r).Read($.goSlice((s$ as Scanner).buf, (s$ as Scanner).end, $.sliceLen((s$ as Scanner).buf)))
				if ((n < 0) || (($.sliceLen((s$ as Scanner).buf) - (s$ as Scanner).end) < n)) {
					void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scanner).setErr(ErrBadReadCount) : Scanner.prototype.setErr.call(s, ErrBadReadCount))
					break
				}
				;(s$ as Scanner).end = (s$ as Scanner).end + (n)
				if (err != null) {
					void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scanner).setErr(err) : Scanner.prototype.setErr.call(s, err))
					break
				}
				if (n > 0) {
					;(s$ as Scanner).empties = 0
					break
				}
				loop++
				if (loop > 100) {
					void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scanner).setErr(io.ErrNoProgress) : Scanner.prototype.setErr.call(s, io.ErrNoProgress))
					break
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public Split(split: SplitFunc | null): void {
		let s: Scanner | $.VarRef<Scanner> | null = this;
		const s$: Scanner = s == null ? $.pointerTarget<Scanner>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Scanner>(s)
		if ((s$ as Scanner).scanCalled) {
			$.panic("Split called after Scan")
		}
		;(s$ as Scanner).split = split
	}

	public Text(): string {
		const s: Scanner | $.VarRef<Scanner> | null = this;
		return $.bytesToString($.pointerValue<Scanner>(s).token)
	}

	public advance(n: number): boolean {
		let s: Scanner | $.VarRef<Scanner> | null = this;
		const s$: Scanner = s == null ? $.pointerTarget<Scanner>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Scanner>(s)
		if (n < 0) {
			void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scanner).setErr(ErrNegativeAdvance) : Scanner.prototype.setErr.call(s, ErrNegativeAdvance))
			return false
		}
		if (n > ((s$ as Scanner).end - (s$ as Scanner).start)) {
			void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scanner).setErr(ErrAdvanceTooFar) : Scanner.prototype.setErr.call(s, ErrAdvanceTooFar))
			return false
		}
		;(s$ as Scanner).start = (s$ as Scanner).start + (n)
		return true
	}

	public setErr(err: $.GoError): void {
		let s: Scanner | $.VarRef<Scanner> | null = this;
		const s$: Scanner = s == null ? $.pointerTarget<Scanner>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Scanner>(s)
		if (((s$ as Scanner).err == null) || ($.comparableEqual((s$ as Scanner).err, io.EOF))) {
			;(s$ as Scanner).err = err
		}
	}

	static __typeInfo = $.registerStructType(
		"bufio.Scanner",
		() => new Scanner(),
		() => [$.methodSignature("Buffer", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["max", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Err", [], ["error"], true), $.methodSignature("Scan", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Split", [["split", ({ kind: $.TypeKind.Function, name: "bufio.SplitFunc", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("Text", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("advance", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("setErr", [["err", "error"]], [], true)],
		Scanner,
		() => [/* @__PURE__ */ $.structField("r", "io.Reader", [0], 0, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("split", ({ kind: $.TypeKind.Function, name: "bufio.SplitFunc", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.basicType("bool")], results: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo), [1], 16, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("maxTokenSize", /* @__PURE__ */ $.basicType("int"), [2], 24, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("token", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 32, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 56, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("start", /* @__PURE__ */ $.basicType("int"), [5], 80, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("end", /* @__PURE__ */ $.basicType("int"), [6], 88, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("err", "error", [7], 96, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("empties", /* @__PURE__ */ $.basicType("int"), [8], 112, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("scanCalled", /* @__PURE__ */ $.basicType("bool"), [9], 120, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.basicType("bool"), [10], 121, false, { pkgPath: "bufio" })]
	)
}

export const MaxScanTokenSize: number = 65536

export const startBufSize: number = 4096

export let ErrTooLong: $.GoError = errors.New("bufio.Scanner: token too long")

export function __goscript_set_ErrTooLong(__goscriptValue: $.GoError): void {
	ErrTooLong = __goscriptValue
}

export let ErrNegativeAdvance: $.GoError = errors.New("bufio.Scanner: SplitFunc returns negative advance count")

export function __goscript_set_ErrNegativeAdvance(__goscriptValue: $.GoError): void {
	ErrNegativeAdvance = __goscriptValue
}

export let ErrAdvanceTooFar: $.GoError = errors.New("bufio.Scanner: SplitFunc returns advance count beyond input")

export function __goscript_set_ErrAdvanceTooFar(__goscriptValue: $.GoError): void {
	ErrAdvanceTooFar = __goscriptValue
}

export let ErrBadReadCount: $.GoError = errors.New("bufio.Scanner: Read returned impossible count")

export function __goscript_set_ErrBadReadCount(__goscriptValue: $.GoError): void {
	ErrBadReadCount = __goscriptValue
}

export function NewScanner(r: io.Reader | null): Scanner | $.VarRef<Scanner> | null {
	return new Scanner({r: r, split: ScanLines, maxTokenSize: 65536})
}

export let ErrFinalToken: $.GoError = errors.New("final token")

export function __goscript_set_ErrFinalToken(__goscriptValue: $.GoError): void {
	ErrFinalToken = __goscriptValue
}

export function ScanBytes(data: $.Slice<number>, atEOF: boolean): [number, $.Slice<number>, $.GoError] {
	let advance: number = 0
	let token: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	if (atEOF && ($.sliceLen(data) == 0)) {
		return [0, null, null]
	}
	return [1, $.goSlice(data, 0, 1), null]
}

export let errorRune: $.Slice<number> = new Uint8Array([239, 191, 189])

export function __goscript_set_errorRune(__goscriptValue: $.Slice<number>): void {
	errorRune = __goscriptValue
}

export function ScanRunes(data: $.Slice<number>, atEOF: boolean): [number, $.Slice<number>, $.GoError] {
	let advance: number = 0
	let token: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	if (atEOF && ($.sliceLen(data) == 0)) {
		return [0, null, null]
	}

	// Fast path 1: ASCII.
	if ($.arrayIndex(data!, 0) < 128) {
		return [1, $.goSlice(data, 0, 1), null]
	}

	// Fast path 2: Correct UTF-8 decode without error.
	let [, width] = utf8.DecodeRune(data)
	if (width > 1) {
		// It's a valid encoding. Width cannot be one for a correctly encoded
		// non-ASCII rune.
		return [width, $.goSlice(data, 0, width), null]
	}

	// We know it's an error: we have width==1 and implicitly r==utf8.RuneError.
	// Is the error because there wasn't a full rune to be decoded?
	// FullRune distinguishes correctly between erroneous and incomplete encodings.
	if (!atEOF && !utf8.FullRune(data)) {
		// Incomplete; get more bytes.
		return [0, null, null]
	}

	// We have a real UTF-8 encoding error. Return a properly encoded error rune
	// but advance only one byte. This matches the behavior of a range loop over
	// an incorrectly encoded string.
	return [1, errorRune, null]
}

export function dropCR(data: $.Slice<number>): $.Slice<number> {
	if (($.sliceLen(data) > 0) && ($.arrayIndex(data!, $.sliceLen(data) - 1) == 13)) {
		return $.goSlice(data, 0, $.sliceLen(data) - 1)
	}
	return data
}

export function ScanLines(data: $.Slice<number>, atEOF: boolean): [number, $.Slice<number>, $.GoError] {
	let advance: number = 0
	let token: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	if (atEOF && ($.sliceLen(data) == 0)) {
		return [0, null, null]
	}
	{
		let i = bytes.IndexByte(data, 10)
		if (i >= 0) {
			// We have a full newline-terminated line.
			return [i + 1, dropCR($.goSlice(data, 0, i)), null]
		}
	}
	// If we're at EOF, we have a final, non-terminated line. Return it.
	if (atEOF) {
		return [$.sliceLen(data), dropCR(data), null]
	}
	// Request more data.
	return [0, null, null]
}

export function isSpace(r: number): boolean {
	if (r <= 255) {
		// Obvious ASCII ones: \t through \r plus space. Plus two Latin-1 oddballs.
		switch (r) {
			case 32:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			{
				return true
				break
			}
			case 133:
			case 160:
			{
				return true
				break
			}
		}
		return false
	}
	// High-valued ones.
	if ((8192 <= r) && (r <= 8202)) {
		return true
	}
	switch (r) {
		case 5760:
		case 8232:
		case 8233:
		case 8239:
		case 8287:
		case 12288:
		{
			return true
			break
		}
	}
	return false
}

export function ScanWords(data: $.Slice<number>, atEOF: boolean): [number, $.Slice<number>, $.GoError] {
	let advance: number = 0
	let token: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	// Skip leading spaces.
	let start = 0
	for (let width = 0; start < $.sliceLen(data); start = start + (width)) {
		let r: number = 0
		let __goscriptTuple1: any = utf8.DecodeRune($.goSlice(data, start, undefined))
		r = __goscriptTuple1[0]
		width = __goscriptTuple1[1]
		if (!isSpace(r)) {
			break
		}
	}
	// Scan until space, marking end of word.
	for (let width = 0, i = start; i < $.sliceLen(data); i = i + (width)) {
		let r: number = 0
		let __goscriptTuple2: any = utf8.DecodeRune($.goSlice(data, i, undefined))
		r = __goscriptTuple2[0]
		width = __goscriptTuple2[1]
		if (isSpace(r)) {
			return [i + width, $.goSlice(data, start, i), null]
		}
	}
	// If we're at EOF, we have a final, non-empty, non-terminated word. Return it.
	if (atEOF && ($.sliceLen(data) > start)) {
		return [$.sliceLen(data), $.goSlice(data, start, undefined), null]
	}
	// Request more data.
	return [start, null, null]
}
