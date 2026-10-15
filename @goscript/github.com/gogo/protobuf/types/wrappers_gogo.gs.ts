// Generated file based on wrappers_gogo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as __goscript_protosize from "./protosize.gs.ts"

import * as __goscript_wrappers_pb from "./wrappers.pb.gs.ts"
import "./protosize.gs.ts"
import "./wrappers.pb.gs.ts"

export async function NewPopulatedStdDouble(r: __goscript_wrappers_pb.randyWrappers | null, easy: boolean): globalThis.Promise<$.VarRef<number> | null> {
	let v: __goscript_wrappers_pb.DoubleValue | $.VarRef<__goscript_wrappers_pb.DoubleValue> | null = await __goscript_wrappers_pb.NewPopulatedDoubleValue(r, easy)
	return $.fieldRef($.pointerValue<__goscript_wrappers_pb.DoubleValue>(v)._fields, "Value")
}

export function SizeOfStdDouble(v: number): number {
	let pv: __goscript_wrappers_pb.DoubleValue | $.VarRef<__goscript_wrappers_pb.DoubleValue> | null = new __goscript_wrappers_pb.DoubleValue({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.DoubleValue).Size() : __goscript_wrappers_pb.DoubleValue.prototype.Size.call(pv))
}

export function StdDoubleMarshal(v: number): [$.Slice<number>, $.GoError] {
	let size = SizeOfStdDouble(v)
	let buf: $.Slice<number> = $.makeSlice<number>(size, undefined, "byte")
	let [, err] = StdDoubleMarshalTo(v, buf)
	return [buf, err]
}

export function StdDoubleMarshalTo(v: number, data: $.Slice<number>): [number, $.GoError] {
	let pv: __goscript_wrappers_pb.DoubleValue | $.VarRef<__goscript_wrappers_pb.DoubleValue> | null = new __goscript_wrappers_pb.DoubleValue({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.DoubleValue).MarshalTo(data) : __goscript_wrappers_pb.DoubleValue.prototype.MarshalTo.call(pv, data))
}

export function StdDoubleUnmarshal(v: $.VarRef<number> | null, data: $.Slice<number>): $.GoError {
	let pv: __goscript_wrappers_pb.DoubleValue | $.VarRef<__goscript_wrappers_pb.DoubleValue> | null = new __goscript_wrappers_pb.DoubleValue()
	{
		let err = (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.DoubleValue).Unmarshal(data) : __goscript_wrappers_pb.DoubleValue.prototype.Unmarshal.call(pv, data))
		if (err != null) {
			return err
		}
	}
	v!.value = $.pointerValue<__goscript_wrappers_pb.DoubleValue>(pv).Value
	return null
}

export async function NewPopulatedStdFloat(r: __goscript_wrappers_pb.randyWrappers | null, easy: boolean): globalThis.Promise<$.VarRef<number> | null> {
	let v: __goscript_wrappers_pb.FloatValue | $.VarRef<__goscript_wrappers_pb.FloatValue> | null = await __goscript_wrappers_pb.NewPopulatedFloatValue(r, easy)
	return $.fieldRef($.pointerValue<__goscript_wrappers_pb.FloatValue>(v)._fields, "Value")
}

export function SizeOfStdFloat(v: number): number {
	let pv: __goscript_wrappers_pb.FloatValue | $.VarRef<__goscript_wrappers_pb.FloatValue> | null = new __goscript_wrappers_pb.FloatValue({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.FloatValue).Size() : __goscript_wrappers_pb.FloatValue.prototype.Size.call(pv))
}

export function StdFloatMarshal(v: number): [$.Slice<number>, $.GoError] {
	let size = SizeOfStdFloat(v)
	let buf: $.Slice<number> = $.makeSlice<number>(size, undefined, "byte")
	let [, err] = StdFloatMarshalTo(v, buf)
	return [buf, err]
}

export function StdFloatMarshalTo(v: number, data: $.Slice<number>): [number, $.GoError] {
	let pv: __goscript_wrappers_pb.FloatValue | $.VarRef<__goscript_wrappers_pb.FloatValue> | null = new __goscript_wrappers_pb.FloatValue({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.FloatValue).MarshalTo(data) : __goscript_wrappers_pb.FloatValue.prototype.MarshalTo.call(pv, data))
}

