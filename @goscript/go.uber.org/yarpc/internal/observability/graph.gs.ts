// Generated file based on graph.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as metrics from "@goscript/go.uber.org/net/metrics/index.js"

import * as bucket from "@goscript/go.uber.org/net/metrics/bucket/index.js"

import * as transport2 from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as digester from "@goscript/go.uber.org/yarpc/internal/digester/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import type * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as __goscript_call from "./call.gs.ts"

import * as __goscript_extractor from "./extractor.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"
import "@goscript/context/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/net/metrics/index.js"
import "@goscript/go.uber.org/net/metrics/bucket/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/internal/digester/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "./call.gs.ts"
import "./extractor.gs.ts"
import "./stream.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/internal/observability", ["observability.directionName", "observability.graph", "observability.metricsTagIgnore", "observability.edge", "observability.streamEdge"])

export type directionName = string

export class graph {
	public get meter(): metrics.Scope | $.VarRef<metrics.Scope> | null {
		return this._fields.meter
	}

	public set meter(value: metrics.Scope | $.VarRef<metrics.Scope> | null) {
		this._fields.meter = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get extract(): ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null {
		return this._fields.extract
	}

	public set extract(value: ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null) {
		this._fields.extract = value
	}

	public get ignoreMetricsTag(): metricsTagIgnore | $.VarRef<metricsTagIgnore> | null {
		return this._fields.ignoreMetricsTag
	}

	public set ignoreMetricsTag(value: metricsTagIgnore | $.VarRef<metricsTagIgnore> | null) {
		this._fields.ignoreMetricsTag = value
	}

	public get edgesMu(): sync.RWMutex {
		return this._fields.edgesMu
	}

	public set edgesMu(value: sync.RWMutex) {
		this._fields.edgesMu = value
	}

	public get edges(): globalThis.Map<string, edge | $.VarRef<edge> | null> | null {
		return this._fields.edges
	}

	public set edges(value: globalThis.Map<string, edge | $.VarRef<edge> | null> | null) {
		this._fields.edges = value
	}

	public get inboundLevels(): __goscript_call.levels {
		return this._fields.inboundLevels
	}

	public set inboundLevels(value: __goscript_call.levels) {
		this._fields.inboundLevels = value
	}

	public get outboundLevels(): __goscript_call.levels {
		return this._fields.outboundLevels
	}

	public set outboundLevels(value: __goscript_call.levels) {
		this._fields.outboundLevels = value
	}

	public _fields: {
		meter: metrics.Scope | $.VarRef<metrics.Scope> | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		extract: ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null
		ignoreMetricsTag: metricsTagIgnore | $.VarRef<metricsTagIgnore> | null
		edgesMu: sync.RWMutex
		edges: globalThis.Map<string, edge | $.VarRef<edge> | null> | null
		inboundLevels: __goscript_call.levels
		outboundLevels: __goscript_call.levels
	}

	constructor(init?: Partial<{meter?: metrics.Scope | $.VarRef<metrics.Scope> | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null, extract?: ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null, ignoreMetricsTag?: metricsTagIgnore | $.VarRef<metricsTagIgnore> | null, edgesMu?: sync.RWMutex, edges?: globalThis.Map<string, edge | $.VarRef<edge> | null> | null, inboundLevels?: __goscript_call.levels, outboundLevels?: __goscript_call.levels}>, __goscriptValue?: boolean) {
		this._fields = {
			meter: init?.meter ?? (null! as metrics.Scope | $.VarRef<metrics.Scope> | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			extract: init?.extract ?? (null! as ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null),
			ignoreMetricsTag: init?.ignoreMetricsTag ?? (null! as metricsTagIgnore | $.VarRef<metricsTagIgnore> | null),
			edgesMu: init?.edgesMu ? $.markAsStructValue($.cloneStructValue(init.edgesMu)) : $.markAsStructValue(new sync.RWMutex()),
			edges: init?.edges ?? (null! as globalThis.Map<string, edge | $.VarRef<edge> | null> | null),
			inboundLevels: init?.inboundLevels ? init.inboundLevels.clone() : new __goscript_call.levels(undefined, true),
			outboundLevels: init?.outboundLevels ? init.outboundLevels.clone() : new __goscript_call.levels(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): graph {
		return new graph(this, true)
	}

	public __goscriptAssign(source: graph): void {
		const target = this._fields
		const values = source._fields
		target.meter = values.meter
		target.logger = values.logger
		target.extract = values.extract
		target.ignoreMetricsTag = values.ignoreMetricsTag
		$.assignStruct(target.edgesMu, values.edgesMu)
		target.edges = values.edges
		$.assignStruct(target.inboundLevels, values.inboundLevels)
		$.assignStruct(target.outboundLevels, values.outboundLevels)
	}

	public async begin(ctx: context.Context | null, rpcType: transport2.Type, direction: directionName, req: transport2.Request | $.VarRef<transport2.Request> | null): globalThis.Promise<__goscript_call.call> {
		const g: graph | $.VarRef<graph> | null = this;
		const g$: graph = g == null ? $.pointerTarget<graph>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<graph>(g)
		const req$: transport2.Request = req == null ? $.pointerTarget<transport2.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<transport2.Request>(req)
		let now = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = _timeNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time)))

		let d: digester.Digester | $.VarRef<digester.Digester> | null = await digester.New()
		if (!$.pointerValue<metricsTagIgnore>((g$ as graph).ignoreMetricsTag).source) {
			void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digester.Digester).Add((req$ as transport2.Request).Caller) : digester.Digester.prototype.Add.call(d, (req$ as transport2.Request).Caller))
		}
		if (!$.pointerValue<metricsTagIgnore>((g$ as graph).ignoreMetricsTag).dest) {
			void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digester.Digester).Add((req$ as transport2.Request).Service) : digester.Digester.prototype.Add.call(d, (req$ as transport2.Request).Service))
		}
		if (!$.pointerValue<metricsTagIgnore>((g$ as graph).ignoreMetricsTag).transport) {
			void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digester.Digester).Add((req$ as transport2.Request).Transport) : digester.Digester.prototype.Add.call(d, (req$ as transport2.Request).Transport))
		}
		if (!$.pointerValue<metricsTagIgnore>((g$ as graph).ignoreMetricsTag).encoding) {
			void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digester.Digester).Add((req$ as transport2.Request).Encoding) : digester.Digester.prototype.Add.call(d, (req$ as transport2.Request).Encoding))
		}
		if (!$.pointerValue<metricsTagIgnore>((g$ as graph).ignoreMetricsTag).procedure) {
			void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digester.Digester).Add((req$ as transport2.Request).Procedure) : digester.Digester.prototype.Add.call(d, (req$ as transport2.Request).Procedure))
		}
		if (!$.pointerValue<metricsTagIgnore>((g$ as graph).ignoreMetricsTag).routingKey) {
			void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digester.Digester).Add((req$ as transport2.Request).RoutingKey) : digester.Digester.prototype.Add.call(d, (req$ as transport2.Request).RoutingKey))
		}
		if (!$.pointerValue<metricsTagIgnore>((g$ as graph).ignoreMetricsTag).routingDelegate) {
			void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digester.Digester).Add((req$ as transport2.Request).RoutingDelegate) : digester.Digester.prototype.Add.call(d, (req$ as transport2.Request).RoutingDelegate))
		}
		if (!$.pointerValue<metricsTagIgnore>((g$ as graph).ignoreMetricsTag).direction) {
			void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digester.Digester).Add(direction) : digester.Digester.prototype.Add.call(d, direction))
		}
		if (!$.pointerValue<metricsTagIgnore>((g$ as graph).ignoreMetricsTag).rpcType) {
			void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digester.Digester).Add(transport2.Type_String(rpcType)) : digester.Digester.prototype.Add.call(d, transport2.Type_String(rpcType)))
		}
		let e: edge | $.VarRef<edge> | null = await graph.prototype.getOrCreateEdge.call(g, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digester.Digester).Digest() : digester.Digester.prototype.Digest.call(d)), req, direction, rpcType)
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as digester.Digester).Free() : digester.Digester.prototype.Free.call(d))

		let __goscriptShadow0: __goscript_call.levels | $.VarRef<__goscript_call.levels> | null = $.fieldRef((g$ as graph)._fields, "inboundLevels")
		if (!$.stringEqual(direction, "inbound")) {
			__goscriptShadow0 = $.fieldRef((g$ as graph)._fields, "outboundLevels")
		}

		return new __goscript_call.call({edge: e, extract: (g$ as graph).extract, started: $.markAsStructValue($.cloneStructValue(now)), ctx: ctx, req: req, rpcType: rpcType, direction: direction, levels: __goscriptShadow0}, true)
	}

	public async createEdge(key: $.Slice<number>, req: transport2.Request | $.VarRef<transport2.Request> | null, direction: string, rpcType: transport2.Type): globalThis.Promise<edge | $.VarRef<edge> | null> {
		let g: graph | $.VarRef<graph> | null = this;
		using __defer = new $.DisposableStack()
		const g$: graph = g == null ? $.pointerTarget<graph>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<graph>(g)
		await (g$ as graph).edgesMu.Lock()
		// Since we'll rarely hit this code path, the overhead of defer is acceptable.
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((g$ as graph).edgesMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		{
			let __goscriptTuple0: any = $.mapGet<string, edge | $.VarRef<edge> | null, edge | $.VarRef<edge> | null>((g$ as graph).edges, $.bytesToString(key), null)
			let e: edge | $.VarRef<edge> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				// Someone beat us to the punch.
				return e
			}
		}

		let e: edge | $.VarRef<edge> | null = await newEdge((g$ as graph).logger, (g$ as graph).meter, (g$ as graph).ignoreMetricsTag, req, direction, rpcType)
		$.mapSet((g$ as graph).edges, $.bytesToString(key), e)
		return e
	}

	public async getEdge(key: $.Slice<number>): globalThis.Promise<edge | $.VarRef<edge> | null> {
		const g: graph | $.VarRef<graph> | null = this;
		const g$: graph = g == null ? $.pointerTarget<graph>(g) : (g as any).__isVarRef === true ? (g as any).value : (g as any).__goValue === undefined ? (g as any) : $.pointerTarget<graph>(g)
		await (g$ as graph).edgesMu.RLock()
		let e: edge | $.VarRef<edge> | null = $.mapGet<string, edge | $.VarRef<edge> | null, edge | $.VarRef<edge> | null>((g$ as graph).edges, $.bytesToString(key), null)[0]
		void (g$ as graph).edgesMu.RUnlock()
		return e
	}

	public async getOrCreateEdge(key: $.Slice<number>, req: transport2.Request | $.VarRef<transport2.Request> | null, direction: string, rpcType: transport2.Type): globalThis.Promise<edge | $.VarRef<edge> | null> {
		const g: graph | $.VarRef<graph> | null = this;
		{
			let e: edge | $.VarRef<edge> | null = await (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as graph).getEdge(key) : graph.prototype.getEdge.call(g, key))
			if (e != null) {
				return e
			}
		}
		return (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as graph).createEdge(key, req, direction, rpcType) : graph.prototype.createEdge.call(g, key, req, direction, rpcType))
	}

	static __typeInfo = $.registerStructType(
		"observability.graph",
		() => new graph(),
		() => [$.methodSignature("begin", [["ctx", "context.Context"], ["rpcType", /* @__PURE__ */ $.basicType("int", "transport.Type")], ["direction", /* @__PURE__ */ $.basicType("string", "observability.directionName")], ["req", /* @__PURE__ */ $.pointerType("transport.Request")]], ["observability.call"], true), $.methodSignature("createEdge", [["key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["direction", /* @__PURE__ */ $.basicType("string")], ["rpcType", /* @__PURE__ */ $.basicType("int", "transport.Type")]], [/* @__PURE__ */ $.pointerType("observability.edge")], true), $.methodSignature("getEdge", [["key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("observability.edge")], true), $.methodSignature("getOrCreateEdge", [["key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["direction", /* @__PURE__ */ $.basicType("string")], ["rpcType", /* @__PURE__ */ $.basicType("int", "transport.Type")]], [/* @__PURE__ */ $.pointerType("observability.edge")], true)],
		graph,
		() => [/* @__PURE__ */ $.structField("meter", /* @__PURE__ */ $.pointerType("metrics.Scope"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [1], 8, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("extract", ({ kind: $.TypeKind.Function, name: "observability.ContextExtractor", params: ["context.Context"], results: ["zapcore.Field"] } as $.FunctionTypeInfo), [2], 16, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("ignoreMetricsTag", /* @__PURE__ */ $.pointerType("observability.metricsTagIgnore"), [3], 24, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("edgesMu", "sync.RWMutex", [4], 32, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("edges", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("observability.edge")), [5], 56, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("inboundLevels", "observability.levels", [6], 64, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("outboundLevels", "observability.levels", [7], 70, false, { pkgPath: "go.uber.org/yarpc/internal/observability" })]
	)
}

export class metricsTagIgnore {
	public get source(): boolean {
		return this._fields.source
	}

	public set source(value: boolean) {
		this._fields.source = value
	}

	public get dest(): boolean {
		return this._fields.dest
	}

	public set dest(value: boolean) {
		this._fields.dest = value
	}

	public get transport(): boolean {
		return this._fields.transport
	}

	public set transport(value: boolean) {
		this._fields.transport = value
	}

	public get procedure(): boolean {
		return this._fields.procedure
	}

	public set procedure(value: boolean) {
		this._fields.procedure = value
	}

	public get encoding(): boolean {
		return this._fields.encoding
	}

	public set encoding(value: boolean) {
		this._fields.encoding = value
	}

	public get routingKey(): boolean {
		return this._fields.routingKey
	}

	public set routingKey(value: boolean) {
		this._fields.routingKey = value
	}

	public get routingDelegate(): boolean {
		return this._fields.routingDelegate
	}

	public set routingDelegate(value: boolean) {
		this._fields.routingDelegate = value
	}

	public get direction(): boolean {
		return this._fields.direction
	}

	public set direction(value: boolean) {
		this._fields.direction = value
	}

	public get rpcType(): boolean {
		return this._fields.rpcType
	}

	public set rpcType(value: boolean) {
		this._fields.rpcType = value
	}

	public _fields: {
		source: boolean
		dest: boolean
		transport: boolean
		procedure: boolean
		encoding: boolean
		routingKey: boolean
		routingDelegate: boolean
		direction: boolean
		rpcType: boolean
	}

	constructor(init?: Partial<{source?: boolean, dest?: boolean, transport?: boolean, procedure?: boolean, encoding?: boolean, routingKey?: boolean, routingDelegate?: boolean, direction?: boolean, rpcType?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			source: init?.source ?? (false as boolean),
			dest: init?.dest ?? (false as boolean),
			transport: init?.transport ?? (false as boolean),
			procedure: init?.procedure ?? (false as boolean),
			encoding: init?.encoding ?? (false as boolean),
			routingKey: init?.routingKey ?? (false as boolean),
			routingDelegate: init?.routingDelegate ?? (false as boolean),
			direction: init?.direction ?? (false as boolean),
			rpcType: init?.rpcType ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): metricsTagIgnore {
		return new metricsTagIgnore(this, true)
	}

	public __goscriptAssign(source: metricsTagIgnore): void {
		const target = this._fields
		const values = source._fields
		target.source = values.source
		target.dest = values.dest
		target.transport = values.transport
		target.procedure = values.procedure
		target.encoding = values.encoding
		target.routingKey = values.routingKey
		target.routingDelegate = values.routingDelegate
		target.direction = values.direction
		target.rpcType = values.rpcType
	}

	public tags(req: transport2.Request | $.VarRef<transport2.Request> | null, direction: string, rpcType: transport2.Type): metrics.Tags {
		const m: metricsTagIgnore | $.VarRef<metricsTagIgnore> | null = this;
		const m$: metricsTagIgnore = m == null ? $.pointerTarget<metricsTagIgnore>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<metricsTagIgnore>(m)
		const req$: transport2.Request = req == null ? $.pointerTarget<transport2.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<transport2.Request>(req)
		let tags: metrics.Tags = $.makeMap<string, string>([["source", (req$ as transport2.Request).Caller], ["dest", (req$ as transport2.Request).Service], ["transport", unknownIfEmpty((req$ as transport2.Request).Transport)], ["procedure", (req$ as transport2.Request).Procedure], ["encoding", (req$ as transport2.Request).Encoding], ["routing_key", (req$ as transport2.Request).RoutingKey], ["routing_delegate", (req$ as transport2.Request).RoutingDelegate], ["direction", direction], ["rpc_type", transport2.Type_String(rpcType)]])

		if ((m$ as metricsTagIgnore).source) {
			$.mapSet(tags, "source", "__dropped__")
		}
		if ((m$ as metricsTagIgnore).dest) {
			$.mapSet(tags, "dest", "__dropped__")
		}
		if ((m$ as metricsTagIgnore).transport) {
			$.mapSet(tags, "transport", "__dropped__")
		}
		if ((m$ as metricsTagIgnore).encoding) {
			$.mapSet(tags, "encoding", "__dropped__")
		}
		if ((m$ as metricsTagIgnore).procedure) {
			$.mapSet(tags, "procedure", "__dropped__")
		}
		if ((m$ as metricsTagIgnore).routingKey) {
			$.mapSet(tags, "routing_key", "__dropped__")
		}
		if ((m$ as metricsTagIgnore).routingDelegate) {
			$.mapSet(tags, "routing_delegate", "__dropped__")
		}
		if ((m$ as metricsTagIgnore).direction) {
			$.mapSet(tags, "direction", "__dropped__")
		}
		if ((m$ as metricsTagIgnore).rpcType) {
			$.mapSet(tags, "rpc_type", "__dropped__")
		}

		return tags
	}

	static __typeInfo = $.registerStructType(
		"observability.metricsTagIgnore",
		() => new metricsTagIgnore(),
		() => [$.methodSignature("tags", [["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["direction", /* @__PURE__ */ $.basicType("string")], ["rpcType", /* @__PURE__ */ $.basicType("int", "transport.Type")]], ["metrics.Tags"], true)],
		metricsTagIgnore,
		() => [/* @__PURE__ */ $.structField("source", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("dest", /* @__PURE__ */ $.basicType("bool"), [1], 1, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("transport", /* @__PURE__ */ $.basicType("bool"), [2], 2, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("procedure", /* @__PURE__ */ $.basicType("bool"), [3], 3, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("encoding", /* @__PURE__ */ $.basicType("bool"), [4], 4, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("routingKey", /* @__PURE__ */ $.basicType("bool"), [5], 5, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("routingDelegate", /* @__PURE__ */ $.basicType("bool"), [6], 6, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("direction", /* @__PURE__ */ $.basicType("bool"), [7], 7, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("rpcType", /* @__PURE__ */ $.basicType("bool"), [8], 8, false, { pkgPath: "go.uber.org/yarpc/internal/observability" })]
	)
}

export class edge {
	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get calls(): metrics.Counter | $.VarRef<metrics.Counter> | null {
		return this._fields.calls
	}

	public set calls(value: metrics.Counter | $.VarRef<metrics.Counter> | null) {
		this._fields.calls = value
	}

	public get successes(): metrics.Counter | $.VarRef<metrics.Counter> | null {
		return this._fields.successes
	}

	public set successes(value: metrics.Counter | $.VarRef<metrics.Counter> | null) {
		this._fields.successes = value
	}

	public get panics(): metrics.Counter | $.VarRef<metrics.Counter> | null {
		return this._fields.panics
	}

	public set panics(value: metrics.Counter | $.VarRef<metrics.Counter> | null) {
		this._fields.panics = value
	}

	public get callerFailures(): metrics.CounterVector | $.VarRef<metrics.CounterVector> | null {
		return this._fields.callerFailures
	}

	public set callerFailures(value: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null) {
		this._fields.callerFailures = value
	}

	public get serverFailures(): metrics.CounterVector | $.VarRef<metrics.CounterVector> | null {
		return this._fields.serverFailures
	}

	public set serverFailures(value: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null) {
		this._fields.serverFailures = value
	}

	public get latencies(): metrics.Histogram | $.VarRef<metrics.Histogram> | null {
		return this._fields.latencies
	}

	public set latencies(value: metrics.Histogram | $.VarRef<metrics.Histogram> | null) {
		this._fields.latencies = value
	}

	public get callerErrLatencies(): metrics.Histogram | $.VarRef<metrics.Histogram> | null {
		return this._fields.callerErrLatencies
	}

	public set callerErrLatencies(value: metrics.Histogram | $.VarRef<metrics.Histogram> | null) {
		this._fields.callerErrLatencies = value
	}

	public get serverErrLatencies(): metrics.Histogram | $.VarRef<metrics.Histogram> | null {
		return this._fields.serverErrLatencies
	}

	public set serverErrLatencies(value: metrics.Histogram | $.VarRef<metrics.Histogram> | null) {
		this._fields.serverErrLatencies = value
	}

	public get ttls(): metrics.Histogram | $.VarRef<metrics.Histogram> | null {
		return this._fields.ttls
	}

	public set ttls(value: metrics.Histogram | $.VarRef<metrics.Histogram> | null) {
		this._fields.ttls = value
	}

	public get timeoutTtls(): metrics.Histogram | $.VarRef<metrics.Histogram> | null {
		return this._fields.timeoutTtls
	}

	public set timeoutTtls(value: metrics.Histogram | $.VarRef<metrics.Histogram> | null) {
		this._fields.timeoutTtls = value
	}

	public get requestPayloadSizes(): metrics.Histogram | $.VarRef<metrics.Histogram> | null {
		return this._fields.requestPayloadSizes
	}

	public set requestPayloadSizes(value: metrics.Histogram | $.VarRef<metrics.Histogram> | null) {
		this._fields.requestPayloadSizes = value
	}

	public get responsePayloadSizes(): metrics.Histogram | $.VarRef<metrics.Histogram> | null {
		return this._fields.responsePayloadSizes
	}

	public set responsePayloadSizes(value: metrics.Histogram | $.VarRef<metrics.Histogram> | null) {
		this._fields.responsePayloadSizes = value
	}

	public get streaming(): streamEdge | $.VarRef<streamEdge> | null {
		return this._fields.streaming
	}

	public set streaming(value: streamEdge | $.VarRef<streamEdge> | null) {
		this._fields.streaming = value
	}

	public _fields: {
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		calls: metrics.Counter | $.VarRef<metrics.Counter> | null
		successes: metrics.Counter | $.VarRef<metrics.Counter> | null
		panics: metrics.Counter | $.VarRef<metrics.Counter> | null
		callerFailures: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null
		serverFailures: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null
		latencies: metrics.Histogram | $.VarRef<metrics.Histogram> | null
		callerErrLatencies: metrics.Histogram | $.VarRef<metrics.Histogram> | null
		serverErrLatencies: metrics.Histogram | $.VarRef<metrics.Histogram> | null
		ttls: metrics.Histogram | $.VarRef<metrics.Histogram> | null
		timeoutTtls: metrics.Histogram | $.VarRef<metrics.Histogram> | null
		requestPayloadSizes: metrics.Histogram | $.VarRef<metrics.Histogram> | null
		responsePayloadSizes: metrics.Histogram | $.VarRef<metrics.Histogram> | null
		streaming: streamEdge | $.VarRef<streamEdge> | null
	}

	constructor(init?: Partial<{logger?: zap.Logger | $.VarRef<zap.Logger> | null, calls?: metrics.Counter | $.VarRef<metrics.Counter> | null, successes?: metrics.Counter | $.VarRef<metrics.Counter> | null, panics?: metrics.Counter | $.VarRef<metrics.Counter> | null, callerFailures?: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null, serverFailures?: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null, latencies?: metrics.Histogram | $.VarRef<metrics.Histogram> | null, callerErrLatencies?: metrics.Histogram | $.VarRef<metrics.Histogram> | null, serverErrLatencies?: metrics.Histogram | $.VarRef<metrics.Histogram> | null, ttls?: metrics.Histogram | $.VarRef<metrics.Histogram> | null, timeoutTtls?: metrics.Histogram | $.VarRef<metrics.Histogram> | null, requestPayloadSizes?: metrics.Histogram | $.VarRef<metrics.Histogram> | null, responsePayloadSizes?: metrics.Histogram | $.VarRef<metrics.Histogram> | null, streaming?: streamEdge | $.VarRef<streamEdge> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			calls: init?.calls ?? (null! as metrics.Counter | $.VarRef<metrics.Counter> | null),
			successes: init?.successes ?? (null! as metrics.Counter | $.VarRef<metrics.Counter> | null),
			panics: init?.panics ?? (null! as metrics.Counter | $.VarRef<metrics.Counter> | null),
			callerFailures: init?.callerFailures ?? (null! as metrics.CounterVector | $.VarRef<metrics.CounterVector> | null),
			serverFailures: init?.serverFailures ?? (null! as metrics.CounterVector | $.VarRef<metrics.CounterVector> | null),
			latencies: init?.latencies ?? (null! as metrics.Histogram | $.VarRef<metrics.Histogram> | null),
			callerErrLatencies: init?.callerErrLatencies ?? (null! as metrics.Histogram | $.VarRef<metrics.Histogram> | null),
			serverErrLatencies: init?.serverErrLatencies ?? (null! as metrics.Histogram | $.VarRef<metrics.Histogram> | null),
			ttls: init?.ttls ?? (null! as metrics.Histogram | $.VarRef<metrics.Histogram> | null),
			timeoutTtls: init?.timeoutTtls ?? (null! as metrics.Histogram | $.VarRef<metrics.Histogram> | null),
			requestPayloadSizes: init?.requestPayloadSizes ?? (null! as metrics.Histogram | $.VarRef<metrics.Histogram> | null),
			responsePayloadSizes: init?.responsePayloadSizes ?? (null! as metrics.Histogram | $.VarRef<metrics.Histogram> | null),
			streaming: init?.streaming ?? (null! as streamEdge | $.VarRef<streamEdge> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): edge {
		return new edge(this, true)
	}

	public __goscriptAssign(source: edge): void {
		const target = this._fields
		const values = source._fields
		target.logger = values.logger
		target.calls = values.calls
		target.successes = values.successes
		target.panics = values.panics
		target.callerFailures = values.callerFailures
		target.serverFailures = values.serverFailures
		target.latencies = values.latencies
		target.callerErrLatencies = values.callerErrLatencies
		target.serverErrLatencies = values.serverErrLatencies
		target.ttls = values.ttls
		target.timeoutTtls = values.timeoutTtls
		target.requestPayloadSizes = values.requestPayloadSizes
		target.responsePayloadSizes = values.responsePayloadSizes
		target.streaming = values.streaming
	}

	static __typeInfo = $.registerStructType(
		"observability.edge",
		() => new edge(),
		() => [],
		edge,
		() => [/* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("calls", /* @__PURE__ */ $.pointerType("metrics.Counter"), [1], 8, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("successes", /* @__PURE__ */ $.pointerType("metrics.Counter"), [2], 16, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("panics", /* @__PURE__ */ $.pointerType("metrics.Counter"), [3], 24, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("callerFailures", /* @__PURE__ */ $.pointerType("metrics.CounterVector"), [4], 32, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("serverFailures", /* @__PURE__ */ $.pointerType("metrics.CounterVector"), [5], 40, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("latencies", /* @__PURE__ */ $.pointerType("metrics.Histogram"), [6], 48, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("callerErrLatencies", /* @__PURE__ */ $.pointerType("metrics.Histogram"), [7], 56, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("serverErrLatencies", /* @__PURE__ */ $.pointerType("metrics.Histogram"), [8], 64, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("ttls", /* @__PURE__ */ $.pointerType("metrics.Histogram"), [9], 72, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("timeoutTtls", /* @__PURE__ */ $.pointerType("metrics.Histogram"), [10], 80, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("requestPayloadSizes", /* @__PURE__ */ $.pointerType("metrics.Histogram"), [11], 88, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("responsePayloadSizes", /* @__PURE__ */ $.pointerType("metrics.Histogram"), [12], 96, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("streaming", /* @__PURE__ */ $.pointerType("observability.streamEdge"), [13], 104, false, { pkgPath: "go.uber.org/yarpc/internal/observability" })]
	)
}

export class streamEdge {
	public get sends(): metrics.Counter | $.VarRef<metrics.Counter> | null {
		return this._fields.sends
	}

	public set sends(value: metrics.Counter | $.VarRef<metrics.Counter> | null) {
		this._fields.sends = value
	}

	public get sendSuccesses(): metrics.Counter | $.VarRef<metrics.Counter> | null {
		return this._fields.sendSuccesses
	}

	public set sendSuccesses(value: metrics.Counter | $.VarRef<metrics.Counter> | null) {
		this._fields.sendSuccesses = value
	}

	public get sendFailures(): metrics.CounterVector | $.VarRef<metrics.CounterVector> | null {
		return this._fields.sendFailures
	}

	public set sendFailures(value: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null) {
		this._fields.sendFailures = value
	}

	public get receives(): metrics.Counter | $.VarRef<metrics.Counter> | null {
		return this._fields.receives
	}

	public set receives(value: metrics.Counter | $.VarRef<metrics.Counter> | null) {
		this._fields.receives = value
	}

	public get receiveSuccesses(): metrics.Counter | $.VarRef<metrics.Counter> | null {
		return this._fields.receiveSuccesses
	}

	public set receiveSuccesses(value: metrics.Counter | $.VarRef<metrics.Counter> | null) {
		this._fields.receiveSuccesses = value
	}

	public get receiveFailures(): metrics.CounterVector | $.VarRef<metrics.CounterVector> | null {
		return this._fields.receiveFailures
	}

	public set receiveFailures(value: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null) {
		this._fields.receiveFailures = value
	}

	public get streamDurations(): metrics.Histogram | $.VarRef<metrics.Histogram> | null {
		return this._fields.streamDurations
	}

	public set streamDurations(value: metrics.Histogram | $.VarRef<metrics.Histogram> | null) {
		this._fields.streamDurations = value
	}

	public get streamRequestPayloadSizes(): metrics.Histogram | $.VarRef<metrics.Histogram> | null {
		return this._fields.streamRequestPayloadSizes
	}

	public set streamRequestPayloadSizes(value: metrics.Histogram | $.VarRef<metrics.Histogram> | null) {
		this._fields.streamRequestPayloadSizes = value
	}

	public get streamResponsePayloadSizes(): metrics.Histogram | $.VarRef<metrics.Histogram> | null {
		return this._fields.streamResponsePayloadSizes
	}

	public set streamResponsePayloadSizes(value: metrics.Histogram | $.VarRef<metrics.Histogram> | null) {
		this._fields.streamResponsePayloadSizes = value
	}

	public get streamsActive(): metrics.Gauge | $.VarRef<metrics.Gauge> | null {
		return this._fields.streamsActive
	}

	public set streamsActive(value: metrics.Gauge | $.VarRef<metrics.Gauge> | null) {
		this._fields.streamsActive = value
	}

	public _fields: {
		sends: metrics.Counter | $.VarRef<metrics.Counter> | null
		sendSuccesses: metrics.Counter | $.VarRef<metrics.Counter> | null
		sendFailures: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null
		receives: metrics.Counter | $.VarRef<metrics.Counter> | null
		receiveSuccesses: metrics.Counter | $.VarRef<metrics.Counter> | null
		receiveFailures: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null
		streamDurations: metrics.Histogram | $.VarRef<metrics.Histogram> | null
		streamRequestPayloadSizes: metrics.Histogram | $.VarRef<metrics.Histogram> | null
		streamResponsePayloadSizes: metrics.Histogram | $.VarRef<metrics.Histogram> | null
		streamsActive: metrics.Gauge | $.VarRef<metrics.Gauge> | null
	}

	constructor(init?: Partial<{sends?: metrics.Counter | $.VarRef<metrics.Counter> | null, sendSuccesses?: metrics.Counter | $.VarRef<metrics.Counter> | null, sendFailures?: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null, receives?: metrics.Counter | $.VarRef<metrics.Counter> | null, receiveSuccesses?: metrics.Counter | $.VarRef<metrics.Counter> | null, receiveFailures?: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null, streamDurations?: metrics.Histogram | $.VarRef<metrics.Histogram> | null, streamRequestPayloadSizes?: metrics.Histogram | $.VarRef<metrics.Histogram> | null, streamResponsePayloadSizes?: metrics.Histogram | $.VarRef<metrics.Histogram> | null, streamsActive?: metrics.Gauge | $.VarRef<metrics.Gauge> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			sends: init?.sends ?? (null! as metrics.Counter | $.VarRef<metrics.Counter> | null),
			sendSuccesses: init?.sendSuccesses ?? (null! as metrics.Counter | $.VarRef<metrics.Counter> | null),
			sendFailures: init?.sendFailures ?? (null! as metrics.CounterVector | $.VarRef<metrics.CounterVector> | null),
			receives: init?.receives ?? (null! as metrics.Counter | $.VarRef<metrics.Counter> | null),
			receiveSuccesses: init?.receiveSuccesses ?? (null! as metrics.Counter | $.VarRef<metrics.Counter> | null),
			receiveFailures: init?.receiveFailures ?? (null! as metrics.CounterVector | $.VarRef<metrics.CounterVector> | null),
			streamDurations: init?.streamDurations ?? (null! as metrics.Histogram | $.VarRef<metrics.Histogram> | null),
			streamRequestPayloadSizes: init?.streamRequestPayloadSizes ?? (null! as metrics.Histogram | $.VarRef<metrics.Histogram> | null),
			streamResponsePayloadSizes: init?.streamResponsePayloadSizes ?? (null! as metrics.Histogram | $.VarRef<metrics.Histogram> | null),
			streamsActive: init?.streamsActive ?? (null! as metrics.Gauge | $.VarRef<metrics.Gauge> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): streamEdge {
		return new streamEdge(this, true)
	}

	public __goscriptAssign(source: streamEdge): void {
		const target = this._fields
		const values = source._fields
		target.sends = values.sends
		target.sendSuccesses = values.sendSuccesses
		target.sendFailures = values.sendFailures
		target.receives = values.receives
		target.receiveSuccesses = values.receiveSuccesses
		target.receiveFailures = values.receiveFailures
		target.streamDurations = values.streamDurations
		target.streamRequestPayloadSizes = values.streamRequestPayloadSizes
		target.streamResponsePayloadSizes = values.streamResponsePayloadSizes
		target.streamsActive = values.streamsActive
	}

	static __typeInfo = $.registerStructType(
		"observability.streamEdge",
		() => new streamEdge(),
		() => [],
		streamEdge,
		() => [/* @__PURE__ */ $.structField("sends", /* @__PURE__ */ $.pointerType("metrics.Counter"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("sendSuccesses", /* @__PURE__ */ $.pointerType("metrics.Counter"), [1], 8, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("sendFailures", /* @__PURE__ */ $.pointerType("metrics.CounterVector"), [2], 16, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("receives", /* @__PURE__ */ $.pointerType("metrics.Counter"), [3], 24, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("receiveSuccesses", /* @__PURE__ */ $.pointerType("metrics.Counter"), [4], 32, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("receiveFailures", /* @__PURE__ */ $.pointerType("metrics.CounterVector"), [5], 40, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("streamDurations", /* @__PURE__ */ $.pointerType("metrics.Histogram"), [6], 48, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("streamRequestPayloadSizes", /* @__PURE__ */ $.pointerType("metrics.Histogram"), [7], 56, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("streamResponsePayloadSizes", /* @__PURE__ */ $.pointerType("metrics.Histogram"), [8], 64, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("streamsActive", /* @__PURE__ */ $.pointerType("metrics.Gauge"), [9], 72, false, { pkgPath: "go.uber.org/yarpc/internal/observability" })]
	)
}

export const _directionOutbound: directionName = "outbound"

export const _directionInbound: directionName = "inbound"

export const _droppedTagValue: string = "__dropped__"

export const _source: string = "source"

export const _dest: string = "dest"

export const _transport: string = "transport"

export const _procedure: string = "procedure"

export const _encoding: string = "encoding"

export const _routingKey: string = "routing_key"

export const _routingDelegate: string = "routing_delegate"

export const _direction: string = "direction"

export const _rpcType: string = "rpc_type"

export let _timeNow: (() => time.Time | globalThis.Promise<time.Time>) | null = time.Now

export function __goscript_set__timeNow(__goscriptValue: (() => time.Time | globalThis.Promise<time.Time>) | null): void {
	_timeNow = __goscriptValue
}

export let _defaultGraphSize: number = 128

export function __goscript_set__defaultGraphSize(__goscriptValue: number): void {
	_defaultGraphSize = __goscriptValue
}

export let _bucketsMs: $.Slice<bigint> = await bucket.NewRPCLatency()

export function __goscript_set__bucketsMs(__goscriptValue: $.Slice<bigint>): void {
	_bucketsMs = __goscriptValue
}

export let _bucketsBytes: $.Slice<bigint> = await $.appendSlice($.arrayToSlice<bigint>([0n]), bucket.NewExponential(1n, 2n, 29))

export function __goscript_set__bucketsBytes(__goscriptValue: $.Slice<bigint>): void {
	_bucketsBytes = __goscriptValue
}

export function newMetricsTagIgnore(metricTagsIgnore: $.Slice<string>): metricsTagIgnore | $.VarRef<metricsTagIgnore> | null {
	let r: metricsTagIgnore | $.VarRef<metricsTagIgnore> | null = new metricsTagIgnore()
	let r$: metricsTagIgnore = r == null ? $.pointerTarget<metricsTagIgnore>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<metricsTagIgnore>(r)
	for (let __goscriptRangeTarget0 = metricTagsIgnore, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let m = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		switch (m) {
			case "source":
			{
				;(r$ as metricsTagIgnore).source = true
				break
			}
			case "dest":
			{
				;(r$ as metricsTagIgnore).dest = true
				break
			}
			case "transport":
			{
				;(r$ as metricsTagIgnore).transport = true
				break
			}
			case "procedure":
			{
				;(r$ as metricsTagIgnore).procedure = true
				break
			}
			case "encoding":
			{
				;(r$ as metricsTagIgnore).encoding = true
				break
			}
			case "routing_key":
			{
				;(r$ as metricsTagIgnore).routingKey = true
				break
			}
			case "routing_delegate":
			{
				;(r$ as metricsTagIgnore).routingDelegate = true
				break
			}
			case "direction":
			{
				;(r$ as metricsTagIgnore).direction = true
				break
			}
			case "rpc_type":
			{
				;(r$ as metricsTagIgnore).rpcType = true
				break
			}
		}
	}
	return r
}

export function newGraph(meter: metrics.Scope | $.VarRef<metrics.Scope> | null, logger: zap.Logger | $.VarRef<zap.Logger> | null, extract: __goscript_extractor.ContextExtractor | null, metricTagsIgnore: $.Slice<string>): graph {
	return (() => { const __goscriptLiteralField0 = newMetricsTagIgnore(metricTagsIgnore); return new graph({edges: $.makeMap<string, edge | $.VarRef<edge> | null>(), meter: meter, logger: logger, extract: extract, ignoreMetricsTag: __goscriptLiteralField0, inboundLevels: new __goscript_call.levels({success: -1, failure: 2, applicationError: 2, serverError: 2, clientError: 1}, true), outboundLevels: new __goscript_call.levels({success: -1, failure: 2, applicationError: 2, serverError: 2, clientError: 2}, true)}, true) })()
}

export async function newEdge(logger: zap.Logger | $.VarRef<zap.Logger> | null, meter: metrics.Scope | $.VarRef<metrics.Scope> | null, tagToIgnore: metricsTagIgnore | $.VarRef<metricsTagIgnore> | null, req: transport2.Request | $.VarRef<transport2.Request> | null, direction: string, rpcType: transport2.Type): globalThis.Promise<edge | $.VarRef<edge> | null> {
	const req$: transport2.Request = req == null ? $.pointerTarget<transport2.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<transport2.Request>(req)
	let tags: metrics.Tags = (tagToIgnore !== null && (tagToIgnore as any).__isVarRef !== true && (tagToIgnore as any).__goValue === undefined ? ((tagToIgnore as any) as metricsTagIgnore).tags(req, direction, rpcType) : metricsTagIgnore.prototype.tags.call(tagToIgnore, req, direction, rpcType))

	// metrics for all RPCs
	let __goscriptTuple1: any = await (meter !== null && (meter as any).__isVarRef !== true && (meter as any).__goValue === undefined ? ((meter as any) as metrics.Scope).Counter(new metrics.Spec({Name: "calls", Help: "Total number of RPCs.", ConstTags: tags}, true)) : metrics.Scope.prototype.Counter.call(meter, new metrics.Spec({Name: "calls", Help: "Total number of RPCs.", ConstTags: tags}, true)))
	let calls: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (err != null) {
		await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Error("Failed to create calls counter.", $.arrayToSlice<zap.Field>([zap.Error(err)])) : zap.Logger.prototype.Error.call(logger, "Failed to create calls counter.", $.arrayToSlice<zap.Field>([zap.Error(err)])))
	}
	let __goscriptTuple2: any = await (meter !== null && (meter as any).__isVarRef !== true && (meter as any).__goValue === undefined ? ((meter as any) as metrics.Scope).Counter(new metrics.Spec({Name: "successes", Help: "Number of successful RPCs.", ConstTags: tags}, true)) : metrics.Scope.prototype.Counter.call(meter, new metrics.Spec({Name: "successes", Help: "Number of successful RPCs.", ConstTags: tags}, true)))
	let successes: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	if (err != null) {
		await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Error("Failed to create successes counter.", $.arrayToSlice<zap.Field>([zap.Error(err)])) : zap.Logger.prototype.Error.call(logger, "Failed to create successes counter.", $.arrayToSlice<zap.Field>([zap.Error(err)])))
	}
	let __goscriptTuple3: any = await (meter !== null && (meter as any).__isVarRef !== true && (meter as any).__goValue === undefined ? ((meter as any) as metrics.Scope).Counter(new metrics.Spec({Name: "panics", Help: "Number of RPCs failed because of panic.", ConstTags: tags}, true)) : metrics.Scope.prototype.Counter.call(meter, new metrics.Spec({Name: "panics", Help: "Number of RPCs failed because of panic.", ConstTags: tags}, true)))
	let panics: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple3[0]
	err = __goscriptTuple3[1]
	if (err != null) {
		await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Error("Failed to create panics counter.", $.arrayToSlice<zap.Field>([zap.Error(err)])) : zap.Logger.prototype.Error.call(logger, "Failed to create panics counter.", $.arrayToSlice<zap.Field>([zap.Error(err)])))
	}
	let __goscriptTuple4: any = await metrics.Scope.prototype.CounterVector.call(meter, new metrics.Spec({Name: "caller_failures", Help: "Number of RPCs failed because of caller error.", ConstTags: tags, VarTags: $.arrayToSlice<string>(["error", "error_name"])}, true))
	let callerFailures: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null = __goscriptTuple4[0]
	err = __goscriptTuple4[1]
	if (err != null) {
		await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Error("Failed to create caller failures vector.", $.arrayToSlice<zap.Field>([zap.Error(err)])) : zap.Logger.prototype.Error.call(logger, "Failed to create caller failures vector.", $.arrayToSlice<zap.Field>([zap.Error(err)])))
	}
	let __goscriptTuple5: any = await metrics.Scope.prototype.CounterVector.call(meter, new metrics.Spec({Name: "server_failures", Help: "Number of RPCs failed because of server error.", ConstTags: tags, VarTags: $.arrayToSlice<string>(["error", "error_name"])}, true))
	let serverFailures: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null = __goscriptTuple5[0]
	err = __goscriptTuple5[1]
	if (err != null) {
		await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Error("Failed to create server failures vector.", $.arrayToSlice<zap.Field>([zap.Error(err)])) : zap.Logger.prototype.Error.call(logger, "Failed to create server failures vector.", $.arrayToSlice<zap.Field>([zap.Error(err)])))
	}

	// metrics for only unary and oneway
	let latencies: metrics.Histogram | $.VarRef<metrics.Histogram> | null = null! as metrics.Histogram | $.VarRef<metrics.Histogram> | null
	let callerErrLatencies: metrics.Histogram | $.VarRef<metrics.Histogram> | null = null! as metrics.Histogram | $.VarRef<metrics.Histogram> | null
	let serverErrLatencies: metrics.Histogram | $.VarRef<metrics.Histogram> | null = null! as metrics.Histogram | $.VarRef<metrics.Histogram> | null
	let ttls: metrics.Histogram | $.VarRef<metrics.Histogram> | null = null! as metrics.Histogram | $.VarRef<metrics.Histogram> | null
	let timeoutTtls: metrics.Histogram | $.VarRef<metrics.Histogram> | null = null! as metrics.Histogram | $.VarRef<metrics.Histogram> | null
	let requestPayloadSizes: metrics.Histogram | $.VarRef<metrics.Histogram> | null = null! as metrics.Histogram | $.VarRef<metrics.Histogram> | null
	let responsePayloadSizes: metrics.Histogram | $.VarRef<metrics.Histogram> | null = null! as metrics.Histogram | $.VarRef<metrics.Histogram> | null
	if ((rpcType == 1) || (rpcType == 2)) {
		let __goscriptTuple6: any = await metrics.Scope.prototype.Histogram.call(meter, new metrics.HistogramSpec({Spec: new metrics.Spec({Name: "success_latency_ms", Help: "Latency distribution of successful RPCs.", ConstTags: tags}, true), Unit: 1000000n, Buckets: _bucketsMs}, true))
		latencies = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Error("Failed to create success latency distribution.", $.arrayToSlice<zap.Field>([zap.Error(err)])) : zap.Logger.prototype.Error.call(logger, "Failed to create success latency distribution.", $.arrayToSlice<zap.Field>([zap.Error(err)])))
		}
		let __goscriptTuple7: any = await metrics.Scope.prototype.Histogram.call(meter, new metrics.HistogramSpec({Spec: new metrics.Spec({Name: "caller_failure_latency_ms", Help: "Latency distribution of RPCs failed because of caller error.", ConstTags: tags}, true), Unit: 1000000n, Buckets: _bucketsMs}, true))
		callerErrLatencies = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Error("Failed to create caller failure latency distribution.", $.arrayToSlice<zap.Field>([zap.Error(err)])) : zap.Logger.prototype.Error.call(logger, "Failed to create caller failure latency distribution.", $.arrayToSlice<zap.Field>([zap.Error(err)])))
		}
		let __goscriptTuple8: any = await metrics.Scope.prototype.Histogram.call(meter, new metrics.HistogramSpec({Spec: new metrics.Spec({Name: "server_failure_latency_ms", Help: "Latency distribution of RPCs failed because of server error.", ConstTags: tags}, true), Unit: 1000000n, Buckets: _bucketsMs}, true))
		serverErrLatencies = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Error("Failed to create server failure latency distribution.", $.arrayToSlice<zap.Field>([zap.Error(err)])) : zap.Logger.prototype.Error.call(logger, "Failed to create server failure latency distribution.", $.arrayToSlice<zap.Field>([zap.Error(err)])))
		}
		let __goscriptTuple9: any = await metrics.Scope.prototype.Histogram.call(meter, new metrics.HistogramSpec({Spec: new metrics.Spec({Name: "ttl_ms", Help: "TTL distribution of the RPCs passed by the caller", ConstTags: tags}, true), Unit: 1000000n, Buckets: _bucketsMs}, true))
		ttls = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Error("Failed to create ttl distribution.", $.arrayToSlice<zap.Field>([zap.Error(err)])) : zap.Logger.prototype.Error.call(logger, "Failed to create ttl distribution.", $.arrayToSlice<zap.Field>([zap.Error(err)])))
		}
		let __goscriptTuple10: any = await metrics.Scope.prototype.Histogram.call(meter, new metrics.HistogramSpec({Spec: new metrics.Spec({Name: "timeout_ttl_ms", Help: "TTL distribution of the RPCs passed by caller which failed due to timeout", ConstTags: tags}, true), Unit: 1000000n, Buckets: _bucketsMs}, true))
		timeoutTtls = __goscriptTuple10[0]
		err = __goscriptTuple10[1]
		if (err != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Error("Failed to create timeout ttl distribution.", $.arrayToSlice<zap.Field>([zap.Error(err)])) : zap.Logger.prototype.Error.call(logger, "Failed to create timeout ttl distribution.", $.arrayToSlice<zap.Field>([zap.Error(err)])))
		}
		let __goscriptTuple11: any = await metrics.Scope.prototype.Histogram.call(meter, new metrics.HistogramSpec({Spec: new metrics.Spec({Name: "request_payload_size_bytes", Help: "Request payload size distribution of the RPCs in bytes", ConstTags: tags}, true), Unit: 1000000n, Buckets: _bucketsBytes}, true))
		requestPayloadSizes = __goscriptTuple11[0]
		err = __goscriptTuple11[1]
		if (err != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Error("Failed to create request payload size histogram.", $.arrayToSlice<zap.Field>([zap.Error(err)])) : zap.Logger.prototype.Error.call(logger, "Failed to create request payload size histogram.", $.arrayToSlice<zap.Field>([zap.Error(err)])))
		}
		let __goscriptTuple12: any = await metrics.Scope.prototype.Histogram.call(meter, new metrics.HistogramSpec({Spec: new metrics.Spec({Name: "response_payload_size_bytes", Help: "Response payload size distribution of the RPCs in bytes", ConstTags: tags}, true), Unit: 1000000n, Buckets: _bucketsBytes}, true))
		responsePayloadSizes = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		if (err != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Error("Failed to create response payload size histogram.", $.arrayToSlice<zap.Field>([zap.Error(err)])) : zap.Logger.prototype.Error.call(logger, "Failed to create response payload size histogram.", $.arrayToSlice<zap.Field>([zap.Error(err)])))
		}
	}

	// metrics for only streams
	let streaming: streamEdge | $.VarRef<streamEdge> | null = null! as streamEdge | $.VarRef<streamEdge> | null
	if (rpcType == 3) {
		// sends
		let __goscriptTuple13: any = await (meter !== null && (meter as any).__isVarRef !== true && (meter as any).__goValue === undefined ? ((meter as any) as metrics.Scope).Counter(new metrics.Spec({Name: "stream_sends", Help: "Total number of streaming messages sent.", ConstTags: tags}, true)) : metrics.Scope.prototype.Counter.call(meter, new metrics.Spec({Name: "stream_sends", Help: "Total number of streaming messages sent.", ConstTags: tags}, true)))
		let sends: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple13[0]
		let __goscriptShadow1 = __goscriptTuple13[1]
		if (__goscriptShadow1 != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).DPanic("Failed to create streaming sends counter.", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])) : zap.Logger.prototype.DPanic.call(logger, "Failed to create streaming sends counter.", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])))
		}
		let __goscriptTuple14: any = await metrics.Scope.prototype.Counter.call(meter, new metrics.Spec({Name: "stream_send_successes", Help: "Number of successful streaming messages sent.", ConstTags: tags}, true))
		let sendSuccesses: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple14[0]
		__goscriptShadow1 = __goscriptTuple14[1]
		if (__goscriptShadow1 != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).DPanic("Failed to create streaming sends successes counter.", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])) : zap.Logger.prototype.DPanic.call(logger, "Failed to create streaming sends successes counter.", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])))
		}
		let __goscriptTuple15: any = await metrics.Scope.prototype.CounterVector.call(meter, new metrics.Spec({Name: "stream_send_failures", Help: "Number streaming messages that failed to send.", ConstTags: tags, VarTags: $.arrayToSlice<string>(["error"])}, true))
		let sendFailures: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null = __goscriptTuple15[0]
		__goscriptShadow1 = __goscriptTuple15[1]
		if (__goscriptShadow1 != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).DPanic("Failed to create streaming sends failure counter.", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])) : zap.Logger.prototype.DPanic.call(logger, "Failed to create streaming sends failure counter.", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])))
		}

		// receives
		let __goscriptTuple16: any = await (meter !== null && (meter as any).__isVarRef !== true && (meter as any).__goValue === undefined ? ((meter as any) as metrics.Scope).Counter(new metrics.Spec({Name: "stream_receives", Help: "Total number of streaming messages recevied.", ConstTags: tags}, true)) : metrics.Scope.prototype.Counter.call(meter, new metrics.Spec({Name: "stream_receives", Help: "Total number of streaming messages recevied.", ConstTags: tags}, true)))
		let receives: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple16[0]
		__goscriptShadow1 = __goscriptTuple16[1]
		if (__goscriptShadow1 != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).DPanic("Failed to create streaming receives counter.", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])) : zap.Logger.prototype.DPanic.call(logger, "Failed to create streaming receives counter.", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])))
		}
		let __goscriptTuple17: any = await metrics.Scope.prototype.Counter.call(meter, new metrics.Spec({Name: "stream_receive_successes", Help: "Number of successful streaming messages received.", ConstTags: tags}, true))
		let receiveSuccesses: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple17[0]
		__goscriptShadow1 = __goscriptTuple17[1]
		if (__goscriptShadow1 != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).DPanic("Failed to create streaming receives successes counter.", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])) : zap.Logger.prototype.DPanic.call(logger, "Failed to create streaming receives successes counter.", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])))
		}
		let __goscriptTuple18: any = await metrics.Scope.prototype.CounterVector.call(meter, new metrics.Spec({Name: "stream_receive_failures", Help: "Number streaming messages failed to be recieved.", ConstTags: tags, VarTags: $.arrayToSlice<string>(["error"])}, true))
		let receiveFailures: metrics.CounterVector | $.VarRef<metrics.CounterVector> | null = __goscriptTuple18[0]
		__goscriptShadow1 = __goscriptTuple18[1]
		if (__goscriptShadow1 != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).DPanic("Failed to create streaming receives failure counter.", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])) : zap.Logger.prototype.DPanic.call(logger, "Failed to create streaming receives failure counter.", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])))
		}

		// entire stream
		let __goscriptTuple19: any = await metrics.Scope.prototype.Histogram.call(meter, new metrics.HistogramSpec({Spec: new metrics.Spec({Name: "stream_duration_ms", Help: "Latency distribution of total stream duration.", ConstTags: tags}, true), Unit: 1000000n, Buckets: _bucketsMs}, true))
		let streamDurations: metrics.Histogram | $.VarRef<metrics.Histogram> | null = __goscriptTuple19[0]
		__goscriptShadow1 = __goscriptTuple19[1]
		if (__goscriptShadow1 != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).DPanic("Failed to create stream duration histogram.", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])) : zap.Logger.prototype.DPanic.call(logger, "Failed to create stream duration histogram.", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])))
		}

		let __goscriptTuple20: any = await metrics.Scope.prototype.Histogram.call(meter, new metrics.HistogramSpec({Spec: new metrics.Spec({Name: "stream_request_payload_size_bytes", Help: "Stream request payload size distribution", ConstTags: tags}, true), Unit: 1000000n, Buckets: _bucketsBytes}, true))
		let streamRequestPayloadSizes: metrics.Histogram | $.VarRef<metrics.Histogram> | null = __goscriptTuple20[0]
		__goscriptShadow1 = __goscriptTuple20[1]
		if (__goscriptShadow1 != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).DPanic("Failed to create stream request payload size histogram", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])) : zap.Logger.prototype.DPanic.call(logger, "Failed to create stream request payload size histogram", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])))
		}

		let __goscriptTuple21: any = await metrics.Scope.prototype.Histogram.call(meter, new metrics.HistogramSpec({Spec: new metrics.Spec({Name: "stream_response_payload_size_bytes", Help: "Stream response payload size distribution", ConstTags: tags}, true), Unit: 1000000n, Buckets: _bucketsBytes}, true))
		let streamResponsePayloadSizes: metrics.Histogram | $.VarRef<metrics.Histogram> | null = __goscriptTuple21[0]
		__goscriptShadow1 = __goscriptTuple21[1]
		if (__goscriptShadow1 != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).DPanic("Failed to create stream response payload size histogram", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])) : zap.Logger.prototype.DPanic.call(logger, "Failed to create stream response payload size histogram", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])))
		}

		let __goscriptTuple22: any = await (meter !== null && (meter as any).__isVarRef !== true && (meter as any).__goValue === undefined ? ((meter as any) as metrics.Scope).Gauge(new metrics.Spec({Name: "streams_active", Help: "Number of active streams.", ConstTags: tags}, true)) : metrics.Scope.prototype.Gauge.call(meter, new metrics.Spec({Name: "streams_active", Help: "Number of active streams.", ConstTags: tags}, true)))
		let streamsActive: metrics.Gauge | $.VarRef<metrics.Gauge> | null = __goscriptTuple22[0]
		__goscriptShadow1 = __goscriptTuple22[1]
		if (__goscriptShadow1 != null) {
			await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).DPanic("Failed to create active stream gauge.", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])) : zap.Logger.prototype.DPanic.call(logger, "Failed to create active stream gauge.", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow1)])))
		}

		streaming = new streamEdge({sends: sends, sendSuccesses: sendSuccesses, sendFailures: sendFailures, receives: receives, receiveSuccesses: receiveSuccesses, receiveFailures: receiveFailures, streamDurations: streamDurations, streamRequestPayloadSizes: streamRequestPayloadSizes, streamResponsePayloadSizes: streamResponsePayloadSizes, streamsActive: streamsActive})
	}

	logger = await zap.Logger.prototype.With.call(logger, $.arrayToSlice<zap.Field>([zap.String("source", (req$ as transport2.Request).Caller), zap.String("dest", (req$ as transport2.Request).Service), zap.String("transport", unknownIfEmpty((req$ as transport2.Request).Transport)), zap.String("procedure", (req$ as transport2.Request).Procedure), zap.String("encoding", (req$ as transport2.Request).Encoding), zap.String("routingKey", (req$ as transport2.Request).RoutingKey), zap.String("routingDelegate", (req$ as transport2.Request).RoutingDelegate), zap.String("direction", direction)]))
	return new edge({logger: logger, calls: calls, successes: successes, panics: panics, callerFailures: callerFailures, serverFailures: serverFailures, requestPayloadSizes: requestPayloadSizes, responsePayloadSizes: responsePayloadSizes, latencies: latencies, callerErrLatencies: callerErrLatencies, serverErrLatencies: serverErrLatencies, ttls: ttls, timeoutTtls: timeoutTtls, streaming: streaming})
}

export function unknownIfEmpty(t: string): string {
	if ($.stringEqual(t, "")) {
		t = "unknown"
	}
	return t
}

var __goscriptAwait: any
