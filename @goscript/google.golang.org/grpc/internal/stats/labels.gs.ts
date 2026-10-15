// Generated file based on labels.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"
import "@goscript/context/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/stats", ["stats.Labels", "stats.labelsKey"])

export class Labels {
	// TelemetryLabels are the telemetry labels to record.
	public get TelemetryLabels(): globalThis.Map<string, string> | null {
		return this._fields.TelemetryLabels
	}

	public set TelemetryLabels(value: globalThis.Map<string, string> | null) {
		this._fields.TelemetryLabels = value
	}

	public _fields: {
		TelemetryLabels: globalThis.Map<string, string> | null
	}

	constructor(init?: Partial<{TelemetryLabels?: globalThis.Map<string, string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			TelemetryLabels: init?.TelemetryLabels ?? (null! as globalThis.Map<string, string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Labels {
		return new Labels(this, true)
	}

	public __goscriptAssign(source: Labels): void {
		const target = this._fields
		const values = source._fields
		target.TelemetryLabels = values.TelemetryLabels
	}

	static __typeInfo = $.registerStructType(
		"stats.Labels",
		() => new Labels(),
		() => [],
		Labels,
		() => [/* @__PURE__ */ $.structField("TelemetryLabels", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [0], 0, true)]
	)
}

export class labelsKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): labelsKey {
		return new labelsKey(this, true)
	}

	public __goscriptAssign(source: labelsKey): void {
	}

	static __typeInfo = $.registerStructType(
		"stats.labelsKey",
		() => new labelsKey(),
		() => [],
		labelsKey,
		() => []
	)
}

export async function GetLabels(ctx: context.Context | null): globalThis.Promise<Labels | $.VarRef<Labels> | null> {
	let __goscriptTuple0: any = $.typeAssertTuple<Labels | $.VarRef<Labels> | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new labelsKey(undefined, true), "stats.labelsKey", "stats.labelsKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("stats.Labels"))
	let labels: Labels | $.VarRef<Labels> | null = __goscriptTuple0[0]
	return labels
}

export function SetLabels(ctx: context.Context | null, labels: Labels | $.VarRef<Labels> | null): context.Context | null {
	// could also append
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new labelsKey(undefined, true), "stats.labelsKey", "stats.labelsKey"), $.interfaceValue(labels, "*stats.Labels", /* @__PURE__ */ $.pointerType("stats.Labels")))
}

var __goscriptAwait: any
