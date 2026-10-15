// Generated file based on service_workflow.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as types from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"

import * as __goscript_common_pb from "./common.pb.gs.ts"

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
import "./history.pb.gs.ts"
import "./query.pb.gs.ts"
import "./tasklist.pb.gs.ts"
import "./workflow.pb.gs.ts"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.RestartWorkflowExecutionRequest", "apiv1.DiagnoseWorkflowExecutionRequest", "apiv1.DiagnoseWorkflowExecutionResponse", "apiv1.StartWorkflowExecutionRequest", "apiv1.StartWorkflowExecutionResponse", "apiv1.StartWorkflowExecutionAsyncRequest", "apiv1.StartWorkflowExecutionAsyncResponse", "apiv1.RestartWorkflowExecutionResponse", "apiv1.SignalWorkflowExecutionRequest", "apiv1.SignalWorkflowExecutionResponse", "apiv1.SignalWithStartWorkflowExecutionRequest", "apiv1.SignalWithStartWorkflowExecutionResponse", "apiv1.SignalWithStartWorkflowExecutionAsyncRequest", "apiv1.SignalWithStartWorkflowExecutionAsyncResponse", "apiv1.ResetWorkflowExecutionRequest", "apiv1.ResetWorkflowExecutionResponse", "apiv1.RequestCancelWorkflowExecutionRequest", "apiv1.RequestCancelWorkflowExecutionResponse", "apiv1.TerminateWorkflowExecutionRequest", "apiv1.TerminateWorkflowExecutionResponse", "apiv1.DescribeWorkflowExecutionRequest", "apiv1.DescribeWorkflowExecutionResponse", "apiv1.QueryWorkflowRequest", "apiv1.QueryWorkflowResponse", "apiv1.DescribeTaskListRequest", "apiv1.DescribeTaskListResponse", "apiv1.GetTaskListsByDomainRequest", "apiv1.GetTaskListsByDomainResponse", "apiv1.ListTaskListPartitionsRequest", "apiv1.ListTaskListPartitionsResponse", "apiv1.GetClusterInfoRequest", "apiv1.GetClusterInfoResponse", "apiv1.GetWorkflowExecutionHistoryRequest", "apiv1.GetWorkflowExecutionHistoryResponse", "apiv1.FeatureFlags", "apiv1.RefreshWorkflowTasksRequest", "apiv1.RefreshWorkflowTasksResponse"])

export class RestartWorkflowExecutionRequest {
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

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
	}

	public get Reason(): string {
		return this._fields.Reason
	}

	public set Reason(value: string) {
		this._fields.Reason = value
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
		Identity: string
		Reason: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, Identity?: string, Reason?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			Identity: init?.Identity ?? ("" as string),
			Reason: init?.Reason ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RestartWorkflowExecutionRequest {
		return new RestartWorkflowExecutionRequest(this, true)
	}

	public __goscriptAssign(source: RestartWorkflowExecutionRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowExecution = values.WorkflowExecution
		target.Identity = values.Identity
		target.Reason = values.Reason
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([0])]
	}

	public GetDomain(): string {
		const m: RestartWorkflowExecutionRequest | $.VarRef<RestartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RestartWorkflowExecutionRequest>(m).Domain
		}
		return ""
	}

	public GetIdentity(): string {
		const m: RestartWorkflowExecutionRequest | $.VarRef<RestartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RestartWorkflowExecutionRequest>(m).Identity
		}
		return ""
	}

	public GetReason(): string {
		const m: RestartWorkflowExecutionRequest | $.VarRef<RestartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RestartWorkflowExecutionRequest>(m).Reason
		}
		return ""
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: RestartWorkflowExecutionRequest | $.VarRef<RestartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RestartWorkflowExecutionRequest>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RestartWorkflowExecutionRequest | $.VarRef<RestartWorkflowExecutionRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RestartWorkflowExecutionRequest).Size() : RestartWorkflowExecutionRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple0: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RestartWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RestartWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RestartWorkflowExecutionRequest | $.VarRef<RestartWorkflowExecutionRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RestartWorkflowExecutionRequest).Size() : RestartWorkflowExecutionRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RestartWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RestartWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RestartWorkflowExecutionRequest | $.VarRef<RestartWorkflowExecutionRequest> | null = this;
		const m$: RestartWorkflowExecutionRequest = m == null ? $.pointerTarget<RestartWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RestartWorkflowExecutionRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RestartWorkflowExecutionRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RestartWorkflowExecutionRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RestartWorkflowExecutionRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as RestartWorkflowExecutionRequest).Reason) > 0) {
			i = i - ($.stringLen((m$ as RestartWorkflowExecutionRequest).Reason))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RestartWorkflowExecutionRequest).Reason)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as RestartWorkflowExecutionRequest).Reason)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as RestartWorkflowExecutionRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as RestartWorkflowExecutionRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RestartWorkflowExecutionRequest).Identity)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as RestartWorkflowExecutionRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as RestartWorkflowExecutionRequest).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as RestartWorkflowExecutionRequest).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as RestartWorkflowExecutionRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as RestartWorkflowExecutionRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RestartWorkflowExecutionRequest).Domain)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as RestartWorkflowExecutionRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RestartWorkflowExecutionRequest | $.VarRef<RestartWorkflowExecutionRequest> | null = this;
		$.assignStruct($.pointerValue<RestartWorkflowExecutionRequest>(m), $.markAsStructValue(new RestartWorkflowExecutionRequest()))
	}

	public Size(): number {
		const m: RestartWorkflowExecutionRequest | $.VarRef<RestartWorkflowExecutionRequest> | null = this;
		let n: number = 0
		const m$: RestartWorkflowExecutionRequest = m == null ? $.pointerTarget<RestartWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RestartWorkflowExecutionRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as RestartWorkflowExecutionRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as RestartWorkflowExecutionRequest).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as RestartWorkflowExecutionRequest).WorkflowExecution)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as RestartWorkflowExecutionRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as RestartWorkflowExecutionRequest).Reason)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as RestartWorkflowExecutionRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RestartWorkflowExecutionRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RestartWorkflowExecutionRequest | $.VarRef<RestartWorkflowExecutionRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RestartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RestartWorkflowExecutionRequest | $.VarRef<RestartWorkflowExecutionRequest> | null = this;
		const m$: RestartWorkflowExecutionRequest = m == null ? $.pointerTarget<RestartWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RestartWorkflowExecutionRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: RestartWorkflowExecutionRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RestartWorkflowExecutionRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RestartWorkflowExecutionRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RestartWorkflowExecutionRequest).WorkflowExecution == null) {
						;(m$ as RestartWorkflowExecutionRequest).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as RestartWorkflowExecutionRequest).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RestartWorkflowExecutionRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Reason", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RestartWorkflowExecutionRequest).Reason = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RestartWorkflowExecutionRequest).XXX_unrecognized = $.appendSlice((m$ as RestartWorkflowExecutionRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RestartWorkflowExecutionRequest | $.VarRef<RestartWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_RestartWorkflowExecutionRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RestartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: RestartWorkflowExecutionRequest | $.VarRef<RestartWorkflowExecutionRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RestartWorkflowExecutionRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RestartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RestartWorkflowExecutionRequest).MarshalToSizedBuffer(b) : RestartWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: RestartWorkflowExecutionRequest | $.VarRef<RestartWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_RestartWorkflowExecutionRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RestartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionRequest")), src)
	}

	public XXX_Size(): number {
		const m: RestartWorkflowExecutionRequest | $.VarRef<RestartWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RestartWorkflowExecutionRequest).Size() : RestartWorkflowExecutionRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RestartWorkflowExecutionRequest | $.VarRef<RestartWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RestartWorkflowExecutionRequest).Unmarshal(b) : RestartWorkflowExecutionRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RestartWorkflowExecutionRequest",
		() => new RestartWorkflowExecutionRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetIdentity", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetReason", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetWorkflowExecution", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		RestartWorkflowExecutionRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }), /* @__PURE__ */ $.structField("Identity", /* @__PURE__ */ $.basicType("string"), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=identity,proto3\" json:\"identity,omitempty\"" }), /* @__PURE__ */ $.structField("Reason", /* @__PURE__ */ $.basicType("string"), [3], 40, true, { tag: "protobuf:\"bytes,4,opt,name=reason,proto3\" json:\"reason,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [4], 56, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 56, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [6], 80, true, { tag: "json:\"-\"" })]
	)
}

export class DiagnoseWorkflowExecutionRequest {
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
		Identity: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, Identity?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			Identity: init?.Identity ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DiagnoseWorkflowExecutionRequest {
		return new DiagnoseWorkflowExecutionRequest(this, true)
	}

	public __goscriptAssign(source: DiagnoseWorkflowExecutionRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowExecution = values.WorkflowExecution
		target.Identity = values.Identity
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([1])]
	}

	public GetDomain(): string {
		const m: DiagnoseWorkflowExecutionRequest | $.VarRef<DiagnoseWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DiagnoseWorkflowExecutionRequest>(m).Domain
		}
		return ""
	}

	public GetIdentity(): string {
		const m: DiagnoseWorkflowExecutionRequest | $.VarRef<DiagnoseWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DiagnoseWorkflowExecutionRequest>(m).Identity
		}
		return ""
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: DiagnoseWorkflowExecutionRequest | $.VarRef<DiagnoseWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DiagnoseWorkflowExecutionRequest>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DiagnoseWorkflowExecutionRequest | $.VarRef<DiagnoseWorkflowExecutionRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DiagnoseWorkflowExecutionRequest).Size() : DiagnoseWorkflowExecutionRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple1: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DiagnoseWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DiagnoseWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DiagnoseWorkflowExecutionRequest | $.VarRef<DiagnoseWorkflowExecutionRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DiagnoseWorkflowExecutionRequest).Size() : DiagnoseWorkflowExecutionRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DiagnoseWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DiagnoseWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DiagnoseWorkflowExecutionRequest | $.VarRef<DiagnoseWorkflowExecutionRequest> | null = this;
		const m$: DiagnoseWorkflowExecutionRequest = m == null ? $.pointerTarget<DiagnoseWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DiagnoseWorkflowExecutionRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DiagnoseWorkflowExecutionRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DiagnoseWorkflowExecutionRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DiagnoseWorkflowExecutionRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as DiagnoseWorkflowExecutionRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as DiagnoseWorkflowExecutionRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DiagnoseWorkflowExecutionRequest).Identity)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as DiagnoseWorkflowExecutionRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as DiagnoseWorkflowExecutionRequest).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as DiagnoseWorkflowExecutionRequest).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as DiagnoseWorkflowExecutionRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as DiagnoseWorkflowExecutionRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DiagnoseWorkflowExecutionRequest).Domain)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as DiagnoseWorkflowExecutionRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DiagnoseWorkflowExecutionRequest | $.VarRef<DiagnoseWorkflowExecutionRequest> | null = this;
		$.assignStruct($.pointerValue<DiagnoseWorkflowExecutionRequest>(m), $.markAsStructValue(new DiagnoseWorkflowExecutionRequest()))
	}

	public Size(): number {
		const m: DiagnoseWorkflowExecutionRequest | $.VarRef<DiagnoseWorkflowExecutionRequest> | null = this;
		let n: number = 0
		const m$: DiagnoseWorkflowExecutionRequest = m == null ? $.pointerTarget<DiagnoseWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DiagnoseWorkflowExecutionRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as DiagnoseWorkflowExecutionRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as DiagnoseWorkflowExecutionRequest).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as DiagnoseWorkflowExecutionRequest).WorkflowExecution)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as DiagnoseWorkflowExecutionRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as DiagnoseWorkflowExecutionRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DiagnoseWorkflowExecutionRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DiagnoseWorkflowExecutionRequest | $.VarRef<DiagnoseWorkflowExecutionRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DiagnoseWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DiagnoseWorkflowExecutionRequest | $.VarRef<DiagnoseWorkflowExecutionRequest> | null = this;
		const m$: DiagnoseWorkflowExecutionRequest = m == null ? $.pointerTarget<DiagnoseWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DiagnoseWorkflowExecutionRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: DiagnoseWorkflowExecutionRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DiagnoseWorkflowExecutionRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DiagnoseWorkflowExecutionRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DiagnoseWorkflowExecutionRequest).WorkflowExecution == null) {
						;(m$ as DiagnoseWorkflowExecutionRequest).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as DiagnoseWorkflowExecutionRequest).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DiagnoseWorkflowExecutionRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DiagnoseWorkflowExecutionRequest).XXX_unrecognized = $.appendSlice((m$ as DiagnoseWorkflowExecutionRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: DiagnoseWorkflowExecutionRequest | $.VarRef<DiagnoseWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_DiagnoseWorkflowExecutionRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DiagnoseWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: DiagnoseWorkflowExecutionRequest | $.VarRef<DiagnoseWorkflowExecutionRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DiagnoseWorkflowExecutionRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DiagnoseWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DiagnoseWorkflowExecutionRequest).MarshalToSizedBuffer(b) : DiagnoseWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: DiagnoseWorkflowExecutionRequest | $.VarRef<DiagnoseWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_DiagnoseWorkflowExecutionRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DiagnoseWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionRequest")), src)
	}

	public XXX_Size(): number {
		const m: DiagnoseWorkflowExecutionRequest | $.VarRef<DiagnoseWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DiagnoseWorkflowExecutionRequest).Size() : DiagnoseWorkflowExecutionRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DiagnoseWorkflowExecutionRequest | $.VarRef<DiagnoseWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DiagnoseWorkflowExecutionRequest).Unmarshal(b) : DiagnoseWorkflowExecutionRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DiagnoseWorkflowExecutionRequest",
		() => new DiagnoseWorkflowExecutionRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetIdentity", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetWorkflowExecution", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		DiagnoseWorkflowExecutionRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }), /* @__PURE__ */ $.structField("Identity", /* @__PURE__ */ $.basicType("string"), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=identity,proto3\" json:\"identity,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [3], 40, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 40, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [5], 64, true, { tag: "json:\"-\"" })]
	)
}

export class DiagnoseWorkflowExecutionResponse {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get DiagnosticWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		return this._fields.DiagnosticWorkflowExecution
	}

	public set DiagnosticWorkflowExecution(value: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null) {
		this._fields.DiagnosticWorkflowExecution = value
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
		DiagnosticWorkflowExecution: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, DiagnosticWorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			DiagnosticWorkflowExecution: init?.DiagnosticWorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DiagnoseWorkflowExecutionResponse {
		return new DiagnoseWorkflowExecutionResponse(this, true)
	}

	public __goscriptAssign(source: DiagnoseWorkflowExecutionResponse): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.DiagnosticWorkflowExecution = values.DiagnosticWorkflowExecution
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([2])]
	}

	public GetDiagnosticWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: DiagnoseWorkflowExecutionResponse | $.VarRef<DiagnoseWorkflowExecutionResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DiagnoseWorkflowExecutionResponse>(m).DiagnosticWorkflowExecution
		}
		return null
	}

	public GetDomain(): string {
		const m: DiagnoseWorkflowExecutionResponse | $.VarRef<DiagnoseWorkflowExecutionResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DiagnoseWorkflowExecutionResponse>(m).Domain
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DiagnoseWorkflowExecutionResponse | $.VarRef<DiagnoseWorkflowExecutionResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DiagnoseWorkflowExecutionResponse).Size() : DiagnoseWorkflowExecutionResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple2: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DiagnoseWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DiagnoseWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DiagnoseWorkflowExecutionResponse | $.VarRef<DiagnoseWorkflowExecutionResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DiagnoseWorkflowExecutionResponse).Size() : DiagnoseWorkflowExecutionResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DiagnoseWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DiagnoseWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DiagnoseWorkflowExecutionResponse | $.VarRef<DiagnoseWorkflowExecutionResponse> | null = this;
		const m$: DiagnoseWorkflowExecutionResponse = m == null ? $.pointerTarget<DiagnoseWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DiagnoseWorkflowExecutionResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DiagnoseWorkflowExecutionResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DiagnoseWorkflowExecutionResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DiagnoseWorkflowExecutionResponse).XXX_unrecognized)
		}
		if ((m$ as DiagnoseWorkflowExecutionResponse).DiagnosticWorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as DiagnoseWorkflowExecutionResponse).DiagnosticWorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as DiagnoseWorkflowExecutionResponse).Domain) > 0) {
			i = i - ($.stringLen((m$ as DiagnoseWorkflowExecutionResponse).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DiagnoseWorkflowExecutionResponse).Domain)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as DiagnoseWorkflowExecutionResponse).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DiagnoseWorkflowExecutionResponse | $.VarRef<DiagnoseWorkflowExecutionResponse> | null = this;
		$.assignStruct($.pointerValue<DiagnoseWorkflowExecutionResponse>(m), $.markAsStructValue(new DiagnoseWorkflowExecutionResponse()))
	}

	public Size(): number {
		const m: DiagnoseWorkflowExecutionResponse | $.VarRef<DiagnoseWorkflowExecutionResponse> | null = this;
		let n: number = 0
		const m$: DiagnoseWorkflowExecutionResponse = m == null ? $.pointerTarget<DiagnoseWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DiagnoseWorkflowExecutionResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as DiagnoseWorkflowExecutionResponse).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as DiagnoseWorkflowExecutionResponse).DiagnosticWorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as DiagnoseWorkflowExecutionResponse).DiagnosticWorkflowExecution)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as DiagnoseWorkflowExecutionResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DiagnoseWorkflowExecutionResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DiagnoseWorkflowExecutionResponse | $.VarRef<DiagnoseWorkflowExecutionResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DiagnoseWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DiagnoseWorkflowExecutionResponse | $.VarRef<DiagnoseWorkflowExecutionResponse> | null = this;
		const m$: DiagnoseWorkflowExecutionResponse = m == null ? $.pointerTarget<DiagnoseWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DiagnoseWorkflowExecutionResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: DiagnoseWorkflowExecutionResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DiagnoseWorkflowExecutionResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DiagnoseWorkflowExecutionResponse).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field DiagnosticWorkflowExecution", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DiagnoseWorkflowExecutionResponse).DiagnosticWorkflowExecution == null) {
						;(m$ as DiagnoseWorkflowExecutionResponse).DiagnosticWorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as DiagnoseWorkflowExecutionResponse).DiagnosticWorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DiagnoseWorkflowExecutionResponse).XXX_unrecognized = $.appendSlice((m$ as DiagnoseWorkflowExecutionResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: DiagnoseWorkflowExecutionResponse | $.VarRef<DiagnoseWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_DiagnoseWorkflowExecutionResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DiagnoseWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: DiagnoseWorkflowExecutionResponse | $.VarRef<DiagnoseWorkflowExecutionResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DiagnoseWorkflowExecutionResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DiagnoseWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DiagnoseWorkflowExecutionResponse).MarshalToSizedBuffer(b) : DiagnoseWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: DiagnoseWorkflowExecutionResponse | $.VarRef<DiagnoseWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_DiagnoseWorkflowExecutionResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DiagnoseWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionResponse")), src)
	}

	public XXX_Size(): number {
		const m: DiagnoseWorkflowExecutionResponse | $.VarRef<DiagnoseWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DiagnoseWorkflowExecutionResponse).Size() : DiagnoseWorkflowExecutionResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DiagnoseWorkflowExecutionResponse | $.VarRef<DiagnoseWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DiagnoseWorkflowExecutionResponse).Unmarshal(b) : DiagnoseWorkflowExecutionResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DiagnoseWorkflowExecutionResponse",
		() => new DiagnoseWorkflowExecutionResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDiagnosticWorkflowExecution", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		DiagnoseWorkflowExecutionResponse,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("DiagnosticWorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=diagnostic_workflow_execution,json=diagnosticWorkflowExecution,proto3\" json:\"diagnostic_workflow_execution,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 24, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 24, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 48, true, { tag: "json:\"-\"" })]
	)
}

export class StartWorkflowExecutionRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get WorkflowId(): string {
		return this._fields.WorkflowId
	}

	public set WorkflowId(value: string) {
		this._fields.WorkflowId = value
	}

	public get WorkflowType(): __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null {
		return this._fields.WorkflowType
	}

	public set WorkflowType(value: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null) {
		this._fields.WorkflowType = value
	}

	public get TaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		return this._fields.TaskList
	}

	public set TaskList(value: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null) {
		this._fields.TaskList = value
	}

	public get Input(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.Input
	}

	public set Input(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.Input = value
	}

	public get ExecutionStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.ExecutionStartToCloseTimeout
	}

	public set ExecutionStartToCloseTimeout(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.ExecutionStartToCloseTimeout = value
	}

	public get TaskStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.TaskStartToCloseTimeout
	}

	public set TaskStartToCloseTimeout(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.TaskStartToCloseTimeout = value
	}

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
	}

	public get RequestId(): string {
		return this._fields.RequestId
	}

	public set RequestId(value: string) {
		this._fields.RequestId = value
	}

	public get WorkflowIdReusePolicy(): __goscript_workflow_pb.WorkflowIdReusePolicy {
		return this._fields.WorkflowIdReusePolicy
	}

	public set WorkflowIdReusePolicy(value: __goscript_workflow_pb.WorkflowIdReusePolicy) {
		this._fields.WorkflowIdReusePolicy = value
	}

	public get RetryPolicy(): __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null {
		return this._fields.RetryPolicy
	}

	public set RetryPolicy(value: __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null) {
		this._fields.RetryPolicy = value
	}

	public get CronSchedule(): string {
		return this._fields.CronSchedule
	}

	public set CronSchedule(value: string) {
		this._fields.CronSchedule = value
	}

	public get Memo(): __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null {
		return this._fields.Memo
	}

	public set Memo(value: __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null) {
		this._fields.Memo = value
	}

	public get SearchAttributes(): __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null {
		return this._fields.SearchAttributes
	}

	public set SearchAttributes(value: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null) {
		this._fields.SearchAttributes = value
	}

	public get Header(): __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null {
		return this._fields.Header
	}

	public set Header(value: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null) {
		this._fields.Header = value
	}

	public get DelayStart(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.DelayStart
	}

	public set DelayStart(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.DelayStart = value
	}

	public get JitterStart(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.JitterStart
	}

	public set JitterStart(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.JitterStart = value
	}

	public get FirstRunAt(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.FirstRunAt
	}

	public set FirstRunAt(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.FirstRunAt = value
	}

	public get CronOverlapPolicy(): __goscript_workflow_pb.CronOverlapPolicy {
		return this._fields.CronOverlapPolicy
	}

	public set CronOverlapPolicy(value: __goscript_workflow_pb.CronOverlapPolicy) {
		this._fields.CronOverlapPolicy = value
	}

	public get ActiveClusterSelectionPolicy(): __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null {
		return this._fields.ActiveClusterSelectionPolicy
	}

	public set ActiveClusterSelectionPolicy(value: __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null) {
		this._fields.ActiveClusterSelectionPolicy = value
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
		WorkflowId: string
		WorkflowType: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null
		TaskList: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null
		Input: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		ExecutionStartToCloseTimeout: types.Duration | $.VarRef<types.Duration> | null
		TaskStartToCloseTimeout: types.Duration | $.VarRef<types.Duration> | null
		Identity: string
		RequestId: string
		WorkflowIdReusePolicy: __goscript_workflow_pb.WorkflowIdReusePolicy
		RetryPolicy: __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null
		CronSchedule: string
		Memo: __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null
		SearchAttributes: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null
		Header: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null
		DelayStart: types.Duration | $.VarRef<types.Duration> | null
		JitterStart: types.Duration | $.VarRef<types.Duration> | null
		FirstRunAt: types.Timestamp | $.VarRef<types.Timestamp> | null
		CronOverlapPolicy: __goscript_workflow_pb.CronOverlapPolicy
		ActiveClusterSelectionPolicy: __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowId?: string, WorkflowType?: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null, TaskList?: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null, Input?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, ExecutionStartToCloseTimeout?: types.Duration | $.VarRef<types.Duration> | null, TaskStartToCloseTimeout?: types.Duration | $.VarRef<types.Duration> | null, Identity?: string, RequestId?: string, WorkflowIdReusePolicy?: __goscript_workflow_pb.WorkflowIdReusePolicy, RetryPolicy?: __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null, CronSchedule?: string, Memo?: __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null, SearchAttributes?: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null, Header?: __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null, DelayStart?: types.Duration | $.VarRef<types.Duration> | null, JitterStart?: types.Duration | $.VarRef<types.Duration> | null, FirstRunAt?: types.Timestamp | $.VarRef<types.Timestamp> | null, CronOverlapPolicy?: __goscript_workflow_pb.CronOverlapPolicy, ActiveClusterSelectionPolicy?: __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowId: init?.WorkflowId ?? ("" as string),
			WorkflowType: init?.WorkflowType ?? (null! as __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null),
			TaskList: init?.TaskList ?? (null! as __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null),
			Input: init?.Input ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			ExecutionStartToCloseTimeout: init?.ExecutionStartToCloseTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			TaskStartToCloseTimeout: init?.TaskStartToCloseTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			Identity: init?.Identity ?? ("" as string),
			RequestId: init?.RequestId ?? ("" as string),
			WorkflowIdReusePolicy: init?.WorkflowIdReusePolicy ?? (0 as __goscript_workflow_pb.WorkflowIdReusePolicy),
			RetryPolicy: init?.RetryPolicy ?? (null! as __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null),
			CronSchedule: init?.CronSchedule ?? ("" as string),
			Memo: init?.Memo ?? (null! as __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null),
			SearchAttributes: init?.SearchAttributes ?? (null! as __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null),
			Header: init?.Header ?? (null! as __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null),
			DelayStart: init?.DelayStart ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			JitterStart: init?.JitterStart ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			FirstRunAt: init?.FirstRunAt ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			CronOverlapPolicy: init?.CronOverlapPolicy ?? (0 as __goscript_workflow_pb.CronOverlapPolicy),
			ActiveClusterSelectionPolicy: init?.ActiveClusterSelectionPolicy ?? (null! as __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StartWorkflowExecutionRequest {
		return new StartWorkflowExecutionRequest(this, true)
	}

	public __goscriptAssign(source: StartWorkflowExecutionRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowId = values.WorkflowId
		target.WorkflowType = values.WorkflowType
		target.TaskList = values.TaskList
		target.Input = values.Input
		target.ExecutionStartToCloseTimeout = values.ExecutionStartToCloseTimeout
		target.TaskStartToCloseTimeout = values.TaskStartToCloseTimeout
		target.Identity = values.Identity
		target.RequestId = values.RequestId
		target.WorkflowIdReusePolicy = values.WorkflowIdReusePolicy
		target.RetryPolicy = values.RetryPolicy
		target.CronSchedule = values.CronSchedule
		target.Memo = values.Memo
		target.SearchAttributes = values.SearchAttributes
		target.Header = values.Header
		target.DelayStart = values.DelayStart
		target.JitterStart = values.JitterStart
		target.FirstRunAt = values.FirstRunAt
		target.CronOverlapPolicy = values.CronOverlapPolicy
		target.ActiveClusterSelectionPolicy = values.ActiveClusterSelectionPolicy
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([3])]
	}

	public GetActiveClusterSelectionPolicy(): __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).ActiveClusterSelectionPolicy
		}
		return null
	}

	public GetCronOverlapPolicy(): __goscript_workflow_pb.CronOverlapPolicy {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).CronOverlapPolicy
		}
		return 0
	}

	public GetCronSchedule(): string {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).CronSchedule
		}
		return ""
	}

	public GetDelayStart(): types.Duration | $.VarRef<types.Duration> | null {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).DelayStart
		}
		return null
	}

	public GetDomain(): string {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).Domain
		}
		return ""
	}

	public GetExecutionStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).ExecutionStartToCloseTimeout
		}
		return null
	}

	public GetFirstRunAt(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).FirstRunAt
		}
		return null
	}

	public GetHeader(): __goscript_common_pb.Header | $.VarRef<__goscript_common_pb.Header> | null {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).Header
		}
		return null
	}

	public GetIdentity(): string {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).Identity
		}
		return ""
	}

	public GetInput(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).Input
		}
		return null
	}

	public GetJitterStart(): types.Duration | $.VarRef<types.Duration> | null {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).JitterStart
		}
		return null
	}

	public GetMemo(): __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).Memo
		}
		return null
	}

	public GetRequestId(): string {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).RequestId
		}
		return ""
	}

	public GetRetryPolicy(): __goscript_common_pb.RetryPolicy | $.VarRef<__goscript_common_pb.RetryPolicy> | null {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).RetryPolicy
		}
		return null
	}

	public GetSearchAttributes(): __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).SearchAttributes
		}
		return null
	}

	public GetTaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).TaskList
		}
		return null
	}

	public GetTaskStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).TaskStartToCloseTimeout
		}
		return null
	}

	public GetWorkflowId(): string {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).WorkflowId
		}
		return ""
	}

	public GetWorkflowIdReusePolicy(): __goscript_workflow_pb.WorkflowIdReusePolicy {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).WorkflowIdReusePolicy
		}
		return 0
	}

	public GetWorkflowType(): __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionRequest>(m).WorkflowType
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionRequest).Size() : StartWorkflowExecutionRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple3: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StartWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionRequest).Size() : StartWorkflowExecutionRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StartWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		const m$: StartWorkflowExecutionRequest = m == null ? $.pointerTarget<StartWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartWorkflowExecutionRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as StartWorkflowExecutionRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as StartWorkflowExecutionRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartWorkflowExecutionRequest).XXX_unrecognized)
		}
		if ((m$ as StartWorkflowExecutionRequest).ActiveClusterSelectionPolicy != null) {
			{
				let [size, err] = __goscript_common_pb.ActiveClusterSelectionPolicy.prototype.MarshalToSizedBuffer.call((m$ as StartWorkflowExecutionRequest).ActiveClusterSelectionPolicy, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa2
		}
		if ((m$ as StartWorkflowExecutionRequest).CronOverlapPolicy != 0) {
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64((m$ as StartWorkflowExecutionRequest).CronOverlapPolicy))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x98
		}
		if ((m$ as StartWorkflowExecutionRequest).FirstRunAt != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as StartWorkflowExecutionRequest).FirstRunAt, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x92
		}
		if ((m$ as StartWorkflowExecutionRequest).JitterStart != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as StartWorkflowExecutionRequest).JitterStart, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8a
		}
		if ((m$ as StartWorkflowExecutionRequest).DelayStart != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as StartWorkflowExecutionRequest).DelayStart, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x82
		}
		if ((m$ as StartWorkflowExecutionRequest).Header != null) {
			{
				let [size, err] = __goscript_common_pb.Header.prototype.MarshalToSizedBuffer.call((m$ as StartWorkflowExecutionRequest).Header, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x7a
		}
		if ((m$ as StartWorkflowExecutionRequest).SearchAttributes != null) {
			{
				let [size, err] = __goscript_common_pb.SearchAttributes.prototype.MarshalToSizedBuffer.call((m$ as StartWorkflowExecutionRequest).SearchAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x72
		}
		if ((m$ as StartWorkflowExecutionRequest).Memo != null) {
			{
				let [size, err] = __goscript_common_pb.Memo.prototype.MarshalToSizedBuffer.call((m$ as StartWorkflowExecutionRequest).Memo, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x6a
		}
		if ($.stringLen((m$ as StartWorkflowExecutionRequest).CronSchedule) > 0) {
			i = i - ($.stringLen((m$ as StartWorkflowExecutionRequest).CronSchedule))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartWorkflowExecutionRequest).CronSchedule)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as StartWorkflowExecutionRequest).CronSchedule)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x62
		}
		if ((m$ as StartWorkflowExecutionRequest).RetryPolicy != null) {
			{
				let [size, err] = __goscript_common_pb.RetryPolicy.prototype.MarshalToSizedBuffer.call((m$ as StartWorkflowExecutionRequest).RetryPolicy, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x5a
		}
		if ((m$ as StartWorkflowExecutionRequest).WorkflowIdReusePolicy != 0) {
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64((m$ as StartWorkflowExecutionRequest).WorkflowIdReusePolicy))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x50
		}
		if ($.stringLen((m$ as StartWorkflowExecutionRequest).RequestId) > 0) {
			i = i - ($.stringLen((m$ as StartWorkflowExecutionRequest).RequestId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartWorkflowExecutionRequest).RequestId)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as StartWorkflowExecutionRequest).RequestId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x4a
		}
		if ($.stringLen((m$ as StartWorkflowExecutionRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as StartWorkflowExecutionRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartWorkflowExecutionRequest).Identity)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as StartWorkflowExecutionRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x42
		}
		if ((m$ as StartWorkflowExecutionRequest).TaskStartToCloseTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as StartWorkflowExecutionRequest).TaskStartToCloseTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x3a
		}
		if ((m$ as StartWorkflowExecutionRequest).ExecutionStartToCloseTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as StartWorkflowExecutionRequest).ExecutionStartToCloseTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		if ((m$ as StartWorkflowExecutionRequest).Input != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as StartWorkflowExecutionRequest).Input, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as StartWorkflowExecutionRequest).TaskList != null) {
			{
				let [size, err] = __goscript_tasklist_pb.TaskList.prototype.MarshalToSizedBuffer.call((m$ as StartWorkflowExecutionRequest).TaskList, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as StartWorkflowExecutionRequest).WorkflowType != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowType.prototype.MarshalToSizedBuffer.call((m$ as StartWorkflowExecutionRequest).WorkflowType, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.stringLen((m$ as StartWorkflowExecutionRequest).WorkflowId) > 0) {
			i = i - ($.stringLen((m$ as StartWorkflowExecutionRequest).WorkflowId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartWorkflowExecutionRequest).WorkflowId)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as StartWorkflowExecutionRequest).WorkflowId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as StartWorkflowExecutionRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as StartWorkflowExecutionRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartWorkflowExecutionRequest).Domain)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as StartWorkflowExecutionRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		$.assignStruct($.pointerValue<StartWorkflowExecutionRequest>(m), $.markAsStructValue(new StartWorkflowExecutionRequest()))
	}

	public Size(): number {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		let n: number = 0
		const m$: StartWorkflowExecutionRequest = m == null ? $.pointerTarget<StartWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartWorkflowExecutionRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as StartWorkflowExecutionRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as StartWorkflowExecutionRequest).WorkflowId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as StartWorkflowExecutionRequest).WorkflowType != null) {
			l = __goscript_common_pb.WorkflowType.prototype.Size.call((m$ as StartWorkflowExecutionRequest).WorkflowType)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as StartWorkflowExecutionRequest).TaskList != null) {
			l = __goscript_tasklist_pb.TaskList.prototype.Size.call((m$ as StartWorkflowExecutionRequest).TaskList)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as StartWorkflowExecutionRequest).Input != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as StartWorkflowExecutionRequest).Input)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as StartWorkflowExecutionRequest).ExecutionStartToCloseTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as StartWorkflowExecutionRequest).ExecutionStartToCloseTimeout)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as StartWorkflowExecutionRequest).TaskStartToCloseTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as StartWorkflowExecutionRequest).TaskStartToCloseTimeout)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as StartWorkflowExecutionRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as StartWorkflowExecutionRequest).RequestId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as StartWorkflowExecutionRequest).WorkflowIdReusePolicy != 0) {
			n = n + (1 + sovServiceWorkflow($.uint64((m$ as StartWorkflowExecutionRequest).WorkflowIdReusePolicy)))
		}
		if ((m$ as StartWorkflowExecutionRequest).RetryPolicy != null) {
			l = __goscript_common_pb.RetryPolicy.prototype.Size.call((m$ as StartWorkflowExecutionRequest).RetryPolicy)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as StartWorkflowExecutionRequest).CronSchedule)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as StartWorkflowExecutionRequest).Memo != null) {
			l = __goscript_common_pb.Memo.prototype.Size.call((m$ as StartWorkflowExecutionRequest).Memo)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as StartWorkflowExecutionRequest).SearchAttributes != null) {
			l = __goscript_common_pb.SearchAttributes.prototype.Size.call((m$ as StartWorkflowExecutionRequest).SearchAttributes)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as StartWorkflowExecutionRequest).Header != null) {
			l = __goscript_common_pb.Header.prototype.Size.call((m$ as StartWorkflowExecutionRequest).Header)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as StartWorkflowExecutionRequest).DelayStart != null) {
			l = types.Duration.prototype.Size.call((m$ as StartWorkflowExecutionRequest).DelayStart)
			n = n + ((2 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as StartWorkflowExecutionRequest).JitterStart != null) {
			l = types.Duration.prototype.Size.call((m$ as StartWorkflowExecutionRequest).JitterStart)
			n = n + ((2 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as StartWorkflowExecutionRequest).FirstRunAt != null) {
			l = types.Timestamp.prototype.Size.call((m$ as StartWorkflowExecutionRequest).FirstRunAt)
			n = n + ((2 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as StartWorkflowExecutionRequest).CronOverlapPolicy != 0) {
			n = n + (2 + sovServiceWorkflow($.uint64((m$ as StartWorkflowExecutionRequest).CronOverlapPolicy)))
		}
		if ((m$ as StartWorkflowExecutionRequest).ActiveClusterSelectionPolicy != null) {
			l = __goscript_common_pb.ActiveClusterSelectionPolicy.prototype.Size.call((m$ as StartWorkflowExecutionRequest).ActiveClusterSelectionPolicy)
			n = n + ((2 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as StartWorkflowExecutionRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as StartWorkflowExecutionRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.StartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		const m$: StartWorkflowExecutionRequest = m == null ? $.pointerTarget<StartWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartWorkflowExecutionRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: StartWorkflowExecutionRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: StartWorkflowExecutionRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartWorkflowExecutionRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartWorkflowExecutionRequest).WorkflowId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartWorkflowExecutionRequest).WorkflowType == null) {
						;(m$ as StartWorkflowExecutionRequest).WorkflowType = new __goscript_common_pb.WorkflowType()
					}
					{
						let err = __goscript_common_pb.WorkflowType.prototype.Unmarshal.call((m$ as StartWorkflowExecutionRequest).WorkflowType, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field TaskList", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartWorkflowExecutionRequest).TaskList == null) {
						;(m$ as StartWorkflowExecutionRequest).TaskList = new __goscript_tasklist_pb.TaskList()
					}
					{
						let err = __goscript_tasklist_pb.TaskList.prototype.Unmarshal.call((m$ as StartWorkflowExecutionRequest).TaskList, $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartWorkflowExecutionRequest).Input == null) {
						;(m$ as StartWorkflowExecutionRequest).Input = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as StartWorkflowExecutionRequest).Input, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field ExecutionStartToCloseTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartWorkflowExecutionRequest).ExecutionStartToCloseTimeout == null) {
						;(m$ as StartWorkflowExecutionRequest).ExecutionStartToCloseTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as StartWorkflowExecutionRequest).ExecutionStartToCloseTimeout, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field TaskStartToCloseTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartWorkflowExecutionRequest).TaskStartToCloseTimeout == null) {
						;(m$ as StartWorkflowExecutionRequest).TaskStartToCloseTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as StartWorkflowExecutionRequest).TaskStartToCloseTimeout, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Identity", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartWorkflowExecutionRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 9:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RequestId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartWorkflowExecutionRequest).RequestId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 10:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowIdReusePolicy", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as StartWorkflowExecutionRequest).WorkflowIdReusePolicy = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++;
						;(m$ as StartWorkflowExecutionRequest).WorkflowIdReusePolicy = (m$ as StartWorkflowExecutionRequest).WorkflowIdReusePolicy | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 11:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RetryPolicy", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartWorkflowExecutionRequest).RetryPolicy == null) {
						;(m$ as StartWorkflowExecutionRequest).RetryPolicy = new __goscript_common_pb.RetryPolicy()
					}
					{
						let err = __goscript_common_pb.RetryPolicy.prototype.Unmarshal.call((m$ as StartWorkflowExecutionRequest).RetryPolicy, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field CronSchedule", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartWorkflowExecutionRequest).CronSchedule = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 13:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Memo", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartWorkflowExecutionRequest).Memo == null) {
						;(m$ as StartWorkflowExecutionRequest).Memo = new __goscript_common_pb.Memo()
					}
					{
						let err = __goscript_common_pb.Memo.prototype.Unmarshal.call((m$ as StartWorkflowExecutionRequest).Memo, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field SearchAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartWorkflowExecutionRequest).SearchAttributes == null) {
						;(m$ as StartWorkflowExecutionRequest).SearchAttributes = new __goscript_common_pb.SearchAttributes()
					}
					{
						let err = __goscript_common_pb.SearchAttributes.prototype.Unmarshal.call((m$ as StartWorkflowExecutionRequest).SearchAttributes, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Header", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartWorkflowExecutionRequest).Header == null) {
						;(m$ as StartWorkflowExecutionRequest).Header = new __goscript_common_pb.Header()
					}
					{
						let err = __goscript_common_pb.Header.prototype.Unmarshal.call((m$ as StartWorkflowExecutionRequest).Header, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 16:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field DelayStart", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartWorkflowExecutionRequest).DelayStart == null) {
						;(m$ as StartWorkflowExecutionRequest).DelayStart = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as StartWorkflowExecutionRequest).DelayStart, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field JitterStart", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartWorkflowExecutionRequest).JitterStart == null) {
						;(m$ as StartWorkflowExecutionRequest).JitterStart = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as StartWorkflowExecutionRequest).JitterStart, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 18:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field FirstRunAt", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartWorkflowExecutionRequest).FirstRunAt == null) {
						;(m$ as StartWorkflowExecutionRequest).FirstRunAt = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as StartWorkflowExecutionRequest).FirstRunAt, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 19:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field CronOverlapPolicy", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as StartWorkflowExecutionRequest).CronOverlapPolicy = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++;
						;(m$ as StartWorkflowExecutionRequest).CronOverlapPolicy = (m$ as StartWorkflowExecutionRequest).CronOverlapPolicy | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 20:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveClusterSelectionPolicy", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartWorkflowExecutionRequest).ActiveClusterSelectionPolicy == null) {
						;(m$ as StartWorkflowExecutionRequest).ActiveClusterSelectionPolicy = new __goscript_common_pb.ActiveClusterSelectionPolicy()
					}
					{
						let err = __goscript_common_pb.ActiveClusterSelectionPolicy.prototype.Unmarshal.call((m$ as StartWorkflowExecutionRequest).ActiveClusterSelectionPolicy, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartWorkflowExecutionRequest).XXX_unrecognized = $.appendSlice((m$ as StartWorkflowExecutionRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_StartWorkflowExecutionRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.StartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_StartWorkflowExecutionRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.StartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionRequest).MarshalToSizedBuffer(b) : StartWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_StartWorkflowExecutionRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.StartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionRequest")), src)
	}

	public XXX_Size(): number {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionRequest).Size() : StartWorkflowExecutionRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionRequest).Unmarshal(b) : StartWorkflowExecutionRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.StartWorkflowExecutionRequest",
		() => new StartWorkflowExecutionRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetActiveClusterSelectionPolicy", [], [/* @__PURE__ */ $.pointerType("apiv1.ActiveClusterSelectionPolicy")], true), $.methodSignature("GetCronOverlapPolicy", [], [/* @__PURE__ */ $.basicType("int32", "apiv1.CronOverlapPolicy")], true), $.methodSignature("GetCronSchedule", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetDelayStart", [], [/* @__PURE__ */ $.pointerType("types.Duration")], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetExecutionStartToCloseTimeout", [], [/* @__PURE__ */ $.pointerType("types.Duration")], true), $.methodSignature("GetFirstRunAt", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetHeader", [], [/* @__PURE__ */ $.pointerType("apiv1.Header")], true), $.methodSignature("GetIdentity", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetInput", [], [/* @__PURE__ */ $.pointerType("apiv1.Payload")], true), $.methodSignature("GetJitterStart", [], [/* @__PURE__ */ $.pointerType("types.Duration")], true), $.methodSignature("GetMemo", [], [/* @__PURE__ */ $.pointerType("apiv1.Memo")], true), $.methodSignature("GetRequestId", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetRetryPolicy", [], [/* @__PURE__ */ $.pointerType("apiv1.RetryPolicy")], true), $.methodSignature("GetSearchAttributes", [], [/* @__PURE__ */ $.pointerType("apiv1.SearchAttributes")], true), $.methodSignature("GetTaskList", [], [/* @__PURE__ */ $.pointerType("apiv1.TaskList")], true), $.methodSignature("GetTaskStartToCloseTimeout", [], [/* @__PURE__ */ $.pointerType("types.Duration")], true), $.methodSignature("GetWorkflowId", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetWorkflowIdReusePolicy", [], [/* @__PURE__ */ $.basicType("int32", "apiv1.WorkflowIdReusePolicy")], true), $.methodSignature("GetWorkflowType", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowType")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		StartWorkflowExecutionRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowId", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=workflow_id,json=workflowId,proto3\" json:\"workflow_id,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowType", /* @__PURE__ */ $.pointerType("apiv1.WorkflowType"), [2], 32, true, { tag: "protobuf:\"bytes,3,opt,name=workflow_type,json=workflowType,proto3\" json:\"workflow_type,omitempty\"" }), /* @__PURE__ */ $.structField("TaskList", /* @__PURE__ */ $.pointerType("apiv1.TaskList"), [3], 40, true, { tag: "protobuf:\"bytes,4,opt,name=task_list,json=taskList,proto3\" json:\"task_list,omitempty\"" }), /* @__PURE__ */ $.structField("Input", /* @__PURE__ */ $.pointerType("apiv1.Payload"), [4], 48, true, { tag: "protobuf:\"bytes,5,opt,name=input,proto3\" json:\"input,omitempty\"" }), /* @__PURE__ */ $.structField("ExecutionStartToCloseTimeout", /* @__PURE__ */ $.pointerType("types.Duration"), [5], 56, true, { tag: "protobuf:\"bytes,6,opt,name=execution_start_to_close_timeout,json=executionStartToCloseTimeout,proto3\" json:\"execution_start_to_close_timeout,omitempty\"" }), /* @__PURE__ */ $.structField("TaskStartToCloseTimeout", /* @__PURE__ */ $.pointerType("types.Duration"), [6], 64, true, { tag: "protobuf:\"bytes,7,opt,name=task_start_to_close_timeout,json=taskStartToCloseTimeout,proto3\" json:\"task_start_to_close_timeout,omitempty\"" }), /* @__PURE__ */ $.structField("Identity", /* @__PURE__ */ $.basicType("string"), [7], 72, true, { tag: "protobuf:\"bytes,8,opt,name=identity,proto3\" json:\"identity,omitempty\"" }), /* @__PURE__ */ $.structField("RequestId", /* @__PURE__ */ $.basicType("string"), [8], 88, true, { tag: "protobuf:\"bytes,9,opt,name=request_id,json=requestId,proto3\" json:\"request_id,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowIdReusePolicy", /* @__PURE__ */ $.basicType("int32", "apiv1.WorkflowIdReusePolicy"), [9], 104, true, { tag: "protobuf:\"varint,10,opt,name=workflow_id_reuse_policy,json=workflowIdReusePolicy,proto3,enum=uber.cadence.api.v1.WorkflowIdReusePolicy\" json:\"workflow_id_reuse_policy,omitempty\"" }), /* @__PURE__ */ $.structField("RetryPolicy", /* @__PURE__ */ $.pointerType("apiv1.RetryPolicy"), [10], 112, true, { tag: "protobuf:\"bytes,11,opt,name=retry_policy,json=retryPolicy,proto3\" json:\"retry_policy,omitempty\"" }), /* @__PURE__ */ $.structField("CronSchedule", /* @__PURE__ */ $.basicType("string"), [11], 120, true, { tag: "protobuf:\"bytes,12,opt,name=cron_schedule,json=cronSchedule,proto3\" json:\"cron_schedule,omitempty\"" }), /* @__PURE__ */ $.structField("Memo", /* @__PURE__ */ $.pointerType("apiv1.Memo"), [12], 136, true, { tag: "protobuf:\"bytes,13,opt,name=memo,proto3\" json:\"memo,omitempty\"" }), /* @__PURE__ */ $.structField("SearchAttributes", /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes"), [13], 144, true, { tag: "protobuf:\"bytes,14,opt,name=search_attributes,json=searchAttributes,proto3\" json:\"search_attributes,omitempty\"" }), /* @__PURE__ */ $.structField("Header", /* @__PURE__ */ $.pointerType("apiv1.Header"), [14], 152, true, { tag: "protobuf:\"bytes,15,opt,name=header,proto3\" json:\"header,omitempty\"" }), /* @__PURE__ */ $.structField("DelayStart", /* @__PURE__ */ $.pointerType("types.Duration"), [15], 160, true, { tag: "protobuf:\"bytes,16,opt,name=delay_start,json=delayStart,proto3\" json:\"delay_start,omitempty\"" }), /* @__PURE__ */ $.structField("JitterStart", /* @__PURE__ */ $.pointerType("types.Duration"), [16], 168, true, { tag: "protobuf:\"bytes,17,opt,name=jitter_start,json=jitterStart,proto3\" json:\"jitter_start,omitempty\"" }), /* @__PURE__ */ $.structField("FirstRunAt", /* @__PURE__ */ $.pointerType("types.Timestamp"), [17], 176, true, { tag: "protobuf:\"bytes,18,opt,name=first_run_at,json=firstRunAt,proto3\" json:\"first_run_at,omitempty\"" }), /* @__PURE__ */ $.structField("CronOverlapPolicy", /* @__PURE__ */ $.basicType("int32", "apiv1.CronOverlapPolicy"), [18], 184, true, { tag: "protobuf:\"varint,19,opt,name=cron_overlap_policy,json=cronOverlapPolicy,proto3,enum=uber.cadence.api.v1.CronOverlapPolicy\" json:\"cron_overlap_policy,omitempty\"" }), /* @__PURE__ */ $.structField("ActiveClusterSelectionPolicy", /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterSelectionPolicy"), [19], 192, true, { tag: "protobuf:\"bytes,20,opt,name=active_cluster_selection_policy,json=activeClusterSelectionPolicy,proto3\" json:\"active_cluster_selection_policy,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [20], 200, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [21], 200, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [22], 224, true, { tag: "json:\"-\"" })]
	)
}

