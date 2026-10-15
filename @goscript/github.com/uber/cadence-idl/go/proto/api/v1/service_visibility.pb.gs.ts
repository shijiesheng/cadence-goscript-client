// Generated file based on service_visibility.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"

import * as types from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as __goscript_common_pb from "./common.pb.gs.ts"

import * as __goscript_tasklist_pb from "./tasklist.pb.gs.ts"

import * as __goscript_visibility_pb from "./visibility.pb.gs.ts"

import * as __goscript_workflow_pb from "./workflow.pb.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "./common.pb.gs.ts"
import "./tasklist.pb.gs.ts"
import "./visibility.pb.gs.ts"
import "./workflow.pb.gs.ts"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.ListWorkflowExecutionsRequest", "apiv1.ListWorkflowExecutionsResponse", "apiv1.ListOpenWorkflowExecutionsRequest", "apiv1.isListOpenWorkflowExecutionsRequest_Filters", "apiv1.ListOpenWorkflowExecutionsRequest_ExecutionFilter", "apiv1.ListOpenWorkflowExecutionsRequest_TypeFilter", "apiv1.ListOpenWorkflowExecutionsResponse", "apiv1.ListClosedWorkflowExecutionsRequest", "apiv1.isListClosedWorkflowExecutionsRequest_Filters", "apiv1.ListClosedWorkflowExecutionsRequest_ExecutionFilter", "apiv1.ListClosedWorkflowExecutionsRequest_TypeFilter", "apiv1.ListClosedWorkflowExecutionsRequest_StatusFilter", "apiv1.ListClosedWorkflowExecutionsResponse", "apiv1.ListArchivedWorkflowExecutionsRequest", "apiv1.ListArchivedWorkflowExecutionsResponse", "apiv1.ScanWorkflowExecutionsRequest", "apiv1.ScanWorkflowExecutionsResponse", "apiv1.CountWorkflowExecutionsRequest", "apiv1.CountWorkflowExecutionsResponse", "apiv1.GetSearchAttributesRequest", "apiv1.GetSearchAttributesResponse"])

export type isListOpenWorkflowExecutionsRequest_Filters = {
	MarshalTo(_p0: $.Slice<number>): [number, $.GoError]
	Size(): number
	isListOpenWorkflowExecutionsRequest_Filters(): void
}

$.registerInterfaceType(
	"apiv1.isListOpenWorkflowExecutionsRequest_Filters",
	null,
	[$.methodSignature("MarshalTo", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("isListOpenWorkflowExecutionsRequest_Filters")]
);

export type isListClosedWorkflowExecutionsRequest_Filters = {
	MarshalTo(_p0: $.Slice<number>): [number, $.GoError]
	Size(): number
	isListClosedWorkflowExecutionsRequest_Filters(): void
}

$.registerInterfaceType(
	"apiv1.isListClosedWorkflowExecutionsRequest_Filters",
	null,
	[$.methodSignature("MarshalTo", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], [/* @__PURE__ */ $.basicType("int"), "error"]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("isListClosedWorkflowExecutionsRequest_Filters")]
);

export class ListWorkflowExecutionsRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get PageSize(): number {
		return this._fields.PageSize
	}

	public set PageSize(value: number) {
		this._fields.PageSize = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
	}

	public get Query(): string {
		return this._fields.Query
	}

	public set Query(value: string) {
		this._fields.Query = value
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
		Domain: string
		PageSize: number
		NextPageToken: $.Slice<number>
		Query: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, PageSize?: number, NextPageToken?: $.Slice<number>, Query?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			PageSize: init?.PageSize ?? (0 as number),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			Query: init?.Query ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListWorkflowExecutionsRequest {
		return new ListWorkflowExecutionsRequest(this, true)
	}

	public __goscriptAssign(source: ListWorkflowExecutionsRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.PageSize = values.PageSize
		target.NextPageToken = values.NextPageToken
		target.Query = values.Query
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_a7341dc69cef4364, $.arrayToSlice<number>([0])]
	}

	public GetDomain(): string {
		const m: ListWorkflowExecutionsRequest | $.VarRef<ListWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListWorkflowExecutionsRequest>(m).Domain
		}
		return ""
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: ListWorkflowExecutionsRequest | $.VarRef<ListWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListWorkflowExecutionsRequest>(m).NextPageToken
		}
		return null
	}

	public GetPageSize(): number {
		const m: ListWorkflowExecutionsRequest | $.VarRef<ListWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListWorkflowExecutionsRequest>(m).PageSize
		}
		return 0
	}

	public GetQuery(): string {
		const m: ListWorkflowExecutionsRequest | $.VarRef<ListWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListWorkflowExecutionsRequest>(m).Query
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListWorkflowExecutionsRequest | $.VarRef<ListWorkflowExecutionsRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListWorkflowExecutionsRequest).Size() : ListWorkflowExecutionsRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple0: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListWorkflowExecutionsRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListWorkflowExecutionsRequest | $.VarRef<ListWorkflowExecutionsRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListWorkflowExecutionsRequest).Size() : ListWorkflowExecutionsRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListWorkflowExecutionsRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListWorkflowExecutionsRequest | $.VarRef<ListWorkflowExecutionsRequest> | null = this;
		const m$: ListWorkflowExecutionsRequest = m == null ? $.pointerTarget<ListWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListWorkflowExecutionsRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListWorkflowExecutionsRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListWorkflowExecutionsRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListWorkflowExecutionsRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as ListWorkflowExecutionsRequest).Query) > 0) {
			i = i - ($.stringLen((m$ as ListWorkflowExecutionsRequest).Query))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListWorkflowExecutionsRequest).Query)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.stringLen((m$ as ListWorkflowExecutionsRequest).Query)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.sliceLen((m$ as ListWorkflowExecutionsRequest).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as ListWorkflowExecutionsRequest).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListWorkflowExecutionsRequest).NextPageToken)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.sliceLen((m$ as ListWorkflowExecutionsRequest).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as ListWorkflowExecutionsRequest).PageSize != 0) {
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64((m$ as ListWorkflowExecutionsRequest).PageSize))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ($.stringLen((m$ as ListWorkflowExecutionsRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as ListWorkflowExecutionsRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListWorkflowExecutionsRequest).Domain)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.stringLen((m$ as ListWorkflowExecutionsRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ListWorkflowExecutionsRequest | $.VarRef<ListWorkflowExecutionsRequest> | null = this;
		$.assignStruct($.pointerValue<ListWorkflowExecutionsRequest>(m), $.markAsStructValue(new ListWorkflowExecutionsRequest()))
	}

	public Size(): number {
		const m: ListWorkflowExecutionsRequest | $.VarRef<ListWorkflowExecutionsRequest> | null = this;
		let n: number = 0
		const m$: ListWorkflowExecutionsRequest = m == null ? $.pointerTarget<ListWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListWorkflowExecutionsRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ListWorkflowExecutionsRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as ListWorkflowExecutionsRequest).PageSize != 0) {
			n = n + (1 + sovServiceVisibility($.uint64((m$ as ListWorkflowExecutionsRequest).PageSize)))
		}
		l = $.sliceLen((m$ as ListWorkflowExecutionsRequest).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		l = $.stringLen((m$ as ListWorkflowExecutionsRequest).Query)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as ListWorkflowExecutionsRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListWorkflowExecutionsRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ListWorkflowExecutionsRequest | $.VarRef<ListWorkflowExecutionsRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ListWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListWorkflowExecutionsRequest | $.VarRef<ListWorkflowExecutionsRequest> | null = this;
		const m$: ListWorkflowExecutionsRequest = m == null ? $.pointerTarget<ListWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListWorkflowExecutionsRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceVisibility
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
				return fmt.Errorf("proto: ListWorkflowExecutionsRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListWorkflowExecutionsRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Domain", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
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
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListWorkflowExecutionsRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field PageSize", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ListWorkflowExecutionsRequest).PageSize = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++;
						;(m$ as ListWorkflowExecutionsRequest).PageSize = (m$ as ListWorkflowExecutionsRequest).PageSize | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field NextPageToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
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
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListWorkflowExecutionsRequest).NextPageToken = $.appendSlice($.goSlice((m$ as ListWorkflowExecutionsRequest).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as ListWorkflowExecutionsRequest).NextPageToken == null) {
						;(m$ as ListWorkflowExecutionsRequest).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Query", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
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
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListWorkflowExecutionsRequest).Query = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListWorkflowExecutionsRequest).XXX_unrecognized = $.appendSlice((m$ as ListWorkflowExecutionsRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ListWorkflowExecutionsRequest | $.VarRef<ListWorkflowExecutionsRequest> | null = this;
		await xxx_messageInfo_ListWorkflowExecutionsRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ListWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ListWorkflowExecutionsRequest | $.VarRef<ListWorkflowExecutionsRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListWorkflowExecutionsRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ListWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListWorkflowExecutionsRequest).MarshalToSizedBuffer(b) : ListWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ListWorkflowExecutionsRequest | $.VarRef<ListWorkflowExecutionsRequest> | null = this;
		await xxx_messageInfo_ListWorkflowExecutionsRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ListWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsRequest")), src)
	}

	public XXX_Size(): number {
		const m: ListWorkflowExecutionsRequest | $.VarRef<ListWorkflowExecutionsRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListWorkflowExecutionsRequest).Size() : ListWorkflowExecutionsRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListWorkflowExecutionsRequest | $.VarRef<ListWorkflowExecutionsRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListWorkflowExecutionsRequest).Unmarshal(b) : ListWorkflowExecutionsRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListWorkflowExecutionsRequest",
		() => new ListWorkflowExecutionsRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetNextPageToken", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("GetPageSize", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetQuery", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ListWorkflowExecutionsRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("PageSize", /* @__PURE__ */ $.basicType("int32"), [1], 16, true, { tag: "protobuf:\"varint,2,opt,name=page_size,json=pageSize,proto3\" json:\"page_size,omitempty\"" }), /* @__PURE__ */ $.structField("NextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }), /* @__PURE__ */ $.structField("Query", /* @__PURE__ */ $.basicType("string"), [3], 48, true, { tag: "protobuf:\"bytes,4,opt,name=query,proto3\" json:\"query,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [4], 64, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 64, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [6], 88, true, { tag: "json:\"-\"" })]
	)
}

export class ListWorkflowExecutionsResponse {
	public get Executions(): $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null> {
		return this._fields.Executions
	}

	public set Executions(value: $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>) {
		this._fields.Executions = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
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
		Executions: $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>
		NextPageToken: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Executions?: $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>, NextPageToken?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Executions: init?.Executions ?? (null! as $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListWorkflowExecutionsResponse {
		return new ListWorkflowExecutionsResponse(this, true)
	}

	public __goscriptAssign(source: ListWorkflowExecutionsResponse): void {
		const target = this._fields
		const values = source._fields
		target.Executions = values.Executions
		target.NextPageToken = values.NextPageToken
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_a7341dc69cef4364, $.arrayToSlice<number>([1])]
	}

	public GetExecutions(): $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null> {
		const m: ListWorkflowExecutionsResponse | $.VarRef<ListWorkflowExecutionsResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ListWorkflowExecutionsResponse>(m).Executions
		}
		return null
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: ListWorkflowExecutionsResponse | $.VarRef<ListWorkflowExecutionsResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ListWorkflowExecutionsResponse>(m).NextPageToken
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListWorkflowExecutionsResponse | $.VarRef<ListWorkflowExecutionsResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListWorkflowExecutionsResponse).Size() : ListWorkflowExecutionsResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple1: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListWorkflowExecutionsResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListWorkflowExecutionsResponse | $.VarRef<ListWorkflowExecutionsResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListWorkflowExecutionsResponse).Size() : ListWorkflowExecutionsResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListWorkflowExecutionsResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListWorkflowExecutionsResponse | $.VarRef<ListWorkflowExecutionsResponse> | null = this;
		const m$: ListWorkflowExecutionsResponse = m == null ? $.pointerTarget<ListWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListWorkflowExecutionsResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListWorkflowExecutionsResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListWorkflowExecutionsResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListWorkflowExecutionsResponse).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as ListWorkflowExecutionsResponse).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as ListWorkflowExecutionsResponse).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListWorkflowExecutionsResponse).NextPageToken)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.sliceLen((m$ as ListWorkflowExecutionsResponse).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.sliceLen((m$ as ListWorkflowExecutionsResponse).Executions) > 0) {
			for (let __goscriptSliceWindow1 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as ListWorkflowExecutionsResponse).Executions) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_workflow_pb.WorkflowExecutionInfo.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as ListWorkflowExecutionsResponse).Executions!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceVisibility(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ListWorkflowExecutionsResponse | $.VarRef<ListWorkflowExecutionsResponse> | null = this;
		$.assignStruct($.pointerValue<ListWorkflowExecutionsResponse>(m), $.markAsStructValue(new ListWorkflowExecutionsResponse()))
	}

	public Size(): number {
		const m: ListWorkflowExecutionsResponse | $.VarRef<ListWorkflowExecutionsResponse> | null = this;
		let n: number = 0
		const m$: ListWorkflowExecutionsResponse = m == null ? $.pointerTarget<ListWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListWorkflowExecutionsResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as ListWorkflowExecutionsResponse).Executions) > 0) {
			for (let __goscriptRangeTarget0 = (m$ as ListWorkflowExecutionsResponse).Executions, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_workflow_pb.WorkflowExecutionInfo).Size() : __goscript_workflow_pb.WorkflowExecutionInfo.prototype.Size.call(e))
				n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
			}
		}
		l = $.sliceLen((m$ as ListWorkflowExecutionsResponse).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as ListWorkflowExecutionsResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListWorkflowExecutionsResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ListWorkflowExecutionsResponse | $.VarRef<ListWorkflowExecutionsResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ListWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListWorkflowExecutionsResponse | $.VarRef<ListWorkflowExecutionsResponse> | null = this;
		const m$: ListWorkflowExecutionsResponse = m == null ? $.pointerTarget<ListWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListWorkflowExecutionsResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceVisibility
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
				return fmt.Errorf("proto: ListWorkflowExecutionsResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListWorkflowExecutionsResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Executions", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListWorkflowExecutionsResponse).Executions = $.appendOne((m$ as ListWorkflowExecutionsResponse).Executions, new __goscript_workflow_pb.WorkflowExecutionInfo(), $.appendZeros.nil)
					{
						let err = __goscript_workflow_pb.WorkflowExecutionInfo.prototype.Unmarshal.call($.arrayIndex((m$ as ListWorkflowExecutionsResponse).Executions!, $.sliceLen((m$ as ListWorkflowExecutionsResponse).Executions) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field NextPageToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListWorkflowExecutionsResponse).NextPageToken = $.appendSlice($.goSlice((m$ as ListWorkflowExecutionsResponse).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as ListWorkflowExecutionsResponse).NextPageToken == null) {
						;(m$ as ListWorkflowExecutionsResponse).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListWorkflowExecutionsResponse).XXX_unrecognized = $.appendSlice((m$ as ListWorkflowExecutionsResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ListWorkflowExecutionsResponse | $.VarRef<ListWorkflowExecutionsResponse> | null = this;
		await xxx_messageInfo_ListWorkflowExecutionsResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ListWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ListWorkflowExecutionsResponse | $.VarRef<ListWorkflowExecutionsResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListWorkflowExecutionsResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ListWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListWorkflowExecutionsResponse).MarshalToSizedBuffer(b) : ListWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ListWorkflowExecutionsResponse | $.VarRef<ListWorkflowExecutionsResponse> | null = this;
		await xxx_messageInfo_ListWorkflowExecutionsResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ListWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsResponse")), src)
	}

	public XXX_Size(): number {
		const m: ListWorkflowExecutionsResponse | $.VarRef<ListWorkflowExecutionsResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListWorkflowExecutionsResponse).Size() : ListWorkflowExecutionsResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListWorkflowExecutionsResponse | $.VarRef<ListWorkflowExecutionsResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListWorkflowExecutionsResponse).Unmarshal(b) : ListWorkflowExecutionsResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListWorkflowExecutionsResponse",
		() => new ListWorkflowExecutionsResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetExecutions", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionInfo"))], true), $.methodSignature("GetNextPageToken", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ListWorkflowExecutionsResponse,
		() => [/* @__PURE__ */ $.structField("Executions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionInfo")), [0], 0, true, { tag: "protobuf:\"bytes,1,rep,name=executions,proto3\" json:\"executions,omitempty\"" }), /* @__PURE__ */ $.structField("NextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, true, { tag: "protobuf:\"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 72, true, { tag: "json:\"-\"" })]
	)
}

export class ListOpenWorkflowExecutionsRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get PageSize(): number {
		return this._fields.PageSize
	}

	public set PageSize(value: number) {
		this._fields.PageSize = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
	}

	public get StartTimeFilter(): __goscript_visibility_pb.StartTimeFilter | $.VarRef<__goscript_visibility_pb.StartTimeFilter> | null {
		return this._fields.StartTimeFilter
	}

	public set StartTimeFilter(value: __goscript_visibility_pb.StartTimeFilter | $.VarRef<__goscript_visibility_pb.StartTimeFilter> | null) {
		this._fields.StartTimeFilter = value
	}

	// Types that are valid to be assigned to Filters:
	// 	*ListOpenWorkflowExecutionsRequest_ExecutionFilter
	// 	*ListOpenWorkflowExecutionsRequest_TypeFilter
	public get Filters(): isListOpenWorkflowExecutionsRequest_Filters | null {
		return this._fields.Filters
	}

	public set Filters(value: isListOpenWorkflowExecutionsRequest_Filters | null) {
		this._fields.Filters = value
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
		Domain: string
		PageSize: number
		NextPageToken: $.Slice<number>
		StartTimeFilter: __goscript_visibility_pb.StartTimeFilter | $.VarRef<__goscript_visibility_pb.StartTimeFilter> | null
		Filters: isListOpenWorkflowExecutionsRequest_Filters | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, PageSize?: number, NextPageToken?: $.Slice<number>, StartTimeFilter?: __goscript_visibility_pb.StartTimeFilter | $.VarRef<__goscript_visibility_pb.StartTimeFilter> | null, Filters?: isListOpenWorkflowExecutionsRequest_Filters | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			PageSize: init?.PageSize ?? (0 as number),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			StartTimeFilter: init?.StartTimeFilter ?? (null! as __goscript_visibility_pb.StartTimeFilter | $.VarRef<__goscript_visibility_pb.StartTimeFilter> | null),
			Filters: init?.Filters ?? (null! as isListOpenWorkflowExecutionsRequest_Filters | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListOpenWorkflowExecutionsRequest {
		return new ListOpenWorkflowExecutionsRequest(this, true)
	}

	public __goscriptAssign(source: ListOpenWorkflowExecutionsRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.PageSize = values.PageSize
		target.NextPageToken = values.NextPageToken
		target.StartTimeFilter = values.StartTimeFilter
		target.Filters = $.assignFieldValue(target.Filters, values.Filters, "apiv1.isListOpenWorkflowExecutionsRequest_Filters")
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_a7341dc69cef4364, $.arrayToSlice<number>([2])]
	}

	public GetDomain(): string {
		const m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListOpenWorkflowExecutionsRequest>(m).Domain
		}
		return ""
	}

	public GetExecutionFilter(): __goscript_visibility_pb.WorkflowExecutionFilter | $.VarRef<__goscript_visibility_pb.WorkflowExecutionFilter> | null {
		const m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		{
			let __goscriptTuple2: any = $.typeAssertTuple<ListOpenWorkflowExecutionsRequest_ExecutionFilter | $.VarRef<ListOpenWorkflowExecutionsRequest_ExecutionFilter> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsRequest).GetFilters() : ListOpenWorkflowExecutionsRequest.prototype.GetFilters.call(m)), /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest_ExecutionFilter"))
			let x: ListOpenWorkflowExecutionsRequest_ExecutionFilter | $.VarRef<ListOpenWorkflowExecutionsRequest_ExecutionFilter> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (ok) {
				return $.pointerValue<ListOpenWorkflowExecutionsRequest_ExecutionFilter>(x).ExecutionFilter
			}
		}
		return null
	}

	public GetFilters(): isListOpenWorkflowExecutionsRequest_Filters | null {
		const m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListOpenWorkflowExecutionsRequest>(m).Filters
		}
		return null
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListOpenWorkflowExecutionsRequest>(m).NextPageToken
		}
		return null
	}

	public GetPageSize(): number {
		const m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListOpenWorkflowExecutionsRequest>(m).PageSize
		}
		return 0
	}

	public GetStartTimeFilter(): __goscript_visibility_pb.StartTimeFilter | $.VarRef<__goscript_visibility_pb.StartTimeFilter> | null {
		const m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListOpenWorkflowExecutionsRequest>(m).StartTimeFilter
		}
		return null
	}

	public GetTypeFilter(): __goscript_visibility_pb.WorkflowTypeFilter | $.VarRef<__goscript_visibility_pb.WorkflowTypeFilter> | null {
		const m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		{
			let __goscriptTuple3: any = $.typeAssertTuple<ListOpenWorkflowExecutionsRequest_TypeFilter | $.VarRef<ListOpenWorkflowExecutionsRequest_TypeFilter> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsRequest).GetFilters() : ListOpenWorkflowExecutionsRequest.prototype.GetFilters.call(m)), /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest_TypeFilter"))
			let x: ListOpenWorkflowExecutionsRequest_TypeFilter | $.VarRef<ListOpenWorkflowExecutionsRequest_TypeFilter> | null = __goscriptTuple3[0]
			let ok = __goscriptTuple3[1]
			if (ok) {
				return $.pointerValue<ListOpenWorkflowExecutionsRequest_TypeFilter>(x).TypeFilter
			}
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsRequest).Size() : ListOpenWorkflowExecutionsRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListOpenWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsRequest).Size() : ListOpenWorkflowExecutionsRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListOpenWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		const m$: ListOpenWorkflowExecutionsRequest = m == null ? $.pointerTarget<ListOpenWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListOpenWorkflowExecutionsRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListOpenWorkflowExecutionsRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListOpenWorkflowExecutionsRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListOpenWorkflowExecutionsRequest).XXX_unrecognized)
		}
		if ((m$ as ListOpenWorkflowExecutionsRequest).Filters != null) {
			{
				let size = $.pointerValue<Exclude<isListOpenWorkflowExecutionsRequest_Filters, null>>((m$ as ListOpenWorkflowExecutionsRequest).Filters).Size()
				i = i - (size)
				{
					let [, err] = $.pointerValue<Exclude<isListOpenWorkflowExecutionsRequest_Filters, null>>((m$ as ListOpenWorkflowExecutionsRequest).Filters).MarshalTo($.goSlice(dAtA, i, undefined))
					if (err != null) {
						return [0, err]
					}
				}
			}
		}
		if ((m$ as ListOpenWorkflowExecutionsRequest).StartTimeFilter != null) {
			{
				let [size, err] = __goscript_visibility_pb.StartTimeFilter.prototype.MarshalToSizedBuffer.call((m$ as ListOpenWorkflowExecutionsRequest).StartTimeFilter, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceVisibility(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.sliceLen((m$ as ListOpenWorkflowExecutionsRequest).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as ListOpenWorkflowExecutionsRequest).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListOpenWorkflowExecutionsRequest).NextPageToken)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.sliceLen((m$ as ListOpenWorkflowExecutionsRequest).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as ListOpenWorkflowExecutionsRequest).PageSize != 0) {
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64((m$ as ListOpenWorkflowExecutionsRequest).PageSize))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ($.stringLen((m$ as ListOpenWorkflowExecutionsRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as ListOpenWorkflowExecutionsRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListOpenWorkflowExecutionsRequest).Domain)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.stringLen((m$ as ListOpenWorkflowExecutionsRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		$.assignStruct($.pointerValue<ListOpenWorkflowExecutionsRequest>(m), $.markAsStructValue(new ListOpenWorkflowExecutionsRequest()))
	}

	public Size(): number {
		const m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		let n: number = 0
		const m$: ListOpenWorkflowExecutionsRequest = m == null ? $.pointerTarget<ListOpenWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListOpenWorkflowExecutionsRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ListOpenWorkflowExecutionsRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as ListOpenWorkflowExecutionsRequest).PageSize != 0) {
			n = n + (1 + sovServiceVisibility($.uint64((m$ as ListOpenWorkflowExecutionsRequest).PageSize)))
		}
		l = $.sliceLen((m$ as ListOpenWorkflowExecutionsRequest).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as ListOpenWorkflowExecutionsRequest).StartTimeFilter != null) {
			l = __goscript_visibility_pb.StartTimeFilter.prototype.Size.call((m$ as ListOpenWorkflowExecutionsRequest).StartTimeFilter)
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as ListOpenWorkflowExecutionsRequest).Filters != null) {
			n = n + ($.pointerValue<Exclude<isListOpenWorkflowExecutionsRequest_Filters, null>>((m$ as ListOpenWorkflowExecutionsRequest).Filters).Size())
		}
		if ((m$ as ListOpenWorkflowExecutionsRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListOpenWorkflowExecutionsRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ListOpenWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		const m$: ListOpenWorkflowExecutionsRequest = m == null ? $.pointerTarget<ListOpenWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListOpenWorkflowExecutionsRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceVisibility
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
				return fmt.Errorf("proto: ListOpenWorkflowExecutionsRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListOpenWorkflowExecutionsRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Domain", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListOpenWorkflowExecutionsRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field PageSize", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ListOpenWorkflowExecutionsRequest).PageSize = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++;
						;(m$ as ListOpenWorkflowExecutionsRequest).PageSize = (m$ as ListOpenWorkflowExecutionsRequest).PageSize | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field NextPageToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListOpenWorkflowExecutionsRequest).NextPageToken = $.appendSlice($.goSlice((m$ as ListOpenWorkflowExecutionsRequest).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as ListOpenWorkflowExecutionsRequest).NextPageToken == null) {
						;(m$ as ListOpenWorkflowExecutionsRequest).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartTimeFilter", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ListOpenWorkflowExecutionsRequest).StartTimeFilter == null) {
						;(m$ as ListOpenWorkflowExecutionsRequest).StartTimeFilter = new __goscript_visibility_pb.StartTimeFilter()
					}
					{
						let err = __goscript_visibility_pb.StartTimeFilter.prototype.Unmarshal.call((m$ as ListOpenWorkflowExecutionsRequest).StartTimeFilter, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ExecutionFilter", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: __goscript_visibility_pb.WorkflowExecutionFilter | $.VarRef<__goscript_visibility_pb.WorkflowExecutionFilter> | null = new __goscript_visibility_pb.WorkflowExecutionFilter()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as __goscript_visibility_pb.WorkflowExecutionFilter).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : __goscript_visibility_pb.WorkflowExecutionFilter.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as ListOpenWorkflowExecutionsRequest).Filters = $.interfaceValue<isListOpenWorkflowExecutionsRequest_Filters | null>(new ListOpenWorkflowExecutionsRequest_ExecutionFilter({ExecutionFilter: v}), "*apiv1.ListOpenWorkflowExecutionsRequest_ExecutionFilter", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest_ExecutionFilter"))
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TypeFilter", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: __goscript_visibility_pb.WorkflowTypeFilter | $.VarRef<__goscript_visibility_pb.WorkflowTypeFilter> | null = new __goscript_visibility_pb.WorkflowTypeFilter()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as __goscript_visibility_pb.WorkflowTypeFilter).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : __goscript_visibility_pb.WorkflowTypeFilter.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as ListOpenWorkflowExecutionsRequest).Filters = $.interfaceValue<isListOpenWorkflowExecutionsRequest_Filters | null>(new ListOpenWorkflowExecutionsRequest_TypeFilter({TypeFilter: v}), "*apiv1.ListOpenWorkflowExecutionsRequest_TypeFilter", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest_TypeFilter"))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListOpenWorkflowExecutionsRequest).XXX_unrecognized = $.appendSlice((m$ as ListOpenWorkflowExecutionsRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		await xxx_messageInfo_ListOpenWorkflowExecutionsRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ListOpenWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListOpenWorkflowExecutionsRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ListOpenWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsRequest).MarshalToSizedBuffer(b) : ListOpenWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		await xxx_messageInfo_ListOpenWorkflowExecutionsRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ListOpenWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest")), src)
	}

	public XXX_OneofWrappers(): $.Slice<any> {
		return $.arrayToSlice<any>([$.interfaceValue(null, "*apiv1.ListOpenWorkflowExecutionsRequest_ExecutionFilter", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest_ExecutionFilter")), $.interfaceValue(null, "*apiv1.ListOpenWorkflowExecutionsRequest_TypeFilter", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest_TypeFilter"))])
	}

	public XXX_Size(): number {
		const m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsRequest).Size() : ListOpenWorkflowExecutionsRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListOpenWorkflowExecutionsRequest | $.VarRef<ListOpenWorkflowExecutionsRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsRequest).Unmarshal(b) : ListOpenWorkflowExecutionsRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListOpenWorkflowExecutionsRequest",
		() => new ListOpenWorkflowExecutionsRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetExecutionFilter", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionFilter")], true), $.methodSignature("GetFilters", [], ["apiv1.isListOpenWorkflowExecutionsRequest_Filters"], true), $.methodSignature("GetNextPageToken", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("GetPageSize", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetStartTimeFilter", [], [/* @__PURE__ */ $.pointerType("apiv1.StartTimeFilter")], true), $.methodSignature("GetTypeFilter", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowTypeFilter")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_OneofWrappers", [], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ListOpenWorkflowExecutionsRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("PageSize", /* @__PURE__ */ $.basicType("int32"), [1], 16, true, { tag: "protobuf:\"varint,2,opt,name=page_size,json=pageSize,proto3\" json:\"page_size,omitempty\"" }), /* @__PURE__ */ $.structField("NextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }), /* @__PURE__ */ $.structField("StartTimeFilter", /* @__PURE__ */ $.pointerType("apiv1.StartTimeFilter"), [3], 48, true, { tag: "protobuf:\"bytes,4,opt,name=start_time_filter,json=startTimeFilter,proto3\" json:\"start_time_filter,omitempty\"" }), /* @__PURE__ */ $.structField("Filters", "apiv1.isListOpenWorkflowExecutionsRequest_Filters", [4], 56, true, { tag: "protobuf_oneof:\"filters\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [5], 72, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 72, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [7], 96, true, { tag: "json:\"-\"" })]
	)
}

export class ListOpenWorkflowExecutionsRequest_ExecutionFilter {
	public get ExecutionFilter(): __goscript_visibility_pb.WorkflowExecutionFilter | $.VarRef<__goscript_visibility_pb.WorkflowExecutionFilter> | null {
		return this._fields.ExecutionFilter
	}

	public set ExecutionFilter(value: __goscript_visibility_pb.WorkflowExecutionFilter | $.VarRef<__goscript_visibility_pb.WorkflowExecutionFilter> | null) {
		this._fields.ExecutionFilter = value
	}

	public _fields: {
		ExecutionFilter: __goscript_visibility_pb.WorkflowExecutionFilter | $.VarRef<__goscript_visibility_pb.WorkflowExecutionFilter> | null
	}

	constructor(init?: Partial<{ExecutionFilter?: __goscript_visibility_pb.WorkflowExecutionFilter | $.VarRef<__goscript_visibility_pb.WorkflowExecutionFilter> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ExecutionFilter: init?.ExecutionFilter ?? (null! as __goscript_visibility_pb.WorkflowExecutionFilter | $.VarRef<__goscript_visibility_pb.WorkflowExecutionFilter> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListOpenWorkflowExecutionsRequest_ExecutionFilter {
		return new ListOpenWorkflowExecutionsRequest_ExecutionFilter(this, true)
	}

	public __goscriptAssign(source: ListOpenWorkflowExecutionsRequest_ExecutionFilter): void {
		const target = this._fields
		const values = source._fields
		target.ExecutionFilter = values.ExecutionFilter
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListOpenWorkflowExecutionsRequest_ExecutionFilter | $.VarRef<ListOpenWorkflowExecutionsRequest_ExecutionFilter> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsRequest_ExecutionFilter).Size() : ListOpenWorkflowExecutionsRequest_ExecutionFilter.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsRequest_ExecutionFilter).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListOpenWorkflowExecutionsRequest_ExecutionFilter.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListOpenWorkflowExecutionsRequest_ExecutionFilter | $.VarRef<ListOpenWorkflowExecutionsRequest_ExecutionFilter> | null = this;
		const m$: ListOpenWorkflowExecutionsRequest_ExecutionFilter = m == null ? $.pointerTarget<ListOpenWorkflowExecutionsRequest_ExecutionFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListOpenWorkflowExecutionsRequest_ExecutionFilter>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as ListOpenWorkflowExecutionsRequest_ExecutionFilter).ExecutionFilter != null) {
			{
				let [size, err] = __goscript_visibility_pb.WorkflowExecutionFilter.prototype.MarshalToSizedBuffer.call((m$ as ListOpenWorkflowExecutionsRequest_ExecutionFilter).ExecutionFilter, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceVisibility(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: ListOpenWorkflowExecutionsRequest_ExecutionFilter | $.VarRef<ListOpenWorkflowExecutionsRequest_ExecutionFilter> | null = this;
		let n: number = 0
		const m$: ListOpenWorkflowExecutionsRequest_ExecutionFilter = m == null ? $.pointerTarget<ListOpenWorkflowExecutionsRequest_ExecutionFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListOpenWorkflowExecutionsRequest_ExecutionFilter>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as ListOpenWorkflowExecutionsRequest_ExecutionFilter).ExecutionFilter != null) {
			l = __goscript_visibility_pb.WorkflowExecutionFilter.prototype.Size.call((m$ as ListOpenWorkflowExecutionsRequest_ExecutionFilter).ExecutionFilter)
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		return n
	}

	public isListOpenWorkflowExecutionsRequest_Filters(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListOpenWorkflowExecutionsRequest_ExecutionFilter",
		() => new ListOpenWorkflowExecutionsRequest_ExecutionFilter(),
		() => [$.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("isListOpenWorkflowExecutionsRequest_Filters", [], [], true)],
		ListOpenWorkflowExecutionsRequest_ExecutionFilter,
		() => [/* @__PURE__ */ $.structField("ExecutionFilter", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionFilter"), [0], 0, true, { tag: "protobuf:\"bytes,5,opt,name=execution_filter,json=executionFilter,proto3,oneof\" json:\"execution_filter,omitempty\"" })]
	)
}

export class ListOpenWorkflowExecutionsRequest_TypeFilter {
	public get TypeFilter(): __goscript_visibility_pb.WorkflowTypeFilter | $.VarRef<__goscript_visibility_pb.WorkflowTypeFilter> | null {
		return this._fields.TypeFilter
	}

	public set TypeFilter(value: __goscript_visibility_pb.WorkflowTypeFilter | $.VarRef<__goscript_visibility_pb.WorkflowTypeFilter> | null) {
		this._fields.TypeFilter = value
	}

	public _fields: {
		TypeFilter: __goscript_visibility_pb.WorkflowTypeFilter | $.VarRef<__goscript_visibility_pb.WorkflowTypeFilter> | null
	}

