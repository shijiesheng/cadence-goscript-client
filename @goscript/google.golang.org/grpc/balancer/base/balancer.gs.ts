// Generated file based on balancer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as balancer from "@goscript/google.golang.org/grpc/balancer/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as __goscript_base from "./base.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/grpc/balancer/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "./base.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/balancer/base", ["base.baseBuilder", "base.baseBalancer", "base.errPicker"])

export class baseBuilder {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get pickerBuilder(): __goscript_base.PickerBuilder | null {
		return this._fields.pickerBuilder
	}

	public set pickerBuilder(value: __goscript_base.PickerBuilder | null) {
		this._fields.pickerBuilder = value
	}

	public get config(): __goscript_base.Config {
		return this._fields.config
	}

	public set config(value: __goscript_base.Config) {
		this._fields.config = value
	}

	public _fields: {
		name: string
		pickerBuilder: __goscript_base.PickerBuilder | null
		config: __goscript_base.Config
	}

	constructor(init?: Partial<{name?: string, pickerBuilder?: __goscript_base.PickerBuilder | null, config?: __goscript_base.Config}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			pickerBuilder: init?.pickerBuilder ?? (null! as __goscript_base.PickerBuilder | null),
			config: init?.config ? init.config.clone() : new __goscript_base.Config(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): baseBuilder {
		return new baseBuilder(this, true)
	}

	public __goscriptAssign(source: baseBuilder): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.pickerBuilder = $.assignFieldValue(target.pickerBuilder, values.pickerBuilder, "base.PickerBuilder")
		$.assignStruct(target.config, values.config)
	}

	public Build(cc: balancer.ClientConn | null, _p1: balancer.BuildOptions): balancer.Balancer | null {
		const bb: baseBuilder | $.VarRef<baseBuilder> | null = this;
		const bb$: baseBuilder = bb == null ? $.pointerTarget<baseBuilder>(bb) : (bb as any).__isVarRef === true ? (bb as any).value : (bb as any).__goValue === undefined ? (bb as any) : $.pointerTarget<baseBuilder>(bb)
		let bal: baseBalancer | $.VarRef<baseBalancer> | null = (() => { const __goscriptLiteralField0 = resolver.NewAddressMap(); return new baseBalancer({cc: cc, pickerBuilder: (bb$ as baseBuilder).pickerBuilder, subConns: __goscriptLiteralField0, scStates: $.makeMap<balancer.SubConn | null, connectivity.State>(), csEvltr: new balancer.ConnectivityStateEvaluator(), config: (bb$ as baseBuilder).config, state: 1}) })()
		// Initialize picker to a picker that always returns
		// ErrNoSubConnAvailable, because when state of a SubConn changes, we
		// may call UpdateState with this picker.
		$.pointerValue<baseBalancer>(bal).picker = NewErrPicker(balancer.ErrNoSubConnAvailable)
		return $.interfaceValue<balancer.Balancer | null>(bal, "*base.baseBalancer", /* @__PURE__ */ $.pointerType("base.baseBalancer"))
	}

	public Name(): string {
		const bb: baseBuilder | $.VarRef<baseBuilder> | null = this;
		return $.pointerValue<baseBuilder>(bb).name
	}

	static __typeInfo = $.registerStructType(
		"base.baseBuilder",
		() => new baseBuilder(),
		() => [$.methodSignature("Build", [["cc", "balancer.ClientConn"], ["_", "balancer.BuildOptions"]], ["balancer.Balancer"], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string")], true)],
		baseBuilder,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "google.golang.org/grpc/balancer/base" }), /* @__PURE__ */ $.structField("pickerBuilder", "base.PickerBuilder", [1], 16, false, { pkgPath: "google.golang.org/grpc/balancer/base" }), /* @__PURE__ */ $.structField("config", "base.Config", [2], 32, false, { pkgPath: "google.golang.org/grpc/balancer/base" })]
	)
}

export class baseBalancer {
	public get cc(): balancer.ClientConn | null {
		return this._fields.cc
	}

	public set cc(value: balancer.ClientConn | null) {
		this._fields.cc = value
	}

	public get pickerBuilder(): __goscript_base.PickerBuilder | null {
		return this._fields.pickerBuilder
	}

