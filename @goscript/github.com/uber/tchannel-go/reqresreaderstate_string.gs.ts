// Generated file based on reqresreaderstate_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_reqres from "./reqres.gs.ts"
import "@goscript/fmt/index.js"
import "./reqres.gs.ts"

export const _reqResReaderState_name: string = "reqResReaderPreArg1reqResReaderPreArg2reqResReaderPreArg3reqResReaderComplete"

export let _reqResReaderState_index: Uint8Array = $.arrayValue(new Uint8Array([0, 19, 38, 57, 77]))

export function __goscript_set__reqResReaderState_index(__goscriptValue: Uint8Array): void {
	_reqResReaderState_index = __goscriptValue
}

export async function reqResReaderState_String(i: __goscript_reqres.reqResReaderState): globalThis.Promise<string> {
	if ((i < 0) || ((i + 1) >= 5)) {
		return fmt.Sprintf("reqResReaderState(%d)", $.namedValueInterfaceValue<any>(i, "tchannel.reqResReaderState", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}
	return $.sliceStringOrBytes("reqResReaderPreArg1reqResReaderPreArg2reqResReaderPreArg3reqResReaderComplete", $.arrayIndex(_reqResReaderState_index, i), $.arrayIndex(_reqResReaderState_index, i + 1))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (reqResReaderState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "tchannel.reqResReaderState"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}
