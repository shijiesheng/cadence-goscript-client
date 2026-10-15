// Generated file based on service_worker.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as types from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"

import * as __goscript_common_pb from "./common.pb.gs.ts"

import * as __goscript_decision_pb from "./decision.pb.gs.ts"

import * as __goscript_history_pb from "./history.pb.gs.ts"

import * as __goscript_query_pb from "./query.pb.gs.ts"

import * as __goscript_tasklist_pb from "./tasklist.pb.gs.ts"

import * as __goscript_workflow_pb from "./workflow.pb.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "./common.pb.gs.ts"
import "./decision.pb.gs.ts"
import "./history.pb.gs.ts"
import "./query.pb.gs.ts"
import "./tasklist.pb.gs.ts"
import "./workflow.pb.gs.ts"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.PollForDecisionTaskRequest", "apiv1.PollForDecisionTaskResponse", "apiv1.RespondDecisionTaskCompletedRequest", "apiv1.RespondDecisionTaskCompletedResponse", "apiv1.RespondDecisionTaskFailedRequest", "apiv1.RespondDecisionTaskFailedResponse", "apiv1.PollForActivityTaskRequest", "apiv1.PollForActivityTaskResponse", "apiv1.RespondActivityTaskCompletedRequest", "apiv1.RespondActivityTaskCompletedResponse", "apiv1.RespondActivityTaskCompletedByIDRequest", "apiv1.RespondActivityTaskCompletedByIDResponse", "apiv1.RespondActivityTaskFailedRequest", "apiv1.RespondActivityTaskFailedResponse", "apiv1.RespondActivityTaskFailedByIDRequest", "apiv1.RespondActivityTaskFailedByIDResponse", "apiv1.RespondActivityTaskCanceledRequest", "apiv1.RespondActivityTaskCanceledResponse", "apiv1.RespondActivityTaskCanceledByIDRequest", "apiv1.RespondActivityTaskCanceledByIDResponse", "apiv1.RecordActivityTaskHeartbeatRequest", "apiv1.RecordActivityTaskHeartbeatResponse", "apiv1.RecordActivityTaskHeartbeatByIDRequest", "apiv1.RecordActivityTaskHeartbeatByIDResponse", "apiv1.RespondQueryTaskCompletedRequest", "apiv1.RespondQueryTaskCompletedResponse", "apiv1.ResetStickyTaskListRequest", "apiv1.ResetStickyTaskListResponse", "apiv1.AutoConfigHint"])

