// Generated file based on decode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as encoding from "@goscript/encoding/index.js"

import * as errors from "@goscript/errors/index.js"

import * as saferio from "@goscript/internal/saferio/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as bits from "@goscript/math/bits/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript__type from "./type.gs.ts"

import * as __goscript_dec_helpers from "./dec_helpers.gs.ts"

import * as __goscript_decoder from "./decoder.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_error from "./error.gs.ts"
import "@goscript/encoding/index.js"
import "@goscript/errors/index.js"
import "@goscript/internal/saferio/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "./type.gs.ts"
import "./dec_helpers.gs.ts"
import "./decoder.gs.ts"
import "./encode.gs.ts"
import "./error.gs.ts"

$.registerTypePackagePath("encoding/gob", ["gob.decHelper", "gob.decoderState", "gob.decBuffer", "gob.decOp", "gob.decInstr", "gob.decEngine", "gob.emptyStruct"])

export type decHelper = ((state: decoderState | $.VarRef<decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError) => boolean | globalThis.Promise<boolean>) | null

export type decOp = ((i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, v: reflect.Value) => void) | null

export class decoderState {
	public get dec(): __goscript_decoder.Decoder | $.VarRef<__goscript_decoder.Decoder> | null {
		return this._fields.dec
	}

	public set dec(value: __goscript_decoder.Decoder | $.VarRef<__goscript_decoder.Decoder> | null) {
		this._fields.dec = value
	}

	// The buffer is stored with an extra indirection because it may be replaced
	// if we load a type during decode (when reading an interface value).
	public get b(): decBuffer | $.VarRef<decBuffer> | null {
		return this._fields.b
	}

	public set b(value: decBuffer | $.VarRef<decBuffer> | null) {
		this._fields.b = value
	}

	public get fieldnum(): number {
		return this._fields.fieldnum
	}

	public set fieldnum(value: number) {
		this._fields.fieldnum = value
	}

	public get next(): decoderState | $.VarRef<decoderState> | null {
		return this._fields.next
	}

	public set next(value: decoderState | $.VarRef<decoderState> | null) {
		this._fields.next = value
	}

	public _fields: {
		dec: __goscript_decoder.Decoder | $.VarRef<__goscript_decoder.Decoder> | null
		b: decBuffer | $.VarRef<decBuffer> | null
		fieldnum: number
		next: decoderState | $.VarRef<decoderState> | null
	}

