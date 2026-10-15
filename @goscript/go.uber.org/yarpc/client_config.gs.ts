// Generated file based on client_config.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as context from "@goscript/context/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as metrics from "@goscript/go.uber.org/net/metrics/index.js"

import * as middleware from "@goscript/go.uber.org/yarpc/api/middleware/index.js"

import type * as introspection from "@goscript/go.uber.org/yarpc/internal/introspection/index.js"

import * as lifecycle from "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_dispatcher from "./dispatcher.gs.ts"

import * as __goscript_dispatcher_introspection from "./dispatcher_introspection.gs.ts"

import type * as __goscript_dispatcher_startup from "./dispatcher_startup.gs.ts"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/go.uber.org/net/metrics/index.js"
import "@goscript/go.uber.org/yarpc/api/middleware/index.js"
import "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/sync/index.js"
import "./dispatcher.gs.ts"
import "./dispatcher_introspection.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc", ["yarpc.ClientConfig"])

export type ClientConfig = {
	ClientConfig(service: string): transport.ClientConfig | null | globalThis.Promise<transport.ClientConfig | null>
}

$.registerInterfaceType(
	"yarpc.ClientConfig",
	null,
	[$.methodSignature("ClientConfig", [["service", /* @__PURE__ */ $.basicType("string")]], ["transport.ClientConfig"])]
);