export class PollForDecisionTaskRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get TaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		return this._fields.TaskList
	}

	public set TaskList(value: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null) {
		this._fields.TaskList = value
	}

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
	}

	public get BinaryChecksum(): string {
		return this._fields.BinaryChecksum
	}

	public set BinaryChecksum(value: string) {
		this._fields.BinaryChecksum = value
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
		TaskList: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null
		Identity: string
		BinaryChecksum: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, TaskList?: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null, Identity?: string, BinaryChecksum?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			TaskList: init?.TaskList ?? (null! as __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null),
			Identity: init?.Identity ?? ("" as string),
			BinaryChecksum: init?.BinaryChecksum ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PollForDecisionTaskRequest {
		return new PollForDecisionTaskRequest(this, true)
	}

	public __goscriptAssign(source: PollForDecisionTaskRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.TaskList = values.TaskList
		target.Identity = values.Identity
		target.BinaryChecksum = values.BinaryChecksum
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([0])]
	}

	public GetBinaryChecksum(): string {
		const m: PollForDecisionTaskRequest | $.VarRef<PollForDecisionTaskRequest> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskRequest>(m).BinaryChecksum
		}
		return ""
	}

	public GetDomain(): string {
		const m: PollForDecisionTaskRequest | $.VarRef<PollForDecisionTaskRequest> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskRequest>(m).Domain
		}
		return ""
	}

	public GetIdentity(): string {
		const m: PollForDecisionTaskRequest | $.VarRef<PollForDecisionTaskRequest> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskRequest>(m).Identity
		}
		return ""
	}

	public GetTaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		const m: PollForDecisionTaskRequest | $.VarRef<PollForDecisionTaskRequest> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskRequest>(m).TaskList
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: PollForDecisionTaskRequest | $.VarRef<PollForDecisionTaskRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForDecisionTaskRequest).Size() : PollForDecisionTaskRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple0: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForDecisionTaskRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PollForDecisionTaskRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PollForDecisionTaskRequest | $.VarRef<PollForDecisionTaskRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForDecisionTaskRequest).Size() : PollForDecisionTaskRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForDecisionTaskRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PollForDecisionTaskRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PollForDecisionTaskRequest | $.VarRef<PollForDecisionTaskRequest> | null = this;
		const m$: PollForDecisionTaskRequest = m == null ? $.pointerTarget<PollForDecisionTaskRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PollForDecisionTaskRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as PollForDecisionTaskRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as PollForDecisionTaskRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PollForDecisionTaskRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as PollForDecisionTaskRequest).BinaryChecksum) > 0) {
			i = i - ($.stringLen((m$ as PollForDecisionTaskRequest).BinaryChecksum))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PollForDecisionTaskRequest).BinaryChecksum)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as PollForDecisionTaskRequest).BinaryChecksum)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as PollForDecisionTaskRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as PollForDecisionTaskRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PollForDecisionTaskRequest).Identity)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as PollForDecisionTaskRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as PollForDecisionTaskRequest).TaskList != null) {
			{
				let [size, err] = __goscript_tasklist_pb.TaskList.prototype.MarshalToSizedBuffer.call((m$ as PollForDecisionTaskRequest).TaskList, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as PollForDecisionTaskRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as PollForDecisionTaskRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PollForDecisionTaskRequest).Domain)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as PollForDecisionTaskRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: PollForDecisionTaskRequest | $.VarRef<PollForDecisionTaskRequest> | null = this;
		$.assignStruct($.pointerValue<PollForDecisionTaskRequest>(m), $.markAsStructValue(new PollForDecisionTaskRequest()))
	}

	public Size(): number {
		const m: PollForDecisionTaskRequest | $.VarRef<PollForDecisionTaskRequest> | null = this;
		let n: number = 0
		const m$: PollForDecisionTaskRequest = m == null ? $.pointerTarget<PollForDecisionTaskRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PollForDecisionTaskRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as PollForDecisionTaskRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForDecisionTaskRequest).TaskList != null) {
			l = __goscript_tasklist_pb.TaskList.prototype.Size.call((m$ as PollForDecisionTaskRequest).TaskList)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as PollForDecisionTaskRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as PollForDecisionTaskRequest).BinaryChecksum)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForDecisionTaskRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as PollForDecisionTaskRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: PollForDecisionTaskRequest | $.VarRef<PollForDecisionTaskRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.PollForDecisionTaskRequest", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: PollForDecisionTaskRequest | $.VarRef<PollForDecisionTaskRequest> | null = this;
		const m$: PollForDecisionTaskRequest = m == null ? $.pointerTarget<PollForDecisionTaskRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PollForDecisionTaskRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
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
				return fmt.Errorf("proto: PollForDecisionTaskRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: PollForDecisionTaskRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PollForDecisionTaskRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskList", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForDecisionTaskRequest).TaskList == null) {
						;(m$ as PollForDecisionTaskRequest).TaskList = new __goscript_tasklist_pb.TaskList()
					}
					{
						let err = __goscript_tasklist_pb.TaskList.prototype.Unmarshal.call((m$ as PollForDecisionTaskRequest).TaskList, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Identity", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PollForDecisionTaskRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field BinaryChecksum", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PollForDecisionTaskRequest).BinaryChecksum = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PollForDecisionTaskRequest).XXX_unrecognized = $.appendSlice((m$ as PollForDecisionTaskRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: PollForDecisionTaskRequest | $.VarRef<PollForDecisionTaskRequest> | null = this;
		xxx_messageInfo_PollForDecisionTaskRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.PollForDecisionTaskRequest", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: PollForDecisionTaskRequest | $.VarRef<PollForDecisionTaskRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_PollForDecisionTaskRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.PollForDecisionTaskRequest", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForDecisionTaskRequest).MarshalToSizedBuffer(b) : PollForDecisionTaskRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: PollForDecisionTaskRequest | $.VarRef<PollForDecisionTaskRequest> | null = this;
		xxx_messageInfo_PollForDecisionTaskRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.PollForDecisionTaskRequest", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskRequest")), src)
	}

	public XXX_Size(): number {
		const m: PollForDecisionTaskRequest | $.VarRef<PollForDecisionTaskRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForDecisionTaskRequest).Size() : PollForDecisionTaskRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: PollForDecisionTaskRequest | $.VarRef<PollForDecisionTaskRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForDecisionTaskRequest).Unmarshal(b) : PollForDecisionTaskRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.PollForDecisionTaskRequest",
		() => new PollForDecisionTaskRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetBinaryChecksum", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetIdentity", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetTaskList", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.TaskList") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		PollForDecisionTaskRequest,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "TaskList", key: "TaskList", type: /* @__PURE__ */ $.pointerType("apiv1.TaskList"), tag: "protobuf:\"bytes,2,opt,name=task_list,json=taskList,proto3\" json:\"task_list,omitempty\"" }, { name: "Identity", key: "Identity", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=identity,proto3\" json:\"identity,omitempty\"" }, { name: "BinaryChecksum", key: "BinaryChecksum", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,4,opt,name=binary_checksum,json=binaryChecksum,proto3\" json:\"binary_checksum,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class PollForDecisionTaskResponse {
	public get TaskToken(): $.Slice<number> {
		return this._fields.TaskToken
	}

	public set TaskToken(value: $.Slice<number>) {
		this._fields.TaskToken = value
	}

	public get WorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		return this._fields.WorkflowExecution
	}

	public set WorkflowExecution(value: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null) {
		this._fields.WorkflowExecution = value
	}

	public get WorkflowType(): __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null {
		return this._fields.WorkflowType
	}

	public set WorkflowType(value: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null) {
		this._fields.WorkflowType = value
	}

	public get PreviousStartedEventId(): types.Int64Value | $.VarRef<types.Int64Value> | null {
		return this._fields.PreviousStartedEventId
	}

	public set PreviousStartedEventId(value: types.Int64Value | $.VarRef<types.Int64Value> | null) {
		this._fields.PreviousStartedEventId = value
	}

	public get StartedEventId(): bigint {
		return this._fields.StartedEventId
	}

	public set StartedEventId(value: bigint) {
		this._fields.StartedEventId = value
	}

	public get Attempt(): bigint {
		return this._fields.Attempt
	}

	public set Attempt(value: bigint) {
		this._fields.Attempt = value
	}

	public get BacklogCountHint(): bigint {
		return this._fields.BacklogCountHint
	}

	public set BacklogCountHint(value: bigint) {
		this._fields.BacklogCountHint = value
	}

	public get History(): __goscript_history_pb.History | $.VarRef<__goscript_history_pb.History> | null {
		return this._fields.History
	}

	public set History(value: __goscript_history_pb.History | $.VarRef<__goscript_history_pb.History> | null) {
		this._fields.History = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
	}

	public get Query(): __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null {
		return this._fields.Query
	}

	public set Query(value: __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null) {
		this._fields.Query = value
	}

	public get WorkflowExecutionTaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		return this._fields.WorkflowExecutionTaskList
	}

	public set WorkflowExecutionTaskList(value: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null) {
		this._fields.WorkflowExecutionTaskList = value
	}

	public get ScheduledTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.ScheduledTime
	}

	public set ScheduledTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.ScheduledTime = value
	}

	public get StartedTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.StartedTime
	}

	public set StartedTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.StartedTime = value
	}

	public get Queries(): globalThis.Map<string, __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null> | null {
		return this._fields.Queries
	}

	public set Queries(value: globalThis.Map<string, __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null> | null) {
		this._fields.Queries = value
	}

	public get NextEventId(): bigint {
		return this._fields.NextEventId
	}

	public set NextEventId(value: bigint) {
		this._fields.NextEventId = value
	}

	public get TotalHistoryBytes(): bigint {
		return this._fields.TotalHistoryBytes
	}

	public set TotalHistoryBytes(value: bigint) {
		this._fields.TotalHistoryBytes = value
	}

	public get AutoConfigHint(): AutoConfigHint | $.VarRef<AutoConfigHint> | null {
		return this._fields.AutoConfigHint
	}

	public set AutoConfigHint(value: AutoConfigHint | $.VarRef<AutoConfigHint> | null) {
		this._fields.AutoConfigHint = value
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
		TaskToken: $.Slice<number>
		WorkflowExecution: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null
		WorkflowType: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null
		PreviousStartedEventId: types.Int64Value | $.VarRef<types.Int64Value> | null
		StartedEventId: bigint
		Attempt: bigint
		BacklogCountHint: bigint
		History: __goscript_history_pb.History | $.VarRef<__goscript_history_pb.History> | null
		NextPageToken: $.Slice<number>
		Query: __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null
		WorkflowExecutionTaskList: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null
		ScheduledTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		StartedTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		Queries: globalThis.Map<string, __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null> | null
		NextEventId: bigint
		TotalHistoryBytes: bigint
		AutoConfigHint: AutoConfigHint | $.VarRef<AutoConfigHint> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{TaskToken?: $.Slice<number>, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, WorkflowType?: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null, PreviousStartedEventId?: types.Int64Value | $.VarRef<types.Int64Value> | null, StartedEventId?: bigint, Attempt?: bigint, BacklogCountHint?: bigint, History?: __goscript_history_pb.History | $.VarRef<__goscript_history_pb.History> | null, NextPageToken?: $.Slice<number>, Query?: __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null, WorkflowExecutionTaskList?: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null, ScheduledTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, StartedTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, Queries?: globalThis.Map<string, __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null> | null, NextEventId?: bigint, TotalHistoryBytes?: bigint, AutoConfigHint?: AutoConfigHint | $.VarRef<AutoConfigHint> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			TaskToken: init?.TaskToken ?? (null! as $.Slice<number>),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			WorkflowType: init?.WorkflowType ?? (null! as __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null),
			PreviousStartedEventId: init?.PreviousStartedEventId ?? (null! as types.Int64Value | $.VarRef<types.Int64Value> | null),
			StartedEventId: init?.StartedEventId ?? (0n as bigint),
			Attempt: init?.Attempt ?? (0n as bigint),
			BacklogCountHint: init?.BacklogCountHint ?? (0n as bigint),
			History: init?.History ?? (null! as __goscript_history_pb.History | $.VarRef<__goscript_history_pb.History> | null),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			Query: init?.Query ?? (null! as __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null),
			WorkflowExecutionTaskList: init?.WorkflowExecutionTaskList ?? (null! as __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null),
			ScheduledTime: init?.ScheduledTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			StartedTime: init?.StartedTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			Queries: init?.Queries ?? (null! as globalThis.Map<string, __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null> | null),
			NextEventId: init?.NextEventId ?? (0n as bigint),
			TotalHistoryBytes: init?.TotalHistoryBytes ?? (0n as bigint),
			AutoConfigHint: init?.AutoConfigHint ?? (null! as AutoConfigHint | $.VarRef<AutoConfigHint> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PollForDecisionTaskResponse {
		return new PollForDecisionTaskResponse(this, true)
	}

	public __goscriptAssign(source: PollForDecisionTaskResponse): void {
		const target = this._fields
		const values = source._fields
		target.TaskToken = values.TaskToken
		target.WorkflowExecution = values.WorkflowExecution
		target.WorkflowType = values.WorkflowType
		target.PreviousStartedEventId = values.PreviousStartedEventId
		target.StartedEventId = values.StartedEventId
		target.Attempt = values.Attempt
		target.BacklogCountHint = values.BacklogCountHint
		target.History = values.History
		target.NextPageToken = values.NextPageToken
		target.Query = values.Query
		target.WorkflowExecutionTaskList = values.WorkflowExecutionTaskList
		target.ScheduledTime = values.ScheduledTime
		target.StartedTime = values.StartedTime
		target.Queries = values.Queries
		target.NextEventId = values.NextEventId
		target.TotalHistoryBytes = values.TotalHistoryBytes
		target.AutoConfigHint = values.AutoConfigHint
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([1])]
	}

	public GetAttempt(): bigint {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskResponse>(m).Attempt
		}
		return 0n
	}

	public GetAutoConfigHint(): AutoConfigHint | $.VarRef<AutoConfigHint> | null {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskResponse>(m).AutoConfigHint
		}
		return null
	}

	public GetBacklogCountHint(): bigint {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskResponse>(m).BacklogCountHint
		}
		return 0n
	}

	public GetHistory(): __goscript_history_pb.History | $.VarRef<__goscript_history_pb.History> | null {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskResponse>(m).History
		}
		return null
	}

	public GetNextEventId(): bigint {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskResponse>(m).NextEventId
		}
		return 0n
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskResponse>(m).NextPageToken
		}
		return null
	}

	public GetPreviousStartedEventId(): types.Int64Value | $.VarRef<types.Int64Value> | null {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskResponse>(m).PreviousStartedEventId
		}
		return null
	}

	public GetQueries(): globalThis.Map<string, __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null> | null {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskResponse>(m).Queries
		}
		return null
	}

	public GetQuery(): __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskResponse>(m).Query
		}
		return null
	}

	public GetScheduledTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskResponse>(m).ScheduledTime
		}
		return null
	}

	public GetStartedEventId(): bigint {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskResponse>(m).StartedEventId
		}
		return 0n
	}

	public GetStartedTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskResponse>(m).StartedTime
		}
		return null
	}

	public GetTaskToken(): $.Slice<number> {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskResponse>(m).TaskToken
		}
		return null
	}

	public GetTotalHistoryBytes(): bigint {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskResponse>(m).TotalHistoryBytes
		}
		return 0n
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskResponse>(m).WorkflowExecution
		}
		return null
	}

	public GetWorkflowExecutionTaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskResponse>(m).WorkflowExecutionTaskList
		}
		return null
	}

	public GetWorkflowType(): __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForDecisionTaskResponse>(m).WorkflowType
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForDecisionTaskResponse).Size() : PollForDecisionTaskResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple1: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForDecisionTaskResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PollForDecisionTaskResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForDecisionTaskResponse).Size() : PollForDecisionTaskResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForDecisionTaskResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PollForDecisionTaskResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		const m$: PollForDecisionTaskResponse = m == null ? $.pointerTarget<PollForDecisionTaskResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PollForDecisionTaskResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as PollForDecisionTaskResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as PollForDecisionTaskResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PollForDecisionTaskResponse).XXX_unrecognized)
		}
		if ((m$ as PollForDecisionTaskResponse).AutoConfigHint != null) {
			{
				let [size, err] = AutoConfigHint.prototype.MarshalToSizedBuffer.call((m$ as PollForDecisionTaskResponse).AutoConfigHint, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8a
		}
		if ((m$ as PollForDecisionTaskResponse).TotalHistoryBytes != 0n) {
			i = encodeVarintServiceWorker(dAtA, i, $.uint64((m$ as PollForDecisionTaskResponse).TotalHistoryBytes))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x80
		}
		if ((m$ as PollForDecisionTaskResponse).NextEventId != 0n) {
			i = encodeVarintServiceWorker(dAtA, i, $.uint64((m$ as PollForDecisionTaskResponse).NextEventId))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x78
		}
		if ($.len((m$ as PollForDecisionTaskResponse).Queries) > 0) {
			for (const [k, __rangeValue] of (m$ as PollForDecisionTaskResponse).Queries?.entries() ?? []) {
				let v: __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null = $.mapGet<string, __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null, __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null>((m$ as PollForDecisionTaskResponse).Queries, k, null)[0]
				let baseI: number = i
				if (v != null) {
					{
						let [size, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as __goscript_query_pb.WorkflowQuery).MarshalToSizedBuffer($.goSlice(dAtA, undefined, i)) : __goscript_query_pb.WorkflowQuery.prototype.MarshalToSizedBuffer.call(v, $.goSlice(dAtA, undefined, i)))
						if (err != null) {
							return [0, err]
						}
						i = i - (size)
						i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
					}
					i--
					$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				}
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x72
			}
		}
		if ((m$ as PollForDecisionTaskResponse).StartedTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as PollForDecisionTaskResponse).StartedTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x6a
		}
		if ((m$ as PollForDecisionTaskResponse).ScheduledTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as PollForDecisionTaskResponse).ScheduledTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x62
		}
		if ((m$ as PollForDecisionTaskResponse).WorkflowExecutionTaskList != null) {
			{
				let [size, err] = __goscript_tasklist_pb.TaskList.prototype.MarshalToSizedBuffer.call((m$ as PollForDecisionTaskResponse).WorkflowExecutionTaskList, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x5a
		}
		if ((m$ as PollForDecisionTaskResponse).Query != null) {
			{
				let [size, err] = __goscript_query_pb.WorkflowQuery.prototype.MarshalToSizedBuffer.call((m$ as PollForDecisionTaskResponse).Query, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x52
		}
		if ($.sliceLen((m$ as PollForDecisionTaskResponse).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as PollForDecisionTaskResponse).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PollForDecisionTaskResponse).NextPageToken)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.sliceLen((m$ as PollForDecisionTaskResponse).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x4a
		}
		if ((m$ as PollForDecisionTaskResponse).History != null) {
			{
				let [size, err] = __goscript_history_pb.History.prototype.MarshalToSizedBuffer.call((m$ as PollForDecisionTaskResponse).History, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x42
		}
		if ((m$ as PollForDecisionTaskResponse).BacklogCountHint != 0n) {
			i = encodeVarintServiceWorker(dAtA, i, $.uint64((m$ as PollForDecisionTaskResponse).BacklogCountHint))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x38
		}
		if ((m$ as PollForDecisionTaskResponse).Attempt != 0n) {
			i = encodeVarintServiceWorker(dAtA, i, $.uint64((m$ as PollForDecisionTaskResponse).Attempt))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x30
		}
		if ((m$ as PollForDecisionTaskResponse).StartedEventId != 0n) {
			i = encodeVarintServiceWorker(dAtA, i, $.uint64((m$ as PollForDecisionTaskResponse).StartedEventId))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x28
		}
		if ((m$ as PollForDecisionTaskResponse).PreviousStartedEventId != null) {
			{
				let [size, err] = types.Int64Value.prototype.MarshalToSizedBuffer.call((m$ as PollForDecisionTaskResponse).PreviousStartedEventId, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as PollForDecisionTaskResponse).WorkflowType != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowType.prototype.MarshalToSizedBuffer.call((m$ as PollForDecisionTaskResponse).WorkflowType, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as PollForDecisionTaskResponse).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as PollForDecisionTaskResponse).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.sliceLen((m$ as PollForDecisionTaskResponse).TaskToken) > 0) {
			i = i - ($.sliceLen((m$ as PollForDecisionTaskResponse).TaskToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PollForDecisionTaskResponse).TaskToken)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.sliceLen((m$ as PollForDecisionTaskResponse).TaskToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		$.assignStruct($.pointerValue<PollForDecisionTaskResponse>(m), $.markAsStructValue(new PollForDecisionTaskResponse()))
	}

	public Size(): number {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		let n: number = 0
		const m$: PollForDecisionTaskResponse = m == null ? $.pointerTarget<PollForDecisionTaskResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PollForDecisionTaskResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.sliceLen((m$ as PollForDecisionTaskResponse).TaskToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForDecisionTaskResponse).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as PollForDecisionTaskResponse).WorkflowExecution)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForDecisionTaskResponse).WorkflowType != null) {
			l = __goscript_common_pb.WorkflowType.prototype.Size.call((m$ as PollForDecisionTaskResponse).WorkflowType)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForDecisionTaskResponse).PreviousStartedEventId != null) {
			l = types.Int64Value.prototype.Size.call((m$ as PollForDecisionTaskResponse).PreviousStartedEventId)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForDecisionTaskResponse).StartedEventId != 0n) {
			n = n + (1 + sovServiceWorker($.uint64((m$ as PollForDecisionTaskResponse).StartedEventId)))
		}
		if ((m$ as PollForDecisionTaskResponse).Attempt != 0n) {
			n = n + (1 + sovServiceWorker($.uint64((m$ as PollForDecisionTaskResponse).Attempt)))
		}
		if ((m$ as PollForDecisionTaskResponse).BacklogCountHint != 0n) {
			n = n + (1 + sovServiceWorker($.uint64((m$ as PollForDecisionTaskResponse).BacklogCountHint)))
		}
		if ((m$ as PollForDecisionTaskResponse).History != null) {
			l = __goscript_history_pb.History.prototype.Size.call((m$ as PollForDecisionTaskResponse).History)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.sliceLen((m$ as PollForDecisionTaskResponse).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForDecisionTaskResponse).Query != null) {
			l = __goscript_query_pb.WorkflowQuery.prototype.Size.call((m$ as PollForDecisionTaskResponse).Query)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForDecisionTaskResponse).WorkflowExecutionTaskList != null) {
			l = __goscript_tasklist_pb.TaskList.prototype.Size.call((m$ as PollForDecisionTaskResponse).WorkflowExecutionTaskList)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForDecisionTaskResponse).ScheduledTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as PollForDecisionTaskResponse).ScheduledTime)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForDecisionTaskResponse).StartedTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as PollForDecisionTaskResponse).StartedTime)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ($.len((m$ as PollForDecisionTaskResponse).Queries) > 0) {
			for (const [k, v] of (m$ as PollForDecisionTaskResponse).Queries?.entries() ?? []) {
				k
				v
				l = 0
				if (v != null) {
					l = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as __goscript_query_pb.WorkflowQuery).Size() : __goscript_query_pb.WorkflowQuery.prototype.Size.call(v))
					l = l + (1 + sovServiceWorker($.uint64(l)))
				}
				let mapEntrySize = ((1 + $.stringLen(k)) + sovServiceWorker($.uint64($.stringLen(k)))) + l
				n = n + ((mapEntrySize + 1) + sovServiceWorker($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as PollForDecisionTaskResponse).NextEventId != 0n) {
			n = n + (1 + sovServiceWorker($.uint64((m$ as PollForDecisionTaskResponse).NextEventId)))
		}
		if ((m$ as PollForDecisionTaskResponse).TotalHistoryBytes != 0n) {
			n = n + (2 + sovServiceWorker($.uint64((m$ as PollForDecisionTaskResponse).TotalHistoryBytes)))
		}
		if ((m$ as PollForDecisionTaskResponse).AutoConfigHint != null) {
			l = AutoConfigHint.prototype.Size.call((m$ as PollForDecisionTaskResponse).AutoConfigHint)
			n = n + ((2 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForDecisionTaskResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as PollForDecisionTaskResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.PollForDecisionTaskResponse", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		const m$: PollForDecisionTaskResponse = m == null ? $.pointerTarget<PollForDecisionTaskResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PollForDecisionTaskResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
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
				return fmt.Errorf("proto: PollForDecisionTaskResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: PollForDecisionTaskResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PollForDecisionTaskResponse).TaskToken = $.appendSlice($.goSlice((m$ as PollForDecisionTaskResponse).TaskToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as PollForDecisionTaskResponse).TaskToken == null) {
						;(m$ as PollForDecisionTaskResponse).TaskToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowExecution", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForDecisionTaskResponse).WorkflowExecution == null) {
						;(m$ as PollForDecisionTaskResponse).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as PollForDecisionTaskResponse).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowType", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForDecisionTaskResponse).WorkflowType == null) {
						;(m$ as PollForDecisionTaskResponse).WorkflowType = new __goscript_common_pb.WorkflowType()
					}
					{
						let err = __goscript_common_pb.WorkflowType.prototype.Unmarshal.call((m$ as PollForDecisionTaskResponse).WorkflowType, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field PreviousStartedEventId", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForDecisionTaskResponse).PreviousStartedEventId == null) {
						;(m$ as PollForDecisionTaskResponse).PreviousStartedEventId = new types.Int64Value()
					}
					{
						let err = types.Int64Value.prototype.Unmarshal.call((m$ as PollForDecisionTaskResponse).PreviousStartedEventId, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartedEventId", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as PollForDecisionTaskResponse).StartedEventId = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++;
						;(m$ as PollForDecisionTaskResponse).StartedEventId = $.int64Or((m$ as PollForDecisionTaskResponse).StartedEventId, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 6:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Attempt", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as PollForDecisionTaskResponse).Attempt = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++;
						;(m$ as PollForDecisionTaskResponse).Attempt = $.int64Or((m$ as PollForDecisionTaskResponse).Attempt, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 7:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field BacklogCountHint", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as PollForDecisionTaskResponse).BacklogCountHint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++;
						;(m$ as PollForDecisionTaskResponse).BacklogCountHint = $.int64Or((m$ as PollForDecisionTaskResponse).BacklogCountHint, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 8:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field History", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForDecisionTaskResponse).History == null) {
						;(m$ as PollForDecisionTaskResponse).History = new __goscript_history_pb.History()
					}
					{
						let err = __goscript_history_pb.History.prototype.Unmarshal.call((m$ as PollForDecisionTaskResponse).History, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 9:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field NextPageToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PollForDecisionTaskResponse).NextPageToken = $.appendSlice($.goSlice((m$ as PollForDecisionTaskResponse).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as PollForDecisionTaskResponse).NextPageToken == null) {
						;(m$ as PollForDecisionTaskResponse).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 10:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Query", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForDecisionTaskResponse).Query == null) {
						;(m$ as PollForDecisionTaskResponse).Query = new __goscript_query_pb.WorkflowQuery()
					}
					{
						let err = __goscript_query_pb.WorkflowQuery.prototype.Unmarshal.call((m$ as PollForDecisionTaskResponse).Query, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 11:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowExecutionTaskList", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForDecisionTaskResponse).WorkflowExecutionTaskList == null) {
						;(m$ as PollForDecisionTaskResponse).WorkflowExecutionTaskList = new __goscript_tasklist_pb.TaskList()
					}
					{
						let err = __goscript_tasklist_pb.TaskList.prototype.Unmarshal.call((m$ as PollForDecisionTaskResponse).WorkflowExecutionTaskList, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 12:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduledTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForDecisionTaskResponse).ScheduledTime == null) {
						;(m$ as PollForDecisionTaskResponse).ScheduledTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as PollForDecisionTaskResponse).ScheduledTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 13:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartedTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForDecisionTaskResponse).StartedTime == null) {
						;(m$ as PollForDecisionTaskResponse).StartedTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as PollForDecisionTaskResponse).StartedTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 14:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Queries", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForDecisionTaskResponse).Queries == null) {
						;(m$ as PollForDecisionTaskResponse).Queries = $.makeMap<string, __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null>()
					}
					let mapkey: string = ""
					let mapvalue: __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null = null! as __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow0: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowServiceWorker
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
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
									return ErrIntOverflowServiceWorker
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthServiceWorker
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthServiceWorker
							}
							if (postStringIndexmapkey > l) {
								return io.ErrUnexpectedEOF
							}
							mapkey = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapkey))
							iNdEx = postStringIndexmapkey
						} else {
							if (__goscriptShadow1 == 2) {
								let mapmsglen: number = 0
								for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
									if (shift >= 64) {
										return ErrIntOverflowServiceWorker
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
									iNdEx++
									mapmsglen = mapmsglen | ($.int(b & 0x7F) << shift)
									if (b < 0x80) {
										break
									}
								}
								if (mapmsglen < 0) {
									return ErrInvalidLengthServiceWorker
								}
								let postmsgIndex: number = iNdEx + mapmsglen
								if (postmsgIndex < 0) {
									return ErrInvalidLengthServiceWorker
								}
								if (postmsgIndex > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = new __goscript_query_pb.WorkflowQuery()
								{
									let err = (mapvalue !== null && (mapvalue as any).__isVarRef !== true && (mapvalue as any).__goValue === undefined ? ((mapvalue as any) as __goscript_query_pb.WorkflowQuery).Unmarshal($.goSlice(dAtA, iNdEx, postmsgIndex)) : __goscript_query_pb.WorkflowQuery.prototype.Unmarshal.call(mapvalue, $.goSlice(dAtA, iNdEx, postmsgIndex)))
									if (err != null) {
										return err
									}
								}
								iNdEx = postmsgIndex
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthServiceWorker
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as PollForDecisionTaskResponse).Queries, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				case 15:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field NextEventId", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as PollForDecisionTaskResponse).NextEventId = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++;
						;(m$ as PollForDecisionTaskResponse).NextEventId = $.int64Or((m$ as PollForDecisionTaskResponse).NextEventId, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 16:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field TotalHistoryBytes", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as PollForDecisionTaskResponse).TotalHistoryBytes = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++;
						;(m$ as PollForDecisionTaskResponse).TotalHistoryBytes = $.int64Or((m$ as PollForDecisionTaskResponse).TotalHistoryBytes, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 17:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field AutoConfigHint", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForDecisionTaskResponse).AutoConfigHint == null) {
						;(m$ as PollForDecisionTaskResponse).AutoConfigHint = new AutoConfigHint()
					}
					{
						let err = AutoConfigHint.prototype.Unmarshal.call((m$ as PollForDecisionTaskResponse).AutoConfigHint, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PollForDecisionTaskResponse).XXX_unrecognized = $.appendSlice((m$ as PollForDecisionTaskResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		xxx_messageInfo_PollForDecisionTaskResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.PollForDecisionTaskResponse", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_PollForDecisionTaskResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.PollForDecisionTaskResponse", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForDecisionTaskResponse).MarshalToSizedBuffer(b) : PollForDecisionTaskResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		xxx_messageInfo_PollForDecisionTaskResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.PollForDecisionTaskResponse", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskResponse")), src)
	}

	public XXX_Size(): number {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForDecisionTaskResponse).Size() : PollForDecisionTaskResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForDecisionTaskResponse).Unmarshal(b) : PollForDecisionTaskResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.PollForDecisionTaskResponse",
		() => new PollForDecisionTaskResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetAttempt", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }], pointerReceiver: true }, { name: "GetAutoConfigHint", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.AutoConfigHint") }], pointerReceiver: true }, { name: "GetBacklogCountHint", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }], pointerReceiver: true }, { name: "GetHistory", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.History") }], pointerReceiver: true }, { name: "GetNextEventId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }], pointerReceiver: true }, { name: "GetNextPageToken", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "GetPreviousStartedEventId", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Int64Value") }], pointerReceiver: true }, { name: "GetQueries", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.WorkflowQuery")) }], pointerReceiver: true }, { name: "GetQuery", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowQuery") }], pointerReceiver: true }, { name: "GetScheduledTime", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Timestamp") }], pointerReceiver: true }, { name: "GetStartedEventId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }], pointerReceiver: true }, { name: "GetStartedTime", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Timestamp") }], pointerReceiver: true }, { name: "GetTaskToken", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "GetTotalHistoryBytes", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }], pointerReceiver: true }, { name: "GetWorkflowExecution", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution") }], pointerReceiver: true }, { name: "GetWorkflowExecutionTaskList", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.TaskList") }], pointerReceiver: true }, { name: "GetWorkflowType", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowType") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		PollForDecisionTaskResponse,
		() => [{ name: "TaskToken", key: "TaskToken", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,1,opt,name=task_token,json=taskToken,proto3\" json:\"task_token,omitempty\"" }, { name: "WorkflowExecution", key: "WorkflowExecution", type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }, { name: "WorkflowType", key: "WorkflowType", type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowType"), tag: "protobuf:\"bytes,3,opt,name=workflow_type,json=workflowType,proto3\" json:\"workflow_type,omitempty\"" }, { name: "PreviousStartedEventId", key: "PreviousStartedEventId", type: /* @__PURE__ */ $.pointerType("types.Int64Value"), tag: "protobuf:\"bytes,4,opt,name=previous_started_event_id,json=previousStartedEventId,proto3\" json:\"previous_started_event_id,omitempty\"" }, { name: "StartedEventId", key: "StartedEventId", type: /* @__PURE__ */ $.basicType("int64"), tag: "protobuf:\"varint,5,opt,name=started_event_id,json=startedEventId,proto3\" json:\"started_event_id,omitempty\"" }, { name: "Attempt", key: "Attempt", type: /* @__PURE__ */ $.basicType("int64"), tag: "protobuf:\"varint,6,opt,name=attempt,proto3\" json:\"attempt,omitempty\"" }, { name: "BacklogCountHint", key: "BacklogCountHint", type: /* @__PURE__ */ $.basicType("int64"), tag: "protobuf:\"varint,7,opt,name=backlog_count_hint,json=backlogCountHint,proto3\" json:\"backlog_count_hint,omitempty\"" }, { name: "History", key: "History", type: /* @__PURE__ */ $.pointerType("apiv1.History"), tag: "protobuf:\"bytes,8,opt,name=history,proto3\" json:\"history,omitempty\"" }, { name: "NextPageToken", key: "NextPageToken", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,9,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }, { name: "Query", key: "Query", type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowQuery"), tag: "protobuf:\"bytes,10,opt,name=query,proto3\" json:\"query,omitempty\"" }, { name: "WorkflowExecutionTaskList", key: "WorkflowExecutionTaskList", type: /* @__PURE__ */ $.pointerType("apiv1.TaskList"), tag: "protobuf:\"bytes,11,opt,name=workflow_execution_task_list,json=workflowExecutionTaskList,proto3\" json:\"workflow_execution_task_list,omitempty\"" }, { name: "ScheduledTime", key: "ScheduledTime", type: /* @__PURE__ */ $.pointerType("types.Timestamp"), tag: "protobuf:\"bytes,12,opt,name=scheduled_time,json=scheduledTime,proto3\" json:\"scheduled_time,omitempty\"" }, { name: "StartedTime", key: "StartedTime", type: /* @__PURE__ */ $.pointerType("types.Timestamp"), tag: "protobuf:\"bytes,13,opt,name=started_time,json=startedTime,proto3\" json:\"started_time,omitempty\"" }, { name: "Queries", key: "Queries", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.WorkflowQuery")), tag: "protobuf:\"bytes,14,rep,name=queries,proto3\" json:\"queries,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }, { name: "NextEventId", key: "NextEventId", type: /* @__PURE__ */ $.basicType("int64"), tag: "protobuf:\"varint,15,opt,name=next_event_id,json=nextEventId,proto3\" json:\"next_event_id,omitempty\"" }, { name: "TotalHistoryBytes", key: "TotalHistoryBytes", type: /* @__PURE__ */ $.basicType("int64"), tag: "protobuf:\"varint,16,opt,name=total_history_bytes,json=totalHistoryBytes,proto3\" json:\"total_history_bytes,omitempty\"" }, { name: "AutoConfigHint", key: "AutoConfigHint", type: /* @__PURE__ */ $.pointerType("apiv1.AutoConfigHint"), tag: "protobuf:\"bytes,17,opt,name=auto_config_hint,json=autoConfigHint,proto3\" json:\"auto_config_hint,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondDecisionTaskCompletedRequest {
	public get TaskToken(): $.Slice<number> {
		return this._fields.TaskToken
	}

	public set TaskToken(value: $.Slice<number>) {
		this._fields.TaskToken = value
	}

	public get Decisions(): $.Slice<__goscript_decision_pb.Decision | $.VarRef<__goscript_decision_pb.Decision> | null> {
		return this._fields.Decisions
	}

	public set Decisions(value: $.Slice<__goscript_decision_pb.Decision | $.VarRef<__goscript_decision_pb.Decision> | null>) {
		this._fields.Decisions = value
	}

	public get ExecutionContext(): $.Slice<number> {
		return this._fields.ExecutionContext
	}

	public set ExecutionContext(value: $.Slice<number>) {
		this._fields.ExecutionContext = value
	}

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
	}

	public get StickyAttributes(): __goscript_tasklist_pb.StickyExecutionAttributes | $.VarRef<__goscript_tasklist_pb.StickyExecutionAttributes> | null {
		return this._fields.StickyAttributes
	}

	public set StickyAttributes(value: __goscript_tasklist_pb.StickyExecutionAttributes | $.VarRef<__goscript_tasklist_pb.StickyExecutionAttributes> | null) {
		this._fields.StickyAttributes = value
	}

	public get ReturnNewDecisionTask(): boolean {
		return this._fields.ReturnNewDecisionTask
	}

	public set ReturnNewDecisionTask(value: boolean) {
		this._fields.ReturnNewDecisionTask = value
	}

	public get ForceCreateNewDecisionTask(): boolean {
		return this._fields.ForceCreateNewDecisionTask
	}

	public set ForceCreateNewDecisionTask(value: boolean) {
		this._fields.ForceCreateNewDecisionTask = value
	}

	public get BinaryChecksum(): string {
		return this._fields.BinaryChecksum
	}

	public set BinaryChecksum(value: string) {
		this._fields.BinaryChecksum = value
	}

	public get QueryResults(): globalThis.Map<string, __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null> | null {
		return this._fields.QueryResults
	}

	public set QueryResults(value: globalThis.Map<string, __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null> | null) {
		this._fields.QueryResults = value
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
		TaskToken: $.Slice<number>
		Decisions: $.Slice<__goscript_decision_pb.Decision | $.VarRef<__goscript_decision_pb.Decision> | null>
		ExecutionContext: $.Slice<number>
		Identity: string
		StickyAttributes: __goscript_tasklist_pb.StickyExecutionAttributes | $.VarRef<__goscript_tasklist_pb.StickyExecutionAttributes> | null
		ReturnNewDecisionTask: boolean
		ForceCreateNewDecisionTask: boolean
		BinaryChecksum: string
		QueryResults: globalThis.Map<string, __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{TaskToken?: $.Slice<number>, Decisions?: $.Slice<__goscript_decision_pb.Decision | $.VarRef<__goscript_decision_pb.Decision> | null>, ExecutionContext?: $.Slice<number>, Identity?: string, StickyAttributes?: __goscript_tasklist_pb.StickyExecutionAttributes | $.VarRef<__goscript_tasklist_pb.StickyExecutionAttributes> | null, ReturnNewDecisionTask?: boolean, ForceCreateNewDecisionTask?: boolean, BinaryChecksum?: string, QueryResults?: globalThis.Map<string, __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			TaskToken: init?.TaskToken ?? (null! as $.Slice<number>),
			Decisions: init?.Decisions ?? (null! as $.Slice<__goscript_decision_pb.Decision | $.VarRef<__goscript_decision_pb.Decision> | null>),
			ExecutionContext: init?.ExecutionContext ?? (null! as $.Slice<number>),
			Identity: init?.Identity ?? ("" as string),
			StickyAttributes: init?.StickyAttributes ?? (null! as __goscript_tasklist_pb.StickyExecutionAttributes | $.VarRef<__goscript_tasklist_pb.StickyExecutionAttributes> | null),
			ReturnNewDecisionTask: init?.ReturnNewDecisionTask ?? (false as boolean),
			ForceCreateNewDecisionTask: init?.ForceCreateNewDecisionTask ?? (false as boolean),
			BinaryChecksum: init?.BinaryChecksum ?? ("" as string),
			QueryResults: init?.QueryResults ?? (null! as globalThis.Map<string, __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RespondDecisionTaskCompletedRequest {
		return new RespondDecisionTaskCompletedRequest(this, true)
	}

	public __goscriptAssign(source: RespondDecisionTaskCompletedRequest): void {
		const target = this._fields
		const values = source._fields
		target.TaskToken = values.TaskToken
		target.Decisions = values.Decisions
		target.ExecutionContext = values.ExecutionContext
		target.Identity = values.Identity
		target.StickyAttributes = values.StickyAttributes
		target.ReturnNewDecisionTask = values.ReturnNewDecisionTask
		target.ForceCreateNewDecisionTask = values.ForceCreateNewDecisionTask
		target.BinaryChecksum = values.BinaryChecksum
		target.QueryResults = values.QueryResults
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([2])]
	}

	public GetBinaryChecksum(): string {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondDecisionTaskCompletedRequest>(m).BinaryChecksum
		}
		return ""
	}

	public GetDecisions(): $.Slice<__goscript_decision_pb.Decision | $.VarRef<__goscript_decision_pb.Decision> | null> {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondDecisionTaskCompletedRequest>(m).Decisions
		}
		return null
	}

	public GetExecutionContext(): $.Slice<number> {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondDecisionTaskCompletedRequest>(m).ExecutionContext
		}
		return null
	}

	public GetForceCreateNewDecisionTask(): boolean {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondDecisionTaskCompletedRequest>(m).ForceCreateNewDecisionTask
		}
		return false
	}

	public GetIdentity(): string {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondDecisionTaskCompletedRequest>(m).Identity
		}
		return ""
	}

	public GetQueryResults(): globalThis.Map<string, __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null> | null {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondDecisionTaskCompletedRequest>(m).QueryResults
		}
		return null
	}

	public GetReturnNewDecisionTask(): boolean {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondDecisionTaskCompletedRequest>(m).ReturnNewDecisionTask
		}
		return false
	}

	public GetStickyAttributes(): __goscript_tasklist_pb.StickyExecutionAttributes | $.VarRef<__goscript_tasklist_pb.StickyExecutionAttributes> | null {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondDecisionTaskCompletedRequest>(m).StickyAttributes
		}
		return null
	}

	public GetTaskToken(): $.Slice<number> {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondDecisionTaskCompletedRequest>(m).TaskToken
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskCompletedRequest).Size() : RespondDecisionTaskCompletedRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple2: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskCompletedRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondDecisionTaskCompletedRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskCompletedRequest).Size() : RespondDecisionTaskCompletedRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskCompletedRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondDecisionTaskCompletedRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		const m$: RespondDecisionTaskCompletedRequest = m == null ? $.pointerTarget<RespondDecisionTaskCompletedRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondDecisionTaskCompletedRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondDecisionTaskCompletedRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondDecisionTaskCompletedRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondDecisionTaskCompletedRequest).XXX_unrecognized)
		}
		if ($.len((m$ as RespondDecisionTaskCompletedRequest).QueryResults) > 0) {
			for (const [k, __rangeValue] of (m$ as RespondDecisionTaskCompletedRequest).QueryResults?.entries() ?? []) {
				let v: __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null = $.mapGet<string, __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null, __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null>((m$ as RespondDecisionTaskCompletedRequest).QueryResults, k, null)[0]
				let baseI: number = i
				if (v != null) {
					{
						let [size, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as __goscript_query_pb.WorkflowQueryResult).MarshalToSizedBuffer($.goSlice(dAtA, undefined, i)) : __goscript_query_pb.WorkflowQueryResult.prototype.MarshalToSizedBuffer.call(v, $.goSlice(dAtA, undefined, i)))
						if (err != null) {
							return [0, err]
						}
						i = i - (size)
						i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
					}
					i--
					$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				}
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x4a
			}
		}
		if ($.stringLen((m$ as RespondDecisionTaskCompletedRequest).BinaryChecksum) > 0) {
			i = i - ($.stringLen((m$ as RespondDecisionTaskCompletedRequest).BinaryChecksum))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondDecisionTaskCompletedRequest).BinaryChecksum)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RespondDecisionTaskCompletedRequest).BinaryChecksum)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x42
		}
		if ((m$ as RespondDecisionTaskCompletedRequest).ForceCreateNewDecisionTask) {
			i--
			if ((m$ as RespondDecisionTaskCompletedRequest).ForceCreateNewDecisionTask) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x38
		}
		if ((m$ as RespondDecisionTaskCompletedRequest).ReturnNewDecisionTask) {
			i--
			if ((m$ as RespondDecisionTaskCompletedRequest).ReturnNewDecisionTask) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x30
		}
		if ((m$ as RespondDecisionTaskCompletedRequest).StickyAttributes != null) {
			{
				let [size, err] = __goscript_tasklist_pb.StickyExecutionAttributes.prototype.MarshalToSizedBuffer.call((m$ as RespondDecisionTaskCompletedRequest).StickyAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ($.stringLen((m$ as RespondDecisionTaskCompletedRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as RespondDecisionTaskCompletedRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondDecisionTaskCompletedRequest).Identity)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RespondDecisionTaskCompletedRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.sliceLen((m$ as RespondDecisionTaskCompletedRequest).ExecutionContext) > 0) {
			i = i - ($.sliceLen((m$ as RespondDecisionTaskCompletedRequest).ExecutionContext))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondDecisionTaskCompletedRequest).ExecutionContext)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.sliceLen((m$ as RespondDecisionTaskCompletedRequest).ExecutionContext)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.sliceLen((m$ as RespondDecisionTaskCompletedRequest).Decisions) > 0) {
			for (let __goscriptSliceWindow2 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as RespondDecisionTaskCompletedRequest).Decisions) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_decision_pb.Decision.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as RespondDecisionTaskCompletedRequest).Decisions!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = 0x12
			}
		}
		if ($.sliceLen((m$ as RespondDecisionTaskCompletedRequest).TaskToken) > 0) {
			i = i - ($.sliceLen((m$ as RespondDecisionTaskCompletedRequest).TaskToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondDecisionTaskCompletedRequest).TaskToken)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.sliceLen((m$ as RespondDecisionTaskCompletedRequest).TaskToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		$.assignStruct($.pointerValue<RespondDecisionTaskCompletedRequest>(m), $.markAsStructValue(new RespondDecisionTaskCompletedRequest()))
	}

	public Size(): number {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		let n: number = 0
		const m$: RespondDecisionTaskCompletedRequest = m == null ? $.pointerTarget<RespondDecisionTaskCompletedRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondDecisionTaskCompletedRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.sliceLen((m$ as RespondDecisionTaskCompletedRequest).TaskToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ($.sliceLen((m$ as RespondDecisionTaskCompletedRequest).Decisions) > 0) {
			for (let __goscriptRangeTarget0 = (m$ as RespondDecisionTaskCompletedRequest).Decisions, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_decision_pb.Decision | $.VarRef<__goscript_decision_pb.Decision> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_decision_pb.Decision).Size() : __goscript_decision_pb.Decision.prototype.Size.call(e))
				n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
			}
		}
		l = $.sliceLen((m$ as RespondDecisionTaskCompletedRequest).ExecutionContext)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as RespondDecisionTaskCompletedRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondDecisionTaskCompletedRequest).StickyAttributes != null) {
			l = __goscript_tasklist_pb.StickyExecutionAttributes.prototype.Size.call((m$ as RespondDecisionTaskCompletedRequest).StickyAttributes)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondDecisionTaskCompletedRequest).ReturnNewDecisionTask) {
			n = n + (2)
		}
		if ((m$ as RespondDecisionTaskCompletedRequest).ForceCreateNewDecisionTask) {
			n = n + (2)
		}
		l = $.stringLen((m$ as RespondDecisionTaskCompletedRequest).BinaryChecksum)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ($.len((m$ as RespondDecisionTaskCompletedRequest).QueryResults) > 0) {
			for (const [k, v] of (m$ as RespondDecisionTaskCompletedRequest).QueryResults?.entries() ?? []) {
				k
				v
				l = 0
				if (v != null) {
					l = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as __goscript_query_pb.WorkflowQueryResult).Size() : __goscript_query_pb.WorkflowQueryResult.prototype.Size.call(v))
					l = l + (1 + sovServiceWorker($.uint64(l)))
				}
				let mapEntrySize = ((1 + $.stringLen(k)) + sovServiceWorker($.uint64($.stringLen(k)))) + l
				n = n + ((mapEntrySize + 1) + sovServiceWorker($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as RespondDecisionTaskCompletedRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondDecisionTaskCompletedRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondDecisionTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		const m$: RespondDecisionTaskCompletedRequest = m == null ? $.pointerTarget<RespondDecisionTaskCompletedRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondDecisionTaskCompletedRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
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
				return fmt.Errorf("proto: RespondDecisionTaskCompletedRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondDecisionTaskCompletedRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondDecisionTaskCompletedRequest).TaskToken = $.appendSlice($.goSlice((m$ as RespondDecisionTaskCompletedRequest).TaskToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as RespondDecisionTaskCompletedRequest).TaskToken == null) {
						;(m$ as RespondDecisionTaskCompletedRequest).TaskToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Decisions", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondDecisionTaskCompletedRequest).Decisions = $.appendOne((m$ as RespondDecisionTaskCompletedRequest).Decisions, new __goscript_decision_pb.Decision(), $.appendZeros.nil)
					{
						let err = __goscript_decision_pb.Decision.prototype.Unmarshal.call($.arrayIndex((m$ as RespondDecisionTaskCompletedRequest).Decisions!, $.sliceLen((m$ as RespondDecisionTaskCompletedRequest).Decisions) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ExecutionContext", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondDecisionTaskCompletedRequest).ExecutionContext = $.appendSlice($.goSlice((m$ as RespondDecisionTaskCompletedRequest).ExecutionContext, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as RespondDecisionTaskCompletedRequest).ExecutionContext == null) {
						;(m$ as RespondDecisionTaskCompletedRequest).ExecutionContext = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Identity", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondDecisionTaskCompletedRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StickyAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondDecisionTaskCompletedRequest).StickyAttributes == null) {
						;(m$ as RespondDecisionTaskCompletedRequest).StickyAttributes = new __goscript_tasklist_pb.StickyExecutionAttributes()
					}
					{
						let err = __goscript_tasklist_pb.StickyExecutionAttributes.prototype.Unmarshal.call((m$ as RespondDecisionTaskCompletedRequest).StickyAttributes, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field ReturnNewDecisionTask", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as RespondDecisionTaskCompletedRequest).ReturnNewDecisionTask = (v != 0)
					break
				}
				case 7:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field ForceCreateNewDecisionTask", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as RespondDecisionTaskCompletedRequest).ForceCreateNewDecisionTask = (v != 0)
					break
				}
				case 8:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field BinaryChecksum", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondDecisionTaskCompletedRequest).BinaryChecksum = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 9:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field QueryResults", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondDecisionTaskCompletedRequest).QueryResults == null) {
						;(m$ as RespondDecisionTaskCompletedRequest).QueryResults = $.makeMap<string, __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null>()
					}
					let mapkey: string = ""
					let mapvalue: __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null = null! as __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow2: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowServiceWorker
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
							iNdEx++
							__goscriptShadow2 = $.uint64Or(__goscriptShadow2, $.uint64Shl($.uint64(b & 0x7F), shift))
							if (b < 0x80) {
								break
							}
						}
						let __goscriptShadow3 = $.int($.uint64Shr(__goscriptShadow2, 3n), 32)
						if (__goscriptShadow3 == 1) {
							let stringLenmapkey: bigint = 0n
							for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
								if (shift >= 64) {
									return ErrIntOverflowServiceWorker
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthServiceWorker
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthServiceWorker
							}
							if (postStringIndexmapkey > l) {
								return io.ErrUnexpectedEOF
							}
							mapkey = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapkey))
							iNdEx = postStringIndexmapkey
						} else {
							if (__goscriptShadow3 == 2) {
								let mapmsglen: number = 0
								for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
									if (shift >= 64) {
										return ErrIntOverflowServiceWorker
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
									iNdEx++
									mapmsglen = mapmsglen | ($.int(b & 0x7F) << shift)
									if (b < 0x80) {
										break
									}
								}
								if (mapmsglen < 0) {
									return ErrInvalidLengthServiceWorker
								}
								let postmsgIndex: number = iNdEx + mapmsglen
								if (postmsgIndex < 0) {
									return ErrInvalidLengthServiceWorker
								}
								if (postmsgIndex > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = new __goscript_query_pb.WorkflowQueryResult()
								{
									let err = (mapvalue !== null && (mapvalue as any).__isVarRef !== true && (mapvalue as any).__goValue === undefined ? ((mapvalue as any) as __goscript_query_pb.WorkflowQueryResult).Unmarshal($.goSlice(dAtA, iNdEx, postmsgIndex)) : __goscript_query_pb.WorkflowQueryResult.prototype.Unmarshal.call(mapvalue, $.goSlice(dAtA, iNdEx, postmsgIndex)))
									if (err != null) {
										return err
									}
								}
								iNdEx = postmsgIndex
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthServiceWorker
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as RespondDecisionTaskCompletedRequest).QueryResults, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondDecisionTaskCompletedRequest).XXX_unrecognized = $.appendSlice((m$ as RespondDecisionTaskCompletedRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		xxx_messageInfo_RespondDecisionTaskCompletedRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondDecisionTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondDecisionTaskCompletedRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondDecisionTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskCompletedRequest).MarshalToSizedBuffer(b) : RespondDecisionTaskCompletedRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		xxx_messageInfo_RespondDecisionTaskCompletedRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondDecisionTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedRequest")), src)
	}

	public XXX_Size(): number {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskCompletedRequest).Size() : RespondDecisionTaskCompletedRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondDecisionTaskCompletedRequest | $.VarRef<RespondDecisionTaskCompletedRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskCompletedRequest).Unmarshal(b) : RespondDecisionTaskCompletedRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondDecisionTaskCompletedRequest",
		() => new RespondDecisionTaskCompletedRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetBinaryChecksum", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetDecisions", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.Decision")) }], pointerReceiver: true }, { name: "GetExecutionContext", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "GetForceCreateNewDecisionTask", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetIdentity", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetQueryResults", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.WorkflowQueryResult")) }], pointerReceiver: true }, { name: "GetReturnNewDecisionTask", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetStickyAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.StickyExecutionAttributes") }], pointerReceiver: true }, { name: "GetTaskToken", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondDecisionTaskCompletedRequest,
		() => [{ name: "TaskToken", key: "TaskToken", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,1,opt,name=task_token,json=taskToken,proto3\" json:\"task_token,omitempty\"" }, { name: "Decisions", key: "Decisions", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.Decision")), tag: "protobuf:\"bytes,2,rep,name=decisions,proto3\" json:\"decisions,omitempty\"" }, { name: "ExecutionContext", key: "ExecutionContext", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,3,opt,name=execution_context,json=executionContext,proto3\" json:\"execution_context,omitempty\"" }, { name: "Identity", key: "Identity", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,4,opt,name=identity,proto3\" json:\"identity,omitempty\"" }, { name: "StickyAttributes", key: "StickyAttributes", type: /* @__PURE__ */ $.pointerType("apiv1.StickyExecutionAttributes"), tag: "protobuf:\"bytes,5,opt,name=sticky_attributes,json=stickyAttributes,proto3\" json:\"sticky_attributes,omitempty\"" }, { name: "ReturnNewDecisionTask", key: "ReturnNewDecisionTask", type: /* @__PURE__ */ $.basicType("bool"), tag: "protobuf:\"varint,6,opt,name=return_new_decision_task,json=returnNewDecisionTask,proto3\" json:\"return_new_decision_task,omitempty\"" }, { name: "ForceCreateNewDecisionTask", key: "ForceCreateNewDecisionTask", type: /* @__PURE__ */ $.basicType("bool"), tag: "protobuf:\"varint,7,opt,name=force_create_new_decision_task,json=forceCreateNewDecisionTask,proto3\" json:\"force_create_new_decision_task,omitempty\"" }, { name: "BinaryChecksum", key: "BinaryChecksum", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,8,opt,name=binary_checksum,json=binaryChecksum,proto3\" json:\"binary_checksum,omitempty\"" }, { name: "QueryResults", key: "QueryResults", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.WorkflowQueryResult")), tag: "protobuf:\"bytes,9,rep,name=query_results,json=queryResults,proto3\" json:\"query_results,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondDecisionTaskCompletedResponse {
	public get DecisionTask(): PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null {
		return this._fields.DecisionTask
	}

	public set DecisionTask(value: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null) {
		this._fields.DecisionTask = value
	}

	public get ActivitiesToDispatchLocally(): globalThis.Map<string, __goscript_workflow_pb.ActivityLocalDispatchInfo | $.VarRef<__goscript_workflow_pb.ActivityLocalDispatchInfo> | null> | null {
		return this._fields.ActivitiesToDispatchLocally
	}

	public set ActivitiesToDispatchLocally(value: globalThis.Map<string, __goscript_workflow_pb.ActivityLocalDispatchInfo | $.VarRef<__goscript_workflow_pb.ActivityLocalDispatchInfo> | null> | null) {
		this._fields.ActivitiesToDispatchLocally = value
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
		DecisionTask: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null
		ActivitiesToDispatchLocally: globalThis.Map<string, __goscript_workflow_pb.ActivityLocalDispatchInfo | $.VarRef<__goscript_workflow_pb.ActivityLocalDispatchInfo> | null> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{DecisionTask?: PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null, ActivitiesToDispatchLocally?: globalThis.Map<string, __goscript_workflow_pb.ActivityLocalDispatchInfo | $.VarRef<__goscript_workflow_pb.ActivityLocalDispatchInfo> | null> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			DecisionTask: init?.DecisionTask ?? (null! as PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null),
			ActivitiesToDispatchLocally: init?.ActivitiesToDispatchLocally ?? (null! as globalThis.Map<string, __goscript_workflow_pb.ActivityLocalDispatchInfo | $.VarRef<__goscript_workflow_pb.ActivityLocalDispatchInfo> | null> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RespondDecisionTaskCompletedResponse {
		return new RespondDecisionTaskCompletedResponse(this, true)
	}

	public __goscriptAssign(source: RespondDecisionTaskCompletedResponse): void {
		const target = this._fields
		const values = source._fields
		target.DecisionTask = values.DecisionTask
		target.ActivitiesToDispatchLocally = values.ActivitiesToDispatchLocally
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([3])]
	}

	public GetActivitiesToDispatchLocally(): globalThis.Map<string, __goscript_workflow_pb.ActivityLocalDispatchInfo | $.VarRef<__goscript_workflow_pb.ActivityLocalDispatchInfo> | null> | null {
		const m: RespondDecisionTaskCompletedResponse | $.VarRef<RespondDecisionTaskCompletedResponse> | null = this;
		if (m != null) {
			return $.pointerValue<RespondDecisionTaskCompletedResponse>(m).ActivitiesToDispatchLocally
		}
		return null
	}

	public GetDecisionTask(): PollForDecisionTaskResponse | $.VarRef<PollForDecisionTaskResponse> | null {
		const m: RespondDecisionTaskCompletedResponse | $.VarRef<RespondDecisionTaskCompletedResponse> | null = this;
		if (m != null) {
			return $.pointerValue<RespondDecisionTaskCompletedResponse>(m).DecisionTask
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondDecisionTaskCompletedResponse | $.VarRef<RespondDecisionTaskCompletedResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskCompletedResponse).Size() : RespondDecisionTaskCompletedResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple3: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskCompletedResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondDecisionTaskCompletedResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondDecisionTaskCompletedResponse | $.VarRef<RespondDecisionTaskCompletedResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskCompletedResponse).Size() : RespondDecisionTaskCompletedResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskCompletedResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondDecisionTaskCompletedResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondDecisionTaskCompletedResponse | $.VarRef<RespondDecisionTaskCompletedResponse> | null = this;
		const m$: RespondDecisionTaskCompletedResponse = m == null ? $.pointerTarget<RespondDecisionTaskCompletedResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondDecisionTaskCompletedResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondDecisionTaskCompletedResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondDecisionTaskCompletedResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondDecisionTaskCompletedResponse).XXX_unrecognized)
		}
		if ($.len((m$ as RespondDecisionTaskCompletedResponse).ActivitiesToDispatchLocally) > 0) {
			for (const [k, __rangeValue] of (m$ as RespondDecisionTaskCompletedResponse).ActivitiesToDispatchLocally?.entries() ?? []) {
				let v: __goscript_workflow_pb.ActivityLocalDispatchInfo | $.VarRef<__goscript_workflow_pb.ActivityLocalDispatchInfo> | null = $.mapGet<string, __goscript_workflow_pb.ActivityLocalDispatchInfo | $.VarRef<__goscript_workflow_pb.ActivityLocalDispatchInfo> | null, __goscript_workflow_pb.ActivityLocalDispatchInfo | $.VarRef<__goscript_workflow_pb.ActivityLocalDispatchInfo> | null>((m$ as RespondDecisionTaskCompletedResponse).ActivitiesToDispatchLocally, k, null)[0]
				let baseI: number = i
				if (v != null) {
					{
						let [size, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as __goscript_workflow_pb.ActivityLocalDispatchInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, i)) : __goscript_workflow_pb.ActivityLocalDispatchInfo.prototype.MarshalToSizedBuffer.call(v, $.goSlice(dAtA, undefined, i)))
						if (err != null) {
							return [0, err]
						}
						i = i - (size)
						i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
					}
					i--
					$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				}
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
			}
		}
		if ((m$ as RespondDecisionTaskCompletedResponse).DecisionTask != null) {
			{
				let [size, err] = PollForDecisionTaskResponse.prototype.MarshalToSizedBuffer.call((m$ as RespondDecisionTaskCompletedResponse).DecisionTask, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondDecisionTaskCompletedResponse | $.VarRef<RespondDecisionTaskCompletedResponse> | null = this;
		$.assignStruct($.pointerValue<RespondDecisionTaskCompletedResponse>(m), $.markAsStructValue(new RespondDecisionTaskCompletedResponse()))
	}

	public Size(): number {
		const m: RespondDecisionTaskCompletedResponse | $.VarRef<RespondDecisionTaskCompletedResponse> | null = this;
		let n: number = 0
		const m$: RespondDecisionTaskCompletedResponse = m == null ? $.pointerTarget<RespondDecisionTaskCompletedResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondDecisionTaskCompletedResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as RespondDecisionTaskCompletedResponse).DecisionTask != null) {
			l = PollForDecisionTaskResponse.prototype.Size.call((m$ as RespondDecisionTaskCompletedResponse).DecisionTask)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ($.len((m$ as RespondDecisionTaskCompletedResponse).ActivitiesToDispatchLocally) > 0) {
			for (const [k, v] of (m$ as RespondDecisionTaskCompletedResponse).ActivitiesToDispatchLocally?.entries() ?? []) {
				k
				v
				l = 0
				if (v != null) {
					l = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as __goscript_workflow_pb.ActivityLocalDispatchInfo).Size() : __goscript_workflow_pb.ActivityLocalDispatchInfo.prototype.Size.call(v))
					l = l + (1 + sovServiceWorker($.uint64(l)))
				}
				let mapEntrySize = ((1 + $.stringLen(k)) + sovServiceWorker($.uint64($.stringLen(k)))) + l
				n = n + ((mapEntrySize + 1) + sovServiceWorker($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as RespondDecisionTaskCompletedResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondDecisionTaskCompletedResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondDecisionTaskCompletedResponse | $.VarRef<RespondDecisionTaskCompletedResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondDecisionTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondDecisionTaskCompletedResponse | $.VarRef<RespondDecisionTaskCompletedResponse> | null = this;
		const m$: RespondDecisionTaskCompletedResponse = m == null ? $.pointerTarget<RespondDecisionTaskCompletedResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondDecisionTaskCompletedResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow4 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
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
				return fmt.Errorf("proto: RespondDecisionTaskCompletedResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondDecisionTaskCompletedResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field DecisionTask", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondDecisionTaskCompletedResponse).DecisionTask == null) {
						;(m$ as RespondDecisionTaskCompletedResponse).DecisionTask = new PollForDecisionTaskResponse()
					}
					{
						let err = PollForDecisionTaskResponse.prototype.Unmarshal.call((m$ as RespondDecisionTaskCompletedResponse).DecisionTask, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field ActivitiesToDispatchLocally", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondDecisionTaskCompletedResponse).ActivitiesToDispatchLocally == null) {
						;(m$ as RespondDecisionTaskCompletedResponse).ActivitiesToDispatchLocally = $.makeMap<string, __goscript_workflow_pb.ActivityLocalDispatchInfo | $.VarRef<__goscript_workflow_pb.ActivityLocalDispatchInfo> | null>()
					}
					let mapkey: string = ""
					let mapvalue: __goscript_workflow_pb.ActivityLocalDispatchInfo | $.VarRef<__goscript_workflow_pb.ActivityLocalDispatchInfo> | null = null! as __goscript_workflow_pb.ActivityLocalDispatchInfo | $.VarRef<__goscript_workflow_pb.ActivityLocalDispatchInfo> | null
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow4: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowServiceWorker
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
							iNdEx++
							__goscriptShadow4 = $.uint64Or(__goscriptShadow4, $.uint64Shl($.uint64(b & 0x7F), shift))
							if (b < 0x80) {
								break
							}
						}
						let __goscriptShadow5 = $.int($.uint64Shr(__goscriptShadow4, 3n), 32)
						if (__goscriptShadow5 == 1) {
							let stringLenmapkey: bigint = 0n
							for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
								if (shift >= 64) {
									return ErrIntOverflowServiceWorker
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthServiceWorker
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthServiceWorker
							}
							if (postStringIndexmapkey > l) {
								return io.ErrUnexpectedEOF
							}
							mapkey = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapkey))
							iNdEx = postStringIndexmapkey
						} else {
							if (__goscriptShadow5 == 2) {
								let mapmsglen: number = 0
								for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
									if (shift >= 64) {
										return ErrIntOverflowServiceWorker
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
									iNdEx++
									mapmsglen = mapmsglen | ($.int(b & 0x7F) << shift)
									if (b < 0x80) {
										break
									}
								}
								if (mapmsglen < 0) {
									return ErrInvalidLengthServiceWorker
								}
								let postmsgIndex: number = iNdEx + mapmsglen
								if (postmsgIndex < 0) {
									return ErrInvalidLengthServiceWorker
								}
								if (postmsgIndex > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = new __goscript_workflow_pb.ActivityLocalDispatchInfo()
								{
									let err = (mapvalue !== null && (mapvalue as any).__isVarRef !== true && (mapvalue as any).__goValue === undefined ? ((mapvalue as any) as __goscript_workflow_pb.ActivityLocalDispatchInfo).Unmarshal($.goSlice(dAtA, iNdEx, postmsgIndex)) : __goscript_workflow_pb.ActivityLocalDispatchInfo.prototype.Unmarshal.call(mapvalue, $.goSlice(dAtA, iNdEx, postmsgIndex)))
									if (err != null) {
										return err
									}
								}
								iNdEx = postmsgIndex
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthServiceWorker
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as RespondDecisionTaskCompletedResponse).ActivitiesToDispatchLocally, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondDecisionTaskCompletedResponse).XXX_unrecognized = $.appendSlice((m$ as RespondDecisionTaskCompletedResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondDecisionTaskCompletedResponse | $.VarRef<RespondDecisionTaskCompletedResponse> | null = this;
		xxx_messageInfo_RespondDecisionTaskCompletedResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondDecisionTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondDecisionTaskCompletedResponse | $.VarRef<RespondDecisionTaskCompletedResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondDecisionTaskCompletedResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondDecisionTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskCompletedResponse).MarshalToSizedBuffer(b) : RespondDecisionTaskCompletedResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondDecisionTaskCompletedResponse | $.VarRef<RespondDecisionTaskCompletedResponse> | null = this;
		xxx_messageInfo_RespondDecisionTaskCompletedResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondDecisionTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedResponse")), src)
	}

	public XXX_Size(): number {
		const m: RespondDecisionTaskCompletedResponse | $.VarRef<RespondDecisionTaskCompletedResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskCompletedResponse).Size() : RespondDecisionTaskCompletedResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondDecisionTaskCompletedResponse | $.VarRef<RespondDecisionTaskCompletedResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskCompletedResponse).Unmarshal(b) : RespondDecisionTaskCompletedResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondDecisionTaskCompletedResponse",
		() => new RespondDecisionTaskCompletedResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActivitiesToDispatchLocally", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.ActivityLocalDispatchInfo")) }], pointerReceiver: true }, { name: "GetDecisionTask", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskResponse") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondDecisionTaskCompletedResponse,
		() => [{ name: "DecisionTask", key: "DecisionTask", type: /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskResponse"), tag: "protobuf:\"bytes,1,opt,name=decision_task,json=decisionTask,proto3\" json:\"decision_task,omitempty\"" }, { name: "ActivitiesToDispatchLocally", key: "ActivitiesToDispatchLocally", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.ActivityLocalDispatchInfo")), tag: "protobuf:\"bytes,2,rep,name=activities_to_dispatch_locally,json=activitiesToDispatchLocally,proto3\" json:\"activities_to_dispatch_locally,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondDecisionTaskFailedRequest {
	public get TaskToken(): $.Slice<number> {
		return this._fields.TaskToken
	}

	public set TaskToken(value: $.Slice<number>) {
		this._fields.TaskToken = value
	}

	public get Cause(): __goscript_workflow_pb.DecisionTaskFailedCause {
		return this._fields.Cause
	}

	public set Cause(value: __goscript_workflow_pb.DecisionTaskFailedCause) {
		this._fields.Cause = value
	}

	public get Details(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.Details
	}

	public set Details(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.Details = value
	}

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
	}

	public get BinaryChecksum(): string {
		return this._fields.BinaryChecksum
	}

	public set BinaryChecksum(value: string) {
		this._fields.BinaryChecksum = value
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
		TaskToken: $.Slice<number>
		Cause: __goscript_workflow_pb.DecisionTaskFailedCause
		Details: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		Identity: string
		BinaryChecksum: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{TaskToken?: $.Slice<number>, Cause?: __goscript_workflow_pb.DecisionTaskFailedCause, Details?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, Identity?: string, BinaryChecksum?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			TaskToken: init?.TaskToken ?? (null! as $.Slice<number>),
			Cause: init?.Cause ?? (0 as __goscript_workflow_pb.DecisionTaskFailedCause),
			Details: init?.Details ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			Identity: init?.Identity ?? ("" as string),
			BinaryChecksum: init?.BinaryChecksum ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RespondDecisionTaskFailedRequest {
		return new RespondDecisionTaskFailedRequest(this, true)
	}

	public __goscriptAssign(source: RespondDecisionTaskFailedRequest): void {
		const target = this._fields
		const values = source._fields
		target.TaskToken = values.TaskToken
		target.Cause = values.Cause
		target.Details = values.Details
		target.Identity = values.Identity
		target.BinaryChecksum = values.BinaryChecksum
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([4])]
	}

	public GetBinaryChecksum(): string {
		const m: RespondDecisionTaskFailedRequest | $.VarRef<RespondDecisionTaskFailedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondDecisionTaskFailedRequest>(m).BinaryChecksum
		}
		return ""
	}

	public GetCause(): __goscript_workflow_pb.DecisionTaskFailedCause {
		const m: RespondDecisionTaskFailedRequest | $.VarRef<RespondDecisionTaskFailedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondDecisionTaskFailedRequest>(m).Cause
		}
		return 0
	}

	public GetDetails(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: RespondDecisionTaskFailedRequest | $.VarRef<RespondDecisionTaskFailedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondDecisionTaskFailedRequest>(m).Details
		}
		return null
	}

	public GetIdentity(): string {
		const m: RespondDecisionTaskFailedRequest | $.VarRef<RespondDecisionTaskFailedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondDecisionTaskFailedRequest>(m).Identity
		}
		return ""
	}

	public GetTaskToken(): $.Slice<number> {
		const m: RespondDecisionTaskFailedRequest | $.VarRef<RespondDecisionTaskFailedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondDecisionTaskFailedRequest>(m).TaskToken
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondDecisionTaskFailedRequest | $.VarRef<RespondDecisionTaskFailedRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskFailedRequest).Size() : RespondDecisionTaskFailedRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskFailedRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondDecisionTaskFailedRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondDecisionTaskFailedRequest | $.VarRef<RespondDecisionTaskFailedRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskFailedRequest).Size() : RespondDecisionTaskFailedRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskFailedRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondDecisionTaskFailedRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondDecisionTaskFailedRequest | $.VarRef<RespondDecisionTaskFailedRequest> | null = this;
		const m$: RespondDecisionTaskFailedRequest = m == null ? $.pointerTarget<RespondDecisionTaskFailedRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondDecisionTaskFailedRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondDecisionTaskFailedRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondDecisionTaskFailedRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondDecisionTaskFailedRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as RespondDecisionTaskFailedRequest).BinaryChecksum) > 0) {
			i = i - ($.stringLen((m$ as RespondDecisionTaskFailedRequest).BinaryChecksum))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondDecisionTaskFailedRequest).BinaryChecksum)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RespondDecisionTaskFailedRequest).BinaryChecksum)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ($.stringLen((m$ as RespondDecisionTaskFailedRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as RespondDecisionTaskFailedRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondDecisionTaskFailedRequest).Identity)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RespondDecisionTaskFailedRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as RespondDecisionTaskFailedRequest).Details != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as RespondDecisionTaskFailedRequest).Details, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as RespondDecisionTaskFailedRequest).Cause != 0) {
			i = encodeVarintServiceWorker(dAtA, i, $.uint64((m$ as RespondDecisionTaskFailedRequest).Cause))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ($.sliceLen((m$ as RespondDecisionTaskFailedRequest).TaskToken) > 0) {
			i = i - ($.sliceLen((m$ as RespondDecisionTaskFailedRequest).TaskToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondDecisionTaskFailedRequest).TaskToken)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.sliceLen((m$ as RespondDecisionTaskFailedRequest).TaskToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondDecisionTaskFailedRequest | $.VarRef<RespondDecisionTaskFailedRequest> | null = this;
		$.assignStruct($.pointerValue<RespondDecisionTaskFailedRequest>(m), $.markAsStructValue(new RespondDecisionTaskFailedRequest()))
	}

	public Size(): number {
		const m: RespondDecisionTaskFailedRequest | $.VarRef<RespondDecisionTaskFailedRequest> | null = this;
		let n: number = 0
		const m$: RespondDecisionTaskFailedRequest = m == null ? $.pointerTarget<RespondDecisionTaskFailedRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondDecisionTaskFailedRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.sliceLen((m$ as RespondDecisionTaskFailedRequest).TaskToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondDecisionTaskFailedRequest).Cause != 0) {
			n = n + (1 + sovServiceWorker($.uint64((m$ as RespondDecisionTaskFailedRequest).Cause)))
		}
		if ((m$ as RespondDecisionTaskFailedRequest).Details != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as RespondDecisionTaskFailedRequest).Details)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as RespondDecisionTaskFailedRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as RespondDecisionTaskFailedRequest).BinaryChecksum)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondDecisionTaskFailedRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondDecisionTaskFailedRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondDecisionTaskFailedRequest | $.VarRef<RespondDecisionTaskFailedRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondDecisionTaskFailedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondDecisionTaskFailedRequest | $.VarRef<RespondDecisionTaskFailedRequest> | null = this;
		const m$: RespondDecisionTaskFailedRequest = m == null ? $.pointerTarget<RespondDecisionTaskFailedRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondDecisionTaskFailedRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow5 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
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
				return fmt.Errorf("proto: RespondDecisionTaskFailedRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondDecisionTaskFailedRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondDecisionTaskFailedRequest).TaskToken = $.appendSlice($.goSlice((m$ as RespondDecisionTaskFailedRequest).TaskToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as RespondDecisionTaskFailedRequest).TaskToken == null) {
						;(m$ as RespondDecisionTaskFailedRequest).TaskToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Cause", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as RespondDecisionTaskFailedRequest).Cause = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++;
						;(m$ as RespondDecisionTaskFailedRequest).Cause = (m$ as RespondDecisionTaskFailedRequest).Cause | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
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
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondDecisionTaskFailedRequest).Details == null) {
						;(m$ as RespondDecisionTaskFailedRequest).Details = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as RespondDecisionTaskFailedRequest).Details, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Identity", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondDecisionTaskFailedRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field BinaryChecksum", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondDecisionTaskFailedRequest).BinaryChecksum = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondDecisionTaskFailedRequest).XXX_unrecognized = $.appendSlice((m$ as RespondDecisionTaskFailedRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondDecisionTaskFailedRequest | $.VarRef<RespondDecisionTaskFailedRequest> | null = this;
		xxx_messageInfo_RespondDecisionTaskFailedRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondDecisionTaskFailedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondDecisionTaskFailedRequest | $.VarRef<RespondDecisionTaskFailedRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondDecisionTaskFailedRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondDecisionTaskFailedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskFailedRequest).MarshalToSizedBuffer(b) : RespondDecisionTaskFailedRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondDecisionTaskFailedRequest | $.VarRef<RespondDecisionTaskFailedRequest> | null = this;
		xxx_messageInfo_RespondDecisionTaskFailedRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondDecisionTaskFailedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedRequest")), src)
	}

	public XXX_Size(): number {
		const m: RespondDecisionTaskFailedRequest | $.VarRef<RespondDecisionTaskFailedRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskFailedRequest).Size() : RespondDecisionTaskFailedRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondDecisionTaskFailedRequest | $.VarRef<RespondDecisionTaskFailedRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskFailedRequest).Unmarshal(b) : RespondDecisionTaskFailedRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondDecisionTaskFailedRequest",
		() => new RespondDecisionTaskFailedRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetBinaryChecksum", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetCause", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.DecisionTaskFailedCause") }], pointerReceiver: true }, { name: "GetDetails", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetIdentity", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetTaskToken", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondDecisionTaskFailedRequest,
		() => [{ name: "TaskToken", key: "TaskToken", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,1,opt,name=task_token,json=taskToken,proto3\" json:\"task_token,omitempty\"" }, { name: "Cause", key: "Cause", type: /* @__PURE__ */ $.basicType("int32", "apiv1.DecisionTaskFailedCause"), tag: "protobuf:\"varint,2,opt,name=cause,proto3,enum=uber.cadence.api.v1.DecisionTaskFailedCause\" json:\"cause,omitempty\"" }, { name: "Details", key: "Details", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,3,opt,name=details,proto3\" json:\"details,omitempty\"" }, { name: "Identity", key: "Identity", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,4,opt,name=identity,proto3\" json:\"identity,omitempty\"" }, { name: "BinaryChecksum", key: "BinaryChecksum", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,5,opt,name=binary_checksum,json=binaryChecksum,proto3\" json:\"binary_checksum,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondDecisionTaskFailedResponse {
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

	public clone(): RespondDecisionTaskFailedResponse {
		return new RespondDecisionTaskFailedResponse(this, true)
	}

	public __goscriptAssign(source: RespondDecisionTaskFailedResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([5])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondDecisionTaskFailedResponse | $.VarRef<RespondDecisionTaskFailedResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskFailedResponse).Size() : RespondDecisionTaskFailedResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple5: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskFailedResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondDecisionTaskFailedResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondDecisionTaskFailedResponse | $.VarRef<RespondDecisionTaskFailedResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskFailedResponse).Size() : RespondDecisionTaskFailedResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskFailedResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondDecisionTaskFailedResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondDecisionTaskFailedResponse | $.VarRef<RespondDecisionTaskFailedResponse> | null = this;
		const m$: RespondDecisionTaskFailedResponse = m == null ? $.pointerTarget<RespondDecisionTaskFailedResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondDecisionTaskFailedResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondDecisionTaskFailedResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondDecisionTaskFailedResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondDecisionTaskFailedResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondDecisionTaskFailedResponse | $.VarRef<RespondDecisionTaskFailedResponse> | null = this;
		$.assignStruct($.pointerValue<RespondDecisionTaskFailedResponse>(m), new RespondDecisionTaskFailedResponse(undefined, true))
	}

	public Size(): number {
		const m: RespondDecisionTaskFailedResponse | $.VarRef<RespondDecisionTaskFailedResponse> | null = this;
		let n: number = 0
		const m$: RespondDecisionTaskFailedResponse = m == null ? $.pointerTarget<RespondDecisionTaskFailedResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondDecisionTaskFailedResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as RespondDecisionTaskFailedResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondDecisionTaskFailedResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondDecisionTaskFailedResponse | $.VarRef<RespondDecisionTaskFailedResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondDecisionTaskFailedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondDecisionTaskFailedResponse | $.VarRef<RespondDecisionTaskFailedResponse> | null = this;
		const m$: RespondDecisionTaskFailedResponse = m == null ? $.pointerTarget<RespondDecisionTaskFailedResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondDecisionTaskFailedResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow6 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
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
				return fmt.Errorf("proto: RespondDecisionTaskFailedResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondDecisionTaskFailedResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondDecisionTaskFailedResponse).XXX_unrecognized = $.appendSlice((m$ as RespondDecisionTaskFailedResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondDecisionTaskFailedResponse | $.VarRef<RespondDecisionTaskFailedResponse> | null = this;
		xxx_messageInfo_RespondDecisionTaskFailedResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondDecisionTaskFailedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondDecisionTaskFailedResponse | $.VarRef<RespondDecisionTaskFailedResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondDecisionTaskFailedResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondDecisionTaskFailedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskFailedResponse).MarshalToSizedBuffer(b) : RespondDecisionTaskFailedResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondDecisionTaskFailedResponse | $.VarRef<RespondDecisionTaskFailedResponse> | null = this;
		xxx_messageInfo_RespondDecisionTaskFailedResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondDecisionTaskFailedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedResponse")), src)
	}

	public XXX_Size(): number {
		const m: RespondDecisionTaskFailedResponse | $.VarRef<RespondDecisionTaskFailedResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskFailedResponse).Size() : RespondDecisionTaskFailedResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondDecisionTaskFailedResponse | $.VarRef<RespondDecisionTaskFailedResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondDecisionTaskFailedResponse).Unmarshal(b) : RespondDecisionTaskFailedResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondDecisionTaskFailedResponse",
		() => new RespondDecisionTaskFailedResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondDecisionTaskFailedResponse,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class PollForActivityTaskRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get TaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		return this._fields.TaskList
	}

	public set TaskList(value: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null) {
		this._fields.TaskList = value
	}

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
	}

	public get TaskListMetadata(): __goscript_tasklist_pb.TaskListMetadata | $.VarRef<__goscript_tasklist_pb.TaskListMetadata> | null {
		return this._fields.TaskListMetadata
	}

	public set TaskListMetadata(value: __goscript_tasklist_pb.TaskListMetadata | $.VarRef<__goscript_tasklist_pb.TaskListMetadata> | null) {
		this._fields.TaskListMetadata = value
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
		TaskList: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null
		Identity: string
		TaskListMetadata: __goscript_tasklist_pb.TaskListMetadata | $.VarRef<__goscript_tasklist_pb.TaskListMetadata> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, TaskList?: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null, Identity?: string, TaskListMetadata?: __goscript_tasklist_pb.TaskListMetadata | $.VarRef<__goscript_tasklist_pb.TaskListMetadata> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			TaskList: init?.TaskList ?? (null! as __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null),
			Identity: init?.Identity ?? ("" as string),
			TaskListMetadata: init?.TaskListMetadata ?? (null! as __goscript_tasklist_pb.TaskListMetadata | $.VarRef<__goscript_tasklist_pb.TaskListMetadata> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PollForActivityTaskRequest {
		return new PollForActivityTaskRequest(this, true)
	}

	public __goscriptAssign(source: PollForActivityTaskRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.TaskList = values.TaskList
		target.Identity = values.Identity
		target.TaskListMetadata = values.TaskListMetadata
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([6])]
	}

	public GetDomain(): string {
		const m: PollForActivityTaskRequest | $.VarRef<PollForActivityTaskRequest> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskRequest>(m).Domain
		}
		return ""
	}

	public GetIdentity(): string {
		const m: PollForActivityTaskRequest | $.VarRef<PollForActivityTaskRequest> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskRequest>(m).Identity
		}
		return ""
	}

	public GetTaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		const m: PollForActivityTaskRequest | $.VarRef<PollForActivityTaskRequest> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskRequest>(m).TaskList
		}
		return null
	}

	public GetTaskListMetadata(): __goscript_tasklist_pb.TaskListMetadata | $.VarRef<__goscript_tasklist_pb.TaskListMetadata> | null {
		const m: PollForActivityTaskRequest | $.VarRef<PollForActivityTaskRequest> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskRequest>(m).TaskListMetadata
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: PollForActivityTaskRequest | $.VarRef<PollForActivityTaskRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForActivityTaskRequest).Size() : PollForActivityTaskRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple6: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForActivityTaskRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PollForActivityTaskRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PollForActivityTaskRequest | $.VarRef<PollForActivityTaskRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForActivityTaskRequest).Size() : PollForActivityTaskRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForActivityTaskRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PollForActivityTaskRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PollForActivityTaskRequest | $.VarRef<PollForActivityTaskRequest> | null = this;
		const m$: PollForActivityTaskRequest = m == null ? $.pointerTarget<PollForActivityTaskRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PollForActivityTaskRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as PollForActivityTaskRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as PollForActivityTaskRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PollForActivityTaskRequest).XXX_unrecognized)
		}
		if ((m$ as PollForActivityTaskRequest).TaskListMetadata != null) {
			{
				let [size, err] = __goscript_tasklist_pb.TaskListMetadata.prototype.MarshalToSizedBuffer.call((m$ as PollForActivityTaskRequest).TaskListMetadata, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as PollForActivityTaskRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as PollForActivityTaskRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PollForActivityTaskRequest).Identity)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as PollForActivityTaskRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as PollForActivityTaskRequest).TaskList != null) {
			{
				let [size, err] = __goscript_tasklist_pb.TaskList.prototype.MarshalToSizedBuffer.call((m$ as PollForActivityTaskRequest).TaskList, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as PollForActivityTaskRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as PollForActivityTaskRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PollForActivityTaskRequest).Domain)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as PollForActivityTaskRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: PollForActivityTaskRequest | $.VarRef<PollForActivityTaskRequest> | null = this;
		$.assignStruct($.pointerValue<PollForActivityTaskRequest>(m), $.markAsStructValue(new PollForActivityTaskRequest()))
	}

	public Size(): number {
		const m: PollForActivityTaskRequest | $.VarRef<PollForActivityTaskRequest> | null = this;
		let n: number = 0
		const m$: PollForActivityTaskRequest = m == null ? $.pointerTarget<PollForActivityTaskRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PollForActivityTaskRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as PollForActivityTaskRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForActivityTaskRequest).TaskList != null) {
			l = __goscript_tasklist_pb.TaskList.prototype.Size.call((m$ as PollForActivityTaskRequest).TaskList)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as PollForActivityTaskRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForActivityTaskRequest).TaskListMetadata != null) {
			l = __goscript_tasklist_pb.TaskListMetadata.prototype.Size.call((m$ as PollForActivityTaskRequest).TaskListMetadata)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForActivityTaskRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as PollForActivityTaskRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: PollForActivityTaskRequest | $.VarRef<PollForActivityTaskRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.PollForActivityTaskRequest", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: PollForActivityTaskRequest | $.VarRef<PollForActivityTaskRequest> | null = this;
		const m$: PollForActivityTaskRequest = m == null ? $.pointerTarget<PollForActivityTaskRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PollForActivityTaskRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow7 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
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
				return fmt.Errorf("proto: PollForActivityTaskRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: PollForActivityTaskRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PollForActivityTaskRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskList", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForActivityTaskRequest).TaskList == null) {
						;(m$ as PollForActivityTaskRequest).TaskList = new __goscript_tasklist_pb.TaskList()
					}
					{
						let err = __goscript_tasklist_pb.TaskList.prototype.Unmarshal.call((m$ as PollForActivityTaskRequest).TaskList, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Identity", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PollForActivityTaskRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskListMetadata", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForActivityTaskRequest).TaskListMetadata == null) {
						;(m$ as PollForActivityTaskRequest).TaskListMetadata = new __goscript_tasklist_pb.TaskListMetadata()
					}
					{
						let err = __goscript_tasklist_pb.TaskListMetadata.prototype.Unmarshal.call((m$ as PollForActivityTaskRequest).TaskListMetadata, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PollForActivityTaskRequest).XXX_unrecognized = $.appendSlice((m$ as PollForActivityTaskRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: PollForActivityTaskRequest | $.VarRef<PollForActivityTaskRequest> | null = this;
		xxx_messageInfo_PollForActivityTaskRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.PollForActivityTaskRequest", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: PollForActivityTaskRequest | $.VarRef<PollForActivityTaskRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_PollForActivityTaskRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.PollForActivityTaskRequest", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForActivityTaskRequest).MarshalToSizedBuffer(b) : PollForActivityTaskRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: PollForActivityTaskRequest | $.VarRef<PollForActivityTaskRequest> | null = this;
		xxx_messageInfo_PollForActivityTaskRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.PollForActivityTaskRequest", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskRequest")), src)
	}

	public XXX_Size(): number {
		const m: PollForActivityTaskRequest | $.VarRef<PollForActivityTaskRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForActivityTaskRequest).Size() : PollForActivityTaskRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: PollForActivityTaskRequest | $.VarRef<PollForActivityTaskRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForActivityTaskRequest).Unmarshal(b) : PollForActivityTaskRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.PollForActivityTaskRequest",
		() => new PollForActivityTaskRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetIdentity", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetTaskList", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.TaskList") }], pointerReceiver: true }, { name: "GetTaskListMetadata", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.TaskListMetadata") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		PollForActivityTaskRequest,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "TaskList", key: "TaskList", type: /* @__PURE__ */ $.pointerType("apiv1.TaskList"), tag: "protobuf:\"bytes,2,opt,name=task_list,json=taskList,proto3\" json:\"task_list,omitempty\"" }, { name: "Identity", key: "Identity", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=identity,proto3\" json:\"identity,omitempty\"" }, { name: "TaskListMetadata", key: "TaskListMetadata", type: /* @__PURE__ */ $.pointerType("apiv1.TaskListMetadata"), tag: "protobuf:\"bytes,4,opt,name=task_list_metadata,json=taskListMetadata,proto3\" json:\"task_list_metadata,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class PollForActivityTaskResponse {
	public get TaskToken(): $.Slice<number> {
		return this._fields.TaskToken
	}

	public set TaskToken(value: $.Slice<number>) {
		this._fields.TaskToken = value
	}

	public get WorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		return this._fields.WorkflowExecution
	}

	public set WorkflowExecution(value: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null) {
		this._fields.WorkflowExecution = value
	}

	public get ActivityId(): string {
		return this._fields.ActivityId
	}

	public set ActivityId(value: string) {
		this._fields.ActivityId = value
	}

	public get ActivityType(): __goscript_common_pb.ActivityType | $.VarRef<__goscript_common_pb.ActivityType> | null {
		return this._fields.ActivityType
	}

	public set ActivityType(value: __goscript_common_pb.ActivityType | $.VarRef<__goscript_common_pb.ActivityType> | null) {
		this._fields.ActivityType = value
	}

	public get Input(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.Input
	}

	public set Input(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.Input = value
	}

	public get ScheduledTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.ScheduledTime
	}

	public set ScheduledTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.ScheduledTime = value
	}

	public get StartedTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.StartedTime
	}

	public set StartedTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.StartedTime = value
	}

	public get ScheduleToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.ScheduleToCloseTimeout
	}

	public set ScheduleToCloseTimeout(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.ScheduleToCloseTimeout = value
	}

	public get StartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.StartToCloseTimeout
	}

	public set StartToCloseTimeout(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.StartToCloseTimeout = value
	}

	public get HeartbeatTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.HeartbeatTimeout
	}

	public set HeartbeatTimeout(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.HeartbeatTimeout = value
	}

	public get Attempt(): number {
		return this._fields.Attempt
	}

	public set Attempt(value: number) {
		this._fields.Attempt = value
	}

	public get ScheduledTimeOfThisAttempt(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.ScheduledTimeOfThisAttempt
	}

	public set ScheduledTimeOfThisAttempt(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.ScheduledTimeOfThisAttempt = value
	}

	public get HeartbeatDetails(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.HeartbeatDetails
	}

	public set HeartbeatDetails(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.HeartbeatDetails = value
	}

	public get WorkflowType(): __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null {
		return this._fields.WorkflowType
	}

	public set WorkflowType(value: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null) {
		this._fields.WorkflowType = value
	}

	public get WorkflowDomain(): string {
		return this._fields.WorkflowDomain
	}

	public set WorkflowDomain(value: string) {
		this._fields.WorkflowDomain = value
	}

	public get Header(): __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null {
		return this._fields.Header
	}

	public set Header(value: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null) {
		this._fields.Header = value
	}

	public get AutoConfigHint(): AutoConfigHint | $.VarRef<AutoConfigHint> | null {
		return this._fields.AutoConfigHint
	}

	public set AutoConfigHint(value: AutoConfigHint | $.VarRef<AutoConfigHint> | null) {
		this._fields.AutoConfigHint = value
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
		TaskToken: $.Slice<number>
		WorkflowExecution: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null
		ActivityId: string
		ActivityType: __goscript_common_pb.ActivityType | $.VarRef<__goscript_common_pb.ActivityType> | null
		Input: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		ScheduledTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		StartedTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		ScheduleToCloseTimeout: types.Duration | $.VarRef<types.Duration> | null
		StartToCloseTimeout: types.Duration | $.VarRef<types.Duration> | null
		HeartbeatTimeout: types.Duration | $.VarRef<types.Duration> | null
		Attempt: number
		ScheduledTimeOfThisAttempt: types.Timestamp | $.VarRef<types.Timestamp> | null
		HeartbeatDetails: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		WorkflowType: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null
		WorkflowDomain: string
		Header: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null
		AutoConfigHint: AutoConfigHint | $.VarRef<AutoConfigHint> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{TaskToken?: $.Slice<number>, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, ActivityId?: string, ActivityType?: __goscript_common_pb.ActivityType | $.VarRef<__goscript_common_pb.ActivityType> | null, Input?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, ScheduledTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, StartedTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, ScheduleToCloseTimeout?: types.Duration | $.VarRef<types.Duration> | null, StartToCloseTimeout?: types.Duration | $.VarRef<types.Duration> | null, HeartbeatTimeout?: types.Duration | $.VarRef<types.Duration> | null, Attempt?: number, ScheduledTimeOfThisAttempt?: types.Timestamp | $.VarRef<types.Timestamp> | null, HeartbeatDetails?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, WorkflowType?: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null, WorkflowDomain?: string, Header?: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null, AutoConfigHint?: AutoConfigHint | $.VarRef<AutoConfigHint> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			TaskToken: init?.TaskToken ?? (null! as $.Slice<number>),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			ActivityId: init?.ActivityId ?? ("" as string),
			ActivityType: init?.ActivityType ?? (null! as __goscript_common_pb.ActivityType | $.VarRef<__goscript_common_pb.ActivityType> | null),
			Input: init?.Input ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			ScheduledTime: init?.ScheduledTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			StartedTime: init?.StartedTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			ScheduleToCloseTimeout: init?.ScheduleToCloseTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			StartToCloseTimeout: init?.StartToCloseTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			HeartbeatTimeout: init?.HeartbeatTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			Attempt: init?.Attempt ?? (0 as number),
			ScheduledTimeOfThisAttempt: init?.ScheduledTimeOfThisAttempt ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			HeartbeatDetails: init?.HeartbeatDetails ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			WorkflowType: init?.WorkflowType ?? (null! as __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null),
			WorkflowDomain: init?.WorkflowDomain ?? ("" as string),
			Header: init?.Header ?? (null! as __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null),
			AutoConfigHint: init?.AutoConfigHint ?? (null! as AutoConfigHint | $.VarRef<AutoConfigHint> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PollForActivityTaskResponse {
		return new PollForActivityTaskResponse(this, true)
	}

	public __goscriptAssign(source: PollForActivityTaskResponse): void {
		const target = this._fields
		const values = source._fields
		target.TaskToken = values.TaskToken
		target.WorkflowExecution = values.WorkflowExecution
		target.ActivityId = values.ActivityId
		target.ActivityType = values.ActivityType
		target.Input = values.Input
		target.ScheduledTime = values.ScheduledTime
		target.StartedTime = values.StartedTime
		target.ScheduleToCloseTimeout = values.ScheduleToCloseTimeout
		target.StartToCloseTimeout = values.StartToCloseTimeout
		target.HeartbeatTimeout = values.HeartbeatTimeout
		target.Attempt = values.Attempt
		target.ScheduledTimeOfThisAttempt = values.ScheduledTimeOfThisAttempt
		target.HeartbeatDetails = values.HeartbeatDetails
		target.WorkflowType = values.WorkflowType
		target.WorkflowDomain = values.WorkflowDomain
		target.Header = values.Header
		target.AutoConfigHint = values.AutoConfigHint
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([7])]
	}

	public GetActivityId(): string {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskResponse>(m).ActivityId
		}
		return ""
	}

	public GetActivityType(): __goscript_common_pb.ActivityType | $.VarRef<__goscript_common_pb.ActivityType> | null {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskResponse>(m).ActivityType
		}
		return null
	}

	public GetAttempt(): number {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskResponse>(m).Attempt
		}
		return 0
	}

	public GetAutoConfigHint(): AutoConfigHint | $.VarRef<AutoConfigHint> | null {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskResponse>(m).AutoConfigHint
		}
		return null
	}

	public GetHeader(): __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskResponse>(m).Header
		}
		return null
	}

	public GetHeartbeatDetails(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskResponse>(m).HeartbeatDetails
		}
		return null
	}

	public GetHeartbeatTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskResponse>(m).HeartbeatTimeout
		}
		return null
	}

	public GetInput(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskResponse>(m).Input
		}
		return null
	}

	public GetScheduleToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskResponse>(m).ScheduleToCloseTimeout
		}
		return null
	}

	public GetScheduledTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskResponse>(m).ScheduledTime
		}
		return null
	}

	public GetScheduledTimeOfThisAttempt(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskResponse>(m).ScheduledTimeOfThisAttempt
		}
		return null
	}

	public GetStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskResponse>(m).StartToCloseTimeout
		}
		return null
	}

	public GetStartedTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskResponse>(m).StartedTime
		}
		return null
	}

	public GetTaskToken(): $.Slice<number> {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskResponse>(m).TaskToken
		}
		return null
	}

	public GetWorkflowDomain(): string {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskResponse>(m).WorkflowDomain
		}
		return ""
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskResponse>(m).WorkflowExecution
		}
		return null
	}

	public GetWorkflowType(): __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (m != null) {
			return $.pointerValue<PollForActivityTaskResponse>(m).WorkflowType
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForActivityTaskResponse).Size() : PollForActivityTaskResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple7: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForActivityTaskResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PollForActivityTaskResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForActivityTaskResponse).Size() : PollForActivityTaskResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForActivityTaskResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PollForActivityTaskResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		const m$: PollForActivityTaskResponse = m == null ? $.pointerTarget<PollForActivityTaskResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PollForActivityTaskResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as PollForActivityTaskResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as PollForActivityTaskResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PollForActivityTaskResponse).XXX_unrecognized)
		}
		if ((m$ as PollForActivityTaskResponse).AutoConfigHint != null) {
			{
				let [size, err] = AutoConfigHint.prototype.MarshalToSizedBuffer.call((m$ as PollForActivityTaskResponse).AutoConfigHint, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8a
		}
		if ((m$ as PollForActivityTaskResponse).Header != null) {
			{
				let [size, err] = __goscript_common_pb.Header.prototype.MarshalToSizedBuffer.call((m$ as PollForActivityTaskResponse).Header, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x82
		}
		if ($.stringLen((m$ as PollForActivityTaskResponse).WorkflowDomain) > 0) {
			i = i - ($.stringLen((m$ as PollForActivityTaskResponse).WorkflowDomain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PollForActivityTaskResponse).WorkflowDomain)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as PollForActivityTaskResponse).WorkflowDomain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x7a
		}
		if ((m$ as PollForActivityTaskResponse).WorkflowType != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowType.prototype.MarshalToSizedBuffer.call((m$ as PollForActivityTaskResponse).WorkflowType, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x72
		}
		if ((m$ as PollForActivityTaskResponse).HeartbeatDetails != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as PollForActivityTaskResponse).HeartbeatDetails, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x6a
		}
		if ((m$ as PollForActivityTaskResponse).ScheduledTimeOfThisAttempt != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as PollForActivityTaskResponse).ScheduledTimeOfThisAttempt, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x62
		}
		if ((m$ as PollForActivityTaskResponse).Attempt != 0) {
			i = encodeVarintServiceWorker(dAtA, i, $.uint64((m$ as PollForActivityTaskResponse).Attempt))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x58
		}
		if ((m$ as PollForActivityTaskResponse).HeartbeatTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as PollForActivityTaskResponse).HeartbeatTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x52
		}
		if ((m$ as PollForActivityTaskResponse).StartToCloseTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as PollForActivityTaskResponse).StartToCloseTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x4a
		}
		if ((m$ as PollForActivityTaskResponse).ScheduleToCloseTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as PollForActivityTaskResponse).ScheduleToCloseTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x42
		}
		if ((m$ as PollForActivityTaskResponse).StartedTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as PollForActivityTaskResponse).StartedTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x3a
		}
		if ((m$ as PollForActivityTaskResponse).ScheduledTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as PollForActivityTaskResponse).ScheduledTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		if ((m$ as PollForActivityTaskResponse).Input != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as PollForActivityTaskResponse).Input, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as PollForActivityTaskResponse).ActivityType != null) {
			{
				let [size, err] = __goscript_common_pb.ActivityType.prototype.MarshalToSizedBuffer.call((m$ as PollForActivityTaskResponse).ActivityType, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as PollForActivityTaskResponse).ActivityId) > 0) {
			i = i - ($.stringLen((m$ as PollForActivityTaskResponse).ActivityId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PollForActivityTaskResponse).ActivityId)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as PollForActivityTaskResponse).ActivityId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as PollForActivityTaskResponse).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as PollForActivityTaskResponse).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.sliceLen((m$ as PollForActivityTaskResponse).TaskToken) > 0) {
			i = i - ($.sliceLen((m$ as PollForActivityTaskResponse).TaskToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PollForActivityTaskResponse).TaskToken)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.sliceLen((m$ as PollForActivityTaskResponse).TaskToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		$.assignStruct($.pointerValue<PollForActivityTaskResponse>(m), $.markAsStructValue(new PollForActivityTaskResponse()))
	}

	public Size(): number {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		let n: number = 0
		const m$: PollForActivityTaskResponse = m == null ? $.pointerTarget<PollForActivityTaskResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PollForActivityTaskResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.sliceLen((m$ as PollForActivityTaskResponse).TaskToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForActivityTaskResponse).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as PollForActivityTaskResponse).WorkflowExecution)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as PollForActivityTaskResponse).ActivityId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForActivityTaskResponse).ActivityType != null) {
			l = __goscript_common_pb.ActivityType.prototype.Size.call((m$ as PollForActivityTaskResponse).ActivityType)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForActivityTaskResponse).Input != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as PollForActivityTaskResponse).Input)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForActivityTaskResponse).ScheduledTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as PollForActivityTaskResponse).ScheduledTime)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForActivityTaskResponse).StartedTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as PollForActivityTaskResponse).StartedTime)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForActivityTaskResponse).ScheduleToCloseTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as PollForActivityTaskResponse).ScheduleToCloseTimeout)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForActivityTaskResponse).StartToCloseTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as PollForActivityTaskResponse).StartToCloseTimeout)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForActivityTaskResponse).HeartbeatTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as PollForActivityTaskResponse).HeartbeatTimeout)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForActivityTaskResponse).Attempt != 0) {
			n = n + (1 + sovServiceWorker($.uint64((m$ as PollForActivityTaskResponse).Attempt)))
		}
		if ((m$ as PollForActivityTaskResponse).ScheduledTimeOfThisAttempt != null) {
			l = types.Timestamp.prototype.Size.call((m$ as PollForActivityTaskResponse).ScheduledTimeOfThisAttempt)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForActivityTaskResponse).HeartbeatDetails != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as PollForActivityTaskResponse).HeartbeatDetails)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForActivityTaskResponse).WorkflowType != null) {
			l = __goscript_common_pb.WorkflowType.prototype.Size.call((m$ as PollForActivityTaskResponse).WorkflowType)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as PollForActivityTaskResponse).WorkflowDomain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForActivityTaskResponse).Header != null) {
			l = __goscript_common_pb.Header.prototype.Size.call((m$ as PollForActivityTaskResponse).Header)
			n = n + ((2 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForActivityTaskResponse).AutoConfigHint != null) {
			l = AutoConfigHint.prototype.Size.call((m$ as PollForActivityTaskResponse).AutoConfigHint)
			n = n + ((2 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as PollForActivityTaskResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as PollForActivityTaskResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.PollForActivityTaskResponse", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		const m$: PollForActivityTaskResponse = m == null ? $.pointerTarget<PollForActivityTaskResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PollForActivityTaskResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow8 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
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
				return fmt.Errorf("proto: PollForActivityTaskResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: PollForActivityTaskResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PollForActivityTaskResponse).TaskToken = $.appendSlice($.goSlice((m$ as PollForActivityTaskResponse).TaskToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as PollForActivityTaskResponse).TaskToken == null) {
						;(m$ as PollForActivityTaskResponse).TaskToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowExecution", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForActivityTaskResponse).WorkflowExecution == null) {
						;(m$ as PollForActivityTaskResponse).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as PollForActivityTaskResponse).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActivityId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PollForActivityTaskResponse).ActivityId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActivityType", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForActivityTaskResponse).ActivityType == null) {
						;(m$ as PollForActivityTaskResponse).ActivityType = new __goscript_common_pb.ActivityType()
					}
					{
						let err = __goscript_common_pb.ActivityType.prototype.Unmarshal.call((m$ as PollForActivityTaskResponse).ActivityType, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Input", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForActivityTaskResponse).Input == null) {
						;(m$ as PollForActivityTaskResponse).Input = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as PollForActivityTaskResponse).Input, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduledTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForActivityTaskResponse).ScheduledTime == null) {
						;(m$ as PollForActivityTaskResponse).ScheduledTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as PollForActivityTaskResponse).ScheduledTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 7:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartedTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForActivityTaskResponse).StartedTime == null) {
						;(m$ as PollForActivityTaskResponse).StartedTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as PollForActivityTaskResponse).StartedTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 8:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduleToCloseTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForActivityTaskResponse).ScheduleToCloseTimeout == null) {
						;(m$ as PollForActivityTaskResponse).ScheduleToCloseTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as PollForActivityTaskResponse).ScheduleToCloseTimeout, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 9:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartToCloseTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForActivityTaskResponse).StartToCloseTimeout == null) {
						;(m$ as PollForActivityTaskResponse).StartToCloseTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as PollForActivityTaskResponse).StartToCloseTimeout, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 10:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field HeartbeatTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForActivityTaskResponse).HeartbeatTimeout == null) {
						;(m$ as PollForActivityTaskResponse).HeartbeatTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as PollForActivityTaskResponse).HeartbeatTimeout, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 11:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Attempt", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as PollForActivityTaskResponse).Attempt = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++;
						;(m$ as PollForActivityTaskResponse).Attempt = (m$ as PollForActivityTaskResponse).Attempt | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 12:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduledTimeOfThisAttempt", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForActivityTaskResponse).ScheduledTimeOfThisAttempt == null) {
						;(m$ as PollForActivityTaskResponse).ScheduledTimeOfThisAttempt = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as PollForActivityTaskResponse).ScheduledTimeOfThisAttempt, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 13:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field HeartbeatDetails", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForActivityTaskResponse).HeartbeatDetails == null) {
						;(m$ as PollForActivityTaskResponse).HeartbeatDetails = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as PollForActivityTaskResponse).HeartbeatDetails, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 14:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowType", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForActivityTaskResponse).WorkflowType == null) {
						;(m$ as PollForActivityTaskResponse).WorkflowType = new __goscript_common_pb.WorkflowType()
					}
					{
						let err = __goscript_common_pb.WorkflowType.prototype.Unmarshal.call((m$ as PollForActivityTaskResponse).WorkflowType, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 15:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowDomain", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PollForActivityTaskResponse).WorkflowDomain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 16:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Header", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForActivityTaskResponse).Header == null) {
						;(m$ as PollForActivityTaskResponse).Header = new __goscript_common_pb.Header()
					}
					{
						let err = __goscript_common_pb.Header.prototype.Unmarshal.call((m$ as PollForActivityTaskResponse).Header, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 17:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field AutoConfigHint", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PollForActivityTaskResponse).AutoConfigHint == null) {
						;(m$ as PollForActivityTaskResponse).AutoConfigHint = new AutoConfigHint()
					}
					{
						let err = AutoConfigHint.prototype.Unmarshal.call((m$ as PollForActivityTaskResponse).AutoConfigHint, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PollForActivityTaskResponse).XXX_unrecognized = $.appendSlice((m$ as PollForActivityTaskResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		xxx_messageInfo_PollForActivityTaskResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.PollForActivityTaskResponse", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_PollForActivityTaskResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.PollForActivityTaskResponse", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForActivityTaskResponse).MarshalToSizedBuffer(b) : PollForActivityTaskResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		xxx_messageInfo_PollForActivityTaskResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.PollForActivityTaskResponse", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskResponse")), src)
	}

	public XXX_Size(): number {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForActivityTaskResponse).Size() : PollForActivityTaskResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: PollForActivityTaskResponse | $.VarRef<PollForActivityTaskResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PollForActivityTaskResponse).Unmarshal(b) : PollForActivityTaskResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.PollForActivityTaskResponse",
		() => new PollForActivityTaskResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActivityId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetActivityType", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ActivityType") }], pointerReceiver: true }, { name: "GetAttempt", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GetAutoConfigHint", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.AutoConfigHint") }], pointerReceiver: true }, { name: "GetHeader", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Header") }], pointerReceiver: true }, { name: "GetHeartbeatDetails", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetHeartbeatTimeout", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetInput", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetScheduleToCloseTimeout", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetScheduledTime", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Timestamp") }], pointerReceiver: true }, { name: "GetScheduledTimeOfThisAttempt", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Timestamp") }], pointerReceiver: true }, { name: "GetStartToCloseTimeout", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetStartedTime", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Timestamp") }], pointerReceiver: true }, { name: "GetTaskToken", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "GetWorkflowDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetWorkflowExecution", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution") }], pointerReceiver: true }, { name: "GetWorkflowType", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowType") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		PollForActivityTaskResponse,
		() => [{ name: "TaskToken", key: "TaskToken", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,1,opt,name=task_token,json=taskToken,proto3\" json:\"task_token,omitempty\"" }, { name: "WorkflowExecution", key: "WorkflowExecution", type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }, { name: "ActivityId", key: "ActivityId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=activity_id,json=activityId,proto3\" json:\"activity_id,omitempty\"" }, { name: "ActivityType", key: "ActivityType", type: /* @__PURE__ */ $.pointerType("apiv1.ActivityType"), tag: "protobuf:\"bytes,4,opt,name=activity_type,json=activityType,proto3\" json:\"activity_type,omitempty\"" }, { name: "Input", key: "Input", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,5,opt,name=input,proto3\" json:\"input,omitempty\"" }, { name: "ScheduledTime", key: "ScheduledTime", type: /* @__PURE__ */ $.pointerType("types.Timestamp"), tag: "protobuf:\"bytes,6,opt,name=scheduled_time,json=scheduledTime,proto3\" json:\"scheduled_time,omitempty\"" }, { name: "StartedTime", key: "StartedTime", type: /* @__PURE__ */ $.pointerType("types.Timestamp"), tag: "protobuf:\"bytes,7,opt,name=started_time,json=startedTime,proto3\" json:\"started_time,omitempty\"" }, { name: "ScheduleToCloseTimeout", key: "ScheduleToCloseTimeout", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,8,opt,name=schedule_to_close_timeout,json=scheduleToCloseTimeout,proto3\" json:\"schedule_to_close_timeout,omitempty\"" }, { name: "StartToCloseTimeout", key: "StartToCloseTimeout", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,9,opt,name=start_to_close_timeout,json=startToCloseTimeout,proto3\" json:\"start_to_close_timeout,omitempty\"" }, { name: "HeartbeatTimeout", key: "HeartbeatTimeout", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,10,opt,name=heartbeat_timeout,json=heartbeatTimeout,proto3\" json:\"heartbeat_timeout,omitempty\"" }, { name: "Attempt", key: "Attempt", type: /* @__PURE__ */ $.basicType("int32"), tag: "protobuf:\"varint,11,opt,name=attempt,proto3\" json:\"attempt,omitempty\"" }, { name: "ScheduledTimeOfThisAttempt", key: "ScheduledTimeOfThisAttempt", type: /* @__PURE__ */ $.pointerType("types.Timestamp"), tag: "protobuf:\"bytes,12,opt,name=scheduled_time_of_this_attempt,json=scheduledTimeOfThisAttempt,proto3\" json:\"scheduled_time_of_this_attempt,omitempty\"" }, { name: "HeartbeatDetails", key: "HeartbeatDetails", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,13,opt,name=heartbeat_details,json=heartbeatDetails,proto3\" json:\"heartbeat_details,omitempty\"" }, { name: "WorkflowType", key: "WorkflowType", type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowType"), tag: "protobuf:\"bytes,14,opt,name=workflow_type,json=workflowType,proto3\" json:\"workflow_type,omitempty\"" }, { name: "WorkflowDomain", key: "WorkflowDomain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,15,opt,name=workflow_domain,json=workflowDomain,proto3\" json:\"workflow_domain,omitempty\"" }, { name: "Header", key: "Header", type: /* @__PURE__ */ $.pointerType("apiv1.Header"), tag: "protobuf:\"bytes,16,opt,name=header,proto3\" json:\"header,omitempty\"" }, { name: "AutoConfigHint", key: "AutoConfigHint", type: /* @__PURE__ */ $.pointerType("apiv1.AutoConfigHint"), tag: "protobuf:\"bytes,17,opt,name=auto_config_hint,json=autoConfigHint,proto3\" json:\"auto_config_hint,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondActivityTaskCompletedRequest {
	public get TaskToken(): $.Slice<number> {
		return this._fields.TaskToken
	}

	public set TaskToken(value: $.Slice<number>) {
		this._fields.TaskToken = value
	}

	public get Result(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.Result
	}

	public set Result(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.Result = value
	}

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
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
		TaskToken: $.Slice<number>
		Result: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		Identity: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{TaskToken?: $.Slice<number>, Result?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, Identity?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			TaskToken: init?.TaskToken ?? (null! as $.Slice<number>),
			Result: init?.Result ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			Identity: init?.Identity ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RespondActivityTaskCompletedRequest {
		return new RespondActivityTaskCompletedRequest(this, true)
	}

	public __goscriptAssign(source: RespondActivityTaskCompletedRequest): void {
		const target = this._fields
		const values = source._fields
		target.TaskToken = values.TaskToken
		target.Result = values.Result
		target.Identity = values.Identity
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([8])]
	}

	public GetIdentity(): string {
		const m: RespondActivityTaskCompletedRequest | $.VarRef<RespondActivityTaskCompletedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskCompletedRequest>(m).Identity
		}
		return ""
	}

	public GetResult(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: RespondActivityTaskCompletedRequest | $.VarRef<RespondActivityTaskCompletedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskCompletedRequest>(m).Result
		}
		return null
	}

	public GetTaskToken(): $.Slice<number> {
		const m: RespondActivityTaskCompletedRequest | $.VarRef<RespondActivityTaskCompletedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskCompletedRequest>(m).TaskToken
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskCompletedRequest | $.VarRef<RespondActivityTaskCompletedRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedRequest).Size() : RespondActivityTaskCompletedRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple8: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskCompletedRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskCompletedRequest | $.VarRef<RespondActivityTaskCompletedRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedRequest).Size() : RespondActivityTaskCompletedRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskCompletedRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskCompletedRequest | $.VarRef<RespondActivityTaskCompletedRequest> | null = this;
		const m$: RespondActivityTaskCompletedRequest = m == null ? $.pointerTarget<RespondActivityTaskCompletedRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCompletedRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskCompletedRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondActivityTaskCompletedRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCompletedRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as RespondActivityTaskCompletedRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as RespondActivityTaskCompletedRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCompletedRequest).Identity)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RespondActivityTaskCompletedRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as RespondActivityTaskCompletedRequest).Result != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as RespondActivityTaskCompletedRequest).Result, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.sliceLen((m$ as RespondActivityTaskCompletedRequest).TaskToken) > 0) {
			i = i - ($.sliceLen((m$ as RespondActivityTaskCompletedRequest).TaskToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCompletedRequest).TaskToken)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.sliceLen((m$ as RespondActivityTaskCompletedRequest).TaskToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondActivityTaskCompletedRequest | $.VarRef<RespondActivityTaskCompletedRequest> | null = this;
		$.assignStruct($.pointerValue<RespondActivityTaskCompletedRequest>(m), $.markAsStructValue(new RespondActivityTaskCompletedRequest()))
	}

	public Size(): number {
		const m: RespondActivityTaskCompletedRequest | $.VarRef<RespondActivityTaskCompletedRequest> | null = this;
		let n: number = 0
		const m$: RespondActivityTaskCompletedRequest = m == null ? $.pointerTarget<RespondActivityTaskCompletedRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCompletedRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.sliceLen((m$ as RespondActivityTaskCompletedRequest).TaskToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondActivityTaskCompletedRequest).Result != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as RespondActivityTaskCompletedRequest).Result)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as RespondActivityTaskCompletedRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondActivityTaskCompletedRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondActivityTaskCompletedRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondActivityTaskCompletedRequest | $.VarRef<RespondActivityTaskCompletedRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondActivityTaskCompletedRequest | $.VarRef<RespondActivityTaskCompletedRequest> | null = this;
		const m$: RespondActivityTaskCompletedRequest = m == null ? $.pointerTarget<RespondActivityTaskCompletedRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCompletedRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow9 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
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
				return fmt.Errorf("proto: RespondActivityTaskCompletedRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondActivityTaskCompletedRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCompletedRequest).TaskToken = $.appendSlice($.goSlice((m$ as RespondActivityTaskCompletedRequest).TaskToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as RespondActivityTaskCompletedRequest).TaskToken == null) {
						;(m$ as RespondActivityTaskCompletedRequest).TaskToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Result", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondActivityTaskCompletedRequest).Result == null) {
						;(m$ as RespondActivityTaskCompletedRequest).Result = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as RespondActivityTaskCompletedRequest).Result, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Identity", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCompletedRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCompletedRequest).XXX_unrecognized = $.appendSlice((m$ as RespondActivityTaskCompletedRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondActivityTaskCompletedRequest | $.VarRef<RespondActivityTaskCompletedRequest> | null = this;
		xxx_messageInfo_RespondActivityTaskCompletedRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskCompletedRequest | $.VarRef<RespondActivityTaskCompletedRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondActivityTaskCompletedRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedRequest).MarshalToSizedBuffer(b) : RespondActivityTaskCompletedRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondActivityTaskCompletedRequest | $.VarRef<RespondActivityTaskCompletedRequest> | null = this;
		xxx_messageInfo_RespondActivityTaskCompletedRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedRequest")), src)
	}

	public XXX_Size(): number {
		const m: RespondActivityTaskCompletedRequest | $.VarRef<RespondActivityTaskCompletedRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedRequest).Size() : RespondActivityTaskCompletedRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondActivityTaskCompletedRequest | $.VarRef<RespondActivityTaskCompletedRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedRequest).Unmarshal(b) : RespondActivityTaskCompletedRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondActivityTaskCompletedRequest",
		() => new RespondActivityTaskCompletedRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetIdentity", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetResult", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetTaskToken", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondActivityTaskCompletedRequest,
		() => [{ name: "TaskToken", key: "TaskToken", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,1,opt,name=task_token,json=taskToken,proto3\" json:\"task_token,omitempty\"" }, { name: "Result", key: "Result", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,2,opt,name=result,proto3\" json:\"result,omitempty\"" }, { name: "Identity", key: "Identity", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=identity,proto3\" json:\"identity,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondActivityTaskCompletedResponse {
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

	public clone(): RespondActivityTaskCompletedResponse {
		return new RespondActivityTaskCompletedResponse(this, true)
	}

	public __goscriptAssign(source: RespondActivityTaskCompletedResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([9])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskCompletedResponse | $.VarRef<RespondActivityTaskCompletedResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedResponse).Size() : RespondActivityTaskCompletedResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple9: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskCompletedResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskCompletedResponse | $.VarRef<RespondActivityTaskCompletedResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedResponse).Size() : RespondActivityTaskCompletedResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskCompletedResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskCompletedResponse | $.VarRef<RespondActivityTaskCompletedResponse> | null = this;
		const m$: RespondActivityTaskCompletedResponse = m == null ? $.pointerTarget<RespondActivityTaskCompletedResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCompletedResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskCompletedResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondActivityTaskCompletedResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCompletedResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondActivityTaskCompletedResponse | $.VarRef<RespondActivityTaskCompletedResponse> | null = this;
		$.assignStruct($.pointerValue<RespondActivityTaskCompletedResponse>(m), new RespondActivityTaskCompletedResponse(undefined, true))
	}

	public Size(): number {
		const m: RespondActivityTaskCompletedResponse | $.VarRef<RespondActivityTaskCompletedResponse> | null = this;
		let n: number = 0
		const m$: RespondActivityTaskCompletedResponse = m == null ? $.pointerTarget<RespondActivityTaskCompletedResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCompletedResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskCompletedResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondActivityTaskCompletedResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondActivityTaskCompletedResponse | $.VarRef<RespondActivityTaskCompletedResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondActivityTaskCompletedResponse | $.VarRef<RespondActivityTaskCompletedResponse> | null = this;
		const m$: RespondActivityTaskCompletedResponse = m == null ? $.pointerTarget<RespondActivityTaskCompletedResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCompletedResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow10 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: RespondActivityTaskCompletedResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondActivityTaskCompletedResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCompletedResponse).XXX_unrecognized = $.appendSlice((m$ as RespondActivityTaskCompletedResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondActivityTaskCompletedResponse | $.VarRef<RespondActivityTaskCompletedResponse> | null = this;
		xxx_messageInfo_RespondActivityTaskCompletedResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskCompletedResponse | $.VarRef<RespondActivityTaskCompletedResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondActivityTaskCompletedResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedResponse).MarshalToSizedBuffer(b) : RespondActivityTaskCompletedResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondActivityTaskCompletedResponse | $.VarRef<RespondActivityTaskCompletedResponse> | null = this;
		xxx_messageInfo_RespondActivityTaskCompletedResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedResponse")), src)
	}

	public XXX_Size(): number {
		const m: RespondActivityTaskCompletedResponse | $.VarRef<RespondActivityTaskCompletedResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedResponse).Size() : RespondActivityTaskCompletedResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondActivityTaskCompletedResponse | $.VarRef<RespondActivityTaskCompletedResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedResponse).Unmarshal(b) : RespondActivityTaskCompletedResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondActivityTaskCompletedResponse",
		() => new RespondActivityTaskCompletedResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondActivityTaskCompletedResponse,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondActivityTaskCompletedByIDRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get WorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		return this._fields.WorkflowExecution
	}

	public set WorkflowExecution(value: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null) {
		this._fields.WorkflowExecution = value
	}

	public get ActivityId(): string {
		return this._fields.ActivityId
	}

	public set ActivityId(value: string) {
		this._fields.ActivityId = value
	}

	public get Result(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.Result
	}

	public set Result(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.Result = value
	}

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
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
		WorkflowExecution: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null
		ActivityId: string
		Result: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		Identity: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, ActivityId?: string, Result?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, Identity?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			ActivityId: init?.ActivityId ?? ("" as string),
			Result: init?.Result ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			Identity: init?.Identity ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RespondActivityTaskCompletedByIDRequest {
		return new RespondActivityTaskCompletedByIDRequest(this, true)
	}

	public __goscriptAssign(source: RespondActivityTaskCompletedByIDRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowExecution = values.WorkflowExecution
		target.ActivityId = values.ActivityId
		target.Result = values.Result
		target.Identity = values.Identity
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([10])]
	}

	public GetActivityId(): string {
		const m: RespondActivityTaskCompletedByIDRequest | $.VarRef<RespondActivityTaskCompletedByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskCompletedByIDRequest>(m).ActivityId
		}
		return ""
	}

	public GetDomain(): string {
		const m: RespondActivityTaskCompletedByIDRequest | $.VarRef<RespondActivityTaskCompletedByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskCompletedByIDRequest>(m).Domain
		}
		return ""
	}

	public GetIdentity(): string {
		const m: RespondActivityTaskCompletedByIDRequest | $.VarRef<RespondActivityTaskCompletedByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskCompletedByIDRequest>(m).Identity
		}
		return ""
	}

	public GetResult(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: RespondActivityTaskCompletedByIDRequest | $.VarRef<RespondActivityTaskCompletedByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskCompletedByIDRequest>(m).Result
		}
		return null
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: RespondActivityTaskCompletedByIDRequest | $.VarRef<RespondActivityTaskCompletedByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskCompletedByIDRequest>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskCompletedByIDRequest | $.VarRef<RespondActivityTaskCompletedByIDRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedByIDRequest).Size() : RespondActivityTaskCompletedByIDRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple10: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedByIDRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskCompletedByIDRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple10[0]
		err = __goscriptTuple10[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskCompletedByIDRequest | $.VarRef<RespondActivityTaskCompletedByIDRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedByIDRequest).Size() : RespondActivityTaskCompletedByIDRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedByIDRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskCompletedByIDRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskCompletedByIDRequest | $.VarRef<RespondActivityTaskCompletedByIDRequest> | null = this;
		const m$: RespondActivityTaskCompletedByIDRequest = m == null ? $.pointerTarget<RespondActivityTaskCompletedByIDRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCompletedByIDRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskCompletedByIDRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondActivityTaskCompletedByIDRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCompletedByIDRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as RespondActivityTaskCompletedByIDRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as RespondActivityTaskCompletedByIDRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCompletedByIDRequest).Identity)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RespondActivityTaskCompletedByIDRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as RespondActivityTaskCompletedByIDRequest).Result != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as RespondActivityTaskCompletedByIDRequest).Result, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as RespondActivityTaskCompletedByIDRequest).ActivityId) > 0) {
			i = i - ($.stringLen((m$ as RespondActivityTaskCompletedByIDRequest).ActivityId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCompletedByIDRequest).ActivityId)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RespondActivityTaskCompletedByIDRequest).ActivityId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as RespondActivityTaskCompletedByIDRequest).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as RespondActivityTaskCompletedByIDRequest).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as RespondActivityTaskCompletedByIDRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as RespondActivityTaskCompletedByIDRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCompletedByIDRequest).Domain)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RespondActivityTaskCompletedByIDRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondActivityTaskCompletedByIDRequest | $.VarRef<RespondActivityTaskCompletedByIDRequest> | null = this;
		$.assignStruct($.pointerValue<RespondActivityTaskCompletedByIDRequest>(m), $.markAsStructValue(new RespondActivityTaskCompletedByIDRequest()))
	}

	public Size(): number {
		const m: RespondActivityTaskCompletedByIDRequest | $.VarRef<RespondActivityTaskCompletedByIDRequest> | null = this;
		let n: number = 0
		const m$: RespondActivityTaskCompletedByIDRequest = m == null ? $.pointerTarget<RespondActivityTaskCompletedByIDRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCompletedByIDRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as RespondActivityTaskCompletedByIDRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondActivityTaskCompletedByIDRequest).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as RespondActivityTaskCompletedByIDRequest).WorkflowExecution)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as RespondActivityTaskCompletedByIDRequest).ActivityId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondActivityTaskCompletedByIDRequest).Result != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as RespondActivityTaskCompletedByIDRequest).Result)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as RespondActivityTaskCompletedByIDRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondActivityTaskCompletedByIDRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondActivityTaskCompletedByIDRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondActivityTaskCompletedByIDRequest | $.VarRef<RespondActivityTaskCompletedByIDRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCompletedByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondActivityTaskCompletedByIDRequest | $.VarRef<RespondActivityTaskCompletedByIDRequest> | null = this;
		const m$: RespondActivityTaskCompletedByIDRequest = m == null ? $.pointerTarget<RespondActivityTaskCompletedByIDRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCompletedByIDRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow11 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
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
				return fmt.Errorf("proto: RespondActivityTaskCompletedByIDRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondActivityTaskCompletedByIDRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCompletedByIDRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowExecution", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondActivityTaskCompletedByIDRequest).WorkflowExecution == null) {
						;(m$ as RespondActivityTaskCompletedByIDRequest).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as RespondActivityTaskCompletedByIDRequest).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActivityId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCompletedByIDRequest).ActivityId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Result", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondActivityTaskCompletedByIDRequest).Result == null) {
						;(m$ as RespondActivityTaskCompletedByIDRequest).Result = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as RespondActivityTaskCompletedByIDRequest).Result, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Identity", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCompletedByIDRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCompletedByIDRequest).XXX_unrecognized = $.appendSlice((m$ as RespondActivityTaskCompletedByIDRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondActivityTaskCompletedByIDRequest | $.VarRef<RespondActivityTaskCompletedByIDRequest> | null = this;
		xxx_messageInfo_RespondActivityTaskCompletedByIDRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCompletedByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskCompletedByIDRequest | $.VarRef<RespondActivityTaskCompletedByIDRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondActivityTaskCompletedByIDRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCompletedByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedByIDRequest).MarshalToSizedBuffer(b) : RespondActivityTaskCompletedByIDRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondActivityTaskCompletedByIDRequest | $.VarRef<RespondActivityTaskCompletedByIDRequest> | null = this;
		xxx_messageInfo_RespondActivityTaskCompletedByIDRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCompletedByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDRequest")), src)
	}

	public XXX_Size(): number {
		const m: RespondActivityTaskCompletedByIDRequest | $.VarRef<RespondActivityTaskCompletedByIDRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedByIDRequest).Size() : RespondActivityTaskCompletedByIDRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondActivityTaskCompletedByIDRequest | $.VarRef<RespondActivityTaskCompletedByIDRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedByIDRequest).Unmarshal(b) : RespondActivityTaskCompletedByIDRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondActivityTaskCompletedByIDRequest",
		() => new RespondActivityTaskCompletedByIDRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActivityId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetIdentity", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetResult", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetWorkflowExecution", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondActivityTaskCompletedByIDRequest,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "WorkflowExecution", key: "WorkflowExecution", type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }, { name: "ActivityId", key: "ActivityId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=activity_id,json=activityId,proto3\" json:\"activity_id,omitempty\"" }, { name: "Result", key: "Result", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,4,opt,name=result,proto3\" json:\"result,omitempty\"" }, { name: "Identity", key: "Identity", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,5,opt,name=identity,proto3\" json:\"identity,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondActivityTaskCompletedByIDResponse {
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

	public clone(): RespondActivityTaskCompletedByIDResponse {
		return new RespondActivityTaskCompletedByIDResponse(this, true)
	}

	public __goscriptAssign(source: RespondActivityTaskCompletedByIDResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([11])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskCompletedByIDResponse | $.VarRef<RespondActivityTaskCompletedByIDResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedByIDResponse).Size() : RespondActivityTaskCompletedByIDResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple11: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedByIDResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskCompletedByIDResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple11[0]
		err = __goscriptTuple11[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskCompletedByIDResponse | $.VarRef<RespondActivityTaskCompletedByIDResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedByIDResponse).Size() : RespondActivityTaskCompletedByIDResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedByIDResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskCompletedByIDResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskCompletedByIDResponse | $.VarRef<RespondActivityTaskCompletedByIDResponse> | null = this;
		const m$: RespondActivityTaskCompletedByIDResponse = m == null ? $.pointerTarget<RespondActivityTaskCompletedByIDResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCompletedByIDResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskCompletedByIDResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondActivityTaskCompletedByIDResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCompletedByIDResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondActivityTaskCompletedByIDResponse | $.VarRef<RespondActivityTaskCompletedByIDResponse> | null = this;
		$.assignStruct($.pointerValue<RespondActivityTaskCompletedByIDResponse>(m), new RespondActivityTaskCompletedByIDResponse(undefined, true))
	}

	public Size(): number {
		const m: RespondActivityTaskCompletedByIDResponse | $.VarRef<RespondActivityTaskCompletedByIDResponse> | null = this;
		let n: number = 0
		const m$: RespondActivityTaskCompletedByIDResponse = m == null ? $.pointerTarget<RespondActivityTaskCompletedByIDResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCompletedByIDResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskCompletedByIDResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondActivityTaskCompletedByIDResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondActivityTaskCompletedByIDResponse | $.VarRef<RespondActivityTaskCompletedByIDResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCompletedByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondActivityTaskCompletedByIDResponse | $.VarRef<RespondActivityTaskCompletedByIDResponse> | null = this;
		const m$: RespondActivityTaskCompletedByIDResponse = m == null ? $.pointerTarget<RespondActivityTaskCompletedByIDResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCompletedByIDResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow12 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
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
				return fmt.Errorf("proto: RespondActivityTaskCompletedByIDResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondActivityTaskCompletedByIDResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCompletedByIDResponse).XXX_unrecognized = $.appendSlice((m$ as RespondActivityTaskCompletedByIDResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondActivityTaskCompletedByIDResponse | $.VarRef<RespondActivityTaskCompletedByIDResponse> | null = this;
		xxx_messageInfo_RespondActivityTaskCompletedByIDResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCompletedByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskCompletedByIDResponse | $.VarRef<RespondActivityTaskCompletedByIDResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondActivityTaskCompletedByIDResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCompletedByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedByIDResponse).MarshalToSizedBuffer(b) : RespondActivityTaskCompletedByIDResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondActivityTaskCompletedByIDResponse | $.VarRef<RespondActivityTaskCompletedByIDResponse> | null = this;
		xxx_messageInfo_RespondActivityTaskCompletedByIDResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCompletedByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDResponse")), src)
	}

	public XXX_Size(): number {
		const m: RespondActivityTaskCompletedByIDResponse | $.VarRef<RespondActivityTaskCompletedByIDResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedByIDResponse).Size() : RespondActivityTaskCompletedByIDResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondActivityTaskCompletedByIDResponse | $.VarRef<RespondActivityTaskCompletedByIDResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCompletedByIDResponse).Unmarshal(b) : RespondActivityTaskCompletedByIDResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondActivityTaskCompletedByIDResponse",
		() => new RespondActivityTaskCompletedByIDResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondActivityTaskCompletedByIDResponse,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondActivityTaskFailedRequest {
	public get TaskToken(): $.Slice<number> {
		return this._fields.TaskToken
	}

	public set TaskToken(value: $.Slice<number>) {
		this._fields.TaskToken = value
	}

	public get Failure(): __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null {
		return this._fields.Failure
	}

	public set Failure(value: __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null) {
		this._fields.Failure = value
	}

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
	}

	public get HeartbeatDetails(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.HeartbeatDetails
	}

	public set HeartbeatDetails(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.HeartbeatDetails = value
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
		TaskToken: $.Slice<number>
		Failure: __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null
		Identity: string
		HeartbeatDetails: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{TaskToken?: $.Slice<number>, Failure?: __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null, Identity?: string, HeartbeatDetails?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			TaskToken: init?.TaskToken ?? (null! as $.Slice<number>),
			Failure: init?.Failure ?? (null! as __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null),
			Identity: init?.Identity ?? ("" as string),
			HeartbeatDetails: init?.HeartbeatDetails ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RespondActivityTaskFailedRequest {
		return new RespondActivityTaskFailedRequest(this, true)
	}

	public __goscriptAssign(source: RespondActivityTaskFailedRequest): void {
		const target = this._fields
		const values = source._fields
		target.TaskToken = values.TaskToken
		target.Failure = values.Failure
		target.Identity = values.Identity
		target.HeartbeatDetails = values.HeartbeatDetails
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([12])]
	}

	public GetFailure(): __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null {
		const m: RespondActivityTaskFailedRequest | $.VarRef<RespondActivityTaskFailedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskFailedRequest>(m).Failure
		}
		return null
	}

	public GetHeartbeatDetails(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: RespondActivityTaskFailedRequest | $.VarRef<RespondActivityTaskFailedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskFailedRequest>(m).HeartbeatDetails
		}
		return null
	}

	public GetIdentity(): string {
		const m: RespondActivityTaskFailedRequest | $.VarRef<RespondActivityTaskFailedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskFailedRequest>(m).Identity
		}
		return ""
	}

	public GetTaskToken(): $.Slice<number> {
		const m: RespondActivityTaskFailedRequest | $.VarRef<RespondActivityTaskFailedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskFailedRequest>(m).TaskToken
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskFailedRequest | $.VarRef<RespondActivityTaskFailedRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedRequest).Size() : RespondActivityTaskFailedRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple12: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskFailedRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskFailedRequest | $.VarRef<RespondActivityTaskFailedRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedRequest).Size() : RespondActivityTaskFailedRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskFailedRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskFailedRequest | $.VarRef<RespondActivityTaskFailedRequest> | null = this;
		const m$: RespondActivityTaskFailedRequest = m == null ? $.pointerTarget<RespondActivityTaskFailedRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskFailedRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskFailedRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondActivityTaskFailedRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskFailedRequest).XXX_unrecognized)
		}
		if ((m$ as RespondActivityTaskFailedRequest).HeartbeatDetails != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as RespondActivityTaskFailedRequest).HeartbeatDetails, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as RespondActivityTaskFailedRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as RespondActivityTaskFailedRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskFailedRequest).Identity)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RespondActivityTaskFailedRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as RespondActivityTaskFailedRequest).Failure != null) {
			{
				let [size, err] = __goscript_common_pb.Failure.prototype.MarshalToSizedBuffer.call((m$ as RespondActivityTaskFailedRequest).Failure, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.sliceLen((m$ as RespondActivityTaskFailedRequest).TaskToken) > 0) {
			i = i - ($.sliceLen((m$ as RespondActivityTaskFailedRequest).TaskToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskFailedRequest).TaskToken)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.sliceLen((m$ as RespondActivityTaskFailedRequest).TaskToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondActivityTaskFailedRequest | $.VarRef<RespondActivityTaskFailedRequest> | null = this;
		$.assignStruct($.pointerValue<RespondActivityTaskFailedRequest>(m), $.markAsStructValue(new RespondActivityTaskFailedRequest()))
	}

	public Size(): number {
		const m: RespondActivityTaskFailedRequest | $.VarRef<RespondActivityTaskFailedRequest> | null = this;
		let n: number = 0
		const m$: RespondActivityTaskFailedRequest = m == null ? $.pointerTarget<RespondActivityTaskFailedRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskFailedRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.sliceLen((m$ as RespondActivityTaskFailedRequest).TaskToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondActivityTaskFailedRequest).Failure != null) {
			l = __goscript_common_pb.Failure.prototype.Size.call((m$ as RespondActivityTaskFailedRequest).Failure)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as RespondActivityTaskFailedRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondActivityTaskFailedRequest).HeartbeatDetails != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as RespondActivityTaskFailedRequest).HeartbeatDetails)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondActivityTaskFailedRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondActivityTaskFailedRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondActivityTaskFailedRequest | $.VarRef<RespondActivityTaskFailedRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskFailedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondActivityTaskFailedRequest | $.VarRef<RespondActivityTaskFailedRequest> | null = this;
		const m$: RespondActivityTaskFailedRequest = m == null ? $.pointerTarget<RespondActivityTaskFailedRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskFailedRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow13 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
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
				return fmt.Errorf("proto: RespondActivityTaskFailedRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondActivityTaskFailedRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow13.backing as any[])[$.windowSlot(__goscriptSliceWindow13, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskFailedRequest).TaskToken = $.appendSlice($.goSlice((m$ as RespondActivityTaskFailedRequest).TaskToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as RespondActivityTaskFailedRequest).TaskToken == null) {
						;(m$ as RespondActivityTaskFailedRequest).TaskToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Failure", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow13.backing as any[])[$.windowSlot(__goscriptSliceWindow13, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondActivityTaskFailedRequest).Failure == null) {
						;(m$ as RespondActivityTaskFailedRequest).Failure = new __goscript_common_pb.Failure()
					}
					{
						let err = __goscript_common_pb.Failure.prototype.Unmarshal.call((m$ as RespondActivityTaskFailedRequest).Failure, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Identity", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskFailedRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field HeartbeatDetails", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow13.backing as any[])[$.windowSlot(__goscriptSliceWindow13, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondActivityTaskFailedRequest).HeartbeatDetails == null) {
						;(m$ as RespondActivityTaskFailedRequest).HeartbeatDetails = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as RespondActivityTaskFailedRequest).HeartbeatDetails, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskFailedRequest).XXX_unrecognized = $.appendSlice((m$ as RespondActivityTaskFailedRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondActivityTaskFailedRequest | $.VarRef<RespondActivityTaskFailedRequest> | null = this;
		xxx_messageInfo_RespondActivityTaskFailedRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskFailedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskFailedRequest | $.VarRef<RespondActivityTaskFailedRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondActivityTaskFailedRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskFailedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedRequest).MarshalToSizedBuffer(b) : RespondActivityTaskFailedRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondActivityTaskFailedRequest | $.VarRef<RespondActivityTaskFailedRequest> | null = this;
		xxx_messageInfo_RespondActivityTaskFailedRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskFailedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedRequest")), src)
	}

	public XXX_Size(): number {
		const m: RespondActivityTaskFailedRequest | $.VarRef<RespondActivityTaskFailedRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedRequest).Size() : RespondActivityTaskFailedRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondActivityTaskFailedRequest | $.VarRef<RespondActivityTaskFailedRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedRequest).Unmarshal(b) : RespondActivityTaskFailedRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondActivityTaskFailedRequest",
		() => new RespondActivityTaskFailedRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetFailure", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Failure") }], pointerReceiver: true }, { name: "GetHeartbeatDetails", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetIdentity", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetTaskToken", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondActivityTaskFailedRequest,
		() => [{ name: "TaskToken", key: "TaskToken", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,1,opt,name=task_token,json=taskToken,proto3\" json:\"task_token,omitempty\"" }, { name: "Failure", key: "Failure", type: /* @__PURE__ */ $.pointerType("apiv1.Failure"), tag: "protobuf:\"bytes,2,opt,name=failure,proto3\" json:\"failure,omitempty\"" }, { name: "Identity", key: "Identity", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=identity,proto3\" json:\"identity,omitempty\"" }, { name: "HeartbeatDetails", key: "HeartbeatDetails", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,4,opt,name=heartbeat_details,json=heartbeatDetails,proto3\" json:\"heartbeat_details,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondActivityTaskFailedResponse {
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

	public clone(): RespondActivityTaskFailedResponse {
		return new RespondActivityTaskFailedResponse(this, true)
	}

	public __goscriptAssign(source: RespondActivityTaskFailedResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([13])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskFailedResponse | $.VarRef<RespondActivityTaskFailedResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedResponse).Size() : RespondActivityTaskFailedResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple13: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskFailedResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple13[0]
		err = __goscriptTuple13[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskFailedResponse | $.VarRef<RespondActivityTaskFailedResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedResponse).Size() : RespondActivityTaskFailedResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskFailedResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskFailedResponse | $.VarRef<RespondActivityTaskFailedResponse> | null = this;
		const m$: RespondActivityTaskFailedResponse = m == null ? $.pointerTarget<RespondActivityTaskFailedResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskFailedResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskFailedResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondActivityTaskFailedResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskFailedResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondActivityTaskFailedResponse | $.VarRef<RespondActivityTaskFailedResponse> | null = this;
		$.assignStruct($.pointerValue<RespondActivityTaskFailedResponse>(m), new RespondActivityTaskFailedResponse(undefined, true))
	}

	public Size(): number {
		const m: RespondActivityTaskFailedResponse | $.VarRef<RespondActivityTaskFailedResponse> | null = this;
		let n: number = 0
		const m$: RespondActivityTaskFailedResponse = m == null ? $.pointerTarget<RespondActivityTaskFailedResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskFailedResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskFailedResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondActivityTaskFailedResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondActivityTaskFailedResponse | $.VarRef<RespondActivityTaskFailedResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskFailedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondActivityTaskFailedResponse | $.VarRef<RespondActivityTaskFailedResponse> | null = this;
		const m$: RespondActivityTaskFailedResponse = m == null ? $.pointerTarget<RespondActivityTaskFailedResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskFailedResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow14 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
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
				return fmt.Errorf("proto: RespondActivityTaskFailedResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondActivityTaskFailedResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskFailedResponse).XXX_unrecognized = $.appendSlice((m$ as RespondActivityTaskFailedResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondActivityTaskFailedResponse | $.VarRef<RespondActivityTaskFailedResponse> | null = this;
		xxx_messageInfo_RespondActivityTaskFailedResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskFailedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskFailedResponse | $.VarRef<RespondActivityTaskFailedResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondActivityTaskFailedResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskFailedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedResponse).MarshalToSizedBuffer(b) : RespondActivityTaskFailedResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondActivityTaskFailedResponse | $.VarRef<RespondActivityTaskFailedResponse> | null = this;
		xxx_messageInfo_RespondActivityTaskFailedResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskFailedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedResponse")), src)
	}

	public XXX_Size(): number {
		const m: RespondActivityTaskFailedResponse | $.VarRef<RespondActivityTaskFailedResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedResponse).Size() : RespondActivityTaskFailedResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondActivityTaskFailedResponse | $.VarRef<RespondActivityTaskFailedResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedResponse).Unmarshal(b) : RespondActivityTaskFailedResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondActivityTaskFailedResponse",
		() => new RespondActivityTaskFailedResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondActivityTaskFailedResponse,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondActivityTaskFailedByIDRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get WorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		return this._fields.WorkflowExecution
	}

	public set WorkflowExecution(value: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null) {
		this._fields.WorkflowExecution = value
	}

	public get ActivityId(): string {
		return this._fields.ActivityId
	}

	public set ActivityId(value: string) {
		this._fields.ActivityId = value
	}

	public get Failure(): __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null {
		return this._fields.Failure
	}

	public set Failure(value: __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null) {
		this._fields.Failure = value
	}

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
	}

	public get HeartbeatDetails(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.HeartbeatDetails
	}

	public set HeartbeatDetails(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.HeartbeatDetails = value
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
		WorkflowExecution: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null
		ActivityId: string
		Failure: __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null
		Identity: string
		HeartbeatDetails: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, ActivityId?: string, Failure?: __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null, Identity?: string, HeartbeatDetails?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			ActivityId: init?.ActivityId ?? ("" as string),
			Failure: init?.Failure ?? (null! as __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null),
			Identity: init?.Identity ?? ("" as string),
			HeartbeatDetails: init?.HeartbeatDetails ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RespondActivityTaskFailedByIDRequest {
		return new RespondActivityTaskFailedByIDRequest(this, true)
	}

	public __goscriptAssign(source: RespondActivityTaskFailedByIDRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowExecution = values.WorkflowExecution
		target.ActivityId = values.ActivityId
		target.Failure = values.Failure
		target.Identity = values.Identity
		target.HeartbeatDetails = values.HeartbeatDetails
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([14])]
	}

	public GetActivityId(): string {
		const m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskFailedByIDRequest>(m).ActivityId
		}
		return ""
	}

	public GetDomain(): string {
		const m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskFailedByIDRequest>(m).Domain
		}
		return ""
	}

	public GetFailure(): __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null {
		const m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskFailedByIDRequest>(m).Failure
		}
		return null
	}

	public GetHeartbeatDetails(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskFailedByIDRequest>(m).HeartbeatDetails
		}
		return null
	}

	public GetIdentity(): string {
		const m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskFailedByIDRequest>(m).Identity
		}
		return ""
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskFailedByIDRequest>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedByIDRequest).Size() : RespondActivityTaskFailedByIDRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple14: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedByIDRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskFailedByIDRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedByIDRequest).Size() : RespondActivityTaskFailedByIDRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedByIDRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskFailedByIDRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		const m$: RespondActivityTaskFailedByIDRequest = m == null ? $.pointerTarget<RespondActivityTaskFailedByIDRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskFailedByIDRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskFailedByIDRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondActivityTaskFailedByIDRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskFailedByIDRequest).XXX_unrecognized)
		}
		if ((m$ as RespondActivityTaskFailedByIDRequest).HeartbeatDetails != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as RespondActivityTaskFailedByIDRequest).HeartbeatDetails, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		if ($.stringLen((m$ as RespondActivityTaskFailedByIDRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as RespondActivityTaskFailedByIDRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskFailedByIDRequest).Identity)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RespondActivityTaskFailedByIDRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as RespondActivityTaskFailedByIDRequest).Failure != null) {
			{
				let [size, err] = __goscript_common_pb.Failure.prototype.MarshalToSizedBuffer.call((m$ as RespondActivityTaskFailedByIDRequest).Failure, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as RespondActivityTaskFailedByIDRequest).ActivityId) > 0) {
			i = i - ($.stringLen((m$ as RespondActivityTaskFailedByIDRequest).ActivityId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskFailedByIDRequest).ActivityId)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RespondActivityTaskFailedByIDRequest).ActivityId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as RespondActivityTaskFailedByIDRequest).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as RespondActivityTaskFailedByIDRequest).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as RespondActivityTaskFailedByIDRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as RespondActivityTaskFailedByIDRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskFailedByIDRequest).Domain)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RespondActivityTaskFailedByIDRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		$.assignStruct($.pointerValue<RespondActivityTaskFailedByIDRequest>(m), $.markAsStructValue(new RespondActivityTaskFailedByIDRequest()))
	}

	public Size(): number {
		const m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		let n: number = 0
		const m$: RespondActivityTaskFailedByIDRequest = m == null ? $.pointerTarget<RespondActivityTaskFailedByIDRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskFailedByIDRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as RespondActivityTaskFailedByIDRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondActivityTaskFailedByIDRequest).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as RespondActivityTaskFailedByIDRequest).WorkflowExecution)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as RespondActivityTaskFailedByIDRequest).ActivityId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondActivityTaskFailedByIDRequest).Failure != null) {
			l = __goscript_common_pb.Failure.prototype.Size.call((m$ as RespondActivityTaskFailedByIDRequest).Failure)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as RespondActivityTaskFailedByIDRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondActivityTaskFailedByIDRequest).HeartbeatDetails != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as RespondActivityTaskFailedByIDRequest).HeartbeatDetails)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondActivityTaskFailedByIDRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondActivityTaskFailedByIDRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskFailedByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		const m$: RespondActivityTaskFailedByIDRequest = m == null ? $.pointerTarget<RespondActivityTaskFailedByIDRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskFailedByIDRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow15 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
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
				return fmt.Errorf("proto: RespondActivityTaskFailedByIDRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondActivityTaskFailedByIDRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskFailedByIDRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowExecution", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow15.backing as any[])[$.windowSlot(__goscriptSliceWindow15, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondActivityTaskFailedByIDRequest).WorkflowExecution == null) {
						;(m$ as RespondActivityTaskFailedByIDRequest).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as RespondActivityTaskFailedByIDRequest).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActivityId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskFailedByIDRequest).ActivityId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Failure", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow15.backing as any[])[$.windowSlot(__goscriptSliceWindow15, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondActivityTaskFailedByIDRequest).Failure == null) {
						;(m$ as RespondActivityTaskFailedByIDRequest).Failure = new __goscript_common_pb.Failure()
					}
					{
						let err = __goscript_common_pb.Failure.prototype.Unmarshal.call((m$ as RespondActivityTaskFailedByIDRequest).Failure, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Identity", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskFailedByIDRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field HeartbeatDetails", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow15.backing as any[])[$.windowSlot(__goscriptSliceWindow15, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondActivityTaskFailedByIDRequest).HeartbeatDetails == null) {
						;(m$ as RespondActivityTaskFailedByIDRequest).HeartbeatDetails = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as RespondActivityTaskFailedByIDRequest).HeartbeatDetails, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskFailedByIDRequest).XXX_unrecognized = $.appendSlice((m$ as RespondActivityTaskFailedByIDRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		xxx_messageInfo_RespondActivityTaskFailedByIDRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskFailedByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondActivityTaskFailedByIDRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskFailedByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedByIDRequest).MarshalToSizedBuffer(b) : RespondActivityTaskFailedByIDRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		xxx_messageInfo_RespondActivityTaskFailedByIDRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskFailedByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDRequest")), src)
	}

	public XXX_Size(): number {
		const m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedByIDRequest).Size() : RespondActivityTaskFailedByIDRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondActivityTaskFailedByIDRequest | $.VarRef<RespondActivityTaskFailedByIDRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedByIDRequest).Unmarshal(b) : RespondActivityTaskFailedByIDRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondActivityTaskFailedByIDRequest",
		() => new RespondActivityTaskFailedByIDRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActivityId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetFailure", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Failure") }], pointerReceiver: true }, { name: "GetHeartbeatDetails", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetIdentity", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetWorkflowExecution", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondActivityTaskFailedByIDRequest,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "WorkflowExecution", key: "WorkflowExecution", type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }, { name: "ActivityId", key: "ActivityId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=activity_id,json=activityId,proto3\" json:\"activity_id,omitempty\"" }, { name: "Failure", key: "Failure", type: /* @__PURE__ */ $.pointerType("apiv1.Failure"), tag: "protobuf:\"bytes,4,opt,name=failure,proto3\" json:\"failure,omitempty\"" }, { name: "Identity", key: "Identity", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,5,opt,name=identity,proto3\" json:\"identity,omitempty\"" }, { name: "HeartbeatDetails", key: "HeartbeatDetails", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,6,opt,name=heartbeat_details,json=heartbeatDetails,proto3\" json:\"heartbeat_details,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondActivityTaskFailedByIDResponse {
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

	public clone(): RespondActivityTaskFailedByIDResponse {
		return new RespondActivityTaskFailedByIDResponse(this, true)
	}

	public __goscriptAssign(source: RespondActivityTaskFailedByIDResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([15])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskFailedByIDResponse | $.VarRef<RespondActivityTaskFailedByIDResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedByIDResponse).Size() : RespondActivityTaskFailedByIDResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple15: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedByIDResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskFailedByIDResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple15[0]
		err = __goscriptTuple15[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskFailedByIDResponse | $.VarRef<RespondActivityTaskFailedByIDResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedByIDResponse).Size() : RespondActivityTaskFailedByIDResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedByIDResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskFailedByIDResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskFailedByIDResponse | $.VarRef<RespondActivityTaskFailedByIDResponse> | null = this;
		const m$: RespondActivityTaskFailedByIDResponse = m == null ? $.pointerTarget<RespondActivityTaskFailedByIDResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskFailedByIDResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskFailedByIDResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondActivityTaskFailedByIDResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskFailedByIDResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondActivityTaskFailedByIDResponse | $.VarRef<RespondActivityTaskFailedByIDResponse> | null = this;
		$.assignStruct($.pointerValue<RespondActivityTaskFailedByIDResponse>(m), new RespondActivityTaskFailedByIDResponse(undefined, true))
	}

	public Size(): number {
		const m: RespondActivityTaskFailedByIDResponse | $.VarRef<RespondActivityTaskFailedByIDResponse> | null = this;
		let n: number = 0
		const m$: RespondActivityTaskFailedByIDResponse = m == null ? $.pointerTarget<RespondActivityTaskFailedByIDResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskFailedByIDResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskFailedByIDResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondActivityTaskFailedByIDResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondActivityTaskFailedByIDResponse | $.VarRef<RespondActivityTaskFailedByIDResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskFailedByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondActivityTaskFailedByIDResponse | $.VarRef<RespondActivityTaskFailedByIDResponse> | null = this;
		const m$: RespondActivityTaskFailedByIDResponse = m == null ? $.pointerTarget<RespondActivityTaskFailedByIDResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskFailedByIDResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow16 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
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
				return fmt.Errorf("proto: RespondActivityTaskFailedByIDResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondActivityTaskFailedByIDResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskFailedByIDResponse).XXX_unrecognized = $.appendSlice((m$ as RespondActivityTaskFailedByIDResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondActivityTaskFailedByIDResponse | $.VarRef<RespondActivityTaskFailedByIDResponse> | null = this;
		xxx_messageInfo_RespondActivityTaskFailedByIDResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskFailedByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskFailedByIDResponse | $.VarRef<RespondActivityTaskFailedByIDResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondActivityTaskFailedByIDResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskFailedByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedByIDResponse).MarshalToSizedBuffer(b) : RespondActivityTaskFailedByIDResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondActivityTaskFailedByIDResponse | $.VarRef<RespondActivityTaskFailedByIDResponse> | null = this;
		xxx_messageInfo_RespondActivityTaskFailedByIDResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskFailedByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDResponse")), src)
	}

	public XXX_Size(): number {
		const m: RespondActivityTaskFailedByIDResponse | $.VarRef<RespondActivityTaskFailedByIDResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedByIDResponse).Size() : RespondActivityTaskFailedByIDResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondActivityTaskFailedByIDResponse | $.VarRef<RespondActivityTaskFailedByIDResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskFailedByIDResponse).Unmarshal(b) : RespondActivityTaskFailedByIDResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondActivityTaskFailedByIDResponse",
		() => new RespondActivityTaskFailedByIDResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondActivityTaskFailedByIDResponse,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondActivityTaskCanceledRequest {
	public get TaskToken(): $.Slice<number> {
		return this._fields.TaskToken
	}

	public set TaskToken(value: $.Slice<number>) {
		this._fields.TaskToken = value
	}

	public get Details(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.Details
	}

	public set Details(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.Details = value
	}

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
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
		TaskToken: $.Slice<number>
		Details: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		Identity: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{TaskToken?: $.Slice<number>, Details?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, Identity?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			TaskToken: init?.TaskToken ?? (null! as $.Slice<number>),
			Details: init?.Details ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			Identity: init?.Identity ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RespondActivityTaskCanceledRequest {
		return new RespondActivityTaskCanceledRequest(this, true)
	}

	public __goscriptAssign(source: RespondActivityTaskCanceledRequest): void {
		const target = this._fields
		const values = source._fields
		target.TaskToken = values.TaskToken
		target.Details = values.Details
		target.Identity = values.Identity
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([16])]
	}

	public GetDetails(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: RespondActivityTaskCanceledRequest | $.VarRef<RespondActivityTaskCanceledRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskCanceledRequest>(m).Details
		}
		return null
	}

	public GetIdentity(): string {
		const m: RespondActivityTaskCanceledRequest | $.VarRef<RespondActivityTaskCanceledRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskCanceledRequest>(m).Identity
		}
		return ""
	}

	public GetTaskToken(): $.Slice<number> {
		const m: RespondActivityTaskCanceledRequest | $.VarRef<RespondActivityTaskCanceledRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskCanceledRequest>(m).TaskToken
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskCanceledRequest | $.VarRef<RespondActivityTaskCanceledRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledRequest).Size() : RespondActivityTaskCanceledRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple16: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskCanceledRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple16[0]
		err = __goscriptTuple16[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskCanceledRequest | $.VarRef<RespondActivityTaskCanceledRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledRequest).Size() : RespondActivityTaskCanceledRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskCanceledRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskCanceledRequest | $.VarRef<RespondActivityTaskCanceledRequest> | null = this;
		const m$: RespondActivityTaskCanceledRequest = m == null ? $.pointerTarget<RespondActivityTaskCanceledRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCanceledRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskCanceledRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondActivityTaskCanceledRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCanceledRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as RespondActivityTaskCanceledRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as RespondActivityTaskCanceledRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCanceledRequest).Identity)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RespondActivityTaskCanceledRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as RespondActivityTaskCanceledRequest).Details != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as RespondActivityTaskCanceledRequest).Details, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.sliceLen((m$ as RespondActivityTaskCanceledRequest).TaskToken) > 0) {
			i = i - ($.sliceLen((m$ as RespondActivityTaskCanceledRequest).TaskToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCanceledRequest).TaskToken)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.sliceLen((m$ as RespondActivityTaskCanceledRequest).TaskToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondActivityTaskCanceledRequest | $.VarRef<RespondActivityTaskCanceledRequest> | null = this;
		$.assignStruct($.pointerValue<RespondActivityTaskCanceledRequest>(m), $.markAsStructValue(new RespondActivityTaskCanceledRequest()))
	}

	public Size(): number {
		const m: RespondActivityTaskCanceledRequest | $.VarRef<RespondActivityTaskCanceledRequest> | null = this;
		let n: number = 0
		const m$: RespondActivityTaskCanceledRequest = m == null ? $.pointerTarget<RespondActivityTaskCanceledRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCanceledRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.sliceLen((m$ as RespondActivityTaskCanceledRequest).TaskToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondActivityTaskCanceledRequest).Details != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as RespondActivityTaskCanceledRequest).Details)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as RespondActivityTaskCanceledRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondActivityTaskCanceledRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondActivityTaskCanceledRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondActivityTaskCanceledRequest | $.VarRef<RespondActivityTaskCanceledRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCanceledRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondActivityTaskCanceledRequest | $.VarRef<RespondActivityTaskCanceledRequest> | null = this;
		const m$: RespondActivityTaskCanceledRequest = m == null ? $.pointerTarget<RespondActivityTaskCanceledRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCanceledRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow17 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
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
				return fmt.Errorf("proto: RespondActivityTaskCanceledRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondActivityTaskCanceledRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow17.backing as any[])[$.windowSlot(__goscriptSliceWindow17, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCanceledRequest).TaskToken = $.appendSlice($.goSlice((m$ as RespondActivityTaskCanceledRequest).TaskToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as RespondActivityTaskCanceledRequest).TaskToken == null) {
						;(m$ as RespondActivityTaskCanceledRequest).TaskToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Details", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow17.backing as any[])[$.windowSlot(__goscriptSliceWindow17, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondActivityTaskCanceledRequest).Details == null) {
						;(m$ as RespondActivityTaskCanceledRequest).Details = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as RespondActivityTaskCanceledRequest).Details, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Identity", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
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
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCanceledRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCanceledRequest).XXX_unrecognized = $.appendSlice((m$ as RespondActivityTaskCanceledRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondActivityTaskCanceledRequest | $.VarRef<RespondActivityTaskCanceledRequest> | null = this;
		xxx_messageInfo_RespondActivityTaskCanceledRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCanceledRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskCanceledRequest | $.VarRef<RespondActivityTaskCanceledRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondActivityTaskCanceledRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCanceledRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledRequest).MarshalToSizedBuffer(b) : RespondActivityTaskCanceledRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondActivityTaskCanceledRequest | $.VarRef<RespondActivityTaskCanceledRequest> | null = this;
		xxx_messageInfo_RespondActivityTaskCanceledRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCanceledRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledRequest")), src)
	}

	public XXX_Size(): number {
		const m: RespondActivityTaskCanceledRequest | $.VarRef<RespondActivityTaskCanceledRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledRequest).Size() : RespondActivityTaskCanceledRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondActivityTaskCanceledRequest | $.VarRef<RespondActivityTaskCanceledRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledRequest).Unmarshal(b) : RespondActivityTaskCanceledRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondActivityTaskCanceledRequest",
		() => new RespondActivityTaskCanceledRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDetails", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetIdentity", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetTaskToken", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondActivityTaskCanceledRequest,
		() => [{ name: "TaskToken", key: "TaskToken", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,1,opt,name=task_token,json=taskToken,proto3\" json:\"task_token,omitempty\"" }, { name: "Details", key: "Details", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,2,opt,name=details,proto3\" json:\"details,omitempty\"" }, { name: "Identity", key: "Identity", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=identity,proto3\" json:\"identity,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondActivityTaskCanceledResponse {
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

	public clone(): RespondActivityTaskCanceledResponse {
		return new RespondActivityTaskCanceledResponse(this, true)
	}

	public __goscriptAssign(source: RespondActivityTaskCanceledResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([17])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskCanceledResponse | $.VarRef<RespondActivityTaskCanceledResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledResponse).Size() : RespondActivityTaskCanceledResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple17: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskCanceledResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple17[0]
		err = __goscriptTuple17[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskCanceledResponse | $.VarRef<RespondActivityTaskCanceledResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledResponse).Size() : RespondActivityTaskCanceledResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskCanceledResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskCanceledResponse | $.VarRef<RespondActivityTaskCanceledResponse> | null = this;
		const m$: RespondActivityTaskCanceledResponse = m == null ? $.pointerTarget<RespondActivityTaskCanceledResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCanceledResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskCanceledResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondActivityTaskCanceledResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCanceledResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondActivityTaskCanceledResponse | $.VarRef<RespondActivityTaskCanceledResponse> | null = this;
		$.assignStruct($.pointerValue<RespondActivityTaskCanceledResponse>(m), new RespondActivityTaskCanceledResponse(undefined, true))
	}

	public Size(): number {
		const m: RespondActivityTaskCanceledResponse | $.VarRef<RespondActivityTaskCanceledResponse> | null = this;
		let n: number = 0
		const m$: RespondActivityTaskCanceledResponse = m == null ? $.pointerTarget<RespondActivityTaskCanceledResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCanceledResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskCanceledResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondActivityTaskCanceledResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondActivityTaskCanceledResponse | $.VarRef<RespondActivityTaskCanceledResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCanceledResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondActivityTaskCanceledResponse | $.VarRef<RespondActivityTaskCanceledResponse> | null = this;
		const m$: RespondActivityTaskCanceledResponse = m == null ? $.pointerTarget<RespondActivityTaskCanceledResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCanceledResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow18 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
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
				return fmt.Errorf("proto: RespondActivityTaskCanceledResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondActivityTaskCanceledResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCanceledResponse).XXX_unrecognized = $.appendSlice((m$ as RespondActivityTaskCanceledResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondActivityTaskCanceledResponse | $.VarRef<RespondActivityTaskCanceledResponse> | null = this;
		xxx_messageInfo_RespondActivityTaskCanceledResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCanceledResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskCanceledResponse | $.VarRef<RespondActivityTaskCanceledResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondActivityTaskCanceledResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCanceledResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledResponse).MarshalToSizedBuffer(b) : RespondActivityTaskCanceledResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondActivityTaskCanceledResponse | $.VarRef<RespondActivityTaskCanceledResponse> | null = this;
		xxx_messageInfo_RespondActivityTaskCanceledResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCanceledResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledResponse")), src)
	}

	public XXX_Size(): number {
		const m: RespondActivityTaskCanceledResponse | $.VarRef<RespondActivityTaskCanceledResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledResponse).Size() : RespondActivityTaskCanceledResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondActivityTaskCanceledResponse | $.VarRef<RespondActivityTaskCanceledResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledResponse).Unmarshal(b) : RespondActivityTaskCanceledResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondActivityTaskCanceledResponse",
		() => new RespondActivityTaskCanceledResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondActivityTaskCanceledResponse,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondActivityTaskCanceledByIDRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get WorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		return this._fields.WorkflowExecution
	}

	public set WorkflowExecution(value: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null) {
		this._fields.WorkflowExecution = value
	}

	public get ActivityId(): string {
		return this._fields.ActivityId
	}

	public set ActivityId(value: string) {
		this._fields.ActivityId = value
	}

	public get Details(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.Details
	}

	public set Details(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.Details = value
	}

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
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
		WorkflowExecution: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null
		ActivityId: string
		Details: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		Identity: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, ActivityId?: string, Details?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, Identity?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			ActivityId: init?.ActivityId ?? ("" as string),
			Details: init?.Details ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			Identity: init?.Identity ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RespondActivityTaskCanceledByIDRequest {
		return new RespondActivityTaskCanceledByIDRequest(this, true)
	}

	public __goscriptAssign(source: RespondActivityTaskCanceledByIDRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowExecution = values.WorkflowExecution
		target.ActivityId = values.ActivityId
		target.Details = values.Details
		target.Identity = values.Identity
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([18])]
	}

	public GetActivityId(): string {
		const m: RespondActivityTaskCanceledByIDRequest | $.VarRef<RespondActivityTaskCanceledByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskCanceledByIDRequest>(m).ActivityId
		}
		return ""
	}

	public GetDetails(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: RespondActivityTaskCanceledByIDRequest | $.VarRef<RespondActivityTaskCanceledByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskCanceledByIDRequest>(m).Details
		}
		return null
	}

	public GetDomain(): string {
		const m: RespondActivityTaskCanceledByIDRequest | $.VarRef<RespondActivityTaskCanceledByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskCanceledByIDRequest>(m).Domain
		}
		return ""
	}

	public GetIdentity(): string {
		const m: RespondActivityTaskCanceledByIDRequest | $.VarRef<RespondActivityTaskCanceledByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskCanceledByIDRequest>(m).Identity
		}
		return ""
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: RespondActivityTaskCanceledByIDRequest | $.VarRef<RespondActivityTaskCanceledByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondActivityTaskCanceledByIDRequest>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskCanceledByIDRequest | $.VarRef<RespondActivityTaskCanceledByIDRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledByIDRequest).Size() : RespondActivityTaskCanceledByIDRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple18: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledByIDRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskCanceledByIDRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple18[0]
		err = __goscriptTuple18[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskCanceledByIDRequest | $.VarRef<RespondActivityTaskCanceledByIDRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledByIDRequest).Size() : RespondActivityTaskCanceledByIDRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledByIDRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskCanceledByIDRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskCanceledByIDRequest | $.VarRef<RespondActivityTaskCanceledByIDRequest> | null = this;
		const m$: RespondActivityTaskCanceledByIDRequest = m == null ? $.pointerTarget<RespondActivityTaskCanceledByIDRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCanceledByIDRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskCanceledByIDRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondActivityTaskCanceledByIDRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCanceledByIDRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as RespondActivityTaskCanceledByIDRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as RespondActivityTaskCanceledByIDRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCanceledByIDRequest).Identity)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RespondActivityTaskCanceledByIDRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as RespondActivityTaskCanceledByIDRequest).Details != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as RespondActivityTaskCanceledByIDRequest).Details, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as RespondActivityTaskCanceledByIDRequest).ActivityId) > 0) {
			i = i - ($.stringLen((m$ as RespondActivityTaskCanceledByIDRequest).ActivityId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCanceledByIDRequest).ActivityId)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RespondActivityTaskCanceledByIDRequest).ActivityId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as RespondActivityTaskCanceledByIDRequest).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as RespondActivityTaskCanceledByIDRequest).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as RespondActivityTaskCanceledByIDRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as RespondActivityTaskCanceledByIDRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCanceledByIDRequest).Domain)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RespondActivityTaskCanceledByIDRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondActivityTaskCanceledByIDRequest | $.VarRef<RespondActivityTaskCanceledByIDRequest> | null = this;
		$.assignStruct($.pointerValue<RespondActivityTaskCanceledByIDRequest>(m), $.markAsStructValue(new RespondActivityTaskCanceledByIDRequest()))
	}

	public Size(): number {
		const m: RespondActivityTaskCanceledByIDRequest | $.VarRef<RespondActivityTaskCanceledByIDRequest> | null = this;
		let n: number = 0
		const m$: RespondActivityTaskCanceledByIDRequest = m == null ? $.pointerTarget<RespondActivityTaskCanceledByIDRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCanceledByIDRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as RespondActivityTaskCanceledByIDRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondActivityTaskCanceledByIDRequest).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as RespondActivityTaskCanceledByIDRequest).WorkflowExecution)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as RespondActivityTaskCanceledByIDRequest).ActivityId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondActivityTaskCanceledByIDRequest).Details != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as RespondActivityTaskCanceledByIDRequest).Details)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as RespondActivityTaskCanceledByIDRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondActivityTaskCanceledByIDRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondActivityTaskCanceledByIDRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondActivityTaskCanceledByIDRequest | $.VarRef<RespondActivityTaskCanceledByIDRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCanceledByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondActivityTaskCanceledByIDRequest | $.VarRef<RespondActivityTaskCanceledByIDRequest> | null = this;
		const m$: RespondActivityTaskCanceledByIDRequest = m == null ? $.pointerTarget<RespondActivityTaskCanceledByIDRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCanceledByIDRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow19 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow19.backing as any[])[$.windowSlot(__goscriptSliceWindow19, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: RespondActivityTaskCanceledByIDRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondActivityTaskCanceledByIDRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow19.backing as any[])[$.windowSlot(__goscriptSliceWindow19, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCanceledByIDRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowExecution", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow19.backing as any[])[$.windowSlot(__goscriptSliceWindow19, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondActivityTaskCanceledByIDRequest).WorkflowExecution == null) {
						;(m$ as RespondActivityTaskCanceledByIDRequest).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as RespondActivityTaskCanceledByIDRequest).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActivityId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow19.backing as any[])[$.windowSlot(__goscriptSliceWindow19, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCanceledByIDRequest).ActivityId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Details", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow19.backing as any[])[$.windowSlot(__goscriptSliceWindow19, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondActivityTaskCanceledByIDRequest).Details == null) {
						;(m$ as RespondActivityTaskCanceledByIDRequest).Details = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as RespondActivityTaskCanceledByIDRequest).Details, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Identity", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow19.backing as any[])[$.windowSlot(__goscriptSliceWindow19, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCanceledByIDRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCanceledByIDRequest).XXX_unrecognized = $.appendSlice((m$ as RespondActivityTaskCanceledByIDRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondActivityTaskCanceledByIDRequest | $.VarRef<RespondActivityTaskCanceledByIDRequest> | null = this;
		xxx_messageInfo_RespondActivityTaskCanceledByIDRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCanceledByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskCanceledByIDRequest | $.VarRef<RespondActivityTaskCanceledByIDRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondActivityTaskCanceledByIDRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCanceledByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledByIDRequest).MarshalToSizedBuffer(b) : RespondActivityTaskCanceledByIDRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondActivityTaskCanceledByIDRequest | $.VarRef<RespondActivityTaskCanceledByIDRequest> | null = this;
		xxx_messageInfo_RespondActivityTaskCanceledByIDRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCanceledByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDRequest")), src)
	}

	public XXX_Size(): number {
		const m: RespondActivityTaskCanceledByIDRequest | $.VarRef<RespondActivityTaskCanceledByIDRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledByIDRequest).Size() : RespondActivityTaskCanceledByIDRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondActivityTaskCanceledByIDRequest | $.VarRef<RespondActivityTaskCanceledByIDRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledByIDRequest).Unmarshal(b) : RespondActivityTaskCanceledByIDRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondActivityTaskCanceledByIDRequest",
		() => new RespondActivityTaskCanceledByIDRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActivityId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetDetails", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetIdentity", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetWorkflowExecution", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondActivityTaskCanceledByIDRequest,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "WorkflowExecution", key: "WorkflowExecution", type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }, { name: "ActivityId", key: "ActivityId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=activity_id,json=activityId,proto3\" json:\"activity_id,omitempty\"" }, { name: "Details", key: "Details", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,4,opt,name=details,proto3\" json:\"details,omitempty\"" }, { name: "Identity", key: "Identity", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,5,opt,name=identity,proto3\" json:\"identity,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondActivityTaskCanceledByIDResponse {
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

	public clone(): RespondActivityTaskCanceledByIDResponse {
		return new RespondActivityTaskCanceledByIDResponse(this, true)
	}

	public __goscriptAssign(source: RespondActivityTaskCanceledByIDResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([19])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskCanceledByIDResponse | $.VarRef<RespondActivityTaskCanceledByIDResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledByIDResponse).Size() : RespondActivityTaskCanceledByIDResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple19: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledByIDResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskCanceledByIDResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple19[0]
		err = __goscriptTuple19[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskCanceledByIDResponse | $.VarRef<RespondActivityTaskCanceledByIDResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledByIDResponse).Size() : RespondActivityTaskCanceledByIDResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledByIDResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondActivityTaskCanceledByIDResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondActivityTaskCanceledByIDResponse | $.VarRef<RespondActivityTaskCanceledByIDResponse> | null = this;
		const m$: RespondActivityTaskCanceledByIDResponse = m == null ? $.pointerTarget<RespondActivityTaskCanceledByIDResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCanceledByIDResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskCanceledByIDResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondActivityTaskCanceledByIDResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondActivityTaskCanceledByIDResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondActivityTaskCanceledByIDResponse | $.VarRef<RespondActivityTaskCanceledByIDResponse> | null = this;
		$.assignStruct($.pointerValue<RespondActivityTaskCanceledByIDResponse>(m), new RespondActivityTaskCanceledByIDResponse(undefined, true))
	}

	public Size(): number {
		const m: RespondActivityTaskCanceledByIDResponse | $.VarRef<RespondActivityTaskCanceledByIDResponse> | null = this;
		let n: number = 0
		const m$: RespondActivityTaskCanceledByIDResponse = m == null ? $.pointerTarget<RespondActivityTaskCanceledByIDResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCanceledByIDResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as RespondActivityTaskCanceledByIDResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondActivityTaskCanceledByIDResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondActivityTaskCanceledByIDResponse | $.VarRef<RespondActivityTaskCanceledByIDResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCanceledByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondActivityTaskCanceledByIDResponse | $.VarRef<RespondActivityTaskCanceledByIDResponse> | null = this;
		const m$: RespondActivityTaskCanceledByIDResponse = m == null ? $.pointerTarget<RespondActivityTaskCanceledByIDResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondActivityTaskCanceledByIDResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow20 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: RespondActivityTaskCanceledByIDResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondActivityTaskCanceledByIDResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondActivityTaskCanceledByIDResponse).XXX_unrecognized = $.appendSlice((m$ as RespondActivityTaskCanceledByIDResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondActivityTaskCanceledByIDResponse | $.VarRef<RespondActivityTaskCanceledByIDResponse> | null = this;
		xxx_messageInfo_RespondActivityTaskCanceledByIDResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCanceledByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondActivityTaskCanceledByIDResponse | $.VarRef<RespondActivityTaskCanceledByIDResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondActivityTaskCanceledByIDResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCanceledByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledByIDResponse).MarshalToSizedBuffer(b) : RespondActivityTaskCanceledByIDResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondActivityTaskCanceledByIDResponse | $.VarRef<RespondActivityTaskCanceledByIDResponse> | null = this;
		xxx_messageInfo_RespondActivityTaskCanceledByIDResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondActivityTaskCanceledByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDResponse")), src)
	}

	public XXX_Size(): number {
		const m: RespondActivityTaskCanceledByIDResponse | $.VarRef<RespondActivityTaskCanceledByIDResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledByIDResponse).Size() : RespondActivityTaskCanceledByIDResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondActivityTaskCanceledByIDResponse | $.VarRef<RespondActivityTaskCanceledByIDResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondActivityTaskCanceledByIDResponse).Unmarshal(b) : RespondActivityTaskCanceledByIDResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondActivityTaskCanceledByIDResponse",
		() => new RespondActivityTaskCanceledByIDResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondActivityTaskCanceledByIDResponse,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RecordActivityTaskHeartbeatRequest {
	public get TaskToken(): $.Slice<number> {
		return this._fields.TaskToken
	}

	public set TaskToken(value: $.Slice<number>) {
		this._fields.TaskToken = value
	}

	public get Details(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.Details
	}

	public set Details(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.Details = value
	}

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
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
		TaskToken: $.Slice<number>
		Details: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		Identity: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{TaskToken?: $.Slice<number>, Details?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, Identity?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			TaskToken: init?.TaskToken ?? (null! as $.Slice<number>),
			Details: init?.Details ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			Identity: init?.Identity ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RecordActivityTaskHeartbeatRequest {
		return new RecordActivityTaskHeartbeatRequest(this, true)
	}

	public __goscriptAssign(source: RecordActivityTaskHeartbeatRequest): void {
		const target = this._fields
		const values = source._fields
		target.TaskToken = values.TaskToken
		target.Details = values.Details
		target.Identity = values.Identity
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([20])]
	}

	public GetDetails(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: RecordActivityTaskHeartbeatRequest | $.VarRef<RecordActivityTaskHeartbeatRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RecordActivityTaskHeartbeatRequest>(m).Details
		}
		return null
	}

	public GetIdentity(): string {
		const m: RecordActivityTaskHeartbeatRequest | $.VarRef<RecordActivityTaskHeartbeatRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RecordActivityTaskHeartbeatRequest>(m).Identity
		}
		return ""
	}

	public GetTaskToken(): $.Slice<number> {
		const m: RecordActivityTaskHeartbeatRequest | $.VarRef<RecordActivityTaskHeartbeatRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RecordActivityTaskHeartbeatRequest>(m).TaskToken
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RecordActivityTaskHeartbeatRequest | $.VarRef<RecordActivityTaskHeartbeatRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatRequest).Size() : RecordActivityTaskHeartbeatRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple20: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RecordActivityTaskHeartbeatRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple20[0]
		err = __goscriptTuple20[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RecordActivityTaskHeartbeatRequest | $.VarRef<RecordActivityTaskHeartbeatRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatRequest).Size() : RecordActivityTaskHeartbeatRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RecordActivityTaskHeartbeatRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RecordActivityTaskHeartbeatRequest | $.VarRef<RecordActivityTaskHeartbeatRequest> | null = this;
		const m$: RecordActivityTaskHeartbeatRequest = m == null ? $.pointerTarget<RecordActivityTaskHeartbeatRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RecordActivityTaskHeartbeatRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RecordActivityTaskHeartbeatRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RecordActivityTaskHeartbeatRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RecordActivityTaskHeartbeatRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as RecordActivityTaskHeartbeatRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as RecordActivityTaskHeartbeatRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RecordActivityTaskHeartbeatRequest).Identity)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RecordActivityTaskHeartbeatRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as RecordActivityTaskHeartbeatRequest).Details != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as RecordActivityTaskHeartbeatRequest).Details, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.sliceLen((m$ as RecordActivityTaskHeartbeatRequest).TaskToken) > 0) {
			i = i - ($.sliceLen((m$ as RecordActivityTaskHeartbeatRequest).TaskToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RecordActivityTaskHeartbeatRequest).TaskToken)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.sliceLen((m$ as RecordActivityTaskHeartbeatRequest).TaskToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RecordActivityTaskHeartbeatRequest | $.VarRef<RecordActivityTaskHeartbeatRequest> | null = this;
		$.assignStruct($.pointerValue<RecordActivityTaskHeartbeatRequest>(m), $.markAsStructValue(new RecordActivityTaskHeartbeatRequest()))
	}

	public Size(): number {
		const m: RecordActivityTaskHeartbeatRequest | $.VarRef<RecordActivityTaskHeartbeatRequest> | null = this;
		let n: number = 0
		const m$: RecordActivityTaskHeartbeatRequest = m == null ? $.pointerTarget<RecordActivityTaskHeartbeatRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RecordActivityTaskHeartbeatRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.sliceLen((m$ as RecordActivityTaskHeartbeatRequest).TaskToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RecordActivityTaskHeartbeatRequest).Details != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as RecordActivityTaskHeartbeatRequest).Details)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as RecordActivityTaskHeartbeatRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RecordActivityTaskHeartbeatRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RecordActivityTaskHeartbeatRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RecordActivityTaskHeartbeatRequest | $.VarRef<RecordActivityTaskHeartbeatRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RecordActivityTaskHeartbeatRequest", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RecordActivityTaskHeartbeatRequest | $.VarRef<RecordActivityTaskHeartbeatRequest> | null = this;
		const m$: RecordActivityTaskHeartbeatRequest = m == null ? $.pointerTarget<RecordActivityTaskHeartbeatRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RecordActivityTaskHeartbeatRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow21 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow21.backing as any[])[$.windowSlot(__goscriptSliceWindow21, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: RecordActivityTaskHeartbeatRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RecordActivityTaskHeartbeatRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow21.backing as any[])[$.windowSlot(__goscriptSliceWindow21, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RecordActivityTaskHeartbeatRequest).TaskToken = $.appendSlice($.goSlice((m$ as RecordActivityTaskHeartbeatRequest).TaskToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as RecordActivityTaskHeartbeatRequest).TaskToken == null) {
						;(m$ as RecordActivityTaskHeartbeatRequest).TaskToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Details", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow21.backing as any[])[$.windowSlot(__goscriptSliceWindow21, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RecordActivityTaskHeartbeatRequest).Details == null) {
						;(m$ as RecordActivityTaskHeartbeatRequest).Details = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as RecordActivityTaskHeartbeatRequest).Details, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Identity", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow21.backing as any[])[$.windowSlot(__goscriptSliceWindow21, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RecordActivityTaskHeartbeatRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RecordActivityTaskHeartbeatRequest).XXX_unrecognized = $.appendSlice((m$ as RecordActivityTaskHeartbeatRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RecordActivityTaskHeartbeatRequest | $.VarRef<RecordActivityTaskHeartbeatRequest> | null = this;
		xxx_messageInfo_RecordActivityTaskHeartbeatRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RecordActivityTaskHeartbeatRequest", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RecordActivityTaskHeartbeatRequest | $.VarRef<RecordActivityTaskHeartbeatRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RecordActivityTaskHeartbeatRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RecordActivityTaskHeartbeatRequest", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatRequest).MarshalToSizedBuffer(b) : RecordActivityTaskHeartbeatRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RecordActivityTaskHeartbeatRequest | $.VarRef<RecordActivityTaskHeartbeatRequest> | null = this;
		xxx_messageInfo_RecordActivityTaskHeartbeatRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RecordActivityTaskHeartbeatRequest", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatRequest")), src)
	}

	public XXX_Size(): number {
		const m: RecordActivityTaskHeartbeatRequest | $.VarRef<RecordActivityTaskHeartbeatRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatRequest).Size() : RecordActivityTaskHeartbeatRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RecordActivityTaskHeartbeatRequest | $.VarRef<RecordActivityTaskHeartbeatRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatRequest).Unmarshal(b) : RecordActivityTaskHeartbeatRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RecordActivityTaskHeartbeatRequest",
		() => new RecordActivityTaskHeartbeatRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDetails", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetIdentity", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetTaskToken", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RecordActivityTaskHeartbeatRequest,
		() => [{ name: "TaskToken", key: "TaskToken", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,1,opt,name=task_token,json=taskToken,proto3\" json:\"task_token,omitempty\"" }, { name: "Details", key: "Details", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,2,opt,name=details,proto3\" json:\"details,omitempty\"" }, { name: "Identity", key: "Identity", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=identity,proto3\" json:\"identity,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RecordActivityTaskHeartbeatResponse {
	public get CancelRequested(): boolean {
		return this._fields.CancelRequested
	}

	public set CancelRequested(value: boolean) {
		this._fields.CancelRequested = value
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
		CancelRequested: boolean
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{CancelRequested?: boolean, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			CancelRequested: init?.CancelRequested ?? (false as boolean),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RecordActivityTaskHeartbeatResponse {
		return new RecordActivityTaskHeartbeatResponse(this, true)
	}

	public __goscriptAssign(source: RecordActivityTaskHeartbeatResponse): void {
		const target = this._fields
		const values = source._fields
		target.CancelRequested = values.CancelRequested
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([21])]
	}

	public GetCancelRequested(): boolean {
		const m: RecordActivityTaskHeartbeatResponse | $.VarRef<RecordActivityTaskHeartbeatResponse> | null = this;
		if (m != null) {
			return $.pointerValue<RecordActivityTaskHeartbeatResponse>(m).CancelRequested
		}
		return false
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RecordActivityTaskHeartbeatResponse | $.VarRef<RecordActivityTaskHeartbeatResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatResponse).Size() : RecordActivityTaskHeartbeatResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple21: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RecordActivityTaskHeartbeatResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple21[0]
		err = __goscriptTuple21[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RecordActivityTaskHeartbeatResponse | $.VarRef<RecordActivityTaskHeartbeatResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatResponse).Size() : RecordActivityTaskHeartbeatResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RecordActivityTaskHeartbeatResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RecordActivityTaskHeartbeatResponse | $.VarRef<RecordActivityTaskHeartbeatResponse> | null = this;
		const m$: RecordActivityTaskHeartbeatResponse = m == null ? $.pointerTarget<RecordActivityTaskHeartbeatResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RecordActivityTaskHeartbeatResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RecordActivityTaskHeartbeatResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RecordActivityTaskHeartbeatResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RecordActivityTaskHeartbeatResponse).XXX_unrecognized)
		}
		if ((m$ as RecordActivityTaskHeartbeatResponse).CancelRequested) {
			i--
			if ((m$ as RecordActivityTaskHeartbeatResponse).CancelRequested) {
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
		let m: RecordActivityTaskHeartbeatResponse | $.VarRef<RecordActivityTaskHeartbeatResponse> | null = this;
		$.assignStruct($.pointerValue<RecordActivityTaskHeartbeatResponse>(m), $.markAsStructValue(new RecordActivityTaskHeartbeatResponse()))
	}

	public Size(): number {
		const m: RecordActivityTaskHeartbeatResponse | $.VarRef<RecordActivityTaskHeartbeatResponse> | null = this;
		let n: number = 0
		const m$: RecordActivityTaskHeartbeatResponse = m == null ? $.pointerTarget<RecordActivityTaskHeartbeatResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RecordActivityTaskHeartbeatResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as RecordActivityTaskHeartbeatResponse).CancelRequested) {
			n = n + (2)
		}
		if ((m$ as RecordActivityTaskHeartbeatResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RecordActivityTaskHeartbeatResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RecordActivityTaskHeartbeatResponse | $.VarRef<RecordActivityTaskHeartbeatResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RecordActivityTaskHeartbeatResponse", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RecordActivityTaskHeartbeatResponse | $.VarRef<RecordActivityTaskHeartbeatResponse> | null = this;
		const m$: RecordActivityTaskHeartbeatResponse = m == null ? $.pointerTarget<RecordActivityTaskHeartbeatResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RecordActivityTaskHeartbeatResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow22 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow22.backing as any[])[$.windowSlot(__goscriptSliceWindow22, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: RecordActivityTaskHeartbeatResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RecordActivityTaskHeartbeatResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field CancelRequested", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow22.backing as any[])[$.windowSlot(__goscriptSliceWindow22, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as RecordActivityTaskHeartbeatResponse).CancelRequested = (v != 0)
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RecordActivityTaskHeartbeatResponse).XXX_unrecognized = $.appendSlice((m$ as RecordActivityTaskHeartbeatResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RecordActivityTaskHeartbeatResponse | $.VarRef<RecordActivityTaskHeartbeatResponse> | null = this;
		xxx_messageInfo_RecordActivityTaskHeartbeatResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RecordActivityTaskHeartbeatResponse", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RecordActivityTaskHeartbeatResponse | $.VarRef<RecordActivityTaskHeartbeatResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RecordActivityTaskHeartbeatResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RecordActivityTaskHeartbeatResponse", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatResponse).MarshalToSizedBuffer(b) : RecordActivityTaskHeartbeatResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RecordActivityTaskHeartbeatResponse | $.VarRef<RecordActivityTaskHeartbeatResponse> | null = this;
		xxx_messageInfo_RecordActivityTaskHeartbeatResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RecordActivityTaskHeartbeatResponse", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatResponse")), src)
	}

	public XXX_Size(): number {
		const m: RecordActivityTaskHeartbeatResponse | $.VarRef<RecordActivityTaskHeartbeatResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatResponse).Size() : RecordActivityTaskHeartbeatResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RecordActivityTaskHeartbeatResponse | $.VarRef<RecordActivityTaskHeartbeatResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatResponse).Unmarshal(b) : RecordActivityTaskHeartbeatResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RecordActivityTaskHeartbeatResponse",
		() => new RecordActivityTaskHeartbeatResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetCancelRequested", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RecordActivityTaskHeartbeatResponse,
		() => [{ name: "CancelRequested", key: "CancelRequested", type: /* @__PURE__ */ $.basicType("bool"), tag: "protobuf:\"varint,1,opt,name=cancel_requested,json=cancelRequested,proto3\" json:\"cancel_requested,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RecordActivityTaskHeartbeatByIDRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get WorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		return this._fields.WorkflowExecution
	}

	public set WorkflowExecution(value: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null) {
		this._fields.WorkflowExecution = value
	}

	public get ActivityId(): string {
		return this._fields.ActivityId
	}

	public set ActivityId(value: string) {
		this._fields.ActivityId = value
	}

	public get Details(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.Details
	}

	public set Details(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.Details = value
	}

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
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
		WorkflowExecution: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null
		ActivityId: string
		Details: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		Identity: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, ActivityId?: string, Details?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, Identity?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			ActivityId: init?.ActivityId ?? ("" as string),
			Details: init?.Details ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			Identity: init?.Identity ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RecordActivityTaskHeartbeatByIDRequest {
		return new RecordActivityTaskHeartbeatByIDRequest(this, true)
	}

	public __goscriptAssign(source: RecordActivityTaskHeartbeatByIDRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowExecution = values.WorkflowExecution
		target.ActivityId = values.ActivityId
		target.Details = values.Details
		target.Identity = values.Identity
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([22])]
	}

	public GetActivityId(): string {
		const m: RecordActivityTaskHeartbeatByIDRequest | $.VarRef<RecordActivityTaskHeartbeatByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RecordActivityTaskHeartbeatByIDRequest>(m).ActivityId
		}
		return ""
	}

	public GetDetails(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: RecordActivityTaskHeartbeatByIDRequest | $.VarRef<RecordActivityTaskHeartbeatByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RecordActivityTaskHeartbeatByIDRequest>(m).Details
		}
		return null
	}

	public GetDomain(): string {
		const m: RecordActivityTaskHeartbeatByIDRequest | $.VarRef<RecordActivityTaskHeartbeatByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RecordActivityTaskHeartbeatByIDRequest>(m).Domain
		}
		return ""
	}

	public GetIdentity(): string {
		const m: RecordActivityTaskHeartbeatByIDRequest | $.VarRef<RecordActivityTaskHeartbeatByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RecordActivityTaskHeartbeatByIDRequest>(m).Identity
		}
		return ""
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: RecordActivityTaskHeartbeatByIDRequest | $.VarRef<RecordActivityTaskHeartbeatByIDRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RecordActivityTaskHeartbeatByIDRequest>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RecordActivityTaskHeartbeatByIDRequest | $.VarRef<RecordActivityTaskHeartbeatByIDRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatByIDRequest).Size() : RecordActivityTaskHeartbeatByIDRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple22: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatByIDRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RecordActivityTaskHeartbeatByIDRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple22[0]
		err = __goscriptTuple22[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RecordActivityTaskHeartbeatByIDRequest | $.VarRef<RecordActivityTaskHeartbeatByIDRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatByIDRequest).Size() : RecordActivityTaskHeartbeatByIDRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatByIDRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RecordActivityTaskHeartbeatByIDRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RecordActivityTaskHeartbeatByIDRequest | $.VarRef<RecordActivityTaskHeartbeatByIDRequest> | null = this;
		const m$: RecordActivityTaskHeartbeatByIDRequest = m == null ? $.pointerTarget<RecordActivityTaskHeartbeatByIDRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RecordActivityTaskHeartbeatByIDRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RecordActivityTaskHeartbeatByIDRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RecordActivityTaskHeartbeatByIDRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RecordActivityTaskHeartbeatByIDRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as RecordActivityTaskHeartbeatByIDRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as RecordActivityTaskHeartbeatByIDRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RecordActivityTaskHeartbeatByIDRequest).Identity)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RecordActivityTaskHeartbeatByIDRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as RecordActivityTaskHeartbeatByIDRequest).Details != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as RecordActivityTaskHeartbeatByIDRequest).Details, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as RecordActivityTaskHeartbeatByIDRequest).ActivityId) > 0) {
			i = i - ($.stringLen((m$ as RecordActivityTaskHeartbeatByIDRequest).ActivityId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RecordActivityTaskHeartbeatByIDRequest).ActivityId)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RecordActivityTaskHeartbeatByIDRequest).ActivityId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as RecordActivityTaskHeartbeatByIDRequest).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as RecordActivityTaskHeartbeatByIDRequest).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as RecordActivityTaskHeartbeatByIDRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as RecordActivityTaskHeartbeatByIDRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RecordActivityTaskHeartbeatByIDRequest).Domain)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as RecordActivityTaskHeartbeatByIDRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RecordActivityTaskHeartbeatByIDRequest | $.VarRef<RecordActivityTaskHeartbeatByIDRequest> | null = this;
		$.assignStruct($.pointerValue<RecordActivityTaskHeartbeatByIDRequest>(m), $.markAsStructValue(new RecordActivityTaskHeartbeatByIDRequest()))
	}

	public Size(): number {
		const m: RecordActivityTaskHeartbeatByIDRequest | $.VarRef<RecordActivityTaskHeartbeatByIDRequest> | null = this;
		let n: number = 0
		const m$: RecordActivityTaskHeartbeatByIDRequest = m == null ? $.pointerTarget<RecordActivityTaskHeartbeatByIDRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RecordActivityTaskHeartbeatByIDRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as RecordActivityTaskHeartbeatByIDRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RecordActivityTaskHeartbeatByIDRequest).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as RecordActivityTaskHeartbeatByIDRequest).WorkflowExecution)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as RecordActivityTaskHeartbeatByIDRequest).ActivityId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RecordActivityTaskHeartbeatByIDRequest).Details != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as RecordActivityTaskHeartbeatByIDRequest).Details)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		l = $.stringLen((m$ as RecordActivityTaskHeartbeatByIDRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RecordActivityTaskHeartbeatByIDRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RecordActivityTaskHeartbeatByIDRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RecordActivityTaskHeartbeatByIDRequest | $.VarRef<RecordActivityTaskHeartbeatByIDRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RecordActivityTaskHeartbeatByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RecordActivityTaskHeartbeatByIDRequest | $.VarRef<RecordActivityTaskHeartbeatByIDRequest> | null = this;
		const m$: RecordActivityTaskHeartbeatByIDRequest = m == null ? $.pointerTarget<RecordActivityTaskHeartbeatByIDRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RecordActivityTaskHeartbeatByIDRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow23 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow23.backing as any[])[$.windowSlot(__goscriptSliceWindow23, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: RecordActivityTaskHeartbeatByIDRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RecordActivityTaskHeartbeatByIDRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow23.backing as any[])[$.windowSlot(__goscriptSliceWindow23, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RecordActivityTaskHeartbeatByIDRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowExecution", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow23.backing as any[])[$.windowSlot(__goscriptSliceWindow23, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RecordActivityTaskHeartbeatByIDRequest).WorkflowExecution == null) {
						;(m$ as RecordActivityTaskHeartbeatByIDRequest).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as RecordActivityTaskHeartbeatByIDRequest).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActivityId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow23.backing as any[])[$.windowSlot(__goscriptSliceWindow23, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RecordActivityTaskHeartbeatByIDRequest).ActivityId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Details", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow23.backing as any[])[$.windowSlot(__goscriptSliceWindow23, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RecordActivityTaskHeartbeatByIDRequest).Details == null) {
						;(m$ as RecordActivityTaskHeartbeatByIDRequest).Details = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as RecordActivityTaskHeartbeatByIDRequest).Details, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Identity", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow23.backing as any[])[$.windowSlot(__goscriptSliceWindow23, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RecordActivityTaskHeartbeatByIDRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RecordActivityTaskHeartbeatByIDRequest).XXX_unrecognized = $.appendSlice((m$ as RecordActivityTaskHeartbeatByIDRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RecordActivityTaskHeartbeatByIDRequest | $.VarRef<RecordActivityTaskHeartbeatByIDRequest> | null = this;
		xxx_messageInfo_RecordActivityTaskHeartbeatByIDRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RecordActivityTaskHeartbeatByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RecordActivityTaskHeartbeatByIDRequest | $.VarRef<RecordActivityTaskHeartbeatByIDRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RecordActivityTaskHeartbeatByIDRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RecordActivityTaskHeartbeatByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatByIDRequest).MarshalToSizedBuffer(b) : RecordActivityTaskHeartbeatByIDRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RecordActivityTaskHeartbeatByIDRequest | $.VarRef<RecordActivityTaskHeartbeatByIDRequest> | null = this;
		xxx_messageInfo_RecordActivityTaskHeartbeatByIDRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RecordActivityTaskHeartbeatByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDRequest")), src)
	}

	public XXX_Size(): number {
		const m: RecordActivityTaskHeartbeatByIDRequest | $.VarRef<RecordActivityTaskHeartbeatByIDRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatByIDRequest).Size() : RecordActivityTaskHeartbeatByIDRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RecordActivityTaskHeartbeatByIDRequest | $.VarRef<RecordActivityTaskHeartbeatByIDRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatByIDRequest).Unmarshal(b) : RecordActivityTaskHeartbeatByIDRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RecordActivityTaskHeartbeatByIDRequest",
		() => new RecordActivityTaskHeartbeatByIDRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActivityId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetDetails", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Payload") }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetIdentity", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetWorkflowExecution", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RecordActivityTaskHeartbeatByIDRequest,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "WorkflowExecution", key: "WorkflowExecution", type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }, { name: "ActivityId", key: "ActivityId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=activity_id,json=activityId,proto3\" json:\"activity_id,omitempty\"" }, { name: "Details", key: "Details", type: /* @__PURE__ */ $.pointerType("apiv1.Payload"), tag: "protobuf:\"bytes,4,opt,name=details,proto3\" json:\"details,omitempty\"" }, { name: "Identity", key: "Identity", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,5,opt,name=identity,proto3\" json:\"identity,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RecordActivityTaskHeartbeatByIDResponse {
	public get CancelRequested(): boolean {
		return this._fields.CancelRequested
	}

	public set CancelRequested(value: boolean) {
		this._fields.CancelRequested = value
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
		CancelRequested: boolean
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{CancelRequested?: boolean, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			CancelRequested: init?.CancelRequested ?? (false as boolean),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RecordActivityTaskHeartbeatByIDResponse {
		return new RecordActivityTaskHeartbeatByIDResponse(this, true)
	}

	public __goscriptAssign(source: RecordActivityTaskHeartbeatByIDResponse): void {
		const target = this._fields
		const values = source._fields
		target.CancelRequested = values.CancelRequested
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([23])]
	}

	public GetCancelRequested(): boolean {
		const m: RecordActivityTaskHeartbeatByIDResponse | $.VarRef<RecordActivityTaskHeartbeatByIDResponse> | null = this;
		if (m != null) {
			return $.pointerValue<RecordActivityTaskHeartbeatByIDResponse>(m).CancelRequested
		}
		return false
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RecordActivityTaskHeartbeatByIDResponse | $.VarRef<RecordActivityTaskHeartbeatByIDResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatByIDResponse).Size() : RecordActivityTaskHeartbeatByIDResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple23: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatByIDResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RecordActivityTaskHeartbeatByIDResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple23[0]
		err = __goscriptTuple23[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RecordActivityTaskHeartbeatByIDResponse | $.VarRef<RecordActivityTaskHeartbeatByIDResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatByIDResponse).Size() : RecordActivityTaskHeartbeatByIDResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatByIDResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RecordActivityTaskHeartbeatByIDResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RecordActivityTaskHeartbeatByIDResponse | $.VarRef<RecordActivityTaskHeartbeatByIDResponse> | null = this;
		const m$: RecordActivityTaskHeartbeatByIDResponse = m == null ? $.pointerTarget<RecordActivityTaskHeartbeatByIDResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RecordActivityTaskHeartbeatByIDResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RecordActivityTaskHeartbeatByIDResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RecordActivityTaskHeartbeatByIDResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RecordActivityTaskHeartbeatByIDResponse).XXX_unrecognized)
		}
		if ((m$ as RecordActivityTaskHeartbeatByIDResponse).CancelRequested) {
			i--
			if ((m$ as RecordActivityTaskHeartbeatByIDResponse).CancelRequested) {
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
		let m: RecordActivityTaskHeartbeatByIDResponse | $.VarRef<RecordActivityTaskHeartbeatByIDResponse> | null = this;
		$.assignStruct($.pointerValue<RecordActivityTaskHeartbeatByIDResponse>(m), $.markAsStructValue(new RecordActivityTaskHeartbeatByIDResponse()))
	}

	public Size(): number {
		const m: RecordActivityTaskHeartbeatByIDResponse | $.VarRef<RecordActivityTaskHeartbeatByIDResponse> | null = this;
		let n: number = 0
		const m$: RecordActivityTaskHeartbeatByIDResponse = m == null ? $.pointerTarget<RecordActivityTaskHeartbeatByIDResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RecordActivityTaskHeartbeatByIDResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as RecordActivityTaskHeartbeatByIDResponse).CancelRequested) {
			n = n + (2)
		}
		if ((m$ as RecordActivityTaskHeartbeatByIDResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RecordActivityTaskHeartbeatByIDResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RecordActivityTaskHeartbeatByIDResponse | $.VarRef<RecordActivityTaskHeartbeatByIDResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RecordActivityTaskHeartbeatByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RecordActivityTaskHeartbeatByIDResponse | $.VarRef<RecordActivityTaskHeartbeatByIDResponse> | null = this;
		const m$: RecordActivityTaskHeartbeatByIDResponse = m == null ? $.pointerTarget<RecordActivityTaskHeartbeatByIDResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RecordActivityTaskHeartbeatByIDResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow24 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow24.backing as any[])[$.windowSlot(__goscriptSliceWindow24, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: RecordActivityTaskHeartbeatByIDResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RecordActivityTaskHeartbeatByIDResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field CancelRequested", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow24.backing as any[])[$.windowSlot(__goscriptSliceWindow24, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as RecordActivityTaskHeartbeatByIDResponse).CancelRequested = (v != 0)
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RecordActivityTaskHeartbeatByIDResponse).XXX_unrecognized = $.appendSlice((m$ as RecordActivityTaskHeartbeatByIDResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RecordActivityTaskHeartbeatByIDResponse | $.VarRef<RecordActivityTaskHeartbeatByIDResponse> | null = this;
		xxx_messageInfo_RecordActivityTaskHeartbeatByIDResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RecordActivityTaskHeartbeatByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RecordActivityTaskHeartbeatByIDResponse | $.VarRef<RecordActivityTaskHeartbeatByIDResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RecordActivityTaskHeartbeatByIDResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RecordActivityTaskHeartbeatByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatByIDResponse).MarshalToSizedBuffer(b) : RecordActivityTaskHeartbeatByIDResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RecordActivityTaskHeartbeatByIDResponse | $.VarRef<RecordActivityTaskHeartbeatByIDResponse> | null = this;
		xxx_messageInfo_RecordActivityTaskHeartbeatByIDResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RecordActivityTaskHeartbeatByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDResponse")), src)
	}

	public XXX_Size(): number {
		const m: RecordActivityTaskHeartbeatByIDResponse | $.VarRef<RecordActivityTaskHeartbeatByIDResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatByIDResponse).Size() : RecordActivityTaskHeartbeatByIDResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RecordActivityTaskHeartbeatByIDResponse | $.VarRef<RecordActivityTaskHeartbeatByIDResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RecordActivityTaskHeartbeatByIDResponse).Unmarshal(b) : RecordActivityTaskHeartbeatByIDResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RecordActivityTaskHeartbeatByIDResponse",
		() => new RecordActivityTaskHeartbeatByIDResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetCancelRequested", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RecordActivityTaskHeartbeatByIDResponse,
		() => [{ name: "CancelRequested", key: "CancelRequested", type: /* @__PURE__ */ $.basicType("bool"), tag: "protobuf:\"varint,1,opt,name=cancel_requested,json=cancelRequested,proto3\" json:\"cancel_requested,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondQueryTaskCompletedRequest {
	public get TaskToken(): $.Slice<number> {
		return this._fields.TaskToken
	}

	public set TaskToken(value: $.Slice<number>) {
		this._fields.TaskToken = value
	}

	public get Result(): __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null {
		return this._fields.Result
	}

	public set Result(value: __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null) {
		this._fields.Result = value
	}

	public get WorkerVersionInfo(): __goscript_common_pb.WorkerVersionInfo | $.VarRef<__goscript_common_pb.WorkerVersionInfo> | null {
		return this._fields.WorkerVersionInfo
	}

	public set WorkerVersionInfo(value: __goscript_common_pb.WorkerVersionInfo | $.VarRef<__goscript_common_pb.WorkerVersionInfo> | null) {
		this._fields.WorkerVersionInfo = value
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
		TaskToken: $.Slice<number>
		Result: __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null
		WorkerVersionInfo: __goscript_common_pb.WorkerVersionInfo | $.VarRef<__goscript_common_pb.WorkerVersionInfo> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{TaskToken?: $.Slice<number>, Result?: __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null, WorkerVersionInfo?: __goscript_common_pb.WorkerVersionInfo | $.VarRef<__goscript_common_pb.WorkerVersionInfo> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			TaskToken: init?.TaskToken ?? (null! as $.Slice<number>),
			Result: init?.Result ?? (null! as __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null),
			WorkerVersionInfo: init?.WorkerVersionInfo ?? (null! as __goscript_common_pb.WorkerVersionInfo | $.VarRef<__goscript_common_pb.WorkerVersionInfo> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RespondQueryTaskCompletedRequest {
		return new RespondQueryTaskCompletedRequest(this, true)
	}

	public __goscriptAssign(source: RespondQueryTaskCompletedRequest): void {
		const target = this._fields
		const values = source._fields
		target.TaskToken = values.TaskToken
		target.Result = values.Result
		target.WorkerVersionInfo = values.WorkerVersionInfo
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([24])]
	}

	public GetResult(): __goscript_query_pb.WorkflowQueryResult | $.VarRef<__goscript_query_pb.WorkflowQueryResult> | null {
		const m: RespondQueryTaskCompletedRequest | $.VarRef<RespondQueryTaskCompletedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondQueryTaskCompletedRequest>(m).Result
		}
		return null
	}

	public GetTaskToken(): $.Slice<number> {
		const m: RespondQueryTaskCompletedRequest | $.VarRef<RespondQueryTaskCompletedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondQueryTaskCompletedRequest>(m).TaskToken
		}
		return null
	}

	public GetWorkerVersionInfo(): __goscript_common_pb.WorkerVersionInfo | $.VarRef<__goscript_common_pb.WorkerVersionInfo> | null {
		const m: RespondQueryTaskCompletedRequest | $.VarRef<RespondQueryTaskCompletedRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RespondQueryTaskCompletedRequest>(m).WorkerVersionInfo
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondQueryTaskCompletedRequest | $.VarRef<RespondQueryTaskCompletedRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondQueryTaskCompletedRequest).Size() : RespondQueryTaskCompletedRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple24: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondQueryTaskCompletedRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondQueryTaskCompletedRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple24[0]
		err = __goscriptTuple24[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondQueryTaskCompletedRequest | $.VarRef<RespondQueryTaskCompletedRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondQueryTaskCompletedRequest).Size() : RespondQueryTaskCompletedRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondQueryTaskCompletedRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondQueryTaskCompletedRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondQueryTaskCompletedRequest | $.VarRef<RespondQueryTaskCompletedRequest> | null = this;
		const m$: RespondQueryTaskCompletedRequest = m == null ? $.pointerTarget<RespondQueryTaskCompletedRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondQueryTaskCompletedRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondQueryTaskCompletedRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondQueryTaskCompletedRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondQueryTaskCompletedRequest).XXX_unrecognized)
		}
		if ((m$ as RespondQueryTaskCompletedRequest).WorkerVersionInfo != null) {
			{
				let [size, err] = __goscript_common_pb.WorkerVersionInfo.prototype.MarshalToSizedBuffer.call((m$ as RespondQueryTaskCompletedRequest).WorkerVersionInfo, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as RespondQueryTaskCompletedRequest).Result != null) {
			{
				let [size, err] = __goscript_query_pb.WorkflowQueryResult.prototype.MarshalToSizedBuffer.call((m$ as RespondQueryTaskCompletedRequest).Result, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.sliceLen((m$ as RespondQueryTaskCompletedRequest).TaskToken) > 0) {
			i = i - ($.sliceLen((m$ as RespondQueryTaskCompletedRequest).TaskToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondQueryTaskCompletedRequest).TaskToken)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.sliceLen((m$ as RespondQueryTaskCompletedRequest).TaskToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondQueryTaskCompletedRequest | $.VarRef<RespondQueryTaskCompletedRequest> | null = this;
		$.assignStruct($.pointerValue<RespondQueryTaskCompletedRequest>(m), $.markAsStructValue(new RespondQueryTaskCompletedRequest()))
	}

	public Size(): number {
		const m: RespondQueryTaskCompletedRequest | $.VarRef<RespondQueryTaskCompletedRequest> | null = this;
		let n: number = 0
		const m$: RespondQueryTaskCompletedRequest = m == null ? $.pointerTarget<RespondQueryTaskCompletedRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondQueryTaskCompletedRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.sliceLen((m$ as RespondQueryTaskCompletedRequest).TaskToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondQueryTaskCompletedRequest).Result != null) {
			l = __goscript_query_pb.WorkflowQueryResult.prototype.Size.call((m$ as RespondQueryTaskCompletedRequest).Result)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondQueryTaskCompletedRequest).WorkerVersionInfo != null) {
			l = __goscript_common_pb.WorkerVersionInfo.prototype.Size.call((m$ as RespondQueryTaskCompletedRequest).WorkerVersionInfo)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as RespondQueryTaskCompletedRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondQueryTaskCompletedRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondQueryTaskCompletedRequest | $.VarRef<RespondQueryTaskCompletedRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondQueryTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondQueryTaskCompletedRequest | $.VarRef<RespondQueryTaskCompletedRequest> | null = this;
		const m$: RespondQueryTaskCompletedRequest = m == null ? $.pointerTarget<RespondQueryTaskCompletedRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondQueryTaskCompletedRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow25 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow25.backing as any[])[$.windowSlot(__goscriptSliceWindow25, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: RespondQueryTaskCompletedRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondQueryTaskCompletedRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow25.backing as any[])[$.windowSlot(__goscriptSliceWindow25, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondQueryTaskCompletedRequest).TaskToken = $.appendSlice($.goSlice((m$ as RespondQueryTaskCompletedRequest).TaskToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as RespondQueryTaskCompletedRequest).TaskToken == null) {
						;(m$ as RespondQueryTaskCompletedRequest).TaskToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Result", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow25.backing as any[])[$.windowSlot(__goscriptSliceWindow25, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondQueryTaskCompletedRequest).Result == null) {
						;(m$ as RespondQueryTaskCompletedRequest).Result = new __goscript_query_pb.WorkflowQueryResult()
					}
					{
						let err = __goscript_query_pb.WorkflowQueryResult.prototype.Unmarshal.call((m$ as RespondQueryTaskCompletedRequest).Result, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkerVersionInfo", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow25.backing as any[])[$.windowSlot(__goscriptSliceWindow25, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RespondQueryTaskCompletedRequest).WorkerVersionInfo == null) {
						;(m$ as RespondQueryTaskCompletedRequest).WorkerVersionInfo = new __goscript_common_pb.WorkerVersionInfo()
					}
					{
						let err = __goscript_common_pb.WorkerVersionInfo.prototype.Unmarshal.call((m$ as RespondQueryTaskCompletedRequest).WorkerVersionInfo, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondQueryTaskCompletedRequest).XXX_unrecognized = $.appendSlice((m$ as RespondQueryTaskCompletedRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondQueryTaskCompletedRequest | $.VarRef<RespondQueryTaskCompletedRequest> | null = this;
		xxx_messageInfo_RespondQueryTaskCompletedRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondQueryTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondQueryTaskCompletedRequest | $.VarRef<RespondQueryTaskCompletedRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondQueryTaskCompletedRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondQueryTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondQueryTaskCompletedRequest).MarshalToSizedBuffer(b) : RespondQueryTaskCompletedRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondQueryTaskCompletedRequest | $.VarRef<RespondQueryTaskCompletedRequest> | null = this;
		xxx_messageInfo_RespondQueryTaskCompletedRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondQueryTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedRequest")), src)
	}

	public XXX_Size(): number {
		const m: RespondQueryTaskCompletedRequest | $.VarRef<RespondQueryTaskCompletedRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondQueryTaskCompletedRequest).Size() : RespondQueryTaskCompletedRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondQueryTaskCompletedRequest | $.VarRef<RespondQueryTaskCompletedRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondQueryTaskCompletedRequest).Unmarshal(b) : RespondQueryTaskCompletedRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondQueryTaskCompletedRequest",
		() => new RespondQueryTaskCompletedRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetResult", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowQueryResult") }], pointerReceiver: true }, { name: "GetTaskToken", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "GetWorkerVersionInfo", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.WorkerVersionInfo") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondQueryTaskCompletedRequest,
		() => [{ name: "TaskToken", key: "TaskToken", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,1,opt,name=task_token,json=taskToken,proto3\" json:\"task_token,omitempty\"" }, { name: "Result", key: "Result", type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowQueryResult"), tag: "protobuf:\"bytes,2,opt,name=result,proto3\" json:\"result,omitempty\"" }, { name: "WorkerVersionInfo", key: "WorkerVersionInfo", type: /* @__PURE__ */ $.pointerType("apiv1.WorkerVersionInfo"), tag: "protobuf:\"bytes,3,opt,name=worker_version_info,json=workerVersionInfo,proto3\" json:\"worker_version_info,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RespondQueryTaskCompletedResponse {
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

	public clone(): RespondQueryTaskCompletedResponse {
		return new RespondQueryTaskCompletedResponse(this, true)
	}

	public __goscriptAssign(source: RespondQueryTaskCompletedResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([25])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RespondQueryTaskCompletedResponse | $.VarRef<RespondQueryTaskCompletedResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondQueryTaskCompletedResponse).Size() : RespondQueryTaskCompletedResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple25: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondQueryTaskCompletedResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondQueryTaskCompletedResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple25[0]
		err = __goscriptTuple25[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondQueryTaskCompletedResponse | $.VarRef<RespondQueryTaskCompletedResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondQueryTaskCompletedResponse).Size() : RespondQueryTaskCompletedResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondQueryTaskCompletedResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RespondQueryTaskCompletedResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RespondQueryTaskCompletedResponse | $.VarRef<RespondQueryTaskCompletedResponse> | null = this;
		const m$: RespondQueryTaskCompletedResponse = m == null ? $.pointerTarget<RespondQueryTaskCompletedResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondQueryTaskCompletedResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RespondQueryTaskCompletedResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RespondQueryTaskCompletedResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RespondQueryTaskCompletedResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RespondQueryTaskCompletedResponse | $.VarRef<RespondQueryTaskCompletedResponse> | null = this;
		$.assignStruct($.pointerValue<RespondQueryTaskCompletedResponse>(m), new RespondQueryTaskCompletedResponse(undefined, true))
	}

	public Size(): number {
		const m: RespondQueryTaskCompletedResponse | $.VarRef<RespondQueryTaskCompletedResponse> | null = this;
		let n: number = 0
		const m$: RespondQueryTaskCompletedResponse = m == null ? $.pointerTarget<RespondQueryTaskCompletedResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondQueryTaskCompletedResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as RespondQueryTaskCompletedResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RespondQueryTaskCompletedResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RespondQueryTaskCompletedResponse | $.VarRef<RespondQueryTaskCompletedResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondQueryTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RespondQueryTaskCompletedResponse | $.VarRef<RespondQueryTaskCompletedResponse> | null = this;
		const m$: RespondQueryTaskCompletedResponse = m == null ? $.pointerTarget<RespondQueryTaskCompletedResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RespondQueryTaskCompletedResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow26 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow26.backing as any[])[$.windowSlot(__goscriptSliceWindow26, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: RespondQueryTaskCompletedResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RespondQueryTaskCompletedResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RespondQueryTaskCompletedResponse).XXX_unrecognized = $.appendSlice((m$ as RespondQueryTaskCompletedResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RespondQueryTaskCompletedResponse | $.VarRef<RespondQueryTaskCompletedResponse> | null = this;
		xxx_messageInfo_RespondQueryTaskCompletedResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondQueryTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RespondQueryTaskCompletedResponse | $.VarRef<RespondQueryTaskCompletedResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RespondQueryTaskCompletedResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RespondQueryTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondQueryTaskCompletedResponse).MarshalToSizedBuffer(b) : RespondQueryTaskCompletedResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RespondQueryTaskCompletedResponse | $.VarRef<RespondQueryTaskCompletedResponse> | null = this;
		xxx_messageInfo_RespondQueryTaskCompletedResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RespondQueryTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedResponse")), src)
	}

	public XXX_Size(): number {
		const m: RespondQueryTaskCompletedResponse | $.VarRef<RespondQueryTaskCompletedResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondQueryTaskCompletedResponse).Size() : RespondQueryTaskCompletedResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RespondQueryTaskCompletedResponse | $.VarRef<RespondQueryTaskCompletedResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RespondQueryTaskCompletedResponse).Unmarshal(b) : RespondQueryTaskCompletedResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RespondQueryTaskCompletedResponse",
		() => new RespondQueryTaskCompletedResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RespondQueryTaskCompletedResponse,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ResetStickyTaskListRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get WorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		return this._fields.WorkflowExecution
	}

	public set WorkflowExecution(value: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null) {
		this._fields.WorkflowExecution = value
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
		WorkflowExecution: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ResetStickyTaskListRequest {
		return new ResetStickyTaskListRequest(this, true)
	}

	public __goscriptAssign(source: ResetStickyTaskListRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowExecution = values.WorkflowExecution
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([26])]
	}

	public GetDomain(): string {
		const m: ResetStickyTaskListRequest | $.VarRef<ResetStickyTaskListRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ResetStickyTaskListRequest>(m).Domain
		}
		return ""
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: ResetStickyTaskListRequest | $.VarRef<ResetStickyTaskListRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ResetStickyTaskListRequest>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ResetStickyTaskListRequest | $.VarRef<ResetStickyTaskListRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetStickyTaskListRequest).Size() : ResetStickyTaskListRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple26: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetStickyTaskListRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ResetStickyTaskListRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple26[0]
		err = __goscriptTuple26[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ResetStickyTaskListRequest | $.VarRef<ResetStickyTaskListRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetStickyTaskListRequest).Size() : ResetStickyTaskListRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetStickyTaskListRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ResetStickyTaskListRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ResetStickyTaskListRequest | $.VarRef<ResetStickyTaskListRequest> | null = this;
		const m$: ResetStickyTaskListRequest = m == null ? $.pointerTarget<ResetStickyTaskListRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetStickyTaskListRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ResetStickyTaskListRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ResetStickyTaskListRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResetStickyTaskListRequest).XXX_unrecognized)
		}
		if ((m$ as ResetStickyTaskListRequest).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as ResetStickyTaskListRequest).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorker(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as ResetStickyTaskListRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as ResetStickyTaskListRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResetStickyTaskListRequest).Domain)
			i = encodeVarintServiceWorker(dAtA, i, $.uint64($.stringLen((m$ as ResetStickyTaskListRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ResetStickyTaskListRequest | $.VarRef<ResetStickyTaskListRequest> | null = this;
		$.assignStruct($.pointerValue<ResetStickyTaskListRequest>(m), $.markAsStructValue(new ResetStickyTaskListRequest()))
	}

	public Size(): number {
		const m: ResetStickyTaskListRequest | $.VarRef<ResetStickyTaskListRequest> | null = this;
		let n: number = 0
		const m$: ResetStickyTaskListRequest = m == null ? $.pointerTarget<ResetStickyTaskListRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetStickyTaskListRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ResetStickyTaskListRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as ResetStickyTaskListRequest).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as ResetStickyTaskListRequest).WorkflowExecution)
			n = n + ((1 + l) + sovServiceWorker($.uint64(l)))
		}
		if ((m$ as ResetStickyTaskListRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ResetStickyTaskListRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ResetStickyTaskListRequest | $.VarRef<ResetStickyTaskListRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetStickyTaskListRequest", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ResetStickyTaskListRequest | $.VarRef<ResetStickyTaskListRequest> | null = this;
		const m$: ResetStickyTaskListRequest = m == null ? $.pointerTarget<ResetStickyTaskListRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetStickyTaskListRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow27 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow27.backing as any[])[$.windowSlot(__goscriptSliceWindow27, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: ResetStickyTaskListRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ResetStickyTaskListRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow27.backing as any[])[$.windowSlot(__goscriptSliceWindow27, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResetStickyTaskListRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowExecution", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow27.backing as any[])[$.windowSlot(__goscriptSliceWindow27, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorker
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorker
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ResetStickyTaskListRequest).WorkflowExecution == null) {
						;(m$ as ResetStickyTaskListRequest).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as ResetStickyTaskListRequest).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResetStickyTaskListRequest).XXX_unrecognized = $.appendSlice((m$ as ResetStickyTaskListRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ResetStickyTaskListRequest | $.VarRef<ResetStickyTaskListRequest> | null = this;
		xxx_messageInfo_ResetStickyTaskListRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetStickyTaskListRequest", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ResetStickyTaskListRequest | $.VarRef<ResetStickyTaskListRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ResetStickyTaskListRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ResetStickyTaskListRequest", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetStickyTaskListRequest).MarshalToSizedBuffer(b) : ResetStickyTaskListRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ResetStickyTaskListRequest | $.VarRef<ResetStickyTaskListRequest> | null = this;
		xxx_messageInfo_ResetStickyTaskListRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetStickyTaskListRequest", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListRequest")), src)
	}

	public XXX_Size(): number {
		const m: ResetStickyTaskListRequest | $.VarRef<ResetStickyTaskListRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetStickyTaskListRequest).Size() : ResetStickyTaskListRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ResetStickyTaskListRequest | $.VarRef<ResetStickyTaskListRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetStickyTaskListRequest).Unmarshal(b) : ResetStickyTaskListRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ResetStickyTaskListRequest",
		() => new ResetStickyTaskListRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetWorkflowExecution", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ResetStickyTaskListRequest,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "WorkflowExecution", key: "WorkflowExecution", type: /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ResetStickyTaskListResponse {
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

	public clone(): ResetStickyTaskListResponse {
		return new ResetStickyTaskListResponse(this, true)
	}

	public __goscriptAssign(source: ResetStickyTaskListResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([27])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ResetStickyTaskListResponse | $.VarRef<ResetStickyTaskListResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetStickyTaskListResponse).Size() : ResetStickyTaskListResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple27: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetStickyTaskListResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ResetStickyTaskListResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple27[0]
		err = __goscriptTuple27[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ResetStickyTaskListResponse | $.VarRef<ResetStickyTaskListResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetStickyTaskListResponse).Size() : ResetStickyTaskListResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetStickyTaskListResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ResetStickyTaskListResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ResetStickyTaskListResponse | $.VarRef<ResetStickyTaskListResponse> | null = this;
		const m$: ResetStickyTaskListResponse = m == null ? $.pointerTarget<ResetStickyTaskListResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetStickyTaskListResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ResetStickyTaskListResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ResetStickyTaskListResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResetStickyTaskListResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ResetStickyTaskListResponse | $.VarRef<ResetStickyTaskListResponse> | null = this;
		$.assignStruct($.pointerValue<ResetStickyTaskListResponse>(m), new ResetStickyTaskListResponse(undefined, true))
	}

	public Size(): number {
		const m: ResetStickyTaskListResponse | $.VarRef<ResetStickyTaskListResponse> | null = this;
		let n: number = 0
		const m$: ResetStickyTaskListResponse = m == null ? $.pointerTarget<ResetStickyTaskListResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetStickyTaskListResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as ResetStickyTaskListResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ResetStickyTaskListResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ResetStickyTaskListResponse | $.VarRef<ResetStickyTaskListResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetStickyTaskListResponse", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ResetStickyTaskListResponse | $.VarRef<ResetStickyTaskListResponse> | null = this;
		const m$: ResetStickyTaskListResponse = m == null ? $.pointerTarget<ResetStickyTaskListResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetStickyTaskListResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow28 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow28.backing as any[])[$.windowSlot(__goscriptSliceWindow28, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: ResetStickyTaskListResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ResetStickyTaskListResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResetStickyTaskListResponse).XXX_unrecognized = $.appendSlice((m$ as ResetStickyTaskListResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ResetStickyTaskListResponse | $.VarRef<ResetStickyTaskListResponse> | null = this;
		xxx_messageInfo_ResetStickyTaskListResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetStickyTaskListResponse", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ResetStickyTaskListResponse | $.VarRef<ResetStickyTaskListResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ResetStickyTaskListResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ResetStickyTaskListResponse", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetStickyTaskListResponse).MarshalToSizedBuffer(b) : ResetStickyTaskListResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ResetStickyTaskListResponse | $.VarRef<ResetStickyTaskListResponse> | null = this;
		xxx_messageInfo_ResetStickyTaskListResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetStickyTaskListResponse", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListResponse")), src)
	}

	public XXX_Size(): number {
		const m: ResetStickyTaskListResponse | $.VarRef<ResetStickyTaskListResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetStickyTaskListResponse).Size() : ResetStickyTaskListResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ResetStickyTaskListResponse | $.VarRef<ResetStickyTaskListResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetStickyTaskListResponse).Unmarshal(b) : ResetStickyTaskListResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ResetStickyTaskListResponse",
		() => new ResetStickyTaskListResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ResetStickyTaskListResponse,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class AutoConfigHint {
	public get EnableAutoConfig(): boolean {
		return this._fields.EnableAutoConfig
	}

	public set EnableAutoConfig(value: boolean) {
		this._fields.EnableAutoConfig = value
	}

	public get PollerWaitTimeInMs(): bigint {
		return this._fields.PollerWaitTimeInMs
	}

	public set PollerWaitTimeInMs(value: bigint) {
		this._fields.PollerWaitTimeInMs = value
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
		EnableAutoConfig: boolean
		PollerWaitTimeInMs: bigint
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{EnableAutoConfig?: boolean, PollerWaitTimeInMs?: bigint, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			EnableAutoConfig: init?.EnableAutoConfig ?? (false as boolean),
			PollerWaitTimeInMs: init?.PollerWaitTimeInMs ?? (0n as bigint),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): AutoConfigHint {
		return new AutoConfigHint(this, true)
	}

	public __goscriptAssign(source: AutoConfigHint): void {
		const target = this._fields
		const values = source._fields
		target.EnableAutoConfig = values.EnableAutoConfig
		target.PollerWaitTimeInMs = values.PollerWaitTimeInMs
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_00684e887839a48c, $.arrayToSlice<number>([28])]
	}

	public GetEnableAutoConfig(): boolean {
		const m: AutoConfigHint | $.VarRef<AutoConfigHint> | null = this;
		if (m != null) {
			return $.pointerValue<AutoConfigHint>(m).EnableAutoConfig
		}
		return false
	}

	public GetPollerWaitTimeInMs(): bigint {
		const m: AutoConfigHint | $.VarRef<AutoConfigHint> | null = this;
		if (m != null) {
			return $.pointerValue<AutoConfigHint>(m).PollerWaitTimeInMs
		}
		return 0n
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: AutoConfigHint | $.VarRef<AutoConfigHint> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as AutoConfigHint).Size() : AutoConfigHint.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple28: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as AutoConfigHint).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : AutoConfigHint.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple28[0]
		err = __goscriptTuple28[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: AutoConfigHint | $.VarRef<AutoConfigHint> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as AutoConfigHint).Size() : AutoConfigHint.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as AutoConfigHint).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : AutoConfigHint.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: AutoConfigHint | $.VarRef<AutoConfigHint> | null = this;
		const m$: AutoConfigHint = m == null ? $.pointerTarget<AutoConfigHint>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<AutoConfigHint>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as AutoConfigHint).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as AutoConfigHint).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as AutoConfigHint).XXX_unrecognized)
		}
		if ((m$ as AutoConfigHint).PollerWaitTimeInMs != 0n) {
			i = encodeVarintServiceWorker(dAtA, i, $.uint64((m$ as AutoConfigHint).PollerWaitTimeInMs))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ((m$ as AutoConfigHint).EnableAutoConfig) {
			i--
			if ((m$ as AutoConfigHint).EnableAutoConfig) {
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
		let m: AutoConfigHint | $.VarRef<AutoConfigHint> | null = this;
		$.assignStruct($.pointerValue<AutoConfigHint>(m), $.markAsStructValue(new AutoConfigHint()))
	}

	public Size(): number {
		const m: AutoConfigHint | $.VarRef<AutoConfigHint> | null = this;
		let n: number = 0
		const m$: AutoConfigHint = m == null ? $.pointerTarget<AutoConfigHint>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<AutoConfigHint>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as AutoConfigHint).EnableAutoConfig) {
			n = n + (2)
		}
		if ((m$ as AutoConfigHint).PollerWaitTimeInMs != 0n) {
			n = n + (1 + sovServiceWorker($.uint64((m$ as AutoConfigHint).PollerWaitTimeInMs)))
		}
		if ((m$ as AutoConfigHint).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as AutoConfigHint).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: AutoConfigHint | $.VarRef<AutoConfigHint> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.AutoConfigHint", /* @__PURE__ */ $.pointerType("apiv1.AutoConfigHint")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: AutoConfigHint | $.VarRef<AutoConfigHint> | null = this;
		const m$: AutoConfigHint = m == null ? $.pointerTarget<AutoConfigHint>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<AutoConfigHint>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow29 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorker
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow29.backing as any[])[$.windowSlot(__goscriptSliceWindow29, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: AutoConfigHint: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: AutoConfigHint: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field EnableAutoConfig", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow29.backing as any[])[$.windowSlot(__goscriptSliceWindow29, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as AutoConfigHint).EnableAutoConfig = (v != 0)
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field PollerWaitTimeInMs", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as AutoConfigHint).PollerWaitTimeInMs = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorker
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow29.backing as any[])[$.windowSlot(__goscriptSliceWindow29, iNdEx)] as number)
						iNdEx++;
						;(m$ as AutoConfigHint).PollerWaitTimeInMs = $.int64Or((m$ as AutoConfigHint).PollerWaitTimeInMs, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorker($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorker
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as AutoConfigHint).XXX_unrecognized = $.appendSlice((m$ as AutoConfigHint).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: AutoConfigHint | $.VarRef<AutoConfigHint> | null = this;
		xxx_messageInfo_AutoConfigHint.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.AutoConfigHint", /* @__PURE__ */ $.pointerType("apiv1.AutoConfigHint")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: AutoConfigHint | $.VarRef<AutoConfigHint> | null = this;
		if (deterministic) {
			return xxx_messageInfo_AutoConfigHint.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.AutoConfigHint", /* @__PURE__ */ $.pointerType("apiv1.AutoConfigHint")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as AutoConfigHint).MarshalToSizedBuffer(b) : AutoConfigHint.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: AutoConfigHint | $.VarRef<AutoConfigHint> | null = this;
		xxx_messageInfo_AutoConfigHint.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.AutoConfigHint", /* @__PURE__ */ $.pointerType("apiv1.AutoConfigHint")), src)
	}

	public XXX_Size(): number {
		const m: AutoConfigHint | $.VarRef<AutoConfigHint> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as AutoConfigHint).Size() : AutoConfigHint.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: AutoConfigHint | $.VarRef<AutoConfigHint> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as AutoConfigHint).Unmarshal(b) : AutoConfigHint.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.AutoConfigHint",
		() => new AutoConfigHint(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetEnableAutoConfig", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetPollerWaitTimeInMs", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		AutoConfigHint,
		() => [{ name: "EnableAutoConfig", key: "EnableAutoConfig", type: /* @__PURE__ */ $.basicType("bool"), tag: "protobuf:\"varint,1,opt,name=enable_auto_config,json=enableAutoConfig,proto3\" json:\"enable_auto_config,omitempty\"" }, { name: "PollerWaitTimeInMs", key: "PollerWaitTimeInMs", type: /* @__PURE__ */ $.basicType("int64"), tag: "protobuf:\"varint,2,opt,name=poller_wait_time_in_ms,json=pollerWaitTimeInMs,proto3\" json:\"poller_wait_time_in_ms,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export let xxx_messageInfo_PollForDecisionTaskRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_PollForDecisionTaskRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_PollForDecisionTaskRequest.value, __goscriptValue)
}

export let xxx_messageInfo_PollForDecisionTaskResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_PollForDecisionTaskResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_PollForDecisionTaskResponse.value, __goscriptValue)
}

export let xxx_messageInfo_RespondDecisionTaskCompletedRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondDecisionTaskCompletedRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondDecisionTaskCompletedRequest.value, __goscriptValue)
}

