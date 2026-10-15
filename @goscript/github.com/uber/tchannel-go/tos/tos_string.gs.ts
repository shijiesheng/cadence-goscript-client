// Generated file based on tos_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_tos from "./tos.gs.ts"
import "@goscript/fmt/index.js"
import "./tos.gs.ts"

export let _tosNameToValue: globalThis.Map<string, __goscript_tos.ToS> | null = null! as globalThis.Map<string, __goscript_tos.ToS> | null

export function __goscript_set__tosNameToValue(__goscriptValue: globalThis.Map<string, __goscript_tos.ToS> | null): void {
	_tosNameToValue = __goscriptValue
}

export var _tosValueToName: globalThis.Map<__goscript_tos.ToS, string> | null

export function __goscript_init__tosValueToName(): void {
	if (((_tosValueToName) as any) === undefined) {
		_tosValueToName = $.makeMap<__goscript_tos.ToS, string>([[24, "CS3"], [32, "CS4"], [40, "CS5"], [48, "CS6"], [56, "CS7"], [10, "AF11"], [12, "AF12"], [14, "AF13"], [18, "AF21"], [20, "AF22"], [22, "AF23"], [26, "AF31"], [28, "AF32"], [30, "AF33"], [34, "AF41"], [36, "AF42"], [38, "AF43"], [46, "EF"], [16, "Lowdelay"], [8, "Throughput"], [4, "Reliability"], [2, "Lowcost"]])
	}
}

export function __goscript_get__tosValueToName(): globalThis.Map<__goscript_tos.ToS, string> | null {
	if (((_tosValueToName) as any) === undefined) {
		__goscript_init__tosValueToName()
	}
	return _tosValueToName
}

export function __goscript_set__tosValueToName(__goscriptValue: globalThis.Map<__goscript_tos.ToS, string> | null): void {
	_tosValueToName = __goscriptValue
}

function __goscriptInit0(): void {
	_tosNameToValue = $.makeMap<string, __goscript_tos.ToS>()
	for (let [tos, tosString] of __goscript_get__tosValueToName()?.entries() ?? []) {
		$.mapSet(_tosNameToValue, tosString, tos)
	}
}

export function ToS_MarshalText(r: __goscript_tos.ToS): [$.Slice<number>, $.GoError] {
	return [$.stringToBytes($.mapGet<__goscript_tos.ToS, string, string>(__goscript_get__tosValueToName(), r, "")[0]), null]
}

export function ToS_UnmarshalText(r: $.VarRef<__goscript_tos.ToS> | null, data: $.Slice<number>): $.GoError {
	{
		let [v, ok] = $.mapGet<string, __goscript_tos.ToS, __goscript_tos.ToS>(_tosNameToValue, $.bytesToString(data), 0)
		if (ok) {
			r!.value = v
			return null
		}
	}

	return fmt.Errorf("invalid ToS %q", $.bytesToString(data))
}

export { __goscriptInit0 }
