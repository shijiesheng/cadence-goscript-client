// Generated file based on error_details.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as github_com_gogo_protobuf_sortkeys from "@goscript/github.com/gogo/protobuf/sortkeys/index.js"

import * as types from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/github.com/gogo/protobuf/sortkeys/index.js"
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"

$.registerTypePackagePath("github.com/gogo/googleapis/google/rpc", ["rpc.RetryInfo", "rpc.DebugInfo", "rpc.QuotaFailure", "rpc.QuotaFailure_Violation", "rpc.ErrorInfo", "rpc.PreconditionFailure", "rpc.PreconditionFailure_Violation", "rpc.BadRequest", "rpc.BadRequest_FieldViolation", "rpc.RequestInfo", "rpc.ResourceInfo", "rpc.Help", "rpc.Help_Link", "rpc.LocalizedMessage", "rpc.randyErrorDetails"])

export type randyErrorDetails = {
	Float32(): number
	Float64(): number
	Int31(): number
	Int63(): bigint
	Intn(n: number): number
	Uint32(): number
}

$.registerInterfaceType(
	"rpc.randyErrorDetails",
	null,
	[{ name: "Float32", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float32") }] }, { name: "Float64", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }] }, { name: "Int31", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }] }, { name: "Int63", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }] }, { name: "Intn", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }] }, { name: "Uint32", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("uint32") }] }]
);

export class RetryInfo {
	// Clients should wait at least this long between retrying the same request.
	public get RetryDelay(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.RetryDelay
	}

	public set RetryDelay(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.RetryDelay = value
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
		RetryDelay: types.Duration | $.VarRef<types.Duration> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{RetryDelay?: types.Duration | $.VarRef<types.Duration> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			RetryDelay: init?.RetryDelay ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RetryInfo {
		return new RetryInfo(this, true)
	}

	public __goscriptAssign(source: RetryInfo): void {
		const target = this._fields
		const values = source._fields
		target.RetryDelay = values.RetryDelay
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: RetryInfo | $.VarRef<RetryInfo> | null = this;
		const _this$: RetryInfo = _this == null ? $.pointerTarget<RetryInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<RetryInfo>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple0: any = $.typeAssertTuple<RetryInfo | $.VarRef<RetryInfo> | null>(that, /* @__PURE__ */ $.pointerType("rpc.RetryInfo"))
		let that1: RetryInfo | $.VarRef<RetryInfo> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			let __goscriptTuple1: any = $.typeAssertTuple<RetryInfo>(that, "rpc.RetryInfo")
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
		{
			let c = types.Duration.prototype.Compare.call((_this$ as RetryInfo).RetryDelay, $.interfaceValue($.pointerValue<RetryInfo>(that1).RetryDelay, "*types.Duration", /* @__PURE__ */ $.pointerType("types.Duration")))
			if (c != 0) {
				return c
			}
		}
		{
			let c = bytes.Compare((_this$ as RetryInfo).XXX_unrecognized, $.pointerValue<RetryInfo>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_851816e4d6b6361a, $.arrayToSlice<number>([0])]
	}

	public Equal(that: any): boolean {
		const _this: RetryInfo | $.VarRef<RetryInfo> | null = this;
		const _this$: RetryInfo = _this == null ? $.pointerTarget<RetryInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<RetryInfo>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple2: any = $.typeAssertTuple<RetryInfo | $.VarRef<RetryInfo> | null>(that, /* @__PURE__ */ $.pointerType("rpc.RetryInfo"))
		let that1: RetryInfo | $.VarRef<RetryInfo> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			let __goscriptTuple3: any = $.typeAssertTuple<RetryInfo>(that, "rpc.RetryInfo")
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
		if (!types.Duration.prototype.Equal.call((_this$ as RetryInfo).RetryDelay, $.interfaceValue($.pointerValue<RetryInfo>(that1).RetryDelay, "*types.Duration", /* @__PURE__ */ $.pointerType("types.Duration")))) {
			return false
		}
		if (!bytes.Equal((_this$ as RetryInfo).XXX_unrecognized, $.pointerValue<RetryInfo>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetRetryDelay(): types.Duration | $.VarRef<types.Duration> | null {
		const m: RetryInfo | $.VarRef<RetryInfo> | null = this;
		if (m != null) {
			return $.pointerValue<RetryInfo>(m).RetryDelay
		}
		return null
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: RetryInfo | $.VarRef<RetryInfo> | null = this;
		const _this$: RetryInfo = _this == null ? $.pointerTarget<RetryInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<RetryInfo>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&rpc.RetryInfo{")
		if ((_this$ as RetryInfo).RetryDelay != null) {
			s = $.appendOne(s, $.concatString(($.concatString("RetryDelay: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as RetryInfo).RetryDelay, "*types.Duration", /* @__PURE__ */ $.pointerType("types.Duration"))))), ",\n"))
		}
		if ((_this$ as RetryInfo).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as RetryInfo).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RetryInfo | $.VarRef<RetryInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RetryInfo).Size() : RetryInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RetryInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RetryInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RetryInfo | $.VarRef<RetryInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RetryInfo).Size() : RetryInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RetryInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RetryInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RetryInfo | $.VarRef<RetryInfo> | null = this;
		const m$: RetryInfo = m == null ? $.pointerTarget<RetryInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RetryInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RetryInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RetryInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RetryInfo).XXX_unrecognized)
		}
		if ((m$ as RetryInfo).RetryDelay != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as RetryInfo).RetryDelay, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintErrorDetails(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RetryInfo | $.VarRef<RetryInfo> | null = this;
		$.assignStruct($.pointerValue<RetryInfo>(m), $.markAsStructValue(new RetryInfo()))
	}

	public Size(): number {
		const m: RetryInfo | $.VarRef<RetryInfo> | null = this;
		let n: number = 0
		const m$: RetryInfo = m == null ? $.pointerTarget<RetryInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RetryInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as RetryInfo).RetryDelay != null) {
			l = types.Duration.prototype.Size.call((m$ as RetryInfo).RetryDelay)
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		if ((m$ as RetryInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RetryInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: RetryInfo | $.VarRef<RetryInfo> | null = this;
		const _this$: RetryInfo = _this == null ? $.pointerTarget<RetryInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<RetryInfo>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&RetryInfo{", $.concatString(($.concatString("RetryDelay:", strings.Replace(fmt.Sprintf("%v", $.interfaceValue((_this$ as RetryInfo).RetryDelay, "*types.Duration", /* @__PURE__ */ $.pointerType("types.Duration"))), "Duration", "types.Duration", 1))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as RetryInfo).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RetryInfo | $.VarRef<RetryInfo> | null = this;
		const m$: RetryInfo = m == null ? $.pointerTarget<RetryInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RetryInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowErrorDetails
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
				return fmt.Errorf("proto: RetryInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RetryInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RetryDelay", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RetryInfo).RetryDelay == null) {
						;(m$ as RetryInfo).RetryDelay = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as RetryInfo).RetryDelay, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipErrorDetails($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthErrorDetails
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RetryInfo).XXX_unrecognized = $.appendSlice((m$ as RetryInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RetryInfo | $.VarRef<RetryInfo> | null = this;
		xxx_messageInfo_RetryInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*rpc.RetryInfo", /* @__PURE__ */ $.pointerType("rpc.RetryInfo")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RetryInfo | $.VarRef<RetryInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RetryInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*rpc.RetryInfo", /* @__PURE__ */ $.pointerType("rpc.RetryInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RetryInfo).MarshalToSizedBuffer(b) : RetryInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RetryInfo | $.VarRef<RetryInfo> | null = this;
		xxx_messageInfo_RetryInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*rpc.RetryInfo", /* @__PURE__ */ $.pointerType("rpc.RetryInfo")), src)
	}

	public XXX_MessageName(): string {
		return "google.rpc.RetryInfo"
	}

	public XXX_Size(): number {
		const m: RetryInfo | $.VarRef<RetryInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RetryInfo).Size() : RetryInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RetryInfo | $.VarRef<RetryInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RetryInfo).Unmarshal(b) : RetryInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"rpc.RetryInfo",
		() => new RetryInfo(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetRetryDelay", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RetryInfo,
		() => [{ name: "RetryDelay", key: "RetryDelay", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,1,opt,name=retry_delay,json=retryDelay,proto3\" json:\"retry_delay,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class DebugInfo {
	// The stack trace entries indicating where the error occurred.
	public get StackEntries(): $.Slice<string> {
		return this._fields.StackEntries
	}

	public set StackEntries(value: $.Slice<string>) {
		this._fields.StackEntries = value
	}

	// Additional debugging information provided by the server.
	public get Detail(): string {
		return this._fields.Detail
	}

	public set Detail(value: string) {
		this._fields.Detail = value
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
		StackEntries: $.Slice<string>
		Detail: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{StackEntries?: $.Slice<string>, Detail?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			StackEntries: init?.StackEntries ?? (null! as $.Slice<string>),
			Detail: init?.Detail ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DebugInfo {
		return new DebugInfo(this, true)
	}

	public __goscriptAssign(source: DebugInfo): void {
		const target = this._fields
		const values = source._fields
		target.StackEntries = values.StackEntries
		target.Detail = values.Detail
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: DebugInfo | $.VarRef<DebugInfo> | null = this;
		const _this$: DebugInfo = _this == null ? $.pointerTarget<DebugInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<DebugInfo>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple5: any = $.typeAssertTuple<DebugInfo | $.VarRef<DebugInfo> | null>(that, /* @__PURE__ */ $.pointerType("rpc.DebugInfo"))
		let that1: DebugInfo | $.VarRef<DebugInfo> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		if (!ok) {
			let __goscriptTuple6: any = $.typeAssertTuple<DebugInfo>(that, "rpc.DebugInfo")
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
		if ($.sliceLen((_this$ as DebugInfo).StackEntries) != $.sliceLen($.pointerValue<DebugInfo>(that1).StackEntries)) {
			if ($.sliceLen((_this$ as DebugInfo).StackEntries) < $.sliceLen($.pointerValue<DebugInfo>(that1).StackEntries)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget0 = (_this$ as DebugInfo).StackEntries, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			if (!$.stringEqual($.arrayIndex((_this$ as DebugInfo).StackEntries!, i), $.arrayIndex($.pointerValue<DebugInfo>(that1).StackEntries!, i))) {
				if ($.stringCompare($.arrayIndex((_this$ as DebugInfo).StackEntries!, i), $.arrayIndex($.pointerValue<DebugInfo>(that1).StackEntries!, i)) < 0) {
					return -1
				}
				return 1
			}
		}
		if (!$.stringEqual((_this$ as DebugInfo).Detail, $.pointerValue<DebugInfo>(that1).Detail)) {
			if ($.stringCompare((_this$ as DebugInfo).Detail, $.pointerValue<DebugInfo>(that1).Detail) < 0) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as DebugInfo).XXX_unrecognized, $.pointerValue<DebugInfo>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_851816e4d6b6361a, $.arrayToSlice<number>([1])]
	}

	public Equal(that: any): boolean {
		const _this: DebugInfo | $.VarRef<DebugInfo> | null = this;
		const _this$: DebugInfo = _this == null ? $.pointerTarget<DebugInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<DebugInfo>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple7: any = $.typeAssertTuple<DebugInfo | $.VarRef<DebugInfo> | null>(that, /* @__PURE__ */ $.pointerType("rpc.DebugInfo"))
		let that1: DebugInfo | $.VarRef<DebugInfo> | null = __goscriptTuple7[0]
		let ok = __goscriptTuple7[1]
		if (!ok) {
			let __goscriptTuple8: any = $.typeAssertTuple<DebugInfo>(that, "rpc.DebugInfo")
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
		if ($.sliceLen((_this$ as DebugInfo).StackEntries) != $.sliceLen($.pointerValue<DebugInfo>(that1).StackEntries)) {
			return false
		}
		for (let __goscriptRangeTarget1 = (_this$ as DebugInfo).StackEntries, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
			if (!$.stringEqual($.arrayIndex((_this$ as DebugInfo).StackEntries!, i), $.arrayIndex($.pointerValue<DebugInfo>(that1).StackEntries!, i))) {
				return false
			}
		}
		if (!$.stringEqual((_this$ as DebugInfo).Detail, $.pointerValue<DebugInfo>(that1).Detail)) {
			return false
		}
		if (!bytes.Equal((_this$ as DebugInfo).XXX_unrecognized, $.pointerValue<DebugInfo>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetDetail(): string {
		const m: DebugInfo | $.VarRef<DebugInfo> | null = this;
		if (m != null) {
			return $.pointerValue<DebugInfo>(m).Detail
		}
		return ""
	}

	public GetStackEntries(): $.Slice<string> {
		const m: DebugInfo | $.VarRef<DebugInfo> | null = this;
		if (m != null) {
			return $.pointerValue<DebugInfo>(m).StackEntries
		}
		return null
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: DebugInfo | $.VarRef<DebugInfo> | null = this;
		const _this$: DebugInfo = _this == null ? $.pointerTarget<DebugInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<DebugInfo>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 6, "string")
		s = $.appendOne(s, "&rpc.DebugInfo{")
		s = $.appendOne(s, $.concatString(($.concatString("StackEntries: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as DebugInfo).StackEntries, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Detail: ", await fmt.Sprintf("%#v", (_this$ as DebugInfo).Detail))), ",\n"))
		if ((_this$ as DebugInfo).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as DebugInfo).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DebugInfo | $.VarRef<DebugInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DebugInfo).Size() : DebugInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple9: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DebugInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DebugInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DebugInfo | $.VarRef<DebugInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DebugInfo).Size() : DebugInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DebugInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DebugInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DebugInfo | $.VarRef<DebugInfo> | null = this;
		const m$: DebugInfo = m == null ? $.pointerTarget<DebugInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DebugInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DebugInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DebugInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DebugInfo).XXX_unrecognized)
		}
		if ($.stringLen((m$ as DebugInfo).Detail) > 0) {
			i = i - ($.stringLen((m$ as DebugInfo).Detail))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DebugInfo).Detail)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as DebugInfo).Detail)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.sliceLen((m$ as DebugInfo).StackEntries) > 0) {
			for (let __goscriptSliceWindow1 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as DebugInfo).StackEntries) - 1; iNdEx >= 0; iNdEx--) {
				i = i - ($.stringLen($.arrayIndex((m$ as DebugInfo).StackEntries!, iNdEx)))
				$.copy($.goSlice(dAtA, i, undefined), $.arrayIndex((m$ as DebugInfo).StackEntries!, iNdEx))
				i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen($.arrayIndex((m$ as DebugInfo).StackEntries!, iNdEx))))
				i--;
				;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DebugInfo | $.VarRef<DebugInfo> | null = this;
		$.assignStruct($.pointerValue<DebugInfo>(m), $.markAsStructValue(new DebugInfo()))
	}

	public Size(): number {
		const m: DebugInfo | $.VarRef<DebugInfo> | null = this;
		let n: number = 0
		const m$: DebugInfo = m == null ? $.pointerTarget<DebugInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DebugInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as DebugInfo).StackEntries) > 0) {
			for (let __goscriptRangeTarget2 = (m$ as DebugInfo).StackEntries, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let s = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
				l = $.stringLen(s)
				n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
			}
		}
		l = $.stringLen((m$ as DebugInfo).Detail)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		if ((m$ as DebugInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DebugInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: DebugInfo | $.VarRef<DebugInfo> | null = this;
		const _this$: DebugInfo = _this == null ? $.pointerTarget<DebugInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<DebugInfo>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&DebugInfo{", $.concatString(($.concatString("StackEntries:", fmt.Sprintf("%v", $.interfaceValue((_this$ as DebugInfo).StackEntries, "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))))), ","), $.concatString(($.concatString("Detail:", fmt.Sprintf("%v", (_this$ as DebugInfo).Detail))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as DebugInfo).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DebugInfo | $.VarRef<DebugInfo> | null = this;
		const m$: DebugInfo = m == null ? $.pointerTarget<DebugInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DebugInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowErrorDetails
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
				return fmt.Errorf("proto: DebugInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DebugInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StackEntries", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DebugInfo).StackEntries = $.appendOne((m$ as DebugInfo).StackEntries, $.bytesToString($.goSlice(dAtA, iNdEx, postIndex)))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Detail", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DebugInfo).Detail = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipErrorDetails($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthErrorDetails
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DebugInfo).XXX_unrecognized = $.appendSlice((m$ as DebugInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: DebugInfo | $.VarRef<DebugInfo> | null = this;
		xxx_messageInfo_DebugInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*rpc.DebugInfo", /* @__PURE__ */ $.pointerType("rpc.DebugInfo")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: DebugInfo | $.VarRef<DebugInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DebugInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*rpc.DebugInfo", /* @__PURE__ */ $.pointerType("rpc.DebugInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DebugInfo).MarshalToSizedBuffer(b) : DebugInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: DebugInfo | $.VarRef<DebugInfo> | null = this;
		xxx_messageInfo_DebugInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*rpc.DebugInfo", /* @__PURE__ */ $.pointerType("rpc.DebugInfo")), src)
	}

	public XXX_MessageName(): string {
		return "google.rpc.DebugInfo"
	}

	public XXX_Size(): number {
		const m: DebugInfo | $.VarRef<DebugInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DebugInfo).Size() : DebugInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DebugInfo | $.VarRef<DebugInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DebugInfo).Unmarshal(b) : DebugInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"rpc.DebugInfo",
		() => new DebugInfo(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetDetail", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetStackEntries", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		DebugInfo,
		() => [{ name: "StackEntries", key: "StackEntries", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,1,rep,name=stack_entries,json=stackEntries,proto3\" json:\"stack_entries,omitempty\"" }, { name: "Detail", key: "Detail", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=detail,proto3\" json:\"detail,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class QuotaFailure {
	// Describes all quota violations.
	public get Violations(): $.Slice<QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null> {
		return this._fields.Violations
	}

	public set Violations(value: $.Slice<QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null>) {
		this._fields.Violations = value
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
		Violations: $.Slice<QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Violations?: $.Slice<QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Violations: init?.Violations ?? (null! as $.Slice<QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): QuotaFailure {
		return new QuotaFailure(this, true)
	}

	public __goscriptAssign(source: QuotaFailure): void {
		const target = this._fields
		const values = source._fields
		target.Violations = values.Violations
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: QuotaFailure | $.VarRef<QuotaFailure> | null = this;
		const _this$: QuotaFailure = _this == null ? $.pointerTarget<QuotaFailure>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<QuotaFailure>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple10: any = $.typeAssertTuple<QuotaFailure | $.VarRef<QuotaFailure> | null>(that, /* @__PURE__ */ $.pointerType("rpc.QuotaFailure"))
		let that1: QuotaFailure | $.VarRef<QuotaFailure> | null = __goscriptTuple10[0]
		let ok = __goscriptTuple10[1]
		if (!ok) {
			let __goscriptTuple11: any = $.typeAssertTuple<QuotaFailure>(that, "rpc.QuotaFailure")
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
		if ($.sliceLen((_this$ as QuotaFailure).Violations) != $.sliceLen($.pointerValue<QuotaFailure>(that1).Violations)) {
			if ($.sliceLen((_this$ as QuotaFailure).Violations) < $.sliceLen($.pointerValue<QuotaFailure>(that1).Violations)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget3 = (_this$ as QuotaFailure).Violations, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), i = 0; i < __goscriptRangeWindow3.length; i++) {
			{
				let c = QuotaFailure_Violation.prototype.Compare.call($.arrayIndex((_this$ as QuotaFailure).Violations!, i), $.interfaceValue($.arrayIndex($.pointerValue<QuotaFailure>(that1).Violations!, i), "*rpc.QuotaFailure_Violation", /* @__PURE__ */ $.pointerType("rpc.QuotaFailure_Violation")))
				if (c != 0) {
					return c
				}
			}
		}
		{
			let c = bytes.Compare((_this$ as QuotaFailure).XXX_unrecognized, $.pointerValue<QuotaFailure>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_851816e4d6b6361a, $.arrayToSlice<number>([2])]
	}

	public Equal(that: any): boolean {
		const _this: QuotaFailure | $.VarRef<QuotaFailure> | null = this;
		const _this$: QuotaFailure = _this == null ? $.pointerTarget<QuotaFailure>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<QuotaFailure>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple12: any = $.typeAssertTuple<QuotaFailure | $.VarRef<QuotaFailure> | null>(that, /* @__PURE__ */ $.pointerType("rpc.QuotaFailure"))
		let that1: QuotaFailure | $.VarRef<QuotaFailure> | null = __goscriptTuple12[0]
		let ok = __goscriptTuple12[1]
		if (!ok) {
			let __goscriptTuple13: any = $.typeAssertTuple<QuotaFailure>(that, "rpc.QuotaFailure")
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
		if ($.sliceLen((_this$ as QuotaFailure).Violations) != $.sliceLen($.pointerValue<QuotaFailure>(that1).Violations)) {
			return false
		}
		for (let __goscriptRangeTarget4 = (_this$ as QuotaFailure).Violations, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), i = 0; i < __goscriptRangeWindow4.length; i++) {
			if (!QuotaFailure_Violation.prototype.Equal.call($.arrayIndex((_this$ as QuotaFailure).Violations!, i), $.interfaceValue($.arrayIndex($.pointerValue<QuotaFailure>(that1).Violations!, i), "*rpc.QuotaFailure_Violation", /* @__PURE__ */ $.pointerType("rpc.QuotaFailure_Violation")))) {
				return false
			}
		}
		if (!bytes.Equal((_this$ as QuotaFailure).XXX_unrecognized, $.pointerValue<QuotaFailure>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetViolations(): $.Slice<QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null> {
		const m: QuotaFailure | $.VarRef<QuotaFailure> | null = this;
		if (m != null) {
			return $.pointerValue<QuotaFailure>(m).Violations
		}
		return null
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: QuotaFailure | $.VarRef<QuotaFailure> | null = this;
		const _this$: QuotaFailure = _this == null ? $.pointerTarget<QuotaFailure>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<QuotaFailure>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&rpc.QuotaFailure{")
		if ((_this$ as QuotaFailure).Violations != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Violations: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as QuotaFailure).Violations, "[]*rpc.QuotaFailure_Violation", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("rpc.QuotaFailure_Violation")))))), ",\n"))
		}
		if ((_this$ as QuotaFailure).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as QuotaFailure).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: QuotaFailure | $.VarRef<QuotaFailure> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QuotaFailure).Size() : QuotaFailure.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple14: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QuotaFailure).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : QuotaFailure.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: QuotaFailure | $.VarRef<QuotaFailure> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QuotaFailure).Size() : QuotaFailure.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QuotaFailure).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : QuotaFailure.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: QuotaFailure | $.VarRef<QuotaFailure> | null = this;
		const m$: QuotaFailure = m == null ? $.pointerTarget<QuotaFailure>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QuotaFailure>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as QuotaFailure).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as QuotaFailure).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as QuotaFailure).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as QuotaFailure).Violations) > 0) {
			for (let __goscriptSliceWindow3 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as QuotaFailure).Violations) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = QuotaFailure_Violation.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as QuotaFailure).Violations!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintErrorDetails(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: QuotaFailure | $.VarRef<QuotaFailure> | null = this;
		$.assignStruct($.pointerValue<QuotaFailure>(m), $.markAsStructValue(new QuotaFailure()))
	}

	public Size(): number {
		const m: QuotaFailure | $.VarRef<QuotaFailure> | null = this;
		let n: number = 0
		const m$: QuotaFailure = m == null ? $.pointerTarget<QuotaFailure>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QuotaFailure>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as QuotaFailure).Violations) > 0) {
			for (let __goscriptRangeTarget5 = (m$ as QuotaFailure).Violations, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as QuotaFailure_Violation).Size() : QuotaFailure_Violation.prototype.Size.call(e))
				n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
			}
		}
		if ((m$ as QuotaFailure).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as QuotaFailure).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: QuotaFailure | $.VarRef<QuotaFailure> | null = this;
		const _this$: QuotaFailure = _this == null ? $.pointerTarget<QuotaFailure>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<QuotaFailure>(_this)
		if (_this == null) {
			return "nil"
		}
		let repeatedStringForViolations = "[]*QuotaFailure_Violation{"
		for (let __goscriptRangeTarget6 = (_this$ as QuotaFailure).Violations, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow6.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow6.backing[__goscriptRangeWindow6.offset + __rangeIndex] as QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null)
			repeatedStringForViolations = $.concatString(repeatedStringForViolations, $.concatString(strings.Replace(fmt.Sprintf("%v", $.interfaceValue(f, "*rpc.QuotaFailure_Violation", /* @__PURE__ */ $.pointerType("rpc.QuotaFailure_Violation"))), "QuotaFailure_Violation", "QuotaFailure_Violation", 1), ","))
		}
		repeatedStringForViolations = $.concatString(repeatedStringForViolations, "}")
		let s = strings.Join($.arrayToSlice<string>(["&QuotaFailure{", $.concatString(($.concatString("Violations:", repeatedStringForViolations)), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as QuotaFailure).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: QuotaFailure | $.VarRef<QuotaFailure> | null = this;
		const m$: QuotaFailure = m == null ? $.pointerTarget<QuotaFailure>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QuotaFailure>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow4 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowErrorDetails
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
				return fmt.Errorf("proto: QuotaFailure: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: QuotaFailure: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Violations", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as QuotaFailure).Violations = $.appendOne((m$ as QuotaFailure).Violations, new QuotaFailure_Violation(), $.appendZeros.nil)
					{
						let err = QuotaFailure_Violation.prototype.Unmarshal.call($.arrayIndex((m$ as QuotaFailure).Violations!, $.sliceLen((m$ as QuotaFailure).Violations) - 1), $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipErrorDetails($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthErrorDetails
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as QuotaFailure).XXX_unrecognized = $.appendSlice((m$ as QuotaFailure).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: QuotaFailure | $.VarRef<QuotaFailure> | null = this;
		xxx_messageInfo_QuotaFailure.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*rpc.QuotaFailure", /* @__PURE__ */ $.pointerType("rpc.QuotaFailure")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: QuotaFailure | $.VarRef<QuotaFailure> | null = this;
		if (deterministic) {
			return xxx_messageInfo_QuotaFailure.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*rpc.QuotaFailure", /* @__PURE__ */ $.pointerType("rpc.QuotaFailure")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QuotaFailure).MarshalToSizedBuffer(b) : QuotaFailure.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: QuotaFailure | $.VarRef<QuotaFailure> | null = this;
		xxx_messageInfo_QuotaFailure.value.Merge($.interfaceValue<proto.Message | null>(m, "*rpc.QuotaFailure", /* @__PURE__ */ $.pointerType("rpc.QuotaFailure")), src)
	}

	public XXX_MessageName(): string {
		return "google.rpc.QuotaFailure"
	}

	public XXX_Size(): number {
		const m: QuotaFailure | $.VarRef<QuotaFailure> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QuotaFailure).Size() : QuotaFailure.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: QuotaFailure | $.VarRef<QuotaFailure> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QuotaFailure).Unmarshal(b) : QuotaFailure.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"rpc.QuotaFailure",
		() => new QuotaFailure(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetViolations", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("rpc.QuotaFailure_Violation")) }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		QuotaFailure,
		() => [{ name: "Violations", key: "Violations", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("rpc.QuotaFailure_Violation")), tag: "protobuf:\"bytes,1,rep,name=violations,proto3\" json:\"violations,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class QuotaFailure_Violation {
	// The subject on which the quota check failed.
	// For example, "clientip:<ip address of client>" or "project:<Google
	// developer project id>".
	public get Subject(): string {
		return this._fields.Subject
	}

	public set Subject(value: string) {
		this._fields.Subject = value
	}

	// A description of how the quota check failed. Clients can use this
	// description to find more about the quota configuration in the service's
	// public documentation, or find the relevant quota limit to adjust through
	// developer console.
	//
	// For example: "Service disabled" or "Daily Limit for read operations
	// exceeded".
	public get Description(): string {
		return this._fields.Description
	}

	public set Description(value: string) {
		this._fields.Description = value
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
		Subject: string
		Description: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Subject?: string, Description?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Subject: init?.Subject ?? ("" as string),
			Description: init?.Description ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): QuotaFailure_Violation {
		return new QuotaFailure_Violation(this, true)
	}

	public __goscriptAssign(source: QuotaFailure_Violation): void {
		const target = this._fields
		const values = source._fields
		target.Subject = values.Subject
		target.Description = values.Description
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = this;
		const _this$: QuotaFailure_Violation = _this == null ? $.pointerTarget<QuotaFailure_Violation>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<QuotaFailure_Violation>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple15: any = $.typeAssertTuple<QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null>(that, /* @__PURE__ */ $.pointerType("rpc.QuotaFailure_Violation"))
		let that1: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = __goscriptTuple15[0]
		let ok = __goscriptTuple15[1]
		if (!ok) {
			let __goscriptTuple16: any = $.typeAssertTuple<QuotaFailure_Violation>(that, "rpc.QuotaFailure_Violation")
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
		if (!$.stringEqual((_this$ as QuotaFailure_Violation).Subject, $.pointerValue<QuotaFailure_Violation>(that1).Subject)) {
			if ($.stringCompare((_this$ as QuotaFailure_Violation).Subject, $.pointerValue<QuotaFailure_Violation>(that1).Subject) < 0) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as QuotaFailure_Violation).Description, $.pointerValue<QuotaFailure_Violation>(that1).Description)) {
			if ($.stringCompare((_this$ as QuotaFailure_Violation).Description, $.pointerValue<QuotaFailure_Violation>(that1).Description) < 0) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as QuotaFailure_Violation).XXX_unrecognized, $.pointerValue<QuotaFailure_Violation>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_851816e4d6b6361a, $.arrayToSlice<number>([2, 0])]
	}

	public Equal(that: any): boolean {
		const _this: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = this;
		const _this$: QuotaFailure_Violation = _this == null ? $.pointerTarget<QuotaFailure_Violation>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<QuotaFailure_Violation>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple17: any = $.typeAssertTuple<QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null>(that, /* @__PURE__ */ $.pointerType("rpc.QuotaFailure_Violation"))
		let that1: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = __goscriptTuple17[0]
		let ok = __goscriptTuple17[1]
		if (!ok) {
			let __goscriptTuple18: any = $.typeAssertTuple<QuotaFailure_Violation>(that, "rpc.QuotaFailure_Violation")
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
		if (!$.stringEqual((_this$ as QuotaFailure_Violation).Subject, $.pointerValue<QuotaFailure_Violation>(that1).Subject)) {
			return false
		}
		if (!$.stringEqual((_this$ as QuotaFailure_Violation).Description, $.pointerValue<QuotaFailure_Violation>(that1).Description)) {
			return false
		}
		if (!bytes.Equal((_this$ as QuotaFailure_Violation).XXX_unrecognized, $.pointerValue<QuotaFailure_Violation>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetDescription(): string {
		const m: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = this;
		if (m != null) {
			return $.pointerValue<QuotaFailure_Violation>(m).Description
		}
		return ""
	}

	public GetSubject(): string {
		const m: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = this;
		if (m != null) {
			return $.pointerValue<QuotaFailure_Violation>(m).Subject
		}
		return ""
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = this;
		const _this$: QuotaFailure_Violation = _this == null ? $.pointerTarget<QuotaFailure_Violation>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<QuotaFailure_Violation>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 6, "string")
		s = $.appendOne(s, "&rpc.QuotaFailure_Violation{")
		s = $.appendOne(s, $.concatString(($.concatString("Subject: ", await fmt.Sprintf("%#v", (_this$ as QuotaFailure_Violation).Subject))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Description: ", await fmt.Sprintf("%#v", (_this$ as QuotaFailure_Violation).Description))), ",\n"))
		if ((_this$ as QuotaFailure_Violation).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as QuotaFailure_Violation).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QuotaFailure_Violation).Size() : QuotaFailure_Violation.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple19: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QuotaFailure_Violation).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : QuotaFailure_Violation.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple19[0]
		err = __goscriptTuple19[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QuotaFailure_Violation).Size() : QuotaFailure_Violation.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QuotaFailure_Violation).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : QuotaFailure_Violation.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = this;
		const m$: QuotaFailure_Violation = m == null ? $.pointerTarget<QuotaFailure_Violation>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QuotaFailure_Violation>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as QuotaFailure_Violation).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as QuotaFailure_Violation).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as QuotaFailure_Violation).XXX_unrecognized)
		}
		if ($.stringLen((m$ as QuotaFailure_Violation).Description) > 0) {
			i = i - ($.stringLen((m$ as QuotaFailure_Violation).Description))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as QuotaFailure_Violation).Description)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as QuotaFailure_Violation).Description)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as QuotaFailure_Violation).Subject) > 0) {
			i = i - ($.stringLen((m$ as QuotaFailure_Violation).Subject))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as QuotaFailure_Violation).Subject)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as QuotaFailure_Violation).Subject)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = this;
		$.assignStruct($.pointerValue<QuotaFailure_Violation>(m), $.markAsStructValue(new QuotaFailure_Violation()))
	}

	public Size(): number {
		const m: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = this;
		let n: number = 0
		const m$: QuotaFailure_Violation = m == null ? $.pointerTarget<QuotaFailure_Violation>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QuotaFailure_Violation>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as QuotaFailure_Violation).Subject)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		l = $.stringLen((m$ as QuotaFailure_Violation).Description)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		if ((m$ as QuotaFailure_Violation).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as QuotaFailure_Violation).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = this;
		const _this$: QuotaFailure_Violation = _this == null ? $.pointerTarget<QuotaFailure_Violation>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<QuotaFailure_Violation>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&QuotaFailure_Violation{", $.concatString(($.concatString("Subject:", fmt.Sprintf("%v", (_this$ as QuotaFailure_Violation).Subject))), ","), $.concatString(($.concatString("Description:", fmt.Sprintf("%v", (_this$ as QuotaFailure_Violation).Description))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as QuotaFailure_Violation).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = this;
		const m$: QuotaFailure_Violation = m == null ? $.pointerTarget<QuotaFailure_Violation>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QuotaFailure_Violation>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow5 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowErrorDetails
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
				return fmt.Errorf("proto: Violation: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Violation: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Subject", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as QuotaFailure_Violation).Subject = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Description", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as QuotaFailure_Violation).Description = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipErrorDetails($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthErrorDetails
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as QuotaFailure_Violation).XXX_unrecognized = $.appendSlice((m$ as QuotaFailure_Violation).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = this;
		xxx_messageInfo_QuotaFailure_Violation.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*rpc.QuotaFailure_Violation", /* @__PURE__ */ $.pointerType("rpc.QuotaFailure_Violation")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = this;
		if (deterministic) {
			return xxx_messageInfo_QuotaFailure_Violation.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*rpc.QuotaFailure_Violation", /* @__PURE__ */ $.pointerType("rpc.QuotaFailure_Violation")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QuotaFailure_Violation).MarshalToSizedBuffer(b) : QuotaFailure_Violation.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = this;
		xxx_messageInfo_QuotaFailure_Violation.value.Merge($.interfaceValue<proto.Message | null>(m, "*rpc.QuotaFailure_Violation", /* @__PURE__ */ $.pointerType("rpc.QuotaFailure_Violation")), src)
	}

	public XXX_MessageName(): string {
		return "google.rpc.QuotaFailure.Violation"
	}

	public XXX_Size(): number {
		const m: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QuotaFailure_Violation).Size() : QuotaFailure_Violation.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QuotaFailure_Violation).Unmarshal(b) : QuotaFailure_Violation.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"rpc.QuotaFailure_Violation",
		() => new QuotaFailure_Violation(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetDescription", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetSubject", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		QuotaFailure_Violation,
		() => [{ name: "Subject", key: "Subject", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=subject,proto3\" json:\"subject,omitempty\"" }, { name: "Description", key: "Description", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=description,proto3\" json:\"description,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ErrorInfo {
	// The reason of the error. This is a constant value that identifies the
	// proximate cause of the error. Error reasons are unique within a particular
	// domain of errors. This should be at most 63 characters and match
	// /[A-Z0-9_]+/.
	public get Reason(): string {
		return this._fields.Reason
	}

	public set Reason(value: string) {
		this._fields.Reason = value
	}

	// The logical grouping to which the "reason" belongs. The error domain
	// is typically the registered service name of the tool or product that
	// generates the error. Example: "pubsub.googleapis.com". If the error is
	// generated by some common infrastructure, the error domain must be a
	// globally unique value that identifies the infrastructure. For Google API
	// infrastructure, the error domain is "googleapis.com".
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	// Additional structured details about this error.
	//
	// Keys should match /[a-zA-Z0-9-_]/ and be limited to 64 characters in
	// length. When identifying the current value of an exceeded limit, the units
	// should be contained in the key, not the value.  For example, rather than
	// {"instanceLimit": "100/request"}, should be returned as,
	// {"instanceLimitPerRequest": "100"}, if the client exceeds the number of
	// instances that can be created in a single (batch) request.
	public get Metadata(): globalThis.Map<string, string> | null {
		return this._fields.Metadata
	}

	public set Metadata(value: globalThis.Map<string, string> | null) {
		this._fields.Metadata = value
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
		Reason: string
		Domain: string
		Metadata: globalThis.Map<string, string> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Reason?: string, Domain?: string, Metadata?: globalThis.Map<string, string> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Reason: init?.Reason ?? ("" as string),
			Domain: init?.Domain ?? ("" as string),
			Metadata: init?.Metadata ?? (null! as globalThis.Map<string, string> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ErrorInfo {
		return new ErrorInfo(this, true)
	}

	public __goscriptAssign(source: ErrorInfo): void {
		const target = this._fields
		const values = source._fields
		target.Reason = values.Reason
		target.Domain = values.Domain
		target.Metadata = values.Metadata
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		const _this$: ErrorInfo = _this == null ? $.pointerTarget<ErrorInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<ErrorInfo>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple20: any = $.typeAssertTuple<ErrorInfo | $.VarRef<ErrorInfo> | null>(that, /* @__PURE__ */ $.pointerType("rpc.ErrorInfo"))
		let that1: ErrorInfo | $.VarRef<ErrorInfo> | null = __goscriptTuple20[0]
		let ok = __goscriptTuple20[1]
		if (!ok) {
			let __goscriptTuple21: any = $.typeAssertTuple<ErrorInfo>(that, "rpc.ErrorInfo")
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
		if (!$.stringEqual((_this$ as ErrorInfo).Reason, $.pointerValue<ErrorInfo>(that1).Reason)) {
			if ($.stringCompare((_this$ as ErrorInfo).Reason, $.pointerValue<ErrorInfo>(that1).Reason) < 0) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as ErrorInfo).Domain, $.pointerValue<ErrorInfo>(that1).Domain)) {
			if ($.stringCompare((_this$ as ErrorInfo).Domain, $.pointerValue<ErrorInfo>(that1).Domain) < 0) {
				return -1
			}
			return 1
		}
		if ($.len((_this$ as ErrorInfo).Metadata) != $.len($.pointerValue<ErrorInfo>(that1).Metadata)) {
			if ($.len((_this$ as ErrorInfo).Metadata) < $.len($.pointerValue<ErrorInfo>(that1).Metadata)) {
				return -1
			}
			return 1
		}
		for (const [i, __rangeValue] of (_this$ as ErrorInfo).Metadata?.entries() ?? []) {
			if (!$.stringEqual($.mapGet<string, string, string>((_this$ as ErrorInfo).Metadata, i, "")[0], $.mapGet<string, string, string>($.pointerValue<ErrorInfo>(that1).Metadata, i, "")[0])) {
				if ($.stringCompare($.mapGet<string, string, string>((_this$ as ErrorInfo).Metadata, i, "")[0], $.mapGet<string, string, string>($.pointerValue<ErrorInfo>(that1).Metadata, i, "")[0]) < 0) {
					return -1
				}
				return 1
			}
		}
		{
			let c = bytes.Compare((_this$ as ErrorInfo).XXX_unrecognized, $.pointerValue<ErrorInfo>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_851816e4d6b6361a, $.arrayToSlice<number>([3])]
	}

	public Equal(that: any): boolean {
		const _this: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		const _this$: ErrorInfo = _this == null ? $.pointerTarget<ErrorInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<ErrorInfo>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple22: any = $.typeAssertTuple<ErrorInfo | $.VarRef<ErrorInfo> | null>(that, /* @__PURE__ */ $.pointerType("rpc.ErrorInfo"))
		let that1: ErrorInfo | $.VarRef<ErrorInfo> | null = __goscriptTuple22[0]
		let ok = __goscriptTuple22[1]
		if (!ok) {
			let __goscriptTuple23: any = $.typeAssertTuple<ErrorInfo>(that, "rpc.ErrorInfo")
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
		if (!$.stringEqual((_this$ as ErrorInfo).Reason, $.pointerValue<ErrorInfo>(that1).Reason)) {
			return false
		}
		if (!$.stringEqual((_this$ as ErrorInfo).Domain, $.pointerValue<ErrorInfo>(that1).Domain)) {
			return false
		}
		if ($.len((_this$ as ErrorInfo).Metadata) != $.len($.pointerValue<ErrorInfo>(that1).Metadata)) {
			return false
		}
		for (const [i, __rangeValue] of (_this$ as ErrorInfo).Metadata?.entries() ?? []) {
			if (!$.stringEqual($.mapGet<string, string, string>((_this$ as ErrorInfo).Metadata, i, "")[0], $.mapGet<string, string, string>($.pointerValue<ErrorInfo>(that1).Metadata, i, "")[0])) {
				return false
			}
		}
		if (!bytes.Equal((_this$ as ErrorInfo).XXX_unrecognized, $.pointerValue<ErrorInfo>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetDomain(): string {
		const m: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ErrorInfo>(m).Domain
		}
		return ""
	}

	public GetMetadata(): globalThis.Map<string, string> | null {
		const m: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ErrorInfo>(m).Metadata
		}
		return null
	}

	public GetReason(): string {
		const m: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ErrorInfo>(m).Reason
		}
		return ""
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		const _this$: ErrorInfo = _this == null ? $.pointerTarget<ErrorInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<ErrorInfo>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 7, "string")
		s = $.appendOne(s, "&rpc.ErrorInfo{")
		s = $.appendOne(s, $.concatString(($.concatString("Reason: ", await fmt.Sprintf("%#v", (_this$ as ErrorInfo).Reason))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Domain: ", await fmt.Sprintf("%#v", (_this$ as ErrorInfo).Domain))), ",\n"))
		let keysForMetadata: $.Slice<string> = $.makeSlice<string>(0, $.len((_this$ as ErrorInfo).Metadata), "string")
		for (const [k, __rangeValue] of (_this$ as ErrorInfo).Metadata?.entries() ?? []) {
			keysForMetadata = $.appendOne(keysForMetadata, k)
		}
		github_com_gogo_protobuf_sortkeys.Strings(keysForMetadata)
		let mapStringForMetadata = "map[string]string{"
		for (let __goscriptRangeTarget7 = keysForMetadata, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow7.length; __rangeIndex++) {
			let k = (__goscriptRangeWindow7.backing[__goscriptRangeWindow7.offset + __rangeIndex] as string)
			mapStringForMetadata = $.concatString(mapStringForMetadata, await fmt.Sprintf("%#v: %#v,", k, $.mapGet<string, string, string>((_this$ as ErrorInfo).Metadata, k, "")[0]))
		}
		mapStringForMetadata = $.concatString(mapStringForMetadata, "}")
		if ((_this$ as ErrorInfo).Metadata != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Metadata: ", mapStringForMetadata)), ",\n"))
		}
		if ((_this$ as ErrorInfo).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as ErrorInfo).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ErrorInfo).Size() : ErrorInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple24: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ErrorInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ErrorInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple24[0]
		err = __goscriptTuple24[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ErrorInfo).Size() : ErrorInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ErrorInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ErrorInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		const m$: ErrorInfo = m == null ? $.pointerTarget<ErrorInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ErrorInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ErrorInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ErrorInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ErrorInfo).XXX_unrecognized)
		}
		if ($.len((m$ as ErrorInfo).Metadata) > 0) {
			for (const [k, __rangeValue] of (m$ as ErrorInfo).Metadata?.entries() ?? []) {
				let v = $.mapGet<string, string, string>((m$ as ErrorInfo).Metadata, k, "")[0]
				let baseI: number = i
				i = i - ($.stringLen(v))
				$.copy($.goSlice(dAtA, i, undefined), v)
				i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen(v)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintErrorDetails(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
			}
		}
		if ($.stringLen((m$ as ErrorInfo).Domain) > 0) {
			i = i - ($.stringLen((m$ as ErrorInfo).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ErrorInfo).Domain)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as ErrorInfo).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as ErrorInfo).Reason) > 0) {
			i = i - ($.stringLen((m$ as ErrorInfo).Reason))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ErrorInfo).Reason)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as ErrorInfo).Reason)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		$.assignStruct($.pointerValue<ErrorInfo>(m), $.markAsStructValue(new ErrorInfo()))
	}

	public Size(): number {
		const m: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		let n: number = 0
		const m$: ErrorInfo = m == null ? $.pointerTarget<ErrorInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ErrorInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ErrorInfo).Reason)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		l = $.stringLen((m$ as ErrorInfo).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		if ($.len((m$ as ErrorInfo).Metadata) > 0) {
			for (const [k, v] of (m$ as ErrorInfo).Metadata?.entries() ?? []) {
				k
				v
				let mapEntrySize = ((((1 + $.stringLen(k)) + sovErrorDetails($.uint64($.stringLen(k)))) + 1) + $.stringLen(v)) + sovErrorDetails($.uint64($.stringLen(v)))
				n = n + ((mapEntrySize + 1) + sovErrorDetails($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as ErrorInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ErrorInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		const _this$: ErrorInfo = _this == null ? $.pointerTarget<ErrorInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<ErrorInfo>(_this)
		if (_this == null) {
			return "nil"
		}
		let keysForMetadata: $.Slice<string> = $.makeSlice<string>(0, $.len((_this$ as ErrorInfo).Metadata), "string")
		for (const [k, __rangeValue] of (_this$ as ErrorInfo).Metadata?.entries() ?? []) {
			keysForMetadata = $.appendOne(keysForMetadata, k)
		}
		github_com_gogo_protobuf_sortkeys.Strings(keysForMetadata)
		let mapStringForMetadata = "map[string]string{"
		for (let __goscriptRangeTarget8 = keysForMetadata, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow8.length; __rangeIndex++) {
			let k = (__goscriptRangeWindow8.backing[__goscriptRangeWindow8.offset + __rangeIndex] as string)
			mapStringForMetadata = $.concatString(mapStringForMetadata, fmt.Sprintf("%v: %v,", k, $.mapGet<string, string, string>((_this$ as ErrorInfo).Metadata, k, "")[0]))
		}
		mapStringForMetadata = $.concatString(mapStringForMetadata, "}")
		let s = strings.Join($.arrayToSlice<string>(["&ErrorInfo{", $.concatString(($.concatString("Reason:", fmt.Sprintf("%v", (_this$ as ErrorInfo).Reason))), ","), $.concatString(($.concatString("Domain:", fmt.Sprintf("%v", (_this$ as ErrorInfo).Domain))), ","), $.concatString(($.concatString("Metadata:", mapStringForMetadata)), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as ErrorInfo).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		const m$: ErrorInfo = m == null ? $.pointerTarget<ErrorInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ErrorInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow6 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowErrorDetails
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
				return fmt.Errorf("proto: ErrorInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ErrorInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Reason", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ErrorInfo).Reason = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Domain", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ErrorInfo).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Metadata", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ErrorInfo).Metadata == null) {
						;(m$ as ErrorInfo).Metadata = $.makeMap<string, string>()
					}
					let mapkey: string = ""
					let mapvalue: string = ""
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow10: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowErrorDetails
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
							iNdEx++
							__goscriptShadow10 = $.uint64Or(__goscriptShadow10, $.uint64Shl($.uint64(b & 0x7F), shift))
							if (b < 0x80) {
								break
							}
						}
						let __goscriptShadow11 = $.int($.uint64Shr(__goscriptShadow10, 3n), 32)
						if (__goscriptShadow11 == 1) {
							let stringLenmapkey: bigint = 0n
							for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
								if (shift >= 64) {
									return ErrIntOverflowErrorDetails
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthErrorDetails
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthErrorDetails
							}
							if (postStringIndexmapkey > l) {
								return io.ErrUnexpectedEOF
							}
							mapkey = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapkey))
							iNdEx = postStringIndexmapkey
						} else {
							if (__goscriptShadow11 == 2) {
								let stringLenmapvalue: bigint = 0n
								for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
									if (shift >= 64) {
										return ErrIntOverflowErrorDetails
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
									iNdEx++
									stringLenmapvalue = $.uint64Or(stringLenmapvalue, $.uint64Shl($.uint64(b & 0x7F), shift))
									if (b < 0x80) {
										break
									}
								}
								let intStringLenmapvalue = $.int(stringLenmapvalue)
								if (intStringLenmapvalue < 0) {
									return ErrInvalidLengthErrorDetails
								}
								let postStringIndexmapvalue: number = iNdEx + intStringLenmapvalue
								if (postStringIndexmapvalue < 0) {
									return ErrInvalidLengthErrorDetails
								}
								if (postStringIndexmapvalue > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapvalue))
								iNdEx = postStringIndexmapvalue
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipErrorDetails($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthErrorDetails
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as ErrorInfo).Metadata, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipErrorDetails($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthErrorDetails
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ErrorInfo).XXX_unrecognized = $.appendSlice((m$ as ErrorInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		xxx_messageInfo_ErrorInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*rpc.ErrorInfo", /* @__PURE__ */ $.pointerType("rpc.ErrorInfo")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ErrorInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*rpc.ErrorInfo", /* @__PURE__ */ $.pointerType("rpc.ErrorInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ErrorInfo).MarshalToSizedBuffer(b) : ErrorInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		xxx_messageInfo_ErrorInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*rpc.ErrorInfo", /* @__PURE__ */ $.pointerType("rpc.ErrorInfo")), src)
	}

	public XXX_MessageName(): string {
		return "google.rpc.ErrorInfo"
	}

	public XXX_Size(): number {
		const m: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ErrorInfo).Size() : ErrorInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ErrorInfo | $.VarRef<ErrorInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ErrorInfo).Unmarshal(b) : ErrorInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"rpc.ErrorInfo",
		() => new ErrorInfo(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetMetadata", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "GetReason", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ErrorInfo,
		() => [{ name: "Reason", key: "Reason", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=reason,proto3\" json:\"reason,omitempty\"" }, { name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "Metadata", key: "Metadata", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,3,rep,name=metadata,proto3\" json:\"metadata,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class PreconditionFailure {
	// Describes all precondition violations.
	public get Violations(): $.Slice<PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null> {
		return this._fields.Violations
	}

	public set Violations(value: $.Slice<PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null>) {
		this._fields.Violations = value
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
		Violations: $.Slice<PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Violations?: $.Slice<PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Violations: init?.Violations ?? (null! as $.Slice<PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PreconditionFailure {
		return new PreconditionFailure(this, true)
	}

	public __goscriptAssign(source: PreconditionFailure): void {
		const target = this._fields
		const values = source._fields
		target.Violations = values.Violations
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: PreconditionFailure | $.VarRef<PreconditionFailure> | null = this;
		const _this$: PreconditionFailure = _this == null ? $.pointerTarget<PreconditionFailure>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<PreconditionFailure>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple25: any = $.typeAssertTuple<PreconditionFailure | $.VarRef<PreconditionFailure> | null>(that, /* @__PURE__ */ $.pointerType("rpc.PreconditionFailure"))
		let that1: PreconditionFailure | $.VarRef<PreconditionFailure> | null = __goscriptTuple25[0]
		let ok = __goscriptTuple25[1]
		if (!ok) {
			let __goscriptTuple26: any = $.typeAssertTuple<PreconditionFailure>(that, "rpc.PreconditionFailure")
			let that2 = $.varRef(__goscriptTuple26[0])
			let __goscriptShadow12 = __goscriptTuple26[1]
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
		if ($.sliceLen((_this$ as PreconditionFailure).Violations) != $.sliceLen($.pointerValue<PreconditionFailure>(that1).Violations)) {
			if ($.sliceLen((_this$ as PreconditionFailure).Violations) < $.sliceLen($.pointerValue<PreconditionFailure>(that1).Violations)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget9 = (_this$ as PreconditionFailure).Violations, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), i = 0; i < __goscriptRangeWindow9.length; i++) {
			{
				let c = PreconditionFailure_Violation.prototype.Compare.call($.arrayIndex((_this$ as PreconditionFailure).Violations!, i), $.interfaceValue($.arrayIndex($.pointerValue<PreconditionFailure>(that1).Violations!, i), "*rpc.PreconditionFailure_Violation", /* @__PURE__ */ $.pointerType("rpc.PreconditionFailure_Violation")))
				if (c != 0) {
					return c
				}
			}
		}
		{
			let c = bytes.Compare((_this$ as PreconditionFailure).XXX_unrecognized, $.pointerValue<PreconditionFailure>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_851816e4d6b6361a, $.arrayToSlice<number>([4])]
	}

	public Equal(that: any): boolean {
		const _this: PreconditionFailure | $.VarRef<PreconditionFailure> | null = this;
		const _this$: PreconditionFailure = _this == null ? $.pointerTarget<PreconditionFailure>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<PreconditionFailure>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple27: any = $.typeAssertTuple<PreconditionFailure | $.VarRef<PreconditionFailure> | null>(that, /* @__PURE__ */ $.pointerType("rpc.PreconditionFailure"))
		let that1: PreconditionFailure | $.VarRef<PreconditionFailure> | null = __goscriptTuple27[0]
		let ok = __goscriptTuple27[1]
		if (!ok) {
			let __goscriptTuple28: any = $.typeAssertTuple<PreconditionFailure>(that, "rpc.PreconditionFailure")
			let that2 = $.varRef(__goscriptTuple28[0])
			let __goscriptShadow13 = __goscriptTuple28[1]
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
		if ($.sliceLen((_this$ as PreconditionFailure).Violations) != $.sliceLen($.pointerValue<PreconditionFailure>(that1).Violations)) {
			return false
		}
		for (let __goscriptRangeTarget10 = (_this$ as PreconditionFailure).Violations, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), i = 0; i < __goscriptRangeWindow10.length; i++) {
			if (!PreconditionFailure_Violation.prototype.Equal.call($.arrayIndex((_this$ as PreconditionFailure).Violations!, i), $.interfaceValue($.arrayIndex($.pointerValue<PreconditionFailure>(that1).Violations!, i), "*rpc.PreconditionFailure_Violation", /* @__PURE__ */ $.pointerType("rpc.PreconditionFailure_Violation")))) {
				return false
			}
		}
		if (!bytes.Equal((_this$ as PreconditionFailure).XXX_unrecognized, $.pointerValue<PreconditionFailure>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetViolations(): $.Slice<PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null> {
		const m: PreconditionFailure | $.VarRef<PreconditionFailure> | null = this;
		if (m != null) {
			return $.pointerValue<PreconditionFailure>(m).Violations
		}
		return null
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: PreconditionFailure | $.VarRef<PreconditionFailure> | null = this;
		const _this$: PreconditionFailure = _this == null ? $.pointerTarget<PreconditionFailure>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<PreconditionFailure>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&rpc.PreconditionFailure{")
		if ((_this$ as PreconditionFailure).Violations != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Violations: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as PreconditionFailure).Violations, "[]*rpc.PreconditionFailure_Violation", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("rpc.PreconditionFailure_Violation")))))), ",\n"))
		}
		if ((_this$ as PreconditionFailure).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as PreconditionFailure).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: PreconditionFailure | $.VarRef<PreconditionFailure> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PreconditionFailure).Size() : PreconditionFailure.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple29: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PreconditionFailure).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PreconditionFailure.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple29[0]
		err = __goscriptTuple29[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PreconditionFailure | $.VarRef<PreconditionFailure> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PreconditionFailure).Size() : PreconditionFailure.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PreconditionFailure).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PreconditionFailure.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PreconditionFailure | $.VarRef<PreconditionFailure> | null = this;
		const m$: PreconditionFailure = m == null ? $.pointerTarget<PreconditionFailure>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PreconditionFailure>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as PreconditionFailure).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as PreconditionFailure).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PreconditionFailure).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as PreconditionFailure).Violations) > 0) {
			for (let __goscriptSliceWindow7 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as PreconditionFailure).Violations) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = PreconditionFailure_Violation.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as PreconditionFailure).Violations!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintErrorDetails(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: PreconditionFailure | $.VarRef<PreconditionFailure> | null = this;
		$.assignStruct($.pointerValue<PreconditionFailure>(m), $.markAsStructValue(new PreconditionFailure()))
	}

	public Size(): number {
		const m: PreconditionFailure | $.VarRef<PreconditionFailure> | null = this;
		let n: number = 0
		const m$: PreconditionFailure = m == null ? $.pointerTarget<PreconditionFailure>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PreconditionFailure>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as PreconditionFailure).Violations) > 0) {
			for (let __goscriptRangeTarget11 = (m$ as PreconditionFailure).Violations, __goscriptRangeWindow11 = $.sliceRange(__goscriptRangeTarget11), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow11.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow11.backing[__goscriptRangeWindow11.offset + __rangeIndex] as PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as PreconditionFailure_Violation).Size() : PreconditionFailure_Violation.prototype.Size.call(e))
				n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
			}
		}
		if ((m$ as PreconditionFailure).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as PreconditionFailure).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: PreconditionFailure | $.VarRef<PreconditionFailure> | null = this;
		const _this$: PreconditionFailure = _this == null ? $.pointerTarget<PreconditionFailure>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<PreconditionFailure>(_this)
		if (_this == null) {
			return "nil"
		}
		let repeatedStringForViolations = "[]*PreconditionFailure_Violation{"
		for (let __goscriptRangeTarget12 = (_this$ as PreconditionFailure).Violations, __goscriptRangeWindow12 = $.sliceRange(__goscriptRangeTarget12), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow12.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow12.backing[__goscriptRangeWindow12.offset + __rangeIndex] as PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null)
			repeatedStringForViolations = $.concatString(repeatedStringForViolations, $.concatString(strings.Replace(fmt.Sprintf("%v", $.interfaceValue(f, "*rpc.PreconditionFailure_Violation", /* @__PURE__ */ $.pointerType("rpc.PreconditionFailure_Violation"))), "PreconditionFailure_Violation", "PreconditionFailure_Violation", 1), ","))
		}
		repeatedStringForViolations = $.concatString(repeatedStringForViolations, "}")
		let s = strings.Join($.arrayToSlice<string>(["&PreconditionFailure{", $.concatString(($.concatString("Violations:", repeatedStringForViolations)), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as PreconditionFailure).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: PreconditionFailure | $.VarRef<PreconditionFailure> | null = this;
		const m$: PreconditionFailure = m == null ? $.pointerTarget<PreconditionFailure>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PreconditionFailure>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow8 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowErrorDetails
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
				return fmt.Errorf("proto: PreconditionFailure: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: PreconditionFailure: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Violations", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PreconditionFailure).Violations = $.appendOne((m$ as PreconditionFailure).Violations, new PreconditionFailure_Violation(), $.appendZeros.nil)
					{
						let err = PreconditionFailure_Violation.prototype.Unmarshal.call($.arrayIndex((m$ as PreconditionFailure).Violations!, $.sliceLen((m$ as PreconditionFailure).Violations) - 1), $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipErrorDetails($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthErrorDetails
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PreconditionFailure).XXX_unrecognized = $.appendSlice((m$ as PreconditionFailure).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: PreconditionFailure | $.VarRef<PreconditionFailure> | null = this;
		xxx_messageInfo_PreconditionFailure.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*rpc.PreconditionFailure", /* @__PURE__ */ $.pointerType("rpc.PreconditionFailure")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: PreconditionFailure | $.VarRef<PreconditionFailure> | null = this;
		if (deterministic) {
			return xxx_messageInfo_PreconditionFailure.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*rpc.PreconditionFailure", /* @__PURE__ */ $.pointerType("rpc.PreconditionFailure")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PreconditionFailure).MarshalToSizedBuffer(b) : PreconditionFailure.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: PreconditionFailure | $.VarRef<PreconditionFailure> | null = this;
		xxx_messageInfo_PreconditionFailure.value.Merge($.interfaceValue<proto.Message | null>(m, "*rpc.PreconditionFailure", /* @__PURE__ */ $.pointerType("rpc.PreconditionFailure")), src)
	}

	public XXX_MessageName(): string {
		return "google.rpc.PreconditionFailure"
	}

	public XXX_Size(): number {
		const m: PreconditionFailure | $.VarRef<PreconditionFailure> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PreconditionFailure).Size() : PreconditionFailure.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: PreconditionFailure | $.VarRef<PreconditionFailure> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PreconditionFailure).Unmarshal(b) : PreconditionFailure.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"rpc.PreconditionFailure",
		() => new PreconditionFailure(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetViolations", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("rpc.PreconditionFailure_Violation")) }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		PreconditionFailure,
		() => [{ name: "Violations", key: "Violations", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("rpc.PreconditionFailure_Violation")), tag: "protobuf:\"bytes,1,rep,name=violations,proto3\" json:\"violations,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class PreconditionFailure_Violation {
	// The type of PreconditionFailure. We recommend using a service-specific
	// enum type to define the supported precondition violation subjects. For
	// example, "TOS" for "Terms of Service violation".
	public get Type(): string {
		return this._fields.Type
	}

	public set Type(value: string) {
		this._fields.Type = value
	}

	// The subject, relative to the type, that failed.
	// For example, "google.com/cloud" relative to the "TOS" type would indicate
	// which terms of service is being referenced.
	public get Subject(): string {
		return this._fields.Subject
	}

	public set Subject(value: string) {
		this._fields.Subject = value
	}

	// A description of how the precondition failed. Developers can use this
	// description to understand how to fix the failure.
	//
	// For example: "Terms of service not accepted".
	public get Description(): string {
		return this._fields.Description
	}

	public set Description(value: string) {
		this._fields.Description = value
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
		Type: string
		Subject: string
		Description: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Type?: string, Subject?: string, Description?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? ("" as string),
			Subject: init?.Subject ?? ("" as string),
			Description: init?.Description ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PreconditionFailure_Violation {
		return new PreconditionFailure_Violation(this, true)
	}

	public __goscriptAssign(source: PreconditionFailure_Violation): void {
		const target = this._fields
		const values = source._fields
		target.Type = values.Type
		target.Subject = values.Subject
		target.Description = values.Description
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		const _this$: PreconditionFailure_Violation = _this == null ? $.pointerTarget<PreconditionFailure_Violation>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<PreconditionFailure_Violation>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple30: any = $.typeAssertTuple<PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null>(that, /* @__PURE__ */ $.pointerType("rpc.PreconditionFailure_Violation"))
		let that1: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = __goscriptTuple30[0]
		let ok = __goscriptTuple30[1]
		if (!ok) {
			let __goscriptTuple31: any = $.typeAssertTuple<PreconditionFailure_Violation>(that, "rpc.PreconditionFailure_Violation")
			let that2 = $.varRef(__goscriptTuple31[0])
			let __goscriptShadow14 = __goscriptTuple31[1]
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
		if (!$.stringEqual((_this$ as PreconditionFailure_Violation).Type, $.pointerValue<PreconditionFailure_Violation>(that1).Type)) {
			if ($.stringCompare((_this$ as PreconditionFailure_Violation).Type, $.pointerValue<PreconditionFailure_Violation>(that1).Type) < 0) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as PreconditionFailure_Violation).Subject, $.pointerValue<PreconditionFailure_Violation>(that1).Subject)) {
			if ($.stringCompare((_this$ as PreconditionFailure_Violation).Subject, $.pointerValue<PreconditionFailure_Violation>(that1).Subject) < 0) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as PreconditionFailure_Violation).Description, $.pointerValue<PreconditionFailure_Violation>(that1).Description)) {
			if ($.stringCompare((_this$ as PreconditionFailure_Violation).Description, $.pointerValue<PreconditionFailure_Violation>(that1).Description) < 0) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as PreconditionFailure_Violation).XXX_unrecognized, $.pointerValue<PreconditionFailure_Violation>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_851816e4d6b6361a, $.arrayToSlice<number>([4, 0])]
	}

	public Equal(that: any): boolean {
		const _this: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		const _this$: PreconditionFailure_Violation = _this == null ? $.pointerTarget<PreconditionFailure_Violation>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<PreconditionFailure_Violation>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple32: any = $.typeAssertTuple<PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null>(that, /* @__PURE__ */ $.pointerType("rpc.PreconditionFailure_Violation"))
		let that1: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = __goscriptTuple32[0]
		let ok = __goscriptTuple32[1]
		if (!ok) {
			let __goscriptTuple33: any = $.typeAssertTuple<PreconditionFailure_Violation>(that, "rpc.PreconditionFailure_Violation")
			let that2 = $.varRef(__goscriptTuple33[0])
			let __goscriptShadow15 = __goscriptTuple33[1]
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
		if (!$.stringEqual((_this$ as PreconditionFailure_Violation).Type, $.pointerValue<PreconditionFailure_Violation>(that1).Type)) {
			return false
		}
		if (!$.stringEqual((_this$ as PreconditionFailure_Violation).Subject, $.pointerValue<PreconditionFailure_Violation>(that1).Subject)) {
			return false
		}
		if (!$.stringEqual((_this$ as PreconditionFailure_Violation).Description, $.pointerValue<PreconditionFailure_Violation>(that1).Description)) {
			return false
		}
		if (!bytes.Equal((_this$ as PreconditionFailure_Violation).XXX_unrecognized, $.pointerValue<PreconditionFailure_Violation>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetDescription(): string {
		const m: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		if (m != null) {
			return $.pointerValue<PreconditionFailure_Violation>(m).Description
		}
		return ""
	}

	public GetSubject(): string {
		const m: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		if (m != null) {
			return $.pointerValue<PreconditionFailure_Violation>(m).Subject
		}
		return ""
	}

	public GetType(): string {
		const m: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		if (m != null) {
			return $.pointerValue<PreconditionFailure_Violation>(m).Type
		}
		return ""
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		const _this$: PreconditionFailure_Violation = _this == null ? $.pointerTarget<PreconditionFailure_Violation>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<PreconditionFailure_Violation>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 7, "string")
		s = $.appendOne(s, "&rpc.PreconditionFailure_Violation{")
		s = $.appendOne(s, $.concatString(($.concatString("Type: ", await fmt.Sprintf("%#v", (_this$ as PreconditionFailure_Violation).Type))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Subject: ", await fmt.Sprintf("%#v", (_this$ as PreconditionFailure_Violation).Subject))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Description: ", await fmt.Sprintf("%#v", (_this$ as PreconditionFailure_Violation).Description))), ",\n"))
		if ((_this$ as PreconditionFailure_Violation).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as PreconditionFailure_Violation).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PreconditionFailure_Violation).Size() : PreconditionFailure_Violation.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple34: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PreconditionFailure_Violation).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PreconditionFailure_Violation.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple34[0]
		err = __goscriptTuple34[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PreconditionFailure_Violation).Size() : PreconditionFailure_Violation.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PreconditionFailure_Violation).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PreconditionFailure_Violation.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		const m$: PreconditionFailure_Violation = m == null ? $.pointerTarget<PreconditionFailure_Violation>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PreconditionFailure_Violation>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as PreconditionFailure_Violation).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as PreconditionFailure_Violation).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PreconditionFailure_Violation).XXX_unrecognized)
		}
		if ($.stringLen((m$ as PreconditionFailure_Violation).Description) > 0) {
			i = i - ($.stringLen((m$ as PreconditionFailure_Violation).Description))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PreconditionFailure_Violation).Description)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as PreconditionFailure_Violation).Description)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.stringLen((m$ as PreconditionFailure_Violation).Subject) > 0) {
			i = i - ($.stringLen((m$ as PreconditionFailure_Violation).Subject))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PreconditionFailure_Violation).Subject)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as PreconditionFailure_Violation).Subject)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as PreconditionFailure_Violation).Type) > 0) {
			i = i - ($.stringLen((m$ as PreconditionFailure_Violation).Type))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PreconditionFailure_Violation).Type)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as PreconditionFailure_Violation).Type)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		$.assignStruct($.pointerValue<PreconditionFailure_Violation>(m), $.markAsStructValue(new PreconditionFailure_Violation()))
	}

	public Size(): number {
		const m: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		let n: number = 0
		const m$: PreconditionFailure_Violation = m == null ? $.pointerTarget<PreconditionFailure_Violation>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PreconditionFailure_Violation>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as PreconditionFailure_Violation).Type)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		l = $.stringLen((m$ as PreconditionFailure_Violation).Subject)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		l = $.stringLen((m$ as PreconditionFailure_Violation).Description)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		if ((m$ as PreconditionFailure_Violation).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as PreconditionFailure_Violation).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		const _this$: PreconditionFailure_Violation = _this == null ? $.pointerTarget<PreconditionFailure_Violation>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<PreconditionFailure_Violation>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&PreconditionFailure_Violation{", $.concatString(($.concatString("Type:", fmt.Sprintf("%v", (_this$ as PreconditionFailure_Violation).Type))), ","), $.concatString(($.concatString("Subject:", fmt.Sprintf("%v", (_this$ as PreconditionFailure_Violation).Subject))), ","), $.concatString(($.concatString("Description:", fmt.Sprintf("%v", (_this$ as PreconditionFailure_Violation).Description))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as PreconditionFailure_Violation).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		const m$: PreconditionFailure_Violation = m == null ? $.pointerTarget<PreconditionFailure_Violation>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PreconditionFailure_Violation>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow9 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowErrorDetails
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: Violation: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Violation: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Type", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PreconditionFailure_Violation).Type = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Subject", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PreconditionFailure_Violation).Subject = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Description", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PreconditionFailure_Violation).Description = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipErrorDetails($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthErrorDetails
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PreconditionFailure_Violation).XXX_unrecognized = $.appendSlice((m$ as PreconditionFailure_Violation).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		xxx_messageInfo_PreconditionFailure_Violation.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*rpc.PreconditionFailure_Violation", /* @__PURE__ */ $.pointerType("rpc.PreconditionFailure_Violation")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		if (deterministic) {
			return xxx_messageInfo_PreconditionFailure_Violation.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*rpc.PreconditionFailure_Violation", /* @__PURE__ */ $.pointerType("rpc.PreconditionFailure_Violation")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PreconditionFailure_Violation).MarshalToSizedBuffer(b) : PreconditionFailure_Violation.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		xxx_messageInfo_PreconditionFailure_Violation.value.Merge($.interfaceValue<proto.Message | null>(m, "*rpc.PreconditionFailure_Violation", /* @__PURE__ */ $.pointerType("rpc.PreconditionFailure_Violation")), src)
	}

	public XXX_MessageName(): string {
		return "google.rpc.PreconditionFailure.Violation"
	}

	public XXX_Size(): number {
		const m: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PreconditionFailure_Violation).Size() : PreconditionFailure_Violation.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PreconditionFailure_Violation).Unmarshal(b) : PreconditionFailure_Violation.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"rpc.PreconditionFailure_Violation",
		() => new PreconditionFailure_Violation(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetDescription", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetSubject", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		PreconditionFailure_Violation,
		() => [{ name: "Type", key: "Type", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=type,proto3\" json:\"type,omitempty\"" }, { name: "Subject", key: "Subject", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=subject,proto3\" json:\"subject,omitempty\"" }, { name: "Description", key: "Description", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=description,proto3\" json:\"description,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class BadRequest {
	// Describes all violations in a client request.
	public get FieldViolations(): $.Slice<BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null> {
		return this._fields.FieldViolations
	}

	public set FieldViolations(value: $.Slice<BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null>) {
		this._fields.FieldViolations = value
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
		FieldViolations: $.Slice<BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{FieldViolations?: $.Slice<BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			FieldViolations: init?.FieldViolations ?? (null! as $.Slice<BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BadRequest {
		return new BadRequest(this, true)
	}

	public __goscriptAssign(source: BadRequest): void {
		const target = this._fields
		const values = source._fields
		target.FieldViolations = values.FieldViolations
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: BadRequest | $.VarRef<BadRequest> | null = this;
		const _this$: BadRequest = _this == null ? $.pointerTarget<BadRequest>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BadRequest>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple35: any = $.typeAssertTuple<BadRequest | $.VarRef<BadRequest> | null>(that, /* @__PURE__ */ $.pointerType("rpc.BadRequest"))
		let that1: BadRequest | $.VarRef<BadRequest> | null = __goscriptTuple35[0]
		let ok = __goscriptTuple35[1]
		if (!ok) {
			let __goscriptTuple36: any = $.typeAssertTuple<BadRequest>(that, "rpc.BadRequest")
			let that2 = $.varRef(__goscriptTuple36[0])
			let __goscriptShadow16 = __goscriptTuple36[1]
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
		if ($.sliceLen((_this$ as BadRequest).FieldViolations) != $.sliceLen($.pointerValue<BadRequest>(that1).FieldViolations)) {
			if ($.sliceLen((_this$ as BadRequest).FieldViolations) < $.sliceLen($.pointerValue<BadRequest>(that1).FieldViolations)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget13 = (_this$ as BadRequest).FieldViolations, __goscriptRangeWindow13 = $.sliceRange(__goscriptRangeTarget13), i = 0; i < __goscriptRangeWindow13.length; i++) {
			{
				let c = BadRequest_FieldViolation.prototype.Compare.call($.arrayIndex((_this$ as BadRequest).FieldViolations!, i), $.interfaceValue($.arrayIndex($.pointerValue<BadRequest>(that1).FieldViolations!, i), "*rpc.BadRequest_FieldViolation", /* @__PURE__ */ $.pointerType("rpc.BadRequest_FieldViolation")))
				if (c != 0) {
					return c
				}
			}
		}
		{
			let c = bytes.Compare((_this$ as BadRequest).XXX_unrecognized, $.pointerValue<BadRequest>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_851816e4d6b6361a, $.arrayToSlice<number>([5])]
	}

	public Equal(that: any): boolean {
		const _this: BadRequest | $.VarRef<BadRequest> | null = this;
		const _this$: BadRequest = _this == null ? $.pointerTarget<BadRequest>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BadRequest>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple37: any = $.typeAssertTuple<BadRequest | $.VarRef<BadRequest> | null>(that, /* @__PURE__ */ $.pointerType("rpc.BadRequest"))
		let that1: BadRequest | $.VarRef<BadRequest> | null = __goscriptTuple37[0]
		let ok = __goscriptTuple37[1]
		if (!ok) {
			let __goscriptTuple38: any = $.typeAssertTuple<BadRequest>(that, "rpc.BadRequest")
			let that2 = $.varRef(__goscriptTuple38[0])
			let __goscriptShadow17 = __goscriptTuple38[1]
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
		if ($.sliceLen((_this$ as BadRequest).FieldViolations) != $.sliceLen($.pointerValue<BadRequest>(that1).FieldViolations)) {
			return false
		}
		for (let __goscriptRangeTarget14 = (_this$ as BadRequest).FieldViolations, __goscriptRangeWindow14 = $.sliceRange(__goscriptRangeTarget14), i = 0; i < __goscriptRangeWindow14.length; i++) {
			if (!BadRequest_FieldViolation.prototype.Equal.call($.arrayIndex((_this$ as BadRequest).FieldViolations!, i), $.interfaceValue($.arrayIndex($.pointerValue<BadRequest>(that1).FieldViolations!, i), "*rpc.BadRequest_FieldViolation", /* @__PURE__ */ $.pointerType("rpc.BadRequest_FieldViolation")))) {
				return false
			}
		}
		if (!bytes.Equal((_this$ as BadRequest).XXX_unrecognized, $.pointerValue<BadRequest>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetFieldViolations(): $.Slice<BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null> {
		const m: BadRequest | $.VarRef<BadRequest> | null = this;
		if (m != null) {
			return $.pointerValue<BadRequest>(m).FieldViolations
		}
		return null
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: BadRequest | $.VarRef<BadRequest> | null = this;
		const _this$: BadRequest = _this == null ? $.pointerTarget<BadRequest>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BadRequest>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&rpc.BadRequest{")
		if ((_this$ as BadRequest).FieldViolations != null) {
			s = $.appendOne(s, $.concatString(($.concatString("FieldViolations: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as BadRequest).FieldViolations, "[]*rpc.BadRequest_FieldViolation", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("rpc.BadRequest_FieldViolation")))))), ",\n"))
		}
		if ((_this$ as BadRequest).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as BadRequest).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: BadRequest | $.VarRef<BadRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadRequest).Size() : BadRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple39: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BadRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple39[0]
		err = __goscriptTuple39[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BadRequest | $.VarRef<BadRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadRequest).Size() : BadRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BadRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BadRequest | $.VarRef<BadRequest> | null = this;
		const m$: BadRequest = m == null ? $.pointerTarget<BadRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BadRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as BadRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as BadRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BadRequest).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as BadRequest).FieldViolations) > 0) {
			for (let __goscriptSliceWindow10 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as BadRequest).FieldViolations) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = BadRequest_FieldViolation.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as BadRequest).FieldViolations!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintErrorDetails(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: BadRequest | $.VarRef<BadRequest> | null = this;
		$.assignStruct($.pointerValue<BadRequest>(m), $.markAsStructValue(new BadRequest()))
	}

	public Size(): number {
		const m: BadRequest | $.VarRef<BadRequest> | null = this;
		let n: number = 0
		const m$: BadRequest = m == null ? $.pointerTarget<BadRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BadRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as BadRequest).FieldViolations) > 0) {
			for (let __goscriptRangeTarget15 = (m$ as BadRequest).FieldViolations, __goscriptRangeWindow15 = $.sliceRange(__goscriptRangeTarget15), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow15.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow15.backing[__goscriptRangeWindow15.offset + __rangeIndex] as BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as BadRequest_FieldViolation).Size() : BadRequest_FieldViolation.prototype.Size.call(e))
				n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
			}
		}
		if ((m$ as BadRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as BadRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: BadRequest | $.VarRef<BadRequest> | null = this;
		const _this$: BadRequest = _this == null ? $.pointerTarget<BadRequest>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BadRequest>(_this)
		if (_this == null) {
			return "nil"
		}
		let repeatedStringForFieldViolations = "[]*BadRequest_FieldViolation{"
		for (let __goscriptRangeTarget16 = (_this$ as BadRequest).FieldViolations, __goscriptRangeWindow16 = $.sliceRange(__goscriptRangeTarget16), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow16.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow16.backing[__goscriptRangeWindow16.offset + __rangeIndex] as BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null)
			repeatedStringForFieldViolations = $.concatString(repeatedStringForFieldViolations, $.concatString(strings.Replace(fmt.Sprintf("%v", $.interfaceValue(f, "*rpc.BadRequest_FieldViolation", /* @__PURE__ */ $.pointerType("rpc.BadRequest_FieldViolation"))), "BadRequest_FieldViolation", "BadRequest_FieldViolation", 1), ","))
		}
		repeatedStringForFieldViolations = $.concatString(repeatedStringForFieldViolations, "}")
		let s = strings.Join($.arrayToSlice<string>(["&BadRequest{", $.concatString(($.concatString("FieldViolations:", repeatedStringForFieldViolations)), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as BadRequest).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: BadRequest | $.VarRef<BadRequest> | null = this;
		const m$: BadRequest = m == null ? $.pointerTarget<BadRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BadRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow11 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowErrorDetails
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: BadRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: BadRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field FieldViolations", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BadRequest).FieldViolations = $.appendOne((m$ as BadRequest).FieldViolations, new BadRequest_FieldViolation(), $.appendZeros.nil)
					{
						let err = BadRequest_FieldViolation.prototype.Unmarshal.call($.arrayIndex((m$ as BadRequest).FieldViolations!, $.sliceLen((m$ as BadRequest).FieldViolations) - 1), $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipErrorDetails($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthErrorDetails
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BadRequest).XXX_unrecognized = $.appendSlice((m$ as BadRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: BadRequest | $.VarRef<BadRequest> | null = this;
		xxx_messageInfo_BadRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*rpc.BadRequest", /* @__PURE__ */ $.pointerType("rpc.BadRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: BadRequest | $.VarRef<BadRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_BadRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*rpc.BadRequest", /* @__PURE__ */ $.pointerType("rpc.BadRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadRequest).MarshalToSizedBuffer(b) : BadRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: BadRequest | $.VarRef<BadRequest> | null = this;
		xxx_messageInfo_BadRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*rpc.BadRequest", /* @__PURE__ */ $.pointerType("rpc.BadRequest")), src)
	}

	public XXX_MessageName(): string {
		return "google.rpc.BadRequest"
	}

	public XXX_Size(): number {
		const m: BadRequest | $.VarRef<BadRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadRequest).Size() : BadRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: BadRequest | $.VarRef<BadRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadRequest).Unmarshal(b) : BadRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"rpc.BadRequest",
		() => new BadRequest(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetFieldViolations", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("rpc.BadRequest_FieldViolation")) }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		BadRequest,
		() => [{ name: "FieldViolations", key: "FieldViolations", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("rpc.BadRequest_FieldViolation")), tag: "protobuf:\"bytes,1,rep,name=field_violations,json=fieldViolations,proto3\" json:\"field_violations,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class BadRequest_FieldViolation {
	// A path leading to a field in the request body. The value will be a
	// sequence of dot-separated identifiers that identify a protocol buffer
	// field. E.g., "field_violations.field" would identify this field.
	public get Field(): string {
		return this._fields.Field
	}

	public set Field(value: string) {
		this._fields.Field = value
	}

	// A description of why the request element is bad.
	public get Description(): string {
		return this._fields.Description
	}

	public set Description(value: string) {
		this._fields.Description = value
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
		Field: string
		Description: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Field?: string, Description?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Field: init?.Field ?? ("" as string),
			Description: init?.Description ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BadRequest_FieldViolation {
		return new BadRequest_FieldViolation(this, true)
	}

	public __goscriptAssign(source: BadRequest_FieldViolation): void {
		const target = this._fields
		const values = source._fields
		target.Field = values.Field
		target.Description = values.Description
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = this;
		const _this$: BadRequest_FieldViolation = _this == null ? $.pointerTarget<BadRequest_FieldViolation>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BadRequest_FieldViolation>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple40: any = $.typeAssertTuple<BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null>(that, /* @__PURE__ */ $.pointerType("rpc.BadRequest_FieldViolation"))
		let that1: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = __goscriptTuple40[0]
		let ok = __goscriptTuple40[1]
		if (!ok) {
			let __goscriptTuple41: any = $.typeAssertTuple<BadRequest_FieldViolation>(that, "rpc.BadRequest_FieldViolation")
			let that2 = $.varRef(__goscriptTuple41[0])
			let __goscriptShadow18 = __goscriptTuple41[1]
			if (__goscriptShadow18) {
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
		if (!$.stringEqual((_this$ as BadRequest_FieldViolation).Field, $.pointerValue<BadRequest_FieldViolation>(that1).Field)) {
			if ($.stringCompare((_this$ as BadRequest_FieldViolation).Field, $.pointerValue<BadRequest_FieldViolation>(that1).Field) < 0) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as BadRequest_FieldViolation).Description, $.pointerValue<BadRequest_FieldViolation>(that1).Description)) {
			if ($.stringCompare((_this$ as BadRequest_FieldViolation).Description, $.pointerValue<BadRequest_FieldViolation>(that1).Description) < 0) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as BadRequest_FieldViolation).XXX_unrecognized, $.pointerValue<BadRequest_FieldViolation>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_851816e4d6b6361a, $.arrayToSlice<number>([5, 0])]
	}

	public Equal(that: any): boolean {
		const _this: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = this;
		const _this$: BadRequest_FieldViolation = _this == null ? $.pointerTarget<BadRequest_FieldViolation>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BadRequest_FieldViolation>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple42: any = $.typeAssertTuple<BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null>(that, /* @__PURE__ */ $.pointerType("rpc.BadRequest_FieldViolation"))
		let that1: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = __goscriptTuple42[0]
		let ok = __goscriptTuple42[1]
		if (!ok) {
			let __goscriptTuple43: any = $.typeAssertTuple<BadRequest_FieldViolation>(that, "rpc.BadRequest_FieldViolation")
			let that2 = $.varRef(__goscriptTuple43[0])
			let __goscriptShadow19 = __goscriptTuple43[1]
			if (__goscriptShadow19) {
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
		if (!$.stringEqual((_this$ as BadRequest_FieldViolation).Field, $.pointerValue<BadRequest_FieldViolation>(that1).Field)) {
			return false
		}
		if (!$.stringEqual((_this$ as BadRequest_FieldViolation).Description, $.pointerValue<BadRequest_FieldViolation>(that1).Description)) {
			return false
		}
		if (!bytes.Equal((_this$ as BadRequest_FieldViolation).XXX_unrecognized, $.pointerValue<BadRequest_FieldViolation>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetDescription(): string {
		const m: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = this;
		if (m != null) {
			return $.pointerValue<BadRequest_FieldViolation>(m).Description
		}
		return ""
	}

	public GetField(): string {
		const m: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = this;
		if (m != null) {
			return $.pointerValue<BadRequest_FieldViolation>(m).Field
		}
		return ""
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = this;
		const _this$: BadRequest_FieldViolation = _this == null ? $.pointerTarget<BadRequest_FieldViolation>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BadRequest_FieldViolation>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 6, "string")
		s = $.appendOne(s, "&rpc.BadRequest_FieldViolation{")
		s = $.appendOne(s, $.concatString(($.concatString("Field: ", await fmt.Sprintf("%#v", (_this$ as BadRequest_FieldViolation).Field))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Description: ", await fmt.Sprintf("%#v", (_this$ as BadRequest_FieldViolation).Description))), ",\n"))
		if ((_this$ as BadRequest_FieldViolation).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as BadRequest_FieldViolation).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadRequest_FieldViolation).Size() : BadRequest_FieldViolation.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple44: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadRequest_FieldViolation).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BadRequest_FieldViolation.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple44[0]
		err = __goscriptTuple44[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadRequest_FieldViolation).Size() : BadRequest_FieldViolation.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadRequest_FieldViolation).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BadRequest_FieldViolation.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = this;
		const m$: BadRequest_FieldViolation = m == null ? $.pointerTarget<BadRequest_FieldViolation>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BadRequest_FieldViolation>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as BadRequest_FieldViolation).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as BadRequest_FieldViolation).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BadRequest_FieldViolation).XXX_unrecognized)
		}
		if ($.stringLen((m$ as BadRequest_FieldViolation).Description) > 0) {
			i = i - ($.stringLen((m$ as BadRequest_FieldViolation).Description))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BadRequest_FieldViolation).Description)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as BadRequest_FieldViolation).Description)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as BadRequest_FieldViolation).Field) > 0) {
			i = i - ($.stringLen((m$ as BadRequest_FieldViolation).Field))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BadRequest_FieldViolation).Field)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as BadRequest_FieldViolation).Field)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = this;
		$.assignStruct($.pointerValue<BadRequest_FieldViolation>(m), $.markAsStructValue(new BadRequest_FieldViolation()))
	}

	public Size(): number {
		const m: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = this;
		let n: number = 0
		const m$: BadRequest_FieldViolation = m == null ? $.pointerTarget<BadRequest_FieldViolation>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BadRequest_FieldViolation>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as BadRequest_FieldViolation).Field)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		l = $.stringLen((m$ as BadRequest_FieldViolation).Description)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		if ((m$ as BadRequest_FieldViolation).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as BadRequest_FieldViolation).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = this;
		const _this$: BadRequest_FieldViolation = _this == null ? $.pointerTarget<BadRequest_FieldViolation>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BadRequest_FieldViolation>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&BadRequest_FieldViolation{", $.concatString(($.concatString("Field:", fmt.Sprintf("%v", (_this$ as BadRequest_FieldViolation).Field))), ","), $.concatString(($.concatString("Description:", fmt.Sprintf("%v", (_this$ as BadRequest_FieldViolation).Description))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as BadRequest_FieldViolation).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = this;
		const m$: BadRequest_FieldViolation = m == null ? $.pointerTarget<BadRequest_FieldViolation>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BadRequest_FieldViolation>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow12 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowErrorDetails
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: FieldViolation: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: FieldViolation: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Field", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BadRequest_FieldViolation).Field = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Description", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BadRequest_FieldViolation).Description = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipErrorDetails($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthErrorDetails
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BadRequest_FieldViolation).XXX_unrecognized = $.appendSlice((m$ as BadRequest_FieldViolation).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = this;
		xxx_messageInfo_BadRequest_FieldViolation.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*rpc.BadRequest_FieldViolation", /* @__PURE__ */ $.pointerType("rpc.BadRequest_FieldViolation")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = this;
		if (deterministic) {
			return xxx_messageInfo_BadRequest_FieldViolation.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*rpc.BadRequest_FieldViolation", /* @__PURE__ */ $.pointerType("rpc.BadRequest_FieldViolation")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadRequest_FieldViolation).MarshalToSizedBuffer(b) : BadRequest_FieldViolation.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = this;
		xxx_messageInfo_BadRequest_FieldViolation.value.Merge($.interfaceValue<proto.Message | null>(m, "*rpc.BadRequest_FieldViolation", /* @__PURE__ */ $.pointerType("rpc.BadRequest_FieldViolation")), src)
	}

	public XXX_MessageName(): string {
		return "google.rpc.BadRequest.FieldViolation"
	}

	public XXX_Size(): number {
		const m: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadRequest_FieldViolation).Size() : BadRequest_FieldViolation.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadRequest_FieldViolation).Unmarshal(b) : BadRequest_FieldViolation.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"rpc.BadRequest_FieldViolation",
		() => new BadRequest_FieldViolation(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetDescription", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetField", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		BadRequest_FieldViolation,
		() => [{ name: "Field", key: "Field", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=field,proto3\" json:\"field,omitempty\"" }, { name: "Description", key: "Description", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=description,proto3\" json:\"description,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RequestInfo {
	// An opaque string that should only be interpreted by the service generating
	// it. For example, it can be used to identify requests in the service's logs.
	public get RequestId(): string {
		return this._fields.RequestId
	}

	public set RequestId(value: string) {
		this._fields.RequestId = value
	}

	// Any data that was used to serve this request. For example, an encrypted
	// stack trace that can be sent back to the service provider for debugging.
	public get ServingData(): string {
		return this._fields.ServingData
	}

	public set ServingData(value: string) {
		this._fields.ServingData = value
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
		RequestId: string
		ServingData: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{RequestId?: string, ServingData?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			RequestId: init?.RequestId ?? ("" as string),
			ServingData: init?.ServingData ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RequestInfo {
		return new RequestInfo(this, true)
	}

	public __goscriptAssign(source: RequestInfo): void {
		const target = this._fields
		const values = source._fields
		target.RequestId = values.RequestId
		target.ServingData = values.ServingData
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: RequestInfo | $.VarRef<RequestInfo> | null = this;
		const _this$: RequestInfo = _this == null ? $.pointerTarget<RequestInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<RequestInfo>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple45: any = $.typeAssertTuple<RequestInfo | $.VarRef<RequestInfo> | null>(that, /* @__PURE__ */ $.pointerType("rpc.RequestInfo"))
		let that1: RequestInfo | $.VarRef<RequestInfo> | null = __goscriptTuple45[0]
		let ok = __goscriptTuple45[1]
		if (!ok) {
			let __goscriptTuple46: any = $.typeAssertTuple<RequestInfo>(that, "rpc.RequestInfo")
			let that2 = $.varRef(__goscriptTuple46[0])
			let __goscriptShadow20 = __goscriptTuple46[1]
			if (__goscriptShadow20) {
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
		if (!$.stringEqual((_this$ as RequestInfo).RequestId, $.pointerValue<RequestInfo>(that1).RequestId)) {
			if ($.stringCompare((_this$ as RequestInfo).RequestId, $.pointerValue<RequestInfo>(that1).RequestId) < 0) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as RequestInfo).ServingData, $.pointerValue<RequestInfo>(that1).ServingData)) {
			if ($.stringCompare((_this$ as RequestInfo).ServingData, $.pointerValue<RequestInfo>(that1).ServingData) < 0) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as RequestInfo).XXX_unrecognized, $.pointerValue<RequestInfo>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_851816e4d6b6361a, $.arrayToSlice<number>([6])]
	}

	public Equal(that: any): boolean {
		const _this: RequestInfo | $.VarRef<RequestInfo> | null = this;
		const _this$: RequestInfo = _this == null ? $.pointerTarget<RequestInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<RequestInfo>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple47: any = $.typeAssertTuple<RequestInfo | $.VarRef<RequestInfo> | null>(that, /* @__PURE__ */ $.pointerType("rpc.RequestInfo"))
		let that1: RequestInfo | $.VarRef<RequestInfo> | null = __goscriptTuple47[0]
		let ok = __goscriptTuple47[1]
		if (!ok) {
			let __goscriptTuple48: any = $.typeAssertTuple<RequestInfo>(that, "rpc.RequestInfo")
			let that2 = $.varRef(__goscriptTuple48[0])
			let __goscriptShadow21 = __goscriptTuple48[1]
			if (__goscriptShadow21) {
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
		if (!$.stringEqual((_this$ as RequestInfo).RequestId, $.pointerValue<RequestInfo>(that1).RequestId)) {
			return false
		}
		if (!$.stringEqual((_this$ as RequestInfo).ServingData, $.pointerValue<RequestInfo>(that1).ServingData)) {
			return false
		}
		if (!bytes.Equal((_this$ as RequestInfo).XXX_unrecognized, $.pointerValue<RequestInfo>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetRequestId(): string {
		const m: RequestInfo | $.VarRef<RequestInfo> | null = this;
		if (m != null) {
			return $.pointerValue<RequestInfo>(m).RequestId
		}
		return ""
	}

	public GetServingData(): string {
		const m: RequestInfo | $.VarRef<RequestInfo> | null = this;
		if (m != null) {
			return $.pointerValue<RequestInfo>(m).ServingData
		}
		return ""
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: RequestInfo | $.VarRef<RequestInfo> | null = this;
		const _this$: RequestInfo = _this == null ? $.pointerTarget<RequestInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<RequestInfo>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 6, "string")
		s = $.appendOne(s, "&rpc.RequestInfo{")
		s = $.appendOne(s, $.concatString(($.concatString("RequestId: ", await fmt.Sprintf("%#v", (_this$ as RequestInfo).RequestId))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("ServingData: ", await fmt.Sprintf("%#v", (_this$ as RequestInfo).ServingData))), ",\n"))
		if ((_this$ as RequestInfo).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as RequestInfo).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RequestInfo | $.VarRef<RequestInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestInfo).Size() : RequestInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple49: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RequestInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple49[0]
		err = __goscriptTuple49[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RequestInfo | $.VarRef<RequestInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestInfo).Size() : RequestInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RequestInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RequestInfo | $.VarRef<RequestInfo> | null = this;
		const m$: RequestInfo = m == null ? $.pointerTarget<RequestInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RequestInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RequestInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RequestInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RequestInfo).XXX_unrecognized)
		}
		if ($.stringLen((m$ as RequestInfo).ServingData) > 0) {
			i = i - ($.stringLen((m$ as RequestInfo).ServingData))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RequestInfo).ServingData)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as RequestInfo).ServingData)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as RequestInfo).RequestId) > 0) {
			i = i - ($.stringLen((m$ as RequestInfo).RequestId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RequestInfo).RequestId)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as RequestInfo).RequestId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RequestInfo | $.VarRef<RequestInfo> | null = this;
		$.assignStruct($.pointerValue<RequestInfo>(m), $.markAsStructValue(new RequestInfo()))
	}

	public Size(): number {
		const m: RequestInfo | $.VarRef<RequestInfo> | null = this;
		let n: number = 0
		const m$: RequestInfo = m == null ? $.pointerTarget<RequestInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RequestInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as RequestInfo).RequestId)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		l = $.stringLen((m$ as RequestInfo).ServingData)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		if ((m$ as RequestInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RequestInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: RequestInfo | $.VarRef<RequestInfo> | null = this;
		const _this$: RequestInfo = _this == null ? $.pointerTarget<RequestInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<RequestInfo>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&RequestInfo{", $.concatString(($.concatString("RequestId:", fmt.Sprintf("%v", (_this$ as RequestInfo).RequestId))), ","), $.concatString(($.concatString("ServingData:", fmt.Sprintf("%v", (_this$ as RequestInfo).ServingData))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as RequestInfo).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RequestInfo | $.VarRef<RequestInfo> | null = this;
		const m$: RequestInfo = m == null ? $.pointerTarget<RequestInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RequestInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow13 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowErrorDetails
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow13.backing as any[])[$.windowSlot(__goscriptSliceWindow13, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: RequestInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RequestInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RequestId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow13.backing as any[])[$.windowSlot(__goscriptSliceWindow13, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RequestInfo).RequestId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ServingData", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow13.backing as any[])[$.windowSlot(__goscriptSliceWindow13, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RequestInfo).ServingData = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipErrorDetails($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthErrorDetails
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RequestInfo).XXX_unrecognized = $.appendSlice((m$ as RequestInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RequestInfo | $.VarRef<RequestInfo> | null = this;
		xxx_messageInfo_RequestInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*rpc.RequestInfo", /* @__PURE__ */ $.pointerType("rpc.RequestInfo")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RequestInfo | $.VarRef<RequestInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RequestInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*rpc.RequestInfo", /* @__PURE__ */ $.pointerType("rpc.RequestInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestInfo).MarshalToSizedBuffer(b) : RequestInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RequestInfo | $.VarRef<RequestInfo> | null = this;
		xxx_messageInfo_RequestInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*rpc.RequestInfo", /* @__PURE__ */ $.pointerType("rpc.RequestInfo")), src)
	}

	public XXX_MessageName(): string {
		return "google.rpc.RequestInfo"
	}

	public XXX_Size(): number {
		const m: RequestInfo | $.VarRef<RequestInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestInfo).Size() : RequestInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RequestInfo | $.VarRef<RequestInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestInfo).Unmarshal(b) : RequestInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"rpc.RequestInfo",
		() => new RequestInfo(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetRequestId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetServingData", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RequestInfo,
		() => [{ name: "RequestId", key: "RequestId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=request_id,json=requestId,proto3\" json:\"request_id,omitempty\"" }, { name: "ServingData", key: "ServingData", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=serving_data,json=servingData,proto3\" json:\"serving_data,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ResourceInfo {
	// A name for the type of resource being accessed, e.g. "sql table",
	// "cloud storage bucket", "file", "Google calendar"; or the type URL
	// of the resource: e.g. "type.googleapis.com/google.pubsub.v1.Topic".
	public get ResourceType(): string {
		return this._fields.ResourceType
	}

	public set ResourceType(value: string) {
		this._fields.ResourceType = value
	}

	// The name of the resource being accessed.  For example, a shared calendar
	// name: "example.com_4fghdhgsrgh@group.calendar.google.com", if the current
	// error is [google.rpc.Code.PERMISSION_DENIED][google.rpc.Code.PERMISSION_DENIED].
	public get ResourceName(): string {
		return this._fields.ResourceName
	}

	public set ResourceName(value: string) {
		this._fields.ResourceName = value
	}

	// The owner of the resource (optional).
	// For example, "user:<owner email>" or "project:<Google developer project
	// id>".
	public get Owner(): string {
		return this._fields.Owner
	}

	public set Owner(value: string) {
		this._fields.Owner = value
	}

	// Describes what error is encountered when accessing this resource.
	// For example, updating a cloud project may require the `writer` permission
	// on the developer console project.
	public get Description(): string {
		return this._fields.Description
	}

	public set Description(value: string) {
		this._fields.Description = value
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
		ResourceType: string
		ResourceName: string
		Owner: string
		Description: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{ResourceType?: string, ResourceName?: string, Owner?: string, Description?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ResourceType: init?.ResourceType ?? ("" as string),
			ResourceName: init?.ResourceName ?? ("" as string),
			Owner: init?.Owner ?? ("" as string),
			Description: init?.Description ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ResourceInfo {
		return new ResourceInfo(this, true)
	}

	public __goscriptAssign(source: ResourceInfo): void {
		const target = this._fields
		const values = source._fields
		target.ResourceType = values.ResourceType
		target.ResourceName = values.ResourceName
		target.Owner = values.Owner
		target.Description = values.Description
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		const _this$: ResourceInfo = _this == null ? $.pointerTarget<ResourceInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<ResourceInfo>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple50: any = $.typeAssertTuple<ResourceInfo | $.VarRef<ResourceInfo> | null>(that, /* @__PURE__ */ $.pointerType("rpc.ResourceInfo"))
		let that1: ResourceInfo | $.VarRef<ResourceInfo> | null = __goscriptTuple50[0]
		let ok = __goscriptTuple50[1]
		if (!ok) {
			let __goscriptTuple51: any = $.typeAssertTuple<ResourceInfo>(that, "rpc.ResourceInfo")
			let that2 = $.varRef(__goscriptTuple51[0])
			let __goscriptShadow22 = __goscriptTuple51[1]
			if (__goscriptShadow22) {
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
		if (!$.stringEqual((_this$ as ResourceInfo).ResourceType, $.pointerValue<ResourceInfo>(that1).ResourceType)) {
			if ($.stringCompare((_this$ as ResourceInfo).ResourceType, $.pointerValue<ResourceInfo>(that1).ResourceType) < 0) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as ResourceInfo).ResourceName, $.pointerValue<ResourceInfo>(that1).ResourceName)) {
			if ($.stringCompare((_this$ as ResourceInfo).ResourceName, $.pointerValue<ResourceInfo>(that1).ResourceName) < 0) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as ResourceInfo).Owner, $.pointerValue<ResourceInfo>(that1).Owner)) {
			if ($.stringCompare((_this$ as ResourceInfo).Owner, $.pointerValue<ResourceInfo>(that1).Owner) < 0) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as ResourceInfo).Description, $.pointerValue<ResourceInfo>(that1).Description)) {
			if ($.stringCompare((_this$ as ResourceInfo).Description, $.pointerValue<ResourceInfo>(that1).Description) < 0) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as ResourceInfo).XXX_unrecognized, $.pointerValue<ResourceInfo>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_851816e4d6b6361a, $.arrayToSlice<number>([7])]
	}

	public Equal(that: any): boolean {
		const _this: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		const _this$: ResourceInfo = _this == null ? $.pointerTarget<ResourceInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<ResourceInfo>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple52: any = $.typeAssertTuple<ResourceInfo | $.VarRef<ResourceInfo> | null>(that, /* @__PURE__ */ $.pointerType("rpc.ResourceInfo"))
		let that1: ResourceInfo | $.VarRef<ResourceInfo> | null = __goscriptTuple52[0]
		let ok = __goscriptTuple52[1]
		if (!ok) {
			let __goscriptTuple53: any = $.typeAssertTuple<ResourceInfo>(that, "rpc.ResourceInfo")
			let that2 = $.varRef(__goscriptTuple53[0])
			let __goscriptShadow23 = __goscriptTuple53[1]
			if (__goscriptShadow23) {
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
		if (!$.stringEqual((_this$ as ResourceInfo).ResourceType, $.pointerValue<ResourceInfo>(that1).ResourceType)) {
			return false
		}
		if (!$.stringEqual((_this$ as ResourceInfo).ResourceName, $.pointerValue<ResourceInfo>(that1).ResourceName)) {
			return false
		}
		if (!$.stringEqual((_this$ as ResourceInfo).Owner, $.pointerValue<ResourceInfo>(that1).Owner)) {
			return false
		}
		if (!$.stringEqual((_this$ as ResourceInfo).Description, $.pointerValue<ResourceInfo>(that1).Description)) {
			return false
		}
		if (!bytes.Equal((_this$ as ResourceInfo).XXX_unrecognized, $.pointerValue<ResourceInfo>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetDescription(): string {
		const m: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ResourceInfo>(m).Description
		}
		return ""
	}

	public GetOwner(): string {
		const m: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ResourceInfo>(m).Owner
		}
		return ""
	}

	public GetResourceName(): string {
		const m: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ResourceInfo>(m).ResourceName
		}
		return ""
	}

	public GetResourceType(): string {
		const m: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ResourceInfo>(m).ResourceType
		}
		return ""
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		const _this$: ResourceInfo = _this == null ? $.pointerTarget<ResourceInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<ResourceInfo>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 8, "string")
		s = $.appendOne(s, "&rpc.ResourceInfo{")
		s = $.appendOne(s, $.concatString(($.concatString("ResourceType: ", await fmt.Sprintf("%#v", (_this$ as ResourceInfo).ResourceType))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("ResourceName: ", await fmt.Sprintf("%#v", (_this$ as ResourceInfo).ResourceName))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Owner: ", await fmt.Sprintf("%#v", (_this$ as ResourceInfo).Owner))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Description: ", await fmt.Sprintf("%#v", (_this$ as ResourceInfo).Description))), ",\n"))
		if ((_this$ as ResourceInfo).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as ResourceInfo).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResourceInfo).Size() : ResourceInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple54: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResourceInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ResourceInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple54[0]
		err = __goscriptTuple54[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResourceInfo).Size() : ResourceInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResourceInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ResourceInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		const m$: ResourceInfo = m == null ? $.pointerTarget<ResourceInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResourceInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ResourceInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ResourceInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResourceInfo).XXX_unrecognized)
		}
		if ($.stringLen((m$ as ResourceInfo).Description) > 0) {
			i = i - ($.stringLen((m$ as ResourceInfo).Description))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResourceInfo).Description)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as ResourceInfo).Description)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as ResourceInfo).Owner) > 0) {
			i = i - ($.stringLen((m$ as ResourceInfo).Owner))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResourceInfo).Owner)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as ResourceInfo).Owner)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.stringLen((m$ as ResourceInfo).ResourceName) > 0) {
			i = i - ($.stringLen((m$ as ResourceInfo).ResourceName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResourceInfo).ResourceName)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as ResourceInfo).ResourceName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as ResourceInfo).ResourceType) > 0) {
			i = i - ($.stringLen((m$ as ResourceInfo).ResourceType))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResourceInfo).ResourceType)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as ResourceInfo).ResourceType)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		$.assignStruct($.pointerValue<ResourceInfo>(m), $.markAsStructValue(new ResourceInfo()))
	}

	public Size(): number {
		const m: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		let n: number = 0
		const m$: ResourceInfo = m == null ? $.pointerTarget<ResourceInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResourceInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ResourceInfo).ResourceType)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		l = $.stringLen((m$ as ResourceInfo).ResourceName)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		l = $.stringLen((m$ as ResourceInfo).Owner)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		l = $.stringLen((m$ as ResourceInfo).Description)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		if ((m$ as ResourceInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ResourceInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		const _this$: ResourceInfo = _this == null ? $.pointerTarget<ResourceInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<ResourceInfo>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&ResourceInfo{", $.concatString(($.concatString("ResourceType:", fmt.Sprintf("%v", (_this$ as ResourceInfo).ResourceType))), ","), $.concatString(($.concatString("ResourceName:", fmt.Sprintf("%v", (_this$ as ResourceInfo).ResourceName))), ","), $.concatString(($.concatString("Owner:", fmt.Sprintf("%v", (_this$ as ResourceInfo).Owner))), ","), $.concatString(($.concatString("Description:", fmt.Sprintf("%v", (_this$ as ResourceInfo).Description))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as ResourceInfo).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		const m$: ResourceInfo = m == null ? $.pointerTarget<ResourceInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResourceInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow14 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowErrorDetails
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: ResourceInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ResourceInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ResourceType", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResourceInfo).ResourceType = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ResourceName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResourceInfo).ResourceName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Owner", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResourceInfo).Owner = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Description", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResourceInfo).Description = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipErrorDetails($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthErrorDetails
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResourceInfo).XXX_unrecognized = $.appendSlice((m$ as ResourceInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		xxx_messageInfo_ResourceInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*rpc.ResourceInfo", /* @__PURE__ */ $.pointerType("rpc.ResourceInfo")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ResourceInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*rpc.ResourceInfo", /* @__PURE__ */ $.pointerType("rpc.ResourceInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResourceInfo).MarshalToSizedBuffer(b) : ResourceInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		xxx_messageInfo_ResourceInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*rpc.ResourceInfo", /* @__PURE__ */ $.pointerType("rpc.ResourceInfo")), src)
	}

	public XXX_MessageName(): string {
		return "google.rpc.ResourceInfo"
	}

	public XXX_Size(): number {
		const m: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResourceInfo).Size() : ResourceInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ResourceInfo | $.VarRef<ResourceInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResourceInfo).Unmarshal(b) : ResourceInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"rpc.ResourceInfo",
		() => new ResourceInfo(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetDescription", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetOwner", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetResourceName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetResourceType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ResourceInfo,
		() => [{ name: "ResourceType", key: "ResourceType", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=resource_type,json=resourceType,proto3\" json:\"resource_type,omitempty\"" }, { name: "ResourceName", key: "ResourceName", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=resource_name,json=resourceName,proto3\" json:\"resource_name,omitempty\"" }, { name: "Owner", key: "Owner", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=owner,proto3\" json:\"owner,omitempty\"" }, { name: "Description", key: "Description", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,4,opt,name=description,proto3\" json:\"description,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class Help {
	// URL(s) pointing to additional information on handling the current error.
	public get Links(): $.Slice<Help_Link | $.VarRef<Help_Link> | null> {
		return this._fields.Links
	}

	public set Links(value: $.Slice<Help_Link | $.VarRef<Help_Link> | null>) {
		this._fields.Links = value
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
		Links: $.Slice<Help_Link | $.VarRef<Help_Link> | null>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Links?: $.Slice<Help_Link | $.VarRef<Help_Link> | null>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Links: init?.Links ?? (null! as $.Slice<Help_Link | $.VarRef<Help_Link> | null>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Help {
		return new Help(this, true)
	}

	public __goscriptAssign(source: Help): void {
		const target = this._fields
		const values = source._fields
		target.Links = values.Links
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: Help | $.VarRef<Help> | null = this;
		const _this$: Help = _this == null ? $.pointerTarget<Help>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Help>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple55: any = $.typeAssertTuple<Help | $.VarRef<Help> | null>(that, /* @__PURE__ */ $.pointerType("rpc.Help"))
		let that1: Help | $.VarRef<Help> | null = __goscriptTuple55[0]
		let ok = __goscriptTuple55[1]
		if (!ok) {
			let __goscriptTuple56: any = $.typeAssertTuple<Help>(that, "rpc.Help")
			let that2 = $.varRef(__goscriptTuple56[0])
			let __goscriptShadow24 = __goscriptTuple56[1]
			if (__goscriptShadow24) {
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
		if ($.sliceLen((_this$ as Help).Links) != $.sliceLen($.pointerValue<Help>(that1).Links)) {
			if ($.sliceLen((_this$ as Help).Links) < $.sliceLen($.pointerValue<Help>(that1).Links)) {
				return -1
			}
			return 1
		}
		for (let __goscriptRangeTarget17 = (_this$ as Help).Links, __goscriptRangeWindow17 = $.sliceRange(__goscriptRangeTarget17), i = 0; i < __goscriptRangeWindow17.length; i++) {
			{
				let c = Help_Link.prototype.Compare.call($.arrayIndex((_this$ as Help).Links!, i), $.interfaceValue($.arrayIndex($.pointerValue<Help>(that1).Links!, i), "*rpc.Help_Link", /* @__PURE__ */ $.pointerType("rpc.Help_Link")))
				if (c != 0) {
					return c
				}
			}
		}
		{
			let c = bytes.Compare((_this$ as Help).XXX_unrecognized, $.pointerValue<Help>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_851816e4d6b6361a, $.arrayToSlice<number>([8])]
	}

	public Equal(that: any): boolean {
		const _this: Help | $.VarRef<Help> | null = this;
		const _this$: Help = _this == null ? $.pointerTarget<Help>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Help>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple57: any = $.typeAssertTuple<Help | $.VarRef<Help> | null>(that, /* @__PURE__ */ $.pointerType("rpc.Help"))
		let that1: Help | $.VarRef<Help> | null = __goscriptTuple57[0]
		let ok = __goscriptTuple57[1]
		if (!ok) {
			let __goscriptTuple58: any = $.typeAssertTuple<Help>(that, "rpc.Help")
			let that2 = $.varRef(__goscriptTuple58[0])
			let __goscriptShadow25 = __goscriptTuple58[1]
			if (__goscriptShadow25) {
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
		if ($.sliceLen((_this$ as Help).Links) != $.sliceLen($.pointerValue<Help>(that1).Links)) {
			return false
		}
		for (let __goscriptRangeTarget18 = (_this$ as Help).Links, __goscriptRangeWindow18 = $.sliceRange(__goscriptRangeTarget18), i = 0; i < __goscriptRangeWindow18.length; i++) {
			if (!Help_Link.prototype.Equal.call($.arrayIndex((_this$ as Help).Links!, i), $.interfaceValue($.arrayIndex($.pointerValue<Help>(that1).Links!, i), "*rpc.Help_Link", /* @__PURE__ */ $.pointerType("rpc.Help_Link")))) {
				return false
			}
		}
		if (!bytes.Equal((_this$ as Help).XXX_unrecognized, $.pointerValue<Help>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetLinks(): $.Slice<Help_Link | $.VarRef<Help_Link> | null> {
		const m: Help | $.VarRef<Help> | null = this;
		if (m != null) {
			return $.pointerValue<Help>(m).Links
		}
		return null
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Help | $.VarRef<Help> | null = this;
		const _this$: Help = _this == null ? $.pointerTarget<Help>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Help>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 5, "string")
		s = $.appendOne(s, "&rpc.Help{")
		if ((_this$ as Help).Links != null) {
			s = $.appendOne(s, $.concatString(($.concatString("Links: ", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Help).Links, "[]*rpc.Help_Link", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("rpc.Help_Link")))))), ",\n"))
		}
		if ((_this$ as Help).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Help).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Help | $.VarRef<Help> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Help).Size() : Help.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple59: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Help).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Help.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple59[0]
		err = __goscriptTuple59[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Help | $.VarRef<Help> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Help).Size() : Help.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Help).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Help.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Help | $.VarRef<Help> | null = this;
		const m$: Help = m == null ? $.pointerTarget<Help>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Help>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Help).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Help).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Help).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as Help).Links) > 0) {
			for (let __goscriptSliceWindow15 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as Help).Links) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = Help_Link.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as Help).Links!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintErrorDetails(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow15.backing as any[])[$.windowSlot(__goscriptSliceWindow15, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: Help | $.VarRef<Help> | null = this;
		$.assignStruct($.pointerValue<Help>(m), $.markAsStructValue(new Help()))
	}

	public Size(): number {
		const m: Help | $.VarRef<Help> | null = this;
		let n: number = 0
		const m$: Help = m == null ? $.pointerTarget<Help>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Help>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as Help).Links) > 0) {
			for (let __goscriptRangeTarget19 = (m$ as Help).Links, __goscriptRangeWindow19 = $.sliceRange(__goscriptRangeTarget19), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow19.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow19.backing[__goscriptRangeWindow19.offset + __rangeIndex] as Help_Link | $.VarRef<Help_Link> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as Help_Link).Size() : Help_Link.prototype.Size.call(e))
				n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
			}
		}
		if ((m$ as Help).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Help).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: Help | $.VarRef<Help> | null = this;
		const _this$: Help = _this == null ? $.pointerTarget<Help>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Help>(_this)
		if (_this == null) {
			return "nil"
		}
		let repeatedStringForLinks = "[]*Help_Link{"
		for (let __goscriptRangeTarget20 = (_this$ as Help).Links, __goscriptRangeWindow20 = $.sliceRange(__goscriptRangeTarget20), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow20.length; __rangeIndex++) {
			let f = (__goscriptRangeWindow20.backing[__goscriptRangeWindow20.offset + __rangeIndex] as Help_Link | $.VarRef<Help_Link> | null)
			repeatedStringForLinks = $.concatString(repeatedStringForLinks, $.concatString(strings.Replace(fmt.Sprintf("%v", $.interfaceValue(f, "*rpc.Help_Link", /* @__PURE__ */ $.pointerType("rpc.Help_Link"))), "Help_Link", "Help_Link", 1), ","))
		}
		repeatedStringForLinks = $.concatString(repeatedStringForLinks, "}")
		let s = strings.Join($.arrayToSlice<string>(["&Help{", $.concatString(($.concatString("Links:", repeatedStringForLinks)), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as Help).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Help | $.VarRef<Help> | null = this;
		const m$: Help = m == null ? $.pointerTarget<Help>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Help>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow16 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowErrorDetails
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: Help: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Help: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Links", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Help).Links = $.appendOne((m$ as Help).Links, new Help_Link(), $.appendZeros.nil)
					{
						let err = Help_Link.prototype.Unmarshal.call($.arrayIndex((m$ as Help).Links!, $.sliceLen((m$ as Help).Links) - 1), $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipErrorDetails($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthErrorDetails
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Help).XXX_unrecognized = $.appendSlice((m$ as Help).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Help | $.VarRef<Help> | null = this;
		xxx_messageInfo_Help.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*rpc.Help", /* @__PURE__ */ $.pointerType("rpc.Help")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Help | $.VarRef<Help> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Help.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*rpc.Help", /* @__PURE__ */ $.pointerType("rpc.Help")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Help).MarshalToSizedBuffer(b) : Help.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Help | $.VarRef<Help> | null = this;
		xxx_messageInfo_Help.value.Merge($.interfaceValue<proto.Message | null>(m, "*rpc.Help", /* @__PURE__ */ $.pointerType("rpc.Help")), src)
	}

	public XXX_MessageName(): string {
		return "google.rpc.Help"
	}

	public XXX_Size(): number {
		const m: Help | $.VarRef<Help> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Help).Size() : Help.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Help | $.VarRef<Help> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Help).Unmarshal(b) : Help.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"rpc.Help",
		() => new Help(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetLinks", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("rpc.Help_Link")) }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		Help,
		() => [{ name: "Links", key: "Links", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("rpc.Help_Link")), tag: "protobuf:\"bytes,1,rep,name=links,proto3\" json:\"links,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class Help_Link {
	// Describes what the link offers.
	public get Description(): string {
		return this._fields.Description
	}

	public set Description(value: string) {
		this._fields.Description = value
	}

	// The URL of the link.
	public get Url(): string {
		return this._fields.Url
	}

	public set Url(value: string) {
		this._fields.Url = value
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
		Description: string
		Url: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Description?: string, Url?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Description: init?.Description ?? ("" as string),
			Url: init?.Url ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Help_Link {
		return new Help_Link(this, true)
	}

	public __goscriptAssign(source: Help_Link): void {
		const target = this._fields
		const values = source._fields
		target.Description = values.Description
		target.Url = values.Url
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: Help_Link | $.VarRef<Help_Link> | null = this;
		const _this$: Help_Link = _this == null ? $.pointerTarget<Help_Link>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Help_Link>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple60: any = $.typeAssertTuple<Help_Link | $.VarRef<Help_Link> | null>(that, /* @__PURE__ */ $.pointerType("rpc.Help_Link"))
		let that1: Help_Link | $.VarRef<Help_Link> | null = __goscriptTuple60[0]
		let ok = __goscriptTuple60[1]
		if (!ok) {
			let __goscriptTuple61: any = $.typeAssertTuple<Help_Link>(that, "rpc.Help_Link")
			let that2 = $.varRef(__goscriptTuple61[0])
			let __goscriptShadow26 = __goscriptTuple61[1]
			if (__goscriptShadow26) {
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
		if (!$.stringEqual((_this$ as Help_Link).Description, $.pointerValue<Help_Link>(that1).Description)) {
			if ($.stringCompare((_this$ as Help_Link).Description, $.pointerValue<Help_Link>(that1).Description) < 0) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as Help_Link).Url, $.pointerValue<Help_Link>(that1).Url)) {
			if ($.stringCompare((_this$ as Help_Link).Url, $.pointerValue<Help_Link>(that1).Url) < 0) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as Help_Link).XXX_unrecognized, $.pointerValue<Help_Link>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_851816e4d6b6361a, $.arrayToSlice<number>([8, 0])]
	}

	public Equal(that: any): boolean {
		const _this: Help_Link | $.VarRef<Help_Link> | null = this;
		const _this$: Help_Link = _this == null ? $.pointerTarget<Help_Link>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Help_Link>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple62: any = $.typeAssertTuple<Help_Link | $.VarRef<Help_Link> | null>(that, /* @__PURE__ */ $.pointerType("rpc.Help_Link"))
		let that1: Help_Link | $.VarRef<Help_Link> | null = __goscriptTuple62[0]
		let ok = __goscriptTuple62[1]
		if (!ok) {
			let __goscriptTuple63: any = $.typeAssertTuple<Help_Link>(that, "rpc.Help_Link")
			let that2 = $.varRef(__goscriptTuple63[0])
			let __goscriptShadow27 = __goscriptTuple63[1]
			if (__goscriptShadow27) {
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
		if (!$.stringEqual((_this$ as Help_Link).Description, $.pointerValue<Help_Link>(that1).Description)) {
			return false
		}
		if (!$.stringEqual((_this$ as Help_Link).Url, $.pointerValue<Help_Link>(that1).Url)) {
			return false
		}
		if (!bytes.Equal((_this$ as Help_Link).XXX_unrecognized, $.pointerValue<Help_Link>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetDescription(): string {
		const m: Help_Link | $.VarRef<Help_Link> | null = this;
		if (m != null) {
			return $.pointerValue<Help_Link>(m).Description
		}
		return ""
	}

	public GetUrl(): string {
		const m: Help_Link | $.VarRef<Help_Link> | null = this;
		if (m != null) {
			return $.pointerValue<Help_Link>(m).Url
		}
		return ""
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: Help_Link | $.VarRef<Help_Link> | null = this;
		const _this$: Help_Link = _this == null ? $.pointerTarget<Help_Link>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Help_Link>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 6, "string")
		s = $.appendOne(s, "&rpc.Help_Link{")
		s = $.appendOne(s, $.concatString(($.concatString("Description: ", await fmt.Sprintf("%#v", (_this$ as Help_Link).Description))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Url: ", await fmt.Sprintf("%#v", (_this$ as Help_Link).Url))), ",\n"))
		if ((_this$ as Help_Link).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as Help_Link).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Help_Link | $.VarRef<Help_Link> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Help_Link).Size() : Help_Link.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple64: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Help_Link).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Help_Link.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple64[0]
		err = __goscriptTuple64[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Help_Link | $.VarRef<Help_Link> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Help_Link).Size() : Help_Link.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Help_Link).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Help_Link.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Help_Link | $.VarRef<Help_Link> | null = this;
		const m$: Help_Link = m == null ? $.pointerTarget<Help_Link>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Help_Link>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Help_Link).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Help_Link).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Help_Link).XXX_unrecognized)
		}
		if ($.stringLen((m$ as Help_Link).Url) > 0) {
			i = i - ($.stringLen((m$ as Help_Link).Url))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Help_Link).Url)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as Help_Link).Url)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as Help_Link).Description) > 0) {
			i = i - ($.stringLen((m$ as Help_Link).Description))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Help_Link).Description)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as Help_Link).Description)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: Help_Link | $.VarRef<Help_Link> | null = this;
		$.assignStruct($.pointerValue<Help_Link>(m), $.markAsStructValue(new Help_Link()))
	}

	public Size(): number {
		const m: Help_Link | $.VarRef<Help_Link> | null = this;
		let n: number = 0
		const m$: Help_Link = m == null ? $.pointerTarget<Help_Link>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Help_Link>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as Help_Link).Description)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		l = $.stringLen((m$ as Help_Link).Url)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		if ((m$ as Help_Link).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Help_Link).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: Help_Link | $.VarRef<Help_Link> | null = this;
		const _this$: Help_Link = _this == null ? $.pointerTarget<Help_Link>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Help_Link>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&Help_Link{", $.concatString(($.concatString("Description:", fmt.Sprintf("%v", (_this$ as Help_Link).Description))), ","), $.concatString(($.concatString("Url:", fmt.Sprintf("%v", (_this$ as Help_Link).Url))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as Help_Link).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Help_Link | $.VarRef<Help_Link> | null = this;
		const m$: Help_Link = m == null ? $.pointerTarget<Help_Link>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Help_Link>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow17 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowErrorDetails
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow17.backing as any[])[$.windowSlot(__goscriptSliceWindow17, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: Link: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Link: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Description", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow17.backing as any[])[$.windowSlot(__goscriptSliceWindow17, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Help_Link).Description = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Url", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow17.backing as any[])[$.windowSlot(__goscriptSliceWindow17, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Help_Link).Url = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipErrorDetails($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthErrorDetails
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Help_Link).XXX_unrecognized = $.appendSlice((m$ as Help_Link).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Help_Link | $.VarRef<Help_Link> | null = this;
		xxx_messageInfo_Help_Link.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*rpc.Help_Link", /* @__PURE__ */ $.pointerType("rpc.Help_Link")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Help_Link | $.VarRef<Help_Link> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Help_Link.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*rpc.Help_Link", /* @__PURE__ */ $.pointerType("rpc.Help_Link")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Help_Link).MarshalToSizedBuffer(b) : Help_Link.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Help_Link | $.VarRef<Help_Link> | null = this;
		xxx_messageInfo_Help_Link.value.Merge($.interfaceValue<proto.Message | null>(m, "*rpc.Help_Link", /* @__PURE__ */ $.pointerType("rpc.Help_Link")), src)
	}

	public XXX_MessageName(): string {
		return "google.rpc.Help.Link"
	}

	public XXX_Size(): number {
		const m: Help_Link | $.VarRef<Help_Link> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Help_Link).Size() : Help_Link.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Help_Link | $.VarRef<Help_Link> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Help_Link).Unmarshal(b) : Help_Link.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"rpc.Help_Link",
		() => new Help_Link(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetDescription", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetUrl", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		Help_Link,
		() => [{ name: "Description", key: "Description", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=description,proto3\" json:\"description,omitempty\"" }, { name: "Url", key: "Url", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=url,proto3\" json:\"url,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class LocalizedMessage {
	// The locale used following the specification defined at
	// http://www.rfc-editor.org/rfc/bcp/bcp47.txt.
	// Examples are: "en-US", "fr-CH", "es-MX"
	public get Locale(): string {
		return this._fields.Locale
	}

	public set Locale(value: string) {
		this._fields.Locale = value
	}

	// The localized error message in the above locale.
	public get Message(): string {
		return this._fields.Message
	}

	public set Message(value: string) {
		this._fields.Message = value
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
		Locale: string
		Message: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Locale?: string, Message?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Locale: init?.Locale ?? ("" as string),
			Message: init?.Message ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LocalizedMessage {
		return new LocalizedMessage(this, true)
	}

	public __goscriptAssign(source: LocalizedMessage): void {
		const target = this._fields
		const values = source._fields
		target.Locale = values.Locale
		target.Message = values.Message
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Compare(that: any): number {
		const _this: LocalizedMessage | $.VarRef<LocalizedMessage> | null = this;
		const _this$: LocalizedMessage = _this == null ? $.pointerTarget<LocalizedMessage>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<LocalizedMessage>(_this)
		if (that == null) {
			if (_this == null) {
				return 0
			}
			return 1
		}

		let __goscriptTuple65: any = $.typeAssertTuple<LocalizedMessage | $.VarRef<LocalizedMessage> | null>(that, /* @__PURE__ */ $.pointerType("rpc.LocalizedMessage"))
		let that1: LocalizedMessage | $.VarRef<LocalizedMessage> | null = __goscriptTuple65[0]
		let ok = __goscriptTuple65[1]
		if (!ok) {
			let __goscriptTuple66: any = $.typeAssertTuple<LocalizedMessage>(that, "rpc.LocalizedMessage")
			let that2 = $.varRef(__goscriptTuple66[0])
			let __goscriptShadow28 = __goscriptTuple66[1]
			if (__goscriptShadow28) {
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
		if (!$.stringEqual((_this$ as LocalizedMessage).Locale, $.pointerValue<LocalizedMessage>(that1).Locale)) {
			if ($.stringCompare((_this$ as LocalizedMessage).Locale, $.pointerValue<LocalizedMessage>(that1).Locale) < 0) {
				return -1
			}
			return 1
		}
		if (!$.stringEqual((_this$ as LocalizedMessage).Message, $.pointerValue<LocalizedMessage>(that1).Message)) {
			if ($.stringCompare((_this$ as LocalizedMessage).Message, $.pointerValue<LocalizedMessage>(that1).Message) < 0) {
				return -1
			}
			return 1
		}
		{
			let c = bytes.Compare((_this$ as LocalizedMessage).XXX_unrecognized, $.pointerValue<LocalizedMessage>(that1).XXX_unrecognized)
			if (c != 0) {
				return c
			}
		}
		return 0
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_851816e4d6b6361a, $.arrayToSlice<number>([9])]
	}

	public Equal(that: any): boolean {
		const _this: LocalizedMessage | $.VarRef<LocalizedMessage> | null = this;
		const _this$: LocalizedMessage = _this == null ? $.pointerTarget<LocalizedMessage>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<LocalizedMessage>(_this)
		if (that == null) {
			return _this == null
		}

		let __goscriptTuple67: any = $.typeAssertTuple<LocalizedMessage | $.VarRef<LocalizedMessage> | null>(that, /* @__PURE__ */ $.pointerType("rpc.LocalizedMessage"))
		let that1: LocalizedMessage | $.VarRef<LocalizedMessage> | null = __goscriptTuple67[0]
		let ok = __goscriptTuple67[1]
		if (!ok) {
			let __goscriptTuple68: any = $.typeAssertTuple<LocalizedMessage>(that, "rpc.LocalizedMessage")
			let that2 = $.varRef(__goscriptTuple68[0])
			let __goscriptShadow29 = __goscriptTuple68[1]
			if (__goscriptShadow29) {
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
		if (!$.stringEqual((_this$ as LocalizedMessage).Locale, $.pointerValue<LocalizedMessage>(that1).Locale)) {
			return false
		}
		if (!$.stringEqual((_this$ as LocalizedMessage).Message, $.pointerValue<LocalizedMessage>(that1).Message)) {
			return false
		}
		if (!bytes.Equal((_this$ as LocalizedMessage).XXX_unrecognized, $.pointerValue<LocalizedMessage>(that1).XXX_unrecognized)) {
			return false
		}
		return true
	}

	public GetLocale(): string {
		const m: LocalizedMessage | $.VarRef<LocalizedMessage> | null = this;
		if (m != null) {
			return $.pointerValue<LocalizedMessage>(m).Locale
		}
		return ""
	}

	public GetMessage(): string {
		const m: LocalizedMessage | $.VarRef<LocalizedMessage> | null = this;
		if (m != null) {
			return $.pointerValue<LocalizedMessage>(m).Message
		}
		return ""
	}

	public async GoString(): globalThis.Promise<string> {
		const _this: LocalizedMessage | $.VarRef<LocalizedMessage> | null = this;
		const _this$: LocalizedMessage = _this == null ? $.pointerTarget<LocalizedMessage>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<LocalizedMessage>(_this)
		if (_this == null) {
			return "nil"
		}
		let s: $.Slice<string> = $.makeSlice<string>(0, 6, "string")
		s = $.appendOne(s, "&rpc.LocalizedMessage{")
		s = $.appendOne(s, $.concatString(($.concatString("Locale: ", await fmt.Sprintf("%#v", (_this$ as LocalizedMessage).Locale))), ",\n"))
		s = $.appendOne(s, $.concatString(($.concatString("Message: ", await fmt.Sprintf("%#v", (_this$ as LocalizedMessage).Message))), ",\n"))
		if ((_this$ as LocalizedMessage).XXX_unrecognized != null) {
			s = $.appendOne(s, $.concatString(($.concatString("XXX_unrecognized:", await fmt.Sprintf("%#v", $.interfaceValue((_this$ as LocalizedMessage).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ",\n"))
		}
		s = $.appendOne(s, "}")
		return strings.Join(s, "")
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: LocalizedMessage | $.VarRef<LocalizedMessage> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as LocalizedMessage).Size() : LocalizedMessage.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple69: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as LocalizedMessage).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : LocalizedMessage.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple69[0]
		err = __goscriptTuple69[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: LocalizedMessage | $.VarRef<LocalizedMessage> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as LocalizedMessage).Size() : LocalizedMessage.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as LocalizedMessage).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : LocalizedMessage.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: LocalizedMessage | $.VarRef<LocalizedMessage> | null = this;
		const m$: LocalizedMessage = m == null ? $.pointerTarget<LocalizedMessage>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<LocalizedMessage>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as LocalizedMessage).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as LocalizedMessage).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as LocalizedMessage).XXX_unrecognized)
		}
		if ($.stringLen((m$ as LocalizedMessage).Message) > 0) {
			i = i - ($.stringLen((m$ as LocalizedMessage).Message))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as LocalizedMessage).Message)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as LocalizedMessage).Message)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as LocalizedMessage).Locale) > 0) {
			i = i - ($.stringLen((m$ as LocalizedMessage).Locale))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as LocalizedMessage).Locale)
			i = encodeVarintErrorDetails(dAtA, i, $.uint64($.stringLen((m$ as LocalizedMessage).Locale)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: LocalizedMessage | $.VarRef<LocalizedMessage> | null = this;
		$.assignStruct($.pointerValue<LocalizedMessage>(m), $.markAsStructValue(new LocalizedMessage()))
	}

	public Size(): number {
		const m: LocalizedMessage | $.VarRef<LocalizedMessage> | null = this;
		let n: number = 0
		const m$: LocalizedMessage = m == null ? $.pointerTarget<LocalizedMessage>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<LocalizedMessage>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as LocalizedMessage).Locale)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		l = $.stringLen((m$ as LocalizedMessage).Message)
		if (l > 0) {
			n = n + ((1 + l) + sovErrorDetails($.uint64(l)))
		}
		if ((m$ as LocalizedMessage).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as LocalizedMessage).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const _this: LocalizedMessage | $.VarRef<LocalizedMessage> | null = this;
		const _this$: LocalizedMessage = _this == null ? $.pointerTarget<LocalizedMessage>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<LocalizedMessage>(_this)
		if (_this == null) {
			return "nil"
		}
		let s = strings.Join($.arrayToSlice<string>(["&LocalizedMessage{", $.concatString(($.concatString("Locale:", fmt.Sprintf("%v", (_this$ as LocalizedMessage).Locale))), ","), $.concatString(($.concatString("Message:", fmt.Sprintf("%v", (_this$ as LocalizedMessage).Message))), ","), $.concatString(($.concatString("XXX_unrecognized:", fmt.Sprintf("%v", $.interfaceValue((_this$ as LocalizedMessage).XXX_unrecognized, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))), ","), "}"]), "")
		return s
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: LocalizedMessage | $.VarRef<LocalizedMessage> | null = this;
		const m$: LocalizedMessage = m == null ? $.pointerTarget<LocalizedMessage>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<LocalizedMessage>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow18 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowErrorDetails
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow18.backing as any[])[$.windowSlot(__goscriptSliceWindow18, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: LocalizedMessage: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: LocalizedMessage: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Locale", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow18.backing as any[])[$.windowSlot(__goscriptSliceWindow18, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as LocalizedMessage).Locale = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
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
							return ErrIntOverflowErrorDetails
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow18.backing as any[])[$.windowSlot(__goscriptSliceWindow18, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthErrorDetails
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthErrorDetails
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as LocalizedMessage).Message = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipErrorDetails($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthErrorDetails
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as LocalizedMessage).XXX_unrecognized = $.appendSlice((m$ as LocalizedMessage).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: LocalizedMessage | $.VarRef<LocalizedMessage> | null = this;
		xxx_messageInfo_LocalizedMessage.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*rpc.LocalizedMessage", /* @__PURE__ */ $.pointerType("rpc.LocalizedMessage")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: LocalizedMessage | $.VarRef<LocalizedMessage> | null = this;
		if (deterministic) {
			return xxx_messageInfo_LocalizedMessage.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*rpc.LocalizedMessage", /* @__PURE__ */ $.pointerType("rpc.LocalizedMessage")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as LocalizedMessage).MarshalToSizedBuffer(b) : LocalizedMessage.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: LocalizedMessage | $.VarRef<LocalizedMessage> | null = this;
		xxx_messageInfo_LocalizedMessage.value.Merge($.interfaceValue<proto.Message | null>(m, "*rpc.LocalizedMessage", /* @__PURE__ */ $.pointerType("rpc.LocalizedMessage")), src)
	}

	public XXX_MessageName(): string {
		return "google.rpc.LocalizedMessage"
	}

	public XXX_Size(): number {
		const m: LocalizedMessage | $.VarRef<LocalizedMessage> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as LocalizedMessage).Size() : LocalizedMessage.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: LocalizedMessage | $.VarRef<LocalizedMessage> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as LocalizedMessage).Unmarshal(b) : LocalizedMessage.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"rpc.LocalizedMessage",
		() => new LocalizedMessage(),
		() => [{ name: "Compare", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Equal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetLocale", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetMessage", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GoString", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_MessageName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		LocalizedMessage,
		() => [{ name: "Locale", key: "Locale", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=locale,proto3\" json:\"locale,omitempty\"" }, { name: "Message", key: "Message", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=message,proto3\" json:\"message,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export let xxx_messageInfo_RetryInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RetryInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RetryInfo.value, __goscriptValue)
}

export let xxx_messageInfo_DebugInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DebugInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DebugInfo.value, __goscriptValue)
}

export let xxx_messageInfo_QuotaFailure: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_QuotaFailure(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_QuotaFailure.value, __goscriptValue)
}

export let xxx_messageInfo_QuotaFailure_Violation: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_QuotaFailure_Violation(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_QuotaFailure_Violation.value, __goscriptValue)
}

export let xxx_messageInfo_ErrorInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ErrorInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ErrorInfo.value, __goscriptValue)
}

