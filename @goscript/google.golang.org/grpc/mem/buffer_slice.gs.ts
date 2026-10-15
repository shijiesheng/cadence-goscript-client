// Generated file based on buffer_slice.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_buffer_pool from "./buffer_pool.gs.ts"

import * as __goscript_buffers from "./buffers.gs.ts"
import "@goscript/io/index.js"
import "./buffer_pool.gs.ts"
import "./buffers.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/mem", ["mem.BufferSlice", "mem.Reader", "mem.sliceReader", "mem.writer"])

export type BufferSlice = $.Slice<__goscript_buffers.Buffer | null>

$.registerNamedType("mem.BufferSlice", /* @__PURE__ */ $.sliceType("mem.Buffer"));

$.registerNamedValueType(
	"mem.BufferSlice",
	{CopyTo: (receiver: any, ...args: any[]) => (BufferSlice_CopyTo as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Free: (receiver: any, ...args: any[]) => (BufferSlice_Free as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (BufferSlice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Materialize: (receiver: any, ...args: any[]) => (BufferSlice_Materialize as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MaterializeToBuffer: (receiver: any, ...args: any[]) => (BufferSlice_MaterializeToBuffer as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Reader: (receiver: any, ...args: any[]) => (BufferSlice_Reader as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ref: (receiver: any, ...args: any[]) => (BufferSlice_Ref as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("CopyTo", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Free"), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Materialize", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("MaterializeToBuffer", [["pool", "mem.BufferPool"]], ["mem.Buffer"]), $.methodSignature("Reader", [], ["mem.Reader"]), $.methodSignature("Ref")]
);

$.registerNamedValueType(
	"*mem.BufferSlice",
	{CopyTo: (receiver: any, ...args: any[]) => (BufferSlice_CopyTo as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Free: (receiver: any, ...args: any[]) => (BufferSlice_Free as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (BufferSlice_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Materialize: (receiver: any, ...args: any[]) => (BufferSlice_Materialize as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MaterializeToBuffer: (receiver: any, ...args: any[]) => (BufferSlice_MaterializeToBuffer as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Reader: (receiver: any, ...args: any[]) => (BufferSlice_Reader as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Ref: (receiver: any, ...args: any[]) => (BufferSlice_Ref as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("CopyTo", [["dst", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Free"), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Materialize", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("MaterializeToBuffer", [["pool", "mem.BufferPool"]], ["mem.Buffer"]), $.methodSignature("Reader", [], ["mem.Reader"]), $.methodSignature("Ref")]
);

export type Reader = {
	Close(): $.GoError | globalThis.Promise<$.GoError>
	Read(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	ReadByte(): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	Remaining(): number
}

$.registerInterfaceType(
	"mem.Reader",
	null,
	[$.methodSignature("Close", [], ["error"]), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadByte", [], [/* @__PURE__ */ $.basicType("uint8"), "error"]), $.methodSignature("Remaining", [], [/* @__PURE__ */ $.basicType("int")])]
);

export class sliceReader {
	public get data(): BufferSlice {
		return this._fields.data
	}

	public set data(value: BufferSlice) {
		this._fields.data = value
	}

	public get len(): number {
		return this._fields.len
	}

	public set len(value: number) {
		this._fields.len = value
	}

	// The index into data[0].ReadOnlyData().
	public get bufferIdx(): number {
		return this._fields.bufferIdx
	}

	public set bufferIdx(value: number) {
		this._fields.bufferIdx = value
	}

	public _fields: {
		data: BufferSlice
		len: number
		bufferIdx: number
	}

	constructor(init?: Partial<{data?: BufferSlice, len?: number, bufferIdx?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			data: init?.data ?? (null! as BufferSlice),
			len: init?.len ?? (0 as number),
			bufferIdx: init?.bufferIdx ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sliceReader {
		return new sliceReader(this, true)
	}

	public __goscriptAssign(source: sliceReader): void {
		const target = this._fields
		const values = source._fields
		target.data = values.data
		target.len = values.len
		target.bufferIdx = values.bufferIdx
	}

	public async Close(): globalThis.Promise<$.GoError> {
		let r: sliceReader | $.VarRef<sliceReader> | null = this;
		const r$: sliceReader = r == null ? $.pointerTarget<sliceReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<sliceReader>(r)
		await BufferSlice_Free((r$ as sliceReader).data);
		;(r$ as sliceReader).data = (null as BufferSlice);
		;(r$ as sliceReader).len = 0
		return null
	}

	public async Read(buf: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let r: sliceReader | $.VarRef<sliceReader> | null = this;
		let n: number = 0
		const r$: sliceReader = r == null ? $.pointerTarget<sliceReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<sliceReader>(r)
		if ((r$ as sliceReader).len == 0) {
			return [0, io.EOF]
		}

		while (($.sliceLen(buf) != 0) && ((r$ as sliceReader).len != 0)) {
			// Copy as much as possible from the first Buffer in the slice into the
			// given byte slice.
			let data: $.Slice<number> = ((__goscriptAwait = $.pointerValue<Exclude<__goscript_buffers.Buffer, null>>($.arrayIndex((r$ as sliceReader).data!, 0)).ReadOnlyData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
			let copied: number = $.copy(buf, $.goSlice(data, (r$ as sliceReader).bufferIdx, undefined));
			;(r$ as sliceReader).len = (r$ as sliceReader).len - (copied);
			;(r$ as sliceReader).bufferIdx = (r$ as sliceReader).bufferIdx + (copied)
			n = n + (copied)
			buf = $.goSlice(buf, copied, undefined)

			// If we have copied all the data from the first Buffer, free it and advance to
			// the next in the slice.
			await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as sliceReader).freeFirstBufferIfEmpty() : sliceReader.prototype.freeFirstBufferIfEmpty.call(r))
		}

		return [n, null]
	}

	public async ReadByte(): globalThis.Promise<[number, $.GoError]> {
		let r: sliceReader | $.VarRef<sliceReader> | null = this;
		const r$: sliceReader = r == null ? $.pointerTarget<sliceReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<sliceReader>(r)
		if ((r$ as sliceReader).len == 0) {
			return [0, io.EOF]
		}

		// There may be any number of empty buffers in the slice, clear them all until a
		// non-empty buffer is reached. This is guaranteed to exit since r.len is not 0.
		while (await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as sliceReader).freeFirstBufferIfEmpty() : sliceReader.prototype.freeFirstBufferIfEmpty.call(r))) {
		}

		let b = $.uint($.arrayIndex(((__goscriptAwait = $.pointerValue<Exclude<__goscript_buffers.Buffer, null>>($.arrayIndex((r$ as sliceReader).data!, 0)).ReadOnlyData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)!, (r$ as sliceReader).bufferIdx), 8);
		;(r$ as sliceReader).len--;
		;(r$ as sliceReader).bufferIdx++
		// Free the first buffer in the slice if the last byte was read
		await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as sliceReader).freeFirstBufferIfEmpty() : sliceReader.prototype.freeFirstBufferIfEmpty.call(r))
		return [b, null]
	}

	public Remaining(): number {
		const r: sliceReader | $.VarRef<sliceReader> | null = this;
		return $.pointerValue<sliceReader>(r).len
	}

	public async freeFirstBufferIfEmpty(): globalThis.Promise<boolean> {
		let r: sliceReader | $.VarRef<sliceReader> | null = this;
		const r$: sliceReader = r == null ? $.pointerTarget<sliceReader>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<sliceReader>(r)
		if (($.sliceLen(((r$ as sliceReader).data as BufferSlice)) == 0) || ((r$ as sliceReader).bufferIdx != $.sliceLen(((__goscriptAwait = $.pointerValue<Exclude<__goscript_buffers.Buffer, null>>($.arrayIndex((r$ as sliceReader).data!, 0)).ReadOnlyData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)))) {
			return false
		}

		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_buffers.Buffer, null>>($.arrayIndex((r$ as sliceReader).data!, 0)).Free(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(r$ as sliceReader).data = ($.goSlice((r$ as sliceReader).data, 1, undefined) as BufferSlice);
		;(r$ as sliceReader).bufferIdx = 0
		return true
	}

	static __typeInfo = $.registerStructType(
		"mem.sliceReader",
		() => new sliceReader(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Read", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["_", "error"]], true), $.methodSignature("ReadByte", [], [/* @__PURE__ */ $.basicType("uint8"), "error"], true), $.methodSignature("Remaining", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("freeFirstBufferIfEmpty", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		sliceReader,
		() => [/* @__PURE__ */ $.structField("data", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice"), [0], 0, false, { pkgPath: "google.golang.org/grpc/mem" }), /* @__PURE__ */ $.structField("len", /* @__PURE__ */ $.basicType("int"), [1], 24, false, { pkgPath: "google.golang.org/grpc/mem" }), /* @__PURE__ */ $.structField("bufferIdx", /* @__PURE__ */ $.basicType("int"), [2], 32, false, { pkgPath: "google.golang.org/grpc/mem" })]
	)
}

export class writer {
	public get buffers(): $.VarRef<BufferSlice> | null {
		return this._fields.buffers
	}

	public set buffers(value: $.VarRef<BufferSlice> | null) {
		this._fields.buffers = value
	}

	public get pool(): __goscript_buffer_pool.BufferPool | null {
		return this._fields.pool
	}

	public set pool(value: __goscript_buffer_pool.BufferPool | null) {
		this._fields.pool = value
	}

	public _fields: {
		buffers: $.VarRef<BufferSlice> | null
		pool: __goscript_buffer_pool.BufferPool | null
	}

	constructor(init?: Partial<{buffers?: $.VarRef<BufferSlice> | null, pool?: __goscript_buffer_pool.BufferPool | null}>, __goscriptValue?: boolean) {
		this._fields = {
			buffers: init?.buffers ?? (null! as $.VarRef<BufferSlice> | null),
			pool: init?.pool ?? (null! as __goscript_buffer_pool.BufferPool | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): writer {
		return new writer(this, true)
	}

	public __goscriptAssign(source: writer): void {
		const target = this._fields
		const values = source._fields
		target.buffers = values.buffers
		target.pool = $.assignFieldValue(target.pool, values.pool, "mem.BufferPool")
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let w: writer | $.VarRef<writer> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const w$: writer = w == null ? $.pointerTarget<writer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<writer>(w)
		let b = await __goscript_buffers.Copy(p, (w$ as writer).pool);
		;(w$ as writer).buffers!.value = ($.appendOne(($.pointerValue<BufferSlice>((w$ as writer).buffers) as BufferSlice), b, $.appendZeros.nil) as BufferSlice)
		return [(__goscriptAwait = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? (b as Exclude<__goscript_buffers.Buffer, null>) : $.pointerValue<Exclude<__goscript_buffers.Buffer, null>>(b)).Len(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null]
	}

	static __typeInfo = $.registerStructType(
		"mem.writer",
		() => new writer(),
		() => [$.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true)],
		writer,
		() => [/* @__PURE__ */ $.structField("buffers", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice")), [0], 0, false, { pkgPath: "google.golang.org/grpc/mem" }), /* @__PURE__ */ $.structField("pool", "mem.BufferPool", [1], 8, false, { pkgPath: "google.golang.org/grpc/mem" })]
	)
}

export function BufferSlice_Len(s: BufferSlice): number {
	let length: number = 0
	for (let __goscriptRangeTarget0 = s, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let b = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_buffers.Buffer | null)
		length = length + ((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? (b as Exclude<__goscript_buffers.Buffer, null>) : $.pointerValue<Exclude<__goscript_buffers.Buffer, null>>(b)).Len())
	}
	return length
}

export function BufferSlice_Ref(s: BufferSlice): void {
	for (let __goscriptRangeTarget1 = s, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let b = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_buffers.Buffer | null)
		void (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? (b as Exclude<__goscript_buffers.Buffer, null>) : $.pointerValue<Exclude<__goscript_buffers.Buffer, null>>(b)).Ref()
	}
}

export async function BufferSlice_Free(s: BufferSlice): globalThis.Promise<void> {
	for (let __goscriptRangeTarget2 = s, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let b = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_buffers.Buffer | null)
		void (__goscriptAwait = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? (b as Exclude<__goscript_buffers.Buffer, null>) : $.pointerValue<Exclude<__goscript_buffers.Buffer, null>>(b)).Free(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
}

export function BufferSlice_CopyTo(s: BufferSlice, dst: $.Slice<number>): number {
	let off = 0
	for (let __goscriptRangeTarget3 = s, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let b = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_buffers.Buffer | null)
		off = off + ($.copy($.goSlice(dst, off, undefined), (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? (b as Exclude<__goscript_buffers.Buffer, null>) : $.pointerValue<Exclude<__goscript_buffers.Buffer, null>>(b)).ReadOnlyData()))
	}
	return off
}

export function BufferSlice_Materialize(s: BufferSlice): $.Slice<number> {
	let l = BufferSlice_Len(s)
	if (l == 0) {
		return null
	}
	let out: $.Slice<number> = $.makeSlice<number>(l, undefined, "byte")
	BufferSlice_CopyTo(s, out)
	return out
}

export async function BufferSlice_MaterializeToBuffer(s: BufferSlice, pool: __goscript_buffer_pool.BufferPool | null): globalThis.Promise<__goscript_buffers.Buffer | null> {
	if ($.sliceLen((s as BufferSlice)) == 1) {
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_buffers.Buffer, null>>($.arrayIndex(s!, 0)).Ref(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return $.arrayIndex(s!, 0)
	}
	let sLen = BufferSlice_Len(s)
	if (sLen == 0) {
		return $.interfaceValue<__goscript_buffers.Buffer | null>(new __goscript_buffers.emptyBuffer(undefined, true), "mem.emptyBuffer", "mem.emptyBuffer")
	}
	let buf = ((__goscriptAwait = (pool !== null && (pool as any).__isVarRef !== true && (pool as any).__goValue === undefined ? (pool as Exclude<__goscript_buffer_pool.BufferPool, null>) : $.pointerValue<Exclude<__goscript_buffer_pool.BufferPool, null>>(pool)).Get(sLen), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<$.Slice<number>> | null)
	BufferSlice_CopyTo(s, $.pointerValue<$.Slice<number>>(buf))
	return __goscript_buffers.NewBuffer(buf, pool)
}

export function BufferSlice_Reader(s: BufferSlice): Reader | null {
	BufferSlice_Ref(s)
	return $.interfaceValue<Reader | null>((() => { const __goscriptLiteralField0 = BufferSlice_Len(s); return new sliceReader({data: (s as BufferSlice), len: __goscriptLiteralField0}) })(), "*mem.sliceReader", /* @__PURE__ */ $.pointerType("mem.sliceReader"))
}

export function NewWriter(buffers: $.VarRef<BufferSlice> | null, pool: __goscript_buffer_pool.BufferPool | null): io.Writer | null {
	return $.interfaceValue<io.Writer | null>(new writer({buffers: buffers, pool: pool}), "*mem.writer", /* @__PURE__ */ $.pointerType("mem.writer"))
}

var __goscriptAwait: any