	constructor(init?: Partial<{dec?: __goscript_decoder.Decoder | $.VarRef<__goscript_decoder.Decoder> | null, b?: decBuffer | $.VarRef<decBuffer> | null, fieldnum?: number, next?: decoderState | $.VarRef<decoderState> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			dec: init?.dec ?? (null! as __goscript_decoder.Decoder | $.VarRef<__goscript_decoder.Decoder> | null),
			b: init?.b ?? (null! as decBuffer | $.VarRef<decBuffer> | null),
			fieldnum: init?.fieldnum ?? (0 as number),
			next: init?.next ?? (null! as decoderState | $.VarRef<decoderState> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decoderState {
		return new decoderState(this, true)
	}

	public __goscriptAssign(source: decoderState): void {
		const target = this._fields
		const values = source._fields
		target.dec = values.dec
		target.b = values.b
		target.fieldnum = values.fieldnum
		target.next = values.next
	}

	public decodeInt(): bigint {
		const state: decoderState | $.VarRef<decoderState> | null = this;
		let x = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeUint() : decoderState.prototype.decodeUint.call(state))
		if (($.uint64And(x, 1n)) != 0n) {
			return $.int64Xor($.int64($.uint64Shr(x, 1n)), -1n)
		}
		return $.int64($.uint64Shr(x, 1n))
	}

	public decodeUint(): bigint {
		const state: decoderState | $.VarRef<decoderState> | null = this;
		let x: bigint = 0n
		const state$: decoderState = state == null ? $.pointerTarget<decoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<decoderState>(state)
		let __goscriptTuple0: any = decBuffer.prototype.ReadByte.call((state$ as decoderState).b)
		let b = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			__goscript_error.error_(err)
		}
		if (b <= 0x7f) {
			return $.uint64(b)
		}
		let n = -$.int($.int(b, 8))
		if (n > 8) {
			__goscript_error.error_(errBadUint)
		}
		let buf: $.Slice<number> = decBuffer.prototype.Bytes.call((state$ as decoderState).b)
		if ($.sliceLen(buf) < n) {
			__goscript_error.errorf("invalid uint data length %d: exceeds input size %d", $.arrayToSlice<any>([$.basicInterfaceValue(n, "int"), $.basicInterfaceValue($.sliceLen(buf), "int")]))
		}
		// Don't need to check error; it's safe to loop regardless.
		// Could check that the high byte is zero but it's not worth it.
		for (let __goscriptRangeTarget0 = $.goSlice(buf, 0, n), __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let b = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
			x = $.uint64Or(($.uint64Shl(x, 8n)), $.uint64(b))
		}
		decBuffer.prototype.Drop.call((state$ as decoderState).b, n)
		return x
	}

	public getLength(): [number, boolean] {
		const state: decoderState | $.VarRef<decoderState> | null = this;
		let n = $.int((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeUint() : decoderState.prototype.decodeUint.call(state)))
		if (((n < 0) || (decBuffer.prototype.Len.call($.pointerValue<decoderState>(state).b) < n)) || (8589934592 <= n)) {
			return [0, false]
		}
		return [n, true]
	}

	static __typeInfo = $.registerStructType(
		"gob.decoderState",
		() => new decoderState(),
		() => [$.methodSignature("decodeInt", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("decodeUint", [], [["x", /* @__PURE__ */ $.basicType("uint64")]], true), $.methodSignature("getLength", [], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("bool")], true)],
		decoderState,
		() => [/* @__PURE__ */ $.structField("dec", /* @__PURE__ */ $.pointerType("gob.Decoder"), [0], 0, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("b", /* @__PURE__ */ $.pointerType("gob.decBuffer"), [1], 8, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("fieldnum", /* @__PURE__ */ $.basicType("int"), [2], 16, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("next", /* @__PURE__ */ $.pointerType("gob.decoderState"), [3], 24, false, { pkgPath: "encoding/gob" })]
	)
}

export class decBuffer {
	public get data(): $.Slice<number> {
		return this._fields.data
	}

	public set data(value: $.Slice<number>) {
		this._fields.data = value
	}

	public get offset(): number {
		return this._fields.offset
	}

	public set offset(value: number) {
		this._fields.offset = value
	}

	public _fields: {
		data: $.Slice<number>
		offset: number
	}

	constructor(init?: Partial<{data?: $.Slice<number>, offset?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			data: init?.data ?? (null! as $.Slice<number>),
			offset: init?.offset ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decBuffer {
		return new decBuffer(this, true)
	}

	public __goscriptAssign(source: decBuffer): void {
		const target = this._fields
		const values = source._fields
		target.data = values.data
		target.offset = values.offset
	}

	public Bytes(): $.Slice<number> {
		const d: decBuffer | $.VarRef<decBuffer> | null = this;
		const d$: decBuffer = d == null ? $.pointerTarget<decBuffer>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decBuffer>(d)
		return $.goSlice((d$ as decBuffer).data, (d$ as decBuffer).offset, undefined)
	}

	public Drop(n: number): void {
		let d: decBuffer | $.VarRef<decBuffer> | null = this;
		const d$: decBuffer = d == null ? $.pointerTarget<decBuffer>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decBuffer>(d)
		if (n > (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as decBuffer).Len() : decBuffer.prototype.Len.call(d))) {
			$.panic("drop")
		}
		;(d$ as decBuffer).offset = (d$ as decBuffer).offset + (n)
	}

	public Len(): number {
		const d: decBuffer | $.VarRef<decBuffer> | null = this;
		const d$: decBuffer = d == null ? $.pointerTarget<decBuffer>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decBuffer>(d)
		return $.sliceLen((d$ as decBuffer).data) - (d$ as decBuffer).offset
	}

	public Read(p: $.Slice<number>): [number, $.GoError] {
		let d: decBuffer | $.VarRef<decBuffer> | null = this;
		const d$: decBuffer = d == null ? $.pointerTarget<decBuffer>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decBuffer>(d)
		let n = $.copy(p, $.goSlice((d$ as decBuffer).data, (d$ as decBuffer).offset, undefined))
		if ((n == 0) && ($.sliceLen(p) != 0)) {
			return [0, io.EOF]
		}
		;(d$ as decBuffer).offset = (d$ as decBuffer).offset + (n)
		return [n, null]
	}

	public ReadByte(): [number, $.GoError] {
		let d: decBuffer | $.VarRef<decBuffer> | null = this;
		const d$: decBuffer = d == null ? $.pointerTarget<decBuffer>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decBuffer>(d)
		if ((d$ as decBuffer).offset >= $.sliceLen((d$ as decBuffer).data)) {
			return [0, io.EOF]
		}
		let c = $.arrayIndex((d$ as decBuffer).data!, (d$ as decBuffer).offset);
		;(d$ as decBuffer).offset++
		return [c, null]
	}

	public Reset(): void {
		let d: decBuffer | $.VarRef<decBuffer> | null = this;
		const d$: decBuffer = d == null ? $.pointerTarget<decBuffer>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decBuffer>(d);
		;(d$ as decBuffer).data = $.goSlice((d$ as decBuffer).data, 0, 0);
		;(d$ as decBuffer).offset = 0
	}

	public SetBytes(data: $.Slice<number>): void {
		let d: decBuffer | $.VarRef<decBuffer> | null = this;
		const d$: decBuffer = d == null ? $.pointerTarget<decBuffer>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<decBuffer>(d);
		;(d$ as decBuffer).data = data;
		;(d$ as decBuffer).offset = 0
	}

	static __typeInfo = $.registerStructType(
		"gob.decBuffer",
		() => new decBuffer(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Drop", [["n", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ReadByte", [], [/* @__PURE__ */ $.basicType("uint8"), "error"], true), $.methodSignature("Reset", [], [], true), $.methodSignature("SetBytes", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true)],
		decBuffer,
		() => [/* @__PURE__ */ $.structField("data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("offset", /* @__PURE__ */ $.basicType("int"), [1], 24, false, { pkgPath: "encoding/gob" })]
	)
}

export class decInstr {
	public get op(): ((i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, v: reflect.Value) => void) | null {
		return this._fields.op
	}

	public set op(value: ((i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, v: reflect.Value) => void) | null) {
		this._fields.op = value
	}

	public get field(): number {
		return this._fields.field
	}

	public set field(value: number) {
		this._fields.field = value
	}

	public get index(): $.Slice<number> {
		return this._fields.index
	}

	public set index(value: $.Slice<number>) {
		this._fields.index = value
	}

	public get ovfl(): $.GoError {
		return this._fields.ovfl
	}

	public set ovfl(value: $.GoError) {
		this._fields.ovfl = value
	}

	public _fields: {
		op: ((i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, v: reflect.Value) => void) | null
		field: number
		index: $.Slice<number>
		ovfl: $.GoError
	}

	constructor(init?: Partial<{op?: ((i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, v: reflect.Value) => void) | null, field?: number, index?: $.Slice<number>, ovfl?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			op: init?.op ?? (null! as ((i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, v: reflect.Value) => void) | null),
			field: init?.field ?? (0 as number),
			index: init?.index ?? (null! as $.Slice<number>),
			ovfl: init?.ovfl ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decInstr {
		return new decInstr(this, true)
	}

	public __goscriptAssign(source: decInstr): void {
		const target = this._fields
		const values = source._fields
		target.op = values.op
		target.field = values.field
		target.index = values.index
		target.ovfl = $.assignFieldValue(target.ovfl, values.ovfl, "error")
	}

	static __typeInfo = $.registerStructType(
		"gob.decInstr",
		() => new decInstr(),
		() => [],
		decInstr,
		() => [/* @__PURE__ */ $.structField("op", ({ kind: $.TypeKind.Function, name: "gob.decOp", params: [/* @__PURE__ */ $.pointerType("gob.decInstr"), /* @__PURE__ */ $.pointerType("gob.decoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("field", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("index", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [2], 16, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("ovfl", "error", [3], 40, false, { pkgPath: "encoding/gob" })]
	)
}

export class decEngine {
	public get instr(): $.Slice<decInstr> {
		return this._fields.instr
	}

	public set instr(value: $.Slice<decInstr>) {
		this._fields.instr = value
	}

	public get numInstr(): number {
		return this._fields.numInstr
	}

	public set numInstr(value: number) {
		this._fields.numInstr = value
	}

	public _fields: {
		instr: $.Slice<decInstr>
		numInstr: number
	}

	constructor(init?: Partial<{instr?: $.Slice<decInstr>, numInstr?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			instr: init?.instr ?? (null! as $.Slice<decInstr>),
			numInstr: init?.numInstr ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decEngine {
		return new decEngine(this, true)
	}

	public __goscriptAssign(source: decEngine): void {
		const target = this._fields
		const values = source._fields
		target.instr = values.instr
		target.numInstr = values.numInstr
	}

	static __typeInfo = $.registerStructType(
		"gob.decEngine",
		() => new decEngine(),
		() => [],
		decEngine,
		() => [/* @__PURE__ */ $.structField("instr", /* @__PURE__ */ $.sliceType("gob.decInstr"), [0], 0, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("numInstr", /* @__PURE__ */ $.basicType("int"), [1], 24, false, { pkgPath: "encoding/gob" })]
	)
}

export class emptyStruct {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): emptyStruct {
		return new emptyStruct(this, true)
	}

	public __goscriptAssign(source: emptyStruct): void {
	}

	static __typeInfo = $.registerStructType(
		"gob.emptyStruct",
		() => new emptyStruct(),
		() => [],
		emptyStruct,
		() => []
	)
}

export const intBits: number = 64

export const uintptrBits: number = 64

export let errBadUint: $.GoError = errors.New("gob: encoded unsigned integer out of range")

export function __goscript_set_errBadUint(__goscriptValue: $.GoError): void {
	errBadUint = __goscriptValue
}

export let errBadType: $.GoError = errors.New("gob: unknown type id or corrupted data")

export function __goscript_set_errBadType(__goscriptValue: $.GoError): void {
	errBadType = __goscriptValue
}

export let errRange: $.GoError = errors.New("gob: bad data: field numbers out of bounds")

export function __goscript_set_errRange(__goscriptValue: $.GoError): void {
	errRange = __goscriptValue
}

export function overflow(name: string): $.GoError {
	return errors.New($.concatString(($.concatString("value for \"", name)), "\" out of range"))
}

export async function decodeUintReader(r: io.Reader | null, buf: $.Slice<number>): globalThis.Promise<[bigint, number, $.GoError]> {
	let x: bigint = 0n
	let width: number = 0
	let err: $.GoError = null! as $.GoError
	width = 1
	let __goscriptTuple1: any = await io.ReadFull($.pointerValueOrNil(r)!, $.goSlice(buf, 0, width))
	let n = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (n == 0) {
		return [x, width, err]
	}
	let b = $.arrayIndex(buf!, 0)
	if (b <= 0x7f) {
		return [$.uint64(b), width, null]
	}
	n = -$.int($.int(b, 8))
	if (n > 8) {
		err = errBadUint
		return [x, width, err]
	}
	let __goscriptTuple2: any = await io.ReadFull($.pointerValueOrNil(r)!, $.goSlice(buf, 0, n))
	width = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	if (err != null) {
		if ($.comparableEqual(err, io.EOF)) {
			err = io.ErrUnexpectedEOF
		}
		return [x, width, err]
	}
	// Could check that the high byte is zero but it's not worth it.
	for (let __goscriptRangeTarget1 = $.goSlice(buf, 0, width), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let b = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number), 8)
		x = $.uint64Or(($.uint64Shl(x, 8n)), $.uint64(b))
	}
	width++
	return [x, width, err]
}

export function ignoreUint(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, v: reflect.Value): void {
	void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeUint() : decoderState.prototype.decodeUint.call(state))
}

export function ignoreTwoUints(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, v: reflect.Value): void {
	void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeUint() : decoderState.prototype.decodeUint.call(state))
	void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeUint() : decoderState.prototype.decodeUint.call(state))
}

export async function decAlloc(v: reflect.Value): globalThis.Promise<reflect.Value> {
	while ($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) {
		if ($.markAsStructValue($.cloneStructValue(v)).IsNil()) {
			$.markAsStructValue($.cloneStructValue(v)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
		}
		v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Elem())
	}
	return $.markAsStructValue($.cloneStructValue(v))
}

export function decBool(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, value: reflect.Value): void {
	$.markAsStructValue($.cloneStructValue(value)).SetBool((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeUint() : decoderState.prototype.decodeUint.call(state)) != 0n)
}

export function decInt8(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, value: reflect.Value): void {
	let v = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeInt() : decoderState.prototype.decodeInt.call(state))
	if ((v < -128n) || (127n < v)) {
		__goscript_error.error_($.pointerValue<decInstr>(i).ovfl)
	}
	$.markAsStructValue($.cloneStructValue(value)).SetInt(v)
}

export function decUint8(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, value: reflect.Value): void {
	let v = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeUint() : decoderState.prototype.decodeUint.call(state))
	if (255n < v) {
		__goscript_error.error_($.pointerValue<decInstr>(i).ovfl)
	}
	$.markAsStructValue($.cloneStructValue(value)).SetUint(v)
}

export function decInt16(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, value: reflect.Value): void {
	let v = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeInt() : decoderState.prototype.decodeInt.call(state))
	if ((v < -32768n) || (32767n < v)) {
		__goscript_error.error_($.pointerValue<decInstr>(i).ovfl)
	}
	$.markAsStructValue($.cloneStructValue(value)).SetInt(v)
}

export function decUint16(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, value: reflect.Value): void {
	let v = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeUint() : decoderState.prototype.decodeUint.call(state))
	if (65535n < v) {
		__goscript_error.error_($.pointerValue<decInstr>(i).ovfl)
	}
	$.markAsStructValue($.cloneStructValue(value)).SetUint(v)
}

export function decInt32(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, value: reflect.Value): void {
	let v = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeInt() : decoderState.prototype.decodeInt.call(state))
	if ((v < -2147483648n) || (2147483647n < v)) {
		__goscript_error.error_($.pointerValue<decInstr>(i).ovfl)
	}
	$.markAsStructValue($.cloneStructValue(value)).SetInt(v)
}

export function decUint32(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, value: reflect.Value): void {
	let v = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeUint() : decoderState.prototype.decodeUint.call(state))
	if (4294967295n < v) {
		__goscript_error.error_($.pointerValue<decInstr>(i).ovfl)
	}
	$.markAsStructValue($.cloneStructValue(value)).SetUint(v)
}

export function decInt64(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, value: reflect.Value): void {
	let v = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeInt() : decoderState.prototype.decodeInt.call(state))
	$.markAsStructValue($.cloneStructValue(value)).SetInt(v)
}

export function decUint64(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, value: reflect.Value): void {
	let v = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeUint() : decoderState.prototype.decodeUint.call(state))
	$.markAsStructValue($.cloneStructValue(value)).SetUint(v)
}

export function float64FromBits(u: bigint): number {
	let v = bits.ReverseBytes64(u)
	return math.Float64frombits(v)
}

export function float32FromBits(u: bigint, ovfl: $.GoError): number {
	let v = float64FromBits(u)
	let av = v
	if (av < 0) {
		av = -av
	}
	// +Inf is OK in both 32- and 64-bit floats. Underflow is always OK.
	if ((math.MaxFloat32 < av) && (av <= math.MaxFloat64)) {
		__goscript_error.error_(ovfl)
	}
	return v
}

export function decFloat32(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, value: reflect.Value): void {
	$.markAsStructValue($.cloneStructValue(value)).SetFloat(float32FromBits((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeUint() : decoderState.prototype.decodeUint.call(state)), $.pointerValue<decInstr>(i).ovfl))
}

export function decFloat64(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, value: reflect.Value): void {
	$.markAsStructValue($.cloneStructValue(value)).SetFloat(float64FromBits((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeUint() : decoderState.prototype.decodeUint.call(state))))
}

export function decComplex64(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, value: reflect.Value): void {
	const i$: decInstr = i == null ? $.pointerTarget<decInstr>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<decInstr>(i)
	let real = float32FromBits((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeUint() : decoderState.prototype.decodeUint.call(state)), (i$ as decInstr).ovfl)
	let imag = float32FromBits((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeUint() : decoderState.prototype.decodeUint.call(state)), (i$ as decInstr).ovfl)
	$.markAsStructValue($.cloneStructValue(value)).SetComplex($.complex(real, imag))
}

export function decComplex128(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, value: reflect.Value): void {
	let real = float64FromBits((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeUint() : decoderState.prototype.decodeUint.call(state)))
	let imag = float64FromBits((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).decodeUint() : decoderState.prototype.decodeUint.call(state)))
	$.markAsStructValue($.cloneStructValue(value)).SetComplex($.complex(real, imag))
}

export function decUint8Slice(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, value: reflect.Value): void {
	const state$: decoderState = state == null ? $.pointerTarget<decoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<decoderState>(state)
	let [n, ok] = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).getLength() : decoderState.prototype.getLength.call(state))
	if (!ok) {
		__goscript_error.errorf("bad %s slice length: %d", $.arrayToSlice<any>([($.markAsStructValue($.cloneStructValue(value)).Type() as any), $.basicInterfaceValue(n, "int")]))
	}
	if ($.markAsStructValue($.cloneStructValue(value)).Cap() < n) {
		let safe = saferio.SliceCap(__goscriptStatic0(), $.uint64(n))
		if (safe < 0) {
			__goscript_error.errorf("%s slice too big: %d elements", $.arrayToSlice<any>([($.markAsStructValue($.cloneStructValue(value)).Type() as any), $.basicInterfaceValue(n, "int")]))
		}
		$.markAsStructValue($.cloneStructValue(value)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeSlice($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(value)).Type())!, safe, safe))))
		let ln = safe
		let __goscriptShadow0 = 0
		while (__goscriptShadow0 < n) {
			if (__goscriptShadow0 >= ln) {
				// We didn't allocate the entire slice,
				// due to using saferio.SliceCap.
				// Grow the slice for one more element.
				// The slice is full, so this should
				// bump up the capacity.
				$.markAsStructValue($.cloneStructValue(value)).Grow(1)
			}
			// Copy into s up to the capacity or n,
			// whichever is less.
			ln = $.markAsStructValue($.cloneStructValue(value)).Cap()
			if (ln > n) {
				ln = n
			}
			$.markAsStructValue($.cloneStructValue(value)).SetLen(ln)
			let sub = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(value)).Slice(__goscriptShadow0, ln)))
			{
				let [, err] = decBuffer.prototype.Read.call((state$ as decoderState).b, $.markAsStructValue($.cloneStructValue(sub)).Bytes())
				if (err != null) {
					__goscript_error.errorf("error decoding []byte at %d: %s", $.arrayToSlice<any>([$.basicInterfaceValue(__goscriptShadow0, "int"), (err as any)]))
				}
			}
			__goscriptShadow0 = ln
		}
	} else {
		$.markAsStructValue($.cloneStructValue(value)).SetLen(n)
		{
			let [, err] = decBuffer.prototype.Read.call((state$ as decoderState).b, $.markAsStructValue($.cloneStructValue(value)).Bytes())
			if (err != null) {
				__goscript_error.errorf("error decoding []byte: %s", $.arrayToSlice<any>([(err as any)]))
			}
		}
	}
}

