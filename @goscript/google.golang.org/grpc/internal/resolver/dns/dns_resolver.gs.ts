// Generated file based on dns_resolver.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as net from "@goscript/net/index.js"

import * as os from "@goscript/os/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as grpclbstate from "@goscript/google.golang.org/grpc/balancer/grpclb/state/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as backoff from "@goscript/google.golang.org/grpc/internal/backoff/index.js"

import * as envconfig from "@goscript/google.golang.org/grpc/internal/envconfig/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/resolver/dns/internal/index.js"

import * as resolver2 from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/serviceconfig/index.js"

import * as jsontext from "@goscript/encoding/json/jsontext/index.js"

import * as internal2 from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as url from "@goscript/net/url/index.js"
import "@goscript/context/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/net/index.js"
import "@goscript/os/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/balancer/grpclb/state/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/internal/backoff/index.js"
import "@goscript/google.golang.org/grpc/internal/envconfig/index.js"
import "@goscript/google.golang.org/grpc/internal/resolver/dns/internal/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"
import "@goscript/encoding/json/jsontext/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/net/url/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/resolver/dns", ["dns.dnsBuilder", "dns.deadResolver", "dns.dnsResolver", "dns.rawChoice"])

export class dnsBuilder {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dnsBuilder {
		return new dnsBuilder(this, true)
	}

	public __goscriptAssign(source: dnsBuilder): void {
	}

	public async Build(target: resolver2.Target, cc: resolver2.ClientConn | null, opts: resolver2.BuildOptions): globalThis.Promise<[resolver2.Resolver | null, $.GoError]> {
		const b: dnsBuilder | $.VarRef<dnsBuilder> | null = this;
		let [host, port, err] = await parseTarget(target.Endpoint(), "443")
		if (err != null) {
			return [null, err]
		}

		// IP address.
		{
			let [ipAddr, ok] = formatIP(host)
			if (ok) {
				let addr: $.Slice<resolver2.Address> = $.arrayToSlice<resolver2.Address>([new resolver2.Address({Addr: $.concatString(($.concatString(ipAddr, ":")), port)}, true)])
				void (__goscriptAwait = (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? (cc as Exclude<resolver2.ClientConn, null>) : $.pointerValue<Exclude<resolver2.ClientConn, null>>(cc)).UpdateState(new resolver2.State({Addresses: addr}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [$.interfaceValue<resolver2.Resolver | null>(new deadResolver(undefined, true), "dns.deadResolver", "dns.deadResolver"), null]
			}
		}

		// DNS address (non-IP).
		let [ctx, cancel] = context.WithCancel($.pointerValueOrNil(context.Background())!)
		let d: dnsResolver | $.VarRef<dnsResolver> | null = new dnsResolver({host: host, port: port, ctx: ctx, cancel: cancel, cc: cc, rn: $.makeChannel<{}>(1, {}, "both"), disableServiceConfig: opts.DisableServiceConfig})
		let d$: dnsResolver = d == null ? $.pointerTarget<dnsResolver>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dnsResolver>(d)

		let __goscriptTuple0: any = await internal.NewNetResolver!(target.URL.Host);
		;(d$ as dnsResolver).resolver = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}

		void (d$ as dnsResolver).wg.Add(1)
		queueMicrotask(async () => { await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dnsResolver).watcher() : dnsResolver.prototype.watcher.call(d)) })
		return [$.interfaceValue<resolver2.Resolver | null>(d, "*dns.dnsResolver", /* @__PURE__ */ $.pointerType("dns.dnsResolver")), null]
	}

	public Scheme(): string {
		const b: dnsBuilder | $.VarRef<dnsBuilder> | null = this;
		return "dns"
	}

	static __typeInfo = $.registerStructType(
		"dns.dnsBuilder",
		() => new dnsBuilder(),
		() => [$.methodSignature("Build", [["target", "resolver.Target"], ["cc", "resolver.ClientConn"], ["opts", "resolver.BuildOptions"]], ["resolver.Resolver", "error"], true), $.methodSignature("Scheme", [], [/* @__PURE__ */ $.basicType("string")], true)],
		dnsBuilder,
		() => []
	)
}

