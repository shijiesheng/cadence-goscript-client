// Generated file based on any.pb.go
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

$.registerTypePackagePath("github.com/gogo/protobuf/types", ["types.Any", "types.randyAny"])

export type randyAny = {
	Float32(): number | globalThis.Promise<number>
	Float64(): number | globalThis.Promise<number>
	Int31(): number | globalThis.Promise<number>
	Int63(): bigint | globalThis.Promise<bigint>
	Intn(n: number): number | globalThis.Promise<number>
	Uint32(): number | globalThis.Promise<number>
}

$.registerInterfaceType(
	"types.randyAny",
	null,
	[$.methodSignature("Float32", [], [/* @__PURE__ */ $.basicType("float32")]), $.methodSignature("Float64", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Int31", [], [/* @__PURE__ */ $.basicType("int32")]), $.methodSignature("Int63", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Intn", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Uint32", [], [/* @__PURE__ */ $.basicType("uint32")])]
);

export class Any {
	// A URL/resource name that uniquely identifies the type of the serialized
	// protocol buffer message. This string must contain at least
	// one "/" character. The last segment of the URL's path must represent
	// the fully qualified name of the type (as in
	// `path/google.protobuf.Duration`). The name should be in a canonical form
	// (e.g., leading "." is not accepted).
	//
	// In practice, teams usually precompile into the binary all types that they
	// expect it to use in the context of Any. However, for URLs which use the
	// scheme `http`, `https`, or no scheme, one can optionally set up a type
	// server that maps type URLs to message definitions as follows:
	//
	// * If no scheme is provided, `https` is assumed.
	// * An HTTP GET on the URL must yield a [google.protobuf.Type][]
	//   value in binary format, or produce an error.
	// * Applications are allowed to cache lookup results based on the
	//   URL, or have them precompiled into a binary to avoid any
	//   lookup. Therefore, binary compatibility needs to be preserved
	//   on changes to types. (Use versioned type names to manage
	//   breaking changes.)
	//
	// Note: this functionality is not currently available in the official
	// protobuf release, and it is not used for type URLs beginning with
	// type.googleapis.com.
	//
	// Schemes other than `http`, `https` (or the empty scheme) might be
	// used with implementation specific semantics.
	public get TypeUrl(): string {
		return this._fields.TypeUrl
	}

	public set TypeUrl(value: string) {
		this._fields.TypeUrl = value
	}

	// Must be a valid serialized protocol buffer of the above specified type.
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
		TypeUrl: string
		Value: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{TypeUrl?: string, Value?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			TypeUrl: init?.TypeUrl ?? ("" as string),
			Value: init?.Value ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Any {
		return new Any(this, true)
	}

	public __goscriptAssign(source: Any): void {
		const target = this._fields
		const values = source._fields
		target.TypeUrl = values.TypeUrl
		target.Value = values.Value
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: Any | $.VarRef<Any> | null = this;
		const _this$: Any = _this == null ? $.pointerTarget<Any>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Any>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple0: any = $.typeAssertTuple<Any | $.VarRef<Any> | null>(that, /* @__PURE__ */ $.pointerType("types.Any"))
		let that1: Any | $.VarRef<Any> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			let __goscriptTuple1: any = $.typeAssertTuple<Any>(that, "types.Any")
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
		if (!$.stringEqual((_this$ as Any).TypeUrl, $.pointerValue<Any>(that1).TypeUrl)) {
			if ($.stringCompare((_this$ as Any).TypeUrl, $.pointerValue<Any>(that1).TypeUrl) < 0) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as Any).Value, $.pointerValue<Any>(that1).Value)
			if (c != 0) {
				return c
			}
		}
		{
			let c = bytes.Compare((_this$ as Any).XXX_unrecognized, $.pointerValue<Any>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_b53526c13ae22eb4, $.arrayToSlice<number>([0])]
	}

	public Equal(that: any): boolean {
		const _this: Any | $.VarRef<Any> | null = this;
		const _this$: Any = _this == null ? $.pointerTarget<Any>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Any>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple2: any = $.typeAssertTuple<Any | $.VarRef<Any> | null>(that, /* @__PURE__ */ $.pointerType("types.Any"))
		let that1: Any | $.VarRef<Any> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			let __goscriptTuple3: any = $.typeAssertTuple<Any>(that, "types.Any")
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
		if (!$.stringEqual((_this$ as Any).TypeUrl, $.pointerValue<Any>(that1).TypeUrl)) {
			return false
		}
		if (!bytes.Equal((_this$ as Any).Value, $.pointerValue<Any>(that1).Value)) {
			return false
		}
		if (!bytes.Equal((_this$ as Any).XXX_unrecognized, $.pointerValue<Any>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetTypeUrl(): string {
		const m: Any | $.VarRef<Any> | null = this;
		if (m != null) {
			return $.pointerValue<Any>(m).TypeUrl
		}
		return ""
	}

	public GetValue(): $.Slice<number> {
		const m: Any | $.VarRef<Any> | null = this;
		if (m != null) {
			return $.pointerValue<Any>(m).Value
		}
		return null
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Any | $.VarRef<Any> | null = this;
		const _this$: Any = _this == null ? $.pointerTarget<Any>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Any>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 6, "string")
		s = $.appendOne(s, "&types.Any{")
		s = $.appendOne(s, $.concatString(($.concatString("TypeUrl: ", await fmt.Sprintf("%#v", (_this$ as Any).TypeUrl))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Value: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Any).Value, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		if ((_this$ as Any).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Any).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Any | $.VarRef<Any> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Any).Size() : Any.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Any).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Any.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Any | $.VarRef<Any> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Any).Size() : Any.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Any).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Any.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Any | $.VarRef<Any> | null = this;
		const m$: Any = m == null ? $.pointerTarget<Any>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Any>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Any).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Any).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Any).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as Any).Value) > 0) {
			i = i - ($.sliceLen((m$ as Any).Value))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Any).Value)
			i = encodeVarintAny(dAtA, i, $.uint64($.sliceLen((m$ as Any).Value)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as Any).TypeUrl) > 0) {
			i = i - ($.stringLen((m$ as Any).TypeUrl))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Any).TypeUrl)
			i = encodeVarintAny(dAtA, i, $.uint64($.stringLen((m$ as Any).TypeUrl)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public ProtoSize(): number {
		const m: Any | $.VarRef<Any> | null = this;
		let n: number = 0
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Any).Size() : Any.prototype.Size.call(m))
	}

	public Reset(): void {
		let m: Any | $.VarRef<Any> | null = this;
		$.assignStruct($.pointerValue<Any>(m), $.markAsStructValue(new Any()))
	}

	public Size(): number {
		const m: Any | $.VarRef<Any> | null = this;
		let n: number = 0
		const m$: Any = m == null ? $.pointerTarget<Any>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Any>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as Any).TypeUrl)
		if (l > 0) {
			n = n + ((1 + l) + sovAny($.uint64(l)))
		}
		l = $.sliceLen((m$ as Any).Value)
		if (l > 0) {
			n = n + ((1 + l) + sovAny($.uint64(l)))
		}
		if ((m$ as Any).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Any).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: Any | $.VarRef<Any> | null = this;
		const _this$: Any = _this == null ? $.pointerTarget<Any>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Any>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&Any{", $.concatString(($.concatString("TypeUrl:", await fmt.Sprintf("%v", (_this$ as Any).TypeUrl))), ","), $.concatString(($.concatString("Value:", await fmt.Sprintf("%v", $.interfaceValue((_this$ as Any).Value, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%v", $.interfaceValue((_this$ as Any).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Any | $.VarRef<Any> | null = this;
		const m$: Any = m == null ? $.pointerTarget<Any>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Any>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowAny
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
				return fmt.Errorf("proto: Any: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Any: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TypeUrl", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowAny
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthAny
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthAny
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Any).TypeUrl = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Value", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowAny
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthAny
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthAny
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Any).Value = $.appendSlice($.goSlice((m$ as Any).Value, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as Any).Value == null) {
						;(m$ as Any).Value = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipAny($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthAny
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Any).XXX_unrecognized = $.appendSlice((m$ as Any).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Any | $.VarRef<Any> | null = this;
		await xxx_messageInfo_Any.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*types.Any", /* @__PURE__ */ $.pointerType("types.Any")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: Any | $.VarRef<Any> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Any.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*types.Any", /* @__PURE__ */ $.pointerType("types.Any")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Any).MarshalToSizedBuffer(b) : Any.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: Any | $.VarRef<Any> | null = this;
		await xxx_messageInfo_Any.value.Merge($.interfaceValue<proto.Message | null>(m, "*types.Any", /* @__PURE__ */ $.pointerType("types.Any")), src)
	}

	public XXX_MessageName(): string {
		return "google.protobuf.Any"
	}

	public XXX_Size(): number {
		const m: Any | $.VarRef<Any> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Any).Size() : Any.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Any | $.VarRef<Any> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Any).Unmarshal(b) : Any.prototype.Unmarshal.call(m, b))
	}

	public XXX_WellKnownType(): string {
		return "Any"
	}

	static __typeInfo = $.registerStructType(
		"types.Any",
		() => new Any(),
		() => [$.methodSignature("Compare", [["that", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Equal", [["that", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetTypeUrl", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetValue", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("ProtoSize", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_MessageName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_WellKnownType", [], [/* @__PURE__ */ $.basicType("string")], true)],
		Any,
		() => [/* @__PURE__ */ $.structField("TypeUrl", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=type_url,json=typeUrl,proto3\" json:\"type_url,omitempty\"" }), /* @__PURE__ */ $.structField("Value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=value,proto3\" json:\"value,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 40, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 40, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 64, true, { tag: "json:\"-\"" })]
	)
}

