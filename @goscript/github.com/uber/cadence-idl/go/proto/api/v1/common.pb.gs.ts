// Generated file based on common.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as encoding_binary from "@goscript/encoding/binary/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as types from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.FailureCategory", "apiv1.EncodingType", "apiv1.IsolationGroupState", "apiv1.FailoverType", "apiv1.WorkflowExecution", "apiv1.WorkflowType", "apiv1.ActivityType", "apiv1.Payload", "apiv1.Failure", "apiv1.FailureOptions", "apiv1.Memo", "apiv1.Header", "apiv1.SearchAttributes", "apiv1.DataBlob", "apiv1.WorkerVersionInfo", "apiv1.SupportedClientVersions", "apiv1.RetryPolicy", "apiv1.IsolationGroupPartition", "apiv1.IsolationGroupConfiguration", "apiv1.AsyncWorkflowConfiguration", "apiv1.ActiveClusterSelectionPolicy", "apiv1.ClusterAttribute", "apiv1.PaginationOptions"])

export type FailureCategory = number

$.registerNamedValueType(
	"apiv1.FailureCategory",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (FailureCategory_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FailureCategory_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.FailureCategory",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (FailureCategory_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FailureCategory_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type EncodingType = number

$.registerNamedValueType(
	"apiv1.EncodingType",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (EncodingType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (EncodingType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.EncodingType",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (EncodingType_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (EncodingType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type IsolationGroupState = number

$.registerNamedValueType(
	"apiv1.IsolationGroupState",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (IsolationGroupState_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (IsolationGroupState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.IsolationGroupState",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (IsolationGroupState_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (IsolationGroupState_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type FailoverType = number

$.registerNamedValueType(
	"apiv1.FailoverType",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (FailoverType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FailoverType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.FailoverType",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (FailoverType_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (FailoverType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class WorkflowExecution {
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

	public clone(): WorkflowExecution {
		return new WorkflowExecution(this, true)
	}

	public __goscriptAssign(source: WorkflowExecution): void {
		const target = this._fields
		const values = source._fields
		target.WorkflowId = values.WorkflowId
		target.RunId = values.RunId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([0])]
	}

	public GetRunId(): string {
		const m: WorkflowExecution | $.VarRef<WorkflowExecution> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecution>(m).RunId
		}
		return ""
	}

	public GetWorkflowId(): string {
		const m: WorkflowExecution | $.VarRef<WorkflowExecution> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecution>(m).WorkflowId
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: WorkflowExecution | $.VarRef<WorkflowExecution> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecution).Size() : WorkflowExecution.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple0: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecution).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowExecution.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowExecution | $.VarRef<WorkflowExecution> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecution).Size() : WorkflowExecution.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecution).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowExecution.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowExecution | $.VarRef<WorkflowExecution> | null = this;
		const m$: WorkflowExecution = m == null ? $.pointerTarget<WorkflowExecution>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecution>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as WorkflowExecution).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as WorkflowExecution).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowExecution).XXX_unrecognized)
		}
		if ($.stringLen((m$ as WorkflowExecution).RunId) > 0) {
			i = i - ($.stringLen((m$ as WorkflowExecution).RunId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowExecution).RunId)
			i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen((m$ as WorkflowExecution).RunId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as WorkflowExecution).WorkflowId) > 0) {
			i = i - ($.stringLen((m$ as WorkflowExecution).WorkflowId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowExecution).WorkflowId)
			i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen((m$ as WorkflowExecution).WorkflowId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: WorkflowExecution | $.VarRef<WorkflowExecution> | null = this;
		$.assignStruct($.pointerValue<WorkflowExecution>(m), $.markAsStructValue(new WorkflowExecution()))
	}

	public Size(): number {
		const m: WorkflowExecution | $.VarRef<WorkflowExecution> | null = this;
		let n: number = 0
		const m$: WorkflowExecution = m == null ? $.pointerTarget<WorkflowExecution>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecution>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as WorkflowExecution).WorkflowId)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		l = $.stringLen((m$ as WorkflowExecution).RunId)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as WorkflowExecution).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as WorkflowExecution).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: WorkflowExecution | $.VarRef<WorkflowExecution> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: WorkflowExecution | $.VarRef<WorkflowExecution> | null = this;
		const m$: WorkflowExecution = m == null ? $.pointerTarget<WorkflowExecution>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecution>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: WorkflowExecution: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: WorkflowExecution: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowExecution).WorkflowId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowExecution).RunId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowExecution).XXX_unrecognized = $.appendSlice((m$ as WorkflowExecution).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: WorkflowExecution | $.VarRef<WorkflowExecution> | null = this;
		xxx_messageInfo_WorkflowExecution.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: WorkflowExecution | $.VarRef<WorkflowExecution> | null = this;
		if (deterministic) {
			return xxx_messageInfo_WorkflowExecution.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecution).MarshalToSizedBuffer(b) : WorkflowExecution.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: WorkflowExecution | $.VarRef<WorkflowExecution> | null = this;
		xxx_messageInfo_WorkflowExecution.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")), src)
	}

	public XXX_Size(): number {
		const m: WorkflowExecution | $.VarRef<WorkflowExecution> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecution).Size() : WorkflowExecution.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: WorkflowExecution | $.VarRef<WorkflowExecution> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecution).Unmarshal(b) : WorkflowExecution.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.WorkflowExecution",
		() => new WorkflowExecution(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetRunId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetWorkflowId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		WorkflowExecution,
		() => [{ name: "WorkflowId", key: "WorkflowId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=workflow_id,json=workflowId,proto3\" json:\"workflow_id,omitempty\"" }, { name: "RunId", key: "RunId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=run_id,json=runId,proto3\" json:\"run_id,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class WorkflowType {
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

	public clone(): WorkflowType {
		return new WorkflowType(this, true)
	}

	public __goscriptAssign(source: WorkflowType): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([1])]
	}

	public GetName(): string {
		const m: WorkflowType | $.VarRef<WorkflowType> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowType>(m).Name
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: WorkflowType | $.VarRef<WorkflowType> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowType).Size() : WorkflowType.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple1: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowType).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowType.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowType | $.VarRef<WorkflowType> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowType).Size() : WorkflowType.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowType).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowType.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowType | $.VarRef<WorkflowType> | null = this;
		const m$: WorkflowType = m == null ? $.pointerTarget<WorkflowType>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowType>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as WorkflowType).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as WorkflowType).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowType).XXX_unrecognized)
		}
		if ($.stringLen((m$ as WorkflowType).Name) > 0) {
			i = i - ($.stringLen((m$ as WorkflowType).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowType).Name)
			i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen((m$ as WorkflowType).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: WorkflowType | $.VarRef<WorkflowType> | null = this;
		$.assignStruct($.pointerValue<WorkflowType>(m), $.markAsStructValue(new WorkflowType()))
	}

	public Size(): number {
		const m: WorkflowType | $.VarRef<WorkflowType> | null = this;
		let n: number = 0
		const m$: WorkflowType = m == null ? $.pointerTarget<WorkflowType>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowType>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as WorkflowType).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as WorkflowType).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as WorkflowType).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: WorkflowType | $.VarRef<WorkflowType> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowType", /* @__PURE__ */ $.pointerType("apiv1.WorkflowType")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: WorkflowType | $.VarRef<WorkflowType> | null = this;
		const m$: WorkflowType = m == null ? $.pointerTarget<WorkflowType>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowType>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: WorkflowType: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: WorkflowType: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowType).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowType).XXX_unrecognized = $.appendSlice((m$ as WorkflowType).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: WorkflowType | $.VarRef<WorkflowType> | null = this;
		xxx_messageInfo_WorkflowType.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowType", /* @__PURE__ */ $.pointerType("apiv1.WorkflowType")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: WorkflowType | $.VarRef<WorkflowType> | null = this;
		if (deterministic) {
			return xxx_messageInfo_WorkflowType.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowType", /* @__PURE__ */ $.pointerType("apiv1.WorkflowType")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowType).MarshalToSizedBuffer(b) : WorkflowType.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: WorkflowType | $.VarRef<WorkflowType> | null = this;
		xxx_messageInfo_WorkflowType.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowType", /* @__PURE__ */ $.pointerType("apiv1.WorkflowType")), src)
	}

	public XXX_Size(): number {
		const m: WorkflowType | $.VarRef<WorkflowType> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowType).Size() : WorkflowType.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: WorkflowType | $.VarRef<WorkflowType> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowType).Unmarshal(b) : WorkflowType.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.WorkflowType",
		() => new WorkflowType(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		WorkflowType,
		() => [{ name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ActivityType {
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

	public clone(): ActivityType {
		return new ActivityType(this, true)
	}

	public __goscriptAssign(source: ActivityType): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([2])]
	}

	public GetName(): string {
		const m: ActivityType | $.VarRef<ActivityType> | null = this;
		if (m != null) {
			return $.pointerValue<ActivityType>(m).Name
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ActivityType | $.VarRef<ActivityType> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActivityType).Size() : ActivityType.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple2: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActivityType).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ActivityType.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ActivityType | $.VarRef<ActivityType> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActivityType).Size() : ActivityType.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActivityType).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ActivityType.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ActivityType | $.VarRef<ActivityType> | null = this;
		const m$: ActivityType = m == null ? $.pointerTarget<ActivityType>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ActivityType>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ActivityType).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ActivityType).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ActivityType).XXX_unrecognized)
		}
		if ($.stringLen((m$ as ActivityType).Name) > 0) {
			i = i - ($.stringLen((m$ as ActivityType).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ActivityType).Name)
			i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen((m$ as ActivityType).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ActivityType | $.VarRef<ActivityType> | null = this;
		$.assignStruct($.pointerValue<ActivityType>(m), $.markAsStructValue(new ActivityType()))
	}

	public Size(): number {
		const m: ActivityType | $.VarRef<ActivityType> | null = this;
		let n: number = 0
		const m$: ActivityType = m == null ? $.pointerTarget<ActivityType>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ActivityType>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ActivityType).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as ActivityType).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ActivityType).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ActivityType | $.VarRef<ActivityType> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ActivityType", /* @__PURE__ */ $.pointerType("apiv1.ActivityType")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ActivityType | $.VarRef<ActivityType> | null = this;
		const m$: ActivityType = m == null ? $.pointerTarget<ActivityType>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ActivityType>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: ActivityType: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ActivityType: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ActivityType).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ActivityType).XXX_unrecognized = $.appendSlice((m$ as ActivityType).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ActivityType | $.VarRef<ActivityType> | null = this;
		xxx_messageInfo_ActivityType.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ActivityType", /* @__PURE__ */ $.pointerType("apiv1.ActivityType")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ActivityType | $.VarRef<ActivityType> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ActivityType.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ActivityType", /* @__PURE__ */ $.pointerType("apiv1.ActivityType")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActivityType).MarshalToSizedBuffer(b) : ActivityType.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ActivityType | $.VarRef<ActivityType> | null = this;
		xxx_messageInfo_ActivityType.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ActivityType", /* @__PURE__ */ $.pointerType("apiv1.ActivityType")), src)
	}

	public XXX_Size(): number {
		const m: ActivityType | $.VarRef<ActivityType> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActivityType).Size() : ActivityType.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ActivityType | $.VarRef<ActivityType> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActivityType).Unmarshal(b) : ActivityType.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ActivityType",
		() => new ActivityType(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ActivityType,
		() => [{ name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class Payload {
	public get Data(): $.Slice<number> {
		return this._fields.Data
	}

	public set Data(value: $.Slice<number>) {
		this._fields.Data = value
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
		Data: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Data?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Data: init?.Data ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Payload {
		return new Payload(this, true)
	}

	public __goscriptAssign(source: Payload): void {
		const target = this._fields
		const values = source._fields
		target.Data = values.Data
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([3])]
	}

	public GetData(): $.Slice<number> {
		const m: Payload | $.VarRef<Payload> | null = this;
		if (m != null) {
			return $.pointerValue<Payload>(m).Data
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Payload | $.VarRef<Payload> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Payload).Size() : Payload.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple3: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Payload).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Payload.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Payload | $.VarRef<Payload> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Payload).Size() : Payload.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Payload).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Payload.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Payload | $.VarRef<Payload> | null = this;
		const m$: Payload = m == null ? $.pointerTarget<Payload>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Payload>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Payload).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Payload).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Payload).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as Payload).Data) > 0) {
			i = i - ($.sliceLen((m$ as Payload).Data))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Payload).Data)
			i = encodeVarintCommon(dAtA, i, $.uint64($.sliceLen((m$ as Payload).Data)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: Payload | $.VarRef<Payload> | null = this;
		$.assignStruct($.pointerValue<Payload>(m), $.markAsStructValue(new Payload()))
	}

	public Size(): number {
		const m: Payload | $.VarRef<Payload> | null = this;
		let n: number = 0
		const m$: Payload = m == null ? $.pointerTarget<Payload>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Payload>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.sliceLen((m$ as Payload).Data)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as Payload).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Payload).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: Payload | $.VarRef<Payload> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.Payload", /* @__PURE__ */ $.pointerType("apiv1.Payload")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Payload | $.VarRef<Payload> | null = this;
		const m$: Payload = m == null ? $.pointerTarget<Payload>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Payload>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: Payload: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Payload: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Data", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Payload).Data = $.appendSlice($.goSlice((m$ as Payload).Data, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as Payload).Data == null) {
						;(m$ as Payload).Data = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Payload).XXX_unrecognized = $.appendSlice((m$ as Payload).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Payload | $.VarRef<Payload> | null = this;
		xxx_messageInfo_Payload.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.Payload", /* @__PURE__ */ $.pointerType("apiv1.Payload")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Payload | $.VarRef<Payload> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Payload.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.Payload", /* @__PURE__ */ $.pointerType("apiv1.Payload")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Payload).MarshalToSizedBuffer(b) : Payload.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Payload | $.VarRef<Payload> | null = this;
		xxx_messageInfo_Payload.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.Payload", /* @__PURE__ */ $.pointerType("apiv1.Payload")), src)
	}

	public XXX_Size(): number {
		const m: Payload | $.VarRef<Payload> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Payload).Size() : Payload.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Payload | $.VarRef<Payload> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Payload).Unmarshal(b) : Payload.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Payload",
		() => new Payload(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetData", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		Payload,
		() => [{ name: "Data", key: "Data", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,1,opt,name=data,proto3\" json:\"data,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class Failure {
	public get Reason(): string {
		return this._fields.Reason
	}

	public set Reason(value: string) {
		this._fields.Reason = value
	}

	public get Details(): $.Slice<number> {
		return this._fields.Details
	}

	public set Details(value: $.Slice<number>) {
		this._fields.Details = value
	}

	public get Options(): FailureOptions | $.VarRef<FailureOptions> | null {
		return this._fields.Options
	}

	public set Options(value: FailureOptions | $.VarRef<FailureOptions> | null) {
		this._fields.Options = value
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
		Details: $.Slice<number>
		Options: FailureOptions | $.VarRef<FailureOptions> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Reason?: string, Details?: $.Slice<number>, Options?: FailureOptions | $.VarRef<FailureOptions> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Reason: init?.Reason ?? ("" as string),
			Details: init?.Details ?? (null! as $.Slice<number>),
			Options: init?.Options ?? (null! as FailureOptions | $.VarRef<FailureOptions> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Failure {
		return new Failure(this, true)
	}

	public __goscriptAssign(source: Failure): void {
		const target = this._fields
		const values = source._fields
		target.Reason = values.Reason
		target.Details = values.Details
		target.Options = values.Options
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([4])]
	}

	public GetDetails(): $.Slice<number> {
		const m: Failure | $.VarRef<Failure> | null = this;
		if (m != null) {
			return $.pointerValue<Failure>(m).Details
		}
		return null
	}

	public GetOptions(): FailureOptions | $.VarRef<FailureOptions> | null {
		const m: Failure | $.VarRef<Failure> | null = this;
		if (m != null) {
			return $.pointerValue<Failure>(m).Options
		}
		return null
	}

	public GetReason(): string {
		const m: Failure | $.VarRef<Failure> | null = this;
		if (m != null) {
			return $.pointerValue<Failure>(m).Reason
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Failure | $.VarRef<Failure> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Failure).Size() : Failure.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Failure).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Failure.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Failure | $.VarRef<Failure> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Failure).Size() : Failure.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Failure).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Failure.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Failure | $.VarRef<Failure> | null = this;
		const m$: Failure = m == null ? $.pointerTarget<Failure>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Failure>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Failure).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Failure).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Failure).XXX_unrecognized)
		}
		if ((m$ as Failure).Options != null) {
			{
				let [size, err] = FailureOptions.prototype.MarshalToSizedBuffer.call((m$ as Failure).Options, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintCommon(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.sliceLen((m$ as Failure).Details) > 0) {
			i = i - ($.sliceLen((m$ as Failure).Details))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Failure).Details)
			i = encodeVarintCommon(dAtA, i, $.uint64($.sliceLen((m$ as Failure).Details)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as Failure).Reason) > 0) {
			i = i - ($.stringLen((m$ as Failure).Reason))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Failure).Reason)
			i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen((m$ as Failure).Reason)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: Failure | $.VarRef<Failure> | null = this;
		$.assignStruct($.pointerValue<Failure>(m), $.markAsStructValue(new Failure()))
	}

	public Size(): number {
		const m: Failure | $.VarRef<Failure> | null = this;
		let n: number = 0
		const m$: Failure = m == null ? $.pointerTarget<Failure>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Failure>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as Failure).Reason)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		l = $.sliceLen((m$ as Failure).Details)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as Failure).Options != null) {
			l = FailureOptions.prototype.Size.call((m$ as Failure).Options)
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as Failure).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Failure).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: Failure | $.VarRef<Failure> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.Failure", /* @__PURE__ */ $.pointerType("apiv1.Failure")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Failure | $.VarRef<Failure> | null = this;
		const m$: Failure = m == null ? $.pointerTarget<Failure>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Failure>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow4 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: Failure: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Failure: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Failure).Reason = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Details", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Failure).Details = $.appendSlice($.goSlice((m$ as Failure).Details, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as Failure).Details == null) {
						;(m$ as Failure).Details = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Options", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as Failure).Options == null) {
						;(m$ as Failure).Options = new FailureOptions()
					}
					{
						let err = FailureOptions.prototype.Unmarshal.call((m$ as Failure).Options, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Failure).XXX_unrecognized = $.appendSlice((m$ as Failure).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Failure | $.VarRef<Failure> | null = this;
		xxx_messageInfo_Failure.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.Failure", /* @__PURE__ */ $.pointerType("apiv1.Failure")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Failure | $.VarRef<Failure> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Failure.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.Failure", /* @__PURE__ */ $.pointerType("apiv1.Failure")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Failure).MarshalToSizedBuffer(b) : Failure.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Failure | $.VarRef<Failure> | null = this;
		xxx_messageInfo_Failure.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.Failure", /* @__PURE__ */ $.pointerType("apiv1.Failure")), src)
	}

	public XXX_Size(): number {
		const m: Failure | $.VarRef<Failure> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Failure).Size() : Failure.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Failure | $.VarRef<Failure> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Failure).Unmarshal(b) : Failure.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Failure",
		() => new Failure(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDetails", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "GetOptions", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.FailureOptions") }], pointerReceiver: true }, { name: "GetReason", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		Failure,
		() => [{ name: "Reason", key: "Reason", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=reason,proto3\" json:\"reason,omitempty\"" }, { name: "Details", key: "Details", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,2,opt,name=details,proto3\" json:\"details,omitempty\"" }, { name: "Options", key: "Options", type: /* @__PURE__ */ $.pointerType("apiv1.FailureOptions"), tag: "protobuf:\"bytes,3,opt,name=options,proto3\" json:\"options,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class FailureOptions {
	public get FailureCategory(): FailureCategory {
		return this._fields.FailureCategory
	}

	public set FailureCategory(value: FailureCategory) {
		this._fields.FailureCategory = value
	}

	// If set, overrides the next retry interval calculated by the RetryPolicy for this failure. This allows activity
	// implementations to control the retry interval on a per failure basis.
	// This value does not influence whether or not the activity will be retried. That is determined by the RetryPolicy
	// and the failure's category.
	public get NextRetryInterval(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.NextRetryInterval
	}

	public set NextRetryInterval(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.NextRetryInterval = value
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
		FailureCategory: FailureCategory
		NextRetryInterval: types.Duration | $.VarRef<types.Duration> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{FailureCategory?: FailureCategory, NextRetryInterval?: types.Duration | $.VarRef<types.Duration> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			FailureCategory: init?.FailureCategory ?? (0 as FailureCategory),
			NextRetryInterval: init?.NextRetryInterval ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FailureOptions {
		return new FailureOptions(this, true)
	}

	public __goscriptAssign(source: FailureOptions): void {
		const target = this._fields
		const values = source._fields
		target.FailureCategory = values.FailureCategory
		target.NextRetryInterval = values.NextRetryInterval
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([5])]
	}

	public GetFailureCategory(): FailureCategory {
		const m: FailureOptions | $.VarRef<FailureOptions> | null = this;
		if (m != null) {
			return $.pointerValue<FailureOptions>(m).FailureCategory
		}
		return 0
	}

	public GetNextRetryInterval(): types.Duration | $.VarRef<types.Duration> | null {
		const m: FailureOptions | $.VarRef<FailureOptions> | null = this;
		if (m != null) {
			return $.pointerValue<FailureOptions>(m).NextRetryInterval
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: FailureOptions | $.VarRef<FailureOptions> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailureOptions).Size() : FailureOptions.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple5: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailureOptions).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FailureOptions.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FailureOptions | $.VarRef<FailureOptions> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailureOptions).Size() : FailureOptions.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailureOptions).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FailureOptions.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FailureOptions | $.VarRef<FailureOptions> | null = this;
		const m$: FailureOptions = m == null ? $.pointerTarget<FailureOptions>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailureOptions>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as FailureOptions).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as FailureOptions).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as FailureOptions).XXX_unrecognized)
		}
		if ((m$ as FailureOptions).NextRetryInterval != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as FailureOptions).NextRetryInterval, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintCommon(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as FailureOptions).FailureCategory != 0) {
			i = encodeVarintCommon(dAtA, i, $.uint64((m$ as FailureOptions).FailureCategory))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: FailureOptions | $.VarRef<FailureOptions> | null = this;
		$.assignStruct($.pointerValue<FailureOptions>(m), $.markAsStructValue(new FailureOptions()))
	}

	public Size(): number {
		const m: FailureOptions | $.VarRef<FailureOptions> | null = this;
		let n: number = 0
		const m$: FailureOptions = m == null ? $.pointerTarget<FailureOptions>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailureOptions>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as FailureOptions).FailureCategory != 0) {
			n = n + (1 + sovCommon($.uint64((m$ as FailureOptions).FailureCategory)))
		}
		if ((m$ as FailureOptions).NextRetryInterval != null) {
			l = types.Duration.prototype.Size.call((m$ as FailureOptions).NextRetryInterval)
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as FailureOptions).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as FailureOptions).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: FailureOptions | $.VarRef<FailureOptions> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.FailureOptions", /* @__PURE__ */ $.pointerType("apiv1.FailureOptions")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: FailureOptions | $.VarRef<FailureOptions> | null = this;
		const m$: FailureOptions = m == null ? $.pointerTarget<FailureOptions>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailureOptions>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow5 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: FailureOptions: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: FailureOptions: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field FailureCategory", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as FailureOptions).FailureCategory = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++;
						;(m$ as FailureOptions).FailureCategory = (m$ as FailureOptions).FailureCategory | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field NextRetryInterval", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as FailureOptions).NextRetryInterval == null) {
						;(m$ as FailureOptions).NextRetryInterval = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as FailureOptions).NextRetryInterval, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as FailureOptions).XXX_unrecognized = $.appendSlice((m$ as FailureOptions).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: FailureOptions | $.VarRef<FailureOptions> | null = this;
		xxx_messageInfo_FailureOptions.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.FailureOptions", /* @__PURE__ */ $.pointerType("apiv1.FailureOptions")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: FailureOptions | $.VarRef<FailureOptions> | null = this;
		if (deterministic) {
			return xxx_messageInfo_FailureOptions.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.FailureOptions", /* @__PURE__ */ $.pointerType("apiv1.FailureOptions")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailureOptions).MarshalToSizedBuffer(b) : FailureOptions.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: FailureOptions | $.VarRef<FailureOptions> | null = this;
		xxx_messageInfo_FailureOptions.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.FailureOptions", /* @__PURE__ */ $.pointerType("apiv1.FailureOptions")), src)
	}

	public XXX_Size(): number {
		const m: FailureOptions | $.VarRef<FailureOptions> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailureOptions).Size() : FailureOptions.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: FailureOptions | $.VarRef<FailureOptions> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailureOptions).Unmarshal(b) : FailureOptions.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FailureOptions",
		() => new FailureOptions(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetFailureCategory", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.FailureCategory") }], pointerReceiver: true }, { name: "GetNextRetryInterval", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		FailureOptions,
		() => [{ name: "FailureCategory", key: "FailureCategory", type: /* @__PURE__ */ $.basicType("int32", "apiv1.FailureCategory"), tag: "protobuf:\"varint,1,opt,name=failure_category,json=failureCategory,proto3,enum=uber.cadence.api.v1.FailureCategory\" json:\"failure_category,omitempty\"" }, { name: "NextRetryInterval", key: "NextRetryInterval", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,2,opt,name=next_retry_interval,json=nextRetryInterval,proto3\" json:\"next_retry_interval,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class Memo {
	public get Fields(): globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null {
		return this._fields.Fields
	}

	public set Fields(value: globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null) {
		this._fields.Fields = value
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
		Fields: globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Fields?: globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Fields: init?.Fields ?? (null! as globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Memo {
		return new Memo(this, true)
	}

	public __goscriptAssign(source: Memo): void {
		const target = this._fields
		const values = source._fields
		target.Fields = values.Fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([6])]
	}

	public GetFields(): globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null {
		const m: Memo | $.VarRef<Memo> | null = this;
		if (m != null) {
			return $.pointerValue<Memo>(m).Fields
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Memo | $.VarRef<Memo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Memo).Size() : Memo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple6: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Memo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Memo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Memo | $.VarRef<Memo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Memo).Size() : Memo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Memo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Memo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Memo | $.VarRef<Memo> | null = this;
		const m$: Memo = m == null ? $.pointerTarget<Memo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Memo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Memo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Memo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Memo).XXX_unrecognized)
		}
		if ($.len((m$ as Memo).Fields) > 0) {
			for (const [k, __rangeValue] of (m$ as Memo).Fields?.entries() ?? []) {
				let v: Payload | $.VarRef<Payload> | null = $.mapGet<string, Payload | $.VarRef<Payload> | null, Payload | $.VarRef<Payload> | null>((m$ as Memo).Fields, k, null)[0]
				let baseI: number = i
				if (v != null) {
					{
						let [size, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Payload).MarshalToSizedBuffer($.goSlice(dAtA, undefined, i)) : Payload.prototype.MarshalToSizedBuffer.call(v, $.goSlice(dAtA, undefined, i)))
						if (err != null) {
							return [0, err]
						}
						i = i - (size)
						i = encodeVarintCommon(dAtA, i, $.uint64(size))
					}
					i--
					$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				}
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintCommon(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: Memo | $.VarRef<Memo> | null = this;
		$.assignStruct($.pointerValue<Memo>(m), $.markAsStructValue(new Memo()))
	}

	public Size(): number {
		const m: Memo | $.VarRef<Memo> | null = this;
		let n: number = 0
		const m$: Memo = m == null ? $.pointerTarget<Memo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Memo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.len((m$ as Memo).Fields) > 0) {
			for (const [k, v] of (m$ as Memo).Fields?.entries() ?? []) {
				k
				v
				l = 0
				if (v != null) {
					l = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Payload).Size() : Payload.prototype.Size.call(v))
					l = l + (1 + sovCommon($.uint64(l)))
				}
				let mapEntrySize = ((1 + $.stringLen(k)) + sovCommon($.uint64($.stringLen(k)))) + l
				n = n + ((mapEntrySize + 1) + sovCommon($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as Memo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Memo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: Memo | $.VarRef<Memo> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.Memo", /* @__PURE__ */ $.pointerType("apiv1.Memo")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Memo | $.VarRef<Memo> | null = this;
		const m$: Memo = m == null ? $.pointerTarget<Memo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Memo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow6 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: Memo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Memo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Fields", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as Memo).Fields == null) {
						;(m$ as Memo).Fields = $.makeMap<string, Payload | $.VarRef<Payload> | null>()
					}
					let mapkey: string = ""
					let mapvalue: Payload | $.VarRef<Payload> | null = null! as Payload | $.VarRef<Payload> | null
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow0: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowCommon
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
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
									return ErrIntOverflowCommon
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
								return ErrInvalidLengthCommon
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthCommon
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
										return ErrIntOverflowCommon
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
									iNdEx++
									mapmsglen = mapmsglen | ($.int(b & 0x7F) << shift)
									if (b < 0x80) {
										break
									}
								}
								if (mapmsglen < 0) {
									return ErrInvalidLengthCommon
								}
								let postmsgIndex: number = iNdEx + mapmsglen
								if (postmsgIndex < 0) {
									return ErrInvalidLengthCommon
								}
								if (postmsgIndex > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = new Payload()
								{
									let err = (mapvalue !== null && (mapvalue as any).__isVarRef !== true && (mapvalue as any).__goValue === undefined ? ((mapvalue as any) as Payload).Unmarshal($.goSlice(dAtA, iNdEx, postmsgIndex)) : Payload.prototype.Unmarshal.call(mapvalue, $.goSlice(dAtA, iNdEx, postmsgIndex)))
									if (err != null) {
										return err
									}
								}
								iNdEx = postmsgIndex
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthCommon
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as Memo).Fields, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Memo).XXX_unrecognized = $.appendSlice((m$ as Memo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Memo | $.VarRef<Memo> | null = this;
		xxx_messageInfo_Memo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.Memo", /* @__PURE__ */ $.pointerType("apiv1.Memo")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Memo | $.VarRef<Memo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Memo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.Memo", /* @__PURE__ */ $.pointerType("apiv1.Memo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Memo).MarshalToSizedBuffer(b) : Memo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Memo | $.VarRef<Memo> | null = this;
		xxx_messageInfo_Memo.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.Memo", /* @__PURE__ */ $.pointerType("apiv1.Memo")), src)
	}

	public XXX_Size(): number {
		const m: Memo | $.VarRef<Memo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Memo).Size() : Memo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Memo | $.VarRef<Memo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Memo).Unmarshal(b) : Memo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Memo",
		() => new Memo(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetFields", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.Payload")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		Memo,
		() => [{ name: "Fields", key: "Fields", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.Payload")), tag: "protobuf:\"bytes,1,rep,name=fields,proto3\" json:\"fields,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class Header {
	public get Fields(): globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null {
		return this._fields.Fields
	}

	public set Fields(value: globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null) {
		this._fields.Fields = value
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
		Fields: globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Fields?: globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Fields: init?.Fields ?? (null! as globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Header {
		return new Header(this, true)
	}

	public __goscriptAssign(source: Header): void {
		const target = this._fields
		const values = source._fields
		target.Fields = values.Fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([7])]
	}

	public GetFields(): globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null {
		const m: Header | $.VarRef<Header> | null = this;
		if (m != null) {
			return $.pointerValue<Header>(m).Fields
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Header | $.VarRef<Header> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Header).Size() : Header.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple7: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Header).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Header.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Header | $.VarRef<Header> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Header).Size() : Header.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Header).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Header.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Header | $.VarRef<Header> | null = this;
		const m$: Header = m == null ? $.pointerTarget<Header>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Header>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Header).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Header).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Header).XXX_unrecognized)
		}
		if ($.len((m$ as Header).Fields) > 0) {
			for (const [k, __rangeValue] of (m$ as Header).Fields?.entries() ?? []) {
				let v: Payload | $.VarRef<Payload> | null = $.mapGet<string, Payload | $.VarRef<Payload> | null, Payload | $.VarRef<Payload> | null>((m$ as Header).Fields, k, null)[0]
				let baseI: number = i
				if (v != null) {
					{
						let [size, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Payload).MarshalToSizedBuffer($.goSlice(dAtA, undefined, i)) : Payload.prototype.MarshalToSizedBuffer.call(v, $.goSlice(dAtA, undefined, i)))
						if (err != null) {
							return [0, err]
						}
						i = i - (size)
						i = encodeVarintCommon(dAtA, i, $.uint64(size))
					}
					i--
					$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				}
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintCommon(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: Header | $.VarRef<Header> | null = this;
		$.assignStruct($.pointerValue<Header>(m), $.markAsStructValue(new Header()))
	}

	public Size(): number {
		const m: Header | $.VarRef<Header> | null = this;
		let n: number = 0
		const m$: Header = m == null ? $.pointerTarget<Header>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Header>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.len((m$ as Header).Fields) > 0) {
			for (const [k, v] of (m$ as Header).Fields?.entries() ?? []) {
				k
				v
				l = 0
				if (v != null) {
					l = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Payload).Size() : Payload.prototype.Size.call(v))
					l = l + (1 + sovCommon($.uint64(l)))
				}
				let mapEntrySize = ((1 + $.stringLen(k)) + sovCommon($.uint64($.stringLen(k)))) + l
				n = n + ((mapEntrySize + 1) + sovCommon($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as Header).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Header).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: Header | $.VarRef<Header> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.Header", /* @__PURE__ */ $.pointerType("apiv1.Header")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Header | $.VarRef<Header> | null = this;
		const m$: Header = m == null ? $.pointerTarget<Header>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Header>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow7 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: Header: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Header: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Fields", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as Header).Fields == null) {
						;(m$ as Header).Fields = $.makeMap<string, Payload | $.VarRef<Payload> | null>()
					}
					let mapkey: string = ""
					let mapvalue: Payload | $.VarRef<Payload> | null = null! as Payload | $.VarRef<Payload> | null
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow2: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowCommon
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
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
									return ErrIntOverflowCommon
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthCommon
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthCommon
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
										return ErrIntOverflowCommon
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
									iNdEx++
									mapmsglen = mapmsglen | ($.int(b & 0x7F) << shift)
									if (b < 0x80) {
										break
									}
								}
								if (mapmsglen < 0) {
									return ErrInvalidLengthCommon
								}
								let postmsgIndex: number = iNdEx + mapmsglen
								if (postmsgIndex < 0) {
									return ErrInvalidLengthCommon
								}
								if (postmsgIndex > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = new Payload()
								{
									let err = (mapvalue !== null && (mapvalue as any).__isVarRef !== true && (mapvalue as any).__goValue === undefined ? ((mapvalue as any) as Payload).Unmarshal($.goSlice(dAtA, iNdEx, postmsgIndex)) : Payload.prototype.Unmarshal.call(mapvalue, $.goSlice(dAtA, iNdEx, postmsgIndex)))
									if (err != null) {
										return err
									}
								}
								iNdEx = postmsgIndex
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthCommon
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as Header).Fields, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Header).XXX_unrecognized = $.appendSlice((m$ as Header).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Header | $.VarRef<Header> | null = this;
		xxx_messageInfo_Header.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.Header", /* @__PURE__ */ $.pointerType("apiv1.Header")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Header | $.VarRef<Header> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Header.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.Header", /* @__PURE__ */ $.pointerType("apiv1.Header")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Header).MarshalToSizedBuffer(b) : Header.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Header | $.VarRef<Header> | null = this;
		xxx_messageInfo_Header.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.Header", /* @__PURE__ */ $.pointerType("apiv1.Header")), src)
	}

	public XXX_Size(): number {
		const m: Header | $.VarRef<Header> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Header).Size() : Header.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Header | $.VarRef<Header> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Header).Unmarshal(b) : Header.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Header",
		() => new Header(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetFields", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.Payload")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		Header,
		() => [{ name: "Fields", key: "Fields", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.Payload")), tag: "protobuf:\"bytes,1,rep,name=fields,proto3\" json:\"fields,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class SearchAttributes {
	public get IndexedFields(): globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null {
		return this._fields.IndexedFields
	}

	public set IndexedFields(value: globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null) {
		this._fields.IndexedFields = value
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
		IndexedFields: globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{IndexedFields?: globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			IndexedFields: init?.IndexedFields ?? (null! as globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SearchAttributes {
		return new SearchAttributes(this, true)
	}

	public __goscriptAssign(source: SearchAttributes): void {
		const target = this._fields
		const values = source._fields
		target.IndexedFields = values.IndexedFields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([8])]
	}

	public GetIndexedFields(): globalThis.Map<string, Payload | $.VarRef<Payload> | null> | null {
		const m: SearchAttributes | $.VarRef<SearchAttributes> | null = this;
		if (m != null) {
			return $.pointerValue<SearchAttributes>(m).IndexedFields
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: SearchAttributes | $.VarRef<SearchAttributes> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SearchAttributes).Size() : SearchAttributes.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple8: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SearchAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SearchAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SearchAttributes | $.VarRef<SearchAttributes> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SearchAttributes).Size() : SearchAttributes.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SearchAttributes).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SearchAttributes.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SearchAttributes | $.VarRef<SearchAttributes> | null = this;
		const m$: SearchAttributes = m == null ? $.pointerTarget<SearchAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SearchAttributes>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as SearchAttributes).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as SearchAttributes).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SearchAttributes).XXX_unrecognized)
		}
		if ($.len((m$ as SearchAttributes).IndexedFields) > 0) {
			for (const [k, __rangeValue] of (m$ as SearchAttributes).IndexedFields?.entries() ?? []) {
				let v: Payload | $.VarRef<Payload> | null = $.mapGet<string, Payload | $.VarRef<Payload> | null, Payload | $.VarRef<Payload> | null>((m$ as SearchAttributes).IndexedFields, k, null)[0]
				let baseI: number = i
				if (v != null) {
					{
						let [size, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Payload).MarshalToSizedBuffer($.goSlice(dAtA, undefined, i)) : Payload.prototype.MarshalToSizedBuffer.call(v, $.goSlice(dAtA, undefined, i)))
						if (err != null) {
							return [0, err]
						}
						i = i - (size)
						i = encodeVarintCommon(dAtA, i, $.uint64(size))
					}
					i--
					$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				}
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintCommon(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: SearchAttributes | $.VarRef<SearchAttributes> | null = this;
		$.assignStruct($.pointerValue<SearchAttributes>(m), $.markAsStructValue(new SearchAttributes()))
	}

	public Size(): number {
		const m: SearchAttributes | $.VarRef<SearchAttributes> | null = this;
		let n: number = 0
		const m$: SearchAttributes = m == null ? $.pointerTarget<SearchAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SearchAttributes>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.len((m$ as SearchAttributes).IndexedFields) > 0) {
			for (const [k, v] of (m$ as SearchAttributes).IndexedFields?.entries() ?? []) {
				k
				v
				l = 0
				if (v != null) {
					l = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Payload).Size() : Payload.prototype.Size.call(v))
					l = l + (1 + sovCommon($.uint64(l)))
				}
				let mapEntrySize = ((1 + $.stringLen(k)) + sovCommon($.uint64($.stringLen(k)))) + l
				n = n + ((mapEntrySize + 1) + sovCommon($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as SearchAttributes).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as SearchAttributes).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: SearchAttributes | $.VarRef<SearchAttributes> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.SearchAttributes", /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: SearchAttributes | $.VarRef<SearchAttributes> | null = this;
		const m$: SearchAttributes = m == null ? $.pointerTarget<SearchAttributes>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SearchAttributes>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow8 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: SearchAttributes: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: SearchAttributes: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field IndexedFields", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as SearchAttributes).IndexedFields == null) {
						;(m$ as SearchAttributes).IndexedFields = $.makeMap<string, Payload | $.VarRef<Payload> | null>()
					}
					let mapkey: string = ""
					let mapvalue: Payload | $.VarRef<Payload> | null = null! as Payload | $.VarRef<Payload> | null
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow4: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowCommon
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
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
									return ErrIntOverflowCommon
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthCommon
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthCommon
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
										return ErrIntOverflowCommon
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
									iNdEx++
									mapmsglen = mapmsglen | ($.int(b & 0x7F) << shift)
									if (b < 0x80) {
										break
									}
								}
								if (mapmsglen < 0) {
									return ErrInvalidLengthCommon
								}
								let postmsgIndex: number = iNdEx + mapmsglen
								if (postmsgIndex < 0) {
									return ErrInvalidLengthCommon
								}
								if (postmsgIndex > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = new Payload()
								{
									let err = (mapvalue !== null && (mapvalue as any).__isVarRef !== true && (mapvalue as any).__goValue === undefined ? ((mapvalue as any) as Payload).Unmarshal($.goSlice(dAtA, iNdEx, postmsgIndex)) : Payload.prototype.Unmarshal.call(mapvalue, $.goSlice(dAtA, iNdEx, postmsgIndex)))
									if (err != null) {
										return err
									}
								}
								iNdEx = postmsgIndex
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthCommon
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as SearchAttributes).IndexedFields, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SearchAttributes).XXX_unrecognized = $.appendSlice((m$ as SearchAttributes).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: SearchAttributes | $.VarRef<SearchAttributes> | null = this;
		xxx_messageInfo_SearchAttributes.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.SearchAttributes", /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: SearchAttributes | $.VarRef<SearchAttributes> | null = this;
		if (deterministic) {
			return xxx_messageInfo_SearchAttributes.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.SearchAttributes", /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SearchAttributes).MarshalToSizedBuffer(b) : SearchAttributes.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: SearchAttributes | $.VarRef<SearchAttributes> | null = this;
		xxx_messageInfo_SearchAttributes.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.SearchAttributes", /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes")), src)
	}

	public XXX_Size(): number {
		const m: SearchAttributes | $.VarRef<SearchAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SearchAttributes).Size() : SearchAttributes.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: SearchAttributes | $.VarRef<SearchAttributes> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SearchAttributes).Unmarshal(b) : SearchAttributes.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.SearchAttributes",
		() => new SearchAttributes(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetIndexedFields", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.Payload")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		SearchAttributes,
		() => [{ name: "IndexedFields", key: "IndexedFields", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.Payload")), tag: "protobuf:\"bytes,1,rep,name=indexed_fields,json=indexedFields,proto3\" json:\"indexed_fields,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class DataBlob {
	public get EncodingType(): EncodingType {
		return this._fields.EncodingType
	}

	public set EncodingType(value: EncodingType) {
		this._fields.EncodingType = value
	}

	public get Data(): $.Slice<number> {
		return this._fields.Data
	}

	public set Data(value: $.Slice<number>) {
		this._fields.Data = value
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
		EncodingType: EncodingType
		Data: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{EncodingType?: EncodingType, Data?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			EncodingType: init?.EncodingType ?? (0 as EncodingType),
			Data: init?.Data ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DataBlob {
		return new DataBlob(this, true)
	}

	public __goscriptAssign(source: DataBlob): void {
		const target = this._fields
		const values = source._fields
		target.EncodingType = values.EncodingType
		target.Data = values.Data
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([9])]
	}

	public GetData(): $.Slice<number> {
		const m: DataBlob | $.VarRef<DataBlob> | null = this;
		if (m != null) {
			return $.pointerValue<DataBlob>(m).Data
		}
		return null
	}

	public GetEncodingType(): EncodingType {
		const m: DataBlob | $.VarRef<DataBlob> | null = this;
		if (m != null) {
			return $.pointerValue<DataBlob>(m).EncodingType
		}
		return 0
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DataBlob | $.VarRef<DataBlob> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DataBlob).Size() : DataBlob.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple9: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DataBlob).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DataBlob.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DataBlob | $.VarRef<DataBlob> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DataBlob).Size() : DataBlob.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DataBlob).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DataBlob.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DataBlob | $.VarRef<DataBlob> | null = this;
		const m$: DataBlob = m == null ? $.pointerTarget<DataBlob>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DataBlob>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DataBlob).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DataBlob).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DataBlob).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as DataBlob).Data) > 0) {
			i = i - ($.sliceLen((m$ as DataBlob).Data))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DataBlob).Data)
			i = encodeVarintCommon(dAtA, i, $.uint64($.sliceLen((m$ as DataBlob).Data)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as DataBlob).EncodingType != 0) {
			i = encodeVarintCommon(dAtA, i, $.uint64((m$ as DataBlob).EncodingType))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DataBlob | $.VarRef<DataBlob> | null = this;
		$.assignStruct($.pointerValue<DataBlob>(m), $.markAsStructValue(new DataBlob()))
	}

	public Size(): number {
		const m: DataBlob | $.VarRef<DataBlob> | null = this;
		let n: number = 0
		const m$: DataBlob = m == null ? $.pointerTarget<DataBlob>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DataBlob>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as DataBlob).EncodingType != 0) {
			n = n + (1 + sovCommon($.uint64((m$ as DataBlob).EncodingType)))
		}
		l = $.sliceLen((m$ as DataBlob).Data)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as DataBlob).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DataBlob).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DataBlob | $.VarRef<DataBlob> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DataBlob", /* @__PURE__ */ $.pointerType("apiv1.DataBlob")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DataBlob | $.VarRef<DataBlob> | null = this;
		const m$: DataBlob = m == null ? $.pointerTarget<DataBlob>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DataBlob>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow9 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: DataBlob: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DataBlob: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field EncodingType", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as DataBlob).EncodingType = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, iNdEx)] as number)
						iNdEx++;
						;(m$ as DataBlob).EncodingType = (m$ as DataBlob).EncodingType | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Data", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DataBlob).Data = $.appendSlice($.goSlice((m$ as DataBlob).Data, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as DataBlob).Data == null) {
						;(m$ as DataBlob).Data = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DataBlob).XXX_unrecognized = $.appendSlice((m$ as DataBlob).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: DataBlob | $.VarRef<DataBlob> | null = this;
		xxx_messageInfo_DataBlob.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DataBlob", /* @__PURE__ */ $.pointerType("apiv1.DataBlob")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: DataBlob | $.VarRef<DataBlob> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DataBlob.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DataBlob", /* @__PURE__ */ $.pointerType("apiv1.DataBlob")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DataBlob).MarshalToSizedBuffer(b) : DataBlob.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: DataBlob | $.VarRef<DataBlob> | null = this;
		xxx_messageInfo_DataBlob.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DataBlob", /* @__PURE__ */ $.pointerType("apiv1.DataBlob")), src)
	}

	public XXX_Size(): number {
		const m: DataBlob | $.VarRef<DataBlob> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DataBlob).Size() : DataBlob.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DataBlob | $.VarRef<DataBlob> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DataBlob).Unmarshal(b) : DataBlob.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DataBlob",
		() => new DataBlob(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetData", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "GetEncodingType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.EncodingType") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		DataBlob,
		() => [{ name: "EncodingType", key: "EncodingType", type: /* @__PURE__ */ $.basicType("int32", "apiv1.EncodingType"), tag: "protobuf:\"varint,1,opt,name=encoding_type,json=encodingType,proto3,enum=uber.cadence.api.v1.EncodingType\" json:\"encoding_type,omitempty\"" }, { name: "Data", key: "Data", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,2,opt,name=data,proto3\" json:\"data,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class WorkerVersionInfo {
	public get Impl(): string {
		return this._fields.Impl
	}

	public set Impl(value: string) {
		this._fields.Impl = value
	}

	public get FeatureVersion(): string {
		return this._fields.FeatureVersion
	}

	public set FeatureVersion(value: string) {
		this._fields.FeatureVersion = value
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
		Impl: string
		FeatureVersion: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Impl?: string, FeatureVersion?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Impl: init?.Impl ?? ("" as string),
			FeatureVersion: init?.FeatureVersion ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkerVersionInfo {
		return new WorkerVersionInfo(this, true)
	}

	public __goscriptAssign(source: WorkerVersionInfo): void {
		const target = this._fields
		const values = source._fields
		target.Impl = values.Impl
		target.FeatureVersion = values.FeatureVersion
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([10])]
	}

	public GetFeatureVersion(): string {
		const m: WorkerVersionInfo | $.VarRef<WorkerVersionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkerVersionInfo>(m).FeatureVersion
		}
		return ""
	}

	public GetImpl(): string {
		const m: WorkerVersionInfo | $.VarRef<WorkerVersionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkerVersionInfo>(m).Impl
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: WorkerVersionInfo | $.VarRef<WorkerVersionInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkerVersionInfo).Size() : WorkerVersionInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple10: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkerVersionInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkerVersionInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple10[0]
		err = __goscriptTuple10[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkerVersionInfo | $.VarRef<WorkerVersionInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkerVersionInfo).Size() : WorkerVersionInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkerVersionInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkerVersionInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkerVersionInfo | $.VarRef<WorkerVersionInfo> | null = this;
		const m$: WorkerVersionInfo = m == null ? $.pointerTarget<WorkerVersionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkerVersionInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as WorkerVersionInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as WorkerVersionInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkerVersionInfo).XXX_unrecognized)
		}
		if ($.stringLen((m$ as WorkerVersionInfo).FeatureVersion) > 0) {
			i = i - ($.stringLen((m$ as WorkerVersionInfo).FeatureVersion))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkerVersionInfo).FeatureVersion)
			i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen((m$ as WorkerVersionInfo).FeatureVersion)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as WorkerVersionInfo).Impl) > 0) {
			i = i - ($.stringLen((m$ as WorkerVersionInfo).Impl))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkerVersionInfo).Impl)
			i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen((m$ as WorkerVersionInfo).Impl)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: WorkerVersionInfo | $.VarRef<WorkerVersionInfo> | null = this;
		$.assignStruct($.pointerValue<WorkerVersionInfo>(m), $.markAsStructValue(new WorkerVersionInfo()))
	}

	public Size(): number {
		const m: WorkerVersionInfo | $.VarRef<WorkerVersionInfo> | null = this;
		let n: number = 0
		const m$: WorkerVersionInfo = m == null ? $.pointerTarget<WorkerVersionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkerVersionInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as WorkerVersionInfo).Impl)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		l = $.stringLen((m$ as WorkerVersionInfo).FeatureVersion)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as WorkerVersionInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as WorkerVersionInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: WorkerVersionInfo | $.VarRef<WorkerVersionInfo> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkerVersionInfo", /* @__PURE__ */ $.pointerType("apiv1.WorkerVersionInfo")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: WorkerVersionInfo | $.VarRef<WorkerVersionInfo> | null = this;
		const m$: WorkerVersionInfo = m == null ? $.pointerTarget<WorkerVersionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkerVersionInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow10 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: WorkerVersionInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: WorkerVersionInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Impl", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkerVersionInfo).Impl = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field FeatureVersion", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkerVersionInfo).FeatureVersion = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkerVersionInfo).XXX_unrecognized = $.appendSlice((m$ as WorkerVersionInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: WorkerVersionInfo | $.VarRef<WorkerVersionInfo> | null = this;
		xxx_messageInfo_WorkerVersionInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkerVersionInfo", /* @__PURE__ */ $.pointerType("apiv1.WorkerVersionInfo")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: WorkerVersionInfo | $.VarRef<WorkerVersionInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_WorkerVersionInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.WorkerVersionInfo", /* @__PURE__ */ $.pointerType("apiv1.WorkerVersionInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkerVersionInfo).MarshalToSizedBuffer(b) : WorkerVersionInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: WorkerVersionInfo | $.VarRef<WorkerVersionInfo> | null = this;
		xxx_messageInfo_WorkerVersionInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkerVersionInfo", /* @__PURE__ */ $.pointerType("apiv1.WorkerVersionInfo")), src)
	}

	public XXX_Size(): number {
		const m: WorkerVersionInfo | $.VarRef<WorkerVersionInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkerVersionInfo).Size() : WorkerVersionInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: WorkerVersionInfo | $.VarRef<WorkerVersionInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkerVersionInfo).Unmarshal(b) : WorkerVersionInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.WorkerVersionInfo",
		() => new WorkerVersionInfo(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetFeatureVersion", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetImpl", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		WorkerVersionInfo,
		() => [{ name: "Impl", key: "Impl", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=impl,proto3\" json:\"impl,omitempty\"" }, { name: "FeatureVersion", key: "FeatureVersion", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=feature_version,json=featureVersion,proto3\" json:\"feature_version,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class SupportedClientVersions {
	// Indicates the highest Go SDK version server will accept requests from.
	public get GoSdk(): string {
		return this._fields.GoSdk
	}

	public set GoSdk(value: string) {
		this._fields.GoSdk = value
	}

	// Indicates the highest Java SDK version server will accept requests from.
	public get JavaSdk(): string {
		return this._fields.JavaSdk
	}

	public set JavaSdk(value: string) {
		this._fields.JavaSdk = value
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
		GoSdk: string
		JavaSdk: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{GoSdk?: string, JavaSdk?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			GoSdk: init?.GoSdk ?? ("" as string),
			JavaSdk: init?.JavaSdk ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SupportedClientVersions {
		return new SupportedClientVersions(this, true)
	}

	public __goscriptAssign(source: SupportedClientVersions): void {
		const target = this._fields
		const values = source._fields
		target.GoSdk = values.GoSdk
		target.JavaSdk = values.JavaSdk
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([11])]
	}

	public GetGoSdk(): string {
		const m: SupportedClientVersions | $.VarRef<SupportedClientVersions> | null = this;
		if (m != null) {
			return $.pointerValue<SupportedClientVersions>(m).GoSdk
		}
		return ""
	}

	public GetJavaSdk(): string {
		const m: SupportedClientVersions | $.VarRef<SupportedClientVersions> | null = this;
		if (m != null) {
			return $.pointerValue<SupportedClientVersions>(m).JavaSdk
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: SupportedClientVersions | $.VarRef<SupportedClientVersions> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SupportedClientVersions).Size() : SupportedClientVersions.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple11: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SupportedClientVersions).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SupportedClientVersions.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple11[0]
		err = __goscriptTuple11[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SupportedClientVersions | $.VarRef<SupportedClientVersions> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SupportedClientVersions).Size() : SupportedClientVersions.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SupportedClientVersions).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : SupportedClientVersions.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: SupportedClientVersions | $.VarRef<SupportedClientVersions> | null = this;
		const m$: SupportedClientVersions = m == null ? $.pointerTarget<SupportedClientVersions>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SupportedClientVersions>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as SupportedClientVersions).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as SupportedClientVersions).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SupportedClientVersions).XXX_unrecognized)
		}
		if ($.stringLen((m$ as SupportedClientVersions).JavaSdk) > 0) {
			i = i - ($.stringLen((m$ as SupportedClientVersions).JavaSdk))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SupportedClientVersions).JavaSdk)
			i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen((m$ as SupportedClientVersions).JavaSdk)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as SupportedClientVersions).GoSdk) > 0) {
			i = i - ($.stringLen((m$ as SupportedClientVersions).GoSdk))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as SupportedClientVersions).GoSdk)
			i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen((m$ as SupportedClientVersions).GoSdk)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: SupportedClientVersions | $.VarRef<SupportedClientVersions> | null = this;
		$.assignStruct($.pointerValue<SupportedClientVersions>(m), $.markAsStructValue(new SupportedClientVersions()))
	}

	public Size(): number {
		const m: SupportedClientVersions | $.VarRef<SupportedClientVersions> | null = this;
		let n: number = 0
		const m$: SupportedClientVersions = m == null ? $.pointerTarget<SupportedClientVersions>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SupportedClientVersions>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as SupportedClientVersions).GoSdk)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		l = $.stringLen((m$ as SupportedClientVersions).JavaSdk)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as SupportedClientVersions).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as SupportedClientVersions).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: SupportedClientVersions | $.VarRef<SupportedClientVersions> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.SupportedClientVersions", /* @__PURE__ */ $.pointerType("apiv1.SupportedClientVersions")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: SupportedClientVersions | $.VarRef<SupportedClientVersions> | null = this;
		const m$: SupportedClientVersions = m == null ? $.pointerTarget<SupportedClientVersions>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SupportedClientVersions>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow11 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: SupportedClientVersions: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: SupportedClientVersions: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field GoSdk", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SupportedClientVersions).GoSdk = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field JavaSdk", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SupportedClientVersions).JavaSdk = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as SupportedClientVersions).XXX_unrecognized = $.appendSlice((m$ as SupportedClientVersions).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: SupportedClientVersions | $.VarRef<SupportedClientVersions> | null = this;
		xxx_messageInfo_SupportedClientVersions.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.SupportedClientVersions", /* @__PURE__ */ $.pointerType("apiv1.SupportedClientVersions")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: SupportedClientVersions | $.VarRef<SupportedClientVersions> | null = this;
		if (deterministic) {
			return xxx_messageInfo_SupportedClientVersions.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.SupportedClientVersions", /* @__PURE__ */ $.pointerType("apiv1.SupportedClientVersions")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SupportedClientVersions).MarshalToSizedBuffer(b) : SupportedClientVersions.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: SupportedClientVersions | $.VarRef<SupportedClientVersions> | null = this;
		xxx_messageInfo_SupportedClientVersions.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.SupportedClientVersions", /* @__PURE__ */ $.pointerType("apiv1.SupportedClientVersions")), src)
	}

	public XXX_Size(): number {
		const m: SupportedClientVersions | $.VarRef<SupportedClientVersions> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SupportedClientVersions).Size() : SupportedClientVersions.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: SupportedClientVersions | $.VarRef<SupportedClientVersions> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as SupportedClientVersions).Unmarshal(b) : SupportedClientVersions.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.SupportedClientVersions",
		() => new SupportedClientVersions(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetGoSdk", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetJavaSdk", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		SupportedClientVersions,
		() => [{ name: "GoSdk", key: "GoSdk", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=go_sdk,json=goSdk,proto3\" json:\"go_sdk,omitempty\"" }, { name: "JavaSdk", key: "JavaSdk", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=java_sdk,json=javaSdk,proto3\" json:\"java_sdk,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RetryPolicy {
	// Interval of the first retry. If backoffCoefficient is 1.0 then it is used for all retries.
	public get InitialInterval(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.InitialInterval
	}

	public set InitialInterval(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.InitialInterval = value
	}

	// Coefficient used to calculate the next retry interval.
	// The next retry interval is previous interval multiplied by the coefficient.
	// Must be 1 or larger.
	public get BackoffCoefficient(): number {
		return this._fields.BackoffCoefficient
	}

	public set BackoffCoefficient(value: number) {
		this._fields.BackoffCoefficient = value
	}

	// Maximum interval between retries. Exponential backoff leads to interval increase.
	// This value is the cap of the increase. Default is 100x of initial interval.
	public get MaximumInterval(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.MaximumInterval
	}

	public set MaximumInterval(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.MaximumInterval = value
	}

	// Maximum number of attempts.
	// The total attempts includes the initial attempt. Setting this to 1 means 0 retries (only the initial attempt).
	// If set to 0 the number of attempts is unlimited. This is the default.
	// Either maximum_attempts or expiration_interval must be set.
	public get MaximumAttempts(): number {
		return this._fields.MaximumAttempts
	}

	public set MaximumAttempts(value: number) {
		this._fields.MaximumAttempts = value
	}

	// Non-Retryable errors. Will stop retrying if error type matches this list.
	public get NonRetryableErrorReasons(): $.Slice<string> {
		return this._fields.NonRetryableErrorReasons
	}

	public set NonRetryableErrorReasons(value: $.Slice<string>) {
		this._fields.NonRetryableErrorReasons = value
	}

	// Expiration time for the whole retry process.
	// Either maximum_attempts or expiration_interval must be set.
	// Retrying will stop when either maximum_attempts is reached or expiration_interval is exceeded, whichever comes first.
	public get ExpirationInterval(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.ExpirationInterval
	}

	public set ExpirationInterval(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.ExpirationInterval = value
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
		InitialInterval: types.Duration | $.VarRef<types.Duration> | null
		BackoffCoefficient: number
		MaximumInterval: types.Duration | $.VarRef<types.Duration> | null
		MaximumAttempts: number
		NonRetryableErrorReasons: $.Slice<string>
		ExpirationInterval: types.Duration | $.VarRef<types.Duration> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{InitialInterval?: types.Duration | $.VarRef<types.Duration> | null, BackoffCoefficient?: number, MaximumInterval?: types.Duration | $.VarRef<types.Duration> | null, MaximumAttempts?: number, NonRetryableErrorReasons?: $.Slice<string>, ExpirationInterval?: types.Duration | $.VarRef<types.Duration> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			InitialInterval: init?.InitialInterval ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			BackoffCoefficient: init?.BackoffCoefficient ?? (0 as number),
			MaximumInterval: init?.MaximumInterval ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			MaximumAttempts: init?.MaximumAttempts ?? (0 as number),
			NonRetryableErrorReasons: init?.NonRetryableErrorReasons ?? (null! as $.Slice<string>),
			ExpirationInterval: init?.ExpirationInterval ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RetryPolicy {
		return new RetryPolicy(this, true)
	}

	public __goscriptAssign(source: RetryPolicy): void {
		const target = this._fields
		const values = source._fields
		target.InitialInterval = values.InitialInterval
		target.BackoffCoefficient = values.BackoffCoefficient
		target.MaximumInterval = values.MaximumInterval
		target.MaximumAttempts = values.MaximumAttempts
		target.NonRetryableErrorReasons = values.NonRetryableErrorReasons
		target.ExpirationInterval = values.ExpirationInterval
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([12])]
	}

	public GetBackoffCoefficient(): number {
		const m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		if (m != null) {
			return $.pointerValue<RetryPolicy>(m).BackoffCoefficient
		}
		return 0
	}

	public GetExpirationInterval(): types.Duration | $.VarRef<types.Duration> | null {
		const m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		if (m != null) {
			return $.pointerValue<RetryPolicy>(m).ExpirationInterval
		}
		return null
	}

	public GetInitialInterval(): types.Duration | $.VarRef<types.Duration> | null {
		const m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		if (m != null) {
			return $.pointerValue<RetryPolicy>(m).InitialInterval
		}
		return null
	}

	public GetMaximumAttempts(): number {
		const m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		if (m != null) {
			return $.pointerValue<RetryPolicy>(m).MaximumAttempts
		}
		return 0
	}

	public GetMaximumInterval(): types.Duration | $.VarRef<types.Duration> | null {
		const m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		if (m != null) {
			return $.pointerValue<RetryPolicy>(m).MaximumInterval
		}
		return null
	}

	public GetNonRetryableErrorReasons(): $.Slice<string> {
		const m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		if (m != null) {
			return $.pointerValue<RetryPolicy>(m).NonRetryableErrorReasons
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RetryPolicy).Size() : RetryPolicy.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple12: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RetryPolicy).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RetryPolicy.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RetryPolicy).Size() : RetryPolicy.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RetryPolicy).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RetryPolicy.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		const m$: RetryPolicy = m == null ? $.pointerTarget<RetryPolicy>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RetryPolicy>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RetryPolicy).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RetryPolicy).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RetryPolicy).XXX_unrecognized)
		}
		if ((m$ as RetryPolicy).ExpirationInterval != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as RetryPolicy).ExpirationInterval, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintCommon(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		if ($.sliceLen((m$ as RetryPolicy).NonRetryableErrorReasons) > 0) {
			for (let __goscriptSliceWindow12 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as RetryPolicy).NonRetryableErrorReasons) - 1; iNdEx >= 0; iNdEx--) {
				i = i - ($.stringLen($.arrayIndex((m$ as RetryPolicy).NonRetryableErrorReasons!, iNdEx)))
				$.copy($.goSlice(dAtA, i, undefined), $.arrayIndex((m$ as RetryPolicy).NonRetryableErrorReasons!, iNdEx))
				i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen($.arrayIndex((m$ as RetryPolicy).NonRetryableErrorReasons!, iNdEx))))
				i--;
				;(__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, i)] = 0x2a
			}
		}
		if ((m$ as RetryPolicy).MaximumAttempts != 0) {
			i = encodeVarintCommon(dAtA, i, $.uint64((m$ as RetryPolicy).MaximumAttempts))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x20
		}
		if ((m$ as RetryPolicy).MaximumInterval != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as RetryPolicy).MaximumInterval, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintCommon(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as RetryPolicy).BackoffCoefficient != 0) {
			i = i - (8)
			$.markAsStructValue($.cloneStructValue($.pointerValue<any>(encoding_binary.LittleEndian))).PutUint64($.goSlice(dAtA, i, undefined), $.uint64(math.Float64bits((m$ as RetryPolicy).BackoffCoefficient)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x11
		}
		if ((m$ as RetryPolicy).InitialInterval != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as RetryPolicy).InitialInterval, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintCommon(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		$.assignStruct($.pointerValue<RetryPolicy>(m), $.markAsStructValue(new RetryPolicy()))
	}

	public Size(): number {
		const m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		let n: number = 0
		const m$: RetryPolicy = m == null ? $.pointerTarget<RetryPolicy>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RetryPolicy>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as RetryPolicy).InitialInterval != null) {
			l = types.Duration.prototype.Size.call((m$ as RetryPolicy).InitialInterval)
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as RetryPolicy).BackoffCoefficient != 0) {
			n = n + (9)
		}
		if ((m$ as RetryPolicy).MaximumInterval != null) {
			l = types.Duration.prototype.Size.call((m$ as RetryPolicy).MaximumInterval)
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as RetryPolicy).MaximumAttempts != 0) {
			n = n + (1 + sovCommon($.uint64((m$ as RetryPolicy).MaximumAttempts)))
		}
		if ($.sliceLen((m$ as RetryPolicy).NonRetryableErrorReasons) > 0) {
			for (let __goscriptRangeTarget0 = (m$ as RetryPolicy).NonRetryableErrorReasons, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let s = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
				l = $.stringLen(s)
				n = n + ((1 + l) + sovCommon($.uint64(l)))
			}
		}
		if ((m$ as RetryPolicy).ExpirationInterval != null) {
			l = types.Duration.prototype.Size.call((m$ as RetryPolicy).ExpirationInterval)
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as RetryPolicy).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RetryPolicy).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RetryPolicy", /* @__PURE__ */ $.pointerType("apiv1.RetryPolicy")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		const m$: RetryPolicy = m == null ? $.pointerTarget<RetryPolicy>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RetryPolicy>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow13 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: RetryPolicy: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RetryPolicy: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field InitialInterval", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RetryPolicy).InitialInterval == null) {
						;(m$ as RetryPolicy).InitialInterval = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as RetryPolicy).InitialInterval, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 1) {
						return fmt.Errorf("proto: wrong wireType = %d for field BackoffCoefficient", $.basicInterfaceValue(wireType, "int"))
					}
					let v: bigint = 0n
					if ((iNdEx + 8) > l) {
						return io.ErrUnexpectedEOF
					}
					v = $.uint64($.markAsStructValue($.cloneStructValue($.pointerValue<any>(encoding_binary.LittleEndian))).Uint64($.goSlice(dAtA, iNdEx, undefined)))
					iNdEx = iNdEx + (8);
					;(m$ as RetryPolicy).BackoffCoefficient = math.Float64frombits(v)
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field MaximumInterval", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RetryPolicy).MaximumInterval == null) {
						;(m$ as RetryPolicy).MaximumInterval = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as RetryPolicy).MaximumInterval, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field MaximumAttempts", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as RetryPolicy).MaximumAttempts = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow13.backing as any[])[$.windowSlot(__goscriptSliceWindow13, iNdEx)] as number)
						iNdEx++;
						;(m$ as RetryPolicy).MaximumAttempts = (m$ as RetryPolicy).MaximumAttempts | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field NonRetryableErrorReasons", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RetryPolicy).NonRetryableErrorReasons = $.appendOne((m$ as RetryPolicy).NonRetryableErrorReasons, $.bytesToString($.goSlice(dAtA, iNdEx, postIndex)))
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ExpirationInterval", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RetryPolicy).ExpirationInterval == null) {
						;(m$ as RetryPolicy).ExpirationInterval = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as RetryPolicy).ExpirationInterval, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RetryPolicy).XXX_unrecognized = $.appendSlice((m$ as RetryPolicy).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		xxx_messageInfo_RetryPolicy.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RetryPolicy", /* @__PURE__ */ $.pointerType("apiv1.RetryPolicy")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RetryPolicy.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RetryPolicy", /* @__PURE__ */ $.pointerType("apiv1.RetryPolicy")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RetryPolicy).MarshalToSizedBuffer(b) : RetryPolicy.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		xxx_messageInfo_RetryPolicy.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RetryPolicy", /* @__PURE__ */ $.pointerType("apiv1.RetryPolicy")), src)
	}

	public XXX_Size(): number {
		const m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RetryPolicy).Size() : RetryPolicy.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RetryPolicy | $.VarRef<RetryPolicy> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RetryPolicy).Unmarshal(b) : RetryPolicy.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RetryPolicy",
		() => new RetryPolicy(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetBackoffCoefficient", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("float64") }], pointerReceiver: true }, { name: "GetExpirationInterval", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetInitialInterval", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetMaximumAttempts", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GetMaximumInterval", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetNonRetryableErrorReasons", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RetryPolicy,
		() => [{ name: "InitialInterval", key: "InitialInterval", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,1,opt,name=initial_interval,json=initialInterval,proto3\" json:\"initial_interval,omitempty\"" }, { name: "BackoffCoefficient", key: "BackoffCoefficient", type: /* @__PURE__ */ $.basicType("float64"), tag: "protobuf:\"fixed64,2,opt,name=backoff_coefficient,json=backoffCoefficient,proto3\" json:\"backoff_coefficient,omitempty\"" }, { name: "MaximumInterval", key: "MaximumInterval", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,3,opt,name=maximum_interval,json=maximumInterval,proto3\" json:\"maximum_interval,omitempty\"" }, { name: "MaximumAttempts", key: "MaximumAttempts", type: /* @__PURE__ */ $.basicType("int32"), tag: "protobuf:\"varint,4,opt,name=maximum_attempts,json=maximumAttempts,proto3\" json:\"maximum_attempts,omitempty\"" }, { name: "NonRetryableErrorReasons", key: "NonRetryableErrorReasons", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,5,rep,name=non_retryable_error_reasons,json=nonRetryableErrorReasons,proto3\" json:\"non_retryable_error_reasons,omitempty\"" }, { name: "ExpirationInterval", key: "ExpirationInterval", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,6,opt,name=expiration_interval,json=expirationInterval,proto3\" json:\"expiration_interval,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class IsolationGroupPartition {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get State(): IsolationGroupState {
		return this._fields.State
	}

	public set State(value: IsolationGroupState) {
		this._fields.State = value
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
		State: IsolationGroupState
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Name?: string, State?: IsolationGroupState, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			State: init?.State ?? (0 as IsolationGroupState),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): IsolationGroupPartition {
		return new IsolationGroupPartition(this, true)
	}

	public __goscriptAssign(source: IsolationGroupPartition): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.State = values.State
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([13])]
	}

	public GetName(): string {
		const m: IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null = this;
		if (m != null) {
			return $.pointerValue<IsolationGroupPartition>(m).Name
		}
		return ""
	}

	public GetState(): IsolationGroupState {
		const m: IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null = this;
		if (m != null) {
			return $.pointerValue<IsolationGroupPartition>(m).State
		}
		return 0
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupPartition).Size() : IsolationGroupPartition.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple13: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupPartition).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : IsolationGroupPartition.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple13[0]
		err = __goscriptTuple13[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupPartition).Size() : IsolationGroupPartition.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupPartition).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : IsolationGroupPartition.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null = this;
		const m$: IsolationGroupPartition = m == null ? $.pointerTarget<IsolationGroupPartition>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<IsolationGroupPartition>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as IsolationGroupPartition).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as IsolationGroupPartition).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as IsolationGroupPartition).XXX_unrecognized)
		}
		if ((m$ as IsolationGroupPartition).State != 0) {
			i = encodeVarintCommon(dAtA, i, $.uint64((m$ as IsolationGroupPartition).State))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ($.stringLen((m$ as IsolationGroupPartition).Name) > 0) {
			i = i - ($.stringLen((m$ as IsolationGroupPartition).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as IsolationGroupPartition).Name)
			i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen((m$ as IsolationGroupPartition).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null = this;
		$.assignStruct($.pointerValue<IsolationGroupPartition>(m), $.markAsStructValue(new IsolationGroupPartition()))
	}

	public Size(): number {
		const m: IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null = this;
		let n: number = 0
		const m$: IsolationGroupPartition = m == null ? $.pointerTarget<IsolationGroupPartition>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<IsolationGroupPartition>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as IsolationGroupPartition).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as IsolationGroupPartition).State != 0) {
			n = n + (1 + sovCommon($.uint64((m$ as IsolationGroupPartition).State)))
		}
		if ((m$ as IsolationGroupPartition).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as IsolationGroupPartition).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.IsolationGroupPartition", /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupPartition")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null = this;
		const m$: IsolationGroupPartition = m == null ? $.pointerTarget<IsolationGroupPartition>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<IsolationGroupPartition>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow14 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: IsolationGroupPartition: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: IsolationGroupPartition: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as IsolationGroupPartition).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field State", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as IsolationGroupPartition).State = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, iNdEx)] as number)
						iNdEx++;
						;(m$ as IsolationGroupPartition).State = (m$ as IsolationGroupPartition).State | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as IsolationGroupPartition).XXX_unrecognized = $.appendSlice((m$ as IsolationGroupPartition).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null = this;
		xxx_messageInfo_IsolationGroupPartition.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.IsolationGroupPartition", /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupPartition")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null = this;
		if (deterministic) {
			return xxx_messageInfo_IsolationGroupPartition.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.IsolationGroupPartition", /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupPartition")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupPartition).MarshalToSizedBuffer(b) : IsolationGroupPartition.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null = this;
		xxx_messageInfo_IsolationGroupPartition.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.IsolationGroupPartition", /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupPartition")), src)
	}

	public XXX_Size(): number {
		const m: IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupPartition).Size() : IsolationGroupPartition.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupPartition).Unmarshal(b) : IsolationGroupPartition.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.IsolationGroupPartition",
		() => new IsolationGroupPartition(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetState", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.IsolationGroupState") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		IsolationGroupPartition,
		() => [{ name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "State", key: "State", type: /* @__PURE__ */ $.basicType("int32", "apiv1.IsolationGroupState"), tag: "protobuf:\"varint,2,opt,name=state,proto3,enum=uber.cadence.api.v1.IsolationGroupState\" json:\"state,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class IsolationGroupConfiguration {
	public get IsolationGroups(): $.Slice<IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null> {
		return this._fields.IsolationGroups
	}

	public set IsolationGroups(value: $.Slice<IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null>) {
		this._fields.IsolationGroups = value
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
		IsolationGroups: $.Slice<IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{IsolationGroups?: $.Slice<IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			IsolationGroups: init?.IsolationGroups ?? (null! as $.Slice<IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): IsolationGroupConfiguration {
		return new IsolationGroupConfiguration(this, true)
	}

	public __goscriptAssign(source: IsolationGroupConfiguration): void {
		const target = this._fields
		const values = source._fields
		target.IsolationGroups = values.IsolationGroups
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([14])]
	}

	public GetIsolationGroups(): $.Slice<IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null> {
		const m: IsolationGroupConfiguration | $.VarRef<IsolationGroupConfiguration> | null = this;
		if (m != null) {
			return $.pointerValue<IsolationGroupConfiguration>(m).IsolationGroups
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: IsolationGroupConfiguration | $.VarRef<IsolationGroupConfiguration> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupConfiguration).Size() : IsolationGroupConfiguration.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple14: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupConfiguration).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : IsolationGroupConfiguration.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: IsolationGroupConfiguration | $.VarRef<IsolationGroupConfiguration> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupConfiguration).Size() : IsolationGroupConfiguration.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupConfiguration).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : IsolationGroupConfiguration.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: IsolationGroupConfiguration | $.VarRef<IsolationGroupConfiguration> | null = this;
		const m$: IsolationGroupConfiguration = m == null ? $.pointerTarget<IsolationGroupConfiguration>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<IsolationGroupConfiguration>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as IsolationGroupConfiguration).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as IsolationGroupConfiguration).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as IsolationGroupConfiguration).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as IsolationGroupConfiguration).IsolationGroups) > 0) {
			for (let __goscriptSliceWindow15 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as IsolationGroupConfiguration).IsolationGroups) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = IsolationGroupPartition.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as IsolationGroupConfiguration).IsolationGroups!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintCommon(dAtA, i, $.uint64(size))
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
		let m: IsolationGroupConfiguration | $.VarRef<IsolationGroupConfiguration> | null = this;
		$.assignStruct($.pointerValue<IsolationGroupConfiguration>(m), $.markAsStructValue(new IsolationGroupConfiguration()))
	}

	public Size(): number {
		const m: IsolationGroupConfiguration | $.VarRef<IsolationGroupConfiguration> | null = this;
		let n: number = 0
		const m$: IsolationGroupConfiguration = m == null ? $.pointerTarget<IsolationGroupConfiguration>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<IsolationGroupConfiguration>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as IsolationGroupConfiguration).IsolationGroups) > 0) {
			for (let __goscriptRangeTarget1 = (m$ as IsolationGroupConfiguration).IsolationGroups, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as IsolationGroupPartition | $.VarRef<IsolationGroupPartition> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as IsolationGroupPartition).Size() : IsolationGroupPartition.prototype.Size.call(e))
				n = n + ((1 + l) + sovCommon($.uint64(l)))
			}
		}
		if ((m$ as IsolationGroupConfiguration).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as IsolationGroupConfiguration).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: IsolationGroupConfiguration | $.VarRef<IsolationGroupConfiguration> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.IsolationGroupConfiguration", /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupConfiguration")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: IsolationGroupConfiguration | $.VarRef<IsolationGroupConfiguration> | null = this;
		const m$: IsolationGroupConfiguration = m == null ? $.pointerTarget<IsolationGroupConfiguration>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<IsolationGroupConfiguration>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow16 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: IsolationGroupConfiguration: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: IsolationGroupConfiguration: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field IsolationGroups", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as IsolationGroupConfiguration).IsolationGroups = $.appendOne((m$ as IsolationGroupConfiguration).IsolationGroups, new IsolationGroupPartition(), $.appendZeros.nil)
					{
						let err = IsolationGroupPartition.prototype.Unmarshal.call($.arrayIndex((m$ as IsolationGroupConfiguration).IsolationGroups!, $.sliceLen((m$ as IsolationGroupConfiguration).IsolationGroups) - 1), $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as IsolationGroupConfiguration).XXX_unrecognized = $.appendSlice((m$ as IsolationGroupConfiguration).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: IsolationGroupConfiguration | $.VarRef<IsolationGroupConfiguration> | null = this;
		xxx_messageInfo_IsolationGroupConfiguration.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.IsolationGroupConfiguration", /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupConfiguration")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: IsolationGroupConfiguration | $.VarRef<IsolationGroupConfiguration> | null = this;
		if (deterministic) {
			return xxx_messageInfo_IsolationGroupConfiguration.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.IsolationGroupConfiguration", /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupConfiguration")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupConfiguration).MarshalToSizedBuffer(b) : IsolationGroupConfiguration.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: IsolationGroupConfiguration | $.VarRef<IsolationGroupConfiguration> | null = this;
		xxx_messageInfo_IsolationGroupConfiguration.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.IsolationGroupConfiguration", /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupConfiguration")), src)
	}

	public XXX_Size(): number {
		const m: IsolationGroupConfiguration | $.VarRef<IsolationGroupConfiguration> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupConfiguration).Size() : IsolationGroupConfiguration.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: IsolationGroupConfiguration | $.VarRef<IsolationGroupConfiguration> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as IsolationGroupConfiguration).Unmarshal(b) : IsolationGroupConfiguration.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.IsolationGroupConfiguration",
		() => new IsolationGroupConfiguration(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetIsolationGroups", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.IsolationGroupPartition")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		IsolationGroupConfiguration,
		() => [{ name: "IsolationGroups", key: "IsolationGroups", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.IsolationGroupPartition")), tag: "protobuf:\"bytes,1,rep,name=isolation_groups,json=isolationGroups,proto3\" json:\"isolation_groups,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class AsyncWorkflowConfiguration {
	public get Enabled(): boolean {
		return this._fields.Enabled
	}

	public set Enabled(value: boolean) {
		this._fields.Enabled = value
	}

	// predefined_queue_name is the name of the predefined queue in cadence server config's asyncWorkflowQueues
	public get PredefinedQueueName(): string {
		return this._fields.PredefinedQueueName
	}

	public set PredefinedQueueName(value: string) {
		this._fields.PredefinedQueueName = value
	}

	// queue_type is the type of the queue if predefined_queue_name is not used
	public get QueueType(): string {
		return this._fields.QueueType
	}

	public set QueueType(value: string) {
		this._fields.QueueType = value
	}

	// queue_config is the configuration for the queue if predefined_queue_name is not used
	public get QueueConfig(): DataBlob | $.VarRef<DataBlob> | null {
		return this._fields.QueueConfig
	}

	public set QueueConfig(value: DataBlob | $.VarRef<DataBlob> | null) {
		this._fields.QueueConfig = value
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
		Enabled: boolean
		PredefinedQueueName: string
		QueueType: string
		QueueConfig: DataBlob | $.VarRef<DataBlob> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Enabled?: boolean, PredefinedQueueName?: string, QueueType?: string, QueueConfig?: DataBlob | $.VarRef<DataBlob> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Enabled: init?.Enabled ?? (false as boolean),
			PredefinedQueueName: init?.PredefinedQueueName ?? ("" as string),
			QueueType: init?.QueueType ?? ("" as string),
			QueueConfig: init?.QueueConfig ?? (null! as DataBlob | $.VarRef<DataBlob> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): AsyncWorkflowConfiguration {
		return new AsyncWorkflowConfiguration(this, true)
	}

	public __goscriptAssign(source: AsyncWorkflowConfiguration): void {
		const target = this._fields
		const values = source._fields
		target.Enabled = values.Enabled
		target.PredefinedQueueName = values.PredefinedQueueName
		target.QueueType = values.QueueType
		target.QueueConfig = values.QueueConfig
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([15])]
	}

	public GetEnabled(): boolean {
		const m: AsyncWorkflowConfiguration | $.VarRef<AsyncWorkflowConfiguration> | null = this;
		if (m != null) {
			return $.pointerValue<AsyncWorkflowConfiguration>(m).Enabled
		}
		return false
	}

	public GetPredefinedQueueName(): string {
		const m: AsyncWorkflowConfiguration | $.VarRef<AsyncWorkflowConfiguration> | null = this;
		if (m != null) {
			return $.pointerValue<AsyncWorkflowConfiguration>(m).PredefinedQueueName
		}
		return ""
	}

	public GetQueueConfig(): DataBlob | $.VarRef<DataBlob> | null {
		const m: AsyncWorkflowConfiguration | $.VarRef<AsyncWorkflowConfiguration> | null = this;
		if (m != null) {
			return $.pointerValue<AsyncWorkflowConfiguration>(m).QueueConfig
		}
		return null
	}

	public GetQueueType(): string {
		const m: AsyncWorkflowConfiguration | $.VarRef<AsyncWorkflowConfiguration> | null = this;
		if (m != null) {
			return $.pointerValue<AsyncWorkflowConfiguration>(m).QueueType
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: AsyncWorkflowConfiguration | $.VarRef<AsyncWorkflowConfiguration> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as AsyncWorkflowConfiguration).Size() : AsyncWorkflowConfiguration.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple15: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as AsyncWorkflowConfiguration).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : AsyncWorkflowConfiguration.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple15[0]
		err = __goscriptTuple15[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: AsyncWorkflowConfiguration | $.VarRef<AsyncWorkflowConfiguration> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as AsyncWorkflowConfiguration).Size() : AsyncWorkflowConfiguration.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as AsyncWorkflowConfiguration).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : AsyncWorkflowConfiguration.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: AsyncWorkflowConfiguration | $.VarRef<AsyncWorkflowConfiguration> | null = this;
		const m$: AsyncWorkflowConfiguration = m == null ? $.pointerTarget<AsyncWorkflowConfiguration>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<AsyncWorkflowConfiguration>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as AsyncWorkflowConfiguration).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as AsyncWorkflowConfiguration).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as AsyncWorkflowConfiguration).XXX_unrecognized)
		}
		if ((m$ as AsyncWorkflowConfiguration).QueueConfig != null) {
			{
				let [size, err] = DataBlob.prototype.MarshalToSizedBuffer.call((m$ as AsyncWorkflowConfiguration).QueueConfig, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintCommon(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as AsyncWorkflowConfiguration).QueueType) > 0) {
			i = i - ($.stringLen((m$ as AsyncWorkflowConfiguration).QueueType))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as AsyncWorkflowConfiguration).QueueType)
			i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen((m$ as AsyncWorkflowConfiguration).QueueType)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.stringLen((m$ as AsyncWorkflowConfiguration).PredefinedQueueName) > 0) {
			i = i - ($.stringLen((m$ as AsyncWorkflowConfiguration).PredefinedQueueName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as AsyncWorkflowConfiguration).PredefinedQueueName)
			i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen((m$ as AsyncWorkflowConfiguration).PredefinedQueueName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as AsyncWorkflowConfiguration).Enabled) {
			i--
			if ((m$ as AsyncWorkflowConfiguration).Enabled) {
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
		let m: AsyncWorkflowConfiguration | $.VarRef<AsyncWorkflowConfiguration> | null = this;
		$.assignStruct($.pointerValue<AsyncWorkflowConfiguration>(m), $.markAsStructValue(new AsyncWorkflowConfiguration()))
	}

	public Size(): number {
		const m: AsyncWorkflowConfiguration | $.VarRef<AsyncWorkflowConfiguration> | null = this;
		let n: number = 0
		const m$: AsyncWorkflowConfiguration = m == null ? $.pointerTarget<AsyncWorkflowConfiguration>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<AsyncWorkflowConfiguration>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as AsyncWorkflowConfiguration).Enabled) {
			n = n + (2)
		}
		l = $.stringLen((m$ as AsyncWorkflowConfiguration).PredefinedQueueName)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		l = $.stringLen((m$ as AsyncWorkflowConfiguration).QueueType)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as AsyncWorkflowConfiguration).QueueConfig != null) {
			l = DataBlob.prototype.Size.call((m$ as AsyncWorkflowConfiguration).QueueConfig)
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as AsyncWorkflowConfiguration).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as AsyncWorkflowConfiguration).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: AsyncWorkflowConfiguration | $.VarRef<AsyncWorkflowConfiguration> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.AsyncWorkflowConfiguration", /* @__PURE__ */ $.pointerType("apiv1.AsyncWorkflowConfiguration")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: AsyncWorkflowConfiguration | $.VarRef<AsyncWorkflowConfiguration> | null = this;
		const m$: AsyncWorkflowConfiguration = m == null ? $.pointerTarget<AsyncWorkflowConfiguration>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<AsyncWorkflowConfiguration>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow17 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: AsyncWorkflowConfiguration: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: AsyncWorkflowConfiguration: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Enabled", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow17.backing as any[])[$.windowSlot(__goscriptSliceWindow17, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as AsyncWorkflowConfiguration).Enabled = (v != 0)
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field PredefinedQueueName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as AsyncWorkflowConfiguration).PredefinedQueueName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field QueueType", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as AsyncWorkflowConfiguration).QueueType = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field QueueConfig", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as AsyncWorkflowConfiguration).QueueConfig == null) {
						;(m$ as AsyncWorkflowConfiguration).QueueConfig = new DataBlob()
					}
					{
						let err = DataBlob.prototype.Unmarshal.call((m$ as AsyncWorkflowConfiguration).QueueConfig, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as AsyncWorkflowConfiguration).XXX_unrecognized = $.appendSlice((m$ as AsyncWorkflowConfiguration).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: AsyncWorkflowConfiguration | $.VarRef<AsyncWorkflowConfiguration> | null = this;
		xxx_messageInfo_AsyncWorkflowConfiguration.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.AsyncWorkflowConfiguration", /* @__PURE__ */ $.pointerType("apiv1.AsyncWorkflowConfiguration")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: AsyncWorkflowConfiguration | $.VarRef<AsyncWorkflowConfiguration> | null = this;
		if (deterministic) {
			return xxx_messageInfo_AsyncWorkflowConfiguration.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.AsyncWorkflowConfiguration", /* @__PURE__ */ $.pointerType("apiv1.AsyncWorkflowConfiguration")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as AsyncWorkflowConfiguration).MarshalToSizedBuffer(b) : AsyncWorkflowConfiguration.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: AsyncWorkflowConfiguration | $.VarRef<AsyncWorkflowConfiguration> | null = this;
		xxx_messageInfo_AsyncWorkflowConfiguration.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.AsyncWorkflowConfiguration", /* @__PURE__ */ $.pointerType("apiv1.AsyncWorkflowConfiguration")), src)
	}

	public XXX_Size(): number {
		const m: AsyncWorkflowConfiguration | $.VarRef<AsyncWorkflowConfiguration> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as AsyncWorkflowConfiguration).Size() : AsyncWorkflowConfiguration.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: AsyncWorkflowConfiguration | $.VarRef<AsyncWorkflowConfiguration> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as AsyncWorkflowConfiguration).Unmarshal(b) : AsyncWorkflowConfiguration.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.AsyncWorkflowConfiguration",
		() => new AsyncWorkflowConfiguration(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetEnabled", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetPredefinedQueueName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetQueueConfig", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.DataBlob") }], pointerReceiver: true }, { name: "GetQueueType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		AsyncWorkflowConfiguration,
		() => [{ name: "Enabled", key: "Enabled", type: /* @__PURE__ */ $.basicType("bool"), tag: "protobuf:\"varint,1,opt,name=enabled,proto3\" json:\"enabled,omitempty\"" }, { name: "PredefinedQueueName", key: "PredefinedQueueName", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=predefined_queue_name,json=predefinedQueueName,proto3\" json:\"predefined_queue_name,omitempty\"" }, { name: "QueueType", key: "QueueType", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=queue_type,json=queueType,proto3\" json:\"queue_type,omitempty\"" }, { name: "QueueConfig", key: "QueueConfig", type: /* @__PURE__ */ $.pointerType("apiv1.DataBlob"), tag: "protobuf:\"bytes,4,opt,name=queue_config,json=queueConfig,proto3\" json:\"queue_config,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ActiveClusterSelectionPolicy {
	public get ClusterAttribute(): ClusterAttribute | $.VarRef<ClusterAttribute> | null {
		return this._fields.ClusterAttribute
	}

	public set ClusterAttribute(value: ClusterAttribute | $.VarRef<ClusterAttribute> | null) {
		this._fields.ClusterAttribute = value
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
		ClusterAttribute: ClusterAttribute | $.VarRef<ClusterAttribute> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{ClusterAttribute?: ClusterAttribute | $.VarRef<ClusterAttribute> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ClusterAttribute: init?.ClusterAttribute ?? (null! as ClusterAttribute | $.VarRef<ClusterAttribute> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ActiveClusterSelectionPolicy {
		return new ActiveClusterSelectionPolicy(this, true)
	}

	public __goscriptAssign(source: ActiveClusterSelectionPolicy): void {
		const target = this._fields
		const values = source._fields
		target.ClusterAttribute = values.ClusterAttribute
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([16])]
	}

	public GetClusterAttribute(): ClusterAttribute | $.VarRef<ClusterAttribute> | null {
		const m: ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null = this;
		if (m != null) {
			return $.pointerValue<ActiveClusterSelectionPolicy>(m).ClusterAttribute
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusterSelectionPolicy).Size() : ActiveClusterSelectionPolicy.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple16: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusterSelectionPolicy).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ActiveClusterSelectionPolicy.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple16[0]
		err = __goscriptTuple16[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusterSelectionPolicy).Size() : ActiveClusterSelectionPolicy.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusterSelectionPolicy).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ActiveClusterSelectionPolicy.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null = this;
		const m$: ActiveClusterSelectionPolicy = m == null ? $.pointerTarget<ActiveClusterSelectionPolicy>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ActiveClusterSelectionPolicy>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ActiveClusterSelectionPolicy).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ActiveClusterSelectionPolicy).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ActiveClusterSelectionPolicy).XXX_unrecognized)
		}
		if ((m$ as ActiveClusterSelectionPolicy).ClusterAttribute != null) {
			{
				let [size, err] = ClusterAttribute.prototype.MarshalToSizedBuffer.call((m$ as ActiveClusterSelectionPolicy).ClusterAttribute, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintCommon(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null = this;
		$.assignStruct($.pointerValue<ActiveClusterSelectionPolicy>(m), $.markAsStructValue(new ActiveClusterSelectionPolicy()))
	}

	public Size(): number {
		const m: ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null = this;
		let n: number = 0
		const m$: ActiveClusterSelectionPolicy = m == null ? $.pointerTarget<ActiveClusterSelectionPolicy>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ActiveClusterSelectionPolicy>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as ActiveClusterSelectionPolicy).ClusterAttribute != null) {
			l = ClusterAttribute.prototype.Size.call((m$ as ActiveClusterSelectionPolicy).ClusterAttribute)
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as ActiveClusterSelectionPolicy).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ActiveClusterSelectionPolicy).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ActiveClusterSelectionPolicy", /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterSelectionPolicy")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null = this;
		const m$: ActiveClusterSelectionPolicy = m == null ? $.pointerTarget<ActiveClusterSelectionPolicy>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ActiveClusterSelectionPolicy>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow18 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: ActiveClusterSelectionPolicy: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ActiveClusterSelectionPolicy: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ClusterAttribute", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ActiveClusterSelectionPolicy).ClusterAttribute == null) {
						;(m$ as ActiveClusterSelectionPolicy).ClusterAttribute = new ClusterAttribute()
					}
					{
						let err = ClusterAttribute.prototype.Unmarshal.call((m$ as ActiveClusterSelectionPolicy).ClusterAttribute, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ActiveClusterSelectionPolicy).XXX_unrecognized = $.appendSlice((m$ as ActiveClusterSelectionPolicy).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null = this;
		xxx_messageInfo_ActiveClusterSelectionPolicy.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ActiveClusterSelectionPolicy", /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterSelectionPolicy")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ActiveClusterSelectionPolicy.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ActiveClusterSelectionPolicy", /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterSelectionPolicy")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusterSelectionPolicy).MarshalToSizedBuffer(b) : ActiveClusterSelectionPolicy.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null = this;
		xxx_messageInfo_ActiveClusterSelectionPolicy.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ActiveClusterSelectionPolicy", /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterSelectionPolicy")), src)
	}

	public XXX_Size(): number {
		const m: ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusterSelectionPolicy).Size() : ActiveClusterSelectionPolicy.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusterSelectionPolicy).Unmarshal(b) : ActiveClusterSelectionPolicy.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ActiveClusterSelectionPolicy",
		() => new ActiveClusterSelectionPolicy(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetClusterAttribute", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ClusterAttribute") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ActiveClusterSelectionPolicy,
		() => [{ name: "ClusterAttribute", key: "ClusterAttribute", type: /* @__PURE__ */ $.pointerType("apiv1.ClusterAttribute"), tag: "protobuf:\"bytes,4,opt,name=cluster_attribute,json=clusterAttribute,proto3\" json:\"cluster_attribute,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ClusterAttribute {
	public get Scope(): string {
		return this._fields.Scope
	}

	public set Scope(value: string) {
		this._fields.Scope = value
	}

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
		Scope: string
		Name: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Scope?: string, Name?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Scope: init?.Scope ?? ("" as string),
			Name: init?.Name ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClusterAttribute {
		return new ClusterAttribute(this, true)
	}

	public __goscriptAssign(source: ClusterAttribute): void {
		const target = this._fields
		const values = source._fields
		target.Scope = values.Scope
		target.Name = values.Name
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([17])]
	}

	public GetName(): string {
		const m: ClusterAttribute | $.VarRef<ClusterAttribute> | null = this;
		if (m != null) {
			return $.pointerValue<ClusterAttribute>(m).Name
		}
		return ""
	}

	public GetScope(): string {
		const m: ClusterAttribute | $.VarRef<ClusterAttribute> | null = this;
		if (m != null) {
			return $.pointerValue<ClusterAttribute>(m).Scope
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ClusterAttribute | $.VarRef<ClusterAttribute> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterAttribute).Size() : ClusterAttribute.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple17: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterAttribute).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ClusterAttribute.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple17[0]
		err = __goscriptTuple17[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ClusterAttribute | $.VarRef<ClusterAttribute> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterAttribute).Size() : ClusterAttribute.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterAttribute).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ClusterAttribute.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ClusterAttribute | $.VarRef<ClusterAttribute> | null = this;
		const m$: ClusterAttribute = m == null ? $.pointerTarget<ClusterAttribute>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ClusterAttribute>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ClusterAttribute).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ClusterAttribute).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ClusterAttribute).XXX_unrecognized)
		}
		if ($.stringLen((m$ as ClusterAttribute).Name) > 0) {
			i = i - ($.stringLen((m$ as ClusterAttribute).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ClusterAttribute).Name)
			i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen((m$ as ClusterAttribute).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as ClusterAttribute).Scope) > 0) {
			i = i - ($.stringLen((m$ as ClusterAttribute).Scope))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ClusterAttribute).Scope)
			i = encodeVarintCommon(dAtA, i, $.uint64($.stringLen((m$ as ClusterAttribute).Scope)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ClusterAttribute | $.VarRef<ClusterAttribute> | null = this;
		$.assignStruct($.pointerValue<ClusterAttribute>(m), $.markAsStructValue(new ClusterAttribute()))
	}

	public Size(): number {
		const m: ClusterAttribute | $.VarRef<ClusterAttribute> | null = this;
		let n: number = 0
		const m$: ClusterAttribute = m == null ? $.pointerTarget<ClusterAttribute>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ClusterAttribute>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ClusterAttribute).Scope)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		l = $.stringLen((m$ as ClusterAttribute).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as ClusterAttribute).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ClusterAttribute).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ClusterAttribute | $.VarRef<ClusterAttribute> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ClusterAttribute", /* @__PURE__ */ $.pointerType("apiv1.ClusterAttribute")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ClusterAttribute | $.VarRef<ClusterAttribute> | null = this;
		const m$: ClusterAttribute = m == null ? $.pointerTarget<ClusterAttribute>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ClusterAttribute>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow19 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: ClusterAttribute: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ClusterAttribute: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Scope", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ClusterAttribute).Scope = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Name", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
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
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ClusterAttribute).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ClusterAttribute).XXX_unrecognized = $.appendSlice((m$ as ClusterAttribute).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ClusterAttribute | $.VarRef<ClusterAttribute> | null = this;
		xxx_messageInfo_ClusterAttribute.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ClusterAttribute", /* @__PURE__ */ $.pointerType("apiv1.ClusterAttribute")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ClusterAttribute | $.VarRef<ClusterAttribute> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ClusterAttribute.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ClusterAttribute", /* @__PURE__ */ $.pointerType("apiv1.ClusterAttribute")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterAttribute).MarshalToSizedBuffer(b) : ClusterAttribute.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ClusterAttribute | $.VarRef<ClusterAttribute> | null = this;
		xxx_messageInfo_ClusterAttribute.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ClusterAttribute", /* @__PURE__ */ $.pointerType("apiv1.ClusterAttribute")), src)
	}

	public XXX_Size(): number {
		const m: ClusterAttribute | $.VarRef<ClusterAttribute> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterAttribute).Size() : ClusterAttribute.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ClusterAttribute | $.VarRef<ClusterAttribute> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterAttribute).Unmarshal(b) : ClusterAttribute.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ClusterAttribute",
		() => new ClusterAttribute(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetScope", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ClusterAttribute,
		() => [{ name: "Scope", key: "Scope", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=scope,proto3\" json:\"scope,omitempty\"" }, { name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class PaginationOptions {
	// page_size configures the number of results to be returned as part of each page
	public get PageSize(): number {
		return this._fields.PageSize
	}

	public set PageSize(value: number) {
		this._fields.PageSize = value
	}

	// next_page_token should be provided from a previous response to fetch the next page.
	// if empty, the first page will be returned.
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
		PageSize: number
		NextPageToken: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{PageSize?: number, NextPageToken?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			PageSize: init?.PageSize ?? (0 as number),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PaginationOptions {
		return new PaginationOptions(this, true)
	}

	public __goscriptAssign(source: PaginationOptions): void {
		const target = this._fields
		const values = source._fields
		target.PageSize = values.PageSize
		target.NextPageToken = values.NextPageToken
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([18])]
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: PaginationOptions | $.VarRef<PaginationOptions> | null = this;
		if (m != null) {
			return $.pointerValue<PaginationOptions>(m).NextPageToken
		}
		return null
	}

	public GetPageSize(): number {
		const m: PaginationOptions | $.VarRef<PaginationOptions> | null = this;
		if (m != null) {
			return $.pointerValue<PaginationOptions>(m).PageSize
		}
		return 0
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: PaginationOptions | $.VarRef<PaginationOptions> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PaginationOptions).Size() : PaginationOptions.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple18: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PaginationOptions).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PaginationOptions.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple18[0]
		err = __goscriptTuple18[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PaginationOptions | $.VarRef<PaginationOptions> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PaginationOptions).Size() : PaginationOptions.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PaginationOptions).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PaginationOptions.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PaginationOptions | $.VarRef<PaginationOptions> | null = this;
		const m$: PaginationOptions = m == null ? $.pointerTarget<PaginationOptions>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PaginationOptions>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as PaginationOptions).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as PaginationOptions).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PaginationOptions).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as PaginationOptions).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as PaginationOptions).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PaginationOptions).NextPageToken)
			i = encodeVarintCommon(dAtA, i, $.uint64($.sliceLen((m$ as PaginationOptions).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as PaginationOptions).PageSize != 0) {
			i = encodeVarintCommon(dAtA, i, $.uint64((m$ as PaginationOptions).PageSize))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: PaginationOptions | $.VarRef<PaginationOptions> | null = this;
		$.assignStruct($.pointerValue<PaginationOptions>(m), $.markAsStructValue(new PaginationOptions()))
	}

	public Size(): number {
		const m: PaginationOptions | $.VarRef<PaginationOptions> | null = this;
		let n: number = 0
		const m$: PaginationOptions = m == null ? $.pointerTarget<PaginationOptions>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PaginationOptions>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as PaginationOptions).PageSize != 0) {
			n = n + (1 + sovCommon($.uint64((m$ as PaginationOptions).PageSize)))
		}
		l = $.sliceLen((m$ as PaginationOptions).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovCommon($.uint64(l)))
		}
		if ((m$ as PaginationOptions).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as PaginationOptions).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: PaginationOptions | $.VarRef<PaginationOptions> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.PaginationOptions", /* @__PURE__ */ $.pointerType("apiv1.PaginationOptions")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: PaginationOptions | $.VarRef<PaginationOptions> | null = this;
		const m$: PaginationOptions = m == null ? $.pointerTarget<PaginationOptions>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PaginationOptions>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow20 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowCommon
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
				return fmt.Errorf("proto: PaginationOptions: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: PaginationOptions: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field PageSize", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as PaginationOptions).PageSize = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowCommon
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, iNdEx)] as number)
						iNdEx++;
						;(m$ as PaginationOptions).PageSize = (m$ as PaginationOptions).PageSize | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
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
							return ErrIntOverflowCommon
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthCommon
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthCommon
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PaginationOptions).NextPageToken = $.appendSlice($.goSlice((m$ as PaginationOptions).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as PaginationOptions).NextPageToken == null) {
						;(m$ as PaginationOptions).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipCommon($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthCommon
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PaginationOptions).XXX_unrecognized = $.appendSlice((m$ as PaginationOptions).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: PaginationOptions | $.VarRef<PaginationOptions> | null = this;
		xxx_messageInfo_PaginationOptions.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.PaginationOptions", /* @__PURE__ */ $.pointerType("apiv1.PaginationOptions")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: PaginationOptions | $.VarRef<PaginationOptions> | null = this;
		if (deterministic) {
			return xxx_messageInfo_PaginationOptions.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.PaginationOptions", /* @__PURE__ */ $.pointerType("apiv1.PaginationOptions")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PaginationOptions).MarshalToSizedBuffer(b) : PaginationOptions.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: PaginationOptions | $.VarRef<PaginationOptions> | null = this;
		xxx_messageInfo_PaginationOptions.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.PaginationOptions", /* @__PURE__ */ $.pointerType("apiv1.PaginationOptions")), src)
	}

	public XXX_Size(): number {
		const m: PaginationOptions | $.VarRef<PaginationOptions> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PaginationOptions).Size() : PaginationOptions.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: PaginationOptions | $.VarRef<PaginationOptions> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PaginationOptions).Unmarshal(b) : PaginationOptions.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.PaginationOptions",
		() => new PaginationOptions(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetNextPageToken", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "GetPageSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		PaginationOptions,
		() => [{ name: "PageSize", key: "PageSize", type: /* @__PURE__ */ $.basicType("int32"), tag: "protobuf:\"varint,1,opt,name=page_size,json=pageSize,proto3\" json:\"page_size,omitempty\"" }, { name: "NextPageToken", key: "NextPageToken", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export const FailureCategory_FAILURE_CATEGORY_INVALID: FailureCategory = 0

export const FailureCategory_FAILURE_CATEGORY_POLL: FailureCategory = 1

export const FailureCategory_FAILURE_CATEGORY_STANDARD: FailureCategory = 2

export const FailureCategory_FAILURE_CATEGORY_FATAL: FailureCategory = 3

export const EncodingType_ENCODING_TYPE_INVALID: EncodingType = 0

export const EncodingType_ENCODING_TYPE_THRIFTRW: EncodingType = 1

export const EncodingType_ENCODING_TYPE_JSON: EncodingType = 2

export const EncodingType_ENCODING_TYPE_PROTO3: EncodingType = 3

export const IsolationGroupState_ISOLATION_GROUP_STATE_INVALID: IsolationGroupState = 0

export const IsolationGroupState_ISOLATION_GROUP_STATE_HEALTHY: IsolationGroupState = 1

export const IsolationGroupState_ISOLATION_GROUP_STATE_DRAINED: IsolationGroupState = 2

export const FailoverType_FAILOVER_TYPE_INVALID: FailoverType = 0

export const FailoverType_FAILOVER_TYPE_FORCE: FailoverType = 1

export const FailoverType_FAILOVER_TYPE_GRACEFUL: FailoverType = 2

export let FailureCategory_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "FAILURE_CATEGORY_INVALID"], [1, "FAILURE_CATEGORY_POLL"], [2, "FAILURE_CATEGORY_STANDARD"], [3, "FAILURE_CATEGORY_FATAL"]])

export function __goscript_set_FailureCategory_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	FailureCategory_name = __goscriptValue
}

