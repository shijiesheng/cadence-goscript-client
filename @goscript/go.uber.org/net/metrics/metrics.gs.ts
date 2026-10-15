// Generated file based on metrics.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as promproto from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as push2 from "@goscript/go.uber.org/net/metrics/push/index.js"

import type * as __goscript_metadata from "./metadata.gs.ts"

import type * as __goscript_tag from "./tag.gs.ts"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/go.uber.org/net/metrics/push/index.js"

$.registerTypePackagePath("go.uber.org/net/metrics", ["metrics.metric"])

export type metric = {
	describe(): __goscript_metadata.metadata
	proto(): promproto.MetricFamily | $.VarRef<promproto.MetricFamily> | null | globalThis.Promise<promproto.MetricFamily | $.VarRef<promproto.MetricFamily> | null>
	push(_p0: push2.Target | null): void
}

$.registerInterfaceType(
	"metrics.metric",
	null,
	[$.methodSignature("describe", [], ["metrics.metadata"]), $.methodSignature("proto", [], [/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")]), $.methodSignature("push", ["push.Target"])]
);