export class StartWorkflowExecutionResponse {
	public get RunId(): string {
		return this._fields.RunId
	}

	public set RunId(value: string) {
		this._fields.RunId = value
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
		RunId: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{RunId?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			RunId: init?.RunId ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StartWorkflowExecutionResponse {
		return new StartWorkflowExecutionResponse(this, true)
	}

	public __goscriptAssign(source: StartWorkflowExecutionResponse): void {
		const target = this._fields
		const values = source._fields
		target.RunId = values.RunId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([4])]
	}

	public GetRunId(): string {
		const m: StartWorkflowExecutionResponse | $.VarRef<StartWorkflowExecutionResponse> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionResponse>(m).RunId
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: StartWorkflowExecutionResponse | $.VarRef<StartWorkflowExecutionResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionResponse).Size() : StartWorkflowExecutionResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StartWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StartWorkflowExecutionResponse | $.VarRef<StartWorkflowExecutionResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionResponse).Size() : StartWorkflowExecutionResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StartWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StartWorkflowExecutionResponse | $.VarRef<StartWorkflowExecutionResponse> | null = this;
		const m$: StartWorkflowExecutionResponse = m == null ? $.pointerTarget<StartWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartWorkflowExecutionResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as StartWorkflowExecutionResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as StartWorkflowExecutionResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartWorkflowExecutionResponse).XXX_unrecognized)
		}
		if ($.stringLen((m$ as StartWorkflowExecutionResponse).RunId) > 0) {
			i = i - ($.stringLen((m$ as StartWorkflowExecutionResponse).RunId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartWorkflowExecutionResponse).RunId)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as StartWorkflowExecutionResponse).RunId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: StartWorkflowExecutionResponse | $.VarRef<StartWorkflowExecutionResponse> | null = this;
		$.assignStruct($.pointerValue<StartWorkflowExecutionResponse>(m), $.markAsStructValue(new StartWorkflowExecutionResponse()))
	}

	public Size(): number {
		const m: StartWorkflowExecutionResponse | $.VarRef<StartWorkflowExecutionResponse> | null = this;
		let n: number = 0
		const m$: StartWorkflowExecutionResponse = m == null ? $.pointerTarget<StartWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartWorkflowExecutionResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as StartWorkflowExecutionResponse).RunId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as StartWorkflowExecutionResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as StartWorkflowExecutionResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: StartWorkflowExecutionResponse | $.VarRef<StartWorkflowExecutionResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.StartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: StartWorkflowExecutionResponse | $.VarRef<StartWorkflowExecutionResponse> | null = this;
		const m$: StartWorkflowExecutionResponse = m == null ? $.pointerTarget<StartWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartWorkflowExecutionResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow4 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: StartWorkflowExecutionResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: StartWorkflowExecutionResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RunId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartWorkflowExecutionResponse).RunId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartWorkflowExecutionResponse).XXX_unrecognized = $.appendSlice((m$ as StartWorkflowExecutionResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: StartWorkflowExecutionResponse | $.VarRef<StartWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_StartWorkflowExecutionResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.StartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: StartWorkflowExecutionResponse | $.VarRef<StartWorkflowExecutionResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_StartWorkflowExecutionResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.StartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionResponse).MarshalToSizedBuffer(b) : StartWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: StartWorkflowExecutionResponse | $.VarRef<StartWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_StartWorkflowExecutionResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.StartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionResponse")), src)
	}

	public XXX_Size(): number {
		const m: StartWorkflowExecutionResponse | $.VarRef<StartWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionResponse).Size() : StartWorkflowExecutionResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: StartWorkflowExecutionResponse | $.VarRef<StartWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionResponse).Unmarshal(b) : StartWorkflowExecutionResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.StartWorkflowExecutionResponse",
		() => new StartWorkflowExecutionResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetRunId", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		StartWorkflowExecutionResponse,
		() => [/* @__PURE__ */ $.structField("RunId", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=run_id,json=runId,proto3\" json:\"run_id,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [1], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [3], 40, true, { tag: "json:\"-\"" })]
	)
}

export class StartWorkflowExecutionAsyncRequest {
	public get Request(): StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null {
		return this._fields.Request
	}

	public set Request(value: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null) {
		this._fields.Request = value
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
		Request: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Request?: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Request: init?.Request ?? (null! as StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StartWorkflowExecutionAsyncRequest {
		return new StartWorkflowExecutionAsyncRequest(this, true)
	}

	public __goscriptAssign(source: StartWorkflowExecutionAsyncRequest): void {
		const target = this._fields
		const values = source._fields
		target.Request = values.Request
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([5])]
	}

	public GetRequest(): StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null {
		const m: StartWorkflowExecutionAsyncRequest | $.VarRef<StartWorkflowExecutionAsyncRequest> | null = this;
		if (m != null) {
			return $.pointerValue<StartWorkflowExecutionAsyncRequest>(m).Request
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: StartWorkflowExecutionAsyncRequest | $.VarRef<StartWorkflowExecutionAsyncRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionAsyncRequest).Size() : StartWorkflowExecutionAsyncRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple5: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionAsyncRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StartWorkflowExecutionAsyncRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StartWorkflowExecutionAsyncRequest | $.VarRef<StartWorkflowExecutionAsyncRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionAsyncRequest).Size() : StartWorkflowExecutionAsyncRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionAsyncRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StartWorkflowExecutionAsyncRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StartWorkflowExecutionAsyncRequest | $.VarRef<StartWorkflowExecutionAsyncRequest> | null = this;
		const m$: StartWorkflowExecutionAsyncRequest = m == null ? $.pointerTarget<StartWorkflowExecutionAsyncRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartWorkflowExecutionAsyncRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as StartWorkflowExecutionAsyncRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as StartWorkflowExecutionAsyncRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartWorkflowExecutionAsyncRequest).XXX_unrecognized)
		}
		if ((m$ as StartWorkflowExecutionAsyncRequest).Request != null) {
			{
				let [size, err] = StartWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call((m$ as StartWorkflowExecutionAsyncRequest).Request, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: StartWorkflowExecutionAsyncRequest | $.VarRef<StartWorkflowExecutionAsyncRequest> | null = this;
		$.assignStruct($.pointerValue<StartWorkflowExecutionAsyncRequest>(m), $.markAsStructValue(new StartWorkflowExecutionAsyncRequest()))
	}

	public Size(): number {
		const m: StartWorkflowExecutionAsyncRequest | $.VarRef<StartWorkflowExecutionAsyncRequest> | null = this;
		let n: number = 0
		const m$: StartWorkflowExecutionAsyncRequest = m == null ? $.pointerTarget<StartWorkflowExecutionAsyncRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartWorkflowExecutionAsyncRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as StartWorkflowExecutionAsyncRequest).Request != null) {
			l = StartWorkflowExecutionRequest.prototype.Size.call((m$ as StartWorkflowExecutionAsyncRequest).Request)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as StartWorkflowExecutionAsyncRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as StartWorkflowExecutionAsyncRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: StartWorkflowExecutionAsyncRequest | $.VarRef<StartWorkflowExecutionAsyncRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.StartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: StartWorkflowExecutionAsyncRequest | $.VarRef<StartWorkflowExecutionAsyncRequest> | null = this;
		const m$: StartWorkflowExecutionAsyncRequest = m == null ? $.pointerTarget<StartWorkflowExecutionAsyncRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartWorkflowExecutionAsyncRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow5 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: StartWorkflowExecutionAsyncRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: StartWorkflowExecutionAsyncRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Request", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartWorkflowExecutionAsyncRequest).Request == null) {
						;(m$ as StartWorkflowExecutionAsyncRequest).Request = new StartWorkflowExecutionRequest()
					}
					{
						let err = StartWorkflowExecutionRequest.prototype.Unmarshal.call((m$ as StartWorkflowExecutionAsyncRequest).Request, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartWorkflowExecutionAsyncRequest).XXX_unrecognized = $.appendSlice((m$ as StartWorkflowExecutionAsyncRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: StartWorkflowExecutionAsyncRequest | $.VarRef<StartWorkflowExecutionAsyncRequest> | null = this;
		await xxx_messageInfo_StartWorkflowExecutionAsyncRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.StartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: StartWorkflowExecutionAsyncRequest | $.VarRef<StartWorkflowExecutionAsyncRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_StartWorkflowExecutionAsyncRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.StartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionAsyncRequest).MarshalToSizedBuffer(b) : StartWorkflowExecutionAsyncRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: StartWorkflowExecutionAsyncRequest | $.VarRef<StartWorkflowExecutionAsyncRequest> | null = this;
		await xxx_messageInfo_StartWorkflowExecutionAsyncRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.StartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncRequest")), src)
	}

	public XXX_Size(): number {
		const m: StartWorkflowExecutionAsyncRequest | $.VarRef<StartWorkflowExecutionAsyncRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionAsyncRequest).Size() : StartWorkflowExecutionAsyncRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: StartWorkflowExecutionAsyncRequest | $.VarRef<StartWorkflowExecutionAsyncRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionAsyncRequest).Unmarshal(b) : StartWorkflowExecutionAsyncRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.StartWorkflowExecutionAsyncRequest",
		() => new StartWorkflowExecutionAsyncRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetRequest", [], [/* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionRequest")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		StartWorkflowExecutionAsyncRequest,
		() => [/* @__PURE__ */ $.structField("Request", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionRequest"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=request,proto3\" json:\"request,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [1], 8, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 8, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [3], 32, true, { tag: "json:\"-\"" })]
	)
}

export class StartWorkflowExecutionAsyncResponse {
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

	public clone(): StartWorkflowExecutionAsyncResponse {
		return new StartWorkflowExecutionAsyncResponse(this, true)
	}

	public __goscriptAssign(source: StartWorkflowExecutionAsyncResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([6])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: StartWorkflowExecutionAsyncResponse | $.VarRef<StartWorkflowExecutionAsyncResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionAsyncResponse).Size() : StartWorkflowExecutionAsyncResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple6: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionAsyncResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StartWorkflowExecutionAsyncResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StartWorkflowExecutionAsyncResponse | $.VarRef<StartWorkflowExecutionAsyncResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionAsyncResponse).Size() : StartWorkflowExecutionAsyncResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionAsyncResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StartWorkflowExecutionAsyncResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StartWorkflowExecutionAsyncResponse | $.VarRef<StartWorkflowExecutionAsyncResponse> | null = this;
		const m$: StartWorkflowExecutionAsyncResponse = m == null ? $.pointerTarget<StartWorkflowExecutionAsyncResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartWorkflowExecutionAsyncResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as StartWorkflowExecutionAsyncResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as StartWorkflowExecutionAsyncResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartWorkflowExecutionAsyncResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: StartWorkflowExecutionAsyncResponse | $.VarRef<StartWorkflowExecutionAsyncResponse> | null = this;
		$.assignStruct($.pointerValue<StartWorkflowExecutionAsyncResponse>(m), new StartWorkflowExecutionAsyncResponse(undefined, true))
	}

	public Size(): number {
		const m: StartWorkflowExecutionAsyncResponse | $.VarRef<StartWorkflowExecutionAsyncResponse> | null = this;
		let n: number = 0
		const m$: StartWorkflowExecutionAsyncResponse = m == null ? $.pointerTarget<StartWorkflowExecutionAsyncResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartWorkflowExecutionAsyncResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as StartWorkflowExecutionAsyncResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as StartWorkflowExecutionAsyncResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: StartWorkflowExecutionAsyncResponse | $.VarRef<StartWorkflowExecutionAsyncResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.StartWorkflowExecutionAsyncResponse", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: StartWorkflowExecutionAsyncResponse | $.VarRef<StartWorkflowExecutionAsyncResponse> | null = this;
		const m$: StartWorkflowExecutionAsyncResponse = m == null ? $.pointerTarget<StartWorkflowExecutionAsyncResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartWorkflowExecutionAsyncResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow6 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: StartWorkflowExecutionAsyncResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: StartWorkflowExecutionAsyncResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartWorkflowExecutionAsyncResponse).XXX_unrecognized = $.appendSlice((m$ as StartWorkflowExecutionAsyncResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: StartWorkflowExecutionAsyncResponse | $.VarRef<StartWorkflowExecutionAsyncResponse> | null = this;
		await xxx_messageInfo_StartWorkflowExecutionAsyncResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.StartWorkflowExecutionAsyncResponse", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: StartWorkflowExecutionAsyncResponse | $.VarRef<StartWorkflowExecutionAsyncResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_StartWorkflowExecutionAsyncResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.StartWorkflowExecutionAsyncResponse", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionAsyncResponse).MarshalToSizedBuffer(b) : StartWorkflowExecutionAsyncResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: StartWorkflowExecutionAsyncResponse | $.VarRef<StartWorkflowExecutionAsyncResponse> | null = this;
		await xxx_messageInfo_StartWorkflowExecutionAsyncResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.StartWorkflowExecutionAsyncResponse", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncResponse")), src)
	}

	public XXX_Size(): number {
		const m: StartWorkflowExecutionAsyncResponse | $.VarRef<StartWorkflowExecutionAsyncResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionAsyncResponse).Size() : StartWorkflowExecutionAsyncResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: StartWorkflowExecutionAsyncResponse | $.VarRef<StartWorkflowExecutionAsyncResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartWorkflowExecutionAsyncResponse).Unmarshal(b) : StartWorkflowExecutionAsyncResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.StartWorkflowExecutionAsyncResponse",
		() => new StartWorkflowExecutionAsyncResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		StartWorkflowExecutionAsyncResponse,
		() => [/* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [0], 0, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [2], 24, true, { tag: "json:\"-\"" })]
	)
}

export class RestartWorkflowExecutionResponse {
	public get RunId(): string {
		return this._fields.RunId
	}

	public set RunId(value: string) {
		this._fields.RunId = value
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
		RunId: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{RunId?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			RunId: init?.RunId ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RestartWorkflowExecutionResponse {
		return new RestartWorkflowExecutionResponse(this, true)
	}

	public __goscriptAssign(source: RestartWorkflowExecutionResponse): void {
		const target = this._fields
		const values = source._fields
		target.RunId = values.RunId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([7])]
	}

	public GetRunId(): string {
		const m: RestartWorkflowExecutionResponse | $.VarRef<RestartWorkflowExecutionResponse> | null = this;
		if (m != null) {
			return $.pointerValue<RestartWorkflowExecutionResponse>(m).RunId
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RestartWorkflowExecutionResponse | $.VarRef<RestartWorkflowExecutionResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RestartWorkflowExecutionResponse).Size() : RestartWorkflowExecutionResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple7: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RestartWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RestartWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RestartWorkflowExecutionResponse | $.VarRef<RestartWorkflowExecutionResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RestartWorkflowExecutionResponse).Size() : RestartWorkflowExecutionResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RestartWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RestartWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RestartWorkflowExecutionResponse | $.VarRef<RestartWorkflowExecutionResponse> | null = this;
		const m$: RestartWorkflowExecutionResponse = m == null ? $.pointerTarget<RestartWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RestartWorkflowExecutionResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RestartWorkflowExecutionResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RestartWorkflowExecutionResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RestartWorkflowExecutionResponse).XXX_unrecognized)
		}
		if ($.stringLen((m$ as RestartWorkflowExecutionResponse).RunId) > 0) {
			i = i - ($.stringLen((m$ as RestartWorkflowExecutionResponse).RunId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RestartWorkflowExecutionResponse).RunId)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as RestartWorkflowExecutionResponse).RunId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RestartWorkflowExecutionResponse | $.VarRef<RestartWorkflowExecutionResponse> | null = this;
		$.assignStruct($.pointerValue<RestartWorkflowExecutionResponse>(m), $.markAsStructValue(new RestartWorkflowExecutionResponse()))
	}

	public Size(): number {
		const m: RestartWorkflowExecutionResponse | $.VarRef<RestartWorkflowExecutionResponse> | null = this;
		let n: number = 0
		const m$: RestartWorkflowExecutionResponse = m == null ? $.pointerTarget<RestartWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RestartWorkflowExecutionResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as RestartWorkflowExecutionResponse).RunId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as RestartWorkflowExecutionResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RestartWorkflowExecutionResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RestartWorkflowExecutionResponse | $.VarRef<RestartWorkflowExecutionResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RestartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RestartWorkflowExecutionResponse | $.VarRef<RestartWorkflowExecutionResponse> | null = this;
		const m$: RestartWorkflowExecutionResponse = m == null ? $.pointerTarget<RestartWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RestartWorkflowExecutionResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow7 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: RestartWorkflowExecutionResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RestartWorkflowExecutionResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RunId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RestartWorkflowExecutionResponse).RunId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RestartWorkflowExecutionResponse).XXX_unrecognized = $.appendSlice((m$ as RestartWorkflowExecutionResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RestartWorkflowExecutionResponse | $.VarRef<RestartWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_RestartWorkflowExecutionResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RestartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: RestartWorkflowExecutionResponse | $.VarRef<RestartWorkflowExecutionResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RestartWorkflowExecutionResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RestartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RestartWorkflowExecutionResponse).MarshalToSizedBuffer(b) : RestartWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: RestartWorkflowExecutionResponse | $.VarRef<RestartWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_RestartWorkflowExecutionResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RestartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionResponse")), src)
	}

	public XXX_Size(): number {
		const m: RestartWorkflowExecutionResponse | $.VarRef<RestartWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RestartWorkflowExecutionResponse).Size() : RestartWorkflowExecutionResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RestartWorkflowExecutionResponse | $.VarRef<RestartWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RestartWorkflowExecutionResponse).Unmarshal(b) : RestartWorkflowExecutionResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RestartWorkflowExecutionResponse",
		() => new RestartWorkflowExecutionResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetRunId", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		RestartWorkflowExecutionResponse,
		() => [/* @__PURE__ */ $.structField("RunId", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=run_id,json=runId,proto3\" json:\"run_id,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [1], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [3], 40, true, { tag: "json:\"-\"" })]
	)
}

export class SignalWorkflowExecutionRequest {
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

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
	}

	public get RequestId(): string {
		return this._fields.RequestId
	}

	public set RequestId(value: string) {
		this._fields.RequestId = value
	}

	public get SignalName(): string {
		return this._fields.SignalName
	}

	public set SignalName(value: string) {
		this._fields.SignalName = value
	}

	public get SignalInput(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.SignalInput
	}

	public set SignalInput(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.SignalInput = value
	}

	public get Control(): $.Slice<number> {
		return this._fields.Control
	}

	public set Control(value: $.Slice<number>) {
		this._fields.Control = value
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
		Identity: string
		RequestId: string
		SignalName: string
		SignalInput: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		Control: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, Identity?: string, RequestId?: string, SignalName?: string, SignalInput?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, Control?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			Identity: init?.Identity ?? ("" as string),
			RequestId: init?.RequestId ?? ("" as string),
			SignalName: init?.SignalName ?? ("" as string),
			SignalInput: init?.SignalInput ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			Control: init?.Control ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SignalWorkflowExecutionRequest {
		return new SignalWorkflowExecutionRequest(this, true)
	}

	public __goscriptAssign(source: SignalWorkflowExecutionRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowExecution = values.WorkflowExecution
		target.Identity = values.Identity
		target.RequestId = values.RequestId
		target.SignalName = values.SignalName
		target.SignalInput = values.SignalInput
		target.Control = values.Control
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([8])]
	}

	public GetControl(): $.Slice<number> {
		const m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<SignalWorkflowExecutionRequest>(m).Control
		}
		return null
	}

	public GetDomain(): string {
		const m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<SignalWorkflowExecutionRequest>(m).Domain
		}
		return ""
	}

	public GetIdentity(): string {
		const m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<SignalWorkflowExecutionRequest>(m).Identity
		}
		return ""
	}

	public GetRequestId(): string {
		const m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<SignalWorkflowExecutionRequest>(m).RequestId
		}
		return ""
	}

	public GetSignalInput(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<SignalWorkflowExecutionRequest>(m).SignalInput
		}
		return null
	}

	public GetSignalName(): string {
		const m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<SignalWorkflowExecutionRequest>(m).SignalName
		}
		return ""
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<SignalWorkflowExecutionRequest>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWorkflowExecutionRequest).Size() : SignalWorkflowExecutionRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple8: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SignalWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWorkflowExecutionRequest).Size() : SignalWorkflowExecutionRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SignalWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		const m$: SignalWorkflowExecutionRequest = m == null ? $.pointerTarget<SignalWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWorkflowExecutionRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as SignalWorkflowExecutionRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as SignalWorkflowExecutionRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalWorkflowExecutionRequest).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as SignalWorkflowExecutionRequest).Control) > 0) {
			i = i - ($.sliceLen((m$ as SignalWorkflowExecutionRequest).Control))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalWorkflowExecutionRequest).Control)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.sliceLen((m$ as SignalWorkflowExecutionRequest).Control)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x3a
		}
		if ((m$ as SignalWorkflowExecutionRequest).SignalInput != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as SignalWorkflowExecutionRequest).SignalInput, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		if ($.stringLen((m$ as SignalWorkflowExecutionRequest).SignalName) > 0) {
			i = i - ($.stringLen((m$ as SignalWorkflowExecutionRequest).SignalName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalWorkflowExecutionRequest).SignalName)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as SignalWorkflowExecutionRequest).SignalName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ($.stringLen((m$ as SignalWorkflowExecutionRequest).RequestId) > 0) {
			i = i - ($.stringLen((m$ as SignalWorkflowExecutionRequest).RequestId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalWorkflowExecutionRequest).RequestId)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as SignalWorkflowExecutionRequest).RequestId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as SignalWorkflowExecutionRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as SignalWorkflowExecutionRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalWorkflowExecutionRequest).Identity)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as SignalWorkflowExecutionRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as SignalWorkflowExecutionRequest).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as SignalWorkflowExecutionRequest).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as SignalWorkflowExecutionRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as SignalWorkflowExecutionRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalWorkflowExecutionRequest).Domain)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as SignalWorkflowExecutionRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		$.assignStruct($.pointerValue<SignalWorkflowExecutionRequest>(m), $.markAsStructValue(new SignalWorkflowExecutionRequest()))
	}

	public Size(): number {
		const m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		let n: number = 0
		const m$: SignalWorkflowExecutionRequest = m == null ? $.pointerTarget<SignalWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWorkflowExecutionRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as SignalWorkflowExecutionRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as SignalWorkflowExecutionRequest).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as SignalWorkflowExecutionRequest).WorkflowExecution)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as SignalWorkflowExecutionRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as SignalWorkflowExecutionRequest).RequestId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as SignalWorkflowExecutionRequest).SignalName)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as SignalWorkflowExecutionRequest).SignalInput != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as SignalWorkflowExecutionRequest).SignalInput)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.sliceLen((m$ as SignalWorkflowExecutionRequest).Control)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as SignalWorkflowExecutionRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as SignalWorkflowExecutionRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		const m$: SignalWorkflowExecutionRequest = m == null ? $.pointerTarget<SignalWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWorkflowExecutionRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow8 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: SignalWorkflowExecutionRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: SignalWorkflowExecutionRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalWorkflowExecutionRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as SignalWorkflowExecutionRequest).WorkflowExecution == null) {
						;(m$ as SignalWorkflowExecutionRequest).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as SignalWorkflowExecutionRequest).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalWorkflowExecutionRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RequestId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalWorkflowExecutionRequest).RequestId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field SignalName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalWorkflowExecutionRequest).SignalName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field SignalInput", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as SignalWorkflowExecutionRequest).SignalInput == null) {
						;(m$ as SignalWorkflowExecutionRequest).SignalInput = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as SignalWorkflowExecutionRequest).SignalInput, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Control", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalWorkflowExecutionRequest).Control = $.appendSlice($.goSlice((m$ as SignalWorkflowExecutionRequest).Control, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as SignalWorkflowExecutionRequest).Control == null) {
						;(m$ as SignalWorkflowExecutionRequest).Control = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalWorkflowExecutionRequest).XXX_unrecognized = $.appendSlice((m$ as SignalWorkflowExecutionRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_SignalWorkflowExecutionRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_SignalWorkflowExecutionRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWorkflowExecutionRequest).MarshalToSizedBuffer(b) : SignalWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_SignalWorkflowExecutionRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionRequest")), src)
	}

	public XXX_Size(): number {
		const m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWorkflowExecutionRequest).Size() : SignalWorkflowExecutionRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: SignalWorkflowExecutionRequest | $.VarRef<SignalWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWorkflowExecutionRequest).Unmarshal(b) : SignalWorkflowExecutionRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.SignalWorkflowExecutionRequest",
		() => new SignalWorkflowExecutionRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetControl", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetIdentity", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetRequestId", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetSignalInput", [], [/* @__PURE__ */ $.pointerType("apiv1.Payload")], true), $.methodSignature("GetSignalName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetWorkflowExecution", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		SignalWorkflowExecutionRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }), /* @__PURE__ */ $.structField("Identity", /* @__PURE__ */ $.basicType("string"), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=identity,proto3\" json:\"identity,omitempty\"" }), /* @__PURE__ */ $.structField("RequestId", /* @__PURE__ */ $.basicType("string"), [3], 40, true, { tag: "protobuf:\"bytes,4,opt,name=request_id,json=requestId,proto3\" json:\"request_id,omitempty\"" }), /* @__PURE__ */ $.structField("SignalName", /* @__PURE__ */ $.basicType("string"), [4], 56, true, { tag: "protobuf:\"bytes,5,opt,name=signal_name,json=signalName,proto3\" json:\"signal_name,omitempty\"" }), /* @__PURE__ */ $.structField("SignalInput", /* @__PURE__ */ $.pointerType("apiv1.Payload"), [5], 72, true, { tag: "protobuf:\"bytes,6,opt,name=signal_input,json=signalInput,proto3\" json:\"signal_input,omitempty\"" }), /* @__PURE__ */ $.structField("Control", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 80, true, { tag: "protobuf:\"bytes,7,opt,name=control,proto3\" json:\"control,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [7], 104, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [8], 104, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [9], 128, true, { tag: "json:\"-\"" })]
	)
}

export class SignalWorkflowExecutionResponse {
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

	public clone(): SignalWorkflowExecutionResponse {
		return new SignalWorkflowExecutionResponse(this, true)
	}

