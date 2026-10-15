// Generated file based on cache.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sync from "@goscript/sync/index.js"

import * as weak from "@goscript/weak/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sync/index.js"
import "@goscript/weak/index.js"

$.registerTypePackagePath("crypto/internal/fips140cache", ["fips140cache.Cache"])

export class Cache {
	public get m(): sync.Map {
		return this._fields.m
	}

	public set m(value: sync.Map) {
		this._fields.m = value
	}

	public _fields: {
		m: sync.Map
	}

	constructor(init?: Partial<{m?: sync.Map}>, __goscriptValue?: boolean) {
		this._fields = {
			m: init?.m ? $.markAsStructValue($.cloneStructValue(init.m)) : $.markAsStructValue(new sync.Map())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Cache {
		return new Cache(this, true)
	}

	public __goscriptAssign(source: Cache): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.m, values.m)
	}

	public async Get(__typeArgs: $.GenericTypeArgs | undefined, k: any, _new: (() => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null, check: ((_p0: any) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<[any, $.GoError]> {
		const c: Cache | $.VarRef<Cache> | null = this;
		const c$: Cache = c == null ? $.pointerTarget<Cache>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Cache>(c)
		let p = (weak.Make({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: __typeArgs?.["K"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }}, k) as weak.Pointer)
		{
			let [cached, ok] = await (c$ as Cache).m.Load($.namedValueInterfaceValue<any>($.markAsStructValue($.cloneStructValue(p)), "weak.Pointer", {Value: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Value({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: __typeArgs?.["K"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }}, ...$.stripGenericTypeArgs(args))}, "weak.Pointer", [$.methodSignature("Value", [], [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })])]))
			if (ok) {
				let v = $.mustTypeAssert<any>(cached, /* @__PURE__ */ $.pointerType(__typeArgs?.["V"]?.type ?? { kind: $.TypeKind.Interface, methods: [] }))
				if ((__goscriptAwait = check!(v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					return [v, null]
				}
			}
		}
		let [v, err] = await _new!()
		if (err != null) {
			return [null, err]
		}
		{
			let [, present] = await (c$ as Cache).m.Swap($.namedValueInterfaceValue<any>($.markAsStructValue($.cloneStructValue(p)), "weak.Pointer", {Value: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Value({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: __typeArgs?.["K"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }}, ...$.stripGenericTypeArgs(args))}, "weak.Pointer", [$.methodSignature("Value", [], [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })])]), $.typeParamPointerInterfaceValue(v, __typeArgs?.["V"], "*V", /* @__PURE__ */ $.pointerType(__typeArgs?.["V"]?.type ?? { kind: $.TypeKind.Interface, methods: [] })))
			if (!present) {
				runtime.AddCleanup(k, $.functionValue(((__receiver) => (p: weak.Pointer) => __receiver.evict({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, K: __typeArgs?.["K"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }, V: __typeArgs?.["V"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }}, p))((c$ as Cache)), ({ kind: $.TypeKind.Function, params: ["weak.Pointer"], results: [] } as $.FunctionTypeInfo), "crypto/internal/fips140cache.(*Cache[...]).evict-fm"), $.markAsStructValue($.cloneStructValue(p)))
			}
		}
		return [v, null]
	}

	public async evict(__typeArgs: $.GenericTypeArgs | undefined, p: weak.Pointer): globalThis.Promise<void> {
		const c: Cache | $.VarRef<Cache> | null = this;
		await $.pointerValue<Cache>(c).m.Delete($.namedValueInterfaceValue<any>($.markAsStructValue($.cloneStructValue(p)), "weak.Pointer", {Value: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Value({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: __typeArgs?.["K"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }}, ...$.stripGenericTypeArgs(args))}, "weak.Pointer", [$.methodSignature("Value", [], [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })])]))
	}

	static __typeInfo = $.registerStructType(
		"fips140cache.Cache",
		() => new Cache(),
		() => [$.methodSignature("Get", [["k", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })], ["new", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] }), "error"] } as $.FunctionTypeInfo)], ["check", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] }), "error"], true), $.methodSignature("evict", [["p", "weak.Pointer"]], [], true)],
		Cache,
		() => [/* @__PURE__ */ $.structField("m", "sync.Map", [0], 0, false, { pkgPath: "crypto/internal/fips140cache" })]
	)
}

var __goscriptAwait: any
