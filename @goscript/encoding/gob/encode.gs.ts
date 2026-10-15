// Generated file based on encode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as encoding from "@goscript/encoding/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as math from "@goscript/math/index.js"

import * as bits2 from "@goscript/math/bits/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as io from "@goscript/io/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript__type from "./type.gs.ts"

import * as __goscript_decoder from "./decoder.gs.ts"

import * as __goscript_enc_helpers from "./enc_helpers.gs.ts"

import * as __goscript_encoder from "./encoder.gs.ts"

import * as __goscript_error from "./error.gs.ts"
import "@goscript/encoding/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/atomic/index.js"
import "./type.gs.ts"
import "./decoder.gs.ts"
import "./enc_helpers.gs.ts"
import "./encoder.gs.ts"
import "./error.gs.ts"

$.registerTypePackagePath("encoding/gob", ["gob.encHelper", "gob.encoderState", "gob.encBuffer", "gob.encOp", "gob.encInstr", "gob.encEngine"])

export type encHelper = ((state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value) => boolean | globalThis.Promise<boolean>) | null

export type encOp = ((i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value) => void) | null

export class encoderState {
	public get enc(): __goscript_encoder.Encoder | $.VarRef<__goscript_encoder.Encoder> | null {
		return this._fields.enc
	}

	public set enc(value: __goscript_encoder.Encoder | $.VarRef<__goscript_encoder.Encoder> | null) {
		this._fields.enc = value
	}

	public get b(): encBuffer | $.VarRef<encBuffer> | null {
		return this._fields.b
	}

	public set b(value: encBuffer | $.VarRef<encBuffer> | null) {
		this._fields.b = value
	}

	public get sendZero(): boolean {
		return this._fields.sendZero
	}

	public set sendZero(value: boolean) {
		this._fields.sendZero = value
	}

	public get fieldnum(): number {
		return this._fields.fieldnum
	}

	public set fieldnum(value: number) {
		this._fields.fieldnum = value
	}

	public get buf(): Uint8Array {
		return this._fields.buf
	}

	public set buf(value: Uint8Array) {
		this._fields.buf = value
	}

	public get next(): encoderState | $.VarRef<encoderState> | null {
		return this._fields.next
	}

	public set next(value: encoderState | $.VarRef<encoderState> | null) {
		this._fields.next = value
	}

	public _fields: {
		enc: __goscript_encoder.Encoder | $.VarRef<__goscript_encoder.Encoder> | null
		b: encBuffer | $.VarRef<encBuffer> | null
		sendZero: boolean
		fieldnum: number
		buf: Uint8Array
		next: encoderState | $.VarRef<encoderState> | null
	}

	constructor(init?: Partial<{enc?: __goscript_encoder.Encoder | $.VarRef<__goscript_encoder.Encoder> | null, b?: encBuffer | $.VarRef<encBuffer> | null, sendZero?: boolean, fieldnum?: number, buf?: Uint8Array, next?: encoderState | $.VarRef<encoderState> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			enc: init?.enc ?? (null! as __goscript_encoder.Encoder | $.VarRef<__goscript_encoder.Encoder> | null),
			b: init?.b ?? (null! as encBuffer | $.VarRef<encBuffer> | null),
			sendZero: init?.sendZero ?? (false as boolean),
			fieldnum: init?.fieldnum ?? (0 as number),
			buf: init?.buf !== undefined ? $.cloneArrayValue(init.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 9)) : $.arrayValue(new Uint8Array(9)),
			next: init?.next ?? (null! as encoderState | $.VarRef<encoderState> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): encoderState {
		return new encoderState(this, true)
	}

	public __goscriptAssign(source: encoderState): void {
		const target = this._fields
		const values = source._fields
		target.enc = values.enc
		target.b = values.b
		target.sendZero = values.sendZero
		target.fieldnum = values.fieldnum
		target.buf = $.assignFieldValue(target.buf, values.buf, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 9))
		target.next = values.next
	}

