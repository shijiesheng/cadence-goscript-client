// Generated file based on app.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as os from "@goscript/os/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as dig from "@goscript/go.uber.org/dig/index.js"

import * as fxevent from "@goscript/go.uber.org/fx/fxevent/index.js"

import * as fxclock from "@goscript/go.uber.org/fx/internal/fxclock/index.js"

import * as fxlog from "@goscript/go.uber.org/fx/internal/fxlog/index.js"

import * as fxreflect from "@goscript/go.uber.org/fx/internal/fxreflect/index.js"

import * as lifecycle2 from "@goscript/go.uber.org/fx/internal/lifecycle/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript__module from "./module.gs.ts"

import * as __goscript_decorate from "./decorate.gs.ts"

import * as __goscript_lifecycle from "./lifecycle.gs.ts"

import type * as __goscript_log from "./log.gs.ts"

import * as __goscript_printer_writer from "./printer_writer.gs.ts"

import * as __goscript_shutdown from "./shutdown.gs.ts"

import * as __goscript_signal from "./signal.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/os/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/dig/index.js"
import "@goscript/go.uber.org/fx/fxevent/index.js"
import "@goscript/go.uber.org/fx/internal/fxclock/index.js"
import "@goscript/go.uber.org/fx/internal/fxlog/index.js"
import "@goscript/go.uber.org/fx/internal/fxreflect/index.js"
import "@goscript/go.uber.org/fx/internal/lifecycle/index.js"
import "@goscript/go.uber.org/multierr/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"
import "./module.gs.ts"
import "./decorate.gs.ts"
import "./lifecycle.gs.ts"
import "./printer_writer.gs.ts"
import "./shutdown.gs.ts"
import "./signal.gs.ts"

$.registerTypePackagePath("go.uber.org/fx", ["fx.Option", "fx.errorOption", "fx.optionGroup", "fx.startTimeoutOption", "fx.stopTimeoutOption", "fx.recoverFromPanicsOption", "fx.withLoggerOption", "fx.Printer", "fx.loggerOption", "fx.App", "fx.provide", "fx.invoke", "fx.ErrorHandler", "fx.errorHookOption", "fx.errorHandlerList", "fx.validateOption", "fx.DotGraph", "fx.errWithGraph", "fx.errorWithGraph", "fx.withTimeoutParams", "fx.appLogger"])

export type Option = {
	String(): string | globalThis.Promise<string>
	apply(_p0: __goscript__module._module | $.VarRef<__goscript__module._module> | null): void
}

$.registerInterfaceType(
	"fx.Option",
	null,
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [/* @__PURE__ */ $.pointerType("fx.module")])]
);

export type errorOption = $.Slice<$.GoError>

$.registerNamedType("fx.errorOption", /* @__PURE__ */ $.sliceType("error"));

$.registerNamedValueType(
	"fx.errorOption",
	{String: (receiver: any, ...args: any[]) => (errorOption_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), apply: (receiver: any, ...args: any[]) => (errorOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["mod", /* @__PURE__ */ $.pointerType("fx.module")]])]
);

$.registerNamedValueType(
	"*fx.errorOption",
	{String: (receiver: any, ...args: any[]) => (errorOption_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), apply: (receiver: any, ...args: any[]) => (errorOption_apply as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["mod", /* @__PURE__ */ $.pointerType("fx.module")]])]
);

export type optionGroup = $.Slice<Option | null>

$.registerNamedType("fx.optionGroup", /* @__PURE__ */ $.sliceType("fx.Option"));

$.registerNamedValueType(
	"fx.optionGroup",
	{String: (receiver: any, ...args: any[]) => (optionGroup_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), apply: (receiver: any, ...args: any[]) => (optionGroup_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["mod", /* @__PURE__ */ $.pointerType("fx.module")]])]
);

$.registerNamedValueType(
	"*fx.optionGroup",
	{String: (receiver: any, ...args: any[]) => (optionGroup_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), apply: (receiver: any, ...args: any[]) => (optionGroup_apply as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["mod", /* @__PURE__ */ $.pointerType("fx.module")]])]
);

export type startTimeoutOption = bigint

$.registerNamedValueType(
	"fx.startTimeoutOption",
	{String: (receiver: any, ...args: any[]) => (startTimeoutOption_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), apply: (receiver: any, ...args: any[]) => (startTimeoutOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["m", /* @__PURE__ */ $.pointerType("fx.module")]])]
);

$.registerNamedValueType(
	"*fx.startTimeoutOption",
	{String: (receiver: any, ...args: any[]) => (startTimeoutOption_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), apply: (receiver: any, ...args: any[]) => (startTimeoutOption_apply as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["m", /* @__PURE__ */ $.pointerType("fx.module")]])]
);

export type stopTimeoutOption = bigint

$.registerNamedValueType(
	"fx.stopTimeoutOption",
	{String: (receiver: any, ...args: any[]) => (stopTimeoutOption_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), apply: (receiver: any, ...args: any[]) => (stopTimeoutOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["m", /* @__PURE__ */ $.pointerType("fx.module")]])]
);

$.registerNamedValueType(
	"*fx.stopTimeoutOption",
	{String: (receiver: any, ...args: any[]) => (stopTimeoutOption_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), apply: (receiver: any, ...args: any[]) => (stopTimeoutOption_apply as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["m", /* @__PURE__ */ $.pointerType("fx.module")]])]
);

export type Printer = {
	Printf(_p0: string, _p1: $.Slice<any>): void
}

$.registerInterfaceType(
	"fx.Printer",
	null,
	[$.methodSignature("Printf", [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })])]
);

export type ErrorHandler = {
	HandleError(_p0: $.GoError): void
}

$.registerInterfaceType(
	"fx.ErrorHandler",
	null,
	[$.methodSignature("HandleError", ["error"])]
);

export type errorHookOption = $.Slice<ErrorHandler | null>

$.registerNamedType("fx.errorHookOption", /* @__PURE__ */ $.sliceType("fx.ErrorHandler"));

$.registerNamedValueType(
	"fx.errorHookOption",
	{String: (receiver: any, ...args: any[]) => (errorHookOption_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), apply: (receiver: any, ...args: any[]) => (errorHookOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["m", /* @__PURE__ */ $.pointerType("fx.module")]])]
);

$.registerNamedValueType(
	"*fx.errorHookOption",
	{String: (receiver: any, ...args: any[]) => (errorHookOption_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), apply: (receiver: any, ...args: any[]) => (errorHookOption_apply as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["m", /* @__PURE__ */ $.pointerType("fx.module")]])]
);

export type errorHandlerList = $.Slice<ErrorHandler | null>

$.registerNamedType("fx.errorHandlerList", /* @__PURE__ */ $.sliceType("fx.ErrorHandler"));

