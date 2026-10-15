// Generated file based on buffer_pool.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sort from "@goscript/sort/index.js"

import * as sync from "@goscript/sync/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import * as __goscript_buffers from "./buffers.gs.ts"
import "@goscript/sort/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "./buffers.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/mem", ["mem.BufferPool", "mem.tieredBufferPool", "mem.sizedBufferPool", "mem.simpleBufferPool", "mem.NopBufferPool"])

export type BufferPool = {
	Get(length: number): $.VarRef<$.Slice<number>> | null | globalThis.Promise<$.VarRef<$.Slice<number>> | null>
	Put(_p0: $.VarRef<$.Slice<number>> | null): void
}

$.registerInterfaceType(
	"mem.BufferPool",
	null,
	[$.methodSignature("Get", [["length", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]), $.methodSignature("Put", [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))])]
);

export class simpleBufferPool {
	public get pool(): sync.Pool {
		return this._fields.pool
	}

	public set pool(value: sync.Pool) {
		this._fields.pool = value
	}

	public _fields: {
		pool: sync.Pool
	}

	constructor(init?: Partial<{pool?: sync.Pool}>, __goscriptValue?: boolean) {
		this._fields = {
			pool: init?.pool ? $.markAsStructValue($.cloneStructValue(init.pool)) : $.markAsStructValue(new sync.Pool())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): simpleBufferPool {
		return new simpleBufferPool(this, true)
	}

	public __goscriptAssign(source: simpleBufferPool): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.pool, values.pool)
	}

	public async Get(size: number): globalThis.Promise<$.VarRef<$.Slice<number>> | null> {
		const p: simpleBufferPool | $.VarRef<simpleBufferPool> | null = this;
		const p$: simpleBufferPool = p == null ? $.pointerTarget<simpleBufferPool>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<simpleBufferPool>(p)
		let [bs, ok] = $.typeAssertTuple<$.VarRef<$.Slice<number>> | null>(await (p$ as simpleBufferPool).pool.Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
		if (ok && ($.cap($.pointerValue<$.Slice<number>>(bs)) >= size)) {
			bs!.value = $.goSlice(($.pointerValue<$.Slice<number>>(bs)), undefined, size)
			return bs
		}

		// A buffer was pulled from the pool, but it is too small. Put it back in
		// the pool and create one large enough.
		if (ok) {
			void (p$ as simpleBufferPool).pool.Put($.interfaceValue(bs, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
		}

		let b: $.VarRef<$.Slice<number>> = $.varRef($.makeSlice<number>(size, undefined, "byte"))
		return b
	}

	public Put(buf: $.VarRef<$.Slice<number>> | null): void {
		const p: simpleBufferPool | $.VarRef<simpleBufferPool> | null = this;
		$.pointerValue<simpleBufferPool>(p).pool.Put($.interfaceValue(buf, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
	}

	static __typeInfo = $.registerStructType(
		"mem.simpleBufferPool",
		() => new simpleBufferPool(),
		() => [$.methodSignature("Get", [["size", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))], true), $.methodSignature("Put", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]], [], true)],
		simpleBufferPool,
		() => [/* @__PURE__ */ $.structField("pool", "sync.Pool", [0], 0, false, { pkgPath: "google.golang.org/grpc/mem" })]
	)
}

export class tieredBufferPool {
	public get sizedPools(): $.Slice<sizedBufferPool | $.VarRef<sizedBufferPool> | null> {
		return this._fields.sizedPools
	}

	public set sizedPools(value: $.Slice<sizedBufferPool | $.VarRef<sizedBufferPool> | null>) {
		this._fields.sizedPools = value
	}

	public get fallbackPool(): simpleBufferPool {
		return this._fields.fallbackPool
	}

	public set fallbackPool(value: simpleBufferPool) {
		this._fields.fallbackPool = value
	}

	public _fields: {
		sizedPools: $.Slice<sizedBufferPool | $.VarRef<sizedBufferPool> | null>
		fallbackPool: simpleBufferPool
	}

	constructor(init?: Partial<{sizedPools?: $.Slice<sizedBufferPool | $.VarRef<sizedBufferPool> | null>, fallbackPool?: simpleBufferPool}>, __goscriptValue?: boolean) {
		this._fields = {
			sizedPools: init?.sizedPools ?? (null! as $.Slice<sizedBufferPool | $.VarRef<sizedBufferPool> | null>),
			fallbackPool: init?.fallbackPool ? init.fallbackPool.clone() : new simpleBufferPool(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tieredBufferPool {
		return new tieredBufferPool(this, true)
	}

	public __goscriptAssign(source: tieredBufferPool): void {
		const target = this._fields
		const values = source._fields
		target.sizedPools = values.sizedPools
		$.assignStruct(target.fallbackPool, values.fallbackPool)
	}

	public async Get(size: number): globalThis.Promise<$.VarRef<$.Slice<number>> | null> {
		const p: tieredBufferPool | $.VarRef<tieredBufferPool> | null = this;
		return $.pointerValue<Exclude<BufferPool, null>>((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as tieredBufferPool).getPool(size) : tieredBufferPool.prototype.getPool.call(p, size))).Get(size)
	}

	public async Put(buf: $.VarRef<$.Slice<number>> | null): globalThis.Promise<void> {
		const p: tieredBufferPool | $.VarRef<tieredBufferPool> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<BufferPool, null>>((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as tieredBufferPool).getPool($.cap($.pointerValue<$.Slice<number>>(buf))) : tieredBufferPool.prototype.getPool.call(p, $.cap($.pointerValue<$.Slice<number>>(buf))))).Put(buf), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public getPool(size: number): BufferPool | null {
		const p: tieredBufferPool | $.VarRef<tieredBufferPool> | null = this;
		const p$: tieredBufferPool = p == null ? $.pointerTarget<tieredBufferPool>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<tieredBufferPool>(p)
		let poolIdx = sort.Search($.sliceLen((p$ as tieredBufferPool).sizedPools), $.functionValue((i: number): boolean => {
			return $.pointerValue<sizedBufferPool>($.arrayIndex((p$ as tieredBufferPool).sizedPools!, i)).defaultSize >= size
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)))

		if (poolIdx == $.sliceLen((p$ as tieredBufferPool).sizedPools)) {
			return $.interfaceValue<BufferPool | null>($.fieldRef((p$ as tieredBufferPool)._fields, "fallbackPool"), "*mem.simpleBufferPool", /* @__PURE__ */ $.pointerType("mem.simpleBufferPool"))
		}

		return $.interfaceValue<BufferPool | null>($.arrayIndex((p$ as tieredBufferPool).sizedPools!, poolIdx), "*mem.sizedBufferPool", /* @__PURE__ */ $.pointerType("mem.sizedBufferPool"))
	}

	static __typeInfo = $.registerStructType(
		"mem.tieredBufferPool",
		() => new tieredBufferPool(),
		() => [$.methodSignature("Get", [["size", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))], true), $.methodSignature("Put", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]], [], true), $.methodSignature("getPool", [["size", /* @__PURE__ */ $.basicType("int")]], ["mem.BufferPool"], true)],
		tieredBufferPool,
		() => [/* @__PURE__ */ $.structField("sizedPools", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("mem.sizedBufferPool")), [0], 0, false, { pkgPath: "google.golang.org/grpc/mem" }), /* @__PURE__ */ $.structField("fallbackPool", "mem.simpleBufferPool", [1], 24, false, { pkgPath: "google.golang.org/grpc/mem" })]
	)
}

