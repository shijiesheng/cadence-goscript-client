// Generated file based on forward_assertions.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as http from "@goscript/net/http/index.js"

import * as url2 from "@goscript/net/url/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_assertion_compare from "./assertion_compare.gs.ts"

import * as __goscript_assertion_format from "./assertion_format.gs.ts"

import * as __goscript_assertion_forward from "./assertion_forward.gs.ts"

import * as __goscript_assertion_order from "./assertion_order.gs.ts"

import * as __goscript_assertions from "./assertions.gs.ts"

import * as __goscript_http_assertions from "./http_assertions.gs.ts"
import "@goscript/net/http/index.js"
import "@goscript/net/url/index.js"
import "@goscript/time/index.js"
import "./assertion_compare.gs.ts"
import "./assertion_format.gs.ts"
import "./assertion_forward.gs.ts"
import "./assertion_order.gs.ts"
import "./assertions.gs.ts"
import "./http_assertions.gs.ts"

$.registerTypePackagePath("github.com/stretchr/testify/assert", ["assert.Assertions"])

export class Assertions {
	public get t(): __goscript_assertions.TestingT | null {
		return this._fields.t
	}

	public set t(value: __goscript_assertions.TestingT | null) {
		this._fields.t = value
	}

	public _fields: {
		t: __goscript_assertions.TestingT | null
	}

