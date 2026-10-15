// Generated file based on bufferpool.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as flag from "@goscript/flag/index.js"

import * as sync from "@goscript/sync/index.js"

import * as bytes from "@goscript/bytes/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_buffer from "./buffer.gs.ts"
import "@goscript/flag/index.js"
import "@goscript/sync/index.js"
import "@goscript/bytes/index.js"
import "./buffer.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/internal/bufferpool", ["bufferpool.Option", "bufferpool.Pool"])

export type Option = ((_p0: Pool | $.VarRef<Pool> | null) => void) | null

export class Pool {
	public get testDetectUseAfterFree(): boolean {
		return this._fields.testDetectUseAfterFree
	}

	public set testDetectUseAfterFree(value: boolean) {
		this._fields.testDetectUseAfterFree = value
	}

	public get pool(): sync.Pool {
		return this._fields.pool
	}

	public set pool(value: sync.Pool) {
		this._fields.pool = value
	}

	public _fields: {
		testDetectUseAfterFree: boolean
		pool: sync.Pool
	}

	constructor(init?: Partial<{testDetectUseAfterFree?: boolean, pool?: sync.Pool}>, __goscriptValue?: boolean) {
		this._fields = {
			testDetectUseAfterFree: init?.testDetectUseAfterFree ?? (false as boolean),
			pool: init?.pool ? $.markAsStructValue($.cloneStructValue(init.pool)) : $.markAsStructValue(new sync.Pool())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Pool {
		return new Pool(this, true)
	}

	public __goscriptAssign(source: Pool): void {
		const target = this._fields
		const values = source._fields
		target.testDetectUseAfterFree = values.testDetectUseAfterFree
		$.assignStruct(target.pool, values.pool)
	}

	public async Get(): globalThis.Promise<__goscript_buffer.Buffer | $.VarRef<__goscript_buffer.Buffer> | null> {
		const p: Pool | $.VarRef<Pool> | null = this;
		let __goscriptTuple0: any = $.typeAssertTuple<__goscript_buffer.Buffer | $.VarRef<__goscript_buffer.Buffer> | null>(await $.pointerValue<Pool>(p).pool.Get(), /* @__PURE__ */ $.pointerType("bufferpool.Buffer"))
		let buf: __goscript_buffer.Buffer | $.VarRef<__goscript_buffer.Buffer> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			buf = __goscript_buffer.newBuffer(p)
		} else {
			void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as __goscript_buffer.Buffer).reuse() : __goscript_buffer.Buffer.prototype.reuse.call(buf))
		}
		return buf
	}

	public release(buf: __goscript_buffer.Buffer | $.VarRef<__goscript_buffer.Buffer> | null): void {
		const p: Pool | $.VarRef<Pool> | null = this;
		$.pointerValue<Pool>(p).pool.Put($.interfaceValue(buf, "*bufferpool.Buffer", /* @__PURE__ */ $.pointerType("bufferpool.Buffer")))
	}

	static __typeInfo = $.registerStructType(
		"bufferpool.Pool",
		() => new Pool(),
		() => [$.methodSignature("Get", [], [/* @__PURE__ */ $.pointerType("bufferpool.Buffer")], true), $.methodSignature("release", [["buf", /* @__PURE__ */ $.pointerType("bufferpool.Buffer")]], [], true)],
		Pool,
		() => [/* @__PURE__ */ $.structField("testDetectUseAfterFree", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/internal/bufferpool" }), /* @__PURE__ */ $.structField("pool", "sync.Pool", [1], 8, false, { pkgPath: "go.uber.org/yarpc/internal/bufferpool" })]
	)
}

export let _pool: Pool | $.VarRef<Pool> | null = await NewPool(null)

export function __goscript_set__pool(__goscriptValue: Pool | $.VarRef<Pool> | null): void {
	_pool = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	// This is a hacky way to determine whether we are running in unit tests where
	// we want to enable use-after-free detection.
	// https://stackoverflow.com/a/36666114
	if (flag.Lookup("test.v") != null) {
		_pool = await NewPool($.arrayToSlice<Option | null>([DetectUseAfterFreeForTests()]))
	}
}

export async function NewPool(opts: $.Slice<Option | null>): globalThis.Promise<Pool | $.VarRef<Pool> | null> {
	let pool: Pool | $.VarRef<Pool> | null = new Pool()
	for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Option | null)
		void (__goscriptAwait = opt!(pool), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return pool
}

export function DetectUseAfterFreeForTests(): Option | null {
	return $.functionValue((p: Pool | $.VarRef<Pool> | null): void => {
		$.pointerValue<Pool>(p).testDetectUseAfterFree = true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("bufferpool.Pool")], results: [] } as $.FunctionTypeInfo))
}

export async function Get(): globalThis.Promise<__goscript_buffer.Buffer | $.VarRef<__goscript_buffer.Buffer> | null> {
	return (_pool !== null && (_pool as any).__isVarRef !== true && (_pool as any).__goValue === undefined ? ((_pool as any) as Pool).Get() : Pool.prototype.Get.call(_pool))
}

export function Put(buf: __goscript_buffer.Buffer | $.VarRef<__goscript_buffer.Buffer> | null): void {
	void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as __goscript_buffer.Buffer).Release() : __goscript_buffer.Buffer.prototype.Release.call(buf))
}

var __goscriptAwait: any

export { __goscriptInit0 }