export let FailureCategory_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["FAILURE_CATEGORY_INVALID", 0], ["FAILURE_CATEGORY_POLL", 1], ["FAILURE_CATEGORY_STANDARD", 2], ["FAILURE_CATEGORY_FATAL", 3]])

export function __goscript_set_FailureCategory_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	FailureCategory_value = __goscriptValue
}

export function FailureCategory_String(x: FailureCategory): string {
	return proto.EnumName(FailureCategory_name, $.int(x, 32))
}

export function FailureCategory_EnumDescriptor(recv: FailureCategory): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([0])]
}

export let EncodingType_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "ENCODING_TYPE_INVALID"], [1, "ENCODING_TYPE_THRIFTRW"], [2, "ENCODING_TYPE_JSON"], [3, "ENCODING_TYPE_PROTO3"]])

export function __goscript_set_EncodingType_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	EncodingType_name = __goscriptValue
}

export let EncodingType_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["ENCODING_TYPE_INVALID", 0], ["ENCODING_TYPE_THRIFTRW", 1], ["ENCODING_TYPE_JSON", 2], ["ENCODING_TYPE_PROTO3", 3]])

export function __goscript_set_EncodingType_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	EncodingType_value = __goscriptValue
}

export function EncodingType_String(x: EncodingType): string {
	return proto.EnumName(EncodingType_name, $.int(x, 32))
}

