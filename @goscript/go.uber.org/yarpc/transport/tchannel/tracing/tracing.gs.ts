// Generated file based on tracing.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/transport/tchannel/tracing", ["tracing.HeadersCarrier", "tracing.tchannelTracingKeysMapping"])

export type HeadersCarrier = globalThis.Map<string, string> | null

$.registerNamedType("tracing.HeadersCarrier", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")));

$.registerNamedValueType(
	"tracing.HeadersCarrier",
	{ForeachKey: (receiver: any, ...args: any[]) => (HeadersCarrier_ForeachKey as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (HeadersCarrier_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("ForeachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]])]
);

$.registerNamedValueType(
	"*tracing.HeadersCarrier",
	{ForeachKey: (receiver: any, ...args: any[]) => (HeadersCarrier_ForeachKey as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (HeadersCarrier_Set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("ForeachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]])]
);

export class tchannelTracingKeysMapping {
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

	public clone(): tchannelTracingKeysMapping {
		return new tchannelTracingKeysMapping(this, true)
	}

	public __goscriptAssign(source: tchannelTracingKeysMapping): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.RWMutex, values.RWMutex)
		target.mapping = values.mapping
		target.mapper = values.mapper
	}

	public async mapAndCache(key: string): globalThis.Promise<string> {
		let m: tchannelTracingKeysMapping | $.VarRef<tchannelTracingKeysMapping> | null = this;
		using __defer = new $.DisposableStack()
		const m$: tchannelTracingKeysMapping = m == null ? $.pointerTarget<tchannelTracingKeysMapping>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<tchannelTracingKeysMapping>(m)
		await (m$ as tchannelTracingKeysMapping).RWMutex.RLock()
		let [v, ok] = $.mapGet<string, string, string>((m$ as tchannelTracingKeysMapping).mapping, key, "")
		void (m$ as tchannelTracingKeysMapping).RWMutex.RUnlock()
		if (ok) {
			return v
		}
		await (m$ as tchannelTracingKeysMapping).RWMutex.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((m$ as tchannelTracingKeysMapping).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		{
			let [__goscriptShadow0, __goscriptShadow1] = $.mapGet<string, string, string>((m$ as tchannelTracingKeysMapping).mapping, key, "")
			if (__goscriptShadow1) {
				return __goscriptShadow0
			}
		}
		let mappedKey = (__goscriptAwait = (m$ as tchannelTracingKeysMapping).mapper!(key), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ($.len((m$ as tchannelTracingKeysMapping).mapping) < 100) {
			$.mapSet((m$ as tchannelTracingKeysMapping).mapping, key, mappedKey)
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
		"tracing.tchannelTracingKeysMapping",
		() => new tchannelTracingKeysMapping(),
		() => [{ name: "mapAndCache", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Lock", args: [], returns: [], pointerReceiver: true }, { name: "RLock", args: [], returns: [], pointerReceiver: true }, { name: "RLocker", args: [], returns: [{ type: "sync.Locker" }], pointerReceiver: true }, { name: "RUnlock", args: [], returns: [], pointerReceiver: true }, { name: "TryLock", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "TryRLock", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "Unlock", args: [], returns: [], pointerReceiver: true }],
		tchannelTracingKeysMapping,
		() => [{ name: "RWMutex", key: "RWMutex", type: "sync.RWMutex", anonymous: true }, { name: "mapping", key: "mapping", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }, { name: "mapper", key: "mapper", type: ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo) }]
	)
}

export const tchannelTracingKeyPrefix: string = "$tracing$"

export const tchannelTracingKeyMappingSize: number = 100

export async function HeadersCarrier_ForeachKey(c: HeadersCarrier, handler: ((_p0: string, _p1: string) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
	for (const [k, v] of c?.entries() ?? []) {
		if (!strings.HasPrefix(k, "$tracing$")) {
			continue
		}
		let noPrefixKey = await (tchannelTracingKeyDecoding !== null && (tchannelTracingKeyDecoding as any).__isVarRef !== true && (tchannelTracingKeyDecoding as any).__goValue === undefined ? ((tchannelTracingKeyDecoding as any) as tchannelTracingKeysMapping).mapAndCache(k) : tchannelTracingKeysMapping.prototype.mapAndCache.call(tchannelTracingKeyDecoding, k))
		{
			let err = (__goscriptAwait = handler!(noPrefixKey, v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
	}
	return null
}

export async function HeadersCarrier_Set(c: HeadersCarrier, key: string, value: string): globalThis.Promise<void> {
	let prefixedKey = await (tchannelTracingKeyEncoding !== null && (tchannelTracingKeyEncoding as any).__isVarRef !== true && (tchannelTracingKeyEncoding as any).__goValue === undefined ? ((tchannelTracingKeyEncoding as any) as tchannelTracingKeysMapping).mapAndCache(key) : tchannelTracingKeysMapping.prototype.mapAndCache.call(tchannelTracingKeyEncoding, key))
	$.mapSet(c, prefixedKey, value)
}

export let tchannelTracingKeyEncoding: tchannelTracingKeysMapping | $.VarRef<tchannelTracingKeysMapping> | null = new tchannelTracingKeysMapping({mapping: $.makeMap<string, string>(), mapper: $.functionValue((key: string): string => {
	return $.concatString("$tracing$", key)
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo))})

export function __goscript_set_tchannelTracingKeyEncoding(__goscriptValue: tchannelTracingKeysMapping | $.VarRef<tchannelTracingKeysMapping> | null): void {
	tchannelTracingKeyEncoding = __goscriptValue
}

export let tchannelTracingKeyDecoding: tchannelTracingKeysMapping | $.VarRef<tchannelTracingKeysMapping> | null = new tchannelTracingKeysMapping({mapping: $.makeMap<string, string>(), mapper: $.functionValue((key: string): string => {
	return $.sliceStringOrBytes(key, 9, undefined)
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("string")] } as $.FunctionTypeInfo))})

export function __goscript_set_tchannelTracingKeyDecoding(__goscriptValue: tchannelTracingKeysMapping | $.VarRef<tchannelTracingKeysMapping> | null): void {
	tchannelTracingKeyDecoding = __goscriptValue
}

var __goscriptAwait: any