	constructor(init?: Partial<{TypeFilter?: __goscript_visibility_pb.WorkflowTypeFilter | $.VarRef<__goscript_visibility_pb.WorkflowTypeFilter> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			TypeFilter: init?.TypeFilter ?? (null! as __goscript_visibility_pb.WorkflowTypeFilter | $.VarRef<__goscript_visibility_pb.WorkflowTypeFilter> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListOpenWorkflowExecutionsRequest_TypeFilter {
		return new ListOpenWorkflowExecutionsRequest_TypeFilter(this, true)
	}

	public __goscriptAssign(source: ListOpenWorkflowExecutionsRequest_TypeFilter): void {
		const target = this._fields
		const values = source._fields
		target.TypeFilter = values.TypeFilter
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListOpenWorkflowExecutionsRequest_TypeFilter | $.VarRef<ListOpenWorkflowExecutionsRequest_TypeFilter> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsRequest_TypeFilter).Size() : ListOpenWorkflowExecutionsRequest_TypeFilter.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsRequest_TypeFilter).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListOpenWorkflowExecutionsRequest_TypeFilter.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListOpenWorkflowExecutionsRequest_TypeFilter | $.VarRef<ListOpenWorkflowExecutionsRequest_TypeFilter> | null = this;
		const m$: ListOpenWorkflowExecutionsRequest_TypeFilter = m == null ? $.pointerTarget<ListOpenWorkflowExecutionsRequest_TypeFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListOpenWorkflowExecutionsRequest_TypeFilter>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as ListOpenWorkflowExecutionsRequest_TypeFilter).TypeFilter != null) {
			{
				let [size, err] = __goscript_visibility_pb.WorkflowTypeFilter.prototype.MarshalToSizedBuffer.call((m$ as ListOpenWorkflowExecutionsRequest_TypeFilter).TypeFilter, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceVisibility(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: ListOpenWorkflowExecutionsRequest_TypeFilter | $.VarRef<ListOpenWorkflowExecutionsRequest_TypeFilter> | null = this;
		let n: number = 0
		const m$: ListOpenWorkflowExecutionsRequest_TypeFilter = m == null ? $.pointerTarget<ListOpenWorkflowExecutionsRequest_TypeFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListOpenWorkflowExecutionsRequest_TypeFilter>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as ListOpenWorkflowExecutionsRequest_TypeFilter).TypeFilter != null) {
			l = __goscript_visibility_pb.WorkflowTypeFilter.prototype.Size.call((m$ as ListOpenWorkflowExecutionsRequest_TypeFilter).TypeFilter)
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		return n
	}

	public isListOpenWorkflowExecutionsRequest_Filters(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListOpenWorkflowExecutionsRequest_TypeFilter",
		() => new ListOpenWorkflowExecutionsRequest_TypeFilter(),
		() => [$.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("isListOpenWorkflowExecutionsRequest_Filters", [], [], true)],
		ListOpenWorkflowExecutionsRequest_TypeFilter,
		() => [/* @__PURE__ */ $.structField("TypeFilter", /* @__PURE__ */ $.pointerType("apiv1.WorkflowTypeFilter"), [0], 0, true, { tag: "protobuf:\"bytes,6,opt,name=type_filter,json=typeFilter,proto3,oneof\" json:\"type_filter,omitempty\"" })]
	)
}

export class ListOpenWorkflowExecutionsResponse {
	public get Executions(): $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null> {
		return this._fields.Executions
	}

	public set Executions(value: $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>) {
		this._fields.Executions = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
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
		Executions: $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>
		NextPageToken: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Executions?: $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>, NextPageToken?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Executions: init?.Executions ?? (null! as $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListOpenWorkflowExecutionsResponse {
		return new ListOpenWorkflowExecutionsResponse(this, true)
	}

	public __goscriptAssign(source: ListOpenWorkflowExecutionsResponse): void {
		const target = this._fields
		const values = source._fields
		target.Executions = values.Executions
		target.NextPageToken = values.NextPageToken
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_a7341dc69cef4364, $.arrayToSlice<number>([3])]
	}

	public GetExecutions(): $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null> {
		const m: ListOpenWorkflowExecutionsResponse | $.VarRef<ListOpenWorkflowExecutionsResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ListOpenWorkflowExecutionsResponse>(m).Executions
		}
		return null
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: ListOpenWorkflowExecutionsResponse | $.VarRef<ListOpenWorkflowExecutionsResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ListOpenWorkflowExecutionsResponse>(m).NextPageToken
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListOpenWorkflowExecutionsResponse | $.VarRef<ListOpenWorkflowExecutionsResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsResponse).Size() : ListOpenWorkflowExecutionsResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple5: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListOpenWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListOpenWorkflowExecutionsResponse | $.VarRef<ListOpenWorkflowExecutionsResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsResponse).Size() : ListOpenWorkflowExecutionsResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListOpenWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListOpenWorkflowExecutionsResponse | $.VarRef<ListOpenWorkflowExecutionsResponse> | null = this;
		const m$: ListOpenWorkflowExecutionsResponse = m == null ? $.pointerTarget<ListOpenWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListOpenWorkflowExecutionsResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListOpenWorkflowExecutionsResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListOpenWorkflowExecutionsResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListOpenWorkflowExecutionsResponse).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as ListOpenWorkflowExecutionsResponse).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as ListOpenWorkflowExecutionsResponse).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListOpenWorkflowExecutionsResponse).NextPageToken)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.sliceLen((m$ as ListOpenWorkflowExecutionsResponse).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.sliceLen((m$ as ListOpenWorkflowExecutionsResponse).Executions) > 0) {
			for (let __goscriptSliceWindow4 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as ListOpenWorkflowExecutionsResponse).Executions) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_workflow_pb.WorkflowExecutionInfo.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as ListOpenWorkflowExecutionsResponse).Executions!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceVisibility(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ListOpenWorkflowExecutionsResponse | $.VarRef<ListOpenWorkflowExecutionsResponse> | null = this;
		$.assignStruct($.pointerValue<ListOpenWorkflowExecutionsResponse>(m), $.markAsStructValue(new ListOpenWorkflowExecutionsResponse()))
	}

	public Size(): number {
		const m: ListOpenWorkflowExecutionsResponse | $.VarRef<ListOpenWorkflowExecutionsResponse> | null = this;
		let n: number = 0
		const m$: ListOpenWorkflowExecutionsResponse = m == null ? $.pointerTarget<ListOpenWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListOpenWorkflowExecutionsResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as ListOpenWorkflowExecutionsResponse).Executions) > 0) {
			for (let __goscriptRangeTarget1 = (m$ as ListOpenWorkflowExecutionsResponse).Executions, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_workflow_pb.WorkflowExecutionInfo).Size() : __goscript_workflow_pb.WorkflowExecutionInfo.prototype.Size.call(e))
				n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
			}
		}
		l = $.sliceLen((m$ as ListOpenWorkflowExecutionsResponse).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as ListOpenWorkflowExecutionsResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListOpenWorkflowExecutionsResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ListOpenWorkflowExecutionsResponse | $.VarRef<ListOpenWorkflowExecutionsResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ListOpenWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListOpenWorkflowExecutionsResponse | $.VarRef<ListOpenWorkflowExecutionsResponse> | null = this;
		const m$: ListOpenWorkflowExecutionsResponse = m == null ? $.pointerTarget<ListOpenWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListOpenWorkflowExecutionsResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow5 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceVisibility
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
				return fmt.Errorf("proto: ListOpenWorkflowExecutionsResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListOpenWorkflowExecutionsResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Executions", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListOpenWorkflowExecutionsResponse).Executions = $.appendOne((m$ as ListOpenWorkflowExecutionsResponse).Executions, new __goscript_workflow_pb.WorkflowExecutionInfo(), $.appendZeros.nil)
					{
						let err = __goscript_workflow_pb.WorkflowExecutionInfo.prototype.Unmarshal.call($.arrayIndex((m$ as ListOpenWorkflowExecutionsResponse).Executions!, $.sliceLen((m$ as ListOpenWorkflowExecutionsResponse).Executions) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field NextPageToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListOpenWorkflowExecutionsResponse).NextPageToken = $.appendSlice($.goSlice((m$ as ListOpenWorkflowExecutionsResponse).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as ListOpenWorkflowExecutionsResponse).NextPageToken == null) {
						;(m$ as ListOpenWorkflowExecutionsResponse).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListOpenWorkflowExecutionsResponse).XXX_unrecognized = $.appendSlice((m$ as ListOpenWorkflowExecutionsResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ListOpenWorkflowExecutionsResponse | $.VarRef<ListOpenWorkflowExecutionsResponse> | null = this;
		await xxx_messageInfo_ListOpenWorkflowExecutionsResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ListOpenWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ListOpenWorkflowExecutionsResponse | $.VarRef<ListOpenWorkflowExecutionsResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListOpenWorkflowExecutionsResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ListOpenWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsResponse).MarshalToSizedBuffer(b) : ListOpenWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ListOpenWorkflowExecutionsResponse | $.VarRef<ListOpenWorkflowExecutionsResponse> | null = this;
		await xxx_messageInfo_ListOpenWorkflowExecutionsResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ListOpenWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsResponse")), src)
	}

	public XXX_Size(): number {
		const m: ListOpenWorkflowExecutionsResponse | $.VarRef<ListOpenWorkflowExecutionsResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsResponse).Size() : ListOpenWorkflowExecutionsResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListOpenWorkflowExecutionsResponse | $.VarRef<ListOpenWorkflowExecutionsResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListOpenWorkflowExecutionsResponse).Unmarshal(b) : ListOpenWorkflowExecutionsResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListOpenWorkflowExecutionsResponse",
		() => new ListOpenWorkflowExecutionsResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetExecutions", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionInfo"))], true), $.methodSignature("GetNextPageToken", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ListOpenWorkflowExecutionsResponse,
		() => [/* @__PURE__ */ $.structField("Executions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionInfo")), [0], 0, true, { tag: "protobuf:\"bytes,1,rep,name=executions,proto3\" json:\"executions,omitempty\"" }), /* @__PURE__ */ $.structField("NextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, true, { tag: "protobuf:\"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 72, true, { tag: "json:\"-\"" })]
	)
}

export class ListClosedWorkflowExecutionsRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get PageSize(): number {
		return this._fields.PageSize
	}

	public set PageSize(value: number) {
		this._fields.PageSize = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
	}

	public get StartTimeFilter(): __goscript_visibility_pb.StartTimeFilter | $.VarRef<__goscript_visibility_pb.StartTimeFilter> | null {
		return this._fields.StartTimeFilter
	}

	public set StartTimeFilter(value: __goscript_visibility_pb.StartTimeFilter | $.VarRef<__goscript_visibility_pb.StartTimeFilter> | null) {
		this._fields.StartTimeFilter = value
	}

	// Types that are valid to be assigned to Filters:
	// 	*ListClosedWorkflowExecutionsRequest_ExecutionFilter
	// 	*ListClosedWorkflowExecutionsRequest_TypeFilter
	// 	*ListClosedWorkflowExecutionsRequest_StatusFilter
	public get Filters(): isListClosedWorkflowExecutionsRequest_Filters | null {
		return this._fields.Filters
	}

	public set Filters(value: isListClosedWorkflowExecutionsRequest_Filters | null) {
		this._fields.Filters = value
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
		Domain: string
		PageSize: number
		NextPageToken: $.Slice<number>
		StartTimeFilter: __goscript_visibility_pb.StartTimeFilter | $.VarRef<__goscript_visibility_pb.StartTimeFilter> | null
		Filters: isListClosedWorkflowExecutionsRequest_Filters | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, PageSize?: number, NextPageToken?: $.Slice<number>, StartTimeFilter?: __goscript_visibility_pb.StartTimeFilter | $.VarRef<__goscript_visibility_pb.StartTimeFilter> | null, Filters?: isListClosedWorkflowExecutionsRequest_Filters | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			PageSize: init?.PageSize ?? (0 as number),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			StartTimeFilter: init?.StartTimeFilter ?? (null! as __goscript_visibility_pb.StartTimeFilter | $.VarRef<__goscript_visibility_pb.StartTimeFilter> | null),
			Filters: init?.Filters ?? (null! as isListClosedWorkflowExecutionsRequest_Filters | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListClosedWorkflowExecutionsRequest {
		return new ListClosedWorkflowExecutionsRequest(this, true)
	}

	public __goscriptAssign(source: ListClosedWorkflowExecutionsRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.PageSize = values.PageSize
		target.NextPageToken = values.NextPageToken
		target.StartTimeFilter = values.StartTimeFilter
		target.Filters = $.assignFieldValue(target.Filters, values.Filters, "apiv1.isListClosedWorkflowExecutionsRequest_Filters")
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_a7341dc69cef4364, $.arrayToSlice<number>([4])]
	}

	public GetDomain(): string {
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListClosedWorkflowExecutionsRequest>(m).Domain
		}
		return ""
	}

	public GetExecutionFilter(): __goscript_visibility_pb.WorkflowExecutionFilter | $.VarRef<__goscript_visibility_pb.WorkflowExecutionFilter> | null {
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		{
			let __goscriptTuple6: any = $.typeAssertTuple<ListClosedWorkflowExecutionsRequest_ExecutionFilter | $.VarRef<ListClosedWorkflowExecutionsRequest_ExecutionFilter> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsRequest).GetFilters() : ListClosedWorkflowExecutionsRequest.prototype.GetFilters.call(m)), /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest_ExecutionFilter"))
			let x: ListClosedWorkflowExecutionsRequest_ExecutionFilter | $.VarRef<ListClosedWorkflowExecutionsRequest_ExecutionFilter> | null = __goscriptTuple6[0]
			let ok = __goscriptTuple6[1]
			if (ok) {
				return $.pointerValue<ListClosedWorkflowExecutionsRequest_ExecutionFilter>(x).ExecutionFilter
			}
		}
		return null
	}

	public GetFilters(): isListClosedWorkflowExecutionsRequest_Filters | null {
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListClosedWorkflowExecutionsRequest>(m).Filters
		}
		return null
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListClosedWorkflowExecutionsRequest>(m).NextPageToken
		}
		return null
	}

	public GetPageSize(): number {
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListClosedWorkflowExecutionsRequest>(m).PageSize
		}
		return 0
	}

	public GetStartTimeFilter(): __goscript_visibility_pb.StartTimeFilter | $.VarRef<__goscript_visibility_pb.StartTimeFilter> | null {
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListClosedWorkflowExecutionsRequest>(m).StartTimeFilter
		}
		return null
	}

	public GetStatusFilter(): __goscript_visibility_pb.StatusFilter | $.VarRef<__goscript_visibility_pb.StatusFilter> | null {
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		{
			let __goscriptTuple7: any = $.typeAssertTuple<ListClosedWorkflowExecutionsRequest_StatusFilter | $.VarRef<ListClosedWorkflowExecutionsRequest_StatusFilter> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsRequest).GetFilters() : ListClosedWorkflowExecutionsRequest.prototype.GetFilters.call(m)), /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest_StatusFilter"))
			let x: ListClosedWorkflowExecutionsRequest_StatusFilter | $.VarRef<ListClosedWorkflowExecutionsRequest_StatusFilter> | null = __goscriptTuple7[0]
			let ok = __goscriptTuple7[1]
			if (ok) {
				return $.pointerValue<ListClosedWorkflowExecutionsRequest_StatusFilter>(x).StatusFilter
			}
		}
		return null
	}

	public GetTypeFilter(): __goscript_visibility_pb.WorkflowTypeFilter | $.VarRef<__goscript_visibility_pb.WorkflowTypeFilter> | null {
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		{
			let __goscriptTuple8: any = $.typeAssertTuple<ListClosedWorkflowExecutionsRequest_TypeFilter | $.VarRef<ListClosedWorkflowExecutionsRequest_TypeFilter> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsRequest).GetFilters() : ListClosedWorkflowExecutionsRequest.prototype.GetFilters.call(m)), /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest_TypeFilter"))
			let x: ListClosedWorkflowExecutionsRequest_TypeFilter | $.VarRef<ListClosedWorkflowExecutionsRequest_TypeFilter> | null = __goscriptTuple8[0]
			let ok = __goscriptTuple8[1]
			if (ok) {
				return $.pointerValue<ListClosedWorkflowExecutionsRequest_TypeFilter>(x).TypeFilter
			}
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsRequest).Size() : ListClosedWorkflowExecutionsRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple9: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListClosedWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsRequest).Size() : ListClosedWorkflowExecutionsRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListClosedWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		const m$: ListClosedWorkflowExecutionsRequest = m == null ? $.pointerTarget<ListClosedWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListClosedWorkflowExecutionsRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListClosedWorkflowExecutionsRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListClosedWorkflowExecutionsRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListClosedWorkflowExecutionsRequest).XXX_unrecognized)
		}
		if ((m$ as ListClosedWorkflowExecutionsRequest).Filters != null) {
			{
				let size = $.pointerValue<Exclude<isListClosedWorkflowExecutionsRequest_Filters, null>>((m$ as ListClosedWorkflowExecutionsRequest).Filters).Size()
				i = i - (size)
				{
					let [, err] = $.pointerValue<Exclude<isListClosedWorkflowExecutionsRequest_Filters, null>>((m$ as ListClosedWorkflowExecutionsRequest).Filters).MarshalTo($.goSlice(dAtA, i, undefined))
					if (err != null) {
						return [0, err]
					}
				}
			}
		}
		if ((m$ as ListClosedWorkflowExecutionsRequest).StartTimeFilter != null) {
			{
				let [size, err] = __goscript_visibility_pb.StartTimeFilter.prototype.MarshalToSizedBuffer.call((m$ as ListClosedWorkflowExecutionsRequest).StartTimeFilter, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceVisibility(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.sliceLen((m$ as ListClosedWorkflowExecutionsRequest).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as ListClosedWorkflowExecutionsRequest).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListClosedWorkflowExecutionsRequest).NextPageToken)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.sliceLen((m$ as ListClosedWorkflowExecutionsRequest).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as ListClosedWorkflowExecutionsRequest).PageSize != 0) {
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64((m$ as ListClosedWorkflowExecutionsRequest).PageSize))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ($.stringLen((m$ as ListClosedWorkflowExecutionsRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as ListClosedWorkflowExecutionsRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListClosedWorkflowExecutionsRequest).Domain)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.stringLen((m$ as ListClosedWorkflowExecutionsRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		$.assignStruct($.pointerValue<ListClosedWorkflowExecutionsRequest>(m), $.markAsStructValue(new ListClosedWorkflowExecutionsRequest()))
	}

	public Size(): number {
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		let n: number = 0
		const m$: ListClosedWorkflowExecutionsRequest = m == null ? $.pointerTarget<ListClosedWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListClosedWorkflowExecutionsRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ListClosedWorkflowExecutionsRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as ListClosedWorkflowExecutionsRequest).PageSize != 0) {
			n = n + (1 + sovServiceVisibility($.uint64((m$ as ListClosedWorkflowExecutionsRequest).PageSize)))
		}
		l = $.sliceLen((m$ as ListClosedWorkflowExecutionsRequest).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as ListClosedWorkflowExecutionsRequest).StartTimeFilter != null) {
			l = __goscript_visibility_pb.StartTimeFilter.prototype.Size.call((m$ as ListClosedWorkflowExecutionsRequest).StartTimeFilter)
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as ListClosedWorkflowExecutionsRequest).Filters != null) {
			n = n + ($.pointerValue<Exclude<isListClosedWorkflowExecutionsRequest_Filters, null>>((m$ as ListClosedWorkflowExecutionsRequest).Filters).Size())
		}
		if ((m$ as ListClosedWorkflowExecutionsRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListClosedWorkflowExecutionsRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ListClosedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		const m$: ListClosedWorkflowExecutionsRequest = m == null ? $.pointerTarget<ListClosedWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListClosedWorkflowExecutionsRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow6 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceVisibility
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
				return fmt.Errorf("proto: ListClosedWorkflowExecutionsRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListClosedWorkflowExecutionsRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Domain", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
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
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListClosedWorkflowExecutionsRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field PageSize", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ListClosedWorkflowExecutionsRequest).PageSize = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++;
						;(m$ as ListClosedWorkflowExecutionsRequest).PageSize = (m$ as ListClosedWorkflowExecutionsRequest).PageSize | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field NextPageToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListClosedWorkflowExecutionsRequest).NextPageToken = $.appendSlice($.goSlice((m$ as ListClosedWorkflowExecutionsRequest).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as ListClosedWorkflowExecutionsRequest).NextPageToken == null) {
						;(m$ as ListClosedWorkflowExecutionsRequest).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartTimeFilter", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
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
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ListClosedWorkflowExecutionsRequest).StartTimeFilter == null) {
						;(m$ as ListClosedWorkflowExecutionsRequest).StartTimeFilter = new __goscript_visibility_pb.StartTimeFilter()
					}
					{
						let err = __goscript_visibility_pb.StartTimeFilter.prototype.Unmarshal.call((m$ as ListClosedWorkflowExecutionsRequest).StartTimeFilter, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ExecutionFilter", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
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
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: __goscript_visibility_pb.WorkflowExecutionFilter | $.VarRef<__goscript_visibility_pb.WorkflowExecutionFilter> | null = new __goscript_visibility_pb.WorkflowExecutionFilter()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as __goscript_visibility_pb.WorkflowExecutionFilter).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : __goscript_visibility_pb.WorkflowExecutionFilter.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as ListClosedWorkflowExecutionsRequest).Filters = $.interfaceValue<isListClosedWorkflowExecutionsRequest_Filters | null>(new ListClosedWorkflowExecutionsRequest_ExecutionFilter({ExecutionFilter: v}), "*apiv1.ListClosedWorkflowExecutionsRequest_ExecutionFilter", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest_ExecutionFilter"))
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TypeFilter", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
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
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: __goscript_visibility_pb.WorkflowTypeFilter | $.VarRef<__goscript_visibility_pb.WorkflowTypeFilter> | null = new __goscript_visibility_pb.WorkflowTypeFilter()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as __goscript_visibility_pb.WorkflowTypeFilter).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : __goscript_visibility_pb.WorkflowTypeFilter.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as ListClosedWorkflowExecutionsRequest).Filters = $.interfaceValue<isListClosedWorkflowExecutionsRequest_Filters | null>(new ListClosedWorkflowExecutionsRequest_TypeFilter({TypeFilter: v}), "*apiv1.ListClosedWorkflowExecutionsRequest_TypeFilter", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest_TypeFilter"))
					iNdEx = postIndex
					break
				}
				case 7:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StatusFilter", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
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
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					let v: __goscript_visibility_pb.StatusFilter | $.VarRef<__goscript_visibility_pb.StatusFilter> | null = new __goscript_visibility_pb.StatusFilter()
					{
						let err = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as __goscript_visibility_pb.StatusFilter).Unmarshal($.goSlice(dAtA, iNdEx, postIndex)) : __goscript_visibility_pb.StatusFilter.prototype.Unmarshal.call(v, $.goSlice(dAtA, iNdEx, postIndex)))
						if (err != null) {
							return err
						}
					}
					;(m$ as ListClosedWorkflowExecutionsRequest).Filters = $.interfaceValue<isListClosedWorkflowExecutionsRequest_Filters | null>(new ListClosedWorkflowExecutionsRequest_StatusFilter({StatusFilter: v}), "*apiv1.ListClosedWorkflowExecutionsRequest_StatusFilter", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest_StatusFilter"))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListClosedWorkflowExecutionsRequest).XXX_unrecognized = $.appendSlice((m$ as ListClosedWorkflowExecutionsRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		await xxx_messageInfo_ListClosedWorkflowExecutionsRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ListClosedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListClosedWorkflowExecutionsRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ListClosedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsRequest).MarshalToSizedBuffer(b) : ListClosedWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		await xxx_messageInfo_ListClosedWorkflowExecutionsRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ListClosedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest")), src)
	}

	public XXX_OneofWrappers(): $.Slice<any> {
		return $.arrayToSlice<any>([$.interfaceValue(null, "*apiv1.ListClosedWorkflowExecutionsRequest_ExecutionFilter", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest_ExecutionFilter")), $.interfaceValue(null, "*apiv1.ListClosedWorkflowExecutionsRequest_TypeFilter", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest_TypeFilter")), $.interfaceValue(null, "*apiv1.ListClosedWorkflowExecutionsRequest_StatusFilter", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest_StatusFilter"))])
	}

	public XXX_Size(): number {
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsRequest).Size() : ListClosedWorkflowExecutionsRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListClosedWorkflowExecutionsRequest | $.VarRef<ListClosedWorkflowExecutionsRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsRequest).Unmarshal(b) : ListClosedWorkflowExecutionsRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListClosedWorkflowExecutionsRequest",
		() => new ListClosedWorkflowExecutionsRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetExecutionFilter", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionFilter")], true), $.methodSignature("GetFilters", [], ["apiv1.isListClosedWorkflowExecutionsRequest_Filters"], true), $.methodSignature("GetNextPageToken", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("GetPageSize", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetStartTimeFilter", [], [/* @__PURE__ */ $.pointerType("apiv1.StartTimeFilter")], true), $.methodSignature("GetStatusFilter", [], [/* @__PURE__ */ $.pointerType("apiv1.StatusFilter")], true), $.methodSignature("GetTypeFilter", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowTypeFilter")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_OneofWrappers", [], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ListClosedWorkflowExecutionsRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("PageSize", /* @__PURE__ */ $.basicType("int32"), [1], 16, true, { tag: "protobuf:\"varint,2,opt,name=page_size,json=pageSize,proto3\" json:\"page_size,omitempty\"" }), /* @__PURE__ */ $.structField("NextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }), /* @__PURE__ */ $.structField("StartTimeFilter", /* @__PURE__ */ $.pointerType("apiv1.StartTimeFilter"), [3], 48, true, { tag: "protobuf:\"bytes,4,opt,name=start_time_filter,json=startTimeFilter,proto3\" json:\"start_time_filter,omitempty\"" }), /* @__PURE__ */ $.structField("Filters", "apiv1.isListClosedWorkflowExecutionsRequest_Filters", [4], 56, true, { tag: "protobuf_oneof:\"filters\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [5], 72, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 72, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [7], 96, true, { tag: "json:\"-\"" })]
	)
}

