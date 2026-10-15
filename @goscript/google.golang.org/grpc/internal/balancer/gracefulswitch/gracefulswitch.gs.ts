// Generated file based on gracefulswitch.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sync from "@goscript/sync/index.js"

import * as balancer from "@goscript/google.golang.org/grpc/balancer/index.js"

import * as base from "@goscript/google.golang.org/grpc/balancer/base/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/serviceconfig/index.js"

import type * as __goscript_config from "./config.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/grpc/balancer/index.js"
import "@goscript/google.golang.org/grpc/balancer/base/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/balancer/gracefulswitch", ["gracefulswitch.Balancer", "gracefulswitch.balancerWrapper"])

export class Balancer {
	public get bOpts(): balancer.BuildOptions {
		return this._fields.bOpts
	}

	public set bOpts(value: balancer.BuildOptions) {
		this._fields.bOpts = value
	}

	public get cc(): balancer.ClientConn | null {
		return this._fields.cc
	}

	public set cc(value: balancer.ClientConn | null) {
		this._fields.cc = value
	}

	// mu protects the following fields and all fields within balancerCurrent
	// and balancerPending. mu does not need to be held when calling into the
	// child balancers, as all calls into these children happen only as a direct
	// result of a call into the gracefulSwitchBalancer, which are also
	// guaranteed to be synchronous. There is one exception: an UpdateState call
	// from a child balancer when current and pending are populated can lead to
	// calling Close() on the current. To prevent that racing with an
	// UpdateSubConnState from the channel, we hold currentMu during Close and
	// UpdateSubConnState calls.
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get balancerCurrent(): balancerWrapper | $.VarRef<balancerWrapper> | null {
		return this._fields.balancerCurrent
	}

	public set balancerCurrent(value: balancerWrapper | $.VarRef<balancerWrapper> | null) {
		this._fields.balancerCurrent = value
	}

	public get balancerPending(): balancerWrapper | $.VarRef<balancerWrapper> | null {
		return this._fields.balancerPending
	}

	public set balancerPending(value: balancerWrapper | $.VarRef<balancerWrapper> | null) {
		this._fields.balancerPending = value
	}

	public get closed(): boolean {
		return this._fields.closed
	}

	public set closed(value: boolean) {
		this._fields.closed = value
	}

	// currentMu must be locked before mu. This mutex guards against this
	// sequence of events: UpdateSubConnState() called, finds the
	// balancerCurrent, gives up lock, updateState comes in, causes Close() on
	// balancerCurrent before the UpdateSubConnState is called on the
	// balancerCurrent.
	public get currentMu(): sync.Mutex {
		return this._fields.currentMu
	}

	public set currentMu(value: sync.Mutex) {
		this._fields.currentMu = value
	}

	public _fields: {
		bOpts: balancer.BuildOptions
		cc: balancer.ClientConn | null
		mu: sync.Mutex
		balancerCurrent: balancerWrapper | $.VarRef<balancerWrapper> | null
		balancerPending: balancerWrapper | $.VarRef<balancerWrapper> | null
		closed: boolean
		currentMu: sync.Mutex
	}

	constructor(init?: Partial<{bOpts?: balancer.BuildOptions, cc?: balancer.ClientConn | null, mu?: sync.Mutex, balancerCurrent?: balancerWrapper | $.VarRef<balancerWrapper> | null, balancerPending?: balancerWrapper | $.VarRef<balancerWrapper> | null, closed?: boolean, currentMu?: sync.Mutex}>, __goscriptValue?: boolean) {
		this._fields = {
			bOpts: init?.bOpts ? init.bOpts.clone() : new balancer.BuildOptions(undefined, true),
			cc: init?.cc ?? (null! as balancer.ClientConn | null),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			balancerCurrent: init?.balancerCurrent ?? (null! as balancerWrapper | $.VarRef<balancerWrapper> | null),
			balancerPending: init?.balancerPending ?? (null! as balancerWrapper | $.VarRef<balancerWrapper> | null),
			closed: init?.closed ?? (false as boolean),
			currentMu: init?.currentMu ? $.markAsStructValue($.cloneStructValue(init.currentMu)) : $.markAsStructValue(new sync.Mutex())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Balancer {
		return new Balancer(this, true)
	}

	public __goscriptAssign(source: Balancer): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.bOpts, values.bOpts)
		target.cc = $.assignFieldValue(target.cc, values.cc, "balancer.ClientConn")
		$.assignStruct(target.mu, values.mu)
		target.balancerCurrent = values.balancerCurrent
		target.balancerPending = values.balancerPending
		target.closed = values.closed
		$.assignStruct(target.currentMu, values.currentMu)
	}

