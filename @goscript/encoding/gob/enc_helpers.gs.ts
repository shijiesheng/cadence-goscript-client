// Generated file based on enc_helpers.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript__type from "./type.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_encoder from "./encoder.gs.ts"
import "@goscript/reflect/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"
import "./type.gs.ts"
import "./encode.gs.ts"
import "./encoder.gs.ts"

export var encArrayHelper: globalThis.Map<reflect.Kind, __goscript_encode.encHelper | null> | null

export function __goscript_init_encArrayHelper(): void {
	if (((encArrayHelper) as any) === undefined) {
		encArrayHelper = $.makeMap<reflect.Kind, __goscript_encode.encHelper | null>([[1, encBoolArray], [15, encComplex64Array], [16, encComplex128Array], [13, encFloat32Array], [14, encFloat64Array], [2, encIntArray], [4, encInt16Array], [5, encInt32Array], [6, encInt64Array], [3, encInt8Array], [24, encStringArray], [7, encUintArray], [9, encUint16Array], [10, encUint32Array], [11, encUint64Array], [12, encUintptrArray]])
	}
}

export function __goscript_get_encArrayHelper(): globalThis.Map<reflect.Kind, __goscript_encode.encHelper | null> | null {
	if (((encArrayHelper) as any) === undefined) {
		__goscript_init_encArrayHelper()
	}
	return encArrayHelper
}

export function __goscript_set_encArrayHelper(__goscriptValue: globalThis.Map<reflect.Kind, __goscript_encode.encHelper | null> | null): void {
	encArrayHelper = __goscriptValue
}

export var encSliceHelper: globalThis.Map<reflect.Kind, __goscript_encode.encHelper | null> | null

export function __goscript_init_encSliceHelper(): void {
	if (((encSliceHelper) as any) === undefined) {
		encSliceHelper = $.makeMap<reflect.Kind, __goscript_encode.encHelper | null>([[1, encBoolSlice], [15, encComplex64Slice], [16, encComplex128Slice], [13, encFloat32Slice], [14, encFloat64Slice], [2, encIntSlice], [4, encInt16Slice], [5, encInt32Slice], [6, encInt64Slice], [3, encInt8Slice], [24, encStringSlice], [7, encUintSlice], [9, encUint16Slice], [10, encUint32Slice], [11, encUint64Slice], [12, encUintptrSlice]])
	}
}

export function __goscript_get_encSliceHelper(): globalThis.Map<reflect.Kind, __goscript_encode.encHelper | null> | null {
	if (((encSliceHelper) as any) === undefined) {
		__goscript_init_encSliceHelper()
	}
	return encSliceHelper
}

export function __goscript_set_encSliceHelper(__goscriptValue: globalThis.Map<reflect.Kind, __goscript_encode.encHelper | null> | null): void {
	encSliceHelper = __goscriptValue
}

export function encBoolArray(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return encBoolSlice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))))
}

export function encBoolSlice(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	let __goscriptTuple0: any = reflect.TypeAssert(__goscriptStatic0(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.Slice<boolean> = (__goscriptTuple0[0] as $.Slice<boolean>)
	let ok = __goscriptTuple0[1]
	if (!ok) {
		// It is kind bool but not type bool. TODO: We can handle this unsafely.
		return false
	}
	for (let __goscriptRangeTarget0 = slice, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let x = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as boolean)
		if ((x != false) || $.pointerValue<__goscript_encode.encoderState>(state).sendZero) {
			if (x) {
				void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint(1n) : __goscript_encode.encoderState.prototype.encodeUint.call(state, 1n))
			} else {
				void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint(0n) : __goscript_encode.encoderState.prototype.encodeUint.call(state, 0n))
			}
		}
	}
	return true
}

export function encComplex64Array(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return encComplex64Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))))
}

export function encComplex64Slice(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	let __goscriptTuple1: any = reflect.TypeAssert(__goscriptStatic1(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.Slice<$.Complex> = (__goscriptTuple1[0] as $.Slice<$.Complex>)
	let ok = __goscriptTuple1[1]
	if (!ok) {
		// It is kind complex64 but not type complex64. TODO: We can handle this unsafely.
		return false
	}
	for (let __goscriptRangeTarget1 = slice, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let x = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as $.Complex)
		if ((!$.arrayEqual(x, ($.complex(0, 0)))) || $.pointerValue<__goscript_encode.encoderState>(state).sendZero) {
			let rpart = __goscript_encode.floatBits($.real($.complex64(x)))
			let ipart = __goscript_encode.floatBits($.imag($.complex64(x)))
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint(rpart) : __goscript_encode.encoderState.prototype.encodeUint.call(state, rpart))
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint(ipart) : __goscript_encode.encoderState.prototype.encodeUint.call(state, ipart))
		}
	}
	return true
}

