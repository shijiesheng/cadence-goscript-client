// Generated file based on pool.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("github.com/uber-go/tally", ["tally.ObjectPool"])

export class ObjectPool {
	public get values(): $.Channel<any> | null {
		return this._fields.values
	}

	public set values(value: $.Channel<any> | null) {
		this._fields.values = value
	}

	public get alloc(): (() => any | globalThis.Promise<any>) | null {
		return this._fields.alloc
	}

	public set alloc(value: (() => any | globalThis.Promise<any>) | null) {
		this._fields.alloc = value
	}

	public _fields: {
		values: $.Channel<any> | null
		alloc: (() => any | globalThis.Promise<any>) | null
	}

	constructor(init?: Partial<{values?: $.Channel<any> | null, alloc?: (() => any | globalThis.Promise<any>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			values: init?.values ?? (null! as $.Channel<any> | null),
			alloc: init?.alloc ?? (null! as (() => any | globalThis.Promise<any>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ObjectPool {
		return new ObjectPool(this, true)
	}

	public __goscriptAssign(source: ObjectPool): void {
		const target = this._fields
		const values = source._fields
		target.values = values.values
		target.alloc = values.alloc
	}

	public async Get(): globalThis.Promise<any> {
		const p: ObjectPool | $.VarRef<ObjectPool> | null = this;
		const p$: ObjectPool = p == null ? $.pointerTarget<ObjectPool>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<ObjectPool>(p)
		let v: any = null! as any
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, any>([
			{
				id: 0,
				isSend: false,
				channel: (p$ as ObjectPool).values,
				onSelected: async (__goscriptSelect0Result) => {
					v = __goscriptSelect0Result.value
				}
			},
			{
				id: -1,
				isSend: false,
				channel: null,
				onSelected: async (__goscriptSelect0Result) => {
					v = (__goscriptAwait = (p$ as ObjectPool).alloc!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		], true)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		return v
	}

	public async Init(alloc: (() => any | globalThis.Promise<any>) | null): globalThis.Promise<void> {
		let p: ObjectPool | $.VarRef<ObjectPool> | null = this;
		const p$: ObjectPool = p == null ? $.pointerTarget<ObjectPool>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<ObjectPool>(p);
		;(p$ as ObjectPool).alloc = alloc

		for (let i = 0; i < $.cap((p$ as ObjectPool).values); i++) {
			await $.chanSend((p$ as ObjectPool).values, (__goscriptAwait = (p$ as ObjectPool).alloc!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
	}

	public async Put(obj: any): globalThis.Promise<void> {
		const p: ObjectPool | $.VarRef<ObjectPool> | null = this;
		const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
			{
				id: 0,
				isSend: true,
				channel: $.pointerValue<ObjectPool>(p).values,
				value: obj,
			},
			{
				id: -1,
				isSend: false,
				channel: null,
			}
		], true)
		if (__goscriptSelect1HasReturn) {
			return __goscriptSelect1Value
		}
	}

	static __typeInfo = $.registerStructType(
		"tally.ObjectPool",
		() => new ObjectPool(),
		() => [$.methodSignature("Get", [], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("Init", [["alloc", ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("Put", [["obj", { kind: $.TypeKind.Interface, methods: [] }]], [], true)],
		ObjectPool,
		() => [/* @__PURE__ */ $.structField("values", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Interface, methods: [] }, "both"), [0], 0, false, { pkgPath: "github.com/uber-go/tally" }), /* @__PURE__ */ $.structField("alloc", ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "github.com/uber-go/tally" })]
	)
}

export function NewObjectPool(size: number): ObjectPool | $.VarRef<ObjectPool> | null {
	return new ObjectPool({values: $.makeChannel<any>(size, null! as any, "both")})
}

var __goscriptAwait: any
