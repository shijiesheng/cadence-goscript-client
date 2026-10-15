// Generated file based on logger.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as __goscript_event from "./event.gs.ts"

$.registerTypePackagePath("go.uber.org/fx/fxevent", ["fxevent.Logger", "fxevent.nopLogger"])

export type Logger = {
	LogEvent(_p0: __goscript_event.Event | null): void
}

$.registerInterfaceType(
	"fxevent.Logger",
	null,
	[$.methodSignature("LogEvent", ["fxevent.Event"])]
);

export class nopLogger {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nopLogger {
		return new nopLogger(this, true)
	}

	public __goscriptAssign(source: nopLogger): void {
	}

	public LogEvent(_p0: __goscript_event.Event | null): void {
	}

	public String(): string {
		return "NopLogger"
	}

	static __typeInfo = $.registerStructType(
		"fxevent.nopLogger",
		() => new nopLogger(),
		() => [$.methodSignature("LogEvent", ["fxevent.Event"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		nopLogger,
		() => []
	)
}

export let NopLogger: nopLogger = new nopLogger(undefined, true)

export function __goscript_set_NopLogger(__goscriptValue: nopLogger): void {
	$.assignStruct(NopLogger, __goscriptValue)
}