	public encodeInt(i: bigint): void {
		const state: encoderState | $.VarRef<encoderState> | null = this;
		let x: bigint = 0n
		if (i < 0n) {
			x = $.uint64Or($.uint64($.int64Shl($.int64Xor(i, -1n), 1n)), 1n)
		} else {
			x = $.uint64($.int64Shl(i, 1n))
		}
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).encodeUint(x) : encoderState.prototype.encodeUint.call(state, x))
	}

	public encodeUint(x: bigint): void {
		let state: encoderState | $.VarRef<encoderState> | null = this;
		const state$: encoderState = state == null ? $.pointerTarget<encoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<encoderState>(state)
		if (x <= 127n) {
			encBuffer.prototype.writeByte.call((state$ as encoderState).b, $.uint(x, 8))
			return
		}

		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint64($.goSlice((state$ as encoderState).buf, 1, undefined), x)
		let bc = bits2.LeadingZeros64(x) >> 3;
		;(state$ as encoderState).buf[bc] = $.uint(bc - 8, 8)

		encBuffer.prototype.Write.call((state$ as encoderState).b, $.goSlice((state$ as encoderState).buf, bc, 8 + 1))
	}

	public update(instr: encInstr | $.VarRef<encInstr> | null): void {
		let state: encoderState | $.VarRef<encoderState> | null = this;
		const state$: encoderState = state == null ? $.pointerTarget<encoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<encoderState>(state)
		const instr$: encInstr = instr == null ? $.pointerTarget<encInstr>(instr) : (instr as any).__isVarRef === true ? (instr as any).value : (instr as any).__goValue === undefined ? (instr as any) : $.pointerTarget<encInstr>(instr)
		if (instr != null) {
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).encodeUint($.uint64((instr$ as encInstr).field - (state$ as encoderState).fieldnum)) : encoderState.prototype.encodeUint.call(state, $.uint64((instr$ as encInstr).field - (state$ as encoderState).fieldnum)));
			;(state$ as encoderState).fieldnum = (instr$ as encInstr).field
		}
	}

	static __typeInfo = $.registerStructType(
		"gob.encoderState",
		() => new encoderState(),
		() => [$.methodSignature("encodeInt", [["i", /* @__PURE__ */ $.basicType("int64")]], [], true), $.methodSignature("encodeUint", [["x", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("update", [["instr", /* @__PURE__ */ $.pointerType("gob.encInstr")]], [], true)],
		encoderState,
		() => [/* @__PURE__ */ $.structField("enc", /* @__PURE__ */ $.pointerType("gob.Encoder"), [0], 0, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("b", /* @__PURE__ */ $.pointerType("gob.encBuffer"), [1], 8, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("sendZero", /* @__PURE__ */ $.basicType("bool"), [2], 16, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("fieldnum", /* @__PURE__ */ $.basicType("int"), [3], 24, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 9), [4], 32, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("next", /* @__PURE__ */ $.pointerType("gob.encoderState"), [5], 48, false, { pkgPath: "encoding/gob" })]
	)
}

export class encBuffer {
	public get data(): $.Slice<number> {
		return this._fields.data
	}

	public set data(value: $.Slice<number>) {
		this._fields.data = value
	}

	public get scratch(): Uint8Array {
		return this._fields.scratch
	}

	public set scratch(value: Uint8Array) {
		this._fields.scratch = value
	}

	public _fields: {
		data: $.Slice<number>
		scratch: Uint8Array
	}

	constructor(init?: Partial<{data?: $.Slice<number>, scratch?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			data: init?.data ?? (null! as $.Slice<number>),
			scratch: init?.scratch !== undefined ? $.cloneArrayValue(init.scratch, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64)) : $.arrayValue(new Uint8Array(64))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): encBuffer {
		return new encBuffer(this, true)
	}

	public __goscriptAssign(source: encBuffer): void {
		const target = this._fields
		const values = source._fields
		target.data = values.data
		target.scratch = $.assignFieldValue(target.scratch, values.scratch, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64))
	}

	public Bytes(): $.Slice<number> {
		const e: encBuffer | $.VarRef<encBuffer> | null = this;
		return $.pointerValue<encBuffer>(e).data
	}

	public Len(): number {
		const e: encBuffer | $.VarRef<encBuffer> | null = this;
		return $.sliceLen($.pointerValue<encBuffer>(e).data)
	}

	public Reset(): void {
		let e: encBuffer | $.VarRef<encBuffer> | null = this;
		const e$: encBuffer = e == null ? $.pointerTarget<encBuffer>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encBuffer>(e)
		if ($.sliceLen((e$ as encBuffer).data) >= 8589934592) {
			;(e$ as encBuffer).data = $.goSlice((e$ as encBuffer).scratch, 0, 0)
		} else {
			;(e$ as encBuffer).data = $.goSlice((e$ as encBuffer).data, 0, 0)
		}
	}

	public Write(p: $.Slice<number>): [number, $.GoError] {
		let e: encBuffer | $.VarRef<encBuffer> | null = this;
		const e$: encBuffer = e == null ? $.pointerTarget<encBuffer>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encBuffer>(e);
		;(e$ as encBuffer).data = $.appendSlice((e$ as encBuffer).data, p, $.byteSliceHint)
		return [$.sliceLen(p), null]
	}

	public WriteString(s: string): void {
		let e: encBuffer | $.VarRef<encBuffer> | null = this;
		const e$: encBuffer = e == null ? $.pointerTarget<encBuffer>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encBuffer>(e);
		;(e$ as encBuffer).data = $.appendSlice((e$ as encBuffer).data, $.stringToBytes(s), $.byteSliceHint)
	}

	public writeByte(c: number): void {
		let e: encBuffer | $.VarRef<encBuffer> | null = this;
		const e$: encBuffer = e == null ? $.pointerTarget<encBuffer>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<encBuffer>(e);
		;(e$ as encBuffer).data = $.append((e$ as encBuffer).data, $.uint(c, 8), $.byteSliceHint)
	}

	static __typeInfo = $.registerStructType(
		"gob.encBuffer",
		() => new encBuffer(),
		() => [$.methodSignature("Bytes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("writeByte", [["c", /* @__PURE__ */ $.basicType("uint8")]], [], true)],
		encBuffer,
		() => [/* @__PURE__ */ $.structField("data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("scratch", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64), [1], 24, false, { pkgPath: "encoding/gob" })]
	)
}

export class encInstr {
	public get op(): ((i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value) => void) | null {
		return this._fields.op
	}

	public set op(value: ((i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value) => void) | null) {
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

	public get indir(): number {
		return this._fields.indir
	}

	public set indir(value: number) {
		this._fields.indir = value
	}

	public _fields: {
		op: ((i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value) => void) | null
		field: number
		index: $.Slice<number>
		indir: number
	}

	constructor(init?: Partial<{op?: ((i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value) => void) | null, field?: number, index?: $.Slice<number>, indir?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			op: init?.op ?? (null! as ((i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value) => void) | null),
			field: init?.field ?? (0 as number),
			index: init?.index ?? (null! as $.Slice<number>),
			indir: init?.indir ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): encInstr {
		return new encInstr(this, true)
	}

	public __goscriptAssign(source: encInstr): void {
		const target = this._fields
		const values = source._fields
		target.op = values.op
		target.field = values.field
		target.index = values.index
		target.indir = values.indir
	}

	static __typeInfo = $.registerStructType(
		"gob.encInstr",
		() => new encInstr(),
		() => [],
		encInstr,
		() => [/* @__PURE__ */ $.structField("op", ({ kind: $.TypeKind.Function, name: "gob.encOp", params: [/* @__PURE__ */ $.pointerType("gob.encInstr"), /* @__PURE__ */ $.pointerType("gob.encoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("field", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("index", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [2], 16, false, { pkgPath: "encoding/gob" }), /* @__PURE__ */ $.structField("indir", /* @__PURE__ */ $.basicType("int"), [3], 40, false, { pkgPath: "encoding/gob" })]
	)
}

export class encEngine {
	public get instr(): $.Slice<encInstr> {
		return this._fields.instr
	}

	public set instr(value: $.Slice<encInstr>) {
		this._fields.instr = value
	}

	public _fields: {
		instr: $.Slice<encInstr>
	}

	constructor(init?: Partial<{instr?: $.Slice<encInstr>}>, __goscriptValue?: boolean) {
		this._fields = {
			instr: init?.instr ?? (null! as $.Slice<encInstr>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): encEngine {
		return new encEngine(this, true)
	}

	public __goscriptAssign(source: encEngine): void {
		const target = this._fields
		const values = source._fields
		target.instr = values.instr
	}

	static __typeInfo = $.registerStructType(
		"gob.encEngine",
		() => new encEngine(),
		() => [],
		encEngine,
		() => [/* @__PURE__ */ $.structField("instr", /* @__PURE__ */ $.sliceType("gob.encInstr"), [0], 0, false, { pkgPath: "encoding/gob" })]
	)
}

export const uint64Size: number = 8

export const singletonField: number = 0

export let encBufferPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	let e: encBuffer | $.VarRef<encBuffer> | null = new encBuffer()
	$.pointerValue<encBuffer>(e).data = $.goSlice($.pointerValue<encBuffer>(e).scratch, 0, 0)
	return $.interfaceValue(e, "*gob.encBuffer", /* @__PURE__ */ $.pointerType("gob.encBuffer"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_encBufferPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(encBufferPool.value, __goscriptValue)
}

export function encIndirect(pv: reflect.Value, indir: number): reflect.Value {
	for (; indir > 0; indir--) {
		if ($.markAsStructValue($.cloneStructValue(pv)).IsNil()) {
			break
		}
		pv = $.assignStruct(pv, $.markAsStructValue($.cloneStructValue(pv)).Elem())
	}
	return $.markAsStructValue($.cloneStructValue(pv))
}

export function encBool(i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value): void {
	let b = $.markAsStructValue($.cloneStructValue(v)).Bool()
	if (b || $.pointerValue<encoderState>(state).sendZero) {
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).update(i) : encoderState.prototype.update.call(state, i))
		if (b) {
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).encodeUint(1n) : encoderState.prototype.encodeUint.call(state, 1n))
		} else {
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).encodeUint(0n) : encoderState.prototype.encodeUint.call(state, 0n))
		}
	}
}

export function encInt(i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value): void {
	let value = $.markAsStructValue($.cloneStructValue(v)).Int()
	if ((value != 0n) || $.pointerValue<encoderState>(state).sendZero) {
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).update(i) : encoderState.prototype.update.call(state, i))
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).encodeInt(value) : encoderState.prototype.encodeInt.call(state, value))
	}
}

export function encUint(i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value): void {
	let value = $.markAsStructValue($.cloneStructValue(v)).Uint()
	if ((value != 0n) || $.pointerValue<encoderState>(state).sendZero) {
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).update(i) : encoderState.prototype.update.call(state, i))
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).encodeUint(value) : encoderState.prototype.encodeUint.call(state, value))
	}
}

export function floatBits(f: number): bigint {
	let u = math.Float64bits(f)
	return bits2.ReverseBytes64(u)
}

export function encFloat(i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value): void {
	let f = $.markAsStructValue($.cloneStructValue(v)).Float()
	if ((f != 0) || $.pointerValue<encoderState>(state).sendZero) {
		let __goscriptShadow0 = floatBits(f)
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).update(i) : encoderState.prototype.update.call(state, i))
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).encodeUint(__goscriptShadow0) : encoderState.prototype.encodeUint.call(state, __goscriptShadow0))
	}
}

export function encComplex(i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value): void {
	let c = $.markAsStructValue($.cloneStructValue(v)).Complex()
	if ((!$.arrayEqual(c, ($.complex(0, 0)))) || $.pointerValue<encoderState>(state).sendZero) {
		let rpart = floatBits($.real(c))
		let ipart = floatBits($.imag(c))
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).update(i) : encoderState.prototype.update.call(state, i))
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).encodeUint(rpart) : encoderState.prototype.encodeUint.call(state, rpart))
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).encodeUint(ipart) : encoderState.prototype.encodeUint.call(state, ipart))
	}
}

