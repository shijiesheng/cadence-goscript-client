// Generated file based on assertion_format.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as http from "@goscript/net/http/index.js"

import * as url2 from "@goscript/net/url/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_assertion_compare from "./assertion_compare.gs.ts"

import * as __goscript_assertion_order from "./assertion_order.gs.ts"

import * as __goscript_assertions from "./assertions.gs.ts"

import * as __goscript_http_assertions from "./http_assertions.gs.ts"
import "@goscript/net/http/index.js"
import "@goscript/net/url/index.js"
import "@goscript/time/index.js"
import "./assertion_compare.gs.ts"
import "./assertion_order.gs.ts"
import "./assertions.gs.ts"
import "./http_assertions.gs.ts"

export async function Conditionf(t: __goscript_assertions.TestingT | null, comp: (() => boolean | globalThis.Promise<boolean>) | null, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.Condition(t, comp, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Containsf(t: __goscript_assertions.TestingT | null, s: any, contains: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.Contains(t, s, contains, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function DirExistsf(t: __goscript_assertions.TestingT | null, path: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.DirExists(t, path, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function ElementsMatchf(t: __goscript_assertions.TestingT | null, listA: any, listB: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.ElementsMatch(t, listA, listB, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Emptyf(t: __goscript_assertions.TestingT | null, _object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.Empty(t, _object, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Equalf(t: __goscript_assertions.TestingT | null, expected: any, actual: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.Equal(t, expected, actual, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function EqualErrorf(t: __goscript_assertions.TestingT | null, theError: $.GoError, errString: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.EqualError(t, theError, errString, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function EqualExportedValuesf(t: __goscript_assertions.TestingT | null, expected: any, actual: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.EqualExportedValues(t, expected, actual, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function EqualValuesf(t: __goscript_assertions.TestingT | null, expected: any, actual: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.EqualValues(t, expected, actual, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Errorf(t: __goscript_assertions.TestingT | null, err: $.GoError, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.Error(t, err, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function ErrorAsf(t: __goscript_assertions.TestingT | null, err: $.GoError, target: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.ErrorAs(t, err, target, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function ErrorContainsf(t: __goscript_assertions.TestingT | null, theError: $.GoError, contains: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.ErrorContains(t, theError, contains, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function ErrorIsf(t: __goscript_assertions.TestingT | null, err: $.GoError, target: $.GoError, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.ErrorIs(t, err, target, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Eventuallyf(t: __goscript_assertions.TestingT | null, condition: (() => boolean | globalThis.Promise<boolean>) | null, waitFor: time.Duration, tick: time.Duration, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.Eventually(t, condition, waitFor, tick, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function EventuallyWithTf(t: __goscript_assertions.TestingT | null, condition: ((collect: __goscript_assertions.CollectT | $.VarRef<__goscript_assertions.CollectT> | null) => void) | null, waitFor: time.Duration, tick: time.Duration, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.EventuallyWithT(t, condition, waitFor, tick, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Exactlyf(t: __goscript_assertions.TestingT | null, expected: any, actual: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.Exactly(t, expected, actual, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Failf(t: __goscript_assertions.TestingT | null, failureMessage: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.Fail(t, failureMessage, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function FailNowf(t: __goscript_assertions.TestingT | null, failureMessage: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.FailNow(t, failureMessage, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Falsef(t: __goscript_assertions.TestingT | null, value: boolean, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.False(t, value, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function FileExistsf(t: __goscript_assertions.TestingT | null, path: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.FileExists(t, path, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Greaterf(t: __goscript_assertions.TestingT | null, e1: any, e2: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertion_compare.Greater(t, e1, e2, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function GreaterOrEqualf(t: __goscript_assertions.TestingT | null, e1: any, e2: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertion_compare.GreaterOrEqual(t, e1, e2, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function HTTPBodyContainsf(t: __goscript_assertions.TestingT | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, str: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_http_assertions.HTTPBodyContains(t, handler, method, url, values, str, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function HTTPBodyNotContainsf(t: __goscript_assertions.TestingT | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, str: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_http_assertions.HTTPBodyNotContains(t, handler, method, url, values, str, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function HTTPErrorf(t: __goscript_assertions.TestingT | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_http_assertions.HTTPError(t, handler, method, url, values, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function HTTPRedirectf(t: __goscript_assertions.TestingT | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_http_assertions.HTTPRedirect(t, handler, method, url, values, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function HTTPStatusCodef(t: __goscript_assertions.TestingT | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, statuscode: number, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_http_assertions.HTTPStatusCode(t, handler, method, url, values, statuscode, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function HTTPSuccessf(t: __goscript_assertions.TestingT | null, handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_http_assertions.HTTPSuccess(t, handler, method, url, values, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Implementsf(t: __goscript_assertions.TestingT | null, interfaceObject: any, _object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.Implements(t, interfaceObject, _object, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function InDeltaf(t: __goscript_assertions.TestingT | null, expected: any, actual: any, delta: number, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.InDelta(t, expected, actual, delta, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function InDeltaMapValuesf(t: __goscript_assertions.TestingT | null, expected: any, actual: any, delta: number, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.InDeltaMapValues(t, expected, actual, delta, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function InDeltaSlicef(t: __goscript_assertions.TestingT | null, expected: any, actual: any, delta: number, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.InDeltaSlice(t, expected, actual, delta, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function InEpsilonf(t: __goscript_assertions.TestingT | null, expected: any, actual: any, epsilon: number, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.InEpsilon(t, expected, actual, epsilon, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function InEpsilonSlicef(t: __goscript_assertions.TestingT | null, expected: any, actual: any, epsilon: number, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.InEpsilonSlice(t, expected, actual, epsilon, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function IsDecreasingf(t: __goscript_assertions.TestingT | null, _object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertion_order.IsDecreasing(t, _object, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function IsIncreasingf(t: __goscript_assertions.TestingT | null, _object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertion_order.IsIncreasing(t, _object, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function IsNonDecreasingf(t: __goscript_assertions.TestingT | null, _object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertion_order.IsNonDecreasing(t, _object, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function IsNonIncreasingf(t: __goscript_assertions.TestingT | null, _object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertion_order.IsNonIncreasing(t, _object, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function IsTypef(t: __goscript_assertions.TestingT | null, expectedType: any, _object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.IsType(t, expectedType, _object, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function JSONEqf(t: __goscript_assertions.TestingT | null, expected: string, actual: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.JSONEq(t, expected, actual, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Lenf(t: __goscript_assertions.TestingT | null, _object: any, length: number, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.Len(t, _object, length, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Lessf(t: __goscript_assertions.TestingT | null, e1: any, e2: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertion_compare.Less(t, e1, e2, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function LessOrEqualf(t: __goscript_assertions.TestingT | null, e1: any, e2: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertion_compare.LessOrEqual(t, e1, e2, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Negativef(t: __goscript_assertions.TestingT | null, e: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertion_compare.Negative(t, e, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Neverf(t: __goscript_assertions.TestingT | null, condition: (() => boolean | globalThis.Promise<boolean>) | null, waitFor: time.Duration, tick: time.Duration, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.Never(t, condition, waitFor, tick, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Nilf(t: __goscript_assertions.TestingT | null, _object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.Nil(t, _object, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function NoDirExistsf(t: __goscript_assertions.TestingT | null, path: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.NoDirExists(t, path, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function NoErrorf(t: __goscript_assertions.TestingT | null, err: $.GoError, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.NoError(t, err, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function NoFileExistsf(t: __goscript_assertions.TestingT | null, path: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.NoFileExists(t, path, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function NotContainsf(t: __goscript_assertions.TestingT | null, s: any, contains: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.NotContains(t, s, contains, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function NotEmptyf(t: __goscript_assertions.TestingT | null, _object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.NotEmpty(t, _object, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function NotEqualf(t: __goscript_assertions.TestingT | null, expected: any, actual: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.NotEqual(t, expected, actual, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function NotEqualValuesf(t: __goscript_assertions.TestingT | null, expected: any, actual: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.NotEqualValues(t, expected, actual, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function NotErrorIsf(t: __goscript_assertions.TestingT | null, err: $.GoError, target: $.GoError, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.NotErrorIs(t, err, target, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function NotImplementsf(t: __goscript_assertions.TestingT | null, interfaceObject: any, _object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.NotImplements(t, interfaceObject, _object, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function NotNilf(t: __goscript_assertions.TestingT | null, _object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.NotNil(t, _object, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function NotPanicsf(t: __goscript_assertions.TestingT | null, f: (() => void) | null, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.NotPanics(t, f, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function NotRegexpf(t: __goscript_assertions.TestingT | null, rx: any, str: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.NotRegexp(t, rx, str, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function NotSamef(t: __goscript_assertions.TestingT | null, expected: any, actual: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.NotSame(t, expected, actual, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function NotSubsetf(t: __goscript_assertions.TestingT | null, list: any, subset: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.NotSubset(t, list, subset, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function NotZerof(t: __goscript_assertions.TestingT | null, i: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.NotZero(t, i, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Panicsf(t: __goscript_assertions.TestingT | null, f: (() => void) | null, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.Panics(t, f, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function PanicsWithErrorf(t: __goscript_assertions.TestingT | null, errString: string, f: (() => void) | null, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.PanicsWithError(t, errString, f, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function PanicsWithValuef(t: __goscript_assertions.TestingT | null, expected: any, f: (() => void) | null, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.PanicsWithValue(t, expected, f, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Positivef(t: __goscript_assertions.TestingT | null, e: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertion_compare.Positive(t, e, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Regexpf(t: __goscript_assertions.TestingT | null, rx: any, str: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.Regexp(t, rx, str, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Samef(t: __goscript_assertions.TestingT | null, expected: any, actual: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.Same(t, expected, actual, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Subsetf(t: __goscript_assertions.TestingT | null, list: any, subset: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.Subset(t, list, subset, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Truef(t: __goscript_assertions.TestingT | null, value: boolean, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.True(t, value, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function WithinDurationf(t: __goscript_assertions.TestingT | null, expected: time.Time, actual: time.Time, delta: time.Duration, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.WithinDuration(t, $.markAsStructValue($.cloneStructValue(expected)), $.markAsStructValue($.cloneStructValue(actual)), delta, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function WithinRangef(t: __goscript_assertions.TestingT | null, actual: time.Time, start: time.Time, end: time.Time, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.WithinRange(t, $.markAsStructValue($.cloneStructValue(actual)), $.markAsStructValue($.cloneStructValue(start)), $.markAsStructValue($.cloneStructValue(end)), $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function YAMLEqf(t: __goscript_assertions.TestingT | null, expected: string, actual: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.YAMLEq(t, expected, actual, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

export async function Zerof(t: __goscript_assertions.TestingT | null, i: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return __goscript_assertions.Zero(t, i, $.appendSlice($.arrayToSlice<any>([msg]), args, $.appendZeros.nil))
}

var __goscriptAwait: any
