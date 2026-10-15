// Generated file based on encode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as detrand from "@goscript/google.golang.org/protobuf/internal/detrand/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/google.golang.org/protobuf/internal/detrand/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"

$.registerTypePackagePath("google.golang.org/protobuf/internal/encoding/text", ["text.encType", "text.Encoder", "text.encoderState"])

export type encType = number

export class encoderState {
	public get lastType(): encType {
		return this._fields.lastType
	}

	public set lastType(value: encType) {
		this._fields.lastType = value
	}

	public get indents(): $.Slice<number> {
		return this._fields.indents
	}

	public set indents(value: $.Slice<number>) {
		this._fields.indents = value
	}

	public get out(): $.Slice<number> {
		return this._fields.out
	}

	public set out(value: $.Slice<number>) {
		this._fields.out = value
	}

	public _fields: {
		lastType: encType
		indents: $.Slice<number>
		out: $.Slice<number>
	}

	constructor(init?: Partial<{lastType?: encType, indents?: $.Slice<number>, out?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			lastType: init?.lastType ?? (0 as encType),
			indents: init?.indents ?? (null! as $.Slice<number>),
			out: init?.out ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): encoderState {
		return new encoderState(this, true)
	}

	public __goscriptAssign(source: encoderState): void {
		const target = this._fields
		const values = source._fields
		target.lastType = values.lastType
		target.indents = values.indents
		target.out = values.out
	}

	static __typeInfo = $.registerStructType(
		"text.encoderState",
		() => new encoderState(),
		() => [],
		encoderState,
		() => [/* @__PURE__ */ $.structField("lastType", /* @__PURE__ */ $.basicType("uint8", "text.encType"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" }), /* @__PURE__ */ $.structField("indents", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" }), /* @__PURE__ */ $.structField("out", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 32, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" })]
	)
}

export class Encoder {
	public get encoderState(): encoderState {
		return this._fields.encoderState
	}

	public set encoderState(value: encoderState) {
		this._fields.encoderState = value
	}

	public get indent(): string {
		return this._fields.indent
	}

	public set indent(value: string) {
		this._fields.indent = value
	}

	public get delims(): Uint8Array {
		return this._fields.delims
	}

	public set delims(value: Uint8Array) {
		this._fields.delims = value
	}

	public get outputASCII(): boolean {
		return this._fields.outputASCII
	}

	public set outputASCII(value: boolean) {
		this._fields.outputASCII = value
	}

	public _fields: {
		encoderState: encoderState
		indent: string
		delims: Uint8Array
		outputASCII: boolean
	}

	constructor(init?: Partial<{encoderState?: encoderState, indent?: string, delims?: Uint8Array, outputASCII?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			encoderState: init?.encoderState ? init.encoderState.clone() : new encoderState(undefined, true),
			indent: init?.indent ?? ("" as string),
			delims: init?.delims !== undefined ? $.cloneArrayValue(init.delims, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 2)) : $.arrayValue(new Uint8Array(2)),
			outputASCII: init?.outputASCII ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Encoder {
		return new Encoder(this, true)
	}

	public __goscriptAssign(source: Encoder): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.encoderState, values.encoderState)
		target.indent = values.indent
		target.delims = $.assignFieldValue(target.delims, values.delims, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 2))
		target.outputASCII = values.outputASCII
	}

	public Bytes(): $.Slice<number> {
		const e: Encoder | $.VarRef<Encoder> | null = this;
		return $.pointerValue<Encoder>(e).encoderState.out
	}

	public EndMessage(): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(8) : Encoder.prototype.prepareNext.call(e, 8));
		;(e$ as Encoder).encoderState.out = $.append((e$ as Encoder).encoderState.out, $.uint($.arrayIndex((e$ as Encoder).delims, 1), 8), $.byteSliceHint)
	}

	public Reset(es: encoderState): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		$.assignStruct($.pointerValue<Encoder>(e).encoderState, es)
	}

	public Snapshot(): encoderState {
		const e: Encoder | $.VarRef<Encoder> | null = this;
		return ($.pointerValue<Encoder>(e).encoderState).clone()
	}

	public StartMessage(): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(4) : Encoder.prototype.prepareNext.call(e, 4));
		;(e$ as Encoder).encoderState.out = $.append((e$ as Encoder).encoderState.out, $.uint($.arrayIndex((e$ as Encoder).delims, 0), 8), $.byteSliceHint)
	}

	public WriteBool(b: boolean): void {
		const e: Encoder | $.VarRef<Encoder> | null = this;
		if (b) {
			void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).WriteLiteral("true") : Encoder.prototype.WriteLiteral.call(e, "true"))
		} else {
			void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).WriteLiteral("false") : Encoder.prototype.WriteLiteral.call(e, "false"))
		}
	}

	public WriteFloat(n: number, bitSize: number): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(2) : Encoder.prototype.prepareNext.call(e, 2));
		;(e$ as Encoder).encoderState.out = appendFloat((e$ as Encoder).encoderState.out, n, bitSize)
	}

	public WriteInt(n: bigint): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(2) : Encoder.prototype.prepareNext.call(e, 2));
		;(e$ as Encoder).encoderState.out = strconv.AppendInt((e$ as Encoder).encoderState.out, n, 10)
	}

	public WriteLiteral(s: string): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(2) : Encoder.prototype.prepareNext.call(e, 2));
		;(e$ as Encoder).encoderState.out = $.appendSlice((e$ as Encoder).encoderState.out, $.stringToBytes(s), $.byteSliceHint)
	}

	public WriteName(s: string): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(1) : Encoder.prototype.prepareNext.call(e, 1));
		;(e$ as Encoder).encoderState.out = $.appendSlice((e$ as Encoder).encoderState.out, $.stringToBytes(s), $.byteSliceHint);
		;(e$ as Encoder).encoderState.out = $.append((e$ as Encoder).encoderState.out, $.uint(58, 8), $.byteSliceHint)
	}

	public WriteString(s: string): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(2) : Encoder.prototype.prepareNext.call(e, 2));
		;(e$ as Encoder).encoderState.out = appendString((e$ as Encoder).encoderState.out, s, (e$ as Encoder).outputASCII)
	}

	public WriteUint(n: bigint): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		void (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Encoder).prepareNext(2) : Encoder.prototype.prepareNext.call(e, 2));
		;(e$ as Encoder).encoderState.out = strconv.AppendUint((e$ as Encoder).encoderState.out, n, 10)
	}

	public prepareNext(next: encType): void {
		let e: Encoder | $.VarRef<Encoder> | null = this;
		using __defer = new $.DisposableStack()
		const e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
		__defer.defer(() => { ((): void => {
			;(e$ as Encoder).encoderState.lastType = next
		})() })

		// Single line.
		if ($.stringLen((e$ as Encoder).indent) == 0) {
			// Add space after each field before the next one.
			if (($.uint(((e$ as Encoder).encoderState.lastType & (2 | 8)), 8) != 0) && (next == 1)) {
				;(e$ as Encoder).encoderState.out = $.append((e$ as Encoder).encoderState.out, $.uint(32, 8), $.byteSliceHint)
				// Add a random extra space to make output unstable.
				if (detrand.Bool()) {
					;(e$ as Encoder).encoderState.out = $.append((e$ as Encoder).encoderState.out, $.uint(32, 8), $.byteSliceHint)
				}
			}
			return
		}

		// Multi-line.
		switch ((true as boolean)) {
			case (e$ as Encoder).encoderState.lastType == 1:
			{
				;(e$ as Encoder).encoderState.out = $.append((e$ as Encoder).encoderState.out, $.uint(32, 8), $.byteSliceHint)
				// Add a random extra space after name: to make output unstable.
				if (detrand.Bool()) {
					;(e$ as Encoder).encoderState.out = $.append((e$ as Encoder).encoderState.out, $.uint(32, 8), $.byteSliceHint)
				}
				break
			}
			case ((e$ as Encoder).encoderState.lastType == 4) && (next != 8):
			{
				;(e$ as Encoder).encoderState.indents = $.appendSlice((e$ as Encoder).encoderState.indents, $.stringToBytes((e$ as Encoder).indent), $.byteSliceHint);
				;(e$ as Encoder).encoderState.out = $.append((e$ as Encoder).encoderState.out, $.uint(10, 8), $.byteSliceHint);
				;(e$ as Encoder).encoderState.out = $.appendSlice((e$ as Encoder).encoderState.out, (e$ as Encoder).encoderState.indents, $.byteSliceHint)
				break
			}
			case $.uint(((e$ as Encoder).encoderState.lastType & (2 | 8)), 8) != 0:
			{
				if (next == 8) {
					;(e$ as Encoder).encoderState.indents = $.goSlice((e$ as Encoder).encoderState.indents, undefined, $.sliceLen((e$ as Encoder).encoderState.indents) - $.stringLen((e$ as Encoder).indent))
				}
				;(e$ as Encoder).encoderState.out = $.append((e$ as Encoder).encoderState.out, $.uint(10, 8), $.byteSliceHint);
				;(e$ as Encoder).encoderState.out = $.appendSlice((e$ as Encoder).encoderState.out, (e$ as Encoder).encoderState.indents, $.byteSliceHint)
				break
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"text.Encoder",
		() => new Encoder(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("EndMessage", [], [], true), $.methodSignature("Reset", [["es", "text.encoderState"]], [], true), $.methodSignature("Snapshot", [], ["text.encoderState"], true), $.methodSignature("StartMessage", [], [], true), $.methodSignature("WriteBool", [["b", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("WriteFloat", [["n", /* @__PURE__ */ $.basicType("float64")], ["bitSize", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("WriteInt", [["n", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("WriteLiteral", [["s", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("WriteName", [["s", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("WriteUint", [["n", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("prepareNext", [["next", /* @__PURE__ */ $.basicType("uint8", "text.encType")]], [], true)],
		Encoder,
		() => [/* @__PURE__ */ $.structField("encoderState", "text.encoderState", [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text", anonymous: true }), /* @__PURE__ */ $.structField("indent", /* @__PURE__ */ $.basicType("string"), [1], 56, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" }), /* @__PURE__ */ $.structField("delims", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 2), [2], 72, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" }), /* @__PURE__ */ $.structField("outputASCII", /* @__PURE__ */ $.basicType("bool"), [3], 74, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" })]
	)
}

export const name: encType = 1

export const scalar: encType = 2

export const messageOpen: encType = 4

export const messageClose: encType = 8

export async function NewEncoder(buf: $.Slice<number>, indent: string, delims: Uint8Array, outputASCII: boolean): globalThis.Promise<[Encoder | $.VarRef<Encoder> | null, $.GoError]> {
	let e: Encoder | $.VarRef<Encoder> | null = new Encoder({encoderState: new encoderState({out: buf}, true)})
	let e$: Encoder = e == null ? $.pointerTarget<Encoder>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<Encoder>(e)
	if ($.stringLen(indent) > 0) {
		if (!$.stringEqual(strings.Trim(indent, " \t"), "")) {
			return [null, await errors.New("indent may only be composed of space and tab characters", null)]
		}
		;(e$ as Encoder).indent = indent
	}
	switch (delims) {
		case $.arrayValue(new Uint8Array([0, 0])):
		{
			;(e$ as Encoder).delims = $.arrayValue(new Uint8Array([123, 125]))
			break
		}
		case $.arrayValue(new Uint8Array([123, 125])):
		case $.arrayValue(new Uint8Array([60, 62])):
		{
			;(e$ as Encoder).delims = $.cloneArrayValue(delims, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 2))
			break
		}
		default:
		{
			return [null, await errors.New("delimiters may only be \"{}\" or \"<>\"", null)]
			break
		}
	}
	;(e$ as Encoder).outputASCII = outputASCII

	return [e, null]
}

export function appendString(out: $.Slice<number>, _in: string, outputASCII: boolean): $.Slice<number> {
	out = $.append(out, $.uint(34, 8), $.byteSliceHint)
	let i: number = indexNeedEscapeInString(_in)
	let __goscriptAssign0_0: string = $.sliceStringOrBytes(_in, i, undefined)
	let __goscriptAssign0_1: $.Slice<number> = $.appendSlice(out, $.stringToBytes($.sliceStringOrBytes(_in, undefined, i)), $.byteSliceHint)
	_in = __goscriptAssign0_0
	out = __goscriptAssign0_1
	while ($.stringLen(_in) > 0) {
		{
			let [r, n] = utf8.DecodeRuneInString(_in)
			switch ((true as boolean)) {
				case (r == 65533) && (n == 1):
				{
					r = $.int($.indexString(_in, 0), 32)
				}
				case (((r < 32) || (r == 34)) || (r == 92)) || (r == 0x7f):
				{
					out = $.append(out, $.uint(92, 8), $.byteSliceHint)
					switch (r) {
						case 34:
						case 92:
						{
							out = $.append(out, $.uint($.uint(r, 8), 8), $.byteSliceHint)
							break
						}
						case 10:
						{
							out = $.append(out, $.uint(110, 8), $.byteSliceHint)
							break
						}
						case 13:
						{
							out = $.append(out, $.uint(114, 8), $.byteSliceHint)
							break
						}
						case 9:
						{
							out = $.append(out, $.uint(116, 8), $.byteSliceHint)
							break
						}
						default:
						{
							out = $.append(out, $.uint(120, 8), $.byteSliceHint)
							out = $.appendSlice(out, $.stringToBytes($.sliceStringOrBytes("00", 1 + (globalThis.Math.trunc((bits.Len32($.uint(r, 32)) - 1) / 4)), undefined)), $.byteSliceHint)
							out = strconv.AppendUint(out, $.uint64(r), 16)
							break
						}
					}
					_in = $.sliceStringOrBytes(_in, n, undefined)
					break
				}
				case (r >= 128) && (outputASCII || (r <= 0x009f)):
				{
					out = $.append(out, $.uint(92, 8), $.byteSliceHint)
					if (r <= 65535) {
						out = $.append(out, $.uint(117, 8), $.byteSliceHint)
						out = $.appendSlice(out, $.stringToBytes($.sliceStringOrBytes("0000", 1 + (globalThis.Math.trunc((bits.Len32($.uint(r, 32)) - 1) / 4)), undefined)), $.byteSliceHint)
						out = strconv.AppendUint(out, $.uint64(r), 16)
					} else {
						out = $.append(out, $.uint(85, 8), $.byteSliceHint)
						out = $.appendSlice(out, $.stringToBytes($.sliceStringOrBytes("00000000", 1 + (globalThis.Math.trunc((bits.Len32($.uint(r, 32)) - 1) / 4)), undefined)), $.byteSliceHint)
						out = strconv.AppendUint(out, $.uint64(r), 16)
					}
					_in = $.sliceStringOrBytes(_in, n, undefined)
					break
				}
				default:
				{
					let __goscriptShadow0: number = indexNeedEscapeInString($.sliceStringOrBytes(_in, n, undefined))
					let __goscriptAssign1_0: string = $.sliceStringOrBytes(_in, n + __goscriptShadow0, undefined)
					let __goscriptAssign1_1: $.Slice<number> = $.appendSlice(out, $.stringToBytes($.sliceStringOrBytes(_in, undefined, n + __goscriptShadow0)), $.byteSliceHint)
					_in = __goscriptAssign1_0
					out = __goscriptAssign1_1
					break
				}
			}
		}
	}
	out = $.append(out, $.uint(34, 8), $.byteSliceHint)
	return out
}

export function indexNeedEscapeInString(s: string): number {
	for (let i = 0; i < $.stringLen(s); i++) {
		{
			let c = $.indexString(s, i)
			if (((((c < 32) || (c == 34)) || (c == 39)) || (c == 92)) || (c >= 0x7f)) {
				return i
			}
		}
	}
	return $.stringLen(s)
}

export function appendFloat(out: $.Slice<number>, n: number, bitSize: number): $.Slice<number> {
	switch ((true as boolean)) {
		case math.IsNaN(n):
		{
			return $.appendSlice(out, $.stringToBytes("nan"), $.byteSliceHint)
			break
		}
		case math.IsInf(n, 1):
		{
			return $.appendSlice(out, $.stringToBytes("inf"), $.byteSliceHint)
			break
		}
		case math.IsInf(n, -1):
		{
			return $.appendSlice(out, $.stringToBytes("-inf"), $.byteSliceHint)
			break
		}
		default:
		{
			return strconv.AppendFloat(out, n, 103, -1, bitSize)
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function AppendString(b: $.Slice<number>, s: string): $.Slice<number> {
	return appendString(b, s, false)
}