	public __goscriptAssign(source: SignalWorkflowExecutionResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([9])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: SignalWorkflowExecutionResponse | $.VarRef<SignalWorkflowExecutionResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWorkflowExecutionResponse).Size() : SignalWorkflowExecutionResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple9: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SignalWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SignalWorkflowExecutionResponse | $.VarRef<SignalWorkflowExecutionResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWorkflowExecutionResponse).Size() : SignalWorkflowExecutionResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SignalWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SignalWorkflowExecutionResponse | $.VarRef<SignalWorkflowExecutionResponse> | null = this;
		const m$: SignalWorkflowExecutionResponse = m == null ? $.pointerTarget<SignalWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWorkflowExecutionResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as SignalWorkflowExecutionResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as SignalWorkflowExecutionResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalWorkflowExecutionResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: SignalWorkflowExecutionResponse | $.VarRef<SignalWorkflowExecutionResponse> | null = this;
		$.assignStruct($.pointerValue<SignalWorkflowExecutionResponse>(m), new SignalWorkflowExecutionResponse(undefined, true))
	}

	public Size(): number {
		const m: SignalWorkflowExecutionResponse | $.VarRef<SignalWorkflowExecutionResponse> | null = this;
		let n: number = 0
		const m$: SignalWorkflowExecutionResponse = m == null ? $.pointerTarget<SignalWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWorkflowExecutionResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as SignalWorkflowExecutionResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as SignalWorkflowExecutionResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: SignalWorkflowExecutionResponse | $.VarRef<SignalWorkflowExecutionResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: SignalWorkflowExecutionResponse | $.VarRef<SignalWorkflowExecutionResponse> | null = this;
		const m$: SignalWorkflowExecutionResponse = m == null ? $.pointerTarget<SignalWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWorkflowExecutionResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow9 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: SignalWorkflowExecutionResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: SignalWorkflowExecutionResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalWorkflowExecutionResponse).XXX_unrecognized = $.appendSlice((m$ as SignalWorkflowExecutionResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: SignalWorkflowExecutionResponse | $.VarRef<SignalWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_SignalWorkflowExecutionResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: SignalWorkflowExecutionResponse | $.VarRef<SignalWorkflowExecutionResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_SignalWorkflowExecutionResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWorkflowExecutionResponse).MarshalToSizedBuffer(b) : SignalWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: SignalWorkflowExecutionResponse | $.VarRef<SignalWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_SignalWorkflowExecutionResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionResponse")), src)
	}

	public XXX_Size(): number {
		const m: SignalWorkflowExecutionResponse | $.VarRef<SignalWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWorkflowExecutionResponse).Size() : SignalWorkflowExecutionResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: SignalWorkflowExecutionResponse | $.VarRef<SignalWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWorkflowExecutionResponse).Unmarshal(b) : SignalWorkflowExecutionResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.SignalWorkflowExecutionResponse",
		() => new SignalWorkflowExecutionResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		SignalWorkflowExecutionResponse,
		() => [/* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [0], 0, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [2], 24, true, { tag: "json:\"-\"" })]
	)
}

export class SignalWithStartWorkflowExecutionRequest {
	public get StartRequest(): StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null {
		return this._fields.StartRequest
	}

	public set StartRequest(value: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null) {
		this._fields.StartRequest = value
	}

	public get SignalName(): string {
		return this._fields.SignalName
	}

	public set SignalName(value: string) {
		this._fields.SignalName = value
	}

	public get SignalInput(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.SignalInput
	}

	public set SignalInput(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.SignalInput = value
	}

	public get Control(): $.Slice<number> {
		return this._fields.Control
	}

	public set Control(value: $.Slice<number>) {
		this._fields.Control = value
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
		StartRequest: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null
		SignalName: string
		SignalInput: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		Control: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{StartRequest?: StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null, SignalName?: string, SignalInput?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, Control?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			StartRequest: init?.StartRequest ?? (null! as StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null),
			SignalName: init?.SignalName ?? ("" as string),
			SignalInput: init?.SignalInput ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			Control: init?.Control ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SignalWithStartWorkflowExecutionRequest {
		return new SignalWithStartWorkflowExecutionRequest(this, true)
	}

	public __goscriptAssign(source: SignalWithStartWorkflowExecutionRequest): void {
		const target = this._fields
		const values = source._fields
		target.StartRequest = values.StartRequest
		target.SignalName = values.SignalName
		target.SignalInput = values.SignalInput
		target.Control = values.Control
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([10])]
	}

	public GetControl(): $.Slice<number> {
		const m: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<SignalWithStartWorkflowExecutionRequest>(m).Control
		}
		return null
	}

	public GetSignalInput(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<SignalWithStartWorkflowExecutionRequest>(m).SignalInput
		}
		return null
	}

	public GetSignalName(): string {
		const m: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<SignalWithStartWorkflowExecutionRequest>(m).SignalName
		}
		return ""
	}

	public GetStartRequest(): StartWorkflowExecutionRequest | $.VarRef<StartWorkflowExecutionRequest> | null {
		const m: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<SignalWithStartWorkflowExecutionRequest>(m).StartRequest
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionRequest).Size() : SignalWithStartWorkflowExecutionRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple10: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SignalWithStartWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple10[0]
		err = __goscriptTuple10[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionRequest).Size() : SignalWithStartWorkflowExecutionRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SignalWithStartWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null = this;
		const m$: SignalWithStartWorkflowExecutionRequest = m == null ? $.pointerTarget<SignalWithStartWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWithStartWorkflowExecutionRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as SignalWithStartWorkflowExecutionRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as SignalWithStartWorkflowExecutionRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalWithStartWorkflowExecutionRequest).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as SignalWithStartWorkflowExecutionRequest).Control) > 0) {
			i = i - ($.sliceLen((m$ as SignalWithStartWorkflowExecutionRequest).Control))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalWithStartWorkflowExecutionRequest).Control)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.sliceLen((m$ as SignalWithStartWorkflowExecutionRequest).Control)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as SignalWithStartWorkflowExecutionRequest).SignalInput != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as SignalWithStartWorkflowExecutionRequest).SignalInput, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.stringLen((m$ as SignalWithStartWorkflowExecutionRequest).SignalName) > 0) {
			i = i - ($.stringLen((m$ as SignalWithStartWorkflowExecutionRequest).SignalName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalWithStartWorkflowExecutionRequest).SignalName)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as SignalWithStartWorkflowExecutionRequest).SignalName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as SignalWithStartWorkflowExecutionRequest).StartRequest != null) {
			{
				let [size, err] = StartWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call((m$ as SignalWithStartWorkflowExecutionRequest).StartRequest, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null = this;
		$.assignStruct($.pointerValue<SignalWithStartWorkflowExecutionRequest>(m), $.markAsStructValue(new SignalWithStartWorkflowExecutionRequest()))
	}

	public Size(): number {
		const m: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null = this;
		let n: number = 0
		const m$: SignalWithStartWorkflowExecutionRequest = m == null ? $.pointerTarget<SignalWithStartWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWithStartWorkflowExecutionRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as SignalWithStartWorkflowExecutionRequest).StartRequest != null) {
			l = StartWorkflowExecutionRequest.prototype.Size.call((m$ as SignalWithStartWorkflowExecutionRequest).StartRequest)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as SignalWithStartWorkflowExecutionRequest).SignalName)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as SignalWithStartWorkflowExecutionRequest).SignalInput != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as SignalWithStartWorkflowExecutionRequest).SignalInput)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.sliceLen((m$ as SignalWithStartWorkflowExecutionRequest).Control)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as SignalWithStartWorkflowExecutionRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as SignalWithStartWorkflowExecutionRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWithStartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null = this;
		const m$: SignalWithStartWorkflowExecutionRequest = m == null ? $.pointerTarget<SignalWithStartWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWithStartWorkflowExecutionRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow10 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: SignalWithStartWorkflowExecutionRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: SignalWithStartWorkflowExecutionRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartRequest", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as SignalWithStartWorkflowExecutionRequest).StartRequest == null) {
						;(m$ as SignalWithStartWorkflowExecutionRequest).StartRequest = new StartWorkflowExecutionRequest()
					}
					{
						let err = StartWorkflowExecutionRequest.prototype.Unmarshal.call((m$ as SignalWithStartWorkflowExecutionRequest).StartRequest, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field SignalName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalWithStartWorkflowExecutionRequest).SignalName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field SignalInput", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as SignalWithStartWorkflowExecutionRequest).SignalInput == null) {
						;(m$ as SignalWithStartWorkflowExecutionRequest).SignalInput = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as SignalWithStartWorkflowExecutionRequest).SignalInput, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Control", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalWithStartWorkflowExecutionRequest).Control = $.appendSlice($.goSlice((m$ as SignalWithStartWorkflowExecutionRequest).Control, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as SignalWithStartWorkflowExecutionRequest).Control == null) {
						;(m$ as SignalWithStartWorkflowExecutionRequest).Control = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalWithStartWorkflowExecutionRequest).XXX_unrecognized = $.appendSlice((m$ as SignalWithStartWorkflowExecutionRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_SignalWithStartWorkflowExecutionRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWithStartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_SignalWithStartWorkflowExecutionRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWithStartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionRequest).MarshalToSizedBuffer(b) : SignalWithStartWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_SignalWithStartWorkflowExecutionRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWithStartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionRequest")), src)
	}

	public XXX_Size(): number {
		const m: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionRequest).Size() : SignalWithStartWorkflowExecutionRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionRequest).Unmarshal(b) : SignalWithStartWorkflowExecutionRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.SignalWithStartWorkflowExecutionRequest",
		() => new SignalWithStartWorkflowExecutionRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetControl", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("GetSignalInput", [], [/* @__PURE__ */ $.pointerType("apiv1.Payload")], true), $.methodSignature("GetSignalName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetStartRequest", [], [/* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionRequest")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		SignalWithStartWorkflowExecutionRequest,
		() => [/* @__PURE__ */ $.structField("StartRequest", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionRequest"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=start_request,json=startRequest,proto3\" json:\"start_request,omitempty\"" }), /* @__PURE__ */ $.structField("SignalName", /* @__PURE__ */ $.basicType("string"), [1], 8, true, { tag: "protobuf:\"bytes,2,opt,name=signal_name,json=signalName,proto3\" json:\"signal_name,omitempty\"" }), /* @__PURE__ */ $.structField("SignalInput", /* @__PURE__ */ $.pointerType("apiv1.Payload"), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=signal_input,json=signalInput,proto3\" json:\"signal_input,omitempty\"" }), /* @__PURE__ */ $.structField("Control", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 32, true, { tag: "protobuf:\"bytes,4,opt,name=control,proto3\" json:\"control,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [4], 56, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 56, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [6], 80, true, { tag: "json:\"-\"" })]
	)
}

export class SignalWithStartWorkflowExecutionResponse {
	public get RunId(): string {
		return this._fields.RunId
	}

	public set RunId(value: string) {
		this._fields.RunId = value
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
		RunId: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{RunId?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			RunId: init?.RunId ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SignalWithStartWorkflowExecutionResponse {
		return new SignalWithStartWorkflowExecutionResponse(this, true)
	}

	public __goscriptAssign(source: SignalWithStartWorkflowExecutionResponse): void {
		const target = this._fields
		const values = source._fields
		target.RunId = values.RunId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([11])]
	}

	public GetRunId(): string {
		const m: SignalWithStartWorkflowExecutionResponse | $.VarRef<SignalWithStartWorkflowExecutionResponse> | null = this;
		if (m != null) {
			return $.pointerValue<SignalWithStartWorkflowExecutionResponse>(m).RunId
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: SignalWithStartWorkflowExecutionResponse | $.VarRef<SignalWithStartWorkflowExecutionResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionResponse).Size() : SignalWithStartWorkflowExecutionResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple11: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SignalWithStartWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple11[0]
		err = __goscriptTuple11[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SignalWithStartWorkflowExecutionResponse | $.VarRef<SignalWithStartWorkflowExecutionResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionResponse).Size() : SignalWithStartWorkflowExecutionResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SignalWithStartWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SignalWithStartWorkflowExecutionResponse | $.VarRef<SignalWithStartWorkflowExecutionResponse> | null = this;
		const m$: SignalWithStartWorkflowExecutionResponse = m == null ? $.pointerTarget<SignalWithStartWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWithStartWorkflowExecutionResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as SignalWithStartWorkflowExecutionResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as SignalWithStartWorkflowExecutionResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalWithStartWorkflowExecutionResponse).XXX_unrecognized)
		}
		if ($.stringLen((m$ as SignalWithStartWorkflowExecutionResponse).RunId) > 0) {
			i = i - ($.stringLen((m$ as SignalWithStartWorkflowExecutionResponse).RunId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalWithStartWorkflowExecutionResponse).RunId)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as SignalWithStartWorkflowExecutionResponse).RunId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: SignalWithStartWorkflowExecutionResponse | $.VarRef<SignalWithStartWorkflowExecutionResponse> | null = this;
		$.assignStruct($.pointerValue<SignalWithStartWorkflowExecutionResponse>(m), $.markAsStructValue(new SignalWithStartWorkflowExecutionResponse()))
	}

	public Size(): number {
		const m: SignalWithStartWorkflowExecutionResponse | $.VarRef<SignalWithStartWorkflowExecutionResponse> | null = this;
		let n: number = 0
		const m$: SignalWithStartWorkflowExecutionResponse = m == null ? $.pointerTarget<SignalWithStartWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWithStartWorkflowExecutionResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as SignalWithStartWorkflowExecutionResponse).RunId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as SignalWithStartWorkflowExecutionResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as SignalWithStartWorkflowExecutionResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: SignalWithStartWorkflowExecutionResponse | $.VarRef<SignalWithStartWorkflowExecutionResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWithStartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: SignalWithStartWorkflowExecutionResponse | $.VarRef<SignalWithStartWorkflowExecutionResponse> | null = this;
		const m$: SignalWithStartWorkflowExecutionResponse = m == null ? $.pointerTarget<SignalWithStartWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWithStartWorkflowExecutionResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow11 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: SignalWithStartWorkflowExecutionResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: SignalWithStartWorkflowExecutionResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RunId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalWithStartWorkflowExecutionResponse).RunId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalWithStartWorkflowExecutionResponse).XXX_unrecognized = $.appendSlice((m$ as SignalWithStartWorkflowExecutionResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: SignalWithStartWorkflowExecutionResponse | $.VarRef<SignalWithStartWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_SignalWithStartWorkflowExecutionResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWithStartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: SignalWithStartWorkflowExecutionResponse | $.VarRef<SignalWithStartWorkflowExecutionResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_SignalWithStartWorkflowExecutionResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWithStartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionResponse).MarshalToSizedBuffer(b) : SignalWithStartWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: SignalWithStartWorkflowExecutionResponse | $.VarRef<SignalWithStartWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_SignalWithStartWorkflowExecutionResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWithStartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionResponse")), src)
	}

	public XXX_Size(): number {
		const m: SignalWithStartWorkflowExecutionResponse | $.VarRef<SignalWithStartWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionResponse).Size() : SignalWithStartWorkflowExecutionResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: SignalWithStartWorkflowExecutionResponse | $.VarRef<SignalWithStartWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionResponse).Unmarshal(b) : SignalWithStartWorkflowExecutionResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.SignalWithStartWorkflowExecutionResponse",
		() => new SignalWithStartWorkflowExecutionResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetRunId", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		SignalWithStartWorkflowExecutionResponse,
		() => [/* @__PURE__ */ $.structField("RunId", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=run_id,json=runId,proto3\" json:\"run_id,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [1], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [3], 40, true, { tag: "json:\"-\"" })]
	)
}

export class SignalWithStartWorkflowExecutionAsyncRequest {
	public get Request(): SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null {
		return this._fields.Request
	}

	public set Request(value: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null) {
		this._fields.Request = value
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
		Request: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Request?: SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Request: init?.Request ?? (null! as SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SignalWithStartWorkflowExecutionAsyncRequest {
		return new SignalWithStartWorkflowExecutionAsyncRequest(this, true)
	}

	public __goscriptAssign(source: SignalWithStartWorkflowExecutionAsyncRequest): void {
		const target = this._fields
		const values = source._fields
		target.Request = values.Request
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([12])]
	}

	public GetRequest(): SignalWithStartWorkflowExecutionRequest | $.VarRef<SignalWithStartWorkflowExecutionRequest> | null {
		const m: SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<SignalWithStartWorkflowExecutionAsyncRequest> | null = this;
		if (m != null) {
			return $.pointerValue<SignalWithStartWorkflowExecutionAsyncRequest>(m).Request
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<SignalWithStartWorkflowExecutionAsyncRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionAsyncRequest).Size() : SignalWithStartWorkflowExecutionAsyncRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple12: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionAsyncRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SignalWithStartWorkflowExecutionAsyncRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<SignalWithStartWorkflowExecutionAsyncRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionAsyncRequest).Size() : SignalWithStartWorkflowExecutionAsyncRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionAsyncRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SignalWithStartWorkflowExecutionAsyncRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<SignalWithStartWorkflowExecutionAsyncRequest> | null = this;
		const m$: SignalWithStartWorkflowExecutionAsyncRequest = m == null ? $.pointerTarget<SignalWithStartWorkflowExecutionAsyncRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWithStartWorkflowExecutionAsyncRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as SignalWithStartWorkflowExecutionAsyncRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as SignalWithStartWorkflowExecutionAsyncRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalWithStartWorkflowExecutionAsyncRequest).XXX_unrecognized)
		}
		if ((m$ as SignalWithStartWorkflowExecutionAsyncRequest).Request != null) {
			{
				let [size, err] = SignalWithStartWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call((m$ as SignalWithStartWorkflowExecutionAsyncRequest).Request, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<SignalWithStartWorkflowExecutionAsyncRequest> | null = this;
		$.assignStruct($.pointerValue<SignalWithStartWorkflowExecutionAsyncRequest>(m), $.markAsStructValue(new SignalWithStartWorkflowExecutionAsyncRequest()))
	}

	public Size(): number {
		const m: SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<SignalWithStartWorkflowExecutionAsyncRequest> | null = this;
		let n: number = 0
		const m$: SignalWithStartWorkflowExecutionAsyncRequest = m == null ? $.pointerTarget<SignalWithStartWorkflowExecutionAsyncRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWithStartWorkflowExecutionAsyncRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as SignalWithStartWorkflowExecutionAsyncRequest).Request != null) {
			l = SignalWithStartWorkflowExecutionRequest.prototype.Size.call((m$ as SignalWithStartWorkflowExecutionAsyncRequest).Request)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as SignalWithStartWorkflowExecutionAsyncRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as SignalWithStartWorkflowExecutionAsyncRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<SignalWithStartWorkflowExecutionAsyncRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWithStartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<SignalWithStartWorkflowExecutionAsyncRequest> | null = this;
		const m$: SignalWithStartWorkflowExecutionAsyncRequest = m == null ? $.pointerTarget<SignalWithStartWorkflowExecutionAsyncRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWithStartWorkflowExecutionAsyncRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow12 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: SignalWithStartWorkflowExecutionAsyncRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: SignalWithStartWorkflowExecutionAsyncRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Request", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as SignalWithStartWorkflowExecutionAsyncRequest).Request == null) {
						;(m$ as SignalWithStartWorkflowExecutionAsyncRequest).Request = new SignalWithStartWorkflowExecutionRequest()
					}
					{
						let err = SignalWithStartWorkflowExecutionRequest.prototype.Unmarshal.call((m$ as SignalWithStartWorkflowExecutionAsyncRequest).Request, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalWithStartWorkflowExecutionAsyncRequest).XXX_unrecognized = $.appendSlice((m$ as SignalWithStartWorkflowExecutionAsyncRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<SignalWithStartWorkflowExecutionAsyncRequest> | null = this;
		await xxx_messageInfo_SignalWithStartWorkflowExecutionAsyncRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWithStartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<SignalWithStartWorkflowExecutionAsyncRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_SignalWithStartWorkflowExecutionAsyncRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWithStartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionAsyncRequest).MarshalToSizedBuffer(b) : SignalWithStartWorkflowExecutionAsyncRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<SignalWithStartWorkflowExecutionAsyncRequest> | null = this;
		await xxx_messageInfo_SignalWithStartWorkflowExecutionAsyncRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWithStartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncRequest")), src)
	}

	public XXX_Size(): number {
		const m: SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<SignalWithStartWorkflowExecutionAsyncRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionAsyncRequest).Size() : SignalWithStartWorkflowExecutionAsyncRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<SignalWithStartWorkflowExecutionAsyncRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionAsyncRequest).Unmarshal(b) : SignalWithStartWorkflowExecutionAsyncRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.SignalWithStartWorkflowExecutionAsyncRequest",
		() => new SignalWithStartWorkflowExecutionAsyncRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetRequest", [], [/* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionRequest")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		SignalWithStartWorkflowExecutionAsyncRequest,
		() => [/* @__PURE__ */ $.structField("Request", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionRequest"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=request,proto3\" json:\"request,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [1], 8, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 8, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [3], 32, true, { tag: "json:\"-\"" })]
	)
}

export class SignalWithStartWorkflowExecutionAsyncResponse {
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

	public clone(): SignalWithStartWorkflowExecutionAsyncResponse {
		return new SignalWithStartWorkflowExecutionAsyncResponse(this, true)
	}

	public __goscriptAssign(source: SignalWithStartWorkflowExecutionAsyncResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([13])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<SignalWithStartWorkflowExecutionAsyncResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionAsyncResponse).Size() : SignalWithStartWorkflowExecutionAsyncResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple13: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionAsyncResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SignalWithStartWorkflowExecutionAsyncResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple13[0]
		err = __goscriptTuple13[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<SignalWithStartWorkflowExecutionAsyncResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionAsyncResponse).Size() : SignalWithStartWorkflowExecutionAsyncResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionAsyncResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SignalWithStartWorkflowExecutionAsyncResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<SignalWithStartWorkflowExecutionAsyncResponse> | null = this;
		const m$: SignalWithStartWorkflowExecutionAsyncResponse = m == null ? $.pointerTarget<SignalWithStartWorkflowExecutionAsyncResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWithStartWorkflowExecutionAsyncResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as SignalWithStartWorkflowExecutionAsyncResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as SignalWithStartWorkflowExecutionAsyncResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SignalWithStartWorkflowExecutionAsyncResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<SignalWithStartWorkflowExecutionAsyncResponse> | null = this;
		$.assignStruct($.pointerValue<SignalWithStartWorkflowExecutionAsyncResponse>(m), new SignalWithStartWorkflowExecutionAsyncResponse(undefined, true))
	}

	public Size(): number {
		const m: SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<SignalWithStartWorkflowExecutionAsyncResponse> | null = this;
		let n: number = 0
		const m$: SignalWithStartWorkflowExecutionAsyncResponse = m == null ? $.pointerTarget<SignalWithStartWorkflowExecutionAsyncResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWithStartWorkflowExecutionAsyncResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as SignalWithStartWorkflowExecutionAsyncResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as SignalWithStartWorkflowExecutionAsyncResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<SignalWithStartWorkflowExecutionAsyncResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWithStartWorkflowExecutionAsyncResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<SignalWithStartWorkflowExecutionAsyncResponse> | null = this;
		const m$: SignalWithStartWorkflowExecutionAsyncResponse = m == null ? $.pointerTarget<SignalWithStartWorkflowExecutionAsyncResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SignalWithStartWorkflowExecutionAsyncResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow13 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: SignalWithStartWorkflowExecutionAsyncResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: SignalWithStartWorkflowExecutionAsyncResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SignalWithStartWorkflowExecutionAsyncResponse).XXX_unrecognized = $.appendSlice((m$ as SignalWithStartWorkflowExecutionAsyncResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<SignalWithStartWorkflowExecutionAsyncResponse> | null = this;
		await xxx_messageInfo_SignalWithStartWorkflowExecutionAsyncResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWithStartWorkflowExecutionAsyncResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<SignalWithStartWorkflowExecutionAsyncResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_SignalWithStartWorkflowExecutionAsyncResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWithStartWorkflowExecutionAsyncResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionAsyncResponse).MarshalToSizedBuffer(b) : SignalWithStartWorkflowExecutionAsyncResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<SignalWithStartWorkflowExecutionAsyncResponse> | null = this;
		await xxx_messageInfo_SignalWithStartWorkflowExecutionAsyncResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.SignalWithStartWorkflowExecutionAsyncResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncResponse")), src)
	}

	public XXX_Size(): number {
		const m: SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<SignalWithStartWorkflowExecutionAsyncResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionAsyncResponse).Size() : SignalWithStartWorkflowExecutionAsyncResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<SignalWithStartWorkflowExecutionAsyncResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SignalWithStartWorkflowExecutionAsyncResponse).Unmarshal(b) : SignalWithStartWorkflowExecutionAsyncResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.SignalWithStartWorkflowExecutionAsyncResponse",
		() => new SignalWithStartWorkflowExecutionAsyncResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		SignalWithStartWorkflowExecutionAsyncResponse,
		() => [/* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [0], 0, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [2], 24, true, { tag: "json:\"-\"" })]
	)
}

export class ResetWorkflowExecutionRequest {
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

	public get Reason(): string {
		return this._fields.Reason
	}

	public set Reason(value: string) {
		this._fields.Reason = value
	}

	public get DecisionFinishEventId(): bigint {
		return this._fields.DecisionFinishEventId
	}

	public set DecisionFinishEventId(value: bigint) {
		this._fields.DecisionFinishEventId = value
	}

	public get RequestId(): string {
		return this._fields.RequestId
	}

	public set RequestId(value: string) {
		this._fields.RequestId = value
	}

	public get SkipSignalReapply(): boolean {
		return this._fields.SkipSignalReapply
	}

	public set SkipSignalReapply(value: boolean) {
		this._fields.SkipSignalReapply = value
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
		Reason: string
		DecisionFinishEventId: bigint
		RequestId: string
		SkipSignalReapply: boolean
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, Reason?: string, DecisionFinishEventId?: bigint, RequestId?: string, SkipSignalReapply?: boolean, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			Reason: init?.Reason ?? ("" as string),
			DecisionFinishEventId: init?.DecisionFinishEventId ?? (0n as bigint),
			RequestId: init?.RequestId ?? ("" as string),
			SkipSignalReapply: init?.SkipSignalReapply ?? (false as boolean),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ResetWorkflowExecutionRequest {
		return new ResetWorkflowExecutionRequest(this, true)
	}

	public __goscriptAssign(source: ResetWorkflowExecutionRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowExecution = values.WorkflowExecution
		target.Reason = values.Reason
		target.DecisionFinishEventId = values.DecisionFinishEventId
		target.RequestId = values.RequestId
		target.SkipSignalReapply = values.SkipSignalReapply
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([14])]
	}

	public GetDecisionFinishEventId(): bigint {
		const m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ResetWorkflowExecutionRequest>(m).DecisionFinishEventId
		}
		return 0n
	}

	public GetDomain(): string {
		const m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ResetWorkflowExecutionRequest>(m).Domain
		}
		return ""
	}

	public GetReason(): string {
		const m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ResetWorkflowExecutionRequest>(m).Reason
		}
		return ""
	}

	public GetRequestId(): string {
		const m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ResetWorkflowExecutionRequest>(m).RequestId
		}
		return ""
	}

	public GetSkipSignalReapply(): boolean {
		const m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ResetWorkflowExecutionRequest>(m).SkipSignalReapply
		}
		return false
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ResetWorkflowExecutionRequest>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetWorkflowExecutionRequest).Size() : ResetWorkflowExecutionRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple14: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ResetWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetWorkflowExecutionRequest).Size() : ResetWorkflowExecutionRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ResetWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		const m$: ResetWorkflowExecutionRequest = m == null ? $.pointerTarget<ResetWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetWorkflowExecutionRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ResetWorkflowExecutionRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ResetWorkflowExecutionRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResetWorkflowExecutionRequest).XXX_unrecognized)
		}
		if ((m$ as ResetWorkflowExecutionRequest).SkipSignalReapply) {
			i--
			if ((m$ as ResetWorkflowExecutionRequest).SkipSignalReapply) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x30
		}
		if ($.stringLen((m$ as ResetWorkflowExecutionRequest).RequestId) > 0) {
			i = i - ($.stringLen((m$ as ResetWorkflowExecutionRequest).RequestId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResetWorkflowExecutionRequest).RequestId)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as ResetWorkflowExecutionRequest).RequestId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as ResetWorkflowExecutionRequest).DecisionFinishEventId != 0n) {
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64((m$ as ResetWorkflowExecutionRequest).DecisionFinishEventId))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x20
		}
		if ($.stringLen((m$ as ResetWorkflowExecutionRequest).Reason) > 0) {
			i = i - ($.stringLen((m$ as ResetWorkflowExecutionRequest).Reason))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResetWorkflowExecutionRequest).Reason)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as ResetWorkflowExecutionRequest).Reason)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as ResetWorkflowExecutionRequest).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as ResetWorkflowExecutionRequest).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as ResetWorkflowExecutionRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as ResetWorkflowExecutionRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResetWorkflowExecutionRequest).Domain)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as ResetWorkflowExecutionRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		$.assignStruct($.pointerValue<ResetWorkflowExecutionRequest>(m), $.markAsStructValue(new ResetWorkflowExecutionRequest()))
	}

	public Size(): number {
		const m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		let n: number = 0
		const m$: ResetWorkflowExecutionRequest = m == null ? $.pointerTarget<ResetWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetWorkflowExecutionRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ResetWorkflowExecutionRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as ResetWorkflowExecutionRequest).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as ResetWorkflowExecutionRequest).WorkflowExecution)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as ResetWorkflowExecutionRequest).Reason)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as ResetWorkflowExecutionRequest).DecisionFinishEventId != 0n) {
			n = n + (1 + sovServiceWorkflow($.uint64((m$ as ResetWorkflowExecutionRequest).DecisionFinishEventId)))
		}
		l = $.stringLen((m$ as ResetWorkflowExecutionRequest).RequestId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as ResetWorkflowExecutionRequest).SkipSignalReapply) {
			n = n + (2)
		}
		if ((m$ as ResetWorkflowExecutionRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ResetWorkflowExecutionRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		const m$: ResetWorkflowExecutionRequest = m == null ? $.pointerTarget<ResetWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetWorkflowExecutionRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow14 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: ResetWorkflowExecutionRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ResetWorkflowExecutionRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResetWorkflowExecutionRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ResetWorkflowExecutionRequest).WorkflowExecution == null) {
						;(m$ as ResetWorkflowExecutionRequest).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as ResetWorkflowExecutionRequest).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Reason", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResetWorkflowExecutionRequest).Reason = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field DecisionFinishEventId", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ResetWorkflowExecutionRequest).DecisionFinishEventId = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, iNdEx)] as number)
						iNdEx++;
						;(m$ as ResetWorkflowExecutionRequest).DecisionFinishEventId = $.int64Or((m$ as ResetWorkflowExecutionRequest).DecisionFinishEventId, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RequestId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResetWorkflowExecutionRequest).RequestId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field SkipSignalReapply", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as ResetWorkflowExecutionRequest).SkipSignalReapply = (v != 0)
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResetWorkflowExecutionRequest).XXX_unrecognized = $.appendSlice((m$ as ResetWorkflowExecutionRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_ResetWorkflowExecutionRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ResetWorkflowExecutionRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ResetWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetWorkflowExecutionRequest).MarshalToSizedBuffer(b) : ResetWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_ResetWorkflowExecutionRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionRequest")), src)
	}

	public XXX_Size(): number {
		const m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetWorkflowExecutionRequest).Size() : ResetWorkflowExecutionRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ResetWorkflowExecutionRequest | $.VarRef<ResetWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetWorkflowExecutionRequest).Unmarshal(b) : ResetWorkflowExecutionRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ResetWorkflowExecutionRequest",
		() => new ResetWorkflowExecutionRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDecisionFinishEventId", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetReason", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetRequestId", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetSkipSignalReapply", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetWorkflowExecution", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ResetWorkflowExecutionRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }), /* @__PURE__ */ $.structField("Reason", /* @__PURE__ */ $.basicType("string"), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=reason,proto3\" json:\"reason,omitempty\"" }), /* @__PURE__ */ $.structField("DecisionFinishEventId", /* @__PURE__ */ $.basicType("int64"), [3], 40, true, { tag: "protobuf:\"varint,4,opt,name=decision_finish_event_id,json=decisionFinishEventId,proto3\" json:\"decision_finish_event_id,omitempty\"" }), /* @__PURE__ */ $.structField("RequestId", /* @__PURE__ */ $.basicType("string"), [4], 48, true, { tag: "protobuf:\"bytes,5,opt,name=request_id,json=requestId,proto3\" json:\"request_id,omitempty\"" }), /* @__PURE__ */ $.structField("SkipSignalReapply", /* @__PURE__ */ $.basicType("bool"), [5], 64, true, { tag: "protobuf:\"varint,6,opt,name=skip_signal_reapply,json=skipSignalReapply,proto3\" json:\"skip_signal_reapply,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [6], 65, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [7], 72, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [8], 96, true, { tag: "json:\"-\"" })]
	)
}

export class ResetWorkflowExecutionResponse {
	public get RunId(): string {
		return this._fields.RunId
	}

	public set RunId(value: string) {
		this._fields.RunId = value
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
		RunId: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{RunId?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			RunId: init?.RunId ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ResetWorkflowExecutionResponse {
		return new ResetWorkflowExecutionResponse(this, true)
	}

	public __goscriptAssign(source: ResetWorkflowExecutionResponse): void {
		const target = this._fields
		const values = source._fields
		target.RunId = values.RunId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([15])]
	}

	public GetRunId(): string {
		const m: ResetWorkflowExecutionResponse | $.VarRef<ResetWorkflowExecutionResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ResetWorkflowExecutionResponse>(m).RunId
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ResetWorkflowExecutionResponse | $.VarRef<ResetWorkflowExecutionResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetWorkflowExecutionResponse).Size() : ResetWorkflowExecutionResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple15: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ResetWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple15[0]
		err = __goscriptTuple15[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ResetWorkflowExecutionResponse | $.VarRef<ResetWorkflowExecutionResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetWorkflowExecutionResponse).Size() : ResetWorkflowExecutionResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ResetWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ResetWorkflowExecutionResponse | $.VarRef<ResetWorkflowExecutionResponse> | null = this;
		const m$: ResetWorkflowExecutionResponse = m == null ? $.pointerTarget<ResetWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetWorkflowExecutionResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ResetWorkflowExecutionResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ResetWorkflowExecutionResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResetWorkflowExecutionResponse).XXX_unrecognized)
		}
		if ($.stringLen((m$ as ResetWorkflowExecutionResponse).RunId) > 0) {
			i = i - ($.stringLen((m$ as ResetWorkflowExecutionResponse).RunId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResetWorkflowExecutionResponse).RunId)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as ResetWorkflowExecutionResponse).RunId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ResetWorkflowExecutionResponse | $.VarRef<ResetWorkflowExecutionResponse> | null = this;
		$.assignStruct($.pointerValue<ResetWorkflowExecutionResponse>(m), $.markAsStructValue(new ResetWorkflowExecutionResponse()))
	}

	public Size(): number {
		const m: ResetWorkflowExecutionResponse | $.VarRef<ResetWorkflowExecutionResponse> | null = this;
		let n: number = 0
		const m$: ResetWorkflowExecutionResponse = m == null ? $.pointerTarget<ResetWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetWorkflowExecutionResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ResetWorkflowExecutionResponse).RunId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as ResetWorkflowExecutionResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ResetWorkflowExecutionResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ResetWorkflowExecutionResponse | $.VarRef<ResetWorkflowExecutionResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ResetWorkflowExecutionResponse | $.VarRef<ResetWorkflowExecutionResponse> | null = this;
		const m$: ResetWorkflowExecutionResponse = m == null ? $.pointerTarget<ResetWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetWorkflowExecutionResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow15 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: ResetWorkflowExecutionResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ResetWorkflowExecutionResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RunId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResetWorkflowExecutionResponse).RunId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResetWorkflowExecutionResponse).XXX_unrecognized = $.appendSlice((m$ as ResetWorkflowExecutionResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ResetWorkflowExecutionResponse | $.VarRef<ResetWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_ResetWorkflowExecutionResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ResetWorkflowExecutionResponse | $.VarRef<ResetWorkflowExecutionResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ResetWorkflowExecutionResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ResetWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetWorkflowExecutionResponse).MarshalToSizedBuffer(b) : ResetWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ResetWorkflowExecutionResponse | $.VarRef<ResetWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_ResetWorkflowExecutionResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionResponse")), src)
	}

	public XXX_Size(): number {
		const m: ResetWorkflowExecutionResponse | $.VarRef<ResetWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetWorkflowExecutionResponse).Size() : ResetWorkflowExecutionResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ResetWorkflowExecutionResponse | $.VarRef<ResetWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetWorkflowExecutionResponse).Unmarshal(b) : ResetWorkflowExecutionResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ResetWorkflowExecutionResponse",
		() => new ResetWorkflowExecutionResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetRunId", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ResetWorkflowExecutionResponse,
		() => [/* @__PURE__ */ $.structField("RunId", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=run_id,json=runId,proto3\" json:\"run_id,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [1], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [3], 40, true, { tag: "json:\"-\"" })]
	)
}

export class RequestCancelWorkflowExecutionRequest {
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

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
	}

	public get RequestId(): string {
		return this._fields.RequestId
	}

	public set RequestId(value: string) {
		this._fields.RequestId = value
	}

	public get Cause(): string {
		return this._fields.Cause
	}

	public set Cause(value: string) {
		this._fields.Cause = value
	}

	public get FirstExecutionRunId(): string {
		return this._fields.FirstExecutionRunId
	}

	public set FirstExecutionRunId(value: string) {
		this._fields.FirstExecutionRunId = value
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
		Identity: string
		RequestId: string
		Cause: string
		FirstExecutionRunId: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, Identity?: string, RequestId?: string, Cause?: string, FirstExecutionRunId?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			Identity: init?.Identity ?? ("" as string),
			RequestId: init?.RequestId ?? ("" as string),
			Cause: init?.Cause ?? ("" as string),
			FirstExecutionRunId: init?.FirstExecutionRunId ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RequestCancelWorkflowExecutionRequest {
		return new RequestCancelWorkflowExecutionRequest(this, true)
	}

	public __goscriptAssign(source: RequestCancelWorkflowExecutionRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowExecution = values.WorkflowExecution
		target.Identity = values.Identity
		target.RequestId = values.RequestId
		target.Cause = values.Cause
		target.FirstExecutionRunId = values.FirstExecutionRunId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([16])]
	}

	public GetCause(): string {
		const m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RequestCancelWorkflowExecutionRequest>(m).Cause
		}
		return ""
	}

	public GetDomain(): string {
		const m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RequestCancelWorkflowExecutionRequest>(m).Domain
		}
		return ""
	}

	public GetFirstExecutionRunId(): string {
		const m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RequestCancelWorkflowExecutionRequest>(m).FirstExecutionRunId
		}
		return ""
	}

	public GetIdentity(): string {
		const m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RequestCancelWorkflowExecutionRequest>(m).Identity
		}
		return ""
	}

	public GetRequestId(): string {
		const m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RequestCancelWorkflowExecutionRequest>(m).RequestId
		}
		return ""
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RequestCancelWorkflowExecutionRequest>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelWorkflowExecutionRequest).Size() : RequestCancelWorkflowExecutionRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple16: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RequestCancelWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple16[0]
		err = __goscriptTuple16[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelWorkflowExecutionRequest).Size() : RequestCancelWorkflowExecutionRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RequestCancelWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		const m$: RequestCancelWorkflowExecutionRequest = m == null ? $.pointerTarget<RequestCancelWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RequestCancelWorkflowExecutionRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RequestCancelWorkflowExecutionRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RequestCancelWorkflowExecutionRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RequestCancelWorkflowExecutionRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as RequestCancelWorkflowExecutionRequest).FirstExecutionRunId) > 0) {
			i = i - ($.stringLen((m$ as RequestCancelWorkflowExecutionRequest).FirstExecutionRunId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RequestCancelWorkflowExecutionRequest).FirstExecutionRunId)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as RequestCancelWorkflowExecutionRequest).FirstExecutionRunId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		if ($.stringLen((m$ as RequestCancelWorkflowExecutionRequest).Cause) > 0) {
			i = i - ($.stringLen((m$ as RequestCancelWorkflowExecutionRequest).Cause))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RequestCancelWorkflowExecutionRequest).Cause)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as RequestCancelWorkflowExecutionRequest).Cause)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ($.stringLen((m$ as RequestCancelWorkflowExecutionRequest).RequestId) > 0) {
			i = i - ($.stringLen((m$ as RequestCancelWorkflowExecutionRequest).RequestId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RequestCancelWorkflowExecutionRequest).RequestId)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as RequestCancelWorkflowExecutionRequest).RequestId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as RequestCancelWorkflowExecutionRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as RequestCancelWorkflowExecutionRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RequestCancelWorkflowExecutionRequest).Identity)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as RequestCancelWorkflowExecutionRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as RequestCancelWorkflowExecutionRequest).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as RequestCancelWorkflowExecutionRequest).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as RequestCancelWorkflowExecutionRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as RequestCancelWorkflowExecutionRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RequestCancelWorkflowExecutionRequest).Domain)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as RequestCancelWorkflowExecutionRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		$.assignStruct($.pointerValue<RequestCancelWorkflowExecutionRequest>(m), $.markAsStructValue(new RequestCancelWorkflowExecutionRequest()))
	}

	public Size(): number {
		const m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		let n: number = 0
		const m$: RequestCancelWorkflowExecutionRequest = m == null ? $.pointerTarget<RequestCancelWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RequestCancelWorkflowExecutionRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as RequestCancelWorkflowExecutionRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as RequestCancelWorkflowExecutionRequest).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as RequestCancelWorkflowExecutionRequest).WorkflowExecution)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as RequestCancelWorkflowExecutionRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as RequestCancelWorkflowExecutionRequest).RequestId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as RequestCancelWorkflowExecutionRequest).Cause)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as RequestCancelWorkflowExecutionRequest).FirstExecutionRunId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as RequestCancelWorkflowExecutionRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RequestCancelWorkflowExecutionRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RequestCancelWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		const m$: RequestCancelWorkflowExecutionRequest = m == null ? $.pointerTarget<RequestCancelWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RequestCancelWorkflowExecutionRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow16 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: RequestCancelWorkflowExecutionRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RequestCancelWorkflowExecutionRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RequestCancelWorkflowExecutionRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RequestCancelWorkflowExecutionRequest).WorkflowExecution == null) {
						;(m$ as RequestCancelWorkflowExecutionRequest).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as RequestCancelWorkflowExecutionRequest).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RequestCancelWorkflowExecutionRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RequestId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RequestCancelWorkflowExecutionRequest).RequestId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Cause", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RequestCancelWorkflowExecutionRequest).Cause = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field FirstExecutionRunId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RequestCancelWorkflowExecutionRequest).FirstExecutionRunId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RequestCancelWorkflowExecutionRequest).XXX_unrecognized = $.appendSlice((m$ as RequestCancelWorkflowExecutionRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_RequestCancelWorkflowExecutionRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RequestCancelWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RequestCancelWorkflowExecutionRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RequestCancelWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelWorkflowExecutionRequest).MarshalToSizedBuffer(b) : RequestCancelWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_RequestCancelWorkflowExecutionRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RequestCancelWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionRequest")), src)
	}

	public XXX_Size(): number {
		const m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelWorkflowExecutionRequest).Size() : RequestCancelWorkflowExecutionRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RequestCancelWorkflowExecutionRequest | $.VarRef<RequestCancelWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelWorkflowExecutionRequest).Unmarshal(b) : RequestCancelWorkflowExecutionRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RequestCancelWorkflowExecutionRequest",
		() => new RequestCancelWorkflowExecutionRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetCause", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetFirstExecutionRunId", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetIdentity", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetRequestId", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetWorkflowExecution", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		RequestCancelWorkflowExecutionRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }), /* @__PURE__ */ $.structField("Identity", /* @__PURE__ */ $.basicType("string"), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=identity,proto3\" json:\"identity,omitempty\"" }), /* @__PURE__ */ $.structField("RequestId", /* @__PURE__ */ $.basicType("string"), [3], 40, true, { tag: "protobuf:\"bytes,4,opt,name=request_id,json=requestId,proto3\" json:\"request_id,omitempty\"" }), /* @__PURE__ */ $.structField("Cause", /* @__PURE__ */ $.basicType("string"), [4], 56, true, { tag: "protobuf:\"bytes,5,opt,name=cause,proto3\" json:\"cause,omitempty\"" }), /* @__PURE__ */ $.structField("FirstExecutionRunId", /* @__PURE__ */ $.basicType("string"), [5], 72, true, { tag: "protobuf:\"bytes,6,opt,name=first_execution_run_id,json=firstExecutionRunId,proto3\" json:\"first_execution_run_id,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [6], 88, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [7], 88, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [8], 112, true, { tag: "json:\"-\"" })]
	)
}

