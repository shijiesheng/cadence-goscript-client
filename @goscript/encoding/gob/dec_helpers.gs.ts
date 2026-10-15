// Generated file based on dec_helpers.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript__type from "./type.gs.ts"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_decoder from "./decoder.gs.ts"

import * as __goscript_error from "./error.gs.ts"
import "@goscript/math/index.js"
import "@goscript/reflect/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"
import "./type.gs.ts"
import "./decode.gs.ts"
import "./decoder.gs.ts"
import "./error.gs.ts"

export var decArrayHelper: globalThis.Map<reflect.Kind, __goscript_decode.decHelper | null> | null

export function __goscript_init_decArrayHelper(): void {
	if (((decArrayHelper) as any) === undefined) {
		decArrayHelper = $.makeMap<reflect.Kind, __goscript_decode.decHelper | null>([[1, decBoolArray], [15, decComplex64Array], [16, decComplex128Array], [13, decFloat32Array], [14, decFloat64Array], [2, decIntArray], [4, decInt16Array], [5, decInt32Array], [6, decInt64Array], [3, decInt8Array], [24, decStringArray], [7, decUintArray], [9, decUint16Array], [10, decUint32Array], [11, decUint64Array], [12, decUintptrArray]])
	}
}

export function __goscript_get_decArrayHelper(): globalThis.Map<reflect.Kind, __goscript_decode.decHelper | null> | null {
	if (((decArrayHelper) as any) === undefined) {
		__goscript_init_decArrayHelper()
	}
	return decArrayHelper
}

export function __goscript_set_decArrayHelper(__goscriptValue: globalThis.Map<reflect.Kind, __goscript_decode.decHelper | null> | null): void {
	decArrayHelper = __goscriptValue
}

export var decSliceHelper: globalThis.Map<reflect.Kind, __goscript_decode.decHelper | null> | null

export function __goscript_init_decSliceHelper(): void {
	if (((decSliceHelper) as any) === undefined) {
		decSliceHelper = $.makeMap<reflect.Kind, __goscript_decode.decHelper | null>([[1, decBoolSlice], [15, decComplex64Slice], [16, decComplex128Slice], [13, decFloat32Slice], [14, decFloat64Slice], [2, decIntSlice], [4, decInt16Slice], [5, decInt32Slice], [6, decInt64Slice], [3, decInt8Slice], [24, decStringSlice], [7, decUintSlice], [9, decUint16Slice], [10, decUint32Slice], [11, decUint64Slice], [12, decUintptrSlice]])
	}
}

export function __goscript_get_decSliceHelper(): globalThis.Map<reflect.Kind, __goscript_decode.decHelper | null> | null {
	if (((decSliceHelper) as any) === undefined) {
		__goscript_init_decSliceHelper()
	}
	return decSliceHelper
}

export function __goscript_set_decSliceHelper(__goscriptValue: globalThis.Map<reflect.Kind, __goscript_decode.decHelper | null> | null): void {
	decSliceHelper = __goscriptValue
}

export function decBoolArray(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return decBoolSlice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))), length, ovfl)
}

export function decBoolSlice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	let __goscriptTuple0: any = reflect.TypeAssert(__goscriptStatic0(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.VarRef<$.Slice<boolean>> = $.varRef((__goscriptTuple0[0] as $.Slice<boolean>))
	let ok = __goscriptTuple0[1]
	if (!ok) {
		// It is kind bool but not type bool. TODO: We can handle this unsafely.
		return false
	}
	for (let i = 0; i < length; i++) {
		if (__goscript_decode.decBuffer.prototype.Len.call($.pointerValue<__goscript_decode.decoderState>(state).b) == 0) {
			__goscript_error.errorf("decoding bool array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
		}
		if (i >= $.sliceLen(slice.value)) {
			// This is a slice that we only partially allocated.
			growSlice(__goscriptStatic1(), v, slice, length)
		}
		$.sliceElems(slice.value!)[$.sliceSlot(slice.value!, i)] = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state)) != 0n
	}
	return true
}