export let xxx_messageInfo_RespondDecisionTaskCompletedResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondDecisionTaskCompletedResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondDecisionTaskCompletedResponse.value, __goscriptValue)
}

export let xxx_messageInfo_RespondDecisionTaskFailedRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondDecisionTaskFailedRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondDecisionTaskFailedRequest.value, __goscriptValue)
}

export let xxx_messageInfo_RespondDecisionTaskFailedResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondDecisionTaskFailedResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondDecisionTaskFailedResponse.value, __goscriptValue)
}

export let xxx_messageInfo_PollForActivityTaskRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_PollForActivityTaskRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_PollForActivityTaskRequest.value, __goscriptValue)
}

export let xxx_messageInfo_PollForActivityTaskResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_PollForActivityTaskResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_PollForActivityTaskResponse.value, __goscriptValue)
}

export let xxx_messageInfo_RespondActivityTaskCompletedRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondActivityTaskCompletedRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondActivityTaskCompletedRequest.value, __goscriptValue)
}

export let xxx_messageInfo_RespondActivityTaskCompletedResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondActivityTaskCompletedResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondActivityTaskCompletedResponse.value, __goscriptValue)
}

export let xxx_messageInfo_RespondActivityTaskCompletedByIDRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondActivityTaskCompletedByIDRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondActivityTaskCompletedByIDRequest.value, __goscriptValue)
}

