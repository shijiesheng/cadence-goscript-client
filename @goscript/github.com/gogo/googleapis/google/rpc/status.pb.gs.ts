// Generated file based on status.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as types from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"

$.registerTypePackagePath("github.com/gogo/googleapis/google/rpc", ["rpc.Status", "rpc.randyStatus"])

export type randyStatus = {
	Float32(): number | globalThis.Promise<number>
	Float64(): number | globalThis.Promise<number>
	Int31(): number | globalThis.Promise<number>
	Int63(): bigint | globalThis.Promise<bigint>
	Intn(n: number): number | globalThis.Promise<number>
	Uint32(): number | globalThis.Promise<number>
}

$.registerInterfaceType(
	"rpc.randyStatus",
	null,
	[$.methodSignature("Float32", [], [/* @__PURE__ */ $.basicType("float32")]), $.methodSignature("Float64", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Int31", [], [/* @__PURE__ */ $.basicType("int32")]), $.methodSignature("Int63", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Intn", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Uint32", [], [/* @__PURE__ */ $.basicType("uint32")])]
);

export class Status {
	// The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].
	public get Code(): number {
		return this._fields.Code
	}

	public set Code(value: number) {
		this._fields.Code = value
	}

	// A developer-facing error message, which should be in English. Any
	// user-facing error message should be localized and sent in the
	// [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.
	public get Message(): string {
		return this._fields.Message
	}

	public set Message(value: string) {
		this._fields.Message = value
	}

	// A list of messages that carry the error details.  There is a common set of
	// message types for APIs to use.
	public get Details(): $.Slice<types.Any | $.VarRef<types.Any> | null> {
		return this._fields.Details
	}

	public set Details(value: $.Slice<types.Any | $.VarRef<types.Any> | null>) {
		this._fields.Details = value
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
		Code: number
		Message: string
		Details: $.Slice<types.Any | $.VarRef<types.Any> | null>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Code?: number, Message?: string, Details?: $.Slice<types.Any | $.VarRef<types.Any> | null>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Code: init?.Code ?? (0 as number),
			Message: init?.Message ?? ("" as string),
			Details: init?.Details ?? (null! as $.Slice<types.Any | $.VarRef<types.Any> | null>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Status {
		return new Status(this, true)
	}

	public __goscriptAssign(source: Status): void {
		const target = this._fields
		const values = source._fields
		target.Code = values.Code
		target.Message = values.Message
		target.Details = values.Details
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: Status | $.VarRef<Status> | null = this;
		const _this$: Status = _this == null ? $.pointerTarget<Status>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Status>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple0: any = $.typeAssertTuple<Status | $.VarRef<Status> | null>(that, /* @__PURE__ */ $.pointerType("rpc.Status"))
		let that1: Status | $.VarRef<Status> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			let __goscriptTuple1: any = $.typeAssertTuple<Status>(that, "rpc.Status")
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
		if ((_this$ as Status).Code != $.pointerValue<Status>(that1).Code) {
			if ((_this$ as Status).Code < $.pointerValue<Status>(that1).Code) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as Status).Message, $.pointerValue<Status>(that1).Message)) {
			if ($.stringCompare((_this$ as Status).Message, $.pointerValue<Status>(that1).Message) < 0) {
				return -1
			}
			return 1
		}
		if ($.sliceLen((_this$ as Status).Details) != $.sliceLen($.pointerValue<Status>(that1).Details)) {
			if ($.sliceLen((_this$ as Status).Details) < $.sliceLen($.pointerValue<Status>(that1).Details)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget0 = (_this$ as Status).Details, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			{
				let c = types.Any.prototype.Compare.call($.arrayIndex((_this$ as Status).Details!, i), $.interfaceValue($.arrayIndex($.pointerValue<Status>(that1).Details!, i), "*types.Any", /* @__PURE__ */ $.pointerType("types.Any")))
				if (c != 0) {
					return c
				}
			}
		}
		{
			let c = bytes.Compare((_this$ as Status).XXX_unrecognized, $.pointerValue<Status>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_24d244abaf643bfe, $.arrayToSlice<number>([0])]
	}

	public Equal(that: any): boolean {
		const _this: Status | $.VarRef<Status> | null = this;
		const _this$: Status = _this == null ? $.pointerTarget<Status>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Status>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple2: any = $.typeAssertTuple<Status | $.VarRef<Status> | null>(that, /* @__PURE__ */ $.pointerType("rpc.Status"))
		let that1: Status | $.VarRef<Status> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			let __goscriptTuple3: any = $.typeAssertTuple<Status>(that, "rpc.Status")
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
		if ((_this$ as Status).Code != $.pointerValue<Status>(that1).Code) {
			return false
		}
		if (!$.stringEqual((_this$ as Status).Message, $.pointerValue<Status>(that1).Message)) {
			return false
		}
		if ($.sliceLen((_this$ as Status).Details) != $.sliceLen($.pointerValue<Status>(that1).Details)) {
			return false
		}
		for (let __goscriptRangeTarget1 = (_this$ as Status).Details, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			if (!types.Any.prototype.Equal.call($.arrayIndex((_this$ as Status).Details!, i), $.interfaceValue($.arrayIndex($.pointerValue<Status>(that1).Details!, i), "*types.Any", /* @__PURE__ */ $.pointerType("types.Any")))) {
				return false
			}
		}
		if (!bytes.Equal((_this$ as Status).XXX_unrecognized, $.pointerValue<Status>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetCode(): number {
		const m: Status | $.VarRef<Status> | null = this;
		if (m != null) {
			return $.pointerValue<Status>(m).Code
		}
		return 0
	}

	public GetDetails(): $.Slice<types.Any | $.VarRef<types.Any> | null> {
		const m: Status | $.VarRef<Status> | null = this;
		if (m != null) {
			return $.pointerValue<Status>(m).Details
		}
		return null
	}

	public GetMessage(): string {
		const m: Status | $.VarRef<Status> | null = this;
		if (m != null) {
			return $.pointerValue<Status>(m).Message
		}
		return ""
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Status | $.VarRef<Status> | null = this;
		const _this$: Status = _this == null ? $.pointerTarget<Status>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Status>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 7, "string")
		s = $.appendOne(s, "&rpc.Status{")
		s = $.appendOne(s, $.concatString(($.concatString("Code: ", await fmt.Sprintf("%#v", $.basicInterfaceValue((_this$ as Status).Code, "int32")))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Message: ", await fmt.Sprintf("%#v", (_this$ as Status).Message))), ",\n"))
		if ((_this$ as Status).Details != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Details: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Status).Details, "[]*types.Any", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Any")))))), ",\n"))
		}
		if ((_this$ as Status).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Status).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Status | $.VarRef<Status> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Status).Size() : Status.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Status).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Status.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Status | $.VarRef<Status> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Status).Size() : Status.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Status).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Status.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Status | $.VarRef<Status> | null = this;
		const m$: Status = m == null ? $.pointerTarget<Status>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Status>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Status).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Status).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Status).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as Status).Details) > 0) {
			for (let __goscriptSliceWindow0 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as Status).Details) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = types.Any.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as Status).Details!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintStatus(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = 0x1a
			}
		}
		if ($.stringLen((m$ as Status).Message) > 0) {
			i = i - ($.stringLen((m$ as Status).Message))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Status).Message)
			i = encodeVarintStatus(dAtA, i, $.uint64($.stringLen((m$ as Status).Message)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as Status).Code != 0) {
			i = encodeVarintStatus(dAtA, i, $.uint64((m$ as Status).Code))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: Status | $.VarRef<Status> | null = this;
		$.assignStruct($.pointerValue<Status>(m), $.markAsStructValue(new Status()))
	}

	public Size(): number {
		const m: Status | $.VarRef<Status> | null = this;
		let n: number = 0
		const m$: Status = m == null ? $.pointerTarget<Status>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Status>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as Status).Code != 0) {
			n = n + (1 + sovStatus($.uint64((m$ as Status).Code)))
		}
		l = $.stringLen((m$ as Status).Message)
		if (l > 0) {
			n = n + ((1 + l) + sovStatus($.uint64(l)))
		}
		if ($.sliceLen((m$ as Status).Details) > 0) {
			for (let __goscriptRangeTarget2 = (m$ as Status).Details, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as types.Any | $.VarRef<types.Any> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as types.Any).Size() : types.Any.prototype.Size.call(e))
				n = n + ((1 + l) + sovStatus($.uint64(l)))
			}
		}
		if ((m$ as Status).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Status).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: Status | $.VarRef<Status> | null = this;
		const _this$: Status = _this == null ? $.pointerTarget<Status>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Status>(_this)
		if (_this == null) {
			return "nil"
		}
		let repeatedStringForDetails = "[]*Any{"
		for (let __goscriptRangeTarget3 = (_this$ as Status).Details, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as types.Any | $.VarRef<types.Any> | null)
			repeatedStringForDetails = $.concatString(repeatedStringForDetails, $.concatString(strings.Replace(await fmt.Sprintf("%v", $.interfaceValue(f, "*types.Any", /* @__PURE__ */ $.pointerType("types.Any"))), "Any", "types.Any", 1), ","))
		}
		repeatedStringForDetails = $.concatString(repeatedStringForDetails, "}")
		let s = strings.Join($.arrayToSlice<string>(["&Status{", $.concatString(($.concatString("Code:", await fmt.Sprintf("%v", $.basicInterfaceValue((_this$ as Status).Code, "int32")))), ","), $.concatString(($.concatString("Message:", await fmt.Sprintf("%v", (_this$ as Status).Message))), ","), $.concatString(($.concatString("Details:", repeatedStringForDetails)), ","), $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%v", $.interfaceValue((_this$ as Status).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Status | $.VarRef<Status> | null = this;
		const m$: Status = m == null ? $.pointerTarget<Status>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Status>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowStatus
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
				return fmt.Errorf("proto: Status: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Status: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Code", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Status).Code = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowStatus
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++;
						;(m$ as Status).Code = (m$ as Status).Code | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Message", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowStatus
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
						return ErrInvalidLengthStatus
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthStatus
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Status).Message = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Details", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowStatus
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthStatus
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthStatus
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Status).Details = $.appendOne((m$ as Status).Details, new types.Any(), $.appendZeros.nil)
					{
						let err = types.Any.prototype.Unmarshal.call($.arrayIndex((m$ as Status).Details!, $.sliceLen((m$ as Status).Details) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipStatus($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthStatus
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Status).XXX_unrecognized = $.appendSlice((m$ as Status).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Status | $.VarRef<Status> | null = this;
		await xxx_messageInfo_Status.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*rpc.Status", /* @__PURE__ */ $.pointerType("rpc.Status")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: Status | $.VarRef<Status> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Status.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*rpc.Status", /* @__PURE__ */ $.pointerType("rpc.Status")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Status).MarshalToSizedBuffer(b) : Status.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: Status | $.VarRef<Status> | null = this;
		await xxx_messageInfo_Status.value.Merge($.interfaceValue<proto.Message | null>(m, "*rpc.Status", /* @__PURE__ */ $.pointerType("rpc.Status")), src)
	}

	public XXX_MessageName(): string {
		return "google.rpc.Status"
	}

	public XXX_Size(): number {
		const m: Status | $.VarRef<Status> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Status).Size() : Status.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Status | $.VarRef<Status> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Status).Unmarshal(b) : Status.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"rpc.Status",
		() => new Status(),
		() => [$.methodSignature("Compare", [["that", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Equal", [["that", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetCode", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetDetails", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Any"))], true), $.methodSignature("GetMessage", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_MessageName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		Status,
		() => [/* @__PURE__ */ $.structField("Code", /* @__PURE__ */ $.basicType("int32"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=code,proto3\" json:\"code,omitempty\"" }), /* @__PURE__ */ $.structField("Message", /* @__PURE__ */ $.basicType("string"), [1], 8, true, { tag: "protobuf:\"bytes,2,opt,name=message,proto3\" json:\"message,omitempty\"" }), /* @__PURE__ */ $.structField("Details", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("types.Any")), [2], 24, true, { tag: "protobuf:\"bytes,3,rep,name=details,proto3\" json:\"details,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [3], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [5], 72, true, { tag: "json:\"-\"" })]
	)
}

