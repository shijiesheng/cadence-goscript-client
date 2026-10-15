// Generated file based on retryon_string.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_retry from "./retry.gs.ts"
import "@goscript/fmt/index.js"
import "./retry.gs.ts"

export const _RetryOn_name: string = "RetryDefaultRetryConnectionErrorRetryNeverRetryNonIdempotentRetryUnexpectedRetryIdempotent"

export let _RetryOn_index: Uint8Array = $.arrayValue(new Uint8Array([0, 12, 32, 42, 60, 75, 90]))

export function __goscript_set__RetryOn_index(__goscriptValue: Uint8Array): void {
	_RetryOn_index = __goscriptValue
}

export async function RetryOn_String(i: __goscript_retry.RetryOn): globalThis.Promise<string> {
	if ((i < 0) || ((i + 1) >= 7)) {
		return fmt.Sprintf("RetryOn(%d)", $.namedValueInterfaceValue<any>(i, "tchannel.RetryOn", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}
	return $.sliceStringOrBytes("RetryDefaultRetryConnectionErrorRetryNeverRetryNonIdempotentRetryUnexpectedRetryIdempotent", $.arrayIndex(_RetryOn_index, i), $.arrayIndex(_RetryOn_index, i + 1))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({CanRetry: (receiver: any, ...args: any[]) => (__goscript_retry.RetryOn_CanRetry as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (RetryOn_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "tchannel.RetryOn"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("CanRetry", [["err", "error"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}
