// Generated file based on connectivity.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

$.registerTypePackagePath("google.golang.org/grpc/connectivity", ["connectivity.State", "connectivity.ServingMode"])

export type State = number

$.registerNamedValueType(
	"connectivity.State",
	{String: (receiver: any, ...args: any[]) => (State_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*connectivity.State",
	{String: (receiver: any, ...args: any[]) => (State_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type ServingMode = number

$.registerNamedValueType(
	"connectivity.ServingMode",
	{String: (receiver: any, ...args: any[]) => (ServingMode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*connectivity.ServingMode",
	{String: (receiver: any, ...args: any[]) => (ServingMode_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export const Idle: State = 0

export const Connecting: State = 1

export const Ready: State = 2

export const TransientFailure: State = 3

export const Shutdown: State = 4

export const ServingModeStarting: ServingMode = 0

export const ServingModeServing: ServingMode = 1

export const ServingModeNotServing: ServingMode = 2

export let logger: grpclog.DepthLoggerV2 | null = await grpclog.Component("core")

export function __goscript_set_logger(__goscriptValue: grpclog.DepthLoggerV2 | null): void {
	logger = __goscriptValue
}

export async function State_String(s: State): globalThis.Promise<string> {
	switch (s) {
		case 0:
		{
			return "IDLE"
			break
		}
		case 1:
		{
			return "CONNECTING"
			break
		}
		case 2:
		{
			return "READY"
			break
		}
		case 3:
		{
			return "TRANSIENT_FAILURE"
			break
		}
		case 4:
		{
			return "SHUTDOWN"
			break
		}
		default:
		{
			void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Errorf("unknown connectivity state: %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(s, "connectivity.State", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return "INVALID_STATE"
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function ServingMode_String(s: ServingMode): globalThis.Promise<string> {
	switch (s) {
		case 0:
		{
			return "STARTING"
			break
		}
		case 1:
		{
			return "SERVING"
			break
		}
		case 2:
		{
			return "NOT_SERVING"
			break
		}
		default:
		{
			void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Errorf("unknown serving mode: %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(s, "connectivity.ServingMode", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return "INVALID_MODE"
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (State_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "connectivity.State"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (ServingMode_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int", "connectivity.ServingMode"))
}

var __goscriptAwait: any
