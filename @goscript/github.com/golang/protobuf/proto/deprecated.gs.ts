// Generated file based on deprecated.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as protoV2 from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as __goscript_discard from "./discard.gs.ts"

import * as __goscript_proto from "./proto.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strconv/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "./discard.gs.ts"
import "./proto.gs.ts"

$.registerTypePackagePath("github.com/golang/protobuf/proto", ["proto.Stats", "proto.InternalMessageInfo"])

export class Stats {
	public get Emalloc(): bigint {
		return this._fields.Emalloc
	}

	public set Emalloc(value: bigint) {
		this._fields.Emalloc = value
	}

	public get Dmalloc(): bigint {
		return this._fields.Dmalloc
	}

	public set Dmalloc(value: bigint) {
		this._fields.Dmalloc = value
	}

	public get Encode(): bigint {
		return this._fields.Encode
	}

	public set Encode(value: bigint) {
		this._fields.Encode = value
	}

	public get Decode(): bigint {
		return this._fields.Decode
	}

	public set Decode(value: bigint) {
		this._fields.Decode = value
	}

	public get Chit(): bigint {
		return this._fields.Chit
	}

	public set Chit(value: bigint) {
		this._fields.Chit = value
	}

	public get Cmiss(): bigint {
		return this._fields.Cmiss
	}

	public set Cmiss(value: bigint) {
		this._fields.Cmiss = value
	}

	public get Size(): bigint {
		return this._fields.Size
	}

	public set Size(value: bigint) {
		this._fields.Size = value
	}

	public _fields: {
		Emalloc: bigint
		Dmalloc: bigint
		Encode: bigint
		Decode: bigint
		Chit: bigint
		Cmiss: bigint
		Size: bigint
	}

