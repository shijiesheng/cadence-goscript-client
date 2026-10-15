// Generated file based on logging.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as __goscript_channelmap from "./channelmap.gs.ts"

import * as __goscript_trace from "./trace.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "./channelmap.gs.ts"
import "./trace.gs.ts"

export let logger: grpclog.DepthLoggerV2 | null = await grpclog.Component("channelz")

export function __goscript_set_logger(__goscriptValue: grpclog.DepthLoggerV2 | null): void {
	logger = __goscriptValue
}

export async function Info(l: grpclog.DepthLoggerV2 | null, e: __goscript_channelmap.Entity | null, args: $.Slice<any>): globalThis.Promise<void> {
	await __goscript_trace.AddTraceEvent(l, e, 1, (await (async () => { const __goscriptLiteralField0 = await fmt.Sprint(...(args ?? [])); return new __goscript_trace.TraceEvent({Desc: __goscriptLiteralField0, Severity: 1}) })()))
}

export async function Infof(l: grpclog.DepthLoggerV2 | null, e: __goscript_channelmap.Entity | null, format: string, args: $.Slice<any>): globalThis.Promise<void> {
	await __goscript_trace.AddTraceEvent(l, e, 1, (await (async () => { const __goscriptLiteralField1 = await fmt.Sprintf(format, ...(args ?? [])); return new __goscript_trace.TraceEvent({Desc: __goscriptLiteralField1, Severity: 1}) })()))
}

export async function Warning(l: grpclog.DepthLoggerV2 | null, e: __goscript_channelmap.Entity | null, args: $.Slice<any>): globalThis.Promise<void> {
	await __goscript_trace.AddTraceEvent(l, e, 1, (await (async () => { const __goscriptLiteralField2 = await fmt.Sprint(...(args ?? [])); return new __goscript_trace.TraceEvent({Desc: __goscriptLiteralField2, Severity: 2}) })()))
}

export async function Warningf(l: grpclog.DepthLoggerV2 | null, e: __goscript_channelmap.Entity | null, format: string, args: $.Slice<any>): globalThis.Promise<void> {
	await __goscript_trace.AddTraceEvent(l, e, 1, (await (async () => { const __goscriptLiteralField3 = await fmt.Sprintf(format, ...(args ?? [])); return new __goscript_trace.TraceEvent({Desc: __goscriptLiteralField3, Severity: 2}) })()))
}

export async function Error(l: grpclog.DepthLoggerV2 | null, e: __goscript_channelmap.Entity | null, args: $.Slice<any>): globalThis.Promise<void> {
	await __goscript_trace.AddTraceEvent(l, e, 1, (await (async () => { const __goscriptLiteralField4 = await fmt.Sprint(...(args ?? [])); return new __goscript_trace.TraceEvent({Desc: __goscriptLiteralField4, Severity: 3}) })()))
}

export async function Errorf(l: grpclog.DepthLoggerV2 | null, e: __goscript_channelmap.Entity | null, format: string, args: $.Slice<any>): globalThis.Promise<void> {
	await __goscript_trace.AddTraceEvent(l, e, 1, (await (async () => { const __goscriptLiteralField5 = await fmt.Sprintf(format, ...(args ?? [])); return new __goscript_trace.TraceEvent({Desc: __goscriptLiteralField5, Severity: 3}) })()))
}
