// Generated file based on push.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as push from "@goscript/go.uber.org/net/metrics/push/index.js"

import * as prometheus from "@goscript/github.com/prometheus/client_golang/prometheus/index.js"

import * as io_prometheus_client from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_core from "./core.gs.ts"

import type * as __goscript_metadata from "./metadata.gs.ts"

import * as __goscript_metrics from "./metrics.gs.ts"

import * as __goscript_snapshot from "./snapshot.gs.ts"

import * as __goscript_tag from "./tag.gs.ts"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/net/metrics/push/index.js"
import "@goscript/github.com/prometheus/client_golang/prometheus/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/sync/index.js"
import "./core.gs.ts"
import "./metrics.gs.ts"
import "./snapshot.gs.ts"
import "./tag.gs.ts"

$.registerTypePackagePath("go.uber.org/net/metrics", ["metrics.pusher"])

export class pusher {
	public get core(): __goscript_core.core | $.VarRef<__goscript_core.core> | null {
		return this._fields.core
	}

	public set core(value: __goscript_core.core | $.VarRef<__goscript_core.core> | null) {
		this._fields.core = value
	}

	public get stop(): $.Channel<{}> | null {
		return this._fields.stop
	}

	public set stop(value: $.Channel<{}> | null) {
		this._fields.stop = value
	}

	public get stopped(): $.Channel<{}> | null {
		return this._fields.stopped
	}

	public set stopped(value: $.Channel<{}> | null) {
		this._fields.stopped = value
	}

	public get ticker(): time.Ticker | $.VarRef<time.Ticker> | null {
		return this._fields.ticker
	}

	public set ticker(value: time.Ticker | $.VarRef<time.Ticker> | null) {
		this._fields.ticker = value
	}

	public get target(): push.Target | null {
		return this._fields.target
	}

	public set target(value: push.Target | null) {
		this._fields.target = value
	}

	public _fields: {
		core: __goscript_core.core | $.VarRef<__goscript_core.core> | null
		stop: $.Channel<{}> | null
		stopped: $.Channel<{}> | null
		ticker: time.Ticker | $.VarRef<time.Ticker> | null
		target: push.Target | null
	}

	constructor(init?: Partial<{core?: __goscript_core.core | $.VarRef<__goscript_core.core> | null, stop?: $.Channel<{}> | null, stopped?: $.Channel<{}> | null, ticker?: time.Ticker | $.VarRef<time.Ticker> | null, target?: push.Target | null}>, __goscriptValue?: boolean) {
		this._fields = {
			core: init?.core ?? (null! as __goscript_core.core | $.VarRef<__goscript_core.core> | null),
			stop: init?.stop ?? (null! as $.Channel<{}> | null),
			stopped: init?.stopped ?? (null! as $.Channel<{}> | null),
			ticker: init?.ticker ?? (null! as time.Ticker | $.VarRef<time.Ticker> | null),
			target: init?.target ?? (null! as push.Target | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pusher {
		return new pusher(this, true)
	}

	public __goscriptAssign(source: pusher): void {
		const target = this._fields
		const values = source._fields
		target.core = values.core
		target.stop = values.stop
		target.stopped = values.stopped
		target.ticker = values.ticker
		target.target = $.assignFieldValue(target.target, values.target, "push.Target")
	}

	public async Start(): globalThis.Promise<void> {
		const p: pusher | $.VarRef<pusher> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const p$: pusher = p == null ? $.pointerTarget<pusher>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<pusher>(p)
		const __goscriptDeferArg0 = (p$ as pusher).stopped
		__defer.defer(() => { __goscriptDeferArg0!.close() })
		// When stopping, do one last export to catch any stragglers.
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (target: push.Target | null) => __receiver.push(target))($.pointerValue<__goscript_core.core>((p$ as pusher).core)), ({ kind: $.TypeKind.Function, params: ["push.Target"], results: [] } as $.FunctionTypeInfo), "go.uber.org/net/metrics.(*core).push-fm")
		const __goscriptDeferArg1 = (p$ as pusher).target
		__defer.defer(async () => { await __goscriptDeferCallee0(__goscriptDeferArg1) })

		while (true) {
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: (p$ as pusher).stop,
					onSelected: async (__goscriptSelect0Result) => {
						return $.selectVoidReturn()
					}
				},
				{
					id: 1,
					isSend: false,
					channel: $.pointerValue<time.Ticker>((p$ as pusher).ticker).C,
					onSelected: async (__goscriptSelect0Result) => {
						await __goscript_core.core.prototype.push.call((p$ as pusher).core, (p$ as pusher).target)
					}
				}
			], false)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}
		}
	}

	public async Stop(): globalThis.Promise<void> {
		const p: pusher | $.VarRef<pusher> | null = this;
		const p$: pusher = p == null ? $.pointerTarget<pusher>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<pusher>(p)
		time.Ticker.prototype.Stop.call($.pointerValue<time.Ticker>((p$ as pusher).ticker))
		void (p$ as pusher).stop!.close()
		await $.chanRecv((p$ as pusher).stopped)
	}

	static __typeInfo = $.registerStructType(
		"metrics.pusher",
		() => new pusher(),
		() => [$.methodSignature("Start", [], [], true), $.methodSignature("Stop", [], [], true)],
		pusher,
		() => [/* @__PURE__ */ $.structField("core", /* @__PURE__ */ $.pointerType("metrics.core"), [0], 0, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("stop", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [1], 8, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("stopped", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [2], 16, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("ticker", /* @__PURE__ */ $.pointerType("time.Ticker"), [3], 24, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("target", "push.Target", [4], 32, false, { pkgPath: "go.uber.org/net/metrics" })]
	)
}

export function newPusher(c: __goscript_core.core | $.VarRef<__goscript_core.core> | null, target: push.Target | null, tick: time.Duration): pusher | $.VarRef<pusher> | null {
	return (() => { const __goscriptLiteralField0 = time.NewTicker(tick); return new pusher({core: c, stop: $.makeChannel<{}>(0, {}, "both"), stopped: $.makeChannel<{}>(0, {}, "both"), ticker: __goscriptLiteralField0, target: target}) })()
}
