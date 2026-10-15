// Generated file based on hex.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as slices from "@goscript/slices/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/slices/index.js"
import "@goscript/strings/index.js"

$.registerTypePackagePath("encoding/hex", ["hex.InvalidByteError", "hex.encoder", "hex.decoder", "hex.dumper"])

export type InvalidByteError = number

$.registerNamedValueType(
	"hex.InvalidByteError",
	{Error: (receiver: any, ...args: any[]) => (InvalidByteError_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*hex.InvalidByteError",
	{Error: (receiver: any, ...args: any[]) => (InvalidByteError_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class encoder {
	public get w(): io.Writer | null {
		return this._fields.w
	}

	public set w(value: io.Writer | null) {
		this._fields.w = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get out(): Uint8Array {
		return this._fields.out
	}

	public set out(value: Uint8Array) {
		this._fields.out = value
	}

	public _fields: {
		w: io.Writer | null
		err: $.GoError
		out: Uint8Array
	}

	constructor(init?: Partial<{w?: io.Writer | null, err?: $.GoError, out?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			w: init?.w ?? (null! as io.Writer | null),
			err: init?.err ?? (null! as $.GoError),
			out: init?.out !== undefined ? $.cloneArrayValue(init.out, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1024)) : $.arrayValue(new Uint8Array(1024))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): encoder {
		return new encoder(this, true)
	}

	public __goscriptAssign(source: encoder): void {
		const target = this._fields
		const values = source._fields
		target.w = $.assignFieldValue(target.w, values.w, "io.Writer")
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.out = $.assignFieldValue(target.out, values.out, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1024))
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let e: encoder | $.VarRef<encoder> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const e$: encoder = e == null ? $.pointerTarget<encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encoder>(e)
		while (($.sliceLen(p) > 0) && ((e$ as encoder).err == null)) {
			let chunkSize = 512
			if ($.sliceLen(p) < chunkSize) {
				chunkSize = $.sliceLen(p)
			}

			let written: number = 0
			let encoded = Encode($.goSlice((e$ as encoder).out, undefined, undefined), $.goSlice(p, undefined, chunkSize))
			let __goscriptTuple1: any = await $.pointerValue<Exclude<io.Writer, null>>((e$ as encoder).w).Write($.goSlice((e$ as encoder).out, undefined, encoded))
			written = __goscriptTuple1[0];
			;(e$ as encoder).err = __goscriptTuple1[1]
			n = n + (globalThis.Math.trunc(written / 2))
			p = $.goSlice(p, chunkSize, undefined)
		}
		return [n, (e$ as encoder).err]
	}

	static __typeInfo = $.registerStructType(
		"hex.encoder",
		() => new encoder(),
		() => [$.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		encoder,
		() => [/* @__PURE__ */ $.structField("w", "io.Writer", [0], 0, false, { pkgPath: "encoding/hex" }), /* @__PURE__ */ $.structField("err", "error", [1], 16, false, { pkgPath: "encoding/hex" }), /* @__PURE__ */ $.structField("out", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1024), [2], 32, false, { pkgPath: "encoding/hex" })]
	)
}

export class decoder {
	public get r(): io.Reader | null {
		return this._fields.r
	}

	public set r(value: io.Reader | null) {
		this._fields.r = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get _in(): $.Slice<number> {
		return this._fields._in
	}

	public set _in(value: $.Slice<number>) {
		this._fields._in = value
	}

	public get arr(): Uint8Array {
		return this._fields.arr
	}

	public set arr(value: Uint8Array) {
		this._fields.arr = value
	}

	public _fields: {
		r: io.Reader | null
		err: $.GoError
		_in: $.Slice<number>
		arr: Uint8Array
	}

	constructor(init?: Partial<{r?: io.Reader | null, err?: $.GoError, _in?: $.Slice<number>, arr?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			r: init?.r ?? (null! as io.Reader | null),
			err: init?.err ?? (null! as $.GoError),
			_in: init?._in ?? (null! as $.Slice<number>),
			arr: init?.arr !== undefined ? $.cloneArrayValue(init.arr, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1024)) : $.arrayValue(new Uint8Array(1024))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decoder {
		return new decoder(this, true)
	}

	public __goscriptAssign(source: decoder): void {
		const target = this._fields
		const values = source._fields
		target.r = $.assignFieldValue(target.r, values.r, "io.Reader")
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target._in = values._in
		target.arr = $.assignFieldValue(target.arr, values.arr, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1024))
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let d: decoder | $.VarRef<decoder> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const d$: decoder = d == null ? $.pointerTarget<decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decoder>(d)
		// Fill internal buffer with sufficient bytes to decode
		if (($.sliceLen((d$ as decoder)._in) < 2) && ((d$ as decoder).err == null)) {
			let numCopy: number = 0
			let numRead: number = 0
			numCopy = $.copy($.goSlice((d$ as decoder).arr, undefined, undefined), (d$ as decoder)._in)
			let __goscriptTuple2: any = await $.pointerValue<Exclude<io.Reader, null>>((d$ as decoder).r).Read($.goSlice((d$ as decoder).arr, numCopy, undefined))
			numRead = __goscriptTuple2[0];
			;(d$ as decoder).err = __goscriptTuple2[1];
			;(d$ as decoder)._in = $.goSlice((d$ as decoder).arr, undefined, numCopy + numRead)
			if (($.comparableEqual((d$ as decoder).err, io.EOF)) && (($.sliceLen((d$ as decoder)._in) % 2) != 0)) {

				{
					let a = $.indexByteString("\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\xff\xff\xff\xff\xff\xff\xff\x0a\x0b\x0c\x0d\x0e\x0f\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0a\x0b\x0c\x0d\x0e\x0f\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff", $.arrayIndex((d$ as decoder)._in!, $.sliceLen((d$ as decoder)._in) - 1))
					if (a > 0x0f) {
						;(d$ as decoder).err = $.namedValueInterfaceValue<$.GoError>($.uint($.arrayIndex((d$ as decoder)._in!, $.sliceLen((d$ as decoder)._in) - 1), 8), "hex.InvalidByteError", {"Error": InvalidByteError_Error}, /* @__PURE__ */ $.basicType("uint8", "hex.InvalidByteError"))
					} else {
						;(d$ as decoder).err = io.ErrUnexpectedEOF
					}
				}
			}
		}

		// Decode internal buffer into output buffer
		{
			let numAvail = globalThis.Math.trunc($.sliceLen((d$ as decoder)._in) / 2)
			if ($.sliceLen(p) > numAvail) {
				p = $.goSlice(p, undefined, numAvail)
			}
		}
		let __goscriptTuple3: any = Decode(p, $.goSlice((d$ as decoder)._in, undefined, $.sliceLen(p) * 2))
		let numDec = __goscriptTuple3[0]
		err = __goscriptTuple3[1];
		;(d$ as decoder)._in = $.goSlice((d$ as decoder)._in, 2 * numDec, undefined)
		if (err != null) {
			let __goscriptAssign0_0: $.Slice<number> = null
			let __goscriptAssign0_1: $.GoError = err;
			;(d$ as decoder)._in = __goscriptAssign0_0;
			;(d$ as decoder).err = __goscriptAssign0_1
		}

		if ($.sliceLen((d$ as decoder)._in) < 2) {
			return [numDec, (d$ as decoder).err]
		}
		return [numDec, null]
	}

	static __typeInfo = $.registerStructType(
		"hex.decoder",
		() => new decoder(),
		() => [$.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		decoder,
		() => [/* @__PURE__ */ $.structField("r", "io.Reader", [0], 0, false, { pkgPath: "encoding/hex" }), /* @__PURE__ */ $.structField("err", "error", [1], 16, false, { pkgPath: "encoding/hex" }), /* @__PURE__ */ $.structField("in", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 32, false, { key: "_in", pkgPath: "encoding/hex" }), /* @__PURE__ */ $.structField("arr", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 1024), [3], 56, false, { pkgPath: "encoding/hex" })]
	)
}

export class dumper {
	public get w(): io.Writer | null {
		return this._fields.w
	}

	public set w(value: io.Writer | null) {
		this._fields.w = value
	}

	public get rightChars(): Uint8Array {
		return this._fields.rightChars
	}

	public set rightChars(value: Uint8Array) {
		this._fields.rightChars = value
	}

	public get buf(): Uint8Array {
		return this._fields.buf
	}

	public set buf(value: Uint8Array) {
		this._fields.buf = value
	}

	public get used(): number {
		return this._fields.used
	}

	public set used(value: number) {
		this._fields.used = value
	}

	public get n(): number {
		return this._fields.n
	}

	public set n(value: number) {
		this._fields.n = value
	}

	public get closed(): boolean {
		return this._fields.closed
	}

	public set closed(value: boolean) {
		this._fields.closed = value
	}

	public _fields: {
		w: io.Writer | null
		rightChars: Uint8Array
		buf: Uint8Array
		used: number
		n: number
		closed: boolean
	}

	constructor(init?: Partial<{w?: io.Writer | null, rightChars?: Uint8Array, buf?: Uint8Array, used?: number, n?: number, closed?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			w: init?.w ?? (null! as io.Writer | null),
			rightChars: init?.rightChars !== undefined ? $.cloneArrayValue(init.rightChars, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 18)) : $.arrayValue(new Uint8Array(18)),
			buf: init?.buf !== undefined ? $.cloneArrayValue(init.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 14)) : $.arrayValue(new Uint8Array(14)),
			used: init?.used ?? (0 as number),
			n: init?.n ?? (0 as number),
			closed: init?.closed ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dumper {
		return new dumper(this, true)
	}

	public __goscriptAssign(source: dumper): void {
		const target = this._fields
		const values = source._fields
		target.w = $.assignFieldValue(target.w, values.w, "io.Writer")
		target.rightChars = $.assignFieldValue(target.rightChars, values.rightChars, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 18))
		target.buf = $.assignFieldValue(target.buf, values.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 14))
		target.used = values.used
		target.n = values.n
		target.closed = values.closed
	}

	public async Close(): globalThis.Promise<$.GoError> {
		let h: dumper | $.VarRef<dumper> | null = this;
		let err: $.GoError = null! as $.GoError
		const h$: dumper = h == null ? $.pointerTarget<dumper>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<dumper>(h)
		// See the comments in Write() for the details of this format.
		if ((h$ as dumper).closed) {
			return err
		}
		;(h$ as dumper).closed = true
		if ((h$ as dumper).used == 0) {
			return err
		}
		;(h$ as dumper).buf[0] = 32;
		;(h$ as dumper).buf[1] = 32;
		;(h$ as dumper).buf[2] = 32;
		;(h$ as dumper).buf[3] = 32;
		;(h$ as dumper).buf[4] = 124
		let nBytes = (h$ as dumper).used
		while ((h$ as dumper).used < 16) {
			let l = 3
			if ((h$ as dumper).used == 7) {
				l = 4
			} else {
				if ((h$ as dumper).used == 15) {
					l = 5
				}
			}
			let __goscriptTuple4: any = await $.pointerValue<Exclude<io.Writer, null>>((h$ as dumper).w).Write($.goSlice((h$ as dumper).buf, undefined, l))
			err = __goscriptTuple4[1]
			if (err != null) {
				return err
			}
			;(h$ as dumper).used++
		}
		;(h$ as dumper).rightChars[nBytes] = 124;
		;(h$ as dumper).rightChars[nBytes + 1] = 10
		let __goscriptTuple5: any = await $.pointerValue<Exclude<io.Writer, null>>((h$ as dumper).w).Write($.goSlice((h$ as dumper).rightChars, undefined, nBytes + 2))
		err = __goscriptTuple5[1]
		return err
	}

	public async Write(data: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let h: dumper | $.VarRef<dumper> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const h$: dumper = h == null ? $.pointerTarget<dumper>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<dumper>(h)
		if ((h$ as dumper).closed) {
			return [0, errors.New("encoding/hex: dumper closed")]
		}

		// Output lines look like:
		// 00000010  2e 2f 30 31 32 33 34 35  36 37 38 39 3a 3b 3c 3d  |./0123456789:;<=|
		// ^ offset                          ^ extra space              ^ ASCII of line.
		for (let __goscriptRangeTarget1 = data, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			if ((h$ as dumper).used == 0) {
				// At the beginning of a line we print the current
				// offset in hex.
				;(h$ as dumper).buf[0] = $.uint($.uint($.uint64Shr((h$ as dumper).n, 24n), 64), 8);
				;(h$ as dumper).buf[1] = $.uint($.uint($.uint64Shr((h$ as dumper).n, 16n), 64), 8);
				;(h$ as dumper).buf[2] = $.uint($.uint($.uint64Shr((h$ as dumper).n, 8n), 64), 8);
				;(h$ as dumper).buf[3] = $.uint((h$ as dumper).n, 8)
				Encode($.goSlice((h$ as dumper).buf, 4, undefined), $.goSlice((h$ as dumper).buf, undefined, 4));
				;(h$ as dumper).buf[12] = 32;
				;(h$ as dumper).buf[13] = 32
				let __goscriptTuple6: any = await $.pointerValue<Exclude<io.Writer, null>>((h$ as dumper).w).Write($.goSlice((h$ as dumper).buf, 4, undefined))
				err = __goscriptTuple6[1]
				if (err != null) {
					return [n, err]
				}
			}
			Encode($.goSlice((h$ as dumper).buf, undefined, undefined), $.goSlice(data, i, i + 1));
			;(h$ as dumper).buf[2] = 32
			let l = 3
			if ((h$ as dumper).used == 7) {
				// There's an additional space after the 8th byte.
				;(h$ as dumper).buf[3] = 32
				l = 4
			} else {
				if ((h$ as dumper).used == 15) {
					// At the end of the line there's an extra space and
					// the bar for the right column.
					;(h$ as dumper).buf[3] = 32;
					;(h$ as dumper).buf[4] = 124
					l = 5
				}
			}
			let __goscriptTuple7: any = await $.pointerValue<Exclude<io.Writer, null>>((h$ as dumper).w).Write($.goSlice((h$ as dumper).buf, undefined, l))
			err = __goscriptTuple7[1]
			if (err != null) {
				return [n, err]
			}
			n++;
			;(h$ as dumper).rightChars[(h$ as dumper).used] = toChar(((__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] as number));
			;(h$ as dumper).used++;
			;(h$ as dumper).n++
			if ((h$ as dumper).used == 16) {
				;(h$ as dumper).rightChars[16] = 124;
				;(h$ as dumper).rightChars[17] = 10
				let __goscriptTuple8: any = await $.pointerValue<Exclude<io.Writer, null>>((h$ as dumper).w).Write($.goSlice((h$ as dumper).rightChars, undefined, undefined))
				err = __goscriptTuple8[1]
				if (err != null) {
					return [n, err]
				}
				;(h$ as dumper).used = 0
			}
		}
		return [n, err]
	}

	static __typeInfo = $.registerStructType(
		"hex.dumper",
		() => new dumper(),
		() => [$.methodSignature("Close", [], [["err", "error"]], true), $.methodSignature("Write", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		dumper,
		() => [/* @__PURE__ */ $.structField("w", "io.Writer", [0], 0, false, { pkgPath: "encoding/hex" }), /* @__PURE__ */ $.structField("rightChars", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 18), [1], 16, false, { pkgPath: "encoding/hex" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 14), [2], 34, false, { pkgPath: "encoding/hex" }), /* @__PURE__ */ $.structField("used", /* @__PURE__ */ $.basicType("int"), [3], 48, false, { pkgPath: "encoding/hex" }), /* @__PURE__ */ $.structField("n", /* @__PURE__ */ $.basicType("uint"), [4], 56, false, { pkgPath: "encoding/hex" }), /* @__PURE__ */ $.structField("closed", /* @__PURE__ */ $.basicType("bool"), [5], 64, false, { pkgPath: "encoding/hex" })]
	)
}

export const hextable: string = "0123456789abcdef"

export const reverseHexTable: string = "\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x00\x01\x02\x03\x04\x05\x06\x07\x08\t\xff\xff\xff\xff\xff\xff\xff\n\x0b\x0c\r\x0e\x0f\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\n\x0b\x0c\r\x0e\x0f\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"

export const bufferSize: number = 1024

export function EncodedLen(n: number): number {
	return n * 2
}

export function Encode(dst: $.Slice<number>, src: $.Slice<number>): number {
	let j = 0
	for (let __goscriptRangeTarget0 = src, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(dst), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let v = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8);
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] = $.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", $.uintShr(v, 4, 8));
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j + 1)] = $.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", v & 0x0f)
		j = j + (2)
	}
	return $.sliceLen(src) * 2
}

export function AppendEncode(dst: $.Slice<number>, src: $.Slice<number>): $.Slice<number> {
	let n = EncodedLen($.sliceLen(src))
	dst = (slices.Grow(dst, n) as $.Slice<number>)
	Encode($.goSlice($.goSlice(dst, $.sliceLen(dst), undefined), undefined, n), src)
	return $.goSlice(dst, undefined, $.sliceLen(dst) + n)
}

export let ErrLength: $.GoError = errors.New("encoding/hex: odd length hex string")

export function __goscript_set_ErrLength(__goscriptValue: $.GoError): void {
	ErrLength = __goscriptValue
}

export async function InvalidByteError_Error(e: InvalidByteError): globalThis.Promise<string> {
	return fmt.Sprintf("encoding/hex: invalid byte: %#U", $.basicInterfaceValue($.int(e, 32), "rune", "int32"))
}

export function DecodedLen(x: number): number {
	return globalThis.Math.trunc(x / 2)
}

export function Decode(dst: $.Slice<number>, src: $.Slice<number>): [number, $.GoError] {
	let i = 0
	let j = 0
	for (let __goscriptSliceWindow1 = $.sliceRange(src), __goscriptSliceWindow2 = $.sliceRange(dst); j < (__goscriptSliceWindow1.length - 1); j = j + (2)) {
		let p = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j)] as number)
		let q = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j + 1)] as number)

		let a = $.indexByteString("\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\xff\xff\xff\xff\xff\xff\xff\x0a\x0b\x0c\x0d\x0e\x0f\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0a\x0b\x0c\x0d\x0e\x0f\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff", p)
		let b = $.indexByteString("\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\xff\xff\xff\xff\xff\xff\xff\x0a\x0b\x0c\x0d\x0e\x0f\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0a\x0b\x0c\x0d\x0e\x0f\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff", q)
		if (a > 0x0f) {
			return [i, $.namedValueInterfaceValue<$.GoError>($.uint(p, 8), "hex.InvalidByteError", {"Error": InvalidByteError_Error}, /* @__PURE__ */ $.basicType("uint8", "hex.InvalidByteError"))]
		}
		if (b > 0x0f) {
			return [i, $.namedValueInterfaceValue<$.GoError>($.uint(q, 8), "hex.InvalidByteError", {"Error": InvalidByteError_Error}, /* @__PURE__ */ $.basicType("uint8", "hex.InvalidByteError"))]
		}
		;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = $.uint((((a << 4) & 0xff)) | b, 8)
		i++
	}
	if (($.sliceLen(src) % 2) == 1) {
		// Check for invalid char before reporting bad length,
		// since the invalid char (if present) is an earlier problem.
		if ($.indexByteString("\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\xff\xff\xff\xff\xff\xff\xff\x0a\x0b\x0c\x0d\x0e\x0f\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0a\x0b\x0c\x0d\x0e\x0f\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff", $.arrayIndex(src!, j)) > 0x0f) {
			return [i, $.namedValueInterfaceValue<$.GoError>($.uint($.arrayIndex(src!, j), 8), "hex.InvalidByteError", {"Error": InvalidByteError_Error}, /* @__PURE__ */ $.basicType("uint8", "hex.InvalidByteError"))]
		}
		return [i, ErrLength]
	}
	return [i, null]
}