export class deadResolver {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): deadResolver {
		return new deadResolver(this, true)
	}

	public __goscriptAssign(source: deadResolver): void {
	}

	public Close(): void {
	}

	public ResolveNow(_p0: resolver2.ResolveNowOptions): void {
	}

	static __typeInfo = $.registerStructType(
		"dns.deadResolver",
		() => new deadResolver(),
		() => [$.methodSignature("Close"), $.methodSignature("ResolveNow", ["resolver.ResolveNowOptions"])],
		deadResolver,
		() => []
	)
}

export class dnsResolver {
	public get host(): string {
		return this._fields.host
	}

	public set host(value: string) {
		this._fields.host = value
	}

	public get port(): string {
		return this._fields.port
	}

	public set port(value: string) {
		this._fields.port = value
	}

	public get resolver(): internal.NetResolver | null {
		return this._fields.resolver
	}

	public set resolver(value: internal.NetResolver | null) {
		this._fields.resolver = value
	}

	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get cancel(): (() => void) | null {
		return this._fields.cancel
	}

	public set cancel(value: (() => void) | null) {
		this._fields.cancel = value
	}

	public get cc(): resolver2.ClientConn | null {
		return this._fields.cc
	}

	public set cc(value: resolver2.ClientConn | null) {
		this._fields.cc = value
	}

	// rn channel is used by ResolveNow() to force an immediate resolution of the
	// target.
	public get rn(): $.Channel<{}> | null {
		return this._fields.rn
	}

	public set rn(value: $.Channel<{}> | null) {
		this._fields.rn = value
	}

	// wg is used to enforce Close() to return after the watcher() goroutine has
	// finished. Otherwise, data race will be possible. [Race Example] in
	// dns_resolver_test we replace the real lookup functions with mocked ones to
	// facilitate testing. If Close() doesn't wait for watcher() goroutine
	// finishes, race detector sometimes will warns lookup (READ the lookup
	// function pointers) inside watcher() goroutine has data race with
	// replaceNetFunc (WRITE the lookup function pointers).
	public get wg(): sync.WaitGroup {
		return this._fields.wg
	}

	public set wg(value: sync.WaitGroup) {
		this._fields.wg = value
	}

	public get disableServiceConfig(): boolean {
		return this._fields.disableServiceConfig
	}

	public set disableServiceConfig(value: boolean) {
		this._fields.disableServiceConfig = value
	}

	public _fields: {
		host: string
		port: string
		resolver: internal.NetResolver | null
		ctx: context.Context | null
		cancel: (() => void) | null
		cc: resolver2.ClientConn | null
		rn: $.Channel<{}> | null
		wg: sync.WaitGroup
		disableServiceConfig: boolean
	}

