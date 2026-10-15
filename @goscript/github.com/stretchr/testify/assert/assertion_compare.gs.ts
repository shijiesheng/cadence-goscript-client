// Generated file based on assertion_compare.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_assertions from "./assertions.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/time/index.js"
import "./assertions.gs.ts"

$.registerTypePackagePath("github.com/stretchr/testify/assert", ["assert.CompareType"])

export type CompareType = number

export const compareLess: CompareType = -1

export const compareEqual: CompareType = 0

export const compareGreater: CompareType = 1

export let intType: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue($.int(1), "int"))

export function __goscript_set_intType(__goscriptValue: reflect.Type | null): void {
	intType = __goscriptValue
}

export let int8Type: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue($.int(1, 8), "int8"))

export function __goscript_set_int8Type(__goscriptValue: reflect.Type | null): void {
	int8Type = __goscriptValue
}

export let int16Type: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue($.int(1, 16), "int16"))

export function __goscript_set_int16Type(__goscriptValue: reflect.Type | null): void {
	int16Type = __goscriptValue
}

export let int32Type: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue($.int(1, 32), "int32"))

export function __goscript_set_int32Type(__goscriptValue: reflect.Type | null): void {
	int32Type = __goscriptValue
}

export let int64Type: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue(1n, "int64"))

export function __goscript_set_int64Type(__goscriptValue: reflect.Type | null): void {
	int64Type = __goscriptValue
}

export let uintType: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue($.uint(1, 64), "uint"))

export function __goscript_set_uintType(__goscriptValue: reflect.Type | null): void {
	uintType = __goscriptValue
}

export let uint8Type: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue($.uint(1, 8), "uint8"))

export function __goscript_set_uint8Type(__goscriptValue: reflect.Type | null): void {
	uint8Type = __goscriptValue
}

export let uint16Type: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue($.uint(1, 16), "uint16"))

export function __goscript_set_uint16Type(__goscriptValue: reflect.Type | null): void {
	uint16Type = __goscriptValue
}

export let uint32Type: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue($.uint(1, 32), "uint32"))

export function __goscript_set_uint32Type(__goscriptValue: reflect.Type | null): void {
	uint32Type = __goscriptValue
}

export let uint64Type: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue(1n, "uint64"))

export function __goscript_set_uint64Type(__goscriptValue: reflect.Type | null): void {
	uint64Type = __goscriptValue
}

export let uintptrType: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue(1, "uintptr"))

export function __goscript_set_uintptrType(__goscriptValue: reflect.Type | null): void {
	uintptrType = __goscriptValue
}

export let float32Type: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue(1, "float32"))

export function __goscript_set_float32Type(__goscriptValue: reflect.Type | null): void {
	float32Type = __goscriptValue
}

export let float64Type: reflect.Type | null = reflect.TypeOf($.basicInterfaceValue(1, "float64"))

export function __goscript_set_float64Type(__goscriptValue: reflect.Type | null): void {
	float64Type = __goscriptValue
}

export let stringType: reflect.Type | null = reflect.TypeOf("")

export function __goscript_set_stringType(__goscriptValue: reflect.Type | null): void {
	stringType = __goscriptValue
}

export let timeType: reflect.Type | null = reflect.TypeOf($.interfaceValue($.markAsStructValue(new time.Time()), "time.Time", "time.Time"))

export function __goscript_set_timeType(__goscriptValue: reflect.Type | null): void {
	timeType = __goscriptValue
}

export let bytesType: reflect.Type | null = reflect.TypeOf($.interfaceValue(new Uint8Array([]) as $.Slice<number>, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))

export function __goscript_set_bytesType(__goscriptValue: reflect.Type | null): void {
	bytesType = __goscriptValue
}