	constructor(init?: Partial<{Emalloc?: bigint, Dmalloc?: bigint, Encode?: bigint, Decode?: bigint, Chit?: bigint, Cmiss?: bigint, Size?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			Emalloc: init?.Emalloc ?? (0n as bigint),
			Dmalloc: init?.Dmalloc ?? (0n as bigint),
			Encode: init?.Encode ?? (0n as bigint),
			Decode: init?.Decode ?? (0n as bigint),
			Chit: init?.Chit ?? (0n as bigint),
			Cmiss: init?.Cmiss ?? (0n as bigint),
			Size: init?.Size ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Stats {
		return new Stats(this, true)
	}

	public __goscriptAssign(source: Stats): void {
		const target = this._fields
		const values = source._fields
		target.Emalloc = values.Emalloc
		target.Dmalloc = values.Dmalloc
		target.Encode = values.Encode
		target.Decode = values.Decode
		target.Chit = values.Chit
		target.Cmiss = values.Cmiss
		target.Size = values.Size
	}

	static __typeInfo = $.registerStructType(
		"proto.Stats",
		() => new Stats(),
		() => [],
		Stats,
		() => [/* @__PURE__ */ $.structField("Emalloc", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("Dmalloc", /* @__PURE__ */ $.basicType("uint64"), [1], 8, true), /* @__PURE__ */ $.structField("Encode", /* @__PURE__ */ $.basicType("uint64"), [2], 16, true), /* @__PURE__ */ $.structField("Decode", /* @__PURE__ */ $.basicType("uint64"), [3], 24, true), /* @__PURE__ */ $.structField("Chit", /* @__PURE__ */ $.basicType("uint64"), [4], 32, true), /* @__PURE__ */ $.structField("Cmiss", /* @__PURE__ */ $.basicType("uint64"), [5], 40, true), /* @__PURE__ */ $.structField("Size", /* @__PURE__ */ $.basicType("uint64"), [6], 48, true)]
	)
}

export class InternalMessageInfo {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): InternalMessageInfo {
		return new InternalMessageInfo(this, true)
	}

	public __goscriptAssign(source: InternalMessageInfo): void {
	}

	public async DiscardUnknown(m: __goscript_proto.Message | null): globalThis.Promise<void> {
		await __goscript_discard.DiscardUnknown(m)
	}

	public async Marshal(b: $.Slice<number>, m: __goscript_proto.Message | null, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		return $.markAsStructValue($.cloneStructValue(new protoV2.MarshalOptions({Deterministic: deterministic}, true))).MarshalAppend(b, await __goscript_proto.MessageV2((m as __goscript_proto.GeneratedMessage | null)))
	}

	public async Merge(dst: __goscript_proto.Message | null, src: __goscript_proto.Message | null): globalThis.Promise<void> {
		await protoV2.Merge(await __goscript_proto.MessageV2((dst as __goscript_proto.GeneratedMessage | null)), await __goscript_proto.MessageV2((src as __goscript_proto.GeneratedMessage | null)))
	}

	public async Size(m: __goscript_proto.Message | null): globalThis.Promise<number> {
		return protoV2.Size(await __goscript_proto.MessageV2((m as __goscript_proto.GeneratedMessage | null)))
	}

	public async Unmarshal(m: __goscript_proto.Message | null, b: $.Slice<number>): globalThis.Promise<$.GoError> {
		return $.markAsStructValue($.cloneStructValue(new protoV2.UnmarshalOptions({Merge: true}, true))).Unmarshal(b, await __goscript_proto.MessageV2((m as __goscript_proto.GeneratedMessage | null)))
	}

	static __typeInfo = $.registerStructType(
		"proto.InternalMessageInfo",
		() => new InternalMessageInfo(),
		() => [$.methodSignature("DiscardUnknown", [["m", "protoiface.MessageV1"]], [], true), $.methodSignature("Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["m", "protoiface.MessageV1"], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Merge", [["dst", "protoiface.MessageV1"], ["src", "protoiface.MessageV1"]], [], true), $.methodSignature("Size", [["m", "protoiface.MessageV1"]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Unmarshal", [["m", "protoiface.MessageV1"], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		InternalMessageInfo,
		() => []
	)
}

export let ErrNil: $.GoError = errors.New("proto: Marshal called with nil")

export function __goscript_set_ErrNil(__goscriptValue: $.GoError): void {
	ErrNil = __goscriptValue
}

export let ErrTooLarge: $.GoError = errors.New("proto: message encodes to over 2 GB")

export function __goscript_set_ErrTooLarge(__goscriptValue: $.GoError): void {
	ErrTooLarge = __goscriptValue
}

export let ErrInternalBadWireType: $.GoError = errors.New("proto: internal error: bad wiretype for oneof")

export function __goscript_set_ErrInternalBadWireType(__goscriptValue: $.GoError): void {
	ErrInternalBadWireType = __goscriptValue
}

export function GetStats(): Stats {
	return new Stats(undefined, true)
}

export function MarshalMessageSet(_p0: any): [$.Slice<number>, $.GoError] {
	return [null, errors.New("proto: not implemented")]
}

export function UnmarshalMessageSet(_p0: $.Slice<number>, _p1: any): $.GoError {
	return errors.New("proto: not implemented")
}

export function MarshalMessageSetJSON(_p0: any): [$.Slice<number>, $.GoError] {
	return [null, errors.New("proto: not implemented")]
}

export function UnmarshalMessageSetJSON(_p0: $.Slice<number>, _p1: any): $.GoError {
	return errors.New("proto: not implemented")
}

export function RegisterMessageSetType(_p0: __goscript_proto.Message | null, _p1: number, _p2: string): void {
}

export function EnumName(m: globalThis.Map<number, string> | null, v: number): string {
	let [s, ok] = $.mapGet<number, string, string>(m, v, "")
	if (ok) {
		return s
	}
	return strconv.Itoa($.int(v))
}

export async function UnmarshalJSONEnum(m: globalThis.Map<string, number> | null, data: $.Slice<number>, enumName: string): globalThis.Promise<[number, $.GoError]> {
	if ($.arrayIndex(data!, 0) == 34) {
		// New style: enums are strings.
		let repr: $.VarRef<string> = $.varRef("")
		{
			let err = await json.Unmarshal(data, $.interfaceValue(repr, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))))
			if (err != null) {
				return [-1, err]
			}
		}
		let [val, ok] = $.mapGet<string, number, number>(m, repr.value, 0)
		if (!ok) {
			return [0, fmt.Errorf("unrecognized enum %s value %q", enumName, repr.value)]
		}
		return [val, null]
	}
	// Old style: enums are ints.
	let val: $.VarRef<number> = $.varRef(0)
	{
		let err = await json.Unmarshal(data, $.interfaceValue(val, "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32"))))
		if (err != null) {
			return [0, fmt.Errorf("cannot unmarshal %#q into enum %s", $.interfaceValue(data, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), enumName)]
		}
	}
	return [val.value, null]
}
