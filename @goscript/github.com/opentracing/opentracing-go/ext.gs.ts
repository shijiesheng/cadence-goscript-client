// Generated file based on ext.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as log from "@goscript/github.com/opentracing/opentracing-go/log/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_span from "./span.gs.ts"

import * as __goscript_tracer from "./tracer.gs.ts"
import "@goscript/context/index.js"
import "@goscript/github.com/opentracing/opentracing-go/log/index.js"
import "@goscript/time/index.js"
import "./span.gs.ts"
import "./tracer.gs.ts"

$.registerTypePackagePath("github.com/opentracing/opentracing-go", ["opentracing.TracerContextWithSpanExtension"])

export type TracerContextWithSpanExtension = {
	ContextWithSpanHook(ctx: context.Context | null, span: __goscript_span.Span | null): context.Context | null
}

$.registerInterfaceType(
	"opentracing.TracerContextWithSpanExtension",
	null,
	[$.methodSignature("ContextWithSpanHook", [["ctx", "context.Context"], ["span", "opentracing.Span"]], ["context.Context"])]
);