	public set pickerBuilder(value: __goscript_base.PickerBuilder | null) {
		this._fields.pickerBuilder = value
	}

	public get csEvltr(): balancer.ConnectivityStateEvaluator | $.VarRef<balancer.ConnectivityStateEvaluator> | null {
		return this._fields.csEvltr
	}

	public set csEvltr(value: balancer.ConnectivityStateEvaluator | $.VarRef<balancer.ConnectivityStateEvaluator> | null) {
		this._fields.csEvltr = value
	}

	public get state(): connectivity.State {
		return this._fields.state
	}

	public set state(value: connectivity.State) {
		this._fields.state = value
	}

	public get subConns(): resolver.AddressMap | $.VarRef<resolver.AddressMap> | null {
		return this._fields.subConns
	}

	public set subConns(value: resolver.AddressMap | $.VarRef<resolver.AddressMap> | null) {
		this._fields.subConns = value
	}

	public get scStates(): globalThis.Map<balancer.SubConn | null, connectivity.State> | null {
		return this._fields.scStates
	}

	public set scStates(value: globalThis.Map<balancer.SubConn | null, connectivity.State> | null) {
		this._fields.scStates = value
	}

	public get picker(): balancer.Picker | null {
		return this._fields.picker
	}

	public set picker(value: balancer.Picker | null) {
		this._fields.picker = value
	}

	public get config(): __goscript_base.Config {
		return this._fields.config
	}

	public set config(value: __goscript_base.Config) {
		this._fields.config = value
	}

	public get resolverErr(): $.GoError {
		return this._fields.resolverErr
	}

	public set resolverErr(value: $.GoError) {
		this._fields.resolverErr = value
	}

	public get connErr(): $.GoError {
		return this._fields.connErr
	}

	public set connErr(value: $.GoError) {
		this._fields.connErr = value
	}

	public _fields: {
		cc: balancer.ClientConn | null
		pickerBuilder: __goscript_base.PickerBuilder | null
		csEvltr: balancer.ConnectivityStateEvaluator | $.VarRef<balancer.ConnectivityStateEvaluator> | null
		state: connectivity.State
		subConns: resolver.AddressMap | $.VarRef<resolver.AddressMap> | null
		scStates: globalThis.Map<balancer.SubConn | null, connectivity.State> | null
		picker: balancer.Picker | null
		config: __goscript_base.Config
		resolverErr: $.GoError
		connErr: $.GoError
	}

