// Generated file based on go17.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_go19 from "./go19.gs.ts"
import "@goscript/context/index.js"
import "@goscript/time/index.js"
import "./go19.gs.ts"

export let todo: context.Context | null = context.TODO()

export function __goscript_set_todo(__goscriptValue: context.Context | null): void {
	todo = __goscriptValue
}

export let background: context.Context | null = context.Background()

export function __goscript_set_background(__goscriptValue: context.Context | null): void {
	background = __goscriptValue
}

export let Canceled: $.GoError = context.Canceled

export function __goscript_set_Canceled(__goscriptValue: $.GoError): void {
	Canceled = __goscriptValue
}

export let DeadlineExceeded: $.GoError = context.DeadlineExceeded

export function __goscript_set_DeadlineExceeded(__goscriptValue: $.GoError): void {
	DeadlineExceeded = __goscriptValue
}

export function WithCancel(parent: __goscript_go19.Context | null): [__goscript_go19.Context | null, __goscript_go19.CancelFunc] {
	let ctx: __goscript_go19.Context | null = null! as __goscript_go19.Context | null
	let cancel: __goscript_go19.CancelFunc = null! as __goscript_go19.CancelFunc
	let __goscriptTuple0: any = context.WithCancel($.pointerValueOrNil(parent)!)
	ctx = __goscriptTuple0[0]
	let f = __goscriptTuple0[1]
	return [ctx, f]
}

export function WithDeadline(parent: __goscript_go19.Context | null, deadline: time.Time): [__goscript_go19.Context | null, __goscript_go19.CancelFunc] {
	let [ctx, f] = context.WithDeadline($.pointerValueOrNil(parent)!, $.markAsStructValue($.cloneStructValue(deadline)))
	return [ctx, f]
}

export function WithTimeout(parent: __goscript_go19.Context | null, timeout: time.Duration): [__goscript_go19.Context | null, __goscript_go19.CancelFunc] {
	return WithDeadline(parent, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Now())).Add(timeout))))
}

export function WithValue(parent: __goscript_go19.Context | null, key: any, val: any): __goscript_go19.Context | null {
	return context.WithValue($.pointerValueOrNil(parent)!, key, val)
}