export function decString(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, value: reflect.Value): void {
	const state$: decoderState = state == null ? $.pointerTarget<decoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<decoderState>(state)
	let [n, ok] = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).getLength() : decoderState.prototype.getLength.call(state))
	if (!ok) {
		__goscript_error.errorf("bad %s slice length: %d", $.arrayToSlice<any>([($.markAsStructValue($.cloneStructValue(value)).Type() as any), $.basicInterfaceValue(n, "int")]))
	}
	// Read the data.
	let data: $.Slice<number> = decBuffer.prototype.Bytes.call((state$ as decoderState).b)
	if ($.sliceLen(data) < n) {
		__goscript_error.errorf("invalid string length %d: exceeds input size %d", $.arrayToSlice<any>([$.basicInterfaceValue(n, "int"), $.basicInterfaceValue($.sliceLen(data), "int")]))
	}
	let s = $.bytesToString($.goSlice(data, undefined, n))
	decBuffer.prototype.Drop.call((state$ as decoderState).b, n)
	$.markAsStructValue($.cloneStructValue(value)).SetString(s)
}

export function ignoreUint8Array(i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, value: reflect.Value): void {
	const state$: decoderState = state == null ? $.pointerTarget<decoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<decoderState>(state)
	let [n, ok] = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as decoderState).getLength() : decoderState.prototype.getLength.call(state))
	if (!ok) {
		__goscript_error.errorf("slice length too large", null)
	}
	let bn = decBuffer.prototype.Len.call((state$ as decoderState).b)
	if (bn < n) {
		__goscript_error.errorf("invalid slice length %d: exceeds input size %d", $.arrayToSlice<any>([$.basicInterfaceValue(n, "int"), $.basicInterfaceValue(bn, "int")]))
	}
	decBuffer.prototype.Drop.call((state$ as decoderState).b, n)
}

