// Generated file based on dispatcher.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"

import * as metrics from "@goscript/go.uber.org/net/metrics/index.js"

import * as middleware from "@goscript/go.uber.org/yarpc/api/middleware/index.js"

import * as transport2 from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as internal from "@goscript/go.uber.org/yarpc/internal/index.js"

import * as firstoutboundmiddleware from "@goscript/go.uber.org/yarpc/internal/firstoutboundmiddleware/index.js"

import * as inboundmiddleware from "@goscript/go.uber.org/yarpc/internal/inboundmiddleware/index.js"

import * as observability from "@goscript/go.uber.org/yarpc/internal/observability/index.js"

import * as outboundmiddleware from "@goscript/go.uber.org/yarpc/internal/outboundmiddleware/index.js"

import * as request from "@goscript/go.uber.org/yarpc/internal/request/index.js"

import * as lifecycle from "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sort from "@goscript/sort/index.js"

import * as tchannel from "@goscript/github.com/uber/tchannel-go/index.js"

import * as thriftrw from "@goscript/go.uber.org/thriftrw/version/index.js"

import * as xintrospection from "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"

import * as introspection from "@goscript/go.uber.org/yarpc/internal/introspection/index.js"

import * as grpc from "@goscript/google.golang.org/grpc/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_config from "./config.gs.ts"

import * as __goscript_dispatcher_introspection from "./dispatcher_introspection.gs.ts"

import * as __goscript_dispatcher_startup from "./dispatcher_startup.gs.ts"

import * as __goscript_router from "./router.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/multierr/index.js"
import "@goscript/go.uber.org/net/metrics/index.js"
import "@goscript/go.uber.org/yarpc/api/middleware/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/internal/index.js"
import "@goscript/go.uber.org/yarpc/internal/firstoutboundmiddleware/index.js"
import "@goscript/go.uber.org/yarpc/internal/inboundmiddleware/index.js"
import "@goscript/go.uber.org/yarpc/internal/observability/index.js"
import "@goscript/go.uber.org/yarpc/internal/outboundmiddleware/index.js"
import "@goscript/go.uber.org/yarpc/internal/request/index.js"
import "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sort/index.js"
import "@goscript/github.com/uber/tchannel-go/index.js"
import "@goscript/go.uber.org/thriftrw/version/index.js"
import "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"
import "@goscript/go.uber.org/yarpc/internal/introspection/index.js"
import "@goscript/google.golang.org/grpc/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/sync/index.js"
import "./config.gs.ts"
import "./dispatcher_introspection.gs.ts"
import "./dispatcher_startup.gs.ts"
import "./router.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc", ["yarpc.Inbounds", "yarpc.Outbounds", "yarpc.OutboundMiddleware", "yarpc.InboundMiddleware", "yarpc.RouterMiddleware", "yarpc.Dispatcher"])

export type Inbounds = $.Slice<transport2.Inbound | null>

$.registerNamedType("yarpc.Inbounds", /* @__PURE__ */ $.sliceType("transport.Inbound"));

export type Outbounds = globalThis.Map<string, transport2.Outbounds> | null

$.registerNamedType("yarpc.Outbounds", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "transport.Outbounds"));

export type RouterMiddleware = {
	Choose(_p0: context.Context | null, _p1: transport2.Request | $.VarRef<transport2.Request> | null, _p2: transport2.Router | null): [transport2.HandlerSpec, $.GoError]
	Procedures(_p0: transport2.Router | null): $.Slice<transport2.Procedure>
}

$.registerInterfaceType(
	"yarpc.RouterMiddleware",
	null,
	[$.methodSignature("Choose", ["context.Context", /* @__PURE__ */ $.pointerType("transport.Request"), "transport.Router"], ["transport.HandlerSpec", "error"]), $.methodSignature("Procedures", ["transport.Router"], [/* @__PURE__ */ $.sliceType("transport.Procedure")])]
);

export class OutboundMiddleware {
	public get Unary(): middleware.UnaryOutbound | null {
		return this._fields.Unary
	}

	public set Unary(value: middleware.UnaryOutbound | null) {
		this._fields.Unary = value
	}

	public get Oneway(): middleware.OnewayOutbound | null {
		return this._fields.Oneway
	}

	public set Oneway(value: middleware.OnewayOutbound | null) {
		this._fields.Oneway = value
	}

	public get Stream(): middleware.StreamOutbound | null {
		return this._fields.Stream
	}

	public set Stream(value: middleware.StreamOutbound | null) {
		this._fields.Stream = value
	}

	public _fields: {
		Unary: middleware.UnaryOutbound | null
		Oneway: middleware.OnewayOutbound | null
		Stream: middleware.StreamOutbound | null
	}

