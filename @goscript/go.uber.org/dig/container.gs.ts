// Generated file based on container.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as rand2 from "@goscript/math/rand/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as dot from "@goscript/go.uber.org/dig/internal/dot/index.js"

import * as digreflect from "@goscript/go.uber.org/dig/internal/digreflect/index.js"

import * as graph from "@goscript/go.uber.org/dig/internal/graph/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as strings from "@goscript/strings/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as template from "@goscript/text/template/index.js"

import * as __goscript__constructor from "./constructor.gs.ts"

import * as __goscript_callback from "./callback.gs.ts"

import * as __goscript_decorate from "./decorate.gs.ts"

import * as __goscript_graph from "./graph.gs.ts"

import * as __goscript_invoke from "./invoke.gs.ts"

import * as __goscript_param from "./param.gs.ts"

import * as __goscript_provide from "./provide.gs.ts"

import * as __goscript_result from "./result.gs.ts"

import * as __goscript_scope from "./scope.gs.ts"

import * as __goscript_visualize from "./visualize.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/reflect/index.js"
import "@goscript/go.uber.org/dig/internal/dot/index.js"
import "@goscript/go.uber.org/dig/internal/digreflect/index.js"
import "@goscript/go.uber.org/dig/internal/graph/index.js"
import "@goscript/bytes/index.js"
import "@goscript/strings/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/strconv/index.js"
import "@goscript/text/template/index.js"
import "./constructor.gs.ts"
import "./callback.gs.ts"
import "./decorate.gs.ts"
import "./graph.gs.ts"
import "./invoke.gs.ts"
import "./param.gs.ts"
import "./provide.gs.ts"
import "./result.gs.ts"
import "./scope.gs.ts"
import "./visualize.gs.ts"

$.registerTypePackagePath("go.uber.org/dig", ["dig.key", "dig.Option", "dig.Container", "dig.containerWriter", "dig.containerStore", "dig.deferAcyclicVerificationOption", "dig.recoverFromPanicsOption", "dig.setRandOption", "dig.dryRunOption", "dig.invokerFn", "dig.byTypeName"])

export type Option = {
	applyOption(_p0: Container | $.VarRef<Container> | null): void
}

$.registerInterfaceType(
	"dig.Option",
	null,
	[$.methodSignature("applyOption", [/* @__PURE__ */ $.pointerType("dig.Container")])]
);

export type containerWriter = {
	setDecoratedValue(name: string, t: reflect.Type | null, v: reflect.Value): void
	setValue(name: string, t: reflect.Type | null, v: reflect.Value): void
	submitDecoratedGroupedValue(name: string, t: reflect.Type | null, v: reflect.Value): void
	submitGroupedValue(name: string, t: reflect.Type | null, v: reflect.Value): void
}

$.registerInterfaceType(
	"dig.containerWriter",
	null,
	[$.methodSignature("setDecoratedValue", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"], ["v", "reflect.Value"]]), $.methodSignature("setValue", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"], ["v", "reflect.Value"]]), $.methodSignature("submitDecoratedGroupedValue", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"], ["v", "reflect.Value"]]), $.methodSignature("submitGroupedValue", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"], ["v", "reflect.Value"]])]
);

export type containerStore = {
	createGraph(): dot.Graph | $.VarRef<dot.Graph> | null | globalThis.Promise<dot.Graph | $.VarRef<dot.Graph> | null>
	getAllValueProviders(name: string, t: reflect.Type | null): $.Slice<__goscript_provide.provider | null>
	getDecoratedValue(name: string, t: reflect.Type | null): [reflect.Value, boolean]
	getDecoratedValueGroup(name: string, t: reflect.Type | null): [reflect.Value, boolean]
	getGroupDecorator(name: string, t: reflect.Type | null): [__goscript_decorate.decorator | null, boolean]
	getGroupProviders(name: string, t: reflect.Type | null): $.Slice<__goscript_provide.provider | null>
	getValue(name: string, t: reflect.Type | null): [reflect.Value, boolean]
	getValueDecorator(name: string, t: reflect.Type | null): [__goscript_decorate.decorator | null, boolean]
	getValueGroup(name: string, t: reflect.Type | null): $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>
	getValueProviders(name: string, t: reflect.Type | null): $.Slice<__goscript_provide.provider | null>
	invoker(): invokerFn | null
	knownTypes(): $.Slice<reflect.Type | null> | globalThis.Promise<$.Slice<reflect.Type | null>>
	newGraphNode(w: any, orders: globalThis.Map<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number> | null): void
	setDecoratedValue(name: string, t: reflect.Type | null, v: reflect.Value): void
	setValue(name: string, t: reflect.Type | null, v: reflect.Value): void
	storesToRoot(): $.Slice<containerStore | null>
	submitDecoratedGroupedValue(name: string, t: reflect.Type | null, v: reflect.Value): void
	submitGroupedValue(name: string, t: reflect.Type | null, v: reflect.Value): void
}