export class RequestCancelWorkflowExecutionResponse {
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

	public clone(): RequestCancelWorkflowExecutionResponse {
		return new RequestCancelWorkflowExecutionResponse(this, true)
	}

	public __goscriptAssign(source: RequestCancelWorkflowExecutionResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([17])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RequestCancelWorkflowExecutionResponse | $.VarRef<RequestCancelWorkflowExecutionResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelWorkflowExecutionResponse).Size() : RequestCancelWorkflowExecutionResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple17: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RequestCancelWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple17[0]
		err = __goscriptTuple17[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RequestCancelWorkflowExecutionResponse | $.VarRef<RequestCancelWorkflowExecutionResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelWorkflowExecutionResponse).Size() : RequestCancelWorkflowExecutionResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RequestCancelWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RequestCancelWorkflowExecutionResponse | $.VarRef<RequestCancelWorkflowExecutionResponse> | null = this;
		const m$: RequestCancelWorkflowExecutionResponse = m == null ? $.pointerTarget<RequestCancelWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RequestCancelWorkflowExecutionResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RequestCancelWorkflowExecutionResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RequestCancelWorkflowExecutionResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RequestCancelWorkflowExecutionResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RequestCancelWorkflowExecutionResponse | $.VarRef<RequestCancelWorkflowExecutionResponse> | null = this;
		$.assignStruct($.pointerValue<RequestCancelWorkflowExecutionResponse>(m), new RequestCancelWorkflowExecutionResponse(undefined, true))
	}

	public Size(): number {
		const m: RequestCancelWorkflowExecutionResponse | $.VarRef<RequestCancelWorkflowExecutionResponse> | null = this;
		let n: number = 0
		const m$: RequestCancelWorkflowExecutionResponse = m == null ? $.pointerTarget<RequestCancelWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RequestCancelWorkflowExecutionResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as RequestCancelWorkflowExecutionResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RequestCancelWorkflowExecutionResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RequestCancelWorkflowExecutionResponse | $.VarRef<RequestCancelWorkflowExecutionResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RequestCancelWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RequestCancelWorkflowExecutionResponse | $.VarRef<RequestCancelWorkflowExecutionResponse> | null = this;
		const m$: RequestCancelWorkflowExecutionResponse = m == null ? $.pointerTarget<RequestCancelWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RequestCancelWorkflowExecutionResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow17 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: RequestCancelWorkflowExecutionResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RequestCancelWorkflowExecutionResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RequestCancelWorkflowExecutionResponse).XXX_unrecognized = $.appendSlice((m$ as RequestCancelWorkflowExecutionResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RequestCancelWorkflowExecutionResponse | $.VarRef<RequestCancelWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_RequestCancelWorkflowExecutionResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RequestCancelWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: RequestCancelWorkflowExecutionResponse | $.VarRef<RequestCancelWorkflowExecutionResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RequestCancelWorkflowExecutionResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RequestCancelWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelWorkflowExecutionResponse).MarshalToSizedBuffer(b) : RequestCancelWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: RequestCancelWorkflowExecutionResponse | $.VarRef<RequestCancelWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_RequestCancelWorkflowExecutionResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RequestCancelWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionResponse")), src)
	}

	public XXX_Size(): number {
		const m: RequestCancelWorkflowExecutionResponse | $.VarRef<RequestCancelWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelWorkflowExecutionResponse).Size() : RequestCancelWorkflowExecutionResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RequestCancelWorkflowExecutionResponse | $.VarRef<RequestCancelWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RequestCancelWorkflowExecutionResponse).Unmarshal(b) : RequestCancelWorkflowExecutionResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RequestCancelWorkflowExecutionResponse",
		() => new RequestCancelWorkflowExecutionResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		RequestCancelWorkflowExecutionResponse,
		() => [/* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [0], 0, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [2], 24, true, { tag: "json:\"-\"" })]
	)
}

export class TerminateWorkflowExecutionRequest {
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

	public get Reason(): string {
		return this._fields.Reason
	}

	public set Reason(value: string) {
		this._fields.Reason = value
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

	public get FirstExecutionRunId(): string {
		return this._fields.FirstExecutionRunId
	}

	public set FirstExecutionRunId(value: string) {
		this._fields.FirstExecutionRunId = value
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
		Reason: string
		Details: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		Identity: string
		FirstExecutionRunId: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, Reason?: string, Details?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, Identity?: string, FirstExecutionRunId?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			Reason: init?.Reason ?? ("" as string),
			Details: init?.Details ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			Identity: init?.Identity ?? ("" as string),
			FirstExecutionRunId: init?.FirstExecutionRunId ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TerminateWorkflowExecutionRequest {
		return new TerminateWorkflowExecutionRequest(this, true)
	}

	public __goscriptAssign(source: TerminateWorkflowExecutionRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowExecution = values.WorkflowExecution
		target.Reason = values.Reason
		target.Details = values.Details
		target.Identity = values.Identity
		target.FirstExecutionRunId = values.FirstExecutionRunId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([18])]
	}

	public GetDetails(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<TerminateWorkflowExecutionRequest>(m).Details
		}
		return null
	}

	public GetDomain(): string {
		const m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<TerminateWorkflowExecutionRequest>(m).Domain
		}
		return ""
	}

	public GetFirstExecutionRunId(): string {
		const m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<TerminateWorkflowExecutionRequest>(m).FirstExecutionRunId
		}
		return ""
	}

	public GetIdentity(): string {
		const m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<TerminateWorkflowExecutionRequest>(m).Identity
		}
		return ""
	}

	public GetReason(): string {
		const m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<TerminateWorkflowExecutionRequest>(m).Reason
		}
		return ""
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<TerminateWorkflowExecutionRequest>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TerminateWorkflowExecutionRequest).Size() : TerminateWorkflowExecutionRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple18: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TerminateWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TerminateWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple18[0]
		err = __goscriptTuple18[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TerminateWorkflowExecutionRequest).Size() : TerminateWorkflowExecutionRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TerminateWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TerminateWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		const m$: TerminateWorkflowExecutionRequest = m == null ? $.pointerTarget<TerminateWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TerminateWorkflowExecutionRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as TerminateWorkflowExecutionRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as TerminateWorkflowExecutionRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as TerminateWorkflowExecutionRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as TerminateWorkflowExecutionRequest).FirstExecutionRunId) > 0) {
			i = i - ($.stringLen((m$ as TerminateWorkflowExecutionRequest).FirstExecutionRunId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as TerminateWorkflowExecutionRequest).FirstExecutionRunId)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as TerminateWorkflowExecutionRequest).FirstExecutionRunId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		if ($.stringLen((m$ as TerminateWorkflowExecutionRequest).Identity) > 0) {
			i = i - ($.stringLen((m$ as TerminateWorkflowExecutionRequest).Identity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as TerminateWorkflowExecutionRequest).Identity)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as TerminateWorkflowExecutionRequest).Identity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as TerminateWorkflowExecutionRequest).Details != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as TerminateWorkflowExecutionRequest).Details, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as TerminateWorkflowExecutionRequest).Reason) > 0) {
			i = i - ($.stringLen((m$ as TerminateWorkflowExecutionRequest).Reason))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as TerminateWorkflowExecutionRequest).Reason)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as TerminateWorkflowExecutionRequest).Reason)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as TerminateWorkflowExecutionRequest).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as TerminateWorkflowExecutionRequest).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as TerminateWorkflowExecutionRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as TerminateWorkflowExecutionRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as TerminateWorkflowExecutionRequest).Domain)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as TerminateWorkflowExecutionRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		$.assignStruct($.pointerValue<TerminateWorkflowExecutionRequest>(m), $.markAsStructValue(new TerminateWorkflowExecutionRequest()))
	}

	public Size(): number {
		const m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		let n: number = 0
		const m$: TerminateWorkflowExecutionRequest = m == null ? $.pointerTarget<TerminateWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TerminateWorkflowExecutionRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as TerminateWorkflowExecutionRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as TerminateWorkflowExecutionRequest).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as TerminateWorkflowExecutionRequest).WorkflowExecution)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as TerminateWorkflowExecutionRequest).Reason)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as TerminateWorkflowExecutionRequest).Details != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as TerminateWorkflowExecutionRequest).Details)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as TerminateWorkflowExecutionRequest).Identity)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as TerminateWorkflowExecutionRequest).FirstExecutionRunId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as TerminateWorkflowExecutionRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as TerminateWorkflowExecutionRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.TerminateWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		const m$: TerminateWorkflowExecutionRequest = m == null ? $.pointerTarget<TerminateWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TerminateWorkflowExecutionRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow18 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: TerminateWorkflowExecutionRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: TerminateWorkflowExecutionRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TerminateWorkflowExecutionRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as TerminateWorkflowExecutionRequest).WorkflowExecution == null) {
						;(m$ as TerminateWorkflowExecutionRequest).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as TerminateWorkflowExecutionRequest).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Reason", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TerminateWorkflowExecutionRequest).Reason = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as TerminateWorkflowExecutionRequest).Details == null) {
						;(m$ as TerminateWorkflowExecutionRequest).Details = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as TerminateWorkflowExecutionRequest).Details, $.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TerminateWorkflowExecutionRequest).Identity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field FirstExecutionRunId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TerminateWorkflowExecutionRequest).FirstExecutionRunId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TerminateWorkflowExecutionRequest).XXX_unrecognized = $.appendSlice((m$ as TerminateWorkflowExecutionRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_TerminateWorkflowExecutionRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.TerminateWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_TerminateWorkflowExecutionRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.TerminateWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TerminateWorkflowExecutionRequest).MarshalToSizedBuffer(b) : TerminateWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_TerminateWorkflowExecutionRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.TerminateWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionRequest")), src)
	}

	public XXX_Size(): number {
		const m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TerminateWorkflowExecutionRequest).Size() : TerminateWorkflowExecutionRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: TerminateWorkflowExecutionRequest | $.VarRef<TerminateWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TerminateWorkflowExecutionRequest).Unmarshal(b) : TerminateWorkflowExecutionRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.TerminateWorkflowExecutionRequest",
		() => new TerminateWorkflowExecutionRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDetails", [], [/* @__PURE__ */ $.pointerType("apiv1.Payload")], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetFirstExecutionRunId", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetIdentity", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetReason", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetWorkflowExecution", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		TerminateWorkflowExecutionRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }), /* @__PURE__ */ $.structField("Reason", /* @__PURE__ */ $.basicType("string"), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=reason,proto3\" json:\"reason,omitempty\"" }), /* @__PURE__ */ $.structField("Details", /* @__PURE__ */ $.pointerType("apiv1.Payload"), [3], 40, true, { tag: "protobuf:\"bytes,4,opt,name=details,proto3\" json:\"details,omitempty\"" }), /* @__PURE__ */ $.structField("Identity", /* @__PURE__ */ $.basicType("string"), [4], 48, true, { tag: "protobuf:\"bytes,5,opt,name=identity,proto3\" json:\"identity,omitempty\"" }), /* @__PURE__ */ $.structField("FirstExecutionRunId", /* @__PURE__ */ $.basicType("string"), [5], 64, true, { tag: "protobuf:\"bytes,6,opt,name=first_execution_run_id,json=firstExecutionRunId,proto3\" json:\"first_execution_run_id,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [6], 80, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [7], 80, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [8], 104, true, { tag: "json:\"-\"" })]
	)
}

export class TerminateWorkflowExecutionResponse {
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

	public clone(): TerminateWorkflowExecutionResponse {
		return new TerminateWorkflowExecutionResponse(this, true)
	}

	public __goscriptAssign(source: TerminateWorkflowExecutionResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([19])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: TerminateWorkflowExecutionResponse | $.VarRef<TerminateWorkflowExecutionResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TerminateWorkflowExecutionResponse).Size() : TerminateWorkflowExecutionResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple19: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TerminateWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TerminateWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple19[0]
		err = __goscriptTuple19[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TerminateWorkflowExecutionResponse | $.VarRef<TerminateWorkflowExecutionResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TerminateWorkflowExecutionResponse).Size() : TerminateWorkflowExecutionResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TerminateWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : TerminateWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: TerminateWorkflowExecutionResponse | $.VarRef<TerminateWorkflowExecutionResponse> | null = this;
		const m$: TerminateWorkflowExecutionResponse = m == null ? $.pointerTarget<TerminateWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TerminateWorkflowExecutionResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as TerminateWorkflowExecutionResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as TerminateWorkflowExecutionResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as TerminateWorkflowExecutionResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: TerminateWorkflowExecutionResponse | $.VarRef<TerminateWorkflowExecutionResponse> | null = this;
		$.assignStruct($.pointerValue<TerminateWorkflowExecutionResponse>(m), new TerminateWorkflowExecutionResponse(undefined, true))
	}

	public Size(): number {
		const m: TerminateWorkflowExecutionResponse | $.VarRef<TerminateWorkflowExecutionResponse> | null = this;
		let n: number = 0
		const m$: TerminateWorkflowExecutionResponse = m == null ? $.pointerTarget<TerminateWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TerminateWorkflowExecutionResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as TerminateWorkflowExecutionResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as TerminateWorkflowExecutionResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: TerminateWorkflowExecutionResponse | $.VarRef<TerminateWorkflowExecutionResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.TerminateWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: TerminateWorkflowExecutionResponse | $.VarRef<TerminateWorkflowExecutionResponse> | null = this;
		const m$: TerminateWorkflowExecutionResponse = m == null ? $.pointerTarget<TerminateWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<TerminateWorkflowExecutionResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow19 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: TerminateWorkflowExecutionResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: TerminateWorkflowExecutionResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as TerminateWorkflowExecutionResponse).XXX_unrecognized = $.appendSlice((m$ as TerminateWorkflowExecutionResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: TerminateWorkflowExecutionResponse | $.VarRef<TerminateWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_TerminateWorkflowExecutionResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.TerminateWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: TerminateWorkflowExecutionResponse | $.VarRef<TerminateWorkflowExecutionResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_TerminateWorkflowExecutionResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.TerminateWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TerminateWorkflowExecutionResponse).MarshalToSizedBuffer(b) : TerminateWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: TerminateWorkflowExecutionResponse | $.VarRef<TerminateWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_TerminateWorkflowExecutionResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.TerminateWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionResponse")), src)
	}

	public XXX_Size(): number {
		const m: TerminateWorkflowExecutionResponse | $.VarRef<TerminateWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TerminateWorkflowExecutionResponse).Size() : TerminateWorkflowExecutionResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: TerminateWorkflowExecutionResponse | $.VarRef<TerminateWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as TerminateWorkflowExecutionResponse).Unmarshal(b) : TerminateWorkflowExecutionResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.TerminateWorkflowExecutionResponse",
		() => new TerminateWorkflowExecutionResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		TerminateWorkflowExecutionResponse,
		() => [/* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [0], 0, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [2], 24, true, { tag: "json:\"-\"" })]
	)
}

export class DescribeWorkflowExecutionRequest {
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

	// QueryConsistencyLevel is used to override the default cluster configured read-pattern for this query.
	public get QueryConsistencyLevel(): __goscript_query_pb.QueryConsistencyLevel {
		return this._fields.QueryConsistencyLevel
	}

	public set QueryConsistencyLevel(value: __goscript_query_pb.QueryConsistencyLevel) {
		this._fields.QueryConsistencyLevel = value
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
		QueryConsistencyLevel: __goscript_query_pb.QueryConsistencyLevel
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, QueryConsistencyLevel?: __goscript_query_pb.QueryConsistencyLevel, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			QueryConsistencyLevel: init?.QueryConsistencyLevel ?? (0 as __goscript_query_pb.QueryConsistencyLevel),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DescribeWorkflowExecutionRequest {
		return new DescribeWorkflowExecutionRequest(this, true)
	}

	public __goscriptAssign(source: DescribeWorkflowExecutionRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowExecution = values.WorkflowExecution
		target.QueryConsistencyLevel = values.QueryConsistencyLevel
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([20])]
	}

	public GetDomain(): string {
		const m: DescribeWorkflowExecutionRequest | $.VarRef<DescribeWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeWorkflowExecutionRequest>(m).Domain
		}
		return ""
	}

	public GetQueryConsistencyLevel(): __goscript_query_pb.QueryConsistencyLevel {
		const m: DescribeWorkflowExecutionRequest | $.VarRef<DescribeWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeWorkflowExecutionRequest>(m).QueryConsistencyLevel
		}
		return 0
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: DescribeWorkflowExecutionRequest | $.VarRef<DescribeWorkflowExecutionRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeWorkflowExecutionRequest>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DescribeWorkflowExecutionRequest | $.VarRef<DescribeWorkflowExecutionRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeWorkflowExecutionRequest).Size() : DescribeWorkflowExecutionRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple20: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple20[0]
		err = __goscriptTuple20[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeWorkflowExecutionRequest | $.VarRef<DescribeWorkflowExecutionRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeWorkflowExecutionRequest).Size() : DescribeWorkflowExecutionRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeWorkflowExecutionRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeWorkflowExecutionRequest | $.VarRef<DescribeWorkflowExecutionRequest> | null = this;
		const m$: DescribeWorkflowExecutionRequest = m == null ? $.pointerTarget<DescribeWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeWorkflowExecutionRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DescribeWorkflowExecutionRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DescribeWorkflowExecutionRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DescribeWorkflowExecutionRequest).XXX_unrecognized)
		}
		if ((m$ as DescribeWorkflowExecutionRequest).QueryConsistencyLevel != 0) {
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64((m$ as DescribeWorkflowExecutionRequest).QueryConsistencyLevel))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x18
		}
		if ((m$ as DescribeWorkflowExecutionRequest).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as DescribeWorkflowExecutionRequest).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as DescribeWorkflowExecutionRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as DescribeWorkflowExecutionRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DescribeWorkflowExecutionRequest).Domain)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as DescribeWorkflowExecutionRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DescribeWorkflowExecutionRequest | $.VarRef<DescribeWorkflowExecutionRequest> | null = this;
		$.assignStruct($.pointerValue<DescribeWorkflowExecutionRequest>(m), $.markAsStructValue(new DescribeWorkflowExecutionRequest()))
	}

	public Size(): number {
		const m: DescribeWorkflowExecutionRequest | $.VarRef<DescribeWorkflowExecutionRequest> | null = this;
		let n: number = 0
		const m$: DescribeWorkflowExecutionRequest = m == null ? $.pointerTarget<DescribeWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeWorkflowExecutionRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as DescribeWorkflowExecutionRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as DescribeWorkflowExecutionRequest).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as DescribeWorkflowExecutionRequest).WorkflowExecution)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as DescribeWorkflowExecutionRequest).QueryConsistencyLevel != 0) {
			n = n + (1 + sovServiceWorkflow($.uint64((m$ as DescribeWorkflowExecutionRequest).QueryConsistencyLevel)))
		}
		if ((m$ as DescribeWorkflowExecutionRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DescribeWorkflowExecutionRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DescribeWorkflowExecutionRequest | $.VarRef<DescribeWorkflowExecutionRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DescribeWorkflowExecutionRequest | $.VarRef<DescribeWorkflowExecutionRequest> | null = this;
		const m$: DescribeWorkflowExecutionRequest = m == null ? $.pointerTarget<DescribeWorkflowExecutionRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeWorkflowExecutionRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow20 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: DescribeWorkflowExecutionRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DescribeWorkflowExecutionRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DescribeWorkflowExecutionRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DescribeWorkflowExecutionRequest).WorkflowExecution == null) {
						;(m$ as DescribeWorkflowExecutionRequest).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as DescribeWorkflowExecutionRequest).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field QueryConsistencyLevel", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as DescribeWorkflowExecutionRequest).QueryConsistencyLevel = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, iNdEx)] as number)
						iNdEx++;
						;(m$ as DescribeWorkflowExecutionRequest).QueryConsistencyLevel = (m$ as DescribeWorkflowExecutionRequest).QueryConsistencyLevel | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DescribeWorkflowExecutionRequest).XXX_unrecognized = $.appendSlice((m$ as DescribeWorkflowExecutionRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: DescribeWorkflowExecutionRequest | $.VarRef<DescribeWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_DescribeWorkflowExecutionRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: DescribeWorkflowExecutionRequest | $.VarRef<DescribeWorkflowExecutionRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DescribeWorkflowExecutionRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeWorkflowExecutionRequest).MarshalToSizedBuffer(b) : DescribeWorkflowExecutionRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: DescribeWorkflowExecutionRequest | $.VarRef<DescribeWorkflowExecutionRequest> | null = this;
		await xxx_messageInfo_DescribeWorkflowExecutionRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionRequest")), src)
	}

	public XXX_Size(): number {
		const m: DescribeWorkflowExecutionRequest | $.VarRef<DescribeWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeWorkflowExecutionRequest).Size() : DescribeWorkflowExecutionRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DescribeWorkflowExecutionRequest | $.VarRef<DescribeWorkflowExecutionRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeWorkflowExecutionRequest).Unmarshal(b) : DescribeWorkflowExecutionRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DescribeWorkflowExecutionRequest",
		() => new DescribeWorkflowExecutionRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetQueryConsistencyLevel", [], [/* @__PURE__ */ $.basicType("int32", "apiv1.QueryConsistencyLevel")], true), $.methodSignature("GetWorkflowExecution", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		DescribeWorkflowExecutionRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }), /* @__PURE__ */ $.structField("QueryConsistencyLevel", /* @__PURE__ */ $.basicType("int32", "apiv1.QueryConsistencyLevel"), [2], 24, true, { tag: "protobuf:\"varint,3,opt,name=query_consistency_level,json=queryConsistencyLevel,proto3,enum=uber.cadence.api.v1.QueryConsistencyLevel\" json:\"query_consistency_level,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [3], 28, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 32, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [5], 56, true, { tag: "json:\"-\"" })]
	)
}

export class DescribeWorkflowExecutionResponse {
	public get ExecutionConfiguration(): __goscript_workflow_pb.WorkflowExecutionConfiguration | $.VarRef<__goscript_workflow_pb.WorkflowExecutionConfiguration> | null {
		return this._fields.ExecutionConfiguration
	}

	public set ExecutionConfiguration(value: __goscript_workflow_pb.WorkflowExecutionConfiguration | $.VarRef<__goscript_workflow_pb.WorkflowExecutionConfiguration> | null) {
		this._fields.ExecutionConfiguration = value
	}

	public get WorkflowExecutionInfo(): __goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null {
		return this._fields.WorkflowExecutionInfo
	}

	public set WorkflowExecutionInfo(value: __goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null) {
		this._fields.WorkflowExecutionInfo = value
	}

	public get PendingActivities(): $.Slice<__goscript_workflow_pb.PendingActivityInfo | $.VarRef<__goscript_workflow_pb.PendingActivityInfo> | null> {
		return this._fields.PendingActivities
	}

	public set PendingActivities(value: $.Slice<__goscript_workflow_pb.PendingActivityInfo | $.VarRef<__goscript_workflow_pb.PendingActivityInfo> | null>) {
		this._fields.PendingActivities = value
	}

	public get PendingChildren(): $.Slice<__goscript_workflow_pb.PendingChildExecutionInfo | $.VarRef<__goscript_workflow_pb.PendingChildExecutionInfo> | null> {
		return this._fields.PendingChildren
	}

	public set PendingChildren(value: $.Slice<__goscript_workflow_pb.PendingChildExecutionInfo | $.VarRef<__goscript_workflow_pb.PendingChildExecutionInfo> | null>) {
		this._fields.PendingChildren = value
	}

	public get PendingDecision(): __goscript_workflow_pb.PendingDecisionInfo | $.VarRef<__goscript_workflow_pb.PendingDecisionInfo> | null {
		return this._fields.PendingDecision
	}

	public set PendingDecision(value: __goscript_workflow_pb.PendingDecisionInfo | $.VarRef<__goscript_workflow_pb.PendingDecisionInfo> | null) {
		this._fields.PendingDecision = value
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
		ExecutionConfiguration: __goscript_workflow_pb.WorkflowExecutionConfiguration | $.VarRef<__goscript_workflow_pb.WorkflowExecutionConfiguration> | null
		WorkflowExecutionInfo: __goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null
		PendingActivities: $.Slice<__goscript_workflow_pb.PendingActivityInfo | $.VarRef<__goscript_workflow_pb.PendingActivityInfo> | null>
		PendingChildren: $.Slice<__goscript_workflow_pb.PendingChildExecutionInfo | $.VarRef<__goscript_workflow_pb.PendingChildExecutionInfo> | null>
		PendingDecision: __goscript_workflow_pb.PendingDecisionInfo | $.VarRef<__goscript_workflow_pb.PendingDecisionInfo> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{ExecutionConfiguration?: __goscript_workflow_pb.WorkflowExecutionConfiguration | $.VarRef<__goscript_workflow_pb.WorkflowExecutionConfiguration> | null, WorkflowExecutionInfo?: __goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null, PendingActivities?: $.Slice<__goscript_workflow_pb.PendingActivityInfo | $.VarRef<__goscript_workflow_pb.PendingActivityInfo> | null>, PendingChildren?: $.Slice<__goscript_workflow_pb.PendingChildExecutionInfo | $.VarRef<__goscript_workflow_pb.PendingChildExecutionInfo> | null>, PendingDecision?: __goscript_workflow_pb.PendingDecisionInfo | $.VarRef<__goscript_workflow_pb.PendingDecisionInfo> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ExecutionConfiguration: init?.ExecutionConfiguration ?? (null! as __goscript_workflow_pb.WorkflowExecutionConfiguration | $.VarRef<__goscript_workflow_pb.WorkflowExecutionConfiguration> | null),
			WorkflowExecutionInfo: init?.WorkflowExecutionInfo ?? (null! as __goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null),
			PendingActivities: init?.PendingActivities ?? (null! as $.Slice<__goscript_workflow_pb.PendingActivityInfo | $.VarRef<__goscript_workflow_pb.PendingActivityInfo> | null>),
			PendingChildren: init?.PendingChildren ?? (null! as $.Slice<__goscript_workflow_pb.PendingChildExecutionInfo | $.VarRef<__goscript_workflow_pb.PendingChildExecutionInfo> | null>),
			PendingDecision: init?.PendingDecision ?? (null! as __goscript_workflow_pb.PendingDecisionInfo | $.VarRef<__goscript_workflow_pb.PendingDecisionInfo> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DescribeWorkflowExecutionResponse {
		return new DescribeWorkflowExecutionResponse(this, true)
	}

	public __goscriptAssign(source: DescribeWorkflowExecutionResponse): void {
		const target = this._fields
		const values = source._fields
		target.ExecutionConfiguration = values.ExecutionConfiguration
		target.WorkflowExecutionInfo = values.WorkflowExecutionInfo
		target.PendingActivities = values.PendingActivities
		target.PendingChildren = values.PendingChildren
		target.PendingDecision = values.PendingDecision
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([21])]
	}

	public GetExecutionConfiguration(): __goscript_workflow_pb.WorkflowExecutionConfiguration | $.VarRef<__goscript_workflow_pb.WorkflowExecutionConfiguration> | null {
		const m: DescribeWorkflowExecutionResponse | $.VarRef<DescribeWorkflowExecutionResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeWorkflowExecutionResponse>(m).ExecutionConfiguration
		}
		return null
	}

	public GetPendingActivities(): $.Slice<__goscript_workflow_pb.PendingActivityInfo | $.VarRef<__goscript_workflow_pb.PendingActivityInfo> | null> {
		const m: DescribeWorkflowExecutionResponse | $.VarRef<DescribeWorkflowExecutionResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeWorkflowExecutionResponse>(m).PendingActivities
		}
		return null
	}

	public GetPendingChildren(): $.Slice<__goscript_workflow_pb.PendingChildExecutionInfo | $.VarRef<__goscript_workflow_pb.PendingChildExecutionInfo> | null> {
		const m: DescribeWorkflowExecutionResponse | $.VarRef<DescribeWorkflowExecutionResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeWorkflowExecutionResponse>(m).PendingChildren
		}
		return null
	}

	public GetPendingDecision(): __goscript_workflow_pb.PendingDecisionInfo | $.VarRef<__goscript_workflow_pb.PendingDecisionInfo> | null {
		const m: DescribeWorkflowExecutionResponse | $.VarRef<DescribeWorkflowExecutionResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeWorkflowExecutionResponse>(m).PendingDecision
		}
		return null
	}

	public GetWorkflowExecutionInfo(): __goscript_workflow_pb.WorkflowExecutionInfo | $.VarRef<__goscript_workflow_pb.WorkflowExecutionInfo> | null {
		const m: DescribeWorkflowExecutionResponse | $.VarRef<DescribeWorkflowExecutionResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeWorkflowExecutionResponse>(m).WorkflowExecutionInfo
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DescribeWorkflowExecutionResponse | $.VarRef<DescribeWorkflowExecutionResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeWorkflowExecutionResponse).Size() : DescribeWorkflowExecutionResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple21: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple21[0]
		err = __goscriptTuple21[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeWorkflowExecutionResponse | $.VarRef<DescribeWorkflowExecutionResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeWorkflowExecutionResponse).Size() : DescribeWorkflowExecutionResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeWorkflowExecutionResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeWorkflowExecutionResponse | $.VarRef<DescribeWorkflowExecutionResponse> | null = this;
		const m$: DescribeWorkflowExecutionResponse = m == null ? $.pointerTarget<DescribeWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeWorkflowExecutionResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DescribeWorkflowExecutionResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DescribeWorkflowExecutionResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DescribeWorkflowExecutionResponse).XXX_unrecognized)
		}
		if ((m$ as DescribeWorkflowExecutionResponse).PendingDecision != null) {
			{
				let [size, err] = __goscript_workflow_pb.PendingDecisionInfo.prototype.MarshalToSizedBuffer.call((m$ as DescribeWorkflowExecutionResponse).PendingDecision, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ($.sliceLen((m$ as DescribeWorkflowExecutionResponse).PendingChildren) > 0) {
			for (let __goscriptSliceWindow21 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as DescribeWorkflowExecutionResponse).PendingChildren) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_workflow_pb.PendingChildExecutionInfo.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as DescribeWorkflowExecutionResponse).PendingChildren!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow21.backing as any[])[$.windowSlot(__goscriptSliceWindow21, i)] = 0x22
			}
		}
		if ($.sliceLen((m$ as DescribeWorkflowExecutionResponse).PendingActivities) > 0) {
			for (let __goscriptSliceWindow22 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as DescribeWorkflowExecutionResponse).PendingActivities) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_workflow_pb.PendingActivityInfo.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as DescribeWorkflowExecutionResponse).PendingActivities!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow22.backing as any[])[$.windowSlot(__goscriptSliceWindow22, i)] = 0x1a
			}
		}
		if ((m$ as DescribeWorkflowExecutionResponse).WorkflowExecutionInfo != null) {
			{
				let [size, err] = __goscript_workflow_pb.WorkflowExecutionInfo.prototype.MarshalToSizedBuffer.call((m$ as DescribeWorkflowExecutionResponse).WorkflowExecutionInfo, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as DescribeWorkflowExecutionResponse).ExecutionConfiguration != null) {
			{
				let [size, err] = __goscript_workflow_pb.WorkflowExecutionConfiguration.prototype.MarshalToSizedBuffer.call((m$ as DescribeWorkflowExecutionResponse).ExecutionConfiguration, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DescribeWorkflowExecutionResponse | $.VarRef<DescribeWorkflowExecutionResponse> | null = this;
		$.assignStruct($.pointerValue<DescribeWorkflowExecutionResponse>(m), $.markAsStructValue(new DescribeWorkflowExecutionResponse()))
	}

	public Size(): number {
		const m: DescribeWorkflowExecutionResponse | $.VarRef<DescribeWorkflowExecutionResponse> | null = this;
		let n: number = 0
		const m$: DescribeWorkflowExecutionResponse = m == null ? $.pointerTarget<DescribeWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeWorkflowExecutionResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as DescribeWorkflowExecutionResponse).ExecutionConfiguration != null) {
			l = __goscript_workflow_pb.WorkflowExecutionConfiguration.prototype.Size.call((m$ as DescribeWorkflowExecutionResponse).ExecutionConfiguration)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as DescribeWorkflowExecutionResponse).WorkflowExecutionInfo != null) {
			l = __goscript_workflow_pb.WorkflowExecutionInfo.prototype.Size.call((m$ as DescribeWorkflowExecutionResponse).WorkflowExecutionInfo)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ($.sliceLen((m$ as DescribeWorkflowExecutionResponse).PendingActivities) > 0) {
			for (let __goscriptRangeTarget0 = (m$ as DescribeWorkflowExecutionResponse).PendingActivities, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_workflow_pb.PendingActivityInfo | $.VarRef<__goscript_workflow_pb.PendingActivityInfo> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_workflow_pb.PendingActivityInfo).Size() : __goscript_workflow_pb.PendingActivityInfo.prototype.Size.call(e))
				n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
			}
		}
		if ($.sliceLen((m$ as DescribeWorkflowExecutionResponse).PendingChildren) > 0) {
			for (let __goscriptRangeTarget1 = (m$ as DescribeWorkflowExecutionResponse).PendingChildren, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_workflow_pb.PendingChildExecutionInfo | $.VarRef<__goscript_workflow_pb.PendingChildExecutionInfo> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_workflow_pb.PendingChildExecutionInfo).Size() : __goscript_workflow_pb.PendingChildExecutionInfo.prototype.Size.call(e))
				n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
			}
		}
		if ((m$ as DescribeWorkflowExecutionResponse).PendingDecision != null) {
			l = __goscript_workflow_pb.PendingDecisionInfo.prototype.Size.call((m$ as DescribeWorkflowExecutionResponse).PendingDecision)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as DescribeWorkflowExecutionResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DescribeWorkflowExecutionResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DescribeWorkflowExecutionResponse | $.VarRef<DescribeWorkflowExecutionResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DescribeWorkflowExecutionResponse | $.VarRef<DescribeWorkflowExecutionResponse> | null = this;
		const m$: DescribeWorkflowExecutionResponse = m == null ? $.pointerTarget<DescribeWorkflowExecutionResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeWorkflowExecutionResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow23 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: DescribeWorkflowExecutionResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DescribeWorkflowExecutionResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ExecutionConfiguration", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DescribeWorkflowExecutionResponse).ExecutionConfiguration == null) {
						;(m$ as DescribeWorkflowExecutionResponse).ExecutionConfiguration = new __goscript_workflow_pb.WorkflowExecutionConfiguration()
					}
					{
						let err = __goscript_workflow_pb.WorkflowExecutionConfiguration.prototype.Unmarshal.call((m$ as DescribeWorkflowExecutionResponse).ExecutionConfiguration, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowExecutionInfo", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DescribeWorkflowExecutionResponse).WorkflowExecutionInfo == null) {
						;(m$ as DescribeWorkflowExecutionResponse).WorkflowExecutionInfo = new __goscript_workflow_pb.WorkflowExecutionInfo()
					}
					{
						let err = __goscript_workflow_pb.WorkflowExecutionInfo.prototype.Unmarshal.call((m$ as DescribeWorkflowExecutionResponse).WorkflowExecutionInfo, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field PendingActivities", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DescribeWorkflowExecutionResponse).PendingActivities = $.appendOne((m$ as DescribeWorkflowExecutionResponse).PendingActivities, new __goscript_workflow_pb.PendingActivityInfo(), $.appendZeros.nil)
					{
						let err = __goscript_workflow_pb.PendingActivityInfo.prototype.Unmarshal.call($.arrayIndex((m$ as DescribeWorkflowExecutionResponse).PendingActivities!, $.sliceLen((m$ as DescribeWorkflowExecutionResponse).PendingActivities) - 1), $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field PendingChildren", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DescribeWorkflowExecutionResponse).PendingChildren = $.appendOne((m$ as DescribeWorkflowExecutionResponse).PendingChildren, new __goscript_workflow_pb.PendingChildExecutionInfo(), $.appendZeros.nil)
					{
						let err = __goscript_workflow_pb.PendingChildExecutionInfo.prototype.Unmarshal.call($.arrayIndex((m$ as DescribeWorkflowExecutionResponse).PendingChildren!, $.sliceLen((m$ as DescribeWorkflowExecutionResponse).PendingChildren) - 1), $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field PendingDecision", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DescribeWorkflowExecutionResponse).PendingDecision == null) {
						;(m$ as DescribeWorkflowExecutionResponse).PendingDecision = new __goscript_workflow_pb.PendingDecisionInfo()
					}
					{
						let err = __goscript_workflow_pb.PendingDecisionInfo.prototype.Unmarshal.call((m$ as DescribeWorkflowExecutionResponse).PendingDecision, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DescribeWorkflowExecutionResponse).XXX_unrecognized = $.appendSlice((m$ as DescribeWorkflowExecutionResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: DescribeWorkflowExecutionResponse | $.VarRef<DescribeWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_DescribeWorkflowExecutionResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: DescribeWorkflowExecutionResponse | $.VarRef<DescribeWorkflowExecutionResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DescribeWorkflowExecutionResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeWorkflowExecutionResponse).MarshalToSizedBuffer(b) : DescribeWorkflowExecutionResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: DescribeWorkflowExecutionResponse | $.VarRef<DescribeWorkflowExecutionResponse> | null = this;
		await xxx_messageInfo_DescribeWorkflowExecutionResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionResponse")), src)
	}

	public XXX_Size(): number {
		const m: DescribeWorkflowExecutionResponse | $.VarRef<DescribeWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeWorkflowExecutionResponse).Size() : DescribeWorkflowExecutionResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DescribeWorkflowExecutionResponse | $.VarRef<DescribeWorkflowExecutionResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeWorkflowExecutionResponse).Unmarshal(b) : DescribeWorkflowExecutionResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DescribeWorkflowExecutionResponse",
		() => new DescribeWorkflowExecutionResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetExecutionConfiguration", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionConfiguration")], true), $.methodSignature("GetPendingActivities", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.PendingActivityInfo"))], true), $.methodSignature("GetPendingChildren", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.PendingChildExecutionInfo"))], true), $.methodSignature("GetPendingDecision", [], [/* @__PURE__ */ $.pointerType("apiv1.PendingDecisionInfo")], true), $.methodSignature("GetWorkflowExecutionInfo", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionInfo")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		DescribeWorkflowExecutionResponse,
		() => [/* @__PURE__ */ $.structField("ExecutionConfiguration", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionConfiguration"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=execution_configuration,json=executionConfiguration,proto3\" json:\"execution_configuration,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionInfo"), [1], 8, true, { tag: "protobuf:\"bytes,2,opt,name=workflow_execution_info,json=workflowExecutionInfo,proto3\" json:\"workflow_execution_info,omitempty\"" }), /* @__PURE__ */ $.structField("PendingActivities", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.PendingActivityInfo")), [2], 16, true, { tag: "protobuf:\"bytes,3,rep,name=pending_activities,json=pendingActivities,proto3\" json:\"pending_activities,omitempty\"" }), /* @__PURE__ */ $.structField("PendingChildren", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.PendingChildExecutionInfo")), [3], 40, true, { tag: "protobuf:\"bytes,4,rep,name=pending_children,json=pendingChildren,proto3\" json:\"pending_children,omitempty\"" }), /* @__PURE__ */ $.structField("PendingDecision", /* @__PURE__ */ $.pointerType("apiv1.PendingDecisionInfo"), [4], 64, true, { tag: "protobuf:\"bytes,5,opt,name=pending_decision,json=pendingDecision,proto3\" json:\"pending_decision,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [5], 72, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 72, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [7], 96, true, { tag: "json:\"-\"" })]
	)
}

