// Generated file based on signal.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as os from "@goscript/os/index.js"

import * as signal2 from "@goscript/os/signal/index.js"

import * as sync from "@goscript/sync/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as __goscript_app_wasm from "./app_wasm.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/os/index.js"
import "@goscript/os/signal/index.js"
import "@goscript/sync/index.js"
import "@goscript/syscall/index.js"
import "./app_wasm.gs.ts"

$.registerTypePackagePath("go.uber.org/fx", ["fx.ShutdownSignal", "fx.signalReceivers", "fx.unsentSignalError"])

export class ShutdownSignal {
	public get Signal(): os.Signal | null {
		return this._fields.Signal
	}

	public set Signal(value: os.Signal | null) {
		this._fields.Signal = value
	}

	public get ExitCode(): number {
		return this._fields.ExitCode
	}

	public set ExitCode(value: number) {
		this._fields.ExitCode = value
	}

	public _fields: {
		Signal: os.Signal | null
		ExitCode: number
	}

	constructor(init?: Partial<{Signal?: os.Signal | null, ExitCode?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Signal: init?.Signal ?? (null! as os.Signal | null),
			ExitCode: init?.ExitCode ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ShutdownSignal {
		return new ShutdownSignal(this, true)
	}

	public __goscriptAssign(source: ShutdownSignal): void {
		const target = this._fields
		const values = source._fields
		target.Signal = $.assignFieldValue(target.Signal, values.Signal, "os.Signal")
		target.ExitCode = values.ExitCode
	}

	public async String(): globalThis.Promise<string> {
		const sig = this;
		return fmt.Sprintf("%v", (sig.Signal as any))
	}

	static __typeInfo = $.registerStructType(
		"fx.ShutdownSignal",
		() => new ShutdownSignal(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		ShutdownSignal,
		() => [/* @__PURE__ */ $.structField("Signal", "os.Signal", [0], 0, true), /* @__PURE__ */ $.structField("ExitCode", /* @__PURE__ */ $.basicType("int"), [1], 16, true)]
	)
}

export class signalReceivers {
	// this mutex protects writes and reads of this struct to prevent
	// race conditions in a parallel execution pattern
	public get m(): sync.Mutex {
		return this._fields.m
	}

	public set m(value: sync.Mutex) {
		this._fields.m = value
	}

	// our os.Signal channel we relay from
	public get signals(): $.Channel<os.Signal | null> | null {
		return this._fields.signals
	}

	public set signals(value: $.Channel<os.Signal | null> | null) {
		this._fields.signals = value
	}

	// when written to, will instruct the signal relayer to shutdown
	public get shutdown(): $.Channel<{}> | null {
		return this._fields.shutdown
	}

	public set shutdown(value: $.Channel<{}> | null) {
		this._fields.shutdown = value
	}

	// is written to when signal relay has finished shutting down
	public get finished(): $.Channel<{}> | null {
		return this._fields.finished
	}

	public set finished(value: $.Channel<{}> | null) {
		this._fields.finished = value
	}

	// this stub allows us to unit test signal relay functionality
	public get notify(): ((c: $.Channel<os.Signal | null> | null, sig: $.Slice<os.Signal | null>) => void) | null {
		return this._fields.notify
	}

	public set notify(value: ((c: $.Channel<os.Signal | null> | null, sig: $.Slice<os.Signal | null>) => void) | null) {
		this._fields.notify = value
	}

	public get stopNotify(): ((c: $.Channel<os.Signal | null> | null) => void) | null {
		return this._fields.stopNotify
	}

	public set stopNotify(value: ((c: $.Channel<os.Signal | null> | null) => void) | null) {
		this._fields.stopNotify = value
	}

	// last will contain a pointer to the last ShutdownSignal received, or
	// nil if none, if a new channel is created by Wait or Done, this last
	// signal will be immediately written to, this allows Wait or Done state
	// to be read after application stop
	public get last(): ShutdownSignal | $.VarRef<ShutdownSignal> | null {
		return this._fields.last
	}

	public set last(value: ShutdownSignal | $.VarRef<ShutdownSignal> | null) {
		this._fields.last = value
	}

	// contains channels created by Done
	public get done(): $.Slice<$.Channel<os.Signal | null> | null> {
		return this._fields.done
	}

	public set done(value: $.Slice<$.Channel<os.Signal | null> | null>) {
		this._fields.done = value
	}

	// contains channels created by Wait
	public get wait(): $.Slice<$.Channel<ShutdownSignal> | null> {
		return this._fields.wait
	}

	public set wait(value: $.Slice<$.Channel<ShutdownSignal> | null>) {
		this._fields.wait = value
	}

	public _fields: {
		m: sync.Mutex
		signals: $.Channel<os.Signal | null> | null
		shutdown: $.Channel<{}> | null
		finished: $.Channel<{}> | null
		notify: ((c: $.Channel<os.Signal | null> | null, sig: $.Slice<os.Signal | null>) => void) | null
		stopNotify: ((c: $.Channel<os.Signal | null> | null) => void) | null
		last: ShutdownSignal | $.VarRef<ShutdownSignal> | null
		done: $.Slice<$.Channel<os.Signal | null> | null>
		wait: $.Slice<$.Channel<ShutdownSignal> | null>
	}

	constructor(init?: Partial<{m?: sync.Mutex, signals?: $.Channel<os.Signal | null> | null, shutdown?: $.Channel<{}> | null, finished?: $.Channel<{}> | null, notify?: ((c: $.Channel<os.Signal | null> | null, sig: $.Slice<os.Signal | null>) => void) | null, stopNotify?: ((c: $.Channel<os.Signal | null> | null) => void) | null, last?: ShutdownSignal | $.VarRef<ShutdownSignal> | null, done?: $.Slice<$.Channel<os.Signal | null> | null>, wait?: $.Slice<$.Channel<ShutdownSignal> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			m: init?.m ? $.markAsStructValue($.cloneStructValue(init.m)) : $.markAsStructValue(new sync.Mutex()),
			signals: init?.signals ?? (null! as $.Channel<os.Signal | null> | null),
			shutdown: init?.shutdown ?? (null! as $.Channel<{}> | null),
			finished: init?.finished ?? (null! as $.Channel<{}> | null),
			notify: init?.notify ?? (null! as ((c: $.Channel<os.Signal | null> | null, sig: $.Slice<os.Signal | null>) => void) | null),
			stopNotify: init?.stopNotify ?? (null! as ((c: $.Channel<os.Signal | null> | null) => void) | null),
			last: init?.last ?? (null! as ShutdownSignal | $.VarRef<ShutdownSignal> | null),
			done: init?.done ?? (null! as $.Slice<$.Channel<os.Signal | null> | null>),
			wait: init?.wait ?? (null! as $.Slice<$.Channel<ShutdownSignal> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): signalReceivers {
		return new signalReceivers(this, true)
	}

	public __goscriptAssign(source: signalReceivers): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.m, values.m)
		target.signals = values.signals
		target.shutdown = values.shutdown
		target.finished = values.finished
		target.notify = values.notify
		target.stopNotify = values.stopNotify
		target.last = values.last
		target.done = values.done
		target.wait = values.wait
	}

	public async Broadcast(__goscriptParam0: ShutdownSignal): globalThis.Promise<$.GoError> {
		let recv: signalReceivers | $.VarRef<signalReceivers> | null = this;
		let signal: $.VarRef<ShutdownSignal> = $.varRef(__goscriptParam0)
		using __defer = new $.DisposableStack()
		const recv$: signalReceivers = recv == null ? $.pointerTarget<signalReceivers>(recv) : (recv as any).__isVarRef === true ? (recv as any).value : (recv as any).__goValue === undefined ? (recv as any) : $.pointerTarget<signalReceivers>(recv)
		await (recv$ as signalReceivers).m.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((recv$ as signalReceivers).m), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() });

		;(recv$ as signalReceivers).last = signal

		let [channels, unsent] = await signalReceivers.prototype.broadcast.call(recv, (signal.value).clone(), $.arrayToSlice<((_p0: ShutdownSignal) => [number, number] | globalThis.Promise<[number, number]>) | null>([$.functionValue(((__receiver) => (signal: ShutdownSignal) => __receiver.broadcastDone(signal))((recv$ as signalReceivers)), ({ kind: $.TypeKind.Function, params: ["fx.ShutdownSignal"], results: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo), "go.uber.org/fx.(*signalReceivers).broadcastDone-fm"), $.functionValue(((__receiver) => (signal: ShutdownSignal) => __receiver.broadcastWait(signal))((recv$ as signalReceivers)), ({ kind: $.TypeKind.Function, params: ["fx.ShutdownSignal"], results: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo), "go.uber.org/fx.(*signalReceivers).broadcastWait-fm")]))

		if (unsent != 0) {
			return $.interfaceValue<$.GoError>(new unsentSignalError({Signal: signal.value, Total: channels, Unsent: unsent}), "*fx.unsentSignalError", /* @__PURE__ */ $.pointerType("fx.unsentSignalError"))
		}

		return null
	}

	public async Done(): globalThis.Promise<$.Channel<os.Signal | null> | null> {
		let recv: signalReceivers | $.VarRef<signalReceivers> | null = this;
		using __defer = new $.DisposableStack()
		const recv$: signalReceivers = recv == null ? $.pointerTarget<signalReceivers>(recv) : (recv as any).__isVarRef === true ? (recv as any).value : (recv as any).__goValue === undefined ? (recv as any) : $.pointerTarget<signalReceivers>(recv)
		await (recv$ as signalReceivers).m.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((recv$ as signalReceivers).m), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		let ch: $.Channel<os.Signal | null> | null = $.makeChannel<os.Signal | null>(1, null! as os.Signal | null, "both")

		// If we had received a signal prior to the call of done, send it's
		// os.Signal to the new channel.
		// However we still want to have the operating system notify signals to this
		// channel should the application receive another.
		if ((recv$ as signalReceivers).last != null) {
			await $.chanSend(ch, $.pointerValue<ShutdownSignal>((recv$ as signalReceivers).last).Signal)
		}

		;(recv$ as signalReceivers).done = $.appendOne((recv$ as signalReceivers).done, ch, $.appendZeros.nil)
		return ch
	}

	public async Start(ctx: context.Context | null): globalThis.Promise<void> {
		let recv: signalReceivers | $.VarRef<signalReceivers> | null = this;
		using __defer = new $.DisposableStack()
		const recv$: signalReceivers = recv == null ? $.pointerTarget<signalReceivers>(recv) : (recv as any).__isVarRef === true ? (recv as any).value : (recv as any).__goValue === undefined ? (recv as any) : $.pointerTarget<signalReceivers>(recv)
		await (recv$ as signalReceivers).m.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((recv$ as signalReceivers).m), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		// if the receiver has already been started; don't start it again
		if ((recv !== null && (recv as any).__isVarRef !== true && (recv as any).__goValue === undefined ? ((recv as any) as signalReceivers).running() : signalReceivers.prototype.running.call(recv))) {
			return
		}

		;(recv$ as signalReceivers).finished = $.makeChannel<{}>(1, {}, "both");
		;(recv$ as signalReceivers).shutdown = $.makeChannel<{}>(1, {}, "both")
		void (__goscriptAwait = (recv$ as signalReceivers).notify!((recv$ as signalReceivers).signals, $.arrayToSlice<os.Signal | null>([os.Interrupt, $.namedValueInterfaceValue<os.Signal | null>(2, "syscall.Signal", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<os.Signal | null>(6, "syscall.Signal", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.relayer())((recv$ as signalReceivers)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/fx.(*signalReceivers).relayer-fm")
		queueMicrotask(async () => { await __goscriptDeferCallee3() })
	}

	public async Stop(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		let recv: signalReceivers | $.VarRef<signalReceivers> | null = this;
		using __defer = new $.DisposableStack()
		const recv$: signalReceivers = recv == null ? $.pointerTarget<signalReceivers>(recv) : (recv as any).__isVarRef === true ? (recv as any).value : (recv as any).__goValue === undefined ? (recv as any) : $.pointerTarget<signalReceivers>(recv)
		await (recv$ as signalReceivers).m.Lock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())((recv$ as signalReceivers).m), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })
		void (__goscriptAwait = (recv$ as signalReceivers).stopNotify!((recv$ as signalReceivers).signals), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// if the relayer is not running; return nil error
		if (!(recv !== null && (recv as any).__isVarRef !== true && (recv as any).__goValue === undefined ? ((recv as any) as signalReceivers).running() : signalReceivers.prototype.running.call(recv))) {
			return null
		}

		await $.chanSend((recv$ as signalReceivers).shutdown, {})

		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect0Result) => {
					return (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			},
			{
				id: 1,
				isSend: false,
				channel: (recv$ as signalReceivers).finished,
				onSelected: async (__goscriptSelect0Result) => {
					void (recv$ as signalReceivers).shutdown!.close()
					void (recv$ as signalReceivers).finished!.close();
					;(recv$ as signalReceivers).shutdown = null;
					;(recv$ as signalReceivers).finished = null;
					;(recv$ as signalReceivers).last = null
					return null
				}
			}
		], false)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Wait(): globalThis.Promise<$.Channel<ShutdownSignal> | null> {
		let recv: signalReceivers | $.VarRef<signalReceivers> | null = this;
		using __defer = new $.DisposableStack()
		const recv$: signalReceivers = recv == null ? $.pointerTarget<signalReceivers>(recv) : (recv as any).__isVarRef === true ? (recv as any).value : (recv as any).__goValue === undefined ? (recv as any) : $.pointerTarget<signalReceivers>(recv)
		await (recv$ as signalReceivers).m.Lock()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())((recv$ as signalReceivers).m), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })

		let ch: $.Channel<ShutdownSignal> | null = $.makeChannel<ShutdownSignal>(1, new ShutdownSignal(undefined, true), "both")

		if ((recv$ as signalReceivers).last != null) {
			await $.chanSend(ch, ($.pointerValue<ShutdownSignal>((recv$ as signalReceivers).last)).clone())
		}

		;(recv$ as signalReceivers).wait = $.appendOne((recv$ as signalReceivers).wait, ch, $.appendZeros.nil)
		return ch
	}

	public async broadcast(signal: ShutdownSignal, anchors: $.Slice<((_p0: ShutdownSignal) => [number, number] | globalThis.Promise<[number, number]>) | null>): globalThis.Promise<[number, number]> {
		const recv: signalReceivers | $.VarRef<signalReceivers> | null = this;
		let channels: number = 0
		let unsent: number = 0

		for (let __goscriptRangeTarget0 = anchors, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let anchor = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as ((_p0: ShutdownSignal) => [number, number] | globalThis.Promise<[number, number]>) | null)
			let [c, u] = await anchor!((signal).clone())
			channels = channels + (c)
			unsent = unsent + (u)
		}

		return [channels, unsent]
	}

	public async broadcastDone(signal: ShutdownSignal): globalThis.Promise<[number, number]> {
		const recv: signalReceivers | $.VarRef<signalReceivers> | null = this;
		const recv$: signalReceivers = recv == null ? $.pointerTarget<signalReceivers>(recv) : (recv as any).__isVarRef === true ? (recv as any).value : (recv as any).__goValue === undefined ? (recv as any) : $.pointerTarget<signalReceivers>(recv)
		let unsent: number = 0

		for (let __goscriptRangeTarget1 = (recv$ as signalReceivers).done, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let reader = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as $.Channel<os.Signal | null> | null)
			const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, [number, number]>([
				{
					id: 0,
					isSend: true,
					channel: reader,
					value: signal.Signal,
				},
				{
					id: -1,
					isSend: false,
					channel: null,
					onSelected: async (__goscriptSelect1Result) => {
						unsent++
					}
				}
			], true)
			if (__goscriptSelect1HasReturn) {
				return __goscriptSelect1Value
			}
		}

		return [$.sliceLen((recv$ as signalReceivers).done), unsent]
	}

	public async broadcastWait(signal: ShutdownSignal): globalThis.Promise<[number, number]> {
		const recv: signalReceivers | $.VarRef<signalReceivers> | null = this;
		const recv$: signalReceivers = recv == null ? $.pointerTarget<signalReceivers>(recv) : (recv as any).__isVarRef === true ? (recv as any).value : (recv as any).__goValue === undefined ? (recv as any) : $.pointerTarget<signalReceivers>(recv)
		let unsent: number = 0

		for (let __goscriptRangeTarget2 = (recv$ as signalReceivers).wait, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let reader = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as $.Channel<ShutdownSignal> | null)
			const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, [number, number]>([
				{
					id: 0,
					isSend: true,
					channel: reader,
					value: signal,
				},
				{
					id: -1,
					isSend: false,
					channel: null,
					onSelected: async (__goscriptSelect2Result) => {
						unsent++
					}
				}
			], true)
			if (__goscriptSelect2HasReturn) {
				return __goscriptSelect2Value
			}
		}

		return [$.sliceLen((recv$ as signalReceivers).wait), unsent]
	}

