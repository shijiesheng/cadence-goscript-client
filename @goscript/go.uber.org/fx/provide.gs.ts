// Generated file based on provide.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as dig from "@goscript/go.uber.org/dig/index.js"

import * as fxreflect from "@goscript/go.uber.org/fx/internal/fxreflect/index.js"

import type * as context from "@goscript/context/index.js"

import * as fxevent from "@goscript/go.uber.org/fx/fxevent/index.js"

import * as fxclock from "@goscript/go.uber.org/fx/internal/fxclock/index.js"

import * as lifecycle from "@goscript/go.uber.org/fx/internal/lifecycle/index.js"

import * as os from "@goscript/os/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript__module from "./module.gs.ts"

import * as __goscript_annotated from "./annotated.gs.ts"

import * as __goscript_app from "./app.gs.ts"

import * as __goscript_decorate from "./decorate.gs.ts"

import * as __goscript_lifecycle from "./lifecycle.gs.ts"

import type * as __goscript_log from "./log.gs.ts"

import * as __goscript_shutdown from "./shutdown.gs.ts"

import * as __goscript_signal from "./signal.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/go.uber.org/dig/index.js"
import "@goscript/go.uber.org/fx/internal/fxreflect/index.js"
import "@goscript/go.uber.org/fx/fxevent/index.js"
import "@goscript/go.uber.org/fx/internal/fxclock/index.js"
import "@goscript/go.uber.org/fx/internal/lifecycle/index.js"
import "@goscript/os/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./module.gs.ts"
import "./annotated.gs.ts"
import "./app.gs.ts"
import "./decorate.gs.ts"
import "./lifecycle.gs.ts"
import "./shutdown.gs.ts"
import "./signal.gs.ts"

$.registerTypePackagePath("go.uber.org/fx", ["fx.provideOption", "fx.privateOption"])

export class provideOption {
	public get Targets(): $.Slice<any> {
		return this._fields.Targets
	}

	public set Targets(value: $.Slice<any>) {
		this._fields.Targets = value
	}

	public get Stack(): fxreflect.Stack {
		return this._fields.Stack
	}

	public set Stack(value: fxreflect.Stack) {
		this._fields.Stack = value
	}

	public _fields: {
		Targets: $.Slice<any>
		Stack: fxreflect.Stack
	}

	constructor(init?: Partial<{Targets?: $.Slice<any>, Stack?: fxreflect.Stack}>, __goscriptValue?: boolean) {
		this._fields = {
			Targets: init?.Targets ?? (null! as $.Slice<any>),
			Stack: init?.Stack ?? (null! as fxreflect.Stack)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): provideOption {
		return new provideOption(this, true)
	}

	public __goscriptAssign(source: provideOption): void {
		const target = this._fields
		const values = source._fields
		target.Targets = values.Targets
		target.Stack = values.Stack
	}

	public async String(): globalThis.Promise<string> {
		const o = this;
		let items: $.Slice<string> = $.makeSlice<string>($.sliceLen(o.Targets), undefined, "string")
		for (let __goscriptRangeTarget0 = o.Targets, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(items), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let c = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as any);
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = await fxreflect.FuncName(c)
		}
		return fmt.Sprintf("fx.Provide(%s)", strings.Join(items, ", "))
	}

	public apply(mod: __goscript__module._module | $.VarRef<__goscript__module._module> | null): void {
		const o = this;
		const mod$: __goscript__module._module = mod == null ? $.pointerTarget<__goscript__module._module>(mod) : (mod as any).__isVarRef === true ? (mod as any).value : (mod as any).__goValue === undefined ? (mod as any) : $.pointerTarget<__goscript__module._module>(mod)
		let _private: boolean = false

		let targets: $.Slice<any> = $.makeSlice<any>(0, $.sliceLen(o.Targets))
		for (let __goscriptRangeTarget1 = o.Targets, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let target = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as any)
			{
				let [, ok] = $.typeAssertTuple<privateOption>(target, "fx.privateOption")
				if (ok) {
					_private = true
					continue
				}
			}
			targets = $.appendOne(targets, target, $.appendZeros.nil)
		}

		for (let __goscriptRangeTarget2 = targets, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let target = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as any);
			;(mod$ as __goscript__module._module).provides = $.appendOne((mod$ as __goscript__module._module).provides, new __goscript_app.provide({Target: target, Stack: (o.Stack as fxreflect.Stack), Private: _private}, true))
		}
	}

	static __typeInfo = $.registerStructType(
		"fx.provideOption",
		() => new provideOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["mod", /* @__PURE__ */ $.pointerType("fx.module")]])],
		provideOption,
		() => [/* @__PURE__ */ $.structField("Targets", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [0], 0, true), /* @__PURE__ */ $.structField("Stack", /* @__PURE__ */ $.sliceType("fxreflect.Frame", "fxreflect.Stack"), [1], 24, true)]
	)
}

export class privateOption {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): privateOption {
		return new privateOption(this, true)
	}

	public __goscriptAssign(source: privateOption): void {
	}

	static __typeInfo = $.registerStructType(
		"fx.privateOption",
		() => new privateOption(),
		() => [],
		privateOption,
		() => []
	)
}

export async function Provide(constructors: $.Slice<any>): globalThis.Promise<__goscript_app.Option | null> {
	return $.interfaceValue<__goscript_app.Option | null>((await (async () => { const __goscriptLiteralField0 = (await fxreflect.CallerStack(1, 0) as fxreflect.Stack); return new provideOption({Targets: constructors, Stack: __goscriptLiteralField0}, true) })()), "fx.provideOption", "fx.provideOption")
}

export let Private: privateOption = new privateOption(undefined, true)

