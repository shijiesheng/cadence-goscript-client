// Generated file based on invoke.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as digreflect from "@goscript/go.uber.org/dig/internal/digreflect/index.js"

import * as graph from "@goscript/go.uber.org/dig/internal/graph/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as dot from "@goscript/go.uber.org/dig/internal/dot/index.js"

import type * as io from "@goscript/io/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as __goscript__constructor from "./constructor.gs.ts"

import * as __goscript_callback from "./callback.gs.ts"

import * as __goscript_container from "./container.gs.ts"

import * as __goscript_decorate from "./decorate.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_graph from "./graph.gs.ts"

import * as __goscript_inout from "./inout.gs.ts"

import * as __goscript_param from "./param.gs.ts"

import * as __goscript_provide from "./provide.gs.ts"

import * as __goscript_result from "./result.gs.ts"

import * as __goscript_scope from "./scope.gs.ts"

import * as __goscript_visualize from "./visualize.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/dig/internal/digreflect/index.js"
import "@goscript/go.uber.org/dig/internal/graph/index.js"
import "@goscript/reflect/index.js"
import "@goscript/go.uber.org/dig/internal/dot/index.js"
import "@goscript/math/rand/index.js"
import "./constructor.gs.ts"
import "./callback.gs.ts"
import "./container.gs.ts"
import "./decorate.gs.ts"
import "./error.gs.ts"
import "./graph.gs.ts"
import "./inout.gs.ts"
import "./param.gs.ts"
import "./provide.gs.ts"
import "./result.gs.ts"
import "./scope.gs.ts"
import "./visualize.gs.ts"

$.registerTypePackagePath("go.uber.org/dig", ["dig.InvokeOption", "dig.invokeOptions", "dig.InvokeInfo", "dig.fillInvokeInfoOption"])

export type InvokeOption = {
	applyInvokeOption(_p0: invokeOptions | $.VarRef<invokeOptions> | null): void
}

$.registerInterfaceType(
	"dig.InvokeOption",
	null,
	[$.methodSignature("applyInvokeOption", [/* @__PURE__ */ $.pointerType("dig.invokeOptions")])]
);

export class invokeOptions {
	public get Info(): InvokeInfo | $.VarRef<InvokeInfo> | null {
		return this._fields.Info
	}

	public set Info(value: InvokeInfo | $.VarRef<InvokeInfo> | null) {
		this._fields.Info = value
	}

	public _fields: {
		Info: InvokeInfo | $.VarRef<InvokeInfo> | null
	}