export let xxx_messageInfo_Status: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Status(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Status.value, __goscriptValue)
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*rpc.Status", /* @__PURE__ */ $.pointerType("rpc.Status")), "google.rpc.Status")
}

async function __goscriptInit1(): globalThis.Promise<void> {
	proto.RegisterFile("google/rpc/status.proto", fileDescriptor_24d244abaf643bfe)
}

export let fileDescriptor_24d244abaf643bfe: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 18, 79, 207, 207, 79, 207, 73, 213, 47, 42, 72, 214, 47, 46, 73, 44, 41, 45, 214, 43, 40, 202, 47, 201, 23, 226, 130, 72, 232, 21, 21, 36, 75, 73, 66, 21, 129, 101, 146, 74, 211, 244, 19, 243, 42, 33, 202, 148, 210, 184, 216, 130, 193, 218, 132, 132, 184, 88, 146, 243, 83, 82, 37, 24, 21, 24, 53, 88, 131, 192, 108, 33, 9, 46, 246, 220, 212, 226, 226, 196, 244, 84, 9, 38, 5, 70, 13, 206, 32, 24, 87, 72, 143, 139, 61, 37, 181, 36, 49, 51, 167, 88, 130, 89, 129, 89, 131, 219, 72, 68, 15, 106, 33, 204, 18, 61, 199, 188, 202, 32, 152, 34, 167, 196, 11, 15, 229, 24, 110, 60, 148, 99, 248, 240, 80, 142, 241, 199, 67, 57, 198, 134, 71, 114, 140, 43, 30, 201, 49, 158, 120, 36, 199, 120, 225, 145, 28, 227, 131, 71, 114, 140, 47, 30, 201, 49, 124, 0, 137, 63, 150, 99, 60, 241, 88, 142, 145, 139, 47, 57, 63, 87, 15, 225, 17, 39, 110, 136, 91, 3, 64, 86, 4, 48, 70, 49, 23, 21, 36, 255, 96, 100, 92, 196, 196, 28, 20, 224, 156, 196, 6, 182, 217, 24, 16, 0, 0, 255, 255, 22, 205, 123, 96, 19, 1, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_24d244abaf643bfe(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_24d244abaf643bfe = __goscriptValue
}

