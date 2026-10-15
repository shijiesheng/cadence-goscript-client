// Generated file based on root.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as http from "@goscript/net/http/index.js"

import * as time from "@goscript/time/index.js"

import * as promhttp from "@goscript/github.com/prometheus/client_golang/prometheus/promhttp/index.js"

import * as push from "@goscript/go.uber.org/net/metrics/push/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as prometheus from "@goscript/github.com/prometheus/client_golang/prometheus/index.js"

import * as io_prometheus_client from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_core from "./core.gs.ts"

import type * as __goscript_counter from "./counter.gs.ts"

import type * as __goscript_gauge from "./gauge.gs.ts"

import * as __goscript_histogram from "./histogram.gs.ts"

import * as __goscript_metadata from "./metadata.gs.ts"

import * as __goscript_metrics from "./metrics.gs.ts"

import * as __goscript_push from "./push.gs.ts"

import * as __goscript_scope from "./scope.gs.ts"

import * as __goscript_snapshot from "./snapshot.gs.ts"

import * as __goscript_spec from "./spec.gs.ts"

import * as __goscript_tag from "./tag.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/net/http/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/prometheus/client_golang/prometheus/promhttp/index.js"
import "@goscript/go.uber.org/net/metrics/push/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/github.com/prometheus/client_golang/prometheus/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/sync/index.js"
import "./core.gs.ts"
import "./histogram.gs.ts"
import "./metadata.gs.ts"
import "./metrics.gs.ts"
import "./push.gs.ts"
import "./scope.gs.ts"
import "./snapshot.gs.ts"
import "./spec.gs.ts"
import "./tag.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("go.uber.org/net/metrics", ["metrics.Option", "metrics.Root"])

export type Option = {
	unimplemented(): void
}

$.registerInterfaceType(
	"metrics.Option",
	null,
	[$.methodSignature("unimplemented")]
);

export class Root {
	public get core(): __goscript_core.core | $.VarRef<__goscript_core.core> | null {
		return this._fields.core
	}

	public set core(value: __goscript_core.core | $.VarRef<__goscript_core.core> | null) {
		this._fields.core = value
	}

	public get scope(): __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null {
		return this._fields.scope
	}

	public set scope(value: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null) {
		this._fields.scope = value
	}

	public get pushing(): atomic.Bool {
		return this._fields.pushing
	}

	public set pushing(value: atomic.Bool) {
		this._fields.pushing = value
	}

	public get handler(): http.Handler | null {
		return this._fields.handler
	}

	public set handler(value: http.Handler | null) {
		this._fields.handler = value
	}

	public _fields: {
		core: __goscript_core.core | $.VarRef<__goscript_core.core> | null
		scope: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null
		pushing: atomic.Bool
		handler: http.Handler | null
	}