export class QueryWorkflowRequest {
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

	public get Query(): __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null {
		return this._fields.Query
	}

	public set Query(value: __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null) {
		this._fields.Query = value
	}

	public get QueryRejectCondition(): __goscript_query_pb.QueryRejectCondition {
		return this._fields.QueryRejectCondition
	}

	public set QueryRejectCondition(value: __goscript_query_pb.QueryRejectCondition) {
		this._fields.QueryRejectCondition = value
	}

	// QueryConsistencyLevel is used to override the default cluster configured read-pattern for this query.
	public get QueryConsistencyLevel(): __goscript_query_pb.QueryConsistencyLevel {
		return this._fields.QueryConsistencyLevel
	}

	public set QueryConsistencyLevel(value: __goscript_query_pb.QueryConsistencyLevel) {
		this._fields.QueryConsistencyLevel = value
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
		Query: __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null
		QueryRejectCondition: __goscript_query_pb.QueryRejectCondition
		QueryConsistencyLevel: __goscript_query_pb.QueryConsistencyLevel
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, Query?: __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null, QueryRejectCondition?: __goscript_query_pb.QueryRejectCondition, QueryConsistencyLevel?: __goscript_query_pb.QueryConsistencyLevel, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			Query: init?.Query ?? (null! as __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null),
			QueryRejectCondition: init?.QueryRejectCondition ?? (0 as __goscript_query_pb.QueryRejectCondition),
			QueryConsistencyLevel: init?.QueryConsistencyLevel ?? (0 as __goscript_query_pb.QueryConsistencyLevel),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): QueryWorkflowRequest {
		return new QueryWorkflowRequest(this, true)
	}

	public __goscriptAssign(source: QueryWorkflowRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowExecution = values.WorkflowExecution
		target.Query = values.Query
		target.QueryRejectCondition = values.QueryRejectCondition
		target.QueryConsistencyLevel = values.QueryConsistencyLevel
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([22])]
	}

	public GetDomain(): string {
		const m: QueryWorkflowRequest | $.VarRef<QueryWorkflowRequest> | null = this;
		if (m != null) {
			return $.pointerValue<QueryWorkflowRequest>(m).Domain
		}
		return ""
	}

	public GetQuery(): __goscript_query_pb.WorkflowQuery | $.VarRef<__goscript_query_pb.WorkflowQuery> | null {
		const m: QueryWorkflowRequest | $.VarRef<QueryWorkflowRequest> | null = this;
		if (m != null) {
			return $.pointerValue<QueryWorkflowRequest>(m).Query
		}
		return null
	}

	public GetQueryConsistencyLevel(): __goscript_query_pb.QueryConsistencyLevel {
		const m: QueryWorkflowRequest | $.VarRef<QueryWorkflowRequest> | null = this;
		if (m != null) {
			return $.pointerValue<QueryWorkflowRequest>(m).QueryConsistencyLevel
		}
		return 0
	}

	public GetQueryRejectCondition(): __goscript_query_pb.QueryRejectCondition {
		const m: QueryWorkflowRequest | $.VarRef<QueryWorkflowRequest> | null = this;
		if (m != null) {
			return $.pointerValue<QueryWorkflowRequest>(m).QueryRejectCondition
		}
		return 0
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: QueryWorkflowRequest | $.VarRef<QueryWorkflowRequest> | null = this;
		if (m != null) {
			return $.pointerValue<QueryWorkflowRequest>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: QueryWorkflowRequest | $.VarRef<QueryWorkflowRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryWorkflowRequest).Size() : QueryWorkflowRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple22: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryWorkflowRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : QueryWorkflowRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple22[0]
		err = __goscriptTuple22[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: QueryWorkflowRequest | $.VarRef<QueryWorkflowRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryWorkflowRequest).Size() : QueryWorkflowRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryWorkflowRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : QueryWorkflowRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: QueryWorkflowRequest | $.VarRef<QueryWorkflowRequest> | null = this;
		const m$: QueryWorkflowRequest = m == null ? $.pointerTarget<QueryWorkflowRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QueryWorkflowRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as QueryWorkflowRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as QueryWorkflowRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as QueryWorkflowRequest).XXX_unrecognized)
		}
		if ((m$ as QueryWorkflowRequest).QueryConsistencyLevel != 0) {
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64((m$ as QueryWorkflowRequest).QueryConsistencyLevel))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x28
		}
		if ((m$ as QueryWorkflowRequest).QueryRejectCondition != 0) {
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64((m$ as QueryWorkflowRequest).QueryRejectCondition))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x20
		}
		if ((m$ as QueryWorkflowRequest).Query != null) {
			{
				let [size, err] = __goscript_query_pb.WorkflowQuery.prototype.MarshalToSizedBuffer.call((m$ as QueryWorkflowRequest).Query, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as QueryWorkflowRequest).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as QueryWorkflowRequest).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as QueryWorkflowRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as QueryWorkflowRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as QueryWorkflowRequest).Domain)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as QueryWorkflowRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: QueryWorkflowRequest | $.VarRef<QueryWorkflowRequest> | null = this;
		$.assignStruct($.pointerValue<QueryWorkflowRequest>(m), $.markAsStructValue(new QueryWorkflowRequest()))
	}

	public Size(): number {
		const m: QueryWorkflowRequest | $.VarRef<QueryWorkflowRequest> | null = this;
		let n: number = 0
		const m$: QueryWorkflowRequest = m == null ? $.pointerTarget<QueryWorkflowRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QueryWorkflowRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as QueryWorkflowRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as QueryWorkflowRequest).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as QueryWorkflowRequest).WorkflowExecution)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as QueryWorkflowRequest).Query != null) {
			l = __goscript_query_pb.WorkflowQuery.prototype.Size.call((m$ as QueryWorkflowRequest).Query)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as QueryWorkflowRequest).QueryRejectCondition != 0) {
			n = n + (1 + sovServiceWorkflow($.uint64((m$ as QueryWorkflowRequest).QueryRejectCondition)))
		}
		if ((m$ as QueryWorkflowRequest).QueryConsistencyLevel != 0) {
			n = n + (1 + sovServiceWorkflow($.uint64((m$ as QueryWorkflowRequest).QueryConsistencyLevel)))
		}
		if ((m$ as QueryWorkflowRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as QueryWorkflowRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: QueryWorkflowRequest | $.VarRef<QueryWorkflowRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.QueryWorkflowRequest", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: QueryWorkflowRequest | $.VarRef<QueryWorkflowRequest> | null = this;
		const m$: QueryWorkflowRequest = m == null ? $.pointerTarget<QueryWorkflowRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QueryWorkflowRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow24 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: QueryWorkflowRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: QueryWorkflowRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow24.backing as any[])[$.windowSlot(__goscriptSliceWindow24, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as QueryWorkflowRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow24.backing as any[])[$.windowSlot(__goscriptSliceWindow24, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as QueryWorkflowRequest).WorkflowExecution == null) {
						;(m$ as QueryWorkflowRequest).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as QueryWorkflowRequest).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field Query", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow24.backing as any[])[$.windowSlot(__goscriptSliceWindow24, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as QueryWorkflowRequest).Query == null) {
						;(m$ as QueryWorkflowRequest).Query = new __goscript_query_pb.WorkflowQuery()
					}
					{
						let err = __goscript_query_pb.WorkflowQuery.prototype.Unmarshal.call((m$ as QueryWorkflowRequest).Query, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field QueryRejectCondition", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as QueryWorkflowRequest).QueryRejectCondition = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow24.backing as any[])[$.windowSlot(__goscriptSliceWindow24, iNdEx)] as number)
						iNdEx++;
						;(m$ as QueryWorkflowRequest).QueryRejectCondition = (m$ as QueryWorkflowRequest).QueryRejectCondition | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 5:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field QueryConsistencyLevel", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as QueryWorkflowRequest).QueryConsistencyLevel = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow24.backing as any[])[$.windowSlot(__goscriptSliceWindow24, iNdEx)] as number)
						iNdEx++;
						;(m$ as QueryWorkflowRequest).QueryConsistencyLevel = (m$ as QueryWorkflowRequest).QueryConsistencyLevel | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as QueryWorkflowRequest).XXX_unrecognized = $.appendSlice((m$ as QueryWorkflowRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: QueryWorkflowRequest | $.VarRef<QueryWorkflowRequest> | null = this;
		await xxx_messageInfo_QueryWorkflowRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.QueryWorkflowRequest", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: QueryWorkflowRequest | $.VarRef<QueryWorkflowRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_QueryWorkflowRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.QueryWorkflowRequest", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryWorkflowRequest).MarshalToSizedBuffer(b) : QueryWorkflowRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: QueryWorkflowRequest | $.VarRef<QueryWorkflowRequest> | null = this;
		await xxx_messageInfo_QueryWorkflowRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.QueryWorkflowRequest", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowRequest")), src)
	}

	public XXX_Size(): number {
		const m: QueryWorkflowRequest | $.VarRef<QueryWorkflowRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryWorkflowRequest).Size() : QueryWorkflowRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: QueryWorkflowRequest | $.VarRef<QueryWorkflowRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryWorkflowRequest).Unmarshal(b) : QueryWorkflowRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.QueryWorkflowRequest",
		() => new QueryWorkflowRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetQuery", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowQuery")], true), $.methodSignature("GetQueryConsistencyLevel", [], [/* @__PURE__ */ $.basicType("int32", "apiv1.QueryConsistencyLevel")], true), $.methodSignature("GetQueryRejectCondition", [], [/* @__PURE__ */ $.basicType("int32", "apiv1.QueryRejectCondition")], true), $.methodSignature("GetWorkflowExecution", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		QueryWorkflowRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }), /* @__PURE__ */ $.structField("Query", /* @__PURE__ */ $.pointerType("apiv1.WorkflowQuery"), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=query,proto3\" json:\"query,omitempty\"" }), /* @__PURE__ */ $.structField("QueryRejectCondition", /* @__PURE__ */ $.basicType("int32", "apiv1.QueryRejectCondition"), [3], 32, true, { tag: "protobuf:\"varint,4,opt,name=query_reject_condition,json=queryRejectCondition,proto3,enum=uber.cadence.api.v1.QueryRejectCondition\" json:\"query_reject_condition,omitempty\"" }), /* @__PURE__ */ $.structField("QueryConsistencyLevel", /* @__PURE__ */ $.basicType("int32", "apiv1.QueryConsistencyLevel"), [4], 36, true, { tag: "protobuf:\"varint,5,opt,name=query_consistency_level,json=queryConsistencyLevel,proto3,enum=uber.cadence.api.v1.QueryConsistencyLevel\" json:\"query_consistency_level,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [5], 40, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 40, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [7], 64, true, { tag: "json:\"-\"" })]
	)
}

export class QueryWorkflowResponse {
	public get QueryResult(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.QueryResult
	}

	public set QueryResult(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.QueryResult = value
	}

	public get QueryRejected(): __goscript_query_pb.QueryRejected | $.VarRef<__goscript_query_pb.QueryRejected> | null {
		return this._fields.QueryRejected
	}

	public set QueryRejected(value: __goscript_query_pb.QueryRejected | $.VarRef<__goscript_query_pb.QueryRejected> | null) {
		this._fields.QueryRejected = value
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
		QueryResult: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		QueryRejected: __goscript_query_pb.QueryRejected | $.VarRef<__goscript_query_pb.QueryRejected> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{QueryResult?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, QueryRejected?: __goscript_query_pb.QueryRejected | $.VarRef<__goscript_query_pb.QueryRejected> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			QueryResult: init?.QueryResult ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			QueryRejected: init?.QueryRejected ?? (null! as __goscript_query_pb.QueryRejected | $.VarRef<__goscript_query_pb.QueryRejected> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): QueryWorkflowResponse {
		return new QueryWorkflowResponse(this, true)
	}

	public __goscriptAssign(source: QueryWorkflowResponse): void {
		const target = this._fields
		const values = source._fields
		target.QueryResult = values.QueryResult
		target.QueryRejected = values.QueryRejected
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([23])]
	}

	public GetQueryRejected(): __goscript_query_pb.QueryRejected | $.VarRef<__goscript_query_pb.QueryRejected> | null {
		const m: QueryWorkflowResponse | $.VarRef<QueryWorkflowResponse> | null = this;
		if (m != null) {
			return $.pointerValue<QueryWorkflowResponse>(m).QueryRejected
		}
		return null
	}

	public GetQueryResult(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: QueryWorkflowResponse | $.VarRef<QueryWorkflowResponse> | null = this;
		if (m != null) {
			return $.pointerValue<QueryWorkflowResponse>(m).QueryResult
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: QueryWorkflowResponse | $.VarRef<QueryWorkflowResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryWorkflowResponse).Size() : QueryWorkflowResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple23: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryWorkflowResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : QueryWorkflowResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple23[0]
		err = __goscriptTuple23[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: QueryWorkflowResponse | $.VarRef<QueryWorkflowResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryWorkflowResponse).Size() : QueryWorkflowResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryWorkflowResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : QueryWorkflowResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: QueryWorkflowResponse | $.VarRef<QueryWorkflowResponse> | null = this;
		const m$: QueryWorkflowResponse = m == null ? $.pointerTarget<QueryWorkflowResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QueryWorkflowResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as QueryWorkflowResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as QueryWorkflowResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as QueryWorkflowResponse).XXX_unrecognized)
		}
		if ((m$ as QueryWorkflowResponse).QueryRejected != null) {
			{
				let [size, err] = __goscript_query_pb.QueryRejected.prototype.MarshalToSizedBuffer.call((m$ as QueryWorkflowResponse).QueryRejected, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as QueryWorkflowResponse).QueryResult != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as QueryWorkflowResponse).QueryResult, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: QueryWorkflowResponse | $.VarRef<QueryWorkflowResponse> | null = this;
		$.assignStruct($.pointerValue<QueryWorkflowResponse>(m), $.markAsStructValue(new QueryWorkflowResponse()))
	}

	public Size(): number {
		const m: QueryWorkflowResponse | $.VarRef<QueryWorkflowResponse> | null = this;
		let n: number = 0
		const m$: QueryWorkflowResponse = m == null ? $.pointerTarget<QueryWorkflowResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QueryWorkflowResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as QueryWorkflowResponse).QueryResult != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as QueryWorkflowResponse).QueryResult)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as QueryWorkflowResponse).QueryRejected != null) {
			l = __goscript_query_pb.QueryRejected.prototype.Size.call((m$ as QueryWorkflowResponse).QueryRejected)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as QueryWorkflowResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as QueryWorkflowResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: QueryWorkflowResponse | $.VarRef<QueryWorkflowResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.QueryWorkflowResponse", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: QueryWorkflowResponse | $.VarRef<QueryWorkflowResponse> | null = this;
		const m$: QueryWorkflowResponse = m == null ? $.pointerTarget<QueryWorkflowResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QueryWorkflowResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow25 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: QueryWorkflowResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: QueryWorkflowResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field QueryResult", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as QueryWorkflowResponse).QueryResult == null) {
						;(m$ as QueryWorkflowResponse).QueryResult = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as QueryWorkflowResponse).QueryResult, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field QueryRejected", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
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
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as QueryWorkflowResponse).QueryRejected == null) {
						;(m$ as QueryWorkflowResponse).QueryRejected = new __goscript_query_pb.QueryRejected()
					}
					{
						let err = __goscript_query_pb.QueryRejected.prototype.Unmarshal.call((m$ as QueryWorkflowResponse).QueryRejected, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as QueryWorkflowResponse).XXX_unrecognized = $.appendSlice((m$ as QueryWorkflowResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: QueryWorkflowResponse | $.VarRef<QueryWorkflowResponse> | null = this;
		await xxx_messageInfo_QueryWorkflowResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.QueryWorkflowResponse", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: QueryWorkflowResponse | $.VarRef<QueryWorkflowResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_QueryWorkflowResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.QueryWorkflowResponse", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryWorkflowResponse).MarshalToSizedBuffer(b) : QueryWorkflowResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: QueryWorkflowResponse | $.VarRef<QueryWorkflowResponse> | null = this;
		await xxx_messageInfo_QueryWorkflowResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.QueryWorkflowResponse", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowResponse")), src)
	}

	public XXX_Size(): number {
		const m: QueryWorkflowResponse | $.VarRef<QueryWorkflowResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryWorkflowResponse).Size() : QueryWorkflowResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: QueryWorkflowResponse | $.VarRef<QueryWorkflowResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryWorkflowResponse).Unmarshal(b) : QueryWorkflowResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.QueryWorkflowResponse",
		() => new QueryWorkflowResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetQueryRejected", [], [/* @__PURE__ */ $.pointerType("apiv1.QueryRejected")], true), $.methodSignature("GetQueryResult", [], [/* @__PURE__ */ $.pointerType("apiv1.Payload")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		QueryWorkflowResponse,
		() => [/* @__PURE__ */ $.structField("QueryResult", /* @__PURE__ */ $.pointerType("apiv1.Payload"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=query_result,json=queryResult,proto3\" json:\"query_result,omitempty\"" }), /* @__PURE__ */ $.structField("QueryRejected", /* @__PURE__ */ $.pointerType("apiv1.QueryRejected"), [1], 8, true, { tag: "protobuf:\"bytes,2,opt,name=query_rejected,json=queryRejected,proto3\" json:\"query_rejected,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 40, true, { tag: "json:\"-\"" })]
	)
}

export class DescribeTaskListRequest {
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

	public get TaskListType(): __goscript_tasklist_pb.TaskListType {
		return this._fields.TaskListType
	}

	public set TaskListType(value: __goscript_tasklist_pb.TaskListType) {
		this._fields.TaskListType = value
	}

	public get IncludeTaskListStatus(): boolean {
		return this._fields.IncludeTaskListStatus
	}

	public set IncludeTaskListStatus(value: boolean) {
		this._fields.IncludeTaskListStatus = value
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
		TaskListType: __goscript_tasklist_pb.TaskListType
		IncludeTaskListStatus: boolean
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, TaskList?: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null, TaskListType?: __goscript_tasklist_pb.TaskListType, IncludeTaskListStatus?: boolean, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			TaskList: init?.TaskList ?? (null! as __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null),
			TaskListType: init?.TaskListType ?? (0 as __goscript_tasklist_pb.TaskListType),
			IncludeTaskListStatus: init?.IncludeTaskListStatus ?? (false as boolean),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DescribeTaskListRequest {
		return new DescribeTaskListRequest(this, true)
	}

	public __goscriptAssign(source: DescribeTaskListRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.TaskList = values.TaskList
		target.TaskListType = values.TaskListType
		target.IncludeTaskListStatus = values.IncludeTaskListStatus
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([24])]
	}

	public GetDomain(): string {
		const m: DescribeTaskListRequest | $.VarRef<DescribeTaskListRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeTaskListRequest>(m).Domain
		}
		return ""
	}

	public GetIncludeTaskListStatus(): boolean {
		const m: DescribeTaskListRequest | $.VarRef<DescribeTaskListRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeTaskListRequest>(m).IncludeTaskListStatus
		}
		return false
	}

	public GetTaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		const m: DescribeTaskListRequest | $.VarRef<DescribeTaskListRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeTaskListRequest>(m).TaskList
		}
		return null
	}

	public GetTaskListType(): __goscript_tasklist_pb.TaskListType {
		const m: DescribeTaskListRequest | $.VarRef<DescribeTaskListRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeTaskListRequest>(m).TaskListType
		}
		return 0
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DescribeTaskListRequest | $.VarRef<DescribeTaskListRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeTaskListRequest).Size() : DescribeTaskListRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple24: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeTaskListRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeTaskListRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple24[0]
		err = __goscriptTuple24[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeTaskListRequest | $.VarRef<DescribeTaskListRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeTaskListRequest).Size() : DescribeTaskListRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeTaskListRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeTaskListRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeTaskListRequest | $.VarRef<DescribeTaskListRequest> | null = this;
		const m$: DescribeTaskListRequest = m == null ? $.pointerTarget<DescribeTaskListRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeTaskListRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DescribeTaskListRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DescribeTaskListRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DescribeTaskListRequest).XXX_unrecognized)
		}
		if ((m$ as DescribeTaskListRequest).IncludeTaskListStatus) {
			i--
			if ((m$ as DescribeTaskListRequest).IncludeTaskListStatus) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x20
		}
		if ((m$ as DescribeTaskListRequest).TaskListType != 0) {
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64((m$ as DescribeTaskListRequest).TaskListType))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x18
		}
		if ((m$ as DescribeTaskListRequest).TaskList != null) {
			{
				let [size, err] = __goscript_tasklist_pb.TaskList.prototype.MarshalToSizedBuffer.call((m$ as DescribeTaskListRequest).TaskList, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as DescribeTaskListRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as DescribeTaskListRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DescribeTaskListRequest).Domain)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as DescribeTaskListRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DescribeTaskListRequest | $.VarRef<DescribeTaskListRequest> | null = this;
		$.assignStruct($.pointerValue<DescribeTaskListRequest>(m), $.markAsStructValue(new DescribeTaskListRequest()))
	}

	public Size(): number {
		const m: DescribeTaskListRequest | $.VarRef<DescribeTaskListRequest> | null = this;
		let n: number = 0
		const m$: DescribeTaskListRequest = m == null ? $.pointerTarget<DescribeTaskListRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeTaskListRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as DescribeTaskListRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as DescribeTaskListRequest).TaskList != null) {
			l = __goscript_tasklist_pb.TaskList.prototype.Size.call((m$ as DescribeTaskListRequest).TaskList)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as DescribeTaskListRequest).TaskListType != 0) {
			n = n + (1 + sovServiceWorkflow($.uint64((m$ as DescribeTaskListRequest).TaskListType)))
		}
		if ((m$ as DescribeTaskListRequest).IncludeTaskListStatus) {
			n = n + (2)
		}
		if ((m$ as DescribeTaskListRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DescribeTaskListRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DescribeTaskListRequest | $.VarRef<DescribeTaskListRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeTaskListRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DescribeTaskListRequest | $.VarRef<DescribeTaskListRequest> | null = this;
		const m$: DescribeTaskListRequest = m == null ? $.pointerTarget<DescribeTaskListRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeTaskListRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow26 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: DescribeTaskListRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DescribeTaskListRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow26.backing as any[])[$.windowSlot(__goscriptSliceWindow26, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DescribeTaskListRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow26.backing as any[])[$.windowSlot(__goscriptSliceWindow26, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DescribeTaskListRequest).TaskList == null) {
						;(m$ as DescribeTaskListRequest).TaskList = new __goscript_tasklist_pb.TaskList()
					}
					{
						let err = __goscript_tasklist_pb.TaskList.prototype.Unmarshal.call((m$ as DescribeTaskListRequest).TaskList, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskListType", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as DescribeTaskListRequest).TaskListType = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow26.backing as any[])[$.windowSlot(__goscriptSliceWindow26, iNdEx)] as number)
						iNdEx++;
						;(m$ as DescribeTaskListRequest).TaskListType = (m$ as DescribeTaskListRequest).TaskListType | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 4:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field IncludeTaskListStatus", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow26.backing as any[])[$.windowSlot(__goscriptSliceWindow26, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as DescribeTaskListRequest).IncludeTaskListStatus = (v != 0)
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DescribeTaskListRequest).XXX_unrecognized = $.appendSlice((m$ as DescribeTaskListRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: DescribeTaskListRequest | $.VarRef<DescribeTaskListRequest> | null = this;
		await xxx_messageInfo_DescribeTaskListRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeTaskListRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: DescribeTaskListRequest | $.VarRef<DescribeTaskListRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DescribeTaskListRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeTaskListRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeTaskListRequest).MarshalToSizedBuffer(b) : DescribeTaskListRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: DescribeTaskListRequest | $.VarRef<DescribeTaskListRequest> | null = this;
		await xxx_messageInfo_DescribeTaskListRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeTaskListRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListRequest")), src)
	}

	public XXX_Size(): number {
		const m: DescribeTaskListRequest | $.VarRef<DescribeTaskListRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeTaskListRequest).Size() : DescribeTaskListRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DescribeTaskListRequest | $.VarRef<DescribeTaskListRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeTaskListRequest).Unmarshal(b) : DescribeTaskListRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DescribeTaskListRequest",
		() => new DescribeTaskListRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetIncludeTaskListStatus", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetTaskList", [], [/* @__PURE__ */ $.pointerType("apiv1.TaskList")], true), $.methodSignature("GetTaskListType", [], [/* @__PURE__ */ $.basicType("int32", "apiv1.TaskListType")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		DescribeTaskListRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("TaskList", /* @__PURE__ */ $.pointerType("apiv1.TaskList"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=task_list,json=taskList,proto3\" json:\"task_list,omitempty\"" }), /* @__PURE__ */ $.structField("TaskListType", /* @__PURE__ */ $.basicType("int32", "apiv1.TaskListType"), [2], 24, true, { tag: "protobuf:\"varint,3,opt,name=task_list_type,json=taskListType,proto3,enum=uber.cadence.api.v1.TaskListType\" json:\"task_list_type,omitempty\"" }), /* @__PURE__ */ $.structField("IncludeTaskListStatus", /* @__PURE__ */ $.basicType("bool"), [3], 28, true, { tag: "protobuf:\"varint,4,opt,name=include_task_list_status,json=includeTaskListStatus,proto3\" json:\"include_task_list_status,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [4], 29, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 32, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [6], 56, true, { tag: "json:\"-\"" })]
	)
}

export class DescribeTaskListResponse {
	public get Pollers(): $.Slice<__goscript_tasklist_pb.PollerInfo | $.VarRef<__goscript_tasklist_pb.PollerInfo> | null> {
		return this._fields.Pollers
	}

	public set Pollers(value: $.Slice<__goscript_tasklist_pb.PollerInfo | $.VarRef<__goscript_tasklist_pb.PollerInfo> | null>) {
		this._fields.Pollers = value
	}

	public get TaskListStatus(): __goscript_tasklist_pb.TaskListStatus | $.VarRef<__goscript_tasklist_pb.TaskListStatus> | null {
		return this._fields.TaskListStatus
	}

	public set TaskListStatus(value: __goscript_tasklist_pb.TaskListStatus | $.VarRef<__goscript_tasklist_pb.TaskListStatus> | null) {
		this._fields.TaskListStatus = value
	}

	public get PartitionConfig(): __goscript_tasklist_pb.TaskListPartitionConfig | $.VarRef<__goscript_tasklist_pb.TaskListPartitionConfig> | null {
		return this._fields.PartitionConfig
	}

	public set PartitionConfig(value: __goscript_tasklist_pb.TaskListPartitionConfig | $.VarRef<__goscript_tasklist_pb.TaskListPartitionConfig> | null) {
		this._fields.PartitionConfig = value
	}

	// The TaskList being described
	public get TaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		return this._fields.TaskList
	}

	public set TaskList(value: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null) {
		this._fields.TaskList = value
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
		Pollers: $.Slice<__goscript_tasklist_pb.PollerInfo | $.VarRef<__goscript_tasklist_pb.PollerInfo> | null>
		TaskListStatus: __goscript_tasklist_pb.TaskListStatus | $.VarRef<__goscript_tasklist_pb.TaskListStatus> | null
		PartitionConfig: __goscript_tasklist_pb.TaskListPartitionConfig | $.VarRef<__goscript_tasklist_pb.TaskListPartitionConfig> | null
		TaskList: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Pollers?: $.Slice<__goscript_tasklist_pb.PollerInfo | $.VarRef<__goscript_tasklist_pb.PollerInfo> | null>, TaskListStatus?: __goscript_tasklist_pb.TaskListStatus | $.VarRef<__goscript_tasklist_pb.TaskListStatus> | null, PartitionConfig?: __goscript_tasklist_pb.TaskListPartitionConfig | $.VarRef<__goscript_tasklist_pb.TaskListPartitionConfig> | null, TaskList?: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Pollers: init?.Pollers ?? (null! as $.Slice<__goscript_tasklist_pb.PollerInfo | $.VarRef<__goscript_tasklist_pb.PollerInfo> | null>),
			TaskListStatus: init?.TaskListStatus ?? (null! as __goscript_tasklist_pb.TaskListStatus | $.VarRef<__goscript_tasklist_pb.TaskListStatus> | null),
			PartitionConfig: init?.PartitionConfig ?? (null! as __goscript_tasklist_pb.TaskListPartitionConfig | $.VarRef<__goscript_tasklist_pb.TaskListPartitionConfig> | null),
			TaskList: init?.TaskList ?? (null! as __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DescribeTaskListResponse {
		return new DescribeTaskListResponse(this, true)
	}

	public __goscriptAssign(source: DescribeTaskListResponse): void {
		const target = this._fields
		const values = source._fields
		target.Pollers = values.Pollers
		target.TaskListStatus = values.TaskListStatus
		target.PartitionConfig = values.PartitionConfig
		target.TaskList = values.TaskList
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([25])]
	}

	public GetPartitionConfig(): __goscript_tasklist_pb.TaskListPartitionConfig | $.VarRef<__goscript_tasklist_pb.TaskListPartitionConfig> | null {
		const m: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeTaskListResponse>(m).PartitionConfig
		}
		return null
	}

	public GetPollers(): $.Slice<__goscript_tasklist_pb.PollerInfo | $.VarRef<__goscript_tasklist_pb.PollerInfo> | null> {
		const m: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeTaskListResponse>(m).Pollers
		}
		return null
	}

	public GetTaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		const m: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeTaskListResponse>(m).TaskList
		}
		return null
	}

	public GetTaskListStatus(): __goscript_tasklist_pb.TaskListStatus | $.VarRef<__goscript_tasklist_pb.TaskListStatus> | null {
		const m: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeTaskListResponse>(m).TaskListStatus
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeTaskListResponse).Size() : DescribeTaskListResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple25: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeTaskListResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeTaskListResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple25[0]
		err = __goscriptTuple25[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeTaskListResponse).Size() : DescribeTaskListResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeTaskListResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeTaskListResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = this;
		const m$: DescribeTaskListResponse = m == null ? $.pointerTarget<DescribeTaskListResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeTaskListResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DescribeTaskListResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DescribeTaskListResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DescribeTaskListResponse).XXX_unrecognized)
		}
		if ((m$ as DescribeTaskListResponse).TaskList != null) {
			{
				let [size, err] = __goscript_tasklist_pb.TaskList.prototype.MarshalToSizedBuffer.call((m$ as DescribeTaskListResponse).TaskList, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as DescribeTaskListResponse).PartitionConfig != null) {
			{
				let [size, err] = __goscript_tasklist_pb.TaskListPartitionConfig.prototype.MarshalToSizedBuffer.call((m$ as DescribeTaskListResponse).PartitionConfig, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as DescribeTaskListResponse).TaskListStatus != null) {
			{
				let [size, err] = __goscript_tasklist_pb.TaskListStatus.prototype.MarshalToSizedBuffer.call((m$ as DescribeTaskListResponse).TaskListStatus, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.sliceLen((m$ as DescribeTaskListResponse).Pollers) > 0) {
			for (let __goscriptSliceWindow27 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as DescribeTaskListResponse).Pollers) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_tasklist_pb.PollerInfo.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as DescribeTaskListResponse).Pollers!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow27.backing as any[])[$.windowSlot(__goscriptSliceWindow27, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = this;
		$.assignStruct($.pointerValue<DescribeTaskListResponse>(m), $.markAsStructValue(new DescribeTaskListResponse()))
	}

	public Size(): number {
		const m: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = this;
		let n: number = 0
		const m$: DescribeTaskListResponse = m == null ? $.pointerTarget<DescribeTaskListResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeTaskListResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as DescribeTaskListResponse).Pollers) > 0) {
			for (let __goscriptRangeTarget2 = (m$ as DescribeTaskListResponse).Pollers, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_tasklist_pb.PollerInfo | $.VarRef<__goscript_tasklist_pb.PollerInfo> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_tasklist_pb.PollerInfo).Size() : __goscript_tasklist_pb.PollerInfo.prototype.Size.call(e))
				n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
			}
		}
		if ((m$ as DescribeTaskListResponse).TaskListStatus != null) {
			l = __goscript_tasklist_pb.TaskListStatus.prototype.Size.call((m$ as DescribeTaskListResponse).TaskListStatus)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as DescribeTaskListResponse).PartitionConfig != null) {
			l = __goscript_tasklist_pb.TaskListPartitionConfig.prototype.Size.call((m$ as DescribeTaskListResponse).PartitionConfig)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as DescribeTaskListResponse).TaskList != null) {
			l = __goscript_tasklist_pb.TaskList.prototype.Size.call((m$ as DescribeTaskListResponse).TaskList)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as DescribeTaskListResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DescribeTaskListResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeTaskListResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = this;
		const m$: DescribeTaskListResponse = m == null ? $.pointerTarget<DescribeTaskListResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeTaskListResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow28 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: DescribeTaskListResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DescribeTaskListResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Pollers", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow28.backing as any[])[$.windowSlot(__goscriptSliceWindow28, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DescribeTaskListResponse).Pollers = $.appendOne((m$ as DescribeTaskListResponse).Pollers, new __goscript_tasklist_pb.PollerInfo(), $.appendZeros.nil)
					{
						let err = __goscript_tasklist_pb.PollerInfo.prototype.Unmarshal.call($.arrayIndex((m$ as DescribeTaskListResponse).Pollers!, $.sliceLen((m$ as DescribeTaskListResponse).Pollers) - 1), $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field TaskListStatus", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow28.backing as any[])[$.windowSlot(__goscriptSliceWindow28, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DescribeTaskListResponse).TaskListStatus == null) {
						;(m$ as DescribeTaskListResponse).TaskListStatus = new __goscript_tasklist_pb.TaskListStatus()
					}
					{
						let err = __goscript_tasklist_pb.TaskListStatus.prototype.Unmarshal.call((m$ as DescribeTaskListResponse).TaskListStatus, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field PartitionConfig", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow28.backing as any[])[$.windowSlot(__goscriptSliceWindow28, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DescribeTaskListResponse).PartitionConfig == null) {
						;(m$ as DescribeTaskListResponse).PartitionConfig = new __goscript_tasklist_pb.TaskListPartitionConfig()
					}
					{
						let err = __goscript_tasklist_pb.TaskListPartitionConfig.prototype.Unmarshal.call((m$ as DescribeTaskListResponse).PartitionConfig, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field TaskList", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow28.backing as any[])[$.windowSlot(__goscriptSliceWindow28, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DescribeTaskListResponse).TaskList == null) {
						;(m$ as DescribeTaskListResponse).TaskList = new __goscript_tasklist_pb.TaskList()
					}
					{
						let err = __goscript_tasklist_pb.TaskList.prototype.Unmarshal.call((m$ as DescribeTaskListResponse).TaskList, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DescribeTaskListResponse).XXX_unrecognized = $.appendSlice((m$ as DescribeTaskListResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = this;
		await xxx_messageInfo_DescribeTaskListResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeTaskListResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DescribeTaskListResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeTaskListResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeTaskListResponse).MarshalToSizedBuffer(b) : DescribeTaskListResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = this;
		await xxx_messageInfo_DescribeTaskListResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeTaskListResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse")), src)
	}

	public XXX_Size(): number {
		const m: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeTaskListResponse).Size() : DescribeTaskListResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeTaskListResponse).Unmarshal(b) : DescribeTaskListResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DescribeTaskListResponse",
		() => new DescribeTaskListResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetPartitionConfig", [], [/* @__PURE__ */ $.pointerType("apiv1.TaskListPartitionConfig")], true), $.methodSignature("GetPollers", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.PollerInfo"))], true), $.methodSignature("GetTaskList", [], [/* @__PURE__ */ $.pointerType("apiv1.TaskList")], true), $.methodSignature("GetTaskListStatus", [], [/* @__PURE__ */ $.pointerType("apiv1.TaskListStatus")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		DescribeTaskListResponse,
		() => [/* @__PURE__ */ $.structField("Pollers", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.PollerInfo")), [0], 0, true, { tag: "protobuf:\"bytes,1,rep,name=pollers,proto3\" json:\"pollers,omitempty\"" }), /* @__PURE__ */ $.structField("TaskListStatus", /* @__PURE__ */ $.pointerType("apiv1.TaskListStatus"), [1], 24, true, { tag: "protobuf:\"bytes,2,opt,name=task_list_status,json=taskListStatus,proto3\" json:\"task_list_status,omitempty\"" }), /* @__PURE__ */ $.structField("PartitionConfig", /* @__PURE__ */ $.pointerType("apiv1.TaskListPartitionConfig"), [2], 32, true, { tag: "protobuf:\"bytes,3,opt,name=partition_config,json=partitionConfig,proto3\" json:\"partition_config,omitempty\"" }), /* @__PURE__ */ $.structField("TaskList", /* @__PURE__ */ $.pointerType("apiv1.TaskList"), [3], 40, true, { tag: "protobuf:\"bytes,4,opt,name=task_list,json=taskList,proto3\" json:\"task_list,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [4], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [6], 72, true, { tag: "json:\"-\"" })]
	)
}