export function StdFloatUnmarshal(v: $.VarRef<number> | null, data: $.Slice<number>): $.GoError {
	let pv: __goscript_wrappers_pb.FloatValue | $.VarRef<__goscript_wrappers_pb.FloatValue> | null = new __goscript_wrappers_pb.FloatValue()
	{
		let err = (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.FloatValue).Unmarshal(data) : __goscript_wrappers_pb.FloatValue.prototype.Unmarshal.call(pv, data))
		if (err != null) {
			return err
		}
	}
	v!.value = $.pointerValue<__goscript_wrappers_pb.FloatValue>(pv).Value
	return null
}

export async function NewPopulatedStdInt64(r: __goscript_wrappers_pb.randyWrappers | null, easy: boolean): globalThis.Promise<$.VarRef<bigint> | null> {
	let v: __goscript_wrappers_pb.Int64Value | $.VarRef<__goscript_wrappers_pb.Int64Value> | null = await __goscript_wrappers_pb.NewPopulatedInt64Value(r, easy)
	return $.fieldRef($.pointerValue<__goscript_wrappers_pb.Int64Value>(v)._fields, "Value")
}

export function SizeOfStdInt64(v: bigint): number {
	let pv: __goscript_wrappers_pb.Int64Value | $.VarRef<__goscript_wrappers_pb.Int64Value> | null = new __goscript_wrappers_pb.Int64Value({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.Int64Value).Size() : __goscript_wrappers_pb.Int64Value.prototype.Size.call(pv))
}

export function StdInt64Marshal(v: bigint): [$.Slice<number>, $.GoError] {
	let size = SizeOfStdInt64(v)
	let buf: $.Slice<number> = $.makeSlice<number>(size, undefined, "byte")
	let [, err] = StdInt64MarshalTo(v, buf)
	return [buf, err]
}

export function StdInt64MarshalTo(v: bigint, data: $.Slice<number>): [number, $.GoError] {
	let pv: __goscript_wrappers_pb.Int64Value | $.VarRef<__goscript_wrappers_pb.Int64Value> | null = new __goscript_wrappers_pb.Int64Value({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.Int64Value).MarshalTo(data) : __goscript_wrappers_pb.Int64Value.prototype.MarshalTo.call(pv, data))
}

export function StdInt64Unmarshal(v: $.VarRef<bigint> | null, data: $.Slice<number>): $.GoError {
	let pv: __goscript_wrappers_pb.Int64Value | $.VarRef<__goscript_wrappers_pb.Int64Value> | null = new __goscript_wrappers_pb.Int64Value()
	{
		let err = (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.Int64Value).Unmarshal(data) : __goscript_wrappers_pb.Int64Value.prototype.Unmarshal.call(pv, data))
		if (err != null) {
			return err
		}
	}
	v!.value = $.pointerValue<__goscript_wrappers_pb.Int64Value>(pv).Value
	return null
}

export async function NewPopulatedStdUInt64(r: __goscript_wrappers_pb.randyWrappers | null, easy: boolean): globalThis.Promise<$.VarRef<bigint> | null> {
	let v: __goscript_wrappers_pb.UInt64Value | $.VarRef<__goscript_wrappers_pb.UInt64Value> | null = await __goscript_wrappers_pb.NewPopulatedUInt64Value(r, easy)
	return $.fieldRef($.pointerValue<__goscript_wrappers_pb.UInt64Value>(v)._fields, "Value")
}

export function SizeOfStdUInt64(v: bigint): number {
	let pv: __goscript_wrappers_pb.UInt64Value | $.VarRef<__goscript_wrappers_pb.UInt64Value> | null = new __goscript_wrappers_pb.UInt64Value({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.UInt64Value).Size() : __goscript_wrappers_pb.UInt64Value.prototype.Size.call(pv))
}

export function StdUInt64Marshal(v: bigint): [$.Slice<number>, $.GoError] {
	let size = SizeOfStdUInt64(v)
	let buf: $.Slice<number> = $.makeSlice<number>(size, undefined, "byte")
	let [, err] = StdUInt64MarshalTo(v, buf)
	return [buf, err]
}