export class ListClosedWorkflowExecutionsRequest_ExecutionFilter {
	public get ExecutionFilter(): __goscript_visibility_pb.WorkflowExecutionFilter | $.VarRef<__goscript_visibility_pb.WorkflowExecutionFilter> | null {
		return this._fields.ExecutionFilter
	}

	public set ExecutionFilter(value: __goscript_visibility_pb.WorkflowExecutionFilter | $.VarRef<__goscript_visibility_pb.WorkflowExecutionFilter> | null) {
		this._fields.ExecutionFilter = value
	}

	public _fields: {
		ExecutionFilter: __goscript_visibility_pb.WorkflowExecutionFilter | $.VarRef<__goscript_visibility_pb.WorkflowExecutionFilter> | null
	}

	constructor(init?: Partial<{ExecutionFilter?: __goscript_visibility_pb.WorkflowExecutionFilter | $.VarRef<__goscript_visibility_pb.WorkflowExecutionFilter> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ExecutionFilter: init?.ExecutionFilter ?? (null! as __goscript_visibility_pb.WorkflowExecutionFilter | $.VarRef<__goscript_visibility_pb.WorkflowExecutionFilter> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListClosedWorkflowExecutionsRequest_ExecutionFilter {
		return new ListClosedWorkflowExecutionsRequest_ExecutionFilter(this, true)
	}

	public __goscriptAssign(source: ListClosedWorkflowExecutionsRequest_ExecutionFilter): void {
		const target = this._fields
		const values = source._fields
		target.ExecutionFilter = values.ExecutionFilter
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListClosedWorkflowExecutionsRequest_ExecutionFilter | $.VarRef<ListClosedWorkflowExecutionsRequest_ExecutionFilter> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsRequest_ExecutionFilter).Size() : ListClosedWorkflowExecutionsRequest_ExecutionFilter.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsRequest_ExecutionFilter).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListClosedWorkflowExecutionsRequest_ExecutionFilter.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListClosedWorkflowExecutionsRequest_ExecutionFilter | $.VarRef<ListClosedWorkflowExecutionsRequest_ExecutionFilter> | null = this;
		const m$: ListClosedWorkflowExecutionsRequest_ExecutionFilter = m == null ? $.pointerTarget<ListClosedWorkflowExecutionsRequest_ExecutionFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListClosedWorkflowExecutionsRequest_ExecutionFilter>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as ListClosedWorkflowExecutionsRequest_ExecutionFilter).ExecutionFilter != null) {
			{
				let [size, err] = __goscript_visibility_pb.WorkflowExecutionFilter.prototype.MarshalToSizedBuffer.call((m$ as ListClosedWorkflowExecutionsRequest_ExecutionFilter).ExecutionFilter, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceVisibility(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: ListClosedWorkflowExecutionsRequest_ExecutionFilter | $.VarRef<ListClosedWorkflowExecutionsRequest_ExecutionFilter> | null = this;
		let n: number = 0
		const m$: ListClosedWorkflowExecutionsRequest_ExecutionFilter = m == null ? $.pointerTarget<ListClosedWorkflowExecutionsRequest_ExecutionFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListClosedWorkflowExecutionsRequest_ExecutionFilter>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as ListClosedWorkflowExecutionsRequest_ExecutionFilter).ExecutionFilter != null) {
			l = __goscript_visibility_pb.WorkflowExecutionFilter.prototype.Size.call((m$ as ListClosedWorkflowExecutionsRequest_ExecutionFilter).ExecutionFilter)
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		return n
	}

	public isListClosedWorkflowExecutionsRequest_Filters(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListClosedWorkflowExecutionsRequest_ExecutionFilter",
		() => new ListClosedWorkflowExecutionsRequest_ExecutionFilter(),
		() => [$.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("isListClosedWorkflowExecutionsRequest_Filters", [], [], true)],
		ListClosedWorkflowExecutionsRequest_ExecutionFilter,
		() => [/* @__PURE__ */ $.structField("ExecutionFilter", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionFilter"), [0], 0, true, { tag: "protobuf:\"bytes,5,opt,name=execution_filter,json=executionFilter,proto3,oneof\" json:\"execution_filter,omitempty\"" })]
	)
}

export class ListClosedWorkflowExecutionsRequest_TypeFilter {
	public get TypeFilter(): __goscript_visibility_pb.WorkflowTypeFilter | $.VarRef<__goscript_visibility_pb.WorkflowTypeFilter> | null {
		return this._fields.TypeFilter
	}

	public set TypeFilter(value: __goscript_visibility_pb.WorkflowTypeFilter | $.VarRef<__goscript_visibility_pb.WorkflowTypeFilter> | null) {
		this._fields.TypeFilter = value
	}

	public _fields: {
		TypeFilter: __goscript_visibility_pb.WorkflowTypeFilter | $.VarRef<__goscript_visibility_pb.WorkflowTypeFilter> | null
	}

	constructor(init?: Partial<{TypeFilter?: __goscript_visibility_pb.WorkflowTypeFilter | $.VarRef<__goscript_visibility_pb.WorkflowTypeFilter> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			TypeFilter: init?.TypeFilter ?? (null! as __goscript_visibility_pb.WorkflowTypeFilter | $.VarRef<__goscript_visibility_pb.WorkflowTypeFilter> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListClosedWorkflowExecutionsRequest_TypeFilter {
		return new ListClosedWorkflowExecutionsRequest_TypeFilter(this, true)
	}

	public __goscriptAssign(source: ListClosedWorkflowExecutionsRequest_TypeFilter): void {
		const target = this._fields
		const values = source._fields
		target.TypeFilter = values.TypeFilter
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListClosedWorkflowExecutionsRequest_TypeFilter | $.VarRef<ListClosedWorkflowExecutionsRequest_TypeFilter> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsRequest_TypeFilter).Size() : ListClosedWorkflowExecutionsRequest_TypeFilter.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsRequest_TypeFilter).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListClosedWorkflowExecutionsRequest_TypeFilter.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListClosedWorkflowExecutionsRequest_TypeFilter | $.VarRef<ListClosedWorkflowExecutionsRequest_TypeFilter> | null = this;
		const m$: ListClosedWorkflowExecutionsRequest_TypeFilter = m == null ? $.pointerTarget<ListClosedWorkflowExecutionsRequest_TypeFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListClosedWorkflowExecutionsRequest_TypeFilter>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as ListClosedWorkflowExecutionsRequest_TypeFilter).TypeFilter != null) {
			{
				let [size, err] = __goscript_visibility_pb.WorkflowTypeFilter.prototype.MarshalToSizedBuffer.call((m$ as ListClosedWorkflowExecutionsRequest_TypeFilter).TypeFilter, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceVisibility(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: ListClosedWorkflowExecutionsRequest_TypeFilter | $.VarRef<ListClosedWorkflowExecutionsRequest_TypeFilter> | null = this;
		let n: number = 0
		const m$: ListClosedWorkflowExecutionsRequest_TypeFilter = m == null ? $.pointerTarget<ListClosedWorkflowExecutionsRequest_TypeFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListClosedWorkflowExecutionsRequest_TypeFilter>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as ListClosedWorkflowExecutionsRequest_TypeFilter).TypeFilter != null) {
			l = __goscript_visibility_pb.WorkflowTypeFilter.prototype.Size.call((m$ as ListClosedWorkflowExecutionsRequest_TypeFilter).TypeFilter)
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		return n
	}

	public isListClosedWorkflowExecutionsRequest_Filters(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListClosedWorkflowExecutionsRequest_TypeFilter",
		() => new ListClosedWorkflowExecutionsRequest_TypeFilter(),
		() => [$.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("isListClosedWorkflowExecutionsRequest_Filters", [], [], true)],
		ListClosedWorkflowExecutionsRequest_TypeFilter,
		() => [/* @__PURE__ */ $.structField("TypeFilter", /* @__PURE__ */ $.pointerType("apiv1.WorkflowTypeFilter"), [0], 0, true, { tag: "protobuf:\"bytes,6,opt,name=type_filter,json=typeFilter,proto3,oneof\" json:\"type_filter,omitempty\"" })]
	)
}

export class ListClosedWorkflowExecutionsRequest_StatusFilter {
	public get StatusFilter(): __goscript_visibility_pb.StatusFilter | $.VarRef<__goscript_visibility_pb.StatusFilter> | null {
		return this._fields.StatusFilter
	}

	public set StatusFilter(value: __goscript_visibility_pb.StatusFilter | $.VarRef<__goscript_visibility_pb.StatusFilter> | null) {
		this._fields.StatusFilter = value
	}

	public _fields: {
		StatusFilter: __goscript_visibility_pb.StatusFilter | $.VarRef<__goscript_visibility_pb.StatusFilter> | null
	}

	constructor(init?: Partial<{StatusFilter?: __goscript_visibility_pb.StatusFilter | $.VarRef<__goscript_visibility_pb.StatusFilter> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			StatusFilter: init?.StatusFilter ?? (null! as __goscript_visibility_pb.StatusFilter | $.VarRef<__goscript_visibility_pb.StatusFilter> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListClosedWorkflowExecutionsRequest_StatusFilter {
		return new ListClosedWorkflowExecutionsRequest_StatusFilter(this, true)
	}

	public __goscriptAssign(source: ListClosedWorkflowExecutionsRequest_StatusFilter): void {
		const target = this._fields
		const values = source._fields
		target.StatusFilter = values.StatusFilter
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListClosedWorkflowExecutionsRequest_StatusFilter | $.VarRef<ListClosedWorkflowExecutionsRequest_StatusFilter> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsRequest_StatusFilter).Size() : ListClosedWorkflowExecutionsRequest_StatusFilter.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsRequest_StatusFilter).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListClosedWorkflowExecutionsRequest_StatusFilter.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListClosedWorkflowExecutionsRequest_StatusFilter | $.VarRef<ListClosedWorkflowExecutionsRequest_StatusFilter> | null = this;
		const m$: ListClosedWorkflowExecutionsRequest_StatusFilter = m == null ? $.pointerTarget<ListClosedWorkflowExecutionsRequest_StatusFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListClosedWorkflowExecutionsRequest_StatusFilter>(m)
		let i = $.sliceLen(dAtA)
		if ((m$ as ListClosedWorkflowExecutionsRequest_StatusFilter).StatusFilter != null) {
			{
				let [size, err] = __goscript_visibility_pb.StatusFilter.prototype.MarshalToSizedBuffer.call((m$ as ListClosedWorkflowExecutionsRequest_StatusFilter).StatusFilter, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceVisibility(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x3a
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: ListClosedWorkflowExecutionsRequest_StatusFilter | $.VarRef<ListClosedWorkflowExecutionsRequest_StatusFilter> | null = this;
		let n: number = 0
		const m$: ListClosedWorkflowExecutionsRequest_StatusFilter = m == null ? $.pointerTarget<ListClosedWorkflowExecutionsRequest_StatusFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListClosedWorkflowExecutionsRequest_StatusFilter>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as ListClosedWorkflowExecutionsRequest_StatusFilter).StatusFilter != null) {
			l = __goscript_visibility_pb.StatusFilter.prototype.Size.call((m$ as ListClosedWorkflowExecutionsRequest_StatusFilter).StatusFilter)
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		return n
	}

	public isListClosedWorkflowExecutionsRequest_Filters(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListClosedWorkflowExecutionsRequest_StatusFilter",
		() => new ListClosedWorkflowExecutionsRequest_StatusFilter(),
		() => [$.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("isListClosedWorkflowExecutionsRequest_Filters", [], [], true)],
		ListClosedWorkflowExecutionsRequest_StatusFilter,
		() => [/* @__PURE__ */ $.structField("StatusFilter", /* @__PURE__ */ $.pointerType("apiv1.StatusFilter"), [0], 0, true, { tag: "protobuf:\"bytes,7,opt,name=status_filter,json=statusFilter,proto3,oneof\" json:\"status_filter,omitempty\"" })]
	)
}

export class ListClosedWorkflowExecutionsResponse {
	public get Executions(): $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null> {
		return this._fields.Executions
	}

	public set Executions(value: $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>) {
		this._fields.Executions = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
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
		Executions: $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>
		NextPageToken: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Executions?: $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>, NextPageToken?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Executions: init?.Executions ?? (null! as $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListClosedWorkflowExecutionsResponse {
		return new ListClosedWorkflowExecutionsResponse(this, true)
	}

	public __goscriptAssign(source: ListClosedWorkflowExecutionsResponse): void {
		const target = this._fields
		const values = source._fields
		target.Executions = values.Executions
		target.NextPageToken = values.NextPageToken
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_a7341dc69cef4364, $.arrayToSlice<number>([5])]
	}

	public GetExecutions(): $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null> {
		const m: ListClosedWorkflowExecutionsResponse | $.VarRef<ListClosedWorkflowExecutionsResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ListClosedWorkflowExecutionsResponse>(m).Executions
		}
		return null
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: ListClosedWorkflowExecutionsResponse | $.VarRef<ListClosedWorkflowExecutionsResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ListClosedWorkflowExecutionsResponse>(m).NextPageToken
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListClosedWorkflowExecutionsResponse | $.VarRef<ListClosedWorkflowExecutionsResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsResponse).Size() : ListClosedWorkflowExecutionsResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple10: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListClosedWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple10[0]
		err = __goscriptTuple10[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListClosedWorkflowExecutionsResponse | $.VarRef<ListClosedWorkflowExecutionsResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsResponse).Size() : ListClosedWorkflowExecutionsResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListClosedWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListClosedWorkflowExecutionsResponse | $.VarRef<ListClosedWorkflowExecutionsResponse> | null = this;
		const m$: ListClosedWorkflowExecutionsResponse = m == null ? $.pointerTarget<ListClosedWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListClosedWorkflowExecutionsResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListClosedWorkflowExecutionsResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListClosedWorkflowExecutionsResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListClosedWorkflowExecutionsResponse).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as ListClosedWorkflowExecutionsResponse).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as ListClosedWorkflowExecutionsResponse).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListClosedWorkflowExecutionsResponse).NextPageToken)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.sliceLen((m$ as ListClosedWorkflowExecutionsResponse).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.sliceLen((m$ as ListClosedWorkflowExecutionsResponse).Executions) > 0) {
			for (let __goscriptSliceWindow7 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as ListClosedWorkflowExecutionsResponse).Executions) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_workflow_pb.WorkflowExecutionInfo.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as ListClosedWorkflowExecutionsResponse).Executions!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceVisibility(dAtA, i, $.uint64(size))
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
		let m: ListClosedWorkflowExecutionsResponse | $.VarRef<ListClosedWorkflowExecutionsResponse> | null = this;
		$.assignStruct($.pointerValue<ListClosedWorkflowExecutionsResponse>(m), $.markAsStructValue(new ListClosedWorkflowExecutionsResponse()))
	}

