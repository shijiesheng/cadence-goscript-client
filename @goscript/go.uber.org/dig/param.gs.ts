// Generated file based on param.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as digerror from "@goscript/go.uber.org/dig/internal/digerror/index.js"

import * as dot from "@goscript/go.uber.org/dig/internal/dot/index.js"

import * as digreflect from "@goscript/go.uber.org/dig/internal/digreflect/index.js"

import type * as io from "@goscript/io/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as __goscript__constructor from "./constructor.gs.ts"

import * as __goscript_callback from "./callback.gs.ts"

import * as __goscript_container from "./container.gs.ts"

import * as __goscript_decorate from "./decorate.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_graph from "./graph.gs.ts"

import * as __goscript_group from "./group.gs.ts"

import * as __goscript_inout from "./inout.gs.ts"

import * as __goscript_invoke from "./invoke.gs.ts"

import * as __goscript_provide from "./provide.gs.ts"

import * as __goscript_result from "./result.gs.ts"

import * as __goscript_scope from "./scope.gs.ts"

import * as __goscript_visualize from "./visualize.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/go.uber.org/dig/internal/digerror/index.js"
import "@goscript/go.uber.org/dig/internal/dot/index.js"
import "@goscript/go.uber.org/dig/internal/digreflect/index.js"
import "@goscript/math/rand/index.js"
import "./constructor.gs.ts"
import "./callback.gs.ts"
import "./container.gs.ts"
import "./decorate.gs.ts"
import "./error.gs.ts"
import "./graph.gs.ts"
import "./group.gs.ts"
import "./inout.gs.ts"
import "./invoke.gs.ts"
import "./provide.gs.ts"
import "./result.gs.ts"
import "./scope.gs.ts"
import "./visualize.gs.ts"

$.registerTypePackagePath("go.uber.org/dig", ["dig.param", "dig.paramList", "dig.paramSingle", "dig.paramObject", "dig.paramObjectField", "dig.paramGroupedSlice"])