export async function valueToGoStringStatus(v: any, typ: string): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}

export function encodeVarintStatus(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovStatus(v))
	let base = offset
	for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export async function NewPopulatedStatus(r: randyStatus | null, easy: boolean): globalThis.Promise<Status | $.VarRef<Status> | null> {
	let _this: Status | $.VarRef<Status> | null = new Status()
	let _this$: Status = _this == null ? $.pointerTarget<Status>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Status>(_this);
	;(_this$ as Status).Code = $.int((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Int31(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 32)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
		;(_this$ as Status).Code = globalThis.Math.imul((_this$ as Status).Code, -1)
	}
	;(_this$ as Status).Message = await randStringStatus(r)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		let v1 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as Status).Details = $.makeSlice<types.Any | $.VarRef<types.Any> | null>(v1)
		for (let i = 0; i < v1; i++) {
			$.sliceElems((_this$ as Status).Details!)[$.sliceSlot((_this$ as Status).Details!, i)] = await types.NewPopulatedAny((r as types.randyAny | null), easy)
		}
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as Status).XXX_unrecognized = await randUnrecognizedStatus(r, 4)
	}
	return _this
}

export async function randUTF8RuneStatus(r: randyStatus | null): globalThis.Promise<number> {
	let ru = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(62), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (ru < 10) {
		return $.int(ru + 48, 32)
	} else {
		if (ru < 36) {
			return $.int(ru + 55, 32)
		}
	}
	return $.int(ru + 61, 32)
}