export let xxx_messageInfo_Any: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Any(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Any.value, __goscriptValue)
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*types.Any", /* @__PURE__ */ $.pointerType("types.Any")), "google.protobuf.Any")
}

async function __goscriptInit1(): globalThis.Promise<void> {
	proto.RegisterFile("google/protobuf/any.proto", fileDescriptor_b53526c13ae22eb4)
}

export let fileDescriptor_b53526c13ae22eb4: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 76, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 79, 204, 171, 212, 3, 115, 132, 248, 33, 82, 122, 48, 41, 37, 51, 46, 102, 199, 188, 74, 33, 73, 46, 142, 146, 202, 130, 212, 248, 210, 162, 28, 9, 70, 5, 70, 13, 206, 32, 118, 16, 63, 180, 40, 71, 72, 132, 139, 181, 44, 49, 167, 52, 85, 130, 73, 129, 81, 131, 39, 8, 194, 113, 170, 191, 241, 80, 142, 225, 195, 67, 57, 198, 31, 15, 229, 24, 27, 30, 201, 49, 174, 120, 36, 199, 120, 226, 145, 28, 227, 133, 71, 114, 140, 15, 30, 201, 49, 190, 120, 36, 199, 240, 1, 36, 254, 88, 142, 241, 196, 99, 57, 70, 46, 225, 228, 252, 92, 61, 52, 235, 157, 56, 28, 243, 42, 3, 64, 156, 0, 198, 40, 86, 144, 141, 197, 139, 152, 152, 221, 3, 156, 86, 49, 201, 185, 67, 148, 6, 64, 149, 234, 133, 167, 230, 228, 120, 231, 229, 151, 231, 133, 128, 148, 37, 177, 129, 205, 48, 6, 4, 0, 0, 255, 255, 183, 129, 130, 211, 237, 0, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_b53526c13ae22eb4(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_b53526c13ae22eb4 = __goscriptValue
}