export function decComplex64Array(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return decComplex64Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))), length, ovfl)
}

export function decComplex64Slice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	let __goscriptTuple1: any = reflect.TypeAssert(__goscriptStatic2(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.VarRef<$.Slice<$.Complex>> = $.varRef((__goscriptTuple1[0] as $.Slice<$.Complex>))
	let ok = __goscriptTuple1[1]
	if (!ok) {
		// It is kind complex64 but not type complex64. TODO: We can handle this unsafely.
		return false
	}
	for (let i = 0; i < length; i++) {
		if (__goscript_decode.decBuffer.prototype.Len.call($.pointerValue<__goscript_decode.decoderState>(state).b) == 0) {
			__goscript_error.errorf("decoding complex64 array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
		}
		if (i >= $.sliceLen(slice.value)) {
			// This is a slice that we only partially allocated.
			growSlice(__goscriptStatic3(), v, slice, length)
		}
		let real = __goscript_decode.float32FromBits((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state)), ovfl)
		let imag = __goscript_decode.float32FromBits((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state)), ovfl)
		$.sliceElems(slice.value!)[$.sliceSlot(slice.value!, i)] = $.complex64($.complex64(globalThis.Math.fround(real), globalThis.Math.fround(imag)))
	}
	return true
}

export function decComplex128Array(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return decComplex128Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))), length, ovfl)
}

export function decComplex128Slice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	let __goscriptTuple2: any = reflect.TypeAssert(__goscriptStatic4(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.VarRef<$.Slice<$.Complex>> = $.varRef((__goscriptTuple2[0] as $.Slice<$.Complex>))
	let ok = __goscriptTuple2[1]
	if (!ok) {
		// It is kind complex128 but not type complex128. TODO: We can handle this unsafely.
		return false
	}
	for (let i = 0; i < length; i++) {
		if (__goscript_decode.decBuffer.prototype.Len.call($.pointerValue<__goscript_decode.decoderState>(state).b) == 0) {
			__goscript_error.errorf("decoding complex128 array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
		}
		if (i >= $.sliceLen(slice.value)) {
			// This is a slice that we only partially allocated.
			growSlice(__goscriptStatic5(), v, slice, length)
		}
		let real = __goscript_decode.float64FromBits((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state)))
		let imag = __goscript_decode.float64FromBits((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state)))
		$.sliceElems(slice.value!)[$.sliceSlot(slice.value!, i)] = $.complex(real, imag)
	}
	return true
}

export function decFloat32Array(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return decFloat32Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))), length, ovfl)
}

export function decFloat32Slice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	let __goscriptTuple3: any = reflect.TypeAssert(__goscriptStatic6(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.VarRef<$.Slice<number>> = $.varRef((__goscriptTuple3[0] as $.Slice<number>))
	let ok = __goscriptTuple3[1]
	if (!ok) {
		// It is kind float32 but not type float32. TODO: We can handle this unsafely.
		return false
	}
	for (let i = 0; i < length; i++) {
		if (__goscript_decode.decBuffer.prototype.Len.call($.pointerValue<__goscript_decode.decoderState>(state).b) == 0) {
			__goscript_error.errorf("decoding float32 array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
		}
		if (i >= $.sliceLen(slice.value)) {
			// This is a slice that we only partially allocated.
			growSlice(__goscriptStatic7(), v, slice, length)
		}
		$.sliceElems(slice.value!)[$.sliceSlot(slice.value!, i)] = globalThis.Math.fround(__goscript_decode.float32FromBits((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state)), ovfl))
	}
	return true
}

export function decFloat64Array(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return decFloat64Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))), length, ovfl)
}