$.registerNamedValueType(
	"fx.errorHandlerList",
	{HandleError: (receiver: any, ...args: any[]) => (errorHandlerList_HandleError as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("HandleError", [["err", "error"]])]
);

$.registerNamedValueType(
	"*fx.errorHandlerList",
	{HandleError: (receiver: any, ...args: any[]) => (errorHandlerList_HandleError as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("HandleError", [["err", "error"]])]
);

export type DotGraph = string

export type errWithGraph = {
	Graph(): DotGraph
}

$.registerInterfaceType(
	"fx.errWithGraph",
	null,
	[$.methodSignature("Graph", [], [/* @__PURE__ */ $.basicType("string", "fx.DotGraph")])]
);

export class recoverFromPanicsOption {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): recoverFromPanicsOption {
		return new recoverFromPanicsOption(this, true)
	}

	public __goscriptAssign(source: recoverFromPanicsOption): void {
	}

	public String(): string {
		const o = this;
		return "fx.RecoverFromPanics()"
	}

	public apply(m: __goscript__module._module | $.VarRef<__goscript__module._module> | null): void {
		const o = this;
		const m$: __goscript__module._module = m == null ? $.pointerTarget<__goscript__module._module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<__goscript__module._module>(m)
		if ((m$ as __goscript__module._module).parent != null) {
			$.pointerValue<App>((m$ as __goscript__module._module).app).err = fmt.Errorf($.concatString("fx.RecoverFromPanics Option should be passed to top-level ", "App, not to fx.Module"))
		} else {
			$.pointerValue<App>((m$ as __goscript__module._module).app).recoverFromPanics = true
		}
	}

	static __typeInfo = $.registerStructType(
		"fx.recoverFromPanicsOption",
		() => new recoverFromPanicsOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["m", /* @__PURE__ */ $.pointerType("fx.module")]])],
		recoverFromPanicsOption,
		() => []
	)
}

export class withLoggerOption {
	public get _constructor(): any {
		return this._fields._constructor
	}

	public set _constructor(value: any) {
		this._fields._constructor = value
	}

	public get Stack(): fxreflect.Stack {
		return this._fields.Stack
	}

	public set Stack(value: fxreflect.Stack) {
		this._fields.Stack = value
	}

	public _fields: {
		_constructor: any
		Stack: fxreflect.Stack
	}

	constructor(init?: Partial<{_constructor?: any, Stack?: fxreflect.Stack}>, __goscriptValue?: boolean) {
		this._fields = {
			_constructor: init?._constructor ?? (null! as any),
			Stack: init?.Stack ?? (null! as fxreflect.Stack)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): withLoggerOption {
		return new withLoggerOption(this, true)
	}

	public __goscriptAssign(source: withLoggerOption): void {
		const target = this._fields
		const values = source._fields
		target._constructor = $.assignFieldValue(target._constructor, values._constructor, { kind: $.TypeKind.Interface, methods: [] })
		target.Stack = values.Stack
	}

	public async String(): globalThis.Promise<string> {
		const l = this;
		return fmt.Sprintf("fx.WithLogger(%s)", await fxreflect.FuncName(l._constructor))
	}

	public apply(m: __goscript__module._module | $.VarRef<__goscript__module._module> | null): void {
		const l = this;
		$.pointerValue<__goscript__module._module>(m).logConstructor = new provide({Target: l._constructor, Stack: (l.Stack as fxreflect.Stack)})
	}

	static __typeInfo = $.registerStructType(
		"fx.withLoggerOption",
		() => new withLoggerOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["m", /* @__PURE__ */ $.pointerType("fx.module")]])],
		withLoggerOption,
		() => [/* @__PURE__ */ $.structField("constructor", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { key: "_constructor", pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("Stack", /* @__PURE__ */ $.sliceType("fxreflect.Frame", "fxreflect.Stack"), [1], 16, true)]
	)
}

export class loggerOption {
	public get p(): Printer | null {
		return this._fields.p
	}

	public set p(value: Printer | null) {
		this._fields.p = value
	}

	public _fields: {
		p: Printer | null
	}