export function EncodingType_EnumDescriptor(recv: EncodingType): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([1])]
}

export let IsolationGroupState_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "ISOLATION_GROUP_STATE_INVALID"], [1, "ISOLATION_GROUP_STATE_HEALTHY"], [2, "ISOLATION_GROUP_STATE_DRAINED"]])

export function __goscript_set_IsolationGroupState_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	IsolationGroupState_name = __goscriptValue
}

export let IsolationGroupState_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["ISOLATION_GROUP_STATE_INVALID", 0], ["ISOLATION_GROUP_STATE_HEALTHY", 1], ["ISOLATION_GROUP_STATE_DRAINED", 2]])

export function __goscript_set_IsolationGroupState_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	IsolationGroupState_value = __goscriptValue
}

export function IsolationGroupState_String(x: IsolationGroupState): string {
	return proto.EnumName(IsolationGroupState_name, $.int(x, 32))
}

export function IsolationGroupState_EnumDescriptor(recv: IsolationGroupState): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([2])]
}

export let FailoverType_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "FAILOVER_TYPE_INVALID"], [1, "FAILOVER_TYPE_FORCE"], [2, "FAILOVER_TYPE_GRACEFUL"]])

export function __goscript_set_FailoverType_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	FailoverType_name = __goscriptValue
}