	public Size(): number {
		const m: ListClosedWorkflowExecutionsResponse | $.VarRef<ListClosedWorkflowExecutionsResponse> | null = this;
		let n: number = 0
		const m$: ListClosedWorkflowExecutionsResponse = m == null ? $.pointerTarget<ListClosedWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListClosedWorkflowExecutionsResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as ListClosedWorkflowExecutionsResponse).Executions) > 0) {
			for (let __goscriptRangeTarget2 = (m$ as ListClosedWorkflowExecutionsResponse).Executions, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_workflow_pb.WorkflowExecutionInfo).Size() : __goscript_workflow_pb.WorkflowExecutionInfo.prototype.Size.call(e))
				n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
			}
		}
		l = $.sliceLen((m$ as ListClosedWorkflowExecutionsResponse).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as ListClosedWorkflowExecutionsResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListClosedWorkflowExecutionsResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ListClosedWorkflowExecutionsResponse | $.VarRef<ListClosedWorkflowExecutionsResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ListClosedWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListClosedWorkflowExecutionsResponse | $.VarRef<ListClosedWorkflowExecutionsResponse> | null = this;
		const m$: ListClosedWorkflowExecutionsResponse = m == null ? $.pointerTarget<ListClosedWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListClosedWorkflowExecutionsResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow8 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceVisibility
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
				return fmt.Errorf("proto: ListClosedWorkflowExecutionsResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListClosedWorkflowExecutionsResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Executions", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
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
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListClosedWorkflowExecutionsResponse).Executions = $.appendOne((m$ as ListClosedWorkflowExecutionsResponse).Executions, new __goscript_workflow_pb.WorkflowExecutionInfo(), $.appendZeros.nil)
					{
						let err = __goscript_workflow_pb.WorkflowExecutionInfo.prototype.Unmarshal.call($.arrayIndex((m$ as ListClosedWorkflowExecutionsResponse).Executions!, $.sliceLen((m$ as ListClosedWorkflowExecutionsResponse).Executions) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field NextPageToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
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
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListClosedWorkflowExecutionsResponse).NextPageToken = $.appendSlice($.goSlice((m$ as ListClosedWorkflowExecutionsResponse).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as ListClosedWorkflowExecutionsResponse).NextPageToken == null) {
						;(m$ as ListClosedWorkflowExecutionsResponse).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListClosedWorkflowExecutionsResponse).XXX_unrecognized = $.appendSlice((m$ as ListClosedWorkflowExecutionsResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ListClosedWorkflowExecutionsResponse | $.VarRef<ListClosedWorkflowExecutionsResponse> | null = this;
		await xxx_messageInfo_ListClosedWorkflowExecutionsResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ListClosedWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ListClosedWorkflowExecutionsResponse | $.VarRef<ListClosedWorkflowExecutionsResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListClosedWorkflowExecutionsResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ListClosedWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsResponse).MarshalToSizedBuffer(b) : ListClosedWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ListClosedWorkflowExecutionsResponse | $.VarRef<ListClosedWorkflowExecutionsResponse> | null = this;
		await xxx_messageInfo_ListClosedWorkflowExecutionsResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ListClosedWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsResponse")), src)
	}

	public XXX_Size(): number {
		const m: ListClosedWorkflowExecutionsResponse | $.VarRef<ListClosedWorkflowExecutionsResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsResponse).Size() : ListClosedWorkflowExecutionsResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListClosedWorkflowExecutionsResponse | $.VarRef<ListClosedWorkflowExecutionsResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListClosedWorkflowExecutionsResponse).Unmarshal(b) : ListClosedWorkflowExecutionsResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListClosedWorkflowExecutionsResponse",
		() => new ListClosedWorkflowExecutionsResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetExecutions", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionInfo"))], true), $.methodSignature("GetNextPageToken", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ListClosedWorkflowExecutionsResponse,
		() => [/* @__PURE__ */ $.structField("Executions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionInfo")), [0], 0, true, { tag: "protobuf:\"bytes,1,rep,name=executions,proto3\" json:\"executions,omitempty\"" }), /* @__PURE__ */ $.structField("NextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, true, { tag: "protobuf:\"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 72, true, { tag: "json:\"-\"" })]
	)
}

export class ListArchivedWorkflowExecutionsRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get PageSize(): number {
		return this._fields.PageSize
	}

	public set PageSize(value: number) {
		this._fields.PageSize = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
	}

	public get Query(): string {
		return this._fields.Query
	}

	public set Query(value: string) {
		this._fields.Query = value
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
		Domain: string
		PageSize: number
		NextPageToken: $.Slice<number>
		Query: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, PageSize?: number, NextPageToken?: $.Slice<number>, Query?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			PageSize: init?.PageSize ?? (0 as number),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			Query: init?.Query ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListArchivedWorkflowExecutionsRequest {
		return new ListArchivedWorkflowExecutionsRequest(this, true)
	}

	public __goscriptAssign(source: ListArchivedWorkflowExecutionsRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.PageSize = values.PageSize
		target.NextPageToken = values.NextPageToken
		target.Query = values.Query
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_a7341dc69cef4364, $.arrayToSlice<number>([6])]
	}

	public GetDomain(): string {
		const m: ListArchivedWorkflowExecutionsRequest | $.VarRef<ListArchivedWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListArchivedWorkflowExecutionsRequest>(m).Domain
		}
		return ""
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: ListArchivedWorkflowExecutionsRequest | $.VarRef<ListArchivedWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListArchivedWorkflowExecutionsRequest>(m).NextPageToken
		}
		return null
	}

	public GetPageSize(): number {
		const m: ListArchivedWorkflowExecutionsRequest | $.VarRef<ListArchivedWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListArchivedWorkflowExecutionsRequest>(m).PageSize
		}
		return 0
	}

	public GetQuery(): string {
		const m: ListArchivedWorkflowExecutionsRequest | $.VarRef<ListArchivedWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListArchivedWorkflowExecutionsRequest>(m).Query
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListArchivedWorkflowExecutionsRequest | $.VarRef<ListArchivedWorkflowExecutionsRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListArchivedWorkflowExecutionsRequest).Size() : ListArchivedWorkflowExecutionsRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple11: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListArchivedWorkflowExecutionsRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListArchivedWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple11[0]
		err = __goscriptTuple11[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListArchivedWorkflowExecutionsRequest | $.VarRef<ListArchivedWorkflowExecutionsRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListArchivedWorkflowExecutionsRequest).Size() : ListArchivedWorkflowExecutionsRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListArchivedWorkflowExecutionsRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListArchivedWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListArchivedWorkflowExecutionsRequest | $.VarRef<ListArchivedWorkflowExecutionsRequest> | null = this;
		const m$: ListArchivedWorkflowExecutionsRequest = m == null ? $.pointerTarget<ListArchivedWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListArchivedWorkflowExecutionsRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListArchivedWorkflowExecutionsRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListArchivedWorkflowExecutionsRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListArchivedWorkflowExecutionsRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as ListArchivedWorkflowExecutionsRequest).Query) > 0) {
			i = i - ($.stringLen((m$ as ListArchivedWorkflowExecutionsRequest).Query))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListArchivedWorkflowExecutionsRequest).Query)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.stringLen((m$ as ListArchivedWorkflowExecutionsRequest).Query)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.sliceLen((m$ as ListArchivedWorkflowExecutionsRequest).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as ListArchivedWorkflowExecutionsRequest).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListArchivedWorkflowExecutionsRequest).NextPageToken)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.sliceLen((m$ as ListArchivedWorkflowExecutionsRequest).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as ListArchivedWorkflowExecutionsRequest).PageSize != 0) {
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64((m$ as ListArchivedWorkflowExecutionsRequest).PageSize))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ($.stringLen((m$ as ListArchivedWorkflowExecutionsRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as ListArchivedWorkflowExecutionsRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListArchivedWorkflowExecutionsRequest).Domain)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.stringLen((m$ as ListArchivedWorkflowExecutionsRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ListArchivedWorkflowExecutionsRequest | $.VarRef<ListArchivedWorkflowExecutionsRequest> | null = this;
		$.assignStruct($.pointerValue<ListArchivedWorkflowExecutionsRequest>(m), $.markAsStructValue(new ListArchivedWorkflowExecutionsRequest()))
	}

	public Size(): number {
		const m: ListArchivedWorkflowExecutionsRequest | $.VarRef<ListArchivedWorkflowExecutionsRequest> | null = this;
		let n: number = 0
		const m$: ListArchivedWorkflowExecutionsRequest = m == null ? $.pointerTarget<ListArchivedWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListArchivedWorkflowExecutionsRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ListArchivedWorkflowExecutionsRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as ListArchivedWorkflowExecutionsRequest).PageSize != 0) {
			n = n + (1 + sovServiceVisibility($.uint64((m$ as ListArchivedWorkflowExecutionsRequest).PageSize)))
		}
		l = $.sliceLen((m$ as ListArchivedWorkflowExecutionsRequest).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		l = $.stringLen((m$ as ListArchivedWorkflowExecutionsRequest).Query)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as ListArchivedWorkflowExecutionsRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListArchivedWorkflowExecutionsRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ListArchivedWorkflowExecutionsRequest | $.VarRef<ListArchivedWorkflowExecutionsRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ListArchivedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListArchivedWorkflowExecutionsRequest | $.VarRef<ListArchivedWorkflowExecutionsRequest> | null = this;
		const m$: ListArchivedWorkflowExecutionsRequest = m == null ? $.pointerTarget<ListArchivedWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListArchivedWorkflowExecutionsRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow9 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceVisibility
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
				return fmt.Errorf("proto: ListArchivedWorkflowExecutionsRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListArchivedWorkflowExecutionsRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Domain", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
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
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListArchivedWorkflowExecutionsRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field PageSize", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ListArchivedWorkflowExecutionsRequest).PageSize = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, iNdEx)] as number)
						iNdEx++;
						;(m$ as ListArchivedWorkflowExecutionsRequest).PageSize = (m$ as ListArchivedWorkflowExecutionsRequest).PageSize | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field NextPageToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListArchivedWorkflowExecutionsRequest).NextPageToken = $.appendSlice($.goSlice((m$ as ListArchivedWorkflowExecutionsRequest).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as ListArchivedWorkflowExecutionsRequest).NextPageToken == null) {
						;(m$ as ListArchivedWorkflowExecutionsRequest).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Query", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
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
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListArchivedWorkflowExecutionsRequest).Query = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListArchivedWorkflowExecutionsRequest).XXX_unrecognized = $.appendSlice((m$ as ListArchivedWorkflowExecutionsRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ListArchivedWorkflowExecutionsRequest | $.VarRef<ListArchivedWorkflowExecutionsRequest> | null = this;
		await xxx_messageInfo_ListArchivedWorkflowExecutionsRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ListArchivedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ListArchivedWorkflowExecutionsRequest | $.VarRef<ListArchivedWorkflowExecutionsRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListArchivedWorkflowExecutionsRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ListArchivedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListArchivedWorkflowExecutionsRequest).MarshalToSizedBuffer(b) : ListArchivedWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ListArchivedWorkflowExecutionsRequest | $.VarRef<ListArchivedWorkflowExecutionsRequest> | null = this;
		await xxx_messageInfo_ListArchivedWorkflowExecutionsRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ListArchivedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsRequest")), src)
	}

	public XXX_Size(): number {
		const m: ListArchivedWorkflowExecutionsRequest | $.VarRef<ListArchivedWorkflowExecutionsRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListArchivedWorkflowExecutionsRequest).Size() : ListArchivedWorkflowExecutionsRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListArchivedWorkflowExecutionsRequest | $.VarRef<ListArchivedWorkflowExecutionsRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListArchivedWorkflowExecutionsRequest).Unmarshal(b) : ListArchivedWorkflowExecutionsRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListArchivedWorkflowExecutionsRequest",
		() => new ListArchivedWorkflowExecutionsRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetNextPageToken", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("GetPageSize", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetQuery", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ListArchivedWorkflowExecutionsRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("PageSize", /* @__PURE__ */ $.basicType("int32"), [1], 16, true, { tag: "protobuf:\"varint,2,opt,name=page_size,json=pageSize,proto3\" json:\"page_size,omitempty\"" }), /* @__PURE__ */ $.structField("NextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }), /* @__PURE__ */ $.structField("Query", /* @__PURE__ */ $.basicType("string"), [3], 48, true, { tag: "protobuf:\"bytes,4,opt,name=query,proto3\" json:\"query,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [4], 64, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 64, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [6], 88, true, { tag: "json:\"-\"" })]
	)
}

export class ListArchivedWorkflowExecutionsResponse {
	public get Executions(): $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null> {
		return this._fields.Executions
	}

