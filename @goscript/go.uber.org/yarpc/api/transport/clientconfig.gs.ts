// Generated file based on clientconfig.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as context from "@goscript/context/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as io from "@goscript/io/index.js"

import type * as iter from "@goscript/iter/index.js"

import type * as __goscript_ack from "./ack.gs.ts"

import * as __goscript_header from "./header.gs.ts"

import type * as __goscript_lifecycle from "./lifecycle.gs.ts"

import type * as __goscript_outbound from "./outbound.gs.ts"

import * as __goscript_request from "./request.gs.ts"

import * as __goscript_response from "./response.gs.ts"

import type * as __goscript_transport from "./transport.gs.ts"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/io/index.js"
import "./header.gs.ts"
import "./request.gs.ts"
import "./response.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/transport", ["transport.ClientConfigProvider", "transport.ClientConfig"])

export type ClientConfigProvider = {
	ClientConfig(service: string): ClientConfig | null | globalThis.Promise<ClientConfig | null>
}

$.registerInterfaceType(
	"transport.ClientConfigProvider",
	null,
	[$.methodSignature("ClientConfig", [["service", /* @__PURE__ */ $.basicType("string")]], ["transport.ClientConfig"])]
);

export type ClientConfig = {
	Caller(): string
	GetOnewayOutbound(): __goscript_outbound.OnewayOutbound | null | globalThis.Promise<__goscript_outbound.OnewayOutbound | null>
	GetUnaryOutbound(): __goscript_outbound.UnaryOutbound | null | globalThis.Promise<__goscript_outbound.UnaryOutbound | null>
	Service(): string
}

$.registerInterfaceType(
	"transport.ClientConfig",
	null,
	[$.methodSignature("Caller", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("GetOnewayOutbound", [], ["transport.OnewayOutbound"]), $.methodSignature("GetUnaryOutbound", [], ["transport.UnaryOutbound"]), $.methodSignature("Service", [], [/* @__PURE__ */ $.basicType("string")])]
);
