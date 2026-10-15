// Generated file based on evaluate.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript__type from "./type.gs.ts"

import * as __goscript_lazy_list from "./lazy_list.gs.ts"

import * as __goscript_type_string from "./type_string.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/fmt/index.js"
import "./type.gs.ts"
import "./lazy_list.gs.ts"
import "./type_string.gs.ts"
import "./value.gs.ts"

export async function EvaluateValue(__goscriptParam0: __goscript_value.Value): globalThis.Promise<$.GoError> {
	let v: $.VarRef<__goscript_value.Value> = $.varRef(__goscriptParam0)
	await using __defer = new $.AsyncDisposableStack()
	switch (v.value.Type()) {
		case 2:
		case 3:
		case 4:
		case 6:
		case 8:
		case 10:
		case 11:
		{
			return null
			break
		}
		case 12:
		{
			for (let __goscriptRangeTarget0 = v.value.GetStruct().Fields, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let f = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_value.Field)).clone()
				{
					let err = await EvaluateValue((f.Value).clone())
					if (err != null) {
						return err
					}
				}
			}
			return null
			break
		}
		case 13:
		{
			let m = v.value.GetMap()
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Close())((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_lazy_list.MapItemList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.MapItemList, null>>(m))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/thriftrw/wire.MapItemList.Close-fm")
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			return (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_lazy_list.MapItemList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.MapItemList, null>>(m)).ForEach($.functionValue(async (item: __goscript_value.MapItem): globalThis.Promise<$.GoError> => {
				{
					let err = await EvaluateValue((item.Key).clone())
					if (err != null) {
						return err
					}
				}
				return await EvaluateValue((item.Value).clone())
			}, ({ kind: $.TypeKind.Function, params: ["wire.MapItem"], results: ["error"] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case 14:
		{
			let s = v.value.GetSet()
			const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Close())((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(s))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/thriftrw/wire.ValueList.Close-fm")
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			return (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(s)).ForEach(EvaluateValue), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		case 15:
		{
			let l = v.value.GetList()
			const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Close())((l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(l))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/thriftrw/wire.ValueList.Close-fm")
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee2(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			return (__goscriptAwait = (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? (l as Exclude<__goscript_lazy_list.ValueList, null>) : $.pointerValue<Exclude<__goscript_lazy_list.ValueList, null>>(l)).ForEach(EvaluateValue), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			break
		}
		default:
		{
			return fmt.Errorf("unknown type %s", $.namedValueInterfaceValue<any>(v.value.Type(), "wire.Type", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_type_string.Type_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "wire.Type"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