export let xxx_messageInfo_RespondActivityTaskCompletedByIDResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondActivityTaskCompletedByIDResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondActivityTaskCompletedByIDResponse.value, __goscriptValue)
}

export let xxx_messageInfo_RespondActivityTaskFailedRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondActivityTaskFailedRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondActivityTaskFailedRequest.value, __goscriptValue)
}

export let xxx_messageInfo_RespondActivityTaskFailedResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondActivityTaskFailedResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondActivityTaskFailedResponse.value, __goscriptValue)
}

export let xxx_messageInfo_RespondActivityTaskFailedByIDRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondActivityTaskFailedByIDRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondActivityTaskFailedByIDRequest.value, __goscriptValue)
}

export let xxx_messageInfo_RespondActivityTaskFailedByIDResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondActivityTaskFailedByIDResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondActivityTaskFailedByIDResponse.value, __goscriptValue)
}

export let xxx_messageInfo_RespondActivityTaskCanceledRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondActivityTaskCanceledRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondActivityTaskCanceledRequest.value, __goscriptValue)
}

export let xxx_messageInfo_RespondActivityTaskCanceledResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondActivityTaskCanceledResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondActivityTaskCanceledResponse.value, __goscriptValue)
}

