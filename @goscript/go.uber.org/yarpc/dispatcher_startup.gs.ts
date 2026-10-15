// Generated file based on dispatcher_startup.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as sync from "@goscript/sync/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as errorsync from "@goscript/go.uber.org/yarpc/internal/errorsync/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as context from "@goscript/context/index.js"

import * as metrics from "@goscript/go.uber.org/net/metrics/index.js"

import * as middleware from "@goscript/go.uber.org/yarpc/api/middleware/index.js"

import type * as introspection from "@goscript/go.uber.org/yarpc/internal/introspection/index.js"

import * as lifecycle from "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as __goscript_dispatcher from "./dispatcher.gs.ts"

import * as __goscript_dispatcher_introspection from "./dispatcher_introspection.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/sync/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/internal/errorsync/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/go.uber.org/multierr/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/net/metrics/index.js"
import "@goscript/go.uber.org/yarpc/api/middleware/index.js"
import "@goscript/go.uber.org/yarpc/pkg/lifecycle/index.js"
import "./dispatcher.gs.ts"
import "./dispatcher_introspection.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc", ["yarpc.PhasedStarter", "yarpc.PhasedStopper"])

export class PhasedStarter {
	public get startedMu(): sync.Mutex {
		return this._fields.startedMu
	}

	public set startedMu(value: sync.Mutex) {
		this._fields.startedMu = value
	}

	public get started(): $.Slice<transport.Lifecycle | null> {
		return this._fields.started
	}

	public set started(value: $.Slice<transport.Lifecycle | null>) {
		this._fields.started = value
	}

	public get dispatcher(): __goscript_dispatcher.Dispatcher | $.VarRef<__goscript_dispatcher.Dispatcher> | null {
		return this._fields.dispatcher
	}

	public set dispatcher(value: __goscript_dispatcher.Dispatcher | $.VarRef<__goscript_dispatcher.Dispatcher> | null) {
		this._fields.dispatcher = value
	}

	public get log(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.log
	}

	public set log(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.log = value
	}

	public get transportsStartInitiated(): atomic.Bool {
		return this._fields.transportsStartInitiated
	}

	public set transportsStartInitiated(value: atomic.Bool) {
		this._fields.transportsStartInitiated = value
	}

	public get transportsStarted(): atomic.Bool {
		return this._fields.transportsStarted
	}

	public set transportsStarted(value: atomic.Bool) {
		this._fields.transportsStarted = value
	}

	public get outboundsStartInitiated(): atomic.Bool {
		return this._fields.outboundsStartInitiated
	}

	public set outboundsStartInitiated(value: atomic.Bool) {
		this._fields.outboundsStartInitiated = value
	}

	public get outboundsStarted(): atomic.Bool {
		return this._fields.outboundsStarted
	}

	public set outboundsStarted(value: atomic.Bool) {
		this._fields.outboundsStarted = value
	}

	public get inboundsStartInitiated(): atomic.Bool {
		return this._fields.inboundsStartInitiated
	}

	public set inboundsStartInitiated(value: atomic.Bool) {
		this._fields.inboundsStartInitiated = value
	}

	public _fields: {
		startedMu: sync.Mutex
		started: $.Slice<transport.Lifecycle | null>
		dispatcher: __goscript_dispatcher.Dispatcher | $.VarRef<__goscript_dispatcher.Dispatcher> | null
		log: zap.Logger | $.VarRef<zap.Logger> | null
		transportsStartInitiated: atomic.Bool
		transportsStarted: atomic.Bool
		outboundsStartInitiated: atomic.Bool
		outboundsStarted: atomic.Bool
		inboundsStartInitiated: atomic.Bool
	}