export let xxx_messageInfo_PreconditionFailure: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_PreconditionFailure(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_PreconditionFailure.value, __goscriptValue)
}

export let xxx_messageInfo_PreconditionFailure_Violation: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_PreconditionFailure_Violation(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_PreconditionFailure_Violation.value, __goscriptValue)
}

export let xxx_messageInfo_BadRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_BadRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_BadRequest.value, __goscriptValue)
}

export let xxx_messageInfo_BadRequest_FieldViolation: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_BadRequest_FieldViolation(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_BadRequest_FieldViolation.value, __goscriptValue)
}

export let xxx_messageInfo_RequestInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RequestInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RequestInfo.value, __goscriptValue)
}

export let xxx_messageInfo_ResourceInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ResourceInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ResourceInfo.value, __goscriptValue)
}

export let xxx_messageInfo_Help: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Help(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Help.value, __goscriptValue)
}

export let xxx_messageInfo_Help_Link: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Help_Link(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Help_Link.value, __goscriptValue)
}

export let xxx_messageInfo_LocalizedMessage: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_LocalizedMessage(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_LocalizedMessage.value, __goscriptValue)
}

function __goscriptInit0(): void {
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*rpc.RetryInfo", /* @__PURE__ */ $.pointerType("rpc.RetryInfo")), "google.rpc.RetryInfo")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*rpc.DebugInfo", /* @__PURE__ */ $.pointerType("rpc.DebugInfo")), "google.rpc.DebugInfo")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*rpc.QuotaFailure", /* @__PURE__ */ $.pointerType("rpc.QuotaFailure")), "google.rpc.QuotaFailure")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*rpc.QuotaFailure_Violation", /* @__PURE__ */ $.pointerType("rpc.QuotaFailure_Violation")), "google.rpc.QuotaFailure.Violation")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*rpc.ErrorInfo", /* @__PURE__ */ $.pointerType("rpc.ErrorInfo")), "google.rpc.ErrorInfo")
	proto.RegisterMapType($.interfaceValue(null, "map[string]string", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))), "google.rpc.ErrorInfo.MetadataEntry")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*rpc.PreconditionFailure", /* @__PURE__ */ $.pointerType("rpc.PreconditionFailure")), "google.rpc.PreconditionFailure")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*rpc.PreconditionFailure_Violation", /* @__PURE__ */ $.pointerType("rpc.PreconditionFailure_Violation")), "google.rpc.PreconditionFailure.Violation")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*rpc.BadRequest", /* @__PURE__ */ $.pointerType("rpc.BadRequest")), "google.rpc.BadRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*rpc.BadRequest_FieldViolation", /* @__PURE__ */ $.pointerType("rpc.BadRequest_FieldViolation")), "google.rpc.BadRequest.FieldViolation")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*rpc.RequestInfo", /* @__PURE__ */ $.pointerType("rpc.RequestInfo")), "google.rpc.RequestInfo")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*rpc.ResourceInfo", /* @__PURE__ */ $.pointerType("rpc.ResourceInfo")), "google.rpc.ResourceInfo")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*rpc.Help", /* @__PURE__ */ $.pointerType("rpc.Help")), "google.rpc.Help")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*rpc.Help_Link", /* @__PURE__ */ $.pointerType("rpc.Help_Link")), "google.rpc.Help.Link")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*rpc.LocalizedMessage", /* @__PURE__ */ $.pointerType("rpc.LocalizedMessage")), "google.rpc.LocalizedMessage")
}

