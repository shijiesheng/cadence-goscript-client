// Generated file based on logging.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internalgrpclog from "@goscript/google.golang.org/grpc/internal/grpclog/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as http2 from "@goscript/golang.org/x/net/http2/index.js"

import * as hpack from "@goscript/golang.org/x/net/http2/hpack/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as channelz from "@goscript/google.golang.org/grpc/internal/channelz/index.js"

import * as grpcsync from "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"

import * as status from "@goscript/google.golang.org/grpc/internal/status/index.js"

import * as keepalive from "@goscript/google.golang.org/grpc/keepalive/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as peer from "@goscript/google.golang.org/grpc/peer/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as stats from "@goscript/google.golang.org/grpc/stats/index.js"

import * as status2 from "@goscript/google.golang.org/grpc/status/index.js"

import * as tap from "@goscript/google.golang.org/grpc/tap/index.js"

import * as net from "@goscript/net/index.js"

import * as http from "@goscript/net/http/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_bdp_estimator from "./bdp_estimator.gs.ts"

import * as __goscript_controlbuf from "./controlbuf.gs.ts"

import * as __goscript_flowcontrol from "./flowcontrol.gs.ts"

import * as __goscript_handler_server from "./handler_server.gs.ts"

import * as __goscript_http2_client from "./http2_client.gs.ts"

import * as __goscript_http2_server from "./http2_server.gs.ts"

import * as __goscript_http_util from "./http_util.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/internal/grpclog/index.js"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/golang.org/x/net/http2/index.js"
import "@goscript/golang.org/x/net/http2/hpack/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/internal/channelz/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"
import "@goscript/google.golang.org/grpc/internal/status/index.js"
import "@goscript/google.golang.org/grpc/keepalive/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/google.golang.org/grpc/peer/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/stats/index.js"
import "@goscript/google.golang.org/grpc/status/index.js"
import "@goscript/google.golang.org/grpc/tap/index.js"
import "@goscript/net/index.js"
import "@goscript/net/http/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "./bdp_estimator.gs.ts"
import "./controlbuf.gs.ts"
import "./flowcontrol.gs.ts"
import "./handler_server.gs.ts"
import "./http2_client.gs.ts"
import "./http2_server.gs.ts"
import "./http_util.gs.ts"
import "./transport.gs.ts"

export let logger: grpclog.DepthLoggerV2 | null = await grpclog.Component("transport")

export function __goscript_set_logger(__goscriptValue: grpclog.DepthLoggerV2 | null): void {
	logger = __goscriptValue
}

export async function prefixLoggerForServerTransport(p: __goscript_http2_server.http2Server | $.VarRef<__goscript_http2_server.http2Server> | null): globalThis.Promise<internalgrpclog.PrefixLogger | $.VarRef<internalgrpclog.PrefixLogger> | null> {
	return internalgrpclog.NewPrefixLogger(logger, await fmt.Sprintf("[server-transport %p] ", $.interfaceValue(p, "*transport.http2Server", /* @__PURE__ */ $.pointerType("transport.http2Server"))))
}

export async function prefixLoggerForServerHandlerTransport(p: __goscript_handler_server.serverHandlerTransport | $.VarRef<__goscript_handler_server.serverHandlerTransport> | null): globalThis.Promise<internalgrpclog.PrefixLogger | $.VarRef<internalgrpclog.PrefixLogger> | null> {
	return internalgrpclog.NewPrefixLogger(logger, await fmt.Sprintf("[server-handler-transport %p] ", $.interfaceValue(p, "*transport.serverHandlerTransport", /* @__PURE__ */ $.pointerType("transport.serverHandlerTransport"))))
}

export async function prefixLoggerForClientTransport(p: __goscript_http2_client.http2Client | $.VarRef<__goscript_http2_client.http2Client> | null): globalThis.Promise<internalgrpclog.PrefixLogger | $.VarRef<internalgrpclog.PrefixLogger> | null> {
	return internalgrpclog.NewPrefixLogger(logger, await fmt.Sprintf("[client-transport %p] ", $.interfaceValue(p, "*transport.http2Client", /* @__PURE__ */ $.pointerType("transport.http2Client"))))
}
