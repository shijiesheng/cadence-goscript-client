// Generated file based on assertion_order.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as __goscript_assertion_compare from "./assertion_compare.gs.ts"

import * as __goscript_assertions from "./assertions.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "./assertion_compare.gs.ts"
import "./assertions.gs.ts"

export async function isOrdered(t: __goscript_assertions.TestingT | null, _object: any, allowedComparesResults: $.Slice<__goscript_assertion_compare.CompareType>, failMessage: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	let objKind = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(_object)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if ((objKind != 23) && (objKind != 17)) {
		return false
	}

	let objValue = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(_object)))
	let objLen = $.markAsStructValue($.cloneStructValue(objValue)).Len()

	if (objLen <= 1) {
		return true
	}

	let value = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(objValue)).Index(0)))
	let valueInterface: any = $.markAsStructValue($.cloneStructValue(value)).Interface()
	let firstValueKind = $.markAsStructValue($.cloneStructValue(value)).Kind()

	for (let i = 1; i < objLen; i++) {
		let prevValue = $.markAsStructValue($.cloneStructValue(value))
		let prevValueInterface: any = valueInterface

		value = $.assignStruct(value, $.markAsStructValue($.cloneStructValue(objValue)).Index(i))
		valueInterface = $.markAsStructValue($.cloneStructValue(value)).Interface()

		let [compareResult, isComparable] = __goscript_assertion_compare.compare(prevValueInterface, valueInterface, firstValueKind)

		if (!isComparable) {
			return __goscript_assertions.Fail(t, await fmt.Sprintf("Can not compare type \"%s\" and \"%s\"", (reflect.TypeOf($.interfaceValue($.markAsStructValue($.cloneStructValue(value)), "reflect.Value", "reflect.Value")) as any), (reflect.TypeOf($.interfaceValue($.markAsStructValue($.cloneStructValue(prevValue)), "reflect.Value", "reflect.Value")) as any)), msgAndArgs)
		}

		if (!__goscript_assertion_compare.containsValue(allowedComparesResults, compareResult)) {
			return __goscript_assertions.Fail(t, await fmt.Sprintf(failMessage, $.interfaceValue($.markAsStructValue($.cloneStructValue(prevValue)), "reflect.Value", "reflect.Value"), $.interfaceValue($.markAsStructValue($.cloneStructValue(value)), "reflect.Value", "reflect.Value")), msgAndArgs)
		}
	}

	return true
}

export async function IsIncreasing(t: __goscript_assertions.TestingT | null, _object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	return isOrdered(t, _object, $.arrayToSlice<__goscript_assertion_compare.CompareType>([-1]), "\"%v\" is not less than \"%v\"", msgAndArgs)
}

export async function IsNonIncreasing(t: __goscript_assertions.TestingT | null, _object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	return isOrdered(t, _object, $.arrayToSlice<__goscript_assertion_compare.CompareType>([0, 1]), "\"%v\" is not greater than or equal to \"%v\"", msgAndArgs)
}

export async function IsDecreasing(t: __goscript_assertions.TestingT | null, _object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	return isOrdered(t, _object, $.arrayToSlice<__goscript_assertion_compare.CompareType>([1]), "\"%v\" is not greater than \"%v\"", msgAndArgs)
}

export async function IsNonDecreasing(t: __goscript_assertions.TestingT | null, _object: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	return isOrdered(t, _object, $.arrayToSlice<__goscript_assertion_compare.CompareType>([-1, 0]), "\"%v\" is not less than or equal to \"%v\"", msgAndArgs)
}

var __goscriptAwait: any