function __goscriptInit1(): void {
	proto.RegisterFile("google/rpc/error_details.proto", fileDescriptor_851816e4d6b6361a)
}

export let fileDescriptor_851816e4d6b6361a: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 140, 84, 63, 111, 211, 78, 24, 238, 37, 105, 127, 63, 191, 73, 75, 49, 80, 133, 72, 88, 193, 21, 82, 17, 146, 43, 149, 5, 149, 1, 41, 164, 255, 164, 22, 130, 133, 24, 96, 136, 46, 246, 155, 232, 136, 227, 11, 103, 187, 40, 76, 124, 4, 118, 54, 166, 126, 5, 6, 246, 142, 29, 25, 73, 186, 48, 118, 100, 68, 119, 62, 167, 110, 83, 16, 219, 61, 239, 61, 247, 220, 251, 60, 122, 239, 192, 234, 113, 222, 11, 112, 93, 12, 189, 117, 20, 130, 139, 182, 143, 49, 101, 65, 228, 12, 5, 143, 185, 9, 233, 190, 35, 134, 94, 45, 227, 170, 157, 78, 210, 93, 247, 19, 65, 99, 198, 195, 148, 107, 239, 128, 225, 98, 44, 70, 123, 97, 151, 155, 155, 80, 22, 18, 180, 125, 12, 232, 168, 74, 234, 100, 173, 188, 113, 219, 209, 114, 153, 132, 211, 212, 18, 46, 40, 118, 83, 146, 237, 93, 48, 154, 216, 73, 122, 74, 104, 21, 22, 163, 152, 122, 253, 54, 134, 177, 96, 24, 85, 73, 189, 184, 102, 184, 21, 85, 220, 74, 107, 230, 10, 44, 164, 125, 87, 11, 117, 178, 102, 184, 26, 217, 159, 9, 84, 94, 36, 60, 166, 219, 148, 5, 137, 64, 179, 1, 112, 200, 120, 160, 238, 76, 165, 202, 27, 182, 115, 110, 210, 201, 179, 157, 87, 25, 213, 205, 157, 170, 237, 128, 49, 221, 48, 171, 240, 95, 148, 116, 222, 162, 23, 43, 143, 134, 155, 65, 179, 14, 101, 31, 35, 79, 176, 161, 36, 234, 198, 242, 37, 251, 43, 1, 99, 75, 134, 174, 140, 174, 192, 130, 64, 26, 241, 80, 11, 105, 164, 188, 241, 1, 101, 225, 212, 155, 66, 230, 19, 248, 127, 128, 49, 245, 105, 76, 171, 69, 101, 100, 53, 111, 100, 42, 236, 28, 104, 150, 12, 107, 228, 78, 15, 213, 30, 195, 226, 133, 45, 115, 25, 138, 125, 28, 233, 235, 229, 210, 188, 9, 243, 135, 52, 72, 80, 95, 157, 130, 205, 194, 35, 98, 127, 35, 112, 163, 37, 208, 227, 161, 207, 164, 153, 44, 224, 189, 43, 2, 190, 159, 239, 235, 138, 67, 127, 200, 249, 77, 62, 103, 19, 74, 241, 104, 136, 186, 57, 181, 206, 103, 95, 248, 107, 246, 197, 217, 236, 143, 8, 64, 131, 250, 46, 190, 75, 48, 138, 205, 22, 44, 119, 25, 6, 126, 123, 166, 249, 123, 249, 230, 207, 79, 56, 219, 146, 126, 222, 248, 181, 238, 5, 28, 213, 118, 97, 233, 34, 69, 134, 169, 72, 218, 67, 10, 254, 97, 76, 158, 67, 89, 95, 170, 230, 228, 14, 128, 72, 97, 155, 101, 90, 134, 174, 236, 249, 230, 93, 168, 68, 40, 14, 89, 216, 107, 171, 209, 208, 130, 186, 214, 164, 49, 181, 63, 17, 168, 184, 24, 241, 68, 120, 152, 189, 49, 161, 113, 59, 151, 114, 37, 43, 190, 148, 105, 231, 73, 33, 29, 100, 51, 49, 37, 61, 163, 3, 148, 30, 249, 251, 16, 133, 142, 60, 5, 151, 61, 150, 102, 61, 114, 40, 237, 98, 48, 52, 31, 192, 124, 192, 194, 126, 22, 254, 173, 124, 248, 146, 224, 236, 179, 176, 239, 166, 156, 218, 38, 148, 36, 188, 44, 79, 102, 228, 229, 100, 39, 34, 251, 28, 228, 210, 110, 194, 242, 62, 247, 104, 192, 62, 160, 127, 128, 81, 68, 123, 40, 95, 90, 32, 107, 153, 127, 141, 228, 156, 13, 82, 74, 54, 103, 26, 54, 252, 147, 177, 53, 247, 125, 108, 205, 157, 141, 45, 242, 107, 108, 145, 143, 19, 139, 28, 77, 44, 114, 60, 177, 200, 201, 196, 34, 63, 38, 22, 249, 57, 177, 230, 206, 100, 253, 212, 34, 199, 167, 22, 129, 37, 143, 15, 114, 198, 26, 215, 213, 91, 109, 166, 31, 111, 75, 126, 141, 45, 242, 186, 40, 134, 222, 151, 66, 209, 109, 61, 237, 44, 168, 239, 242, 225, 239, 0, 0, 0, 255, 255, 148, 198, 183, 221, 173, 5, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_851816e4d6b6361a(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_851816e4d6b6361a = __goscriptValue
}

