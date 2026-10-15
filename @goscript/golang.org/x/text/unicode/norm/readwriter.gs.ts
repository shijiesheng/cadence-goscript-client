// Generated file based on readwriter.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_composition from "./composition.gs.ts"

import * as __goscript_forminfo from "./forminfo.gs.ts"

import * as __goscript_input from "./input.gs.ts"

import * as __goscript_iter from "./iter.gs.ts"

import * as __goscript_normalize from "./normalize.gs.ts"

import * as __goscript_transform from "./transform.gs.ts"
import "@goscript/io/index.js"
import "./composition.gs.ts"
import "./forminfo.gs.ts"
import "./input.gs.ts"
import "./iter.gs.ts"
import "./normalize.gs.ts"
import "./transform.gs.ts"

$.registerTypePackagePath("golang.org/x/text/unicode/norm", ["norm.normWriter", "norm.normReader"])

export class normWriter {
	public get rb(): __goscript_composition.reorderBuffer {
		return this._fields.rb
	}

	public set rb(value: __goscript_composition.reorderBuffer) {
		this._fields.rb = value
	}

	public get w(): io.Writer | null {
		return this._fields.w
	}

	public set w(value: io.Writer | null) {
		this._fields.w = value
	}

	public get buf(): $.Slice<number> {
		return this._fields.buf
	}

	public set buf(value: $.Slice<number>) {
		this._fields.buf = value
	}

	public _fields: {
		rb: __goscript_composition.reorderBuffer
		w: io.Writer | null
		buf: $.Slice<number>
	}

