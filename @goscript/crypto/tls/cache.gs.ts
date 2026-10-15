// Generated file based on cache.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as x509 from "@goscript/crypto/x509/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sync from "@goscript/sync/index.js"

import * as weak from "@goscript/weak/index.js"
import "@goscript/crypto/x509/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sync/index.js"
import "@goscript/weak/index.js"

$.registerTypePackagePath("crypto/tls", ["tls.weakCertCache"])

export class weakCertCache {
	public get Map(): sync.Map {
		return this._fields.Map
	}

	public set Map(value: sync.Map) {
		this._fields.Map = value
	}

	public _fields: {
		Map: sync.Map
	}

	constructor(init?: Partial<{Map?: sync.Map}>, __goscriptValue?: boolean) {
		this._fields = {
			Map: init?.Map ? $.markAsStructValue($.cloneStructValue(init.Map)) : $.markAsStructValue(new sync.Map())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): weakCertCache {
		return new weakCertCache(this, true)
	}

	public __goscriptAssign(source: weakCertCache): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Map, values.Map)
	}

	public async newCert(der: $.Slice<number>): globalThis.Promise<[x509.Certificate | $.VarRef<x509.Certificate> | null, $.GoError]> {
		const wcc: weakCertCache | $.VarRef<weakCertCache> | null = this;
		{
			let [entry, ok] = await $.pointerValue<weakCertCache>(wcc).Map.Load($.bytesToString(der))
			if (ok) {
				{
					let v: x509.Certificate | $.VarRef<x509.Certificate> | null = ($.markAsStructValue($.cloneStructValue($.mustTypeAssert<weak.Pointer>(entry, "weak.Pointer"))).Value(__goscriptStatic0()) as x509.Certificate | $.VarRef<x509.Certificate> | null)
					if (v != null) {
						return [v, null]
					}
				}
			}
		}

		let __goscriptTuple0: any = await x509.ParseCertificate(der)
		let cert: x509.Certificate | $.VarRef<x509.Certificate> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}

		let wp = (weak.Make(__goscriptStatic0(), cert) as weak.Pointer)
		{
			let [entry, loaded] = await $.pointerValue<weakCertCache>(wcc).Map.LoadOrStore($.bytesToString(der), $.namedValueInterfaceValue<any>($.markAsStructValue($.cloneStructValue(wp)), "weak.Pointer", __goscriptStatic1(), __goscriptStatic2(), __goscriptStatic3()))
			if (!loaded) {
				runtime.AddCleanup(cert, $.functionValue(async (_p0: any): globalThis.Promise<void> => {
					await $.pointerValue<weakCertCache>(wcc).Map.CompareAndDelete($.bytesToString(der), entry)
				}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo)), $.bytesToString(der))
			} else {
				{
					let v: x509.Certificate | $.VarRef<x509.Certificate> | null = ($.markAsStructValue($.cloneStructValue($.mustTypeAssert<weak.Pointer>(entry, "weak.Pointer"))).Value(__goscriptStatic0()) as x509.Certificate | $.VarRef<x509.Certificate> | null)
					if (v != null) {
						return [v, null]
					} else {
						if ($.pointerValue<weakCertCache>(wcc).Map.CompareAndSwap($.bytesToString(der), entry, $.namedValueInterfaceValue<any>($.markAsStructValue($.cloneStructValue(wp)), "weak.Pointer", __goscriptStatic1(), __goscriptStatic2(), __goscriptStatic3()))) {
							runtime.AddCleanup(cert, $.functionValue(async (_p0: any): globalThis.Promise<void> => {
								await $.pointerValue<weakCertCache>(wcc).Map.CompareAndDelete($.bytesToString(der), $.namedValueInterfaceValue<any>($.markAsStructValue($.cloneStructValue(wp)), "weak.Pointer", __goscriptStatic1(), __goscriptStatic2(), __goscriptStatic3()))
							}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo)), $.bytesToString(der))
						}
					}
				}
			}
		}
		return [cert, null]
	}

	public Clear(): any {
		return $.pointerValue<sync.Map>(this.Map).Clear()
	}

	public CompareAndDelete(key: any, old: any): any {
		return $.pointerValue<sync.Map>(this.Map).CompareAndDelete(key, old)
	}

	public CompareAndSwap(key: any, old: any, _new: any): any {
		return $.pointerValue<sync.Map>(this.Map).CompareAndSwap(key, old, _new)
	}

	public Delete(key: any): any {
		return $.pointerValue<sync.Map>(this.Map).Delete(key)
	}

	public Load(key: any): any {
		return $.pointerValue<sync.Map>(this.Map).Load(key)
	}

	public LoadAndDelete(key: any): any {
		return $.pointerValue<sync.Map>(this.Map).LoadAndDelete(key)
	}

	public LoadOrStore(key: any, value: any): any {
		return $.pointerValue<sync.Map>(this.Map).LoadOrStore(key, value)
	}

	public Range(f: any): any {
		return $.pointerValue<sync.Map>(this.Map).Range(f)
	}

	public Store(key: any, value: any): any {
		return $.pointerValue<sync.Map>(this.Map).Store(key, value)
	}

	public Swap(key: any, value: any): any {
		return $.pointerValue<sync.Map>(this.Map).Swap(key, value)
	}

	static __typeInfo = $.registerStructType(
		"tls.weakCertCache",
		() => new weakCertCache(),
		() => [$.methodSignature("newCert", [["der", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("x509.Certificate"), "error"], true), $.methodSignature("Clear", [], [], true), $.methodSignature("CompareAndDelete", [["key", { kind: $.TypeKind.Interface, methods: [] }], ["old", { kind: $.TypeKind.Interface, methods: [] }]], [["deleted", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("CompareAndSwap", [["key", { kind: $.TypeKind.Interface, methods: [] }], ["old", { kind: $.TypeKind.Interface, methods: [] }], ["new", { kind: $.TypeKind.Interface, methods: [] }]], [["swapped", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Delete", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("Load", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [["value", { kind: $.TypeKind.Interface, methods: [] }], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("LoadAndDelete", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [["value", { kind: $.TypeKind.Interface, methods: [] }], ["loaded", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("LoadOrStore", [["key", { kind: $.TypeKind.Interface, methods: [] }], ["value", { kind: $.TypeKind.Interface, methods: [] }]], [["actual", { kind: $.TypeKind.Interface, methods: [] }], ["loaded", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Range", [["f", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("Store", [["key", { kind: $.TypeKind.Interface, methods: [] }], ["value", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("Swap", [["key", { kind: $.TypeKind.Interface, methods: [] }], ["value", { kind: $.TypeKind.Interface, methods: [] }]], [["previous", { kind: $.TypeKind.Interface, methods: [] }], ["loaded", /* @__PURE__ */ $.basicType("bool")]], true)],
		weakCertCache,
		() => [/* @__PURE__ */ $.structField("Map", "sync.Map", [0], 0, true, { anonymous: true })]
	)
}

export let globalCertCache: weakCertCache | $.VarRef<weakCertCache> | null = new weakCertCache()

export function __goscript_set_globalCertCache(__goscriptValue: weakCertCache | $.VarRef<weakCertCache> | null): void {
	globalCertCache = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "x509.Certificate", zero: () => new x509.Certificate(undefined, true) }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({Value: (receiver: any, ...args: any[]) => $.pointerValue(receiver).Value(__goscriptStatic0(), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ("weak.Pointer")
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ([$.methodSignature("Value", [], [/* @__PURE__ */ $.pointerType("x509.Certificate")])])
}
