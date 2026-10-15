// Generated file based on error.pb.go
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

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.WorkflowExecutionAlreadyStartedError", "apiv1.EntityNotExistsError", "apiv1.WorkflowExecutionAlreadyCompletedError", "apiv1.DomainNotActiveError", "apiv1.ClientVersionNotSupportedError", "apiv1.FeatureNotEnabledError", "apiv1.CancellationAlreadyRequestedError", "apiv1.DomainAlreadyExistsError", "apiv1.LimitExceededError", "apiv1.QueryFailedError", "apiv1.ServiceBusyError", "apiv1.StickyWorkerUnavailableError", "apiv1.ReadOnlyPartitionError"])

export class WorkflowExecutionAlreadyStartedError {
	public get StartRequestId(): string {
		return this._fields.StartRequestId
	}

	public set StartRequestId(value: string) {
		this._fields.StartRequestId = value
	}

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
		StartRequestId: string
		RunId: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{StartRequestId?: string, RunId?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			StartRequestId: init?.StartRequestId ?? ("" as string),
			RunId: init?.RunId ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkflowExecutionAlreadyStartedError {
		return new WorkflowExecutionAlreadyStartedError(this, true)
	}

	public __goscriptAssign(source: WorkflowExecutionAlreadyStartedError): void {
		const target = this._fields
		const values = source._fields
		target.StartRequestId = values.StartRequestId
		target.RunId = values.RunId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_c8f91786c9aff272, $.arrayToSlice<number>([0])]
	}