export function encUint8Array(i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value): void {
	const state$: encoderState = state == null ? $.pointerTarget<encoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<encoderState>(state)
	let b: $.Slice<number> = $.markAsStructValue($.cloneStructValue(v)).Bytes()
	if (($.sliceLen(b) > 0) || (state$ as encoderState).sendZero) {
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).update(i) : encoderState.prototype.update.call(state, i))
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).encodeUint($.uint64($.sliceLen(b))) : encoderState.prototype.encodeUint.call(state, $.uint64($.sliceLen(b))))
		encBuffer.prototype.Write.call((state$ as encoderState).b, b)
	}
}

export function encString(i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value): void {
	const state$: encoderState = state == null ? $.pointerTarget<encoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<encoderState>(state)
	let s = $.markAsStructValue($.cloneStructValue(v)).String()
	if (($.stringLen(s) > 0) || (state$ as encoderState).sendZero) {
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).update(i) : encoderState.prototype.update.call(state, i))
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).encodeUint($.uint64($.stringLen(s))) : encoderState.prototype.encodeUint.call(state, $.uint64($.stringLen(s))))
		encBuffer.prototype.WriteString.call((state$ as encoderState).b, s)
	}
}

export function encStructTerminator(i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value): void {
	void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).encodeUint(0n) : encoderState.prototype.encodeUint.call(state, 0n))
}

