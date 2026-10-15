// Generated file based on decorate.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as digreflect from "@goscript/go.uber.org/dig/internal/digreflect/index.js"

import * as dot from "@goscript/go.uber.org/dig/internal/dot/index.js"

import type * as io from "@goscript/io/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as __goscript__constructor from "./constructor.gs.ts"

import * as __goscript_callback from "./callback.gs.ts"

import * as __goscript_container from "./container.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_graph from "./graph.gs.ts"

import * as __goscript_invoke from "./invoke.gs.ts"

import * as __goscript_param from "./param.gs.ts"

import * as __goscript_provide from "./provide.gs.ts"

import * as __goscript_result from "./result.gs.ts"

import * as __goscript_scope from "./scope.gs.ts"

import * as __goscript_visualize from "./visualize.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/go.uber.org/dig/internal/digreflect/index.js"
import "@goscript/go.uber.org/dig/internal/dot/index.js"
import "@goscript/math/rand/index.js"
import "./constructor.gs.ts"
import "./callback.gs.ts"
import "./container.gs.ts"
import "./error.gs.ts"
import "./graph.gs.ts"
import "./invoke.gs.ts"
import "./param.gs.ts"
import "./provide.gs.ts"
import "./result.gs.ts"
import "./scope.gs.ts"
import "./visualize.gs.ts"

$.registerTypePackagePath("go.uber.org/dig", ["dig.decoratorState", "dig.decorator", "dig.decoratorNode", "dig.DecorateOption", "dig.decorateOptions", "dig.fillDecorateInfoOption", "dig.DecorateInfo"])

export type decoratorState = number

export type decorator = {
	Call(c: __goscript_container.containerStore | null): $.GoError | globalThis.Promise<$.GoError>
	ID(): dot.CtorID
	State(): decoratorState
}

