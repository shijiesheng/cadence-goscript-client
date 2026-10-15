// Generated file based on core.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sync from "@goscript/sync/index.js"

import * as prometheus from "@goscript/github.com/prometheus/client_golang/prometheus/index.js"

import * as promproto from "@goscript/github.com/prometheus/client_model/go/index.js"

import * as push2 from "@goscript/go.uber.org/net/metrics/push/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_metadata from "./metadata.gs.ts"

import * as __goscript_metrics from "./metrics.gs.ts"

import * as __goscript_snapshot from "./snapshot.gs.ts"

import * as __goscript_tag from "./tag.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/sync/index.js"
import "@goscript/github.com/prometheus/client_golang/prometheus/index.js"
import "@goscript/github.com/prometheus/client_model/go/index.js"
import "@goscript/go.uber.org/net/metrics/push/index.js"
import "@goscript/time/index.js"
import "./metadata.gs.ts"
import "./metrics.gs.ts"
import "./snapshot.gs.ts"
import "./tag.gs.ts"

$.registerTypePackagePath("go.uber.org/net/metrics", ["metrics.core"])

export class core {
	public get RWMutex(): sync.RWMutex {
		return this._fields.RWMutex
	}

	public set RWMutex(value: sync.RWMutex) {
		this._fields.RWMutex = value
	}

	public get dimsByName(): globalThis.Map<string, string> | null {
		return this._fields.dimsByName
	}

	public set dimsByName(value: globalThis.Map<string, string> | null) {
		this._fields.dimsByName = value
	}

	public get ids(): globalThis.Map<string, {}> | null {
		return this._fields.ids
	}

	public set ids(value: globalThis.Map<string, {}> | null) {
		this._fields.ids = value
	}

	public get metrics(): $.Slice<__goscript_metrics.metric | null> {
		return this._fields.metrics
	}

	public set metrics(value: $.Slice<__goscript_metrics.metric | null>) {
		this._fields.metrics = value
	}

	public get gatherer(): prometheus.Gatherer | null {
		return this._fields.gatherer
	}

	public set gatherer(value: prometheus.Gatherer | null) {
		this._fields.gatherer = value
	}

	public _fields: {
		RWMutex: sync.RWMutex
		dimsByName: globalThis.Map<string, string> | null
		ids: globalThis.Map<string, {}> | null
		metrics: $.Slice<__goscript_metrics.metric | null>
		gatherer: prometheus.Gatherer | null
	}

	constructor(init?: Partial<{RWMutex?: sync.RWMutex, dimsByName?: globalThis.Map<string, string> | null, ids?: globalThis.Map<string, {}> | null, metrics?: $.Slice<__goscript_metrics.metric | null>, gatherer?: prometheus.Gatherer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			RWMutex: init?.RWMutex ? $.markAsStructValue($.cloneStructValue(init.RWMutex)) : $.markAsStructValue(new sync.RWMutex()),
			dimsByName: init?.dimsByName ?? (null! as globalThis.Map<string, string> | null),
			ids: init?.ids ?? (null! as globalThis.Map<string, {}> | null),
			metrics: init?.metrics ?? (null! as $.Slice<__goscript_metrics.metric | null>),
			gatherer: init?.gatherer ?? (null! as prometheus.Gatherer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): core {
		return new core(this, true)
	}

	public __goscriptAssign(source: core): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.RWMutex, values.RWMutex)
		target.dimsByName = values.dimsByName
		target.ids = values.ids
		target.metrics = values.metrics
		target.gatherer = $.assignFieldValue(target.gatherer, values.gatherer, "prometheus.Gatherer")
	}

