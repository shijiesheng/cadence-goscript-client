// Generated file based on lifecycle.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as fxevent from "@goscript/go.uber.org/fx/fxevent/index.js"

import * as fxclock from "@goscript/go.uber.org/fx/internal/fxclock/index.js"

import * as fxreflect from "@goscript/go.uber.org/fx/internal/fxreflect/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/fx/fxevent/index.js"
import "@goscript/go.uber.org/fx/internal/fxclock/index.js"
import "@goscript/go.uber.org/fx/internal/fxreflect/index.js"
import "@goscript/go.uber.org/multierr/index.js"

$.registerTypePackagePath("go.uber.org/fx/internal/lifecycle", ["lifecycle.Callable", "lifecycle.Hook", "lifecycle.appState", "lifecycle.Lifecycle", "lifecycle.HookRecord", "lifecycle.HookRecords"])

export type Func = (() => void) | null

export type ErrorFunc = (() => $.GoError | globalThis.Promise<$.GoError>) | null

export type ContextFunc = ((_p0: context.Context | null) => void) | null

export type ContextErrorFunc = ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null

export type Callable = any

$.registerInterfaceType(
	"lifecycle.Callable",
	null,
	[]
);

export type appState = number

$.registerNamedValueType(
	"lifecycle.appState",
	{String: (receiver: any, ...args: any[]) => (appState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*lifecycle.appState",
	{String: (receiver: any, ...args: any[]) => (appState_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type HookRecords = $.Slice<HookRecord>

$.registerNamedType("lifecycle.HookRecords", /* @__PURE__ */ $.sliceType("lifecycle.HookRecord"));

$.registerNamedValueType(
	"lifecycle.HookRecords",
	{Format: (receiver: any, ...args: any[]) => (HookRecords_Format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (HookRecords_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (HookRecords_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (HookRecords_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (HookRecords_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*lifecycle.HookRecords",
	{Format: (receiver: any, ...args: any[]) => (HookRecords_Format as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (HookRecords_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (HookRecords_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (HookRecords_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (HookRecords_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class Hook {
	public get OnStart(): ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.OnStart
	}

	public set OnStart(value: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.OnStart = value
	}

	public get OnStop(): ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.OnStop
	}

	public set OnStop(value: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.OnStop = value
	}

	public get OnStartName(): string {
		return this._fields.OnStartName
	}

	public set OnStartName(value: string) {
		this._fields.OnStartName = value
	}

	public get OnStopName(): string {
		return this._fields.OnStopName
	}

	public set OnStopName(value: string) {
		this._fields.OnStopName = value
	}

	public get callerFrame(): fxreflect.Frame {
		return this._fields.callerFrame
	}

	public set callerFrame(value: fxreflect.Frame) {
		this._fields.callerFrame = value
	}

	public _fields: {
		OnStart: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		OnStop: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		OnStartName: string
		OnStopName: string
		callerFrame: fxreflect.Frame
	}

	constructor(init?: Partial<{OnStart?: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null, OnStop?: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null, OnStartName?: string, OnStopName?: string, callerFrame?: fxreflect.Frame}>, __goscriptValue?: boolean) {
		this._fields = {
			OnStart: init?.OnStart ?? (null! as ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			OnStop: init?.OnStop ?? (null! as ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			OnStartName: init?.OnStartName ?? ("" as string),
			OnStopName: init?.OnStopName ?? ("" as string),
			callerFrame: init?.callerFrame ? init.callerFrame.clone() : new fxreflect.Frame(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Hook {
		return new Hook(this, true)
	}

	public __goscriptAssign(source: Hook): void {
		const target = this._fields
		const values = source._fields
		target.OnStart = values.OnStart
		target.OnStop = values.OnStop
		target.OnStartName = values.OnStartName
		target.OnStopName = values.OnStopName
		$.assignStruct(target.callerFrame, values.callerFrame)
	}

	static __typeInfo = $.registerStructType(
		"lifecycle.Hook",
		() => new Hook(),
		() => [],
		Hook,
		() => [/* @__PURE__ */ $.structField("OnStart", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("OnStop", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo), [1], 8, true), /* @__PURE__ */ $.structField("OnStartName", /* @__PURE__ */ $.basicType("string"), [2], 16, true), /* @__PURE__ */ $.structField("OnStopName", /* @__PURE__ */ $.basicType("string"), [3], 32, true), /* @__PURE__ */ $.structField("callerFrame", "fxreflect.Frame", [4], 48, false, { pkgPath: "go.uber.org/fx/internal/lifecycle" })]
	)
}

export class Lifecycle {
	public get clock(): fxclock.Clock | null {
		return this._fields.clock
	}

	public set clock(value: fxclock.Clock | null) {
		this._fields.clock = value
	}

	public get logger(): fxevent.Logger | null {
		return this._fields.logger
	}

	public set logger(value: fxevent.Logger | null) {
		this._fields.logger = value
	}

	public get state(): appState {
		return this._fields.state
	}

	public set state(value: appState) {
		this._fields.state = value
	}

	public get hooks(): $.Slice<Hook> {
		return this._fields.hooks
	}

	public set hooks(value: $.Slice<Hook>) {
		this._fields.hooks = value
	}

	public get numStarted(): number {
		return this._fields.numStarted
	}

	public set numStarted(value: number) {
		this._fields.numStarted = value
	}

	public get startRecords(): HookRecords {
		return this._fields.startRecords
	}

	public set startRecords(value: HookRecords) {
		this._fields.startRecords = value
	}

	public get stopRecords(): HookRecords {
		return this._fields.stopRecords
	}

	public set stopRecords(value: HookRecords) {
		this._fields.stopRecords = value
	}

	public get runningHook(): Hook {
		return this._fields.runningHook
	}

	public set runningHook(value: Hook) {
		this._fields.runningHook = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public _fields: {
		clock: fxclock.Clock | null
		logger: fxevent.Logger | null
		state: appState
		hooks: $.Slice<Hook>
		numStarted: number
		startRecords: HookRecords
		stopRecords: HookRecords
		runningHook: Hook
		mu: sync.Mutex
	}

	constructor(init?: Partial<{clock?: fxclock.Clock | null, logger?: fxevent.Logger | null, state?: appState, hooks?: $.Slice<Hook>, numStarted?: number, startRecords?: HookRecords, stopRecords?: HookRecords, runningHook?: Hook, mu?: sync.Mutex}>, __goscriptValue?: boolean) {
		this._fields = {
			clock: init?.clock ?? (null! as fxclock.Clock | null),
			logger: init?.logger ?? (null! as fxevent.Logger | null),
			state: init?.state ?? (0 as appState),
			hooks: init?.hooks ?? (null! as $.Slice<Hook>),
			numStarted: init?.numStarted ?? (0 as number),
			startRecords: init?.startRecords ?? (null! as HookRecords),
			stopRecords: init?.stopRecords ?? (null! as HookRecords),
			runningHook: init?.runningHook ? init.runningHook.clone() : new Hook(undefined, true),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Lifecycle {
		return new Lifecycle(this, true)
	}

	public __goscriptAssign(source: Lifecycle): void {
		const target = this._fields
		const values = source._fields
		target.clock = $.assignFieldValue(target.clock, values.clock, "fxclock.Clock")
		target.logger = $.assignFieldValue(target.logger, values.logger, "fxevent.Logger")
		target.state = values.state
		target.hooks = values.hooks
		target.numStarted = values.numStarted
		target.startRecords = values.startRecords
		target.stopRecords = values.stopRecords
		$.assignStruct(target.runningHook, values.runningHook)
		$.assignStruct(target.mu, values.mu)
	}

	public async Append(hook: Hook): globalThis.Promise<void> {
		let l: Lifecycle | $.VarRef<Lifecycle> | null = this;
		const l$: Lifecycle = l == null ? $.pointerTarget<Lifecycle>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<Lifecycle>(l)
		// Save the caller's stack frame to report file/line number.
		{
			let f: fxreflect.Stack = (await fxreflect.CallerStack(2, 0) as fxreflect.Stack)
			if ($.sliceLen((f as fxreflect.Stack)) > 0) {
				$.assignStruct(hook.callerFrame, $.arrayIndex(f!, 0))
			}
		}
		;(l$ as Lifecycle).hooks = $.appendOne((l$ as Lifecycle).hooks, (hook).clone())
	}

	public async RunningHookCaller(): globalThis.Promise<string> {
		const l: Lifecycle | $.VarRef<Lifecycle> | null = this;
		using __defer = new $.DisposableStack()
		const l$: Lifecycle = l == null ? $.pointerTarget<Lifecycle>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<Lifecycle>(l)
		await (l$ as Lifecycle).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((l$ as Lifecycle).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		return (l$ as Lifecycle).runningHook.callerFrame.Function
	}

	public async Start(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		let l: Lifecycle | $.VarRef<Lifecycle> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const l$: Lifecycle = l == null ? $.pointerTarget<Lifecycle>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<Lifecycle>(l)
		if (ctx == null) {
			return errors.New("called OnStart with nil context")
		}

		await (l$ as Lifecycle).mu.Lock()
		if ((l$ as Lifecycle).state != 0) {
			const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((l$ as Lifecycle).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee1() })
			return fmt.Errorf("attempted to start lifecycle when in state: %v", $.namedValueInterfaceValue<any>((l$ as Lifecycle).state, "lifecycle.appState", __goscriptStatic4(), __goscriptStatic5(), __goscriptStatic6()))
		}
		;(l$ as Lifecycle).numStarted = 0;
		;(l$ as Lifecycle).state = 1;

		;(l$ as Lifecycle).startRecords = ($.makeSlice<HookRecord>(0, $.sliceLen((l$ as Lifecycle).hooks), undefined, () => new HookRecord(undefined, true)) as HookRecords)
		void (l$ as Lifecycle).mu.Unlock()

		let returnState = 2
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await (l$ as Lifecycle).mu.Lock();
			;(l$ as Lifecycle).state = returnState
			void (l$ as Lifecycle).mu.Unlock()
		})() })

		for (let __goscriptRangeTarget0 = (l$ as Lifecycle).hooks, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let hook = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Hook)).clone()
			// if ctx has cancelled, bail out of the loop.
			{
				let err = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}

			if (hook.OnStart != null) {
				await (l$ as Lifecycle).mu.Lock()
				$.assignStruct((l$ as Lifecycle).runningHook, hook)
				void (l$ as Lifecycle).mu.Unlock()

				let [runtime, err] = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Lifecycle).runStartHook(ctx, (hook).clone()) : Lifecycle.prototype.runStartHook.call(l, ctx, (hook).clone()))
				if (err != null) {
					return err
				}

				await (l$ as Lifecycle).mu.Lock();
				;(l$ as Lifecycle).startRecords = ($.appendOne(((l$ as Lifecycle).startRecords as HookRecords), new HookRecord({CallerFrame: hook.callerFrame, Func: hook.OnStart, Runtime: runtime}, true)) as HookRecords)
				void (l$ as Lifecycle).mu.Unlock()
			}
			;(l$ as Lifecycle).numStarted++
		}

		returnState = 3
		return null
	}

	public async Stop(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		let l: Lifecycle | $.VarRef<Lifecycle> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const l$: Lifecycle = l == null ? $.pointerTarget<Lifecycle>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<Lifecycle>(l)
		if (ctx == null) {
			return errors.New("called OnStop with nil context")
		}

		await (l$ as Lifecycle).mu.Lock()
		if ((((l$ as Lifecycle).state != 3) && ((l$ as Lifecycle).state != 2)) && ((l$ as Lifecycle).state != 1)) {
			const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((l$ as Lifecycle).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee2() })
			return null
		}
		;(l$ as Lifecycle).state = 4
		void (l$ as Lifecycle).mu.Unlock()

		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await (l$ as Lifecycle).mu.Lock();
			;(l$ as Lifecycle).state = 0
			void (l$ as Lifecycle).mu.Unlock()
		})() })

		await (l$ as Lifecycle).mu.Lock();
		;(l$ as Lifecycle).stopRecords = ($.makeSlice<HookRecord>(0, (l$ as Lifecycle).numStarted, undefined, () => new HookRecord(undefined, true)) as HookRecords)
		// Take a snapshot of hook state to avoid races.
		let allHooks: $.Slice<Hook> = $.goSlice((l$ as Lifecycle).hooks, undefined, undefined)
		let numStarted = (l$ as Lifecycle).numStarted
		void (l$ as Lifecycle).mu.Unlock()

		// Run backward from last successful OnStart.
		let errs: $.Slice<$.GoError> = null! as $.Slice<$.GoError>
		for (let __goscriptSliceWindow0 = $.sliceRange(allHooks); numStarted > 0; numStarted--) {
			{
				let err = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
			let hook = (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, numStarted - 1)] as Hook)).clone()
			if (hook.OnStop == null) {
				continue
			}

			await (l$ as Lifecycle).mu.Lock()
			$.assignStruct((l$ as Lifecycle).runningHook, hook)
			void (l$ as Lifecycle).mu.Unlock()

			let [runtime, err] = await (l !== null && (l as any).__isVarRef !== true && (l as any).__goValue === undefined ? ((l as any) as Lifecycle).runStopHook(ctx, (hook).clone()) : Lifecycle.prototype.runStopHook.call(l, ctx, (hook).clone()))
			if (err != null) {
				// For best-effort cleanup, keep going after errors.
				errs = $.appendOne(errs, err, $.appendZeros.nil)
			}

			await (l$ as Lifecycle).mu.Lock();
			;(l$ as Lifecycle).stopRecords = ($.appendOne(((l$ as Lifecycle).stopRecords as HookRecords), new HookRecord({CallerFrame: hook.callerFrame, Func: hook.OnStop, Runtime: runtime}, true)) as HookRecords)
			void (l$ as Lifecycle).mu.Unlock()
		}

		return multierr.Combine(errs)
	}

	public async runStartHook(ctx: context.Context | null, hook: Hook): globalThis.Promise<[time.Duration, $.GoError]> {
		const l: Lifecycle | $.VarRef<Lifecycle> | null = this;
		let runtime: time.Duration = 0n
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const l$: Lifecycle = l == null ? $.pointerTarget<Lifecycle>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<Lifecycle>(l)
		let funcName = hook.OnStartName
		if ($.stringLen(funcName) == 0) {
			funcName = await fxreflect.FuncName($.interfaceValue(hook.OnStart, "func(context.Context) error", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo)))
		}

		void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((l$ as Lifecycle).logger).LogEvent($.interfaceValue<fxevent.Event | null>(new fxevent.OnStartExecuting({CallerName: hook.callerFrame.Function, FunctionName: funcName}), "*fxevent.OnStartExecuting", /* @__PURE__ */ $.pointerType("fxevent.OnStartExecuting"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((l$ as Lifecycle).logger).LogEvent($.interfaceValue<fxevent.Event | null>(new fxevent.OnStartExecuted({CallerName: hook.callerFrame.Function, FunctionName: funcName, Runtime: runtime, Err: err}), "*fxevent.OnStartExecuted", /* @__PURE__ */ $.pointerType("fxevent.OnStartExecuted"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		})() })

		let begin = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<fxclock.Clock, null>>((l$ as Lifecycle).clock).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time)))
		err = (__goscriptAwait = hook.OnStart!(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		const __goscriptReturn4: [time.Duration, $.GoError] = [(__goscriptAwait = $.pointerValue<Exclude<fxclock.Clock, null>>((l$ as Lifecycle).clock).Since($.markAsStructValue($.cloneStructValue(begin))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), err]
		runtime = __goscriptReturn4[0]
		err = __goscriptReturn4[1]
		await __defer.dispose()
		return [runtime, err]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async runStopHook(ctx: context.Context | null, hook: Hook): globalThis.Promise<[time.Duration, $.GoError]> {
		const l: Lifecycle | $.VarRef<Lifecycle> | null = this;
		let runtime: time.Duration = 0n
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const l$: Lifecycle = l == null ? $.pointerTarget<Lifecycle>(l) : (l as any).__isVarRef === true ? (l as any).value : (l as any).__goValue === undefined ? (l as any) : $.pointerTarget<Lifecycle>(l)
		let funcName = hook.OnStopName
		if ($.stringLen(funcName) == 0) {
			funcName = await fxreflect.FuncName($.interfaceValue(hook.OnStop, "func(context.Context) error", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo)))
		}

		void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((l$ as Lifecycle).logger).LogEvent($.interfaceValue<fxevent.Event | null>(new fxevent.OnStopExecuting({CallerName: hook.callerFrame.Function, FunctionName: funcName}), "*fxevent.OnStopExecuting", /* @__PURE__ */ $.pointerType("fxevent.OnStopExecuting"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((l$ as Lifecycle).logger).LogEvent($.interfaceValue<fxevent.Event | null>(new fxevent.OnStopExecuted({CallerName: hook.callerFrame.Function, FunctionName: funcName, Runtime: runtime, Err: err}), "*fxevent.OnStopExecuted", /* @__PURE__ */ $.pointerType("fxevent.OnStopExecuted"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		})() })

		let begin = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<fxclock.Clock, null>>((l$ as Lifecycle).clock).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time)))
		err = (__goscriptAwait = hook.OnStop!(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		const __goscriptReturn5: [time.Duration, $.GoError] = [(__goscriptAwait = $.pointerValue<Exclude<fxclock.Clock, null>>((l$ as Lifecycle).clock).Since($.markAsStructValue($.cloneStructValue(begin))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), err]
		runtime = __goscriptReturn5[0]
		err = __goscriptReturn5[1]
		await __defer.dispose()
		return [runtime, err]
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"lifecycle.Lifecycle",
		() => new Lifecycle(),
		() => [$.methodSignature("Append", [["hook", "lifecycle.Hook"]], [], true), $.methodSignature("RunningHookCaller", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Start", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("Stop", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("runStartHook", [["ctx", "context.Context"], ["hook", "lifecycle.Hook"]], [["runtime", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["err", "error"]], true), $.methodSignature("runStopHook", [["ctx", "context.Context"], ["hook", "lifecycle.Hook"]], [["runtime", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["err", "error"]], true)],
		Lifecycle,
		() => [/* @__PURE__ */ $.structField("clock", "fxclock.Clock", [0], 0, false, { pkgPath: "go.uber.org/fx/internal/lifecycle" }), /* @__PURE__ */ $.structField("logger", "fxevent.Logger", [1], 16, false, { pkgPath: "go.uber.org/fx/internal/lifecycle" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "lifecycle.appState"), [2], 32, false, { pkgPath: "go.uber.org/fx/internal/lifecycle" }), /* @__PURE__ */ $.structField("hooks", /* @__PURE__ */ $.sliceType("lifecycle.Hook"), [3], 40, false, { pkgPath: "go.uber.org/fx/internal/lifecycle" }), /* @__PURE__ */ $.structField("numStarted", /* @__PURE__ */ $.basicType("int"), [4], 64, false, { pkgPath: "go.uber.org/fx/internal/lifecycle" }), /* @__PURE__ */ $.structField("startRecords", /* @__PURE__ */ $.sliceType("lifecycle.HookRecord", "lifecycle.HookRecords"), [5], 72, false, { pkgPath: "go.uber.org/fx/internal/lifecycle" }), /* @__PURE__ */ $.structField("stopRecords", /* @__PURE__ */ $.sliceType("lifecycle.HookRecord", "lifecycle.HookRecords"), [6], 96, false, { pkgPath: "go.uber.org/fx/internal/lifecycle" }), /* @__PURE__ */ $.structField("runningHook", "lifecycle.Hook", [7], 120, false, { pkgPath: "go.uber.org/fx/internal/lifecycle" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [8], 208, false, { pkgPath: "go.uber.org/fx/internal/lifecycle" })]
	)
}

export class HookRecord {
	public get CallerFrame(): fxreflect.Frame {
		return this._fields.CallerFrame
	}

	public set CallerFrame(value: fxreflect.Frame) {
		this._fields.CallerFrame = value
	}

	public get Func(): ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.Func
	}

	public set Func(value: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.Func = value
	}

	public get Runtime(): time.Duration {
		return this._fields.Runtime
	}

	public set Runtime(value: time.Duration) {
		this._fields.Runtime = value
	}

	public _fields: {
		CallerFrame: fxreflect.Frame
		Func: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		Runtime: time.Duration
	}

	constructor(init?: Partial<{CallerFrame?: fxreflect.Frame, Func?: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null, Runtime?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			CallerFrame: init?.CallerFrame ? init.CallerFrame.clone() : new fxreflect.Frame(undefined, true),
			Func: init?.Func ?? (null! as ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			Runtime: init?.Runtime ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HookRecord {
		return new HookRecord(this, true)
	}

	public __goscriptAssign(source: HookRecord): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.CallerFrame, values.CallerFrame)
		target.Func = values.Func
		target.Runtime = values.Runtime
	}

	static __typeInfo = $.registerStructType(
		"lifecycle.HookRecord",
		() => new HookRecord(),
		() => [],
		HookRecord,
		() => [/* @__PURE__ */ $.structField("CallerFrame", "fxreflect.Frame", [0], 0, true), /* @__PURE__ */ $.structField("Func", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo), [1], 40, true), /* @__PURE__ */ $.structField("Runtime", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 48, true)]
	)
}

export const stopped: appState = 0

export const starting: appState = 1

export const incompleteStart: appState = 2

export const started: appState = 3

export const stopping: appState = 4

export let _reflFunc: reflect.Type | null = reflect.TypeOf($.interfaceValue(null, "func()", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))

export function __goscript_set__reflFunc(__goscriptValue: reflect.Type | null): void {
	_reflFunc = __goscriptValue
}

export let _reflErrorFunc: reflect.Type | null = reflect.TypeOf($.interfaceValue(null, "func() error", ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))

export function __goscript_set__reflErrorFunc(__goscriptValue: reflect.Type | null): void {
	_reflErrorFunc = __goscriptValue
}

export let _reflContextFunc: reflect.Type | null = reflect.TypeOf($.interfaceValue(null, "func(context.Context)", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo)))

export function __goscript_set__reflContextFunc(__goscriptValue: reflect.Type | null): void {
	_reflContextFunc = __goscriptValue
}

export let _reflContextErrorFunc: reflect.Type | null = reflect.TypeOf($.interfaceValue(null, "func(context.Context) error", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo)))

export function __goscript_set__reflContextErrorFunc(__goscriptValue: reflect.Type | null): void {
	_reflContextErrorFunc = __goscriptValue
}

export async function Wrap(__typeArgs: $.GenericTypeArgs | undefined, x: any): globalThis.Promise<[((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null, string]> {
	if ((x as any) == null) {
		return [(null as ContextErrorFunc), ""]
	}

	{
		const __goscriptTypeSwitchValue = $.typeParamInterfaceValue<any>(x, __typeArgs?.["T"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null })
		switch (true) {
			case $.typeAssert<Func>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)).ok:
				{
					let fn: Func = $.typeAssert<Func>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)).value
					return [$.functionValue(async (_p0: context.Context | null): globalThis.Promise<$.GoError> => {
						void (__goscriptAwait = fn!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						return null
					}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo)), await fxreflect.FuncName($.typeParamInterfaceValue<any>(x, __typeArgs?.["T"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }))]
				}
				break
			case $.typeAssert<ErrorFunc>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)).ok:
				{
					let fn: ErrorFunc = $.typeAssert<ErrorFunc>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)).value
					return [$.functionValue(async (_p0: context.Context | null): globalThis.Promise<$.GoError> => {
						return fn!()
					}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo)), await fxreflect.FuncName($.typeParamInterfaceValue<any>(x, __typeArgs?.["T"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }))]
				}
				break
			case $.typeAssert<ContextFunc>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo)).ok:
				{
					let fn: ContextFunc = $.typeAssert<ContextFunc>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo)).value
					return [$.functionValue(async (ctx: context.Context | null): globalThis.Promise<$.GoError> => {
						void (__goscriptAwait = fn!(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						return null
					}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo)), await fxreflect.FuncName($.typeParamInterfaceValue<any>(x, __typeArgs?.["T"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }))]
				}
				break
			case $.typeAssert<ContextErrorFunc>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo)).ok:
				{
					let fn: ContextErrorFunc = $.typeAssert<ContextErrorFunc>(__goscriptTypeSwitchValue, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo)).value
					return [fn, await fxreflect.FuncName($.typeParamInterfaceValue<any>(x, __typeArgs?.["T"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }))]
				}
				break
		}
	}

	// Since (1) we're already using reflect in Fx, (2) we're not particularly
	// concerned with performance, and (3) unsafe would require discrete build
	// targets for appengine (etc), just use reflect to convert user-defined
	// function types to their underlying function types and then call Wrap
	// again with the converted value.
	let reflVal = $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.typeParamInterfaceValue<any>(x, __typeArgs?.["T"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }))))
	switch ((true as boolean)) {
		case $.markAsStructValue($.cloneStructValue(reflVal)).CanConvert($.pointerValueOrNil(_reflFunc)!):
		{
			return Wrap(__goscriptStatic0(), $.mustTypeAssert<(() => void) | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflVal)).Convert($.pointerValueOrNil(_reflFunc)!))).Interface(), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
			break
		}
		case $.markAsStructValue($.cloneStructValue(reflVal)).CanConvert($.pointerValueOrNil(_reflErrorFunc)!):
		{
			return Wrap(__goscriptStatic1(), $.mustTypeAssert<(() => $.GoError | globalThis.Promise<$.GoError>) | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflVal)).Convert($.pointerValueOrNil(_reflErrorFunc)!))).Interface(), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
			break
		}
		case $.markAsStructValue($.cloneStructValue(reflVal)).CanConvert($.pointerValueOrNil(_reflContextFunc)!):
		{
			return Wrap(__goscriptStatic2(), $.mustTypeAssert<((_p0: context.Context | null) => void) | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflVal)).Convert($.pointerValueOrNil(_reflContextFunc)!))).Interface(), ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo)))
			break
		}
		default:
		{
			return Wrap(__goscriptStatic3(), $.mustTypeAssert<((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflVal)).Convert($.pointerValueOrNil(_reflContextErrorFunc)!))).Interface(), ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo)))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function appState_String(_as: appState): string {
	switch (_as) {
		case 0:
		{
			return "stopped"
			break
		}
		case 1:
		{
			return "starting"
			break
		}
		case 2:
		{
			return "incompleteStart"
			break
		}
		case 3:
		{
			return "started"
			break
		}
		case 4:
		{
			return "stopping"
			break
		}
		default:
		{
			return "invalidState"
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function New(logger: fxevent.Logger | null, clock: fxclock.Clock | null): Lifecycle | $.VarRef<Lifecycle> | null {
	return new Lifecycle({logger: logger, clock: clock})
}

export function HookRecords_Len(rs: HookRecords): number {
	return $.sliceLen((rs as HookRecords))
}

export function HookRecords_Less(rs: HookRecords, i: number, j: number): boolean {
	// Sort by runtime, greater ones at top.
	return $.arrayIndex(rs!, i).Runtime > $.arrayIndex(rs!, j).Runtime
}

export function HookRecords_Swap(rs: HookRecords, i: number, j: number): void {
	let __goscriptAssign0_0: HookRecord = ($.arrayIndex(rs!, j)).clone()
	let __goscriptAssign0_1: HookRecord = ($.arrayIndex(rs!, i)).clone()
	$.assignStruct($.sliceElems(rs!)[$.sliceSlot(rs!, i)], __goscriptAssign0_0)
	$.assignStruct($.sliceElems(rs!)[$.sliceSlot(rs!, j)], __goscriptAssign0_1)
}

export async function HookRecords_String(rs: HookRecords): globalThis.Promise<string> {
	let b: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
	for (let __goscriptRangeTarget1 = rs, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let r = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as HookRecord)).clone()
		await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, "%s took %v from %s", await fxreflect.FuncName($.interfaceValue(r.Func, "func(context.Context) error", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo))), $.namedValueInterfaceValue<any>(r.Runtime, "time.Duration", __goscriptStatic7(), __goscriptStatic8(), __goscriptStatic9()), $.interfaceValue((r.CallerFrame).clone(), "fxreflect.Frame", "fxreflect.Frame"))
	}
	return b.value.String()
}

