// Generated file based on header_context.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import type * as __goscript_header_transport from "./header_transport.gs.ts"
import "@goscript/context/index.js"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.headerKey", "thrift.headerKeyList"])

export type headerKey = string

export type headerKeyList = number

export const headerKeyListRead: headerKeyList = 0

export const headerKeyListWrite: headerKeyList = 1

export function SetHeader(ctx: context.Context | null, key: string, value: string): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.namedValueInterfaceValue<any>(key, "thrift.headerKey", {}, /* @__PURE__ */ $.basicType("string", "thrift.headerKey")), value)
}

export function UnsetHeader(ctx: context.Context | null, key: string): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.namedValueInterfaceValue<any>(key, "thrift.headerKey", {}, /* @__PURE__ */ $.basicType("string", "thrift.headerKey")), null)
}

export async function GetHeader(ctx: context.Context | null, key: string): globalThis.Promise<[string, boolean]> {
	let value: string = ""
	let ok: boolean = false
	{
		let v = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>(key, "thrift.headerKey", {}, /* @__PURE__ */ $.basicType("string", "thrift.headerKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (v != null) {
			let __goscriptTuple0: any = $.typeAssertTuple<string>(v, /* @__PURE__ */ $.basicType("string"))
			value = __goscriptTuple0[0]
			ok = __goscriptTuple0[1]
		}
	}
	return [value, ok]
}

export function SetReadHeaderList(ctx: context.Context | null, keys: $.Slice<string>): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.namedValueInterfaceValue<any>(0, "thrift.headerKeyList", {}, /* @__PURE__ */ $.basicType("int", "thrift.headerKeyList")), $.interfaceValue(keys, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
}

export async function GetReadHeaderList(ctx: context.Context | null): globalThis.Promise<$.Slice<string>> {
	{
		let v = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>(0, "thrift.headerKeyList", {}, /* @__PURE__ */ $.basicType("int", "thrift.headerKeyList"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (v != null) {
			{
				let __goscriptTuple1: any = $.typeAssertTuple<$.Slice<string>>(v, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))
				let value: $.Slice<string> = __goscriptTuple1[0]
				let ok = __goscriptTuple1[1]
				if (ok) {
					return value
				}
			}
		}
	}
	return null
}

export function SetWriteHeaderList(ctx: context.Context | null, keys: $.Slice<string>): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.namedValueInterfaceValue<any>(1, "thrift.headerKeyList", {}, /* @__PURE__ */ $.basicType("int", "thrift.headerKeyList")), $.interfaceValue(keys, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
}

export async function GetWriteHeaderList(ctx: context.Context | null): globalThis.Promise<$.Slice<string>> {
	{
		let v = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>(1, "thrift.headerKeyList", {}, /* @__PURE__ */ $.basicType("int", "thrift.headerKeyList"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (v != null) {
			{
				let __goscriptTuple2: any = $.typeAssertTuple<$.Slice<string>>(v, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))
				let value: $.Slice<string> = __goscriptTuple2[0]
				let ok = __goscriptTuple2[1]
				if (ok) {
					return value
				}
			}
		}
	}
	return null
}

export function AddReadTHeaderToContext(ctx: context.Context | null, headers: __goscript_header_transport.THeaderMap): context.Context | null {
	let keys: $.Slice<string> = $.makeSlice<string>(0, $.len(headers), "string")
	for (const [key, value] of headers?.entries() ?? []) {
		ctx = SetHeader(ctx, key, value)
		keys = $.appendOne(keys, key)
	}
	return SetReadHeaderList(ctx, keys)
}

var __goscriptAwait: any