export let FailoverType_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["FAILOVER_TYPE_INVALID", 0], ["FAILOVER_TYPE_FORCE", 1], ["FAILOVER_TYPE_GRACEFUL", 2]])

export function __goscript_set_FailoverType_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	FailoverType_value = __goscriptValue
}

export function FailoverType_String(x: FailoverType): string {
	return proto.EnumName(FailoverType_name, $.int(x, 32))
}

export function FailoverType_EnumDescriptor(recv: FailoverType): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_0ff151d4a308b356, $.arrayToSlice<number>([3])]
}

export let xxx_messageInfo_WorkflowExecution: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_WorkflowExecution(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_WorkflowExecution.value, __goscriptValue)
}

export let xxx_messageInfo_WorkflowType: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_WorkflowType(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_WorkflowType.value, __goscriptValue)
}

export let xxx_messageInfo_ActivityType: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ActivityType(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ActivityType.value, __goscriptValue)
}

export let xxx_messageInfo_Payload: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Payload(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Payload.value, __goscriptValue)
}

export let xxx_messageInfo_Failure: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Failure(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Failure.value, __goscriptValue)
}

export let xxx_messageInfo_FailureOptions: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_FailureOptions(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_FailureOptions.value, __goscriptValue)
}

export let xxx_messageInfo_Memo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Memo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Memo.value, __goscriptValue)
}

