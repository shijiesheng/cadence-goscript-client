// Generated file based on wrappers_gogo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_properties from "./properties.gs.ts"
import "./properties.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.float64Value", "proto.float32Value", "proto.int64Value", "proto.uint64Value", "proto.int32Value", "proto.uint32Value", "proto.boolValue", "proto.stringValue", "proto.bytesValue"])

export class float64Value {
	public get Value(): number {
		return this._fields.Value
	}

	public set Value(value: number) {
		this._fields.Value = value
	}

	public _fields: {
		Value: number
	}

	constructor(init?: Partial<{Value?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): float64Value {
		return new float64Value(this, true)
	}

	public __goscriptAssign(source: float64Value): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: float64Value | $.VarRef<float64Value> | null = this;
		$.assignStruct($.pointerValue<float64Value>(m), $.markAsStructValue(new float64Value()))
	}

	public String(): string {
		return "float64<string>"
	}

	static __typeInfo = $.registerStructType(
		"proto.float64Value",
		() => new float64Value(),
		() => [$.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		float64Value,
		() => [/* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("float64"), [0], 0, true, { tag: "protobuf:\"fixed64,1,opt,name=value,proto3\" json:\"value,omitempty\"" })]
	)
}

export class float32Value {
	public get Value(): number {
		return this._fields.Value
	}

	public set Value(value: number) {
		this._fields.Value = value
	}

	public _fields: {
		Value: number
	}

	constructor(init?: Partial<{Value?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): float32Value {
		return new float32Value(this, true)
	}

	public __goscriptAssign(source: float32Value): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: float32Value | $.VarRef<float32Value> | null = this;
		$.assignStruct($.pointerValue<float32Value>(m), $.markAsStructValue(new float32Value()))
	}

	public String(): string {
		return "float32<string>"
	}

	static __typeInfo = $.registerStructType(
		"proto.float32Value",
		() => new float32Value(),
		() => [$.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		float32Value,
		() => [/* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("float32"), [0], 0, true, { tag: "protobuf:\"fixed32,1,opt,name=value,proto3\" json:\"value,omitempty\"" })]
	)
}

export class int64Value {
	public get Value(): bigint {
		return this._fields.Value
	}

	public set Value(value: bigint) {
		this._fields.Value = value
	}

	public _fields: {
		Value: bigint
	}

	constructor(init?: Partial<{Value?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): int64Value {
		return new int64Value(this, true)
	}

	public __goscriptAssign(source: int64Value): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: int64Value | $.VarRef<int64Value> | null = this;
		$.assignStruct($.pointerValue<int64Value>(m), $.markAsStructValue(new int64Value()))
	}

	public String(): string {
		return "int64<string>"
	}

	static __typeInfo = $.registerStructType(
		"proto.int64Value",
		() => new int64Value(),
		() => [$.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		int64Value,
		() => [/* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("int64"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=value,proto3\" json:\"value,omitempty\"" })]
	)
}

export class uint64Value {
	public get Value(): bigint {
		return this._fields.Value
	}

	public set Value(value: bigint) {
		this._fields.Value = value
	}

	public _fields: {
		Value: bigint
	}

	constructor(init?: Partial<{Value?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): uint64Value {
		return new uint64Value(this, true)
	}

	public __goscriptAssign(source: uint64Value): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: uint64Value | $.VarRef<uint64Value> | null = this;
		$.assignStruct($.pointerValue<uint64Value>(m), $.markAsStructValue(new uint64Value()))
	}

	public String(): string {
		return "uint64<string>"
	}

	static __typeInfo = $.registerStructType(
		"proto.uint64Value",
		() => new uint64Value(),
		() => [$.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		uint64Value,
		() => [/* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=value,proto3\" json:\"value,omitempty\"" })]
	)
}

export class int32Value {
	public get Value(): number {
		return this._fields.Value
	}

	public set Value(value: number) {
		this._fields.Value = value
	}

	public _fields: {
		Value: number
	}

	constructor(init?: Partial<{Value?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): int32Value {
		return new int32Value(this, true)
	}

	public __goscriptAssign(source: int32Value): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: int32Value | $.VarRef<int32Value> | null = this;
		$.assignStruct($.pointerValue<int32Value>(m), $.markAsStructValue(new int32Value()))
	}

	public String(): string {
		return "int32<string>"
	}

	static __typeInfo = $.registerStructType(
		"proto.int32Value",
		() => new int32Value(),
		() => [$.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		int32Value,
		() => [/* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("int32"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=value,proto3\" json:\"value,omitempty\"" })]
	)
}

export class uint32Value {
	public get Value(): number {
		return this._fields.Value
	}

	public set Value(value: number) {
		this._fields.Value = value
	}

	public _fields: {
		Value: number
	}

	constructor(init?: Partial<{Value?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): uint32Value {
		return new uint32Value(this, true)
	}

	public __goscriptAssign(source: uint32Value): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: uint32Value | $.VarRef<uint32Value> | null = this;
		$.assignStruct($.pointerValue<uint32Value>(m), $.markAsStructValue(new uint32Value()))
	}

	public String(): string {
		return "uint32<string>"
	}

	static __typeInfo = $.registerStructType(
		"proto.uint32Value",
		() => new uint32Value(),
		() => [$.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		uint32Value,
		() => [/* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("uint32"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=value,proto3\" json:\"value,omitempty\"" })]
	)
}

export class boolValue {
	public get Value(): boolean {
		return this._fields.Value
	}

	public set Value(value: boolean) {
		this._fields.Value = value
	}

	public _fields: {
		Value: boolean
	}

	constructor(init?: Partial<{Value?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): boolValue {
		return new boolValue(this, true)
	}

	public __goscriptAssign(source: boolValue): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: boolValue | $.VarRef<boolValue> | null = this;
		$.assignStruct($.pointerValue<boolValue>(m), $.markAsStructValue(new boolValue()))
	}

	public String(): string {
		return "bool<string>"
	}

	static __typeInfo = $.registerStructType(
		"proto.boolValue",
		() => new boolValue(),
		() => [$.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		boolValue,
		() => [/* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("bool"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=value,proto3\" json:\"value,omitempty\"" })]
	)
}

export class stringValue {
	public get Value(): string {
		return this._fields.Value
	}

	public set Value(value: string) {
		this._fields.Value = value
	}

	public _fields: {
		Value: string
	}

	constructor(init?: Partial<{Value?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): stringValue {
		return new stringValue(this, true)
	}

	public __goscriptAssign(source: stringValue): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: stringValue | $.VarRef<stringValue> | null = this;
		$.assignStruct($.pointerValue<stringValue>(m), $.markAsStructValue(new stringValue()))
	}

	public String(): string {
		return "string<string>"
	}

	static __typeInfo = $.registerStructType(
		"proto.stringValue",
		() => new stringValue(),
		() => [$.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		stringValue,
		() => [/* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=value,proto3\" json:\"value,omitempty\"" })]
	)
}

export class bytesValue {
	public get Value(): $.Slice<number> {
		return this._fields.Value
	}

	public set Value(value: $.Slice<number>) {
		this._fields.Value = value
	}

	public _fields: {
		Value: $.Slice<number>
	}

	constructor(init?: Partial<{Value?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bytesValue {
		return new bytesValue(this, true)
	}

	public __goscriptAssign(source: bytesValue): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: bytesValue | $.VarRef<bytesValue> | null = this;
		$.assignStruct($.pointerValue<bytesValue>(m), $.markAsStructValue(new bytesValue()))
	}

	public String(): string {
		return "[]byte<string>"
	}

	static __typeInfo = $.registerStructType(
		"proto.bytesValue",
		() => new bytesValue(),
		() => [$.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		bytesValue,
		() => [/* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=value,proto3\" json:\"value,omitempty\"" })]
	)
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await __goscript_properties.RegisterType($.interfaceValue<__goscript_lib.Message | null>(null, "*proto.float64Value", /* @__PURE__ */ $.pointerType("proto.float64Value")), "gogo.protobuf.proto.DoubleValue")
	await __goscript_properties.RegisterType($.interfaceValue<__goscript_lib.Message | null>(null, "*proto.float32Value", /* @__PURE__ */ $.pointerType("proto.float32Value")), "gogo.protobuf.proto.FloatValue")
	await __goscript_properties.RegisterType($.interfaceValue<__goscript_lib.Message | null>(null, "*proto.int64Value", /* @__PURE__ */ $.pointerType("proto.int64Value")), "gogo.protobuf.proto.Int64Value")
	await __goscript_properties.RegisterType($.interfaceValue<__goscript_lib.Message | null>(null, "*proto.uint64Value", /* @__PURE__ */ $.pointerType("proto.uint64Value")), "gogo.protobuf.proto.UInt64Value")
	await __goscript_properties.RegisterType($.interfaceValue<__goscript_lib.Message | null>(null, "*proto.int32Value", /* @__PURE__ */ $.pointerType("proto.int32Value")), "gogo.protobuf.proto.Int32Value")
	await __goscript_properties.RegisterType($.interfaceValue<__goscript_lib.Message | null>(null, "*proto.uint32Value", /* @__PURE__ */ $.pointerType("proto.uint32Value")), "gogo.protobuf.proto.UInt32Value")
	await __goscript_properties.RegisterType($.interfaceValue<__goscript_lib.Message | null>(null, "*proto.boolValue", /* @__PURE__ */ $.pointerType("proto.boolValue")), "gogo.protobuf.proto.BoolValue")
	await __goscript_properties.RegisterType($.interfaceValue<__goscript_lib.Message | null>(null, "*proto.stringValue", /* @__PURE__ */ $.pointerType("proto.stringValue")), "gogo.protobuf.proto.StringValue")
	await __goscript_properties.RegisterType($.interfaceValue<__goscript_lib.Message | null>(null, "*proto.bytesValue", /* @__PURE__ */ $.pointerType("proto.bytesValue")), "gogo.protobuf.proto.BytesValue")
}

export { __goscriptInit0 }