export async function valueToGoStringErrorDetails(v: any, typ: string): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}

export function encodeVarintErrorDetails(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovErrorDetails(v))
	let base = offset
	for (let __goscriptSliceWindow19 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow19.backing as any[])[$.windowSlot(__goscriptSliceWindow19, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export async function NewPopulatedRetryInfo(r: randyErrorDetails | null, easy: boolean): globalThis.Promise<RetryInfo | $.VarRef<RetryInfo> | null> {
	let _this: RetryInfo | $.VarRef<RetryInfo> | null = new RetryInfo()
	let _this$: RetryInfo = _this == null ? $.pointerTarget<RetryInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<RetryInfo>(_this)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		;(_this$ as RetryInfo).RetryDelay = types.NewPopulatedDuration((r as any), easy)
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as RetryInfo).XXX_unrecognized = await randUnrecognizedErrorDetails(r, 2)
	}
	return _this
}

export async function NewPopulatedDebugInfo(r: randyErrorDetails | null, easy: boolean): globalThis.Promise<DebugInfo | $.VarRef<DebugInfo> | null> {
	let _this: DebugInfo | $.VarRef<DebugInfo> | null = new DebugInfo()
	let _this$: DebugInfo = _this == null ? $.pointerTarget<DebugInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<DebugInfo>(_this)
	let v1 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
	;(_this$ as DebugInfo).StackEntries = $.makeSlice<string>(v1, undefined, "string")
	for (let i = 0; i < v1; i++) {
		$.sliceElems((_this$ as DebugInfo).StackEntries!)[$.sliceSlot((_this$ as DebugInfo).StackEntries!, i)] = await randStringErrorDetails(r)
	}
	;(_this$ as DebugInfo).Detail = await randStringErrorDetails(r)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as DebugInfo).XXX_unrecognized = await randUnrecognizedErrorDetails(r, 3)
	}
	return _this
}

