// Generated file based on scope.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as digreflect from "@goscript/go.uber.org/dig/internal/digreflect/index.js"

import * as dot from "@goscript/go.uber.org/dig/internal/dot/index.js"

import * as graph from "@goscript/go.uber.org/dig/internal/graph/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as strings from "@goscript/strings/index.js"

import * as rand2 from "@goscript/math/rand/index.js"

import * as sort from "@goscript/sort/index.js"

import * as time from "@goscript/time/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as template from "@goscript/text/template/index.js"

import * as __goscript__constructor from "./constructor.gs.ts"

import * as __goscript_callback from "./callback.gs.ts"

import * as __goscript_container from "./container.gs.ts"

import * as __goscript_cycle_error from "./cycle_error.gs.ts"

import * as __goscript_decorate from "./decorate.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_graph from "./graph.gs.ts"

import * as __goscript_inout from "./inout.gs.ts"

import * as __goscript_invoke from "./invoke.gs.ts"

import * as __goscript_param from "./param.gs.ts"

import * as __goscript_provide from "./provide.gs.ts"

import * as __goscript_result from "./result.gs.ts"

import * as __goscript_visualize from "./visualize.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/go.uber.org/dig/internal/digreflect/index.js"
import "@goscript/go.uber.org/dig/internal/dot/index.js"
import "@goscript/go.uber.org/dig/internal/graph/index.js"
import "@goscript/bytes/index.js"
import "@goscript/strings/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/sort/index.js"
import "@goscript/time/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/strconv/index.js"
import "@goscript/text/template/index.js"
import "./constructor.gs.ts"
import "./callback.gs.ts"
import "./container.gs.ts"
import "./cycle_error.gs.ts"
import "./decorate.gs.ts"
import "./error.gs.ts"
import "./graph.gs.ts"
import "./inout.gs.ts"
import "./invoke.gs.ts"
import "./param.gs.ts"
import "./provide.gs.ts"
import "./result.gs.ts"
import "./visualize.gs.ts"

$.registerTypePackagePath("go.uber.org/dig", ["dig.ScopeOption", "dig.Scope"])

export type ScopeOption = {
	noScopeOption(): void
}

$.registerInterfaceType(
	"dig.ScopeOption",
	null,
	[$.methodSignature("noScopeOption")]
);

export class Scope {
	// Name of the Scope
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	// Mapping from key to all the constructor node that can provide a value for that
	// key.
	public get providers(): globalThis.Map<__goscript_container.key, $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>> | null {
		return this._fields.providers
	}

	public set providers(value: globalThis.Map<__goscript_container.key, $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>> | null) {
		this._fields.providers = value
	}

	// Mapping from key to the decorator that decorates a value for that key.
	public get decorators(): globalThis.Map<__goscript_container.key, __goscript_decorate.decoratorNode | $.VarRef<__goscript_decorate.decoratorNode> | null> | null {
		return this._fields.decorators
	}

	public set decorators(value: globalThis.Map<__goscript_container.key, __goscript_decorate.decoratorNode | $.VarRef<__goscript_decorate.decoratorNode> | null> | null) {
		this._fields.decorators = value
	}

	// constructorNodes provided directly to this Scope. i.e. it does not include
	// any nodes that were provided to the parent Scope this inherited from.
	public get nodes(): $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null> {
		return this._fields.nodes
	}

	public set nodes(value: $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>) {
		this._fields.nodes = value
	}

	// Values that generated via decorators in the Scope.
	public get decoratedValues(): globalThis.Map<__goscript_container.key, reflect.Value> | null {
		return this._fields.decoratedValues
	}

	public set decoratedValues(value: globalThis.Map<__goscript_container.key, reflect.Value> | null) {
		this._fields.decoratedValues = value
	}

	// Values that generated directly in the Scope.
	public get values(): globalThis.Map<__goscript_container.key, reflect.Value> | null {
		return this._fields.values
	}

	public set values(value: globalThis.Map<__goscript_container.key, reflect.Value> | null) {
		this._fields.values = value
	}

	// Values groups that generated directly in the Scope.
	public get groups(): globalThis.Map<__goscript_container.key, $.Slice<reflect.Value>> | null {
		return this._fields.groups
	}

	public set groups(value: globalThis.Map<__goscript_container.key, $.Slice<reflect.Value>> | null) {
		this._fields.groups = value
	}

	// Values groups that generated via decoraters in the Scope.
	public get decoratedGroups(): globalThis.Map<__goscript_container.key, reflect.Value> | null {
		return this._fields.decoratedGroups
	}

	public set decoratedGroups(value: globalThis.Map<__goscript_container.key, reflect.Value> | null) {
		this._fields.decoratedGroups = value
	}

	// Source of randomness.
	public get rand(): rand2.Rand | $.VarRef<rand2.Rand> | null {
		return this._fields.rand
	}

	public set rand(value: rand2.Rand | $.VarRef<rand2.Rand> | null) {
		this._fields.rand = value
	}

	// Flag indicating whether the graph has been checked for cycles.
	public get isVerifiedAcyclic(): boolean {
		return this._fields.isVerifiedAcyclic
	}

	public set isVerifiedAcyclic(value: boolean) {
		this._fields.isVerifiedAcyclic = value
	}

	// Defer acyclic check on provide until Invoke.
	public get deferAcyclicVerification(): boolean {
		return this._fields.deferAcyclicVerification
	}

	public set deferAcyclicVerification(value: boolean) {
		this._fields.deferAcyclicVerification = value
	}

	// Recover from panics in user-provided code and wrap in an exported error type.
	public get recoverFromPanics(): boolean {
		return this._fields.recoverFromPanics
	}

	public set recoverFromPanics(value: boolean) {
		this._fields.recoverFromPanics = value
	}

