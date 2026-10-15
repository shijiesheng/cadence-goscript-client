// Generated file based on transform.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/unicode/utf8/index.js"

$.registerTypePackagePath("golang.org/x/text/transform", ["transform.Transformer", "transform.SpanningTransformer", "transform.NopResetter", "transform.Reader", "transform.Writer", "transform.nop", "transform.discard", "transform.chain", "transform.link", "transform.removeF"])

export type Transformer = {
	Reset(): void
	Transform(dst: $.Slice<number>, src: $.Slice<number>, atEOF: boolean): [number, number, $.GoError] | globalThis.Promise<[number, number, $.GoError]>
}

$.registerInterfaceType(
	"transform.Transformer",
	null,
	[$.methodSignature("Reset"), $.methodSignature("Transform", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["nDst", /* @__PURE__ */ $.basicType("int")], ["nSrc", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export type SpanningTransformer = {
	Reset(): void
	Span(src: $.Slice<number>, atEOF: boolean): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	Transform(dst: $.Slice<number>, src: $.Slice<number>, atEOF: boolean): [number, number, $.GoError] | globalThis.Promise<[number, number, $.GoError]>
}

$.registerInterfaceType(
	"transform.SpanningTransformer",
	null,
	[$.methodSignature("Reset"), $.methodSignature("Span", [["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("Transform", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["nDst", /* @__PURE__ */ $.basicType("int")], ["nSrc", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export type removeF = ((r: number) => boolean | globalThis.Promise<boolean>) | null

$.registerNamedValueType(
	"transform.removeF",
	{Reset: (receiver: any, ...args: any[]) => (removeF_Reset as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Transform: (receiver: any, ...args: any[]) => (removeF_Transform as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Reset"), $.methodSignature("Transform", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["nDst", /* @__PURE__ */ $.basicType("int")], ["nSrc", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

$.registerNamedValueType(
	"*transform.removeF",
	{Reset: (receiver: any, ...args: any[]) => (removeF_Reset as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Transform: (receiver: any, ...args: any[]) => (removeF_Transform as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Reset"), $.methodSignature("Transform", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["nDst", /* @__PURE__ */ $.basicType("int")], ["nSrc", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export class NopResetter {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NopResetter {
		return new NopResetter(this, true)
	}

	public __goscriptAssign(source: NopResetter): void {
	}

	public Reset(): void {
	}

	static __typeInfo = $.registerStructType(
		"transform.NopResetter",
		() => new NopResetter(),
		() => [$.methodSignature("Reset")],
		NopResetter,
		() => []
	)
}

export class Reader {
	public get r(): io.Reader | null {
		return this._fields.r
	}

	public set r(value: io.Reader | null) {
		this._fields.r = value
	}

	public get t(): Transformer | null {
		return this._fields.t
	}

	public set t(value: Transformer | null) {
		this._fields.t = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	// dst[dst0:dst1] contains bytes that have been transformed by t but
	// not yet copied out via Read.
	public get dst(): $.Slice<number> {
		return this._fields.dst
	}

	public set dst(value: $.Slice<number>) {
		this._fields.dst = value
	}

	public get dst0(): number {
		return this._fields.dst0
	}

	public set dst0(value: number) {
		this._fields.dst0 = value
	}

	public get dst1(): number {
		return this._fields.dst1
	}

	public set dst1(value: number) {
		this._fields.dst1 = value
	}

	// src[src0:src1] contains bytes that have been read from r but not
	// yet transformed through t.
	public get src(): $.Slice<number> {
		return this._fields.src
	}

	public set src(value: $.Slice<number>) {
		this._fields.src = value
	}

	public get src0(): number {
		return this._fields.src0
	}

	public set src0(value: number) {
		this._fields.src0 = value
	}

	public get src1(): number {
		return this._fields.src1
	}

	public set src1(value: number) {
		this._fields.src1 = value
	}

	// transformComplete is whether the transformation is complete,
	// regardless of whether or not it was successful.
	public get transformComplete(): boolean {
		return this._fields.transformComplete
	}

	public set transformComplete(value: boolean) {
		this._fields.transformComplete = value
	}

	public _fields: {
		r: io.Reader | null
		t: Transformer | null
		err: $.GoError
		dst: $.Slice<number>
		dst0: number
		dst1: number
		src: $.Slice<number>
		src0: number
		src1: number
		transformComplete: boolean
	}

	constructor(init?: Partial<{r?: io.Reader | null, t?: Transformer | null, err?: $.GoError, dst?: $.Slice<number>, dst0?: number, dst1?: number, src?: $.Slice<number>, src0?: number, src1?: number, transformComplete?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			r: init?.r ?? (null! as io.Reader | null),
			t: init?.t ?? (null! as Transformer | null),
			err: init?.err ?? (null! as $.GoError),
			dst: init?.dst ?? (null! as $.Slice<number>),
			dst0: init?.dst0 ?? (0 as number),
			dst1: init?.dst1 ?? (0 as number),
			src: init?.src ?? (null! as $.Slice<number>),
			src0: init?.src0 ?? (0 as number),
			src1: init?.src1 ?? (0 as number),
			transformComplete: init?.transformComplete ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Reader {
		return new Reader(this, true)
	}

	public __goscriptAssign(source: Reader): void {
		const target = this._fields
		const values = source._fields
		target.r = $.assignFieldValue(target.r, values.r, "io.Reader")
		target.t = $.assignFieldValue(target.t, values.t, "transform.Transformer")
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.dst = values.dst
		target.dst0 = values.dst0
		target.dst1 = values.dst1
		target.src = values.src
		target.src0 = values.src0
		target.src1 = values.src1
		target.transformComplete = values.transformComplete
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let r: Reader | $.VarRef<Reader> | null = this;
		const r$: Reader = r == null ? $.pointerTarget<Reader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Reader>(r)
		let n = 0
		let err = null
		while (true) {
			// Copy out any transformed bytes and return the final error if we are done.
			if ((r$ as Reader).dst0 != (r$ as Reader).dst1) {
				n = $.copy(p, $.goSlice((r$ as Reader).dst, (r$ as Reader).dst0, (r$ as Reader).dst1));
				;(r$ as Reader).dst0 = (r$ as Reader).dst0 + (n)
				if (((r$ as Reader).dst0 == (r$ as Reader).dst1) && (r$ as Reader).transformComplete) {
					return [n, (r$ as Reader).err]
				}
				return [n, null]
			} else {
				if ((r$ as Reader).transformComplete) {
					return [0, (r$ as Reader).err]
				}
			}

			// Try to transform some source bytes, or to flush the transformer if we
			// are out of source bytes. We do this even if r.r.Read returned an error.
			// As the io.Reader documentation says, "process the n > 0 bytes returned
			// before considering the error".
			if (((r$ as Reader).src0 != (r$ as Reader).src1) || ((r$ as Reader).err != null)) {
				;(r$ as Reader).dst0 = 0
				let __goscriptTuple0: any = await $.pointerValue<Exclude<Transformer, null>>((r$ as Reader).t).Transform((r$ as Reader).dst, $.goSlice((r$ as Reader).src, (r$ as Reader).src0, (r$ as Reader).src1), $.comparableEqual((r$ as Reader).err, io.EOF));
				;(r$ as Reader).dst1 = __goscriptTuple0[0]
				n = __goscriptTuple0[1]
				err = __goscriptTuple0[2];
				;(r$ as Reader).src0 = (r$ as Reader).src0 + (n)

				switch ((true as boolean)) {
					case err == null:
					{
						if ((r$ as Reader).src0 != (r$ as Reader).src1) {
							;(r$ as Reader).err = errInconsistentByteCount
						}
						// The Transform call was successful; we are complete if we
						// cannot read more bytes into src.
						;(r$ as Reader).transformComplete = (r$ as Reader).err != null
						continue
						break
					}
					case ($.comparableEqual(err, ErrShortDst)) && (((r$ as Reader).dst1 != 0) || (n != 0)):
					{
						continue
						break
					}
					case (($.comparableEqual(err, ErrShortSrc)) && (((r$ as Reader).src1 - (r$ as Reader).src0) != $.sliceLen((r$ as Reader).src))) && ((r$ as Reader).err == null):
					{
						break
					}
					default:
					{
						;(r$ as Reader).transformComplete = true
						// The reader error (r.err) takes precedence over the
						// transformer error (err) unless r.err is nil or io.EOF.
						if (((r$ as Reader).err == null) || ($.comparableEqual((r$ as Reader).err, io.EOF))) {
							;(r$ as Reader).err = err
						}
						continue
						break
					}
				}
			}

			// Move any untransformed source bytes to the start of the buffer
			// and read more bytes.
			if ((r$ as Reader).src0 != 0) {
				let __goscriptAssign0_0: number = 0
				let __goscriptAssign0_1: number = $.copy((r$ as Reader).src, $.goSlice((r$ as Reader).src, (r$ as Reader).src0, (r$ as Reader).src1));
				;(r$ as Reader).src0 = __goscriptAssign0_0;
				;(r$ as Reader).src1 = __goscriptAssign0_1
			}
			let __goscriptTuple1: any = await $.pointerValue<Exclude<io.Reader, null>>((r$ as Reader).r).Read($.goSlice((r$ as Reader).src, (r$ as Reader).src1, undefined))
			n = __goscriptTuple1[0];
			;(r$ as Reader).err = __goscriptTuple1[1];
			;(r$ as Reader).src1 = (r$ as Reader).src1 + (n)
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"transform.Reader",
		() => new Reader(),
		() => [$.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		Reader,
		() => [/* @__PURE__ */ $.structField("r", "io.Reader", [0], 0, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("t", "transform.Transformer", [1], 16, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("err", "error", [2], 32, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 48, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("dst0", /* @__PURE__ */ $.basicType("int"), [4], 72, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("dst1", /* @__PURE__ */ $.basicType("int"), [5], 80, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 88, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("src0", /* @__PURE__ */ $.basicType("int"), [7], 112, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("src1", /* @__PURE__ */ $.basicType("int"), [8], 120, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("transformComplete", /* @__PURE__ */ $.basicType("bool"), [9], 128, false, { pkgPath: "golang.org/x/text/transform" })]
	)
}

export class Writer {
	public get w(): io.Writer | null {
		return this._fields.w
	}

	public set w(value: io.Writer | null) {
		this._fields.w = value
	}

	public get t(): Transformer | null {
		return this._fields.t
	}

	public set t(value: Transformer | null) {
		this._fields.t = value
	}

	public get dst(): $.Slice<number> {
		return this._fields.dst
	}

	public set dst(value: $.Slice<number>) {
		this._fields.dst = value
	}

	// src[:n] contains bytes that have not yet passed through t.
	public get src(): $.Slice<number> {
		return this._fields.src
	}

	public set src(value: $.Slice<number>) {
		this._fields.src = value
	}

	public get n(): number {
		return this._fields.n
	}

	public set n(value: number) {
		this._fields.n = value
	}

	public _fields: {
		w: io.Writer | null
		t: Transformer | null
		dst: $.Slice<number>
		src: $.Slice<number>
		n: number
	}

	constructor(init?: Partial<{w?: io.Writer | null, t?: Transformer | null, dst?: $.Slice<number>, src?: $.Slice<number>, n?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			w: init?.w ?? (null! as io.Writer | null),
			t: init?.t ?? (null! as Transformer | null),
			dst: init?.dst ?? (null! as $.Slice<number>),
			src: init?.src ?? (null! as $.Slice<number>),
			n: init?.n ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Writer {
		return new Writer(this, true)
	}

	public __goscriptAssign(source: Writer): void {
		const target = this._fields
		const values = source._fields
		target.w = $.assignFieldValue(target.w, values.w, "io.Writer")
		target.t = $.assignFieldValue(target.t, values.t, "transform.Transformer")
		target.dst = values.dst
		target.src = values.src
		target.n = values.n
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const w: Writer | $.VarRef<Writer> | null = this;
		const w$: Writer = w == null ? $.pointerTarget<Writer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<Writer>(w)
		let src: $.Slice<number> = $.goSlice((w$ as Writer).src, undefined, (w$ as Writer).n)
		while (true) {
			let [nDst, nSrc, err] = await $.pointerValue<Exclude<Transformer, null>>((w$ as Writer).t).Transform((w$ as Writer).dst, src, true)
			{
				let [, werr] = await $.pointerValue<Exclude<io.Writer, null>>((w$ as Writer).w).Write($.goSlice((w$ as Writer).dst, undefined, nDst))
				if (werr != null) {
					return werr
				}
			}
			if (!$.comparableEqual(err, ErrShortDst)) {
				return err
			}
			src = $.goSlice(src, nSrc, undefined)
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Write(data: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let w: Writer | $.VarRef<Writer> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const w$: Writer = w == null ? $.pointerTarget<Writer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<Writer>(w)
		let src: $.Slice<number> = data
		if ((w$ as Writer).n > 0) {
			// Append bytes from data to the last remainder.
			// TODO: limit the amount copied on first try.
			n = $.copy($.goSlice((w$ as Writer).src, (w$ as Writer).n, undefined), data);
			;(w$ as Writer).n = (w$ as Writer).n + (n)
			src = $.goSlice((w$ as Writer).src, undefined, (w$ as Writer).n)
		}
		while (true) {
			let [nDst, nSrc, __goscriptShadow0] = await $.pointerValue<Exclude<Transformer, null>>((w$ as Writer).t).Transform((w$ as Writer).dst, src, false)
			{
				let [, werr] = await $.pointerValue<Exclude<io.Writer, null>>((w$ as Writer).w).Write($.goSlice((w$ as Writer).dst, undefined, nDst))
				if (werr != null) {
					return [n, werr]
				}
			}
			src = $.goSlice(src, nSrc, undefined)
			if ((w$ as Writer).n == 0) {
				n = n + (nSrc)
			} else {
				if ($.sliceLen(src) <= n) {
					// Enough bytes from w.src have been consumed. We make src point
					// to data instead to reduce the copying.
					;(w$ as Writer).n = 0
					n = n - ($.sliceLen(src))
					src = $.goSlice(data, n, undefined)
					if ((n < $.sliceLen(data)) && ((__goscriptShadow0 == null) || ($.comparableEqual(__goscriptShadow0, ErrShortSrc)))) {
						continue
					}
				}
			}
			{
				let __goscriptSwitch0 = __goscriptShadow0
				switch ((true as boolean)) {
					case $.comparableEqual(__goscriptSwitch0, ErrShortDst):
					{
						if ((nDst > 0) || (nSrc > 0)) {
							continue
						}
						break
					}
					case $.comparableEqual(__goscriptSwitch0, ErrShortSrc):
					{
						if ($.sliceLen(src) < $.sliceLen((w$ as Writer).src)) {
							let m = $.copy((w$ as Writer).src, src)
							// If w.n > 0, bytes from data were already copied to w.src and n
							// was already set to the number of bytes consumed.
							if ((w$ as Writer).n == 0) {
								n = n + (m)
							}
							;(w$ as Writer).n = m
							__goscriptShadow0 = null
						} else {
							if ((nDst > 0) || (nSrc > 0)) {
								// Not enough buffer to store the remainder. Keep processing as
								// long as there is progress. Without this case, transforms that
								// require a lookahead larger than the buffer may result in an
								// error. This is not something one may expect to be common in
								// practice, but it may occur when buffers are set to small
								// sizes during testing.
								continue
							}
						}
						break
					}
					case $.comparableEqual(__goscriptSwitch0, null):
					{
						if ((w$ as Writer).n > 0) {
							__goscriptShadow0 = errInconsistentByteCount
						}
						break
					}
				}
			}
			return [n, __goscriptShadow0]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"transform.Writer",
		() => new Writer(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Write", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		Writer,
		() => [/* @__PURE__ */ $.structField("w", "io.Writer", [0], 0, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("t", "transform.Transformer", [1], 16, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 32, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 56, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("n", /* @__PURE__ */ $.basicType("int"), [4], 80, false, { pkgPath: "golang.org/x/text/transform" })]
	)
}

export class nop {
	public get NopResetter(): NopResetter {
		return this._fields.NopResetter
	}

	public set NopResetter(value: NopResetter) {
		this._fields.NopResetter = value
	}

	public _fields: {
		NopResetter: NopResetter
	}

	constructor(init?: Partial<{NopResetter?: NopResetter}>, __goscriptValue?: boolean) {
		this._fields = {
			NopResetter: init?.NopResetter ? init.NopResetter.clone() : new NopResetter(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nop {
		return new nop(this, true)
	}

	public __goscriptAssign(source: nop): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.NopResetter, values.NopResetter)
	}

	public Span(src: $.Slice<number>, atEOF: boolean): [number, $.GoError] {
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		return [$.sliceLen(src), null]
	}

	public Transform(dst: $.Slice<number>, src: $.Slice<number>, atEOF: boolean): [number, number, $.GoError] {
		let nDst: number = 0
		let nSrc: number = 0
		let err: $.GoError = null! as $.GoError
		let n = $.copy(dst, src)
		if (n < $.sliceLen(src)) {
			err = ErrShortDst
		}
		return [n, n, err]
	}

	public Reset(): any {
		return $.pointerValue<NopResetter>(this.NopResetter).Reset()
	}

	static __typeInfo = $.registerStructType(
		"transform.nop",
		() => new nop(),
		() => [$.methodSignature("Span", [["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("Transform", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["nDst", /* @__PURE__ */ $.basicType("int")], ["nSrc", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("Reset")],
		nop,
		() => [/* @__PURE__ */ $.structField("NopResetter", "transform.NopResetter", [0], 0, true, { anonymous: true })]
	)
}

export class discard {
	public get NopResetter(): NopResetter {
		return this._fields.NopResetter
	}

	public set NopResetter(value: NopResetter) {
		this._fields.NopResetter = value
	}

	public _fields: {
		NopResetter: NopResetter
	}

	constructor(init?: Partial<{NopResetter?: NopResetter}>, __goscriptValue?: boolean) {
		this._fields = {
			NopResetter: init?.NopResetter ? init.NopResetter.clone() : new NopResetter(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): discard {
		return new discard(this, true)
	}

	public __goscriptAssign(source: discard): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.NopResetter, values.NopResetter)
	}

	public Transform(dst: $.Slice<number>, src: $.Slice<number>, atEOF: boolean): [number, number, $.GoError] {
		let nDst: number = 0
		let nSrc: number = 0
		let err: $.GoError = null! as $.GoError
		return [0, $.sliceLen(src), null]
	}

	public Reset(): any {
		return $.pointerValue<NopResetter>(this.NopResetter).Reset()
	}

	static __typeInfo = $.registerStructType(
		"transform.discard",
		() => new discard(),
		() => [$.methodSignature("Transform", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["nDst", /* @__PURE__ */ $.basicType("int")], ["nSrc", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("Reset")],
		discard,
		() => [/* @__PURE__ */ $.structField("NopResetter", "transform.NopResetter", [0], 0, true, { anonymous: true })]
	)
}

export class chain {
	public get link(): $.Slice<link> {
		return this._fields.link
	}

	public set link(value: $.Slice<link>) {
		this._fields.link = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	// errStart is the index at which the error occurred plus 1. Processing
	// errStart at this level at the next call to Transform. As long as
	// errStart > 0, chain will not consume any more source bytes.
	public get errStart(): number {
		return this._fields.errStart
	}

	public set errStart(value: number) {
		this._fields.errStart = value
	}

	public _fields: {
		link: $.Slice<link>
		err: $.GoError
		errStart: number
	}

	constructor(init?: Partial<{link?: $.Slice<link>, err?: $.GoError, errStart?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			link: init?.link ?? (null! as $.Slice<link>),
			err: init?.err ?? (null! as $.GoError),
			errStart: init?.errStart ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): chain {
		return new chain(this, true)
	}

	public __goscriptAssign(source: chain): void {
		const target = this._fields
		const values = source._fields
		target.link = values.link
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.errStart = values.errStart
	}

	public async Reset(): globalThis.Promise<void> {
		let c: chain | $.VarRef<chain> | null = this;
		const c$: chain = c == null ? $.pointerTarget<chain>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<chain>(c)
		for (let __goscriptRangeTarget0 = (c$ as chain).link, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let l = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as link)).clone()
			if (l.t != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<Transformer, null>>(l.t).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			let __goscriptAssign1_0: number = 0
			let __goscriptAssign1_1: number = 0
			$.arrayIndex((c$ as chain).link!, i).p = __goscriptAssign1_0
			$.arrayIndex((c$ as chain).link!, i).n = __goscriptAssign1_1
		}
	}

	public async Transform(dst: $.Slice<number>, src: $.Slice<number>, atEOF: boolean): globalThis.Promise<[number, number, $.GoError]> {
		let c: chain | $.VarRef<chain> | null = this;
		let nDst: number = 0
		let nSrc: number = 0
		let err: $.GoError = null! as $.GoError
		const c$: chain = c == null ? $.pointerTarget<chain>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<chain>(c)
		// Set up src and dst in the chain.
		let srcL: link | $.VarRef<link> | null = $.indexRef((c$ as chain).link!, 0)
		let srcL$: link = srcL == null ? $.pointerTarget<link>(srcL) : (srcL as any).__isVarRef === true ? (srcL as any).value : (srcL as any).__goValue === undefined ? (srcL as any) : $.pointerTarget<link>(srcL)
		let dstL: link | $.VarRef<link> | null = $.indexRef((c$ as chain).link!, $.sliceLen((c$ as chain).link) - 1)
		let dstL$: link = dstL == null ? $.pointerTarget<link>(dstL) : (dstL as any).__isVarRef === true ? (dstL as any).value : (dstL as any).__goValue === undefined ? (dstL as any) : $.pointerTarget<link>(dstL)
		let __goscriptAssign2_0: $.Slice<number> = src
		let __goscriptAssign2_1: number = 0
		let __goscriptAssign2_2: number = $.sliceLen(src);
		;(srcL$ as link).b = __goscriptAssign2_0;
		;(srcL$ as link).p = __goscriptAssign2_1;
		;(srcL$ as link).n = __goscriptAssign2_2
		let __goscriptAssign3_0: $.Slice<number> = dst
		let __goscriptAssign3_1: number = 0;
		;(dstL$ as link).b = __goscriptAssign3_0;
		;(dstL$ as link).n = __goscriptAssign3_1
		let lastFull: boolean = false
		let needProgress: boolean = false

		// i is the index of the next Transformer to apply, for i in [low, high].
		// low is the lowest index for which c.link[low] may still produce bytes.
		// high is the highest index for which c.link[high] has a Transformer.
		// The error returned by Transform determines whether to increase or
		// decrease i. We try to completely fill a buffer before converting it.
		for (let low = (c$ as chain).errStart, i = (c$ as chain).errStart, high = $.sliceLen((c$ as chain).link) - 2; (low <= i) && (i <= high); ) {
			let _in: link | $.VarRef<link> | null = $.indexRef((c$ as chain).link!, i)
			let out: link | $.VarRef<link> | null = $.indexRef((c$ as chain).link!, i + 1)
			let _in$: link = _in == null ? $.pointerTarget<link>(_in) : (_in as any).__isVarRef === true ? (_in as any).value : (_in as any).__goValue === undefined ? (_in as any) : $.pointerTarget<link>(_in)
			let out$: link = out == null ? $.pointerTarget<link>(out) : (out as any).__isVarRef === true ? (out as any).value : (out as any).__goValue === undefined ? (out as any) : $.pointerTarget<link>(out)
			let [__goscriptShadow1, __goscriptShadow2, err0] = await $.pointerValue<Exclude<Transformer, null>>((_in$ as link).t).Transform((out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? ((out as any) as link).dst() : link.prototype.dst.call(out)), (_in !== null && (_in as any).__isVarRef !== true && (_in as any).__goValue === undefined ? ((_in as any) as link).src() : link.prototype.src.call(_in)), atEOF && (low == i));
			;(out$ as link).n = (out$ as link).n + (__goscriptShadow1);
			;(_in$ as link).p = (_in$ as link).p + (__goscriptShadow2)
			if ((i > 0) && ((_in$ as link).p == (_in$ as link).n)) {
				let __goscriptAssign4_0: number = 0
				let __goscriptAssign4_1: number = 0;
				;(_in$ as link).p = __goscriptAssign4_0;
				;(_in$ as link).n = __goscriptAssign4_1
			}
			let __goscriptAssign5_0: boolean = lastFull
			let __goscriptAssign5_1: boolean = false
			needProgress = __goscriptAssign5_0
			lastFull = __goscriptAssign5_1
			{
				let __goscriptSwitch1 = err0
				switch ((true as boolean)) {
					case $.comparableEqual(__goscriptSwitch1, ErrShortDst):
					{
						if (i == high) {
							return [(dstL$ as link).n, (srcL$ as link).p, ErrShortDst]
						}
						if ((out$ as link).n != 0) {
							i++
							// If the Transformer at the next index is not able to process any
							// source bytes there is nothing that can be done to make progress
							// and the bytes will remain unprocessed. lastFull is used to
							// detect this and break out of the loop with a fatal error.
							lastFull = true
							continue
						}
						// The destination buffer was too small, but is completely empty.
						// Return a fatal error as this transformation can never complete.
						void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as chain).fatalError(i, errShortInternal) : chain.prototype.fatalError.call(c, i, errShortInternal))
						break
					}
					case $.comparableEqual(__goscriptSwitch1, ErrShortSrc):
					{
						if (i == 0) {
							// Save ErrShortSrc in err. All other errors take precedence.
							err = ErrShortSrc
							break
						}
						// Source bytes were depleted before filling up the destination buffer.
						// Verify we made some progress, move the remaining bytes to the errStart
						// and try to get more source bytes.
						if ((needProgress && (__goscriptShadow2 == 0)) || (((_in$ as link).n - (_in$ as link).p) == $.sliceLen((_in$ as link).b))) {
							// There were not enough source bytes to proceed while the source
							// buffer cannot hold any more bytes. Return a fatal error as this
							// transformation can never complete.
							void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as chain).fatalError(i, errShortInternal) : chain.prototype.fatalError.call(c, i, errShortInternal))
							break
						}
						// in.b is an internal buffer and we can make progress.
						let __goscriptAssign6_0: number = 0
						let __goscriptAssign6_1: number = $.copy((_in$ as link).b, (_in !== null && (_in as any).__isVarRef !== true && (_in as any).__goValue === undefined ? ((_in as any) as link).src() : link.prototype.src.call(_in)));
						;(_in$ as link).p = __goscriptAssign6_0;
						;(_in$ as link).n = __goscriptAssign6_1
					}
					case $.comparableEqual(__goscriptSwitch1, null):
					{
						if (i > low) {
							i--
							continue
						}
						break
					}
					default:
					{
						void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as chain).fatalError(i, err0) : chain.prototype.fatalError.call(c, i, err0))
						break
					}
				}
			}
			// Exhausted level low or fatal error: increase low and continue
			// to process the bytes accepted so far.
			i++
			low = i
		}

		// If c.errStart > 0, this means we found a fatal error.  We will clear
		// all upstream buffers. At this point, no more progress can be made
		// downstream, as Transform would have bailed while handling ErrShortDst.
		if ((c$ as chain).errStart > 0) {
			for (let i = 1; i < (c$ as chain).errStart; i++) {
				let __goscriptAssign7_0: number = 0
				let __goscriptAssign7_1: number = 0
				$.arrayIndex((c$ as chain).link!, i).p = __goscriptAssign7_0
				$.arrayIndex((c$ as chain).link!, i).n = __goscriptAssign7_1
			}
			let __goscriptAssign8_0: $.GoError = (c$ as chain).err
			let __goscriptAssign8_1: number = 0
			let __goscriptAssign8_2: $.GoError = null
			err = __goscriptAssign8_0;
			;(c$ as chain).errStart = __goscriptAssign8_1;
			;(c$ as chain).err = __goscriptAssign8_2
		}
		return [(dstL$ as link).n, (srcL$ as link).p, err]
	}

	public fatalError(errIndex: number, err: $.GoError): void {
		let c: chain | $.VarRef<chain> | null = this;
		const c$: chain = c == null ? $.pointerTarget<chain>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<chain>(c)
		{
			let i = errIndex + 1
			if (i > (c$ as chain).errStart) {
				;(c$ as chain).errStart = i;
				;(c$ as chain).err = err
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"transform.chain",
		() => new chain(),
		() => [$.methodSignature("Reset", [], [], true), $.methodSignature("Transform", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["nDst", /* @__PURE__ */ $.basicType("int")], ["nSrc", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("fatalError", [["errIndex", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], [], true)],
		chain,
		() => [/* @__PURE__ */ $.structField("link", /* @__PURE__ */ $.sliceType("transform.link"), [0], 0, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("err", "error", [1], 24, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("errStart", /* @__PURE__ */ $.basicType("int"), [2], 40, false, { pkgPath: "golang.org/x/text/transform" })]
	)
}

export class link {
	public get t(): Transformer | null {
		return this._fields.t
	}

	public set t(value: Transformer | null) {
		this._fields.t = value
	}

	// b[p:n] holds the bytes to be transformed by t.
	public get b(): $.Slice<number> {
		return this._fields.b
	}

	public set b(value: $.Slice<number>) {
		this._fields.b = value
	}

	public get p(): number {
		return this._fields.p
	}

	public set p(value: number) {
		this._fields.p = value
	}

	public get n(): number {
		return this._fields.n
	}

	public set n(value: number) {
		this._fields.n = value
	}

	public _fields: {
		t: Transformer | null
		b: $.Slice<number>
		p: number
		n: number
	}

	constructor(init?: Partial<{t?: Transformer | null, b?: $.Slice<number>, p?: number, n?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			t: init?.t ?? (null! as Transformer | null),
			b: init?.b ?? (null! as $.Slice<number>),
			p: init?.p ?? (0 as number),
			n: init?.n ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): link {
		return new link(this, true)
	}

	public __goscriptAssign(source: link): void {
		const target = this._fields
		const values = source._fields
		target.t = $.assignFieldValue(target.t, values.t, "transform.Transformer")
		target.b = values.b
		target.p = values.p
		target.n = values.n
	}

	public dst(): $.Slice<number> {
		const l: link | $.VarRef<link> | null = this;
		const l$: link = l == null ? $.pointerTarget<link>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<link>(l)
		return $.goSlice((l$ as link).b, (l$ as link).n, undefined)
	}

	public src(): $.Slice<number> {
		const l: link | $.VarRef<link> | null = this;
		const l$: link = l == null ? $.pointerTarget<link>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<link>(l)
		return $.goSlice((l$ as link).b, (l$ as link).p, (l$ as link).n)
	}

	static __typeInfo = $.registerStructType(
		"transform.link",
		() => new link(),
		() => [$.methodSignature("dst", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("src", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		link,
		() => [/* @__PURE__ */ $.structField("t", "transform.Transformer", [0], 0, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 16, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.basicType("int"), [2], 40, false, { pkgPath: "golang.org/x/text/transform" }), /* @__PURE__ */ $.structField("n", /* @__PURE__ */ $.basicType("int"), [3], 48, false, { pkgPath: "golang.org/x/text/transform" })]
	)
}

export const defaultBufSize: number = 4096

export const initialBufSize: number = 128

export let ErrShortDst: $.GoError = errors.New("transform: short destination buffer")

export function __goscript_set_ErrShortDst(__goscriptValue: $.GoError): void {
	ErrShortDst = __goscriptValue
}

export let ErrShortSrc: $.GoError = errors.New("transform: short source buffer")

export function __goscript_set_ErrShortSrc(__goscriptValue: $.GoError): void {
	ErrShortSrc = __goscriptValue
}

export let ErrEndOfSpan: $.GoError = errors.New("transform: input and output are not identical")

export function __goscript_set_ErrEndOfSpan(__goscriptValue: $.GoError): void {
	ErrEndOfSpan = __goscriptValue
}

export let errInconsistentByteCount: $.GoError = errors.New("transform: inconsistent byte count returned")

export function __goscript_set_errInconsistentByteCount(__goscriptValue: $.GoError): void {
	errInconsistentByteCount = __goscriptValue
}

export let errShortInternal: $.GoError = errors.New("transform: short internal buffer")

export function __goscript_set_errShortInternal(__goscriptValue: $.GoError): void {
	errShortInternal = __goscriptValue
}

export async function NewReader(r: io.Reader | null, t: Transformer | null): globalThis.Promise<Reader | $.VarRef<Reader> | null> {
	void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<Transformer, null>) : $.pointerValue<Exclude<Transformer, null>>(t)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return new Reader({r: r, t: t, dst: $.makeSlice<number>(4096, undefined, "byte"), src: $.makeSlice<number>(4096, undefined, "byte")})
}

export async function NewWriter(w: io.Writer | null, t: Transformer | null): globalThis.Promise<Writer | $.VarRef<Writer> | null> {
	void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<Transformer, null>) : $.pointerValue<Exclude<Transformer, null>>(t)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return new Writer({w: w, t: t, dst: $.makeSlice<number>(4096, undefined, "byte"), src: $.makeSlice<number>(4096, undefined, "byte")})
}

export let Discard: Transformer | null = $.interfaceValue<Transformer | null>(new discard(undefined, true), "transform.discard", "transform.discard")

export function __goscript_set_Discard(__goscriptValue: Transformer | null): void {
	Discard = __goscriptValue
}

export let Nop: SpanningTransformer | null = $.interfaceValue<SpanningTransformer | null>(new nop(undefined, true), "transform.nop", "transform.nop")

export function __goscript_set_Nop(__goscriptValue: SpanningTransformer | null): void {
	Nop = __goscriptValue
}

export function Chain(t: $.Slice<Transformer | null>): Transformer | null {
	if ($.sliceLen(t) == 0) {
		return $.interfaceValue<Transformer | null>(new nop(undefined, true), "transform.nop", "transform.nop")
	}
	let c: chain | $.VarRef<chain> | null = new chain({link: $.makeSlice<link>($.sliceLen(t) + 1, undefined, undefined, () => new link(undefined, true))})
	let c$: chain = c == null ? $.pointerTarget<chain>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<chain>(c)
	for (let __goscriptRangeTarget1 = t, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let tt = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as Transformer | null)
		$.arrayIndex((c$ as chain).link!, i).t = tt
	}
	// Allocate intermediate buffers.
	let b: $.Slice<Uint8Array> = $.makeSlice<Uint8Array>($.sliceLen(t) - 1)
	for (let __goscriptRangeTarget2 = b, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
		$.arrayIndex((c$ as chain).link!, i + 1).b = $.goSlice(((__goscriptRangeWindow2.backing as any[])[__goscriptRangeWindow2.offset + i] as Uint8Array), undefined, undefined)
	}
	return $.interfaceValue<Transformer | null>(c, "*transform.chain", /* @__PURE__ */ $.pointerType("transform.chain"))
}

export function RemoveFunc(f: ((r: number) => boolean | globalThis.Promise<boolean>) | null): Transformer | null {
	return $.namedValueInterfaceValue<Transformer | null>($.namedFunction(f, "transform.removeF", ({ kind: $.TypeKind.Function, name: "transform.removeF", params: [/* @__PURE__ */ $.basicType("int32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)), "transform.removeF", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function removeF_Reset(recv: removeF | null): void {
}

export async function removeF_Transform(t: removeF | null, dst: $.Slice<number>, src: $.Slice<number>, atEOF: boolean): globalThis.Promise<[number, number, $.GoError]> {
	let nDst: number = 0
	let nSrc: number = 0
	let err: $.GoError = null! as $.GoError
	for (let r = $.int(0, 32), sz = 0; $.sliceLen(src) > 0; src = $.goSlice(src, sz, undefined)) {

		{
			r = $.int($.arrayIndex(src!, 0), 32)
			if (r < 128) {
				sz = 1
			} else {
				let __goscriptTuple2: any = utf8.DecodeRune(src)
				r = __goscriptTuple2[0]
				sz = __goscriptTuple2[1]

				if (sz == 1) {
					// Invalid rune.
					if (!atEOF && !utf8.FullRune(src)) {
						err = ErrShortSrc
						break
					}
					// We replace illegal bytes with RuneError. Not doing so might
					// otherwise turn a sequence of invalid UTF-8 into valid UTF-8.
					// The resulting byte sequence may subsequently contain runes
					// for which t(r) is true that were passed unnoticed.
					if (!(__goscriptAwait = t!(r), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						if ((nDst + 3) > $.sliceLen(dst)) {
							err = ErrShortDst
							break
						}
						nDst = nDst + ($.copy($.goSlice(dst, nDst, undefined), "\xef\xbf\xbd"))
					}
					nSrc++
					continue
				}
			}
		}

		if (!(__goscriptAwait = t!(r), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			if ((nDst + sz) > $.sliceLen(dst)) {
				err = ErrShortDst
				break
			}
			nDst = nDst + ($.copyByteRanges(dst, nDst, undefined, src, undefined, sz))
		}
		nSrc = nSrc + (sz)
	}
	return [nDst, nSrc, err]
}

export function grow(b: $.Slice<number>, n: number): $.Slice<number> {
	let m = $.sliceLen(b)
	if (m <= 32) {
		m = 64
	} else {
		if (m <= 256) {
			m = m * (2)
		} else {
			m = m + (m >> 1)
		}
	}
	let buf: $.Slice<number> = $.makeSlice<number>(m, undefined, "byte")
	$.copy(buf, $.goSlice(b, undefined, n))
	return buf
}

export async function String(t: Transformer | null, s: string): globalThis.Promise<[string, number, $.GoError]> {
	let result: string = ""
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<Transformer, null>) : $.pointerValue<Exclude<Transformer, null>>(t)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if ($.stringEqual(s, "")) {
		// Fast path for the common case for empty input. Results in about a
		// 86% reduction of running time for BenchmarkStringLowerEmpty.
		{
			let [, , __goscriptShadow3] = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<Transformer, null>) : $.pointerValue<Exclude<Transformer, null>>(t)).Transform(null, null, true)
			if (__goscriptShadow3 == null) {
				return ["", 0, null]
			}
		}
	}

	// Allocate only once. Note that both dst and src escape when passed to
	// Transform.
	let buf = $.arrayValue(new Uint8Array(256))
	let dst: $.Slice<number> = $.goSlice(buf, undefined, 128, 128)
	let src: $.Slice<number> = $.goSlice(buf, 128, 2 * 128)

	// The input string s is transformed in multiple chunks (starting with a
	// chunk size of initialBufSize). nDst and nSrc are per-chunk (or
	// per-Transform-call) indexes, pDst and pSrc are overall indexes.
	let nDst = 0
	let nSrc = 0
	let pDst = 0
	let pSrc = 0

	// pPrefix is the length of a common prefix: the first pPrefix bytes of the
	// result will equal the first pPrefix bytes of s. It is not guaranteed to
	// be the largest such value, but if pPrefix, len(result) and len(s) are
	// all equal after the final transform (i.e. calling Transform with atEOF
	// being true returned nil error) then we don't need to allocate a new
	// result string.
	let pPrefix = 0
	while (true) {
		// Invariant: pDst == pPrefix && pSrc == pPrefix.

		let __goscriptShadow4 = $.copy(src, $.sliceStringOrBytes(s, pSrc, undefined))
		let __goscriptTuple3: any = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<Transformer, null>) : $.pointerValue<Exclude<Transformer, null>>(t)).Transform(dst, $.goSlice(src, undefined, __goscriptShadow4), (pSrc + __goscriptShadow4) == $.stringLen(s))
		nDst = __goscriptTuple3[0]
		nSrc = __goscriptTuple3[1]
		err = __goscriptTuple3[2]
		pDst = pDst + (nDst)
		pSrc = pSrc + (nSrc)

		// TODO:  let transformers implement an optional Spanner interface, akin
		// to norm's QuickSpan. This would even allow us to avoid any allocation.
		if (!bytes.Equal($.goSlice(dst, undefined, nDst), $.goSlice(src, undefined, nSrc))) {
			break
		}
		pPrefix = pSrc
		if ($.comparableEqual(err, ErrShortDst)) {
			// A buffer can only be short if a transformer modifies its input.
			break
		} else {
			if ($.comparableEqual(err, ErrShortSrc)) {
				if (nSrc == 0) {
					// No progress was made.
					break
				}
			} else {
				if ((err != null) || (pPrefix == $.stringLen(s))) {
					return [$.sliceStringOrBytes(s, undefined, pPrefix), pPrefix, err]
				}
			}
		}
	}
	// Post-condition: pDst == pPrefix + nDst && pSrc == pPrefix + nSrc.

	// We have transformed the first pSrc bytes of the input s to become pDst
	// transformed bytes. Those transformed bytes are discontiguous: the first
	// pPrefix of them equal s[:pPrefix] and the last nDst of them equal
	// dst[:nDst]. We copy them around, into a new dst buffer if necessary, so
	// that they become one contiguous slice: dst[:pDst].
	if (pPrefix != 0) {
		let newDst: $.Slice<number> = dst
		if (pDst > $.sliceLen(newDst)) {
			newDst = $.makeSlice<number>(($.stringLen(s) + nDst) - nSrc, undefined, "byte")
		}
		$.copyByteRanges(newDst, pPrefix, pDst, dst, undefined, nDst)
		$.copy($.goSlice(newDst, undefined, pPrefix), $.sliceStringOrBytes(s, undefined, pPrefix))
		dst = newDst
	}

	// Prevent duplicate Transform calls with atEOF being true at the end of
	// the input. Also return if we have an unrecoverable error.
	if (((err == null) && (pSrc == $.stringLen(s))) || (((err != null) && (!$.comparableEqual(err, ErrShortDst))) && (!$.comparableEqual(err, ErrShortSrc)))) {
		return [$.bytesToString($.goSlice(dst, undefined, pDst)), pSrc, err]
	}

	// Transform the remaining input, growing dst and src buffers as necessary.
	while (true) {
		let __goscriptShadow5 = $.copy(src, $.sliceStringOrBytes(s, pSrc, undefined))
		let atEOF = (pSrc + __goscriptShadow5) == $.stringLen(s)
		let [__goscriptShadow6, __goscriptShadow7, __goscriptShadow8] = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<Transformer, null>) : $.pointerValue<Exclude<Transformer, null>>(t)).Transform($.goSlice(dst, pDst, undefined), $.goSlice(src, undefined, __goscriptShadow5), atEOF)
		pDst = pDst + (__goscriptShadow6)
		pSrc = pSrc + (__goscriptShadow7)

		// If we got ErrShortDst or ErrShortSrc, do not grow as long as we can
		// make progress. This may avoid excessive allocations.
		if ($.comparableEqual(__goscriptShadow8, ErrShortDst)) {
			if (__goscriptShadow6 == 0) {
				dst = grow(dst, pDst)
			}
		} else {
			if ($.comparableEqual(__goscriptShadow8, ErrShortSrc)) {
				if (atEOF) {
					return [$.bytesToString($.goSlice(dst, undefined, pDst)), pSrc, __goscriptShadow8]
				}
				if (__goscriptShadow7 == 0) {
					src = grow(src, 0)
				}
			} else {
				if ((__goscriptShadow8 != null) || (pSrc == $.stringLen(s))) {
					return [$.bytesToString($.goSlice(dst, undefined, pDst)), pSrc, __goscriptShadow8]
				}
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Bytes(t: Transformer | null, b: $.Slice<number>): globalThis.Promise<[$.Slice<number>, number, $.GoError]> {
	let result: $.Slice<number> = null! as $.Slice<number>
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	return doAppend(t, 0, $.makeSlice<number>($.sliceLen(b), undefined, "byte"), b)
}

export async function Append(t: Transformer | null, dst: $.Slice<number>, src: $.Slice<number>): globalThis.Promise<[$.Slice<number>, number, $.GoError]> {
	let result: $.Slice<number> = null! as $.Slice<number>
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	if ($.sliceLen(dst) == $.cap(dst)) {
		let __goscriptShadow9 = $.sliceLen(src) + $.sliceLen(dst)
		let b: $.Slice<number> = $.makeSlice<number>(__goscriptShadow9, undefined, "byte")
		dst = $.goSlice(b, undefined, $.copy(b, dst))
	}
	return doAppend(t, $.sliceLen(dst), $.goSlice(dst, undefined, $.cap(dst)), src)
}

export async function doAppend(t: Transformer | null, pDst: number, dst: $.Slice<number>, src: $.Slice<number>): globalThis.Promise<[$.Slice<number>, number, $.GoError]> {
	let result: $.Slice<number> = null! as $.Slice<number>
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	void (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<Transformer, null>) : $.pointerValue<Exclude<Transformer, null>>(t)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let pSrc = 0
	while (true) {
		let [nDst, nSrc, __goscriptShadow10] = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<Transformer, null>) : $.pointerValue<Exclude<Transformer, null>>(t)).Transform($.goSlice(dst, pDst, undefined), $.goSlice(src, pSrc, undefined), true)
		pDst = pDst + (nDst)
		pSrc = pSrc + (nSrc)
		if (!$.comparableEqual(__goscriptShadow10, ErrShortDst)) {
			return [$.goSlice(dst, undefined, pDst), pSrc, __goscriptShadow10]
		}

		// Grow the destination buffer, but do not grow as long as we can make
		// progress. This may avoid excessive allocations.
		if (nDst == 0) {
			dst = grow(dst, pDst)
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Reset: (receiver: any, ...args: any[]) => (removeF_Reset as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Transform: (receiver: any, ...args: any[]) => (removeF_Transform as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (({ kind: $.TypeKind.Function, name: "transform.removeF", params: [/* @__PURE__ */ $.basicType("int32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Reset"), $.methodSignature("Transform", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["nDst", /* @__PURE__ */ $.basicType("int")], ["nSrc", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])])
}

var __goscriptAwait: any
