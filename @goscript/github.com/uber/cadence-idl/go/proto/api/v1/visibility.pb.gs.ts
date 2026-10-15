// Generated file based on visibility.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as types from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"

import * as __goscript_workflow_pb from "./workflow.pb.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "./workflow.pb.gs.ts"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.IndexedValueType", "apiv1.WorkflowExecutionFilter", "apiv1.WorkflowTypeFilter", "apiv1.StartTimeFilter", "apiv1.StatusFilter"])

export type IndexedValueType = number

$.registerNamedValueType(
	"apiv1.IndexedValueType",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (IndexedValueType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (IndexedValueType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.IndexedValueType",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (IndexedValueType_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (IndexedValueType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class WorkflowExecutionFilter {
	public get WorkflowId(): string {
		return this._fields.WorkflowId
	}

	public set WorkflowId(value: string) {
		this._fields.WorkflowId = value
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
		WorkflowId: string
		RunId: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{WorkflowId?: string, RunId?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			WorkflowId: init?.WorkflowId ?? ("" as string),
			RunId: init?.RunId ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkflowExecutionFilter {
		return new WorkflowExecutionFilter(this, true)
	}

	public __goscriptAssign(source: WorkflowExecutionFilter): void {
		const target = this._fields
		const values = source._fields
		target.WorkflowId = values.WorkflowId
		target.RunId = values.RunId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_c1b2132ef24217c8, $.arrayToSlice<number>([0])]
	}

	public GetRunId(): string {
		const m: WorkflowExecutionFilter | $.VarRef<WorkflowExecutionFilter> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionFilter>(m).RunId
		}
		return ""
	}

	public GetWorkflowId(): string {
		const m: WorkflowExecutionFilter | $.VarRef<WorkflowExecutionFilter> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionFilter>(m).WorkflowId
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: WorkflowExecutionFilter | $.VarRef<WorkflowExecutionFilter> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionFilter).Size() : WorkflowExecutionFilter.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple0: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionFilter).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowExecutionFilter.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowExecutionFilter | $.VarRef<WorkflowExecutionFilter> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionFilter).Size() : WorkflowExecutionFilter.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionFilter).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowExecutionFilter.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowExecutionFilter | $.VarRef<WorkflowExecutionFilter> | null = this;
		const m$: WorkflowExecutionFilter = m == null ? $.pointerTarget<WorkflowExecutionFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecutionFilter>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as WorkflowExecutionFilter).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as WorkflowExecutionFilter).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowExecutionFilter).XXX_unrecognized)
		}
		if ($.stringLen((m$ as WorkflowExecutionFilter).RunId) > 0) {
			i = i - ($.stringLen((m$ as WorkflowExecutionFilter).RunId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowExecutionFilter).RunId)
			i = encodeVarintVisibility(dAtA, i, $.uint64($.stringLen((m$ as WorkflowExecutionFilter).RunId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as WorkflowExecutionFilter).WorkflowId) > 0) {
			i = i - ($.stringLen((m$ as WorkflowExecutionFilter).WorkflowId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowExecutionFilter).WorkflowId)
			i = encodeVarintVisibility(dAtA, i, $.uint64($.stringLen((m$ as WorkflowExecutionFilter).WorkflowId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: WorkflowExecutionFilter | $.VarRef<WorkflowExecutionFilter> | null = this;
		$.assignStruct($.pointerValue<WorkflowExecutionFilter>(m), $.markAsStructValue(new WorkflowExecutionFilter()))
	}

	public Size(): number {
		const m: WorkflowExecutionFilter | $.VarRef<WorkflowExecutionFilter> | null = this;
		let n: number = 0
		const m$: WorkflowExecutionFilter = m == null ? $.pointerTarget<WorkflowExecutionFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecutionFilter>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as WorkflowExecutionFilter).WorkflowId)
		if (l > 0) {
			n = n + ((1 + l) + sovVisibility($.uint64(l)))
		}
		l = $.stringLen((m$ as WorkflowExecutionFilter).RunId)
		if (l > 0) {
			n = n + ((1 + l) + sovVisibility($.uint64(l)))
		}
		if ((m$ as WorkflowExecutionFilter).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as WorkflowExecutionFilter).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: WorkflowExecutionFilter | $.VarRef<WorkflowExecutionFilter> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionFilter", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionFilter")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: WorkflowExecutionFilter | $.VarRef<WorkflowExecutionFilter> | null = this;
		const m$: WorkflowExecutionFilter = m == null ? $.pointerTarget<WorkflowExecutionFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecutionFilter>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowVisibility
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
				return fmt.Errorf("proto: WorkflowExecutionFilter: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: WorkflowExecutionFilter: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowVisibility
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
						return ErrInvalidLengthVisibility
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowExecutionFilter).WorkflowId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowVisibility
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
						return ErrInvalidLengthVisibility
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowExecutionFilter).RunId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowExecutionFilter).XXX_unrecognized = $.appendSlice((m$ as WorkflowExecutionFilter).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: WorkflowExecutionFilter | $.VarRef<WorkflowExecutionFilter> | null = this;
		xxx_messageInfo_WorkflowExecutionFilter.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionFilter", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionFilter")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: WorkflowExecutionFilter | $.VarRef<WorkflowExecutionFilter> | null = this;
		if (deterministic) {
			return xxx_messageInfo_WorkflowExecutionFilter.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionFilter", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionFilter")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionFilter).MarshalToSizedBuffer(b) : WorkflowExecutionFilter.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: WorkflowExecutionFilter | $.VarRef<WorkflowExecutionFilter> | null = this;
		xxx_messageInfo_WorkflowExecutionFilter.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionFilter", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionFilter")), src)
	}

	public XXX_Size(): number {
		const m: WorkflowExecutionFilter | $.VarRef<WorkflowExecutionFilter> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionFilter).Size() : WorkflowExecutionFilter.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: WorkflowExecutionFilter | $.VarRef<WorkflowExecutionFilter> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionFilter).Unmarshal(b) : WorkflowExecutionFilter.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.WorkflowExecutionFilter",
		() => new WorkflowExecutionFilter(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetRunId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetWorkflowId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		WorkflowExecutionFilter,
		() => [{ name: "WorkflowId", key: "WorkflowId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=workflow_id,json=workflowId,proto3\" json:\"workflow_id,omitempty\"" }, { name: "RunId", key: "RunId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=run_id,json=runId,proto3\" json:\"run_id,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class WorkflowTypeFilter {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
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
		Name: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Name?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkflowTypeFilter {
		return new WorkflowTypeFilter(this, true)
	}

	public __goscriptAssign(source: WorkflowTypeFilter): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_c1b2132ef24217c8, $.arrayToSlice<number>([1])]
	}

	public GetName(): string {
		const m: WorkflowTypeFilter | $.VarRef<WorkflowTypeFilter> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowTypeFilter>(m).Name
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: WorkflowTypeFilter | $.VarRef<WorkflowTypeFilter> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowTypeFilter).Size() : WorkflowTypeFilter.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple1: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowTypeFilter).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowTypeFilter.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowTypeFilter | $.VarRef<WorkflowTypeFilter> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowTypeFilter).Size() : WorkflowTypeFilter.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowTypeFilter).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowTypeFilter.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowTypeFilter | $.VarRef<WorkflowTypeFilter> | null = this;
		const m$: WorkflowTypeFilter = m == null ? $.pointerTarget<WorkflowTypeFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowTypeFilter>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as WorkflowTypeFilter).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as WorkflowTypeFilter).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowTypeFilter).XXX_unrecognized)
		}
		if ($.stringLen((m$ as WorkflowTypeFilter).Name) > 0) {
			i = i - ($.stringLen((m$ as WorkflowTypeFilter).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowTypeFilter).Name)
			i = encodeVarintVisibility(dAtA, i, $.uint64($.stringLen((m$ as WorkflowTypeFilter).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: WorkflowTypeFilter | $.VarRef<WorkflowTypeFilter> | null = this;
		$.assignStruct($.pointerValue<WorkflowTypeFilter>(m), $.markAsStructValue(new WorkflowTypeFilter()))
	}

	public Size(): number {
		const m: WorkflowTypeFilter | $.VarRef<WorkflowTypeFilter> | null = this;
		let n: number = 0
		const m$: WorkflowTypeFilter = m == null ? $.pointerTarget<WorkflowTypeFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowTypeFilter>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as WorkflowTypeFilter).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovVisibility($.uint64(l)))
		}
		if ((m$ as WorkflowTypeFilter).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as WorkflowTypeFilter).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: WorkflowTypeFilter | $.VarRef<WorkflowTypeFilter> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowTypeFilter", /* @__PURE__ */ $.pointerType("apiv1.WorkflowTypeFilter")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: WorkflowTypeFilter | $.VarRef<WorkflowTypeFilter> | null = this;
		const m$: WorkflowTypeFilter = m == null ? $.pointerTarget<WorkflowTypeFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowTypeFilter>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowVisibility
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
				return fmt.Errorf("proto: WorkflowTypeFilter: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: WorkflowTypeFilter: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Name", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowVisibility
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
						return ErrInvalidLengthVisibility
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowTypeFilter).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowTypeFilter).XXX_unrecognized = $.appendSlice((m$ as WorkflowTypeFilter).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: WorkflowTypeFilter | $.VarRef<WorkflowTypeFilter> | null = this;
		xxx_messageInfo_WorkflowTypeFilter.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowTypeFilter", /* @__PURE__ */ $.pointerType("apiv1.WorkflowTypeFilter")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: WorkflowTypeFilter | $.VarRef<WorkflowTypeFilter> | null = this;
		if (deterministic) {
			return xxx_messageInfo_WorkflowTypeFilter.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowTypeFilter", /* @__PURE__ */ $.pointerType("apiv1.WorkflowTypeFilter")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowTypeFilter).MarshalToSizedBuffer(b) : WorkflowTypeFilter.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: WorkflowTypeFilter | $.VarRef<WorkflowTypeFilter> | null = this;
		xxx_messageInfo_WorkflowTypeFilter.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowTypeFilter", /* @__PURE__ */ $.pointerType("apiv1.WorkflowTypeFilter")), src)
	}

	public XXX_Size(): number {
		const m: WorkflowTypeFilter | $.VarRef<WorkflowTypeFilter> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowTypeFilter).Size() : WorkflowTypeFilter.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: WorkflowTypeFilter | $.VarRef<WorkflowTypeFilter> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowTypeFilter).Unmarshal(b) : WorkflowTypeFilter.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.WorkflowTypeFilter",
		() => new WorkflowTypeFilter(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		WorkflowTypeFilter,
		() => [{ name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class StartTimeFilter {
	public get EarliestTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.EarliestTime
	}

	public set EarliestTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.EarliestTime = value
	}

	public get LatestTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.LatestTime
	}

	public set LatestTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.LatestTime = value
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
		EarliestTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		LatestTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{EarliestTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, LatestTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			EarliestTime: init?.EarliestTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			LatestTime: init?.LatestTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StartTimeFilter {
		return new StartTimeFilter(this, true)
	}

	public __goscriptAssign(source: StartTimeFilter): void {
		const target = this._fields
		const values = source._fields
		target.EarliestTime = values.EarliestTime
		target.LatestTime = values.LatestTime
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_c1b2132ef24217c8, $.arrayToSlice<number>([2])]
	}

	public GetEarliestTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: StartTimeFilter | $.VarRef<StartTimeFilter> | null = this;
		if (m != null) {
			return $.pointerValue<StartTimeFilter>(m).EarliestTime
		}
		return null
	}

	public GetLatestTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: StartTimeFilter | $.VarRef<StartTimeFilter> | null = this;
		if (m != null) {
			return $.pointerValue<StartTimeFilter>(m).LatestTime
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: StartTimeFilter | $.VarRef<StartTimeFilter> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartTimeFilter).Size() : StartTimeFilter.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple2: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartTimeFilter).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StartTimeFilter.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StartTimeFilter | $.VarRef<StartTimeFilter> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartTimeFilter).Size() : StartTimeFilter.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartTimeFilter).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StartTimeFilter.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StartTimeFilter | $.VarRef<StartTimeFilter> | null = this;
		const m$: StartTimeFilter = m == null ? $.pointerTarget<StartTimeFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartTimeFilter>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as StartTimeFilter).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as StartTimeFilter).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StartTimeFilter).XXX_unrecognized)
		}
		if ((m$ as StartTimeFilter).LatestTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as StartTimeFilter).LatestTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintVisibility(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as StartTimeFilter).EarliestTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as StartTimeFilter).EarliestTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintVisibility(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: StartTimeFilter | $.VarRef<StartTimeFilter> | null = this;
		$.assignStruct($.pointerValue<StartTimeFilter>(m), $.markAsStructValue(new StartTimeFilter()))
	}

	public Size(): number {
		const m: StartTimeFilter | $.VarRef<StartTimeFilter> | null = this;
		let n: number = 0
		const m$: StartTimeFilter = m == null ? $.pointerTarget<StartTimeFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartTimeFilter>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as StartTimeFilter).EarliestTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as StartTimeFilter).EarliestTime)
			n = n + ((1 + l) + sovVisibility($.uint64(l)))
		}
		if ((m$ as StartTimeFilter).LatestTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as StartTimeFilter).LatestTime)
			n = n + ((1 + l) + sovVisibility($.uint64(l)))
		}
		if ((m$ as StartTimeFilter).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as StartTimeFilter).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: StartTimeFilter | $.VarRef<StartTimeFilter> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.StartTimeFilter", /* @__PURE__ */ $.pointerType("apiv1.StartTimeFilter")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: StartTimeFilter | $.VarRef<StartTimeFilter> | null = this;
		const m$: StartTimeFilter = m == null ? $.pointerTarget<StartTimeFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StartTimeFilter>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowVisibility
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
				return fmt.Errorf("proto: StartTimeFilter: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: StartTimeFilter: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field EarliestTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowVisibility
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
						return ErrInvalidLengthVisibility
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartTimeFilter).EarliestTime == null) {
						;(m$ as StartTimeFilter).EarliestTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as StartTimeFilter).EarliestTime, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field LatestTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowVisibility
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
						return ErrInvalidLengthVisibility
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthVisibility
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as StartTimeFilter).LatestTime == null) {
						;(m$ as StartTimeFilter).LatestTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as StartTimeFilter).LatestTime, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StartTimeFilter).XXX_unrecognized = $.appendSlice((m$ as StartTimeFilter).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: StartTimeFilter | $.VarRef<StartTimeFilter> | null = this;
		xxx_messageInfo_StartTimeFilter.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.StartTimeFilter", /* @__PURE__ */ $.pointerType("apiv1.StartTimeFilter")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: StartTimeFilter | $.VarRef<StartTimeFilter> | null = this;
		if (deterministic) {
			return xxx_messageInfo_StartTimeFilter.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.StartTimeFilter", /* @__PURE__ */ $.pointerType("apiv1.StartTimeFilter")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartTimeFilter).MarshalToSizedBuffer(b) : StartTimeFilter.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: StartTimeFilter | $.VarRef<StartTimeFilter> | null = this;
		xxx_messageInfo_StartTimeFilter.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.StartTimeFilter", /* @__PURE__ */ $.pointerType("apiv1.StartTimeFilter")), src)
	}

	public XXX_Size(): number {
		const m: StartTimeFilter | $.VarRef<StartTimeFilter> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartTimeFilter).Size() : StartTimeFilter.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: StartTimeFilter | $.VarRef<StartTimeFilter> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StartTimeFilter).Unmarshal(b) : StartTimeFilter.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.StartTimeFilter",
		() => new StartTimeFilter(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetEarliestTime", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Timestamp") }], pointerReceiver: true }, { name: "GetLatestTime", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Timestamp") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		StartTimeFilter,
		() => [{ name: "EarliestTime", key: "EarliestTime", type: /* @__PURE__ */ $.pointerType("types.Timestamp"), tag: "protobuf:\"bytes,1,opt,name=earliest_time,json=earliestTime,proto3\" json:\"earliest_time,omitempty\"" }, { name: "LatestTime", key: "LatestTime", type: /* @__PURE__ */ $.pointerType("types.Timestamp"), tag: "protobuf:\"bytes,2,opt,name=latest_time,json=latestTime,proto3\" json:\"latest_time,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class StatusFilter {
	public get Status(): __goscript_workflow_pb.WorkflowExecutionCloseStatus {
		return this._fields.Status
	}

	public set Status(value: __goscript_workflow_pb.WorkflowExecutionCloseStatus) {
		this._fields.Status = value
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
		Status: __goscript_workflow_pb.WorkflowExecutionCloseStatus
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Status?: __goscript_workflow_pb.WorkflowExecutionCloseStatus, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Status: init?.Status ?? (0 as __goscript_workflow_pb.WorkflowExecutionCloseStatus),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StatusFilter {
		return new StatusFilter(this, true)
	}

	public __goscriptAssign(source: StatusFilter): void {
		const target = this._fields
		const values = source._fields
		target.Status = values.Status
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_c1b2132ef24217c8, $.arrayToSlice<number>([3])]
	}

	public GetStatus(): __goscript_workflow_pb.WorkflowExecutionCloseStatus {
		const m: StatusFilter | $.VarRef<StatusFilter> | null = this;
		if (m != null) {
			return $.pointerValue<StatusFilter>(m).Status
		}
		return 0
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: StatusFilter | $.VarRef<StatusFilter> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StatusFilter).Size() : StatusFilter.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple3: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StatusFilter).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StatusFilter.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StatusFilter | $.VarRef<StatusFilter> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StatusFilter).Size() : StatusFilter.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StatusFilter).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : StatusFilter.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: StatusFilter | $.VarRef<StatusFilter> | null = this;
		const m$: StatusFilter = m == null ? $.pointerTarget<StatusFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StatusFilter>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as StatusFilter).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as StatusFilter).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as StatusFilter).XXX_unrecognized)
		}
		if ((m$ as StatusFilter).Status != 0) {
			i = encodeVarintVisibility(dAtA, i, $.uint64((m$ as StatusFilter).Status))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: StatusFilter | $.VarRef<StatusFilter> | null = this;
		$.assignStruct($.pointerValue<StatusFilter>(m), $.markAsStructValue(new StatusFilter()))
	}

	public Size(): number {
		const m: StatusFilter | $.VarRef<StatusFilter> | null = this;
		let n: number = 0
		const m$: StatusFilter = m == null ? $.pointerTarget<StatusFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StatusFilter>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as StatusFilter).Status != 0) {
			n = n + (1 + sovVisibility($.uint64((m$ as StatusFilter).Status)))
		}
		if ((m$ as StatusFilter).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as StatusFilter).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: StatusFilter | $.VarRef<StatusFilter> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.StatusFilter", /* @__PURE__ */ $.pointerType("apiv1.StatusFilter")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: StatusFilter | $.VarRef<StatusFilter> | null = this;
		const m$: StatusFilter = m == null ? $.pointerTarget<StatusFilter>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<StatusFilter>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowVisibility
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
				return fmt.Errorf("proto: StatusFilter: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: StatusFilter: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Status", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as StatusFilter).Status = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowVisibility
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++;
						;(m$ as StatusFilter).Status = (m$ as StatusFilter).Status | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipVisibility($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthVisibility
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as StatusFilter).XXX_unrecognized = $.appendSlice((m$ as StatusFilter).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: StatusFilter | $.VarRef<StatusFilter> | null = this;
		xxx_messageInfo_StatusFilter.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.StatusFilter", /* @__PURE__ */ $.pointerType("apiv1.StatusFilter")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: StatusFilter | $.VarRef<StatusFilter> | null = this;
		if (deterministic) {
			return xxx_messageInfo_StatusFilter.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.StatusFilter", /* @__PURE__ */ $.pointerType("apiv1.StatusFilter")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StatusFilter).MarshalToSizedBuffer(b) : StatusFilter.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: StatusFilter | $.VarRef<StatusFilter> | null = this;
		xxx_messageInfo_StatusFilter.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.StatusFilter", /* @__PURE__ */ $.pointerType("apiv1.StatusFilter")), src)
	}

	public XXX_Size(): number {
		const m: StatusFilter | $.VarRef<StatusFilter> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StatusFilter).Size() : StatusFilter.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: StatusFilter | $.VarRef<StatusFilter> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as StatusFilter).Unmarshal(b) : StatusFilter.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.StatusFilter",
		() => new StatusFilter(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetStatus", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.WorkflowExecutionCloseStatus") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		StatusFilter,
		() => [{ name: "Status", key: "Status", type: /* @__PURE__ */ $.basicType("int32", "apiv1.WorkflowExecutionCloseStatus"), tag: "protobuf:\"varint,1,opt,name=status,proto3,enum=uber.cadence.api.v1.WorkflowExecutionCloseStatus\" json:\"status,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export const IndexedValueType_INDEXED_VALUE_TYPE_INVALID: IndexedValueType = 0

export const IndexedValueType_INDEXED_VALUE_TYPE_STRING: IndexedValueType = 1

export const IndexedValueType_INDEXED_VALUE_TYPE_KEYWORD: IndexedValueType = 2

export const IndexedValueType_INDEXED_VALUE_TYPE_INT: IndexedValueType = 3

export const IndexedValueType_INDEXED_VALUE_TYPE_DOUBLE: IndexedValueType = 4

export const IndexedValueType_INDEXED_VALUE_TYPE_BOOL: IndexedValueType = 5

export const IndexedValueType_INDEXED_VALUE_TYPE_DATETIME: IndexedValueType = 6

export let IndexedValueType_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "INDEXED_VALUE_TYPE_INVALID"], [1, "INDEXED_VALUE_TYPE_STRING"], [2, "INDEXED_VALUE_TYPE_KEYWORD"], [3, "INDEXED_VALUE_TYPE_INT"], [4, "INDEXED_VALUE_TYPE_DOUBLE"], [5, "INDEXED_VALUE_TYPE_BOOL"], [6, "INDEXED_VALUE_TYPE_DATETIME"]])

