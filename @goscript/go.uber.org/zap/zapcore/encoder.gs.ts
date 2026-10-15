// Generated file based on encoder.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import * as buffer from "@goscript/go.uber.org/zap/buffer/index.js"

import * as color from "@goscript/go.uber.org/zap/internal/color/index.js"

import * as __goscript_entry from "./entry.gs.ts"

import * as __goscript_field from "./field.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import * as __goscript_level_strings from "./level_strings.gs.ts"

import type * as __goscript_marshaler from "./marshaler.gs.ts"

import type * as __goscript_reflected_encoder from "./reflected_encoder.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/io/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/zap/buffer/index.js"
import "@goscript/go.uber.org/zap/internal/color/index.js"
import "./entry.gs.ts"
import "./field.gs.ts"
import "./level.gs.ts"
import "./level_strings.gs.ts"

$.registerTypePackagePath("go.uber.org/zap/zapcore", ["zapcore.LevelEncoder", "zapcore.TimeEncoder", "zapcore.appendTimeEncoder", "zapcore.DurationEncoder", "zapcore.CallerEncoder", "zapcore.NameEncoder", "zapcore.EncoderConfig", "zapcore.ObjectEncoder", "zapcore.ArrayEncoder", "zapcore.PrimitiveArrayEncoder", "zapcore.Encoder"])

export type LevelEncoder = ((_p0: __goscript_level.Level, _p1: PrimitiveArrayEncoder | null) => void) | null

$.registerNamedValueType(
	"*zapcore.LevelEncoder",
	{UnmarshalText: (receiver: any, ...args: any[]) => (LevelEncoder_UnmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type TimeEncoder = ((_p0: time.Time, _p1: PrimitiveArrayEncoder | null) => void) | null

$.registerNamedValueType(
	"*zapcore.TimeEncoder",
	{UnmarshalJSON: (receiver: any, ...args: any[]) => (TimeEncoder_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args)), UnmarshalText: (receiver: any, ...args: any[]) => (TimeEncoder_UnmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args)), UnmarshalYAML: (receiver: any, ...args: any[]) => (TimeEncoder_UnmarshalYAML as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("UnmarshalJSON", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("UnmarshalYAML", [["unmarshal", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: ["error"] } as $.FunctionTypeInfo)]], ["error"])]
);

export type DurationEncoder = ((_p0: time.Duration, _p1: PrimitiveArrayEncoder | null) => void) | null

$.registerNamedValueType(
	"*zapcore.DurationEncoder",
	{UnmarshalText: (receiver: any, ...args: any[]) => (DurationEncoder_UnmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type CallerEncoder = ((_p0: __goscript_entry.EntryCaller, _p1: PrimitiveArrayEncoder | null) => void) | null

$.registerNamedValueType(
	"*zapcore.CallerEncoder",
	{UnmarshalText: (receiver: any, ...args: any[]) => (CallerEncoder_UnmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type NameEncoder = ((_p0: string, _p1: PrimitiveArrayEncoder | null) => void) | null

$.registerNamedValueType(
	"*zapcore.NameEncoder",
	{UnmarshalText: (receiver: any, ...args: any[]) => (NameEncoder_UnmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("UnmarshalText", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type ObjectEncoder = {
	AddArray(key: string, marshaler: __goscript_marshaler.ArrayMarshaler | null): $.GoError | globalThis.Promise<$.GoError>
	AddBinary(key: string, value: $.Slice<number>): void
	AddBool(key: string, value: boolean): void
	AddByteString(key: string, value: $.Slice<number>): void
	AddComplex128(key: string, value: $.Complex): void
	AddComplex64(key: string, value: $.Complex): void
	AddDuration(key: string, value: time.Duration): void
	AddFloat32(key: string, value: number): void
	AddFloat64(key: string, value: number): void
	AddInt(key: string, value: number): void
	AddInt16(key: string, value: number): void
	AddInt32(key: string, value: number): void
	AddInt64(key: string, value: bigint): void
	AddInt8(key: string, value: number): void
	AddObject(key: string, marshaler: __goscript_marshaler.ObjectMarshaler | null): $.GoError | globalThis.Promise<$.GoError>
	AddReflected(key: string, value: any): $.GoError | globalThis.Promise<$.GoError>
	AddString(key: string, value: string): void
	AddTime(key: string, value: time.Time): void
	AddUint(key: string, value: number): void
	AddUint16(key: string, value: number): void
	AddUint32(key: string, value: number): void
	AddUint64(key: string, value: bigint): void
	AddUint8(key: string, value: number): void
	AddUintptr(key: string, value: number): void
	OpenNamespace(key: string): void
}

$.registerInterfaceType(
	"zapcore.ObjectEncoder",
	null,
	[$.methodSignature("AddArray", [["key", /* @__PURE__ */ $.basicType("string")], ["marshaler", "zapcore.ArrayMarshaler"]], ["error"]), $.methodSignature("AddBinary", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("AddBool", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("AddByteString", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("AddComplex128", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("complex128")]]), $.methodSignature("AddComplex64", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("complex64")]]), $.methodSignature("AddDuration", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int64", "time.Duration")]]), $.methodSignature("AddFloat32", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("float32")]]), $.methodSignature("AddFloat64", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("float64")]]), $.methodSignature("AddInt", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("AddInt16", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int16")]]), $.methodSignature("AddInt32", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("AddInt64", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int64")]]), $.methodSignature("AddInt8", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int8")]]), $.methodSignature("AddObject", [["key", /* @__PURE__ */ $.basicType("string")], ["marshaler", "zapcore.ObjectMarshaler"]], ["error"]), $.methodSignature("AddReflected", [["key", /* @__PURE__ */ $.basicType("string")], ["value", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("AddString", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("AddTime", [["key", /* @__PURE__ */ $.basicType("string")], ["value", "time.Time"]]), $.methodSignature("AddUint", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uint")]]), $.methodSignature("AddUint16", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uint16")]]), $.methodSignature("AddUint32", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uint32")]]), $.methodSignature("AddUint64", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uint64")]]), $.methodSignature("AddUint8", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uint8")]]), $.methodSignature("AddUintptr", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uintptr")]]), $.methodSignature("OpenNamespace", [["key", /* @__PURE__ */ $.basicType("string")]])]
);