export let xxx_messageInfo_Header: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Header(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Header.value, __goscriptValue)
}

export let xxx_messageInfo_SearchAttributes: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_SearchAttributes(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_SearchAttributes.value, __goscriptValue)
}

export let xxx_messageInfo_DataBlob: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DataBlob(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DataBlob.value, __goscriptValue)
}

export let xxx_messageInfo_WorkerVersionInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_WorkerVersionInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_WorkerVersionInfo.value, __goscriptValue)
}

export let xxx_messageInfo_SupportedClientVersions: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_SupportedClientVersions(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_SupportedClientVersions.value, __goscriptValue)
}

export let xxx_messageInfo_RetryPolicy: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RetryPolicy(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RetryPolicy.value, __goscriptValue)
}

export let xxx_messageInfo_IsolationGroupPartition: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_IsolationGroupPartition(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_IsolationGroupPartition.value, __goscriptValue)
}

export let xxx_messageInfo_IsolationGroupConfiguration: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_IsolationGroupConfiguration(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_IsolationGroupConfiguration.value, __goscriptValue)
}

export let xxx_messageInfo_AsyncWorkflowConfiguration: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_AsyncWorkflowConfiguration(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_AsyncWorkflowConfiguration.value, __goscriptValue)
}

export let xxx_messageInfo_ActiveClusterSelectionPolicy: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ActiveClusterSelectionPolicy(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ActiveClusterSelectionPolicy.value, __goscriptValue)
}