export function __goscript_set_IndexedValueType_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	IndexedValueType_name = __goscriptValue
}

export let IndexedValueType_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["INDEXED_VALUE_TYPE_INVALID", 0], ["INDEXED_VALUE_TYPE_STRING", 1], ["INDEXED_VALUE_TYPE_KEYWORD", 2], ["INDEXED_VALUE_TYPE_INT", 3], ["INDEXED_VALUE_TYPE_DOUBLE", 4], ["INDEXED_VALUE_TYPE_BOOL", 5], ["INDEXED_VALUE_TYPE_DATETIME", 6]])

export function __goscript_set_IndexedValueType_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	IndexedValueType_value = __goscriptValue
}

export function IndexedValueType_String(x: IndexedValueType): string {
	return proto.EnumName(IndexedValueType_name, $.int(x, 32))
}

export function IndexedValueType_EnumDescriptor(recv: IndexedValueType): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_c1b2132ef24217c8, $.arrayToSlice<number>([0])]
}

export let xxx_messageInfo_WorkflowExecutionFilter: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_WorkflowExecutionFilter(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_WorkflowExecutionFilter.value, __goscriptValue)
}

export let xxx_messageInfo_WorkflowTypeFilter: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_WorkflowTypeFilter(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_WorkflowTypeFilter.value, __goscriptValue)
}