export class GetTaskListsByDomainRequest {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
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
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GetTaskListsByDomainRequest {
		return new GetTaskListsByDomainRequest(this, true)
	}

	public __goscriptAssign(source: GetTaskListsByDomainRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([26])]
	}

	public GetDomain(): string {
		const m: GetTaskListsByDomainRequest | $.VarRef<GetTaskListsByDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<GetTaskListsByDomainRequest>(m).Domain
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: GetTaskListsByDomainRequest | $.VarRef<GetTaskListsByDomainRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetTaskListsByDomainRequest).Size() : GetTaskListsByDomainRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple26: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetTaskListsByDomainRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : GetTaskListsByDomainRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple26[0]
		err = __goscriptTuple26[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: GetTaskListsByDomainRequest | $.VarRef<GetTaskListsByDomainRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetTaskListsByDomainRequest).Size() : GetTaskListsByDomainRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetTaskListsByDomainRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : GetTaskListsByDomainRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: GetTaskListsByDomainRequest | $.VarRef<GetTaskListsByDomainRequest> | null = this;
		const m$: GetTaskListsByDomainRequest = m == null ? $.pointerTarget<GetTaskListsByDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetTaskListsByDomainRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as GetTaskListsByDomainRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as GetTaskListsByDomainRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as GetTaskListsByDomainRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as GetTaskListsByDomainRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as GetTaskListsByDomainRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as GetTaskListsByDomainRequest).Domain)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as GetTaskListsByDomainRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: GetTaskListsByDomainRequest | $.VarRef<GetTaskListsByDomainRequest> | null = this;
		$.assignStruct($.pointerValue<GetTaskListsByDomainRequest>(m), $.markAsStructValue(new GetTaskListsByDomainRequest()))
	}

	public Size(): number {
		const m: GetTaskListsByDomainRequest | $.VarRef<GetTaskListsByDomainRequest> | null = this;
		let n: number = 0
		const m$: GetTaskListsByDomainRequest = m == null ? $.pointerTarget<GetTaskListsByDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetTaskListsByDomainRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as GetTaskListsByDomainRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as GetTaskListsByDomainRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as GetTaskListsByDomainRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: GetTaskListsByDomainRequest | $.VarRef<GetTaskListsByDomainRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.GetTaskListsByDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: GetTaskListsByDomainRequest | $.VarRef<GetTaskListsByDomainRequest> | null = this;
		const m$: GetTaskListsByDomainRequest = m == null ? $.pointerTarget<GetTaskListsByDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetTaskListsByDomainRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow29 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
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
				return fmt.Errorf("proto: GetTaskListsByDomainRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: GetTaskListsByDomainRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow29.backing as any[])[$.windowSlot(__goscriptSliceWindow29, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as GetTaskListsByDomainRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as GetTaskListsByDomainRequest).XXX_unrecognized = $.appendSlice((m$ as GetTaskListsByDomainRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: GetTaskListsByDomainRequest | $.VarRef<GetTaskListsByDomainRequest> | null = this;
		await xxx_messageInfo_GetTaskListsByDomainRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.GetTaskListsByDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: GetTaskListsByDomainRequest | $.VarRef<GetTaskListsByDomainRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_GetTaskListsByDomainRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.GetTaskListsByDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetTaskListsByDomainRequest).MarshalToSizedBuffer(b) : GetTaskListsByDomainRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: GetTaskListsByDomainRequest | $.VarRef<GetTaskListsByDomainRequest> | null = this;
		await xxx_messageInfo_GetTaskListsByDomainRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.GetTaskListsByDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainRequest")), src)
	}

	public XXX_Size(): number {
		const m: GetTaskListsByDomainRequest | $.VarRef<GetTaskListsByDomainRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetTaskListsByDomainRequest).Size() : GetTaskListsByDomainRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: GetTaskListsByDomainRequest | $.VarRef<GetTaskListsByDomainRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetTaskListsByDomainRequest).Unmarshal(b) : GetTaskListsByDomainRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.GetTaskListsByDomainRequest",
		() => new GetTaskListsByDomainRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		GetTaskListsByDomainRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [1], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [3], 40, true, { tag: "json:\"-\"" })]
	)
}

export class GetTaskListsByDomainResponse {
	public get DecisionTaskListMap(): globalThis.Map<string, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null> | null {
		return this._fields.DecisionTaskListMap
	}

	public set DecisionTaskListMap(value: globalThis.Map<string, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null> | null) {
		this._fields.DecisionTaskListMap = value
	}

	public get ActivityTaskListMap(): globalThis.Map<string, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null> | null {
		return this._fields.ActivityTaskListMap
	}

	public set ActivityTaskListMap(value: globalThis.Map<string, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null> | null) {
		this._fields.ActivityTaskListMap = value
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
		DecisionTaskListMap: globalThis.Map<string, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null> | null
		ActivityTaskListMap: globalThis.Map<string, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{DecisionTaskListMap?: globalThis.Map<string, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null> | null, ActivityTaskListMap?: globalThis.Map<string, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			DecisionTaskListMap: init?.DecisionTaskListMap ?? (null! as globalThis.Map<string, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null> | null),
			ActivityTaskListMap: init?.ActivityTaskListMap ?? (null! as globalThis.Map<string, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GetTaskListsByDomainResponse {
		return new GetTaskListsByDomainResponse(this, true)
	}

	public __goscriptAssign(source: GetTaskListsByDomainResponse): void {
		const target = this._fields
		const values = source._fields
		target.DecisionTaskListMap = values.DecisionTaskListMap
		target.ActivityTaskListMap = values.ActivityTaskListMap
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([27])]
	}

	public GetActivityTaskListMap(): globalThis.Map<string, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null> | null {
		const m: GetTaskListsByDomainResponse | $.VarRef<GetTaskListsByDomainResponse> | null = this;
		if (m != null) {
			return $.pointerValue<GetTaskListsByDomainResponse>(m).ActivityTaskListMap
		}
		return null
	}

	public GetDecisionTaskListMap(): globalThis.Map<string, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null> | null {
		const m: GetTaskListsByDomainResponse | $.VarRef<GetTaskListsByDomainResponse> | null = this;
		if (m != null) {
			return $.pointerValue<GetTaskListsByDomainResponse>(m).DecisionTaskListMap
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: GetTaskListsByDomainResponse | $.VarRef<GetTaskListsByDomainResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetTaskListsByDomainResponse).Size() : GetTaskListsByDomainResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple27: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetTaskListsByDomainResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : GetTaskListsByDomainResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple27[0]
		err = __goscriptTuple27[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: GetTaskListsByDomainResponse | $.VarRef<GetTaskListsByDomainResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetTaskListsByDomainResponse).Size() : GetTaskListsByDomainResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetTaskListsByDomainResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : GetTaskListsByDomainResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: GetTaskListsByDomainResponse | $.VarRef<GetTaskListsByDomainResponse> | null = this;
		const m$: GetTaskListsByDomainResponse = m == null ? $.pointerTarget<GetTaskListsByDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetTaskListsByDomainResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as GetTaskListsByDomainResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as GetTaskListsByDomainResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as GetTaskListsByDomainResponse).XXX_unrecognized)
		}
		if ($.len((m$ as GetTaskListsByDomainResponse).ActivityTaskListMap) > 0) {
			for (const [k, __rangeValue] of (m$ as GetTaskListsByDomainResponse).ActivityTaskListMap?.entries() ?? []) {
				let v: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = $.mapGet<string, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null>((m$ as GetTaskListsByDomainResponse).ActivityTaskListMap, k, null)[0]
				let baseI: number = i
				if (v != null) {
					{
						let [size, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as DescribeTaskListResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, i)) : DescribeTaskListResponse.prototype.MarshalToSizedBuffer.call(v, $.goSlice(dAtA, undefined, i)))
						if (err != null) {
							return [0, err]
						}
						i = i - (size)
						i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
					}
					i--
					$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				}
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
			}
		}
		if ($.len((m$ as GetTaskListsByDomainResponse).DecisionTaskListMap) > 0) {
			for (const [k, __rangeValue] of (m$ as GetTaskListsByDomainResponse).DecisionTaskListMap?.entries() ?? []) {
				let v: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = $.mapGet<string, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null>((m$ as GetTaskListsByDomainResponse).DecisionTaskListMap, k, null)[0]
				let baseI: number = i
				if (v != null) {
					{
						let [size, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as DescribeTaskListResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, i)) : DescribeTaskListResponse.prototype.MarshalToSizedBuffer.call(v, $.goSlice(dAtA, undefined, i)))
						if (err != null) {
							return [0, err]
						}
						i = i - (size)
						i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
					}
					i--
					$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				}
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: GetTaskListsByDomainResponse | $.VarRef<GetTaskListsByDomainResponse> | null = this;
		$.assignStruct($.pointerValue<GetTaskListsByDomainResponse>(m), $.markAsStructValue(new GetTaskListsByDomainResponse()))
	}

	public Size(): number {
		const m: GetTaskListsByDomainResponse | $.VarRef<GetTaskListsByDomainResponse> | null = this;
		let n: number = 0
		const m$: GetTaskListsByDomainResponse = m == null ? $.pointerTarget<GetTaskListsByDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetTaskListsByDomainResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.len((m$ as GetTaskListsByDomainResponse).DecisionTaskListMap) > 0) {
			for (const [k, v] of (m$ as GetTaskListsByDomainResponse).DecisionTaskListMap?.entries() ?? []) {
				k
				v
				l = 0
				if (v != null) {
					l = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as DescribeTaskListResponse).Size() : DescribeTaskListResponse.prototype.Size.call(v))
					l = l + (1 + sovServiceWorkflow($.uint64(l)))
				}
				let mapEntrySize = ((1 + $.stringLen(k)) + sovServiceWorkflow($.uint64($.stringLen(k)))) + l
				n = n + ((mapEntrySize + 1) + sovServiceWorkflow($.uint64(mapEntrySize)))
			}
		}
		if ($.len((m$ as GetTaskListsByDomainResponse).ActivityTaskListMap) > 0) {
			for (const [k, v] of (m$ as GetTaskListsByDomainResponse).ActivityTaskListMap?.entries() ?? []) {
				k
				v
				l = 0
				if (v != null) {
					l = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as DescribeTaskListResponse).Size() : DescribeTaskListResponse.prototype.Size.call(v))
					l = l + (1 + sovServiceWorkflow($.uint64(l)))
				}
				let mapEntrySize = ((1 + $.stringLen(k)) + sovServiceWorkflow($.uint64($.stringLen(k)))) + l
				n = n + ((mapEntrySize + 1) + sovServiceWorkflow($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as GetTaskListsByDomainResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as GetTaskListsByDomainResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: GetTaskListsByDomainResponse | $.VarRef<GetTaskListsByDomainResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.GetTaskListsByDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: GetTaskListsByDomainResponse | $.VarRef<GetTaskListsByDomainResponse> | null = this;
		const m$: GetTaskListsByDomainResponse = m == null ? $.pointerTarget<GetTaskListsByDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetTaskListsByDomainResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow30 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow30.backing as any[])[$.windowSlot(__goscriptSliceWindow30, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: GetTaskListsByDomainResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: GetTaskListsByDomainResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field DecisionTaskListMap", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow30.backing as any[])[$.windowSlot(__goscriptSliceWindow30, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as GetTaskListsByDomainResponse).DecisionTaskListMap == null) {
						;(m$ as GetTaskListsByDomainResponse).DecisionTaskListMap = $.makeMap<string, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null>()
					}
					let mapkey: string = ""
					let mapvalue: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = null! as DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow0: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowServiceWorkflow
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow30.backing as any[])[$.windowSlot(__goscriptSliceWindow30, iNdEx)] as number)
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
									return ErrIntOverflowServiceWorkflow
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow30.backing as any[])[$.windowSlot(__goscriptSliceWindow30, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthServiceWorkflow
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthServiceWorkflow
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
										return ErrIntOverflowServiceWorkflow
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow30.backing as any[])[$.windowSlot(__goscriptSliceWindow30, iNdEx)] as number)
									iNdEx++
									mapmsglen = mapmsglen | ($.int(b & 0x7F) << shift)
									if (b < 0x80) {
										break
									}
								}
								if (mapmsglen < 0) {
									return ErrInvalidLengthServiceWorkflow
								}
								let postmsgIndex: number = iNdEx + mapmsglen
								if (postmsgIndex < 0) {
									return ErrInvalidLengthServiceWorkflow
								}
								if (postmsgIndex > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = new DescribeTaskListResponse()
								{
									let err = (mapvalue !== null && (mapvalue as any).__isVarRef !== true && (mapvalue as any).__goValue === undefined ? ((mapvalue as any) as DescribeTaskListResponse).Unmarshal($.goSlice(dAtA, iNdEx, postmsgIndex)) : DescribeTaskListResponse.prototype.Unmarshal.call(mapvalue, $.goSlice(dAtA, iNdEx, postmsgIndex)))
									if (err != null) {
										return err
									}
								}
								iNdEx = postmsgIndex
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthServiceWorkflow
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as GetTaskListsByDomainResponse).DecisionTaskListMap, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActivityTaskListMap", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow30.backing as any[])[$.windowSlot(__goscriptSliceWindow30, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as GetTaskListsByDomainResponse).ActivityTaskListMap == null) {
						;(m$ as GetTaskListsByDomainResponse).ActivityTaskListMap = $.makeMap<string, DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null>()
					}
					let mapkey: string = ""
					let mapvalue: DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null = null! as DescribeTaskListResponse | $.VarRef<DescribeTaskListResponse> | null
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow2: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowServiceWorkflow
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow30.backing as any[])[$.windowSlot(__goscriptSliceWindow30, iNdEx)] as number)
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
									return ErrIntOverflowServiceWorkflow
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow30.backing as any[])[$.windowSlot(__goscriptSliceWindow30, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthServiceWorkflow
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthServiceWorkflow
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
										return ErrIntOverflowServiceWorkflow
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow30.backing as any[])[$.windowSlot(__goscriptSliceWindow30, iNdEx)] as number)
									iNdEx++
									mapmsglen = mapmsglen | ($.int(b & 0x7F) << shift)
									if (b < 0x80) {
										break
									}
								}
								if (mapmsglen < 0) {
									return ErrInvalidLengthServiceWorkflow
								}
								let postmsgIndex: number = iNdEx + mapmsglen
								if (postmsgIndex < 0) {
									return ErrInvalidLengthServiceWorkflow
								}
								if (postmsgIndex > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = new DescribeTaskListResponse()
								{
									let err = (mapvalue !== null && (mapvalue as any).__isVarRef !== true && (mapvalue as any).__goValue === undefined ? ((mapvalue as any) as DescribeTaskListResponse).Unmarshal($.goSlice(dAtA, iNdEx, postmsgIndex)) : DescribeTaskListResponse.prototype.Unmarshal.call(mapvalue, $.goSlice(dAtA, iNdEx, postmsgIndex)))
									if (err != null) {
										return err
									}
								}
								iNdEx = postmsgIndex
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthServiceWorkflow
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as GetTaskListsByDomainResponse).ActivityTaskListMap, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as GetTaskListsByDomainResponse).XXX_unrecognized = $.appendSlice((m$ as GetTaskListsByDomainResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: GetTaskListsByDomainResponse | $.VarRef<GetTaskListsByDomainResponse> | null = this;
		await xxx_messageInfo_GetTaskListsByDomainResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.GetTaskListsByDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: GetTaskListsByDomainResponse | $.VarRef<GetTaskListsByDomainResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_GetTaskListsByDomainResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.GetTaskListsByDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetTaskListsByDomainResponse).MarshalToSizedBuffer(b) : GetTaskListsByDomainResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: GetTaskListsByDomainResponse | $.VarRef<GetTaskListsByDomainResponse> | null = this;
		await xxx_messageInfo_GetTaskListsByDomainResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.GetTaskListsByDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainResponse")), src)
	}

	public XXX_Size(): number {
		const m: GetTaskListsByDomainResponse | $.VarRef<GetTaskListsByDomainResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetTaskListsByDomainResponse).Size() : GetTaskListsByDomainResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: GetTaskListsByDomainResponse | $.VarRef<GetTaskListsByDomainResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetTaskListsByDomainResponse).Unmarshal(b) : GetTaskListsByDomainResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.GetTaskListsByDomainResponse",
		() => new GetTaskListsByDomainResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetActivityTaskListMap", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse"))], true), $.methodSignature("GetDecisionTaskListMap", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		GetTaskListsByDomainResponse,
		() => [/* @__PURE__ */ $.structField("DecisionTaskListMap", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse")), [0], 0, true, { tag: "protobuf:\"bytes,1,rep,name=decision_task_list_map,json=decisionTaskListMap,proto3\" json:\"decision_task_list_map,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }), /* @__PURE__ */ $.structField("ActivityTaskListMap", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse")), [1], 8, true, { tag: "protobuf:\"bytes,2,rep,name=activity_task_list_map,json=activityTaskListMap,proto3\" json:\"activity_task_list_map,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 40, true, { tag: "json:\"-\"" })]
	)
}

export class ListTaskListPartitionsRequest {
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
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, TaskList?: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			TaskList: init?.TaskList ?? (null! as __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListTaskListPartitionsRequest {
		return new ListTaskListPartitionsRequest(this, true)
	}

	public __goscriptAssign(source: ListTaskListPartitionsRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.TaskList = values.TaskList
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([28])]
	}

	public GetDomain(): string {
		const m: ListTaskListPartitionsRequest | $.VarRef<ListTaskListPartitionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListTaskListPartitionsRequest>(m).Domain
		}
		return ""
	}

	public GetTaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		const m: ListTaskListPartitionsRequest | $.VarRef<ListTaskListPartitionsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListTaskListPartitionsRequest>(m).TaskList
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListTaskListPartitionsRequest | $.VarRef<ListTaskListPartitionsRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListTaskListPartitionsRequest).Size() : ListTaskListPartitionsRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple28: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListTaskListPartitionsRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListTaskListPartitionsRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple28[0]
		err = __goscriptTuple28[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListTaskListPartitionsRequest | $.VarRef<ListTaskListPartitionsRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListTaskListPartitionsRequest).Size() : ListTaskListPartitionsRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListTaskListPartitionsRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListTaskListPartitionsRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListTaskListPartitionsRequest | $.VarRef<ListTaskListPartitionsRequest> | null = this;
		const m$: ListTaskListPartitionsRequest = m == null ? $.pointerTarget<ListTaskListPartitionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListTaskListPartitionsRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListTaskListPartitionsRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListTaskListPartitionsRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListTaskListPartitionsRequest).XXX_unrecognized)
		}
		if ((m$ as ListTaskListPartitionsRequest).TaskList != null) {
			{
				let [size, err] = __goscript_tasklist_pb.TaskList.prototype.MarshalToSizedBuffer.call((m$ as ListTaskListPartitionsRequest).TaskList, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as ListTaskListPartitionsRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as ListTaskListPartitionsRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListTaskListPartitionsRequest).Domain)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as ListTaskListPartitionsRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ListTaskListPartitionsRequest | $.VarRef<ListTaskListPartitionsRequest> | null = this;
		$.assignStruct($.pointerValue<ListTaskListPartitionsRequest>(m), $.markAsStructValue(new ListTaskListPartitionsRequest()))
	}

	public Size(): number {
		const m: ListTaskListPartitionsRequest | $.VarRef<ListTaskListPartitionsRequest> | null = this;
		let n: number = 0
		const m$: ListTaskListPartitionsRequest = m == null ? $.pointerTarget<ListTaskListPartitionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListTaskListPartitionsRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ListTaskListPartitionsRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as ListTaskListPartitionsRequest).TaskList != null) {
			l = __goscript_tasklist_pb.TaskList.prototype.Size.call((m$ as ListTaskListPartitionsRequest).TaskList)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as ListTaskListPartitionsRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListTaskListPartitionsRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ListTaskListPartitionsRequest | $.VarRef<ListTaskListPartitionsRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ListTaskListPartitionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListTaskListPartitionsRequest | $.VarRef<ListTaskListPartitionsRequest> | null = this;
		const m$: ListTaskListPartitionsRequest = m == null ? $.pointerTarget<ListTaskListPartitionsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListTaskListPartitionsRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow31 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow31.backing as any[])[$.windowSlot(__goscriptSliceWindow31, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: ListTaskListPartitionsRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListTaskListPartitionsRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow31.backing as any[])[$.windowSlot(__goscriptSliceWindow31, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListTaskListPartitionsRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow31.backing as any[])[$.windowSlot(__goscriptSliceWindow31, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ListTaskListPartitionsRequest).TaskList == null) {
						;(m$ as ListTaskListPartitionsRequest).TaskList = new __goscript_tasklist_pb.TaskList()
					}
					{
						let err = __goscript_tasklist_pb.TaskList.prototype.Unmarshal.call((m$ as ListTaskListPartitionsRequest).TaskList, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListTaskListPartitionsRequest).XXX_unrecognized = $.appendSlice((m$ as ListTaskListPartitionsRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ListTaskListPartitionsRequest | $.VarRef<ListTaskListPartitionsRequest> | null = this;
		await xxx_messageInfo_ListTaskListPartitionsRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ListTaskListPartitionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ListTaskListPartitionsRequest | $.VarRef<ListTaskListPartitionsRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListTaskListPartitionsRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ListTaskListPartitionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListTaskListPartitionsRequest).MarshalToSizedBuffer(b) : ListTaskListPartitionsRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ListTaskListPartitionsRequest | $.VarRef<ListTaskListPartitionsRequest> | null = this;
		await xxx_messageInfo_ListTaskListPartitionsRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ListTaskListPartitionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsRequest")), src)
	}

	public XXX_Size(): number {
		const m: ListTaskListPartitionsRequest | $.VarRef<ListTaskListPartitionsRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListTaskListPartitionsRequest).Size() : ListTaskListPartitionsRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListTaskListPartitionsRequest | $.VarRef<ListTaskListPartitionsRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListTaskListPartitionsRequest).Unmarshal(b) : ListTaskListPartitionsRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListTaskListPartitionsRequest",
		() => new ListTaskListPartitionsRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetTaskList", [], [/* @__PURE__ */ $.pointerType("apiv1.TaskList")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ListTaskListPartitionsRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("TaskList", /* @__PURE__ */ $.pointerType("apiv1.TaskList"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=task_list,json=taskList,proto3\" json:\"task_list,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 24, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 24, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 48, true, { tag: "json:\"-\"" })]
	)
}

export class ListTaskListPartitionsResponse {
	public get ActivityTaskListPartitions(): $.Slice<__goscript_tasklist_pb.TaskListPartitionMetadata | $.VarRef<__goscript_tasklist_pb.TaskListPartitionMetadata> | null> {
		return this._fields.ActivityTaskListPartitions
	}

	public set ActivityTaskListPartitions(value: $.Slice<__goscript_tasklist_pb.TaskListPartitionMetadata | $.VarRef<__goscript_tasklist_pb.TaskListPartitionMetadata> | null>) {
		this._fields.ActivityTaskListPartitions = value
	}

	public get DecisionTaskListPartitions(): $.Slice<__goscript_tasklist_pb.TaskListPartitionMetadata | $.VarRef<__goscript_tasklist_pb.TaskListPartitionMetadata> | null> {
		return this._fields.DecisionTaskListPartitions
	}

	public set DecisionTaskListPartitions(value: $.Slice<__goscript_tasklist_pb.TaskListPartitionMetadata | $.VarRef<__goscript_tasklist_pb.TaskListPartitionMetadata> | null>) {
		this._fields.DecisionTaskListPartitions = value
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
		ActivityTaskListPartitions: $.Slice<__goscript_tasklist_pb.TaskListPartitionMetadata | $.VarRef<__goscript_tasklist_pb.TaskListPartitionMetadata> | null>
		DecisionTaskListPartitions: $.Slice<__goscript_tasklist_pb.TaskListPartitionMetadata | $.VarRef<__goscript_tasklist_pb.TaskListPartitionMetadata> | null>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{ActivityTaskListPartitions?: $.Slice<__goscript_tasklist_pb.TaskListPartitionMetadata | $.VarRef<__goscript_tasklist_pb.TaskListPartitionMetadata> | null>, DecisionTaskListPartitions?: $.Slice<__goscript_tasklist_pb.TaskListPartitionMetadata | $.VarRef<__goscript_tasklist_pb.TaskListPartitionMetadata> | null>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ActivityTaskListPartitions: init?.ActivityTaskListPartitions ?? (null! as $.Slice<__goscript_tasklist_pb.TaskListPartitionMetadata | $.VarRef<__goscript_tasklist_pb.TaskListPartitionMetadata> | null>),
			DecisionTaskListPartitions: init?.DecisionTaskListPartitions ?? (null! as $.Slice<__goscript_tasklist_pb.TaskListPartitionMetadata | $.VarRef<__goscript_tasklist_pb.TaskListPartitionMetadata> | null>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListTaskListPartitionsResponse {
		return new ListTaskListPartitionsResponse(this, true)
	}

	public __goscriptAssign(source: ListTaskListPartitionsResponse): void {
		const target = this._fields
		const values = source._fields
		target.ActivityTaskListPartitions = values.ActivityTaskListPartitions
		target.DecisionTaskListPartitions = values.DecisionTaskListPartitions
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([29])]
	}

	public GetActivityTaskListPartitions(): $.Slice<__goscript_tasklist_pb.TaskListPartitionMetadata | $.VarRef<__goscript_tasklist_pb.TaskListPartitionMetadata> | null> {
		const m: ListTaskListPartitionsResponse | $.VarRef<ListTaskListPartitionsResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ListTaskListPartitionsResponse>(m).ActivityTaskListPartitions
		}
		return null
	}

	public GetDecisionTaskListPartitions(): $.Slice<__goscript_tasklist_pb.TaskListPartitionMetadata | $.VarRef<__goscript_tasklist_pb.TaskListPartitionMetadata> | null> {
		const m: ListTaskListPartitionsResponse | $.VarRef<ListTaskListPartitionsResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ListTaskListPartitionsResponse>(m).DecisionTaskListPartitions
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListTaskListPartitionsResponse | $.VarRef<ListTaskListPartitionsResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListTaskListPartitionsResponse).Size() : ListTaskListPartitionsResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple29: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListTaskListPartitionsResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListTaskListPartitionsResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple29[0]
		err = __goscriptTuple29[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListTaskListPartitionsResponse | $.VarRef<ListTaskListPartitionsResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListTaskListPartitionsResponse).Size() : ListTaskListPartitionsResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListTaskListPartitionsResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListTaskListPartitionsResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListTaskListPartitionsResponse | $.VarRef<ListTaskListPartitionsResponse> | null = this;
		const m$: ListTaskListPartitionsResponse = m == null ? $.pointerTarget<ListTaskListPartitionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListTaskListPartitionsResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListTaskListPartitionsResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListTaskListPartitionsResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListTaskListPartitionsResponse).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as ListTaskListPartitionsResponse).DecisionTaskListPartitions) > 0) {
			for (let __goscriptSliceWindow32 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as ListTaskListPartitionsResponse).DecisionTaskListPartitions) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_tasklist_pb.TaskListPartitionMetadata.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as ListTaskListPartitionsResponse).DecisionTaskListPartitions!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow32.backing as any[])[$.windowSlot(__goscriptSliceWindow32, i)] = 0x12
			}
		}
		if ($.sliceLen((m$ as ListTaskListPartitionsResponse).ActivityTaskListPartitions) > 0) {
			for (let __goscriptSliceWindow33 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as ListTaskListPartitionsResponse).ActivityTaskListPartitions) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_tasklist_pb.TaskListPartitionMetadata.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as ListTaskListPartitionsResponse).ActivityTaskListPartitions!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow33.backing as any[])[$.windowSlot(__goscriptSliceWindow33, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ListTaskListPartitionsResponse | $.VarRef<ListTaskListPartitionsResponse> | null = this;
		$.assignStruct($.pointerValue<ListTaskListPartitionsResponse>(m), $.markAsStructValue(new ListTaskListPartitionsResponse()))
	}

	public Size(): number {
		const m: ListTaskListPartitionsResponse | $.VarRef<ListTaskListPartitionsResponse> | null = this;
		let n: number = 0
		const m$: ListTaskListPartitionsResponse = m == null ? $.pointerTarget<ListTaskListPartitionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListTaskListPartitionsResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as ListTaskListPartitionsResponse).ActivityTaskListPartitions) > 0) {
			for (let __goscriptRangeTarget3 = (m$ as ListTaskListPartitionsResponse).ActivityTaskListPartitions, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_tasklist_pb.TaskListPartitionMetadata | $.VarRef<__goscript_tasklist_pb.TaskListPartitionMetadata> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_tasklist_pb.TaskListPartitionMetadata).Size() : __goscript_tasklist_pb.TaskListPartitionMetadata.prototype.Size.call(e))
				n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
			}
		}
		if ($.sliceLen((m$ as ListTaskListPartitionsResponse).DecisionTaskListPartitions) > 0) {
			for (let __goscriptRangeTarget4 = (m$ as ListTaskListPartitionsResponse).DecisionTaskListPartitions, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as __goscript_tasklist_pb.TaskListPartitionMetadata | $.VarRef<__goscript_tasklist_pb.TaskListPartitionMetadata> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_tasklist_pb.TaskListPartitionMetadata).Size() : __goscript_tasklist_pb.TaskListPartitionMetadata.prototype.Size.call(e))
				n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
			}
		}
		if ((m$ as ListTaskListPartitionsResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListTaskListPartitionsResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ListTaskListPartitionsResponse | $.VarRef<ListTaskListPartitionsResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ListTaskListPartitionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListTaskListPartitionsResponse | $.VarRef<ListTaskListPartitionsResponse> | null = this;
		const m$: ListTaskListPartitionsResponse = m == null ? $.pointerTarget<ListTaskListPartitionsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListTaskListPartitionsResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow34 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow34.backing as any[])[$.windowSlot(__goscriptSliceWindow34, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: ListTaskListPartitionsResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListTaskListPartitionsResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActivityTaskListPartitions", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow34.backing as any[])[$.windowSlot(__goscriptSliceWindow34, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListTaskListPartitionsResponse).ActivityTaskListPartitions = $.appendOne((m$ as ListTaskListPartitionsResponse).ActivityTaskListPartitions, new __goscript_tasklist_pb.TaskListPartitionMetadata(), $.appendZeros.nil)
					{
						let err = __goscript_tasklist_pb.TaskListPartitionMetadata.prototype.Unmarshal.call($.arrayIndex((m$ as ListTaskListPartitionsResponse).ActivityTaskListPartitions!, $.sliceLen((m$ as ListTaskListPartitionsResponse).ActivityTaskListPartitions) - 1), $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field DecisionTaskListPartitions", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow34.backing as any[])[$.windowSlot(__goscriptSliceWindow34, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListTaskListPartitionsResponse).DecisionTaskListPartitions = $.appendOne((m$ as ListTaskListPartitionsResponse).DecisionTaskListPartitions, new __goscript_tasklist_pb.TaskListPartitionMetadata(), $.appendZeros.nil)
					{
						let err = __goscript_tasklist_pb.TaskListPartitionMetadata.prototype.Unmarshal.call($.arrayIndex((m$ as ListTaskListPartitionsResponse).DecisionTaskListPartitions!, $.sliceLen((m$ as ListTaskListPartitionsResponse).DecisionTaskListPartitions) - 1), $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListTaskListPartitionsResponse).XXX_unrecognized = $.appendSlice((m$ as ListTaskListPartitionsResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ListTaskListPartitionsResponse | $.VarRef<ListTaskListPartitionsResponse> | null = this;
		await xxx_messageInfo_ListTaskListPartitionsResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ListTaskListPartitionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ListTaskListPartitionsResponse | $.VarRef<ListTaskListPartitionsResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListTaskListPartitionsResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ListTaskListPartitionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListTaskListPartitionsResponse).MarshalToSizedBuffer(b) : ListTaskListPartitionsResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ListTaskListPartitionsResponse | $.VarRef<ListTaskListPartitionsResponse> | null = this;
		await xxx_messageInfo_ListTaskListPartitionsResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ListTaskListPartitionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsResponse")), src)
	}

	public XXX_Size(): number {
		const m: ListTaskListPartitionsResponse | $.VarRef<ListTaskListPartitionsResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListTaskListPartitionsResponse).Size() : ListTaskListPartitionsResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListTaskListPartitionsResponse | $.VarRef<ListTaskListPartitionsResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListTaskListPartitionsResponse).Unmarshal(b) : ListTaskListPartitionsResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListTaskListPartitionsResponse",
		() => new ListTaskListPartitionsResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetActivityTaskListPartitions", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.TaskListPartitionMetadata"))], true), $.methodSignature("GetDecisionTaskListPartitions", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.TaskListPartitionMetadata"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ListTaskListPartitionsResponse,
		() => [/* @__PURE__ */ $.structField("ActivityTaskListPartitions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.TaskListPartitionMetadata")), [0], 0, true, { tag: "protobuf:\"bytes,1,rep,name=activity_task_list_partitions,json=activityTaskListPartitions,proto3\" json:\"activity_task_list_partitions,omitempty\"" }), /* @__PURE__ */ $.structField("DecisionTaskListPartitions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.TaskListPartitionMetadata")), [1], 24, true, { tag: "protobuf:\"bytes,2,rep,name=decision_task_list_partitions,json=decisionTaskListPartitions,proto3\" json:\"decision_task_list_partitions,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 72, true, { tag: "json:\"-\"" })]
	)
}

export class GetClusterInfoRequest {
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

	public clone(): GetClusterInfoRequest {
		return new GetClusterInfoRequest(this, true)
	}

	public __goscriptAssign(source: GetClusterInfoRequest): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([30])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: GetClusterInfoRequest | $.VarRef<GetClusterInfoRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetClusterInfoRequest).Size() : GetClusterInfoRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple30: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetClusterInfoRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : GetClusterInfoRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple30[0]
		err = __goscriptTuple30[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: GetClusterInfoRequest | $.VarRef<GetClusterInfoRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetClusterInfoRequest).Size() : GetClusterInfoRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetClusterInfoRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : GetClusterInfoRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: GetClusterInfoRequest | $.VarRef<GetClusterInfoRequest> | null = this;
		const m$: GetClusterInfoRequest = m == null ? $.pointerTarget<GetClusterInfoRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetClusterInfoRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as GetClusterInfoRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as GetClusterInfoRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as GetClusterInfoRequest).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: GetClusterInfoRequest | $.VarRef<GetClusterInfoRequest> | null = this;
		$.assignStruct($.pointerValue<GetClusterInfoRequest>(m), new GetClusterInfoRequest(undefined, true))
	}

	public Size(): number {
		const m: GetClusterInfoRequest | $.VarRef<GetClusterInfoRequest> | null = this;
		let n: number = 0
		const m$: GetClusterInfoRequest = m == null ? $.pointerTarget<GetClusterInfoRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetClusterInfoRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as GetClusterInfoRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as GetClusterInfoRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: GetClusterInfoRequest | $.VarRef<GetClusterInfoRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.GetClusterInfoRequest", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: GetClusterInfoRequest | $.VarRef<GetClusterInfoRequest> | null = this;
		const m$: GetClusterInfoRequest = m == null ? $.pointerTarget<GetClusterInfoRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetClusterInfoRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow35 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow35.backing as any[])[$.windowSlot(__goscriptSliceWindow35, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: GetClusterInfoRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: GetClusterInfoRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as GetClusterInfoRequest).XXX_unrecognized = $.appendSlice((m$ as GetClusterInfoRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: GetClusterInfoRequest | $.VarRef<GetClusterInfoRequest> | null = this;
		await xxx_messageInfo_GetClusterInfoRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.GetClusterInfoRequest", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: GetClusterInfoRequest | $.VarRef<GetClusterInfoRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_GetClusterInfoRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.GetClusterInfoRequest", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetClusterInfoRequest).MarshalToSizedBuffer(b) : GetClusterInfoRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: GetClusterInfoRequest | $.VarRef<GetClusterInfoRequest> | null = this;
		await xxx_messageInfo_GetClusterInfoRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.GetClusterInfoRequest", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoRequest")), src)
	}

	public XXX_Size(): number {
		const m: GetClusterInfoRequest | $.VarRef<GetClusterInfoRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetClusterInfoRequest).Size() : GetClusterInfoRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: GetClusterInfoRequest | $.VarRef<GetClusterInfoRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetClusterInfoRequest).Unmarshal(b) : GetClusterInfoRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.GetClusterInfoRequest",
		() => new GetClusterInfoRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		GetClusterInfoRequest,
		() => [/* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [0], 0, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [2], 24, true, { tag: "json:\"-\"" })]
	)
}

export class GetClusterInfoResponse {
	public get SupportedClientVersions(): __goscript_common_pb.SupportedClientVersions | $.VarRef<__goscript_common_pb.SupportedClientVersions> | null {
		return this._fields.SupportedClientVersions
	}

	public set SupportedClientVersions(value: __goscript_common_pb.SupportedClientVersions | $.VarRef<__goscript_common_pb.SupportedClientVersions> | null) {
		this._fields.SupportedClientVersions = value
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
		SupportedClientVersions: __goscript_common_pb.SupportedClientVersions | $.VarRef<__goscript_common_pb.SupportedClientVersions> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{SupportedClientVersions?: __goscript_common_pb.SupportedClientVersions | $.VarRef<__goscript_common_pb.SupportedClientVersions> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			SupportedClientVersions: init?.SupportedClientVersions ?? (null! as __goscript_common_pb.SupportedClientVersions | $.VarRef<__goscript_common_pb.SupportedClientVersions> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GetClusterInfoResponse {
		return new GetClusterInfoResponse(this, true)
	}

	public __goscriptAssign(source: GetClusterInfoResponse): void {
		const target = this._fields
		const values = source._fields
		target.SupportedClientVersions = values.SupportedClientVersions
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([31])]
	}

	public GetSupportedClientVersions(): __goscript_common_pb.SupportedClientVersions | $.VarRef<__goscript_common_pb.SupportedClientVersions> | null {
		const m: GetClusterInfoResponse | $.VarRef<GetClusterInfoResponse> | null = this;
		if (m != null) {
			return $.pointerValue<GetClusterInfoResponse>(m).SupportedClientVersions
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: GetClusterInfoResponse | $.VarRef<GetClusterInfoResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetClusterInfoResponse).Size() : GetClusterInfoResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple31: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetClusterInfoResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : GetClusterInfoResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple31[0]
		err = __goscriptTuple31[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: GetClusterInfoResponse | $.VarRef<GetClusterInfoResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetClusterInfoResponse).Size() : GetClusterInfoResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetClusterInfoResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : GetClusterInfoResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: GetClusterInfoResponse | $.VarRef<GetClusterInfoResponse> | null = this;
		const m$: GetClusterInfoResponse = m == null ? $.pointerTarget<GetClusterInfoResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetClusterInfoResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as GetClusterInfoResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as GetClusterInfoResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as GetClusterInfoResponse).XXX_unrecognized)
		}
		if ((m$ as GetClusterInfoResponse).SupportedClientVersions != null) {
			{
				let [size, err] = __goscript_common_pb.SupportedClientVersions.prototype.MarshalToSizedBuffer.call((m$ as GetClusterInfoResponse).SupportedClientVersions, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: GetClusterInfoResponse | $.VarRef<GetClusterInfoResponse> | null = this;
		$.assignStruct($.pointerValue<GetClusterInfoResponse>(m), $.markAsStructValue(new GetClusterInfoResponse()))
	}

	public Size(): number {
		const m: GetClusterInfoResponse | $.VarRef<GetClusterInfoResponse> | null = this;
		let n: number = 0
		const m$: GetClusterInfoResponse = m == null ? $.pointerTarget<GetClusterInfoResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetClusterInfoResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as GetClusterInfoResponse).SupportedClientVersions != null) {
			l = __goscript_common_pb.SupportedClientVersions.prototype.Size.call((m$ as GetClusterInfoResponse).SupportedClientVersions)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as GetClusterInfoResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as GetClusterInfoResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: GetClusterInfoResponse | $.VarRef<GetClusterInfoResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.GetClusterInfoResponse", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: GetClusterInfoResponse | $.VarRef<GetClusterInfoResponse> | null = this;
		const m$: GetClusterInfoResponse = m == null ? $.pointerTarget<GetClusterInfoResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetClusterInfoResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow36 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow36.backing as any[])[$.windowSlot(__goscriptSliceWindow36, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: GetClusterInfoResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: GetClusterInfoResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field SupportedClientVersions", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow36.backing as any[])[$.windowSlot(__goscriptSliceWindow36, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as GetClusterInfoResponse).SupportedClientVersions == null) {
						;(m$ as GetClusterInfoResponse).SupportedClientVersions = new __goscript_common_pb.SupportedClientVersions()
					}
					{
						let err = __goscript_common_pb.SupportedClientVersions.prototype.Unmarshal.call((m$ as GetClusterInfoResponse).SupportedClientVersions, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as GetClusterInfoResponse).XXX_unrecognized = $.appendSlice((m$ as GetClusterInfoResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: GetClusterInfoResponse | $.VarRef<GetClusterInfoResponse> | null = this;
		await xxx_messageInfo_GetClusterInfoResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.GetClusterInfoResponse", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: GetClusterInfoResponse | $.VarRef<GetClusterInfoResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_GetClusterInfoResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.GetClusterInfoResponse", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetClusterInfoResponse).MarshalToSizedBuffer(b) : GetClusterInfoResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: GetClusterInfoResponse | $.VarRef<GetClusterInfoResponse> | null = this;
		await xxx_messageInfo_GetClusterInfoResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.GetClusterInfoResponse", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoResponse")), src)
	}

	public XXX_Size(): number {
		const m: GetClusterInfoResponse | $.VarRef<GetClusterInfoResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetClusterInfoResponse).Size() : GetClusterInfoResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: GetClusterInfoResponse | $.VarRef<GetClusterInfoResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetClusterInfoResponse).Unmarshal(b) : GetClusterInfoResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.GetClusterInfoResponse",
		() => new GetClusterInfoResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetSupportedClientVersions", [], [/* @__PURE__ */ $.pointerType("apiv1.SupportedClientVersions")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		GetClusterInfoResponse,
		() => [/* @__PURE__ */ $.structField("SupportedClientVersions", /* @__PURE__ */ $.pointerType("apiv1.SupportedClientVersions"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=supported_client_versions,json=supportedClientVersions,proto3\" json:\"supported_client_versions,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [1], 8, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 8, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [3], 32, true, { tag: "json:\"-\"" })]
	)
}

