// Generated file based on duration_gogo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_properties from "./properties.gs.ts"
import "@goscript/reflect/index.js"
import "@goscript/time/index.js"
import "./properties.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.duration"])

export class duration {
	public get Seconds(): bigint {
		return this._fields.Seconds
	}

	public set Seconds(value: bigint) {
		this._fields.Seconds = value
	}

	public get Nanos(): number {
		return this._fields.Nanos
	}

	public set Nanos(value: number) {
		this._fields.Nanos = value
	}

	public _fields: {
		Seconds: bigint
		Nanos: number
	}

	constructor(init?: Partial<{Seconds?: bigint, Nanos?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Seconds: init?.Seconds ?? (0n as bigint),
			Nanos: init?.Nanos ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): duration {
		return new duration(this, true)
	}

	public __goscriptAssign(source: duration): void {
		const target = this._fields
		const values = source._fields
		target.Seconds = values.Seconds
		target.Nanos = values.Nanos
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: duration | $.VarRef<duration> | null = this;
		$.assignStruct($.pointerValue<duration>(m), $.markAsStructValue(new duration()))
	}

	public String(): string {
		return "duration<string>"
	}

	static __typeInfo = $.registerStructType(
		"proto.duration",
		() => new duration(),
		() => [$.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		duration,
		() => [/* @__PURE__ */ $.structField("Seconds", /* @__PURE__ */ $.basicType("int64"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=seconds,proto3\" json:\"seconds,omitempty\"" }), /* @__PURE__ */ $.structField("Nanos", /* @__PURE__ */ $.basicType("int32"), [1], 8, true, { tag: "protobuf:\"varint,2,opt,name=nanos,proto3\" json:\"nanos,omitempty\"" })]
	)
}

export let durationType: reflect.Type | null = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.namedValueInterfaceValue<any>(null, "*time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))).Elem()

export function __goscript_set_durationType(__goscriptValue: reflect.Type | null): void {
	durationType = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await __goscript_properties.RegisterType($.interfaceValue<__goscript_lib.Message | null>(null, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration")), "gogo.protobuf.proto.duration")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration")))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

export { __goscriptInit0 }