export function decFloat64Slice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	let __goscriptTuple4: any = reflect.TypeAssert(__goscriptStatic8(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.VarRef<$.Slice<number>> = $.varRef((__goscriptTuple4[0] as $.Slice<number>))
	let ok = __goscriptTuple4[1]
	if (!ok) {
		// It is kind float64 but not type float64. TODO: We can handle this unsafely.
		return false
	}
	for (let i = 0; i < length; i++) {
		if (__goscript_decode.decBuffer.prototype.Len.call($.pointerValue<__goscript_decode.decoderState>(state).b) == 0) {
			__goscript_error.errorf("decoding float64 array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
		}
		if (i >= $.sliceLen(slice.value)) {
			// This is a slice that we only partially allocated.
			growSlice(__goscriptStatic9(), v, slice, length)
		}
		$.sliceElems(slice.value!)[$.sliceSlot(slice.value!, i)] = __goscript_decode.float64FromBits((state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state)))
	}
	return true
}

export function decIntArray(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return decIntSlice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))), length, ovfl)
}

export function decIntSlice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	let __goscriptTuple5: any = reflect.TypeAssert(__goscriptStatic10(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.VarRef<$.Slice<number>> = $.varRef((__goscriptTuple5[0] as $.Slice<number>))
	let ok = __goscriptTuple5[1]
	if (!ok) {
		// It is kind int but not type int. TODO: We can handle this unsafely.
		return false
	}
	for (let i = 0; i < length; i++) {
		if (__goscript_decode.decBuffer.prototype.Len.call($.pointerValue<__goscript_decode.decoderState>(state).b) == 0) {
			__goscript_error.errorf("decoding int array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
		}
		if (i >= $.sliceLen(slice.value)) {
			// This is a slice that we only partially allocated.
			growSlice(__goscriptStatic11(), v, slice, length)
		}
		let x = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeInt() : __goscript_decode.decoderState.prototype.decodeInt.call(state))
		// MinInt and MaxInt
		if ((x < -9223372036854775808n) || (9223372036854775807n < x)) {
			__goscript_error.error_(ovfl)
		}
		$.sliceElems(slice.value!)[$.sliceSlot(slice.value!, i)] = $.int(x)
	}
	return true
}

export function decInt16Array(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return decInt16Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))), length, ovfl)
}

export function decInt16Slice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	let __goscriptTuple6: any = reflect.TypeAssert(__goscriptStatic12(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.VarRef<$.Slice<number>> = $.varRef((__goscriptTuple6[0] as $.Slice<number>))
	let ok = __goscriptTuple6[1]
	if (!ok) {
		// It is kind int16 but not type int16. TODO: We can handle this unsafely.
		return false
	}
	for (let i = 0; i < length; i++) {
		if (__goscript_decode.decBuffer.prototype.Len.call($.pointerValue<__goscript_decode.decoderState>(state).b) == 0) {
			__goscript_error.errorf("decoding int16 array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
		}
		if (i >= $.sliceLen(slice.value)) {
			// This is a slice that we only partially allocated.
			growSlice(__goscriptStatic13(), v, slice, length)
		}
		let x = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeInt() : __goscript_decode.decoderState.prototype.decodeInt.call(state))
		if ((x < -32768n) || (32767n < x)) {
			__goscript_error.error_(ovfl)
		}
		$.sliceElems(slice.value!)[$.sliceSlot(slice.value!, i)] = $.int(x, 16)
	}
	return true
}

export function decInt32Array(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return decInt32Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))), length, ovfl)
}