export let xxx_messageInfo_ClusterAttribute: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ClusterAttribute(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ClusterAttribute.value, __goscriptValue)
}

export let xxx_messageInfo_PaginationOptions: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_PaginationOptions(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_PaginationOptions.value, __goscriptValue)
}

function __goscriptInit0(): void {
	proto.RegisterEnum("uber.cadence.api.v1.FailureCategory", FailureCategory_name, FailureCategory_value)
	proto.RegisterEnum("uber.cadence.api.v1.EncodingType", EncodingType_name, EncodingType_value)
	proto.RegisterEnum("uber.cadence.api.v1.IsolationGroupState", IsolationGroupState_name, IsolationGroupState_value)
	proto.RegisterEnum("uber.cadence.api.v1.FailoverType", FailoverType_name, FailoverType_value)
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")), "uber.cadence.api.v1.WorkflowExecution")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.WorkflowType", /* @__PURE__ */ $.pointerType("apiv1.WorkflowType")), "uber.cadence.api.v1.WorkflowType")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ActivityType", /* @__PURE__ */ $.pointerType("apiv1.ActivityType")), "uber.cadence.api.v1.ActivityType")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.Payload", /* @__PURE__ */ $.pointerType("apiv1.Payload")), "uber.cadence.api.v1.Payload")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.Failure", /* @__PURE__ */ $.pointerType("apiv1.Failure")), "uber.cadence.api.v1.Failure")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.FailureOptions", /* @__PURE__ */ $.pointerType("apiv1.FailureOptions")), "uber.cadence.api.v1.FailureOptions")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.Memo", /* @__PURE__ */ $.pointerType("apiv1.Memo")), "uber.cadence.api.v1.Memo")
	proto.RegisterMapType($.interfaceValue(null, "map[string]*apiv1.Payload", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.Payload"))), "uber.cadence.api.v1.Memo.FieldsEntry")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.Header", /* @__PURE__ */ $.pointerType("apiv1.Header")), "uber.cadence.api.v1.Header")
	proto.RegisterMapType($.interfaceValue(null, "map[string]*apiv1.Payload", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.Payload"))), "uber.cadence.api.v1.Header.FieldsEntry")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.SearchAttributes", /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes")), "uber.cadence.api.v1.SearchAttributes")
	proto.RegisterMapType($.interfaceValue(null, "map[string]*apiv1.Payload", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.Payload"))), "uber.cadence.api.v1.SearchAttributes.IndexedFieldsEntry")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DataBlob", /* @__PURE__ */ $.pointerType("apiv1.DataBlob")), "uber.cadence.api.v1.DataBlob")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.WorkerVersionInfo", /* @__PURE__ */ $.pointerType("apiv1.WorkerVersionInfo")), "uber.cadence.api.v1.WorkerVersionInfo")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.SupportedClientVersions", /* @__PURE__ */ $.pointerType("apiv1.SupportedClientVersions")), "uber.cadence.api.v1.SupportedClientVersions")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RetryPolicy", /* @__PURE__ */ $.pointerType("apiv1.RetryPolicy")), "uber.cadence.api.v1.RetryPolicy")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.IsolationGroupPartition", /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupPartition")), "uber.cadence.api.v1.IsolationGroupPartition")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.IsolationGroupConfiguration", /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupConfiguration")), "uber.cadence.api.v1.IsolationGroupConfiguration")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.AsyncWorkflowConfiguration", /* @__PURE__ */ $.pointerType("apiv1.AsyncWorkflowConfiguration")), "uber.cadence.api.v1.AsyncWorkflowConfiguration")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ActiveClusterSelectionPolicy", /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterSelectionPolicy")), "uber.cadence.api.v1.ActiveClusterSelectionPolicy")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ClusterAttribute", /* @__PURE__ */ $.pointerType("apiv1.ClusterAttribute")), "uber.cadence.api.v1.ClusterAttribute")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.PaginationOptions", /* @__PURE__ */ $.pointerType("apiv1.PaginationOptions")), "uber.cadence.api.v1.PaginationOptions")
}

