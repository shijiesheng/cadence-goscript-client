// Generated file based on buffer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("log/slog/internal/buffer", ["buffer.Buffer"])

export type Buffer = $.Slice<number>

$.registerNamedType("buffer.Buffer", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")));

$.registerNamedValueType(
	"*buffer.Buffer",
	{Free: (receiver: any, ...args: any[]) => (Buffer_Free as any)(receiver, ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (Buffer_Len as any)(receiver, ...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => (Buffer_Reset as any)(receiver, ...$.stripGenericTypeArgs(args)), SetLen: (receiver: any, ...args: any[]) => (Buffer_SetLen as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Buffer_String as any)(receiver, ...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => (Buffer_Write as any)(receiver, ...$.stripGenericTypeArgs(args)), WriteByte: (receiver: any, ...args: any[]) => (Buffer_WriteByte as any)(receiver, ...$.stripGenericTypeArgs(args)), WriteString: (receiver: any, ...args: any[]) => (Buffer_WriteString as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Free"), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("SetLen", [["n", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("WriteByte", [["c", /* @__PURE__ */ $.basicType("uint8")]], ["error"]), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("int"), "error"])]
);

export let bufPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	let b: $.VarRef<$.Slice<number>> = $.varRef($.makeSlice<number>(0, 1024, "byte"))
	return $.namedValueInterfaceValue<any>(b, "*buffer.Buffer", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_bufPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(bufPool.value, __goscriptValue)
}

export async function New(): globalThis.Promise<$.VarRef<Buffer> | null> {
	return $.mustTypeAssert<$.VarRef<Buffer> | null>(await bufPool.value.Get(), /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "buffer.Buffer")))
}

export function Buffer_Free(b: $.VarRef<Buffer> | null): void {
	// To reduce peak allocation, return only smaller buffers to the pool.
	const maxBufferSize: number = 16384
	if ($.cap(($.pointerValue<Buffer>(b) as Buffer)) <= 16384) {
		b!.value = ($.goSlice(($.pointerValue<Buffer>(b)), undefined, 0) as Buffer)
		bufPool.value.Put($.namedValueInterfaceValue<any>(b, "*buffer.Buffer", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}
}

export function Buffer_Reset(b: $.VarRef<Buffer> | null): void {
	Buffer_SetLen(b, 0)
}

export function Buffer_Write(b: $.VarRef<Buffer> | null, p: $.Slice<number>): [number, $.GoError] {
	b!.value = ($.appendSlice(($.pointerValue<Buffer>(b) as Buffer), p, $.byteSliceHint) as Buffer)
	return [$.sliceLen(p), null]
}

export function Buffer_WriteString(b: $.VarRef<Buffer> | null, s: string): [number, $.GoError] {
	b!.value = ($.appendSlice(($.pointerValue<Buffer>(b) as Buffer), $.stringToBytes(s), $.byteSliceHint) as Buffer)
	return [$.stringLen(s), null]
}

export function Buffer_WriteByte(b: $.VarRef<Buffer> | null, c: number): $.GoError {
	b!.value = ($.append(($.pointerValue<Buffer>(b) as Buffer), $.uint(c, 8), $.byteSliceHint) as Buffer)
	return null
}

export function Buffer_String(b: $.VarRef<Buffer> | null): string {
	return $.bytesToString($.pointerValue<Buffer>(b))
}

export function Buffer_Len(b: $.VarRef<Buffer> | null): number {
	return $.sliceLen(($.pointerValue<Buffer>(b) as Buffer))
}

export function Buffer_SetLen(b: $.VarRef<Buffer> | null, n: number): void {
	b!.value = ($.goSlice(($.pointerValue<Buffer>(b)), undefined, n) as Buffer)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Free: (receiver: any, ...args: any[]) => (Buffer_Free as any)(receiver, ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (Buffer_Len as any)(receiver, ...$.stripGenericTypeArgs(args)), Reset: (receiver: any, ...args: any[]) => (Buffer_Reset as any)(receiver, ...$.stripGenericTypeArgs(args)), SetLen: (receiver: any, ...args: any[]) => (Buffer_SetLen as any)(receiver, ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (Buffer_String as any)(receiver, ...$.stripGenericTypeArgs(args)), Write: (receiver: any, ...args: any[]) => (Buffer_Write as any)(receiver, ...$.stripGenericTypeArgs(args)), WriteByte: (receiver: any, ...args: any[]) => (Buffer_WriteByte as any)(receiver, ...$.stripGenericTypeArgs(args)), WriteString: (receiver: any, ...args: any[]) => (Buffer_WriteString as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "buffer.Buffer")))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Free"), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Reset"), $.methodSignature("SetLen", [["n", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("WriteByte", [["c", /* @__PURE__ */ $.basicType("uint8")]], ["error"]), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("int"), "error"])])
}