	constructor(init?: Partial<{p?: Printer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			p: init?.p ?? (null! as Printer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): loggerOption {
		return new loggerOption(this, true)
	}

	public __goscriptAssign(source: loggerOption): void {
		const target = this._fields
		const values = source._fields
		target.p = $.assignFieldValue(target.p, values.p, "fx.Printer")
	}

	public async String(): globalThis.Promise<string> {
		const l = this;
		return fmt.Sprintf("fx.Logger(%v)", (l.p as any))
	}

	public apply(m: __goscript__module._module | $.VarRef<__goscript__module._module> | null): void {
		const l = this;
		const m$: __goscript__module._module = m == null ? $.pointerTarget<__goscript__module._module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<__goscript__module._module>(m)
		if ((m$ as __goscript__module._module).parent != null) {
			$.pointerValue<App>((m$ as __goscript__module._module).app).err = fmt.Errorf($.concatString("fx.Logger Option should be passed to top-level App, ", "not to fx.Module"))
		} else {
			let np = __goscript_printer_writer.writerFromPrinter(l.p);
			;(m$ as __goscript__module._module).log = fxlog.DefaultLogger(np)
		}
	}

	static __typeInfo = $.registerStructType(
		"fx.loggerOption",
		() => new loggerOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["m", /* @__PURE__ */ $.pointerType("fx.module")]])],
		loggerOption,
		() => [/* @__PURE__ */ $.structField("p", "fx.Printer", [0], 0, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export class App {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get clock(): fxclock.Clock | null {
		return this._fields.clock
	}

	public set clock(value: fxclock.Clock | null) {
		this._fields.clock = value
	}

	public get lifecycle(): __goscript_lifecycle.lifecycleWrapper | $.VarRef<__goscript_lifecycle.lifecycleWrapper> | null {
		return this._fields.lifecycle
	}

	public set lifecycle(value: __goscript_lifecycle.lifecycleWrapper | $.VarRef<__goscript_lifecycle.lifecycleWrapper> | null) {
		this._fields.lifecycle = value
	}

	public get container(): dig.Container | $.VarRef<dig.Container> | null {
		return this._fields.container
	}

	public set container(value: dig.Container | $.VarRef<dig.Container> | null) {
		this._fields.container = value
	}

	public get root(): __goscript__module._module | $.VarRef<__goscript__module._module> | null {
		return this._fields.root
	}

	public set root(value: __goscript__module._module | $.VarRef<__goscript__module._module> | null) {
		this._fields.root = value
	}

	public get modules(): $.Slice<__goscript__module._module | $.VarRef<__goscript__module._module> | null> {
		return this._fields.modules
	}

	public set modules(value: $.Slice<__goscript__module._module | $.VarRef<__goscript__module._module> | null>) {
		this._fields.modules = value
	}

	// Timeouts used
	public get startTimeout(): time.Duration {
		return this._fields.startTimeout
	}

	public set startTimeout(value: time.Duration) {
		this._fields.startTimeout = value
	}

	public get stopTimeout(): time.Duration {
		return this._fields.stopTimeout
	}

	public set stopTimeout(value: time.Duration) {
		this._fields.stopTimeout = value
	}

	// Decides how we react to errors when building the graph.
	public get errorHooks(): $.Slice<ErrorHandler | null> {
		return this._fields.errorHooks
	}

	public set errorHooks(value: $.Slice<ErrorHandler | null>) {
		this._fields.errorHooks = value
	}

	public get validate(): boolean {
		return this._fields.validate
	}

	public set validate(value: boolean) {
		this._fields.validate = value
	}

	// Whether to recover from panics in Dig container
	public get recoverFromPanics(): boolean {
		return this._fields.recoverFromPanics
	}

	public set recoverFromPanics(value: boolean) {
		this._fields.recoverFromPanics = value
	}

	// Used to signal shutdowns.
	public get receivers(): __goscript_signal.signalReceivers {
		return this._fields.receivers
	}

	public set receivers(value: __goscript_signal.signalReceivers) {
		this._fields.receivers = value
	}

	public get osExit(): ((code: number) => void) | null {
		return this._fields.osExit
	}

	public set osExit(value: ((code: number) => void) | null) {
		this._fields.osExit = value
	}

	public _fields: {
		err: $.GoError
		clock: fxclock.Clock | null
		lifecycle: __goscript_lifecycle.lifecycleWrapper | $.VarRef<__goscript_lifecycle.lifecycleWrapper> | null
		container: dig.Container | $.VarRef<dig.Container> | null
		root: __goscript__module._module | $.VarRef<__goscript__module._module> | null
		modules: $.Slice<__goscript__module._module | $.VarRef<__goscript__module._module> | null>
		startTimeout: time.Duration
		stopTimeout: time.Duration
		errorHooks: $.Slice<ErrorHandler | null>
		validate: boolean
		recoverFromPanics: boolean
		receivers: __goscript_signal.signalReceivers
		osExit: ((code: number) => void) | null
	}

	constructor(init?: Partial<{err?: $.GoError, clock?: fxclock.Clock | null, lifecycle?: __goscript_lifecycle.lifecycleWrapper | $.VarRef<__goscript_lifecycle.lifecycleWrapper> | null, container?: dig.Container | $.VarRef<dig.Container> | null, root?: __goscript__module._module | $.VarRef<__goscript__module._module> | null, modules?: $.Slice<__goscript__module._module | $.VarRef<__goscript__module._module> | null>, startTimeout?: time.Duration, stopTimeout?: time.Duration, errorHooks?: $.Slice<ErrorHandler | null>, validate?: boolean, recoverFromPanics?: boolean, receivers?: __goscript_signal.signalReceivers, osExit?: ((code: number) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError),
			clock: init?.clock ?? (null! as fxclock.Clock | null),
			lifecycle: init?.lifecycle ?? (null! as __goscript_lifecycle.lifecycleWrapper | $.VarRef<__goscript_lifecycle.lifecycleWrapper> | null),
			container: init?.container ?? (null! as dig.Container | $.VarRef<dig.Container> | null),
			root: init?.root ?? (null! as __goscript__module._module | $.VarRef<__goscript__module._module> | null),
			modules: init?.modules ?? (null! as $.Slice<__goscript__module._module | $.VarRef<__goscript__module._module> | null>),
			startTimeout: init?.startTimeout ?? (0n as time.Duration),
			stopTimeout: init?.stopTimeout ?? (0n as time.Duration),
			errorHooks: init?.errorHooks ?? (null! as $.Slice<ErrorHandler | null>),
			validate: init?.validate ?? (false as boolean),
			recoverFromPanics: init?.recoverFromPanics ?? (false as boolean),
			receivers: init?.receivers ? init.receivers.clone() : new __goscript_signal.signalReceivers(undefined, true),
			osExit: init?.osExit ?? (null! as ((code: number) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): App {
		return new App(this, true)
	}

	public __goscriptAssign(source: App): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.clock = $.assignFieldValue(target.clock, values.clock, "fxclock.Clock")
		target.lifecycle = values.lifecycle
		target.container = values.container
		target.root = values.root
		target.modules = values.modules
		target.startTimeout = values.startTimeout
		target.stopTimeout = values.stopTimeout
		target.errorHooks = values.errorHooks
		target.validate = values.validate
		target.recoverFromPanics = values.recoverFromPanics
		$.assignStruct(target.receivers, values.receivers)
		target.osExit = values.osExit
	}

	public async Done(): globalThis.Promise<$.Channel<os.Signal | null> | null> {
		const app: App | $.VarRef<App> | null = this;
		return $.pointerValue<App>(app).receivers.Done()
	}

	public Err(): $.GoError {
		const app: App | $.VarRef<App> | null = this;
		return $.pointerValue<App>(app).err
	}

	public async Run(): globalThis.Promise<void> {
		const app: App | $.VarRef<App> | null = this;
		// Historically, we do not os.Exit(0) even though most applications
		// cede control to Fx with they call app.Run. To avoid a breaking
		// change, never os.Exit for success.
		{
			let code = await App.prototype.run.call(app, $.functionValue(((__receiver) => () => __receiver.Wait())($.pointerValue<App>(app)), ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.channelType("fx.ShutdownSignal", "receive")] } as $.FunctionTypeInfo), "go.uber.org/fx.(*App).Wait-fm"))
			if (code != 0) {
				await (app !== null && (app as any).__isVarRef !== true && (app as any).__goValue === undefined ? ((app as any) as App).exit(code) : App.prototype.exit.call(app, code))
			}
		}
	}

	public async Start(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const app: App | $.VarRef<App> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const app$: App = app == null ? $.pointerTarget<App>(app) : (app as any).__isVarRef === true ? (app as any).value : (app as any).__goValue === undefined ? (app as any) : $.pointerTarget<App>(app)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((app !== null && (app as any).__isVarRef !== true && (app as any).__goValue === undefined ? ((app as any) as App).log() : App.prototype.log.call(app))).LogEvent($.interfaceValue<fxevent.Event | null>(new fxevent.Started({Err: err}), "*fxevent.Started", /* @__PURE__ */ $.pointerType("fxevent.Started"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		})() })

		if ((app$ as App).err != null) {
			// Some provides failed, short-circuit immediately.
			const __goscriptReturn0: $.GoError = (app$ as App).err
			err = __goscriptReturn0
			await __defer.dispose()
			return err
		}

		const __goscriptReturn1: $.GoError = await withTimeout(ctx, (() => { const __goscriptLiteralField1 = (app !== null && (app as any).__isVarRef !== true && (app as any).__goValue === undefined ? ((app as any) as App).log() : App.prototype.log.call(app)); return new withTimeoutParams({hook: _onStartHook, callback: $.functionValue(((__receiver) => (ctx: context.Context | null) => __receiver.start(ctx))((app$ as App)), ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/fx.(*App).start-fm"), lifecycle: (app$ as App).lifecycle, log: __goscriptLiteralField1}) })())
		err = __goscriptReturn1
		await __defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	public StartTimeout(): time.Duration {
		const app: App | $.VarRef<App> | null = this;
		return $.pointerValue<App>(app).startTimeout
	}

	public async Stop(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const app: App | $.VarRef<App> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const app$: App = app == null ? $.pointerTarget<App>(app) : (app as any).__isVarRef === true ? (app as any).value : (app as any).__goValue === undefined ? (app as any) : $.pointerTarget<App>(app)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((app !== null && (app as any).__isVarRef !== true && (app as any).__goValue === undefined ? ((app as any) as App).log() : App.prototype.log.call(app))).LogEvent($.interfaceValue<fxevent.Event | null>(new fxevent.Stopped({Err: err}), "*fxevent.Stopped", /* @__PURE__ */ $.pointerType("fxevent.Stopped"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		})() })

		let cb: ((ctx: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (ctx: context.Context | null): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (ctx: context.Context | null) => __receiver.Stop(ctx))((app$ as App).receivers), ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/fx.(*signalReceivers).Stop-fm")
			const __goscriptDeferArg0 = ctx
			__defer.defer(async () => { await __goscriptDeferCallee0(__goscriptDeferArg0) })
			return await $.pointerValue<lifecycle2.Lifecycle>($.pointerValue<__goscript_lifecycle.lifecycleWrapper>((app$ as App).lifecycle).Lifecycle).Stop(ctx)
		}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo))

		const __goscriptReturn2: $.GoError = await withTimeout(ctx, (() => { const __goscriptLiteralField2 = (app !== null && (app as any).__isVarRef !== true && (app as any).__goValue === undefined ? ((app as any) as App).log() : App.prototype.log.call(app)); return new withTimeoutParams({hook: _onStopHook, callback: cb, lifecycle: (app$ as App).lifecycle, log: __goscriptLiteralField2}) })())
		err = __goscriptReturn2
		await __defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	public StopTimeout(): time.Duration {
		const app: App | $.VarRef<App> | null = this;
		return $.pointerValue<App>(app).stopTimeout
	}

	public async Wait(): globalThis.Promise<$.Channel<__goscript_signal.ShutdownSignal> | null> {
		const app: App | $.VarRef<App> | null = this;
		return $.pointerValue<App>(app).receivers.Wait()
	}

	public async dotGraph(): globalThis.Promise<[DotGraph, $.GoError]> {
		const app: App | $.VarRef<App> | null = this;
		let b: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
		let err = await dig.Visualize($.pointerValue<App>(app).container, $.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")), null)
		return [b.value.String(), err]
	}

	public async exit(code: number): globalThis.Promise<void> {
		const app: App | $.VarRef<App> | null = this;
		const app$: App = app == null ? $.pointerTarget<App>(app) : (app as any).__isVarRef === true ? (app as any).value : (app as any).__goValue === undefined ? (app as any) : $.pointerTarget<App>(app)
		let osExit: ((code: number) => void) | null = os.Exit
		if ((app$ as App).osExit != null) {
			osExit = (app$ as App).osExit
		}
		void (__goscriptAwait = osExit!(code), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public log(): fxevent.Logger | null {
		const app: App | $.VarRef<App> | null = this;
		return $.pointerValue<__goscript__module._module>($.pointerValue<App>(app).root).log
	}

	public async run(done: (() => $.Channel<__goscript_signal.ShutdownSignal> | null | globalThis.Promise<$.Channel<__goscript_signal.ShutdownSignal> | null>) | null): globalThis.Promise<number> {
		const app: App | $.VarRef<App> | null = this;
		let exitCode: number = 0
		await using __defer = new $.AsyncDisposableStack()
		const app$: App = app == null ? $.pointerTarget<App>(app) : (app as any).__isVarRef === true ? (app as any).value : (app as any).__goValue === undefined ? (app as any) : $.pointerTarget<App>(app)
		let [startCtx, cancel] = await $.pointerValue<Exclude<fxclock.Clock, null>>((app$ as App).clock).WithTimeout(context.Background(), (app !== null && (app as any).__isVarRef !== true && (app as any).__goValue === undefined ? ((app as any) as App).StartTimeout() : App.prototype.StartTimeout.call(app)))
		const __goscriptDeferCallee1 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		{
			let err = await (app !== null && (app as any).__isVarRef !== true && (app as any).__goValue === undefined ? ((app as any) as App).Start(startCtx) : App.prototype.Start.call(app, startCtx))
			if (err != null) {
				const __goscriptReturn3: number = 1
				exitCode = __goscriptReturn3
				await __defer.dispose()
				return exitCode
			}
		}

		let sig = await $.chanRecv(((__goscriptAwait = done!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<__goscript_signal.ShutdownSignal> | null))
		void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((app !== null && (app as any).__isVarRef !== true && (app as any).__goValue === undefined ? ((app as any) as App).log() : App.prototype.log.call(app))).LogEvent($.interfaceValue<fxevent.Event | null>(new fxevent.Stopping({Signal: sig.Signal}), "*fxevent.Stopping", /* @__PURE__ */ $.pointerType("fxevent.Stopping"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		exitCode = sig.ExitCode

		let __goscriptTuple0: any = await $.pointerValue<Exclude<fxclock.Clock, null>>((app$ as App).clock).WithTimeout(context.Background(), (app !== null && (app as any).__isVarRef !== true && (app as any).__goValue === undefined ? ((app as any) as App).StopTimeout() : App.prototype.StopTimeout.call(app)))
		let stopCtx = __goscriptTuple0[0]
		cancel = __goscriptTuple0[1]
		const __goscriptDeferCallee2 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee2!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		{
			let err = await (app !== null && (app as any).__isVarRef !== true && (app as any).__goValue === undefined ? ((app as any) as App).Stop(stopCtx) : App.prototype.Stop.call(app, stopCtx))
			if (err != null) {
				const __goscriptReturn4: number = 1
				exitCode = __goscriptReturn4
				await __defer.dispose()
				return exitCode
			}
		}

		const __goscriptReturn5: number = exitCode
		exitCode = __goscriptReturn5
		await __defer.dispose()
		return exitCode
		throw new globalThis.Error("goscript: unreachable return")
	}

	public shutdowner(): __goscript_shutdown.Shutdowner | null {
		const app: App | $.VarRef<App> | null = this;
		return $.interfaceValue<__goscript_shutdown.Shutdowner | null>(new __goscript_shutdown.shutdowner({app: app}), "*fx.shutdowner", /* @__PURE__ */ $.pointerType("fx.shutdowner"))
	}

	public async start(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const app: App | $.VarRef<App> | null = this;
		const app$: App = app == null ? $.pointerTarget<App>(app) : (app as any).__isVarRef === true ? (app as any).value : (app as any).__goValue === undefined ? (app as any) : $.pointerTarget<App>(app)
		return App.prototype.withRollback.call(app, ctx, $.functionValue(async (ctx: context.Context | null): globalThis.Promise<$.GoError> => {
			{
				let err = await $.pointerValue<lifecycle2.Lifecycle>($.pointerValue<__goscript_lifecycle.lifecycleWrapper>((app$ as App).lifecycle).Lifecycle).Start(ctx)
				if (err != null) {
					return err
				}
			}
			await (app$ as App).receivers.Start(ctx)
			return null
		}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async withRollback(ctx: context.Context | null, f: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
		const app: App | $.VarRef<App> | null = this;
		{
			let err = (__goscriptAwait = f!(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((app !== null && (app as any).__isVarRef !== true && (app as any).__goValue === undefined ? ((app as any) as App).log() : App.prototype.log.call(app))).LogEvent($.interfaceValue<fxevent.Event | null>(new fxevent.RollingBack({StartErr: err}), "*fxevent.RollingBack", /* @__PURE__ */ $.pointerType("fxevent.RollingBack"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

				let stopErr = await $.pointerValue<lifecycle2.Lifecycle>($.pointerValue<__goscript_lifecycle.lifecycleWrapper>($.pointerValue<App>(app).lifecycle).Lifecycle).Stop(ctx)
				void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((app !== null && (app as any).__isVarRef !== true && (app as any).__goValue === undefined ? ((app as any) as App).log() : App.prototype.log.call(app))).LogEvent($.interfaceValue<fxevent.Event | null>(new fxevent.RolledBack({Err: stopErr}), "*fxevent.RolledBack", /* @__PURE__ */ $.pointerType("fxevent.RolledBack"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

				if (stopErr != null) {
					return multierr.Append(err, stopErr)
				}

				return err
			}
		}

		return null
	}

	static __typeInfo = $.registerStructType(
		"fx.App",
		() => new App(),
		() => [$.methodSignature("Done", [], [/* @__PURE__ */ $.channelType("os.Signal", "receive")], true), $.methodSignature("Err", [], ["error"], true), $.methodSignature("Run", [], [], true), $.methodSignature("Start", [["ctx", "context.Context"]], [["err", "error"]], true), $.methodSignature("StartTimeout", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("Stop", [["ctx", "context.Context"]], [["err", "error"]], true), $.methodSignature("StopTimeout", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("Wait", [], [/* @__PURE__ */ $.channelType("fx.ShutdownSignal", "receive")], true), $.methodSignature("dotGraph", [], [/* @__PURE__ */ $.basicType("string", "fx.DotGraph"), "error"], true), $.methodSignature("exit", [["code", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("log", [], ["fxevent.Logger"], true), $.methodSignature("run", [["done", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.channelType("fx.ShutdownSignal", "receive")] } as $.FunctionTypeInfo)]], [["exitCode", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("shutdowner", [], ["fx.Shutdowner"], true), $.methodSignature("start", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("withRollback", [["ctx", "context.Context"], ["f", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo)]], ["error"], true)],
		App,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("clock", "fxclock.Clock", [1], 16, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("lifecycle", /* @__PURE__ */ $.pointerType("fx.lifecycleWrapper"), [2], 32, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("container", /* @__PURE__ */ $.pointerType("dig.Container"), [3], 40, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("root", /* @__PURE__ */ $.pointerType("fx.module"), [4], 48, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("modules", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("fx.module")), [5], 56, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("startTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [6], 80, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("stopTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [7], 88, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("errorHooks", /* @__PURE__ */ $.sliceType("fx.ErrorHandler"), [8], 96, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("validate", /* @__PURE__ */ $.basicType("bool"), [9], 120, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("recoverFromPanics", /* @__PURE__ */ $.basicType("bool"), [10], 121, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("receivers", "fx.signalReceivers", [11], 128, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("osExit", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int")], results: [] } as $.FunctionTypeInfo), [12], 232, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export class provide {
	// Constructor provided to Fx. This may be an fx.Annotated.
	public get Target(): any {
		return this._fields.Target
	}

	public set Target(value: any) {
		this._fields.Target = value
	}

	// Stack trace of where this provide was made.
	public get Stack(): fxreflect.Stack {
		return this._fields.Stack
	}

	public set Stack(value: fxreflect.Stack) {
		this._fields.Stack = value
	}

	// IsSupply is true when the Target constructor was emitted by fx.Supply.
	public get IsSupply(): boolean {
		return this._fields.IsSupply
	}

	public set IsSupply(value: boolean) {
		this._fields.IsSupply = value
	}

	public get SupplyType(): reflect.Type | null {
		return this._fields.SupplyType
	}

	public set SupplyType(value: reflect.Type | null) {
		this._fields.SupplyType = value
	}

	// Set if the type should be provided at private scope.
	public get Private(): boolean {
		return this._fields.Private
	}

	public set Private(value: boolean) {
		this._fields.Private = value
	}

	public _fields: {
		Target: any
		Stack: fxreflect.Stack
		IsSupply: boolean
		SupplyType: reflect.Type | null
		Private: boolean
	}

	constructor(init?: Partial<{Target?: any, Stack?: fxreflect.Stack, IsSupply?: boolean, SupplyType?: reflect.Type | null, Private?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Target: init?.Target ?? (null! as any),
			Stack: init?.Stack ?? (null! as fxreflect.Stack),
			IsSupply: init?.IsSupply ?? (false as boolean),
			SupplyType: init?.SupplyType ?? (null! as reflect.Type | null),
			Private: init?.Private ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): provide {
		return new provide(this, true)
	}

	public __goscriptAssign(source: provide): void {
		const target = this._fields
		const values = source._fields
		target.Target = $.assignFieldValue(target.Target, values.Target, { kind: $.TypeKind.Interface, methods: [] })
		target.Stack = values.Stack
		target.IsSupply = values.IsSupply
		target.SupplyType = $.assignFieldValue(target.SupplyType, values.SupplyType, "reflect.Type")
		target.Private = values.Private
	}

	static __typeInfo = $.registerStructType(
		"fx.provide",
		() => new provide(),
		() => [],
		provide,
		() => [/* @__PURE__ */ $.structField("Target", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, true), /* @__PURE__ */ $.structField("Stack", /* @__PURE__ */ $.sliceType("fxreflect.Frame", "fxreflect.Stack"), [1], 16, true), /* @__PURE__ */ $.structField("IsSupply", /* @__PURE__ */ $.basicType("bool"), [2], 40, true), /* @__PURE__ */ $.structField("SupplyType", "reflect.Type", [3], 48, true), /* @__PURE__ */ $.structField("Private", /* @__PURE__ */ $.basicType("bool"), [4], 64, true)]
	)
}

export class invoke {
	// Function to invoke.
	public get Target(): any {
		return this._fields.Target
	}

	public set Target(value: any) {
		this._fields.Target = value
	}

	// Stack trace of where this invoke was made.
	public get Stack(): fxreflect.Stack {
		return this._fields.Stack
	}

	public set Stack(value: fxreflect.Stack) {
		this._fields.Stack = value
	}

	public _fields: {
		Target: any
		Stack: fxreflect.Stack
	}

	constructor(init?: Partial<{Target?: any, Stack?: fxreflect.Stack}>, __goscriptValue?: boolean) {
		this._fields = {
			Target: init?.Target ?? (null! as any),
			Stack: init?.Stack ?? (null! as fxreflect.Stack)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): invoke {
		return new invoke(this, true)
	}

	public __goscriptAssign(source: invoke): void {
		const target = this._fields
		const values = source._fields
		target.Target = $.assignFieldValue(target.Target, values.Target, { kind: $.TypeKind.Interface, methods: [] })
		target.Stack = values.Stack
	}

	static __typeInfo = $.registerStructType(
		"fx.invoke",
		() => new invoke(),
		() => [],
		invoke,
		() => [/* @__PURE__ */ $.structField("Target", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, true), /* @__PURE__ */ $.structField("Stack", /* @__PURE__ */ $.sliceType("fxreflect.Frame", "fxreflect.Stack"), [1], 16, true)]
	)
}

export class validateOption {
	public get validate(): boolean {
		return this._fields.validate
	}

	public set validate(value: boolean) {
		this._fields.validate = value
	}

	public _fields: {
		validate: boolean
	}

	constructor(init?: Partial<{validate?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			validate: init?.validate ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): validateOption {
		return new validateOption(this, true)
	}

	public __goscriptAssign(source: validateOption): void {
		const target = this._fields
		const values = source._fields
		target.validate = values.validate
	}

	public async String(): globalThis.Promise<string> {
		const o = this;
		return fmt.Sprintf("fx.validate(%v)", o.validate)
	}

	public apply(m: __goscript__module._module | $.VarRef<__goscript__module._module> | null): void {
		const o = this;
		const m$: __goscript__module._module = m == null ? $.pointerTarget<__goscript__module._module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<__goscript__module._module>(m)
		if ((m$ as __goscript__module._module).parent != null) {
			$.pointerValue<App>((m$ as __goscript__module._module).app).err = fmt.Errorf($.concatString("fx.validate Option should be passed to top-level App, ", "not to fx.Module"))
		} else {
			$.pointerValue<App>((m$ as __goscript__module._module).app).validate = o.validate
		}
	}

	static __typeInfo = $.registerStructType(
		"fx.validateOption",
		() => new validateOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["m", /* @__PURE__ */ $.pointerType("fx.module")]])],
		validateOption,
		() => [/* @__PURE__ */ $.structField("validate", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export class errorWithGraph {
	public get graph(): string {
		return this._fields.graph
	}

	public set graph(value: string) {
		this._fields.graph = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		graph: string
		err: $.GoError
	}

	constructor(init?: Partial<{graph?: string, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			graph: init?.graph ?? ("" as string),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errorWithGraph {
		return new errorWithGraph(this, true)
	}

	public __goscriptAssign(source: errorWithGraph): void {
		const target = this._fields
		const values = source._fields
		target.graph = values.graph
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async Error(): globalThis.Promise<string> {
		const err = this;
		return $.pointerValue<Exclude<$.GoError, null>>(err.err).Error()
	}

	public Graph(): DotGraph {
		const err = this;
		return err.graph
	}

	static __typeInfo = $.registerStructType(
		"fx.errorWithGraph",
		() => new errorWithGraph(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Graph", [], [/* @__PURE__ */ $.basicType("string", "fx.DotGraph")])],
		errorWithGraph,
		() => [/* @__PURE__ */ $.structField("graph", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("err", "error", [1], 16, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export class withTimeoutParams {
	public get log(): fxevent.Logger | null {
		return this._fields.log
	}

	public set log(value: fxevent.Logger | null) {
		this._fields.log = value
	}

	public get hook(): string {
		return this._fields.hook
	}

	public set hook(value: string) {
		this._fields.hook = value
	}

	public get callback(): ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.callback
	}

	public set callback(value: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.callback = value
	}

	public get lifecycle(): __goscript_lifecycle.lifecycleWrapper | $.VarRef<__goscript_lifecycle.lifecycleWrapper> | null {
		return this._fields.lifecycle
	}

	public set lifecycle(value: __goscript_lifecycle.lifecycleWrapper | $.VarRef<__goscript_lifecycle.lifecycleWrapper> | null) {
		this._fields.lifecycle = value
	}

	public _fields: {
		log: fxevent.Logger | null
		hook: string
		callback: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		lifecycle: __goscript_lifecycle.lifecycleWrapper | $.VarRef<__goscript_lifecycle.lifecycleWrapper> | null
	}

	constructor(init?: Partial<{log?: fxevent.Logger | null, hook?: string, callback?: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null, lifecycle?: __goscript_lifecycle.lifecycleWrapper | $.VarRef<__goscript_lifecycle.lifecycleWrapper> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			log: init?.log ?? (null! as fxevent.Logger | null),
			hook: init?.hook ?? ("" as string),
			callback: init?.callback ?? (null! as ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			lifecycle: init?.lifecycle ?? (null! as __goscript_lifecycle.lifecycleWrapper | $.VarRef<__goscript_lifecycle.lifecycleWrapper> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): withTimeoutParams {
		return new withTimeoutParams(this, true)
	}

	public __goscriptAssign(source: withTimeoutParams): void {
		const target = this._fields
		const values = source._fields
		target.log = $.assignFieldValue(target.log, values.log, "fxevent.Logger")
		target.hook = values.hook
		target.callback = values.callback
		target.lifecycle = values.lifecycle
	}

	static __typeInfo = $.registerStructType(
		"fx.withTimeoutParams",
		() => new withTimeoutParams(),
		() => [],
		withTimeoutParams,
		() => [/* @__PURE__ */ $.structField("log", "fxevent.Logger", [0], 0, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("hook", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("callback", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo), [2], 32, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("lifecycle", /* @__PURE__ */ $.pointerType("fx.lifecycleWrapper"), [3], 40, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export class appLogger {
	public get app(): App | $.VarRef<App> | null {
		return this._fields.app
	}

	public set app(value: App | $.VarRef<App> | null) {
		this._fields.app = value
	}

	public _fields: {
		app: App | $.VarRef<App> | null
	}

	constructor(init?: Partial<{app?: App | $.VarRef<App> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			app: init?.app ?? (null! as App | $.VarRef<App> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): appLogger {
		return new appLogger(this, true)
	}

	public __goscriptAssign(source: appLogger): void {
		const target = this._fields
		const values = source._fields
		target.app = values.app
	}

	public async LogEvent(ev: fxevent.Event | null): globalThis.Promise<void> {
		const l = this;
		void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>(App.prototype.log.call(l.app)).LogEvent(ev), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"fx.appLogger",
		() => new appLogger(),
		() => [$.methodSignature("LogEvent", [["ev", "fxevent.Event"]])],
		appLogger,
		() => [/* @__PURE__ */ $.structField("app", /* @__PURE__ */ $.pointerType("fx.App"), [0], 0, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export const DefaultTimeout: time.Duration = 15000000000n

export function Error(errs: $.Slice<$.GoError>): Option | null {
	return $.namedValueInterfaceValue<Option | null>((errs as errorOption), "fx.errorOption", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function errorOption_apply(errs: errorOption, mod: __goscript__module._module | $.VarRef<__goscript__module._module> | null): void {
	const mod$: __goscript__module._module = mod == null ? $.pointerTarget<__goscript__module._module>(mod) : (mod as any).__isVarRef === true ? (mod as any).value : (mod as any).__goValue === undefined ? (mod as any) : $.pointerTarget<__goscript__module._module>(mod)
	$.pointerValue<App>((mod$ as __goscript__module._module).app).err = multierr.Append($.pointerValue<App>((mod$ as __goscript__module._module).app).err, multierr.Combine((errs as $.Slice<$.GoError>)))
}

export async function errorOption_String(errs: errorOption): globalThis.Promise<string> {
	return fmt.Sprintf("fx.Error(%v)", (multierr.Combine((errs as $.Slice<$.GoError>)) as any))
}

export function Options(opts: $.Slice<Option | null>): Option | null {
	return $.namedValueInterfaceValue<Option | null>((opts as optionGroup), "fx.optionGroup", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())
}

export async function optionGroup_apply(og: optionGroup, mod: __goscript__module._module | $.VarRef<__goscript__module._module> | null): globalThis.Promise<void> {
	for (let __goscriptRangeTarget0 = og, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Option | null)
		void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<Option, null>) : $.pointerValue<Exclude<Option, null>>(opt)).apply(mod), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
}

export async function optionGroup_String(og: optionGroup): globalThis.Promise<string> {
	let items: $.Slice<string> = $.makeSlice<string>($.sliceLen((og as optionGroup)), undefined, "string")
	for (let __goscriptRangeTarget1 = og, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow0 = $.sliceRange(items), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let opt = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as Option | null);
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = await fmt.Sprint((opt as any))
	}
	return fmt.Sprintf("fx.Options(%s)", strings.Join(items, ", "))
}

export function StartTimeout(v: time.Duration): Option | null {
	return $.namedValueInterfaceValue<Option | null>($.int64(v), "fx.startTimeoutOption", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic7())
}

export function startTimeoutOption_apply(t: startTimeoutOption, m: __goscript__module._module | $.VarRef<__goscript__module._module> | null): void {
	const m$: __goscript__module._module = m == null ? $.pointerTarget<__goscript__module._module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<__goscript__module._module>(m)
	if ((m$ as __goscript__module._module).parent != null) {
		$.pointerValue<App>((m$ as __goscript__module._module).app).err = fmt.Errorf($.concatString("fx.StartTimeout Option should be passed to top-level App, ", "not to fx.Module"))
	} else {
		$.pointerValue<App>((m$ as __goscript__module._module).app).startTimeout = $.int64(t)
	}
}

export async function startTimeoutOption_String(t: startTimeoutOption): globalThis.Promise<string> {
	return fmt.Sprintf("fx.StartTimeout(%v)", $.namedValueInterfaceValue<any>($.int64(t), "time.Duration", __goscriptStatic8(), __goscriptStatic9(), __goscriptStatic10()))
}

export function StopTimeout(v: time.Duration): Option | null {
	return $.namedValueInterfaceValue<Option | null>($.int64(v), "fx.stopTimeoutOption", __goscriptStatic11(), __goscriptStatic12(), __goscriptStatic7())
}

export function stopTimeoutOption_apply(t: stopTimeoutOption, m: __goscript__module._module | $.VarRef<__goscript__module._module> | null): void {
	const m$: __goscript__module._module = m == null ? $.pointerTarget<__goscript__module._module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<__goscript__module._module>(m)
	if ((m$ as __goscript__module._module).parent != null) {
		$.pointerValue<App>((m$ as __goscript__module._module).app).err = fmt.Errorf($.concatString("fx.StopTimeout Option should be passed to top-level App, ", "not to fx.Module"))
	} else {
		$.pointerValue<App>((m$ as __goscript__module._module).app).stopTimeout = $.int64(t)
	}
}

export async function stopTimeoutOption_String(t: stopTimeoutOption): globalThis.Promise<string> {
	return fmt.Sprintf("fx.StopTimeout(%v)", $.namedValueInterfaceValue<any>($.int64(t), "time.Duration", __goscriptStatic8(), __goscriptStatic9(), __goscriptStatic10()))
}

export function RecoverFromPanics(): Option | null {
	return $.interfaceValue<Option | null>(new recoverFromPanicsOption(undefined, true), "fx.recoverFromPanicsOption", "fx.recoverFromPanicsOption")
}

export async function WithLogger(_constructor: any): globalThis.Promise<Option | null> {
	return $.interfaceValue<Option | null>((await (async () => { const __goscriptLiteralField0 = (await fxreflect.CallerStack(1, 0) as fxreflect.Stack); return new withLoggerOption({_constructor: _constructor, Stack: __goscriptLiteralField0}, true) })()), "fx.withLoggerOption", "fx.withLoggerOption")
}

export function Logger(p: Printer | null): Option | null {
	return $.interfaceValue<Option | null>(new loggerOption({p: p}, true), "fx.loggerOption", "fx.loggerOption")
}

export let NopLogger: Option | null = await WithLogger($.interfaceValue($.functionValue((): fxevent.Logger | null => {
	return $.interfaceValue<fxevent.Logger | null>(($.pointerValue<fxevent.nopLogger>(fxevent.NopLogger)).clone(), "fxevent.nopLogger", "fxevent.nopLogger")
}, ({ kind: $.TypeKind.Function, params: [], results: ["fxevent.Logger"] } as $.FunctionTypeInfo)), "func() fxevent.Logger", ({ kind: $.TypeKind.Function, params: [], results: ["fxevent.Logger"] } as $.FunctionTypeInfo)))

export function __goscript_set_NopLogger(__goscriptValue: Option | null): void {
	NopLogger = __goscriptValue
}

export function ErrorHook(funcs: $.Slice<ErrorHandler | null>): Option | null {
	return $.namedValueInterfaceValue<Option | null>((funcs as errorHookOption), "fx.errorHookOption", __goscriptStatic13(), __goscriptStatic14(), __goscriptStatic7())
}

export function errorHookOption_apply(eho: errorHookOption, m: __goscript__module._module | $.VarRef<__goscript__module._module> | null): void {
	const m$: __goscript__module._module = m == null ? $.pointerTarget<__goscript__module._module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<__goscript__module._module>(m)
	$.pointerValue<App>((m$ as __goscript__module._module).app).errorHooks = $.appendSlice($.pointerValue<App>((m$ as __goscript__module._module).app).errorHooks, eho, $.appendZeros.nil)
}

export async function errorHookOption_String(eho: errorHookOption): globalThis.Promise<string> {
	let items: $.Slice<string> = $.makeSlice<string>($.sliceLen((eho as errorHookOption)), undefined, "string")
	for (let __goscriptRangeTarget2 = eho, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow1 = $.sliceRange(items), i = 0; i < __goscriptRangeWindow2.length; i++) {
		let eh = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as ErrorHandler | null);
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = await fmt.Sprint((eh as any))
	}
	return fmt.Sprintf("fx.ErrorHook(%v)", strings.Join(items, ", "))
}

export async function errorHandlerList_HandleError(ehl: errorHandlerList, err: $.GoError): globalThis.Promise<void> {
	for (let __goscriptRangeTarget3 = ehl, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let eh = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as ErrorHandler | null)
		void (__goscriptAwait = (eh !== null && (eh as any).__isVarRef !== true && (eh as any).__goValue === undefined ? (eh as Exclude<ErrorHandler, null>) : $.pointerValue<Exclude<ErrorHandler, null>>(eh)).HandleError(err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
}

export function validate(validate: boolean): Option | null {
	return $.interfaceValue<Option | null>(new validateOption({validate: validate}), "*fx.validateOption", /* @__PURE__ */ $.pointerType("fx.validateOption"))
}

export async function ValidateApp(opts: $.Slice<Option | null>): globalThis.Promise<$.GoError> {
	opts = $.appendOne(opts, validate(true), $.appendZeros.nil)
	let app: App | $.VarRef<App> | null = await New(opts)

	return (app !== null && (app as any).__isVarRef !== true && (app as any).__goValue === undefined ? ((app as any) as App).Err() : App.prototype.Err.call(app))
}

export async function New(opts: $.Slice<Option | null>): globalThis.Promise<App | $.VarRef<App> | null> {
	let logger = fxlog.DefaultLogger($.interfaceValue<io.Writer | null>(os.Stderr, "*os.File", /* @__PURE__ */ $.pointerType("os.File")))

	let app: App | $.VarRef<App> | null = (() => { const __goscriptLiteralField3 = __goscript_signal.newSignalReceivers(); return new App({clock: fxclock.System, startTimeout: 15000000000n, stopTimeout: 15000000000n, receivers: __goscriptLiteralField3}) })()
	let app$: App = app == null ? $.pointerTarget<App>(app) : (app as any).__isVarRef === true ? (app as any).value : (app as any).__goValue === undefined ? (app as any) : $.pointerTarget<App>(app);
	;(app$ as App).root = new __goscript__module._module({app: app, log: logger, trace: $.arrayToSlice<string>([await $.markAsStructValue($.cloneStructValue($.arrayIndex((await fxreflect.CallerStack(1, 2))!, 0))).String()])});
	;(app$ as App).modules = $.appendOne((app$ as App).modules, (app$ as App).root, $.appendZeros.nil)

	for (let __goscriptRangeTarget4 = opts, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let opt = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as Option | null)
		void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<Option, null>) : $.pointerValue<Exclude<Option, null>>(opt)).apply((app$ as App).root), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	// There are a few levels of wrapping on the lifecycle here. To quickly
	// cover them:
	//
	// - lifecycleWrapper ensures that we don't unintentionally expose the
	//   Start and Stop methods of the internal lifecycle.Lifecycle type
	// - lifecycleWrapper also adapts the internal lifecycle.Hook type into
	//   the public fx.Hook type.
	// - appLogger ensures that the lifecycle always logs events to the
	//   "current" logger associated with the fx.App.
	;(app$ as App).lifecycle = (() => { const __goscriptLiteralField4 = lifecycle2.New($.interfaceValue<fxevent.Logger | null>(new appLogger({app: app}, true), "fx.appLogger", "fx.appLogger"), (app$ as App).clock); return new __goscript_lifecycle.lifecycleWrapper({Lifecycle: __goscriptLiteralField4}) })()

	let containerOptions: $.Slice<dig.Option | null> = $.arrayToSlice<dig.Option | null>([dig.DeferAcyclicVerification(), dig.DryRun((app$ as App).validate)])

	if ((app$ as App).recoverFromPanics) {
		containerOptions = $.appendOne(containerOptions, dig.RecoverFromPanics(), $.appendZeros.nil)
	}

	;(app$ as App).container = dig.New(containerOptions)

	for (let __goscriptRangeTarget5 = (app$ as App).modules, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let m = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as __goscript__module._module | $.VarRef<__goscript__module._module> | null)
		await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as __goscript__module._module).build(app, (app$ as App).container) : __goscript__module._module.prototype.build.call(m, app, (app$ as App).container))
	}

	// Provide Fx types first to increase the chance a custom logger
	// can be successfully built in the face of unrelated DI failure.
	// E.g., for a custom logger that relies on the Lifecycle type.
	let frames: fxreflect.Stack = (await fxreflect.CallerStack(0, 0) as fxreflect.Stack)
	await __goscript__module._module.prototype.provide.call((app$ as App).root, new provide({Target: $.interfaceValue($.functionValue((): __goscript_lifecycle.Lifecycle | null => {
		return $.interfaceValue<__goscript_lifecycle.Lifecycle | null>((app$ as App).lifecycle, "*fx.lifecycleWrapper", /* @__PURE__ */ $.pointerType("fx.lifecycleWrapper"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["fx.Lifecycle"] } as $.FunctionTypeInfo)), "func() fx.Lifecycle", ({ kind: $.TypeKind.Function, params: [], results: ["fx.Lifecycle"] } as $.FunctionTypeInfo)), Stack: (frames as fxreflect.Stack)}, true))
	await __goscript__module._module.prototype.provide.call((app$ as App).root, new provide({Target: $.interfaceValue($.functionValue(((__receiver) => () => __receiver.shutdowner())((app$ as App)), ({ kind: $.TypeKind.Function, params: [], results: ["fx.Shutdowner"] } as $.FunctionTypeInfo), "go.uber.org/fx.(*App).shutdowner-fm"), "func() fx.Shutdowner", ({ kind: $.TypeKind.Function, params: [], results: ["fx.Shutdowner"] } as $.FunctionTypeInfo)), Stack: (frames as fxreflect.Stack)}, true))
	await __goscript__module._module.prototype.provide.call((app$ as App).root, new provide({Target: $.interfaceValue($.functionValue(((__receiver) => () => __receiver.dotGraph())((app$ as App)), ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("string", "fx.DotGraph"), "error"] } as $.FunctionTypeInfo), "go.uber.org/fx.(*App).dotGraph-fm"), "func() (fx.DotGraph, error)", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("string", "fx.DotGraph"), "error"] } as $.FunctionTypeInfo)), Stack: (frames as fxreflect.Stack)}, true))

	for (let __goscriptRangeTarget6 = (app$ as App).modules, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
		let m = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as __goscript__module._module | $.VarRef<__goscript__module._module> | null)
		await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as __goscript__module._module).provideAll() : __goscript__module._module.prototype.provideAll.call(m))
	}

	// Run decorators before executing any Invokes -- including the one
	// inside constructCustomLogger.
	;(app$ as App).err = multierr.Append((app$ as App).err, await __goscript__module._module.prototype.decorateAll.call((app$ as App).root))

	// If you are thinking about returning here after provides: do not (just yet)!
	// If a custom logger was being used, we're still buffering messages.
	// We'll want to flush them to the logger.

	// custom app logger will be initialized by the root module.
	for (let __goscriptRangeTarget7 = (app$ as App).modules, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
		let m = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as __goscript__module._module | $.VarRef<__goscript__module._module> | null)
		await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as __goscript__module._module).constructAllCustomLoggers() : __goscript__module._module.prototype.constructAllCustomLoggers.call(m))
	}

	// This error might have come from the provide loop above. We've
	// already flushed to the custom logger, so we can return.
	if ((app$ as App).err != null) {
		return app
	}

	{
		let err = await __goscript__module._module.prototype.executeInvokes.call((app$ as App).root)
		if (err != null) {
			;(app$ as App).err = err

			if (dig.CanVisualizeError(err)) {
				let b: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
				await dig.Visualize((app$ as App).container, $.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")), $.arrayToSlice<dig.VisualizeOption | null>([dig.VisualizeError(err)]))
				err = $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField5 = b.value.String(); return new errorWithGraph({graph: __goscriptLiteralField5, err: err}, true) })(), "fx.errorWithGraph", "fx.errorWithGraph")
			}
			await errorHandlerList_HandleError(((app$ as App).errorHooks as errorHandlerList), err)
		}
	}

	return app
}

export async function VisualizeError(err: $.GoError): globalThis.Promise<[string, $.GoError]> {
	let erg: $.VarRef<errWithGraph | null> = $.varRef(null! as errWithGraph | null)
	if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(erg, "*fx.errWithGraph", /* @__PURE__ */ $.pointerType("fx.errWithGraph")))) {
		{
			let g = (__goscriptAwait = $.pointerValue<Exclude<errWithGraph, null>>(erg.value).Graph(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (!$.stringEqual(g, "")) {
				return [g, null]
			}
		}
	}
	return ["", errors.New("unable to visualize error")]
}

export let _onStartHook: string = "OnStart"

export function __goscript_set__onStartHook(__goscriptValue: string): void {
	_onStartHook = __goscriptValue
}

export let _onStopHook: string = "OnStop"

export function __goscript_set__onStopHook(__goscriptValue: string): void {
	_onStopHook = __goscriptValue
}

export let errHookCallbackExited: $.GoError = errors.New("goroutine exited without returning")

export function __goscript_set_errHookCallbackExited(__goscriptValue: $.GoError): void {
	errHookCallbackExited = __goscriptValue
}

export async function withTimeout(ctx: context.Context | null, param: withTimeoutParams | $.VarRef<withTimeoutParams> | null): globalThis.Promise<$.GoError> {
	let c: $.Channel<$.GoError> | null = $.makeChannel<$.GoError>(1, null! as $.GoError, "both")
	queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
		await using __defer = new $.AsyncDisposableStack()
		// If runtime.Goexit() is called from within the callback
		// then nothing is written to the chan.
		// However the defer will still be called, so we can write to the chan,
		// to avoid hanging until the timeout is reached.
		let callbackExited = false
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			if (!callbackExited) {
				await $.chanSend(c, errHookCallbackExited)
			}
		})() })

		await $.chanSend(c, await $.pointerValue<withTimeoutParams>(param).callback!(ctx))
		callbackExited = true
	})() })

	let err: $.GoError = null! as $.GoError

	const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, $.GoError>([
		{
			id: 0,
			isSend: false,
			channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
			onSelected: async (__goscriptSelect0Result) => {
				err = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		},
		{
			id: 1,
			isSend: false,
			channel: c,
			onSelected: async (__goscriptSelect0Result) => {
				err = __goscriptSelect0Result.value
				if ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null) {
					err = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		}
	], false)
	if (__goscriptSelect0HasReturn) {
		return __goscriptSelect0Value
	}

	return err
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (errorOption_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), apply: (receiver: any, ...args: any[]) => (errorOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("error", "fx.errorOption"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["mod", /* @__PURE__ */ $.pointerType("fx.module")]])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (optionGroup_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), apply: (receiver: any, ...args: any[]) => (optionGroup_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.sliceType("fx.Option", "fx.optionGroup"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({String: (receiver: any, ...args: any[]) => (startTimeoutOption_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), apply: (receiver: any, ...args: any[]) => (startTimeoutOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= (/* @__PURE__ */ $.basicType("int64", "fx.startTimeoutOption"))
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["m", /* @__PURE__ */ $.pointerType("fx.module")]])])
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ({String: (receiver: any, ...args: any[]) => (stopTimeoutOption_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), apply: (receiver: any, ...args: any[]) => (stopTimeoutOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= (/* @__PURE__ */ $.basicType("int64", "fx.stopTimeoutOption"))
}

var __goscriptStatic13$value: any
function __goscriptStatic13(): any {
	return __goscriptStatic13$value ??= ({String: (receiver: any, ...args: any[]) => (errorHookOption_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), apply: (receiver: any, ...args: any[]) => (errorHookOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic14$value: any
function __goscriptStatic14(): any {
	return __goscriptStatic14$value ??= (/* @__PURE__ */ $.sliceType("fx.ErrorHandler", "fx.errorHookOption"))
}

var __goscriptAwait: any
