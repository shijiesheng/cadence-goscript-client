// Generated file based on syscall_nonlinux.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/syscall", ["syscall.Rusage"])

export class Rusage {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Rusage {
		return new Rusage(this, true)
	}

	public __goscriptAssign(source: Rusage): void {
	}

	static __typeInfo = $.registerStructType(
		"syscall.Rusage",
		() => new Rusage(),
		() => [],
		Rusage,
		() => []
	)
}

export let once: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_once(__goscriptValue: sync.Once): void {
	$.assignStruct(once.value, __goscriptValue)
}

export let logger: grpclog.DepthLoggerV2 | null = await grpclog.Component("core")

export function __goscript_set_logger(__goscriptValue: grpclog.DepthLoggerV2 | null): void {
	logger = __goscriptValue
}

export async function log(): globalThis.Promise<void> {
	await once.value.Do($.functionValue(async (): globalThis.Promise<void> => {
		void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Info($.arrayToSlice<any>(["CPU time info is unavailable on non-linux environments."])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
}

export async function GetCPUTime(): globalThis.Promise<bigint> {
	await log()
	return 0n
}

export async function GetRusage(): globalThis.Promise<Rusage | $.VarRef<Rusage> | null> {
	await log()
	return null
}

export async function CPUTimeDiff(_p0: Rusage | $.VarRef<Rusage> | null, _p1: Rusage | $.VarRef<Rusage> | null): globalThis.Promise<[number, number]> {
	await log()
	return [0, 0]
}

export async function SetTCPUserTimeout(_p0: net.Conn | null, _p1: time.Duration): globalThis.Promise<$.GoError> {
	await log()
	return null
}

export async function GetTCPUserTimeout(_p0: net.Conn | null): globalThis.Promise<[number, $.GoError]> {
	await log()
	return [-1, null]
}

var __goscriptAwait: any