export function compare(obj1: any, obj2: any, kind: reflect.Kind): [CompareType, boolean] {
	let obj1Value = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(obj1)))
	let obj2Value = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(obj2)))

	// throughout this switch we try and avoid calling .Convert() if possible,
	// as this has a pretty big performance impact
	switch (kind) {
		case reflect.Int:
		{
			{
				let [intobj1, ok] = $.typeAssertTuple<number>(obj1, /* @__PURE__ */ $.basicType("int"))
				if (!ok) {
					intobj1 = $.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj1Value)).Convert($.pointerValueOrNil(intType)!))).Interface(), /* @__PURE__ */ $.basicType("int"))
				}
				let __goscriptTuple0: any = $.typeAssertTuple<number>(obj2, /* @__PURE__ */ $.basicType("int"))
				let intobj2 = __goscriptTuple0[0]
				ok = __goscriptTuple0[1]
				if (!ok) {
					intobj2 = $.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj2Value)).Convert($.pointerValueOrNil(intType)!))).Interface(), /* @__PURE__ */ $.basicType("int"))
				}
				if (intobj1 > intobj2) {
					return [1, true]
				}
				if (intobj1 == intobj2) {
					return [0, true]
				}
				if (intobj1 < intobj2) {
					return [-1, true]
				}
			}
			break
		}
		case reflect.Int8:
		{
			{
				let [int8obj1, ok] = $.typeAssertTuple<number>(obj1, /* @__PURE__ */ $.basicType("int8"))
				if (!ok) {
					int8obj1 = $.int($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj1Value)).Convert($.pointerValueOrNil(int8Type)!))).Interface(), /* @__PURE__ */ $.basicType("int8")), 8)
				}
				let __goscriptTuple1: any = $.typeAssertTuple<number>(obj2, /* @__PURE__ */ $.basicType("int8"))
				let int8obj2 = __goscriptTuple1[0]
				ok = __goscriptTuple1[1]
				if (!ok) {
					int8obj2 = $.int($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj2Value)).Convert($.pointerValueOrNil(int8Type)!))).Interface(), /* @__PURE__ */ $.basicType("int8")), 8)
				}
				if (int8obj1 > int8obj2) {
					return [1, true]
				}
				if (int8obj1 == int8obj2) {
					return [0, true]
				}
				if (int8obj1 < int8obj2) {
					return [-1, true]
				}
			}
			break
		}
		case reflect.Int16:
		{
			{
				let [int16obj1, ok] = $.typeAssertTuple<number>(obj1, /* @__PURE__ */ $.basicType("int16"))
				if (!ok) {
					int16obj1 = $.int($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj1Value)).Convert($.pointerValueOrNil(int16Type)!))).Interface(), /* @__PURE__ */ $.basicType("int16")), 16)
				}
				let __goscriptTuple2: any = $.typeAssertTuple<number>(obj2, /* @__PURE__ */ $.basicType("int16"))
				let int16obj2 = __goscriptTuple2[0]
				ok = __goscriptTuple2[1]
				if (!ok) {
					int16obj2 = $.int($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj2Value)).Convert($.pointerValueOrNil(int16Type)!))).Interface(), /* @__PURE__ */ $.basicType("int16")), 16)
				}
				if (int16obj1 > int16obj2) {
					return [1, true]
				}
				if (int16obj1 == int16obj2) {
					return [0, true]
				}
				if (int16obj1 < int16obj2) {
					return [-1, true]
				}
			}
			break
		}
		case reflect.Int32:
		{
			{
				let [int32obj1, ok] = $.typeAssertTuple<number>(obj1, /* @__PURE__ */ $.basicType("int32"))
				if (!ok) {
					int32obj1 = $.int($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj1Value)).Convert($.pointerValueOrNil(int32Type)!))).Interface(), /* @__PURE__ */ $.basicType("int32")), 32)
				}
				let __goscriptTuple3: any = $.typeAssertTuple<number>(obj2, /* @__PURE__ */ $.basicType("int32"))
				let int32obj2 = __goscriptTuple3[0]
				ok = __goscriptTuple3[1]
				if (!ok) {
					int32obj2 = $.int($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj2Value)).Convert($.pointerValueOrNil(int32Type)!))).Interface(), /* @__PURE__ */ $.basicType("int32")), 32)
				}
				if (int32obj1 > int32obj2) {
					return [1, true]
				}
				if (int32obj1 == int32obj2) {
					return [0, true]
				}
				if (int32obj1 < int32obj2) {
					return [-1, true]
				}
			}
			break
		}
		case reflect.Int64:
		{
			{
				let [int64obj1, ok] = $.typeAssertTuple<bigint>(obj1, /* @__PURE__ */ $.basicType("int64"))
				if (!ok) {
					int64obj1 = $.mustTypeAssert<bigint>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj1Value)).Convert($.pointerValueOrNil(int64Type)!))).Interface(), /* @__PURE__ */ $.basicType("int64"))
				}
				let __goscriptTuple4: any = $.typeAssertTuple<bigint>(obj2, /* @__PURE__ */ $.basicType("int64"))
				let int64obj2 = __goscriptTuple4[0]
				ok = __goscriptTuple4[1]
				if (!ok) {
					int64obj2 = $.mustTypeAssert<bigint>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj2Value)).Convert($.pointerValueOrNil(int64Type)!))).Interface(), /* @__PURE__ */ $.basicType("int64"))
				}
				if (int64obj1 > int64obj2) {
					return [1, true]
				}
				if (int64obj1 == int64obj2) {
					return [0, true]
				}
				if (int64obj1 < int64obj2) {
					return [-1, true]
				}
			}
			break
		}
		case reflect.Uint:
		{
			{
				let [uintobj1, ok] = $.typeAssertTuple<number>(obj1, /* @__PURE__ */ $.basicType("uint"))
				if (!ok) {
					uintobj1 = $.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj1Value)).Convert($.pointerValueOrNil(uintType)!))).Interface(), /* @__PURE__ */ $.basicType("uint"))
				}
				let __goscriptTuple5: any = $.typeAssertTuple<number>(obj2, /* @__PURE__ */ $.basicType("uint"))
				let uintobj2 = __goscriptTuple5[0]
				ok = __goscriptTuple5[1]
				if (!ok) {
					uintobj2 = $.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj2Value)).Convert($.pointerValueOrNil(uintType)!))).Interface(), /* @__PURE__ */ $.basicType("uint"))
				}
				if (uintobj1 > uintobj2) {
					return [1, true]
				}
				if (uintobj1 == uintobj2) {
					return [0, true]
				}
				if (uintobj1 < uintobj2) {
					return [-1, true]
				}
			}
			break
		}
		case reflect.Uint8:
		{
			{
				let [uint8obj1, ok] = $.typeAssertTuple<number>(obj1, /* @__PURE__ */ $.basicType("uint8"))
				if (!ok) {
					uint8obj1 = $.uint($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj1Value)).Convert($.pointerValueOrNil(uint8Type)!))).Interface(), /* @__PURE__ */ $.basicType("uint8")), 8)
				}
				let __goscriptTuple6: any = $.typeAssertTuple<number>(obj2, /* @__PURE__ */ $.basicType("uint8"))
				let uint8obj2 = __goscriptTuple6[0]
				ok = __goscriptTuple6[1]
				if (!ok) {
					uint8obj2 = $.uint($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj2Value)).Convert($.pointerValueOrNil(uint8Type)!))).Interface(), /* @__PURE__ */ $.basicType("uint8")), 8)
				}
				if (uint8obj1 > uint8obj2) {
					return [1, true]
				}
				if (uint8obj1 == uint8obj2) {
					return [0, true]
				}
				if (uint8obj1 < uint8obj2) {
					return [-1, true]
				}
			}
			break
		}
		case reflect.Uint16:
		{
			{
				let [uint16obj1, ok] = $.typeAssertTuple<number>(obj1, /* @__PURE__ */ $.basicType("uint16"))
				if (!ok) {
					uint16obj1 = $.uint($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj1Value)).Convert($.pointerValueOrNil(uint16Type)!))).Interface(), /* @__PURE__ */ $.basicType("uint16")), 16)
				}
				let __goscriptTuple7: any = $.typeAssertTuple<number>(obj2, /* @__PURE__ */ $.basicType("uint16"))
				let uint16obj2 = __goscriptTuple7[0]
				ok = __goscriptTuple7[1]
				if (!ok) {
					uint16obj2 = $.uint($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj2Value)).Convert($.pointerValueOrNil(uint16Type)!))).Interface(), /* @__PURE__ */ $.basicType("uint16")), 16)
				}
				if (uint16obj1 > uint16obj2) {
					return [1, true]
				}
				if (uint16obj1 == uint16obj2) {
					return [0, true]
				}
				if (uint16obj1 < uint16obj2) {
					return [-1, true]
				}
			}
			break
		}
		case reflect.Uint32:
		{
			{
				let [uint32obj1, ok] = $.typeAssertTuple<number>(obj1, /* @__PURE__ */ $.basicType("uint32"))
				if (!ok) {
					uint32obj1 = $.uint($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj1Value)).Convert($.pointerValueOrNil(uint32Type)!))).Interface(), /* @__PURE__ */ $.basicType("uint32")), 32)
				}
				let __goscriptTuple8: any = $.typeAssertTuple<number>(obj2, /* @__PURE__ */ $.basicType("uint32"))
				let uint32obj2 = __goscriptTuple8[0]
				ok = __goscriptTuple8[1]
				if (!ok) {
					uint32obj2 = $.uint($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj2Value)).Convert($.pointerValueOrNil(uint32Type)!))).Interface(), /* @__PURE__ */ $.basicType("uint32")), 32)
				}
				if (uint32obj1 > uint32obj2) {
					return [1, true]
				}
				if (uint32obj1 == uint32obj2) {
					return [0, true]
				}
				if (uint32obj1 < uint32obj2) {
					return [-1, true]
				}
			}
			break
		}
		case reflect.Uint64:
		{
			{
				let [uint64obj1, ok] = $.typeAssertTuple<bigint>(obj1, /* @__PURE__ */ $.basicType("uint64"))
				if (!ok) {
					uint64obj1 = $.mustTypeAssert<bigint>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj1Value)).Convert($.pointerValueOrNil(uint64Type)!))).Interface(), /* @__PURE__ */ $.basicType("uint64"))
				}
				let __goscriptTuple9: any = $.typeAssertTuple<bigint>(obj2, /* @__PURE__ */ $.basicType("uint64"))
				let uint64obj2 = __goscriptTuple9[0]
				ok = __goscriptTuple9[1]
				if (!ok) {
					uint64obj2 = $.mustTypeAssert<bigint>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj2Value)).Convert($.pointerValueOrNil(uint64Type)!))).Interface(), /* @__PURE__ */ $.basicType("uint64"))
				}
				if (uint64obj1 > uint64obj2) {
					return [1, true]
				}
				if (uint64obj1 == uint64obj2) {
					return [0, true]
				}
				if (uint64obj1 < uint64obj2) {
					return [-1, true]
				}
			}
			break
		}
		case reflect.Float32:
		{
			{
				let [float32obj1, ok] = $.typeAssertTuple<number>(obj1, /* @__PURE__ */ $.basicType("float32"))
				if (!ok) {
					float32obj1 = $.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj1Value)).Convert($.pointerValueOrNil(float32Type)!))).Interface(), /* @__PURE__ */ $.basicType("float32"))
				}
				let __goscriptTuple10: any = $.typeAssertTuple<number>(obj2, /* @__PURE__ */ $.basicType("float32"))
				let float32obj2 = __goscriptTuple10[0]
				ok = __goscriptTuple10[1]
				if (!ok) {
					float32obj2 = $.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj2Value)).Convert($.pointerValueOrNil(float32Type)!))).Interface(), /* @__PURE__ */ $.basicType("float32"))
				}
				if (float32obj1 > float32obj2) {
					return [1, true]
				}
				if (float32obj1 == float32obj2) {
					return [0, true]
				}
				if (float32obj1 < float32obj2) {
					return [-1, true]
				}
			}
			break
		}
		case reflect.Float64:
		{
			{
				let [float64obj1, ok] = $.typeAssertTuple<number>(obj1, /* @__PURE__ */ $.basicType("float64"))
				if (!ok) {
					float64obj1 = $.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj1Value)).Convert($.pointerValueOrNil(float64Type)!))).Interface(), /* @__PURE__ */ $.basicType("float64"))
				}
				let __goscriptTuple11: any = $.typeAssertTuple<number>(obj2, /* @__PURE__ */ $.basicType("float64"))
				let float64obj2 = __goscriptTuple11[0]
				ok = __goscriptTuple11[1]
				if (!ok) {
					float64obj2 = $.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj2Value)).Convert($.pointerValueOrNil(float64Type)!))).Interface(), /* @__PURE__ */ $.basicType("float64"))
				}
				if (float64obj1 > float64obj2) {
					return [1, true]
				}
				if (float64obj1 == float64obj2) {
					return [0, true]
				}
				if (float64obj1 < float64obj2) {
					return [-1, true]
				}
			}
			break
		}
		case reflect.String:
		{
			{
				let [stringobj1, ok] = $.typeAssertTuple<string>(obj1, /* @__PURE__ */ $.basicType("string"))
				if (!ok) {
					stringobj1 = $.mustTypeAssert<string>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj1Value)).Convert($.pointerValueOrNil(stringType)!))).Interface(), /* @__PURE__ */ $.basicType("string"))
				}
				let __goscriptTuple12: any = $.typeAssertTuple<string>(obj2, /* @__PURE__ */ $.basicType("string"))
				let stringobj2 = __goscriptTuple12[0]
				ok = __goscriptTuple12[1]
				if (!ok) {
					stringobj2 = $.mustTypeAssert<string>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj2Value)).Convert($.pointerValueOrNil(stringType)!))).Interface(), /* @__PURE__ */ $.basicType("string"))
				}
				if ($.stringCompare(stringobj1, stringobj2) > 0) {
					return [1, true]
				}
				if ($.stringEqual(stringobj1, stringobj2)) {
					return [0, true]
				}
				if ($.stringCompare(stringobj1, stringobj2) < 0) {
					return [-1, true]
				}
			}
			break
		}
		case reflect.Struct:
		{
			{
				// All structs enter here. We're not interested in most types.
				if (!$.markAsStructValue($.cloneStructValue(obj1Value)).CanConvert($.pointerValueOrNil(timeType)!)) {
					break
				}

				// time.Time can be compared!
				let [timeObj1, ok] = $.typeAssertTuple<time.Time>(obj1, "time.Time")
				if (!ok) {
					timeObj1 = $.assignStruct(timeObj1, $.mustTypeAssert<time.Time>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj1Value)).Convert($.pointerValueOrNil(timeType)!))).Interface(), "time.Time"))
				}

				let __goscriptTuple13: any = $.typeAssertTuple<time.Time>(obj2, "time.Time")
				let timeObj2 = __goscriptTuple13[0]
				ok = __goscriptTuple13[1]
				if (!ok) {
					timeObj2 = $.assignStruct(timeObj2, $.mustTypeAssert<time.Time>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj2Value)).Convert($.pointerValueOrNil(timeType)!))).Interface(), "time.Time"))
				}

				return compare($.basicInterfaceValue($.markAsStructValue($.cloneStructValue(timeObj1)).UnixNano(), "int64"), $.basicInterfaceValue($.markAsStructValue($.cloneStructValue(timeObj2)).UnixNano(), "int64"), 6)
			}
			break
		}
		case reflect.Slice:
		{
			{
				// We only care about the []byte type.
				if (!$.markAsStructValue($.cloneStructValue(obj1Value)).CanConvert($.pointerValueOrNil(bytesType)!)) {
					break
				}

				// []byte can be compared!
				let __goscriptTuple14: any = $.typeAssertTuple<$.Slice<number>>(obj1, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
				let bytesObj1: $.Slice<number> = __goscriptTuple14[0]
				let ok = __goscriptTuple14[1]
				if (!ok) {
					bytesObj1 = $.mustTypeAssert<$.Slice<number>>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj1Value)).Convert($.pointerValueOrNil(bytesType)!))).Interface(), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
				}
				let __goscriptTuple15: any = $.typeAssertTuple<$.Slice<number>>(obj2, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
				let bytesObj2: $.Slice<number> = __goscriptTuple15[0]
				ok = __goscriptTuple15[1]
				if (!ok) {
					bytesObj2 = $.mustTypeAssert<$.Slice<number>>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj2Value)).Convert($.pointerValueOrNil(bytesType)!))).Interface(), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
				}

				return [$.int(bytes.Compare(bytesObj1, bytesObj2)), true]
			}
			break
		}
		case reflect.Uintptr:
		{
			{
				let [uintptrObj1, ok] = $.typeAssertTuple<number>(obj1, /* @__PURE__ */ $.basicType("uintptr"))
				if (!ok) {
					uintptrObj1 = $.uint($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj1Value)).Convert($.pointerValueOrNil(uintptrType)!))).Interface(), /* @__PURE__ */ $.basicType("uintptr")), 64)
				}
				let __goscriptTuple16: any = $.typeAssertTuple<number>(obj2, /* @__PURE__ */ $.basicType("uintptr"))
				let uintptrObj2 = __goscriptTuple16[0]
				ok = __goscriptTuple16[1]
				if (!ok) {
					uintptrObj2 = $.uint($.mustTypeAssert<number>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(obj2Value)).Convert($.pointerValueOrNil(uintptrType)!))).Interface(), /* @__PURE__ */ $.basicType("uintptr")), 64)
				}
				if (uintptrObj1 > uintptrObj2) {
					return [1, true]
				}
				if (uintptrObj1 == uintptrObj2) {
					return [0, true]
				}
				if (uintptrObj1 < uintptrObj2) {
					return [-1, true]
				}
			}
			break
		}
	}

	return [0, false]
}

