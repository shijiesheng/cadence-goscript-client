// Generated file based on normalize.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as transform2 from "@goscript/vendor/golang.org/x/text/transform/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_composition from "./composition.gs.ts"

import * as __goscript_forminfo from "./forminfo.gs.ts"

import * as __goscript_input from "./input.gs.ts"

import * as __goscript_iter from "./iter.gs.ts"

import * as __goscript_readwriter from "./readwriter.gs.ts"

import * as __goscript_tables17_0_0 from "./tables17.0.0.gs.ts"

import * as __goscript_transform from "./transform.gs.ts"

import * as __goscript_trie from "./trie.gs.ts"
import "@goscript/encoding/binary/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/vendor/golang.org/x/text/transform/index.js"
import "@goscript/io/index.js"
import "./composition.gs.ts"
import "./forminfo.gs.ts"
import "./input.gs.ts"
import "./iter.gs.ts"
import "./readwriter.gs.ts"
import "./tables17.0.0.gs.ts"
import "./transform.gs.ts"
import "./trie.gs.ts"

$.registerTypePackagePath("vendor/golang.org/x/text/unicode/norm", ["norm.Form"])

export type Form = number

$.registerNamedValueType(
	"norm.Form",
	{Append: (receiver: any, ...args: any[]) => (Form_Append as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), AppendString: (receiver: any, ...args: any[]) => (Form_AppendString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => (Form_Bytes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), FirstBoundary: (receiver: any, ...args: any[]) => (Form_FirstBoundary as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), FirstBoundaryInString: (receiver: any, ...args: any[]) => (Form_FirstBoundaryInString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsNormal: (receiver: any, ...args: any[]) => (Form_IsNormal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsNormalString: (receiver: any, ...args: any[]) => (Form_IsNormalString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), LastBoundary: (receiver: any, ...args: any[]) => (Form_LastBoundary as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), NextBoundary: (receiver: any, ...args: any[]) => (Form_NextBoundary as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), NextBoundaryInString: (receiver: any, ...args: any[]) => (Form_NextBoundaryInString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Properties: (receiver: any, ...args: any[]) => (__goscript_forminfo.Form_Properties as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), PropertiesString: (receiver: any, ...args: any[]) => (__goscript_forminfo.Form_PropertiesString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), QuickSpan: (receiver: any, ...args: any[]) => (Form_QuickSpan as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), QuickSpanString: (receiver: any, ...args: any[]) => (Form_QuickSpanString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Reader: (receiver: any, ...args: any[]) => (__goscript_readwriter.Form_Reader as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => (__goscript_transform.Form_Reset as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Span: (receiver: any, ...args: any[]) => (Form_Span as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), SpanString: (receiver: any, ...args: any[]) => (Form_SpanString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Form_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Transform: (receiver: any, ...args: any[]) => (__goscript_transform.Form_Transform as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Writer: (receiver: any, ...args: any[]) => (__goscript_readwriter.Form_Writer as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), doAppend: (receiver: any, ...args: any[]) => (Form_doAppend as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), firstBoundary: (receiver: any, ...args: any[]) => (Form_firstBoundary as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), nextBoundary: (receiver: any, ...args: any[]) => (Form_nextBoundary as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), transform: (receiver: any, ...args: any[]) => (__goscript_transform.Form_transform as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Append", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("AppendString", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Bytes", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("FirstBoundary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("FirstBoundaryInString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsNormal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsNormalString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("LastBoundary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("NextBoundary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("NextBoundaryInString", [["s", /* @__PURE__ */ $.basicType("string")], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Properties", [["s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["norm.Properties"]), $.methodSignature("PropertiesString", [["s", /* @__PURE__ */ $.basicType("string")]], ["norm.Properties"]), $.methodSignature("QuickSpan", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("QuickSpanString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reader", [["r", "io.Reader"]], ["io.Reader"]), $.methodSignature("Reset"), $.methodSignature("Span", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("SpanString", [["s", /* @__PURE__ */ $.basicType("string")], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("String", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Transform", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["nDst", /* @__PURE__ */ $.basicType("int")], ["nSrc", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("Writer", [["w", "io.Writer"]], ["io.WriteCloser"]), $.methodSignature("doAppend", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", "norm.input"], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("firstBoundary", [["src", "norm.input"], ["nsrc", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("nextBoundary", [["src", "norm.input"], ["nsrc", /* @__PURE__ */ $.basicType("int")], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("transform", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["nDst", /* @__PURE__ */ $.basicType("int")], ["nSrc", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

$.registerNamedValueType(
	"*norm.Form",
	{Append: (receiver: any, ...args: any[]) => (Form_Append as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), AppendString: (receiver: any, ...args: any[]) => (Form_AppendString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Bytes: (receiver: any, ...args: any[]) => (Form_Bytes as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), FirstBoundary: (receiver: any, ...args: any[]) => (Form_FirstBoundary as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), FirstBoundaryInString: (receiver: any, ...args: any[]) => (Form_FirstBoundaryInString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsNormal: (receiver: any, ...args: any[]) => (Form_IsNormal as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), IsNormalString: (receiver: any, ...args: any[]) => (Form_IsNormalString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), LastBoundary: (receiver: any, ...args: any[]) => (Form_LastBoundary as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), NextBoundary: (receiver: any, ...args: any[]) => (Form_NextBoundary as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), NextBoundaryInString: (receiver: any, ...args: any[]) => (Form_NextBoundaryInString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Properties: (receiver: any, ...args: any[]) => (__goscript_forminfo.Form_Properties as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), PropertiesString: (receiver: any, ...args: any[]) => (__goscript_forminfo.Form_PropertiesString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), QuickSpan: (receiver: any, ...args: any[]) => (Form_QuickSpan as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), QuickSpanString: (receiver: any, ...args: any[]) => (Form_QuickSpanString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Reader: (receiver: any, ...args: any[]) => (__goscript_readwriter.Form_Reader as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => (__goscript_transform.Form_Reset as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Span: (receiver: any, ...args: any[]) => (Form_Span as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), SpanString: (receiver: any, ...args: any[]) => (Form_SpanString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Form_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Transform: (receiver: any, ...args: any[]) => (__goscript_transform.Form_Transform as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Writer: (receiver: any, ...args: any[]) => (__goscript_readwriter.Form_Writer as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), doAppend: (receiver: any, ...args: any[]) => (Form_doAppend as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), firstBoundary: (receiver: any, ...args: any[]) => (Form_firstBoundary as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), nextBoundary: (receiver: any, ...args: any[]) => (Form_nextBoundary as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), transform: (receiver: any, ...args: any[]) => (__goscript_transform.Form_transform as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Append", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("AppendString", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Bytes", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("FirstBoundary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("FirstBoundaryInString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("IsNormal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsNormalString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("LastBoundary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("NextBoundary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("NextBoundaryInString", [["s", /* @__PURE__ */ $.basicType("string")], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Properties", [["s", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["norm.Properties"]), $.methodSignature("PropertiesString", [["s", /* @__PURE__ */ $.basicType("string")]], ["norm.Properties"]), $.methodSignature("QuickSpan", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("QuickSpanString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reader", [["r", "io.Reader"]], ["io.Reader"]), $.methodSignature("Reset"), $.methodSignature("Span", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("SpanString", [["s", /* @__PURE__ */ $.basicType("string")], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("String", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Transform", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["nDst", /* @__PURE__ */ $.basicType("int")], ["nSrc", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("Writer", [["w", "io.Writer"]], ["io.WriteCloser"]), $.methodSignature("doAppend", [["out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", "norm.input"], ["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("firstBoundary", [["src", "norm.input"], ["nsrc", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("nextBoundary", [["src", "norm.input"], ["nsrc", /* @__PURE__ */ $.basicType("int")], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("transform", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["src", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["atEOF", /* @__PURE__ */ $.basicType("bool")]], [["nDst", /* @__PURE__ */ $.basicType("int")], ["nSrc", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export const NFC: Form = 0

export const NFD: Form = 1

export const NFKC: Form = 2

export const NFKD: Form = 3

export async function Form_Bytes(f: Form, b: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	let src = __goscript_input.inputBytes(b)
	let ft: __goscript_forminfo.formInfo | $.VarRef<__goscript_forminfo.formInfo> | null = $.arrayIndex(__goscript_forminfo.__goscript_get_formTable()!, f)
	let [n, ok] = await (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? ((ft as any) as __goscript_forminfo.formInfo).quickSpan((src).clone(), 0, $.sliceLen(b), true) : __goscript_forminfo.formInfo.prototype.quickSpan.call(ft, (src).clone(), 0, $.sliceLen(b), true))
	if (ok) {
		return b
	}
	let out: $.Slice<number> = $.makeSlice<number>(n, $.sliceLen(b), "byte")
	$.copy(out, $.goSlice(b, 0, n))
	let rb = $.varRef(new __goscript_composition.reorderBuffer({f: $.pointerValue<__goscript_forminfo.formInfo>(ft), src: src, nsrc: $.sliceLen(b), out: out, flushF: __goscript_composition.appendFlush}, true))
	return doAppendInner(rb, n)
}

export async function Form_String(f: Form, s: string): globalThis.Promise<string> {
	let src = __goscript_input.inputString(s)
	let ft: __goscript_forminfo.formInfo | $.VarRef<__goscript_forminfo.formInfo> | null = $.arrayIndex(__goscript_forminfo.__goscript_get_formTable()!, f)
	let [n, ok] = await (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? ((ft as any) as __goscript_forminfo.formInfo).quickSpan((src).clone(), 0, $.stringLen(s), true) : __goscript_forminfo.formInfo.prototype.quickSpan.call(ft, (src).clone(), 0, $.stringLen(s), true))
	if (ok) {
		return s
	}
	let out: $.Slice<number> = $.makeSlice<number>(n, $.stringLen(s), "byte")
	$.copy(out, $.sliceStringOrBytes(s, 0, n))
	let rb = $.varRef(new __goscript_composition.reorderBuffer({f: $.pointerValue<__goscript_forminfo.formInfo>(ft), src: src, nsrc: $.stringLen(s), out: out, flushF: __goscript_composition.appendFlush}, true))
	return $.bytesToString(await doAppendInner(rb, n))
}

export async function Form_IsNormal(f: Form, b: $.Slice<number>): globalThis.Promise<boolean> {
	let src = __goscript_input.inputBytes(b)
	let ft: __goscript_forminfo.formInfo | $.VarRef<__goscript_forminfo.formInfo> | null = $.arrayIndex(__goscript_forminfo.__goscript_get_formTable()!, f)
	let [bp, ok] = await (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? ((ft as any) as __goscript_forminfo.formInfo).quickSpan((src).clone(), 0, $.sliceLen(b), true) : __goscript_forminfo.formInfo.prototype.quickSpan.call(ft, (src).clone(), 0, $.sliceLen(b), true))
	if (ok) {
		return true
	}
	let rb = $.varRef(new __goscript_composition.reorderBuffer({f: $.pointerValue<__goscript_forminfo.formInfo>(ft), src: src, nsrc: $.sliceLen(b)}, true))
	rb.value.setFlusher(null, cmpNormalBytes)
	while (bp < $.sliceLen(b)) {
		rb.value.out = $.goSlice(b, bp, undefined)
		{
			bp = await decomposeSegment(rb, bp, true)
			if (bp < 0) {
				return false
			}
		}
		let __goscriptTuple0: any = await rb.value.f.quickSpan((rb.value.src).clone(), bp, $.sliceLen(b), true)
		bp = __goscriptTuple0[0]
	}
	return true
}

export function cmpNormalBytes(rb: __goscript_composition.reorderBuffer | $.VarRef<__goscript_composition.reorderBuffer> | null): boolean {
	const rb$: __goscript_composition.reorderBuffer = rb == null ? $.pointerTarget<__goscript_composition.reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<__goscript_composition.reorderBuffer>(rb)
	let b: $.Slice<number> = (rb$ as __goscript_composition.reorderBuffer).out
	for (let i = 0; i < (rb$ as __goscript_composition.reorderBuffer).nrune; i++) {
		let info = ($.arrayIndex((rb$ as __goscript_composition.reorderBuffer).rune, i)).clone()
		if ($.int(info.size) > $.sliceLen(b)) {
			return false
		}
		let p = info.pos
		let pe = $.uint(((p + info.size) & 0xff), 8)
		for (; p < pe; p = ((p + 1) & 0xff)) {
			if ($.arrayIndex(b!, 0) != $.arrayIndex((rb$ as __goscript_composition.reorderBuffer).byte, p)) {
				return false
			}
			b = $.goSlice(b, 1, undefined)
		}
	}
	return true
}

export async function Form_IsNormalString(f: Form, s: string): globalThis.Promise<boolean> {
	let src = __goscript_input.inputString(s)
	let ft: __goscript_forminfo.formInfo | $.VarRef<__goscript_forminfo.formInfo> | null = $.arrayIndex(__goscript_forminfo.__goscript_get_formTable()!, f)
	let [bp, ok] = await (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? ((ft as any) as __goscript_forminfo.formInfo).quickSpan((src).clone(), 0, $.stringLen(s), true) : __goscript_forminfo.formInfo.prototype.quickSpan.call(ft, (src).clone(), 0, $.stringLen(s), true))
	if (ok) {
		return true
	}
	let rb = $.varRef(new __goscript_composition.reorderBuffer({f: $.pointerValue<__goscript_forminfo.formInfo>(ft), src: src, nsrc: $.stringLen(s)}, true))
	rb.value.setFlusher(null, $.functionValue((rb: __goscript_composition.reorderBuffer | $.VarRef<__goscript_composition.reorderBuffer> | null): boolean => {
		for (let i = 0; i < $.pointerValue<__goscript_composition.reorderBuffer>(rb).nrune; i++) {
			let info = ($.arrayIndex($.pointerValue<__goscript_composition.reorderBuffer>(rb).rune, i)).clone()
			if ((bp + $.int(info.size)) > $.stringLen(s)) {
				return false
			}
			let p = info.pos
			let pe = $.uint(((p + info.size) & 0xff), 8)
			for (; p < pe; p = ((p + 1) & 0xff)) {
				if ($.indexString(s, bp) != $.arrayIndex($.pointerValue<__goscript_composition.reorderBuffer>(rb).byte, p)) {
					return false
				}
				bp++
			}
		}
		return true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("norm.reorderBuffer")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))
	while (bp < $.stringLen(s)) {
		{
			bp = await decomposeSegment(rb, bp, true)
			if (bp < 0) {
				return false
			}
		}
		let __goscriptTuple1: any = await rb.value.f.quickSpan((rb.value.src).clone(), bp, $.stringLen(s), true)
		bp = __goscriptTuple1[0]
	}
	return true
}

export async function patchTail(rb: __goscript_composition.reorderBuffer | $.VarRef<__goscript_composition.reorderBuffer> | null): globalThis.Promise<boolean> {
	const rb$: __goscript_composition.reorderBuffer = rb == null ? $.pointerTarget<__goscript_composition.reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<__goscript_composition.reorderBuffer>(rb)
	let [info, p] = await lastRuneStart($.fieldRef((rb$ as __goscript_composition.reorderBuffer)._fields, "f"), (rb$ as __goscript_composition.reorderBuffer).out)
	if ((p == -1) || (info.size == 0)) {
		return true
	}
	let end = p + $.int(info.size)
	let extra = $.sliceLen((rb$ as __goscript_composition.reorderBuffer).out) - end
	if (extra > 0) {
		// Potentially allocating memory. However, this only
		// happens with ill-formed UTF-8.
		let x: $.Slice<number> = $.makeSlice<number>(0, undefined, "byte")
		x = $.appendSlice(x, $.goSlice((rb$ as __goscript_composition.reorderBuffer).out, $.sliceLen((rb$ as __goscript_composition.reorderBuffer).out) - extra, undefined), $.byteSliceHint);
		;(rb$ as __goscript_composition.reorderBuffer).out = $.goSlice((rb$ as __goscript_composition.reorderBuffer).out, undefined, end)
		await decomposeToLastBoundary(rb)
		await (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as __goscript_composition.reorderBuffer).doFlush() : __goscript_composition.reorderBuffer.prototype.doFlush.call(rb));
		;(rb$ as __goscript_composition.reorderBuffer).out = $.appendSlice((rb$ as __goscript_composition.reorderBuffer).out, x, $.byteSliceHint)
		return false
	}
	let buf: $.Slice<number> = $.goSlice((rb$ as __goscript_composition.reorderBuffer).out, p, undefined);
	;(rb$ as __goscript_composition.reorderBuffer).out = $.goSlice((rb$ as __goscript_composition.reorderBuffer).out, undefined, p)
	await decomposeToLastBoundary(rb)
	{
		let s = __goscript_composition.streamSafe_next($.fieldRef((rb$ as __goscript_composition.reorderBuffer)._fields, "ss"), info)
		if (s == 1) {
			await (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as __goscript_composition.reorderBuffer).doFlush() : __goscript_composition.reorderBuffer.prototype.doFlush.call(rb))
			__goscript_composition.streamSafe_first($.fieldRef((rb$ as __goscript_composition.reorderBuffer)._fields, "ss"), info)
		} else {
			if (s == 2) {
				await (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as __goscript_composition.reorderBuffer).doFlush() : __goscript_composition.reorderBuffer.prototype.doFlush.call(rb))
				void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as __goscript_composition.reorderBuffer).insertCGJ() : __goscript_composition.reorderBuffer.prototype.insertCGJ.call(rb));
				;(rb$ as __goscript_composition.reorderBuffer).ss = 0
			}
		}
	}
	await (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as __goscript_composition.reorderBuffer).insertUnsafe(__goscript_input.inputBytes(buf), 0, info) : __goscript_composition.reorderBuffer.prototype.insertUnsafe.call(rb, __goscript_input.inputBytes(buf), 0, info))
	return true
}

export async function appendQuick(rb: __goscript_composition.reorderBuffer | $.VarRef<__goscript_composition.reorderBuffer> | null, i: number): globalThis.Promise<number> {
	const rb$: __goscript_composition.reorderBuffer = rb == null ? $.pointerTarget<__goscript_composition.reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<__goscript_composition.reorderBuffer>(rb)
	if ((rb$ as __goscript_composition.reorderBuffer).nsrc == i) {
		return i
	}
	let [end, ] = await (rb$ as __goscript_composition.reorderBuffer).f.quickSpan(((rb$ as __goscript_composition.reorderBuffer).src).clone(), i, (rb$ as __goscript_composition.reorderBuffer).nsrc, true);
	;(rb$ as __goscript_composition.reorderBuffer).out = (rb$ as __goscript_composition.reorderBuffer).src.appendSlice((rb$ as __goscript_composition.reorderBuffer).out, i, end)
	return end
}

export async function Form_Append(f: Form, out: $.Slice<number>, src: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	return Form_doAppend(f, out, __goscript_input.inputBytes(src), $.sliceLen(src))
}

export async function Form_doAppend(f: Form, out: $.Slice<number>, __goscriptParam0: __goscript_input.input, n: number): globalThis.Promise<$.Slice<number>> {
	let src: $.VarRef<__goscript_input.input> = $.varRef(__goscriptParam0)
	if (n == 0) {
		return out
	}
	let ft: __goscript_forminfo.formInfo | $.VarRef<__goscript_forminfo.formInfo> | null = $.arrayIndex(__goscript_forminfo.__goscript_get_formTable()!, f)
	// Attempt to do a quickSpan first so we can avoid initializing the reorderBuffer.
	if ($.sliceLen(out) == 0) {
		let [p, ] = await (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? ((ft as any) as __goscript_forminfo.formInfo).quickSpan((src.value).clone(), 0, n, true) : __goscript_forminfo.formInfo.prototype.quickSpan.call(ft, (src.value).clone(), 0, n, true))
		out = src.value.appendSlice(out, 0, p)
		if (p == n) {
			return out
		}
		let rb = $.varRef(new __goscript_composition.reorderBuffer({f: $.pointerValue<__goscript_forminfo.formInfo>(ft), src: src.value, nsrc: n, out: out, flushF: __goscript_composition.appendFlush}, true))
		return doAppendInner(rb, p)
	}
	let rb = $.varRef(new __goscript_composition.reorderBuffer({f: $.pointerValue<__goscript_forminfo.formInfo>(ft), src: src.value, nsrc: n}, true))
	return doAppend(rb, out, 0)
}

export async function doAppend(rb: __goscript_composition.reorderBuffer | $.VarRef<__goscript_composition.reorderBuffer> | null, out: $.Slice<number>, p: number): globalThis.Promise<$.Slice<number>> {
	const rb$: __goscript_composition.reorderBuffer = rb == null ? $.pointerTarget<__goscript_composition.reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<__goscript_composition.reorderBuffer>(rb)
	void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as __goscript_composition.reorderBuffer).setFlusher(out, __goscript_composition.appendFlush) : __goscript_composition.reorderBuffer.prototype.setFlusher.call(rb, out, __goscript_composition.appendFlush))
	let src = $.varRef(((rb$ as __goscript_composition.reorderBuffer).src).clone())
	let n = (rb$ as __goscript_composition.reorderBuffer).nsrc
	let doMerge = $.sliceLen(out) > 0
	{
		let q: number = src.value.skipContinuationBytes(p)
		if (q > p) {
			// Move leading non-starters to destination.
			;(rb$ as __goscript_composition.reorderBuffer).out = src.value.appendSlice((rb$ as __goscript_composition.reorderBuffer).out, p, q)
			p = q
			doMerge = await patchTail(rb)
		}
	}
	let fd: __goscript_forminfo.formInfo | $.VarRef<__goscript_forminfo.formInfo> | null = $.fieldRef((rb$ as __goscript_composition.reorderBuffer)._fields, "f")
	if (doMerge) {
		let info: __goscript_forminfo.Properties = new __goscript_forminfo.Properties(undefined, true)
		if (p < n) {
			info = $.assignStruct(info, ((__goscriptAwait = $.pointerValue<__goscript_forminfo.formInfo>(fd).info!((src.value).clone(), p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties))
			if (!info.BoundaryBefore() || (info.nLeadingNonStarters() > 0)) {
				if (p == 0) {
					await decomposeToLastBoundary(rb)
				}
				p = await decomposeSegment(rb, p, true)
			}
		}
		if (info.size == 0) {
			await (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as __goscript_composition.reorderBuffer).doFlush() : __goscript_composition.reorderBuffer.prototype.doFlush.call(rb))
			// Append incomplete UTF-8 encoding.
			return src.value.appendSlice((rb$ as __goscript_composition.reorderBuffer).out, p, n)
		}
		if ((rb$ as __goscript_composition.reorderBuffer).nrune > 0) {
			return doAppendInner(rb, p)
		}
	}
	p = await appendQuick(rb, p)
	return doAppendInner(rb, p)
}

export async function doAppendInner(rb: __goscript_composition.reorderBuffer | $.VarRef<__goscript_composition.reorderBuffer> | null, p: number): globalThis.Promise<$.Slice<number>> {
	const rb$: __goscript_composition.reorderBuffer = rb == null ? $.pointerTarget<__goscript_composition.reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<__goscript_composition.reorderBuffer>(rb)
	for (let n = (rb$ as __goscript_composition.reorderBuffer).nsrc; p < n; ) {
		p = await decomposeSegment(rb, p, true)
		p = await appendQuick(rb, p)
	}
	return (rb$ as __goscript_composition.reorderBuffer).out
}

export async function Form_AppendString(f: Form, out: $.Slice<number>, src: string): globalThis.Promise<$.Slice<number>> {
	return Form_doAppend(f, out, __goscript_input.inputString(src), $.stringLen(src))
}

export async function Form_QuickSpan(f: Form, b: $.Slice<number>): globalThis.Promise<number> {
	let [n, ] = await __goscript_forminfo.formInfo.prototype.quickSpan.call($.arrayIndex(__goscript_forminfo.__goscript_get_formTable()!, f), __goscript_input.inputBytes(b), 0, $.sliceLen(b), true)
	return n
}

export async function Form_Span(f: Form, b: $.Slice<number>, atEOF: boolean): globalThis.Promise<[number, $.GoError]> {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple2: any = await __goscript_forminfo.formInfo.prototype.quickSpan.call($.arrayIndex(__goscript_forminfo.__goscript_get_formTable()!, f), __goscript_input.inputBytes(b), 0, $.sliceLen(b), atEOF)
	n = __goscriptTuple2[0]
	let ok = __goscriptTuple2[1]
	if (n < $.sliceLen(b)) {
		if (!ok) {
			err = transform2.ErrEndOfSpan
		} else {
			err = transform2.ErrShortSrc
		}
	}
	return [n, err]
}

export async function Form_SpanString(f: Form, s: string, atEOF: boolean): globalThis.Promise<[number, $.GoError]> {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let __goscriptTuple3: any = await __goscript_forminfo.formInfo.prototype.quickSpan.call($.arrayIndex(__goscript_forminfo.__goscript_get_formTable()!, f), __goscript_input.inputString(s), 0, $.stringLen(s), atEOF)
	n = __goscriptTuple3[0]
	let ok = __goscriptTuple3[1]
	if (n < $.stringLen(s)) {
		if (!ok) {
			err = transform2.ErrEndOfSpan
		} else {
			err = transform2.ErrShortSrc
		}
	}
	return [n, err]
}

export async function Form_QuickSpanString(f: Form, s: string): globalThis.Promise<number> {
	let [n, ] = await __goscript_forminfo.formInfo.prototype.quickSpan.call($.arrayIndex(__goscript_forminfo.__goscript_get_formTable()!, f), __goscript_input.inputString(s), 0, $.stringLen(s), true)
	return n
}

export async function Form_FirstBoundary(f: Form, b: $.Slice<number>): globalThis.Promise<number> {
	return Form_firstBoundary(f, __goscript_input.inputBytes(b), $.sliceLen(b))
}

export async function Form_firstBoundary(f: Form, __goscriptParam1: __goscript_input.input, nsrc: number): globalThis.Promise<number> {
	let src: $.VarRef<__goscript_input.input> = $.varRef(__goscriptParam1)
	let i = src.value.skipContinuationBytes(0)
	if (i >= nsrc) {
		return -1
	}
	let fd: __goscript_forminfo.formInfo | $.VarRef<__goscript_forminfo.formInfo> | null = $.arrayIndex(__goscript_forminfo.__goscript_get_formTable()!, f)
	let ss = $.varRef(0)
	// We should call ss.first here, but we can't as the first rune is
	// skipped already. This means FirstBoundary can't really determine
	// CGJ insertion points correctly. Luckily it doesn't have to.
	while (true) {
		let info = (((__goscriptAwait = $.pointerValue<__goscript_forminfo.formInfo>(fd).info!((src.value).clone(), i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties)).clone()
		if (info.size == 0) {
			return -1
		}
		{
			let s = __goscript_composition.streamSafe_next(ss, info)
			if (s != 0) {
				return i
			}
		}
		i = i + ($.int(info.size))
		if (i >= nsrc) {
			if (!info.BoundaryAfter() && !__goscript_composition.streamSafe_isMax(ss.value)) {
				return -1
			}
			return nsrc
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function Form_FirstBoundaryInString(f: Form, s: string): globalThis.Promise<number> {
	return Form_firstBoundary(f, __goscript_input.inputString(s), $.stringLen(s))
}

export async function Form_NextBoundary(f: Form, b: $.Slice<number>, atEOF: boolean): globalThis.Promise<number> {
	return Form_nextBoundary(f, __goscript_input.inputBytes(b), $.sliceLen(b), atEOF)
}

export async function Form_NextBoundaryInString(f: Form, s: string, atEOF: boolean): globalThis.Promise<number> {
	return Form_nextBoundary(f, __goscript_input.inputString(s), $.stringLen(s), atEOF)
}

export async function Form_nextBoundary(f: Form, src: __goscript_input.input, nsrc: number, atEOF: boolean): globalThis.Promise<number> {
	if (nsrc == 0) {
		if (atEOF) {
			return 0
		}
		return -1
	}
	let fd: __goscript_forminfo.formInfo | $.VarRef<__goscript_forminfo.formInfo> | null = $.arrayIndex(__goscript_forminfo.__goscript_get_formTable()!, f)
	let fd$: __goscript_forminfo.formInfo = fd == null ? $.pointerTarget<__goscript_forminfo.formInfo>(fd) : (fd as any).__isVarRef === true ? (fd as any).value : (fd as any).__goValue === undefined ? (fd as any) : $.pointerTarget<__goscript_forminfo.formInfo>(fd)
	let info = (((__goscriptAwait = (fd$ as __goscript_forminfo.formInfo).info!((src).clone(), 0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties)).clone()
	if (info.size == 0) {
		if (atEOF) {
			return 1
		}
		return -1
	}
	let ss = $.varRef(0)
	__goscript_composition.streamSafe_first(ss, info)

	for (let i: number = $.int(info.size); i < nsrc; i = i + ($.int(info.size))) {
		info = $.assignStruct(info, ((__goscriptAwait = (fd$ as __goscript_forminfo.formInfo).info!((src).clone(), i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties))
		if (info.size == 0) {
			if (atEOF) {
				return i
			}
			return -1
		}
		// TODO: Using streamSafe to determine the boundary isn't the same as
		// using BoundaryBefore. Determine which should be used.
		{
			let s = __goscript_composition.streamSafe_next(ss, info)
			if (s != 0) {
				return i
			}
		}
	}
	if ((!atEOF && !info.BoundaryAfter()) && !__goscript_composition.streamSafe_isMax(ss.value)) {
		return -1
	}
	return nsrc
}

export async function Form_LastBoundary(f: Form, b: $.Slice<number>): globalThis.Promise<number> {
	return lastBoundary($.arrayIndex(__goscript_forminfo.__goscript_get_formTable()!, f), b)
}

export async function lastBoundary(fd: __goscript_forminfo.formInfo | $.VarRef<__goscript_forminfo.formInfo> | null, b: $.Slice<number>): globalThis.Promise<number> {
	let i = $.sliceLen(b)
	let [info, p] = await lastRuneStart(fd, b)
	if (p == -1) {
		return -1
	}
	if (info.size == 0) {
		if (p == 0) {
			return -1
		}
		i = p
		let __goscriptTuple4: any = await lastRuneStart(fd, $.goSlice(b, undefined, i))
		info = $.assignStruct(info, __goscriptTuple4[0])
		p = __goscriptTuple4[1]
		if (p == -1) {
			return i
		}
	}
	if ((p + $.int(info.size)) != i) {
		return i
	}
	if (info.BoundaryAfter()) {
		return i
	}
	let ss = $.varRef(0)
	let v = __goscript_composition.streamSafe_backwards(ss, info)
	for (i = p; (i >= 0) && (v != 1); i = p) {
		let __goscriptTuple5: any = await lastRuneStart(fd, $.goSlice(b, undefined, i))
		info = $.assignStruct(info, __goscriptTuple5[0])
		p = __goscriptTuple5[1]
		{
			v = __goscript_composition.streamSafe_backwards(ss, info)
			if (v == 2) {
				break
			}
		}
		if ((p + $.int(info.size)) != i) {
			if (p == -1) {
				return -1
			}
			return i
		}
	}
	return i
}

export async function decomposeSegment(rb: __goscript_composition.reorderBuffer | $.VarRef<__goscript_composition.reorderBuffer> | null, sp: number, atEOF: boolean): globalThis.Promise<number> {
	const rb$: __goscript_composition.reorderBuffer = rb == null ? $.pointerTarget<__goscript_composition.reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<__goscript_composition.reorderBuffer>(rb)
	// Force one character to be consumed.
	let info = (((__goscriptAwait = (rb$ as __goscript_composition.reorderBuffer).f.info!(((rb$ as __goscript_composition.reorderBuffer).src).clone(), sp), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties)).clone()
	if (info.size == 0) {
		return 0
	}
	end: {
		{
			let s = __goscript_composition.streamSafe_next($.fieldRef((rb$ as __goscript_composition.reorderBuffer)._fields, "ss"), info)
			if (s == 1) {
				// TODO: this could be removed if we don't support merging.
				if ((rb$ as __goscript_composition.reorderBuffer).nrune > 0) {
					break end
				}
			} else {
				if (s == 2) {
					void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as __goscript_composition.reorderBuffer).insertCGJ() : __goscript_composition.reorderBuffer.prototype.insertCGJ.call(rb))
					break end
				}
			}
		}
		{
			let err = await (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as __goscript_composition.reorderBuffer).insertFlush(((rb$ as __goscript_composition.reorderBuffer).src).clone(), sp, info) : __goscript_composition.reorderBuffer.prototype.insertFlush.call(rb, ((rb$ as __goscript_composition.reorderBuffer).src).clone(), sp, info))
			if (err != 0) {
				return $.int(err)
			}
		}
		while (true) {
			sp = sp + ($.int(info.size))
			if (sp >= (rb$ as __goscript_composition.reorderBuffer).nsrc) {
				if (!atEOF && !info.BoundaryAfter()) {
					return -2
				}
				break
			}
			info = $.assignStruct(info, ((__goscriptAwait = (rb$ as __goscript_composition.reorderBuffer).f.info!(((rb$ as __goscript_composition.reorderBuffer).src).clone(), sp), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties))
			if (info.size == 0) {
				if (!atEOF) {
					return -2
				}
				break
			}
			{
				let s = __goscript_composition.streamSafe_next($.fieldRef((rb$ as __goscript_composition.reorderBuffer)._fields, "ss"), info)
				if (s == 1) {
					break
				} else {
					if (s == 2) {
						void (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as __goscript_composition.reorderBuffer).insertCGJ() : __goscript_composition.reorderBuffer.prototype.insertCGJ.call(rb))
						break
					}
				}
			}
			{
				let err = await (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as __goscript_composition.reorderBuffer).insertFlush(((rb$ as __goscript_composition.reorderBuffer).src).clone(), sp, info) : __goscript_composition.reorderBuffer.prototype.insertFlush.call(rb, ((rb$ as __goscript_composition.reorderBuffer).src).clone(), sp, info))
				if (err != 0) {
					return $.int(err)
				}
			}
		}
	}
	if (!await (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as __goscript_composition.reorderBuffer).doFlush() : __goscript_composition.reorderBuffer.prototype.doFlush.call(rb))) {
		return -1
	}
	return sp
}

export async function lastRuneStart(fd: __goscript_forminfo.formInfo | $.VarRef<__goscript_forminfo.formInfo> | null, buf: $.Slice<number>): globalThis.Promise<[__goscript_forminfo.Properties, number]> {
	let p = $.sliceLen(buf) - 1
	for (let __goscriptSliceWindow0 = $.sliceRange(buf); (p >= 0) && !utf8.RuneStart(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, p)] as number)); p--) {
	}
	if (p < 0) {
		return [new __goscript_forminfo.Properties(undefined, true), -1]
	}
	return [(((__goscriptAwait = $.pointerValue<__goscript_forminfo.formInfo>(fd).info!(__goscript_input.inputBytes(buf), p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_forminfo.Properties)).clone(), p]
}

export async function decomposeToLastBoundary(rb: __goscript_composition.reorderBuffer | $.VarRef<__goscript_composition.reorderBuffer> | null): globalThis.Promise<void> {
	const rb$: __goscript_composition.reorderBuffer = rb == null ? $.pointerTarget<__goscript_composition.reorderBuffer>(rb) : (rb as any).__isVarRef === true ? (rb as any).value : (rb as any).__goValue === undefined ? (rb as any) : $.pointerTarget<__goscript_composition.reorderBuffer>(rb)
	let fd: __goscript_forminfo.formInfo | $.VarRef<__goscript_forminfo.formInfo> | null = $.fieldRef((rb$ as __goscript_composition.reorderBuffer)._fields, "f")
	let [info, i] = await lastRuneStart(fd, (rb$ as __goscript_composition.reorderBuffer).out)
	if ($.int(info.size) != ($.sliceLen((rb$ as __goscript_composition.reorderBuffer).out) - i)) {
		// illegal trailing continuation bytes
		return
	}
	if (info.BoundaryAfter()) {
		return
	}
	let add: __goscript_forminfo.Properties[] = $.arrayValue(globalThis.Array.from({ length: 31 }, () => new __goscript_forminfo.Properties(undefined, true)), /* @__PURE__ */ $.arrayType("norm.Properties", 31))
	let padd = 0
	let ss = $.varRef(0)
	let p = $.sliceLen((rb$ as __goscript_composition.reorderBuffer).out)
	while (true) {
		$.assignStruct(add[padd], info)
		let v = __goscript_composition.streamSafe_backwards(ss, info)
		if (v == 2) {
			// Note that if we have an overflow, it the string we are appending to
			// is not correctly normalized. In this case the behavior is undefined.
			break
		}
		padd++
		p = p - ($.int(info.size))
		if ((v == 1) || (p < 0)) {
			break
		}
		let __goscriptTuple6: any = await lastRuneStart(fd, $.goSlice((rb$ as __goscript_composition.reorderBuffer).out, undefined, p))
		info = $.assignStruct(info, __goscriptTuple6[0])
		i = __goscriptTuple6[1]
		if ($.int(info.size) != (p - i)) {
			break
		}
	}
	;(rb$ as __goscript_composition.reorderBuffer).ss = ss.value
	// Copy bytes for insertion as we may need to overwrite rb.out.
	let buf: Uint8Array = $.arrayValue(new Uint8Array(128))
	let cp: $.Slice<number> = $.goSlice(buf, undefined, $.copy($.goSlice(buf, undefined, undefined), $.goSlice((rb$ as __goscript_composition.reorderBuffer).out, p, undefined)));
	;(rb$ as __goscript_composition.reorderBuffer).out = $.goSlice((rb$ as __goscript_composition.reorderBuffer).out, undefined, p)
	for (padd--; padd >= 0; padd--) {
		info = $.assignStruct(info, $.arrayIndex(add, padd))
		await (rb !== null && (rb as any).__isVarRef !== true && (rb as any).__goValue === undefined ? ((rb as any) as __goscript_composition.reorderBuffer).insertUnsafe(__goscript_input.inputBytes(cp), 0, info) : __goscript_composition.reorderBuffer.prototype.insertUnsafe.call(rb, __goscript_input.inputBytes(cp), 0, info))
		cp = $.goSlice(cp, info.size, undefined)
	}
}

var __goscriptAwait: any