export function StdUInt64MarshalTo(v: bigint, data: $.Slice<number>): [number, $.GoError] {
	let pv: __goscript_wrappers_pb.UInt64Value | $.VarRef<__goscript_wrappers_pb.UInt64Value> | null = new __goscript_wrappers_pb.UInt64Value({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.UInt64Value).MarshalTo(data) : __goscript_wrappers_pb.UInt64Value.prototype.MarshalTo.call(pv, data))
}

export function StdUInt64Unmarshal(v: $.VarRef<bigint> | null, data: $.Slice<number>): $.GoError {
	let pv: __goscript_wrappers_pb.UInt64Value | $.VarRef<__goscript_wrappers_pb.UInt64Value> | null = new __goscript_wrappers_pb.UInt64Value()
	{
		let err = (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.UInt64Value).Unmarshal(data) : __goscript_wrappers_pb.UInt64Value.prototype.Unmarshal.call(pv, data))
		if (err != null) {
			return err
		}
	}
	v!.value = $.pointerValue<__goscript_wrappers_pb.UInt64Value>(pv).Value
	return null
}

export async function NewPopulatedStdInt32(r: __goscript_wrappers_pb.randyWrappers | null, easy: boolean): globalThis.Promise<$.VarRef<number> | null> {
	let v: __goscript_wrappers_pb.Int32Value | $.VarRef<__goscript_wrappers_pb.Int32Value> | null = await __goscript_wrappers_pb.NewPopulatedInt32Value(r, easy)
	return $.fieldRef($.pointerValue<__goscript_wrappers_pb.Int32Value>(v)._fields, "Value")
}

export function SizeOfStdInt32(v: number): number {
	let pv: __goscript_wrappers_pb.Int32Value | $.VarRef<__goscript_wrappers_pb.Int32Value> | null = new __goscript_wrappers_pb.Int32Value({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.Int32Value).Size() : __goscript_wrappers_pb.Int32Value.prototype.Size.call(pv))
}

export function StdInt32Marshal(v: number): [$.Slice<number>, $.GoError] {
	let size = SizeOfStdInt32(v)
	let buf: $.Slice<number> = $.makeSlice<number>(size, undefined, "byte")
	let [, err] = StdInt32MarshalTo(v, buf)
	return [buf, err]
}

export function StdInt32MarshalTo(v: number, data: $.Slice<number>): [number, $.GoError] {
	let pv: __goscript_wrappers_pb.Int32Value | $.VarRef<__goscript_wrappers_pb.Int32Value> | null = new __goscript_wrappers_pb.Int32Value({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.Int32Value).MarshalTo(data) : __goscript_wrappers_pb.Int32Value.prototype.MarshalTo.call(pv, data))
}

export function StdInt32Unmarshal(v: $.VarRef<number> | null, data: $.Slice<number>): $.GoError {
	let pv: __goscript_wrappers_pb.Int32Value | $.VarRef<__goscript_wrappers_pb.Int32Value> | null = new __goscript_wrappers_pb.Int32Value()
	{
		let err = (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.Int32Value).Unmarshal(data) : __goscript_wrappers_pb.Int32Value.prototype.Unmarshal.call(pv, data))
		if (err != null) {
			return err
		}
	}
	v!.value = $.pointerValue<__goscript_wrappers_pb.Int32Value>(pv).Value
	return null
}

export async function NewPopulatedStdUInt32(r: __goscript_wrappers_pb.randyWrappers | null, easy: boolean): globalThis.Promise<$.VarRef<number> | null> {
	let v: __goscript_wrappers_pb.UInt32Value | $.VarRef<__goscript_wrappers_pb.UInt32Value> | null = await __goscript_wrappers_pb.NewPopulatedUInt32Value(r, easy)
	return $.fieldRef($.pointerValue<__goscript_wrappers_pb.UInt32Value>(v)._fields, "Value")
}

export function SizeOfStdUInt32(v: number): number {
	let pv: __goscript_wrappers_pb.UInt32Value | $.VarRef<__goscript_wrappers_pb.UInt32Value> | null = new __goscript_wrappers_pb.UInt32Value({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.UInt32Value).Size() : __goscript_wrappers_pb.UInt32Value.prototype.Size.call(pv))
}