	constructor(init?: Partial<{host?: string, port?: string, resolver?: internal.NetResolver | null, ctx?: context.Context | null, cancel?: (() => void) | null, cc?: resolver2.ClientConn | null, rn?: $.Channel<{}> | null, wg?: sync.WaitGroup, disableServiceConfig?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			host: init?.host ?? ("" as string),
			port: init?.port ?? ("" as string),
			resolver: init?.resolver ?? (null! as internal.NetResolver | null),
			ctx: init?.ctx ?? (null! as context.Context | null),
			cancel: init?.cancel ?? (null! as (() => void) | null),
			cc: init?.cc ?? (null! as resolver2.ClientConn | null),
			rn: init?.rn ?? (null! as $.Channel<{}> | null),
			wg: init?.wg ? $.markAsStructValue($.cloneStructValue(init.wg)) : $.markAsStructValue(new sync.WaitGroup()),
			disableServiceConfig: init?.disableServiceConfig ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dnsResolver {
		return new dnsResolver(this, true)
	}

	public __goscriptAssign(source: dnsResolver): void {
		const target = this._fields
		const values = source._fields
		target.host = values.host
		target.port = values.port
		target.resolver = $.assignFieldValue(target.resolver, values.resolver, "internal.NetResolver")
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.cancel = values.cancel
		target.cc = $.assignFieldValue(target.cc, values.cc, "resolver.ClientConn")
		target.rn = values.rn
		$.assignStruct(target.wg, values.wg)
		target.disableServiceConfig = values.disableServiceConfig
	}

	public async Close(): globalThis.Promise<void> {
		const d: dnsResolver | $.VarRef<dnsResolver> | null = this;
		const d$: dnsResolver = d == null ? $.pointerTarget<dnsResolver>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dnsResolver>(d)
		void (__goscriptAwait = (d$ as dnsResolver).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (d$ as dnsResolver).wg.Wait()
	}

	public async ResolveNow(_p0: resolver2.ResolveNowOptions): globalThis.Promise<void> {
		const d: dnsResolver | $.VarRef<dnsResolver> | null = this;
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
			{
				id: 0,
				isSend: true,
				channel: $.pointerValue<dnsResolver>(d).rn,
				value: {},
			},
			{
				id: -1,
				isSend: false,
				channel: null,
			}
		], true)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
	}

	public async lookup(): globalThis.Promise<[resolver2.State | $.VarRef<resolver2.State> | null, $.GoError]> {
		const d: dnsResolver | $.VarRef<dnsResolver> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const d$: dnsResolver = d == null ? $.pointerTarget<dnsResolver>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dnsResolver>(d)
		let __goscriptTuple1: any = context.WithTimeout($.pointerValueOrNil((d$ as dnsResolver).ctx)!, ResolvingTimeout)
		let ctx = __goscriptTuple1[0]
		let cancel = __goscriptTuple1[1]
		const __goscriptDeferCallee0 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		let __goscriptTuple2: any = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dnsResolver).lookupSRV(ctx) : dnsResolver.prototype.lookupSRV.call(d, ctx))
		let srv: $.Slice<resolver2.Address> = __goscriptTuple2[0]
		let srvErr = __goscriptTuple2[1]
		let __goscriptTuple3: any = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dnsResolver).lookupHost(ctx) : dnsResolver.prototype.lookupHost.call(d, ctx))
		let addrs: $.Slice<resolver2.Address> = __goscriptTuple3[0]
		let hostErr = __goscriptTuple3[1]
		if ((hostErr != null) && ((srvErr != null) || ($.sliceLen(srv) == 0))) {
			return [null, hostErr]
		}

		let state = $.varRef(new resolver2.State({Addresses: addrs}, true))
		if ($.sliceLen(srv) > 0) {
			state.value = $.assignStruct(state.value, grpclbstate.Set((state.value).clone(), new grpclbstate.State({BalancerAddresses: srv})))
		}
		if (!(d$ as dnsResolver).disableServiceConfig) {
			state.value.ServiceConfig = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dnsResolver).lookupTXT(ctx) : dnsResolver.prototype.lookupTXT.call(d, ctx))
		}
		return [state, null]
	}

	public async lookupHost(ctx: context.Context | null): globalThis.Promise<[$.Slice<resolver2.Address>, $.GoError]> {
		const d: dnsResolver | $.VarRef<dnsResolver> | null = this;
		const d$: dnsResolver = d == null ? $.pointerTarget<dnsResolver>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dnsResolver>(d)
		let __goscriptTuple4: any = await $.pointerValue<Exclude<internal.NetResolver, null>>((d$ as dnsResolver).resolver).LookupHost(ctx, (d$ as dnsResolver).host)
		let addrs: $.Slice<string> = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		if (err != null) {
			err = await handleDNSError(err, "A")
			return [null, err]
		}
		let newAddrs: $.Slice<resolver2.Address> = $.makeSlice<resolver2.Address>(0, $.sliceLen(addrs), undefined, () => new resolver2.Address(undefined, true))
		for (let __goscriptRangeTarget0 = addrs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let a = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
			let [ip, ok] = formatIP(a)
			if (!ok) {
				return [null, fmt.Errorf("dns: error parsing A record IP address %v", a)]
			}
			let addr = $.concatString(($.concatString(ip, ":")), (d$ as dnsResolver).port)
			newAddrs = $.appendOne(newAddrs, new resolver2.Address({Addr: addr}, true))
		}
		return [newAddrs, null]
	}

	public async lookupSRV(ctx: context.Context | null): globalThis.Promise<[$.Slice<resolver2.Address>, $.GoError]> {
		const d: dnsResolver | $.VarRef<dnsResolver> | null = this;
		const d$: dnsResolver = d == null ? $.pointerTarget<dnsResolver>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dnsResolver>(d)
		// Skip this particular host to avoid timeouts with some versions of
		// systemd-resolved.
		if (!EnableSRVLookups || ($.stringEqual((d$ as dnsResolver).host, "metadata.google.internal."))) {
			return [null, null]
		}
		let newAddrs: $.Slice<resolver2.Address> = null! as $.Slice<resolver2.Address>
		let __goscriptTuple5: any = await $.pointerValue<Exclude<internal.NetResolver, null>>((d$ as dnsResolver).resolver).LookupSRV(ctx, "grpclb", "tcp", (d$ as dnsResolver).host)
		let srvs: $.Slice<net.SRV | $.VarRef<net.SRV> | null> = __goscriptTuple5[1]
		let err = __goscriptTuple5[2]
		if (err != null) {
			err = await handleDNSError(err, "SRV")
			return [null, err]
		}
		for (let __goscriptRangeTarget2 = srvs, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let s = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as net.SRV | $.VarRef<net.SRV> | null)
			let __goscriptTuple6: any = await $.pointerValue<Exclude<internal.NetResolver, null>>((d$ as dnsResolver).resolver).LookupHost(ctx, $.pointerValue<net.SRV>(s).Target)
			let lbAddrs: $.Slice<string> = __goscriptTuple6[0]
			let __goscriptShadow0 = __goscriptTuple6[1]
			if (__goscriptShadow0 != null) {
				__goscriptShadow0 = await handleDNSError(__goscriptShadow0, "A")
				if (__goscriptShadow0 == null) {
					// If there are other SRV records, look them up and ignore this
					// one that does not exist.
					continue
				}
				return [null, __goscriptShadow0]
			}
			for (let __goscriptRangeTarget1 = lbAddrs, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let a = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
				let [ip, ok] = formatIP(a)
				if (!ok) {
					return [null, fmt.Errorf("dns: error parsing A record IP address %v", a)]
				}
				let addr = $.concatString(($.concatString(ip, ":")), strconv.Itoa($.int($.pointerValue<net.SRV>(s).Port)))
				newAddrs = $.appendOne(newAddrs, new resolver2.Address({Addr: addr, ServerName: $.pointerValue<net.SRV>(s).Target}, true))
			}
		}
		return [newAddrs, null]
	}

	public async lookupTXT(ctx: context.Context | null): globalThis.Promise<serviceconfig.ParseResult | $.VarRef<serviceconfig.ParseResult> | null> {
		const d: dnsResolver | $.VarRef<dnsResolver> | null = this;
		const d$: dnsResolver = d == null ? $.pointerTarget<dnsResolver>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dnsResolver>(d)
		let __goscriptTuple7: any = await $.pointerValue<Exclude<internal.NetResolver, null>>((d$ as dnsResolver).resolver).LookupTXT(ctx, $.concatString("_grpc_config.", (d$ as dnsResolver).host))
		let ss: $.Slice<string> = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		if (err != null) {
			if (envconfig.TXTErrIgnore) {
				return null
			}
			{
				err = await handleDNSError(err, "TXT")
				if (err != null) {
					return new serviceconfig.ParseResult({Err: err})
				}
			}
			return null
		}
		let res: string = ""
		for (let __goscriptRangeTarget3 = ss, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let s = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
			res = $.concatString(res, s)
		}

		// TXT record must have "grpc_config=" attribute in order to be used as
		// service config.
		if (!strings.HasPrefix(res, "grpc_config=")) {
			void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Warningf("dns: TXT record %v missing %v attribute", $.arrayToSlice<any>([res, "grpc_config="])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			// This is not an error; it is the equivalent of not having a service
			// config.
			return null
		}
		let sc = await canaryingSC(strings.TrimPrefix(res, "grpc_config="))
		return $.pointerValue<Exclude<resolver2.ClientConn, null>>((d$ as dnsResolver).cc).ParseServiceConfig(sc)
	}

	public async watcher(): globalThis.Promise<void> {
		const d: dnsResolver | $.VarRef<dnsResolver> | null = this;
		using __defer = new $.DisposableStack()
		const d$: dnsResolver = d == null ? $.pointerTarget<dnsResolver>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<dnsResolver>(d)
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Done())((d$ as dnsResolver).wg), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*WaitGroup).Done-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		let backoffIndex = 1
		while (true) {
			let __goscriptTuple8: any = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as dnsResolver).lookup() : dnsResolver.prototype.lookup.call(d))
			let state: resolver2.State | $.VarRef<resolver2.State> | null = __goscriptTuple8[0]
			let err = __goscriptTuple8[1]
			if (err != null) {
				// Report error to the underlying grpc.ClientConn.
				void (__goscriptAwait = $.pointerValue<Exclude<resolver2.ClientConn, null>>((d$ as dnsResolver).cc).ReportError(err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				err = (__goscriptAwait = $.pointerValue<Exclude<resolver2.ClientConn, null>>((d$ as dnsResolver).cc).UpdateState(($.pointerValue<resolver2.State>(state)).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}

			let nextResolutionTime: time.Time = $.markAsStructValue(new time.Time())
			if (err == null) {
				// Success resolving, wait for the next ResolveNow. However, also wait 30
				// seconds at the very least to prevent constantly re-resolving.
				backoffIndex = 1
				nextResolutionTime = $.assignStruct(nextResolutionTime, $.markAsStructValue($.cloneStructValue(((__goscriptAwait = internal.TimeNowFunc!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Add(MinResolutionInterval))
				const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
					{
						id: 0,
						isSend: false,
						channel: ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((d$ as dnsResolver).ctx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
						onSelected: async (__goscriptSelect1Result) => {
							return $.selectVoidReturn()
						}
					},
					{
						id: 1,
						isSend: false,
						channel: (d$ as dnsResolver).rn,
					}
				], false)
				if (__goscriptSelect1HasReturn) {
					return __goscriptSelect1Value
				}
			} else {
				// Poll on an error found in DNS Resolver or an error received from
				// ClientConn.
				nextResolutionTime = $.assignStruct(nextResolutionTime, $.markAsStructValue($.cloneStructValue(((__goscriptAwait = internal.TimeNowFunc!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Add(await $.markAsStructValue($.cloneStructValue($.pointerValue<backoff.Exponential>(backoff.DefaultExponential))).Backoff(backoffIndex)))
				backoffIndex++
			}
			const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: ((__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>((d$ as dnsResolver).ctx).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect2Result) => {
						return $.selectVoidReturn()
					}
				},
				{
					id: 1,
					isSend: false,
					channel: ((__goscriptAwait = internal.TimeAfterFunc!((__goscriptAwait = internal.TimeUntilFunc!($.markAsStructValue($.cloneStructValue(nextResolutionTime))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<time.Time> | null),
				}
			], false)
			if (__goscriptSelect2HasReturn) {
				return __goscriptSelect2Value
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"dns.dnsResolver",
		() => new dnsResolver(),
		() => [$.methodSignature("Close", [], [], true), $.methodSignature("ResolveNow", ["resolver.ResolveNowOptions"], [], true), $.methodSignature("lookup", [], [/* @__PURE__ */ $.pointerType("resolver.State"), "error"], true), $.methodSignature("lookupHost", [["ctx", "context.Context"]], [/* @__PURE__ */ $.sliceType("resolver.Address"), "error"], true), $.methodSignature("lookupSRV", [["ctx", "context.Context"]], [/* @__PURE__ */ $.sliceType("resolver.Address"), "error"], true), $.methodSignature("lookupTXT", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("serviceconfig.ParseResult")], true), $.methodSignature("watcher", [], [], true)],
		dnsResolver,
		() => [/* @__PURE__ */ $.structField("host", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/resolver/dns" }), /* @__PURE__ */ $.structField("port", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "google.golang.org/grpc/internal/resolver/dns" }), /* @__PURE__ */ $.structField("resolver", "internal.NetResolver", [2], 32, false, { pkgPath: "google.golang.org/grpc/internal/resolver/dns" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [3], 48, false, { pkgPath: "google.golang.org/grpc/internal/resolver/dns" }), /* @__PURE__ */ $.structField("cancel", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [4], 64, false, { pkgPath: "google.golang.org/grpc/internal/resolver/dns" }), /* @__PURE__ */ $.structField("cc", "resolver.ClientConn", [5], 72, false, { pkgPath: "google.golang.org/grpc/internal/resolver/dns" }), /* @__PURE__ */ $.structField("rn", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [6], 88, false, { pkgPath: "google.golang.org/grpc/internal/resolver/dns" }), /* @__PURE__ */ $.structField("wg", "sync.WaitGroup", [7], 96, false, { pkgPath: "google.golang.org/grpc/internal/resolver/dns" }), /* @__PURE__ */ $.structField("disableServiceConfig", /* @__PURE__ */ $.basicType("bool"), [8], 112, false, { pkgPath: "google.golang.org/grpc/internal/resolver/dns" })]
	)
}

export class rawChoice {
	public get ClientLanguage(): $.VarRef<$.Slice<string>> | null {
		return this._fields.ClientLanguage
	}

	public set ClientLanguage(value: $.VarRef<$.Slice<string>> | null) {
		this._fields.ClientLanguage = value
	}

	public get Percentage(): $.VarRef<number> | null {
		return this._fields.Percentage
	}

	public set Percentage(value: $.VarRef<number> | null) {
		this._fields.Percentage = value
	}

	public get ClientHostName(): $.VarRef<$.Slice<string>> | null {
		return this._fields.ClientHostName
	}

	public set ClientHostName(value: $.VarRef<$.Slice<string>> | null) {
		this._fields.ClientHostName = value
	}

	public get ServiceConfig(): $.VarRef<jsontext.Value> | null {
		return this._fields.ServiceConfig
	}

	public set ServiceConfig(value: $.VarRef<jsontext.Value> | null) {
		this._fields.ServiceConfig = value
	}

	public _fields: {
		ClientLanguage: $.VarRef<$.Slice<string>> | null
		Percentage: $.VarRef<number> | null
		ClientHostName: $.VarRef<$.Slice<string>> | null
		ServiceConfig: $.VarRef<jsontext.Value> | null
	}

	constructor(init?: Partial<{ClientLanguage?: $.VarRef<$.Slice<string>> | null, Percentage?: $.VarRef<number> | null, ClientHostName?: $.VarRef<$.Slice<string>> | null, ServiceConfig?: $.VarRef<jsontext.Value> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ClientLanguage: init?.ClientLanguage ?? (null! as $.VarRef<$.Slice<string>> | null),
			Percentage: init?.Percentage ?? (null! as $.VarRef<number> | null),
			ClientHostName: init?.ClientHostName ?? (null! as $.VarRef<$.Slice<string>> | null),
			ServiceConfig: init?.ServiceConfig ?? (null! as $.VarRef<jsontext.Value> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): rawChoice {
		return new rawChoice(this, true)
	}

	public __goscriptAssign(source: rawChoice): void {
		const target = this._fields
		const values = source._fields
		target.ClientLanguage = values.ClientLanguage
		target.Percentage = values.Percentage
		target.ClientHostName = values.ClientHostName
		target.ServiceConfig = values.ServiceConfig
	}

	static __typeInfo = $.registerStructType(
		"dns.rawChoice",
		() => new rawChoice(),
		() => [],
		rawChoice,
		() => [/* @__PURE__ */ $.structField("ClientLanguage", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))), [0], 0, true, { tag: "json:\"clientLanguage,omitempty\"" }), /* @__PURE__ */ $.structField("Percentage", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int")), [1], 8, true, { tag: "json:\"percentage,omitempty\"" }), /* @__PURE__ */ $.structField("ClientHostName", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))), [2], 16, true, { tag: "json:\"clientHostName,omitempty\"" }), /* @__PURE__ */ $.structField("ServiceConfig", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")), [3], 24, true, { tag: "json:\"serviceConfig,omitempty\"" })]
	)
}

export const defaultPort: string = "443"

export const defaultDNSSvrPort: string = "53"

export const golang: string = "GO"

export const txtPrefix: string = "_grpc_config."

export const txtAttribute: string = "grpc_config="

export let EnableSRVLookups: boolean = false

export function __goscript_set_EnableSRVLookups(__goscriptValue: boolean): void {
	EnableSRVLookups = __goscriptValue
}

export let MinResolutionInterval: time.Duration = 30000000000n

export function __goscript_set_MinResolutionInterval(__goscriptValue: time.Duration): void {
	MinResolutionInterval = __goscriptValue
}

export let ResolvingTimeout: time.Duration = 30000000000n

export function __goscript_set_ResolvingTimeout(__goscriptValue: time.Duration): void {
	ResolvingTimeout = __goscriptValue
}

export let logger: grpclog.DepthLoggerV2 | null = await grpclog.Component("dns")

export function __goscript_set_logger(__goscriptValue: grpclog.DepthLoggerV2 | null): void {
	logger = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await resolver2.Register(NewBuilder())
	internal.__goscript_set_TimeAfterFunc(time.After)
	internal.__goscript_set_TimeNowFunc(time.Now)
	internal.__goscript_set_TimeUntilFunc(time.Until)
	internal.__goscript_set_NewNetResolver(newNetResolver)
	internal.__goscript_set_AddressDialer(addressDialer)
}

export let addressDialer: ((address: string) => ((_p0: context.Context | null, _p1: string, _p2: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null | globalThis.Promise<((_p0: context.Context | null, _p1: string, _p2: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null>) | null = $.functionValue(async (address: string): globalThis.Promise<((_p0: context.Context | null, _p1: string, _p2: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null> => {
	return $.functionValue(async (ctx: context.Context | null, network: string, _p2: string): globalThis.Promise<[net.Conn | null, $.GoError]> => {
		let dialer: $.VarRef<net.Dialer> = $.varRef(new net.Dialer(undefined, true))
		return await dialer.value.DialContext(ctx, network, address)
	}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo))
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo)] } as $.FunctionTypeInfo))

export function __goscript_set_addressDialer(__goscriptValue: ((address: string) => ((_p0: context.Context | null, _p1: string, _p2: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null | globalThis.Promise<((_p0: context.Context | null, _p1: string, _p2: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null>) | null): void {
	addressDialer = __goscriptValue
}

export let newNetResolver: ((authority: string) => [internal.NetResolver | null, $.GoError] | globalThis.Promise<[internal.NetResolver | null, $.GoError]>) | null = $.functionValue(async (authority: string): globalThis.Promise<[internal.NetResolver | null, $.GoError]> => {
	if ($.stringEqual(authority, "")) {
		return [$.interfaceValue<internal.NetResolver | null>(net.DefaultResolver, "*net.Resolver", /* @__PURE__ */ $.pointerType("net.Resolver")), null]
	}

	let [host, port, err] = await parseTarget(authority, "53")
	if (err != null) {
		return [null, err]
	}

	let authorityWithPort = net.JoinHostPort(host, port)

	return [$.interfaceValue<internal.NetResolver | null>((await (async () => { const __goscriptLiteralField0 = await internal.AddressDialer!(authorityWithPort); return new net.Resolver({PreferGo: true, Dial: __goscriptLiteralField0}) })()), "*net.Resolver", /* @__PURE__ */ $.pointerType("net.Resolver")), null]
}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: ["internal.NetResolver", "error"] } as $.FunctionTypeInfo))

export function __goscript_set_newNetResolver(__goscriptValue: ((authority: string) => [internal.NetResolver | null, $.GoError] | globalThis.Promise<[internal.NetResolver | null, $.GoError]>) | null): void {
	newNetResolver = __goscriptValue
}

export function NewBuilder(): resolver2.Builder | null {
	return $.interfaceValue<resolver2.Builder | null>(new dnsBuilder(), "*dns.dnsBuilder", /* @__PURE__ */ $.pointerType("dns.dnsBuilder"))
}

export async function handleDNSError(err: $.GoError, lookupType: string): globalThis.Promise<$.GoError> {
	let __goscriptTuple9: any = $.typeAssertTuple<net.DNSError | $.VarRef<net.DNSError> | null>(err, /* @__PURE__ */ $.pointerType("net.DNSError"))
	let dnsErr: net.DNSError | $.VarRef<net.DNSError> | null = __goscriptTuple9[0]
	let ok = __goscriptTuple9[1]
	let dnsErr$: net.DNSError = dnsErr == null ? $.pointerTarget<net.DNSError>(dnsErr) : (dnsErr as any).__isVarRef === true ? (dnsErr as any).value : (dnsErr as any).__goValue === undefined ? (dnsErr as any) : $.pointerTarget<net.DNSError>(dnsErr)
	if ((ok && !(dnsErr$ as net.DNSError).IsTimeout) && !(dnsErr$ as net.DNSError).IsTemporary) {
		// Timeouts and temporary errors should be communicated to gRPC to
		// attempt another DNS query (with backoff).  Other errors should be
		// suppressed (they may represent the absence of a TXT record).
		return null
	}
	if (err != null) {
		err = fmt.Errorf("dns: %v record lookup error: %v", lookupType, (err as any))
		void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Info($.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return err
}

export function formatIP(addr: string): [string, boolean] {
	let addrIP: string = ""
	let ok: boolean = false
	let ip: net.IP = (net.ParseIP(addr) as net.IP)
	if (ip == null) {
		return ["", false]
	}
	if (net.IP_To4(ip) != null) {
		return [addr, true]
	}
	return [$.concatString(($.concatString("[", addr)), "]"), true]
}

export async function parseTarget(target: string, defaultPort: string): globalThis.Promise<[string, string, $.GoError]> {
	let host: string = ""
	let port: string = ""
	let err: $.GoError = null! as $.GoError
	if ($.stringEqual(target, "")) {
		return ["", "", internal.ErrMissingAddr]
	}
	{
		let ip: net.IP = (net.ParseIP(target) as net.IP)
		if (ip != null) {
			// target is an IPv4 or IPv6(without brackets) address
			return [target, defaultPort, null]
		}
	}
	{
		let __goscriptTuple10: any = await net.SplitHostPort(target)
		host = __goscriptTuple10[0]
		port = __goscriptTuple10[1]
		err = __goscriptTuple10[2]
		if (err == null) {
			if ($.stringEqual(port, "")) {
				// If the port field is empty (target ends with colon), e.g. "[::1]:",
				// this is an error.
				return ["", "", internal.ErrEndsWithColon]
			}
			// target has port, i.e ipv4-host:port, [ipv6-host]:port, host-name:port
			if ($.stringEqual(host, "")) {
				// Keep consistent with net.Dial(): If the host is empty, as in ":80",
				// the local system is assumed.
				host = "localhost"
			}
			return [host, port, null]
		}
	}
	{
		let __goscriptTuple11: any = await net.SplitHostPort($.concatString(($.concatString(target, ":")), defaultPort))
		host = __goscriptTuple11[0]
		port = __goscriptTuple11[1]
		err = __goscriptTuple11[2]
		if (err == null) {
			// target doesn't have port
			return [host, port, null]
		}
	}
	return ["", "", fmt.Errorf("invalid target address %v, error info: %v", target, (err as any))]
}

export function containsString(a: $.VarRef<$.Slice<string>> | null, b: string): boolean {
	if (a == null) {
		return true
	}
	for (let __goscriptRangeTarget4 = $.pointerValue<$.Slice<string>>(a), __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let c = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as string)
		if ($.stringEqual(c, b)) {
			return true
		}
	}
	return false
}

export async function chosenByPercentage(a: $.VarRef<number> | null): globalThis.Promise<boolean> {
	if (a == null) {
		return true
	}
	return (await rand.Intn(100) + 1) <= $.pointerValue<number>(a)
}

export async function canaryingSC(js: string): globalThis.Promise<string> {
	if ($.stringEqual(js, "")) {
		return ""
	}
	let rcs: $.VarRef<$.Slice<rawChoice>> = $.varRef(null! as $.Slice<rawChoice>)
	let err: $.GoError = await json.Unmarshal($.stringToBytes(js), $.interfaceValue(rcs, "*[]dns.rawChoice", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType("dns.rawChoice"))))
	if (err != null) {
		void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Warningf("dns: error parsing service config json: %v", $.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return ""
	}
	let __goscriptTuple12: any = os.Hostname()
	let cliHostname = __goscriptTuple12[0]
	err = __goscriptTuple12[1]
	if (err != null) {
		void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Warningf("dns: error getting client hostname: %v", $.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return ""
	}
	let sc: string = ""
	for (let __goscriptRangeTarget5 = rcs.value, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let c = ((__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as rawChoice)).clone()
		if (((!containsString(c.ClientLanguage, "GO") || !await chosenByPercentage(c.Percentage)) || !containsString(c.ClientHostName, cliHostname)) || (c.ServiceConfig == null)) {
			continue
		}
		sc = $.bytesToString($.pointerValue<json.RawMessage>(c.ServiceConfig))
		break
	}
	return sc
}

var __goscriptAwait: any

await __goscriptInit0()