export async function NewPopulatedQuotaFailure(r: randyErrorDetails | null, easy: boolean): globalThis.Promise<QuotaFailure | $.VarRef<QuotaFailure> | null> {
	let _this: QuotaFailure | $.VarRef<QuotaFailure> | null = new QuotaFailure()
	let _this$: QuotaFailure = _this == null ? $.pointerTarget<QuotaFailure>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<QuotaFailure>(_this)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		let v2 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as QuotaFailure).Violations = $.makeSlice<QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null>(v2)
		for (let i = 0; i < v2; i++) {
			$.sliceElems((_this$ as QuotaFailure).Violations!)[$.sliceSlot((_this$ as QuotaFailure).Violations!, i)] = await NewPopulatedQuotaFailure_Violation(r, easy)
		}
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as QuotaFailure).XXX_unrecognized = await randUnrecognizedErrorDetails(r, 2)
	}
	return _this
}

export async function NewPopulatedQuotaFailure_Violation(r: randyErrorDetails | null, easy: boolean): globalThis.Promise<QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null> {
	let _this: QuotaFailure_Violation | $.VarRef<QuotaFailure_Violation> | null = new QuotaFailure_Violation()
	let _this$: QuotaFailure_Violation = _this == null ? $.pointerTarget<QuotaFailure_Violation>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<QuotaFailure_Violation>(_this);
	;(_this$ as QuotaFailure_Violation).Subject = await randStringErrorDetails(r);
	;(_this$ as QuotaFailure_Violation).Description = await randStringErrorDetails(r)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as QuotaFailure_Violation).XXX_unrecognized = await randUnrecognizedErrorDetails(r, 3)
	}
	return _this
}