export function StdUInt32Marshal(v: number): [$.Slice<number>, $.GoError] {
	let size = SizeOfStdUInt32(v)
	let buf: $.Slice<number> = $.makeSlice<number>(size, undefined, "byte")
	let [, err] = StdUInt32MarshalTo(v, buf)
	return [buf, err]
}

export function StdUInt32MarshalTo(v: number, data: $.Slice<number>): [number, $.GoError] {
	let pv: __goscript_wrappers_pb.UInt32Value | $.VarRef<__goscript_wrappers_pb.UInt32Value> | null = new __goscript_wrappers_pb.UInt32Value({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.UInt32Value).MarshalTo(data) : __goscript_wrappers_pb.UInt32Value.prototype.MarshalTo.call(pv, data))
}

export function StdUInt32Unmarshal(v: $.VarRef<number> | null, data: $.Slice<number>): $.GoError {
	let pv: __goscript_wrappers_pb.UInt32Value | $.VarRef<__goscript_wrappers_pb.UInt32Value> | null = new __goscript_wrappers_pb.UInt32Value()
	{
		let err = (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.UInt32Value).Unmarshal(data) : __goscript_wrappers_pb.UInt32Value.prototype.Unmarshal.call(pv, data))
		if (err != null) {
			return err
		}
	}
	v!.value = $.pointerValue<__goscript_wrappers_pb.UInt32Value>(pv).Value
	return null
}

export async function NewPopulatedStdBool(r: __goscript_wrappers_pb.randyWrappers | null, easy: boolean): globalThis.Promise<$.VarRef<boolean> | null> {
	let v: __goscript_wrappers_pb.BoolValue | $.VarRef<__goscript_wrappers_pb.BoolValue> | null = await __goscript_wrappers_pb.NewPopulatedBoolValue(r, easy)
	return $.fieldRef($.pointerValue<__goscript_wrappers_pb.BoolValue>(v)._fields, "Value")
}

export function SizeOfStdBool(v: boolean): number {
	let pv: __goscript_wrappers_pb.BoolValue | $.VarRef<__goscript_wrappers_pb.BoolValue> | null = new __goscript_wrappers_pb.BoolValue({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.BoolValue).Size() : __goscript_wrappers_pb.BoolValue.prototype.Size.call(pv))
}

export function StdBoolMarshal(v: boolean): [$.Slice<number>, $.GoError] {
	let size = SizeOfStdBool(v)
	let buf: $.Slice<number> = $.makeSlice<number>(size, undefined, "byte")
	let [, err] = StdBoolMarshalTo(v, buf)
	return [buf, err]
}

export function StdBoolMarshalTo(v: boolean, data: $.Slice<number>): [number, $.GoError] {
	let pv: __goscript_wrappers_pb.BoolValue | $.VarRef<__goscript_wrappers_pb.BoolValue> | null = new __goscript_wrappers_pb.BoolValue({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.BoolValue).MarshalTo(data) : __goscript_wrappers_pb.BoolValue.prototype.MarshalTo.call(pv, data))
}

export function StdBoolUnmarshal(v: $.VarRef<boolean> | null, data: $.Slice<number>): $.GoError {
	let pv: __goscript_wrappers_pb.BoolValue | $.VarRef<__goscript_wrappers_pb.BoolValue> | null = new __goscript_wrappers_pb.BoolValue()
	{
		let err = (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.BoolValue).Unmarshal(data) : __goscript_wrappers_pb.BoolValue.prototype.Unmarshal.call(pv, data))
		if (err != null) {
			return err
		}
	}
	v!.value = $.pointerValue<__goscript_wrappers_pb.BoolValue>(pv).Value
	return null
}

export async function NewPopulatedStdString(r: __goscript_wrappers_pb.randyWrappers | null, easy: boolean): globalThis.Promise<$.VarRef<string> | null> {
	let v: __goscript_wrappers_pb.StringValue | $.VarRef<__goscript_wrappers_pb.StringValue> | null = await __goscript_wrappers_pb.NewPopulatedStringValue(r, easy)
	return $.fieldRef($.pointerValue<__goscript_wrappers_pb.StringValue>(v)._fields, "Value")
}

