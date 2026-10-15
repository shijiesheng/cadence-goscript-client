// Generated file based on call.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import * as balancer from "@goscript/google.golang.org/grpc/balancer/index.js"

import * as channelz from "@goscript/google.golang.org/grpc/channelz/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as encoding from "@goscript/google.golang.org/grpc/encoding/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import * as backoff from "@goscript/google.golang.org/grpc/internal/backoff/index.js"

import * as gracefulswitch from "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"

import * as binarylog from "@goscript/google.golang.org/grpc/internal/binarylog/index.js"

import * as channelz2 from "@goscript/google.golang.org/grpc/internal/channelz/index.js"

import * as grpcsync from "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"

import * as idle from "@goscript/google.golang.org/grpc/internal/idle/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/internal/resolver/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"

import * as stats from "@goscript/google.golang.org/grpc/internal/stats/index.js"

import * as transport from "@goscript/google.golang.org/grpc/internal/transport/index.js"

import * as keepalive from "@goscript/google.golang.org/grpc/keepalive/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import type * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as resolver2 from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as serviceconfig2 from "@goscript/google.golang.org/grpc/serviceconfig/index.js"

import * as stats2 from "@goscript/google.golang.org/grpc/stats/index.js"

import type * as io from "@goscript/io/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_balancer_wrapper from "./balancer_wrapper.gs.ts"

import * as __goscript_clientconn from "./clientconn.gs.ts"

import * as __goscript_codec from "./codec.gs.ts"

import * as __goscript_dialoptions from "./dialoptions.gs.ts"

import * as __goscript_interceptor from "./interceptor.gs.ts"

import * as __goscript_picker_wrapper from "./picker_wrapper.gs.ts"

import * as __goscript_resolver_wrapper from "./resolver_wrapper.gs.ts"

import * as __goscript_rpc_util from "./rpc_util.gs.ts"

import * as __goscript_service_config from "./service_config.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"

import * as __goscript_trace from "./trace.gs.ts"
import "@goscript/context/index.js"
import "@goscript/google.golang.org/grpc/balancer/index.js"
import "@goscript/google.golang.org/grpc/channelz/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/encoding/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/backoff/index.js"
import "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"
import "@goscript/google.golang.org/grpc/internal/binarylog/index.js"
import "@goscript/google.golang.org/grpc/internal/channelz/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"
import "@goscript/google.golang.org/grpc/internal/idle/index.js"
import "@goscript/google.golang.org/grpc/internal/resolver/index.js"
import "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"
import "@goscript/google.golang.org/grpc/internal/stats/index.js"
import "@goscript/google.golang.org/grpc/internal/transport/index.js"
import "@goscript/google.golang.org/grpc/keepalive/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"
import "@goscript/google.golang.org/grpc/stats/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "./balancer_wrapper.gs.ts"
import "./clientconn.gs.ts"
import "./codec.gs.ts"
import "./dialoptions.gs.ts"
import "./interceptor.gs.ts"
import "./picker_wrapper.gs.ts"
import "./resolver_wrapper.gs.ts"
import "./rpc_util.gs.ts"
import "./service_config.gs.ts"
import "./stream.gs.ts"
import "./trace.gs.ts"

export function combine(o1: $.Slice<__goscript_rpc_util.CallOption | null>, o2: $.Slice<__goscript_rpc_util.CallOption | null>): $.Slice<__goscript_rpc_util.CallOption | null> {
	// we don't use append because o1 could have extra capacity whose
	// elements would be overwritten, which could cause inadvertent
	// sharing (and race conditions) between concurrent calls
	if ($.sliceLen(o1) == 0) {
		return o2
	} else {
		if ($.sliceLen(o2) == 0) {
			return o1
		}
	}
	let ret: $.Slice<__goscript_rpc_util.CallOption | null> = $.makeSlice<__goscript_rpc_util.CallOption | null>($.sliceLen(o1) + $.sliceLen(o2))
	$.copy(ret, o1)
	$.copy($.goSlice(ret, $.sliceLen(o1), undefined), o2)
	return ret
}

export async function Invoke(ctx: context.Context | null, method: string, args: any, reply: any, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>): globalThis.Promise<$.GoError> {
	return (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? ((cc as any) as __goscript_clientconn.ClientConn).Invoke(ctx, method, args, reply, opts) : __goscript_clientconn.ClientConn.prototype.Invoke.call(cc, ctx, method, args, reply, opts))
}

export var unaryStreamDesc: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null

export function __goscript_init_unaryStreamDesc(): void {
	if (((unaryStreamDesc) as any) === undefined) {
		unaryStreamDesc = new __goscript_stream.StreamDesc({ServerStreams: false, ClientStreams: false})
	}
}

export function __goscript_get_unaryStreamDesc(): __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null {
	if (((unaryStreamDesc) as any) === undefined) {
		__goscript_init_unaryStreamDesc()
	}
	return unaryStreamDesc
}

export function __goscript_set_unaryStreamDesc(__goscriptValue: __goscript_stream.StreamDesc | $.VarRef<__goscript_stream.StreamDesc> | null): void {
	unaryStreamDesc = __goscriptValue
}

export async function invoke(ctx: context.Context | null, method: string, req: any, reply: any, cc: __goscript_clientconn.ClientConn | $.VarRef<__goscript_clientconn.ClientConn> | null, opts: $.Slice<__goscript_rpc_util.CallOption | null>): globalThis.Promise<$.GoError> {
	let [cs, err] = await __goscript_stream.newClientStream(ctx, __goscript_get_unaryStreamDesc(), cc, method, opts)
	if (err != null) {
		return err
	}
	{
		let __goscriptShadow0 = (__goscriptAwait = (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? (cs as Exclude<__goscript_stream.ClientStream, null>) : $.pointerValue<Exclude<__goscript_stream.ClientStream, null>>(cs)).SendMsg(req), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (__goscriptShadow0 != null) {
			return __goscriptShadow0
		}
	}
	return (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? (cs as Exclude<__goscript_stream.ClientStream, null>) : $.pointerValue<Exclude<__goscript_stream.ClientStream, null>>(cs)).RecvMsg(reply)
}

var __goscriptAwait: any
