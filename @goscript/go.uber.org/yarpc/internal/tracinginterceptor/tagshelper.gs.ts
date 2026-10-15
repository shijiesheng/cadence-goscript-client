// Generated file based on tagshelper.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as log from "@goscript/github.com/opentracing/opentracing-go/log/index.js"
import "@goscript/runtime/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/opentracing/opentracing-go/log/index.js"

export const applicationError: string = "application_error"

export const errorNameTag: string = "error.name"

export const rpcStatusCodeTag: string = "rpc.yarpc.status_code"

export const tracingComponentName: string = "yarpc-go"

export let commonTracingTags: opentracing.Tags = $.makeMap<string, any>([["go.version", runtime.Version()], ["component", "yarpc-go"]])

export function __goscript_set_commonTracingTags(__goscriptValue: opentracing.Tags): void {
	commonTracingTags = __goscriptValue
}

export let logFieldEventError: log.Field = await log.String("event", "error")

export function __goscript_set_logFieldEventError(__goscriptValue: log.Field): void {
	$.assignStruct(logFieldEventError, __goscriptValue)
}