	public set Executions(value: $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>) {
		this._fields.Executions = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
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
		Executions: $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>
		NextPageToken: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Executions?: $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>, NextPageToken?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Executions: init?.Executions ?? (null! as $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListArchivedWorkflowExecutionsResponse {
		return new ListArchivedWorkflowExecutionsResponse(this, true)
	}

	public __goscriptAssign(source: ListArchivedWorkflowExecutionsResponse): void {
		const target = this._fields
		const values = source._fields
		target.Executions = values.Executions
		target.NextPageToken = values.NextPageToken
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_a7341dc69cef4364, $.arrayToSlice<number>([7])]
	}

	public GetExecutions(): $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null> {
		const m: ListArchivedWorkflowExecutionsResponse | $.VarRef<ListArchivedWorkflowExecutionsResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ListArchivedWorkflowExecutionsResponse>(m).Executions
		}
		return null
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: ListArchivedWorkflowExecutionsResponse | $.VarRef<ListArchivedWorkflowExecutionsResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ListArchivedWorkflowExecutionsResponse>(m).NextPageToken
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListArchivedWorkflowExecutionsResponse | $.VarRef<ListArchivedWorkflowExecutionsResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListArchivedWorkflowExecutionsResponse).Size() : ListArchivedWorkflowExecutionsResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple12: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListArchivedWorkflowExecutionsResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListArchivedWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListArchivedWorkflowExecutionsResponse | $.VarRef<ListArchivedWorkflowExecutionsResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListArchivedWorkflowExecutionsResponse).Size() : ListArchivedWorkflowExecutionsResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListArchivedWorkflowExecutionsResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListArchivedWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListArchivedWorkflowExecutionsResponse | $.VarRef<ListArchivedWorkflowExecutionsResponse> | null = this;
		const m$: ListArchivedWorkflowExecutionsResponse = m == null ? $.pointerTarget<ListArchivedWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListArchivedWorkflowExecutionsResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListArchivedWorkflowExecutionsResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListArchivedWorkflowExecutionsResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListArchivedWorkflowExecutionsResponse).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as ListArchivedWorkflowExecutionsResponse).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as ListArchivedWorkflowExecutionsResponse).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListArchivedWorkflowExecutionsResponse).NextPageToken)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.sliceLen((m$ as ListArchivedWorkflowExecutionsResponse).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.sliceLen((m$ as ListArchivedWorkflowExecutionsResponse).Executions) > 0) {
			for (let __goscriptSliceWindow10 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as ListArchivedWorkflowExecutionsResponse).Executions) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_workflow_pb.WorkflowExecutionInfo.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as ListArchivedWorkflowExecutionsResponse).Executions!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceVisibility(dAtA, i, $.uint64(size))
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
		let m: ListArchivedWorkflowExecutionsResponse | $.VarRef<ListArchivedWorkflowExecutionsResponse> | null = this;
		$.assignStruct($.pointerValue<ListArchivedWorkflowExecutionsResponse>(m), $.markAsStructValue(new ListArchivedWorkflowExecutionsResponse()))
	}

	public Size(): number {
		const m: ListArchivedWorkflowExecutionsResponse | $.VarRef<ListArchivedWorkflowExecutionsResponse> | null = this;
		let n: number = 0
		const m$: ListArchivedWorkflowExecutionsResponse = m == null ? $.pointerTarget<ListArchivedWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListArchivedWorkflowExecutionsResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as ListArchivedWorkflowExecutionsResponse).Executions) > 0) {
			for (let __goscriptRangeTarget3 = (m$ as ListArchivedWorkflowExecutionsResponse).Executions, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_workflow_pb.WorkflowExecutionInfo).Size() : __goscript_workflow_pb.WorkflowExecutionInfo.prototype.Size.call(e))
				n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
			}
		}
		l = $.sliceLen((m$ as ListArchivedWorkflowExecutionsResponse).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as ListArchivedWorkflowExecutionsResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListArchivedWorkflowExecutionsResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ListArchivedWorkflowExecutionsResponse | $.VarRef<ListArchivedWorkflowExecutionsResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ListArchivedWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListArchivedWorkflowExecutionsResponse | $.VarRef<ListArchivedWorkflowExecutionsResponse> | null = this;
		const m$: ListArchivedWorkflowExecutionsResponse = m == null ? $.pointerTarget<ListArchivedWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListArchivedWorkflowExecutionsResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow11 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceVisibility
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
				return fmt.Errorf("proto: ListArchivedWorkflowExecutionsResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListArchivedWorkflowExecutionsResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Executions", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
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
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListArchivedWorkflowExecutionsResponse).Executions = $.appendOne((m$ as ListArchivedWorkflowExecutionsResponse).Executions, new __goscript_workflow_pb.WorkflowExecutionInfo(), $.appendZeros.nil)
					{
						let err = __goscript_workflow_pb.WorkflowExecutionInfo.prototype.Unmarshal.call($.arrayIndex((m$ as ListArchivedWorkflowExecutionsResponse).Executions!, $.sliceLen((m$ as ListArchivedWorkflowExecutionsResponse).Executions) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field NextPageToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListArchivedWorkflowExecutionsResponse).NextPageToken = $.appendSlice($.goSlice((m$ as ListArchivedWorkflowExecutionsResponse).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as ListArchivedWorkflowExecutionsResponse).NextPageToken == null) {
						;(m$ as ListArchivedWorkflowExecutionsResponse).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListArchivedWorkflowExecutionsResponse).XXX_unrecognized = $.appendSlice((m$ as ListArchivedWorkflowExecutionsResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ListArchivedWorkflowExecutionsResponse | $.VarRef<ListArchivedWorkflowExecutionsResponse> | null = this;
		await xxx_messageInfo_ListArchivedWorkflowExecutionsResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ListArchivedWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ListArchivedWorkflowExecutionsResponse | $.VarRef<ListArchivedWorkflowExecutionsResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListArchivedWorkflowExecutionsResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ListArchivedWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListArchivedWorkflowExecutionsResponse).MarshalToSizedBuffer(b) : ListArchivedWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ListArchivedWorkflowExecutionsResponse | $.VarRef<ListArchivedWorkflowExecutionsResponse> | null = this;
		await xxx_messageInfo_ListArchivedWorkflowExecutionsResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ListArchivedWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsResponse")), src)
	}

	public XXX_Size(): number {
		const m: ListArchivedWorkflowExecutionsResponse | $.VarRef<ListArchivedWorkflowExecutionsResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListArchivedWorkflowExecutionsResponse).Size() : ListArchivedWorkflowExecutionsResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListArchivedWorkflowExecutionsResponse | $.VarRef<ListArchivedWorkflowExecutionsResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListArchivedWorkflowExecutionsResponse).Unmarshal(b) : ListArchivedWorkflowExecutionsResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListArchivedWorkflowExecutionsResponse",
		() => new ListArchivedWorkflowExecutionsResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetExecutions", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionInfo"))], true), $.methodSignature("GetNextPageToken", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ListArchivedWorkflowExecutionsResponse,
		() => [/* @__PURE__ */ $.structField("Executions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionInfo")), [0], 0, true, { tag: "protobuf:\"bytes,1,rep,name=executions,proto3\" json:\"executions,omitempty\"" }), /* @__PURE__ */ $.structField("NextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, true, { tag: "protobuf:\"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 72, true, { tag: "json:\"-\"" })]
	)
}

export class ScanWorkflowExecutionsRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get PageSize(): number {
		return this._fields.PageSize
	}

	public set PageSize(value: number) {
		this._fields.PageSize = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
	}

	public get Query(): string {
		return this._fields.Query
	}

	public set Query(value: string) {
		this._fields.Query = value
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
		Domain: string
		PageSize: number
		NextPageToken: $.Slice<number>
		Query: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, PageSize?: number, NextPageToken?: $.Slice<number>, Query?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			PageSize: init?.PageSize ?? (0 as number),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			Query: init?.Query ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScanWorkflowExecutionsRequest {
		return new ScanWorkflowExecutionsRequest(this, true)
	}

	public __goscriptAssign(source: ScanWorkflowExecutionsRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.PageSize = values.PageSize
		target.NextPageToken = values.NextPageToken
		target.Query = values.Query
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_a7341dc69cef4364, $.arrayToSlice<number>([8])]
	}

	public GetDomain(): string {
		const m: ScanWorkflowExecutionsRequest | $.VarRef<ScanWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ScanWorkflowExecutionsRequest>(m).Domain
		}
		return ""
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: ScanWorkflowExecutionsRequest | $.VarRef<ScanWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ScanWorkflowExecutionsRequest>(m).NextPageToken
		}
		return null
	}

	public GetPageSize(): number {
		const m: ScanWorkflowExecutionsRequest | $.VarRef<ScanWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ScanWorkflowExecutionsRequest>(m).PageSize
		}
		return 0
	}

	public GetQuery(): string {
		const m: ScanWorkflowExecutionsRequest | $.VarRef<ScanWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ScanWorkflowExecutionsRequest>(m).Query
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ScanWorkflowExecutionsRequest | $.VarRef<ScanWorkflowExecutionsRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScanWorkflowExecutionsRequest).Size() : ScanWorkflowExecutionsRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple13: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScanWorkflowExecutionsRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScanWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple13[0]
		err = __goscriptTuple13[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScanWorkflowExecutionsRequest | $.VarRef<ScanWorkflowExecutionsRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScanWorkflowExecutionsRequest).Size() : ScanWorkflowExecutionsRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScanWorkflowExecutionsRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScanWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScanWorkflowExecutionsRequest | $.VarRef<ScanWorkflowExecutionsRequest> | null = this;
		const m$: ScanWorkflowExecutionsRequest = m == null ? $.pointerTarget<ScanWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScanWorkflowExecutionsRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ScanWorkflowExecutionsRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ScanWorkflowExecutionsRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScanWorkflowExecutionsRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as ScanWorkflowExecutionsRequest).Query) > 0) {
			i = i - ($.stringLen((m$ as ScanWorkflowExecutionsRequest).Query))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScanWorkflowExecutionsRequest).Query)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.stringLen((m$ as ScanWorkflowExecutionsRequest).Query)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.sliceLen((m$ as ScanWorkflowExecutionsRequest).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as ScanWorkflowExecutionsRequest).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScanWorkflowExecutionsRequest).NextPageToken)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.sliceLen((m$ as ScanWorkflowExecutionsRequest).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as ScanWorkflowExecutionsRequest).PageSize != 0) {
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64((m$ as ScanWorkflowExecutionsRequest).PageSize))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ($.stringLen((m$ as ScanWorkflowExecutionsRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as ScanWorkflowExecutionsRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScanWorkflowExecutionsRequest).Domain)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.stringLen((m$ as ScanWorkflowExecutionsRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ScanWorkflowExecutionsRequest | $.VarRef<ScanWorkflowExecutionsRequest> | null = this;
		$.assignStruct($.pointerValue<ScanWorkflowExecutionsRequest>(m), $.markAsStructValue(new ScanWorkflowExecutionsRequest()))
	}

	public Size(): number {
		const m: ScanWorkflowExecutionsRequest | $.VarRef<ScanWorkflowExecutionsRequest> | null = this;
		let n: number = 0
		const m$: ScanWorkflowExecutionsRequest = m == null ? $.pointerTarget<ScanWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScanWorkflowExecutionsRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ScanWorkflowExecutionsRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as ScanWorkflowExecutionsRequest).PageSize != 0) {
			n = n + (1 + sovServiceVisibility($.uint64((m$ as ScanWorkflowExecutionsRequest).PageSize)))
		}
		l = $.sliceLen((m$ as ScanWorkflowExecutionsRequest).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		l = $.stringLen((m$ as ScanWorkflowExecutionsRequest).Query)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as ScanWorkflowExecutionsRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ScanWorkflowExecutionsRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ScanWorkflowExecutionsRequest | $.VarRef<ScanWorkflowExecutionsRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ScanWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ScanWorkflowExecutionsRequest | $.VarRef<ScanWorkflowExecutionsRequest> | null = this;
		const m$: ScanWorkflowExecutionsRequest = m == null ? $.pointerTarget<ScanWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScanWorkflowExecutionsRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow12 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceVisibility
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
				return fmt.Errorf("proto: ScanWorkflowExecutionsRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ScanWorkflowExecutionsRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Domain", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
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
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScanWorkflowExecutionsRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field PageSize", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ScanWorkflowExecutionsRequest).PageSize = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, iNdEx)] as number)
						iNdEx++;
						;(m$ as ScanWorkflowExecutionsRequest).PageSize = (m$ as ScanWorkflowExecutionsRequest).PageSize | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field NextPageToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScanWorkflowExecutionsRequest).NextPageToken = $.appendSlice($.goSlice((m$ as ScanWorkflowExecutionsRequest).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as ScanWorkflowExecutionsRequest).NextPageToken == null) {
						;(m$ as ScanWorkflowExecutionsRequest).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Query", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
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
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScanWorkflowExecutionsRequest).Query = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScanWorkflowExecutionsRequest).XXX_unrecognized = $.appendSlice((m$ as ScanWorkflowExecutionsRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ScanWorkflowExecutionsRequest | $.VarRef<ScanWorkflowExecutionsRequest> | null = this;
		await xxx_messageInfo_ScanWorkflowExecutionsRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ScanWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ScanWorkflowExecutionsRequest | $.VarRef<ScanWorkflowExecutionsRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ScanWorkflowExecutionsRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ScanWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScanWorkflowExecutionsRequest).MarshalToSizedBuffer(b) : ScanWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ScanWorkflowExecutionsRequest | $.VarRef<ScanWorkflowExecutionsRequest> | null = this;
		await xxx_messageInfo_ScanWorkflowExecutionsRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ScanWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsRequest")), src)
	}

	public XXX_Size(): number {
		const m: ScanWorkflowExecutionsRequest | $.VarRef<ScanWorkflowExecutionsRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScanWorkflowExecutionsRequest).Size() : ScanWorkflowExecutionsRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ScanWorkflowExecutionsRequest | $.VarRef<ScanWorkflowExecutionsRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScanWorkflowExecutionsRequest).Unmarshal(b) : ScanWorkflowExecutionsRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ScanWorkflowExecutionsRequest",
		() => new ScanWorkflowExecutionsRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetNextPageToken", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("GetPageSize", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetQuery", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ScanWorkflowExecutionsRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("PageSize", /* @__PURE__ */ $.basicType("int32"), [1], 16, true, { tag: "protobuf:\"varint,2,opt,name=page_size,json=pageSize,proto3\" json:\"page_size,omitempty\"" }), /* @__PURE__ */ $.structField("NextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }), /* @__PURE__ */ $.structField("Query", /* @__PURE__ */ $.basicType("string"), [3], 48, true, { tag: "protobuf:\"bytes,4,opt,name=query,proto3\" json:\"query,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [4], 64, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 64, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [6], 88, true, { tag: "json:\"-\"" })]
	)
}

export class ScanWorkflowExecutionsResponse {
	public get Executions(): $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null> {
		return this._fields.Executions
	}

	public set Executions(value: $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>) {
		this._fields.Executions = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
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
		Executions: $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>
		NextPageToken: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Executions?: $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>, NextPageToken?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Executions: init?.Executions ?? (null! as $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null>),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScanWorkflowExecutionsResponse {
		return new ScanWorkflowExecutionsResponse(this, true)
	}

	public __goscriptAssign(source: ScanWorkflowExecutionsResponse): void {
		const target = this._fields
		const values = source._fields
		target.Executions = values.Executions
		target.NextPageToken = values.NextPageToken
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_a7341dc69cef4364, $.arrayToSlice<number>([9])]
	}

	public GetExecutions(): $.Slice<__goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null> {
		const m: ScanWorkflowExecutionsResponse | $.VarRef<ScanWorkflowExecutionsResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ScanWorkflowExecutionsResponse>(m).Executions
		}
		return null
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: ScanWorkflowExecutionsResponse | $.VarRef<ScanWorkflowExecutionsResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ScanWorkflowExecutionsResponse>(m).NextPageToken
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ScanWorkflowExecutionsResponse | $.VarRef<ScanWorkflowExecutionsResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScanWorkflowExecutionsResponse).Size() : ScanWorkflowExecutionsResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple14: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScanWorkflowExecutionsResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScanWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScanWorkflowExecutionsResponse | $.VarRef<ScanWorkflowExecutionsResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScanWorkflowExecutionsResponse).Size() : ScanWorkflowExecutionsResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScanWorkflowExecutionsResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ScanWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ScanWorkflowExecutionsResponse | $.VarRef<ScanWorkflowExecutionsResponse> | null = this;
		const m$: ScanWorkflowExecutionsResponse = m == null ? $.pointerTarget<ScanWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScanWorkflowExecutionsResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ScanWorkflowExecutionsResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ScanWorkflowExecutionsResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScanWorkflowExecutionsResponse).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as ScanWorkflowExecutionsResponse).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as ScanWorkflowExecutionsResponse).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ScanWorkflowExecutionsResponse).NextPageToken)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.sliceLen((m$ as ScanWorkflowExecutionsResponse).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.sliceLen((m$ as ScanWorkflowExecutionsResponse).Executions) > 0) {
			for (let __goscriptSliceWindow13 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as ScanWorkflowExecutionsResponse).Executions) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_workflow_pb.WorkflowExecutionInfo.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as ScanWorkflowExecutionsResponse).Executions!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceVisibility(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow13.backing as any[])[$.windowSlot(__goscriptSliceWindow13, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ScanWorkflowExecutionsResponse | $.VarRef<ScanWorkflowExecutionsResponse> | null = this;
		$.assignStruct($.pointerValue<ScanWorkflowExecutionsResponse>(m), $.markAsStructValue(new ScanWorkflowExecutionsResponse()))
	}

	public Size(): number {
		const m: ScanWorkflowExecutionsResponse | $.VarRef<ScanWorkflowExecutionsResponse> | null = this;
		let n: number = 0
		const m$: ScanWorkflowExecutionsResponse = m == null ? $.pointerTarget<ScanWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScanWorkflowExecutionsResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as ScanWorkflowExecutionsResponse).Executions) > 0) {
			for (let __goscriptRangeTarget4 = (m$ as ScanWorkflowExecutionsResponse).Executions, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as __goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_workflow_pb.WorkflowExecutionInfo).Size() : __goscript_workflow_pb.WorkflowExecutionInfo.prototype.Size.call(e))
				n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
			}
		}
		l = $.sliceLen((m$ as ScanWorkflowExecutionsResponse).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as ScanWorkflowExecutionsResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ScanWorkflowExecutionsResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ScanWorkflowExecutionsResponse | $.VarRef<ScanWorkflowExecutionsResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ScanWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ScanWorkflowExecutionsResponse | $.VarRef<ScanWorkflowExecutionsResponse> | null = this;
		const m$: ScanWorkflowExecutionsResponse = m == null ? $.pointerTarget<ScanWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ScanWorkflowExecutionsResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow14 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceVisibility
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
				return fmt.Errorf("proto: ScanWorkflowExecutionsResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ScanWorkflowExecutionsResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Executions", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScanWorkflowExecutionsResponse).Executions = $.appendOne((m$ as ScanWorkflowExecutionsResponse).Executions, new __goscript_workflow_pb.WorkflowExecutionInfo(), $.appendZeros.nil)
					{
						let err = __goscript_workflow_pb.WorkflowExecutionInfo.prototype.Unmarshal.call($.arrayIndex((m$ as ScanWorkflowExecutionsResponse).Executions!, $.sliceLen((m$ as ScanWorkflowExecutionsResponse).Executions) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field NextPageToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScanWorkflowExecutionsResponse).NextPageToken = $.appendSlice($.goSlice((m$ as ScanWorkflowExecutionsResponse).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as ScanWorkflowExecutionsResponse).NextPageToken == null) {
						;(m$ as ScanWorkflowExecutionsResponse).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ScanWorkflowExecutionsResponse).XXX_unrecognized = $.appendSlice((m$ as ScanWorkflowExecutionsResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ScanWorkflowExecutionsResponse | $.VarRef<ScanWorkflowExecutionsResponse> | null = this;
		await xxx_messageInfo_ScanWorkflowExecutionsResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ScanWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ScanWorkflowExecutionsResponse | $.VarRef<ScanWorkflowExecutionsResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ScanWorkflowExecutionsResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ScanWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScanWorkflowExecutionsResponse).MarshalToSizedBuffer(b) : ScanWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ScanWorkflowExecutionsResponse | $.VarRef<ScanWorkflowExecutionsResponse> | null = this;
		await xxx_messageInfo_ScanWorkflowExecutionsResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ScanWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsResponse")), src)
	}

	public XXX_Size(): number {
		const m: ScanWorkflowExecutionsResponse | $.VarRef<ScanWorkflowExecutionsResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScanWorkflowExecutionsResponse).Size() : ScanWorkflowExecutionsResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ScanWorkflowExecutionsResponse | $.VarRef<ScanWorkflowExecutionsResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ScanWorkflowExecutionsResponse).Unmarshal(b) : ScanWorkflowExecutionsResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ScanWorkflowExecutionsResponse",
		() => new ScanWorkflowExecutionsResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetExecutions", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionInfo"))], true), $.methodSignature("GetNextPageToken", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ScanWorkflowExecutionsResponse,
		() => [/* @__PURE__ */ $.structField("Executions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionInfo")), [0], 0, true, { tag: "protobuf:\"bytes,1,rep,name=executions,proto3\" json:\"executions,omitempty\"" }), /* @__PURE__ */ $.structField("NextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, true, { tag: "protobuf:\"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 72, true, { tag: "json:\"-\"" })]
	)
}

export class CountWorkflowExecutionsRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get Query(): string {
		return this._fields.Query
	}

	public set Query(value: string) {
		this._fields.Query = value
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
		Domain: string
		Query: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, Query?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			Query: init?.Query ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CountWorkflowExecutionsRequest {
		return new CountWorkflowExecutionsRequest(this, true)
	}

	public __goscriptAssign(source: CountWorkflowExecutionsRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.Query = values.Query
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_a7341dc69cef4364, $.arrayToSlice<number>([10])]
	}

	public GetDomain(): string {
		const m: CountWorkflowExecutionsRequest | $.VarRef<CountWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<CountWorkflowExecutionsRequest>(m).Domain
		}
		return ""
	}

	public GetQuery(): string {
		const m: CountWorkflowExecutionsRequest | $.VarRef<CountWorkflowExecutionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<CountWorkflowExecutionsRequest>(m).Query
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: CountWorkflowExecutionsRequest | $.VarRef<CountWorkflowExecutionsRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CountWorkflowExecutionsRequest).Size() : CountWorkflowExecutionsRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple15: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CountWorkflowExecutionsRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : CountWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple15[0]
		err = __goscriptTuple15[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: CountWorkflowExecutionsRequest | $.VarRef<CountWorkflowExecutionsRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CountWorkflowExecutionsRequest).Size() : CountWorkflowExecutionsRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CountWorkflowExecutionsRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : CountWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: CountWorkflowExecutionsRequest | $.VarRef<CountWorkflowExecutionsRequest> | null = this;
		const m$: CountWorkflowExecutionsRequest = m == null ? $.pointerTarget<CountWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CountWorkflowExecutionsRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as CountWorkflowExecutionsRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as CountWorkflowExecutionsRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as CountWorkflowExecutionsRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as CountWorkflowExecutionsRequest).Query) > 0) {
			i = i - ($.stringLen((m$ as CountWorkflowExecutionsRequest).Query))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as CountWorkflowExecutionsRequest).Query)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.stringLen((m$ as CountWorkflowExecutionsRequest).Query)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as CountWorkflowExecutionsRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as CountWorkflowExecutionsRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as CountWorkflowExecutionsRequest).Domain)
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.stringLen((m$ as CountWorkflowExecutionsRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: CountWorkflowExecutionsRequest | $.VarRef<CountWorkflowExecutionsRequest> | null = this;
		$.assignStruct($.pointerValue<CountWorkflowExecutionsRequest>(m), $.markAsStructValue(new CountWorkflowExecutionsRequest()))
	}

	public Size(): number {
		const m: CountWorkflowExecutionsRequest | $.VarRef<CountWorkflowExecutionsRequest> | null = this;
		let n: number = 0
		const m$: CountWorkflowExecutionsRequest = m == null ? $.pointerTarget<CountWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CountWorkflowExecutionsRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as CountWorkflowExecutionsRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		l = $.stringLen((m$ as CountWorkflowExecutionsRequest).Query)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceVisibility($.uint64(l)))
		}
		if ((m$ as CountWorkflowExecutionsRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as CountWorkflowExecutionsRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: CountWorkflowExecutionsRequest | $.VarRef<CountWorkflowExecutionsRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.CountWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: CountWorkflowExecutionsRequest | $.VarRef<CountWorkflowExecutionsRequest> | null = this;
		const m$: CountWorkflowExecutionsRequest = m == null ? $.pointerTarget<CountWorkflowExecutionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CountWorkflowExecutionsRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow15 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceVisibility
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow15.backing as any[])[$.windowSlot(__goscriptSliceWindow15, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: CountWorkflowExecutionsRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: CountWorkflowExecutionsRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Domain", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow15.backing as any[])[$.windowSlot(__goscriptSliceWindow15, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as CountWorkflowExecutionsRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Query", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow15.backing as any[])[$.windowSlot(__goscriptSliceWindow15, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as CountWorkflowExecutionsRequest).Query = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as CountWorkflowExecutionsRequest).XXX_unrecognized = $.appendSlice((m$ as CountWorkflowExecutionsRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: CountWorkflowExecutionsRequest | $.VarRef<CountWorkflowExecutionsRequest> | null = this;
		await xxx_messageInfo_CountWorkflowExecutionsRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.CountWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: CountWorkflowExecutionsRequest | $.VarRef<CountWorkflowExecutionsRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_CountWorkflowExecutionsRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.CountWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CountWorkflowExecutionsRequest).MarshalToSizedBuffer(b) : CountWorkflowExecutionsRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: CountWorkflowExecutionsRequest | $.VarRef<CountWorkflowExecutionsRequest> | null = this;
		await xxx_messageInfo_CountWorkflowExecutionsRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.CountWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsRequest")), src)
	}

	public XXX_Size(): number {
		const m: CountWorkflowExecutionsRequest | $.VarRef<CountWorkflowExecutionsRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CountWorkflowExecutionsRequest).Size() : CountWorkflowExecutionsRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: CountWorkflowExecutionsRequest | $.VarRef<CountWorkflowExecutionsRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CountWorkflowExecutionsRequest).Unmarshal(b) : CountWorkflowExecutionsRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.CountWorkflowExecutionsRequest",
		() => new CountWorkflowExecutionsRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetQuery", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		CountWorkflowExecutionsRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("Query", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=query,proto3\" json:\"query,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 32, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 32, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 56, true, { tag: "json:\"-\"" })]
	)
}

export class CountWorkflowExecutionsResponse {
	public get Count(): bigint {
		return this._fields.Count
	}

	public set Count(value: bigint) {
		this._fields.Count = value
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
		Count: bigint
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Count?: bigint, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Count: init?.Count ?? (0n as bigint),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CountWorkflowExecutionsResponse {
		return new CountWorkflowExecutionsResponse(this, true)
	}

	public __goscriptAssign(source: CountWorkflowExecutionsResponse): void {
		const target = this._fields
		const values = source._fields
		target.Count = values.Count
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_a7341dc69cef4364, $.arrayToSlice<number>([11])]
	}

	public GetCount(): bigint {
		const m: CountWorkflowExecutionsResponse | $.VarRef<CountWorkflowExecutionsResponse> | null = this;
		if (m != null) {
			return $.pointerValue<CountWorkflowExecutionsResponse>(m).Count
		}
		return 0n
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: CountWorkflowExecutionsResponse | $.VarRef<CountWorkflowExecutionsResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CountWorkflowExecutionsResponse).Size() : CountWorkflowExecutionsResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple16: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CountWorkflowExecutionsResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : CountWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple16[0]
		err = __goscriptTuple16[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: CountWorkflowExecutionsResponse | $.VarRef<CountWorkflowExecutionsResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CountWorkflowExecutionsResponse).Size() : CountWorkflowExecutionsResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CountWorkflowExecutionsResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : CountWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: CountWorkflowExecutionsResponse | $.VarRef<CountWorkflowExecutionsResponse> | null = this;
		const m$: CountWorkflowExecutionsResponse = m == null ? $.pointerTarget<CountWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CountWorkflowExecutionsResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as CountWorkflowExecutionsResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as CountWorkflowExecutionsResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as CountWorkflowExecutionsResponse).XXX_unrecognized)
		}
		if ((m$ as CountWorkflowExecutionsResponse).Count != 0n) {
			i = encodeVarintServiceVisibility(dAtA, i, $.uint64((m$ as CountWorkflowExecutionsResponse).Count))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: CountWorkflowExecutionsResponse | $.VarRef<CountWorkflowExecutionsResponse> | null = this;
		$.assignStruct($.pointerValue<CountWorkflowExecutionsResponse>(m), $.markAsStructValue(new CountWorkflowExecutionsResponse()))
	}

	public Size(): number {
		const m: CountWorkflowExecutionsResponse | $.VarRef<CountWorkflowExecutionsResponse> | null = this;
		let n: number = 0
		const m$: CountWorkflowExecutionsResponse = m == null ? $.pointerTarget<CountWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CountWorkflowExecutionsResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as CountWorkflowExecutionsResponse).Count != 0n) {
			n = n + (1 + sovServiceVisibility($.uint64((m$ as CountWorkflowExecutionsResponse).Count)))
		}
		if ((m$ as CountWorkflowExecutionsResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as CountWorkflowExecutionsResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: CountWorkflowExecutionsResponse | $.VarRef<CountWorkflowExecutionsResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.CountWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: CountWorkflowExecutionsResponse | $.VarRef<CountWorkflowExecutionsResponse> | null = this;
		const m$: CountWorkflowExecutionsResponse = m == null ? $.pointerTarget<CountWorkflowExecutionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CountWorkflowExecutionsResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow16 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceVisibility
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
				return fmt.Errorf("proto: CountWorkflowExecutionsResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: CountWorkflowExecutionsResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Count", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as CountWorkflowExecutionsResponse).Count = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, iNdEx)] as number)
						iNdEx++;
						;(m$ as CountWorkflowExecutionsResponse).Count = $.int64Or((m$ as CountWorkflowExecutionsResponse).Count, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as CountWorkflowExecutionsResponse).XXX_unrecognized = $.appendSlice((m$ as CountWorkflowExecutionsResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: CountWorkflowExecutionsResponse | $.VarRef<CountWorkflowExecutionsResponse> | null = this;
		await xxx_messageInfo_CountWorkflowExecutionsResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.CountWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: CountWorkflowExecutionsResponse | $.VarRef<CountWorkflowExecutionsResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_CountWorkflowExecutionsResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.CountWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CountWorkflowExecutionsResponse).MarshalToSizedBuffer(b) : CountWorkflowExecutionsResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: CountWorkflowExecutionsResponse | $.VarRef<CountWorkflowExecutionsResponse> | null = this;
		await xxx_messageInfo_CountWorkflowExecutionsResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.CountWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsResponse")), src)
	}

	public XXX_Size(): number {
		const m: CountWorkflowExecutionsResponse | $.VarRef<CountWorkflowExecutionsResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CountWorkflowExecutionsResponse).Size() : CountWorkflowExecutionsResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: CountWorkflowExecutionsResponse | $.VarRef<CountWorkflowExecutionsResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CountWorkflowExecutionsResponse).Unmarshal(b) : CountWorkflowExecutionsResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.CountWorkflowExecutionsResponse",
		() => new CountWorkflowExecutionsResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetCount", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		CountWorkflowExecutionsResponse,
		() => [/* @__PURE__ */ $.structField("Count", /* @__PURE__ */ $.basicType("int64"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=count,proto3\" json:\"count,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [1], 8, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 8, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [3], 32, true, { tag: "json:\"-\"" })]
	)
}

export class GetSearchAttributesRequest {
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

	public clone(): GetSearchAttributesRequest {
		return new GetSearchAttributesRequest(this, true)
	}