export function decInt32Slice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	let __goscriptTuple7: any = reflect.TypeAssert(__goscriptStatic14(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.VarRef<$.Slice<number>> = $.varRef((__goscriptTuple7[0] as $.Slice<number>))
	let ok = __goscriptTuple7[1]
	if (!ok) {
		// It is kind int32 but not type int32. TODO: We can handle this unsafely.
		return false
	}
	for (let i = 0; i < length; i++) {
		if (__goscript_decode.decBuffer.prototype.Len.call($.pointerValue<__goscript_decode.decoderState>(state).b) == 0) {
			__goscript_error.errorf("decoding int32 array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
		}
		if (i >= $.sliceLen(slice.value)) {
			// This is a slice that we only partially allocated.
			growSlice(__goscriptStatic15(), v, slice, length)
		}
		let x = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeInt() : __goscript_decode.decoderState.prototype.decodeInt.call(state))
		if ((x < -2147483648n) || (2147483647n < x)) {
			__goscript_error.error_(ovfl)
		}
		$.sliceElems(slice.value!)[$.sliceSlot(slice.value!, i)] = $.int(x, 32)
	}
	return true
}

export function decInt64Array(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return decInt64Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))), length, ovfl)
}

export function decInt64Slice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	let __goscriptTuple8: any = reflect.TypeAssert(__goscriptStatic16(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.VarRef<$.Slice<bigint>> = $.varRef((__goscriptTuple8[0] as $.Slice<bigint>))
	let ok = __goscriptTuple8[1]
	if (!ok) {
		// It is kind int64 but not type int64. TODO: We can handle this unsafely.
		return false
	}
	for (let i = 0; i < length; i++) {
		if (__goscript_decode.decBuffer.prototype.Len.call($.pointerValue<__goscript_decode.decoderState>(state).b) == 0) {
			__goscript_error.errorf("decoding int64 array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
		}
		if (i >= $.sliceLen(slice.value)) {
			// This is a slice that we only partially allocated.
			growSlice(__goscriptStatic17(), v, slice, length)
		}
		$.sliceElems(slice.value!)[$.sliceSlot(slice.value!, i)] = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeInt() : __goscript_decode.decoderState.prototype.decodeInt.call(state))
	}
	return true
}

export function decInt8Array(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return decInt8Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))), length, ovfl)
}

export function decInt8Slice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	let __goscriptTuple9: any = reflect.TypeAssert(__goscriptStatic18(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.VarRef<$.Slice<number>> = $.varRef((__goscriptTuple9[0] as $.Slice<number>))
	let ok = __goscriptTuple9[1]
	if (!ok) {
		// It is kind int8 but not type int8. TODO: We can handle this unsafely.
		return false
	}
	for (let i = 0; i < length; i++) {
		if (__goscript_decode.decBuffer.prototype.Len.call($.pointerValue<__goscript_decode.decoderState>(state).b) == 0) {
			__goscript_error.errorf("decoding int8 array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
		}
		if (i >= $.sliceLen(slice.value)) {
			// This is a slice that we only partially allocated.
			growSlice(__goscriptStatic19(), v, slice, length)
		}
		let x = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeInt() : __goscript_decode.decoderState.prototype.decodeInt.call(state))
		if ((x < -128n) || (127n < x)) {
			__goscript_error.error_(ovfl)
		}
		$.sliceElems(slice.value!)[$.sliceSlot(slice.value!, i)] = $.int(x, 8)
	}
	return true
}

export function decStringArray(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return decStringSlice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))), length, ovfl)
}