export class GetWorkflowExecutionHistoryRequest {
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

	public get WaitForNewEvent(): boolean {
		return this._fields.WaitForNewEvent
	}

	public set WaitForNewEvent(value: boolean) {
		this._fields.WaitForNewEvent = value
	}

	public get HistoryEventFilterType(): __goscript_history_pb.EventFilterType {
		return this._fields.HistoryEventFilterType
	}

	public set HistoryEventFilterType(value: __goscript_history_pb.EventFilterType) {
		this._fields.HistoryEventFilterType = value
	}

	public get SkipArchival(): boolean {
		return this._fields.SkipArchival
	}

	public set SkipArchival(value: boolean) {
		this._fields.SkipArchival = value
	}

	// QueryConsistencyLevel is used to override the default cluster configured read-pattern for this query.
	public get QueryConsistencyLevel(): __goscript_query_pb.QueryConsistencyLevel {
		return this._fields.QueryConsistencyLevel
	}

	public set QueryConsistencyLevel(value: __goscript_query_pb.QueryConsistencyLevel) {
		this._fields.QueryConsistencyLevel = value
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
		PageSize: number
		NextPageToken: $.Slice<number>
		WaitForNewEvent: boolean
		HistoryEventFilterType: __goscript_history_pb.EventFilterType
		SkipArchival: boolean
		QueryConsistencyLevel: __goscript_query_pb.QueryConsistencyLevel
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, PageSize?: number, NextPageToken?: $.Slice<number>, WaitForNewEvent?: boolean, HistoryEventFilterType?: __goscript_history_pb.EventFilterType, SkipArchival?: boolean, QueryConsistencyLevel?: __goscript_query_pb.QueryConsistencyLevel, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			PageSize: init?.PageSize ?? (0 as number),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			WaitForNewEvent: init?.WaitForNewEvent ?? (false as boolean),
			HistoryEventFilterType: init?.HistoryEventFilterType ?? (0 as __goscript_history_pb.EventFilterType),
			SkipArchival: init?.SkipArchival ?? (false as boolean),
			QueryConsistencyLevel: init?.QueryConsistencyLevel ?? (0 as __goscript_query_pb.QueryConsistencyLevel),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GetWorkflowExecutionHistoryRequest {
		return new GetWorkflowExecutionHistoryRequest(this, true)
	}

	public __goscriptAssign(source: GetWorkflowExecutionHistoryRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowExecution = values.WorkflowExecution
		target.PageSize = values.PageSize
		target.NextPageToken = values.NextPageToken
		target.WaitForNewEvent = values.WaitForNewEvent
		target.HistoryEventFilterType = values.HistoryEventFilterType
		target.SkipArchival = values.SkipArchival
		target.QueryConsistencyLevel = values.QueryConsistencyLevel
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([32])]
	}

	public GetDomain(): string {
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		if (m != null) {
			return $.pointerValue<GetWorkflowExecutionHistoryRequest>(m).Domain
		}
		return ""
	}

	public GetHistoryEventFilterType(): __goscript_history_pb.EventFilterType {
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		if (m != null) {
			return $.pointerValue<GetWorkflowExecutionHistoryRequest>(m).HistoryEventFilterType
		}
		return 0
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		if (m != null) {
			return $.pointerValue<GetWorkflowExecutionHistoryRequest>(m).NextPageToken
		}
		return null
	}

	public GetPageSize(): number {
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		if (m != null) {
			return $.pointerValue<GetWorkflowExecutionHistoryRequest>(m).PageSize
		}
		return 0
	}

	public GetQueryConsistencyLevel(): __goscript_query_pb.QueryConsistencyLevel {
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		if (m != null) {
			return $.pointerValue<GetWorkflowExecutionHistoryRequest>(m).QueryConsistencyLevel
		}
		return 0
	}

	public GetSkipArchival(): boolean {
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		if (m != null) {
			return $.pointerValue<GetWorkflowExecutionHistoryRequest>(m).SkipArchival
		}
		return false
	}

	public GetWaitForNewEvent(): boolean {
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		if (m != null) {
			return $.pointerValue<GetWorkflowExecutionHistoryRequest>(m).WaitForNewEvent
		}
		return false
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		if (m != null) {
			return $.pointerValue<GetWorkflowExecutionHistoryRequest>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetWorkflowExecutionHistoryRequest).Size() : GetWorkflowExecutionHistoryRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple32: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetWorkflowExecutionHistoryRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : GetWorkflowExecutionHistoryRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple32[0]
		err = __goscriptTuple32[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetWorkflowExecutionHistoryRequest).Size() : GetWorkflowExecutionHistoryRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetWorkflowExecutionHistoryRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : GetWorkflowExecutionHistoryRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		const m$: GetWorkflowExecutionHistoryRequest = m == null ? $.pointerTarget<GetWorkflowExecutionHistoryRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetWorkflowExecutionHistoryRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as GetWorkflowExecutionHistoryRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as GetWorkflowExecutionHistoryRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as GetWorkflowExecutionHistoryRequest).XXX_unrecognized)
		}
		if ((m$ as GetWorkflowExecutionHistoryRequest).QueryConsistencyLevel != 0) {
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64((m$ as GetWorkflowExecutionHistoryRequest).QueryConsistencyLevel))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x40
		}
		if ((m$ as GetWorkflowExecutionHistoryRequest).SkipArchival) {
			i--
			if ((m$ as GetWorkflowExecutionHistoryRequest).SkipArchival) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x38
		}
		if ((m$ as GetWorkflowExecutionHistoryRequest).HistoryEventFilterType != 0) {
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64((m$ as GetWorkflowExecutionHistoryRequest).HistoryEventFilterType))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x30
		}
		if ((m$ as GetWorkflowExecutionHistoryRequest).WaitForNewEvent) {
			i--
			if ((m$ as GetWorkflowExecutionHistoryRequest).WaitForNewEvent) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x28
		}
		if ($.sliceLen((m$ as GetWorkflowExecutionHistoryRequest).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as GetWorkflowExecutionHistoryRequest).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as GetWorkflowExecutionHistoryRequest).NextPageToken)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.sliceLen((m$ as GetWorkflowExecutionHistoryRequest).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as GetWorkflowExecutionHistoryRequest).PageSize != 0) {
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64((m$ as GetWorkflowExecutionHistoryRequest).PageSize))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x18
		}
		if ((m$ as GetWorkflowExecutionHistoryRequest).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as GetWorkflowExecutionHistoryRequest).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as GetWorkflowExecutionHistoryRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as GetWorkflowExecutionHistoryRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as GetWorkflowExecutionHistoryRequest).Domain)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as GetWorkflowExecutionHistoryRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		$.assignStruct($.pointerValue<GetWorkflowExecutionHistoryRequest>(m), $.markAsStructValue(new GetWorkflowExecutionHistoryRequest()))
	}

	public Size(): number {
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		let n: number = 0
		const m$: GetWorkflowExecutionHistoryRequest = m == null ? $.pointerTarget<GetWorkflowExecutionHistoryRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetWorkflowExecutionHistoryRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as GetWorkflowExecutionHistoryRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as GetWorkflowExecutionHistoryRequest).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as GetWorkflowExecutionHistoryRequest).WorkflowExecution)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as GetWorkflowExecutionHistoryRequest).PageSize != 0) {
			n = n + (1 + sovServiceWorkflow($.uint64((m$ as GetWorkflowExecutionHistoryRequest).PageSize)))
		}
		l = $.sliceLen((m$ as GetWorkflowExecutionHistoryRequest).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as GetWorkflowExecutionHistoryRequest).WaitForNewEvent) {
			n = n + (2)
		}
		if ((m$ as GetWorkflowExecutionHistoryRequest).HistoryEventFilterType != 0) {
			n = n + (1 + sovServiceWorkflow($.uint64((m$ as GetWorkflowExecutionHistoryRequest).HistoryEventFilterType)))
		}
		if ((m$ as GetWorkflowExecutionHistoryRequest).SkipArchival) {
			n = n + (2)
		}
		if ((m$ as GetWorkflowExecutionHistoryRequest).QueryConsistencyLevel != 0) {
			n = n + (1 + sovServiceWorkflow($.uint64((m$ as GetWorkflowExecutionHistoryRequest).QueryConsistencyLevel)))
		}
		if ((m$ as GetWorkflowExecutionHistoryRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as GetWorkflowExecutionHistoryRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.GetWorkflowExecutionHistoryRequest", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		const m$: GetWorkflowExecutionHistoryRequest = m == null ? $.pointerTarget<GetWorkflowExecutionHistoryRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetWorkflowExecutionHistoryRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow37 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow37.backing as any[])[$.windowSlot(__goscriptSliceWindow37, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: GetWorkflowExecutionHistoryRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: GetWorkflowExecutionHistoryRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow37.backing as any[])[$.windowSlot(__goscriptSliceWindow37, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as GetWorkflowExecutionHistoryRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow37.backing as any[])[$.windowSlot(__goscriptSliceWindow37, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as GetWorkflowExecutionHistoryRequest).WorkflowExecution == null) {
						;(m$ as GetWorkflowExecutionHistoryRequest).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as GetWorkflowExecutionHistoryRequest).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field PageSize", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as GetWorkflowExecutionHistoryRequest).PageSize = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow37.backing as any[])[$.windowSlot(__goscriptSliceWindow37, iNdEx)] as number)
						iNdEx++;
						;(m$ as GetWorkflowExecutionHistoryRequest).PageSize = (m$ as GetWorkflowExecutionHistoryRequest).PageSize | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field NextPageToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow37.backing as any[])[$.windowSlot(__goscriptSliceWindow37, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as GetWorkflowExecutionHistoryRequest).NextPageToken = $.appendSlice($.goSlice((m$ as GetWorkflowExecutionHistoryRequest).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as GetWorkflowExecutionHistoryRequest).NextPageToken == null) {
						;(m$ as GetWorkflowExecutionHistoryRequest).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field WaitForNewEvent", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow37.backing as any[])[$.windowSlot(__goscriptSliceWindow37, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as GetWorkflowExecutionHistoryRequest).WaitForNewEvent = (v != 0)
					break
				}
				case 6:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field HistoryEventFilterType", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as GetWorkflowExecutionHistoryRequest).HistoryEventFilterType = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow37.backing as any[])[$.windowSlot(__goscriptSliceWindow37, iNdEx)] as number)
						iNdEx++;
						;(m$ as GetWorkflowExecutionHistoryRequest).HistoryEventFilterType = (m$ as GetWorkflowExecutionHistoryRequest).HistoryEventFilterType | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 7:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field SkipArchival", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow37.backing as any[])[$.windowSlot(__goscriptSliceWindow37, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as GetWorkflowExecutionHistoryRequest).SkipArchival = (v != 0)
					break
				}
				case 8:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field QueryConsistencyLevel", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as GetWorkflowExecutionHistoryRequest).QueryConsistencyLevel = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow37.backing as any[])[$.windowSlot(__goscriptSliceWindow37, iNdEx)] as number)
						iNdEx++;
						;(m$ as GetWorkflowExecutionHistoryRequest).QueryConsistencyLevel = (m$ as GetWorkflowExecutionHistoryRequest).QueryConsistencyLevel | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as GetWorkflowExecutionHistoryRequest).XXX_unrecognized = $.appendSlice((m$ as GetWorkflowExecutionHistoryRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		await xxx_messageInfo_GetWorkflowExecutionHistoryRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.GetWorkflowExecutionHistoryRequest", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_GetWorkflowExecutionHistoryRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.GetWorkflowExecutionHistoryRequest", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetWorkflowExecutionHistoryRequest).MarshalToSizedBuffer(b) : GetWorkflowExecutionHistoryRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		await xxx_messageInfo_GetWorkflowExecutionHistoryRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.GetWorkflowExecutionHistoryRequest", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryRequest")), src)
	}

	public XXX_Size(): number {
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetWorkflowExecutionHistoryRequest).Size() : GetWorkflowExecutionHistoryRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: GetWorkflowExecutionHistoryRequest | $.VarRef<GetWorkflowExecutionHistoryRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetWorkflowExecutionHistoryRequest).Unmarshal(b) : GetWorkflowExecutionHistoryRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.GetWorkflowExecutionHistoryRequest",
		() => new GetWorkflowExecutionHistoryRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetHistoryEventFilterType", [], [/* @__PURE__ */ $.basicType("int32", "apiv1.EventFilterType")], true), $.methodSignature("GetNextPageToken", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("GetPageSize", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetQueryConsistencyLevel", [], [/* @__PURE__ */ $.basicType("int32", "apiv1.QueryConsistencyLevel")], true), $.methodSignature("GetSkipArchival", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetWaitForNewEvent", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetWorkflowExecution", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		GetWorkflowExecutionHistoryRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }), /* @__PURE__ */ $.structField("PageSize", /* @__PURE__ */ $.basicType("int32"), [2], 24, true, { tag: "protobuf:\"varint,3,opt,name=page_size,json=pageSize,proto3\" json:\"page_size,omitempty\"" }), /* @__PURE__ */ $.structField("NextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 32, true, { tag: "protobuf:\"bytes,4,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }), /* @__PURE__ */ $.structField("WaitForNewEvent", /* @__PURE__ */ $.basicType("bool"), [4], 56, true, { tag: "protobuf:\"varint,5,opt,name=wait_for_new_event,json=waitForNewEvent,proto3\" json:\"wait_for_new_event,omitempty\"" }), /* @__PURE__ */ $.structField("HistoryEventFilterType", /* @__PURE__ */ $.basicType("int32", "apiv1.EventFilterType"), [5], 60, true, { tag: "protobuf:\"varint,6,opt,name=history_event_filter_type,json=historyEventFilterType,proto3,enum=uber.cadence.api.v1.EventFilterType\" json:\"history_event_filter_type,omitempty\"" }), /* @__PURE__ */ $.structField("SkipArchival", /* @__PURE__ */ $.basicType("bool"), [6], 64, true, { tag: "protobuf:\"varint,7,opt,name=skip_archival,json=skipArchival,proto3\" json:\"skip_archival,omitempty\"" }), /* @__PURE__ */ $.structField("QueryConsistencyLevel", /* @__PURE__ */ $.basicType("int32", "apiv1.QueryConsistencyLevel"), [7], 68, true, { tag: "protobuf:\"varint,8,opt,name=query_consistency_level,json=queryConsistencyLevel,proto3,enum=uber.cadence.api.v1.QueryConsistencyLevel\" json:\"query_consistency_level,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [8], 72, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [9], 72, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [10], 96, true, { tag: "json:\"-\"" })]
	)
}

export class GetWorkflowExecutionHistoryResponse {
	public get History(): __goscript_history_pb.History | $.VarRef<__goscript_history_pb.History> | null {
		return this._fields.History
	}

	public set History(value: __goscript_history_pb.History | $.VarRef<__goscript_history_pb.History> | null) {
		this._fields.History = value
	}

	public get RawHistory(): $.Slice<__goscript_common_pb.DataBlob | $.VarRef<__goscript_common_pb.DataBlob> | null> {
		return this._fields.RawHistory
	}

	public set RawHistory(value: $.Slice<__goscript_common_pb.DataBlob | $.VarRef<__goscript_common_pb.DataBlob> | null>) {
		this._fields.RawHistory = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
	}

	public get Archived(): boolean {
		return this._fields.Archived
	}

	public set Archived(value: boolean) {
		this._fields.Archived = value
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
		History: __goscript_history_pb.History | $.VarRef<__goscript_history_pb.History> | null
		RawHistory: $.Slice<__goscript_common_pb.DataBlob | $.VarRef<__goscript_common_pb.DataBlob> | null>
		NextPageToken: $.Slice<number>
		Archived: boolean
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{History?: __goscript_history_pb.History | $.VarRef<__goscript_history_pb.History> | null, RawHistory?: $.Slice<__goscript_common_pb.DataBlob | $.VarRef<__goscript_common_pb.DataBlob> | null>, NextPageToken?: $.Slice<number>, Archived?: boolean, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			History: init?.History ?? (null! as __goscript_history_pb.History | $.VarRef<__goscript_history_pb.History> | null),
			RawHistory: init?.RawHistory ?? (null! as $.Slice<__goscript_common_pb.DataBlob | $.VarRef<__goscript_common_pb.DataBlob> | null>),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			Archived: init?.Archived ?? (false as boolean),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GetWorkflowExecutionHistoryResponse {
		return new GetWorkflowExecutionHistoryResponse(this, true)
	}

	public __goscriptAssign(source: GetWorkflowExecutionHistoryResponse): void {
		const target = this._fields
		const values = source._fields
		target.History = values.History
		target.RawHistory = values.RawHistory
		target.NextPageToken = values.NextPageToken
		target.Archived = values.Archived
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([33])]
	}

	public GetArchived(): boolean {
		const m: GetWorkflowExecutionHistoryResponse | $.VarRef<GetWorkflowExecutionHistoryResponse> | null = this;
		if (m != null) {
			return $.pointerValue<GetWorkflowExecutionHistoryResponse>(m).Archived
		}
		return false
	}

	public GetHistory(): __goscript_history_pb.History | $.VarRef<__goscript_history_pb.History> | null {
		const m: GetWorkflowExecutionHistoryResponse | $.VarRef<GetWorkflowExecutionHistoryResponse> | null = this;
		if (m != null) {
			return $.pointerValue<GetWorkflowExecutionHistoryResponse>(m).History
		}
		return null
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: GetWorkflowExecutionHistoryResponse | $.VarRef<GetWorkflowExecutionHistoryResponse> | null = this;
		if (m != null) {
			return $.pointerValue<GetWorkflowExecutionHistoryResponse>(m).NextPageToken
		}
		return null
	}

	public GetRawHistory(): $.Slice<__goscript_common_pb.DataBlob | $.VarRef<__goscript_common_pb.DataBlob> | null> {
		const m: GetWorkflowExecutionHistoryResponse | $.VarRef<GetWorkflowExecutionHistoryResponse> | null = this;
		if (m != null) {
			return $.pointerValue<GetWorkflowExecutionHistoryResponse>(m).RawHistory
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: GetWorkflowExecutionHistoryResponse | $.VarRef<GetWorkflowExecutionHistoryResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetWorkflowExecutionHistoryResponse).Size() : GetWorkflowExecutionHistoryResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple33: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetWorkflowExecutionHistoryResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : GetWorkflowExecutionHistoryResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple33[0]
		err = __goscriptTuple33[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: GetWorkflowExecutionHistoryResponse | $.VarRef<GetWorkflowExecutionHistoryResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetWorkflowExecutionHistoryResponse).Size() : GetWorkflowExecutionHistoryResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetWorkflowExecutionHistoryResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : GetWorkflowExecutionHistoryResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: GetWorkflowExecutionHistoryResponse | $.VarRef<GetWorkflowExecutionHistoryResponse> | null = this;
		const m$: GetWorkflowExecutionHistoryResponse = m == null ? $.pointerTarget<GetWorkflowExecutionHistoryResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetWorkflowExecutionHistoryResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as GetWorkflowExecutionHistoryResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as GetWorkflowExecutionHistoryResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as GetWorkflowExecutionHistoryResponse).XXX_unrecognized)
		}
		if ((m$ as GetWorkflowExecutionHistoryResponse).Archived) {
			i--
			if ((m$ as GetWorkflowExecutionHistoryResponse).Archived) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x20
		}
		if ($.sliceLen((m$ as GetWorkflowExecutionHistoryResponse).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as GetWorkflowExecutionHistoryResponse).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as GetWorkflowExecutionHistoryResponse).NextPageToken)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.sliceLen((m$ as GetWorkflowExecutionHistoryResponse).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.sliceLen((m$ as GetWorkflowExecutionHistoryResponse).RawHistory) > 0) {
			for (let __goscriptSliceWindow38 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as GetWorkflowExecutionHistoryResponse).RawHistory) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_common_pb.DataBlob.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as GetWorkflowExecutionHistoryResponse).RawHistory!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow38.backing as any[])[$.windowSlot(__goscriptSliceWindow38, i)] = 0x12
			}
		}
		if ((m$ as GetWorkflowExecutionHistoryResponse).History != null) {
			{
				let [size, err] = __goscript_history_pb.History.prototype.MarshalToSizedBuffer.call((m$ as GetWorkflowExecutionHistoryResponse).History, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: GetWorkflowExecutionHistoryResponse | $.VarRef<GetWorkflowExecutionHistoryResponse> | null = this;
		$.assignStruct($.pointerValue<GetWorkflowExecutionHistoryResponse>(m), $.markAsStructValue(new GetWorkflowExecutionHistoryResponse()))
	}

	public Size(): number {
		const m: GetWorkflowExecutionHistoryResponse | $.VarRef<GetWorkflowExecutionHistoryResponse> | null = this;
		let n: number = 0
		const m$: GetWorkflowExecutionHistoryResponse = m == null ? $.pointerTarget<GetWorkflowExecutionHistoryResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetWorkflowExecutionHistoryResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as GetWorkflowExecutionHistoryResponse).History != null) {
			l = __goscript_history_pb.History.prototype.Size.call((m$ as GetWorkflowExecutionHistoryResponse).History)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ($.sliceLen((m$ as GetWorkflowExecutionHistoryResponse).RawHistory) > 0) {
			for (let __goscriptRangeTarget5 = (m$ as GetWorkflowExecutionHistoryResponse).RawHistory, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow5.backing[__goscriptRangeWindow5.offset + __rangeIndex] as __goscript_common_pb.DataBlob | $.VarRef<__goscript_common_pb.DataBlob> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_common_pb.DataBlob).Size() : __goscript_common_pb.DataBlob.prototype.Size.call(e))
				n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
			}
		}
		l = $.sliceLen((m$ as GetWorkflowExecutionHistoryResponse).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as GetWorkflowExecutionHistoryResponse).Archived) {
			n = n + (2)
		}
		if ((m$ as GetWorkflowExecutionHistoryResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as GetWorkflowExecutionHistoryResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: GetWorkflowExecutionHistoryResponse | $.VarRef<GetWorkflowExecutionHistoryResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.GetWorkflowExecutionHistoryResponse", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: GetWorkflowExecutionHistoryResponse | $.VarRef<GetWorkflowExecutionHistoryResponse> | null = this;
		const m$: GetWorkflowExecutionHistoryResponse = m == null ? $.pointerTarget<GetWorkflowExecutionHistoryResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<GetWorkflowExecutionHistoryResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow39 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow39.backing as any[])[$.windowSlot(__goscriptSliceWindow39, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: GetWorkflowExecutionHistoryResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: GetWorkflowExecutionHistoryResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field History", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow39.backing as any[])[$.windowSlot(__goscriptSliceWindow39, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as GetWorkflowExecutionHistoryResponse).History == null) {
						;(m$ as GetWorkflowExecutionHistoryResponse).History = new __goscript_history_pb.History()
					}
					{
						let err = __goscript_history_pb.History.prototype.Unmarshal.call((m$ as GetWorkflowExecutionHistoryResponse).History, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field RawHistory", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow39.backing as any[])[$.windowSlot(__goscriptSliceWindow39, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as GetWorkflowExecutionHistoryResponse).RawHistory = $.appendOne((m$ as GetWorkflowExecutionHistoryResponse).RawHistory, new __goscript_common_pb.DataBlob(), $.appendZeros.nil)
					{
						let err = __goscript_common_pb.DataBlob.prototype.Unmarshal.call($.arrayIndex((m$ as GetWorkflowExecutionHistoryResponse).RawHistory!, $.sliceLen((m$ as GetWorkflowExecutionHistoryResponse).RawHistory) - 1), $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field NextPageToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow39.backing as any[])[$.windowSlot(__goscriptSliceWindow39, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as GetWorkflowExecutionHistoryResponse).NextPageToken = $.appendSlice($.goSlice((m$ as GetWorkflowExecutionHistoryResponse).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as GetWorkflowExecutionHistoryResponse).NextPageToken == null) {
						;(m$ as GetWorkflowExecutionHistoryResponse).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Archived", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow39.backing as any[])[$.windowSlot(__goscriptSliceWindow39, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as GetWorkflowExecutionHistoryResponse).Archived = (v != 0)
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as GetWorkflowExecutionHistoryResponse).XXX_unrecognized = $.appendSlice((m$ as GetWorkflowExecutionHistoryResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: GetWorkflowExecutionHistoryResponse | $.VarRef<GetWorkflowExecutionHistoryResponse> | null = this;
		await xxx_messageInfo_GetWorkflowExecutionHistoryResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.GetWorkflowExecutionHistoryResponse", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: GetWorkflowExecutionHistoryResponse | $.VarRef<GetWorkflowExecutionHistoryResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_GetWorkflowExecutionHistoryResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.GetWorkflowExecutionHistoryResponse", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetWorkflowExecutionHistoryResponse).MarshalToSizedBuffer(b) : GetWorkflowExecutionHistoryResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: GetWorkflowExecutionHistoryResponse | $.VarRef<GetWorkflowExecutionHistoryResponse> | null = this;
		await xxx_messageInfo_GetWorkflowExecutionHistoryResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.GetWorkflowExecutionHistoryResponse", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryResponse")), src)
	}

	public XXX_Size(): number {
		const m: GetWorkflowExecutionHistoryResponse | $.VarRef<GetWorkflowExecutionHistoryResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetWorkflowExecutionHistoryResponse).Size() : GetWorkflowExecutionHistoryResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: GetWorkflowExecutionHistoryResponse | $.VarRef<GetWorkflowExecutionHistoryResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as GetWorkflowExecutionHistoryResponse).Unmarshal(b) : GetWorkflowExecutionHistoryResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.GetWorkflowExecutionHistoryResponse",
		() => new GetWorkflowExecutionHistoryResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetArchived", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetHistory", [], [/* @__PURE__ */ $.pointerType("apiv1.History")], true), $.methodSignature("GetNextPageToken", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("GetRawHistory", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.DataBlob"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		GetWorkflowExecutionHistoryResponse,
		() => [/* @__PURE__ */ $.structField("History", /* @__PURE__ */ $.pointerType("apiv1.History"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=history,proto3\" json:\"history,omitempty\"" }), /* @__PURE__ */ $.structField("RawHistory", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.DataBlob")), [1], 8, true, { tag: "protobuf:\"bytes,2,rep,name=raw_history,json=rawHistory,proto3\" json:\"raw_history,omitempty\"" }), /* @__PURE__ */ $.structField("NextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 32, true, { tag: "protobuf:\"bytes,3,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }), /* @__PURE__ */ $.structField("Archived", /* @__PURE__ */ $.basicType("bool"), [3], 56, true, { tag: "protobuf:\"varint,4,opt,name=archived,proto3\" json:\"archived,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [4], 57, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 64, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [6], 88, true, { tag: "json:\"-\"" })]
	)
}

export class FeatureFlags {
	public get WorkflowExecutionAlreadyCompletedErrorEnabled(): boolean {
		return this._fields.WorkflowExecutionAlreadyCompletedErrorEnabled
	}

	public set WorkflowExecutionAlreadyCompletedErrorEnabled(value: boolean) {
		this._fields.WorkflowExecutionAlreadyCompletedErrorEnabled = value
	}

	public get AutoforwardingEnabled(): boolean {
		return this._fields.AutoforwardingEnabled
	}

	public set AutoforwardingEnabled(value: boolean) {
		this._fields.AutoforwardingEnabled = value
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
		WorkflowExecutionAlreadyCompletedErrorEnabled: boolean
		AutoforwardingEnabled: boolean
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{WorkflowExecutionAlreadyCompletedErrorEnabled?: boolean, AutoforwardingEnabled?: boolean, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			WorkflowExecutionAlreadyCompletedErrorEnabled: init?.WorkflowExecutionAlreadyCompletedErrorEnabled ?? (false as boolean),
			AutoforwardingEnabled: init?.AutoforwardingEnabled ?? (false as boolean),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FeatureFlags {
		return new FeatureFlags(this, true)
	}

	public __goscriptAssign(source: FeatureFlags): void {
		const target = this._fields
		const values = source._fields
		target.WorkflowExecutionAlreadyCompletedErrorEnabled = values.WorkflowExecutionAlreadyCompletedErrorEnabled
		target.AutoforwardingEnabled = values.AutoforwardingEnabled
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([34])]
	}

	public GetAutoforwardingEnabled(): boolean {
		const m: FeatureFlags | $.VarRef<FeatureFlags> | null = this;
		if (m != null) {
			return $.pointerValue<FeatureFlags>(m).AutoforwardingEnabled
		}
		return false
	}

	public GetWorkflowExecutionAlreadyCompletedErrorEnabled(): boolean {
		const m: FeatureFlags | $.VarRef<FeatureFlags> | null = this;
		if (m != null) {
			return $.pointerValue<FeatureFlags>(m).WorkflowExecutionAlreadyCompletedErrorEnabled
		}
		return false
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: FeatureFlags | $.VarRef<FeatureFlags> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FeatureFlags).Size() : FeatureFlags.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple34: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FeatureFlags).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FeatureFlags.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple34[0]
		err = __goscriptTuple34[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FeatureFlags | $.VarRef<FeatureFlags> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FeatureFlags).Size() : FeatureFlags.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FeatureFlags).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FeatureFlags.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FeatureFlags | $.VarRef<FeatureFlags> | null = this;
		const m$: FeatureFlags = m == null ? $.pointerTarget<FeatureFlags>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FeatureFlags>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as FeatureFlags).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as FeatureFlags).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as FeatureFlags).XXX_unrecognized)
		}
		if ((m$ as FeatureFlags).AutoforwardingEnabled) {
			i--
			if ((m$ as FeatureFlags).AutoforwardingEnabled) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ((m$ as FeatureFlags).WorkflowExecutionAlreadyCompletedErrorEnabled) {
			i--
			if ((m$ as FeatureFlags).WorkflowExecutionAlreadyCompletedErrorEnabled) {
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
		let m: FeatureFlags | $.VarRef<FeatureFlags> | null = this;
		$.assignStruct($.pointerValue<FeatureFlags>(m), $.markAsStructValue(new FeatureFlags()))
	}

	public Size(): number {
		const m: FeatureFlags | $.VarRef<FeatureFlags> | null = this;
		let n: number = 0
		const m$: FeatureFlags = m == null ? $.pointerTarget<FeatureFlags>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FeatureFlags>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as FeatureFlags).WorkflowExecutionAlreadyCompletedErrorEnabled) {
			n = n + (2)
		}
		if ((m$ as FeatureFlags).AutoforwardingEnabled) {
			n = n + (2)
		}
		if ((m$ as FeatureFlags).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as FeatureFlags).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: FeatureFlags | $.VarRef<FeatureFlags> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.FeatureFlags", /* @__PURE__ */ $.pointerType("apiv1.FeatureFlags")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: FeatureFlags | $.VarRef<FeatureFlags> | null = this;
		const m$: FeatureFlags = m == null ? $.pointerTarget<FeatureFlags>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FeatureFlags>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow40 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow40.backing as any[])[$.windowSlot(__goscriptSliceWindow40, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: FeatureFlags: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: FeatureFlags: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowExecutionAlreadyCompletedErrorEnabled", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow40.backing as any[])[$.windowSlot(__goscriptSliceWindow40, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as FeatureFlags).WorkflowExecutionAlreadyCompletedErrorEnabled = (v != 0)
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field AutoforwardingEnabled", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow40.backing as any[])[$.windowSlot(__goscriptSliceWindow40, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as FeatureFlags).AutoforwardingEnabled = (v != 0)
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as FeatureFlags).XXX_unrecognized = $.appendSlice((m$ as FeatureFlags).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: FeatureFlags | $.VarRef<FeatureFlags> | null = this;
		await xxx_messageInfo_FeatureFlags.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.FeatureFlags", /* @__PURE__ */ $.pointerType("apiv1.FeatureFlags")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: FeatureFlags | $.VarRef<FeatureFlags> | null = this;
		if (deterministic) {
			return xxx_messageInfo_FeatureFlags.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.FeatureFlags", /* @__PURE__ */ $.pointerType("apiv1.FeatureFlags")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FeatureFlags).MarshalToSizedBuffer(b) : FeatureFlags.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: FeatureFlags | $.VarRef<FeatureFlags> | null = this;
		await xxx_messageInfo_FeatureFlags.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.FeatureFlags", /* @__PURE__ */ $.pointerType("apiv1.FeatureFlags")), src)
	}

	public XXX_Size(): number {
		const m: FeatureFlags | $.VarRef<FeatureFlags> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FeatureFlags).Size() : FeatureFlags.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: FeatureFlags | $.VarRef<FeatureFlags> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FeatureFlags).Unmarshal(b) : FeatureFlags.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FeatureFlags",
		() => new FeatureFlags(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetAutoforwardingEnabled", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetWorkflowExecutionAlreadyCompletedErrorEnabled", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		FeatureFlags,
		() => [/* @__PURE__ */ $.structField("WorkflowExecutionAlreadyCompletedErrorEnabled", /* @__PURE__ */ $.basicType("bool"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=workflow_execution_already_completed_error_enabled,json=WorkflowExecutionAlreadyCompletedErrorEnabled,proto3\" json:\"workflow_execution_already_completed_error_enabled,omitempty\"" }), /* @__PURE__ */ $.structField("AutoforwardingEnabled", /* @__PURE__ */ $.basicType("bool"), [1], 1, true, { tag: "protobuf:\"varint,2,opt,name=autoforwarding_enabled,json=autoforwardingEnabled,proto3\" json:\"autoforwarding_enabled,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 2, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 8, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 32, true, { tag: "json:\"-\"" })]
	)
}

export class RefreshWorkflowTasksRequest {
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

	public clone(): RefreshWorkflowTasksRequest {
		return new RefreshWorkflowTasksRequest(this, true)
	}