	constructor(init?: Partial<{core?: __goscript_core.core | $.VarRef<__goscript_core.core> | null, scope?: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, pushing?: atomic.Bool, handler?: http.Handler | null}>, __goscriptValue?: boolean) {
		this._fields = {
			core: init?.core ?? (null! as __goscript_core.core | $.VarRef<__goscript_core.core> | null),
			scope: init?.scope ?? (null! as __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null),
			pushing: init?.pushing ? init.pushing.clone() : new atomic.Bool(undefined, true),
			handler: init?.handler ?? (null! as http.Handler | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Root {
		return new Root(this, true)
	}

	public __goscriptAssign(source: Root): void {
		const target = this._fields
		const values = source._fields
		target.core = values.core
		target.scope = values.scope
		$.assignStruct(target.pushing, values.pushing)
		target.handler = $.assignFieldValue(target.handler, values.handler, "http.Handler")
	}

	public async Push(target: push.Target | null, tick: time.Duration): globalThis.Promise<[context.CancelFunc | null, $.GoError]> {
		const r: Root | $.VarRef<Root> | null = this;
		const r$: Root = r == null ? $.pointerTarget<Root>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Root>(r)
		if ((r$ as Root).pushing.Swap(true)) {
			return [(null as context.CancelFunc | null), errors.New("already pushing")]
		}
		let __goscriptShadow0: __goscript_push.pusher | $.VarRef<__goscript_push.pusher> | null = __goscript_push.newPusher((r$ as Root).core, target, tick)
		queueMicrotask(async () => { await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as __goscript_push.pusher).Start() : __goscript_push.pusher.prototype.Start.call(__goscriptShadow0)) })
		// We don't want to set c.pushing to false when we stop the push loop,
		// because that would let users start another pusher. Since pushers are
		// usually stateful, this would immediately re-push all the counter
		// increments since process startup.
		return [$.functionValue(((__receiver) => () => __receiver.Stop())($.pointerValue<__goscript_push.pusher>(__goscriptShadow0)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/net/metrics.(*pusher).Stop-fm"), null]
	}

	public Scope(): __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null {
		const r: Root | $.VarRef<Root> | null = this;
		return $.pointerValue<Root>(r).scope
	}

	public async ServeHTTP(w: http.ResponseWriter | null, req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<void> {
		const r: Root | $.VarRef<Root> | null = this;
		await $.pointerValue<Exclude<http.Handler, null>>($.pointerValue<Root>(r).handler).ServeHTTP($.pointerValueOrNil(w)!, req)
	}

	public async Snapshot(): globalThis.Promise<__goscript_snapshot.RootSnapshot | $.VarRef<__goscript_snapshot.RootSnapshot> | null> {
		const r: Root | $.VarRef<Root> | null = this;
		return $.pointerValue<__goscript_core.core>($.pointerValue<Root>(r).core).snapshot()
	}

	public Lock(): any {
		return $.pointerValue<__goscript_core.core>(this.core).RWMutex.Lock()
	}

	public RLock(): any {
		return $.pointerValue<__goscript_core.core>(this.core).RWMutex.RLock()
	}

	public RLocker(): any {
		return $.pointerValue<__goscript_core.core>(this.core).RWMutex.RLocker()
	}

	public RUnlock(): any {
		return $.pointerValue<__goscript_core.core>(this.core).RWMutex.RUnlock()
	}

	public TryLock(): any {
		return $.pointerValue<__goscript_core.core>(this.core).RWMutex.TryLock()
	}

	public TryRLock(): any {
		return $.pointerValue<__goscript_core.core>(this.core).RWMutex.TryRLock()
	}

	public Unlock(): any {
		return $.pointerValue<__goscript_core.core>(this.core).RWMutex.Unlock()
	}

	public async push(target: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_core.core>(this.core).push(target)
	}

	public async register(m: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_core.core>(this.core).register(m)
	}

	public async snapshot(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_core.core>(this.core).snapshot()
	}

	static __typeInfo = $.registerStructType(
		"metrics.Root",
		() => new Root(),
		() => [$.methodSignature("Push", [["target", "push.Target"], ["tick", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), "error"], true), $.methodSignature("Scope", [], [/* @__PURE__ */ $.pointerType("metrics.Scope")], true), $.methodSignature("ServeHTTP", [["w", "http.ResponseWriter"], ["req", /* @__PURE__ */ $.pointerType("http.Request")]], [], true), $.methodSignature("Snapshot", [], [/* @__PURE__ */ $.pointerType("metrics.RootSnapshot")], true), $.methodSignature("Lock"), $.methodSignature("RLock"), $.methodSignature("RLocker", [], ["sync.Locker"]), $.methodSignature("RUnlock"), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Unlock"), $.methodSignature("push", [["target", "push.Target"]]), $.methodSignature("register", [["m", "metrics.metric"]], ["error"]), $.methodSignature("snapshot", [], [/* @__PURE__ */ $.pointerType("metrics.RootSnapshot")])],
		Root,
		() => [/* @__PURE__ */ $.structField("core", /* @__PURE__ */ $.pointerType("metrics.core"), [0], 0, false, { pkgPath: "go.uber.org/net/metrics", anonymous: true }), /* @__PURE__ */ $.structField("scope", /* @__PURE__ */ $.pointerType("metrics.Scope"), [1], 8, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("pushing", "atomic.Bool", [2], 16, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("handler", "http.Handler", [3], 24, false, { pkgPath: "go.uber.org/net/metrics" })]
	)
}

export async function New(opts: $.Slice<Option | null>): globalThis.Promise<Root | $.VarRef<Root> | null> {
	let __goscriptShadow1: __goscript_core.core | $.VarRef<__goscript_core.core> | null = __goscript_core.newCore()
	return (await (async () => { const __goscriptLiteralField0 = __goscript_scope.newScope(__goscriptShadow1, $.makeMap<string, string>([])); const __goscriptLiteralField1 = await promhttp.HandlerFor($.pointerValue<__goscript_core.core>(__goscriptShadow1).gatherer, new promhttp.HandlerOpts({ErrorHandling: 0}, true)); return new Root({core: __goscriptShadow1, scope: __goscriptLiteralField0, handler: __goscriptLiteralField1}) })())
}
