// Generated file based on buffers.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_buffer_pool from "./buffer_pool.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "./buffer_pool.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/mem", ["mem.Buffer", "mem.buffer", "mem.emptyBuffer", "mem.SliceBuffer"])

export type Buffer = {
	Free(): void
	Len(): number
	ReadOnlyData(): $.Slice<number>
	Ref(): void
	read(buf: $.Slice<number>): [number, Buffer | null] | globalThis.Promise<[number, Buffer | null]>
	split(n: number): [Buffer | null, Buffer | null] | globalThis.Promise<[Buffer | null, Buffer | null]>
}

$.registerInterfaceType(
	"mem.Buffer",
	null,
	[$.methodSignature("Free"), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ReadOnlyData", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Ref"), $.methodSignature("read", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "mem.Buffer"]), $.methodSignature("split", [["n", /* @__PURE__ */ $.basicType("int")]], [["left", "mem.Buffer"], ["right", "mem.Buffer"]])]
);

export type SliceBuffer = $.Slice<number>

$.registerNamedType("mem.SliceBuffer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"mem.SliceBuffer",
	{Free: (receiver: any, ...args: any[]) => (SliceBuffer_Free as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (SliceBuffer_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ReadOnlyData: (receiver: any, ...args: any[]) => (SliceBuffer_ReadOnlyData as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ref: (receiver: any, ...args: any[]) => (SliceBuffer_Ref as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), read: (receiver: any, ...args: any[]) => (SliceBuffer_read as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), split: (receiver: any, ...args: any[]) => (SliceBuffer_split as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Free"), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ReadOnlyData", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Ref"), $.methodSignature("read", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "mem.Buffer"]), $.methodSignature("split", [["n", /* @__PURE__ */ $.basicType("int")]], [["left", "mem.Buffer"], ["right", "mem.Buffer"]])]
);

$.registerNamedValueType(
	"*mem.SliceBuffer",
	{Free: (receiver: any, ...args: any[]) => (SliceBuffer_Free as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (SliceBuffer_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ReadOnlyData: (receiver: any, ...args: any[]) => (SliceBuffer_ReadOnlyData as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Ref: (receiver: any, ...args: any[]) => (SliceBuffer_Ref as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), read: (receiver: any, ...args: any[]) => (SliceBuffer_read as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), split: (receiver: any, ...args: any[]) => (SliceBuffer_split as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Free"), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ReadOnlyData", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Ref"), $.methodSignature("read", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "mem.Buffer"]), $.methodSignature("split", [["n", /* @__PURE__ */ $.basicType("int")]], [["left", "mem.Buffer"], ["right", "mem.Buffer"]])]
);

export class buffer {
	public get origData(): $.VarRef<$.Slice<number>> | null {
		return this._fields.origData
	}

	public set origData(value: $.VarRef<$.Slice<number>> | null) {
		this._fields.origData = value
	}

	public get data(): $.Slice<number> {
		return this._fields.data
	}

	public set data(value: $.Slice<number>) {
		this._fields.data = value
	}

	public get refs(): atomic.Int32 | $.VarRef<atomic.Int32> | null {
		return this._fields.refs
	}

	public set refs(value: atomic.Int32 | $.VarRef<atomic.Int32> | null) {
		this._fields.refs = value
	}

	public get pool(): __goscript_buffer_pool.BufferPool | null {
		return this._fields.pool
	}

	public set pool(value: __goscript_buffer_pool.BufferPool | null) {
		this._fields.pool = value
	}

	public _fields: {
		origData: $.VarRef<$.Slice<number>> | null
		data: $.Slice<number>
		refs: atomic.Int32 | $.VarRef<atomic.Int32> | null
		pool: __goscript_buffer_pool.BufferPool | null
	}

	constructor(init?: Partial<{origData?: $.VarRef<$.Slice<number>> | null, data?: $.Slice<number>, refs?: atomic.Int32 | $.VarRef<atomic.Int32> | null, pool?: __goscript_buffer_pool.BufferPool | null}>, __goscriptValue?: boolean) {
		this._fields = {
			origData: init?.origData ?? (null! as $.VarRef<$.Slice<number>> | null),
			data: init?.data ?? (null! as $.Slice<number>),
			refs: init?.refs ?? (null! as atomic.Int32 | $.VarRef<atomic.Int32> | null),
			pool: init?.pool ?? (null! as __goscript_buffer_pool.BufferPool | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): buffer {
		return new buffer(this, true)
	}

	public __goscriptAssign(source: buffer): void {
		const target = this._fields
		const values = source._fields
		target.origData = values.origData
		target.data = values.data
		target.refs = values.refs
		target.pool = $.assignFieldValue(target.pool, values.pool, "mem.BufferPool")
	}

	public async Free(): globalThis.Promise<void> {
		let b: buffer | $.VarRef<buffer> | null = this;
		const b$: buffer = b == null ? $.pointerTarget<buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<buffer>(b)
		if ((b$ as buffer).refs == null) {
			$.panic("Cannot free freed buffer")
		}

		let refs = atomic.Int32.prototype.Add.call($.pointerValue<atomic.Int32>((b$ as buffer).refs), -1)
		switch ((true as boolean)) {
			case refs > 0:
			{
				return
				break
			}
			case refs == 0:
			{
				if ((b$ as buffer).pool != null) {
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_buffer_pool.BufferPool, null>>((b$ as buffer).pool).Put((b$ as buffer).origData), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}

				refObjectPool.value.Put($.interfaceValue((b$ as buffer).refs, "*atomic.Int32", /* @__PURE__ */ $.pointerType("atomic.Int32")));
				;(b$ as buffer).origData = null;
				;(b$ as buffer).data = null;
				;(b$ as buffer).refs = null;
				;(b$ as buffer).pool = null
				bufferObjectPool.value.Put($.interfaceValue(b, "*mem.buffer", /* @__PURE__ */ $.pointerType("mem.buffer")))
				break
			}
			default:
			{
				$.panic("Cannot free freed buffer")
				break
			}
		}
	}

	public Len(): number {
		const b: buffer | $.VarRef<buffer> | null = this;
		return $.sliceLen((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as buffer).ReadOnlyData() : buffer.prototype.ReadOnlyData.call(b)))
	}

	public ReadOnlyData(): $.Slice<number> {
		const b: buffer | $.VarRef<buffer> | null = this;
		const b$: buffer = b == null ? $.pointerTarget<buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<buffer>(b)
		if ((b$ as buffer).refs == null) {
			$.panic("Cannot read freed buffer")
		}
		return (b$ as buffer).data
	}

	public Ref(): void {
		const b: buffer | $.VarRef<buffer> | null = this;
		const b$: buffer = b == null ? $.pointerTarget<buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<buffer>(b)
		if ((b$ as buffer).refs == null) {
			$.panic("Cannot ref freed buffer")
		}
		atomic.Int32.prototype.Add.call($.pointerValue<atomic.Int32>((b$ as buffer).refs), 1)
	}

	public async String(): globalThis.Promise<string> {
		const b: buffer | $.VarRef<buffer> | null = this;
		return fmt.Sprintf("mem.Buffer(%p, data: %p, length: %d)", $.interfaceValue(b, "*mem.buffer", /* @__PURE__ */ $.pointerType("mem.buffer")), $.interfaceValue((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as buffer).ReadOnlyData() : buffer.prototype.ReadOnlyData.call(b)), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), $.basicInterfaceValue($.sliceLen((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as buffer).ReadOnlyData() : buffer.prototype.ReadOnlyData.call(b))), "int"))
	}

	public async read(buf: $.Slice<number>): globalThis.Promise<[number, Buffer | null]> {
		let b: buffer | $.VarRef<buffer> | null = this;
		const b$: buffer = b == null ? $.pointerTarget<buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<buffer>(b)
		if ((b$ as buffer).refs == null) {
			$.panic("Cannot read freed buffer")
		}

		let n = $.copy(buf, (b$ as buffer).data)
		if (n == $.sliceLen((b$ as buffer).data)) {
			await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as buffer).Free() : buffer.prototype.Free.call(b))
			return [n, null]
		}

		;(b$ as buffer).data = $.goSlice((b$ as buffer).data, n, undefined)
		return [n, $.interfaceValue<Buffer | null>(b, "*mem.buffer", /* @__PURE__ */ $.pointerType("mem.buffer"))]
	}

	public async split(n: number): globalThis.Promise<[Buffer | null, Buffer | null]> {
		let b: buffer | $.VarRef<buffer> | null = this;
		const b$: buffer = b == null ? $.pointerTarget<buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<buffer>(b)
		if ((b$ as buffer).refs == null) {
			$.panic("Cannot split freed buffer")
		}

		atomic.Int32.prototype.Add.call($.pointerValue<atomic.Int32>((b$ as buffer).refs), 1)
		let split: buffer | $.VarRef<buffer> | null = await newBuffer()
		let split$: buffer = split == null ? $.pointerTarget<buffer>(split) : (split as any).__isVarRef === true ? (split as any).value : (split as any).__goValue === undefined ? (split as any) : $.pointerTarget<buffer>(split);
		;(split$ as buffer).origData = (b$ as buffer).origData;
		;(split$ as buffer).data = $.goSlice((b$ as buffer).data, n, undefined);
		;(split$ as buffer).refs = (b$ as buffer).refs;
		;(split$ as buffer).pool = (b$ as buffer).pool;

		;(b$ as buffer).data = $.goSlice((b$ as buffer).data, undefined, n)

		return [$.interfaceValue<Buffer | null>(b, "*mem.buffer", /* @__PURE__ */ $.pointerType("mem.buffer")), $.interfaceValue<Buffer | null>(split, "*mem.buffer", /* @__PURE__ */ $.pointerType("mem.buffer"))]
	}

	static __typeInfo = $.registerStructType(
		"mem.buffer",
		() => new buffer(),
		() => [$.methodSignature("Free", [], [], true), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("ReadOnlyData", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Ref", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("read", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "mem.Buffer"], true), $.methodSignature("split", [["n", /* @__PURE__ */ $.basicType("int")]], ["mem.Buffer", "mem.Buffer"], true)],
		buffer,
		() => [/* @__PURE__ */ $.structField("origData", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [0], 0, false, { pkgPath: "google.golang.org/grpc/mem" }), /* @__PURE__ */ $.structField("data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, false, { pkgPath: "google.golang.org/grpc/mem" }), /* @__PURE__ */ $.structField("refs", /* @__PURE__ */ $.pointerType("atomic.Int32"), [2], 32, false, { pkgPath: "google.golang.org/grpc/mem" }), /* @__PURE__ */ $.structField("pool", "mem.BufferPool", [3], 40, false, { pkgPath: "google.golang.org/grpc/mem" })]
	)
}

export class emptyBuffer {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): emptyBuffer {
		return new emptyBuffer(this, true)
	}

	public __goscriptAssign(source: emptyBuffer): void {
	}

	public Free(): void {
		const e = this;
	}

	public Len(): number {
		const e = this;
		return 0
	}

	public ReadOnlyData(): $.Slice<number> {
		const e = this;
		return null
	}

	public Ref(): void {
		const e = this;
	}

	public read(_p0: $.Slice<number>): [number, Buffer | null] {
		const e = this;
		return [0, $.interfaceValue<Buffer | null>((e).clone(), "mem.emptyBuffer", "mem.emptyBuffer")]
	}

	public split(_p0: number): [Buffer | null, Buffer | null] {
		const e = this;
		let left: Buffer | null = null! as Buffer | null
		let right: Buffer | null = null! as Buffer | null
		return [$.interfaceValue<Buffer | null>((e).clone(), "mem.emptyBuffer", "mem.emptyBuffer"), $.interfaceValue<Buffer | null>((e).clone(), "mem.emptyBuffer", "mem.emptyBuffer")]
	}

	static __typeInfo = $.registerStructType(
		"mem.emptyBuffer",
		() => new emptyBuffer(),
		() => [$.methodSignature("Free"), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ReadOnlyData", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Ref"), $.methodSignature("read", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [/* @__PURE__ */ $.basicType("int"), "mem.Buffer"]), $.methodSignature("split", [/* @__PURE__ */ $.basicType("int")], [["left", "mem.Buffer"], ["right", "mem.Buffer"]])],
		emptyBuffer,
		() => []
	)
}

export var bufferPoolingThreshold: number

export function __goscript_init_bufferPoolingThreshold(): void {
	if (((bufferPoolingThreshold) as any) === undefined) {
		bufferPoolingThreshold = 1024
	}
}

export function __goscript_get_bufferPoolingThreshold(): number {
	if (((bufferPoolingThreshold) as any) === undefined) {
		__goscript_init_bufferPoolingThreshold()
	}
	return bufferPoolingThreshold
}

export function __goscript_set_bufferPoolingThreshold(__goscriptValue: number): void {
	bufferPoolingThreshold = __goscriptValue
}

export let bufferObjectPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(new buffer(), "*mem.buffer", /* @__PURE__ */ $.pointerType("mem.buffer"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_bufferObjectPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(bufferObjectPool.value, __goscriptValue)
}

export let refObjectPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(new atomic.Int32(), "*atomic.Int32", /* @__PURE__ */ $.pointerType("atomic.Int32"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_refObjectPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(refObjectPool.value, __goscriptValue)
}

export function IsBelowBufferPoolingThreshold(size: number): boolean {
	return size <= __goscript_get_bufferPoolingThreshold()
}

export async function newBuffer(): globalThis.Promise<buffer | $.VarRef<buffer> | null> {
	return $.mustTypeAssert<buffer | $.VarRef<buffer> | null>(await bufferObjectPool.value.Get(), /* @__PURE__ */ $.pointerType("mem.buffer"))
}

export async function NewBuffer(data: $.VarRef<$.Slice<number>> | null, pool: __goscript_buffer_pool.BufferPool | null): globalThis.Promise<Buffer | null> {
	if ((pool == null) || IsBelowBufferPoolingThreshold($.sliceLen($.pointerValue<$.Slice<number>>(data)))) {
		return $.namedValueInterfaceValue<Buffer | null>(($.pointerValue<$.Slice<number>>(data) as SliceBuffer), "mem.SliceBuffer", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
	}
	let b: buffer | $.VarRef<buffer> | null = await newBuffer()
	let b$: buffer = b == null ? $.pointerTarget<buffer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<buffer>(b);
	;(b$ as buffer).origData = data;
	;(b$ as buffer).data = $.pointerValue<$.Slice<number>>(data);
	;(b$ as buffer).pool = pool;
	;(b$ as buffer).refs = $.mustTypeAssert<atomic.Int32 | $.VarRef<atomic.Int32> | null>(await refObjectPool.value.Get(), /* @__PURE__ */ $.pointerType("atomic.Int32"))
	atomic.Int32.prototype.Add.call($.pointerValue<atomic.Int32>((b$ as buffer).refs), 1)
	return $.interfaceValue<Buffer | null>(b, "*mem.buffer", /* @__PURE__ */ $.pointerType("mem.buffer"))
}

export async function Copy(data: $.Slice<number>, pool: __goscript_buffer_pool.BufferPool | null): globalThis.Promise<Buffer | null> {
	if (IsBelowBufferPoolingThreshold($.sliceLen(data))) {
		let buf: SliceBuffer = ($.makeSlice<number>($.sliceLen(data), undefined, "byte") as SliceBuffer)
		$.copy((buf as SliceBuffer), data)
		return $.namedValueInterfaceValue<Buffer | null>(buf, "mem.SliceBuffer", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
	}

	let buf = ((__goscriptAwait = (pool !== null && (pool as any).__isVarRef !== true && (pool as any).__goValue === undefined ? (pool as Exclude<__goscript_buffer_pool.BufferPool, null>) : $.pointerValue<Exclude<__goscript_buffer_pool.BufferPool, null>>(pool)).Get($.sliceLen(data)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.VarRef<$.Slice<number>> | null)
	$.copy($.pointerValue<$.Slice<number>>(buf), data)
	return NewBuffer(buf, pool)
}

export async function ReadUnsafe(dst: $.Slice<number>, buf: Buffer | null): globalThis.Promise<[number, Buffer | null]> {
	return (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? (buf as Exclude<Buffer, null>) : $.pointerValue<Exclude<Buffer, null>>(buf)).read(dst)
}

export async function SplitUnsafe(buf: Buffer | null, n: number): globalThis.Promise<[Buffer | null, Buffer | null]> {
	let left: Buffer | null = null! as Buffer | null
	let right: Buffer | null = null! as Buffer | null
	return (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? (buf as Exclude<Buffer, null>) : $.pointerValue<Exclude<Buffer, null>>(buf)).split(n)
}

export function SliceBuffer_ReadOnlyData(s: SliceBuffer): $.Slice<number> {
	return s
}

export function SliceBuffer_Ref(s: SliceBuffer): void {
}

export function SliceBuffer_Free(s: SliceBuffer): void {
}

export function SliceBuffer_Len(s: SliceBuffer): number {
	return $.sliceLen((s as SliceBuffer))
}

export function SliceBuffer_split(s: SliceBuffer, n: number): [Buffer | null, Buffer | null] {
	let left: Buffer | null = null! as Buffer | null
	let right: Buffer | null = null! as Buffer | null
	return [$.namedValueInterfaceValue<Buffer | null>($.goSlice(s, undefined, n), "mem.SliceBuffer", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<Buffer | null>($.goSlice(s, n, undefined), "mem.SliceBuffer", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]
}

export function SliceBuffer_read(s: SliceBuffer, buf: $.Slice<number>): [number, Buffer | null] {
	let n = $.copy(buf, (s as SliceBuffer))
	if (n == $.sliceLen((s as SliceBuffer))) {
		return [n, null]
	}
	return [n, $.namedValueInterfaceValue<Buffer | null>($.goSlice(s, n, undefined), "mem.SliceBuffer", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Free: (receiver: any, ...args: any[]) => (SliceBuffer_Free as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (SliceBuffer_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ReadOnlyData: (receiver: any, ...args: any[]) => (SliceBuffer_ReadOnlyData as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ref: (receiver: any, ...args: any[]) => (SliceBuffer_Ref as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), read: (receiver: any, ...args: any[]) => (SliceBuffer_read as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), split: (receiver: any, ...args: any[]) => (SliceBuffer_split as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "mem.SliceBuffer"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Free"), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("ReadOnlyData", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("Ref"), $.methodSignature("read", [["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "mem.Buffer"]), $.methodSignature("split", [["n", /* @__PURE__ */ $.basicType("int")]], [["left", "mem.Buffer"], ["right", "mem.Buffer"]])])
}

var __goscriptAwait: any
