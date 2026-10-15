// Generated file based on marshaler.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as time from "@goscript/time/index.js"

import type * as __goscript_encoder from "./encoder.gs.ts"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.ObjectMarshaler", "zapcore.ObjectMarshalerFunc", "zapcore.ArrayMarshaler", "zapcore.ArrayMarshalerFunc"])

export type ObjectMarshaler = {
	MarshalLogObject(_p0: __goscript_encoder.ObjectEncoder | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"zapcore.ObjectMarshaler",
	null,
	[$.methodSignature("MarshalLogObject", ["zapcore.ObjectEncoder"], ["error"])]
);

export type ObjectMarshalerFunc = ((_p0: __goscript_encoder.ObjectEncoder | null) => $.GoError | globalThis.Promise<$.GoError>) | null

$.registerNamedValueType(
	"zapcore.ObjectMarshalerFunc",
	{MarshalLogObject: (receiver: any, ...args: any[]) => (ObjectMarshalerFunc_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zapcore.ObjectMarshalerFunc",
	{MarshalLogObject: (receiver: any, ...args: any[]) => (ObjectMarshalerFunc_MarshalLogObject as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"])]
);

export type ArrayMarshaler = {
	MarshalLogArray(_p0: __goscript_encoder.ArrayEncoder | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"zapcore.ArrayMarshaler",
	null,
	[$.methodSignature("MarshalLogArray", ["zapcore.ArrayEncoder"], ["error"])]
);

export type ArrayMarshalerFunc = ((_p0: __goscript_encoder.ArrayEncoder | null) => $.GoError | globalThis.Promise<$.GoError>) | null

$.registerNamedValueType(
	"zapcore.ArrayMarshalerFunc",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (ArrayMarshalerFunc_MarshalLogArray as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["enc", "zapcore.ArrayEncoder"]], ["error"])]
);

$.registerNamedValueType(
	"*zapcore.ArrayMarshalerFunc",
	{MarshalLogArray: (receiver: any, ...args: any[]) => (ArrayMarshalerFunc_MarshalLogArray as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("MarshalLogArray", [["enc", "zapcore.ArrayEncoder"]], ["error"])]
);

export async function ObjectMarshalerFunc_MarshalLogObject(f: ObjectMarshalerFunc | null, enc: __goscript_encoder.ObjectEncoder | null): globalThis.Promise<$.GoError> {
	return f!(enc)
}

export async function ArrayMarshalerFunc_MarshalLogArray(f: ArrayMarshalerFunc | null, enc: __goscript_encoder.ArrayEncoder | null): globalThis.Promise<$.GoError> {
	return f!(enc)
}

var __goscriptAwait: any
