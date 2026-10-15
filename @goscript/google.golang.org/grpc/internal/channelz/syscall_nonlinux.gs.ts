// Generated file based on syscall_nonlinux.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as __goscript_logging from "./logging.gs.ts"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "./logging.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/channelz", ["channelz.SocketOptionData"])

export class SocketOptionData {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SocketOptionData {
		return new SocketOptionData(this, true)
	}

	public __goscriptAssign(source: SocketOptionData): void {
	}

	public async Getsockopt(_p0: number): globalThis.Promise<void> {
		const s: SocketOptionData | $.VarRef<SocketOptionData> | null = this;
		await once.value.Do($.functionValue(async (): globalThis.Promise<void> => {
			void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_logging.logger).Warning($.arrayToSlice<any>(["Channelz: socket options are not supported on non-linux environments"])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	}

	static __typeInfo = $.registerStructType(
		"channelz.SocketOptionData",
		() => new SocketOptionData(),
		() => [$.methodSignature("Getsockopt", [/* @__PURE__ */ $.basicType("uintptr")], [], true)],
		SocketOptionData,
		() => []
	)
}

export let once: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_once(__goscriptValue: sync.Once): void {
	$.assignStruct(once.value, __goscriptValue)
}

export function GetSocketOption(_p0: any): SocketOptionData | $.VarRef<SocketOptionData> | null {
	return null
}

var __goscriptAwait: any
