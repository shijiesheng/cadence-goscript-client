// Generated file based on context.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import type * as time from "@goscript/time/index.js"

import * as __goscript_clockwork from "./clockwork.gs.ts"

import type * as __goscript_ticker from "./ticker.gs.ts"

import type * as __goscript_timer from "./timer.gs.ts"
import "@goscript/context/index.js"
import "./clockwork.gs.ts"

$.registerTypePackagePath("github.com/jonboulle/clockwork", ["clockwork.contextKey"])

export type contextKey = string

export let keyClock: contextKey = "clock"

export function __goscript_set_keyClock(__goscriptValue: contextKey): void {
	keyClock = __goscriptValue
}

export function AddToContext(ctx: context.Context | null, clock: __goscript_clockwork.Clock | null): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.namedValueInterfaceValue<any>(keyClock, "clockwork.contextKey", {}, /* @__PURE__ */ $.basicType("string", "clockwork.contextKey")), (clock as any))
}

export async function FromContext(ctx: context.Context | null): globalThis.Promise<__goscript_clockwork.Clock | null> {
	{
		let [clock, ok] = $.typeAssertTuple<__goscript_clockwork.Clock | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>(keyClock, "clockwork.contextKey", {}, /* @__PURE__ */ $.basicType("string", "clockwork.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "clockwork.Clock")
		if (ok) {
			return clock
		}
	}
	return __goscript_clockwork.NewRealClock()
}

var __goscriptAwait: any