$.registerInterfaceType(
	"dig.containerStore",
	null,
	[$.methodSignature("createGraph", [], [/* @__PURE__ */ $.pointerType("dot.Graph")]), $.methodSignature("getAllValueProviders", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], [/* @__PURE__ */ $.sliceType("dig.provider")]), $.methodSignature("getDecoratedValue", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], [["v", "reflect.Value"], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("getDecoratedValueGroup", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], ["reflect.Value", /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getGroupDecorator", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], ["dig.decorator", /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getGroupProviders", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], [/* @__PURE__ */ $.sliceType("dig.provider")]), $.methodSignature("getValue", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], [["v", "reflect.Value"], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("getValueDecorator", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], ["dig.decorator", /* @__PURE__ */ $.basicType("bool")]), $.methodSignature("getValueGroup", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], [/* @__PURE__ */ $.sliceType("reflect.Value")]), $.methodSignature("getValueProviders", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"]], [/* @__PURE__ */ $.sliceType("dig.provider")]), $.methodSignature("invoker", [], [({ kind: $.TypeKind.Function, name: "dig.invokerFn", params: ["reflect.Value", /* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)]), $.methodSignature("knownTypes", [], [/* @__PURE__ */ $.sliceType("reflect.Type")]), $.methodSignature("newGraphNode", [["w", { kind: $.TypeKind.Interface, methods: [] }], ["orders", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("dig.Scope"), /* @__PURE__ */ $.basicType("int"))]]), $.methodSignature("setDecoratedValue", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"], ["v", "reflect.Value"]]), $.methodSignature("setValue", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"], ["v", "reflect.Value"]]), $.methodSignature("storesToRoot", [], [/* @__PURE__ */ $.sliceType("dig.containerStore")]), $.methodSignature("submitDecoratedGroupedValue", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"], ["v", "reflect.Value"]]), $.methodSignature("submitGroupedValue", [["name", /* @__PURE__ */ $.basicType("string")], ["t", "reflect.Type"], ["v", "reflect.Value"]])]
);

export type dryRunOption = boolean