export function encComplex128Array(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return encComplex128Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))))
}

export function encComplex128Slice(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	let __goscriptTuple2: any = reflect.TypeAssert(__goscriptStatic2(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.Slice<$.Complex> = (__goscriptTuple2[0] as $.Slice<$.Complex>)
	let ok = __goscriptTuple2[1]
	if (!ok) {
		// It is kind complex128 but not type complex128. TODO: We can handle this unsafely.
		return false
	}
	for (let __goscriptRangeTarget2 = slice, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let x = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as $.Complex)
		if ((!$.arrayEqual(x, ($.complex(0, 0)))) || $.pointerValue<__goscript_encode.encoderState>(state).sendZero) {
			let rpart = __goscript_encode.floatBits($.real(x))
			let ipart = __goscript_encode.floatBits($.imag(x))
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint(rpart) : __goscript_encode.encoderState.prototype.encodeUint.call(state, rpart))
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint(ipart) : __goscript_encode.encoderState.prototype.encodeUint.call(state, ipart))
		}
	}
	return true
}

export function encFloat32Array(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return encFloat32Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))))
}

export function encFloat32Slice(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	let __goscriptTuple3: any = reflect.TypeAssert(__goscriptStatic3(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.Slice<number> = (__goscriptTuple3[0] as $.Slice<number>)
	let ok = __goscriptTuple3[1]
	if (!ok) {
		// It is kind float32 but not type float32. TODO: We can handle this unsafely.
		return false
	}
	for (let __goscriptRangeTarget3 = slice, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let x = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as number)
		if ((x != 0) || $.pointerValue<__goscript_encode.encoderState>(state).sendZero) {
			let bits = __goscript_encode.floatBits(x)
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint(bits) : __goscript_encode.encoderState.prototype.encodeUint.call(state, bits))
		}
	}
	return true
}

export function encFloat64Array(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return encFloat64Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))))
}

export function encFloat64Slice(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	let __goscriptTuple4: any = reflect.TypeAssert(__goscriptStatic4(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.Slice<number> = (__goscriptTuple4[0] as $.Slice<number>)
	let ok = __goscriptTuple4[1]
	if (!ok) {
		// It is kind float64 but not type float64. TODO: We can handle this unsafely.
		return false
	}
	for (let __goscriptRangeTarget4 = slice, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let x = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as number)
		if ((x != 0) || $.pointerValue<__goscript_encode.encoderState>(state).sendZero) {
			let bits = __goscript_encode.floatBits(x)
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint(bits) : __goscript_encode.encoderState.prototype.encodeUint.call(state, bits))
		}
	}
	return true
}

export function encIntArray(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return encIntSlice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))))
}

export function encIntSlice(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	let __goscriptTuple5: any = reflect.TypeAssert(__goscriptStatic5(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.Slice<number> = (__goscriptTuple5[0] as $.Slice<number>)
	let ok = __goscriptTuple5[1]
	if (!ok) {
		// It is kind int but not type int. TODO: We can handle this unsafely.
		return false
	}
	for (let __goscriptRangeTarget5 = slice, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		let x = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as number)
		if ((x != 0) || $.pointerValue<__goscript_encode.encoderState>(state).sendZero) {
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeInt($.int64(x)) : __goscript_encode.encoderState.prototype.encodeInt.call(state, $.int64(x)))
		}
	}
	return true
}

export function encInt16Array(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return encInt16Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))))
}

export function encInt16Slice(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	let __goscriptTuple6: any = reflect.TypeAssert(__goscriptStatic6(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.Slice<number> = (__goscriptTuple6[0] as $.Slice<number>)
	let ok = __goscriptTuple6[1]
	if (!ok) {
		// It is kind int16 but not type int16. TODO: We can handle this unsafely.
		return false
	}
	for (let __goscriptRangeTarget6 = slice, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
		let x = $.int((__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as number), 16)
		if ((x != 0) || $.pointerValue<__goscript_encode.encoderState>(state).sendZero) {
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeInt($.int64(x)) : __goscript_encode.encoderState.prototype.encodeInt.call(state, $.int64(x)))
		}
	}
	return true
}

export function encInt32Array(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return encInt32Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))))
}

