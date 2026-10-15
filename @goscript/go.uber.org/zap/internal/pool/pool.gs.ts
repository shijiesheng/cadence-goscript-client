// Generated file based on pool.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("go.uber.org/zap/internal/pool", ["pool.Pool"])

export class Pool {
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

	public clone(): Pool {
		return new Pool(this, true)
	}

	public __goscriptAssign(source: Pool): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.pool, values.pool)
	}

	public async Get(__typeArgs: $.GenericTypeArgs | undefined): globalThis.Promise<any> {
		const p: Pool | $.VarRef<Pool> | null = this;
		return $.mustTypeAssert<any>(await $.pointerValue<Pool>(p).pool.Get(), __typeArgs?.["T"]?.type ?? { kind: $.TypeKind.Interface, methods: [] })
	}

	public Put(__typeArgs: $.GenericTypeArgs | undefined, x: any): void {
		const p: Pool | $.VarRef<Pool> | null = this;
		$.pointerValue<Pool>(p).pool.Put($.typeParamInterfaceValue<any>(x, __typeArgs?.["T"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }))
	}

	static __typeInfo = $.registerStructType(
		"pool.Pool",
		() => new Pool(),
		() => [$.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("Put", [["x", { kind: $.TypeKind.Interface, methods: [] }]], [], true)],
		Pool,
		() => [/* @__PURE__ */ $.structField("pool", "sync.Pool", [0], 0, false, { pkgPath: "go.uber.org/zap/internal/pool" })]
	)
}

export function New(__typeArgs: $.GenericTypeArgs | undefined, fn: (() => any | globalThis.Promise<any>) | null): Pool | $.VarRef<Pool> | null {
	return new Pool({pool: $.markAsStructValue(new sync.Pool({New: $.functionValue(async (): globalThis.Promise<any> => {
		return $.typeParamInterfaceValue<any>((__goscriptAwait = fn!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), __typeArgs?.["T"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null })
	}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))}))})
}

var __goscriptAwait: any
