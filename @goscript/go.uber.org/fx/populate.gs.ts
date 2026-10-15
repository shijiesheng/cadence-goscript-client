// Generated file based on populate.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import type * as context from "@goscript/context/index.js"

import * as dig from "@goscript/go.uber.org/dig/index.js"

import * as fxevent from "@goscript/go.uber.org/fx/fxevent/index.js"

import * as fxclock from "@goscript/go.uber.org/fx/internal/fxclock/index.js"

import * as fxreflect from "@goscript/go.uber.org/fx/internal/fxreflect/index.js"

import * as lifecycle from "@goscript/go.uber.org/fx/internal/lifecycle/index.js"

import * as os from "@goscript/os/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript__module from "./module.gs.ts"

import * as __goscript_annotated from "./annotated.gs.ts"

import * as __goscript_app from "./app.gs.ts"

import * as __goscript_decorate from "./decorate.gs.ts"

import * as __goscript_inout from "./inout.gs.ts"

import * as __goscript_invoke from "./invoke.gs.ts"

import * as __goscript_lifecycle from "./lifecycle.gs.ts"

import type * as __goscript_log from "./log.gs.ts"

import * as __goscript_shutdown from "./shutdown.gs.ts"

import * as __goscript_signal from "./signal.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/go.uber.org/dig/index.js"
import "@goscript/go.uber.org/fx/fxevent/index.js"
import "@goscript/go.uber.org/fx/internal/fxclock/index.js"
import "@goscript/go.uber.org/fx/internal/fxreflect/index.js"
import "@goscript/go.uber.org/fx/internal/lifecycle/index.js"
import "@goscript/os/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./module.gs.ts"
import "./annotated.gs.ts"
import "./app.gs.ts"
import "./decorate.gs.ts"
import "./inout.gs.ts"
import "./invoke.gs.ts"
import "./lifecycle.gs.ts"
import "./shutdown.gs.ts"
import "./signal.gs.ts"

export async function Populate(targets: $.Slice<any>): globalThis.Promise<__goscript_app.Option | null> {
	// Validate all targets are non-nil pointers.
	let fields: $.Slice<reflect.StructField> = $.makeSlice<reflect.StructField>($.sliceLen(targets) + 1, undefined, undefined, () => $.markAsStructValue(new reflect.StructField()))
	$.assignStruct($.sliceElems(fields!)[$.sliceSlot(fields!, 0)], (() => { const __goscriptLiteralField0 = reflect.TypeOf($.interfaceValue(new dig.In(undefined, true), "dig.In", "dig.In")); return $.markAsStructValue(new reflect.StructField({Name: "In", Type: __goscriptLiteralField0, Anonymous: true})) })())
	for (let __goscriptRangeTarget0 = targets, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(fields), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let t = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as any)
		if (t == null) {
			return __goscript_app.Error($.arrayToSlice<$.GoError>([fmt.Errorf("failed to Populate: target %v is nil", $.basicInterfaceValue(i + 1, "int"))]))
		}
		let rt: reflect.Type | null = null! as reflect.Type | null
		let tag: reflect.StructTag = ""
		{
			const __goscriptTypeSwitchValue = t
			switch (true) {
				case $.typeAssert<__goscript_annotated.annotated>(__goscriptTypeSwitchValue, "fx.annotated").ok:
					{
						let t: __goscript_annotated.annotated = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_annotated.annotated>(__goscriptTypeSwitchValue, "fx.annotated").value))
						rt = reflect.TypeOf(t.Target)
						tag = $.arrayIndex(t.ParamTags!, 0);
						;(__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] = t.Target
					}
					break
				default:
					{
						let t: any = __goscriptTypeSwitchValue
						rt = reflect.TypeOf(t)
					}
					break
			}
		}
		if ((__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) {
			return __goscript_app.Error($.arrayToSlice<$.GoError>([fmt.Errorf("failed to Populate: target %v is not a pointer type, got %T", $.basicInterfaceValue(i + 1, "int"), t)]))
		}
		$.assignStruct((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i + 1)], (await (async () => { const __goscriptLiteralField1 = await fmt.Sprintf("Field%d", $.basicInterfaceValue(i, "int")); const __goscriptLiteralField2 = (__goscriptAwait = (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? (rt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(rt)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return $.markAsStructValue(new reflect.StructField({Name: __goscriptLiteralField1, Type: __goscriptLiteralField2, Tag: tag})) })()))
	}

	// Build a function that looks like:
	//
	// func(t1 T1, t2 T2, ...) {
	//   *targets[0] = t1
	//   *targets[1] = t2
	//   [...]
	// }
	//
	let fnType = reflect.FuncOf($.arrayToSlice<reflect.Type | null>([reflect.StructOf(fields)]), null, false)
	let fn = $.markAsStructValue($.cloneStructValue(reflect.MakeFunc($.pointerValueOrNil(fnType)!, $.functionValue((args: $.Slice<reflect.Value>): $.Slice<reflect.Value> => {
		let arg = $.markAsStructValue($.cloneStructValue($.arrayIndex(args!, 0)))
		for (let __goscriptRangeTarget1 = targets, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let target = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as any)
			$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf(target))).Elem())).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(arg)).Field(i + 1))))
		}
		return null
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)))))
	return __goscript_invoke.Invoke($.arrayToSlice<any>([$.markAsStructValue($.cloneStructValue(fn)).Interface()]))
}

var __goscriptAwait: any
