// Generated file based on sortkeys.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sort from "@goscript/sort/index.js"
import "@goscript/sort/index.js"

$.registerTypePackagePath("github.com/gogo/protobuf/sortkeys", ["sortkeys.BoolSlice", "sortkeys.Int64Slice", "sortkeys.Int32Slice", "sortkeys.Uint64Slice", "sortkeys.Uint32Slice", "sortkeys.Float32Slice"])

export type BoolSlice = $.Slice<boolean>

$.registerNamedType("sortkeys.BoolSlice", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool")));

$.registerNamedValueType(
	"sortkeys.BoolSlice",
	{Len: (receiver: any, ...args: any[]) => (BoolSlice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (BoolSlice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (BoolSlice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*sortkeys.BoolSlice",
	{Len: (receiver: any, ...args: any[]) => (BoolSlice_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (BoolSlice_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (BoolSlice_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export type Int64Slice = $.Slice<bigint>

$.registerNamedType("sortkeys.Int64Slice", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64")));

$.registerNamedValueType(
	"sortkeys.Int64Slice",
	{Len: (receiver: any, ...args: any[]) => (Int64Slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Int64Slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Int64Slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*sortkeys.Int64Slice",
	{Len: (receiver: any, ...args: any[]) => (Int64Slice_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Int64Slice_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Int64Slice_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export type Int32Slice = $.Slice<number>

$.registerNamedType("sortkeys.Int32Slice", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")));

$.registerNamedValueType(
	"sortkeys.Int32Slice",
	{Len: (receiver: any, ...args: any[]) => (Int32Slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Int32Slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Int32Slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*sortkeys.Int32Slice",
	{Len: (receiver: any, ...args: any[]) => (Int32Slice_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Int32Slice_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Int32Slice_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export type Uint64Slice = $.Slice<bigint>

$.registerNamedType("sortkeys.Uint64Slice", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64")));

$.registerNamedValueType(
	"sortkeys.Uint64Slice",
	{Len: (receiver: any, ...args: any[]) => (Uint64Slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Uint64Slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Uint64Slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*sortkeys.Uint64Slice",
	{Len: (receiver: any, ...args: any[]) => (Uint64Slice_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Uint64Slice_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Uint64Slice_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export type Uint32Slice = $.Slice<number>

$.registerNamedType("sortkeys.Uint32Slice", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32")));

$.registerNamedValueType(
	"sortkeys.Uint32Slice",
	{Len: (receiver: any, ...args: any[]) => (Uint32Slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Uint32Slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Uint32Slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*sortkeys.Uint32Slice",
	{Len: (receiver: any, ...args: any[]) => (Uint32Slice_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Uint32Slice_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Uint32Slice_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export type Float32Slice = $.Slice<number>

$.registerNamedType("sortkeys.Float32Slice", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32")));

$.registerNamedValueType(
	"sortkeys.Float32Slice",
	{Len: (receiver: any, ...args: any[]) => (Float32Slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Float32Slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Float32Slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

$.registerNamedValueType(
	"*sortkeys.Float32Slice",
	{Len: (receiver: any, ...args: any[]) => (Float32Slice_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Float32Slice_Less as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Float32Slice_Swap as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])]
);

export function Strings(l: $.Slice<string>): void {
	sort.Strings(l)
}

export function Float64s(l: $.Slice<number>): void {
	sort.Float64s(l)
}

export async function Float32s(l: $.Slice<number>): globalThis.Promise<void> {
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((l as Float32Slice), "sortkeys.Float32Slice", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))!)
}

export async function Int64s(l: $.Slice<bigint>): globalThis.Promise<void> {
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((l as Int64Slice), "sortkeys.Int64Slice", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()))!)
}

export async function Int32s(l: $.Slice<number>): globalThis.Promise<void> {
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((l as Int32Slice), "sortkeys.Int32Slice", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic2()))!)
}

export async function Uint64s(l: $.Slice<bigint>): globalThis.Promise<void> {
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((l as Uint64Slice), "sortkeys.Uint64Slice", __goscriptStatic7(), __goscriptStatic8(), __goscriptStatic2()))!)
}

export async function Uint32s(l: $.Slice<number>): globalThis.Promise<void> {
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((l as Uint32Slice), "sortkeys.Uint32Slice", __goscriptStatic9(), __goscriptStatic10(), __goscriptStatic2()))!)
}

export async function Bools(l: $.Slice<boolean>): globalThis.Promise<void> {
	await sort.Sort($.pointerValueOrNil($.namedValueInterfaceValue<sort.Interface | null>((l as BoolSlice), "sortkeys.BoolSlice", __goscriptStatic11(), __goscriptStatic12(), __goscriptStatic2()))!)
}

export function BoolSlice_Len(p: BoolSlice): number {
	return $.sliceLen((p as BoolSlice))
}

export function BoolSlice_Less(p: BoolSlice, i: number, j: number): boolean {
	return $.arrayIndex(p!, j)
}

export function BoolSlice_Swap(p: BoolSlice, i: number, j: number): void {
	let __goscriptAssign0_0: boolean = $.arrayIndex(p!, j)
	let __goscriptAssign0_1: boolean = $.arrayIndex(p!, i)
	$.sliceElems(p!)[$.sliceSlot(p!, i)] = __goscriptAssign0_0
	$.sliceElems(p!)[$.sliceSlot(p!, j)] = __goscriptAssign0_1
}

export function Int64Slice_Len(p: Int64Slice): number {
	return $.sliceLen((p as Int64Slice))
}

export function Int64Slice_Less(p: Int64Slice, i: number, j: number): boolean {
	return $.arrayIndex(p!, i) < $.arrayIndex(p!, j)
}

export function Int64Slice_Swap(p: Int64Slice, i: number, j: number): void {
	let __goscriptAssign1_0: bigint = $.arrayIndex(p!, j)
	let __goscriptAssign1_1: bigint = $.arrayIndex(p!, i)
	$.sliceElems(p!)[$.sliceSlot(p!, i)] = __goscriptAssign1_0
	$.sliceElems(p!)[$.sliceSlot(p!, j)] = __goscriptAssign1_1
}

export function Int32Slice_Len(p: Int32Slice): number {
	return $.sliceLen((p as Int32Slice))
}

export function Int32Slice_Less(p: Int32Slice, i: number, j: number): boolean {
	return $.arrayIndex(p!, i) < $.arrayIndex(p!, j)
}

export function Int32Slice_Swap(p: Int32Slice, i: number, j: number): void {
	let __goscriptAssign2_0: number = $.arrayIndex(p!, j)
	let __goscriptAssign2_1: number = $.arrayIndex(p!, i)
	$.sliceElems(p!)[$.sliceSlot(p!, i)] = __goscriptAssign2_0
	$.sliceElems(p!)[$.sliceSlot(p!, j)] = __goscriptAssign2_1
}

export function Uint64Slice_Len(p: Uint64Slice): number {
	return $.sliceLen((p as Uint64Slice))
}

export function Uint64Slice_Less(p: Uint64Slice, i: number, j: number): boolean {
	return $.arrayIndex(p!, i) < $.arrayIndex(p!, j)
}

export function Uint64Slice_Swap(p: Uint64Slice, i: number, j: number): void {
	let __goscriptAssign3_0: bigint = $.arrayIndex(p!, j)
	let __goscriptAssign3_1: bigint = $.arrayIndex(p!, i)
	$.sliceElems(p!)[$.sliceSlot(p!, i)] = __goscriptAssign3_0
	$.sliceElems(p!)[$.sliceSlot(p!, j)] = __goscriptAssign3_1
}

export function Uint32Slice_Len(p: Uint32Slice): number {
	return $.sliceLen((p as Uint32Slice))
}

export function Uint32Slice_Less(p: Uint32Slice, i: number, j: number): boolean {
	return $.arrayIndex(p!, i) < $.arrayIndex(p!, j)
}

export function Uint32Slice_Swap(p: Uint32Slice, i: number, j: number): void {
	let __goscriptAssign4_0: number = $.arrayIndex(p!, j)
	let __goscriptAssign4_1: number = $.arrayIndex(p!, i)
	$.sliceElems(p!)[$.sliceSlot(p!, i)] = __goscriptAssign4_0
	$.sliceElems(p!)[$.sliceSlot(p!, j)] = __goscriptAssign4_1
}

export function Float32Slice_Len(p: Float32Slice): number {
	return $.sliceLen((p as Float32Slice))
}

export function Float32Slice_Less(p: Float32Slice, i: number, j: number): boolean {
	return $.arrayIndex(p!, i) < $.arrayIndex(p!, j)
}

export function Float32Slice_Swap(p: Float32Slice, i: number, j: number): void {
	let __goscriptAssign5_0: number = $.arrayIndex(p!, j)
	let __goscriptAssign5_1: number = $.arrayIndex(p!, i)
	$.sliceElems(p!)[$.sliceSlot(p!, i)] = __goscriptAssign5_0
	$.sliceElems(p!)[$.sliceSlot(p!, j)] = __goscriptAssign5_1
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Len: (receiver: any, ...args: any[]) => (Float32Slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Float32Slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Float32Slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float32"), "sortkeys.Float32Slice"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Len: (receiver: any, ...args: any[]) => (Int64Slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Int64Slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Int64Slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64"), "sortkeys.Int64Slice"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({Len: (receiver: any, ...args: any[]) => (Int32Slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Int32Slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Int32Slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32"), "sortkeys.Int32Slice"))
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ({Len: (receiver: any, ...args: any[]) => (Uint64Slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Uint64Slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Uint64Slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint64"), "sortkeys.Uint64Slice"))
}

var __goscriptStatic9$value: any
function __goscriptStatic9(): any {
	return __goscriptStatic9$value ??= ({Len: (receiver: any, ...args: any[]) => (Uint32Slice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (Uint32Slice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (Uint32Slice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic10$value: any
function __goscriptStatic10(): any {
	return __goscriptStatic10$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint32"), "sortkeys.Uint32Slice"))
}

var __goscriptStatic11$value: any
function __goscriptStatic11(): any {
	return __goscriptStatic11$value ??= ({Len: (receiver: any, ...args: any[]) => (BoolSlice_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (BoolSlice_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (BoolSlice_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic12$value: any
function __goscriptStatic12(): any {
	return __goscriptStatic12$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool"), "sortkeys.BoolSlice"))
}