export function decStringSlice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	const state$: __goscript_decode.decoderState = state == null ? $.pointerTarget<__goscript_decode.decoderState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_decode.decoderState>(state)
	let __goscriptTuple10: any = reflect.TypeAssert(__goscriptStatic20(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.VarRef<$.Slice<string>> = $.varRef((__goscriptTuple10[0] as $.Slice<string>))
	let ok = __goscriptTuple10[1]
	if (!ok) {
		// It is kind string but not type string. TODO: We can handle this unsafely.
		return false
	}
	for (let i = 0; i < length; i++) {
		if (__goscript_decode.decBuffer.prototype.Len.call((state$ as __goscript_decode.decoderState).b) == 0) {
			__goscript_error.errorf("decoding string array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
		}
		if (i >= $.sliceLen(slice.value)) {
			// This is a slice that we only partially allocated.
			growSlice(__goscriptStatic21(), v, slice, length)
		}
		let u = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state))
		let n = $.int(u)
		if (((n < 0) || ($.uint64(n) != u)) || (n > __goscript_decode.decBuffer.prototype.Len.call((state$ as __goscript_decode.decoderState).b))) {
			__goscript_error.errorf("length of string exceeds input size (%d bytes)", $.arrayToSlice<any>([$.basicInterfaceValue(u, "uint64")]))
		}
		if (n > __goscript_decode.decBuffer.prototype.Len.call((state$ as __goscript_decode.decoderState).b)) {
			__goscript_error.errorf("string data too long for buffer: %d", $.arrayToSlice<any>([$.basicInterfaceValue(n, "int")]))
		}
		// Read the data.
		let data: $.Slice<number> = __goscript_decode.decBuffer.prototype.Bytes.call((state$ as __goscript_decode.decoderState).b)
		if ($.sliceLen(data) < n) {
			__goscript_error.errorf("invalid string length %d: exceeds input size %d", $.arrayToSlice<any>([$.basicInterfaceValue(n, "int"), $.basicInterfaceValue($.sliceLen(data), "int")]))
		}
		$.sliceElems(slice.value!)[$.sliceSlot(slice.value!, i)] = $.bytesToString($.goSlice(data, undefined, n))
		__goscript_decode.decBuffer.prototype.Drop.call((state$ as __goscript_decode.decoderState).b, n)
	}
	return true
}

export function decUintArray(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return decUintSlice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))), length, ovfl)
}

export function decUintSlice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	let __goscriptTuple11: any = reflect.TypeAssert(__goscriptStatic22(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.VarRef<$.Slice<number>> = $.varRef((__goscriptTuple11[0] as $.Slice<number>))
	let ok = __goscriptTuple11[1]
	if (!ok) {
		// It is kind uint but not type uint. TODO: We can handle this unsafely.
		return false
	}
	for (let i = 0; i < length; i++) {
		if (__goscript_decode.decBuffer.prototype.Len.call($.pointerValue<__goscript_decode.decoderState>(state).b) == 0) {
			__goscript_error.errorf("decoding uint array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
		}
		if (i >= $.sliceLen(slice.value)) {
			// This is a slice that we only partially allocated.
			growSlice(__goscriptStatic23(), v, slice, length)
		}
		let x = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state))
		/*TODO if math.MaxUint32 < x {
					error_(ovfl)
				}*/
		$.sliceElems(slice.value!)[$.sliceSlot(slice.value!, i)] = $.uint(x, 64)
	}
	return true
}

export function decUint16Array(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return decUint16Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))), length, ovfl)
}

export function decUint16Slice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	let __goscriptTuple12: any = reflect.TypeAssert(__goscriptStatic24(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.VarRef<$.Slice<number>> = $.varRef((__goscriptTuple12[0] as $.Slice<number>))
	let ok = __goscriptTuple12[1]
	if (!ok) {
		// It is kind uint16 but not type uint16. TODO: We can handle this unsafely.
		return false
	}
	for (let i = 0; i < length; i++) {
		if (__goscript_decode.decBuffer.prototype.Len.call($.pointerValue<__goscript_decode.decoderState>(state).b) == 0) {
			__goscript_error.errorf("decoding uint16 array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
		}
		if (i >= $.sliceLen(slice.value)) {
			// This is a slice that we only partially allocated.
			growSlice(__goscriptStatic25(), v, slice, length)
		}
		let x = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state))
		if (65535n < x) {
			__goscript_error.error_(ovfl)
		}
		$.sliceElems(slice.value!)[$.sliceSlot(slice.value!, i)] = $.uint(x, 16)
	}
	return true
}

export function decUint32Array(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return decUint32Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))), length, ovfl)
}