export function __goscript_set_Private(__goscriptValue: privateOption): void {
	$.assignStruct(Private, __goscriptValue)
}

export async function runProvide(c: __goscript__module.container | null, p: __goscript_app.provide, opts: $.Slice<dig.ProvideOption | null>): globalThis.Promise<$.GoError> {
	let _constructor = p.Target
	{
		let [, ok] = $.typeAssertTuple<__goscript_app.Option | null>(_constructor, "fx.Option")
		if (ok) {
			return fmt.Errorf($.concatString("fx.Option should be passed to fx.New directly, ", "not to fx.Provide: fx.Provide received %v from:\n%+v"), _constructor, $.namedValueInterfaceValue<any>(p.Stack, "fxreflect.Stack", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
		}
	}

	{
		const __goscriptTypeSwitchValue = _constructor
		switch (true) {
			case $.typeAssert<__goscript_annotated.annotationError>(__goscriptTypeSwitchValue, "fx.annotationError").ok:
				{
					let _constructor: __goscript_annotated.annotationError = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_annotated.annotationError>(__goscriptTypeSwitchValue, "fx.annotationError").value))
					return fmt.Errorf("encountered error while applying annotation using fx.Annotate to %s: %w", await fxreflect.FuncName(_constructor.target), (_constructor.err as any))
				}
				break
			case $.typeAssert<__goscript_annotated.annotated>(__goscriptTypeSwitchValue, "fx.annotated").ok:
				{
					let _constructor: $.VarRef<__goscript_annotated.annotated> = $.varRef($.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_annotated.annotated>(__goscriptTypeSwitchValue, "fx.annotated").value)))
					let [ctor, err] = await _constructor.value.Build()
					if (err != null) {
						return fmt.Errorf("fx.Provide(%v) from:\n%+vFailed: %w", $.interfaceValue((_constructor.value).clone(), "fx.annotated", "fx.annotated"), $.namedValueInterfaceValue<any>(p.Stack, "fxreflect.Stack", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (err as any))
					}

					opts = $.appendOne(opts, dig.LocationForPC(_constructor.value.FuncPtr), $.appendZeros.nil)
					{
						let __goscriptShadow0 = (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript__module.container, null>) : $.pointerValue<Exclude<__goscript__module.container, null>>(c)).Provide(ctor, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (__goscriptShadow0 != null) {
							return fmt.Errorf("fx.Provide(%v) from:\n%+vFailed: %w", $.interfaceValue((_constructor.value).clone(), "fx.annotated", "fx.annotated"), $.namedValueInterfaceValue<any>(p.Stack, "fxreflect.Stack", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (__goscriptShadow0 as any))
						}
					}
				}
				break
			case $.typeAssert<__goscript_annotated.Annotated>(__goscriptTypeSwitchValue, "fx.Annotated").ok:
				{
					let _constructor: __goscript_annotated.Annotated = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_annotated.Annotated>(__goscriptTypeSwitchValue, "fx.Annotated").value))
					let ann = (_constructor).clone()
					switch ((true as boolean)) {
						case ($.stringLen(ann.Group) > 0) && ($.stringLen(ann.Name) > 0):
						{
							return fmt.Errorf("fx.Annotated may specify only one of Name or Group: received %v from:\n%+v", $.interfaceValue((ann).clone(), "fx.Annotated", "fx.Annotated"), $.namedValueInterfaceValue<any>(p.Stack, "fxreflect.Stack", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
							break
						}
						case $.stringLen(ann.Name) > 0:
						{
							opts = $.appendOne(opts, dig.Name(ann.Name), $.appendZeros.nil)
							break
						}
						case $.stringLen(ann.Group) > 0:
						{
							opts = $.appendOne(opts, dig.Group(ann.Group), $.appendZeros.nil)
							break
						}
					}

					{
						let err = (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript__module.container, null>) : $.pointerValue<Exclude<__goscript__module.container, null>>(c)).Provide(ann.Target, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (err != null) {
							return fmt.Errorf("fx.Provide(%v) from:\n%+vFailed: %w", $.interfaceValue((ann).clone(), "fx.Annotated", "fx.Annotated"), $.namedValueInterfaceValue<any>(p.Stack, "fxreflect.Stack", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (err as any))
						}
					}
				}
				break
			default:
				{
					let _constructor: any = __goscriptTypeSwitchValue
					if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(_constructor)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 19) {
						let ft = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(_constructor))).Type()

						for (let i = 0; i < (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
							let t = (__goscriptAwait = (ft !== null && (ft as any).__isVarRef !== true && (ft as any).__goValue === undefined ? (ft as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(ft)).Out(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

							if ($.comparableEqual(t, reflect.TypeOf($.interfaceValue(new __goscript_annotated.Annotated(undefined, true), "fx.Annotated", "fx.Annotated")))) {
								return fmt.Errorf($.concatString(($.concatString("fx.Annotated should be passed to fx.Provide directly, ", "it should not be returned by the constructor: ")), "fx.Provide received %v from:\n%+v"), await fxreflect.FuncName(_constructor), $.namedValueInterfaceValue<any>(p.Stack, "fxreflect.Stack", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
							}
						}
					}

					{
						let err = (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript__module.container, null>) : $.pointerValue<Exclude<__goscript__module.container, null>>(c)).Provide(_constructor, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (err != null) {
							return fmt.Errorf("fx.Provide(%v) from:\n%+vFailed: %w", await fxreflect.FuncName(_constructor), $.namedValueInterfaceValue<any>(p.Stack, "fxreflect.Stack", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (err as any))
						}
					}
				}
				break
		}
	}
	return null
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
