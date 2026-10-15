// Generated file based on module.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as dig from "@goscript/go.uber.org/dig/index.js"

import * as fxevent from "@goscript/go.uber.org/fx/fxevent/index.js"

import * as fxreflect from "@goscript/go.uber.org/fx/internal/fxreflect/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"

import type * as context from "@goscript/context/index.js"

import * as fxclock from "@goscript/go.uber.org/fx/internal/fxclock/index.js"

import * as lifecycle from "@goscript/go.uber.org/fx/internal/lifecycle/index.js"

import * as os from "@goscript/os/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_app from "./app.gs.ts"

import * as __goscript_decorate from "./decorate.gs.ts"

import * as __goscript_invoke from "./invoke.gs.ts"

import * as __goscript_lifecycle from "./lifecycle.gs.ts"

import * as __goscript_log from "./log.gs.ts"

import * as __goscript_provide from "./provide.gs.ts"

import * as __goscript_shutdown from "./shutdown.gs.ts"

import * as __goscript_signal from "./signal.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/dig/index.js"
import "@goscript/go.uber.org/fx/fxevent/index.js"
import "@goscript/go.uber.org/fx/internal/fxreflect/index.js"
import "@goscript/go.uber.org/multierr/index.js"
import "@goscript/go.uber.org/fx/internal/fxclock/index.js"
import "@goscript/go.uber.org/fx/internal/lifecycle/index.js"
import "@goscript/os/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./app.gs.ts"
import "./decorate.gs.ts"
import "./invoke.gs.ts"
import "./lifecycle.gs.ts"
import "./log.gs.ts"
import "./provide.gs.ts"
import "./shutdown.gs.ts"
import "./signal.gs.ts"

$.registerTypePackagePath("go.uber.org/fx", ["fx.container", "fx.moduleOption", "fx.module", "fx.scope"])

export type container = {
	Decorate(_p0: any, _p1: $.Slice<dig.DecorateOption | null>): $.GoError | globalThis.Promise<$.GoError>
	Invoke(_p0: any, _p1: $.Slice<dig.InvokeOption | null>): $.GoError | globalThis.Promise<$.GoError>
	Provide(_p0: any, _p1: $.Slice<dig.ProvideOption | null>): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"fx.container",
	null,
	[$.methodSignature("Decorate", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType("dig.DecorateOption")], ["error"]), $.methodSignature("Invoke", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType("dig.InvokeOption")], ["error"]), $.methodSignature("Provide", [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.sliceType("dig.ProvideOption")], ["error"])]
);