	constructor(init?: Partial<{rb?: __goscript_composition.reorderBuffer, w?: io.Writer | null, buf?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			rb: init?.rb ? init.rb.clone() : new __goscript_composition.reorderBuffer(undefined, true),
			w: init?.w ?? (null! as io.Writer | null),
			buf: init?.buf ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): normWriter {
		return new normWriter(this, true)
	}

	public __goscriptAssign(source: normWriter): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.rb, values.rb)
		target.w = $.assignFieldValue(target.w, values.w, "io.Writer")
		target.buf = values.buf
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const w: normWriter | $.VarRef<normWriter> | null = this;
		const w$: normWriter = w == null ? $.pointerTarget<normWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<normWriter>(w)
		if ($.sliceLen((w$ as normWriter).buf) > 0) {
			let [, err] = await $.pointerValue<Exclude<io.Writer, null>>((w$ as normWriter).w).Write((w$ as normWriter).buf)
			if (err != null) {
				return err
			}
		}
		return null
	}

	public async Write(data: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let w: normWriter | $.VarRef<normWriter> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const w$: normWriter = w == null ? $.pointerTarget<normWriter>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<normWriter>(w)
		// Process data in pieces to keep w.buf size bounded.
		const chunk: number = 4000

		while ($.sliceLen(data) > 0) {
			// Normalize into w.buf.
			let m: number = $.sliceLen(data)
			if (m > 4000) {
				m = 4000
			}
			$.assignStruct((w$ as normWriter).rb.src, __goscript_input.inputBytes($.goSlice(data, undefined, m)));
			;(w$ as normWriter).rb.nsrc = m;
			;(w$ as normWriter).buf = await __goscript_normalize.doAppend($.fieldRef((w$ as normWriter)._fields, "rb"), (w$ as normWriter).buf, 0)
			data = $.goSlice(data, m, undefined)
			n = n + (m)

			// Write out complete prefix, save remainder.
			// Note that lastBoundary looks back at most 31 runes.
			let i = await __goscript_normalize.lastBoundary($.fieldRef((w$ as normWriter).rb._fields, "f"), (w$ as normWriter).buf)
			if (i == -1) {
				i = 0
			}
			if (i > 0) {
				{
					let __goscriptTuple0: any = await $.pointerValue<Exclude<io.Writer, null>>((w$ as normWriter).w).Write($.goSlice((w$ as normWriter).buf, undefined, i))
					err = __goscriptTuple0[1]
					if (err != null) {
						break
					}
				}
				let bn = $.copy((w$ as normWriter).buf, $.goSlice((w$ as normWriter).buf, i, undefined));
				;(w$ as normWriter).buf = $.goSlice((w$ as normWriter).buf, undefined, bn)
			}
		}
		return [n, err]
	}

	static __typeInfo = $.registerStructType(
		"norm.normWriter",
		() => new normWriter(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Write", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		normWriter,
		() => [/* @__PURE__ */ $.structField("rb", "norm.reorderBuffer", [0], 0, false, { pkgPath: "golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("w", "io.Writer", [1], 552, false, { pkgPath: "golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 568, false, { pkgPath: "golang.org/x/text/unicode/norm" })]
	)
}

export class normReader {
	public get rb(): __goscript_composition.reorderBuffer {
		return this._fields.rb
	}

	public set rb(value: __goscript_composition.reorderBuffer) {
		this._fields.rb = value
	}

	public get r(): io.Reader | null {
		return this._fields.r
	}

	public set r(value: io.Reader | null) {
		this._fields.r = value
	}

	public get inbuf(): $.Slice<number> {
		return this._fields.inbuf
	}

	public set inbuf(value: $.Slice<number>) {
		this._fields.inbuf = value
	}

	public get outbuf(): $.Slice<number> {
		return this._fields.outbuf
	}

	public set outbuf(value: $.Slice<number>) {
		this._fields.outbuf = value
	}

	public get bufStart(): number {
		return this._fields.bufStart
	}

	public set bufStart(value: number) {
		this._fields.bufStart = value
	}

	public get lastBoundary(): number {
		return this._fields.lastBoundary
	}

	public set lastBoundary(value: number) {
		this._fields.lastBoundary = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		rb: __goscript_composition.reorderBuffer
		r: io.Reader | null
		inbuf: $.Slice<number>
		outbuf: $.Slice<number>
		bufStart: number
		lastBoundary: number
		err: $.GoError
	}

	constructor(init?: Partial<{rb?: __goscript_composition.reorderBuffer, r?: io.Reader | null, inbuf?: $.Slice<number>, outbuf?: $.Slice<number>, bufStart?: number, lastBoundary?: number, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			rb: init?.rb ? init.rb.clone() : new __goscript_composition.reorderBuffer(undefined, true),
			r: init?.r ?? (null! as io.Reader | null),
			inbuf: init?.inbuf ?? (null! as $.Slice<number>),
			outbuf: init?.outbuf ?? (null! as $.Slice<number>),
			bufStart: init?.bufStart ?? (0 as number),
			lastBoundary: init?.lastBoundary ?? (0 as number),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): normReader {
		return new normReader(this, true)
	}

	public __goscriptAssign(source: normReader): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.rb, values.rb)
		target.r = $.assignFieldValue(target.r, values.r, "io.Reader")
		target.inbuf = values.inbuf
		target.outbuf = values.outbuf
		target.bufStart = values.bufStart
		target.lastBoundary = values.lastBoundary
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let r: normReader | $.VarRef<normReader> | null = this;
		const r$: normReader = r == null ? $.pointerTarget<normReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<normReader>(r)
		while (true) {
			if (((r$ as normReader).lastBoundary - (r$ as normReader).bufStart) > 0) {
				let n = $.copy(p, $.goSlice((r$ as normReader).outbuf, (r$ as normReader).bufStart, (r$ as normReader).lastBoundary));
				;(r$ as normReader).bufStart = (r$ as normReader).bufStart + (n)
				if (((r$ as normReader).lastBoundary - (r$ as normReader).bufStart) > 0) {
					return [n, null]
				}
				return [n, (r$ as normReader).err]
			}
			if ((r$ as normReader).err != null) {
				return [0, (r$ as normReader).err]
			}
			let outn = $.copy((r$ as normReader).outbuf, $.goSlice((r$ as normReader).outbuf, (r$ as normReader).lastBoundary, undefined));
			;(r$ as normReader).outbuf = $.goSlice((r$ as normReader).outbuf, 0, outn);
			;(r$ as normReader).bufStart = 0

			let [n, err] = await $.pointerValue<Exclude<io.Reader, null>>((r$ as normReader).r).Read((r$ as normReader).inbuf)
			$.assignStruct((r$ as normReader).rb.src, __goscript_input.inputBytes($.goSlice((r$ as normReader).inbuf, 0, n)))
			let __goscriptAssign0_0: number = n
			let __goscriptAssign0_1: $.GoError = err;
			;(r$ as normReader).rb.nsrc = __goscriptAssign0_0;
			;(r$ as normReader).err = __goscriptAssign0_1
			if (n > 0) {
				;(r$ as normReader).outbuf = await __goscript_normalize.doAppend($.fieldRef((r$ as normReader)._fields, "rb"), (r$ as normReader).outbuf, 0)
			}
			if ($.comparableEqual(err, io.EOF)) {
				;(r$ as normReader).lastBoundary = $.sliceLen((r$ as normReader).outbuf)
			} else {
				;(r$ as normReader).lastBoundary = await __goscript_normalize.lastBoundary($.fieldRef((r$ as normReader).rb._fields, "f"), (r$ as normReader).outbuf)
				if ((r$ as normReader).lastBoundary == -1) {
					;(r$ as normReader).lastBoundary = 0
				}
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"norm.normReader",
		() => new normReader(),
		() => [$.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		normReader,
		() => [/* @__PURE__ */ $.structField("rb", "norm.reorderBuffer", [0], 0, false, { pkgPath: "golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("r", "io.Reader", [1], 552, false, { pkgPath: "golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("inbuf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 568, false, { pkgPath: "golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("outbuf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 592, false, { pkgPath: "golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("bufStart", /* @__PURE__ */ $.basicType("int"), [4], 616, false, { pkgPath: "golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("lastBoundary", /* @__PURE__ */ $.basicType("int"), [5], 624, false, { pkgPath: "golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("err", "error", [6], 632, false, { pkgPath: "golang.org/x/text/unicode/norm" })]
	)
}

export function Form_Writer(f: __goscript_normalize.Form, w: io.Writer | null): io.WriteCloser | null {
	let wr: normWriter | $.VarRef<normWriter> | null = new normWriter({rb: new __goscript_composition.reorderBuffer(undefined, true), w: w})
	$.pointerValue<normWriter>(wr).rb.init(f, null)
	return $.interfaceValue<io.WriteCloser | null>(wr, "*norm.normWriter", /* @__PURE__ */ $.pointerType("norm.normWriter"))
}

export function Form_Reader(f: __goscript_normalize.Form, r: io.Reader | null): io.Reader | null {
	const chunk: number = 4000
	let buf: $.Slice<number> = $.makeSlice<number>(4000, undefined, "byte")
	let rr: normReader | $.VarRef<normReader> | null = new normReader({rb: new __goscript_composition.reorderBuffer(undefined, true), r: r, inbuf: buf})
	$.pointerValue<normReader>(rr).rb.init(f, buf)
	return $.interfaceValue<io.Reader | null>(rr, "*norm.normReader", /* @__PURE__ */ $.pointerType("norm.normReader"))
}
