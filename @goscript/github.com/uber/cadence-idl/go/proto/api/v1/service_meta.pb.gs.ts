// Generated file based on service_meta.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.HealthRequest", "apiv1.HealthResponse"])

export class HealthRequest {
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
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HealthRequest {
		return new HealthRequest(this, true)
	}

	public __goscriptAssign(source: HealthRequest): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_f45a67f89288e7f3, $.arrayToSlice<number>([0])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: HealthRequest | $.VarRef<HealthRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as HealthRequest).Size() : HealthRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple0: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as HealthRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : HealthRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: HealthRequest | $.VarRef<HealthRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as HealthRequest).Size() : HealthRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as HealthRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : HealthRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: HealthRequest | $.VarRef<HealthRequest> | null = this;
		const m$: HealthRequest = m == null ? $.pointerTarget<HealthRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<HealthRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as HealthRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as HealthRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as HealthRequest).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: HealthRequest | $.VarRef<HealthRequest> | null = this;
		$.assignStruct($.pointerValue<HealthRequest>(m), new HealthRequest(undefined, true))
	}

	public Size(): number {
		const m: HealthRequest | $.VarRef<HealthRequest> | null = this;
		let n: number = 0
		const m$: HealthRequest = m == null ? $.pointerTarget<HealthRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<HealthRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as HealthRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as HealthRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: HealthRequest | $.VarRef<HealthRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.HealthRequest", /* @__PURE__ */ $.pointerType("apiv1.HealthRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: HealthRequest | $.VarRef<HealthRequest> | null = this;
		const m$: HealthRequest = m == null ? $.pointerTarget<HealthRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<HealthRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceMeta
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
				return fmt.Errorf("proto: HealthRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: HealthRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceMeta($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceMeta
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as HealthRequest).XXX_unrecognized = $.appendSlice((m$ as HealthRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: HealthRequest | $.VarRef<HealthRequest> | null = this;
		xxx_messageInfo_HealthRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.HealthRequest", /* @__PURE__ */ $.pointerType("apiv1.HealthRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: HealthRequest | $.VarRef<HealthRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_HealthRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.HealthRequest", /* @__PURE__ */ $.pointerType("apiv1.HealthRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as HealthRequest).MarshalToSizedBuffer(b) : HealthRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: HealthRequest | $.VarRef<HealthRequest> | null = this;
		xxx_messageInfo_HealthRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.HealthRequest", /* @__PURE__ */ $.pointerType("apiv1.HealthRequest")), src)
	}

	public XXX_Size(): number {
		const m: HealthRequest | $.VarRef<HealthRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as HealthRequest).Size() : HealthRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: HealthRequest | $.VarRef<HealthRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as HealthRequest).Unmarshal(b) : HealthRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.HealthRequest",
		() => new HealthRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		HealthRequest,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class HealthResponse {
	public get Ok(): boolean {
		return this._fields.Ok
	}

	public set Ok(value: boolean) {
		this._fields.Ok = value
	}

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
		Ok: boolean
		Message: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Ok?: boolean, Message?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Ok: init?.Ok ?? (false as boolean),
			Message: init?.Message ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HealthResponse {
		return new HealthResponse(this, true)
	}

	public __goscriptAssign(source: HealthResponse): void {
		const target = this._fields
		const values = source._fields
		target.Ok = values.Ok
		target.Message = values.Message
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_f45a67f89288e7f3, $.arrayToSlice<number>([1])]
	}

	public GetMessage(): string {
		const m: HealthResponse | $.VarRef<HealthResponse> | null = this;
		if (m != null) {
			return $.pointerValue<HealthResponse>(m).Message
		}
		return ""
	}

	public GetOk(): boolean {
		const m: HealthResponse | $.VarRef<HealthResponse> | null = this;
		if (m != null) {
			return $.pointerValue<HealthResponse>(m).Ok
		}
		return false
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: HealthResponse | $.VarRef<HealthResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as HealthResponse).Size() : HealthResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple1: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as HealthResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : HealthResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: HealthResponse | $.VarRef<HealthResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as HealthResponse).Size() : HealthResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as HealthResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : HealthResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: HealthResponse | $.VarRef<HealthResponse> | null = this;
		const m$: HealthResponse = m == null ? $.pointerTarget<HealthResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<HealthResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as HealthResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as HealthResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as HealthResponse).XXX_unrecognized)
		}
		if ($.stringLen((m$ as HealthResponse).Message) > 0) {
			i = i - ($.stringLen((m$ as HealthResponse).Message))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as HealthResponse).Message)
			i = encodeVarintServiceMeta(dAtA, i, $.uint64($.stringLen((m$ as HealthResponse).Message)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as HealthResponse).Ok) {
			i--
			if ((m$ as HealthResponse).Ok) {
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

	public Reset(): void {
		let m: HealthResponse | $.VarRef<HealthResponse> | null = this;
		$.assignStruct($.pointerValue<HealthResponse>(m), $.markAsStructValue(new HealthResponse()))
	}

	public Size(): number {
		const m: HealthResponse | $.VarRef<HealthResponse> | null = this;
		let n: number = 0
		const m$: HealthResponse = m == null ? $.pointerTarget<HealthResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<HealthResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as HealthResponse).Ok) {
			n = n + (2)
		}
		l = $.stringLen((m$ as HealthResponse).Message)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceMeta($.uint64(l)))
		}
		if ((m$ as HealthResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as HealthResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: HealthResponse | $.VarRef<HealthResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.HealthResponse", /* @__PURE__ */ $.pointerType("apiv1.HealthResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: HealthResponse | $.VarRef<HealthResponse> | null = this;
		const m$: HealthResponse = m == null ? $.pointerTarget<HealthResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<HealthResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceMeta
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
				return fmt.Errorf("proto: HealthResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: HealthResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Ok", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceMeta
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as HealthResponse).Ok = (v != 0)
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
							return ErrIntOverflowServiceMeta
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
						return ErrInvalidLengthServiceMeta
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceMeta
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as HealthResponse).Message = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceMeta($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceMeta
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as HealthResponse).XXX_unrecognized = $.appendSlice((m$ as HealthResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: HealthResponse | $.VarRef<HealthResponse> | null = this;
		xxx_messageInfo_HealthResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.HealthResponse", /* @__PURE__ */ $.pointerType("apiv1.HealthResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: HealthResponse | $.VarRef<HealthResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_HealthResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.HealthResponse", /* @__PURE__ */ $.pointerType("apiv1.HealthResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as HealthResponse).MarshalToSizedBuffer(b) : HealthResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: HealthResponse | $.VarRef<HealthResponse> | null = this;
		xxx_messageInfo_HealthResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.HealthResponse", /* @__PURE__ */ $.pointerType("apiv1.HealthResponse")), src)
	}

	public XXX_Size(): number {
		const m: HealthResponse | $.VarRef<HealthResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as HealthResponse).Size() : HealthResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: HealthResponse | $.VarRef<HealthResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as HealthResponse).Unmarshal(b) : HealthResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.HealthResponse",
		() => new HealthResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetMessage", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetOk", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		HealthResponse,
		() => [{ name: "Ok", key: "Ok", type: /* @__PURE__ */ $.basicType("bool"), tag: "protobuf:\"varint,1,opt,name=ok,proto3\" json:\"ok,omitempty\"" }, { name: "Message", key: "Message", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=message,proto3\" json:\"message,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export let xxx_messageInfo_HealthRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_HealthRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_HealthRequest.value, __goscriptValue)
}

export let xxx_messageInfo_HealthResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_HealthResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_HealthResponse.value, __goscriptValue)
}