	public GetRunId(): string {
		const m: WorkflowExecutionAlreadyStartedError | $.VarRef<WorkflowExecutionAlreadyStartedError> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionAlreadyStartedError>(m).RunId
		}
		return ""
	}

	public GetStartRequestId(): string {
		const m: WorkflowExecutionAlreadyStartedError | $.VarRef<WorkflowExecutionAlreadyStartedError> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionAlreadyStartedError>(m).StartRequestId
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: WorkflowExecutionAlreadyStartedError | $.VarRef<WorkflowExecutionAlreadyStartedError> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionAlreadyStartedError).Size() : WorkflowExecutionAlreadyStartedError.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple0: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionAlreadyStartedError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowExecutionAlreadyStartedError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowExecutionAlreadyStartedError | $.VarRef<WorkflowExecutionAlreadyStartedError> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionAlreadyStartedError).Size() : WorkflowExecutionAlreadyStartedError.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionAlreadyStartedError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowExecutionAlreadyStartedError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowExecutionAlreadyStartedError | $.VarRef<WorkflowExecutionAlreadyStartedError> | null = this;
		const m$: WorkflowExecutionAlreadyStartedError = m == null ? $.pointerTarget<WorkflowExecutionAlreadyStartedError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecutionAlreadyStartedError>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as WorkflowExecutionAlreadyStartedError).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as WorkflowExecutionAlreadyStartedError).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowExecutionAlreadyStartedError).XXX_unrecognized)
		}
		if ($.stringLen((m$ as WorkflowExecutionAlreadyStartedError).RunId) > 0) {
			i = i - ($.stringLen((m$ as WorkflowExecutionAlreadyStartedError).RunId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowExecutionAlreadyStartedError).RunId)
			i = encodeVarintError(dAtA, i, $.uint64($.stringLen((m$ as WorkflowExecutionAlreadyStartedError).RunId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as WorkflowExecutionAlreadyStartedError).StartRequestId) > 0) {
			i = i - ($.stringLen((m$ as WorkflowExecutionAlreadyStartedError).StartRequestId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowExecutionAlreadyStartedError).StartRequestId)
			i = encodeVarintError(dAtA, i, $.uint64($.stringLen((m$ as WorkflowExecutionAlreadyStartedError).StartRequestId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: WorkflowExecutionAlreadyStartedError | $.VarRef<WorkflowExecutionAlreadyStartedError> | null = this;
		$.assignStruct($.pointerValue<WorkflowExecutionAlreadyStartedError>(m), $.markAsStructValue(new WorkflowExecutionAlreadyStartedError()))
	}

	public Size(): number {
		const m: WorkflowExecutionAlreadyStartedError | $.VarRef<WorkflowExecutionAlreadyStartedError> | null = this;
		let n: number = 0
		const m$: WorkflowExecutionAlreadyStartedError = m == null ? $.pointerTarget<WorkflowExecutionAlreadyStartedError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecutionAlreadyStartedError>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as WorkflowExecutionAlreadyStartedError).StartRequestId)
		if (l > 0) {
			n = n + ((1 + l) + sovError($.uint64(l)))
		}
		l = $.stringLen((m$ as WorkflowExecutionAlreadyStartedError).RunId)
		if (l > 0) {
			n = n + ((1 + l) + sovError($.uint64(l)))
		}
		if ((m$ as WorkflowExecutionAlreadyStartedError).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as WorkflowExecutionAlreadyStartedError).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: WorkflowExecutionAlreadyStartedError | $.VarRef<WorkflowExecutionAlreadyStartedError> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionAlreadyStartedError", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionAlreadyStartedError")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: WorkflowExecutionAlreadyStartedError | $.VarRef<WorkflowExecutionAlreadyStartedError> | null = this;
		const m$: WorkflowExecutionAlreadyStartedError = m == null ? $.pointerTarget<WorkflowExecutionAlreadyStartedError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecutionAlreadyStartedError>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowError
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
				return fmt.Errorf("proto: WorkflowExecutionAlreadyStartedError: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: WorkflowExecutionAlreadyStartedError: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartRequestId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowError
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
						return ErrInvalidLengthError
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthError
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowExecutionAlreadyStartedError).StartRequestId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RunId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowError
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
						return ErrInvalidLengthError
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthError
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowExecutionAlreadyStartedError).RunId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipError($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthError
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowExecutionAlreadyStartedError).XXX_unrecognized = $.appendSlice((m$ as WorkflowExecutionAlreadyStartedError).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: WorkflowExecutionAlreadyStartedError | $.VarRef<WorkflowExecutionAlreadyStartedError> | null = this;
		xxx_messageInfo_WorkflowExecutionAlreadyStartedError.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionAlreadyStartedError", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionAlreadyStartedError")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: WorkflowExecutionAlreadyStartedError | $.VarRef<WorkflowExecutionAlreadyStartedError> | null = this;
		if (deterministic) {
			return xxx_messageInfo_WorkflowExecutionAlreadyStartedError.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionAlreadyStartedError", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionAlreadyStartedError")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionAlreadyStartedError).MarshalToSizedBuffer(b) : WorkflowExecutionAlreadyStartedError.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: WorkflowExecutionAlreadyStartedError | $.VarRef<WorkflowExecutionAlreadyStartedError> | null = this;
		xxx_messageInfo_WorkflowExecutionAlreadyStartedError.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionAlreadyStartedError", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionAlreadyStartedError")), src)
	}

	public XXX_Size(): number {
		const m: WorkflowExecutionAlreadyStartedError | $.VarRef<WorkflowExecutionAlreadyStartedError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionAlreadyStartedError).Size() : WorkflowExecutionAlreadyStartedError.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: WorkflowExecutionAlreadyStartedError | $.VarRef<WorkflowExecutionAlreadyStartedError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionAlreadyStartedError).Unmarshal(b) : WorkflowExecutionAlreadyStartedError.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.WorkflowExecutionAlreadyStartedError",
		() => new WorkflowExecutionAlreadyStartedError(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetRunId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetStartRequestId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		WorkflowExecutionAlreadyStartedError,
		() => [{ name: "StartRequestId", key: "StartRequestId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=start_request_id,json=startRequestId,proto3\" json:\"start_request_id,omitempty\"" }, { name: "RunId", key: "RunId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=run_id,json=runId,proto3\" json:\"run_id,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class EntityNotExistsError {
	public get CurrentCluster(): string {
		return this._fields.CurrentCluster
	}

	public set CurrentCluster(value: string) {
		this._fields.CurrentCluster = value
	}

	public get ActiveCluster(): string {
		return this._fields.ActiveCluster
	}

	public set ActiveCluster(value: string) {
		this._fields.ActiveCluster = value
	}

	public get ActiveClusters(): $.Slice<string> {
		return this._fields.ActiveClusters
	}

	public set ActiveClusters(value: $.Slice<string>) {
		this._fields.ActiveClusters = value
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
		CurrentCluster: string
		ActiveCluster: string
		ActiveClusters: $.Slice<string>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{CurrentCluster?: string, ActiveCluster?: string, ActiveClusters?: $.Slice<string>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			CurrentCluster: init?.CurrentCluster ?? ("" as string),
			ActiveCluster: init?.ActiveCluster ?? ("" as string),
			ActiveClusters: init?.ActiveClusters ?? (null! as $.Slice<string>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EntityNotExistsError {
		return new EntityNotExistsError(this, true)
	}

	public __goscriptAssign(source: EntityNotExistsError): void {
		const target = this._fields
		const values = source._fields
		target.CurrentCluster = values.CurrentCluster
		target.ActiveCluster = values.ActiveCluster
		target.ActiveClusters = values.ActiveClusters
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_c8f91786c9aff272, $.arrayToSlice<number>([1])]
	}

	public GetActiveCluster(): string {
		const m: EntityNotExistsError | $.VarRef<EntityNotExistsError> | null = this;
		if (m != null) {
			return $.pointerValue<EntityNotExistsError>(m).ActiveCluster
		}
		return ""
	}

	public GetActiveClusters(): $.Slice<string> {
		const m: EntityNotExistsError | $.VarRef<EntityNotExistsError> | null = this;
		if (m != null) {
			return $.pointerValue<EntityNotExistsError>(m).ActiveClusters
		}
		return null
	}

	public GetCurrentCluster(): string {
		const m: EntityNotExistsError | $.VarRef<EntityNotExistsError> | null = this;
		if (m != null) {
			return $.pointerValue<EntityNotExistsError>(m).CurrentCluster
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: EntityNotExistsError | $.VarRef<EntityNotExistsError> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as EntityNotExistsError).Size() : EntityNotExistsError.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple1: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as EntityNotExistsError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : EntityNotExistsError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: EntityNotExistsError | $.VarRef<EntityNotExistsError> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as EntityNotExistsError).Size() : EntityNotExistsError.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as EntityNotExistsError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : EntityNotExistsError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: EntityNotExistsError | $.VarRef<EntityNotExistsError> | null = this;
		const m$: EntityNotExistsError = m == null ? $.pointerTarget<EntityNotExistsError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<EntityNotExistsError>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as EntityNotExistsError).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as EntityNotExistsError).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as EntityNotExistsError).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as EntityNotExistsError).ActiveClusters) > 0) {
			for (let __goscriptSliceWindow1 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as EntityNotExistsError).ActiveClusters) - 1; iNdEx >= 0; iNdEx--) {
				i = i - ($.stringLen($.arrayIndex((m$ as EntityNotExistsError).ActiveClusters!, iNdEx)))
				$.copy($.goSlice(dAtA, i, undefined), $.arrayIndex((m$ as EntityNotExistsError).ActiveClusters!, iNdEx))
				i = encodeVarintError(dAtA, i, $.uint64($.stringLen($.arrayIndex((m$ as EntityNotExistsError).ActiveClusters!, iNdEx))))
				i--;
				;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = 0x1a
			}
		}
		if ($.stringLen((m$ as EntityNotExistsError).ActiveCluster) > 0) {
			i = i - ($.stringLen((m$ as EntityNotExistsError).ActiveCluster))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as EntityNotExistsError).ActiveCluster)
			i = encodeVarintError(dAtA, i, $.uint64($.stringLen((m$ as EntityNotExistsError).ActiveCluster)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as EntityNotExistsError).CurrentCluster) > 0) {
			i = i - ($.stringLen((m$ as EntityNotExistsError).CurrentCluster))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as EntityNotExistsError).CurrentCluster)
			i = encodeVarintError(dAtA, i, $.uint64($.stringLen((m$ as EntityNotExistsError).CurrentCluster)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: EntityNotExistsError | $.VarRef<EntityNotExistsError> | null = this;
		$.assignStruct($.pointerValue<EntityNotExistsError>(m), $.markAsStructValue(new EntityNotExistsError()))
	}

	public Size(): number {
		const m: EntityNotExistsError | $.VarRef<EntityNotExistsError> | null = this;
		let n: number = 0
		const m$: EntityNotExistsError = m == null ? $.pointerTarget<EntityNotExistsError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<EntityNotExistsError>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as EntityNotExistsError).CurrentCluster)
		if (l > 0) {
			n = n + ((1 + l) + sovError($.uint64(l)))
		}
		l = $.stringLen((m$ as EntityNotExistsError).ActiveCluster)
		if (l > 0) {
			n = n + ((1 + l) + sovError($.uint64(l)))
		}
		if ($.sliceLen((m$ as EntityNotExistsError).ActiveClusters) > 0) {
			for (let __goscriptRangeTarget0 = (m$ as EntityNotExistsError).ActiveClusters, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let s = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
				l = $.stringLen(s)
				n = n + ((1 + l) + sovError($.uint64(l)))
			}
		}
		if ((m$ as EntityNotExistsError).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as EntityNotExistsError).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: EntityNotExistsError | $.VarRef<EntityNotExistsError> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.EntityNotExistsError", /* @__PURE__ */ $.pointerType("apiv1.EntityNotExistsError")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: EntityNotExistsError | $.VarRef<EntityNotExistsError> | null = this;
		const m$: EntityNotExistsError = m == null ? $.pointerTarget<EntityNotExistsError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<EntityNotExistsError>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowError
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
				return fmt.Errorf("proto: EntityNotExistsError: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: EntityNotExistsError: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field CurrentCluster", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowError
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
						return ErrInvalidLengthError
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthError
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as EntityNotExistsError).CurrentCluster = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveCluster", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowError
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
						return ErrInvalidLengthError
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthError
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as EntityNotExistsError).ActiveCluster = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveClusters", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowError
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
						return ErrInvalidLengthError
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthError
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as EntityNotExistsError).ActiveClusters = $.appendOne((m$ as EntityNotExistsError).ActiveClusters, $.bytesToString($.goSlice(dAtA, iNdEx, postIndex)))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipError($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthError
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as EntityNotExistsError).XXX_unrecognized = $.appendSlice((m$ as EntityNotExistsError).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: EntityNotExistsError | $.VarRef<EntityNotExistsError> | null = this;
		xxx_messageInfo_EntityNotExistsError.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.EntityNotExistsError", /* @__PURE__ */ $.pointerType("apiv1.EntityNotExistsError")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: EntityNotExistsError | $.VarRef<EntityNotExistsError> | null = this;
		if (deterministic) {
			return xxx_messageInfo_EntityNotExistsError.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.EntityNotExistsError", /* @__PURE__ */ $.pointerType("apiv1.EntityNotExistsError")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as EntityNotExistsError).MarshalToSizedBuffer(b) : EntityNotExistsError.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: EntityNotExistsError | $.VarRef<EntityNotExistsError> | null = this;
		xxx_messageInfo_EntityNotExistsError.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.EntityNotExistsError", /* @__PURE__ */ $.pointerType("apiv1.EntityNotExistsError")), src)
	}

	public XXX_Size(): number {
		const m: EntityNotExistsError | $.VarRef<EntityNotExistsError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as EntityNotExistsError).Size() : EntityNotExistsError.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: EntityNotExistsError | $.VarRef<EntityNotExistsError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as EntityNotExistsError).Unmarshal(b) : EntityNotExistsError.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.EntityNotExistsError",
		() => new EntityNotExistsError(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActiveCluster", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetActiveClusters", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "GetCurrentCluster", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		EntityNotExistsError,
		() => [{ name: "CurrentCluster", key: "CurrentCluster", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=current_cluster,json=currentCluster,proto3\" json:\"current_cluster,omitempty\"" }, { name: "ActiveCluster", key: "ActiveCluster", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=active_cluster,json=activeCluster,proto3\" json:\"active_cluster,omitempty\"" }, { name: "ActiveClusters", key: "ActiveClusters", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,3,rep,name=active_clusters,json=activeClusters,proto3\" json:\"active_clusters,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class WorkflowExecutionAlreadyCompletedError {
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

	public clone(): WorkflowExecutionAlreadyCompletedError {
		return new WorkflowExecutionAlreadyCompletedError(this, true)
	}

	public __goscriptAssign(source: WorkflowExecutionAlreadyCompletedError): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_c8f91786c9aff272, $.arrayToSlice<number>([2])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: WorkflowExecutionAlreadyCompletedError | $.VarRef<WorkflowExecutionAlreadyCompletedError> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionAlreadyCompletedError).Size() : WorkflowExecutionAlreadyCompletedError.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple2: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionAlreadyCompletedError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowExecutionAlreadyCompletedError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowExecutionAlreadyCompletedError | $.VarRef<WorkflowExecutionAlreadyCompletedError> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionAlreadyCompletedError).Size() : WorkflowExecutionAlreadyCompletedError.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionAlreadyCompletedError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowExecutionAlreadyCompletedError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowExecutionAlreadyCompletedError | $.VarRef<WorkflowExecutionAlreadyCompletedError> | null = this;
		const m$: WorkflowExecutionAlreadyCompletedError = m == null ? $.pointerTarget<WorkflowExecutionAlreadyCompletedError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecutionAlreadyCompletedError>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as WorkflowExecutionAlreadyCompletedError).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as WorkflowExecutionAlreadyCompletedError).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowExecutionAlreadyCompletedError).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: WorkflowExecutionAlreadyCompletedError | $.VarRef<WorkflowExecutionAlreadyCompletedError> | null = this;
		$.assignStruct($.pointerValue<WorkflowExecutionAlreadyCompletedError>(m), new WorkflowExecutionAlreadyCompletedError(undefined, true))
	}

	public Size(): number {
		const m: WorkflowExecutionAlreadyCompletedError | $.VarRef<WorkflowExecutionAlreadyCompletedError> | null = this;
		let n: number = 0
		const m$: WorkflowExecutionAlreadyCompletedError = m == null ? $.pointerTarget<WorkflowExecutionAlreadyCompletedError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecutionAlreadyCompletedError>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as WorkflowExecutionAlreadyCompletedError).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as WorkflowExecutionAlreadyCompletedError).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: WorkflowExecutionAlreadyCompletedError | $.VarRef<WorkflowExecutionAlreadyCompletedError> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionAlreadyCompletedError", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionAlreadyCompletedError")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: WorkflowExecutionAlreadyCompletedError | $.VarRef<WorkflowExecutionAlreadyCompletedError> | null = this;
		const m$: WorkflowExecutionAlreadyCompletedError = m == null ? $.pointerTarget<WorkflowExecutionAlreadyCompletedError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecutionAlreadyCompletedError>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowError
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
				return fmt.Errorf("proto: WorkflowExecutionAlreadyCompletedError: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: WorkflowExecutionAlreadyCompletedError: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipError($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthError
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowExecutionAlreadyCompletedError).XXX_unrecognized = $.appendSlice((m$ as WorkflowExecutionAlreadyCompletedError).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: WorkflowExecutionAlreadyCompletedError | $.VarRef<WorkflowExecutionAlreadyCompletedError> | null = this;
		xxx_messageInfo_WorkflowExecutionAlreadyCompletedError.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionAlreadyCompletedError", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionAlreadyCompletedError")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: WorkflowExecutionAlreadyCompletedError | $.VarRef<WorkflowExecutionAlreadyCompletedError> | null = this;
		if (deterministic) {
			return xxx_messageInfo_WorkflowExecutionAlreadyCompletedError.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionAlreadyCompletedError", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionAlreadyCompletedError")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionAlreadyCompletedError).MarshalToSizedBuffer(b) : WorkflowExecutionAlreadyCompletedError.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: WorkflowExecutionAlreadyCompletedError | $.VarRef<WorkflowExecutionAlreadyCompletedError> | null = this;
		xxx_messageInfo_WorkflowExecutionAlreadyCompletedError.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionAlreadyCompletedError", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionAlreadyCompletedError")), src)
	}

	public XXX_Size(): number {
		const m: WorkflowExecutionAlreadyCompletedError | $.VarRef<WorkflowExecutionAlreadyCompletedError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionAlreadyCompletedError).Size() : WorkflowExecutionAlreadyCompletedError.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: WorkflowExecutionAlreadyCompletedError | $.VarRef<WorkflowExecutionAlreadyCompletedError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionAlreadyCompletedError).Unmarshal(b) : WorkflowExecutionAlreadyCompletedError.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.WorkflowExecutionAlreadyCompletedError",
		() => new WorkflowExecutionAlreadyCompletedError(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		WorkflowExecutionAlreadyCompletedError,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class DomainNotActiveError {
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get CurrentCluster(): string {
		return this._fields.CurrentCluster
	}

	public set CurrentCluster(value: string) {
		this._fields.CurrentCluster = value
	}

	public get ActiveCluster(): string {
		return this._fields.ActiveCluster
	}

	public set ActiveCluster(value: string) {
		this._fields.ActiveCluster = value
	}

	public get ActiveClusters(): $.Slice<string> {
		return this._fields.ActiveClusters
	}

	public set ActiveClusters(value: $.Slice<string>) {
		this._fields.ActiveClusters = value
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
		CurrentCluster: string
		ActiveCluster: string
		ActiveClusters: $.Slice<string>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: string, CurrentCluster?: string, ActiveCluster?: string, ActiveClusters?: $.Slice<string>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			CurrentCluster: init?.CurrentCluster ?? ("" as string),
			ActiveCluster: init?.ActiveCluster ?? ("" as string),
			ActiveClusters: init?.ActiveClusters ?? (null! as $.Slice<string>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DomainNotActiveError {
		return new DomainNotActiveError(this, true)
	}

	public __goscriptAssign(source: DomainNotActiveError): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.CurrentCluster = values.CurrentCluster
		target.ActiveCluster = values.ActiveCluster
		target.ActiveClusters = values.ActiveClusters
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_c8f91786c9aff272, $.arrayToSlice<number>([3])]
	}

	public GetActiveCluster(): string {
		const m: DomainNotActiveError | $.VarRef<DomainNotActiveError> | null = this;
		if (m != null) {
			return $.pointerValue<DomainNotActiveError>(m).ActiveCluster
		}
		return ""
	}

	public GetActiveClusters(): $.Slice<string> {
		const m: DomainNotActiveError | $.VarRef<DomainNotActiveError> | null = this;
		if (m != null) {
			return $.pointerValue<DomainNotActiveError>(m).ActiveClusters
		}
		return null
	}

	public GetCurrentCluster(): string {
		const m: DomainNotActiveError | $.VarRef<DomainNotActiveError> | null = this;
		if (m != null) {
			return $.pointerValue<DomainNotActiveError>(m).CurrentCluster
		}
		return ""
	}

	public GetDomain(): string {
		const m: DomainNotActiveError | $.VarRef<DomainNotActiveError> | null = this;
		if (m != null) {
			return $.pointerValue<DomainNotActiveError>(m).Domain
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DomainNotActiveError | $.VarRef<DomainNotActiveError> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DomainNotActiveError).Size() : DomainNotActiveError.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple3: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DomainNotActiveError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DomainNotActiveError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DomainNotActiveError | $.VarRef<DomainNotActiveError> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DomainNotActiveError).Size() : DomainNotActiveError.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DomainNotActiveError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DomainNotActiveError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DomainNotActiveError | $.VarRef<DomainNotActiveError> | null = this;
		const m$: DomainNotActiveError = m == null ? $.pointerTarget<DomainNotActiveError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DomainNotActiveError>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DomainNotActiveError).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DomainNotActiveError).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DomainNotActiveError).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as DomainNotActiveError).ActiveClusters) > 0) {
			for (let __goscriptSliceWindow4 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as DomainNotActiveError).ActiveClusters) - 1; iNdEx >= 0; iNdEx--) {
				i = i - ($.stringLen($.arrayIndex((m$ as DomainNotActiveError).ActiveClusters!, iNdEx)))
				$.copy($.goSlice(dAtA, i, undefined), $.arrayIndex((m$ as DomainNotActiveError).ActiveClusters!, iNdEx))
				i = encodeVarintError(dAtA, i, $.uint64($.stringLen($.arrayIndex((m$ as DomainNotActiveError).ActiveClusters!, iNdEx))))
				i--;
				;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] = 0x22
			}
		}
		if ($.stringLen((m$ as DomainNotActiveError).ActiveCluster) > 0) {
			i = i - ($.stringLen((m$ as DomainNotActiveError).ActiveCluster))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DomainNotActiveError).ActiveCluster)
			i = encodeVarintError(dAtA, i, $.uint64($.stringLen((m$ as DomainNotActiveError).ActiveCluster)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.stringLen((m$ as DomainNotActiveError).CurrentCluster) > 0) {
			i = i - ($.stringLen((m$ as DomainNotActiveError).CurrentCluster))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DomainNotActiveError).CurrentCluster)
			i = encodeVarintError(dAtA, i, $.uint64($.stringLen((m$ as DomainNotActiveError).CurrentCluster)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as DomainNotActiveError).Domain) > 0) {
			i = i - ($.stringLen((m$ as DomainNotActiveError).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DomainNotActiveError).Domain)
			i = encodeVarintError(dAtA, i, $.uint64($.stringLen((m$ as DomainNotActiveError).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DomainNotActiveError | $.VarRef<DomainNotActiveError> | null = this;
		$.assignStruct($.pointerValue<DomainNotActiveError>(m), $.markAsStructValue(new DomainNotActiveError()))
	}

	public Size(): number {
		const m: DomainNotActiveError | $.VarRef<DomainNotActiveError> | null = this;
		let n: number = 0
		const m$: DomainNotActiveError = m == null ? $.pointerTarget<DomainNotActiveError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DomainNotActiveError>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as DomainNotActiveError).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovError($.uint64(l)))
		}
		l = $.stringLen((m$ as DomainNotActiveError).CurrentCluster)
		if (l > 0) {
			n = n + ((1 + l) + sovError($.uint64(l)))
		}
		l = $.stringLen((m$ as DomainNotActiveError).ActiveCluster)
		if (l > 0) {
			n = n + ((1 + l) + sovError($.uint64(l)))
		}
		if ($.sliceLen((m$ as DomainNotActiveError).ActiveClusters) > 0) {
			for (let __goscriptRangeTarget1 = (m$ as DomainNotActiveError).ActiveClusters, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let s = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
				l = $.stringLen(s)
				n = n + ((1 + l) + sovError($.uint64(l)))
			}
		}
		if ((m$ as DomainNotActiveError).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DomainNotActiveError).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DomainNotActiveError | $.VarRef<DomainNotActiveError> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DomainNotActiveError", /* @__PURE__ */ $.pointerType("apiv1.DomainNotActiveError")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DomainNotActiveError | $.VarRef<DomainNotActiveError> | null = this;
		const m$: DomainNotActiveError = m == null ? $.pointerTarget<DomainNotActiveError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DomainNotActiveError>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow5 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowError
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
				return fmt.Errorf("proto: DomainNotActiveError: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DomainNotActiveError: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowError
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
						return ErrInvalidLengthError
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthError
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DomainNotActiveError).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field CurrentCluster", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowError
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
						return ErrInvalidLengthError
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthError
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DomainNotActiveError).CurrentCluster = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveCluster", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowError
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
						return ErrInvalidLengthError
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthError
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DomainNotActiveError).ActiveCluster = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveClusters", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowError
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
						return ErrInvalidLengthError
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthError
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DomainNotActiveError).ActiveClusters = $.appendOne((m$ as DomainNotActiveError).ActiveClusters, $.bytesToString($.goSlice(dAtA, iNdEx, postIndex)))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipError($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthError
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DomainNotActiveError).XXX_unrecognized = $.appendSlice((m$ as DomainNotActiveError).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: DomainNotActiveError | $.VarRef<DomainNotActiveError> | null = this;
		xxx_messageInfo_DomainNotActiveError.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DomainNotActiveError", /* @__PURE__ */ $.pointerType("apiv1.DomainNotActiveError")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: DomainNotActiveError | $.VarRef<DomainNotActiveError> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DomainNotActiveError.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DomainNotActiveError", /* @__PURE__ */ $.pointerType("apiv1.DomainNotActiveError")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DomainNotActiveError).MarshalToSizedBuffer(b) : DomainNotActiveError.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: DomainNotActiveError | $.VarRef<DomainNotActiveError> | null = this;
		xxx_messageInfo_DomainNotActiveError.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DomainNotActiveError", /* @__PURE__ */ $.pointerType("apiv1.DomainNotActiveError")), src)
	}

	public XXX_Size(): number {
		const m: DomainNotActiveError | $.VarRef<DomainNotActiveError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DomainNotActiveError).Size() : DomainNotActiveError.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DomainNotActiveError | $.VarRef<DomainNotActiveError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DomainNotActiveError).Unmarshal(b) : DomainNotActiveError.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DomainNotActiveError",
		() => new DomainNotActiveError(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActiveCluster", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetActiveClusters", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "GetCurrentCluster", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		DomainNotActiveError,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "CurrentCluster", key: "CurrentCluster", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=current_cluster,json=currentCluster,proto3\" json:\"current_cluster,omitempty\"" }, { name: "ActiveCluster", key: "ActiveCluster", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=active_cluster,json=activeCluster,proto3\" json:\"active_cluster,omitempty\"" }, { name: "ActiveClusters", key: "ActiveClusters", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,4,rep,name=active_clusters,json=activeClusters,proto3\" json:\"active_clusters,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ClientVersionNotSupportedError {
	public get FeatureVersion(): string {
		return this._fields.FeatureVersion
	}

	public set FeatureVersion(value: string) {
		this._fields.FeatureVersion = value
	}

	public get ClientImpl(): string {
		return this._fields.ClientImpl
	}

	public set ClientImpl(value: string) {
		this._fields.ClientImpl = value
	}

	public get SupportedVersions(): string {
		return this._fields.SupportedVersions
	}

	public set SupportedVersions(value: string) {
		this._fields.SupportedVersions = value
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
		FeatureVersion: string
		ClientImpl: string
		SupportedVersions: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{FeatureVersion?: string, ClientImpl?: string, SupportedVersions?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			FeatureVersion: init?.FeatureVersion ?? ("" as string),
			ClientImpl: init?.ClientImpl ?? ("" as string),
			SupportedVersions: init?.SupportedVersions ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientVersionNotSupportedError {
		return new ClientVersionNotSupportedError(this, true)
	}

	public __goscriptAssign(source: ClientVersionNotSupportedError): void {
		const target = this._fields
		const values = source._fields
		target.FeatureVersion = values.FeatureVersion
		target.ClientImpl = values.ClientImpl
		target.SupportedVersions = values.SupportedVersions
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_c8f91786c9aff272, $.arrayToSlice<number>([4])]
	}

	public GetClientImpl(): string {
		const m: ClientVersionNotSupportedError | $.VarRef<ClientVersionNotSupportedError> | null = this;
		if (m != null) {
			return $.pointerValue<ClientVersionNotSupportedError>(m).ClientImpl
		}
		return ""
	}

	public GetFeatureVersion(): string {
		const m: ClientVersionNotSupportedError | $.VarRef<ClientVersionNotSupportedError> | null = this;
		if (m != null) {
			return $.pointerValue<ClientVersionNotSupportedError>(m).FeatureVersion
		}
		return ""
	}

	public GetSupportedVersions(): string {
		const m: ClientVersionNotSupportedError | $.VarRef<ClientVersionNotSupportedError> | null = this;
		if (m != null) {
			return $.pointerValue<ClientVersionNotSupportedError>(m).SupportedVersions
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ClientVersionNotSupportedError | $.VarRef<ClientVersionNotSupportedError> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClientVersionNotSupportedError).Size() : ClientVersionNotSupportedError.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClientVersionNotSupportedError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ClientVersionNotSupportedError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ClientVersionNotSupportedError | $.VarRef<ClientVersionNotSupportedError> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClientVersionNotSupportedError).Size() : ClientVersionNotSupportedError.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClientVersionNotSupportedError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ClientVersionNotSupportedError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ClientVersionNotSupportedError | $.VarRef<ClientVersionNotSupportedError> | null = this;
		const m$: ClientVersionNotSupportedError = m == null ? $.pointerTarget<ClientVersionNotSupportedError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ClientVersionNotSupportedError>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ClientVersionNotSupportedError).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ClientVersionNotSupportedError).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ClientVersionNotSupportedError).XXX_unrecognized)
		}
		if ($.stringLen((m$ as ClientVersionNotSupportedError).SupportedVersions) > 0) {
			i = i - ($.stringLen((m$ as ClientVersionNotSupportedError).SupportedVersions))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ClientVersionNotSupportedError).SupportedVersions)
			i = encodeVarintError(dAtA, i, $.uint64($.stringLen((m$ as ClientVersionNotSupportedError).SupportedVersions)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.stringLen((m$ as ClientVersionNotSupportedError).ClientImpl) > 0) {
			i = i - ($.stringLen((m$ as ClientVersionNotSupportedError).ClientImpl))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ClientVersionNotSupportedError).ClientImpl)
			i = encodeVarintError(dAtA, i, $.uint64($.stringLen((m$ as ClientVersionNotSupportedError).ClientImpl)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as ClientVersionNotSupportedError).FeatureVersion) > 0) {
			i = i - ($.stringLen((m$ as ClientVersionNotSupportedError).FeatureVersion))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ClientVersionNotSupportedError).FeatureVersion)
			i = encodeVarintError(dAtA, i, $.uint64($.stringLen((m$ as ClientVersionNotSupportedError).FeatureVersion)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ClientVersionNotSupportedError | $.VarRef<ClientVersionNotSupportedError> | null = this;
		$.assignStruct($.pointerValue<ClientVersionNotSupportedError>(m), $.markAsStructValue(new ClientVersionNotSupportedError()))
	}

	public Size(): number {
		const m: ClientVersionNotSupportedError | $.VarRef<ClientVersionNotSupportedError> | null = this;
		let n: number = 0
		const m$: ClientVersionNotSupportedError = m == null ? $.pointerTarget<ClientVersionNotSupportedError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ClientVersionNotSupportedError>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ClientVersionNotSupportedError).FeatureVersion)
		if (l > 0) {
			n = n + ((1 + l) + sovError($.uint64(l)))
		}
		l = $.stringLen((m$ as ClientVersionNotSupportedError).ClientImpl)
		if (l > 0) {
			n = n + ((1 + l) + sovError($.uint64(l)))
		}
		l = $.stringLen((m$ as ClientVersionNotSupportedError).SupportedVersions)
		if (l > 0) {
			n = n + ((1 + l) + sovError($.uint64(l)))
		}
		if ((m$ as ClientVersionNotSupportedError).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ClientVersionNotSupportedError).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ClientVersionNotSupportedError | $.VarRef<ClientVersionNotSupportedError> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ClientVersionNotSupportedError", /* @__PURE__ */ $.pointerType("apiv1.ClientVersionNotSupportedError")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ClientVersionNotSupportedError | $.VarRef<ClientVersionNotSupportedError> | null = this;
		const m$: ClientVersionNotSupportedError = m == null ? $.pointerTarget<ClientVersionNotSupportedError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ClientVersionNotSupportedError>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow6 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowError
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
				return fmt.Errorf("proto: ClientVersionNotSupportedError: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ClientVersionNotSupportedError: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field FeatureVersion", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowError
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
						return ErrInvalidLengthError
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthError
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ClientVersionNotSupportedError).FeatureVersion = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ClientImpl", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowError
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
						return ErrInvalidLengthError
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthError
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ClientVersionNotSupportedError).ClientImpl = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field SupportedVersions", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowError
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
						return ErrInvalidLengthError
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthError
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ClientVersionNotSupportedError).SupportedVersions = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipError($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthError
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ClientVersionNotSupportedError).XXX_unrecognized = $.appendSlice((m$ as ClientVersionNotSupportedError).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ClientVersionNotSupportedError | $.VarRef<ClientVersionNotSupportedError> | null = this;
		xxx_messageInfo_ClientVersionNotSupportedError.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ClientVersionNotSupportedError", /* @__PURE__ */ $.pointerType("apiv1.ClientVersionNotSupportedError")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ClientVersionNotSupportedError | $.VarRef<ClientVersionNotSupportedError> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ClientVersionNotSupportedError.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ClientVersionNotSupportedError", /* @__PURE__ */ $.pointerType("apiv1.ClientVersionNotSupportedError")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClientVersionNotSupportedError).MarshalToSizedBuffer(b) : ClientVersionNotSupportedError.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ClientVersionNotSupportedError | $.VarRef<ClientVersionNotSupportedError> | null = this;
		xxx_messageInfo_ClientVersionNotSupportedError.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ClientVersionNotSupportedError", /* @__PURE__ */ $.pointerType("apiv1.ClientVersionNotSupportedError")), src)
	}

	public XXX_Size(): number {
		const m: ClientVersionNotSupportedError | $.VarRef<ClientVersionNotSupportedError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClientVersionNotSupportedError).Size() : ClientVersionNotSupportedError.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ClientVersionNotSupportedError | $.VarRef<ClientVersionNotSupportedError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClientVersionNotSupportedError).Unmarshal(b) : ClientVersionNotSupportedError.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ClientVersionNotSupportedError",
		() => new ClientVersionNotSupportedError(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetClientImpl", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetFeatureVersion", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetSupportedVersions", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ClientVersionNotSupportedError,
		() => [{ name: "FeatureVersion", key: "FeatureVersion", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=feature_version,json=featureVersion,proto3\" json:\"feature_version,omitempty\"" }, { name: "ClientImpl", key: "ClientImpl", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=client_impl,json=clientImpl,proto3\" json:\"client_impl,omitempty\"" }, { name: "SupportedVersions", key: "SupportedVersions", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=supported_versions,json=supportedVersions,proto3\" json:\"supported_versions,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class FeatureNotEnabledError {
	public get FeatureFlag(): string {
		return this._fields.FeatureFlag
	}

	public set FeatureFlag(value: string) {
		this._fields.FeatureFlag = value
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
		FeatureFlag: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{FeatureFlag?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			FeatureFlag: init?.FeatureFlag ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FeatureNotEnabledError {
		return new FeatureNotEnabledError(this, true)
	}

	public __goscriptAssign(source: FeatureNotEnabledError): void {
		const target = this._fields
		const values = source._fields
		target.FeatureFlag = values.FeatureFlag
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_c8f91786c9aff272, $.arrayToSlice<number>([5])]
	}

	public GetFeatureFlag(): string {
		const m: FeatureNotEnabledError | $.VarRef<FeatureNotEnabledError> | null = this;
		if (m != null) {
			return $.pointerValue<FeatureNotEnabledError>(m).FeatureFlag
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: FeatureNotEnabledError | $.VarRef<FeatureNotEnabledError> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FeatureNotEnabledError).Size() : FeatureNotEnabledError.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple5: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FeatureNotEnabledError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FeatureNotEnabledError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FeatureNotEnabledError | $.VarRef<FeatureNotEnabledError> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FeatureNotEnabledError).Size() : FeatureNotEnabledError.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FeatureNotEnabledError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FeatureNotEnabledError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FeatureNotEnabledError | $.VarRef<FeatureNotEnabledError> | null = this;
		const m$: FeatureNotEnabledError = m == null ? $.pointerTarget<FeatureNotEnabledError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FeatureNotEnabledError>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as FeatureNotEnabledError).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as FeatureNotEnabledError).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as FeatureNotEnabledError).XXX_unrecognized)
		}
		if ($.stringLen((m$ as FeatureNotEnabledError).FeatureFlag) > 0) {
			i = i - ($.stringLen((m$ as FeatureNotEnabledError).FeatureFlag))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as FeatureNotEnabledError).FeatureFlag)
			i = encodeVarintError(dAtA, i, $.uint64($.stringLen((m$ as FeatureNotEnabledError).FeatureFlag)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: FeatureNotEnabledError | $.VarRef<FeatureNotEnabledError> | null = this;
		$.assignStruct($.pointerValue<FeatureNotEnabledError>(m), $.markAsStructValue(new FeatureNotEnabledError()))
	}

	public Size(): number {
		const m: FeatureNotEnabledError | $.VarRef<FeatureNotEnabledError> | null = this;
		let n: number = 0
		const m$: FeatureNotEnabledError = m == null ? $.pointerTarget<FeatureNotEnabledError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FeatureNotEnabledError>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as FeatureNotEnabledError).FeatureFlag)
		if (l > 0) {
			n = n + ((1 + l) + sovError($.uint64(l)))
		}
		if ((m$ as FeatureNotEnabledError).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as FeatureNotEnabledError).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: FeatureNotEnabledError | $.VarRef<FeatureNotEnabledError> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.FeatureNotEnabledError", /* @__PURE__ */ $.pointerType("apiv1.FeatureNotEnabledError")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: FeatureNotEnabledError | $.VarRef<FeatureNotEnabledError> | null = this;
		const m$: FeatureNotEnabledError = m == null ? $.pointerTarget<FeatureNotEnabledError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FeatureNotEnabledError>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow7 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowError
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
				return fmt.Errorf("proto: FeatureNotEnabledError: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: FeatureNotEnabledError: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field FeatureFlag", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowError
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
						return ErrInvalidLengthError
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthError
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as FeatureNotEnabledError).FeatureFlag = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipError($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthError
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as FeatureNotEnabledError).XXX_unrecognized = $.appendSlice((m$ as FeatureNotEnabledError).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: FeatureNotEnabledError | $.VarRef<FeatureNotEnabledError> | null = this;
		xxx_messageInfo_FeatureNotEnabledError.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.FeatureNotEnabledError", /* @__PURE__ */ $.pointerType("apiv1.FeatureNotEnabledError")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: FeatureNotEnabledError | $.VarRef<FeatureNotEnabledError> | null = this;
		if (deterministic) {
			return xxx_messageInfo_FeatureNotEnabledError.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.FeatureNotEnabledError", /* @__PURE__ */ $.pointerType("apiv1.FeatureNotEnabledError")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FeatureNotEnabledError).MarshalToSizedBuffer(b) : FeatureNotEnabledError.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: FeatureNotEnabledError | $.VarRef<FeatureNotEnabledError> | null = this;
		xxx_messageInfo_FeatureNotEnabledError.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.FeatureNotEnabledError", /* @__PURE__ */ $.pointerType("apiv1.FeatureNotEnabledError")), src)
	}

	public XXX_Size(): number {
		const m: FeatureNotEnabledError | $.VarRef<FeatureNotEnabledError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FeatureNotEnabledError).Size() : FeatureNotEnabledError.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: FeatureNotEnabledError | $.VarRef<FeatureNotEnabledError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FeatureNotEnabledError).Unmarshal(b) : FeatureNotEnabledError.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FeatureNotEnabledError",
		() => new FeatureNotEnabledError(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetFeatureFlag", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		FeatureNotEnabledError,
		() => [{ name: "FeatureFlag", key: "FeatureFlag", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=feature_flag,json=featureFlag,proto3\" json:\"feature_flag,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class CancellationAlreadyRequestedError {
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

	public clone(): CancellationAlreadyRequestedError {
		return new CancellationAlreadyRequestedError(this, true)
	}

	public __goscriptAssign(source: CancellationAlreadyRequestedError): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_c8f91786c9aff272, $.arrayToSlice<number>([6])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: CancellationAlreadyRequestedError | $.VarRef<CancellationAlreadyRequestedError> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancellationAlreadyRequestedError).Size() : CancellationAlreadyRequestedError.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple6: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancellationAlreadyRequestedError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : CancellationAlreadyRequestedError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: CancellationAlreadyRequestedError | $.VarRef<CancellationAlreadyRequestedError> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancellationAlreadyRequestedError).Size() : CancellationAlreadyRequestedError.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancellationAlreadyRequestedError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : CancellationAlreadyRequestedError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: CancellationAlreadyRequestedError | $.VarRef<CancellationAlreadyRequestedError> | null = this;
		const m$: CancellationAlreadyRequestedError = m == null ? $.pointerTarget<CancellationAlreadyRequestedError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CancellationAlreadyRequestedError>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as CancellationAlreadyRequestedError).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as CancellationAlreadyRequestedError).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as CancellationAlreadyRequestedError).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: CancellationAlreadyRequestedError | $.VarRef<CancellationAlreadyRequestedError> | null = this;
		$.assignStruct($.pointerValue<CancellationAlreadyRequestedError>(m), new CancellationAlreadyRequestedError(undefined, true))
	}

	public Size(): number {
		const m: CancellationAlreadyRequestedError | $.VarRef<CancellationAlreadyRequestedError> | null = this;
		let n: number = 0
		const m$: CancellationAlreadyRequestedError = m == null ? $.pointerTarget<CancellationAlreadyRequestedError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CancellationAlreadyRequestedError>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as CancellationAlreadyRequestedError).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as CancellationAlreadyRequestedError).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: CancellationAlreadyRequestedError | $.VarRef<CancellationAlreadyRequestedError> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.CancellationAlreadyRequestedError", /* @__PURE__ */ $.pointerType("apiv1.CancellationAlreadyRequestedError")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: CancellationAlreadyRequestedError | $.VarRef<CancellationAlreadyRequestedError> | null = this;
		const m$: CancellationAlreadyRequestedError = m == null ? $.pointerTarget<CancellationAlreadyRequestedError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<CancellationAlreadyRequestedError>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow8 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowError
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
				return fmt.Errorf("proto: CancellationAlreadyRequestedError: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: CancellationAlreadyRequestedError: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipError($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthError
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as CancellationAlreadyRequestedError).XXX_unrecognized = $.appendSlice((m$ as CancellationAlreadyRequestedError).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: CancellationAlreadyRequestedError | $.VarRef<CancellationAlreadyRequestedError> | null = this;
		xxx_messageInfo_CancellationAlreadyRequestedError.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.CancellationAlreadyRequestedError", /* @__PURE__ */ $.pointerType("apiv1.CancellationAlreadyRequestedError")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: CancellationAlreadyRequestedError | $.VarRef<CancellationAlreadyRequestedError> | null = this;
		if (deterministic) {
			return xxx_messageInfo_CancellationAlreadyRequestedError.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.CancellationAlreadyRequestedError", /* @__PURE__ */ $.pointerType("apiv1.CancellationAlreadyRequestedError")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancellationAlreadyRequestedError).MarshalToSizedBuffer(b) : CancellationAlreadyRequestedError.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: CancellationAlreadyRequestedError | $.VarRef<CancellationAlreadyRequestedError> | null = this;
		xxx_messageInfo_CancellationAlreadyRequestedError.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.CancellationAlreadyRequestedError", /* @__PURE__ */ $.pointerType("apiv1.CancellationAlreadyRequestedError")), src)
	}

	public XXX_Size(): number {
		const m: CancellationAlreadyRequestedError | $.VarRef<CancellationAlreadyRequestedError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancellationAlreadyRequestedError).Size() : CancellationAlreadyRequestedError.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: CancellationAlreadyRequestedError | $.VarRef<CancellationAlreadyRequestedError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as CancellationAlreadyRequestedError).Unmarshal(b) : CancellationAlreadyRequestedError.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.CancellationAlreadyRequestedError",
		() => new CancellationAlreadyRequestedError(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		CancellationAlreadyRequestedError,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class DomainAlreadyExistsError {
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

	public clone(): DomainAlreadyExistsError {
		return new DomainAlreadyExistsError(this, true)
	}

	public __goscriptAssign(source: DomainAlreadyExistsError): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_c8f91786c9aff272, $.arrayToSlice<number>([7])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DomainAlreadyExistsError | $.VarRef<DomainAlreadyExistsError> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DomainAlreadyExistsError).Size() : DomainAlreadyExistsError.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple7: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DomainAlreadyExistsError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DomainAlreadyExistsError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DomainAlreadyExistsError | $.VarRef<DomainAlreadyExistsError> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DomainAlreadyExistsError).Size() : DomainAlreadyExistsError.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DomainAlreadyExistsError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DomainAlreadyExistsError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DomainAlreadyExistsError | $.VarRef<DomainAlreadyExistsError> | null = this;
		const m$: DomainAlreadyExistsError = m == null ? $.pointerTarget<DomainAlreadyExistsError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DomainAlreadyExistsError>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DomainAlreadyExistsError).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DomainAlreadyExistsError).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DomainAlreadyExistsError).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DomainAlreadyExistsError | $.VarRef<DomainAlreadyExistsError> | null = this;
		$.assignStruct($.pointerValue<DomainAlreadyExistsError>(m), new DomainAlreadyExistsError(undefined, true))
	}

	public Size(): number {
		const m: DomainAlreadyExistsError | $.VarRef<DomainAlreadyExistsError> | null = this;
		let n: number = 0
		const m$: DomainAlreadyExistsError = m == null ? $.pointerTarget<DomainAlreadyExistsError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DomainAlreadyExistsError>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as DomainAlreadyExistsError).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DomainAlreadyExistsError).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DomainAlreadyExistsError | $.VarRef<DomainAlreadyExistsError> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DomainAlreadyExistsError", /* @__PURE__ */ $.pointerType("apiv1.DomainAlreadyExistsError")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DomainAlreadyExistsError | $.VarRef<DomainAlreadyExistsError> | null = this;
		const m$: DomainAlreadyExistsError = m == null ? $.pointerTarget<DomainAlreadyExistsError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DomainAlreadyExistsError>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow9 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowError
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
				return fmt.Errorf("proto: DomainAlreadyExistsError: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DomainAlreadyExistsError: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipError($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthError
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DomainAlreadyExistsError).XXX_unrecognized = $.appendSlice((m$ as DomainAlreadyExistsError).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: DomainAlreadyExistsError | $.VarRef<DomainAlreadyExistsError> | null = this;
		xxx_messageInfo_DomainAlreadyExistsError.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DomainAlreadyExistsError", /* @__PURE__ */ $.pointerType("apiv1.DomainAlreadyExistsError")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: DomainAlreadyExistsError | $.VarRef<DomainAlreadyExistsError> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DomainAlreadyExistsError.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DomainAlreadyExistsError", /* @__PURE__ */ $.pointerType("apiv1.DomainAlreadyExistsError")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DomainAlreadyExistsError).MarshalToSizedBuffer(b) : DomainAlreadyExistsError.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: DomainAlreadyExistsError | $.VarRef<DomainAlreadyExistsError> | null = this;
		xxx_messageInfo_DomainAlreadyExistsError.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DomainAlreadyExistsError", /* @__PURE__ */ $.pointerType("apiv1.DomainAlreadyExistsError")), src)
	}

	public XXX_Size(): number {
		const m: DomainAlreadyExistsError | $.VarRef<DomainAlreadyExistsError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DomainAlreadyExistsError).Size() : DomainAlreadyExistsError.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DomainAlreadyExistsError | $.VarRef<DomainAlreadyExistsError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DomainAlreadyExistsError).Unmarshal(b) : DomainAlreadyExistsError.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DomainAlreadyExistsError",
		() => new DomainAlreadyExistsError(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		DomainAlreadyExistsError,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class LimitExceededError {
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

	public clone(): LimitExceededError {
		return new LimitExceededError(this, true)
	}

	public __goscriptAssign(source: LimitExceededError): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_c8f91786c9aff272, $.arrayToSlice<number>([8])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: LimitExceededError | $.VarRef<LimitExceededError> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as LimitExceededError).Size() : LimitExceededError.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple8: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as LimitExceededError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : LimitExceededError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: LimitExceededError | $.VarRef<LimitExceededError> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as LimitExceededError).Size() : LimitExceededError.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as LimitExceededError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : LimitExceededError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: LimitExceededError | $.VarRef<LimitExceededError> | null = this;
		const m$: LimitExceededError = m == null ? $.pointerTarget<LimitExceededError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<LimitExceededError>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as LimitExceededError).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as LimitExceededError).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as LimitExceededError).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: LimitExceededError | $.VarRef<LimitExceededError> | null = this;
		$.assignStruct($.pointerValue<LimitExceededError>(m), new LimitExceededError(undefined, true))
	}

	public Size(): number {
		const m: LimitExceededError | $.VarRef<LimitExceededError> | null = this;
		let n: number = 0
		const m$: LimitExceededError = m == null ? $.pointerTarget<LimitExceededError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<LimitExceededError>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as LimitExceededError).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as LimitExceededError).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: LimitExceededError | $.VarRef<LimitExceededError> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.LimitExceededError", /* @__PURE__ */ $.pointerType("apiv1.LimitExceededError")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: LimitExceededError | $.VarRef<LimitExceededError> | null = this;
		const m$: LimitExceededError = m == null ? $.pointerTarget<LimitExceededError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<LimitExceededError>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow10 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowError
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
				return fmt.Errorf("proto: LimitExceededError: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: LimitExceededError: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipError($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthError
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as LimitExceededError).XXX_unrecognized = $.appendSlice((m$ as LimitExceededError).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: LimitExceededError | $.VarRef<LimitExceededError> | null = this;
		xxx_messageInfo_LimitExceededError.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.LimitExceededError", /* @__PURE__ */ $.pointerType("apiv1.LimitExceededError")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: LimitExceededError | $.VarRef<LimitExceededError> | null = this;
		if (deterministic) {
			return xxx_messageInfo_LimitExceededError.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.LimitExceededError", /* @__PURE__ */ $.pointerType("apiv1.LimitExceededError")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as LimitExceededError).MarshalToSizedBuffer(b) : LimitExceededError.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: LimitExceededError | $.VarRef<LimitExceededError> | null = this;
		xxx_messageInfo_LimitExceededError.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.LimitExceededError", /* @__PURE__ */ $.pointerType("apiv1.LimitExceededError")), src)
	}

	public XXX_Size(): number {
		const m: LimitExceededError | $.VarRef<LimitExceededError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as LimitExceededError).Size() : LimitExceededError.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: LimitExceededError | $.VarRef<LimitExceededError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as LimitExceededError).Unmarshal(b) : LimitExceededError.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.LimitExceededError",
		() => new LimitExceededError(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		LimitExceededError,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class QueryFailedError {
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

	public clone(): QueryFailedError {
		return new QueryFailedError(this, true)
	}

	public __goscriptAssign(source: QueryFailedError): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_c8f91786c9aff272, $.arrayToSlice<number>([9])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: QueryFailedError | $.VarRef<QueryFailedError> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryFailedError).Size() : QueryFailedError.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple9: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryFailedError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : QueryFailedError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: QueryFailedError | $.VarRef<QueryFailedError> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryFailedError).Size() : QueryFailedError.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryFailedError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : QueryFailedError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: QueryFailedError | $.VarRef<QueryFailedError> | null = this;
		const m$: QueryFailedError = m == null ? $.pointerTarget<QueryFailedError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QueryFailedError>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as QueryFailedError).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as QueryFailedError).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as QueryFailedError).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: QueryFailedError | $.VarRef<QueryFailedError> | null = this;
		$.assignStruct($.pointerValue<QueryFailedError>(m), new QueryFailedError(undefined, true))
	}

	public Size(): number {
		const m: QueryFailedError | $.VarRef<QueryFailedError> | null = this;
		let n: number = 0
		const m$: QueryFailedError = m == null ? $.pointerTarget<QueryFailedError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QueryFailedError>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as QueryFailedError).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as QueryFailedError).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: QueryFailedError | $.VarRef<QueryFailedError> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.QueryFailedError", /* @__PURE__ */ $.pointerType("apiv1.QueryFailedError")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: QueryFailedError | $.VarRef<QueryFailedError> | null = this;
		const m$: QueryFailedError = m == null ? $.pointerTarget<QueryFailedError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<QueryFailedError>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow11 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowError
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
				return fmt.Errorf("proto: QueryFailedError: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: QueryFailedError: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipError($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthError
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as QueryFailedError).XXX_unrecognized = $.appendSlice((m$ as QueryFailedError).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: QueryFailedError | $.VarRef<QueryFailedError> | null = this;
		xxx_messageInfo_QueryFailedError.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.QueryFailedError", /* @__PURE__ */ $.pointerType("apiv1.QueryFailedError")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: QueryFailedError | $.VarRef<QueryFailedError> | null = this;
		if (deterministic) {
			return xxx_messageInfo_QueryFailedError.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.QueryFailedError", /* @__PURE__ */ $.pointerType("apiv1.QueryFailedError")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryFailedError).MarshalToSizedBuffer(b) : QueryFailedError.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: QueryFailedError | $.VarRef<QueryFailedError> | null = this;
		xxx_messageInfo_QueryFailedError.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.QueryFailedError", /* @__PURE__ */ $.pointerType("apiv1.QueryFailedError")), src)
	}

	public XXX_Size(): number {
		const m: QueryFailedError | $.VarRef<QueryFailedError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryFailedError).Size() : QueryFailedError.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: QueryFailedError | $.VarRef<QueryFailedError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as QueryFailedError).Unmarshal(b) : QueryFailedError.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.QueryFailedError",
		() => new QueryFailedError(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		QueryFailedError,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ServiceBusyError {
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
		Reason: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Reason?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Reason: init?.Reason ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServiceBusyError {
		return new ServiceBusyError(this, true)
	}

	public __goscriptAssign(source: ServiceBusyError): void {
		const target = this._fields
		const values = source._fields
		target.Reason = values.Reason
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_c8f91786c9aff272, $.arrayToSlice<number>([10])]
	}

	public GetReason(): string {
		const m: ServiceBusyError | $.VarRef<ServiceBusyError> | null = this;
		if (m != null) {
			return $.pointerValue<ServiceBusyError>(m).Reason
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ServiceBusyError | $.VarRef<ServiceBusyError> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ServiceBusyError).Size() : ServiceBusyError.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple10: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ServiceBusyError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ServiceBusyError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple10[0]
		err = __goscriptTuple10[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ServiceBusyError | $.VarRef<ServiceBusyError> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ServiceBusyError).Size() : ServiceBusyError.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ServiceBusyError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ServiceBusyError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ServiceBusyError | $.VarRef<ServiceBusyError> | null = this;
		const m$: ServiceBusyError = m == null ? $.pointerTarget<ServiceBusyError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ServiceBusyError>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ServiceBusyError).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ServiceBusyError).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ServiceBusyError).XXX_unrecognized)
		}
		if ($.stringLen((m$ as ServiceBusyError).Reason) > 0) {
			i = i - ($.stringLen((m$ as ServiceBusyError).Reason))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ServiceBusyError).Reason)
			i = encodeVarintError(dAtA, i, $.uint64($.stringLen((m$ as ServiceBusyError).Reason)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ServiceBusyError | $.VarRef<ServiceBusyError> | null = this;
		$.assignStruct($.pointerValue<ServiceBusyError>(m), $.markAsStructValue(new ServiceBusyError()))
	}

	public Size(): number {
		const m: ServiceBusyError | $.VarRef<ServiceBusyError> | null = this;
		let n: number = 0
		const m$: ServiceBusyError = m == null ? $.pointerTarget<ServiceBusyError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ServiceBusyError>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ServiceBusyError).Reason)
		if (l > 0) {
			n = n + ((1 + l) + sovError($.uint64(l)))
		}
		if ((m$ as ServiceBusyError).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ServiceBusyError).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ServiceBusyError | $.VarRef<ServiceBusyError> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ServiceBusyError", /* @__PURE__ */ $.pointerType("apiv1.ServiceBusyError")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ServiceBusyError | $.VarRef<ServiceBusyError> | null = this;
		const m$: ServiceBusyError = m == null ? $.pointerTarget<ServiceBusyError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ServiceBusyError>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow12 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowError
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
				return fmt.Errorf("proto: ServiceBusyError: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ServiceBusyError: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowError
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
						return ErrInvalidLengthError
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthError
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ServiceBusyError).Reason = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipError($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthError
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ServiceBusyError).XXX_unrecognized = $.appendSlice((m$ as ServiceBusyError).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ServiceBusyError | $.VarRef<ServiceBusyError> | null = this;
		xxx_messageInfo_ServiceBusyError.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ServiceBusyError", /* @__PURE__ */ $.pointerType("apiv1.ServiceBusyError")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ServiceBusyError | $.VarRef<ServiceBusyError> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ServiceBusyError.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ServiceBusyError", /* @__PURE__ */ $.pointerType("apiv1.ServiceBusyError")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ServiceBusyError).MarshalToSizedBuffer(b) : ServiceBusyError.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ServiceBusyError | $.VarRef<ServiceBusyError> | null = this;
		xxx_messageInfo_ServiceBusyError.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ServiceBusyError", /* @__PURE__ */ $.pointerType("apiv1.ServiceBusyError")), src)
	}

	public XXX_Size(): number {
		const m: ServiceBusyError | $.VarRef<ServiceBusyError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ServiceBusyError).Size() : ServiceBusyError.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ServiceBusyError | $.VarRef<ServiceBusyError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ServiceBusyError).Unmarshal(b) : ServiceBusyError.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ServiceBusyError",
		() => new ServiceBusyError(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetReason", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ServiceBusyError,
		() => [{ name: "Reason", key: "Reason", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=reason,proto3\" json:\"reason,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class StickyWorkerUnavailableError {
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

	public clone(): StickyWorkerUnavailableError {
		return new StickyWorkerUnavailableError(this, true)
	}

	public __goscriptAssign(source: StickyWorkerUnavailableError): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_c8f91786c9aff272, $.arrayToSlice<number>([11])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: StickyWorkerUnavailableError | $.VarRef<StickyWorkerUnavailableError> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StickyWorkerUnavailableError).Size() : StickyWorkerUnavailableError.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple11: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StickyWorkerUnavailableError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StickyWorkerUnavailableError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple11[0]
		err = __goscriptTuple11[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StickyWorkerUnavailableError | $.VarRef<StickyWorkerUnavailableError> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StickyWorkerUnavailableError).Size() : StickyWorkerUnavailableError.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StickyWorkerUnavailableError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StickyWorkerUnavailableError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StickyWorkerUnavailableError | $.VarRef<StickyWorkerUnavailableError> | null = this;
		const m$: StickyWorkerUnavailableError = m == null ? $.pointerTarget<StickyWorkerUnavailableError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StickyWorkerUnavailableError>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as StickyWorkerUnavailableError).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as StickyWorkerUnavailableError).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StickyWorkerUnavailableError).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: StickyWorkerUnavailableError | $.VarRef<StickyWorkerUnavailableError> | null = this;
		$.assignStruct($.pointerValue<StickyWorkerUnavailableError>(m), new StickyWorkerUnavailableError(undefined, true))
	}

	public Size(): number {
		const m: StickyWorkerUnavailableError | $.VarRef<StickyWorkerUnavailableError> | null = this;
		let n: number = 0
		const m$: StickyWorkerUnavailableError = m == null ? $.pointerTarget<StickyWorkerUnavailableError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StickyWorkerUnavailableError>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as StickyWorkerUnavailableError).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as StickyWorkerUnavailableError).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: StickyWorkerUnavailableError | $.VarRef<StickyWorkerUnavailableError> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.StickyWorkerUnavailableError", /* @__PURE__ */ $.pointerType("apiv1.StickyWorkerUnavailableError")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: StickyWorkerUnavailableError | $.VarRef<StickyWorkerUnavailableError> | null = this;
		const m$: StickyWorkerUnavailableError = m == null ? $.pointerTarget<StickyWorkerUnavailableError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StickyWorkerUnavailableError>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow13 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowError
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
				return fmt.Errorf("proto: StickyWorkerUnavailableError: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: StickyWorkerUnavailableError: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipError($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthError
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StickyWorkerUnavailableError).XXX_unrecognized = $.appendSlice((m$ as StickyWorkerUnavailableError).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: StickyWorkerUnavailableError | $.VarRef<StickyWorkerUnavailableError> | null = this;
		xxx_messageInfo_StickyWorkerUnavailableError.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.StickyWorkerUnavailableError", /* @__PURE__ */ $.pointerType("apiv1.StickyWorkerUnavailableError")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: StickyWorkerUnavailableError | $.VarRef<StickyWorkerUnavailableError> | null = this;
		if (deterministic) {
			return xxx_messageInfo_StickyWorkerUnavailableError.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.StickyWorkerUnavailableError", /* @__PURE__ */ $.pointerType("apiv1.StickyWorkerUnavailableError")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StickyWorkerUnavailableError).MarshalToSizedBuffer(b) : StickyWorkerUnavailableError.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: StickyWorkerUnavailableError | $.VarRef<StickyWorkerUnavailableError> | null = this;
		xxx_messageInfo_StickyWorkerUnavailableError.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.StickyWorkerUnavailableError", /* @__PURE__ */ $.pointerType("apiv1.StickyWorkerUnavailableError")), src)
	}

	public XXX_Size(): number {
		const m: StickyWorkerUnavailableError | $.VarRef<StickyWorkerUnavailableError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StickyWorkerUnavailableError).Size() : StickyWorkerUnavailableError.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: StickyWorkerUnavailableError | $.VarRef<StickyWorkerUnavailableError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StickyWorkerUnavailableError).Unmarshal(b) : StickyWorkerUnavailableError.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.StickyWorkerUnavailableError",
		() => new StickyWorkerUnavailableError(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		StickyWorkerUnavailableError,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ReadOnlyPartitionError {
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

	public clone(): ReadOnlyPartitionError {
		return new ReadOnlyPartitionError(this, true)
	}

	public __goscriptAssign(source: ReadOnlyPartitionError): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_c8f91786c9aff272, $.arrayToSlice<number>([12])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ReadOnlyPartitionError | $.VarRef<ReadOnlyPartitionError> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ReadOnlyPartitionError).Size() : ReadOnlyPartitionError.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple12: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ReadOnlyPartitionError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ReadOnlyPartitionError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ReadOnlyPartitionError | $.VarRef<ReadOnlyPartitionError> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ReadOnlyPartitionError).Size() : ReadOnlyPartitionError.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ReadOnlyPartitionError).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ReadOnlyPartitionError.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ReadOnlyPartitionError | $.VarRef<ReadOnlyPartitionError> | null = this;
		const m$: ReadOnlyPartitionError = m == null ? $.pointerTarget<ReadOnlyPartitionError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ReadOnlyPartitionError>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ReadOnlyPartitionError).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ReadOnlyPartitionError).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ReadOnlyPartitionError).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ReadOnlyPartitionError | $.VarRef<ReadOnlyPartitionError> | null = this;
		$.assignStruct($.pointerValue<ReadOnlyPartitionError>(m), new ReadOnlyPartitionError(undefined, true))
	}

	public Size(): number {
		const m: ReadOnlyPartitionError | $.VarRef<ReadOnlyPartitionError> | null = this;
		let n: number = 0
		const m$: ReadOnlyPartitionError = m == null ? $.pointerTarget<ReadOnlyPartitionError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ReadOnlyPartitionError>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as ReadOnlyPartitionError).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ReadOnlyPartitionError).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ReadOnlyPartitionError | $.VarRef<ReadOnlyPartitionError> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ReadOnlyPartitionError", /* @__PURE__ */ $.pointerType("apiv1.ReadOnlyPartitionError")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ReadOnlyPartitionError | $.VarRef<ReadOnlyPartitionError> | null = this;
		const m$: ReadOnlyPartitionError = m == null ? $.pointerTarget<ReadOnlyPartitionError>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ReadOnlyPartitionError>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow14 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowError
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
				return fmt.Errorf("proto: ReadOnlyPartitionError: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ReadOnlyPartitionError: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipError($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthError
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ReadOnlyPartitionError).XXX_unrecognized = $.appendSlice((m$ as ReadOnlyPartitionError).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ReadOnlyPartitionError | $.VarRef<ReadOnlyPartitionError> | null = this;
		xxx_messageInfo_ReadOnlyPartitionError.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ReadOnlyPartitionError", /* @__PURE__ */ $.pointerType("apiv1.ReadOnlyPartitionError")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ReadOnlyPartitionError | $.VarRef<ReadOnlyPartitionError> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ReadOnlyPartitionError.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ReadOnlyPartitionError", /* @__PURE__ */ $.pointerType("apiv1.ReadOnlyPartitionError")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ReadOnlyPartitionError).MarshalToSizedBuffer(b) : ReadOnlyPartitionError.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ReadOnlyPartitionError | $.VarRef<ReadOnlyPartitionError> | null = this;
		xxx_messageInfo_ReadOnlyPartitionError.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ReadOnlyPartitionError", /* @__PURE__ */ $.pointerType("apiv1.ReadOnlyPartitionError")), src)
	}

	public XXX_Size(): number {
		const m: ReadOnlyPartitionError | $.VarRef<ReadOnlyPartitionError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ReadOnlyPartitionError).Size() : ReadOnlyPartitionError.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ReadOnlyPartitionError | $.VarRef<ReadOnlyPartitionError> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ReadOnlyPartitionError).Unmarshal(b) : ReadOnlyPartitionError.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ReadOnlyPartitionError",
		() => new ReadOnlyPartitionError(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ReadOnlyPartitionError,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export let xxx_messageInfo_WorkflowExecutionAlreadyStartedError: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_WorkflowExecutionAlreadyStartedError(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_WorkflowExecutionAlreadyStartedError.value, __goscriptValue)
}