export function decUint32Slice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	let __goscriptTuple13: any = reflect.TypeAssert(__goscriptStatic26(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.VarRef<$.Slice<number>> = $.varRef((__goscriptTuple13[0] as $.Slice<number>))
	let ok = __goscriptTuple13[1]
	if (!ok) {
		// It is kind uint32 but not type uint32. TODO: We can handle this unsafely.
		return false
	}
	for (let i = 0; i < length; i++) {
		if (__goscript_decode.decBuffer.prototype.Len.call($.pointerValue<__goscript_decode.decoderState>(state).b) == 0) {
			__goscript_error.errorf("decoding uint32 array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
		}
		if (i >= $.sliceLen(slice.value)) {
			// This is a slice that we only partially allocated.
			growSlice(__goscriptStatic27(), v, slice, length)
		}
		let x = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state))
		if (4294967295n < x) {
			__goscript_error.error_(ovfl)
		}
		$.sliceElems(slice.value!)[$.sliceSlot(slice.value!, i)] = $.uint(x, 32)
	}
	return true
}

export function decUint64Array(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return decUint64Slice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))), length, ovfl)
}

export function decUint64Slice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	let __goscriptTuple14: any = reflect.TypeAssert(__goscriptStatic28(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.VarRef<$.Slice<bigint>> = $.varRef((__goscriptTuple14[0] as $.Slice<bigint>))
	let ok = __goscriptTuple14[1]
	if (!ok) {
		// It is kind uint64 but not type uint64. TODO: We can handle this unsafely.
		return false
	}
	for (let i = 0; i < length; i++) {
		if (__goscript_decode.decBuffer.prototype.Len.call($.pointerValue<__goscript_decode.decoderState>(state).b) == 0) {
			__goscript_error.errorf("decoding uint64 array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
		}
		if (i >= $.sliceLen(slice.value)) {
			// This is a slice that we only partially allocated.
			growSlice(__goscriptStatic29(), v, slice, length)
		}
		$.sliceElems(slice.value!)[$.sliceSlot(slice.value!, i)] = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state))
	}
	return true
}

export function decUintptrArray(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	// Can only slice if it is addressable.
	if (!$.markAsStructValue($.cloneStructValue(v)).CanAddr()) {
		return false
	}
	return decUintptrSlice(state, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Slice(0, $.markAsStructValue($.cloneStructValue(v)).Len()))), length, ovfl)
}

export function decUintptrSlice(state: __goscript_decode.decoderState | $.VarRef<__goscript_decode.decoderState> | null, v: reflect.Value, length: number, ovfl: $.GoError): boolean {
	let __goscriptTuple15: any = reflect.TypeAssert(__goscriptStatic30(), $.markAsStructValue($.cloneStructValue(v)))
	let slice: $.VarRef<$.Slice<number>> = $.varRef((__goscriptTuple15[0] as $.Slice<number>))
	let ok = __goscriptTuple15[1]
	if (!ok) {
		// It is kind uintptr but not type uintptr. TODO: We can handle this unsafely.
		return false
	}
	for (let i = 0; i < length; i++) {
		if (__goscript_decode.decBuffer.prototype.Len.call($.pointerValue<__goscript_decode.decoderState>(state).b) == 0) {
			__goscript_error.errorf("decoding uintptr array or slice: length exceeds input size (%d elements)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "int")]))
		}
		if (i >= $.sliceLen(slice.value)) {
			// This is a slice that we only partially allocated.
			growSlice(__goscriptStatic31(), v, slice, length)
		}
		let x = (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_decode.decoderState).decodeUint() : __goscript_decode.decoderState.prototype.decodeUint.call(state))
		if (18446744073709551615n < x) {
			__goscript_error.error_(ovfl)
		}
		$.sliceElems(slice.value!)[$.sliceSlot(slice.value!, i)] = $.uint(x, 64)
	}
	return true
}