export let xxx_messageInfo_RespondActivityTaskCanceledByIDRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondActivityTaskCanceledByIDRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondActivityTaskCanceledByIDRequest.value, __goscriptValue)
}

export let xxx_messageInfo_RespondActivityTaskCanceledByIDResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondActivityTaskCanceledByIDResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondActivityTaskCanceledByIDResponse.value, __goscriptValue)
}

export let xxx_messageInfo_RecordActivityTaskHeartbeatRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RecordActivityTaskHeartbeatRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RecordActivityTaskHeartbeatRequest.value, __goscriptValue)
}

export let xxx_messageInfo_RecordActivityTaskHeartbeatResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RecordActivityTaskHeartbeatResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RecordActivityTaskHeartbeatResponse.value, __goscriptValue)
}

export let xxx_messageInfo_RecordActivityTaskHeartbeatByIDRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RecordActivityTaskHeartbeatByIDRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RecordActivityTaskHeartbeatByIDRequest.value, __goscriptValue)
}

export let xxx_messageInfo_RecordActivityTaskHeartbeatByIDResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RecordActivityTaskHeartbeatByIDResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RecordActivityTaskHeartbeatByIDResponse.value, __goscriptValue)
}

export let xxx_messageInfo_RespondQueryTaskCompletedRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondQueryTaskCompletedRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondQueryTaskCompletedRequest.value, __goscriptValue)
}

