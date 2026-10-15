// Generated file based on funcs.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as url from "@goscript/net/url/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import type * as fs from "@goscript/io/fs/index.js"

import * as parse from "@goscript/text/template/parse/index.js"

import * as __goscript_exec from "./exec.gs.ts"

import * as __goscript_helper from "./helper.gs.ts"

import * as __goscript_option from "./option.gs.ts"

import * as __goscript_template from "./template.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/url/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/unicode/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/text/template/parse/index.js"
import "./exec.gs.ts"
import "./helper.gs.ts"
import "./option.gs.ts"
import "./template.gs.ts"

$.registerTypePackagePath("text/template", ["template.FuncMap", "template.kind"])

export type FuncMap = globalThis.Map<string, any> | null

$.registerNamedType("template.FuncMap", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }));

export type kind = number

export const invalidKind: kind = 0

export const boolKind: kind = 1

export const complexKind: kind = 2

export const intKind: kind = 3

export const floatKind: kind = 4

export const stringKind: kind = 5

export const uintKind: kind = 6

export function builtins(): FuncMap {
	return $.makeMap<string, any>([["and", $.interfaceValue($.goFunc(and, "text/template.and"), "func(arg0 reflect.Value, args ...reflect.Value) reflect.Value", ({ kind: $.TypeKind.Function, params: ["reflect.Value", /* @__PURE__ */ $.sliceType("reflect.Value")], results: ["reflect.Value"], isVariadic: true } as $.FunctionTypeInfo))], ["call", $.interfaceValue($.goFunc(emptyCall, "text/template.emptyCall"), "func(fn reflect.Value, args ...reflect.Value) reflect.Value", ({ kind: $.TypeKind.Function, params: ["reflect.Value", /* @__PURE__ */ $.sliceType("reflect.Value")], results: ["reflect.Value"], isVariadic: true } as $.FunctionTypeInfo))], ["html", $.interfaceValue($.goFunc(HTMLEscaper, "text/template.HTMLEscaper"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["index", $.interfaceValue($.goFunc(index, "text/template.index"), "func(item reflect.Value, indexes ...reflect.Value) (reflect.Value, error)", ({ kind: $.TypeKind.Function, params: ["reflect.Value", /* @__PURE__ */ $.sliceType("reflect.Value")], results: ["reflect.Value", "error"], isVariadic: true } as $.FunctionTypeInfo))], ["slice", $.interfaceValue($.goFunc(slice, "text/template.slice"), "func(item reflect.Value, indexes ...reflect.Value) (reflect.Value, error)", ({ kind: $.TypeKind.Function, params: ["reflect.Value", /* @__PURE__ */ $.sliceType("reflect.Value")], results: ["reflect.Value", "error"], isVariadic: true } as $.FunctionTypeInfo))], ["js", $.interfaceValue($.goFunc(JSEscaper, "text/template.JSEscaper"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["len", $.interfaceValue($.goFunc(length, "text/template.length"), "func(item reflect.Value) (int, error)", ({ kind: $.TypeKind.Function, params: ["reflect.Value"], results: [/* @__PURE__ */ $.basicType("int"), "error"] } as $.FunctionTypeInfo))], ["not", $.interfaceValue($.goFunc(not, "text/template.not"), "func(arg reflect.Value) bool", ({ kind: $.TypeKind.Function, params: ["reflect.Value"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))], ["or", $.interfaceValue($.goFunc(or, "text/template.or"), "func(arg0 reflect.Value, args ...reflect.Value) reflect.Value", ({ kind: $.TypeKind.Function, params: ["reflect.Value", /* @__PURE__ */ $.sliceType("reflect.Value")], results: ["reflect.Value"], isVariadic: true } as $.FunctionTypeInfo))], ["print", $.interfaceValue($.goFunc(fmt.Sprint, "fmt.Sprint"), "func(a ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["printf", $.interfaceValue($.goFunc(fmt.Sprintf, "fmt.Sprintf"), "func(format string, a ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["println", $.interfaceValue($.goFunc(fmt.Sprintln, "fmt.Sprintln"), "func(a ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["urlquery", $.interfaceValue($.goFunc(URLQueryEscaper, "text/template.URLQueryEscaper"), "func(args ...any) string", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.basicType("string")], isVariadic: true } as $.FunctionTypeInfo))], ["eq", $.interfaceValue($.goFunc(eq, "text/template.eq"), "func(arg1 reflect.Value, arg2 ...reflect.Value) (bool, error)", ({ kind: $.TypeKind.Function, params: ["reflect.Value", /* @__PURE__ */ $.sliceType("reflect.Value")], results: [/* @__PURE__ */ $.basicType("bool"), "error"], isVariadic: true } as $.FunctionTypeInfo))], ["ge", $.interfaceValue($.goFunc(ge, "text/template.ge"), "func(arg1 reflect.Value, arg2 reflect.Value) (bool, error)", ({ kind: $.TypeKind.Function, params: ["reflect.Value", "reflect.Value"], results: [/* @__PURE__ */ $.basicType("bool"), "error"] } as $.FunctionTypeInfo))], ["gt", $.interfaceValue($.goFunc(gt, "text/template.gt"), "func(arg1 reflect.Value, arg2 reflect.Value) (bool, error)", ({ kind: $.TypeKind.Function, params: ["reflect.Value", "reflect.Value"], results: [/* @__PURE__ */ $.basicType("bool"), "error"] } as $.FunctionTypeInfo))], ["le", $.interfaceValue($.goFunc(le, "text/template.le"), "func(arg1 reflect.Value, arg2 reflect.Value) (bool, error)", ({ kind: $.TypeKind.Function, params: ["reflect.Value", "reflect.Value"], results: [/* @__PURE__ */ $.basicType("bool"), "error"] } as $.FunctionTypeInfo))], ["lt", $.interfaceValue($.goFunc(lt, "text/template.lt"), "func(arg1 reflect.Value, arg2 reflect.Value) (bool, error)", ({ kind: $.TypeKind.Function, params: ["reflect.Value", "reflect.Value"], results: [/* @__PURE__ */ $.basicType("bool"), "error"] } as $.FunctionTypeInfo))], ["ne", $.interfaceValue($.goFunc(ne, "text/template.ne"), "func(arg1 reflect.Value, arg2 reflect.Value) (bool, error)", ({ kind: $.TypeKind.Function, params: ["reflect.Value", "reflect.Value"], results: [/* @__PURE__ */ $.basicType("bool"), "error"] } as $.FunctionTypeInfo))]])
}

export var builtinFuncs: (() => globalThis.Map<string, reflect.Value> | null | globalThis.Promise<globalThis.Map<string, reflect.Value> | null>) | null

export async function __goscript_init_builtinFuncs(): globalThis.Promise<void> {
	if (((builtinFuncs) as any) === undefined) {
		builtinFuncs = sync.OnceValue($.functionValue(async (): globalThis.Promise<globalThis.Map<string, reflect.Value> | null> => {
	let funcMap: FuncMap = builtins()
	let m: globalThis.Map<string, reflect.Value> | null = $.makeMap<string, reflect.Value>()
	await addValueFuncs(m, funcMap)
	return m
}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "reflect.Value")] } as $.FunctionTypeInfo)))
	}
}

export function __goscript_get_builtinFuncs(): (() => globalThis.Map<string, reflect.Value> | null | globalThis.Promise<globalThis.Map<string, reflect.Value> | null>) | null {
	if (((builtinFuncs) as any) === undefined) {
		throw new globalThis.Error("goscript package variable builtinFuncs read before initialization")
	}
	return builtinFuncs
}

export function __goscript_set_builtinFuncs(__goscriptValue: (() => globalThis.Map<string, reflect.Value> | null | globalThis.Promise<globalThis.Map<string, reflect.Value> | null>) | null): void {
	builtinFuncs = __goscriptValue
}

export async function addValueFuncs(out: globalThis.Map<string, reflect.Value> | null, _in: FuncMap): globalThis.Promise<void> {
	for (let [name, fn] of _in?.entries() ?? []) {
		if (!goodName(name)) {
			$.panic((fmt.Errorf("function name %q is not a valid identifier", name) as any))
		}
		let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(fn)))
		if ($.markAsStructValue($.cloneStructValue(v)).Kind() != 19) {
			$.panic($.concatString(($.concatString("value for ", name)), " not a function"))
		}
		{
			let err = await goodFunc(name, $.markAsStructValue($.cloneStructValue(v)).Type())
			if (err != null) {
				$.panic((err as any))
			}
		}
		$.mapSet(out, name, $.markAsStructValue($.cloneStructValue(v)))
	}
}

export function addFuncs(out: FuncMap, _in: FuncMap): void {
	for (let [name, fn] of _in?.entries() ?? []) {
		$.mapSet(out, name, fn)
	}
}

export async function goodFunc(name: string, typ: reflect.Type | null): globalThis.Promise<$.GoError> {
	// We allow functions with 1 result or 2 results where the second is an error.
	{
		let numOut = (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		switch ((true as boolean)) {
			case numOut == 1:
			{
				return null
				break
			}
			case (numOut == 2) && ($.comparableEqual((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Out(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), __goscript_exec.__goscript_get_errorType())):
			{
				return null
				break
			}
			case numOut == 2:
			{
				return fmt.Errorf("invalid function signature for %s: second return value should be error; is %s", name, ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Out(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as any))
				break
			}
			default:
			{
				return fmt.Errorf("function %s has %d return values; should be 1 or 2", name, $.basicInterfaceValue((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "int"))
				break
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function goodName(name: string): boolean {
	if ($.stringEqual(name, "")) {
		return false
	}
	for (let __goscriptRunes0 = $.stringRunes(name); __goscriptRunes0.next(); ) {
		const i = __goscriptRunes0.index
		const r = __goscriptRunes0.rune
		switch ((true as boolean)) {
			case r == 95:
			{
				break
			}
			case (i == 0) && !unicode.IsLetter(r):
			{
				return false
				break
			}
			case !unicode.IsLetter(r) && !unicode.IsDigit(r):
			{
				return false
				break
			}
		}
	}
	return true
}

export async function findFunction(name: string, tmpl: __goscript_template.Template | $.VarRef<__goscript_template.Template> | null): globalThis.Promise<[reflect.Value, boolean, boolean]> {
	let v: reflect.Value = $.markAsStructValue(new reflect.Value())
	let isBuiltin: boolean = false
	let ok: boolean = false
	using __defer = new $.DisposableStack()
	const tmpl$: __goscript_template.Template = tmpl == null ? $.pointerTarget<__goscript_template.Template>(tmpl) : (tmpl as any).__isVarRef === true ? (tmpl as any).value : (tmpl as any).__goValue === undefined ? (tmpl as any) : $.pointerTarget<__goscript_template.Template>(tmpl)
	if ((tmpl != null) && ((tmpl$ as __goscript_template.Template).common != null)) {
		await $.pointerValue<__goscript_template.common>((tmpl$ as __goscript_template.Template).common).muFuncs.RLock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<__goscript_template.common>((tmpl$ as __goscript_template.Template).common).muFuncs), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		{
			let fn = $.markAsStructValue($.cloneStructValue($.mapGet<string, reflect.Value, reflect.Value>($.pointerValue<__goscript_template.common>((tmpl$ as __goscript_template.Template).common).execFuncs, name, $.markAsStructValue(new reflect.Value()))[0]))
			if ($.markAsStructValue($.cloneStructValue(fn)).IsValid()) {
				const __goscriptReturn0: [reflect.Value, boolean, boolean] = [$.markAsStructValue($.cloneStructValue(fn)), false, true]
				v = __goscriptReturn0[0]
				isBuiltin = __goscriptReturn0[1]
				ok = __goscriptReturn0[2]
				__defer.dispose()
				return [v, isBuiltin, ok]
			}
		}
	}
	{
		let fn = $.markAsStructValue($.cloneStructValue($.mapGet<string, reflect.Value, reflect.Value>(((__goscriptAwait = __goscript_get_builtinFuncs()!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<string, reflect.Value> | null), name, $.markAsStructValue(new reflect.Value()))[0]))
		if ($.markAsStructValue($.cloneStructValue(fn)).IsValid()) {
			const __goscriptReturn1: [reflect.Value, boolean, boolean] = [$.markAsStructValue($.cloneStructValue(fn)), true, true]
			v = __goscriptReturn1[0]
			isBuiltin = __goscriptReturn1[1]
			ok = __goscriptReturn1[2]
			__defer.dispose()
			return [v, isBuiltin, ok]
		}
	}
	const __goscriptReturn2: [reflect.Value, boolean, boolean] = [$.markAsStructValue(new reflect.Value()), false, false]
	v = __goscriptReturn2[0]
	isBuiltin = __goscriptReturn2[1]
	ok = __goscriptReturn2[2]
	__defer.dispose()
	return [v, isBuiltin, ok]
	throw new globalThis.Error("goscript: unreachable return")
}

export async function prepareArg(value: reflect.Value, argType: reflect.Type | null): globalThis.Promise<[reflect.Value, $.GoError]> {
	if (!$.markAsStructValue($.cloneStructValue(value)).IsValid()) {
		if (!await __goscript_exec.canBeNil(argType)) {
			return [$.markAsStructValue(new reflect.Value()), fmt.Errorf("value is nil; should be of type %s", (argType as any))]
		}
		value = $.assignStruct(value, reflect.Zero($.pointerValueOrNil(argType)!))
	}
	if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(value)).Type()).AssignableTo($.pointerValueOrNil(argType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		return [$.markAsStructValue($.cloneStructValue(value)), null]
	}
	if ((intLike($.markAsStructValue($.cloneStructValue(value)).Kind()) && intLike((__goscriptAwait = (argType !== null && (argType as any).__isVarRef !== true && (argType as any).__goValue === undefined ? (argType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(argType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) && (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(value)).Type()).ConvertibleTo($.pointerValueOrNil(argType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		value = $.assignStruct(value, $.markAsStructValue($.cloneStructValue(value)).Convert($.pointerValueOrNil(argType)!))
		return [$.markAsStructValue($.cloneStructValue(value)), null]
	}
	return [$.markAsStructValue(new reflect.Value()), fmt.Errorf("value has type %s; should be %s", ($.markAsStructValue($.cloneStructValue(value)).Type() as any), (argType as any))]
}

export function intLike(typ: reflect.Kind): boolean {
	switch (typ) {
		case reflect.Int:
		case reflect.Int8:
		case reflect.Int16:
		case reflect.Int32:
		case reflect.Int64:
		{
			return true
			break
		}
		case reflect.Uint:
		case reflect.Uint8:
		case reflect.Uint16:
		case reflect.Uint32:
		case reflect.Uint64:
		case reflect.Uintptr:
		{
			return true
			break
		}
	}
	return false
}

export function indexArg(index: reflect.Value, cap: number): [number, $.GoError] {
	let x: bigint = 0n
	switch ($.markAsStructValue($.cloneStructValue(index)).Kind()) {
		case reflect.Int:
		case reflect.Int8:
		case reflect.Int16:
		case reflect.Int32:
		case reflect.Int64:
		{
			x = $.markAsStructValue($.cloneStructValue(index)).Int()
			break
		}
		case reflect.Uint:
		case reflect.Uint8:
		case reflect.Uint16:
		case reflect.Uint32:
		case reflect.Uint64:
		case reflect.Uintptr:
		{
			x = $.int64($.markAsStructValue($.cloneStructValue(index)).Uint())
			break
		}
		case reflect.Invalid:
		{
			return [0, fmt.Errorf("cannot index slice/array with nil")]
			break
		}
		default:
		{
			return [0, fmt.Errorf("cannot index slice/array with type %s", ($.markAsStructValue($.cloneStructValue(index)).Type() as any))]
			break
		}
	}
	if (((x < 0n) || ($.int(x) < 0)) || ($.int(x) > cap)) {
		return [0, fmt.Errorf("index out of range: %d", $.basicInterfaceValue(x, "int64"))]
	}
	return [$.int(x), null]
}

export async function index(item: reflect.Value, indexes: $.Slice<reflect.Value>): globalThis.Promise<[reflect.Value, $.GoError]> {
	item = $.assignStruct(item, __goscript_exec.indirectInterface(item))
	if (!$.markAsStructValue($.cloneStructValue(item)).IsValid()) {
		return [$.markAsStructValue(new reflect.Value()), fmt.Errorf("index of untyped nil")]
	}
	for (let __goscriptRangeTarget0 = indexes, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let index = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as reflect.Value)))
		index = $.assignStruct(index, __goscript_exec.indirectInterface($.markAsStructValue($.cloneStructValue(index))))
		let isNil: boolean = false
		{
			let __goscriptTuple0: any = __goscript_exec.indirect($.markAsStructValue($.cloneStructValue(item)))
			item = $.assignStruct(item, __goscriptTuple0[0])
			isNil = __goscriptTuple0[1]
			if (isNil) {
				return [$.markAsStructValue(new reflect.Value()), fmt.Errorf("index of nil pointer")]
			}
		}
		switch ($.markAsStructValue($.cloneStructValue(item)).Kind()) {
			case reflect.Array:
			case reflect.Slice:
			case reflect.String:
			{
				let [x, err] = indexArg($.markAsStructValue($.cloneStructValue(index)), $.markAsStructValue($.cloneStructValue(item)).Len())
				if (err != null) {
					return [$.markAsStructValue(new reflect.Value()), err]
				}
				item = $.assignStruct(item, $.markAsStructValue($.cloneStructValue(item)).Index(x))
				break
			}
			case reflect.Map:
			{
				let __goscriptShadow0 = index
				let __goscriptTuple1: any = await prepareArg($.markAsStructValue($.cloneStructValue(__goscriptShadow0)), (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(item)).Type()).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				let __goscriptShadow1 = __goscriptTuple1[0]
				let err = __goscriptTuple1[1]
				if (err != null) {
					return [$.markAsStructValue(new reflect.Value()), err]
				}
				{
					let x: reflect.Value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(item)).MapIndex($.markAsStructValue($.cloneStructValue(__goscriptShadow1)))))
					if ($.markAsStructValue($.cloneStructValue(x)).IsValid()) {
						item = $.assignStruct(item, x)
					} else {
						item = $.assignStruct(item, reflect.Zero($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(item)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))
					}
				}
				break
			}
			case reflect.Invalid:
			{
				$.panic("unreachable")
				break
			}
			default:
			{
				return [$.markAsStructValue(new reflect.Value()), fmt.Errorf("can't index item of type %s", ($.markAsStructValue($.cloneStructValue(item)).Type() as any))]
				break
			}
		}
	}
	return [$.markAsStructValue($.cloneStructValue(item)), null]
}

export function slice(item: reflect.Value, indexes: $.Slice<reflect.Value>): [reflect.Value, $.GoError] {
	item = $.assignStruct(item, __goscript_exec.indirectInterface(item))
	if (!$.markAsStructValue($.cloneStructValue(item)).IsValid()) {
		return [$.markAsStructValue(new reflect.Value()), fmt.Errorf("slice of untyped nil")]
	}
	let isNil: boolean = false
	{
		let __goscriptTuple2: any = __goscript_exec.indirect($.markAsStructValue($.cloneStructValue(item)))
		item = $.assignStruct(item, __goscriptTuple2[0])
		isNil = __goscriptTuple2[1]
		if (isNil) {
			return [$.markAsStructValue(new reflect.Value()), fmt.Errorf("slice of nil pointer")]
		}
	}
	if ($.sliceLen(indexes) > 3) {
		return [$.markAsStructValue(new reflect.Value()), fmt.Errorf("too many slice indexes: %d", $.basicInterfaceValue($.sliceLen(indexes), "int"))]
	}
	let cap: number = 0
	switch ($.markAsStructValue($.cloneStructValue(item)).Kind()) {
		case reflect.String:
		{
			if ($.sliceLen(indexes) == 3) {
				return [$.markAsStructValue(new reflect.Value()), fmt.Errorf("cannot 3-index slice a string")]
			}
			cap = $.markAsStructValue($.cloneStructValue(item)).Len()
			break
		}
		case reflect.Array:
		case reflect.Slice:
		{
			cap = $.markAsStructValue($.cloneStructValue(item)).Cap()
			break
		}
		default:
		{
			return [$.markAsStructValue(new reflect.Value()), fmt.Errorf("can't slice item of type %s", ($.markAsStructValue($.cloneStructValue(item)).Type() as any))]
			break
		}
	}
	// set default values for cases item[:], item[i:].
	let idx = $.arrayValue([0, $.markAsStructValue($.cloneStructValue(item)).Len(), 0])
	for (let __goscriptRangeTarget1 = indexes, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let index = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as reflect.Value)))
		let [x, err] = indexArg($.markAsStructValue($.cloneStructValue(index)), cap)
		if (err != null) {
			return [$.markAsStructValue(new reflect.Value()), err]
		}
		idx[i] = x
	}
	// given item[i:j], make sure i <= j.
	if ($.arrayIndex(idx, 0) > $.arrayIndex(idx, 1)) {
		return [$.markAsStructValue(new reflect.Value()), fmt.Errorf("invalid slice index: %d > %d", $.basicInterfaceValue($.arrayIndex(idx, 0), "int"), $.basicInterfaceValue($.arrayIndex(idx, 1), "int"))]
	}
	if ($.sliceLen(indexes) < 3) {
		return [$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(item)).Slice($.arrayIndex(idx, 0), $.arrayIndex(idx, 1)))), null]
	}
	// given item[i:j:k], make sure i <= j <= k.
	if ($.arrayIndex(idx, 1) > $.arrayIndex(idx, 2)) {
		return [$.markAsStructValue(new reflect.Value()), fmt.Errorf("invalid slice index: %d > %d", $.basicInterfaceValue($.arrayIndex(idx, 1), "int"), $.basicInterfaceValue($.arrayIndex(idx, 2), "int"))]
	}
	return [$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(item)).Slice3($.arrayIndex(idx, 0), $.arrayIndex(idx, 1), $.arrayIndex(idx, 2)))), null]
}

export function length(item: reflect.Value): [number, $.GoError] {
	let __goscriptTuple3: any = __goscript_exec.indirect($.markAsStructValue($.cloneStructValue(item)))
	item = $.assignStruct(item, __goscriptTuple3[0])
	let isNil = __goscriptTuple3[1]
	if (isNil) {
		return [0, fmt.Errorf("len of nil pointer")]
	}
	switch ($.markAsStructValue($.cloneStructValue(item)).Kind()) {
		case reflect.Array:
		case reflect.Chan:
		case reflect.Map:
		case reflect.Slice:
		case reflect.String:
		{
			return [$.markAsStructValue($.cloneStructValue(item)).Len(), null]
			break
		}
	}
	return [0, fmt.Errorf("len of type %s", ($.markAsStructValue($.cloneStructValue(item)).Type() as any))]
}

export function emptyCall(fn: reflect.Value, args: $.Slice<reflect.Value>): reflect.Value {
	$.panic("unreachable")
	throw new globalThis.Error("goscript: unreachable return")
}

export async function call(name: string, fn: reflect.Value, args: $.Slice<reflect.Value>): globalThis.Promise<[reflect.Value, $.GoError]> {
	fn = $.assignStruct(fn, __goscript_exec.indirectInterface(fn))
	if (!$.markAsStructValue($.cloneStructValue(fn)).IsValid()) {
		return [$.markAsStructValue(new reflect.Value()), fmt.Errorf("call of nil")]
	}
	let typ = $.markAsStructValue($.cloneStructValue(fn)).Type()
	if ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 19) {
		return [$.markAsStructValue(new reflect.Value()), fmt.Errorf("non-function %s of type %s", name, (typ as any))]
	}

	{
		let err = await goodFunc(name, typ)
		if (err != null) {
			return [$.markAsStructValue(new reflect.Value()), err]
		}
	}
	let numIn = (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let dddType: reflect.Type | null = null! as reflect.Type | null
	if ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).IsVariadic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		if ($.sliceLen(args) < (numIn - 1)) {
			return [$.markAsStructValue(new reflect.Value()), fmt.Errorf("wrong number of args for %s: got %d want at least %d", name, $.basicInterfaceValue($.sliceLen(args), "int"), $.basicInterfaceValue(numIn - 1, "int"))]
		}
		dddType = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).In(numIn - 1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	} else {
		if ($.sliceLen(args) != numIn) {
			return [$.markAsStructValue(new reflect.Value()), fmt.Errorf("wrong number of args for %s: got %d want %d", name, $.basicInterfaceValue($.sliceLen(args), "int"), $.basicInterfaceValue(numIn, "int"))]
		}
	}
	let argv: $.Slice<reflect.Value> = $.makeSlice<reflect.Value>($.sliceLen(args), undefined, undefined, () => $.markAsStructValue(new reflect.Value()))
	for (let __goscriptRangeTarget2 = args, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow0 = $.sliceRange(argv), i = 0; i < __goscriptRangeWindow2.length; i++) {
		let arg = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + i] as reflect.Value)))
		arg = $.assignStruct(arg, __goscript_exec.indirectInterface($.markAsStructValue($.cloneStructValue(arg))))
		// Compute the expected type. Clumsy because of variadics.
		let argType: reflect.Type | null = dddType
		if (!(__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).IsVariadic(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) || (i < (numIn - 1))) {
			argType = (__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).In(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		let err: $.GoError = null! as $.GoError
		{
			let __goscriptTuple4: any = await prepareArg($.markAsStructValue($.cloneStructValue(arg)), argType)
			$.assignStruct((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)], __goscriptTuple4[0])
			err = __goscriptTuple4[1]
			if (err != null) {
				return [$.markAsStructValue(new reflect.Value()), fmt.Errorf("arg %d: %w", $.basicInterfaceValue(i, "int"), (err as any))]
			}
		}
	}
	return safeCall(fn, argv)
}

export async function safeCall(fun: reflect.Value, args: $.Slice<reflect.Value>): globalThis.Promise<[reflect.Value, $.GoError]> {
	let val: reflect.Value = $.markAsStructValue(new reflect.Value())
	let err: $.GoError = null! as $.GoError
	const __defer = new $.DisposableStack()
	try {
		__defer.defer(() => { ((): void => {
			{
				let r = $.recover()
				if (r != null) {
					{
						let [e, ok] = $.typeAssertTuple<$.GoError>(r, "error")
						if (ok) {
							err = e
						} else {
							err = fmt.Errorf("%v", r)
						}
					}
				}
			}
		})() })
		let ret: $.Slice<reflect.Value> = await $.markAsStructValue($.cloneStructValue(fun)).Call(args)
		if (($.sliceLen(ret) == 2) && !$.markAsStructValue($.cloneStructValue($.arrayIndex(ret!, 1))).IsNil()) {
			const __goscriptReturn4: [reflect.Value, $.GoError] = [$.markAsStructValue($.cloneStructValue($.arrayIndex(ret!, 0))), $.mustTypeAssert<$.GoError>($.markAsStructValue($.cloneStructValue($.arrayIndex(ret!, 1))).Interface(), "error")]
			val = __goscriptReturn4[0]
			err = __goscriptReturn4[1]
			__defer.dispose()
			return [val, err]
		}
		const __goscriptReturn5: [reflect.Value, $.GoError] = [$.markAsStructValue($.cloneStructValue($.arrayIndex(ret!, 0))), null]
		val = __goscriptReturn5[0]
		err = __goscriptReturn5[1]
		__defer.dispose()
		return [val, err]
		__defer.dispose()
	} catch (e) {
		__defer.disposePanic(e)
		if (!$.recovered(e)) {
			throw e
		}
	}
	return [val, err]
}

export function truth(arg: reflect.Value): boolean {
	let [t, ] = __goscript_exec.isTrue(__goscript_exec.indirectInterface(arg))
	return t
}

export function and(arg0: reflect.Value, args: $.Slice<reflect.Value>): reflect.Value {
	$.panic("unreachable")
	throw new globalThis.Error("goscript: unreachable return")
}

export function or(arg0: reflect.Value, args: $.Slice<reflect.Value>): reflect.Value {
	$.panic("unreachable")
	throw new globalThis.Error("goscript: unreachable return")
}

export function not(arg: reflect.Value): boolean {
	return !truth(arg)
}

export let errBadComparisonType: $.GoError = errors.New("invalid type for comparison")

export function __goscript_set_errBadComparisonType(__goscriptValue: $.GoError): void {
	errBadComparisonType = __goscriptValue
}

export let errNoComparison: $.GoError = errors.New("missing argument for comparison")

export function __goscript_set_errNoComparison(__goscriptValue: $.GoError): void {
	errNoComparison = __goscriptValue
}

export function basicKind(v: reflect.Value): [kind, $.GoError] {
	switch ($.markAsStructValue($.cloneStructValue(v)).Kind()) {
		case reflect.Bool:
		{
			return [1, null]
			break
		}
		case reflect.Int:
		case reflect.Int8:
		case reflect.Int16:
		case reflect.Int32:
		case reflect.Int64:
		{
			return [3, null]
			break
		}
		case reflect.Uint:
		case reflect.Uint8:
		case reflect.Uint16:
		case reflect.Uint32:
		case reflect.Uint64:
		case reflect.Uintptr:
		{
			return [6, null]
			break
		}
		case reflect.Float32:
		case reflect.Float64:
		{
			return [4, null]
			break
		}
		case reflect.Complex64:
		case reflect.Complex128:
		{
			return [2, null]
			break
		}
		case reflect.String:
		{
			return [5, null]
			break
		}
	}
	return [0, errBadComparisonType]
}

export function isNil(v: reflect.Value): boolean {
	if (!$.markAsStructValue($.cloneStructValue(v)).IsValid()) {
		return true
	}
	switch ($.markAsStructValue($.cloneStructValue(v)).Kind()) {
		case reflect.Chan:
		case reflect.Func:
		case reflect.Interface:
		case reflect.Map:
		case reflect.Pointer:
		case reflect.Slice:
		{
			return $.markAsStructValue($.cloneStructValue(v)).IsNil()
			break
		}
	}
	return false
}

export function canCompare(v1: reflect.Value, v2: reflect.Value): boolean {
	let k1 = $.markAsStructValue($.cloneStructValue(v1)).Kind()
	let k2 = $.markAsStructValue($.cloneStructValue(v2)).Kind()
	if (k1 == k2) {
		return true
	}
	// We know the type can be compared to nil.
	return (k1 == 0) || (k2 == 0)
}

export async function eq(arg1: reflect.Value, arg2: $.Slice<reflect.Value>): globalThis.Promise<[boolean, $.GoError]> {
	arg1 = $.assignStruct(arg1, __goscript_exec.indirectInterface(arg1))
	if ($.sliceLen(arg2) == 0) {
		return [false, errNoComparison]
	}
	let [k1, ] = basicKind(arg1)
	for (let __goscriptRangeTarget3 = arg2, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let arg = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as reflect.Value)))
		arg = $.assignStruct(arg, __goscript_exec.indirectInterface($.markAsStructValue($.cloneStructValue(arg))))
		let [k2, ] = basicKind($.markAsStructValue($.cloneStructValue(arg)))
		let __goscriptShadow2 = false
		if (k1 != k2) {
			// Special case: Can compare integer values regardless of type's sign.
			switch ((true as boolean)) {
				case (k1 == 3) && (k2 == 6):
				{
					__goscriptShadow2 = ($.markAsStructValue($.cloneStructValue(arg1)).Int() >= 0n) && ($.uint64($.markAsStructValue($.cloneStructValue(arg1)).Int()) == $.markAsStructValue($.cloneStructValue(arg)).Uint())
					break
				}
				case (k1 == 6) && (k2 == 3):
				{
					__goscriptShadow2 = ($.markAsStructValue($.cloneStructValue(arg)).Int() >= 0n) && ($.markAsStructValue($.cloneStructValue(arg1)).Uint() == $.uint64($.markAsStructValue($.cloneStructValue(arg)).Int()))
					break
				}
				default:
				{
					if ($.markAsStructValue($.cloneStructValue(arg1)).IsValid() && $.markAsStructValue($.cloneStructValue(arg)).IsValid()) {
						return [false, fmt.Errorf("incompatible types for comparison: %v and %v", ($.markAsStructValue($.cloneStructValue(arg1)).Type() as any), ($.markAsStructValue($.cloneStructValue(arg)).Type() as any))]
					}
					break
				}
			}
		} else {
			switch (k1) {
				case 1:
				{
					__goscriptShadow2 = $.markAsStructValue($.cloneStructValue(arg1)).Bool() == $.markAsStructValue($.cloneStructValue(arg)).Bool()
					break
				}
				case 2:
				{
					__goscriptShadow2 = $.arrayEqual($.markAsStructValue($.cloneStructValue(arg1)).Complex(), $.markAsStructValue($.cloneStructValue(arg)).Complex())
					break
				}
				case 4:
				{
					__goscriptShadow2 = $.markAsStructValue($.cloneStructValue(arg1)).Float() == $.markAsStructValue($.cloneStructValue(arg)).Float()
					break
				}
				case 3:
				{
					__goscriptShadow2 = $.markAsStructValue($.cloneStructValue(arg1)).Int() == $.markAsStructValue($.cloneStructValue(arg)).Int()
					break
				}
				case 5:
				{
					__goscriptShadow2 = $.stringEqual($.markAsStructValue($.cloneStructValue(arg1)).String(), $.markAsStructValue($.cloneStructValue(arg)).String())
					break
				}
				case 6:
				{
					__goscriptShadow2 = $.markAsStructValue($.cloneStructValue(arg1)).Uint() == $.markAsStructValue($.cloneStructValue(arg)).Uint()
					break
				}
				default:
				{
					if (!canCompare(arg1, $.markAsStructValue($.cloneStructValue(arg)))) {
						return [false, fmt.Errorf("non-comparable types %s: %v, %s: %v", $.interfaceValue($.markAsStructValue($.cloneStructValue(arg1)), "reflect.Value", "reflect.Value"), ($.markAsStructValue($.cloneStructValue(arg1)).Type() as any), ($.markAsStructValue($.cloneStructValue(arg)).Type() as any), $.interfaceValue($.markAsStructValue($.cloneStructValue(arg)), "reflect.Value", "reflect.Value"))]
					}
					if (isNil(arg1) || isNil($.markAsStructValue($.cloneStructValue(arg)))) {
						__goscriptShadow2 = isNil($.markAsStructValue($.cloneStructValue(arg))) == isNil(arg1)
					} else {
						if (!(__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(arg)).Type()).Comparable(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
							return [false, fmt.Errorf("non-comparable type %s: %v", $.interfaceValue($.markAsStructValue($.cloneStructValue(arg)), "reflect.Value", "reflect.Value"), ($.markAsStructValue($.cloneStructValue(arg)).Type() as any))]
						}
						__goscriptShadow2 = $.comparableEqual($.markAsStructValue($.cloneStructValue(arg1)).Interface(), $.markAsStructValue($.cloneStructValue(arg)).Interface())
					}
					break
				}
			}
		}
		if (__goscriptShadow2) {
			return [true, null]
		}
	}
	return [false, null]
}

