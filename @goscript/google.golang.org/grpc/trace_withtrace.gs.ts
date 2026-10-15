// Generated file based on trace_withtrace.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as t from "@goscript/golang.org/x/net/trace/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import * as __goscript_trace from "./trace.gs.ts"
import "@goscript/context/index.js"
import "@goscript/golang.org/x/net/trace/index.js"
import "./trace.gs.ts"

export async function newTrace(family: string, title: string): globalThis.Promise<__goscript_trace.traceLog | null> {
	return (await t.New(family, title) as __goscript_trace.traceLog | null)
}

export function newTraceContext(ctx: context.Context | null, tr: __goscript_trace.traceLog | null): context.Context | null {
	return t.NewContext(ctx, (tr as t.Trace | null))
}

export async function newTraceEventLog(family: string, title: string): globalThis.Promise<__goscript_trace.traceEventLog | null> {
	return (await t.NewEventLog(family, title) as __goscript_trace.traceEventLog | null)
}