export class sizedBufferPool {
	public get pool(): sync.Pool {
		return this._fields.pool
	}

	public set pool(value: sync.Pool) {
		this._fields.pool = value
	}

	public get defaultSize(): number {
		return this._fields.defaultSize
	}

	public set defaultSize(value: number) {
		this._fields.defaultSize = value
	}

	public _fields: {
		pool: sync.Pool
		defaultSize: number
	}

	constructor(init?: Partial<{pool?: sync.Pool, defaultSize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			pool: init?.pool ? $.markAsStructValue($.cloneStructValue(init.pool)) : $.markAsStructValue(new sync.Pool()),
			defaultSize: init?.defaultSize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sizedBufferPool {
		return new sizedBufferPool(this, true)
	}

	public __goscriptAssign(source: sizedBufferPool): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.pool, values.pool)
		target.defaultSize = values.defaultSize
	}

	public async Get(size: number): globalThis.Promise<$.VarRef<$.Slice<number>> | null> {
		const p: sizedBufferPool | $.VarRef<sizedBufferPool> | null = this;
		let buf = $.mustTypeAssert<$.VarRef<$.Slice<number>> | null>(await $.pointerValue<sizedBufferPool>(p).pool.Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
		let b: $.Slice<number> = $.pointerValue<$.Slice<number>>(buf)
		$.clear($.goSlice(b, undefined, $.cap(b)))
		buf!.value = $.goSlice(b, undefined, size)
		return buf
	}

	public Put(buf: $.VarRef<$.Slice<number>> | null): void {
		const p: sizedBufferPool | $.VarRef<sizedBufferPool> | null = this;
		const p$: sizedBufferPool = p == null ? $.pointerTarget<sizedBufferPool>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<sizedBufferPool>(p)
		if ($.cap($.pointerValue<$.Slice<number>>(buf)) < (p$ as sizedBufferPool).defaultSize) {
			// Ignore buffers that are too small to fit in the pool. Otherwise, when
			// Get is called it will panic as it tries to index outside the bounds
			// of the buffer.
			return
		}
		void (p$ as sizedBufferPool).pool.Put($.interfaceValue(buf, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
	}

	static __typeInfo = $.registerStructType(
		"mem.sizedBufferPool",
		() => new sizedBufferPool(),
		() => [$.methodSignature("Get", [["size", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))], true), $.methodSignature("Put", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]], [], true)],
		sizedBufferPool,
		() => [/* @__PURE__ */ $.structField("pool", "sync.Pool", [0], 0, false, { pkgPath: "google.golang.org/grpc/mem" }), /* @__PURE__ */ $.structField("defaultSize", /* @__PURE__ */ $.basicType("int"), [1], 40, false, { pkgPath: "google.golang.org/grpc/mem" })]
	)
}