export async function ne(arg1: reflect.Value, arg2: reflect.Value): globalThis.Promise<[boolean, $.GoError]> {
	// != is the inverse of ==.
	let [equal, err] = await eq($.markAsStructValue($.cloneStructValue(arg1)), $.arrayToSlice<reflect.Value>([$.markAsStructValue($.cloneStructValue(arg2))]))
	return [!equal, err]
}

export function lt(arg1: reflect.Value, arg2: reflect.Value): [boolean, $.GoError] {
	arg1 = $.assignStruct(arg1, __goscript_exec.indirectInterface(arg1))
	let [k1, err] = basicKind(arg1)
	if (err != null) {
		return [false, err]
	}
	arg2 = $.assignStruct(arg2, __goscript_exec.indirectInterface(arg2))
	let __goscriptTuple5: any = basicKind(arg2)
	let k2 = __goscriptTuple5[0]
	err = __goscriptTuple5[1]
	if (err != null) {
		return [false, err]
	}
	let __goscriptShadow3 = false
	if (k1 != k2) {
		// Special case: Can compare integer values regardless of type's sign.
		switch ((true as boolean)) {
			case (k1 == 3) && (k2 == 6):
			{
				__goscriptShadow3 = ($.markAsStructValue($.cloneStructValue(arg1)).Int() < 0n) || ($.uint64($.markAsStructValue($.cloneStructValue(arg1)).Int()) < $.markAsStructValue($.cloneStructValue(arg2)).Uint())
				break
			}
			case (k1 == 6) && (k2 == 3):
			{
				__goscriptShadow3 = ($.markAsStructValue($.cloneStructValue(arg2)).Int() >= 0n) && ($.markAsStructValue($.cloneStructValue(arg1)).Uint() < $.uint64($.markAsStructValue($.cloneStructValue(arg2)).Int()))
				break
			}
			default:
			{
				return [false, fmt.Errorf("incompatible types for comparison: %v and %v", ($.markAsStructValue($.cloneStructValue(arg1)).Type() as any), ($.markAsStructValue($.cloneStructValue(arg2)).Type() as any))]
				break
			}
		}
	} else {
		switch (k1) {
			case 1:
			case 2:
			{
				return [false, errBadComparisonType]
				break
			}
			case 4:
			{
				__goscriptShadow3 = $.markAsStructValue($.cloneStructValue(arg1)).Float() < $.markAsStructValue($.cloneStructValue(arg2)).Float()
				break
			}
			case 3:
			{
				__goscriptShadow3 = $.markAsStructValue($.cloneStructValue(arg1)).Int() < $.markAsStructValue($.cloneStructValue(arg2)).Int()
				break
			}
			case 5:
			{
				__goscriptShadow3 = $.stringCompare($.markAsStructValue($.cloneStructValue(arg1)).String(), $.markAsStructValue($.cloneStructValue(arg2)).String()) < 0
				break
			}
			case 6:
			{
				__goscriptShadow3 = $.markAsStructValue($.cloneStructValue(arg1)).Uint() < $.markAsStructValue($.cloneStructValue(arg2)).Uint()
				break
			}
			default:
			{
				$.panic("invalid kind")
				break
			}
		}
	}
	return [__goscriptShadow3, null]
}