	public async relayer(): globalThis.Promise<void> {
		const recv: signalReceivers | $.VarRef<signalReceivers> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const recv$: signalReceivers = recv == null ? $.pointerTarget<signalReceivers>(recv) : (recv as any).__isVarRef === true ? (recv as any).value : (recv as any).__goValue === undefined ? (recv as any) : $.pointerTarget<signalReceivers>(recv)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await $.chanSend((recv$ as signalReceivers).finished, {})
		})() })

		const [__goscriptSelect3HasReturn, __goscriptSelect3Value] = await $.selectStatement<any, void>([
			{
				id: 0,
				isSend: false,
				channel: (recv$ as signalReceivers).shutdown,
				onSelected: async (__goscriptSelect3Result) => {
					return $.selectVoidReturn()
				}
			},
			{
				id: 1,
				isSend: false,
				channel: (recv$ as signalReceivers).signals,
				onSelected: async (__goscriptSelect3Result) => {
					let signal = __goscriptSelect3Result.value
					await (recv !== null && (recv as any).__isVarRef !== true && (recv as any).__goValue === undefined ? ((recv as any) as signalReceivers).Broadcast(new ShutdownSignal({Signal: signal}, true)) : signalReceivers.prototype.Broadcast.call(recv, new ShutdownSignal({Signal: signal}, true)))
				}
			}
		], false)
		if (__goscriptSelect3HasReturn) {
			return __goscriptSelect3Value
		}
	}

	public running(): boolean {
		const recv: signalReceivers | $.VarRef<signalReceivers> | null = this;
		const recv$: signalReceivers = recv == null ? $.pointerTarget<signalReceivers>(recv) : (recv as any).__isVarRef === true ? (recv as any).value : (recv as any).__goValue === undefined ? (recv as any) : $.pointerTarget<signalReceivers>(recv)
		return ((recv$ as signalReceivers).shutdown != null) && ((recv$ as signalReceivers).finished != null)
	}

	static __typeInfo = $.registerStructType(
		"fx.signalReceivers",
		() => new signalReceivers(),
		() => [$.methodSignature("Broadcast", [["signal", "fx.ShutdownSignal"]], ["error"], true), $.methodSignature("Done", [], [/* @__PURE__ */ $.channelType("os.Signal", "receive")], true), $.methodSignature("Start", [["ctx", "context.Context"]], [], true), $.methodSignature("Stop", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("Wait", [], [/* @__PURE__ */ $.channelType("fx.ShutdownSignal", "receive")], true), $.methodSignature("broadcast", [["signal", "fx.ShutdownSignal"], ["anchors", /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, params: ["fx.ShutdownSignal"], results: [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")] } as $.FunctionTypeInfo))]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], true), $.methodSignature("broadcastDone", [["signal", "fx.ShutdownSignal"]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], true), $.methodSignature("broadcastWait", [["signal", "fx.ShutdownSignal"]], [/* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("int")], true), $.methodSignature("relayer", [], [], true), $.methodSignature("running", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		signalReceivers,
		() => [/* @__PURE__ */ $.structField("m", "sync.Mutex", [0], 0, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("signals", /* @__PURE__ */ $.channelType("os.Signal", "both"), [1], 8, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("shutdown", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [2], 16, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("finished", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [3], 24, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("notify", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.channelType("os.Signal", "send"), /* @__PURE__ */ $.sliceType("os.Signal")], results: [], isVariadic: true } as $.FunctionTypeInfo), [4], 32, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("stopNotify", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.channelType("os.Signal", "send")], results: [] } as $.FunctionTypeInfo), [5], 40, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("last", /* @__PURE__ */ $.pointerType("fx.ShutdownSignal"), [6], 48, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.channelType("os.Signal", "both")), [7], 56, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("wait", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.channelType("fx.ShutdownSignal", "both")), [8], 80, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export class unsentSignalError {
	public get Signal(): ShutdownSignal {
		return this._fields.Signal
	}

	public set Signal(value: ShutdownSignal) {
		this._fields.Signal = value
	}

	public get Unsent(): number {
		return this._fields.Unsent
	}

	public set Unsent(value: number) {
		this._fields.Unsent = value
	}

	public get Total(): number {
		return this._fields.Total
	}

	public set Total(value: number) {
		this._fields.Total = value
	}

	public _fields: {
		Signal: ShutdownSignal
		Unsent: number
		Total: number
	}

	constructor(init?: Partial<{Signal?: ShutdownSignal, Unsent?: number, Total?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Signal: init?.Signal ? init.Signal.clone() : new ShutdownSignal(undefined, true),
			Unsent: init?.Unsent ?? (0 as number),
			Total: init?.Total ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): unsentSignalError {
		return new unsentSignalError(this, true)
	}

	public __goscriptAssign(source: unsentSignalError): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Signal, values.Signal)
		target.Unsent = values.Unsent
		target.Total = values.Total
	}

	public async Error(): globalThis.Promise<string> {
		const err: unsentSignalError | $.VarRef<unsentSignalError> | null = this;
		const err$: unsentSignalError = err == null ? $.pointerTarget<unsentSignalError>(err) : (err as any).__isVarRef === true ? (err as any).value : (err as any).__goValue === undefined ? (err as any) : $.pointerTarget<unsentSignalError>(err)
		return fmt.Sprintf("send %v signal: %v/%v channels are blocked", $.interfaceValue(((err$ as unsentSignalError).Signal).clone(), "fx.ShutdownSignal", "fx.ShutdownSignal"), $.basicInterfaceValue((err$ as unsentSignalError).Unsent, "int"), $.basicInterfaceValue((err$ as unsentSignalError).Total, "int"))
	}

	static __typeInfo = $.registerStructType(
		"fx.unsentSignalError",
		() => new unsentSignalError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		unsentSignalError,
		() => [/* @__PURE__ */ $.structField("Signal", "fx.ShutdownSignal", [0], 0, true), /* @__PURE__ */ $.structField("Unsent", /* @__PURE__ */ $.basicType("int"), [1], 24, true), /* @__PURE__ */ $.structField("Total", /* @__PURE__ */ $.basicType("int"), [2], 32, true)]
	)
}

export function newSignalReceivers(): signalReceivers {
	return new signalReceivers({notify: signal2.Notify, stopNotify: signal2.Stop, signals: $.makeChannel<os.Signal | null>(1, null! as os.Signal | null, "both")}, true)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Signal: (receiver: any, ...args: any[]) => (syscall.Signal_Signal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (syscall.Signal_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "syscall.Signal"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Signal"), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
