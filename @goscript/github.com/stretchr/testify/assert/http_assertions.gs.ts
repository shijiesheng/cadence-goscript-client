// Generated file based on http_assertions.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as http from "@goscript/net/http/index.js"

import * as httptest from "@goscript/net/http/httptest/index.js"

import * as url2 from "@goscript/net/url/index.js"

import * as strings from "@goscript/strings/index.js"

import * as bytes from "@goscript/bytes/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_assertions from "./assertions.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/http/httptest/index.js"
import "@goscript/net/url/index.js"
import "@goscript/strings/index.js"
import "@goscript/bytes/index.js"
import "./assertions.gs.ts"

export async function httpCode(handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values): globalThis.Promise<[number, $.GoError]> {
	let w: httptest.ResponseRecorder | $.VarRef<httptest.ResponseRecorder> | null = httptest.NewRecorder()
	let __goscriptTuple0: any = http.NewRequest(method, url, $.interfaceValue<io.Reader | null>($.markAsStructValue($.cloneStructValue($.pointerValue<any>(http.NoBody))), "http.noBody", "http.noBody")!)
	let req: http.Request | $.VarRef<http.Request> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [-1, err]
	}
	$.pointerValue<url2.URL>($.pointerValue<http.Request>(req).URL).RawQuery = url2.Values_Encode(values)
	void (__goscriptAwait = handler!($.interfaceValue<http.ResponseWriter | null>(w, "*httptest.ResponseRecorder", /* @__PURE__ */ $.pointerType("httptest.ResponseRecorder")), req), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return [$.pointerValue<httptest.ResponseRecorder>(w).Code, null]
}

export async function HTTPSuccess(t: __goscript_assertions.TestingT | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let [code, err] = await httpCode(handler, method, url, values)
	if (err != null) {
		await __goscript_assertions.Fail(t, await fmt.Sprintf("Failed to build test request, got error: %s", (err as any)), msgAndArgs)
	}

	let isSuccessCode = (code >= 200) && (code <= 206)
	if (!isSuccessCode) {
		await __goscript_assertions.Fail(t, await fmt.Sprintf("Expected HTTP success status code for %q but received %d", $.concatString(($.concatString(url, "?")), url2.Values_Encode(values)), $.basicInterfaceValue(code, "int")), msgAndArgs)
	}

	return isSuccessCode
}

export async function HTTPRedirect(t: __goscript_assertions.TestingT | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let [code, err] = await httpCode(handler, method, url, values)
	if (err != null) {
		await __goscript_assertions.Fail(t, await fmt.Sprintf("Failed to build test request, got error: %s", (err as any)), msgAndArgs)
	}

	let isRedirectCode = (code >= 300) && (code <= 307)
	if (!isRedirectCode) {
		await __goscript_assertions.Fail(t, await fmt.Sprintf("Expected HTTP redirect status code for %q but received %d", $.concatString(($.concatString(url, "?")), url2.Values_Encode(values)), $.basicInterfaceValue(code, "int")), msgAndArgs)
	}

	return isRedirectCode
}

export async function HTTPError(t: __goscript_assertions.TestingT | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let [code, err] = await httpCode(handler, method, url, values)
	if (err != null) {
		await __goscript_assertions.Fail(t, await fmt.Sprintf("Failed to build test request, got error: %s", (err as any)), msgAndArgs)
	}

	let isErrorCode = code >= 400
	if (!isErrorCode) {
		await __goscript_assertions.Fail(t, await fmt.Sprintf("Expected HTTP error status code for %q but received %d", $.concatString(($.concatString(url, "?")), url2.Values_Encode(values)), $.basicInterfaceValue(code, "int")), msgAndArgs)
	}

	return isErrorCode
}

export async function HTTPStatusCode(t: __goscript_assertions.TestingT | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, statuscode: number, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let [code, err] = await httpCode(handler, method, url, values)
	if (err != null) {
		await __goscript_assertions.Fail(t, await fmt.Sprintf("Failed to build test request, got error: %s", (err as any)), msgAndArgs)
	}

	let successful = code == statuscode
	if (!successful) {
		await __goscript_assertions.Fail(t, await fmt.Sprintf("Expected HTTP status code %d for %q but received %d", $.basicInterfaceValue(statuscode, "int"), $.concatString(($.concatString(url, "?")), url2.Values_Encode(values)), $.basicInterfaceValue(code, "int")), msgAndArgs)
	}

	return successful
}

export async function HTTPBody(handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values): globalThis.Promise<string> {
	let w: httptest.ResponseRecorder | $.VarRef<httptest.ResponseRecorder> | null = httptest.NewRecorder()
	if ($.len(values) > 0) {
		url = $.concatString(url, $.concatString("?", url2.Values_Encode(values)))
	}
	let __goscriptTuple1: any = http.NewRequest(method, url, $.interfaceValue<io.Reader | null>($.markAsStructValue($.cloneStructValue($.pointerValue<any>(http.NoBody))), "http.noBody", "http.noBody")!)
	let req: http.Request | $.VarRef<http.Request> | null = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (err != null) {
		return ""
	}
	void (__goscriptAwait = handler!($.interfaceValue<http.ResponseWriter | null>(w, "*httptest.ResponseRecorder", /* @__PURE__ */ $.pointerType("httptest.ResponseRecorder")), req), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return $.pointerValue<bytes.Buffer>($.pointerValue<httptest.ResponseRecorder>(w).Body).String()
}

export async function HTTPBodyContains(t: __goscript_assertions.TestingT | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, str: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let body = await HTTPBody(handler, method, url, values)

	let contains = strings.Contains(body, await fmt.Sprint(str))
	if (!contains) {
		await __goscript_assertions.Fail(t, await fmt.Sprintf("Expected response body for \"%s\" to contain \"%s\" but found \"%s\"", $.concatString(($.concatString(url, "?")), url2.Values_Encode(values)), str, body), msgAndArgs)
	}

	return contains
}

export async function HTTPBodyNotContains(t: __goscript_assertions.TestingT | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, str: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let body = await HTTPBody(handler, method, url, values)

	let contains = strings.Contains(body, await fmt.Sprint(str))
	if (contains) {
		await __goscript_assertions.Fail(t, await fmt.Sprintf("Expected response body for \"%s\" to NOT contain \"%s\" but found \"%s\"", $.concatString(($.concatString(url, "?")), url2.Values_Encode(values)), str, body), msgAndArgs)
	}

	return !contains
}

var __goscriptAwait: any
