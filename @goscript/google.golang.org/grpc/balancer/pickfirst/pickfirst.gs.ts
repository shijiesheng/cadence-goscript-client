// Generated file based on pickfirst.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as balancer from "@goscript/google.golang.org/grpc/balancer/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import * as internalgrpclog from "@goscript/google.golang.org/grpc/internal/grpclog/index.js"

import * as pretty from "@goscript/google.golang.org/grpc/internal/pretty/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/serviceconfig/index.js"

import type * as jsontext from "@goscript/encoding/json/jsontext/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/google.golang.org/grpc/balancer/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/grpclog/index.js"
import "@goscript/google.golang.org/grpc/internal/pretty/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"

$.registerTypePackagePath("google.golang.org/grpc/balancer/pickfirst", ["pickfirst.pickfirstBuilder", "pickfirst.pfConfig", "pickfirst.pickfirstBalancer", "pickfirst.Shuffler", "pickfirst.picker", "pickfirst.idlePicker"])

export type Shuffler = {
	ShuffleAddressListForTesting(n: number, swap: ((i: number, j: number) => void) | null): void
}

$.registerInterfaceType(
	"pickfirst.Shuffler",
	null,
	[$.methodSignature("ShuffleAddressListForTesting", [["n", /* @__PURE__ */ $.basicType("int")], ["swap", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo)]])]
);

export class pickfirstBuilder {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pickfirstBuilder {
		return new pickfirstBuilder(this, true)
	}

	public __goscriptAssign(source: pickfirstBuilder): void {
	}

	public async Build(cc: balancer.ClientConn | null, _p1: balancer.BuildOptions): globalThis.Promise<balancer.Balancer | null> {
		let b: pickfirstBalancer | $.VarRef<pickfirstBalancer> | null = new pickfirstBalancer({cc: cc})
		$.pointerValue<pickfirstBalancer>(b).logger = internalgrpclog.NewPrefixLogger(logger, await fmt.Sprintf("[pick-first-lb %p] ", $.interfaceValue(b, "*pickfirst.pickfirstBalancer", /* @__PURE__ */ $.pointerType("pickfirst.pickfirstBalancer"))))
		return $.interfaceValue<balancer.Balancer | null>(b, "*pickfirst.pickfirstBalancer", /* @__PURE__ */ $.pointerType("pickfirst.pickfirstBalancer"))
	}

	public Name(): string {
		return "pick_first"
	}

	public async ParseConfig(js: json.RawMessage): globalThis.Promise<[serviceconfig.LoadBalancingConfig | null, $.GoError]> {
		let cfg: $.VarRef<pfConfig> = $.varRef(new pfConfig(undefined, true))
		{
			let err = await json.Unmarshal(js, $.interfaceValue(cfg, "*pickfirst.pfConfig", /* @__PURE__ */ $.pointerType("pickfirst.pfConfig")))
			if (err != null) {
				return [null, fmt.Errorf("pickfirst: unable to unmarshal LB policy config: %s, error: %v", $.bytesToString(js), (err as any))]
			}
		}
		return [$.interfaceValue<serviceconfig.LoadBalancingConfig | null>((cfg.value).clone(), "pickfirst.pfConfig", "pickfirst.pfConfig"), null]
	}