export let noValue: reflect.Value = $.markAsStructValue(new reflect.Value())

export function __goscript_set_noValue(__goscriptValue: reflect.Value): void {
	$.assignStruct(noValue, __goscriptValue)
}

export async function decodeIntoValue(state: decoderState | $.VarRef<decoderState> | null, op: ((i: decInstr | $.VarRef<decInstr> | null, state: decoderState | $.VarRef<decoderState> | null, v: reflect.Value) => void) | null, isPtr: boolean, value: reflect.Value, instr: decInstr | $.VarRef<decInstr> | null): globalThis.Promise<reflect.Value> {
	let v = $.markAsStructValue($.cloneStructValue(value))
	if (isPtr) {
		v = $.assignStruct(v, await decAlloc($.markAsStructValue($.cloneStructValue(value))))
	}

	void (__goscriptAwait = op!(instr, state, $.markAsStructValue($.cloneStructValue(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return $.markAsStructValue($.cloneStructValue(value))
}

export let decOpTable: (decOp | null)[] = $.arrayValue([null, decBool, null, decInt8, decInt16, decInt32, decInt64, null, decUint8, decUint16, decUint32, decUint64, null, decFloat32, decFloat64, decComplex64, decComplex128, null, null, null, null, null, null, null, decString])

export function __goscript_set_decOpTable(__goscriptValue: (decOp | null)[]): void {
	decOpTable = __goscriptValue
}

export var decIgnoreOpMap: globalThis.Map<__goscript__type.typeId, decOp | null> | null

export function __goscript_init_decIgnoreOpMap(): void {
	if (((decIgnoreOpMap) as any) === undefined) {
		decIgnoreOpMap = $.makeMap<__goscript__type.typeId, decOp | null>([[__goscript__type.tBool, ignoreUint], [__goscript__type.tInt, ignoreUint], [__goscript__type.tUint, ignoreUint], [__goscript__type.tFloat, ignoreUint], [__goscript__type.tBytes, ignoreUint8Array], [__goscript__type.tString, ignoreUint8Array], [__goscript__type.tComplex, ignoreTwoUints]])
	}
}

export function __goscript_get_decIgnoreOpMap(): globalThis.Map<__goscript__type.typeId, decOp | null> | null {
	if (((decIgnoreOpMap) as any) === undefined) {
		__goscript_init_decIgnoreOpMap()
	}
	return decIgnoreOpMap
}

export function __goscript_set_decIgnoreOpMap(__goscriptValue: globalThis.Map<__goscript__type.typeId, decOp | null> | null): void {
	decIgnoreOpMap = __goscriptValue
}

export let maxIgnoreNestingDepth: number = 10000

export function __goscript_set_maxIgnoreNestingDepth(__goscriptValue: number): void {
	maxIgnoreNestingDepth = __goscriptValue
}

export let emptyStructType: reflect.Type | null = reflect.TypeFor(__goscriptStatic1())

export function __goscript_set_emptyStructType(__goscriptValue: reflect.Type | null): void {
	emptyStructType = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	let iop: decOp | null = null! as decOp | null
	let uop: decOp | null = null! as decOp | null
	switch ((64 as number)) {
		case 32:
		{
			iop = decInt32
			uop = decUint32
			break
		}
		case 64:
		{
			iop = decInt64
			uop = decUint64
			break
		}
		default:
		{
			$.panic("gob: unknown size of int/uint")
			break
		}
	}
	decOpTable[reflect.Int] = iop
	decOpTable[reflect.Uint] = uop

	// Finally uintptr
	switch ((64 as number)) {
		case 32:
		{
			uop = decUint32
			break
		}
		case 64:
		{
			uop = decUint64
			break
		}
		default:
		{
			$.panic("gob: unknown size of uintptr")
			break
		}
	}
	decOpTable[reflect.Uintptr] = uop
}

export function allocValue(t: reflect.Type | null): reflect.Value {
	return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(t)!))).Elem()))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("uint8"), zero: () => 0 }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "gob.emptyStruct", zero: () => new emptyStruct(undefined, true) }})
}

var __goscriptAwait: any

export { __goscriptInit0 }
