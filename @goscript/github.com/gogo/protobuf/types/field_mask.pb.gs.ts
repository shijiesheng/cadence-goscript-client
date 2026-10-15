// Generated file based on field_mask.pb.go
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

import * as __goscript_protosize from "./protosize.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "./protosize.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/types", ["types.FieldMask", "types.randyFieldMask"])

export type randyFieldMask = {
	Float32(): number | globalThis.Promise<number>
	Float64(): number | globalThis.Promise<number>
	Int31(): number | globalThis.Promise<number>
	Int63(): bigint | globalThis.Promise<bigint>
	Intn(n: number): number | globalThis.Promise<number>
	Uint32(): number | globalThis.Promise<number>
}

$.registerInterfaceType(
	"types.randyFieldMask",
	null,
	[$.methodSignature("Float32", [], [/* @__PURE__ */ $.basicType("float32")]), $.methodSignature("Float64", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Int31", [], [/* @__PURE__ */ $.basicType("int32")]), $.methodSignature("Int63", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Intn", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Uint32", [], [/* @__PURE__ */ $.basicType("uint32")])]
);

export class FieldMask {
	// The set of field mask paths.
	public get Paths(): $.Slice<string> {
		return this._fields.Paths
	}

	public set Paths(value: $.Slice<string>) {
		this._fields.Paths = value
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
		Paths: $.Slice<string>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Paths?: $.Slice<string>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Paths: init?.Paths ?? (null! as $.Slice<string>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FieldMask {
		return new FieldMask(this, true)
	}

	public __goscriptAssign(source: FieldMask): void {
		const target = this._fields
		const values = source._fields
		target.Paths = values.Paths
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: FieldMask | $.VarRef<FieldMask> | null = this;
		const _this$: FieldMask = _this == null ? $.pointerTarget<FieldMask>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<FieldMask>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple0: any = $.typeAssertTuple<FieldMask | $.VarRef<FieldMask> | null>(that, /* @__PURE__ */ $.pointerType("types.FieldMask"))
		let that1: FieldMask | $.VarRef<FieldMask> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			let __goscriptTuple1: any = $.typeAssertTuple<FieldMask>(that, "types.FieldMask")
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
		if ($.sliceLen((_this$ as FieldMask).Paths) != $.sliceLen($.pointerValue<FieldMask>(that1).Paths)) {
			if ($.sliceLen((_this$ as FieldMask).Paths) < $.sliceLen($.pointerValue<FieldMask>(that1).Paths)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget0 = (_this$ as FieldMask).Paths, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			if (!$.stringEqual($.arrayIndex((_this$ as FieldMask).Paths!, i), $.arrayIndex($.pointerValue<FieldMask>(that1).Paths!, i))) {
				if ($.stringCompare($.arrayIndex((_this$ as FieldMask).Paths!, i), $.arrayIndex($.pointerValue<FieldMask>(that1).Paths!, i)) < 0) {
					return -1
				}
				return 1
			}
		}
		{
			let c = bytes.Compare((_this$ as FieldMask).XXX_unrecognized, $.pointerValue<FieldMask>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_5158202634f0da48, $.arrayToSlice<number>([0])]
	}

	public Equal(that: any): boolean {
		const _this: FieldMask | $.VarRef<FieldMask> | null = this;
		const _this$: FieldMask = _this == null ? $.pointerTarget<FieldMask>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<FieldMask>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple2: any = $.typeAssertTuple<FieldMask | $.VarRef<FieldMask> | null>(that, /* @__PURE__ */ $.pointerType("types.FieldMask"))
		let that1: FieldMask | $.VarRef<FieldMask> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			let __goscriptTuple3: any = $.typeAssertTuple<FieldMask>(that, "types.FieldMask")
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
		if ($.sliceLen((_this$ as FieldMask).Paths) != $.sliceLen($.pointerValue<FieldMask>(that1).Paths)) {
			return false
		}
		for (let __goscriptRangeTarget1 = (_this$ as FieldMask).Paths, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			if (!$.stringEqual($.arrayIndex((_this$ as FieldMask).Paths!, i), $.arrayIndex($.pointerValue<FieldMask>(that1).Paths!, i))) {
				return false
			}
		}
		if (!bytes.Equal((_this$ as FieldMask).XXX_unrecognized, $.pointerValue<FieldMask>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetPaths(): $.Slice<string> {
		const m: FieldMask | $.VarRef<FieldMask> | null = this;
		if (m != null) {
			return $.pointerValue<FieldMask>(m).Paths
		}
		return null
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: FieldMask | $.VarRef<FieldMask> | null = this;
		const _this$: FieldMask = _this == null ? $.pointerTarget<FieldMask>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<FieldMask>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&types.FieldMask{")
		s = $.appendOne(s, $.concatString(($.concatString("Paths: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as FieldMask).Paths, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))))), ",\n"))
		if ((_this$ as FieldMask).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as FieldMask).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: FieldMask | $.VarRef<FieldMask> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FieldMask).Size() : FieldMask.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FieldMask).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FieldMask.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FieldMask | $.VarRef<FieldMask> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FieldMask).Size() : FieldMask.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FieldMask).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FieldMask.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FieldMask | $.VarRef<FieldMask> | null = this;
		const m$: FieldMask = m == null ? $.pointerTarget<FieldMask>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FieldMask>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as FieldMask).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as FieldMask).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as FieldMask).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as FieldMask).Paths) > 0) {
			for (let __goscriptSliceWindow0 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as FieldMask).Paths) - 1; iNdEx >= 0; iNdEx--) {
				i = i - ($.stringLen($.arrayIndex((m$ as FieldMask).Paths!, iNdEx)))
				$.copy($.goSlice(dAtA, i, undefined), $.arrayIndex((m$ as FieldMask).Paths!, iNdEx))
				i = encodeVarintFieldMask(dAtA, i, $.uint64($.stringLen($.arrayIndex((m$ as FieldMask).Paths!, iNdEx))))
				i--;
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: FieldMask | $.VarRef<FieldMask> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FieldMask).Size() : FieldMask.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: FieldMask | $.VarRef<FieldMask> | null = this;
		$.assignStruct($.pointerValue<FieldMask>(m), $.markAsStructValue(new FieldMask()))
	}

	public Size(): number {
		const m: FieldMask | $.VarRef<FieldMask> | null = this;
		let n: number = 0
		const m$: FieldMask = m == null ? $.pointerTarget<FieldMask>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FieldMask>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as FieldMask).Paths) > 0) {
			for (let __goscriptRangeTarget2 = (m$ as FieldMask).Paths, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let s = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
				l = $.stringLen(s)
				n = n + ((1 + l) + sovFieldMask($.uint64(l)))
			}
		}
		if ((m$ as FieldMask).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as FieldMask).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: FieldMask | $.VarRef<FieldMask> | null = this;
		const _this$: FieldMask = _this == null ? $.pointerTarget<FieldMask>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<FieldMask>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&FieldMask{", $.concatString(($.concatString("Paths:", await fmt.Sprintf("%v", $.interfaceValue((_this$ as FieldMask).Paths, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))))), ","), $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%v", $.interfaceValue((_this$ as FieldMask).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: FieldMask | $.VarRef<FieldMask> | null = this;
		const m$: FieldMask = m == null ? $.pointerTarget<FieldMask>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FieldMask>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowFieldMask
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
				return fmt.Errorf("proto: FieldMask: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: FieldMask: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Paths", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowFieldMask
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthFieldMask
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthFieldMask
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as FieldMask).Paths = $.appendOne((m$ as FieldMask).Paths, $.bytesToString($.goSlice(dAtA, iNdEx, postIndex)))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipFieldMask($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthFieldMask
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as FieldMask).XXX_unrecognized = $.appendSlice((m$ as FieldMask).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: FieldMask | $.VarRef<FieldMask> | null = this;
		await xxx_messageInfo_FieldMask.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.FieldMask", /* @__PURE__ */ $.pointerType("types.FieldMask")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: FieldMask | $.VarRef<FieldMask> | null = this;
		if (deterministic) {
			return xxx_messageInfo_FieldMask.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.FieldMask", /* @__PURE__ */ $.pointerType("types.FieldMask")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FieldMask).MarshalToSizedBuffer(b) : FieldMask.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: FieldMask | $.VarRef<FieldMask> | null = this;
		await xxx_messageInfo_FieldMask.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.FieldMask", /* @__PURE__ */ $.pointerType("types.FieldMask")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.FieldMask"
	}

	public XXX_Size(): number {
		const m: FieldMask | $.VarRef<FieldMask> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FieldMask).Size() : FieldMask.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: FieldMask | $.VarRef<FieldMask> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FieldMask).Unmarshal(b) : FieldMask.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"types.FieldMask",
		() => new FieldMask(),
		() => [$.methodSignature("Compare", [["that", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Equal", [["that", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetPaths", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoSize", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_MessageName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		FieldMask,
		() => [/* @__PURE__ */ $.structField("Paths", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, true, { tag: "protobuf:\"bytes,1,rep,name=paths,proto3\" json:\"paths,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [1], 24, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 24, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [3], 48, true, { tag: "json:\"-\"" })]
	)
}

export let xxx_messageInfo_FieldMask: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_FieldMask(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_FieldMask.value, __goscriptValue)
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.FieldMask", /* @__PURE__ */ $.pointerType("types.FieldMask")), "google.protobuf.FieldMask")
}

async function __goscriptInit1(): globalThis.Promise<void> {
	proto.RegisterFile("google/protobuf/field_mask.proto", fileDescriptor_5158202634f0da48)
}

export let fileDescriptor_5158202634f0da48: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 82, 72, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 79, 203, 76, 205, 73, 137, 207, 77, 44, 206, 214, 3, 139, 9, 241, 67, 84, 232, 193, 84, 40, 41, 114, 113, 186, 129, 20, 249, 38, 22, 103, 11, 137, 112, 177, 22, 36, 150, 100, 20, 75, 48, 42, 48, 107, 112, 6, 65, 56, 78, 29, 140, 55, 30, 202, 49, 124, 120, 40, 199, 248, 227, 161, 28, 99, 195, 35, 57, 198, 21, 143, 228, 24, 79, 60, 146, 99, 188, 240, 72, 142, 241, 193, 35, 57, 198, 23, 143, 228, 24, 62, 128, 196, 31, 203, 49, 158, 120, 44, 199, 200, 37, 156, 156, 159, 171, 135, 102, 149, 19, 31, 220, 162, 0, 144, 80, 0, 99, 20, 107, 73, 101, 65, 106, 241, 15, 70, 198, 69, 76, 204, 238, 1, 78, 171, 152, 228, 220, 33, 122, 2, 160, 122, 244, 194, 83, 115, 114, 188, 243, 242, 203, 243, 66, 64, 42, 147, 216, 192, 134, 25, 3, 2, 0, 0, 255, 255, 67, 160, 131, 208, 233, 0, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_5158202634f0da48(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_5158202634f0da48 = __goscriptValue
}

export async function valueToGoStringFieldMask(v: any, typ: string): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}

export function encodeVarintFieldMask(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovFieldMask(v))
	let base = offset
	for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export async function NewPopulatedFieldMask(r: randyFieldMask | null, easy: boolean): globalThis.Promise<FieldMask | $.VarRef<FieldMask> | null> {
	let _this: FieldMask | $.VarRef<FieldMask> | null = new FieldMask()
	let _this$: FieldMask = _this == null ? $.pointerTarget<FieldMask>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<FieldMask>(_this)
	let v1 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
	;(_this$ as FieldMask).Paths = $.makeSlice<string>(v1, undefined, "string")
	for (let i = 0; i < v1; i++) {
		$.sliceElems((_this$ as FieldMask).Paths!)[$.sliceSlot((_this$ as FieldMask).Paths!, i)] = await randStringFieldMask(r)
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as FieldMask).XXX_unrecognized = await randUnrecognizedFieldMask(r, 2)
	}
	return _this
}

export async function randUTF8RuneFieldMask(r: randyFieldMask | null): globalThis.Promise<number> {
	let ru = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(62), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (ru < 10) {
		return $.int(ru + 48, 32)
	} else {
		if (ru < 36) {
			return $.int(ru + 55, 32)
		}
	}
	return $.int(ru + 61, 32)
}

export async function randStringFieldMask(r: randyFieldMask | null): globalThis.Promise<string> {
	let v2 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let tmps: $.Slice<number> = $.makeSlice<number>(v2, undefined, "number")
	for (let __goscriptSliceWindow3 = $.sliceRange(tmps), i = 0; i < v2; i++) {
		;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] = await randUTF8RuneFieldMask(r)
	}
	return $.runesToString(tmps)
}

export async function randUnrecognizedFieldMask(r: randyFieldMask | null, maxFieldNumber: number): globalThis.Promise<$.Slice<number>> {
	let dAtA: $.Slice<number> = null! as $.Slice<number>
	let l = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = 0; i < l; i++) {
		let wire = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(4), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (wire == 3) {
			wire = 5
		}
		let fieldNumber = maxFieldNumber + (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		dAtA = await randFieldFieldMask(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}

export async function randFieldFieldMask(dAtA: $.Slice<number>, r: randyFieldMask | null, fieldNumber: number, wire: number): globalThis.Promise<$.Slice<number>> {
	let key = $.uint(((($.uint(fieldNumber, 32) << 3) >>> 0)) | $.uint(wire, 32), 32)
	switch (wire) {
		case 0:
		{
			dAtA = encodeVarintPopulateFieldMask(dAtA, $.uint64(key))
			let v3 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Int63(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
				v3 = $.int64Mul(v3, -1n)
			}
			dAtA = encodeVarintPopulateFieldMask(dAtA, $.uint64(v3))
			break
		}
		case 1:
		{
			dAtA = encodeVarintPopulateFieldMask(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
		case 2:
		{
			dAtA = encodeVarintPopulateFieldMask(dAtA, $.uint64(key))
			let ll = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			dAtA = encodeVarintPopulateFieldMask(dAtA, $.uint64(ll))
			for (let j = 0; j < ll; j++) {
				dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			}
			break
		}
		default:
		{
			dAtA = encodeVarintPopulateFieldMask(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyFieldMask, null>) : $.pointerValue<Exclude<randyFieldMask, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
	}
	return dAtA
}

export function encodeVarintPopulateFieldMask(dAtA: $.Slice<number>, v: bigint): $.Slice<number> {
	while (v >= 128n) {
		dAtA = $.append(dAtA, $.uint($.uint($.uint64Or(($.uint64And($.uint64(v), 127n)), 128n), 8), 8), $.byteSliceHint)
		v = $.uint64Shr(v, 7n)
	}
	dAtA = $.append(dAtA, $.uint($.uint(v, 8), 8), $.byteSliceHint)
	return dAtA
}

export function sovFieldMask(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozFieldMask(x: bigint): number {
	let n: number = 0
	return sovFieldMask($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export async function valueToStringFieldMask(v: any): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("*%v", pv)
}

export function skipFieldMask(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow4 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowFieldMask]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
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
						return [0, ErrIntOverflowFieldMask]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowFieldMask]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthFieldMask]
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
					return [0, ErrUnexpectedEndOfGroupFieldMask]
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
			return [0, ErrInvalidLengthFieldMask]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthFieldMask: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthFieldMask(__goscriptValue: $.GoError): void {
	ErrInvalidLengthFieldMask = __goscriptValue
}

export let ErrIntOverflowFieldMask: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowFieldMask(__goscriptValue: $.GoError): void {
	ErrIntOverflowFieldMask = __goscriptValue
}

export let ErrUnexpectedEndOfGroupFieldMask: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupFieldMask(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupFieldMask = __goscriptValue
}

var __goscriptAwait: any

export { __goscriptInit0 }

export { __goscriptInit1 }