	// invokerFn calls a function with arguments provided to Provide or Invoke.
	public get invokerFn(): ((fn: reflect.Value, args: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null {
		return this._fields.invokerFn
	}

	public set invokerFn(value: ((fn: reflect.Value, args: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null) {
		this._fields.invokerFn = value
	}

	// graph of this Scope. Note that this holds the dependency graph of all the
	// nodes that affect this Scope, not just the ones provided directly to this Scope.
	public get gh(): __goscript_graph.graphHolder | $.VarRef<__goscript_graph.graphHolder> | null {
		return this._fields.gh
	}

	public set gh(value: __goscript_graph.graphHolder | $.VarRef<__goscript_graph.graphHolder> | null) {
		this._fields.gh = value
	}

	// Parent of this Scope.
	public get parentScope(): Scope | $.VarRef<Scope> | null {
		return this._fields.parentScope
	}

	public set parentScope(value: Scope | $.VarRef<Scope> | null) {
		this._fields.parentScope = value
	}

	// All the child scopes of this Scope.
	public get childScopes(): $.Slice<Scope | $.VarRef<Scope> | null> {
		return this._fields.childScopes
	}

	public set childScopes(value: $.Slice<Scope | $.VarRef<Scope> | null>) {
		this._fields.childScopes = value
	}

	public _fields: {
		name: string
		providers: globalThis.Map<__goscript_container.key, $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>> | null
		decorators: globalThis.Map<__goscript_container.key, __goscript_decorate.decoratorNode | $.VarRef<__goscript_decorate.decoratorNode> | null> | null
		nodes: $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>
		decoratedValues: globalThis.Map<__goscript_container.key, reflect.Value> | null
		values: globalThis.Map<__goscript_container.key, reflect.Value> | null
		groups: globalThis.Map<__goscript_container.key, $.Slice<reflect.Value>> | null
		decoratedGroups: globalThis.Map<__goscript_container.key, reflect.Value> | null
		rand: rand2.Rand | $.VarRef<rand2.Rand> | null
		isVerifiedAcyclic: boolean
		deferAcyclicVerification: boolean
		recoverFromPanics: boolean
		invokerFn: ((fn: reflect.Value, args: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null
		gh: __goscript_graph.graphHolder | $.VarRef<__goscript_graph.graphHolder> | null
		parentScope: Scope | $.VarRef<Scope> | null
		childScopes: $.Slice<Scope | $.VarRef<Scope> | null>
	}

	constructor(init?: Partial<{name?: string, providers?: globalThis.Map<__goscript_container.key, $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>> | null, decorators?: globalThis.Map<__goscript_container.key, __goscript_decorate.decoratorNode | $.VarRef<__goscript_decorate.decoratorNode> | null> | null, nodes?: $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>, decoratedValues?: globalThis.Map<__goscript_container.key, reflect.Value> | null, values?: globalThis.Map<__goscript_container.key, reflect.Value> | null, groups?: globalThis.Map<__goscript_container.key, $.Slice<reflect.Value>> | null, decoratedGroups?: globalThis.Map<__goscript_container.key, reflect.Value> | null, rand?: rand2.Rand | $.VarRef<rand2.Rand> | null, isVerifiedAcyclic?: boolean, deferAcyclicVerification?: boolean, recoverFromPanics?: boolean, invokerFn?: ((fn: reflect.Value, args: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null, gh?: __goscript_graph.graphHolder | $.VarRef<__goscript_graph.graphHolder> | null, parentScope?: Scope | $.VarRef<Scope> | null, childScopes?: $.Slice<Scope | $.VarRef<Scope> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			providers: init?.providers ?? (null! as globalThis.Map<__goscript_container.key, $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>> | null),
			decorators: init?.decorators ?? (null! as globalThis.Map<__goscript_container.key, __goscript_decorate.decoratorNode | $.VarRef<__goscript_decorate.decoratorNode> | null> | null),
			nodes: init?.nodes ?? (null! as $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>),
			decoratedValues: init?.decoratedValues ?? (null! as globalThis.Map<__goscript_container.key, reflect.Value> | null),
			values: init?.values ?? (null! as globalThis.Map<__goscript_container.key, reflect.Value> | null),
			groups: init?.groups ?? (null! as globalThis.Map<__goscript_container.key, $.Slice<reflect.Value>> | null),
			decoratedGroups: init?.decoratedGroups ?? (null! as globalThis.Map<__goscript_container.key, reflect.Value> | null),
			rand: init?.rand ?? (null! as rand2.Rand | $.VarRef<rand2.Rand> | null),
			isVerifiedAcyclic: init?.isVerifiedAcyclic ?? (false as boolean),
			deferAcyclicVerification: init?.deferAcyclicVerification ?? (false as boolean),
			recoverFromPanics: init?.recoverFromPanics ?? (false as boolean),
			invokerFn: init?.invokerFn ?? (null! as ((fn: reflect.Value, args: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null),
			gh: init?.gh ?? (null! as __goscript_graph.graphHolder | $.VarRef<__goscript_graph.graphHolder> | null),
			parentScope: init?.parentScope ?? (null! as Scope | $.VarRef<Scope> | null),
			childScopes: init?.childScopes ?? (null! as $.Slice<Scope | $.VarRef<Scope> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Scope {
		return new Scope(this, true)
	}

	public __goscriptAssign(source: Scope): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.providers = values.providers
		target.decorators = values.decorators
		target.nodes = values.nodes
		target.decoratedValues = values.decoratedValues
		target.values = values.values
		target.groups = values.groups
		target.decoratedGroups = values.decoratedGroups
		target.rand = values.rand
		target.isVerifiedAcyclic = values.isVerifiedAcyclic
		target.deferAcyclicVerification = values.deferAcyclicVerification
		target.recoverFromPanics = values.recoverFromPanics
		target.invokerFn = values.invokerFn
		target.gh = values.gh
		target.parentScope = values.parentScope
		target.childScopes = values.childScopes
	}

	public async Decorate(decorator: any, opts: $.Slice<__goscript_decorate.DecorateOption | null>): globalThis.Promise<$.GoError> {
		let s: Scope | $.VarRef<Scope> | null = this;
		const s$: Scope = s == null ? $.pointerTarget<Scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Scope>(s)
		let options: $.VarRef<__goscript_decorate.decorateOptions> = $.varRef(new __goscript_decorate.decorateOptions(undefined, true))
		for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_decorate.DecorateOption | null)
			void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<__goscript_decorate.DecorateOption, null>) : $.pointerValue<Exclude<__goscript_decorate.DecorateOption, null>>(opt)).apply(options), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		let __goscriptTuple0: any = await __goscript_decorate.newDecoratorNode(decorator, s, (options.value).clone())
		let dn: __goscript_decorate.decoratorNode | $.VarRef<__goscript_decorate.decoratorNode> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		let dn$: __goscript_decorate.decoratorNode = dn == null ? $.pointerTarget<__goscript_decorate.decoratorNode>(dn) : (dn as any).__isVarRef === true ? (dn as any).value : (dn as any).__goValue === undefined ? (dn as any) : $.pointerTarget<__goscript_decorate.decoratorNode>(dn)
		if (err != null) {
			return err
		}

		let __goscriptTuple1: any = await __goscript_decorate.findResultKeys(((dn$ as __goscript_decorate.decoratorNode).results).clone())
		let keys: $.Slice<__goscript_container.key> = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return err
		}
		for (let __goscriptRangeTarget1 = keys, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let k = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_container.key)).clone()
			{
				let [, ok] = $.mapGet<__goscript_container.key, __goscript_decorate.decoratorNode | $.VarRef<__goscript_decorate.decoratorNode> | null, __goscript_decorate.decoratorNode | $.VarRef<__goscript_decorate.decoratorNode> | null>((s$ as Scope).decorators, k, null)
				if (ok) {
					return $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot decorate using function %v: %s already decorated", ((dn$ as __goscript_decorate.decoratorNode).dtype as any), $.interfaceValue((k).clone(), "dig.key", "dig.key")), null), "dig.errInvalidInput", "dig.errInvalidInput")
				}
			}
			$.mapSet((s$ as Scope).decorators, (k).clone(), dn)
		}

		{
			let info: __goscript_decorate.DecorateInfo | $.VarRef<__goscript_decorate.DecorateInfo> | null = options.value.Info
			if (info != null) {
				let params: $.Slice<dot.Param | $.VarRef<dot.Param> | null> = await $.markAsStructValue($.cloneStructValue((dn$ as __goscript_decorate.decoratorNode).params)).DotParam()
				let results: $.Slice<dot.Result | $.VarRef<dot.Result> | null> = await $.markAsStructValue($.cloneStructValue((dn$ as __goscript_decorate.decoratorNode).results)).DotResult()
				$.pointerValue<__goscript_decorate.DecorateInfo>(info).ID = $.int((dn$ as __goscript_decorate.decoratorNode).id)
				$.pointerValue<__goscript_decorate.DecorateInfo>(info).Inputs = $.makeSlice<__goscript_provide.Input | $.VarRef<__goscript_provide.Input> | null>($.sliceLen(params))
				$.pointerValue<__goscript_decorate.DecorateInfo>(info).Outputs = $.makeSlice<__goscript_provide.Output | $.VarRef<__goscript_provide.Output> | null>($.sliceLen(results))

				for (let __goscriptRangeTarget2 = params, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
					let param = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as dot.Param | $.VarRef<dot.Param> | null)
					$.sliceElems($.pointerValue<__goscript_decorate.DecorateInfo>(info).Inputs!)[$.sliceSlot($.pointerValue<__goscript_decorate.DecorateInfo>(info).Inputs!, i)] = new __goscript_provide.Input({t: $.pointerValue<dot.Node>($.pointerValue<dot.Param>(param).Node).Type, optional: $.pointerValue<dot.Param>(param).Optional, name: $.pointerValue<dot.Node>($.pointerValue<dot.Param>(param).Node).Name, group: $.pointerValue<dot.Node>($.pointerValue<dot.Param>(param).Node).Group})
				}
				for (let __goscriptRangeTarget3 = results, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
					let res = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + i] as dot.Result | $.VarRef<dot.Result> | null)
					$.sliceElems($.pointerValue<__goscript_decorate.DecorateInfo>(info).Outputs!)[$.sliceSlot($.pointerValue<__goscript_decorate.DecorateInfo>(info).Outputs!, i)] = new __goscript_provide.Output({t: $.pointerValue<dot.Node>($.pointerValue<dot.Result>(res).Node).Type, name: $.pointerValue<dot.Node>($.pointerValue<dot.Result>(res).Node).Name, group: $.pointerValue<dot.Node>($.pointerValue<dot.Result>(res).Node).Group})
				}
			}
		}
		return null
	}

	public async Invoke(_function: any, opts: $.Slice<__goscript_invoke.InvokeOption | null>): globalThis.Promise<$.GoError> {
		let s: Scope | $.VarRef<Scope> | null = this;
		let err: $.GoError = null! as $.GoError
		const __defer = new $.DisposableStack()
		try {
			const s$: Scope = s == null ? $.pointerTarget<Scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Scope>(s)
			let ftype = reflect.TypeOf(_function)
			if (ftype == null) {
				return $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput("can't invoke an untyped nil", null), "dig.errInvalidInput", "dig.errInvalidInput")
			}
			if ((__goscriptAwait = (ftype !== null && (ftype as any).__isVarRef !== true && (ftype as any).__goValue === undefined ? (ftype as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ftype)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 19) {
				return $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("can't invoke non-function %v (type %v)", _function, (ftype as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")
			}

			let __goscriptTuple2: any = await __goscript_param.newParamList(ftype, $.interfaceValue<__goscript_container.containerStore | null>(s, "*dig.Scope", /* @__PURE__ */ $.pointerType("dig.Scope")))
			let pl = __goscriptTuple2[0]
			err = __goscriptTuple2[1]
			if (err != null) {
				return err
			}

			{
				let __goscriptShadow0 = await __goscript_invoke.shallowCheckDependencies($.interfaceValue<__goscript_container.containerStore | null>(s, "*dig.Scope", /* @__PURE__ */ $.pointerType("dig.Scope")), (pl).clone())
				if (__goscriptShadow0 != null) {
					return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField0 = digreflect.InspectFunc(_function); return new __goscript_error.errMissingDependencies({Func: __goscriptLiteralField0, Reason: __goscriptShadow0}, true) })(), "dig.errMissingDependencies", "dig.errMissingDependencies")
				}
			}

			if (!(s$ as Scope).isVerifiedAcyclic) {
				{
					let __goscriptTuple3: any = await graph.IsAcyclic($.interfaceValue<graph.Graph | null>((s$ as Scope).gh, "*dig.graphHolder", /* @__PURE__ */ $.pointerType("dig.graphHolder")))
					let ok = __goscriptTuple3[0]
					let cycle: $.Slice<number> = __goscriptTuple3[1]
					if (!ok) {
						return $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput("cycle detected in dependency graph", (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).cycleDetectedError(cycle) : Scope.prototype.cycleDetectedError.call(s, cycle))), "dig.errInvalidInput", "dig.errInvalidInput")
					}
				}
				;(s$ as Scope).isVerifiedAcyclic = true
			}

			let __goscriptTuple4: any = await $.markAsStructValue($.cloneStructValue(pl)).BuildList($.interfaceValue<__goscript_container.containerStore | null>(s, "*dig.Scope", /* @__PURE__ */ $.pointerType("dig.Scope")))
			let args: $.Slice<reflect.Value> = __goscriptTuple4[0]
			err = __goscriptTuple4[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField1 = digreflect.InspectFunc(_function); return new __goscript_error.errArgumentsFailed({Func: __goscriptLiteralField1, Reason: err}, true) })(), "dig.errArgumentsFailed", "dig.errArgumentsFailed")
			}
			if ((s$ as Scope).recoverFromPanics) {
				__defer.defer(() => { ((): void => {
					{
						let p = $.recover()
						if (p != null) {
							err = $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField2 = digreflect.InspectFunc(_function); return new __goscript_error.PanicError({fn: __goscriptLiteralField2, Panic: p}, true) })(), "dig.PanicError", "dig.PanicError")
						}
					}
				})() })
			}

			let options: $.VarRef<__goscript_invoke.invokeOptions> = $.varRef(new __goscript_invoke.invokeOptions(undefined, true))
			for (let __goscriptRangeTarget4 = opts, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
				let o = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as __goscript_invoke.InvokeOption | null)
				void (__goscriptAwait = (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? (o as Exclude<__goscript_invoke.InvokeOption, null>) : $.pointerValue<Exclude<__goscript_invoke.InvokeOption, null>>(o)).applyInvokeOption(options), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}

			{
				let info: __goscript_invoke.InvokeInfo | $.VarRef<__goscript_invoke.InvokeInfo> | null = options.value.Info
				if (info != null) {
					let params: $.Slice<dot.Param | $.VarRef<dot.Param> | null> = await $.markAsStructValue($.cloneStructValue(pl)).DotParam()
					$.pointerValue<__goscript_invoke.InvokeInfo>(info).Inputs = $.makeSlice<__goscript_provide.Input | $.VarRef<__goscript_provide.Input> | null>($.sliceLen(params))
					for (let __goscriptRangeTarget5 = params, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
						let p = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as dot.Param | $.VarRef<dot.Param> | null)
						$.sliceElems($.pointerValue<__goscript_invoke.InvokeInfo>(info).Inputs!)[$.sliceSlot($.pointerValue<__goscript_invoke.InvokeInfo>(info).Inputs!, i)] = new __goscript_provide.Input({t: $.pointerValue<dot.Node>($.pointerValue<dot.Param>(p).Node).Type, optional: $.pointerValue<dot.Param>(p).Optional, name: $.pointerValue<dot.Node>($.pointerValue<dot.Param>(p).Node).Name, group: $.pointerValue<dot.Node>($.pointerValue<dot.Param>(p).Node).Group})
					}
				}
			}

			let returned: $.Slice<reflect.Value> = ((__goscriptAwait = (s$ as Scope).invokerFn!($.markAsStructValue($.cloneStructValue(reflect.ValueOf(_function))), args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<reflect.Value>)
			if ($.sliceLen(returned) == 0) {
				const __goscriptReturn0: $.GoError = null
				err = __goscriptReturn0
				__defer.dispose()
				return err
			}
			{
				let last = $.markAsStructValue($.cloneStructValue($.arrayIndex(returned!, $.sliceLen(returned) - 1)))
				if (await __goscript_inout.isError($.markAsStructValue($.cloneStructValue(last)).Type())) {
					{
						let [__goscriptShadow1, ] = $.typeAssertTuple<$.GoError>($.markAsStructValue($.cloneStructValue(last)).Interface(), "error")
						if (__goscriptShadow1 != null) {
							const __goscriptReturn1: $.GoError = __goscriptShadow1
							err = __goscriptReturn1
							__defer.dispose()
							return err
						}
					}
				}
			}

			const __goscriptReturn2: $.GoError = null
			err = __goscriptReturn2
			__defer.dispose()
			return err
			__defer.dispose()
		} catch (e) {
			__defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return err
	}

	public async Provide(_constructor: any, opts: $.Slice<__goscript_provide.ProvideOption | null>): globalThis.Promise<$.GoError> {
		const s: Scope | $.VarRef<Scope> | null = this;
		let ctype = reflect.TypeOf(_constructor)
		if (ctype == null) {
			return $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput("can't provide an untyped nil", null), "dig.errInvalidInput", "dig.errInvalidInput")
		}
		if ((__goscriptAwait = (ctype !== null && (ctype as any).__isVarRef !== true && (ctype as any).__goValue === undefined ? (ctype as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ctype)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 19) {
			return $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("must provide constructor function, got %v (type %v)", _constructor, (ctype as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")
		}

		let options: $.VarRef<__goscript_provide.provideOptions> = $.varRef(new __goscript_provide.provideOptions(undefined, true))
		for (let __goscriptRangeTarget6 = opts, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let o = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as __goscript_provide.ProvideOption | null)
			void (__goscriptAwait = (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? (o as Exclude<__goscript_provide.ProvideOption, null>) : $.pointerValue<Exclude<__goscript_provide.ProvideOption, null>>(o)).applyProvideOption(options), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		{
			let err = await options.value.Validate()
			if (err != null) {
				return err
			}
		}

		{
			let err = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).provide(_constructor, (options.value).clone()) : Scope.prototype.provide.call(s, _constructor, (options.value).clone()))
			if (err != null) {
				let errFunc: digreflect.Func | $.VarRef<digreflect.Func> | null = null! as digreflect.Func | $.VarRef<digreflect.Func> | null
				if (options.value.Location == null) {
					errFunc = digreflect.InspectFunc(_constructor)
				} else {
					errFunc = options.value.Location
				}

				return $.interfaceValue<$.GoError>(new __goscript_error.errProvide({Func: errFunc, Reason: err}, true), "dig.errProvide", "dig.errProvide")
			}
		}
		return null
	}

	public async Scope(name: string, opts: $.Slice<ScopeOption | null>): globalThis.Promise<Scope | $.VarRef<Scope> | null> {
		let s: Scope | $.VarRef<Scope> | null = this;
		const s$: Scope = s == null ? $.pointerTarget<Scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Scope>(s)
		let child: Scope | $.VarRef<Scope> | null = newScope()
		let child$: Scope = child == null ? $.pointerTarget<Scope>(child) : (child as any).__isVarRef === true ? (child as any).value : (child as any).__goValue === undefined ? (child as any) : $.pointerTarget<Scope>(child);
		;(child$ as Scope).name = name;
		;(child$ as Scope).parentScope = s;
		;(child$ as Scope).invokerFn = (s$ as Scope).invokerFn;
		;(child$ as Scope).deferAcyclicVerification = (s$ as Scope).deferAcyclicVerification;
		;(child$ as Scope).recoverFromPanics = (s$ as Scope).recoverFromPanics

		// child copies the parent's graph nodes.
		for (let __goscriptRangeTarget7 = $.pointerValue<__goscript_graph.graphHolder>((s$ as Scope).gh).nodes, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let node = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as __goscript_graph.graphNode | $.VarRef<__goscript_graph.graphNode> | null)
			$.pointerValue<__goscript_graph.graphHolder>((child$ as Scope).gh).nodes = $.appendOne($.pointerValue<__goscript_graph.graphHolder>((child$ as Scope).gh).nodes, node, $.appendZeros.nil)
			{
				let __goscriptTuple5: any = $.typeAssertTuple<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>($.pointerValue<__goscript_graph.graphNode>(node).Wrapped, /* @__PURE__ */ $.pointerType("dig.constructorNode"))
				let ctrNode: __goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null = __goscriptTuple5[0]
				let ok = __goscriptTuple5[1]
				if (ok) {
					void (ctrNode !== null && (ctrNode as any).__isVarRef !== true && (ctrNode as any).__goValue === undefined ? ((ctrNode as any) as __goscript__constructor.constructorNode).CopyOrder(s, child) : __goscript__constructor.constructorNode.prototype.CopyOrder.call(ctrNode, s, child))
				}
			}
		}

		for (let __goscriptRangeTarget8 = opts, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let opt = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as ScopeOption | null)
			void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<ScopeOption, null>) : $.pointerValue<Exclude<ScopeOption, null>>(opt)).noScopeOption(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		;(s$ as Scope).childScopes = $.appendOne((s$ as Scope).childScopes, child, $.appendZeros.nil)
		return child
	}

	public async String(): globalThis.Promise<string> {
		const s: Scope | $.VarRef<Scope> | null = this;
		const s$: Scope = s == null ? $.pointerTarget<Scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Scope>(s)
		let b: bytes.Buffer | $.VarRef<bytes.Buffer> | null = new bytes.Buffer()
		await fmt.Fprintln($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "nodes: {")
		for (const [k, vs] of (s$ as Scope).providers?.entries() ?? []) {
			for (let __goscriptRangeTarget9 = vs, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
				let v = (__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as __goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null)
				await fmt.Fprintln($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "\t", $.interfaceValue((k).clone(), "dig.key", "dig.key"), "->", $.interfaceValue(v, "*dig.constructorNode", /* @__PURE__ */ $.pointerType("dig.constructorNode")))
			}
		}
		await fmt.Fprintln($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "}")

		await fmt.Fprintln($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "values: {")
		for (const [k, v] of (s$ as Scope).values?.entries() ?? []) {
			await fmt.Fprintln($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "\t", $.interfaceValue((k).clone(), "dig.key", "dig.key"), "=>", $.interfaceValue($.markAsStructValue($.cloneStructValue(v)), "reflect.Value", "reflect.Value"))
		}
		for (const [k, vs] of (s$ as Scope).groups?.entries() ?? []) {
			for (let __goscriptRangeTarget10 = vs, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
				let v = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as reflect.Value)))
				await fmt.Fprintln($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "\t", $.interfaceValue((k).clone(), "dig.key", "dig.key"), "=>", $.interfaceValue($.markAsStructValue($.cloneStructValue(v)), "reflect.Value", "reflect.Value"))
			}
		}
		await fmt.Fprintln($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, "}")

		return bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(b))
	}

	public ancestors(): $.Slice<Scope | $.VarRef<Scope> | null> {
		const s: Scope | $.VarRef<Scope> | null = this;
		let scopes: $.Slice<Scope | $.VarRef<Scope> | null> = null! as $.Slice<Scope | $.VarRef<Scope> | null>
		{
			let __goscriptShadow2 = s
			for (let __goscriptShadow3: Scope | $.VarRef<Scope> | null = __goscriptShadow2; __goscriptShadow3 != null; __goscriptShadow3 = $.pointerValue<Scope>(__goscriptShadow3).parentScope) {
				scopes = $.appendOne(scopes, __goscriptShadow3, $.appendZeros.nil)
			}
		}
		return scopes
	}

	public appendSubscopes(dest: $.Slice<Scope | $.VarRef<Scope> | null>): $.Slice<Scope | $.VarRef<Scope> | null> {
		const s: Scope | $.VarRef<Scope> | null = this;
		dest = $.appendOne(dest, s, $.appendZeros.nil)
		for (let __goscriptRangeTarget11 = $.pointerValue<Scope>(s).childScopes, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
			let cs = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as Scope | $.VarRef<Scope> | null)
			dest = (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as Scope).appendSubscopes(dest) : Scope.prototype.appendSubscopes.call(cs, dest))
		}
		return dest
	}

	public async createGraph(): globalThis.Promise<dot.Graph | $.VarRef<dot.Graph> | null> {
		const s: Scope | $.VarRef<Scope> | null = this;
		let dg: dot.Graph | $.VarRef<dot.Graph> | null = dot.NewGraph()

		for (let __goscriptRangeTarget12 = $.pointerValue<Scope>(s).nodes, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
			let n = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as __goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null)
			await dot.Graph.prototype.AddCtor.call(dg, __goscript_visualize.newDotCtor(n), await $.markAsStructValue($.cloneStructValue($.pointerValue<__goscript__constructor.constructorNode>(n).paramList)).DotParam(), await $.markAsStructValue($.cloneStructValue($.pointerValue<__goscript__constructor.constructorNode>(n).resultList)).DotResult())
		}

		return dg
	}

	public cycleDetectedError(cycle: $.Slice<number>): $.GoError {
		const s: Scope | $.VarRef<Scope> | null = this;
		let path: $.Slice<__goscript_cycle_error.cycleErrPathEntry> = null! as $.Slice<__goscript_cycle_error.cycleErrPathEntry>
		for (let __goscriptRangeTarget13 = cycle, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
			let n = (__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as number)
			let __goscriptShadow4 = n
			{
				let __goscriptTuple6: any = $.typeAssertTuple<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>(__goscript_graph.graphHolder.prototype.Lookup.call($.pointerValue<Scope>(s).gh, __goscriptShadow4), /* @__PURE__ */ $.pointerType("dig.constructorNode"))
				let __goscriptShadow5: __goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null = __goscriptTuple6[0]
				let ok = __goscriptTuple6[1]
				if (ok) {
					path = $.appendOne(path, (() => { const __goscriptLiteralField4 = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? ((__goscriptShadow5 as any) as __goscript__constructor.constructorNode).Location() : __goscript__constructor.constructorNode.prototype.Location.call(__goscriptShadow5)); return new __goscript_cycle_error.cycleErrPathEntry({Key: (() => { const __goscriptLiteralField3 = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? ((__goscriptShadow5 as any) as __goscript__constructor.constructorNode).CType() : __goscript__constructor.constructorNode.prototype.CType.call(__goscriptShadow5)); return new __goscript_container.key({t: __goscriptLiteralField3}, true) })(), Func: __goscriptLiteralField4}, true) })())
				}
			}
		}
		return $.interfaceValue<$.GoError>(new __goscript_cycle_error.errCycleDetected({Path: path, scope: s}, true), "dig.errCycleDetected", "dig.errCycleDetected")
	}

	public async findAndValidateResults(rl: __goscript_result.resultList): globalThis.Promise<[globalThis.Map<__goscript_container.key, {}> | null, $.GoError]> {
		const s: Scope | $.VarRef<Scope> | null = this;
		let err: $.VarRef<$.GoError> = $.varRef(null! as $.GoError)
		let keyPaths: globalThis.Map<__goscript_container.key, string> | null = $.makeMap<__goscript_container.key, string>()
		await __goscript_result.walkResult($.interfaceValue<__goscript_result.result | null>((rl).clone(), "dig.resultList", "dig.resultList"), $.interfaceValue<__goscript_result.resultVisitor | null>(new __goscript_provide.connectionVisitor({s: s, err: err, keyPaths: keyPaths}, true), "dig.connectionVisitor", "dig.connectionVisitor"))

		if (err.value != null) {
			return [null, err.value]
		}

		let keys: globalThis.Map<__goscript_container.key, {}> | null = $.makeMap<__goscript_container.key, {}>()
		for (let [k, __rangeValue] of keyPaths?.entries() ?? []) {
			$.mapSet(keys, (k).clone(), {})
		}
		return [keys, null]
	}

	public getAllGroupProviders(name: string, t: reflect.Type | null): $.Slice<__goscript_provide.provider | null> {
		const s: Scope | $.VarRef<Scope> | null = this;
		return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).getAllProviders(new __goscript_container.key({group: name, t: t}, true)) : Scope.prototype.getAllProviders.call(s, new __goscript_container.key({group: name, t: t}, true)))
	}

	public getAllProviders(k: __goscript_container.key): $.Slice<__goscript_provide.provider | null> {
		const s: Scope | $.VarRef<Scope> | null = this;
		let allScopes: $.Slice<Scope | $.VarRef<Scope> | null> = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).ancestors() : Scope.prototype.ancestors.call(s))
		let providers: $.Slice<__goscript_provide.provider | null> = null! as $.Slice<__goscript_provide.provider | null>
		for (let __goscriptRangeTarget14 = allScopes, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
			let scope = (__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as Scope | $.VarRef<Scope> | null)
			providers = $.appendSlice(providers, (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as Scope).getProviders(k) : Scope.prototype.getProviders.call(scope, k)), $.appendZeros.nil)
		}
		return providers
	}

	public getAllValueProviders(name: string, t: reflect.Type | null): $.Slice<__goscript_provide.provider | null> {
		const s: Scope | $.VarRef<Scope> | null = this;
		return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).getAllProviders(new __goscript_container.key({name: name, t: t}, true)) : Scope.prototype.getAllProviders.call(s, new __goscript_container.key({name: name, t: t}, true)))
	}

	public getDecoratedValue(name: string, t: reflect.Type | null): [reflect.Value, boolean] {
		const s: Scope | $.VarRef<Scope> | null = this;
		let v: reflect.Value = $.markAsStructValue(new reflect.Value())
		let ok: boolean = false
		let __goscriptTuple7: any = $.mapGet<__goscript_container.key, reflect.Value, reflect.Value>($.pointerValue<Scope>(s).decoratedValues, new __goscript_container.key({name: name, t: t}, true), $.markAsStructValue(new reflect.Value()))
		v = $.assignStruct(v, __goscriptTuple7[0])
		ok = __goscriptTuple7[1]
		return [v, ok]
	}

	public getDecoratedValueGroup(name: string, t: reflect.Type | null): [reflect.Value, boolean] {
		const s: Scope | $.VarRef<Scope> | null = this;
		let [items, ok] = $.mapGet<__goscript_container.key, reflect.Value, reflect.Value>($.pointerValue<Scope>(s).decoratedGroups, new __goscript_container.key({group: name, t: t}, true), $.markAsStructValue(new reflect.Value()))
		return [$.markAsStructValue($.cloneStructValue(items)), ok]
	}

	public getDecorators(k: __goscript_container.key): [__goscript_decorate.decorator | null, boolean] {
		const s: Scope | $.VarRef<Scope> | null = this;
		let __goscriptTuple8: any = $.mapGet<__goscript_container.key, __goscript_decorate.decoratorNode | $.VarRef<__goscript_decorate.decoratorNode> | null, __goscript_decorate.decoratorNode | $.VarRef<__goscript_decorate.decoratorNode> | null>($.pointerValue<Scope>(s).decorators, k, null)
		let d: __goscript_decorate.decoratorNode | $.VarRef<__goscript_decorate.decoratorNode> | null = __goscriptTuple8[0]
		let found = __goscriptTuple8[1]
		return [$.interfaceValue<__goscript_decorate.decorator | null>(d, "*dig.decoratorNode", /* @__PURE__ */ $.pointerType("dig.decoratorNode")), found]
	}

	public getGroupDecorator(name: string, t: reflect.Type | null): [__goscript_decorate.decorator | null, boolean] {
		const s: Scope | $.VarRef<Scope> | null = this;
		return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).getDecorators(new __goscript_container.key({group: name, t: t}, true)) : Scope.prototype.getDecorators.call(s, new __goscript_container.key({group: name, t: t}, true)))
	}

	public getGroupProviders(name: string, t: reflect.Type | null): $.Slice<__goscript_provide.provider | null> {
		const s: Scope | $.VarRef<Scope> | null = this;
		return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).getProviders(new __goscript_container.key({group: name, t: t}, true)) : Scope.prototype.getProviders.call(s, new __goscript_container.key({group: name, t: t}, true)))
	}

	public getProviders(k: __goscript_container.key): $.Slice<__goscript_provide.provider | null> {
		const s: Scope | $.VarRef<Scope> | null = this;
		let nodes: $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null> = $.mapGet<__goscript_container.key, $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>, $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>>($.pointerValue<Scope>(s).providers, k, null)[0]
		let providers: $.Slice<__goscript_provide.provider | null> = $.makeSlice<__goscript_provide.provider | null>($.sliceLen(nodes))
		for (let __goscriptRangeTarget15 = nodes, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), __goscriptSliceWindow0 = $.sliceRange(providers), i = 0; i < __goscriptRangeWindow15.length; i++) {
			let n = (__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + i] as __goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null);
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = $.interfaceValue<__goscript_provide.provider | null>(n, "*dig.constructorNode", /* @__PURE__ */ $.pointerType("dig.constructorNode"))
		}
		return providers
	}

	public getValue(name: string, t: reflect.Type | null): [reflect.Value, boolean] {
		const s: Scope | $.VarRef<Scope> | null = this;
		let v: reflect.Value = $.markAsStructValue(new reflect.Value())
		let ok: boolean = false
		let __goscriptTuple9: any = $.mapGet<__goscript_container.key, reflect.Value, reflect.Value>($.pointerValue<Scope>(s).values, new __goscript_container.key({name: name, t: t}, true), $.markAsStructValue(new reflect.Value()))
		v = $.assignStruct(v, __goscriptTuple9[0])
		ok = __goscriptTuple9[1]
		return [v, ok]
	}

	public getValueDecorator(name: string, t: reflect.Type | null): [__goscript_decorate.decorator | null, boolean] {
		const s: Scope | $.VarRef<Scope> | null = this;
		return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).getDecorators(new __goscript_container.key({name: name, t: t}, true)) : Scope.prototype.getDecorators.call(s, new __goscript_container.key({name: name, t: t}, true)))
	}

	public async getValueGroup(name: string, t: reflect.Type | null): globalThis.Promise<$.Slice<reflect.Value>> {
		const s: Scope | $.VarRef<Scope> | null = this;
		const s$: Scope = s == null ? $.pointerTarget<Scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Scope>(s)
		let items: $.Slice<reflect.Value> = $.mapGet<__goscript_container.key, $.Slice<reflect.Value>, $.Slice<reflect.Value>>((s$ as Scope).groups, new __goscript_container.key({group: name, t: t}, true), null)[0]
		// shuffle the list so users don't rely on the ordering of grouped values
		return __goscript_container.shuffledCopy((s$ as Scope).rand, items)
	}

	public getValueProviders(name: string, t: reflect.Type | null): $.Slice<__goscript_provide.provider | null> {
		const s: Scope | $.VarRef<Scope> | null = this;
		return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).getProviders(new __goscript_container.key({name: name, t: t}, true)) : Scope.prototype.getProviders.call(s, new __goscript_container.key({name: name, t: t}, true)))
	}

	public invoker(): __goscript_container.invokerFn | null {
		const s: Scope | $.VarRef<Scope> | null = this;
		return $.pointerValue<Scope>(s).invokerFn
	}

	public async knownTypes(): globalThis.Promise<$.Slice<reflect.Type | null>> {
		const s: Scope | $.VarRef<Scope> | null = this;
		const s$: Scope = s == null ? $.pointerTarget<Scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Scope>(s)
		let typeSet: globalThis.Map<reflect.Type | null, {}> | null = $.makeMap<reflect.Type | null, {}>()
		for (let [k, __rangeValue] of (s$ as Scope).providers?.entries() ?? []) {
			$.mapSet(typeSet, k.t, {})
		}

		let types: $.Slice<reflect.Type | null> = $.makeSlice<reflect.Type | null>(0, $.len(typeSet))
		for (const [t, __rangeValue] of typeSet?.entries() ?? []) {
			types = $.appendOne(types, t, $.appendZeros.nil)
		}
		await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((types as __goscript_container.byTypeName), "dig.byTypeName", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
		return types
	}

	public newGraphNode(wrapped: any, orders: globalThis.Map<Scope | $.VarRef<Scope> | null, number> | null): void {
		let s: Scope | $.VarRef<Scope> | null = this;
		const s$: Scope = s == null ? $.pointerTarget<Scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Scope>(s)
		$.mapSet(orders, s, __goscript_graph.graphHolder.prototype.NewNode.call((s$ as Scope).gh, wrapped))
		for (let __goscriptRangeTarget16 = (s$ as Scope).childScopes, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow16.length; __rangeIndex++) {
			let cs = (__goscriptRangeWindow16.backing[__goscriptRangeWindow16.offset + __rangeIndex] as Scope | $.VarRef<Scope> | null)
			void (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as Scope).newGraphNode(wrapped, orders) : Scope.prototype.newGraphNode.call(cs, wrapped, orders))
		}
	}

	public async provide(ctor: any, opts: __goscript_provide.provideOptions): globalThis.Promise<$.GoError> {
		let s: Scope | $.VarRef<Scope> | null = this;
		let err: $.GoError = null! as $.GoError
		using __defer = new $.DisposableStack()

		let origScope: Scope | $.VarRef<Scope> | null = s
		if (opts.Exported) {
			s = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).rootScope() : Scope.prototype.rootScope.call(s))
		}

		let allScopes: $.Slice<Scope | $.VarRef<Scope> | null> = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).appendSubscopes(null) : Scope.prototype.appendSubscopes.call(s, null))
		for (let __goscriptRangeTarget17 = allScopes, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow17.length; __rangeIndex++) {
			let s = (__goscriptRangeWindow17.backing[__goscriptRangeWindow17.offset + __rangeIndex] as Scope | $.VarRef<Scope> | null)
			let __goscriptShadow6 = s
			let __goscriptShadow7: Scope | $.VarRef<Scope> | null = __goscriptShadow6
			__goscript_graph.graphHolder.prototype.Snapshot.call($.pointerValue<Scope>(__goscriptShadow7).gh)
			__defer.defer(() => { ((): void => {
				if (err != null) {
					__goscript_graph.graphHolder.prototype.Rollback.call($.pointerValue<Scope>(__goscriptShadow7).gh)
				}
			})() })
		}

		let __goscriptTuple10: any = await __goscript__constructor.newConstructorNode(ctor, s, origScope, new __goscript__constructor.constructorOptions({ResultName: opts.Name, ResultGroup: opts.Group, ResultAs: opts.As, Location: opts.Location, Callback: opts.Callback}, true))
		let n: __goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null = __goscriptTuple10[0]
		err = __goscriptTuple10[1]
		if (err != null) {
			const __goscriptReturn5: $.GoError = err
			err = __goscriptReturn5
			__defer.dispose()
			return err
		}

		let __goscriptTuple11: any = await Scope.prototype.findAndValidateResults.call(s, (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as __goscript__constructor.constructorNode).ResultList() : __goscript__constructor.constructorNode.prototype.ResultList.call(n)))
		let keys: globalThis.Map<__goscript_container.key, {}> | null = __goscriptTuple11[0]
		err = __goscriptTuple11[1]
		if (err != null) {
			const __goscriptReturn6: $.GoError = err
			err = __goscriptReturn6
			__defer.dispose()
			return err
		}

		let ctype = reflect.TypeOf(ctor)
		if ($.len(keys) == 0) {
			const __goscriptReturn7: $.GoError = $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("%v must provide at least one non-error type", (ctype as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")
			err = __goscriptReturn7
			__defer.dispose()
			return err
		}

		let oldProviders: globalThis.Map<__goscript_container.key, $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>> | null = $.makeMap<__goscript_container.key, $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>>()
		for (let [k, __rangeValue] of keys?.entries() ?? []) {

			$.mapSet(oldProviders, (k).clone(), $.mapGet<__goscript_container.key, $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>, $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>>($.pointerValue<Scope>(s).providers, k, null)[0])
			$.mapSet($.pointerValue<Scope>(s).providers, (k).clone(), $.appendOne($.mapGet<__goscript_container.key, $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>, $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>>($.pointerValue<Scope>(s).providers, k, null)[0], n, $.appendZeros.nil))
		}

		for (let __goscriptRangeTarget18 = allScopes, __goscriptRangeWindow18 = $.sliceRange(__goscriptRangeTarget18), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow18.length; __rangeIndex++) {
			let s = (__goscriptRangeWindow18.backing[__goscriptRangeWindow18.offset + __rangeIndex] as Scope | $.VarRef<Scope> | null)
			$.pointerValue<Scope>(s).isVerifiedAcyclic = false
			if ($.pointerValue<Scope>(s).deferAcyclicVerification) {
				continue
			}
			{
				let __goscriptTuple12: any = await graph.IsAcyclic($.interfaceValue<graph.Graph | null>($.pointerValue<Scope>(s).gh, "*dig.graphHolder", /* @__PURE__ */ $.pointerType("dig.graphHolder")))
				let ok = __goscriptTuple12[0]
				let cycle: $.Slice<number> = __goscriptTuple12[1]
				if (!ok) {

					for (let [k, ops] of oldProviders?.entries() ?? []) {
						$.mapSet($.pointerValue<Scope>(s).providers, (k).clone(), ops)
					}

					const __goscriptReturn8: $.GoError = $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput("this function introduces a cycle", (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).cycleDetectedError(cycle) : Scope.prototype.cycleDetectedError.call(s, cycle))), "dig.errInvalidInput", "dig.errInvalidInput")
					err = __goscriptReturn8
					__defer.dispose()
					return err
				}
			}
			$.pointerValue<Scope>(s).isVerifiedAcyclic = true
		}

		$.pointerValue<Scope>(s).nodes = $.appendOne($.pointerValue<Scope>(s).nodes, n, $.appendZeros.nil)

		{
			let info: __goscript_provide.ProvideInfo | $.VarRef<__goscript_provide.ProvideInfo> | null = opts.Info
			if (info != null) {
				let params: $.Slice<dot.Param | $.VarRef<dot.Param> | null> = await $.markAsStructValue($.cloneStructValue((n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as __goscript__constructor.constructorNode).ParamList() : __goscript__constructor.constructorNode.prototype.ParamList.call(n)))).DotParam()
				let results: $.Slice<dot.Result | $.VarRef<dot.Result> | null> = await $.markAsStructValue($.cloneStructValue((n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? ((n as any) as __goscript__constructor.constructorNode).ResultList() : __goscript__constructor.constructorNode.prototype.ResultList.call(n)))).DotResult()

				$.pointerValue<__goscript_provide.ProvideInfo>(info).ID = $.int($.pointerValue<__goscript__constructor.constructorNode>(n).id)
				$.pointerValue<__goscript_provide.ProvideInfo>(info).Inputs = $.makeSlice<__goscript_provide.Input | $.VarRef<__goscript_provide.Input> | null>($.sliceLen(params))
				$.pointerValue<__goscript_provide.ProvideInfo>(info).Outputs = $.makeSlice<__goscript_provide.Output | $.VarRef<__goscript_provide.Output> | null>($.sliceLen(results))

				for (let __goscriptRangeTarget19 = params, __goscriptRangeWindow19 = $.sliceRange(__goscriptRangeTarget19), i = 0; i < __goscriptRangeWindow19.length; i++) {
					let param = (__goscriptRangeWindow19.backing[__goscriptRangeWindow19.offset + i] as dot.Param | $.VarRef<dot.Param> | null)
					$.sliceElems($.pointerValue<__goscript_provide.ProvideInfo>(info).Inputs!)[$.sliceSlot($.pointerValue<__goscript_provide.ProvideInfo>(info).Inputs!, i)] = new __goscript_provide.Input({t: $.pointerValue<dot.Node>($.pointerValue<dot.Param>(param).Node).Type, optional: $.pointerValue<dot.Param>(param).Optional, name: $.pointerValue<dot.Node>($.pointerValue<dot.Param>(param).Node).Name, group: $.pointerValue<dot.Node>($.pointerValue<dot.Param>(param).Node).Group})
				}

				for (let __goscriptRangeTarget20 = results, __goscriptRangeWindow20 = $.sliceRange(__goscriptRangeTarget20), i = 0; i < __goscriptRangeWindow20.length; i++) {
					let res = (__goscriptRangeWindow20.backing[__goscriptRangeWindow20.offset + i] as dot.Result | $.VarRef<dot.Result> | null)
					$.sliceElems($.pointerValue<__goscript_provide.ProvideInfo>(info).Outputs!)[$.sliceSlot($.pointerValue<__goscript_provide.ProvideInfo>(info).Outputs!, i)] = new __goscript_provide.Output({t: $.pointerValue<dot.Node>($.pointerValue<dot.Result>(res).Node).Type, name: $.pointerValue<dot.Node>($.pointerValue<dot.Result>(res).Node).Name, group: $.pointerValue<dot.Node>($.pointerValue<dot.Result>(res).Node).Group})
				}
			}
		}
		const __goscriptReturn9: $.GoError = null
		err = __goscriptReturn9
		__defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	public rootScope(): Scope | $.VarRef<Scope> | null {
		const s: Scope | $.VarRef<Scope> | null = this;
		let curr: Scope | $.VarRef<Scope> | null = s
		while ($.pointerValue<Scope>(curr).parentScope != null) {
			curr = $.pointerValue<Scope>(curr).parentScope
		}
		return curr
	}

	public setDecoratedValue(name: string, t: reflect.Type | null, v: reflect.Value): void {
		let s: Scope | $.VarRef<Scope> | null = this;
		$.mapSet($.pointerValue<Scope>(s).decoratedValues, new __goscript_container.key({name: name, t: t}, true), $.markAsStructValue($.cloneStructValue(v)))
	}

	public setValue(name: string, t: reflect.Type | null, v: reflect.Value): void {
		let s: Scope | $.VarRef<Scope> | null = this;
		$.mapSet($.pointerValue<Scope>(s).values, new __goscript_container.key({name: name, t: t}, true), $.markAsStructValue($.cloneStructValue(v)))
	}

	public storesToRoot(): $.Slice<__goscript_container.containerStore | null> {
		const s: Scope | $.VarRef<Scope> | null = this;
		let scopes: $.Slice<Scope | $.VarRef<Scope> | null> = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as Scope).ancestors() : Scope.prototype.ancestors.call(s))
		let stores: $.Slice<__goscript_container.containerStore | null> = $.makeSlice<__goscript_container.containerStore | null>($.sliceLen(scopes))
		for (let __goscriptRangeTarget21 = scopes, __goscriptRangeWindow21 = $.sliceRange(__goscriptRangeTarget21), __goscriptSliceWindow1 = $.sliceRange(stores), i = 0; i < __goscriptRangeWindow21.length; i++) {
			let s = (__goscriptRangeWindow21.backing[__goscriptRangeWindow21.offset + i] as Scope | $.VarRef<Scope> | null);
			;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = $.interfaceValue<__goscript_container.containerStore | null>(s, "*dig.Scope", /* @__PURE__ */ $.pointerType("dig.Scope"))
		}
		return stores
	}

	public submitDecoratedGroupedValue(name: string, t: reflect.Type | null, v: reflect.Value): void {
		let s: Scope | $.VarRef<Scope> | null = this;
		let k = new __goscript_container.key({group: name, t: t}, true)
		$.mapSet($.pointerValue<Scope>(s).decoratedGroups, (k).clone(), $.markAsStructValue($.cloneStructValue(v)))
	}

	public submitGroupedValue(name: string, t: reflect.Type | null, v: reflect.Value): void {
		let s: Scope | $.VarRef<Scope> | null = this;
		const s$: Scope = s == null ? $.pointerTarget<Scope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Scope>(s)
		let k = new __goscript_container.key({group: name, t: t}, true)
		$.mapSet((s$ as Scope).groups, (k).clone(), $.appendOne($.mapGet<__goscript_container.key, $.Slice<reflect.Value>, $.Slice<reflect.Value>>((s$ as Scope).groups, k, null)[0], $.markAsStructValue($.cloneStructValue(v))))
	}

	static __typeInfo = $.registerStructType(
		"dig.Scope",
		() => new Scope(),
		() => [$.methodSignature("Decorate", [["decorator", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType("dig.DecorateOption")]], ["error"], true), $.methodSignature("Invoke", [["function", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType("dig.InvokeOption")]], [["err", "error"]], true), $.methodSignature("Provide", [["constructor", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType("dig.ProvideOption")]], ["error"], true), $.methodSignature("Scope", [["name", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.sliceType("dig.ScopeOption")]], [/* @__PURE__ */ $.pointerType("dig.Scope")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ancestors", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dig.Scope"))], true), $.methodSignature("appendSubscopes", [["dest", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dig.Scope"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dig.Scope"))], true), $.methodSignature("createGraph", [], [/* @__PURE__ */ $.pointerType("dot.Graph")], true), $.methodSignature("cycleDetectedError", [["cycle", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], ["error"], true), $.methodSignature("findAndValidateResults", [["rl", "dig.resultList"]], [/* @__PURE__ */ $.mapType("dig.key", { kind: $.TypeKind.Struct, methods: [], fields: [] }), "error"], true), $.methodSignature("getAllGroupProviders", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], [/* @__PURE__ */ $.sliceType("dig.provider")], true), $.methodSignature("getAllProviders", [["k", "dig.key"]], [/* @__PURE__ */ $.sliceType("dig.provider")], true), $.methodSignature("getAllValueProviders", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], [/* @__PURE__ */ $.sliceType("dig.provider")], true), $.methodSignature("getDecoratedValue", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], [["v", "reflect.Value"], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("getDecoratedValueGroup", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], ["reflect.Value", /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getDecorators", [["k", "dig.key"]], ["dig.decorator", /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getGroupDecorator", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], ["dig.decorator", /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getGroupProviders", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], [/* @__PURE__ */ $.sliceType("dig.provider")], true), $.methodSignature("getProviders", [["k", "dig.key"]], [/* @__PURE__ */ $.sliceType("dig.provider")], true), $.methodSignature("getValue", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], [["v", "reflect.Value"], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("getValueDecorator", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], ["dig.decorator", /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getValueGroup", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], [/* @__PURE__ */ $.sliceType("reflect.Value")], true), $.methodSignature("getValueProviders", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], [/* @__PURE__ */ $.sliceType("dig.provider")], true), $.methodSignature("invoker", [], [({ kind: $.TypeKind.Function, name: "dig.invokerFn", params: ["reflect.Value", /* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)], true), $.methodSignature("knownTypes", [], [/* @__PURE__ */ $.sliceType("reflect.Type")], true), $.methodSignature("newGraphNode", [["wrapped", { kind: $.TypeKind.Interface, methods: [] }], ["orders", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("dig.Scope"), /* @__PURE__ */ $.basicType("int"))]], [], true), $.methodSignature("provide", [["ctor", { kind: $.TypeKind.Interface, methods: [] }], ["opts", "dig.provideOptions"]], [["err", "error"]], true), $.methodSignature("rootScope", [], [/* @__PURE__ */ $.pointerType("dig.Scope")], true), $.methodSignature("setDecoratedValue", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"], ["v", "reflect.Value"]], [], true), $.methodSignature("setValue", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"], ["v", "reflect.Value"]], [], true), $.methodSignature("storesToRoot", [], [/* @__PURE__ */ $.sliceType("dig.containerStore")], true), $.methodSignature("submitDecoratedGroupedValue", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"], ["v", "reflect.Value"]], [], true), $.methodSignature("submitGroupedValue", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"], ["v", "reflect.Value"]], [], true)],
		Scope,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("providers", /* @__PURE__ */ $.mapType("dig.key", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dig.constructorNode"))), [1], 16, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("decorators", /* @__PURE__ */ $.mapType("dig.key", /* @__PURE__ */ $.pointerType("dig.decoratorNode")), [2], 24, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("nodes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dig.constructorNode")), [3], 32, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("decoratedValues", /* @__PURE__ */ $.mapType("dig.key", "reflect.Value"), [4], 56, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("values", /* @__PURE__ */ $.mapType("dig.key", "reflect.Value"), [5], 64, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("groups", /* @__PURE__ */ $.mapType("dig.key", /* @__PURE__ */ $.sliceType("reflect.Value")), [6], 72, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("decoratedGroups", /* @__PURE__ */ $.mapType("dig.key", "reflect.Value"), [7], 80, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("rand", /* @__PURE__ */ $.pointerType("rand.Rand"), [8], 88, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("isVerifiedAcyclic", /* @__PURE__ */ $.basicType("bool"), [9], 96, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("deferAcyclicVerification", /* @__PURE__ */ $.basicType("bool"), [10], 97, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("recoverFromPanics", /* @__PURE__ */ $.basicType("bool"), [11], 98, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("invokerFn", ({ kind: $.TypeKind.Function, name: "dig.invokerFn", params: ["reflect.Value", /* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo), [12], 104, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("gh", /* @__PURE__ */ $.pointerType("dig.graphHolder"), [13], 112, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("parentScope", /* @__PURE__ */ $.pointerType("dig.Scope"), [14], 120, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("childScopes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dig.Scope")), [15], 128, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export function newScope(): Scope | $.VarRef<Scope> | null {
	let s: Scope | $.VarRef<Scope> | null = (() => { const __goscriptLiteralField5 = rand2.New(rand2.NewSource($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano())); return new Scope({providers: $.makeMap<__goscript_container.key, $.Slice<__goscript__constructor.constructorNode | $.VarRef<__goscript__constructor.constructorNode> | null>>(), decorators: $.makeMap<__goscript_container.key, __goscript_decorate.decoratorNode | $.VarRef<__goscript_decorate.decoratorNode> | null>(), values: $.makeMap<__goscript_container.key, reflect.Value>(), decoratedValues: $.makeMap<__goscript_container.key, reflect.Value>(), groups: $.makeMap<__goscript_container.key, $.Slice<reflect.Value>>(), decoratedGroups: $.makeMap<__goscript_container.key, reflect.Value>(), invokerFn: __goscript_container.defaultInvoker, rand: __goscriptLiteralField5}) })()
	$.pointerValue<Scope>(s).gh = __goscript_graph.newGraphHolder(s)
	return s
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (__goscript_container.byTypeName_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (__goscript_container.byTypeName_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (__goscript_container.byTypeName_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("reflect.Type", "dig.byTypeName"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptAwait: any