	public async Close(): globalThis.Promise<void> {
		let gsb: Balancer | $.VarRef<Balancer> | null = this;
		const gsb$: Balancer = gsb == null ? $.pointerTarget<Balancer>(gsb) : (gsb as any).__isVarRef === true ? (gsb as any).value : (gsb as any).__goValue === undefined ? (gsb as any) : $.pointerTarget<Balancer>(gsb)
		await (gsb$ as Balancer).mu.Lock();
		;(gsb$ as Balancer).closed = true
		let currentBalancerToClose: balancerWrapper | $.VarRef<balancerWrapper> | null = (gsb$ as Balancer).balancerCurrent;
		;(gsb$ as Balancer).balancerCurrent = null
		let pendingBalancerToClose: balancerWrapper | $.VarRef<balancerWrapper> | null = (gsb$ as Balancer).balancerPending;
		;(gsb$ as Balancer).balancerPending = null
		void (gsb$ as Balancer).mu.Unlock()

		await (currentBalancerToClose !== null && (currentBalancerToClose as any).__isVarRef !== true && (currentBalancerToClose as any).__goValue === undefined ? ((currentBalancerToClose as any) as balancerWrapper).Close() : balancerWrapper.prototype.Close.call(currentBalancerToClose))
		await (pendingBalancerToClose !== null && (pendingBalancerToClose as any).__isVarRef !== true && (pendingBalancerToClose as any).__goValue === undefined ? ((pendingBalancerToClose as any) as balancerWrapper).Close() : balancerWrapper.prototype.Close.call(pendingBalancerToClose))
	}