	static __typeInfo = $.registerStructType(
		"pickfirst.pickfirstBuilder",
		() => new pickfirstBuilder(),
		() => [$.methodSignature("Build", [["cc", "balancer.ClientConn"], ["_", "balancer.BuildOptions"]], ["balancer.Balancer"]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ParseConfig", [["js", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "jsontext.Value")]], ["serviceconfig.LoadBalancingConfig", "error"])],
		pickfirstBuilder,
		() => []
	)
}

export class pfConfig {
	public get LoadBalancingConfig(): serviceconfig.LoadBalancingConfig | null {
		return this._fields.LoadBalancingConfig
	}

	public set LoadBalancingConfig(value: serviceconfig.LoadBalancingConfig | null) {
		this._fields.LoadBalancingConfig = value
	}

	// If set to true, instructs the LB policy to shuffle the order of the list
	// of endpoints received from the name resolver before attempting to
	// connect to them.
	public get ShuffleAddressList(): boolean {
		return this._fields.ShuffleAddressList
	}

	public set ShuffleAddressList(value: boolean) {
		this._fields.ShuffleAddressList = value
	}

	public _fields: {
		LoadBalancingConfig: serviceconfig.LoadBalancingConfig | null
		ShuffleAddressList: boolean
	}

	constructor(init?: Partial<{LoadBalancingConfig?: serviceconfig.LoadBalancingConfig | null, ShuffleAddressList?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			LoadBalancingConfig: init?.LoadBalancingConfig ?? (null! as serviceconfig.LoadBalancingConfig | null),
			ShuffleAddressList: init?.ShuffleAddressList ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pfConfig {
		return new pfConfig(this, true)
	}

	public __goscriptAssign(source: pfConfig): void {
		const target = this._fields
		const values = source._fields
		target.LoadBalancingConfig = $.assignFieldValue(target.LoadBalancingConfig, values.LoadBalancingConfig, "serviceconfig.LoadBalancingConfig")
		target.ShuffleAddressList = values.ShuffleAddressList
	}

	static __typeInfo = $.registerStructType(
		"pickfirst.pfConfig",
		() => new pfConfig(),
		() => [],
		pfConfig,
		() => [/* @__PURE__ */ $.structField("LoadBalancingConfig", "serviceconfig.LoadBalancingConfig", [0], 0, true, { tag: "json:\"-\"", anonymous: true }), /* @__PURE__ */ $.structField("ShuffleAddressList", /* @__PURE__ */ $.basicType("bool"), [1], 16, true, { tag: "json:\"shuffleAddressList\"" })]
	)
}

export class pickfirstBalancer {
	public get logger(): internalgrpclog.PrefixLogger | $.VarRef<internalgrpclog.PrefixLogger> | null {
		return this._fields.logger
	}

	public set logger(value: internalgrpclog.PrefixLogger | $.VarRef<internalgrpclog.PrefixLogger> | null) {
		this._fields.logger = value
	}

	public get state(): connectivity.State {
		return this._fields.state
	}

	public set state(value: connectivity.State) {
		this._fields.state = value
	}

	public get cc(): balancer.ClientConn | null {
		return this._fields.cc
	}

	public set cc(value: balancer.ClientConn | null) {
		this._fields.cc = value
	}

	public get subConn(): balancer.SubConn | null {
		return this._fields.subConn
	}

	public set subConn(value: balancer.SubConn | null) {
		this._fields.subConn = value
	}

	public _fields: {
		logger: internalgrpclog.PrefixLogger | $.VarRef<internalgrpclog.PrefixLogger> | null
		state: connectivity.State
		cc: balancer.ClientConn | null
		subConn: balancer.SubConn | null
	}

	constructor(init?: Partial<{logger?: internalgrpclog.PrefixLogger | $.VarRef<internalgrpclog.PrefixLogger> | null, state?: connectivity.State, cc?: balancer.ClientConn | null, subConn?: balancer.SubConn | null}>, __goscriptValue?: boolean) {
		this._fields = {
			logger: init?.logger ?? (null! as internalgrpclog.PrefixLogger | $.VarRef<internalgrpclog.PrefixLogger> | null),
			state: init?.state ?? (0 as connectivity.State),
			cc: init?.cc ?? (null! as balancer.ClientConn | null),
			subConn: init?.subConn ?? (null! as balancer.SubConn | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pickfirstBalancer {
		return new pickfirstBalancer(this, true)
	}

	public __goscriptAssign(source: pickfirstBalancer): void {
		const target = this._fields
		const values = source._fields
		target.logger = values.logger
		target.state = values.state
		target.cc = $.assignFieldValue(target.cc, values.cc, "balancer.ClientConn")
		target.subConn = $.assignFieldValue(target.subConn, values.subConn, "balancer.SubConn")
	}

	public Close(): void {
		const b: pickfirstBalancer | $.VarRef<pickfirstBalancer> | null = this;
	}

	public async ExitIdle(): globalThis.Promise<void> {
		const b: pickfirstBalancer | $.VarRef<pickfirstBalancer> | null = this;
		const b$: pickfirstBalancer = b == null ? $.pointerTarget<pickfirstBalancer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<pickfirstBalancer>(b)
		if (((b$ as pickfirstBalancer).subConn != null) && ((b$ as pickfirstBalancer).state == 0)) {
			void (__goscriptAwait = $.pointerValue<Exclude<balancer.SubConn, null>>((b$ as pickfirstBalancer).subConn).Connect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async ResolverError(err: $.GoError): globalThis.Promise<void> {
		let b: pickfirstBalancer | $.VarRef<pickfirstBalancer> | null = this;
		const b$: pickfirstBalancer = b == null ? $.pointerTarget<pickfirstBalancer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<pickfirstBalancer>(b)
		if (await internalgrpclog.PrefixLogger.prototype.V.call((b$ as pickfirstBalancer).logger, 2)) {
			await internalgrpclog.PrefixLogger.prototype.Infof.call((b$ as pickfirstBalancer).logger, "Received error from the name resolver: %v", $.arrayToSlice<any>([(err as any)]))
		}
		if ((b$ as pickfirstBalancer).subConn == null) {
			;(b$ as pickfirstBalancer).state = 3
		}

		if ((b$ as pickfirstBalancer).state != 3) {
			// The picker will not change since the balancer does not currently
			// report an error.
			return
		}
		void (__goscriptAwait = $.pointerValue<Exclude<balancer.ClientConn, null>>((b$ as pickfirstBalancer).cc).UpdateState(new balancer.State({ConnectivityState: 3, Picker: $.interfaceValue<balancer.Picker | null>((() => { const __goscriptLiteralField0 = fmt.Errorf("name resolver error: %v", (err as any)); return new picker({err: __goscriptLiteralField0}) })(), "*pickfirst.picker", /* @__PURE__ */ $.pointerType("pickfirst.picker"))}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async UpdateClientConnState(state: balancer.ClientConnState): globalThis.Promise<$.GoError> {
		let b: pickfirstBalancer | $.VarRef<pickfirstBalancer> | null = this;
		const b$: pickfirstBalancer = b == null ? $.pointerTarget<pickfirstBalancer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<pickfirstBalancer>(b)
		if (($.sliceLen(state.ResolverState.Addresses) == 0) && ($.sliceLen(state.ResolverState.Endpoints) == 0)) {
			// The resolver reported an empty address list. Treat it like an error by
			// calling b.ResolverError.
			if ((b$ as pickfirstBalancer).subConn != null) {
				// Shut down the old subConn. All addresses were removed, so it is
				// no longer valid.
				void (__goscriptAwait = $.pointerValue<Exclude<balancer.SubConn, null>>((b$ as pickfirstBalancer).subConn).Shutdown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
				;(b$ as pickfirstBalancer).subConn = null
			}
			await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as pickfirstBalancer).ResolverError(errors.New("produced zero addresses")) : pickfirstBalancer.prototype.ResolverError.call(b, errors.New("produced zero addresses")))
			return balancer.ErrBadResolverState
		}
		// We don't have to guard this block with the env var because ParseConfig
		// already does so.
		let [cfg, ok] = $.typeAssertTuple<pfConfig>(state.BalancerConfig, "pickfirst.pfConfig")
		if ((state.BalancerConfig != null) && !ok) {
			return fmt.Errorf("pickfirst: received illegal BalancerConfig (type %T): %v", (state.BalancerConfig as any), (state.BalancerConfig as any))
		}

		if (await internalgrpclog.PrefixLogger.prototype.V.call((b$ as pickfirstBalancer).logger, 2)) {
			await internalgrpclog.PrefixLogger.prototype.Infof.call((b$ as pickfirstBalancer).logger, "Received new config %s, resolver state %s", $.arrayToSlice<any>([await pretty.ToJSON($.interfaceValue((cfg).clone(), "pickfirst.pfConfig", "pickfirst.pfConfig")), await pretty.ToJSON($.interfaceValue((state.ResolverState).clone(), "resolver.State", "resolver.State"))]))
		}

		let addrs: $.Slice<resolver.Address> = null! as $.Slice<resolver.Address>
		{
			let endpoints: $.Slice<resolver.Endpoint> = state.ResolverState.Endpoints
			if ($.sliceLen(endpoints) != 0) {
				// Perform the optional shuffling described in gRFC A62. The shuffling will
				// change the order of endpoints but not touch the order of the addresses
				// within each endpoint. - A61
				if (cfg.ShuffleAddressList) {
					endpoints = $.appendSlice($.arrayToSlice<resolver.Endpoint>([]), endpoints)
					void (__goscriptAwait = $.mustTypeAssert<((_p0: number, _p1: ((_p0: number, _p1: number) => void) | null) => void) | null>(internal.ShuffleAddressListForTesting, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo))!($.sliceLen(endpoints), $.functionValue((i: number, j: number): void => {
						let __goscriptAssign0_0: resolver.Endpoint = ($.arrayIndex(endpoints!, j)).clone()
						let __goscriptAssign0_1: resolver.Endpoint = ($.arrayIndex(endpoints!, i)).clone()
						$.assignStruct($.sliceElems(endpoints!)[$.sliceSlot(endpoints!, i)], __goscriptAssign0_0)
						$.assignStruct($.sliceElems(endpoints!)[$.sliceSlot(endpoints!, j)], __goscriptAssign0_1)
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}

				// "Flatten the list by concatenating the ordered list of addresses for each
				// of the endpoints, in order." - A61
				for (let __goscriptRangeTarget0 = endpoints, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
					let endpoint = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as resolver.Endpoint)).clone()
					// "In the flattened list, interleave addresses from the two address
					// families, as per RFC-8304 section 4." - A61
					// TODO: support the above language.
					addrs = $.appendSlice(addrs, endpoint.Addresses)
				}
			} else {
				// Endpoints not set, process addresses until we migrate resolver
				// emissions fully to Endpoints. The top channel does wrap emitted
				// addresses with endpoints, however some balancers such as weighted
				// target do not forward the corresponding correct endpoints down/split
				// endpoints properly. Once all balancers correctly forward endpoints
				// down, can delete this else conditional.
				addrs = state.ResolverState.Addresses
				if (cfg.ShuffleAddressList) {
					addrs = $.appendSlice($.arrayToSlice<resolver.Address>([]), addrs)
					await rand.Shuffle($.sliceLen(addrs), $.functionValue((i: number, j: number): void => {
						let __goscriptAssign1_0: resolver.Address = ($.arrayIndex(addrs!, j)).clone()
						let __goscriptAssign1_1: resolver.Address = ($.arrayIndex(addrs!, i)).clone()
						$.assignStruct($.sliceElems(addrs!)[$.sliceSlot(addrs!, i)], __goscriptAssign1_0)
						$.assignStruct($.sliceElems(addrs!)[$.sliceSlot(addrs!, j)], __goscriptAssign1_1)
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo)))
				}
			}
		}

		if ((b$ as pickfirstBalancer).subConn != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<balancer.ClientConn, null>>((b$ as pickfirstBalancer).cc).UpdateAddresses((b$ as pickfirstBalancer).subConn, addrs), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return null
		}

		let subConn: balancer.SubConn | null = null! as balancer.SubConn | null
		let __goscriptTuple0: any = await $.pointerValue<Exclude<balancer.ClientConn, null>>((b$ as pickfirstBalancer).cc).NewSubConn(addrs, new balancer.NewSubConnOptions({StateListener: $.functionValue(async (state: balancer.SubConnState): globalThis.Promise<void> => {
			await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as pickfirstBalancer).updateSubConnState(subConn, state) : pickfirstBalancer.prototype.updateSubConnState.call(b, subConn, state))
		}, ({ kind: $.TypeKind.Function, params: ["balancer.SubConnState"], results: [] } as $.FunctionTypeInfo))}, true))
		subConn = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			if (await internalgrpclog.PrefixLogger.prototype.V.call((b$ as pickfirstBalancer).logger, 2)) {
				await internalgrpclog.PrefixLogger.prototype.Infof.call((b$ as pickfirstBalancer).logger, "Failed to create new SubConn: %v", $.arrayToSlice<any>([(err as any)]))
			}
			;(b$ as pickfirstBalancer).state = 3
			void (__goscriptAwait = $.pointerValue<Exclude<balancer.ClientConn, null>>((b$ as pickfirstBalancer).cc).UpdateState(new balancer.State({ConnectivityState: 3, Picker: $.interfaceValue<balancer.Picker | null>((() => { const __goscriptLiteralField1 = fmt.Errorf("error creating connection: %v", (err as any)); return new picker({err: __goscriptLiteralField1}) })(), "*pickfirst.picker", /* @__PURE__ */ $.pointerType("pickfirst.picker"))}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return balancer.ErrBadResolverState
		}
		;(b$ as pickfirstBalancer).subConn = subConn;
		;(b$ as pickfirstBalancer).state = 0
		void (__goscriptAwait = $.pointerValue<Exclude<balancer.ClientConn, null>>((b$ as pickfirstBalancer).cc).UpdateState(new balancer.State({ConnectivityState: 1, Picker: $.interfaceValue<balancer.Picker | null>(new picker({err: balancer.ErrNoSubConnAvailable}), "*pickfirst.picker", /* @__PURE__ */ $.pointerType("pickfirst.picker"))}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = $.pointerValue<Exclude<balancer.SubConn, null>>((b$ as pickfirstBalancer).subConn).Connect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	public async UpdateSubConnState(subConn: balancer.SubConn | null, state: balancer.SubConnState): globalThis.Promise<void> {
		const b: pickfirstBalancer | $.VarRef<pickfirstBalancer> | null = this;
		await internalgrpclog.PrefixLogger.prototype.Errorf.call($.pointerValue<pickfirstBalancer>(b).logger, "UpdateSubConnState(%v, %+v) called unexpectedly", $.arrayToSlice<any>([(subConn as any), $.interfaceValue((state).clone(), "balancer.SubConnState", "balancer.SubConnState")]))
	}

	public async updateSubConnState(subConn: balancer.SubConn | null, state: balancer.SubConnState): globalThis.Promise<void> {
		let b: pickfirstBalancer | $.VarRef<pickfirstBalancer> | null = this;
		const b$: pickfirstBalancer = b == null ? $.pointerTarget<pickfirstBalancer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<pickfirstBalancer>(b)
		if (await internalgrpclog.PrefixLogger.prototype.V.call((b$ as pickfirstBalancer).logger, 2)) {
			await internalgrpclog.PrefixLogger.prototype.Infof.call((b$ as pickfirstBalancer).logger, "Received SubConn state update: %p, %+v", $.arrayToSlice<any>([(subConn as any), $.interfaceValue((state).clone(), "balancer.SubConnState", "balancer.SubConnState")]))
		}
		if (!$.comparableEqual((b$ as pickfirstBalancer).subConn, subConn)) {
			if (await internalgrpclog.PrefixLogger.prototype.V.call((b$ as pickfirstBalancer).logger, 2)) {
				await internalgrpclog.PrefixLogger.prototype.Infof.call((b$ as pickfirstBalancer).logger, "Ignored state change because subConn is not recognized", null)
			}
			return
		}
		if (state.ConnectivityState == 4) {
			;(b$ as pickfirstBalancer).subConn = null
			return
		}

		switch (state.ConnectivityState) {
			case connectivity.Ready:
			{
				void (__goscriptAwait = $.pointerValue<Exclude<balancer.ClientConn, null>>((b$ as pickfirstBalancer).cc).UpdateState(new balancer.State({ConnectivityState: state.ConnectivityState, Picker: $.interfaceValue<balancer.Picker | null>(new picker({result: new balancer.PickResult({SubConn: subConn}, true)}), "*pickfirst.picker", /* @__PURE__ */ $.pointerType("pickfirst.picker"))}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case connectivity.Connecting:
			{
				if ((b$ as pickfirstBalancer).state == 3) {
					// We stay in TransientFailure until we are Ready. See A62.
					return
				}
				void (__goscriptAwait = $.pointerValue<Exclude<balancer.ClientConn, null>>((b$ as pickfirstBalancer).cc).UpdateState(new balancer.State({ConnectivityState: state.ConnectivityState, Picker: $.interfaceValue<balancer.Picker | null>(new picker({err: balancer.ErrNoSubConnAvailable}), "*pickfirst.picker", /* @__PURE__ */ $.pointerType("pickfirst.picker"))}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case connectivity.Idle:
			{
				if ((b$ as pickfirstBalancer).state == 3) {
					// We stay in TransientFailure until we are Ready. Also kick the
					// subConn out of Idle into Connecting. See A62.
					void (__goscriptAwait = $.pointerValue<Exclude<balancer.SubConn, null>>((b$ as pickfirstBalancer).subConn).Connect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					return
				}
				void (__goscriptAwait = $.pointerValue<Exclude<balancer.ClientConn, null>>((b$ as pickfirstBalancer).cc).UpdateState(new balancer.State({ConnectivityState: state.ConnectivityState, Picker: $.interfaceValue<balancer.Picker | null>(new idlePicker({subConn: subConn}), "*pickfirst.idlePicker", /* @__PURE__ */ $.pointerType("pickfirst.idlePicker"))}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case connectivity.TransientFailure:
			{
				void (__goscriptAwait = $.pointerValue<Exclude<balancer.ClientConn, null>>((b$ as pickfirstBalancer).cc).UpdateState(new balancer.State({ConnectivityState: state.ConnectivityState, Picker: $.interfaceValue<balancer.Picker | null>(new picker({err: state.ConnectionError}), "*pickfirst.picker", /* @__PURE__ */ $.pointerType("pickfirst.picker"))}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
		}
		;(b$ as pickfirstBalancer).state = state.ConnectivityState
	}

	static __typeInfo = $.registerStructType(
		"pickfirst.pickfirstBalancer",
		() => new pickfirstBalancer(),
		() => [$.methodSignature("Close", [], [], true), $.methodSignature("ExitIdle", [], [], true), $.methodSignature("ResolverError", [["err", "error"]], [], true), $.methodSignature("UpdateClientConnState", [["state", "balancer.ClientConnState"]], ["error"], true), $.methodSignature("UpdateSubConnState", [["subConn", "balancer.SubConn"], ["state", "balancer.SubConnState"]], [], true), $.methodSignature("updateSubConnState", [["subConn", "balancer.SubConn"], ["state", "balancer.SubConnState"]], [], true)],
		pickfirstBalancer,
		() => [/* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("grpclog.PrefixLogger"), [0], 0, false, { pkgPath: "google.golang.org/grpc/balancer/pickfirst" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "connectivity.State"), [1], 8, false, { pkgPath: "google.golang.org/grpc/balancer/pickfirst" }), /* @__PURE__ */ $.structField("cc", "balancer.ClientConn", [2], 16, false, { pkgPath: "google.golang.org/grpc/balancer/pickfirst" }), /* @__PURE__ */ $.structField("subConn", "balancer.SubConn", [3], 32, false, { pkgPath: "google.golang.org/grpc/balancer/pickfirst" })]
	)
}

export class picker {
	public get result(): balancer.PickResult {
		return this._fields.result
	}

	public set result(value: balancer.PickResult) {
		this._fields.result = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		result: balancer.PickResult
		err: $.GoError
	}

	constructor(init?: Partial<{result?: balancer.PickResult, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			result: init?.result ? init.result.clone() : new balancer.PickResult(undefined, true),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): picker {
		return new picker(this, true)
	}

	public __goscriptAssign(source: picker): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.result, values.result)
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public Pick(_p0: balancer.PickInfo): [balancer.PickResult, $.GoError] {
		const p: picker | $.VarRef<picker> | null = this;
		const p$: picker = p == null ? $.pointerTarget<picker>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<picker>(p)
		return [((p$ as picker).result).clone(), (p$ as picker).err]
	}

	static __typeInfo = $.registerStructType(
		"pickfirst.picker",
		() => new picker(),
		() => [$.methodSignature("Pick", ["balancer.PickInfo"], ["balancer.PickResult", "error"], true)],
		picker,
		() => [/* @__PURE__ */ $.structField("result", "balancer.PickResult", [0], 0, false, { pkgPath: "google.golang.org/grpc/balancer/pickfirst" }), /* @__PURE__ */ $.structField("err", "error", [1], 32, false, { pkgPath: "google.golang.org/grpc/balancer/pickfirst" })]
	)
}

export class idlePicker {
	public get subConn(): balancer.SubConn | null {
		return this._fields.subConn
	}

	public set subConn(value: balancer.SubConn | null) {
		this._fields.subConn = value
	}

	public _fields: {
		subConn: balancer.SubConn | null
	}

	constructor(init?: Partial<{subConn?: balancer.SubConn | null}>, __goscriptValue?: boolean) {
		this._fields = {
			subConn: init?.subConn ?? (null! as balancer.SubConn | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): idlePicker {
		return new idlePicker(this, true)
	}

	public __goscriptAssign(source: idlePicker): void {
		const target = this._fields
		const values = source._fields
		target.subConn = $.assignFieldValue(target.subConn, values.subConn, "balancer.SubConn")
	}

	public async Pick(_p0: balancer.PickInfo): globalThis.Promise<[balancer.PickResult, $.GoError]> {
		const i: idlePicker | $.VarRef<idlePicker> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<balancer.SubConn, null>>($.pointerValue<idlePicker>(i).subConn).Connect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [new balancer.PickResult(undefined, true), balancer.ErrNoSubConnAvailable]
	}

	static __typeInfo = $.registerStructType(
		"pickfirst.idlePicker",
		() => new idlePicker(),
		() => [$.methodSignature("Pick", ["balancer.PickInfo"], ["balancer.PickResult", "error"], true)],
		idlePicker,
		() => [/* @__PURE__ */ $.structField("subConn", "balancer.SubConn", [0], 0, false, { pkgPath: "google.golang.org/grpc/balancer/pickfirst" })]
	)
}

export const Name: string = "pick_first"

export const logPrefix: string = "[pick-first-lb %p] "

async function __goscriptInit0(): globalThis.Promise<void> {
	await balancer.Register($.interfaceValue<balancer.Builder | null>(new pickfirstBuilder(undefined, true), "pickfirst.pickfirstBuilder", "pickfirst.pickfirstBuilder"))
	internal.__goscript_set_ShuffleAddressListForTesting($.interfaceValue($.functionValue(async (n: number, swap: ((i: number, j: number) => void) | null): globalThis.Promise<void> => {
		await rand.Shuffle(n, swap)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)), "func(n int, swap func(i int, j int))", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)))
}

export let logger: grpclog.DepthLoggerV2 | null = await grpclog.Component("pick-first-lb")

export function __goscript_set_logger(__goscriptValue: grpclog.DepthLoggerV2 | null): void {
	logger = __goscriptValue
}

export async function ShuffleAddressListForTesting(n: number, swap: ((i: number, j: number) => void) | null): globalThis.Promise<void> {
	await rand.Shuffle(n, swap)
}

var __goscriptAwait: any

await __goscriptInit0()