export async function le(arg1: reflect.Value, arg2: reflect.Value): globalThis.Promise<[boolean, $.GoError]> {
	// <= is < or ==.
	let [lessThan, err] = lt($.markAsStructValue($.cloneStructValue(arg1)), $.markAsStructValue($.cloneStructValue(arg2)))
	if (lessThan || (err != null)) {
		return [lessThan, err]
	}
	return eq($.markAsStructValue($.cloneStructValue(arg1)), $.arrayToSlice<reflect.Value>([$.markAsStructValue($.cloneStructValue(arg2))]))
}

export async function gt(arg1: reflect.Value, arg2: reflect.Value): globalThis.Promise<[boolean, $.GoError]> {
	// > is the inverse of <=.
	let [lessOrEqual, err] = await le(arg1, arg2)
	if (err != null) {
		return [false, err]
	}
	return [!lessOrEqual, null]
}

export function ge(arg1: reflect.Value, arg2: reflect.Value): [boolean, $.GoError] {
	// >= is the inverse of <.
	let [lessThan, err] = lt($.markAsStructValue($.cloneStructValue(arg1)), $.markAsStructValue($.cloneStructValue(arg2)))
	if (err != null) {
		return [false, err]
	}
	return [!lessThan, null]
}

export let htmlQuot: $.Slice<number> = new Uint8Array([38, 35, 51, 52, 59])