export type ArrayEncoder = {
	AppendArray(_p0: __goscript_marshaler.ArrayMarshaler | null): $.GoError | globalThis.Promise<$.GoError>
	AppendBool(_p0: boolean): void
	AppendByteString(_p0: $.Slice<number>): void
	AppendComplex128(_p0: $.Complex): void
	AppendComplex64(_p0: $.Complex): void
	AppendDuration(_p0: time.Duration): void
	AppendFloat32(_p0: number): void
	AppendFloat64(_p0: number): void
	AppendInt(_p0: number): void
	AppendInt16(_p0: number): void
	AppendInt32(_p0: number): void
	AppendInt64(_p0: bigint): void
	AppendInt8(_p0: number): void
	AppendObject(_p0: __goscript_marshaler.ObjectMarshaler | null): $.GoError | globalThis.Promise<$.GoError>
	AppendReflected(value: any): $.GoError | globalThis.Promise<$.GoError>
	AppendString(_p0: string): void
	AppendTime(_p0: time.Time): void
	AppendUint(_p0: number): void
	AppendUint16(_p0: number): void
	AppendUint32(_p0: number): void
	AppendUint64(_p0: bigint): void
	AppendUint8(_p0: number): void
	AppendUintptr(_p0: number): void
}

$.registerInterfaceType(
	"zapcore.ArrayEncoder",
	null,
	[$.methodSignature("AppendArray", ["zapcore.ArrayMarshaler"], ["error"]), $.methodSignature("AppendBool", [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("AppendByteString", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("AppendComplex128", [/* @__PURE__ */ $.basicType("complex128")]), $.methodSignature("AppendComplex64", [/* @__PURE__ */ $.basicType("complex64")]), $.methodSignature("AppendDuration", [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("AppendFloat32", [/* @__PURE__ */ $.basicType("float32")]), $.methodSignature("AppendFloat64", [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("AppendInt", [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("AppendInt16", [/* @__PURE__ */ $.basicType("int16")]), $.methodSignature("AppendInt32", [/* @__PURE__ */ $.basicType("int32")]), $.methodSignature("AppendInt64", [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("AppendInt8", [/* @__PURE__ */ $.basicType("int8")]), $.methodSignature("AppendObject", ["zapcore.ObjectMarshaler"], ["error"]), $.methodSignature("AppendReflected", [["value", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("AppendString", [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("AppendTime", ["time.Time"]), $.methodSignature("AppendUint", [/* @__PURE__ */ $.basicType("uint")]), $.methodSignature("AppendUint16", [/* @__PURE__ */ $.basicType("uint16")]), $.methodSignature("AppendUint32", [/* @__PURE__ */ $.basicType("uint32")]), $.methodSignature("AppendUint64", [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("AppendUint8", [/* @__PURE__ */ $.basicType("uint8")]), $.methodSignature("AppendUintptr", [/* @__PURE__ */ $.basicType("uintptr")])]
);

export type PrimitiveArrayEncoder = {
	AppendBool(_p0: boolean): void
	AppendByteString(_p0: $.Slice<number>): void
	AppendComplex128(_p0: $.Complex): void
	AppendComplex64(_p0: $.Complex): void
	AppendFloat32(_p0: number): void
	AppendFloat64(_p0: number): void
	AppendInt(_p0: number): void
	AppendInt16(_p0: number): void
	AppendInt32(_p0: number): void
	AppendInt64(_p0: bigint): void
	AppendInt8(_p0: number): void
	AppendString(_p0: string): void
	AppendUint(_p0: number): void
	AppendUint16(_p0: number): void
	AppendUint32(_p0: number): void
	AppendUint64(_p0: bigint): void
	AppendUint8(_p0: number): void
	AppendUintptr(_p0: number): void
}

$.registerInterfaceType(
	"zapcore.PrimitiveArrayEncoder",
	null,
	[$.methodSignature("AppendBool", [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("AppendByteString", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("AppendComplex128", [/* @__PURE__ */ $.basicType("complex128")]), $.methodSignature("AppendComplex64", [/* @__PURE__ */ $.basicType("complex64")]), $.methodSignature("AppendFloat32", [/* @__PURE__ */ $.basicType("float32")]), $.methodSignature("AppendFloat64", [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("AppendInt", [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("AppendInt16", [/* @__PURE__ */ $.basicType("int16")]), $.methodSignature("AppendInt32", [/* @__PURE__ */ $.basicType("int32")]), $.methodSignature("AppendInt64", [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("AppendInt8", [/* @__PURE__ */ $.basicType("int8")]), $.methodSignature("AppendString", [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("AppendUint", [/* @__PURE__ */ $.basicType("uint")]), $.methodSignature("AppendUint16", [/* @__PURE__ */ $.basicType("uint16")]), $.methodSignature("AppendUint32", [/* @__PURE__ */ $.basicType("uint32")]), $.methodSignature("AppendUint64", [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("AppendUint8", [/* @__PURE__ */ $.basicType("uint8")]), $.methodSignature("AppendUintptr", [/* @__PURE__ */ $.basicType("uintptr")])]
);

export type Encoder = {
	AddArray(key: string, marshaler: __goscript_marshaler.ArrayMarshaler | null): $.GoError | globalThis.Promise<$.GoError>
	AddBinary(key: string, value: $.Slice<number>): void
	AddBool(key: string, value: boolean): void
	AddByteString(key: string, value: $.Slice<number>): void
	AddComplex128(key: string, value: $.Complex): void
	AddComplex64(key: string, value: $.Complex): void
	AddDuration(key: string, value: time.Duration): void
	AddFloat32(key: string, value: number): void
	AddFloat64(key: string, value: number): void
	AddInt(key: string, value: number): void
	AddInt16(key: string, value: number): void
	AddInt32(key: string, value: number): void
	AddInt64(key: string, value: bigint): void
	AddInt8(key: string, value: number): void
	AddObject(key: string, marshaler: __goscript_marshaler.ObjectMarshaler | null): $.GoError | globalThis.Promise<$.GoError>
	AddReflected(key: string, value: any): $.GoError | globalThis.Promise<$.GoError>
	AddString(key: string, value: string): void
	AddTime(key: string, value: time.Time): void
	AddUint(key: string, value: number): void
	AddUint16(key: string, value: number): void
	AddUint32(key: string, value: number): void
	AddUint64(key: string, value: bigint): void
	AddUint8(key: string, value: number): void
	AddUintptr(key: string, value: number): void
	Clone(): Encoder | null | globalThis.Promise<Encoder | null>
	EncodeEntry(_p0: __goscript_entry.Entry, _p1: $.Slice<__goscript_field.Field>): [buffer.Buffer | $.VarRef<buffer.Buffer> | null, $.GoError] | globalThis.Promise<[buffer.Buffer | $.VarRef<buffer.Buffer> | null, $.GoError]>
	OpenNamespace(key: string): void
}

$.registerInterfaceType(
	"zapcore.Encoder",
	null,
	[$.methodSignature("AddArray", [["key", /* @__PURE__ */ $.basicType("string")], ["marshaler", "zapcore.ArrayMarshaler"]], ["error"]), $.methodSignature("AddBinary", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("AddBool", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("AddByteString", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("AddComplex128", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("complex128")]]), $.methodSignature("AddComplex64", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("complex64")]]), $.methodSignature("AddDuration", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int64", "time.Duration")]]), $.methodSignature("AddFloat32", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("float32")]]), $.methodSignature("AddFloat64", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("float64")]]), $.methodSignature("AddInt", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("AddInt16", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int16")]]), $.methodSignature("AddInt32", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int32")]]), $.methodSignature("AddInt64", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int64")]]), $.methodSignature("AddInt8", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("int8")]]), $.methodSignature("AddObject", [["key", /* @__PURE__ */ $.basicType("string")], ["marshaler", "zapcore.ObjectMarshaler"]], ["error"]), $.methodSignature("AddReflected", [["key", /* @__PURE__ */ $.basicType("string")], ["value", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("AddString", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("AddTime", [["key", /* @__PURE__ */ $.basicType("string")], ["value", "time.Time"]]), $.methodSignature("AddUint", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uint")]]), $.methodSignature("AddUint16", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uint16")]]), $.methodSignature("AddUint32", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uint32")]]), $.methodSignature("AddUint64", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uint64")]]), $.methodSignature("AddUint8", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uint8")]]), $.methodSignature("AddUintptr", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("uintptr")]]), $.methodSignature("Clone", [], ["zapcore.Encoder"]), $.methodSignature("EncodeEntry", ["zapcore.Entry", /* @__PURE__ */ $.sliceType("zapcore.Field")], [/* @__PURE__ */ $.pointerType("buffer.Buffer"), "error"]), $.methodSignature("OpenNamespace", [["key", /* @__PURE__ */ $.basicType("string")]])]
);

export class EncoderConfig {
	// Set the keys used for each log entry. If any key is empty, that portion
	// of the entry is omitted.
	public get MessageKey(): string {
		return this._fields.MessageKey
	}

	public set MessageKey(value: string) {
		this._fields.MessageKey = value
	}

	public get LevelKey(): string {
		return this._fields.LevelKey
	}

	public set LevelKey(value: string) {
		this._fields.LevelKey = value
	}

	public get TimeKey(): string {
		return this._fields.TimeKey
	}

	public set TimeKey(value: string) {
		this._fields.TimeKey = value
	}

	public get NameKey(): string {
		return this._fields.NameKey
	}

	public set NameKey(value: string) {
		this._fields.NameKey = value
	}

	public get CallerKey(): string {
		return this._fields.CallerKey
	}

	public set CallerKey(value: string) {
		this._fields.CallerKey = value
	}

	public get FunctionKey(): string {
		return this._fields.FunctionKey
	}

	public set FunctionKey(value: string) {
		this._fields.FunctionKey = value
	}

	public get StacktraceKey(): string {
		return this._fields.StacktraceKey
	}

	public set StacktraceKey(value: string) {
		this._fields.StacktraceKey = value
	}

	public get SkipLineEnding(): boolean {
		return this._fields.SkipLineEnding
	}

	public set SkipLineEnding(value: boolean) {
		this._fields.SkipLineEnding = value
	}

	public get LineEnding(): string {
		return this._fields.LineEnding
	}

	public set LineEnding(value: string) {
		this._fields.LineEnding = value
	}

	// Configure the primitive representations of common complex types. For
	// example, some users may want all time.Times serialized as floating-point
	// seconds since epoch, while others may prefer ISO8601 strings.
	public get EncodeLevel(): ((_p0: __goscript_level.Level, _p1: PrimitiveArrayEncoder | null) => void) | null {
		return this._fields.EncodeLevel
	}

	public set EncodeLevel(value: ((_p0: __goscript_level.Level, _p1: PrimitiveArrayEncoder | null) => void) | null) {
		this._fields.EncodeLevel = value
	}

	public get EncodeTime(): ((_p0: time.Time, _p1: PrimitiveArrayEncoder | null) => void) | null {
		return this._fields.EncodeTime
	}

	public set EncodeTime(value: ((_p0: time.Time, _p1: PrimitiveArrayEncoder | null) => void) | null) {
		this._fields.EncodeTime = value
	}

	public get EncodeDuration(): ((_p0: time.Duration, _p1: PrimitiveArrayEncoder | null) => void) | null {
		return this._fields.EncodeDuration
	}

	public set EncodeDuration(value: ((_p0: time.Duration, _p1: PrimitiveArrayEncoder | null) => void) | null) {
		this._fields.EncodeDuration = value
	}

	public get EncodeCaller(): ((_p0: __goscript_entry.EntryCaller, _p1: PrimitiveArrayEncoder | null) => void) | null {
		return this._fields.EncodeCaller
	}

	public set EncodeCaller(value: ((_p0: __goscript_entry.EntryCaller, _p1: PrimitiveArrayEncoder | null) => void) | null) {
		this._fields.EncodeCaller = value
	}

	// Unlike the other primitive type encoders, EncodeName is optional. The
	// zero value falls back to FullNameEncoder.
	public get EncodeName(): ((_p0: string, _p1: PrimitiveArrayEncoder | null) => void) | null {
		return this._fields.EncodeName
	}

	public set EncodeName(value: ((_p0: string, _p1: PrimitiveArrayEncoder | null) => void) | null) {
		this._fields.EncodeName = value
	}

	// Configure the encoder for interface{} type objects.
	// If not provided, objects are encoded using json.Encoder
	public get NewReflectedEncoder(): ((_p0: io.Writer | null) => __goscript_reflected_encoder.ReflectedEncoder | null | globalThis.Promise<__goscript_reflected_encoder.ReflectedEncoder | null>) | null {
		return this._fields.NewReflectedEncoder
	}

	public set NewReflectedEncoder(value: ((_p0: io.Writer | null) => __goscript_reflected_encoder.ReflectedEncoder | null | globalThis.Promise<__goscript_reflected_encoder.ReflectedEncoder | null>) | null) {
		this._fields.NewReflectedEncoder = value
	}

	// Configures the field separator used by the console encoder. Defaults
	// to tab.
	public get ConsoleSeparator(): string {
		return this._fields.ConsoleSeparator
	}

	public set ConsoleSeparator(value: string) {
		this._fields.ConsoleSeparator = value
	}

	public _fields: {
		MessageKey: string
		LevelKey: string
		TimeKey: string
		NameKey: string
		CallerKey: string
		FunctionKey: string
		StacktraceKey: string
		SkipLineEnding: boolean
		LineEnding: string
		EncodeLevel: ((_p0: __goscript_level.Level, _p1: PrimitiveArrayEncoder | null) => void) | null
		EncodeTime: ((_p0: time.Time, _p1: PrimitiveArrayEncoder | null) => void) | null
		EncodeDuration: ((_p0: time.Duration, _p1: PrimitiveArrayEncoder | null) => void) | null
		EncodeCaller: ((_p0: __goscript_entry.EntryCaller, _p1: PrimitiveArrayEncoder | null) => void) | null
		EncodeName: ((_p0: string, _p1: PrimitiveArrayEncoder | null) => void) | null
		NewReflectedEncoder: ((_p0: io.Writer | null) => __goscript_reflected_encoder.ReflectedEncoder | null | globalThis.Promise<__goscript_reflected_encoder.ReflectedEncoder | null>) | null
		ConsoleSeparator: string
	}

	constructor(init?: Partial<{MessageKey?: string, LevelKey?: string, TimeKey?: string, NameKey?: string, CallerKey?: string, FunctionKey?: string, StacktraceKey?: string, SkipLineEnding?: boolean, LineEnding?: string, EncodeLevel?: ((_p0: __goscript_level.Level, _p1: PrimitiveArrayEncoder | null) => void) | null, EncodeTime?: ((_p0: time.Time, _p1: PrimitiveArrayEncoder | null) => void) | null, EncodeDuration?: ((_p0: time.Duration, _p1: PrimitiveArrayEncoder | null) => void) | null, EncodeCaller?: ((_p0: __goscript_entry.EntryCaller, _p1: PrimitiveArrayEncoder | null) => void) | null, EncodeName?: ((_p0: string, _p1: PrimitiveArrayEncoder | null) => void) | null, NewReflectedEncoder?: ((_p0: io.Writer | null) => __goscript_reflected_encoder.ReflectedEncoder | null | globalThis.Promise<__goscript_reflected_encoder.ReflectedEncoder | null>) | null, ConsoleSeparator?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			MessageKey: init?.MessageKey ?? ("" as string),
			LevelKey: init?.LevelKey ?? ("" as string),
			TimeKey: init?.TimeKey ?? ("" as string),
			NameKey: init?.NameKey ?? ("" as string),
			CallerKey: init?.CallerKey ?? ("" as string),
			FunctionKey: init?.FunctionKey ?? ("" as string),
			StacktraceKey: init?.StacktraceKey ?? ("" as string),
			SkipLineEnding: init?.SkipLineEnding ?? (false as boolean),
			LineEnding: init?.LineEnding ?? ("" as string),
			EncodeLevel: init?.EncodeLevel ?? (null! as ((_p0: __goscript_level.Level, _p1: PrimitiveArrayEncoder | null) => void) | null),
			EncodeTime: init?.EncodeTime ?? (null! as ((_p0: time.Time, _p1: PrimitiveArrayEncoder | null) => void) | null),
			EncodeDuration: init?.EncodeDuration ?? (null! as ((_p0: time.Duration, _p1: PrimitiveArrayEncoder | null) => void) | null),
			EncodeCaller: init?.EncodeCaller ?? (null! as ((_p0: __goscript_entry.EntryCaller, _p1: PrimitiveArrayEncoder | null) => void) | null),
			EncodeName: init?.EncodeName ?? (null! as ((_p0: string, _p1: PrimitiveArrayEncoder | null) => void) | null),
			NewReflectedEncoder: init?.NewReflectedEncoder ?? (null! as ((_p0: io.Writer | null) => __goscript_reflected_encoder.ReflectedEncoder | null | globalThis.Promise<__goscript_reflected_encoder.ReflectedEncoder | null>) | null),
			ConsoleSeparator: init?.ConsoleSeparator ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EncoderConfig {
		return new EncoderConfig(this, true)
	}

	public __goscriptAssign(source: EncoderConfig): void {
		const target = this._fields
		const values = source._fields
		target.MessageKey = values.MessageKey
		target.LevelKey = values.LevelKey
		target.TimeKey = values.TimeKey
		target.NameKey = values.NameKey
		target.CallerKey = values.CallerKey
		target.FunctionKey = values.FunctionKey
		target.StacktraceKey = values.StacktraceKey
		target.SkipLineEnding = values.SkipLineEnding
		target.LineEnding = values.LineEnding
		target.EncodeLevel = values.EncodeLevel
		target.EncodeTime = values.EncodeTime
		target.EncodeDuration = values.EncodeDuration
		target.EncodeCaller = values.EncodeCaller
		target.EncodeName = values.EncodeName
		target.NewReflectedEncoder = values.NewReflectedEncoder
		target.ConsoleSeparator = values.ConsoleSeparator
	}

	static __typeInfo = $.registerStructType(
		"zapcore.EncoderConfig",
		() => new EncoderConfig(),
		() => [],
		EncoderConfig,
		() => [/* @__PURE__ */ $.structField("MessageKey", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"messageKey\" yaml:\"messageKey\"" }), /* @__PURE__ */ $.structField("LevelKey", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"levelKey\" yaml:\"levelKey\"" }), /* @__PURE__ */ $.structField("TimeKey", /* @__PURE__ */ $.basicType("string"), [2], 32, true, { tag: "json:\"timeKey\" yaml:\"timeKey\"" }), /* @__PURE__ */ $.structField("NameKey", /* @__PURE__ */ $.basicType("string"), [3], 48, true, { tag: "json:\"nameKey\" yaml:\"nameKey\"" }), /* @__PURE__ */ $.structField("CallerKey", /* @__PURE__ */ $.basicType("string"), [4], 64, true, { tag: "json:\"callerKey\" yaml:\"callerKey\"" }), /* @__PURE__ */ $.structField("FunctionKey", /* @__PURE__ */ $.basicType("string"), [5], 80, true, { tag: "json:\"functionKey\" yaml:\"functionKey\"" }), /* @__PURE__ */ $.structField("StacktraceKey", /* @__PURE__ */ $.basicType("string"), [6], 96, true, { tag: "json:\"stacktraceKey\" yaml:\"stacktraceKey\"" }), /* @__PURE__ */ $.structField("SkipLineEnding", /* @__PURE__ */ $.basicType("bool"), [7], 112, true, { tag: "json:\"skipLineEnding\" yaml:\"skipLineEnding\"" }), /* @__PURE__ */ $.structField("LineEnding", /* @__PURE__ */ $.basicType("string"), [8], 120, true, { tag: "json:\"lineEnding\" yaml:\"lineEnding\"" }), /* @__PURE__ */ $.structField("EncodeLevel", ({ kind: $.TypeKind.Function, name: "zapcore.LevelEncoder", params: [/* @__PURE__ */ $.basicType("int8", "zapcore.Level"), "zapcore.PrimitiveArrayEncoder"], results: [] } as $.FunctionTypeInfo), [9], 136, true, { tag: "json:\"levelEncoder\" yaml:\"levelEncoder\"" }), /* @__PURE__ */ $.structField("EncodeTime", ({ kind: $.TypeKind.Function, name: "zapcore.TimeEncoder", params: ["time.Time", "zapcore.PrimitiveArrayEncoder"], results: [] } as $.FunctionTypeInfo), [10], 144, true, { tag: "json:\"timeEncoder\" yaml:\"timeEncoder\"" }), /* @__PURE__ */ $.structField("EncodeDuration", ({ kind: $.TypeKind.Function, name: "zapcore.DurationEncoder", params: [/* @__PURE__ */ $.basicType("int64", "time.Duration"), "zapcore.PrimitiveArrayEncoder"], results: [] } as $.FunctionTypeInfo), [11], 152, true, { tag: "json:\"durationEncoder\" yaml:\"durationEncoder\"" }), /* @__PURE__ */ $.structField("EncodeCaller", ({ kind: $.TypeKind.Function, name: "zapcore.CallerEncoder", params: ["zapcore.EntryCaller", "zapcore.PrimitiveArrayEncoder"], results: [] } as $.FunctionTypeInfo), [12], 160, true, { tag: "json:\"callerEncoder\" yaml:\"callerEncoder\"" }), /* @__PURE__ */ $.structField("EncodeName", ({ kind: $.TypeKind.Function, name: "zapcore.NameEncoder", params: [/* @__PURE__ */ $.basicType("string"), "zapcore.PrimitiveArrayEncoder"], results: [] } as $.FunctionTypeInfo), [13], 168, true, { tag: "json:\"nameEncoder\" yaml:\"nameEncoder\"" }), /* @__PURE__ */ $.structField("NewReflectedEncoder", ({ kind: $.TypeKind.Function, params: ["io.Writer"], results: ["zapcore.ReflectedEncoder"] } as $.FunctionTypeInfo), [14], 176, true, { tag: "json:\"-\" yaml:\"-\"" }), /* @__PURE__ */ $.structField("ConsoleSeparator", /* @__PURE__ */ $.basicType("string"), [15], 184, true, { tag: "json:\"consoleSeparator\" yaml:\"consoleSeparator\"" })]
	)
}

export const DefaultLineEnding: string = "\n"

export const OmitKey: string = ""

export async function LowercaseLevelEncoder(l: __goscript_level.Level, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<PrimitiveArrayEncoder, null>) : $.pointerValue<Exclude<PrimitiveArrayEncoder, null>>(enc)).AppendString(await __goscript_level.Level_String(l)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function LowercaseColorLevelEncoder(l: __goscript_level.Level, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	let [s, ok] = $.mapGet<__goscript_level.Level, string, string>(__goscript_level_strings.__goscript_get__levelToLowercaseColorString(), l, "")
	if (!ok) {
		s = await color.Color_Add(__goscript_level_strings._unknownLevelColor, await __goscript_level.Level_String(l))
	}
	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<PrimitiveArrayEncoder, null>) : $.pointerValue<Exclude<PrimitiveArrayEncoder, null>>(enc)).AppendString(s), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function CapitalLevelEncoder(l: __goscript_level.Level, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<PrimitiveArrayEncoder, null>) : $.pointerValue<Exclude<PrimitiveArrayEncoder, null>>(enc)).AppendString(await __goscript_level.Level_CapitalString(l)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function CapitalColorLevelEncoder(l: __goscript_level.Level, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	let [s, ok] = $.mapGet<__goscript_level.Level, string, string>(__goscript_level_strings.__goscript_get__levelToCapitalColorString(), l, "")
	if (!ok) {
		s = await color.Color_Add(__goscript_level_strings._unknownLevelColor, await __goscript_level.Level_CapitalString(l))
	}
	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<PrimitiveArrayEncoder, null>) : $.pointerValue<Exclude<PrimitiveArrayEncoder, null>>(enc)).AppendString(s), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export function LevelEncoder_UnmarshalText(e: $.VarRef<LevelEncoder> | null, text: $.Slice<number>): $.GoError {
	switch ($.bytesToString(text)) {
		case "capital":
		{
			e!.value = CapitalLevelEncoder
			break
		}
		case "capitalColor":
		{
			e!.value = CapitalColorLevelEncoder
			break
		}
		case "color":
		{
			e!.value = LowercaseColorLevelEncoder
			break
		}
		default:
		{
			e!.value = LowercaseLevelEncoder
			break
		}
	}
	return null
}

export async function EpochTimeEncoder(t: time.Time, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	let nanos = $.markAsStructValue($.cloneStructValue(t)).UnixNano()
	let sec = globalThis.Number(nanos) / globalThis.Number(time.Second)
	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<PrimitiveArrayEncoder, null>) : $.pointerValue<Exclude<PrimitiveArrayEncoder, null>>(enc)).AppendFloat64(sec), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function EpochMillisTimeEncoder(t: time.Time, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	let nanos = $.markAsStructValue($.cloneStructValue(t)).UnixNano()
	let millis = globalThis.Number(nanos) / globalThis.Number(time.Millisecond)
	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<PrimitiveArrayEncoder, null>) : $.pointerValue<Exclude<PrimitiveArrayEncoder, null>>(enc)).AppendFloat64(millis), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function EpochNanosTimeEncoder(t: time.Time, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<PrimitiveArrayEncoder, null>) : $.pointerValue<Exclude<PrimitiveArrayEncoder, null>>(enc)).AppendInt64($.markAsStructValue($.cloneStructValue(t)).UnixNano()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function encodeTimeLayout(t: time.Time, layout: string, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	type appendTimeEncoder = {
		AppendTimeLayout(_p0: time.Time, _p1: string): void
	}

	$.registerInterfaceType(
		"zapcore.appendTimeEncoder",
		null,
		[$.methodSignature("AppendTimeLayout", ["time.Time", /* @__PURE__ */ $.basicType("string")])]
	);

	let __goscriptShadow0 = enc
	{
		let __goscriptTuple0: any = $.typeAssertTuple<appendTimeEncoder | null>(__goscriptShadow0, "zapcore.appendTimeEncoder")
		let __goscriptShadow1 = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			void (__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<appendTimeEncoder, null>) : $.pointerValue<Exclude<appendTimeEncoder, null>>(__goscriptShadow1)).AppendTimeLayout($.markAsStructValue($.cloneStructValue(t)), layout), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
	}

	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<PrimitiveArrayEncoder, null>) : $.pointerValue<Exclude<PrimitiveArrayEncoder, null>>(enc)).AppendString($.markAsStructValue($.cloneStructValue(t)).Format(layout)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function ISO8601TimeEncoder(t: time.Time, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	await encodeTimeLayout(t, "2006-01-02T15:04:05.000Z0700", enc)
}

export async function RFC3339TimeEncoder(t: time.Time, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	await encodeTimeLayout(t, time.RFC3339, enc)
}

export async function RFC3339NanoTimeEncoder(t: time.Time, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	await encodeTimeLayout(t, time.RFC3339Nano, enc)
}

export function TimeEncoderOfLayout(layout: string): TimeEncoder | null {
	return $.functionValue(async (t: time.Time, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> => {
		await encodeTimeLayout(t, layout, enc)
	}, ({ kind: $.TypeKind.Function, params: ["time.Time", "zapcore.PrimitiveArrayEncoder"], results: [] } as $.FunctionTypeInfo))
}

export function TimeEncoder_UnmarshalText(e: $.VarRef<TimeEncoder> | null, text: $.Slice<number>): $.GoError {
	switch ($.bytesToString(text)) {
		case "rfc3339nano":
		case "RFC3339Nano":
		{
			e!.value = RFC3339NanoTimeEncoder
			break
		}
		case "rfc3339":
		case "RFC3339":
		{
			e!.value = RFC3339TimeEncoder
			break
		}
		case "iso8601":
		case "ISO8601":
		{
			e!.value = ISO8601TimeEncoder
			break
		}
		case "millis":
		{
			e!.value = EpochMillisTimeEncoder
			break
		}
		case "nanos":
		{
			e!.value = EpochNanosTimeEncoder
			break
		}
		default:
		{
			e!.value = EpochTimeEncoder
			break
		}
	}
	return null
}

export async function TimeEncoder_UnmarshalYAML(e: $.VarRef<TimeEncoder> | null, unmarshal: ((_p0: any) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
	let o: $.VarRef<{"Layout": string}> = $.varRef($.anonymousStructValue({"Layout": ""}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Layout", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"layout\" yaml:\"layout\"" })] }))
	{
		let err = (__goscriptAwait = unmarshal!($.interfaceValue(o, "*struct{Layout string \"json:\\\"layout\\\" yaml:\\\"layout\\\"\"}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Layout", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"layout\" yaml:\"layout\"" })] }))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err == null) {
			e!.value = TimeEncoderOfLayout(o.value.Layout)
			return null
		}
	}

	let s: $.VarRef<string> = $.varRef("")
	{
		let err = (__goscriptAwait = unmarshal!($.interfaceValue(s, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			return err
		}
	}
	return TimeEncoder_UnmarshalText(e, $.stringToBytes(s.value))
}

export async function TimeEncoder_UnmarshalJSON(e: $.VarRef<TimeEncoder> | null, data: $.Slice<number>): globalThis.Promise<$.GoError> {
	return TimeEncoder_UnmarshalYAML(e, $.functionValue(async (v: any): globalThis.Promise<$.GoError> => {
		return await json.Unmarshal(data, v)
	}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: ["error"] } as $.FunctionTypeInfo)))
}

export async function SecondsDurationEncoder(d: time.Duration, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<PrimitiveArrayEncoder, null>) : $.pointerValue<Exclude<PrimitiveArrayEncoder, null>>(enc)).AppendFloat64(globalThis.Number(d) / globalThis.Number(time.Second)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function NanosDurationEncoder(d: time.Duration, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<PrimitiveArrayEncoder, null>) : $.pointerValue<Exclude<PrimitiveArrayEncoder, null>>(enc)).AppendInt64($.int64(d)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function MillisDurationEncoder(d: time.Duration, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<PrimitiveArrayEncoder, null>) : $.pointerValue<Exclude<PrimitiveArrayEncoder, null>>(enc)).AppendInt64($.int64Div(time.Duration_Nanoseconds(d), 1000000n)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function StringDurationEncoder(d: time.Duration, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<PrimitiveArrayEncoder, null>) : $.pointerValue<Exclude<PrimitiveArrayEncoder, null>>(enc)).AppendString(time.Duration_String(d)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export function DurationEncoder_UnmarshalText(e: $.VarRef<DurationEncoder> | null, text: $.Slice<number>): $.GoError {
	switch ($.bytesToString(text)) {
		case "string":
		{
			e!.value = StringDurationEncoder
			break
		}
		case "nanos":
		{
			e!.value = NanosDurationEncoder
			break
		}
		case "ms":
		{
			e!.value = MillisDurationEncoder
			break
		}
		default:
		{
			e!.value = SecondsDurationEncoder
			break
		}
	}
	return null
}

export async function FullCallerEncoder(caller: __goscript_entry.EntryCaller, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	// TODO: consider using a byte-oriented API to save an allocation.
	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<PrimitiveArrayEncoder, null>) : $.pointerValue<Exclude<PrimitiveArrayEncoder, null>>(enc)).AppendString(await caller.String()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function ShortCallerEncoder(caller: __goscript_entry.EntryCaller, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	// TODO: consider using a byte-oriented API to save an allocation.
	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<PrimitiveArrayEncoder, null>) : $.pointerValue<Exclude<PrimitiveArrayEncoder, null>>(enc)).AppendString(await caller.TrimmedPath()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export function CallerEncoder_UnmarshalText(e: $.VarRef<CallerEncoder> | null, text: $.Slice<number>): $.GoError {
	switch ($.bytesToString(text)) {
		case "full":
		{
			e!.value = FullCallerEncoder
			break
		}
		default:
		{
			e!.value = ShortCallerEncoder
			break
		}
	}
	return null
}

export async function FullNameEncoder(loggerName: string, enc: PrimitiveArrayEncoder | null): globalThis.Promise<void> {
	void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<PrimitiveArrayEncoder, null>) : $.pointerValue<Exclude<PrimitiveArrayEncoder, null>>(enc)).AppendString(loggerName), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export function NameEncoder_UnmarshalText(e: $.VarRef<NameEncoder> | null, text: $.Slice<number>): $.GoError {
	switch ($.bytesToString(text)) {
		case "full":
		{
			e!.value = FullNameEncoder
			break
		}
		default:
		{
			e!.value = FullNameEncoder
			break
		}
	}
	return null
}

var __goscriptAwait: any
