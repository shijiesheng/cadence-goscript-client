// Generated file based on tracing_keys.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.tracingKeysMapping", "tchannel.tracingHeadersCarrier"])

export type tracingHeadersCarrier = globalThis.Map<string, string> | null

$.registerNamedType("tchannel.tracingHeadersCarrier", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")));

$.registerNamedValueType(
	"tchannel.tracingHeadersCarrier",
	{ForeachKey: (receiver: any, ...args: any[]) => (tracingHeadersCarrier_ForeachKey as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), RemoveTracingKeys: (receiver: any, ...args: any[]) => (tracingHeadersCarrier_RemoveTracingKeys as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (tracingHeadersCarrier_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("ForeachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("RemoveTracingKeys"), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("string")]])]
);

$.registerNamedValueType(
	"*tchannel.tracingHeadersCarrier",
	{ForeachKey: (receiver: any, ...args: any[]) => (tracingHeadersCarrier_ForeachKey as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), RemoveTracingKeys: (receiver: any, ...args: any[]) => (tracingHeadersCarrier_RemoveTracingKeys as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (tracingHeadersCarrier_Set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("ForeachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("RemoveTracingKeys"), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("string")]])]
);

export class tracingKeysMapping {
	public get RWMutex(): sync.RWMutex {
		return this._fields.RWMutex
	}

	public set RWMutex(value: sync.RWMutex) {
		this._fields.RWMutex = value
	}

	public get mapping(): globalThis.Map<string, string> | null {
		return this._fields.mapping
	}

	public set mapping(value: globalThis.Map<string, string> | null) {
		this._fields.mapping = value
	}

	public get mapper(): ((key: string) => string | globalThis.Promise<string>) | null {
		return this._fields.mapper
	}

	public set mapper(value: ((key: string) => string | globalThis.Promise<string>) | null) {
		this._fields.mapper = value
	}

	public _fields: {
		RWMutex: sync.RWMutex
		mapping: globalThis.Map<string, string> | null
		mapper: ((key: string) => string | globalThis.Promise<string>) | null
	}

	constructor(init?: Partial<{RWMutex?: sync.RWMutex, mapping?: globalThis.Map<string, string> | null, mapper?: ((key: string) => string | globalThis.Promise<string>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			RWMutex: init?.RWMutex ? $.markAsStructValue($.cloneStructValue(init.RWMutex)) : $.markAsStructValue(new sync.RWMutex()),
			mapping: init?.mapping ?? (null! as globalThis.Map<string, string> | null),
			mapper: init?.mapper ?? (null! as ((key: string) => string | globalThis.Promise<string>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tracingKeysMapping {
		return new tracingKeysMapping(this, true)
	}

	public __goscriptAssign(source: tracingKeysMapping): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.RWMutex, values.RWMutex)
		target.mapping = values.mapping
		target.mapper = values.mapper
	}

	public async mapAndCache(key: string): globalThis.Promise<string> {
		let m: tracingKeysMapping | $.VarRef<tracingKeysMapping> | null = this;
		using __defer = new $.DisposableStack()
		const m$: tracingKeysMapping = m == null ? $.pointerTarget<tracingKeysMapping>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<tracingKeysMapping>(m)
		await (m$ as tracingKeysMapping).RWMutex.RLock()
		let [v, ok] = $.mapGet<string, string, string>((m$ as tracingKeysMapping).mapping, key, "")
		void (m$ as tracingKeysMapping).RWMutex.RUnlock()
		if (ok) {
			return v
		}
		await (m$ as tracingKeysMapping).RWMutex.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as tracingKeysMapping).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		{
			let [__goscriptShadow0, __goscriptShadow1] = $.mapGet<string, string, string>((m$ as tracingKeysMapping).mapping, key, "")
			if (__goscriptShadow1) {
				return __goscriptShadow0
			}
		}
		let mappedKey = (__goscriptAwait = (m$ as tracingKeysMapping).mapper!(key), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ($.len((m$ as tracingKeysMapping).mapping) < 100) {
			$.mapSet((m$ as tracingKeysMapping).mapping, key, mappedKey)
		}
		return mappedKey
	}

	public Lock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Lock()
	}

	public RLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLock()
	}

	public RLocker(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLocker()
	}

	public RUnlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RUnlock()
	}

	public TryLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryLock()
	}

	public TryRLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryRLock()
	}

	public Unlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Unlock()
	}

	static __typeInfo = $.registerStructType(
		"tchannel.tracingKeysMapping",
		() => new tracingKeysMapping(),
		() => [$.methodSignature("mapAndCache", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		tracingKeysMapping,
		() => [/* @__PURE__ */ $.structField("RWMutex", "sync.RWMutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("mapping", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [1], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("mapper", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo), [2], 32, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export const tracingKeyPrefix: string = "$tracing$"

export const tracingKeyMappingSize: number = 100

export let tracingKeyEncoding: tracingKeysMapping | $.VarRef<tracingKeysMapping> | null = new tracingKeysMapping({mapping: $.makeMap<string, string>(), mapper: $.functionValue((key: string): string => {
	return $.concatString("$tracing$", key)
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo))})

export function __goscript_set_tracingKeyEncoding(__goscriptValue: tracingKeysMapping | $.VarRef<tracingKeysMapping> | null): void {
	tracingKeyEncoding = __goscriptValue
}

export let tracingKeyDecoding: tracingKeysMapping | $.VarRef<tracingKeysMapping> | null = new tracingKeysMapping({mapping: $.makeMap<string, string>(), mapper: $.functionValue((key: string): string => {
	return $.sliceStringOrBytes(key, 9, undefined)
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo))})

export function __goscript_set_tracingKeyDecoding(__goscriptValue: tracingKeysMapping | $.VarRef<tracingKeysMapping> | null): void {
	tracingKeyDecoding = __goscriptValue
}

export async function tracingHeadersCarrier_Set(c: tracingHeadersCarrier, key: string, val: string): globalThis.Promise<void> {
	let prefixedKey = await (tracingKeyEncoding !== null && (tracingKeyEncoding as any).__isVarRef !== true && (tracingKeyEncoding as any).__goValue === undefined ? ((tracingKeyEncoding as any) as tracingKeysMapping).mapAndCache(key) : tracingKeysMapping.prototype.mapAndCache.call(tracingKeyEncoding, key))
	$.mapSet(c, prefixedKey, val)
}

export async function tracingHeadersCarrier_ForeachKey(c: tracingHeadersCarrier, handler: ((key: string, val: string) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
	for (const [k, v] of c?.entries() ?? []) {
		if (!strings.HasPrefix(k, "$tracing$")) {
			continue
		}
		let noPrefixKey = await (tracingKeyDecoding !== null && (tracingKeyDecoding as any).__isVarRef !== true && (tracingKeyDecoding as any).__goValue === undefined ? ((tracingKeyDecoding as any) as tracingKeysMapping).mapAndCache(k) : tracingKeysMapping.prototype.mapAndCache.call(tracingKeyDecoding, k))
		{
			let err = (__goscriptAwait = handler!(noPrefixKey, v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
	}
	return null
}

export function tracingHeadersCarrier_RemoveTracingKeys(c: tracingHeadersCarrier): void {
	for (const [key, __rangeValue] of c?.entries() ?? []) {
		if (strings.HasPrefix(key, "$tracing$")) {
			$.deleteMapEntry(c, key)
		}
	}
}

var __goscriptAwait: any