export function __goscript_set_htmlQuot(__goscriptValue: $.Slice<number>): void {
	htmlQuot = __goscriptValue
}

export let htmlApos: $.Slice<number> = new Uint8Array([38, 35, 51, 57, 59])

export function __goscript_set_htmlApos(__goscriptValue: $.Slice<number>): void {
	htmlApos = __goscriptValue
}

export let htmlAmp: $.Slice<number> = new Uint8Array([38, 97, 109, 112, 59])

export function __goscript_set_htmlAmp(__goscriptValue: $.Slice<number>): void {
	htmlAmp = __goscriptValue
}

export let htmlLt: $.Slice<number> = new Uint8Array([38, 108, 116, 59])

export function __goscript_set_htmlLt(__goscriptValue: $.Slice<number>): void {
	htmlLt = __goscriptValue
}

export let htmlGt: $.Slice<number> = new Uint8Array([38, 103, 116, 59])

export function __goscript_set_htmlGt(__goscriptValue: $.Slice<number>): void {
	htmlGt = __goscriptValue
}

export let htmlNull: $.Slice<number> = new Uint8Array([239, 191, 189])

export function __goscript_set_htmlNull(__goscriptValue: $.Slice<number>): void {
	htmlNull = __goscriptValue
}

export async function HTMLEscape(w: io.Writer | null, b: $.Slice<number>): globalThis.Promise<void> {
	let last = 0
	for (let __goscriptRangeTarget4 = b, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
		let c = $.uint((__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + i] as number), 8)
		let html: $.Slice<number> = null! as $.Slice<number>
		switch (c) {
			case 0:
			{
				html = htmlNull
				break
			}
			case 34:
			{
				html = htmlQuot
				break
			}
			case 39:
			{
				html = htmlApos
				break
			}
			case 38:
			{
				html = htmlAmp
				break
			}
			case 60:
			{
				html = htmlLt
				break
			}
			case 62:
			{
				html = htmlGt
				break
			}
			default:
			{
				continue
				break
			}
		}
		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.goSlice(b, last, i))
		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(html)
		last = i + 1
	}
	await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.goSlice(b, last, undefined))
}