function __goscriptInit0(): void {
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.HealthRequest", /* @__PURE__ */ $.pointerType("apiv1.HealthRequest")), "uber.cadence.api.v1.HealthRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.HealthResponse", /* @__PURE__ */ $.pointerType("apiv1.HealthResponse")), "uber.cadence.api.v1.HealthResponse")
}

function __goscriptInit1(): void {
	proto.RegisterFile("uber/cadence/api/v1/service_meta.proto", fileDescriptor_f45a67f89288e7f3)
}

export let fileDescriptor_f45a67f89288e7f3: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 82, 43, 77, 74, 45, 210, 79, 78, 76, 73, 205, 75, 78, 213, 79, 44, 200, 212, 47, 51, 212, 47, 78, 45, 42, 203, 76, 78, 141, 207, 77, 45, 73, 212, 43, 40, 202, 47, 201, 23, 18, 6, 169, 211, 131, 170, 211, 75, 44, 200, 212, 43, 51, 84, 226, 231, 226, 245, 72, 77, 204, 41, 201, 8, 74, 45, 44, 77, 45, 46, 81, 178, 226, 226, 131, 9, 20, 23, 228, 231, 21, 167, 10, 241, 113, 49, 229, 103, 75, 48, 42, 48, 106, 112, 4, 49, 229, 103, 11, 73, 112, 177, 231, 166, 22, 23, 39, 166, 167, 74, 48, 41, 48, 106, 112, 6, 193, 184, 70, 49, 92, 236, 190, 169, 37, 137, 142, 1, 158, 66, 129, 92, 108, 16, 99, 132, 148, 244, 176, 216, 171, 135, 98, 169, 148, 50, 94, 53, 16, 119, 56, 229, 156, 120, 36, 199, 120, 225, 145, 28, 227, 131, 71, 114, 140, 92, 226, 201, 249, 185, 216, 116, 57, 9, 128, 156, 16, 12, 241, 126, 0, 200, 227, 1, 140, 81, 134, 233, 153, 37, 25, 165, 73, 122, 201, 249, 185, 250, 200, 161, 165, 155, 153, 146, 163, 159, 158, 175, 15, 14, 32, 104, 208, 89, 39, 22, 100, 150, 25, 38, 177, 129, 197, 140, 1, 1, 0, 0, 255, 255, 232, 101, 184, 37, 94, 1, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_f45a67f89288e7f3(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_f45a67f89288e7f3 = __goscriptValue
}

export function encodeVarintServiceMeta(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovServiceMeta(v))
	let base = offset
	for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export function sovServiceMeta(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozServiceMeta(x: bigint): number {
	let n: number = 0
	return sovServiceMeta($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export function skipServiceMeta(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowServiceMeta]
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
						return [0, ErrIntOverflowServiceMeta]
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
						return [0, ErrIntOverflowServiceMeta]
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
					return [0, ErrInvalidLengthServiceMeta]
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
					return [0, ErrUnexpectedEndOfGroupServiceMeta]
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
			return [0, ErrInvalidLengthServiceMeta]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthServiceMeta: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthServiceMeta(__goscriptValue: $.GoError): void {
	ErrInvalidLengthServiceMeta = __goscriptValue
}

export let ErrIntOverflowServiceMeta: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowServiceMeta(__goscriptValue: $.GoError): void {
	ErrIntOverflowServiceMeta = __goscriptValue
}

export let ErrUnexpectedEndOfGroupServiceMeta: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupServiceMeta(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupServiceMeta = __goscriptValue
}

export { __goscriptInit0 }

export { __goscriptInit1 }
