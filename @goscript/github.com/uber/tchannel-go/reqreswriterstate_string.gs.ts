// Generated file based on reqreswriterstate_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_reqres from "./reqres.gs.ts"
import "@goscript/fmt/index.js"
import "./reqres.gs.ts"

export const _reqResWriterState_name: string = "reqResWriterPreArg1reqResWriterPreArg2reqResWriterPreArg3reqResWriterComplete"

export let _reqResWriterState_index: Uint8Array = $.arrayValue(new Uint8Array([0, 19, 38, 57, 77]))

export function __goscript_set__reqResWriterState_index(__goscriptValue: Uint8Array): void {
	_reqResWriterState_index = __goscriptValue
}

export async function reqResWriterState_String(i: __goscript_reqres.reqResWriterState): globalThis.Promise<string> {
	if ((i < 0) || ((i + 1) >= 5)) {
		return fmt.Sprintf("reqResWriterState(%d)", $.namedValueInterfaceValue<any>(i, "tchannel.reqResWriterState", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}
	return $.sliceStringOrBytes("reqResWriterPreArg1reqResWriterPreArg2reqResWriterPreArg3reqResWriterComplete", $.arrayIndex(_reqResWriterState_index, i), $.arrayIndex(_reqResWriterState_index, i + 1))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (reqResWriterState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "tchannel.reqResWriterState"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}
