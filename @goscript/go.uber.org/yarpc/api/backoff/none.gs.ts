// Generated file based on none.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript_backoff from "./backoff.gs.ts"
import "@goscript/time/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/api/backoff", ["backoff.none"])

export class none {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): none {
		return new none(this, true)
	}

	public __goscriptAssign(source: none): void {
	}

	public Backoff(): __goscript_backoff.Backoff | null {
		const n: none | $.VarRef<none> | null = this;
		return $.interfaceValue<__goscript_backoff.Backoff | null>(n, "*backoff.none", /* @__PURE__ */ $.pointerType("backoff.none"))
	}

	public Duration(attempts: number): time.Duration {
		return 0n
	}

	static __typeInfo = $.registerStructType(
		"backoff.none",
		() => new none(),
		() => [{ name: "Backoff", args: [], returns: [{ type: "backoff.Backoff" }], pointerReceiver: true }, { name: "Duration", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int64", "time.Duration") }], pointerReceiver: true }],
		none,
		() => []
	)
}

export let None: __goscript_backoff.Strategy | null = $.interfaceValue<__goscript_backoff.Strategy | null>(new none(), "*backoff.none", /* @__PURE__ */ $.pointerType("backoff.none"))

export function __goscript_set_None(__goscriptValue: __goscript_backoff.Strategy | null): void {
	None = __goscriptValue
}