export function SizeOfStdString(v: string): number {
	let pv: __goscript_wrappers_pb.StringValue | $.VarRef<__goscript_wrappers_pb.StringValue> | null = new __goscript_wrappers_pb.StringValue({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.StringValue).Size() : __goscript_wrappers_pb.StringValue.prototype.Size.call(pv))
}

export function StdStringMarshal(v: string): [$.Slice<number>, $.GoError] {
	let size = SizeOfStdString(v)
	let buf: $.Slice<number> = $.makeSlice<number>(size, undefined, "byte")
	let [, err] = StdStringMarshalTo(v, buf)
	return [buf, err]
}

export function StdStringMarshalTo(v: string, data: $.Slice<number>): [number, $.GoError] {
	let pv: __goscript_wrappers_pb.StringValue | $.VarRef<__goscript_wrappers_pb.StringValue> | null = new __goscript_wrappers_pb.StringValue({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.StringValue).MarshalTo(data) : __goscript_wrappers_pb.StringValue.prototype.MarshalTo.call(pv, data))
}

export function StdStringUnmarshal(v: $.VarRef<string> | null, data: $.Slice<number>): $.GoError {
	let pv: __goscript_wrappers_pb.StringValue | $.VarRef<__goscript_wrappers_pb.StringValue> | null = new __goscript_wrappers_pb.StringValue()
	{
		let err = (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.StringValue).Unmarshal(data) : __goscript_wrappers_pb.StringValue.prototype.Unmarshal.call(pv, data))
		if (err != null) {
			return err
		}
	}
	v!.value = $.pointerValue<__goscript_wrappers_pb.StringValue>(pv).Value
	return null
}

export async function NewPopulatedStdBytes(r: __goscript_wrappers_pb.randyWrappers | null, easy: boolean): globalThis.Promise<$.VarRef<$.Slice<number>> | null> {
	let v: __goscript_wrappers_pb.BytesValue | $.VarRef<__goscript_wrappers_pb.BytesValue> | null = await __goscript_wrappers_pb.NewPopulatedBytesValue(r, easy)
	return $.fieldRef($.pointerValue<__goscript_wrappers_pb.BytesValue>(v)._fields, "Value")
}

export function SizeOfStdBytes(v: $.Slice<number>): number {
	let pv: __goscript_wrappers_pb.BytesValue | $.VarRef<__goscript_wrappers_pb.BytesValue> | null = new __goscript_wrappers_pb.BytesValue({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.BytesValue).Size() : __goscript_wrappers_pb.BytesValue.prototype.Size.call(pv))
}

export function StdBytesMarshal(v: $.Slice<number>): [$.Slice<number>, $.GoError] {
	let size = SizeOfStdBytes(v)
	let buf: $.Slice<number> = $.makeSlice<number>(size, undefined, "byte")
	let [, err] = StdBytesMarshalTo(v, buf)
	return [buf, err]
}

export function StdBytesMarshalTo(v: $.Slice<number>, data: $.Slice<number>): [number, $.GoError] {
	let pv: __goscript_wrappers_pb.BytesValue | $.VarRef<__goscript_wrappers_pb.BytesValue> | null = new __goscript_wrappers_pb.BytesValue({Value: v})
	return (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.BytesValue).MarshalTo(data) : __goscript_wrappers_pb.BytesValue.prototype.MarshalTo.call(pv, data))
}

export function StdBytesUnmarshal(v: $.VarRef<$.Slice<number>> | null, data: $.Slice<number>): $.GoError {
	let pv: __goscript_wrappers_pb.BytesValue | $.VarRef<__goscript_wrappers_pb.BytesValue> | null = new __goscript_wrappers_pb.BytesValue()
	{
		let err = (pv !== null && (pv as any).__isVarRef !== true && (pv as any).__goValue === undefined ? ((pv as any) as __goscript_wrappers_pb.BytesValue).Unmarshal(data) : __goscript_wrappers_pb.BytesValue.prototype.Unmarshal.call(pv, data))
		if (err != null) {
			return err
		}
	}
	v!.value = $.pointerValue<__goscript_wrappers_pb.BytesValue>(pv).Value
	return null
}