export let xxx_messageInfo_EntityNotExistsError: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_EntityNotExistsError(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_EntityNotExistsError.value, __goscriptValue)
}

export let xxx_messageInfo_WorkflowExecutionAlreadyCompletedError: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_WorkflowExecutionAlreadyCompletedError(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_WorkflowExecutionAlreadyCompletedError.value, __goscriptValue)
}

export let xxx_messageInfo_DomainNotActiveError: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DomainNotActiveError(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DomainNotActiveError.value, __goscriptValue)
}

export let xxx_messageInfo_ClientVersionNotSupportedError: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ClientVersionNotSupportedError(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ClientVersionNotSupportedError.value, __goscriptValue)
}

export let xxx_messageInfo_FeatureNotEnabledError: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_FeatureNotEnabledError(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_FeatureNotEnabledError.value, __goscriptValue)
}

export let xxx_messageInfo_CancellationAlreadyRequestedError: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_CancellationAlreadyRequestedError(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_CancellationAlreadyRequestedError.value, __goscriptValue)
}

export let xxx_messageInfo_DomainAlreadyExistsError: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DomainAlreadyExistsError(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DomainAlreadyExistsError.value, __goscriptValue)
}

export let xxx_messageInfo_LimitExceededError: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_LimitExceededError(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_LimitExceededError.value, __goscriptValue)
}

