// Generated file based on connectionstate_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_connection from "./connection.gs.ts"
import "@goscript/fmt/index.js"
import "./connection.gs.ts"

export const _connectionState_name: string = "connectionActiveconnectionStartCloseconnectionInboundClosedconnectionClosed"

export let _connectionState_index: Uint8Array = $.arrayValue(new Uint8Array([0, 16, 36, 59, 75]))

export function __goscript_set__connectionState_index(__goscriptValue: Uint8Array): void {
	_connectionState_index = __goscriptValue
}

export async function connectionState_String(i: __goscript_connection.connectionState): globalThis.Promise<string> {
	i = i - (1)
	if ((i < 0) || (i >= 4)) {
		return fmt.Sprintf("connectionState(%d)", $.namedValueInterfaceValue<any>(i + 1, "tchannel.connectionState", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}
	return $.sliceStringOrBytes("connectionActiveconnectionStartCloseconnectionInboundClosedconnectionClosed", $.arrayIndex(_connectionState_index, i), $.arrayIndex(_connectionState_index, i + 1))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (connectionState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "tchannel.connectionState"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}