	constructor(init?: Partial<{t?: __goscript_assertions.TestingT | null}>, __goscriptValue?: boolean) {
		this._fields = {
			t: init?.t ?? (null! as __goscript_assertions.TestingT | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Assertions {
		return new Assertions(this, true)
	}

	public __goscriptAssign(source: Assertions): void {
		const target = this._fields
		const values = source._fields
		target.t = $.assignFieldValue(target.t, values.t, "assert.TestingT")
	}

	public async Condition(comp: (() => boolean | globalThis.Promise<boolean>) | null, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.Condition((a$ as Assertions).t, comp, msgAndArgs)
	}

	public async Conditionf(comp: (() => boolean | globalThis.Promise<boolean>) | null, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Conditionf((a$ as Assertions).t, comp, msg, args)
	}

	public async Contains(s: any, contains: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.Contains((a$ as Assertions).t, s, contains, msgAndArgs)
	}

	public async Containsf(s: any, contains: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Containsf((a$ as Assertions).t, s, contains, msg, args)
	}

	public async DirExists(path: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.DirExists((a$ as Assertions).t, path, msgAndArgs)
	}

	public async DirExistsf(path: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.DirExistsf((a$ as Assertions).t, path, msg, args)
	}

	public async ElementsMatch(listA: any, listB: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.ElementsMatch((a$ as Assertions).t, listA, listB, msgAndArgs)
	}

	public async ElementsMatchf(listA: any, listB: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.ElementsMatchf((a$ as Assertions).t, listA, listB, msg, args)
	}

	public async Empty(_object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.Empty((a$ as Assertions).t, _object, msgAndArgs)
	}

	public async Emptyf(_object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Emptyf((a$ as Assertions).t, _object, msg, args)
	}

	public async Equal(expected: any, actual: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.Equal((a$ as Assertions).t, expected, actual, msgAndArgs)
	}

	public async EqualError(theError: $.GoError, errString: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.EqualError((a$ as Assertions).t, theError, errString, msgAndArgs)
	}

	public async EqualErrorf(theError: $.GoError, errString: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.EqualErrorf((a$ as Assertions).t, theError, errString, msg, args)
	}

	public async EqualExportedValues(expected: any, actual: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.EqualExportedValues((a$ as Assertions).t, expected, actual, msgAndArgs)
	}

	public async EqualExportedValuesf(expected: any, actual: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.EqualExportedValuesf((a$ as Assertions).t, expected, actual, msg, args)
	}

	public async EqualValues(expected: any, actual: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.EqualValues((a$ as Assertions).t, expected, actual, msgAndArgs)
	}

	public async EqualValuesf(expected: any, actual: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.EqualValuesf((a$ as Assertions).t, expected, actual, msg, args)
	}

	public async Equalf(expected: any, actual: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Equalf((a$ as Assertions).t, expected, actual, msg, args)
	}

	public async Error(err: $.GoError, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.Error((a$ as Assertions).t, err, msgAndArgs)
	}

	public async ErrorAs(err: $.GoError, target: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.ErrorAs((a$ as Assertions).t, err, target, msgAndArgs)
	}

	public async ErrorAsf(err: $.GoError, target: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.ErrorAsf((a$ as Assertions).t, err, target, msg, args)
	}

	public async ErrorContains(theError: $.GoError, contains: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.ErrorContains((a$ as Assertions).t, theError, contains, msgAndArgs)
	}

	public async ErrorContainsf(theError: $.GoError, contains: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.ErrorContainsf((a$ as Assertions).t, theError, contains, msg, args)
	}

	public async ErrorIs(err: $.GoError, target: $.GoError, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.ErrorIs((a$ as Assertions).t, err, target, msgAndArgs)
	}

	public async ErrorIsf(err: $.GoError, target: $.GoError, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.ErrorIsf((a$ as Assertions).t, err, target, msg, args)
	}

	public async Errorf(err: $.GoError, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Errorf((a$ as Assertions).t, err, msg, args)
	}

	public async Eventually(condition: (() => boolean | globalThis.Promise<boolean>) | null, waitFor: time.Duration, tick: time.Duration, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.Eventually((a$ as Assertions).t, condition, waitFor, tick, msgAndArgs)
	}

	public async EventuallyWithT(condition: ((collect: __goscript_assertions.CollectT | $.VarRef<__goscript_assertions.CollectT> | null) => void) | null, waitFor: time.Duration, tick: time.Duration, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.EventuallyWithT((a$ as Assertions).t, condition, waitFor, tick, msgAndArgs)
	}

	public async EventuallyWithTf(condition: ((collect: __goscript_assertions.CollectT | $.VarRef<__goscript_assertions.CollectT> | null) => void) | null, waitFor: time.Duration, tick: time.Duration, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.EventuallyWithTf((a$ as Assertions).t, condition, waitFor, tick, msg, args)
	}

	public async Eventuallyf(condition: (() => boolean | globalThis.Promise<boolean>) | null, waitFor: time.Duration, tick: time.Duration, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Eventuallyf((a$ as Assertions).t, condition, waitFor, tick, msg, args)
	}

	public async Exactly(expected: any, actual: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.Exactly((a$ as Assertions).t, expected, actual, msgAndArgs)
	}

	public async Exactlyf(expected: any, actual: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Exactlyf((a$ as Assertions).t, expected, actual, msg, args)
	}

	public async Fail(failureMessage: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.Fail((a$ as Assertions).t, failureMessage, msgAndArgs)
	}

	public async FailNow(failureMessage: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.FailNow((a$ as Assertions).t, failureMessage, msgAndArgs)
	}

	public async FailNowf(failureMessage: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.FailNowf((a$ as Assertions).t, failureMessage, msg, args)
	}

	public async Failf(failureMessage: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Failf((a$ as Assertions).t, failureMessage, msg, args)
	}

	public async False(value: boolean, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.False((a$ as Assertions).t, value, msgAndArgs)
	}

	public async Falsef(value: boolean, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Falsef((a$ as Assertions).t, value, msg, args)
	}

	public async FileExists(path: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.FileExists((a$ as Assertions).t, path, msgAndArgs)
	}

	public async FileExistsf(path: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.FileExistsf((a$ as Assertions).t, path, msg, args)
	}

	public async Greater(e1: any, e2: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_compare.Greater((a$ as Assertions).t, e1, e2, msgAndArgs)
	}

	public async GreaterOrEqual(e1: any, e2: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_compare.GreaterOrEqual((a$ as Assertions).t, e1, e2, msgAndArgs)
	}

	public async GreaterOrEqualf(e1: any, e2: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.GreaterOrEqualf((a$ as Assertions).t, e1, e2, msg, args)
	}

	public async Greaterf(e1: any, e2: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Greaterf((a$ as Assertions).t, e1, e2, msg, args)
	}

	public async HTTPBodyContains(handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, str: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_http_assertions.HTTPBodyContains((a$ as Assertions).t, handler, method, url, values, str, msgAndArgs)
	}

	public async HTTPBodyContainsf(handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, str: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.HTTPBodyContainsf((a$ as Assertions).t, handler, method, url, values, str, msg, args)
	}

	public async HTTPBodyNotContains(handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, str: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_http_assertions.HTTPBodyNotContains((a$ as Assertions).t, handler, method, url, values, str, msgAndArgs)
	}

	public async HTTPBodyNotContainsf(handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, str: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.HTTPBodyNotContainsf((a$ as Assertions).t, handler, method, url, values, str, msg, args)
	}

	public async HTTPError(handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_http_assertions.HTTPError((a$ as Assertions).t, handler, method, url, values, msgAndArgs)
	}

	public async HTTPErrorf(handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.HTTPErrorf((a$ as Assertions).t, handler, method, url, values, msg, args)
	}

	public async HTTPRedirect(handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_http_assertions.HTTPRedirect((a$ as Assertions).t, handler, method, url, values, msgAndArgs)
	}

	public async HTTPRedirectf(handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.HTTPRedirectf((a$ as Assertions).t, handler, method, url, values, msg, args)
	}

	public async HTTPStatusCode(handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, statuscode: number, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_http_assertions.HTTPStatusCode((a$ as Assertions).t, handler, method, url, values, statuscode, msgAndArgs)
	}

	public async HTTPStatusCodef(handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, statuscode: number, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.HTTPStatusCodef((a$ as Assertions).t, handler, method, url, values, statuscode, msg, args)
	}

	public async HTTPSuccess(handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_http_assertions.HTTPSuccess((a$ as Assertions).t, handler, method, url, values, msgAndArgs)
	}

	public async HTTPSuccessf(handler: ((_p0: http.ResponseWriter | null, _p1: http.Request | $.VarRef<http.Request> | null) => void) | null, method: string, url: string, values: url2.Values, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.HTTPSuccessf((a$ as Assertions).t, handler, method, url, values, msg, args)
	}

	public async Implements(interfaceObject: any, _object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.Implements((a$ as Assertions).t, interfaceObject, _object, msgAndArgs)
	}

	public async Implementsf(interfaceObject: any, _object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Implementsf((a$ as Assertions).t, interfaceObject, _object, msg, args)
	}

	public async InDelta(expected: any, actual: any, delta: number, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.InDelta((a$ as Assertions).t, expected, actual, delta, msgAndArgs)
	}

	public async InDeltaMapValues(expected: any, actual: any, delta: number, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.InDeltaMapValues((a$ as Assertions).t, expected, actual, delta, msgAndArgs)
	}

	public async InDeltaMapValuesf(expected: any, actual: any, delta: number, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.InDeltaMapValuesf((a$ as Assertions).t, expected, actual, delta, msg, args)
	}

	public async InDeltaSlice(expected: any, actual: any, delta: number, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.InDeltaSlice((a$ as Assertions).t, expected, actual, delta, msgAndArgs)
	}

	public async InDeltaSlicef(expected: any, actual: any, delta: number, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.InDeltaSlicef((a$ as Assertions).t, expected, actual, delta, msg, args)
	}

	public async InDeltaf(expected: any, actual: any, delta: number, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.InDeltaf((a$ as Assertions).t, expected, actual, delta, msg, args)
	}

	public async InEpsilon(expected: any, actual: any, epsilon: number, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.InEpsilon((a$ as Assertions).t, expected, actual, epsilon, msgAndArgs)
	}

	public async InEpsilonSlice(expected: any, actual: any, epsilon: number, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.InEpsilonSlice((a$ as Assertions).t, expected, actual, epsilon, msgAndArgs)
	}

	public async InEpsilonSlicef(expected: any, actual: any, epsilon: number, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.InEpsilonSlicef((a$ as Assertions).t, expected, actual, epsilon, msg, args)
	}

	public async InEpsilonf(expected: any, actual: any, epsilon: number, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.InEpsilonf((a$ as Assertions).t, expected, actual, epsilon, msg, args)
	}

	public async IsDecreasing(_object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_order.IsDecreasing((a$ as Assertions).t, _object, msgAndArgs)
	}

	public async IsDecreasingf(_object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.IsDecreasingf((a$ as Assertions).t, _object, msg, args)
	}

	public async IsIncreasing(_object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_order.IsIncreasing((a$ as Assertions).t, _object, msgAndArgs)
	}

	public async IsIncreasingf(_object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.IsIncreasingf((a$ as Assertions).t, _object, msg, args)
	}

	public async IsNonDecreasing(_object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_order.IsNonDecreasing((a$ as Assertions).t, _object, msgAndArgs)
	}

	public async IsNonDecreasingf(_object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.IsNonDecreasingf((a$ as Assertions).t, _object, msg, args)
	}

	public async IsNonIncreasing(_object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_order.IsNonIncreasing((a$ as Assertions).t, _object, msgAndArgs)
	}

	public async IsNonIncreasingf(_object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.IsNonIncreasingf((a$ as Assertions).t, _object, msg, args)
	}

	public async IsType(expectedType: any, _object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.IsType((a$ as Assertions).t, expectedType, _object, msgAndArgs)
	}

	public async IsTypef(expectedType: any, _object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.IsTypef((a$ as Assertions).t, expectedType, _object, msg, args)
	}

	public async JSONEq(expected: string, actual: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.JSONEq((a$ as Assertions).t, expected, actual, msgAndArgs)
	}

	public async JSONEqf(expected: string, actual: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.JSONEqf((a$ as Assertions).t, expected, actual, msg, args)
	}

	public async Len(_object: any, length: number, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.Len((a$ as Assertions).t, _object, length, msgAndArgs)
	}

	public async Lenf(_object: any, length: number, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Lenf((a$ as Assertions).t, _object, length, msg, args)
	}

	public async Less(e1: any, e2: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_compare.Less((a$ as Assertions).t, e1, e2, msgAndArgs)
	}

	public async LessOrEqual(e1: any, e2: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_compare.LessOrEqual((a$ as Assertions).t, e1, e2, msgAndArgs)
	}

	public async LessOrEqualf(e1: any, e2: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.LessOrEqualf((a$ as Assertions).t, e1, e2, msg, args)
	}

	public async Lessf(e1: any, e2: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Lessf((a$ as Assertions).t, e1, e2, msg, args)
	}

	public async Negative(e: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_compare.Negative((a$ as Assertions).t, e, msgAndArgs)
	}

	public async Negativef(e: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Negativef((a$ as Assertions).t, e, msg, args)
	}

	public async Never(condition: (() => boolean | globalThis.Promise<boolean>) | null, waitFor: time.Duration, tick: time.Duration, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.Never((a$ as Assertions).t, condition, waitFor, tick, msgAndArgs)
	}

	public async Neverf(condition: (() => boolean | globalThis.Promise<boolean>) | null, waitFor: time.Duration, tick: time.Duration, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Neverf((a$ as Assertions).t, condition, waitFor, tick, msg, args)
	}

	public async Nil(_object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.Nil((a$ as Assertions).t, _object, msgAndArgs)
	}

	public async Nilf(_object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Nilf((a$ as Assertions).t, _object, msg, args)
	}

	public async NoDirExists(path: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.NoDirExists((a$ as Assertions).t, path, msgAndArgs)
	}

	public async NoDirExistsf(path: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.NoDirExistsf((a$ as Assertions).t, path, msg, args)
	}

	public async NoError(err: $.GoError, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.NoError((a$ as Assertions).t, err, msgAndArgs)
	}

	public async NoErrorf(err: $.GoError, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.NoErrorf((a$ as Assertions).t, err, msg, args)
	}

	public async NoFileExists(path: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.NoFileExists((a$ as Assertions).t, path, msgAndArgs)
	}

	public async NoFileExistsf(path: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.NoFileExistsf((a$ as Assertions).t, path, msg, args)
	}

	public async NotContains(s: any, contains: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.NotContains((a$ as Assertions).t, s, contains, msgAndArgs)
	}

	public async NotContainsf(s: any, contains: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.NotContainsf((a$ as Assertions).t, s, contains, msg, args)
	}

	public async NotEmpty(_object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.NotEmpty((a$ as Assertions).t, _object, msgAndArgs)
	}

	public async NotEmptyf(_object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.NotEmptyf((a$ as Assertions).t, _object, msg, args)
	}

	public async NotEqual(expected: any, actual: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.NotEqual((a$ as Assertions).t, expected, actual, msgAndArgs)
	}

	public async NotEqualValues(expected: any, actual: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.NotEqualValues((a$ as Assertions).t, expected, actual, msgAndArgs)
	}

	public async NotEqualValuesf(expected: any, actual: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.NotEqualValuesf((a$ as Assertions).t, expected, actual, msg, args)
	}

	public async NotEqualf(expected: any, actual: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.NotEqualf((a$ as Assertions).t, expected, actual, msg, args)
	}

	public async NotErrorIs(err: $.GoError, target: $.GoError, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.NotErrorIs((a$ as Assertions).t, err, target, msgAndArgs)
	}

	public async NotErrorIsf(err: $.GoError, target: $.GoError, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.NotErrorIsf((a$ as Assertions).t, err, target, msg, args)
	}

	public async NotImplements(interfaceObject: any, _object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.NotImplements((a$ as Assertions).t, interfaceObject, _object, msgAndArgs)
	}

	public async NotImplementsf(interfaceObject: any, _object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.NotImplementsf((a$ as Assertions).t, interfaceObject, _object, msg, args)
	}

	public async NotNil(_object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.NotNil((a$ as Assertions).t, _object, msgAndArgs)
	}

	public async NotNilf(_object: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.NotNilf((a$ as Assertions).t, _object, msg, args)
	}

	public async NotPanics(f: (() => void) | null, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.NotPanics((a$ as Assertions).t, f, msgAndArgs)
	}

	public async NotPanicsf(f: (() => void) | null, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.NotPanicsf((a$ as Assertions).t, f, msg, args)
	}

	public async NotRegexp(rx: any, str: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.NotRegexp((a$ as Assertions).t, rx, str, msgAndArgs)
	}

	public async NotRegexpf(rx: any, str: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.NotRegexpf((a$ as Assertions).t, rx, str, msg, args)
	}

	public async NotSame(expected: any, actual: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.NotSame((a$ as Assertions).t, expected, actual, msgAndArgs)
	}

	public async NotSamef(expected: any, actual: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.NotSamef((a$ as Assertions).t, expected, actual, msg, args)
	}

	public async NotSubset(list: any, subset: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.NotSubset((a$ as Assertions).t, list, subset, msgAndArgs)
	}

	public async NotSubsetf(list: any, subset: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.NotSubsetf((a$ as Assertions).t, list, subset, msg, args)
	}

	public async NotZero(i: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.NotZero((a$ as Assertions).t, i, msgAndArgs)
	}

	public async NotZerof(i: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.NotZerof((a$ as Assertions).t, i, msg, args)
	}

	public async Panics(f: (() => void) | null, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.Panics((a$ as Assertions).t, f, msgAndArgs)
	}

	public async PanicsWithError(errString: string, f: (() => void) | null, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.PanicsWithError((a$ as Assertions).t, errString, f, msgAndArgs)
	}

	public async PanicsWithErrorf(errString: string, f: (() => void) | null, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.PanicsWithErrorf((a$ as Assertions).t, errString, f, msg, args)
	}

	public async PanicsWithValue(expected: any, f: (() => void) | null, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.PanicsWithValue((a$ as Assertions).t, expected, f, msgAndArgs)
	}

	public async PanicsWithValuef(expected: any, f: (() => void) | null, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.PanicsWithValuef((a$ as Assertions).t, expected, f, msg, args)
	}

	public async Panicsf(f: (() => void) | null, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Panicsf((a$ as Assertions).t, f, msg, args)
	}

	public async Positive(e: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_compare.Positive((a$ as Assertions).t, e, msgAndArgs)
	}

	public async Positivef(e: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Positivef((a$ as Assertions).t, e, msg, args)
	}

	public async Regexp(rx: any, str: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.Regexp((a$ as Assertions).t, rx, str, msgAndArgs)
	}

	public async Regexpf(rx: any, str: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Regexpf((a$ as Assertions).t, rx, str, msg, args)
	}

	public async Same(expected: any, actual: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.Same((a$ as Assertions).t, expected, actual, msgAndArgs)
	}

	public async Samef(expected: any, actual: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Samef((a$ as Assertions).t, expected, actual, msg, args)
	}

	public async Subset(list: any, subset: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.Subset((a$ as Assertions).t, list, subset, msgAndArgs)
	}

	public async Subsetf(list: any, subset: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Subsetf((a$ as Assertions).t, list, subset, msg, args)
	}

	public async True(value: boolean, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.True((a$ as Assertions).t, value, msgAndArgs)
	}

	public async Truef(value: boolean, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Truef((a$ as Assertions).t, value, msg, args)
	}

	public async WithinDuration(expected: time.Time, actual: time.Time, delta: time.Duration, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.WithinDuration((a$ as Assertions).t, $.markAsStructValue($.cloneStructValue(expected)), $.markAsStructValue($.cloneStructValue(actual)), delta, msgAndArgs)
	}

	public async WithinDurationf(expected: time.Time, actual: time.Time, delta: time.Duration, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.WithinDurationf((a$ as Assertions).t, $.markAsStructValue($.cloneStructValue(expected)), $.markAsStructValue($.cloneStructValue(actual)), delta, msg, args)
	}

	public async WithinRange(actual: time.Time, start: time.Time, end: time.Time, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.WithinRange((a$ as Assertions).t, $.markAsStructValue($.cloneStructValue(actual)), $.markAsStructValue($.cloneStructValue(start)), $.markAsStructValue($.cloneStructValue(end)), msgAndArgs)
	}

	public async WithinRangef(actual: time.Time, start: time.Time, end: time.Time, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.WithinRangef((a$ as Assertions).t, $.markAsStructValue($.cloneStructValue(actual)), $.markAsStructValue($.cloneStructValue(start)), $.markAsStructValue($.cloneStructValue(end)), msg, args)
	}

	public async YAMLEq(expected: string, actual: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.YAMLEq((a$ as Assertions).t, expected, actual, msgAndArgs)
	}

	public async YAMLEqf(expected: string, actual: string, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.YAMLEqf((a$ as Assertions).t, expected, actual, msg, args)
	}

	public async Zero(i: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertions.Zero((a$ as Assertions).t, i, msgAndArgs)
	}

	public async Zerof(i: any, msg: string, args: $.Slice<any>): globalThis.Promise<boolean> {
		const a: Assertions | $.VarRef<Assertions> | null = this;
		const a$: Assertions = a == null ? $.pointerTarget<Assertions>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<Assertions>(a)
		{
			let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>((a$ as Assertions).t, "assert.tHelper")
			if (ok) {
				void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return __goscript_assertion_format.Zerof((a$ as Assertions).t, i, msg, args)
	}

	static __typeInfo = $.registerStructType(
		"assert.Assertions",
		() => new Assertions(),
		() => [$.methodSignature("Condition", [["comp", ({ kind: $.TypeKind.Function, name: "assert.Comparison", params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Conditionf", [["comp", ({ kind: $.TypeKind.Function, name: "assert.Comparison", params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Contains", [["s", { kind: $.TypeKind.Interface, methods: [] }], ["contains", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Containsf", [["s", { kind: $.TypeKind.Interface, methods: [] }], ["contains", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("DirExists", [["path", /* @__PURE__ */ $.basicType("string")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("DirExistsf", [["path", /* @__PURE__ */ $.basicType("string")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ElementsMatch", [["listA", { kind: $.TypeKind.Interface, methods: [] }], ["listB", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ElementsMatchf", [["listA", { kind: $.TypeKind.Interface, methods: [] }], ["listB", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Empty", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Emptyf", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Equal", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("EqualError", [["theError", "error"], ["errString", /* @__PURE__ */ $.basicType("string")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("EqualErrorf", [["theError", "error"], ["errString", /* @__PURE__ */ $.basicType("string")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("EqualExportedValues", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("EqualExportedValuesf", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("EqualValues", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("EqualValuesf", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Equalf", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Error", [["err", "error"], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ErrorAs", [["err", "error"], ["target", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ErrorAsf", [["err", "error"], ["target", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ErrorContains", [["theError", "error"], ["contains", /* @__PURE__ */ $.basicType("string")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ErrorContainsf", [["theError", "error"], ["contains", /* @__PURE__ */ $.basicType("string")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ErrorIs", [["err", "error"], ["target", "error"], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("ErrorIsf", [["err", "error"], ["target", "error"], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Errorf", [["err", "error"], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Eventually", [["condition", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], ["waitFor", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["tick", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("EventuallyWithT", [["condition", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("assert.CollectT")], results: [] } as $.FunctionTypeInfo)], ["waitFor", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["tick", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("EventuallyWithTf", [["condition", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("assert.CollectT")], results: [] } as $.FunctionTypeInfo)], ["waitFor", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["tick", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Eventuallyf", [["condition", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], ["waitFor", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["tick", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Exactly", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Exactlyf", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Fail", [["failureMessage", /* @__PURE__ */ $.basicType("string")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("FailNow", [["failureMessage", /* @__PURE__ */ $.basicType("string")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("FailNowf", [["failureMessage", /* @__PURE__ */ $.basicType("string")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Failf", [["failureMessage", /* @__PURE__ */ $.basicType("string")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("False", [["value", /* @__PURE__ */ $.basicType("bool")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Falsef", [["value", /* @__PURE__ */ $.basicType("bool")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("FileExists", [["path", /* @__PURE__ */ $.basicType("string")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("FileExistsf", [["path", /* @__PURE__ */ $.basicType("string")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Greater", [["e1", { kind: $.TypeKind.Interface, methods: [] }], ["e2", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GreaterOrEqual", [["e1", { kind: $.TypeKind.Interface, methods: [] }], ["e2", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GreaterOrEqualf", [["e1", { kind: $.TypeKind.Interface, methods: [] }], ["e2", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Greaterf", [["e1", { kind: $.TypeKind.Interface, methods: [] }], ["e2", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HTTPBodyContains", [["handler", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)], ["method", /* @__PURE__ */ $.basicType("string")], ["url", /* @__PURE__ */ $.basicType("string")], ["values", "url.Values"], ["str", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HTTPBodyContainsf", [["handler", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)], ["method", /* @__PURE__ */ $.basicType("string")], ["url", /* @__PURE__ */ $.basicType("string")], ["values", "url.Values"], ["str", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HTTPBodyNotContains", [["handler", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)], ["method", /* @__PURE__ */ $.basicType("string")], ["url", /* @__PURE__ */ $.basicType("string")], ["values", "url.Values"], ["str", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HTTPBodyNotContainsf", [["handler", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)], ["method", /* @__PURE__ */ $.basicType("string")], ["url", /* @__PURE__ */ $.basicType("string")], ["values", "url.Values"], ["str", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HTTPError", [["handler", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)], ["method", /* @__PURE__ */ $.basicType("string")], ["url", /* @__PURE__ */ $.basicType("string")], ["values", "url.Values"], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HTTPErrorf", [["handler", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)], ["method", /* @__PURE__ */ $.basicType("string")], ["url", /* @__PURE__ */ $.basicType("string")], ["values", "url.Values"], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HTTPRedirect", [["handler", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)], ["method", /* @__PURE__ */ $.basicType("string")], ["url", /* @__PURE__ */ $.basicType("string")], ["values", "url.Values"], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HTTPRedirectf", [["handler", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)], ["method", /* @__PURE__ */ $.basicType("string")], ["url", /* @__PURE__ */ $.basicType("string")], ["values", "url.Values"], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HTTPStatusCode", [["handler", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)], ["method", /* @__PURE__ */ $.basicType("string")], ["url", /* @__PURE__ */ $.basicType("string")], ["values", "url.Values"], ["statuscode", /* @__PURE__ */ $.basicType("int")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HTTPStatusCodef", [["handler", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)], ["method", /* @__PURE__ */ $.basicType("string")], ["url", /* @__PURE__ */ $.basicType("string")], ["values", "url.Values"], ["statuscode", /* @__PURE__ */ $.basicType("int")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HTTPSuccess", [["handler", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)], ["method", /* @__PURE__ */ $.basicType("string")], ["url", /* @__PURE__ */ $.basicType("string")], ["values", "url.Values"], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("HTTPSuccessf", [["handler", ({ kind: $.TypeKind.Function, name: "http.HandlerFunc", params: ["http.ResponseWriter", /* @__PURE__ */ $.pointerType("http.Request")], results: [] } as $.FunctionTypeInfo)], ["method", /* @__PURE__ */ $.basicType("string")], ["url", /* @__PURE__ */ $.basicType("string")], ["values", "url.Values"], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Implements", [["interfaceObject", { kind: $.TypeKind.Interface, methods: [] }], ["object", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Implementsf", [["interfaceObject", { kind: $.TypeKind.Interface, methods: [] }], ["object", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("InDelta", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["delta", /* @__PURE__ */ $.basicType("float64")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("InDeltaMapValues", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["delta", /* @__PURE__ */ $.basicType("float64")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("InDeltaMapValuesf", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["delta", /* @__PURE__ */ $.basicType("float64")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("InDeltaSlice", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["delta", /* @__PURE__ */ $.basicType("float64")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("InDeltaSlicef", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["delta", /* @__PURE__ */ $.basicType("float64")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("InDeltaf", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["delta", /* @__PURE__ */ $.basicType("float64")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("InEpsilon", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["epsilon", /* @__PURE__ */ $.basicType("float64")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("InEpsilonSlice", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["epsilon", /* @__PURE__ */ $.basicType("float64")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("InEpsilonSlicef", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["epsilon", /* @__PURE__ */ $.basicType("float64")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("InEpsilonf", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["epsilon", /* @__PURE__ */ $.basicType("float64")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsDecreasing", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsDecreasingf", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsIncreasing", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsIncreasingf", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsNonDecreasing", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsNonDecreasingf", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsNonIncreasing", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsNonIncreasingf", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsType", [["expectedType", { kind: $.TypeKind.Interface, methods: [] }], ["object", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsTypef", [["expectedType", { kind: $.TypeKind.Interface, methods: [] }], ["object", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("JSONEq", [["expected", /* @__PURE__ */ $.basicType("string")], ["actual", /* @__PURE__ */ $.basicType("string")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("JSONEqf", [["expected", /* @__PURE__ */ $.basicType("string")], ["actual", /* @__PURE__ */ $.basicType("string")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Len", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["length", /* @__PURE__ */ $.basicType("int")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Lenf", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["length", /* @__PURE__ */ $.basicType("int")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Less", [["e1", { kind: $.TypeKind.Interface, methods: [] }], ["e2", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("LessOrEqual", [["e1", { kind: $.TypeKind.Interface, methods: [] }], ["e2", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("LessOrEqualf", [["e1", { kind: $.TypeKind.Interface, methods: [] }], ["e2", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Lessf", [["e1", { kind: $.TypeKind.Interface, methods: [] }], ["e2", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Negative", [["e", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Negativef", [["e", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Never", [["condition", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], ["waitFor", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["tick", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Neverf", [["condition", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], ["waitFor", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["tick", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Nil", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Nilf", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NoDirExists", [["path", /* @__PURE__ */ $.basicType("string")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NoDirExistsf", [["path", /* @__PURE__ */ $.basicType("string")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NoError", [["err", "error"], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NoErrorf", [["err", "error"], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NoFileExists", [["path", /* @__PURE__ */ $.basicType("string")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NoFileExistsf", [["path", /* @__PURE__ */ $.basicType("string")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotContains", [["s", { kind: $.TypeKind.Interface, methods: [] }], ["contains", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotContainsf", [["s", { kind: $.TypeKind.Interface, methods: [] }], ["contains", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotEmpty", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotEmptyf", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotEqual", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotEqualValues", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotEqualValuesf", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotEqualf", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotErrorIs", [["err", "error"], ["target", "error"], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotErrorIsf", [["err", "error"], ["target", "error"], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotImplements", [["interfaceObject", { kind: $.TypeKind.Interface, methods: [] }], ["object", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotImplementsf", [["interfaceObject", { kind: $.TypeKind.Interface, methods: [] }], ["object", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotNil", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotNilf", [["object", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotPanics", [["f", ({ kind: $.TypeKind.Function, name: "assert.PanicTestFunc", params: [], results: [] } as $.FunctionTypeInfo)], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotPanicsf", [["f", ({ kind: $.TypeKind.Function, name: "assert.PanicTestFunc", params: [], results: [] } as $.FunctionTypeInfo)], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotRegexp", [["rx", { kind: $.TypeKind.Interface, methods: [] }], ["str", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotRegexpf", [["rx", { kind: $.TypeKind.Interface, methods: [] }], ["str", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotSame", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotSamef", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotSubset", [["list", { kind: $.TypeKind.Interface, methods: [] }], ["subset", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotSubsetf", [["list", { kind: $.TypeKind.Interface, methods: [] }], ["subset", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotZero", [["i", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NotZerof", [["i", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Panics", [["f", ({ kind: $.TypeKind.Function, name: "assert.PanicTestFunc", params: [], results: [] } as $.FunctionTypeInfo)], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("PanicsWithError", [["errString", /* @__PURE__ */ $.basicType("string")], ["f", ({ kind: $.TypeKind.Function, name: "assert.PanicTestFunc", params: [], results: [] } as $.FunctionTypeInfo)], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("PanicsWithErrorf", [["errString", /* @__PURE__ */ $.basicType("string")], ["f", ({ kind: $.TypeKind.Function, name: "assert.PanicTestFunc", params: [], results: [] } as $.FunctionTypeInfo)], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("PanicsWithValue", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["f", ({ kind: $.TypeKind.Function, name: "assert.PanicTestFunc", params: [], results: [] } as $.FunctionTypeInfo)], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("PanicsWithValuef", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["f", ({ kind: $.TypeKind.Function, name: "assert.PanicTestFunc", params: [], results: [] } as $.FunctionTypeInfo)], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Panicsf", [["f", ({ kind: $.TypeKind.Function, name: "assert.PanicTestFunc", params: [], results: [] } as $.FunctionTypeInfo)], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Positive", [["e", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Positivef", [["e", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Regexp", [["rx", { kind: $.TypeKind.Interface, methods: [] }], ["str", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Regexpf", [["rx", { kind: $.TypeKind.Interface, methods: [] }], ["str", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Same", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Samef", [["expected", { kind: $.TypeKind.Interface, methods: [] }], ["actual", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Subset", [["list", { kind: $.TypeKind.Interface, methods: [] }], ["subset", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Subsetf", [["list", { kind: $.TypeKind.Interface, methods: [] }], ["subset", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("True", [["value", /* @__PURE__ */ $.basicType("bool")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Truef", [["value", /* @__PURE__ */ $.basicType("bool")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("WithinDuration", [["expected", "time.Time"], ["actual", "time.Time"], ["delta", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("WithinDurationf", [["expected", "time.Time"], ["actual", "time.Time"], ["delta", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("WithinRange", [["actual", "time.Time"], ["start", "time.Time"], ["end", "time.Time"], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("WithinRangef", [["actual", "time.Time"], ["start", "time.Time"], ["end", "time.Time"], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("YAMLEq", [["expected", /* @__PURE__ */ $.basicType("string")], ["actual", /* @__PURE__ */ $.basicType("string")], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("YAMLEqf", [["expected", /* @__PURE__ */ $.basicType("string")], ["actual", /* @__PURE__ */ $.basicType("string")], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Zero", [["i", { kind: $.TypeKind.Interface, methods: [] }], ["msgAndArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Zerof", [["i", { kind: $.TypeKind.Interface, methods: [] }], ["msg", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true)],
		Assertions,
		() => [/* @__PURE__ */ $.structField("t", "assert.TestingT", [0], 0, false, { pkgPath: "github.com/stretchr/testify/assert" })]
	)
}

export function New(t: __goscript_assertions.TestingT | null): Assertions | $.VarRef<Assertions> | null {
	return new Assertions({t: t})
}

var __goscriptAwait: any
