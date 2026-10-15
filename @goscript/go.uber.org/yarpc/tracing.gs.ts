// Generated file based on tracing.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as __goscript_version from "./version.gs.ts"
import "@goscript/runtime/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "./version.gs.ts"

export var OpentracingTags: opentracing.Tags

export function __goscript_init_OpentracingTags(): void {
	if (((OpentracingTags) as any) === undefined) {
		OpentracingTags = $.makeMap<string, any>([["yarpc.version", "1.0.0-dev"], ["go.version", runtime.Version()], ["component", "yarpc-go"]])
	}
}

export function __goscript_get_OpentracingTags(): opentracing.Tags {
	if (((OpentracingTags) as any) === undefined) {
		__goscript_init_OpentracingTags()
	}
	return OpentracingTags
}

export function __goscript_set_OpentracingTags(__goscriptValue: opentracing.Tags): void {
	OpentracingTags = __goscriptValue
}