export let xxx_messageInfo_RespondQueryTaskCompletedResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RespondQueryTaskCompletedResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RespondQueryTaskCompletedResponse.value, __goscriptValue)
}

export let xxx_messageInfo_ResetStickyTaskListRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ResetStickyTaskListRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ResetStickyTaskListRequest.value, __goscriptValue)
}

export let xxx_messageInfo_ResetStickyTaskListResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ResetStickyTaskListResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ResetStickyTaskListResponse.value, __goscriptValue)
}

export let xxx_messageInfo_AutoConfigHint: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_AutoConfigHint(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_AutoConfigHint.value, __goscriptValue)
}

function __goscriptInit0(): void {
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.PollForDecisionTaskRequest", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskRequest")), "uber.cadence.api.v1.PollForDecisionTaskRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.PollForDecisionTaskResponse", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskResponse")), "uber.cadence.api.v1.PollForDecisionTaskResponse")
	proto.RegisterMapType($.interfaceValue(null, "map[string]*apiv1.WorkflowQuery", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.WorkflowQuery"))), "uber.cadence.api.v1.PollForDecisionTaskResponse.QueriesEntry")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondDecisionTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedRequest")), "uber.cadence.api.v1.RespondDecisionTaskCompletedRequest")
	proto.RegisterMapType($.interfaceValue(null, "map[string]*apiv1.WorkflowQueryResult", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.WorkflowQueryResult"))), "uber.cadence.api.v1.RespondDecisionTaskCompletedRequest.QueryResultsEntry")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondDecisionTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedResponse")), "uber.cadence.api.v1.RespondDecisionTaskCompletedResponse")
	proto.RegisterMapType($.interfaceValue(null, "map[string]*apiv1.ActivityLocalDispatchInfo", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.ActivityLocalDispatchInfo"))), "uber.cadence.api.v1.RespondDecisionTaskCompletedResponse.ActivitiesToDispatchLocallyEntry")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondDecisionTaskFailedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedRequest")), "uber.cadence.api.v1.RespondDecisionTaskFailedRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondDecisionTaskFailedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedResponse")), "uber.cadence.api.v1.RespondDecisionTaskFailedResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.PollForActivityTaskRequest", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskRequest")), "uber.cadence.api.v1.PollForActivityTaskRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.PollForActivityTaskResponse", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskResponse")), "uber.cadence.api.v1.PollForActivityTaskResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondActivityTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedRequest")), "uber.cadence.api.v1.RespondActivityTaskCompletedRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondActivityTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedResponse")), "uber.cadence.api.v1.RespondActivityTaskCompletedResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondActivityTaskCompletedByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDRequest")), "uber.cadence.api.v1.RespondActivityTaskCompletedByIDRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondActivityTaskCompletedByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDResponse")), "uber.cadence.api.v1.RespondActivityTaskCompletedByIDResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondActivityTaskFailedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedRequest")), "uber.cadence.api.v1.RespondActivityTaskFailedRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondActivityTaskFailedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedResponse")), "uber.cadence.api.v1.RespondActivityTaskFailedResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondActivityTaskFailedByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDRequest")), "uber.cadence.api.v1.RespondActivityTaskFailedByIDRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondActivityTaskFailedByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDResponse")), "uber.cadence.api.v1.RespondActivityTaskFailedByIDResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondActivityTaskCanceledRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledRequest")), "uber.cadence.api.v1.RespondActivityTaskCanceledRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondActivityTaskCanceledResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledResponse")), "uber.cadence.api.v1.RespondActivityTaskCanceledResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondActivityTaskCanceledByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDRequest")), "uber.cadence.api.v1.RespondActivityTaskCanceledByIDRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondActivityTaskCanceledByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDResponse")), "uber.cadence.api.v1.RespondActivityTaskCanceledByIDResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RecordActivityTaskHeartbeatRequest", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatRequest")), "uber.cadence.api.v1.RecordActivityTaskHeartbeatRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RecordActivityTaskHeartbeatResponse", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatResponse")), "uber.cadence.api.v1.RecordActivityTaskHeartbeatResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RecordActivityTaskHeartbeatByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDRequest")), "uber.cadence.api.v1.RecordActivityTaskHeartbeatByIDRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RecordActivityTaskHeartbeatByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDResponse")), "uber.cadence.api.v1.RecordActivityTaskHeartbeatByIDResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondQueryTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedRequest")), "uber.cadence.api.v1.RespondQueryTaskCompletedRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RespondQueryTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedResponse")), "uber.cadence.api.v1.RespondQueryTaskCompletedResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ResetStickyTaskListRequest", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListRequest")), "uber.cadence.api.v1.ResetStickyTaskListRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ResetStickyTaskListResponse", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListResponse")), "uber.cadence.api.v1.ResetStickyTaskListResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.AutoConfigHint", /* @__PURE__ */ $.pointerType("apiv1.AutoConfigHint")), "uber.cadence.api.v1.AutoConfigHint")
}