export type param = {
	Build(store: __goscript_container.containerStore | null): [reflect.Value, $.GoError] | globalThis.Promise<[reflect.Value, $.GoError]>
	DotParam(): $.Slice<dot.Param | $.VarRef<dot.Param> | null> | globalThis.Promise<$.Slice<dot.Param | $.VarRef<dot.Param> | null>>
	String(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"dig.param",
	null,
	[$.methodSignature("Build", [["store", "dig.containerStore"]], ["reflect.Value", "error"]), $.methodSignature("DotParam", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Param"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class paramList {
	public get ctype(): reflect.Type | null {
		return this._fields.ctype
	}

	public set ctype(value: reflect.Type | null) {
		this._fields.ctype = value
	}

	public get Params(): $.Slice<param | null> {
		return this._fields.Params
	}

	public set Params(value: $.Slice<param | null>) {
		this._fields.Params = value
	}

	public _fields: {
		ctype: reflect.Type | null
		Params: $.Slice<param | null>
	}

	constructor(init?: Partial<{ctype?: reflect.Type | null, Params?: $.Slice<param | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			ctype: init?.ctype ?? (null! as reflect.Type | null),
			Params: init?.Params ?? (null! as $.Slice<param | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): paramList {
		return new paramList(this, true)
	}

	public __goscriptAssign(source: paramList): void {
		const target = this._fields
		const values = source._fields
		target.ctype = $.assignFieldValue(target.ctype, values.ctype, "reflect.Type")
		target.Params = values.Params
	}

	public async Build(_p0: __goscript_container.containerStore | null): globalThis.Promise<[reflect.Value, $.GoError]> {
		const pl = this;
		await digerror.BugPanicf("paramList.Build() must never be called", null)
		$.panic("")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async BuildList(c: __goscript_container.containerStore | null): globalThis.Promise<[$.Slice<reflect.Value>, $.GoError]> {
		const pl = this;
		let args: $.Slice<reflect.Value> = $.makeSlice<reflect.Value>($.sliceLen(pl.Params), undefined, undefined, () => $.markAsStructValue(new reflect.Value()))
		for (let __goscriptRangeTarget0 = pl.Params, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(args), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let p = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as param | null)
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple0: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? (p as Exclude<param, null>) : $.pointerValue<Exclude<param, null>>(p)).Build(c)
			$.assignStruct((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)], __goscriptTuple0[0])
			err = __goscriptTuple0[1]
			if (err != null) {
				return [null, err]
			}
		}
		return [args, null]
	}

	public async DotParam(): globalThis.Promise<$.Slice<dot.Param | $.VarRef<dot.Param> | null>> {
		const pl = this;
		let types: $.Slice<dot.Param | $.VarRef<dot.Param> | null> = null! as $.Slice<dot.Param | $.VarRef<dot.Param> | null>
		for (let __goscriptRangeTarget1 = pl.Params, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let param = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as param | null)
			types = $.appendSlice(types, ((__goscriptAwait = (param !== null && (param as any).__isVarRef !== true && (param as any).__goValue === undefined ? (param as Exclude<param, null>) : $.pointerValue<Exclude<param, null>>(param)).DotParam(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<dot.Param | $.VarRef<dot.Param> | null>), $.appendZeros.nil)
		}
		return types
	}

	public async String(): globalThis.Promise<string> {
		const pl = this;
		let args: $.Slice<string> = $.makeSlice<string>($.sliceLen(pl.Params), undefined, "string")
		for (let __goscriptRangeTarget2 = pl.Params, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow1 = $.sliceRange(args), i = 0; i < __goscriptRangeWindow2.length; i++) {
			let p = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as param | null);
			;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = (__goscriptAwait = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? (p as Exclude<param, null>) : $.pointerValue<Exclude<param, null>>(p)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return fmt.Sprint($.interfaceValue(args, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
	}

	static __typeInfo = $.registerStructType(
		"dig.paramList",
		() => new paramList(),
		() => [$.methodSignature("Build", ["dig.containerStore"], ["reflect.Value", "error"]), $.methodSignature("BuildList", [["c", "dig.containerStore"]], [/* @__PURE__ */ $.sliceType("reflect.Value"), "error"]), $.methodSignature("DotParam", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Param"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		paramList,
		() => [/* @__PURE__ */ $.structField("ctype", "reflect.Type", [0], 0, false, { pkgPath: "go.uber.org/dig" }), /* @__PURE__ */ $.structField("Params", /* @__PURE__ */ $.sliceType("dig.param"), [1], 16, true)]
	)
}

export class paramSingle {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Optional(): boolean {
		return this._fields.Optional
	}

	public set Optional(value: boolean) {
		this._fields.Optional = value
	}

	public get Type(): reflect.Type | null {
		return this._fields.Type
	}

	public set Type(value: reflect.Type | null) {
		this._fields.Type = value
	}

	public _fields: {
		Name: string
		Optional: boolean
		Type: reflect.Type | null
	}

	constructor(init?: Partial<{Name?: string, Optional?: boolean, Type?: reflect.Type | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Optional: init?.Optional ?? (false as boolean),
			Type: init?.Type ?? (null! as reflect.Type | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): paramSingle {
		return new paramSingle(this, true)
	}

	public __goscriptAssign(source: paramSingle): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Optional = values.Optional
		target.Type = $.assignFieldValue(target.Type, values.Type, "reflect.Type")
	}

	public async Build(c: __goscript_container.containerStore | null): globalThis.Promise<[reflect.Value, $.GoError]> {
		const ps = this;
		let [v, found, err] = await ps.buildWithDecorators(c)
		if (found) {
			return [$.markAsStructValue($.cloneStructValue(v)), err]
		}

		// Check whether the value is a decorated value first.
		{
			let [__goscriptShadow0, ok] = ps.getDecoratedValue(c)
			if (ok) {
				return [$.markAsStructValue($.cloneStructValue(__goscriptShadow0)), null]
			}
		}

		// Starting at the given container and working our way up its parents,
		// find one that provides this dependency.
		//
		// Once found, we'll use that container for the rest of the invocation.
		// Dependencies of this type will begin searching at that container,
		// rather than starting at base.
		let providers: $.Slice<__goscript_provide.provider | null> = null! as $.Slice<__goscript_provide.provider | null>
		let providingContainer: __goscript_container.containerStore | null = null! as __goscript_container.containerStore | null
		for (let __goscriptRangeTarget3 = ((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(c)).storesToRoot(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<__goscript_container.containerStore | null>), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let container = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_container.containerStore | null)
			// first check if the scope already has cached a value for the type.
			{
				let [__goscriptShadow1, ok] = await (container !== null && (container as any).__isVarRef !== true && (container as any).__goValue === undefined ? (container as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(container)).getValue(ps.Name, ps.Type)
				if (ok) {
					return [$.markAsStructValue($.cloneStructValue(__goscriptShadow1)), null]
				}
			}
			providers = ((__goscriptAwait = (container !== null && (container as any).__isVarRef !== true && (container as any).__goValue === undefined ? (container as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(container)).getValueProviders(ps.Name, ps.Type), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<__goscript_provide.provider | null>)
			if ($.sliceLen(providers) > 0) {
				providingContainer = container
				break
			}
		}

		if ($.sliceLen(providers) == 0) {
			if (ps.Optional) {
				return [$.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(ps.Type)!))), null]
			}
			return [$.markAsStructValue($.cloneStructValue(__goscript_inout._noValue)), $.namedValueInterfaceValue<$.GoError>(await __goscript_error.newErrMissingTypes(c, new __goscript_container.key({name: ps.Name, t: ps.Type}, true)), "dig.errMissingTypes", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]
		}

		for (let __goscriptRangeTarget4 = providers, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let n = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as __goscript_provide.provider | null)
			let __goscriptShadow2 = (__goscriptAwait = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? (n as Exclude<__goscript_provide.provider, null>) : $.pointerValue<Exclude<__goscript_provide.provider, null>>(n)).Call($.interfaceValue<__goscript_container.containerStore | null>(((__goscriptAwait = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? (n as Exclude<__goscript_provide.provider, null>) : $.pointerValue<Exclude<__goscript_provide.provider, null>>(n)).OrigScope(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null), "*dig.Scope", /* @__PURE__ */ $.pointerType("dig.Scope"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow2 == null) {
				continue
			}

			// If we're missing dependencies but the parameter itself is optional,
			// we can just move on.
			{
				let [, ok] = $.typeAssertTuple<__goscript_error.errMissingDependencies>(__goscriptShadow2, "dig.errMissingDependencies")
				if (ok && ps.Optional) {
					return [$.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(ps.Type)!))), null]
				}
			}

			return [$.markAsStructValue($.cloneStructValue(__goscript_inout._noValue)), $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? (n as Exclude<__goscript_provide.provider, null>) : $.pointerValue<Exclude<__goscript_provide.provider, null>>(n)).ID(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_error.errParamSingleFailed({CtorID: __goscriptLiteralField0, Key: new __goscript_container.key({t: ps.Type, name: ps.Name}, true), Reason: __goscriptShadow2}, true) })()), "dig.errParamSingleFailed", "dig.errParamSingleFailed")]
		}

		// If we get here, it's impossible for the value to be absent from the
		// container.
		let __goscriptTuple1: any = await (providingContainer !== null && (providingContainer as any).__isVarRef !== true && (providingContainer as any).__goValue === undefined ? (providingContainer as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(providingContainer)).getValue(ps.Name, ps.Type)
		v = $.assignStruct(v, __goscriptTuple1[0])
		return [$.markAsStructValue($.cloneStructValue(v)), null]
	}

	public DotParam(): $.Slice<dot.Param | $.VarRef<dot.Param> | null> {
		const ps = this;
		return $.arrayToSlice<dot.Param | $.VarRef<dot.Param> | null>([new dot.Param({Node: new dot.Node({Type: ps.Type, Name: ps.Name}), Optional: ps.Optional})])
	}

	public async String(): globalThis.Promise<string> {
		const ps = this;
		// tally.Scope[optional] means optional
		// tally.Scope[optional, name="foo"] means named optional

		let opts: $.Slice<string> = null! as $.Slice<string>
		if (ps.Optional) {
			opts = $.appendOne(opts, "optional")
		}
		if (!$.stringEqual(ps.Name, "")) {
			opts = $.appendOne(opts, await fmt.Sprintf("name=%q", ps.Name))
		}

		if ($.sliceLen(opts) == 0) {
			return fmt.Sprint((ps.Type as any))
		}

		return fmt.Sprintf("%v[%v]", (ps.Type as any), strings.Join(opts, ", "))
	}

	public async buildWithDecorators(c: __goscript_container.containerStore | null): globalThis.Promise<[reflect.Value, boolean, $.GoError]> {
		const ps = this;
		let v: reflect.Value = $.markAsStructValue(new reflect.Value())
		let found: boolean = false
		let err: $.GoError = null! as $.GoError
		let d: __goscript_decorate.decorator | null = null! as __goscript_decorate.decorator | null
		let decoratingScope: __goscript_container.containerStore | null = null! as __goscript_container.containerStore | null
		let stores: $.Slice<__goscript_container.containerStore | null> = ((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(c)).storesToRoot(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<__goscript_container.containerStore | null>)

		for (let __goscriptRangeTarget5 = stores, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
			let s = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as __goscript_container.containerStore | null)
			{
				let __goscriptTuple2: any = await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(s)).getValueDecorator(ps.Name, ps.Type)
				d = __goscriptTuple2[0]
				found = __goscriptTuple2[1]
				if (!found) {
					continue
				}
			}
			if ((__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<__goscript_decorate.decorator, null>) : $.pointerValue<Exclude<__goscript_decorate.decorator, null>>(d)).State(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 1) {
				// This decorator is already being run.
				// Avoid a cycle and look further.
				d = null
				continue
			}
			decoratingScope = s
			break
		}
		if (!found || (d == null)) {
			return [$.markAsStructValue($.cloneStructValue(__goscript_inout._noValue)), false, null]
		}
		{
			err = (__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<__goscript_decorate.decorator, null>) : $.pointerValue<Exclude<__goscript_decorate.decorator, null>>(d)).Call(decoratingScope), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				let __goscriptAssign0_0: reflect.Value = $.markAsStructValue($.cloneStructValue(__goscript_inout._noValue))
				let __goscriptAssign0_1: $.GoError = $.interfaceValue<$.GoError>(new __goscript_error.errParamSingleFailed({CtorID: 1, Key: new __goscript_container.key({t: ps.Type, name: ps.Name}, true), Reason: err}, true), "dig.errParamSingleFailed", "dig.errParamSingleFailed")
				v = $.assignStruct(v, __goscriptAssign0_0)
				err = __goscriptAssign0_1
				return [$.markAsStructValue($.cloneStructValue(v)), found, err]
			}
		}
		let __goscriptTuple3: any = await (decoratingScope !== null && (decoratingScope as any).__isVarRef !== true && (decoratingScope as any).__goValue === undefined ? (decoratingScope as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(decoratingScope)).getDecoratedValue(ps.Name, ps.Type)
		v = $.assignStruct(v, __goscriptTuple3[0])
		return [v, found, err]
	}

	public getDecoratedValue(c: __goscript_container.containerStore | null): [reflect.Value, boolean] {
		const ps = this;
		for (let __goscriptRangeTarget6 = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(c)).storesToRoot(), __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let __goscriptRangeShadow0 = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as __goscript_container.containerStore | null)
			{
				let [v, ok] = (__goscriptRangeShadow0 !== null && (__goscriptRangeShadow0 as any).__isVarRef !== true && (__goscriptRangeShadow0 as any).__goValue === undefined ? (__goscriptRangeShadow0 as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(__goscriptRangeShadow0)).getDecoratedValue(ps.Name, ps.Type)
				if (ok) {
					return [$.markAsStructValue($.cloneStructValue(v)), ok]
				}
			}
		}
		return [$.markAsStructValue($.cloneStructValue(__goscript_inout._noValue)), false]
	}

	static __typeInfo = $.registerStructType(
		"dig.paramSingle",
		() => new paramSingle(),
		() => [$.methodSignature("Build", [["c", "dig.containerStore"]], ["reflect.Value", "error"]), $.methodSignature("DotParam", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Param"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("buildWithDecorators", [["c", "dig.containerStore"]], [["v", "reflect.Value"], ["found", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]]), $.methodSignature("getDecoratedValue", [["c", "dig.containerStore"]], ["reflect.Value", /* @__PURE__ */ $.basicType("bool")])],
		paramSingle,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Optional", /* @__PURE__ */ $.basicType("bool"), [1], 16, true), /* @__PURE__ */ $.structField("Type", "reflect.Type", [2], 24, true)]
	)
}

export class paramObject {
	public get Type(): reflect.Type | null {
		return this._fields.Type
	}

	public set Type(value: reflect.Type | null) {
		this._fields.Type = value
	}

	public get Fields(): $.Slice<paramObjectField> {
		return this._fields.Fields
	}

	public set Fields(value: $.Slice<paramObjectField>) {
		this._fields.Fields = value
	}

	public get FieldOrders(): $.Slice<number> {
		return this._fields.FieldOrders
	}

	public set FieldOrders(value: $.Slice<number>) {
		this._fields.FieldOrders = value
	}

	public _fields: {
		Type: reflect.Type | null
		Fields: $.Slice<paramObjectField>
		FieldOrders: $.Slice<number>
	}

	constructor(init?: Partial<{Type?: reflect.Type | null, Fields?: $.Slice<paramObjectField>, FieldOrders?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? (null! as reflect.Type | null),
			Fields: init?.Fields ?? (null! as $.Slice<paramObjectField>),
			FieldOrders: init?.FieldOrders ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): paramObject {
		return new paramObject(this, true)
	}

	public __goscriptAssign(source: paramObject): void {
		const target = this._fields
		const values = source._fields
		target.Type = $.assignFieldValue(target.Type, values.Type, "reflect.Type")
		target.Fields = values.Fields
		target.FieldOrders = values.FieldOrders
	}

	public async Build(c: __goscript_container.containerStore | null): globalThis.Promise<[reflect.Value, $.GoError]> {
		const po = this;
		let dest = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(po.Type)!))).Elem()))
		// We have to build soft groups after all other fields, to avoid cases
		// when a field calls a provider for a soft value group, but the value is
		// not provided to it because the value group is declared before the field
		let softGroupsQueue: $.Slice<paramObjectField> = null! as $.Slice<paramObjectField>
		let fields: $.Slice<paramObjectField> = null! as $.Slice<paramObjectField>
		for (let __goscriptRangeTarget7 = po.Fields, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let f = ((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as paramObjectField)).clone()
			{
				let [p, ok] = $.typeAssertTuple<paramGroupedSlice>(f.Param, "dig.paramGroupedSlice")
				if (ok && p.Soft) {
					softGroupsQueue = $.appendOne(softGroupsQueue, (f).clone())
					continue
				}
			}
			fields = $.appendOne(fields, (f).clone())
		}
		fields = $.appendSlice(fields, softGroupsQueue)
		for (let __goscriptRangeTarget8 = fields, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let f = ((__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as paramObjectField)).clone()
			let [v, err] = await $.markAsStructValue($.cloneStructValue(f)).Build(c)
			if (err != null) {
				return [$.markAsStructValue($.cloneStructValue(dest)), err]
			}
			$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(dest)).Field(f.FieldIndex))).Set($.markAsStructValue($.cloneStructValue(v)))
		}
		return [$.markAsStructValue($.cloneStructValue(dest)), null]
	}

	public async DotParam(): globalThis.Promise<$.Slice<dot.Param | $.VarRef<dot.Param> | null>> {
		const po = this;
		let types: $.Slice<dot.Param | $.VarRef<dot.Param> | null> = null! as $.Slice<dot.Param | $.VarRef<dot.Param> | null>
		for (let __goscriptRangeTarget9 = po.Fields, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
			let field = ((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as paramObjectField)).clone()
			types = $.appendSlice(types, await $.markAsStructValue($.cloneStructValue(field)).DotParam(), $.appendZeros.nil)
		}
		return types
	}

	public async String(): globalThis.Promise<string> {
		const po = this;
		let fields: $.Slice<string> = $.makeSlice<string>($.sliceLen(po.Fields), undefined, "string")
		for (let __goscriptRangeTarget10 = po.Fields, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __goscriptSliceWindow2 = $.sliceRange(fields), i = 0; i < __goscriptRangeWindow10.length; i++) {
			let f = ((__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + i] as paramObjectField)).clone();
			;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = (__goscriptAwait = $.pointerValue<Exclude<param, null>>(f.Param).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return strings.Join(fields, " ")
	}

	static __typeInfo = $.registerStructType(
		"dig.paramObject",
		() => new paramObject(),
		() => [$.methodSignature("Build", [["c", "dig.containerStore"]], ["reflect.Value", "error"]), $.methodSignature("DotParam", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Param"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		paramObject,
		() => [/* @__PURE__ */ $.structField("Type", "reflect.Type", [0], 0, true), /* @__PURE__ */ $.structField("Fields", /* @__PURE__ */ $.sliceType("dig.paramObjectField"), [1], 16, true), /* @__PURE__ */ $.structField("FieldOrders", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [2], 40, true)]
	)
}

export class paramObjectField {
	// Name of the field in the struct.
	public get FieldName(): string {
		return this._fields.FieldName
	}

	public set FieldName(value: string) {
		this._fields.FieldName = value
	}

	// Index of this field in the target struct.
	//
	// We need to track this separately because not all fields of the
	// struct map to params.
	public get FieldIndex(): number {
		return this._fields.FieldIndex
	}

	public set FieldIndex(value: number) {
		this._fields.FieldIndex = value
	}

	// The dependency requested by this field.
	public get Param(): param | null {
		return this._fields.Param
	}

	public set Param(value: param | null) {
		this._fields.Param = value
	}

	public _fields: {
		FieldName: string
		FieldIndex: number
		Param: param | null
	}

	constructor(init?: Partial<{FieldName?: string, FieldIndex?: number, Param?: param | null}>, __goscriptValue?: boolean) {
		this._fields = {
			FieldName: init?.FieldName ?? ("" as string),
			FieldIndex: init?.FieldIndex ?? (0 as number),
			Param: init?.Param ?? (null! as param | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): paramObjectField {
		return new paramObjectField(this, true)
	}

	public __goscriptAssign(source: paramObjectField): void {
		const target = this._fields
		const values = source._fields
		target.FieldName = values.FieldName
		target.FieldIndex = values.FieldIndex
		target.Param = $.assignFieldValue(target.Param, values.Param, "dig.param")
	}

	public async Build(c: __goscript_container.containerStore | null): globalThis.Promise<[reflect.Value, $.GoError]> {
		const pof = this;
		let [v, err] = await $.pointerValue<Exclude<param, null>>(pof.Param).Build(c)
		if (err != null) {
			return [$.markAsStructValue($.cloneStructValue(v)), err]
		}
		return [$.markAsStructValue($.cloneStructValue(v)), null]
	}

	public async DotParam(): globalThis.Promise<$.Slice<dot.Param | $.VarRef<dot.Param> | null>> {
		const pof = this;
		return $.pointerValue<Exclude<param, null>>(pof.Param).DotParam()
	}

	static __typeInfo = $.registerStructType(
		"dig.paramObjectField",
		() => new paramObjectField(),
		() => [$.methodSignature("Build", [["c", "dig.containerStore"]], ["reflect.Value", "error"]), $.methodSignature("DotParam", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Param"))])],
		paramObjectField,
		() => [/* @__PURE__ */ $.structField("FieldName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("FieldIndex", /* @__PURE__ */ $.basicType("int"), [1], 16, true), /* @__PURE__ */ $.structField("Param", "dig.param", [2], 24, true)]
	)
}

export class paramGroupedSlice {
	// Name of the group as specified in the `group:".."` tag.
	public get Group(): string {
		return this._fields.Group
	}

	public set Group(value: string) {
		this._fields.Group = value
	}

	// Type of the slice.
	public get Type(): reflect.Type | null {
		return this._fields.Type
	}

	public set Type(value: reflect.Type | null) {
		this._fields.Type = value
	}

	// Soft is used to denote a soft dependency between this param and its
	// constructors, if it's true its constructors are only called if they
	// provide another value requested in the graph
	public get Soft(): boolean {
		return this._fields.Soft
	}

	public set Soft(value: boolean) {
		this._fields.Soft = value
	}

	public get orders(): globalThis.Map<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number> | null {
		return this._fields.orders
	}

	public set orders(value: globalThis.Map<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number> | null) {
		this._fields.orders = value
	}

	public _fields: {
		Group: string
		Type: reflect.Type | null
		Soft: boolean
		orders: globalThis.Map<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number> | null
	}

	constructor(init?: Partial<{Group?: string, Type?: reflect.Type | null, Soft?: boolean, orders?: globalThis.Map<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Group: init?.Group ?? ("" as string),
			Type: init?.Type ?? (null! as reflect.Type | null),
			Soft: init?.Soft ?? (false as boolean),
			orders: init?.orders ?? (null! as globalThis.Map<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): paramGroupedSlice {
		return new paramGroupedSlice(this, true)
	}

	public __goscriptAssign(source: paramGroupedSlice): void {
		const target = this._fields
		const values = source._fields
		target.Group = values.Group
		target.Type = $.assignFieldValue(target.Type, values.Type, "reflect.Type")
		target.Soft = values.Soft
		target.orders = values.orders
	}

	public async Build(c: __goscript_container.containerStore | null): globalThis.Promise<[reflect.Value, $.GoError]> {
		const pt = this;
		// do not call this if we are already inside a decorator since
		// it will result in an infinite recursion. (i.e. decorate -> params.BuildList() -> Decorate -> params.BuildList...)
		// this is safe since a value can be decorated at most once in a given scope.
		{
			let err = await pt.callGroupDecorators(c)
			if (err != null) {
				return [$.markAsStructValue($.cloneStructValue(__goscript_inout._noValue)), err]
			}
		}

		// Check if we have decorated values
		{
			let [decoratedItems, ok] = pt.getDecoratedValues(c)
			if (ok) {
				return [$.markAsStructValue($.cloneStructValue(decoratedItems)), null]
			}
		}

		// If we do not have any decorated values and the group isn't soft,
		// find the providers and call them.
		let itemCount = 0
		if (!pt.Soft) {
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple8: any = await pt.callGroupProviders(c)
			itemCount = __goscriptTuple8[0]
			err = __goscriptTuple8[1]
			if (err != null) {
				return [$.markAsStructValue($.cloneStructValue(__goscript_inout._noValue)), err]
			}
		}

		let stores: $.Slice<__goscript_container.containerStore | null> = ((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(c)).storesToRoot(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<__goscript_container.containerStore | null>)
		let __goscriptShadow3 = $.markAsStructValue($.cloneStructValue(reflect.MakeSlice($.pointerValueOrNil(pt.Type)!, 0, itemCount)))
		for (let __goscriptRangeTarget13 = stores, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
			let c = (__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as __goscript_container.containerStore | null)
			__goscriptShadow3 = $.assignStruct(__goscriptShadow3, reflect.Append($.markAsStructValue($.cloneStructValue(__goscriptShadow3)), ...(((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(c)).getValueGroup(pt.Group, (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(pt.Type).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<reflect.Value>) ?? [])))
		}
		return [$.markAsStructValue($.cloneStructValue(__goscriptShadow3)), null]
	}

	public DotParam(): $.Slice<dot.Param | $.VarRef<dot.Param> | null> {
		const pt = this;
		return $.arrayToSlice<dot.Param | $.VarRef<dot.Param> | null>([new dot.Param({Node: new dot.Node({Type: pt.Type, Group: pt.Group})})])
	}

	public async String(): globalThis.Promise<string> {
		const pt = this;
		// io.Reader[group="foo"] refers to a group of io.Readers called 'foo'
		return fmt.Sprintf("%v[group=%q]", ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(pt.Type).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any), pt.Group)
	}

	public async callGroupDecorators(c: __goscript_container.containerStore | null): globalThis.Promise<$.GoError> {
		const pt = this;
		let stores: $.Slice<__goscript_container.containerStore | null> = ((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(c)).storesToRoot(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<__goscript_container.containerStore | null>)
		for (let __goscriptSliceWindow3 = $.sliceRange(stores), i = $.sliceLen(stores) - 1; i >= 0; i--) {
			let __goscriptShadow4 = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as __goscript_container.containerStore | null)
			{
				let [d, found] = await (__goscriptShadow4 !== null && (__goscriptShadow4 as any).__isVarRef !== true && (__goscriptShadow4 as any).__goValue === undefined ? (__goscriptShadow4 as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(__goscriptShadow4)).getGroupDecorator(pt.Group, (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(pt.Type).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				if (found) {
					if ((__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<__goscript_decorate.decorator, null>) : $.pointerValue<Exclude<__goscript_decorate.decorator, null>>(d)).State(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 1) {
						// This decorator is already being run. Avoid cycle
						// and look further.
						continue
					}
					{
						let err = (__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<__goscript_decorate.decorator, null>) : $.pointerValue<Exclude<__goscript_decorate.decorator, null>>(d)).Call(__goscriptShadow4), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (err != null) {
							return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<__goscript_decorate.decorator, null>) : $.pointerValue<Exclude<__goscript_decorate.decorator, null>>(d)).ID(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_error.errParamGroupFailed({CtorID: __goscriptLiteralField1, Key: (await (async () => { const __goscriptLiteralField2 = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(pt.Type).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_container.key({group: pt.Group, t: __goscriptLiteralField2}, true) })()), Reason: err}, true) })()), "dig.errParamGroupFailed", "dig.errParamGroupFailed")
						}
					}
				}
			}
		}
		return null
	}

	public async callGroupProviders(c: __goscript_container.containerStore | null): globalThis.Promise<[number, $.GoError]> {
		const pt = this;
		let itemCount = 0
		for (let __goscriptRangeTarget15 = ((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(c)).storesToRoot(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<__goscript_container.containerStore | null>), __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget15), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
			let __goscriptRangeShadow1 = (__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as __goscript_container.containerStore | null)
			let providers: $.Slice<__goscript_provide.provider | null> = ((__goscriptAwait = (__goscriptRangeShadow1 !== null && (__goscriptRangeShadow1 as any).__isVarRef !== true && (__goscriptRangeShadow1 as any).__goValue === undefined ? (__goscriptRangeShadow1 as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(__goscriptRangeShadow1)).getGroupProviders(pt.Group, (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(pt.Type).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<__goscript_provide.provider | null>)
			itemCount = itemCount + ($.sliceLen(providers))
			for (let __goscriptRangeTarget14 = providers, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow15.length; __rangeIndex++) {
				let n = (__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + __rangeIndex] as __goscript_provide.provider | null)
				{
					let err = (__goscriptAwait = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? (n as Exclude<__goscript_provide.provider, null>) : $.pointerValue<Exclude<__goscript_provide.provider, null>>(n)).Call($.interfaceValue<__goscript_container.containerStore | null>(((__goscriptAwait = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? (n as Exclude<__goscript_provide.provider, null>) : $.pointerValue<Exclude<__goscript_provide.provider, null>>(n)).OrigScope(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null), "*dig.Scope", /* @__PURE__ */ $.pointerType("dig.Scope"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (err != null) {
						return [0, $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField3 = (__goscriptAwait = (n !== null && (n as any).__isVarRef !== true && (n as any).__goValue === undefined ? (n as Exclude<__goscript_provide.provider, null>) : $.pointerValue<Exclude<__goscript_provide.provider, null>>(n)).ID(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_error.errParamGroupFailed({CtorID: __goscriptLiteralField3, Key: (await (async () => { const __goscriptLiteralField4 = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(pt.Type).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_container.key({group: pt.Group, t: __goscriptLiteralField4}, true) })()), Reason: err}, true) })()), "dig.errParamGroupFailed", "dig.errParamGroupFailed")]
					}
				}
			}
		}
		return [itemCount, null]
	}

	public getDecoratedValues(c: __goscript_container.containerStore | null): [reflect.Value, boolean] {
		const pt = this;
		for (let __goscriptRangeTarget16 = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(c)).storesToRoot(), __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow16.length; __rangeIndex++) {
			let __goscriptRangeShadow2 = (__goscriptRangeWindow16.backing[__goscriptRangeWindow16.offset + __rangeIndex] as __goscript_container.containerStore | null)
			{
				let [items, ok] = (__goscriptRangeShadow2 !== null && (__goscriptRangeShadow2 as any).__isVarRef !== true && (__goscriptRangeShadow2 as any).__goValue === undefined ? (__goscriptRangeShadow2 as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(__goscriptRangeShadow2)).getDecoratedValueGroup(pt.Group, pt.Type)
				if (ok) {
					return [$.markAsStructValue($.cloneStructValue(items)), true]
				}
			}
		}
		return [$.markAsStructValue($.cloneStructValue(__goscript_inout._noValue)), false]
	}

	static __typeInfo = $.registerStructType(
		"dig.paramGroupedSlice",
		() => new paramGroupedSlice(),
		() => [$.methodSignature("Build", [["c", "dig.containerStore"]], ["reflect.Value", "error"]), $.methodSignature("DotParam", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dot.Param"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("callGroupDecorators", [["c", "dig.containerStore"]], ["error"]), $.methodSignature("callGroupProviders", [["c", "dig.containerStore"]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("getDecoratedValues", [["c", "dig.containerStore"]], ["reflect.Value", /* @__PURE__ */ $.basicType("bool")])],
		paramGroupedSlice,
		() => [/* @__PURE__ */ $.structField("Group", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Type", "reflect.Type", [1], 16, true), /* @__PURE__ */ $.structField("Soft", /* @__PURE__ */ $.basicType("bool"), [2], 32, true), /* @__PURE__ */ $.structField("orders", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.pointerType("dig.Scope"), /* @__PURE__ */ $.basicType("int")), [3], 40, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export async function newParam(t: reflect.Type | null, c: __goscript_container.containerStore | null): globalThis.Promise<[param | null, $.GoError]> {
	switch ((true as boolean)) {
		case (await __goscript_inout.IsOut((t as any)) || (((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) && await __goscript_inout.IsOut(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)))) || await __goscript_inout.embedsType((t as any), __goscript_inout._outPtrType):
		{
			return [null, $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot depend on result objects: %v embeds a dig.Out", (t as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")]
			break
		}
		case await __goscript_inout.IsIn((t as any)):
		{
			const __goscriptReturn0 = await newParamObject(t, c)
			return [$.interfaceValue<param | null>(__goscriptReturn0[0], "dig.paramObject", "dig.paramObject"), __goscriptReturn0[1]]
			break
		}
		case await __goscript_inout.embedsType((t as any), __goscript_inout._inPtrType):
		{
			return [null, $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot build a parameter object by embedding *dig.In, embed dig.In instead: %v embeds *dig.In", (t as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")]
			break
		}
		case ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) && await __goscript_inout.IsIn(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any)):
		{
			return [null, $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot depend on a pointer to a parameter object, use a value instead: %v is a pointer to a struct that embeds dig.In", (t as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")]
			break
		}
		default:
		{
			return [$.interfaceValue<param | null>(new paramSingle({Type: t}, true), "dig.paramSingle", "dig.paramSingle"), null]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function newParamList(ctype: reflect.Type | null, c: __goscript_container.containerStore | null): globalThis.Promise<[paramList, $.GoError]> {
	let numArgs = (__goscriptAwait = (ctype !== null && (ctype as any).__isVarRef !== true && (ctype as any).__goValue === undefined ? (ctype as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ctype)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if ((__goscriptAwait = (ctype !== null && (ctype as any).__isVarRef !== true && (ctype as any).__goValue === undefined ? (ctype as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ctype)).IsVariadic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		// NOTE: If the function is variadic, we skip the last argument
		// because we're not filling variadic arguments yet. See #120.
		numArgs--
	}

	let pl = new paramList({ctype: ctype, Params: $.makeSlice<param | null>(0, numArgs)}, true)

	for (let i = 0; i < numArgs; i++) {
		let [p, err] = await newParam((__goscriptAwait = (ctype !== null && (ctype as any).__isVarRef !== true && (ctype as any).__goValue === undefined ? (ctype as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ctype)).In(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), c)
		if (err != null) {
			return [(pl).clone(), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("bad argument %d", $.basicInterfaceValue(i + 1, "int")), err), "dig.errInvalidInput", "dig.errInvalidInput")]
		}
		pl.Params = $.appendOne(pl.Params, p, $.appendZeros.nil)
	}

	return [(pl).clone(), null]
}

export async function getParamOrder(gh: __goscript_graph.graphHolder | $.VarRef<__goscript_graph.graphHolder> | null, param: param | null): globalThis.Promise<$.Slice<number>> {
	const gh$: __goscript_graph.graphHolder = gh == null ? $.pointerTarget<__goscript_graph.graphHolder>(gh) : (gh as any).__isVarRef === true ? (gh as any).value : (gh as any).__goValue === undefined ? (gh as any) : $.pointerTarget<__goscript_graph.graphHolder>(gh)
	let orders: $.Slice<number> = null! as $.Slice<number>
	{
		const __goscriptTypeSwitchValue = param
		switch (true) {
			case $.typeAssert<paramSingle>(__goscriptTypeSwitchValue, "dig.paramSingle").ok:
				{
					let p: paramSingle = $.markAsStructValue($.cloneStructValue($.typeAssert<paramSingle>(__goscriptTypeSwitchValue, "dig.paramSingle").value))
					let providers: $.Slice<__goscript_provide.provider | null> = __goscript_scope.Scope.prototype.getAllValueProviders.call((gh$ as __goscript_graph.graphHolder).s, p.Name, p.Type)
					for (let __goscriptRangeTarget11 = providers, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
						let provider = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as __goscript_provide.provider | null)
						orders = $.appendOne(orders, (__goscriptAwait = (provider !== null && (provider as any).__isVarRef !== true && (provider as any).__goValue === undefined ? (provider as Exclude<__goscript_provide.provider, null>) : $.pointerValue<Exclude<__goscript_provide.provider, null>>(provider)).Order((gh$ as __goscript_graph.graphHolder).s), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
					}
				}
				break
			case $.typeAssert<paramGroupedSlice>(__goscriptTypeSwitchValue, "dig.paramGroupedSlice").ok:
				{
					let p: paramGroupedSlice = $.markAsStructValue($.cloneStructValue($.typeAssert<paramGroupedSlice>(__goscriptTypeSwitchValue, "dig.paramGroupedSlice").value))
					orders = $.appendOne(orders, $.mapGet<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number, number>(p.orders, (gh$ as __goscript_graph.graphHolder).s, 0)[0])
				}
				break
			case $.typeAssert<paramObject>(__goscriptTypeSwitchValue, "dig.paramObject").ok:
				{
					let p: paramObject = $.markAsStructValue($.cloneStructValue($.typeAssert<paramObject>(__goscriptTypeSwitchValue, "dig.paramObject").value))
					for (let __goscriptRangeTarget12 = p.Fields, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
						let pf = ((__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as paramObjectField)).clone()
						orders = $.appendSlice(orders, await getParamOrder(gh, pf.Param))
					}
				}
				break
		}
	}
	return orders
}

export async function newParamObject(t: reflect.Type | null, c: __goscript_container.containerStore | null): globalThis.Promise<[paramObject, $.GoError]> {
	let po = new paramObject({Type: t}, true)

	// Check if the In type supports ignoring unexported fields.
	let ignoreUnexported: boolean = false
	for (let i = 0; i < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
		let f = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
		if ($.comparableEqual(f.Type, __goscript_inout._inType)) {
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple4: any = await isIgnoreUnexportedSet(f)
			ignoreUnexported = __goscriptTuple4[0]
			err = __goscriptTuple4[1]
			if (err != null) {
				return [(po).clone(), err]
			}
			break
		}
	}

	for (let i = 0; i < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
		let f = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
		if ($.comparableEqual(f.Type, __goscript_inout._inType)) {
			// Skip over the dig.In embed.
			continue
		}
		if ((!$.stringEqual(f.PkgPath, "")) && ignoreUnexported) {
			// Skip over an unexported field if it is allowed.
			continue
		}
		let [pof, err] = await newParamObjectField(i, f, c)
		if (err != null) {
			return [(po).clone(), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("bad field %q of %v", f.Name, (t as any)), err), "dig.errInvalidInput", "dig.errInvalidInput")]
		}
		po.Fields = $.appendOne(po.Fields, (pof).clone())
	}
	return [(po).clone(), null]
}

export async function newParamObjectField(idx: number, f: reflect.StructField, c: __goscript_container.containerStore | null): globalThis.Promise<[paramObjectField, $.GoError]> {
	let pof = new paramObjectField({FieldName: f.Name, FieldIndex: idx}, true)

	let p: param | null = null! as param | null
	switch ((true as boolean)) {
		case !$.stringEqual(f.PkgPath, ""):
		{
			return [(pof).clone(), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("unexported fields not allowed in dig.In, did you mean to export %q (%v)?", f.Name, (f.Type as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")]
			break
		}
		case !$.stringEqual(reflect.StructTag_Get(f.Tag, "group"), ""):
		{
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple5: any = await newParamGroupedSlice(f, c)
			p = $.interfaceValue<param | null>(__goscriptTuple5[0], "dig.paramGroupedSlice", "dig.paramGroupedSlice")
			err = __goscriptTuple5[1]
			if (err != null) {
				return [(pof).clone(), err]
			}
			break
		}
		default:
		{
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple6: any = await newParam(f.Type, c)
			p = __goscriptTuple6[0]
			err = __goscriptTuple6[1]
			if (err != null) {
				return [(pof).clone(), err]
			}
			break
		}
	}

	{
		let [ps, ok] = $.typeAssertTuple<paramSingle>(p, "dig.paramSingle")
		if (ok) {
			ps.Name = reflect.StructTag_Get(f.Tag, "name")

			let err: $.GoError = null! as $.GoError
			let __goscriptTuple7: any = await __goscript_inout.isFieldOptional(f)
			ps.Optional = __goscriptTuple7[0]
			err = __goscriptTuple7[1]
			if (err != null) {
				return [(pof).clone(), err]
			}

			p = $.interfaceValue<param | null>((ps).clone(), "dig.paramSingle", "dig.paramSingle")
		}
	}

	pof.Param = p
	return [(pof).clone(), null]
}

export async function newParamGroupedSlice(f: reflect.StructField, c: __goscript_container.containerStore | null): globalThis.Promise<[paramGroupedSlice, $.GoError]> {
	let [g, err] = __goscript_group.parseGroupString(reflect.StructTag_Get(f.Tag, "group"))
	if (err != null) {
		return [new paramGroupedSlice(undefined, true), err]
	}
	let pg = $.varRef(new paramGroupedSlice({Group: g.Name, Type: f.Type, orders: $.makeMap<__goscript_scope.Scope | $.VarRef<__goscript_scope.Scope> | null, number>(undefined, /* @__PURE__ */ $.pointerType("dig.Scope")), Soft: g.Soft}, true))

	let name = reflect.StructTag_Get(f.Tag, "name")
	let [optional, ] = await __goscript_inout.isFieldOptional(f)
	switch ((true as boolean)) {
		case (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(f.Type).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 23:
		{
			return [(pg.value).clone(), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("value groups may be consumed as slices only: field %q (%v) is not a slice", f.Name, (f.Type as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")]
			break
		}
		case g.Flatten:
		{
			return [(pg.value).clone(), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot use flatten in parameter value groups: field %q (%v) specifies flatten", f.Name, (f.Type as any)), null), "dig.errInvalidInput", "dig.errInvalidInput")]
			break
		}
		case !$.stringEqual(name, ""):
		{
			return [(pg.value).clone(), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("cannot use named values with value groups: name:%q requested with group:%q", name, pg.value.Group), null), "dig.errInvalidInput", "dig.errInvalidInput")]
			break
		}
		case optional:
		{
			return [(pg.value).clone(), $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput("value groups cannot be optional", null), "dig.errInvalidInput", "dig.errInvalidInput")]
			break
		}
	}
	void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(c)).newGraphNode($.interfaceValue(pg, "*dig.paramGroupedSlice", /* @__PURE__ */ $.pointerType("dig.paramGroupedSlice")), pg.value.orders), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return [(pg.value).clone(), null]
}

export async function isIgnoreUnexportedSet(f: reflect.StructField): globalThis.Promise<[boolean, $.GoError]> {
	let tag = reflect.StructTag_Get(f.Tag, "ignore-unexported")
	if ($.stringEqual(tag, "")) {
		return [false, null]
	}

	let [allowed, err] = strconv.ParseBool(tag)
	if (err != null) {
		err = $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("invalid value %q for %q tag on field %v", tag, "ignore-unexported", f.Name), err), "dig.errInvalidInput", "dig.errInvalidInput")
	}

	return [allowed, err]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Error: (receiver: any, ...args: any[]) => (__goscript_error.errMissingTypes_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Format: (receiver: any, ...args: any[]) => (__goscript_error.errMissingTypes_Format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), updateGraph: (receiver: any, ...args: any[]) => (__goscript_error.errMissingTypes_updateGraph as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), writeMessage: (receiver: any, ...args: any[]) => (__goscript_error.errMissingTypes_writeMessage as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("dig.missingType", "dig.errMissingTypes"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Format", [["w", "fmt.State"], ["c", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("updateGraph", [["g", /* @__PURE__ */ $.pointerType("dot.Graph")]]), $.methodSignature("writeMessage", [["w", "io.Writer"], ["v", /* @__PURE__ */ $.basicType("string")]])])
}

var __goscriptAwait: any