	public __goscriptAssign(source: RefreshWorkflowTasksRequest): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowExecution = values.WorkflowExecution
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([35])]
	}

	public GetDomain(): string {
		const m: RefreshWorkflowTasksRequest | $.VarRef<RefreshWorkflowTasksRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RefreshWorkflowTasksRequest>(m).Domain
		}
		return ""
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: RefreshWorkflowTasksRequest | $.VarRef<RefreshWorkflowTasksRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RefreshWorkflowTasksRequest>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RefreshWorkflowTasksRequest | $.VarRef<RefreshWorkflowTasksRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RefreshWorkflowTasksRequest).Size() : RefreshWorkflowTasksRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple35: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RefreshWorkflowTasksRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RefreshWorkflowTasksRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple35[0]
		err = __goscriptTuple35[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RefreshWorkflowTasksRequest | $.VarRef<RefreshWorkflowTasksRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RefreshWorkflowTasksRequest).Size() : RefreshWorkflowTasksRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RefreshWorkflowTasksRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RefreshWorkflowTasksRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RefreshWorkflowTasksRequest | $.VarRef<RefreshWorkflowTasksRequest> | null = this;
		const m$: RefreshWorkflowTasksRequest = m == null ? $.pointerTarget<RefreshWorkflowTasksRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RefreshWorkflowTasksRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RefreshWorkflowTasksRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RefreshWorkflowTasksRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RefreshWorkflowTasksRequest).XXX_unrecognized)
		}
		if ((m$ as RefreshWorkflowTasksRequest).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as RefreshWorkflowTasksRequest).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as RefreshWorkflowTasksRequest).Domain) > 0) {
			i = i - ($.stringLen((m$ as RefreshWorkflowTasksRequest).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RefreshWorkflowTasksRequest).Domain)
			i = encodeVarintServiceWorkflow(dAtA, i, $.uint64($.stringLen((m$ as RefreshWorkflowTasksRequest).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RefreshWorkflowTasksRequest | $.VarRef<RefreshWorkflowTasksRequest> | null = this;
		$.assignStruct($.pointerValue<RefreshWorkflowTasksRequest>(m), $.markAsStructValue(new RefreshWorkflowTasksRequest()))
	}

	public Size(): number {
		const m: RefreshWorkflowTasksRequest | $.VarRef<RefreshWorkflowTasksRequest> | null = this;
		let n: number = 0
		const m$: RefreshWorkflowTasksRequest = m == null ? $.pointerTarget<RefreshWorkflowTasksRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RefreshWorkflowTasksRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as RefreshWorkflowTasksRequest).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as RefreshWorkflowTasksRequest).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as RefreshWorkflowTasksRequest).WorkflowExecution)
			n = n + ((1 + l) + sovServiceWorkflow($.uint64(l)))
		}
		if ((m$ as RefreshWorkflowTasksRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RefreshWorkflowTasksRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RefreshWorkflowTasksRequest | $.VarRef<RefreshWorkflowTasksRequest> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RefreshWorkflowTasksRequest", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RefreshWorkflowTasksRequest | $.VarRef<RefreshWorkflowTasksRequest> | null = this;
		const m$: RefreshWorkflowTasksRequest = m == null ? $.pointerTarget<RefreshWorkflowTasksRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RefreshWorkflowTasksRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow41 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow41.backing as any[])[$.windowSlot(__goscriptSliceWindow41, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: RefreshWorkflowTasksRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RefreshWorkflowTasksRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow41.backing as any[])[$.windowSlot(__goscriptSliceWindow41, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RefreshWorkflowTasksRequest).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowServiceWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow41.backing as any[])[$.windowSlot(__goscriptSliceWindow41, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RefreshWorkflowTasksRequest).WorkflowExecution == null) {
						;(m$ as RefreshWorkflowTasksRequest).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as RefreshWorkflowTasksRequest).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RefreshWorkflowTasksRequest).XXX_unrecognized = $.appendSlice((m$ as RefreshWorkflowTasksRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RefreshWorkflowTasksRequest | $.VarRef<RefreshWorkflowTasksRequest> | null = this;
		await xxx_messageInfo_RefreshWorkflowTasksRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RefreshWorkflowTasksRequest", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksRequest")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: RefreshWorkflowTasksRequest | $.VarRef<RefreshWorkflowTasksRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RefreshWorkflowTasksRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RefreshWorkflowTasksRequest", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RefreshWorkflowTasksRequest).MarshalToSizedBuffer(b) : RefreshWorkflowTasksRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: RefreshWorkflowTasksRequest | $.VarRef<RefreshWorkflowTasksRequest> | null = this;
		await xxx_messageInfo_RefreshWorkflowTasksRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RefreshWorkflowTasksRequest", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksRequest")), src)
	}

	public XXX_Size(): number {
		const m: RefreshWorkflowTasksRequest | $.VarRef<RefreshWorkflowTasksRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RefreshWorkflowTasksRequest).Size() : RefreshWorkflowTasksRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RefreshWorkflowTasksRequest | $.VarRef<RefreshWorkflowTasksRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RefreshWorkflowTasksRequest).Unmarshal(b) : RefreshWorkflowTasksRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RefreshWorkflowTasksRequest",
		() => new RefreshWorkflowTasksRequest(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetWorkflowExecution", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		RefreshWorkflowTasksRequest,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 24, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 24, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 48, true, { tag: "json:\"-\"" })]
	)
}

export class RefreshWorkflowTasksResponse {
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

	public clone(): RefreshWorkflowTasksResponse {
		return new RefreshWorkflowTasksResponse(this, true)
	}

	public __goscriptAssign(source: RefreshWorkflowTasksResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_674d14d2fee4e473, $.arrayToSlice<number>([36])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RefreshWorkflowTasksResponse | $.VarRef<RefreshWorkflowTasksResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RefreshWorkflowTasksResponse).Size() : RefreshWorkflowTasksResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple36: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RefreshWorkflowTasksResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RefreshWorkflowTasksResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple36[0]
		err = __goscriptTuple36[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RefreshWorkflowTasksResponse | $.VarRef<RefreshWorkflowTasksResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RefreshWorkflowTasksResponse).Size() : RefreshWorkflowTasksResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RefreshWorkflowTasksResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RefreshWorkflowTasksResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RefreshWorkflowTasksResponse | $.VarRef<RefreshWorkflowTasksResponse> | null = this;
		const m$: RefreshWorkflowTasksResponse = m == null ? $.pointerTarget<RefreshWorkflowTasksResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RefreshWorkflowTasksResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RefreshWorkflowTasksResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RefreshWorkflowTasksResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RefreshWorkflowTasksResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RefreshWorkflowTasksResponse | $.VarRef<RefreshWorkflowTasksResponse> | null = this;
		$.assignStruct($.pointerValue<RefreshWorkflowTasksResponse>(m), new RefreshWorkflowTasksResponse(undefined, true))
	}

	public Size(): number {
		const m: RefreshWorkflowTasksResponse | $.VarRef<RefreshWorkflowTasksResponse> | null = this;
		let n: number = 0
		const m$: RefreshWorkflowTasksResponse = m == null ? $.pointerTarget<RefreshWorkflowTasksResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RefreshWorkflowTasksResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as RefreshWorkflowTasksResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RefreshWorkflowTasksResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RefreshWorkflowTasksResponse | $.VarRef<RefreshWorkflowTasksResponse> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RefreshWorkflowTasksResponse", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RefreshWorkflowTasksResponse | $.VarRef<RefreshWorkflowTasksResponse> | null = this;
		const m$: RefreshWorkflowTasksResponse = m == null ? $.pointerTarget<RefreshWorkflowTasksResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RefreshWorkflowTasksResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow42 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow42.backing as any[])[$.windowSlot(__goscriptSliceWindow42, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: RefreshWorkflowTasksResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RefreshWorkflowTasksResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RefreshWorkflowTasksResponse).XXX_unrecognized = $.appendSlice((m$ as RefreshWorkflowTasksResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RefreshWorkflowTasksResponse | $.VarRef<RefreshWorkflowTasksResponse> | null = this;
		await xxx_messageInfo_RefreshWorkflowTasksResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RefreshWorkflowTasksResponse", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksResponse")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: RefreshWorkflowTasksResponse | $.VarRef<RefreshWorkflowTasksResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RefreshWorkflowTasksResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RefreshWorkflowTasksResponse", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RefreshWorkflowTasksResponse).MarshalToSizedBuffer(b) : RefreshWorkflowTasksResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: RefreshWorkflowTasksResponse | $.VarRef<RefreshWorkflowTasksResponse> | null = this;
		await xxx_messageInfo_RefreshWorkflowTasksResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RefreshWorkflowTasksResponse", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksResponse")), src)
	}

	public XXX_Size(): number {
		const m: RefreshWorkflowTasksResponse | $.VarRef<RefreshWorkflowTasksResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RefreshWorkflowTasksResponse).Size() : RefreshWorkflowTasksResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RefreshWorkflowTasksResponse | $.VarRef<RefreshWorkflowTasksResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RefreshWorkflowTasksResponse).Unmarshal(b) : RefreshWorkflowTasksResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RefreshWorkflowTasksResponse",
		() => new RefreshWorkflowTasksResponse(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		RefreshWorkflowTasksResponse,
		() => [/* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [0], 0, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 0, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [2], 24, true, { tag: "json:\"-\"" })]
	)
}

export let xxx_messageInfo_RestartWorkflowExecutionRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RestartWorkflowExecutionRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RestartWorkflowExecutionRequest.value, __goscriptValue)
}

export let xxx_messageInfo_DiagnoseWorkflowExecutionRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DiagnoseWorkflowExecutionRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DiagnoseWorkflowExecutionRequest.value, __goscriptValue)
}

export let xxx_messageInfo_DiagnoseWorkflowExecutionResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DiagnoseWorkflowExecutionResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DiagnoseWorkflowExecutionResponse.value, __goscriptValue)
}

export let xxx_messageInfo_StartWorkflowExecutionRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_StartWorkflowExecutionRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_StartWorkflowExecutionRequest.value, __goscriptValue)
}

export let xxx_messageInfo_StartWorkflowExecutionResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_StartWorkflowExecutionResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_StartWorkflowExecutionResponse.value, __goscriptValue)
}

export let xxx_messageInfo_StartWorkflowExecutionAsyncRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_StartWorkflowExecutionAsyncRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_StartWorkflowExecutionAsyncRequest.value, __goscriptValue)
}

export let xxx_messageInfo_StartWorkflowExecutionAsyncResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_StartWorkflowExecutionAsyncResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_StartWorkflowExecutionAsyncResponse.value, __goscriptValue)
}

export let xxx_messageInfo_RestartWorkflowExecutionResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RestartWorkflowExecutionResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RestartWorkflowExecutionResponse.value, __goscriptValue)
}

export let xxx_messageInfo_SignalWorkflowExecutionRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_SignalWorkflowExecutionRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_SignalWorkflowExecutionRequest.value, __goscriptValue)
}

export let xxx_messageInfo_SignalWorkflowExecutionResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_SignalWorkflowExecutionResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_SignalWorkflowExecutionResponse.value, __goscriptValue)
}

export let xxx_messageInfo_SignalWithStartWorkflowExecutionRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_SignalWithStartWorkflowExecutionRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_SignalWithStartWorkflowExecutionRequest.value, __goscriptValue)
}

export let xxx_messageInfo_SignalWithStartWorkflowExecutionResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_SignalWithStartWorkflowExecutionResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_SignalWithStartWorkflowExecutionResponse.value, __goscriptValue)
}

export let xxx_messageInfo_SignalWithStartWorkflowExecutionAsyncRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_SignalWithStartWorkflowExecutionAsyncRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_SignalWithStartWorkflowExecutionAsyncRequest.value, __goscriptValue)
}

export let xxx_messageInfo_SignalWithStartWorkflowExecutionAsyncResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_SignalWithStartWorkflowExecutionAsyncResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_SignalWithStartWorkflowExecutionAsyncResponse.value, __goscriptValue)
}

export let xxx_messageInfo_ResetWorkflowExecutionRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ResetWorkflowExecutionRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ResetWorkflowExecutionRequest.value, __goscriptValue)
}

export let xxx_messageInfo_ResetWorkflowExecutionResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ResetWorkflowExecutionResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ResetWorkflowExecutionResponse.value, __goscriptValue)
}

export let xxx_messageInfo_RequestCancelWorkflowExecutionRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RequestCancelWorkflowExecutionRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RequestCancelWorkflowExecutionRequest.value, __goscriptValue)
}

export let xxx_messageInfo_RequestCancelWorkflowExecutionResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RequestCancelWorkflowExecutionResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RequestCancelWorkflowExecutionResponse.value, __goscriptValue)
}

export let xxx_messageInfo_TerminateWorkflowExecutionRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_TerminateWorkflowExecutionRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_TerminateWorkflowExecutionRequest.value, __goscriptValue)
}

export let xxx_messageInfo_TerminateWorkflowExecutionResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_TerminateWorkflowExecutionResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_TerminateWorkflowExecutionResponse.value, __goscriptValue)
}

export let xxx_messageInfo_DescribeWorkflowExecutionRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DescribeWorkflowExecutionRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DescribeWorkflowExecutionRequest.value, __goscriptValue)
}

export let xxx_messageInfo_DescribeWorkflowExecutionResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DescribeWorkflowExecutionResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DescribeWorkflowExecutionResponse.value, __goscriptValue)
}

export let xxx_messageInfo_QueryWorkflowRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_QueryWorkflowRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_QueryWorkflowRequest.value, __goscriptValue)
}

export let xxx_messageInfo_QueryWorkflowResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_QueryWorkflowResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_QueryWorkflowResponse.value, __goscriptValue)
}

export let xxx_messageInfo_DescribeTaskListRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DescribeTaskListRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DescribeTaskListRequest.value, __goscriptValue)
}

export let xxx_messageInfo_DescribeTaskListResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DescribeTaskListResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DescribeTaskListResponse.value, __goscriptValue)
}

export let xxx_messageInfo_GetTaskListsByDomainRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_GetTaskListsByDomainRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_GetTaskListsByDomainRequest.value, __goscriptValue)
}

export let xxx_messageInfo_GetTaskListsByDomainResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_GetTaskListsByDomainResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_GetTaskListsByDomainResponse.value, __goscriptValue)
}

export let xxx_messageInfo_ListTaskListPartitionsRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListTaskListPartitionsRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListTaskListPartitionsRequest.value, __goscriptValue)
}

export let xxx_messageInfo_ListTaskListPartitionsResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListTaskListPartitionsResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListTaskListPartitionsResponse.value, __goscriptValue)
}

export let xxx_messageInfo_GetClusterInfoRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_GetClusterInfoRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_GetClusterInfoRequest.value, __goscriptValue)
}

export let xxx_messageInfo_GetClusterInfoResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_GetClusterInfoResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_GetClusterInfoResponse.value, __goscriptValue)
}

export let xxx_messageInfo_GetWorkflowExecutionHistoryRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_GetWorkflowExecutionHistoryRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_GetWorkflowExecutionHistoryRequest.value, __goscriptValue)
}

export let xxx_messageInfo_GetWorkflowExecutionHistoryResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_GetWorkflowExecutionHistoryResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_GetWorkflowExecutionHistoryResponse.value, __goscriptValue)
}

export let xxx_messageInfo_FeatureFlags: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_FeatureFlags(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_FeatureFlags.value, __goscriptValue)
}

export let xxx_messageInfo_RefreshWorkflowTasksRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RefreshWorkflowTasksRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RefreshWorkflowTasksRequest.value, __goscriptValue)
}

export let xxx_messageInfo_RefreshWorkflowTasksResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RefreshWorkflowTasksResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RefreshWorkflowTasksResponse.value, __goscriptValue)
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RestartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionRequest")), "uber.cadence.api.v1.RestartWorkflowExecutionRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DiagnoseWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionRequest")), "uber.cadence.api.v1.DiagnoseWorkflowExecutionRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DiagnoseWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionResponse")), "uber.cadence.api.v1.DiagnoseWorkflowExecutionResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.StartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionRequest")), "uber.cadence.api.v1.StartWorkflowExecutionRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.StartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionResponse")), "uber.cadence.api.v1.StartWorkflowExecutionResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.StartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncRequest")), "uber.cadence.api.v1.StartWorkflowExecutionAsyncRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.StartWorkflowExecutionAsyncResponse", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncResponse")), "uber.cadence.api.v1.StartWorkflowExecutionAsyncResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RestartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionResponse")), "uber.cadence.api.v1.RestartWorkflowExecutionResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.SignalWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionRequest")), "uber.cadence.api.v1.SignalWorkflowExecutionRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.SignalWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionResponse")), "uber.cadence.api.v1.SignalWorkflowExecutionResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.SignalWithStartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionRequest")), "uber.cadence.api.v1.SignalWithStartWorkflowExecutionRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.SignalWithStartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionResponse")), "uber.cadence.api.v1.SignalWithStartWorkflowExecutionResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.SignalWithStartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncRequest")), "uber.cadence.api.v1.SignalWithStartWorkflowExecutionAsyncRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.SignalWithStartWorkflowExecutionAsyncResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncResponse")), "uber.cadence.api.v1.SignalWithStartWorkflowExecutionAsyncResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ResetWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionRequest")), "uber.cadence.api.v1.ResetWorkflowExecutionRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ResetWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionResponse")), "uber.cadence.api.v1.ResetWorkflowExecutionResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RequestCancelWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionRequest")), "uber.cadence.api.v1.RequestCancelWorkflowExecutionRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RequestCancelWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionResponse")), "uber.cadence.api.v1.RequestCancelWorkflowExecutionResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.TerminateWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionRequest")), "uber.cadence.api.v1.TerminateWorkflowExecutionRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.TerminateWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionResponse")), "uber.cadence.api.v1.TerminateWorkflowExecutionResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DescribeWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionRequest")), "uber.cadence.api.v1.DescribeWorkflowExecutionRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DescribeWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionResponse")), "uber.cadence.api.v1.DescribeWorkflowExecutionResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.QueryWorkflowRequest", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowRequest")), "uber.cadence.api.v1.QueryWorkflowRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.QueryWorkflowResponse", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowResponse")), "uber.cadence.api.v1.QueryWorkflowResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DescribeTaskListRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListRequest")), "uber.cadence.api.v1.DescribeTaskListRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DescribeTaskListResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse")), "uber.cadence.api.v1.DescribeTaskListResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.GetTaskListsByDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainRequest")), "uber.cadence.api.v1.GetTaskListsByDomainRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.GetTaskListsByDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainResponse")), "uber.cadence.api.v1.GetTaskListsByDomainResponse")
	await proto.RegisterMapType($.interfaceValue(null, "map[string]*apiv1.DescribeTaskListResponse", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse"))), "uber.cadence.api.v1.GetTaskListsByDomainResponse.ActivityTaskListMapEntry")
	await proto.RegisterMapType($.interfaceValue(null, "map[string]*apiv1.DescribeTaskListResponse", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse"))), "uber.cadence.api.v1.GetTaskListsByDomainResponse.DecisionTaskListMapEntry")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ListTaskListPartitionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsRequest")), "uber.cadence.api.v1.ListTaskListPartitionsRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ListTaskListPartitionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsResponse")), "uber.cadence.api.v1.ListTaskListPartitionsResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.GetClusterInfoRequest", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoRequest")), "uber.cadence.api.v1.GetClusterInfoRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.GetClusterInfoResponse", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoResponse")), "uber.cadence.api.v1.GetClusterInfoResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.GetWorkflowExecutionHistoryRequest", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryRequest")), "uber.cadence.api.v1.GetWorkflowExecutionHistoryRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.GetWorkflowExecutionHistoryResponse", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryResponse")), "uber.cadence.api.v1.GetWorkflowExecutionHistoryResponse")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.FeatureFlags", /* @__PURE__ */ $.pointerType("apiv1.FeatureFlags")), "uber.cadence.api.v1.FeatureFlags")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RefreshWorkflowTasksRequest", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksRequest")), "uber.cadence.api.v1.RefreshWorkflowTasksRequest")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RefreshWorkflowTasksResponse", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksResponse")), "uber.cadence.api.v1.RefreshWorkflowTasksResponse")
}

async function __goscriptInit1(): globalThis.Promise<void> {
	proto.RegisterFile("uber/cadence/api/v1/service_workflow.proto", fileDescriptor_674d14d2fee4e473)
}

export let fileDescriptor_674d14d2fee4e473: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 220, 90, 205, 111, 220, 198, 21, 7, 87, 223, 111, 37, 89, 26, 125, 173, 87, 214, 23, 29, 167, 170, 19, 175, 42, 41, 182, 19, 39, 109, 32, 175, 45, 71, 69, 156, 170, 148, 26, 163, 189, 16, 35, 114, 118, 53, 22, 151, 164, 134, 67, 201, 155, 28, 138, 22, 65, 10, 20, 109, 209, 99, 11, 20, 232, 161, 135, 156, 26, 20, 232, 169, 247, 162, 232, 177, 127, 66, 235, 127, 32, 167, 94, 131, 130, 51, 195, 253, 18, 201, 93, 73, 9, 236, 244, 182, 51, 243, 126, 111, 222, 188, 175, 121, 243, 150, 112, 51, 60, 32, 108, 205, 194, 54, 113, 45, 178, 134, 125, 186, 118, 178, 190, 22, 16, 118, 66, 45, 98, 158, 122, 236, 168, 226, 120, 167, 37, 159, 121, 220, 67, 83, 17, 109, 73, 209, 150, 176, 79, 75, 39, 235, 197, 197, 170, 231, 85, 29, 178, 38, 72, 14, 194, 202, 154, 29, 50, 204, 169, 231, 74, 80, 113, 169, 115, 157, 211, 26, 9, 56, 174, 249, 138, 96, 57, 73, 2, 203, 171, 213, 26, 44, 86, 146, 40, 14, 105, 192, 61, 86, 143, 119, 73, 34, 57, 14, 73, 131, 64, 79, 34, 224, 56, 56, 114, 104, 192, 179, 104, 218, 117, 160, 255, 93, 131, 37, 35, 146, 159, 241, 39, 106, 229, 225, 51, 98, 133, 209, 137, 13, 114, 28, 146, 128, 163, 89, 24, 180, 189, 26, 166, 110, 65, 91, 214, 86, 71, 12, 53, 66, 63, 2, 20, 115, 51, 73, 12, 42, 228, 150, 181, 213, 252, 198, 171, 165, 4, 229, 150, 206, 110, 49, 121, 218, 57, 133, 138, 48, 76, 109, 226, 114, 202, 235, 133, 62, 177, 97, 99, 28, 137, 194, 8, 14, 60, 183, 208, 47, 69, 145, 35, 253, 207, 26, 44, 63, 160, 184, 234, 122, 1, 249, 6, 156, 67, 255, 76, 131, 149, 12, 121, 3, 223, 115, 3, 146, 42, 240, 83, 88, 176, 37, 152, 83, 203, 188, 180, 236, 243, 77, 102, 103, 22, 245, 223, 1, 44, 236, 93, 200, 61, 150, 32, 223, 16, 141, 218, 66, 166, 17, 3, 226, 169, 29, 27, 109, 195, 88, 131, 128, 215, 125, 34, 180, 148, 223, 88, 201, 20, 123, 191, 238, 19, 99, 244, 180, 101, 132, 238, 193, 72, 228, 249, 102, 228, 250, 194, 47, 242, 27, 11, 137, 60, 246, 113, 112, 244, 62, 13, 184, 49, 204, 213, 47, 180, 1, 3, 212, 245, 67, 94, 24, 16, 184, 107, 137, 184, 93, 92, 119, 60, 108, 27, 146, 20, 97, 88, 110, 168, 218, 20, 161, 99, 114, 207, 180, 28, 47, 32, 102, 148, 13, 188, 144, 23, 6, 5, 187, 171, 37, 153, 45, 74, 113, 182, 40, 61, 80, 217, 196, 184, 214, 96, 33, 180, 187, 239, 149, 35, 252, 190, 132, 163, 39, 48, 47, 142, 148, 194, 125, 168, 27, 247, 185, 8, 157, 196, 184, 213, 41, 135, 59, 130, 107, 1, 128, 73, 155, 70, 246, 26, 17, 171, 35, 106, 102, 199, 70, 22, 20, 90, 236, 105, 50, 18, 6, 196, 244, 61, 135, 90, 245, 2, 44, 107, 171, 227, 27, 55, 51, 45, 183, 99, 27, 17, 100, 87, 32, 140, 153, 211, 164, 105, 84, 134, 81, 70, 56, 171, 199, 140, 243, 226, 164, 203, 137, 140, 141, 136, 80, 177, 203, 179, 230, 0, 93, 135, 49, 139, 69, 182, 177, 14, 137, 29, 58, 164, 48, 42, 206, 50, 26, 77, 238, 169, 57, 116, 11, 250, 107, 164, 230, 21, 198, 148, 46, 147, 118, 120, 76, 106, 158, 33, 200, 144, 1, 147, 1, 193, 204, 58, 52, 49, 231, 140, 30, 132, 156, 4, 133, 113, 129, 189, 145, 136, 221, 19, 212, 91, 13, 98, 99, 34, 232, 152, 65, 155, 48, 120, 72, 176, 77, 88, 225, 138, 96, 52, 159, 200, 232, 61, 65, 98, 40, 82, 116, 15, 242, 54, 113, 112, 93, 250, 70, 97, 162, 155, 43, 128, 160, 22, 190, 128, 222, 129, 209, 167, 148, 115, 194, 20, 120, 178, 27, 56, 47, 201, 27, 232, 10, 101, 1, 55, 89, 232, 154, 152, 23, 144, 64, 23, 207, 160, 247, 227, 27, 209, 0, 65, 111, 132, 238, 22, 71, 31, 194, 148, 48, 138, 119, 66, 152, 131, 253, 216, 192, 83, 194, 115, 146, 83, 85, 153, 121, 238, 15, 36, 185, 50, 243, 164, 213, 57, 133, 158, 193, 18, 182, 56, 61, 33, 166, 229, 132, 129, 56, 27, 113, 136, 37, 130, 83, 237, 49, 45, 4, 93, 79, 220, 99, 75, 96, 203, 18, 186, 23, 35, 213, 118, 215, 112, 198, 170, 126, 23, 22, 211, 50, 163, 74, 224, 51, 48, 24, 233, 138, 218, 42, 53, 14, 176, 208, 221, 177, 117, 6, 122, 50, 112, 43, 168, 187, 86, 156, 87, 223, 135, 33, 21, 124, 2, 157, 223, 216, 72, 246, 179, 172, 228, 108, 196, 44, 244, 27, 112, 61, 115, 79, 41, 177, 254, 22, 44, 167, 151, 3, 217, 167, 250, 71, 14, 22, 247, 104, 213, 197, 206, 55, 161, 146, 104, 79, 118, 253, 157, 201, 110, 9, 242, 129, 56, 139, 233, 226, 26, 17, 183, 195, 136, 1, 114, 234, 3, 92, 35, 232, 93, 24, 85, 4, 242, 254, 24, 236, 225, 254, 80, 44, 119, 196, 45, 82, 128, 33, 203, 115, 57, 243, 28, 145, 206, 71, 141, 120, 168, 175, 192, 82, 170, 30, 149, 153, 190, 212, 224, 91, 138, 134, 242, 195, 236, 251, 249, 9, 140, 201, 107, 228, 242, 222, 52, 42, 24, 197, 140, 59, 116, 148, 235, 170, 163, 190, 75, 232, 168, 191, 93, 71, 91, 176, 218, 253, 252, 217, 254, 250, 169, 6, 175, 119, 227, 209, 22, 144, 31, 118, 6, 228, 59, 201, 42, 236, 205, 46, 205, 208, 92, 131, 91, 61, 202, 161, 172, 255, 121, 14, 22, 12, 18, 144, 151, 166, 100, 111, 150, 229, 125, 173, 101, 57, 186, 11, 5, 155, 88, 52, 136, 114, 113, 133, 186, 52, 56, 52, 201, 9, 113, 27, 33, 215, 103, 204, 196, 235, 219, 98, 249, 97, 180, 186, 99, 119, 68, 231, 64, 103, 116, 150, 96, 42, 56, 162, 190, 169, 188, 139, 17, 236, 251, 78, 93, 196, 224, 176, 49, 25, 45, 73, 133, 26, 114, 33, 202, 212, 105, 250, 202, 246, 145, 63, 228, 224, 134, 210, 105, 25, 187, 22, 249, 127, 72, 109, 211, 48, 96, 225, 48, 136, 147, 154, 28, 160, 77, 152, 149, 151, 123, 179, 180, 85, 10, 25, 20, 100, 83, 98, 181, 41, 147, 80, 207, 42, 188, 218, 77, 59, 202, 101, 255, 154, 131, 149, 125, 194, 106, 212, 197, 156, 188, 236, 110, 123, 7, 134, 108, 194, 49, 117, 2, 245, 156, 200, 78, 89, 49, 113, 155, 81, 6, 58, 140, 114, 33, 253, 190, 2, 122, 150, 210, 148, 110, 255, 27, 61, 126, 73, 96, 49, 122, 240, 210, 168, 246, 0, 230, 68, 187, 194, 180, 60, 55, 160, 1, 39, 174, 85, 55, 29, 114, 66, 28, 161, 235, 180, 183, 194, 15, 35, 76, 185, 9, 121, 63, 66, 24, 51, 199, 73, 211, 250, 151, 125, 176, 146, 113, 110, 21, 217, 14, 204, 53, 85, 110, 121, 110, 133, 86, 85, 117, 171, 178, 248, 102, 111, 167, 44, 183, 66, 141, 89, 146, 56, 31, 157, 251, 172, 58, 77, 234, 86, 60, 165, 211, 155, 189, 237, 182, 227, 86, 188, 230, 27, 169, 109, 26, 61, 1, 228, 19, 215, 166, 110, 213, 20, 245, 41, 229, 148, 4, 133, 190, 229, 190, 213, 252, 198, 106, 178, 167, 74, 242, 45, 73, 93, 23, 204, 39, 253, 182, 73, 74, 2, 244, 99, 152, 136, 25, 91, 135, 212, 177, 25, 113, 11, 253, 130, 109, 41, 139, 109, 57, 162, 109, 151, 252, 138, 223, 178, 196, 136, 139, 246, 154, 172, 227, 140, 175, 158, 220, 153, 18, 63, 80, 180, 109, 76, 227, 73, 253, 147, 62, 152, 22, 30, 19, 171, 239, 5, 57, 251, 155, 48, 32, 60, 84, 21, 56, 122, 38, 39, 33, 176, 33, 1, 200, 132, 89, 25, 38, 140, 60, 37, 22, 143, 252, 211, 166, 66, 168, 126, 17, 37, 223, 78, 143, 18, 67, 32, 202, 49, 192, 152, 62, 78, 152, 205, 138, 195, 129, 175, 42, 14, 255, 164, 193, 76, 135, 25, 84, 236, 189, 11, 163, 241, 241, 130, 208, 137, 203, 166, 46, 5, 160, 58, 71, 4, 64, 59, 48, 222, 170, 31, 98, 43, 99, 233, 221, 244, 66, 108, 99, 236, 184, 117, 168, 127, 161, 193, 92, 156, 45, 26, 141, 160, 46, 254, 210, 214, 89, 202, 157, 175, 179, 244, 8, 198, 27, 216, 102, 123, 107, 60, 165, 189, 21, 51, 144, 237, 45, 222, 50, 138, 138, 40, 234, 90, 78, 104, 19, 179, 201, 48, 224, 152, 135, 242, 122, 26, 54, 102, 212, 122, 204, 100, 79, 44, 234, 127, 203, 65, 225, 236, 137, 149, 105, 222, 130, 33, 223, 115, 28, 194, 130, 130, 38, 66, 124, 41, 217, 42, 130, 70, 132, 95, 76, 143, 30, 195, 196, 25, 65, 164, 114, 174, 103, 158, 77, 138, 101, 140, 243, 182, 49, 122, 2, 19, 62, 102, 156, 182, 36, 104, 21, 72, 175, 103, 178, 219, 141, 65, 50, 3, 27, 87, 252, 246, 137, 203, 244, 5, 245, 219, 48, 255, 136, 240, 120, 33, 184, 95, 127, 32, 60, 162, 139, 195, 232, 191, 233, 135, 107, 201, 56, 165, 246, 159, 194, 108, 163, 34, 110, 42, 177, 134, 125, 101, 133, 239, 39, 10, 152, 197, 178, 20, 167, 195, 152, 226, 49, 246, 31, 186, 156, 213, 141, 41, 251, 236, 74, 36, 128, 186, 52, 234, 29, 2, 228, 46, 42, 64, 124, 173, 156, 21, 0, 159, 93, 41, 134, 145, 83, 38, 75, 140, 38, 160, 239, 136, 212, 149, 78, 163, 159, 168, 12, 3, 39, 216, 9, 137, 114, 176, 91, 137, 210, 165, 57, 185, 33, 177, 247, 114, 111, 106, 209, 182, 105, 114, 126, 141, 219, 234, 1, 44, 136, 64, 238, 244, 217, 224, 107, 76, 61, 250, 167, 57, 88, 76, 219, 85, 249, 225, 49, 44, 36, 184, 65, 35, 130, 226, 164, 80, 234, 45, 2, 31, 19, 142, 109, 204, 177, 81, 236, 180, 120, 115, 235, 104, 203, 4, 215, 111, 217, 50, 119, 177, 45, 59, 189, 188, 185, 165, 62, 7, 51, 143, 8, 87, 237, 59, 145, 196, 212, 147, 251, 231, 26, 204, 118, 174, 40, 205, 28, 194, 213, 32, 244, 125, 143, 113, 98, 155, 150, 67, 163, 231, 234, 9, 97, 129, 210, 74, 122, 94, 218, 139, 81, 101, 1, 250, 80, 97, 140, 185, 32, 121, 65, 255, 162, 15, 244, 71, 9, 143, 210, 247, 228, 95, 129, 47, 168, 152, 153, 135, 17, 31, 87, 137, 25, 208, 143, 228, 149, 53, 96, 12, 71, 19, 123, 244, 35, 130, 94, 133, 43, 46, 121, 22, 89, 173, 74, 76, 238, 29, 17, 87, 53, 102, 198, 162, 233, 93, 92, 37, 251, 209, 36, 122, 13, 208, 41, 166, 220, 172, 120, 204, 116, 201, 169, 124, 245, 139, 138, 99, 216, 184, 18, 173, 108, 123, 236, 3, 114, 42, 158, 251, 200, 132, 171, 234, 223, 79, 213, 29, 168, 80, 135, 19, 38, 47, 205, 65, 113, 105, 190, 146, 120, 30, 1, 223, 22, 196, 226, 222, 156, 85, 108, 58, 230, 209, 117, 24, 19, 237, 2, 204, 172, 67, 122, 130, 101, 195, 109, 216, 24, 141, 38, 183, 212, 92, 86, 165, 52, 252, 85, 85, 74, 255, 209, 224, 122, 166, 197, 149, 15, 222, 129, 33, 117, 148, 204, 146, 41, 134, 197, 196, 232, 123, 144, 103, 248, 212, 140, 177, 50, 160, 146, 211, 198, 3, 204, 241, 125, 199, 59, 48, 128, 225, 83, 197, 40, 201, 188, 125, 73, 230, 45, 194, 176, 212, 37, 177, 85, 9, 210, 24, 235, 127, 209, 96, 116, 155, 96, 30, 50, 178, 237, 224, 106, 128, 40, 108, 36, 60, 137, 176, 195, 8, 182, 35, 109, 215, 124, 135, 68, 177, 70, 24, 243, 152, 73, 92, 124, 224, 16, 217, 134, 25, 54, 110, 157, 237, 132, 73, 92, 57, 134, 61, 140, 80, 15, 37, 8, 221, 134, 89, 28, 114, 175, 226, 177, 83, 204, 196, 99, 35, 102, 151, 147, 133, 82, 251, 170, 130, 233, 191, 210, 96, 222, 32, 21, 70, 130, 195, 198, 223, 140, 56, 56, 10, 94, 76, 4, 234, 139, 112, 45, 89, 26, 233, 29, 27, 159, 77, 65, 62, 94, 217, 218, 221, 65, 191, 208, 160, 144, 214, 180, 71, 111, 164, 252, 117, 150, 249, 151, 127, 241, 246, 57, 81, 202, 111, 127, 166, 193, 108, 114, 3, 19, 93, 160, 221, 92, 220, 60, 23, 70, 201, 240, 91, 13, 230, 51, 154, 168, 232, 238, 57, 152, 182, 182, 127, 139, 111, 158, 31, 168, 68, 250, 68, 131, 185, 148, 142, 62, 218, 204, 234, 33, 167, 41, 230, 141, 243, 129, 148, 24, 127, 212, 96, 185, 91, 163, 25, 93, 170, 167, 93, 252, 238, 5, 209, 74, 194, 207, 53, 184, 209, 83, 43, 28, 109, 93, 104, 163, 54, 123, 222, 191, 12, 139, 22, 135, 79, 238, 44, 167, 56, 124, 102, 219, 62, 197, 225, 187, 180, 174, 127, 175, 193, 98, 118, 23, 22, 221, 75, 225, 219, 67, 99, 187, 248, 246, 133, 176, 74, 182, 95, 107, 80, 76, 239, 96, 162, 59, 201, 181, 94, 183, 62, 113, 241, 238, 185, 113, 74, 158, 95, 106, 112, 53, 181, 101, 136, 110, 103, 150, 249, 169, 210, 220, 57, 47, 76, 9, 83, 129, 177, 182, 182, 9, 202, 232, 246, 116, 116, 184, 138, 55, 123, 33, 85, 251, 120, 48, 209, 249, 84, 65, 175, 247, 248, 162, 145, 187, 157, 239, 253, 131, 62, 134, 233, 164, 7, 35, 250, 206, 57, 222, 150, 114, 227, 245, 115, 191, 70, 69, 72, 38, 63, 126, 82, 66, 50, 243, 125, 150, 18, 146, 93, 94, 87, 20, 198, 219, 95, 23, 232, 102, 218, 65, 206, 62, 78, 138, 175, 245, 68, 219, 114, 221, 101, 148, 148, 41, 215, 93, 247, 103, 71, 202, 117, 215, 75, 245, 250, 49, 76, 39, 213, 47, 41, 230, 207, 40, 188, 82, 204, 159, 85, 28, 201, 8, 79, 251, 178, 46, 45, 194, 187, 124, 57, 152, 22, 225, 221, 62, 224, 187, 239, 255, 243, 249, 162, 246, 175, 231, 139, 218, 191, 159, 47, 106, 48, 103, 121, 181, 36, 70, 247, 167, 99, 14, 123, 242, 67, 213, 93, 230, 113, 111, 87, 251, 201, 122, 149, 242, 195, 240, 160, 100, 121, 181, 181, 214, 111, 57, 111, 81, 219, 89, 171, 122, 242, 27, 84, 245, 97, 231, 219, 216, 167, 39, 235, 7, 131, 98, 110, 243, 127, 1, 0, 0, 255, 255, 58, 182, 35, 101, 8, 43, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_674d14d2fee4e473(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_674d14d2fee4e473 = __goscriptValue
}

export function encodeVarintServiceWorkflow(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovServiceWorkflow(v))
	let base = offset
	for (let __goscriptSliceWindow43 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow43.backing as any[])[$.windowSlot(__goscriptSliceWindow43, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export function sovServiceWorkflow(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozServiceWorkflow(x: bigint): number {
	let n: number = 0
	return sovServiceWorkflow($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export function skipServiceWorkflow(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow44 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowServiceWorkflow]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow44.backing as any[])[$.windowSlot(__goscriptSliceWindow44, iNdEx)] as number)
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
						return [0, ErrIntOverflowServiceWorkflow]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow44.backing as any[])[$.windowSlot(__goscriptSliceWindow44, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowServiceWorkflow]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow44.backing as any[])[$.windowSlot(__goscriptSliceWindow44, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthServiceWorkflow]
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
					return [0, ErrUnexpectedEndOfGroupServiceWorkflow]
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
			return [0, ErrInvalidLengthServiceWorkflow]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthServiceWorkflow: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthServiceWorkflow(__goscriptValue: $.GoError): void {
	ErrInvalidLengthServiceWorkflow = __goscriptValue
}

export let ErrIntOverflowServiceWorkflow: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowServiceWorkflow(__goscriptValue: $.GoError): void {
	ErrIntOverflowServiceWorkflow = __goscriptValue
}

export let ErrUnexpectedEndOfGroupServiceWorkflow: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupServiceWorkflow(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupServiceWorkflow = __goscriptValue
}

export { __goscriptInit0 }

export { __goscriptInit1 }