function __goscriptInit1(): void {
	proto.RegisterFile("uber/cadence/api/v1/service_worker.proto", fileDescriptor_00684e887839a48c)
}

export let fileDescriptor_00684e887839a48c: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 228, 90, 205, 111, 219, 200, 21, 7, 109, 203, 31, 207, 95, 242, 4, 117, 101, 37, 113, 28, 165, 73, 188, 109, 42, 55, 222, 109, 54, 155, 108, 138, 250, 35, 70, 92, 108, 182, 94, 70, 155, 0, 91, 32, 196, 136, 28, 91, 3, 83, 28, 133, 28, 90, 209, 165, 135, 30, 219, 30, 10, 20, 216, 94, 10, 228, 220, 63, 160, 255, 67, 143, 189, 244, 210, 94, 182, 185, 246, 111, 40, 80, 112, 102, 72, 81, 210, 144, 250, 104, 1, 47, 208, 155, 57, 252, 189, 199, 55, 191, 247, 230, 205, 111, 198, 130, 237, 176, 78, 252, 29, 27, 59, 196, 179, 201, 14, 110, 209, 157, 139, 251, 59, 1, 241, 47, 168, 77, 172, 54, 243, 207, 137, 95, 109, 249, 140, 51, 116, 37, 66, 86, 21, 178, 138, 91, 180, 122, 113, 191, 188, 121, 198, 216, 153, 75, 118, 4, 164, 30, 158, 238, 56, 161, 143, 57, 101, 158, 52, 42, 223, 232, 127, 207, 105, 147, 4, 28, 55, 91, 10, 48, 224, 160, 237, 227, 86, 139, 248, 129, 122, 191, 165, 139, 207, 102, 205, 102, 242, 137, 138, 14, 225, 16, 155, 6, 221, 48, 110, 234, 48, 13, 26, 112, 230, 119, 226, 72, 117, 144, 55, 33, 73, 0, 218, 239, 112, 28, 156, 187, 52, 224, 121, 152, 136, 197, 83, 151, 181, 37, 166, 242, 103, 3, 202, 39, 204, 117, 143, 152, 127, 168, 162, 172, 225, 224, 220, 36, 111, 66, 18, 112, 180, 14, 179, 14, 107, 98, 234, 149, 140, 45, 99, 123, 193, 84, 79, 232, 17, 44, 68, 31, 179, 162, 175, 149, 166, 182, 140, 237, 197, 221, 235, 85, 77, 74, 170, 145, 179, 207, 104, 192, 205, 121, 174, 254, 66, 101, 152, 167, 14, 241, 56, 229, 157, 210, 180, 240, 154, 60, 163, 187, 176, 90, 167, 30, 246, 59, 150, 221, 32, 246, 121, 16, 54, 75, 51, 2, 178, 34, 135, 15, 212, 104, 229, 223, 243, 112, 85, 27, 119, 208, 98, 94, 64, 208, 117, 0, 17, 32, 103, 231, 68, 6, 191, 100, 138, 144, 107, 209, 0, 250, 18, 80, 76, 132, 69, 222, 18, 59, 140, 170, 68, 77, 228, 142, 118, 34, 175, 20, 252, 105, 140, 54, 215, 218, 253, 67, 232, 8, 150, 19, 183, 188, 211, 34, 98, 126, 139, 187, 55, 115, 61, 214, 58, 45, 98, 46, 181, 83, 79, 232, 37, 108, 180, 124, 114, 65, 89, 24, 88, 1, 199, 62, 39, 142, 69, 46, 136, 199, 45, 234, 8, 66, 22, 119, 175, 86, 101, 173, 86, 227, 90, 173, 30, 123, 252, 193, 71, 47, 177, 27, 18, 115, 61, 182, 126, 33, 141, 159, 70, 182, 199, 14, 218, 134, 226, 128, 187, 194, 150, 177, 61, 109, 174, 4, 189, 200, 18, 204, 97, 206, 73, 179, 197, 75, 179, 2, 16, 63, 162, 123, 128, 234, 216, 62, 119, 217, 153, 101, 179, 208, 227, 86, 131, 122, 188, 52, 39, 64, 69, 245, 230, 32, 122, 241, 140, 122, 28, 61, 128, 57, 85, 217, 165, 121, 17, 247, 53, 45, 23, 207, 36, 198, 140, 193, 232, 14, 172, 122, 228, 45, 183, 90, 248, 140, 168, 36, 46, 136, 36, 46, 71, 195, 39, 248, 140, 200, 68, 62, 132, 130, 88, 22, 37, 16, 222, 43, 185, 76, 127, 17, 33, 77, 105, 128, 94, 195, 181, 193, 18, 176, 186, 85, 189, 56, 74, 85, 111, 12, 212, 64, 252, 10, 237, 193, 74, 96, 55, 136, 19, 186, 196, 177, 162, 70, 83, 90, 18, 30, 203, 3, 137, 171, 197, 93, 200, 92, 78, 44, 162, 49, 244, 4, 150, 226, 116, 9, 7, 203, 67, 29, 44, 42, 188, 48, 127, 5, 115, 209, 84, 41, 9, 74, 43, 91, 211, 219, 139, 187, 79, 180, 147, 201, 89, 70, 213, 47, 164, 253, 83, 143, 71, 201, 81, 222, 80, 5, 68, 22, 186, 53, 180, 42, 178, 191, 24, 13, 198, 5, 84, 133, 43, 156, 113, 236, 90, 42, 163, 86, 189, 195, 73, 80, 42, 10, 228, 154, 120, 165, 146, 190, 31, 189, 64, 207, 161, 136, 67, 206, 44, 155, 121, 167, 244, 76, 22, 213, 154, 152, 239, 45, 109, 212, 123, 33, 103, 7, 2, 27, 213, 153, 185, 130, 123, 158, 203, 175, 97, 41, 29, 59, 42, 194, 244, 57, 233, 168, 46, 22, 253, 25, 85, 206, 69, 180, 88, 212, 170, 31, 169, 114, 132, 193, 163, 169, 135, 70, 229, 79, 5, 184, 37, 89, 114, 210, 196, 29, 176, 102, 203, 37, 156, 56, 113, 3, 29, 210, 135, 30, 195, 66, 188, 57, 4, 165, 41, 145, 36, 125, 197, 197, 31, 49, 187, 120, 244, 3, 88, 235, 22, 174, 205, 60, 78, 222, 114, 209, 113, 150, 204, 98, 242, 226, 64, 142, 247, 116, 221, 153, 190, 174, 251, 11, 88, 11, 56, 181, 207, 59, 22, 230, 220, 167, 245, 48, 202, 84, 65, 208, 82, 213, 70, 243, 66, 160, 147, 154, 223, 75, 172, 204, 162, 116, 212, 29, 65, 31, 67, 201, 39, 60, 244, 61, 203, 35, 109, 43, 142, 94, 44, 52, 209, 90, 230, 205, 239, 200, 247, 159, 147, 118, 154, 74, 180, 15, 155, 167, 204, 183, 137, 101, 251, 4, 115, 162, 49, 159, 19, 230, 101, 129, 58, 16, 160, 126, 31, 154, 253, 100, 94, 183, 159, 32, 6, 203, 162, 45, 88, 62, 9, 66, 151, 7, 165, 5, 145, 140, 159, 105, 167, 63, 66, 226, 171, 178, 98, 164, 51, 185, 124, 150, 222, 164, 134, 202, 20, 214, 6, 32, 154, 42, 253, 73, 111, 149, 110, 143, 80, 165, 194, 97, 186, 86, 223, 77, 195, 247, 242, 67, 86, 155, 230, 151, 176, 220, 75, 176, 33, 62, 250, 163, 113, 219, 134, 185, 228, 164, 147, 240, 206, 128, 77, 108, 115, 122, 65, 57, 37, 129, 197, 153, 229, 208, 160, 133, 185, 221, 176, 92, 102, 99, 215, 237, 168, 210, 255, 106, 2, 182, 85, 163, 218, 75, 252, 215, 216, 161, 242, 254, 153, 116, 46, 217, 191, 138, 179, 17, 229, 95, 194, 214, 48, 7, 154, 220, 28, 246, 230, 70, 191, 84, 148, 223, 142, 240, 21, 59, 62, 246, 78, 89, 58, 67, 191, 154, 130, 45, 205, 52, 143, 48, 117, 71, 110, 37, 251, 80, 176, 113, 24, 200, 104, 86, 118, 239, 229, 182, 145, 174, 247, 131, 200, 198, 148, 166, 209, 110, 237, 16, 142, 169, 27, 40, 229, 162, 223, 173, 79, 112, 199, 101, 216, 49, 99, 112, 110, 115, 209, 44, 193, 130, 86, 210, 221, 130, 155, 57, 28, 200, 60, 87, 254, 217, 213, 171, 49, 179, 151, 169, 87, 95, 0, 74, 252, 90, 77, 194, 177, 131, 57, 86, 10, 237, 118, 238, 7, 158, 43, 176, 89, 228, 125, 35, 149, 191, 119, 181, 109, 239, 28, 47, 85, 219, 222, 128, 69, 181, 132, 58, 209, 150, 47, 153, 128, 120, 232, 216, 137, 196, 111, 2, 16, 226, 119, 38, 71, 252, 38, 19, 19, 226, 23, 167, 158, 208, 46, 20, 168, 215, 10, 185, 218, 129, 242, 75, 80, 66, 53, 98, 107, 246, 191, 21, 91, 115, 227, 137, 173, 26, 108, 196, 254, 162, 14, 103, 187, 44, 32, 194, 17, 11, 185, 146, 190, 27, 3, 190, 14, 213, 249, 212, 92, 143, 109, 107, 236, 32, 178, 172, 73, 67, 244, 57, 172, 139, 143, 12, 186, 92, 24, 230, 242, 138, 48, 236, 243, 119, 4, 107, 13, 130, 125, 94, 39, 152, 39, 174, 96, 152, 171, 98, 98, 19, 251, 73, 29, 15, 34, 157, 92, 232, 30, 15, 94, 195, 102, 111, 38, 44, 118, 106, 241, 6, 13, 172, 216, 96, 184, 12, 46, 247, 100, 230, 231, 167, 181, 6, 13, 246, 148, 255, 227, 244, 12, 226, 102, 181, 60, 66, 165, 116, 39, 113, 168, 186, 214, 192, 105, 109, 101, 178, 211, 218, 93, 88, 77, 252, 168, 238, 179, 42, 59, 92, 60, 124, 40, 187, 208, 135, 48, 219, 32, 216, 33, 190, 144, 193, 209, 25, 78, 123, 22, 18, 16, 83, 65, 255, 199, 194, 184, 242, 181, 145, 8, 215, 116, 115, 25, 87, 184, 126, 4, 179, 82, 41, 169, 198, 146, 207, 189, 194, 230, 181, 210, 202, 157, 68, 164, 100, 196, 165, 118, 128, 223, 76, 193, 221, 60, 224, 126, 231, 248, 112, 216, 118, 112, 89, 45, 178, 203, 218, 204, 132, 172, 21, 250, 88, 251, 62, 108, 15, 39, 67, 49, 247, 141, 145, 168, 140, 52, 120, 44, 149, 241, 0, 230, 78, 49, 117, 67, 159, 228, 38, 254, 72, 98, 204, 24, 156, 187, 137, 106, 151, 244, 204, 36, 75, 58, 165, 33, 116, 51, 84, 60, 252, 109, 74, 91, 106, 18, 245, 109, 46, 159, 20, 249, 51, 147, 146, 95, 24, 133, 252, 217, 137, 200, 191, 11, 183, 135, 208, 170, 18, 240, 7, 3, 42, 186, 170, 197, 158, 77, 198, 42, 197, 56, 222, 169, 73, 197, 106, 127, 19, 186, 173, 111, 142, 73, 96, 106, 2, 191, 157, 130, 59, 57, 184, 111, 121, 13, 141, 179, 196, 180, 172, 245, 55, 161, 15, 244, 29, 185, 135, 141, 158, 212, 219, 204, 239, 129, 62, 139, 75, 233, 18, 83, 127, 18, 165, 62, 39, 48, 37, 190, 63, 128, 162, 45, 38, 102, 249, 50, 86, 226, 136, 248, 230, 205, 85, 57, 110, 198, 195, 170, 74, 50, 93, 254, 191, 85, 73, 45, 170, 146, 33, 108, 140, 79, 242, 63, 186, 155, 154, 184, 254, 152, 68, 204, 252, 180, 79, 204, 140, 126, 203, 18, 111, 209, 47, 225, 138, 252, 247, 148, 117, 65, 124, 113, 127, 66, 189, 83, 166, 14, 209, 217, 137, 34, 254, 75, 9, 23, 23, 2, 107, 237, 254, 161, 212, 126, 166, 155, 92, 172, 136, 12, 40, 155, 36, 32, 92, 94, 203, 37, 71, 216, 75, 169, 173, 202, 117, 184, 170, 13, 70, 5, 235, 195, 74, 175, 66, 69, 247, 0, 17, 15, 215, 93, 98, 165, 116, 174, 74, 119, 81, 190, 233, 90, 160, 93, 88, 111, 49, 215, 37, 190, 213, 198, 84, 158, 97, 44, 234, 89, 77, 217, 9, 166, 77, 36, 223, 190, 194, 84, 28, 86, 142, 189, 231, 193, 238, 191, 86, 97, 65, 210, 189, 119, 114, 140, 222, 194, 21, 205, 221, 21, 218, 25, 253, 150, 75, 240, 90, 30, 251, 90, 12, 253, 222, 128, 107, 121, 183, 89, 232, 225, 164, 215, 141, 229, 79, 38, 190, 58, 67, 191, 54, 96, 35, 243, 226, 5, 253, 120, 84, 199, 61, 50, 178, 252, 96, 92, 51, 21, 76, 55, 57, 233, 46, 145, 159, 28, 205, 69, 80, 126, 114, 180, 183, 42, 169, 228, 104, 165, 116, 126, 114, 242, 206, 82, 249, 201, 201, 61, 237, 160, 119, 122, 205, 222, 35, 240, 209, 167, 99, 251, 79, 237, 61, 229, 39, 19, 90, 15, 150, 207, 160, 236, 203, 47, 159, 204, 83, 72, 126, 249, 100, 75, 123, 244, 181, 1, 215, 115, 53, 40, 250, 100, 60, 207, 105, 162, 30, 77, 98, 170, 2, 251, 157, 33, 218, 98, 150, 70, 66, 31, 143, 156, 132, 94, 145, 92, 126, 56, 190, 161, 10, 233, 143, 6, 220, 24, 34, 219, 208, 227, 113, 189, 167, 249, 250, 116, 50, 227, 30, 198, 50, 245, 66, 38, 99, 195, 180, 101, 38, 99, 195, 181, 159, 100, 44, 87, 194, 100, 50, 54, 138, 12, 204, 100, 108, 52, 213, 148, 90, 137, 131, 106, 33, 127, 37, 102, 74, 167, 252, 149, 152, 45, 74, 162, 70, 174, 145, 1, 25, 141, 60, 91, 189, 100, 52, 242, 28, 133, 177, 239, 253, 229, 253, 166, 241, 215, 247, 155, 198, 55, 239, 55, 13, 248, 174, 205, 154, 58, 23, 251, 72, 42, 130, 23, 242, 215, 69, 39, 62, 227, 236, 196, 248, 234, 254, 25, 229, 141, 176, 94, 181, 89, 115, 39, 253, 243, 153, 31, 82, 199, 221, 57, 99, 242, 151, 65, 234, 183, 52, 143, 113, 139, 94, 220, 175, 207, 138, 177, 15, 255, 19, 0, 0, 255, 255, 134, 90, 132, 163, 189, 36, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_00684e887839a48c(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_00684e887839a48c = __goscriptValue
}

