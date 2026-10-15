// Generated file based on iter.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_composition from "./composition.gs.ts"

import * as __goscript_forminfo from "./forminfo.gs.ts"

import * as __goscript_input from "./input.gs.ts"

import * as __goscript_normalize from "./normalize.gs.ts"

import * as __goscript_readwriter from "./readwriter.gs.ts"

import * as __goscript_transform from "./transform.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/unicode/utf8/index.js"
import "./composition.gs.ts"
import "./forminfo.gs.ts"
import "./input.gs.ts"
import "./normalize.gs.ts"
import "./readwriter.gs.ts"
import "./transform.gs.ts"

$.registerTypePackagePath("vendor/golang.org/x/text/unicode/norm", ["norm.Iter", "norm.iterFunc"])

export type iterFunc = ((_p0: Iter | $.VarRef<Iter> | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null

export class Iter {
	public get rb(): __goscript_composition.reorderBuffer {
		return this._fields.rb
	}

	public set rb(value: __goscript_composition.reorderBuffer) {
		this._fields.rb = value
	}

	public get buf(): Uint8Array {
		return this._fields.buf
	}

	public set buf(value: Uint8Array) {
		this._fields.buf = value
	}

	public get info(): __goscript_forminfo.Properties {
		return this._fields.info
	}

	public set info(value: __goscript_forminfo.Properties) {
		this._fields.info = value
	}

	public get next(): ((_p0: Iter | $.VarRef<Iter> | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null {
		return this._fields.next
	}

	public set next(value: ((_p0: Iter | $.VarRef<Iter> | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null) {
		this._fields.next = value
	}

	public get asciiF(): ((_p0: Iter | $.VarRef<Iter> | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null {
		return this._fields.asciiF
	}

	public set asciiF(value: ((_p0: Iter | $.VarRef<Iter> | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null) {
		this._fields.asciiF = value
	}

	public get p(): number {
		return this._fields.p
	}

	public set p(value: number) {
		this._fields.p = value
	}

	public get multiSeg(): $.Slice<number> {
		return this._fields.multiSeg
	}

	public set multiSeg(value: $.Slice<number>) {
		this._fields.multiSeg = value
	}

	public _fields: {
		rb: __goscript_composition.reorderBuffer
		buf: Uint8Array
		info: __goscript_forminfo.Properties
		next: ((_p0: Iter | $.VarRef<Iter> | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null
		asciiF: ((_p0: Iter | $.VarRef<Iter> | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null
		p: number
		multiSeg: $.Slice<number>
	}

	constructor(init?: Partial<{rb?: __goscript_composition.reorderBuffer, buf?: Uint8Array, info?: __goscript_forminfo.Properties, next?: ((_p0: Iter | $.VarRef<Iter> | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null, asciiF?: ((_p0: Iter | $.VarRef<Iter> | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null, p?: number, multiSeg?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			rb: init?.rb ? init.rb.clone() : new __goscript_composition.reorderBuffer(undefined, true),
			buf: init?.buf !== undefined ? $.cloneArrayValue(init.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 128)) : $.arrayValue(new Uint8Array(128)),
			info: init?.info ? init.info.clone() : new __goscript_forminfo.Properties(undefined, true),
			next: init?.next ?? (null! as ((_p0: Iter | $.VarRef<Iter> | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null),
			asciiF: init?.asciiF ?? (null! as ((_p0: Iter | $.VarRef<Iter> | null) => $.Slice<number> | globalThis.Promise<$.Slice<number>>) | null),
			p: init?.p ?? (0 as number),
			multiSeg: init?.multiSeg ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Iter {
		return new Iter(this, true)
	}

	public __goscriptAssign(source: Iter): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.rb, values.rb)
		target.buf = $.assignFieldValue(target.buf, values.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 128))
		$.assignStruct(target.info, values.info)
		target.next = values.next
		target.asciiF = values.asciiF
		target.p = values.p
		target.multiSeg = values.multiSeg
	}

	public Done(): boolean {
		const i: Iter | $.VarRef<Iter> | null = this;
		const i$: Iter = i == null ? $.pointerTarget<Iter>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Iter>(i)
		return (i$ as Iter).p >= (i$ as Iter).rb.nsrc
	}

	public async Init(f: __goscript_normalize.Form, src: $.Slice<number>): globalThis.Promise<void> {
		let i: Iter | $.VarRef<Iter> | null = this;
		const i$: Iter = i == null ? $.pointerTarget<Iter>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Iter>(i);
		;(i$ as Iter).p = 0
		if ($.sliceLen(src) == 0) {
			void (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Iter).setDone() : Iter.prototype.setDone.call(i));
			;(i$ as Iter).rb.nsrc = 0
			return
		}
		;(i$ as Iter).multiSeg = null
		void (i$ as Iter).rb.init(f, src);
		;(i$ as Iter).next = (i$ as Iter).rb.f.nextMain;
		;(i$ as Iter).asciiF = nextASCIIBytes
		$.assignStruct((i$ as Iter).info, ((__goscriptAwait = (i$ as Iter).rb.f.info!(((i$ as Iter).rb.src).clone(), (i$ as Iter).p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties))
		__goscript_composition.streamSafe_first($.fieldRef((i$ as Iter).rb._fields, "ss"), ((i$ as Iter).info).clone())
	}

	public async InitString(f: __goscript_normalize.Form, src: string): globalThis.Promise<void> {
		let i: Iter | $.VarRef<Iter> | null = this;
		const i$: Iter = i == null ? $.pointerTarget<Iter>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Iter>(i);
		;(i$ as Iter).p = 0
		if ($.stringLen(src) == 0) {
			void (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Iter).setDone() : Iter.prototype.setDone.call(i));
			;(i$ as Iter).rb.nsrc = 0
			return
		}
		;(i$ as Iter).multiSeg = null
		void (i$ as Iter).rb.initString(f, src);
		;(i$ as Iter).next = (i$ as Iter).rb.f.nextMain;
		;(i$ as Iter).asciiF = nextASCIIString
		$.assignStruct((i$ as Iter).info, ((__goscriptAwait = (i$ as Iter).rb.f.info!(((i$ as Iter).rb.src).clone(), (i$ as Iter).p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties))
		__goscript_composition.streamSafe_first($.fieldRef((i$ as Iter).rb._fields, "ss"), ((i$ as Iter).info).clone())
	}

	public async Next(): globalThis.Promise<$.Slice<number>> {
		const i: Iter | $.VarRef<Iter> | null = this;
		return $.pointerValue<Iter>(i).next!(i)
	}

	public Pos(): number {
		const i: Iter | $.VarRef<Iter> | null = this;
		return $.pointerValue<Iter>(i).p
	}

	public async Seek(offset: bigint, whence: number): globalThis.Promise<[bigint, $.GoError]> {
		let i: Iter | $.VarRef<Iter> | null = this;
		const i$: Iter = i == null ? $.pointerTarget<Iter>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Iter>(i)
		let abs: bigint = 0n
		switch (whence) {
			case 0:
			{
				abs = offset
				break
			}
			case 1:
			{
				abs = $.int64Add($.int64((i$ as Iter).p), offset)
				break
			}
			case 2:
			{
				abs = $.int64Add($.int64((i$ as Iter).rb.nsrc), offset)
				break
			}
			default:
			{
				return [0n, fmt.Errorf("norm: invalid whence")]
				break
			}
		}
		if (abs < 0n) {
			return [0n, fmt.Errorf("norm: negative position")]
		}
		if ($.int(abs) >= (i$ as Iter).rb.nsrc) {
			void (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Iter).setDone() : Iter.prototype.setDone.call(i))
			return [$.int64((i$ as Iter).p), null]
		}
		;(i$ as Iter).p = $.int(abs);
		;(i$ as Iter).multiSeg = null;
		;(i$ as Iter).next = (i$ as Iter).rb.f.nextMain
		$.assignStruct((i$ as Iter).info, ((__goscriptAwait = (i$ as Iter).rb.f.info!(((i$ as Iter).rb.src).clone(), (i$ as Iter).p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties))
		__goscript_composition.streamSafe_first($.fieldRef((i$ as Iter).rb._fields, "ss"), ((i$ as Iter).info).clone())
		return [abs, null]
	}

	public returnSlice(a: number, b: number): $.Slice<number> {
		const i: Iter | $.VarRef<Iter> | null = this;
		const i$: Iter = i == null ? $.pointerTarget<Iter>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Iter>(i)
		if ((i$ as Iter).rb.src.bytes == null) {
			return $.goSlice((i$ as Iter).buf, undefined, $.copy($.goSlice((i$ as Iter).buf, undefined, undefined), $.sliceStringOrBytes((i$ as Iter).rb.src.str, a, b)))
		}
		return $.goSlice((i$ as Iter).rb.src.bytes, a, b)
	}

	public setDone(): void {
		let i: Iter | $.VarRef<Iter> | null = this;
		const i$: Iter = i == null ? $.pointerTarget<Iter>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Iter>(i);
		;(i$ as Iter).next = nextDone;
		;(i$ as Iter).p = (i$ as Iter).rb.nsrc
	}

	static __typeInfo = $.registerStructType(
		"norm.Iter",
		() => new Iter(),
		() => [$.methodSignature("Done", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Init", [["f", /* @__PURE__ */ $.basicType("int", "norm.Form")], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("InitString", [["f", /* @__PURE__ */ $.basicType("int", "norm.Form")], ["src", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Next", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Pos", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Seek", [["offset", /* @__PURE__ */ $.basicType("int64")], ["whence", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int64"), "error"], true), $.methodSignature("returnSlice", [["a", /* @__PURE__ */ $.basicType("int")], ["b", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("setDone", [], [], true)],
		Iter,
		() => [/* @__PURE__ */ $.structField("rb", "norm.reorderBuffer", [0], 0, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 128), [1], 552, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("info", "norm.Properties", [2], 680, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("next", ({ kind: $.TypeKind.Function, name: "norm.iterFunc", params: [/* @__PURE__ */ $.pointerType("norm.Iter")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo), [3], 688, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("asciiF", ({ kind: $.TypeKind.Function, name: "norm.iterFunc", params: [/* @__PURE__ */ $.pointerType("norm.Iter")], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))] } as $.FunctionTypeInfo), [4], 696, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.basicType("int"), [5], 704, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" }), /* @__PURE__ */ $.structField("multiSeg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 712, false, { pkgPath: "vendor/golang.org/x/text/unicode/norm" })]
	)
}

export const MaxSegmentSize: number = 128

export async function nextASCIIBytes(i: Iter | $.VarRef<Iter> | null): globalThis.Promise<$.Slice<number>> {
	const i$: Iter = i == null ? $.pointerTarget<Iter>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Iter>(i)
	let p = (i$ as Iter).p + 1
	if (p >= (i$ as Iter).rb.nsrc) {
		let p0 = (i$ as Iter).p
		void (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Iter).setDone() : Iter.prototype.setDone.call(i))
		return $.goSlice((i$ as Iter).rb.src.bytes, p0, p)
	}
	if ($.arrayIndex((i$ as Iter).rb.src.bytes!, p) < 128) {
		let p0 = (i$ as Iter).p;
		;(i$ as Iter).p = p
		return $.goSlice((i$ as Iter).rb.src.bytes, p0, p)
	}
	$.assignStruct((i$ as Iter).info, ((__goscriptAwait = (i$ as Iter).rb.f.info!(((i$ as Iter).rb.src).clone(), (i$ as Iter).p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties));
	;(i$ as Iter).next = (i$ as Iter).rb.f.nextMain
	return (i$ as Iter).next!(i)
}

export async function nextASCIIString(i: Iter | $.VarRef<Iter> | null): globalThis.Promise<$.Slice<number>> {
	const i$: Iter = i == null ? $.pointerTarget<Iter>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Iter>(i)
	let p = (i$ as Iter).p + 1
	if (p >= (i$ as Iter).rb.nsrc) {
		;(i$ as Iter).buf[0] = $.indexString((i$ as Iter).rb.src.str, (i$ as Iter).p)
		void (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Iter).setDone() : Iter.prototype.setDone.call(i))
		return $.goSlice((i$ as Iter).buf, undefined, 1)
	}
	if ($.indexString((i$ as Iter).rb.src.str, p) < 128) {
		;(i$ as Iter).buf[0] = $.indexString((i$ as Iter).rb.src.str, (i$ as Iter).p);
		;(i$ as Iter).p = p
		return $.goSlice((i$ as Iter).buf, undefined, 1)
	}
	$.assignStruct((i$ as Iter).info, ((__goscriptAwait = (i$ as Iter).rb.f.info!(((i$ as Iter).rb.src).clone(), (i$ as Iter).p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties));
	;(i$ as Iter).next = (i$ as Iter).rb.f.nextMain
	return (i$ as Iter).next!(i)
}

export async function nextHangul(i: Iter | $.VarRef<Iter> | null): globalThis.Promise<$.Slice<number>> {
	const i$: Iter = i == null ? $.pointerTarget<Iter>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Iter>(i)
	let p = (i$ as Iter).p
	let next = p + 3
	if (next >= (i$ as Iter).rb.nsrc) {
		void (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Iter).setDone() : Iter.prototype.setDone.call(i))
	} else {
		if ((i$ as Iter).rb.src.hangul(next) == 0) {
			__goscript_composition.streamSafe_next($.fieldRef((i$ as Iter).rb._fields, "ss"), ((i$ as Iter).info).clone())
			$.assignStruct((i$ as Iter).info, ((__goscriptAwait = (i$ as Iter).rb.f.info!(((i$ as Iter).rb.src).clone(), (i$ as Iter).p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties));
			;(i$ as Iter).next = (i$ as Iter).rb.f.nextMain
			return (i$ as Iter).next!(i)
		}
	}
	;(i$ as Iter).p = next
	return $.goSlice((i$ as Iter).buf, undefined, __goscript_composition.decomposeHangul($.goSlice((i$ as Iter).buf, undefined, undefined), (i$ as Iter).rb.src.hangul(p)))
}

export function nextDone(i: Iter | $.VarRef<Iter> | null): $.Slice<number> {
	return null
}

export async function nextMulti(i: Iter | $.VarRef<Iter> | null): globalThis.Promise<$.Slice<number>> {
	const i$: Iter = i == null ? $.pointerTarget<Iter>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Iter>(i)
	let j = 0
	let d: $.Slice<number> = (i$ as Iter).multiSeg
	// skip first rune
	for (j = 1; (j < $.sliceLen(d)) && !utf8.RuneStart($.arrayIndex(d!, j)); j++) {
	}
	while (j < $.sliceLen(d)) {
		let info = (((__goscriptAwait = (i$ as Iter).rb.f.info!(new __goscript_input.input({bytes: d}, true), j), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties)).clone()
		if (info.BoundaryBefore()) {
			;(i$ as Iter).multiSeg = $.goSlice(d, j, undefined)
			return $.goSlice(d, undefined, j)
		}
		j = j + ($.int(info.size))
	}
	// treat last segment as normal decomposition
	;(i$ as Iter).next = (i$ as Iter).rb.f.nextMain
	return (i$ as Iter).next!(i)
}

export async function nextMultiNorm(i: Iter | $.VarRef<Iter> | null): globalThis.Promise<$.Slice<number>> {
	const i$: Iter = i == null ? $.pointerTarget<Iter>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Iter>(i)
	let j = 0
	let d: $.Slice<number> = (i$ as Iter).multiSeg
	while (j < $.sliceLen(d)) {
		let info = (((__goscriptAwait = (i$ as Iter).rb.f.info!(new __goscript_input.input({bytes: d}, true), j), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties)).clone()
		if (info.BoundaryBefore()) {
			await (i$ as Iter).rb.compose()
			let seg: $.Slice<number> = $.goSlice((i$ as Iter).buf, undefined, (i$ as Iter).rb.flushCopy($.goSlice((i$ as Iter).buf, undefined, undefined)))
			await (i$ as Iter).rb.insertUnsafe(new __goscript_input.input({bytes: d}, true), j, info);
			;(i$ as Iter).multiSeg = $.goSlice(d, j + $.int(info.size), undefined)
			return seg
		}
		await (i$ as Iter).rb.insertUnsafe(new __goscript_input.input({bytes: d}, true), j, info)
		j = j + ($.int(info.size))
	}
	;(i$ as Iter).multiSeg = null;
	;(i$ as Iter).next = nextComposed
	return doNormComposed(i)
}

export async function nextDecomposed(i: Iter | $.VarRef<Iter> | null): globalThis.Promise<$.Slice<number>> {
	let next: $.Slice<number> = null! as $.Slice<number>
	const i$: Iter = i == null ? $.pointerTarget<Iter>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Iter>(i)
	let outp = 0
	let inCopyStart = (i$ as Iter).p
	let outCopyStart = 0
	doNorm: {
		while (true) {
			{
				let sz = $.int((i$ as Iter).info.size)
				if (sz <= 1) {
					;(i$ as Iter).rb.ss = 0
					let p = (i$ as Iter).p;
					;(i$ as Iter).p++
					if ((i$ as Iter).p >= (i$ as Iter).rb.nsrc) {
						void (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Iter).setDone() : Iter.prototype.setDone.call(i))
						return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Iter).returnSlice(p, (i$ as Iter).p) : Iter.prototype.returnSlice.call(i, p, (i$ as Iter).p))
					} else {
						if ((i$ as Iter).rb.src._byte((i$ as Iter).p) < 128) {
							;(i$ as Iter).next = (i$ as Iter).asciiF
							return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Iter).returnSlice(p, (i$ as Iter).p) : Iter.prototype.returnSlice.call(i, p, (i$ as Iter).p))
						}
					}
					outp++
				} else {
					{
						let d: $.Slice<number> = (i$ as Iter).info.Decomposition()
						if (d != null) {
							// Note: If leading CCC != 0, then len(d) == 2 and last is also non-zero.
							// Case 1: there is a leftover to copy.  In this case the decomposition
							// must begin with a modifier and should always be appended.
							// Case 2: no leftover. Simply return d if followed by a ccc == 0 value.
							let p: number = outp + $.sliceLen(d)
							if (outp > 0) {
								void (i$ as Iter).rb.src.copySlice($.goSlice((i$ as Iter).buf, outCopyStart, undefined), inCopyStart, (i$ as Iter).p)
								// TODO: this condition should not be possible, but we leave it
								// in for defensive purposes.
								if (p > 128) {
									return $.goSlice((i$ as Iter).buf, undefined, outp)
								}
							} else {
								if ((i$ as Iter).info.multiSegment()) {
									// outp must be 0 as multi-segment decompositions always
									// start a new segment.
									if ((i$ as Iter).multiSeg == null) {
										;(i$ as Iter).multiSeg = d;
										;(i$ as Iter).next = nextMulti
										return nextMulti(i)
									}
									// We are in the last segment.  Treat as normal decomposition.
									d = (i$ as Iter).multiSeg;
									;(i$ as Iter).multiSeg = null
									p = $.sliceLen(d)
								}
							}
							let prevCC = (i$ as Iter).info.tccc
							{
								;(i$ as Iter).p = (i$ as Iter).p + (sz)
								if ((i$ as Iter).p >= (i$ as Iter).rb.nsrc) {
									void (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Iter).setDone() : Iter.prototype.setDone.call(i))
									$.assignStruct((i$ as Iter).info, new __goscript_forminfo.Properties(undefined, true))
								} else {
									$.assignStruct((i$ as Iter).info, ((__goscriptAwait = (i$ as Iter).rb.f.info!(((i$ as Iter).rb.src).clone(), (i$ as Iter).p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties))
								}
							}
							switch (__goscript_composition.streamSafe_next($.fieldRef((i$ as Iter).rb._fields, "ss"), ((i$ as Iter).info).clone())) {
								case 2:
								{
									;(i$ as Iter).next = nextCGJDecompose
								}
								case 1:
								{
									if (outp > 0) {
										$.copy($.goSlice((i$ as Iter).buf, outp, undefined), d)
										return $.goSlice((i$ as Iter).buf, undefined, p)
									}
									return d
									break
								}
							}
							$.copy($.goSlice((i$ as Iter).buf, outp, undefined), d)
							outp = p
							let __goscriptAssign0_0: number = (i$ as Iter).p
							let __goscriptAssign0_1: number = outp
							inCopyStart = __goscriptAssign0_0
							outCopyStart = __goscriptAssign0_1
							if ((i$ as Iter).info.ccc < prevCC) {
								break doNorm
							}
							continue
						} else {
							{
								let r = (i$ as Iter).rb.src.hangul((i$ as Iter).p)
								if (r != 0) {
									outp = __goscript_composition.decomposeHangul($.goSlice((i$ as Iter).buf, undefined, undefined), r);
									;(i$ as Iter).p = (i$ as Iter).p + (3)
									let __goscriptAssign1_0: number = (i$ as Iter).p
									let __goscriptAssign1_1: number = outp
									inCopyStart = __goscriptAssign1_0
									outCopyStart = __goscriptAssign1_1
									if ((i$ as Iter).p >= (i$ as Iter).rb.nsrc) {
										void (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Iter).setDone() : Iter.prototype.setDone.call(i))
										break
									} else {
										if ((i$ as Iter).rb.src.hangul((i$ as Iter).p) != 0) {
											;(i$ as Iter).next = nextHangul
											return $.goSlice((i$ as Iter).buf, undefined, outp)
										}
									}
								} else {
									let p: number = outp + sz
									if (p > 128) {
										break
									}
									outp = p;
									;(i$ as Iter).p = (i$ as Iter).p + (sz)
								}
							}
						}
					}
				}
			}
			if ((i$ as Iter).p >= (i$ as Iter).rb.nsrc) {
				void (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Iter).setDone() : Iter.prototype.setDone.call(i))
				break
			}
			let prevCC = (i$ as Iter).info.tccc
			$.assignStruct((i$ as Iter).info, ((__goscriptAwait = (i$ as Iter).rb.f.info!(((i$ as Iter).rb.src).clone(), (i$ as Iter).p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties))
			{
				let v = __goscript_composition.streamSafe_next($.fieldRef((i$ as Iter).rb._fields, "ss"), ((i$ as Iter).info).clone())
				if (v == 1) {
					break
				} else {
					if (v == 2) {
						;(i$ as Iter).next = nextCGJDecompose
						break
					}
				}
			}
			if ((i$ as Iter).info.ccc < prevCC) {
				break doNorm
			}
		}
		if (outCopyStart == 0) {
			return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Iter).returnSlice(inCopyStart, (i$ as Iter).p) : Iter.prototype.returnSlice.call(i, inCopyStart, (i$ as Iter).p))
		} else {
			if (inCopyStart < (i$ as Iter).p) {
				void (i$ as Iter).rb.src.copySlice($.goSlice((i$ as Iter).buf, outCopyStart, undefined), inCopyStart, (i$ as Iter).p)
			}
		}
		return $.goSlice((i$ as Iter).buf, undefined, outp)
	}
	void (i$ as Iter).rb.src.copySlice($.goSlice((i$ as Iter).buf, outCopyStart, undefined), inCopyStart, (i$ as Iter).p)
	await (i$ as Iter).rb.insertDecomposed($.goSlice((i$ as Iter).buf, 0, outp))
	return doNormDecomposed(i)
}

export async function doNormDecomposed(i: Iter | $.VarRef<Iter> | null): globalThis.Promise<$.Slice<number>> {
	const i$: Iter = i == null ? $.pointerTarget<Iter>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Iter>(i)
	while (true) {
		await (i$ as Iter).rb.insertUnsafe(((i$ as Iter).rb.src).clone(), (i$ as Iter).p, ((i$ as Iter).info).clone())
		{
			;(i$ as Iter).p = (i$ as Iter).p + ($.int((i$ as Iter).info.size))
			if ((i$ as Iter).p >= (i$ as Iter).rb.nsrc) {
				void (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Iter).setDone() : Iter.prototype.setDone.call(i))
				break
			}
		}
		$.assignStruct((i$ as Iter).info, ((__goscriptAwait = (i$ as Iter).rb.f.info!(((i$ as Iter).rb.src).clone(), (i$ as Iter).p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties))
		if ((i$ as Iter).info.ccc == 0) {
			break
		}
		{
			let s = __goscript_composition.streamSafe_next($.fieldRef((i$ as Iter).rb._fields, "ss"), ((i$ as Iter).info).clone())
			if (s == 2) {
				;(i$ as Iter).next = nextCGJDecompose
				break
			}
		}
	}
	// new segment or too many combining characters: exit normalization
	return $.goSlice((i$ as Iter).buf, undefined, (i$ as Iter).rb.flushCopy($.goSlice((i$ as Iter).buf, undefined, undefined)))
}

export async function nextCGJDecompose(i: Iter | $.VarRef<Iter> | null): globalThis.Promise<$.Slice<number>> {
	const i$: Iter = i == null ? $.pointerTarget<Iter>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Iter>(i);
	;(i$ as Iter).rb.ss = 0
	void (i$ as Iter).rb.insertCGJ();
	;(i$ as Iter).next = nextDecomposed
	__goscript_composition.streamSafe_first($.fieldRef((i$ as Iter).rb._fields, "ss"), ((i$ as Iter).info).clone())
	let buf: $.Slice<number> = await doNormDecomposed(i)
	return buf
}

export async function nextComposed(i: Iter | $.VarRef<Iter> | null): globalThis.Promise<$.Slice<number>> {
	const i$: Iter = i == null ? $.pointerTarget<Iter>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Iter>(i)
	let outp = 0
	let startp = (i$ as Iter).p
	let prevCC: number = 0
	doNorm: {
		while (true) {
			if (!(i$ as Iter).info.isYesC()) {
				break doNorm
			}
			prevCC = (i$ as Iter).info.tccc
			let sz = $.int((i$ as Iter).info.size)
			if (sz == 0) {
				sz = 1
			}
			let p: number = outp + sz
			if (p > 128) {
				break
			}
			outp = p;
			;(i$ as Iter).p = (i$ as Iter).p + (sz)
			if ((i$ as Iter).p >= (i$ as Iter).rb.nsrc) {
				void (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Iter).setDone() : Iter.prototype.setDone.call(i))
				break
			} else {
				if ((i$ as Iter).rb.src._byte((i$ as Iter).p) < 128) {
					;(i$ as Iter).rb.ss = 0;
					;(i$ as Iter).next = (i$ as Iter).asciiF
					break
				}
			}
			$.assignStruct((i$ as Iter).info, ((__goscriptAwait = (i$ as Iter).rb.f.info!(((i$ as Iter).rb.src).clone(), (i$ as Iter).p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties))
			{
				let v = __goscript_composition.streamSafe_next($.fieldRef((i$ as Iter).rb._fields, "ss"), ((i$ as Iter).info).clone())
				if (v == 1) {
					break
				} else {
					if (v == 2) {
						;(i$ as Iter).next = nextCGJCompose
						break
					}
				}
			}
			if ((i$ as Iter).info.ccc < prevCC) {
				break doNorm
			}
		}
		return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Iter).returnSlice(startp, (i$ as Iter).p) : Iter.prototype.returnSlice.call(i, startp, (i$ as Iter).p))
	}
	;(i$ as Iter).p = startp
	$.assignStruct((i$ as Iter).info, ((__goscriptAwait = (i$ as Iter).rb.f.info!(((i$ as Iter).rb.src).clone(), (i$ as Iter).p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties))
	__goscript_composition.streamSafe_first($.fieldRef((i$ as Iter).rb._fields, "ss"), ((i$ as Iter).info).clone())
	if ((i$ as Iter).info.multiSegment()) {
		let d: $.Slice<number> = (i$ as Iter).info.Decomposition()
		let info = (((__goscriptAwait = (i$ as Iter).rb.f.info!(new __goscript_input.input({bytes: d}, true), 0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties)).clone()
		await (i$ as Iter).rb.insertUnsafe(new __goscript_input.input({bytes: d}, true), 0, info);
		;(i$ as Iter).multiSeg = $.goSlice(d, $.int(info.size), undefined);
		;(i$ as Iter).next = nextMultiNorm
		return nextMultiNorm(i)
	}
	__goscript_composition.streamSafe_first($.fieldRef((i$ as Iter).rb._fields, "ss"), ((i$ as Iter).info).clone())
	await (i$ as Iter).rb.insertUnsafe(((i$ as Iter).rb.src).clone(), (i$ as Iter).p, ((i$ as Iter).info).clone())
	return doNormComposed(i)
}

export async function doNormComposed(i: Iter | $.VarRef<Iter> | null): globalThis.Promise<$.Slice<number>> {
	const i$: Iter = i == null ? $.pointerTarget<Iter>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Iter>(i)
	// First rune should already be inserted.
	while (true) {
		{
			;(i$ as Iter).p = (i$ as Iter).p + ($.int((i$ as Iter).info.size))
			if ((i$ as Iter).p >= (i$ as Iter).rb.nsrc) {
				void (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as Iter).setDone() : Iter.prototype.setDone.call(i))
				break
			}
		}
		$.assignStruct((i$ as Iter).info, ((__goscriptAwait = (i$ as Iter).rb.f.info!(((i$ as Iter).rb.src).clone(), (i$ as Iter).p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties))
		{
			let s = __goscript_composition.streamSafe_next($.fieldRef((i$ as Iter).rb._fields, "ss"), ((i$ as Iter).info).clone())
			if (s == 1) {
				break
			} else {
				if (s == 2) {
					;(i$ as Iter).next = nextCGJCompose
					break
				}
			}
		}
		await (i$ as Iter).rb.insertUnsafe(((i$ as Iter).rb.src).clone(), (i$ as Iter).p, ((i$ as Iter).info).clone())
	}
	await (i$ as Iter).rb.compose()
	let seg: $.Slice<number> = $.goSlice((i$ as Iter).buf, undefined, (i$ as Iter).rb.flushCopy($.goSlice((i$ as Iter).buf, undefined, undefined)))
	return seg
}

export async function nextCGJCompose(i: Iter | $.VarRef<Iter> | null): globalThis.Promise<$.Slice<number>> {
	const i$: Iter = i == null ? $.pointerTarget<Iter>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<Iter>(i);
	;(i$ as Iter).rb.ss = 0
	void (i$ as Iter).rb.insertCGJ();
	;(i$ as Iter).next = nextComposed
	// Note that we treat any rune with nLeadingNonStarters > 0 as a non-starter,
	// even if they are not. This is particularly dubious for U+FF9E and UFF9A.
	// If we ever change that, insert a check here.
	__goscript_composition.streamSafe_first($.fieldRef((i$ as Iter).rb._fields, "ss"), ((i$ as Iter).info).clone())
	await (i$ as Iter).rb.insertUnsafe(((i$ as Iter).rb.src).clone(), (i$ as Iter).p, ((i$ as Iter).info).clone())
	return doNormComposed(i)
}

var __goscriptAwait: any
