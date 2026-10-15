// Generated file based on transform.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as transform2 from "@goscript/golang.org/x/text/transform/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_composition from "./composition.gs.ts"

import * as __goscript_forminfo from "./forminfo.gs.ts"

import * as __goscript_input from "./input.gs.ts"

import * as __goscript_iter from "./iter.gs.ts"

import * as __goscript_normalize from "./normalize.gs.ts"

import * as __goscript_readwriter from "./readwriter.gs.ts"
import "@goscript/unicode/utf8/index.js"
import "@goscript/golang.org/x/text/transform/index.js"
import "./composition.gs.ts"
import "./forminfo.gs.ts"
import "./input.gs.ts"
import "./iter.gs.ts"
import "./normalize.gs.ts"
import "./readwriter.gs.ts"

export function Form_Reset(recv: __goscript_normalize.Form): void {
}

export async function Form_Transform(f: __goscript_normalize.Form, dst: $.Slice<number>, src: $.Slice<number>, atEOF: boolean): globalThis.Promise<[number, number, $.GoError]> {
	let nDst: number = 0
	let nSrc: number = 0
	let err: $.GoError = null! as $.GoError
	// Cap the maximum number of src bytes to check.
	let b: $.Slice<number> = src
	let eof = atEOF
	{
		let ns = $.sliceLen(dst)
		if (ns < $.sliceLen(b)) {
			err = transform2.ErrShortDst
			eof = false
			b = $.goSlice(b, undefined, ns)
		}
	}
	let [i, ok] = await __goscript_forminfo.formInfo.prototype.quickSpan.call($.arrayIndex(__goscript_forminfo.__goscript_get_formTable()!, f), __goscript_input.inputBytes(b), 0, $.sliceLen(b), eof)
	let n = $.copy(dst, $.goSlice(b, undefined, i))
	if (!ok) {
		let __goscriptTuple0: any = await Form_transform(f, $.goSlice(dst, n, undefined), $.goSlice(src, n, undefined), atEOF)
		nDst = __goscriptTuple0[0]
		nSrc = __goscriptTuple0[1]
		err = __goscriptTuple0[2]
		return [nDst + n, nSrc + n, err]
	}

	if (((err == null) && (n < $.sliceLen(src))) && !atEOF) {
		err = transform2.ErrShortSrc
	}
	return [n, n, err]
}

export function flushTransform(rb: __goscript_composition.reorderBuffer | $.VarRef<__goscript_composition.reorderBuffer> | null): boolean {
	const rb$: __goscript_composition.reorderBuffer = rb == null ? $.pointerTarget<__goscript_composition.reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<__goscript_composition.reorderBuffer>(rb)
	// Write out (must fully fit in dst, or else it is an ErrShortDst).
	if ($.sliceLen((rb$ as __goscript_composition.reorderBuffer).out) < ((rb$ as __goscript_composition.reorderBuffer).nrune * utf8.UTFMax)) {
		return false
	}
	;(rb$ as __goscript_composition.reorderBuffer).out = $.goSlice((rb$ as __goscript_composition.reorderBuffer).out, (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as __goscript_composition.reorderBuffer).flushCopy((rb$ as __goscript_composition.reorderBuffer).out) : __goscript_composition.reorderBuffer.prototype.flushCopy.call(rb, (rb$ as __goscript_composition.reorderBuffer).out)), undefined)
	return true
}

export let errs: $.Slice<$.GoError> = $.arrayToSlice<$.GoError>([null, transform2.ErrShortDst, transform2.ErrShortSrc])

export function __goscript_set_errs(__goscriptValue: $.Slice<$.GoError>): void {
	errs = __goscriptValue
}

export async function Form_transform(f: __goscript_normalize.Form, dst: $.Slice<number>, src: $.Slice<number>, atEOF: boolean): globalThis.Promise<[number, number, $.GoError]> {
	let nDst: number = 0
	let nSrc: number = 0
	let err: $.GoError = null! as $.GoError
	// TODO: get rid of reorderBuffer. See CL 23460044.
	let rb = $.varRef(new __goscript_composition.reorderBuffer(undefined, true))
	rb.value.init(f, src)
	while (true) {
		// Load segment into reorder buffer.
		rb.value.setFlusher($.goSlice(dst, nDst, undefined), flushTransform)
		let end: number = await __goscript_normalize.decomposeSegment(rb, nSrc, atEOF)
		if (end < 0) {
			return [nDst, nSrc, $.arrayIndex(errs!, -end)]
		}
		nDst = $.sliceLen(dst) - $.sliceLen(rb.value.out)
		nSrc = end

		// Next quickSpan.
		end = rb.value.nsrc
		let eof = atEOF
		{
			let n = (nSrc + $.sliceLen(dst)) - nDst
			if (n < end) {
				err = transform2.ErrShortDst
				end = n
				eof = false
			}
		}
		let __goscriptTuple1: any = await rb.value.f.quickSpan((rb.value.src).clone(), nSrc, end, eof)
		end = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		let n = $.copy($.goSlice(dst, nDst, undefined), $.goSlice(rb.value.src.bytes, nSrc, end))
		nSrc = nSrc + (n)
		nDst = nDst + (n)
		if (ok) {
			if (((err == null) && (n < rb.value.nsrc)) && !atEOF) {
				err = transform2.ErrShortSrc
			}
			return [nDst, nSrc, err]
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}