export function growSlice<E>(__typeArgs: $.GenericTypeArgs | undefined, v: reflect.Value, ps: $.VarRef<$.Slice<E>> | null, length: number): void {
	let zero: any = $.genericZero(__typeArgs, "E", null)
	let s: $.Slice<E> = $.pointerValue<$.Slice<E>>(ps)
	s = $.append(s, zero, $.appendZero(() => ($.genericZero(__typeArgs, "E", null) as E)))
	let cp: number = $.cap(s)
	if (cp > length) {
		cp = length
	}
	s = $.goSlice(s, undefined, cp)
	$.markAsStructValue($.cloneStructValue(v)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(s, "[]E", /* @__PURE__ */ $.sliceType(__typeArgs?.["E"]?.type ?? { kind: $.TypeKind.Interface, methods: [] }))))))
	ps!.value = s
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool")), zero: () => null }})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("bool"), zero: () => false }})
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex64")), zero: () => null }})
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("complex64"), zero: () => $.complex(0, 0) }})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("complex128")), zero: () => null }})
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("complex128"), zero: () => $.complex(0, 0) }})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32")), zero: () => null }})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("float32"), zero: () => 0 }})
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64")), zero: () => null }})
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("float64"), zero: () => 0 }})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), zero: () => null }})
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("int"), zero: () => 0 }})
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int16")), zero: () => null }})
}

var __goscriptStatic13$value: any
function __goscriptStatic13(): any {
	return __goscriptStatic13$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("int16"), zero: () => 0 }})
}

var __goscriptStatic14$value: any
function __goscriptStatic14(): any {
	return __goscriptStatic14$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), zero: () => null }})
}

var __goscriptStatic15$value: any
function __goscriptStatic15(): any {
	return __goscriptStatic15$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("int32"), zero: () => 0 }})
}

var __goscriptStatic16$value: any
function __goscriptStatic16(): any {
	return __goscriptStatic16$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")), zero: () => null }})
}

var __goscriptStatic17$value: any
function __goscriptStatic17(): any {
	return __goscriptStatic17$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("int64"), zero: () => 0n }})
}

var __goscriptStatic18$value: any
function __goscriptStatic18(): any {
	return __goscriptStatic18$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int8")), zero: () => null }})
}

var __goscriptStatic19$value: any
function __goscriptStatic19(): any {
	return __goscriptStatic19$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("int8"), zero: () => 0 }})
}

var __goscriptStatic20$value: any
function __goscriptStatic20(): any {
	return __goscriptStatic20$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), zero: () => null }})
}

var __goscriptStatic21$value: any
function __goscriptStatic21(): any {
	return __goscriptStatic21$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("string"), zero: () => "" }})
}

var __goscriptStatic22$value: any
function __goscriptStatic22(): any {
	return __goscriptStatic22$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint")), zero: () => null }})
}

var __goscriptStatic23$value: any
function __goscriptStatic23(): any {
	return __goscriptStatic23$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("uint"), zero: () => 0 }})
}

var __goscriptStatic24$value: any
function __goscriptStatic24(): any {
	return __goscriptStatic24$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16")), zero: () => null }})
}

var __goscriptStatic25$value: any
function __goscriptStatic25(): any {
	return __goscriptStatic25$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("uint16"), zero: () => 0 }})
}

var __goscriptStatic26$value: any
function __goscriptStatic26(): any {
	return __goscriptStatic26$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")), zero: () => null }})
}

var __goscriptStatic27$value: any
function __goscriptStatic27(): any {
	return __goscriptStatic27$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("uint32"), zero: () => 0 }})
}

var __goscriptStatic28$value: any
function __goscriptStatic28(): any {
	return __goscriptStatic28$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64")), zero: () => null }})
}

var __goscriptStatic29$value: any
function __goscriptStatic29(): any {
	return __goscriptStatic29$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("uint64"), zero: () => 0n }})
}

var __goscriptStatic30$value: any
function __goscriptStatic30(): any {
	return __goscriptStatic30$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uintptr")), zero: () => null }})
}

var __goscriptStatic31$value: any
function __goscriptStatic31(): any {
	return __goscriptStatic31$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, E: { type: /* @__PURE__ */ $.basicType("uintptr"), zero: () => 0 }})
}
