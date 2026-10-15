// Generated file based on headers.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strings from "@goscript/strings/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"

import * as encoding from "@goscript/go.uber.org/yarpc/api/encoding/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/strings/index.js"
import "@goscript/go.uber.org/multierr/index.js"
import "@goscript/go.uber.org/yarpc/api/encoding/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/transport/grpc", ["grpc.mdReadWriter"])

export type mdReadWriter = globalThis.Map<string, $.Slice<string>> | null

$.registerNamedType("grpc.mdReadWriter", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))));

$.registerNamedValueType(
	"grpc.mdReadWriter",
	{ForeachKey: (receiver: any, ...args: any[]) => (mdReadWriter_ForeachKey as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (mdReadWriter_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("ForeachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]])]
);

$.registerNamedValueType(
	"*grpc.mdReadWriter",
	{ForeachKey: (receiver: any, ...args: any[]) => (mdReadWriter_ForeachKey as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (mdReadWriter_Set as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("ForeachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]])]
);

export const CallerHeader: string = "rpc-caller"

export const CallerProcedureHeader: string = "rpc-caller-procedure"

export const ServiceHeader: string = "rpc-service"

export const ShardKeyHeader: string = "rpc-shard-key"

export const RoutingKeyHeader: string = "rpc-routing-key"

export const RoutingDelegateHeader: string = "rpc-routing-delegate"

export const EncodingHeader: string = "rpc-encoding"

export const ErrorNameHeader: string = "rpc-error-name"

export const ApplicationErrorHeader: string = "rpc-application-error"

export const _applicationErrorNameHeader: string = "rpc-application-error-name"

export const _applicationErrorDetailsHeader: string = "rpc-application-error-details"

export const _routingRegionHeader: string = "x-uber-rpc-routing-region"

export const _routingZoneHeader: string = "x-uber-rpc-routing-zone"

export const ApplicationErrorHeaderValue: string = "error"

export const baseContentType: string = "application/grpc"

export const contentTypeHeader: string = "content-type"

export let routingHeaders: globalThis.Map<string, boolean> | null = $.makeMap<string, boolean>([["x-uber-rpc-routing-zone", true], ["x-uber-rpc-routing-region", true]])

export function __goscript_set_routingHeaders(__goscriptValue: globalThis.Map<string, boolean> | null): void {
	routingHeaders = __goscriptValue
}

export function isReserved(header: string): boolean {
	header = transport.CanonicalizeHeaderKey(header)
	// exempt routing headers from isReserved check
	if ($.mapGet<string, boolean, boolean>(routingHeaders, header, false)[0]) {
		return false
	}
	return strings.HasPrefix(header, "rpc-")
}

export function transportRequestToMetadata(request: transport.Request | $.VarRef<transport.Request> | null): [metadata.MD, $.GoError] {
	const request$: transport.Request = request == null ? $.pointerTarget<transport.Request>(request) : (request as any).__isVarRef === true ? (request as any).value : (request as any).__goValue === undefined ? (request as any) : $.pointerTarget<transport.Request>(request)
	let md: metadata.MD = metadata.New(null)
	{
		let err = multierr.Combine($.arrayToSlice<$.GoError>([addToMetadata(md, "rpc-caller", (request$ as transport.Request).Caller), addToMetadata(md, "rpc-service", (request$ as transport.Request).Service), addToMetadata(md, "rpc-shard-key", (request$ as transport.Request).ShardKey), addToMetadata(md, "rpc-routing-key", (request$ as transport.Request).RoutingKey), addToMetadata(md, "rpc-routing-delegate", (request$ as transport.Request).RoutingDelegate), addToMetadata(md, "rpc-encoding", (request$ as transport.Request).Encoding), addToMetadata(md, "rpc-caller-procedure", (request$ as transport.Request).CallerProcedure)]))
		if (err != null) {
			return [md, err]
		}
	}
	return [md, addApplicationHeaders(md, ((request$ as transport.Request).Headers).clone())]
}

export function metadataToTransportRequest(md: metadata.MD): [transport.Request | $.VarRef<transport.Request> | null, $.GoError] {
	let request: transport.Request | $.VarRef<transport.Request> | null = (() => { const __goscriptLiteralField0 = transport.NewHeadersWithCapacity(metadata.MD_Len(md)); return new transport.Request({Headers: __goscriptLiteralField0}) })()
	let request$: transport.Request = request == null ? $.pointerTarget<transport.Request>(request) : (request as any).__isVarRef === true ? (request as any).value : (request as any).__goValue === undefined ? (request as any) : $.pointerTarget<transport.Request>(request)
	for (let [header, values] of md?.entries() ?? []) {
		let value: string = ""
		switch ($.sliceLen(values)) {
			case 0:
			{
				continue
				break
			}
			case 1:
			{
				value = $.arrayIndex(values!, 0)
				break
			}
			default:
			{
				return [null, yarpcerrors.InvalidArgumentErrorf("header has more than one value: %s:%v", $.arrayToSlice<any>([header, $.interfaceValue(values, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))]))]
				break
			}
		}
		header = transport.CanonicalizeHeaderKey(header)
		// skip routing header
		if ($.mapGet<string, boolean, boolean>(routingHeaders, header, false)[0]) {
			continue
		}
		switch (header) {
			case "rpc-caller":
			{
				;(request$ as transport.Request).Caller = value
				break
			}
			case "rpc-service":
			{
				;(request$ as transport.Request).Service = value
				break
			}
			case "rpc-shard-key":
			{
				;(request$ as transport.Request).ShardKey = value
				break
			}
			case "rpc-routing-key":
			{
				;(request$ as transport.Request).RoutingKey = value
				break
			}
			case "rpc-routing-delegate":
			{
				;(request$ as transport.Request).RoutingDelegate = value
				break
			}
			case "rpc-encoding":
			{
				;(request$ as transport.Request).Encoding = value
				break
			}
			case "rpc-caller-procedure":
			{
				;(request$ as transport.Request).CallerProcedure = value
				break
			}
			case "content-type":
			{
				if ($.stringEqual((request$ as transport.Request).Encoding, "")) {
					;(request$ as transport.Request).Encoding = getContentSubtype(value)
				}
				break
			}
			default:
			{
				$.assignStruct((request$ as transport.Request).Headers, $.markAsStructValue($.cloneStructValue((request$ as transport.Request).Headers)).With(header, value))
				break
			}
		}
	}
	return [request, null]
}

export function metadataToApplicationErrorMeta(responseMD: metadata.MD): transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null {
	if (responseMD == null) {
		return null
	}

	let details: string = ""
	let name: string = ""
	{
		let header: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>(responseMD, "rpc-application-error-details", null)[0]
		if ($.sliceLen(header) == 1) {
			details = $.arrayIndex(header!, 0)
		}
	}
	{
		let header: $.Slice<string> = $.mapGet<string, $.Slice<string>, $.Slice<string>>(responseMD, "rpc-application-error-name", null)[0]
		if ($.sliceLen(header) == 1) {
			name = $.arrayIndex(header!, 0)
		}
	}

	return new transport.ApplicationErrorMeta({Details: details, Name: name, Code: null})
}

export function addApplicationHeaders(md: metadata.MD, headers: transport.Headers): $.GoError {
	for (let [header, value] of $.markAsStructValue($.cloneStructValue(headers)).Items()?.entries() ?? []) {
		header = transport.CanonicalizeHeaderKey(header)
		if (isReserved(header)) {
			return yarpcerrors.InvalidArgumentErrorf("cannot use reserved header in application headers: %s", $.arrayToSlice<any>([header]))
		}
		{
			let err = addToMetadata(md, header, value)
			if (err != null) {
				return err
			}
		}
	}
	return null
}

export function getApplicationHeaders(md: metadata.MD): [transport.Headers, $.GoError] {
	if ($.len(md) == 0) {
		return [new transport.Headers(undefined, true), null]
	}
	let headers = transport.NewHeadersWithCapacity(metadata.MD_Len(md))
	for (let [header, values] of md?.entries() ?? []) {
		header = transport.CanonicalizeHeaderKey(header)
		if (isReserved(header)) {
			continue
		}
		let value: string = ""
		switch ($.sliceLen(values)) {
			case 0:
			{
				continue
				break
			}
			case 1:
			{
				value = $.arrayIndex(values!, 0)
				break
			}
			default:
			{
				return [(headers).clone(), yarpcerrors.InvalidArgumentErrorf("header has more than one value: %s:%v", $.arrayToSlice<any>([header, $.interfaceValue(values, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))]))]
				break
			}
		}
		headers = $.assignStruct(headers, $.markAsStructValue($.cloneStructValue(headers)).With(header, value))
	}
	return [(headers).clone(), null]
}

export function addToMetadata(md: metadata.MD, key: string, value: string): $.GoError {
	if ($.stringEqual(value, "")) {
		return null
	}
	{
		let [, ok] = $.mapGet<string, $.Slice<string>, $.Slice<string>>(md, key, null)
		if (ok) {
			return yarpcerrors.InvalidArgumentErrorf("duplicate key: %s", $.arrayToSlice<any>([key]))
		}
	}
	$.mapSet(md, key, $.arrayToSlice<string>([value]))
	return null
}

export function getContentSubtype(contentType: string): string {
	if (!strings.HasPrefix(contentType, "application/grpc") || ($.stringLen(contentType) == 16)) {
		return ""
	}
	switch ($.indexString(contentType, 16)) {
		case 43:
		case 59:
		{
			return $.sliceStringOrBytes(contentType, 16 + 1, undefined)
			break
		}
		default:
		{
			return ""
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function mdReadWriter_ForeachKey(md: mdReadWriter, handler: ((_p0: string, _p1: string) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
	for (const [key, values] of md?.entries() ?? []) {
		for (let __goscriptRangeTarget0 = values, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let value = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
			{
				let err = (__goscriptAwait = handler!(key, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		}
	}
	return null
}

export function mdReadWriter_Set(md: mdReadWriter, key: string, value: string): void {
	key = strings.ToLower(key)
	$.mapSet(md, key, $.arrayToSlice<string>([value]))
}

var __goscriptAwait: any