function __goscriptInit1(): void {
	proto.RegisterFile("uber/cadence/api/v1/common.proto", fileDescriptor_0ff151d4a308b356)
}

export let fileDescriptor_0ff151d4a308b356: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 188, 86, 91, 115, 219, 196, 23, 255, 203, 174, 115, 57, 78, 19, 101, 211, 38, 78, 218, 228, 159, 154, 75, 67, 6, 236, 137, 251, 210, 1, 10, 184, 190, 36, 106, 141, 109, 214, 110, 67, 121, 168, 102, 45, 173, 221, 37, 178, 86, 72, 43, 55, 238, 3, 195, 11, 95, 131, 7, 158, 249, 32, 204, 240, 194, 12, 95, 128, 233, 39, 97, 86, 90, 197, 118, 226, 82, 30, 24, 222, 180, 231, 247, 59, 151, 61, 58, 151, 133, 253, 176, 71, 253, 162, 69, 108, 234, 90, 180, 72, 60, 86, 28, 29, 21, 45, 62, 28, 114, 183, 224, 249, 92, 112, 180, 33, 25, 5, 197, 40, 16, 143, 21, 70, 71, 59, 123, 3, 206, 7, 14, 45, 70, 148, 94, 216, 47, 218, 161, 79, 4, 75, 148, 242, 143, 97, 253, 148, 251, 103, 125, 135, 191, 172, 157, 83, 43, 148, 16, 250, 63, 100, 95, 42, 161, 201, 236, 156, 182, 175, 29, 44, 99, 72, 68, 134, 141, 110, 194, 130, 31, 186, 18, 75, 69, 88, 198, 15, 93, 195, 206, 231, 97, 37, 49, 214, 29, 123, 20, 33, 184, 230, 146, 33, 85, 6, 162, 111, 201, 41, 91, 130, 141, 152, 24, 191, 145, 179, 11, 139, 109, 50, 118, 56, 177, 37, 108, 19, 65, 34, 120, 5, 71, 223, 249, 87, 176, 88, 39, 204, 9, 125, 138, 54, 97, 193, 167, 36, 224, 174, 210, 87, 39, 148, 131, 69, 155, 10, 194, 156, 32, 138, 112, 5, 39, 71, 244, 0, 22, 185, 39, 111, 25, 228, 210, 251, 218, 65, 182, 244, 78, 97, 78, 222, 10, 202, 65, 43, 166, 226, 68, 39, 255, 139, 6, 171, 179, 24, 106, 129, 222, 143, 37, 166, 69, 4, 29, 112, 127, 28, 69, 179, 90, 122, 247, 239, 76, 87, 20, 23, 175, 245, 103, 5, 200, 128, 13, 151, 158, 11, 211, 167, 194, 31, 155, 204, 21, 212, 31, 17, 39, 186, 72, 182, 180, 93, 136, 255, 104, 33, 249, 163, 133, 170, 250, 163, 120, 93, 106, 97, 169, 100, 40, 157, 252, 79, 26, 92, 251, 146, 14, 57, 122, 0, 11, 125, 70, 29, 59, 200, 105, 251, 233, 131, 108, 233, 189, 185, 161, 73, 106, 161, 30, 241, 106, 174, 240, 199, 88, 41, 237, 156, 66, 118, 74, 140, 116, 72, 159, 209, 177, 202, 185, 252, 68, 37, 200, 140, 136, 19, 82, 21, 229, 237, 185, 230, 213, 79, 197, 49, 245, 227, 212, 125, 45, 255, 179, 6, 11, 39, 148, 216, 212, 71, 159, 95, 10, 241, 238, 92, 27, 49, 249, 191, 13, 242, 15, 13, 244, 14, 37, 190, 245, 162, 44, 132, 207, 122, 161, 160, 1, 50, 97, 149, 185, 54, 61, 167, 182, 57, 19, 246, 253, 185, 86, 47, 171, 23, 140, 88, 119, 250, 30, 215, 217, 180, 108, 231, 57, 160, 171, 164, 127, 241, 86, 125, 88, 170, 18, 65, 30, 58, 188, 135, 234, 112, 157, 186, 22, 183, 153, 59, 48, 197, 216, 163, 170, 128, 239, 204, 181, 85, 83, 76, 217, 191, 120, 133, 78, 157, 46, 218, 53, 53, 213, 174, 237, 120, 196, 80, 255, 41, 245, 3, 198, 93, 195, 237, 115, 73, 100, 67, 207, 73, 218, 94, 126, 163, 187, 176, 214, 167, 68, 200, 70, 26, 197, 84, 53, 94, 86, 149, 88, 25, 200, 63, 134, 173, 78, 232, 121, 220, 23, 212, 174, 56, 140, 186, 66, 33, 129, 156, 76, 3, 110, 6, 246, 153, 178, 156, 25, 240, 142, 125, 134, 182, 97, 233, 91, 50, 34, 17, 16, 219, 92, 148, 231, 142, 125, 150, 255, 33, 13, 217, 168, 105, 218, 220, 97, 214, 24, 85, 65, 103, 46, 19, 140, 56, 147, 214, 211, 222, 214, 122, 107, 74, 37, 105, 60, 84, 132, 141, 30, 177, 206, 120, 191, 111, 90, 156, 246, 251, 204, 146, 97, 70, 190, 53, 140, 20, 84, 153, 32, 210, 237, 144, 156, 179, 97, 56, 156, 184, 77, 191, 213, 173, 82, 185, 112, 251, 193, 196, 10, 17, 130, 14, 61, 17, 228, 174, 237, 107, 7, 153, 11, 106, 89, 137, 209, 3, 184, 229, 114, 55, 30, 50, 164, 231, 80, 147, 250, 62, 247, 205, 120, 128, 6, 185, 204, 126, 250, 96, 25, 231, 92, 238, 226, 132, 81, 147, 4, 28, 227, 232, 17, 108, 208, 115, 143, 197, 129, 76, 66, 94, 120, 91, 200, 104, 162, 117, 49, 165, 134, 176, 101, 4, 220, 137, 132, 199, 62, 15, 189, 54, 241, 5, 139, 86, 209, 156, 245, 128, 62, 131, 76, 32, 136, 136, 11, 126, 181, 116, 48, 183, 72, 103, 13, 118, 36, 31, 199, 106, 249, 17, 220, 154, 69, 43, 220, 237, 179, 129, 138, 16, 157, 130, 206, 18, 216, 28, 72, 60, 105, 237, 15, 255, 129, 167, 139, 208, 241, 26, 155, 1, 130, 252, 111, 26, 236, 148, 131, 177, 107, 37, 75, 114, 214, 111, 14, 22, 169, 43, 243, 28, 111, 220, 37, 156, 28, 81, 9, 110, 122, 62, 181, 105, 159, 185, 212, 54, 191, 11, 105, 72, 205, 40, 43, 113, 41, 111, 76, 192, 175, 36, 214, 148, 73, 218, 5, 136, 137, 81, 59, 167, 35, 226, 114, 36, 137, 26, 245, 11, 88, 137, 97, 43, 138, 33, 42, 146, 108, 105, 119, 238, 5, 147, 41, 129, 179, 145, 74, 28, 117, 222, 135, 219, 209, 34, 167, 21, 39, 12, 4, 245, 59, 212, 161, 150, 188, 136, 234, 35, 12, 235, 86, 140, 200, 82, 140, 199, 158, 114, 51, 127, 249, 40, 59, 23, 51, 18, 235, 214, 37, 73, 254, 83, 208, 47, 179, 208, 13, 200, 4, 22, 247, 146, 18, 137, 15, 23, 117, 147, 154, 122, 86, 124, 13, 235, 109, 50, 96, 110, 148, 238, 100, 123, 223, 130, 101, 143, 12, 168, 25, 176, 87, 177, 137, 12, 94, 146, 130, 14, 123, 69, 209, 251, 176, 22, 109, 226, 136, 33, 248, 25, 117, 213, 100, 187, 46, 197, 109, 50, 160, 93, 41, 60, 252, 81, 131, 181, 75, 107, 29, 221, 134, 92, 189, 108, 52, 158, 224, 154, 89, 41, 119, 107, 199, 45, 252, 204, 52, 154, 79, 203, 13, 163, 170, 255, 15, 109, 195, 205, 43, 104, 187, 213, 104, 232, 26, 218, 133, 237, 43, 80, 167, 91, 110, 86, 203, 184, 170, 167, 208, 14, 108, 94, 129, 235, 229, 110, 185, 161, 167, 15, 95, 194, 202, 244, 112, 150, 94, 106, 205, 74, 171, 106, 52, 143, 205, 238, 179, 118, 109, 42, 128, 29, 216, 156, 133, 186, 39, 216, 168, 119, 241, 169, 174, 161, 77, 64, 179, 216, 163, 78, 171, 169, 167, 80, 14, 110, 204, 202, 219, 184, 213, 109, 221, 211, 211, 135, 223, 195, 198, 156, 134, 67, 119, 96, 215, 232, 180, 26, 229, 174, 209, 106, 154, 199, 184, 245, 164, 45, 111, 210, 157, 142, 227, 141, 148, 147, 90, 185, 209, 61, 121, 166, 107, 111, 166, 84, 113, 217, 104, 214, 170, 122, 234, 240, 57, 172, 200, 252, 243, 17, 245, 147, 139, 203, 36, 181, 158, 214, 240, 229, 139, 111, 193, 198, 44, 84, 111, 225, 74, 77, 215, 146, 196, 78, 128, 99, 92, 174, 212, 234, 79, 26, 122, 234, 225, 224, 215, 215, 123, 218, 239, 175, 247, 180, 63, 95, 239, 105, 176, 101, 241, 225, 188, 18, 126, 152, 173, 68, 15, 242, 182, 156, 122, 109, 237, 155, 163, 1, 19, 47, 194, 94, 193, 226, 195, 226, 244, 243, 253, 35, 102, 59, 197, 1, 143, 31, 229, 234, 45, 255, 9, 241, 216, 232, 168, 183, 16, 201, 238, 253, 21, 0, 0, 255, 255, 57, 142, 94, 101, 239, 11, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_0ff151d4a308b356(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_0ff151d4a308b356 = __goscriptValue
}

