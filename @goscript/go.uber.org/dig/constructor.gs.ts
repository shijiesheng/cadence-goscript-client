// Generated file based on constructor.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as digerror from "@goscript/go.uber.org/dig/internal/digerror/index.js"

import * as digreflect from "@goscript/go.uber.org/dig/internal/digreflect/index.js"

import * as dot from "@goscript/go.uber.org/dig/internal/dot/index.js"

import type * as io from "@goscript/io/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as __goscript_callback from "./callback.gs.ts"

import * as __goscript_container from "./container.gs.ts"

import * as __goscript_decorate from "./decorate.gs.ts"

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
import "@goscript/go.uber.org/dig/internal/digerror/index.js"
import "@goscript/go.uber.org/dig/internal/digreflect/index.js"
import "@goscript/go.uber.org/dig/internal/dot/index.js"
import "@goscript/math/rand/index.js"
import "./callback.gs.ts"
import "./container.gs.ts"
import "./decorate.gs.ts"
import "./error.gs.ts"
import "./graph.gs.ts"
import "./invoke.gs.ts"
import "./param.gs.ts"
import "./provide.gs.ts"
import "./result.gs.ts"
import "./scope.gs.ts"
import "./visualize.gs.ts"

$.registerTypePackagePath("go.uber.org/dig", ["dig.constructorNode", "dig.constructorOptions", "dig.stagingContainerWriter"])

export class constructorNode {
	public get ctor(): any {
		return this._fields.ctor
	}

	public set ctor(value: any) {
		this._fields.ctor = value
	}

	public get ctype(): reflect.Type | null {
		return this._fields.ctype
	}

	public set ctype(value: reflect.Type | null) {
		this._fields.ctype = value
	}

	// Location where this function was defined.
	public get location(): digreflect.Func | $.VarRef<digreflect.Func> | null {
		return this._fields.location
	}

	public set location(value: digreflect.Func | $.VarRef<digreflect.Func> | null) {
		this._fields.location = value
	}

	// id uniquely identifies the constructor that produces a node.
	public get id(): dot.CtorID {
		return this._fields.id
	}

	public set id(value: dot.CtorID) {
		this._fields.id = value
	}

	// Whether the constructor owned by this node was already called.
	public get called(): boolean {
		return this._fields.called
	}

	public set called(value: boolean) {
		this._fields.called = value
	}

	// Type information about constructor parameters.
	public get paramList(): __goscript_param.paramList {
		return this._fields.paramList
	}

	public set paramList(value: __goscript_param.paramList) {
		this._fields.paramList = value
	}

	// Type information about constructor results.
	public get resultList(): __goscript_result.resultList {
		return this._fields.resultList
	}

	public set resultList(value: __goscript_result.resultList) {
		this._fields.resultList = value
	}

	// Order of this node in each Scopes' graphHolders.
	public get orders(): globalThis.Map<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number> | null {
		return this._fields.orders
	}

	public set orders(value: globalThis.Map<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number> | null) {
		this._fields.orders = value
	}

	// Scope this node is part of.
	public get s(): __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null {
		return this._fields.s
	}

	public set s(value: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null) {
		this._fields.s = value
	}

	// Scope this node was originally provided to.
	// This is different from s if and only if the constructor was Provided with ExportOption.
	public get origS(): __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null {
		return this._fields.origS
	}

	public set origS(value: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null) {
		this._fields.origS = value
	}

	// Callback for this provided function, if there is one.
	public get callback(): ((_p0: __goscript_callback.CallbackInfo) => void) | null {
		return this._fields.callback
	}

	public set callback(value: ((_p0: __goscript_callback.CallbackInfo) => void) | null) {
		this._fields.callback = value
	}

	public _fields: {
		ctor: any
		ctype: reflect.Type | null
		location: digreflect.Func | $.VarRef<digreflect.Func> | null
		id: dot.CtorID
		called: boolean
		paramList: __goscript_param.paramList
		resultList: __goscript_result.resultList
		orders: globalThis.Map<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number> | null
		s: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null
		origS: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null
		callback: ((_p0: __goscript_callback.CallbackInfo) => void) | null
	}

