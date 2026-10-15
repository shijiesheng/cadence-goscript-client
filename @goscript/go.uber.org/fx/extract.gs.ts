// Generated file based on extract.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

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
import "@goscript/unicode/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/go.uber.org/dig/index.js"
import "@goscript/go.uber.org/fx/fxevent/index.js"
import "@goscript/go.uber.org/fx/internal/fxclock/index.js"
import "@goscript/go.uber.org/fx/internal/fxreflect/index.js"
import "@goscript/go.uber.org/fx/internal/lifecycle/index.js"
import "@goscript/os/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./module.gs.ts"
import "./app.gs.ts"
import "./decorate.gs.ts"
import "./inout.gs.ts"
import "./invoke.gs.ts"
import "./lifecycle.gs.ts"
import "./shutdown.gs.ts"
import "./signal.gs.ts"

export var _typeOfIn: reflect.Type | null

export function __goscript_init__typeOfIn(): void {
	if (((_typeOfIn) as any) === undefined) {
		_typeOfIn = reflect.TypeOf($.interfaceValue(new dig.In(undefined, true), "dig.In", "dig.In"))
	}
}

export function __goscript_get__typeOfIn(): reflect.Type | null {
	if (((_typeOfIn) as any) === undefined) {
		__goscript_init__typeOfIn()
	}
	return _typeOfIn
}

export function __goscript_set__typeOfIn(__goscriptValue: reflect.Type | null): void {
	_typeOfIn = __goscriptValue
}

export async function Extract(target: any): globalThis.Promise<__goscript_app.Option | null> {
	let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(target)))

	{
		let t = $.markAsStructValue($.cloneStructValue(v)).Type()
		if (((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) || ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25)) {
			return __goscript_app.Error($.arrayToSlice<$.GoError>([fmt.Errorf("Extract expected a pointer to a struct, got a %v", (t as any))]))
		}
	}

	v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Elem())
	let t = $.markAsStructValue($.cloneStructValue(v)).Type()

	// We generate a function which accepts a single fx.In struct as an
	// argument. This struct contains all exported fields of the target
	// struct.

	// Fields of the generated fx.In struct.
	let fields: $.Slice<reflect.StructField> = $.makeSlice<reflect.StructField>(0, (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) + 1, undefined, () => $.markAsStructValue(new reflect.StructField()))

	// Anonymous dig.In field.
	fields = $.appendOne(fields, (await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(__goscript_get__typeOfIn()).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return $.markAsStructValue(new reflect.StructField({Name: __goscriptLiteralField0, Anonymous: true, Type: __goscript_get__typeOfIn()})) })()))

	// List of values in the target struct aligned with the fields of the
	// generated struct.
	//
	// So for example, if the target is,
	//
	// 	var target struct {
	// 		Foo io.Reader
	// 		bar []byte
	// 		Baz io.Writer
	// 	}
	//
	// The generated struct has the shape,
	//
	// 	struct {
	// 		fx.In
	//
	// 		F0 io.Reader
	// 		F2 io.Writer
	// 	}
	//
	// And `targets` is,
	//
	// 	[
	// 		target.Field(0),  // Foo io.Reader
	// 		target.Field(2),  // Baz io.Writer
	// 	]
	//
	// As we iterate through the fields of the generated struct, we can copy
	// the value into the corresponding value in the targets list.
	let targets: $.Slice<reflect.Value> = $.makeSlice<reflect.Value>(0, (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined, () => $.markAsStructValue(new reflect.Value()))

	for (let i = 0; i < (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
		let f = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))

		// Skip unexported fields.
		if (f.Anonymous) {
			// If embedded, StructField.PkgPath is not a reliable indicator of
			// whether the field is exported. See
			// https://github.com/golang/go/issues/21122

			let __goscriptShadow0 = f.Type
			if ((__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow0)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
				__goscriptShadow0 = (__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow0)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}

			if (!isExported((__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow0)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
				continue
			}
		} else {
			if (!$.stringEqual(f.PkgPath, "")) {
				continue
			}
		}

		// We don't copy over names or embedded semantics.
		fields = $.appendOne(fields, (await (async () => { const __goscriptLiteralField1 = await fmt.Sprintf("F%d", $.basicInterfaceValue(i, "int")); return $.markAsStructValue(new reflect.StructField({Name: __goscriptLiteralField1, Type: f.Type, Tag: f.Tag})) })()))
		targets = $.appendOne(targets, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(i))))
	}

	// Equivalent to,
	//
	// 	func(r struct {
	// 		fx.In
	//
	// 		F1 Foo
	// 		F2 Bar
	// 	}) {
	// 		target.Foo = r.F1
	// 		target.Bar = r.F2
	// 	}

	let fn = $.markAsStructValue($.cloneStructValue(reflect.MakeFunc($.pointerValueOrNil(reflect.FuncOf($.arrayToSlice<reflect.Type | null>([reflect.StructOf(fields)]), null, false))!, $.functionValue((args: $.Slice<reflect.Value>): $.Slice<reflect.Value> => {
		let result = $.markAsStructValue($.cloneStructValue($.arrayIndex(args!, 0)))
		for (let i = 1; i < $.markAsStructValue($.cloneStructValue(result)).NumField(); i++) {
			$.markAsStructValue($.cloneStructValue($.arrayIndex(targets!, i - 1))).Set($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(result)).Field(i))))
		}
		return null
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.sliceType("reflect.Value")] } as $.FunctionTypeInfo)))))

	return __goscript_invoke.Invoke($.arrayToSlice<any>([$.markAsStructValue($.cloneStructValue(fn)).Interface()]))
}

export function isExported(id: string): boolean {
	let [r, ] = utf8.DecodeRuneInString(id)
	return unicode.IsUpper(r)
}

var __goscriptAwait: any