export async function HookRecords_Format(rs: HookRecords, w: fmt.State | null, c: number): globalThis.Promise<void> {
	if (!(__goscriptAwait = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<fmt.State, null>) : $.pointerValue<Exclude<fmt.State, null>>(w)).Flag(43), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		// Without %+v, fall back to String().
		await io.WriteString($.pointerValueOrNil((w as io.Writer | null))!, await HookRecords_String(rs))
		return
	}

	for (let __goscriptRangeTarget2 = rs, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let r = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as HookRecord)).clone()
		await fmt.Fprintf($.pointerValueOrNil((w as io.Writer | null))!, "\n%s took %v from:\n\t%+v", await fxreflect.FuncName($.interfaceValue(r.Func, "func(context.Context) error", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo))), $.namedValueInterfaceValue<any>(r.Runtime, "time.Duration", __goscriptStatic7(), __goscriptStatic8(), __goscriptStatic9()), $.interfaceValue((r.CallerFrame).clone(), "fxreflect.Frame", "fxreflect.Frame"))
	}
	await fmt.Fprintf($.pointerValueOrNil((w as io.Writer | null))!, "\n")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), zero: () => null }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), zero: () => null }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo), zero: () => null }})
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo), zero: () => null }})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ({String: (receiver: any, ...args: any[]) => (appState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= (/* @__PURE__ */ $.basicType("int", "lifecycle.appState"))
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptAwait: any
