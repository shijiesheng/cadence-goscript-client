// Generated file based on lifecycle.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as lifecycle from "@goscript/go.uber.org/fx/internal/lifecycle/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/fx/internal/lifecycle/index.js"

$.registerTypePackagePath("go.uber.org/fx", ["fx.HookFunc", "fx.Lifecycle", "fx.Hook", "fx.lifecycleWrapper"])

export type HookFunc = any

$.registerInterfaceType(
	"fx.HookFunc",
	null,
	[]
);

export type Lifecycle = {
	Append(_p0: Hook): void
}

$.registerInterfaceType(
	"fx.Lifecycle",
	null,
	[$.methodSignature("Append", ["fx.Hook"])]
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

	public get onStartName(): string {
		return this._fields.onStartName
	}

	public set onStartName(value: string) {
		this._fields.onStartName = value
	}

	public get onStopName(): string {
		return this._fields.onStopName
	}

	public set onStopName(value: string) {
		this._fields.onStopName = value
	}

	public _fields: {
		OnStart: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		OnStop: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		onStartName: string
		onStopName: string
	}

	constructor(init?: Partial<{OnStart?: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null, OnStop?: ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null, onStartName?: string, onStopName?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			OnStart: init?.OnStart ?? (null! as ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			OnStop: init?.OnStop ?? (null! as ((_p0: context.Context | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			onStartName: init?.onStartName ?? ("" as string),
			onStopName: init?.onStopName ?? ("" as string)
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
		target.onStartName = values.onStartName
		target.onStopName = values.onStopName
	}

	static __typeInfo = $.registerStructType(
		"fx.Hook",
		() => new Hook(),
		() => [],
		Hook,
		() => [/* @__PURE__ */ $.structField("OnStart", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("OnStop", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: ["error"] } as $.FunctionTypeInfo), [1], 8, true), /* @__PURE__ */ $.structField("onStartName", /* @__PURE__ */ $.basicType("string"), [2], 16, false, { pkgPath: "go.uber.org/fx" }), /* @__PURE__ */ $.structField("onStopName", /* @__PURE__ */ $.basicType("string"), [3], 32, false, { pkgPath: "go.uber.org/fx" })]
	)
}

export class lifecycleWrapper {
	public get Lifecycle(): lifecycle.Lifecycle | $.VarRef<lifecycle.Lifecycle> | null {
		return this._fields.Lifecycle
	}

	public set Lifecycle(value: lifecycle.Lifecycle | $.VarRef<lifecycle.Lifecycle> | null) {
		this._fields.Lifecycle = value
	}

	public _fields: {
		Lifecycle: lifecycle.Lifecycle | $.VarRef<lifecycle.Lifecycle> | null
	}

	constructor(init?: Partial<{Lifecycle?: lifecycle.Lifecycle | $.VarRef<lifecycle.Lifecycle> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Lifecycle: init?.Lifecycle ?? (null! as lifecycle.Lifecycle | $.VarRef<lifecycle.Lifecycle> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): lifecycleWrapper {
		return new lifecycleWrapper(this, true)
	}

	public __goscriptAssign(source: lifecycleWrapper): void {
		const target = this._fields
		const values = source._fields
		target.Lifecycle = values.Lifecycle
	}

	public async Append(h: Hook): globalThis.Promise<void> {
		const l: lifecycleWrapper | $.VarRef<lifecycleWrapper> | null = this;
		await lifecycle.Lifecycle.prototype.Append.call($.pointerValue<lifecycleWrapper>(l).Lifecycle, new lifecycle.Hook({OnStart: h.OnStart, OnStop: h.OnStop, OnStartName: h.onStartName, OnStopName: h.onStopName}, true))
	}

	public async RunningHookCaller(): globalThis.Promise<any> {
		return await $.pointerValue<lifecycle.Lifecycle>(this.Lifecycle).RunningHookCaller()
	}

	public async Start(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<lifecycle.Lifecycle>(this.Lifecycle).Start(ctx)
	}

	public async Stop(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<lifecycle.Lifecycle>(this.Lifecycle).Stop(ctx)
	}

	static __typeInfo = $.registerStructType(
		"fx.lifecycleWrapper",
		() => new lifecycleWrapper(),
		() => [$.methodSignature("Append", [["h", "fx.Hook"]], [], true), $.methodSignature("RunningHookCaller", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Start", [["ctx", "context.Context"]], ["error"]), $.methodSignature("Stop", [["ctx", "context.Context"]], ["error"])],
		lifecycleWrapper,
		() => [/* @__PURE__ */ $.structField("Lifecycle", /* @__PURE__ */ $.pointerType("lifecycle.Lifecycle"), [0], 0, true, { anonymous: true })]
	)
}

export async function StartHook(__typeArgs: $.GenericTypeArgs | undefined, start: any): globalThis.Promise<Hook> {
	let [onstart, startname] = await lifecycle.Wrap({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: __typeArgs?.["T"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }}, start)

	return new Hook({OnStart: onstart, onStartName: startname}, true)
}

export async function StopHook(__typeArgs: $.GenericTypeArgs | undefined, stop: any): globalThis.Promise<Hook> {
	let [onstop, stopname] = await lifecycle.Wrap({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: __typeArgs?.["T"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }}, stop)

	return new Hook({OnStop: onstop, onStopName: stopname}, true)
}

export async function StartStopHook(__typeArgs: $.GenericTypeArgs | undefined, start: any, stop: any): globalThis.Promise<Hook> {
	const __goscriptTuple0 = await lifecycle.Wrap({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: __typeArgs?.["T1"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }}, start)
	let onstart: lifecycle.ContextErrorFunc = __goscriptTuple0[0]
	let startname: string = __goscriptTuple0[1]
	const __goscriptTuple1 = await lifecycle.Wrap({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: __typeArgs?.["T2"] ?? { type: { kind: $.TypeKind.Interface, methods: [] }, zero: () => null }}, stop)
	let onstop: lifecycle.ContextErrorFunc = __goscriptTuple1[0]
	let stopname: string = __goscriptTuple1[1]

	return new Hook({OnStart: onstart, OnStop: onstop, onStartName: startname, onStopName: stopname}, true)
}
