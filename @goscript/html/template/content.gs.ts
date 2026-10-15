// Generated file based on content.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"

$.registerTypePackagePath("html/template", ["template.CSS", "template.HTML", "template.HTMLAttr", "template.JS", "template.JSStr", "template.URL", "template.Srcset", "template.contentType"])

export type CSS = string

export type HTML = string

export type HTMLAttr = string

export type JS = string

export type JSStr = string

export type URL = string

export type Srcset = string

export type contentType = number

export const contentTypePlain: contentType = 0

export const contentTypeCSS: contentType = 1

export const contentTypeHTML: contentType = 2

export const contentTypeHTMLAttr: contentType = 3

export const contentTypeJS: contentType = 4

export const contentTypeJSStr: contentType = 5

export const contentTypeURL: contentType = 6

export const contentTypeSrcset: contentType = 7

export const contentTypeUnsafe: contentType = 8

export async function indirect(a: any): globalThis.Promise<any> {
	if (a == null) {
		return null
	}
	{
		let t = reflect.TypeOf(a)
		if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) {
			// Avoid creating a reflect.Value if it's not a pointer.
			return a
		}
	}
	let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(a)))
	while (($.markAsStructValue($.cloneStructValue(v)).Kind() == 22) && !$.markAsStructValue($.cloneStructValue(v)).IsNil()) {
		v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Elem())
	}
	return $.markAsStructValue($.cloneStructValue(v)).Interface()
}

export let errorType: reflect.Type | null = reflect.TypeFor(__goscriptStatic0())

export function __goscript_set_errorType(__goscriptValue: reflect.Type | null): void {
	errorType = __goscriptValue
}

export let fmtStringerType: reflect.Type | null = reflect.TypeFor(__goscriptStatic1())

export function __goscript_set_fmtStringerType(__goscriptValue: reflect.Type | null): void {
	fmtStringerType = __goscriptValue
}

export async function indirectToStringerOrError(a: any): globalThis.Promise<any> {
	if (a == null) {
		return null
	}
	let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(a)))
	while (((!(__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v)).Type()).Implements($.pointerValueOrNil(fmtStringerType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && !(__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v)).Type()).Implements($.pointerValueOrNil(errorType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) && ($.markAsStructValue($.cloneStructValue(v)).Kind() == 22)) && !$.markAsStructValue($.cloneStructValue(v)).IsNil()) {
		v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Elem())
	}
	return $.markAsStructValue($.cloneStructValue(v)).Interface()
}

export async function stringify(args: $.Slice<any>): globalThis.Promise<[string, contentType]> {
	if ($.sliceLen(args) == 1) {
		{
			const __goscriptTypeSwitchValue = await indirect($.arrayIndex(args!, 0))
			switch (true) {
				case $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).ok:
					{
						let s: string = $.typeAssert<string>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string")).value
						return [s, 0]
					}
					break
				case $.typeAssert<CSS>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.CSS")).ok:
					{
						let s: CSS = $.typeAssert<CSS>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.CSS")).value
						return [s, 1]
					}
					break
				case $.typeAssert<HTML>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.HTML")).ok:
					{
						let s: HTML = $.typeAssert<HTML>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.HTML")).value
						return [s, 2]
					}
					break
				case $.typeAssert<HTMLAttr>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.HTMLAttr")).ok:
					{
						let s: HTMLAttr = $.typeAssert<HTMLAttr>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.HTMLAttr")).value
						return [s, 3]
					}
					break
				case $.typeAssert<JS>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.JS")).ok:
					{
						let s: JS = $.typeAssert<JS>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.JS")).value
						return [s, 4]
					}
					break
				case $.typeAssert<JSStr>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.JSStr")).ok:
					{
						let s: JSStr = $.typeAssert<JSStr>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.JSStr")).value
						return [s, 5]
					}
					break
				case $.typeAssert<URL>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.URL")).ok:
					{
						let s: URL = $.typeAssert<URL>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.URL")).value
						return [s, 6]
					}
					break
				case $.typeAssert<Srcset>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.Srcset")).ok:
					{
						let s: Srcset = $.typeAssert<Srcset>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.Srcset")).value
						return [s, 7]
					}
					break
			}
		}
	}
	let i = 0
	for (let __goscriptRangeTarget0 = args, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let arg = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as any)
		// We skip untyped nil arguments for backward compatibility.
		// Without this they would be output as <nil>, escaped.
		// See issue 25875.
		if (arg == null) {
			continue
		}

		;(__goscriptRangeWindow0.backing as any[])[$.windowSlot(__goscriptRangeWindow0, i)] = await indirectToStringerOrError(arg)
		i++
	}
	return [await fmt.Sprint(...($.goSlice(args, undefined, i) ?? [])), 0]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "error", zero: () => null, methods: {Error: (receiver: any, ...args: any[]) => receiver.Error(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "fmt.Stringer", zero: () => null, methods: {String: (receiver: any, ...args: any[]) => receiver.String(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any