	constructor(init?: Partial<{cc?: balancer.ClientConn | null, pickerBuilder?: __goscript_base.PickerBuilder | null, csEvltr?: balancer.ConnectivityStateEvaluator | $.VarRef<balancer.ConnectivityStateEvaluator> | null, state?: connectivity.State, subConns?: resolver.AddressMap | $.VarRef<resolver.AddressMap> | null, scStates?: globalThis.Map<balancer.SubConn | null, connectivity.State> | null, picker?: balancer.Picker | null, config?: __goscript_base.Config, resolverErr?: $.GoError, connErr?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			cc: init?.cc ?? (null! as balancer.ClientConn | null),
			pickerBuilder: init?.pickerBuilder ?? (null! as __goscript_base.PickerBuilder | null),
			csEvltr: init?.csEvltr ?? (null! as balancer.ConnectivityStateEvaluator | $.VarRef<balancer.ConnectivityStateEvaluator> | null),
			state: init?.state ?? (0 as connectivity.State),
			subConns: init?.subConns ?? (null! as resolver.AddressMap | $.VarRef<resolver.AddressMap> | null),
			scStates: init?.scStates ?? (null! as globalThis.Map<balancer.SubConn | null, connectivity.State> | null),
			picker: init?.picker ?? (null! as balancer.Picker | null),
			config: init?.config ? init.config.clone() : new __goscript_base.Config(undefined, true),
			resolverErr: init?.resolverErr ?? (null! as $.GoError),
			connErr: init?.connErr ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): baseBalancer {
		return new baseBalancer(this, true)
	}

	public __goscriptAssign(source: baseBalancer): void {
		const target = this._fields
		const values = source._fields
		target.cc = $.assignFieldValue(target.cc, values.cc, "balancer.ClientConn")
		target.pickerBuilder = $.assignFieldValue(target.pickerBuilder, values.pickerBuilder, "base.PickerBuilder")
		target.csEvltr = values.csEvltr
		target.state = values.state
		target.subConns = values.subConns
		target.scStates = values.scStates
		target.picker = $.assignFieldValue(target.picker, values.picker, "balancer.Picker")
		$.assignStruct(target.config, values.config)
		target.resolverErr = $.assignFieldValue(target.resolverErr, values.resolverErr, "error")
		target.connErr = $.assignFieldValue(target.connErr, values.connErr, "error")
	}

	public Close(): void {
		const b: baseBalancer | $.VarRef<baseBalancer> | null = this;
	}

	public ExitIdle(): void {
		const b: baseBalancer | $.VarRef<baseBalancer> | null = this;
	}

	public async ResolverError(err: $.GoError): globalThis.Promise<void> {
		let b: baseBalancer | $.VarRef<baseBalancer> | null = this;
		const b$: baseBalancer = b == null ? $.pointerTarget<baseBalancer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<baseBalancer>(b);
		;(b$ as baseBalancer).resolverErr = err
		if (resolver.AddressMap.prototype.Len.call((b$ as baseBalancer).subConns) == 0) {
			;(b$ as baseBalancer).state = 3
		}

		if ((b$ as baseBalancer).state != 3) {
			// The picker will not change since the balancer does not currently
			// report an error.
			return
		}
		await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as baseBalancer).regeneratePicker() : baseBalancer.prototype.regeneratePicker.call(b))
		void (__goscriptAwait = $.pointerValue<Exclude<balancer.ClientConn, null>>((b$ as baseBalancer).cc).UpdateState(new balancer.State({ConnectivityState: (b$ as baseBalancer).state, Picker: (b$ as baseBalancer).picker}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async UpdateClientConnState(s: balancer.ClientConnState): globalThis.Promise<$.GoError> {
		let b: baseBalancer | $.VarRef<baseBalancer> | null = this;
		const b$: baseBalancer = b == null ? $.pointerTarget<baseBalancer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<baseBalancer>(b)
		// TODO: handle s.ResolverState.ServiceConfig?
		if ((__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).V(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Info($.arrayToSlice<any>(["base.baseBalancer: got new ClientConn state: ", $.interfaceValue((s).clone(), "balancer.ClientConnState", "balancer.ClientConnState")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		// Successful resolution; clear resolver error and ensure we return nil.
		;(b$ as baseBalancer).resolverErr = null
		// addrsSet is the set converted from addrs, it's used for quick lookup of an address.
		let addrsSet: resolver.AddressMap | $.VarRef<resolver.AddressMap> | null = resolver.NewAddressMap()
		for (let __goscriptRangeTarget0 = s.ResolverState.Addresses, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let a = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as resolver.Address)).clone()
			await (addrsSet !== null && (addrsSet as any).__isVarRef !== true && (addrsSet as any).__goValue === undefined ? ((addrsSet as any) as resolver.AddressMap).Set((a).clone(), null) : resolver.AddressMap.prototype.Set.call(addrsSet, (a).clone(), null))
			{
				let [, ok] = await resolver.AddressMap.prototype.Get.call((b$ as baseBalancer).subConns, (a).clone())
				if (!ok) {
					// a is a new address (not existing in b.subConns).
					let sc: balancer.SubConn | null = null! as balancer.SubConn | null
					let opts = new balancer.NewSubConnOptions({HealthCheckEnabled: (b$ as baseBalancer).config.HealthCheck, StateListener: $.functionValue(async (scs: balancer.SubConnState): globalThis.Promise<void> => {
						await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as baseBalancer).updateSubConnState(sc, scs) : baseBalancer.prototype.updateSubConnState.call(b, sc, scs))
					}, ({ kind: $.TypeKind.Function, params: ["balancer.SubConnState"], results: [] } as $.FunctionTypeInfo))}, true)
					let __goscriptTuple0: any = await $.pointerValue<Exclude<balancer.ClientConn, null>>((b$ as baseBalancer).cc).NewSubConn($.arrayToSlice<resolver.Address>([(a).clone()]), (opts).clone())
					sc = __goscriptTuple0[0]
					let err = __goscriptTuple0[1]
					if (err != null) {
						void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Warningf("base.baseBalancer: failed to create new SubConn: %v", $.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						continue
					}
					await resolver.AddressMap.prototype.Set.call((b$ as baseBalancer).subConns, (a).clone(), (sc as any))
					$.mapSet((b$ as baseBalancer).scStates, sc, 0)
					balancer.ConnectivityStateEvaluator.prototype.RecordTransition.call((b$ as baseBalancer).csEvltr, 4, 0)
					void (__goscriptAwait = (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? (sc as Exclude<balancer.SubConn, null>) : $.pointerValue<Exclude<balancer.SubConn, null>>(sc)).Connect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		}
		for (let __goscriptRangeTarget1 = resolver.AddressMap.prototype.Keys.call((b$ as baseBalancer).subConns), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let a = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as resolver.Address)).clone()
			let [sci, ] = await resolver.AddressMap.prototype.Get.call((b$ as baseBalancer).subConns, (a).clone())
			let sc = $.mustTypeAssert<balancer.SubConn | null>(sci, "balancer.SubConn")
			// a was removed by resolver.
			{
				let [, ok] = await (addrsSet !== null && (addrsSet as any).__isVarRef !== true && (addrsSet as any).__goValue === undefined ? ((addrsSet as any) as resolver.AddressMap).Get((a).clone()) : resolver.AddressMap.prototype.Get.call(addrsSet, (a).clone()))
				if (!ok) {
					void (__goscriptAwait = (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? (sc as Exclude<balancer.SubConn, null>) : $.pointerValue<Exclude<balancer.SubConn, null>>(sc)).Shutdown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					await resolver.AddressMap.prototype.Delete.call((b$ as baseBalancer).subConns, (a).clone())
				}
			}
		}
		// If resolver state contains no addresses, return an error so ClientConn
		// will trigger re-resolve. Also records this as an resolver error, so when
		// the overall state turns transient failure, the error message will have
		// the zero address information.
		if ($.sliceLen(s.ResolverState.Addresses) == 0) {
			await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as baseBalancer).ResolverError(errors.New("produced zero addresses")) : baseBalancer.prototype.ResolverError.call(b, errors.New("produced zero addresses")))
			return balancer.ErrBadResolverState
		}

		await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as baseBalancer).regeneratePicker() : baseBalancer.prototype.regeneratePicker.call(b))
		void (__goscriptAwait = $.pointerValue<Exclude<balancer.ClientConn, null>>((b$ as baseBalancer).cc).UpdateState(new balancer.State({ConnectivityState: (b$ as baseBalancer).state, Picker: (b$ as baseBalancer).picker}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	public async UpdateSubConnState(sc: balancer.SubConn | null, state: balancer.SubConnState): globalThis.Promise<void> {
		const b: baseBalancer | $.VarRef<baseBalancer> | null = this;
		void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Errorf("base.baseBalancer: UpdateSubConnState(%v, %+v) called unexpectedly", $.arrayToSlice<any>([(sc as any), $.interfaceValue((state).clone(), "balancer.SubConnState", "balancer.SubConnState")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public mergeErrors(): $.GoError {
		const b: baseBalancer | $.VarRef<baseBalancer> | null = this;
		const b$: baseBalancer = b == null ? $.pointerTarget<baseBalancer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<baseBalancer>(b)
		// connErr must always be non-nil unless there are no SubConns, in which
		// case resolverErr must be non-nil.
		if ((b$ as baseBalancer).connErr == null) {
			return fmt.Errorf("last resolver error: %v", ((b$ as baseBalancer).resolverErr as any))
		}
		if ((b$ as baseBalancer).resolverErr == null) {
			return fmt.Errorf("last connection error: %v", ((b$ as baseBalancer).connErr as any))
		}
		return fmt.Errorf("last connection error: %v; last resolver error: %v", ((b$ as baseBalancer).connErr as any), ((b$ as baseBalancer).resolverErr as any))
	}

	public async regeneratePicker(): globalThis.Promise<void> {
		let b: baseBalancer | $.VarRef<baseBalancer> | null = this;
		const b$: baseBalancer = b == null ? $.pointerTarget<baseBalancer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<baseBalancer>(b)
		if ((b$ as baseBalancer).state == 3) {
			;(b$ as baseBalancer).picker = NewErrPicker((b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as baseBalancer).mergeErrors() : baseBalancer.prototype.mergeErrors.call(b)))
			return
		}
		let readySCs: globalThis.Map<balancer.SubConn | null, __goscript_base.SubConnInfo> | null = $.makeMap<balancer.SubConn | null, __goscript_base.SubConnInfo>()

		// Filter out all ready SCs from full subConn map.
		for (let __goscriptRangeTarget2 = resolver.AddressMap.prototype.Keys.call((b$ as baseBalancer).subConns), __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let addr = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as resolver.Address)).clone()
			let [sci, ] = await resolver.AddressMap.prototype.Get.call((b$ as baseBalancer).subConns, (addr).clone())
			let sc = $.mustTypeAssert<balancer.SubConn | null>(sci, "balancer.SubConn")
			{
				let [st, ok] = $.mapGet<balancer.SubConn | null, connectivity.State, connectivity.State>((b$ as baseBalancer).scStates, sc, 0)
				if (ok && (st == 2)) {
					$.mapSet(readySCs, sc, new __goscript_base.SubConnInfo({Address: addr}, true))
				}
			}
		}
		;(b$ as baseBalancer).picker = (__goscriptAwait = $.pointerValue<Exclude<__goscript_base.PickerBuilder, null>>((b$ as baseBalancer).pickerBuilder).Build(new __goscript_base.PickerBuildInfo({ReadySCs: readySCs}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async updateSubConnState(sc: balancer.SubConn | null, state: balancer.SubConnState): globalThis.Promise<void> {
		let b: baseBalancer | $.VarRef<baseBalancer> | null = this;
		const b$: baseBalancer = b == null ? $.pointerTarget<baseBalancer>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<baseBalancer>(b)
		let s = state.ConnectivityState
		if ((__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).V(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Infof("base.baseBalancer: handle SubConn state change: %p, %v", $.arrayToSlice<any>([(sc as any), $.namedValueInterfaceValue<any>(s, "connectivity.State", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		let [oldS, ok] = $.mapGet<balancer.SubConn | null, connectivity.State, connectivity.State>((b$ as baseBalancer).scStates, sc, 0)
		if (!ok) {
			if ((__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).V(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
				void (__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<grpclog.DepthLoggerV2, null>) : $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(logger)).Infof("base.baseBalancer: got state changes for an unknown SubConn: %p, %v", $.arrayToSlice<any>([(sc as any), $.namedValueInterfaceValue<any>(s, "connectivity.State", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return
		}
		if ((oldS == 3) && ((s == 1) || (s == 0))) {
			// Once a subconn enters TRANSIENT_FAILURE, ignore subsequent IDLE or
			// CONNECTING transitions to prevent the aggregated state from being
			// always CONNECTING when many backends exist but are all down.
			if (s == 0) {
				void (__goscriptAwait = (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? (sc as Exclude<balancer.SubConn, null>) : $.pointerValue<Exclude<balancer.SubConn, null>>(sc)).Connect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return
		}
		$.mapSet((b$ as baseBalancer).scStates, sc, s)
		switch (s) {
			case connectivity.Idle:
			{
				void (__goscriptAwait = (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? (sc as Exclude<balancer.SubConn, null>) : $.pointerValue<Exclude<balancer.SubConn, null>>(sc)).Connect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case connectivity.Shutdown:
			{
				$.deleteMapEntry((b$ as baseBalancer).scStates, sc)
				break
			}
			case connectivity.TransientFailure:
			{
				;(b$ as baseBalancer).connErr = state.ConnectionError
				break
			}
		}

		;(b$ as baseBalancer).state = balancer.ConnectivityStateEvaluator.prototype.RecordTransition.call((b$ as baseBalancer).csEvltr, oldS, s)

		// Regenerate picker when one of the following happens:
		//  - this sc entered or left ready
		//  - the aggregated state of balancer is TransientFailure
		//    (may need to update error message)
		if (((s == 2) != (oldS == 2)) || ((b$ as baseBalancer).state == 3)) {
			await (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as baseBalancer).regeneratePicker() : baseBalancer.prototype.regeneratePicker.call(b))
		}
		void (__goscriptAwait = $.pointerValue<Exclude<balancer.ClientConn, null>>((b$ as baseBalancer).cc).UpdateState(new balancer.State({ConnectivityState: (b$ as baseBalancer).state, Picker: (b$ as baseBalancer).picker}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"base.baseBalancer",
		() => new baseBalancer(),
		() => [$.methodSignature("Close", [], [], true), $.methodSignature("ExitIdle", [], [], true), $.methodSignature("ResolverError", [["err", "error"]], [], true), $.methodSignature("UpdateClientConnState", [["s", "balancer.ClientConnState"]], ["error"], true), $.methodSignature("UpdateSubConnState", [["sc", "balancer.SubConn"], ["state", "balancer.SubConnState"]], [], true), $.methodSignature("mergeErrors", [], ["error"], true), $.methodSignature("regeneratePicker", [], [], true), $.methodSignature("updateSubConnState", [["sc", "balancer.SubConn"], ["state", "balancer.SubConnState"]], [], true)],
		baseBalancer,
		() => [/* @__PURE__ */ $.structField("cc", "balancer.ClientConn", [0], 0, false, { pkgPath: "google.golang.org/grpc/balancer/base" }), /* @__PURE__ */ $.structField("pickerBuilder", "base.PickerBuilder", [1], 16, false, { pkgPath: "google.golang.org/grpc/balancer/base" }), /* @__PURE__ */ $.structField("csEvltr", /* @__PURE__ */ $.pointerType("balancer.ConnectivityStateEvaluator"), [2], 32, false, { pkgPath: "google.golang.org/grpc/balancer/base" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "connectivity.State"), [3], 40, false, { pkgPath: "google.golang.org/grpc/balancer/base" }), /* @__PURE__ */ $.structField("subConns", /* @__PURE__ */ $.pointerType("resolver.AddressMap"), [4], 48, false, { pkgPath: "google.golang.org/grpc/balancer/base" }), /* @__PURE__ */ $.structField("scStates", /* @__PURE__ */ $.mapType("balancer.SubConn", /* @__PURE__ */ $.basicType("int", "connectivity.State")), [5], 56, false, { pkgPath: "google.golang.org/grpc/balancer/base" }), /* @__PURE__ */ $.structField("picker", "balancer.Picker", [6], 64, false, { pkgPath: "google.golang.org/grpc/balancer/base" }), /* @__PURE__ */ $.structField("config", "base.Config", [7], 80, false, { pkgPath: "google.golang.org/grpc/balancer/base" }), /* @__PURE__ */ $.structField("resolverErr", "error", [8], 88, false, { pkgPath: "google.golang.org/grpc/balancer/base" }), /* @__PURE__ */ $.structField("connErr", "error", [9], 104, false, { pkgPath: "google.golang.org/grpc/balancer/base" })]
	)
}

export class errPicker {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		err: $.GoError
	}

	constructor(init?: Partial<{err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errPicker {
		return new errPicker(this, true)
	}

	public __goscriptAssign(source: errPicker): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public Pick(_p0: balancer.PickInfo): [balancer.PickResult, $.GoError] {
		const p: errPicker | $.VarRef<errPicker> | null = this;
		return [new balancer.PickResult(undefined, true), $.pointerValue<errPicker>(p).err]
	}

	static __typeInfo = $.registerStructType(
		"base.errPicker",
		() => new errPicker(),
		() => [$.methodSignature("Pick", ["balancer.PickInfo"], ["balancer.PickResult", "error"], true)],
		errPicker,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "google.golang.org/grpc/balancer/base" })]
	)
}

export let logger: grpclog.DepthLoggerV2 | null = await grpclog.Component("balancer")

export function __goscript_set_logger(__goscriptValue: grpclog.DepthLoggerV2 | null): void {
	logger = __goscriptValue
}

export function NewErrPicker(err: $.GoError): balancer.Picker | null {
	return $.interfaceValue<balancer.Picker | null>(new errPicker({err: err}), "*base.errPicker", /* @__PURE__ */ $.pointerType("base.errPicker"))
}

export let NewErrPickerV2: ((err: $.GoError) => balancer.Picker | null | globalThis.Promise<balancer.Picker | null>) | null = NewErrPicker

export function __goscript_set_NewErrPickerV2(__goscriptValue: ((err: $.GoError) => balancer.Picker | null | globalThis.Promise<balancer.Picker | null>) | null): void {
	NewErrPickerV2 = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (connectivity.State_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "connectivity.State"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
