// Generated file based on field.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as log from "@goscript/github.com/opentracing/opentracing-go/log/index.js"

import * as __goscript_tags from "./tags.gs.ts"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/opentracing/opentracing-go/log/index.js"
import "./tags.gs.ts"

export async function LogError(span: opentracing.Span | null, err: $.GoError, fields: $.Slice<log.Field>): globalThis.Promise<void> {
	await __goscript_tags.BoolTagName_Set(__goscript_tags.Error, span, true)
	let ef: $.Slice<log.Field> = $.arrayToSlice<log.Field>([log.Event("error"), log.Error(err)])
	ef = $.appendSlice(ef, fields)
	void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).LogFields(ef), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

var __goscriptAwait: any
