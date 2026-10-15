// Generated file based on inbound.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as context from "@goscript/context/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as io from "@goscript/io/index.js"

import type * as iter from "@goscript/iter/index.js"

import * as __goscript_handler from "./handler.gs.ts"

import * as __goscript_header from "./header.gs.ts"

import type * as __goscript_lifecycle from "./lifecycle.gs.ts"

import * as __goscript_request from "./request.gs.ts"

import type * as __goscript_response from "./response.gs.ts"

import type * as __goscript_router from "./router.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"

import type * as __goscript_transport from "./transport.gs.ts"

import * as __goscript_type_string from "./type_string.gs.ts"
import "@goscript/io/index.js"
import "./handler.gs.ts"
import "./header.gs.ts"
import "./request.gs.ts"
import "./stream.gs.ts"
import "./type_string.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/transport", ["transport.Inbound"])

export type Inbound = {
	IsRunning(): boolean | globalThis.Promise<boolean>
	SetRouter(_p0: __goscript_router.Router | null): void
	Start(): $.GoError | globalThis.Promise<$.GoError>
	Stop(): $.GoError | globalThis.Promise<$.GoError>
	Transports(): $.Slice<__goscript_transport.Transport | null>
}

$.registerInterfaceType(
	"transport.Inbound",
	null,
	[$.methodSignature("IsRunning", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("SetRouter", ["transport.Router"]), $.methodSignature("Start", [], ["error"]), $.methodSignature("Stop", [], ["error"]), $.methodSignature("Transports", [], [/* @__PURE__ */ $.sliceType("transport.Transport")])]
);