$.registerNamedValueType(
	"dig.dryRunOption",
	{String: (receiver: any, ...args: any[]) => (dryRunOption_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), applyOption: (receiver: any, ...args: any[]) => (dryRunOption_applyOption as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyOption", [["c", /* @__PURE__ */ $.pointerType("dig.Container")]])]
);

$.registerNamedValueType(
	"*dig.dryRunOption",
	{String: (receiver: any, ...args: any[]) => (dryRunOption_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), applyOption: (receiver: any, ...args: any[]) => (dryRunOption_applyOption as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyOption", [["c", /* @__PURE__ */ $.pointerType("dig.Container")]])]
);

export type invokerFn = ((fn: reflect.Value, args: $.Slice<reflect.Value>) => $.Slice<reflect.Value> | globalThis.Promise<$.Slice<reflect.Value>>) | null

export type byTypeName = $.Slice<reflect.Type | null>

$.registerNamedType("dig.byTypeName", /* @__PURE__ */ $.sliceType("reflect.Type"));

$.registerNamedValueType(
	"dig.byTypeName",
	{Len: (receiver: any, ...args: any[]) => (byTypeName_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (byTypeName_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (byTypeName_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*dig.byTypeName",
	{Len: (receiver: any, ...args: any[]) => (byTypeName_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (byTypeName_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (byTypeName_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export class key {
	public get t(): reflect.Type | null {
		return this._fields.t
	}

	public set t(value: reflect.Type | null) {
		this._fields.t = value
	}

	// Only one of name or group will be set.
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get group(): string {
		return this._fields.group
	}

	public set group(value: string) {
		this._fields.group = value
	}

	public _fields: {
		t: reflect.Type | null
		name: string
		group: string
	}

	constructor(init?: Partial<{t?: reflect.Type | null, name?: string, group?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			t: init?.t ?? (null! as reflect.Type | null),
			name: init?.name ?? ("" as string),
			group: init?.group ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): key {
		return new key(this, true)
	}

	public __goscriptAssign(source: key): void {
		const target = this._fields
		const values = source._fields
		target.t = $.assignFieldValue(target.t, values.t, "reflect.Type")
		target.name = values.name
		target.group = values.group
	}

	public async String(): globalThis.Promise<string> {
		const k = this;
		if (!$.stringEqual(k.name, "")) {
			return fmt.Sprintf("%v[name=%q]", (k.t as any), k.name)
		}
		if (!$.stringEqual(k.group, "")) {
			return fmt.Sprintf("%v[group=%q]", (k.t as any), k.group)
		}
		return $.pointerValue<Exclude<reflect.Type, null>>(k.t).String()
	}

	static __typeInfo = $.registerStructType(
		"dig.key",
		() => new key(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		key,
		() => [/* @__PURE__ */ $.structField("t", "reflect.Type", [0], 0, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("group", /* @__PURE__ */ $.basicType("string"), [2], 32, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export class Container {
	// this is the "root" Scope that represents the
	// root of the scope tree.
	public get scope(): __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null {
		return this._fields.scope
	}

	public set scope(value: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null) {
		this._fields.scope = value
	}

	public _fields: {
		scope: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null
	}

	constructor(init?: Partial<{scope?: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			scope: init?.scope ?? (null! as __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Container {
		return new Container(this, true)
	}

	public __goscriptAssign(source: Container): void {
		const target = this._fields
		const values = source._fields
		target.scope = values.scope
	}

	public async Decorate(decorator: any, opts: $.Slice<__goscript_decorate.DecorateOption | null>): globalThis.Promise<$.GoError> {
		const c: Container | $.VarRef<Container> | null = this;
		return __goscript_scope.Scope.prototype.Decorate.call($.pointerValue<Container>(c).scope, decorator, opts)
	}

	public async Invoke(_function: any, opts: $.Slice<__goscript_invoke.InvokeOption | null>): globalThis.Promise<$.GoError> {
		const c: Container | $.VarRef<Container> | null = this;
		return __goscript_scope.Scope.prototype.Invoke.call($.pointerValue<Container>(c).scope, _function, opts)
	}

	public async Provide(_constructor: any, opts: $.Slice<__goscript_provide.ProvideOption | null>): globalThis.Promise<$.GoError> {
		const c: Container | $.VarRef<Container> | null = this;
		return __goscript_scope.Scope.prototype.Provide.call($.pointerValue<Container>(c).scope, _constructor, opts)
	}

	public async Scope(name: string, opts: $.Slice<__goscript_scope.ScopeOption | null>): globalThis.Promise<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null> {
		const c: Container | $.VarRef<Container> | null = this;
		return __goscript_scope.Scope.prototype.Scope.call($.pointerValue<Container>(c).scope, name, opts)
	}

	public async String(): globalThis.Promise<string> {
		const c: Container | $.VarRef<Container> | null = this;
		return __goscript_scope.Scope.prototype.String.call($.pointerValue<Container>(c).scope)
	}

	public async createGraph(): globalThis.Promise<dot.Graph | $.VarRef<dot.Graph> | null> {
		const c: Container | $.VarRef<Container> | null = this;
		return __goscript_scope.Scope.prototype.createGraph.call($.pointerValue<Container>(c).scope)
	}

	static __typeInfo = $.registerStructType(
		"dig.Container",
		() => new Container(),
		() => [$.methodSignature("Decorate", [["decorator", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType("dig.DecorateOption")]], ["error"], true), $.methodSignature("Invoke", [["function", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType("dig.InvokeOption")]], ["error"], true), $.methodSignature("Provide", [["constructor", { kind: $.TypeKind.Interface, methods: [] }], ["opts", /* @__PURE__ */ $.sliceType("dig.ProvideOption")]], ["error"], true), $.methodSignature("Scope", [["name", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.sliceType("dig.ScopeOption")]], [/* @__PURE__ */ $.pointerType("dig.Scope")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("createGraph", [], [/* @__PURE__ */ $.pointerType("dot.Graph")], true)],
		Container,
		() => [/* @__PURE__ */ $.structField("scope", /* @__PURE__ */ $.pointerType("dig.Scope"), [0], 0, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export class deferAcyclicVerificationOption {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): deferAcyclicVerificationOption {
		return new deferAcyclicVerificationOption(this, true)
	}

	public __goscriptAssign(source: deferAcyclicVerificationOption): void {
	}

	public String(): string {
		return "DeferAcyclicVerification()"
	}

	public applyOption(c: Container | $.VarRef<Container> | null): void {
		$.pointerValue<__goscript_scope.Scope>($.pointerValue<Container>(c).scope).deferAcyclicVerification = true
	}

	static __typeInfo = $.registerStructType(
		"dig.deferAcyclicVerificationOption",
		() => new deferAcyclicVerificationOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyOption", [["c", /* @__PURE__ */ $.pointerType("dig.Container")]])],
		deferAcyclicVerificationOption,
		() => []
	)
}

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
		return "RecoverFromPanics()"
	}

	public applyOption(c: Container | $.VarRef<Container> | null): void {
		$.pointerValue<__goscript_scope.Scope>($.pointerValue<Container>(c).scope).recoverFromPanics = true
	}

	static __typeInfo = $.registerStructType(
		"dig.recoverFromPanicsOption",
		() => new recoverFromPanicsOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyOption", [["c", /* @__PURE__ */ $.pointerType("dig.Container")]])],
		recoverFromPanicsOption,
		() => []
	)
}

export class setRandOption {
	public get r(): rand2.Rand | $.VarRef<rand2.Rand> | null {
		return this._fields.r
	}

	public set r(value: rand2.Rand | $.VarRef<rand2.Rand> | null) {
		this._fields.r = value
	}

	public _fields: {
		r: rand2.Rand | $.VarRef<rand2.Rand> | null
	}

	constructor(init?: Partial<{r?: rand2.Rand | $.VarRef<rand2.Rand> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			r: init?.r ?? (null! as rand2.Rand | $.VarRef<rand2.Rand> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): setRandOption {
		return new setRandOption(this, true)
	}

	public __goscriptAssign(source: setRandOption): void {
		const target = this._fields
		const values = source._fields
		target.r = values.r
	}

	public async String(): globalThis.Promise<string> {
		const o = this;
		return fmt.Sprintf("setRand(%p)", $.interfaceValue(o.r, "*rand.Rand", /* @__PURE__ */ $.pointerType("rand.Rand")))
	}

	public applyOption(c: Container | $.VarRef<Container> | null): void {
		const o = this;
		$.pointerValue<__goscript_scope.Scope>($.pointerValue<Container>(c).scope).rand = o.r
	}

	static __typeInfo = $.registerStructType(
		"dig.setRandOption",
		() => new setRandOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyOption", [["c", /* @__PURE__ */ $.pointerType("dig.Container")]])],
		setRandOption,
		() => [/* @__PURE__ */ $.structField("r", /* @__PURE__ */ $.pointerType("rand.Rand"), [0], 0, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export const _optionalTag: string = "optional"

export const _nameTag: string = "name"

export const _ignoreUnexportedTag: string = "ignore-unexported"

export function New(opts: $.Slice<Option | null>): Container | $.VarRef<Container> | null {
	let s: __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null = __goscript_scope.newScope()
	let c: Container | $.VarRef<Container> | null = new Container({scope: s})

	for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as Option | null)
		void (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<Option, null>) : $.pointerValue<Exclude<Option, null>>(opt)).applyOption(c)
	}
	return c
}

export function DeferAcyclicVerification(): Option | null {
	return $.interfaceValue<Option | null>(new deferAcyclicVerificationOption(undefined, true), "dig.deferAcyclicVerificationOption", "dig.deferAcyclicVerificationOption")
}

export function RecoverFromPanics(): Option | null {
	return $.interfaceValue<Option | null>(new recoverFromPanicsOption(undefined, true), "dig.recoverFromPanicsOption", "dig.recoverFromPanicsOption")
}

export function setRand(r: rand2.Rand | $.VarRef<rand2.Rand> | null): Option | null {
	return $.interfaceValue<Option | null>(new setRandOption({r: r}, true), "dig.setRandOption", "dig.setRandOption")
}

export function DryRun(dry: boolean): Option | null {
	return $.namedValueInterfaceValue<Option | null>(dry, "dig.dryRunOption", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export async function dryRunOption_String(o: dryRunOption): globalThis.Promise<string> {
	return fmt.Sprintf("DryRun(%v)", o)
}

export function dryRunOption_applyOption(o: dryRunOption, c: Container | $.VarRef<Container> | null): void {
	const c$: Container = c == null ? $.pointerTarget<Container>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Container>(c)
	if (o) {
		$.pointerValue<__goscript_scope.Scope>((c$ as Container).scope).invokerFn = dryInvoker
	} else {
		$.pointerValue<__goscript_scope.Scope>((c$ as Container).scope).invokerFn = defaultInvoker
	}
}

export async function defaultInvoker(fn: reflect.Value, args: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> {
	return $.markAsStructValue($.cloneStructValue(fn)).Call(args)
}

export async function dryInvoker(fn: reflect.Value, _p1: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> {
	let ft = $.markAsStructValue($.cloneStructValue(fn)).Type()
	let results: $.Slice<reflect.Value> = $.makeSlice<reflect.Value>((__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined, undefined, () => $.markAsStructValue(new reflect.Value()))
	for (let __goscriptSliceWindow0 = $.sliceRange(results), i = 0; i < (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
		$.assignStruct((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)], reflect.Zero($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(fn)).Type()).Out(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))
	}

	return results
}

export function byTypeName_Len(bs: byTypeName): number {
	return $.sliceLen((bs as byTypeName))
}

export async function byTypeName_Less(bs: byTypeName, i: number, j: number): globalThis.Promise<boolean> {
	return $.stringCompare(await fmt.Sprint(($.arrayIndex(bs!, i) as any)), await fmt.Sprint(($.arrayIndex(bs!, j) as any))) < 0
}

export function byTypeName_Swap(bs: byTypeName, i: number, j: number): void {
	let __goscriptAssign0_0: reflect.Type | null = $.arrayIndex(bs!, j)
	let __goscriptAssign0_1: reflect.Type | null = $.arrayIndex(bs!, i)
	$.sliceElems(bs!)[$.sliceSlot(bs!, i)] = __goscriptAssign0_0
	$.sliceElems(bs!)[$.sliceSlot(bs!, j)] = __goscriptAssign0_1
}

export async function shuffledCopy(rand: rand2.Rand | $.VarRef<rand2.Rand> | null, items: $.Slice<reflect.Value>): globalThis.Promise<$.Slice<reflect.Value>> {
	let newItems: $.Slice<reflect.Value> = $.makeSlice<reflect.Value>($.sliceLen(items), undefined, undefined, () => $.markAsStructValue(new reflect.Value()))
	for (let __goscriptRangeTarget1 = await (rand !== null && (rand as any).__isVarRef !== true && (rand as any).__goValue === undefined ? ((rand as any) as rand2.Rand).Perm($.sliceLen(items)) : rand2.Rand.prototype.Perm.call(rand, $.sliceLen(items))), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow1 = $.sliceRange(newItems), __goscriptSliceWindow2 = $.sliceRange(items), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let j = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as number)
		$.assignStruct((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)], ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, j)] as reflect.Value))
	}
	return newItems
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (dryRunOption_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), applyOption: (receiver: any, ...args: any[]) => (dryRunOption_applyOption as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("bool", "dig.dryRunOption"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyOption", [["c", /* @__PURE__ */ $.pointerType("dig.Container")]])])
}

var __goscriptAwait: any