export async function NewPopulatedErrorInfo(r: randyErrorDetails | null, easy: boolean): globalThis.Promise<ErrorInfo | $.VarRef<ErrorInfo> | null> {
	let _this: ErrorInfo | $.VarRef<ErrorInfo> | null = new ErrorInfo()
	let _this$: ErrorInfo = _this == null ? $.pointerTarget<ErrorInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<ErrorInfo>(_this);
	;(_this$ as ErrorInfo).Reason = await randStringErrorDetails(r);
	;(_this$ as ErrorInfo).Domain = await randStringErrorDetails(r)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		let v3 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as ErrorInfo).Metadata = $.makeMap<string, string>()
		for (let i = 0; i < v3; i++) {
			$.mapSet((_this$ as ErrorInfo).Metadata, await randStringErrorDetails(r), await randStringErrorDetails(r))
		}
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as ErrorInfo).XXX_unrecognized = await randUnrecognizedErrorDetails(r, 4)
	}
	return _this
}

export async function NewPopulatedPreconditionFailure(r: randyErrorDetails | null, easy: boolean): globalThis.Promise<PreconditionFailure | $.VarRef<PreconditionFailure> | null> {
	let _this: PreconditionFailure | $.VarRef<PreconditionFailure> | null = new PreconditionFailure()
	let _this$: PreconditionFailure = _this == null ? $.pointerTarget<PreconditionFailure>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<PreconditionFailure>(_this)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		let v4 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as PreconditionFailure).Violations = $.makeSlice<PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null>(v4)
		for (let i = 0; i < v4; i++) {
			$.sliceElems((_this$ as PreconditionFailure).Violations!)[$.sliceSlot((_this$ as PreconditionFailure).Violations!, i)] = await NewPopulatedPreconditionFailure_Violation(r, easy)
		}
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as PreconditionFailure).XXX_unrecognized = await randUnrecognizedErrorDetails(r, 2)
	}
	return _this
}

