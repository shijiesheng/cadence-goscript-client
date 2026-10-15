// Generated file based on wrappers.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as encoding_binary from "@goscript/encoding/binary/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as __goscript_protosize from "./protosize.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "./protosize.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/types", ["types.DoubleValue", "types.FloatValue", "types.Int64Value", "types.UInt64Value", "types.Int32Value", "types.UInt32Value", "types.BoolValue", "types.StringValue", "types.BytesValue", "types.randyWrappers"])

export type randyWrappers = {
	Float32(): number
	Float64(): number
	Int31(): number
	Int63(): bigint
	Intn(n: number): number
	Uint32(): number
}

$.registerInterfaceType(
	"types.randyWrappers",
	null,
	[{ name: "Float32", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float32") }] }, { name: "Float64", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }] }, { name: "Int31", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }] }, { name: "Int63", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }] }, { name: "Intn", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }] }, { name: "Uint32", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("uint32") }] }]
);

export class DoubleValue {
	// The double value.
	public get Value(): number {
		return this._fields.Value
	}

	public set Value(value: number) {
		this._fields.Value = value
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
		Value: number
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Value?: number, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (0 as number),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DoubleValue {
		return new DoubleValue(this, true)
	}

	public __goscriptAssign(source: DoubleValue): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: DoubleValue | $.VarRef<DoubleValue> | null = this;
		const _this$: DoubleValue = _this == null ? $.pointerTarget<DoubleValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<DoubleValue>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple0: any = $.typeAssertTuple<DoubleValue | $.VarRef<DoubleValue> | null>(that, /* @__PURE__ */ $.pointerType("types.DoubleValue"))
		let that1: DoubleValue | $.VarRef<DoubleValue> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			let __goscriptTuple1: any = $.typeAssertTuple<DoubleValue>(that, "types.DoubleValue")
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
		if ((_this$ as DoubleValue).Value != $.pointerValue<DoubleValue>(that1).Value) {
			if ((_this$ as DoubleValue).Value < $.pointerValue<DoubleValue>(that1).Value) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as DoubleValue).XXX_unrecognized, $.pointerValue<DoubleValue>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_5377b62bda767935, $.arrayToSlice<number>([0])]
	}

	public Equal(that: any): boolean {
		const _this: DoubleValue | $.VarRef<DoubleValue> | null = this;
		const _this$: DoubleValue = _this == null ? $.pointerTarget<DoubleValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<DoubleValue>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple2: any = $.typeAssertTuple<DoubleValue | $.VarRef<DoubleValue> | null>(that, /* @__PURE__ */ $.pointerType("types.DoubleValue"))
		let that1: DoubleValue | $.VarRef<DoubleValue> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			let __goscriptTuple3: any = $.typeAssertTuple<DoubleValue>(that, "types.DoubleValue")
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
		if ((_this$ as DoubleValue).Value != $.pointerValue<DoubleValue>(that1).Value) {
			return false
		}
		if (!bytes.Equal((_this$ as DoubleValue).XXX_unrecognized, $.pointerValue<DoubleValue>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetValue(): number {
		const m: DoubleValue | $.VarRef<DoubleValue> | null = this;
		if (m != null) {
			return $.pointerValue<DoubleValue>(m).Value
		}
		return 0
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: DoubleValue | $.VarRef<DoubleValue> | null = this;
		const _this$: DoubleValue = _this == null ? $.pointerTarget<DoubleValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<DoubleValue>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&types.DoubleValue{")
		s = $.appendOne(s, $.concatString(($.concatString("Value: ", await fmt.Sprintf("%#v", $.basicInterfaceValue((_this$ as DoubleValue).Value, "float64")))), ",\n"))
		if ((_this$ as DoubleValue).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as DoubleValue).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DoubleValue | $.VarRef<DoubleValue> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DoubleValue).Size() : DoubleValue.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DoubleValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DoubleValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DoubleValue | $.VarRef<DoubleValue> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DoubleValue).Size() : DoubleValue.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DoubleValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DoubleValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DoubleValue | $.VarRef<DoubleValue> | null = this;
		const m$: DoubleValue = m == null ? $.pointerTarget<DoubleValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DoubleValue>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DoubleValue).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DoubleValue).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DoubleValue).XXX_unrecognized)
		}
		if ((m$ as DoubleValue).Value != 0) {
			i = i - (8)
			$.markAsStructValue($.cloneStructValue($.pointerValue<any>(encoding_binary.LittleEndian))).PutUint64($.goSlice(dAtA, i, undefined), $.uint64(math.Float64bits((m$ as DoubleValue).Value)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x9
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: DoubleValue | $.VarRef<DoubleValue> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DoubleValue).Size() : DoubleValue.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: DoubleValue | $.VarRef<DoubleValue> | null = this;
		$.assignStruct($.pointerValue<DoubleValue>(m), $.markAsStructValue(new DoubleValue()))
	}

	public Size(): number {
		const m: DoubleValue | $.VarRef<DoubleValue> | null = this;
		let n: number = 0
		const m$: DoubleValue = m == null ? $.pointerTarget<DoubleValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DoubleValue>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as DoubleValue).Value != 0) {
			n = n + (9)
		}
		if ((m$ as DoubleValue).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DoubleValue).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: DoubleValue | $.VarRef<DoubleValue> | null = this;
		const _this$: DoubleValue = _this == null ? $.pointerTarget<DoubleValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<DoubleValue>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&DoubleValue{", $.concatString(($.concatString("Value:", fmt.Sprintf("%v", $.basicInterfaceValue((_this$ as DoubleValue).Value, "float64")))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as DoubleValue).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DoubleValue | $.VarRef<DoubleValue> | null = this;
		const m$: DoubleValue = m == null ? $.pointerTarget<DoubleValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DoubleValue>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWrappers
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
				return fmt.Errorf("proto: DoubleValue: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DoubleValue: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 1) {
						return fmt.Errorf("proto: wrong wireType = %d for field Value", $.basicInterfaceValue(wireType, "int"))
					}
					let v: bigint = 0n
					if ((iNdEx + 8) > l) {
						return io.ErrUnexpectedEOF
					}
					v = $.uint64($.markAsStructValue($.cloneStructValue($.pointerValue<any>(encoding_binary.LittleEndian))).Uint64($.goSlice(dAtA, iNdEx, undefined)))
					iNdEx = iNdEx + (8);
					;(m$ as DoubleValue).Value = math.Float64frombits(v)
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWrappers($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWrappers
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DoubleValue).XXX_unrecognized = $.appendSlice((m$ as DoubleValue).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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

	public XXX_DiscardUnknown(): void {
		const m: DoubleValue | $.VarRef<DoubleValue> | null = this;
		xxx_messageInfo_DoubleValue.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.DoubleValue", /* @__PURE__ */ $.pointerType("types.DoubleValue")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: DoubleValue | $.VarRef<DoubleValue> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DoubleValue.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.DoubleValue", /* @__PURE__ */ $.pointerType("types.DoubleValue")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DoubleValue).MarshalToSizedBuffer(b) : DoubleValue.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: DoubleValue | $.VarRef<DoubleValue> | null = this;
		xxx_messageInfo_DoubleValue.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.DoubleValue", /* @__PURE__ */ $.pointerType("types.DoubleValue")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.DoubleValue"
	}

	public XXX_Size(): number {
		const m: DoubleValue | $.VarRef<DoubleValue> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DoubleValue).Size() : DoubleValue.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DoubleValue | $.VarRef<DoubleValue> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DoubleValue).Unmarshal(b) : DoubleValue.prototype.Unmarshal.call(m, b))
	}

	public XXX_WellKnownType(): string {
		return "DoubleValue"
	}

	static __typeInfo = $.registerStructType(
		"types.DoubleValue",
		() => new DoubleValue(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_WellKnownType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		DoubleValue,
		() => [{ name: "Value", key: "Value", type: /* @__PURE__ */ $.basicType("float64"), tag: "protobuf:\"fixed64,1,opt,name=value,proto3\" json:\"value,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class FloatValue {
	// The float value.
	public get Value(): number {
		return this._fields.Value
	}

	public set Value(value: number) {
		this._fields.Value = value
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
		Value: number
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Value?: number, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (0 as number),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FloatValue {
		return new FloatValue(this, true)
	}

	public __goscriptAssign(source: FloatValue): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: FloatValue | $.VarRef<FloatValue> | null = this;
		const _this$: FloatValue = _this == null ? $.pointerTarget<FloatValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<FloatValue>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple5: any = $.typeAssertTuple<FloatValue | $.VarRef<FloatValue> | null>(that, /* @__PURE__ */ $.pointerType("types.FloatValue"))
		let that1: FloatValue | $.VarRef<FloatValue> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		if (!ok) {
			let __goscriptTuple6: any = $.typeAssertTuple<FloatValue>(that, "types.FloatValue")
			let that2 = $.varRef(__goscriptTuple6[0])
			let __goscriptShadow2 = __goscriptTuple6[1]
			if (__goscriptShadow2) {
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
		if ((_this$ as FloatValue).Value != $.pointerValue<FloatValue>(that1).Value) {
			if ((_this$ as FloatValue).Value < $.pointerValue<FloatValue>(that1).Value) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as FloatValue).XXX_unrecognized, $.pointerValue<FloatValue>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_5377b62bda767935, $.arrayToSlice<number>([1])]
	}

	public Equal(that: any): boolean {
		const _this: FloatValue | $.VarRef<FloatValue> | null = this;
		const _this$: FloatValue = _this == null ? $.pointerTarget<FloatValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<FloatValue>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple7: any = $.typeAssertTuple<FloatValue | $.VarRef<FloatValue> | null>(that, /* @__PURE__ */ $.pointerType("types.FloatValue"))
		let that1: FloatValue | $.VarRef<FloatValue> | null = __goscriptTuple7[0]
		let ok = __goscriptTuple7[1]
		if (!ok) {
			let __goscriptTuple8: any = $.typeAssertTuple<FloatValue>(that, "types.FloatValue")
			let that2 = $.varRef(__goscriptTuple8[0])
			let __goscriptShadow3 = __goscriptTuple8[1]
			if (__goscriptShadow3) {
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
		if ((_this$ as FloatValue).Value != $.pointerValue<FloatValue>(that1).Value) {
			return false
		}
		if (!bytes.Equal((_this$ as FloatValue).XXX_unrecognized, $.pointerValue<FloatValue>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetValue(): number {
		const m: FloatValue | $.VarRef<FloatValue> | null = this;
		if (m != null) {
			return $.pointerValue<FloatValue>(m).Value
		}
		return 0
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: FloatValue | $.VarRef<FloatValue> | null = this;
		const _this$: FloatValue = _this == null ? $.pointerTarget<FloatValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<FloatValue>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&types.FloatValue{")
		s = $.appendOne(s, $.concatString(($.concatString("Value: ", await fmt.Sprintf("%#v", $.basicInterfaceValue((_this$ as FloatValue).Value, "float32")))), ",\n"))
		if ((_this$ as FloatValue).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as FloatValue).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: FloatValue | $.VarRef<FloatValue> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FloatValue).Size() : FloatValue.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple9: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FloatValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FloatValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FloatValue | $.VarRef<FloatValue> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FloatValue).Size() : FloatValue.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FloatValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FloatValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FloatValue | $.VarRef<FloatValue> | null = this;
		const m$: FloatValue = m == null ? $.pointerTarget<FloatValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FloatValue>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as FloatValue).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as FloatValue).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as FloatValue).XXX_unrecognized)
		}
		if ((m$ as FloatValue).Value != 0) {
			i = i - (4)
			$.markAsStructValue($.cloneStructValue($.pointerValue<any>(encoding_binary.LittleEndian))).PutUint32($.goSlice(dAtA, i, undefined), $.uint(math.Float32bits((m$ as FloatValue).Value), 32))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xd
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: FloatValue | $.VarRef<FloatValue> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FloatValue).Size() : FloatValue.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: FloatValue | $.VarRef<FloatValue> | null = this;
		$.assignStruct($.pointerValue<FloatValue>(m), $.markAsStructValue(new FloatValue()))
	}

	public Size(): number {
		const m: FloatValue | $.VarRef<FloatValue> | null = this;
		let n: number = 0
		const m$: FloatValue = m == null ? $.pointerTarget<FloatValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FloatValue>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as FloatValue).Value != 0) {
			n = n + (5)
		}
		if ((m$ as FloatValue).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as FloatValue).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: FloatValue | $.VarRef<FloatValue> | null = this;
		const _this$: FloatValue = _this == null ? $.pointerTarget<FloatValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<FloatValue>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&FloatValue{", $.concatString(($.concatString("Value:", fmt.Sprintf("%v", $.basicInterfaceValue((_this$ as FloatValue).Value, "float32")))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as FloatValue).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: FloatValue | $.VarRef<FloatValue> | null = this;
		const m$: FloatValue = m == null ? $.pointerTarget<FloatValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FloatValue>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWrappers
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: FloatValue: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: FloatValue: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 5) {
						return fmt.Errorf("proto: wrong wireType = %d for field Value", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					if ((iNdEx + 4) > l) {
						return io.ErrUnexpectedEOF
					}
					v = $.uint($.markAsStructValue($.cloneStructValue($.pointerValue<any>(encoding_binary.LittleEndian))).Uint32($.goSlice(dAtA, iNdEx, undefined)), 32)
					iNdEx = iNdEx + (4);
					;(m$ as FloatValue).Value = math.Float32frombits(v)
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWrappers($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWrappers
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as FloatValue).XXX_unrecognized = $.appendSlice((m$ as FloatValue).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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

	public XXX_DiscardUnknown(): void {
		const m: FloatValue | $.VarRef<FloatValue> | null = this;
		xxx_messageInfo_FloatValue.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.FloatValue", /* @__PURE__ */ $.pointerType("types.FloatValue")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: FloatValue | $.VarRef<FloatValue> | null = this;
		if (deterministic) {
			return xxx_messageInfo_FloatValue.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.FloatValue", /* @__PURE__ */ $.pointerType("types.FloatValue")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FloatValue).MarshalToSizedBuffer(b) : FloatValue.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: FloatValue | $.VarRef<FloatValue> | null = this;
		xxx_messageInfo_FloatValue.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.FloatValue", /* @__PURE__ */ $.pointerType("types.FloatValue")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.FloatValue"
	}

	public XXX_Size(): number {
		const m: FloatValue | $.VarRef<FloatValue> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FloatValue).Size() : FloatValue.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: FloatValue | $.VarRef<FloatValue> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FloatValue).Unmarshal(b) : FloatValue.prototype.Unmarshal.call(m, b))
	}

	public XXX_WellKnownType(): string {
		return "FloatValue"
	}

	static __typeInfo = $.registerStructType(
		"types.FloatValue",
		() => new FloatValue(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float32") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_WellKnownType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		FloatValue,
		() => [{ name: "Value", key: "Value", type: /* @__PURE__ */ $.basicType("float32"), tag: "protobuf:\"fixed32,1,opt,name=value,proto3\" json:\"value,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class Int64Value {
	// The int64 value.
	public get Value(): bigint {
		return this._fields.Value
	}

	public set Value(value: bigint) {
		this._fields.Value = value
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
		Value: bigint
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Value?: bigint, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (0n as bigint),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Int64Value {
		return new Int64Value(this, true)
	}

	public __goscriptAssign(source: Int64Value): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: Int64Value | $.VarRef<Int64Value> | null = this;
		const _this$: Int64Value = _this == null ? $.pointerTarget<Int64Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Int64Value>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple10: any = $.typeAssertTuple<Int64Value | $.VarRef<Int64Value> | null>(that, /* @__PURE__ */ $.pointerType("types.Int64Value"))
		let that1: Int64Value | $.VarRef<Int64Value> | null = __goscriptTuple10[0]
		let ok = __goscriptTuple10[1]
		if (!ok) {
			let __goscriptTuple11: any = $.typeAssertTuple<Int64Value>(that, "types.Int64Value")
			let that2 = $.varRef(__goscriptTuple11[0])
			let __goscriptShadow4 = __goscriptTuple11[1]
			if (__goscriptShadow4) {
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
		if ((_this$ as Int64Value).Value != $.pointerValue<Int64Value>(that1).Value) {
			if ((_this$ as Int64Value).Value < $.pointerValue<Int64Value>(that1).Value) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as Int64Value).XXX_unrecognized, $.pointerValue<Int64Value>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_5377b62bda767935, $.arrayToSlice<number>([2])]
	}

	public Equal(that: any): boolean {
		const _this: Int64Value | $.VarRef<Int64Value> | null = this;
		const _this$: Int64Value = _this == null ? $.pointerTarget<Int64Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Int64Value>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple12: any = $.typeAssertTuple<Int64Value | $.VarRef<Int64Value> | null>(that, /* @__PURE__ */ $.pointerType("types.Int64Value"))
		let that1: Int64Value | $.VarRef<Int64Value> | null = __goscriptTuple12[0]
		let ok = __goscriptTuple12[1]
		if (!ok) {
			let __goscriptTuple13: any = $.typeAssertTuple<Int64Value>(that, "types.Int64Value")
			let that2 = $.varRef(__goscriptTuple13[0])
			let __goscriptShadow5 = __goscriptTuple13[1]
			if (__goscriptShadow5) {
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
		if ((_this$ as Int64Value).Value != $.pointerValue<Int64Value>(that1).Value) {
			return false
		}
		if (!bytes.Equal((_this$ as Int64Value).XXX_unrecognized, $.pointerValue<Int64Value>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetValue(): bigint {
		const m: Int64Value | $.VarRef<Int64Value> | null = this;
		if (m != null) {
			return $.pointerValue<Int64Value>(m).Value
		}
		return 0n
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Int64Value | $.VarRef<Int64Value> | null = this;
		const _this$: Int64Value = _this == null ? $.pointerTarget<Int64Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Int64Value>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&types.Int64Value{")
		s = $.appendOne(s, $.concatString(($.concatString("Value: ", await fmt.Sprintf("%#v", $.basicInterfaceValue((_this$ as Int64Value).Value, "int64")))), ",\n"))
		if ((_this$ as Int64Value).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Int64Value).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Int64Value | $.VarRef<Int64Value> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int64Value).Size() : Int64Value.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple14: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int64Value).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Int64Value.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Int64Value | $.VarRef<Int64Value> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int64Value).Size() : Int64Value.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int64Value).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Int64Value.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Int64Value | $.VarRef<Int64Value> | null = this;
		const m$: Int64Value = m == null ? $.pointerTarget<Int64Value>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Int64Value>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Int64Value).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Int64Value).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Int64Value).XXX_unrecognized)
		}
		if ((m$ as Int64Value).Value != 0n) {
			i = encodeVarintWrappers(dAtA, i, $.uint64((m$ as Int64Value).Value))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: Int64Value | $.VarRef<Int64Value> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int64Value).Size() : Int64Value.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: Int64Value | $.VarRef<Int64Value> | null = this;
		$.assignStruct($.pointerValue<Int64Value>(m), $.markAsStructValue(new Int64Value()))
	}

	public Size(): number {
		const m: Int64Value | $.VarRef<Int64Value> | null = this;
		let n: number = 0
		const m$: Int64Value = m == null ? $.pointerTarget<Int64Value>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Int64Value>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Int64Value).Value != 0n) {
			n = n + (1 + sovWrappers($.uint64((m$ as Int64Value).Value)))
		}
		if ((m$ as Int64Value).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Int64Value).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: Int64Value | $.VarRef<Int64Value> | null = this;
		const _this$: Int64Value = _this == null ? $.pointerTarget<Int64Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Int64Value>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&Int64Value{", $.concatString(($.concatString("Value:", fmt.Sprintf("%v", $.basicInterfaceValue((_this$ as Int64Value).Value, "int64")))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as Int64Value).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Int64Value | $.VarRef<Int64Value> | null = this;
		const m$: Int64Value = m == null ? $.pointerTarget<Int64Value>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Int64Value>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWrappers
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: Int64Value: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Int64Value: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Value", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Int64Value).Value = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWrappers
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iNdEx)] as number)
						iNdEx++;
						;(m$ as Int64Value).Value = $.int64Or((m$ as Int64Value).Value, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWrappers($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWrappers
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Int64Value).XXX_unrecognized = $.appendSlice((m$ as Int64Value).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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

	public XXX_DiscardUnknown(): void {
		const m: Int64Value | $.VarRef<Int64Value> | null = this;
		xxx_messageInfo_Int64Value.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.Int64Value", /* @__PURE__ */ $.pointerType("types.Int64Value")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Int64Value | $.VarRef<Int64Value> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Int64Value.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.Int64Value", /* @__PURE__ */ $.pointerType("types.Int64Value")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int64Value).MarshalToSizedBuffer(b) : Int64Value.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Int64Value | $.VarRef<Int64Value> | null = this;
		xxx_messageInfo_Int64Value.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.Int64Value", /* @__PURE__ */ $.pointerType("types.Int64Value")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.Int64Value"
	}

	public XXX_Size(): number {
		const m: Int64Value | $.VarRef<Int64Value> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int64Value).Size() : Int64Value.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Int64Value | $.VarRef<Int64Value> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int64Value).Unmarshal(b) : Int64Value.prototype.Unmarshal.call(m, b))
	}

	public XXX_WellKnownType(): string {
		return "Int64Value"
	}

	static __typeInfo = $.registerStructType(
		"types.Int64Value",
		() => new Int64Value(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_WellKnownType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		Int64Value,
		() => [{ name: "Value", key: "Value", type: /* @__PURE__ */ $.basicType("int64"), tag: "protobuf:\"varint,1,opt,name=value,proto3\" json:\"value,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class UInt64Value {
	// The uint64 value.
	public get Value(): bigint {
		return this._fields.Value
	}

	public set Value(value: bigint) {
		this._fields.Value = value
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
		Value: bigint
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Value?: bigint, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (0n as bigint),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UInt64Value {
		return new UInt64Value(this, true)
	}

	public __goscriptAssign(source: UInt64Value): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: UInt64Value | $.VarRef<UInt64Value> | null = this;
		const _this$: UInt64Value = _this == null ? $.pointerTarget<UInt64Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<UInt64Value>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple15: any = $.typeAssertTuple<UInt64Value | $.VarRef<UInt64Value> | null>(that, /* @__PURE__ */ $.pointerType("types.UInt64Value"))
		let that1: UInt64Value | $.VarRef<UInt64Value> | null = __goscriptTuple15[0]
		let ok = __goscriptTuple15[1]
		if (!ok) {
			let __goscriptTuple16: any = $.typeAssertTuple<UInt64Value>(that, "types.UInt64Value")
			let that2 = $.varRef(__goscriptTuple16[0])
			let __goscriptShadow6 = __goscriptTuple16[1]
			if (__goscriptShadow6) {
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
		if ((_this$ as UInt64Value).Value != $.pointerValue<UInt64Value>(that1).Value) {
			if ((_this$ as UInt64Value).Value < $.pointerValue<UInt64Value>(that1).Value) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as UInt64Value).XXX_unrecognized, $.pointerValue<UInt64Value>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_5377b62bda767935, $.arrayToSlice<number>([3])]
	}

	public Equal(that: any): boolean {
		const _this: UInt64Value | $.VarRef<UInt64Value> | null = this;
		const _this$: UInt64Value = _this == null ? $.pointerTarget<UInt64Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<UInt64Value>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple17: any = $.typeAssertTuple<UInt64Value | $.VarRef<UInt64Value> | null>(that, /* @__PURE__ */ $.pointerType("types.UInt64Value"))
		let that1: UInt64Value | $.VarRef<UInt64Value> | null = __goscriptTuple17[0]
		let ok = __goscriptTuple17[1]
		if (!ok) {
			let __goscriptTuple18: any = $.typeAssertTuple<UInt64Value>(that, "types.UInt64Value")
			let that2 = $.varRef(__goscriptTuple18[0])
			let __goscriptShadow7 = __goscriptTuple18[1]
			if (__goscriptShadow7) {
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
		if ((_this$ as UInt64Value).Value != $.pointerValue<UInt64Value>(that1).Value) {
			return false
		}
		if (!bytes.Equal((_this$ as UInt64Value).XXX_unrecognized, $.pointerValue<UInt64Value>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetValue(): bigint {
		const m: UInt64Value | $.VarRef<UInt64Value> | null = this;
		if (m != null) {
			return $.pointerValue<UInt64Value>(m).Value
		}
		return 0n
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: UInt64Value | $.VarRef<UInt64Value> | null = this;
		const _this$: UInt64Value = _this == null ? $.pointerTarget<UInt64Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<UInt64Value>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&types.UInt64Value{")
		s = $.appendOne(s, $.concatString(($.concatString("Value: ", await fmt.Sprintf("%#v", $.basicInterfaceValue((_this$ as UInt64Value).Value, "uint64")))), ",\n"))
		if ((_this$ as UInt64Value).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as UInt64Value).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: UInt64Value | $.VarRef<UInt64Value> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UInt64Value).Size() : UInt64Value.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple19: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UInt64Value).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UInt64Value.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple19[0]
		err = __goscriptTuple19[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UInt64Value | $.VarRef<UInt64Value> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UInt64Value).Size() : UInt64Value.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UInt64Value).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UInt64Value.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UInt64Value | $.VarRef<UInt64Value> | null = this;
		const m$: UInt64Value = m == null ? $.pointerTarget<UInt64Value>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UInt64Value>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as UInt64Value).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as UInt64Value).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UInt64Value).XXX_unrecognized)
		}
		if ((m$ as UInt64Value).Value != 0n) {
			i = encodeVarintWrappers(dAtA, i, $.uint64((m$ as UInt64Value).Value))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: UInt64Value | $.VarRef<UInt64Value> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UInt64Value).Size() : UInt64Value.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: UInt64Value | $.VarRef<UInt64Value> | null = this;
		$.assignStruct($.pointerValue<UInt64Value>(m), $.markAsStructValue(new UInt64Value()))
	}

	public Size(): number {
		const m: UInt64Value | $.VarRef<UInt64Value> | null = this;
		let n: number = 0
		const m$: UInt64Value = m == null ? $.pointerTarget<UInt64Value>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UInt64Value>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as UInt64Value).Value != 0n) {
			n = n + (1 + sovWrappers($.uint64((m$ as UInt64Value).Value)))
		}
		if ((m$ as UInt64Value).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as UInt64Value).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: UInt64Value | $.VarRef<UInt64Value> | null = this;
		const _this$: UInt64Value = _this == null ? $.pointerTarget<UInt64Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<UInt64Value>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&UInt64Value{", $.concatString(($.concatString("Value:", fmt.Sprintf("%v", $.basicInterfaceValue((_this$ as UInt64Value).Value, "uint64")))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as UInt64Value).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: UInt64Value | $.VarRef<UInt64Value> | null = this;
		const m$: UInt64Value = m == null ? $.pointerTarget<UInt64Value>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UInt64Value>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWrappers
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: UInt64Value: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: UInt64Value: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Value", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as UInt64Value).Value = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWrappers
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++;
						;(m$ as UInt64Value).Value = $.uint64Or((m$ as UInt64Value).Value, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWrappers($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWrappers
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UInt64Value).XXX_unrecognized = $.appendSlice((m$ as UInt64Value).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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

	public XXX_DiscardUnknown(): void {
		const m: UInt64Value | $.VarRef<UInt64Value> | null = this;
		xxx_messageInfo_UInt64Value.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.UInt64Value", /* @__PURE__ */ $.pointerType("types.UInt64Value")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: UInt64Value | $.VarRef<UInt64Value> | null = this;
		if (deterministic) {
			return xxx_messageInfo_UInt64Value.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.UInt64Value", /* @__PURE__ */ $.pointerType("types.UInt64Value")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UInt64Value).MarshalToSizedBuffer(b) : UInt64Value.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: UInt64Value | $.VarRef<UInt64Value> | null = this;
		xxx_messageInfo_UInt64Value.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.UInt64Value", /* @__PURE__ */ $.pointerType("types.UInt64Value")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.UInt64Value"
	}

	public XXX_Size(): number {
		const m: UInt64Value | $.VarRef<UInt64Value> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UInt64Value).Size() : UInt64Value.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: UInt64Value | $.VarRef<UInt64Value> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UInt64Value).Unmarshal(b) : UInt64Value.prototype.Unmarshal.call(m, b))
	}

	public XXX_WellKnownType(): string {
		return "UInt64Value"
	}

	static __typeInfo = $.registerStructType(
		"types.UInt64Value",
		() => new UInt64Value(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("uint64") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_WellKnownType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		UInt64Value,
		() => [{ name: "Value", key: "Value", type: /* @__PURE__ */ $.basicType("uint64"), tag: "protobuf:\"varint,1,opt,name=value,proto3\" json:\"value,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class Int32Value {
	// The int32 value.
	public get Value(): number {
		return this._fields.Value
	}

	public set Value(value: number) {
		this._fields.Value = value
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
		Value: number
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Value?: number, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (0 as number),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Int32Value {
		return new Int32Value(this, true)
	}

	public __goscriptAssign(source: Int32Value): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: Int32Value | $.VarRef<Int32Value> | null = this;
		const _this$: Int32Value = _this == null ? $.pointerTarget<Int32Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Int32Value>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple20: any = $.typeAssertTuple<Int32Value | $.VarRef<Int32Value> | null>(that, /* @__PURE__ */ $.pointerType("types.Int32Value"))
		let that1: Int32Value | $.VarRef<Int32Value> | null = __goscriptTuple20[0]
		let ok = __goscriptTuple20[1]
		if (!ok) {
			let __goscriptTuple21: any = $.typeAssertTuple<Int32Value>(that, "types.Int32Value")
			let that2 = $.varRef(__goscriptTuple21[0])
			let __goscriptShadow8 = __goscriptTuple21[1]
			if (__goscriptShadow8) {
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
		if ((_this$ as Int32Value).Value != $.pointerValue<Int32Value>(that1).Value) {
			if ((_this$ as Int32Value).Value < $.pointerValue<Int32Value>(that1).Value) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as Int32Value).XXX_unrecognized, $.pointerValue<Int32Value>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_5377b62bda767935, $.arrayToSlice<number>([4])]
	}

	public Equal(that: any): boolean {
		const _this: Int32Value | $.VarRef<Int32Value> | null = this;
		const _this$: Int32Value = _this == null ? $.pointerTarget<Int32Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Int32Value>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple22: any = $.typeAssertTuple<Int32Value | $.VarRef<Int32Value> | null>(that, /* @__PURE__ */ $.pointerType("types.Int32Value"))
		let that1: Int32Value | $.VarRef<Int32Value> | null = __goscriptTuple22[0]
		let ok = __goscriptTuple22[1]
		if (!ok) {
			let __goscriptTuple23: any = $.typeAssertTuple<Int32Value>(that, "types.Int32Value")
			let that2 = $.varRef(__goscriptTuple23[0])
			let __goscriptShadow9 = __goscriptTuple23[1]
			if (__goscriptShadow9) {
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
		if ((_this$ as Int32Value).Value != $.pointerValue<Int32Value>(that1).Value) {
			return false
		}
		if (!bytes.Equal((_this$ as Int32Value).XXX_unrecognized, $.pointerValue<Int32Value>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetValue(): number {
		const m: Int32Value | $.VarRef<Int32Value> | null = this;
		if (m != null) {
			return $.pointerValue<Int32Value>(m).Value
		}
		return 0
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Int32Value | $.VarRef<Int32Value> | null = this;
		const _this$: Int32Value = _this == null ? $.pointerTarget<Int32Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Int32Value>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&types.Int32Value{")
		s = $.appendOne(s, $.concatString(($.concatString("Value: ", await fmt.Sprintf("%#v", $.basicInterfaceValue((_this$ as Int32Value).Value, "int32")))), ",\n"))
		if ((_this$ as Int32Value).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Int32Value).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Int32Value | $.VarRef<Int32Value> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int32Value).Size() : Int32Value.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple24: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int32Value).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Int32Value.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple24[0]
		err = __goscriptTuple24[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Int32Value | $.VarRef<Int32Value> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int32Value).Size() : Int32Value.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int32Value).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Int32Value.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Int32Value | $.VarRef<Int32Value> | null = this;
		const m$: Int32Value = m == null ? $.pointerTarget<Int32Value>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Int32Value>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Int32Value).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Int32Value).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Int32Value).XXX_unrecognized)
		}
		if ((m$ as Int32Value).Value != 0) {
			i = encodeVarintWrappers(dAtA, i, $.uint64((m$ as Int32Value).Value))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: Int32Value | $.VarRef<Int32Value> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int32Value).Size() : Int32Value.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: Int32Value | $.VarRef<Int32Value> | null = this;
		$.assignStruct($.pointerValue<Int32Value>(m), $.markAsStructValue(new Int32Value()))
	}

	public Size(): number {
		const m: Int32Value | $.VarRef<Int32Value> | null = this;
		let n: number = 0
		const m$: Int32Value = m == null ? $.pointerTarget<Int32Value>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Int32Value>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Int32Value).Value != 0) {
			n = n + (1 + sovWrappers($.uint64((m$ as Int32Value).Value)))
		}
		if ((m$ as Int32Value).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Int32Value).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: Int32Value | $.VarRef<Int32Value> | null = this;
		const _this$: Int32Value = _this == null ? $.pointerTarget<Int32Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Int32Value>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&Int32Value{", $.concatString(($.concatString("Value:", fmt.Sprintf("%v", $.basicInterfaceValue((_this$ as Int32Value).Value, "int32")))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as Int32Value).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Int32Value | $.VarRef<Int32Value> | null = this;
		const m$: Int32Value = m == null ? $.pointerTarget<Int32Value>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Int32Value>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow4 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWrappers
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: Int32Value: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Int32Value: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Value", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Int32Value).Value = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWrappers
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++;
						;(m$ as Int32Value).Value = (m$ as Int32Value).Value | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWrappers($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWrappers
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Int32Value).XXX_unrecognized = $.appendSlice((m$ as Int32Value).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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

	public XXX_DiscardUnknown(): void {
		const m: Int32Value | $.VarRef<Int32Value> | null = this;
		xxx_messageInfo_Int32Value.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.Int32Value", /* @__PURE__ */ $.pointerType("types.Int32Value")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Int32Value | $.VarRef<Int32Value> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Int32Value.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.Int32Value", /* @__PURE__ */ $.pointerType("types.Int32Value")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int32Value).MarshalToSizedBuffer(b) : Int32Value.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Int32Value | $.VarRef<Int32Value> | null = this;
		xxx_messageInfo_Int32Value.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.Int32Value", /* @__PURE__ */ $.pointerType("types.Int32Value")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.Int32Value"
	}

	public XXX_Size(): number {
		const m: Int32Value | $.VarRef<Int32Value> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int32Value).Size() : Int32Value.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Int32Value | $.VarRef<Int32Value> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Int32Value).Unmarshal(b) : Int32Value.prototype.Unmarshal.call(m, b))
	}

	public XXX_WellKnownType(): string {
		return "Int32Value"
	}

	static __typeInfo = $.registerStructType(
		"types.Int32Value",
		() => new Int32Value(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_WellKnownType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		Int32Value,
		() => [{ name: "Value", key: "Value", type: /* @__PURE__ */ $.basicType("int32"), tag: "protobuf:\"varint,1,opt,name=value,proto3\" json:\"value,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class UInt32Value {
	// The uint32 value.
	public get Value(): number {
		return this._fields.Value
	}

	public set Value(value: number) {
		this._fields.Value = value
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
		Value: number
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Value?: number, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (0 as number),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UInt32Value {
		return new UInt32Value(this, true)
	}

	public __goscriptAssign(source: UInt32Value): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: UInt32Value | $.VarRef<UInt32Value> | null = this;
		const _this$: UInt32Value = _this == null ? $.pointerTarget<UInt32Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<UInt32Value>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple25: any = $.typeAssertTuple<UInt32Value | $.VarRef<UInt32Value> | null>(that, /* @__PURE__ */ $.pointerType("types.UInt32Value"))
		let that1: UInt32Value | $.VarRef<UInt32Value> | null = __goscriptTuple25[0]
		let ok = __goscriptTuple25[1]
		if (!ok) {
			let __goscriptTuple26: any = $.typeAssertTuple<UInt32Value>(that, "types.UInt32Value")
			let that2 = $.varRef(__goscriptTuple26[0])
			let __goscriptShadow10 = __goscriptTuple26[1]
			if (__goscriptShadow10) {
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
		if ((_this$ as UInt32Value).Value != $.pointerValue<UInt32Value>(that1).Value) {
			if ((_this$ as UInt32Value).Value < $.pointerValue<UInt32Value>(that1).Value) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as UInt32Value).XXX_unrecognized, $.pointerValue<UInt32Value>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_5377b62bda767935, $.arrayToSlice<number>([5])]
	}

	public Equal(that: any): boolean {
		const _this: UInt32Value | $.VarRef<UInt32Value> | null = this;
		const _this$: UInt32Value = _this == null ? $.pointerTarget<UInt32Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<UInt32Value>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple27: any = $.typeAssertTuple<UInt32Value | $.VarRef<UInt32Value> | null>(that, /* @__PURE__ */ $.pointerType("types.UInt32Value"))
		let that1: UInt32Value | $.VarRef<UInt32Value> | null = __goscriptTuple27[0]
		let ok = __goscriptTuple27[1]
		if (!ok) {
			let __goscriptTuple28: any = $.typeAssertTuple<UInt32Value>(that, "types.UInt32Value")
			let that2 = $.varRef(__goscriptTuple28[0])
			let __goscriptShadow11 = __goscriptTuple28[1]
			if (__goscriptShadow11) {
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
		if ((_this$ as UInt32Value).Value != $.pointerValue<UInt32Value>(that1).Value) {
			return false
		}
		if (!bytes.Equal((_this$ as UInt32Value).XXX_unrecognized, $.pointerValue<UInt32Value>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetValue(): number {
		const m: UInt32Value | $.VarRef<UInt32Value> | null = this;
		if (m != null) {
			return $.pointerValue<UInt32Value>(m).Value
		}
		return 0
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: UInt32Value | $.VarRef<UInt32Value> | null = this;
		const _this$: UInt32Value = _this == null ? $.pointerTarget<UInt32Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<UInt32Value>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&types.UInt32Value{")
		s = $.appendOne(s, $.concatString(($.concatString("Value: ", await fmt.Sprintf("%#v", $.basicInterfaceValue((_this$ as UInt32Value).Value, "uint32")))), ",\n"))
		if ((_this$ as UInt32Value).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as UInt32Value).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: UInt32Value | $.VarRef<UInt32Value> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UInt32Value).Size() : UInt32Value.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple29: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UInt32Value).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UInt32Value.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple29[0]
		err = __goscriptTuple29[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UInt32Value | $.VarRef<UInt32Value> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UInt32Value).Size() : UInt32Value.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UInt32Value).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UInt32Value.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UInt32Value | $.VarRef<UInt32Value> | null = this;
		const m$: UInt32Value = m == null ? $.pointerTarget<UInt32Value>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UInt32Value>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as UInt32Value).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as UInt32Value).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UInt32Value).XXX_unrecognized)
		}
		if ((m$ as UInt32Value).Value != 0) {
			i = encodeVarintWrappers(dAtA, i, $.uint64((m$ as UInt32Value).Value))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: UInt32Value | $.VarRef<UInt32Value> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UInt32Value).Size() : UInt32Value.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: UInt32Value | $.VarRef<UInt32Value> | null = this;
		$.assignStruct($.pointerValue<UInt32Value>(m), $.markAsStructValue(new UInt32Value()))
	}

	public Size(): number {
		const m: UInt32Value | $.VarRef<UInt32Value> | null = this;
		let n: number = 0
		const m$: UInt32Value = m == null ? $.pointerTarget<UInt32Value>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UInt32Value>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as UInt32Value).Value != 0) {
			n = n + (1 + sovWrappers($.uint64((m$ as UInt32Value).Value)))
		}
		if ((m$ as UInt32Value).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as UInt32Value).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: UInt32Value | $.VarRef<UInt32Value> | null = this;
		const _this$: UInt32Value = _this == null ? $.pointerTarget<UInt32Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<UInt32Value>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&UInt32Value{", $.concatString(($.concatString("Value:", fmt.Sprintf("%v", $.basicInterfaceValue((_this$ as UInt32Value).Value, "uint32")))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as UInt32Value).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: UInt32Value | $.VarRef<UInt32Value> | null = this;
		const m$: UInt32Value = m == null ? $.pointerTarget<UInt32Value>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UInt32Value>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow5 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWrappers
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: UInt32Value: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: UInt32Value: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Value", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as UInt32Value).Value = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWrappers
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++;
						;(m$ as UInt32Value).Value = (m$ as UInt32Value).Value | ($.uint((($.uint(b & 0x7F, 32) << shift) >>> 0), 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWrappers($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWrappers
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UInt32Value).XXX_unrecognized = $.appendSlice((m$ as UInt32Value).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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

	public XXX_DiscardUnknown(): void {
		const m: UInt32Value | $.VarRef<UInt32Value> | null = this;
		xxx_messageInfo_UInt32Value.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.UInt32Value", /* @__PURE__ */ $.pointerType("types.UInt32Value")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: UInt32Value | $.VarRef<UInt32Value> | null = this;
		if (deterministic) {
			return xxx_messageInfo_UInt32Value.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.UInt32Value", /* @__PURE__ */ $.pointerType("types.UInt32Value")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UInt32Value).MarshalToSizedBuffer(b) : UInt32Value.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: UInt32Value | $.VarRef<UInt32Value> | null = this;
		xxx_messageInfo_UInt32Value.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.UInt32Value", /* @__PURE__ */ $.pointerType("types.UInt32Value")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.UInt32Value"
	}

	public XXX_Size(): number {
		const m: UInt32Value | $.VarRef<UInt32Value> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UInt32Value).Size() : UInt32Value.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: UInt32Value | $.VarRef<UInt32Value> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UInt32Value).Unmarshal(b) : UInt32Value.prototype.Unmarshal.call(m, b))
	}

	public XXX_WellKnownType(): string {
		return "UInt32Value"
	}

	static __typeInfo = $.registerStructType(
		"types.UInt32Value",
		() => new UInt32Value(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("uint32") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_WellKnownType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		UInt32Value,
		() => [{ name: "Value", key: "Value", type: /* @__PURE__ */ $.basicType("uint32"), tag: "protobuf:\"varint,1,opt,name=value,proto3\" json:\"value,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class BoolValue {
	// The bool value.
	public get Value(): boolean {
		return this._fields.Value
	}

	public set Value(value: boolean) {
		this._fields.Value = value
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
		Value: boolean
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Value?: boolean, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (false as boolean),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BoolValue {
		return new BoolValue(this, true)
	}

	public __goscriptAssign(source: BoolValue): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: BoolValue | $.VarRef<BoolValue> | null = this;
		const _this$: BoolValue = _this == null ? $.pointerTarget<BoolValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BoolValue>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple30: any = $.typeAssertTuple<BoolValue | $.VarRef<BoolValue> | null>(that, /* @__PURE__ */ $.pointerType("types.BoolValue"))
		let that1: BoolValue | $.VarRef<BoolValue> | null = __goscriptTuple30[0]
		let ok = __goscriptTuple30[1]
		if (!ok) {
			let __goscriptTuple31: any = $.typeAssertTuple<BoolValue>(that, "types.BoolValue")
			let that2 = $.varRef(__goscriptTuple31[0])
			let __goscriptShadow12 = __goscriptTuple31[1]
			if (__goscriptShadow12) {
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
		if ((_this$ as BoolValue).Value != $.pointerValue<BoolValue>(that1).Value) {
			if (!(_this$ as BoolValue).Value) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as BoolValue).XXX_unrecognized, $.pointerValue<BoolValue>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_5377b62bda767935, $.arrayToSlice<number>([6])]
	}

	public Equal(that: any): boolean {
		const _this: BoolValue | $.VarRef<BoolValue> | null = this;
		const _this$: BoolValue = _this == null ? $.pointerTarget<BoolValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BoolValue>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple32: any = $.typeAssertTuple<BoolValue | $.VarRef<BoolValue> | null>(that, /* @__PURE__ */ $.pointerType("types.BoolValue"))
		let that1: BoolValue | $.VarRef<BoolValue> | null = __goscriptTuple32[0]
		let ok = __goscriptTuple32[1]
		if (!ok) {
			let __goscriptTuple33: any = $.typeAssertTuple<BoolValue>(that, "types.BoolValue")
			let that2 = $.varRef(__goscriptTuple33[0])
			let __goscriptShadow13 = __goscriptTuple33[1]
			if (__goscriptShadow13) {
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
		if ((_this$ as BoolValue).Value != $.pointerValue<BoolValue>(that1).Value) {
			return false
		}
		if (!bytes.Equal((_this$ as BoolValue).XXX_unrecognized, $.pointerValue<BoolValue>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetValue(): boolean {
		const m: BoolValue | $.VarRef<BoolValue> | null = this;
		if (m != null) {
			return $.pointerValue<BoolValue>(m).Value
		}
		return false
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: BoolValue | $.VarRef<BoolValue> | null = this;
		const _this$: BoolValue = _this == null ? $.pointerTarget<BoolValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BoolValue>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&types.BoolValue{")
		s = $.appendOne(s, $.concatString(($.concatString("Value: ", await fmt.Sprintf("%#v", (_this$ as BoolValue).Value))), ",\n"))
		if ((_this$ as BoolValue).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as BoolValue).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: BoolValue | $.VarRef<BoolValue> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BoolValue).Size() : BoolValue.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple34: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BoolValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BoolValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple34[0]
		err = __goscriptTuple34[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BoolValue | $.VarRef<BoolValue> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BoolValue).Size() : BoolValue.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BoolValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BoolValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BoolValue | $.VarRef<BoolValue> | null = this;
		const m$: BoolValue = m == null ? $.pointerTarget<BoolValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BoolValue>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as BoolValue).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as BoolValue).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BoolValue).XXX_unrecognized)
		}
		if ((m$ as BoolValue).Value) {
			i--
			if ((m$ as BoolValue).Value) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: BoolValue | $.VarRef<BoolValue> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BoolValue).Size() : BoolValue.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: BoolValue | $.VarRef<BoolValue> | null = this;
		$.assignStruct($.pointerValue<BoolValue>(m), $.markAsStructValue(new BoolValue()))
	}

	public Size(): number {
		const m: BoolValue | $.VarRef<BoolValue> | null = this;
		let n: number = 0
		const m$: BoolValue = m == null ? $.pointerTarget<BoolValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BoolValue>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as BoolValue).Value) {
			n = n + (2)
		}
		if ((m$ as BoolValue).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as BoolValue).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: BoolValue | $.VarRef<BoolValue> | null = this;
		const _this$: BoolValue = _this == null ? $.pointerTarget<BoolValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BoolValue>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&BoolValue{", $.concatString(($.concatString("Value:", fmt.Sprintf("%v", (_this$ as BoolValue).Value))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as BoolValue).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: BoolValue | $.VarRef<BoolValue> | null = this;
		const m$: BoolValue = m == null ? $.pointerTarget<BoolValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BoolValue>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow6 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWrappers
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: BoolValue: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: BoolValue: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Value", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWrappers
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as BoolValue).Value = (v != 0)
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWrappers($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWrappers
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BoolValue).XXX_unrecognized = $.appendSlice((m$ as BoolValue).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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

	public XXX_DiscardUnknown(): void {
		const m: BoolValue | $.VarRef<BoolValue> | null = this;
		xxx_messageInfo_BoolValue.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.BoolValue", /* @__PURE__ */ $.pointerType("types.BoolValue")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: BoolValue | $.VarRef<BoolValue> | null = this;
		if (deterministic) {
			return xxx_messageInfo_BoolValue.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.BoolValue", /* @__PURE__ */ $.pointerType("types.BoolValue")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BoolValue).MarshalToSizedBuffer(b) : BoolValue.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: BoolValue | $.VarRef<BoolValue> | null = this;
		xxx_messageInfo_BoolValue.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.BoolValue", /* @__PURE__ */ $.pointerType("types.BoolValue")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.BoolValue"
	}

	public XXX_Size(): number {
		const m: BoolValue | $.VarRef<BoolValue> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BoolValue).Size() : BoolValue.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: BoolValue | $.VarRef<BoolValue> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BoolValue).Unmarshal(b) : BoolValue.prototype.Unmarshal.call(m, b))
	}

	public XXX_WellKnownType(): string {
		return "BoolValue"
	}

	static __typeInfo = $.registerStructType(
		"types.BoolValue",
		() => new BoolValue(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_WellKnownType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		BoolValue,
		() => [{ name: "Value", key: "Value", type: /* @__PURE__ */ $.basicType("bool"), tag: "protobuf:\"varint,1,opt,name=value,proto3\" json:\"value,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class StringValue {
	// The string value.
	public get Value(): string {
		return this._fields.Value
	}

	public set Value(value: string) {
		this._fields.Value = value
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
		Value: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Value?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StringValue {
		return new StringValue(this, true)
	}

	public __goscriptAssign(source: StringValue): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: StringValue | $.VarRef<StringValue> | null = this;
		const _this$: StringValue = _this == null ? $.pointerTarget<StringValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<StringValue>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple35: any = $.typeAssertTuple<StringValue | $.VarRef<StringValue> | null>(that, /* @__PURE__ */ $.pointerType("types.StringValue"))
		let that1: StringValue | $.VarRef<StringValue> | null = __goscriptTuple35[0]
		let ok = __goscriptTuple35[1]
		if (!ok) {
			let __goscriptTuple36: any = $.typeAssertTuple<StringValue>(that, "types.StringValue")
			let that2 = $.varRef(__goscriptTuple36[0])
			let __goscriptShadow14 = __goscriptTuple36[1]
			if (__goscriptShadow14) {
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
		if (!$.stringEqual((_this$ as StringValue).Value, $.pointerValue<StringValue>(that1).Value)) {
			if ($.stringCompare((_this$ as StringValue).Value, $.pointerValue<StringValue>(that1).Value) < 0) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as StringValue).XXX_unrecognized, $.pointerValue<StringValue>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_5377b62bda767935, $.arrayToSlice<number>([7])]
	}

	public Equal(that: any): boolean {
		const _this: StringValue | $.VarRef<StringValue> | null = this;
		const _this$: StringValue = _this == null ? $.pointerTarget<StringValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<StringValue>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple37: any = $.typeAssertTuple<StringValue | $.VarRef<StringValue> | null>(that, /* @__PURE__ */ $.pointerType("types.StringValue"))
		let that1: StringValue | $.VarRef<StringValue> | null = __goscriptTuple37[0]
		let ok = __goscriptTuple37[1]
		if (!ok) {
			let __goscriptTuple38: any = $.typeAssertTuple<StringValue>(that, "types.StringValue")
			let that2 = $.varRef(__goscriptTuple38[0])
			let __goscriptShadow15 = __goscriptTuple38[1]
			if (__goscriptShadow15) {
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
		if (!$.stringEqual((_this$ as StringValue).Value, $.pointerValue<StringValue>(that1).Value)) {
			return false
		}
		if (!bytes.Equal((_this$ as StringValue).XXX_unrecognized, $.pointerValue<StringValue>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetValue(): string {
		const m: StringValue | $.VarRef<StringValue> | null = this;
		if (m != null) {
			return $.pointerValue<StringValue>(m).Value
		}
		return ""
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: StringValue | $.VarRef<StringValue> | null = this;
		const _this$: StringValue = _this == null ? $.pointerTarget<StringValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<StringValue>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&types.StringValue{")
		s = $.appendOne(s, $.concatString(($.concatString("Value: ", await fmt.Sprintf("%#v", (_this$ as StringValue).Value))), ",\n"))
		if ((_this$ as StringValue).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as StringValue).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: StringValue | $.VarRef<StringValue> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StringValue).Size() : StringValue.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple39: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StringValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StringValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple39[0]
		err = __goscriptTuple39[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StringValue | $.VarRef<StringValue> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StringValue).Size() : StringValue.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StringValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StringValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StringValue | $.VarRef<StringValue> | null = this;
		const m$: StringValue = m == null ? $.pointerTarget<StringValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StringValue>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as StringValue).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as StringValue).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StringValue).XXX_unrecognized)
		}
		if ($.stringLen((m$ as StringValue).Value) > 0) {
			i = i - ($.stringLen((m$ as StringValue).Value))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StringValue).Value)
			i = encodeVarintWrappers(dAtA, i, $.uint64($.stringLen((m$ as StringValue).Value)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: StringValue | $.VarRef<StringValue> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StringValue).Size() : StringValue.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: StringValue | $.VarRef<StringValue> | null = this;
		$.assignStruct($.pointerValue<StringValue>(m), $.markAsStructValue(new StringValue()))
	}

	public Size(): number {
		const m: StringValue | $.VarRef<StringValue> | null = this;
		let n: number = 0
		const m$: StringValue = m == null ? $.pointerTarget<StringValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StringValue>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as StringValue).Value)
		if (l > 0) {
			n = n + ((1 + l) + sovWrappers($.uint64(l)))
		}
		if ((m$ as StringValue).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as StringValue).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: StringValue | $.VarRef<StringValue> | null = this;
		const _this$: StringValue = _this == null ? $.pointerTarget<StringValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<StringValue>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&StringValue{", $.concatString(($.concatString("Value:", fmt.Sprintf("%v", (_this$ as StringValue).Value))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as StringValue).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: StringValue | $.VarRef<StringValue> | null = this;
		const m$: StringValue = m == null ? $.pointerTarget<StringValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StringValue>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow7 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWrappers
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: StringValue: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: StringValue: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Value", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWrappers
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthWrappers
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthWrappers
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StringValue).Value = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWrappers($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWrappers
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StringValue).XXX_unrecognized = $.appendSlice((m$ as StringValue).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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

	public XXX_DiscardUnknown(): void {
		const m: StringValue | $.VarRef<StringValue> | null = this;
		xxx_messageInfo_StringValue.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.StringValue", /* @__PURE__ */ $.pointerType("types.StringValue")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: StringValue | $.VarRef<StringValue> | null = this;
		if (deterministic) {
			return xxx_messageInfo_StringValue.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.StringValue", /* @__PURE__ */ $.pointerType("types.StringValue")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StringValue).MarshalToSizedBuffer(b) : StringValue.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: StringValue | $.VarRef<StringValue> | null = this;
		xxx_messageInfo_StringValue.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.StringValue", /* @__PURE__ */ $.pointerType("types.StringValue")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.StringValue"
	}

	public XXX_Size(): number {
		const m: StringValue | $.VarRef<StringValue> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StringValue).Size() : StringValue.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: StringValue | $.VarRef<StringValue> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StringValue).Unmarshal(b) : StringValue.prototype.Unmarshal.call(m, b))
	}

	public XXX_WellKnownType(): string {
		return "StringValue"
	}

	static __typeInfo = $.registerStructType(
		"types.StringValue",
		() => new StringValue(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetValue", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_WellKnownType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		StringValue,
		() => [{ name: "Value", key: "Value", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=value,proto3\" json:\"value,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class BytesValue {
	// The bytes value.
	public get Value(): $.Slice<number> {
		return this._fields.Value
	}

	public set Value(value: $.Slice<number>) {
		this._fields.Value = value
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
		Value: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Value?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Value: init?.Value ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BytesValue {
		return new BytesValue(this, true)
	}

	public __goscriptAssign(source: BytesValue): void {
		const target = this._fields
		const values = source._fields
		target.Value = values.Value
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: BytesValue | $.VarRef<BytesValue> | null = this;
		const _this$: BytesValue = _this == null ? $.pointerTarget<BytesValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BytesValue>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple40: any = $.typeAssertTuple<BytesValue | $.VarRef<BytesValue> | null>(that, /* @__PURE__ */ $.pointerType("types.BytesValue"))
		let that1: BytesValue | $.VarRef<BytesValue> | null = __goscriptTuple40[0]
		let ok = __goscriptTuple40[1]
		if (!ok) {
			let __goscriptTuple41: any = $.typeAssertTuple<BytesValue>(that, "types.BytesValue")
			let that2 = $.varRef(__goscriptTuple41[0])
			let __goscriptShadow16 = __goscriptTuple41[1]
			if (__goscriptShadow16) {
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
		{
			let c = bytes.Compare((_this$ as BytesValue).Value, $.pointerValue<BytesValue>(that1).Value)
			if (c != 0) {
				return c
			}
		}
		{
			let c = bytes.Compare((_this$ as BytesValue).XXX_unrecognized, $.pointerValue<BytesValue>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_5377b62bda767935, $.arrayToSlice<number>([8])]
	}

	public Equal(that: any): boolean {
		const _this: BytesValue | $.VarRef<BytesValue> | null = this;
		const _this$: BytesValue = _this == null ? $.pointerTarget<BytesValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BytesValue>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple42: any = $.typeAssertTuple<BytesValue | $.VarRef<BytesValue> | null>(that, /* @__PURE__ */ $.pointerType("types.BytesValue"))
		let that1: BytesValue | $.VarRef<BytesValue> | null = __goscriptTuple42[0]
		let ok = __goscriptTuple42[1]
		if (!ok) {
			let __goscriptTuple43: any = $.typeAssertTuple<BytesValue>(that, "types.BytesValue")
			let that2 = $.varRef(__goscriptTuple43[0])
			let __goscriptShadow17 = __goscriptTuple43[1]
			if (__goscriptShadow17) {
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
		if (!bytes.Equal((_this$ as BytesValue).Value, $.pointerValue<BytesValue>(that1).Value)) {
			return false
		}
		if (!bytes.Equal((_this$ as BytesValue).XXX_unrecognized, $.pointerValue<BytesValue>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetValue(): $.Slice<number> {
		const m: BytesValue | $.VarRef<BytesValue> | null = this;
		if (m != null) {
			return $.pointerValue<BytesValue>(m).Value
		}
		return null
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: BytesValue | $.VarRef<BytesValue> | null = this;
		const _this$: BytesValue = _this == null ? $.pointerTarget<BytesValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BytesValue>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&types.BytesValue{")
		s = $.appendOne(s, $.concatString(($.concatString("Value: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as BytesValue).Value, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		if ((_this$ as BytesValue).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as BytesValue).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: BytesValue | $.VarRef<BytesValue> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BytesValue).Size() : BytesValue.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple44: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BytesValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BytesValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple44[0]
		err = __goscriptTuple44[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BytesValue | $.VarRef<BytesValue> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BytesValue).Size() : BytesValue.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BytesValue).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BytesValue.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BytesValue | $.VarRef<BytesValue> | null = this;
		const m$: BytesValue = m == null ? $.pointerTarget<BytesValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BytesValue>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as BytesValue).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as BytesValue).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BytesValue).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as BytesValue).Value) > 0) {
			i = i - ($.sliceLen((m$ as BytesValue).Value))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BytesValue).Value)
			i = encodeVarintWrappers(dAtA, i, $.uint64($.sliceLen((m$ as BytesValue).Value)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: BytesValue | $.VarRef<BytesValue> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BytesValue).Size() : BytesValue.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: BytesValue | $.VarRef<BytesValue> | null = this;
		$.assignStruct($.pointerValue<BytesValue>(m), $.markAsStructValue(new BytesValue()))
	}

	public Size(): number {
		const m: BytesValue | $.VarRef<BytesValue> | null = this;
		let n: number = 0
		const m$: BytesValue = m == null ? $.pointerTarget<BytesValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BytesValue>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.sliceLen((m$ as BytesValue).Value)
		if (l > 0) {
			n = n + ((1 + l) + sovWrappers($.uint64(l)))
		}
		if ((m$ as BytesValue).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as BytesValue).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: BytesValue | $.VarRef<BytesValue> | null = this;
		const _this$: BytesValue = _this == null ? $.pointerTarget<BytesValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BytesValue>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&BytesValue{", $.concatString(($.concatString("Value:", fmt.Sprintf("%v", $.interfaceValue((_this$ as BytesValue).Value, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as BytesValue).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: BytesValue | $.VarRef<BytesValue> | null = this;
		const m$: BytesValue = m == null ? $.pointerTarget<BytesValue>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BytesValue>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow8 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWrappers
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: BytesValue: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: BytesValue: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Value", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWrappers
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthWrappers
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthWrappers
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BytesValue).Value = $.appendSlice($.goSlice((m$ as BytesValue).Value, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as BytesValue).Value == null) {
						;(m$ as BytesValue).Value = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWrappers($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWrappers
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BytesValue).XXX_unrecognized = $.appendSlice((m$ as BytesValue).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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

	public XXX_DiscardUnknown(): void {
		const m: BytesValue | $.VarRef<BytesValue> | null = this;
		xxx_messageInfo_BytesValue.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.BytesValue", /* @__PURE__ */ $.pointerType("types.BytesValue")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: BytesValue | $.VarRef<BytesValue> | null = this;
		if (deterministic) {
			return xxx_messageInfo_BytesValue.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.BytesValue", /* @__PURE__ */ $.pointerType("types.BytesValue")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BytesValue).MarshalToSizedBuffer(b) : BytesValue.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: BytesValue | $.VarRef<BytesValue> | null = this;
		xxx_messageInfo_BytesValue.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.BytesValue", /* @__PURE__ */ $.pointerType("types.BytesValue")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.BytesValue"
	}

	public XXX_Size(): number {
		const m: BytesValue | $.VarRef<BytesValue> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BytesValue).Size() : BytesValue.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: BytesValue | $.VarRef<BytesValue> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BytesValue).Unmarshal(b) : BytesValue.prototype.Unmarshal.call(m, b))
	}

	public XXX_WellKnownType(): string {
		return "BytesValue"
	}

	static __typeInfo = $.registerStructType(
		"types.BytesValue",
		() => new BytesValue(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetValue", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "ProtoSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_WellKnownType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }],
		BytesValue,
		() => [{ name: "Value", key: "Value", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,1,opt,name=value,proto3\" json:\"value,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export let xxx_messageInfo_DoubleValue: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DoubleValue(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DoubleValue.value, __goscriptValue)
}

export let xxx_messageInfo_FloatValue: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_FloatValue(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_FloatValue.value, __goscriptValue)
}

export let xxx_messageInfo_Int64Value: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Int64Value(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Int64Value.value, __goscriptValue)
}

export let xxx_messageInfo_UInt64Value: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_UInt64Value(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_UInt64Value.value, __goscriptValue)
}

export let xxx_messageInfo_Int32Value: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Int32Value(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Int32Value.value, __goscriptValue)
}

export let xxx_messageInfo_UInt32Value: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_UInt32Value(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_UInt32Value.value, __goscriptValue)
}

export let xxx_messageInfo_BoolValue: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_BoolValue(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_BoolValue.value, __goscriptValue)
}

export let xxx_messageInfo_StringValue: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_StringValue(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_StringValue.value, __goscriptValue)
}

export let xxx_messageInfo_BytesValue: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_BytesValue(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_BytesValue.value, __goscriptValue)
}

function __goscriptInit0(): void {
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.DoubleValue", /* @__PURE__ */ $.pointerType("types.DoubleValue")), "google.protobuf.DoubleValue")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.FloatValue", /* @__PURE__ */ $.pointerType("types.FloatValue")), "google.protobuf.FloatValue")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.Int64Value", /* @__PURE__ */ $.pointerType("types.Int64Value")), "google.protobuf.Int64Value")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.UInt64Value", /* @__PURE__ */ $.pointerType("types.UInt64Value")), "google.protobuf.UInt64Value")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.Int32Value", /* @__PURE__ */ $.pointerType("types.Int32Value")), "google.protobuf.Int32Value")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.UInt32Value", /* @__PURE__ */ $.pointerType("types.UInt32Value")), "google.protobuf.UInt32Value")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.BoolValue", /* @__PURE__ */ $.pointerType("types.BoolValue")), "google.protobuf.BoolValue")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.StringValue", /* @__PURE__ */ $.pointerType("types.StringValue")), "google.protobuf.StringValue")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.BytesValue", /* @__PURE__ */ $.pointerType("types.BytesValue")), "google.protobuf.BytesValue")
}

function __goscriptInit1(): void {
	proto.RegisterFile("google/protobuf/wrappers.proto", fileDescriptor_5377b62bda767935)
}

export let fileDescriptor_5377b62bda767935: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 75, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 47, 47, 74, 44, 40, 72, 45, 42, 214, 3, 139, 8, 241, 67, 228, 245, 96, 242, 74, 202, 92, 220, 46, 249, 165, 73, 57, 169, 97, 137, 57, 165, 169, 66, 34, 92, 172, 101, 32, 134, 4, 163, 2, 163, 6, 99, 16, 132, 163, 164, 196, 197, 229, 150, 147, 159, 88, 130, 69, 13, 19, 146, 26, 207, 188, 18, 51, 19, 44, 106, 152, 97, 106, 148, 185, 184, 67, 113, 41, 98, 65, 53, 200, 216, 8, 139, 26, 86, 52, 131, 176, 42, 226, 133, 41, 82, 228, 226, 116, 202, 207, 207, 193, 162, 132, 3, 201, 156, 224, 146, 162, 204, 188, 116, 44, 138, 56, 145, 28, 228, 84, 89, 146, 90, 140, 69, 13, 15, 84, 141, 83, 59, 227, 141, 135, 114, 12, 31, 30, 202, 49, 254, 120, 40, 199, 216, 240, 72, 142, 113, 197, 35, 57, 198, 19, 143, 228, 24, 47, 60, 146, 99, 124, 240, 72, 142, 241, 197, 35, 57, 134, 15, 32, 241, 199, 114, 140, 39, 30, 203, 49, 114, 9, 39, 231, 231, 234, 161, 69, 135, 19, 111, 56, 52, 190, 2, 64, 34, 1, 140, 81, 172, 37, 149, 5, 169, 197, 63, 24, 25, 23, 49, 49, 187, 7, 56, 173, 98, 146, 115, 135, 104, 9, 128, 106, 209, 11, 79, 205, 201, 241, 206, 203, 47, 207, 11, 1, 169, 76, 98, 3, 155, 101, 12, 8, 0, 0, 255, 255, 49, 85, 100, 144, 10, 2, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_5377b62bda767935(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_5377b62bda767935 = __goscriptValue
}

export async function valueToGoStringWrappers(v: any, typ: string): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}

export function encodeVarintWrappers(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovWrappers(v))
	let base = offset
	for (let __goscriptSliceWindow9 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export async function NewPopulatedDoubleValue(r: randyWrappers | null, easy: boolean): globalThis.Promise<DoubleValue | $.VarRef<DoubleValue> | null> {
	let _this: DoubleValue | $.VarRef<DoubleValue> | null = new DoubleValue()
	let _this$: DoubleValue = _this == null ? $.pointerTarget<DoubleValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<DoubleValue>(_this);
	;(_this$ as DoubleValue).Value = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Float64(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
		;(_this$ as DoubleValue).Value = (_this$ as DoubleValue).Value * (-1)
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as DoubleValue).XXX_unrecognized = await randUnrecognizedWrappers(r, 2)
	}
	return _this
}

export async function NewPopulatedFloatValue(r: randyWrappers | null, easy: boolean): globalThis.Promise<FloatValue | $.VarRef<FloatValue> | null> {
	let _this: FloatValue | $.VarRef<FloatValue> | null = new FloatValue()
	let _this$: FloatValue = _this == null ? $.pointerTarget<FloatValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<FloatValue>(_this);
	;(_this$ as FloatValue).Value = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Float32(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
		;(_this$ as FloatValue).Value = globalThis.Math.fround((_this$ as FloatValue).Value * (-1))
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as FloatValue).XXX_unrecognized = await randUnrecognizedWrappers(r, 2)
	}
	return _this
}

export async function NewPopulatedInt64Value(r: randyWrappers | null, easy: boolean): globalThis.Promise<Int64Value | $.VarRef<Int64Value> | null> {
	let _this: Int64Value | $.VarRef<Int64Value> | null = new Int64Value()
	let _this$: Int64Value = _this == null ? $.pointerTarget<Int64Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Int64Value>(_this);
	;(_this$ as Int64Value).Value = $.int64((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Int63(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
		;(_this$ as Int64Value).Value = $.int64Mul((_this$ as Int64Value).Value, -1n)
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as Int64Value).XXX_unrecognized = await randUnrecognizedWrappers(r, 2)
	}
	return _this
}

export async function NewPopulatedUInt64Value(r: randyWrappers | null, easy: boolean): globalThis.Promise<UInt64Value | $.VarRef<UInt64Value> | null> {
	let _this: UInt64Value | $.VarRef<UInt64Value> | null = new UInt64Value()
	let _this$: UInt64Value = _this == null ? $.pointerTarget<UInt64Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<UInt64Value>(_this);
	;(_this$ as UInt64Value).Value = $.uint64($.uint64((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Uint32(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as UInt64Value).XXX_unrecognized = await randUnrecognizedWrappers(r, 2)
	}
	return _this
}

export async function NewPopulatedInt32Value(r: randyWrappers | null, easy: boolean): globalThis.Promise<Int32Value | $.VarRef<Int32Value> | null> {
	let _this: Int32Value | $.VarRef<Int32Value> | null = new Int32Value()
	let _this$: Int32Value = _this == null ? $.pointerTarget<Int32Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Int32Value>(_this);
	;(_this$ as Int32Value).Value = $.int((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Int31(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
		;(_this$ as Int32Value).Value = globalThis.Math.imul((_this$ as Int32Value).Value, -1)
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as Int32Value).XXX_unrecognized = await randUnrecognizedWrappers(r, 2)
	}
	return _this
}

export async function NewPopulatedUInt32Value(r: randyWrappers | null, easy: boolean): globalThis.Promise<UInt32Value | $.VarRef<UInt32Value> | null> {
	let _this: UInt32Value | $.VarRef<UInt32Value> | null = new UInt32Value()
	let _this$: UInt32Value = _this == null ? $.pointerTarget<UInt32Value>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<UInt32Value>(_this);
	;(_this$ as UInt32Value).Value = $.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Uint32(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as UInt32Value).XXX_unrecognized = await randUnrecognizedWrappers(r, 2)
	}
	return _this
}

export async function NewPopulatedBoolValue(r: randyWrappers | null, easy: boolean): globalThis.Promise<BoolValue | $.VarRef<BoolValue> | null> {
	let _this: BoolValue | $.VarRef<BoolValue> | null = new BoolValue()
	let _this$: BoolValue = _this == null ? $.pointerTarget<BoolValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BoolValue>(_this);
	;(_this$ as BoolValue).Value = ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as BoolValue).XXX_unrecognized = await randUnrecognizedWrappers(r, 2)
	}
	return _this
}

export async function NewPopulatedStringValue(r: randyWrappers | null, easy: boolean): globalThis.Promise<StringValue | $.VarRef<StringValue> | null> {
	let _this: StringValue | $.VarRef<StringValue> | null = new StringValue()
	let _this$: StringValue = _this == null ? $.pointerTarget<StringValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<StringValue>(_this);
	;(_this$ as StringValue).Value = await randStringWrappers(r)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as StringValue).XXX_unrecognized = await randUnrecognizedWrappers(r, 2)
	}
	return _this
}

export async function NewPopulatedBytesValue(r: randyWrappers | null, easy: boolean): globalThis.Promise<BytesValue | $.VarRef<BytesValue> | null> {
	let _this: BytesValue | $.VarRef<BytesValue> | null = new BytesValue()
	let _this$: BytesValue = _this == null ? $.pointerTarget<BytesValue>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BytesValue>(_this)
	let v1 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
	;(_this$ as BytesValue).Value = $.makeSlice<number>(v1, undefined, "byte")
	for (let i = 0; i < v1; i++) {
		$.sliceElems((_this$ as BytesValue).Value!)[$.sliceSlot((_this$ as BytesValue).Value!, i)] = $.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8)
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as BytesValue).XXX_unrecognized = await randUnrecognizedWrappers(r, 2)
	}
	return _this
}

export async function randUTF8RuneWrappers(r: randyWrappers | null): globalThis.Promise<number> {
	let ru = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(62), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (ru < 10) {
		return $.int(ru + 48, 32)
	} else {
		if (ru < 36) {
			return $.int(ru + 55, 32)
		}
	}
	return $.int(ru + 61, 32)
}

export async function randStringWrappers(r: randyWrappers | null): globalThis.Promise<string> {
	let v2 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let tmps: $.Slice<number> = $.makeSlice<number>(v2, undefined, "number")
	for (let __goscriptSliceWindow10 = $.sliceRange(tmps), i = 0; i < v2; i++) {
		;(__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, i)] = await randUTF8RuneWrappers(r)
	}
	return $.runesToString(tmps)
}

export async function randUnrecognizedWrappers(r: randyWrappers | null, maxFieldNumber: number): globalThis.Promise<$.Slice<number>> {
	let dAtA: $.Slice<number> = null! as $.Slice<number>
	let l = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = 0; i < l; i++) {
		let wire = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(4), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (wire == 3) {
			wire = 5
		}
		let fieldNumber = maxFieldNumber + (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		dAtA = await randFieldWrappers(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}

export async function randFieldWrappers(dAtA: $.Slice<number>, r: randyWrappers | null, fieldNumber: number, wire: number): globalThis.Promise<$.Slice<number>> {
	let key = $.uint(((($.uint(fieldNumber, 32) << 3) >>> 0)) | $.uint(wire, 32), 32)
	switch (wire) {
		case 0:
		{
			dAtA = encodeVarintPopulateWrappers(dAtA, $.uint64(key))
			let v3 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Int63(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
				v3 = $.int64Mul(v3, -1n)
			}
			dAtA = encodeVarintPopulateWrappers(dAtA, $.uint64(v3))
			break
		}
		case 1:
		{
			dAtA = encodeVarintPopulateWrappers(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
		case 2:
		{
			dAtA = encodeVarintPopulateWrappers(dAtA, $.uint64(key))
			let ll = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			dAtA = encodeVarintPopulateWrappers(dAtA, $.uint64(ll))
			for (let j = 0; j < ll; j++) {
				dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			}
			break
		}
		default:
		{
			dAtA = encodeVarintPopulateWrappers(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyWrappers, null>) : $.pointerValue<Exclude<randyWrappers, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
	}
	return dAtA
}

export function encodeVarintPopulateWrappers(dAtA: $.Slice<number>, v: bigint): $.Slice<number> {
	while (v >= 128n) {
		dAtA = $.append(dAtA, $.uint($.uint($.uint64Or(($.uint64And($.uint64(v), 127n)), 128n), 8), 8), $.byteSliceHint)
		v = $.uint64Shr(v, 7n)
	}
	dAtA = $.append(dAtA, $.uint($.uint(v, 8), 8), $.byteSliceHint)
	return dAtA
}

export function sovWrappers(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozWrappers(x: bigint): number {
	let n: number = 0
	return sovWrappers($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export async function valueToStringWrappers(v: any): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("*%v", pv)
}

export function skipWrappers(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow11 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowWrappers]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
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
						return [0, ErrIntOverflowWrappers]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowWrappers]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthWrappers]
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
					return [0, ErrUnexpectedEndOfGroupWrappers]
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
			return [0, ErrInvalidLengthWrappers]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthWrappers: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthWrappers(__goscriptValue: $.GoError): void {
	ErrInvalidLengthWrappers = __goscriptValue
}

export let ErrIntOverflowWrappers: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowWrappers(__goscriptValue: $.GoError): void {
	ErrIntOverflowWrappers = __goscriptValue
}

export let ErrUnexpectedEndOfGroupWrappers: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupWrappers(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupWrappers = __goscriptValue
}

var __goscriptAwait: any

export { __goscriptInit0 }

export { __goscriptInit1 }