export async function randStringStatus(r: randyStatus | null): globalThis.Promise<string> {
	let v2 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let tmps: $.Slice<number> = $.makeSlice<number>(v2, undefined, "number")
	for (let __goscriptSliceWindow3 = $.sliceRange(tmps), i = 0; i < v2; i++) {
		;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] = await randUTF8RuneStatus(r)
	}
	return $.runesToString(tmps)
}

export async function randUnrecognizedStatus(r: randyStatus | null, maxFieldNumber: number): globalThis.Promise<$.Slice<number>> {
	let dAtA: $.Slice<number> = null! as $.Slice<number>
	let l = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = 0; i < l; i++) {
		let wire = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(4), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (wire == 3) {
			wire = 5
		}
		let fieldNumber = maxFieldNumber + (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		dAtA = await randFieldStatus(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}

export async function randFieldStatus(dAtA: $.Slice<number>, r: randyStatus | null, fieldNumber: number, wire: number): globalThis.Promise<$.Slice<number>> {
	let key = $.uint(((($.uint(fieldNumber, 32) << 3) >>> 0)) | $.uint(wire, 32), 32)
	switch (wire) {
		case 0:
		{
			dAtA = encodeVarintPopulateStatus(dAtA, $.uint64(key))
			let v3 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Int63(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
				v3 = $.int64Mul(v3, -1n)
			}
			dAtA = encodeVarintPopulateStatus(dAtA, $.uint64(v3))
			break
		}
		case 1:
		{
			dAtA = encodeVarintPopulateStatus(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
		case 2:
		{
			dAtA = encodeVarintPopulateStatus(dAtA, $.uint64(key))
			let ll = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			dAtA = encodeVarintPopulateStatus(dAtA, $.uint64(ll))
			for (let j = 0; j < ll; j++) {
				dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			}
			break
		}
		default:
		{
			dAtA = encodeVarintPopulateStatus(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyStatus, null>) : $.pointerValue<Exclude<randyStatus, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
	}
	return dAtA
}

export function encodeVarintPopulateStatus(dAtA: $.Slice<number>, v: bigint): $.Slice<number> {
	while (v >= 128n) {
		dAtA = $.append(dAtA, $.uint($.uint($.uint64Or(($.uint64And($.uint64(v), 127n)), 128n), 8), 8), $.byteSliceHint)
		v = $.uint64Shr(v, 7n)
	}
	dAtA = $.append(dAtA, $.uint($.uint(v, 8), 8), $.byteSliceHint)
	return dAtA
}

export function sovStatus(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozStatus(x: bigint): number {
	let n: number = 0
	return sovStatus($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export async function valueToStringStatus(v: any): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("*%v", pv)
}

export function skipStatus(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow4 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowStatus]
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
						return [0, ErrIntOverflowStatus]
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
						return [0, ErrIntOverflowStatus]
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
					return [0, ErrInvalidLengthStatus]
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
					return [0, ErrUnexpectedEndOfGroupStatus]
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
			return [0, ErrInvalidLengthStatus]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthStatus: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthStatus(__goscriptValue: $.GoError): void {
	ErrInvalidLengthStatus = __goscriptValue
}

export let ErrIntOverflowStatus: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowStatus(__goscriptValue: $.GoError): void {
	ErrIntOverflowStatus = __goscriptValue
}

export let ErrUnexpectedEndOfGroupStatus: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupStatus(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupStatus = __goscriptValue
}

var __goscriptAwait: any

export { __goscriptInit0 }

export { __goscriptInit1 }
