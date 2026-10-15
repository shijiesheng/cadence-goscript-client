// Generated file based on backoff.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"
import "@goscript/time/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/api/backoff", ["backoff.Strategy", "backoff.Backoff"])

export type Strategy = {
	Backoff(): Backoff | null | globalThis.Promise<Backoff | null>
}

$.registerInterfaceType(
	"backoff.Strategy",
	null,
	[{ name: "Backoff", args: [], returns: [{ type: "backoff.Backoff" }] }]
);

export type Backoff = {
	Duration(attempts: number): time.Duration
}

$.registerInterfaceType(
	"backoff.Backoff",
	null,
	[{ name: "Duration", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int64", "time.Duration") }] }]
);