export class NopBufferPool {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NopBufferPool {
		return new NopBufferPool(this, true)
	}

	public __goscriptAssign(source: NopBufferPool): void {
	}

	public Get(length: number): $.VarRef<$.Slice<number>> | null {
		let b: $.VarRef<$.Slice<number>> = $.varRef($.makeSlice<number>(length, undefined, "byte"))
		return b
	}

	public Put(_p0: $.VarRef<$.Slice<number>> | null): void {
	}

	static __typeInfo = $.registerStructType(
		"mem.NopBufferPool",
		() => new NopBufferPool(),
		() => [$.methodSignature("Get", [["length", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]), $.methodSignature("Put", [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))])],
		NopBufferPool,
		() => []
	)
}

export let defaultBufferPoolSizes: $.Slice<number> = $.arrayToSlice<number>([256, 4096, 16384, 32768, 1048576])

export function __goscript_set_defaultBufferPoolSizes(__goscriptValue: $.Slice<number>): void {
	defaultBufferPoolSizes = __goscriptValue
}

export let defaultBufferPool: BufferPool | null = null! as BufferPool | null

export function __goscript_set_defaultBufferPool(__goscriptValue: BufferPool | null): void {
	defaultBufferPool = __goscriptValue
}

function __goscriptInit0(): void {
	defaultBufferPool = NewTieredBufferPool(defaultBufferPoolSizes)

	internal.__goscript_set_SetDefaultBufferPoolForTesting($.interfaceValue($.functionValue((pool: BufferPool | null): void => {
		defaultBufferPool = pool
	}, ({ kind: $.TypeKind.Function, params: ["mem.BufferPool"], results: [] } as $.FunctionTypeInfo)), "func(pool mem.BufferPool)", ({ kind: $.TypeKind.Function, params: ["mem.BufferPool"], results: [] } as $.FunctionTypeInfo)))

	internal.__goscript_set_SetBufferPoolingThresholdForTesting($.interfaceValue($.functionValue((threshold: number): void => {
		__goscript_buffers.__goscript_set_bufferPoolingThreshold(threshold)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo)), "func(threshold int)", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo)))
}

export function DefaultBufferPool(): BufferPool | null {
	return defaultBufferPool
}

export function NewTieredBufferPool(poolSizes: $.Slice<number>): BufferPool | null {
	sort.Ints(poolSizes)
	let pools: $.Slice<sizedBufferPool | $.VarRef<sizedBufferPool> | null> = $.makeSlice<sizedBufferPool | $.VarRef<sizedBufferPool> | null>($.sliceLen(poolSizes))
	for (let __goscriptRangeTarget0 = poolSizes, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(pools), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let s = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as number);
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = newSizedBufferPool(s)
	}
	return $.interfaceValue<BufferPool | null>(new tieredBufferPool({sizedPools: pools}), "*mem.tieredBufferPool", /* @__PURE__ */ $.pointerType("mem.tieredBufferPool"))
}

export function newSizedBufferPool(size: number): sizedBufferPool | $.VarRef<sizedBufferPool> | null {
	return new sizedBufferPool({pool: $.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
		let buf: $.VarRef<$.Slice<number>> = $.varRef($.makeSlice<number>(size, undefined, "byte"))
		return $.interfaceValue(buf, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})), defaultSize: size})
}

var __goscriptAwait: any

export { __goscriptInit0 }