export function AppendDecode(dst: $.Slice<number>, src: $.Slice<number>): [$.Slice<number>, $.GoError] {
	let n = DecodedLen($.sliceLen(src))
	dst = (slices.Grow(dst, n) as $.Slice<number>)
	let __goscriptTuple0: any = Decode($.goSlice($.goSlice(dst, $.sliceLen(dst), undefined), undefined, n), src)
	n = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	return [$.goSlice(dst, undefined, $.sliceLen(dst) + n), err]
}

export function EncodeToString(src: $.Slice<number>): string {
	let dst: $.Slice<number> = $.makeSlice<number>(EncodedLen($.sliceLen(src)), undefined, "byte")
	Encode(dst, src)
	return $.bytesToString(dst)
}

export function DecodeString(s: string): [$.Slice<number>, $.GoError] {
	let dst: $.Slice<number> = $.makeSlice<number>(DecodedLen($.stringLen(s)), undefined, "byte")
	let [n, err] = Decode(dst, $.stringToBytes(s))
	return [$.goSlice(dst, undefined, n), err]
}

export async function Dump(data: $.Slice<number>): globalThis.Promise<string> {
	if ($.sliceLen(data) == 0) {
		return ""
	}

	let buf: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
	// Dumper will write 79 bytes per complete 16 byte chunk, and at least
	// 64 bytes for whatever remains. Round the allocation up, since only a
	// maximum of 15 bytes will be wasted.
	buf.value.Grow((1 + (globalThis.Math.trunc(($.sliceLen(data) - 1) / 16))) * 79)

	let __goscriptShadow0 = Dumper($.interfaceValue<io.Writer | null>(buf, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))
	await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<io.WriteCloser, null>) : $.pointerValue<Exclude<io.WriteCloser, null>>(__goscriptShadow0)).Write(data)
	await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<io.WriteCloser, null>) : $.pointerValue<Exclude<io.WriteCloser, null>>(__goscriptShadow0)).Close()
	return buf.value.String()
}

export function NewEncoder(w: io.Writer | null): io.Writer | null {
	return $.interfaceValue<io.Writer | null>(new encoder({w: w}), "*hex.encoder", /* @__PURE__ */ $.pointerType("hex.encoder"))
}

export function NewDecoder(r: io.Reader | null): io.Reader | null {
	return $.interfaceValue<io.Reader | null>(new decoder({r: r}), "*hex.decoder", /* @__PURE__ */ $.pointerType("hex.decoder"))
}

export function Dumper(w: io.Writer | null): io.WriteCloser | null {
	return $.interfaceValue<io.WriteCloser | null>(new dumper({w: w}), "*hex.dumper", /* @__PURE__ */ $.pointerType("hex.dumper"))
}

export function toChar(b: number): number {
	if ((b < 32) || (b > 126)) {
		return 46
	}
	return b
}