	constructor(init?: Partial<{Unary?: middleware.UnaryOutbound | null, Oneway?: middleware.OnewayOutbound | null, Stream?: middleware.StreamOutbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Unary: init?.Unary ?? (null! as middleware.UnaryOutbound | null),
			Oneway: init?.Oneway ?? (null! as middleware.OnewayOutbound | null),
			Stream: init?.Stream ?? (null! as middleware.StreamOutbound | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OutboundMiddleware {
		return new OutboundMiddleware(this, true)
	}

	public __goscriptAssign(source: OutboundMiddleware): void {
		const target = this._fields
		const values = source._fields
		target.Unary = $.assignFieldValue(target.Unary, values.Unary, "middleware.UnaryOutbound")
		target.Oneway = $.assignFieldValue(target.Oneway, values.Oneway, "middleware.OnewayOutbound")
		target.Stream = $.assignFieldValue(target.Stream, values.Stream, "middleware.StreamOutbound")
	}

	static __typeInfo = $.registerStructType(
		"yarpc.OutboundMiddleware",
		() => new OutboundMiddleware(),
		() => [],
		OutboundMiddleware,
		() => [/* @__PURE__ */ $.structField("Unary", "middleware.UnaryOutbound", [0], 0, true), /* @__PURE__ */ $.structField("Oneway", "middleware.OnewayOutbound", [1], 16, true), /* @__PURE__ */ $.structField("Stream", "middleware.StreamOutbound", [2], 32, true)]
	)
}

export class InboundMiddleware {
	public get Unary(): middleware.UnaryInbound | null {
		return this._fields.Unary
	}

	public set Unary(value: middleware.UnaryInbound | null) {
		this._fields.Unary = value
	}

	public get Oneway(): middleware.OnewayInbound | null {
		return this._fields.Oneway
	}

	public set Oneway(value: middleware.OnewayInbound | null) {
		this._fields.Oneway = value
	}

	public get Stream(): middleware.StreamInbound | null {
		return this._fields.Stream
	}

	public set Stream(value: middleware.StreamInbound | null) {
		this._fields.Stream = value
	}

	public _fields: {
		Unary: middleware.UnaryInbound | null
		Oneway: middleware.OnewayInbound | null
		Stream: middleware.StreamInbound | null
	}

	constructor(init?: Partial<{Unary?: middleware.UnaryInbound | null, Oneway?: middleware.OnewayInbound | null, Stream?: middleware.StreamInbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Unary: init?.Unary ?? (null! as middleware.UnaryInbound | null),
			Oneway: init?.Oneway ?? (null! as middleware.OnewayInbound | null),
			Stream: init?.Stream ?? (null! as middleware.StreamInbound | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): InboundMiddleware {
		return new InboundMiddleware(this, true)
	}

	public __goscriptAssign(source: InboundMiddleware): void {
		const target = this._fields
		const values = source._fields
		target.Unary = $.assignFieldValue(target.Unary, values.Unary, "middleware.UnaryInbound")
		target.Oneway = $.assignFieldValue(target.Oneway, values.Oneway, "middleware.OnewayInbound")
		target.Stream = $.assignFieldValue(target.Stream, values.Stream, "middleware.StreamInbound")
	}

	static __typeInfo = $.registerStructType(
		"yarpc.InboundMiddleware",
		() => new InboundMiddleware(),
		() => [],
		InboundMiddleware,
		() => [/* @__PURE__ */ $.structField("Unary", "middleware.UnaryInbound", [0], 0, true), /* @__PURE__ */ $.structField("Oneway", "middleware.OnewayInbound", [1], 16, true), /* @__PURE__ */ $.structField("Stream", "middleware.StreamInbound", [2], 32, true)]
	)
}

export class Dispatcher {
	public get table(): transport2.RouteTable | null {
		return this._fields.table
	}

	public set table(value: transport2.RouteTable | null) {
		this._fields.table = value
	}

	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get inbounds(): Inbounds {
		return this._fields.inbounds
	}

	public set inbounds(value: Inbounds) {
		this._fields.inbounds = value
	}

	public get outbounds(): Outbounds {
		return this._fields.outbounds
	}

	public set outbounds(value: Outbounds) {
		this._fields.outbounds = value
	}

	public get transports(): $.Slice<transport2.Transport | null> {
		return this._fields.transports
	}

	public set transports(value: $.Slice<transport2.Transport | null>) {
		this._fields.transports = value
	}

	public get inboundMiddleware(): InboundMiddleware {
		return this._fields.inboundMiddleware
	}

	public set inboundMiddleware(value: InboundMiddleware) {
		this._fields.inboundMiddleware = value
	}

	public get log(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.log
	}

	public set log(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.log = value
	}

	public get meter(): metrics.Scope | $.VarRef<metrics.Scope> | null {
		return this._fields.meter
	}

	public set meter(value: metrics.Scope | $.VarRef<metrics.Scope> | null) {
		this._fields.meter = value
	}

	public get stopMeter(): (() => void) | null {
		return this._fields.stopMeter
	}

	public set stopMeter(value: (() => void) | null) {
		this._fields.stopMeter = value
	}

	public get once(): lifecycle.Once | $.VarRef<lifecycle.Once> | null {
		return this._fields.once
	}

	public set once(value: lifecycle.Once | $.VarRef<lifecycle.Once> | null) {
		this._fields.once = value
	}

	public _fields: {
		table: transport2.RouteTable | null
		name: string
		inbounds: Inbounds
		outbounds: Outbounds
		transports: $.Slice<transport2.Transport | null>
		inboundMiddleware: InboundMiddleware
		log: zap.Logger | $.VarRef<zap.Logger> | null
		meter: metrics.Scope | $.VarRef<metrics.Scope> | null
		stopMeter: (() => void) | null
		once: lifecycle.Once | $.VarRef<lifecycle.Once> | null
	}

	constructor(init?: Partial<{table?: transport2.RouteTable | null, name?: string, inbounds?: Inbounds, outbounds?: Outbounds, transports?: $.Slice<transport2.Transport | null>, inboundMiddleware?: InboundMiddleware, log?: zap.Logger | $.VarRef<zap.Logger> | null, meter?: metrics.Scope | $.VarRef<metrics.Scope> | null, stopMeter?: (() => void) | null, once?: lifecycle.Once | $.VarRef<lifecycle.Once> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			table: init?.table ?? (null! as transport2.RouteTable | null),
			name: init?.name ?? ("" as string),
			inbounds: init?.inbounds ?? (null! as Inbounds),
			outbounds: init?.outbounds ?? (null! as Outbounds),
			transports: init?.transports ?? (null! as $.Slice<transport2.Transport | null>),
			inboundMiddleware: init?.inboundMiddleware ? init.inboundMiddleware.clone() : new InboundMiddleware(undefined, true),
			log: init?.log ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			meter: init?.meter ?? (null! as metrics.Scope | $.VarRef<metrics.Scope> | null),
			stopMeter: init?.stopMeter ?? (null! as (() => void) | null),
			once: init?.once ?? (null! as lifecycle.Once | $.VarRef<lifecycle.Once> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Dispatcher {
		return new Dispatcher(this, true)
	}

	public __goscriptAssign(source: Dispatcher): void {
		const target = this._fields
		const values = source._fields
		target.table = $.assignFieldValue(target.table, values.table, "transport.RouteTable")
		target.name = values.name
		target.inbounds = values.inbounds
		target.outbounds = values.outbounds
		target.transports = values.transports
		$.assignStruct(target.inboundMiddleware, values.inboundMiddleware)
		target.log = values.log
		target.meter = values.meter
		target.stopMeter = values.stopMeter
		target.once = values.once
	}

	public async ClientConfig(outboundKey: string): globalThis.Promise<transport2.ClientConfig | null> {
		const d: Dispatcher | $.VarRef<Dispatcher> | null = this;
		return $.interfaceValue<transport2.ClientConfig | null>(await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Dispatcher).MustOutboundConfig(outboundKey) : Dispatcher.prototype.MustOutboundConfig.call(d, outboundKey)), "*transport.OutboundConfig", /* @__PURE__ */ $.pointerType("transport.OutboundConfig"))
	}

	public InboundMiddleware(): InboundMiddleware {
		const d: Dispatcher | $.VarRef<Dispatcher> | null = this;
		return ($.pointerValue<Dispatcher>(d).inboundMiddleware).clone()
	}

	public Inbounds(): Inbounds {
		const d: Dispatcher | $.VarRef<Dispatcher> | null = this;
		const d$: Dispatcher = d == null ? $.pointerTarget<Dispatcher>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Dispatcher>(d)
		let inbounds: Inbounds = ($.makeSlice<transport2.Inbound | null>($.sliceLen(((d$ as Dispatcher).inbounds as Inbounds))) as Inbounds)
		$.copy((inbounds as Inbounds), ((d$ as Dispatcher).inbounds as Inbounds))
		return (inbounds as Inbounds)
	}

	public async Introspect(): globalThis.Promise<introspection.DispatcherStatus> {
		const d: Dispatcher | $.VarRef<Dispatcher> | null = this;
		const d$: Dispatcher = d == null ? $.pointerTarget<Dispatcher>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Dispatcher>(d)
		let inbounds: $.Slice<xintrospection.InboundStatus> = null! as $.Slice<xintrospection.InboundStatus>
		for (let __goscriptRangeTarget5 = (d$ as Dispatcher).inbounds, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let i = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as transport2.Inbound | null)
			let status: xintrospection.InboundStatus = new xintrospection.InboundStatus(undefined, true)
			let __goscriptShadow0 = i
			{
				let __goscriptTuple1: any = $.typeAssertTuple<xintrospection.IntrospectableInbound | null>(__goscriptShadow0, "introspection.IntrospectableInbound")
				let __goscriptShadow1 = __goscriptTuple1[0]
				let ok = __goscriptTuple1[1]
				if (ok) {
					status = $.assignStruct(status, ((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<xintrospection.IntrospectableInbound, null>) : $.pointerValue<Exclude<xintrospection.IntrospectableInbound, null>>(__goscriptShadow1)).Introspect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as xintrospection.InboundStatus))
				} else {
					status = $.assignStruct(status, new xintrospection.InboundStatus({Transport: "Introspection not supported"}, true))
				}
			}
			inbounds = $.appendOne(inbounds, (status).clone())
		}
		let outbounds: $.Slice<xintrospection.OutboundStatus> = null! as $.Slice<xintrospection.OutboundStatus>
		for (const [outboundKey, o] of (d$ as Dispatcher).outbounds?.entries() ?? []) {
			if (o.Unary != null) {
				let status: xintrospection.OutboundStatus = new xintrospection.OutboundStatus(undefined, true)
				let __goscriptShadow2 = o
				{
					let __goscriptTuple2: any = $.typeAssertTuple<xintrospection.IntrospectableOutbound | null>(__goscriptShadow2.Unary, "introspection.IntrospectableOutbound")
					let __goscriptShadow3 = __goscriptTuple2[0]
					let ok = __goscriptTuple2[1]
					if (ok) {
						status = $.assignStruct(status, ((__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<xintrospection.IntrospectableOutbound, null>) : $.pointerValue<Exclude<xintrospection.IntrospectableOutbound, null>>(__goscriptShadow3)).Introspect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as xintrospection.OutboundStatus))
					} else {
						status.Transport = "Introspection not supported"
					}
				}
				status.RPCType = "unary"
				status.Service = o.ServiceName
				status.OutboundKey = outboundKey
				outbounds = $.appendOne(outbounds, (status).clone())
			}
			if (o.Oneway != null) {
				let status: xintrospection.OutboundStatus = new xintrospection.OutboundStatus(undefined, true)
				let __goscriptShadow4 = o
				{
					let __goscriptTuple3: any = $.typeAssertTuple<xintrospection.IntrospectableOutbound | null>(__goscriptShadow4.Oneway, "introspection.IntrospectableOutbound")
					let __goscriptShadow5 = __goscriptTuple3[0]
					let ok = __goscriptTuple3[1]
					if (ok) {
						status = $.assignStruct(status, ((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<xintrospection.IntrospectableOutbound, null>) : $.pointerValue<Exclude<xintrospection.IntrospectableOutbound, null>>(__goscriptShadow5)).Introspect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as xintrospection.OutboundStatus))
					} else {
						status.Transport = "Introspection not supported"
					}
				}
				status.RPCType = "oneway"
				status.Service = o.ServiceName
				status.OutboundKey = outboundKey
				outbounds = $.appendOne(outbounds, (status).clone())
			}
		}

		await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((outbounds as __goscript_dispatcher_introspection.outboundStatuses), "yarpc.outboundStatuses", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)

		let procedures: $.Slice<introspection.Procedure> = introspection.IntrospectProcedures(((__goscriptAwait = $.pointerValue<Exclude<transport2.RouteTable, null>>((d$ as Dispatcher).table).Procedures(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<transport2.Procedure>))
		return (await (async () => { const __goscriptLiteralField7 = await fmt.Sprintf("%p", $.interfaceValue(d, "*yarpc.Dispatcher", /* @__PURE__ */ $.pointerType("yarpc.Dispatcher"))); return new introspection.DispatcherStatus({Name: (d$ as Dispatcher).name, ID: __goscriptLiteralField7, Procedures: procedures, Inbounds: inbounds, Outbounds: outbounds, PackageVersions: __goscript_dispatcher_introspection.__goscript_get_PackageVersions()}, true) })())
	}

	public async MustOutboundConfig(outboundKey: string): globalThis.Promise<transport2.OutboundConfig | $.VarRef<transport2.OutboundConfig> | null> {
		const d: Dispatcher | $.VarRef<Dispatcher> | null = this;
		{
			let __goscriptTuple4: any = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Dispatcher).OutboundConfig(outboundKey) : Dispatcher.prototype.OutboundConfig.call(d, outboundKey))
			let oc: transport2.OutboundConfig | $.VarRef<transport2.OutboundConfig> | null = __goscriptTuple4[0]
			let ok = __goscriptTuple4[1]
			if (ok) {
				return oc
			}
		}
		$.panic(await fmt.Sprintf("no configured outbound transport for outbound key %q", outboundKey))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public Name(): string {
		const d: Dispatcher | $.VarRef<Dispatcher> | null = this;
		return $.pointerValue<Dispatcher>(d).name
	}

	public OutboundConfig(outboundKey: string): [transport2.OutboundConfig | $.VarRef<transport2.OutboundConfig> | null, boolean] {
		const d: Dispatcher | $.VarRef<Dispatcher> | null = this;
		let oc: transport2.OutboundConfig | $.VarRef<transport2.OutboundConfig> | null = null! as transport2.OutboundConfig | $.VarRef<transport2.OutboundConfig> | null
		let ok: boolean = false
		const d$: Dispatcher = d == null ? $.pointerTarget<Dispatcher>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Dispatcher>(d)
		{
			let [out, __goscriptShadow6] = $.mapGet<string, transport2.Outbounds, transport2.Outbounds>((d$ as Dispatcher).outbounds, outboundKey, new transport2.Outbounds(undefined, true))
			if (__goscriptShadow6) {
				return [new transport2.OutboundConfig({CallerName: (d$ as Dispatcher).name, Outbounds: out}), true]
			}
		}
		return [null, false]
	}

	public Outbounds(): Outbounds {
		const d: Dispatcher | $.VarRef<Dispatcher> | null = this;
		const d$: Dispatcher = d == null ? $.pointerTarget<Dispatcher>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Dispatcher>(d)
		let outbounds: Outbounds = $.makeMap<string, transport2.Outbounds>()
		for (let [k, v] of (d$ as Dispatcher).outbounds?.entries() ?? []) {
			$.mapSet(outbounds, k, (v).clone())
		}
		return outbounds
	}

	public async PhasedStart(): globalThis.Promise<[__goscript_dispatcher_startup.PhasedStarter | $.VarRef<__goscript_dispatcher_startup.PhasedStarter> | null, $.GoError]> {
		const d: Dispatcher | $.VarRef<Dispatcher> | null = this;
		const d$: Dispatcher = d == null ? $.pointerTarget<Dispatcher>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Dispatcher>(d)
		let starter: __goscript_dispatcher_startup.PhasedStarter | $.VarRef<__goscript_dispatcher_startup.PhasedStarter> | null = new __goscript_dispatcher_startup.PhasedStarter({dispatcher: d, log: (d$ as Dispatcher).log})
		{
			let err = await lifecycle.Once.prototype.Start.call((d$ as Dispatcher).once, $.functionValue(async (): globalThis.Promise<$.GoError> => {
				await zap.Logger.prototype.Info.call($.pointerValue<__goscript_dispatcher_startup.PhasedStarter>(starter).log, "beginning phased dispatcher start", null)
				await (starter !== null && (starter as any).__isVarRef !== true && (starter as any).__goValue === undefined ? ((starter as any) as __goscript_dispatcher_startup.PhasedStarter).setRouters() : __goscript_dispatcher_startup.PhasedStarter.prototype.setRouters.call(starter))
				return null
			}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
			if (err != null) {
				return [null, err]
			}
		}
		return [starter, null]
	}

	public async PhasedStop(): globalThis.Promise<[__goscript_dispatcher_startup.PhasedStopper | $.VarRef<__goscript_dispatcher_startup.PhasedStopper> | null, $.GoError]> {
		const d: Dispatcher | $.VarRef<Dispatcher> | null = this;
		const d$: Dispatcher = d == null ? $.pointerTarget<Dispatcher>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Dispatcher>(d)
		{
			let err = await lifecycle.Once.prototype.Stop.call((d$ as Dispatcher).once, $.functionValue((): $.GoError => {
				return null
			}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
			if (err != null) {
				return [null, err]
			}
		}
		return [new __goscript_dispatcher_startup.PhasedStopper({dispatcher: d, log: (d$ as Dispatcher).log}), null]
	}

	public async Register(rs: $.Slice<transport2.Procedure>): globalThis.Promise<void> {
		const d: Dispatcher | $.VarRef<Dispatcher> | null = this;
		const d$: Dispatcher = d == null ? $.pointerTarget<Dispatcher>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Dispatcher>(d)
		let procedures: $.Slice<transport2.Procedure> = $.makeSlice<transport2.Procedure>(0, $.sliceLen(rs), undefined, () => new transport2.Procedure(undefined, true))

		for (let __goscriptRangeTarget6 = rs, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let r = ((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as transport2.Procedure)).clone()
			switch (r.HandlerSpec.Type()) {
				case transport2.Unary:
				{
					let h = middleware.ApplyUnaryInbound(r.HandlerSpec.Unary(), (d$ as Dispatcher).inboundMiddleware.Unary)
					$.assignStruct(r.HandlerSpec, transport2.NewUnaryHandlerSpec(h))
					break
				}
				case transport2.Oneway:
				{
					let h = middleware.ApplyOnewayInbound(r.HandlerSpec.Oneway(), (d$ as Dispatcher).inboundMiddleware.Oneway)
					$.assignStruct(r.HandlerSpec, transport2.NewOnewayHandlerSpec(h))
					break
				}
				case transport2.Streaming:
				{
					let h = middleware.ApplyStreamInbound(r.HandlerSpec.Stream(), (d$ as Dispatcher).inboundMiddleware.Stream)
					$.assignStruct(r.HandlerSpec, transport2.NewStreamHandlerSpec(h))
					break
				}
				default:
				{
					$.panic(await fmt.Sprintf("unknown handler type %q for service %q, procedure %q", $.namedValueInterfaceValue<any>(r.HandlerSpec.Type(), "transport.Type", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), r.Service, r.Name))
					break
				}
			}

			procedures = $.appendOne(procedures, (r).clone())
			await zap.Logger.prototype.Info.call((d$ as Dispatcher).log, "Registration succeeded.", $.arrayToSlice<zap.Field>([zap.Object("registeredProcedure", $.interfaceValue<zapcore.ObjectMarshaler | null>((r).clone(), "transport.Procedure", "transport.Procedure"))]))
		}

		void (__goscriptAwait = $.pointerValue<Exclude<transport2.RouteTable, null>>((d$ as Dispatcher).table).Register(procedures), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public Router(): transport2.Router | null {
		const d: Dispatcher | $.VarRef<Dispatcher> | null = this;
		return ($.pointerValue<Dispatcher>(d).table as transport2.Router | null)
	}

	public async Start(): globalThis.Promise<$.GoError> {
		const d: Dispatcher | $.VarRef<Dispatcher> | null = this;
		const d$: Dispatcher = d == null ? $.pointerTarget<Dispatcher>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Dispatcher>(d)
		let starter: __goscript_dispatcher_startup.PhasedStarter | $.VarRef<__goscript_dispatcher_startup.PhasedStarter> | null = new __goscript_dispatcher_startup.PhasedStarter({dispatcher: d, log: (d$ as Dispatcher).log})
		return lifecycle.Once.prototype.Start.call((d$ as Dispatcher).once, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await zap.Logger.prototype.Info.call((d$ as Dispatcher).log, "starting dispatcher", null)
			await (starter !== null && (starter as any).__isVarRef !== true && (starter as any).__goValue === undefined ? ((starter as any) as __goscript_dispatcher_startup.PhasedStarter).setRouters() : __goscript_dispatcher_startup.PhasedStarter.prototype.setRouters.call(starter))
			{
				let err = await (starter !== null && (starter as any).__isVarRef !== true && (starter as any).__goValue === undefined ? ((starter as any) as __goscript_dispatcher_startup.PhasedStarter).StartTransports() : __goscript_dispatcher_startup.PhasedStarter.prototype.StartTransports.call(starter))
				if (err != null) {
					return err
				}
			}
			{
				let err = await (starter !== null && (starter as any).__isVarRef !== true && (starter as any).__goValue === undefined ? ((starter as any) as __goscript_dispatcher_startup.PhasedStarter).StartOutbounds() : __goscript_dispatcher_startup.PhasedStarter.prototype.StartOutbounds.call(starter))
				if (err != null) {
					return err
				}
			}
			{
				let err = await (starter !== null && (starter as any).__isVarRef !== true && (starter as any).__goValue === undefined ? ((starter as any) as __goscript_dispatcher_startup.PhasedStarter).StartInbounds() : __goscript_dispatcher_startup.PhasedStarter.prototype.StartInbounds.call(starter))
				if (err != null) {
					return err
				}
			}
			await zap.Logger.prototype.Info.call((d$ as Dispatcher).log, "dispatcher startup complete", null)
			return null
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async Stop(): globalThis.Promise<$.GoError> {
		const d: Dispatcher | $.VarRef<Dispatcher> | null = this;
		const d$: Dispatcher = d == null ? $.pointerTarget<Dispatcher>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Dispatcher>(d)
		let stopper: __goscript_dispatcher_startup.PhasedStopper | $.VarRef<__goscript_dispatcher_startup.PhasedStopper> | null = new __goscript_dispatcher_startup.PhasedStopper({dispatcher: d, log: (d$ as Dispatcher).log})
		return lifecycle.Once.prototype.Stop.call((d$ as Dispatcher).once, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await zap.Logger.prototype.Info.call((d$ as Dispatcher).log, "shutting down dispatcher", null)
			return multierr.Combine($.arrayToSlice<$.GoError>([await (stopper !== null && (stopper as any).__isVarRef !== true && (stopper as any).__goValue === undefined ? ((stopper as any) as __goscript_dispatcher_startup.PhasedStopper).StopInbounds() : __goscript_dispatcher_startup.PhasedStopper.prototype.StopInbounds.call(stopper)), await (stopper !== null && (stopper as any).__isVarRef !== true && (stopper as any).__goValue === undefined ? ((stopper as any) as __goscript_dispatcher_startup.PhasedStopper).StopOutbounds() : __goscript_dispatcher_startup.PhasedStopper.prototype.StopOutbounds.call(stopper)), await (stopper !== null && (stopper as any).__isVarRef !== true && (stopper as any).__goValue === undefined ? ((stopper as any) as __goscript_dispatcher_startup.PhasedStopper).StopTransports() : __goscript_dispatcher_startup.PhasedStopper.prototype.StopTransports.call(stopper))]))
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	static __typeInfo = $.registerStructType(
		"yarpc.Dispatcher",
		() => new Dispatcher(),
		() => [$.methodSignature("ClientConfig", [["outboundKey", /* @__PURE__ */ $.basicType("string")]], ["transport.ClientConfig"], true), $.methodSignature("InboundMiddleware", [], ["yarpc.InboundMiddleware"], true), $.methodSignature("Inbounds", [], [/* @__PURE__ */ $.sliceType("transport.Inbound", "yarpc.Inbounds")], true), $.methodSignature("Introspect", [], ["introspection.DispatcherStatus"], true), $.methodSignature("MustOutboundConfig", [["outboundKey", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("transport.OutboundConfig")], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("OutboundConfig", [["outboundKey", /* @__PURE__ */ $.basicType("string")]], [["oc", /* @__PURE__ */ $.pointerType("transport.OutboundConfig")], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("Outbounds", [], ["yarpc.Outbounds"], true), $.methodSignature("PhasedStart", [], [/* @__PURE__ */ $.pointerType("yarpc.PhasedStarter"), "error"], true), $.methodSignature("PhasedStop", [], [/* @__PURE__ */ $.pointerType("yarpc.PhasedStopper"), "error"], true), $.methodSignature("Register", [["rs", /* @__PURE__ */ $.sliceType("transport.Procedure")]], [], true), $.methodSignature("Router", [], ["transport.Router"], true), $.methodSignature("Start", [], ["error"], true), $.methodSignature("Stop", [], ["error"], true)],
		Dispatcher,
		() => [/* @__PURE__ */ $.structField("table", "transport.RouteTable", [0], 0, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("inbounds", /* @__PURE__ */ $.sliceType("transport.Inbound", "yarpc.Inbounds"), [2], 32, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("outbounds", "yarpc.Outbounds", [3], 56, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("transports", /* @__PURE__ */ $.sliceType("transport.Transport"), [4], 64, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("inboundMiddleware", "yarpc.InboundMiddleware", [5], 88, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("log", /* @__PURE__ */ $.pointerType("zap.Logger"), [6], 136, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("meter", /* @__PURE__ */ $.pointerType("metrics.Scope"), [7], 144, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("stopMeter", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [8], 152, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("once", /* @__PURE__ */ $.pointerType("lifecycle.Once"), [9], 160, false, { pkgPath: "go.uber.org/yarpc" })]
	)
}

export async function NewDispatcher(cfg: __goscript_config.Config): globalThis.Promise<Dispatcher | $.VarRef<Dispatcher> | null> {
	if ($.stringEqual(cfg.Name, "")) {
		$.panic("yarpc.NewDispatcher expects a service name")
	}
	{
		let err = await internal.ValidateServiceName(cfg.Name)
		if (err != null) {
			$.panic($.concatString("yarpc.NewDispatcher expects a valid service name: ", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
		}
	}

	let logger: zap.Logger | $.VarRef<zap.Logger> | null = await $.markAsStructValue($.cloneStructValue(cfg.Logging)).logger(cfg.Name)
	let extractor: observability.ContextExtractor | null = cfg.Logging.extractor()

	let __goscriptTuple0: any = await $.markAsStructValue($.cloneStructValue(cfg.Metrics)).scope(cfg.Name, logger)
	let meter: metrics.Scope | $.VarRef<metrics.Scope> | null = __goscriptTuple0[0]
	let stopMeter = __goscriptTuple0[1]
	cfg = $.assignStruct(cfg, addObservingMiddleware((cfg).clone(), meter, logger, extractor))
	cfg = $.assignStruct(cfg, addFirstOutboundMiddleware((cfg).clone()))

	return (await (async () => { const __goscriptLiteralField0 = middleware.ApplyRouteTable($.interfaceValue<transport2.RouteTable | null>(__goscript_router.NewMapRouter(cfg.Name), "yarpc.MapRouter", "yarpc.MapRouter"), cfg.RouterMiddleware); const __goscriptLiteralField1 = await convertOutbounds(cfg.Outbounds, cfg.OutboundMiddleware); const __goscriptLiteralField2 = await collectTransports((cfg.Inbounds as Inbounds), cfg.Outbounds); const __goscriptLiteralField3 = lifecycle.NewOnce(); return new Dispatcher({name: cfg.Name, table: __goscriptLiteralField0, inbounds: (cfg.Inbounds as Inbounds), outbounds: __goscriptLiteralField1, transports: __goscriptLiteralField2, inboundMiddleware: cfg.InboundMiddleware, log: logger, meter: meter, stopMeter: stopMeter, once: __goscriptLiteralField3}) })())
}

export function addObservingMiddleware(cfg: __goscript_config.Config, meter: metrics.Scope | $.VarRef<metrics.Scope> | null, logger: zap.Logger | $.VarRef<zap.Logger> | null, extractor: observability.ContextExtractor | null): __goscript_config.Config {
	if (cfg.DisableAutoObservabilityMiddleware) {
		return (cfg).clone()
	}

	let observer: observability.Middleware | $.VarRef<observability.Middleware> | null = observability.NewMiddleware(new observability.Config({Logger: logger, Scope: meter, ContextExtractor: extractor, MetricTagsBlocklist: cfg.Metrics.TagsBlocklist, Levels: new observability.LevelsConfig({Default: new observability.DirectionalLevelsConfig({Success: cfg.Logging.Levels.Success, Failure: cfg.Logging.Levels.Failure, ApplicationError: cfg.Logging.Levels.ApplicationError, ServerError: cfg.Logging.Levels.ServerError, ClientError: cfg.Logging.Levels.ClientError}, true), Inbound: new observability.DirectionalLevelsConfig({Success: cfg.Logging.Levels.Inbound.Success, Failure: cfg.Logging.Levels.Inbound.Failure, ApplicationError: cfg.Logging.Levels.Inbound.ApplicationError, ServerError: cfg.Logging.Levels.Inbound.ServerError, ClientError: cfg.Logging.Levels.Inbound.ClientError}, true), Outbound: new observability.DirectionalLevelsConfig({Success: cfg.Logging.Levels.Outbound.Success, Failure: cfg.Logging.Levels.Outbound.Failure, ApplicationError: cfg.Logging.Levels.Outbound.ApplicationError, ServerError: cfg.Logging.Levels.Outbound.ServerError, ClientError: cfg.Logging.Levels.Outbound.ClientError}, true)}, true)}, true))

	cfg.InboundMiddleware.Unary = inboundmiddleware.UnaryChain($.arrayToSlice<middleware.UnaryInbound | null>([$.interfaceValue<middleware.UnaryInbound | null>(observer, "*observability.Middleware", /* @__PURE__ */ $.pointerType("observability.Middleware")), cfg.InboundMiddleware.Unary]))
	cfg.InboundMiddleware.Oneway = inboundmiddleware.OnewayChain($.arrayToSlice<middleware.OnewayInbound | null>([$.interfaceValue<middleware.OnewayInbound | null>(observer, "*observability.Middleware", /* @__PURE__ */ $.pointerType("observability.Middleware")), cfg.InboundMiddleware.Oneway]))
	cfg.InboundMiddleware.Stream = inboundmiddleware.StreamChain($.arrayToSlice<middleware.StreamInbound | null>([$.interfaceValue<middleware.StreamInbound | null>(observer, "*observability.Middleware", /* @__PURE__ */ $.pointerType("observability.Middleware")), cfg.InboundMiddleware.Stream]))

	cfg.OutboundMiddleware.Unary = outboundmiddleware.UnaryChain($.arrayToSlice<middleware.UnaryOutbound | null>([cfg.OutboundMiddleware.Unary, $.interfaceValue<middleware.UnaryOutbound | null>(observer, "*observability.Middleware", /* @__PURE__ */ $.pointerType("observability.Middleware"))]))
	cfg.OutboundMiddleware.Oneway = outboundmiddleware.OnewayChain($.arrayToSlice<middleware.OnewayOutbound | null>([cfg.OutboundMiddleware.Oneway, $.interfaceValue<middleware.OnewayOutbound | null>(observer, "*observability.Middleware", /* @__PURE__ */ $.pointerType("observability.Middleware"))]))
	cfg.OutboundMiddleware.Stream = outboundmiddleware.StreamChain($.arrayToSlice<middleware.StreamOutbound | null>([cfg.OutboundMiddleware.Stream, $.interfaceValue<middleware.StreamOutbound | null>(observer, "*observability.Middleware", /* @__PURE__ */ $.pointerType("observability.Middleware"))]))

	return (cfg).clone()
}

export function addFirstOutboundMiddleware(cfg: __goscript_config.Config): __goscript_config.Config {
	let first: firstoutboundmiddleware.Middleware | $.VarRef<firstoutboundmiddleware.Middleware> | null = firstoutboundmiddleware.New()
	cfg.OutboundMiddleware.Unary = outboundmiddleware.UnaryChain($.arrayToSlice<middleware.UnaryOutbound | null>([$.interfaceValue<middleware.UnaryOutbound | null>(first, "*firstoutboundmiddleware.Middleware", /* @__PURE__ */ $.pointerType("firstoutboundmiddleware.Middleware")), cfg.OutboundMiddleware.Unary]))
	cfg.OutboundMiddleware.Oneway = outboundmiddleware.OnewayChain($.arrayToSlice<middleware.OnewayOutbound | null>([$.interfaceValue<middleware.OnewayOutbound | null>(first, "*firstoutboundmiddleware.Middleware", /* @__PURE__ */ $.pointerType("firstoutboundmiddleware.Middleware")), cfg.OutboundMiddleware.Oneway]))
	cfg.OutboundMiddleware.Stream = outboundmiddleware.StreamChain($.arrayToSlice<middleware.StreamOutbound | null>([$.interfaceValue<middleware.StreamOutbound | null>(first, "*firstoutboundmiddleware.Middleware", /* @__PURE__ */ $.pointerType("firstoutboundmiddleware.Middleware")), cfg.OutboundMiddleware.Stream]))
	return (cfg).clone()
}

export async function convertOutbounds(outbounds: Outbounds, mw: OutboundMiddleware): globalThis.Promise<Outbounds> {
	let outboundSpecs: Outbounds = $.makeMap<string, transport2.Outbounds>()

	for (let [outboundKey, outs] of outbounds?.entries() ?? []) {
		if (((outs.Unary == null) && (outs.Oneway == null)) && (outs.Stream == null)) {
			$.panic(await fmt.Sprintf("no outbound set for outbound key %q in dispatcher", outboundKey))
		}

		let unaryOutbound: transport2.UnaryOutbound | null = null! as transport2.UnaryOutbound | null
		let onewayOutbound: transport2.OnewayOutbound | null = null! as transport2.OnewayOutbound | null
		let streamOutbound: transport2.StreamOutbound | null = null! as transport2.StreamOutbound | null
		let serviceName = outboundKey

		// apply outbound middleware and create ValidatorOutbounds

		if (outs.Unary != null) {
			unaryOutbound = await middleware.ApplyUnaryOutbound(outs.Unary, mw.Unary)
			unaryOutbound = $.interfaceValue<transport2.UnaryOutbound | null>((() => { const __goscriptLiteralField4 = namerOrNil((unaryOutbound as transport2.Outbound | null)); return new request.UnaryValidatorOutbound({UnaryOutbound: unaryOutbound, Namer: __goscriptLiteralField4}, true) })(), "request.UnaryValidatorOutbound", "request.UnaryValidatorOutbound")
		}

		if (outs.Oneway != null) {
			onewayOutbound = await middleware.ApplyOnewayOutbound(outs.Oneway, mw.Oneway)
			onewayOutbound = $.interfaceValue<transport2.OnewayOutbound | null>((() => { const __goscriptLiteralField5 = namerOrNil((onewayOutbound as transport2.Outbound | null)); return new request.OnewayValidatorOutbound({OnewayOutbound: onewayOutbound, Namer: __goscriptLiteralField5}, true) })(), "request.OnewayValidatorOutbound", "request.OnewayValidatorOutbound")
		}

		if (outs.Stream != null) {
			streamOutbound = await middleware.ApplyStreamOutbound(outs.Stream, mw.Stream)
			streamOutbound = $.interfaceValue<transport2.StreamOutbound | null>((() => { const __goscriptLiteralField6 = namerOrNil((streamOutbound as transport2.Outbound | null)); return new request.StreamValidatorOutbound({StreamOutbound: streamOutbound, Namer: __goscriptLiteralField6}, true) })(), "request.StreamValidatorOutbound", "request.StreamValidatorOutbound")
		}

		if (!$.stringEqual(outs.ServiceName, "")) {
			serviceName = outs.ServiceName
		}

		$.mapSet(outboundSpecs, outboundKey, new transport2.Outbounds({ServiceName: serviceName, Unary: unaryOutbound, Oneway: onewayOutbound, Stream: streamOutbound}, true))
	}

	return outboundSpecs
}

export function namerOrNil(o: transport2.Outbound | null): transport2.Namer | null {
	let namer: transport2.Namer | null = null! as transport2.Namer | null
	{
		let [n, ok] = $.typeAssertTuple<transport2.Namer | null>(o, "transport.Namer")
		if (ok) {
			namer = n
		}
	}
	return namer
}

export async function collectTransports(inbounds: Inbounds, outbounds: Outbounds): globalThis.Promise<$.Slice<transport2.Transport | null>> {
	// Collect all unique transports from inbounds and outbounds.
	let transports: globalThis.Map<transport2.Transport | null, {}> | null = $.makeMap<transport2.Transport | null, {}>()
	for (let __goscriptRangeTarget1 = inbounds, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let inbound = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as transport2.Inbound | null)
		for (let __goscriptRangeTarget0 = ((__goscriptAwait = (inbound !== null && (inbound as any).__isVarRef !== true && (inbound as any).__goValue === undefined ? (inbound as Exclude<transport2.Inbound, null>) : $.pointerValue<Exclude<transport2.Inbound, null>>(inbound)).Transports(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<transport2.Transport | null>), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let transport = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as transport2.Transport | null)
			$.mapSet(transports, transport, {})
		}
	}
	for (const [__rangeKey, outbound] of outbounds?.entries() ?? []) {
		{
			let unary = outbound.Unary
			if (unary != null) {
				for (let __goscriptRangeTarget2 = ((__goscriptAwait = (unary !== null && (unary as any).__isVarRef !== true && (unary as any).__goValue === undefined ? (unary as Exclude<transport2.UnaryOutbound, null>) : $.pointerValue<Exclude<transport2.UnaryOutbound, null>>(unary)).Transports(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<transport2.Transport | null>), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
					let transport = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as transport2.Transport | null)
					$.mapSet(transports, transport, {})
				}
			}
		}
		{
			let oneway = outbound.Oneway
			if (oneway != null) {
				for (let __goscriptRangeTarget3 = ((__goscriptAwait = (oneway !== null && (oneway as any).__isVarRef !== true && (oneway as any).__goValue === undefined ? (oneway as Exclude<transport2.OnewayOutbound, null>) : $.pointerValue<Exclude<transport2.OnewayOutbound, null>>(oneway)).Transports(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<transport2.Transport | null>), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
					let transport = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as transport2.Transport | null)
					$.mapSet(transports, transport, {})
				}
			}
		}
		{
			let stream = outbound.Stream
			if (stream != null) {
				for (let __goscriptRangeTarget4 = ((__goscriptAwait = (stream !== null && (stream as any).__isVarRef !== true && (stream as any).__goValue === undefined ? (stream as Exclude<transport2.StreamOutbound, null>) : $.pointerValue<Exclude<transport2.StreamOutbound, null>>(stream)).Transports(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<transport2.Transport | null>), __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
					let transport = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as transport2.Transport | null)
					$.mapSet(transports, transport, {})
				}
			}
		}
	}
	let keys: $.Slice<transport2.Transport | null> = $.makeSlice<transport2.Transport | null>(0, $.len(transports))
	for (const [key, __rangeValue] of transports?.entries() ?? []) {
		keys = $.appendOne(keys, key, $.appendZeros.nil)
	}
	return keys
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (__goscript_dispatcher_introspection.outboundStatuses_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (__goscript_dispatcher_introspection.outboundStatuses_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (__goscript_dispatcher_introspection.outboundStatuses_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("introspection.OutboundStatus", "yarpc.outboundStatuses"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (transport2.Type_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int", "transport.Type"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