	public __goscriptAssign(source: GetSearchAttributesRequest): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_a7341dc69cef4364, $.arrayToSlice<number>([12])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: GetSearchAttributesRequest | $.VarRef<GetSearchAttributesRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetSearchAttributesRequest).Size() : GetSearchAttributesRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple17: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetSearchAttributesRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : GetSearchAttributesRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple17[0]
		err = __goscriptTuple17[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: GetSearchAttributesRequest | $.VarRef<GetSearchAttributesRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetSearchAttributesRequest).Size() : GetSearchAttributesRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetSearchAttributesRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : GetSearchAttributesRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: GetSearchAttributesRequest | $.VarRef<GetSearchAttributesRequest> | null = this;
		const m$: GetSearchAttributesRequest = m == null ? $.pointerTarget<GetSearchAttributesRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetSearchAttributesRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as GetSearchAttributesRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as GetSearchAttributesRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as GetSearchAttributesRequest).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: GetSearchAttributesRequest | $.VarRef<GetSearchAttributesRequest> | null = this;
		$.assignStruct($.pointerValue<GetSearchAttributesRequest>(m), new GetSearchAttributesRequest(undefined, true))
	}

	public Size(): number {
		const m: GetSearchAttributesRequest | $.VarRef<GetSearchAttributesRequest> | null = this;
		let n: number = 0
		const m$: GetSearchAttributesRequest = m == null ? $.pointerTarget<GetSearchAttributesRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetSearchAttributesRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as GetSearchAttributesRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as GetSearchAttributesRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: GetSearchAttributesRequest | $.VarRef<GetSearchAttributesRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.GetSearchAttributesRequest", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: GetSearchAttributesRequest | $.VarRef<GetSearchAttributesRequest> | null = this;
		const m$: GetSearchAttributesRequest = m == null ? $.pointerTarget<GetSearchAttributesRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetSearchAttributesRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow17 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceVisibility
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
				return fmt.Errorf("proto: GetSearchAttributesRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: GetSearchAttributesRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as GetSearchAttributesRequest).XXX_unrecognized = $.appendSlice((m$ as GetSearchAttributesRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: GetSearchAttributesRequest | $.VarRef<GetSearchAttributesRequest> | null = this;
		await xxx_messageInfo_GetSearchAttributesRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.GetSearchAttributesRequest", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: GetSearchAttributesRequest | $.VarRef<GetSearchAttributesRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_GetSearchAttributesRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.GetSearchAttributesRequest", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetSearchAttributesRequest).MarshalToSizedBuffer(b) : GetSearchAttributesRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: GetSearchAttributesRequest | $.VarRef<GetSearchAttributesRequest> | null = this;
		await xxx_messageInfo_GetSearchAttributesRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.GetSearchAttributesRequest", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesRequest")), src)
	}

	public XXX_Size(): number {
		const m: GetSearchAttributesRequest | $.VarRef<GetSearchAttributesRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetSearchAttributesRequest).Size() : GetSearchAttributesRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: GetSearchAttributesRequest | $.VarRef<GetSearchAttributesRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetSearchAttributesRequest).Unmarshal(b) : GetSearchAttributesRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.GetSearchAttributesRequest",
		() => new GetSearchAttributesRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		GetSearchAttributesRequest,
		() => [/* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [0], 0, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [2], 24, true, { tag: "json:\"-\"" })]
	)
}

export class GetSearchAttributesResponse {
	public get Keys(): globalThis.Map<string, __goscript_visibility_pb.IndexedValueType> | null {
		return this._fields.Keys
	}

	public set Keys(value: globalThis.Map<string, __goscript_visibility_pb.IndexedValueType> | null) {
		this._fields.Keys = value
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
		Keys: globalThis.Map<string, __goscript_visibility_pb.IndexedValueType> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Keys?: globalThis.Map<string, __goscript_visibility_pb.IndexedValueType> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Keys: init?.Keys ?? (null! as globalThis.Map<string, __goscript_visibility_pb.IndexedValueType> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GetSearchAttributesResponse {
		return new GetSearchAttributesResponse(this, true)
	}

	public __goscriptAssign(source: GetSearchAttributesResponse): void {
		const target = this._fields
		const values = source._fields
		target.Keys = values.Keys
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_a7341dc69cef4364, $.arrayToSlice<number>([13])]
	}

	public GetKeys(): globalThis.Map<string, __goscript_visibility_pb.IndexedValueType> | null {
		const m: GetSearchAttributesResponse | $.VarRef<GetSearchAttributesResponse> | null = this;
		if (m != null) {
			return $.pointerValue<GetSearchAttributesResponse>(m).Keys
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: GetSearchAttributesResponse | $.VarRef<GetSearchAttributesResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetSearchAttributesResponse).Size() : GetSearchAttributesResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple18: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetSearchAttributesResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : GetSearchAttributesResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple18[0]
		err = __goscriptTuple18[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: GetSearchAttributesResponse | $.VarRef<GetSearchAttributesResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetSearchAttributesResponse).Size() : GetSearchAttributesResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetSearchAttributesResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : GetSearchAttributesResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: GetSearchAttributesResponse | $.VarRef<GetSearchAttributesResponse> | null = this;
		const m$: GetSearchAttributesResponse = m == null ? $.pointerTarget<GetSearchAttributesResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetSearchAttributesResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as GetSearchAttributesResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as GetSearchAttributesResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as GetSearchAttributesResponse).XXX_unrecognized)
		}
		if ($.len((m$ as GetSearchAttributesResponse).Keys) > 0) {
			for (const [k, __rangeValue] of (m$ as GetSearchAttributesResponse).Keys?.entries() ?? []) {
				let v = $.mapGet<string, __goscript_visibility_pb.IndexedValueType, __goscript_visibility_pb.IndexedValueType>((m$ as GetSearchAttributesResponse).Keys, k, 0)[0]
				let baseI: number = i
				i = encodeVarintServiceVisibility(dAtA, i, $.uint64(v))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintServiceVisibility(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintServiceVisibility(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: GetSearchAttributesResponse | $.VarRef<GetSearchAttributesResponse> | null = this;
		$.assignStruct($.pointerValue<GetSearchAttributesResponse>(m), $.markAsStructValue(new GetSearchAttributesResponse()))
	}

	public Size(): number {
		const m: GetSearchAttributesResponse | $.VarRef<GetSearchAttributesResponse> | null = this;
		let n: number = 0
		const m$: GetSearchAttributesResponse = m == null ? $.pointerTarget<GetSearchAttributesResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetSearchAttributesResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.len((m$ as GetSearchAttributesResponse).Keys) > 0) {
			for (const [k, v] of (m$ as GetSearchAttributesResponse).Keys?.entries() ?? []) {
				k
				v
				let mapEntrySize = (((1 + $.stringLen(k)) + sovServiceVisibility($.uint64($.stringLen(k)))) + 1) + sovServiceVisibility($.uint64(v))
				n = n + ((mapEntrySize + 1) + sovServiceVisibility($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as GetSearchAttributesResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as GetSearchAttributesResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: GetSearchAttributesResponse | $.VarRef<GetSearchAttributesResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.GetSearchAttributesResponse", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: GetSearchAttributesResponse | $.VarRef<GetSearchAttributesResponse> | null = this;
		const m$: GetSearchAttributesResponse = m == null ? $.pointerTarget<GetSearchAttributesResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetSearchAttributesResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow18 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceVisibility
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
				return fmt.Errorf("proto: GetSearchAttributesResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: GetSearchAttributesResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Keys", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow18.backing as any[])[$.windowSlot(__goscriptSliceWindow18, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as GetSearchAttributesResponse).Keys == null) {
						;(m$ as GetSearchAttributesResponse).Keys = $.makeMap<string, __goscript_visibility_pb.IndexedValueType>()
					}
					let mapkey: string = ""
					let mapvalue: __goscript_visibility_pb.IndexedValueType = 0
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow0: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowServiceVisibility
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow18.backing as any[])[$.windowSlot(__goscriptSliceWindow18, iNdEx)] as number)
							iNdEx++
							__goscriptShadow0 = $.uint64Or(__goscriptShadow0, $.uint64Shl($.uint64(b & 0x7F), shift))
							if (b < 0x80) {
								break
							}
						}
						let __goscriptShadow1 = $.int($.uint64Shr(__goscriptShadow0, 3n), 32)
						if (__goscriptShadow1 == 1) {
							let stringLenmapkey: bigint = 0n
							for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
								if (shift >= 64) {
									return ErrIntOverflowServiceVisibility
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow18.backing as any[])[$.windowSlot(__goscriptSliceWindow18, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthServiceVisibility
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthServiceVisibility
							}
							if (postStringIndexmapkey > l) {
								return io.ErrUnexpectedEOF
							}
							mapkey = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapkey))
							iNdEx = postStringIndexmapkey
						} else {
							if (__goscriptShadow1 == 2) {
								for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
									if (shift >= 64) {
										return ErrIntOverflowServiceVisibility
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow18.backing as any[])[$.windowSlot(__goscriptSliceWindow18, iNdEx)] as number)
									iNdEx++
									mapvalue = mapvalue | ($.int($.int(b & 0x7F, 32) << shift, 32))
									if (b < 0x80) {
										break
									}
								}
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipServiceVisibility($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthServiceVisibility
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as GetSearchAttributesResponse).Keys, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as GetSearchAttributesResponse).XXX_unrecognized = $.appendSlice((m$ as GetSearchAttributesResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: GetSearchAttributesResponse | $.VarRef<GetSearchAttributesResponse> | null = this;
		await xxx_messageInfo_GetSearchAttributesResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.GetSearchAttributesResponse", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: GetSearchAttributesResponse | $.VarRef<GetSearchAttributesResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_GetSearchAttributesResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.GetSearchAttributesResponse", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetSearchAttributesResponse).MarshalToSizedBuffer(b) : GetSearchAttributesResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: GetSearchAttributesResponse | $.VarRef<GetSearchAttributesResponse> | null = this;
		await xxx_messageInfo_GetSearchAttributesResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.GetSearchAttributesResponse", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesResponse")), src)
	}

	public XXX_Size(): number {
		const m: GetSearchAttributesResponse | $.VarRef<GetSearchAttributesResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetSearchAttributesResponse).Size() : GetSearchAttributesResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: GetSearchAttributesResponse | $.VarRef<GetSearchAttributesResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetSearchAttributesResponse).Unmarshal(b) : GetSearchAttributesResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.GetSearchAttributesResponse",
		() => new GetSearchAttributesResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetKeys", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int32", "apiv1.IndexedValueType"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		GetSearchAttributesResponse,
		() => [/* @__PURE__ */ $.structField("Keys", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int32", "apiv1.IndexedValueType")), [0], 0, true, { tag: "protobuf:\"bytes,1,rep,name=keys,proto3\" json:\"keys,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"varint,2,opt,name=value,proto3,enum=uber.cadence.api.v1.IndexedValueType\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [1], 8, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 8, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [3], 32, true, { tag: "json:\"-\"" })]
	)
}

export let xxx_messageInfo_ListWorkflowExecutionsRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListWorkflowExecutionsRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListWorkflowExecutionsRequest.value, __goscriptValue)
}

export let xxx_messageInfo_ListWorkflowExecutionsResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListWorkflowExecutionsResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListWorkflowExecutionsResponse.value, __goscriptValue)
}

export let xxx_messageInfo_ListOpenWorkflowExecutionsRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListOpenWorkflowExecutionsRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListOpenWorkflowExecutionsRequest.value, __goscriptValue)
}

export let xxx_messageInfo_ListOpenWorkflowExecutionsResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListOpenWorkflowExecutionsResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListOpenWorkflowExecutionsResponse.value, __goscriptValue)
}

export let xxx_messageInfo_ListClosedWorkflowExecutionsRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListClosedWorkflowExecutionsRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListClosedWorkflowExecutionsRequest.value, __goscriptValue)
}

export let xxx_messageInfo_ListClosedWorkflowExecutionsResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListClosedWorkflowExecutionsResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListClosedWorkflowExecutionsResponse.value, __goscriptValue)
}

export let xxx_messageInfo_ListArchivedWorkflowExecutionsRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListArchivedWorkflowExecutionsRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListArchivedWorkflowExecutionsRequest.value, __goscriptValue)
}

export let xxx_messageInfo_ListArchivedWorkflowExecutionsResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListArchivedWorkflowExecutionsResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListArchivedWorkflowExecutionsResponse.value, __goscriptValue)
}

export let xxx_messageInfo_ScanWorkflowExecutionsRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ScanWorkflowExecutionsRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ScanWorkflowExecutionsRequest.value, __goscriptValue)
}

export let xxx_messageInfo_ScanWorkflowExecutionsResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ScanWorkflowExecutionsResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ScanWorkflowExecutionsResponse.value, __goscriptValue)
}

export let xxx_messageInfo_CountWorkflowExecutionsRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_CountWorkflowExecutionsRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_CountWorkflowExecutionsRequest.value, __goscriptValue)
}

export let xxx_messageInfo_CountWorkflowExecutionsResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_CountWorkflowExecutionsResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_CountWorkflowExecutionsResponse.value, __goscriptValue)
}

export let xxx_messageInfo_GetSearchAttributesRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_GetSearchAttributesRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_GetSearchAttributesRequest.value, __goscriptValue)
}

export let xxx_messageInfo_GetSearchAttributesResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_GetSearchAttributesResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_GetSearchAttributesResponse.value, __goscriptValue)
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ListWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsRequest")), "uber.cadence.api.v1.ListWorkflowExecutionsRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ListWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsResponse")), "uber.cadence.api.v1.ListWorkflowExecutionsResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ListOpenWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest")), "uber.cadence.api.v1.ListOpenWorkflowExecutionsRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ListOpenWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsResponse")), "uber.cadence.api.v1.ListOpenWorkflowExecutionsResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ListClosedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest")), "uber.cadence.api.v1.ListClosedWorkflowExecutionsRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ListClosedWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsResponse")), "uber.cadence.api.v1.ListClosedWorkflowExecutionsResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ListArchivedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsRequest")), "uber.cadence.api.v1.ListArchivedWorkflowExecutionsRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ListArchivedWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsResponse")), "uber.cadence.api.v1.ListArchivedWorkflowExecutionsResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ScanWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsRequest")), "uber.cadence.api.v1.ScanWorkflowExecutionsRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ScanWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsResponse")), "uber.cadence.api.v1.ScanWorkflowExecutionsResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.CountWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsRequest")), "uber.cadence.api.v1.CountWorkflowExecutionsRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.CountWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsResponse")), "uber.cadence.api.v1.CountWorkflowExecutionsResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.GetSearchAttributesRequest", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesRequest")), "uber.cadence.api.v1.GetSearchAttributesRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.GetSearchAttributesResponse", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesResponse")), "uber.cadence.api.v1.GetSearchAttributesResponse")
	await proto.RegisterMapType($.interfaceValue(null, "map[string]apiv1.IndexedValueType", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int32", "apiv1.IndexedValueType"))), "uber.cadence.api.v1.GetSearchAttributesResponse.KeysEntry")
}

async function __goscriptInit1(): globalThis.Promise<void> {
	proto.RegisterFile("uber/cadence/api/v1/service_visibility.proto", fileDescriptor_a7341dc69cef4364)
}

export let fileDescriptor_a7341dc69cef4364: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 236, 87, 207, 115, 219, 84, 16, 230, 217, 117, 130, 55, 13, 41, 175, 157, 212, 163, 22, 227, 138, 180, 120, 152, 34, 97, 151, 161, 37, 57, 37, 157, 66, 83, 152, 226, 145, 51, 101, 224, 128, 71, 150, 55, 206, 27, 219, 146, 170, 247, 228, 90, 189, 49, 211, 43, 23, 224, 0, 25, 254, 32, 46, 204, 228, 204, 137, 201, 95, 194, 232, 135, 133, 3, 79, 114, 156, 3, 230, 192, 205, 111, 189, 251, 233, 219, 213, 234, 123, 187, 112, 215, 239, 162, 167, 91, 102, 15, 109, 11, 117, 211, 101, 250, 184, 161, 115, 244, 198, 204, 194, 206, 152, 113, 214, 101, 67, 38, 2, 205, 245, 28, 225, 208, 171, 161, 183, 150, 120, 107, 166, 203, 180, 113, 67, 217, 146, 65, 252, 61, 84, 81, 101, 94, 47, 28, 111, 112, 56, 116, 94, 196, 62, 234, 247, 4, 222, 250, 156, 113, 241, 101, 98, 126, 52, 65, 203, 23, 204, 177, 185, 129, 207, 125, 228, 130, 110, 194, 74, 207, 25, 153, 204, 174, 144, 26, 169, 151, 141, 228, 68, 111, 64, 217, 53, 251, 216, 225, 236, 37, 86, 10, 53, 82, 47, 25, 175, 135, 134, 54, 123, 137, 244, 14, 108, 216, 56, 17, 157, 200, 67, 56, 3, 180, 43, 197, 26, 169, 95, 54, 214, 67, 115, 203, 236, 227, 65, 104, 164, 215, 160, 244, 220, 71, 47, 168, 92, 138, 176, 227, 131, 250, 35, 129, 106, 22, 41, 238, 58, 54, 71, 250, 4, 0, 83, 107, 133, 212, 138, 245, 181, 230, 123, 154, 164, 86, 218, 63, 64, 246, 237, 67, 199, 152, 137, 150, 145, 45, 72, 200, 170, 175, 138, 112, 43, 164, 245, 133, 139, 246, 146, 234, 213, 130, 55, 185, 48, 61, 209, 17, 108, 132, 157, 67, 54, 20, 232, 69, 181, 91, 107, 110, 73, 179, 111, 135, 222, 7, 108, 132, 159, 68, 190, 198, 6, 63, 107, 160, 95, 193, 149, 180, 20, 83, 192, 82, 4, 120, 247, 124, 229, 140, 113, 30, 191, 102, 108, 224, 89, 19, 125, 2, 107, 34, 112, 83, 154, 43, 17, 234, 187, 185, 168, 7, 129, 139, 41, 32, 136, 244, 180, 87, 134, 213, 24, 134, 171, 63, 17, 80, 243, 94, 195, 18, 59, 228, 164, 8, 239, 132, 212, 30, 14, 29, 142, 189, 255, 123, 228, 95, 237, 17, 250, 24, 214, 185, 48, 133, 207, 167, 104, 171, 17, 218, 173, 172, 164, 133, 207, 83, 156, 203, 124, 230, 60, 219, 109, 199, 4, 182, 242, 95, 233, 18, 251, 237, 152, 192, 237, 144, 220, 174, 103, 29, 177, 241, 210, 58, 78, 174, 226, 191, 16, 184, 51, 143, 220, 18, 107, 23, 222, 124, 109, 203, 180, 255, 115, 55, 95, 22, 169, 37, 214, 234, 41, 84, 31, 58, 190, 125, 129, 41, 33, 77, 179, 48, 155, 230, 125, 120, 59, 19, 47, 73, 243, 26, 148, 172, 208, 37, 194, 43, 26, 241, 65, 189, 9, 202, 167, 40, 218, 104, 122, 214, 209, 174, 16, 30, 235, 250, 2, 167, 36, 212, 223, 8, 220, 144, 254, 157, 96, 62, 133, 75, 3, 12, 166, 69, 219, 150, 22, 45, 39, 94, 251, 12, 3, 254, 200, 22, 94, 96, 68, 56, 202, 55, 80, 78, 77, 244, 10, 20, 7, 24, 36, 233, 135, 63, 233, 14, 148, 198, 230, 208, 143, 123, 228, 141, 230, 109, 233, 243, 246, 237, 30, 78, 176, 247, 44, 116, 12, 149, 205, 136, 99, 182, 11, 15, 72, 243, 247, 85, 88, 127, 150, 78, 117, 187, 173, 125, 250, 45, 129, 77, 249, 100, 68, 155, 82, 248, 220, 217, 78, 185, 183, 80, 76, 82, 197, 239, 8, 40, 217, 247, 47, 253, 40, 19, 51, 119, 110, 82, 238, 47, 28, 151, 240, 249, 129, 192, 205, 60, 133, 166, 15, 50, 145, 231, 220, 211, 202, 199, 23, 136, 76, 88, 253, 156, 204, 176, 217, 234, 71, 183, 51, 209, 231, 234, 185, 178, 115, 161, 216, 132, 91, 216, 69, 114, 149, 201, 232, 162, 92, 157, 204, 232, 162, 57, 50, 246, 138, 192, 245, 12, 13, 160, 114, 192, 124, 5, 82, 62, 92, 44, 40, 161, 49, 129, 171, 146, 47, 158, 234, 231, 215, 134, 248, 233, 31, 44, 42, 38, 123, 222, 175, 167, 85, 114, 114, 90, 37, 127, 156, 86, 9, 92, 183, 156, 145, 12, 98, 111, 243, 47, 1, 104, 199, 59, 98, 43, 92, 220, 90, 228, 235, 70, 159, 137, 35, 191, 171, 89, 206, 72, 159, 221, 244, 222, 103, 189, 161, 222, 119, 244, 104, 193, 75, 214, 190, 29, 211, 101, 227, 70, 119, 37, 178, 221, 251, 51, 0, 0, 255, 255, 134, 6, 92, 73, 131, 14, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_a7341dc69cef4364(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_a7341dc69cef4364 = __goscriptValue
}

export function encodeVarintServiceVisibility(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovServiceVisibility(v))
	let base = offset
	for (let __goscriptSliceWindow19 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow19.backing as any[])[$.windowSlot(__goscriptSliceWindow19, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export function sovServiceVisibility(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozServiceVisibility(x: bigint): number {
	let n: number = 0
	return sovServiceVisibility($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export function skipServiceVisibility(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow20 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowServiceVisibility]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, iNdEx)] as number)
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
						return [0, ErrIntOverflowServiceVisibility]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowServiceVisibility]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthServiceVisibility]
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
					return [0, ErrUnexpectedEndOfGroupServiceVisibility]
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
			return [0, ErrInvalidLengthServiceVisibility]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthServiceVisibility: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthServiceVisibility(__goscriptValue: $.GoError): void {
	ErrInvalidLengthServiceVisibility = __goscriptValue
}

export let ErrIntOverflowServiceVisibility: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowServiceVisibility(__goscriptValue: $.GoError): void {
	ErrIntOverflowServiceVisibility = __goscriptValue
}

export let ErrUnexpectedEndOfGroupServiceVisibility: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupServiceVisibility(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupServiceVisibility = __goscriptValue
}

export { __goscriptInit0 }

export { __goscriptInit1 }