	public async ExitIdle(): globalThis.Promise<void> {
		const gsb: Balancer | $.VarRef<Balancer> | null = this;
		using __defer = new $.DisposableStack()
		const gsb$: Balancer = gsb == null ? $.pointerTarget<Balancer>(gsb) : (gsb as any).__isVarRef === true ? (gsb as any).value : (gsb as any).__goValue === undefined ? (gsb as any) : $.pointerTarget<Balancer>(gsb)
		let balToUpdate: balancerWrapper | $.VarRef<balancerWrapper> | null = await (gsb !== null && (gsb as any).__isVarRef !== true && (gsb as any).__goValue === undefined ? ((gsb as any) as Balancer).latestBalancer() : Balancer.prototype.latestBalancer.call(gsb))
		let balToUpdate$: balancerWrapper = balToUpdate == null ? $.pointerTarget<balancerWrapper>(balToUpdate) : (balToUpdate as any).__isVarRef === true ? (balToUpdate as any).value : (balToUpdate as any).__goValue === undefined ? (balToUpdate as any) : $.pointerTarget<balancerWrapper>(balToUpdate)
		if (balToUpdate == null) {
			return
		}
		// There is no need to protect this read with a mutex, as the write to the
		// Balancer field happens in SwitchTo, which completes before this can be
		// called.
		{
			let [ei, ok] = $.typeAssertTuple<balancer.ExitIdler | null>((balToUpdate$ as balancerWrapper).Balancer, "balancer.ExitIdler")
			if (ok) {
				void (__goscriptAwait = (ei !== null && (ei as any).__isVarRef !== true && (ei as any).__goValue === undefined ? (ei as Exclude<balancer.ExitIdler, null>) : $.pointerValue<Exclude<balancer.ExitIdler, null>>(ei)).ExitIdle(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return
			}
		}
		await (gsb$ as Balancer).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((gsb$ as Balancer).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		for (const [sc, __rangeValue] of (balToUpdate$ as balancerWrapper).subconns?.entries() ?? []) {
			void (__goscriptAwait = (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? (sc as Exclude<balancer.SubConn, null>) : $.pointerValue<Exclude<balancer.SubConn, null>>(sc)).Connect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async ResolverError(err: $.GoError): globalThis.Promise<void> {
		const gsb: Balancer | $.VarRef<Balancer> | null = this;
		// The resolver data is only relevant to the most recent LB Policy.
		let balToUpdate: balancerWrapper | $.VarRef<balancerWrapper> | null = await (gsb !== null && (gsb as any).__isVarRef !== true && (gsb as any).__goValue === undefined ? ((gsb as any) as Balancer).latestBalancer() : Balancer.prototype.latestBalancer.call(gsb))
		if (balToUpdate == null) {
			void (__goscriptAwait = $.pointerValue<Exclude<balancer.ClientConn, null>>($.pointerValue<Balancer>(gsb).cc).UpdateState((() => { const __goscriptLiteralField0 = base.NewErrPicker(err); return new balancer.State({ConnectivityState: 3, Picker: __goscriptLiteralField0}, true) })()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		// Perform this call without gsb.mu to prevent deadlocks if the child calls
		// back into the channel. The latest balancer can never be closed during a
		// call from the channel, even without gsb.mu held.
		await $.pointerValue<Exclude<balancer.Balancer, null>>($.pointerValue<balancerWrapper>(balToUpdate).Balancer).ResolverError(err)
	}

	public async SwitchTo(builder: balancer.Builder | null): globalThis.Promise<$.GoError> {
		const gsb: Balancer | $.VarRef<Balancer> | null = this;
		let [, err] = await (gsb !== null && (gsb as any).__isVarRef !== true && (gsb as any).__goValue === undefined ? ((gsb as any) as Balancer).switchTo(builder) : Balancer.prototype.switchTo.call(gsb, builder))
		return err
	}

	public async UpdateClientConnState(state: balancer.ClientConnState): globalThis.Promise<$.GoError> {
		const gsb: Balancer | $.VarRef<Balancer> | null = this;
		// The resolver data is only relevant to the most recent LB Policy.
		let balToUpdate: balancerWrapper | $.VarRef<balancerWrapper> | null = await (gsb !== null && (gsb as any).__isVarRef !== true && (gsb as any).__goValue === undefined ? ((gsb as any) as Balancer).latestBalancer() : Balancer.prototype.latestBalancer.call(gsb))
		let __goscriptTuple0: any = $.typeAssertTuple<__goscript_config.lbConfig | $.VarRef<__goscript_config.lbConfig> | null>(state.BalancerConfig, /* @__PURE__ */ $.pointerType("gracefulswitch.lbConfig"))
		let gsbCfg: __goscript_config.lbConfig | $.VarRef<__goscript_config.lbConfig> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		let gsbCfg$: __goscript_config.lbConfig = gsbCfg == null ? $.pointerTarget<__goscript_config.lbConfig>(gsbCfg) : (gsbCfg as any).__isVarRef === true ? (gsbCfg as any).value : (gsbCfg as any).__goValue === undefined ? (gsbCfg as any) : $.pointerTarget<__goscript_config.lbConfig>(gsbCfg)
		if (ok) {
			// Switch to the child in the config unless it is already active.
			if ((balToUpdate == null) || (!$.stringEqual((__goscriptAwait = $.pointerValue<Exclude<balancer.Builder, null>>((gsbCfg$ as __goscript_config.lbConfig).childBuilder).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = $.pointerValue<Exclude<balancer.Builder, null>>($.pointerValue<balancerWrapper>(balToUpdate).builder).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))) {
				let err: $.GoError = null! as $.GoError
				let __goscriptTuple1: any = await (gsb !== null && (gsb as any).__isVarRef !== true && (gsb as any).__goValue === undefined ? ((gsb as any) as Balancer).switchTo((gsbCfg$ as __goscript_config.lbConfig).childBuilder) : Balancer.prototype.switchTo.call(gsb, (gsbCfg$ as __goscript_config.lbConfig).childBuilder))
				balToUpdate = __goscriptTuple1[0]
				err = __goscriptTuple1[1]
				if (err != null) {
					return fmt.Errorf("could not switch to new child balancer: %w", (err as any))
				}
			}
			// Unwrap the child balancer's config.
			state.BalancerConfig = (gsbCfg$ as __goscript_config.lbConfig).childConfig
		}

		if (balToUpdate == null) {
			return errBalancerClosed
		}

		// Perform this call without gsb.mu to prevent deadlocks if the child calls
		// back into the channel. The latest balancer can never be closed during a
		// call from the channel, even without gsb.mu held.
		return $.pointerValue<Exclude<balancer.Balancer, null>>($.pointerValue<balancerWrapper>(balToUpdate).Balancer).UpdateClientConnState((state).clone())
	}

	public async UpdateSubConnState(sc: balancer.SubConn | null, state: balancer.SubConnState): globalThis.Promise<void> {
		const gsb: Balancer | $.VarRef<Balancer> | null = this;
		await (gsb !== null && (gsb as any).__isVarRef !== true && (gsb as any).__goValue === undefined ? ((gsb as any) as Balancer).updateSubConnState(sc, state, (null as ((_p0: balancer.SubConnState) => void) | null)) : Balancer.prototype.updateSubConnState.call(gsb, sc, state, (null as ((_p0: balancer.SubConnState) => void) | null)))
	}

	public balancerCurrentOrPending(bw: balancerWrapper | $.VarRef<balancerWrapper> | null): boolean {
		const gsb: Balancer | $.VarRef<Balancer> | null = this;
		const gsb$: Balancer = gsb == null ? $.pointerTarget<Balancer>(gsb) : (gsb as any).__isVarRef === true ? (gsb as any).value : (gsb as any).__goValue === undefined ? (gsb as any) : $.pointerTarget<Balancer>(gsb)
		return ($.pointerEqual(bw, (gsb$ as Balancer).balancerCurrent)) || ($.pointerEqual(bw, (gsb$ as Balancer).balancerPending))
	}

	public async latestBalancer(): globalThis.Promise<balancerWrapper | $.VarRef<balancerWrapper> | null> {
		const gsb: Balancer | $.VarRef<Balancer> | null = this;
		using __defer = new $.DisposableStack()
		const gsb$: Balancer = gsb == null ? $.pointerTarget<Balancer>(gsb) : (gsb as any).__isVarRef === true ? (gsb as any).value : (gsb as any).__goValue === undefined ? (gsb as any) : $.pointerTarget<Balancer>(gsb)
		await (gsb$ as Balancer).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((gsb$ as Balancer).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		if ((gsb$ as Balancer).balancerPending != null) {
			return (gsb$ as Balancer).balancerPending
		}
		return (gsb$ as Balancer).balancerCurrent
	}

	public async swap(): globalThis.Promise<void> {
		let gsb: Balancer | $.VarRef<Balancer> | null = this;
		const gsb$: Balancer = gsb == null ? $.pointerTarget<Balancer>(gsb) : (gsb as any).__isVarRef === true ? (gsb as any).value : (gsb as any).__goValue === undefined ? (gsb as any) : $.pointerTarget<Balancer>(gsb)
		void (__goscriptAwait = $.pointerValue<Exclude<balancer.ClientConn, null>>((gsb$ as Balancer).cc).UpdateState(($.pointerValue<balancerWrapper>((gsb$ as Balancer).balancerPending).lastState).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let cur: balancerWrapper | $.VarRef<balancerWrapper> | null = (gsb$ as Balancer).balancerCurrent;
		;(gsb$ as Balancer).balancerCurrent = (gsb$ as Balancer).balancerPending;
		;(gsb$ as Balancer).balancerPending = null
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			using __defer = new $.DisposableStack()
			await (gsb$ as Balancer).currentMu.Lock()
			const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((gsb$ as Balancer).currentMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee2() })
			await (cur !== null && (cur as any).__isVarRef !== true && (cur as any).__goValue === undefined ? ((cur as any) as balancerWrapper).Close() : balancerWrapper.prototype.Close.call(cur))
		})() })
	}

	public async switchTo(builder: balancer.Builder | null): globalThis.Promise<[balancerWrapper | $.VarRef<balancerWrapper> | null, $.GoError]> {
		let gsb: Balancer | $.VarRef<Balancer> | null = this;
		const gsb$: Balancer = gsb == null ? $.pointerTarget<Balancer>(gsb) : (gsb as any).__isVarRef === true ? (gsb as any).value : (gsb as any).__goValue === undefined ? (gsb as any) : $.pointerTarget<Balancer>(gsb)
		await (gsb$ as Balancer).mu.Lock()
		if ((gsb$ as Balancer).closed) {
			void (gsb$ as Balancer).mu.Unlock()
			return [null, errBalancerClosed]
		}
		let bw: balancerWrapper | $.VarRef<balancerWrapper> | null = new balancerWrapper({builder: builder, gsb: gsb, lastState: (() => { const __goscriptLiteralField1 = base.NewErrPicker(balancer.ErrNoSubConnAvailable); return new balancer.State({ConnectivityState: 1, Picker: __goscriptLiteralField1}, true) })(), subconns: $.makeMap<balancer.SubConn | null, boolean>()})
		let balToClose: balancerWrapper | $.VarRef<balancerWrapper> | null = (gsb$ as Balancer).balancerPending
		if ((gsb$ as Balancer).balancerCurrent == null) {
			;(gsb$ as Balancer).balancerCurrent = bw
		} else {
			;(gsb$ as Balancer).balancerPending = bw
		}
		void (gsb$ as Balancer).mu.Unlock()
		await (balToClose !== null && (balToClose as any).__isVarRef !== true && (balToClose as any).__goValue === undefined ? ((balToClose as any) as balancerWrapper).Close() : balancerWrapper.prototype.Close.call(balToClose))
		// This function takes a builder instead of a balancer because builder.Build
		// can call back inline, and this utility needs to handle the callbacks.
		let newBalancer = (__goscriptAwait = (builder !== null && (builder as any).__isVarRef !== true && (builder as any).__goValue === undefined ? (builder as Exclude<balancer.Builder, null>) : $.pointerValue<Exclude<balancer.Builder, null>>(builder)).Build($.interfaceValue<balancer.ClientConn | null>(bw, "*gracefulswitch.balancerWrapper", /* @__PURE__ */ $.pointerType("gracefulswitch.balancerWrapper")), ((gsb$ as Balancer).bOpts).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (newBalancer == null) {
			// This is illegal and should never happen; we clear the balancerWrapper
			// we were constructing if it happens to avoid a potential panic.
			await (gsb$ as Balancer).mu.Lock()
			if ((gsb$ as Balancer).balancerPending != null) {
				;(gsb$ as Balancer).balancerPending = null
			} else {
				;(gsb$ as Balancer).balancerCurrent = null
			}
			void (gsb$ as Balancer).mu.Unlock()
			return [null, balancer.ErrBadResolverState]
		}

		// This write doesn't need to take gsb.mu because this field never gets read
		// or written to on any calls from the current or pending. Calls from grpc
		// to this balancer are guaranteed to be called synchronously, so this
		// bw.Balancer field will never be forwarded to until this SwitchTo()
		// function returns.
		$.pointerValue<balancerWrapper>(bw).Balancer = newBalancer
		return [bw, null]
	}

	public async updateSubConnState(sc: balancer.SubConn | null, state: balancer.SubConnState, cb: ((_p0: balancer.SubConnState) => void) | null): globalThis.Promise<void> {
		const gsb: Balancer | $.VarRef<Balancer> | null = this;
		using __defer = new $.DisposableStack()
		const gsb$: Balancer = gsb == null ? $.pointerTarget<Balancer>(gsb) : (gsb as any).__isVarRef === true ? (gsb as any).value : (gsb as any).__goValue === undefined ? (gsb as any) : $.pointerTarget<Balancer>(gsb)
		await (gsb$ as Balancer).currentMu.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((gsb$ as Balancer).currentMu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		await (gsb$ as Balancer).mu.Lock()
		// Forward update to the appropriate child.  Even if there is a pending
		// balancer, the current balancer should continue to get SubConn updates to
		// maintain the proper state while the pending is still connecting.
		let balToUpdate: balancerWrapper | $.VarRef<balancerWrapper> | null = null! as balancerWrapper | $.VarRef<balancerWrapper> | null
		if (((gsb$ as Balancer).balancerCurrent != null) && $.mapGet<balancer.SubConn | null, boolean, boolean>($.pointerValue<balancerWrapper>((gsb$ as Balancer).balancerCurrent).subconns, sc, false)[0]) {
			balToUpdate = (gsb$ as Balancer).balancerCurrent
		} else {
			if (((gsb$ as Balancer).balancerPending != null) && $.mapGet<balancer.SubConn | null, boolean, boolean>($.pointerValue<balancerWrapper>((gsb$ as Balancer).balancerPending).subconns, sc, false)[0]) {
				balToUpdate = (gsb$ as Balancer).balancerPending
			}
		}
		if (balToUpdate == null) {
			// SubConn belonged to a stale lb policy that has not yet fully closed,
			// or the balancer was already closed.
			void (gsb$ as Balancer).mu.Unlock()
			return
		}
		if (state.ConnectivityState == 4) {
			$.deleteMapEntry($.pointerValue<balancerWrapper>(balToUpdate).subconns, sc)
		}
		void (gsb$ as Balancer).mu.Unlock()
		if (cb != null) {
			void (__goscriptAwait = cb!((state).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			await $.pointerValue<Exclude<balancer.Balancer, null>>($.pointerValue<balancerWrapper>(balToUpdate).Balancer).UpdateSubConnState(sc, (state).clone())
		}
	}

	static __typeInfo = $.registerStructType(
		"gracefulswitch.Balancer",
		() => new Balancer(),
		() => [$.methodSignature("Close", [], [], true), $.methodSignature("ExitIdle", [], [], true), $.methodSignature("ResolverError", [["err", "error"]], [], true), $.methodSignature("SwitchTo", [["builder", "balancer.Builder"]], ["error"], true), $.methodSignature("UpdateClientConnState", [["state", "balancer.ClientConnState"]], ["error"], true), $.methodSignature("UpdateSubConnState", [["sc", "balancer.SubConn"], ["state", "balancer.SubConnState"]], [], true), $.methodSignature("balancerCurrentOrPending", [["bw", /* @__PURE__ */ $.pointerType("gracefulswitch.balancerWrapper")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("latestBalancer", [], [/* @__PURE__ */ $.pointerType("gracefulswitch.balancerWrapper")], true), $.methodSignature("swap", [], [], true), $.methodSignature("switchTo", [["builder", "balancer.Builder"]], [/* @__PURE__ */ $.pointerType("gracefulswitch.balancerWrapper"), "error"], true), $.methodSignature("updateSubConnState", [["sc", "balancer.SubConn"], ["state", "balancer.SubConnState"], ["cb", ({ kind: $.TypeKind.Function, params: ["balancer.SubConnState"], results: [] } as $.FunctionTypeInfo)]], [], true)],
		Balancer,
		() => [/* @__PURE__ */ $.structField("bOpts", "balancer.BuildOptions", [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/balancer/gracefulswitch" }), /* @__PURE__ */ $.structField("cc", "balancer.ClientConn", [1], 248, false, { pkgPath: "google.golang.org/grpc/internal/balancer/gracefulswitch" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [2], 264, false, { pkgPath: "google.golang.org/grpc/internal/balancer/gracefulswitch" }), /* @__PURE__ */ $.structField("balancerCurrent", /* @__PURE__ */ $.pointerType("gracefulswitch.balancerWrapper"), [3], 272, false, { pkgPath: "google.golang.org/grpc/internal/balancer/gracefulswitch" }), /* @__PURE__ */ $.structField("balancerPending", /* @__PURE__ */ $.pointerType("gracefulswitch.balancerWrapper"), [4], 280, false, { pkgPath: "google.golang.org/grpc/internal/balancer/gracefulswitch" }), /* @__PURE__ */ $.structField("closed", /* @__PURE__ */ $.basicType("bool"), [5], 288, false, { pkgPath: "google.golang.org/grpc/internal/balancer/gracefulswitch" }), /* @__PURE__ */ $.structField("currentMu", "sync.Mutex", [6], 292, false, { pkgPath: "google.golang.org/grpc/internal/balancer/gracefulswitch" })]
	)
}

export class balancerWrapper {
	public get Balancer(): balancer.Balancer | null {
		return this._fields.Balancer
	}

	public set Balancer(value: balancer.Balancer | null) {
		this._fields.Balancer = value
	}

	public get gsb(): Balancer | $.VarRef<Balancer> | null {
		return this._fields.gsb
	}

	public set gsb(value: Balancer | $.VarRef<Balancer> | null) {
		this._fields.gsb = value
	}

	public get builder(): balancer.Builder | null {
		return this._fields.builder
	}

	public set builder(value: balancer.Builder | null) {
		this._fields.builder = value
	}

	public get lastState(): balancer.State {
		return this._fields.lastState
	}

	public set lastState(value: balancer.State) {
		this._fields.lastState = value
	}

	public get subconns(): globalThis.Map<balancer.SubConn | null, boolean> | null {
		return this._fields.subconns
	}

	public set subconns(value: globalThis.Map<balancer.SubConn | null, boolean> | null) {
		this._fields.subconns = value
	}

	public _fields: {
		Balancer: balancer.Balancer | null
		gsb: Balancer | $.VarRef<Balancer> | null
		builder: balancer.Builder | null
		lastState: balancer.State
		subconns: globalThis.Map<balancer.SubConn | null, boolean> | null
	}

	constructor(init?: Partial<{Balancer?: balancer.Balancer | null, gsb?: Balancer | $.VarRef<Balancer> | null, builder?: balancer.Builder | null, lastState?: balancer.State, subconns?: globalThis.Map<balancer.SubConn | null, boolean> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Balancer: init?.Balancer ?? (null! as balancer.Balancer | null),
			gsb: init?.gsb ?? (null! as Balancer | $.VarRef<Balancer> | null),
			builder: init?.builder ?? (null! as balancer.Builder | null),
			lastState: init?.lastState ? init.lastState.clone() : new balancer.State(undefined, true),
			subconns: init?.subconns ?? (null! as globalThis.Map<balancer.SubConn | null, boolean> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): balancerWrapper {
		return new balancerWrapper(this, true)
	}

	public __goscriptAssign(source: balancerWrapper): void {
		const target = this._fields
		const values = source._fields
		target.Balancer = $.assignFieldValue(target.Balancer, values.Balancer, "balancer.Balancer")
		target.gsb = values.gsb
		target.builder = $.assignFieldValue(target.builder, values.builder, "balancer.Builder")
		$.assignStruct(target.lastState, values.lastState)
		target.subconns = values.subconns
	}

	public async Close(): globalThis.Promise<void> {
		const bw: balancerWrapper | $.VarRef<balancerWrapper> | null = this;
		const bw$: balancerWrapper = bw == null ? $.pointerTarget<balancerWrapper>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<balancerWrapper>(bw)
		// before Close is called.
		if (bw == null) {
			return
		}
		// There is no need to protect this read with a mutex, as Close() is
		// impossible to be called concurrently with the write in SwitchTo(). The
		// callsites of Close() for this balancer in Graceful Switch Balancer will
		// never be called until SwitchTo() returns.
		void (__goscriptAwait = $.pointerValue<Exclude<balancer.Balancer, null>>((bw$ as balancerWrapper).Balancer).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await $.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).mu.Lock()
		for (const [sc, __rangeValue] of (bw$ as balancerWrapper).subconns?.entries() ?? []) {
			void (__goscriptAwait = (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? (sc as Exclude<balancer.SubConn, null>) : $.pointerValue<Exclude<balancer.SubConn, null>>(sc)).Shutdown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		$.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).mu.Unlock()
	}

	public async NewSubConn(addrs: $.Slice<resolver.Address>, opts: balancer.NewSubConnOptions): globalThis.Promise<[balancer.SubConn | null, $.GoError]> {
		let bw: balancerWrapper | $.VarRef<balancerWrapper> | null = this;
		const bw$: balancerWrapper = bw == null ? $.pointerTarget<balancerWrapper>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<balancerWrapper>(bw)
		await $.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).mu.Lock()
		if (!Balancer.prototype.balancerCurrentOrPending.call((bw$ as balancerWrapper).gsb, bw)) {
			$.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).mu.Unlock()
			return [null, fmt.Errorf("%T at address %p that called NewSubConn is deleted", $.interfaceValue(bw, "*gracefulswitch.balancerWrapper", /* @__PURE__ */ $.pointerType("gracefulswitch.balancerWrapper")), $.interfaceValue(bw, "*gracefulswitch.balancerWrapper", /* @__PURE__ */ $.pointerType("gracefulswitch.balancerWrapper")))]
		}
		$.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).mu.Unlock()

		let sc: balancer.SubConn | null = null! as balancer.SubConn | null
		let oldListener: ((_p0: balancer.SubConnState) => void) | null = opts.StateListener
		opts.StateListener = $.functionValue(async (state: balancer.SubConnState): globalThis.Promise<void> => {
			await Balancer.prototype.updateSubConnState.call((bw$ as balancerWrapper).gsb, sc, state, oldListener)
		}, ({ kind: $.TypeKind.Function, params: ["balancer.SubConnState"], results: [] } as $.FunctionTypeInfo))
		let __goscriptTuple2: any = await $.pointerValue<Exclude<balancer.ClientConn, null>>($.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).cc).NewSubConn(addrs, (opts).clone())
		sc = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		await $.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).mu.Lock()
		if (!Balancer.prototype.balancerCurrentOrPending.call((bw$ as balancerWrapper).gsb, bw)) {
			void (__goscriptAwait = (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? (sc as Exclude<balancer.SubConn, null>) : $.pointerValue<Exclude<balancer.SubConn, null>>(sc)).Shutdown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			$.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).mu.Unlock()
			return [null, fmt.Errorf("%T at address %p that called NewSubConn is deleted", $.interfaceValue(bw, "*gracefulswitch.balancerWrapper", /* @__PURE__ */ $.pointerType("gracefulswitch.balancerWrapper")), $.interfaceValue(bw, "*gracefulswitch.balancerWrapper", /* @__PURE__ */ $.pointerType("gracefulswitch.balancerWrapper")))]
		}
		$.mapSet((bw$ as balancerWrapper).subconns, sc, true)
		$.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).mu.Unlock()
		return [sc, null]
	}

	public async RemoveSubConn(sc: balancer.SubConn | null): globalThis.Promise<void> {
		const bw: balancerWrapper | $.VarRef<balancerWrapper> | null = this;
		// Note: existing third party balancers may call this, so it must remain
		// until RemoveSubConn is fully removed.
		void (__goscriptAwait = (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? (sc as Exclude<balancer.SubConn, null>) : $.pointerValue<Exclude<balancer.SubConn, null>>(sc)).Shutdown(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async ResolveNow(opts: resolver.ResolveNowOptions): globalThis.Promise<void> {
		const bw: balancerWrapper | $.VarRef<balancerWrapper> | null = this;
		const bw$: balancerWrapper = bw == null ? $.pointerTarget<balancerWrapper>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<balancerWrapper>(bw)
		// Ignore ResolveNow requests from anything other than the most recent
		// balancer, because older balancers were already removed from the config.
		if (!$.pointerEqual(bw, await Balancer.prototype.latestBalancer.call((bw$ as balancerWrapper).gsb))) {
			return
		}
		void (__goscriptAwait = $.pointerValue<Exclude<balancer.ClientConn, null>>($.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).cc).ResolveNow((opts).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Target(): globalThis.Promise<string> {
		const bw: balancerWrapper | $.VarRef<balancerWrapper> | null = this;
		return $.pointerValue<Exclude<balancer.ClientConn, null>>($.pointerValue<Balancer>($.pointerValue<balancerWrapper>(bw).gsb).cc).Target()
	}

	public async UpdateAddresses(sc: balancer.SubConn | null, addrs: $.Slice<resolver.Address>): globalThis.Promise<void> {
		const bw: balancerWrapper | $.VarRef<balancerWrapper> | null = this;
		const bw$: balancerWrapper = bw == null ? $.pointerTarget<balancerWrapper>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<balancerWrapper>(bw)
		await $.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).mu.Lock()
		if (!Balancer.prototype.balancerCurrentOrPending.call((bw$ as balancerWrapper).gsb, bw)) {
			$.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).mu.Unlock()
			return
		}
		$.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).mu.Unlock()
		void (__goscriptAwait = $.pointerValue<Exclude<balancer.ClientConn, null>>($.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).cc).UpdateAddresses(sc, addrs), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async UpdateState(state: balancer.State): globalThis.Promise<void> {
		let bw: balancerWrapper | $.VarRef<balancerWrapper> | null = this;
		using __defer = new $.DisposableStack()
		const bw$: balancerWrapper = bw == null ? $.pointerTarget<balancerWrapper>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<balancerWrapper>(bw)
		// Hold the mutex for this entire call to ensure it cannot occur
		// concurrently with other updateState() calls. This causes updates to
		// lastState and calls to cc.UpdateState to happen atomically.
		await $.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).mu.Lock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })
		$.assignStruct((bw$ as balancerWrapper).lastState, state)

		if (!Balancer.prototype.balancerCurrentOrPending.call((bw$ as balancerWrapper).gsb, bw)) {
			return
		}

		if ($.pointerEqual(bw, $.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).balancerCurrent)) {
			// In the case that the current balancer exits READY, and there is a pending
			// balancer, you can forward the pending balancer's cached State up to
			// ClientConn and swap the pending into the current. This is because there
			// is no reason to gracefully switch from and keep using the old policy as
			// the ClientConn is not connected to any backends.
			if ((state.ConnectivityState != 2) && ($.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).balancerPending != null)) {
				await Balancer.prototype.swap.call((bw$ as balancerWrapper).gsb)
				return
			}
			// Even if there is a pending balancer waiting to be gracefully switched to,
			// continue to forward current balancer updates to the Client Conn. Ignoring
			// state + picker from the current would cause undefined behavior/cause the
			// system to behave incorrectly from the current LB policies perspective.
			// Also, the current LB is still being used by grpc to choose SubConns per
			// RPC, and thus should use the most updated form of the current balancer.
			void (__goscriptAwait = $.pointerValue<Exclude<balancer.ClientConn, null>>($.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).cc).UpdateState((state).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		// This method is now dealing with a state update from the pending balancer.
		// If the current balancer is currently in a state other than READY, the new
		// policy can be swapped into place immediately. This is because there is no
		// reason to gracefully switch from and keep using the old policy as the
		// ClientConn is not connected to any backends.
		if ((state.ConnectivityState != 1) || ($.pointerValue<balancerWrapper>($.pointerValue<Balancer>((bw$ as balancerWrapper).gsb).balancerCurrent).lastState.ConnectivityState != 2)) {
			await Balancer.prototype.swap.call((bw$ as balancerWrapper).gsb)
		}
	}

	public async ResolverError(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<balancer.Balancer | null, null>>(this.Balancer).ResolverError(_p0)
	}

	public async UpdateClientConnState(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<balancer.Balancer | null, null>>(this.Balancer).UpdateClientConnState(_p0)
	}

	public async UpdateSubConnState(_p0: any, _p1: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<balancer.Balancer | null, null>>(this.Balancer).UpdateSubConnState(_p0, _p1)
	}

	static __typeInfo = $.registerStructType(
		"gracefulswitch.balancerWrapper",
		() => new balancerWrapper(),
		() => [$.methodSignature("Close", [], [], true), $.methodSignature("NewSubConn", [["addrs", /* @__PURE__ */ $.sliceType("resolver.Address")], ["opts", "balancer.NewSubConnOptions"]], ["balancer.SubConn", "error"], true), $.methodSignature("RemoveSubConn", [["sc", "balancer.SubConn"]], [], true), $.methodSignature("ResolveNow", [["opts", "resolver.ResolveNowOptions"]], [], true), $.methodSignature("Target", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("UpdateAddresses", [["sc", "balancer.SubConn"], ["addrs", /* @__PURE__ */ $.sliceType("resolver.Address")]], [], true), $.methodSignature("UpdateState", [["state", "balancer.State"]], [], true), $.methodSignature("ResolverError", ["error"]), $.methodSignature("UpdateClientConnState", ["balancer.ClientConnState"], ["error"]), $.methodSignature("UpdateSubConnState", ["balancer.SubConn", "balancer.SubConnState"])],
		balancerWrapper,
		() => [/* @__PURE__ */ $.structField("Balancer", "balancer.Balancer", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("gsb", /* @__PURE__ */ $.pointerType("gracefulswitch.Balancer"), [1], 16, false, { pkgPath: "google.golang.org/grpc/internal/balancer/gracefulswitch" }), /* @__PURE__ */ $.structField("builder", "balancer.Builder", [2], 24, false, { pkgPath: "google.golang.org/grpc/internal/balancer/gracefulswitch" }), /* @__PURE__ */ $.structField("lastState", "balancer.State", [3], 40, false, { pkgPath: "google.golang.org/grpc/internal/balancer/gracefulswitch" }), /* @__PURE__ */ $.structField("subconns", /* @__PURE__ */ $.mapType("balancer.SubConn", /* @__PURE__ */ $.basicType("bool")), [4], 64, false, { pkgPath: "google.golang.org/grpc/internal/balancer/gracefulswitch" })]
	)
}

export let errBalancerClosed: $.GoError = errors.New("gracefulSwitchBalancer is closed")

export function __goscript_set_errBalancerClosed(__goscriptValue: $.GoError): void {
	errBalancerClosed = __goscriptValue
}

export function NewBalancer(cc: balancer.ClientConn | null, opts: balancer.BuildOptions): Balancer | $.VarRef<Balancer> | null {
	return new Balancer({cc: cc, bOpts: opts})
}

var __goscriptAwait: any