	constructor(init?: Partial<{Info?: InvokeInfo | $.VarRef<InvokeInfo> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Info: init?.Info ?? (null! as InvokeInfo | $.VarRef<InvokeInfo> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): invokeOptions {
		return new invokeOptions(this, true)
	}

	public __goscriptAssign(source: invokeOptions): void {
		const target = this._fields
		const values = source._fields
		target.Info = values.Info
	}

	static __typeInfo = $.registerStructType(
		"dig.invokeOptions",
		() => new invokeOptions(),
		() => [],
		invokeOptions,
		() => [/* @__PURE__ */ $.structField("Info", /* @__PURE__ */ $.pointerType("dig.InvokeInfo"), [0], 0, true)]
	)
}

export class InvokeInfo {
	public get Inputs(): $.Slice<__goscript_provide.Input | $.VarRef<__goscript_provide.Input> | null> {
		return this._fields.Inputs
	}

	public set Inputs(value: $.Slice<__goscript_provide.Input | $.VarRef<__goscript_provide.Input> | null>) {
		this._fields.Inputs = value
	}

	public _fields: {
		Inputs: $.Slice<__goscript_provide.Input | $.VarRef<__goscript_provide.Input> | null>
	}

	constructor(init?: Partial<{Inputs?: $.Slice<__goscript_provide.Input | $.VarRef<__goscript_provide.Input> | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Inputs: init?.Inputs ?? (null! as $.Slice<__goscript_provide.Input | $.VarRef<__goscript_provide.Input> | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): InvokeInfo {
		return new InvokeInfo(this, true)
	}

	public __goscriptAssign(source: InvokeInfo): void {
		const target = this._fields
		const values = source._fields
		target.Inputs = values.Inputs
	}

	static __typeInfo = $.registerStructType(
		"dig.InvokeInfo",
		() => new InvokeInfo(),
		() => [],
		InvokeInfo,
		() => [/* @__PURE__ */ $.structField("Inputs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("dig.Input")), [0], 0, true)]
	)
}

export class fillInvokeInfoOption {
	public get info(): InvokeInfo | $.VarRef<InvokeInfo> | null {
		return this._fields.info
	}

	public set info(value: InvokeInfo | $.VarRef<InvokeInfo> | null) {
		this._fields.info = value
	}

	public _fields: {
		info: InvokeInfo | $.VarRef<InvokeInfo> | null
	}

	constructor(init?: Partial<{info?: InvokeInfo | $.VarRef<InvokeInfo> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			info: init?.info ?? (null! as InvokeInfo | $.VarRef<InvokeInfo> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fillInvokeInfoOption {
		return new fillInvokeInfoOption(this, true)
	}

	public __goscriptAssign(source: fillInvokeInfoOption): void {
		const target = this._fields
		const values = source._fields
		target.info = values.info
	}

	public async String(): globalThis.Promise<string> {
		const o = this;
		return fmt.Sprintf("FillInvokeInfo(%p)", $.interfaceValue(o.info, "*dig.InvokeInfo", /* @__PURE__ */ $.pointerType("dig.InvokeInfo")))
	}

	public applyInvokeOption(opts: invokeOptions | $.VarRef<invokeOptions> | null): void {
		const o = this;
		$.pointerValue<invokeOptions>(opts).Info = o.info
	}

	static __typeInfo = $.registerStructType(
		"dig.fillInvokeInfoOption",
		() => new fillInvokeInfoOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("applyInvokeOption", [["opts", /* @__PURE__ */ $.pointerType("dig.invokeOptions")]])],
		fillInvokeInfoOption,
		() => [/* @__PURE__ */ $.structField("info", /* @__PURE__ */ $.pointerType("dig.InvokeInfo"), [0], 0, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export function FillInvokeInfo(info: InvokeInfo | $.VarRef<InvokeInfo> | null): InvokeOption | null {
	return $.interfaceValue<InvokeOption | null>(new fillInvokeInfoOption({info: info}, true), "dig.fillInvokeInfoOption", "dig.fillInvokeInfoOption")
}

export async function shallowCheckDependencies(c: __goscript_container.containerStore | null, pl: __goscript_param.paramList): globalThis.Promise<$.GoError> {
	let err: __goscript_error.errMissingTypes = null! as __goscript_error.errMissingTypes

	let missingDeps: $.Slice<__goscript_param.paramSingle> = findMissingDependencies(c, pl.Params)
	for (let __goscriptRangeTarget0 = missingDeps, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let dep = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_param.paramSingle)).clone()
		err = ($.appendSlice((err as __goscript_error.errMissingTypes), await __goscript_error.newErrMissingTypes(c, new __goscript_container.key({name: dep.Name, t: dep.Type}, true))) as __goscript_error.errMissingTypes)
	}

	if ($.sliceLen((err as __goscript_error.errMissingTypes)) > 0) {
		return $.namedValueInterfaceValue<$.GoError>(err, "dig.errMissingTypes", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
	}
	return null
}

export function findMissingDependencies(c: __goscript_container.containerStore | null, params: $.Slice<__goscript_param.param | null>): $.Slice<__goscript_param.paramSingle> {
	let missingDeps: $.Slice<__goscript_param.paramSingle> = null! as $.Slice<__goscript_param.paramSingle>

	for (let __goscriptRangeTarget2 = params, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let param = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_param.param | null)
		{
			const __goscriptTypeSwitchValue = param
			switch (true) {
				case $.typeAssert<__goscript_param.paramSingle>(__goscriptTypeSwitchValue, "dig.paramSingle").ok:
					{
						let p: __goscript_param.paramSingle = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_param.paramSingle>(__goscriptTypeSwitchValue, "dig.paramSingle").value))
						let allProviders: $.Slice<__goscript_provide.provider | null> = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(c)).getAllValueProviders(p.Name, p.Type)
						let [, hasDecoratedValue] = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_container.containerStore, null>) : $.pointerValue<Exclude<__goscript_container.containerStore, null>>(c)).getDecoratedValue(p.Name, p.Type)
						// This means that there is no provider that provides this value,
						// and it is NOT being decorated and is NOT optional.
						// In the case that there is no providers but there is a decorated value
						// of this type, it can be provided safely so we can safely skip this.
						if ((($.sliceLen(allProviders) == 0) && !hasDecoratedValue) && !p.Optional) {
							missingDeps = $.appendOne(missingDeps, (p).clone())
						}
					}
					break
				case $.typeAssert<__goscript_param.paramObject>(__goscriptTypeSwitchValue, "dig.paramObject").ok:
					{
						let p: __goscript_param.paramObject = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_param.paramObject>(__goscriptTypeSwitchValue, "dig.paramObject").value))
						for (let __goscriptRangeTarget1 = p.Fields, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
							let f = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_param.paramObjectField)).clone()
							missingDeps = $.appendSlice(missingDeps, findMissingDependencies(c, $.arrayToSlice<__goscript_param.param | null>([f.Param])))
						}
					}
					break
			}
		}
	}
	return missingDeps
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
