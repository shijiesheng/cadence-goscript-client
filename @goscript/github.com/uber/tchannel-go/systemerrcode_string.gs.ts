// Generated file based on systemerrcode_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_errors from "./errors.gs.ts"
import "@goscript/fmt/index.js"
import "./errors.gs.ts"

export const _SystemErrCode_name_0: string = "ErrCodeInvalidErrCodeTimeoutErrCodeCancelledErrCodeBusyErrCodeDeclinedErrCodeUnexpectedErrCodeBadRequestErrCodeNetwork"

export const _SystemErrCode_name_1: string = "ErrCodeProtocol"

export let _SystemErrCode_index_0: Uint8Array = $.arrayValue(new Uint8Array([0, 14, 28, 44, 55, 70, 87, 104, 118]))

export function __goscript_set__SystemErrCode_index_0(__goscriptValue: Uint8Array): void {
	_SystemErrCode_index_0 = __goscriptValue
}

export let _SystemErrCode_index_1: Uint8Array = $.arrayValue(new Uint8Array([0, 15]))

export function __goscript_set__SystemErrCode_index_1(__goscriptValue: Uint8Array): void {
	_SystemErrCode_index_1 = __goscriptValue
}

export async function SystemErrCode_String(i: __goscript_errors.SystemErrCode): globalThis.Promise<string> {
	switch ((true as boolean)) {
		case (0 <= i) && (i <= 7):
		{
			return $.sliceStringOrBytes("ErrCodeInvalidErrCodeTimeoutErrCodeCancelledErrCodeBusyErrCodeDeclinedErrCodeUnexpectedErrCodeBadRequestErrCodeNetwork", $.arrayIndex(_SystemErrCode_index_0, i), $.arrayIndex(_SystemErrCode_index_0, ((i + 1) & 0xff)))
			break
		}
		case i == 255:
		{
			return "ErrCodeProtocol"
			break
		}
		default:
		{
			return fmt.Sprintf("SystemErrCode(%d)", $.namedValueInterfaceValue<any>(i, "tchannel.SystemErrCode", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({MetricsKey: (receiver: any, ...args: any[]) => (__goscript_errors.SystemErrCode_MetricsKey as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (SystemErrCode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), relayMetricsKey: (receiver: any, ...args: any[]) => (__goscript_errors.SystemErrCode_relayMetricsKey as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "tchannel.SystemErrCode"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("MetricsKey", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("relayMetricsKey", [], [/* @__PURE__ */ $.basicType("string")])])
}