export function valid(v: reflect.Value): boolean {
	switch ($.markAsStructValue($.cloneStructValue(v)).Kind()) {
		case reflect.Invalid:
		{
			return false
			break
		}
		case reflect.Pointer:
		{
			return !$.markAsStructValue($.cloneStructValue(v)).IsNil()
			break
		}
	}
	return true
}

export async function encodeReflectValue(state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value, op: ((i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value) => void) | null, indir: number): globalThis.Promise<void> {
	for (let i = 0; (i < indir) && $.markAsStructValue($.cloneStructValue(v)).IsValid(); i++) {
		v = $.assignStruct(v, reflect.Indirect($.markAsStructValue($.cloneStructValue(v))))
	}
	if (!$.markAsStructValue($.cloneStructValue(v)).IsValid()) {
		__goscript_error.errorf("encodeReflectValue: nil element", null)
	}
	void (__goscriptAwait = op!(null, state, $.markAsStructValue($.cloneStructValue(v))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export let encOpTable: (encOp | null)[] = $.arrayValue([null, encBool, encInt, encInt, encInt, encInt, encInt, encUint, encUint, encUint, encUint, encUint, encUint, encFloat, encFloat, encComplex, encComplex, null, null, null, null, null, null, null, encString])

export function __goscript_set_encOpTable(__goscriptValue: (encOp | null)[]): void {
	encOpTable = __goscriptValue
}

export async function encOpFor(rt: reflect.Type | null, inProgress: globalThis.Map<reflect.Type | null, $.VarRef<encOp | null> | null> | null, building: globalThis.Map<__goscript__type.typeInfo | $.VarRef<__goscript__type.typeInfo> | null, boolean> | null): globalThis.Promise<[$.VarRef<encOp | null> | null, number]> {
	let ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null = await __goscript__type.userType(rt)
	let ut$: __goscript__type.userTypeInfo = ut == null ? $.pointerTarget<__goscript__type.userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<__goscript__type.userTypeInfo>(ut)
	// If the type implements GobEncoder, we handle it without further processing.
	if ((ut$ as __goscript__type.userTypeInfo).externalEnc != 0) {
		return gobEncodeOpFor(ut)
	}
	// If this type is already in progress, it's a recursive type (e.g. map[string]*T).
	// Return the pointer to the op we're already building.
	{
		let opPtr: $.VarRef<encOp | null> | null = $.mapGet<reflect.Type | null, $.VarRef<encOp | null> | null, $.VarRef<encOp | null> | null>(inProgress, rt, null)[0]
		if (opPtr != null) {
			return [opPtr, (ut$ as __goscript__type.userTypeInfo).indir]
		}
	}
	let typ = (ut$ as __goscript__type.userTypeInfo).base
	let indir = (ut$ as __goscript__type.userTypeInfo).indir
	let k = (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let op: $.VarRef<encOp | null> = $.varRef(null! as encOp | null)
	if ($.int(k) < 25) {
		op.value = $.arrayIndex(encOpTable, k)
	}
	if (op.value == null) {
		$.mapSet(inProgress, rt, op)
		// Special cases
		{
			let t: reflect.Type | null = typ
			switch ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				case reflect.Slice:
				{
					if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8) {
						op.value = encUint8Array
						break
					}
					// Slices have a header; we decode it to find the underlying array.
					let __goscriptTuple0: any = await encOpFor((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), inProgress, building)
					let elemOp: $.VarRef<encOp | null> | null = __goscriptTuple0[0]
					let elemIndir = __goscriptTuple0[1]
					let helper = $.mapGet<reflect.Kind, encHelper | null, encHelper | null>(__goscript_enc_helpers.__goscript_get_encSliceHelper(), (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0]
					op.value = $.functionValue(async (i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, slice: reflect.Value): globalThis.Promise<void> => {
						if (!$.pointerValue<encoderState>(state).sendZero && ($.markAsStructValue($.cloneStructValue(slice)).Len() == 0)) {
							return
						}
						void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).update(i) : encoderState.prototype.update.call(state, i))
						await __goscript_encoder.Encoder.prototype.encodeArray.call($.pointerValue<encoderState>(state).enc, $.pointerValue<encoderState>(state).b, slice, $.pointerValue<encOp | null>(elemOp), elemIndir, $.markAsStructValue($.cloneStructValue(slice)).Len(), helper)
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.encInstr"), /* @__PURE__ */ $.pointerType("gob.encoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
					break
				}
				case reflect.Array:
				{
					let __goscriptTuple1: any = await encOpFor((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), inProgress, building)
					let elemOp: $.VarRef<encOp | null> | null = __goscriptTuple1[0]
					let elemIndir = __goscriptTuple1[1]
					let helper = $.mapGet<reflect.Kind, encHelper | null, encHelper | null>(__goscript_enc_helpers.__goscript_get_encArrayHelper(), (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)[0]
					op.value = $.functionValue(async (i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, array: reflect.Value): globalThis.Promise<void> => {
						void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).update(i) : encoderState.prototype.update.call(state, i))
						await __goscript_encoder.Encoder.prototype.encodeArray.call($.pointerValue<encoderState>(state).enc, $.pointerValue<encoderState>(state).b, array, $.pointerValue<encOp | null>(elemOp), elemIndir, $.markAsStructValue($.cloneStructValue(array)).Len(), helper)
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.encInstr"), /* @__PURE__ */ $.pointerType("gob.encoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
					break
				}
				case reflect.Map:
				{
					let __goscriptTuple2: any = await encOpFor((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), inProgress, building)
					let keyOp: $.VarRef<encOp | null> | null = __goscriptTuple2[0]
					let keyIndir = __goscriptTuple2[1]
					let __goscriptTuple3: any = await encOpFor((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), inProgress, building)
					let elemOp: $.VarRef<encOp | null> | null = __goscriptTuple3[0]
					let elemIndir = __goscriptTuple3[1]
					op.value = $.functionValue(async (i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, mv: reflect.Value): globalThis.Promise<void> => {
						// We send zero-length (but non-nil) maps because the
						// receiver might want to use the map.  (Maps don't use append.)
						if (!$.pointerValue<encoderState>(state).sendZero && $.markAsStructValue($.cloneStructValue(mv)).IsNil()) {
							return
						}
						void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).update(i) : encoderState.prototype.update.call(state, i))
						await __goscript_encoder.Encoder.prototype.encodeMap.call($.pointerValue<encoderState>(state).enc, $.pointerValue<encoderState>(state).b, mv, $.pointerValue<encOp | null>(keyOp), $.pointerValue<encOp | null>(elemOp), keyIndir, elemIndir)
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.encInstr"), /* @__PURE__ */ $.pointerType("gob.encoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
					break
				}
				case reflect.Struct:
				{
					await getEncEngine(await __goscript__type.userType(typ), building)
					let info: __goscript__type.typeInfo | $.VarRef<__goscript__type.typeInfo> | null = await __goscript__type.mustGetTypeInfo(typ)
					op.value = $.functionValue(async (i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, sv: reflect.Value): globalThis.Promise<void> => {
						void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).update(i) : encoderState.prototype.update.call(state, i))
						// indirect through info to delay evaluation for recursive structs
						let enc: encEngine | $.VarRef<encEngine> | null = ($.pointerValue<__goscript__type.typeInfo>(info).encoder.Load() as encEngine | $.VarRef<encEngine> | null)
						await __goscript_encoder.Encoder.prototype.encodeStruct.call($.pointerValue<encoderState>(state).enc, $.pointerValue<encoderState>(state).b, enc, sv)
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.encInstr"), /* @__PURE__ */ $.pointerType("gob.encoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
					break
				}
				case reflect.Interface:
				{
					op.value = $.functionValue(async (i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, iv: reflect.Value): globalThis.Promise<void> => {
						if (!$.pointerValue<encoderState>(state).sendZero && (!$.markAsStructValue($.cloneStructValue(iv)).IsValid() || $.markAsStructValue($.cloneStructValue(iv)).IsNil())) {
							return
						}
						void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).update(i) : encoderState.prototype.update.call(state, i))
						await __goscript_encoder.Encoder.prototype.encodeInterface.call($.pointerValue<encoderState>(state).enc, $.pointerValue<encoderState>(state).b, iv)
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.encInstr"), /* @__PURE__ */ $.pointerType("gob.encoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
					break
				}
			}
		}
	}
	if (op.value == null) {
		__goscript_error.errorf("can't happen: encode type %s", $.arrayToSlice<any>([(rt as any)]))
	}
	return [op, indir]
}

export async function gobEncodeOpFor(ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null): globalThis.Promise<[$.VarRef<encOp | null> | null, number]> {
	const ut$: __goscript__type.userTypeInfo = ut == null ? $.pointerTarget<__goscript__type.userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<__goscript__type.userTypeInfo>(ut)
	let rt = (ut$ as __goscript__type.userTypeInfo).user
	if ((ut$ as __goscript__type.userTypeInfo).encIndir == -1) {
		rt = reflect.PointerTo($.pointerValueOrNil(rt)!)
	} else {
		if ((ut$ as __goscript__type.userTypeInfo).encIndir > 0) {
			for (let i = 0; i < (ut$ as __goscript__type.userTypeInfo).encIndir; i = ((i + 1) << 24 >> 24)) {
				rt = (__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}
	let op: $.VarRef<encOp | null> = $.varRef(null! as encOp | null)
	op.value = $.functionValue(async (i: encInstr | $.VarRef<encInstr> | null, state: encoderState | $.VarRef<encoderState> | null, v: reflect.Value): globalThis.Promise<void> => {
		if ((ut$ as __goscript__type.userTypeInfo).encIndir == -1) {
			// Need to climb up one level to turn value into pointer.
			if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
				__goscript_error.errorf("unaddressable value of type %s", $.arrayToSlice<any>([(rt as any)]))
			}
			v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Addr())
		}
		if (!$.pointerValue<encoderState>(state).sendZero && $.markAsStructValue($.cloneStructValue(v)).IsZero()) {
			return
		}
		void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as encoderState).update(i) : encoderState.prototype.update.call(state, i))
		await __goscript_encoder.Encoder.prototype.encodeGobEncoder.call($.pointerValue<encoderState>(state).enc, $.pointerValue<encoderState>(state).b, ut, v)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("gob.encInstr"), /* @__PURE__ */ $.pointerType("gob.encoderState"), "reflect.Value"], results: [] } as $.FunctionTypeInfo))
	return [op, $.int((ut$ as __goscript__type.userTypeInfo).encIndir)]
}

export async function compileEnc(ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null, building: globalThis.Map<__goscript__type.typeInfo | $.VarRef<__goscript__type.typeInfo> | null, boolean> | null): globalThis.Promise<encEngine | $.VarRef<encEngine> | null> {
	const ut$: __goscript__type.userTypeInfo = ut == null ? $.pointerTarget<__goscript__type.userTypeInfo>(ut) : (ut as any).__isVarRef === true ? (ut as any).value : (ut as any).__goValue === undefined ? (ut as any) : $.pointerTarget<__goscript__type.userTypeInfo>(ut)
	let srt = (ut$ as __goscript__type.userTypeInfo).base
	let engine: encEngine | $.VarRef<encEngine> | null = new encEngine()
	let engine$: encEngine = engine == null ? $.pointerTarget<encEngine>(engine) : (engine as any).__isVarRef === true ? (engine as any).value : (engine as any).__goValue === undefined ? (engine as any) : $.pointerTarget<encEngine>(engine)
	let seen: globalThis.Map<reflect.Type | null, $.VarRef<encOp | null> | null> | null = $.makeMap<reflect.Type | null, $.VarRef<encOp | null> | null>()
	let rt = (ut$ as __goscript__type.userTypeInfo).base
	if ((ut$ as __goscript__type.userTypeInfo).externalEnc != 0) {
		rt = (ut$ as __goscript__type.userTypeInfo).user
	}
	if (((ut$ as __goscript__type.userTypeInfo).externalEnc == 0) && ((__goscriptAwait = (srt !== null && (srt as any).__isVarRef !== true && (srt as any).__goValue === undefined ? (srt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(srt)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 25)) {
		for (let fieldNum = 0, wireFieldNum = 0; fieldNum < (__goscriptAwait = (srt !== null && (srt as any).__isVarRef !== true && (srt as any).__goValue === undefined ? (srt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(srt)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); fieldNum++) {
			let f = $.varRef($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (srt !== null && (srt as any).__isVarRef !== true && (srt as any).__goValue === undefined ? (srt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(srt)).Field(fieldNum), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField))))
			if (!await __goscript__type.isSent(f)) {
				continue
			}
			let __goscriptTuple4: any = await encOpFor(f.value.Type, seen, building)
			let op: $.VarRef<encOp | null> | null = __goscriptTuple4[0]
			let indir = __goscriptTuple4[1];
			;(engine$ as encEngine).instr = $.appendOne((engine$ as encEngine).instr, new encInstr({op: $.pointerValue<encOp | null>(op), field: wireFieldNum, index: f.value.Index, indir: indir}, true))
			wireFieldNum++
		}
		if (((__goscriptAwait = (srt !== null && (srt as any).__isVarRef !== true && (srt as any).__goValue === undefined ? (srt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(srt)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0) && ($.sliceLen((engine$ as encEngine).instr) == 0)) {
			__goscript_error.errorf("type %s has no exported fields", $.arrayToSlice<any>([(rt as any)]))
		}
		;(engine$ as encEngine).instr = $.appendOne((engine$ as encEngine).instr, new encInstr({op: encStructTerminator, field: 0, index: null, indir: 0}, true))
	} else {
		;(engine$ as encEngine).instr = $.makeSlice<encInstr>(1, undefined, undefined, () => new encInstr(undefined, true))
		let __goscriptTuple5: any = await encOpFor(rt, seen, building)
		let op: $.VarRef<encOp | null> | null = __goscriptTuple5[0]
		let indir = __goscriptTuple5[1]
		$.assignStruct($.sliceElems((engine$ as encEngine).instr!)[$.sliceSlot((engine$ as encEngine).instr!, 0)], new encInstr({op: $.pointerValue<encOp | null>(op), field: 0, index: null, indir: indir}, true))
	}
	return engine
}

export async function getEncEngine(ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null, building: globalThis.Map<__goscript__type.typeInfo | $.VarRef<__goscript__type.typeInfo> | null, boolean> | null): globalThis.Promise<encEngine | $.VarRef<encEngine> | null> {
	let __goscriptTuple6: any = await __goscript__type.getTypeInfo(ut)
	let info: __goscript__type.typeInfo | $.VarRef<__goscript__type.typeInfo> | null = __goscriptTuple6[0]
	let err = __goscriptTuple6[1]
	if (err != null) {
		__goscript_error.error_(err)
	}
	let enc: encEngine | $.VarRef<encEngine> | null = ($.pointerValue<__goscript__type.typeInfo>(info).encoder.Load() as encEngine | $.VarRef<encEngine> | null)
	if (enc == null) {
		enc = await buildEncEngine(info, ut, building)
	}
	return enc
}

export async function buildEncEngine(info: __goscript__type.typeInfo | $.VarRef<__goscript__type.typeInfo> | null, ut: __goscript__type.userTypeInfo | $.VarRef<__goscript__type.userTypeInfo> | null, building: globalThis.Map<__goscript__type.typeInfo | $.VarRef<__goscript__type.typeInfo> | null, boolean> | null): globalThis.Promise<encEngine | $.VarRef<encEngine> | null> {
	using __defer = new $.DisposableStack()
	const info$: __goscript__type.typeInfo = info == null ? $.pointerTarget<__goscript__type.typeInfo>(info) : (info as any).__isVarRef === true ? (info as any).value : (info as any).__goValue === undefined ? (info as any) : $.pointerTarget<__goscript__type.typeInfo>(info)
	// Check for recursive types.
	if ((building != null) && $.mapGet<__goscript__type.typeInfo | $.VarRef<__goscript__type.typeInfo> | null, boolean, boolean>(building, info, false)[0]) {
		return null
	}
	await (info$ as __goscript__type.typeInfo).encInit.Lock()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((info$ as __goscript__type.typeInfo).encInit), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })
	let enc: encEngine | $.VarRef<encEngine> | null = ((info$ as __goscript__type.typeInfo).encoder.Load() as encEngine | $.VarRef<encEngine> | null)
	if (enc == null) {
		if (building == null) {
			building = $.makeMap<__goscript__type.typeInfo | $.VarRef<__goscript__type.typeInfo> | null, boolean>(undefined, /* @__PURE__ */ $.pointerType("gob.typeInfo"))
		}
		$.mapSet(building, info, true)
		enc = await compileEnc(ut, building)
		void (info$ as __goscript__type.typeInfo).encoder.Store(enc)
	}
	return enc
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "gob.encEngine", zero: () => new encEngine(undefined, true) }})
}

var __goscriptAwait: any