export let xxx_messageInfo_StartTimeFilter: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_StartTimeFilter(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_StartTimeFilter.value, __goscriptValue)
}

export let xxx_messageInfo_StatusFilter: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_StatusFilter(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_StatusFilter.value, __goscriptValue)
}

function __goscriptInit0(): void {
	proto.RegisterEnum("uber.cadence.api.v1.IndexedValueType", IndexedValueType_name, IndexedValueType_value)
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.WorkflowExecutionFilter", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionFilter")), "uber.cadence.api.v1.WorkflowExecutionFilter")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.WorkflowTypeFilter", /* @__PURE__ */ $.pointerType("apiv1.WorkflowTypeFilter")), "uber.cadence.api.v1.WorkflowTypeFilter")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.StartTimeFilter", /* @__PURE__ */ $.pointerType("apiv1.StartTimeFilter")), "uber.cadence.api.v1.StartTimeFilter")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.StatusFilter", /* @__PURE__ */ $.pointerType("apiv1.StatusFilter")), "uber.cadence.api.v1.StatusFilter")
}

function __goscriptInit1(): void {
	proto.RegisterFile("uber/cadence/api/v1/visibility.proto", fileDescriptor_c1b2132ef24217c8)
}

export let fileDescriptor_c1b2132ef24217c8: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 132, 146, 205, 110, 211, 64, 20, 133, 113, 104, 35, 113, 83, 168, 53, 8, 2, 174, 72, 144, 197, 162, 66, 98, 44, 151, 101, 23, 40, 193, 6, 89, 132, 36, 56, 110, 74, 216, 88, 99, 123, 26, 70, 181, 61, 150, 61, 78, 219, 167, 224, 181, 88, 242, 8, 40, 75, 158, 2, 249, 175, 66, 194, 81, 119, 246, 185, 231, 124, 154, 251, 3, 175, 114, 143, 166, 154, 79, 2, 26, 251, 84, 35, 9, 211, 54, 186, 182, 97, 25, 243, 88, 200, 196, 13, 78, 82, 46, 56, 122, 92, 184, 112, 237, 194, 36, 97, 120, 163, 43, 195, 53, 231, 235, 144, 106, 165, 197, 203, 47, 52, 193, 34, 154, 9, 18, 37, 85, 74, 81, 219, 216, 87, 60, 189, 188, 8, 249, 85, 229, 81, 191, 64, 255, 188, 86, 204, 107, 234, 231, 130, 241, 248, 3, 11, 5, 77, 209, 16, 122, 141, 217, 101, 193, 51, 233, 165, 116, 252, 192, 134, 70, 178, 2, 244, 4, 186, 105, 30, 23, 181, 78, 89, 219, 79, 243, 216, 10, 212, 99, 64, 13, 210, 185, 73, 104, 77, 67, 176, 23, 147, 136, 214, 152, 242, 91, 253, 33, 193, 225, 66, 144, 84, 56, 44, 106, 124, 239, 224, 33, 37, 105, 200, 104, 38, 220, 162, 161, 50, 208, 59, 81, 112, 213, 45, 110, 186, 197, 78, 211, 173, 125, 208, 4, 10, 9, 157, 66, 47, 36, 226, 54, 222, 185, 51, 14, 149, 189, 16, 212, 21, 28, 44, 4, 17, 121, 86, 191, 198, 130, 110, 86, 254, 151, 207, 120, 116, 162, 227, 150, 77, 224, 255, 38, 248, 62, 228, 25, 173, 64, 118, 13, 120, 253, 71, 2, 217, 138, 3, 122, 77, 131, 37, 9, 115, 90, 204, 6, 13, 64, 177, 166, 134, 249, 213, 52, 220, 229, 104, 114, 102, 186, 206, 106, 110, 186, 214, 116, 57, 154, 88, 134, 124, 15, 189, 128, 231, 45, 245, 133, 99, 91, 211, 143, 178, 180, 35, 254, 201, 92, 157, 207, 108, 67, 238, 32, 5, 158, 182, 226, 29, 249, 254, 14, 180, 49, 59, 27, 79, 76, 121, 15, 29, 65, 191, 165, 60, 158, 205, 38, 242, 62, 26, 194, 81, 91, 118, 228, 152, 142, 245, 217, 148, 187, 227, 203, 159, 219, 129, 244, 107, 59, 144, 126, 111, 7, 18, 244, 125, 30, 181, 13, 110, 124, 184, 188, 189, 244, 121, 177, 152, 185, 244, 77, 95, 51, 241, 61, 247, 176, 207, 35, 237, 223, 251, 125, 195, 130, 80, 91, 243, 234, 218, 235, 99, 62, 37, 9, 219, 232, 94, 183, 212, 222, 254, 13, 0, 0, 255, 255, 210, 56, 145, 213, 76, 3, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_c1b2132ef24217c8(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_c1b2132ef24217c8 = __goscriptValue
}

export function encodeVarintVisibility(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovVisibility(v))
	let base = offset
	for (let __goscriptSliceWindow4 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export function sovVisibility(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozVisibility(x: bigint): number {
	let n: number = 0
	return sovVisibility($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export function skipVisibility(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow5 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowVisibility]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
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
						return [0, ErrIntOverflowVisibility]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowVisibility]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthVisibility]
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
					return [0, ErrUnexpectedEndOfGroupVisibility]
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
			return [0, ErrInvalidLengthVisibility]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthVisibility: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthVisibility(__goscriptValue: $.GoError): void {
	ErrInvalidLengthVisibility = __goscriptValue
}

export let ErrIntOverflowVisibility: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowVisibility(__goscriptValue: $.GoError): void {
	ErrIntOverflowVisibility = __goscriptValue
}

export let ErrUnexpectedEndOfGroupVisibility: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupVisibility(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupVisibility = __goscriptValue
}

export { __goscriptInit0 }

export { __goscriptInit1 }