export function encodeVarintServiceWorker(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovServiceWorker(v))
	let base = offset
	for (let __goscriptSliceWindow30 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow30.backing as any[])[$.windowSlot(__goscriptSliceWindow30, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export function sovServiceWorker(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozServiceWorker(x: bigint): number {
	let n: number = 0
	return sovServiceWorker($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export function skipServiceWorker(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow31 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowServiceWorker]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow31.backing as any[])[$.windowSlot(__goscriptSliceWindow31, iNdEx)] as number)
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
						return [0, ErrIntOverflowServiceWorker]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow31.backing as any[])[$.windowSlot(__goscriptSliceWindow31, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowServiceWorker]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow31.backing as any[])[$.windowSlot(__goscriptSliceWindow31, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthServiceWorker]
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
					return [0, ErrUnexpectedEndOfGroupServiceWorker]
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
			return [0, ErrInvalidLengthServiceWorker]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthServiceWorker: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthServiceWorker(__goscriptValue: $.GoError): void {
	ErrInvalidLengthServiceWorker = __goscriptValue
}

export let ErrIntOverflowServiceWorker: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowServiceWorker(__goscriptValue: $.GoError): void {
	ErrIntOverflowServiceWorker = __goscriptValue
}

export let ErrUnexpectedEndOfGroupServiceWorker: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupServiceWorker(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupServiceWorker = __goscriptValue
}

export { __goscriptInit0 }

export { __goscriptInit1 }
