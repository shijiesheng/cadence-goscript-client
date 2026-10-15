// Generated file based on value_pure.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as pragma from "@goscript/google.golang.org/protobuf/internal/pragma/index.js"

import type * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as __goscript__type from "./type.gs.ts"

import type * as __goscript_methods from "./methods.gs.ts"

import type * as __goscript_proto from "./proto.gs.ts"

import * as __goscript_source from "./source.gs.ts"

import * as __goscript_source_gen from "./source_gen.gs.ts"

import type * as __goscript_value from "./value.gs.ts"

import * as __goscript_value_equal from "./value_equal.gs.ts"

import * as __goscript_value_union from "./value_union.gs.ts"
import "@goscript/google.golang.org/protobuf/internal/pragma/index.js"
import "./type.gs.ts"
import "./source.gs.ts"
import "./source_gen.gs.ts"
import "./value_equal.gs.ts"
import "./value_union.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/reflect/protoreflect", ["protoreflect.valueType", "protoreflect.value"])

export type valueType = number

export class value {
	public get DoNotCompare(): pragma.DoNotCompare {
		return this._fields.DoNotCompare
	}

	public set DoNotCompare(value: pragma.DoNotCompare) {
		this._fields.DoNotCompare = value
	}

	public get typ(): valueType {
		return this._fields.typ
	}

	public set typ(value: valueType) {
		this._fields.typ = value
	}

	public get num(): bigint {
		return this._fields.num
	}

	public set num(value: bigint) {
		this._fields.num = value
	}

	public get str(): string {
		return this._fields.str
	}

	public set str(value: string) {
		this._fields.str = value
	}

	public get bin(): $.Slice<number> {
		return this._fields.bin
	}

	public set bin(value: $.Slice<number>) {
		this._fields.bin = value
	}

	public get iface(): any {
		return this._fields.iface
	}

	public set iface(value: any) {
		this._fields.iface = value
	}

	public _fields: {
		DoNotCompare: pragma.DoNotCompare
		typ: valueType
		num: bigint
		str: string
		bin: $.Slice<number>
		iface: any
	}

	constructor(init?: Partial<{DoNotCompare?: pragma.DoNotCompare, typ?: valueType, num?: bigint, str?: string, bin?: $.Slice<number>, iface?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			DoNotCompare: init?.DoNotCompare !== undefined ? $.cloneArrayValue(init.DoNotCompare, "pragma.DoNotCompare") : $.arrayValue(globalThis.Array.from({ length: 0 }, () => null)),
			typ: init?.typ ?? (0 as valueType),
			num: init?.num ?? (0n as bigint),
			str: init?.str ?? ("" as string),
			bin: init?.bin ?? (null! as $.Slice<number>),
			iface: init?.iface ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): value {
		return new value(this, true)
	}

	public __goscriptAssign(source: value): void {
		const target = this._fields
		const values = source._fields
		target.DoNotCompare = $.assignFieldValue(target.DoNotCompare, values.DoNotCompare, "pragma.DoNotCompare")
		target.typ = values.typ
		target.num = values.num
		target.str = values.str
		target.bin = values.bin
		target.iface = $.assignFieldValue(target.iface, values.iface, { kind: $.TypeKind.Interface, methods: [] })
	}

	static __typeInfo = $.registerStructType(
		"protoreflect.value",
		() => new value(),
		() => [],
		value,
		() => [/* @__PURE__ */ $.structField("DoNotCompare", "pragma.DoNotCompare", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("typ", /* @__PURE__ */ $.basicType("int", "protoreflect.valueType"), [1], 0, false, { pkgPath: "google.golang.org/protobuf/reflect/protoreflect" }), /* @__PURE__ */ $.structField("num", /* @__PURE__ */ $.basicType("uint64"), [2], 8, false, { pkgPath: "google.golang.org/protobuf/reflect/protoreflect" }), /* @__PURE__ */ $.structField("str", /* @__PURE__ */ $.basicType("string"), [3], 16, false, { pkgPath: "google.golang.org/protobuf/reflect/protoreflect" }), /* @__PURE__ */ $.structField("bin", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 32, false, { pkgPath: "google.golang.org/protobuf/reflect/protoreflect" }), /* @__PURE__ */ $.structField("iface", { kind: $.TypeKind.Interface, methods: [] }, [5], 56, false, { pkgPath: "google.golang.org/protobuf/reflect/protoreflect" })]
	)
}

export const nilType: valueType = 0

export const boolType: valueType = 1

export const int32Type: valueType = 2

export const int64Type: valueType = 3

export const uint32Type: valueType = 4

export const uint64Type: valueType = 5

export const float32Type: valueType = 6

export const float64Type: valueType = 7

export const stringType: valueType = 8

export const bytesType: valueType = 9

export const enumType: valueType = 10

export const ifaceType: valueType = 11

export function valueOfString(v: string): __goscript_value_union.Value {
	return new __goscript_value_union.Value({typ: 8, str: v}, true)
}

export function valueOfBytes(v: $.Slice<number>): __goscript_value_union.Value {
	return new __goscript_value_union.Value({typ: 9, bin: v}, true)
}

export function valueOfIface(v: any): __goscript_value_union.Value {
	return new __goscript_value_union.Value({typ: 11, iface: v}, true)
}
