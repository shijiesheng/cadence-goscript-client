// Generated file based on inout.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as list from "@goscript/container/list/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strconv from "@goscript/strconv/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_container from "./container.gs.ts"

import * as __goscript_error from "./error.gs.ts"
import "@goscript/container/list/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strconv/index.js"
import "./container.gs.ts"
import "./error.gs.ts"

$.registerTypePackagePath("go.uber.org/dig", ["dig.digSentinel", "dig.In", "dig.Out"])

export class digSentinel {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): digSentinel {
		return new digSentinel(this, true)
	}

	public __goscriptAssign(source: digSentinel): void {
	}

	static __typeInfo = $.registerStructType(
		"dig.digSentinel",
		() => new digSentinel(),
		() => [],
		digSentinel,
		() => []
	)
}

export class In {
	public get _blank0(): digSentinel {
		return this._fields._blank0
	}

	public set _blank0(value: digSentinel) {
		this._fields._blank0 = value
	}

	public _fields: {
		_blank0: digSentinel
	}

	constructor(init?: Partial<{_blank0?: digSentinel}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 ? init._blank0.clone() : new digSentinel(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): In {
		return new In(this, true)
	}

	public __goscriptAssign(source: In): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target._blank0, values._blank0)
	}

	static __typeInfo = $.registerStructType(
		"dig.In",
		() => new In(),
		() => [],
		In,
		() => [/* @__PURE__ */ $.structField("_", "dig.digSentinel", [0], 0, false, { key: "_blank0", pkgPath: "go.uber.org/dig" })]
	)
}

export class Out {
	public get _blank0(): digSentinel {
		return this._fields._blank0
	}

	public set _blank0(value: digSentinel) {
		this._fields._blank0 = value
	}

	public _fields: {
		_blank0: digSentinel
	}

	constructor(init?: Partial<{_blank0?: digSentinel}>, __goscriptValue?: boolean) {
		this._fields = {
			_blank0: init?._blank0 ? init._blank0.clone() : new digSentinel(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Out {
		return new Out(this, true)
	}

	public __goscriptAssign(source: Out): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target._blank0, values._blank0)
	}

	static __typeInfo = $.registerStructType(
		"dig.Out",
		() => new Out(),
		() => [],
		Out,
		() => [/* @__PURE__ */ $.structField("_", "dig.digSentinel", [0], 0, false, { key: "_blank0", pkgPath: "go.uber.org/dig" })]
	)
}

export let _noValue: reflect.Value = $.markAsStructValue(new reflect.Value())

export function __goscript_set__noValue(__goscriptValue: reflect.Value): void {
	$.assignStruct(_noValue, __goscriptValue)
}

export let _errType: reflect.Type | null = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*error", /* @__PURE__ */ $.pointerType("error")))).Elem()

export function __goscript_set__errType(__goscriptValue: reflect.Type | null): void {
	_errType = __goscriptValue
}

export let _inPtrType: reflect.Type | null = reflect.TypeOf($.interfaceValue(null, "*dig.In", /* @__PURE__ */ $.pointerType("dig.In")))

export function __goscript_set__inPtrType(__goscriptValue: reflect.Type | null): void {
	_inPtrType = __goscriptValue
}

export let _inType: reflect.Type | null = reflect.TypeOf($.interfaceValue(new In(undefined, true), "dig.In", "dig.In"))

export function __goscript_set__inType(__goscriptValue: reflect.Type | null): void {
	_inType = __goscriptValue
}

export let _outPtrType: reflect.Type | null = reflect.TypeOf($.interfaceValue(null, "*dig.Out", /* @__PURE__ */ $.pointerType("dig.Out")))

export function __goscript_set__outPtrType(__goscriptValue: reflect.Type | null): void {
	_outPtrType = __goscriptValue
}

export let _outType: reflect.Type | null = reflect.TypeOf($.interfaceValue(new Out(undefined, true), "dig.Out", "dig.Out"))

export function __goscript_set__outType(__goscriptValue: reflect.Type | null): void {
	_outType = __goscriptValue
}

export async function isError(t: reflect.Type | null): globalThis.Promise<boolean> {
	return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Implements($.pointerValueOrNil(_errType)!)
}

export async function IsIn(o: any): globalThis.Promise<boolean> {
	return embedsType(o, _inType)
}

export async function IsOut(o: any): globalThis.Promise<boolean> {
	return embedsType(o, _outType)
}

export async function embedsType(i: any, e: reflect.Type | null): globalThis.Promise<boolean> {
	// TODO: this function doesn't consider e being a pointer.
	// given `type A foo { *In }`, this function would return false for
	// embedding dig.In, which makes for some extra error checking in places
	// that call this function. Might be worthwhile to consider reflect.Indirect
	// usage to clean up the callers.

	if (i == null) {
		return false
	}

	// maybe it's already a reflect.Type
	let [t, ok] = $.typeAssertTuple<reflect.Type | null>(i, "reflect.Type")
	if (!ok) {
		// take the type if it's not
		t = reflect.TypeOf(i)
	}

	// We are going to do a breadth-first search of all embedded fields.
	let types: list.List | $.VarRef<list.List> | null = list.New()
	void (types !== null && (types as any).__isVarRef !== true && (types as any).__goValue === undefined ? ((types as any) as list.List).PushBack((t as any)) : list.List.prototype.PushBack.call(types, (t as any)))
	while ((types !== null && (types as any).__isVarRef !== true && (types as any).__goValue === undefined ? ((types as any) as list.List).Len() : list.List.prototype.Len.call(types)) > 0) {
		let __goscriptShadow0 = $.mustTypeAssert<reflect.Type | null>(list.List.prototype.Remove.call(types, (types !== null && (types as any).__isVarRef !== true && (types as any).__goValue === undefined ? ((types as any) as list.List).Front() : list.List.prototype.Front.call(types))), "reflect.Type")

		if ($.comparableEqual(__goscriptShadow0, e)) {
			return true
		}

		if ((__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow0)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 25) {
			continue
		}

		for (let __goscriptShadow1 = 0; __goscriptShadow1 < (__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow0)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); __goscriptShadow1++) {
			let f = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(__goscriptShadow0)).Field(__goscriptShadow1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField)))
			if (f.Anonymous) {
				void (types !== null && (types as any).__isVarRef !== true && (types as any).__goValue === undefined ? ((types as any) as list.List).PushBack((f.Type as any)) : list.List.prototype.PushBack.call(types, (f.Type as any)))
			}
		}
	}

	// If perf is an issue, we can cache known In objects and Out objects in a
	// map[reflect.Type]struct{}.
	return false
}

export async function isFieldOptional(f: reflect.StructField): globalThis.Promise<[boolean, $.GoError]> {
	let tag = reflect.StructTag_Get(f.Tag, "optional")
	if ($.stringEqual(tag, "")) {
		return [false, null]
	}

	let [optional, err] = strconv.ParseBool(tag)
	if (err != null) {
		err = $.interfaceValue<$.GoError>(__goscript_error.newErrInvalidInput(await fmt.Sprintf("invalid value %q for %q tag on field %v", tag, "optional", f.Name), err), "dig.errInvalidInput", "dig.errInvalidInput")
	}

	return [optional, err]
}

var __goscriptAwait: any
