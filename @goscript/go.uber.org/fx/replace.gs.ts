// Generated file based on replace.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as fxreflect from "@goscript/go.uber.org/fx/internal/fxreflect/index.js"

import type * as context from "@goscript/context/index.js"

import * as dig from "@goscript/go.uber.org/dig/index.js"

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
import "@goscript/go.uber.org/fx/internal/fxreflect/index.js"
import "@goscript/go.uber.org/dig/index.js"
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

$.registerTypePackagePath("go.uber.org/fx", ["fx.replaceOption"])

export class replaceOption {
	public get Targets(): $.Slice<any> {
		return this._fields.Targets
	}

	public set Targets(value: $.Slice<any>) {
		this._fields.Targets = value
	}

	public get Types(): $.Slice<reflect.Type | null> {
		return this._fields.Types
	}

	public set Types(value: $.Slice<reflect.Type | null>) {
		this._fields.Types = value
	}

	public get Stack(): fxreflect.Stack {
		return this._fields.Stack
	}

	public set Stack(value: fxreflect.Stack) {
		this._fields.Stack = value
	}

	public _fields: {
		Targets: $.Slice<any>
		Types: $.Slice<reflect.Type | null>
		Stack: fxreflect.Stack
	}

	constructor(init?: Partial<{Targets?: $.Slice<any>, Types?: $.Slice<reflect.Type | null>, Stack?: fxreflect.Stack}>, __goscriptValue?: boolean) {
		this._fields = {
			Targets: init?.Targets ?? (null! as $.Slice<any>),
			Types: init?.Types ?? (null! as $.Slice<reflect.Type | null>),
			Stack: init?.Stack ?? (null! as fxreflect.Stack)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): replaceOption {
		return new replaceOption(this, true)
	}

	public __goscriptAssign(source: replaceOption): void {
		const target = this._fields
		const values = source._fields
		target.Targets = values.Targets
		target.Types = values.Types
		target.Stack = values.Stack
	}

	public async String(): globalThis.Promise<string> {
		const o = this;
		let items: $.Slice<string> = $.makeSlice<string>(0, $.sliceLen(o.Targets), "string")
		for (let __goscriptRangeTarget1 = o.Types, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let typ = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as reflect.Type | null)
			items = $.appendOne(items, (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}
		return fmt.Sprintf("fx.Replace(%s)", strings.Join(items, ", "))
	}

	public apply(m: __goscript__module._module | $.VarRef<__goscript__module._module> | null): void {
		const o = this;
		const m$: __goscript__module._module = m == null ? $.pointerTarget<__goscript__module._module>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<__goscript__module._module>(m)
		for (let __goscriptRangeTarget2 = o.Targets, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), i = 0; i < __goscriptRangeWindow2.length; i++) {
			let target = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as any);
			;(m$ as __goscript__module._module).decorators = $.appendOne((m$ as __goscript__module._module).decorators, new __goscript_decorate.decorator({Target: target, Stack: (o.Stack as fxreflect.Stack), IsReplace: true, ReplaceType: $.arrayIndex(o.Types!, i)}, true))
		}
	}

	static __typeInfo = $.registerStructType(
		"fx.replaceOption",
		() => new replaceOption(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("apply", [["m", /* @__PURE__ */ $.pointerType("fx.module")]])],
		replaceOption,
		() => [/* @__PURE__ */ $.structField("Targets", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [0], 0, true), /* @__PURE__ */ $.structField("Types", /* @__PURE__ */ $.sliceType("reflect.Type"), [1], 24, true), /* @__PURE__ */ $.structField("Stack", /* @__PURE__ */ $.sliceType("fxreflect.Frame", "fxreflect.Stack"), [2], 48, true)]
	)
}

export async function Replace(values: $.Slice<any>): globalThis.Promise<__goscript_app.Option | null> {
	let decorators: $.Slice<any> = $.makeSlice<any>($.sliceLen(values))
	let types: $.Slice<reflect.Type | null> = $.makeSlice<reflect.Type | null>($.sliceLen(values))
	for (let __goscriptRangeTarget0 = values, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(decorators), __goscriptSliceWindow1 = $.sliceRange(types), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let value = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as any)
		{
			const __goscriptTypeSwitchValue = value
			switch (true) {
				case $.typeAssert<__goscript_annotated.annotated>(__goscriptTypeSwitchValue, "fx.annotated").ok:
					{
						let value: __goscript_annotated.annotated = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_annotated.annotated>(__goscriptTypeSwitchValue, "fx.annotated").value))
						let typ: reflect.Type | null = null! as reflect.Type | null
						let __goscriptTuple0: any = newReplaceDecorator(value.Target)
						value.Target = __goscriptTuple0[0]
						typ = __goscriptTuple0[1];
						;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = $.interfaceValue((value).clone(), "fx.annotated", "fx.annotated");
						;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = typ
					}
					break
				default:
					{
						let value: any = __goscriptTypeSwitchValue
						let __goscriptTuple1: any = newReplaceDecorator(value);
						;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = __goscriptTuple1[0];
						;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = __goscriptTuple1[1]
					}
					break
			}
		}
	}

	return $.interfaceValue<__goscript_app.Option | null>((await (async () => { const __goscriptLiteralField0 = (await fxreflect.CallerStack(1, 0) as fxreflect.Stack); return new replaceOption({Targets: decorators, Types: types, Stack: __goscriptLiteralField0}, true) })()), "fx.replaceOption", "fx.replaceOption")
}

export function newReplaceDecorator(value: any): [any, reflect.Type | null] {
	{
		const __goscriptTypeSwitchValue = value
		switch (true) {
			case __goscriptTypeSwitchValue == null:
				{
					$.panic("untyped nil passed to fx.Replace")
				}
				break
			case $.typeAssert<$.GoError>(__goscriptTypeSwitchValue, "error").ok:
				{
					$.panic("error value passed to fx.Replace")
				}
				break
		}
	}

	let typ = reflect.TypeOf(value)
	let returnTypes: $.Slice<reflect.Type | null> = $.arrayToSlice<reflect.Type | null>([typ])
	let returnValues: $.Slice<reflect.Value> = $.arrayToSlice<reflect.Value>([$.markAsStructValue($.cloneStructValue(reflect.ValueOf(value)))])

	let ft = reflect.FuncOf($.arrayToSlice<reflect.Type | null>([]), returnTypes, false)
	let fv = $.markAsStructValue($.cloneStructValue(reflect.MakeFunc($.pointerValueOrNil(ft)!, $.functionValue((_p0: $.Slice<reflect.Value>): $.Slice<reflect.Value> => {
		return returnValues
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)))))

	return [$.markAsStructValue($.cloneStructValue(fv)).Interface(), typ]
}

var __goscriptAwait: any