export async function HTMLEscapeString(s: string): globalThis.Promise<string> {
	// Avoid allocation if we can.
	if (!strings.ContainsAny(s, "'\"&<>\x00")) {
		return s
	}
	let b: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
	await HTMLEscape($.interfaceValue<io.Writer | null>(b, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")), $.stringToBytes(s))
	return b.value.String()
}

export async function HTMLEscaper(args: $.Slice<any>): globalThis.Promise<string> {
	return HTMLEscapeString(await evalArgs(args))
}

export let jsLowUni: $.Slice<number> = new Uint8Array([92, 117, 48, 48])

export function __goscript_set_jsLowUni(__goscriptValue: $.Slice<number>): void {
	jsLowUni = __goscriptValue
}

export let hex: $.Slice<number> = new Uint8Array([48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70])

export function __goscript_set_hex(__goscriptValue: $.Slice<number>): void {
	hex = __goscriptValue
}

export let jsBackslash: $.Slice<number> = new Uint8Array([92, 92])

export function __goscript_set_jsBackslash(__goscriptValue: $.Slice<number>): void {
	jsBackslash = __goscriptValue
}

export let jsApos: $.Slice<number> = new Uint8Array([92, 39])

export function __goscript_set_jsApos(__goscriptValue: $.Slice<number>): void {
	jsApos = __goscriptValue
}

export let jsQuot: $.Slice<number> = new Uint8Array([92, 34])

export function __goscript_set_jsQuot(__goscriptValue: $.Slice<number>): void {
	jsQuot = __goscriptValue
}

export let jsLt: $.Slice<number> = new Uint8Array([92, 117, 48, 48, 51, 67])

export function __goscript_set_jsLt(__goscriptValue: $.Slice<number>): void {
	jsLt = __goscriptValue
}

export let jsGt: $.Slice<number> = new Uint8Array([92, 117, 48, 48, 51, 69])

export function __goscript_set_jsGt(__goscriptValue: $.Slice<number>): void {
	jsGt = __goscriptValue
}

export let jsAmp: $.Slice<number> = new Uint8Array([92, 117, 48, 48, 50, 54])

export function __goscript_set_jsAmp(__goscriptValue: $.Slice<number>): void {
	jsAmp = __goscriptValue
}

export let jsEq: $.Slice<number> = new Uint8Array([92, 117, 48, 48, 51, 68])

export function __goscript_set_jsEq(__goscriptValue: $.Slice<number>): void {
	jsEq = __goscriptValue
}

export async function JSEscape(w: io.Writer | null, b: $.Slice<number>): globalThis.Promise<void> {
	let last = 0
	for (let __goscriptSliceWindow1 = $.sliceRange(b), i = 0; i < __goscriptSliceWindow1.length; i++) {
		let c = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as number)

		if (!jsIsSpecial($.int(c, 32))) {
			// fast path: nothing to do
			continue
		}
		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.goSlice(b, last, i))

		if (c < 128) {
			// Quotes, slashes and angle brackets get quoted.
			// Control characters get written as \u00XX.
			switch (c) {
				case 92:
				{
					await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(jsBackslash)
					break
				}
				case 39:
				{
					await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(jsApos)
					break
				}
				case 34:
				{
					await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(jsQuot)
					break
				}
				case 60:
				{
					await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(jsLt)
					break
				}
				case 62:
				{
					await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(jsGt)
					break
				}
				case 38:
				{
					await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(jsAmp)
					break
				}
				case 61:
				{
					await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(jsEq)
					break
				}
				default:
				{
					await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write(jsLowUni)
					let t = $.uint($.uintShr(c, 4, 8), 8)
					let __goscriptShadow4 = $.uint(c & 0x0f, 8)
					await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.goSlice(hex, t, ((t + 1) & 0xff)))
					await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.goSlice(hex, __goscriptShadow4, ((__goscriptShadow4 + 1) & 0xff)))
					break
				}
			}
		} else {
			// Unicode rune.
			let [r, size] = utf8.DecodeRune($.goSlice(b, i, undefined))
			if (unicode.IsPrint(r)) {
				await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.goSlice(b, i, i + size))
			} else {
				await fmt.Fprintf($.pointerValueOrNil(w)!, "\\u%04X", $.basicInterfaceValue(r, "rune", "int32"))
			}
			i = i + (size - 1)
		}
		last = i + 1
	}
	await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? (w as Exclude<io.Writer, null>) : $.pointerValue<Exclude<io.Writer, null>>(w)).Write($.goSlice(b, last, undefined))
}