export async function valueToGoStringAny(v: any, typ: string): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}

export function encodeVarintAny(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovAny(v))
	let base = offset
	for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export async function NewPopulatedAny(r: randyAny | null, easy: boolean): globalThis.Promise<Any | $.VarRef<Any> | null> {
	let _this: Any | $.VarRef<Any> | null = new Any()
	let _this$: Any = _this == null ? $.pointerTarget<Any>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Any>(_this);
	;(_this$ as Any).TypeUrl = await randStringAny(r)
	let v1 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
	;(_this$ as Any).Value = $.makeSlice<number>(v1, undefined, "byte")
	for (let i = 0; i < v1; i++) {
		$.sliceElems((_this$ as Any).Value!)[$.sliceSlot((_this$ as Any).Value!, i)] = $.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8)
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as Any).XXX_unrecognized = await randUnrecognizedAny(r, 3)
	}
	return _this
}

export async function randUTF8RuneAny(r: randyAny | null): globalThis.Promise<number> {
	let ru = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(62), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (ru < 10) {
		return $.int(ru + 48, 32)
	} else {
		if (ru < 36) {
			return $.int(ru + 55, 32)
		}
	}
	return $.int(ru + 61, 32)
}

export async function randStringAny(r: randyAny | null): globalThis.Promise<string> {
	let v2 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let tmps: $.Slice<number> = $.makeSlice<number>(v2, undefined, "number")
	for (let __goscriptSliceWindow2 = $.sliceRange(tmps), i = 0; i < v2; i++) {
		;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = await randUTF8RuneAny(r)
	}
	return $.runesToString(tmps)
}

