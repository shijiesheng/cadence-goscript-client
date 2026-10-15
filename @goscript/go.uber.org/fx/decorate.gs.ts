// Generated file based on decorate.go
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
import "./lifecycle.gs.ts"
import "./shutdown.gs.ts"
import "./signal.gs.ts"

$.registerTypePackagePath("go.uber.org/fx", ["fx.decorateOption", "fx.decorator"])

export class decorateOption {
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

	public clone(): decorateOption {
		return new decorateOption(this, true)
	}

	public __goscriptAssign(source: decorateOption): void {
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
		return fmt.Sprintf("fx.Decorate(%s)", strings.Join(items, ", "))
	}

	public apply(mod: __goscript__module._module | $.VarRef<__goscript__module._module> | null): void {
		const o = this;
		const mod$: __goscript__module._module = mod == null ? $.pointerTarget<__goscript__module._module>(mod) : (mod as any).__isVarRef === true ? (mod as any).value : (mod as any).__goValue === undefined ? (mod as any) : $.pointerTarget<__goscript__module._module>(mod)
		for (let __goscriptRangeTarget1 = o.Targets, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let target = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as any);
			;(mod$ as __goscript__module._module).decorators = $.appendOne((mod$ as __goscript__module._module).decorators, new decorator({Target: target, Stack: (o.Stack as fxreflect.Stack)}, true))
		}
	}

	static __typeInfo = $.registerStructType(
		"fx.decorateOption",
		() => new decorateOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["mod", /* @__PURE__ */ $.pointerType("fx.module")]])],
		decorateOption,
		() => [/* @__PURE__ */ $.structField("Targets", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [0], 0, true), /* @__PURE__ */ $.structField("Stack", /* @__PURE__ */ $.sliceType("fxreflect.Frame", "fxreflect.Stack"), [1], 24, true)]
	)
}

export class decorator {
	// Decorator provided to Fx.
	public get Target(): any {
		return this._fields.Target
	}

	public set Target(value: any) {
		this._fields.Target = value
	}

	// Stack trace of where this provide was made.
	public get Stack(): fxreflect.Stack {
		return this._fields.Stack
	}

	public set Stack(value: fxreflect.Stack) {
		this._fields.Stack = value
	}

	// Whether this decorator was specified via fx.Replace
	public get IsReplace(): boolean {
		return this._fields.IsReplace
	}

	public set IsReplace(value: boolean) {
		this._fields.IsReplace = value
	}

	public get ReplaceType(): reflect.Type | null {
		return this._fields.ReplaceType
	}

	public set ReplaceType(value: reflect.Type | null) {
		this._fields.ReplaceType = value
	}

	public _fields: {
		Target: any
		Stack: fxreflect.Stack
		IsReplace: boolean
		ReplaceType: reflect.Type | null
	}

	constructor(init?: Partial<{Target?: any, Stack?: fxreflect.Stack, IsReplace?: boolean, ReplaceType?: reflect.Type | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Target: init?.Target ?? (null! as any),
			Stack: init?.Stack ?? (null! as fxreflect.Stack),
			IsReplace: init?.IsReplace ?? (false as boolean),
			ReplaceType: init?.ReplaceType ?? (null! as reflect.Type | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decorator {
		return new decorator(this, true)
	}

	public __goscriptAssign(source: decorator): void {
		const target = this._fields
		const values = source._fields
		target.Target = $.assignFieldValue(target.Target, values.Target, { kind: $.TypeKind.Interface, methods: [] })
		target.Stack = values.Stack
		target.IsReplace = values.IsReplace
		target.ReplaceType = $.assignFieldValue(target.ReplaceType, values.ReplaceType, "reflect.Type")
	}

	static __typeInfo = $.registerStructType(
		"fx.decorator",
		() => new decorator(),
		() => [],
		decorator,
		() => [/* @__PURE__ */ $.structField("Target", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, true), /* @__PURE__ */ $.structField("Stack", /* @__PURE__ */ $.sliceType("fxreflect.Frame", "fxreflect.Stack"), [1], 16, true), /* @__PURE__ */ $.structField("IsReplace", /* @__PURE__ */ $.basicType("bool"), [2], 40, true), /* @__PURE__ */ $.structField("ReplaceType", "reflect.Type", [3], 48, true)]
	)
}

export async function Decorate(decorators: $.Slice<any>): globalThis.Promise<__goscript_app.Option | null> {
	return $.interfaceValue<__goscript_app.Option | null>((await (async () => { const __goscriptLiteralField0 = (await fxreflect.CallerStack(1, 0) as fxreflect.Stack); return new decorateOption({Targets: decorators, Stack: __goscriptLiteralField0}, true) })()), "fx.decorateOption", "fx.decorateOption")
}

export async function runDecorator(c: __goscript__module.container | null, d: decorator, opts: $.Slice<dig.DecorateOption | null>): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	using __defer = new $.DisposableStack()
	let __goscriptShadow0 = d.Target
	__defer.defer(() => { ((): void => {
		if (err != null) {
			err = fmt.Errorf("fx.Decorate(%v) from:\n%+vFailed: %w", __goscriptShadow0, $.namedValueInterfaceValue<any>(d.Stack, "fxreflect.Stack", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (err as any))
		}
	})() })

	{
		const __goscriptTypeSwitchValue = __goscriptShadow0
		switch (true) {
			case $.typeAssert<__goscript_annotated.annotated>(__goscriptTypeSwitchValue, "fx.annotated").ok:
				{
					let decorator: $.VarRef<__goscript_annotated.annotated> = $.varRef($.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_annotated.annotated>(__goscriptTypeSwitchValue, "fx.annotated").value)))
					{
						let [dcor, derr] = await decorator.value.Build()
						if (derr == null) {
							err = (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript__module.container, null>) : $.pointerValue<Exclude<__goscript__module.container, null>>(c)).Decorate(dcor, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
					}
				}
				break
			default:
				{
					let decorator: any = __goscriptTypeSwitchValue
					err = (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript__module.container, null>) : $.pointerValue<Exclude<__goscript__module.container, null>>(c)).Decorate(decorator, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				break
		}
	}
	__defer.dispose()
	return err
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