	public async push(target: push2.Target | null): globalThis.Promise<void> {
		const c: core | $.VarRef<core> | null = this;
		await $.pointerValue<core>(c).RWMutex.RLock()
		for (let __goscriptRangeTarget0 = $.pointerValue<core>(c).metrics, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let m = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_metrics.metric | null)
			void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_metrics.metric, null>) : $.pointerValue<Exclude<__goscript_metrics.metric, null>>(m)).push(target), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		$.pointerValue<core>(c).RWMutex.RUnlock()
	}

	public async register(m: __goscript_metrics.metric | null): globalThis.Promise<$.GoError> {
		let c: core | $.VarRef<core> | null = this;
		using __defer = new $.DisposableStack()
		const c$: core = c == null ? $.pointerTarget<core>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<core>(c)
		let id: __goscript_tag.digester | $.VarRef<__goscript_tag.digester> | null = await __goscript_tag.newDigester()
		__defer.defer(() => { (id !== null && (id as any).__isVarRef !== true && (id as any).__goValue === undefined ? ((id as any) as __goscript_tag.digester).free() : __goscript_tag.digester.prototype.free.call(id)) })

		let meta = (((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_metrics.metric, null>) : $.pointerValue<Exclude<__goscript_metrics.metric, null>>(m)).describe(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_metadata.metadata)).clone()
		meta.writeID(id)

		await (c$ as core).RWMutex.Lock()
		{
			let [existing, ok] = $.mapGet<string, string, string>((c$ as core).dimsByName, $.pointerValue<string>(meta.Name), "")
			if (ok && (!$.stringEqual(existing, meta.Dims))) {
				void (c$ as core).RWMutex.Unlock()
				return fmt.Errorf($.concatString("a metric with name %q and different tag ", "names is already registered"), $.pointerValue<string>(meta.Name))
			}
		}
		{
			let [, ok] = $.mapGet<string, {}, {}>((c$ as core).ids, $.bytesToString((id !== null && (id as any).__isVarRef !== true && (id as any).__goValue === undefined ? ((id as any) as __goscript_tag.digester).digest() : __goscript_tag.digester.prototype.digest.call(id))), {})
			if (ok) {
				void (c$ as core).RWMutex.Unlock()
				return fmt.Errorf($.concatString("a metric with name %q and the same constant ", "tag names and values is already registered"), $.pointerValue<string>(meta.Name))
			}
		}
		$.mapSet((c$ as core).dimsByName, $.pointerValue<string>(meta.Name), meta.Dims)
		$.mapSet((c$ as core).ids, $.bytesToString((id !== null && (id as any).__isVarRef !== true && (id as any).__goValue === undefined ? ((id as any) as __goscript_tag.digester).digest() : __goscript_tag.digester.prototype.digest.call(id))), {});
		;(c$ as core).metrics = $.appendOne((c$ as core).metrics, m, $.appendZeros.nil)
		void (c$ as core).RWMutex.Unlock()

		return null
	}

	public async snapshot(): globalThis.Promise<__goscript_snapshot.RootSnapshot | $.VarRef<__goscript_snapshot.RootSnapshot> | null> {
		const c: core | $.VarRef<core> | null = this;
		using __defer = new $.DisposableStack()
		await $.pointerValue<core>(c).RWMutex.RLock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<core>(c).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		let s: __goscript_snapshot.RootSnapshot | $.VarRef<__goscript_snapshot.RootSnapshot> | null = new __goscript_snapshot.RootSnapshot()
		for (let __goscriptRangeTarget1 = $.pointerValue<core>(c).metrics, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let m = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_metrics.metric | null)
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_snapshot.RootSnapshot).add(m) : __goscript_snapshot.RootSnapshot.prototype.add.call(s, m))
		}
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_snapshot.RootSnapshot).sort() : __goscript_snapshot.RootSnapshot.prototype.sort.call(s))
		return s
	}

	public Lock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Lock()
	}

	public RLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLock()
	}

	public RLocker(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLocker()
	}

	public RUnlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RUnlock()
	}

	public TryLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryLock()
	}

	public TryRLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryRLock()
	}

	public Unlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Unlock()
	}

	static __typeInfo = $.registerStructType(
		"metrics.core",
		() => new core(),
		() => [$.methodSignature("push", [["target", "push.Target"]], [], true), $.methodSignature("register", [["m", "metrics.metric"]], ["error"], true), $.methodSignature("snapshot", [], [/* @__PURE__ */ $.pointerType("metrics.RootSnapshot")], true), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		core,
		() => [/* @__PURE__ */ $.structField("RWMutex", "sync.RWMutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("dimsByName", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [1], 24, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("ids", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [2], 32, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("metrics", /* @__PURE__ */ $.sliceType("metrics.metric"), [3], 40, false, { pkgPath: "go.uber.org/net/metrics" }), /* @__PURE__ */ $.structField("gatherer", "prometheus.Gatherer", [4], 64, false, { pkgPath: "go.uber.org/net/metrics" })]
	)
}

export const _defaultCollectionSize: number = 128

export function newCore(): core | $.VarRef<core> | null {
	let c: core | $.VarRef<core> | null = new core({dimsByName: $.makeMap<string, string>(), ids: $.makeMap<string, {}>(), metrics: $.makeSlice<__goscript_metrics.metric | null>(0, 128)})
	let c$: core = c == null ? $.pointerTarget<core>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<core>(c);
	;(c$ as core).gatherer = $.namedValueInterfaceValue<prometheus.Gatherer | null>($.namedFunction($.functionValue(async (): globalThis.Promise<[$.Slice<promproto.MetricFamily | $.VarRef<promproto.MetricFamily> | null>, $.GoError]> => {
		await (c$ as core).RWMutex.RLock()
		let protos: $.Slice<promproto.MetricFamily | $.VarRef<promproto.MetricFamily> | null> = $.makeSlice<promproto.MetricFamily | $.VarRef<promproto.MetricFamily> | null>(0, $.sliceLen((c$ as core).metrics))
		for (let __goscriptRangeTarget2 = (c$ as core).metrics, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let m = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_metrics.metric | null)
			let p: promproto.MetricFamily | $.VarRef<promproto.MetricFamily> | null = ((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<__goscript_metrics.metric, null>) : $.pointerValue<Exclude<__goscript_metrics.metric, null>>(m)).proto(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as promproto.MetricFamily | $.VarRef<promproto.MetricFamily> | null)
			if ((p != null) && ($.sliceLen($.pointerValue<promproto.MetricFamily>(p).Metric) > 0)) {
				protos = $.appendOne(protos, p, $.appendZeros.nil)
			}
		}
		void (c$ as core).RWMutex.RUnlock()
		return [protos, null]
	}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")), "error"] } as $.FunctionTypeInfo)), "prometheus.GathererFunc", ({ kind: $.TypeKind.Function, name: "prometheus.GathererFunc", params: [], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")), "error"] } as $.FunctionTypeInfo)), "prometheus.GathererFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
	return c
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Gather: (receiver: any, ...args: any[]) => (prometheus.GathererFunc_Gather as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (({ kind: $.TypeKind.Function, name: "prometheus.GathererFunc", params: [], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")), "error"] } as $.FunctionTypeInfo))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Gather", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("io_prometheus_client.MetricFamily")), "error"])])
}

var __goscriptAwait: any