export function encInt32Slice(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	let __goscriptTuple7: any = reflect.TypeAssert(__goscriptStatic7(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.Slice<number> = (__goscriptTuple7[0] as $.Slice<number>)
	let ok = __goscriptTuple7[1]
	if (!ok) {
		// It is kind int32 but not type int32. TODO: We can handle this unsafely.
		return false
	}
	for (let __goscriptRangeTarget7 = slice, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
		let x = $.int((__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as number), 32)
		if ((x != 0) || $.pointerValue<__goscript_encode.encoderState>(state).sendZero) {
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeInt($.int64(x)) : __goscript_encode.encoderState.prototype.encodeInt.call(state, $.int64(x)))
		}
	}
	return true
}

export function encInt64Array(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return encInt64Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))))
}

export function encInt64Slice(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	let __goscriptTuple8: any = reflect.TypeAssert(__goscriptStatic8(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.Slice<bigint> = (__goscriptTuple8[0] as $.Slice<bigint>)
	let ok = __goscriptTuple8[1]
	if (!ok) {
		// It is kind int64 but not type int64. TODO: We can handle this unsafely.
		return false
	}
	for (let __goscriptRangeTarget8 = slice, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
		let x = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as bigint)
		if ((x != 0n) || $.pointerValue<__goscript_encode.encoderState>(state).sendZero) {
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeInt(x) : __goscript_encode.encoderState.prototype.encodeInt.call(state, x))
		}
	}
	return true
}

export function encInt8Array(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return encInt8Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))))
}

export function encInt8Slice(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	let __goscriptTuple9: any = reflect.TypeAssert(__goscriptStatic9(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.Slice<number> = (__goscriptTuple9[0] as $.Slice<number>)
	let ok = __goscriptTuple9[1]
	if (!ok) {
		// It is kind int8 but not type int8. TODO: We can handle this unsafely.
		return false
	}
	for (let __goscriptRangeTarget9 = slice, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow9.length; __rangeIndex++) {
		let x = $.int((__goscriptRangeWindow9.backing[__goscriptRangeWindow9.offset + __rangeIndex] as number), 8)
		if ((x != 0) || $.pointerValue<__goscript_encode.encoderState>(state).sendZero) {
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeInt($.int64(x)) : __goscript_encode.encoderState.prototype.encodeInt.call(state, $.int64(x)))
		}
	}
	return true
}

export function encStringArray(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return encStringSlice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))))
}

export function encStringSlice(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	const state$: __goscript_encode.encoderState = state == null ? $.pointerTarget<__goscript_encode.encoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_encode.encoderState>(state)
	let __goscriptTuple10: any = reflect.TypeAssert(__goscriptStatic10(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.Slice<string> = (__goscriptTuple10[0] as $.Slice<string>)
	let ok = __goscriptTuple10[1]
	if (!ok) {
		// It is kind string but not type string. TODO: We can handle this unsafely.
		return false
	}
	for (let __goscriptRangeTarget10 = slice, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow10.length; __rangeIndex++) {
		let x = (__goscriptRangeWindow10.backing[__goscriptRangeWindow10.offset + __rangeIndex] as string)
		if ((!$.stringEqual(x, "")) || (state$ as __goscript_encode.encoderState).sendZero) {
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint($.uint64($.stringLen(x))) : __goscript_encode.encoderState.prototype.encodeUint.call(state, $.uint64($.stringLen(x))))
			__goscript_encode.encBuffer.prototype.WriteString.call((state$ as __goscript_encode.encoderState).b, x)
		}
	}
	return true
}

export function encUintArray(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return encUintSlice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))))
}

export function encUintSlice(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	let __goscriptTuple11: any = reflect.TypeAssert(__goscriptStatic11(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.Slice<number> = (__goscriptTuple11[0] as $.Slice<number>)
	let ok = __goscriptTuple11[1]
	if (!ok) {
		// It is kind uint but not type uint. TODO: We can handle this unsafely.
		return false
	}
	for (let __goscriptRangeTarget11 = slice, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
		let x = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as number)
		if ((x != 0) || $.pointerValue<__goscript_encode.encoderState>(state).sendZero) {
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint($.uint64(x)) : __goscript_encode.encoderState.prototype.encodeUint.call(state, $.uint64(x)))
		}
	}
	return true
}