export async function JSEscapeString(s: string): globalThis.Promise<string> {
	// Avoid allocation if we can.
	if (strings.IndexFunc(s, jsIsSpecial) < 0) {
		return s
	}
	let b: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
	await JSEscape($.interfaceValue<io.Writer | null>(b, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")), $.stringToBytes(s))
	return b.value.String()
}

export function jsIsSpecial(r: number): boolean {
	switch (r) {
		case 92:
		case 39:
		case 34:
		case 60:
		case 62:
		case 38:
		case 61:
		{
			return true
			break
		}
	}
	return (r < 32) || (128 <= r)
}

export async function JSEscaper(args: $.Slice<any>): globalThis.Promise<string> {
	return JSEscapeString(await evalArgs(args))
}

export async function URLQueryEscaper(args: $.Slice<any>): globalThis.Promise<string> {
	return url.QueryEscape(await evalArgs(args))
}

export async function evalArgs(args: $.Slice<any>): globalThis.Promise<string> {
	let ok = false
	let s: string = ""
	// Fast path for simple common case.
	if ($.sliceLen(args) == 1) {
		let __goscriptTuple6: any = $.typeAssertTuple<string>($.arrayIndex(args!, 0), /* @__PURE__ */ $.basicType("string"))
		s = __goscriptTuple6[0]
		ok = __goscriptTuple6[1]
	}
	if (!ok) {
		for (let __goscriptRangeTarget5 = args, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), i = 0; i < __goscriptRangeWindow5.length; i++) {
			let arg = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + i] as any)
			let [a, __goscriptShadow5] = await __goscript_exec.printableValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf(arg))))
			if (__goscriptShadow5) {
				;(__goscriptRangeWindow5.backing as any[])[__goscriptRangeWindow5.offset + i] = a
			}
		}
		s = await fmt.Sprint(...(args ?? []))
	}
	return s
}

var __goscriptAwait: any
