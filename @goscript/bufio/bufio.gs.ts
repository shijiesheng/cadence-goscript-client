// Generated file based on bufio.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as strings from "@goscript/strings/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/utf8/index.js"

export class Reader {
	public get buf(): $.Slice<number> {
		return this._fields.buf
	}

	public set buf(value: $.Slice<number>) {
		this._fields.buf = value
	}

	public get rd(): io.Reader | null {
		return this._fields.rd
	}

	public set rd(value: io.Reader | null) {
		this._fields.rd = value
	}

	public get r(): number {
		return this._fields.r
	}

	public set r(value: number) {
		this._fields.r = value
	}

	public get w(): number {
		return this._fields.w
	}

	public set w(value: number) {
		this._fields.w = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get lastByte(): number {
		return this._fields.lastByte
	}

	public set lastByte(value: number) {
		this._fields.lastByte = value
	}

	public get lastRuneSize(): number {
		return this._fields.lastRuneSize
	}

	public set lastRuneSize(value: number) {
		this._fields.lastRuneSize = value
	}

	public _fields: {
		buf: $.Slice<number>
		rd: io.Reader | null
		r: number
		w: number
		err: $.GoError
		lastByte: number
		lastRuneSize: number
	}

	constructor(init?: Partial<{buf?: $.Slice<number>, rd?: io.Reader | null, r?: number, w?: number, err?: $.GoError, lastByte?: number, lastRuneSize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			buf: init?.buf ?? (null! as $.Slice<number>),
			rd: init?.rd ?? (null! as io.Reader | null),
			r: init?.r ?? (0 as number),
			w: init?.w ?? (0 as number),
			err: init?.err ?? (null! as $.GoError),
			lastByte: init?.lastByte ?? (0 as number),
			lastRuneSize: init?.lastRuneSize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Reader {
		return new Reader(this, true)
	}

	public __goscriptAssign(source: Reader): void {
		const target = this._fields
		const values = source._fields
		target.buf = values.buf
		target.rd = $.assignFieldValue(target.rd, values.rd, "io.Reader")
		target.r = values.r
		target.w = values.w
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.lastByte = values.lastByte
		target.lastRuneSize = values.lastRuneSize
	}

	public Buffered(): number {
		const b: Reader | $.VarRef<Reader> | null = this;
		const b$: Reader = b == null ? $.pointerTarget<Reader>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Reader>(b)
		return (b$ as Reader).w - (b$ as Reader).r
	}

	public async Discard(n: number): globalThis.Promise<[number, $.GoError]> {
		let b: Reader | $.VarRef<Reader> | null = this;
		let discarded: number = 0
		let err: $.GoError = null! as $.GoError
		const b$: Reader = b == null ? $.pointerTarget<Reader>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Reader>(b)
		if (n < 0) {
			return [0, ErrNegativeCount]
		}
		if (n == 0) {
			return [discarded, err]
		}

		;(b$ as Reader).lastByte = -1;
		;(b$ as Reader).lastRuneSize = -1

		let remain = n
		while (true) {
			let skip = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).Buffered() : Reader.prototype.Buffered.call(b))
			if (skip == 0) {
				await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).fill() : Reader.prototype.fill.call(b))
				skip = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).Buffered() : Reader.prototype.Buffered.call(b))
			}
			if (skip > remain) {
				skip = remain
			}
			;(b$ as Reader).r = (b$ as Reader).r + (skip)
			remain = remain - (skip)
			if (remain == 0) {
				return [n, null]
			}
			if ((b$ as Reader).err != null) {
				return [n - remain, (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).readErr() : Reader.prototype.readErr.call(b))]
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Peek(n: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		let b: Reader | $.VarRef<Reader> | null = this;
		const b$: Reader = b == null ? $.pointerTarget<Reader>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Reader>(b)
		if (n < 0) {
			return [null, ErrNegativeCount]
		}

		;(b$ as Reader).lastByte = -1;
		;(b$ as Reader).lastRuneSize = -1

		while (((((b$ as Reader).w - (b$ as Reader).r) < n) && (((b$ as Reader).w - (b$ as Reader).r) < $.sliceLen((b$ as Reader).buf))) && ((b$ as Reader).err == null)) {
			await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).fill() : Reader.prototype.fill.call(b))
		}

		if (n > $.sliceLen((b$ as Reader).buf)) {
			return [$.goSlice((b$ as Reader).buf, (b$ as Reader).r, (b$ as Reader).w), ErrBufferFull]
		}

		// 0 <= n <= len(b.buf)
		let err: $.GoError = null! as $.GoError
		{
			let avail = (b$ as Reader).w - (b$ as Reader).r
			if (avail < n) {
				// not enough data in buffer
				n = avail
				err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).readErr() : Reader.prototype.readErr.call(b))
				if (err == null) {
					err = ErrBufferFull
				}
			}
		}
		return [$.goSlice((b$ as Reader).buf, (b$ as Reader).r, (b$ as Reader).r + n), err]
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let b: Reader | $.VarRef<Reader> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const b$: Reader = b == null ? $.pointerTarget<Reader>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Reader>(b)
		n = $.sliceLen(p)
		if (n == 0) {
			if ((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).Buffered() : Reader.prototype.Buffered.call(b)) > 0) {
				return [0, null]
			}
			return [0, (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).readErr() : Reader.prototype.readErr.call(b))]
		}
		if ((b$ as Reader).r == (b$ as Reader).w) {
			if ((b$ as Reader).err != null) {
				return [0, (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).readErr() : Reader.prototype.readErr.call(b))]
			}
			if ($.sliceLen(p) >= $.sliceLen((b$ as Reader).buf)) {
				// Large read, empty buffer.
				// Read directly into p to avoid copy.
				let __goscriptTuple0: any = await $.pointerValue<Exclude<io.Reader, null>>((b$ as Reader).rd).Read(p)
				n = __goscriptTuple0[0];
				;(b$ as Reader).err = __goscriptTuple0[1]
				if (n < 0) {
					$.panic((errNegativeRead as any))
				}
				if (n > 0) {
					;(b$ as Reader).lastByte = $.int($.arrayIndex(p!, n - 1));
					;(b$ as Reader).lastRuneSize = -1
				}
				return [n, (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).readErr() : Reader.prototype.readErr.call(b))]
			}
			// One read.
			// Do not use b.fill, which will loop.
			;(b$ as Reader).r = 0;
			;(b$ as Reader).w = 0
			let __goscriptTuple1: any = await $.pointerValue<Exclude<io.Reader, null>>((b$ as Reader).rd).Read((b$ as Reader).buf)
			n = __goscriptTuple1[0];
			;(b$ as Reader).err = __goscriptTuple1[1]
			if (n < 0) {
				$.panic((errNegativeRead as any))
			}
			if (n == 0) {
				return [0, (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).readErr() : Reader.prototype.readErr.call(b))]
			}
			;(b$ as Reader).w = (b$ as Reader).w + (n)
		}

		// copy as much as we can
		// Note: if the slice panics here, it is probably because
		// the underlying reader returned a bad count. See issue 49795.
		n = $.copy(p, $.goSlice((b$ as Reader).buf, (b$ as Reader).r, (b$ as Reader).w));
		;(b$ as Reader).r = (b$ as Reader).r + (n);
		;(b$ as Reader).lastByte = $.int($.arrayIndex((b$ as Reader).buf!, (b$ as Reader).r - 1));
		;(b$ as Reader).lastRuneSize = -1
		return [n, null]
	}

	public async ReadByte(): globalThis.Promise<[number, $.GoError]> {
		let b: Reader | $.VarRef<Reader> | null = this;
		const b$: Reader = b == null ? $.pointerTarget<Reader>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Reader>(b);
		;(b$ as Reader).lastRuneSize = -1
		while ((b$ as Reader).r == (b$ as Reader).w) {
			if ((b$ as Reader).err != null) {
				return [0, (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).readErr() : Reader.prototype.readErr.call(b))]
			}
			await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).fill() : Reader.prototype.fill.call(b))
		}
		let c = $.arrayIndex((b$ as Reader).buf!, (b$ as Reader).r);
		;(b$ as Reader).r++;
		;(b$ as Reader).lastByte = $.int(c)
		return [c, null]
	}

	public async ReadBytes(delim: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const b: Reader | $.VarRef<Reader> | null = this;
		let __goscriptTuple2: any = await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).collectFragments(delim) : Reader.prototype.collectFragments.call(b, delim))
		let full: $.Slice<$.Slice<number>> = __goscriptTuple2[0]
		let frag: $.Slice<number> = __goscriptTuple2[1]
		let n = __goscriptTuple2[2]
		let err = __goscriptTuple2[3]
		// Allocate new buffer to hold the full pieces and the fragment.
		let buf: $.Slice<number> = $.makeSlice<number>(n, undefined, "byte")
		n = 0
		// Copy full pieces and fragment in.
		for (let __goscriptRangeTarget0 = full, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			n = n + ($.copy($.goSlice(buf, n, undefined), ((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as $.Slice<number>)))
		}
		$.copy($.goSlice(buf, n, undefined), frag)
		return [buf, err]
	}

	public async ReadLine(): globalThis.Promise<[$.Slice<number>, boolean, $.GoError]> {
		let b: Reader | $.VarRef<Reader> | null = this;
		let line: $.Slice<number> = null! as $.Slice<number>
		let isPrefix: boolean = false
		let err: $.GoError = null! as $.GoError
		const b$: Reader = b == null ? $.pointerTarget<Reader>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Reader>(b)
		let __goscriptTuple3: any = await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).ReadSlice(10) : Reader.prototype.ReadSlice.call(b, 10))
		line = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if ($.comparableEqual(err, ErrBufferFull)) {
			// Handle the case where "\r\n" straddles the buffer.
			if (($.sliceLen(line) > 0) && ($.arrayIndex(line!, $.sliceLen(line) - 1) == 13)) {
				// Put the '\r' back on buf and drop it from line.
				// Let the next call to ReadLine check for "\r\n".
				if ((b$ as Reader).r == 0) {
					// should be unreachable
					$.panic("bufio: tried to rewind past start of buffer")
				}
				;(b$ as Reader).r--
				line = $.goSlice(line, undefined, $.sliceLen(line) - 1)
			}
			return [line, true, null]
		}

		if ($.sliceLen(line) == 0) {
			if (err != null) {
				line = null
			}
			return [line, isPrefix, err]
		}
		err = null

		if ($.arrayIndex(line!, $.sliceLen(line) - 1) == 10) {
			let drop = 1
			if (($.sliceLen(line) > 1) && ($.arrayIndex(line!, $.sliceLen(line) - 2) == 13)) {
				drop = 2
			}
			line = $.goSlice(line, undefined, $.sliceLen(line) - drop)
		}
		return [line, isPrefix, err]
	}

	public async ReadRune(): globalThis.Promise<[number, number, $.GoError]> {
		let b: Reader | $.VarRef<Reader> | null = this;
		let r: number = 0
		let size: number = 0
		let err: $.GoError = null! as $.GoError
		const b$: Reader = b == null ? $.pointerTarget<Reader>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Reader>(b)
		while ((((((b$ as Reader).r + utf8.UTFMax) > (b$ as Reader).w) && !utf8.FullRune($.goSlice((b$ as Reader).buf, (b$ as Reader).r, (b$ as Reader).w))) && ((b$ as Reader).err == null)) && (((b$ as Reader).w - (b$ as Reader).r) < $.sliceLen((b$ as Reader).buf))) {
			await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).fill() : Reader.prototype.fill.call(b))
		}
		;(b$ as Reader).lastRuneSize = -1
		if ((b$ as Reader).r == (b$ as Reader).w) {
			return [0, 0, (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).readErr() : Reader.prototype.readErr.call(b))]
		}
		let __goscriptTuple4: any = utf8.DecodeRune($.goSlice((b$ as Reader).buf, (b$ as Reader).r, (b$ as Reader).w))
		r = __goscriptTuple4[0]
		size = __goscriptTuple4[1];
		;(b$ as Reader).r = (b$ as Reader).r + (size);
		;(b$ as Reader).lastByte = $.int($.arrayIndex((b$ as Reader).buf!, (b$ as Reader).r - 1));
		;(b$ as Reader).lastRuneSize = size
		return [r, size, null]
	}

	public async ReadSlice(delim: number): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		let b: Reader | $.VarRef<Reader> | null = this;
		let line: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		const b$: Reader = b == null ? $.pointerTarget<Reader>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Reader>(b)
		let s = 0
		while (true) {
			// Search buffer.
			{
				let i = bytes.IndexByte($.goSlice((b$ as Reader).buf, (b$ as Reader).r + s, (b$ as Reader).w), delim)
				if (i >= 0) {
					i = i + (s)
					line = $.goSlice((b$ as Reader).buf, (b$ as Reader).r, ((b$ as Reader).r + i) + 1);
					;(b$ as Reader).r = (b$ as Reader).r + (i + 1)
					break
				}
			}

			// Pending error?
			if ((b$ as Reader).err != null) {
				line = $.goSlice((b$ as Reader).buf, (b$ as Reader).r, (b$ as Reader).w);
				;(b$ as Reader).r = (b$ as Reader).w
				err = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).readErr() : Reader.prototype.readErr.call(b))
				break
			}

			// Buffer full?
			if ((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).Buffered() : Reader.prototype.Buffered.call(b)) >= $.sliceLen((b$ as Reader).buf)) {
				;(b$ as Reader).r = (b$ as Reader).w
				line = (b$ as Reader).buf
				err = ErrBufferFull
				break
			}

			s = (b$ as Reader).w - (b$ as Reader).r

			await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).fill() : Reader.prototype.fill.call(b))
		}

		// Handle last byte, if any.
		{
			let i = $.sliceLen(line) - 1
			if (i >= 0) {
				;(b$ as Reader).lastByte = $.int($.arrayIndex(line!, i));
				;(b$ as Reader).lastRuneSize = -1
			}
		}

		return [line, err]
	}

	public async ReadString(delim: number): globalThis.Promise<[string, $.GoError]> {
		const b: Reader | $.VarRef<Reader> | null = this;
		let __goscriptTuple5: any = await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).collectFragments(delim) : Reader.prototype.collectFragments.call(b, delim))
		let full: $.Slice<$.Slice<number>> = __goscriptTuple5[0]
		let frag: $.Slice<number> = __goscriptTuple5[1]
		let n = __goscriptTuple5[2]
		let err = __goscriptTuple5[3]
		// Allocate new buffer to hold the full pieces and the fragment.
		let buf: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		buf.value.Grow(n)
		// Copy full pieces and fragment in.
		for (let __goscriptRangeTarget1 = full, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let fb = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as $.Slice<number>)
			buf.value.Write(fb)
		}
		buf.value.Write(frag)
		return [buf.value.String(), err]
	}

	public Reset(r: io.Reader | null): void {
		let b: Reader | $.VarRef<Reader> | null = this;
		const b$: Reader = b == null ? $.pointerTarget<Reader>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Reader>(b)
		// If a Reader r is passed to NewReader, NewReader will return r.
		// Different layers of code may do that, and then later pass r
		// to Reset. Avoid infinite recursion in that case.
		if ($.comparableEqual($.interfaceValue<io.Reader | null>(b, "*bufio.Reader", /* @__PURE__ */ $.pointerType("bufio.Reader")), r)) {
			return
		}
		if ((b$ as Reader).buf == null) {
			;(b$ as Reader).buf = $.makeSlice<number>(4096, undefined, "byte")
		}
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).reset((b$ as Reader).buf, r) : Reader.prototype.reset.call(b, (b$ as Reader).buf, r))
	}

	public Size(): number {
		const b: Reader | $.VarRef<Reader> | null = this;
		return $.sliceLen($.pointerValue<Reader>(b).buf)
	}

	public UnreadByte(): $.GoError {
		let b: Reader | $.VarRef<Reader> | null = this;
		const b$: Reader = b == null ? $.pointerTarget<Reader>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Reader>(b)
		if (((b$ as Reader).lastByte < 0) || (((b$ as Reader).r == 0) && ((b$ as Reader).w > 0))) {
			return ErrInvalidUnreadByte
		}
		// b.r > 0 || b.w == 0
		if ((b$ as Reader).r > 0) {
			;(b$ as Reader).r--
		} else {
			// b.r == 0 && b.w == 0
			;(b$ as Reader).w = 1
		}
		$.sliceElems((b$ as Reader).buf!)[$.sliceSlot((b$ as Reader).buf!, (b$ as Reader).r)] = $.uint((b$ as Reader).lastByte, 8);
		;(b$ as Reader).lastByte = -1;
		;(b$ as Reader).lastRuneSize = -1
		return null
	}

	public UnreadRune(): $.GoError {
		let b: Reader | $.VarRef<Reader> | null = this;
		const b$: Reader = b == null ? $.pointerTarget<Reader>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Reader>(b)
		if (((b$ as Reader).lastRuneSize < 0) || ((b$ as Reader).r < (b$ as Reader).lastRuneSize)) {
			return ErrInvalidUnreadRune
		}
		;(b$ as Reader).r = (b$ as Reader).r - ((b$ as Reader).lastRuneSize);
		;(b$ as Reader).lastByte = -1;
		;(b$ as Reader).lastRuneSize = -1
		return null
	}

	public async WriteTo(w: io.Writer | null): globalThis.Promise<[bigint, $.GoError]> {
		let b: Reader | $.VarRef<Reader> | null = this;
		let n: bigint = 0n
		let err: $.GoError = null! as $.GoError
		const b$: Reader = b == null ? $.pointerTarget<Reader>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Reader>(b);
		;(b$ as Reader).lastByte = -1;
		;(b$ as Reader).lastRuneSize = -1

		if ((b$ as Reader).r < (b$ as Reader).w) {
			let __goscriptTuple6: any = await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).writeBuf(w) : Reader.prototype.writeBuf.call(b, w))
			n = __goscriptTuple6[0]
			err = __goscriptTuple6[1]
			if (err != null) {
				return [n, err]
			}
		}

		{
			let [r, ok] = $.typeAssertTuple<io.WriterTo | null>((b$ as Reader).rd, "io.WriterTo")
			if (ok) {
				let [m, __goscriptShadow0] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<io.WriterTo, null>) : $.pointerValue<Exclude<io.WriterTo, null>>(r)).WriteTo($.pointerValueOrNil(w)!)
				n = $.int64Add(n, m)
				return [n, __goscriptShadow0]
			}
		}

		let __goscriptShadow1 = w
		{
			let __goscriptTuple7: any = $.typeAssertTuple<io.ReaderFrom | null>(__goscriptShadow1, "io.ReaderFrom")
			let __goscriptShadow2 = __goscriptTuple7[0]
			let ok = __goscriptTuple7[1]
			if (ok) {
				let [m, __goscriptShadow3] = await (__goscriptShadow2 !== null && (__goscriptShadow2 as any).__isVarRef !== true && (__goscriptShadow2 as any).__goValue === undefined ? (__goscriptShadow2 as Exclude<io.ReaderFrom, null>) : $.pointerValue<Exclude<io.ReaderFrom, null>>(__goscriptShadow2)).ReadFrom($.pointerValueOrNil((b$ as Reader).rd)!)
				n = $.int64Add(n, m)
				return [n, __goscriptShadow3]
			}
		}

		if (((b$ as Reader).w - (b$ as Reader).r) < $.sliceLen((b$ as Reader).buf)) {
			await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).fill() : Reader.prototype.fill.call(b))
		}

		while ((b$ as Reader).r < (b$ as Reader).w) {
			// b.r < b.w => buffer is not empty
			let [m, __goscriptShadow4] = await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).writeBuf(w) : Reader.prototype.writeBuf.call(b, w))
			n = $.int64Add(n, m)
			if (__goscriptShadow4 != null) {
				return [n, __goscriptShadow4]
			}
			await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).fill() : Reader.prototype.fill.call(b))
		}

		if ($.comparableEqual((b$ as Reader).err, io.EOF)) {
			;(b$ as Reader).err = null
		}

		return [n, (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).readErr() : Reader.prototype.readErr.call(b))]
	}

	public async collectFragments(delim: number): globalThis.Promise<[$.Slice<$.Slice<number>>, $.Slice<number>, number, $.GoError]> {
		const b: Reader | $.VarRef<Reader> | null = this;
		let fullBuffers: $.Slice<$.Slice<number>> = null! as $.Slice<$.Slice<number>>
		let finalFragment: $.Slice<number> = null! as $.Slice<number>
		let totalLen: number = 0
		let err: $.GoError = null! as $.GoError
		let frag: $.Slice<number> = null! as $.Slice<number>
		// Use ReadSlice to look for delim, accumulating full buffers.
		while (true) {
			let e: $.GoError = null! as $.GoError
			let __goscriptTuple8: any = await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Reader).ReadSlice(delim) : Reader.prototype.ReadSlice.call(b, delim))
			frag = __goscriptTuple8[0]
			e = __goscriptTuple8[1]
			if (e == null) {
				break
			}
			if (!$.comparableEqual(e, ErrBufferFull)) {
				err = e
				break
			}

			// Make a copy of the buffer.
			let buf: $.Slice<number> = bytes.Clone(frag)
			fullBuffers = $.appendOne(fullBuffers, buf, $.appendZeros.nil)
			totalLen = totalLen + ($.sliceLen(buf))
		}

		totalLen = totalLen + ($.sliceLen(frag))
		return [fullBuffers, frag, totalLen, err]
	}

	public async fill(): globalThis.Promise<void> {
		let b: Reader | $.VarRef<Reader> | null = this;
		const b$: Reader = b == null ? $.pointerTarget<Reader>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Reader>(b)
		// Slide existing data to beginning.
		if ((b$ as Reader).r > 0) {
			$.copy((b$ as Reader).buf, $.goSlice((b$ as Reader).buf, (b$ as Reader).r, (b$ as Reader).w));
			;(b$ as Reader).w = (b$ as Reader).w - ((b$ as Reader).r);
			;(b$ as Reader).r = 0
		}

		if ((b$ as Reader).w >= $.sliceLen((b$ as Reader).buf)) {
			$.panic("bufio: tried to fill full buffer")
		}

		// Read new data: try a limited number of times.
		for (let i = 100; i > 0; i--) {
			let [n, err] = await $.pointerValue<Exclude<io.Reader, null>>((b$ as Reader).rd).Read($.goSlice((b$ as Reader).buf, (b$ as Reader).w, undefined))
			if (n < 0) {
				$.panic((errNegativeRead as any))
			}
			;(b$ as Reader).w = (b$ as Reader).w + (n)
			if (err != null) {
				;(b$ as Reader).err = err
				return
			}
			if (n > 0) {
				return
			}
		}
		;(b$ as Reader).err = io.ErrNoProgress
	}

	public readErr(): $.GoError {
		let b: Reader | $.VarRef<Reader> | null = this;
		const b$: Reader = b == null ? $.pointerTarget<Reader>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Reader>(b)
		let err = (b$ as Reader).err;
		;(b$ as Reader).err = null
		return err
	}

	public reset(buf: $.Slice<number>, r: io.Reader | null): void {
		let b: Reader | $.VarRef<Reader> | null = this;
		$.assignStruct($.pointerValue<Reader>(b), new Reader({buf: buf, rd: r, lastByte: -1, lastRuneSize: -1}, true))
	}

	public async writeBuf(w: io.Writer | null): globalThis.Promise<[bigint, $.GoError]> {
		let b: Reader | $.VarRef<Reader> | null = this;
		const b$: Reader = b == null ? $.pointerTarget<Reader>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Reader>(b)
		let [n, err] = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.goSlice((b$ as Reader).buf, (b$ as Reader).r, (b$ as Reader).w))
		if (n < 0) {
			$.panic((errNegativeWrite as any))
		}
		;(b$ as Reader).r = (b$ as Reader).r + (n)
		return [$.int64(n), err]
	}

	static __typeInfo = $.registerStructType(
		"bufio.Reader",
		() => new Reader(),
		() => [$.methodSignature("Buffered", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Discard", [["n", /* @__PURE__ */ $.basicType("int")]], [["discarded", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("Peek", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ReadByte", [], [/* @__PURE__ */ $.basicType("uint8"), "error"], true), $.methodSignature("ReadBytes", [["delim", /* @__PURE__ */ $.basicType("uint8")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("ReadLine", [], [["line", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["isPrefix", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]], true), $.methodSignature("ReadRune", [], [["r", /* @__PURE__ */ $.basicType("int32")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ReadSlice", [["delim", /* @__PURE__ */ $.basicType("uint8")]], [["line", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("ReadString", [["delim", /* @__PURE__ */ $.basicType("uint8")]], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("Reset", [["r", "io.Reader"]], [], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("UnreadByte", [], ["error"], true), $.methodSignature("UnreadRune", [], ["error"], true), $.methodSignature("WriteTo", [["w", "io.Writer"]], [["n", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]], true), $.methodSignature("collectFragments", [["delim", /* @__PURE__ */ $.basicType("uint8")]], [["fullBuffers", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))], ["finalFragment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["totalLen", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("fill", [], [], true), $.methodSignature("readErr", [], ["error"], true), $.methodSignature("reset", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["r", "io.Reader"]], [], true), $.methodSignature("writeBuf", [["w", "io.Writer"]], [/* @__PURE__ */ $.basicType("int64"), "error"], true)],
		Reader,
		() => [/* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("rd", "io.Reader", [1], 24, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("r", /* @__PURE__ */ $.basicType("int"), [2], 40, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("w", /* @__PURE__ */ $.basicType("int"), [3], 48, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("err", "error", [4], 56, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("lastByte", /* @__PURE__ */ $.basicType("int"), [5], 72, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("lastRuneSize", /* @__PURE__ */ $.basicType("int"), [6], 80, false, { pkgPath: "bufio" })]
	)
}

export class Writer {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get buf(): $.Slice<number> {
		return this._fields.buf
	}

	public set buf(value: $.Slice<number>) {
		this._fields.buf = value
	}

	public get n(): number {
		return this._fields.n
	}

	public set n(value: number) {
		this._fields.n = value
	}

	public get wr(): io.Writer | null {
		return this._fields.wr
	}

	public set wr(value: io.Writer | null) {
		this._fields.wr = value
	}

	public _fields: {
		err: $.GoError
		buf: $.Slice<number>
		n: number
		wr: io.Writer | null
	}

	constructor(init?: Partial<{err?: $.GoError, buf?: $.Slice<number>, n?: number, wr?: io.Writer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError),
			buf: init?.buf ?? (null! as $.Slice<number>),
			n: init?.n ?? (0 as number),
			wr: init?.wr ?? (null! as io.Writer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Writer {
		return new Writer(this, true)
	}

	public __goscriptAssign(source: Writer): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.buf = values.buf
		target.n = values.n
		target.wr = $.assignFieldValue(target.wr, values.wr, "io.Writer")
	}

	public Available(): number {
		const b: Writer | $.VarRef<Writer> | null = this;
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		return $.sliceLen((b$ as Writer).buf) - (b$ as Writer).n
	}

	public AvailableBuffer(): $.Slice<number> {
		const b: Writer | $.VarRef<Writer> | null = this;
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		return $.goSlice($.goSlice((b$ as Writer).buf, (b$ as Writer).n, undefined), undefined, 0)
	}

	public Buffered(): number {
		const b: Writer | $.VarRef<Writer> | null = this;
		return $.pointerValue<Writer>(b).n
	}

	public async Flush(): globalThis.Promise<$.GoError> {
		let b: Writer | $.VarRef<Writer> | null = this;
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		if ((b$ as Writer).err != null) {
			return (b$ as Writer).err
		}
		if ((b$ as Writer).n == 0) {
			return null
		}
		let __goscriptTuple10: any = await $.pointerValue<Exclude<io.Writer, null>>((b$ as Writer).wr).Write($.goSlice((b$ as Writer).buf, 0, (b$ as Writer).n))
		let n = __goscriptTuple10[0]
		let err = __goscriptTuple10[1]
		if ((n < (b$ as Writer).n) && (err == null)) {
			err = io.ErrShortWrite
		}
		if (err != null) {
			if ((n > 0) && (n < (b$ as Writer).n)) {
				$.copy($.goSlice((b$ as Writer).buf, 0, (b$ as Writer).n - n), $.goSlice((b$ as Writer).buf, n, (b$ as Writer).n))
			}
			;(b$ as Writer).n = (b$ as Writer).n - (n);
			;(b$ as Writer).err = err
			return err
		}
		;(b$ as Writer).n = 0
		return null
	}

	public async ReadFrom(r: io.Reader | null): globalThis.Promise<[bigint, $.GoError]> {
		let b: Writer | $.VarRef<Writer> | null = this;
		let n: bigint = 0n
		let err: $.GoError = null! as $.GoError
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		if ((b$ as Writer).err != null) {
			return [0n, (b$ as Writer).err]
		}
		let [readerFrom, readerFromOK] = $.typeAssertTuple<io.ReaderFrom | null>((b$ as Writer).wr, "io.ReaderFrom")
		let m: number = 0
		while (true) {
			if ((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).Available() : Writer.prototype.Available.call(b)) == 0) {
				{
					let err1 = await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).Flush() : Writer.prototype.Flush.call(b))
					if (err1 != null) {
						return [n, err1]
					}
				}
			}
			if (readerFromOK && ((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).Buffered() : Writer.prototype.Buffered.call(b)) == 0)) {
				let [nn, __goscriptShadow5] = await (readerFrom !== null && (readerFrom as any).__isVarRef !== true && (readerFrom as any).__goValue === undefined ? (readerFrom as Exclude<io.ReaderFrom, null>) : $.pointerValue<Exclude<io.ReaderFrom, null>>(readerFrom)).ReadFrom($.pointerValueOrNil(r)!);
				;(b$ as Writer).err = __goscriptShadow5
				n = $.int64Add(n, nn)
				return [n, __goscriptShadow5]
			}
			let nr = 0
			while (nr < 100) {
				let __goscriptTuple11: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<io.Reader, null>) : $.pointerValue<Exclude<io.Reader, null>>(r)).Read($.goSlice((b$ as Writer).buf, (b$ as Writer).n, undefined))
				m = __goscriptTuple11[0]
				err = __goscriptTuple11[1]
				if ((m != 0) || (err != null)) {
					break
				}
				nr++
			}
			if (nr == 100) {
				return [n, io.ErrNoProgress]
			}
			;(b$ as Writer).n = (b$ as Writer).n + (m)
			n = $.int64Add(n, $.int64(m))
			if (err != null) {
				break
			}
		}
		if ($.comparableEqual(err, io.EOF)) {
			// If we filled the buffer exactly, flush preemptively.
			if ((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).Available() : Writer.prototype.Available.call(b)) == 0) {
				err = await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).Flush() : Writer.prototype.Flush.call(b))
			} else {
				err = null
			}
		}
		return [n, err]
	}

	public Reset(w: io.Writer | null): void {
		let b: Writer | $.VarRef<Writer> | null = this;
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		// If a Writer w is passed to NewWriter, NewWriter will return w.
		// Different layers of code may do that, and then later pass w
		// to Reset. Avoid infinite recursion in that case.
		if ($.comparableEqual($.interfaceValue<io.Writer | null>(b, "*bufio.Writer", /* @__PURE__ */ $.pointerType("bufio.Writer")), w)) {
			return
		}
		if ((b$ as Writer).buf == null) {
			;(b$ as Writer).buf = $.makeSlice<number>(4096, undefined, "byte")
		}
		;(b$ as Writer).err = null;
		;(b$ as Writer).n = 0;
		;(b$ as Writer).wr = w
	}

	public Size(): number {
		const b: Writer | $.VarRef<Writer> | null = this;
		return $.sliceLen($.pointerValue<Writer>(b).buf)
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let b: Writer | $.VarRef<Writer> | null = this;
		let nn: number = 0
		let err: $.GoError = null! as $.GoError
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		while (($.sliceLen(p) > (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).Available() : Writer.prototype.Available.call(b))) && ((b$ as Writer).err == null)) {
			let n: number = 0
			if ((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).Buffered() : Writer.prototype.Buffered.call(b)) == 0) {
				// Large write, empty buffer.
				// Write directly from p to avoid copy.
				let __goscriptTuple12: any = await $.pointerValue<Exclude<io.Writer, null>>((b$ as Writer).wr).Write(p)
				n = __goscriptTuple12[0];
				;(b$ as Writer).err = __goscriptTuple12[1]
			} else {
				n = $.copy($.goSlice((b$ as Writer).buf, (b$ as Writer).n, undefined), p);
				;(b$ as Writer).n = (b$ as Writer).n + (n)
				await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).Flush() : Writer.prototype.Flush.call(b))
			}
			nn = nn + (n)
			p = $.goSlice(p, n, undefined)
		}
		if ((b$ as Writer).err != null) {
			return [nn, (b$ as Writer).err]
		}
		let n = $.copy($.goSlice((b$ as Writer).buf, (b$ as Writer).n, undefined), p);
		;(b$ as Writer).n = (b$ as Writer).n + (n)
		nn = nn + (n)
		return [nn, null]
	}

	public async WriteByte(c: number): globalThis.Promise<$.GoError> {
		let b: Writer | $.VarRef<Writer> | null = this;
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		if ((b$ as Writer).err != null) {
			return (b$ as Writer).err
		}
		if (((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).Available() : Writer.prototype.Available.call(b)) <= 0) && (await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).Flush() : Writer.prototype.Flush.call(b)) != null)) {
			return (b$ as Writer).err
		}
		$.sliceElems((b$ as Writer).buf!)[$.sliceSlot((b$ as Writer).buf!, (b$ as Writer).n)] = c;
		;(b$ as Writer).n++
		return null
	}

	public async WriteRune(r: number): globalThis.Promise<[number, $.GoError]> {
		let b: Writer | $.VarRef<Writer> | null = this;
		let size: number = 0
		let err: $.GoError = null! as $.GoError
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		// Compare as uint32 to correctly handle negative runes.
		if ($.uint(r, 32) < 128) {
			err = await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).WriteByte($.uint(r, 8)) : Writer.prototype.WriteByte.call(b, $.uint(r, 8)))
			if (err != null) {
				return [0, err]
			}
			return [1, null]
		}
		if ((b$ as Writer).err != null) {
			return [0, (b$ as Writer).err]
		}
		let n = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).Available() : Writer.prototype.Available.call(b))
		if (n < 4) {
			{
				await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).Flush() : Writer.prototype.Flush.call(b))
				if ((b$ as Writer).err != null) {
					return [0, (b$ as Writer).err]
				}
			}
			n = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).Available() : Writer.prototype.Available.call(b))
			if (n < 4) {
				// Can only happen if buffer is silly small.
				return (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).WriteString($.runeToString(r)) : Writer.prototype.WriteString.call(b, $.runeToString(r)))
			}
		}
		size = utf8.EncodeRune($.goSlice((b$ as Writer).buf, (b$ as Writer).n, undefined), r);
		;(b$ as Writer).n = (b$ as Writer).n + (size)
		return [size, null]
	}

	public async WriteString(s: string): globalThis.Promise<[number, $.GoError]> {
		let b: Writer | $.VarRef<Writer> | null = this;
		const b$: Writer = b == null ? $.pointerTarget<Writer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<Writer>(b)
		let sw: io.StringWriter | null = null! as io.StringWriter | null
		let tryStringWriter = true

		let nn = 0
		while (($.stringLen(s) > (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).Available() : Writer.prototype.Available.call(b))) && ((b$ as Writer).err == null)) {
			let n: number = 0
			if ((((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).Buffered() : Writer.prototype.Buffered.call(b)) == 0) && (sw == null)) && tryStringWriter) {
				// Check at most once whether b.wr is a StringWriter.
				let __goscriptTuple13: any = $.typeAssertTuple<io.StringWriter | null>((b$ as Writer).wr, "io.StringWriter")
				sw = __goscriptTuple13[0]
				tryStringWriter = __goscriptTuple13[1]
			}
			if (((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).Buffered() : Writer.prototype.Buffered.call(b)) == 0) && tryStringWriter) {
				// Large write, empty buffer, and the underlying writer supports
				// WriteString: forward the write to the underlying StringWriter.
				// This avoids an extra copy.
				let __goscriptTuple14: any = await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<io.StringWriter, null>) : $.pointerValue<Exclude<io.StringWriter, null>>(sw)).WriteString(s)
				n = __goscriptTuple14[0];
				;(b$ as Writer).err = __goscriptTuple14[1]
			} else {
				n = $.copy($.goSlice((b$ as Writer).buf, (b$ as Writer).n, undefined), s);
				;(b$ as Writer).n = (b$ as Writer).n + (n)
				await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as Writer).Flush() : Writer.prototype.Flush.call(b))
			}
			nn = nn + (n)
			s = $.sliceStringOrBytes(s, n, undefined)
		}
		if ((b$ as Writer).err != null) {
			return [nn, (b$ as Writer).err]
		}
		let n = $.copy($.goSlice((b$ as Writer).buf, (b$ as Writer).n, undefined), s);
		;(b$ as Writer).n = (b$ as Writer).n + (n)
		nn = nn + (n)
		return [nn, null]
	}

	static __typeInfo = $.registerStructType(
		"bufio.Writer",
		() => new Writer(),
		() => [$.methodSignature("Available", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("AvailableBuffer", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Buffered", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Flush", [], ["error"], true), $.methodSignature("ReadFrom", [["r", "io.Reader"]], [["n", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]], true), $.methodSignature("Reset", [["w", "io.Writer"]], [], true), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["nn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("WriteByte", [["c", /* @__PURE__ */ $.basicType("uint8")]], ["error"], true), $.methodSignature("WriteRune", [["r", /* @__PURE__ */ $.basicType("int32")]], [["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		Writer,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 16, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("n", /* @__PURE__ */ $.basicType("int"), [2], 40, false, { pkgPath: "bufio" }), /* @__PURE__ */ $.structField("wr", "io.Writer", [3], 48, false, { pkgPath: "bufio" })]
	)
}

export class ReadWriter {
	public get Reader(): Reader | $.VarRef<Reader> | null {
		return this._fields.Reader
	}

	public set Reader(value: Reader | $.VarRef<Reader> | null) {
		this._fields.Reader = value
	}

	public get Writer(): Writer | $.VarRef<Writer> | null {
		return this._fields.Writer
	}

	public set Writer(value: Writer | $.VarRef<Writer> | null) {
		this._fields.Writer = value
	}

	public _fields: {
		Reader: Reader | $.VarRef<Reader> | null
		Writer: Writer | $.VarRef<Writer> | null
	}

	constructor(init?: Partial<{Reader?: Reader | $.VarRef<Reader> | null, Writer?: Writer | $.VarRef<Writer> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Reader: init?.Reader ?? (null! as Reader | $.VarRef<Reader> | null),
			Writer: init?.Writer ?? (null! as Writer | $.VarRef<Writer> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ReadWriter {
		return new ReadWriter(this, true)
	}

	public __goscriptAssign(source: ReadWriter): void {
		const target = this._fields
		const values = source._fields
		target.Reader = values.Reader
		target.Writer = values.Writer
	}

	public Buffered(): any {
		return $.pointerValue<Reader>(this.Reader).Buffered()
	}

	public async Discard(n: any): globalThis.Promise<any> {
		return await $.pointerValue<Reader>(this.Reader).Discard(n)
	}

	public async Peek(n: any): globalThis.Promise<any> {
		return await $.pointerValue<Reader>(this.Reader).Peek(n)
	}

	public async Read(p: any): globalThis.Promise<any> {
		return await $.pointerValue<Reader>(this.Reader).Read(p)
	}

	public async ReadByte(): globalThis.Promise<any> {
		return await $.pointerValue<Reader>(this.Reader).ReadByte()
	}

	public async ReadBytes(delim: any): globalThis.Promise<any> {
		return await $.pointerValue<Reader>(this.Reader).ReadBytes(delim)
	}

	public async ReadLine(): globalThis.Promise<any> {
		return await $.pointerValue<Reader>(this.Reader).ReadLine()
	}

	public async ReadRune(): globalThis.Promise<any> {
		return await $.pointerValue<Reader>(this.Reader).ReadRune()
	}

	public async ReadSlice(delim: any): globalThis.Promise<any> {
		return await $.pointerValue<Reader>(this.Reader).ReadSlice(delim)
	}

	public async ReadString(delim: any): globalThis.Promise<any> {
		return await $.pointerValue<Reader>(this.Reader).ReadString(delim)
	}

	public Reset(r: any): any {
		return $.pointerValue<Reader>(this.Reader).Reset(r)
	}

	public Size(): any {
		return $.pointerValue<Reader>(this.Reader).Size()
	}

	public UnreadByte(): any {
		return $.pointerValue<Reader>(this.Reader).UnreadByte()
	}

	public UnreadRune(): any {
		return $.pointerValue<Reader>(this.Reader).UnreadRune()
	}

	public async WriteTo(w: any): globalThis.Promise<any> {
		return await $.pointerValue<Reader>(this.Reader).WriteTo(w)
	}

	public async collectFragments(delim: any): globalThis.Promise<any> {
		return await $.pointerValue<Reader>(this.Reader).collectFragments(delim)
	}

	public async fill(): globalThis.Promise<any> {
		return await $.pointerValue<Reader>(this.Reader).fill()
	}

	public readErr(): any {
		return $.pointerValue<Reader>(this.Reader).readErr()
	}

	public reset(buf: any, r: any): any {
		return $.pointerValue<Reader>(this.Reader).reset(buf, r)
	}

	public async writeBuf(w: any): globalThis.Promise<any> {
		return await $.pointerValue<Reader>(this.Reader).writeBuf(w)
	}

	public Available(): any {
		return $.pointerValue<Writer>(this.Writer).Available()
	}

	public AvailableBuffer(): any {
		return $.pointerValue<Writer>(this.Writer).AvailableBuffer()
	}

	public async Flush(): globalThis.Promise<any> {
		return await $.pointerValue<Writer>(this.Writer).Flush()
	}

	public async ReadFrom(r: any): globalThis.Promise<any> {
		return await $.pointerValue<Writer>(this.Writer).ReadFrom(r)
	}

	public async Write(p: any): globalThis.Promise<any> {
		return await $.pointerValue<Writer>(this.Writer).Write(p)
	}

	public async WriteByte(c: any): globalThis.Promise<any> {
		return await $.pointerValue<Writer>(this.Writer).WriteByte(c)
	}

	public async WriteRune(r: any): globalThis.Promise<any> {
		return await $.pointerValue<Writer>(this.Writer).WriteRune(r)
	}

	public async WriteString(s: any): globalThis.Promise<any> {
		return await $.pointerValue<Writer>(this.Writer).WriteString(s)
	}

	static __typeInfo = $.registerStructType(
		"bufio.ReadWriter",
		() => new ReadWriter(),
		() => [$.methodSignature("Buffered", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Discard", [["n", /* @__PURE__ */ $.basicType("int")]], [["discarded", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("Peek", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadByte", [], [/* @__PURE__ */ $.basicType("uint8"), "error"]), $.methodSignature("ReadBytes", [["delim", /* @__PURE__ */ $.basicType("uint8")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ReadLine", [], [["line", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["isPrefix", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]]), $.methodSignature("ReadRune", [], [["r", /* @__PURE__ */ $.basicType("int32")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadSlice", [["delim", /* @__PURE__ */ $.basicType("uint8")]], [["line", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]]), $.methodSignature("ReadString", [["delim", /* @__PURE__ */ $.basicType("uint8")]], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Reset", [["r", "io.Reader"]]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("UnreadByte", [], ["error"]), $.methodSignature("UnreadRune", [], ["error"]), $.methodSignature("WriteTo", [["w", "io.Writer"]], [["n", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]]), $.methodSignature("collectFragments", [["delim", /* @__PURE__ */ $.basicType("uint8")]], [["fullBuffers", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))], ["finalFragment", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["totalLen", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("fill"), $.methodSignature("readErr", [], ["error"]), $.methodSignature("reset", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["r", "io.Reader"]]), $.methodSignature("writeBuf", [["w", "io.Writer"]], [/* @__PURE__ */ $.basicType("int64"), "error"]), $.methodSignature("Available", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("AvailableBuffer", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Flush", [], ["error"]), $.methodSignature("ReadFrom", [["r", "io.Reader"]], [["n", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["nn", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("WriteByte", [["c", /* @__PURE__ */ $.basicType("uint8")]], ["error"]), $.methodSignature("WriteRune", [["r", /* @__PURE__ */ $.basicType("int32")]], [["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("int"), "error"])],
		ReadWriter,
		() => [/* @__PURE__ */ $.structField("Reader", /* @__PURE__ */ $.pointerType("bufio.Reader"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Writer", /* @__PURE__ */ $.pointerType("bufio.Writer"), [1], 8, true, { anonymous: true })]
	)
}

export const defaultBufSize: number = 4096

export const minReadBufferSize: number = 16

export const maxConsecutiveEmptyReads: number = 100

export let ErrInvalidUnreadByte: $.GoError = errors.New("bufio: invalid use of UnreadByte")

export function __goscript_set_ErrInvalidUnreadByte(__goscriptValue: $.GoError): void {
	ErrInvalidUnreadByte = __goscriptValue
}

export let ErrInvalidUnreadRune: $.GoError = errors.New("bufio: invalid use of UnreadRune")

export function __goscript_set_ErrInvalidUnreadRune(__goscriptValue: $.GoError): void {
	ErrInvalidUnreadRune = __goscriptValue
}

export let ErrBufferFull: $.GoError = errors.New("bufio: buffer full")

export function __goscript_set_ErrBufferFull(__goscriptValue: $.GoError): void {
	ErrBufferFull = __goscriptValue
}

export let ErrNegativeCount: $.GoError = errors.New("bufio: negative count")

export function __goscript_set_ErrNegativeCount(__goscriptValue: $.GoError): void {
	ErrNegativeCount = __goscriptValue
}

export function NewReaderSize(rd: io.Reader | null, size: number): Reader | $.VarRef<Reader> | null {
	// Is it already a Reader?
	let __goscriptTuple9: any = $.typeAssertTuple<Reader | $.VarRef<Reader> | null>(rd, /* @__PURE__ */ $.pointerType("bufio.Reader"))
	let b: Reader | $.VarRef<Reader> | null = __goscriptTuple9[0]
	let ok = __goscriptTuple9[1]
	if (ok && ($.sliceLen($.pointerValue<Reader>(b).buf) >= size)) {
		return b
	}
	let r: Reader | $.VarRef<Reader> | null = new Reader()
	void (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Reader).reset($.makeSlice<number>($.max(size, 16), undefined, "byte"), rd) : Reader.prototype.reset.call(r, $.makeSlice<number>($.max(size, 16), undefined, "byte"), rd))
	return r
}

export function NewReader(rd: io.Reader | null): Reader | $.VarRef<Reader> | null {
	return NewReaderSize(rd, 4096)
}

export let errNegativeRead: $.GoError = errors.New("bufio: reader returned negative count from Read")

export function __goscript_set_errNegativeRead(__goscriptValue: $.GoError): void {
	errNegativeRead = __goscriptValue
}

export let errNegativeWrite: $.GoError = errors.New("bufio: writer returned negative count from Write")

export function __goscript_set_errNegativeWrite(__goscriptValue: $.GoError): void {
	errNegativeWrite = __goscriptValue
}

export function NewWriterSize(w: io.Writer | null, size: number): Writer | $.VarRef<Writer> | null {
	// Is it already a Writer?
	let __goscriptTuple15: any = $.typeAssertTuple<Writer | $.VarRef<Writer> | null>(w, /* @__PURE__ */ $.pointerType("bufio.Writer"))
	let b: Writer | $.VarRef<Writer> | null = __goscriptTuple15[0]
	let ok = __goscriptTuple15[1]
	if (ok && ($.sliceLen($.pointerValue<Writer>(b).buf) >= size)) {
		return b
	}
	if (size <= 0) {
		size = 4096
	}
	return new Writer({buf: $.makeSlice<number>(size, undefined, "byte"), wr: w})
}

export function NewWriter(w: io.Writer | null): Writer | $.VarRef<Writer> | null {
	return NewWriterSize(w, 4096)
}

export function NewReadWriter(r: Reader | $.VarRef<Reader> | null, w: Writer | $.VarRef<Writer> | null): ReadWriter | $.VarRef<ReadWriter> | null {
	return new ReadWriter({Reader: r, Writer: w})
}