export async function randUnrecognizedAny(r: randyAny | null, maxFieldNumber: number): globalThis.Promise<$.Slice<number>> {
	let dAtA: $.Slice<number> = null! as $.Slice<number>
	let l = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = 0; i < l; i++) {
		let wire = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(4), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (wire == 3) {
			wire = 5
		}
		let fieldNumber = maxFieldNumber + (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		dAtA = await randFieldAny(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}

export async function randFieldAny(dAtA: $.Slice<number>, r: randyAny | null, fieldNumber: number, wire: number): globalThis.Promise<$.Slice<number>> {
	let key = $.uint(((($.uint(fieldNumber, 32) << 3) >>> 0)) | $.uint(wire, 32), 32)
	switch (wire) {
		case 0:
		{
			dAtA = encodeVarintPopulateAny(dAtA, $.uint64(key))
			let v3 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Int63(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
				v3 = $.int64Mul(v3, -1n)
			}
			dAtA = encodeVarintPopulateAny(dAtA, $.uint64(v3))
			break
		}
		case 1:
		{
			dAtA = encodeVarintPopulateAny(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
		case 2:
		{
			dAtA = encodeVarintPopulateAny(dAtA, $.uint64(key))
			let ll = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			dAtA = encodeVarintPopulateAny(dAtA, $.uint64(ll))
			for (let j = 0; j < ll; j++) {
				dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			}
			break
		}
		default:
		{
			dAtA = encodeVarintPopulateAny(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyAny, null>) : $.pointerValue<Exclude<randyAny, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
	}
	return dAtA
}

export function encodeVarintPopulateAny(dAtA: $.Slice<number>, v: bigint): $.Slice<number> {
	while (v >= 128n) {
		dAtA = $.append(dAtA, $.uint($.uint($.uint64Or(($.uint64And($.uint64(v), 127n)), 128n), 8), 8), $.byteSliceHint)
		v = $.uint64Shr(v, 7n)
	}
	dAtA = $.append(dAtA, $.uint($.uint(v, 8), 8), $.byteSliceHint)
	return dAtA
}

export function sovAny(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozAny(x: bigint): number {
	let n: number = 0
	return sovAny($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export async function valueToStringAny(v: any): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("*%v", pv)
}

export function skipAny(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowAny]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
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
						return [0, ErrIntOverflowAny]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowAny]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthAny]
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
					return [0, ErrUnexpectedEndOfGroupAny]
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
			return [0, ErrInvalidLengthAny]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthAny: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthAny(__goscriptValue: $.GoError): void {
	ErrInvalidLengthAny = __goscriptValue
}

export let ErrIntOverflowAny: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowAny(__goscriptValue: $.GoError): void {
	ErrIntOverflowAny = __goscriptValue
}

export let ErrUnexpectedEndOfGroupAny: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupAny(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupAny = __goscriptValue
}

var __goscriptAwait: any

export { __goscriptInit0 }

export { __goscriptInit1 }