export async function NewPopulatedPreconditionFailure_Violation(r: randyErrorDetails | null, easy: boolean): globalThis.Promise<PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null> {
	let _this: PreconditionFailure_Violation | $.VarRef<PreconditionFailure_Violation> | null = new PreconditionFailure_Violation()
	let _this$: PreconditionFailure_Violation = _this == null ? $.pointerTarget<PreconditionFailure_Violation>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<PreconditionFailure_Violation>(_this);
	;(_this$ as PreconditionFailure_Violation).Type = await randStringErrorDetails(r);
	;(_this$ as PreconditionFailure_Violation).Subject = await randStringErrorDetails(r);
	;(_this$ as PreconditionFailure_Violation).Description = await randStringErrorDetails(r)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as PreconditionFailure_Violation).XXX_unrecognized = await randUnrecognizedErrorDetails(r, 4)
	}
	return _this
}

export async function NewPopulatedBadRequest(r: randyErrorDetails | null, easy: boolean): globalThis.Promise<BadRequest | $.VarRef<BadRequest> | null> {
	let _this: BadRequest | $.VarRef<BadRequest> | null = new BadRequest()
	let _this$: BadRequest = _this == null ? $.pointerTarget<BadRequest>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BadRequest>(_this)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		let v5 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as BadRequest).FieldViolations = $.makeSlice<BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null>(v5)
		for (let i = 0; i < v5; i++) {
			$.sliceElems((_this$ as BadRequest).FieldViolations!)[$.sliceSlot((_this$ as BadRequest).FieldViolations!, i)] = await NewPopulatedBadRequest_FieldViolation(r, easy)
		}
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as BadRequest).XXX_unrecognized = await randUnrecognizedErrorDetails(r, 2)
	}
	return _this
}