export function encUint16Array(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return encUint16Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))))
}

export function encUint16Slice(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	let __goscriptTuple12: any = reflect.TypeAssert(__goscriptStatic12(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.Slice<number> = (__goscriptTuple12[0] as $.Slice<number>)
	let ok = __goscriptTuple12[1]
	if (!ok) {
		// It is kind uint16 but not type uint16. TODO: We can handle this unsafely.
		return false
	}
	for (let __goscriptRangeTarget12 = slice, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
		let x = $.uint((__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as number), 16)
		if ((x != 0) || $.pointerValue<__goscript_encode.encoderState>(state).sendZero) {
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint($.uint64(x)) : __goscript_encode.encoderState.prototype.encodeUint.call(state, $.uint64(x)))
		}
	}
	return true
}

export function encUint32Array(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return encUint32Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))))
}

export function encUint32Slice(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	let __goscriptTuple13: any = reflect.TypeAssert(__goscriptStatic13(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.Slice<number> = (__goscriptTuple13[0] as $.Slice<number>)
	let ok = __goscriptTuple13[1]
	if (!ok) {
		// It is kind uint32 but not type uint32. TODO: We can handle this unsafely.
		return false
	}
	for (let __goscriptRangeTarget13 = slice, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow13.length; __rangeIndex++) {
		let x = $.uint((__goscriptRangeWindow13.backing[__goscriptRangeWindow13.offset + __rangeIndex] as number), 32)
		if ((x != 0) || $.pointerValue<__goscript_encode.encoderState>(state).sendZero) {
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint($.uint64(x)) : __goscript_encode.encoderState.prototype.encodeUint.call(state, $.uint64(x)))
		}
	}
	return true
}

export function encUint64Array(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return encUint64Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))))
}

export function encUint64Slice(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	let __goscriptTuple14: any = reflect.TypeAssert(__goscriptStatic14(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.Slice<bigint> = (__goscriptTuple14[0] as $.Slice<bigint>)
	let ok = __goscriptTuple14[1]
	if (!ok) {
		// It is kind uint64 but not type uint64. TODO: We can handle this unsafely.
		return false
	}
	for (let __goscriptRangeTarget14 = slice, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow14.length; __rangeIndex++) {
		let x = (__goscriptRangeWindow14.backing[__goscriptRangeWindow14.offset + __rangeIndex] as bigint)
		if ((x != 0n) || $.pointerValue<__goscript_encode.encoderState>(state).sendZero) {
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint(x) : __goscript_encode.encoderState.prototype.encodeUint.call(state, x))
		}
	}
	return true
}

export function encUintptrArray(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return encUintptrSlice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))))
}

export function encUintptrSlice(state: __goscript_encode.encoderState | $.VarRef<__goscript_encode.encoderState> | null, v: reflect.Value): boolean {
	let __goscriptTuple15: any = reflect.TypeAssert(__goscriptStatic15(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.Slice<number> = (__goscriptTuple15[0] as $.Slice<number>)
	let ok = __goscriptTuple15[1]
	if (!ok) {
		// It is kind uintptr but not type uintptr. TODO: We can handle this unsafely.
		return false
	}
	for (let __goscriptRangeTarget15 = slice, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow15.length; __rangeIndex++) {
		let x = $.uint((__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + __rangeIndex] as number), 64)
		if ((x != 0) || $.pointerValue<__goscript_encode.encoderState>(state).sendZero) {
			void (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_encode.encoderState).encodeUint($.uint64(x)) : __goscript_encode.encoderState.prototype.encodeUint.call(state, $.uint64(x)))
		}
	}
	return true
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool")), zero: () => null }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64")), zero: () => null }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128")), zero: () => null }})
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32")), zero: () => null }})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")), zero: () => null }})
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), zero: () => null }})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16")), zero: () => null }})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), zero: () => null }})
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")), zero: () => null }})
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8")), zero: () => null }})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), zero: () => null }})
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint")), zero: () => null }})
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")), zero: () => null }})
}

var __goscriptStatic13$value: any
function __goscriptStatic13(): any {
	return __goscriptStatic13$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")), zero: () => null }})
}

var __goscriptStatic14$value: any
function __goscriptStatic14(): any {
	return __goscriptStatic14$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64")), zero: () => null }})
}

var __goscriptStatic15$value: any
function __goscriptStatic15(): any {
	return __goscriptStatic15$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr")), zero: () => null }})
}
