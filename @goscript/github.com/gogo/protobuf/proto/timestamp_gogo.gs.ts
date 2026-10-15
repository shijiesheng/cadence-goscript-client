// Generated file based on timestamp_gogo.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_properties from "./properties.gs.ts"
import "@goscript/reflect/index.js"
import "@goscript/time/index.js"
import "./properties.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.timestamp"])

export class timestamp {
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

	public clone(): timestamp {
		return new timestamp(this, true)
	}

	public __goscriptAssign(source: timestamp): void {
		const target = this._fields
		const values = source._fields
		target.Seconds = values.Seconds
		target.Nanos = values.Nanos
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: timestamp | $.VarRef<timestamp> | null = this;
		$.assignStruct($.pointerValue<timestamp>(m), $.markAsStructValue(new timestamp()))
	}

	public String(): string {
		return "timestamp<string>"
	}

	static __typeInfo = $.registerStructType(
		"proto.timestamp",
		() => new timestamp(),
		() => [$.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		timestamp,
		() => [/* @__PURE__ */ $.structField("Seconds", /* @__PURE__ */ $.basicType("int64"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=seconds,proto3\" json:\"seconds,omitempty\"" }), /* @__PURE__ */ $.structField("Nanos", /* @__PURE__ */ $.basicType("int32"), [1], 8, true, { tag: "protobuf:\"varint,2,opt,name=nanos,proto3\" json:\"nanos,omitempty\"" })]
	)
}

export let timeType: reflect.Type | null = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*time.Time", /* @__PURE__ */ $.pointerType("time.Time")))).Elem()

export function __goscript_set_timeType(__goscriptValue: reflect.Type | null): void {
	timeType = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await __goscript_properties.RegisterType($.interfaceValue<__goscript_lib.Message | null>(null, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp")), "gogo.protobuf.proto.timestamp")
}

export { __goscriptInit0 }