export async function Greater(t: __goscript_assertions.TestingT | null, e1: any, e2: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return compareTwoValues(t, e1, e2, $.arrayToSlice<CompareType>([1]), "\"%v\" is not greater than \"%v\"", msgAndArgs)
}

export async function GreaterOrEqual(t: __goscript_assertions.TestingT | null, e1: any, e2: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return compareTwoValues(t, e1, e2, $.arrayToSlice<CompareType>([1, 0]), "\"%v\" is not greater than or equal to \"%v\"", msgAndArgs)
}

export async function Less(t: __goscript_assertions.TestingT | null, e1: any, e2: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return compareTwoValues(t, e1, e2, $.arrayToSlice<CompareType>([-1]), "\"%v\" is not less than \"%v\"", msgAndArgs)
}

export async function LessOrEqual(t: __goscript_assertions.TestingT | null, e1: any, e2: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	return compareTwoValues(t, e1, e2, $.arrayToSlice<CompareType>([-1, 0]), "\"%v\" is not less than or equal to \"%v\"", msgAndArgs)
}

export async function Positive(t: __goscript_assertions.TestingT | null, e: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let zero = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(reflect.TypeOf(e))!)))
	return compareTwoValues(t, e, $.markAsStructValue($.cloneStructValue(zero)).Interface(), $.arrayToSlice<CompareType>([1]), "\"%v\" is not positive", msgAndArgs)
}