export let xxx_messageInfo_QueryFailedError: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_QueryFailedError(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_QueryFailedError.value, __goscriptValue)
}

export let xxx_messageInfo_ServiceBusyError: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ServiceBusyError(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ServiceBusyError.value, __goscriptValue)
}

export let xxx_messageInfo_StickyWorkerUnavailableError: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_StickyWorkerUnavailableError(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_StickyWorkerUnavailableError.value, __goscriptValue)
}

export let xxx_messageInfo_ReadOnlyPartitionError: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ReadOnlyPartitionError(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ReadOnlyPartitionError.value, __goscriptValue)
}

function __goscriptInit0(): void {
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.WorkflowExecutionAlreadyStartedError", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionAlreadyStartedError")), "uber.cadence.api.v1.WorkflowExecutionAlreadyStartedError")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.EntityNotExistsError", /* @__PURE__ */ $.pointerType("apiv1.EntityNotExistsError")), "uber.cadence.api.v1.EntityNotExistsError")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.WorkflowExecutionAlreadyCompletedError", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionAlreadyCompletedError")), "uber.cadence.api.v1.WorkflowExecutionAlreadyCompletedError")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DomainNotActiveError", /* @__PURE__ */ $.pointerType("apiv1.DomainNotActiveError")), "uber.cadence.api.v1.DomainNotActiveError")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ClientVersionNotSupportedError", /* @__PURE__ */ $.pointerType("apiv1.ClientVersionNotSupportedError")), "uber.cadence.api.v1.ClientVersionNotSupportedError")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.FeatureNotEnabledError", /* @__PURE__ */ $.pointerType("apiv1.FeatureNotEnabledError")), "uber.cadence.api.v1.FeatureNotEnabledError")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.CancellationAlreadyRequestedError", /* @__PURE__ */ $.pointerType("apiv1.CancellationAlreadyRequestedError")), "uber.cadence.api.v1.CancellationAlreadyRequestedError")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DomainAlreadyExistsError", /* @__PURE__ */ $.pointerType("apiv1.DomainAlreadyExistsError")), "uber.cadence.api.v1.DomainAlreadyExistsError")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.LimitExceededError", /* @__PURE__ */ $.pointerType("apiv1.LimitExceededError")), "uber.cadence.api.v1.LimitExceededError")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.QueryFailedError", /* @__PURE__ */ $.pointerType("apiv1.QueryFailedError")), "uber.cadence.api.v1.QueryFailedError")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ServiceBusyError", /* @__PURE__ */ $.pointerType("apiv1.ServiceBusyError")), "uber.cadence.api.v1.ServiceBusyError")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.StickyWorkerUnavailableError", /* @__PURE__ */ $.pointerType("apiv1.StickyWorkerUnavailableError")), "uber.cadence.api.v1.StickyWorkerUnavailableError")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ReadOnlyPartitionError", /* @__PURE__ */ $.pointerType("apiv1.ReadOnlyPartitionError")), "uber.cadence.api.v1.ReadOnlyPartitionError")
}