	constructor(init?: Partial<{startedMu?: sync.Mutex, started?: $.Slice<transport.Lifecycle | null>, dispatcher?: __goscript_dispatcher.Dispatcher | $.VarRef<__goscript_dispatcher.Dispatcher> | null, log?: zap.Logger | $.VarRef<zap.Logger> | null, transportsStartInitiated?: atomic.Bool, transportsStarted?: atomic.Bool, outboundsStartInitiated?: atomic.Bool, outboundsStarted?: atomic.Bool, inboundsStartInitiated?: atomic.Bool}>, __goscriptValue?: boolean) {
		this._fields = {
			startedMu: init?.startedMu ? $.markAsStructValue($.cloneStructValue(init.startedMu)) : $.markAsStructValue(new sync.Mutex()),
			started: init?.started ?? (null! as $.Slice<transport.Lifecycle | null>),
			dispatcher: init?.dispatcher ?? (null! as __goscript_dispatcher.Dispatcher | $.VarRef<__goscript_dispatcher.Dispatcher> | null),
			log: init?.log ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			transportsStartInitiated: init?.transportsStartInitiated ? init.transportsStartInitiated.clone() : new atomic.Bool(undefined, true),
			transportsStarted: init?.transportsStarted ? init.transportsStarted.clone() : new atomic.Bool(undefined, true),
			outboundsStartInitiated: init?.outboundsStartInitiated ? init.outboundsStartInitiated.clone() : new atomic.Bool(undefined, true),
			outboundsStarted: init?.outboundsStarted ? init.outboundsStarted.clone() : new atomic.Bool(undefined, true),
			inboundsStartInitiated: init?.inboundsStartInitiated ? init.inboundsStartInitiated.clone() : new atomic.Bool(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PhasedStarter {
		return new PhasedStarter(this, true)
	}

	public __goscriptAssign(source: PhasedStarter): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.startedMu, values.startedMu)
		target.started = values.started
		target.dispatcher = values.dispatcher
		target.log = values.log
		$.assignStruct(target.transportsStartInitiated, values.transportsStartInitiated)
		$.assignStruct(target.transportsStarted, values.transportsStarted)
		$.assignStruct(target.outboundsStartInitiated, values.outboundsStartInitiated)
		$.assignStruct(target.outboundsStarted, values.outboundsStarted)
		$.assignStruct(target.inboundsStartInitiated, values.inboundsStartInitiated)
	}

	public async StartInbounds(): globalThis.Promise<$.GoError> {
		const s: PhasedStarter | $.VarRef<PhasedStarter> | null = this;
		const s$: PhasedStarter = s == null ? $.pointerTarget<PhasedStarter>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<PhasedStarter>(s)
		if (!(s$ as PhasedStarter).transportsStarted.Load() || !(s$ as PhasedStarter).outboundsStarted.Load()) {
			return errors.New("must start inbounds after transports and outbounds")
		}
		if ((s$ as PhasedStarter).inboundsStartInitiated.Swap(true)) {
			return errors.New("already began starting inbounds")
		}
		await zap.Logger.prototype.Info.call((s$ as PhasedStarter).log, "starting inbounds", null)
		let wait = $.varRef(new errorsync.ErrorWaiter(undefined, true))
		for (let __goscriptRangeTarget0 = $.pointerValue<__goscript_dispatcher.Dispatcher>((s$ as PhasedStarter).dispatcher).inbounds, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let i = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as transport.Inbound | null)
			await wait.value.Submit((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as PhasedStarter).start((i as transport.Lifecycle | null)) : PhasedStarter.prototype.start.call(s, (i as transport.Lifecycle | null))))
		}
		{
			let errs: $.Slice<$.GoError> = await wait.value.Wait()
			if ($.sliceLen(errs) != 0) {
				return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as PhasedStarter).abort(errs) : PhasedStarter.prototype.abort.call(s, errs))
			}
		}
		await zap.Logger.prototype.Debug.call((s$ as PhasedStarter).log, "started inbounds", null)
		return null
	}

	public async StartOutbounds(): globalThis.Promise<$.GoError> {
		const s: PhasedStarter | $.VarRef<PhasedStarter> | null = this;
		using __defer = new $.DisposableStack()
		const s$: PhasedStarter = s == null ? $.pointerTarget<PhasedStarter>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<PhasedStarter>(s)
		if (!(s$ as PhasedStarter).transportsStarted.Load()) {
			return errors.New("must start outbounds after transports")
		}
		if ((s$ as PhasedStarter).outboundsStartInitiated.Swap(true)) {
			return errors.New("already began starting outbounds")
		}
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (val: boolean) => __receiver.Store(val))((s$ as PhasedStarter).outboundsStarted), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("bool")], results: [] } as $.FunctionTypeInfo), "go.uber.org/atomic.(*Bool).Store-fm")
		__defer.defer(() => { __goscriptDeferCallee0(true) })
		await zap.Logger.prototype.Info.call((s$ as PhasedStarter).log, "starting outbounds", null)
		let wait = $.varRef(new errorsync.ErrorWaiter(undefined, true))
		for (const [__rangeKey, o] of $.pointerValue<__goscript_dispatcher.Dispatcher>((s$ as PhasedStarter).dispatcher).outbounds?.entries() ?? []) {
			await wait.value.Submit((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as PhasedStarter).start((o.Unary as transport.Lifecycle | null)) : PhasedStarter.prototype.start.call(s, (o.Unary as transport.Lifecycle | null))))
			await wait.value.Submit((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as PhasedStarter).start((o.Oneway as transport.Lifecycle | null)) : PhasedStarter.prototype.start.call(s, (o.Oneway as transport.Lifecycle | null))))
			await wait.value.Submit((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as PhasedStarter).start((o.Stream as transport.Lifecycle | null)) : PhasedStarter.prototype.start.call(s, (o.Stream as transport.Lifecycle | null))))
		}
		{
			let errs: $.Slice<$.GoError> = await wait.value.Wait()
			if ($.sliceLen(errs) != 0) {
				return await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as PhasedStarter).abort(errs) : PhasedStarter.prototype.abort.call(s, errs))
			}
		}
		await zap.Logger.prototype.Debug.call((s$ as PhasedStarter).log, "started outbounds", null)
		return null
	}

	public async StartTransports(): globalThis.Promise<$.GoError> {
		const s: PhasedStarter | $.VarRef<PhasedStarter> | null = this;
		using __defer = new $.DisposableStack()
		const s$: PhasedStarter = s == null ? $.pointerTarget<PhasedStarter>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<PhasedStarter>(s)
		if ((s$ as PhasedStarter).transportsStartInitiated.Swap(true)) {
			return errors.New("already began starting transports")
		}
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (val: boolean) => __receiver.Store(val))((s$ as PhasedStarter).transportsStarted), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("bool")], results: [] } as $.FunctionTypeInfo), "go.uber.org/atomic.(*Bool).Store-fm")
		__defer.defer(() => { __goscriptDeferCallee1(true) })
		await zap.Logger.prototype.Info.call((s$ as PhasedStarter).log, "starting transports", null)
		let wait = $.varRef(new errorsync.ErrorWaiter(undefined, true))
		for (let __goscriptRangeTarget1 = $.pointerValue<__goscript_dispatcher.Dispatcher>((s$ as PhasedStarter).dispatcher).transports, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let t = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as transport.Transport | null)
			await wait.value.Submit((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as PhasedStarter).start((t as transport.Lifecycle | null)) : PhasedStarter.prototype.start.call(s, (t as transport.Lifecycle | null))))
		}
		{
			let errs: $.Slice<$.GoError> = await wait.value.Wait()
			if ($.sliceLen(errs) != 0) {
				return await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as PhasedStarter).abort(errs) : PhasedStarter.prototype.abort.call(s, errs))
			}
		}
		await zap.Logger.prototype.Debug.call((s$ as PhasedStarter).log, "started transports", null)
		return null
	}

	public async abort(errs: $.Slice<$.GoError>): globalThis.Promise<$.GoError> {
		const s: PhasedStarter | $.VarRef<PhasedStarter> | null = this;
		const s$: PhasedStarter = s == null ? $.pointerTarget<PhasedStarter>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<PhasedStarter>(s)
		// Failed to start so stop everything that was started.
		let wait = $.varRef(new errorsync.ErrorWaiter(undefined, true))
		await (s$ as PhasedStarter).startedMu.Lock()
		for (let __goscriptRangeTarget2 = (s$ as PhasedStarter).started, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let lc = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as transport.Lifecycle | null)
			await wait.value.Submit($.functionValue(((__receiver) => () => __receiver.Stop())((lc !== null && (lc as any).__isVarRef !== true && (lc as any).__goValue === undefined ? (lc as Exclude<transport.Lifecycle, null>) : $.pointerValue<Exclude<transport.Lifecycle, null>>(lc))), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/api/transport.Lifecycle.Stop-fm"))
		}
		void (s$ as PhasedStarter).startedMu.Unlock()
		{
			let newErrors: $.Slice<$.GoError> = await wait.value.Wait()
			if ($.sliceLen(newErrors) > 0) {
				errs = $.appendSlice(errs, newErrors, $.appendZeros.nil)
			}
		}

		return multierr.Combine(errs)
	}

	public async setRouters(): globalThis.Promise<void> {
		const s: PhasedStarter | $.VarRef<PhasedStarter> | null = this;
		const s$: PhasedStarter = s == null ? $.pointerTarget<PhasedStarter>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<PhasedStarter>(s)
		// Don't need synchronization, since we always call this in a lifecycle.Once
		// in the dispatcher.
		await zap.Logger.prototype.Debug.call((s$ as PhasedStarter).log, "setting router for inbounds", null)
		for (let __goscriptRangeTarget3 = $.pointerValue<__goscript_dispatcher.Dispatcher>((s$ as PhasedStarter).dispatcher).inbounds, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let ib = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as transport.Inbound | null)
			void (__goscriptAwait = (ib !== null && (ib as any).__isVarRef !== true && (ib as any).__goValue === undefined ? (ib as Exclude<transport.Inbound, null>) : $.pointerValue<Exclude<transport.Inbound, null>>(ib)).SetRouter(($.pointerValue<__goscript_dispatcher.Dispatcher>((s$ as PhasedStarter).dispatcher).table as transport.Router | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		await zap.Logger.prototype.Debug.call((s$ as PhasedStarter).log, "set router for inbounds", null)
	}

	public start(lc: transport.Lifecycle | null): (() => $.GoError | globalThis.Promise<$.GoError>) | null {
		const s: PhasedStarter | $.VarRef<PhasedStarter> | null = this;
		const s$: PhasedStarter = s == null ? $.pointerTarget<PhasedStarter>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<PhasedStarter>(s)
		return $.functionValue(async (): globalThis.Promise<$.GoError> => {
			if (lc == null) {
				return null
			}

			{
				let err = (__goscriptAwait = (lc !== null && (lc as any).__isVarRef !== true && (lc as any).__goValue === undefined ? (lc as Exclude<transport.Lifecycle, null>) : $.pointerValue<Exclude<transport.Lifecycle, null>>(lc)).Start(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}

			await (s$ as PhasedStarter).startedMu.Lock();
			;(s$ as PhasedStarter).started = $.appendOne((s$ as PhasedStarter).started, lc, $.appendZeros.nil)
			void (s$ as PhasedStarter).startedMu.Unlock()

			return null
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo))
	}

	static __typeInfo = $.registerStructType(
		"yarpc.PhasedStarter",
		() => new PhasedStarter(),
		() => [$.methodSignature("StartInbounds", [], ["error"], true), $.methodSignature("StartOutbounds", [], ["error"], true), $.methodSignature("StartTransports", [], ["error"], true), $.methodSignature("abort", [["errs", /* @__PURE__ */ $.sliceType("error")]], ["error"], true), $.methodSignature("setRouters", [], [], true), $.methodSignature("start", [["lc", "transport.Lifecycle"]], [({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)], true)],
		PhasedStarter,
		() => [/* @__PURE__ */ $.structField("startedMu", "sync.Mutex", [0], 0, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("started", /* @__PURE__ */ $.sliceType("transport.Lifecycle"), [1], 8, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("dispatcher", /* @__PURE__ */ $.pointerType("yarpc.Dispatcher"), [2], 32, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("log", /* @__PURE__ */ $.pointerType("zap.Logger"), [3], 40, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("transportsStartInitiated", "atomic.Bool", [4], 48, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("transportsStarted", "atomic.Bool", [5], 56, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("outboundsStartInitiated", "atomic.Bool", [6], 64, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("outboundsStarted", "atomic.Bool", [7], 72, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("inboundsStartInitiated", "atomic.Bool", [8], 80, false, { pkgPath: "go.uber.org/yarpc" })]
	)
}

export class PhasedStopper {
	public get dispatcher(): __goscript_dispatcher.Dispatcher | $.VarRef<__goscript_dispatcher.Dispatcher> | null {
		return this._fields.dispatcher
	}

	public set dispatcher(value: __goscript_dispatcher.Dispatcher | $.VarRef<__goscript_dispatcher.Dispatcher> | null) {
		this._fields.dispatcher = value
	}

	public get log(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.log
	}

	public set log(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.log = value
	}

	public get inboundsStopInitiated(): atomic.Bool {
		return this._fields.inboundsStopInitiated
	}

	public set inboundsStopInitiated(value: atomic.Bool) {
		this._fields.inboundsStopInitiated = value
	}

	public get inboundsStopped(): atomic.Bool {
		return this._fields.inboundsStopped
	}

	public set inboundsStopped(value: atomic.Bool) {
		this._fields.inboundsStopped = value
	}

	public get outboundsStopInitiated(): atomic.Bool {
		return this._fields.outboundsStopInitiated
	}

	public set outboundsStopInitiated(value: atomic.Bool) {
		this._fields.outboundsStopInitiated = value
	}

	public get outboundsStopped(): atomic.Bool {
		return this._fields.outboundsStopped
	}

	public set outboundsStopped(value: atomic.Bool) {
		this._fields.outboundsStopped = value
	}

	public get transportsStopInitiated(): atomic.Bool {
		return this._fields.transportsStopInitiated
	}

	public set transportsStopInitiated(value: atomic.Bool) {
		this._fields.transportsStopInitiated = value
	}

	public _fields: {
		dispatcher: __goscript_dispatcher.Dispatcher | $.VarRef<__goscript_dispatcher.Dispatcher> | null
		log: zap.Logger | $.VarRef<zap.Logger> | null
		inboundsStopInitiated: atomic.Bool
		inboundsStopped: atomic.Bool
		outboundsStopInitiated: atomic.Bool
		outboundsStopped: atomic.Bool
		transportsStopInitiated: atomic.Bool
	}

	constructor(init?: Partial<{dispatcher?: __goscript_dispatcher.Dispatcher | $.VarRef<__goscript_dispatcher.Dispatcher> | null, log?: zap.Logger | $.VarRef<zap.Logger> | null, inboundsStopInitiated?: atomic.Bool, inboundsStopped?: atomic.Bool, outboundsStopInitiated?: atomic.Bool, outboundsStopped?: atomic.Bool, transportsStopInitiated?: atomic.Bool}>, __goscriptValue?: boolean) {
		this._fields = {
			dispatcher: init?.dispatcher ?? (null! as __goscript_dispatcher.Dispatcher | $.VarRef<__goscript_dispatcher.Dispatcher> | null),
			log: init?.log ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			inboundsStopInitiated: init?.inboundsStopInitiated ? init.inboundsStopInitiated.clone() : new atomic.Bool(undefined, true),
			inboundsStopped: init?.inboundsStopped ? init.inboundsStopped.clone() : new atomic.Bool(undefined, true),
			outboundsStopInitiated: init?.outboundsStopInitiated ? init.outboundsStopInitiated.clone() : new atomic.Bool(undefined, true),
			outboundsStopped: init?.outboundsStopped ? init.outboundsStopped.clone() : new atomic.Bool(undefined, true),
			transportsStopInitiated: init?.transportsStopInitiated ? init.transportsStopInitiated.clone() : new atomic.Bool(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PhasedStopper {
		return new PhasedStopper(this, true)
	}

	public __goscriptAssign(source: PhasedStopper): void {
		const target = this._fields
		const values = source._fields
		target.dispatcher = values.dispatcher
		target.log = values.log
		$.assignStruct(target.inboundsStopInitiated, values.inboundsStopInitiated)
		$.assignStruct(target.inboundsStopped, values.inboundsStopped)
		$.assignStruct(target.outboundsStopInitiated, values.outboundsStopInitiated)
		$.assignStruct(target.outboundsStopped, values.outboundsStopped)
		$.assignStruct(target.transportsStopInitiated, values.transportsStopInitiated)
	}

	public async StopInbounds(): globalThis.Promise<$.GoError> {
		const s: PhasedStopper | $.VarRef<PhasedStopper> | null = this;
		using __defer = new $.DisposableStack()
		const s$: PhasedStopper = s == null ? $.pointerTarget<PhasedStopper>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<PhasedStopper>(s)
		if ((s$ as PhasedStopper).inboundsStopInitiated.Swap(true)) {
			return errors.New("already began stopping inbounds")
		}
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => (val: boolean) => __receiver.Store(val))((s$ as PhasedStopper).inboundsStopped), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("bool")], results: [] } as $.FunctionTypeInfo), "go.uber.org/atomic.(*Bool).Store-fm")
		__defer.defer(() => { __goscriptDeferCallee2(true) })
		await zap.Logger.prototype.Debug.call((s$ as PhasedStopper).log, "stopping inbounds", null)
		let wait = $.varRef(new errorsync.ErrorWaiter(undefined, true))
		for (let __goscriptRangeTarget4 = $.pointerValue<__goscript_dispatcher.Dispatcher>((s$ as PhasedStopper).dispatcher).inbounds, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let ib = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as transport.Inbound | null)
			await wait.value.Submit($.functionValue(((__receiver) => () => __receiver.Stop())((ib !== null && (ib as any).__isVarRef !== true && (ib as any).__goValue === undefined ? (ib as Exclude<transport.Inbound, null>) : $.pointerValue<Exclude<transport.Inbound, null>>(ib))), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/api/transport.Lifecycle.Stop-fm"))
		}
		{
			let errs: $.Slice<$.GoError> = await wait.value.Wait()
			if ($.sliceLen(errs) > 0) {
				return multierr.Combine(errs)
			}
		}
		await zap.Logger.prototype.Debug.call((s$ as PhasedStopper).log, "stopped inbounds", null)
		return null
	}

	public async StopOutbounds(): globalThis.Promise<$.GoError> {
		const s: PhasedStopper | $.VarRef<PhasedStopper> | null = this;
		using __defer = new $.DisposableStack()
		const s$: PhasedStopper = s == null ? $.pointerTarget<PhasedStopper>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<PhasedStopper>(s)
		if (!(s$ as PhasedStopper).inboundsStopped.Load()) {
			return errors.New("must stop inbounds first")
		}
		if ((s$ as PhasedStopper).outboundsStopInitiated.Swap(true)) {
			return errors.New("already began stopping outbounds")
		}
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => (val: boolean) => __receiver.Store(val))((s$ as PhasedStopper).outboundsStopped), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("bool")], results: [] } as $.FunctionTypeInfo), "go.uber.org/atomic.(*Bool).Store-fm")
		__defer.defer(() => { __goscriptDeferCallee3(true) })
		await zap.Logger.prototype.Debug.call((s$ as PhasedStopper).log, "stopping outbounds", null)
		let wait = $.varRef(new errorsync.ErrorWaiter(undefined, true))
		for (const [__rangeKey, o] of $.pointerValue<__goscript_dispatcher.Dispatcher>((s$ as PhasedStopper).dispatcher).outbounds?.entries() ?? []) {
			if (o.Unary != null) {
				await wait.value.Submit($.functionValue(((__receiver) => () => __receiver.Stop())($.pointerValue<Exclude<transport.UnaryOutbound, null>>(o.Unary)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/api/transport.Lifecycle.Stop-fm"))
			}
			if (o.Oneway != null) {
				await wait.value.Submit($.functionValue(((__receiver) => () => __receiver.Stop())($.pointerValue<Exclude<transport.OnewayOutbound, null>>(o.Oneway)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/api/transport.Lifecycle.Stop-fm"))
			}
			if (o.Stream != null) {
				await wait.value.Submit($.functionValue(((__receiver) => () => __receiver.Stop())($.pointerValue<Exclude<transport.StreamOutbound, null>>(o.Stream)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/api/transport.Lifecycle.Stop-fm"))
			}
		}
		{
			let errs: $.Slice<$.GoError> = await wait.value.Wait()
			if ($.sliceLen(errs) > 0) {
				return multierr.Combine(errs)
			}
		}
		await zap.Logger.prototype.Debug.call((s$ as PhasedStopper).log, "stopped outbounds", null)
		return null
	}

	public async StopTransports(): globalThis.Promise<$.GoError> {
		const s: PhasedStopper | $.VarRef<PhasedStopper> | null = this;
		const s$: PhasedStopper = s == null ? $.pointerTarget<PhasedStopper>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<PhasedStopper>(s)
		if (!(s$ as PhasedStopper).inboundsStopped.Load() || !(s$ as PhasedStopper).outboundsStopped.Load()) {
			return errors.New("must stop inbounds and outbounds first")
		}
		if ((s$ as PhasedStopper).transportsStopInitiated.Swap(true)) {
			return errors.New("already began stopping transports")
		}
		await zap.Logger.prototype.Debug.call((s$ as PhasedStopper).log, "stopping transports", null)
		let wait = $.varRef(new errorsync.ErrorWaiter(undefined, true))
		for (let __goscriptRangeTarget5 = $.pointerValue<__goscript_dispatcher.Dispatcher>((s$ as PhasedStopper).dispatcher).transports, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let t = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as transport.Transport | null)
			await wait.value.Submit($.functionValue(((__receiver) => () => __receiver.Stop())((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<transport.Transport, null>) : $.pointerValue<Exclude<transport.Transport, null>>(t))), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/yarpc/api/transport.Lifecycle.Stop-fm"))
		}
		{
			let errs: $.Slice<$.GoError> = await wait.value.Wait()
			if ($.sliceLen(errs) > 0) {
				return multierr.Combine(errs)
			}
		}
		await zap.Logger.prototype.Debug.call((s$ as PhasedStopper).log, "stopped transports", null)

		await zap.Logger.prototype.Debug.call((s$ as PhasedStopper).log, "stopping metrics push loop, if any", null)
		void (__goscriptAwait = $.pointerValue<__goscript_dispatcher.Dispatcher>((s$ as PhasedStopper).dispatcher).stopMeter!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await zap.Logger.prototype.Debug.call((s$ as PhasedStopper).log, "stopped metrics push loop, if any", null)

		return null
	}

	static __typeInfo = $.registerStructType(
		"yarpc.PhasedStopper",
		() => new PhasedStopper(),
		() => [$.methodSignature("StopInbounds", [], ["error"], true), $.methodSignature("StopOutbounds", [], ["error"], true), $.methodSignature("StopTransports", [], ["error"], true)],
		PhasedStopper,
		() => [/* @__PURE__ */ $.structField("dispatcher", /* @__PURE__ */ $.pointerType("yarpc.Dispatcher"), [0], 0, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("log", /* @__PURE__ */ $.pointerType("zap.Logger"), [1], 8, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("inboundsStopInitiated", "atomic.Bool", [2], 16, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("inboundsStopped", "atomic.Bool", [3], 24, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("outboundsStopInitiated", "atomic.Bool", [4], 32, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("outboundsStopped", "atomic.Bool", [5], 40, false, { pkgPath: "go.uber.org/yarpc" }), /* @__PURE__ */ $.structField("transportsStopInitiated", "atomic.Bool", [6], 48, false, { pkgPath: "go.uber.org/yarpc" })]
	)
}

var __goscriptAwait: any