export async function NewPopulatedBadRequest_FieldViolation(r: randyErrorDetails | null, easy: boolean): globalThis.Promise<BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null> {
	let _this: BadRequest_FieldViolation | $.VarRef<BadRequest_FieldViolation> | null = new BadRequest_FieldViolation()
	let _this$: BadRequest_FieldViolation = _this == null ? $.pointerTarget<BadRequest_FieldViolation>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<BadRequest_FieldViolation>(_this);
	;(_this$ as BadRequest_FieldViolation).Field = await randStringErrorDetails(r);
	;(_this$ as BadRequest_FieldViolation).Description = await randStringErrorDetails(r)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as BadRequest_FieldViolation).XXX_unrecognized = await randUnrecognizedErrorDetails(r, 3)
	}
	return _this
}

export async function NewPopulatedRequestInfo(r: randyErrorDetails | null, easy: boolean): globalThis.Promise<RequestInfo | $.VarRef<RequestInfo> | null> {
	let _this: RequestInfo | $.VarRef<RequestInfo> | null = new RequestInfo()
	let _this$: RequestInfo = _this == null ? $.pointerTarget<RequestInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<RequestInfo>(_this);
	;(_this$ as RequestInfo).RequestId = await randStringErrorDetails(r);
	;(_this$ as RequestInfo).ServingData = await randStringErrorDetails(r)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as RequestInfo).XXX_unrecognized = await randUnrecognizedErrorDetails(r, 3)
	}
	return _this
}

export async function NewPopulatedResourceInfo(r: randyErrorDetails | null, easy: boolean): globalThis.Promise<ResourceInfo | $.VarRef<ResourceInfo> | null> {
	let _this: ResourceInfo | $.VarRef<ResourceInfo> | null = new ResourceInfo()
	let _this$: ResourceInfo = _this == null ? $.pointerTarget<ResourceInfo>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<ResourceInfo>(_this);
	;(_this$ as ResourceInfo).ResourceType = await randStringErrorDetails(r);
	;(_this$ as ResourceInfo).ResourceName = await randStringErrorDetails(r);
	;(_this$ as ResourceInfo).Owner = await randStringErrorDetails(r);
	;(_this$ as ResourceInfo).Description = await randStringErrorDetails(r)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as ResourceInfo).XXX_unrecognized = await randUnrecognizedErrorDetails(r, 5)
	}
	return _this
}

export async function NewPopulatedHelp(r: randyErrorDetails | null, easy: boolean): globalThis.Promise<Help | $.VarRef<Help> | null> {
	let _this: Help | $.VarRef<Help> | null = new Help()
	let _this$: Help = _this == null ? $.pointerTarget<Help>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Help>(_this)
	if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0) {
		let v6 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);
		;(_this$ as Help).Links = $.makeSlice<Help_Link | $.VarRef<Help_Link> | null>(v6)
		for (let i = 0; i < v6; i++) {
			$.sliceElems((_this$ as Help).Links!)[$.sliceSlot((_this$ as Help).Links!, i)] = await NewPopulatedHelp_Link(r, easy)
		}
	}
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as Help).XXX_unrecognized = await randUnrecognizedErrorDetails(r, 2)
	}
	return _this
}

export async function NewPopulatedHelp_Link(r: randyErrorDetails | null, easy: boolean): globalThis.Promise<Help_Link | $.VarRef<Help_Link> | null> {
	let _this: Help_Link | $.VarRef<Help_Link> | null = new Help_Link()
	let _this$: Help_Link = _this == null ? $.pointerTarget<Help_Link>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<Help_Link>(_this);
	;(_this$ as Help_Link).Description = await randStringErrorDetails(r);
	;(_this$ as Help_Link).Url = await randStringErrorDetails(r)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as Help_Link).XXX_unrecognized = await randUnrecognizedErrorDetails(r, 3)
	}
	return _this
}

export async function NewPopulatedLocalizedMessage(r: randyErrorDetails | null, easy: boolean): globalThis.Promise<LocalizedMessage | $.VarRef<LocalizedMessage> | null> {
	let _this: LocalizedMessage | $.VarRef<LocalizedMessage> | null = new LocalizedMessage()
	let _this$: LocalizedMessage = _this == null ? $.pointerTarget<LocalizedMessage>(_this) : (_this as any).__isVarRef === true ? (_this as any).value : (_this as any).__goValue === undefined ? (_this as any) : $.pointerTarget<LocalizedMessage>(_this);
	;(_this$ as LocalizedMessage).Locale = await randStringErrorDetails(r);
	;(_this$ as LocalizedMessage).Message = await randStringErrorDetails(r)
	if (!easy && ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(10), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 0)) {
		;(_this$ as LocalizedMessage).XXX_unrecognized = await randUnrecognizedErrorDetails(r, 3)
	}
	return _this
}

export async function randUTF8RuneErrorDetails(r: randyErrorDetails | null): globalThis.Promise<number> {
	let ru = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(62), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (ru < 10) {
		return $.int(ru + 48, 32)
	} else {
		if (ru < 36) {
			return $.int(ru + 55, 32)
		}
	}
	return $.int(ru + 61, 32)
}

export async function randStringErrorDetails(r: randyErrorDetails | null): globalThis.Promise<string> {
	let v7 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let tmps: $.Slice<number> = $.makeSlice<number>(v7, undefined, "number")
	for (let __goscriptSliceWindow20 = $.sliceRange(tmps), i = 0; i < v7; i++) {
		;(__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, i)] = await randUTF8RuneErrorDetails(r)
	}
	return $.runesToString(tmps)
}

export async function randUnrecognizedErrorDetails(r: randyErrorDetails | null, maxFieldNumber: number): globalThis.Promise<$.Slice<number>> {
	let dAtA: $.Slice<number> = null! as $.Slice<number>
	let l = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(5), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	for (let i = 0; i < l; i++) {
		let wire = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(4), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (wire == 3) {
			wire = 5
		}
		let fieldNumber = maxFieldNumber + (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		dAtA = await randFieldErrorDetails(dAtA, r, fieldNumber, wire)
	}
	return dAtA
}

export async function randFieldErrorDetails(dAtA: $.Slice<number>, r: randyErrorDetails | null, fieldNumber: number, wire: number): globalThis.Promise<$.Slice<number>> {
	let key = $.uint(((($.uint(fieldNumber, 32) << 3) >>> 0)) | $.uint(wire, 32), 32)
	switch (wire) {
		case 0:
		{
			dAtA = encodeVarintPopulateErrorDetails(dAtA, $.uint64(key))
			let v8 = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Int63(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if ((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(2), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 0) {
				v8 = $.int64Mul(v8, -1n)
			}
			dAtA = encodeVarintPopulateErrorDetails(dAtA, $.uint64(v8))
			break
		}
		case 1:
		{
			dAtA = encodeVarintPopulateErrorDetails(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
		case 2:
		{
			dAtA = encodeVarintPopulateErrorDetails(dAtA, $.uint64(key))
			let ll = (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(100), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			dAtA = encodeVarintPopulateErrorDetails(dAtA, $.uint64(ll))
			for (let j = 0; j < ll; j++) {
				dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			}
			break
		}
		default:
		{
			dAtA = encodeVarintPopulateErrorDetails(dAtA, $.uint64(key))
			dAtA = $.append(dAtA, $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.uint($.uint((__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<randyErrorDetails, null>) : $.pointerValue<Exclude<randyErrorDetails, null>>(r)).Intn(256), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8), 8), $.byteSliceHint)
			break
		}
	}
	return dAtA
}

export function encodeVarintPopulateErrorDetails(dAtA: $.Slice<number>, v: bigint): $.Slice<number> {
	while (v >= 128n) {
		dAtA = $.append(dAtA, $.uint($.uint($.uint64Or(($.uint64And($.uint64(v), 127n)), 128n), 8), 8), $.byteSliceHint)
		v = $.uint64Shr(v, 7n)
	}
	dAtA = $.append(dAtA, $.uint($.uint(v, 8), 8), $.byteSliceHint)
	return dAtA
}

export function sovErrorDetails(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozErrorDetails(x: bigint): number {
	let n: number = 0
	return sovErrorDetails($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export async function valueToStringErrorDetails(v: any): globalThis.Promise<string> {
	let rv = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(v)))
	if ($.markAsStructValue($.cloneStructValue(rv)).IsNil()) {
		return "nil"
	}
	let pv = $.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(rv))))).Interface()
	return fmt.Sprintf("*%v", pv)
}

export function skipErrorDetails(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow21 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowErrorDetails]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow21.backing as any[])[$.windowSlot(__goscriptSliceWindow21, iNdEx)] as number)
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
						return [0, ErrIntOverflowErrorDetails]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow21.backing as any[])[$.windowSlot(__goscriptSliceWindow21, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowErrorDetails]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow21.backing as any[])[$.windowSlot(__goscriptSliceWindow21, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthErrorDetails]
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
					return [0, ErrUnexpectedEndOfGroupErrorDetails]
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
			return [0, ErrInvalidLengthErrorDetails]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthErrorDetails: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthErrorDetails(__goscriptValue: $.GoError): void {
	ErrInvalidLengthErrorDetails = __goscriptValue
}

export let ErrIntOverflowErrorDetails: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowErrorDetails(__goscriptValue: $.GoError): void {
	ErrIntOverflowErrorDetails = __goscriptValue
}

export let ErrUnexpectedEndOfGroupErrorDetails: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupErrorDetails(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupErrorDetails = __goscriptValue
}

var __goscriptAwait: any

export { __goscriptInit0 }

export { __goscriptInit1 }