function __goscriptInit1(): void {
	proto.RegisterFile("uber/cadence/api/v1/error.proto", fileDescriptor_c8f91786c9aff272)
}

export let fileDescriptor_c8f91786c9aff272: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 140, 83, 205, 110, 211, 76, 20, 149, 219, 239, 171, 196, 45, 180, 197, 148, 18, 33, 148, 182, 230, 167, 17, 82, 109, 69, 44, 187, 106, 66, 34, 69, 66, 37, 36, 2, 36, 54, 209, 100, 124, 19, 70, 29, 207, 152, 249, 49, 241, 83, 176, 230, 9, 120, 21, 150, 60, 2, 202, 147, 32, 219, 227, 144, 74, 65, 234, 114, 206, 61, 115, 230, 156, 185, 247, 194, 177, 157, 162, 138, 40, 137, 81, 80, 140, 72, 202, 162, 172, 29, 161, 82, 82, 133, 169, 146, 70, 250, 15, 10, 66, 232, 8, 33, 73, 89, 152, 181, 131, 57, 60, 251, 40, 213, 245, 140, 203, 175, 189, 5, 82, 107, 152, 20, 151, 92, 33, 137, 243, 177, 33, 202, 96, 220, 43, 36, 252, 22, 28, 232, 226, 60, 81, 248, 197, 162, 54, 19, 22, 55, 188, 19, 175, 117, 103, 180, 87, 226, 163, 10, 30, 196, 254, 67, 216, 81, 86, 20, 245, 173, 178, 254, 191, 178, 98, 16, 7, 223, 60, 56, 236, 9, 195, 76, 126, 37, 77, 111, 193, 180, 209, 149, 242, 25, 236, 83, 171, 20, 10, 51, 161, 220, 106, 131, 170, 22, 118, 112, 183, 66, 253, 231, 176, 71, 168, 97, 25, 174, 120, 213, 3, 247, 42, 180, 166, 157, 193, 254, 77, 154, 110, 108, 159, 108, 23, 122, 55, 120, 58, 104, 193, 139, 127, 69, 239, 202, 36, 229, 88, 135, 15, 126, 120, 112, 248, 90, 38, 132, 137, 43, 105, 46, 75, 149, 202, 251, 17, 236, 196, 37, 238, 44, 187, 211, 166, 76, 91, 183, 204, 180, 125, 203, 76, 255, 109, 204, 244, 221, 131, 102, 151, 51, 20, 230, 3, 42, 205, 100, 97, 120, 108, 211, 84, 254, 237, 228, 25, 236, 207, 144, 24, 171, 112, 146, 85, 156, 250, 191, 29, 236, 110, 250, 199, 176, 75, 75, 169, 9, 75, 82, 238, 2, 64, 5, 13, 146, 148, 251, 231, 224, 235, 90, 187, 214, 210, 46, 192, 253, 85, 197, 201, 233, 224, 2, 142, 250, 213, 11, 197, 4, 8, 50, 229, 181, 165, 83, 184, 91, 91, 154, 113, 50, 119, 126, 118, 29, 214, 231, 100, 30, 60, 133, 211, 46, 17, 20, 57, 39, 107, 125, 114, 83, 87, 247, 233, 49, 52, 170, 54, 185, 242, 218, 152, 5, 135, 224, 191, 97, 9, 51, 189, 5, 69, 140, 235, 27, 62, 28, 188, 179, 168, 242, 62, 97, 181, 155, 224, 37, 28, 140, 81, 101, 140, 98, 199, 234, 124, 213, 104, 133, 68, 175, 254, 202, 157, 130, 38, 60, 25, 27, 70, 175, 243, 98, 146, 80, 189, 23, 36, 35, 140, 23, 209, 42, 173, 6, 28, 141, 144, 196, 111, 5, 207, 135, 68, 25, 86, 120, 47, 43, 157, 217, 207, 101, 211, 251, 181, 108, 122, 191, 151, 77, 15, 30, 81, 153, 132, 27, 246, 179, 3, 37, 123, 88, 44, 240, 208, 251, 212, 158, 51, 243, 217, 78, 67, 42, 147, 104, 125, 221, 207, 89, 204, 163, 185, 140, 202, 69, 119, 187, 127, 65, 82, 150, 181, 167, 59, 37, 246, 234, 79, 0, 0, 0, 255, 255, 94, 12, 140, 103, 31, 4, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_c8f91786c9aff272(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_c8f91786c9aff272 = __goscriptValue
}

export function encodeVarintError(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovError(v))
	let base = offset
	for (let __goscriptSliceWindow15 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow15.backing as any[])[$.windowSlot(__goscriptSliceWindow15, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export function sovError(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozError(x: bigint): number {
	let n: number = 0
	return sovError($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export function skipError(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow16 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowError]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, iNdEx)] as number)
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
						return [0, ErrIntOverflowError]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowError]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthError]
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
					return [0, ErrUnexpectedEndOfGroupError]
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
			return [0, ErrInvalidLengthError]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthError: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthError(__goscriptValue: $.GoError): void {
	ErrInvalidLengthError = __goscriptValue
}

export let ErrIntOverflowError: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowError(__goscriptValue: $.GoError): void {
	ErrIntOverflowError = __goscriptValue
}

export let ErrUnexpectedEndOfGroupError: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupError(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupError = __goscriptValue
}

export { __goscriptInit0 }

export { __goscriptInit1 }
