// Generated file based on propagation.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as http from "@goscript/net/http/index.js"
import "@goscript/errors/index.js"
import "@goscript/net/http/index.js"

$.registerTypePackagePath("github.com/opentracing/opentracing-go", ["opentracing.BuiltinFormat", "opentracing.TextMapWriter", "opentracing.TextMapReader", "opentracing.TextMapCarrier", "opentracing.HTTPHeadersCarrier"])

export type BuiltinFormat = number

export type TextMapWriter = {
	Set(key: string, val: string): void
}

$.registerInterfaceType(
	"opentracing.TextMapWriter",
	null,
	[$.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("string")]])]
);

export type TextMapReader = {
	ForeachKey(handler: ((key: string, val: string) => $.GoError | globalThis.Promise<$.GoError>) | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"opentracing.TextMapReader",
	null,
	[$.methodSignature("ForeachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"])]
);

export type TextMapCarrier = globalThis.Map<string, string> | null

$.registerNamedType("opentracing.TextMapCarrier", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")));

$.registerNamedValueType(
	"opentracing.TextMapCarrier",
	{ForeachKey: (receiver: any, ...args: any[]) => (TextMapCarrier_ForeachKey as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (TextMapCarrier_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("ForeachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("string")]])]
);

$.registerNamedValueType(
	"*opentracing.TextMapCarrier",
	{ForeachKey: (receiver: any, ...args: any[]) => (TextMapCarrier_ForeachKey as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (TextMapCarrier_Set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("ForeachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("string")]])]
);

export type HTTPHeadersCarrier = globalThis.Map<string, $.Slice<string>> | null

$.registerNamedType("opentracing.HTTPHeadersCarrier", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))));

$.registerNamedValueType(
	"opentracing.HTTPHeadersCarrier",
	{ForeachKey: (receiver: any, ...args: any[]) => (HTTPHeadersCarrier_ForeachKey as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (HTTPHeadersCarrier_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("ForeachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("string")]])]
);

$.registerNamedValueType(
	"*opentracing.HTTPHeadersCarrier",
	{ForeachKey: (receiver: any, ...args: any[]) => (HTTPHeadersCarrier_ForeachKey as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (HTTPHeadersCarrier_Set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("ForeachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("string")]])]
);

export const Binary: BuiltinFormat = 0

export const TextMap: BuiltinFormat = 1

export const HTTPHeaders: BuiltinFormat = 2

export let ErrUnsupportedFormat: $.GoError = errors.New("opentracing: Unknown or unsupported Inject/Extract format")

export function __goscript_set_ErrUnsupportedFormat(__goscriptValue: $.GoError): void {
	ErrUnsupportedFormat = __goscriptValue
}

export let ErrSpanContextNotFound: $.GoError = errors.New("opentracing: SpanContext not found in Extract carrier")

export function __goscript_set_ErrSpanContextNotFound(__goscriptValue: $.GoError): void {
	ErrSpanContextNotFound = __goscriptValue
}

export let ErrInvalidSpanContext: $.GoError = errors.New("opentracing: SpanContext type incompatible with tracer")

export function __goscript_set_ErrInvalidSpanContext(__goscriptValue: $.GoError): void {
	ErrInvalidSpanContext = __goscriptValue
}

export let ErrInvalidCarrier: $.GoError = errors.New("opentracing: Invalid Inject/Extract carrier")

export function __goscript_set_ErrInvalidCarrier(__goscriptValue: $.GoError): void {
	ErrInvalidCarrier = __goscriptValue
}

export let ErrSpanContextCorrupted: $.GoError = errors.New("opentracing: SpanContext data corrupted in Extract carrier")

export function __goscript_set_ErrSpanContextCorrupted(__goscriptValue: $.GoError): void {
	ErrSpanContextCorrupted = __goscriptValue
}

export async function TextMapCarrier_ForeachKey(c: TextMapCarrier, handler: ((key: string, val: string) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
	for (const [k, v] of c?.entries() ?? []) {
		{
			let err = (__goscriptAwait = handler!(k, v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
	}
	return null
}

export function TextMapCarrier_Set(c: TextMapCarrier, key: string, val: string): void {
	$.mapSet(c, key, val)
}

export function HTTPHeadersCarrier_Set(c: HTTPHeadersCarrier, key: string, val: string): void {
	let h: http.Header = c
	http.Header_Set(h, key, val)
}

export async function HTTPHeadersCarrier_ForeachKey(c: HTTPHeadersCarrier, handler: ((key: string, val: string) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
	for (const [k, vals] of c?.entries() ?? []) {
		for (let __goscriptRangeTarget0 = vals, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let v = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
			{
				let err = (__goscriptAwait = handler!(k, v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}
	}
	return null
}

var __goscriptAwait: any