$.registerInterfaceType(
	"dig.decorator",
	null,
	[$.methodSignature("Call", [["c", "dig.containerStore"]], ["error"]), $.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uintptr", "dot.CtorID")]), $.methodSignature("State", [], [/* @__PURE__ */ $.basicType("int", "dig.decoratorState")])]
);

export type DecorateOption = {
	apply(_p0: decorateOptions | $.VarRef<decorateOptions> | null): void
}

$.registerInterfaceType(
	"dig.DecorateOption",
	null,
	[$.methodSignature("apply", [/* @__PURE__ */ $.pointerType("dig.decorateOptions")])]
);

export class decoratorNode {
	public get dcor(): any {
		return this._fields.dcor
	}

	public set dcor(value: any) {
		this._fields.dcor = value
	}

	public get dtype(): reflect.Type | null {
		return this._fields.dtype
	}

	public set dtype(value: reflect.Type | null) {
		this._fields.dtype = value
	}

	public get id(): dot.CtorID {
		return this._fields.id
	}

	public set id(value: dot.CtorID) {
		this._fields.id = value
	}

	// Location where this function was defined.
	public get location(): digreflect.Func | $.VarRef<digreflect.Func> | null {
		return this._fields.location
	}

	public set location(value: digreflect.Func | $.VarRef<digreflect.Func> | null) {
		this._fields.location = value
	}

	// Current state of this decorator
	public get state(): decoratorState {
		return this._fields.state
	}

	public set state(value: decoratorState) {
		this._fields.state = value
	}

	// Parameters of the decorator.
	public get params(): __goscript_param.paramList {
		return this._fields.params
	}

	public set params(value: __goscript_param.paramList) {
		this._fields.params = value
	}

	// Results of the decorator.
	public get results(): __goscript_result.resultList {
		return this._fields.results
	}

	public set results(value: __goscript_result.resultList) {
		this._fields.results = value
	}

	// Order of this node in each Scopes' graphHolders.
	public get orders(): globalThis.Map<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number> | null {
		return this._fields.orders
	}

	public set orders(value: globalThis.Map<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number> | null) {
		this._fields.orders = value
	}

	// Scope this node was originally provided to.
	public get s(): __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null {
		return this._fields.s
	}

	public set s(value: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null) {
		this._fields.s = value
	}

	// Callback for this decorator, if there is one.
	public get callback(): ((_p0: __goscript_callback.CallbackInfo) => void) | null {
		return this._fields.callback
	}

	public set callback(value: ((_p0: __goscript_callback.CallbackInfo) => void) | null) {
		this._fields.callback = value
	}

	public _fields: {
		dcor: any
		dtype: reflect.Type | null
		id: dot.CtorID
		location: digreflect.Func | $.VarRef<digreflect.Func> | null
		state: decoratorState
		params: __goscript_param.paramList
		results: __goscript_result.resultList
		orders: globalThis.Map<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number> | null
		s: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null
		callback: ((_p0: __goscript_callback.CallbackInfo) => void) | null
	}

	constructor(init?: Partial<{dcor?: any, dtype?: reflect.Type | null, id?: dot.CtorID, location?: digreflect.Func | $.VarRef<digreflect.Func> | null, state?: decoratorState, params?: __goscript_param.paramList, results?: __goscript_result.resultList, orders?: globalThis.Map<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number> | null, s?: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, callback?: ((_p0: __goscript_callback.CallbackInfo) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			dcor: init?.dcor ?? (null! as any),
			dtype: init?.dtype ?? (null! as reflect.Type | null),
			id: init?.id ?? (0 as dot.CtorID),
			location: init?.location ?? (null! as digreflect.Func | $.VarRef<digreflect.Func> | null),
			state: init?.state ?? (0 as decoratorState),
			params: init?.params ? init.params.clone() : new __goscript_param.paramList(undefined, true),
			results: init?.results ? init.results.clone() : new __goscript_result.resultList(undefined, true),
			orders: init?.orders ?? (null! as globalThis.Map<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number> | null),
			s: init?.s ?? (null! as __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null),
			callback: init?.callback ?? (null! as ((_p0: __goscript_callback.CallbackInfo) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decoratorNode {
		return new decoratorNode(this, true)
	}

	public __goscriptAssign(source: decoratorNode): void {
		const target = this._fields
		const values = source._fields
		target.dcor = $.assignFieldValue(target.dcor, values.dcor, { kind: $.TypeKind.Interface, methods: [] })
		target.dtype = $.assignFieldValue(target.dtype, values.dtype, "reflect.Type")
		target.id = values.id
		target.location = values.location
		target.state = values.state
		$.assignStruct(target.params, values.params)
		$.assignStruct(target.results, values.results)
		target.orders = values.orders
		target.s = values.s
		target.callback = values.callback
	}

	public async Call(s: __goscript_container.containerStore | null): globalThis.Promise<$.GoError> {
		let n: decoratorNode | $.VarRef<decoratorNode> | null = this;
		let err: $.GoError = null! as $.GoError
		const __defer = new $.AsyncDisposableStack()
		try {
			const n$: decoratorNode = n == null ? $.pointerTarget<decoratorNode>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<decoratorNode>(n)
			if ((n$ as decoratorNode).state == 2) {
				return null
			}

			;(n$ as decoratorNode).state = 1

			{
				let __goscriptShadow0 = await __goscript_invoke.shallowCheckDependencies(s, ((n$ as decoratorNode).params).clone())
				if (__goscriptShadow0 != null) {
					return $.interfaceValue<$.GoError>(new __goscript_error.errMissingDependencies({Func: (n$ as decoratorNode).location, Reason: __goscriptShadow0}, true), "dig.errMissingDependencies", "dig.errMissingDependencies")
				}
			}

			let __goscriptTuple0: any = await $.markAsStructValue($.cloneStructValue((n$ as decoratorNode).params)).BuildList($.interfaceValue<__goscript_container.containerStore | null>((n$ as decoratorNode).s, "*dig.Scope", /* @__PURE__ */ $.pointerType("dig.Scope")))
			let args: $.Slice<reflect.Value> = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>(new __goscript_error.errArgumentsFailed({Func: (n$ as decoratorNode).location, Reason: err}, true), "dig.errArgumentsFailed", "dig.errArgumentsFailed")
			}

			if ((n$ as decoratorNode).callback != null) {
				// Wrap in separate func to include PanicErrors
				__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
					await (n$ as decoratorNode).callback!((await (async () => { const __goscriptLiteralField0 = await fmt.Sprintf("%v.%v", $.pointerValue<digreflect.Func>((n$ as decoratorNode).location).Package, $.pointerValue<digreflect.Func>((n$ as decoratorNode).location).Name); return new __goscript_callback.CallbackInfo({Name: __goscriptLiteralField0, Error: err}, true) })()))
				})() })
			}

			if ($.pointerValue<__goscript_scope.Scope>((n$ as decoratorNode).s).recoverFromPanics) {
				__defer.defer(() => { ((): void => {
					{
						let p = $.recover()
						if (p != null) {
							err = $.interfaceValue<$.GoError>(new __goscript_error.PanicError({fn: (n$ as decoratorNode).location, Panic: p}, true), "dig.PanicError", "dig.PanicError")
						}
					}
				})() })
			}

			let results: $.Slice<reflect.Value> = ((__goscriptAwait = ((__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(s)).invoker(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_container.invokerFn | null)!($.markAsStructValue($.cloneStructValue(reflect.ValueOf((n$ as decoratorNode).dcor))), args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<reflect.Value>)
			{
				err = await $.markAsStructValue($.cloneStructValue((n$ as decoratorNode).results)).ExtractList($.interfaceValue<__goscript_container.containerWriter | null>((n$ as decoratorNode).s, "*dig.Scope", /* @__PURE__ */ $.pointerType("dig.Scope")), true, results)
				if (err != null) {
					const __goscriptReturn0: $.GoError = err
					err = __goscriptReturn0
					await __defer.dispose()
					return err
				}
			}
			;(n$ as decoratorNode).state = 2
			const __goscriptReturn1: $.GoError = null
			err = __goscriptReturn1
			await __defer.dispose()
			return err
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return err
	}

	public ID(): dot.CtorID {
		const n: decoratorNode | $.VarRef<decoratorNode> | null = this;
		return $.pointerValue<decoratorNode>(n).id
	}

	public State(): decoratorState {
		const n: decoratorNode | $.VarRef<decoratorNode> | null = this;
		return $.pointerValue<decoratorNode>(n).state
	}

	static __typeInfo = $.registerStructType(
		"dig.decoratorNode",
		() => new decoratorNode(),
		() => [$.methodSignature("Call", [["s", "dig.containerStore"]], [["err", "error"]], true), $.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uintptr", "dot.CtorID")], true), $.methodSignature("State", [], [/* @__PURE__ */ $.basicType("int", "dig.decoratorState")], true)],
		decoratorNode,
		() => [/* @__PURE__ */ $.structField("dcor", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("dtype", "reflect.Type", [1], 16, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uintptr", "dot.CtorID"), [2], 32, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("location", /* @__PURE__ */ $.pointerType("digreflect.Func"), [3], 40, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("state", /* @__PURE__ */ $.basicType("int", "dig.decoratorState"), [4], 48, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("params", "dig.paramList", [5], 56, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("results", "dig.resultList", [6], 96, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("orders", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("dig.Scope"), /* @__PURE__ */ $.basicType("int")), [7], 160, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.pointerType("dig.Scope"), [8], 168, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("callback", ({ kind: $.TypeKind.Function, name: "dig.Callback", params: ["dig.CallbackInfo"], results: [] } as $.FunctionTypeInfo), [9], 176, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export class decorateOptions {
	public get Info(): DecorateInfo | $.VarRef<DecorateInfo> | null {
		return this._fields.Info
	}

	public set Info(value: DecorateInfo | $.VarRef<DecorateInfo> | null) {
		this._fields.Info = value
	}

	public get Callback(): ((_p0: __goscript_callback.CallbackInfo) => void) | null {
		return this._fields.Callback
	}

	public set Callback(value: ((_p0: __goscript_callback.CallbackInfo) => void) | null) {
		this._fields.Callback = value
	}

	public _fields: {
		Info: DecorateInfo | $.VarRef<DecorateInfo> | null
		Callback: ((_p0: __goscript_callback.CallbackInfo) => void) | null
	}

	constructor(init?: Partial<{Info?: DecorateInfo | $.VarRef<DecorateInfo> | null, Callback?: ((_p0: __goscript_callback.CallbackInfo) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Info: init?.Info ?? (null! as DecorateInfo | $.VarRef<DecorateInfo> | null),
			Callback: init?.Callback ?? (null! as ((_p0: __goscript_callback.CallbackInfo) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decorateOptions {
		return new decorateOptions(this, true)
	}

	public __goscriptAssign(source: decorateOptions): void {
		const target = this._fields
		const values = source._fields
		target.Info = values.Info
		target.Callback = values.Callback
	}

	static __typeInfo = $.registerStructType(
		"dig.decorateOptions",
		() => new decorateOptions(),
		() => [],
		decorateOptions,
		() => [/* @__PURE__ */ $.structField("Info", /* @__PURE__ */ $.pointerType("dig.DecorateInfo"), [0], 0, true), /* @__PURE__ */ $.structField("Callback", ({ kind: $.TypeKind.Function, name: "dig.Callback", params: ["dig.CallbackInfo"], results: [] } as $.FunctionTypeInfo), [1], 8, true)]
	)
}

export class fillDecorateInfoOption {
	public get info(): DecorateInfo | $.VarRef<DecorateInfo> | null {
		return this._fields.info
	}

	public set info(value: DecorateInfo | $.VarRef<DecorateInfo> | null) {
		this._fields.info = value
	}

	public _fields: {
		info: DecorateInfo | $.VarRef<DecorateInfo> | null
	}

	constructor(init?: Partial<{info?: DecorateInfo | $.VarRef<DecorateInfo> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			info: init?.info ?? (null! as DecorateInfo | $.VarRef<DecorateInfo> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fillDecorateInfoOption {
		return new fillDecorateInfoOption(this, true)
	}

	public __goscriptAssign(source: fillDecorateInfoOption): void {
		const target = this._fields
		const values = source._fields
		target.info = values.info
	}

	public async String(): globalThis.Promise<string> {
		const o = this;
		return fmt.Sprintf("FillDecorateInfo(%p)", $.interfaceValue(o.info, "*dig.DecorateInfo", /* @__PURE__ */ $.pointerType("dig.DecorateInfo")))
	}

	public apply(opts: decorateOptions | $.VarRef<decorateOptions> | null): void {
		const o = this;
		$.pointerValue<decorateOptions>(opts).Info = o.info
	}

	static __typeInfo = $.registerStructType(
		"dig.fillDecorateInfoOption",
		() => new fillDecorateInfoOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["opts", /* @__PURE__ */ $.pointerType("dig.decorateOptions")]])],
		fillDecorateInfoOption,
		() => [/* @__PURE__ */ $.structField("info", /* @__PURE__ */ $.pointerType("dig.DecorateInfo"), [0], 0, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export class DecorateInfo {
	public get ID(): __goscript_provide.ID {
		return this._fields.ID
	}

	public set ID(value: __goscript_provide.ID) {
		this._fields.ID = value
	}

	public get Inputs(): $.Slice<__goscript_provide.Input | $.VarRef<__goscript_provide.Input> | null> {
		return this._fields.Inputs
	}

	public set Inputs(value: $.Slice<__goscript_provide.Input | $.VarRef<__goscript_provide.Input> | null>) {
		this._fields.Inputs = value
	}

	public get Outputs(): $.Slice<__goscript_provide.Output | $.VarRef<__goscript_provide.Output> | null> {
		return this._fields.Outputs
	}

	public set Outputs(value: $.Slice<__goscript_provide.Output | $.VarRef<__goscript_provide.Output> | null>) {
		this._fields.Outputs = value
	}

	public _fields: {
		ID: __goscript_provide.ID
		Inputs: $.Slice<__goscript_provide.Input | $.VarRef<__goscript_provide.Input> | null>
		Outputs: $.Slice<__goscript_provide.Output | $.VarRef<__goscript_provide.Output> | null>
	}

	constructor(init?: Partial<{ID?: __goscript_provide.ID, Inputs?: $.Slice<__goscript_provide.Input | $.VarRef<__goscript_provide.Input> | null>, Outputs?: $.Slice<__goscript_provide.Output | $.VarRef<__goscript_provide.Output> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			ID: init?.ID ?? (0 as __goscript_provide.ID),
			Inputs: init?.Inputs ?? (null! as $.Slice<__goscript_provide.Input | $.VarRef<__goscript_provide.Input> | null>),
			Outputs: init?.Outputs ?? (null! as $.Slice<__goscript_provide.Output | $.VarRef<__goscript_provide.Output> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DecorateInfo {
		return new DecorateInfo(this, true)
	}

	public __goscriptAssign(source: DecorateInfo): void {
		const target = this._fields
		const values = source._fields
		target.ID = values.ID
		target.Inputs = values.Inputs
		target.Outputs = values.Outputs
	}

	static __typeInfo = $.registerStructType(
		"dig.DecorateInfo",
		() => new DecorateInfo(),
		() => [],
		DecorateInfo,
		() => [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("int", "dig.ID"), [0], 0, true), /* @__PURE__ */ $.structField("Inputs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dig.Input")), [1], 8, true), /* @__PURE__ */ $.structField("Outputs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dig.Output")), [2], 32, true)]
	)
}

export const decoratorReady: decoratorState = 0

export const decoratorOnStack: decoratorState = 1

export const decoratorCalled: decoratorState = 2

export async function newDecoratorNode(dcor: any, s: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, opts: decorateOptions): globalThis.Promise<[decoratorNode | $.VarRef<decoratorNode> | null, $.GoError]> {
	let dval = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(dcor)))
	let dtype = $.markAsStructValue($.cloneStructValue(dval)).Type()
	let dptr = $.markAsStructValue($.cloneStructValue(dval)).Pointer()

	let [pl, err] = await __goscript_param.newParamList(dtype, $.interfaceValue<__goscript_container.containerStore | null>(s, "*dig.Scope", /* @__PURE__ */ $.pointerType("dig.Scope")))
	if (err != null) {
		return [null, err]
	}

	let __goscriptTuple1: any = await __goscript_result.newResultList(dtype, new __goscript_result.resultOptions(undefined, true))
	let rl = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return [null, err]
	}

	let n: decoratorNode | $.VarRef<decoratorNode> | null = (() => { const __goscriptLiteralField1 = digreflect.InspectFunc(dcor); return new decoratorNode({dcor: dcor, dtype: dtype, id: $.uint(dptr, 64), location: __goscriptLiteralField1, orders: $.makeMap<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number>(undefined, /* @__PURE__ */ $.pointerType("dig.Scope")), params: pl, results: rl, s: s, callback: opts.Callback}) })()
	return [n, null]
}

export function FillDecorateInfo(info: DecorateInfo | $.VarRef<DecorateInfo> | null): DecorateOption | null {
	return $.interfaceValue<DecorateOption | null>(new fillDecorateInfoOption({info: info}, true), "dig.fillDecorateInfoOption", "dig.fillDecorateInfoOption")
}

export async function findResultKeys(r: __goscript_result.resultList): globalThis.Promise<[$.Slice<__goscript_container.key>, $.GoError]> {
	// use BFS to search for all keys included in a resultList.
	let q: $.Slice<__goscript_result.result | null> = null! as $.Slice<__goscript_result.result | null>
	let keys: $.Slice<__goscript_container.key> = null! as $.Slice<__goscript_container.key>
	q = $.appendOne(q, $.interfaceValue<__goscript_result.result | null>((r).clone(), "dig.resultList", "dig.resultList"), $.appendZeros.nil)

	while ($.sliceLen(q) > 0) {
		let res = $.arrayIndex(q!, 0)
		q = $.goSlice(q, 1, undefined)

		{
			const __goscriptTypeSwitchValue = res
			switch (true) {
				case $.typeAssert<__goscript_result.resultSingle>(__goscriptTypeSwitchValue, "dig.resultSingle").ok:
					{
						let innerResult: __goscript_result.resultSingle = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_result.resultSingle>(__goscriptTypeSwitchValue, "dig.resultSingle").value))
						keys = $.appendOne(keys, new __goscript_container.key({t: innerResult.Type, name: innerResult.Name}, true))
					}
					break
				case $.typeAssert<__goscript_result.resultGrouped>(__goscriptTypeSwitchValue, "dig.resultGrouped").ok:
					{
						let innerResult: __goscript_result.resultGrouped = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_result.resultGrouped>(__goscriptTypeSwitchValue, "dig.resultGrouped").value))
						if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(innerResult.Type).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 23) {
							return [null, $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput("decorating a value group requires decorating the entire value group, not a single value", null), "dig.errInvalidInput", "dig.errInvalidInput")]
						}
						keys = $.appendOne(keys, (await (async () => { const __goscriptLiteralField2 = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(innerResult.Type).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_container.key({t: __goscriptLiteralField2, group: innerResult.Group}, true) })()))
					}
					break
				case $.typeAssert<__goscript_result.resultObject>(__goscriptTypeSwitchValue, "dig.resultObject").ok:
					{
						let innerResult: __goscript_result.resultObject = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_result.resultObject>(__goscriptTypeSwitchValue, "dig.resultObject").value))
						for (let __goscriptRangeTarget0 = innerResult.Fields, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
							let f = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_result.resultObjectField)).clone()
							q = $.appendOne(q, f.Result, $.appendZeros.nil)
						}
					}
					break
				case $.typeAssert<__goscript_result.resultList>(__goscriptTypeSwitchValue, "dig.resultList").ok:
					{
						let innerResult: __goscript_result.resultList = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_result.resultList>(__goscriptTypeSwitchValue, "dig.resultList").value))
						q = $.appendSlice(q, innerResult.Results, $.appendZeros.nil)
					}
					break
			}
		}
	}
	return [keys, null]
}

var __goscriptAwait: any
