// Generated file based on intconv.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import type * as rand from "@goscript/math/rand/index.js"

import type * as __goscript_accuracy_string from "./accuracy_string.gs.ts"

import * as __goscript_arith from "./arith.gs.ts"

import type * as __goscript_float from "./float.gs.ts"

import * as __goscript_int from "./int.gs.ts"

import * as __goscript_intmarsh from "./intmarsh.gs.ts"

import * as __goscript_nat from "./nat.gs.ts"

import * as __goscript_natconv from "./natconv.gs.ts"

import * as __goscript_natdiv from "./natdiv.gs.ts"

import * as __goscript_natmul from "./natmul.gs.ts"

import * as __goscript_prime from "./prime.gs.ts"

import * as __goscript_rat from "./rat.gs.ts"

import type * as __goscript_roundingmode_string from "./roundingmode_string.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "./arith.gs.ts"
import "./int.gs.ts"
import "./intmarsh.gs.ts"
import "./nat.gs.ts"
import "./natconv.gs.ts"
import "./natdiv.gs.ts"
import "./natmul.gs.ts"
import "./prime.gs.ts"
import "./rat.gs.ts"

$.registerTypePackagePath("math/big", ["big.byteReader"])

export class byteReader {
	public get ScanState(): fmt.ScanState | null {
		return this._fields.ScanState
	}

	public set ScanState(value: fmt.ScanState | null) {
		this._fields.ScanState = value
	}

	public _fields: {
		ScanState: fmt.ScanState | null
	}

	constructor(init?: Partial<{ScanState?: fmt.ScanState | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ScanState: init?.ScanState ?? (null! as fmt.ScanState | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): byteReader {
		return new byteReader(this, true)
	}

	public __goscriptAssign(source: byteReader): void {
		const target = this._fields
		const values = source._fields
		target.ScanState = $.assignFieldValue(target.ScanState, values.ScanState, "fmt.ScanState")
	}

	public async ReadByte(): globalThis.Promise<[number, $.GoError]> {
		const r = this;
		let [ch, size, err] = $.pointerValue<Exclude<fmt.ScanState, null>>(r.ScanState).ReadRune()
		if ((size != 1) && (err == null)) {
			err = fmt.Errorf("invalid rune %#U", $.basicInterfaceValue(ch, "rune", "int32"))
		}
		return [$.uint(ch, 8), err]
	}

	public async UnreadByte(): globalThis.Promise<$.GoError> {
		const r = this;
		return $.pointerValue<Exclude<fmt.ScanState, null>>(r.ScanState).UnreadRune()
	}

	public Read(buf: any): any {
		return $.pointerValue<Exclude<fmt.ScanState | null, null>>(this.ScanState).Read(buf)
	}

	public ReadRune(): any {
		return $.pointerValue<Exclude<fmt.ScanState | null, null>>(this.ScanState).ReadRune()
	}

	public SkipSpace(): any {
		return $.pointerValue<Exclude<fmt.ScanState | null, null>>(this.ScanState).SkipSpace()
	}

	public Token(skipSpace: any, f: any): any {
		return $.pointerValue<Exclude<fmt.ScanState | null, null>>(this.ScanState).Token(skipSpace, f)
	}

	public UnreadRune(): any {
		return $.pointerValue<Exclude<fmt.ScanState | null, null>>(this.ScanState).UnreadRune()
	}

	public Width(): any {
		return $.pointerValue<Exclude<fmt.ScanState | null, null>>(this.ScanState).Width()
	}

	static __typeInfo = $.registerStructType(
		"big.byteReader",
		() => new byteReader(),
		() => [$.methodSignature("ReadByte", [], [/* @__PURE__ */ $.basicType("uint8"), "error"]), $.methodSignature("UnreadByte", [], ["error"]), $.methodSignature("Read", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadRune", [], [["r", /* @__PURE__ */ $.basicType("int32")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("SkipSpace"), $.methodSignature("Token", [["skipSpace", /* @__PURE__ */ $.basicType("bool")], ["f", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int32")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [["token", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]]), $.methodSignature("UnreadRune", [], ["error"]), $.methodSignature("Width", [], [["wid", /* @__PURE__ */ $.basicType("int")], ["ok", /* @__PURE__ */ $.basicType("bool")]])],
		byteReader,
		() => [/* @__PURE__ */ $.structField("ScanState", "fmt.ScanState", [0], 0, true, { anonymous: true })]
	)
}

export async function writeMultiple(s: fmt.State | null, text: string, count: number): globalThis.Promise<void> {
	if (($.stringLen(text) <= 0) || (count <= 0)) {
		return
	}
	if ($.stringLen(text) == 1) {
		{
			let [bw, ok] = $.typeAssertTuple<io.ByteWriter | null>(s, "io.ByteWriter")
			if (ok) {
				for (let __goscriptRangeCount0 = count, __rangeIndex = 0; __rangeIndex < __goscriptRangeCount0; __rangeIndex++) {
					void (__goscriptAwait = (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? (bw as Exclude<io.ByteWriter, null>) : $.pointerValue<Exclude<io.ByteWriter, null>>(bw)).WriteByte($.indexString(text, 0)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				return
			}
		}
	}
	{
		let [sw, ok] = $.typeAssertTuple<io.StringWriter | null>(s, "io.StringWriter")
		if (ok) {
			for (let __goscriptRangeCount1 = count, __rangeIndex = 0; __rangeIndex < __goscriptRangeCount1; __rangeIndex++) {
				await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<io.StringWriter, null>) : $.pointerValue<Exclude<io.StringWriter, null>>(sw)).WriteString(text)
			}
			return
		}
	}
	let b: $.Slice<number> = $.stringToBytes(text)
	for (let __goscriptRangeCount2 = count, __rangeIndex = 0; __rangeIndex < __goscriptRangeCount2; __rangeIndex++) {
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(s)).Write(b)
	}
}

export async function scanSign(r: io.ByteScanner | null): globalThis.Promise<[boolean, $.GoError]> {
	let neg: boolean = false
	let err: $.GoError = null! as $.GoError
	let ch: number = 0
	{
		let __goscriptTuple0: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<io.ByteScanner, null>) : $.pointerValue<Exclude<io.ByteScanner, null>>(r)).ReadByte()
		ch = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [false, err]
		}
	}
	switch (ch) {
		case 45:
		{
			neg = true
			break
		}
		case 43:
		{
			break
		}
		default:
		{
			void (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<io.ByteScanner, null>) : $.pointerValue<Exclude<io.ByteScanner, null>>(r)).UnreadByte(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
	}
	return [neg, err]
}

var __goscriptAwait: any
