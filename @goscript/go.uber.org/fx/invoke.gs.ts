// Generated file based on invoke.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as fxreflect from "@goscript/go.uber.org/fx/internal/fxreflect/index.js"

import type * as context from "@goscript/context/index.js"

import * as dig from "@goscript/go.uber.org/dig/index.js"

import * as fxevent from "@goscript/go.uber.org/fx/fxevent/index.js"

import * as fxclock from "@goscript/go.uber.org/fx/internal/fxclock/index.js"

import * as lifecycle from "@goscript/go.uber.org/fx/internal/lifecycle/index.js"

import * as os from "@goscript/os/index.js"

import * as reflect from "@goscript/reflect/index.js"

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
import "@goscript/strings/index.js"
import "@goscript/go.uber.org/fx/internal/fxreflect/index.js"
import "@goscript/go.uber.org/dig/index.js"
import "@goscript/go.uber.org/fx/fxevent/index.js"
import "@goscript/go.uber.org/fx/internal/fxclock/index.js"
import "@goscript/go.uber.org/fx/internal/lifecycle/index.js"
import "@goscript/os/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./module.gs.ts"
import "./annotated.gs.ts"
import "./app.gs.ts"
import "./decorate.gs.ts"
import "./lifecycle.gs.ts"
import "./shutdown.gs.ts"
import "./signal.gs.ts"

$.registerTypePackagePath("go.uber.org/fx", ["fx.invokeOption"])

export class invokeOption {
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

	public clone(): invokeOption {
		return new invokeOption(this, true)
	}

	public __goscriptAssign(source: invokeOption): void {
		const target = this._fields
		const values = source._fields
		target.Targets = values.Targets
		target.Stack = values.Stack
	}

	public async String(): globalThis.Promise<string> {
		const o = this;
		let items: $.Slice<string> = $.makeSlice<string>($.sliceLen(o.Targets), undefined, "string")
		for (let __goscriptRangeTarget0 = o.Targets, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(items), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let f = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as any);
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = await fxreflect.FuncName(f)
		}
		return fmt.Sprintf("fx.Invoke(%s)", strings.Join(items, ", "))
	}

	public apply(mod: __goscript__module._module | $.VarRef<__goscript__module._module> | null): void {
		const o = this;
		const mod$: __goscript__module._module = mod == null ? $.pointerTarget<__goscript__module._module>(mod) : (mod as any).__isVarRef === true ? (mod as any).value : (mod as any).__goValue === undefined ? (mod as any) : $.pointerTarget<__goscript__module._module>(mod)
		for (let __goscriptRangeTarget1 = o.Targets, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let target = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as any);
			;(mod$ as __goscript__module._module).invokes = $.appendOne((mod$ as __goscript__module._module).invokes, new __goscript_app.invoke({Target: target, Stack: (o.Stack as fxreflect.Stack)}, true))
		}
	}

	static __typeInfo = $.registerStructType(
		"fx.invokeOption",
		() => new invokeOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["mod", /* @__PURE__ */ $.pointerType("fx.module")]])],
		invokeOption,
		() => [/* @__PURE__ */ $.structField("Targets", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [0], 0, true), /* @__PURE__ */ $.structField("Stack", /* @__PURE__ */ $.sliceType("fxreflect.Frame", "fxreflect.Stack"), [1], 24, true)]
	)
}

export async function Invoke(funcs: $.Slice<any>): globalThis.Promise<__goscript_app.Option | null> {
	return $.interfaceValue<__goscript_app.Option | null>((await (async () => { const __goscriptLiteralField0 = (await fxreflect.CallerStack(1, 0) as fxreflect.Stack); return new invokeOption({Targets: funcs, Stack: __goscriptLiteralField0}, true) })()), "fx.invokeOption", "fx.invokeOption")
}

export async function runInvoke(c: __goscript__module.container | null, i: __goscript_app.invoke): globalThis.Promise<$.GoError> {
	let fn = i.Target
	{
		const __goscriptTypeSwitchValue = fn
		switch (true) {
			case $.typeAssert<__goscript_app.Option | null>(__goscriptTypeSwitchValue, "fx.Option").ok:
				{
					let fn: __goscript_app.Option | null = $.typeAssert<__goscript_app.Option | null>(__goscriptTypeSwitchValue, "fx.Option").value
					return fmt.Errorf($.concatString("fx.Option should be passed to fx.New directly, ", "not to fx.Invoke: fx.Invoke received %v from:\n%+v"), (fn as any), $.namedValueInterfaceValue<any>(i.Stack, "fxreflect.Stack", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
				}
				break
			case $.typeAssert<__goscript_annotated.annotated>(__goscriptTypeSwitchValue, "fx.annotated").ok:
				{
					let fn: $.VarRef<__goscript_annotated.annotated> = $.varRef($.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_annotated.annotated>(__goscriptTypeSwitchValue, "fx.annotated").value)))
					let [af, err] = await fn.value.Build()
					if (err != null) {
						return err
					}

					return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript__module.container, null>) : $.pointerValue<Exclude<__goscript__module.container, null>>(c)).Invoke(af, null)
				}
				break
			default:
				{
					let fn: any = __goscriptTypeSwitchValue
					return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript__module.container, null>) : $.pointerValue<Exclude<__goscript__module.container, null>>(c)).Invoke(fn, null)
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
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
