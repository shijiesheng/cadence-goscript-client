// Generated file based on callback.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as digreflect from "@goscript/go.uber.org/dig/internal/digreflect/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as __goscript_decorate from "./decorate.gs.ts"

import * as __goscript_provide from "./provide.gs.ts"
import "@goscript/go.uber.org/dig/internal/digreflect/index.js"
import "@goscript/reflect/index.js"
import "./decorate.gs.ts"
import "./provide.gs.ts"

$.registerTypePackagePath("go.uber.org/dig", ["dig.CallbackInfo", "dig.Callback", "dig.withCallbackOption"])

export type Callback = ((_p0: CallbackInfo) => void) | null

export class CallbackInfo {
	// Name is the name of the function in the format:
	// <package_name>.<function_name>
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// Error contains the error returned by the [Callback]'s associated
	// function, if any. When used in conjunction with [RecoverFromPanics],
	// this will be set to a [PanicError] when the function panics.
	public get Error(): $.GoError {
		return this._fields.Error
	}

	public set Error(value: $.GoError) {
		this._fields.Error = value
	}

	public _fields: {
		Name: string
		Error: $.GoError
	}

	constructor(init?: Partial<{Name?: string, Error?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Error: init?.Error ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CallbackInfo {
		return new CallbackInfo(this, true)
	}

	public __goscriptAssign(source: CallbackInfo): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Error = $.assignFieldValue(target.Error, values.Error, "error")
	}

	static __typeInfo = $.registerStructType(
		"dig.CallbackInfo",
		() => new CallbackInfo(),
		() => [],
		CallbackInfo,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Error", "error", [1], 16, true)]
	)
}

export class withCallbackOption {
	public get callback(): ((_p0: CallbackInfo) => void) | null {
		return this._fields.callback
	}

	public set callback(value: ((_p0: CallbackInfo) => void) | null) {
		this._fields.callback = value
	}

	public _fields: {
		callback: ((_p0: CallbackInfo) => void) | null
	}

	constructor(init?: Partial<{callback?: ((_p0: CallbackInfo) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			callback: init?.callback ?? (null! as ((_p0: CallbackInfo) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): withCallbackOption {
		return new withCallbackOption(this, true)
	}

	public __goscriptAssign(source: withCallbackOption): void {
		const target = this._fields
		const values = source._fields
		target.callback = values.callback
	}

	public apply(_do: __goscript_decorate.decorateOptions | $.VarRef<__goscript_decorate.decorateOptions> | null): void {
		const o = this;
		$.pointerValue<__goscript_decorate.decorateOptions>(_do).Callback = o.callback
	}

	public applyProvideOption(po: __goscript_provide.provideOptions | $.VarRef<__goscript_provide.provideOptions> | null): void {
		const o = this;
		$.pointerValue<__goscript_provide.provideOptions>(po).Callback = o.callback
	}

	static __typeInfo = $.registerStructType(
		"dig.withCallbackOption",
		() => new withCallbackOption(),
		() => [$.methodSignature("apply", [["do", /* @__PURE__ */ $.pointerType("dig.decorateOptions")]]), $.methodSignature("applyProvideOption", [["po", /* @__PURE__ */ $.pointerType("dig.provideOptions")]])],
		withCallbackOption,
		() => [/* @__PURE__ */ $.structField("callback", ({ kind: $.TypeKind.Function, name: "dig.Callback", params: ["dig.CallbackInfo"], results: [] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "go.uber.org/dig" })]
	)
}

export async function WithProviderCallback(callback: ((_p0: CallbackInfo) => void) | null): globalThis.Promise<__goscript_provide.ProvideOption | null> {
	return $.interfaceValue<__goscript_provide.ProvideOption | null>(new withCallbackOption({callback: callback}, true), "dig.withCallbackOption", "dig.withCallbackOption")
}

export async function WithDecoratorCallback(callback: ((_p0: CallbackInfo) => void) | null): globalThis.Promise<__goscript_decorate.DecorateOption | null> {
	return $.interfaceValue<__goscript_decorate.DecorateOption | null>(new withCallbackOption({callback: callback}, true), "dig.withCallbackOption", "dig.withCallbackOption")
}
