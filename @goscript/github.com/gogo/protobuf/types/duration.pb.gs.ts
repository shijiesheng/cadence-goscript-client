// Generated file based on duration.pb.go
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

import * as __goscript_duration from "./duration.gs.ts"

import * as __goscript_duration_gogo from "./duration_gogo.gs.ts"

import * as __goscript_protosize from "./protosize.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "./duration.gs.ts"
import "./duration_gogo.gs.ts"
import "./protosize.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/types", ["types.Duration"])

export class Duration {
	// Signed seconds of the span of time. Must be from -315,576,000,000
	// to +315,576,000,000 inclusive. Note: these bounds are computed from:
	// 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
	public get Seconds(): bigint {
		return this._fields.Seconds
	}

	public set Seconds(value: bigint) {
		this._fields.Seconds = value
	}

	// Signed fractions of a second at nanosecond resolution of the span
	// of time. Durations less than one second are represented with a 0
	// `seconds` field and a positive or negative `nanos` field. For durations
	// of one second or more, a non-zero value for the `nanos` field must be
	// of the same sign as the `seconds` field. Must be from -999,999,999
	// to +999,999,999 inclusive.
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

	public clone(): Duration {
		return new Duration(this, true)
	}

	public __goscriptAssign(source: Duration): void {
		const target = this._fields
		const values = source._fields
		target.Seconds = values.Seconds
		target.Nanos = values.Nanos
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: Duration | $.VarRef<Duration> | null = this;
		const _this$: Duration = _this == null ? $.pointerTarget<Duration>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Duration>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple0: any = $.typeAssertTuple<Duration | $.VarRef<Duration> | null>(that, /* @__PURE__ */ $.pointerType("types.Duration"))
		let that1: Duration | $.VarRef<Duration> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			let __goscriptTuple1: any = $.typeAssertTuple<Duration>(that, "types.Duration")
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
		if ((_this$ as Duration).Seconds != $.pointerValue<Duration>(that1).Seconds) {
			if ((_this$ as Duration).Seconds < $.pointerValue<Duration>(that1).Seconds) {
				return -1
			}
			return 1
		}
		if ((_this$ as Duration).Nanos != $.pointerValue<Duration>(that1).Nanos) {
			if ((_this$ as Duration).Nanos < $.pointerValue<Duration>(that1).Nanos) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as Duration).XXX_unrecognized, $.pointerValue<Duration>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_23597b2ebd7ac6c5, $.arrayToSlice<number>([0])]
	}

	public Equal(that: any): boolean {
		const _this: Duration | $.VarRef<Duration> | null = this;
		const _this$: Duration = _this == null ? $.pointerTarget<Duration>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Duration>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple2: any = $.typeAssertTuple<Duration | $.VarRef<Duration> | null>(that, /* @__PURE__ */ $.pointerType("types.Duration"))
		let that1: Duration | $.VarRef<Duration> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			let __goscriptTuple3: any = $.typeAssertTuple<Duration>(that, "types.Duration")
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
		if ((_this$ as Duration).Seconds != $.pointerValue<Duration>(that1).Seconds) {
			return false
		}
		if ((_this$ as Duration).Nanos != $.pointerValue<Duration>(that1).Nanos) {
			return false
		}
		if (!bytes.Equal((_this$ as Duration).XXX_unrecognized, $.pointerValue<Duration>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetNanos(): number {
		const m: Duration | $.VarRef<Duration> | null = this;
		if (m != null) {
			return $.pointerValue<Duration>(m).Nanos
		}
		return 0
	}

	public GetSeconds(): bigint {
		const m: Duration | $.VarRef<Duration> | null = this;
		if (m != null) {
			return $.pointerValue<Duration>(m).Seconds
		}
		return 0n
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Duration | $.VarRef<Duration> | null = this;
		const _this$: Duration = _this == null ? $.pointerTarget<Duration>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Duration>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 6, "string")
		s = $.appendOne(s, "&types.Duration{")
		s = $.appendOne(s, $.concatString(($.concatString("Seconds: ", await fmt.Sprintf("%#v", $.basicInterfaceValue((_this$ as Duration).Seconds, "int64")))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Nanos: ", await fmt.Sprintf("%#v", $.basicInterfaceValue((_this$ as Duration).Nanos, "int32")))), ",\n"))
		if ((_this$ as Duration).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Duration).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Duration | $.VarRef<Duration> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Duration).Size() : Duration.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Duration).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Duration.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Duration | $.VarRef<Duration> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Duration).Size() : Duration.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Duration).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Duration.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Duration | $.VarRef<Duration> | null = this;
		const m$: Duration = m == null ? $.pointerTarget<Duration>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Duration>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Duration).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Duration).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Duration).XXX_unrecognized)
		}
		if ((m$ as Duration).Nanos != 0) {
			i = encodeVarintDuration(dAtA, i, $.uint64((m$ as Duration).Nanos))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ((m$ as Duration).Seconds != 0n) {
			i = encodeVarintDuration(dAtA, i, $.uint64((m$ as Duration).Seconds))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: Duration | $.VarRef<Duration> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Duration).Size() : Duration.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: Duration | $.VarRef<Duration> | null = this;
		$.assignStruct($.pointerValue<Duration>(m), $.markAsStructValue(new Duration()))
	}

	public Size(): number {
		const m: Duration | $.VarRef<Duration> | null = this;
		let n: number = 0
		const m$: Duration = m == null ? $.pointerTarget<Duration>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Duration>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Duration).Seconds != 0n) {
			n = n + (1 + sovDuration($.uint64((m$ as Duration).Seconds)))
		}
		if ((m$ as Duration).Nanos != 0) {
			n = n + (1 + sovDuration($.uint64((m$ as Duration).Nanos)))
		}
		if ((m$ as Duration).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Duration).XXX_unrecognized))
		}
		return n
	}

	public async String(): globalThis.Promise<string> {
		const d: Duration | $.VarRef<Duration> | null = this;
		let [td, err] = __goscript_duration.DurationFromProto(d)
		if (err != null) {
			return fmt.Sprintf("(%v)", (err as any))
		}
		return time.Duration_String(td)
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Duration | $.VarRef<Duration> | null = this;
		const m$: Duration = m == null ? $.pointerTarget<Duration>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Duration>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDuration
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
				return fmt.Errorf("proto: Duration: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Duration: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Seconds", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Duration).Seconds = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDuration
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++;
						;(m$ as Duration).Seconds = $.int64Or((m$ as Duration).Seconds, $.int64Shl($.int64(b & 0x7F), shift))
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
					;(m$ as Duration).Nanos = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDuration
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++;
						;(m$ as Duration).Nanos = (m$ as Duration).Nanos | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipDuration($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDuration
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Duration).XXX_unrecognized = $.appendSlice((m$ as Duration).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Duration | $.VarRef<Duration> | null = this;
		await xxx_messageInfo_Duration.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.Duration", /* @__PURE__ */ $.pointerType("types.Duration")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: Duration | $.VarRef<Duration> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Duration.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.Duration", /* @__PURE__ */ $.pointerType("types.Duration")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Duration).MarshalToSizedBuffer(b) : Duration.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: Duration | $.VarRef<Duration> | null = this;
		await xxx_messageInfo_Duration.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.Duration", /* @__PURE__ */ $.pointerType("types.Duration")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.Duration"
	}

	public XXX_Size(): number {
		const m: Duration | $.VarRef<Duration> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Duration).Size() : Duration.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Duration | $.VarRef<Duration> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Duration).Unmarshal(b) : Duration.prototype.Unmarshal.call(m, b))
	}

	public XXX_WellKnownType(): string {
		return "Duration"
	}

	static __typeInfo = $.registerStructType(
		"types.Duration",
		() => new Duration(),
		() => [$.methodSignature("Compare", [["that", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Equal", [["that", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetNanos", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetSeconds", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoSize", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_MessageName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_WellKnownType", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Duration,
		() => [/* @__PURE__ */ $.structField("Seconds", /* @__PURE__ */ $.basicType("int64"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=seconds,proto3\" json:\"seconds,omitempty\"" }), /* @__PURE__ */ $.structField("Nanos", /* @__PURE__ */ $.basicType("int32"), [1], 8, true, { tag: "protobuf:\"varint,2,opt,name=nanos,proto3\" json:\"nanos,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 12, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 40, true, { tag: "json:\"-\"" })]
	)
}

export let xxx_messageInfo_Duration: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Duration(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Duration.value, __goscriptValue)
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.Duration", /* @__PURE__ */ $.pointerType("types.Duration")), "google.protobuf.Duration")
}

async function __goscriptInit1(): globalThis.Promise<void> {
	proto.RegisterFile("google/protobuf/duration.proto", fileDescriptor_23597b2ebd7ac6c5)
}

export let fileDescriptor_23597b2ebd7ac6c5: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 75, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 79, 41, 45, 74, 44, 201, 204, 207, 211, 3, 139, 8, 241, 67, 228, 245, 96, 242, 74, 86, 92, 28, 46, 80, 37, 66, 18, 92, 236, 197, 169, 201, 249, 121, 41, 197, 18, 140, 10, 140, 26, 204, 65, 48, 174, 144, 8, 23, 107, 94, 98, 94, 126, 177, 4, 147, 2, 163, 6, 107, 16, 132, 227, 84, 127, 227, 161, 28, 195, 135, 135, 114, 140, 43, 30, 201, 49, 158, 120, 36, 199, 120, 225, 145, 28, 227, 131, 71, 114, 140, 47, 30, 201, 49, 124, 120, 36, 199, 184, 226, 177, 28, 227, 137, 199, 114, 140, 92, 194, 201, 249, 185, 122, 104, 86, 59, 241, 194, 44, 14, 0, 137, 4, 48, 70, 177, 150, 84, 22, 164, 22, 255, 96, 100, 92, 196, 196, 236, 30, 224, 180, 138, 73, 206, 29, 162, 37, 0, 170, 69, 47, 60, 53, 39, 199, 59, 47, 191, 60, 47, 4, 164, 50, 137, 13, 108, 150, 49, 32, 0, 0, 255, 255, 138, 28, 100, 78, 246, 0, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_23597b2ebd7ac6c5(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_23597b2ebd7ac6c5 = __goscriptValue
}

export async function valueToGoStringDuration(v: any, typ: string): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}

export function encodeVarintDuration(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovDuration(v))
	let base = offset
	for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export function sovDuration(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozDuration(x: bigint): number {
	let n: number = 0
	return sovDuration($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export function skipDuration(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowDuration]
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
						return [0, ErrIntOverflowDuration]
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
						return [0, ErrIntOverflowDuration]
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
					return [0, ErrInvalidLengthDuration]
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
					return [0, ErrUnexpectedEndOfGroupDuration]
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
			return [0, ErrInvalidLengthDuration]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthDuration: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthDuration(__goscriptValue: $.GoError): void {
	ErrInvalidLengthDuration = __goscriptValue
}

export let ErrIntOverflowDuration: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowDuration(__goscriptValue: $.GoError): void {
	ErrIntOverflowDuration = __goscriptValue
}

export let ErrUnexpectedEndOfGroupDuration: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupDuration(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupDuration = __goscriptValue
}

export { __goscriptInit0 }

export { __goscriptInit1 }
