// Generated file based on timestamp.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_protosize from "./protosize.gs.ts"

import * as __goscript_timestamp from "./timestamp.gs.ts"

import * as __goscript_timestamp_gogo from "./timestamp_gogo.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "./protosize.gs.ts"
import "./timestamp.gs.ts"
import "./timestamp_gogo.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/types", ["types.Timestamp"])

export class Timestamp {
	// Represents seconds of UTC time since Unix epoch
	// 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
	// 9999-12-31T23:59:59Z inclusive.
	public get Seconds(): bigint {
		return this._fields.Seconds
	}

	public set Seconds(value: bigint) {
		this._fields.Seconds = value
	}

	// Non-negative fractions of a second at nanosecond resolution. Negative
	// second values with fractions must still have non-negative nanos values
	// that count forward in time. Must be from 0 to 999,999,999
	// inclusive.
	public get Nanos(): number {
		return this._fields.Nanos
	}

	public set Nanos(value: number) {
		this._fields.Nanos = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		Seconds: bigint
		Nanos: number
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Seconds?: bigint, Nanos?: number, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Seconds: init?.Seconds ?? (0n as bigint),
			Nanos: init?.Nanos ?? (0 as number),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Timestamp {
		return new Timestamp(this, true)
	}

	public __goscriptAssign(source: Timestamp): void {
		const target = this._fields
		const values = source._fields
		target.Seconds = values.Seconds
		target.Nanos = values.Nanos
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: Timestamp | $.VarRef<Timestamp> | null = this;
		const _this$: Timestamp = _this == null ? $.pointerTarget<Timestamp>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Timestamp>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple0: any = $.typeAssertTuple<Timestamp | $.VarRef<Timestamp> | null>(that, /* @__PURE__ */ $.pointerType("types.Timestamp"))
		let that1: Timestamp | $.VarRef<Timestamp> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			let __goscriptTuple1: any = $.typeAssertTuple<Timestamp>(that, "types.Timestamp")
			let that2 = $.varRef(__goscriptTuple1[0])
			let __goscriptShadow0 = __goscriptTuple1[1]
			if (__goscriptShadow0) {
				that1 = that2
			} else {
				return 1
			}
		}
		if (that1 == null) {
			if (_this == null) {
				return 0
			}
			return 1
		} else {
			if (_this == null) {
				return -1
			}
		}
		if ((_this$ as Timestamp).Seconds != $.pointerValue<Timestamp>(that1).Seconds) {
			if ((_this$ as Timestamp).Seconds < $.pointerValue<Timestamp>(that1).Seconds) {
				return -1
			}
			return 1
		}
		if ((_this$ as Timestamp).Nanos != $.pointerValue<Timestamp>(that1).Nanos) {
			if ((_this$ as Timestamp).Nanos < $.pointerValue<Timestamp>(that1).Nanos) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as Timestamp).XXX_unrecognized, $.pointerValue<Timestamp>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_292007bbfe81227e, $.arrayToSlice<number>([0])]
	}

	public Equal(that: any): boolean {
		const _this: Timestamp | $.VarRef<Timestamp> | null = this;
		const _this$: Timestamp = _this == null ? $.pointerTarget<Timestamp>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Timestamp>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple2: any = $.typeAssertTuple<Timestamp | $.VarRef<Timestamp> | null>(that, /* @__PURE__ */ $.pointerType("types.Timestamp"))
		let that1: Timestamp | $.VarRef<Timestamp> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			let __goscriptTuple3: any = $.typeAssertTuple<Timestamp>(that, "types.Timestamp")
			let that2 = $.varRef(__goscriptTuple3[0])
			let __goscriptShadow1 = __goscriptTuple3[1]
			if (__goscriptShadow1) {
				that1 = that2
			} else {
				return false
			}
		}
		if (that1 == null) {
			return _this == null
		} else {
			if (_this == null) {
				return false
			}
		}
		if ((_this$ as Timestamp).Seconds != $.pointerValue<Timestamp>(that1).Seconds) {
			return false
		}
		if ((_this$ as Timestamp).Nanos != $.pointerValue<Timestamp>(that1).Nanos) {
			return false
		}
		if (!bytes.Equal((_this$ as Timestamp).XXX_unrecognized, $.pointerValue<Timestamp>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetNanos(): number {
		const m: Timestamp | $.VarRef<Timestamp> | null = this;
		if (m != null) {
			return $.pointerValue<Timestamp>(m).Nanos
		}
		return 0
	}

	public GetSeconds(): bigint {
		const m: Timestamp | $.VarRef<Timestamp> | null = this;
		if (m != null) {
			return $.pointerValue<Timestamp>(m).Seconds
		}
		return 0n
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Timestamp | $.VarRef<Timestamp> | null = this;
		const _this$: Timestamp = _this == null ? $.pointerTarget<Timestamp>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Timestamp>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 6, "string")
		s = $.appendOne(s, "&types.Timestamp{")
		s = $.appendOne(s, $.concatString(($.concatString("Seconds: ", await fmt.Sprintf("%#v", $.basicInterfaceValue((_this$ as Timestamp).Seconds, "int64")))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Nanos: ", await fmt.Sprintf("%#v", $.basicInterfaceValue((_this$ as Timestamp).Nanos, "int32")))), ",\n"))
		if ((_this$ as Timestamp).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Timestamp).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Timestamp | $.VarRef<Timestamp> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Timestamp).Size() : Timestamp.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Timestamp).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Timestamp.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Timestamp | $.VarRef<Timestamp> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Timestamp).Size() : Timestamp.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Timestamp).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Timestamp.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Timestamp | $.VarRef<Timestamp> | null = this;
		const m$: Timestamp = m == null ? $.pointerTarget<Timestamp>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Timestamp>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Timestamp).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Timestamp).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Timestamp).XXX_unrecognized)
		}
		if ((m$ as Timestamp).Nanos != 0) {
			i = encodeVarintTimestamp(dAtA, i, $.uint64((m$ as Timestamp).Nanos))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ((m$ as Timestamp).Seconds != 0n) {
			i = encodeVarintTimestamp(dAtA, i, $.uint64((m$ as Timestamp).Seconds))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: Timestamp | $.VarRef<Timestamp> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Timestamp).Size() : Timestamp.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: Timestamp | $.VarRef<Timestamp> | null = this;
		$.assignStruct($.pointerValue<Timestamp>(m), $.markAsStructValue(new Timestamp()))
	}

	public Size(): number {
		const m: Timestamp | $.VarRef<Timestamp> | null = this;
		let n: number = 0
		const m$: Timestamp = m == null ? $.pointerTarget<Timestamp>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Timestamp>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Timestamp).Seconds != 0n) {
			n = n + (1 + sovTimestamp($.uint64((m$ as Timestamp).Seconds)))
		}
		if ((m$ as Timestamp).Nanos != 0) {
			n = n + (1 + sovTimestamp($.uint64((m$ as Timestamp).Nanos)))
		}
		if ((m$ as Timestamp).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Timestamp).XXX_unrecognized))
		}
		return n
	}

	public async String(): globalThis.Promise<string> {
		const ts: Timestamp | $.VarRef<Timestamp> | null = this;
		return __goscript_timestamp.TimestampString(ts)
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Timestamp | $.VarRef<Timestamp> | null = this;
		const m$: Timestamp = m == null ? $.pointerTarget<Timestamp>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Timestamp>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowTimestamp
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: Timestamp: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Timestamp: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Seconds", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Timestamp).Seconds = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTimestamp
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++;
						;(m$ as Timestamp).Seconds = $.int64Or((m$ as Timestamp).Seconds, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Nanos", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Timestamp).Nanos = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowTimestamp
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++;
						;(m$ as Timestamp).Nanos = (m$ as Timestamp).Nanos | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipTimestamp($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthTimestamp
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Timestamp).XXX_unrecognized = $.appendSlice((m$ as Timestamp).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public async XXX_DiscardUnknown(): globalThis.Promise<void> {
		const m: Timestamp | $.VarRef<Timestamp> | null = this;
		await xxx_messageInfo_Timestamp.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.Timestamp", /* @__PURE__ */ $.pointerType("types.Timestamp")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: Timestamp | $.VarRef<Timestamp> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Timestamp.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.Timestamp", /* @__PURE__ */ $.pointerType("types.Timestamp")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Timestamp).MarshalToSizedBuffer(b) : Timestamp.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: Timestamp | $.VarRef<Timestamp> | null = this;
		await xxx_messageInfo_Timestamp.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.Timestamp", /* @__PURE__ */ $.pointerType("types.Timestamp")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.Timestamp"
	}

	public XXX_Size(): number {
		const m: Timestamp | $.VarRef<Timestamp> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Timestamp).Size() : Timestamp.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Timestamp | $.VarRef<Timestamp> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Timestamp).Unmarshal(b) : Timestamp.prototype.Unmarshal.call(m, b))
	}

	public XXX_WellKnownType(): string {
		return "Timestamp"
	}

	static __typeInfo = $.registerStructType(
		"types.Timestamp",
		() => new Timestamp(),
		() => [$.methodSignature("Compare", [["that", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Equal", [["that", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetNanos", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetSeconds", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoSize", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_MessageName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_WellKnownType", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Timestamp,
		() => [/* @__PURE__ */ $.structField("Seconds", /* @__PURE__ */ $.basicType("int64"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=seconds,proto3\" json:\"seconds,omitempty\"" }), /* @__PURE__ */ $.structField("Nanos", /* @__PURE__ */ $.basicType("int32"), [1], 8, true, { tag: "protobuf:\"varint,2,opt,name=nanos,proto3\" json:\"nanos,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 12, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 40, true, { tag: "json:\"-\"" })]
	)
}

export let xxx_messageInfo_Timestamp: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Timestamp(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Timestamp.value, __goscriptValue)
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.Timestamp", /* @__PURE__ */ $.pointerType("types.Timestamp")), "google.protobuf.Timestamp")
}

async function __goscriptInit1(): globalThis.Promise<void> {
	proto.RegisterFile("google/protobuf/timestamp.proto", fileDescriptor_292007bbfe81227e)
}

export let fileDescriptor_292007bbfe81227e: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 79, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 47, 201, 204, 77, 45, 46, 73, 204, 45, 208, 3, 11, 9, 241, 67, 20, 232, 193, 20, 40, 89, 115, 113, 134, 192, 212, 8, 73, 112, 177, 23, 167, 38, 231, 231, 165, 20, 75, 48, 42, 48, 106, 48, 7, 193, 184, 66, 34, 92, 172, 121, 137, 121, 249, 197, 18, 76, 10, 140, 26, 172, 65, 16, 142, 83, 3, 227, 141, 135, 114, 12, 31, 30, 202, 49, 174, 120, 36, 199, 120, 226, 145, 28, 227, 133, 71, 114, 140, 15, 30, 201, 49, 190, 120, 36, 199, 240, 225, 145, 28, 227, 138, 199, 114, 140, 39, 30, 203, 49, 114, 9, 39, 231, 231, 234, 161, 89, 238, 196, 7, 183, 58, 0, 36, 20, 192, 24, 197, 90, 82, 89, 144, 90, 252, 131, 145, 113, 17, 19, 179, 123, 128, 211, 42, 38, 57, 119, 136, 158, 0, 168, 30, 189, 240, 212, 156, 28, 239, 188, 252, 242, 188, 16, 144, 202, 36, 54, 176, 97, 198, 128, 0, 0, 0, 255, 255, 11, 35, 131, 221, 250, 0, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_292007bbfe81227e(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_292007bbfe81227e = __goscriptValue
}

export async function valueToGoStringTimestamp(v: any, typ: string): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}

export function encodeVarintTimestamp(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovTimestamp(v))
	let base = offset
	for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export function sovTimestamp(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozTimestamp(x: bigint): number {
	let n: number = 0
	return sovTimestamp($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export function skipTimestamp(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowTimestamp]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iNdEx)] as number)
			iNdEx++
			wire = $.uint64Or(wire, $.uint64Shl(($.uint64And($.uint64(b), 127n)), shift))
			if (b < 0x80) {
				break
			}
		}
		let wireType = $.int($.uint64And(wire, 7n))
		switch (wireType) {
			case 0:
			{
				for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
					if (shift >= 64) {
						return [0, ErrIntOverflowTimestamp]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iNdEx - 1)] as number) < 0x80) {
						break
					}
				}
				break
			}
			case 1:
			{
				iNdEx = iNdEx + (8)
				break
			}
			case 2:
			{
				let length: number = 0
				for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
					if (shift >= 64) {
						return [0, ErrIntOverflowTimestamp]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthTimestamp]
				}
				iNdEx = iNdEx + (length)
				break
			}
			case 3:
			{
				depth++
				break
			}
			case 4:
			{
				if (depth == 0) {
					return [0, ErrUnexpectedEndOfGroupTimestamp]
				}
				depth--
				break
			}
			case 5:
			{
				iNdEx = iNdEx + (4)
				break
			}
			default:
			{
				return [0, fmt.Errorf("proto: illegal wireType %d", $.basicInterfaceValue(wireType, "int"))]
				break
			}
		}
		if (iNdEx < 0) {
			return [0, ErrInvalidLengthTimestamp]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthTimestamp: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthTimestamp(__goscriptValue: $.GoError): void {
	ErrInvalidLengthTimestamp = __goscriptValue
}

export let ErrIntOverflowTimestamp: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowTimestamp(__goscriptValue: $.GoError): void {
	ErrIntOverflowTimestamp = __goscriptValue
}

export let ErrUnexpectedEndOfGroupTimestamp: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupTimestamp(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupTimestamp = __goscriptValue
}

export { __goscriptInit0 }

export { __goscriptInit1 }