	constructor(init?: Partial<{ctor?: any, ctype?: reflect.Type | null, location?: digreflect.Func | $.VarRef<digreflect.Func> | null, id?: dot.CtorID, called?: boolean, paramList?: __goscript_param.paramList, resultList?: __goscript_result.resultList, orders?: globalThis.Map<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number> | null, s?: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, origS?: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, callback?: ((_p0: __goscript_callback.CallbackInfo) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ctor: init?.ctor ?? (null! as any),
			ctype: init?.ctype ?? (null! as reflect.Type | null),
			location: init?.location ?? (null! as digreflect.Func | $.VarRef<digreflect.Func> | null),
			id: init?.id ?? (0 as dot.CtorID),
			called: init?.called ?? (false as boolean),
			paramList: init?.paramList ? init.paramList.clone() : new __goscript_param.paramList(undefined, true),
			resultList: init?.resultList ? init.resultList.clone() : new __goscript_result.resultList(undefined, true),
			orders: init?.orders ?? (null! as globalThis.Map<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number> | null),
			s: init?.s ?? (null! as __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null),
			origS: init?.origS ?? (null! as __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null),
			callback: init?.callback ?? (null! as ((_p0: __goscript_callback.CallbackInfo) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): constructorNode {
		return new constructorNode(this, true)
	}

	public __goscriptAssign(source: constructorNode): void {
		const target = this._fields
		const values = source._fields
		target.ctor = $.assignFieldValue(target.ctor, values.ctor, { kind: $.TypeKind.Interface, methods: [] })
		target.ctype = $.assignFieldValue(target.ctype, values.ctype, "reflect.Type")
		target.location = values.location
		target.id = values.id
		target.called = values.called
		$.assignStruct(target.paramList, values.paramList)
		$.assignStruct(target.resultList, values.resultList)
		target.orders = values.orders
		target.s = values.s
		target.origS = values.origS
		target.callback = values.callback
	}

	public CType(): reflect.Type | null {
		const n: constructorNode | $.VarRef<constructorNode> | null = this;
		return $.pointerValue<constructorNode>(n).ctype
	}

	public async Call(c: __goscript_container.containerStore | null): globalThis.Promise<$.GoError> {
		let n: constructorNode | $.VarRef<constructorNode> | null = this;
		let err: $.GoError = null! as $.GoError
		const __defer = new $.AsyncDisposableStack()
		try {
			const n$: constructorNode = n == null ? $.pointerTarget<constructorNode>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<constructorNode>(n)
			if ((n$ as constructorNode).called) {
				return null
			}

			{
				let __goscriptShadow0 = await __goscript_invoke.shallowCheckDependencies(c, ((n$ as constructorNode).paramList).clone())
				if (__goscriptShadow0 != null) {
					return $.interfaceValue<$.GoError>(new __goscript_error.errMissingDependencies({Func: (n$ as constructorNode).location, Reason: __goscriptShadow0}, true), "dig.errMissingDependencies", "dig.errMissingDependencies")
				}
			}

			let __goscriptTuple0: any = await $.markAsStructValue($.cloneStructValue((n$ as constructorNode).paramList)).BuildList(c)
			let args: $.Slice<reflect.Value> = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			if (err != null) {
				return $.interfaceValue<$.GoError>(new __goscript_error.errArgumentsFailed({Func: (n$ as constructorNode).location, Reason: err}, true), "dig.errArgumentsFailed", "dig.errArgumentsFailed")
			}

			if ((n$ as constructorNode).callback != null) {
				// Wrap in separate func to include PanicErrors
				__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
					await (n$ as constructorNode).callback!((await (async () => { const __goscriptLiteralField0 = await fmt.Sprintf("%v.%v", $.pointerValue<digreflect.Func>((n$ as constructorNode).location).Package, $.pointerValue<digreflect.Func>((n$ as constructorNode).location).Name); return new __goscript_callback.CallbackInfo({Name: __goscriptLiteralField0, Error: err}, true) })()))
				})() })
			}

			if ($.pointerValue<__goscript_scope.Scope>((n$ as constructorNode).s).recoverFromPanics) {
				__defer.defer(() => { ((): void => {
					{
						let p = $.recover()
						if (p != null) {
							err = $.interfaceValue<$.GoError>(new __goscript_error.PanicError({fn: (n$ as constructorNode).location, Panic: p}, true), "dig.PanicError", "dig.PanicError")
						}
					}
				})() })
			}

			let receiver: stagingContainerWriter | $.VarRef<stagingContainerWriter> | null = newStagingContainerWriter()
			let results: $.Slice<reflect.Value> = ((__goscriptAwait = ((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(c)).invoker(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_container.invokerFn | null)!($.markAsStructValue($.cloneStructValue(reflect.ValueOf((n$ as constructorNode).ctor))), args), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<reflect.Value>)
			{
				err = await $.markAsStructValue($.cloneStructValue((n$ as constructorNode).resultList)).ExtractList($.interfaceValue<__goscript_container.containerWriter | null>(receiver, "*dig.stagingContainerWriter", /* @__PURE__ */ $.pointerType("dig.stagingContainerWriter")), false, results)
				if (err != null) {
					const __goscriptReturn0: $.GoError = $.interfaceValue<$.GoError>(new __goscript_error.errConstructorFailed({Func: (n$ as constructorNode).location, Reason: err}, true), "dig.errConstructorFailed", "dig.errConstructorFailed")
					err = __goscriptReturn0
					await __defer.dispose()
					return err
				}
			}

			// Commit the result to the original container that this constructor
			// was supplied to. The provided constructor is only used for a view of
			// the rest of the graph to instantiate the dependencies of this
			// container.
			stagingContainerWriter.prototype.Commit.call(receiver, $.interfaceValue<__goscript_container.containerWriter | null>((n$ as constructorNode).s, "*dig.Scope", /* @__PURE__ */ $.pointerType("dig.Scope")));
			;(n$ as constructorNode).called = true
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

	public CopyOrder(parent: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, child: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null): void {
		let n: constructorNode | $.VarRef<constructorNode> | null = this;
		const n$: constructorNode = n == null ? $.pointerTarget<constructorNode>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<constructorNode>(n)
		$.mapSet((n$ as constructorNode).orders, child, $.mapGet<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number, number>((n$ as constructorNode).orders, parent, 0)[0])
	}

	public ID(): dot.CtorID {
		const n: constructorNode | $.VarRef<constructorNode> | null = this;
		return $.pointerValue<constructorNode>(n).id
	}

	public Location(): digreflect.Func | $.VarRef<digreflect.Func> | null {
		const n: constructorNode | $.VarRef<constructorNode> | null = this;
		return $.pointerValue<constructorNode>(n).location
	}

	public Order(s: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null): number {
		const n: constructorNode | $.VarRef<constructorNode> | null = this;
		return $.mapGet<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number, number>($.pointerValue<constructorNode>(n).orders, s, 0)[0]
	}

	public OrigScope(): __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null {
		const n: constructorNode | $.VarRef<constructorNode> | null = this;
		return $.pointerValue<constructorNode>(n).origS
	}

	public ParamList(): __goscript_param.paramList {
		const n: constructorNode | $.VarRef<constructorNode> | null = this;
		return ($.pointerValue<constructorNode>(n).paramList).clone()
	}

	public ResultList(): __goscript_result.resultList {
		const n: constructorNode | $.VarRef<constructorNode> | null = this;
		return ($.pointerValue<constructorNode>(n).resultList).clone()
	}

	public async String(): globalThis.Promise<string> {
		const n: constructorNode | $.VarRef<constructorNode> | null = this;
		const n$: constructorNode = n == null ? $.pointerTarget<constructorNode>(n) : (n as any).__isVarRef === true ? (n as any).value : (n as any).__goValue === undefined ? (n as any) : $.pointerTarget<constructorNode>(n)
		return fmt.Sprintf("deps: %v, ctor: %v", $.interfaceValue(((n$ as constructorNode).paramList).clone(), "dig.paramList", "dig.paramList"), ((n$ as constructorNode).ctype as any))
	}

	static __typeInfo = $.registerStructType(
		"dig.constructorNode",
		() => new constructorNode(),
		() => [$.methodSignature("CType", [], ["reflect.Type"], true), $.methodSignature("Call", [["c", "dig.containerStore"]], [["err", "error"]], true), $.methodSignature("CopyOrder", [["parent", /* @__PURE__ */ $.pointerType("dig.Scope")], ["child", /* @__PURE__ */ $.pointerType("dig.Scope")]], [], true), $.methodSignature("ID", [], [/* @__PURE__ */ $.basicType("uintptr", "dot.CtorID")], true), $.methodSignature("Location", [], [/* @__PURE__ */ $.pointerType("digreflect.Func")], true), $.methodSignature("Order", [["s", /* @__PURE__ */ $.pointerType("dig.Scope")]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("OrigScope", [], [/* @__PURE__ */ $.pointerType("dig.Scope")], true), $.methodSignature("ParamList", [], ["dig.paramList"], true), $.methodSignature("ResultList", [], ["dig.resultList"], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		constructorNode,
		() => [/* @__PURE__ */ $.structField("ctor", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("ctype", "reflect.Type", [1], 16, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("location", /* @__PURE__ */ $.pointerType("digreflect.Func"), [2], 32, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uintptr", "dot.CtorID"), [3], 40, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("called", /* @__PURE__ */ $.basicType("bool"), [4], 48, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("paramList", "dig.paramList", [5], 56, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("resultList", "dig.resultList", [6], 96, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("orders", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("dig.Scope"), /* @__PURE__ */ $.basicType("int")), [7], 160, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.pointerType("dig.Scope"), [8], 168, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("origS", /* @__PURE__ */ $.pointerType("dig.Scope"), [9], 176, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("callback", ({ kind: $.TypeKind.Function, name: "dig.Callback", params: ["dig.CallbackInfo"], results: [] } as $.FunctionTypeInfo), [10], 184, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export class constructorOptions {
	// If specified, all values produced by this constructor have the provided name
	// belong to the specified value group or implement any of the interfaces.
	public get ResultName(): string {
		return this._fields.ResultName
	}

	public set ResultName(value: string) {
		this._fields.ResultName = value
	}

	public get ResultGroup(): string {
		return this._fields.ResultGroup
	}

	public set ResultGroup(value: string) {
		this._fields.ResultGroup = value
	}

	public get ResultAs(): $.Slice<any> {
		return this._fields.ResultAs
	}

	public set ResultAs(value: $.Slice<any>) {
		this._fields.ResultAs = value
	}

	public get Location(): digreflect.Func | $.VarRef<digreflect.Func> | null {
		return this._fields.Location
	}

	public set Location(value: digreflect.Func | $.VarRef<digreflect.Func> | null) {
		this._fields.Location = value
	}

	public get Callback(): ((_p0: __goscript_callback.CallbackInfo) => void) | null {
		return this._fields.Callback
	}

	public set Callback(value: ((_p0: __goscript_callback.CallbackInfo) => void) | null) {
		this._fields.Callback = value
	}

	public _fields: {
		ResultName: string
		ResultGroup: string
		ResultAs: $.Slice<any>
		Location: digreflect.Func | $.VarRef<digreflect.Func> | null
		Callback: ((_p0: __goscript_callback.CallbackInfo) => void) | null
	}

	constructor(init?: Partial<{ResultName?: string, ResultGroup?: string, ResultAs?: $.Slice<any>, Location?: digreflect.Func | $.VarRef<digreflect.Func> | null, Callback?: ((_p0: __goscript_callback.CallbackInfo) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ResultName: init?.ResultName ?? ("" as string),
			ResultGroup: init?.ResultGroup ?? ("" as string),
			ResultAs: init?.ResultAs ?? (null! as $.Slice<any>),
			Location: init?.Location ?? (null! as digreflect.Func | $.VarRef<digreflect.Func> | null),
			Callback: init?.Callback ?? (null! as ((_p0: __goscript_callback.CallbackInfo) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): constructorOptions {
		return new constructorOptions(this, true)
	}

	public __goscriptAssign(source: constructorOptions): void {
		const target = this._fields
		const values = source._fields
		target.ResultName = values.ResultName
		target.ResultGroup = values.ResultGroup
		target.ResultAs = values.ResultAs
		target.Location = values.Location
		target.Callback = values.Callback
	}

	static __typeInfo = $.registerStructType(
		"dig.constructorOptions",
		() => new constructorOptions(),
		() => [],
		constructorOptions,
		() => [/* @__PURE__ */ $.structField("ResultName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("ResultGroup", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("ResultAs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [2], 32, true), /* @__PURE__ */ $.structField("Location", /* @__PURE__ */ $.pointerType("digreflect.Func"), [3], 56, true), /* @__PURE__ */ $.structField("Callback", ({ kind: $.TypeKind.Function, name: "dig.Callback", params: ["dig.CallbackInfo"], results: [] } as $.FunctionTypeInfo), [4], 64, true)]
	)
}

export class stagingContainerWriter {
	public get values(): globalThis.Map<__goscript_container.key, reflect.Value> | null {
		return this._fields.values
	}

	public set values(value: globalThis.Map<__goscript_container.key, reflect.Value> | null) {
		this._fields.values = value
	}

	public get groups(): globalThis.Map<__goscript_container.key, $.Slice<reflect.Value>> | null {
		return this._fields.groups
	}

	public set groups(value: globalThis.Map<__goscript_container.key, $.Slice<reflect.Value>> | null) {
		this._fields.groups = value
	}

	public _fields: {
		values: globalThis.Map<__goscript_container.key, reflect.Value> | null
		groups: globalThis.Map<__goscript_container.key, $.Slice<reflect.Value>> | null
	}

	constructor(init?: Partial<{values?: globalThis.Map<__goscript_container.key, reflect.Value> | null, groups?: globalThis.Map<__goscript_container.key, $.Slice<reflect.Value>> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			values: init?.values ?? (null! as globalThis.Map<__goscript_container.key, reflect.Value> | null),
			groups: init?.groups ?? (null! as globalThis.Map<__goscript_container.key, $.Slice<reflect.Value>> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): stagingContainerWriter {
		return new stagingContainerWriter(this, true)
	}

	public __goscriptAssign(source: stagingContainerWriter): void {
		const target = this._fields
		const values = source._fields
		target.values = values.values
		target.groups = values.groups
	}

	public Commit(cw: __goscript_container.containerWriter | null): void {
		const sr: stagingContainerWriter | $.VarRef<stagingContainerWriter> | null = this;
		const sr$: stagingContainerWriter = sr == null ? $.pointerTarget<stagingContainerWriter>(sr) : (sr as any).__isVarRef === true ? (sr as any).value : (sr as any).__goValue === undefined ? (sr as any) : $.pointerTarget<stagingContainerWriter>(sr)
		for (const [k, v] of (sr$ as stagingContainerWriter).values?.entries() ?? []) {
			void (cw !== null && (cw as any).__isVarRef !== true && (cw as any).__goValue === undefined ? (cw as Exclude<__goscript_container.containerWriter, null>) : $.pointerValue<Exclude<__goscript_container.containerWriter, null>>(cw)).setValue(k.name, k.t, $.markAsStructValue($.cloneStructValue(v)))
		}

		for (const [k, vs] of (sr$ as stagingContainerWriter).groups?.entries() ?? []) {
			for (let __goscriptRangeTarget0 = vs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let v = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as reflect.Value)))
				void (cw !== null && (cw as any).__isVarRef !== true && (cw as any).__goValue === undefined ? (cw as Exclude<__goscript_container.containerWriter, null>) : $.pointerValue<Exclude<__goscript_container.containerWriter, null>>(cw)).submitGroupedValue(k.group, k.t, $.markAsStructValue($.cloneStructValue(v)))
			}
		}
	}

	public async setDecoratedValue(_p0: string, _p1: reflect.Type | null, _p2: reflect.Value): globalThis.Promise<void> {
		const sr: stagingContainerWriter | $.VarRef<stagingContainerWriter> | null = this;
		await digerror.BugPanicf("stagingContainerWriter.setDecoratedValue must never be called", null)
	}

	public setValue(name: string, t: reflect.Type | null, v: reflect.Value): void {
		let sr: stagingContainerWriter | $.VarRef<stagingContainerWriter> | null = this;
		$.mapSet($.pointerValue<stagingContainerWriter>(sr).values, new __goscript_container.key({t: t, name: name}, true), $.markAsStructValue($.cloneStructValue(v)))
	}

	public async submitDecoratedGroupedValue(_p0: string, _p1: reflect.Type | null, _p2: reflect.Value): globalThis.Promise<void> {
		const sr: stagingContainerWriter | $.VarRef<stagingContainerWriter> | null = this;
		await digerror.BugPanicf("stagingContainerWriter.submitDecoratedGroupedValue must never be called", null)
	}

	public submitGroupedValue(group: string, t: reflect.Type | null, v: reflect.Value): void {
		let sr: stagingContainerWriter | $.VarRef<stagingContainerWriter> | null = this;
		const sr$: stagingContainerWriter = sr == null ? $.pointerTarget<stagingContainerWriter>(sr) : (sr as any).__isVarRef === true ? (sr as any).value : (sr as any).__goValue === undefined ? (sr as any) : $.pointerTarget<stagingContainerWriter>(sr)
		let k = new __goscript_container.key({t: t, group: group}, true)
		$.mapSet((sr$ as stagingContainerWriter).groups, (k).clone(), $.appendOne($.mapGet<__goscript_container.key, $.Slice<reflect.Value>, $.Slice<reflect.Value>>((sr$ as stagingContainerWriter).groups, k, null)[0], $.markAsStructValue($.cloneStructValue(v))))
	}

	static __typeInfo = $.registerStructType(
		"dig.stagingContainerWriter",
		() => new stagingContainerWriter(),
		() => [$.methodSignature("Commit", [["cw", "dig.containerWriter"]], [], true), $.methodSignature("setDecoratedValue", [["_", /* @__PURE__ */ $.basicType("string")], ["_", "reflect.Type"], ["_", "reflect.Value"]], [], true), $.methodSignature("setValue", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"], ["v", "reflect.Value"]], [], true), $.methodSignature("submitDecoratedGroupedValue", [["_", /* @__PURE__ */ $.basicType("string")], ["_", "reflect.Type"], ["_", "reflect.Value"]], [], true), $.methodSignature("submitGroupedValue", [["group", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"], ["v", "reflect.Value"]], [], true)],
		stagingContainerWriter,
		() => [/* @__PURE__ */ $.structField("values", /* @__PURE__ */ $.mapType("dig.key", "reflect.Value"), [0], 0, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("groups", /* @__PURE__ */ $.mapType("dig.key", /* @__PURE__ */ $.sliceType("reflect.Value")), [1], 8, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export async function newConstructorNode(ctor: any, s: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, origS: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, opts: constructorOptions): globalThis.Promise<[constructorNode | $.VarRef<constructorNode> | null, $.GoError]> {
	let cval = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(ctor)))
	let ctype = $.markAsStructValue($.cloneStructValue(cval)).Type()
	let cptr = $.markAsStructValue($.cloneStructValue(cval)).Pointer()

	let [params, err] = await __goscript_param.newParamList(ctype, $.interfaceValue<__goscript_container.containerStore | null>(s, "*dig.Scope", /* @__PURE__ */ $.pointerType("dig.Scope")))
	if (err != null) {
		return [null, err]
	}

	let __goscriptTuple1: any = await __goscript_result.newResultList(ctype, new __goscript_result.resultOptions({Name: opts.ResultName, Group: opts.ResultGroup, As: opts.ResultAs}, true))
	let results = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return [null, err]
	}

	let location: digreflect.Func | $.VarRef<digreflect.Func> | null = opts.Location
	if (location == null) {
		location = digreflect.InspectFunc(ctor)
	}

	let n: constructorNode | $.VarRef<constructorNode> | null = new constructorNode({ctor: ctor, ctype: ctype, location: location, id: $.uint(cptr, 64), paramList: params, resultList: results, orders: $.makeMap<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number>(undefined, /* @__PURE__ */ $.pointerType("dig.Scope")), s: s, origS: origS, callback: opts.Callback})
	__goscript_scope.Scope.prototype.newGraphNode.call(s, $.interfaceValue(n, "*dig.constructorNode", /* @__PURE__ */ $.pointerType("dig.constructorNode")), $.pointerValue<constructorNode>(n).orders)
	return [n, null]
}

export function newStagingContainerWriter(): stagingContainerWriter | $.VarRef<stagingContainerWriter> | null {
	return new stagingContainerWriter({values: $.makeMap<__goscript_container.key, reflect.Value>(), groups: $.makeMap<__goscript_container.key, $.Slice<reflect.Value>>()})
}

var __goscriptAwait: any