export type scope = {
	Decorate(f: any, opts: $.Slice<dig.DecorateOption | null>): $.GoError | globalThis.Promise<$.GoError>
	Invoke(f: any, opts: $.Slice<dig.InvokeOption | null>): $.GoError | globalThis.Promise<$.GoError>
	Provide(f: any, opts: $.Slice<dig.ProvideOption | null>): $.GoError | globalThis.Promise<$.GoError>
	Scope(name: string, opts: $.Slice<dig.ScopeOption | null>): dig.Scope | $.VarRef<dig.Scope> | null | globalThis.Promise<dig.Scope | $.VarRef<dig.Scope> | null>
	String(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"fx.scope",
	null,
	[$.methodSignature("Decorate", [["f", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType("dig.DecorateOption")]], ["error"]), $.methodSignature("Invoke", [["f", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType("dig.InvokeOption")]], ["error"]), $.methodSignature("Provide", [["f", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType("dig.ProvideOption")]], ["error"]), $.methodSignature("Scope", [["name", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.sliceType("dig.ScopeOption")]], [/* @__PURE__ */ $.pointerType("dig.Scope")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class moduleOption {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get location(): fxreflect.Frame {
		return this._fields.location
	}

	public set location(value: fxreflect.Frame) {
		this._fields.location = value
	}

	public get options(): $.Slice<__goscript_app.Option | null> {
		return this._fields.options
	}

	public set options(value: $.Slice<__goscript_app.Option | null>) {
		this._fields.options = value
	}

	public _fields: {
		name: string
		location: fxreflect.Frame
		options: $.Slice<__goscript_app.Option | null>
	}

	constructor(init?: Partial<{name?: string, location?: fxreflect.Frame, options?: $.Slice<__goscript_app.Option | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			location: init?.location ? init.location.clone() : new fxreflect.Frame(undefined, true),
			options: init?.options ?? (null! as $.Slice<__goscript_app.Option | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): moduleOption {
		return new moduleOption(this, true)
	}

	public __goscriptAssign(source: moduleOption): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		$.assignStruct(target.location, values.location)
		target.options = values.options
	}

	public async String(): globalThis.Promise<string> {
		const o = this;
		return fmt.Sprintf("fx.Module(%q, %v)", o.name, $.interfaceValue(o.options, "[]fx.Option", /* @__PURE__ */ $.sliceType("fx.Option")))
	}

	public async apply(mod: _module | $.VarRef<_module> | null): globalThis.Promise<void> {
		const o = this;
		const mod$: _module = mod == null ? $.pointerTarget<_module>(mod) : (mod as any).__isVarRef === true ? (mod as any).value : (mod as any).__goValue === undefined ? (mod as any) : $.pointerTarget<_module>(mod)
		// This get called on any submodules' that are declared
		// as part of another module.

		// 1. Create a new module with the parent being the specified
		// module.
		// 2. Apply child Options on the new module.
		// 3. Append it to the parent module.

		// Create trace as parent's trace with this module's location pre-pended.
		let trace: $.Slice<string> = $.appendSlice($.arrayToSlice<string>([await fmt.Sprintf("%v (%v)", $.interfaceValue((o.location).clone(), "fxreflect.Frame", "fxreflect.Frame"), o.name)]), (mod$ as _module).trace)
		let newModule: _module | $.VarRef<_module> | null = new _module({name: o.name, parent: mod, trace: trace, app: (mod$ as _module).app})
		for (let __goscriptRangeTarget0 = o.options, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_app.Option | null)
			void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<__goscript_app.Option, null>) : $.pointerValue<Exclude<__goscript_app.Option, null>>(opt)).apply(newModule), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		;(mod$ as _module).modules = $.appendOne((mod$ as _module).modules, newModule, $.appendZeros.nil)
	}

	static __typeInfo = $.registerStructType(
		"fx.moduleOption",
		() => new moduleOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["mod", /* @__PURE__ */ $.pointerType("fx.module")]])],
		moduleOption,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("location", "fxreflect.Frame", [1], 16, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("options", /* @__PURE__ */ $.sliceType("fx.Option"), [2], 56, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export class _module {
	public get parent(): _module | $.VarRef<_module> | null {
		return this._fields.parent
	}

	public set parent(value: _module | $.VarRef<_module> | null) {
		this._fields.parent = value
	}

	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get trace(): $.Slice<string> {
		return this._fields.trace
	}

	public set trace(value: $.Slice<string>) {
		this._fields.trace = value
	}

	public get scope(): scope | null {
		return this._fields.scope
	}

	public set scope(value: scope | null) {
		this._fields.scope = value
	}

	public get provides(): $.Slice<__goscript_app.provide> {
		return this._fields.provides
	}

	public set provides(value: $.Slice<__goscript_app.provide>) {
		this._fields.provides = value
	}

	public get invokes(): $.Slice<__goscript_app.invoke> {
		return this._fields.invokes
	}

	public set invokes(value: $.Slice<__goscript_app.invoke>) {
		this._fields.invokes = value
	}

	public get decorators(): $.Slice<__goscript_decorate.decorator> {
		return this._fields.decorators
	}

	public set decorators(value: $.Slice<__goscript_decorate.decorator>) {
		this._fields.decorators = value
	}

	public get modules(): $.Slice<_module | $.VarRef<_module> | null> {
		return this._fields.modules
	}

	public set modules(value: $.Slice<_module | $.VarRef<_module> | null>) {
		this._fields.modules = value
	}

	public get app(): __goscript_app.App | $.VarRef<__goscript_app.App> | null {
		return this._fields.app
	}

	public set app(value: __goscript_app.App | $.VarRef<__goscript_app.App> | null) {
		this._fields.app = value
	}

	public get log(): fxevent.Logger | null {
		return this._fields.log
	}

	public set log(value: fxevent.Logger | null) {
		this._fields.log = value
	}

	public get fallbackLogger(): fxevent.Logger | null {
		return this._fields.fallbackLogger
	}

	public set fallbackLogger(value: fxevent.Logger | null) {
		this._fields.fallbackLogger = value
	}

	public get logConstructor(): __goscript_app.provide | $.VarRef<__goscript_app.provide> | null {
		return this._fields.logConstructor
	}

	public set logConstructor(value: __goscript_app.provide | $.VarRef<__goscript_app.provide> | null) {
		this._fields.logConstructor = value
	}

	public _fields: {
		parent: _module | $.VarRef<_module> | null
		name: string
		trace: $.Slice<string>
		scope: scope | null
		provides: $.Slice<__goscript_app.provide>
		invokes: $.Slice<__goscript_app.invoke>
		decorators: $.Slice<__goscript_decorate.decorator>
		modules: $.Slice<_module | $.VarRef<_module> | null>
		app: __goscript_app.App | $.VarRef<__goscript_app.App> | null
		log: fxevent.Logger | null
		fallbackLogger: fxevent.Logger | null
		logConstructor: __goscript_app.provide | $.VarRef<__goscript_app.provide> | null
	}

	constructor(init?: Partial<{parent?: _module | $.VarRef<_module> | null, name?: string, trace?: $.Slice<string>, scope?: scope | null, provides?: $.Slice<__goscript_app.provide>, invokes?: $.Slice<__goscript_app.invoke>, decorators?: $.Slice<__goscript_decorate.decorator>, modules?: $.Slice<_module | $.VarRef<_module> | null>, app?: __goscript_app.App | $.VarRef<__goscript_app.App> | null, log?: fxevent.Logger | null, fallbackLogger?: fxevent.Logger | null, logConstructor?: __goscript_app.provide | $.VarRef<__goscript_app.provide> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			parent: init?.parent ?? (null! as _module | $.VarRef<_module> | null),
			name: init?.name ?? ("" as string),
			trace: init?.trace ?? (null! as $.Slice<string>),
			scope: init?.scope ?? (null! as scope | null),
			provides: init?.provides ?? (null! as $.Slice<__goscript_app.provide>),
			invokes: init?.invokes ?? (null! as $.Slice<__goscript_app.invoke>),
			decorators: init?.decorators ?? (null! as $.Slice<__goscript_decorate.decorator>),
			modules: init?.modules ?? (null! as $.Slice<_module | $.VarRef<_module> | null>),
			app: init?.app ?? (null! as __goscript_app.App | $.VarRef<__goscript_app.App> | null),
			log: init?.log ?? (null! as fxevent.Logger | null),
			fallbackLogger: init?.fallbackLogger ?? (null! as fxevent.Logger | null),
			logConstructor: init?.logConstructor ?? (null! as __goscript_app.provide | $.VarRef<__goscript_app.provide> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): _module {
		return new _module(this, true)
	}

	public __goscriptAssign(source: _module): void {
		const target = this._fields
		const values = source._fields
		target.parent = values.parent
		target.name = values.name
		target.trace = values.trace
		target.scope = $.assignFieldValue(target.scope, values.scope, "fx.scope")
		target.provides = values.provides
		target.invokes = values.invokes
		target.decorators = values.decorators
		target.modules = values.modules
		target.app = values.app
		target.log = $.assignFieldValue(target.log, values.log, "fxevent.Logger")
		target.fallbackLogger = $.assignFieldValue(target.fallbackLogger, values.fallbackLogger, "fxevent.Logger")
		target.logConstructor = values.logConstructor
	}

	public async build(app: __goscript_app.App | $.VarRef<__goscript_app.App> | null, root: dig.Container | $.VarRef<dig.Container> | null): globalThis.Promise<void> {
		let m: _module | $.VarRef<_module> | null = this;
		const m$: _module = m == null ? $.pointerTarget<_module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<_module>(m)
		if ((m$ as _module).parent == null) {
			;(m$ as _module).scope = $.interfaceValue<scope | null>(root, "*dig.Container", /* @__PURE__ */ $.pointerType("dig.Container"))
		} else {
			let parentScope = $.pointerValue<_module>((m$ as _module).parent).scope;
			;(m$ as _module).scope = $.interfaceValue<scope | null>(((__goscriptAwait = (parentScope !== null && (parentScope as any).__isVarRef !== true && (parentScope as any).__goValue === undefined ? (parentScope as Exclude<scope, null>) : $.pointerValue<Exclude<scope, null>>(parentScope)).Scope((m$ as _module).name, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as dig.Scope | $.VarRef<dig.Scope> | null), "*dig.Scope", /* @__PURE__ */ $.pointerType("dig.Scope"));
			// use parent module's logger by default
			;(m$ as _module).log = $.pointerValue<_module>((m$ as _module).parent).log
		}

		if ((m$ as _module).logConstructor != null) {
			// Since user supplied a custom logger, use a buffered logger
			// to hold all messages until user supplied logger is
			// instantiated. Then we flush those messages after fully
			// constructing the custom logger.
			let __goscriptAssign0_0: fxevent.Logger | null = (m$ as _module).log
			let __goscriptAssign0_1: fxevent.Logger | null = $.interfaceValue<fxevent.Logger | null>(new __goscript_log.logBuffer(), "*fx.logBuffer", /* @__PURE__ */ $.pointerType("fx.logBuffer"));
			;(m$ as _module).fallbackLogger = __goscriptAssign0_0;
			;(m$ as _module).log = __goscriptAssign0_1
		}

		for (let __goscriptRangeTarget1 = (m$ as _module).modules, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let mod = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as _module | $.VarRef<_module> | null)
			await (mod !== null && (mod as any).__isVarRef !== true && (mod as any).__goValue === undefined ? ((mod as any) as _module).build(app, root) : _module.prototype.build.call(mod, app, root))
		}
	}

	public async constructAllCustomLoggers(): globalThis.Promise<void> {
		let m: _module | $.VarRef<_module> | null = this;
		const m$: _module = m == null ? $.pointerTarget<_module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<_module>(m)
		if ((m$ as _module).logConstructor != null) {
			{
				let __goscriptTuple0: any = $.typeAssertTuple<__goscript_log.logBuffer | $.VarRef<__goscript_log.logBuffer> | null>((m$ as _module).log, /* @__PURE__ */ $.pointerType("fx.logBuffer"))
				let buffer: __goscript_log.logBuffer | $.VarRef<__goscript_log.logBuffer> | null = __goscriptTuple0[0]
				let ok = __goscriptTuple0[1]
				if (ok) {
					// default to parent's logger if custom logger constructor fails
					{
						let err = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as _module).constructCustomLogger(buffer) : _module.prototype.constructCustomLogger.call(m, buffer))
						if (err != null) {
							$.pointerValue<__goscript_app.App>((m$ as _module).app).err = multierr.Append($.pointerValue<__goscript_app.App>((m$ as _module).app).err, err);
							;(m$ as _module).log = (m$ as _module).fallbackLogger
							await (buffer !== null && (buffer as any).__isVarRef !== true && (buffer as any).__goValue === undefined ? ((buffer as any) as __goscript_log.logBuffer).Connect((m$ as _module).log) : __goscript_log.logBuffer.prototype.Connect.call(buffer, (m$ as _module).log))
						}
					}
				}
			}
			;(m$ as _module).fallbackLogger = null
		} else {
			if ((m$ as _module).parent != null) {
				;(m$ as _module).log = $.pointerValue<_module>((m$ as _module).parent).log
			}
		}

		for (let __goscriptRangeTarget2 = (m$ as _module).modules, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let mod = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as _module | $.VarRef<_module> | null)
			await (mod !== null && (mod as any).__isVarRef !== true && (mod as any).__goValue === undefined ? ((mod as any) as _module).constructAllCustomLoggers() : _module.prototype.constructAllCustomLoggers.call(mod))
		}
	}

	public async constructCustomLogger(buffer: __goscript_log.logBuffer | $.VarRef<__goscript_log.logBuffer> | null): globalThis.Promise<$.GoError> {
		const m: _module | $.VarRef<_module> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const m$: _module = m == null ? $.pointerTarget<_module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<_module>(m)
		let p: __goscript_app.provide | $.VarRef<__goscript_app.provide> | null = (m$ as _module).logConstructor
		let p$: __goscript_app.provide = p == null ? $.pointerTarget<__goscript_app.provide>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<__goscript_app.provide>(p)
		let fname = await fxreflect.FuncName((p$ as __goscript_app.provide).Target)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((m$ as _module).log).LogEvent($.interfaceValue<fxevent.Event | null>(new fxevent.LoggerInitialized({Err: err, ConstructorName: fname}), "*fxevent.LoggerInitialized", /* @__PURE__ */ $.pointerType("fxevent.LoggerInitialized"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		})() })

		// TODO: Use dig.FillProvideInfo to inspect the provided constructor
		// and fail the application if its signature didn't match.
		{
			let __goscriptShadow0 = (__goscriptAwait = $.pointerValue<Exclude<scope, null>>((m$ as _module).scope).Provide((p$ as __goscript_app.provide).Target, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow0 != null) {
				const __goscriptReturn0: $.GoError = fmt.Errorf("fx.WithLogger(%v) from:\n%+v\nin Module: %q\nFailed: %w", fname, $.namedValueInterfaceValue<any>((p$ as __goscript_app.provide).Stack, "fxreflect.Stack", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (m$ as _module).name, (__goscriptShadow0 as any))
				err = __goscriptReturn0
				await __defer.dispose()
				return err
			}
		}

		const __goscriptReturn1: $.GoError = (__goscriptAwait = $.pointerValue<Exclude<scope, null>>((m$ as _module).scope).Invoke($.interfaceValue($.functionValue(async (log: fxevent.Logger | null): globalThis.Promise<void> => {
			;(m$ as _module).log = log
			await (buffer !== null && (buffer as any).__isVarRef !== true && (buffer as any).__goValue === undefined ? ((buffer as any) as __goscript_log.logBuffer).Connect(log) : __goscript_log.logBuffer.prototype.Connect.call(buffer, log))
		}, ({ kind: $.TypeKind.Function, params: ["fxevent.Logger"], results: [] } as $.FunctionTypeInfo)), "func(log fxevent.Logger)", ({ kind: $.TypeKind.Function, params: ["fxevent.Logger"], results: [] } as $.FunctionTypeInfo)), null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		err = __goscriptReturn1
		await __defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async decorate(d: __goscript_decorate.decorator): globalThis.Promise<$.GoError> {
		const m: _module | $.VarRef<_module> | null = this;
		let err: $.GoError = null! as $.GoError
		const m$: _module = m == null ? $.pointerTarget<_module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<_module>(m)
		if (d.IsReplace) {
			return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as _module).replace(d) : _module.prototype.replace.call(m, d))
		}

		let funcName = await fxreflect.FuncName(d.Target)
		let info: $.VarRef<dig.DecorateInfo> = $.varRef(new dig.DecorateInfo(undefined, true))
		let opts: $.Slice<dig.DecorateOption | null> = $.arrayToSlice<dig.DecorateOption | null>([dig.FillDecorateInfo(info), await dig.WithDecoratorCallback($.functionValue(async (ci: dig.CallbackInfo): globalThis.Promise<void> => {
			void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((m$ as _module).log).LogEvent($.interfaceValue<fxevent.Event | null>(new fxevent.Run({Name: funcName, Kind: "decorate", ModuleName: (m$ as _module).name, Err: ci.Error}), "*fxevent.Run", /* @__PURE__ */ $.pointerType("fxevent.Run"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: ["dig.CallbackInfo"], results: [] } as $.FunctionTypeInfo)))])

		err = await __goscript_decorate.runDecorator(((m$ as _module).scope as container | null), (d).clone(), opts)
		let outputNames: $.Slice<string> = $.makeSlice<string>($.sliceLen(info.value.Outputs), undefined, "string")
		for (let __goscriptRangeTarget3 = info.value.Outputs, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __goscriptSliceWindow0 = $.sliceRange(outputNames), i = 0; i < __goscriptRangeWindow3.length; i++) {
			let o = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as dig.Output | $.VarRef<dig.Output> | null);
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = await (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as dig.Output).String() : dig.Output.prototype.String.call(o))
		}

		void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((m$ as _module).log).LogEvent($.interfaceValue<fxevent.Event | null>((await (async () => { const __goscriptLiteralField1 = await fxreflect.Stack_Strings(d.Stack); return new fxevent.Decorated({DecoratorName: funcName, StackTrace: __goscriptLiteralField1, ModuleTrace: $.appendSlice($.arrayToSlice<string>([await $.markAsStructValue($.cloneStructValue($.arrayIndex(d.Stack!, 0))).String()]), (m$ as _module).trace), ModuleName: (m$ as _module).name, OutputTypeNames: outputNames, Err: err}) })()), "*fxevent.Decorated", /* @__PURE__ */ $.pointerType("fxevent.Decorated"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		return err
	}

	public async decorateAll(): globalThis.Promise<$.GoError> {
		const m: _module | $.VarRef<_module> | null = this;
		const m$: _module = m == null ? $.pointerTarget<_module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<_module>(m)
		for (let __goscriptRangeTarget4 = (m$ as _module).decorators, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let d = ((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as __goscript_decorate.decorator)).clone()
			{
				let err = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as _module).decorate((d).clone()) : _module.prototype.decorate.call(m, (d).clone()))
				if (err != null) {
					return err
				}
			}
		}

		for (let __goscriptRangeTarget5 = (m$ as _module).modules, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let __goscriptRangeShadow0 = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as _module | $.VarRef<_module> | null)
			{
				let err = await (__goscriptRangeShadow0 !== null && (__goscriptRangeShadow0 as any).__isVarRef !== true && (__goscriptRangeShadow0 as any).__goValue === undefined ? ((__goscriptRangeShadow0 as any) as _module).decorateAll() : _module.prototype.decorateAll.call(__goscriptRangeShadow0))
				if (err != null) {
					return err
				}
			}
		}
		return null
	}

	public async executeInvoke(i: __goscript_app.invoke): globalThis.Promise<$.GoError> {
		const m: _module | $.VarRef<_module> | null = this;
		let err: $.GoError = null! as $.GoError
		const m$: _module = m == null ? $.pointerTarget<_module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<_module>(m)
		let fnName = await fxreflect.FuncName(i.Target)
		void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((m$ as _module).log).LogEvent($.interfaceValue<fxevent.Event | null>(new fxevent.Invoking({FunctionName: fnName, ModuleName: (m$ as _module).name}), "*fxevent.Invoking", /* @__PURE__ */ $.pointerType("fxevent.Invoking"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		err = await __goscript_invoke.runInvoke(((m$ as _module).scope as container | null), i)
		void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((m$ as _module).log).LogEvent($.interfaceValue<fxevent.Event | null>((await (async () => { const __goscriptLiteralField2 = await fmt.Sprintf("%+v", $.namedValueInterfaceValue<any>(i.Stack, "fxreflect.Stack", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())); return new fxevent.Invoked({FunctionName: fnName, ModuleName: (m$ as _module).name, Err: err, Trace: __goscriptLiteralField2}) })()), "*fxevent.Invoked", /* @__PURE__ */ $.pointerType("fxevent.Invoked"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async executeInvokes(): globalThis.Promise<$.GoError> {
		const m: _module | $.VarRef<_module> | null = this;
		const m$: _module = m == null ? $.pointerTarget<_module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<_module>(m)
		for (let __goscriptRangeTarget6 = (m$ as _module).modules, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let __goscriptRangeShadow1 = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as _module | $.VarRef<_module> | null)
			{
				let err = await (__goscriptRangeShadow1 !== null && (__goscriptRangeShadow1 as any).__isVarRef !== true && (__goscriptRangeShadow1 as any).__goValue === undefined ? ((__goscriptRangeShadow1 as any) as _module).executeInvokes() : _module.prototype.executeInvokes.call(__goscriptRangeShadow1))
				if (err != null) {
					return err
				}
			}
		}

		for (let __goscriptRangeTarget7 = (m$ as _module).invokes, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let invoke = ((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as __goscript_app.invoke)).clone()
			{
				let err = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as _module).executeInvoke((invoke).clone()) : _module.prototype.executeInvoke.call(m, (invoke).clone()))
				if (err != null) {
					return err
				}
			}
		}

		return null
	}

	public async provide(p: __goscript_app.provide): globalThis.Promise<void> {
		let m: _module | $.VarRef<_module> | null = this;
		const m$: _module = m == null ? $.pointerTarget<_module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<_module>(m)
		if ($.pointerValue<__goscript_app.App>((m$ as _module).app).err != null) {
			return
		}

		if (p.IsSupply) {
			await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as _module).supply(p) : _module.prototype.supply.call(m, p))
			return
		}

		let funcName = await fxreflect.FuncName(p.Target)
		let info: $.VarRef<dig.ProvideInfo> = $.varRef(new dig.ProvideInfo(undefined, true))
		let opts: $.Slice<dig.ProvideOption | null> = $.arrayToSlice<dig.ProvideOption | null>([dig.FillProvideInfo(info), dig.Export(!p.Private), await dig.WithProviderCallback($.functionValue(async (ci: dig.CallbackInfo): globalThis.Promise<void> => {
			void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((m$ as _module).log).LogEvent($.interfaceValue<fxevent.Event | null>(new fxevent.Run({Name: funcName, Kind: "provide", ModuleName: (m$ as _module).name, Err: ci.Error}), "*fxevent.Run", /* @__PURE__ */ $.pointerType("fxevent.Run"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: ["dig.CallbackInfo"], results: [] } as $.FunctionTypeInfo)))])

		{
			let err = await __goscript_provide.runProvide(((m$ as _module).scope as container | null), (p).clone(), opts)
			if (err != null) {
				$.pointerValue<__goscript_app.App>((m$ as _module).app).err = err
			}
		}
		let outputNames: $.Slice<string> = $.makeSlice<string>($.sliceLen(info.value.Outputs), undefined, "string")
		for (let __goscriptRangeTarget8 = info.value.Outputs, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __goscriptSliceWindow1 = $.sliceRange(outputNames), i = 0; i < __goscriptRangeWindow8.length; i++) {
			let o = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + i] as dig.Output | $.VarRef<dig.Output> | null);
			;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = await (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as dig.Output).String() : dig.Output.prototype.String.call(o))
		}

		void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((m$ as _module).log).LogEvent($.interfaceValue<fxevent.Event | null>((await (async () => { const __goscriptLiteralField3 = await fxreflect.Stack_Strings(p.Stack); return new fxevent.Provided({ConstructorName: funcName, StackTrace: __goscriptLiteralField3, ModuleTrace: $.appendSlice($.arrayToSlice<string>([await $.markAsStructValue($.cloneStructValue($.arrayIndex(p.Stack!, 0))).String()]), (m$ as _module).trace), ModuleName: (m$ as _module).name, OutputTypeNames: outputNames, Err: $.pointerValue<__goscript_app.App>((m$ as _module).app).err, Private: p.Private}) })()), "*fxevent.Provided", /* @__PURE__ */ $.pointerType("fxevent.Provided"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async provideAll(): globalThis.Promise<void> {
		const m: _module | $.VarRef<_module> | null = this;
		const m$: _module = m == null ? $.pointerTarget<_module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<_module>(m)
		for (let __goscriptRangeTarget9 = (m$ as _module).provides, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
			let p = ((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as __goscript_app.provide)).clone()
			await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as _module).provide((p).clone()) : _module.prototype.provide.call(m, (p).clone()))
		}

		for (let __goscriptRangeTarget10 = (m$ as _module).modules, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
			let __goscriptRangeShadow2 = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as _module | $.VarRef<_module> | null)
			await (__goscriptRangeShadow2 !== null && (__goscriptRangeShadow2 as any).__isVarRef !== true && (__goscriptRangeShadow2 as any).__goValue === undefined ? ((__goscriptRangeShadow2 as any) as _module).provideAll() : _module.prototype.provideAll.call(__goscriptRangeShadow2))
		}
	}

	public async replace(d: __goscript_decorate.decorator): globalThis.Promise<$.GoError> {
		const m: _module | $.VarRef<_module> | null = this;
		const m$: _module = m == null ? $.pointerTarget<_module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<_module>(m)
		let typeName = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(d.ReplaceType).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let opts: $.Slice<dig.DecorateOption | null> = $.arrayToSlice<dig.DecorateOption | null>([await dig.WithDecoratorCallback($.functionValue(async (ci: dig.CallbackInfo): globalThis.Promise<void> => {
			void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((m$ as _module).log).LogEvent($.interfaceValue<fxevent.Event | null>((await (async () => { const __goscriptLiteralField4 = await fmt.Sprintf("stub(%v)", typeName); return new fxevent.Run({Name: __goscriptLiteralField4, Kind: "replace", ModuleName: (m$ as _module).name, Err: ci.Error}) })()), "*fxevent.Run", /* @__PURE__ */ $.pointerType("fxevent.Run"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: ["dig.CallbackInfo"], results: [] } as $.FunctionTypeInfo)))])

		let err = await __goscript_decorate.runDecorator(((m$ as _module).scope as container | null), (d).clone(), opts)
		void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((m$ as _module).log).LogEvent($.interfaceValue<fxevent.Event | null>((await (async () => { const __goscriptLiteralField5 = await fxreflect.Stack_Strings(d.Stack); return new fxevent.Replaced({ModuleName: (m$ as _module).name, StackTrace: __goscriptLiteralField5, ModuleTrace: $.appendSlice($.arrayToSlice<string>([await $.markAsStructValue($.cloneStructValue($.arrayIndex(d.Stack!, 0))).String()]), (m$ as _module).trace), OutputTypeNames: $.arrayToSlice<string>([typeName]), Err: err}) })()), "*fxevent.Replaced", /* @__PURE__ */ $.pointerType("fxevent.Replaced"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async supply(p: __goscript_app.provide): globalThis.Promise<void> {
		let m: _module | $.VarRef<_module> | null = this;
		const m$: _module = m == null ? $.pointerTarget<_module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<_module>(m)
		let typeName = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(p.SupplyType).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let opts: $.Slice<dig.ProvideOption | null> = $.arrayToSlice<dig.ProvideOption | null>([dig.Export(!p.Private), await dig.WithProviderCallback($.functionValue(async (ci: dig.CallbackInfo): globalThis.Promise<void> => {
			void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((m$ as _module).log).LogEvent($.interfaceValue<fxevent.Event | null>((await (async () => { const __goscriptLiteralField6 = await fmt.Sprintf("stub(%v)", typeName); return new fxevent.Run({Name: __goscriptLiteralField6, Kind: "supply", ModuleName: (m$ as _module).name}) })()), "*fxevent.Run", /* @__PURE__ */ $.pointerType("fxevent.Run"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: ["dig.CallbackInfo"], results: [] } as $.FunctionTypeInfo)))])

		{
			let err = await __goscript_provide.runProvide(((m$ as _module).scope as container | null), (p).clone(), opts)
			if (err != null) {
				$.pointerValue<__goscript_app.App>((m$ as _module).app).err = err
			}
		}

		void (__goscriptAwait = $.pointerValue<Exclude<fxevent.Logger, null>>((m$ as _module).log).LogEvent($.interfaceValue<fxevent.Event | null>((await (async () => { const __goscriptLiteralField7 = await fxreflect.Stack_Strings(p.Stack); return new fxevent.Supplied({TypeName: typeName, StackTrace: __goscriptLiteralField7, ModuleTrace: $.appendSlice($.arrayToSlice<string>([await $.markAsStructValue($.cloneStructValue($.arrayIndex(p.Stack!, 0))).String()]), (m$ as _module).trace), ModuleName: (m$ as _module).name, Err: $.pointerValue<__goscript_app.App>((m$ as _module).app).err}) })()), "*fxevent.Supplied", /* @__PURE__ */ $.pointerType("fxevent.Supplied"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"fx.module",
		() => new _module(),
		() => [$.methodSignature("build", [["app", /* @__PURE__ */ $.pointerType("fx.App")], ["root", /* @__PURE__ */ $.pointerType("dig.Container")]], [], true), $.methodSignature("constructAllCustomLoggers", [], [], true), $.methodSignature("constructCustomLogger", [["buffer", /* @__PURE__ */ $.pointerType("fx.logBuffer")]], [["err", "error"]], true), $.methodSignature("decorate", [["d", "fx.decorator"]], [["err", "error"]], true), $.methodSignature("decorateAll", [], ["error"], true), $.methodSignature("executeInvoke", [["i", "fx.invoke"]], [["err", "error"]], true), $.methodSignature("executeInvokes", [], ["error"], true), $.methodSignature("provide", [["p", "fx.provide"]], [], true), $.methodSignature("provideAll", [], [], true), $.methodSignature("replace", [["d", "fx.decorator"]], ["error"], true), $.methodSignature("supply", [["p", "fx.provide"]], [], true)],
		_module,
		() => [/* @__PURE__ */ $.structField("parent", /* @__PURE__ */ $.pointerType("fx.module"), [0], 0, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("trace", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 24, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("scope", "fx.scope", [3], 48, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("provides", /* @__PURE__ */ $.sliceType("fx.provide"), [4], 64, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("invokes", /* @__PURE__ */ $.sliceType("fx.invoke"), [5], 88, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("decorators", /* @__PURE__ */ $.sliceType("fx.decorator"), [6], 112, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("modules", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("fx.module")), [7], 136, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("app", /* @__PURE__ */ $.pointerType("fx.App"), [8], 160, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("log", "fxevent.Logger", [9], 168, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("fallbackLogger", "fxevent.Logger", [10], 184, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("logConstructor", /* @__PURE__ */ $.pointerType("fx.provide"), [11], 200, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export async function Module(name: string, opts: $.Slice<__goscript_app.Option | null>): globalThis.Promise<__goscript_app.Option | null> {
	let mo = (await (async () => { const __goscriptLiteralField0 = $.arrayIndex((await fxreflect.CallerStack(1, 2))!, 0); return new moduleOption({name: name, location: __goscriptLiteralField0, options: opts}, true) })())
	return $.interfaceValue<__goscript_app.Option | null>((mo).clone(), "fx.moduleOption", "fx.moduleOption")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({CallerName: (receiver: any, ...args: any[]) => (fxreflect.Stack_CallerName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Format: (receiver: any, ...args: any[]) => (fxreflect.Stack_Format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (fxreflect.Stack_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Strings: (receiver: any, ...args: any[]) => (fxreflect.Stack_Strings as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("fxreflect.Frame", "fxreflect.Stack"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("CallerName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Strings", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))])])
}

var __goscriptAwait: any