export function encodeVarintCommon(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovCommon(v))
	let base = offset
	for (let __goscriptSliceWindow21 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow21.backing as any[])[$.windowSlot(__goscriptSliceWindow21, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export function sovCommon(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozCommon(x: bigint): number {
	let n: number = 0
	return sovCommon($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export function skipCommon(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow22 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowCommon]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow22.backing as any[])[$.windowSlot(__goscriptSliceWindow22, iNdEx)] as number)
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
						return [0, ErrIntOverflowCommon]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow22.backing as any[])[$.windowSlot(__goscriptSliceWindow22, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowCommon]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow22.backing as any[])[$.windowSlot(__goscriptSliceWindow22, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthCommon]
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
					return [0, ErrUnexpectedEndOfGroupCommon]
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
			return [0, ErrInvalidLengthCommon]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthCommon: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthCommon(__goscriptValue: $.GoError): void {
	ErrInvalidLengthCommon = __goscriptValue
}

export let ErrIntOverflowCommon: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowCommon(__goscriptValue: $.GoError): void {
	ErrIntOverflowCommon = __goscriptValue
}

export let ErrUnexpectedEndOfGroupCommon: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupCommon(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupCommon = __goscriptValue
}

export { __goscriptInit0 }

export { __goscriptInit1 }
