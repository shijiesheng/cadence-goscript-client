// Generated file based on context.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as internal from "@goscript/go.uber.org/cadence/internal/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/go.uber.org/cadence/internal/index.js"

export type Context = internal.Context | null

export type CancelFunc = (() => void) | null

export let ErrCanceled: internal.CanceledError | $.VarRef<internal.CanceledError> | null = internal.__goscript_get_ErrCanceled()

export function __goscript_set_ErrCanceled(__goscriptValue: internal.CanceledError | $.VarRef<internal.CanceledError> | null): void {
	ErrCanceled = __goscriptValue
}

export let ErrDeadlineExceeded: internal.TimeoutError | $.VarRef<internal.TimeoutError> | null = internal.__goscript_get_ErrDeadlineExceeded()

export function __goscript_set_ErrDeadlineExceeded(__goscriptValue: internal.TimeoutError | $.VarRef<internal.TimeoutError> | null): void {
	ErrDeadlineExceeded = __goscriptValue
}

export async function WithCancel(parent: Context | null): globalThis.Promise<[Context | null, CancelFunc]> {
	let ctx: Context | null = null! as Context | null
	let cancel: CancelFunc = null! as CancelFunc
	return internal.WithCancel(parent)
}

export function WithValue(parent: Context | null, key: any, val: any): Context | null {
	return internal.WithValue(parent, key, val)
}

export async function NewDisconnectedContext(parent: Context | null): globalThis.Promise<[Context | null, CancelFunc]> {
	let ctx: Context | null = null! as Context | null
	let cancel: CancelFunc = null! as CancelFunc
	return internal.NewDisconnectedContext(parent)
}

export async function GetSpanContext(ctx: Context | null): globalThis.Promise<opentracing.SpanContext | null> {
	return internal.GetSpanContext(ctx)
}

export function WithSpanContext(ctx: Context | null, spanContext: opentracing.SpanContext | null): Context | null {
	return internal.WithSpanContext(ctx, spanContext)
}