export async function Negative(t: __goscript_assertions.TestingT | null, e: any, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	let zero = $.markAsStructValue($.cloneStructValue(reflect.Zero($.pointerValueOrNil(reflect.TypeOf(e))!)))
	return compareTwoValues(t, e, $.markAsStructValue($.cloneStructValue(zero)).Interface(), $.arrayToSlice<CompareType>([-1]), "\"%v\" is not negative", msgAndArgs)
}

export async function compareTwoValues(t: __goscript_assertions.TestingT | null, e1: any, e2: any, allowedComparesResults: $.Slice<CompareType>, failMessage: string, msgAndArgs: $.Slice<any>): globalThis.Promise<boolean> {
	{
		let [h, ok] = $.typeAssertTuple<__goscript_assertions.tHelper | null>(t, "assert.tHelper")
		if (ok) {
			void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<__goscript_assertions.tHelper, null>) : $.pointerValue<Exclude<__goscript_assertions.tHelper, null>>(h)).Helper(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	let e1Kind = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(e1))).Kind()
	let e2Kind = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(e2))).Kind()
	if (e1Kind != e2Kind) {
		return __goscript_assertions.Fail(t, "Elements should be the same type", msgAndArgs)
	}

	let [compareResult, isComparable] = compare(e1, e2, e1Kind)
	if (!isComparable) {
		return __goscript_assertions.Fail(t, await fmt.Sprintf("Can not compare type \"%s\"", (reflect.TypeOf(e1) as any)), msgAndArgs)
	}

	if (!containsValue(allowedComparesResults, compareResult)) {
		return __goscript_assertions.Fail(t, await fmt.Sprintf(failMessage, e1, e2), msgAndArgs)
	}

	return true
}

export function containsValue(values: $.Slice<CompareType>, value: CompareType): boolean {
	for (let __goscriptRangeTarget0 = values, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as CompareType)
		if (v == value) {
			return true
		}
	}

	return false
}

var __goscriptAwait: any
